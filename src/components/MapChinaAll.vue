<template>
	<div id="MapChinaAll"></div>
</template>

<script>
export default {
	name: 'MapChinaAll',
	props: ['mapChinaAll'],
	mounted() {
		this.$charts.MapChina('MapChinaAll', this.mapChinaAll, '累计确诊')
	},
}
</script>

<style scoped>
#MapChinaAll {
	width: 734px;
	height: 562px;
}
</style>
