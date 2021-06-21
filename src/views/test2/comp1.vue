<!--
 * @Author: your name
 * @Date: 2021-06-21 15:03:54
 * @LastEditTime: 2021-06-21 15:33:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test2\comp1.vue
-->
<template>
  <div class="comp1">
    comp1
    <div>{{a}}</div>
    {{ aa(1,2) }}
  </div>
</template>

<script>
import compJs1 from './compJs1.js';
export default {
  extends: compJs1,
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>