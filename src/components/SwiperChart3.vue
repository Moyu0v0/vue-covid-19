<template>
	<div id="SwiperChart3"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'SwiperChart3',
	computed: {
		...mapState('wyAbout', ['chart3']),
	},
	watch: {
		chart3: {
			handler(newValue) {
				this.$charts.lineChart('SwiperChart3', newValue)
			},
		},
	},
}
</script>

<style>
#SwiperChart3 {
	width: 766px;
	height: 520px;
}
</style>
