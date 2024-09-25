<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn @click="toggleLeftDrawer">toggle-left</q-btn>
        <q-toolbar-title>test</q-toolbar-title>
        <q-btn @click="toggleRightDrawer">toggle-right</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list dense bordered padding class="rounded-borders">
        <q-item clickable v-ripple>
          <q-item-section>
            Chat Message
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            Editor
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            Spinner
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            Morph
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            Video
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      right
    </q-drawer>

    <q-page-container>
      <div class="window-height bg-secondary">
        <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar3.jpg" :text="['hey, how are you?']"
          stamp="7 minutes ago" sent bg-color="amber-7" />
        <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, REALLY long message to annoy you...'
        ]" size="6" stamp="4 minutes ago" text-color="white" bg-color="primary" />
        <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" :text="['Did it work?']"
          stamp="1 minutes ago" size="8" text-color="white" bg-color="primary" />
      </div>
      <div class="window-height bg-warning">
        <q-editor v-model="qeditor" :dense="$q.screen.lt.md" :toolbar="[
          [
            {
              label: $q.lang.editor.align,
              icon: $q.iconSet.editor.align,
              fixedLabel: true,
              list: 'only-icons',
              options: ['left', 'center', 'right', 'justify']
            },
            {
              label: $q.lang.editor.align,
              icon: $q.iconSet.editor.align,
              fixedLabel: true,
              options: ['left', 'center', 'right', 'justify']
            }
          ],
          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
          ['token', 'hr', 'link', 'custom_btn'],
          ['print', 'fullscreen'],
          [
            {
              label: $q.lang.editor.formatting,
              icon: $q.iconSet.editor.formatting,
              list: 'no-icons',
              options: [
                'p',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'code'
              ]
            },
            {
              label: $q.lang.editor.fontSize,
              icon: $q.iconSet.editor.fontSize,
              fixedLabel: true,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'size-1',
                'size-2',
                'size-3',
                'size-4',
                'size-5',
                'size-6',
                'size-7'
              ]
            },
            {
              label: $q.lang.editor.defaultFont,
              icon: $q.iconSet.editor.font,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'default_font',
                'arial',
                'arial_black',
                'comic_sans',
                'courier_new',
                'impact',
                'lucida_grande',
                'times_new_roman',
                'verdana'
              ]
            },
            'removeFormat'
          ],
          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

          ['undo', 'redo'],
          ['viewsource']
        ]" :fonts="{
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana'
        }" />
      </div>
      <div class="window-height">
        <div class="q-pa-md q-gutter-xs">
          <div class="q-gutter-md row justify-center" style="font-size: 2em">
            <q-spinner-audio color="secondary" />
            <q-spinner-ball color="red" />
            <q-spinner-bars color="purple" />
            <q-spinner-box color="deep-orange" />
            <q-spinner-clock color="brown" />
            <q-spinner-comment color="deep-purple" />
            <q-spinner-cube color="indigo" />
            <q-spinner-dots color="blue" />
            <q-spinner-facebook color="light-blue" />
            <q-spinner-gears color="cyan" />
            <q-spinner-grid color="teal" />
            <q-spinner-hearts color="green" />
            <q-spinner-hourglass color="light-green" />
            <q-spinner-infinity color="lime" />
            <q-spinner-ios color="yellow" />
            <q-spinner-orbit color="blue" />
            <q-spinner-oval color="amber" />
            <q-spinner-pie color="orange" />
            <q-spinner-puff color="deep-orange" />
            <q-spinner-radio color="brown" />
            <q-spinner-rings color="grey" />
            <q-spinner-tail color="blue-grey" />
          </div>
        </div>
        <div class="q-pa-md relative-position" style="height: 600px; max-height: 80vh">
          <div class="absolute-top-left bg-red text-white q-ma-md q-pa-lg" style="border-radius: 10px; font-size: 32px"
            v-morph:topleft:boxes:800="morphGroupModel">
            Top left
          </div>

          <div class="absolute-top-right bg-blue text-white q-ma-lg q-pa-xl"
            style="border-radius: 20px; font-size: 18px" v-morph:topright:boxes:600.tween="morphGroupModel">
            Top right
          </div>

          <div class="absolute-bottom-right bg-orange text-white q-ma-lg q-pa-lg" style="border-radius: 0"
            v-morph:bottomright:boxes:400="morphGroupModel">
            Bottom right
          </div>

          <div class="absolute-bottom-left bg-green text-white q-ma-xl q-pa-md"
            style="border-radius: 40px; font-size: 24px" v-morph:bottomleft:boxes:600.resize="morphGroupModel">
            Bottom left
          </div>

          <q-btn class="absolute-center" color="purple" label="Next morph" no-caps @click="nextMorph" />
        </div>
      </div>
      <div class="window-height">
        <div class="q-pa-md">
          <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
        </div>
      </div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>
          footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const qeditor = ref('table not supported!')

const boxValues = [
  'topleft',
  'topright',
  'bottomleft',
  'bottomright'
]
const morphGroupModel = ref('topleft')

const nextMorph = () => {
  let value = morphGroupModel.value

  // pick random box, other than current one
  while (value === morphGroupModel.value) {
    const i = Math.floor(Math.random() * boxValues.length)
    value = boxValues[i]
  }

  morphGroupModel.value = value
}
</script>