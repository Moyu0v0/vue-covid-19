<template>
	<div class="main">
		<van-swipe
			class="my-swipe"
			ref="swipe"
			:show-indicators="false"
			:lazy-render="true"
			@change="onChange"
		>
			<van-swipe-item><SwiperChart1></SwiperChart1></van-swipe-item>
			<van-swipe-item><SwiperChart2></SwiperChart2></van-swipe-item>
			<van-swipe-item><SwiperChart3></SwiperChart3></van-swipe-item>
		</van-swipe>
		<div class="row">
			<div v-for="(item, index) in buttons" :key="index">
				<div :class="current === index ? 'cell active' : 'cell'" @click="onClick(index)">
					{{ item.title }}
					<div :class="current === index ? 'triangle' : ''"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SwiperChart1 from '@/components/SwiperChart1'
import SwiperChart2 from '@/components/SwiperChart2'
import SwiperChart3 from '@/components/SwiperChart3'
export default {
	name: 'Swiper',
	components: {
		SwiperChart1,
		SwiperChart2,
		SwiperChart3,
	},
	data() {
		return {
			current: 0,
			buttons: [
				{ title: '全国疫情新增趋势' },
				{ title: '全国确诊趋势' },
				{ title: '全国累计治愈死亡' },
			],
		}
	},
	methods: {
		onChange(index) {
			this.current = index
		},
		onClick(index) {
			this.current = index
			this.$refs.swipe.swipeTo(index)
		},
	},
}
</script>

<style lang="less">
.my-swipe {
	margin-bottom: 20px;
	.van-swipe-item {
		width: 734px;
		height: 521px;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
	}
}
.row {
	display: flex;
	justify-content: space-between;
	height: 48px;
	line-height: 48px;
	text-align: center;
	.cell {
		position: relative;
		width: 250px;
		border-radius: 5px;
		background-color: #f5f6f7;
	}
	.active {
		color: #fff;
		background-color: #1989fa;
	}
	.triangle {
		position: absolute;
		top: -8px;
		left: 121px;
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 8px solid #1989fa;
	}
}
</style>
