(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Dashboard.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Dashboard.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/dialog/dialog.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/transitions/transition.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/HomeIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/GlobeAltIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ServerIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/CubeIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/MenuAlt1Icon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/UserIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/CogIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/SelectorIcon.js");
/* harmony import */ var _Shared_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Logo */ "./resources/js/Shared/Logo.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Dashboard',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var navigation = [{
      name: "Dashboard",
      href: route("dashboard.index"),
      icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"],
      component: "Dashboard/Home"
    }, {
      name: "Users",
      href: route("dashboard.users.index"),
      icon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__["default"],
      component: "Dashboard/Users"
    }, {
      name: "Sites",
      href: route("dashboard.sites.index"),
      icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"],
      component: "Dashboard/Sites",
      submenu: [{
        name: "Servers",
        href: route("dashboard.sites.servers.index"),
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"],
        component: "Dashboard/Sites/Servers"
      }, {
        name: "Stacks",
        href: route("dashboard.sites.stacks.index"),
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__["default"],
        component: "Dashboard/Sites/Stacks"
      }]
    }, {
      name: "Settings",
      href: route("dashboard.settings.general"),
      icon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__["default"],
      component: "Dashboard/Settings"
    }];
    var sidebarOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var __returned__ = {
      navigation: navigation,
      sidebarOpen: sidebarOpen,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      Dialog: _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__.Dialog,
      DialogOverlay: _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__.DialogOverlay,
      Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.Menu,
      MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.MenuButton,
      MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.MenuItem,
      MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.MenuItems,
      TransitionChild: _headlessui_vue__WEBPACK_IMPORTED_MODULE_10__.TransitionChild,
      TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_10__.TransitionRoot,
      GlobeAltIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"],
      HomeIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"],
      MenuAlt1Icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_11__["default"],
      XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_12__["default"],
      ServerIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"],
      CubeIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__["default"],
      CogIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__["default"],
      SelectorIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_13__["default"],
      UserIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__["default"],
      Logo: _Shared_Logo__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Dashboard.vue?vue&type=template&id=057cf4e8":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Dashboard.vue?vue&type=template&id=057cf4e8 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative h-screen flex overflow-hidden bg-gray-100"
};
var _hoisted_2 = {
  "class": "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
};
var _hoisted_3 = {
  "class": "absolute top-0 right-0 -mr-12 pt-2"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Close sidebar", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "flex-shrink-0 flex items-center px-4"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pl-1 font-semibold font-sans text-indigo-800"
}, "Cloud", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "mt-5 flex-1 h-0 overflow-y-auto"
};
var _hoisted_8 = {
  "class": "px-2"
};
var _hoisted_9 = {
  "class": "space-y-1"
};
var _hoisted_10 = {
  "class": "flex flex-col space-y-1 my-2 ml-6"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "aria-hidden": "true",
  "class": "flex-shrink-0 w-14"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dummy element to force sidebar to shrink to fit close icon ")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "hidden lg:flex lg:flex-shrink-0"
};
var _hoisted_13 = {
  "class": "flex flex-col w-64 pt-5 pb-4 bg-gray-100"
};
var _hoisted_14 = {
  "class": "flex items-center justify-center flex-shrink-0 px-6"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pl-1 font-semibold font-sans text-indigo-800"
}, "Cloud", -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "h-0 flex-1 flex flex-col overflow-y-auto"
};
var _hoisted_17 = {
  "class": "flex w-full justify-between items-center"
};
var _hoisted_18 = {
  "class": "flex min-w-0 items-center justify-between space-x-3"
};
var _hoisted_19 = ["src"];
var _hoisted_20 = {
  "class": "flex-1 flex flex-col min-w-0"
};
var _hoisted_21 = {
  "class": "text-gray-900 text-sm font-medium truncate"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-gray-500 text-sm truncate"
}, "@jessyschwarz", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "py-1"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View profile ");

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Settings ");

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Notifications ");

var _hoisted_27 = {
  "class": "py-1"
};
var _hoisted_28 = {
  "class": "py-1"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout ");

var _hoisted_30 = {
  "class": "px-3 mt-6"
};
var _hoisted_31 = {
  "class": "space-y-2"
};
var _hoisted_32 = {
  key: 0,
  "class": "flex flex-col space-y-2 my-2 ml-6"
};
var _hoisted_33 = {
  "class": "flex flex-col w-0 flex-1 overflow-hidden"
};
var _hoisted_34 = {
  "class": "relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Open sidebar", -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "flex-1 flex justify-end px-4 sm:px-6 lg:px-8"
};
var _hoisted_37 = {
  "class": "flex items-center"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Open user menu", -1
/* HOISTED */
);

var _hoisted_39 = ["src"];
var _hoisted_40 = {
  "class": "py-1"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View profile ");

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Settings ");

var _hoisted_43 = {
  "class": "py-1"
};
var _hoisted_44 = {
  "class": "py-1"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout ");

var _hoisted_46 = {
  "class": "flex-1 relative z-0 overflow-y-auto focus:outline-none"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionRoot"], {
    show: $setup.sidebarOpen,
    as: "template"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Dialog"], {
        as: "div",
        "class": "fixed inset-0 flex z-40 lg:hidden",
        onClose: _cache[1] || (_cache[1] = function ($event) {
          return $setup.sidebarOpen = false;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionChild"], {
            as: "template",
            enter: "transition-opacity ease-linear duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "transition-opacity ease-linear duration-300",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DialogOverlay"], {
                "class": "fixed inset-0 bg-gray-600 bg-opacity-75"
              })];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionChild"], {
            as: "template",
            enter: "transition ease-in-out duration-300 transform",
            "enter-from": "-translate-x-full",
            "enter-to": "translate-x-0",
            leave: "transition ease-in-out duration-300 transform",
            "leave-from": "translate-x-0",
            "leave-to": "-translate-x-full"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionChild"], {
                as: "template",
                enter: "ease-in-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in-out duration-300",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                    type: "button",
                    onClick: _cache[0] || (_cache[0] = function ($event) {
                      return $setup.sidebarOpen = false;
                    })
                  }, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["XIcon"], {
                    "aria-hidden": "true",
                    "class": "h-6 w-6 text-white"
                  })])])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Logo"], {
                alt: "Cloud",
                "class": "h-8 w-auto text-indigo-600"
              }), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.navigation, function (item) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                  key: item.name
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                  "aria-current": _ctx.$page.component.startsWith(item.component) ? 'page' : undefined,
                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component.startsWith(item.component) ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md']),
                  href: item.href
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.icon), {
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component.startsWith(item.component) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']),
                      "aria-hidden": "true"
                    }, null, 8
                    /* PROPS */
                    , ["class"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
                    /* TEXT */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["aria-current", "class", "href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.submenu, function (subItem) {
                  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
                    key: subItem.name,
                    "aria-current": _ctx.$page.component.startsWith(subItem.component) ? 'page' : undefined,
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component.startsWith(subItem.component) ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']),
                    href: subItem.href
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(subItem.icon), {
                        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component.startsWith(subItem.component) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-5 w-5']),
                        "aria-hidden": "true"
                      }, null, 8
                      /* PROPS */
                      , ["class"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subItem.name), 1
                      /* TEXT */
                      )];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["aria-current", "class", "href"]);
                }), 128
                /* KEYED_FRAGMENT */
                ))])]);
              }), 64
              /* STABLE_FRAGMENT */
              ))])])])])];
            }),
            _: 1
            /* STABLE */

          }), _hoisted_11];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Static sidebar for desktop "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Logo"], {
    alt: "Cloud",
    "class": "h-8 w-auto text-indigo-600"
  }), _hoisted_15]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sidebar component, swap this element with another sidebar if you like "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" User account dropdown "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Menu"], {
    as: "div",
    "class": "px-3 mt-6 relative inline-block text-left"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuButton"], {
        "class": "group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            src: _ctx.$page.props.auth.user.profile || 'https://images.unsplash.com/photo-1607785330196-fdbe6f36c8fa?ixlib=rb-1.2.1&q=80&fm=jpg&cs=tinysrgb&w=256&h=256&fit=facearea',
            alt: "",
            "class": "w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          }, null, 8
          /* PROPS */
          , _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.name), 1
          /* TEXT */
          ), _hoisted_22])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SelectorIcon"], {
            "aria-hidden": "true",
            "class": "flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          })])];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition ease-out duration-100",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItems"], {
            "class": "z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                  var active = _ref.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: _ctx.$route('dashboard.settings.general')
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_24];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class", "href"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
                  var active = _ref2.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: _ctx.$route('dashboard.settings.general')
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_25];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class", "href"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
                  var active = _ref3.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: _ctx.$route('dashboard.settings.general')
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_26];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class", "href"])];
                }),
                _: 1
                /* STABLE */

              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
                  var active = _ref4.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: "#"
                  }, "Support", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref5) {
                  var active = _ref5.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: _ctx.$route('logout'),
                    method: "post"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_29];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class", "href"])];
                }),
                _: 1
                /* STABLE */

              })])];
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

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.navigation, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      key: item.name
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "aria-current": _ctx.$page.component.startsWith(item.component) ? 'page' : undefined,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component.startsWith(item.component) ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']),
      href: item.href
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.icon), {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component.startsWith(item.component) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']),
          "aria-hidden": "true"
        }, null, 8
        /* PROPS */
        , ["class"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["aria-current", "class", "href"]), item.submenu || false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.submenu, function (subItem) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
        key: subItem.name,
        "aria-current": _ctx.$page.component.startsWith(subItem.component) ? 'page' : undefined,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component.startsWith(subItem.component) ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']),
        href: subItem.href
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(subItem.icon), {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component.startsWith(subItem.component) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-5 w-5']),
            "aria-hidden": "true"
          }, null, 8
          /* PROPS */
          , ["class"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subItem.name), 1
          /* TEXT */
          )];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["aria-current", "class", "href"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 64
  /* STABLE_FRAGMENT */
  ))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden",
    type: "button",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.sidebarOpen = true;
    })
  }, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuAlt1Icon"], {
    "aria-hidden": "true",
    "class": "h-6 w-6"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Profile dropdown "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Menu"], {
    as: "div",
    "class": "ml-3 relative"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuButton"], {
        "class": "max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            src: _ctx.$page.props.auth.user.profile || 'https://images.unsplash.com/photo-1607785330196-fdbe6f36c8fa?ixlib=rb-1.2.1&q=80&fm=jpg&cs=tinysrgb&w=256&h=256&fit=facearea',
            alt: "",
            "class": "h-8 w-8 rounded-full"
          }, null, 8
          /* PROPS */
          , _hoisted_39)];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition ease-out duration-100",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItems"], {
            "class": "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref6) {
                  var active = _ref6.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: _ctx.$route('dashboard.settings.general')
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_41];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class", "href"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref7) {
                  var active = _ref7.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: _ctx.$route('dashboard.settings.general')
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_42];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class", "href"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref8) {
                  var active = _ref8.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: "#"
                  }, "Notifications", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref9) {
                  var active = _ref9.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: "#"
                  }, "Support", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref10) {
                  var active = _ref10.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']),
                    href: _ctx.$route('logout'),
                    method: "post"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_45];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class", "href"])];
                }),
                _: 1
                /* STABLE */

              })])];
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

  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Empty.vue?vue&type=template&id=42c4c921":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Empty.vue?vue&type=template&id=42c4c921 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Logo.vue?vue&type=template&id=1a92c387":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Logo.vue?vue&type=template&id=1a92c387 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Dashboard */ "./resources/js/Shared/Dashboard.vue");
/* harmony import */ var _Shared_Empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Empty */ "./resources/js/Shared/Empty.vue");
/* harmony import */ var _highlightjs_vue_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @highlightjs/vue-plugin */ "./node_modules/@highlightjs/vue-plugin/dist/highlightjs-vue.esm.min.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js/lib/languages/bash */ "./node_modules/highlight.js/es/languages/bash.js");
/* harmony import */ var highlight_js_styles_stackoverflow_light_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/styles/stackoverflow-light.css */ "./node_modules/highlight.js/styles/stackoverflow-light.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Application






 // Highlight.js Vue plugin



(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
      var page;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];
              page.layout = name.startsWith("Auth/") ? _Shared_Empty__WEBPACK_IMPORTED_MODULE_1__["default"] : page.layout || _Shared_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"];
              return _context.abrupt("return", page);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_5__["default"].registerLanguage("bash", highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_6__["default"]);
    var app = (0,vue__WEBPACK_IMPORTED_MODULE_8__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_8__.h)(App, props);
      }
    }); // eslint-disable-next-line no-undef

    app.config.globalProperties.$route = route;
    app.use(plugin).use(_highlightjs_vue_plugin__WEBPACK_IMPORTED_MODULE_2__["default"]).component("Link", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Link).mount(el);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__.InertiaProgress.init({
  color: "blue",
  showSpinner: true
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Shared/Dashboard.vue":
/*!*******************************************!*\
  !*** ./resources/js/Shared/Dashboard.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_057cf4e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=057cf4e8 */ "./resources/js/Shared/Dashboard.vue?vue&type=template&id=057cf4e8");
/* harmony import */ var _Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/Dashboard.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_057cf4e8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Empty.vue":
/*!***************************************!*\
  !*** ./resources/js/Shared/Empty.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Empty_vue_vue_type_template_id_42c4c921__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Empty.vue?vue&type=template&id=42c4c921 */ "./resources/js/Shared/Empty.vue?vue&type=template&id=42c4c921");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Empty_vue_vue_type_template_id_42c4c921__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Empty.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Logo.vue":
/*!**************************************!*\
  !*** ./resources/js/Shared/Logo.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logo_vue_vue_type_template_id_1a92c387__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=1a92c387 */ "./resources/js/Shared/Logo.vue?vue&type=template&id=1a92c387");
/* harmony import */ var _Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_Users_amirmasoud_Sites_services_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Logo_vue_vue_type_template_id_1a92c387__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Logo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Dashboard.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Shared/Dashboard.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Dashboard.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Dashboard.vue?vue&type=template&id=057cf4e8":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/Dashboard.vue?vue&type=template&id=057cf4e8 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_057cf4e8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_057cf4e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=057cf4e8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Dashboard.vue?vue&type=template&id=057cf4e8");


/***/ }),

/***/ "./resources/js/Shared/Empty.vue?vue&type=template&id=42c4c921":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/Empty.vue?vue&type=template&id=42c4c921 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Empty_vue_vue_type_template_id_42c4c921__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Empty_vue_vue_type_template_id_42c4c921__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Empty.vue?vue&type=template&id=42c4c921 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Empty.vue?vue&type=template&id=42c4c921");


/***/ }),

/***/ "./resources/js/Shared/Logo.vue?vue&type=template&id=1a92c387":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Logo.vue?vue&type=template&id=1a92c387 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_template_id_1a92c387__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_template_id_1a92c387__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logo.vue?vue&type=template&id=1a92c387 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Logo.vue?vue&type=template&id=1a92c387");


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.vue",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Login.vue": [
		"./resources/js/Pages/Auth/Login.vue",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Register": [
		"./resources/js/Pages/Auth/Register.vue",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/Register.vue": [
		"./resources/js/Pages/Auth/Register.vue",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Dashboard/Home": [
		"./resources/js/Pages/Dashboard/Home.vue",
		"resources_js_Pages_Dashboard_Home_vue"
	],
	"./Dashboard/Home.vue": [
		"./resources/js/Pages/Dashboard/Home.vue",
		"resources_js_Pages_Dashboard_Home_vue"
	],
	"./Dashboard/Settings/General": [
		"./resources/js/Pages/Dashboard/Settings/General.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Settings_General_vue"
	],
	"./Dashboard/Settings/General.vue": [
		"./resources/js/Pages/Dashboard/Settings/General.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Settings_General_vue"
	],
	"./Dashboard/Settings/SystemStatus": [
		"./resources/js/Pages/Dashboard/Settings/SystemStatus.vue",
		"resources_js_Pages_Dashboard_Settings_SystemStatus_vue"
	],
	"./Dashboard/Settings/SystemStatus.vue": [
		"./resources/js/Pages/Dashboard/Settings/SystemStatus.vue",
		"resources_js_Pages_Dashboard_Settings_SystemStatus_vue"
	],
	"./Dashboard/Sites/Cli": [
		"./resources/js/Pages/Dashboard/Sites/Cli.vue",
		"resources_js_Pages_Dashboard_Sites_Cli_vue"
	],
	"./Dashboard/Sites/Cli.vue": [
		"./resources/js/Pages/Dashboard/Sites/Cli.vue",
		"resources_js_Pages_Dashboard_Sites_Cli_vue"
	],
	"./Dashboard/Sites/Create": [
		"./resources/js/Pages/Dashboard/Sites/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Create_vue"
	],
	"./Dashboard/Sites/Create.vue": [
		"./resources/js/Pages/Dashboard/Sites/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Create_vue"
	],
	"./Dashboard/Sites/Edit": [
		"./resources/js/Pages/Dashboard/Sites/Edit.vue",
		"resources_js_Pages_Dashboard_Sites_Edit_vue"
	],
	"./Dashboard/Sites/Edit.vue": [
		"./resources/js/Pages/Dashboard/Sites/Edit.vue",
		"resources_js_Pages_Dashboard_Sites_Edit_vue"
	],
	"./Dashboard/Sites/Index": [
		"./resources/js/Pages/Dashboard/Sites/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Index_vue"
	],
	"./Dashboard/Sites/Index.vue": [
		"./resources/js/Pages/Dashboard/Sites/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Index_vue"
	],
	"./Dashboard/Sites/Servers/Create": [
		"./resources/js/Pages/Dashboard/Sites/Servers/Create.vue",
		"resources_js_Pages_Dashboard_Sites_Servers_Create_vue"
	],
	"./Dashboard/Sites/Servers/Create.vue": [
		"./resources/js/Pages/Dashboard/Sites/Servers/Create.vue",
		"resources_js_Pages_Dashboard_Sites_Servers_Create_vue"
	],
	"./Dashboard/Sites/Servers/Edit": [
		"./resources/js/Pages/Dashboard/Sites/Servers/Edit.vue",
		"resources_js_Pages_Dashboard_Sites_Servers_Edit_vue"
	],
	"./Dashboard/Sites/Servers/Edit.vue": [
		"./resources/js/Pages/Dashboard/Sites/Servers/Edit.vue",
		"resources_js_Pages_Dashboard_Sites_Servers_Edit_vue"
	],
	"./Dashboard/Sites/Servers/Index": [
		"./resources/js/Pages/Dashboard/Sites/Servers/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Servers_Index_vue"
	],
	"./Dashboard/Sites/Servers/Index.vue": [
		"./resources/js/Pages/Dashboard/Sites/Servers/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Servers_Index_vue"
	],
	"./Dashboard/Sites/Show": [
		"./resources/js/Pages/Dashboard/Sites/Show.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Show_vue"
	],
	"./Dashboard/Sites/Show.vue": [
		"./resources/js/Pages/Dashboard/Sites/Show.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Show_vue"
	],
	"./Dashboard/Sites/Stacks/Create": [
		"./resources/js/Pages/Dashboard/Sites/Stacks/Create.vue",
		"resources_js_Pages_Dashboard_Sites_Stacks_Create_vue"
	],
	"./Dashboard/Sites/Stacks/Create.vue": [
		"./resources/js/Pages/Dashboard/Sites/Stacks/Create.vue",
		"resources_js_Pages_Dashboard_Sites_Stacks_Create_vue"
	],
	"./Dashboard/Sites/Stacks/Edit": [
		"./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Stacks_Edit_vue"
	],
	"./Dashboard/Sites/Stacks/Edit.vue": [
		"./resources/js/Pages/Dashboard/Sites/Stacks/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Stacks_Edit_vue"
	],
	"./Dashboard/Sites/Stacks/Index": [
		"./resources/js/Pages/Dashboard/Sites/Stacks/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Stacks_Index_vue"
	],
	"./Dashboard/Sites/Stacks/Index.vue": [
		"./resources/js/Pages/Dashboard/Sites/Stacks/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Stacks_Index_vue"
	],
	"./Dashboard/Sites/Stacks/New": [
		"./resources/js/Pages/Dashboard/Sites/Stacks/New.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Stacks_New_vue"
	],
	"./Dashboard/Sites/Stacks/New.vue": [
		"./resources/js/Pages/Dashboard/Sites/Stacks/New.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sites_Stacks_New_vue"
	],
	"./Dashboard/Users/Create": [
		"./resources/js/Pages/Dashboard/Users/Create.vue",
		"resources_js_Pages_Dashboard_Users_Create_vue"
	],
	"./Dashboard/Users/Create.vue": [
		"./resources/js/Pages/Dashboard/Users/Create.vue",
		"resources_js_Pages_Dashboard_Users_Create_vue"
	],
	"./Dashboard/Users/Edit": [
		"./resources/js/Pages/Dashboard/Users/Edit.vue",
		"resources_js_Pages_Dashboard_Users_Edit_vue"
	],
	"./Dashboard/Users/Edit.vue": [
		"./resources/js/Pages/Dashboard/Users/Edit.vue",
		"resources_js_Pages_Dashboard_Users_Edit_vue"
	],
	"./Dashboard/Users/Index": [
		"./resources/js/Pages/Dashboard/Users/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Users_Index_vue"
	],
	"./Dashboard/Users/Index.vue": [
		"./resources/js/Pages/Dashboard/Users/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Users_Index_vue"
	],
	"./Error": [
		"./resources/js/Pages/Error.vue",
		"resources_js_Pages_Error_vue"
	],
	"./Error.vue": [
		"./resources/js/Pages/Error.vue",
		"resources_js_Pages_Error_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);