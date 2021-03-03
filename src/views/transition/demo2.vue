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
        <div class="tabs-bar" :style="tabsBarStyle"></div>
      </div>
    </div>
    <div class="rotate-img">
      <img src="../../assets/logo.png" alt="" />
      旋转
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
      tabsBarNum: 0,
      // 下面优先级切换标记
      bottomPriorityFlag: '',
    };
  },
  computed: {
    tabsBarStyle() {
      return { transform: 'translateX(' + this.tabsBarNum + 'px)' };
    },
  },
  mounted() {
    this.prioritySelect[0].tab = true;
  },
  methods: {
    /** 切换已获取数据的优先级 */
    handleTabCut(index, val) {
      if (val) {
        this.tabsBarNum = index * 125;
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
  .note-pad-content {
    .tabs-header {
      display: flex;
      justify-content: center;
      margin: auto;
      .tab-div {
        border-bottom: 2px solid #e8f5ff;
        height: 40px;
        line-height: 50px;
        // border-bottom: 2px solid #1f94de;
        width: 125px;
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
    .tabs-bar {
      border: 1px solid blue;
      width: 123px;
      margin: 10px 0;
      position: absolute;
      left: 37%;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &::after {
      width: 100%;
      height: 2px;
      border-bottom: 2px solid red;
      content: '';
      position: absolute;
      left: 0;
    }
  }
  .rotate-img {
    margin: 30px 0;
    img {
      width: 45px;
      // transition: 0.3s;
      // transition-duration: 5s;
      // transform-style: flat;
      &:hover {
        // transform: rotate(360 * 4deg);
        // animation: rotate 0.3s linear infinite;
        animation: rotate 0.3s linear 5;
      }
    }
    @-webkit-keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
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
