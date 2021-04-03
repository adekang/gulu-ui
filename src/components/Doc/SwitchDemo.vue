<template>
  <div>
    <!--    value 控制每一次的状态-->
    <!--    input 拿到最新的值-->
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang='ts'>
import Switch from '../../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {
    Switch
  },
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>

<style lang='scss' scoped>

</style>