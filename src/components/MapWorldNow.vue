<template>
  <div id="MapWorldNow"></div>
</template>

<script>
export default {
  name: "MapWorldNow",
  props: ["nationsNow"],
  watch: {
    nationsNow: {
      handler(newValue) {
        this.$charts.MapWorld("MapWorldNow", newValue);
      },
    },
  },
};
</script>

<style scoped>
#MapWorldNow {
  width: 375px;
  height: 400px;
}
</style>