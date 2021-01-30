import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
//导入全局样式
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$echarts = window.echarts

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:3004/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
