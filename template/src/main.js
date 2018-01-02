{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
{{#material}}
import VueMdl from 'vue-mdl'
{{/material}}
{{#validate}}
import Vuelidate from 'vuelidate'
{{/validate}}
{{#if_eq api "http"}}
import VueResource from 'vue-resource'
{{/if_eq}}
{{#if_eq api "graphql"}}
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'
{{/if_eq}}
{{#router}}
import router from '@/router'
{{/router}}
{{#store}}
import store from '@/store'
{{/store}}
import App from '@/App'
{{#material}}
import 'material-design-lite/material'
{{/material}}

{{#if_eq api "graphql"}}
const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: GRAPHQL_ENDPOINT
  }),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)
{{/if_eq}}
{{#material}}
Vue.use(VueMdl)
{{/material}}
{{#validate}}
Vue.use(Vuelidate)
{{/validate}}
{{#if_eq api "http"}}
Vue.use(VueResource)
{{/if_eq}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq api "graphql"}}
  apolloProvider,
  {{/if_eq}}
  {{#store}}
  store,
  {{/store}}
  {{#if_eq api "http"}}
  http: {},
  {{/if_eq}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
