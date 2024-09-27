<template>
  <h4>max three tags</h4>
  <n-dynamic-tags v-model:value="tags" :max="3" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      tags: ref(['teacher', 'programmer'])
    }
  }
})
</script>