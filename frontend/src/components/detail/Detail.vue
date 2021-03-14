<template>
  <div>
    <professional-required />
    <public-compulsory />
    <professional-practice />
    <generalknowledge />
    <comprehensive />
    <physical-test />
    <radar />
    <el-button type="primary" round @click="goBack">返回</el-button>
  </div>
</template>

<script>
import PhysicalTest from "./physicalTest/PhysicalTest.vue";
import Generalknowledge from "./generalknowledge/Generalknowledge.vue";
import ProfessionalRequired from "./professionalRequired/ProfessionalRequired.vue";
import PublicCompulsory from "./publicCompulsory/PublicCompulsory.vue";
import ProfessionalPractice from "./professionalPractice/ProfessionalPractice.vue";
import Comprehensive from "./comprehensive/Comprehensive";
import Radar from "./radar/Radar.vue";

export default {
  components: {
    PhysicalTest,
    ProfessionalRequired,
    PublicCompulsory,
    ProfessionalPractice,
    Generalknowledge,
    Comprehensive,
    Radar,
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
.el-button {
  position: fixed;
  top: 100px;
  right: 10px;
}
</style>