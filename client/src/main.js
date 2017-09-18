// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import guitarAcoustic from 'vue-material-design-icons/guitar-acoustic.vue'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
Vue.config.productionTip = false

Vue.use(Vuetify)

sync(store, router)

Vue.component('guitar-acoustic', guitarAcoustic)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
