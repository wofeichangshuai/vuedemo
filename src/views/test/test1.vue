<!--
 * @Author: your name
 * @Date: 2021-04-22 16:21:51
 * @LastEditTime: 2021-05-26 19:48:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test\test1.vue
-->
<template>
  <div class="wrapper">
    <el-input type="textarea" id="test" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
    <el-button type="primary" plain @click="handleTrial" @keydown.enter="handleTrial">试算</el-button>
    常用符号：
    <el-tag v-for="item in signItems" :key="item.label" effect="plain" @click="setScaleOfMarks(item.label)" style="margin:0 10px;">
      {{ item.label }}
    </el-tag>
    常用函数：
    <el-tag v-for="item in methodItems" :key="item.label" effect="plain" @click="setScaleOfMarks(item.label)" style="margin:0 10px;">
      {{ item.label }}
    </el-tag>
    参数：
    <el-tag v-for="item in paramItems" :key="item.label" effect="plain" @click="setScaleOfMarks(item.label)" style="margin:0 10px;">
      {{ item.label }}
    </el-tag>

    <el-divider></el-divider>
    <el-form>
      <zi :form="form" :arr.sync="arr" />
    </el-form>
    <el-button @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
import Zi from './zi.vue';
export default {
  components: { Zi },
  props: {},
  data() {
    return {
      textarea: '',
      formData: {
        smsContent: '',
      },
      frontString: '',
      afterString: '',
      signItems: [
        { label: '+' },
        { label: '-' },
        { label: '*' },
        { label: '/' },
        { label: '(' },
        { label: ')' },
        { label: ':' },
        { label: ',' },
        { label: '=' },
        { label: '<' },
        { label: '>' },
        { label: '<=' },
        { label: '>=' },
        { label: '≠' },
      ],
      methodItems: [{ label: 'IF' }, { label: 'AND' }, { label: 'OR' }],
      paramItems: [{ label: '目标值' }, { label: '完成值' }],
      form: { name: 'aaa' },
      arr: [1, 2],
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 获取文本框光标
    getPositionForTextArea(ctrl) {
      let CaretPos = 0;
      if (ctrl.selectionStart || ctrl.selectionStart == '0') {
        CaretPos = ctrl.selectionStart;
      }
      return CaretPos;
    },
    // 在光标位置设值
    setScaleOfMarks(val) {
      let position = document.getElementById('test');
      let pos = this.getPositionForTextArea(position);
      this.frontString = this.textarea.substring(0, pos);
      this.afterString = this.textarea.substring(pos, this.textarea.length);
      this.textarea = this.frontString + val + this.afterString;
      pos = pos + val.length;
      this.$nextTick(() => {
        position.focus();
        position.setSelectionRange(pos, pos);
      });
    },
    // 试算校验
    handleTrial() {
      if (!this.textarea) {
        return alert('请输入公式');
      }
      const test = /IF\(/gm.test(this.textarea);
      console.log(test);
    },
    handleSubmit() {
      console.log('提交form', this.form);
      console.log('提交array', this.arr);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>