<template>
  <!-- 专业必修 -->
  <div class="content">
    <div ref="course_ref">1</div>
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
      // 筛选专业必修一项
      this.data = res.data.ProfessionalRequired;
      // 获取数据后更新图表
      this.updateChart();
    },
    // 初始化chartInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.course_ref);
    },
    // 更新图表
    updateChart() {
      const dataAxis = this.data.map((item) => {
        return item.courseName;
      });
      const data = this.data.map((item) => {
        return item.courseValue;
      });
      const option = {
        title: {
          text: "专业必修",
          subtext: "26门",
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            interval: 0, //X轴信息全部展示
            rotate: -60, //60 标签倾斜的角度
            inside: true,
            textStyle: {
              color: "black",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#999",
            },
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            type: "bar",
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值",
                },
                {
                  type: "min",
                  name: "最小值",
                },
              ],
            },
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                },
              ],
            },
            label: { show: true },
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" },
                ]),
              },
            },
            data: data,
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