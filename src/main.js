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
