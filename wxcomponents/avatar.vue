<template>
	<view class="avatar" :style="'width: ' + size + 'rpx;height: ' + size + 'rpx;border-radius: ' + radius + ';' + avatarStyle">
		<image class="avatarImgae" :src="src" mode="aspectFill"></image>
		<slot />
	</view>
</template>
<script>
	/**
	 * Avatar 头像
	 * @size {String, Number} 尺寸大小
	 * @property {String} radius 圆角，默认圆角
	 * @property {String} src 图片地址
	 * @property {String} avatarStyle 图像额外杨思
	 */
	export default {
		name: 'Avatar',
		props: {
			avatarStyle: String,
			size: {
				type: [String, Number],
				default: 50
			},
			radius: {
				type: String,
				default: '3em'
			},
			src: String
		},
	};
</script>
<style lang="scss">
	.avatar {
		background: #FFFFFF;
		overflow: hidden;
		.avatarImgae {
			width: 100%;
			height: 100%;
		}
	}
</style>
