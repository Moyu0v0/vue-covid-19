<template>
  <div id="MapChinaAll"></div>
</template>

<script>
// import api from "@/api/index";

export default {
  name: "MapChinaAll",
  props: ["provinceAll"],
  mounted() {
    this.$charts.MapChinaAll("MapChinaAll", this.provinceAll);
  },
};
</script>

<style scoped>
#MapChinaAll {
  width: 375px;
  height: 400px;
}
</style>