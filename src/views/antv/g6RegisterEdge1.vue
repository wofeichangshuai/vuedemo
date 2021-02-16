<!--
 * @Author: your name
 * @Date: 2021-02-12 12:05:33
 * @LastEditTime: 2021-02-15 13:33:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\antv\g6RegisterEdge1.vue
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
            id: 'node1',
            x: 100,
            y: 200,
          },
          {
            id: 'node2',
            x: 300,
            y: 260,
          },
        ],
        edges: [
          {
            shape: 'horizontal-smooth',
            target: 'node2',
            source: 'node1',
          },
        ],
      },
    };
  },
  mounted() {
    this.initLine();
  },
  methods: {
    initLine() {
      G6.registerEdge('horizontal-smooth', {
        draw(cfg, group) {
          console.log(cfg, group);
          const startPoint = cfg.startPoint;
          const endPoint = cfg.endPoint;
          const shape = group.addShape('path', {
            attrs: {
              stroke: '#333',
              path: [
                ['M', startPoint.x, startPoint.y],
                ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y],
                ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y],
                ['L', endPoint.x, endPoint.y],
              ],
              name: 'path-shape',
            },
          });
          return shape;
        },
      });

      this.graph = new G6.Graph({
        container: 'mountNode',
        width: 500,
        height: 500,
        // defaultEdge: {
        //   type: 'horizontal-smooth',
        // },
      });
      this.graph.node((node) => {
        console.log('node=', node);
        return {
          label: node.id,
        };
      });
      this.graph.edge((edge) => {
        console.log('edge=', edge);
        return {
          // type: edge.shape,
          label: edge.shape,
          labelCfg: {
            position: 'middle',
            style: {
              fill: 'red',
            },
          },
        };
      });
      this.graph.read(this.data);
    },
  },
};
</script>

<style>
</style>
