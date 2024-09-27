<template>
  <a-affix :offsetTop="0">
    <a-anchor :style="{backgroundColor: 'cyan', width: '200px'}">
      <a-anchor-link href="#verification">Verification Code</a-anchor-link>
      <a-anchor-link href="#input-tag">Input Tag</a-anchor-link>
      <a-anchor-link href="#resize">Resize Box</a-anchor-link>
      <a-anchor-link href="#overflow-list">Overflow List</a-anchor-link>
    </a-anchor>
  </a-affix>
  <div style="padding-left: 320px;">
    <div id="verification">
      <h1>Verification Code</h1>
      <Verification />
    </div>
    <div id="input-tag">
      <h1>Input Tag</h1>
      <InputTag />
    </div>
    <div id="resize">
      <h1>Resize</h1>
      <Resize />
    </div>
    <div id="overflow-list">
      <h1>Overflow List</h1>
      <OverflowList />
    </div>
    
  </div>
</template>

<script setup>
import Verification from './Verification.vue'
import InputTag from './InputTag.vue'
import Resize from './Resize.vue'
import OverflowList from './OverflowList.vue'
</script>

<style lang="scss" scoped>

</style>