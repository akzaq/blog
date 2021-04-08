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
      <h2>欢迎登录</h2>
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
        <el-button type="primary" @click="goRegister">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { request } from '@/assets/js/network/user'
import { _message } from '@/assets/js/tools/Message'
import { mapMutations } from 'vuex'
import { SAVE_TOKEN } from '@/store/user/mutations_type'

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
    ...mapMutations('user', {
      SAVE_TOKEN,
    }),
    async submitForm() {
      const that = this
      const res = await request().post('/login', this.ruleForm)
      // console.log(res.data)
      let data = res.data
      if (data.message === 'ok') {
        localStorage.setItem('token', data.token)
        this.SAVE_TOKEN(data.token)
        this.$router.push('/article')
      } else {
        _message(that, data.message, 'error')
      }
    },
    goRegister() {
      this.$router.push('/register')
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
  background: linear-gradient(
    to right,
    #bb313e25,
    #bb313e25,
    #d7222925,
    #dd4a1625,
    #e4761525,
    #f5c50025,
    #f0e92725,
    #b1ce2425,
    #48a93525,
    #03944525,
    #157c4f25,
    #176a5825,
    #1b556325,
    #1d386f25,
    #1d386f25,
    #20277825,
    #52266325,
    #8a244b25
  );
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
