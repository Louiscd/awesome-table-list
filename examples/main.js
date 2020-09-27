import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small' });

// 导入组件库
import AweSome from '../packages/index';
// 注册组件库
Vue.use(AweSome);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
