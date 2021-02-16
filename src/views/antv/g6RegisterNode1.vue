<!--
 * @Author: your name
 * @Date: 2021-02-12 11:22:12
 * @LastEditTime: 2021-02-15 15:01:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\antv\g6RegistNode1.vue
-->
<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from '@antv/g6';
export default {
  data() {
    return {
      graph: null,
      data: {
        nodes: [
          {
            // shape: 'customNode',
            id: 'node1',
            x: 50,
            y: 100,
          },
          {
            // shape: 'customNode',
            id: 'node2',
            x: 250,
            y: 100,
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initG6();
    });
  },
  methods: {
    initG6() {
      G6.registerNode('customNode', {
        draw(cfg, group) {
          console.log(cfg, group);
          group.addShape('text', {
            attrs: {
              x: 0,
              y: 0,
              fill: '#333',
              text: '我是一个自定义节点，\n有下面那个方形和我自己组成',
            },
          });
          group.addShape('text', {
            attrs: {
              x: 0,
              y: 0,
              fill: '#333',
              text: ' (' + cfg.x + ', ' + cfg.y + ') \n 原点是组的图坐标',
              textBaseline: 'top',
            },
          });
          group.addShape('circle', {
            attrs: {
              x: 0,
              y: 0,
              r: 4,
              fill: 'blue',
            },
          });
          return group.addShape('rect', {
            attrs: {
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              stroke: 'red',
            },
          });
        },
      });

      this.graph = new G6.Graph({
        // dom 容器 或 容器ID
        container: 'mountNode',
        // 画布宽
        width: 500,
        // 画布高
        height: 500,
        defaultNode: {
          type: 'customNode',
        },
      });
      this.graph.node((node) => {
        return {
          type: node.shape,
        };
      });
      this.graph.read(this.data);
      console.log(this.graph);
    },
  },
};
</script>

<style>
</style>
