// 引入Vue核心库
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
import tianAbout from "@/store/modules/tianAbout";
import tencentAbout from "@/store/modules/tencentAbout";
// 应用Vuex插件
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		tianAbout,
		tencentAbout,
	},
});

export default store;
