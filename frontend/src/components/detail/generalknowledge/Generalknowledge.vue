<template>
  <!-- 通识必选 -->
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
      // 筛选通识必选一项
      this.data = res.data.Generalknowledge;
      // 获取数据后更新图表
      this.updateChart();
    },
    // 初始化chartInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.course_ref);
    },
    // 更新图表
    updateChart() {
      // x轴
      const dataAxis = this.data.map((item) => {
        return item.courseName;
      });
      // y轴
      const data = this.data.map((item) => {
        return item.courseValue;
      });
      const option = {
         title: {
          text: "通识必选",
          subtext: "6门",
        },
        xAxis: {
          axisLabel: {
            interval: 0, //X轴信息全部展示
          },
          type: "category",
          data: dataAxis,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: data,
            type: "line",
            markPoint: {
              data: [{ type: "max" }, { type: "min" }],
            },
            markLine: {
              data: [{ type: "average" }],
            },
            label: {show: true},
            smooth: true
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