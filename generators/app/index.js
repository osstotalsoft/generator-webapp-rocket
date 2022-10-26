'use strict'
const Generator = require('yeoman-generator')
require('lodash').extend(Generator.prototype, require('yeoman-generator/lib/actions/install'))
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')
const { concat, mergeLeft } = require('ramda')
const { projectNameQ, getQuestions, usePrevConfigsQ } = require('./questions')
const { checkForLatestVersion, getCurrentVersion } = require('../utils')
const filter = require('gulp-filter')
const { prettierTransform, defaultPrettierOptions } = require('../generator-transforms')
const { NPM_MIN_VERSION, YARN_MIN_VERSION, YO_RC_FILE } = require('./constants')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, { ...opts, skipRegenerate: true, ignoreWhitespace: true, force: true, skipLocalCache: false })
    this.registerClientTransforms()
    this.ignoreFiles = []
  }

  async prompting() {
    this.isLatest = await checkForLatestVersion()

    if (!this.isLatest) return

    this.log(
      yosay(`Welcome to the fantabulous ${chalk.red('TotalSoft React App')} generator! (⌐■_■)
     Out of the box I include Material-UI, React, Apollo Client and AxaGuilDEv Oidc Client to build your app.`)
    )

    this.answers = await this.prompt(projectNameQ)
    const { projectName } = this.answers
    this.destinationRoot(path.join(this.contextRoot, `/${projectName}`))

    if (this.fs.exists(path.join(this.destinationPath(), `/${YO_RC_FILE}`)))
      this.answers = mergeLeft(this.answers, await this.prompt(usePrevConfigsQ))

    this.config.set('__TIMESTAMP__', new Date().toLocaleString())
    this.config.set('__VERSION__', await getCurrentVersion())

    const questions = getQuestions(projectName)
    const { usePrevConfigs } = this.answers
    this.answers = usePrevConfigs
      ? mergeLeft(this.answers, await this.prompt(questions, this.config))
      : mergeLeft(this.answers, await this.prompt(questions))

    questions.forEach(q => this.config.set(q.name, this.answers[q.name]))
  }

  writing() {
    if (!this.isLatest) return

    const { addHelm, withRights, withMultiTenancy, packageManager, helmChartName, addQuickStart } = this.answers

    const templatePath = this.templatePath('infrastructure/**/*')
    const destinationPath = this.destinationPath()

    this.ignoreFiles = ['**/.npmignore', '**/.gitignore-template']
    if (!withRights)
      this.ignoreFiles = concat(
        ['**/src/hooks/rights.js', '**/src/constants/permissions.js', '**/src/constants/identityUserRoles.js'],
        this.ignoreFiles
      )
    if (withMultiTenancy) this.ignoreFiles = concat(['**/src/**/AuthenticationProvider.js'], this.ignoreFiles)
    else
      this.ignoreFiles = concat(
        ['**/src/**/tenantSelectorStyle.js', '**/src/tenant', '**/src/**/TenantAuthenticationProvider.js'],
        this.ignoreFiles
      )

    if (!addQuickStart) this.ignoreFiles = concat(['**/src/features/**', '**/README.md'], this.ignoreFiles)

    if (addHelm) this.ignoreFiles = concat(['**/helm/frontend/**'], this.ignoreFiles)
    else this.ignoreFiles = concat(['**/helm/**'], this.ignoreFiles)

    const packageManagerVersion =
      packageManager === 'npm' ? NPM_MIN_VERSION : packageManager === 'yarn' ? YARN_MIN_VERSION : NPM_MIN_VERSION

    this.fs.copyTpl(
      templatePath,
      destinationPath,
      { ...this.answers, packageManagerVersion },
      {},
      { globOptions: { ignore: this.ignoreFiles, dot: true } }
    )

    const gitignorePath = this.templatePath('infrastructure/.gitignore-template')
    const gitignoreDestinationPath = path.join(destinationPath, `/.gitignore`)
    this.fs.copy(gitignorePath, gitignoreDestinationPath)

    if (addHelm) {
      const helmTemplatePath = this.templatePath('infrastructure/helm/frontend/**')
      const helmDestinationPath = path.join(destinationPath, `/helm/${helmChartName}`)
      this.fs.copyTpl(helmTemplatePath, helmDestinationPath, { ...this.answers, packageManagerVersion }, {}, { globOptions: { dot: true } })
    }
  }

  conflicts() {
    if (!this.isLatest) return
    this.ignoreFiles.map(f =>
      this.deleteDestination(f.startsWith('**/') ? f.substring(3, f.length) : f, {
        globOptions: { onlyFiles: true, dot: true, silent: true }
      })
    )
    this.ignoreFiles.map(f =>
      this.deleteDestination(f, {
        globOptions: { onlyDirectories: true, dot: true, silent: true }
      })
    )
  }

  install() {
    if (!this.isLatest) return

    const { packageManager, projectName } = this.answers

    this.log(chalk.greenBright(`All the dependencies will be installed shortly using "${packageManager}" package manager...`))
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

    this.queueTransformStream([jsFilter, prettierTransform(defaultPrettierOptions), jsFilter.restore])
  }
}
