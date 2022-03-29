<template>
	<div class="header">
		<p class="title">实时播报</p>
		<van-steps
			direction="vertical"
			active-icon="info"
			inactive-icon="info"
			active-color="#555555"
			inactive-color="#555555"
		>
			<van-step v-for="item in news" :key="item.id">
				<van-tag type="primary">{{ item.pubDateStr }}</van-tag>
				<p>
					<a :href="item.sourceUrl">{{ item.title }}</a>
				</p>
			</van-step>
		</van-steps>
	</div>
</template>

<script>
export default {
	name: 'News',
	props: ['news'],
	data() {
		return {
			activeNames: ['1'],
		}
	},
}
</script>

<style scoped lang="less">
.header {
	padding: 10px;
	background: #fff;
	.title {
		font-size: 16px;
		font-weight: 900;
		color: black;
	}
}
</style>
