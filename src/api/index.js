import axios from '../utils/request'
const base = {
	txBaseUrl: 'http://api.tianapi.com',
	ncov: '/txapi/ncov/index',
	ncovabroad: '/txapi/ncovabroad/index',
	qqBaseUrl: '/api1',
	jhBaseUrl: '/api2',
	springTravel: '/springTravel/citys',
	springTravelQuery: '/springTravel/query',
	springTravelhsjg: '/springTravel/hsjg',
}

const api = {
	// 疫情数据 天行的接口 不需要配置代理服务器
	getNcov(params) {
		return axios.get(base.txBaseUrl + base.ncov, {
			params,
		})
	},
	// 省市疫情数据 腾讯的接口 需要配置代理服务器
	getNocvCity(params) {
		return axios.get(base.qqBaseUrl, { params })
	},
	// 海外疫情数据 天行的接口 不需要配置代理服务器
	getNcovAboard(params) {
		return axios.get(base.txBaseUrl + base.ncovabroad, {
			params,
		})
	},
	// 城市清单 聚合的接口 需要配置代理服务器
	getCityName(params) {
		return axios.get(base.jhBaseUrl + base.springTravel, {
			params,
		})
	},
	// 出行防疫政策 聚合的接口 需要配置代理服务器
	getPolicy(params) {
		return axios.get(base.jhBaseUrl + base.springTravelQuery, {
			params,
		})
	},
	// 核酸检测机构 聚合的接口 需要配置代理服务器
	getHSJG(params) {
		return axios.get(base.jhBaseUrl + base.springTravelhsjg, {
			params,
		})
	},
}

export default api
