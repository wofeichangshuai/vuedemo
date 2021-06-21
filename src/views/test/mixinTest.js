/*
 * @Author: your name
 * @Date: 2021-06-21 14:28:14
 * @LastEditTime: 2021-06-21 14:57:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test\mixinTest.js
 */
import mixinTest2 from './mixinTest2.js'
export default {
  mixins:[mixinTest2],
  components: {},
  props: {},
  data() {
    return {
      // a: 10,
    };
  },
  watch: {},
  computed: {},
  created() {
    console.log('mixin1 created');
  },
  mounted() {},
  methods: {
    aa1() {
      console.log('aa1');
    },
    bb1() {
      console.log('bb1');
    },
    cc() {
      return 'cc1';
    },
  },
};