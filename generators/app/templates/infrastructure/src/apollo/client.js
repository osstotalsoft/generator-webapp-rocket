import { ApolloClient, ApolloLink,<% if (withSubscription) { %>split, <% } %> InMemoryCache } from "@apollo/client"
<%_ if (withSubscription) { _%>
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities"
<%_ } _%>
import { onError } from "@apollo/client/link/error"
import { RetryLink } from '@apollo/client/link/retry';
import { env } from "../utils/env"
import { createUploadLink } from 'apollo-upload-client'
import omitDeep from 'omit-deep-lodash'

<%_ if (withSubscription) { _%>
let access_token

// Create a WebSocket link:
let wsLink
const getWsLink = () => {  
  let activeSocket, currentAccessToken
  if (!wsLink) {
    const wsClient = createClient({
      url: `${env.REACT_APP_GQL_WS_PROTOCOL}://${env.REACT_APP_GQL}/graphql`,
      keepAlive: 10000, // ping server every 10 seconds,
      connectionParams: async () => {
        currentAccessToken = access_token;
        return {
          authorization: access_token ? `Bearer ${access_token}` : ''
        }
      },
      on: {
        connected: socket => (activeSocket = socket),
        ping: async received => {
          if (!received) {
            if (activeSocket.readyState === WebSocket.OPEN && currentAccessToken !== access_token) {
              setTimeout(() => {
                activeSocket.close(1000, "Access token silent renew")
              }, 1000) // wait 1 second for the pong and then close the connection
            }
          }
        },
        closed: event => {
          console.log(`GraphQL WebSocket closed!: ${event.code} Reason: ${event.reason}`)
        } 
      }
    })
    wsLink = new GraphQLWsLink(wsClient)
    wsLink.setOnError(
      onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }))
  }
  return wsLink
}
<%_ } _%>

const httpLink = createUploadLink({
  uri: `${env.REACT_APP_GQL_HTTP_PROTOCOL}://${env.REACT_APP_GQL}/graphql`,
  onError: onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  }),
})

const omitTypenameLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, ['__typename'])
  }
  return forward(operation)
})

<%_ if (withSubscription) { _%>
const link = () => split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === "OperationDefinition" && operation === "subscription"
  },
  getWsLink(),
  httpLink
)
<%_ } _%>

const retryLink = new RetryLink({
  delay: {
    initial: 200,
    max: 2000,
    jitter: true
  },
  attempts: {
    max: 3
  }
});

const myAppLink = () => ApolloLink.from([omitTypenameLink, retryLink, <% if (withSubscription) { %> link() <% } else { %> httpLink <%} %>])

const cache = new InMemoryCache({
  typePolicies: {
    Page: {
      keyFields: ["afterId", "sortBy", "direction", "pageSize"]
    }<% if (withMultiTenancy) { %>,
    ExternalTenant: { keyFields: ["externalId"] }<% } %>
  }
})
<%_ if (withSubscription) { _%>
export function setAccessToken(accessToken) {
  access_token = accessToken
}
<%_ } _%>

let apolloClient
export const getApolloClient = () => {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: myAppLink(),
      cache
    })
  }
  return apolloClient
}
