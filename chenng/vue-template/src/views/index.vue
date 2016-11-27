<template>
  <div class="page-index">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/1)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/2)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/3)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/4)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/5)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/6)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/7)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/8)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/9)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/10)"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.page-index {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  .swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
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
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }
    });
  },
}
</script>
