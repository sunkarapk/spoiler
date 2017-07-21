import Auth0Lock from 'auth0-lock'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const AUTH0_CLIENT_ID = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const AUTH0_DOMAIN = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  authenticated: false{{#if_eq lintConfig "airbnb"}},{{/if_eq}}

  lock: new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
    auth: {
      redirectUrl: 'http://localhost:8000/callback'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      responseType: 'token'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}},{{/if_eq}}

  profile: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}

  isLoggedIn() {
    return !!window.localStorage.getItem('token'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}

  init() {
    this.authenticated = this.isLoggedIn(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    if (this.authenticated) {
      this.profile = JSON.parse(window.localStorage.getItem('profile')){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}

  login() {
    this.lock.show(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}

  logout() {
    window.localStorage.removeItem('token'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    window.localStorage.removeItem('profile'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    this.authenticated = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.profile = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    window.location.reload(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
