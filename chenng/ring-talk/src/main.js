// JS 类
import App from './App.vue'

// 引入 Vue，文档：https://vuefe.cn
import Vue from 'vue'

// 引入 muse-ui，文档：https://museui.github.io/#/index
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// 引入 markdown 编译器
import markdownElement from './components/markdownElement.vue'
Vue.component('markdown-element', markdownElement)

// 引入代码示例编译器
import codeExample from './components/codeExample.vue'
Vue.component('code-example', codeExample)

// 引入 api 说明编译器
import apiView from './components/apiView.vue'
Vue.component('api-view', apiView)

// 引入 Fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 引入 VueRouter、routes，文档：https://router.vuejs.org/zh-cn/index.html
import routes from './config/routes.js'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  base: __dirname,
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
