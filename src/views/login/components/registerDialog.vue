<template>
  <el-dialog
    class="register-dialog"
    center
    width="603px"
    title="用户注册"
    :visible.sync="dialogFormVisible"
  >
    <el-form :model="registerForm" ref="registerForm" :rules="rules">
      <el-form-item label="昵称" :label-width="formLabelWidth" prop="username">
        <el-input v-model="registerForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="registerForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" :label-width="formLabelWidth">
        <el-input v-model="registerForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input show-password v-model="registerForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="图形码" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="16">
            <el-input v-model="registerForm.name" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="7" :offset="1" class="register-box">
            <img class="register-code" src="../../../assets/login_captcha.png" alt="" />
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
export default {
  data() {
    return {
      // 是否显示对话框
      dialogFormVisible: false,
      //  表单数据
      registerForm: {
        username: "",
        password:''
      },
      formLabelWidth: "62px",
    //  效验规则
    rules:{
        username:[
            { required: true, message: "用户名不能为空", trigger: "blur" },
            { min: 6,max: 12, message: "用户名的长度6-12位", trigger: "change" },
        ],
        password:[
            { required: true, message:'密码不能为空',trigger: 'blur'},
            { min: 6, max: 12,message:'密码的长度为6-12位',trigger: 'change'}
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
  .register-box{
      height: 40.8px;
  }
  .register-code{
      width: 100%;
      height: 40.8px;
  }
}
</style>