import { login, getInfo as _getInfo } from '../service/index.js'
const user = {
    state: {
        userInfo: {},
		token: '',
		city: null,
		system: null
    },
    mutations: {
		SET_USERINFO(state, provider) {  
			state.userInfo = provider;  
		},
		SET_TOKEN(state, provider) {
			state.token = provider;  
		},
		SET_CITY(state, provider) {
			state.city = provider;  
		},
		SET_SYSTEM(state, provider) {
			state.system = provider;  
		},
    },
    actions: {
        getLogin: ({ commit, dispatch }, localeVal) => {
			uni.showLoading({
				title: '登录中'
			})
			login(localeVal).then((res) => {
				console.log(res)
				if (res) {
					commit('SET_TOKEN', res.token);
					uni.setStorageSync('token', res.token);
					dispatch('getInfo');
				}
			}).finally(() => {
				uni.hideLoading();
			});
        },
		
		getInfo: ({ commit }, value) => {
			if (value) {
				uni.showLoading({
					title: value
				})
			}
			_getInfo().then((res) => {
				if (res) {
					commit('SET_USERINFO', res);
				}
				uni.hideLoading();
			}).catch(() => {
				uni.hideLoading();
			})
        },
		
	}
}
export default user