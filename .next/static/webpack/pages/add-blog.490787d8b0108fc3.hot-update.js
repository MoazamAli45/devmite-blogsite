"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add-blog",{

/***/ "./src/shared/ImageInput.tsx":
/*!***********************************!*\
  !*** ./src/shared/ImageInput.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import React from \"react\";\n// const ImageInput = () => {\n//   return (\n//     <form className=\"file-upload-form\">\n//       <label htmlFor=\"file\" className=\"file-upload-label\">\n//         <div className=\"file-upload-design\">\n//           <svg viewBox=\"0 0 640 512\" height=\"1em\">\n//             <path d=\"M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z\"></path>\n//           </svg>\n//           <p>Drag and Drop</p>\n//           <p>or</p>\n//           <span className=\"browse-button\">Browse file</span>\n//         </div>\n//         <input id=\"file\" type=\"file\" />\n//       </label>\n//     </form>\n//   );\n// };\n// export default ImageInput;\n\nvar _s = $RefreshSig$();\n\nconst ImageInput = ()=>{\n    _s();\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = (event)=>{\n        const file = event.target.files[0];\n        console.log(file, selectedFile);\n        setSelectedFile(file);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"file-upload-form\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"file\",\n            className: \"file-upload-label\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"file-upload-design\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            viewBox: \"0 0 640 512\",\n                            className: \"h-6 w-6\",\n                            fill: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Client Work\\\\devmite-main-frontend\\\\src\\\\shared\\\\ImageInput.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Drag and Drop\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Client Work\\\\devmite-main-frontend\\\\src\\\\shared\\\\ImageInput.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"or\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Client Work\\\\devmite-main-frontend\\\\src\\\\shared\\\\ImageInput.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"browse-button\",\n                            children: \"Browse file\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Client Work\\\\devmite-main-frontend\\\\src\\\\shared\\\\ImageInput.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Client Work\\\\devmite-main-frontend\\\\src\\\\shared\\\\ImageInput.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"file\",\n                    type: \"file\",\n                    onChange: handleFileChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Client Work\\\\devmite-main-frontend\\\\src\\\\shared\\\\ImageInput.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Client Work\\\\devmite-main-frontend\\\\src\\\\shared\\\\ImageInput.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Client Work\\\\devmite-main-frontend\\\\src\\\\shared\\\\ImageInput.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageInput, \"cz3B5sQOxlrekAnUFUPeMaA2gqY=\");\n_c = ImageInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageInput);\nvar _c;\n$RefreshReg$(_c, \"ImageInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmVkL0ltYWdlSW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkJBQTZCO0FBRTdCLDZCQUE2QjtBQUM3QixhQUFhO0FBQ2IsMENBQTBDO0FBQzFDLDZEQUE2RDtBQUM3RCwrQ0FBK0M7QUFDL0MscURBQXFEO0FBQ3JELDRkQUE0ZDtBQUM1ZCxtQkFBbUI7QUFDbkIsaUNBQWlDO0FBQ2pDLHNCQUFzQjtBQUN0QiwrREFBK0Q7QUFDL0QsaUJBQWlCO0FBQ2pCLDBDQUEwQztBQUMxQyxpQkFBaUI7QUFDakIsY0FBYztBQUNkLE9BQU87QUFDUCxLQUFLO0FBRUwsNkJBQTZCOzs7QUFFVztBQUV4QyxNQUFNRSxhQUFhOztJQUNqQixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNSSxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsT0FBT0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUVsQ0MsUUFBUUMsR0FBRyxDQUFDSixNQUFNSjtRQUNsQkMsZ0JBQWdCRztJQUNsQjtJQUVBLHFCQUNFLDhEQUFDSztRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFNQyxTQUFRO1lBQU9GLFdBQVU7OzhCQUM5Qiw4REFBQ0c7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDSTs0QkFBSUMsU0FBUTs0QkFBY0wsV0FBVTs0QkFBVU0sTUFBSzs7Ozs7O3NDQUdwRCw4REFBQ0M7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0M7NEJBQUtSLFdBQVU7c0NBQWdCOzs7Ozs7Ozs7Ozs7OEJBRWxDLDhEQUFDUztvQkFBTUMsSUFBRztvQkFBT0MsTUFBSztvQkFBT0MsVUFBVXBCOzs7Ozs7Ozs7Ozs7Ozs7OztBQVUvQztHQS9CTUg7S0FBQUE7QUFpQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9JbWFnZUlucHV0LnRzeD9iMzk1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGNvbnN0IEltYWdlSW5wdXQgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxmb3JtIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLWZvcm1cIj5cclxuLy8gICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCIgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWQtbGFiZWxcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLWRlc2lnblwiPlxyXG4vLyAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDY0MCA1MTJcIiBoZWlnaHQ9XCIxZW1cIj5cclxuLy8gICAgICAgICAgICAgPHBhdGggZD1cIk0xNDQgNDgwQzY0LjUgNDgwIDAgNDE1LjUgMCAzMzZjMC02Mi44IDQwLjItMTE2LjIgOTYuMi0xMzUuOWMtLjEtMi43LS4yLTUuNC0uMi04LjFjMC04OC40IDcxLjYtMTYwIDE2MC0xNjBjNTkuMyAwIDExMSAzMi4yIDEzOC43IDgwLjJDNDA5LjkgMTAyIDQyOC4zIDk2IDQ0OCA5NmM1MyAwIDk2IDQzIDk2IDk2YzAgMTIuMi0yLjMgMjMuOC02LjQgMzQuNkM1OTYgMjM4LjQgNjQwIDI5MC4xIDY0MCAzNTJjMCA3MC43LTU3LjMgMTI4LTEyOCAxMjhIMTQ0em03OS0yMTdjLTkuNCA5LjQtOS40IDI0LjYgMCAzMy45czI0LjYgOS40IDMzLjkgMGwzOS0zOVYzOTJjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNFYyNTcuOWwzOSAzOWM5LjQgOS40IDI0LjYgOS40IDMzLjkgMHM5LjQtMjQuNiAwLTMzLjlsLTgwLTgwYy05LjQtOS40LTI0LjYtOS40LTMzLjkgMGwtODAgODB6XCI+PC9wYXRoPlxyXG4vLyAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgICA8cD5EcmFnIGFuZCBEcm9wPC9wPlxyXG4vLyAgICAgICAgICAgPHA+b3I8L3A+XHJcbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicm93c2UtYnV0dG9uXCI+QnJvd3NlIGZpbGU8L3NwYW4+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGlucHV0IGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgLz5cclxuLy8gICAgICAgPC9sYWJlbD5cclxuLy8gICAgIDwvZm9ybT5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW1hZ2VJbnB1dDtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW1hZ2VJbnB1dCA9ICgpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmaWxlLCBzZWxlY3RlZEZpbGUpO1xyXG4gICAgc2V0U2VsZWN0ZWRGaWxlKGZpbGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZC1mb3JtXCI+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLWxhYmVsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZC1kZXNpZ25cIj5cclxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA2NDAgNTEyXCIgY2xhc3NOYW1lPVwiaC02IHctNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgey8qIFlvdXIgU1ZHIHBhdGggaGVyZSAqL31cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHA+RHJhZyBhbmQgRHJvcDwvcD5cclxuICAgICAgICAgIDxwPm9yPC9wPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJvd3NlLWJ1dHRvblwiPkJyb3dzZSBmaWxlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCBpZD1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgey8qIHtzZWxlY3RlZEZpbGUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0ZWQtZmlsZSBiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWJsdWUtNDAwIHRleHQtYmx1ZS03MDAgcHgtNCBweS0yIHJvdW5kZWQgbXQtMlwiPlxyXG4gICAgICAgICAgPHA+U2VsZWN0ZWQgRmlsZToge3NlbGVjdGVkRmlsZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9ICovfVxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUlucHV0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlSW5wdXQiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImRpdiIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwicCIsInNwYW4iLCJpbnB1dCIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/shared/ImageInput.tsx\n"));

/***/ })

});