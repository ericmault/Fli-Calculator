/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./source/features/Calculator/reducer.js":
/*!***********************************************!*\
  !*** ./source/features/Calculator/reducer.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultState\": function() { return /* binding */ defaultState; },\n/* harmony export */   \"reducer\": function() { return /* binding */ reducer; },\n/* harmony export */   \"setLeverageRatio\": function() { return /* binding */ setLeverageRatio; },\n/* harmony export */   \"setFliTokenStrategy\": function() { return /* binding */ setFliTokenStrategy; },\n/* harmony export */   \"setInitialInvestment\": function() { return /* binding */ setInitialInvestment; },\n/* harmony export */   \"setPercentChange\": function() { return /* binding */ setPercentChange; },\n/* harmony export */   \"setHoldingPeriod\": function() { return /* binding */ setHoldingPeriod; },\n/* harmony export */   \"setTokenPrice\": function() { return /* binding */ setTokenPrice; },\n/* harmony export */   \"setRoiResult\": function() { return /* binding */ setRoiResult; },\n/* harmony export */   \"getLeverageRatio\": function() { return /* binding */ getLeverageRatio; },\n/* harmony export */   \"getFliTokenStrategy\": function() { return /* binding */ getFliTokenStrategy; },\n/* harmony export */   \"getInitialInvestment\": function() { return /* binding */ getInitialInvestment; },\n/* harmony export */   \"getPercentChange\": function() { return /* binding */ getPercentChange; },\n/* harmony export */   \"getHoldingPeriod\": function() { return /* binding */ getHoldingPeriod; },\n/* harmony export */   \"getTokenPrice\": function() { return /* binding */ getTokenPrice; },\n/* harmony export */   \"getRoiResult\": function() { return /* binding */ getRoiResult; }\n/* harmony export */ });\n/* harmony import */ var _Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var autodux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autodux */ \"./node_modules/autodux/src/index.js\");\n/* harmony import */ var _shared_utils_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/calculator */ \"./source/shared/utils/calculator.js\");\n/* harmony import */ var _shared_utils_calculator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_utils_calculator__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_tgreco_index_coop_Fli_Calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar defaultState = {\n  fliTokenStrategy: 'ETH',\n  initialInvestment: 0,\n  leverageRatio: 1,\n  percentChange: 0,\n  holdingPeriod: 0,\n  tokenPrice: 0,\n  roiResult: null\n};\n\nvar _autodux = (0,autodux__WEBPACK_IMPORTED_MODULE_1__.default)({\n  slice: 'FLI ROI calculator',\n  initial: defaultState,\n  actions: {\n    setRoiResult: function setRoiResult(state, payload) {\n      return _objectSpread(_objectSpread({}, state), {}, {\n        roiResult: _shared_utils_calculator__WEBPACK_IMPORTED_MODULE_2___default()(payload)\n      });\n    },\n    resetForm: function resetForm(state) {\n      return {\n        fliTokenStrategy: state.fliTokenStrategy\n      };\n    }\n  }\n}),\n    reducer = _autodux.reducer,\n    _autodux$actions = _autodux.actions,\n    setLeverageRatio = _autodux$actions.setLeverageRatio,\n    setFliTokenStrategy = _autodux$actions.setFliTokenStrategy,\n    setInitialInvestment = _autodux$actions.setInitialInvestment,\n    setPercentChange = _autodux$actions.setPercentChange,\n    setHoldingPeriod = _autodux$actions.setHoldingPeriod,\n    setTokenPrice = _autodux$actions.setTokenPrice,\n    setRoiResult = _autodux$actions.setRoiResult,\n    _autodux$selectors = _autodux.selectors,\n    getLeverageRatio = _autodux$selectors.getLeverageRatio,\n    getFliTokenStrategy = _autodux$selectors.getFliTokenStrategy,\n    getInitialInvestment = _autodux$selectors.getInitialInvestment,\n    getPercentChange = _autodux$selectors.getPercentChange,\n    getHoldingPeriod = _autodux$selectors.getHoldingPeriod,\n    getTokenPrice = _autodux$selectors.getTokenPrice,\n    getRoiResult = _autodux$selectors.getRoiResult;\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvcmVkdWNlci5qcz81YmEzIl0sIm5hbWVzIjpbImRlZmF1bHRTdGF0ZSIsImZsaVRva2VuU3RyYXRlZ3kiLCJpbml0aWFsSW52ZXN0bWVudCIsImxldmVyYWdlUmF0aW8iLCJwZXJjZW50Q2hhbmdlIiwiaG9sZGluZ1BlcmlvZCIsInRva2VuUHJpY2UiLCJyb2lSZXN1bHQiLCJhdXRvZHV4Iiwic2xpY2UiLCJpbml0aWFsIiwiYWN0aW9ucyIsInNldFJvaVJlc3VsdCIsInN0YXRlIiwicGF5bG9hZCIsInJvaUZ1bmN0aW9uIiwicmVzZXRGb3JtIiwicmVkdWNlciIsInNldExldmVyYWdlUmF0aW8iLCJzZXRGbGlUb2tlblN0cmF0ZWd5Iiwic2V0SW5pdGlhbEludmVzdG1lbnQiLCJzZXRQZXJjZW50Q2hhbmdlIiwic2V0SG9sZGluZ1BlcmlvZCIsInNldFRva2VuUHJpY2UiLCJzZWxlY3RvcnMiLCJnZXRMZXZlcmFnZVJhdGlvIiwiZ2V0RmxpVG9rZW5TdHJhdGVneSIsImdldEluaXRpYWxJbnZlc3RtZW50IiwiZ2V0UGVyY2VudENoYW5nZSIsImdldEhvbGRpbmdQZXJpb2QiLCJnZXRUb2tlblByaWNlIiwiZ2V0Um9pUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxrQkFBZ0IsRUFBRSxLQURRO0FBRTFCQyxtQkFBaUIsRUFBRSxDQUZPO0FBRzFCQyxlQUFhLEVBQUUsQ0FIVztBQUkxQkMsZUFBYSxFQUFFLENBSlc7QUFLMUJDLGVBQWEsRUFBRSxDQUxXO0FBTTFCQyxZQUFVLEVBQUUsQ0FOYztBQU8xQkMsV0FBUyxFQUFFO0FBUGUsQ0FBckI7O2VBOEJIQyxnREFBTyxDQUFDO0FBQ1ZDLE9BQUssRUFBRSxvQkFERztBQUVWQyxTQUFPLEVBQUVWLFlBRkM7QUFHVlcsU0FBTyxFQUFFO0FBQ1BDLGdCQUFZLEVBQUUsc0JBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUNoQyw2Q0FDS0QsS0FETDtBQUVFTixpQkFBUyxFQUFFUSwrREFBVyxDQUFDRCxPQUFEO0FBRnhCO0FBSUQsS0FOTTtBQU9QRSxhQUFTLEVBQUUsbUJBQUNILEtBQUQ7QUFBQSxhQUFZO0FBQ3JCWix3QkFBZ0IsRUFBRVksS0FBSyxDQUFDWjtBQURILE9BQVo7QUFBQTtBQVBKO0FBSEMsQ0FBRCxDO0lBbkJUZ0IsTyxZQUFBQSxPO2dDQUNBTixPO0lBQ0VPLGdCLG9CQUFBQSxnQjtJQUNBQyxtQixvQkFBQUEsbUI7SUFDQUMsb0Isb0JBQUFBLG9CO0lBQ0FDLGdCLG9CQUFBQSxnQjtJQUNBQyxnQixvQkFBQUEsZ0I7SUFDQUMsYSxvQkFBQUEsYTtJQUNBWCxZLG9CQUFBQSxZO2tDQUVGWSxTO0lBQ0VDLGdCLHNCQUFBQSxnQjtJQUNBQyxtQixzQkFBQUEsbUI7SUFDQUMsb0Isc0JBQUFBLG9CO0lBQ0FDLGdCLHNCQUFBQSxnQjtJQUNBQyxnQixzQkFBQUEsZ0I7SUFDQUMsYSxzQkFBQUEsYTtJQUNBQyxZLHNCQUFBQSxZIiwiZmlsZSI6Ii4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvcmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRvZHV4IGZyb20gJ2F1dG9kdXgnXG5pbXBvcnQgcm9pRnVuY3Rpb24gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL2NhbGN1bGF0b3InXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGZsaVRva2VuU3RyYXRlZ3k6ICdFVEgnLFxuICBpbml0aWFsSW52ZXN0bWVudDogMCxcbiAgbGV2ZXJhZ2VSYXRpbzogMSxcbiAgcGVyY2VudENoYW5nZTogMCxcbiAgaG9sZGluZ1BlcmlvZDogMCxcbiAgdG9rZW5QcmljZTogMCxcbiAgcm9pUmVzdWx0OiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCB7XG4gIHJlZHVjZXIsXG4gIGFjdGlvbnM6IHtcbiAgICBzZXRMZXZlcmFnZVJhdGlvLFxuICAgIHNldEZsaVRva2VuU3RyYXRlZ3ksXG4gICAgc2V0SW5pdGlhbEludmVzdG1lbnQsXG4gICAgc2V0UGVyY2VudENoYW5nZSxcbiAgICBzZXRIb2xkaW5nUGVyaW9kLFxuICAgIHNldFRva2VuUHJpY2UsXG4gICAgc2V0Um9pUmVzdWx0XG4gIH0sXG4gIHNlbGVjdG9yczoge1xuICAgIGdldExldmVyYWdlUmF0aW8sXG4gICAgZ2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgICBnZXRJbml0aWFsSW52ZXN0bWVudCxcbiAgICBnZXRQZXJjZW50Q2hhbmdlLFxuICAgIGdldEhvbGRpbmdQZXJpb2QsXG4gICAgZ2V0VG9rZW5QcmljZSxcbiAgICBnZXRSb2lSZXN1bHRcbiAgfVxufSA9IGF1dG9kdXgoe1xuICBzbGljZTogJ0ZMSSBST0kgY2FsY3VsYXRvcicsXG4gIGluaXRpYWw6IGRlZmF1bHRTdGF0ZSxcbiAgYWN0aW9uczoge1xuICAgIHNldFJvaVJlc3VsdDogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcm9pUmVzdWx0OiByb2lGdW5jdGlvbihwYXlsb2FkKVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzZXRGb3JtOiAoc3RhdGUpID0+ICh7XG4gICAgICBmbGlUb2tlblN0cmF0ZWd5OiBzdGF0ZS5mbGlUb2tlblN0cmF0ZWd5XG4gICAgfSlcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/features/Calculator/reducer.js\n");

/***/ }),

/***/ "./source/shared/utils/calculator.js":
/*!*******************************************!*\
  !*** ./source/shared/utils/calculator.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});