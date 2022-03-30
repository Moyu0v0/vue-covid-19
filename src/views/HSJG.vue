<template>
	<div class="container">
		<h1>{{ hsjg.province }}-{{ hsjg.city }} 核酸检测机构</h1>
		<van-cell-group inset>
			<van-cell
				v-for="(item, index) in hsjg.data"
				:key="index"
				:title="item.name"
				:value="`联系电话：${item.phone}`"
				:label="`地址：${item.address}`"
			/>
		</van-cell-group>
	</div>
</template>

<script>
import api from '@/api/index'
export default {
	name: 'HSJG',
	props: ['city'],
	data() {
		return {
			hsjg: [],
		}
	},
	activated() {
		// 获取出行防疫政策数据并处理
		api.getHSJG({
			city_id: this.city.value,
			key: 'e9b4d95bcb942e342a309093c53c9943',
		})
			.then(response => {
				if (response.status == 200) {
					console.log(response.data)
					this.hsjg = response.data.result
				}
			})
			.catch(error => {
				console.log(error.message)
			})
	},
}
</script>

<style scoped lang="less">
.container {
	width: 768px;
	height: 1200px;
	margin: 0 auto;
	padding: 10px;
	background-color: #fff;
}
h1 {
	text-align: center;
	font-size: 16px;
}

.header {
	background-color: rgb(236, 234, 234);
	height: 25px;
	line-height: 25px;
	border-radius: 5px;
	text-align: center;
}
.sub {
	height: 30px;
	line-height: 30px;
	font-weight: 700;
	border-bottom: 0.1px solid red;
}
</style>
