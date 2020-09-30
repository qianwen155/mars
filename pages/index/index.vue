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
		
		<view class="scroll-h">
			<card-title title="近期活动"></card-title>
			<scroll-view scroll-x enable-flex class="list">
				<view class="sub_list">
					<single-card class="item"></single-card>
					<single-card class="item"></single-card>
					<single-card class="item"></single-card>
				</view>
				<view class="sub_list">
					<single-card class="item"></single-card>
					<single-card class="item"></single-card>
					<single-card class="item"></single-card>
				</view>
				<view class="sub_list">
					<single-card class="item"></single-card>
					<single-card class="item"></single-card>
					<single-card class="item"></single-card>
				</view>
				<view class="sub_list" style="width: 1rpx;"></view>
			</scroll-view>
		</view>
	
		<view class="content">
			<view class="title">
				<uni-icons type="earth" color="#fff" size="24"></uni-icons>
				<view class="text">mars 城事</view>
			</view>
			<view class="cards">
				<master-card></master-card>
				<master-card></master-card>
			</view>
		</view>
	</view>
</template>

<script>
	import CardTitle from '../../wxcomponents/title.vue'
	import SingleCard from '../../wxcomponents/singleCard.vue'
	import MasterCard from '../../wxcomponents/masterCard.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			CardTitle,
			SingleCard,
			MasterCard
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
		
		.scroll-h {
			.list {
				display: flex;
				height: 600rpx;
				margin-bottom: 30rpx;
				.sub_list {
					width: 600rpx;
					height: 600rpx;
					flex-shrink: 0;
					margin-right: 60rpx;
					display: flex;
					flex-direction: column;
					&:first-child {
						margin-left: 30rpx;
					}
					&:nth-last-child(2) {
						margin-right: 30rpx;
					}
					.item {
						margin-bottom: 20rpx;
					}
				}
			}
		}
	
		.content {
			background: $primary;
			padding: 20rpx;
			.title {
				display: flex;
				margin: 10rpx 0;
				.text {
					color: #FFFFFF;
					font-size: 34rpx;
					margin-left: 10rpx;
				}
				
			}
			.cards {
				display: flex;
				flex-direction: column;
				master-card {
					margin-bottom: 20rpx;
				}
			}
		}
	}
</style>
