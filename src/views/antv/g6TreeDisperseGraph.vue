<!--
 * @Author: your name
 * @Date: 2021-02-07 16:33:52
 * @LastEditTime: 2021-02-19 18:48:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\antv\g6TreeGraph.vue
-->
<template>
  <div id="g6">
    <div id="container"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6';
import dataImp from './data';
export default {
  data() {
    return {
      graph: null,
      data: {
        id: 'Modeling Methods',
        children: [
          {
            id: 'Classification',
            children: [
              {
                id: 'Logistic regression',
              },
              {
                id: 'Linear discriminant analysis',
              },
              {
                id: 'Rules',
              },
              {
                id: 'Decision trees',
              },
              {
                id: 'Naive Bayes',
              },
              {
                id: 'K nearest neighbor',
              },
              {
                id: 'Probabilistic neural network',
              },
              {
                id: 'Support vector machine',
              },
            ],
          },
          {
            id: 'Consensus',
            children: [
              {
                id: 'Models diversity',
                children: [
                  {
                    id: 'Different initializations',
                  },
                  {
                    id: 'Different parameter choices',
                  },
                  {
                    id: 'Different architectures',
                  },
                  {
                    id: 'Different modeling methods',
                  },
                  {
                    id: 'Different training sets',
                  },
                  {
                    id: 'Different feature sets',
                  },
                ],
              },
              {
                id: 'Methods',
                children: [
                  {
                    id: 'Classifier selection',
                  },
                  {
                    id: 'Classifier fusion',
                  },
                ],
              },
              {
                id: 'Common',
                children: [
                  {
                    id: 'Bagging',
                  },
                  {
                    id: 'Boosting',
                  },
                  {
                    id: 'AdaBoost',
                  },
                ],
              },
            ],
          },
          {
            id: 'Regression',
            children: [
              {
                id: 'Multiple linear regression',
              },
              {
                id: 'Partial least squares',
              },
              {
                id: 'Multi-layer feedforward neural network',
              },
              {
                id: 'General regression neural network',
              },
              {
                id: 'Support vector regression',
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
    /**
     * @description: 初始化树
     * @param {*}
     * @return {*}
     */
    initG6Tree() {
      const container = document.getElementById('container');
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      this.graph = new G6.TreeGraph({
        container: 'container',
        width,
        height,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                console.log('item=', item, collapsed);
                const data = item.get('model');
                data.collapsed = collapsed;
                item.toFront();
                return true;
              },
            },
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          type: 'rect',
          style: {
            // height: 30,
            radius: 4,
            fill: '#e8e8e8',
            stroke: '#fff',
          },
          labelCfg: {
            position: 'center',
            offset: 2,
            style: {
              fontSize: 14,
            },
          },
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          // type: 'cubic-horizontal',
          type: 'polyline',
        },
        layout: {
          type: 'mindmap',
          direction: 'H',
          getHeight: () => {
            return 30;
          },
          getWidth: () => {
            return 16;
          },
          getVGap: () => {
            return 20;
          },
          getHGap: () => {
            return 100;
          },
        },
        fitView: true,
        minZoom: 0.7,
        maxZoom: 1,
      });

      this.graph.on('node:click', (e) => {
        console.log('g6=', G6);
        const model = e.item.getModel();
        // console.log('e=', e, model);
        // model.collapsed = !model.collapsed;
        // this.graph.updateItem(e.item, model);
        // this.graph.layout();
        // this.graph.changeData(JSON.parse(JSON.stringify(model)));

        e.item.toFront();

        /**
         * @description: 是否有子节点，没有可以有点击事件
         */
        if (!model.children) {
          console.log(model.label);
        }
      });

      this.graph.node((node) => {
        console.log('node=', node);
        // console.log(node.label, G6.Util.getTextSize(node.label, 14));
        // const size = G6.Util.getTextSize(node.label, 14);
        const size = G6.Util.getTextSize(
          node.label,
          node.labelCfg.style.fontSize
        );
        // console.log('this.size=',);
        return {
          size: node.size ? node.size : [size[0] + 30, 30],
        };
      });

      // let centerX = 0;
      // this.graph.node(function (node) {
      //   if (node.id === 'Modeling Methods') {
      //     centerX = node.x;
      //   }
      //   return {
      //     label: node.id,
      //     labelCfg: {
      //       position:
      //         node.children && node.children.length > 0
      //           ? 'left'
      //           : node.x > centerX
      //           ? 'right'
      //           : 'left',
      //       offset: 5,
      //     },
      //   };
      // });

      // this.graph.data(this.data);
      this.graph.data(dataImp);
      this.graph.render();

      // if (typeof window !== 'undefined') {
      //   window.onresize = () => {
      //     if (!graph || graph.get('destroyed')) return;
      //     if (!container || !container.scrollWidth || !container.scrollHeight)
      //       return;
      //     graph.changeSize(container.scrollWidth, container.scrollHeight);
      //   };
      // }
    },
  },
};
</script>