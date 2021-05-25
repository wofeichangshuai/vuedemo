<!--
 * @Author: your name
 * @Date: 2021-05-24 11:24:19
 * @LastEditTime: 2021-05-25 18:43:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test\zi.vue
-->

<template>
  <div class="wrapper">
    <el-form-item>

      <el-input v-model="name" @input="inputClick"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    form: {
      type: Object,
      default: null,
    },
    arr: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      name: this.form.name,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    console.log('val', this.form);
  },
  methods: {
    inputClick(val) {
      console.log('111', val);
      this.form.name = val;
      this.arr.push(val);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>