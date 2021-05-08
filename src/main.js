/*
 * @Author: your name
 * @Date: 2021-02-07 15:39:47
 * @LastEditTime: 2021-04-23 09:51:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入拖拽排序插件
import VueDND from 'awe-dnd'

Vue.use(ElementUI);
Vue.use(VueDND)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
