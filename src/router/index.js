import Vue from 'vue'
import Router from 'vue-router'
const viewRouter = name => () => import(`@/views/${name}`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: viewRouter('Home')
    },
    {
      path: '/preview',
      name: 'Preview',
      component: viewRouter('Preview')
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: viewRouter('HelloWorld')
    },
    {
      path: '*',
      name: '404',
      component: viewRouter('Page404')
    }
  ]
})
