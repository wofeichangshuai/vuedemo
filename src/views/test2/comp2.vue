<!--
 * @Author: your name
 * @Date: 2021-06-21 15:04:21
 * @LastEditTime: 2021-06-21 17:57:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test2\comp2.vue
-->
<template>
  <div class="comp2">
    comp2
    <comp-1 />
  </div>
</template>

<script>
import comp1 from './comp1.vue';
export default {
  components: { comp1 },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {
    console.log('comp1', comp1);
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>