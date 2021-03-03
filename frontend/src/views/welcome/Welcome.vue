<template>
  <div>
    <h1>欢迎使用毕业生成绩管理后台</h1>
    <div class="container">
      <div class="carousel">
        <el-carousel
          indicator-position="outside"
          height="500px"
        >
          <el-carousel-item>
            <img src="../../assets/img/img2.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/img/img1.jpeg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/img/img3.jpeg" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="date">
        <el-calendar v-model="value"> </el-calendar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.date {
  width: 500px;
  height: 500px;
}
.carousel {
  width: 700px;
}
img {
  width: 100%;
  height: 100%;
}
</style>