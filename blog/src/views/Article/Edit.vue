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
  name: 'Edit',
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
    //提交需要修改的数据
    save() {
      const that = this
      const id = this.$route.params.id
      request()
        .put(`/update/${id}`, this.article)
        .then((res) => {
          if (res.status === 200) {
            _message(that, '修改成功', 'success')
            setTimeout(() => {
              this.$router.push('/article/list')
            }, 1000)
          } else {
            _message(that, '服务器出错，请稍后再试，或者联系管理员', 'error')
          }
        })
    },
  },
  created() {
    console.log(this)
  },
}
</script>

<style scoped></style>
