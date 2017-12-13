const path = require('path')
const fs = require('fs')
const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')

module.exports = {
  helpers: {
    if_or: function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    if_or_not: function (v1, v2, options) {
      if (v1 || !v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    if_and_not: function (v1, v2, options) {
      if (v1 && !v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    unless_or: function (v1, v2, options) {
      if (!v1 || !v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    build: {
      type: 'list',
      message: 'Vue build',
      choices: [
        {
          name: 'Runtime + Compiler: recommended for most users',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name: 'Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere',
          value: 'runtime',
          short: 'runtime',
        },
      ],
    },
    router: {
      type: 'confirm',
      message: 'Use vue-router for routing logic?',
    },
    store: {
      type: 'confirm',
      message: 'Use vuex for state management?',
    },
    material: {
      type: 'confirm',
      message: 'Use material design lite for UI?',
    },
    auth: {
      when: 'router',
      type: 'confirm',
      message: 'Add user management using Auth0?',
    },
    persist: {
      when: 'store',
      type: 'confirm',
      message: 'Persist state to localstorage?',
    },
    validate: {
      type: 'confirm',
      message: 'Use validation plugin?',
    },
    api: {
      type: 'list',
      message: 'Which API will you be working with?',
      choices: [
        {
          name: 'GraphQL',
          value: 'graphql',
          short: 'graphql',
        },
        {
          name: 'HTTP',
          value: 'http',
          short: 'http',
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none',
        }
      ]
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?',
    },
    lintConfig: {
      when: 'lint',
      type: 'list',
      message: 'Pick an ESLint preset',
      choices: [
        {
          name: 'Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard',
        },
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb',
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none',
        },
      ],
    },
    unit: {
      type: 'confirm',
      message: 'Set up unit tests',
    },
    runner: {
      when: 'unit',
      type: 'list',
      message: 'Pick a test runner',
      choices: [
        {
          name: 'Jest',
          value: 'jest',
          short: 'jest',
        },
        {
          name: 'Karma and Mocha',
          value: 'karma',
          short: 'karma',
        },
        {
          name: 'none (configure it yourself)',
          value: 'noTest',
          short: 'noTest',
        },
      ],
    },
    e2e: {
      type: 'confirm',
      message: 'Setup e2e tests with Nightwatch?',
    },
    storybook: {
      type: 'confirm',
      message: 'Add storybook?'
    },
    autoInstall: {
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  'filters': {
    'src/router/**/*': 'router',
    'src/store/**/*': 'store',
    'src/styles/*': 'material',
    'src/components/Auth*': 'router && auth',
    'src/auth.js': 'router && auth',
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "e2e || (unit && runner === 'karma')",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'config/storybook/**/*': 'storybook',
    'src/stories.js': 'storybook',
  },
  complete: function (data, { chalk }) {

    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}
