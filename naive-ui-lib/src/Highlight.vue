<template>
  <n-highlight
    :text="text"
    :patterns="patterns"
    :highlight-style="{
      padding: '0 6px',
      borderRadius: themeVars.borderRadius,
      display: 'inline-block',
      color: themeVars.baseColor,
      background: themeVars.primaryColor,
      transition: `all .3s ${themeVars.cubicBezierEaseInOut}`,
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useThemeVars } from 'naive-ui'

export default defineComponent({
  setup() {
    const themeVars = useThemeVars()
    return {
      text: 'Naive UI is written in full TypeScript and works seamlessly with your TypeScript projects',
      patterns: ['Naive UI', 'typeScript'],
      themeVars
    }
  }
})
</script>