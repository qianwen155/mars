<template>
	<view>
		<button open-type="getUserInfo" @getuserinfo="onGetUserInfo">授权登录</button>
		<button @click="reload">不用授权登录（code）</button>
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
			
			// wx.getSetting({
			//   success (res){
			// 	if (res.authSetting['scope.userInfo']) {
			// 	  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
			// 	  wx.getUserInfo({
			// 		success: function(res) {
			// 		  console.log(res.userInfo)
			// 		}
			// 	  })
			// 	}
			//   }
			// })
		},
		methods: {
			onGetUserInfo(e) {
				const that = this
				const data = {
					code: this.code,
					rawData: e.detail.rawData,
					signature: e.detail.signature,
					encryptedData: e.detail.encryptedData,
					iv: e.detail.iv
				}
				console.log(data);
				this.$store.dispatch('getLogin', data)
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
</style>
