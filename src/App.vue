<!--
 * @Author: your name
 * @Date: 2021-02-07 15:39:47
 * @LastEditTime: 2021-02-11 21:22:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\App.vue
-->
<template>
  <div id="app">
    <back-home />
    <router-view />
  </div>
</template>

<script>
import BackHome from '@/components/BackHome.vue';
export default {
  name: 'App',
  components: { BackHome },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
