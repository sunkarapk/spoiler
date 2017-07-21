<template>
  <div>
    <h4>You are forbidden to view this page. Please login.</h4>
  </div>
</template>

<script>
import auth from '@/auth'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  beforeMount() {
    if (auth.isLoggedIn()) {
      this.$router.replace(this.$route.query.redirect){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
