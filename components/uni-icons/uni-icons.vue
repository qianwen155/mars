<template>
	<text :style="{ color: color, 'font-size': size + 'px' }" class="uni-icons" @click="_onClick">{{icons[type]}}</text>
</template>

<script>
	import icons from './icons.js';
	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {
		'fontFamily': "uniicons",
		'src': "url('//at.alicdn.com/t/font_2101159_utzwgilan3a.ttf')"
	});
	// #endif

	/**
	 * Icons 图标
	 * @description 用于展示 icons 图标
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=28
	 * @property {Number} size 图标大小
	 * @property {String} type 图标图案，参考示例
	 * @property {String} color 图标颜色
	 * @event {Function} click 点击 Icon 触发事件
	 */
	export default {
		name: 'UniIcons',
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
			}
		},
		data() {
			return {
				icons: icons
			}
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	@font-face {
		font-family: uniicons;
		src: url('//at.alicdn.com/t/font_2101159_utzwgilan3a.ttf') format('truetype');
	}

	/* #endif */

	.uni-icons {
		font-family: uniicons;
		text-decoration: none;
		text-align: center;
	}
</style>
