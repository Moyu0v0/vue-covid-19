<template>
  <div class="case-report">
    <div class="info">
      <p class="title">
        <i></i>
        疫情速报
      </p>
    </div>
    <div class="container">
      <div class="title">
        <span>该数据为31个省（自治区、直辖市）和不含港澳台的本土新增病例</span>
      </div>
    </div>
    <div class="main">
      <van-row gutter="1" class="header">
        <van-col span="10" style="border-right: 0.5px solid #fff">地区</van-col>
        <van-col span="7" style="border-right: 0.5px solid #fff"
          >新增本土</van-col
        >
        <van-col span="7">现有病例</van-col>
      </van-row>
      <van-row v-for="item in cityData" :key="item.id" class="sub">
        <van-col span="10"
          >{{ item.name }}
          <van-tag plain round type="primary">{{
            item.province
          }}</van-tag></van-col
        >
        <van-col span="7" class="blue">{{ item.todayConfirm }}</van-col>
        <van-col span="7">{{ item.nowConfirm }}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
// import api from "../api/index";
export default {
  name: "CaseReport",
  props: ["cityData"],
};
</script>

<style scoped lang="less">
.case-report {
  padding: 0.16rem;
  background: #fff;
  .info {
    background: #fff;
    margin-bottom: 0.0667rem;
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
  .container {
    .title {
      margin-bottom: 0.0667rem;
    }
  }
  .main {
    text-align: center;

    .header {
      background-color: rgb(236, 234, 234);
      height: 25px;
      line-height: 25px;
      border-radius: 5px;
    }
    .sub {
      height: 30px;
      line-height: 30px;
      font-weight: 700;
      border-bottom: 0.1px solid rgb(245, 243, 243);
      .blue {
        color: #4187f2;
      }
    }
  }
}
</style>
