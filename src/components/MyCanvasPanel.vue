<template>
  <div class="app-container MyCanvasPanel" ref="MyCanvasPanel">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { fabric } from 'fabric'
export default {
  name: 'MyCanvasPanel',
  components: {},
  data () {
    return {
      self: null
    }
  },
  computed: {
  },
  mounted () {
    console.log('mounted MyCanvasPanel')
    console.log(this.$refs.MyCanvasPanel.width) // 没有style的widh所以肯定不行
    console.log(this.$refs.MyCanvasPanel.clientWidth)
    // 实例化canvas对象
    const card = (this.self = new fabric.Canvas('canvas', {
      backgroundColor: '#2A2A30'
      // backgroundColor: 'white'
    }))
    card.selection = false
    // 设canvas画布尺寸
    card.setWidth(this.$refs.MyCanvasPanel.clientWidth)
    card.setHeight(this.$refs.MyCanvasPanel.clientHeight)

    this.initFrontCard(card) // 初始化卡片
    this.saveState() // 保存状态
  },
  methods: {
    ...mapActions(['initFrontCard', 'saveState'])
  }
}
</script>

<style lang="scss" scoped>
</style>
