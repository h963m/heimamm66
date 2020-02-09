<template>
  <!-- 整体容器 -->
  <div class="login-container">
    <!-- 左侧盒子 -->
    <div class="left-box">
      <div class="title-box">
        <img src="../../assets/login-login.png" alt class="logo" />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <sapan class="sub-title">用户登录</sapan>
      </div>
      <!-- 表单 -->
      <el-form ref="form" :model="loginForm" :rules="rules" label-width="43px">
        <!-- 手机号 -->
        <el-form-item prop="phone">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item> 
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            show-password
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-row>
            <el-col :span="17">
              <el-input
                prefix-icon="el-icon-key"
                v-model="loginForm.loginCode"
                placeholder="请输入验证码"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <!-- 登录验证码 -->
              <img class="login-code" src="../../assets/login_captcha.png" alt="">
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.isChecked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>
            和
            <el-link type="primary">隐私条款</el-link>

            </el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button class="my-btn" type="primary">登录</el-button>
          <el-button class="my-btn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右侧的图片 -->
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  // 组建的名字
  name: "login",
  data() {
    return {
      loginForm: {
        // 手机号
        phone: "",
        // 密码
        password: "",
        // 验证码
        loginCode: "",
        // 是否勾选
        isChecked: false
      },
      rules:{
        phone:[
          {required: true, message: '请输入用户名' , trigger: 'blur'},
          {min: 6,max: 12,message:'长度在6 到 12 个字符' ,trigger :'blur'}
        ],
        password:[
          {required: true, message: '请输入密码' , trigger: 'blur'},
          {min: 6,max: 8,message:'长度在6 到 8 个字符' ,trigger :'blur'}
        ],

      }
    };
  }
};
</script>

<style lang="less">
.login-container {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  /* 开启弹性布局 */
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右均分 */
  justify-content: space-around;
  // 左侧盒子
  .left-box {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding-right: 41px;
    box-sizing: border-box;
    .title-box {
      display: flex;
      align-items: center;
      margin: 44px 0 27px 48px;
      .title {
        font-size: 24px;
        margin-left: 16px;
        margin-right: 14px;
      }
      .line {
        height: 28px;
        width: 1px;
        background: rgba(199, 199, 199, 1);
        margin-left: 14px;
        margin-right: 12px;
      }
      .sub-title {
        font-size: 21px;
      }
    }
    // 登录验证码
    .login-code{
      width: 100%;
      height: 40.8px;
    }
    .my-btn {
      width: 100%;
      margin-left: 0;
      margin-bottom: 26px;
    }
  }
  // 协议区的布局
  .el-checkbox {
    display: flex;
    .el-checkbox__label{
      display: flex;
    }
  }
}
</style>