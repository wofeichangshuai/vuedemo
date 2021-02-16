<!--
 * @Author: your name
 * @Date: 2021-02-11 21:17:31
 * @LastEditTime: 2021-02-12 10:21:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\components\BackHome.vue
-->
<template>
  <div class="back-home">
    <router-link to="/">
      <el-button type="primary" class="back-home-button"> 返回菜单 </el-button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.back-home {
  .back-home-button {
    position: fixed;
    top: 15px;
    left: 20px;
  }
}
</style>
