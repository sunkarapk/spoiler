<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout__title">{{name}}</span>
    <nav class="mdl-navigation">
      <slot></slot>
    </nav>
  </div>
</template>

<script>
export default {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped lang="less">
@import "../styles/variables.less";

.mdl-layout__drawer {
  box-shadow: none;
  border-right: 0;
  background: @sidebar;

  .mdl-layout__title {
    padding-right: 40px;
    color: @white;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 3px;
  }

  .mdl-navigation .mdl-navigation__link {
    color: @sidebarText;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: left;
    padding: 16px 20px 16px 20px;
    vertical-align: middle;

    &:hover, &.active {
      background-color: @sidebarHover;
      color: @white;
      opacity: 1;
    }
  }
}
</style>
