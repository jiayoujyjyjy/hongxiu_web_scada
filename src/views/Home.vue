<template>
  <div class="app-container overviewPage">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>

      <el-container>
        <el-aside width="300px">
          <my-left-tool></my-left-tool>
        </el-aside>

        <el-main>
          <my-canvas-panel></my-canvas-panel>
        </el-main>

        <el-aside width="250px">
          <!-- asider -->
          <my-config-panel></my-config-panel>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyLeftTool from '@/components/MyLeftTool.vue'
import MyCanvasPanel from '@/components/MyCanvasPanel.vue'
import MyConfigPanel from '@/components/MyConfigPanel.vue'

export default {
  name: 'Home',
  components: {
    MyHeader,
    MyLeftTool,
    MyCanvasPanel,
    MyConfigPanel
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
$fontColor: #FFFFFF;
$headerBackColor: #C73E3E;
$asideBackColor: #3B3B45;
$mainBackColor: #ccc;

.app-container, .el-container {
  height: 100%;
  color: $fontColor;
}
.el-aside {
  background-color: $asideBackColor;
}
.el-header {
  background-color: $headerBackColor;
  padding: 0px;
  margin: 0px;
  height: 45px!important;
}
.el-main {
  background-color: $mainBackColor;
  border: rgb(62, 137, 199) solid 1px;
}
</style>
