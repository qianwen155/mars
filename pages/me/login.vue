<template>
	<view class="login_page">
		<uni-icons type="authorize" size="120" color="#859d7d"></uni-icons>
		<button class="login_btn" open-type="getUserInfo" @getuserinfo="onGetUserInfo">授权登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: ''
			}
		},
		onLoad() {
			// this.reload()
		},
		methods: {
			onGetUserInfo(e) {
				if (!this.code) {
					return;
				}
				const that = this
				const data = {
					code: this.code,
					rawData: e.detail.rawData,
					signature: e.detail.signature,
					encryptedData: e.detail.encryptedData,
					iv: e.detail.iv
				}
				this.$store.dispatch('getLogin', data).then(() => {
					uni.navigateBack();
				}).catch(() => {
					this.reload();
				})
	　　　　 },
			reload() {
				const that = this
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes.code);
						if (loginRes.code) {
							that.code = loginRes.code
						} else {
							console.log('获取用户登录态失败！' + loginRes.errMsg)
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.login_page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80vh;
		
		.login_btn {
			margin: 30rpx 0;
			width: 80%;
			background: $primary;
			color: #FFFFFF;
		}
	}
</style>
