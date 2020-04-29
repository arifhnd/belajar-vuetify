import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/store'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')

if (token) {
	Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  vuetify,
  Axios,
  render: h => h(App)
}).$mount("#app");