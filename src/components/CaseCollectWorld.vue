<template>
	<div class="casecollect">
		<div class="header">
			<p class="title">国外各国家疫情统计汇总</p>
			<span>7:00-10:00为更新高峰，数据若滞后敬请谅解</span>
		</div>
		<div class="main">
			<van-row gutter="1" class="top">
				<van-col span="4" class="rightborder">地区</van-col>
				<van-col span="5" class="rightborder">现存</van-col>
				<van-col span="5" class="rightborder">累计</van-col>
				<van-col span="5" class="rightborder">治愈</van-col>
				<van-col span="5">死亡</van-col>
			</van-row>
			<!-- 展示前20条数据 -->
			<van-row class="body" v-for="item in caseCollectPart1" :key="item.name">
				<van-col span="4" class="blue">
					{{ item.name }}
				</van-col>
				<van-col span="5">{{ item.currentConfirm }}</van-col>
				<van-col span="5">{{ item.totalConfirm }}</van-col>
				<van-col span="5">{{ item.totalHeal }}</van-col>
				<van-col span="5">{{ item.totalDead }}</van-col>
			</van-row>

			<!-- 展示剩余的数据 -->
			<van-row v-show="!isShowAll" @click="isShowAll = !isShowAll">
				展开全部<van-icon name="arrow-down" class="bottom" />
			</van-row>
			<van-row
				class="body"
				v-show="isShowAll"
				v-for="item in caseCollectPart2"
				:key="item.name"
			>
				<van-col span="4" class="blue">
					{{ item.name.slice(0, 8) }}
				</van-col>
				<van-col span="5">{{ item.currentConfirm }}</van-col>
				<van-col span="5">{{ item.totalConfirm }}</van-col>
				<van-col span="5">{{ item.totalHeal }}</van-col>
				<van-col span="5">{{ item.totalDead }}</van-col>
			</van-row>

			<van-row v-show="isShowAll" @click="isShowAll = !isShowAll" class="bottom">
				收起<van-icon name="arrow-up" />
			</van-row>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'CaseCollectWorld',
	data() {
		return {
			isShowAll: false,
		}
	},
	computed: {
		...mapState('tianAbout', ['caseCollectWorld']),
		caseCollectPart1() {
			return this.caseCollectWorld.slice(0, 20)
		},
		caseCollectPart2() {
			return this.caseCollectWorld.slice(20)
		},
	},
}
</script>

<style lang="less" scoped>
.casecollect {
	.header {
		padding: 10px;
		background-color: #fff;
		.title {
			font-size: 18px;
			font-weight: 900;
			color: black;
		}
	}
	.main {
		text-align: center;
		background-color: #fff;
		padding: 0 10px;
		.top {
			height: 30px;
			line-height: 30px;
			margin-bottom: 2px;
			border-radius: 5px;
			background-color: #f5f6f7;
			.rightborder {
				border-right: 1px solid #fff;
			}
		}
		.body {
			height: 30px;
			line-height: 30px;
			margin-bottom: 2px;
			border-radius: 5px;
			background-color: #f5f6f7;
			.blue {
				overflow: hidden;
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;
				color: #fff;
				background-color: #1989fa;
			}
		}
		.bottom {
			height: 30px;
			line-height: 30px;
		}
	}
}
</style>
