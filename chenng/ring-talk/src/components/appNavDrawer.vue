<template>
  <mu-drawer @hide="handleHide" @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">
    <mu-appbar class="exmaples-nav-appbar" :zDepth="0">
      <a class="exmaples-appbar-title" @click="handleMenuChange('#/index')" href="#/index" style="display:inline-block;">Chenng</a>
      <mu-badge content="cold" class="exmaples-version" secondary/>
    </mu-appbar>
    <mu-divider/>
    <mu-list @change="handleMenuChange" :value="menuVal">
      <mu-list-item title="基本信息" toggleNested>
        <!-- <mu-sub-header slot="nested">分割线</mu-sub-header> -->
        <mu-list-item slot="nested" value="#/appbar" title="代码演示" />
      </mu-list-item>
      <mu-list-item title="更多信息" toggleNested>
        <mu-list-item slot="nested" title="贡献代码" value="#/contributing" />
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-sub-header>我的更多</mu-sub-header>
    <mu-list>
      <mu-list-item href="http://weibo.com/ringcrl" target="_blank" title="WeiBo" />
      <mu-list-item href="https://github.com/ringcrl" target="_blank" title="GitHub" />
    </mu-list>
  </mu-drawer>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: true
    },
    docked: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuVal: '#/'
    }
  },
  computed: {

  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    handleMenuChange(val) {
      this.menuVal = val
      if (this.docked) {
        window.location.hash = this.menuVal
      } else {
        this.changeHref = true
      }
      this.$emit('change', val)
    },
    handleHide() {
      if (!this.changeHref) return
      window.location.hash = this.menuVal
      this.changeHref = false
    }
  },
  mounted() {
    this.menuVal = window.location.hash
    window.addEventListener('hashchange', () => {
        this.menuVal = window.location.hash
      })
      // var xhr = new window.XMLHttpRequest()
      // xhr.open('GET', '/version.json', true)
      // xhr.onload = () => {
      //   if (xhr.readyState === 4) {
      //     if (xhr.status === 200) {
      //       this.versions = JSON.parse(xhr.responseText)
      //     } else {
      //       console.error(xhr.statusText)
      //     }
      //   }
      // }
      // xhr.send()
  }
}
</script>
<style lang='less'>
@import "../assets/css/import.less";
.exmaples-drawer {
  box-shadow: none;
  border-right: 1px solid @borderColor;
}

.exmaples-nav-appbar.mu-appbar {
  background-color: @dialogBackgroundColor;
  color: @secondaryTextColor;
}

.exmaples-appbar-title {
  color: @secondaryTextColor;
}

.exmaples-version {
  margin-left: 10px;
  vertical-align: text-top;
}

.mu-version-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
}

.mu-version-text {
  font-size: 16px;
  margin-top: 8px;
  width: 60px;
}

.mu-lang-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 40px;
  font-size: 16px;
}

.mu-lang {
  color: inherit;
  margin-left: 2px;
  margin-right: 2px;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &.active {
    color: @accentColor;
  }
}
</style>
