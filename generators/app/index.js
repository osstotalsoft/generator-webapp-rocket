'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const { append, concat } = require('ramda')
const questions = require('./questions')
const { checkForLatestVersion } = require('../utils')
const filter = require('gulp-filter')
const { prettierTransform, defaultPrettierOptions } = require('../generator-transforms')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    this.registerClientTransforms()
  }

  async prompting() {
    this.isLatest = await checkForLatestVersion()

    if (!this.isLatest) return

    this.log(
      yosay(`Welcome to the fantabulous ${chalk.red('TotalSoft React App')} generator! (⌐■_■)
     Out of the box I include Material-UI, React, Apollo Client and AxaGuilDEv Oidc Client to build your app.`)
    )
    this.answers = await this.prompt(questions)
  }

  writing() {
    if (!this.isLatest) return

    const { projectName, addHelm, withRights, withMultiTenancy, packageManager, helmChartName } = this.answers

    const templatePath = this.templatePath('infrastructure/**/*')
    const destinationPath = this.destinationPath(projectName)

    let ignoreFiles = ['**/.npmignore', '**/.gitignore-template', '**/helm/**']
    if (!withRights) ignoreFiles = concat(['**/hooks/rights.js', '**/constants/permissions.js', '**/constants/identityUserRoles.js'], ignoreFiles)
    if (withMultiTenancy) ignoreFiles = concat(['**/AuthenticationProvider.js'], ignoreFiles)
    else
      ignoreFiles = concat(
        ['**/tenantSelectorStyle.js', '**/TenantSelector.js', '**/TenantAuthenticationProvider.js'],
        ignoreFiles
      )

    const packageManagerVersion = packageManager === 'npm' ? '10.0.0' : packageManager === 'yarn' ? '1.22.4' : '10.0.0'

    this.fs.copyTpl(
      templatePath,
      destinationPath,
      { ...this.answers, packageManagerVersion },
      {},
      { globOptions: { ignore: ignoreFiles, dot: true } }
    )

    const gitignorePath = this.templatePath('infrastructure/.gitignore-template')
    const gitignoreDestinationPath = this.destinationPath(`${projectName}/.gitignore`)
    this.fs.copy(gitignorePath, gitignoreDestinationPath)

    if (addHelm) {
      const helmTemplatePath = this.templatePath('infrastructure/helm/frontend/**')
      const helmDestinationPath = this.destinationPath(`${projectName}/helm/${helmChartName}`)
      this.fs.copyTpl(helmTemplatePath, helmDestinationPath, { ...this.answers, packageManagerVersion }, {}, { globOptions: { dot: true } })
    }
  }

  install() {
    if (!this.isLatest) return

    const { packageManager, projectName } = this.answers

    // eslint-disable-next-line no-unused-expressions
    packageManager === 'npm'
      ? this.npmInstall(null, {}, { cwd: projectName })
      : packageManager === 'yarn'
        ? this.yarnInstall(null, {}, { cwd: projectName })
        : this.npmInstall(null, {}, { cwd: projectName })
  }

  end() {
    if (!this.isLatest) return

    this.log(
      yosay(`Congratulations, you just entered the exciting world of Web Applications! Enjoy!
      Bye now!
      (*^_^*)`)
    )
  }

  registerClientTransforms() {
    const jsFilter = filter(['**/*.{js,jsx,json,css,html}'], { restore: true })

    this.registerTransformStream([jsFilter, prettierTransform(defaultPrettierOptions), jsFilter.restore])
  }
}
