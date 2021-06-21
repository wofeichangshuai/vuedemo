<!--
 * @Author: your name
 * @Date: 2021-06-21 14:22:22
 * @LastEditTime: 2021-06-21 14:53:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test\test2.vue
-->
<template>
  <div class="">

    <div>{{ cc() }}</div>
    <div>
      <el-input-number v-model="a"></el-input-number>
    </div>
  </div>
</template>

<script>
import mixinTest from './mixinTest';
export default {
  mixins: [mixinTest],
  components: {},
  props: {},
  data() {
    return {
      // a: 30,
      b: 20,
    };
  },
  watch: {},
  computed: {},
  created() {
    console.log('test2 created');
    this.aa();
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
