const chalk = require('chalk')

module.exports.projectNameQ = {
  type: 'input',
  name: 'projectName',
  message: 'What is the name of your project?',
  validate: appName => {
    const pass = appName.match(/^((?!-)[A-Za-z-._\d]{1,63}(?<!-))+$/)
    if (pass) {
      return true
    }

    return `${chalk.red(
      "Provide a valid project name, only use letters and '-', '_' or '.' separators! No digits, special characters and whitespace are allowed and do not start or end with a separator!"
    )}`
  },
  default: 'new-project'
}

module.exports.usePrevConfigsQ = {
  type: 'confirm',
  name: 'usePrevConfigs',
  message: 'You are regenerating over an existing project, would you like to use its previously saved generator configurations?',
  default: true
}

module.exports.getQuestions = projectName => [
  {
    type: 'input',
    name: 'projectDescriptionName',
    message: 'What is the description project name?',
    default: 'New Project'
  },
  {
    type: 'input',
    name: 'gqlAddress',
    message: 'What is your gql server address?',
    default: 'localhost:4000'
  },
  {
    type: 'confirm',
    name: 'withSubscription',
    message: 'Would you like to use subscription?',
    default: false
  },
  {
    type: 'list',
    name: 'theme',
    message: 'What theme would you like to install?',
    choices: ['default', 'orange', 'blue', 'lightBlue', 'green', 'red', 'vividOrange'],
    default: 'default'
  },
  {
    type: 'confirm',
    name: 'addHelm',
    message: 'Would you like to generate the default helm files?',
    default: false
  },
  {
    type: 'input',
    name: 'helmChartName',
    message: 'What is the name of your helm chart?',
    when: prompts => prompts.addHelm,
    validate: name => {
      const pass = name.match(/^((?!-)[A-Za-z-._\d]{1,63}(?<!-))+$/)
      if (pass) {
        return true
      }

      return `${chalk.red(
        "Provide a valid chart name, only use lower case letters, digits and '-' separators! No special characters and whitespace are allowed and do not start or end with a separator!"
      )}`
    },
    default: () => projectName.toLowerCase().replace('_', '-')
  },
  {
    type: 'confirm',
    name: 'withRights',
    message: 'Would you like to use and implement rights?',
    default: false
  },
  {
    type: 'confirm',
    name: 'withMultiTenancy',
    message: 'Would you like to use and implement multi-tenancy?',
    default: false
  },
  {
    type: 'confirm',
    name: 'addQuickStart',
    message: 'Would you like to include quick start examples?',
    default: false
  },
  {
    type: 'list',
    name: 'packageManager',
    message: 'What package manager would you like to use?',
    choices: ['npm', 'yarn'],
    default: 'npm'
  }
]
