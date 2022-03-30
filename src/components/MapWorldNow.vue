<template>
	<div id="MapWorldNow"></div>
</template>

<script>
export default {
	name: 'MapWorldNow',
	props: ['mapWorldNow'],
	watch: {
		mapWorldNow: {
			handler(newValue) {
				this.$charts.MapWorld('MapWorldNow', newValue, '现存确诊')
			},
		},
	},
}
</script>

<style scoped>
#MapWorldNow {
	width: 734px;
	height: 562px;
}
</style>
