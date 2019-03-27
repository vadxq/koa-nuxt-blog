// import tinymce from 'tinymce/tinymce'
import Theme from 'tinymce/themes/silver/index'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
// import 'tinymce/skins/'
import Vue from 'vue'
if (process.env.BROWSER) {
  window.Theme = Theme
}
Vue.component('tiny-editor', Editor)