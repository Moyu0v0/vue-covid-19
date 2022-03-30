<template>
	<div class="casecollect">
		<div class="header">
			<p class="title">国内各地区疫情统计汇总</p>
			<span>7:00-10:00为更新高峰，数据若滞后敬请谅解</span>
		</div>
		<div class="main">
			<van-row gutter="1" class="top">
				<van-col span="4" class="rightborder">地区</van-col>
				<van-col span="5" class="rightborder">新增</van-col>
				<van-col span="5" class="rightborder">累计</van-col>
				<van-col span="5" class="rightborder">治愈</van-col>
				<van-col span="5">死亡</van-col>
			</van-row>
			<!-- 展示前20条数据 -->
			<div v-for="item in caseCollectPart1" :key="item.name">
				<van-row class="body">
					<van-col span="4" class="blue" @click="item.isShowDetail = !item.isShowDetail">
						<van-icon
							size="10px"
							:name="item.isShowDetail ? 'arrow-up' : 'arrow-down'"
						/>
						{{ item.name }}
					</van-col>
					<van-col span="5">{{ item.todayConfirm }}</van-col>
					<van-col span="5">{{ item.totalConfirm }}</van-col>
					<van-col span="5">{{ item.totalHeal }}</van-col>
					<van-col span="5">{{ item.totalDead }}</van-col>
				</van-row>
				<!-- 展开下属城市/区数据 -->
				<van-row
					v-show="item.isShowDetail"
					v-for="child in item.children"
					:key="child.name"
					class="body child"
				>
					<van-col span="4">
						{{ child.name }}
					</van-col>
					<van-col span="5">{{ child.today.confirm }}</van-col>
					<van-col span="5">{{ child.total.confirm }}</van-col>
					<van-col span="5">{{ child.total.heal }}</van-col>
					<van-col span="5">{{ child.total.dead }}</van-col>
				</van-row>
			</div>

			<!-- 展示剩余的数据 -->
			<van-row v-show="!isShowAll" @click="isShowAll = !isShowAll">
				展开全部<van-icon name="arrow-down" class="bottom" />
			</van-row>
			<div v-show="isShowAll" v-for="item in caseCollectPart2" :key="item.name">
				<van-row class="body">
					<van-col span="4" class="blue" @click="item.isShowDetail = !item.isShowDetail">
						<van-icon
							size="10px"
							:name="item.isShowDetail ? 'arrow-up' : 'arrow-down'"
						/>
						{{ item.name }}
					</van-col>
					<van-col span="5">{{ item.todayConfirm }}</van-col>
					<van-col span="5">{{ item.totalConfirm }}</van-col>
					<van-col span="5">{{ item.totalHeal }}</van-col>
					<van-col span="5">{{ item.totalDead }}</van-col>
				</van-row>
				<!-- 展开下属城市/区数据 -->
				<van-row
					v-show="item.isShowDetail"
					v-for="child in item.children"
					:key="child.name"
					class="body child"
				>
					<van-col span="4">
						{{ child.name }}
					</van-col>
					<van-col span="5">{{ child.today.confirm }}</van-col>
					<van-col span="5">{{ child.total.confirm }}</van-col>
					<van-col span="5">{{ child.total.heal }}</van-col>
					<van-col span="5">{{ child.total.dead }}</van-col>
				</van-row>
			</div>

			<van-row v-show="isShowAll" @click="isShowAll = !isShowAll" class="bottom">
				收起<van-icon name="arrow-up" />
			</van-row>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'CaseCollectChina',
	data() {
		return {
			isShowAll: false,
		}
	},
	computed: {
		...mapState('tencentAbout', ['caseCollectChina']),
		caseCollectPart1() {
			return this.caseCollectChina.slice(0, 20)
		},
		caseCollectPart2() {
			return this.caseCollectChina.slice(20)
		},
	},
}
</script>

<style scoped lang="less">
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
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;
				color: #fff;
				background-color: #1989fa;
			}
		}
		.child {
			background-color: #fff;
			border-bottom: 0.1px solid #ebedf0;
		}
		.bottom {
			height: 30px;
			line-height: 30px;
		}
	}
}
</style>
