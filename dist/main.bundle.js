"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  background-color: #fff;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 17px;\\r\\n  font-weight: 500;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin: 0;\\r\\n  height: 13vh;\\r\\n  margin-left: 4%;\\r\\n}\\r\\n\\r\\n#btnRefresh {\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  padding: 0;\\r\\n  margin-right: 3%;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  margin: 0;\\r\\n  font-size: 16px;\\r\\n  font-weight: 500;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.applyBtn {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  padding: 0;\\r\\n  width: 65%;\\r\\n  margin-left: 60%;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n  border-top: 1px solid #dcdbdb;\\r\\n  border-bottom: 1px solid #dcdbdb;\\r\\n}\\r\\n\\r\\n#task {\\r\\n  border: none;\\r\\n  height: 10vh;\\r\\n}\\r\\n\\r\\n#task::placeholder {\\r\\n  opacity: 0.8;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#task:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#refresh,\\r\\n#return {\\r\\n  width: 6vh;\\r\\n  height: 6vh;\\r\\n  margin-right: 3%;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 40%;\\r\\n  border: 1px solid #dcdbdb;\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.oneTask {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 4fr 1fr;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  height: 11vh;\\r\\n  border-bottom: 1px solid #dcdbdb;\\r\\n}\\r\\n\\r\\n.check:checked + h2 {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.editInput {\\r\\n  border: none;\\r\\n  background: transparent;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.dots,\\r\\n.trashBtn {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  transform: rotate(90deg);\\r\\n  padding: 0;\\r\\n  width: 24%;\\r\\n  font-size: 12px;\\r\\n  margin-left: 55%;\\r\\n  cursor: pointer;\\r\\n  -webkit-transform: rotate(90deg);\\r\\n  -moz-transform: rotate(90deg);\\r\\n  -ms-transform: rotate(90deg);\\r\\n  -o-transform: rotate(90deg);\\r\\n}\\r\\n\\r\\n.trashBtn {\\r\\n  transform: rotate(0deg);\\r\\n  -webkit-transform: rotate(0deg);\\r\\n  -moz-transform: rotate(0deg);\\r\\n  -ms-transform: rotate(0deg);\\r\\n  -o-transform: rotate(0deg);\\r\\n}\\r\\n\\r\\n#clear {\\r\\n  border: none;\\r\\n  background-color: #fff;\\r\\n  height: 10vh;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#clear:hover {\\r\\n  background: #e9e9e9;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/refresh.png */ \"./src/img/refresh.png\");\n/* harmony import */ var _img_return_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/return.png */ \"./src/img/return.png\");\n/* harmony import */ var _modules_saveTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/saveTasks.js */ \"./src/modules/saveTasks.js\");\n/* harmony import */ var _modules_displayTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/displayTask.js */ \"./src/modules/displayTask.js\");\n// import Css ,images sources =>\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst refreshImg = document.querySelector('#refresh');\r\nconst returnImg = document.querySelector('#return');\r\n\r\nrefreshImg.src = _img_refresh_png__WEBPACK_IMPORTED_MODULE_1__;\r\nreturnImg.src = _img_return_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n(0,_modules_saveTasks_js__WEBPACK_IMPORTED_MODULE_3__.save)();\r\n(0,_modules_displayTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\nconst refreshBtn = document.querySelector('#btnRefresh');\r\nrefreshBtn.addEventListener('click', () => {\r\n  window.location.reload();\r\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/TasksClass.js":
/*!***********************************!*\
  !*** ./src/modules/TasksClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Tasks {\r\n  constructor(description, completed, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n//# sourceURL=webpack://webpack/./src/modules/TasksClass.js?");

/***/ }),

/***/ "./src/modules/addRemove.js":
/*!**********************************!*\
  !*** ./src/modules/addRemove.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayTasks.js */ \"./src/modules/arrayTasks.js\");\n/* harmony import */ var _img_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/trash.png */ \"./src/img/trash.png\");\n/* harmony import */ var _img_more_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/more.png */ \"./src/img/more.png\");\n/* harmony import */ var _img_apply_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/apply.png */ \"./src/img/apply.png\");\n\r\n\r\n\r\n\r\n\r\nconst listParent = document.querySelector('ul');\r\nconst createEl = (description, index) => {\r\n  const listChild = document.createElement('li');\r\n  const checkBox = document.createElement('input');\r\n  const heading = document.createElement('h2');\r\n  const dotsButton = document.createElement('button');\r\n  const applyButton = document.createElement('button');\r\n  const dots = document.createElement('img');\r\n  const apply = document.createElement('img');\r\n\r\n  //\r\n  heading.textContent = description;\r\n  // Assign attributes =>\r\n\r\n  checkBox.setAttribute('type', 'checkbox');\r\n  checkBox.setAttribute('name', 'check');\r\n  checkBox.classList.add('check');\r\n  dotsButton.setAttribute('type', 'submit');\r\n  dots.setAttribute('src', _img_more_png__WEBPACK_IMPORTED_MODULE_2__);\r\n  dots.setAttribute('alt', 'Do you want to delete this task?');\r\n  apply.setAttribute('src', _img_apply_png__WEBPACK_IMPORTED_MODULE_3__);\r\n\r\n  // Assing id/classes =>\r\n\r\n  listChild.classList.add('oneTask');\r\n  checkBox.setAttribute('id', 'check');\r\n  applyButton.classList.add('applyBtn');\r\n  applyButton.append(apply);\r\n  dotsButton.classList.add('dots');\r\n  dotsButton.append(dots);\r\n\r\n  // appending elements =>\r\n  listParent.appendChild(listChild);\r\n  listChild.appendChild(checkBox);\r\n  listChild.appendChild(heading);\r\n  listChild.appendChild(dotsButton);\r\n  listChild.appendChild(applyButton);\r\n\r\n  const trashBtn = document.createElement('button');\r\n  trashBtn.setAttribute('id', index);\r\n\r\n  dots.addEventListener('click', () => {\r\n    listChild.style.gridTemplateColumns = '1fr 4fr 1fr 1fr';\r\n    applyButton.style.display = 'block';\r\n    heading.setAttribute('contenteditable', 'true');\r\n    // apply button to save description changes\r\n    applyButton.addEventListener('click', () => {\r\n      applyButton.style.display = 'none';\r\n      trashBtn.style.display = 'none';\r\n      dotsButton.style.display = 'block';\r\n      listChild.style.gridTemplateColumns = '1fr 4fr 1fr';\r\n      heading.setAttribute('contenteditable', 'false');\r\n      for (let i = 0; i < _arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i += 1) {\r\n        if (_arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].index === index) {\r\n          _arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].description = heading.textContent;\r\n          localStorage.setItem('myTasks', JSON.stringify(_arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks));\r\n        }\r\n      }\r\n    });\r\n    dotsButton.style.display = 'none';\r\n    const trashImg = document.createElement('img');\r\n    trashBtn.classList.add('trashBtn');\r\n    trashImg.setAttribute('src', _img_trash_png__WEBPACK_IMPORTED_MODULE_1__);\r\n    trashBtn.appendChild(trashImg);\r\n    listChild.appendChild(trashBtn);\r\n\r\n    // Remove func\r\n\r\n    trashBtn.addEventListener('click', () => {\r\n      if (_arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks === []) return;\r\n      listChild.remove();\r\n      _arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.splice(index - 1, 1);\r\n      localStorage.setItem('myTasks', JSON.stringify(_arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks));\r\n\r\n      for (let i = index - 1; i < _arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i += 1) {\r\n        _arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].index -= 1;\r\n        localStorage.setItem('myTasks', JSON.stringify(_arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks));\r\n      }\r\n      listParent.innerHTML = '';\r\n      _arrayTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.forEach((task) => {\r\n        listParent.appendChild(createEl(task.description, task.index));\r\n      });\r\n    });\r\n  });\r\n  return listChild;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEl);\n\n//# sourceURL=webpack://webpack/./src/modules/addRemove.js?");

/***/ }),

/***/ "./src/modules/arrayTasks.js":
/*!***********************************!*\
  !*** ./src/modules/arrayTasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myTasks\": () => (/* binding */ myTasks),\n/* harmony export */   \"savedTasks\": () => (/* binding */ savedTasks)\n/* harmony export */ });\nconst myTasks = [];\r\nconst savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/arrayTasks.js?");

/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _saveTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveTasks.js */ \"./src/modules/saveTasks.js\");\n/* harmony import */ var _TasksClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksClass.js */ \"./src/modules/TasksClass.js\");\n/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addRemove.js */ \"./src/modules/addRemove.js\");\n\r\n\r\n\r\n\r\nconst displayTask = () => {\r\n  const input = document.querySelector('#task');\r\n  input.addEventListener('change', () => {\r\n    const Task = new _TasksClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](input.value, false, _saveTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.length + 1);\r\n    (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Task.description, Task.index);\r\n    let listChild = document.createElement('li');\r\n    listChild = Task;\r\n    _saveTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.push(listChild);\r\n    input.value = '';\r\n    localStorage.setItem('myTasks', JSON.stringify(_saveTasks_js__WEBPACK_IMPORTED_MODULE_0__.myTasks));\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTask);\n\n//# sourceURL=webpack://webpack/./src/modules/displayTask.js?");

/***/ }),

/***/ "./src/modules/saveTasks.js":
/*!**********************************!*\
  !*** ./src/modules/saveTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myTasks\": () => (/* reexport safe */ _arrayTasks_js__WEBPACK_IMPORTED_MODULE_2__.myTasks),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"savedTasks\": () => (/* reexport safe */ _arrayTasks_js__WEBPACK_IMPORTED_MODULE_2__.savedTasks)\n/* harmony export */ });\n/* harmony import */ var _TasksClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksClass.js */ \"./src/modules/TasksClass.js\");\n/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRemove.js */ \"./src/modules/addRemove.js\");\n/* harmony import */ var _arrayTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayTasks.js */ \"./src/modules/arrayTasks.js\");\n\r\n\r\n\r\n// const myTasks = [];\r\n// const savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];\r\n\r\nconst save = () => {\r\n  _arrayTasks_js__WEBPACK_IMPORTED_MODULE_2__.savedTasks.forEach((ele) => {\r\n    const Task = new _TasksClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ele.description, ele.completed, ele.index);\r\n    _arrayTasks_js__WEBPACK_IMPORTED_MODULE_2__.myTasks.push(Task);\r\n    (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Task.description, Task.index);\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/saveTasks.js?");

/***/ }),

/***/ "./src/img/apply.png":
/*!***************************!*\
  !*** ./src/img/apply.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3080e5b0d3a316539178.png\";\n\n//# sourceURL=webpack://webpack/./src/img/apply.png?");

/***/ }),

/***/ "./src/img/more.png":
/*!**************************!*\
  !*** ./src/img/more.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"72288f7244789e5b8cf3.png\";\n\n//# sourceURL=webpack://webpack/./src/img/more.png?");

/***/ }),

/***/ "./src/img/refresh.png":
/*!*****************************!*\
  !*** ./src/img/refresh.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f82922ba12a7d52a3a1.png\";\n\n//# sourceURL=webpack://webpack/./src/img/refresh.png?");

/***/ }),

/***/ "./src/img/return.png":
/*!****************************!*\
  !*** ./src/img/return.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8d06f341e13e51ed767.png\";\n\n//# sourceURL=webpack://webpack/./src/img/return.png?");

/***/ }),

/***/ "./src/img/trash.png":
/*!***************************!*\
  !*** ./src/img/trash.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6e19c9ec2af2e934833.png\";\n\n//# sourceURL=webpack://webpack/./src/img/trash.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);