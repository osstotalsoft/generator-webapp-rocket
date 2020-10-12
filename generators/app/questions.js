const chalk = require('chalk');

module.exports = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: appName => {
            const pass = appName.match(/^((?!-)[A-Za-z-._]{1,63}(?<!-))+$/)
            if (pass) {
                return true;
            }
            return `${chalk.red(
                "Provide a valid project name, only use letters and '-', '_' or '.' separators! No digits, special characters and whitespace are allowed and do not start or end with a separator!"
            )}`;
        },
        default: "new-project"
    },
    {
        type: 'input',
        name: 'projectDescriptionName',
        message: 'What is the description project name?',
        default: "New Project"
    },
    {
        type: 'input',
        name: 'gqlAddress',
        message: 'What is your gql server address?',
        default: "localhost:4000"
    },
    {
        type: 'confirm',
        name: 'withSubscription',
        message: 'Would you like to use subscription?',
        default: false
    },
    {
        type: "list",
        name: "theme",
        message: 'What theme would you like to install?',
        choices: ['default', 'orange', 'blue', 'green', 'red'],
        default: 'default'
    },
    {
        type: "confirm",
        name: "addHelm",
        message: 'Would you like to generate the default helm files?',
        default: false
    },
    {
        type: "input",
        name: "helmChartName",
        message: 'What is the name of your helm chart?',
        when: prompts => prompts.addHelm,
        validate: name => {
            const pass = name.match(/^[a-z0-9]+(?:[_-]{1,2}[a-z0-9]+)*$/)
            if (pass) {
                return true;
            }
            return `${chalk.red(
                "Provide a valid chart name, only use lower case letters, digits and '-' or '_' separators! No special characters and whitespace are allowed and do not start or end with a separator!"
            )}`;
        },
        default: prompts => prompts.projectName.toLowerCase()
    },
    {
        type: 'input',
        name: 'identityClientId',
        message: 'What is your Identity client name?',
        default: ""
    },
    {
        type: 'input',
        name: 'identityScope',
        message: 'What identity scopes?',
        default: ""
    },
    {
        type: 'input',
        name: 'identityAuthority',
        message: 'And the identity authority link?',
        default: ""
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
        type: "list",
        name: "packageManager",
        message: 'What package manager would you like to use?',
        choices: ['npm', 'yarn'],
        default: 'npm'
    }
]