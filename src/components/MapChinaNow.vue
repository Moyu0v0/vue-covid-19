<template>
	<div id="MapChinaNow"></div>
</template>

<script>
// import api from "@/api/index";

export default {
	name: 'MapChinaNow',
	props: ['provinceNow'],
	watch: {
		provinceNow: {
			handler(newValue) {
				this.$charts.MapChina('MapChinaNow', newValue, '现存确诊')
			},
		},
	},
}
</script>

<style scoped>
#MapChinaNow {
	width: 580px;
	height: 600px;
}
</style>
