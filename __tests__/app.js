'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const rimraf = require('rimraf')

describe('generator-webapp-rocket:app', () => {
  const projectName = 'test'
  const gqlAddress = 'localhost:4000'

  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '../.tmp'))
      .withPrompts({
        projectName,
        projectDescriptionName: 'test description',
        gqlAddress,
        theme: 'default',
        addHelm: true,
        identityClientId: 'id',
        identityScope: '',
        identityAuthority: 'localhost:5000',
        packageManager: 'npm'
      })
  })

  afterAll(() => {
    rimraf.sync(path.join(__dirname, '../.tmp'))
  })

  it('create component with given name', () => {
    const resPath = path.join(__dirname, `../.tmp/${projectName}/src/index.js`)
    assert.file(resPath)
  })

  it('project has given name', () => {
    assert.fileContent(
      path.join(__dirname, `../.tmp/${projectName}/package.json`),
      `"name": "${projectName}"`
    )
  })

  it('gql address is configured', () => {
    assert.fileContent(
      path.join(__dirname, `../.tmp/${projectName}/.env`),
      `REACT_APP_GQL=${gqlAddress}`
    )
  })

  it('helm files are added when addHelm option is true', () => {
    assert.file(path.join(__dirname, `../.tmp/${projectName}/helm`));
  });
})
