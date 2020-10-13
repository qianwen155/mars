<template>
	<view class="home_page">
		<new-navigation></new-navigation>
		
		<view class="list"></view>
	</view>
</template>

<script>
	import NewNavigation from '../../wxcomponents/navigation.vue'
	export default {
		components: {
			NewNavigation
		}
	}
</script>

<style scoped lang="scss">
	.home_page {
		.list {}
	}
</style>
