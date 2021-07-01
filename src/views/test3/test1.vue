<!--
 * @Author: your name
 * @Date: 2021-06-30 19:53:40
 * @LastEditTime: 2021-06-30 21:30:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test3\test1.vue
-->
<template>
  <div class="">
    <div>
      <label>数1：</label>
      <input v-model="v1" type="text">
      <br>
      <label>数2：</label>
      <input v-model="v2" type="text">
      <br>
      <button @click="add0">加(原生)</button>
      <button @click="add1">加(BigNumber)</button>
      <br>
      <label>结果： </label><span id="res">{{v3}}</span>
    </div>
  </div>
</template>

<script>
import Decimal from 'decimal.js';
export default {
  components: {},
  props: {},
  data() {
    return {
      v1: '0.1',
      v2: '0.2',
      v3: '',
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.reset();
  },
  methods: {
    add0() {
      this.v3 = this.v1 - 0 + (this.v2 - 0);
    },
    add1() {
      // this.v3 = Decimal.sum(this.v1, this.v2);
      this.v3 = Decimal.add(this.v1, this.v2);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>