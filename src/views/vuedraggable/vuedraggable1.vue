<!--
 * @Author: your name
 * @Date: 2021-04-23 09:59:52
 * @LastEditTime: 2021-05-08 14:33:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\vuedraggable\vuedraggable1.vue
-->
<template>
  <div class="vuedraggable1">
    <ul class="person-list">
      <li style="background: #9ee39a;margin-bottom:10px;border:1px solid red;" v-for="(item,index) in person" :key="'oneItem'+index" v-dragging="{ item: item, list: person, group: 'personInfo' }">
        {{ item.name }}
        <ul>
          <li v-for="(twoItem,i) in item.children" :key="'twoItem'+i" v-dragging="{ item: twoItem, list: item.children, group: item.name }">
            {{ twoItem.name }}
          </li>
        </ul>
      </li>
    </ul>

    <el-divider></el-divider>

    <div class="wholeList">
      <draggable class="leftCon" :list="tolList">
        <div class="leftConLi" v-for="element in tolList" :key="element.id">
          {{ element.name }}
        </div>
      </draggable>
      <ul class="oneUl">
        <li class="oneLi" v-for="(item,index) in tolList" :key="index">
          <!--拖拽内容部分-1-->
          <draggable v-if="index === 0" class="dragArea list-group" :list="item.children" :clone="clone" :group="{ name: 'people', pull: pullFunction }" @start="start">
            <div v-for="element in item.children" :key="element.id" class="list-group-item">
              {{ element.name }}
            </div>
          </draggable>
          <!--拖拽内容部分-其他-->
          <draggable v-else class="dragArea list-group" :list="item.children" :clone="clone" group="people">
            <div v-for="element in item.children" :key="element.id" class="list-group-item">
              {{ element.name }}
            </div>
          </draggable>
        </li>

      </ul>

      <el-button @click="getNewList">点我看console里面的最新数据</el-button>
    </div>

    <el-divider></el-divider>

    <draggable>
      <el-button>111</el-button>
      <el-button>222</el-button>
      <el-button>333</el-button>
      <el-button>444</el-button>
      <el-button>555</el-button>
      <el-button>666</el-button>
      <el-button>777</el-button>
      <el-button>888</el-button>
      <el-button>999</el-button>
      <el-button>000</el-button>
    </draggable>

    <el-divider></el-divider>
    <el-table :data="tableData" border width="100%" row-key="id" align="left">
      <draggable>
        <el-table-column width="50px">
          <template slot-scope="scope">
            <el-button type='text' v-show="scope.row.defaultValue === 1">默认</el-button>
          </template>
        </el-table-column>
        <el-table-column width="60px" label="序号" type="index">
        </el-table-column>
        <el-table-column v-for="(item, index) in col" :key="`col_${index}`" :prop="dropCol[index].prop" :label="item.label">
        </el-table-column>
        <el-table-column label="操作" min-width="100">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-popover placement="top" v-model="scope.row.visible">
              <p>确定要删除当前内容？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" plain @click="scope.row.visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row), scope.row.visible = false">确定</el-button>
              </div>
              <el-button size="mini" type="danger" slot="reference">删除</el-button>
            </el-popover>

            <el-button size="mini" type="primary" @click="handleDefault(scope.$index, scope.row)" v-show="scope.row.defaultValue === 0">默认</el-button>
            <el-button size="mini" type="primary" @click="handleDefault(scope.$index, scope.row)" v-show="scope.row.defaultValue === 1">取消</el-button>
          </template>
        </el-table-column>
      </draggable>
    </el-table>
    <el-divider></el-divider>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import Sortable from 'sortablejs';
export default {
  components: { draggable },
  props: {},
  data() {
    return {
      person: [
        {
          name: '第一天',
          children: [
            {
              name: '1---111',
            },
            {
              name: '1---222',
            },
          ],
        },
        {
          name: '第二天',
          children: [
            {
              name: '2---111',
            },
            {
              name: '2---222',
            },
          ],
        },
        {
          name: '第三天',
          children: [
            {
              name: '3---111',
            },
            {
              name: '3---222',
            },
          ],
        },
      ],
      tolList: [
        {
          name: '第一天',
          children: [
            {
              name: '11111',
              id: 1,
            },
          ],
        },
        {
          name: '第二天',
          children: [
            {
              name: 'aaaaa',
              id: 11,
            },
            {
              name: 'bbbbbb',
              id: 12,
            },
          ],
        },
        {
          name: '第三天',
          children: [
            {
              name: ',,,111,,',
              id: 21,
            },
          ],
        },
      ],
      controlOnStart: true,
      col: [
        {
          label: '值',
          prop: 'dataKey',
        },
        {
          label: '显示名',
          prop: 'dataValue',
        },
      ],
      dropCol: [
        {
          label: '值',
          prop: 'dataKey',
        },
        {
          label: '显示名',
          prop: 'dataValue',
        },
      ],
      tableData: [
        { dataKey: 'key1', dataValue: 'value1' },
        { dataKey: 'key2', dataValue: 'value2' },
        { dataKey: 'key3', dataValue: 'value3' },
        { dataKey: 'key4', dataValue: 'value4' },
        { dataKey: 'key5', dataValue: 'value5' },
      ],
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.$dragging.$on('dragged', (res) => {
      // ...
      console.log('dragged=', res);
    });
    this.$dragging.$on('dragend', (res) => {
      // ...
      console.log('dragend=', res);
    });
  },
  methods: {
    clone({ name, id }) {
      return { name, id: id };
    },
    pullFunction() {
      return this.controlOnStart ? 'clone' : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
    getNewList() {
      let a = this.tolList;
      console.log(a);
    },
    //=============================================================================
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody');
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr');
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.dropCol[evt.oldIndex];
          this.dropCol.splice(evt.oldIndex, 1);
          this.dropCol.splice(evt.newIndex, 0, oldItem);
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.person-list {
  margin-top: 20px;
  width: 500px;
}
</style>