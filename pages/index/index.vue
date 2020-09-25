<template>
	<view class="indexContent">
		<view class="search">
			<view class="location">
				<uni-icons type="location" color="#1a1a1a" size="28"></uni-icons>
				<view class="city">广州</view>
			</view>
			<view class="search-input">
				<uni-icons type="search" color="#fff" size="20"></uni-icons>
				<view class="text">地点 见闻 好物</view>
			</view>
		</view>
		<view class="space"></view>
		<view class="space g"></view>
		
		<view class="">
			<card-title title="近期活动"></card-title>
		</view>
	</view>
</template>

<script>
	import CardTitle from '../../wxcomponents/title.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			CardTitle
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	// page {
	// 	background: $primary;
	// }
	.indexContent {
		.search {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 90rpx;
			padding: 0 40rpx;
			background: $white1;
			box-shadow: 0 0 20rpx $white2;
			.location {
				display: inline-flex;
				align-items: center;
				color: $black1;
				margin-right: 25rpx;
				.city {
					margin-left: 10rpx;
					font-size: 32rpx;
				}
			}
			.search-input {
				flex-grow: 1;
				background: $black1;
				border-radius: 10rpx;
				height: 60rpx;
				line-height: 60rpx;
				padding: 0 40rpx 0 20rpx;
				display: flex;
				.text {
					text-align: center;
					color: $white1;
					flex-grow: 1;
					font-size: 24rpx;
				}
			}
		}
		.space {
			height: 20rpx;
			background: #fff;
			&.g {
				height: 40rpx;
				background: $primary;
			}
		}
	}
</style>
