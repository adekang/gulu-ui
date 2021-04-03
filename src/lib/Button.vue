<template>

  <!--    绑定属性  v-bind="$attrs"-->
  <button class="gulu-button"
          :class="{[`theme-${theme}`]:theme}">
    <slot/>
  </button>

</template>

<script lang='ts'>
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
};
</script>

<style lang='scss' scoped>

</style>