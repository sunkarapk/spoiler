<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    {{#if router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/if}}
  </div>
</template>

<script>
{{#if router}}
export default {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{else}}
import { Hello } from 'components'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if}}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
