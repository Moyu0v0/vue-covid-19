<template>
	<div>
		<div class="header">
			<p class="title">出行防疫政策查询</p>
		</div>
		<Cascader
			:options="options"
			label="出发地区"
			placeholder="请选择出发地区"
			@onValue="getFromCity"
		></Cascader>
		<Cascader
			:options="options"
			label="到达地区"
			placeholder="请选择到达地区"
			@onValue="getToCity"
		></Cascader>
		<van-button type="info" block @click="toSpringTravelView">查看政策</van-button>

		<div class="header">
			<p class="title">核酸检测机构查询</p>
		</div>
		<Cascader
			:options="options"
			label="查询地区"
			placeholder="请选择查询地区"
			@onValue="getQueryCity"
		></Cascader>
		<van-button type="info" block @click="toQueryCityView">查看核酸检测机构</van-button>
	</div>
</template>

<script>
import api from '@/api/index'
import Cascader from '@/components/Cascader'
export default {
	name: 'Query',
	components: { Cascader },
	data() {
		return {
			city: {},
			citys: {
				from: {},
				to: {},
			},
			options: [],
		}
	},
	methods: {
		// 查询出行防疫政策
		getFromCity(data) {
			this.citys.from = data
		},
		getToCity(data) {
			this.citys.to = data
		},
		// 查询核酸检测机构
		getQueryCity(data) {
			this.city = data
		},
		// 前往出行防疫政策页面
		toSpringTravelView() {
			if (this.citys.to && this.citys.from) {
				// 路由跳转并携带参数 注意这里是对象写法必须使用name不能用path
				this.$router.push({
					name: 'policy',
					params: { citys: this.citys },
				})
			} else {
				this.$notify({ type: 'danger', message: '请输入城市' })
			}
		},
		// 前往核酸检测机构页面
		toQueryCityView() {
			if (this.city) {
				// 路由跳转并携带参数 注意这里是对象写法必须使用name不能用path
				this.$router.push({
					name: 'hsjg',
					params: { city: this.city },
				})
			} else {
				this.$notify({ type: 'danger', message: '请输入城市' })
			}
		},
	},
	mounted() {
		if (!localStorage.getItem('options')) {
			api.getCityName({
				key: 'e9b4d95bcb942e342a309093c53c9943',
			}).then(response => {
				if (response.status == 200) {
					// 拼接options选项列表
					const options = []
					for (const province of response.data.result) {
						const children = []
						for (const city of province.citys) {
							const cityData = {
								text: city.city,
								value: city.city_id,
							}
							children.push(cityData)
						}
						const provinceData = {
							text: province.province,
							value: province.province_id,
							children,
						}
						options.push(provinceData)
					}
					this.options = options
					// 存在localStorage中 防止发生多次请求(这个接口每天只允许请求50次)
					localStorage.setItem('options', JSON.stringify(options))
				}
			})
		} else {
			this.options = JSON.parse(localStorage.getItem('options'))
		}
	},
}
</script>

<style scoped lang="less">
.header {
	padding: 10px;
	background: #fff;
	.title {
		font-size: 18px;
		font-weight: 900;
		color: black;
	}
}
</style>
