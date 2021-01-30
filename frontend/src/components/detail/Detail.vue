<template>
  <div>
    <professional-required />
    <public-compulsory />
    <professional-practice/>
    <generalknowledge/>
    <physical-test />
  </div>
</template>

<script>
import PhysicalTest from "./physicalTest/PhysicalTest.vue";
import Generalknowledge from "./generalknowledge/Generalknowledge.vue";
import ProfessionalRequired from "./professionalRequired/ProfessionalRequired.vue";
import PublicCompulsory from "./publicCompulsory/PublicCompulsory.vue";
import ProfessionalPractice from "./professionalPractice/ProfessionalPractice.vue";

export default {
  components: { PhysicalTest, ProfessionalRequired, PublicCompulsory,ProfessionalPractice,Generalknowledge },
};
</script>

<style>
</style>