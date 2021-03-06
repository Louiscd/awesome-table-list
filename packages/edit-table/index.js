// 导入组件，组件必须声明 name
import EditTable from './src/EditTable.vue';

// 为组件提供 install 安装方法，供按需引入
EditTable.install = function(Vue) {
  Vue.component(EditTable.name, EditTable);
};

// 默认导出组件
export default EditTable;
