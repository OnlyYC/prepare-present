import Vue from 'vue'
import Router from 'vue-router'
import PresentForm from 'components/PresentForm'
import NotFound from 'components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PresentForm',
      component: PresentForm
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
