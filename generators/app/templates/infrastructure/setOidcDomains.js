// Copyright 2023 cdiaconita
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
const fs = require('fs')
const dotenv = require('dotenv')

const injectedObjectRegEx = /(const oidc = {[^}]*})/

fs.readFile('public/OidcTrustedDomains.js', 'utf8', function (err, data) {
  if (err) {
    console.error(err)
    return
  }
  const result = dotenv.config()
  if (result.error) {
    const path = `.env`
    dotenv.config({ path })
  }

  const { REACT_APP_IDENTITY_AUTHORITY, REACT_APP_GQL_HTTP_PROTOCOL, REACT_APP_GQL } = process.env

  const injectedValue =
    'const oidc = ' +
    JSON.stringify({
      REACT_APP_IDENTITY_AUTHORITY,
      REACT_APP_GQL_HTTP_PROTOCOL,
      REACT_APP_GQL
    })

  if (data.match(injectedObjectRegEx)) {
    data = data.replace(injectedObjectRegEx, injectedValue)
  } else {
    data = injectedValue + data
  }

  fs.writeFile('public/OidcTrustedDomains.js', data, 'utf8', function (err) {
    if (err) throw err

    console.log('The file was saved!')
  })
})
