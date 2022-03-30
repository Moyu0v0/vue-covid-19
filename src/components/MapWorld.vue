<template>
	<div class="worldmap">
		<div class="tabs">
			<van-tabs v-model="active" color="#1989fa" type="card">
				<van-tab title="现存确诊"
					><MapWorldNow :mapWorldNow="mapWorldNow"></MapWorldNow
				></van-tab>
				<van-tab title="累计确诊"
					><MapWorldAll :mapWorldAll="mapWorldAll"></MapWorldAll
				></van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
import MapWorldNow from '@/components/MapWorldNow'
import MapWorldAll from '@/components/MapWorldAll'
import { mapState } from 'vuex'
export default {
	name: 'MapWorld',
	data() {
		return {
			active: 2,
		}
	},
	computed: {
		...mapState('tianAbout', ['mapWorldNow', 'mapWorldAll']),
	},
	components: {
		MapWorldNow,
		MapWorldAll,
	},
}
</script>
