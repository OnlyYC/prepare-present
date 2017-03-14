import Vue from 'vue'
import Router from 'vue-router'

import PresentForm from '../components/PresentForm.vue'
import NotFound from '../components/404.vue'
import Success from '../components/Success.vue'
import Hello from '../components/Hello.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'PresentForm',component: PresentForm},
    {path: '/success',name: 'success',component: Success},
    {path: '/hello',name: 'hello',component: Hello},
    {path: '*',component: NotFound}
  ]
})
