<!--
 * @Author: your name
 * @Date: 2021-02-12 12:38:13
 * @LastEditTime: 2021-02-15 13:43:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\antv\g6RegisterGroup1.vue
-->
<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from '@antv/g6';
export default {
  mounted() {
    this.initGroup();
  },
  methods: {
    initGroup() {
      G6.registerGroup('custom', {
        draw(item) {
          console.log('item=', item);
          const group = item.getGraphicGroup();
          const childrenBox = item.getChildrenBBox();
          group.addShape('text', {
            attrs: {
              x: childrenBox.x,
              y: childrenBox.y,
              text: '这是一个群组',
              fill: 'red',
            },
          });
          return group.addShape('rect', {
            attrs: {
              ...childrenBox,
              stroke: 'red',
            },
          });
        },
      });
      const data = {
        nodes: [
          {
            id: 'node1',
            x: 100,
            y: 200,
            label: '节点1',
            parent: 'group1',
          },
          {
            id: 'node2',
            x: 300,
            y: 200,
            label: '节点2',
            parent: 'group1',
          },
        ],
        edges: [
          {
            id: 'edge1',
            target: 'node2',
            source: 'node1',
          },
        ],
        groups: [
          {
            id: 'group1',
            label: '群组',
          },
        ],
      };
      const graph = new G6.Graph({
        container: 'mountNode',
        fitView: 'cc',
        width: 500,
        height: 500,
      });
      graph.group({
        shape: 'custom',
      });
      graph.read(data);
    },
  },
};
</script>

<style>
</style>
