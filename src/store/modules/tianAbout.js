// 引入API
import api from '@/api/index'
// 引入nanoid
import { nanoid } from 'nanoid'
// 在这里处理来自天行API的数据
// 1. 全国疫情数据：<http://api.tianapi.com/ncov/index?key=1418c5d0819239adbb4f75c949f15f08>
// 2. 海外疫情数据：<http://api.tianapi.com/ncovabroad/index?key=1418c5d0819239adbb4f75c949f15f08>
const tianAbout = {
	namespaced: true, //开启命名空间
	state: {
		// 国内疫情
		caseNumChina: {},
		// 国外疫情
		caseNumWorld: {},
		// 最新消息
		news: [],
		// 世界疫情地图
		mapWorldNow: [],
		mapWorldAll: [],
		// 国外各国家疫情统计汇总
		caseCollectWorld: [],
	},
	actions: {
		getNcov(context) {
			api.getNcov({
				key: '1418c5d0819239adbb4f75c949f15f08',
			})
				.then(response => {
					if (response.status === 200) {
						context.commit('handleNcov', response.data.newslist[0])
					}
				})
				.catch(error => {
					console.log(error.message)
				})
		},
		getNcovAboard(context) {
			api.getNcovAboard({
				// 传递query参数
				key: '1418c5d0819239adbb4f75c949f15f08',
			})
				.then(response => {
					if (response.status === 200) {
						context.commit('handleNcovAboard', response.data)
					}
				})
				.catch(error => {
					console.log(error.message)
				})
		},
	},
	mutations: {
		handleNcov(state, data) {
			// 国内疫情
			state.caseNumChina = data.desc
			// 国外疫情
			state.caseNumWorld = data.desc.foreignStatistics
			state.caseNumWorld.modifyTime = data.desc.modifyTime
			// 新闻速报
			let temp = {}
			for (let i = 0; i < data.news.length; i++) {
				temp = data.news[i]
				temp.id = nanoid()
				state.news.push(temp)
			}
		},
		// 获取国家数据并拼接成echarts需要的格式 { name: "中国", value: 1000 }
		handleNcovAboard(state, data) {
			state.mapWorldNow = [] // 数组清零 否则数据会叠加
			state.mapWorldAll = [] // 数组清零 否则数据会叠加
			for (const nation of data.newslist) {
				const temp = {
					// 国家名
					name: nation.provinceName,
					// 现存确诊人数
					value: nation.currentConfirmedCount,
				}
				const temp1 = {
					// 国家名
					name: nation.provinceName,
					// 累计确诊人数
					value: nation.confirmedCount,
				}
				const temp3 = {
					id: nation.locationId,
					// 国家名
					name: nation.provinceName,
					// 现存确诊
					currentConfirm: nation.currentConfirmedCount,
					// 累计确诊
					totalConfirm: nation.confirmedCount,
					// 累计治愈
					totalHeal: nation.curedCount,
					// 累计死亡
					totalDead: nation.deadCount,
				}
				state.mapWorldNow.push(temp)
				state.mapWorldAll.push(temp1)
				state.caseCollectWorld.push(temp3)
			}
		},
	},
}
export default tianAbout
