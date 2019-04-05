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
  const toolOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{'header': 1}, {'header': 2}],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],
    [{'indent': '-1'}, {'indent': '+1'}],
    [{'direction': 'rtl'}],
    [{'size': ['small', false, 'large', 'huge']}],
    [{'header': [1, 2, 3, 4, 5, 6, false]}],
    [{'color': []}, {'background': []}],
    [{'font': []}],
    [{'align': []}],
    [{'clean':'源码编辑'}],
    ['link', 'image', 'video'],
    ['sourceEditor']     //新添加的工具
  ]

  const handlers = {
    shadeBox: null,
    sourceEditor: function(){
      const container = this.container
      const firstChild = container.nextElementSibling.firstChild
      if(!this.shadeBox){
        let shadeBox = this.shadeBox = document.createElement('div')
        shadeBox.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); cursor:pointer'
        container.style.position  = 'relative'
        shadeBox.addEventListener('click', function(){
          this.style.display = 'none'
          firstChild.innerHTML = firstChild.innerText.trim()
        }, false)
        container.appendChild(shadeBox)
        firstChild.innerText = firstChild.innerHTML
      }else {
        this.shadeBox.style.display = 'block'
        firstChild.innerText = firstChild.innerHTML
      }
    }
  }

export default {
  beforeMount() {
    // this.editorOption = {
    //   }
  },
  data() {
    return {
      content: this.$store.state.content,
      editorOption: {
        placeholder: '',
        theme: 'snow',  // 主题
        modules: {
          toolbar: {
            container: toolOptions,  // 工具栏选项
            handlers: handlers  // 事件重写
          }
        }
      }
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
    },
    initButton (){
      const sourceEditorButton = document.querySelector('.ql-sourceEditor')
      sourceEditorButton.style.cssText = 'width:80px; border:1px solid #ccc; border-radius:5px;'
      sourceEditorButton.innerText='源码'
    }
  },
  mounted() {
    this.initButton()
  },
  created() {
    // this.content = `<p>${this.$store.state.content}</p>`
  }
}
</script>

<style scoped>
.ql-container {
  min-height: 30vh;
}
</style>
