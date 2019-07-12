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
      <header>
        <p>
          <span>|</span>
          <span>图片配置</span>
        </p>
      </header>
      <el-form label-position="left" label-width="70px" :model="picConfigForm" class="picConfigFormDiv">
        <el-form-item label="id">
            <el-input v-model="picConfigForm.id"></el-input>
            <!-- <el-input v-model="selectedObj.id"></el-input> -->
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="picConfigForm.name"></el-input>
          </el-form-item>
          <el-form-item label="颜色">
            <el-input v-model="picConfigForm.color"></el-input>
          </el-form-item>
      </el-form>
      <div class="testBtn">
        <el-button type="primary" @click="test">test</el-button>
      </div>
      <div>
        <h3>当前选中图片： {{this.selectedObj ? this.selectedObj.id : '暂未选中'}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { back } from 'api'
export default {
  name: 'MyConfigPanel',
  components: {},
  data () {
    return {
      param: {
        'id': '',
        'name': '',
        'color': ''
      },
      // 控制按钮是否actived
      isButtonActivedObj: [1, 0, 0, 0],
      // 图片配置表单
      picConfigForm: {
        id: '',
        name: '',
        color: ''
      }
    }
  },
  computed: {
    ...mapGetters(['selectedObj'])
  },
  watch: {
    // 通过watch选项将vuex的state赋值给vue组件里的data
    selectedObj: function (val, oldValue) {
      console.log('selectedObj变化了')
      console.log(val)
      if (val) {
        this.picConfigForm.id = this.selectedObj.id
      } else {
        this.picConfigForm.id = ''
      }
    }
  },
  mounted () {
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
    },
    test: function () {
      this.param.id = this.picConfigForm.id
      this.param.name = this.picConfigForm.name
      this.param.color = this.picConfigForm.color
      this.backPicConfigTest()
    },
    backPicConfigTest: function () {
      back.picConfigTest(this.param)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
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
    header {
      font-size: 15px;
      font-weight: bolder;
      text-align: left;
      padding-left: 1em;
    }
    span:nth-child(1) {
      color: #C73E3E;
      margin-right: .3em;
    }
  }
  .picConfigFormDiv {
    margin: 1em;
    .el-form-item__label {
      color: #DEDEE0;
    }
  }
  .testBtn {
    text-align: left;
    margin-left: 1rem;
    :hover {
      background-color: green;
    }
  }
}
</style>
