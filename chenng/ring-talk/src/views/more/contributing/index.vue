<template>
  <div class="content-wrapper">
    <markdown-element :text="contributing" />
  </div>
</template>
<script>
import contributing from './contributing.md'
export default {
  data() {
    return {
      contributing
    }
  }
}
</script>
