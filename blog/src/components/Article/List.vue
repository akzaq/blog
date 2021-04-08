<template>
  <el-table
    :data="articleList"
    style="width: 100%; opacity: 0.9"
    height="80vh"
    :default-sort="{ prop: 'date', order: 'descending' }"
    lazy
  >
    <el-table-column prop="title" label="文章标题" width="180">
    </el-table-column>
    <el-table-column prop="insert" label="文章描述" width="240">
    </el-table-column>
    <el-table-column prop="date" label="发布日期" sortable width="200">
    </el-table-column>

    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleEdit(scope.row)" type="text" size="small"
          >编辑</el-button
        >
        <el-button @click="handleDel(scope.row)" type="text" size="small"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { request } from '@/assets/js/network/article'
import { _message } from '@/assets/js/tools/Message'
export default {
  name: 'ArticleList',
  data() {
    return {
      articleList: [],
    }
  },
  methods: {
    // 获取文章
    async getArticles() {
      const res = await request().get('/articles')
      // console.log(res)
      const data = res.data
      if (data.message) {
        alert('登录失效，请重新登录')
        this.$router.push('/login')
      } else {
        this.articleList = data
      }
    },
    //编辑文章
    handleEdit(row) {
      this.$router.push(`/Article/edit/${row._id}`)
    },
    //删除文章
    async handleDel(row) {
      const that = this
      const res = await request().delete(`/delete/${row._id}`)
      const data = res.data
      if (data.message === 'ok') {
        _message(that, '删除成功', 'success')
        //删除后获取新的文章列表
        this.getArticles()
      } else {
        _message(that, '服务器出错', 'error')
      }
    },
  },
  created() {
    this.getArticles()
  },
}
</script>
