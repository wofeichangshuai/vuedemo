<!--
 * @Author: your name
 * @Date: 2021-03-01 18:55:33
 * @LastEditTime: 2021-03-01 19:47:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\transition\dome1.vue
-->
<template>
  <div class="dome1">
    <transition name="show-tran">
      <div v-show="show">show</div>
    </transition>
    <el-button @click="clickButton">click</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    clickButton() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss">
.dome1 {
  div {
    width: 100px;
    height: 100px;
    border-bottom: 2px solid red;
  }
}
.show-tran-enter-active,
.show-tran-leave-active {
  transition: width 0.8s ease-in;
  width: 100px !important;
}
.show-tran-enter,
.show-tran-leave-to {
  width: 0 !important;
}
</style>
