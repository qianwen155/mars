import fly from './request.js';

export const login = (params) => {
	return fly.post('/api/user/wechat_login', params);
}

// export {
// 	getCategory,
// 	getList,
// 	getGoodDetail
// } from './home.js'

// export {
// 	getInfo
// } from './user.js'