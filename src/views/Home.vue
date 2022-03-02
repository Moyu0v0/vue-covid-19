<template>
  <div class="home">
    <van-tabs v-model="active" color="#2780f1" scrollspy sticky>
      <!-- 头部 -->
      <Header></Header>
      <!-- 病毒信息 -->
      <Covid19Info :infoChina="infoChina"></Covid19Info>
      <van-tab title="国内疫情">
        <!-- 最新消息 -->
        <News :news="news"></News>
        <!-- 病例统计 -->
        <CaseNum :infoChina="infoChina"></CaseNum>
        <!-- 疫情速报 -->
        <CaseReport :cityData="cityData"></CaseReport>
        <!-- 疫情地图 -->
        <MapChina
          :provinceNow="provinceNow"
          :provinceAll="provinceAll"
        ></MapChina>
      </van-tab>
      <van-tab title="国际疫情">
        <MapWorld :nationsNow="nationsNow" :nationsAll="nationsAll"></MapWorld>
      </van-tab>
      <van-tab title="出行防疫">
        <!-- 春节各地行出行防疫政策 -->
        <SpringTravel></SpringTravel>
      </van-tab>
    </van-tabs>
    <Note></Note>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Covid19Info from "../components/Covid19Info";
import News from "../components/News";
import CaseNum from "../components/CaseNum";
import CaseReport from "@/components/CaseReport";
import MapChina from "@/components/MapChina";
import MapWorld from "@/components/MapWorld";
import SpringTravel from "../components/SpringTravel";
import Note from "@/components/Note";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Header,
    Covid19Info,
    News,
    CaseNum,
    CaseReport,
    SpringTravel,
    MapChina,
    MapWorld,
    Note,
  },
  data() {
    return {
      active: 2,
    };
  },
  computed: {
    ...mapState("tianAbout", ["infoChina", "news", "nationsNow", "nationsAll"]),
    ...mapState("tencentAbout", ["cityData", "provinceNow", "provinceAll"]),
  },
  mounted() {
    this.$store.dispatch("tianAbout/getNcov");
    this.$store.dispatch("tianAbout/getNcovAboard");
    this.$store.dispatch("tencentAbout/getNcovCity1");
  },
};
</script>


