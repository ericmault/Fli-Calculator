/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./source/features/RoiDetails/component.js":
/*!*************************************************!*\
  !*** ./source/features/RoiDetails/component.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/tgreco/index-coop/Fli-Calculator/source/features/RoiDetails/component.js\",\n    _this = undefined;\n\n\n\nvar isZero = function isZero(x) {\n  return x === 0 ? true : false;\n};\n\nvar RoiDetails = function RoiDetails(_ref) {\n  var _ref$finalTokenPrice = _ref.finalTokenPrice,\n      finalTokenPrice = _ref$finalTokenPrice === void 0 ? 0 : _ref$finalTokenPrice,\n      _ref$finalFliPrice = _ref.finalFliPrice,\n      finalFliPrice = _ref$finalFliPrice === void 0 ? 0 : _ref$finalFliPrice,\n      _ref$fliRoi = _ref.fliRoi,\n      fliRoi = _ref$fliRoi === void 0 ? 0 : _ref$fliRoi,\n      _ref$tokenRoi = _ref.tokenRoi,\n      tokenRoi = _ref$tokenRoi === void 0 ? 0 : _ref$tokenRoi,\n      _ref$fliStrategy = _ref.fliStrategy,\n      fliStrategy = _ref$fliStrategy === void 0 ? '' : _ref$fliStrategy;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: isZero(finalTokenPrice) ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"roiWrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"ROI Calculator Results | \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [\"FLI will outperform token investment by: \", fliStrategy = '']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [\"FLI Investment End Value: \", finalFliPrice, \" | ROI \", fliRoi]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [\"Token Invesment End Value: \", finalTokenPrice, \" | ROI \", tokenRoi]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = RoiDetails;\nRoiDetails.propTypes = {\n  fliTokenStrategy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,\n  finalTokenPrice: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  finalFliPrice: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  fliRoi: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,\n  tokenRoi: prop_types__WEBPACK_IMPORTED_MODULE_1__.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoiDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"RoiDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc291cmNlL2ZlYXR1cmVzL1JvaURldGFpbHMvY29tcG9uZW50LmpzP2RmYzQiXSwibmFtZXMiOlsiaXNaZXJvIiwieCIsIlJvaURldGFpbHMiLCJmaW5hbFRva2VuUHJpY2UiLCJmaW5hbEZsaVByaWNlIiwiZmxpUm9pIiwidG9rZW5Sb2kiLCJmbGlTdHJhdGVneSIsInByb3BUeXBlcyIsImZsaVRva2VuU3RyYXRlZ3kiLCJzdHJpbmciLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQ7QUFBQSxTQUFRQSxDQUFDLEtBQUssQ0FBTixHQUFVLElBQVYsR0FBaUIsS0FBekI7QUFBQSxDQUFmOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsa0NBQ2pCQyxlQURpQjtBQUFBLE1BQ2pCQSxlQURpQixxQ0FDQyxDQUREO0FBQUEsZ0NBRWpCQyxhQUZpQjtBQUFBLE1BRWpCQSxhQUZpQixtQ0FFRCxDQUZDO0FBQUEseUJBR2pCQyxNQUhpQjtBQUFBLE1BR2pCQSxNQUhpQiw0QkFHUixDQUhRO0FBQUEsMkJBSWpCQyxRQUppQjtBQUFBLE1BSWpCQSxRQUppQiw4QkFJTixDQUpNO0FBQUEsOEJBS2pCQyxXQUxpQjtBQUFBLE1BS2pCQSxXQUxpQixpQ0FLSCxFQUxHO0FBQUEsc0JBT2pCO0FBQUEsY0FDR1AsTUFBTSxDQUFDRyxlQUFELENBQU4sR0FBMEIsSUFBMUIsZ0JBQ0M7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGdFQUErQ0ksV0FBVyxHQUFHLEVBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQSxpREFDNkJILGFBRDdCLGFBQ21EQyxNQURuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQU1FO0FBQUEsa0RBQzhCRixlQUQ5QixhQUNzREcsUUFEdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBUGlCO0FBQUEsQ0FBbkI7O0tBQU1KLFU7QUF1Qk5BLFVBQVUsQ0FBQ00sU0FBWCxHQUF1QjtBQUNyQkMsa0JBQWdCLEVBQUVDLDhDQURHO0FBRXJCUCxpQkFBZSxFQUFFUSw4Q0FGSTtBQUdyQlAsZUFBYSxFQUFFTyw4Q0FITTtBQUlyQk4sUUFBTSxFQUFFTSw4Q0FKYTtBQUtyQkwsVUFBUSxFQUFFSyw4Q0FBTUE7QUFMSyxDQUF2QjtBQU9BLCtEQUFlVCxVQUFmIiwiZmlsZSI6Ii4vc291cmNlL2ZlYXR1cmVzL1JvaURldGFpbHMvY29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbnVtYmVyLCBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJ1xuY29uc3QgaXNaZXJvID0gKHgpID0+ICh4ID09PSAwID8gdHJ1ZSA6IGZhbHNlKVxuXG5jb25zdCBSb2lEZXRhaWxzID0gKHtcbiAgZmluYWxUb2tlblByaWNlID0gMCxcbiAgZmluYWxGbGlQcmljZSA9IDAsXG4gIGZsaVJvaSA9IDAsXG4gIHRva2VuUm9pID0gMCxcbiAgZmxpU3RyYXRlZ3kgPSAnJ1xufSkgPT4gKFxuICA8PlxuICAgIHtpc1plcm8oZmluYWxUb2tlblByaWNlKSA/IG51bGwgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvaVdyYXBwZXJcIj5cbiAgICAgICAgPGgyPlJPSSBDYWxjdWxhdG9yIFJlc3VsdHMgfCB7fTwvaDI+XG4gICAgICAgIDxoMz5GTEkgd2lsbCBvdXRwZXJmb3JtIHRva2VuIGludmVzdG1lbnQgYnk6IHsoZmxpU3RyYXRlZ3kgPSAnJyl9PC9oMz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIEZMSSBJbnZlc3RtZW50IEVuZCBWYWx1ZToge2ZpbmFsRmxpUHJpY2V9IHwgUk9JIHtmbGlSb2l9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICBUb2tlbiBJbnZlc21lbnQgRW5kIFZhbHVlOiB7ZmluYWxUb2tlblByaWNlfSB8IFJPSSB7dG9rZW5Sb2l9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8Lz5cbilcblxuUm9pRGV0YWlscy5wcm9wVHlwZXMgPSB7XG4gIGZsaVRva2VuU3RyYXRlZ3k6IHN0cmluZyxcbiAgZmluYWxUb2tlblByaWNlOiBudW1iZXIsXG4gIGZpbmFsRmxpUHJpY2U6IG51bWJlcixcbiAgZmxpUm9pOiBudW1iZXIsXG4gIHRva2VuUm9pOiBudW1iZXJcbn1cbmV4cG9ydCBkZWZhdWx0IFJvaURldGFpbHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/features/RoiDetails/component.js\n");

/***/ })

});