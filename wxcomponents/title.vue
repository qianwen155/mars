<template>
	<view class="CardTitle">
		<view class="title">{{ title }}</view>
		<view class="right" @click="rightClick">
			<view class="more">More</view>
			<uni-icons type="arrow-r" color="#1a1a1a"></uni-icons>
		</view>
		
	</view>
</template>
<script>
	export default {
		name: 'CardTitle',
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
	.CardTitle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80rpx;
		padding: 0 30rpx;
		.title {
			color: $black2;
			font-size: 36rpx;
			font-weight: w500;
		}
		.right {
			display: inline-flex;
			align-items: center;
			.more {
				color: $black2;
				font-weight: bold;
			}
		}
	}
</style>
