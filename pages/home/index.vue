<template>
	<view class="home_page">
		<new-navigation></new-navigation>
		
		<view class="list">
			<block v-for="item in list" :key="item.id">
				<view class="item">
					<image mode="aspectFill" class="bg" :src="'../../static/' + item.id + '.jpg'"></image>
					<view class="bottom_content">
						<view class="title">附近的说法飞看电视飞符号看电视，刷卡机飞发多少发货时间段发，类风湿的； 飞肯定是非福建省第，发货的时间发很多事</view>
						<view class="actions">
							<view class="action_left">哈哈哈哈</view>
							<view class="action_right">
								<uni-icons type="zan" color="#fff"></uni-icons>
								<text>15225</text>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import NewNavigation from '../../wxcomponents/navigation.vue'
	export default {
		components: {
			NewNavigation
		},
		data() {
			return {
				list: [{id: 'gz'}, {id: 'sz'}, {id: 'xm'}, {id: 'sh'}]
			}
		}
	}
</script>

<style scoped lang="scss">
	.home_page {
		.list {
			.item {
				width: 100%;
				height: 400rpx;
				position: relative;
				overflow: hidden;
				.bg {
					position: absolute;
					z-index: 0;
					top: 0;
					left: 0;
					width: 100%;
				}
				.bottom_content {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					height: 200rpx;
					padding: 30rpx;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
					.title {
						margin-bottom: 16rpx;
						color: #FFFFFF;
						font-size: 36rpx;
						line-height: 48rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						line-clamp: 2;
						-webkit-line-clamp: 2;
						text-overflow: ellipsis;
						overflow: hidden;
					}
					.actions {
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: $white1;
						font-size: 30rpx;
					}
				}
			}
		}
	}
</style>
