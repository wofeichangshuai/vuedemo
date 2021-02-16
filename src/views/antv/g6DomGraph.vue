<!--
 * @Author: your name
 * @Date: 2021-02-12 16:43:43
 * @LastEditTime: 2021-02-15 17:22:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\antv\g6DomGraph.vue
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
          { id: 'node1', label: 'node1234', x: 50, y: 100 },
          { id: 'node2', label: 'node3', x: 150, y: 100 },
          { id: 'node3', label: 'node333333333', x: 150, y: 150 },
        ],
        edges: [
          { source: 'node1', target: 'node2' },
          { source: 'node1', target: 'node3' },
        ],
      },
    };
  },
  mounted() {
    this.initG6();
  },
  methods: {
    initG6() {
      G6.registerNode(
        'dom-node',
        {
          draw: (cfg, group) => {
            // console.log(cfg, cfg.label.length, group);
            return group.addShape('dom', {
              attrs: {
                // width: cfg.size[0],
                width:
                  cfg.label.length * 16 - 30 < 100
                    ? 100
                    : cfg.label.length * 16 - 30,
                height: cfg.size[1],
                // DOM's html
                html: `
                      <div onclick="htmlClick('${
                        cfg.label
                      }')" style="background-color: #fff; border: 2px solid #5B8FF9; border-radius: 5px; width:95%; height: ${
                  cfg.size[1] - 5
                }px; display: flex;">
                        <div style="height: 100%; width: 40px; background-color: #CDDDFD">
                          <img alt="img" style="line-height: 100%; padding-top: 6px; padding-left: 8px;" src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ" width="20" height="20" />  
                        </div>
                        <span style="margin:auto; padding:auto; color: #5B8FF9">${
                          cfg.label
                        }</span>
                      </div>
                        `,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: 'dom-shape',
              draggable: true,
            });
          },
        }
        // 'single-node'
      );
      this.graph = new G6.Graph({
        container: 'mountNode',
        width: window.innerWidth,
        height: window.innerHeight,
        defaultNode: {
          type: 'dom-node',
          size: [120, 40],
        },
        modes: {
          default: ['zoom-canvas', 'drag-canvas'],
        },
        layout: {
          type: 'circular',
        },
        renderer: 'svg',
      });
      this.graph.data(this.data);
      this.graph.render();
    },
  },
};
</script>

<style>
</style>
