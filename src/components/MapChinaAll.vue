<template>
	<div id="MapChinaAll"></div>
</template>

<script>
// import api from "@/api/index";

export default {
	name: 'MapChinaAll',
	props: ['provinceAll'],
	mounted() {
		this.$charts.MapChina('MapChinaAll', this.provinceAll, '累计确诊')
	},
}
</script>

<style scoped>
#MapChinaAll {
	width: 580px;
	height: 600px;
}
</style>
