<template>
  <div class="u-img-view" @click="eClick">
    <div class="u-mask">
      <img id="imgView" v-lazy="src" v-if="src">
    </div>
  </div>
</template>
<style lang="scss">
.u-img-view {
  overflow: hidden;
  .u-mask {
    display: block;
    position: fixed;
    z-index: 1000;
    background-color: #000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    img {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
