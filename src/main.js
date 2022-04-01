import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import echarts from './plugins/echarts'
import './plugins/vant'
// Vant桌面端适配
import '@vant/touch-emulator'

Vue.config.productionTip = false
Vue.prototype.$charts = echarts

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
