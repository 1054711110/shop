import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false

// 配置axios
import axios from '@/util/request.js'


Vue.prototype.$axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
