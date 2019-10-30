import Vue from 'vue'
import VueRouter from 'vue-router'


import home from './home'
import detail from './detail'
import Shop from './shop'

Vue.use(VueRouter)

const routes = [
  //  首页
  ...home,
  //  category
  ...detail,
  ...Shop
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    next();
  } else {
    next();
  }
});


export default router
