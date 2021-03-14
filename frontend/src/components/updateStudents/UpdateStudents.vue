<template>
  <div>
    <el-dialog
      title="编辑学生"
      :visible.sync="updateIsVisible"
      :show-close="false"
      fullscreen
    >
      <!-- 编辑表单 -->
      <el-form :model="updateForm" class="Form">
        <!-- 基本信息 -->
        <div>
          <div>基本信息</div>
          <el-form-item label="姓名">
            <el-input v-model="updateForm.studentName"></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="updateForm.studentNum"></el-input>
          </el-form-item>
          <el-form-item label="班级">
            <el-select v-model="updateForm.studentClass">
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
            <el-input-number
              v-model="updateForm[item.value]"
              controls-position="right"
              size="mini"
              :min="0"
              :max="100"
            ></el-input-number>
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
            <el-input-number
              v-model="updateForm[item.value]"
              controls-position="right"
              size="mini"
              :min="0"
              :max="100"
            ></el-input-number>
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
            <el-input-number
              v-model="updateForm[item.value]"
              controls-position="right"
              size="mini"
              :min="0"
              :max="100"
            ></el-input-number>
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
            <el-input-number
              v-model="updateForm[item.value]"
              controls-position="right"
              size="mini"
              :min="0"
              :max="100"
            ></el-input-number>
          </el-form-item>
        </div>
        <!--  综合创新实践-->
        <div>
          <div>综合创新实践</div>
          <el-form-item
            :label="item.key"
            v-for="(item, index) in Form.ComprehensiveInnovationPractice"
            :key="index"
          >
            <el-input-number
              v-model="updateForm[item.value]"
              controls-position="right"
              size="mini"
              :min="0"
              :max="100"
            ></el-input-number>
          </el-form-item>
        </div>
        <!--  体测-->
        <div>
          <div>体测</div>
          <el-form-item
            :label="item.key"
            v-for="(item, index) in Form.physicalTest"
            :key="index"
          >
            <el-input-number
              v-model="updateForm[item.value]"
              controls-position="right"
              size="mini"
              :min="0"
              :max="100"
            ></el-input-number>
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
      updateForm: {},
      Form: {},
      newid: "",
    };
  },
  props: ["updateIsVisible", "id"],
  mounted() {
    this.getForm();
  },
  watch: {
    // 根据id获取学生信息,填入更新表单中 因为id是父组件异步获取的，所以需要在watch监听id，确保有id后在获取学生
    async id(newVal) {
      const { data: res } = await this.$http.get("students/" + newVal);
      // 设置好更新表单
      const {
        basicInfo,
        Generalknowledge,
        ProfessionalPractice,
        ProfessionalRequired,
        PublicCompulsory,
        ComprehensiveInnovationPractice,
        physicalTest,
      } = res.data;
      Generalknowledge.forEach((item) => {
        delete item.courseName;
        delete item.courseValue;
      });
      const a = Object.assign({}, ...Generalknowledge);
      ProfessionalPractice.forEach((item) => {
        delete item.courseName;
        delete item.courseValue;
      });
      const b = Object.assign({}, ...ProfessionalPractice);
      ProfessionalRequired.forEach((item) => {
        delete item.courseName;
        delete item.courseValue;
      });
      const c = Object.assign({}, ...ProfessionalRequired);
      PublicCompulsory.forEach((item) => {
        delete item.courseName;
        delete item.courseValue;
      });
      const d = Object.assign({}, ...PublicCompulsory);
      physicalTest.forEach((item) => {
        delete item.courseName;
        delete item.courseValue;
      });
      const e = Object.assign({}, ...physicalTest);
      ComprehensiveInnovationPractice.forEach((item) => {
        delete item.courseName;
        delete item.courseValue;
      });
      const f = Object.assign({}, ...ComprehensiveInnovationPractice);
      this.updateForm = Object.assign({}, a, b, c, d, e, f,basicInfo);
      this.updateForm.id = newVal;
    },
  },
  methods: {
    // 取消提交时
    closeDialog() {
      // 关闭对话框
      this.$emit("updateClose");
    },
    // 获取学生信息表单数据
    async getForm() {
      const { data: res } = await this.$http.get("/form");
      this.Form = res.data;
    },
    // 提交更新表单
    async submit() {
      // 发送更新请求
      const { data: res } = await this.$http.post(
        "students/update",
        this.updateForm
      );
      result(res);
      // 关闭对话框
      this.$emit("updateClose");
      this.$emit("getStudents");
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
      margin: 0 5px 10px;
    }
  }
}
</style>