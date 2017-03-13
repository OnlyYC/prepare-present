import Vue from 'vue'
import App from './App'
import router from './router'

import NotFound from './components/404'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
