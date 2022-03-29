<template>
	<div class="home">
		<van-tabs v-model="active" color="#2780f1" scrollspy sticky>
			<!-- 头部 -->
			<Header></Header>
			<!-- 病毒信息 现在接口不返回病毒信息了-->
			<!-- <Covid19Info :infoChina="infoChina"></Covid19Info> -->
			<!-- 实时播报 -->
			<News :news="news"></News>
			<van-tab title="国内疫情">
				<!-- 国内疫情 -->
				<CaseNum :infoChina="infoChina"></CaseNum>
				<!-- 疫情速报 -->
				<CaseReport :cityData="cityData"></CaseReport>
				<!-- 中国疫情地图 -->
				<MapChina :provinceNow="provinceNow" :provinceAll="provinceAll"></MapChina>
			</van-tab>
			<van-tab title="国际疫情">
				<!-- 世界疫情地图 -->
				<MapWorld :nationsNow="nationsNow" :nationsAll="nationsAll"></MapWorld>
			</van-tab>
			<van-tab title="出行防疫">
				<!-- 春节各地行出行防疫政策 -->
				<!-- <SpringTravel></SpringTravel> -->
			</van-tab>
		</van-tabs>
		<Note></Note>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
// import Covid19Info from '../components/Covid19Info'
import News from '../components/News'
import CaseNum from '../components/CaseNum'
import CaseReport from '@/components/CaseReport'
import MapChina from '@/components/MapChina'
import MapWorld from '@/components/MapWorld'
// import SpringTravel from '../components/SpringTravel'
import Note from '@/components/Note'
import { mapState } from 'vuex'
export default {
	name: 'Home',
	components: {
		Header,
		// Covid19Info,
		News,
		CaseNum,
		CaseReport,
		// SpringTravel,
		MapChina,
		MapWorld,
		Note,
	},
	data() {
		return {
			active: 2,
		}
	},
	computed: {
		// 从天行API获取来的数据
		...mapState('tianAbout', ['infoChina', 'riskarea', 'news', 'nationsNow', 'nationsAll']),
		// 从腾讯API获取来的数据
		...mapState('tencentAbout', ['cityData', 'provinceNow', 'provinceAll']),
	},
	mounted() {
		this.$store.dispatch('tianAbout/getNcov')
		this.$store.dispatch('tianAbout/getNcovAboard')
		this.$store.dispatch('tencentAbout/getNcovCity1')
	},
}
</script>
<style lang="less">
.home {
	width: 588px;
	margin: 0 auto;
}
</style>
