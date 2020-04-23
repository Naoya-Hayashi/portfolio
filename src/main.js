import Vue from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
//import './assests/css/reset.css';
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
