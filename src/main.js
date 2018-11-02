// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import eventBus from './libs/eventBus'
import router from './router';

Vue.config.productionTip = false
Vue.use(ElementUI);

// Vue.prototype.eventBus = eventBus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{eventBus},
  components: { App },
  template: '<App/>'
})
