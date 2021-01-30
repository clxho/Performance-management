<template>
  <div>
    <el-dialog
      title="添加学生"
      :visible.sync="addIsVisible"
      :show-close="false"
      fullscreen
    >
      <!-- 添加表单 -->
      <el-form :model="addForm" class="Form" >
        <!-- 基本信息 -->
        <div>
          <div>基本信息</div>
          <el-form-item label="姓名">
            <el-input v-model="addForm.studentName"></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="addForm.studentNum"></el-input>
          </el-form-item>
          <el-form-item label="班级">
            <el-select v-model="addForm.studentClass">
              <el-option label="工程一班" value="工程一班"></el-option>
              <el-option label="工程二班" value="工程二班"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <!-- 专业必修 -->
        <div>
          <div>专业必修</div>
          <el-form-item
            :label="item.key"
            v-for="(item, index) in Form.ProfessionalRequired"
            :key="index"
          >
            <el-input v-model="addForm[item.value]"></el-input>
          </el-form-item>
        </div>
        <!-- 公共必修 -->
        <div>
          <div>公共必修</div>
          <el-form-item
            :label="item.key"
            v-for="(item, index) in Form.PublicCompulsory"
            :key="index"
          >
            <el-input v-model="addForm[item.value]"></el-input>
          </el-form-item>
        </div>
        <!-- 专业实践 -->
        <div>
          <div>专业实践</div>
          <el-form-item
            :label="item.key"
            v-for="(item, index) in Form.ProfessionalPractice"
            :key="index"
          >
            <el-input v-model="addForm[item.value]"></el-input>
          </el-form-item>
        </div>
        <!--  通识必选-->
        <div>
          <div>通识必选</div>
          <el-form-item
            :label="item.key"
            v-for="(item, index) in Form.Generalknowledge"
            :key="index"
          >
            <el-input v-model="addForm[item.value]"></el-input>
          </el-form-item>
        </div>
        <!--  体测-->
        <div>体测</div>
        <div>
          <el-form-item
            :label="item.key"
            v-for="(item, index) in Form.physicalTest"
            :key="index"
          >
            <el-input v-model="addForm[item.value]"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { result } from "@/helper/utils";
export default {
  data() {
    return {
      addForm: {
        studentName: "",
        studentNum: "",
        studentClass: "",
      },
      Form: {},
    };
  },
  props: ["addIsVisible"],
  mounted() {
    this.getForm();
  },
  methods: {
    // 取消提交时
    closeDialog() {
      // 关闭对话框
      this.$emit("addClose");
      // 重置表单
      this.addForm = {
        studentName: "",
        studentNum: "",
        studentClass: "工程一班",
      };
    },
    // 提交
    async submit() {
      // 关闭对话框
      this.$emit("addClose");
      // 提交添加表单
      const { data: res } = await this.$http.post("students/add", this.addForm);
      // 显示提交结果
      result(res)
      // 如果表单提交有误阻止重置表单
      if(res.meta.code === 0) {
        return
      }
      // 成功提交、重置表单
      this.addForm = {
        studentName: "",
        studentNum: "",
        studentClass: "工程一班",
      };
      this.$emit("getStudents")
    },
    // 获取学生信息表单数据
    async getForm() {
      const { data: res } = await this.$http.get("/form");
      this.Form = res.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.Form {
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .el-form-item {
      width: 170px;
      margin-bottom: 10px;
    }
  }
}
</style>