<template>
  <div id="app">
    {{#if material}}
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
      <Navbar>
        {{#if auth}}
        <Navlink class="profile" @click.native="login()" v-show="!authenticated">Login</Navlink>
        <Navlink class="profile" @click.native="logout()" v-show="authenticated">
          <img v-bind:src="'https://www.gravatar.com/avatar/' + gravatar + '?s=100'" />
        </Navlink>
        {{else}}
        <Navlink>Link</Navlink>
        {{/if}}
      </Navbar>
      <Drawer>
        <Navlink icon="dashboard">Dashboard</Navlink>
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
import { {{#material}}Navbar, Drawer, Navlink{{/material}}{{#if_and_not2 material router}}, {{/if_and_not2}}{{#unless router}}Hello{{/unless}} } from 'components'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#material}}
import componentHandler from 'material-design-lite/material'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/material}}
{{#auth}}
import Auth0Lock from 'auth0-lock'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Auth0 from 'auth0-js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import md5 from 'md5'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/auth}}

export default {
  components: {
    {{#material}}
    Navbar{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    Drawer{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    Navlink{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
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
    const auth0 = new Auth0({
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
        return;
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
}

.profile img {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 12px 20px;
{{/if}}
}
{{/auth}}
</style>
