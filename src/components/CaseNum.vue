<template>
	<div class="header">
		<p class="title">国内疫情</p>
		<span>截至 {{ formatDate(infoChina.modifyTime) }} 全国数据统计</span>
		<van-grid :border="false">
			<van-grid-item>
				<p>现存确诊</p>
				<h3 class="red">{{ Separator(infoChina.currentConfirmedCount) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>现存无症状</p>
				<h3 class="orange">{{ Separator(infoChina.seriousCount) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>新增境外</p>
				<h3 class="gray">{{ Separator(infoChina.suspectedIncr) }}</h3>
			</van-grid-item>
			<van-grid-item>
				<p>中高风险地区</p>
				<h3 class="blue">
					{{ Separator(infoChina.highDangerCount + infoChina.midDangerCount) }}
				</h3>
			</van-grid-item>
		</van-grid>
		<van-grid :border="false">
			<van-grid-item>
				<p>累计确诊</p>
				<h3 class="red">{{ Separator(infoChina.confirmedCount) }}</h3>
				<span>较昨日{{ formatNum(infoChina.confirmedIncr) }}</span>
			</van-grid-item>
			<van-grid-item>
				<p>累计境外</p>
				<h3 class="orange">{{ Separator(infoChina.suspectedCount) }}</h3>
				<span>较昨日{{ formatNum(infoChina.yesterdaySuspectedCountIncr) }}</span>
			</van-grid-item>
			<van-grid-item>
				<p>累计死亡</p>
				<h3 class="gray">{{ Separator(infoChina.deadCount) }}</h3>
				<span>较昨日{{ formatNum(infoChina.deadIncr) }}</span>
			</van-grid-item>
			<van-grid-item>
				<p>累计治愈</p>
				<h3 class="blue">{{ Separator(infoChina.curedCount) }}</h3>
				<span>较昨日{{ formatNum(infoChina.curedIncr) }}</span>
			</van-grid-item>
		</van-grid>
	</div>
</template>

<script>
export default {
	name: 'CaseNum',
	props: ['infoChina', 'riskarea'],
	methods: {
		// 格式化日期
		formatDate(date) {
			let time = new Date(date)
			let year = time.getFullYear()
			let month = time.getMonth() + 1
			month = month < 10 ? '0' + month : month
			let day = time.getDate()
			day = day < 10 ? '0' + day : day
			let hours = time.getHours()
			hours = hours < 10 ? '0' + hours : hours
			let minutes = time.getMinutes()
			minutes = minutes < 10 ? '0' + minutes : minutes
			let seconds = time.getSeconds()
			seconds = seconds < 10 ? '0' + seconds : seconds
			return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
		},
		// 格式化较昨日数据
		formatNum(num) {
			return num >= 0 ? '+' + num : num
		},
		// 千位分隔符
		Separator(num) {
			return (num + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
		},
	},
}
</script>

<style scoped lang="less">
.header {
	padding: 10px;
	background: #fff;
	.title {
		font-size: 16px;
		font-weight: 900;
		color: black;
	}
}
h3 {
	font-size: 18px;
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
