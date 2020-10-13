<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const info = uni.getMenuButtonBoundingClientRect()
			this.$store.commit('SET_SYSTEM', info)
			console.log(info)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
