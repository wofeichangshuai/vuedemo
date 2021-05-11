<!--
 * @Author: your name
 * @Date: 2021-05-11 10:01:54
 * @LastEditTime: 2021-05-11 15:05:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\test\cycleSetting.vue
-->
<template>
  <div class="cycle-setting">
    <el-select v-model="setting" @change="handlerSetting">
      <el-option v-for="item in settingOptions" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-dialog :visible.sync="dialogVisible" width="1200px  " :close-on-click-modal="false" append-to-body custom-class="form-details-dialog-custom-class cycle-setting-dialog-form" :before-close="cancel">
      <el-form ref="form" :model="form" :rules="rules" size="small" label-width="140px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="生成设置：" prop="a">
              <!-- 生成设置 -----月 -->
              <template v-if="setting === 'month'">
                每月第
                <el-input-number v-model="createDay" :max="maxDay" :min="1" controls-position="right" />
                天生成计划
              </template>
              <template v-else>
                每{{settingParams[setting].label}}第
                <el-input-number v-model="createMonth" :max="settingParams[setting].maxMonth" :min="1" controls-position="right" />
                月第
                <el-input-number v-model="createDay" :max="31" :min="1" controls-position="right" />
                天生成计划
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="考核周期起止日期：" prop="b">
              <!-- 考核周期起止日期 -----月 -->
              <template v-if="setting === 'month'">
                本月第
                <el-input-number v-model="examinationStartDay" :max="maxDay" :min="1" controls-position="right" />
                天 <span class="span1">~</span> 本月最后1天
              </template>
              <template v-else>
                本{{settingParams[setting].label}}第
                <el-input-number v-model="examinationStartMonth" :max="settingParams[setting].maxMonth" :min="1" controls-position="right" />
                月第
                <el-input-number v-model="examinationStartDay" :max="31" :min="1" controls-position="right" />
                天 <span class="span1">~</span>
                <el-select v-model="examinationEndSelect">
                  <el-option v-for="item in settingParams[setting].options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                第
                <el-input-number v-model="examinationEndMonth" :max="settingParams[setting].maxMonth" :min="1" controls-position="right" />
                月最后1天
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="评估起止日期：" prop="c">
              <!-- 评估起止日期 -----月 -->
              <template v-if="setting === 'month'">
                <el-select v-model="estimationStartSelect" @change="estimationStartChange">
                  <el-option v-for="item in monthOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-input-number v-model="estimationStartDay" :max="estimationStartSelect === '0' ? maxDay : maxNextDay" :min="1" controls-position="right" />
                号 <span class="span1">~</span>
                <el-select v-model="estimationEndSelect" @change="estimationEndChange">
                  <el-option v-for="item in monthOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-input-number v-model="estimationEndDay" :max="estimationEndSelect === '0' ? maxDay : maxNextDay" :min="1" controls-position="right" />
                号
              </template>
              <template v-else>
                考核结束<el-select v-model="estimationOverSelect">
                  <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-input-number v-model="estimationOverDay" :max="settingParams[setting].maxDay" :min="1" controls-position="right" />
                天 <span class="span1">~</span> 周期长
                <el-input-number v-model="estimationCycleLength" :max="settingParams[setting].maxDay" :min="1" controls-position="right" />
                天
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="周期重复结束日期：" prop="d">
              <el-date-picker v-model="cycleReportEndDate" type="date" placeholder="请选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {},
      dialogVisible: true,
      rules: {},
      setting: 'month',
      settingParams: {
        season: {
          label: '季度',
          maxMonth: 3,
          maxDay: 90,
          options: [
            {
              label: '本季度',
              value: '0',
            },
            {
              label: '次季度',
              value: '1',
            },
          ],
        },
        halfYear: {
          label: '半年',
          maxMonth: 6,
          maxDay: 180,
          options: [
            {
              label: '本半年',
              value: '0',
            },
            {
              label: '下半年',
              value: '1',
            },
          ],
        },
        year: {
          label: '年',
          maxMonth: 12,
          maxDay: 366,
          options: [
            {
              label: '本年',
              value: '0',
            },
            {
              label: '次年',
              value: '1',
            },
          ],
        },
      },
      settingOptions: [
        // {
        //   label: '周',
        //   value: 'week',
        // },
        {
          label: '月',
          value: 'month',
        },
        {
          label: '季',
          value: 'season',
        },
        {
          label: '半年',
          value: 'halfYear',
        },
        {
          label: '年',
          value: 'year',
        },
      ],
      monthOptions: [
        {
          label: '本月',
          value: '0',
        },
        {
          label: '次月',
          value: '1',
        },
      ],
      selectOptions: [
        {
          label: '前',
          value: '0',
        },
        {
          label: '后',
          value: '1',
        },
      ],
      // 生成设置 月
      createMonth: 1,
      // 生成设置 天
      createDay: 1,
      // 考核 起始 月
      examinationStartMonth: 1,
      // 考核 起始 天
      examinationStartDay: 1,
      // 考核 截止 选择
      examinationEndSelect: '0',
      // 考核 截止 月
      examinationEndMonth: 1,
      // 评估 起始 月选择
      estimationStartSelect: '0',
      // 评估 起始 天
      estimationStartDay: Number(moment().format('DD')),
      // 评估 截止 月选择
      estimationEndSelect: '1',
      // 评估 截止 天
      estimationEndDay: 3,
      // 评估 结束 选择
      estimationOverSelect: '0',
      // 评估 结束 天
      estimationOverDay: 1,
      // 评估 周期长
      estimationCycleLength: 5,
      // 周期重复结束日期
      cycleReportEndDate: [],
      // 最大天数
      maxDay: Number(moment().endOf('month').format('DD')),
      maxNextDay: Number(moment().add(1, 'M').endOf('month').format('DD')),
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.reset();
  },
  methods: {
    reset() {},
    handlerSetting(type) {
      this.dialogVisible = !this.dialogVisible;
      this.examinationEndMonth =
        this.setting !== 'month'
          ? this.settingParams[this.setting].maxMonth
          : 1;
      console.log(type);
    },
    estimationStartChange() {
      this.estimationStartDay = 1;
    },
    estimationEndChange() {
      this.estimationEndDay = 1;
    },
    submitForm() {
      // console.log('aaa', this.estimationStartDay);
    },
    cancel() {
      this.dialogVisible = !this.dialogVisible;
    },
  },
};
</script>
<style lang="scss">
.cycle-setting-dialog-form {
  // background-color: red;
  .el-dialog__body {
    .el-form {
      .el-row {
        .el-col {
          .el-form-item {
            .el-form-item__content {
              .el-select {
                width: 100px;
                margin: 0 5px;
              }
              .el-input-number {
                width: 100px;
                margin: 0 5px;
              }
              .span1 {
                margin: 0 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>