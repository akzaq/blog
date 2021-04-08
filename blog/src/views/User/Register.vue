<template>
  <div id="register">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="auto"
      class="demo-ruleForm"
    >
      <h2>欢迎您加入我们</h2>
      <el-form-item label="账户" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button type="primary" @click="goLogin">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { request } from '@/assets/js/network/user'
import { _message } from '@/assets/js/tools/Message'
export default {
  data() {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账户不能为空'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ validator: checkUser, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
      },
    }
  },
  methods: {
    //发送表单数据
    async submitForm() {
      const that = this
      let res = await request().post('/register', this.ruleForm)
      //根据请求返回数据判断用户名是否存在
      if (!res.data.message) {
        _message(that, '创建成功', 'success')
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
      } else {
        _message(that, res.data.message, 'error')
      }
    },
    goLogin() {
      this.$router.push('/login')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
<style scoped>
#register {
  height: 100%;
  background-color: black;
  background-image: radial-gradient(
      white,
      rgba(255, 255, 255, 0.2) 2px,
      transparent 40px
    ),
    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
    radial-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1) 2px,
      transparent 30px
    );
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
}

#register .demo-ruleForm {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -150px;
}
#register .demo-ruleForm h2 {
  text-align: center;
  margin-bottom: 40px;
}
</style>
