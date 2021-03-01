<template>
  <!-- 体测 -->
  <div class="content">
    <div ref="course_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      courseData: [],
    };
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  computed: {
    //体测平均值
    physicalTestAverage: function () {
      return (
        this.data.physicalTest.reduce((prev, cur) => {
          return prev + Number(cur.courseValue);
        }, 0) / this.data.physicalTest.length
      );
    },
    //通识必选平均值
    GeneralknowledgeAverage: function () {
      return (
        this.data.Generalknowledge.reduce((prev, cur) => {
          return prev + Number(cur.courseValue);
        }, 0) / this.data.Generalknowledge.length
      );
    },
    //专业必修平均值
    ProfessionalRequiredAverage: function () {
      return (
        this.data.ProfessionalRequired.reduce((prev, cur) => {
          return prev + Number(cur.courseValue);
        }, 0) / this.data.ProfessionalRequired.length
      );
    },
    //公共必修平均值
    PublicCompulsoryAverage: function () {
      return (
        this.data.PublicCompulsory.reduce((prev, cur) => {
          return prev + Number(cur.courseValue);
        }, 0) / this.data.PublicCompulsory.length
      );
    },
    //专业实践平均值
    ProfessionalPracticeAverage: function () {
      return (
        this.data.ProfessionalPractice.reduce((prev, cur) => {
          return prev + Number(cur.courseValue);
        }, 0) / this.data.ProfessionalPractice.length
      );
    },
    //绩点
    GPA: function () {
      return (
        this.courseData.reduce((cur, pre) => {
          if (pre.courseValue < 60) {
            pre.GPA = 0;
          } else if (pre.courseValue < 65) {
            pre.GPA = 1;
          } else if (pre.courseValue < 70) {
            pre.GPA = 1.5;
          } else if (pre.courseValue < 75) {
            pre.GPA = 2;
          } else if (pre.courseValue < 80) {
            pre.GPA = 2.5;
          } else if (pre.courseValue < 85) {
            pre.GPA = 3;
          } else if (pre.courseValue < 90) {
            pre.GPA = 3.5;
          } else if (pre.courseValue < 95) {
            pre.GPA = 4;
          } else if (pre.courseValue <= 100) {
            pre.GPA = 4.5;
          }
          return cur + pre.GPA * pre.creditHour;
        }, 0) / 104.5
      );
    },
  },
  methods: {
    // 获取详情学生信息
    async getData() {
      //获取路由里的id信息
      const id = this.$route.params.id;
      // 根据id获取学生数据
      const { data: res } = await this.$http.get("students/" + id);
      this.data = res.data;
      // 将成绩部分整合
      this.courseData = this.courseData
        .concat(this.data.Generalknowledge)
        .concat(this.data.ProfessionalPractice)
        .concat(this.data.ProfessionalRequired)
        .concat(this.data.PublicCompulsory);
      // 获取数据后更新图表
      this.updateChart();
    },
    // 初始化chartInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.course_ref);
    },
    // 更新图表
    updateChart() {
      const option = {
        title: {
          text: "能力分析",
        },
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: [
            { name: "专业必修", max: 100 },
            { name: "公共必修", max: 100 },
            { name: "通识必选 ", max: 100 },
            { name: "专业实践", max: 100 },
            { name: "体测", max: 100 },
            { name: "绩点", max: 4.5 },
          ],
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [
                  this.ProfessionalRequiredAverage.toFixed(4),
                  this.PublicCompulsoryAverage.toFixed(4),
                  this.GeneralknowledgeAverage.toFixed(4),
                  this.ProfessionalPracticeAverage.toFixed(4),
                  this.physicalTestAverage.toFixed(4),
                  this.GPA.toFixed(4),
                ],
              },
            ],
          },
        ],
      };
      this.chartInstance.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    height: 600px;
  }
}
</style>