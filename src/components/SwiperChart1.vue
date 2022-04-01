<template>
	<div id="SwiperChart1"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'SwiperChart1',
	computed: {
		...mapState('wyAbout', ['chart1']),
	},
	watch: {
		chart1: {
			handler(newValue) {
				this.$charts.lineChart('SwiperChart1', newValue)
			},
		},
	},
}
</script>

<style>
#SwiperChart1 {
	width: 765px;
	height: 520px;
}
</style>
