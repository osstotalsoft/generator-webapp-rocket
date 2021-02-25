import permissions from 'constants/permissions'
import { gql } from '@apollo/client'
import { useQueryWithErrorHandling } from './errorHandling'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { includes } from 'ramda'

const { viewSettings } = permissions
const GET_USER_DATA = gql`
  query userData($externalId: ID!) {
    userData(externalId: $externalId) {
      id
      userName
      rights
    }
  }
`

export function useUserData() {
  const { oidcUser } = useReactOidc()
  const externalUserId = oidcUser?.profile?.sub

  const { data, ...res } = useQueryWithErrorHandling(GET_USER_DATA, {
    variables: {
      externalId: externalUserId
    },
    skip: !externalUserId
  })
  const rights = data?.userData?.rights

  return {
    ...res,
    userData: {
      ...data?.userData,
      rights: rights
        ? {
            canViewSettings: includes(viewSettings, rights)
          }
        : {}
    }
  }
}
