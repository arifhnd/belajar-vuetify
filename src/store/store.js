import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		status: '',
		token: localStorage.getItem('token') || '',
		user: {},
		loading: false,
		fullpage: false,
	},
	mutations : {
		auth_request(state){
			state.status = 'loading'
		},
		auth_success(state, token, user){
			state.status = 'success'
			state.token = token
			state.user = user
		},
		auth_error(state){
			state.status = 'error'
		},
		logout(state){
			state.status = ''
			state.token = ''
		},
		setLoading(state, status){
			state.loading = status
			state.fullpage = status
		}
	},
	actions: {
		login({commit}, user){
			return new Promise((resolve, reject) => {
				commit('auth_request')
				commit('setLoading', true)
				axios.post('https://reqres.in/api/login', {email: user.email, password: user.password})
				.then(resp => {
					const token = resp.data.token
					const user = resp.data.user
					localStorage.setItem('token', token)
					axios.defaults.headers.common['Authorization'] = token
					commit('auth_success', token, user)
					resolve(resp)
				})
				.catch(err => {
					commit('auth_error')
					localStorage.removeItem('token')
					reject(err)
				})
			})
		},
		logout({commit}){
			return new Promise((resolve) => {
				commit('logout')
				commit('setLoading', false)
				localStorage.removeItem('token')
				delete axios.defaults.headers.common['Authorization']

				resolve()
			})
		}
	},
	getters:{
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
		loading: state => state.loading,
		fullpage: state => state.fullpage
	}

})