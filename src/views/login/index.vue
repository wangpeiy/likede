<template>
  <div class="login-container">

    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="login-logo"><img src="~@/assets/common/logo.png"></div>

      <!-- 账号输入框 -->
      <el-form-item prop="loginName">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="loginName"
          v-model="loginForm.loginName"
          placeholder="请输入账号"
          name="loginName"
          type="text"
          tabindex="1"
          auto-complete="on"
          @keyup.enter.native="login"
        />
      </el-form-item>

      <!-- 密码输入框 -->
      <el-form-item prop="password">
        <span class="svg-container ">
          <svg-icon icon-class="password" />
        </span>
        <el-input ref="pwd" v-model="loginForm.password" :type="isShowPassword? 'text' : 'password'" @keyup.enter.native="login" />
        <span class="svg-container " @click="showPwd">
          <svg-icon :icon-class="isShowPassword ?'eye-open' : 'eye'" />
        </span>
      </el-form-item>

      <!-- 验证码输入框 -->
      <el-form-item prop="code">
        <el-row>
          <el-col :span="17"><div class="grid-content bg-purple" />
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="code"
              v-model="loginForm.code"
              placeholder="请输入验证码"
              name="code"
              type="text"
              tabindex="1"
              auto-complete="on"
              maxlength="4"
              @keyup.enter.native="login"
            />
          </el-col>
          <el-col :span="7"><div class="grid-content bg-purple" />
            <div class="code"><img :src="imgUrl" alt="" @click="changeCode"></div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-button class="loginBtn" :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="login">Login</el-button>

    </el-form>

  </div>
</template>

<script>
import { imageCodeAPI } from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      isShowPassword: false,
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      loginRules: {
        loginName: [{ required: true, message: '账号不可为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不可为空', trigger: 'blur' }, { min: 3, max: 16, message: '密码格式不正确', trigger: 'blur' }],
        code: [{ required: true, message: '验证码不可为空', trigger: 'blur' }, { min: 4, max: 4, message: '验证码格式不正确', trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      imgUrl: null
    }
  },
  created() {
    this.imageCode()
  },
  methods: {
    // 是否展示密码框的内容
    showPwd() {
      this.isShowPassword = !this.isShowPassword
      this.$nextTick(() => {
        this.$refs.pwd.focus()
      })
    },
    // 登录按钮事件
    async login() {
      try {
        // 校验格式
        await this.$refs.loginForm.validate()
        // 开启 loading
        this.loading = true
        // 发起请求接口
        await this.$store.dispatch('user/getUserInfo', this.loginForm)
        // 跳转到主页
        this.$store.getters.token ? this.$router.push('/') : ''
      } finally {
        // 关闭 loading
        this.loading = false
      }
    },
    // 请求随机数
    async imageCode() {
      const random = Math.random()
      const { data } = await imageCodeAPI(random)
      // 将 random 随机数 存入 clientToken
      this.loginForm.clientToken = random
      console.log(data)
      this.imgUrl = window.URL.createObjectURL(data)
      console.log(11, this.imgUrl)
    },
    // 点击验证码事件
    changeCode() {
      this.imageCode()
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#999;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background-image: url('~@/assets/common/background.png'); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕

  // login图标
  .login-logo {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  // 登录按钮样式
  .loginBtn {
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
  }

  // 验证码输入框
  .code {
    width: 100%;
    height: 50px;
    background-color: #999;
  }

  .el-input  {

    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    width: 100%;
    height: 52px;
    margin-bottom: 24px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    height: 388px;
    max-width: 100%;
    // overflow: hidden;
    padding: 76px 35px 0;
    background: #fff;
    margin: 200px auto;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
