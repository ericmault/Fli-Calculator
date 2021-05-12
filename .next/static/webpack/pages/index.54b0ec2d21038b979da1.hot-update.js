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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultState\": function() { return /* binding */ defaultState; },\n/* harmony export */   \"reducer\": function() { return /* binding */ reducer; },\n/* harmony export */   \"onCalculateRoi\": function() { return /* binding */ onCalculateRoi; },\n/* harmony export */   \"setLeverageRatio\": function() { return /* binding */ setLeverageRatio; },\n/* harmony export */   \"setFliTokenStrategy\": function() { return /* binding */ setFliTokenStrategy; },\n/* harmony export */   \"setInitialInvestment\": function() { return /* binding */ setInitialInvestment; },\n/* harmony export */   \"setPercentChange\": function() { return /* binding */ setPercentChange; },\n/* harmony export */   \"setHoldingPeriod\": function() { return /* binding */ setHoldingPeriod; },\n/* harmony export */   \"setTokenPrice\": function() { return /* binding */ setTokenPrice; },\n/* harmony export */   \"getLeverageRatio\": function() { return /* binding */ getLeverageRatio; },\n/* harmony export */   \"getFliTokenStrategy\": function() { return /* binding */ getFliTokenStrategy; },\n/* harmony export */   \"getInitialInvestment\": function() { return /* binding */ getInitialInvestment; },\n/* harmony export */   \"getPercentChange\": function() { return /* binding */ getPercentChange; },\n/* harmony export */   \"getHoldingPeriod\": function() { return /* binding */ getHoldingPeriod; },\n/* harmony export */   \"getTokenPrice\": function() { return /* binding */ getTokenPrice; }\n/* harmony export */ });\n/* harmony import */ var autodux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autodux */ \"./node_modules/autodux/src/index.js\");\n/* harmony import */ var _shared_utils_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/calculator */ \"./source/shared/utils/calculator.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar defaultState = {\n  fliTokenStrategy: 'default fli strategy',\n  initialInvestment: 0,\n  leverageRatio: 1,\n  percentChange: 0,\n  holdingPeriod: 0,\n  tokenPrice: 0,\n  roiResult: {}\n};\n\nvar _autodux = (0,autodux__WEBPACK_IMPORTED_MODULE_0__.default)({\n  slice: 'FLI ROI calculator',\n  initial: defaultState,\n  actions: {\n    onCalculateRoi: function onCalculateRoi(state) {\n      console.log('inside calculateRoi##', state);\n      var investment = state.investment,\n          percentChange = state.percentChange,\n          tokenPrice = state.tokenPrice,\n          ratio = state.ratio;\n      return (0,_shared_utils_calculator__WEBPACK_IMPORTED_MODULE_1__.default)({\n        investment: investment,\n        percentChange: percentChange,\n        tokenPrice: tokenPrice,\n        ratio: ratio\n      });\n    }\n  }\n}),\n    reducer = _autodux.reducer,\n    _autodux$actions = _autodux.actions,\n    onCalculateRoi = _autodux$actions.onCalculateRoi,\n    setLeverageRatio = _autodux$actions.setLeverageRatio,\n    setFliTokenStrategy = _autodux$actions.setFliTokenStrategy,\n    setInitialInvestment = _autodux$actions.setInitialInvestment,\n    setPercentChange = _autodux$actions.setPercentChange,\n    setHoldingPeriod = _autodux$actions.setHoldingPeriod,\n    setTokenPrice = _autodux$actions.setTokenPrice,\n    _autodux$selectors = _autodux.selectors,\n    getLeverageRatio = _autodux$selectors.getLeverageRatio,\n    getFliTokenStrategy = _autodux$selectors.getFliTokenStrategy,\n    getInitialInvestment = _autodux$selectors.getInitialInvestment,\n    getPercentChange = _autodux$selectors.getPercentChange,\n    getHoldingPeriod = _autodux$selectors.getHoldingPeriod,\n    getTokenPrice = _autodux$selectors.getTokenPrice;\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0NhbGN1bGF0b3IvcmVkdWNlci5qcz81YmEzIl0sIm5hbWVzIjpbImRlZmF1bHRTdGF0ZSIsImZsaVRva2VuU3RyYXRlZ3kiLCJpbml0aWFsSW52ZXN0bWVudCIsImxldmVyYWdlUmF0aW8iLCJwZXJjZW50Q2hhbmdlIiwiaG9sZGluZ1BlcmlvZCIsInRva2VuUHJpY2UiLCJyb2lSZXN1bHQiLCJhdXRvZHV4Iiwic2xpY2UiLCJpbml0aWFsIiwiYWN0aW9ucyIsIm9uQ2FsY3VsYXRlUm9pIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaW52ZXN0bWVudCIsInJhdGlvIiwicm9pRnVuY3Rpb24iLCJyZWR1Y2VyIiwic2V0TGV2ZXJhZ2VSYXRpbyIsInNldEZsaVRva2VuU3RyYXRlZ3kiLCJzZXRJbml0aWFsSW52ZXN0bWVudCIsInNldFBlcmNlbnRDaGFuZ2UiLCJzZXRIb2xkaW5nUGVyaW9kIiwic2V0VG9rZW5QcmljZSIsInNlbGVjdG9ycyIsImdldExldmVyYWdlUmF0aW8iLCJnZXRGbGlUb2tlblN0cmF0ZWd5IiwiZ2V0SW5pdGlhbEludmVzdG1lbnQiLCJnZXRQZXJjZW50Q2hhbmdlIiwiZ2V0SG9sZGluZ1BlcmlvZCIsImdldFRva2VuUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGtCQUFnQixFQUFFLHNCQURRO0FBRTFCQyxtQkFBaUIsRUFBRSxDQUZPO0FBRzFCQyxlQUFhLEVBQUUsQ0FIVztBQUkxQkMsZUFBYSxFQUFFLENBSlc7QUFLMUJDLGVBQWEsRUFBRSxDQUxXO0FBTTFCQyxZQUFVLEVBQUUsQ0FOYztBQU8xQkMsV0FBUyxFQUFFO0FBUGUsQ0FBckI7O2VBNkJIQyxnREFBTyxDQUFDO0FBQ1ZDLE9BQUssRUFBRSxvQkFERztBQUVWQyxTQUFPLEVBQUVWLFlBRkM7QUFHVlcsU0FBTyxFQUFFO0FBQ1BDLGtCQUFjLEVBQUUsd0JBQUNDLEtBQUQsRUFBVztBQUN6QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNGLEtBQXJDO0FBRHlCLFVBRWpCRyxVQUZpQixHQUVnQ0gsS0FGaEMsQ0FFakJHLFVBRmlCO0FBQUEsVUFFTFosYUFGSyxHQUVnQ1MsS0FGaEMsQ0FFTFQsYUFGSztBQUFBLFVBRVVFLFVBRlYsR0FFZ0NPLEtBRmhDLENBRVVQLFVBRlY7QUFBQSxVQUVzQlcsS0FGdEIsR0FFZ0NKLEtBRmhDLENBRXNCSSxLQUZ0QjtBQUd6QixhQUFPQyxpRUFBVyxDQUFDO0FBQUVGLGtCQUFVLEVBQVZBLFVBQUY7QUFBY1oscUJBQWEsRUFBYkEsYUFBZDtBQUE2QkUsa0JBQVUsRUFBVkEsVUFBN0I7QUFBeUNXLGFBQUssRUFBTEE7QUFBekMsT0FBRCxDQUFsQjtBQUNEO0FBTE07QUFIQyxDQUFELEM7SUFsQlRFLE8sWUFBQUEsTztnQ0FDQVIsTztJQUNFQyxjLG9CQUFBQSxjO0lBQ0FRLGdCLG9CQUFBQSxnQjtJQUNBQyxtQixvQkFBQUEsbUI7SUFDQUMsb0Isb0JBQUFBLG9CO0lBQ0FDLGdCLG9CQUFBQSxnQjtJQUNBQyxnQixvQkFBQUEsZ0I7SUFDQUMsYSxvQkFBQUEsYTtrQ0FFRkMsUztJQUNFQyxnQixzQkFBQUEsZ0I7SUFDQUMsbUIsc0JBQUFBLG1CO0lBQ0FDLG9CLHNCQUFBQSxvQjtJQUNBQyxnQixzQkFBQUEsZ0I7SUFDQUMsZ0Isc0JBQUFBLGdCO0lBQ0FDLGEsc0JBQUFBLGEiLCJmaWxlIjoiLi9zb3VyY2UvZmVhdHVyZXMvQ2FsY3VsYXRvci9yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dG9kdXggZnJvbSAnYXV0b2R1eCdcbmltcG9ydCByb2lGdW5jdGlvbiBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvY2FsY3VsYXRvcidcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgZmxpVG9rZW5TdHJhdGVneTogJ2RlZmF1bHQgZmxpIHN0cmF0ZWd5JyxcbiAgaW5pdGlhbEludmVzdG1lbnQ6IDAsXG4gIGxldmVyYWdlUmF0aW86IDEsXG4gIHBlcmNlbnRDaGFuZ2U6IDAsXG4gIGhvbGRpbmdQZXJpb2Q6IDAsXG4gIHRva2VuUHJpY2U6IDAsXG4gIHJvaVJlc3VsdDoge31cbn1cblxuZXhwb3J0IGNvbnN0IHtcbiAgcmVkdWNlcixcbiAgYWN0aW9uczoge1xuICAgIG9uQ2FsY3VsYXRlUm9pLFxuICAgIHNldExldmVyYWdlUmF0aW8sXG4gICAgc2V0RmxpVG9rZW5TdHJhdGVneSxcbiAgICBzZXRJbml0aWFsSW52ZXN0bWVudCxcbiAgICBzZXRQZXJjZW50Q2hhbmdlLFxuICAgIHNldEhvbGRpbmdQZXJpb2QsXG4gICAgc2V0VG9rZW5QcmljZVxuICB9LFxuICBzZWxlY3RvcnM6IHtcbiAgICBnZXRMZXZlcmFnZVJhdGlvLFxuICAgIGdldEZsaVRva2VuU3RyYXRlZ3ksXG4gICAgZ2V0SW5pdGlhbEludmVzdG1lbnQsXG4gICAgZ2V0UGVyY2VudENoYW5nZSxcbiAgICBnZXRIb2xkaW5nUGVyaW9kLFxuICAgIGdldFRva2VuUHJpY2VcbiAgfVxufSA9IGF1dG9kdXgoe1xuICBzbGljZTogJ0ZMSSBST0kgY2FsY3VsYXRvcicsXG4gIGluaXRpYWw6IGRlZmF1bHRTdGF0ZSxcbiAgYWN0aW9uczoge1xuICAgIG9uQ2FsY3VsYXRlUm9pOiAoc3RhdGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgY2FsY3VsYXRlUm9pIyMnLCBzdGF0ZSlcbiAgICAgIGNvbnN0IHsgaW52ZXN0bWVudCwgcGVyY2VudENoYW5nZSwgdG9rZW5QcmljZSwgcmF0aW8gfSA9IHN0YXRlXG4gICAgICByZXR1cm4gcm9pRnVuY3Rpb24oeyBpbnZlc3RtZW50LCBwZXJjZW50Q2hhbmdlLCB0b2tlblByaWNlLCByYXRpbyB9KVxuICAgIH1cbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/features/Calculator/reducer.js\n");

/***/ })

});