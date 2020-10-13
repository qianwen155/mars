// import { getCategory, getList } from '../service/index.js'
const home = {
    state: {
		categoryList: [],
		activeTabHot: 1, // 热门选项高亮
		hotList: [],
		hotTotal: 0,
		detail: {}, // 商品详情
    },
    mutations: {
		SET_CATEGORY_LIST(state, provider) {
			state.categoryList = provider;
		},
		SET_CATEGORY_HOT(state, provider) {
			state.activeTabHot = provider;
		},
		SET_HOT_LIST(state, provider) {
			state.hotList = provider.list;
			state.hotTotal = provider.total;
		},
		SET_DETAIL(state, provider) {
			state.detail = provider;
		},
    },
    actions: {
	}
}
export default home