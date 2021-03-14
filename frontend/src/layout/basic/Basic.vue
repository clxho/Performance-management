<template>
  <div class="basic-layout">
    <!-- 头部 start-->
    <div class="app-header">
      <!-- 头部左边 -->
      <div class="left">
        <img src="../../assets/school.png" alt="" />
        <div class="title">大学毕业生多维综合评价系统</div>
      </div>
      <!-- 头部右边 -->
      <div class="right">
        <div class="logout" @click="logout">退出</div>
      </div>
    </div>
    <!-- 头部 end -->
    <!-- 主体 start -->
    <div class="app-content">
      <!-- 主体左侧 -->
      <div class="left">
        <nav-menu></nav-menu>
      </div>
      <!-- 主体右侧 -->
      <div class="right">
        <router-view />
      </div>
    </div>
    <!-- 主体 end -->
  </div>
</template>

<script>
import NavMenu from "@/components/navmenu/NavMenu";
export default {
  name: "BasicLayout",
  components: {
    NavMenu,
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push("/login")
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #006266;
  z-index: 10;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 50px;
      margin: 0 16px;
    }

    .title {
      color: #eee;
      font-size: 18px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    .logout {
      width: 80px;
      text-align: center;
      height: 64px;
      line-height: 64px;
      cursor: pointer;
      margin-left: 16px;

      &:hover {
        background-color: #eee;
      }
    }
  }
}

.app-content {
  display: flex;
  margin-top: 64px;

  .left {
    width: 200px;
    position: fixed;
    top: 64px;
    bottom: 0;
  }

  .right {
    flex: 1;
    padding: 24px;
    margin-left: 200px;
  }
}
</style>