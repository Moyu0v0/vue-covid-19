<template>
	<div class="header">
		<p class="title">国内疫情</p>
		<span>截至 {{ getDate(caseNumChina.modifyTime) }} 全国数据统计</span>
		<van-grid :border="false">
			<van-grid-item>
				<p>现存确诊</p>
				<h3 class="red">{{ separator(caseNumChina.currentConfirmedCount) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>现存无症状</p>
				<h3 class="orange">{{ separator(caseNumChina.seriousCount) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>新增境外</p>
				<h3 class="gray">{{ separator(caseNumChina.suspectedIncr) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>中高风险地区</p>
				<h3 class="blue">
					{{ separator(caseNumChina.highDangerCount + caseNumChina.midDangerCount) }}
				</h3>
			</van-grid-item>
		</van-grid>
		<van-grid :border="false">
			<van-grid-item>
				<p>累计确诊</p>
				<h3 class="red">{{ separator(caseNumChina.confirmedCount) }}</h3>
				<span>较昨日{{ plus(caseNumChina.confirmedIncr) }}</span>
			</van-grid-item>
			<van-grid-item>
				<p>累计境外</p>
				<h3 class="orange">{{ separator(caseNumChina.suspectedCount) }}</h3>
				<span>较昨日{{ plus(caseNumChina.yesterdaySuspectedCountIncr) }}</span>
			</van-grid-item>
			<van-grid-item>
				<p>累计死亡</p>
				<h3 class="gray">{{ separator(caseNumChina.deadCount) }}</h3>
				<span>较昨日{{ plus(caseNumChina.deadIncr) }}</span>
			</van-grid-item>
			<van-grid-item>
				<p>累计治愈</p>
				<h3 class="blue">{{ separator(caseNumChina.curedCount) }}</h3>
				<span>较昨日{{ plus(caseNumChina.curedIncr) }}</span>
			</van-grid-item>
		</van-grid>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import formatter from '@/plugins/formatter'
export default {
	name: 'CaseNumChina',
	computed: {
		...mapState('tianAbout', ['caseNumChina']),
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
.gray {
	color: #969799;
}
.blue {
	color: #1989fa;
}
</style>
