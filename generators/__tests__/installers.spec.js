/* eslint-disable node/no-unpublished-import */
'use strict'
import path, { dirname } from 'path'
import assert from 'yeoman-assert'
// eslint-disable-next-line node/no-missing-import
import helpers from 'yeoman-test'
import { fileURLToPath } from 'url'
import { after, describe, it } from 'mocha'
import fs from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const projectName = 'test-project'
const gqlPort = '4000'
const npm = `>= 9.x`

describe('test package npm installer', function () {
  this.timeout(120 * 1000)

  after(() => {
    const testDir = path.join(__dirname, projectName)
    if (fs.existsSync(testDir)) fs.removeSync(testDir)
  })

  it('installs packages with npm', async function () {
    await helpers
      .run(path.join(__dirname, '../app'), { cwd: __dirname })
      .withPrompts({
        projectName,
        gqlPort,
        withMultiTenancy: true,
        addSubscriptions: true,
        addMessaging: false,
        withRights: true,
        addGqlLogging: true,
        addHelm: true,
        addTracing: true,
        identityApiUrl: '',
        identityOpenIdConfig: '',
        identityAuthority: 'localhost:5000'
      })
      .then(({ cwd }) => {
        assert.jsonFileContent(`${cwd}/${projectName}/package.json`, {
          name: projectName,
          engines: { npm }
        })
      })
  })
})
