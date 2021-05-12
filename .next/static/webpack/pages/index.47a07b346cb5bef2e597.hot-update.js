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


/***/ }),

/***/ "./source/features/Home/component.js":
/*!*******************************************!*\
  !*** ./source/features/Home/component.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Calculator/component */ \"./source/features/Calculator/component.js\");\n/* harmony import */ var _Calculator_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_component__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/Home/component.js\",\n    _this = undefined;\n\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"842454139\",\n      children: \".calculator{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.input-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:60%;margin:12px;}label,input{font-size:18px;}label{width:40%;}input{width:60%;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Z3JlY28vaW5kZXgtY29vcC9GbGktQ2FsY3VsYXRvci9zb3VyY2UvZmVhdHVyZXMvSG9tZS9jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU8sQUFHd0IsQUFTQSxBQU9FLEFBR0wsQUFJQSxVQUhaLEFBSWMsS0FQZCwyREFoQmlCLEFBU0ksT0FlckIsUUF2QndCLDhFQUNILEFBUVQsVUFDRSxZQUNkLHVFQVQrQiwySEFDZCx5REFDakIiLCJmaWxlIjoiL1VzZXJzL3RncmVjby9pbmRleC1jb29wL0ZsaS1DYWxjdWxhdG9yL3NvdXJjZS9mZWF0dXJlcy9Ib21lL2NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4uL0NhbGN1bGF0b3IvY29tcG9uZW50J1xuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPD5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5jYWxjdWxhdG9yIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCxcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPENhbGN1bGF0b3IgLz5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\\n/*@ sourceURL=/Users/tgreco/index-coop/Fli-Calculator/source/features/Home/component.js */\"\n    }, void 0, false, void 0, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Calculator_component__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL0hvbWUvY29tcG9uZW50LmpzPzAxOGQiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQWlDRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGO0FBQUEsa0JBRFc7QUFBQSxDQUFiOztLQUFNQSxJO0FBc0NOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vc291cmNlL2ZlYXR1cmVzL0hvbWUvY29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi4vQ2FsY3VsYXRvci9jb21wb25lbnQnXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8PlxuICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAge2BcbiAgICAgICAgLmNhbGN1bGF0b3Ige1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsLFxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8Q2FsY3VsYXRvciAvPlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/features/Home/component.js\n");

/***/ })

});