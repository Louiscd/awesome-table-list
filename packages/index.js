import EditTable from '../packages/edit-table/index.js';
import AwesomeTableList from '../packages/table-list/index.js';
import Button from '../packages/button/index.js';

// 存储组件列表
const components = [EditTable, AwesomeTableList, Button];

const requireComponent = require.context(
  // 其组件目录的相对路径
  '../packages',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /index\.(js)$/
);
console.log(requireComponent, 'requireComponent');
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  EditTable,
  AwesomeTableList,
  Button,
};
