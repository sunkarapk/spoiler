# spoiler

Single Page Application Boilerplate

> A full-featured Webpack setup with vue-router, vuex, material-design-lite, auth0, vue-resource, hot-reload, lint-on-save & css extraction.

I have extended the official [webpack](http://github.com/vuejs-templates/webpack) boilerplate with often used plugins and functionalities. I have made this because the official vuejs-templates maintainers wanted to keep the webpack template simple.

The extra functionalities added are:

- [vue-router](https://github.com/vuejs/vue-router) for routing.
- [vuex](https://github.com/vuejs/vuex) for application states and store management.
- [Material Design Lite](https://getmdl.com) for UI. *(Will be moving to [vue-mdl](https://github.com/posva/vue-mdl) soon once vue 2.0 is supported)*
- [Auth0](https://auth0.com) for easy serverless user management.
- [vue-resource](https://github.com/vuejs/vue-resource) for APIs and HTTP requests.
- [vue-apollo](https://github.com/Akryum/vue-apollo) for GraphQL support.

**Every functionality mentioned above is optional which means, you can switch them off easily during the initial stage without any issue with the other functionalities.**

All the functionalities have been made as independent of each other as possible.

## Usage

With [vue-cli](https://www.npmjs.com/package/vue-cli) globally installed, just run the following command:

```
$ npm i -g vue-cli
$ vue init pksunkara/spoiler appname
```

Your singe page application is now ready to be developed.

```
$ npm install
$ npm run dev
```

**It is recommended to use npm 3+ for a more efficient dependency tree.**

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.
