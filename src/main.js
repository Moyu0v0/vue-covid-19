import Vue from 'vue'
import App from './App.vue'
// 引入Vue-router
import router from './router'
// 引入Vuex
import store from './store'
// 引入公共样式
import './assets/css/common.css'
// 引入Echarts插件
import echarts from './plugins/echarts'
// 引入Vant UI
import './plugins/vant'
// 引入中国地图
import '../node_modules/echarts/map/js/china'
// 引入世界地图
import '../node_modules/echarts/map/js/world'
// 引入省市地图
// import "../node_modules/echarts/map/js/province/anhui";
// import "../node_modules/echarts/map/js/province/anhui";
// import "../node_modules/echarts/map/js/province/aomen";
// import "../node_modules/echarts/map/js/province/beijing";
// import "../node_modules/echarts/map/js/province/chongqing";
// import "../node_modules/echarts/map/js/province/fujian";
// import "../node_modules/echarts/map/js/province/gansu";
// import "../node_modules/echarts/map/js/province/guangdong";
// import "../node_modules/echarts/map/js/province/guangxi";
// import "../node_modules/echarts/map/js/province/guizhou";
// import "../node_modules/echarts/map/js/province/hainan";
// import "../node_modules/echarts/map/js/province/hebei";
// import "../node_modules/echarts/map/js/province/heilongjiang";
// import "../node_modules/echarts/map/js/province/henan";
// import "../node_modules/echarts/map/js/province/hubei";
// import "../node_modules/echarts/map/js/province/hunan";
// import "../node_modules/echarts/map/js/province/jiangsu";
// import "../node_modules/echarts/map/js/province/jiangxi";
// import "../node_modules/echarts/map/js/province/jilin";
// import "../node_modules/echarts/map/js/province/liaoning";
// import "../node_modules/echarts/map/js/province/neimenggu";
// import "../node_modules/echarts/map/js/province/ningxia";
// import "../node_modules/echarts/map/js/province/qinghai";
// import "../node_modules/echarts/map/js/province/shandong";
// import "../node_modules/echarts/map/js/province/shanghai";
// import "../node_modules/echarts/map/js/province/shanxi";
// import "../node_modules/echarts/map/js/province/shanxi1";
// import "../node_modules/echarts/map/js/province/sichuan";
// import "../node_modules/echarts/map/js/province/taiwan";
// import "../node_modules/echarts/map/js/province/tianjin";
// import "../node_modules/echarts/map/js/province/xianggang";
// import "../node_modules/echarts/map/js/province/xinjiang";
// import "../node_modules/echarts/map/js/province/xizang";
// import "../node_modules/echarts/map/js/province/yunnan";
// import "../node_modules/echarts/map/js/province/zhejiang";

// 关闭生产提示
Vue.config.productionTip = false
// 使用Echarts插件
Vue.use(echarts)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')

Vue.prototype.$charts = echarts
