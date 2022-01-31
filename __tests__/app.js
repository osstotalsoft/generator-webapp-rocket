'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const rimraf = require('rimraf')

jest.setTimeout(30000);

describe('generator-webapp-rocket:app', () => {
  const tempRoot = `../.tmp`
  const projectName = 'test'
  const gqlAddress = 'localhost:4000'

  beforeAll(() => helpers
    .run(path.join(__dirname, '../generators/app'))
    .inDir(path.join(__dirname, tempRoot))
    .withPrompts({
      projectName,
      projectDescriptionName: 'test description',
      gqlAddress,
      theme: 'default',
      addHelm: true,
      packageManager: 'npm'
    }))

  afterAll(() => {
    rimraf.sync(path.join(__dirname, tempRoot))
  })

  it('create component with given name', () => {
    const resPath = path.join(__dirname, `${tempRoot}/${projectName}/src/index.js`)
    assert.file(resPath)
  })

  it('project has given name', () => {
    assert.fileContent(
      path.join(__dirname, `${tempRoot}/${projectName}/package.json`),
      `"name": "${projectName}"`
    )
  })

  it('gql address is configured', () => {
    assert.fileContent(
      path.join(__dirname, `${tempRoot}/${projectName}/.env`),
      `REACT_APP_GQL=${gqlAddress}`
    )
  })

  it('helm files are added when addHelm option is true', () => {
    assert.file(path.join(__dirname, `${tempRoot}/${projectName}/helm`));
  });
})
