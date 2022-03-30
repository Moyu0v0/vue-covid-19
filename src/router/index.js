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
		path: '/Policy/:citys',
		name: 'policy',
		component: () => import('@/views/Policy'),
		props: true,
	},
	{
		path: '/HSJG/:city',
		name: 'hsjg',
		component: () => import('@/views/HSJG'),
		props: true,
	},
]

const router = new VueRouter({
	routes,
})

export default router
