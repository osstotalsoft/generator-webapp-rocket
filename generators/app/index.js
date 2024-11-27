'use strict'
import Generator from 'yeoman-generator'
import chalk from 'chalk'
import yosay from 'yosay'
import path from 'path'
import { concat, mergeLeft } from 'ramda'
import { projectNameQ, getQuestions, usePrevConfigsQ } from './questions.js'
import { checkForLatestVersion, getCurrentVersion } from '../utils.js'
import filter from 'gulp-filter'
import { prettierTransform, defaultPrettierOptions } from '../generator-transforms.js'
import { YO_RC_FILE } from './constants.js'

export default class extends Generator {
  constructor(args, opts) {
    super(args, { ...opts, skipRegenerate: true, ignoreWhitespace: true, force: true, skipLocalCache: false })
    this.registerClientTransforms()
  }

  async prompting() {
    this.isLatest = await checkForLatestVersion()

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

    const { addHelm, withRights, withMultiTenancy, helmChartName, addQuickStart } = this.answers

    const templatePath = this.templatePath('infrastructure/**/*')
    const destinationPath = this.destinationPath()

    let ignoreFiles = ['**/.npmignore', '**/.gitignore-template', '**/helm/**']
    if (!withRights)
      ignoreFiles = concat(['**/hooks/rights.js', '**/constants/permissions.js', '**/constants/identityUserRoles.js'], ignoreFiles)
    if (withMultiTenancy) ignoreFiles = concat(['**/AuthenticationProvider.js'], ignoreFiles)
    else ignoreFiles = concat(['**/tenantSelectorStyle.js', '**/tenant', '**/TenantAuthenticationProvider.js'], ignoreFiles)

    if (!addQuickStart) ignoreFiles = concat(['**/features/**', '**/README.md'], ignoreFiles)

    this.fs.copyTpl(templatePath, destinationPath, this.answers, {}, { globOptions: { ignore: ignoreFiles, dot: true } })

    const gitignorePath = this.templatePath('infrastructure/.gitignore-template')
    const gitignoreDestinationPath = path.join(destinationPath, `/.gitignore`)
    this.fs.copy(gitignorePath, gitignoreDestinationPath)

    if (addHelm) {
      const helmTemplatePath = this.templatePath('infrastructure/helm/frontend/**')
      const helmDestinationPath = path.join(destinationPath, `/helm/${helmChartName}`)
      this.fs.copyTpl(helmTemplatePath, helmDestinationPath, this.answers, {}, { globOptions: { dot: true } })
    }
  }

  install() {
    if (!this.isLatest || this?.options?.skipPackageInstall) return

    this.log(chalk.greenBright(`All the dependencies will be installed shortly using "npm" package manager...`))
    this.spawnCommandSync('npm install')
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
