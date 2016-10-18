<template>
  <a class="mdl-navigation__link" :href="href">
    <i v-show="icon" class="material-icons">{{icon}}</i>
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
  .mdl-navigation {
    div {
      display: inline-block;
    }

    i {
      color: @sidebarIcon;
    }

    &:hover, &.active {
      i {
        color: @white;
      }
    }
  }
}

i {
  font-size: 24px;
  padding-right: 15px;
}
</style>
