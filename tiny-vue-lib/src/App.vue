<template>
  <tiny-anchor :links="links" container-id="#test" type="line" :is-affix="true"></tiny-anchor>
  <div id="#test" style="overflow: auto; max-height: 100vh; padding-left: 300px;">
    <div id="editor">
      <div id="fluent-editor" style="background-color: aqua;">
        <h1>fluent editor based on quill ecosystem</h1>
        <div style="background: #f4f5f6;">
          <tiny-fluent-editor></tiny-fluent-editor>
        </div>
      </div>
      <div id="rich-text-editor">
        <h1>rich-text-editor</h1>
        <tiny-rich-text-editor></tiny-rich-text-editor>
      </div>
    </div>
    <div id="header2">
      <div id="milestone">
        <h1>mile stone</h1>
        <Milestone />
      </div>
      <div id="mindmap">
        <h1>MindMap</h1>
        <MindMap />
      </div>
      <div id="qrcode">
        <h1>QR Code</h1>
        <QrCode />
      </div>
      <div id="wizard">
        <h1>Wizard</h1>
        <Wizard />
      </div>
      <div id="flowchart">
        <h1>FlowChart</h1>
        <FlowChart />
      </div>
      <div id="scrolltext">
        <h1>Scroll Text</h1>
        <ScrollText />
      </div>
    </div>
    <div style="height: 100vh;"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Anchor as TinyAnchor } from '@opentiny/vue'
import Milestone from './Milestone.vue'
import MindMap from './MindMap.vue'
import QrCode from './QrCode.vue'
import Wizard from './Wizard.vue'
import FlowChart from './FlowChart.vue'
import ScrollText from './ScrollText.vue'

const links = ref([
  {
    key: 'editor',
    link: '#editor',
    title: 'Editor',
    children: [
      {
        key: 'fluent-editor',
        link: '#fluent-editor',
        title: 'fluent-editor',
      },
      {
        key: 'rich-text-editor',
        link: '#rich-text-editor',
        title: 'rich-text-editor',
      },
    ]
  },
  {
    key: 'header2',
    link: '#header2',
    title: 'header2',
    children: [
      {
        key: 'milestone',
        link: '#milestone',
        title: 'milestone',
      },
      {
        key: 'mindmap',
        link: '#mindmap',
        title: 'Mindmap',
      },
      {
        key: 'qrcode',
        link: '#qrcode',
        title: 'QR Code',
      },
      {
        key: 'wizard',
        link: '#wizard',
        title: 'Wizard',
      },
      {
        key: 'flowchart',
        link: '#flowchart',
        title: 'Flowchart',
      },
    ]
  },
])

const onLinkClick = event => {
  event.preventDefault();
}
</script>
