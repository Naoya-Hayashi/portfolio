import Vue from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)


// npm install --save axios vue-axios を実行してデータにアクセスできるようにする
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')


import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
store.commit('increment')

console.log(store.state.count) // -> 1
