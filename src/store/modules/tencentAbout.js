// 引入API
import api from "@/api/index";
// 引入nanoid
import { nanoid } from "nanoid";
// 在这里处理来自腾讯API的数据
// 城市疫情数据：<https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5>
const tencentAbout = {
	namespaced: true, //开启命名空间
	state: {
		city: "",
		cityData: [], // 疫情速报
		provinceNow: [], // 省（直辖市）疫情现存信息
		provinceAll: [], // 省（直辖市）疫情累计信息
		allCities: [], // 城市疫情信息
	},
	actions: {
		getNcovCity1(context) {
			api
				.getNocvCity({
					// 传递query参数
					name: "disease_h5",
				})
				.then((response) => {
					if (JSON.parse(response.status) == 200) {
						context.commit("handleNcovCity1", JSON.parse(response.data.data));
						context.commit("handleNcovCity2", JSON.parse(response.data.data));
					}
				})
				.catch((error) => {
					console.log(error.message);
				});
		},
		getNcovCity2(context) {
			api
				.getNocvCity({
					// 传递query参数
					name: "disease_h5",
				})
				.then((response) => {
					if (JSON.parse(response.status) == 200) {
						context.commit("handleNcovCity3", JSON.parse(response.data.data));
					}
				})
				.catch((error) => {
					console.log(error.message);
				});
		},
	},
	mutations: {
		// 获取省(直辖市)下属的城市数据并拼接格式
		handleNcovCity1(state, data) {
			state.cityData = []; // 数组清零 否则数据会叠加
			for (let i = 0; i < data.areaTree[0].children.length; i++) {
				// 排除港澳台地区
				if (
					data.areaTree[0].children[i].name !== "台湾" &&
					data.areaTree[0].children[i].name !== "香港" &&
					data.areaTree[0].children[i].name !== "澳门"
				)
					for (
						let j = 0;
						j < data.areaTree[0].children[i].children.length;
						j++
					) {
						// 排除境外输入和新增病例为0的地区
						if (
							data.areaTree[0].children[i].children[j].today.confirm &&
							data.areaTree[0].children[i].children[j].name !== "境外输入"
						) {
							let temp = {
								id: nanoid(),
								name: data.areaTree[0].children[i].children[j].name,
								todayConfirm:
									data.areaTree[0].children[i].children[j].today.confirm,
								nowConfirm:
									data.areaTree[0].children[i].children[j].total.nowConfirm,
								province: data.areaTree[0].children[i].name,
							};
							state.cityData.push(temp);
						}
					}
			}
			// console.log("state cityData", state.cityData);
		},
		// 获取省(直辖市)数据并拼接成echarts需要的格式 { name: "北京", value: 1000 }
		handleNcovCity2(state, data) {
			state.provinceNow = []; // 数组清零 否则数据会叠加
			state.provinceAll = []; // 数组清零 否则数据会叠加
			for (let i = 0; i < data.areaTree[0].children.length; i++) {
				let temp = {
					// 省市名
					name: data.areaTree[0].children[i].name,
					// 现存确诊人数
					value: data.areaTree[0].children[i].total.nowConfirm,
				};
				let temp1 = {
					// 省市名
					name: data.areaTree[0].children[i].name,
					// 累计确诊人数
					value: data.areaTree[0].children[i].total.confirm,
				};
				state.provinceNow.push(temp);
				state.provinceAll.push(temp1);
			}
		},
		// 匹配并获取省(直辖市)下属的城市数据并拼接成echarts需要的格式 { name: "西安市", value: 1000 }
		handleNcovCity3(state, data) {
			state.allCities = []; // 数组清零 否则数据会叠加
			for (let i = 0; i < data.areaTree[0].children.length; i++) {
				// 匹配到数据中的省(直辖市)数据
				if (data.areaTree[0].children[i].name == state.city) {
					for (
						let j = 0;
						j < data.areaTree[0].children[i].children.length;
						j++
					) {
						let temp = {
							name: data.areaTree[0].children[i].children[j].name + "市",
							value: data.areaTree[0].children[i].children[j].total.nowConfirm,
						};
						state.allCities.push(temp);
					}
				}
			}
			console.log("state allCities", state.allCities);
		},
	},
};

export default tencentAbout;
