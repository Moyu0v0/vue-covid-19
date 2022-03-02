// 引入API
import api from "@/api/index";
// 引入nanoid
import { nanoid } from "nanoid";
// 在这里处理来自天行API的数据
// 1. 全国疫情数据：<http://api.tianapi.com/ncov/index?key=1418c5d0819239adbb4f75c949f15f08>
// 2. 海外疫情数据：<http://api.tianapi.com/ncovabroad/index?key=1418c5d0819239adbb4f75c949f15f08>
const tianAbout = {
	namespaced: true, //开启命名空间
	state: {
		// 病毒信息和全国病例信息
		infoChina: {},
		// 最新消息
		news: [],
		// 世界疫情
		nationsNow: [],
		nationsAll: [],
	},
	actions: {
		getNcov(context) {
			api
				.getNcov({
					key: "1418c5d0819239adbb4f75c949f15f08",
				})
				.then((response) => {
					if (response.status === 200) {
						context.commit("handleNcov", response.data.newslist[0]);
					}
				})
				.catch((error) => {
					console.log(error.message);
				});
		},
		getNcovAboard(context) {
			api
				.getNcovAboard({
					// 传递query参数
					key: "1418c5d0819239adbb4f75c949f15f08",
				})
				.then((response) => {
					if (response.status === 200) {
						context.commit("handleNcovAboard", response.data);
					}
				})
				.catch((error) => {
					console.log(error.message);
				});
		},
	},
	mutations: {
		handleNcov(state, data) {
			// 获取病毒信息和全国病例信息
			state.infoChina = data.desc;
			// 获取新闻数据
			state.news = []; // 数组清零 否则数据会叠加
			let temp = {};
			for (let i = 0; i < data.news.length; i++) {
				temp = data.news[i];
				temp.id = nanoid();
				state.news.push(temp);
			}
		},
		// 获取国家数据并拼接成echarts需要的格式 { name: "中国", value: 1000 }
		handleNcovAboard(state, data) {
			state.nationsNow = []; // 数组清零 否则数据会叠加
			state.nationsAll = []; // 数组清零 否则数据会叠加
			for (let i = 0; i < data.newslist.length; i++) {
				let temp = {
					// 国家名
					name: data.newslist[i].provinceName,
					// 现存确诊人数
					value: data.newslist[i].currentConfirmedCount,
				};
				let temp1 = {
					// 国家名
					name: data.newslist[i].provinceName,
					// 累计确诊人数
					value: data.newslist[i].confirmedCount,
				};
				state.nationsNow.push(temp);
				state.nationsAll.push(temp1);
			}
		},
	},
};
export default tianAbout;
