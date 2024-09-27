<template>
  <n-affix :top="10" :trigger-top="10">
    <div style="width: 300px; height: 500px; background-color: cyan;"></div>
  </n-affix>
  <div style="padding-left: 320px;">
    <div id="ellipsis">
      <h1>Ellipsis</h1>
      <Ellipsis />
    </div>
    <div id="mention">
      <h1>Mention</h1>
      <Mention />
    </div>
    <div id="transition">
      <h1>Transition</h1>
      <Trans />
    </div>
    <div id="dynamicTag">
      <h1>Dynamic Tag</h1>
      <DynamicTag />
    </div>
    <div id="highlight">
      <h1>Highlight</h1>
      <Highlight />
    </div>
  </div>
</template>

<script setup>
import Ellipsis from './Ellipsis.vue'
import Mention from './Mention.vue'
import DynamicTag from './DynamicTag.vue'
import Highlight from './Highlight.vue'
import Trans from './Transition.vue'
</script>

<style lang="scss" scoped>

</style>