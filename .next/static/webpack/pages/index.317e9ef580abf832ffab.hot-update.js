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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return initialValue;\n    });\n  };\n};\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar calculateReturn = function calculateReturn(e) {};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var setToken = _reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy,\n      setInvestmentAmount = _reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment,\n      setLeverage = _reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio,\n      setPercentChange = _reducer__WEBPACK_IMPORTED_MODULE_3__.setTargetPercentChange,\n      setTimePeriod = _reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod;\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      percentChange = state.targetPercentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    console.log({\n      fliTokenStrategy: fliTokenStrategy,\n      initialInvestment: initialInvestment,\n      holdingPeriod: holdingPeriod,\n      targetPercentChange: percentChange\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: calculateReturn,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: percentChange,\n        onChange: function onChange(e) {\n          return dispatch(setPercentChange(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: initialInvestment,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: function onChange(e) {\n          return dispatch(setLeverage);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJzZXR0ZXIiLCJzZXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjYWxjdWxhdGVSZXR1cm4iLCJDYWxjdWxhdG9yIiwiZmxpSW5kZXhMb2dvIiwiaW5pdGlhbEZsaVRva2VuIiwiZmxpVG9rZW5PcHRpb25zIiwiaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyIsImluaXRpYWxQZXJjZW50Q2hhbmdlIiwiaW5pdGlhbEludmVzdG1lbnRBbW91bnQiLCJpbml0aWFsTGV2ZXJhZ2VSYXRpbyIsImhhbmRsZVN1Ym1pdCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInNldFRva2VuIiwic2V0RmxpVG9rZW5TdHJhdGVneSIsInNldEludmVzdG1lbnRBbW91bnQiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldExldmVyYWdlIiwic2V0TGV2ZXJhZ2VSYXRpbyIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRUYXJnZXRQZXJjZW50Q2hhbmdlIiwic2V0VGltZVBlcmlvZCIsInNldEhvbGRpbmdQZXJpb2QiLCJmbGlUb2tlblN0cmF0ZWd5IiwiaW5pdGlhbEludmVzdG1lbnQiLCJsZXZlcmFnZVJhdGlvIiwicGVyY2VudENoYW5nZSIsInRhcmdldFBlcmNlbnRDaGFuZ2UiLCJob2xkaW5nUGVyaW9kIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwidG9rZW4iLCJzdHJpbmciLCJhcnJheSIsImhvbGRpbmdQZXJpb2Rpbk1vbnRocyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQ1gsU0FESUEs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O0FBR3JCQyx1QkFBcUIsRUFBRUMsOENBSEY7QUFJckJYLGVBQWEsRUFBRVcsOENBSk07QUFLckJiLG1CQUFpQixFQUFFYSw4Q0FMRTtBQU1yQlosZUFBYSxFQUFFWSw4Q0FBTUE7QUFOQSxDQUF2QjtBQVNBLCtEQUFlckMsVUFBZiIsImZpbGUiOiIuL3NvdXJjZS9mZWF0dXJlcy9DYWxjdWxhdG9yL2NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgYXJyYXksIG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGNvbXBvc2UgPVxuICAoLi4uZm5zKSA9PlxuICAoaW5pdGlhbFZhbHVlKSA9PlxuICAgIGZucy5yZWR1Y2VSaWdodCgodmFsLCBmbikgPT4gaW5pdGlhbFZhbHVlKVxuaW1wb3J0IHtcbiAgcmVkdWNlcixcbiAgc2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgc2V0SW52ZXN0bWVudCxcbiAgc2V0VGFyZ2V0UGVyY2VudENoYW5nZSxcbiAgc2V0TGV2ZXJhZ2VSYXRpbyxcbiAgc2V0SG9sZGluZ1BlcmlvZCxcbiAgc2V0SW5pdGlhbEludmVzdG1lbnRcbn0gZnJvbSAnLi9yZWR1Y2VyJ1xuY29uc3Qgc2V0dGVyID0gKHNldCkgPT4gKGUpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGVcbiAgY29uc3QgeyB2YWx1ZSB9ID0gdGFyZ2V0XG4gIHNldCh2YWx1ZSlcbn1cblxuY29uc3QgY2FsY3VsYXRlUmV0dXJuID0gKGUpID0+IHt9XG5cbmNvbnN0IENhbGN1bGF0b3IgPSAoe1xuICBmbGlJbmRleExvZ28gPSAnaHR0cHM6Ly9zZXQtY29yZS5zMy5hbWF6b25hd3MuY29tL2ltZy9wb3J0Zm9saW9zL2V0aDJ4X2ZsaS5zdmcnLFxuICBpbml0aWFsRmxpVG9rZW4gPSAnRVRIJyxcbiAgZmxpVG9rZW5PcHRpb25zID0gW10sXG4gIGluaXRpYWxIb2xkaW5nUGVyaW9kSW5Nb250aHMgPSAyLFxuICBpbml0aWFsUGVyY2VudENoYW5nZSA9IDEwLFxuICBpbml0aWFsSW52ZXN0bWVudEFtb3VudCA9IDEwMCxcbiAgaW5pdGlhbExldmVyYWdlUmF0aW8gPSAwLFxuICBoYW5kbGVTdWJtaXRcbn0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHJlZHVjZXIoKSlcbiAgY29uc3QgW1xuICAgIHNldFRva2VuLFxuICAgIHNldEludmVzdG1lbnRBbW91bnQsXG4gICAgc2V0TGV2ZXJhZ2UsXG4gICAgc2V0UGVyY2VudENoYW5nZSxcbiAgICBzZXRUaW1lUGVyaW9kXG4gIF0gPSBbXG4gICAgc2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgICBzZXRJbml0aWFsSW52ZXN0bWVudCxcbiAgICBzZXRMZXZlcmFnZVJhdGlvLFxuICAgIHNldFRhcmdldFBlcmNlbnRDaGFuZ2UsXG4gICAgc2V0SG9sZGluZ1BlcmlvZFxuICBdXG5cbiAgY29uc3Qge1xuICAgIGZsaVRva2VuU3RyYXRlZ3ksXG4gICAgaW5pdGlhbEludmVzdG1lbnQsXG4gICAgbGV2ZXJhZ2VSYXRpbyxcbiAgICB0YXJnZXRQZXJjZW50Q2hhbmdlOiBwZXJjZW50Q2hhbmdlLFxuICAgIGhvbGRpbmdQZXJpb2RcbiAgfSA9IHN0YXRlXG4gIGNvbnN0IGNhbGN1bGF0ZVJldHVybiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coe1xuICAgICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICAgIGluaXRpYWxJbnZlc3RtZW50LFxuICAgICAgaG9sZGluZ1BlcmlvZCxcbiAgICAgIHRhcmdldFBlcmNlbnRDaGFuZ2U6IHBlcmNlbnRDaGFuZ2VcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiY2FsY3VsYXRvclwiIG9uU3VibWl0PXtjYWxjdWxhdGVSZXR1cm59PlxuICAgICAgPGgyPlxuICAgICAgICBFVEggRkxZIENhbGN1bGF0b3IgPGltZyBzcmM9e2ZsaUluZGV4TG9nb30gLz5cbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJmbGlUb2tlblwiIGh0bWxGb3I9XCJmbGlUb2tlblwiPlxuICAgICAgICAgIEZMSSBUb2tlblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImZsaVRva2VuXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17ZmxpVG9rZW5TdHJhdGVneX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEZsaVRva2VuU3RyYXRlZ3koZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwiaG9sZGluZ1BlcmlvZElucHV0XCIgaHRtbEZvcj1cImhvbGRpbmdQZXJpb2RJbnB1dFwiPlxuICAgICAgICAgIEhvbGRpbmcgUGVyaW9kIChNb250aHMpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiaG9sZGluZ1BlcmlvZElucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17aG9sZGluZ1BlcmlvZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEhvbGRpbmdQZXJpb2QoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwicGVyY2VudENoYW5nZUlucHV0XCIgaHRtbEZvcj1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiPlxuICAgICAgICAgIFBlcmNlbnQgQ2hhbmdlIGluIFRva2VuXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicGVyY2VudENoYW5nZUlucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17cGVyY2VudENoYW5nZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldFBlcmNlbnRDaGFuZ2UoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCIgaHRtbEZvcj1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiPlxuICAgICAgICAgIEluaXRpYWwgSW52ZXN0bWVudCBBbW91bnQgKERvbGxhcnMpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17aW5pdGlhbEludmVzdG1lbnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRJbml0aWFsSW52ZXN0bWVudChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIiBodG1sRm9yPVwibGV2ZXJhZ2VSYXRpb0lucHV0XCI+XG4gICAgICAgICAgQ3VycmVudCBMZXZlcmFnZSBSYXRpb25cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtsZXZlcmFnZVJhdGlvfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0TGV2ZXJhZ2UpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuQ2FsY3VsYXRvci5wcm9wVHlwZXMgPSB7XG4gIHRva2VuOiBzdHJpbmcsXG4gIGZsaVRva2VuT3B0aW9uczogYXJyYXksXG4gIGhvbGRpbmdQZXJpb2Rpbk1vbnRoczogbnVtYmVyLFxuICBwZXJjZW50Q2hhbmdlOiBudW1iZXIsXG4gIGluaXRpYWxJbnZlc3RtZW50OiBudW1iZXIsXG4gIGxldmVyYWdlUmF0aW86IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});