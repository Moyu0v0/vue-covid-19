<template>
	<div class="main">
		<van-swipe class="my-swipe" ref="swipe" :show-indicators="false" @change="onChange">
			<van-swipe-item><SwiperChart1></SwiperChart1></van-swipe-item>
			<van-swipe-item><SwiperChart2></SwiperChart2></van-swipe-item>
			<van-swipe-item><SwiperChart3></SwiperChart3></van-swipe-item>
			<van-swipe-item><SwiperChart4></SwiperChart4></van-swipe-item>
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
import SwiperChart4 from '@/components/SwiperChart4'
export default {
	name: 'Swiper',
	components: {
		SwiperChart1,
		SwiperChart2,
		SwiperChart3,
		SwiperChart4,
	},
	data() {
		return {
			current: 0,
			buttons: [
				{ title: '全国疫情新增趋势' },
				{ title: '全国确诊趋势' },
				{ title: '全国累计治愈死亡' },
				{ title: '境外输入省级Top10' },
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
	border: 0.5px solid #000;
}
.row {
	display: flex;
	justify-content: space-between;
	height: 48px;
	line-height: 48px;
	text-align: center;
	.cell {
		position: relative;
		width: 185px;
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
		left: 90px;
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 8px solid #1989fa;
	}
}
</style>
