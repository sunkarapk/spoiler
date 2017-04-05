module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
    "if_or_not": function (v1, v2, options) {
      if (v1 || !v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
    "if_and_not": function (v1, v2, options) {
      if (v1 && !v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
    "unless_or": function (v1, v2, options) {
      if (!v1 || !v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "Use vue-router for routing logic?"
    },
    "store": {
      "type": "confirm",
      "message": "Use vuex for state management?"
    },
    "material": {
      "type": "confirm",
      "message": "Use material design lite for UI?"
    },
    "auth": {
      "when": "router",
      "type": "confirm",
      "message": "Add user management using Auth0?"
    },
    "validate": {
      "type": "confirm",
      "message": "Use validation plugin?"
    },
    "resource": {
      "type": "confirm",
      "message": "Use vue-resource?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "Airbnb (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    "src/router/**/*": "router",
    "src/store/**/*": "store",
    "src/styles/*": "material",
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
