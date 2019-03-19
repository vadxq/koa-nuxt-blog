<template>
  <section>
    <div class="quill-editor" 
       :content="content"
       @change="onEditorChange($event)"
       v-quill:myQuillEditor="editorOption">
  </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      content: '<p>text...</p>',
      // editorOption: null
      editorOption: {
        toolbar: [
        // ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
      ]
      }
    }
  },
  head () {
    return {
      title: '编辑器测试-vadxq-清竹茶馆',
      meta: [
        { hid: 'description', name: 'description', content: `编辑器-vadxq-清竹茶馆` }
        // { hid: 'keywords', name: 'keywords', content: `${this.articleMsg.abstract}` }
      ],
      script: { src: 'https://cdn.jsdelivr.net/npm/quill-markdown-shortcuts@latest/dist/markdownShortcuts.js' }
    }
  },
  methods: {
    onEditorChange(event) {
      console.log('onEditorChange')
    }
  },
  mounted() {
    
  }
}
</script>

