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
<<<<<<< HEAD
=======
      // navigation path
>>>>>>> 2744ad9e90af792027a57f63c444c557dd65cce3
      path: '/login',
      // Used for routing
      name: 'login',
      // Displaying Component
      component: Login
    }
  ]
})
