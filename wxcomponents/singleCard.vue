<template>
	<view class="SingleCard">
		<view class="left">
			<image class="cover" mode="aspectFill" src="../static/logo.png"></image>
			<view class="tag">LIVE</view>
		</view>
		<view class="right">
			<view class="title">fskdj 地方开始了反馈螺丝刀付款方收代理费克里斯发开</view>
			<view class="sub_title">今天结束</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'SingleCard',
		props: {
			title: {
				type: String,
				default: '',
			},
		},
		methods: {
			rightClick() {
				this.$emit('rightClick')
			}
		}
	};
</script>
<style scoped lang="scss">
	.SingleCard {
		display: flex;
		.left {
			position: relative;
			width: 280rpx;
			flex-shrink: 0;
			.cover {
				width: 280rpx;
				height: 180rpx;
				border-radius: 4rpx;
			}
			.tag {
				position: absolute;
				top: 0;
				left: 0;
				width: 140rpx;
				height: 60rpx;
				background: $primarySub;
				text-align: center;
				line-height: 60rpx;
				color: $white1;
				border-radius: 4rpx;
			}
		}
		.right {
			display: inline-flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 20rpx;
			flex-grow: 1;
			.title {
				cursor: $black1;
				font-size: 34rpx;
				line-height: 46rpx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.sub_title {
				color: $gary1;
				font-size: 28rpx;
				margin-bottom: 10rpx;
			}
		}
	}
</style>
