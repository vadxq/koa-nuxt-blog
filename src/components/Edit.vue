<template>
  <section>
    <div
      v-if="editorOption"
      class="quill-editor"
      :value="$store.state.content"
      @change="onEditorChange($event)"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      v-quill:myQuillEditor="editorOption">
    </div>
  </section>
</template>

<script>
export default {
  beforeMount() {
    this.editorOption = {
      }
  },
  data() {
    return {
      content: this.$store.state.content,
      editorOption: null
      // editorOption: {
      //   toolbar: [
      //   // ['bold', 'italic', 'underline', 'strike'],
      //   ['blockquote', 'code-block'],
      //   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      //   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      //   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      //   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      //   [{ 'direction': 'rtl' }],                         // text direction

      //   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      //   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      //   [{ 'color': [] }, { 'background': [] }],
      //   [{ 'font': [] }],
      //   [{ 'align': [] }],
      //   ['clean']
      // ]
      // }
    }
  },
  methods: {
    onEditorBlur(editor) {
      this.$store.commit('setContent', this.content)
      // console.log("editor blur!", editor)
    },
    onEditorFocus(editor) {
      // console.log("editor focus!", editor)
    },
    onEditorReady(editor) {
      // this.content = `<p>${this.$store.state.content}</p>`
      // console.log("editor ready!", editor)
    },
    onEditorChange({ editor, html, text }) {
      // console.log("editor change!", editor, html, text)
      this.content = html
    }
  },
  created() {
    // this.content = `<p>${this.$store.state.content}</p>`
  }
  // props: ['content']
}
</script>