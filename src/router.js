import Vue from 'vue'
    import Router from 'vue-router'
    import Home from './views/Home.vue'
    import Dashboard from './views/Dashboard.vue'
    import Register from './views/Register.vue'
    import Login from './views/Login.vue'
    import Tabela from './views/Tabela.vue'
    Vue.use(Router)
    const router = new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/clients',
          name: 'clients',
          component: Tabela
        }
      ]
    })
    export default router