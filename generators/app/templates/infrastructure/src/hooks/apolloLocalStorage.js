import { gql } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import { defaults } from 'apollo/defaultCacheData'
import { useQueryWithErrorHandling } from './errorHandling'

const getLocalStorageQuery = key => gql(`{${key} @client}`)

const safeRead = (data, key) => (!data || !data[key] || /^\s*$/.test(data[key]) ? defaults[key] : JSON.parse(data[key])?.value)

const useApolloLocalStorage = key => {
  const query = getLocalStorageQuery(key)
  const { data, client } = useQueryWithErrorHandling(query)
  const [value, setValue] = useState(safeRead(data, key))

  useEffect(() => {
    setValue(safeRead(data, key))
  }, [data, key])

  const handleSetData = useCallback(
    newValue => {
      const objValue = typeof newValue === 'function' ? newValue(value) : newValue
      client.writeQuery({
        query,
        data: { [key]: JSON.stringify({ value: objValue }) }
      })
    },
    [value, client, query, key]
  )

  return [value, handleSetData]
}

export { useApolloLocalStorage }
