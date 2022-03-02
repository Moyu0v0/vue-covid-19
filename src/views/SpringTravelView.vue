<template>
  <div>
    <van-tabs v-model="active" sticky color="#2780f1">
      <van-tab :title="fromInfo.city_name" class="container">
        <h1>返乡政策</h1>
        <p>{{ fromInfo.high_in_desc }}</p>
        <p>{{ fromInfo.low_in_desc }}</p>
        <van-divider :style="{ borderColor: '#1989fa' }"> </van-divider>
        <h1>出行建议</h1>
        <p>{{ fromInfo.out_desc }}</p>
      </van-tab>
      <van-tab :title="toInfo.city_name" class="container">
        <h1>返乡政策</h1>
        <p>{{ toInfo.high_in_desc }}</p>
        <p>{{ toInfo.low_in_desc }}</p>
        <van-divider :style="{ borderColor: '#1989fa' }"> </van-divider>
        <h1>出行建议</h1>
        <p>{{ toInfo.out_desc }}</p>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  name: "SpringTravelView",
  props: ["citys"],
  data() {
    return {
      fromInfo: {},
      toInfo: {},
      active: 2,
    };
  },
  mounted() {
    // 获取出行防疫政策数据并处理
    api
      .getSpringTravelQuery({
        from: this.citys[0].value,
        to: this.citys[1].value,
        key: "e9b4d95bcb942e342a309093c53c9943",
      })
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
          this.fromInfo = response.data.result.from_info;
          this.toInfo = response.data.result.to_info;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>

<style scoped lang="less">
.container {
  padding: 0 12px;
}
p {
  // 只有遇到换行符才会换行
  white-space: pre-line;
}
h1 {
  text-align: center;
  font-size: 14px;
}
</style>
