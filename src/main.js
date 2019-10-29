import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/assets/css/border.css'
import '@/assets/css/reset.css'

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import {Button, Select, Carousel, CarouselItem,Rate} from 'element-ui';

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Rate)

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import '@/assets/css/iconfont.css'
//引入vue-awesome-swiper(轮播图插件)
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);


Vue.config.productionTip = false

// 金额过滤器
Vue.filter('money', (val) => {
  if (typeof val === 'number') {
    if (val % 1 === 0) {
      return val + '.00'
    } else {
      return val
    }
  } else {
    return val
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
