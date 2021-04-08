<template>
  <div class="editor">
    <!-- 富文本编辑器 -->
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { mapMutations } from 'vuex'
import { SAVE_ARTICLE } from '@/store/article/mutations_type'

Vue.use(VueQuillEditor)
export default {
  name: 'Editor',
  data() {
    return {
      content: '',
      editorOption: {},
    }
  },
  computed: {
    //获取编辑器对象
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
  methods: {
    ...mapMutations('article', {
      SAVE_ARTICLE,
    }),
    // 准备编辑器
    onEditorReady(editor) {},
    // 失去焦点事件
    onEditorBlur() {},
    // 获得焦点事件
    onEditorFocus() {},
    // 内容改变事件
    onEditorChange() {
      //内容改变时储存
      this.SAVE_ARTICLE(this.content)
    },
  },
}
</script>
<style></style>
