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
      <a @click="login()" href="#" v-show="!authenticated">Login</a>
      <a @click="logout()" href="#" v-show="authenticated">
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
import { Hello } from 'components'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/unless}}
{{#auth}}
import Auth0Lock from 'auth0-lock'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Auth0 from 'auth0-js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import md5 from 'md5'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const AUTH0_CLIENT_ID = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const AUTH0_DOMAIN = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/auth}}

export default {
  {{#unless router}}
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/unless}}
  {{#auth}}
  data() {
    return {
      authenticated: false{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      lock: new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      profile: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  computed: {
    gravatar() {
      return md5(this.profile.email || ''){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  beforeMount() {
    this.authenticated = this.checkAuth(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    if (this.authenticated) {
      this.profile = JSON.parse(window.localStorage.getItem('profile')){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  mounted() {
    const self = this{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const auth0 = new Auth0.WebAuth({
      clientID: AUTH0_CLIENT_ID{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      domain: AUTH0_DOMAIN{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    if (this.$route.hash) {
      const auth = auth0.parseHash(this.$route.hash){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

      if (auth && auth.idToken) {
        self.lock.getProfile(auth.idToken, (error, profile) => {
          if (error) {
            // TODO: Error
            return;
          }

          window.localStorage.setItem('token', auth.idToken){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          window.localStorage.setItem('profile', JSON.stringify(profile)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

          self.authenticated = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          self.profile = profile{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          self.lock.hide(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      } else {
        // TODO: Error
      }
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  methods: {
    checkAuth() {
      return !!window.localStorage.getItem('token'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    login() {
      this.lock.show(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    logout() {
      window.localStorage.removeItem('token'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      window.localStorage.removeItem('profile'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

      this.authenticated = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.profile = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
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
