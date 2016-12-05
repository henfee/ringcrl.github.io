<template>
  <div class="u-guide-shade" @click="eClick">
    <div class="u-guide-shade-mask">
      <img src="../assets/img/arrows.png">
      <p>点击此处
        <br>在{{text}}中打开</p>
    </div>
  </div>
</template>
<style lang='scss'>
.u-guide-shade {
  overflow: hidden;
  .u-guide-shade-mask {
    display: block;
    position: fixed;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    img {
      position: absolute;
      width: 3rem;
      height: 3rem;
      right: 1rem;
      top: 0.5rem;
      display: inline-block;
    }
    p {
      text-align: center;
      color: #fff;
      position: absolute;
      top: 4rem;
      right: 2rem;
      border: 1px dashed #fff;
      border-radius: 0.3rem;
      padding: 0.3rem 0.5rem;
    }
  }
}
</style>
<script>
export default {
  name: 'guide-shade',
  props: {
    text: ''
  },
  methods: {
    eClick: function() {
      this.$emit('click')
    }
  }
}
// 用法：
// 在子组件<template>
// <guide-shade :text="guideShade.text" v-show="guideShade.show" @click="guideShade.show = false"></guide-shade>
// 在子组件<script>中
// import Shade from '../components/guide-shade.vue'
// export default {
//   components: {
//     'guideShade': Shade
//   },
//   data: function() {
//     guideShade: {
//       show: false,
//       text: ''
//     }
//   },
//   methods: {
//     showShade: function() {
//       this.guideShade.text = '浏览器'
//       this.guideShade.show = true
//     }
//   }
// }
</script>
