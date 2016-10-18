<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <slot></slot>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped lang="less">
@import "../styles/variables.less";

.mdl-layout__header {
  box-shadow: none;
  border: 0;
  background: @white;

  .mdl-layout__header-row {
    padding: 0;
  }

  .mdl-navigation .mdl-navigation__link {
    color: @sidebar;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
