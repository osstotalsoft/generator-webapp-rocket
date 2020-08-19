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
    const { projectName, addHelm, withRights, withMultiTenancy } = this.answers
    const templatePathAll = this.templatePath(this.templatePath("infrastructure/**/*.*"))
    const templatePathConfigs = this.templatePath(this.templatePath("infrastructure/**/.*"))
    const destinationPath = this.destinationPath(projectName)

    let ignoreFiles = []
    if (!addHelm) ignoreFiles = append("**/helm/**", ignoreFiles)
    if (!withRights) ignoreFiles = append("**/hooks/rights.js", ignoreFiles)
    if (withMultiTenancy)
      ignoreFiles = concat(["AuthenticationProvider.js"], ignoreFiles)
    else
      ignoreFiles = concat(["**/tenantSelectorStyle.jss", "**/TenantSelector.js", "TenantAuthenticationProvider.js"], ignoreFiles)

    this.fs.copyTpl(templatePathAll, destinationPath, this.answers, {},
      { globOptions: { ignore: ignoreFiles } }
    )

    this.fs.copyTpl(templatePathConfigs, destinationPath, this.answers, {},
      { globOptions: { ignore: ignoreFiles } }
    )
  }

  install() {
    const { packageManager, projectName } = this.answers

    switch (packageManager) {
      case 'npm':
        this.npmInstall(null, {}, { cwd: projectName })
        break;
      case 'yarn':
        this.yarnInstall(null, {}, { cwd: projectName })
        break;
      case 'bower':
        this.bowerInstall(null, {}, { cwd: projectName })
        break;
      default:
        this.npmInstall(null, {}, { cwd: projectName })
        break;
    }
  }

  end() {
    this.log(
      yosay(`Congratulations, you just entered the exciting world of Web Applications! Enjoy! 
      Bye now! 
      (*^_^*)`)
    );
  }
};
