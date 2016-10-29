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
    color: @sidebarActiveText;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 3px;
  }

  .mdl-navigation .mdl-navigation__link {
    color: @sidebarText;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: left;
    padding: 16px 17px 16px 17px;
    vertical-align: middle;
    border-left: 6px solid @sidebar;

    &:hover, &.active {
      color: @sidebarActiveText;
      opacity: 1;
    }

    &:hover {
      background-color: @sidebarHover;
      border-left-color: @sidebarHover;
    }

    &.active {
      background-color: @sidebarActive;
      border-left-color: @accent;
    }
  }
}
</style>
