import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/register'
import Login from '@/components/login'
import Songs from '@/components/songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'

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
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    }
  ]
})
