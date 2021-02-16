<!--
 * @Author: your name
 * @Date: 2021-02-07 16:33:52
 * @LastEditTime: 2021-02-14 18:48:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\antv\g6TreeGraph.vue
-->
<template>
  <div id="g6">
    <div id="container" />
  </div>
</template>

<script>
import G6 from '@antv/g6';
// import data1 from './data'
export default {
  data() {
    return {
      g6TreeGraph: null,
      data: {
        id: '1',
        label: '风险事件',

        children: [
          {
            label: '资金部门',

            children: [
              {
                label: 'Logistic regression',
              },
              {
                label: 'Linear discriminant analysis',
              },
              {
                label: 'Rules',
              },
              {
                label: 'Decision trees',
              },
              {
                label: 'Naive Bayes',
              },
              {
                label: 'K nearest neighbor',
              },
              {
                label: 'Probabilistic neural network',
              },
              {
                label: 'Support vector machine',
              },
            ],
          },
          {
            label: '换行部门',

            children: [
              {
                label: 'Models diversity',

                children: [
                  {
                    label: 'Different initializations',
                  },
                  {
                    label: 'Different parameter choices',
                  },
                  {
                    label: 'Different architectures',
                  },
                  {
                    label: 'Different modeling methods',
                  },
                  {
                    label: 'Different training sets',
                  },
                  {
                    label: 'Different feature sets',
                  },
                ],
              },
              {
                label: 'Methods',

                children: [
                  {
                    label: 'Classifier selection',
                  },
                  {
                    label: 'Classifier fusion',
                  },
                ],
              },
              {
                label: 'Common',

                children: [
                  {
                    label: 'Bagging',
                  },
                  {
                    label: 'Boosting',
                  },
                  {
                    label: 'AdaBoost',
                  },
                ],
              },
            ],
          },
          {
            label: '韩国部门',

            children: [
              {
                label: 'Multiple linear regression',
              },
              {
                label: 'Partial least squares',
              },
              {
                label: 'Multi-layer feedforward neural network',
              },
              {
                label: 'General regression neural network',
              },
              {
                label: 'Support vector regression',
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.initG6Tree();
  },
  methods: {
    initG6Tree() {
      G6.registerNode('rect-node', {
        draw: (cfg, group) => {
          //最外面的那层
          const shape = group.addShape('rect', {
            draggable: true,
            attrs: {
              x: 0,
              y: 0,
              width: 125,
              height: 40,
              //填充色
              fill: cfg.style.fill,
              //边框
              stroke: '',
              radius: 8,
            },
          });
          //里面的那层
          group.addShape('rect', {
            draggable: true,
            attrs: {
              x: 5,
              y: 0,
              width: 120,
              height: 40,
              //填充色
              fill: '#eee',
              //边框
              stroke: '',
              radius: 6,
            },
          });
          //文字
          group.addShape('text', {
            attrs: {
              // textBaseline: 'center',
              y: 25,
              x: 24,
              lineHeight: 10,
              text: cfg.label,
              fill: '#000',
            },
          });
          return shape;
        },
      });
      this.g6TreeGraph = new G6.TreeGraph({
        container: 'container',
        width: window.innerWidth,
        height: window.innerHeight,
        linkCenter: true,
        defaultNode: {
          type: 'rect-node',
          // size: [100],
          // color: '#5b8ff9',
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
          type: 'cubic-horizontal',
          style: {
            stroke: 'red',
          },
        },
        layout: {
          type: 'mindmap',
          getHGap: () => 50,
          getVGap: () => 10,
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas'],
        },
        fitView: true,
        maxZoom: 1,
      });
      this.g6TreeGraph.data(this.data);
      this.g6TreeGraph.render();
      this.bindEvents();
    },
    bindEvents() {
      this.g6TreeGraph.on('node:click', (e) => {
        console.log(e);
      });
    },
  },
};
</script>
