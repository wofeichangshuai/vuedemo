<!--
 * @Author: your name
 * @Date: 2021-06-21 15:04:21
 * @LastEditTime: 2021-06-21 15:18:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test2\comp2.vue
-->
<template>
  <div class="comp2">
    comp2
    {{ aa(1,2) }}
  </div>
</template>

<script>
// import comp1 from './comp1.vue';
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
  created() {
    console.log(this.aa(2, 2));
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>