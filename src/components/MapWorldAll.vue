<template>
  <div id="MapWorldAll"></div>
</template>

<script>
export default {
  name: "MapWorldAll",
  props: ["nationsAll"],
  mounted() {
    this.$charts.MapWorld("MapWorldAll", this.nationsAll);
  },
};
</script>

<style scoped>
#MapWorldAll {
  width: 375px;
  height: 400px;
}
</style>