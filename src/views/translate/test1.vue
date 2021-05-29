<!--
 * @Author: your name
 * @Date: 2021-05-29 17:16:42
 * @LastEditTime: 2021-05-29 17:56:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\translate\test1.vue
-->
<template>
  <div class="translate-test">
    <div class="translate-container1">
      <div :class="['translate-container__left',isOpen1 ? 'open':'close']">left</div>
      <div class="translate-container__middle" @click="middleClick1">middle</div>
      <div :class="['translate-container__right',isOpen1 ? 'open':'close']">right</div>
    </div>
    <div class="translate-container2">
      <div :class="['translate-container__top',isOpen2 ? 'open':'close']">top</div>
      <div class="translate-container__middle" @click="middleClick2">middle</div>
      <div :class="['translate-container__bottom',isOpen2 ? 'open':'close']">bottom</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isOpen1: true,
      isOpen2: true,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    middleClick1() {
      this.isOpen1 = !this.isOpen1;
    },
    middleClick2() {
      this.isOpen2 = !this.isOpen2;
    },
  },
};
</script>
<style lang="scss" scoped>
.translate-test {
  display: flex;
  justify-content: space-between;
  .translate-container1 {
    width: 355px;
    display: flex;
    align-items: center;
    .translate-container__left {
      transition: width 1s;
      width: 100px;
      height: 200px;
      line-height: 200px;
      background-color: antiquewhite;
      &.close {
        width: 0;
      }
    }
    .translate-container__middle {
      width: 55px;
      height: 100px;
      line-height: 100px;
      background-color: #476aab;
      cursor: pointer;
    }
    .translate-container__right {
      transition: width 1s;
      height: 200px;
      line-height: 200px;
      background-color: #94d6b5;
      &.open {
        width: calc(100% - 155px);
      }
      &.close {
        width: calc(100% - 55px);
      }
    }
  }
  .translate-container2 {
    height: 355px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .translate-container__top {
      transition: height 1s;
      width: 200px;
      height: 100px;
      line-height: 100px;
      background-color: antiquewhite;
      &.close {
        height: 0;
      }
    }
    .translate-container__middle {
      width: 100px;
      height: 55px;
      background-color: #476aab;
      cursor: pointer;
    }
    .translate-container__bottom {
      transition: height 1s;
      width: 200px;
      background-color: #94d6b5;
      &.open {
        height: calc(100% - 155px);
      }
      &.close {
        height: calc(100% - 55px);
      }
    }
  }
}
</style>