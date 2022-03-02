import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/mapcitynow/:city", // 占位符声明接收city参数
		name: "mapcitynow",
		component: () => import("@/views/MapCityNow"),
		props: true, // props值为true，则把路由收到的所有params参数通过props传给mapcitynow组件
	},
	{
		path: "/mapcityall/:city", // 占位符声明接收city参数
		name: "mapcityall",
		component: () => import("@/views/MapCityAll"),
		props: true, // props值为true，则把路由收到的所有params参数通过props传给mapcitynow组件
	},
	{
		path: "/springtravel/:citys",
		name: "springtravel",
		component: () => import("@/views/SpringTravelView"),
		props: true,
	},
	{
		path: "/queryvity/:city",
		name: "querycity",
		component: () => import("@/views/QueryCityView"),
		props: true,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
