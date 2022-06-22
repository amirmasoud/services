"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Dashboard_Sites_Stacks_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AppHead.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AppHead.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Head
  },
  props: {
    title: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Icons_Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Icons/Spinner */ "./resources/js/Components/Icons/Spinner.vue");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/transitions/transition.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: {
      type: String,
      "default": "button"
    },
    processing: {
      type: Boolean,
      "default": false
    },
    href: {
      type: String,
      "default": null
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      Spinner: _Components_Icons_Spinner__WEBPACK_IMPORTED_MODULE_0__["default"],
      TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.TransitionRoot
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DashboardMain.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DashboardMain.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: String,
    label: String,
    modelValue: String,
    id: {
      type: String,
      "default": function _default(props) {
        return props.name;
      }
    },
    type: {
      type: String,
      "default": "text"
    },
    placeholder: {
      type: String,
      "default": ""
    },
    form: {
      type: Object,
      "default": function _default() {
        return {
          errors: {}
        };
      }
    },
    hasError: {
      type: Boolean,
      "default": null
    },
    errorMessage: {
      type: String,
      "default": ""
    },
    help: {
      type: String,
      "default": ""
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {};
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Forms/Inputs/Input.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Forms/Inputs/Input.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/transitions/transition.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: String,
    label: String,
    modelValue: String,
    id: {
      type: String,
      "default": function _default(props) {
        return props.name;
      }
    },
    type: {
      type: String,
      "default": "text"
    },
    placeholder: {
      type: String,
      "default": ""
    },
    form: {
      type: Object,
      "default": function _default() {
        return {
          errors: {}
        };
      }
    },
    hasError: {
      type: Boolean,
      "default": null
    },
    errorMessage: {
      type: String,
      "default": ""
    },
    help: {
      type: String,
      "default": ""
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.TransitionRoot
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    enteredCommands: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var sampleCommands = [{
      display: "10 random posts",
      command: "wp post create --post_type=page --post_title='A random post' --post_status=publish --post_author=1 --post_content='This is a sample post'"
    }, {
      display: "Generate posts with fetched content.",
      command: "curl -N https://loripsum.net/api/5 | wp post generate --post_content --count=10"
    }, {
      display: "Create a new post",
      command: "wp post create --post_type=post --post_title='A sample post'"
    }, {
      display: "Create a new page",
      command: "wp post create --post_type=page --post_title='A sample page'"
    }];
    var __returned__ = {
      sampleCommands: sampleCommands,
      props: props
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/switch/switch.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/StarIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/TrendingUpIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/ShieldCheckIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/UserIcon.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");




 // let rating = 5;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    records: Object,
    selectedPlugins: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var pluginSearch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(pluginSearch, lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (query) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route("slacks.plugins"), {
        search: pluginSearch.value
      }, {
        preserveState: true,
        replace: true,
        only: ["records"]
      });
    }, 300));
    var __returned__ = {
      pluginSearch: pluginSearch,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      Switch: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.Switch,
      SwitchDescription: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.SwitchDescription,
      SwitchGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.SwitchGroup,
      SwitchLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.SwitchLabel,
      StarIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_4__["default"],
      TrendingUpIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__["default"],
      ShieldCheckIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_6__["default"],
      UserIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__["default"],
      debounce: (lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()),
      Inertia: _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/switch/switch.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/StarIcon.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    records: Object,
    selectedTheme: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var themeSearch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var theme = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.selectedTheme);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(themeSearch, lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (query) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route("dashboard.sites.stacks.create"), {
        search: themeSearch.value
      }, {
        preserveState: true,
        replace: true,
        only: ["themes"]
      });
    }, 300));
    var __returned__ = {
      themeSearch: themeSearch,
      props: props,
      theme: theme,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      RadioGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.RadioGroup,
      RadioGroupLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.RadioGroupLabel,
      RadioGroupOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.RadioGroupOption,
      SwitchDescription: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.SwitchDescription,
      debounce: (lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()),
      Inertia: _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia,
      StarIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_AppHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/AppHead */ "./resources/js/Components/AppHead.vue");
/* harmony import */ var _Components_DashboardMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/DashboardMain */ "./resources/js/Components/DashboardMain.vue");
/* harmony import */ var _Components_Stacks_WordPress_Plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Stacks/WordPress/Plugins */ "./resources/js/Components/Stacks/WordPress/Plugins.vue");
/* harmony import */ var _Components_Stacks_WordPress_Themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Stacks/WordPress/Themes */ "./resources/js/Components/Stacks/WordPress/Themes.vue");
/* harmony import */ var _Components_Stacks_WordPress_Advance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Stacks/WordPress/Advance */ "./resources/js/Components/Stacks/WordPress/Advance.vue");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/tabs/tabs.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/switch/switch.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/PuzzleIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/ViewBoardsIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/TerminalIcon.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.vue");
/* harmony import */ var _Components_Forms_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Forms/Inputs/Input */ "./resources/js/Components/Forms/Inputs/Input.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    resource: Object,
    plugins: Object,
    themes: Object,
    types: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var pluginObj = {};
    props.resource.data.properties.plugins.forEach(function (plugin) {
      return pluginObj[plugin] = true;
    });
    var selectedPlugins = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(pluginObj);
    var selectedTheme = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(props.resource.data.properties.theme);
    var enteredCommands = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(props.resource.data.properties.commands);
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_8__.useForm)("EditStack: ".concat(props.resource.id), props.resource.data);
    (0,vue__WEBPACK_IMPORTED_MODULE_5__.watch)(selectedPlugins.value, function () {
      /* eslint-disable no-unused-vars */
      form.properties.plugins = Object.entries(selectedPlugins.value).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            plugin = _ref3[0],
            enabled = _ref3[1];

        return enabled;
      }).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            plugin = _ref5[0],
            enabled = _ref5[1];

        return plugin;
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_5__.watch)(selectedTheme, function () {
      form.properties.theme = selectedTheme.value;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_5__.watch)(enteredCommands, function () {
      form.properties.commands = enteredCommands.value;
    });
    var __returned__ = {
      props: props,
      pluginObj: pluginObj,
      selectedPlugins: selectedPlugins,
      selectedTheme: selectedTheme,
      enteredCommands: enteredCommands,
      form: form,
      AppHead: _Components_AppHead__WEBPACK_IMPORTED_MODULE_0__["default"],
      DashboardMain: _Components_DashboardMain__WEBPACK_IMPORTED_MODULE_1__["default"],
      Plugins: _Components_Stacks_WordPress_Plugins__WEBPACK_IMPORTED_MODULE_2__["default"],
      Themes: _Components_Stacks_WordPress_Themes__WEBPACK_IMPORTED_MODULE_3__["default"],
      Advance: _Components_Stacks_WordPress_Advance__WEBPACK_IMPORTED_MODULE_4__["default"],
      TabGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.TabGroup,
      TabList: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.TabList,
      Tab: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.Tab,
      TabPanels: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.TabPanels,
      TabPanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.TabPanel,
      RadioGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_10__.RadioGroup,
      RadioGroupLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_10__.RadioGroupLabel,
      RadioGroupOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_10__.RadioGroupOption,
      SwitchDescription: _headlessui_vue__WEBPACK_IMPORTED_MODULE_11__.SwitchDescription,
      PuzzleIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_12__["default"],
      ViewBoardsIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_13__["default"],
      TerminalIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_14__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_5__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_5__.watch,
      Button: _Components_Button__WEBPACK_IMPORTED_MODULE_6__["default"],
      Input: _Components_Forms_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__["default"],
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_8__.useForm
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AppHead.vue?vue&type=template&id=1e4e3eb4":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AppHead.vue?vue&type=template&id=1e4e3eb4 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Head, {
    title: $props.title ? "".concat($props.title, " - ").concat(_ctx.$page.props.app.name) : _ctx.$page.props.app.name
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["title"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=template&id=067f8786":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=template&id=067f8786 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.href ? 'Link' : 'button'), {
    disabled: _ctx.disabled || $props.href ? null : $props.processing,
    href: $props.href ? $props.href : null,
    type: $props.href ? null : $props.type,
    "class": "inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionRoot"], {
        id: "button-spinner",
        show: $props.processing,
        enter: "transition-opacity duration-300",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "transition-opacity duration-300",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Spinner"], {
            "class": "w-4 h-4"
          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["disabled", "href", "type"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DashboardMain.vue?vue&type=template&id=9317a89c":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DashboardMain.vue?vue&type=template&id=9317a89c ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "border-b border-gray-200 px-4 py-4 flex items-center justify-between sm:px-6 lg:px-8 max-w-screen-lg"
};
var _hoisted_2 = {
  "class": "flex-1 min-w-0"
};
var _hoisted_3 = {
  "class": "text-lg font-medium leading-6 text-gray-900 sm:truncate"
};
var _hoisted_4 = {
  "class": "flex-shrink-0 sm:mt-0 sm:ml-4"
};
var _hoisted_5 = {
  "class": "px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"
};
var _hoisted_6 = {
  "class": "text-gray-500 text-xs font-medium uppercase tracking-wide"
};
var _hoisted_7 = {
  "class": "px-4 my-6 sm:px-6 lg:px-8 max-w-screen-lg"
};
var _hoisted_8 = {
  "class": "align-middle"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "header")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "buttons")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "sub-header")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "sub-header-content")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Forms/Inputs/Input.vue?vue&type=template&id=e0737ce2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Forms/Inputs/Input.vue?vue&type=template&id=e0737ce2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["for"];
var _hoisted_2 = {
  "class": "mt-1"
};
var _hoisted_3 = ["id", "name", "placeholder", "type", "value"];
var _hoisted_4 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": $props.id,
    "class": "block text-sm font-semibold font-medium text-gray-700"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 9
  /* TEXT, PROPS */
  , _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: $props.id,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([[$props.hasError || !!$props.form.errors[$props.name] ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'], "block w-full sm:text-sm rounded-md shadow-sm"]),
    name: $props.name,
    placeholder: $props.placeholder,
    type: $props.type,
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_3)]), $props.help !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", {
    key: 0,
    id: "".concat($props.name, "-description"),
    "class": "mt-2 text-sm text-gray-500"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.help), 9
  /* TEXT, PROPS */
  , _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionRoot"], {
    id: "".concat($props.name, "-error"),
    show: $props.hasError || !!$props.form.errors[$props.name],
    as: "p",
    "class": "mt-2 text-sm text-red-600",
    enter: "transition-opacity duration-300",
    "enter-from": "opacity-0",
    "enter-to": "opacity-100",
    leave: "transition-opacity duration-300",
    "leave-from": "opacity-100",
    "leave-to": "opacity-0"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hasError ? $props.errorMessage : $props.form.errors[$props.name]), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["id", "show"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Icons/Spinner.vue?vue&type=template&id=7f52a46e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Icons/Spinner.vue?vue&type=template&id=7f52a46e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "animate-spin -ml-1 mr-3 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=template&id=3fc2ce9a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=template&id=3fc2ce9a ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "justify-center items-center flex"
};
var _hoisted_2 = {
  "class": "flex-1 mt-6 mb-8"
};
var _hoisted_3 = {
  "class": "space-y-2 space-x-2"
};
var _hoisted_4 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.sampleCommands, function (cmd, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      key: idx,
      "class": "inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function (c) {
        return _ctx.$emit('update:entered-commands', $props.enteredCommands + '\n' + cmd.command);
      }, ["prevent"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(cmd.display), 9
    /* TEXT, PROPS */
    , _hoisted_4)]);
  }), 64
  /* STABLE_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": [_cache[0] || (_cache[0] = function ($event) {
      return $props.enteredCommands = $event;
    }), _cache[1] || (_cache[1] = function (commands) {
      return _ctx.$emit('update:entered-commands', $props.enteredCommands);
    })],
    spellcheck: "false",
    "data-gramm": "false",
    "data-gramm_editor": "false",
    "data-enable-grammarly": "false",
    rows: "3",
    "class": "mt-6 shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.enteredCommands]])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=template&id=21dea8d1":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=template&id=21dea8d1 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-10 grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-3 gap-0"
};
var _hoisted_2 = {
  "class": "w-full sm:col-start-2 sm:col-span-2 xl:col-start-2 xl:col-end-3"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm font-medium text-gray-700",
  "for": "search"
}, "Search", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "mt-1 relative rounded-md shadow-sm w-full"
};
var _hoisted_5 = {
  "class": "mb-10 columns-1 sm:columns-2 xl:columns-3 gap-3",
  role: "list"
};
var _hoisted_6 = {
  "class": "flex shadow-sm rounded-md"
};
var _hoisted_7 = {
  "class": "flex-shrink-0 flex items-start justify-center border-t border-l border-gray-200 w-16 text-white text-sm font-medium rounded-tl-md z-10 bg-white p-2"
};
var _hoisted_8 = ["alt", "src"];
var _hoisted_9 = {
  "class": "flex-1 flex items-start justify-between border-t border-r border-gray-200 bg-white truncate rounded-tr-md"
};
var _hoisted_10 = {
  "class": "flex-1 px-4 py-2 text-sm truncate"
};
var _hoisted_11 = {
  "class": "flex-grow flex flex-col"
};
var _hoisted_12 = ["innerHTML"];
var _hoisted_13 = {
  "class": "flex items-center"
};
var _hoisted_14 = {
  "class": "text-gray-500"
};
var _hoisted_15 = ["innerHTML"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "grid grid-cols-1 md:grid-cols-2 text-gray-500 bg-white border-r border-b border-l border-gray-200 p-2 rounded-b-md text-sm"
};
var _hoisted_18 = {
  "class": "col-span-1 md:col-span-2"
};
var _hoisted_19 = ["innerHTML"];
var _hoisted_20 = {
  "class": "md:col-span-1"
};
var _hoisted_21 = {
  "class": "col-span-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "search",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.pluginSearch = $event;
    }),
    "class": "focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300 rounded-md",
    name: "search",
    placeholder: "search",
    type: "search"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.pluginSearch]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.records.plugins, function (plugin, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": "break-inside-avoid mb-4"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      alt: "".concat(plugin.name, " icon"),
      src: plugin.icons.icon_svg || plugin.icons.icon_2x || plugin.icons.icon_1x
    }, null, 8
    /* PROPS */
    , _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchGroup"], {
      as: "div",
      "class": "flex items-center justify-between mb-2"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchLabel"], {
          as: "span",
          "class": "text-sm font-medium text-gray-900",
          passive: ""
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              "class": "whitespace-pre-line",
              innerHTML: plugin.name
            }, null, 8
            /* PROPS */
            , _hoisted_12)];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchDescription"], {
          as: "span",
          "class": "text-sm text-gray-500"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)([0, 1, 2, 3, 4], function (rating) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["StarIcon"], {
                key: rating,
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([plugin.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']),
                "aria-hidden": "true"
              }, null, 8
              /* PROPS */
              , ["class"]);
            }), 64
            /* STABLE_FRAGMENT */
            )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plugin.num_ratings) + ")", 1
            /* TEXT */
            )])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Switch"], {
          modelValue: $props.selectedPlugins[plugin.slug],
          "onUpdate:modelValue": [function ($event) {
            return $props.selectedPlugins[plugin.slug] = $event;
          }, function (plugin) {
            return _ctx.$emit('update:selected-plugins', $props.selectedPlugins);
          }],
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.selectedPlugins[plugin.slug] ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'])
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.selectedPlugins[plugin.slug] ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']),
              "aria-hidden": "true"
            }, null, 2
            /* CLASS */
            )];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["modelValue", "onUpdate:modelValue", "class"])];
      }),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
      "class": "w-full whitespace-pre-wrap",
      innerHTML: plugin.short_description
    }, null, 8
    /* PROPS */
    , _hoisted_15)])])]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["UserIcon"], {
      "class": "w-4 h-4 inline mr-1"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: plugin.author
    }, null, 8
    /* PROPS */
    , _hoisted_19)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TrendingUpIcon"], {
      "class": "w-4 h-4 inline mr-1"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plugin.active_installs), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ShieldCheckIcon"], {
      "class": "w-4 h-4 inline mr-1"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tested with " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plugin.tested), 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=template&id=a52008ae":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=template&id=a52008ae ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-10 grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-3 gap-0 max-w-screen-xl"
};
var _hoisted_2 = {
  "class": "w-full sm:col-start-2 sm:col-span-2 xl:col-start-2 xl:col-end-3"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm font-medium text-gray-700",
  "for": "search"
}, "Search", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "mt-1 relative rounded-md shadow-sm w-full"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Selected Theme");

var _hoisted_6 = {
  "class": "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
};
var _hoisted_7 = {
  "class": "flex items-center flex-col"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  "class": "block w-full px-4 pt-2 pb-4"
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = {
  "class": "flex items-center"
};
var _hoisted_12 = {
  "class": "text-gray-500"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "search",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.themeSearch = $event;
    }),
    "class": "focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300 rounded-md",
    name: "search",
    placeholder: "search",
    type: "search"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.themeSearch]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroup"], {
    modelValue: $setup.theme,
    "onUpdate:modelValue": [_cache[1] || (_cache[1] = function ($event) {
      return $setup.theme = $event;
    }), _cache[2] || (_cache[2] = function (t) {
      return _ctx.$emit('update:selected-theme', $setup.theme);
    })],
    "class": "mb-10 max-w-screen-xl"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroupLabel"], {
        "class": "sr-only"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.records.themes, function (theme) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RadioGroupOption"], {
          key: theme.slug,
          value: theme.slug,
          as: "template"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
            var active = _ref.active,
                checked = _ref.checked;
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'ring-1 ring-offset-2 ring-indigo-500' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none'])
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: theme.screenshot_url,
              "class": "rounded-t-lg"
            }, null, 8
            /* PROPS */
            , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroupLabel"], {
              as: "p",
              "class": "font-medium text-gray-900"
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                  innerHTML: theme.name
                }, null, 8
                /* PROPS */
                , _hoisted_10)];
              }),
              _: 2
              /* DYNAMIC */

            }, 1024
            /* DYNAMIC_SLOTS */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchDescription"], {
              as: "span",
              "class": "text-sm text-gray-500"
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)([0, 1, 2, 3, 4], function (rating) {
                  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["StarIcon"], {
                    key: rating,
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([theme.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']),
                    "aria-hidden": "true"
                  }, null, 8
                  /* PROPS */
                  , ["class"]);
                }), 64
                /* STABLE_FRAGMENT */
                )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(theme.num_ratings) + ")", 1
                /* TEXT */
                )])];
              }),
              _: 2
              /* DYNAMIC */

            }, 1024
            /* DYNAMIC_SLOTS */
            )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']),
              "aria-hidden": "true"
            }, null, 2
            /* CLASS */
            )], 2
            /* CLASS */
            )];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["value"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=template&id=2cf20192":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=template&id=2cf20192 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Update stack");

var _hoisted_2 = {
  "class": "max-w-screen-xl"
};
var _hoisted_3 = {
  "class": "col-span-6 sm:col-span-4"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Update");

var _hoisted_5 = {
  "class": "col-span-6 sm:col-span-4"
};
var _hoisted_6 = {
  "class": "col-span-6 sm:col-span-4"
};
var _hoisted_7 = {
  "class": "col-span-6 sm:col-span-4 hidden"
};
var _hoisted_8 = {
  "class": "col-span-6 sm:col-span-4 hidden"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Selected Stack Type ");

var _hoisted_10 = {
  "class": "grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4"
};
var _hoisted_11 = {
  "class": "flex items-center flex-col"
};
var _hoisted_12 = ["src"];
var _hoisted_13 = {
  "class": "block w-full px-4 pt-2 pb-4"
};
var _hoisted_14 = ["innerHTML"];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 1 CPU / 1 GB RAM / 5 GB SSD ");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Plugins", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Themes", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Advance", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppHead"], {
    title: "New WordPress Site"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DashboardMain"], null, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "space-y-4",
        onSubmit: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.form.put(_ctx.$route('dashboard.sites.stacks.update', [$props.resource.data]));
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Button"], {
        type: "submit"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_4];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
        modelValue: $setup.form.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.name = $event;
        }),
        form: $setup.form,
        label: "Name",
        name: "name"
      }, null, 8
      /* PROPS */
      , ["modelValue", "form"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
        modelValue: $setup.form.price,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.price = $event;
        }),
        form: $setup.form,
        label: "Price",
        name: "price"
      }, null, 8
      /* PROPS */
      , ["modelValue", "form"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
        modelValue: $setup.form.properties,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.properties = $event;
        }),
        form: $setup.form,
        label: "Properties",
        name: "properties"
      }, null, 8
      /* PROPS */
      , ["modelValue", "form"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
        modelValue: $setup.form.type,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.form.type = $event;
        }),
        form: $setup.form,
        label: "Type",
        name: "type"
      }, null, 8
      /* PROPS */
      , ["modelValue", "form"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroup"], {
        modelValue: $setup.form.type,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.form.type = $event;
        }),
        "class": "mb-10 max-w-screen-xl"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroupLabel"], {
            "class": "sr-only"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_9];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.types, function (type) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RadioGroupOption"], {
              key: type.value,
              value: $setup.form.type,
              as: "template"
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                var active = _ref.active,
                    checked = _ref.checked;
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'ring-1 ring-offset-2 ring-indigo-500' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none'])
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                  src: type.icon,
                  "class": "rounded-t-lg p-4"
                }, null, 8
                /* PROPS */
                , _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroupLabel"], {
                  as: "p",
                  "class": "font-medium text-gray-900"
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                      innerHTML: type.label
                    }, null, 8
                    /* PROPS */
                    , _hoisted_14)];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1024
                /* DYNAMIC_SLOTS */
                ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchDescription"], {
                  as: "span",
                  "class": "text-sm text-gray-500"
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                  /* STABLE */

                })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']),
                  "aria-hidden": "true"
                }, null, 2
                /* CLASS */
                )], 2
                /* CLASS */
                )];
              }),
              _: 2
              /* DYNAMIC */

            }, 1032
            /* PROPS, DYNAMIC_SLOTS */
            , ["value"]);
          }), 128
          /* KEYED_FRAGMENT */
          ))])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), $setup.form.type_value === 'wordpress' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["TabGroup"], {
        key: 0,
        as: "div"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TabList"], {
            "class": "flex flex-col sm:flex-row flex-wrap relative z-0 justify-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 mb-4"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Tab"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
                  var selected = _ref2.selected;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([selected ? 'text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100' : 'text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50', 'flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg']),
                    type: "button"
                  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PuzzleIcon"], {
                    "class": "w-3 h-3 mr-2"
                  }), _hoisted_16], 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Tab"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
                  var selected = _ref3.selected;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([selected ? 'text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100' : 'text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50', 'flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg']),
                    type: "button"
                  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ViewBoardsIcon"], {
                    "class": "w-3 h-3 mr-2"
                  }), _hoisted_17], 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Tab"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
                  var selected = _ref4.selected;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([selected ? 'text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100' : 'text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50', 'flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg']),
                    type: "button"
                  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TerminalIcon"], {
                    "class": "w-3 h-3 mr-2"
                  }), _hoisted_18], 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              })];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TabPanels"], null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TabPanel"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Plugins"], {
                    "selected-plugins": $setup.selectedPlugins,
                    "onUpdate:selected-plugins": _cache[5] || (_cache[5] = function ($event) {
                      return $setup.selectedPlugins = $event;
                    }),
                    records: $props.plugins
                  }, null, 8
                  /* PROPS */
                  , ["selected-plugins", "records"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TabPanel"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Themes"], {
                    "selected-theme": $setup.selectedTheme,
                    "onUpdate:selected-theme": _cache[6] || (_cache[6] = function ($event) {
                      return $setup.selectedTheme = $event;
                    }),
                    records: $props.themes
                  }, null, 8
                  /* PROPS */
                  , ["selected-theme", "records"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TabPanel"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Advance"], {
                    "entered-commands": $setup.enteredCommands,
                    "onUpdate:entered-commands": _cache[7] || (_cache[7] = function ($event) {
                      return $setup.enteredCommands = $event;
                    })
                  }, null, 8
                  /* PROPS */
                  , ["entered-commands"])];
                }),
                _: 1
                /* STABLE */

              })];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
      /* HYDRATE_EVENTS */
      )])];
    }),
    _: 1
    /* STABLE */

  })], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Components/AppHead.vue":
/*!*********************************************!*\
  !*** ./resources/js/Components/AppHead.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppHead_vue_vue_type_template_id_1e4e3eb4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHead.vue?vue&type=template&id=1e4e3eb4 */ "./resources/js/Components/AppHead.vue?vue&type=template&id=1e4e3eb4");
/* harmony import */ var _AppHead_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHead.vue?vue&type=script&lang=js */ "./resources/js/Components/AppHead.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppHead_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppHead_vue_vue_type_template_id_1e4e3eb4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/AppHead.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Button.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Button.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_067f8786__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=067f8786 */ "./resources/js/Components/Button.vue?vue&type=template&id=067f8786");
/* harmony import */ var _Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Button.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_067f8786__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Button.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/DashboardMain.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/DashboardMain.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardMain_vue_vue_type_template_id_9317a89c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardMain.vue?vue&type=template&id=9317a89c */ "./resources/js/Components/DashboardMain.vue?vue&type=template&id=9317a89c");
/* harmony import */ var _DashboardMain_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardMain.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/DashboardMain.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DashboardMain_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DashboardMain_vue_vue_type_template_id_9317a89c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/DashboardMain.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Forms/Inputs/Input.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/Forms/Inputs/Input.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_vue_vue_type_template_id_e0737ce2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=e0737ce2 */ "./resources/js/Components/Forms/Inputs/Input.vue?vue&type=template&id=e0737ce2");
/* harmony import */ var _Input_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Forms/Inputs/Input.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Input_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Input_vue_vue_type_template_id_e0737ce2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Forms/Inputs/Input.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Icons/Spinner.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/Icons/Spinner.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Spinner_vue_vue_type_template_id_7f52a46e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner.vue?vue&type=template&id=7f52a46e */ "./resources/js/Components/Icons/Spinner.vue?vue&type=template&id=7f52a46e");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Spinner_vue_vue_type_template_id_7f52a46e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Icons/Spinner.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Advance.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Advance.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Advance_vue_vue_type_template_id_3fc2ce9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advance.vue?vue&type=template&id=3fc2ce9a */ "./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=template&id=3fc2ce9a");
/* harmony import */ var _Advance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advance.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Advance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Advance_vue_vue_type_template_id_3fc2ce9a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Stacks/WordPress/Advance.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Plugins.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Plugins.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Plugins_vue_vue_type_template_id_21dea8d1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugins.vue?vue&type=template&id=21dea8d1 */ "./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=template&id=21dea8d1");
/* harmony import */ var _Plugins_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plugins.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Plugins_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Plugins_vue_vue_type_template_id_21dea8d1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Stacks/WordPress/Plugins.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Themes.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Themes.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Themes_vue_vue_type_template_id_a52008ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Themes.vue?vue&type=template&id=a52008ae */ "./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=template&id=a52008ae");
/* harmony import */ var _Themes_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Themes.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Themes_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Themes_vue_vue_type_template_id_a52008ae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Stacks/WordPress/Themes.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_2cf20192__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2cf20192 */ "./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=template&id=2cf20192");
/* harmony import */ var _Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_vue_vue_type_template_id_2cf20192__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/AppHead.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/AppHead.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppHead_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppHead_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppHead.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AppHead.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Button.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/Button.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/DashboardMain.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/DashboardMain.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardMain_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardMain_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardMain.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DashboardMain.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Forms/Inputs/Input.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Forms/Inputs/Input.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Input.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Forms/Inputs/Input.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Advance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Advance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Advance.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Plugins_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Plugins_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Plugins.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Themes_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Themes_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Themes.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/AppHead.vue?vue&type=template&id=1e4e3eb4":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/AppHead.vue?vue&type=template&id=1e4e3eb4 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppHead_vue_vue_type_template_id_1e4e3eb4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppHead_vue_vue_type_template_id_1e4e3eb4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppHead.vue?vue&type=template&id=1e4e3eb4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AppHead.vue?vue&type=template&id=1e4e3eb4");


/***/ }),

/***/ "./resources/js/Components/Button.vue?vue&type=template&id=067f8786":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/Button.vue?vue&type=template&id=067f8786 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_067f8786__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_067f8786__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=template&id=067f8786 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=template&id=067f8786");


/***/ }),

/***/ "./resources/js/Components/DashboardMain.vue?vue&type=template&id=9317a89c":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/DashboardMain.vue?vue&type=template&id=9317a89c ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardMain_vue_vue_type_template_id_9317a89c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardMain_vue_vue_type_template_id_9317a89c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardMain.vue?vue&type=template&id=9317a89c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DashboardMain.vue?vue&type=template&id=9317a89c");


/***/ }),

/***/ "./resources/js/Components/Forms/Inputs/Input.vue?vue&type=template&id=e0737ce2":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Forms/Inputs/Input.vue?vue&type=template&id=e0737ce2 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_template_id_e0737ce2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_template_id_e0737ce2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Input.vue?vue&type=template&id=e0737ce2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Forms/Inputs/Input.vue?vue&type=template&id=e0737ce2");


/***/ }),

/***/ "./resources/js/Components/Icons/Spinner.vue?vue&type=template&id=7f52a46e":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Icons/Spinner.vue?vue&type=template&id=7f52a46e ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_template_id_7f52a46e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_template_id_7f52a46e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Spinner.vue?vue&type=template&id=7f52a46e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Icons/Spinner.vue?vue&type=template&id=7f52a46e");


/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=template&id=3fc2ce9a":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=template&id=3fc2ce9a ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Advance_vue_vue_type_template_id_3fc2ce9a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Advance_vue_vue_type_template_id_3fc2ce9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Advance.vue?vue&type=template&id=3fc2ce9a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Advance.vue?vue&type=template&id=3fc2ce9a");


/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=template&id=21dea8d1":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=template&id=21dea8d1 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Plugins_vue_vue_type_template_id_21dea8d1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Plugins_vue_vue_type_template_id_21dea8d1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Plugins.vue?vue&type=template&id=21dea8d1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Plugins.vue?vue&type=template&id=21dea8d1");


/***/ }),

/***/ "./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=template&id=a52008ae":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=template&id=a52008ae ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Themes_vue_vue_type_template_id_a52008ae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Themes_vue_vue_type_template_id_a52008ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Themes.vue?vue&type=template&id=a52008ae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stacks/WordPress/Themes.vue?vue&type=template&id=a52008ae");


/***/ }),

/***/ "./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=template&id=2cf20192":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=template&id=2cf20192 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_2cf20192__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_2cf20192__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=2cf20192 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue?vue&type=template&id=2cf20192");


/***/ })

}]);