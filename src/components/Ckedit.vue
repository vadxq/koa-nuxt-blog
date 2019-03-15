<template>
  <div class="ckeditor">
    <ckeditor
    :editor="editor"
    v-model="$store.state.content"
    :config="editorConfig"
    @ready="onEditorReady"
    @focus="onEditorFocus"
    @blur="onEditorBlur"
    @input="onEditorInput"
     ></ckeditor>
  </div>
</template>

<script>
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

let ClassicEditor
if (process.browser) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
  require('@ckeditor/ckeditor5-build-classic/build/translations/zh-cn')
  // const Essentials = require('@ckeditor/ckeditor5-essentials/src/essentials')
  const UploadAdapter =require('@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter')
  const Autoformat = require('@ckeditor/ckeditor5-autoformat/src/autoformat')
  const Bold = require('@ckeditor/ckeditor5-basic-styles/src/bold')
  const Italic = require('@ckeditor/ckeditor5-basic-styles/src/italic')
  const BlockQuote = require('@ckeditor/ckeditor5-block-quote/src/blockquote')
  const EasyImage = require('@ckeditor/ckeditor5-easy-image/src/easyimage')
  const Heading = require('@ckeditor/ckeditor5-heading/src/heading')
  const Image = require('@ckeditor/ckeditor5-image/src/image')
  const ImageCaption = require('@ckeditor/ckeditor5-image/src/imagecaption')
  const ImageStyle = require('@ckeditor/ckeditor5-image/src/imagestyle')
  const ImageToolbar = require('@ckeditor/ckeditor5-image/src/imagetoolbar')
  const ImageUpload = require('@ckeditor/ckeditor5-image/src/imageupload')
  const Link = require('@ckeditor/ckeditor5-link/src/link')
  const List = require('@ckeditor/ckeditor5-list/src/list')
  const Paragraph = require('@ckeditor/ckeditor5-paragraph/src/paragraph')
  const Alignment = require('@ckeditor/ckeditor5-alignment/src/alignment')
}

export default {
  data() {
    return {
      editor: ClassicEditor,
      content: this.$store.state.content,
      editorConfig: {
        language: 'zh-cn',
        plugins: [
          Essentials,
          // UploadAdapter,
          // Autoformat,
          // Bold,
          // Italic,
          // BlockQuote,
          // EasyImage,
          // Heading,
          // Image,
          // ImageCaption,
          // ImageStyle,
          // ImageToolbar,
          // ImageUpload,
          // Link,
          // List,
          // Paragraph,
          // Alignment
        ],
        toolbar: []
        // toolbar: ['source', 'bold', 'italic', 'link', 'bulletedList', 'numberedList','fontSize']
    //      { name: 'document', items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
		// { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		// { name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
		// { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
		// '/',
		// { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
		// { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
		// { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		// { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
		// '/',
		// { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
		// { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
		// { name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
		// { name: 'about', items: [ 'About' ] }
      }
    }
  },
  methods: {
    onEditorBlur() {
      this.$store.commit('setContent', this.content)
    },
    onEditorFocus() {
      // this.content = this.$store.state.content
    },
    onEditorReady(editor) {
      editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      )
      console.log( Array.from( editor.ui.componentFactory.names ) )
      this.content = this.$store.state.content
    },
    onEditorInput(e) {
      console.log(e)
      this.content = e
      // this.$store.commit('setContent', this.content)
      // this.content = html
    }
  },
  mounted() {
  }
  // props: ['content']
}
</script>