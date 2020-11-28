import Vue from 'vue'
import i18n from '@/vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
