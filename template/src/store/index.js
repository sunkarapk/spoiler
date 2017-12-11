import Vue from 'vue'
import Vuex from 'vuex'
{{#persist}}
import createPersistedState from 'vuex-persistedstate'
{{/persist}}

import Hello from '@/store/Hello'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    Hello
  }{{#persist}},
  plugins: [createPersistedState()]{{/persist}}
})

export default store
