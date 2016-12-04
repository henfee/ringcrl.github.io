<template>
  <div class="page-route">
    <!-- 下面这些注释掉的代码本应该放在 index.vue 中，可是由于经常用 index.vue 来写代码，所以挪到这里了 -->
    <!-- <router-link :to="{ name: 'route', params: { param: 'gmlogin=1' }}">link to '/route'</router-link> -->
    <!-- 上面这句渲染到页面是这样的 -->
    <!-- <a href="/route/gmlogin=1" class="">link to '/route'</a> -->
    <!-- 在script里面写成这样 -->
    <!-- this.$router.push({
        name: 'route',
        params: {
          param: 'gmlogin=1'
        }
      }) -->
    <p>route page</p>
  </div>
</template>
<style lang='scss' scoped>
.page-route {}
</style>
<script>
export default {
  data: function() {
    return {}
  }
}
</script>
