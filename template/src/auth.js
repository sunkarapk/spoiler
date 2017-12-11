import Auth0Lock from 'auth0-lock'

const AUTH0_CLIENT_ID = ''
const AUTH0_DOMAIN = ''

export default {
  authenticated: false,

  lock: new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
    auth: {
      redirectUrl: 'http://localhost:8000/callback',
      responseType: 'token'
    }
  }),

  profile: {},

  isLoggedIn{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return !!window.localStorage.getItem('token')
  },

  init{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    this.authenticated = this.isLoggedIn()

    if (this.authenticated) {
      this.profile = JSON.parse(window.localStorage.getItem('profile'))
    }
  },

  login{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    this.lock.show()
  },

  logout{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('profile')

    this.authenticated = false
    this.profile = {}

    window.location.reload()
  }
}
