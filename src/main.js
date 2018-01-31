// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import KeenUI from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/icons/svg', false, /\.svg$/)
const iconMap = requireAll(req)
Vue.component('svg-icon', SvgIcon)

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(KeenUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
