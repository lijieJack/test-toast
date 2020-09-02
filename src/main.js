import Vue from 'vue'
import App from './App.vue'

import Toast from 'toast-component'

Vue.config.productionTip = false
Vue.use(Toast)

new Vue({
  render: h => h(App),
}).$mount('#app')
