<template>
  <el-form
    ref="form"
    :model="form"
    @submit.native.prevent="saveArticle"
    label-width="80px"
  >
    <el-form-item label="文章标题">
      <el-input
        v-model="form.title"
        @blur="saveTitle"
        style="width: 30vh"
      ></el-input>
    </el-form-item>

    <div><slot></slot></div>

    <el-button class="saveBtn" native-type="submit" plain>保存</el-button>
  </el-form>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { SAVE_TITLE, SAVE_DATE } from '@/store/article/mutations_type'
import { _message } from '@/assets/js/tools/Message'

export default {
  name: 'Info',
  data() {
    return {
      form: {
        title: '',
        insert: '',
      },
    }
  },
  computed: {
    ...mapState('article', {
      article: (state) => state.article,
    }),
    //获取vuex中的article
    getArticle() {
      return this.article
    },
  },
  methods: {
    ...mapMutations('article', {
      SAVE_TITLE,
      SAVE_DATE,
    }),
    //失去焦点时将title字段信息储存
    saveTitle() {
      this.SAVE_TITLE(this.form.title)
      // console.log(Date.now())
    },
    // 将当前时间戳保存
    saveDate() {
      this.SAVE_DATE(Date.now())
    },
    saveArticle() {
      this.saveDate()
      // console.log(this.$store.state.article.article)
      //判断title字段是否为空
      let hasTitle = this.getArticle.title
      const that = this
      if (hasTitle) {
        //发送事件给父组件，在父组件向服务端提交请求
        this.$emit('saveArticle')
      } else {
        _message(that, '请输入文章标题', 'warning')
      }
    },
  },
}
</script>
<style>
.saveBtn {
  position: absolute;
  top: 65vh;
}
</style>
