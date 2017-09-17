import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/register'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      // navigation path
      path: '/register',
      // Used for routing
      name: 'register',
      // Displaying Component
      component: Register
    },
    {
      // navigation path
      path: '/login',
      // Used for routing
      name: 'login',
      // Displaying Component
      component: Login
    }
  ]
})
