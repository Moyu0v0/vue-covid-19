<template>
	<div class="header">
		<p class="title">国外疫情</p>
		<span>截至 {{ getDate(caseNumWorld.modifyTime) }} 国外数据统计</span>
		<van-grid :border="false" :column-num="3">
			<van-grid-item>
				<p>新增确诊</p>
				<h3 class="red">{{ separator(caseNumWorld.confirmedIncr) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>新增死亡</p>
				<h3 class="orange">{{ separator(caseNumWorld.deadIncr) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>现有确诊</p>
				<h3 class="blue">{{ separator(caseNumWorld.currentConfirmedCount) }}</h3>
			</van-grid-item>
		</van-grid>
		<van-grid :border="false" :column-num="3">
			<van-grid-item>
				<p>累计确诊</p>
				<h3 class="red">{{ separator(caseNumWorld.confirmedCount) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>累计死亡</p>
				<h3 class="orange">{{ separator(caseNumWorld.deadCount) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>累计治愈</p>
				<h3 class="blue">{{ separator(caseNumWorld.curedCount) }}</h3>
			</van-grid-item>
		</van-grid>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import formatter from '@/plugins/formatter'
export default {
	name: 'CaseNumWorld',
	computed: {
		...mapState('tianAbout', ['caseNumWorld']),
	},
	methods: {
		getDate(date) {
			return formatter.getDate(date)
		},
		plus(num) {
			return formatter.plus(num)
		},
		separator(num) {
			return formatter.separator(num)
		},
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
h3 {
	font-size: 20px;
	font-weight: 900;
}
.red {
	color: #ee0a24;
}
.orange {
	color: #ff976a;
}
.blue {
	color: #1989fa;
}
</style>
