<template>
</template>

<script>
import auth from '@/auth'

export default {
  mounted{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    auth.lock.on('authenticated', (response) => {
      auth.lock.getUserInfo(response.accessToken, (error, profile) => {
        if (error) {
          // TODO: Error
          return
        }

        window.localStorage.setItem('token', response.accessToken)
        window.localStorage.setItem('profile', JSON.stringify(profile))

        auth.authenticated = true
        auth.profile = profile

        this.$router.go(-1)
      })
    })
  }
}
</script>
