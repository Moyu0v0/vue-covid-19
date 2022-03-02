<template>
  <div id="MapChinaNow"></div>
</template>

<script>
// import api from "@/api/index";

export default {
  name: "MapChinaNow",
  props: ["provinceNow"],
  watch: {
    provinceNow: {
      handler(newValue) {
        this.$charts.MapChinaNow("MapChinaNow", newValue);
      },
    },
  },
};
</script>

<style scoped>
#MapChinaNow {
  width: 375px;
  height: 400px;
}
</style>
