<template>
  <button @click="onAddIndicator">add indicator</button>
  <Editor ref="editorRef"
    api-key="vamz3s67239r3gxglr021z6i3r84jr4romt2v284end09do7" 
    :init="initOption" 
    initial-value="Once upon a time..."
  />
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
import { ref } from 'vue';

const editorRef = ref(null)

const onAddIndicator = () => {
  const editor = editorRef.value.getEditor();
  console.log(editor)
  editor.insertContent(`<span class="mceNonEditable">Newly add indicator</span>`)
}

const initOption = {
  plugins: 'lists link image table code help wordcount',
  menubar: '',
  toolbar_mode: 'floating',
  toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | table | numlist bullist',
  skin: 'fluent',
  branding: false,
  resize: true,
}
</script>

<style scoped></style>