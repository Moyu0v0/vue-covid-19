<template>
	<div class="chinamap">
		<van-tabs v-model="active" color="#1989fa" type="card">
			<van-tab title="现存确诊">
				<MapChinaNow :mapChinaNow="mapChinaNow"></MapChinaNow>
			</van-tab>
			<van-tab title="累计确诊"
				><MapChinaAll :mapChinaAll="mapChinaAll"></MapChinaAll
			></van-tab>
		</van-tabs>
	</div>
</template>

<script>
import MapChinaNow from '@/components/MapChinaNow'
import MapChinaAll from '@/components/MapChinaAll'
import { mapState } from 'vuex'
export default {
	name: 'MapChina',
	data() {
		return {
			active: 2,
		}
	},
	computed: {
		...mapState('tencentAbout', ['mapChinaNow', 'mapChinaAll']),
	},
	components: {
		MapChinaNow,
		MapChinaAll,
	},
}
</script>
