<!--
 * @Author: your name
 * @Date: 2021-02-07 15:43:40
 * @LastEditTime: 2021-06-21 14:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\components\MenuBar.vue
-->
<template>
  <div class="menuBar">
    <el-row>
      <el-col :span="24">
        <router-link to="/g6Graph">
          <el-button type="primary"> G6 Graph </el-button>
        </router-link>
        <router-link to="/g6TreeGraph">
          <el-button type="primary"> G6 Tree Graph </el-button>
        </router-link>
        <router-link to="/g6RegisterNode1">
          <el-button type="primary"> G6 Register Node1 </el-button>
        </router-link>
        <router-link to="/g6RegisterEdge1">
          <el-button type="primary"> G6 Register Edge1 </el-button>
        </router-link>
        <router-link to="/g6RegisterGroup1">
          <el-button type="primary"> G6 Register Group1 </el-button>
        </router-link>
      </el-col>
      <el-col :span="24">
        <router-link to="/g6SimpleInteraction">
          <el-button type="primary"> G6 Simple Interaction </el-button>
        </router-link>
        <router-link to="/g6DomGraph">
          <el-button type="primary"> G6 Dom Graph </el-button>
        </router-link>
        <router-link to="/g6TreeDisperseGraph">
          <el-button type="primary"> G6 Tree Disperse Graph </el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-divider></el-divider>
    <el-row>
      <el-col :span="24">
        <router-link to="/transitionDemo1">
          <el-button type="primary"> Transition Demo1 </el-button>
        </router-link>
        <router-link to="/transitionDemo2">
          <el-button type="primary"> Transition Demo2 </el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-divider></el-divider>
    <el-row>
      <el-col :span="24">
        <router-link to="/vuedraggable1">
          <el-button type="primary"> vuedraggable1 </el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-divider></el-divider>
    <el-row>
      <el-col :span="24">
        <router-link to="/test1">
          <el-button type="primary"> 公式test </el-button>
        </router-link>
        <router-link to="/cycleSetting">
          <el-button type="primary"> 周期重复规则设置 </el-button>
        </router-link>
        <router-link to="/test/test2">
          <el-button type="primary"> /test/test2 </el-button>
        </router-link>
        <router-link to="/test/test3">
          <el-button type="primary"> /test/test3 </el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-divider>平移</el-divider>
    <el-row>
      <el-col :span="24">
        <router-link to="/translate/test1">
          <el-button type="primary"> test1 </el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.el-col {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
}
</style>
