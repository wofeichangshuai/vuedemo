<template>
  <div class="demo2">
    <div class="note-pad-content">
      <div class="tabs-header">
        <template v-for="(item, index) in prioritySelect">
          <div
            :style="[item.tab ? tabStyle : '']"
            @click="handleTabCut(index, item.value)"
            :key="item.value"
            class="tab-div"
          >
            {{ item.label }}
            <transition name="tabHeaderTrans">
              <div class="tran-div" v-if="item.tab"></div>
            </transition>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prioritySelect: [
        {
          value: '3',
          label: '急',
          borderColor: '#ffbfb8',
          radio: false,
          tab: false,
          radioColor: '#f12b2b',
        },
        {
          value: '2',
          label: '高',
          borderColor: '#f3a160',
          radio: false,
          tab: false,
          radioColor: '#f9862b',
        },
        {
          value: '1',
          label: '中',
          borderColor: '#23b2f0',
          radio: false,
          tab: false,
          radioColor: '#08b1fb',
        },
        {
          value: '0',
          label: '低',
          borderColor: '#45c8ad',
          radio: false,
          tab: false,
          radioColor: '#07c59e',
        },
      ],
      tabStyle: {
        borderBottom: '2px solid #1f94de',
        color: '#1f94de',
      },
      // 下面优先级切换标记
      bottomPriorityFlag: '',
    };
  },
  mounted() {
    this.prioritySelect[0].tab = true;
  },
  methods: {
    /** 切换已获取数据的优先级 */
    handleTabCut(index, val) {
      if (val) {
        this.prioritySelect.map((item) => {
          return (item.tab = false);
        });

        this.prioritySelect[index].tab = true;
      }
    },
  },
};
</script>

<style lang="scss">
.demo2 {
  .tabs-header {
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: auto;
    .tab-div {
      border-bottom: 2px solid #e8f5ff;
      height: 40px;
      line-height: 50px;
      // border-bottom: 2px solid #1f94de;
      width: 100%;
      text-align: center;
      position: relative;
      &:hover {
        cursor: pointer;
        color: #1f94de;
      }
      .tran-div {
        width: 100%;
        height: 100%;
        border-top: 1px solid red;
        position: absolute;
        top: 0px;
      }
    }
  }
}
.tabHeaderTrans-enter-active {
  transition: width 0.3s ease-in;
  width: 100% !important;
}
.tabHeaderTrans-leave-active {
  transition: width 0;
  width: 100% !important;
}
.tabHeaderTrans-enter,
.tabHeaderTrans-leave-to {
  width: 0 !important;
  //   transform: translateX(10px);
}
</style>
