<template>
  <div class="app-container MyConfigPanel">
    <p>app-container MyConfigPanel</p>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit" :class="isButtonActivedObj[0]?'buttonActived':'buttonActivedNot'" @click="btnOneHandle"></el-button>
      <el-button type="primary" icon="el-icon-share" :class="isButtonActivedObj[1]?'buttonActived':'buttonActivedNot'" @click="btnTwoHandle"></el-button>
      <el-button type="primary" icon="el-icon-delete" :class="isButtonActivedObj[2]?'buttonActived':'buttonActivedNot'" @click="btnThreeHandle"></el-button>
      <el-button type="primary" icon="el-icon-download" :class="isButtonActivedObj[3]?'buttonActived':'buttonActivedNot'" @click="btnFourHandle"></el-button>
    </el-button-group>
    <p></p>
    <div class=config>
      <el-row>
        <el-col :span="2">|</el-col>
        <el-col :span="6">图片配置</el-col>
      </el-row>
      <el-form label-position="left" label-width="70px" :model="picConfigForm" class="picConfigFormDiv">
        <el-form-item label="名称">
            <el-input v-model="picConfigForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="picConfigForm.region"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="picConfigForm.type"></el-input>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyConfigPanel',
  components: {},
  data () {
    return {
      // 控制按钮是否actived
      isButtonActivedObj: [1, 0, 0, 0],
      // 图片配置表单
      picConfigForm: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    // 顶部按钮处理函数
    btnOneHandle: function () {
      this.isButtonActivedObj = [1, 0, 0, 0] // 注意不可以this.arr[0] = 1
    },
    btnTwoHandle: function () {
      this.isButtonActivedObj = [0, 1, 0, 0]
    },
    btnThreeHandle: function () {
      this.isButtonActivedObj = [0, 0, 1, 0]
    },
    btnFourHandle: function () {
      this.isButtonActivedObj = [0, 0, 0, 1]
    }
  }
}
</script>

<style lang="scss">
.MyConfigPanel {
  height: auto!important;
  .buttonActived {
    background-color: #3B3B45;
  }
  .buttonActivedNot {
    background-color: #4F4F58;
  }
  .el-button--primary:hover {
    background-color: #3B3B45;
  }
  .config {
    .el-row {
      font-size: 15px;
      font-weight: bolder;
    }
    .el-col-2 {
      color: #C73E3E;
    }
  }
  .picConfigFormDiv {
    margin: 1em;
    .el-form-item__label {
      color: #DEDEE0;
    }
  }
}
</style>
