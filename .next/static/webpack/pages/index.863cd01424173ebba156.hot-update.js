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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar add = function add(x) {\n  return function (y) {\n    return x + y;\n  };\n};\n\nvar multiply = function multiply(x) {\n  return function (y) {\n    return x * y;\n  };\n};\n\nvar addOne = add(1);\n\nvar divide = function divide(x) {\n  return function (y) {\n    return y / x;\n  };\n};\n\ndivide(100)(10); //?\n\nvar divideBy100 = divide(100);\n\nvar getValue = function getValue(_ref) {\n  var value = _ref.value;\n  return value;\n};\n\nvar dividePercent = function dividePercent(_ref2) {\n  var percentChange = _ref2.percentChange;\n  return divideBy100(percentChange);\n};\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduceRight(function (val, fn) {\n      return fn(val);\n    }, initialValue);\n  };\n};\n\nvar trace = function trace(label) {\n  return function (val) {\n    console.log(\"\".concat(label, \"::\"), val);\n    return val;\n  };\n};\n\ncompose(function (x) {\n  return x;\n}, function (x) {\n  return dividePercent(x);\n})({\n  val: 10,\n  investment: 1000,\n  percentChange: 10,\n  ratio: 1.7,\n  ethPrice: 4000\n}); //?\n\nvar testObject = {\n  investment: 1000,\n  percentChange: 10,\n  ratio: 1.7,\n  ethPrice: 4000\n};\n\nvar getInvestment = function getInvestment(_ref3) {\n  var investment = _ref3.investment;\n  return investment;\n};\n\nvar getRatio = function getRatio(_ref4) {\n  var ratio = _ref4.ratio;\n  return ratio;\n};\n\nvar evaluatePercentLogic = function evaluatePercentLogic(_ref5) {\n  var percentChange = _ref5.percentChange;\n  return divideBy100({\n    percentChange: percentChange\n  });\n};\n\nvar multiplyByRatio = function multiplyByRatio(ratio) {\n  return function (x) {\n    return x * ratio;\n  };\n};\n\nvar evalFliEarne = function evalFliEarne(x) {\n  return x.investment * (1 + evaluatePercentLogic(x) * x.ratio);\n};\n\nvar evalFinalTokenPrice = function evalFinalTokenPrice(x) {\n  return x.tokenPrice * (1 + evaluatePercentLogic(x));\n};\n\nvar composeResults = function composeResults(obj) {\n  return _objectSpread({}, obj);\n};\n\nvar createInputParams = function createInputParams(_ref6) {\n  var finalFliPrice = _ref6.finalFliPrice,\n      finalTokenPrice = _ref6.finalTokenPrice,\n      rest = (0,_Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref6, [\"finalFliPrice\", \"finalTokenPrice\"]);\n\n  return {\n    finalFliPrice: finalFliPrice,\n    finalTokenPrice: finalTokenPrice,\n    userInput: rest\n  };\n};\n\nvar createFliReturn = function createFliReturn(x) {\n  return _objectSpread(_objectSpread({}, x), {}, {\n    finalFliPrice: evalFliEarne(x)\n  });\n};\n\nvar createFinalTokenPrice = function createFinalTokenPrice(x) {\n  return _objectSpread(_objectSpread({}, x), {}, {\n    finalTokenPrice: evalFinalTokenPrice(x)\n  });\n}; // const calculateFliROI = compose(createInputParams, createFinalTokenPrice, createFliReturn)(testObject) //?\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (compose(createInputParams, createFinalTokenPrice, createFliReturn));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL3NoYXJlZC91dGlscy9jYWxjdWxhdG9yLmpzP2FjZTEiXSwibmFtZXMiOlsiYWRkIiwieCIsInkiLCJtdWx0aXBseSIsImFkZE9uZSIsImRpdmlkZSIsImRpdmlkZUJ5MTAwIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsImRpdmlkZVBlcmNlbnQiLCJwZXJjZW50Q2hhbmdlIiwiY29tcG9zZSIsImZucyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVJpZ2h0IiwidmFsIiwiZm4iLCJ0cmFjZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsImludmVzdG1lbnQiLCJyYXRpbyIsImV0aFByaWNlIiwidGVzdE9iamVjdCIsImdldEludmVzdG1lbnQiLCJnZXRSYXRpbyIsImV2YWx1YXRlUGVyY2VudExvZ2ljIiwibXVsdGlwbHlCeVJhdGlvIiwiZXZhbEZsaUVhcm5lIiwiZXZhbEZpbmFsVG9rZW5QcmljZSIsInRva2VuUHJpY2UiLCJjb21wb3NlUmVzdWx0cyIsIm9iaiIsImNyZWF0ZUlucHV0UGFyYW1zIiwiZmluYWxGbGlQcmljZSIsImZpbmFsVG9rZW5QcmljZSIsInJlc3QiLCJ1c2VySW5wdXQiLCJjcmVhdGVGbGlSZXR1cm4iLCJjcmVhdGVGaW5hbFRva2VuUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsQ0FBRDtBQUFBLFNBQU8sVUFBQ0MsQ0FBRDtBQUFBLFdBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUFBLEdBQVA7QUFBQSxDQUFaOztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNGLENBQUQ7QUFBQSxTQUFPLFVBQUNDLENBQUQ7QUFBQSxXQUFPRCxDQUFDLEdBQUdDLENBQVg7QUFBQSxHQUFQO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUUsTUFBTSxHQUFHSixHQUFHLENBQUMsQ0FBRCxDQUFsQjs7QUFDQSxJQUFNSyxNQUFNLEdB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QUMxQixDQUFELENBQXhDLENBQVA7QUFBQSxDQUE1Qjs7QUFFQSxJQUFNK0IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxHQUFEO0FBQUEsMkJBQWVBLEdBQWY7QUFBQSxDQUF2Qjs7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsYUFBSCxTQUFHQSxhQUFIO0FBQUEsTUFBa0JDLGVBQWxCLFNBQWtCQSxlQUFsQjtBQUFBLE1BQXNDQyxJQUF0Qzs7QUFBQSxTQUFrRDtBQUMxRUYsaUJBQWEsRUFBYkEsYUFEMEU7QUFFMUVDLG1CQUFlLEVBQWZBLGVBRjBFO0FBRzFFRSxhQUFTLEVBQUVEO0FBSCtELEdBQWxEO0FBQUEsQ0FBMUI7O0FBTUEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdEMsQ0FBRDtBQUFBLHlDQUFhQSxDQUFiO0FBQWdCa0MsaUJBQWEsRUFBRU4sWUFBWSxDQUFDNUIsQ0FBRDtBQUEzQztBQUFBLENBQXhCOztBQUNBLElBQU11QyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUN2QyxDQUFEO0FBQUEseUNBQ3pCQSxDQUR5QjtBQUU1Qm1DLG1CQUFlLEVBQUVOLG1CQUFtQixDQUFDN0IsQ0FBRDtBQUZSO0FBQUEsQ0FBOUIsQyxDQUtBOzs7QUFDQSwrREFBZVUsT0FBTyxDQUNwQnVCLGlCQURvQixFQUVwQk0scUJBRm9CLEVBR3BCRCxlQUhvQixDQUF0QiIsImZpbGUiOiIuL3NvdXJjZS9zaGFyZWQvdXRpbHMvY2FsY3VsYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZCA9ICh4KSA9PiAoeSkgPT4geCArIHlcbmNvbnN0IG11bHRpcGx5ID0gKHgpID0+ICh5KSA9PiB4ICogeVxuXG5jb25zdCBhZGRPbmUgPSBhZGQoMSlcbmNvbnN0IGRpdmlkZSA9ICh4KSA9PiAoeSkgPT4geSAvIHhcblxuZGl2aWRlKDEwMCkoMTApIC8vP1xuXG5jb25zdCBkaXZpZGVCeTEwMCA9IGRpdmlkZSgxMDApXG5cbmNvbnN0IGdldFZhbHVlID0gKHsgdmFsdWUgfSkgPT4gdmFsdWVcblxuY29uc3QgZGl2aWRlUGVyY2VudCA9ICh7IHBlcmNlbnRDaGFuZ2UgfSkgPT4gZGl2aWRlQnkxMDAocGVyY2VudENoYW5nZSlcblxuY29uc3QgY29tcG9zZSA9XG4gICguLi5mbnMpID0+XG4gIChpbml0aWFsVmFsdWUpID0+XG4gICAgZm5zLnJlZHVjZVJpZ2h0KCh2YWwsIGZuKSA9PiBmbih2YWwpLCBpbml0aWFsVmFsdWUpXG5cbmNvbnN0IHRyYWNlID0gKGxhYmVsKSA9PiAodmFsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGAke2xhYmVsfTo6YCwgdmFsKVxuICByZXR1cm4gdmFsXG59XG5cbmNvbXBvc2UoXG4gICh4KSA9PiB4LFxuICAoeCkgPT4gZGl2aWRlUGVyY2VudCh4KVxuKSh7IHZhbDogMTAsIGludmVzdG1lbnQ6IDEwMDAsIHBlcmNlbnRDaGFuZ2U6IDEwLCByYXRpbzogMS43LCBldGhQcmljZTogNDAwMCB9KSAvLz9cblxuY29uc3QgdGVzdE9iamVjdCA9IHtcbiAgaW52ZXN0bWVudDogMTAwMCxcbiAgcGVyY2VudENoYW5nZTogMTAsXG4gIHJhdGlvOiAxLjcsXG4gIGV0aFByaWNlOiA0MDAwXG59XG5cbmNvbnN0IGdldEludmVzdG1lbnQgPSAoeyBpbnZlc3RtZW50IH0pID0+IGludmVzdG1lbnRcbmNvbnN0IGdldFJhdGlvID0gKHsgcmF0aW8gfSkgPT4gcmF0aW9cbmNvbnN0IGV2YWx1YXRlUGVyY2VudExvZ2ljID0gKHsgcGVyY2VudENoYW5nZSB9KSA9PlxuICBkaXZpZGVCeTEwMCh7IHBlcmNlbnRDaGFuZ2UgfSlcbmNvbnN0IG11bHRpcGx5QnlSYXRpbyA9IChyYXRpbykgPT4gKHgpID0+IHggKiByYXRpb1xuXG5jb25zdCBldmFsRmxpRWFybmUgPSAoeCkgPT5cbiAgeC5pbnZlc3RtZW50ICogKDEgKyBldmFsdWF0ZVBlcmNlbnRMb2dpYyh4KSAqIHgucmF0aW8pXG5cbmNvbnN0IGV2YWxGaW5hbFRva2VuUHJpY2UgPSAoeCkgPT4geC50b2tlblByaWNlICogKDEgKyBldmFsdWF0ZVBlcmNlbnRMb2dpYyh4KSlcblxuY29uc3QgY29tcG9zZVJlc3VsdHMgPSAob2JqKSA9PiAoeyAuLi5vYmogfSlcblxuY29uc3QgY3JlYXRlSW5wdXRQYXJhbXMgPSAoeyBmaW5hbEZsaVByaWNlLCBmaW5hbFRva2VuUHJpY2UsIC4uLnJlc3QgfSkgPT4gKHtcbiAgZmluYWxGbGlQcmljZSxcbiAgZmluYWxUb2tlblByaWNlLFxuICB1c2VySW5wdXQ6IHJlc3Rcbn0pXG5cbmNvbnN0IGNyZWF0ZUZsaVJldHVybiA9ICh4KSA9PiAoeyAuLi54LCBmaW5hbEZsaVByaWNlOiBldmFsRmxpRWFybmUoeCkgfSlcbmNvbnN0IGNyZWF0ZUZpbmFsVG9rZW5QcmljZSA9ICh4KSA9PiAoe1xuICAuLi54LFxuICBmaW5hbFRva2VuUHJpY2U6IGV2YWxGaW5hbFRva2VuUHJpY2UoeClcbn0pXG5cbi8vIGNvbnN0IGNhbGN1bGF0ZUZsaVJPSSA9IGNvbXBvc2UoY3JlYXRlSW5wdXRQYXJhbXMsIGNyZWF0ZUZpbmFsVG9rZW5QcmljZSwgY3JlYXRlRmxpUmV0dXJuKSh0ZXN0T2JqZWN0KSAvLz9cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGNyZWF0ZUlucHV0UGFyYW1zLFxuICBjcmVhdGVGaW5hbFRva2VuUHJpY2UsXG4gIGNyZWF0ZUZsaVJldHVyblxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/shared/utils/calculator.js\n");

/***/ })

});