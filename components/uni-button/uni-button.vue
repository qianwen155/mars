<template>
	<view :class="{'UButton': true, 'circle': circle, 'plain': plain}" :style="'padding:' + padding">
		<slot />
	</view>
</template>
<script>
	/**
	 * Button 按钮
	 * @plain {Boolean} 简洁模式
	 * @circle {Number} 圆角模式
	 * @padding {String} 按钮边界
	 */
	export default {
		name: 'UniButton',
		props: {
			plain: Boolean,
			circle: Boolean,
			padding: {
				type: String,
				default: '10rpx 34rpx'
			},
		},
	};
</script>
<style lang="scss">
	.UButton {
		background: $primary;
		color: #FFFFFF;
		font-size: 30rpx;
		border-radius: 4rpx;
		&.circle {
			border-radius: 3em;
		}
		&.plain {
			background: transparent;
			border: 2rpx solid $primary;
			color: $primary;
		}
	}
</style>
