<template>
  <div class="img-view" @click="eClick">
    <div class="mask">
      <img class="img" v-lazy="src">
    </div>
  </div>
</template>
<style lang='scss' scoped>
.img-view {
  overflow: hidden;
  .mask {
    display: block;
    position: fixed;
    z-index: 1000;
    background-color: #000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .img {
      width: 100%;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .img[lazy=loading] {
      width: 2rem;
      height: 6rem;
      margin: auto;
    }
  }
}
</style>
<script>
export default {
  name: 'img-views',
  props: ['src'],
  methods: {
    eClick: function () {
      this.$emit('click')
    }
  }
}
// 用法
// 在<template>中
// <img-views v-show="imgView.show" :src="imgView.src" @click="eImgViewClick"></img-views>
// <img :src="img.url" @click="eImgClick($event)" v-bind:style="[img.width - img.height > 0 ? {'height': '100%'} : {'width': '100%'}]">
// 在<script>中
// import Views from '../components/pic-views.vue'
// export default {
//   components: {
//     'imgViews': Views
//   },
//   data: function() {
//     imgView: {
//       show: false,
//       src: ''
//     }
//   },
//   methods: {
//     eImgClick: function(e) {
//       this.imgView.show = true;
//       let url = e.currentTarget.src;
//       let stubLength = url.lastIndexOf('-');
//       let dotLength = url.lastIndexOf('.');
//       let prefix = url.slice(0, stubLength);
//       let suffix = url.slice(dotLength);
//       url = prefix + '-1000x1000' + suffix;
//       this.imgView.src = url;
//     },
//     eImgViewClick: function() {
//       this.imgView.src = '';
//       this.imgView.show = false;
//     }
//   }
// }
</script>
