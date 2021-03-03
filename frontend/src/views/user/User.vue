<template>
  <div>
    <div class="container">
      <!-- 搜索框 -->
      <el-input
        placeholder="请输入姓名查询"
        class="searchInput"
        v-model="keyWord"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
import { result } from "@/helper/utils";
export default {
  data() {
    return {
      // 搜索关键字
      keyWord: "",
      Data: {},
    };
  },
  methods: {
    // 搜索功能
    async search() {
      const { data: res } = await this.$http.get("students/byName", {
        params: {
          studentName: this.keyWord,
        },
      });
      if (res.meta.code == 1) {
        this.Data = res.data;
        this.$router.push(`data/${this.Data._id}`);
      } else {
        result(res);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 500px;
  margin: 220px auto;
}
</style>