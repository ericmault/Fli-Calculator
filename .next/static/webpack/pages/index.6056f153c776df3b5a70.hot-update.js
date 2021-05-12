/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./source/shared/utils/calculator.js":
/*!*******************************************!*\
  !*** ./source/shared/utils/calculator.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar add = function add(x) {\n  return function (y) {\n    return x + y;\n  };\n};\n\nvar addOne = add(1);\n\nvar divide = function divide(x) {\n  return function (y) {\n    return y / x;\n  };\n};\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return fn(val);\n    }, initialValue);\n  };\n};\n\nvar divideBy100 = divide(100);\n\nvar trace = function trace(label) {\n  return function (val) {\n    console.log(\"\".concat(label, \"::\"), val);\n    return val;\n  };\n};\n\nvar testObject = {\n  investment: 1000,\n  percentChange: 10,\n  ratio: 1.7,\n  ethPrice: 4000\n};\n\nvar evaluatePercentLogic = function evaluatePercentLogic(_ref) {\n  var percentChange = _ref.percentChange;\n  return divideBy100(percentChange);\n};\n\nvar multiplyByRatio = function multiplyByRatio(ratio) {\n  return function (x) {\n    return x * ratio;\n  };\n};\n\nvar calculateFliReturn = function calculateFliReturn(x) {\n  return x.investment * (1 + x.percentChange / 100 * x.ratio);\n};\n\nvar evalFinalTokenPrice = function evalFinalTokenPrice(x) {\n  return x.tokenPrice * (1 + evaluatePercentLogic(x));\n};\n\nvar calculateTokenRoi = function calculateTokenRoi(x) {\n  return x.investment * (1 + evaluatePercentLogic(x));\n};\n\nvar createInputParams = function createInputParams(_ref2) {\n  var finalFliPrice = _ref2.finalFliPrice,\n      finalTokenPrice = _ref2.finalTokenPrice,\n      tokenRoi = _ref2.tokenRoi,\n      fliTokenStrategy = _ref2.fliTokenStrategy,\n      fliRoi = _ref2.fliRoi,\n      rest = (0,_Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, [\"finalFliPrice\", \"finalTokenPrice\", \"tokenRoi\", \"fliTokenStrategy\", \"fliRoi\"]);\n\n  return {\n    fliStrategy: fliTokenStrategy,\n    finalFliPrice: finalFliPrice,\n    finalTokenPrice: finalTokenPrice,\n    tokenRoi: tokenRoi,\n    fliRoi: fliRoi,\n    fliIndexProfit: fliRoi - tokenRoi,\n    userInput: rest\n  };\n};\n\nvar createFliReturn = function createFliReturn(x) {\n  return _objectSpread(_objectSpread({}, x), {}, {\n    finalFliPrice: calculateFliReturn(x),\n    fliRoi: calculateFliReturn(x) - x.investment,\n    tokenRoi: calculateTokenRoi(x) - x.investment\n  });\n};\n\nvar createFinalTokenPrice = function createFinalTokenPrice(x) {\n  return _objectSpread(_objectSpread({}, x), {}, {\n    finalTokenPrice: evalFinalTokenPrice(x),\n    profitAmount: x.fliRio - x.tokenRoi\n  });\n}; // const calculateFliROI = compose(createInputParams, createFinalTokenPrice, createFliReturn)(testObject) //?\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (compose(trace('final valeu'), createInputParams, trace('after createFinalTokenPrice'), createFinalTokenPrice, trace('after createFliReturn'), createFliReturn, trace('starting calculation')));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL3NoYXJlZC91dGlscy9jYWxjdWxhdG9yLmpzP2FjZTEiXSwibmFtZXMiOlsiYWRkIiwieCIsInkiLCJhZGRPbmUiLCJkaXZpZGUiLCJjb21wb3NlIiwiZm5zIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlUmlnaHQiLCJ2YWwiLCJmbiIsImRpdmlkZUJ5MTAwIiwidHJhY2UiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0T2JqZWN0IiwiaW52ZXN0bWVudCIsInBlcmNlbnRDaGFuZ2UiLCJyYXRpbyIsImV0aFByaWNlIiwiZXZhbHVhdGVQZXJjZW50TG9naWMiLCJtdWx0aXBseUJ5UmF0aW8iLCJjYWxjdWxhdGVGbGlSZXR1cm4iLCJldmFsRmluYWxUb2tlblByaWNlIiwidG9rZW5QcmljZSIsImNhbGN1bGF0ZVRva2VuUm9pIiwiY3JlYXRlSW5wdXRQYXJhbXMiLCJmaW5hbEZsaVByaWNlIiwiZmluYWxUb2tlblByaWNlIiwidG9rZW5Sb2kiLCJmbGlUb2tlblN0cmF0ZWd5IiwiZmxpUm9pIiwicmVzdCIsImZsaVN0cmF0ZWd5IiwiZmxpSW5kZXhQcm9maXQiLCJ1c2VySW5wdXQiLCJjcmVhdGVGbGlSZXR1cm4iLCJjcmVhdGVGaW5hbFRva2VuUHJpY2UiLCJwcm9maXRBbW91bnQiLCJmbGlSaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsQ0FBRDtBQUFBLFNBQU8sVUFBQ0MsQ0FBRDtBQUFBLFdBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUFBLEdBQVA7QUFBQSxDQUFaOztBQUNBLElBQU1DLE1BQU0sR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBbEI7O0FBQ0EsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0gsQ0FBRDtBQUFBLFNBQU8sVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsR0FBR0QsQ0FBWDtBQUFBLEdBQVA7QUFBQSxD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QUFFSixpQkFBaUIsQ0FBQ3pCLENBQUQsQ0FBakIsR0FBdUJBLENBQUMsQ0FBQ2dCO0FBSmI7QUFBQSxDQUF4Qjs7QUFPQSxJQUFNcUIscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDckMsQ0FBRDtBQUFBLHlDQUN6QkEsQ0FEeUI7QUFFNUI0QixtQkFBZSxFQUFFTCxtQkFBbUIsQ0FBQ3ZCLENBQUQsQ0FGUjtBQUc1QnNDLGdCQUFZLEVBQUV0QyxDQUFDLENBQUN1QyxNQUFGLEdBQVd2QyxDQUFDLENBQUM2QjtBQUhDO0FBQUEsQ0FBOUIsQyxDQU1BOzs7QUFDQSwrREFBZXpCLE9BQU8sQ0FDcEJPLEtBQUssQ0FBQyxhQUFELENBRGUsRUFFcEJlLGlCQUZvQixFQUdwQmYsS0FBSyxDQUFDLDZCQUFELENBSGUsRUFJcEIwQixxQkFKb0IsRUFLcEIxQixLQUFLLENBQUMsdUJBQUQsQ0FMZSxFQU1wQnlCLGVBTm9CLEVBT3BCekIsS0FBSyxDQUFDLHNCQUFELENBUGUsQ0FBdEIiLCJmaWxlIjoiLi9zb3VyY2Uvc2hhcmVkL3V0aWxzL2NhbGN1bGF0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGQgPSAoeCkgPT4gKHkpID0+IHggKyB5XG5jb25zdCBhZGRPbmUgPSBhZGQoMSlcbmNvbnN0IGRpdmlkZSA9ICh4KSA9PiAoeSkgPT4geSAvIHhcbmNvbnN0IGNvbXBvc2UgPVxuICAoLi4uZm5zKSA9PlxuICAoaW5pdGlhbFZhbHVlKSA9PlxuICAgIGZucy5yZWR1Y2VSaWdodCgodmFsLCBmbikgPT4gZm4odmFsKSwgaW5pdGlhbFZhbHVlKVxuXG5jb25zdCBkaXZpZGVCeTEwMCA9IGRpdmlkZSgxMDApXG5cbmNvbnN0IHRyYWNlID0gKGxhYmVsKSA9PiAodmFsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGAke2xhYmVsfTo6YCwgdmFsKVxuICByZXR1cm4gdmFsXG59XG5cbmNvbnN0IHRlc3RPYmplY3QgPSB7XG4gIGludmVzdG1lbnQ6IDEwMDAsXG4gIHBlcmNlbnRDaGFuZ2U6IDEwLFxuICByYXRpbzogMS43LFxuICBldGhQcmljZTogNDAwMFxufVxuXG5jb25zdCBldmFsdWF0ZVBlcmNlbnRMb2dpYyA9ICh7IHBlcmNlbnRDaGFuZ2UgfSkgPT4gZGl2aWRlQnkxMDAocGVyY2VudENoYW5nZSlcbmNvbnN0IG11bHRpcGx5QnlSYXRpbyA9IChyYXRpbykgPT4gKHgpID0+IHggKiByYXRpb1xuXG5jb25zdCBjYWxjdWxhdGVGbGlSZXR1cm4gPSAoeCkgPT5cbiAgeC5pbnZlc3RtZW50ICogKDEgKyAoeC5wZXJjZW50Q2hhbmdlIC8gMTAwKSAqIHgucmF0aW8pXG5cbmNvbnN0IGV2YWxGaW5hbFRva2VuUHJpY2UgPSAoeCkgPT4geC50b2tlblByaWNlICogKDEgKyBldmFsdWF0ZVBlcmNlbnRMb2dpYyh4KSlcbmNvbnN0IGNhbGN1bGF0ZVRva2VuUm9pID0gKHgpID0+IHguaW52ZXN0bWVudCAqICgxICsgZXZhbHVhdGVQZXJjZW50TG9naWMoeCkpXG5cbmNvbnN0IGNyZWF0ZUlucHV0UGFyYW1zID0gKHtcbiAgZmluYWxGbGlQcmljZSxcbiAgZmluYWxUb2tlblByaWNlLFxuICB0b2tlblJvaSxcbiAgZmxpVG9rZW5TdHJhdGVneSxcbiAgZmxpUm9pLFxuICAuLi5yZXN0XG59KSA9PiAoe1xuICBmbGlTdHJhdGVneTogZmxpVG9rZW5TdHJhdGVneSxcbiAgZmluYWxGbGlQcmljZSxcbiAgZmluYWxUb2tlblByaWNlLFxuICB0b2tlblJvaSxcbiAgZmxpUm9pLFxuICBmbGlJbmRleFByb2ZpdDogZmxpUm9pIC0gdG9rZW5Sb2ksXG4gIHVzZXJJbnB1dDogcmVzdFxufSlcblxuY29uc3QgY3JlYXRlRmxpUmV0dXJuID0gKHgpID0+ICh7XG4gIC4uLngsXG4gIGZpbmFsRmxpUHJpY2U6IGNhbGN1bGF0ZUZsaVJldHVybih4KSxcbiAgZmxpUm9pOiBjYWxjdWxhdGVGbGlSZXR1cm4oeCkgLSB4LmludmVzdG1lbnQsXG4gIHRva2VuUm9pOiBjYWxjdWxhdGVUb2tlblJvaSh4KSAtIHguaW52ZXN0bWVudFxufSlcblxuY29uc3QgY3JlYXRlRmluYWxUb2tlblByaWNlID0gKHgpID0+ICh7XG4gIC4uLngsXG4gIGZpbmFsVG9rZW5QcmljZTogZXZhbEZpbmFsVG9rZW5QcmljZSh4KSxcbiAgcHJvZml0QW1vdW50OiB4LmZsaVJpbyAtIHgudG9rZW5Sb2lcbn0pXG5cbi8vIGNvbnN0IGNhbGN1bGF0ZUZsaVJPSSA9IGNvbXBvc2UoY3JlYXRlSW5wdXRQYXJhbXMsIGNyZWF0ZUZpbmFsVG9rZW5QcmljZSwgY3JlYXRlRmxpUmV0dXJuKSh0ZXN0T2JqZWN0KSAvLz9cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHRyYWNlKCdmaW5hbCB2YWxldScpLFxuICBjcmVhdGVJbnB1dFBhcmFtcyxcbiAgdHJhY2UoJ2FmdGVyIGNyZWF0ZUZpbmFsVG9rZW5QcmljZScpLFxuICBjcmVhdGVGaW5hbFRva2VuUHJpY2UsXG4gIHRyYWNlKCdhZnRlciBjcmVhdGVGbGlSZXR1cm4nKSxcbiAgY3JlYXRlRmxpUmV0dXJuLFxuICB0cmFjZSgnc3RhcnRpbmcgY2FsY3VsYXRpb24nKVxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/shared/utils/calculator.js\n");

/***/ })

});