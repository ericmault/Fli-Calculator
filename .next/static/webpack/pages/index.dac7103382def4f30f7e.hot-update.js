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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_utils_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/calculator */ \"./source/shared/utils/calculator.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./source/features/Calculator/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Calculator/component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return initialValue;\n    });\n  };\n};\n\n\n\nvar setter = function setter(set) {\n  return function (e) {\n    var target = e.target;\n    var value = target.value;\n    set(value);\n  };\n};\n\nvar getInputValue = function getInputValue(setter) {\n  return function (event) {\n    var value = event.target.value;\n    return setter(value);\n  };\n};\n\nvar toNumber = function toNumber(x) {\n  return Number(x);\n};\n\nvar Calculator = function Calculator(_ref) {\n  _s();\n\n  var _ref$fliIndexLogo = _ref.fliIndexLogo,\n      fliIndexLogo = _ref$fliIndexLogo === void 0 ? 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg' : _ref$fliIndexLogo,\n      _ref$initialFliToken = _ref.initialFliToken,\n      initialFliToken = _ref$initialFliToken === void 0 ? 'ETH' : _ref$initialFliToken,\n      _ref$fliTokenOptions = _ref.fliTokenOptions,\n      fliTokenOptions = _ref$fliTokenOptions === void 0 ? [] : _ref$fliTokenOptions,\n      _ref$initialHoldingPe = _ref.initialHoldingPeriodInMonths,\n      initialHoldingPeriodInMonths = _ref$initialHoldingPe === void 0 ? 2 : _ref$initialHoldingPe,\n      _ref$initialPercentCh = _ref.initialPercentChange,\n      initialPercentChange = _ref$initialPercentCh === void 0 ? 10 : _ref$initialPercentCh,\n      _ref$initialInvestmen = _ref.initialInvestmentAmount,\n      initialInvestmentAmount = _ref$initialInvestmen === void 0 ? 100 : _ref$initialInvestmen,\n      _ref$initialLeverageR = _ref.initialLeverageRatio,\n      initialLeverageRatio = _ref$initialLeverageR === void 0 ? 0 : _ref$initialLeverageR,\n      handleSubmit = _ref.handleSubmit;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer, (0,_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer)()),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var fliTokenStrategy = state.fliTokenStrategy,\n      initialInvestment = state.initialInvestment,\n      leverageRatio = state.leverageRatio,\n      tokenPrice = state.tokenPrice,\n      percentChange = state.percentChange,\n      holdingPeriod = state.holdingPeriod;\n\n  var calculateReturn = function calculateReturn(e) {\n    e.preventDefault();\n    var r = (0,_shared_utils_calculator__WEBPACK_IMPORTED_MODULE_3__.default)({\n      fliTokenStrategy: fliTokenStrategy,\n      investment: Number(initialInvestment),\n      percentChange: Number(percentChange),\n      tokenPrice: Number(tokenPrice),\n      ratio: Number(leverageRatio)\n    });\n    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setRoiResult)(r));\n    console.log('state::', state, r);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: \"calculator\",\n      onSubmit: function onSubmit(x) {\n        return calculateReturn(x);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"ETH FLY Calculator \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: fliIndexLogo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 30\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"fliToken\",\n          htmlFor: \"fliToken\",\n          children: \"FLI Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"fliToken\",\n          type: \"string\",\n          value: fliTokenStrategy,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setFliTokenStrategy)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"tokenPrice\",\n          htmlFor: \"tokenPrice\",\n          children: \"Token Price\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"tokenPrice\",\n          type: \"number\",\n          value: tokenPrice,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setTokenPrice)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"holdingPeriodInput\",\n          htmlFor: \"holdingPeriodInput\",\n          children: \"Holding Period (Months)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"holdingPeriodInput\",\n          type: \"number\",\n          value: holdingPeriod,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setHoldingPeriod)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"percentChangeInput\",\n          htmlFor: \"percentChangeInput\",\n          children: \"Percent Change in Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"percentChangeInput\",\n          type: \"number\",\n          value: percentChange,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setPercentChange)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"investmentAmountInput\",\n          htmlFor: \"investmentAmountInput\",\n          children: \"Initial Investment Amount (Dollars)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"investmentAmountInput\",\n          type: \"number\",\n          value: initialInvestment,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setInitialInvestment)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          name: \"leverageRatioInput\",\n          htmlFor: \"leverageRatioInput\",\n          children: \"Current Leverage Ration\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"leverageRatioInput\",\n          type: \"number\",\n          value: leverageRatio,\n          onChange: function onChange(e) {\n            return dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setLeverageRatio)(e.target.value));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: !state.roiResult ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Got the result! Fli Price: \", state.roiResult.finalFliPrice, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Calculator, \"F8DpGm6nNPZNwd+NbXW/vG85SZE=\");\n\n_c = Calculator;\nCalculator.propTypes = {\n  token: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  fliTokenOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,\n  holdingPeriodinMonths: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  percentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  initialInvestment: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  leverageRatio: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvY29tcG9uZW50LmpzP2U5YzgiXSwibmFtZXMiOlsiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJzZXR0ZXIiLCJzZXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJbnB1dFZhbHVlIiwiZXZlbnQiLCJ0b051bWJlciIsIngiLCJOdW1iZXIiLCJDYWxjdWxhdG9yIiwiZmxpSW5kZXhMb2dvIiwiaW5pdGlhbEZsaVRva2VuIiwiZmxpVG9rZW5PcHRpb25zIiwiaW5pdGlhbEhvbGRpbmdQZXJpb2RJbk1vbnRocyIsImluaXRpYWxQZXJjZW50Q2hhbmdlIiwiaW5pdGlhbEludmVzdG1lbnRBbW91bnQiLCJpbml0aWFsTGV2ZXJhZ2VSYXRpbyIsImhhbmRsZVN1Ym1pdCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImZsaVRva2VuU3RyYXRlZ3kiLCJpbml0aWFsSW52ZXN0bWVudCIsImxldmVyYWdlUmF0aW8iLCJ0b2tlblByaWNlIiwicGVyY2VudENoYW5nZSIsImhvbGRpbmdQZXJpb2QiLCJjYWxjdWxhdGVSZXR1cm4iLCJwcmV2ZW50RGVmYXVsdCIsInIiLCJjYWxjdWxhdGVSb2kiLCJpbnZlc3RtZW50IiwicmF0aW8iLCJzZXRSb2lSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0RmxpVG9rZW5TdHJhdGVneSIsInNldFRva2VuUHJpY2UiLCJzZXRIb2xkaW5nUGVyaW9kIiwic2V0UGVyY2VudENoYW5nZSIsInNldEluaXRpYWxJbnZlc3RtZW50Iiwic2V0TGV2ZXJhZ2VSYXRpbyIsInJvaVJlc3VsdCIsImZpbmFsRmxpUHJpY2UiLCJwcm9wVHlwZXMiLCJ0b2tlbiIsInN0cmluZyIsImFycmF5IiwiaG9sZGluZ1BlcmlvZGluTW9udGhzIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FDWCxTQURJQSxPQUNKO0FBQUEsb0NBQUlDLEdBQUo7QUFBSUEsT0FBSjtBQUFBOztBQUFBLFNBQ0EsVUFBQ0MsWUFBRDtBQUFBLFdBQ0VELEdBQUcsQ0FBQ0UsV0FBSixDQUFnQixVQUFDQyxHQUFELEVBQU1DLEVBQU47QUFBQSxhQUFhSCxZQUFiO0FBQUEsS0FBaEIsQ0FERjtBQUFBLEdBREE7QUFBQSxDQURGOztBQUlBOztBQVdBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEdBQUQ7QUFBQSxTQUFTLFVBQUNDLENBQUQsRUFBTztBQUFBLFFBQ3JCQyxNQURxQixHQUNWRCxDQURVLENBQ3JCQyxNQURxQjtBQUFBLFFBRXJCQyxLQUZxQixHQUVYRCxNQUZXLENBRXJCQyxLQUZxQjtBQUc3QkgsT0FBRyxDQUFDRyxLQUFELENBQUg7QUFDRCxHQUpjO0FBQUEsQ0FBZjs7QUFNQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNMLE1BQUQ7QUFBQSxTQUFZLFVBQUNNLEtBQUQsRUFBVztBQUFBLFFBQ25DRixLQURtQyxHQUN6QkUsS0FBSyxDQUFDSCxNQURtQixDQUNuQ0MsS0FEbUM7QUFFM0MsV0FBT0osTUFBTSxDQUFDSSxLQUFELENBQWI7QUFDRCxHQUhxQjtBQUFBLENBQXRCOztBQUtBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQ7QUFBQSxTQUFPQyxNQUFNLENBQUNELENBQUQsQ0FBYjtBQUFBLENBQWpCOztBQUVBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BU2I7QUFBQTs7QUFBQSwrQkFSSkMsWUFRSTtBQUFBLE1BUkpBLFlBUUksa0NBUlcsZ0VBUVg7QUFBQSxrQ0FQSkMsZUFPSTtBQUFBLE1BUEpBLGVBT0kscUNBUGMsS0FPZDtBQUFBLGtDQU5KQyxlQU1JO0FBQUEsTUFOSkEsZUFNSSxxQ0FOYyxFQU1kO0FBQUEsbUNBTEpDLDRCQUtJO0FBQUEsTUFMSkEsNEJBS0ksc0NBTDJCLENBSzNCO0FBQUEsbUNBSkpDLG9CQUlJO0FBQUEsTUFKSkEsb0JBSUksc0NBSm1CLEVBSW5CO0FBQUEsbUNBSEpDLHVCQUdJO0FBQUEsTUFISkEsdUJBR0ksc0NBSHNCLEdBR3RCO0FBQUEsbUNBRkpDLG9CQUVJO0FBQUEsTUFGSkEsb0JBRUksc0NBRm1CLENBRW5CO0FBQUEsTUFESkMsWUFDSSxRQURKQSxZQUNJOztBQUFBLG9CQUNzQkMsaURBQVUsQ0FBQ0MsNkNBQUQsRUFBVUEsaURBQU8sRUFBakIsQ0FEaEM7QUFBQSxNQUNHQyxLQURIO0FBQUEsTUFDVUMsUUFEVjs7QUFBQSxNQUlGQyxnQkFKRSxHQVVBRixLQVZBLENBSUZFLGdCQUpFO0FBQUEsTUFLRkMsaUJBTEUsR0FVQUgsS0FWQSxDQUtGRyxpQkFMRTtBQUFBLE1BTUZDLGFBTkUsR0FVQUosS0FWQSxDQU1GSSxhQU5FO0FBQUEsTUFPRkMsVUFQRSxHQVVBTCxLQVZBLENBT0ZLLFVBUEU7QUFBQSxNQVFGQyxhQVJFLEdBVUFOLEtBVkEsQ0FRRk0sYUFSRTtBQUFBLE1BU0ZDLGFBVEUsR0FVQVAsS0FWQSxDQVNGTyxhQVRFOztBQVdKLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQzNCLENBQUQsRUFBTztBQUM3QkEsS0FBQyxDQUFDNEIsY0FBRjtBQUNBLFFBQU1DLENBQUMsR0FBR0MsaUVBQVksQ0FBQztBQUNyQlQsc0JBQWdCLEVBQWhCQSxnQkFEcUI7QUFFckJVLGdCQUFVLEVBQUV4QixNQUFNLENBQUNlLGlCQUFELENBRkc7QUFHckJHLG1CQUFhLEVBQUVsQixNQUFNLENBQUNrQixhQUFELENBSEE7QUFJckJELGdCQUFVLEVBQUVqQixNQUFNLENBQUNpQixVQUFELENBSkc7QUFLckJRLFdBQUssRUFBRXpCLE1BQU0sQ0FBQ2dCLGFBQUQ7QUFMUSxLQUFELENBQXRCO0FBUUFILFlBQVEsQ0FBQ2Esc0RBQVksQ0FBQ0osQ0FBRCxDQUFiLENBQVI7QUFDQUssV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QmhCLEtBQXZCLEVBQThCVSxDQUE5QjtBQUNELEdBWkQ7O0FBYUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFNLGVBQVMsRUFBQyxZQUFoQjtBQUE2QixjQUFRLEVBQUUsa0JBQUN2QixDQUFEO0FBQUEsZUFBT3FCLGVBQWUsQ0FBQ3JCLENBQUQsQ0FBdEI7QUFBQSxPQUF2QztBQUFBLDhCQUNFO0FBQUEsdURBQ3FCO0FBQUssYUFBRyxFQUFFRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDRTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGlCQUFPLEVBQUMsVUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLFlBQUUsRUFBQyxVQURMO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUVZLGdCQUhUO0FBSUUsa0JBQVEsRUFBRSxrQkFBQ3JCLENBQUQ7QUFBQSxtQkFBT29CLFFBQVEsQ0FBQ2dCLDZEQUFtQixDQUFDcEMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEIsQ0FBZjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWVFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBTyxjQUFJLEVBQUMsWUFBWjtBQUF5QixpQkFBTyxFQUFDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFDRSxZQUFFLEVBQUMsWUFETDtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsZUFBSyxFQUFFc0IsVUFIVDtBQUlFLGtCQUFRLEVBQUUsa0JBQUN4QixDQUFEO0FBQUEsbUJBQU9vQixRQUFRLENBQUNpQix1REFBYSxDQUFDckMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZCxDQUFmO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLGVBMEJFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBTyxjQUFJLEVBQUMsb0JBQVo7QUFBaUMsaUJBQU8sRUFBQyxvQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLFlBQUUsRUFBQyxvQkFETDtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsZUFBSyxFQUFFd0IsYUFIVDtBQUlFLGtCQUFRLEVBQUUsa0JBQUMxQixDQUFEO0FBQUEsbUJBQU9vQixRQUFRLENBQUNrQiwwREFBZ0IsQ0FBQ3RDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWpCLENBQWY7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUJGLGVBcUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBTyxjQUFJLEVBQUMsb0JBQVo7QUFBaUMsaUJBQU8sRUFBQyxvQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLFlBQUUsRUFBQyxvQkFETDtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsZUFBSyxFQUFFdUIsYUFIVDtBQUlFLGtCQUFRLEVBQUUsa0JBQUN6QixDQUFEO0FBQUEsbUJBQU9vQixRQUFRLENBQUNtQiwwREFBZ0IsQ0FBQ3ZDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWpCLENBQWY7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNGLGVBZ0RFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBTyxjQUFJLEVBQUMsdUJBQVo7QUFBb0MsaUJBQU8sRUFBQyx1QkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLFlBQUUsRUFBQyx1QkFETDtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsZUFBSyxFQUFFb0IsaUJBSFQ7QUFJRSxrQkFBUSxFQUFFLGtCQUFDdEIsQ0FBRDtBQUFBLG1CQUFPb0IsUUFBUSxDQUFDb0IsOERBQW9CLENBQUN4QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQixDQUFmO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhERixlQTJERTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQU8sY0FBSSxFQUFDLG9CQUFaO0FBQWlDLGlCQUFPLEVBQUMsb0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFDRSxZQUFFLEVBQUMsb0JBREw7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLGVBQUssRUFBRXFCLGFBSFQ7QUFJRSxrQkFBUSxFQUFFLGtCQUFDdkIsQ0FBRDtBQUFBLG1CQUFPb0IsUUFBUSxDQUFDcUIsMERBQWdCLENBQUN6QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFqQixDQUFmO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNERixlQXNFRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBeUVFO0FBQUEsZ0JBQ0csQ0FBQ2lCLEtBQUssQ0FBQ3VCLFNBQVAsR0FBbUIsSUFBbkIsZ0JBQ0M7QUFBQSxrREFBZ0N2QixLQUFLLENBQUN1QixTQUFOLENBQWdCQyxhQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUZELENBbEhEOztHQUFNbkMsVTs7S0FBQUEsVTtBQW9ITkEsVUFBVSxDQUFDb0MsU0FBWCxHQUF1QjtBQUNyQkMsT0FBSyxFQUFFQyw4Q0FEYztBQUVyQm5DLGlCQUFlLEVBQUVvQyw2Q0FGSTtBQUdyQkMsdUJBQXFCLEVBQUVDLDhDQUhGO0FBSXJCeEIsZUFBYSxFQUFFd0IsOENBSk07QUFLckIzQixtQkFBaUIsRUFBRTJCLDhDQUxFO0FBTXJCMUIsZUFBYSxFQUFFMEIsOENBQU1BO0FBTkEsQ0FBdkI7QUFTQSwrREFBZXpDLFVBQWYiLCJmaWxlIjoiLi9zb3VyY2UvZmVhdHVyZXMvQ2FsY3VsYXRvci9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGFycmF5LCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNhbGN1bGF0ZVJvaSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvY2FsY3VsYXRvcidcbmNvbnN0IGNvbXBvc2UgPVxuICAoLi4uZm5zKSA9PlxuICAoaW5pdGlhbFZhbHVlKSA9PlxuICAgIGZucy5yZWR1Y2VSaWdodCgodmFsLCBmbikgPT4gaW5pdGlhbFZhbHVlKVxuaW1wb3J0IHtcbiAgcmVkdWNlcixcbiAgc2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgc2V0VG9rZW5QcmljZSxcbiAgc2V0TGV2ZXJhZ2VSYXRpbyxcbiAgc2V0UGVyY2VudENoYW5nZSxcbiAgc2V0SG9sZGluZ1BlcmlvZCxcbiAgc2V0SW5pdGlhbEludmVzdG1lbnQsXG4gIG9uQ2FsY3VsYXRlUm9pLFxuICBzZXRSb2lSZXN1bHRcbn0gZnJvbSAnLi9yZWR1Y2VyJ1xuY29uc3Qgc2V0dGVyID0gKHNldCkgPT4gKGUpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGVcbiAgY29uc3QgeyB2YWx1ZSB9ID0gdGFyZ2V0XG4gIHNldCh2YWx1ZSlcbn1cblxuY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IChzZXR0ZXIpID0+IChldmVudCkgPT4ge1xuICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgcmV0dXJuIHNldHRlcih2YWx1ZSlcbn1cblxuY29uc3QgdG9OdW1iZXIgPSAoeCkgPT4gTnVtYmVyKHgpXG5cbmNvbnN0IENhbGN1bGF0b3IgPSAoe1xuICBmbGlJbmRleExvZ28gPSAnaHR0cHM6Ly9zZXQtY29yZS5zMy5hbWF6b25hd3MuY29tL2ltZy9wb3J0Zm9saW9zL2V0aDJ4X2ZsaS5zdmcnLFxuICBpbml0aWFsRmxpVG9rZW4gPSAnRVRIJyxcbiAgZmxpVG9rZW5PcHRpb25zID0gW10sXG4gIGluaXRpYWxIb2xkaW5nUGVyaW9kSW5Nb250aHMgPSAyLFxuICBpbml0aWFsUGVyY2VudENoYW5nZSA9IDEwLFxuICBpbml0aWFsSW52ZXN0bWVudEFtb3VudCA9IDEwMCxcbiAgaW5pdGlhbExldmVyYWdlUmF0aW8gPSAwLFxuICBoYW5kbGVTdWJtaXRcbn0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHJlZHVjZXIoKSlcblxuICBjb25zdCB7XG4gICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICBpbml0aWFsSW52ZXN0bWVudCxcbiAgICBsZXZlcmFnZVJhdGlvLFxuICAgIHRva2VuUHJpY2UsXG4gICAgcGVyY2VudENoYW5nZSxcbiAgICBob2xkaW5nUGVyaW9kXG4gIH0gPSBzdGF0ZVxuICBjb25zdCBjYWxjdWxhdGVSZXR1cm4gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHIgPSBjYWxjdWxhdGVSb2koe1xuICAgICAgZmxpVG9rZW5TdHJhdGVneSxcbiAgICAgIGludmVzdG1lbnQ6IE51bWJlcihpbml0aWFsSW52ZXN0bWVudCksXG4gICAgICBwZXJjZW50Q2hhbmdlOiBOdW1iZXIocGVyY2VudENoYW5nZSksXG4gICAgICB0b2tlblByaWNlOiBOdW1iZXIodG9rZW5QcmljZSksXG4gICAgICByYXRpbzogTnVtYmVyKGxldmVyYWdlUmF0aW8pXG4gICAgfSlcblxuICAgIGRpc3BhdGNoKHNldFJvaVJlc3VsdChyKSlcbiAgICBjb25zb2xlLmxvZygnc3RhdGU6OicsIHN0YXRlLCByKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhbGN1bGF0b3JcIiBvblN1Ym1pdD17KHgpID0+IGNhbGN1bGF0ZVJldHVybih4KX0+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBFVEggRkxZIENhbGN1bGF0b3IgPGltZyBzcmM9e2ZsaUluZGV4TG9nb30gLz5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGxhYmVsIG5hbWU9XCJmbGlUb2tlblwiIGh0bWxGb3I9XCJmbGlUb2tlblwiPlxuICAgICAgICAgICAgRkxJIFRva2VuXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiZmxpVG9rZW5cIlxuICAgICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgICB2YWx1ZT17ZmxpVG9rZW5TdHJhdGVneX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0RmxpVG9rZW5TdHJhdGVneShlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8bGFiZWwgbmFtZT1cInRva2VuUHJpY2VcIiBodG1sRm9yPVwidG9rZW5QcmljZVwiPlxuICAgICAgICAgICAgVG9rZW4gUHJpY2VcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ0b2tlblByaWNlXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3Rva2VuUHJpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldFRva2VuUHJpY2UoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGxhYmVsIG5hbWU9XCJob2xkaW5nUGVyaW9kSW5wdXRcIiBodG1sRm9yPVwiaG9sZGluZ1BlcmlvZElucHV0XCI+XG4gICAgICAgICAgICBIb2xkaW5nIFBlcmlvZCAoTW9udGhzKVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImhvbGRpbmdQZXJpb2RJbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtob2xkaW5nUGVyaW9kfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRIb2xkaW5nUGVyaW9kKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgIDxsYWJlbCBuYW1lPVwicGVyY2VudENoYW5nZUlucHV0XCIgaHRtbEZvcj1cInBlcmNlbnRDaGFuZ2VJbnB1dFwiPlxuICAgICAgICAgICAgUGVyY2VudCBDaGFuZ2UgaW4gVG9rZW5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJwZXJjZW50Q2hhbmdlSW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17cGVyY2VudENoYW5nZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goc2V0UGVyY2VudENoYW5nZShlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8bGFiZWwgbmFtZT1cImludmVzdG1lbnRBbW91bnRJbnB1dFwiIGh0bWxGb3I9XCJpbnZlc3RtZW50QW1vdW50SW5wdXRcIj5cbiAgICAgICAgICAgIEluaXRpYWwgSW52ZXN0bWVudCBBbW91bnQgKERvbGxhcnMpXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiaW52ZXN0bWVudEFtb3VudElucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2luaXRpYWxJbnZlc3RtZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChzZXRJbml0aWFsSW52ZXN0bWVudChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8bGFiZWwgbmFtZT1cImxldmVyYWdlUmF0aW9JbnB1dFwiIGh0bWxGb3I9XCJsZXZlcmFnZVJhdGlvSW5wdXRcIj5cbiAgICAgICAgICAgIEN1cnJlbnQgTGV2ZXJhZ2UgUmF0aW9uXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwibGV2ZXJhZ2VSYXRpb0lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2xldmVyYWdlUmF0aW99XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHNldExldmVyYWdlUmF0aW8oZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgeyFzdGF0ZS5yb2lSZXN1bHQgPyBudWxsIDogKFxuICAgICAgICAgIDxoMj5Hb3QgdGhlIHJlc3VsdCEgRmxpIFByaWNlOiB7c3RhdGUucm9pUmVzdWx0LmZpbmFsRmxpUHJpY2V9IDwvaDI+XG4gICAgICAgICl9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuQ2FsY3VsYXRvci5wcm9wVHlwZXMgPSB7XG4gIHRva2VuOiBzdHJpbmcsXG4gIGZsaVRva2VuT3B0aW9uczogYXJyYXksXG4gIGhvbGRpbmdQZXJpb2Rpbk1vbnRoczogbnVtYmVyLFxuICBwZXJjZW50Q2hhbmdlOiBudW1iZXIsXG4gIGluaXRpYWxJbnZlc3RtZW50OiBudW1iZXIsXG4gIGxldmVyYWdlUmF0aW86IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/features/Calculator/component.js\n");

/***/ })

});