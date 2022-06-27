"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Dashboard_Settings_General_vue"],{

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
  name: 'DashboardMain',
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_AppHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/AppHead */ "./resources/js/Components/AppHead.vue");
/* harmony import */ var _Components_DashboardMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/DashboardMain */ "./resources/js/Components/DashboardMain.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/switch/switch.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'General',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var tabs = [{
      name: "General",
      href: route("dashboard.settings.general"),
      current: true
    }, {
      name: "Password",
      href: "#",
      current: false
    }, {
      name: "Notifications",
      href: "#",
      current: false
    }, {
      name: "System Status",
      href: route("dashboard.settings.system-status"),
      current: false
    }];
    var automaticTimezoneEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(true);
    var autoUpdateApplicantDataEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(false);
    var __returned__ = {
      tabs: tabs,
      automaticTimezoneEnabled: automaticTimezoneEnabled,
      autoUpdateApplicantDataEnabled: autoUpdateApplicantDataEnabled,
      AppHead: _Components_AppHead__WEBPACK_IMPORTED_MODULE_0__["default"],
      DashboardMain: _Components_DashboardMain__WEBPACK_IMPORTED_MODULE_1__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref,
      Switch: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.Switch,
      SwitchGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.SwitchGroup,
      SwitchLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.SwitchLabel
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=template&id=eec68400":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=template&id=eec68400 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Settings");

var _hoisted_2 = {
  "class": "px-0"
};
var _hoisted_3 = {
  "class": "py-6"
};
var _hoisted_4 = {
  "class": "lg:hidden"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "sr-only",
  "for": "selected-tab"
}, "Select a tab", -1
/* HOISTED */
);

var _hoisted_6 = {
  id: "selected-tab",
  "class": "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md",
  name: "selected-tab"
};
var _hoisted_7 = ["selected"];
var _hoisted_8 = {
  "class": "hidden lg:block"
};
var _hoisted_9 = {
  "class": "border-b border-gray-200"
};
var _hoisted_10 = {
  "class": "-mb-px flex space-x-8"
};
var _hoisted_11 = {
  "class": "mt-10 divide-y divide-gray-200"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "space-y-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900"
}, "Profile"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "max-w-2xl text-sm text-gray-500"
}, " This information will be displayed publicly so be careful what you share. ")], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "mt-6 rounded-lg bg-white shadow px-4"
};
var _hoisted_14 = {
  "class": "divide-y divide-gray-200"
};
var _hoisted_15 = {
  "class": "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, "Name", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_18 = {
  "class": "flex-grow"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ml-4 flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "font-semibold text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",
  type: "button"
}, " Update ")], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500 flex items-center"
}, " Photo ", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 items-center"
};
var _hoisted_23 = {
  "class": "flex-grow"
};
var _hoisted_24 = ["src"];
var _hoisted_25 = {
  "class": "ml-4 flex-shrink-0 flex items-start space-x-4"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "font-semibold text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",
  type: "button"
}, " Update ", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true",
  "class": "text-gray-300"
}, "|", -1
/* HOISTED */
);

var _hoisted_28 = ["disabled"];
var _hoisted_29 = {
  "class": "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, "Email", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_32 = {
  "class": "flex-grow"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ml-4 flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "font-semibold text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",
  type: "button"
}, " Update ")], -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "mt-10 divide-y divide-gray-200"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "space-y-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900"
}, "Account"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "max-w-2xl text-sm text-gray-500"
}, " Manage how information is displayed on your account. ")], -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "mt-6 rounded-lg bg-white shadow px-4"
};
var _hoisted_37 = {
  "class": "divide-y divide-gray-200"
};
var _hoisted_38 = {
  "class": "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, "Language", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_41 = {
  "class": "flex-grow"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ml-4 flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "font-semibold text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",
  type: "button"
}, " Update ")], -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, "Date format", -1
/* HOISTED */
);

var _hoisted_45 = {
  "class": "mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_46 = {
  "class": "flex-grow"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ml-4 flex-shrink-0 flex items-start space-x-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "font-semibold text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",
  type: "button"
}, " Update ")], -1
/* HOISTED */
);

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Swarm mode ");

var _hoisted_49 = {
  "class": "mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Auto-update application ");

var _hoisted_51 = {
  "class": "mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppHead"], {
    title: "Settings"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DashboardMain"], null, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tabs "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tabs, function (tab) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
          key: tab.name,
          selected: tab.current
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tab.name), 9
        /* TEXT, PROPS */
        , _hoisted_7);
      }), 64
      /* STABLE_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tabs, function (tab) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
          key: tab.name,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([tab.current ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']),
          href: tab.href
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tab.name), 1
            /* TEXT */
            )];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["class", "href"]);
      }), 64
      /* STABLE_FRAGMENT */
      ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Description list with inline editing "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dl", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.name), 1
      /* TEXT */
      ), _hoisted_19])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.$page.props.auth.user.profile || 'https://images.unsplash.com/photo-1607785330196-fdbe6f36c8fa?ixlib=rb-1.2.1&q=80&fm=jpg&cs=tinysrgb&w=256&h=256&fit=facearea',
        alt: "",
        "class": "h-8 w-8 rounded-full"
      }, null, 8
      /* PROPS */
      , _hoisted_24)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_25, [_hoisted_26, _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        disabled: !_ctx.$page.props.auth.user.profile,
        "class": "font-semibold text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed",
        type: "button"
      }, " Remove ", 8
      /* PROPS */
      , _hoisted_28)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.email), 1
      /* TEXT */
      ), _hoisted_33])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dl", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.settings.languageLabel), 1
      /* TEXT */
      ), _hoisted_42])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.settings.dateFormatLabel), 1
      /* TEXT */
      ), _hoisted_47])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchGroup"], {
        as: "div",
        "class": "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchLabel"], {
            as: "dt",
            "class": "text-sm font-medium text-gray-500",
            passive: ""
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_48];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Switch"], {
            modelValue: $setup.automaticTimezoneEnabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $setup.automaticTimezoneEnabled = $event;
            }),
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.automaticTimezoneEnabled ? 'bg-purple-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto'])
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']),
                "aria-hidden": "true"
              }, null, 2
              /* CLASS */
              )];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["modelValue", "class"])])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchGroup"], {
        as: "div",
        "class": "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SwitchLabel"], {
            as: "dt",
            "class": "text-sm font-medium text-gray-500",
            passive: ""
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_50];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Switch"], {
            modelValue: $setup.autoUpdateApplicantDataEnabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $setup.autoUpdateApplicantDataEnabled = $event;
            }),
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.autoUpdateApplicantDataEnabled ? 'bg-purple-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto'])
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']),
                "aria-hidden": "true"
              }, null, 2
              /* CLASS */
              )];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["modelValue", "class"])])];
        }),
        _: 1
        /* STABLE */

      })])])])])])];
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

/***/ "./resources/js/Pages/Dashboard/Settings/General.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Settings/General.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _General_vue_vue_type_template_id_eec68400__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=eec68400 */ "./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=template&id=eec68400");
/* harmony import */ var _General_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_General_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_General_vue_vue_type_template_id_eec68400__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Dashboard/Settings/General.vue"]])
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

/***/ "./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_General_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_General_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./General.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=template&id=eec68400":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=template&id=eec68400 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_General_vue_vue_type_template_id_eec68400__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_General_vue_vue_type_template_id_eec68400__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./General.vue?vue&type=template&id=eec68400 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Settings/General.vue?vue&type=template&id=eec68400");


/***/ })

}]);