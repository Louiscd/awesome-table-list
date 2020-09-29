(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["awesome-table-list"] = factory();
	else
		root["awesome-table-list"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4375":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "923c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AwesomeTableList_vue_vue_type_style_index_0_id_c4d896ae_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4375");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AwesomeTableList_vue_vue_type_style_index_0_id_c4d896ae_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AwesomeTableList_vue_vue_type_style_index_0_id_c4d896ae_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AwesomeTableList_vue_vue_type_style_index_0_id_c4d896ae_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11ac2efd-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/edit-table/src/EditTable.vue?vue&type=template&id=6c4b229a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-table',_vm._g(_vm._b({staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},'el-table',_vm.$attrs,false),_vm.$listeners),[(_vm.selection)?_vm._t("slotSelection"):_vm._e(),_vm._l((_vm.columns),function(item,index){return _c('el-table-column',_vm._b({key:index,scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('span',{class:item.class},[_vm._v(_vm._s(scope.column.label))])]}},{key:"default",fn:function(scope){return [(item && item.slotName)?_c('section',[_vm._t(item.prop,null,{"scope":scope})],2):_c('section',[(item && item.edit)?_c('div',[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(scope.row[item.prop]),callback:function ($$v) {_vm.$set(scope.row, item.prop, $$v)},expression:"scope.row[item.prop]"}})],1):_c('div',[_vm._v(" "+_vm._s(scope.row[item.prop])+" ")])])]}}],null,true)},'el-table-column',item || {},false))})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/edit-table/src/EditTable.vue?vue&type=template&id=6c4b229a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/edit-table/src/EditTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EditTablevue_type_script_lang_js_ = ({
  name: 'EditTable',
  props: {
    tableData: {
      required: true,
      type: Array,
      default: () => [],
    },
    columns: {
      required: true,
      type: Array,
      default: () => [],
    },
    selection: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
});

// CONCATENATED MODULE: ./packages/edit-table/src/EditTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_EditTablevue_type_script_lang_js_ = (EditTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/edit-table/src/EditTable.vue





/* normalize component */

var component = normalizeComponent(
  src_EditTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditTable = (component.exports);
// CONCATENATED MODULE: ./packages/edit-table/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
EditTable.install = function(Vue) {
  Vue.component(EditTable.name, EditTable);
};

// 默认导出组件
/* harmony default export */ var edit_table = (EditTable);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11ac2efd-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-list/src/AwesomeTableList.vue?vue&type=template&id=c4d896ae&scoped=true&
var AwesomeTableListvue_type_template_id_c4d896ae_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('section',{staticClass:"toolbar-panel"},[_c('form-create',{attrs:{"rule":_vm.formRules,"option":_vm.formOptions},model:{value:(_vm.fApi),callback:function ($$v) {_vm.fApi=$$v},expression:"fApi"}}),_c('div',{staticClass:"toolbar-item"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm._handleSearch}},[_vm._v("查询")]),_c('el-button',{on:{"click":_vm._handleReset}},[_vm._v("重置")]),_vm._t("filterHandle")],2)],1),(_vm.isShowStatistics)?_c('section',{staticClass:"toolbar-totaltip mb-10"},[_vm._t("statistics")],2):_vm._e(),_c('section',[_c('el-table',_vm._g(_vm._b({staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},'el-table',_vm.$attrs,false),_vm.$listeners),[(_vm.selection)?_vm._t("slotSelection"):_vm._e(),_vm._l((_vm.columns),function(item,index){return _c('el-table-column',_vm._b({key:index,scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('span',{class:item.class},[_vm._v(_vm._s(scope.column.label))])]}},{key:"default",fn:function(scope){return [(item && item.slotName)?_c('section',[_vm._t(item.prop,null,{"scope":scope})],2):_c('section',[(item && item.edit)?_c('div',[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(scope.row[item.prop]),callback:function ($$v) {_vm.$set(scope.row, item.prop, $$v)},expression:"scope.row[item.prop]"}})],1):_c('div',[_vm._v(" "+_vm._s(scope.row[item.prop])+" ")])])]}}],null,true)},'el-table-column',item || {},false))})],2)],1),_c('section',{staticClass:"section-pagination"},[_c('el-pagination',_vm._b({attrs:{"page-size":_vm.pageSize,"current-page":_vm._pageNo,"total":_vm.count},on:{"current-change":_vm._handleCurrentChange}},'el-pagination',_vm.$attrs,false))],1)])}
var AwesomeTableListvue_type_template_id_c4d896ae_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/table-list/src/AwesomeTableList.vue?vue&type=template&id=c4d896ae&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-list/src/AwesomeTableList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AwesomeTableListvue_type_script_lang_js_ = ({
  name: 'AwesomeTableList',
  props: {
    /**
     * 列表筛选
     * 表单生成规则数组对象  生成规则：http://www.form-create.com/v2/guide/rule.html
     * 生成规则数组中一个对象就是一个表单项（是一个json对象），
     * 在里面可以对应的表单名称、类型、属性、值、样式、类名、是否必填、错误提示等。
     */
    formRules: {
      required: true,
      type: Array,
      default: () => [],
    },
    formOptions: {
      required: false,
      type: Object,
      default: () => {
        return {
          form: {
            inline: true,
            labelPosition: 'left',
            labelWidth: '100px',
          },
          submitBtn: {
            show: false,
          }, // 默认隐藏form-create 自带的提交按钮
        };
      },
    },

    /** 是否显示列表统计 */
    isShowStatistics: {
      required: false,
      type: Boolean,
      default: true,
    },

    /** 表格相关 */
    selection: {
      required: false,
      type: Boolean,
      default: false,
    },
    tableData: {
      required: true,
      type: Array,
      default: () => [],
    },
    columns: {
      required: true,
      type: Array,
      default: () => [],
    },

    /** 分页参数 */
    pageNo: {
      required: false,
      type: Number,
      default: 1,
    },
    pageSize: {
      required: false,
      type: Number,
      default: 10,
    },
    count: {
      required: true,
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      fApi: {},
    };
  },
  computed: {
    _pageNo() {
      return this.pageNo;
    },
  },
  created() {},
  methods: {
    // 查询
    _handleSearch() {
      this.$emit('handle-search', this.getCurrentFormData());
    },
    // 重置
    _handleReset() {
      this.fApi.resetFields(); // 清空表单数据 ，实时数据清空，上一次数据依然保留
      this.$emit('reset-search', this.getCurrentFormData());
    },
    // 分页
    _handleCurrentChange(pageNo) {
      this.$emit('page-change', {
        pageNo,
        formData: this.getLastFormData(),
      });
    },
    // 获取form 实时数据
    getCurrentFormData() {
      return this.fApi.form;
    },
    // 获取form 上一次数据
    getLastFormData() {
      return this.fApi.formData();
    },
    // 获取form-create 的实例对象
    getFApi() {
      return this.fApi;
    },
  },
});

// CONCATENATED MODULE: ./packages/table-list/src/AwesomeTableList.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_AwesomeTableListvue_type_script_lang_js_ = (AwesomeTableListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/table-list/src/AwesomeTableList.vue?vue&type=style&index=0&id=c4d896ae&lang=postcss&scoped=true&
var AwesomeTableListvue_type_style_index_0_id_c4d896ae_lang_postcss_scoped_true_ = __webpack_require__("923c");

// CONCATENATED MODULE: ./packages/table-list/src/AwesomeTableList.vue






/* normalize component */

var AwesomeTableList_component = normalizeComponent(
  src_AwesomeTableListvue_type_script_lang_js_,
  AwesomeTableListvue_type_template_id_c4d896ae_scoped_true_render,
  AwesomeTableListvue_type_template_id_c4d896ae_scoped_true_staticRenderFns,
  false,
  null,
  "c4d896ae",
  null
  
)

/* harmony default export */ var AwesomeTableList = (AwesomeTableList_component.exports);
// CONCATENATED MODULE: ./packages/table-list/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
AwesomeTableList.install = function(Vue) {
  Vue.component(AwesomeTableList.name, AwesomeTableList);
};

// 默认导出组件
/* harmony default export */ var table_list = (AwesomeTableList);

// CONCATENATED MODULE: ./packages/index.js



// 存储组件列表
const components = [edit_table, table_list];

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

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  EditTable: edit_table,
  AwesomeTableList: table_list,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=awesome-table-list.umd.js.map