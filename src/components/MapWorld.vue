<template>
  <div class="map">
    <div class="info">
      <p class="title">
        <i></i>
        疫情地图
      </p>
    </div>
    <van-tabs v-model="active" color="#2780f1" type="card">
      <van-tab title="现存确诊"
        ><MapWorldNow :nationsNow="nationsNow"></MapWorldNow
      ></van-tab>
      <van-tab title="累计确诊"
        ><MapWorldAll :nationsAll="nationsAll"></MapWorldAll
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MapWorldNow from "@/components/MapWorldNow";
import MapWorldAll from "@/components/MapWorldAll";
export default {
  name: "MapWorld",
  data() {
    return {
      active: 2,
    };
  },
  props: ["nationsNow", "nationsAll"],
  components: {
    MapWorldNow,
    MapWorldAll,
  },
};
</script>

<style scoped lang="less">
.info {
  padding: 0.16rem;
  background: #fff;
  .title {
    font-size: 0.17rem;
  }
  .title i {
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
  }
}

.tabs-header {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
.tab {
  flex: 1;
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  text-align: center;
}

.active {
  border-bottom: 2px solid blue;
}
</style>
