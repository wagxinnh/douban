// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用axios
import axios from 'axios'
Vue.prototype.axios = axios
// 引用mock
require("./mock");
// // 引用mui
  import mui from '../static/mui/js/mui.js'
  import '../static/mui/css/mui.css'
Vue.prototype.mui = mui

// //引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import './assets/iconfont/iconfont.css'
require ('./assets/iconfont/iconfont.js')

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
