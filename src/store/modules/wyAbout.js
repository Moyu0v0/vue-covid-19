// 引入API
import api from '@/api/index'

const wyAbout = {
	namespaced: true, //开启命名空间
	state: {
		chart1: {},
		chart2: {},
		chart3: {},
	},
	actions: {
		// 1. Promise
		// getDayList({ commit }) {
		// 	api.getDayList()
		// 		.then(response => {
		// 			if (response.status === 200) {
		// 				commit('handleDayList', response.data.data)
		// 			}
		// 		})
		// 		.catch(error => {
		// 			console.log(error.message)
		// 		})
		// },
		// 2. async、await
		async getDayList({ commit }) {
			try {
				const res = await api.getDayList()
				if (res.status === 200) {
					commit('handleDayList', res.data.data)
				}
			} catch (e) {
				console.err(e)
			}
		},
	},
	mutations: {
		handleDayList(state, data) {
			const temp1 = {
				title: '全国 总新增确诊/新增境外输入确诊 趋势',
				xAxisData: [],
				series: [
					{ name: '新增境外输入', data: [] },
					{ name: '总新增确诊', data: [] },
				],
			}
			const temp2 = {
				title: '全国 现有确诊/累计确诊 趋势',
				xAxisData: [],
				series: [
					{ name: '现有确诊', data: [] },
					{ name: '累计确诊', data: [] },
				],
			}
			const temp3 = {
				title: '全国 累计治愈/死亡 趋势',
				xAxisData: [],
				series: [
					{ name: '治愈', data: [] },
					{ name: '死亡', data: [] },
				],
			}
			for (const day of data.chinaDayList) {
				// 时间
				temp1.xAxisData.push(day.date)
				temp2.xAxisData.push(day.date)
				temp3.xAxisData.push(day.date)
				// 新增境外输入
				temp1.series[0].data.push(day.today.input)
				// 新增确诊
				temp1.series[1].data.push(day.today.confirm)
				// 现有确诊
				temp2.series[0].data.push(day.total.storeConfirm)
				// 累计确诊
				temp2.series[1].data.push(day.total.confirm)
				// 治愈
				temp3.series[0].data.push(day.total.heal)
				// 死亡
				temp3.series[1].data.push(day.total.dead)
			}
			state.chart1 = temp1
			state.chart2 = temp2
			state.chart3 = temp3
		},
	},
}
export default wyAbout
