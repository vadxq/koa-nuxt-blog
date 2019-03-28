<template>
    <no-ssr>
        <tiny-mce id="desc" :value="$store.state.content" v-model="content" @change="changeContent"
        :other-props="{
          menubar: 'file edit insert view format table', 
          plugins: plugins,
          language_url: '/zh_CN.js',
          language: 'zh_CN',
          min_height: 300,
        }"
        :toolbar="toolbar">
  </tiny-mce>
  </no-ssr>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      plugins: `link image advlist autolink lists
        charmap print textcolor contextmenu preview
        code wordcount table colorpicker hr anchor
        pagebreak searchreplace wordcount visualblocks
        visualchars insertdatetime media nonbreaking
        directionality emoticons template paste textcolor
        colorpicker textpattern autoresize fullscreen imagetools
        `,
      // toolbar: [`
      // bold italic underline strikethrough |
      // fontsizeselect styleselect formatselect fontselect |
      // forecolor backcolor |
      // alignleft aligncenter alignright alignjustify |
      // bullist numlist |
      // outdent indent blockquote |
      // undo redo |
      // link unlink image code |
      // removeformat emoticons |
      // rotateleft rotateright flipv fliph editimage imageoptions
      // `]
      toolbar: [`
        bold italic fontsizeselect formatselect |
        forecolor backcolor emoticons |
        alignleft aligncenter alignright alignjustify |
        outdent indent blockquote |
        bullist numlist |
        visualaid hr |
        image media quickimage editimage |
        preview code fullscreen

      `]
    }
  },
  methods: {
    changeContent () {
      console.log('change')
      this.$store.commit('setContent', this.content)
    }
  },
  watch: {
    content () {
      this.$store.commit('setContent', this.content)
    }
  },
}
</script>