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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar calculateReturn = function calculateReturn(e) {};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _map = [_reducer__WEBPACK_IMPORTED_MODULE_4__.setFliTokenStrategy, _reducer__WEBPACK_IMPORTED_MODULE_4__.setInitialInvestment, _reducer__WEBPACK_IMPORTED_MODULE_4__.setLeverageRatio, _reducer__WEBPACK_IMPORTED_MODULE_4__.setTargetPercentChange, _reducer__WEBPACK_IMPORTED_MODULE_4__.setHoldingPeriod].map(dispatch),\n      _map2 = (0,_Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_map, 5),\n      setToken = _map2[0],\n      setInvestmentAmount = _map2[1],\n      setLeverage = _map2[2],\n      setPercentChange = _map2[3],\n      setTimePeriod = _map2[4];\n\n  var fliTokenStrategy = state.fliTokenStrategy,\n      investmentAmount = state.investmentAmount,\n      leverageRatio = state.leverageRatio,\n      targetPercentChange = state.percentChange,\n      holdingPeriod = state.holdingPeriod;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"calculator\",\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: fliIndexLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 28\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"fliToken\",\n        htmlFor: \"fliToken\",\n        children: \"FLI Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"fliToken\",\n        type: \"string\",\n        value: fliTokenStrategy,\n        onChange: setToken\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"holdingPeriodInput\",\n        htmlFor: \"holdingPeriodInput\",\n        children: \"Holding Period (Months)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"holdingPeriodInput\",\n        type: \"number\",\n        value: holdingPeriod,\n        onChange: setTimePeriod\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"percentChangeInput\",\n        htmlFor: \"percentChangeInput\",\n        children: \"Percent Change in Token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"percentChangeInput\",\n        type: \"number\",\n        value: percentChange,\n        onChange: setPercentChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"investmentAmountInput\",\n        htmlFor: \"investmentAmountInput\",\n        children: \"Initial Investment Amount (Dollars)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"investmentAmountInput\",\n        type: \"number\",\n        value: investmentAmount,\n        onChange: setInvestmentAmount\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"input-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        name: \"leverageRatioInput\",\n        htmlFor: \"leverageRatioInput\",\n        children: \"Current Leverage Ration\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"leverageRatioInput\",\n        type: \"number\",\n        value: leverageRatio,\n        onChange: setLeverage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_2__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_2__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsic2V0dGVyIiwic2V0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2FsY3VsYXRlUmV0dXJuIiwiQ2FsY3VsYXRvciIsImZsaUluZGV4TG9nbyIsImluaXRpYWxGbGlUb2tlbiIsImZsaVRva2VuT3B0aW9ucyIsImluaXRpYWxIb2xkaW5nUGVyaW9kSW5Nb250aHMiLCJpbml0aWFsUGVyY2VudENoYW5nZSIsImluaXRpYWxJbnZlc3RtZW50QW1vdW50IiwiaW5pdGlhbExldmVyYWdlUmF0aW8iLCJoYW5kbGVTdWJtaXQiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJzZXRGbGlUb2tlblN0cmF0ZWd5Iiwic2V0SW5pdGlhbEludmVzdG1lbnQiLCJzZXRMZXZlcmFnZVJhdGlvIiwic2V0VGFyZ2V0UGVyY2VudENoYW5nZSIsInNldEhvbGRpbmdQZXJpb2QiLCJtYXAiLCJzZXRUb2tlbiIsInNldEludmVzdG1lbnRBbW91bnQiLCJzZXRMZXZlcmFnZSIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRUaW1lUGVyaW9kIiwiZmxpVG9rZW5TdHJhdGVneSIsImludmVzdG1lbnRBbW91bnQiLCJsZXZlcmFnZVJhdGlvIiwidGFyZ2V0UGVyY2VudENoYW5nZSIsInBlcmNlbnRDaGFuZ2UiLCJob2xkaW5nUGVyaW9kIiwicHJvcFR5cGVzIiwidG9rZW4iLCJzdHJpbmciLCJhcnJheSIsImhvbGRpbmdQZXJpb2Rpbk1vbnRocyIsIm51bWJlciIsImluaXRpYWxJbnZlc3RtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDQyxDQUFELEVBQU87QUFBQSxRQUNyQkMsTUFE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LEVBQUVDLDhDQURjO0FBRXJCN0IsaUJBQWUsRUFBRThCLDZDQUZJO0FBR3JCQyx1QkFBcUIsRUFBRUMsOENBSEY7QUFJckJQLGVBQWEsRUFBRU8sOENBSk07QUFLckJDLG1CQUFpQixFQUFFRCw4Q0FMRTtBQU1yQlQsZUFBYSxFQUFFUyw4Q0FBTUE7QUFOQSxDQUF2QjtBQVNBLCtEQUFlbkMsVUFBZiIsImZpbGUiOiIuL3NvdXJjZS9mZWF0dXJlcy9DYWxjdWxhdG9yL2NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgYXJyYXksIG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZWR1Y2VyLFxuICBzZXRGbGlUb2tlblN0cmF0ZWd5LFxuICBzZXRJbnZlc3RtZW50LFxuICBzZXRUYXJnZXRQZXJjZW50Q2hhbmdlLFxuICBzZXRMZXZlcmFnZVJhdGlvLFxuICBzZXRIb2xkaW5nUGVyaW9kLFxuICBzZXRJbml0aWFsSW52ZXN0bWVudFxufSBmcm9tICcuL3JlZHVjZXInXG5jb25zdCBzZXR0ZXIgPSAoc2V0KSA9PiAoZSkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICBjb25zdCB7IHZhbHVlIH0gPSB0YXJnZXRcbiAgc2V0KHZhbHVlKVxufVxuXG5jb25zdCBjYWxjdWxhdGVSZXR1cm4gPSAoZSkgPT4ge31cblxuY29uc3QgQ2FsY3VsYXRvciA9ICh7XG4gIGZsaUluZGV4TG9nbyA9ICdodHRwczovL3NldC1jb3JlLnMzLmFtYXpvbmF3cy5jb20vaW1nL3BvcnRmb2xpb3MvZXRoMnhfZmxpLnN2ZycsXG4gIGluaXRpYWxGbGlUb2tlbiA9ICdFVEgnLFxuICBmbGlUb2tlbk9wdGlvbnMgPSBbXSxcbiAgaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyA9IDIsXG4gIGluaXRpYWxQZXJjZW50Q2hhbmdlID0gMTAsXG4gIGluaXRpYWxJbnZlc3RtZW50QW1vdW50ID0gMTAwLFxuICBpbml0aWFsTGV2ZXJhZ2VSYXRpbyA9IDAsXG4gIGhhbmRsZVN1Ym1pdFxufSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgcmVkdWNlcigpKVxuICBjb25zdCBbXG4gICAgc2V0VG9rZW4sXG4gICAgc2V0SW52ZXN0bWVudEFtb3VudCxcbiAgICBzZXRMZXZlcmFnZSxcbiAgICBzZXRQZXJjZW50Q2hhbmdlLFxuICAgIHNldFRpbWVQZXJpb2RcbiAgXSA9IFtcbiAgICBzZXRGbGlUb2tlblN0cmF0ZWd5LFxuICAgIHNldEluaXRpYWxJbnZlc3RtZW50LFxuICAgIHNldExldmVyYWdlUmF0aW8sXG4gICAgc2V0VGFyZ2V0UGVyY2VudENoYW5nZSxcbiAgICBzZXRIb2xkaW5nUGVyaW9kXG4gIF0ubWFwKGRpc3BhdGNoKVxuXG4gIGNvbnN0IHtcbiAgICBmbGlUb2tlblN0cmF0ZWd5LFxuICAgIGludmVzdG1lbnRBbW91bnQsXG4gICAgbGV2ZXJhZ2VSYXRpbyxcbiAgICBwZXJjZW50Q2hhbmdlOiB0YXJnZXRQZXJjZW50Q2hhbmdlLFxuICAgIGhvbGRpbmdQZXJpb2RcbiAgfSA9IHN0YXRlXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiY2FsY3VsYXRvclwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGgyPlxuICAgICAgICBFVEggRkxZIENhbGN1bGF0b3IgPGltZyBzcmM9e2ZsaUluZGV4TG9nb30gLz5cbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIG5hbWU9XCJmbGlUb2tlblwiIGh0bWxGb3I9XCJmbGlUb2tlblwiPlxuICAgICAgICAgIEZMSSBUb2tlblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImZsaVRva2VuXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17ZmxpVG9rZW5TdHJhdGVneX1cbiAgICAgICAgICBvbkNoYW5nZT17c2V0VG9rZW59XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImhvbGRpbmdQZXJpb2RJbnB1dFwiIGh0bWxGb3I9XCJob2xkaW5nUGVyaW9kSW5wdXRcIj5cbiAgICAgICAgICBIb2xkaW5nIFBlcmlvZCAoTW9udGhzKVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImhvbGRpbmdQZXJpb2RJbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2hvbGRpbmdQZXJpb2R9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldFRpbWVQZXJpb2R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiIGh0bWxGb3I9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIj5cbiAgICAgICAgICBQZXJjZW50IENoYW5nZSBpbiBUb2tlblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e3BlcmNlbnRDaGFuZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldFBlcmNlbnRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiIGh0bWxGb3I9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIj5cbiAgICAgICAgICBJbml0aWFsIEludmVzdG1lbnQgQW1vdW50IChEb2xsYXJzKVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2ludmVzdG1lbnRBbW91bnR9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldEludmVzdG1lbnRBbW91bnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8bGFiZWwgbmFtZT1cImxldmVyYWdlUmF0aW9JbnB1dFwiIGh0bWxGb3I9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIj5cbiAgICAgICAgICBDdXJyZW50IExldmVyYWdlIFJhdGlvblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImxldmVyYWdlUmF0aW9JbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2xldmVyYWdlUmF0aW99XG4gICAgICAgICAgb25DaGFuZ2U9e3NldExldmVyYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuQ2FsY3VsYXRvci5wcm9wVHlwZXMgPSB7XG4gIHRva2VuOiBzdHJpbmcsXG4gIGZsaVRva2VuT3B0aW9uczogYXJyYXksXG4gIGhvbGRpbmdQZXJpb2Rpbk1vbnRoczogbnVtYmVyLFxuICBwZXJjZW50Q2hhbmdlOiBudW1iZXIsXG4gIGluaXRpYWxJbnZlc3RtZW50OiBudW1iZXIsXG4gIGxldmVyYWdlUmF0aW86IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});