<template>
	<div id="MapWorldAll"></div>
</template>

<script>
export default {
	name: 'MapWorldAll',
	props: ['mapWorldAll'],
	mounted() {
		this.$charts.MapWorld('MapWorldAll', this.mapWorldAll, '累计确诊')
	},
}
</script>

<style scoped>
#MapWorldAll {
	width: 734px;
	height: 562px;
}
</style>
