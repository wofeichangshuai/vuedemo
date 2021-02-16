<!--
 * @Author: your name
 * @Date: 2021-02-07 15:50:29
 * @LastEditTime: 2021-02-14 15:44:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\antv\g6Graph.vue
-->
<template>
  <div id="g6">
    <div id="container" />
  </div>
</template>

<script>
import G6 from '@antv/g6';
export default {
  data() {
    return {
      g6Graph: null,
      data: {
        nodes: [
          {
            id: 'node1',
            label: 'Circle1',
            x: 150,
            y: 150,
          },
          {
            id: 'node2',
            label: 'Circle2',
            x: 400,
            y: 150,
          },
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
          },
        ],
      },
    };
  },
  mounted() {
    this.initG6();
  },
  methods: {
    initG6() {
      this.g6Graph = new G6.Graph({
        container: 'container',
        width: 500,
        height: 500,
        modes: { default: ['drag-canvas', 'zoom-canvas', 'drag-node'] },
        defaultNode: {
          // 圆形
          // type: "circle",
          // 矩形
          type: 'rect',
          size: [100],
          color: '#5b8ff9',
          style: {
            fill: '#9ec9ff',
            lineWidth: 3,
          },
          labelCfg: {
            style: {
              fill: '#fff',
              fontSize: 20,
            },
          },
        },
        defaultEdge: {
          style: {
            stroke: 'red',
          },
        },
      });
      this.g6Graph.data(this.data);
      this.g6Graph.render();
      console.log('g6=', this.g6Graph);
      this.bindEvents();
    },
    bindEvents() {
      this.g6Graph.on('node:click', (e) => {
        console.log(e);
      });
    },
  },
};
</script>

<style>
</style>
