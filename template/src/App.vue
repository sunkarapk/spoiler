<template>
  <div id="app">
    {{#if material}}
    <mdl-layout fixed-header fixed-drawer>
      <mdl-layout-header-row slot="header">
        <mdl-layout-spacer />
        <mdl-nav>
          {{#if auth}}
          <mdl-nav-link class="profile" @click.native="login()" v-show="!authenticated">Login</mdl-nav-link>
          <mdl-nav-link class="profile" @click.native="logout()" v-show="authenticated">
            <img v-bind:src="'https://www.gravatar.com/avatar/' + gravatar + '?s=100'" />
          </mdl-nav-link>
          {{else}}
          <mdl-nav-link>Link</mdl-nav-link>
          {{/if}}
        </mdl-nav>
      </mdl-layout-header-row>

      <mdl-layout-drawer title="{{name}}">
        <mdl-nav>
          <mdl-nav-link icon="dashboard" href="#">Dashboard</mdl-nav-link>
        </mdl-nav>
      </mdl-layout-drawer>

      <mdl-layout-content>
        <img class="logo" src="./assets/logo.png">
        {{#if router}}<router-view></router-view>{{else}}<hello></hello>{{/if}}
      </mdl-layout-content>
    </mdl-layout>
    {{else}}
    <img class="logo" src="./assets/logo.png">
    {{#if router}}<router-view></router-view>{{else}}<hello></hello>{{/if}}
    {{#auth}}
    <p class="profile">
      <a @click="auth.login()" href="#" v-show="!auth.authenticated">Login</a>
      <a @click="auth.logout()" href="#" v-show="auth.authenticated">
        <img v-bind:src="'https://www.gravatar.com/avatar/' + gravatar + '?s=100'" />
      </a>
    </p>
    {{/auth}}
    {{/if}}
  </div>
</template>

<script>
{{#if_and_not router auth}}
export default {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{else}}
{{#unless router}}
import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/unless}}
{{#auth}}
import auth from '@/auth'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import md5 from 'md5'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/auth}}

export default {
  {{#unless router}}
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/unless}}
  {{#auth}}
  data{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
    return {
      auth{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  computed: {
    gravatar{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
      return md5(auth.profile.email || ''){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  beforeMount{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
    auth.init(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/auth}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_and_not}}
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
{{#auth}}

.profile {
  width: 80px;
{{#if material}}

  img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin: 12px 20px;
  }
{{else}}
  margin: auto;
}

.profile img {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 12px 20px;
{{/if}}
}
{{/auth}}
{{#material}}

.mdl-layout__drawer {
  box-shadow: none;
  border-right: 0;
  background: @sidebar;

  .mdl-layout-title {
    padding-right: 40px;
    color: @sidebarActiveText;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 3px;
  }

  .mdl-navigation .mdl-navigation__link {
    color: @sidebarText;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: left;
    padding: 16px 17px 16px 17px;
    vertical-align: middle;
    border-left: 6px solid @sidebar;

    &:hover, &.active {
      color: @sidebarActiveText;
      opacity: 1;
    }

    &:hover {
      background-color: @sidebarHover;
      border-left-color: @sidebarHover;
    }

    &.active {
      background-color: @sidebarActive;
      border-left-color: @accent;
    }

    div {
      display: inline-block;
    }

    .material-icons {
      font-size: 24px;
      padding-right: 15px;
    }
  }
}

.mdl-layout__header {
  box-shadow: none;
  border: 0;
  background: @white;

  .mdl-layout__header-row {
    padding: 0;
  }

  .mdl-navigation .mdl-navigation__link {
    color: @sidebar;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
{{/material}}
</style>
