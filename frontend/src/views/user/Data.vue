<template>
  <div class="container">
    <professional-required class="item" />
    <public-compulsory class="item" />
    <professional-practice class="item" />
    <generalknowledge class="item" />
    <physical-test class="item" />
    <comprehensive class="item" />
    <radar class="item" />
    <el-button type="primary" round @click="goBack">返回</el-button>
  </div>
</template>

<script>
import PhysicalTest from "../../components/detail/physicalTest/PhysicalTest.vue";
import Generalknowledge from "../../components/detail/generalknowledge/Generalknowledge.vue";
import ProfessionalRequired from "../../components/detail/professionalRequired/ProfessionalRequired.vue";
import PublicCompulsory from "../../components/detail/publicCompulsory/PublicCompulsory.vue";
import ProfessionalPractice from "../../components/detail/professionalPractice/ProfessionalPractice.vue";
import Radar from "../../components/detail/radar/Radar.vue";
import Comprehensive from "../../components/detail/comprehensive/Comprehensive";

export default {
  components: {
    PhysicalTest,
    ProfessionalRequired,
    PublicCompulsory,
    ProfessionalPractice,
    Generalknowledge,
    Comprehensive,
    Radar,
    Comprehensive,
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 710px;
  }
}
.el-button {
  position: fixed;
  top: 100px;
  right: 10px;
}
</style>