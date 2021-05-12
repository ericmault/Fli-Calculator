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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return initialValue;\n    });\n  };\n};\n\n\n\nvar getInputValue = function getInputValue(setter) {\n  return function (event) {\n    var value = event.target.value;\n    return setter(value);\n  };\n};\n\nvar toNumber = function toNumber(x) {\n  return Number(x);\n};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var setter = function setter(set) {\n    return function (e) {\n      var target = e.target;\n      var value = target.value;\n      set(value);\n    };\n  };\n\n  var dispatchSetter = function dispatchSetter(fn) {\n    return function (e) {\n      return dispatch(fn(e.target.value));\n    };\n  };\n\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      tokenPrice = state.tokenPrice,\n      percentChange = state.targetPercentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    var roi = (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.onCalculateRoi)({\n      investment: initialInvestment,\n      percentChange: percentChange,\n      ethPrice: tokenPrice,\n      ratio: leverageRatio\n    });\n    console.log({\n      roi: roi,\n      fliTokenStrategy: fliTokenStrategy,\n      initialInvestment: initialInvestment,\n      holdingPeriod: holdingPeriod,\n      targetPercentChange: percentChange\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: calculateReturn,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: dispatchSetter(_reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"tokenPrice\",\n        htmlFor: \"tokenPrice\",\n        children: \"Token Price\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"tokenPrice\",\n        type: \"number\",\n        value: tokenPrice,\n        onChange: dispatchSetter(_reducer__WEBPACK_IMPORTED_MODULE_3__.setTokenPrice)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: dispatchSetter(_reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: percentChange,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setPercentChange)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: initialInvestment,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJnZXRJbnB1dFZhbHVlIiwic2V0dGVyIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInRvTnVtYmVyIiwieCIsIk51bWJlciIsIkNhbGN1bGF0b3IiLCJmbGlJbmRleExvZ28iLCJpbml0aWFsRmxpVG9rZW4iLCJmbGlUb2tlbk9wdGlvbnMiLCJpbml0aWFsSG9sZGluZ1BlcmlvZEluTW9udGhzIiwiaW5pdGlhbFBlcmNlbnRDaGFuZ2UiLCJpbml0aWFsSW52ZXN0bWVudEFtb3VudCIsImluaXRpYWxMZXZlcmFnZVJhdGlvIiwiaGFuZGxlU3VibWl0IiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2V0IiwiZSIsImRpc3BhdGNoU2V0dGVyIiwiZmxpVG9rZW5TdHJhdGVneSIsImluaXRpYWxJbnZlc3RtZW50IiwibGV2ZXJhZ2VSYXRpbyIsInRva2VuUHJpY2UiLCJwZXJjZW50Q2hhbmdlIiwidGFyZ2V0UGVyY2VudENoYW5nZSIsImhvbGRpbmdQZXJpb2QiLCJjYWxjdWxhdGVSZXR1cm4iLCJwcmV2ZW50RGVmYXVsdCIsInJvaSIsIm9uQ2FsY3VsYXRlUm9pIiwiaW52ZXN0bWVudCIsImV0aFByaWNlIiwicmF0aW8iLCJjb25zb2xlIiwibG9nIiwic2V0RmxpVG9rZW5TdHJhdGVneSIsInNldFRva2VuUHJpY2UiLCJzZXRIb2xkaW5nUGVyaW9kIiwic2V0UGVyY2VudENoYW5nZSIsInNldEluaXRpYWxJbnZlc3RtZW50Iiwic2V0TGV2ZXJhZ2VSYXRpbyIsInByb3BUeXBlcyIsInRva2VuIiwic3RyaW5nIiwiYXJyYXkiLCJob2xkaW5nUGVyaW9kaW5Nb250aHMiLCJudW1iZXIiXSwibWFw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QUFTRCxLQUFWLENBQXJCLENBQWY7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoREYsZUEyREU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLG9CQUFaO0FBQWlDLGVBQU8sRUFBQyxvQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQ0UsVUFBRSxFQUFDLG9CQURMO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxhQUFLLEVBQUV1QixhQUhUO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQ0osQ0FBRDtBQUFBLGlCQUFPRixRQUFRLENBQUN5QiwwREFBZ0IsQ0FBQ3ZCLENBQUMsQ0FBQ2xCLE1BQUYsQ0FBU0QsS0FBVixDQUFqQixDQUFmO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0RGLGVBc0VFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwRUQsQ0FwSEQ7O0dBQU1LLFU7O0tBQUFBLFU7QUFzSE5BLFVBQVUsQ0FBQ3NDLFNBQVgsR0FBdUI7QUFDckJDLE9BQUssRUFBRUMsOENBRGM7QUFFckJyQyxpQkFBZSxFQUFFc0MsNkNBRkk7QUFHckJDLHVCQUFxQixFQUFFQyw4Q0FIRjtBQUlyQnZCLGVBQWEsRUFBRXVCLDhDQUpNO0FBS3JCMUIsbUJBQWlCLEVBQUUwQiw4Q0FMRTtBQU1yQnpCLGVBQWEsRUFBRXlCLDhDQUFNQTtBQU5BLENBQXZCO0FBU0EsK0RBQWUzQyxVQUFmIiwiZmlsZSI6Ii4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5nLCBhcnJheSwgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgY29tcG9zZSA9XG4gICguLi5mbnMpID0+XG4gIChpbml0aWFsVmFsdWUpID0+XG4gICAgZm5zLnJlZHVjZVJpZ2h0KCh2YWwsIGZuKSA9PiBpbml0aWFsVmFsdWUpXG5pbXBvcnQge1xuICByZWR1Y2VyLFxuICBzZXRGbGlUb2tlblN0cmF0ZWd5LFxuICBzZXRUb2tlblByaWNlLFxuICBzZXRUYXJnZXRQZXJjZW50Q2hhbmdlLFxuICBzZXRMZXZlcmFnZVJhdGlvLFxuICBzZXRQZXJjZW50Q2hhbmdlLFxuICBzZXRIb2xkaW5nUGVyaW9kLFxuICBzZXRJbml0aWFsSW52ZXN0bWVudCxcbiAgb25DYWxjdWxhdGVSb2lcbn0gZnJvbSAnLi9yZWR1Y2VyJ1xuXG5jb25zdCBnZXRJbnB1dFZhbHVlID0gKHNldHRlcikgPT4gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICByZXR1cm4gc2V0dGVyKHZhbHVlKVxufVxuXG5jb25zdCB0b051bWJlciA9ICh4KSA9PiBOdW1iZXIoeClcblxuY29uc3QgQ2FsY3VsYXRvciA9ICh7XG4gIGZsaUluZGV4TG9nbyA9ICdodHRwczovL3NldC1jb3JlLnMzLmFtYXpvbmF3cy5jb20vaW1nL3BvcnRmb2xpb3MvZXRoMnhfZmxpLnN2ZycsXG4gIGluaXRpYWxGbGlUb2tlbiA9ICdFVEgnLFxuICBmbGlUb2tlbk9wdGlvbnMgPSBbXSxcbiAgaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyA9IDIsXG4gIGluaXRpYWxQZXJjZW50Q2hhbmdlID0gMTAsXG4gIGluaXRpYWxJbnZlc3RtZW50QW1vdW50ID0gMTAwLFxuICBpbml0aWFsTGV2ZXJhZ2VSYXRpbyA9IDAsXG4gIGhhbmRsZVN1Ym1pdFxufSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgcmVkdWNlcigpKVxuICBjb25zdCBzZXR0ZXIgPSAoc2V0KSA9PiAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGFyZ2V0XG4gICAgc2V0KHZhbHVlKVxuICB9XG4gIGNvbnN0IGRpc3BhdGNoU2V0dGVyID0gKGZuKSA9PiAoZSkgPT4gZGlzcGF0Y2goZm4oZS50YXJnZXQudmFsdWUpKVxuXG4gIGNvbnN0IHtcbiAgICBmbGlUb2tlblN0cmF0ZWd5LFxuICAgIGluaXRpYWxJbnZlc3RtZW50LFxuICAgIGxldmVyYWdlUmF0aW8sXG4gICAgdG9rZW5QcmljZSxcbiAgICB0YXJnZXRQZXJjZW50Q2hhbmdlOiBwZXJjZW50Q2hhbmdlLFxuICAgIGhvbGRpbmdQZXJpb2RcbiAgfSA9IHN0YXRlXG4gIGNvbnN0IGNhbGN1bGF0ZVJldHVybiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3Qgcm9pID0gb25DYWxjdWxhdGVSb2koe1xuICAgICAgaW52ZXN0bWVudDogaW5pdGlhbEludmVzdG1lbnQsXG4gICAgICBwZXJjZW50Q2hhbmdlLFxuICAgICAgZXRoUHJpY2U6IHRva2VuUHJpY2UsXG4gICAgICByYXRpbzogbGV2ZXJhZ2VSYXRpb1xuICAgIH0pXG4gICAgY29uc29sZS5sb2coe1xuICAgICAgcm9pLFxuICAgICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICAgIGluaXRpYWxJbnZlc3RtZW50LFxuICAgICAgaG9sZGluZ1BlcmlvZCxcbiAgICAgIHRhcmdldFBlcmNlbnRDaGFuZ2U6IHBlcmNlbnRDaGFuZ2VcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiY2FsY3VsYXRvclwiIG9uU3VibWl0PXtjYWxjdWxhdGVSZXR1cm59PlxuICAgICAgPGgyPlxuICAgICAgICBFVEggRkxZIENhbGN1bGF0b3IgPGltZyBzcmM9e2ZsaUluZGV4TG9nb30gLz5cbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJmbGlUb2tlblwiIGh0bWxGb3I9XCJmbGlUb2tlblwiPlxuICAgICAgICAgIEZMSSBUb2tlblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImZsaVRva2VuXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17ZmxpVG9rZW5TdHJhdGVneX1cbiAgICAgICAgICBvbkNoYW5nZT17ZGlzcGF0Y2hTZXR0ZXIoc2V0RmxpVG9rZW5TdHJhdGVneSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cInRva2VuUHJpY2VcIiBodG1sRm9yPVwidG9rZW5QcmljZVwiPlxuICAgICAgICAgIFRva2VuIFByaWNlXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwidG9rZW5QcmljZVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e3Rva2VuUHJpY2V9XG4gICAgICAgICAgb25DaGFuZ2U9e2Rpc3BhdGNoU2V0dGVyKHNldFRva2VuUHJpY2UpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJob2xkaW5nUGVyaW9kSW5wdXRcIiBodG1sRm9yPVwiaG9sZGluZ1BlcmlvZElucHV0XCI+XG4gICAgICAgICAgSG9sZGluZyBQZXJpb2QgKE1vbnRocylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJob2xkaW5nUGVyaW9kSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtob2xkaW5nUGVyaW9kfVxuICAgICAgICAgIG9uQ2hhbmdlPXtkaXNwYXRjaFNldHRlcihzZXRIb2xkaW5nUGVyaW9kKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwicGVyY2VudENoYW5nZUlucHV0XCIgaHRtbEZvcj1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiPlxuICAgICAgICAgIFBlcmNlbnQgQ2hhbmdlIGluIFRva2VuXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicGVyY2VudENoYW5nZUlucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17cGVyY2VudENoYW5nZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldFBlcmNlbnRDaGFuZ2UoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCIgaHRtbEZvcj1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiPlxuICAgICAgICAgIEluaXRpYWwgSW52ZXN0bWVudCBBbW91bnQgKERvbGxhcnMpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17aW5pdGlhbEludmVzdG1lbnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRJbml0aWFsSW52ZXN0bWVudChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIiBodG1sRm9yPVwibGV2ZXJhZ2VSYXRpb0lucHV0XCI+XG4gICAgICAgICAgQ3VycmVudCBMZXZlcmFnZSBSYXRpb25cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtsZXZlcmFnZVJhdGlvfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0TGV2ZXJhZ2VSYXRpbyhlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuQ2FsY3VsYXRvci5wcm9wVHlwZXMgPSB7XG4gIHRva2VuOiBzdHJpbmcsXG4gIGZsaVRva2VuT3B0aW9uczogYXJyYXksXG4gIGhvbGRpbmdQZXJpb2Rpbk1vbnRoczogbnVtYmVyLFxuICBwZXJjZW50Q2hhbmdlOiBudW1iZXIsXG4gIGluaXRpYWxJbnZlc3RtZW50OiBudW1iZXIsXG4gIGxldmVyYWdlUmF0aW86IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});