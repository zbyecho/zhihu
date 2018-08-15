// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// 引入muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI)

// 引入 Roboto 字体
import 'typeface-roboto'
// 引入icon
import '@/assets/fonts/fonts.css'
// 控制主题
// import theme from 'muse-ui/lib/theme';
// theme.use('dark');
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

import {GET,POST} from "./uitl/http";

Vue.prototype.$get = GET;
Vue.prototype.$post = POST;

/*
*  rem.js
* */
import '@/assets/js/rem'

/*
*   引入vuex
* */
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:(h) => h(App)
})
