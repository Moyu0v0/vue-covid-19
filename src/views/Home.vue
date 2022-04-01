<template>
	<div class="home">
		<!-- 头部 -->
		<Header></Header>
		<!-- 实时播报 -->
		<News></News>
		<!-- 国内疫情 -->
		<CaseNumChina></CaseNumChina>
		<!-- 疫情速报 -->
		<CaseReport></CaseReport>
		<!-- 中国疫情地图 -->
		<MapChina></MapChina>
		<!-- 国内各地区疫情统计汇总 -->
		<CaseCollectChina></CaseCollectChina>
		<!--  -->
		<Swiper></Swiper>
		<!-- 国外疫情 -->
		<CaseNumWorld></CaseNumWorld>
		<!-- 世界疫情地图 -->
		<MapWorld></MapWorld>
		<!-- 国外各国家疫情统计汇总 -->
		<CaseCollectWorld></CaseCollectWorld>
		<!-- 春节各地行出行防疫政策 -->
		<Query></Query>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import News from '../components/News'
import CaseNumChina from '../components/CaseNumChina'
import CaseReport from '@/components/CaseReport'
import MapChina from '@/components/MapChina'
import CaseCollectChina from '@/components/CaseCollectChina'
import CaseNumWorld from '@/components/CaseNumWorld'
import MapWorld from '@/components/MapWorld'
import CaseCollectWorld from '@/components/CaseCollectWorld'
import Query from '../components/Query'
import Swiper from '@/components/Swiper'

export default {
	name: 'Home',
	components: {
		Header,
		News,
		CaseNumChina,
		CaseReport,
		MapChina,
		CaseCollectChina,
		CaseNumWorld,
		MapWorld,
		CaseCollectWorld,
		Query,
		Swiper,
	},
	// 发送网络请求
	created() {
		this.$store.dispatch('tianAbout/getNcov')
		this.$store.dispatch('tianAbout/getNcovAboard')
		this.$store.dispatch('tencentAbout/getNcovCity')
		this.$store.dispatch('wyAbout/getDayList')
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
