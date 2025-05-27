'use strict'
import fs from 'fs'
import crypto from 'crypto'
import path from 'path'

const envFileRegEx = /env.([a-z0-9]*.)?js/g
const injectedObjectRegEx = /(const oidc = {[^}]*})/
const buildDir = './build'

// eslint-disable-next-line no-undef
const env = process.env

// Generate the configuration script from environment variables
function generateConfigScript() {
  const prefixRegexp = /^VITE_APP_/
  const config = Object.keys(env)
    .filter(key => prefixRegexp.test(key))
    .reduce((c, key) => Object.assign({}, c, { [key]: env[key] }), {})

  console.log(config)
  return `window.env=${JSON.stringify(config)};`
}

// Save the configuration script to disk
function saveConfigScript(scriptContents, scriptName) {
  const scriptPath = path.join(buildDir, scriptName)
  console.log('Saving file to: ' + scriptPath)
  fs.writeFile(scriptPath, scriptContents, 'utf8', function (err) {
    if (err) throw err

    console.log('The file was saved!')
  })
}

function setOidcDomains(scriptContents, trustedDomainsFile) {
  const scriptPath = path.join(buildDir, trustedDomainsFile)
  fs.readFile(scriptPath, 'utf8', function (err, data) {
    if (err) {
      console.error(err)
      return
    }
    const { VITE_APP_IDENTITY_AUTHORITY, VITE_APP_GQL_HTTP_PROTOCOL, VITE_APP_GQL } = env

    const injectedValue =
      'const oidc = ' +
      JSON.stringify({
        VITE_APP_IDENTITY_AUTHORITY,
        VITE_APP_GQL_HTTP_PROTOCOL,
        VITE_APP_GQL
      })

    data = data.replace(injectedObjectRegEx, injectedValue)

    console.log('Saving file to: ' + scriptPath)
    fs.writeFile(scriptPath, data, 'utf8', function (err) {
      if (err) throw err

      console.log('The file was saved!')
    })
  })
}

// Update configuration script name in index.html
function updateIndex(scriptName) {
  const indexPath = path.join(buildDir, 'index.html')

  fs.readFile(indexPath, 'utf8', function (err, data) {
    if (err) throw err

    let result = data.replace(envFileRegEx, scriptName)

    fs.writeFile(indexPath, result, 'utf8', function (err) {
      if (err) throw err
    })
  })
}

// Delete old configuration scripts from disk
function deleteOldScript(currentScriptName) {
  const files = fs.readdirSync(buildDir).filter(fn => fn != currentScriptName && fn.match(envFileRegEx))
  files.forEach(fn => {
    let filePath = path.join(buildDir, fn)
    fs.unlink(filePath, err => {
      if (err) throw err
    })
  })
}

// MAIN
console.log('Setting runtime envoronment..')
let scriptContents = generateConfigScript()
let scriptHash = crypto.createHash('sha256').update(scriptContents).digest('hex')
let scriptName = `env.${scriptHash}.js`
const trustedDomainsFile = 'OidcTrustedDomains.js'

saveConfigScript(scriptContents, scriptName)
setOidcDomains(scriptContents, trustedDomainsFile)
updateIndex(scriptName)
deleteOldScript(scriptName)
