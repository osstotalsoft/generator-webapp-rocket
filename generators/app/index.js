'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { append, concat } = require('ramda');
const questions = require('./questions');

module.exports = class extends Generator {

  async prompting() {
    this.log(
      yosay(`Welcome to the fantabulous ${chalk.red('TotalSoft React App')} generator! (⌐■_■)
     Out of the box I include Material-UI, React, Apollo Client and AxaGuilDEv Oidc Client to build your app.`)
    );
    this.answers = await this.prompt(questions);
  }

  writing() {
    const { projectName, addHelm, withRights, withMultiTenancy, packageManager } = this.answers

    const templatePath = this.templatePath(this.templatePath("infrastructure/**/*"))
    const destinationPath = this.destinationPath(projectName)

    let ignoreFiles = []
    if (!addHelm) ignoreFiles = append("**/helm/**", ignoreFiles)
    if (!withRights) ignoreFiles = append("**/hooks/rights.js", ignoreFiles)
    if (withMultiTenancy)
      ignoreFiles = concat(["AuthenticationProvider.js"], ignoreFiles)
    else
      ignoreFiles = concat(["**/tenantSelectorStyle.jss", "**/TenantSelector.js", "TenantAuthenticationProvider.js"], ignoreFiles)

      const packageManagerVersion = packageManager === 'npm'
      ? "10.0.0"
      : packageManager === 'yarn'
        ? "1.22.4"
        : "10.0.0"

    this.fs.copyTpl(templatePath, destinationPath, { ...this.answers, packageManagerVersion }, {},
      { globOptions: { ignore: ignoreFiles, dot: true } }
    )
  }

  install() {
    const { packageManager, projectName } = this.answers

    packageManager === 'npm'
      ? this.npmInstall(null, {}, { cwd: projectName })
      : packageManager === 'yarn'
        ? this.yarnInstall(null, {}, { cwd: projectName })
        : this.npmInstall(null, {}, { cwd: projectName })
  }

  end() {
    this.log(
      yosay(`Congratulations, you just entered the exciting world of Web Applications! Enjoy! 
      Bye now! 
      (*^_^*)`)
    );
  }
};
