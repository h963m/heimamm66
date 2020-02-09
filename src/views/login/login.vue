<template>
  <!-- 整体容器 -->
  <div class="login-container">
    <!-- 左侧盒子 -->
    <div class="left-box">
      <div class="title-box">
        <img src="../../assets/login-login.png" alt="" class="logo">
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <sapan class="sub-title">用户登录</sapan>
      </div>
    </div>
    <!-- 右侧的图片 -->
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  // 组建的名字
  name: "login"
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
  /* justify-content: space-between; */
  // 左侧盒子
    .left-box {
      width: 478px;
      height: 550px;
      background: rgba(245, 245, 245, 1);
      .title-box{
        display: flex;
        align-items: center;
        margin-top: 44px;
        margin-left: 48px;
        .logo{}
        .title{
          font-size: 24px;
          margin-left: 16px;
          margin-right: 14px;
        }
        .line{
          height: 28px;
          width: 1px;
          background:rgba(199,199,199,1);
          margin-left: 14px;
          margin-right: 12px;
        }
        .sub-title{
          font-size: 21px;
        }
      }
    }
}
</style>