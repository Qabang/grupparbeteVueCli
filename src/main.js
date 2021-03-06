import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/style/variables.scss'
import './assets/style/global.scss'
import './registerServiceWorker'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
