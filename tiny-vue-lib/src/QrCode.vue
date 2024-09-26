<template>
  <tiny-qr-code v-bind="params"></tiny-qr-code>
</template>

<script setup>
import { QrCode as TinyQrCode } from '@opentiny/vue'

const params = {
  value: 'https://www.baidu.com',
  icon: 'https://res.hc-cdn.com/tiny-vue-web-doc/3.18.9.20240902190525/'
    ? `https://res.hc-cdn.com/tiny-vue-web-doc/3.18.9.20240902190525/static/images/mountain.png`
    : 'https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/tinyvue.svg',
  iconSize: 60,
  size: 250
}
</script>
