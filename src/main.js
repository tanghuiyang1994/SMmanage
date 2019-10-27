import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import {verifytoken} from '@/apis/api';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.use(ElementUI)
router.beforeEach((to,from,next)=>{//路由拦截
    if(to.path!='/'){
      verifytoken(localStorage.token).then(res=>{
        if(res.data=='timeout'){
          next('/')
        }else{
          next()
        }
      })
    }else{
      next()
    }
})
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
