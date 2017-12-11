<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
{{#store}}
import { mapState } from 'vuex'

{{/store}}
export default {
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
{{#if store}}
    return {}
{{else}}
    return {
      msg: 'Hello Vue!'
    }
{{/if}}
  }{{#if_eq lintConfig "airbnb"}}{{#unless store}},{{/unless}}{{/if_eq}}{{#store}},{{/store}}
{{#store}}
  computed: mapState({
    msg: state => state.Hello.message
  })
{{/store}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
