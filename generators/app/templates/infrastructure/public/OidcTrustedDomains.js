//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Add below trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users,
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Service worker will continue to give access token to the JavaScript client
// Ideal to hide refresh token from client JavaScript, but to retrieve access_token for some
// scenarios which require it. For example, to send it via websocket connection.

const VITE_APP_URL = `${oidc.VITE_APP_GQL_HTTP_PROTOCOL}://${oidc.VITE_APP_GQL}/graphql`

// Domains used by OIDC server must be also declared here
const defaultTrustedDomains = {
  config_show_access_token: {
    domains: [oidc.VITE_APP_IDENTITY_AUTHORITY, VITE_APP_URL],
    showAccessToken: true
  }
}

const handler = {
  get(target, name) {
    if (name in target) {
      return target[name]
    }
    return {
      domains: [oidc.VITE_APP_IDENTITY_AUTHORITY, VITE_APP_URL],
      showAccessToken: true
    }
  }
}

const trustedDomains = new Proxy(defaultTrustedDomains, handler)
