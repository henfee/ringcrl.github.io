// 引入 Vue，文档：https://vuefe.cn
import Vue from 'vue'
import App from './App'

// 引入 VueRouter，文档：https://router.vuejs.org/zh-cn/index.html
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入 Fastclick
import Fastclick from 'fastclick'
Fastclick.attach(document.body)

// 引入 MintUI，文档：http://mint-ui.github.io/docs/#!/zh-cn2
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入前端本地客户端压缩图片插件，文档：https://github.com/think2011/localResizeIMG
// import lrz from 'lrz/dist/lrz.all.bundle'
// window.lrz = lrz

// 引入 weixin-js-sdk，文档：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
// import wx from 'weixin-js-sdk'
// window.wx = wx

// 引入 Swiper，文档：http://www.swiper.com.cn/demo/index.html
// import Swiper from 'swiper/dist/js/swiper.js'
// window.Swiper = Swiper

// 引入 Element-ui，文档：http://element.eleme.io/#/zh-CN/component/installation
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI)

// 引入本地的全局对象
// import model from './assets/js/data.js'
// window.model = model

// 引入 underscore，文档：http://www.css88.com/doc/underscore/
import _ from 'underscore'
window._ = _

// 引入 n-zepto ，文档：http://www.css88.com/doc/zeptojs_api
// import $ from 'n-zepto'
// window.$ = $

// 引入 vConsole 调试工具，文档：https://github.com/WechatFE/vConsole/blob/dev/doc/tutorial_CN.md
// import vConsole from 'vconsole'

// 引入 env.js 判断页面打开时候的场景，文档：https://github.com/ringcrl/ringcrl.github.io/issues/11
import env from './assets/js/env.js'
window.env = env

// 引入 Mock.js，脱离接口进行调试
// 文档：https://github.com/nuysoft/Mock/wiki，实例：https://github.com/ringcrl/ringcrl.github.io/issues/12
// import Mock from 'mockjs'
// window.Mock = Mock

// 引入官方推荐的 ajax 库，文档：https://github.com/mzabriskie/axios
// 用法：
// this.$http.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
import axios from 'axios'
Vue.prototype.$http = axios

const Index = resolve => require(['./views/index'], resolve)
const Route = resolve => require(['./views/route'], resolve)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/route/:param',
    name: 'route',
    component: Route
  }]
})

router.beforeEach((to, from, next) => {
  // window.sessionStorage.scrollTop = document.body.scrollTop;
  next();
});

router.afterEach((to, from) => {

});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 本地存储：
// window.sessionStorage
// window.localStorage
// 酷米客 APP 下载
// http://m.coobus.cn
