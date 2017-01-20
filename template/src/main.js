{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#validate}}
import Vuelidate from 'vuelidate'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/validate}}
{{#resource}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/resource}}
{{#router}}
import router from 'src/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#store}}
import store from 'src/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/store}}
import App from 'src/App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#validate}}
Vue.use(Vuelidate){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/validate}}
{{#resource}}
Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/resource}}

/* eslint-disable no-new */
new Vue({
  el: '#app'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{#router}}
  router{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/router}}
  {{#store}}
  store{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/store}}
  {{#resource}}
  http: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/resource}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
