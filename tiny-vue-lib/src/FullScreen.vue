<template>
  <div class="tiny-fullscreen-demo">
    <tiny-fullscreen
      teleport
      :z-index="999"
      :fullscreen="fullscreen"
      @update:fullscreen="fullscreen = $event"
    >
      <div
        class="tiny-fullscreen-wrapper"
        style="
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #333;
        "
      >
        <button type="button" @click="toggle">
          {{ fullscreen ? 'Exit Fullscreen' : 'Request Fullscreen' }}
        </button>
        <img :src="bigImg" />
      </div>
    </tiny-fullscreen>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Fullscreen as TinyFullscreen } from '@opentiny/vue'

const fullscreen = ref(false)
const bigImg = ref(`https://res.hc-cdn.com/tiny-vue-web-doc/3.18.9.20240902190525/static/images/book-big.jpg`)

function toggle() {
  fullscreen.value = !fullscreen.value
}
</script>

<style scoped>
</style>
