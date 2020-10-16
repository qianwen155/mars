<template>
	<view>
		<button open-type="getUserInfo" @getuserinfo="onGetUserInfo">授权登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			wx.getSetting({
			  success (res){
				if (res.authSetting['scope.userInfo']) {
				  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
				  wx.getUserInfo({
					success: function(res) {
					  console.log(res.userInfo)
					}
				  })
				}
			  }
			})
		},
		methods: {
			onGetUserInfo(e) {
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes.code);
						// 获取用户信息
						const data = {
							code: loginRes.code,
							rawData: e.detail.rawData,
							signature: e.detail.signature,
							encryptedData: e.detail.encryptedData,
							iv: e.detail.iv
						}
						console.log(data);
						// uni.getUserInfo({
						//   provider: 'weixin',
						//   success: function (infoRes) {
							
						//   }
						// });
					}
				});
	　　　　 },
		}
	}
</script>

<style scoped lang="scss">
</style>
