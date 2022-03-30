<template>
	<div>
		<div class="header">
			<p class="title">实时播报</p>
		</div>
		<div class="steps">
			<van-steps
				direction="vertical"
				active-icon="info"
				inactive-icon="info"
				active-color="#555555"
				inactive-color="#555555"
			>
				<van-step v-for="item in news" :key="item.id">
					<van-tag type="primary" size="medium">{{ item.pubDateStr }}</van-tag>
					<p>
						<a :href="item.sourceUrl" class="news">{{ item.title }}</a>
					</p>
				</van-step>
			</van-steps>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'News',
	computed: {
		...mapState('tianAbout', ['news']),
	},
}
</script>

<style scoped lang="less">
.header {
	padding: 10px;
	background: #fff;
	.title {
		font-size: 18px;
		font-weight: 900;
		color: black;
	}
}
.news {
	display: block;
	margin-top: 5px;
	color: black;
}
</style>
