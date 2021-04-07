<template>
  <el-container id="app">
    <el-aside width="200"><nav-bar /></el-aside>
    <el-container>
      <el-header>我是头部</el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>
<script>
import NavBar from '@/components/common/NavBar'
export default {
  components: {
    NavBar,
  },
}
</script>

<style>
.el-header {
  background-color: #4b4c4e;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
</style>
