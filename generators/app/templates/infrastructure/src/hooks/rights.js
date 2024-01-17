import permissions from 'constants/permissions'
import { gql } from '@apollo/client'
import { useQueryWithErrorHandling } from './errorHandling'
import { useOidcUser } from '@axa-fr/react-oidc'
import { defaultTo, includes } from 'ramda';
import { getOidcConfigName } from "utils/functions";
import { emptyObject } from 'utils/constants'

const { viewSettings} = permissions
const GET_USER_DATA = gql`
    query userData($id: ID!, $withRights: Boolean!){
        userData(id: $id){
            id
            userName
            rights @include(if: $withRights)
        }
    }
`

export function useUserData({ withRights= false }) {
  const { oidcUser } = useOidcUser(getOidcConfigName())

  const userId = oidcUser?.sub

  const { data, ...rest } = useQueryWithErrorHandling(GET_USER_DATA, {
    variables: {
      id: userId,
      withRights
    },
    skip: !userId
  })
  const { user } = defaultTo(emptyObject, data)
  const rights = data?.userData?.rights
  const hasRightsTo = rights
    ? {
        canViewSettings: includes(viewSettings, rights)
      }
    : {}

  return { ...rest, userData: user ? { ...user, rights, hasRightsTo } : undefined }
}