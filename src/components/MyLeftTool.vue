<template>
  <div class="app-container MyLeftTool">
    <p style="margin-bottom: 50px;">app-container MyLeftTool</p>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="基础组件" name="1">
        <div class="listOneDiv">
          <ul class="tags">
            <li v-for="(item, index) in listOne" :key="index">
              <div @click="selectDecorate" class="imgSpanDiv">
                <img :src="item.src" :alt="item.alt" :id="item.id">
                <span>{{item.alt}}</span>
              </div>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item title="箭头" name="2">
        <div class="listTwoDiv">
          <ul class="tags">
            <li v-for="(item, index) in listOne" :key="index">
              <div @click="selectDecorate" class="imgSpanDiv">
                <img :src="item.src" :alt="item.alt" :id="item.id">
                <span>{{item.alt}}</span>
              </div>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item title="图片" name="3">
        <div class="listTwoDiv">
          <ul class="tags">
            <li v-for="(item, index) in listOne" :key="index">
              <div @click="selectDecorate" class="imgSpanDiv">
                <img :src="item.src" :alt="item.alt" :id="item.id">
                <span>{{item.alt}}</span>
              </div>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { fabric } from 'fabric'
import { rangeNum } from '@/utils'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyLeftTool',
  components: {},
  data () {
    return {
      activeName: '',
      listOne: [
        {src: 'https://sugars.oss-cn-shenzhen.aliyuncs.com/diy/decorate/decorate1.png', alt: '图1', id: 'pic01'},
        {src: 'https://sugars.oss-cn-shenzhen.aliyuncs.com/diy/decorate/decorate2.png', alt: '图2', id: 'pic02'},
        {src: 'https://sugars.oss-cn-shenzhen.aliyuncs.com/diy/decorate/decorate3.png', alt: '图3', id: 'pic03'},
        {src: 'static/alarm.png', alt: '图4', id: 'pic04'},
        {src: 'static/copy.png', alt: '图5', id: 'pic05'},
        {src: 'static/left.png', alt: '图6', id: 'pic06'},
        {src: 'static/add.png', alt: '图8', id: 'pic08'}
      ]
    }
  },
  computed: {
    ...mapGetters(['card'])
  },
  methods: {
    ...mapActions(['saveState']),
    // 选择装饰
    selectDecorate (e) {
      const card = this.card
      console.log(this.card)
      if (!card) return
      console.log(e)
      console.log(e.target)
      fabric.Image.fromURL(
        e.target.src,
        img => {
          img.set({
            scaleX: 0.7,
            scaleY: 0.7,
            angle: 0,
            left: rangeNum(10, card.width / 2),
            top: rangeNum(10, card.height / 2),
            hasControls: true,
            borderColor: '#ff8d23',
            id: e.target.id
          })
          card.add(img).setActiveObject(img)

          this.saveState()
        },
        { crossOrigin: 'anonymous' }
      )
    }
  }
}
</script>

<style lang="scss">
$asideBackColor: #3B3B45;
$asideColor: #DEDEE0;
.MyLeftTool {
  padding: 5px;
  height: auto!important;
  .tags {
    border: 1px solid #C9E1F4;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.5em;
    list-style: none;
    // background-color: red;
    background-color: $asideBackColor;
  }
  .tags li {
    display: inline-block;
    margin: 0.5em;
  }
  .tags .imgSpanDiv {
    position: relative;
    display: block;
    padding: 0.25em .5em .25em .25em;
    background-color: #C9E1F4;
    border-radius: 0 .25em .25em 0;
    line-height: 1.5;
    width: 65px;
    height: 65px;
    img {
      width: 35px;
      height: 35px;
    }
    span {
      display: block;
    }
  }
  .tags div::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 1em solid transparent;
    left: -1.5em;
    top: 0;
  }

  .el-collapse-item {
    padding: 0 0.1em 0 0.5em;
  }
  .el-collapse-item__header {
    background-color: $asideBackColor;
    color: $asideColor;
    font-weight: bolder;
  }
  .el-collapse-item__content {
    padding-bottom: 0px;
  }
}
</style>
