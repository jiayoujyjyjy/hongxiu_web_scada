<template>
  <div class="app-container TopHeader">
    <el-container>
      <el-aside width="300px" class="el-aside-left">
        {{leftData.projectName}}
      </el-aside>

      <el-main style="padding: 0px;">
        中央区域
      </el-main>

      <el-aside width="600px" class="el-aside-right">
        <div class="el-aside-right-div">
          <div class="zoomClass">
            {{canvasZoomValue}} &nbsp;
          </div>
          <div>
            <!-- <span><icon name="icon-007caozuo_chexiao" :size="20" transform="translate(0.5,0.5)"/></span>&nbsp;
            <span><icon name="icon-fanchexiao" :size="20" transform="translate(0.4,0.4)"/></span>&nbsp;
            <span><icon name="icon-chushihua" :size="20" transform="translate(0.5,0.5)"/></span> -->
            <el-tooltip content="撤销">
              <i class="el-icon-top-left"></i>
            </el-tooltip>
            <el-tooltip content="重现">
              <i class="el-icon-top-right"></i>
            </el-tooltip>
            <el-tooltip content="重置">
              <i class="el-icon-refresh"></i>
            </el-tooltip>
          </div>
          <div>
            <!-- <span><icon name="icon-yulan" :size="20"/></span>&nbsp;
            <span><icon name="icon-baocun" :size="20" transform="translate(0.5,0.5)"/></span>&nbsp;
            <span><icon name="icon-daochu" :size="20" transform="translate(0.5,0.5)"/></span>&nbsp;
            <span><icon name="icon-fabu" :size="20" transform="translate(0.5,0.5)"/></span> -->
            <el-tooltip content="预览">
              <i class="el-icon-view"></i>
            </el-tooltip>
            <el-tooltip content="保存">
              <i class="el-icon-document"></i>
            </el-tooltip>
            <el-tooltip content="下载">
              <i class="el-icon-download"></i>
            </el-tooltip>
            <el-tooltip content="发布">
              <i class="el-icon-link"></i>
            </el-tooltip>
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  components: {},
  data () {
    return {
      // 左侧区域数据
      leftData: {
        projectName: '宏秀项目'
      },
      canvasZoomValue: '100%'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.TopHeader {
  height: 100%;
  width: 100%;
  line-height: 45px;
  font-weight: bold;
  .el-aside {
    padding: 0 1em;
  }
  .el-aside-left {
    text-align: left;
  }
  .el-aside-right {
    text-align: right;
    font-size: 20px; /* 可修改图标大小 */
    .icon-007caozuo_chexiao {
      // transform: translate(100,0.5) // 无效
    }
    .zoomClass {
      font-size: 14px;
    }
    .el-aside-right-div {
      div {
        display: inline-block;
        border-right: 1px solid #A33232;
        padding: 0 1em;
        i {
          margin-right: .6em;
          opacity: 0.6;
        }
        i:hover { /* bugger:触摸屏/键盘等输入方式下不一定真有悬停状态，慎用 */
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
