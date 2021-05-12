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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_utils_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/calculator */ \"./source/shared/utils/calculator.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? ['ETH', 'BTC'] : _ref$fliTokenOptions;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var roiResult = state.roiResult,\n      fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      tokenPrice = state.tokenPrice,\n      percentChange = state.percentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setRoiResult)({\n      fliTokenStrategy: fliTokenStrategy,\n      investment: Number(initialInvestment),\n      percentChange: Number(percentChange),\n      tokenPrice: Number(tokenPrice),\n      ratio: Number(leverageRatio)\n    }));\n    console.log('state::', state);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: \"calculator\",\n      onSubmit: function onSubmit(x) {\n        return calculateReturn(x);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: fliIndexLogo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 30\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"fliToken\",\n          htmlFor: \"fliToken\",\n          children: \"FLI Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n          id: \"fliToken\",\n          type: \"string\",\n          value: fliTokenStrategy,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setFliTokenStrategy)(e.target.value));\n          },\n          children: fliTokenOptions.map(function (x, i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n              value: x,\n              children: x\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"tokenPrice\",\n          htmlFor: \"tokenPrice\",\n          children: \"Token Price\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"tokenPrice\",\n          type: \"number\",\n          value: tokenPrice,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setTokenPrice)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"holdingPeriodInput\",\n          htmlFor: \"holdingPeriodInput\",\n          children: \"Holding Period (Months)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"holdingPeriodInput\",\n          type: \"number\",\n          value: holdingPeriod,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setHoldingPeriod)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"percentChangeInput\",\n          htmlFor: \"percentChangeInput\",\n          children: \"Percent Change in Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"percentChangeInput\",\n          type: \"number\",\n          value: percentChange,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setPercentChange)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"investmentAmountInput\",\n          htmlFor: \"investmentAmountInput\",\n          children: \"Initial Investment Amount (Dollars)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"investmentAmountInput\",\n          type: \"number\",\n          value: initialInvestment,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setInitialInvestment)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"leverageRatioInput\",\n          htmlFor: \"leverageRatioInput\",\n          children: \"Current Leverage Ration\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"leverageRatioInput\",\n          type: \"number\",\n          value: leverageRatio,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setLeverageRatio)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: !state.roiResult ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: \"ROI Calculator Results\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: [\"FLI will outperform token investment by:\", ' ', state.roiResult.finalFliPrice - state.roiResult.finalTokenPrice]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: [\"FLI Investment End Value: \", state.roiResult.finalFliPrice]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: [\"Token Invesment End Value: \", state.roiResult.finalTokenPrice]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsImZsaUluZGV4TG9nbyIsImZsaVRva2VuT3B0aW9ucyIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInJvaVJlc3VsdCIsImZsaVRva2VuU3RyYXRlZ3kiLCJpbml0aWFsSW52ZXN0bWVudCIsImxldmVyYWdlUmF0aW8iLCJ0b2tlblByaWNlIiwicGVyY2VudENoYW5nZSIsImhvbGRpbmdQZXJpb2QiLCJjYWxjdWxhdGVSZXR1cm4iLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRSb2lSZXN1bHQiLCJpbnZlc3RtZW50IiwiTnVtYmVyIiwicmF0aW8iLCJjb25zb2xlIiwibG9nIiwieCIsInNldEZsaVRva2VuU3RyYXRlZ3kiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImkiLCJzZXRUb2tlblByaWNlIiwic2V0SG9sZGluZ1BlcmlvZCIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldExldmVyYWdlUmF0aW8iLCJmaW5hbEZsaVByaWNlIiwiZmluYWxUb2tlblByaWNlIiwicHJvcFR5cGVzIiwidG9rZW4iLCJzdHJpbmciLCJhcnJheSIsImhvbGRpbmdQZXJpb2Rpbk1vbnRocyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BR2I7QUFBQTs7QUFBQSwrQkFGSkMsWUFFSTtBQUFBLE1BRkpBLFlBRUksa0NBRlcsZ0VBRVg7QUFBQSxrQ0FESkMsZUFDSTtBQUFBLE1BREpBLGVBQ0kscUNBRGMsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUNkOztBQUFBLG9CQUNzQkMsaURBQVUsQ0FBQ0MsNkNBQUQsRUFBVUEsaURBQU8sRUFB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LG9EQUM4QjdCLEtBQUssQ0FBQ0UsU0FBTixDQUFnQjRCLGVBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUdELENBL0hEOztHQUFNbkMsVTs7S0FBQUEsVTtBQWlJTkEsVUFBVSxDQUFDb0MsU0FBWCxHQUF1QjtBQUNyQkMsT0FBSyxFQUFFQyw4Q0FEYztBQUVyQnBDLGlCQUFlLEVBQUVxQyw2Q0FGSTtBQUdyQkMsdUJBQXFCLEVBQUVDLDhDQUhGO0FBSXJCN0IsZUFBYSxFQUFFNkIsOENBSk07QUFLckJoQyxtQkFBaUIsRUFBRWdDLDhDQUxFO0FBTXJCL0IsZUFBYSxFQUFFK0IsOENBQU1BO0FBTkEsQ0FBdkI7QUFTQSwrREFBZXpDLFVBQWYiLCJmaWxlIjoiLi9zb3VyY2UvZmVhdHVyZXMvQ2FsY3VsYXRvci9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGFycmF5LCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNhbGN1bGF0ZVJvaSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvY2FsY3VsYXRvcidcblxuaW1wb3J0IHtcbiAgcmVkdWNlcixcbiAgc2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgc2V0VG9rZW5QcmljZSxcbiAgc2V0TGV2ZXJhZ2VSYXRpbyxcbiAgc2V0UGVyY2VudENoYW5nZSxcbiAgc2V0SG9sZGluZ1BlcmlvZCxcbiAgc2V0SW5pdGlhbEludmVzdG1lbnQsXG4gIHNldFJvaVJlc3VsdFxufSBmcm9tICcuL3JlZHVjZXInXG5cbmNvbnN0IENhbGN1bGF0b3IgPSAoe1xuICBmbGlJbmRleExvZ28gPSAnaHR0cHM6Ly9zZXQtY29yZS5zMy5hbWF6b25hd3MuY29tL2ltZy9wb3J0Zm9saW9zL2V0aDJ4X2ZsaS5zdmcnLFxuICBmbGlUb2tlbk9wdGlvbnMgPSBbJ0VUSCcsICdCVEMnXVxufSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgcmVkdWNlcigpKVxuXG4gIGNvbnN0IHtcbiAgICByb2lSZXN1bHQsXG4gICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICBpbml0aWFsSW52ZXN0bWVudCxcbiAgICBsZXZlcmFnZVJhdGlvLFxuICAgIHRva2VuUHJpY2UsXG4gICAgcGVyY2VudENoYW5nZSxcbiAgICBob2xkaW5nUGVyaW9kXG4gIH0gPSBzdGF0ZVxuICBjb25zdCBjYWxjdWxhdGVSZXR1cm4gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgZGlzcGF0Y2goXG4gICAgICBzZXRSb2lSZXN1bHQoe1xuICAgICAgICBmbGlUb2tlblN0cmF0ZWd5LFxuICAgICAgICBpbnZlc3RtZW50OiBOdW1iZXIoaW5pdGlhbEludmVzdG1lbnQpLFxuICAgICAgICBwZXJjZW50Q2hhbmdlOiBOdW1iZXIocGVyY2VudENoYW5nZSksXG4gICAgICAgIHRva2VuUHJpY2U6IE51bWJlcih0b2tlblByaWNlKSxcbiAgICAgICAgcmF0aW86IE51bWJlcihsZXZlcmFnZVJhdGlvKVxuICAgICAgfSlcbiAgICApXG5cbiAgICBjb25zb2xlLmxvZygnc3RhdGU6OicsIHN0YXRlKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhbGN1bGF0b3JcIiBvblN1Ym1pdD17KHgpID0+IGNhbGN1bGF0ZVJldHVybih4KX0+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBFVEggRkxZIENhbGN1bGF0b3IgPGltZyBzcmM9e2ZsaUluZGV4TG9nb30gLz5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGxhYmVsIG5hbWU9XCJmbGlUb2tlblwiIGh0bWxGb3I9XCJmbGlUb2tlblwiPlxuICAgICAgICAgICAgRkxJIFRva2VuXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBpZD1cImZsaVRva2VuXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgICAgdmFsdWU9e2ZsaVRva2VuU3RyYXRlZ3l9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEZsaVRva2VuU3RyYXRlZ3koZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZmxpVG9rZW5PcHRpb25zLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e3h9PlxuICAgICAgICAgICAgICAgIHt4fVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGxhYmVsIG5hbWU9XCJ0b2tlblByaWNlXCIgaHRtbEZvcj1cInRva2VuUHJpY2VcIj5cbiAgICAgICAgICAgIFRva2VuIFByaWNlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidG9rZW5QcmljZVwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt0b2tlblByaWNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRUb2tlblByaWNlKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgIDxsYWJlbCBuYW1lPVwiaG9sZGluZ1BlcmlvZElucHV0XCIgaHRtbEZvcj1cImhvbGRpbmdQZXJpb2RJbnB1dFwiPlxuICAgICAgICAgICAgSG9sZGluZyBQZXJpb2QgKE1vbnRocylcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJob2xkaW5nUGVyaW9kSW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17aG9sZGluZ1BlcmlvZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0SG9sZGluZ1BlcmlvZChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8bGFiZWwgbmFtZT1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiIGh0bWxGb3I9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIj5cbiAgICAgICAgICAgIFBlcmNlbnQgQ2hhbmdlIGluIFRva2VuXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwicGVyY2VudENoYW5nZUlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3BlcmNlbnRDaGFuZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldFBlcmNlbnRDaGFuZ2UoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGxhYmVsIG5hbWU9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIiBodG1sRm9yPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCI+XG4gICAgICAgICAgICBJbml0aWFsIEludmVzdG1lbnQgQW1vdW50IChEb2xsYXJzKVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbml0aWFsSW52ZXN0bWVudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0SW5pdGlhbEludmVzdG1lbnQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGxhYmVsIG5hbWU9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIiBodG1sRm9yPVwibGV2ZXJhZ2VSYXRpb0lucHV0XCI+XG4gICAgICAgICAgICBDdXJyZW50IExldmVyYWdlIFJhdGlvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImxldmVyYWdlUmF0aW9JbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtsZXZlcmFnZVJhdGlvfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRMZXZlcmFnZVJhdGlvKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHNwYW4+XG4gICAgICAgIHshc3RhdGUucm9pUmVzdWx0ID8gbnVsbCA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlJPSSBDYWxjdWxhdG9yIFJlc3VsdHM8L2gyPlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICBGTEkgd2lsbCBvdXRwZXJmb3JtIHRva2VuIGludmVzdG1lbnQgYnk6eycgJ31cbiAgICAgICAgICAgICAge3N0YXRlLnJvaVJlc3VsdC5maW5hbEZsaVByaWNlIC0gc3RhdGUucm9pUmVzdWx0LmZpbmFsVG9rZW5QcmljZX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8aDM+RkxJIEludmVzdG1lbnQgRW5kIFZhbHVlOiB7c3RhdGUucm9pUmVzdWx0LmZpbmFsRmxpUHJpY2V9PC9oMz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgVG9rZW4gSW52ZXNtZW50IEVuZCBWYWx1ZToge3N0YXRlLnJvaVJlc3VsdC5maW5hbFRva2VuUHJpY2V9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNhbGN1bGF0b3IucHJvcFR5cGVzID0ge1xuICB0b2tlbjogc3RyaW5nLFxuICBmbGlUb2tlbk9wdGlvbnM6IGFycmF5LFxuICBob2xkaW5nUGVyaW9kaW5Nb250aHM6IG51bWJlcixcbiAgcGVyY2VudENoYW5nZTogbnVtYmVyLFxuICBpbml0aWFsSW52ZXN0bWVudDogbnVtYmVyLFxuICBsZXZlcmFnZVJhdGlvOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});