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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_utils_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/calculator */ \"./source/shared/utils/calculator.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? ['ETH', 'BTC'] : _ref$fliTokenOptions;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      tokenPrice = state.tokenPrice,\n      percentChange = state.percentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setRoiResult)({\n      fliTokenStrategy: fliTokenStrategy,\n      investment: Number(initialInvestment),\n      percentChange: Number(percentChange),\n      tokenPrice: Number(tokenPrice),\n      ratio: Number(leverageRatio)\n    }));\n    console.log('state::', state);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: \"calculator\",\n      onSubmit: function onSubmit(x) {\n        return calculateReturn(x);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: fliIndexLogo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 30\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"fliToken\",\n          htmlFor: \"fliToken\",\n          children: \"FLI Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n          id: \"fliToken\",\n          type: \"string\",\n          value: fliTokenStrategy,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setFliTokenStrategy)(e.target.value));\n          },\n          children: fliTokenOptions.map(function (x, i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n              value: x,\n              children: x\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"tokenPrice\",\n          htmlFor: \"tokenPrice\",\n          children: \"Token Price\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"tokenPrice\",\n          type: \"number\",\n          value: tokenPrice,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setTokenPrice)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"holdingPeriodInput\",\n          htmlFor: \"holdingPeriodInput\",\n          children: \"Holding Period (Months)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"holdingPeriodInput\",\n          type: \"number\",\n          value: holdingPeriod,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setHoldingPeriod)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"percentChangeInput\",\n          htmlFor: \"percentChangeInput\",\n          children: \"Percent Change in Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"percentChangeInput\",\n          type: \"number\",\n          value: percentChange,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setPercentChange)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"investmentAmountInput\",\n          htmlFor: \"investmentAmountInput\",\n          children: \"Initial Investment Amount (Dollars)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"investmentAmountInput\",\n          type: \"number\",\n          value: initialInvestment,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setInitialInvestment)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"leverageRatioInput\",\n          htmlFor: \"leverageRatioInput\",\n          children: \"Current Leverage Ration\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"leverageRatioInput\",\n          type: \"number\",\n          value: leverageRatio,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setLeverageRatio)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: !state.roiResult ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Got the result! Fli Price: \", state.roiResult.finalFliPrice, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsImZsaUluZGV4TG9nbyIsImZsaVRva2VuT3B0aW9ucyIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImZsaVRva2VuU3RyYXRlZ3kiLCJpbml0aWFsSW52ZXN0bWVudCIsImxldmVyYWdlUmF0aW8iLCJ0b2tlblByaWNlIiwicGVyY2VudENoYW5nZSIsImhvbGRpbmdQZXJpb2QiLCJjYWxjdWxhdGVSZXR1cm4iLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRSb2lSZXN1bHQiLCJpbnZlc3RtZW50IiwiTnVtYmVyIiwicmF0aW8iLCJjb25zb2xlIiwibG9nIiwieCIsInNldEZsaVRva2VuU3RyYXRlZ3kiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImkiLCJzZXRUb2tlblByaWNlIiwic2V0SG9sZGluZ1BlcmlvZCIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldExldmVyYWdlUmF0aW8iLCJyb2lSZXN1bHQiLCJmaW5hbEZsaVByaWNlIiwicHJvcFR5cGVzIiwidG9rZW4iLCJzdHJpbmciLCJhcnJheSIsImhvbGRpbmdQZXJpb2Rpbk1vbnRocyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BR2I7QUFBQTs7QUFBQSwrQkFGSkMsWUFFSTtBQUFBLE1BRkpBLFlBRUksa0NBRlcsZ0VBRVg7QUFBQSxrQ0FESkMsZUFDSTtBQUFBLE1BREpBLGVBQ0kscUNBRGMsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUNkOztBQUFBLG9CQUNzQkMsaURBQVUsQ0FBQ0MsNkNBQUQsRUFBVUEsaURBQU8sRUFBakIsQ0FEaEM7QUFBQSxNQUNH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TEU7QUFNckIvQixlQUFhLEVBQUUrQiw4Q0FBTUE7QUFOQSxDQUF2QjtBQVNBLCtEQUFleEMsVUFBZiIsImZpbGUiOiIuL3NvdXJjZS9mZWF0dXJlcy9DYWxjdWxhdG9yL2NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgYXJyYXksIG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2FsY3VsYXRlUm9pIGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy9jYWxjdWxhdG9yJ1xuXG5pbXBvcnQge1xuICByZWR1Y2VyLFxuICBzZXRGbGlUb2tlblN0cmF0ZWd5LFxuICBzZXRUb2tlblByaWNlLFxuICBzZXRMZXZlcmFnZVJhdGlvLFxuICBzZXRQZXJjZW50Q2hhbmdlLFxuICBzZXRIb2xkaW5nUGVyaW9kLFxuICBzZXRJbml0aWFsSW52ZXN0bWVudCxcbiAgc2V0Um9pUmVzdWx0XG59IGZyb20gJy4vcmVkdWNlcidcblxuY29uc3QgQ2FsY3VsYXRvciA9ICh7XG4gIGZsaUluZGV4TG9nbyA9ICdodHRwczovL3NldC1jb3JlLnMzLmFtYXpvbmF3cy5jb20vaW1nL3BvcnRmb2xpb3MvZXRoMnhfZmxpLnN2ZycsXG4gIGZsaVRva2VuT3B0aW9ucyA9IFsnRVRIJywgJ0JUQyddXG59KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCByZWR1Y2VyKCkpXG5cbiAgY29uc3Qge1xuICAgIGZsaVRva2VuU3RyYXRlZ3ksXG4gICAgaW5pdGlhbEludmVzdG1lbnQsXG4gICAgbGV2ZXJhZ2VSYXRpbyxcbiAgICB0b2tlblByaWNlLFxuICAgIHBlcmNlbnRDaGFuZ2UsXG4gICAgaG9sZGluZ1BlcmlvZFxuICB9ID0gc3RhdGVcbiAgY29uc3QgY2FsY3VsYXRlUmV0dXJuID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGRpc3BhdGNoKFxuICAgICAgc2V0Um9pUmVzdWx0KHtcbiAgICAgICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICAgICAgaW52ZXN0bWVudDogTnVtYmVyKGluaXRpYWxJbnZlc3RtZW50KSxcbiAgICAgICAgcGVyY2VudENoYW5nZTogTnVtYmVyKHBlcmNlbnRDaGFuZ2UpLFxuICAgICAgICB0b2tlblByaWNlOiBOdW1iZXIodG9rZW5QcmljZSksXG4gICAgICAgIHJhdGlvOiBOdW1iZXIobGV2ZXJhZ2VSYXRpbylcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgY29uc29sZS5sb2coJ3N0YXRlOjonLCBzdGF0ZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYWxjdWxhdG9yXCIgb25TdWJtaXQ9eyh4KSA9PiBjYWxjdWxhdGVSZXR1cm4oeCl9PlxuICAgICAgICA8aDI+XG4gICAgICAgICAgRVRIIEZMWSBDYWxjdWxhdG9yIDxpbWcgc3JjPXtmbGlJbmRleExvZ299IC8+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgIDxsYWJlbCBuYW1lPVwiZmxpVG9rZW5cIiBodG1sRm9yPVwiZmxpVG9rZW5cIj5cbiAgICAgICAgICAgIEZMSSBUb2tlblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJmbGlUb2tlblwiXG4gICAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICAgIHZhbHVlPXtmbGlUb2tlblN0cmF0ZWd5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRGbGlUb2tlblN0cmF0ZWd5KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZsaVRva2VuT3B0aW9ucy5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXt4fT5cbiAgICAgICAgICAgICAgICB7eH1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgIDxsYWJlbCBuYW1lPVwidG9rZW5QcmljZVwiIGh0bWxGb3I9XCJ0b2tlblByaWNlXCI+XG4gICAgICAgICAgICBUb2tlbiBQcmljZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInRva2VuUHJpY2VcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dG9rZW5QcmljZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0VG9rZW5QcmljZShlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8bGFiZWwgbmFtZT1cImhvbGRpbmdQZXJpb2RJbnB1dFwiIGh0bWxGb3I9XCJob2xkaW5nUGVyaW9kSW5wdXRcIj5cbiAgICAgICAgICAgIEhvbGRpbmcgUGVyaW9kIChNb250aHMpXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiaG9sZGluZ1BlcmlvZElucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2hvbGRpbmdQZXJpb2R9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEhvbGRpbmdQZXJpb2QoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGxhYmVsIG5hbWU9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIiBodG1sRm9yPVwicGVyY2VudENoYW5nZUlucHV0XCI+XG4gICAgICAgICAgICBQZXJjZW50IENoYW5nZSBpbiBUb2tlblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtwZXJjZW50Q2hhbmdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRQZXJjZW50Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgIDxsYWJlbCBuYW1lPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCIgaHRtbEZvcj1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiPlxuICAgICAgICAgICAgSW5pdGlhbCBJbnZlc3RtZW50IEFtb3VudCAoRG9sbGFycylcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17aW5pdGlhbEludmVzdG1lbnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldEluaXRpYWxJbnZlc3RtZW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgIDxsYWJlbCBuYW1lPVwibGV2ZXJhZ2VSYXRpb0lucHV0XCIgaHRtbEZvcj1cImxldmVyYWdlUmF0aW9JbnB1dFwiPlxuICAgICAgICAgICAgQ3VycmVudCBMZXZlcmFnZSBSYXRpb25cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17bGV2ZXJhZ2VSYXRpb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0TGV2ZXJhZ2VSYXRpbyhlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7IXN0YXRlLnJvaVJlc3VsdCA/IG51bGwgOiAoXG4gICAgICAgICAgPGgyPkdvdCB0aGUgcmVzdWx0ISBGbGkgUHJpY2U6IHtzdGF0ZS5yb2lSZXN1bHQuZmluYWxGbGlQcmljZX0gPC9oMj5cbiAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5DYWxjdWxhdG9yLnByb3BUeXBlcyA9IHtcbiAgdG9rZW46IHN0cmluZyxcbiAgZmxpVG9rZW5PcHRpb25zOiBhcnJheSxcbiAgaG9sZGluZ1BlcmlvZGluTW9udGhzOiBudW1iZXIsXG4gIHBlcmNlbnRDaGFuZ2U6IG51bWJlcixcbiAgaW5pdGlhbEludmVzdG1lbnQ6IG51bWJlcixcbiAgbGV2ZXJhZ2VSYXRpbzogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});