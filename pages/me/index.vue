<template>
	<view>
		<view v-if="!userInfo">
			<button @click="toLogin">登录</button>
		</view>
		
		<view v-else>
			<view>{{ userInfo.nickname }}</view>
			<avatar :src="userInfo.avatar || ''" size="100"></avatar>
		</view>
	</view>
</template>

<script>
	import Avatar from '../../wxcomponents/avatar.vue'
	import {mapGetters} from 'vuex';
	export default {
		components: {
			Avatar
		},
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
