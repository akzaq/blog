<template>
  <div>
    <!-- 监听子组件自定义事件 -->
    <info @saveArticle="save"><editor /></info>
  </div>
</template>

<script>
import Editor from '@/components/Article/Editor'
import Info from '@/components/Article/Info'
import { mapState } from 'vuex'
import { request } from '@/assets/js/network/article'
import { _message } from '@/assets/js/tools/Message'

export default {
  name: 'Create',
  components: {
    Info,
    Editor,
  },
  computed: {
    ...mapState('article', {
      article: (state) => state.article,
    }),
  },
  methods: {
    async save() {
      const that = this
      const res = await request().post('/create', this.article)
      const data = res.data
      if (data.message === 'ok') {
        _message(that, '保存成功', 'success')
        setTimeout(() => {
          this.$router.push('/article/list')
        }, 2000)
      } else {
        _message(that, '服务器出错，请稍后再试，或者联系管理员', 'error')
      }
    },
  },
}
</script>

<style scoped></style>
