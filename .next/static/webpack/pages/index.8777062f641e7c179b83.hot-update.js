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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar calculateReturn = function calculateReturn(e) {};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _map = [_reducer__WEBPACK_IMPORTED_MODULE_4__.setFliTokenStrategy, _reducer__WEBPACK_IMPORTED_MODULE_4__.setInitialInvestment, _reducer__WEBPACK_IMPORTED_MODULE_4__.setLeverageRatio, _reducer__WEBPACK_IMPORTED_MODULE_4__.setTargetPercentChange, _reducer__WEBPACK_IMPORTED_MODULE_4__.setHoldingPeriod].map(dispatch),\n      _map2 = (0,_Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_map, 5),\n      setToken = _map2[0],\n      setInvestmentAmount = _map2[1],\n      setLeverage = _map2[2],\n      setPercentChange = _map2[3],\n      setTimePeriod = _map2[4];\n\n  var fliTokenStrategy = state.fliTokenStrategy,\n      investmentAmount = state.investmentAmount,\n      leverageRatio = state.leverageRatio,\n      targetPercentChange = state.targetPercentChange,\n      holdingPeriod = state.holdingPeriod;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: setToken\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: setPercentChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: investmentAmount,\n        onChange: _reducer__WEBPACK_IMPORTED_MODULE_4__.setInvestment\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: investmentAmount,\n        onChange: setter(setInvestmentAmount)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: setter(se)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_2__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_2__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsic2V0dGVyIiwic2V0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2FsY3VsYXRlUmV0dXJuIiwiQ2FsY3VsYXRvciIsImZsaUluZGV4TG9nbyIsImluaXRpYWxGbGlUb2tlbiIsImZsaVRva2VuT3B0aW9ucyIsImluaXRpYWxIb2xkaW5nUGVyaW9kSW5Nb250aHMiLCJpbml0aWFsUGVyY2VudENoYW5nZSIsImluaXRpYWxJbnZlc3RtZW50QW1vdW50IiwiaW5pdGlhbExldmVyYWdlUmF0aW8iLCJoYW5kbGVTdWJtaXQiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJzZXRGbGlUb2tlblN0cmF0ZWd5Iiwic2V0SW5pdGlhbEludmVzdG1lbnQiLCJzZXRMZXZlcmFnZVJhdGlvIiwic2V0VGFyZ2V0UGVyY2VudENoYW5nZSIsInNldEhvbGRpbmdQZXJpb2QiLCJtYXAiLCJzZXRUb2tlbiIsInNldEludmVzdG1lbnRBbW91bnQiLCJzZXRMZXZlcmFnZSIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRUaW1lUGVyaW9kIiwiZmxpVG9rZW5TdHJhdGVneSIsImludmVzdG1lbnRBbW91bnQiLCJsZXZlcmFnZVJhdGlvIiwidGFyZ2V0UGVyY2VudENoYW5nZSIsImhvbGRpbmdQZXJpb2QiLCJzZXRJbnZlc3RtZW50Iiwic2UiLCJwcm9wVHlwZXMiLCJ0b2tlbiIsInN0cmluZyIsImFycmF5IiwiaG9sZGluZ1BlcmlvZGluTW9udGhzIiwibnVtYmVyIiwicGVyY2VudENoYW5nZSIsImluaXRpYWxJbnZlc3RtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDQyxDQUFE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K0RELENBL0ZEOztHQUFNOUIsVTs7S0FBQUEsVTtBQWlHTkEsVUFBVSxDQUFDK0IsU0FBWCxHQUF1QjtBQUNyQkMsT0FBSyxFQUFFQyw4Q0FEYztBQUVyQjlCLGlCQUFlLEVBQUUrQiw2Q0FGSTtBQUdyQkMsdUJBQXFCLEVBQUVDLDhDQUhGO0FBSXJCQyxlQUFhLEVBQUVELDhDQUpNO0FBS3JCRSxtQkFBaUIsRUFBRUYsOENBTEU7QUFNckJWLGVBQWEsRUFBRVUsOENBQU1BO0FBTkEsQ0FBdkI7QUFTQSwrREFBZXBDLFVBQWYiLCJmaWxlIjoiLi9zb3VyY2UvZmVhdHVyZXMvQ2FsY3VsYXRvci9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGFycmF5LCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVkdWNlcixcbiAgc2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgc2V0SW52ZXN0bWVudCxcbiAgc2V0VGFyZ2V0UGVyY2VudENoYW5nZSxcbiAgc2V0TGV2ZXJhZ2VSYXRpbyxcbiAgc2V0SG9sZGluZ1BlcmlvZCxcbiAgc2V0SW5pdGlhbEludmVzdG1lbnRcbn0gZnJvbSAnLi9yZWR1Y2VyJ1xuY29uc3Qgc2V0dGVyID0gKHNldCkgPT4gKGUpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGVcbiAgY29uc3QgeyB2YWx1ZSB9ID0gdGFyZ2V0XG4gIHNldCh2YWx1ZSlcbn1cblxuY29uc3QgY2FsY3VsYXRlUmV0dXJuID0gKGUpID0+IHt9XG5cbmNvbnN0IENhbGN1bGF0b3IgPSAoe1xuICBmbGlJbmRleExvZ28gPSAnaHR0cHM6Ly9zZXQtY29yZS5zMy5hbWF6b25hd3MuY29tL2ltZy9wb3J0Zm9saW9zL2V0aDJ4X2ZsaS5zdmcnLFxuICBpbml0aWFsRmxpVG9rZW4gPSAnRVRIJyxcbiAgZmxpVG9rZW5PcHRpb25zID0gW10sXG4gIGluaXRpYWxIb2xkaW5nUGVyaW9kSW5Nb250aHMgPSAyLFxuICBpbml0aWFsUGVyY2VudENoYW5nZSA9IDEwLFxuICBpbml0aWFsSW52ZXN0bWVudEFtb3VudCA9IDEwMCxcbiAgaW5pdGlhbExldmVyYWdlUmF0aW8gPSAwLFxuICBoYW5kbGVTdWJtaXRcbn0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHJlZHVjZXIoKSlcbiAgY29uc3QgW1xuICAgIHNldFRva2VuLFxuICAgIHNldEludmVzdG1lbnRBbW91bnQsXG4gICAgc2V0TGV2ZXJhZ2UsXG4gICAgc2V0UGVyY2VudENoYW5nZSxcbiAgICBzZXRUaW1lUGVyaW9kXG4gIF0gPSBbXG4gICAgc2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgICBzZXRJbml0aWFsSW52ZXN0bWVudCxcbiAgICBzZXRMZXZlcmFnZVJhdGlvLFxuICAgIHNldFRhcmdldFBlcmNlbnRDaGFuZ2UsXG4gICAgc2V0SG9sZGluZ1BlcmlvZFxuICBdLm1hcChkaXNwYXRjaClcblxuICBjb25zdCB7XG4gICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICBpbnZlc3RtZW50QW1vdW50LFxuICAgIGxldmVyYWdlUmF0aW8sXG4gICAgdGFyZ2V0UGVyY2VudENoYW5nZSxcbiAgICBob2xkaW5nUGVyaW9kXG4gIH0gPSBzdGF0ZVxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhbGN1bGF0b3JcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMj5cbiAgICAgICAgRVRIIEZMWSBDYWxjdWxhdG9yIDxpbWcgc3JjPXtmbGlJbmRleExvZ299IC8+XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwiZmxpVG9rZW5cIiBodG1sRm9yPVwiZmxpVG9rZW5cIj5cbiAgICAgICAgICBGTEkgVG9rZW5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJmbGlUb2tlblwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e2ZsaVRva2VuU3RyYXRlZ3l9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldFRva2VufVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJob2xkaW5nUGVyaW9kSW5wdXRcIiBodG1sRm9yPVwiaG9sZGluZ1BlcmlvZElucHV0XCI+XG4gICAgICAgICAgSG9sZGluZyBQZXJpb2QgKE1vbnRocylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJob2xkaW5nUGVyaW9kSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtob2xkaW5nUGVyaW9kfVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRQZXJjZW50Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIiBodG1sRm9yPVwicGVyY2VudENoYW5nZUlucHV0XCI+XG4gICAgICAgICAgUGVyY2VudCBDaGFuZ2UgaW4gVG9rZW5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtpbnZlc3RtZW50QW1vdW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJbnZlc3RtZW50fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIiBodG1sRm9yPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCI+XG4gICAgICAgICAgSW5pdGlhbCBJbnZlc3RtZW50IEFtb3VudCAoRG9sbGFycylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtpbnZlc3RtZW50QW1vdW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXR0ZXIoc2V0SW52ZXN0bWVudEFtb3VudCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImxldmVyYWdlUmF0aW9JbnB1dFwiIGh0bWxGb3I9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIj5cbiAgICAgICAgICBDdXJyZW50IExldmVyYWdlIFJhdGlvblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImxldmVyYWdlUmF0aW9JbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2xldmVyYWdlUmF0aW99XG4gICAgICAgICAgb25DaGFuZ2U9e3NldHRlcihzZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5DYWxjdWxhdG9yLnByb3BUeXBlcyA9IHtcbiAgdG9rZW46IHN0cmluZyxcbiAgZmxpVG9rZW5PcHRpb25zOiBhcnJheSxcbiAgaG9sZGluZ1BlcmlvZGluTW9udGhzOiBudW1iZXIsXG4gIHBlcmNlbnRDaGFuZ2U6IG51bWJlcixcbiAgaW5pdGlhbEludmVzdG1lbnQ6IG51bWJlcixcbiAgbGV2ZXJhZ2VSYXRpbzogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});