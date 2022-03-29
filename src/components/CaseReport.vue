<template>
	<div class="header">
		<p class="title">疫情速报</p>
		<span>该数据为31个省（自治区、直辖市）和不含港澳台的本土新增病例</span>
		<div class="main">
			<van-row gutter="1" class="top">
				<van-col span="10" style="border-right: 0.5px solid #fff">地区</van-col>
				<van-col span="7" style="border-right: 0.5px solid #fff">新增本土</van-col>
				<van-col span="7">现有病例</van-col>
			</van-row>
			<!-- 展示前十条数据 -->
			<van-row v-for="item in cityData1" :key="item.id" class="body">
				<van-col span="10"
					>{{ item.name }}
					<van-tag plain round type="primary">{{ item.province }}</van-tag></van-col
				>
				<van-col span="7" class="blue">{{ item.todayConfirm }}</van-col>
				<van-col span="7">{{ item.nowConfirm }}</van-col>
			</van-row>
			<!-- 展示后面剩余的数据 -->
			<van-row v-show="!isShow" @click="switchShow">
				<van-col span="24">展开全部<van-icon name="arrow-down"></van-icon></van-col>
			</van-row>
			<template v-if="isShow">
				<van-row v-for="item in cityData2" :key="item.id" class="body">
					<van-col span="10"
						>{{ item.name }}
						<van-tag plain round type="primary">{{ item.province }}</van-tag></van-col
					>
					<van-col span="7" class="blue">{{ item.todayConfirm }}</van-col>
					<van-col span="7">{{ item.nowConfirm }}</van-col>
				</van-row>
			</template>
			<van-row v-show="isShow" @click="switchShow">
				<van-col span="24">收起<van-icon name="arrow-up"></van-icon></van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
// import api from "../api/index";
export default {
	name: 'CaseReport',
	props: ['cityData'],
	data() {
		return {
			isShow: false,
		}
	},
	computed: {
		cityData1() {
			return this.cityData.slice(0, 10)
		},
		cityData2() {
			return this.cityData.slice(10)
		},
	},
	methods: {
		switchShow() {
			this.isShow = !this.isShow
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
	.main {
		text-align: center;
		.top {
			background-color: rgb(236, 234, 234);
			height: 25px;
			line-height: 25px;
			border-radius: 5px;
		}
		.body {
			height: 30px;
			line-height: 30px;
			font-weight: 700;
			border-bottom: 0.1px solid rgb(245, 243, 243);
			.blue {
				color: #1989fa;
			}
		}
	}
}
</style>
