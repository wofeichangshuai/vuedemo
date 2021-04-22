/*
 * @Author: your name
 * @Date: 2021-02-07 16:26:13
 * @LastEditTime: 2021-04-22 16:21:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\router\index.js
 */
import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/MenuBar.vue'),
  },
  {
    path: '/g6Graph',
    name: '/g6Graph',
    component: () => import('@/views/antv/g6Graph.vue'),
  },
  {
    path: '/g6TreeGraph',
    name: 'g6TreeGraph',
    component: () => import('@/views/antv/g6TreeGraph.vue'),
  },
  {
    path: '/g6RegisterNode1',
    name: 'g6RegisterNode1',
    component: () => import('@/views/antv/g6RegisterNode1.vue'),
  },
  {
    path: '/g6RegisterEdge1',
    name: 'g6RegisterEdge1',
    component: () => import('@/views/antv/g6RegisterEdge1.vue'),
  },
  {
    path: '/g6RegisterGroup1',
    name: 'g6RegisterGroup1',
    component: () => import('@/views/antv/g6RegisterGroup1.vue'),
  },
  {
    path: '/g6SimpleInteraction',
    name: 'g6SimpleInteraction',
    component: () => import('@/views/antv/g6SimpleInteraction.vue'),
  },
  {
    path: '/g6DomGraph',
    name: 'g6DomGraph',
    component: () => import('@/views/antv/g6DomGraph.vue'),
  },
  {
    path: '/g6TreeDisperseGraph',
    name: 'g6TreeDisperseGraph',
    component: () => import('@/views/antv/g6TreeDisperseGraph.vue'),
  },
  {
    path: '/transitionDemo1',
    name: 'transitionDemo1',
    component: () => import('@/views/transition/demo1.vue'),
  },
  {
    path: '/transitionDemo2',
    name: 'transitionDemo2',
    component: () => import('@/views/transition/demo2.vue'),
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import('@/views/test/test1.vue'),
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
