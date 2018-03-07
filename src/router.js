import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/index.vue';
import AddPage from '@/components/add.vue';
Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/add',
      name: 'add',
      component: AddPage
    },
    {
      path: '/', redirect: '/home'
    }
  ]
})
