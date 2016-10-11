<template>
  <div id="app">
    {{#if material}}
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
      <Navbar>
        <a class="mdl-navigation__link" href="#">Link</a>
      </Navbar>
      <Drawer>
        <a class="mdl-navigation__link" href="#">
          <i class="material-icons">dashboard</i>
          <div>Dashboard</div>
        </a>
      </Drawer>
      <main class="mdl-layout__content">
        <img class="logo" src="./assets/logo.png">
        {{#if router}}<router-view></router-view>{{else}}<hello></hello>{{/if}}
      </main>
    </div>
    {{else}}
    <img class="logo" src="./assets/logo.png">
    {{#if router}}<router-view></router-view>{{else}}<hello></hello>{{/if}}
    {{/if}}
  </div>
</template>

<script>
{{#if_and_not2 router material}}
export default {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{else}}
import { {{#material}}Navbar, Drawer{{/material}}{{#if_and_not2 material router}}, {{/if_and_not2}}{{#unless router}}Hello{{/unless}} } from 'components'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#material}}
import componentHandler from 'material-design-lite/material'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/material}}

export default {
  components: {
    {{#material}}
    Navbar{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    Drawer{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{/material}}
    {{#unless router}}
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{/unless}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{#material}}
  ready() {
    this.$nextTick(() => {
      componentHandler.upgradeDom();
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/material}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_and_not2}}
</script>
{{#material}}

<style src="material-design-lite/material.css"></style>
<style src="material-design-icons/iconfont/material-icons.css"></style>
{{/material}}

{{#if material}}
<style lang="less">
@import "./styles/variables.less";

{{else}}
<style>
{{/if}}
html{{#material}}, body{{/material}} {
  height: 100%;
  {{#material}}
  background: @background;
  color: @sidebar;
  {{/material}}
}

{{#unless material}}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
{{/unless}}

#app {
  {{#unless material}}
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  {{/unless}}
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
{{#if material}}

a {
  cursor: pointer;
{{else}}

#app a {
  color: #42b983;
{{/if}}
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px;
  {{#material}}
  padding-top: 100px;
  {{/material}}
}
</style>
