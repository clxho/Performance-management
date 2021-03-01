<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 图标区 -->
      <div class="avatar_box">
        <img src="../../assets/school.png" alt="" />
      </div>
      <!-- 表单区 -->
      <el-form
        label-width="0px"
        class="login_form"
        :rules="loginFormRules"
        :model="loginForm"
        ref="loginFormRef"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-3702mima"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { result } from "@/helper/utils";

export default {
  name: 'Login',
  data() {
    return {
      //表单绑定的数据
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      //表单输入验证规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 10,
            message: '长度在 6 到 10 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    //点击按钮登入
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        //根具表单输入验证规则valid返回true/false
        //valid为false 不符合输入验证规则 不发送请求
        if (!valid) return
        //valid为true 发送登入请求
        const { data: res } = await this.$http.post('login', {
          username:this.loginForm.username,
          password:this.loginForm.password,

        })
        result(res)
        
        //登入失败
        if (res.meta.code != 1)
          return this.$message.error('密码或用户名错误')
        //登入成功
        //保存token
        window.sessionStorage.setItem("token",res.data.token)
        //跳转页面至home
        this.$router.push('/welcome')
      })
    },
  
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #006266;
  height: 100%;
}
.login-box {
  height: 300px;
  width: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  width: 130px;
  height: 130px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_form {
  margin: 114px 0 0 0;
  padding: 0 22px;
  .btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
