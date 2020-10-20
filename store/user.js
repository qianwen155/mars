import { login, getInfo as _getInfo } from '../service/index.js'
const user = {
    state: {
        userInfo: null,
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
			return new Promise((resolve, reject) => {
				login(localeVal).then((res) => {
					if (res) {
						commit('SET_TOKEN', res.token);
						uni.setStorageSync('token', res.token);
						dispatch('getInfo').finally(() => {
							resolve(true);
						});
					} else {
						uni.hideLoading();
					}
				}).catch(() => {
					reject();
					uni.hideLoading();
				})
			});
        },
		
		getInfo: ({ commit }, value) => {
			if (value) {
				uni.showLoading({
					title: value
				})
			}
			return new Promise((resolve, reject) => {
				_getInfo().then((res) => {
					if (res) {
						commit('SET_USERINFO', res);
						resolve()
					}
					uni.hideLoading();
				}).catch(() => {
					reject()
					uni.hideLoading();
				})
			})
			
        },
		
	}
}
export default user