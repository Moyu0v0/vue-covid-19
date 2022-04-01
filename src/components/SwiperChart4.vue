<template>
	<div id="SwiperChart4"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'SwiperChart4',
	computed: {
		...mapState('sinaAbout', ['chart4']),
	},
	watch: {
		chart4: {
			handler(newValue) {
				this.$charts.histogram('SwiperChart4', newValue)
			},
		},
	},
}
</script>

<style>
#SwiperChart4 {
	width: 766px;
	height: 520px;
}
</style>
