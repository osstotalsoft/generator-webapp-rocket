/* eslint-disable node/no-unpublished-import */
'use strict'
import path, { dirname } from 'path'
// eslint-disable-next-line node/no-missing-import
import helpers, { result } from 'yeoman-test'
import { projectNameQ, getQuestions } from '../app/questions.js'
import { findIndex } from 'ramda'
import { expect } from 'chai'
import { fileURLToPath } from 'url'
import { after, before, describe, it } from 'mocha'
import fs from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const projectName = 'test-project'
const gqlAddress = 'localhost:4000'

describe('generator-webapp-rocket:app question validations', function () {
  it('project name input does not have an acceptable format', function () {
    const name = '& - a!'
    const validationResult = projectNameQ.validate(name)
    expect(validationResult).to.not.equal(true)
  })

  it('project name input has an acceptable format', function () {
    const name = 'my-project_a'
    const validationResult = projectNameQ.validate(name)
    expect(validationResult).to.equal(true)
  })

  it('helm chart name input does not have an acceptable format', function () {
    const name = '& - a!'
    const questions = getQuestions('test')
    const qIndex = findIndex(q => q.name === 'helmChartName', questions)
    const validationResult = questions[qIndex].validate(name)
    expect(validationResult).to.not.equal(true)
  })

  it('helm chart name input has an acceptable format', function () {
    const name = 'my-chart_a'
    const questions = getQuestions('test')
    const qIndex = findIndex(q => q.name === 'helmChartName', questions)
    const validationResult = questions[qIndex].validate(name)
    expect(validationResult).to.equal(true)
  })
})

describe('generator-webapp-rocket:app', function () {
  this.timeout(10 * 1000)

  before(async function () {
    await helpers
      .run(path.join(__dirname, '../app'), { cwd: __dirname })
      .withPrompts({
        projectName,
        projectDescriptionName: 'test description',
        gqlAddress,
        theme: 'default',
        addHelm: true,
        helmChartName: projectName
      })
      .withOptions({ skipPackageInstall: true })
      .then(({ cwd }) => console.log(`Project generated in: ${cwd}`))
  })

  after(() => {
    const testDir = path.join(__dirname, projectName)
    if (fs.existsSync(testDir)) fs.removeSync(testDir)
  })

  it('create component with given name', function () {
    const resPath = `./${projectName}/src/index.js`
    result.assertFile(resPath)
  })

  it('project has given name', function () {
    result.assertFileContent(`./${projectName}/package.json`, `"name": "${projectName}"`)
  })

  it('gql address is configured', function () {
    result.assertFileContent(`./${projectName}/.env`, `REACT_APP_GQL=${gqlAddress}`)
  })

  it('helm files are added when addHelm option is true', function () {
    result.assertFile(`./${projectName}/helm/${projectName}/values.yaml`)
  })
})
