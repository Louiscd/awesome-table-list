// 导入组件，组件必须声明 name
import AwesomeTableList from './src/AwesomeTableList.vue';
import formCreate from '@form-create/element-ui';

// 为组件提供 install 安装方法，供按需引入
AwesomeTableList.install = function(Vue) {
  Vue.use(formCreate);
  Vue.component(AwesomeTableList.name, AwesomeTableList);
};

// 默认导出组件
export default AwesomeTableList;
