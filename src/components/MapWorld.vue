<template>
	<div class="map">
		<van-tabs v-model="active" color="#2780f1" type="card">
			<van-tab title="现存确诊"><MapWorldNow :nationsNow="nationsNow"></MapWorldNow></van-tab>
			<van-tab title="累计确诊"><MapWorldAll :nationsAll="nationsAll"></MapWorldAll></van-tab>
		</van-tabs>
	</div>
</template>

<script>
import MapWorldNow from '@/components/MapWorldNow'
import MapWorldAll from '@/components/MapWorldAll'
export default {
	name: 'MapWorld',
	data() {
		return {
			active: 2,
		}
	},
	props: ['nationsNow', 'nationsAll'],
	components: {
		MapWorldNow,
		MapWorldAll,
	},
}
</script>
