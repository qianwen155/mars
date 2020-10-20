<template>
	<view>
		<view v-if="!userInfo">
			<button @click="toLogin">登录</button>
		</view>
		
		<view v-else>
			<view>{{ userInfo.nickname }}</view>
			<image :src="userInfo.avatar || ''"></image>
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		data() {
			return {
				code: ''
			}
		},
		computed: {
			...mapGetters([
				'userInfo'
			])
		},
		onLoad() {
			
		},
		methods: {
			toLogin(e) {
				if (uni.getStorageSync('token')) {
					this.$store.dispatch('getInfo', '登录中')
				} else {
					uni.navigateTo({
						url: '/pages/me/login'
					})
				}
	　　　　 }
		}
	}
</script>

<style scoped lang="scss">
</style>
