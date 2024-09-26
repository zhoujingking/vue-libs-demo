<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      :center="true"
      :preview="true"
      :quality="0.5"
      max-size="300KB"
    ></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Crop as TinyCrop } from '@opentiny/vue'

const visible = ref(false)
const imgUrl = ref(`https://res.hc-cdn.com/tiny-vue-web-doc/3.18.9.20240902190525/static/images/mountain.png`)

function setAspectRatio(aspectRatio) {
  Modal.message({
    message: `宽高比数据: ${JSON.stringify(aspectRatio)}`,
    status: 'info'
  })
}
</script>
