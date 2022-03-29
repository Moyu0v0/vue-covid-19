<template>
	<div id="MapCityAll"></div>
</template>

<script>
import api from '@/api/index'
export default {
	name: 'MapCityAll',
	// 获取中国地图上的a链接跳转携带的params参数
	props: ['city'],
	mounted() {
		api.getNocvCity({
			// 传递query参数
			name: 'disease_h5',
		})
			.then(response => {
				const data = JSON.parse(response.data.data)
				const citiesAll = []
				for (let i = 0; i < data.areaTree[0].children.length; i++) {
					// 匹配到数据中的省(直辖市)数据
					if (data.areaTree[0].children[i].name === this.city) {
						// 获取省(直辖市)下属的城市数据并拼接成echarts需要的格式 { name: "西安市", value: 1000 }
						for (let j = 0; j < data.areaTree[0].children[i].children.length; j++) {
							let temp = {
								name: data.areaTree[0].children[i].children[j].name + '市',
								value: data.areaTree[0].children[i].children[j].total.confirm,
							}
							citiesAll.push(temp)
						}
					}
				}
				// 给echarts传递要呈现地图的标签id、省(直辖市)名和省(直辖市)下属的城市数据
				this.$charts.MapProvince('MapCityAll', this.city, citiesAll)
			})
			.catch(error => {
				console.log(error.message)
			})
	},
}
</script>

<style scoped>
#MapCityAll {
	width: 580px;
	height: 600px;
}
</style>
