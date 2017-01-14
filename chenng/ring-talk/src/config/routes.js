export default [{
  path: '/index',
  component: resolve => require(['../views/index.vue'], resolve)
}, {
  path: '/appbar',
  component: resolve => require(['../views/base/appbar/index.vue'], resolve)
}, {
  path: '/contributing',
  component: resolve => require(['../views/more/contributing/index.vue'], resolve)
}, {
  path: '*',
  redirect: '/index'
}]
