import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/springtravel/:citys',
		name: 'springtravel',
		component: () => import('@/views/SpringTravelView'),
		props: true,
	},
	{
		path: '/queryvity/:city',
		name: 'querycity',
		component: () => import('@/views/QueryCityView'),
		props: true,
	},
]

const router = new VueRouter({
	routes,
})

export default router
