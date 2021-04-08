<template>
  <el-container id="app">
    <el-aside width="200"><nav-bar /></el-aside>
    <el-container>
      <el-header>
        {{ this.$route.name }}
        <button class="btn" @click="unload">退出登录</button>
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>
<script>
import NavBar from '@/components/common/NavBar'
import { mapMutations } from 'vuex'
import { DELETE_TOKEN } from '@/store/user/mutations_type'
export default {
  components: {
    NavBar,
  },
  methods: {
    ...mapMutations('user', {
      DELETE_TOKEN,
    }),
    //退出清楚state与localStorage中存储的token
    unload() {
      localStorage.removeItem('token')
      this.DELETE_TOKEN()
      console.log(this.$store.state.user.token)
      this.$router.push('/login')
    },
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
