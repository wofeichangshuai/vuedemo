<!--
 * @Author: your name
 * @Date: 2021-02-12 12:42:58
 * @LastEditTime: 2021-02-15 14:44:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\antv\g6SimpleInteraction.vue
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
            id: 'node1-可拖拽',
            x: 100,
            y: 200,
          },
          {
            id: 'node2-可拖拽',
            x: 300,
            y: 200,
          },
        ],
        edges: [
          {
            id: 'edge1',
            target: 'node2',
            source: 'node1',
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
      this.graph = new G6.Graph({
        container: 'mountNode',
        width: 500,
        height: 500,
        defaultNode: {},
      });
      this.graph.node((node) => {
        return {
          label: node.id,
        };
      });
      this.graph.read(this.data);
      let node;
      let dx;
      let dy;
      this.graph.on('node:dragstart', (ev) => {
        // console.log('ev=', ev);
        const { item } = ev;
        const model = item.getModel();
        node = item;
        dx = model.x - ev.x;
        dy = model.y - ev.y;
      });
      this.graph.on('node:drag', (ev) => {
        // console.log(ev.x, ev.y);
        if (node) {
          this.graph.update(node, {
            x: ev.x + dx,
            y: ev.y + dy,
          });
        }
      });
      this.graph.on('node:dragend', () => {
        node = null;
      });
    },
  },
};
</script>

<style>
</style>