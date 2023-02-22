'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const rimraf = require('rimraf')
const { projectNameQ, getQuestions } = require('../generators/app/questions')
const { findIndex } = require('ramda')

const tempRoot = `../.tmp`

describe('generator-webapp-rocket:app question validations', () => {
  it('project name input does not have an acceptable format', () => {
    const name = '& - a!'
    const validationResult = projectNameQ.validate(name)
    assert.notEqual(validationResult, true)
  })

  it('project name input has an acceptable format', () => {
    const name = 'my-project_a'
    const validationResult = projectNameQ.validate(name)
    assert.equal(validationResult, true)
  })

  it('helm chart name input does not have an acceptable format', () => {
    const name = '& - a!'
    const questions = getQuestions('test')
    const qIndex = findIndex(q => q.name === 'helmChartName', questions)
    const validationResult = questions[qIndex].validate(name)
    assert.notEqual(validationResult, true)
  })

  it('helm chart name input has an acceptable format', () => {
    const name = 'my-chart_a'
    const questions = getQuestions('test')
    const qIndex = findIndex(q => q.name === 'helmChartName', questions)
    const validationResult = questions[qIndex].validate(name)
    assert.equal(validationResult, true)
  })
})

describe('generator-webapp-rocket:app', () => {
  jest.setTimeout(10 * 1000)
  const projectName = 'test'
  const gqlAddress = 'localhost:4000'

  beforeAll(() =>
    helpers.run(path.join(__dirname, '../generators/app')).inDir(path.join(__dirname, tempRoot)).withPrompts({
      projectName,
      projectDescriptionName: 'test description',
      gqlAddress,
      theme: 'default',
      addHelm: true,
      packageManager: 'npm'
    })
  )

  afterAll(() => {
    rimraf.sync(path.join(__dirname, tempRoot))
  })

  it('create component with given name', () => {
    const resPath = path.join(__dirname, `${tempRoot}/${projectName}/src/index.js`)
    assert.file(resPath)
  })

  it('project has given name', () => {
    assert.fileContent(path.join(__dirname, `${tempRoot}/${projectName}/package.json`), `"name": "${projectName}"`)
  })

  it('gql address is configured', () => {
    assert.fileContent(path.join(__dirname, `${tempRoot}/${projectName}/.env`), `REACT_APP_GQL=${gqlAddress}`)
  })

  it('helm files are added when addHelm option is true', () => {
    assert.file(path.join(__dirname, `${tempRoot}/${projectName}/helm`))
  })
})
