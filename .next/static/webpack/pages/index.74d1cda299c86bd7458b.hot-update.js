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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return initialValue;\n    });\n  };\n};\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar calculateReturn = function calculateReturn(e) {};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var setToken = _reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy,\n      setInvestmentAmount = _reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment,\n      setLeverage = _reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio,\n      setPercentChange = _reducer__WEBPACK_IMPORTED_MODULE_3__.setTargetPercentChange,\n      setTimePeriod = _reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod;\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      percentChange = state.targetPercentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    console.log({\n      fliTokenStrategy: fliTokenStrategy,\n      initialInvestment: initialInvestment,\n      holdingPeriod: holdingPeriod,\n      targetPercentChange: percentChange\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: calculateReturn,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: percentChange,\n        onChange: function onChange(e) {\n          return dispatch(setPercentChange(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: initialInvestment,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio)(e.target.val));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJzZXR0ZXIiLCJzZXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjYWxjdWxhdGVSZXR1cm4iLCJDYWxjdWxhdG9yIiwiZmxpSW5kZXhMb2dvIiwiaW5pdGlhbEZsaVRva2VuIiwiZmxpVG9rZW5PcHRpb25zIiwiaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyIsImluaXRpYWxQZXJjZW50Q2hhbmdlIiwiaW5pdGlhbEludmVzdG1lbnRBbW91bnQiLCJpbml0aWFsTGV2ZXJhZ2VSYXRpbyIsImhhbmRsZVN1Ym1pdCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInNldFRva2VuIiwic2V0RmxpVG9rZW5TdHJhdGVneSIsInNldEludmVzdG1lbnRBbW91bnQiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldExldmVyYWdlIiwic2V0TGV2ZXJhZ2VSYXRpbyIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRUYXJnZXRQZXJjZW50Q2hhbmdlIiwic2V0VGltZVBlcmlvZCIsInNldEhvbGRpbmdQZXJpb2QiLCJmbGlUb2tlblN0cmF0ZWd5IiwiaW5pdGlhbEludmVzdG1lbnQiLCJsZXZlcmFnZVJhdGlvIiwicGVyY2VudENoYW5nZSIsInRhcmdldFBlcmNlbnRDaGFuZ2UiLCJob2xkaW5nUGVyaW9kIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwidG9rZW4iLCJzdHJpbmciLCJhcnJheSIsImhvbGRpbmdQZXJpb2Rpbk1vbnRocyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQ1gsU0FESUEs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QUssRUFBRUMsOENBRGM7QUFFckIvQixpQkFBZSxFQUFFZ0MsNkNBRkk7QUFHckJDLHVCQUFxQixFQUFFQyw4Q0FIRjtBQUlyQlgsZUFBYSxFQUFFVyw4Q0FKTTtBQUtyQmIsbUJBQWlCLEVBQUVhLDhDQUxFO0FBTXJCWixlQUFhLEVBQUVZLDhDQUFNQTtBQU5BLENBQXZCO0FBU0EsK0RBQWVyQyxVQUFmIiwiZmlsZSI6Ii4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5nLCBhcnJheSwgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgY29tcG9zZSA9XG4gICguLi5mbnMpID0+XG4gIChpbml0aWFsVmFsdWUpID0+XG4gICAgZm5zLnJlZHVjZVJpZ2h0KCh2YWwsIGZuKSA9PiBpbml0aWFsVmFsdWUpXG5pbXBvcnQge1xuICByZWR1Y2VyLFxuICBzZXRGbGlUb2tlblN0cmF0ZWd5LFxuICBzZXRJbnZlc3RtZW50LFxuICBzZXRUYXJnZXRQZXJjZW50Q2hhbmdlLFxuICBzZXRMZXZlcmFnZVJhdGlvLFxuICBzZXRIb2xkaW5nUGVyaW9kLFxuICBzZXRJbml0aWFsSW52ZXN0bWVudFxufSBmcm9tICcuL3JlZHVjZXInXG5jb25zdCBzZXR0ZXIgPSAoc2V0KSA9PiAoZSkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICBjb25zdCB7IHZhbHVlIH0gPSB0YXJnZXRcbiAgc2V0KHZhbHVlKVxufVxuXG5jb25zdCBjYWxjdWxhdGVSZXR1cm4gPSAoZSkgPT4ge31cblxuY29uc3QgQ2FsY3VsYXRvciA9ICh7XG4gIGZsaUluZGV4TG9nbyA9ICdodHRwczovL3NldC1jb3JlLnMzLmFtYXpvbmF3cy5jb20vaW1nL3BvcnRmb2xpb3MvZXRoMnhfZmxpLnN2ZycsXG4gIGluaXRpYWxGbGlUb2tlbiA9ICdFVEgnLFxuICBmbGlUb2tlbk9wdGlvbnMgPSBbXSxcbiAgaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyA9IDIsXG4gIGluaXRpYWxQZXJjZW50Q2hhbmdlID0gMTAsXG4gIGluaXRpYWxJbnZlc3RtZW50QW1vdW50ID0gMTAwLFxuICBpbml0aWFsTGV2ZXJhZ2VSYXRpbyA9IDAsXG4gIGhhbmRsZVN1Ym1pdFxufSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgcmVkdWNlcigpKVxuICBjb25zdCBbXG4gICAgc2V0VG9rZW4sXG4gICAgc2V0SW52ZXN0bWVudEFtb3VudCxcbiAgICBzZXRMZXZlcmFnZSxcbiAgICBzZXRQZXJjZW50Q2hhbmdlLFxuICAgIHNldFRpbWVQZXJpb2RcbiAgXSA9IFtcbiAgICBzZXRGbGlUb2tlblN0cmF0ZWd5LFxuICAgIHNldEluaXRpYWxJbnZlc3RtZW50LFxuICAgIHNldExldmVyYWdlUmF0aW8sXG4gICAgc2V0VGFyZ2V0UGVyY2VudENoYW5nZSxcbiAgICBzZXRIb2xkaW5nUGVyaW9kXG4gIF1cblxuICBjb25zdCB7XG4gICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICBpbml0aWFsSW52ZXN0bWVudCxcbiAgICBsZXZlcmFnZVJhdGlvLFxuICAgIHRhcmdldFBlcmNlbnRDaGFuZ2U6IHBlcmNlbnRDaGFuZ2UsXG4gICAgaG9sZGluZ1BlcmlvZFxuICB9ID0gc3RhdGVcbiAgY29uc3QgY2FsY3VsYXRlUmV0dXJuID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICBmbGlUb2tlblN0cmF0ZWd5LFxuICAgICAgaW5pdGlhbEludmVzdG1lbnQsXG4gICAgICBob2xkaW5nUGVyaW9kLFxuICAgICAgdGFyZ2V0UGVyY2VudENoYW5nZTogcGVyY2VudENoYW5nZVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYWxjdWxhdG9yXCIgb25TdWJtaXQ9e2NhbGN1bGF0ZVJldHVybn0+XG4gICAgICA8aDI+XG4gICAgICAgIEVUSCBGTFkgQ2FsY3VsYXRvciA8aW1nIHNyYz17ZmxpSW5kZXhMb2dvfSAvPlxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImZsaVRva2VuXCIgaHRtbEZvcj1cImZsaVRva2VuXCI+XG4gICAgICAgICAgRkxJIFRva2VuXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZmxpVG9rZW5cIlxuICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgIHZhbHVlPXtmbGlUb2tlblN0cmF0ZWd5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0RmxpVG9rZW5TdHJhdGVneShlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJob2xkaW5nUGVyaW9kSW5wdXRcIiBodG1sRm9yPVwiaG9sZGluZ1BlcmlvZElucHV0XCI+XG4gICAgICAgICAgSG9sZGluZyBQZXJpb2QgKE1vbnRocylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJob2xkaW5nUGVyaW9kSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtob2xkaW5nUGVyaW9kfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0SG9sZGluZ1BlcmlvZChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIiBodG1sRm9yPVwicGVyY2VudENoYW5nZUlucHV0XCI+XG4gICAgICAgICAgUGVyY2VudCBDaGFuZ2UgaW4gVG9rZW5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtwZXJjZW50Q2hhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0UGVyY2VudENoYW5nZShlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIiBodG1sRm9yPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCI+XG4gICAgICAgICAgSW5pdGlhbCBJbnZlc3RtZW50IEFtb3VudCAoRG9sbGFycylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtpbml0aWFsSW52ZXN0bWVudH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEluaXRpYWxJbnZlc3RtZW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImxldmVyYWdlUmF0aW9JbnB1dFwiIGh0bWxGb3I9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIj5cbiAgICAgICAgICBDdXJyZW50IExldmVyYWdlIFJhdGlvblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImxldmVyYWdlUmF0aW9JbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2xldmVyYWdlUmF0aW99XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRMZXZlcmFnZVJhdGlvKGUudGFyZ2V0LnZhbCkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuQ2FsY3VsYXRvci5wcm9wVHlwZXMgPSB7XG4gIHRva2VuOiBzdHJpbmcsXG4gIGZsaVRva2VuT3B0aW9uczogYXJyYXksXG4gIGhvbGRpbmdQZXJpb2Rpbk1vbnRoczogbnVtYmVyLFxuICBwZXJjZW50Q2hhbmdlOiBudW1iZXIsXG4gIGluaXRpYWxJbnZlc3RtZW50OiBudW1iZXIsXG4gIGxldmVyYWdlUmF0aW86IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});