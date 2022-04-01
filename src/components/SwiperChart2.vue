<template>
	<div id="SwiperChart2"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'SwiperChart2',
	computed: {
		...mapState('wyAbout', ['chart2']),
	},
	watch: {
		chart2: {
			handler(newValue) {
				this.$charts.lineChart('SwiperChart2', newValue)
			},
		},
	},
}
</script>

<style>
#SwiperChart2 {
	width: 765px;
	height: 520px;
}
</style>
