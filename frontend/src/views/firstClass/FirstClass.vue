<template>
  <div>
    <el-card class="box-card">
      <!-- 功能区 -->
      <div slot="header">
        <span>学生列表</span>
        <el-button type="text" class="addBtn" @click="addIsVisible = true"
          >添加用户</el-button
        >
        <!-- 搜索框 -->
        <el-input
          placeholder="根据姓名搜索"
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

      <!-- 表格区 -->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="studentName" label="姓名"> </el-table-column>
        <el-table-column prop="studentNum" label="学号"> </el-table-column>
        <el-table-column prop="studentClass" label="班级"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="update(scope.row._id)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="remove(scope.row._id)"
              >删除</el-button
            >
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-setting"
              @click="detail(scope.row._id)"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加学生对话框 -->
    <add-students
      @getStudents="getStudents"
      :addIsVisible="addIsVisible"
      @addClose="addIsVisible = false"
    />
    <!-- 编辑学生对话框 -->
    <update-students
      :id="id"
      :updateIsVisible="updateIsVisible"
      @updateClose="updateIsVisible = false"
      @getStudents="getStudents"
    />
  </div>
</template>

<script>
import AddStudents from "@/components/addStudents/AddStudents.vue";
import UpdateStudents from "@/components/updateStudents/UpdateStudents.vue";
import { result } from "@/helper/utils";
export default {
  components: {
    AddStudents,
    UpdateStudents,
  },
  data() {
    return {
      // 控制添加学生对话框是否显示
      addIsVisible: false,
      // 控制编辑学生对话框是否显示
      updateIsVisible: false,
      // 表格数据
      tableData: [],
      // 学生的id
      id: "",
      // 搜索关键字
      keyWord: "",
    };
  },
  mounted() {
    // 获取学生信息
    this.getStudents();
  },
  methods: {
    // 获取工程一班的学生列表
    async getStudents() {
      const { data: res } = await this.$http.get("students/byClass", {
        params: {
          studentClass: "工程一班",
        },
      });
      // 筛选出basicInfo数据
      this.tableData = res.data.map((item) => {
        return {
          studentName: item.basicInfo.studentName,
          studentNum: item.basicInfo.studentNum,
          studentClass: item.basicInfo.studentClass,
          _id: item._id,
        };
      });
    },
    // 编辑功能
    async update(id) {
      // 显示编辑学生对话框
      this.updateIsVisible = true;
      this.id = id;
    },
    // 删除功能
    async remove(id) {
      const { data: res } = await this.$http.delete("students/" + id);
      result(res);
      this.getStudents();
    },
    // 切换到详情页
    async detail(id) {
      this.$router.push("detail/" + id);
    },
    // 搜索功能
    async search() {
      const { data: res } = await this.$http.get("students/byName", {
        params: {
          studentName: this.keyWord,
        },
      });
      result(res);
      // 筛选出basicInfo数据
      const newArry = [res.data]
     
      this.tableData = newArry.map((item) => {
        return {
          studentName: item.basicInfo.studentName,
          studentNum: item.basicInfo.studentNum,
          studentClass: item.basicInfo.studentClass,
          _id: item._id,
        };
      });

  
    },
  },
};
</script>

<style lang="scss" scoped>
.searchInput {
  margin-left: 600px;
  width: 300px;
}
.addBtn {
  float: right;
}
</style>