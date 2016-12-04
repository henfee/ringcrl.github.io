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
    eClick: function() {
      this.$emit('click')
    }
  }
}
</script>