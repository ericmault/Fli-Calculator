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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return initialValue;\n    });\n  };\n};\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar calculateReturn = function calculateReturn(e) {};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var setToken = _reducer__WEBPACK_IMPORTED_MODULE_3__.setFliTokenStrategy,\n      setInvestmentAmount = _reducer__WEBPACK_IMPORTED_MODULE_3__.setInitialInvestment,\n      setLeverage = _reducer__WEBPACK_IMPORTED_MODULE_3__.setLeverageRatio,\n      setPercentChange = _reducer__WEBPACK_IMPORTED_MODULE_3__.setTargetPercentChange,\n      setTimePeriod = _reducer__WEBPACK_IMPORTED_MODULE_3__.setHoldingPeriod;\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      percentChange = state.targetPercentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    console.log({\n      fliTokenStrategy: fliTokenStrategy,\n      initialInvestment: initialInvestment,\n      holdingPeriod: holdingPeriod,\n      targetPercentChange: percentChange\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: calculateReturn,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: function onChange(e) {\n          return dispatch(setToken(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: function onChange(e) {\n          return dispatch(setTimePeriod(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: percentChange,\n        onChange: function onChange(e) {\n          return dispatch(setPercentChange(e.target.value));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: investmentAmount,\n        onChange: function onChange(e) {\n          return dispatch(setInvestmentAmount);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: function onChange(e) {\n          return dispatch(setLeverage);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJzZXR0ZXIiLCJzZXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjYWxjdWxhdGVSZXR1cm4iLCJDYWxjdWxhdG9yIiwiZmxpSW5kZXhMb2dvIiwiaW5pdGlhbEZsaVRva2VuIiwiZmxpVG9rZW5PcHRpb25zIiwiaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyIsImluaXRpYWxQZXJjZW50Q2hhbmdlIiwiaW5pdGlhbEludmVzdG1lbnRBbW91bnQiLCJpbml0aWFsTGV2ZXJhZ2VSYXRpbyIsImhhbmRsZVN1Ym1pdCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInNldFRva2VuIiwic2V0RmxpVG9rZW5TdHJhdGVneSIsInNldEludmVzdG1lbnRBbW91bnQiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldExldmVyYWdlIiwic2V0TGV2ZXJhZ2VSYXRpbyIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRUYXJnZXRQZXJjZW50Q2hhbmdlIiwic2V0VGltZVBlcmlvZCIsInNldEhvbGRpbmdQZXJpb2QiLCJmbGlUb2tlblN0cmF0ZWd5IiwiaW5pdGlhbEludmVzdG1lbnQiLCJsZXZlcmFnZVJhdGlvIiwicGVyY2VudENoYW5nZSIsInRhcmdldFBlcmNlbnRDaGFuZ2UiLCJob2xkaW5nUGVyaW9kIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaW52ZXN0bWVudEFtb3VudCIsInByb3BUeXBlcyIsInRva2VuIiwic3RyaW5nIiwiYXJyYXkiLCJob2xkaW5nUGVyaW9kaW5Nb250aHMiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFB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SXJCWixlQUFhLEVBQUVZLDhDQUpNO0FBS3JCZCxtQkFBaUIsRUFBRWMsOENBTEU7QUFNckJiLGVBQWEsRUFBRWEsOENBQU1BO0FBTkEsQ0FBdkI7QUFTQSwrREFBZXRDLFVBQWYiLCJmaWxlIjoiLi9zb3VyY2UvZmVhdHVyZXMvQ2FsY3VsYXRvci9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGFycmF5LCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBjb21wb3NlID1cbiAgKC4uLmZucykgPT5cbiAgKGluaXRpYWxWYWx1ZSkgPT5cbiAgICBmbnMucmVkdWNlUmlnaHQoKHZhbCwgZm4pID0+IGluaXRpYWxWYWx1ZSlcbmltcG9ydCB7XG4gIHJlZHVjZXIsXG4gIHNldEZsaVRva2VuU3RyYXRlZ3ksXG4gIHNldEludmVzdG1lbnQsXG4gIHNldFRhcmdldFBlcmNlbnRDaGFuZ2UsXG4gIHNldExldmVyYWdlUmF0aW8sXG4gIHNldEhvbGRpbmdQZXJpb2QsXG4gIHNldEluaXRpYWxJbnZlc3RtZW50XG59IGZyb20gJy4vcmVkdWNlcidcbmNvbnN0IHNldHRlciA9IChzZXQpID0+IChlKSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlXG4gIGNvbnN0IHsgdmFsdWUgfSA9IHRhcmdldFxuICBzZXQodmFsdWUpXG59XG5cbmNvbnN0IGNhbGN1bGF0ZVJldHVybiA9IChlKSA9PiB7fVxuXG5jb25zdCBDYWxjdWxhdG9yID0gKHtcbiAgZmxpSW5kZXhMb2dvID0gJ2h0dHBzOi8vc2V0LWNvcmUuczMuYW1hem9uYXdzLmNvbS9pbWcvcG9ydGZvbGlvcy9ldGgyeF9mbGkuc3ZnJyxcbiAgaW5pdGlhbEZsaVRva2VuID0gJ0VUSCcsXG4gIGZsaVRva2VuT3B0aW9ucyA9IFtdLFxuICBpbml0aWFsSG9sZGluZ1BlcmlvZEluTW9udGhzID0gMixcbiAgaW5pdGlhbFBlcmNlbnRDaGFuZ2UgPSAxMCxcbiAgaW5pdGlhbEludmVzdG1lbnRBbW91bnQgPSAxMDAsXG4gIGluaXRpYWxMZXZlcmFnZVJhdGlvID0gMCxcbiAgaGFuZGxlU3VibWl0XG59KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCByZWR1Y2VyKCkpXG4gIGNvbnN0IFtcbiAgICBzZXRUb2tlbixcbiAgICBzZXRJbnZlc3RtZW50QW1vdW50LFxuICAgIHNldExldmVyYWdlLFxuICAgIHNldFBlcmNlbnRDaGFuZ2UsXG4gICAgc2V0VGltZVBlcmlvZFxuICBdID0gW1xuICAgIHNldEZsaVRva2VuU3RyYXRlZ3ksXG4gICAgc2V0SW5pdGlhbEludmVzdG1lbnQsXG4gICAgc2V0TGV2ZXJhZ2VSYXRpbyxcbiAgICBzZXRUYXJnZXRQZXJjZW50Q2hhbmdlLFxuICAgIHNldEhvbGRpbmdQZXJpb2RcbiAgXVxuXG4gIGNvbnN0IHtcbiAgICBmbGlUb2tlblN0cmF0ZWd5LFxuICAgIGluaXRpYWxJbnZlc3RtZW50LFxuICAgIGxldmVyYWdlUmF0aW8sXG4gICAgdGFyZ2V0UGVyY2VudENoYW5nZTogcGVyY2VudENoYW5nZSxcbiAgICBob2xkaW5nUGVyaW9kXG4gIH0gPSBzdGF0ZVxuICBjb25zdCBjYWxjdWxhdGVSZXR1cm4gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIGZsaVRva2VuU3RyYXRlZ3ksXG4gICAgICBpbml0aWFsSW52ZXN0bWVudCxcbiAgICAgIGhvbGRpbmdQZXJpb2QsXG4gICAgICB0YXJnZXRQZXJjZW50Q2hhbmdlOiBwZXJjZW50Q2hhbmdlXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhbGN1bGF0b3JcIiBvblN1Ym1pdD17Y2FsY3VsYXRlUmV0dXJufT5cbiAgICAgIDxoMj5cbiAgICAgICAgRVRIIEZMWSBDYWxjdWxhdG9yIDxpbWcgc3JjPXtmbGlJbmRleExvZ299IC8+XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxsYWJlbCBuYW1lPVwiZmxpVG9rZW5cIiBodG1sRm9yPVwiZmxpVG9rZW5cIj5cbiAgICAgICAgICBGTEkgVG9rZW5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJmbGlUb2tlblwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e2ZsaVRva2VuU3RyYXRlZ3l9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRUb2tlbihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJob2xkaW5nUGVyaW9kSW5wdXRcIiBodG1sRm9yPVwiaG9sZGluZ1BlcmlvZElucHV0XCI+XG4gICAgICAgICAgSG9sZGluZyBQZXJpb2QgKE1vbnRocylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJob2xkaW5nUGVyaW9kSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtob2xkaW5nUGVyaW9kfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0VGltZVBlcmlvZChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIiBodG1sRm9yPVwicGVyY2VudENoYW5nZUlucHV0XCI+XG4gICAgICAgICAgUGVyY2VudCBDaGFuZ2UgaW4gVG9rZW5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtwZXJjZW50Q2hhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0UGVyY2VudENoYW5nZShlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIiBodG1sRm9yPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCI+XG4gICAgICAgICAgSW5pdGlhbCBJbnZlc3RtZW50IEFtb3VudCAoRG9sbGFycylcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtpbnZlc3RtZW50QW1vdW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0SW52ZXN0bWVudEFtb3VudCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImxldmVyYWdlUmF0aW9JbnB1dFwiIGh0bWxGb3I9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIj5cbiAgICAgICAgICBDdXJyZW50IExldmVyYWdlIFJhdGlvblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImxldmVyYWdlUmF0aW9JbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2xldmVyYWdlUmF0aW99XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRMZXZlcmFnZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5DYWxjdWxhdG9yLnByb3BUeXBlcyA9IHtcbiAgdG9rZW46IHN0cmluZyxcbiAgZmxpVG9rZW5PcHRpb25zOiBhcnJheSxcbiAgaG9sZGluZ1BlcmlvZGluTW9udGhzOiBudW1iZXIsXG4gIHBlcmNlbnRDaGFuZ2U6IG51bWJlcixcbiAgaW5pdGlhbEludmVzdG1lbnQ6IG51bWJlcixcbiAgbGV2ZXJhZ2VSYXRpbzogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});