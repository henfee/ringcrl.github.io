<template>
  <div class="app" id="app">
    <!-- 使用图片放大预览 -->
    <!-- <img src="url" @click="eImgClick($event)"> -->
    <!-- <img-views v-show="imgView.show" :src="imgView.src" @click="eImgViewClick"></img-views> -->
    <!-- 使用 animate 的 transition -->
    <!-- <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"></transition> -->
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
// import Views from '../components/picViews.vue'
export default {
  name: 'app',
  components: {
    // 'imgViews': Views
  },
  data: function() {
    return {
      // params: {},
      // imgView: {
      //   show: false,
      //   src: ''
      // }
    }
  },
  computed: {
    // changeData: function() {
    //   return this.data...
    // }
  },
  methods: {
    /**
     * [eImgClick description]
     * 从缩略图到大图（-1000x1000）
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    eImgClick: function(e) {
      this.imgView.show = true;
      let url = e.currentTarget.src;
      let stubLength = url.lastIndexOf('-');
      let dotLength = url.lastIndexOf('.');
      let prefix = url.slice(0, stubLength);
      let suffix = url.slice(dotLength);
      url = prefix + '-1000x1000' + suffix;
      this.imgView.src = url;
    },
    eImgViewClick: function() {
      this.imgView.show = false;
    },
    /**
     * [imgMin description]
     * 图片压缩方法
     * @param  {[type]} imgUrl [description] 原图片 url
     * @param  {[type]} size   [description] 压缩后的尺寸： '-800x800'
     * @return {[type]}        [description] 压缩后的图片的 url
     */
    imgMin: function(imgUrl, size) {
      let url = imgUrl;
      let dotLength = url.lastIndexOf('.');
      let prefix = url.slice(0, dotLength);
      let suffix = url.slice(dotLength);
      url = prefix + size + suffix;
      return url;
    }
  },
  /**
   * [beforeCreate description]
   * 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
   * @return {[type]} [description]
   */
  beforeCreate: function() {},
  /**
   * [created description]
   * 实例已经创建完成之后被调用。
   * 在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。
   * 然而，挂载阶段还没开始，$el 属性目前不可见。
   * @return {[type]} [description]
   */
  created: function() {},
  /**
   * [beforeMount description]
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   * @return {[type]} [description]
   */
  beforeMount: function() {},
  /**
   * [mounted description]
   * el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
   * @return {[type]} [description]
   */
  mounted: function() {
    // 获取当前路由参数
    // this.params = this.$route.query
  },
  /**
   * [beforeUpdate description]
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   * @return {[type]} [description]
   */
  beforeUpdate: function() {},
  /**
   * [updated description]
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   * 然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
   * @return {[type]} [description]
   */
  updated: function() {},
  /**
   * [activated description]
   * keep-alive 组件激活时调用。
   * @return {[type]} [description]
   */
  activated: function() {},
  /**
   * [deactivated description]
   * keep-alive 组件停用时调用。
   * @return {[type]} [description]
   */
  deactivated: function() {}
}
</script>
<style lang='scss'>
/*scoped*/


/*引入 flex.css，文档：http://lzxb.github.io/flex.css*/

@import '~flex.css/dist/flex.css';

/*引入animate.css，文档：https://github.com/daneden/animate.css*/


/*@import "~animate.css/animate.css";*/


/*引入 swiper.css，文档：http://idangero.us/swiper/demos/#.WDbLiHdtaF0*/


/*@import '~swiper/dist/css/swiper.css';*/


/*reset样式和动画样式*/

* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  body {
    font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
    color: #434343;
    font-size: 0.7rem;
    line-height: 1.4286;
    user-select: none;
    box-sizing: border-box;
    height: 100%;
    a,
    img {
      /*禁止长按链接与图片弹出菜单*/
      -webkit-touch-callout: none;
      text-decoration: none;
    }
    img {
      border: 0;
    }
    a,
    input,
    button {
      /*去掉点击时候背景的高亮颜色*/
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .app {
      height: 100%;
    }
    /*定义过度状态*/
    .fade-enter {
      /*过度的开始状态，在元素被插入时生效，在下一个帧移除*/
      opacity: 0;
    }
    .fade-enter-active {
      /*定义进入过度的结束状态。在元素被插入时生效，在 transition/animation 完成后移除*/
      transition: all .5s ease;
    }
    .fade-leave {
      /*定义离开过度的开始状态，在离开过度被触发时生效，在下一帧移除*/
      opacity: 100;
    }
    .fade-leave-active {
      /*定义离开过度的结束状态，在离开过度被触发时生效，在 transition/ainimation 完成后移除*/
      opacity: 0;
      transition: all .5s ease;
    }
  }
}
</style>
