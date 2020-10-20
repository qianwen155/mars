import Fly from 'flyio/dist/npm/wx';

const fly = new Fly();

fly.config.baseURL = 'http://juhui.com';
// 请求拦截
fly.interceptors.request.use(request => {
    let token = uni.getStorageSync('token'); // getApp().globalData.app.$store.state.token;
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
});

// 响应拦截
fly.interceptors.response.use(
    response => {
		const {code, data} = response.data;
		if (code === 200) {
			return data;
		} else if (code === 1020) {
			uni.showModal({
				title: '登录失败',
				content: '验证过期，请重新登录！',
			}).then(res => {
				if (res[1].confirm) {
					// getApp().globalData.app.$store.commit('user/sync_loginData', {});
					// uni.reLaunch({
					//     url: '/pages/login/index'
					// });
				}
			});
			return false;
		} else if (code === 1040) {
			uni.showModal({
				title: '登录失败',
				content: '您的账号被冻结，请重新联系管理员！',
				showCancel: false
			})
			return false;
		}
        return response.data;
    },
    err => {
        let errRes = undefined;
        switch (err.status) {
            case 0:
                uni.showModal({
                    title: '请求超时',
                    content: '请稍后重试！',
                    showCancel: false
                });
                break;
            case 401:
                uni.showModal({
                    title: '登陆失效',
                    content: '请重新登陆！',
                    showCancel: false
                }).then(res => {
                    if (res[1].confirm) {
                        // getApp().globalData.app.$store.commit('user/sync_loginData', {});
                        // uni.reLaunch({
                        //     url: '/pages/login/index'
                        // });
                    }
                });
                break;
            default:
                errRes = err.response && err.response.data && err.response.data.msg;
                if (errRes) {
                    uni.showModal({
                        title: '提示',
                        content: errRes,
                        showCancel: false
                    });
                }
                console.log(err);
				return false;
        }
    }
);

Reflect.getPrototypeOf(fly).fetch = options => {
    let opts = Object.assign(
        {
            url: '',
            method: 'GET',
            params: {},
            toast: {
                loading: true
            }
        },
        options || {}
    );

    fly.config = {
        method: opts.method,
        timeout: 1000 * 30
    };

    if (opts.toast.loading) {
        uni.showLoading({
            mask: true,
            title: '正在加载'
        });
    }

    return fly.request(opts.url, opts.param).finally(() => {
        uni.hideLoading();
    });
};

export default fly;
