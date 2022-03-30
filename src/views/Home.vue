<template>
	<div class="home">
		<!-- <van-tabs v-model="active" color="#2780f1" scrollspy sticky> -->
		<!-- 头部 -->
		<Header></Header>
		<!-- 实时播报 -->
		<News></News>
		<!-- <van-tab title="国内疫情"> -->
		<!-- 国内疫情 -->
		<CaseNum></CaseNum>
		<!-- 疫情速报 -->
		<CaseReport></CaseReport>
		<!-- 中国疫情地图 -->
		<MapChina></MapChina>
		<!-- 国内各地区疫情统计汇总 -->
		<CaseCollectChina></CaseCollectChina>
		<!-- </van-tab> -->
		<!-- <van-tab title="国际疫情"> -->
		<!-- 世界疫情地图 -->
		<MapWorld></MapWorld>
		<!-- 国外各国家疫情统计汇总 -->
		<CaseCollectWorld></CaseCollectWorld>
		<!-- </van-tab>
			<van-tab title="出行防疫"> -->
		<!-- 春节各地行出行防疫政策 -->
		<!-- <SpringTravel></SpringTravel> -->
		<!-- </van-tab> -->
		<!-- </van-tabs> -->
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import News from '../components/News'
import CaseNum from '../components/CaseNum'
import CaseReport from '@/components/CaseReport'
import MapChina from '@/components/MapChina'
import CaseCollectChina from '@/components/CaseCollectChina'
import MapWorld from '@/components/MapWorld'
import CaseCollectWorld from '@/components/CaseCollectWorld'
// import SpringTravel from '../components/SpringTravel'
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
		CaseCollectChina,
		MapWorld,
		CaseCollectWorld,
	},
	data() {
		return {
			active: 2,
		}
	},
	computed: {
		// 从腾讯API获取来的数据
		...mapState('tencentAbout', ['provinceNow', 'provinceAll']),
	},
	created() {
		this.$store.dispatch('tianAbout/getNcov')
		this.$store.dispatch('tianAbout/getNcovAboard')
		this.$store.dispatch('tencentAbout/getNcovCity')
	},
}
</script>
<style lang="less">
.home {
	width: 768px;
	margin: 0 auto;
	padding: 0 10px;
	background-color: #fff;
}
</style>
