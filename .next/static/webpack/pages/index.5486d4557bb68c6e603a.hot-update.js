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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return initialValue;\n    });\n  };\n};\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar calculateReturn = function calculateReturn(e) {};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var setToken = _reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy,\n      setInvestmentAmount = _reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment,\n      setLeverage = _reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio,\n      setPercentChange = _reducer__WEBPACK_IMPORTED_MODULE_3__.setTargetPercentChange,\n      setTimePeriod = _reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod;\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      tokenPrice = state.tokenPrice,\n      percentChange = state.targetPercentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    var roi = (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.onCalculateRoi)({\n      investment: initialInvestment,\n      percentChange: percentChange,\n      ethPrice: tokenPrice\n    });\n    console.log({\n      fliTokenStrategy: fliTokenStrategy,\n      initialInvestment: initialInvestment,\n      holdingPeriod: holdingPeriod,\n      targetPercentChange: percentChange\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: calculateReturn,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"tokenPrice\",\n        htmlFor: \"tokenPrice\",\n        children: \"Token Price\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"tokenPrice\",\n        type: \"number\",\n        value: tokenPrice,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setTokenPrice)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: percentChange,\n        onChange: function onChange(e) {\n          return dispatch(setPercentChange(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: initialInvestment,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: function onChange(e) {\n          return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio)(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJzZXR0ZXIiLCJzZXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjYWxjdWxhdGVSZXR1cm4iLCJDYWxjdWxhdG9yIiwiZmxpSW5kZXhMb2dvIiwiaW5pdGlhbEZsaVRva2VuIiwiZmxpVG9rZW5PcHRpb25zIiwiaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyIsImluaXRpYWxQZXJjZW50Q2hhbmdlIiwiaW5pdGlhbEludmVzdG1lbnRBbW91bnQiLCJpbml0aWFsTGV2ZXJhZ2VSYXRpbyIsImhhbmRsZVN1Ym1pdCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInNldFRva2VuIiwic2V0RmxpVG9rZW5TdHJhdGVneSIsInNldEludmVzdG1lbnRBbW91bnQiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldExldmVyYWdlIiwic2V0TGV2ZXJhZ2VSYXRpbyIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRUYXJnZXRQZXJjZW50Q2hhbmdlIiwic2V0VGltZVBlcmlvZCIsInNldEhvbGRpbmdQZXJpb2QiLCJmbGlUb2tlblN0cmF0ZWd5IiwiaW5pdGlhbEludmVzdG1lbnQiLCJsZXZlcmFnZVJhdGlvIiwidG9rZW5QcmljZSIsInBlcmNlbnRDaGFuZ2UiLCJ0YXJnZXRQZXJjZW50Q2hhbmdlIiwiaG9sZGluZ1BlcmlvZCIsInByZXZlbnREZWZhdWx0Iiwicm9pIiwib25DYWxjdWxhdGVSb2kiLCJpbnZlc3RtZW50IiwiZXRoUHJpY2UiLCJjb25zb2xlIiwibG9nIiwic2V0VG9rZW5QcmljZSIsInByb3BUeXBlcyIsInRva2VuIiwic3RyaW5nIiwiYXJyYXkiLCJob2xkaW5nUGVyaW9kaW5Nb250aHMiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUNYLFNBRElBLE9BQ0o7QUFBQSxvQ0FBSUMsR0FBSjtBQUFJQSxPQUFKO0FBQUE7O0FBQUEsU0FDQSxVQUFDQyxZQUFEO0FBQUEsV0FDRUQsR0FBRyxDQUFDRSxXQUFKLENBQWdCLFVBQUNDLEdBQUQsRUFBTUMsRUFBTjtBQUFBLGFBQWFILFlBQWI7QUFBQSxLQUFoQixDQURGO0FBQUEsR0FEQTtBQUFBLENBREY7O0FBSUE7O0FBVUEsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRDtBQUFBLFNBQVMsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsUUFDckJDLE1BRHFCLEdBQ1ZELENBRFUsQ0FDckJDLE1BRHFCO0FBQUEsUUFFckJDLEtBRnFCLEdBRVhELE1BRlcsQ0FFckJDLEtBRnFCO0FBRzdCSCxPQUFHLENBQUNHLEtBQUQsQ0FBSDtBQUNELEdBSmM7QUFBQSxDQUFmOztBQU1BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0gsQ0FBRCxFQUFPLENBQUUsQ0FBakM7O0FBRUEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FTYjtBQUFBOztBQUFBLCtCQVJKQyxZQVFJO0FBQUEsTUFSSkEsWUFRSSxrQ0FSVyxnRUFRWDtBQUFBLGtDQVBKQyxlQU9JO0FBQUEsTUFQSkEsZUFPSSxxQ0FQYyxLQU9kO0FBQUEsa0NBTkpDLGVBTUk7QUFBQSxNQU5KQSxlQU1JLHFDQU5jLEVBTWQ7QUFBQSxtQ0FMSkMsNEJBS0k7QUFBQSxNQUxKQSw0QkFLSSxzQ0FMMkIsQ0FLM0I7QUFBQSxtQ0FKSkMsb0JBSUk7QUFBQSxNQUpKQSxvQkFJSSxzQ0FKbUIsRUFJbkI7QUFBQSxtQ0FISkMsdUJBR0k7QUFBQSxNQUhKQSx1QkFHSSxzQ0FIc0IsR0FHdEI7QUFBQSxtQ0FGSkMsb0JBRUk7QUFBQSxNQUZKQSxvQkFFSSxzQ0FGbUIsQ0FFbkI7QUFBQSxNQURKQyxZQUNJLFFBREpBLFlBQ0k7O0FBQUEsb0JBQ3NCQyxpREFBVSxDQUFDQyw2Q0FBRCxFQUFVQSxpREFBTyxFQUFqQixDQURoQztBQUFBLE1BQ0dDLEtBREg7QUFBQSxNQUNVQyxRQURWOztBQUFBLE1BR0ZDLFFBSEUsR0FTRkMseURBVEU7QUFBQSxNQUlGQyxtQkFKRSxHQVVGQywwREFWRTtBQUFBLE1BS0ZDLFdBTEUsR0FXRkMsc0RBWEU7QUFBQSxNQU1GQyxnQkFORSxHQVlGQyw0REFaRTtBQUFBLE1BT0ZDLGFBUEUsR0FhRkMsc0RBYkU7QUFBQSxNQWlCRkMsZ0JBakJFLEdBdUJBWixLQXZCQSxDQWlCRlksZ0JBakJFO0FBQUEsTUFrQkZDLGlCQWxCRSxHQXVCQWIsS0F2QkEsQ0FrQkZhLGlCQWxCRTtBQUFBLE1BbUJGQyxhQW5CRSxHQXVCQWQsS0F2QkEsQ0FtQkZjLGFBbkJFO0FBQUEsTUFvQkZDLFVBcEJFLEdBdUJBZixLQXZCQSxDQW9CRmUsVUFwQkU7QUFBQSxNQXFCbUJDLGFBckJuQixHQXVCQWhCLEtBdkJBLENBcUJGaUIsbUJBckJFO0FBQUEsTUFzQkZDLGFBdEJFLEdBdUJBbEIsS0F2QkEsQ0FzQkZrQixhQXRCRTs7QUF3QkosTUFBTTlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0gsQ0FBRCxFQUFPO0FBQzdCQSxLQUFDLENBQUNrQyxjQUFGO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQyx3REFBYyxDQUFDO0FBQ3pCQyxnQkFBVSxFQUFFVCxpQkFEYTtBQUV6QkcsbUJBQWEsRUFBYkEsYUFGeUI7QUFHekJPLGNBQVEsRUFBRVI7QUFIZSxLQUFELENBQTFCO0FBS0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQ1ZiLHNCQUFnQixFQUFoQkEsZ0JBRFU7QUFFVkMsdUJBQWlCLEVBQWpCQSxpQkFGVTtBQUdWSyxtQkFBYSxFQUFiQSxhQUhVO0FBSVZELHlCQUFtQixFQUFFRDtBQUpYLEtBQVo7QUFNRCxHQWJEOztBQWNBLHNCQUNFO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQTZCLFlBQVEsRUFBRTVCLGVBQXZDO0FBQUEsNEJBQ0U7QUFBQSxxREFDcUI7QUFBSyxXQUFHLEVBQUVFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLGVBQU8sRUFBQyxVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFDRSxVQUFFLEVBQUMsVUFETDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFc0IsZ0JBSFQ7QUFJRSxnQkFBUSxFQUFFLGtCQUFDM0IsQ0FBRDtBQUFBLGlCQUFPZ0IsUUFBUSxDQUFDRSw2REFBbUIsQ0FBQ2xCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCLENBQWY7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQWVFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFPLFlBQUksRUFBQyxZQUFaO0FBQXlCLGVBQU8sRUFBQyxZQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFDRSxVQUFFLEVBQUMsWUFETDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFNEIsVUFIVDtBQUlFLGdCQUFRLEVBQUUsa0JBQUM5QixDQUFEO0FBQUEsaUJBQU9nQixRQUFRLENBQUN5Qix1REFBYSxDQUFDekMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZCxDQUFmO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkYsZUEwQkU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLG9CQUFaO0FBQWlDLGVBQU8sRUFBQyxvQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQ0UsVUFBRSxFQUFDLG9CQURMO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxhQUFLLEVBQUUrQixhQUhUO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQ2pDLENBQUQ7QUFBQSxpQkFBT2dCLFFBQVEsQ0FBQ1UsMERBQWdCLENBQUMxQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFqQixDQUFmO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBcUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFPLFlBQUksRUFBQyxvQkFBWjtBQUFpQyxlQUFPLEVBQUMsb0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUNFLFVBQUUsRUFBQyxvQkFETDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFNkIsYUFIVDtBQUlFLGdCQUFRLEVBQUUsa0JBQUMvQixDQUFEO0FBQUEsaUJBQU9nQixRQUFRLENBQUNPLGdCQUFnQixDQUFDdkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakIsQ0FBZjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJDRixlQWdERTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0U7QUFBTyxZQUFJLEVBQUMsdUJBQVo7QUFBb0MsZUFBTyxFQUFDLHVCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFDRSxVQUFFLEVBQUMsdUJBREw7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGFBQUssRUFBRTBCLGlCQUhUO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQzVCLENBQUQ7QUFBQSxpQkFBT2dCLFFBQVEsQ0FBQ0ksOERBQW9CLENBQUNwQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQixDQUFmO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaERGLGVBMkRFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFPLFlBQUksRUFBQyxvQkFBWjtBQUFpQyxlQUFPLEVBQUMsb0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUNFLFVBQUUsRUFBQyxvQkFETDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFMkIsYUFIVDtBQUlFLGdCQUFRLEVBQUUsa0JBQUM3QixDQUFEO0FBQUEsaUJBQU9nQixRQUFRLENBQUNNLDBEQUFnQixDQUFDdEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakIsQ0FBZjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNERixlQXNFRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEVELENBekhEOztHQUFNRSxVOztLQUFBQSxVO0FBMkhOQSxVQUFVLENBQUNzQyxTQUFYLEdBQXVCO0FBQ3JCQyxPQUFLLEVBQUVDLDhDQURjO0FBRXJCckMsaUJBQWUsRUFBRXNDLDZDQUZJO0FBR3JCQyx1QkFBcUIsRUFBRUMsOENBSEY7QUFJckJoQixlQUFhLEVBQUVnQiw4Q0FKTTtBQUtyQm5CLG1CQUFpQixFQUFFbUIsOENBTEU7QUFNckJsQixlQUFhLEVBQUVrQiw4Q0FBTUE7QUFOQSxDQUF2QjtBQVNBLCtEQUFlM0MsVUFBZiIsImZpbGUiOiIuL3NvdXJjZS9mZWF0dXJlcy9DYWxjdWxhdG9yL2NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgYXJyYXksIG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGNvbXBvc2UgPVxuICAoLi4uZm5zKSA9PlxuICAoaW5pdGlhbFZhbHVlKSA9PlxuICAgIGZucy5yZWR1Y2VSaWdodCgodmFsLCBmbikgPT4gaW5pdGlhbFZhbHVlKVxuaW1wb3J0IHtcbiAgcmVkdWNlcixcbiAgc2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgc2V0VG9rZW5QcmljZSxcbiAgc2V0VGFyZ2V0UGVyY2VudENoYW5nZSxcbiAgc2V0TGV2ZXJhZ2VSYXRpbyxcbiAgc2V0SG9sZGluZ1BlcmlvZCxcbiAgc2V0SW5pdGlhbEludmVzdG1lbnQsXG4gIG9uQ2FsY3VsYXRlUm9pXG59IGZyb20gJy4vcmVkdWNlcidcbmNvbnN0IHNldHRlciA9IChzZXQpID0+IChlKSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlXG4gIGNvbnN0IHsgdmFsdWUgfSA9IHRhcmdldFxuICBzZXQodmFsdWUpXG59XG5cbmNvbnN0IGNhbGN1bGF0ZVJldHVybiA9IChlKSA9PiB7fVxuXG5jb25zdCBDYWxjdWxhdG9yID0gKHtcbiAgZmxpSW5kZXhMb2dvID0gJ2h0dHBzOi8vc2V0LWNvcmUuczMuYW1hem9uYXdzLmNvbS9pbWcvcG9ydGZvbGlvcy9ldGgyeF9mbGkuc3ZnJyxcbiAgaW5pdGlhbEZsaVRva2VuID0gJ0VUSCcsXG4gIGZsaVRva2VuT3B0aW9ucyA9IFtdLFxuICBpbml0aWFsSG9sZGluZ1BlcmlvZEluTW9udGhzID0gMixcbiAgaW5pdGlhbFBlcmNlbnRDaGFuZ2UgPSAxMCxcbiAgaW5pdGlhbEludmVzdG1lbnRBbW91bnQgPSAxMDAsXG4gIGluaXRpYWxMZXZlcmFnZVJhdGlvID0gMCxcbiAgaGFuZGxlU3VibWl0XG59KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCByZWR1Y2VyKCkpXG4gIGNvbnN0IFtcbiAgICBzZXRUb2tlbixcbiAgICBzZXRJbnZlc3RtZW50QW1vdW50LFxuICAgIHNldExldmVyYWdlLFxuICAgIHNldFBlcmNlbnRDaGFuZ2UsXG4gICAgc2V0VGltZVBlcmlvZFxuICBdID0gW1xuICAgIHNldEZsaVRva2VuU3RyYXRlZ3ksXG4gICAgc2V0SW5pdGlhbEludmVzdG1lbnQsXG4gICAgc2V0TGV2ZXJhZ2VSYXRpbyxcbiAgICBzZXRUYXJnZXRQZXJjZW50Q2hhbmdlLFxuICAgIHNldEhvbGRpbmdQZXJpb2RcbiAgXVxuXG4gIGNvbnN0IHtcbiAgICBmbGlUb2tlblN0cmF0ZWd5LFxuICAgIGluaXRpYWxJbnZlc3RtZW50LFxuICAgIGxldmVyYWdlUmF0aW8sXG4gICAgdG9rZW5QcmljZSxcbiAgICB0YXJnZXRQZXJjZW50Q2hhbmdlOiBwZXJjZW50Q2hhbmdlLFxuICAgIGhvbGRpbmdQZXJpb2RcbiAgfSA9IHN0YXRlXG4gIGNvbnN0IGNhbGN1bGF0ZVJldHVybiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3Qgcm9pID0gb25DYWxjdWxhdGVSb2koe1xuICAgICAgaW52ZXN0bWVudDogaW5pdGlhbEludmVzdG1lbnQsXG4gICAgICBwZXJjZW50Q2hhbmdlLFxuICAgICAgZXRoUHJpY2U6IHRva2VuUHJpY2VcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIGZsaVRva2VuU3RyYXRlZ3ksXG4gICAgICBpbml0aWFsSW52ZXN0bWVudCxcbiAgICAgIGhvbGRpbmdQZXJpb2QsXG4gICAgICB0YXJnZXRQZXJjZW50Q2hhbmdlOiBwZXJjZW50Q2hhbmdlXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhbGN1bGF0b3JcIiBvblN1Ym1pdD17Y2FsY3VsYXRlUmV0dXJufT5cbiAgICAgIDxoMj5cbiAgICAgICAgRVRIIEZMWSBDYWxjdWxhdG9yIDxpbWcgc3JjPXtmbGlJbmRleExvZ299IC8+XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwiZmxpVG9rZW5cIiBodG1sRm9yPVwiZmxpVG9rZW5cIj5cbiAgICAgICAgICBGTEkgVG9rZW5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJmbGlUb2tlblwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e2ZsaVRva2VuU3RyYXRlZ3l9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRGbGlUb2tlblN0cmF0ZWd5KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cInRva2VuUHJpY2VcIiBodG1sRm9yPVwidG9rZW5QcmljZVwiPlxuICAgICAgICAgIFRva2VuIFByaWNlXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwidG9rZW5QcmljZVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e3Rva2VuUHJpY2V9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRUb2tlblByaWNlKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImhvbGRpbmdQZXJpb2RJbnB1dFwiIGh0bWxGb3I9XCJob2xkaW5nUGVyaW9kSW5wdXRcIj5cbiAgICAgICAgICBIb2xkaW5nIFBlcmlvZCAoTW9udGhzKVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImhvbGRpbmdQZXJpb2RJbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2hvbGRpbmdQZXJpb2R9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRIb2xkaW5nUGVyaW9kKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiIGh0bWxGb3I9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIj5cbiAgICAgICAgICBQZXJjZW50IENoYW5nZSBpbiBUb2tlblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e3BlcmNlbnRDaGFuZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRQZXJjZW50Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiIGh0bWxGb3I9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIj5cbiAgICAgICAgICBJbml0aWFsIEludmVzdG1lbnQgQW1vdW50IChEb2xsYXJzKVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2luaXRpYWxJbnZlc3RtZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0SW5pdGlhbEludmVzdG1lbnQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwibGV2ZXJhZ2VSYXRpb0lucHV0XCIgaHRtbEZvcj1cImxldmVyYWdlUmF0aW9JbnB1dFwiPlxuICAgICAgICAgIEN1cnJlbnQgTGV2ZXJhZ2UgUmF0aW9uXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwibGV2ZXJhZ2VSYXRpb0lucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17bGV2ZXJhZ2VSYXRpb31cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldExldmVyYWdlUmF0aW8oZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbkNhbGN1bGF0b3IucHJvcFR5cGVzID0ge1xuICB0b2tlbjogc3RyaW5nLFxuICBmbGlUb2tlbk9wdGlvbnM6IGFycmF5LFxuICBob2xkaW5nUGVyaW9kaW5Nb250aHM6IG51bWJlcixcbiAgcGVyY2VudENoYW5nZTogbnVtYmVyLFxuICBpbml0aWFsSW52ZXN0bWVudDogbnVtYmVyLFxuICBsZXZlcmFnZVJhdGlvOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});