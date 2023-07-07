import permissions from 'constants/permissions'
import { gql } from '@apollo/client'
import { useQueryWithErrorHandling } from './errorHandling'
import { useOidcUser } from '@axa-fr/react-oidc'
import { includes } from 'ramda';
import { getOidcConfigName } from "utils/functions";

const { viewSettings} = permissions
const GET_USER_DATA = gql`
    query userData($externalId: ID!){
        userData(externalId: $externalId){
            id
            userName
            rights
        }
    }
`

export function useUserData() {
    const { oidcUser } = useOidcUser(getOidcConfigName());

    const externalUserId = oidcUser?.profile?.sub;

    const { data, ...res } = useQueryWithErrorHandling(GET_USER_DATA, {
        variables: {
            externalId: externalUserId
        },
        skip: !externalUserId
    })
    return { ...res, userData: data?.userData };
}

export const useRights = () => {
    const { oidcUser } = useOidcUser(getOidcConfigName());

    const externalUserId = oidcUser?.profile?.sub;

    const { data } = useQueryWithErrorHandling(GET_USER_DATA, {
        variables: {
            externalId: externalUserId
        },
        skip: !externalUserId
    })
    const rights = data?.userData?.rights

    return rights ? {
        canViewSettings: includes(viewSettings, rights)
    } : {}
}