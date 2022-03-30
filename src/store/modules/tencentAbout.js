// 引入API
import api from '@/api/index'
// 引入nanoid
import { nanoid } from 'nanoid'
// 在这里处理来自腾讯API的数据
// 城市疫情数据：<https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5>
const tencentAbout = {
	namespaced: true, //开启命名空间
	state: {
		caseReport: [], // 疫情速报
		mapChinaNow: [], // 中国现存确诊
		mapChinaAll: [], // 中国累计确诊
		caseCollectChina: [], // 国内各地区疫情统计汇总
	},
	actions: {
		getNcovCity(context) {
			api.getNocvCity({
				// 传递query参数
				name: 'disease_h5',
			})
				.then(response => {
					if (JSON.parse(response.status) == 200) {
						context.commit('handleNcovCity', JSON.parse(response.data.data))
					}
				})
				.catch(error => {
					console.log(error.message)
				})
		},
	},
	mutations: {
		handleNcovCity(state, data) {
			const cities = data.areaTree[0].children
			for (const city of cities) {
				// 拼接成echarts需要的格式 { name: "北京", value: 1000 }
				const temp = {
					// 省市名
					name: city.name,
					// 现存确诊人数
					value: city.total.nowConfirm,
				}
				const temp1 = {
					// 省市名
					name: city.name,
					// 累计确诊人数
					value: city.total.confirm,
				}
				const temp3 = {
					// 因为caseCollectChina是用v-for渲染的 需要绑定key
					// id: nanoid(),
					// 省市名
					name: city.name,
					// 新增确诊人数
					todayConfirm: city.today.confirm,
					// 累计确诊人数
					totalConfirm: city.total.confirm,
					// 累计治愈人数
					totalHeal: city.total.heal,
					// 累计死亡人数
					totalDead: city.total.dead,
					// 下属的城市/区
					children: city.children,
					isShowDetail: false,
				}
				state.mapChinaNow.push(temp)
				state.mapChinaAll.push(temp1)
				state.caseCollectChina.push(temp3)
				for (const children of city.children) {
					// 排除境外输入和新增病例为0的地区
					if (children.today.confirm && children.name !== '境外输入') {
						const temp = {
							// 因为caseReport是用v-for渲染的 需要绑定key
							id: nanoid(),
							// 城市名称
							name: children.name,
							// 今日确诊数量
							todayConfirm: children.today.confirm,
							// 现存确诊数量
							nowConfirm: children.total.nowConfirm,
							// 所属省(直辖市)名称
							province: city.name,
						}
						state.caseReport.push(temp)
					}
				}
			}
		},
	},
}

export default tencentAbout
