import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'basic',
    component: () => import(/* webpackChunkName: "basic" */ '../layout/basic/Basic.vue'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '../views/welcome/Welcome.vue'),
      },
      {
        path: '/firstClass',
        name: 'firstClass',
        component: () => import(/* webpackChunkName: "firstClass" */ '../views/firstClass/FirstClass.vue'),
      },
      {
        path: '/secondClass',
        name: 'secondClass',
        component: () => import(/* webpackChunkName: "bassecondClassic" */ '../views/secondClass/SecondClass.vue'),
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import(/* webpackChunkName: "bassecondClassic" */ '../components/detail/Detail.vue'),
      }       
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
