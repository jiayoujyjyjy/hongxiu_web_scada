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

    this.addCardEventListener(card) // 事件监听函数
    this.initFrontCard(card) // 初始化卡片
    this.saveState() // 保存状态
  },
  methods: {
    ...mapActions(['initFrontCard', 'saveState', 'setSelectedObj']),
    // card事件监听函数
    addCardEventListener: function (card) {
      console.log('card事件监听函数')
      console.log(card)
      card.on('object:added', e => {
        console.log('object:added')
        // this.saveState()
      })
      card.on('object:modified', e => {
        console.log('object:modified')
        this.saveState()
      })
      card.on('object:removed', e => {
        console.log('object:removed')
        this.saveState()
      })
      // card.on('object:selected', (e) => {
      //   console.log('object:selected', e.target)
      //   this.setSelectedObj(e.target)
      // })
      card.on('selection:created', e => {
        console.log('selection:created', e.target)
        this.setSelectedObj(e.target)
      })
      card.on('selection:updated', e => {
        console.log('selection:updated', e.target)
        this.setSelectedObj(e.target)
      })
      card.on('selection:cleared', e => {
        console.log('selection:cleared')
        this.setSelectedObj(null)
        // this.setConfObj(false)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
