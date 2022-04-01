// 引入API
import api from '@/api/index'

const sinaAbout = {
	namespaced: true, //开启命名空间
	state: {
		chart4: {},
	},
	actions: {
		// 1. Promise
		// getjwsrTop({ commit }) {
		// 	api.getjwsrTop()
		// 		.then(response => {
		// 			commit('handlejswrTop', response.data.data.jwsrTop)
		// 		})
		// 		.catch(err => {
		// 			console.log(err)
		// 		})
		// },
		// 2. async、await
		async getjwsrTop({ commit }) {
			try {
				const res = await api.getjwsrTop()
				if (res.status === 200) {
					commit('handlejswrTop', res.data.data.jwsrTop)
				}
			} catch (e) {
				console.error(e)
			}
		},
	},
	mutations: {
		handlejswrTop(state, data) {
			const temp = {
				title: '境外输入累计确诊省Top10',
				xAxisData: [],
				seriesData: [],
			}
			data.forEach((item, index) => {
				temp.xAxisData.push(item.name)
				// 柱状图的前两个为红色
				if (index <= 1) {
					temp.seriesData.push({
						value: Number(item.jwsrNum),
						itemStyle: {
							color: '#ee0a24',
						},
					})
				} else {
					temp.seriesData.push(Number(item.jwsrNum))
				}
			})
			state.chart4 = temp
		},
	},
}
export default sinaAbout
