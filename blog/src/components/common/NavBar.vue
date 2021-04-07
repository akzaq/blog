<template>
  <!-- background-color="#545c64" -->
  <el-menu
    router
    :default-active="nowPath"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff  "
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>文章管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/article/create">新建文章</el-menu-item>
        <el-menu-item index="/article/list">文章列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    nowPath() {
      return this.$route.path
    },
  },
}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
  /* width: 200px; */
  border: none;
}
</style>
