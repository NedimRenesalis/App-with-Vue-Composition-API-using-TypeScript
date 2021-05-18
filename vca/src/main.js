import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api' // <-- Make the import

Vue.config.productionTip = false

Vue.use(VueCompositionApi) // <-- Tell Vue to use it

new Vue({
  render: h => h(App)
}).$mount('#app')
