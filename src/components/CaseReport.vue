<template>
	<div class="casereport">
		<div class="header">
			<p class="title">疫情速报</p>
			<span>该数据为31省（自治区、直辖市）本土新增，及港澳台新增确诊数据</span>
		</div>
		<div class="main" ref="container">
			<van-sticky :container="container" :offset-top="44">
				<van-row gutter="1" class="top">
					<van-col span="10" class="rightborder">地区</van-col>
					<van-col span="7" class="rightborder">新增本土</van-col>
					<van-col span="7">现有病例</van-col>
				</van-row>
			</van-sticky>
			<!-- 展示前十条数据 -->
			<van-row v-for="item in caseReportPart1" :key="item.id" class="body">
				<van-col span="10">
					{{ item.name }}
					<van-tag plain round type="primary">{{ item.province }}</van-tag>
				</van-col>
				<van-col span="7" class="blue">{{ separator(item.todayConfirm) }}</van-col>
				<van-col span="7">{{ separator(item.nowConfirm) }}</van-col>
			</van-row>
			<!-- 展示后面剩余的数据 -->
			<van-row v-show="!isShow" @click="isShow = !isShow">
				展开全部<van-icon name="arrow-down" class="body"></van-icon>
			</van-row>
			<van-row v-show="isShow" v-for="item in caseReportPart2" :key="item.id" class="body">
				<van-col span="10" class="area">
					{{ item.name }}
					<van-tag plain round type="primary">{{ item.province }}</van-tag>
				</van-col>
				<van-col span="7" class="blue">{{ separator(item.todayConfirm) }}</van-col>
				<van-col span="7">{{ separator(item.nowConfirm) }}</van-col>
			</van-row>
			<van-row v-show="isShow" @click="isShow = !isShow" class="body">
				收起<van-icon name="arrow-up"></van-icon>
			</van-row>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import formatter from '@/utils/formatter'
export default {
	name: 'CaseReport',
	data() {
		return {
			isShow: false,
			container: null,
		}
	},
	computed: {
		...mapState('tencentAbout', ['caseReport']),
		caseReportPart1() {
			return this.caseReport.slice(0, 10)
		},
		caseReportPart2() {
			return this.caseReport.slice(10)
		},
	},
	methods: {
		separator(num) {
			return formatter.separator(num)
		},
	},
	mounted() {
		this.container = this.$refs.container
	},
}
</script>

<style scoped lang="less">
.casereport {
	.header {
		padding: 10px;
		background: #fff;
		.title {
			font-size: 18px;
			font-weight: 900;
			color: black;
		}
	}
	.main {
		padding: 0 10px;
		text-align: center;
		background-color: #fff;
		.top {
			width: 748px;
			height: 30px;
			line-height: 30px;
			margin: 0 auto;
			border-radius: 5px;
			background-color: #f5f6f7;
			.rightborder {
				border-right: 1px solid #fff;
			}
		}
		.body {
			height: 40px;
			line-height: 40px;
			border-bottom: 0.1px solid #ebedf0;
			.blue {
				color: #1989fa;
			}
		}
	}
}
</style>
