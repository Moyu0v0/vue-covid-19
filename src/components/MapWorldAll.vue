<template>
	<div id="MapWorldAll"></div>
</template>

<script>
export default {
	name: 'MapWorldAll',
	props: ['nationsAll'],
	mounted() {
		this.$charts.MapWorld('MapWorldAll', this.nationsAll, '累计确诊')
	},
}
</script>

<style scoped>
#MapWorldAll {
	width: 580px;
	height: 600px;
}
</style>
