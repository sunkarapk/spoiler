{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#material}}
import VueMdl from 'vue-mdl'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/material}}
{{#validate}}
import Vuelidate from 'vuelidate'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/validate}}
{{#if_eq api "http"}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq api "graphql"}}
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueApollo from 'vue-apollo'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#router}}
import router from '@/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#store}}
import store from '@/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/store}}
import App from '@/App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#material}}
import 'material-design-lite/material'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/material}}

{{#if_eq api "graphql"}}
const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: GRAPHQL_ENDPOINT{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }),
  connectToDevTools: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const apolloProvider = new VueApollo({
  defaultClient: apolloClient{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueApollo){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#material}}
Vue.use(VueMdl){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/material}}
{{#validate}}
Vue.use(Vuelidate){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/validate}}
{{#if_eq api "http"}}
Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

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
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
