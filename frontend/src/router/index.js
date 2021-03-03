import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: "/user",
    name: "user",
    component: () => import( /* webpackChunkName: "user" */ '../views/user/User.vue'),

  },
  {

    path: "/data/:id",
    component: () => import( /* webpackChunkName: "auth" */ '../views/user/Data.vue'),

  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "auth" */ '../views/login/Login.vue'),
  },

  {
    path: '/basic',
    name: 'basic',
    component: () => import( /* webpackChunkName: "basic" */ '../layout/basic/Basic.vue'),
    redirect: '/welcome',
    children: [{
        path: '/welcome',
        name: 'welcome',
        component: () => import( /* webpackChunkName: "welcome" */ '../views/welcome/Welcome.vue'),
      },
      {
        path: '/firstClass',
        name: 'firstClass',
        component: () => import( /* webpackChunkName: "firstClass" */ '../views/firstClass/FirstClass.vue'),
      },
      {
        path: '/secondClass',
        name: 'secondClass',
        component: () => import( /* webpackChunkName: "bassecondClassic" */ '../views/secondClass/SecondClass.vue'),
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import( /* webpackChunkName: "bassecondClassic" */ '../components/detail/Detail.vue'),
      }
    ]
  }
]



const router = new VueRouter({
  routes
})

//路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (to.path === '/user') return next()
  if (from.path === "/user") return next()
  const tokenStr = window.sessionStorage.getItem("token")
  if (!tokenStr) return next('/login')
  next()
})
export default router