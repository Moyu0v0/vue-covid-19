<template>
	<div id="MapChinaNow"></div>
</template>

<script>
// import api from "@/api/index";

export default {
	name: 'MapChinaNow',
	props: ['mapChinaNow'],
	watch: {
		mapChinaNow: {
			handler(newValue) {
				this.$charts.MapChina('MapChinaNow', newValue, '现存确诊')
			},
		},
	},
}
</script>

<style scoped>
#MapChinaNow {
	width: 768px;
	height: 562px;
}
</style>
