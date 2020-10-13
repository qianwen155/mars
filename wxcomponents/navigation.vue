<template>
	<view>
		<view class="nav_bar" :style="barStyle">
			<view class="city_name" @click="showCity">{{ city.name }}</view>
			<view class="title">Mars</view>
			<view class="right"></view>
		</view>
		
		<city-page :top="(system.bottom || 0) +10" :visible="visibleCity" @select="showCity"></city-page>
	</view>
	
</template>

<script>
	import CityPage from './city.vue'
	import {mapState} from 'vuex'
	export default {
		name: 'NewNavigation',
		components: {
			CityPage
		},
		data() {
			return {
				visibleCity: false
			}
		},
		computed: {
			...mapState({
				system: state => state.user.system,
				city: state => state.user.city,
			}),
			barStyle() {
				if (this.system) {
					return `height: ${this.system.height}px;padding: ${this.system.top + 1}px ${(375 - (this.system.right || 0))}px 20rpx ${(375 - (this.system.right || 0))}px`
				}
				return ''
			}
		},
		methods: {
			showCity() {
				this.visibleCity = !this.visibleCity
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav_bar {
		background: $black1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #FFFFFF;
		z-index: 99;
		position: relative;
		.city_name {
			font-size: 32rpx;
			width: 100rpx;
		}
		.title {
			font-size: 40rpx;
		}
		.right {
			width: 100rpx;
		}
	}
</style>
