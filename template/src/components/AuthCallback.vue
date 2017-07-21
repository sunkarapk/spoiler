<template>
</template>

<script>
import auth from '@/auth'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  mounted() {
    auth.lock.on('authenticated', (response) => {
      auth.lock.getUserInfo(response.accessToken, (error, profile) => {
        if (error) {
          // TODO: Error
          return;
        }

        window.localStorage.setItem('token', response.accessToken){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        window.localStorage.setItem('profile', JSON.stringify(profile)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

        auth.authenticated = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        auth.profile = profile{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

        this.$router.go(-1){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
