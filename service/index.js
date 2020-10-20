import fly from './request.js';

export const login = (params) => {
	return fly.post('/api/user/wechat_login', params);
}

export const getInfo = () => {
	return fly.get('/api/user/info');
}

// export {
// 	getCategory,
// 	getList,
// 	getGoodDetail
// } from './home.js'

// export {
// 	getInfo
// } from './user.js'