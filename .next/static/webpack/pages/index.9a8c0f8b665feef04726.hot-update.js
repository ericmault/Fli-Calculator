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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return initialValue;\n    });\n  };\n};\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar calculateReturn = function calculateReturn(e) {};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var setToken = _reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy,\n      setInvestmentAmount = _reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment,\n      setLeverage = _reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio,\n      setPercentChange = _reducer__WEBPACK_IMPORTED_MODULE_3__.setTargetPercentChange,\n      setTimePeriod = _reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod;\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      percentChange = state.targetPercentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    var roi = (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.onCalculateRoi)({\n      investment: initialInvestment,\n      percentChange: percentChange,\n      ethPrice: ethPrice\n    });\n    console.log({\n      fliTokenStrategy: fliTokenStrategy,\n      initialInvestment: initialInvestment,\n      holdingPeriod: holdingPeriod,\n      targetPercentChange: percentChange\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: calculateReturn,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"tokenPrice\",\n        htmlFor: \"tokenPrice\",\n        children: \"Token Price\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"tokenPrice\",\n        type: \"number\",\n        value: tokenPrice,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setTokenPrice)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: percentChange,\n        onChange: function onChange(e) {\n          return dispatch(setPercentChange(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: initialInvestment,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJzZXR0ZXIiLCJzZXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjYWxjdWxhdGVSZXR1cm4iLCJDYWxjdWxhdG9yIiwiZmxpSW5kZXhMb2dvIiwiaW5pdGlhbEZsaVRva2VuIiwiZmxpVG9rZW5PcHRpb25zIiwiaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyIsImluaXRpYWxQZXJjZW50Q2hhbmdlIiwiaW5pdGlhbEludmVzdG1lbnRBbW91bnQiLCJpbml0aWFsTGV2ZXJhZ2VSYXRpbyIsImhhbmRsZVN1Ym1pdCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInNldFRva2VuIiwic2V0RmxpVG9rZW5TdHJhdGVneSIsInNldEludmVzdG1lbnRBbW91bnQiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldExldmVyYWdlIiwic2V0TGV2ZXJhZ2VSYXRpbyIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRUYXJnZXRQZXJjZW50Q2hhbmdlIiwic2V0VGltZVBlcmlvZCIsInNldEhvbGRpbmdQZXJpb2QiLCJmbGlUb2tlblN0cmF0ZWd5IiwiaW5pdGlhbEludmVzdG1lbnQiLCJsZXZlcmFnZVJhdGlvIiwicGVyY2VudENoYW5nZSIsInRhcmdldFBlcmNlbnRDaGFuZ2UiLCJob2xkaW5nUGVyaW9kIiwicHJldmVudERlZmF1bHQiLCJyb2kiLCJvbkNhbGN1bGF0ZVJvaSIsImludmVzdG1lbnQiLCJldGhQcmljZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlblByaWNlIiwic2V0VG9rZW5QcmljZSIsInByb3BUeXBlcyIsInRva2VuIiwic3RyaW5nIiwiYXJyYXkiLCJob2xkaW5nUGVyaW9kaW5Nb250aHMi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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhERixlQTJERTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0U7QUFBTyxZQUFJLEVBQUMsb0JBQVo7QUFBaUMsZUFBTyxFQUFDLG9CQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFDRSxVQUFFLEVBQUMsb0JBREw7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGFBQUssRUFBRTJCLGFBSFQ7QUFJRSxnQkFBUSxFQUFFLGtCQUFDN0IsQ0FBRDtBQUFBLGlCQUFPZ0IsUUFBUSxDQUFDTSwwREFBZ0IsQ0FBQ3RCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWpCLENBQWY7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzREYsZUFzRUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBFRCxDQXhIRDs7R0FBTUUsVTs7S0FBQUEsVTtBQTBITkEsVUFBVSxDQUFDc0MsU0FBWCxHQUF1QjtBQUNyQkMsT0FBSyxFQUFFQyw4Q0FEYztBQUVyQnJDLGlCQUFlLEVBQUVzQyw2Q0FGSTtBQUdyQkMsdUJBQXFCLEVBQUVDLDhDQUhGO0FBSXJCakIsZUFBYSxFQUFFaUIsOENBSk07QUFLckJuQixtQkFBaUIsRUFBRW1CLDhDQUxFO0FBTXJCbEIsZUFBYSxFQUFFa0IsOENBQU1BO0FBTkEsQ0FBdkI7QUFTQSwrREFBZTNDLFVBQWYiLCJmaWxlIjoiLi9zb3VyY2UvZmVhdHVyZXMvQ2FsY3VsYXRvci9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGFycmF5LCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBjb21wb3NlID1cbiAgKC4uLmZucykgPT5cbiAgKGluaXRpYWxWYWx1ZSkgPT5cbiAgICBmbnMucmVkdWNlUmlnaHQoKHZhbCwgZm4pID0+IGluaXRpYWxWYWx1ZSlcbmltcG9ydCB7XG4gIHJlZHVjZXIsXG4gIHNldEZsaVRva2VuU3RyYXRlZ3ksXG4gIHNldFRva2VuUHJpY2UsXG4gIHNldFRhcmdldFBlcmNlbnRDaGFuZ2UsXG4gIHNldExldmVyYWdlUmF0aW8sXG4gIHNldEhvbGRpbmdQZXJpb2QsXG4gIHNldEluaXRpYWxJbnZlc3RtZW50LFxuICBvbkNhbGN1bGF0ZVJvaVxufSBmcm9tICcuL3JlZHVjZXInXG5jb25zdCBzZXR0ZXIgPSAoc2V0KSA9PiAoZSkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICBjb25zdCB7IHZhbHVlIH0gPSB0YXJnZXRcbiAgc2V0KHZhbHVlKVxufVxuXG5jb25zdCBjYWxjdWxhdGVSZXR1cm4gPSAoZSkgPT4ge31cblxuY29uc3QgQ2FsY3VsYXRvciA9ICh7XG4gIGZsaUluZGV4TG9nbyA9ICdodHRwczovL3NldC1jb3JlLnMzLmFtYXpvbmF3cy5jb20vaW1nL3BvcnRmb2xpb3MvZXRoMnhfZmxpLnN2ZycsXG4gIGluaXRpYWxGbGlUb2tlbiA9ICdFVEgnLFxuICBmbGlUb2tlbk9wdGlvbnMgPSBbXSxcbiAgaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyA9IDIsXG4gIGluaXRpYWxQZXJjZW50Q2hhbmdlID0gMTAsXG4gIGluaXRpYWxJbnZlc3RtZW50QW1vdW50ID0gMTAwLFxuICBpbml0aWFsTGV2ZXJhZ2VSYXRpbyA9IDAsXG4gIGhhbmRsZVN1Ym1pdFxufSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgcmVkdWNlcigpKVxuICBjb25zdCBbXG4gICAgc2V0VG9rZW4sXG4gICAgc2V0SW52ZXN0bWVudEFtb3VudCxcbiAgICBzZXRMZXZlcmFnZSxcbiAgICBzZXRQZXJjZW50Q2hhbmdlLFxuICAgIHNldFRpbWVQZXJpb2RcbiAgXSA9IFtcbiAgICBzZXRGbGlUb2tlblN0cmF0ZWd5LFxuICAgIHNldEluaXRpYWxJbnZlc3RtZW50LFxuICAgIHNldExldmVyYWdlUmF0aW8sXG4gICAgc2V0VGFyZ2V0UGVyY2VudENoYW5nZSxcbiAgICBzZXRIb2xkaW5nUGVyaW9kXG4gIF1cblxuICBjb25zdCB7XG4gICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICBpbml0aWFsSW52ZXN0bWVudCxcbiAgICBsZXZlcmFnZVJhdGlvLFxuICAgIHRhcmdldFBlcmNlbnRDaGFuZ2U6IHBlcmNlbnRDaGFuZ2UsXG4gICAgaG9sZGluZ1BlcmlvZFxuICB9ID0gc3RhdGVcbiAgY29uc3QgY2FsY3VsYXRlUmV0dXJuID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCByb2kgPSBvbkNhbGN1bGF0ZVJvaSh7XG4gICAgICBpbnZlc3RtZW50OiBpbml0aWFsSW52ZXN0bWVudCxcbiAgICAgIHBlcmNlbnRDaGFuZ2UsXG4gICAgICBldGhQcmljZVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coe1xuICAgICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICAgIGluaXRpYWxJbnZlc3RtZW50LFxuICAgICAgaG9sZGluZ1BlcmlvZCxcbiAgICAgIHRhcmdldFBlcmNlbnRDaGFuZ2U6IHBlcmNlbnRDaGFuZ2VcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiY2FsY3VsYXRvclwiIG9uU3VibWl0PXtjYWxjdWxhdGVSZXR1cm59PlxuICAgICAgPGgyPlxuICAgICAgICBFVEggRkxZIENhbGN1bGF0b3IgPGltZyBzcmM9e2ZsaUluZGV4TG9nb30gLz5cbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJmbGlUb2tlblwiIGh0bWxGb3I9XCJmbGlUb2tlblwiPlxuICAgICAgICAgIEZMSSBUb2tlblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImZsaVRva2VuXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17ZmxpVG9rZW5TdHJhdGVneX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEZsaVRva2VuU3RyYXRlZ3koZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwidG9rZW5QcmljZVwiIGh0bWxGb3I9XCJ0b2tlblByaWNlXCI+XG4gICAgICAgICAgVG9rZW4gUHJpY2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJ0b2tlblByaWNlXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17dG9rZW5QcmljZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldFRva2VuUHJpY2UoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwiaG9sZGluZ1BlcmlvZElucHV0XCIgaHRtbEZvcj1cImhvbGRpbmdQZXJpb2RJbnB1dFwiPlxuICAgICAgICAgIEhvbGRpbmcgUGVyaW9kIChNb250aHMpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiaG9sZGluZ1BlcmlvZElucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17aG9sZGluZ1BlcmlvZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEhvbGRpbmdQZXJpb2QoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwicGVyY2VudENoYW5nZUlucHV0XCIgaHRtbEZvcj1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiPlxuICAgICAgICAgIFBlcmNlbnQgQ2hhbmdlIGluIFRva2VuXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicGVyY2VudENoYW5nZUlucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17cGVyY2VudENoYW5nZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldFBlcmNlbnRDaGFuZ2UoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCIgaHRtbEZvcj1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiPlxuICAgICAgICAgIEluaXRpYWwgSW52ZXN0bWVudCBBbW91bnQgKERvbGxhcnMpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17aW5pdGlhbEludmVzdG1lbnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRJbml0aWFsSW52ZXN0bWVudChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIiBodG1sRm9yPVwibGV2ZXJhZ2VSYXRpb0lucHV0XCI+XG4gICAgICAgICAgQ3VycmVudCBMZXZlcmFnZSBSYXRpb25cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtsZXZlcmFnZVJhdGlvfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0TGV2ZXJhZ2VSYXRpbyhlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuQ2FsY3VsYXRvci5wcm9wVHlwZXMgPSB7XG4gIHRva2VuOiBzdHJpbmcsXG4gIGZsaVRva2VuT3B0aW9uczogYXJyYXksXG4gIGhvbGRpbmdQZXJpb2Rpbk1vbnRoczogbnVtYmVyLFxuICBwZXJjZW50Q2hhbmdlOiBudW1iZXIsXG4gIGluaXRpYWxJbnZlc3RtZW50OiBudW1iZXIsXG4gIGxldmVyYWdlUmF0aW86IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});