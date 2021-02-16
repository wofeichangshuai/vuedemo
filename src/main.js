/*
 * @Author: your name
 * @Date: 2021-02-07 15:39:47
 * @LastEditTime: 2021-02-12 10:31:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
