import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router/index.js'
// 导入 ElementUI
import ElementUI from 'element-ui'
// 导入 ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css';
// 注册ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
