// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(ElementUI);

import myUI from '@/components'
Vue.use(myUI)

import axios from "axios";
axios.defaults.baseURL = "http://47.101.144.230:3001";
Vue.prototype.$http = axios;


Vue.prototype.$URL="http://47.101.144.230:3001/upload/";

import store from "./store"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
