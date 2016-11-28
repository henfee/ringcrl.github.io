<template>
  <div class="page-index">
    <section>
      <img src="http://lorempixel.com/200/200/nature/1">
      <p class="clearfix">This text sits next to the image and because the...</p>
      <img src="http://lorempixel.com/200/200/nature/2">
      <p class="clearfix">This text is short, so the next image can float up...</p>
      <img src="http://lorempixel.com/200/200/nature/3">
      <p class="clearfix">Because the previous image’s text does not...</p>
    </section>
  </div>
</template>
<style lang='scss' scoped>
.page-index {
  section {
    width: 300px;
    border: 1px solid red;
    img {
      float: left;
      margin: 0 4px 4px 0;
    }
    p {
      margin: 0 0 5px 0
    }
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }
}
</style>
<script>
export default {
  data: function() {
    return {

    }
  },
  methods: {

  },
  mounted: function() {

  },
}
</script>
