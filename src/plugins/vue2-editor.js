import Vue from 'vue'
import TinyMCE from 'tinymce-vue-2'
import tinymce from 'tinymce/tinymce'
import 'tinymce/plugins/advlist/plugin' // 项目编号。toolbar：bullist。
import 'tinymce/plugins/autolink/plugin' // autolink：自动加链接。
import 'tinymce/plugins/link/plugin' // link：插入链接。
import 'tinymce/plugins/lists/plugin' // lists：This list plugin normalizes list behavior between browsers. Enable it if you have problems with consistency making lists.
import 'tinymce/plugins/image/plugin' // image：插入图片。
import 'tinymce/plugins/charmap/plugin' // charmap（Character Map Plugin）：插入特殊符号。
import 'tinymce/plugins/print/plugin' // print：打印。
import 'tinymce/plugins/preview/plugin' // preview：预览。
import 'tinymce/plugins/hr/plugin' // hr：水平分割线。
import 'tinymce/plugins/anchor/plugin' // anchor：插入锚点。
import 'tinymce/plugins/pagebreak/plugin' // pagebreak：分页符。
import 'tinymce/plugins/searchreplace/plugin' // searchreplace：查找替换
import 'tinymce/plugins/wordcount/plugin' // wordcount：计算字符数
import 'tinymce/plugins/visualblocks/plugin' // visualblocks：显示出块级元素
import 'tinymce/plugins/visualchars/plugin' // visualchars：显示出隐藏字符。
import 'tinymce/plugins/code/plugin' // code：源码编辑。
import 'tinymce/plugins/insertdatetime/plugin' // insertdatetime：插入时间日期
import 'tinymce/plugins/media/plugin' // media：插入视频
import 'tinymce/plugins/nonbreaking/plugin' // nonbreaking：插入字符&nbsp;
import 'tinymce/plugins/table/plugin' // table：插入表格
import 'tinymce/plugins/contextmenu/plugin' // contextmenu：右键菜单。设置：contextmenu。
import 'tinymce/plugins/directionality/plugin' // directionality：文字方向。toolbar：ltr rtl。
import 'tinymce/plugins/emoticons/plugin' // emoticons：表情

import 'tinymce/plugins/template/plugin' // template：插入模板
import 'tinymce/plugins/paste/plugin' // paste：粘贴。
import 'tinymce/plugins/textcolor/plugin' // textcolor：文本颜色，固定的。toolbar: forecolor backcolor。
import 'tinymce/plugins/colorpicker/plugin' // colorpicker：选择颜色。
import 'tinymce/plugins/textpattern/plugin' // textpattern：类似于支持markdown的语法，自动生成相应的html标签。
import 'tinymce/plugins/autoresize/plugin'
import 'tinymce/plugins/fullscreen/plugin' // fullscreen：全屏显示
import 'tinymce/plugins/imagetools/plugin' // 图片编辑

import Theme from 'tinymce/themes/silver/index'

// save：提交表单。
if (process.env.BROWSER) {
  window.Theme = Theme
}
// if(process.browser) {
//   window.$tinymce = tinymce
// }
Vue.component('tiny-mce', TinyMCE)