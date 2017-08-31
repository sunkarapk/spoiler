import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#persist}}
import createPersistedState from 'vuex-persistedstate'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/persist}}

import Hello from '@/store/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#persist}},
  plugins: [createPersistedState()]{{/persist}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
