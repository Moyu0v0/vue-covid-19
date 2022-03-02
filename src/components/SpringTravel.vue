<template>
  <div>
    <div class="info">
      <p class="title">
        <i></i>
        春节各地出行防疫政策
      </p>
      <Cascader
        :options="options"
        label="出发地区"
        placeholder="请选择出发地区"
        @onValue="getFromCity"
      ></Cascader>
      <Cascader
        :options="options"
        label="到达地区"
        placeholder="请选择到达地区"
        @onValue="getToCity"
      ></Cascader>
      <van-button type="info" block @click="toSpringTravelView"
        >查看政策</van-button
      >
    </div>
    <div class="info">
      <p class="title">
        <i></i>
        核酸检测机构查询
      </p>
      <Cascader
        :options="options"
        label="查询地区"
        placeholder="请选择查询地区"
        @onValue="getQueryCity"
      ></Cascader>
      <van-button type="info" block @click="toQueryCityView"
        >查看核酸检测机构</van-button
      >
    </div>
  </div>
</template>

<script>
import api from "@/api/index";
import Cascader from "@/components/Cascader";
export default {
  name: "SpringTravel",
  components: { Cascader },
  data() {
    return {
      city: {},
      citys: [],
      options: [],
    };
  },
  methods: {
    getFromCity(data) {
      this.citys.push(data);
    },
    getToCity(data) {
      this.citys.push(data);
    },
    getQueryCity(data) {
      this.city = data;
    },
    toSpringTravelView() {
      if (this.citys.length === 2) {
        // 路由跳转并携带参数 注意这里是对象写法必须使用name不能用path
        this.$router.push({
          name: "springtravel",
          params: { citys: this.citys },
        });
      } else {
        this.$notify({ type: "danger", message: "请输入城市" });
      }
    },
    toQueryCityView() {
      if (this.city) {
        // 路由跳转并携带参数 注意这里是对象写法必须使用name不能用path
        this.$router.push({
          name: "querycity",
          params: { city: this.city },
        });
      } else {
        this.$notify({ type: "danger", message: "请输入城市" });
      }
    },
  },
  mounted() {
    api
      .getCityName({
        key: "e9b4d95bcb942e342a309093c53c9943",
      })
      .then((response) => {
        if (response.status == 200) {
          // 拼接options选项列表
          const allData = [];
          for (let i = 0; i < response.data.result.length; i++) {
            const children = [];
            for (let j = 0; j < response.data.result[i].citys.length; j++) {
              const cityData = {
                text: response.data.result[i].citys[j].city,
                value: response.data.result[i].citys[j].city_id,
              };
              children.push(cityData);
            }
            const provinceData = {
              text: response.data.result[i].province,
              value: response.data.result[i].province_id,
              children,
            };
            allData.push(provinceData);
          }
          this.options = allData;
        }
      });
    // console.log(this.citys);
  },
};
</script>

<style scoped>
.info {
  padding: 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
}
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
</style>
