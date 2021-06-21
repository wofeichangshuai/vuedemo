/*
 * @Author: your name
 * @Date: 2021-06-21 14:54:21
 * @LastEditTime: 2021-06-21 14:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test\mixinTest2.js
 */

export default {
  components: {},
  props: {},
  data() {
    return {
      a: 50,
    };
  },
  watch: {},
  computed: {},
  created() {
    console.log('mixin created');
  },
  mounted() {},
  methods: {
    aa() {
      console.log('aa');
    },
    bb() {
      console.log('bb');
    },
    cc() {
      return 'cc';
    },
  },
};