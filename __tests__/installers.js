'use strict'
const path = require('path')
const rimraf = require('rimraf')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const { NPM_MIN_VERSION, YARN_MIN_VERSION } = require('../generators/app/constants')

describe('test package installers', () => {
  jest.setTimeout(10 * 1000)
  const projectName = 'test-graphql'
  const gqlPort = '4000'
  const tempRoot = `../.tmp`
  const npm = `>= ${NPM_MIN_VERSION}`
  const yarn = `>= ${YARN_MIN_VERSION}`

  beforeAll(() => {
    rimraf.sync(path.join(__dirname, tempRoot))
  })

  afterEach(() => {
    rimraf.sync(path.join(__dirname, tempRoot))
  })

  it('installs packages with npm', () =>
    helpers
      .create(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, tempRoot))
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
        identityAuthority: 'localhost:5000',
        packageManager: 'npm'
      })
      .run()
      .then(_gen => {
        assert.jsonFileContent(path.join(__dirname, `${tempRoot}/${projectName}/package.json`), {
          name: projectName,
          engines: { npm }
        })
      }))

  it('installs packages with yarn', () =>
    helpers
      .create(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, tempRoot))
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
        identityAuthority: 'localhost:5000',
        packageManager: 'yarn'
      })
      .run()
      .then(_gen => {
        assert.jsonFileContent(path.join(__dirname, `${tempRoot}/${projectName}/package.json`), {
          name: projectName,
          engines: { yarn }
        })
      }))
})
