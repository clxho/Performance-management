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
    };
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    // 获取详情学生信息
    async getData() {
      //获取路由里的id信息
      const id = this.$route.params.id;
      // 根据id获取学生数据
      const { data: res } = await this.$http.get("students/" + id);
      // 筛选体测一项
      this.data = res.data.physicalTest;
      // 获取数据后更新图表
      this.updateChart();
    },
    // 初始化chartInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.course_ref);
    },
    // 更新图表
    updateChart() {
      const chartData = this.data.map((item) => {
        return {
          value: item.courseValue,
          name: item.courseName,
        };
      });
      const option = {
        title: {
          text: "体测",
          subtext: "4年",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "体测",
            type: "pie",
            radius: "50%",
            data: chartData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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