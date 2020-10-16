<template>
	<view class="choose_city">
		<city-page :visible="visible" @select="handleSelect"></city-page>
	</view>
</template>

<script>
	import CityPage from '../../wxcomponents/city.vue'
	export default {
		components: {
			CityPage
		},
		data() {
			return {
				visible: true
			}
		},
		onLoad() {
			const cityString = uni.getStorageSync('city')
			if (cityString) {
				this.$store.commit('SET_CITY', JSON.parse(cityString))
				uni.switchTab({
					url: '/pages/home/index'
				})
			}
		},
		methods: {
			handleSelect(city) {
				console.log(city)
				uni.switchTab({
					url: '/pages/home/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.choose_city {}
</style>
