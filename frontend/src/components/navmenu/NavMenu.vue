<template>
  <div>
    <el-menu
      background-color="#006266"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <span>工程班</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/firstClass">工程一班</el-menu-item>
          <el-menu-item index="/secondClass">工程二班</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <span slot="title">预留</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">用户</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu"
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 800px;
}
</style>