<template>
	<view class="MasterCard">
		<view class="user">
			<avatar src="../static/logo.png" :size="80"></avatar>
			<view class="name">
				<view class="name">FDJKSFJ KDJFKFDK分肯定是飞房价快速的飞</view>
				<view class="time">3-18</view>
			</view>
			<view class="user_right" @click="handleFocus">
				<uni-button :plain="true">关注</uni-button>
			</view>
		</view>
		<view class="cover">
			<image src="../static/logo.png" mode="widthFix"></image>
		</view>
		
		<view class="inner_content">
			<view class="title">福克斯的减肥司法局第三方会计法快速减肥快递费电视剧飞</view>
			<view class="action">
				<uni-icons type="share" size="32"></uni-icons>
				<view class="zan">
					<uni-icons type="zan" size="32"></uni-icons>
					<view> 335</view>
				</view>
			</view>
			<view class="comments">
				<view class="comment"><text>fjdhfjsdfh</text> 回复 <text>fkdfd:</text>发卡设计费咖啡机SDK减肥开始打飞机ds</view>
				<view class="comment"><text>分肯定是</text> 回复 <text>发DSKDJSK:</text>发卡设计费咖啡机SDK减肥开始打飞机ds</view>
			</view>
		</view>
		
	</view>
</template>
<script>
	/**
	 * MasterCard
	 * @size {String, Number} 尺寸大小
	 * @radius {String} 圆角，默认圆角
	 * @src {String} 图片地址
	 * @avatarStyle {String} 图像额外杨思
	 */
	import Avatar from './avatar.vue'
	export default {
		name: 'MasterCard',
		props: {
			title: {
				type: String,
				default: '',
			},
		},
		components: {
			Avatar
		},
		methods: {
			handleFocus() {
				this.$emit('handleFocus')
			}
		}
	};
</script>
<style scoped lang="scss">
	.MasterCard {
		background: #FFFFFF;
		border-radius: 2rpx;
		.user {
			padding: 20rpx;
			display: flex;
			align-items: center;
			.name {
				margin-left: 10rpx;
				font-weight: blod;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				flex-grow: 1;
				.time {
					font-weight: normal;
					color: $gary1;
					font-size: 20rpx;
				}
			}
			.user_right {
				flex-shrink: 0;
			}
		}
	
		.cover {
			image {
				width: 100%;
			}
		}
		
		.inner_content {
			padding: 0 20rpx;
			.title {
				margin: 30rpx 0;
			}
			.action {
				padding: 10rpx 0 30rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.zan {
					display: inline-flex;
					align-items: flex-end;
				}
			}
			.comments {
				padding: 20rpx 0;
				border-top: 2rpx solid $gary2;
				.comment {
					font-size: 26rpx;
					color: $black1;
					margin-bottom: 10rpx;
					letter-spacing: 2rpx;
					line-height: 38rpx;
					text {
						color: $primarySub;
					}
				}
			}
		}
	}
</style>
