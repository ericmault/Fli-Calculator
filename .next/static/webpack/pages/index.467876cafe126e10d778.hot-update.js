/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./source/features/Calculator/component.js":
/*!*************************************************!*\
  !*** ./source/features/Calculator/component.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return initialValue;\n    });\n  };\n};\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar getInputValue = function getInputValue(setter) {\n  return function (event) {\n    var value = event.target.value;\n    return setter(value);\n  };\n};\n\nvar toNumber = function toNumber(x) {\n  return Number(x);\n};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var onPriceChange = compose(dispatch, _reducer__WEBPACK_IMPORTED_MODULE_3__.setTokenPrice);\n\n  var dispatchSetter = function dispatchSetter(fn) {\n    return setter(dispatch(fn));\n  };\n\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      tokenPrice = state.tokenPrice,\n      percentChange = state.targetPercentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    var roi = (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.onCalculateRoi)({\n      investment: initialInvestment,\n      percentChange: percentChange,\n      ethPrice: tokenPrice,\n      ratio: leverageRatio\n    });\n    console.log({\n      roi: roi,\n      fliTokenStrategy: fliTokenStrategy,\n      initialInvestment: initialInvestment,\n      holdingPeriod: holdingPeriod,\n      targetPercentChange: percentChange\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: calculateReturn,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: dispatchSetter(_reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"tokenPrice\",\n        htmlFor: \"tokenPrice\",\n        children: \"Token Price\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"tokenPrice\",\n        type: \"number\",\n        value: tokenPrice,\n        onChange: function onChange(e) {\n          return onPriceChange(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: percentChange,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setPercentChange)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: initialInvestment,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJzZXR0ZXIiLCJzZXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJbnB1dFZhbHVlIiwiZXZlbnQiLCJ0b051bWJlciIsIngiLCJOdW1iZXIiLCJDYWxjdWxhdG9yIiwiZmxpSW5kZXhMb2dvIiwiaW5pdGlhbEZsaVRva2VuIiwiZmxpVG9rZW5PcHRpb25zIiwiaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyIsImluaXRpYWxQZXJjZW50Q2hhbmdlIiwiaW5pdGlhbEludmVzdG1lbnRBbW91bnQiLCJpbml0aWFsTGV2ZXJhZ2VSYXRpbyIsImhhbmRsZVN1Ym1pdCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm9uUHJpY2VDaGFuZ2UiLCJzZXRUb2tlblByaWNlIiwiZGlzcGF0Y2hTZXR0ZXIiLCJmbGlUb2tlblN0cmF0ZWd5IiwiaW5pdGlhbEludmVzdG1lbnQiLCJsZXZlcmFnZVJhdGlvIiwidG9rZW5QcmljZSIsInBlcmNlbnRDaGFuZ2UiLCJ0YXJnZXRQZXJjZW50Q2hhbmdlIiwiaG9sZGluZ1BlcmlvZCIsImNhbGN1bGF0ZVJldHVybiIsInByZXZlbnREZWZhdWx0Iiwicm9pIiwib25DYWxjdWxhdGVSb2kiLCJpbnZlc3RtZW50IiwiZXRoUHJpY2UiLCJyYXRpbyIsImNvbnNvbGUiLCJsb2ciLCJzZXRGbGlUb2tlblN0cmF0ZWd5Iiwic2V0SG9sZGluZ1BlcmlvZCIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldExldmVyYWdlUmF0aW8iLCJwcm9wVHlwZXMiLCJ0b2tlbiIsInN0cmluZyIsImFycmF5IiwiaG9sZGluZ1BlcmlvZGluTW9udGhz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QUFTQSwrREFBZTFDLFVBQWYiLCJmaWxlIjoiLi9zb3VyY2UvZmVhdHVyZXMvQ2FsY3VsYXRvci9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGFycmF5LCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBjb21wb3NlID1cbiAgKC4uLmZucykgPT5cbiAgKGluaXRpYWxWYWx1ZSkgPT5cbiAgICBmbnMucmVkdWNlUmlnaHQoKHZhbCwgZm4pID0+IGluaXRpYWxWYWx1ZSlcbmltcG9ydCB7XG4gIHJlZHVjZXIsXG4gIHNldEZsaVRva2VuU3RyYXRlZ3ksXG4gIHNldFRva2VuUHJpY2UsXG4gIHNldFRhcmdldFBlcmNlbnRDaGFuZ2UsXG4gIHNldExldmVyYWdlUmF0aW8sXG4gIHNldFBlcmNlbnRDaGFuZ2UsXG4gIHNldEhvbGRpbmdQZXJpb2QsXG4gIHNldEluaXRpYWxJbnZlc3RtZW50LFxuICBvbkNhbGN1bGF0ZVJvaVxufSBmcm9tICcuL3JlZHVjZXInXG5jb25zdCBzZXR0ZXIgPSAoc2V0KSA9PiAoZSkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICBjb25zdCB7IHZhbHVlIH0gPSB0YXJnZXRcbiAgc2V0KHZhbHVlKVxufVxuXG5jb25zdCBnZXRJbnB1dFZhbHVlID0gKHNldHRlcikgPT4gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICByZXR1cm4gc2V0dGVyKHZhbHVlKVxufVxuXG5jb25zdCB0b051bWJlciA9ICh4KSA9PiBOdW1iZXIoeClcblxuY29uc3QgQ2FsY3VsYXRvciA9ICh7XG4gIGZsaUluZGV4TG9nbyA9ICdodHRwczovL3NldC1jb3JlLnMzLmFtYXpvbmF3cy5jb20vaW1nL3BvcnRmb2xpb3MvZXRoMnhfZmxpLnN2ZycsXG4gIGluaXRpYWxGbGlUb2tlbiA9ICdFVEgnLFxuICBmbGlUb2tlbk9wdGlvbnMgPSBbXSxcbiAgaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyA9IDIsXG4gIGluaXRpYWxQZXJjZW50Q2hhbmdlID0gMTAsXG4gIGluaXRpYWxJbnZlc3RtZW50QW1vdW50ID0gMTAwLFxuICBpbml0aWFsTGV2ZXJhZ2VSYXRpbyA9IDAsXG4gIGhhbmRsZVN1Ym1pdFxufSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgcmVkdWNlcigpKVxuICBjb25zdCBvblByaWNlQ2hhbmdlID0gY29tcG9zZShkaXNwYXRjaCwgc2V0VG9rZW5QcmljZSlcbiAgY29uc3QgZGlzcGF0Y2hTZXR0ZXIgPSAoZm4pID0+IHNldHRlcihkaXNwYXRjaChmbikpXG5cbiAgY29uc3Qge1xuICAgIGZsaVRva2VuU3RyYXRlZ3ksXG4gICAgaW5pdGlhbEludmVzdG1lbnQsXG4gICAgbGV2ZXJhZ2VSYXRpbyxcbiAgICB0b2tlblByaWNlLFxuICAgIHRhcmdldFBlcmNlbnRDaGFuZ2U6IHBlcmNlbnRDaGFuZ2UsXG4gICAgaG9sZGluZ1BlcmlvZFxuICB9ID0gc3RhdGVcbiAgY29uc3QgY2FsY3VsYXRlUmV0dXJuID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCByb2kgPSBvbkNhbGN1bGF0ZVJvaSh7XG4gICAgICBpbnZlc3RtZW50OiBpbml0aWFsSW52ZXN0bWVudCxcbiAgICAgIHBlcmNlbnRDaGFuZ2UsXG4gICAgICBldGhQcmljZTogdG9rZW5QcmljZSxcbiAgICAgIHJhdGlvOiBsZXZlcmFnZVJhdGlvXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICByb2ksXG4gICAgICBmbGlUb2tlblN0cmF0ZWd5LFxuICAgICAgaW5pdGlhbEludmVzdG1lbnQsXG4gICAgICBob2xkaW5nUGVyaW9kLFxuICAgICAgdGFyZ2V0UGVyY2VudENoYW5nZTogcGVyY2VudENoYW5nZVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYWxjdWxhdG9yXCIgb25TdWJtaXQ9e2NhbGN1bGF0ZVJldHVybn0+XG4gICAgICA8aDI+XG4gICAgICAgIEVUSCBGTFkgQ2FsY3VsYXRvciA8aW1nIHNyYz17ZmxpSW5kZXhMb2dvfSAvPlxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImZsaVRva2VuXCIgaHRtbEZvcj1cImZsaVRva2VuXCI+XG4gICAgICAgICAgRkxJIFRva2VuXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZmxpVG9rZW5cIlxuICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgIHZhbHVlPXtmbGlUb2tlblN0cmF0ZWd5fVxuICAgICAgICAgIG9uQ2hhbmdlPXtkaXNwYXRjaFNldHRlcihzZXRGbGlUb2tlblN0cmF0ZWd5KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwidG9rZW5QcmljZVwiIGh0bWxGb3I9XCJ0b2tlblByaWNlXCI+XG4gICAgICAgICAgVG9rZW4gUHJpY2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJ0b2tlblByaWNlXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17dG9rZW5QcmljZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uUHJpY2VDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJob2xkaW5nUGVyaW9kSW5wdXRcIiBodG1sRm9yPVwiaG9sZGluZ1BlcmlvZElucHV0XCI+XG4gICAgICAgICAgSG9sZGluZyBQZXJpb2QgKE1vbnRocylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJob2xkaW5nUGVyaW9kSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtob2xkaW5nUGVyaW9kfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0SG9sZGluZ1BlcmlvZChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIiBodG1sRm9yPVwicGVyY2VudENoYW5nZUlucHV0XCI+XG4gICAgICAgICAgUGVyY2VudCBDaGFuZ2UgaW4gVG9rZW5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtwZXJjZW50Q2hhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0UGVyY2VudENoYW5nZShlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIiBodG1sRm9yPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCI+XG4gICAgICAgICAgSW5pdGlhbCBJbnZlc3RtZW50IEFtb3VudCAoRG9sbGFycylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtpbml0aWFsSW52ZXN0bWVudH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEluaXRpYWxJbnZlc3RtZW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImxldmVyYWdlUmF0aW9JbnB1dFwiIGh0bWxGb3I9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIj5cbiAgICAgICAgICBDdXJyZW50IExldmVyYWdlIFJhdGlvblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImxldmVyYWdlUmF0aW9JbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2xldmVyYWdlUmF0aW99XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRMZXZlcmFnZVJhdGlvKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5DYWxjdWxhdG9yLnByb3BUeXBlcyA9IHtcbiAgdG9rZW46IHN0cmluZyxcbiAgZmxpVG9rZW5PcHRpb25zOiBhcnJheSxcbiAgaG9sZGluZ1BlcmlvZGluTW9udGhzOiBudW1iZXIsXG4gIHBlcmNlbnRDaGFuZ2U6IG51bWJlcixcbiAgaW5pdGlhbEludmVzdG1lbnQ6IG51bWJlcixcbiAgbGV2ZXJhZ2VSYXRpbzogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});