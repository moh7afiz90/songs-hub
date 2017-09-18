import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/register'
import Login from '@/components/login'
import Songs from '@/components/songs'
import CreateSong from '@/components/CreateSong'

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
      path: '/login',
      // Used for routing
      name: 'login',
      // Displaying Component
      component: Login
    },
    {
      path: '/songs',
      // Used for routing
      name: 'songs',
      // Displaying Component
      component: Songs
    },
    {
      path: '/songs/create',
      // Used for routing
      name: 'songs-create',
      // Displaying Component
      component: CreateSong
    }
  ]
})
