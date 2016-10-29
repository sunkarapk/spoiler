<template>
  <a class="mdl-navigation__link" :href="href">
    <i v-show="icon" class="material-icons">\{{icon}}</i>
    <div>
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      default: '#'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    icon: String{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped lang="less">
@import "../styles/variables.less";

.mdl-layout__drawer {
  .mdl-navigation .mdl-navigation__link {
    div {
      display: inline-block;
    }
  }
}

i {
  font-size: 24px;
  padding-right: 15px;
}
</style>
