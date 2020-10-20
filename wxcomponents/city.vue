<template>
	<view :class="{'city_page': true}" :style="visible ? 'top: ' + top + 'px' : ''">
		<view class="city_body" :style="'height: calc(100vh - '+ top + 'px)'">
			<block v-for="(item,index) in citys" :key="index">
				<view class="city" @click="select(item)">
					<image mode="aspectFill" class="bg" :src="'../static/' + item.bg + '.jpg'"></image>
					<view class="name">{{ item.name }}</view>
				</view>
			</block>
		</view>
		
	</view>
</template>
<script>
	/**
	 * CityPage 城市选择
	 * @property {Boolean} visible 是否显示
	 * @property {String} current 当前城市
	 * @property {Number} top 显示的时候顶部距离
	 */
	import {mapGetters} from 'vuex';
	export default {
		name: 'CityPage',
		props: {
			visible: {
				type: Boolean,
				default: false,
			},
			top: {
				type: Number,
				default: 0,
			},
			current: {
				type: String
			}
		},
		data() {
			return {
				citys: [
					{name: '广州', bg: 'gz'}, 
					{name: '深圳', bg: 'sz'}, 
					{name: '上海', bg: 'sh'}, 
					{name: '杭州', bg: 'hz'}, 
					{name: '厦门', bg: 'xm'}, 
					{name: '重庆', bg: 'cq'}, 
				],
			}
		},
		computed: {
			...mapGetters(['system']),
		},
		methods: {
			select(city) {
				uni.setStorageSync('city', JSON.stringify(city))
				this.$store.commit('SET_CITY', city)
				this.$emit('select', city)
			}
		}
	};
</script>
<style scoped lang="scss">
	$img_height: 350rpx;
	.city_page {
		position: fixed;
		z-index: 1;
		top: -100vh;
		width: 100%;
		height: 100vh;
		transition: top ease 0.3s;

		.city_body {
			overflow: auto;
		}
		
		.city {
			width: 100%;
			height: $img_height;
			position: relative;
			margin-bottom: 3rpx;
			&:last-child {
				margin-bottom: 0;
			}
			.bg {
				width: 100%;
				height: $img_height;
				display: block;
			}
			.name {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba($color: $black1, $alpha: 0.2);
				text-align: center;
				line-height: $img_height;
				color: #FFFFFF;
				font-size: 42rpx;
				letter-spacing: 10rpx;
			}
		}
	}
</style>
