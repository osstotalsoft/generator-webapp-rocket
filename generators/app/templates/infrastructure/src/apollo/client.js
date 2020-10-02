import { ApolloClient, ApolloLink,<% if (withSubscription) { %>split, <% } %> InMemoryCache } from "@apollo/client"
<%_ if (withSubscription) { _%>
import { WebSocketLink } from "@apollo/client/link/ws"
import { getMainDefinition } from "apollo-utilities"
<%_ } _%>
import { onError } from "@apollo/client/link/error"
import { RetryLink } from '@apollo/client/link/retry';
import { setContext } from "@apollo/client/link/context"
import { env } from "../utils/env"
import { createUploadLink } from 'apollo-upload-client'
import omitDeep from 'omit-deep-lodash'

<%_ if (withSubscription) { _%>
// Create a WebSocket link:
const wsLink = (token) => {
  const link = new WebSocketLink({
    uri: `${env.REACT_APP_GQL_WS_PROTOCOL}://${env.REACT_APP_GQL}/graphql`,
    options: {
      reconnect: token ? true : false,
      connectionParams: {
        authorization: token ? `Bearer ${token}` : ""
      },
      connectionCallback: (error) => {
        if (!error)
          return;

        console.log(`[Subscription error]: ${error.message}`)
        if (error.message === 'jwt expired') {
          // Close old websocket because a new one was created when the token expired
          link.subscriptionClient.close(true, false)
        }
      }
    },
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

  return link;
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

const authLink = (token) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      },
    }
  })
}

const omitTypenameLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, ['__typename'])
  }
  return forward(operation)
})

<%_ if (withSubscription) { _%>
const link = (token) => {
  return split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === "OperationDefinition" && operation === "subscription"
    },
    wsLink(token),
    httpLink
  );
}
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

const myAppLink = (token) => {
  return ApolloLink.from([omitTypenameLink, retryLink, authLink(token).concat(<% if (withSubscription) { %> link(token) <% } else { %> httpLink <%} %>)])
}

const cache = new InMemoryCache({
  typePolicies: {
    Page: {
      keyFields: ["afterId", "sortBy", "direction", "pageSize"]
    }<% if (withMultiTenancy) { %>,
    ExternalTenant: { keyFields: ["externalId"] }<% } %>
  }
})

export const client = (oidcUser) => {
  const token = oidcUser?.access_token || '';
  return new ApolloClient({
    link: myAppLink(token),
    cache
  })
}