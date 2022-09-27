<template>
  <div class="navbar">
    <!-- nav左侧logo -->
    <img class="logoOne" src="~@/assets/common/logoone.png" alt="">

    <div class="right-menu">
      <el-row>
        <!-- 用户头像 -->
        <el-col :span="5">
          <div style="height: 60px; line-height: 60px;">
            <img src="~@/assets/common/user.png" class="user-avatar" style="vertical-align: middle;">
          </div>
        </el-col>
        <!-- 欢迎用户提示 -->
        <el-col :span="14">
          <div style="height: 60px; line-height: 60px;">欢迎您，{{ $store.state.user.userInfo.userName }}</div>
        </el-col>
        <!-- 退出登录按钮 -->
        <el-col :span="5">
          <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
            <div style="height: 60px; line-height: 60px; cursor: pointer;" @click="logout">
              <span>退出</span>
              <i class="el-icon-caret-bottom" />
            </div>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    // 登出事件
    async logout() {
      await this.$store.commit('user/REMOVE_USERINFO')
      this.$router.push(`/login`)
      this.$message({
        message: '退出成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-image: url(~@/assets/common/backgroundone.png);
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .logoOne {
    width: 88px;
    margin-top: 12px;
    margin-left: 15px;
  }

  // .hamburger-container {
  //   line-height: 46px;
  //   height: 100%;
  //   float: left;
  //   cursor: pointer;
  //   transition: background .3s;
  //   -webkit-tap-highlight-color:transparent;

  //   &:hover {
  //     background: rgba(0, 0, 0, .025)
  //   }
  // }

  // .breadcrumb-container {
  //   float: left;
  // }

  .right-menu {
    float: right;
    width: 240px;
    height: 100%;
    margin-right: 24px;
    color: #fff;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
