<template>
	<div id="MapWorldNow"></div>
</template>

<script>
export default {
	name: 'MapWorldNow',
	props: ['nationsNow'],
	watch: {
		nationsNow: {
			handler(newValue) {
				this.$charts.MapWorld('MapWorldNow', newValue, '现存确诊')
			},
		},
	},
}
</script>

<style scoped>
#MapWorldNow {
	width: 580px;
	height: 600px;
}
</style>
