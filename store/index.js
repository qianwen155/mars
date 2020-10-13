import Vuex from 'vuex';
import Vue from 'vue';

import home from './home.js'
import user from './user.js'
import getters from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({  
    modules: {
		home,
		user
	},
	getters
});

export default store;