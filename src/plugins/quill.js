import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor/dist/ssr'
import Quill from 'quill'

import MarkdownShortcuts from 'quill-markdown-shortcuts'
Quill.register('modules/MarkdownShortcuts', MarkdownShortcuts)

Vue.use(VueQuillEditor)