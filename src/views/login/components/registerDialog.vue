<template>
  <el-dialog
    class="register-dialog"
    center
    width="603px"
    title="用户注册"
    :visible.sync="dialogFormVisible"
  >
    <el-form
      status-icon
      :model="registerForm"
      ref="registerForm"
      :rules="rules"
    >
      <el-form-item label="昵称" prop="username" :label-width="formLabelWidth">
        <el-input v-model="registerForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
        <el-input v-model="registerForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone" :label-width="formLabelWidth">
        <el-input v-model="registerForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
        <el-input
          show-password
          v-model="registerForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="图形码" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="16">
            <el-input v-model="registerForm.name" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="7" :offset="1" class="register-box">
            <img
              class="register-code"
              src="../../../assets/login_captcha.png"
              alt=""
            />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="验证码" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="16">
            <el-input v-model="registerForm.name" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-button>点击获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
// 定义效验函数 - 邮箱
const checkEmail = (rule, value, callback) => {
  // 获取数据 value
  // 定义正则表达式 定义一个正则对象
  const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  // 效验方法 test 方法 是正则对象
  if (reg.test(value) == true) {
    callback();
  } else {
    callback(new Error("邮箱的格式不正确"));
  }
};
// 定义效验函数 -手机号
const checkPhone = (rule, value, callback) => {
  // 获取数据 value
  // 定义正则表达式 定义一个正则对象
  const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
  // 效验方法 test 方法 是正则对象
  if (reg.test(value) == true) {
    callback();
  } else {
    callback(new Error("手机号的格式不正确"));
  }
};
export default {
  data() {
    return {
      // 是否显示对话框
      dialogFormVisible: false,
      //  表单数据
      registerForm: {
        username: "",
        password: "",
        phone: ""
      },
      formLabelWidth: "62px",
      //  效验规则
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "用户名的长度6-12位", trigger: "change" }
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" }
        ],
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "密码的长度为6-12位", trigger: "change" }
        ]
      }
    };
  }
};
</script>

<style lang="less">
.register-dialog {
  .el-dialog__header {
    background: linear-gradient(to right, #0dbfef, #1792f8);
  }
  .el-dialog__title {
    color: #fff;
  }
  .register-box {
    height: 40.8px;
  }
  .register-code {
    width: 100%;
    height: 40.8px;
  }
}
</style>