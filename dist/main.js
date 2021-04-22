/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  height: 80px;\\r\\n  background-color: #000000;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n#projectForm {\\r\\n  display: none;\\r\\n  background-color: #5c73f2;\\r\\n}\\r\\n\\r\\n#todoForm {\\r\\n  display: none;\\r\\n  background-color: #5c73f2;\\r\\n}\\r\\n\\r\\n.todoDiv {\\r\\n  margin-top: 30px;\\r\\n  margin-bottom: 10px;\\r\\n  box-shadow: 10px 10px;\\r\\n  padding: 10px;\\r\\n  background-color: bisque;\\r\\n}\\r\\n\\r\\n.highPriority {\\r\\n  background-color: rgb(250, 95, 95);\\r\\n}\\r\\n\\r\\n.lowPriority {\\r\\n  background-color: rgb(129, 241, 163);\\r\\n}\\r\\n\\r\\n.editBtn,\\r\\n.deleteBtn {\\r\\n  background-color: #fff;\\r\\n  margin: 10px 10px 0 0;\\r\\n  border: none;\\r\\n  padding: 5px 10px;\\r\\n  border-radius: 10%;\\r\\n}\\r\\n\\r\\n#editTodo {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#errorMsgs {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 767px) {\\r\\n  .main {\\r\\n    height: auto;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo_app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/creators.js":
/*!*************************!*\
  !*** ./src/creators.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectName\": () => (/* binding */ createProjectName),\n/* harmony export */   \"createTodoObject\": () => (/* binding */ createTodoObject)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\n\r\n// import { allProjects, currentProject, displayCurrentProjects } from './index'\r\n\r\n//  allProjects = []; \r\n//  currentProject = '';\r\n\r\nconst createProjectName = (project, allProjects) => {\r\n  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(project);\r\n  allProjects.push(newProject);\r\n  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(allProjects);\r\n  _domElements__WEBPACK_IMPORTED_MODULE_3__.domObjects.errorMsgsAlert('The Project has been created successfully');\r\n  if (_domElements__WEBPACK_IMPORTED_MODULE_3__.selectProject) {\r\n    _domElements__WEBPACK_IMPORTED_MODULE_3__.selectProject.innerHTML = '';\r\n  }\r\n  (0,_utils__WEBPACK_IMPORTED_MODULE_4__.selectOption)(allProjects);\r\n  _domElements__WEBPACK_IMPORTED_MODULE_3__.domObjects.hideProjectForm();\r\n  if (_domElements__WEBPACK_IMPORTED_MODULE_3__.selectProject) {\r\n    currentProject = _domElements__WEBPACK_IMPORTED_MODULE_3__.selectProject.value;\r\n  }\r\n};\r\n\r\n\r\nconst createTodoObject = (title, description, dueDate, priority, currentProject, allProjects) => {\r\n  if (currentProject == '') {\r\n    createProjectName('Default Project', allProjects);\r\n  }\r\n\r\n  const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.default)(title, description, dueDate, priority);\r\n\r\n  allProjects.forEach((project) => {\r\n    if (project.projectName === currentProject) {\r\n      project.todoList.push(newTodo);\r\n      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(allProjects);\r\n      displayCurrentProjects();\r\n      _domElements__WEBPACK_IMPORTED_MODULE_3__.domObjects.hideTodoForm();\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo_app/./src/creators.js?");

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainContent\": () => (/* binding */ mainContent),\n/* harmony export */   \"selectProject\": () => (/* binding */ selectProject),\n/* harmony export */   \"addProjectBtn\": () => (/* binding */ addProjectBtn),\n/* harmony export */   \"toDoBtn\": () => (/* binding */ toDoBtn),\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"projectName\": () => (/* binding */ projectName),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"cancelProject\": () => (/* binding */ cancelProject),\n/* harmony export */   \"myTodoForm\": () => (/* binding */ myTodoForm),\n/* harmony export */   \"todoTitle\": () => (/* binding */ todoTitle),\n/* harmony export */   \"todoDescription\": () => (/* binding */ todoDescription),\n/* harmony export */   \"todoDueDate\": () => (/* binding */ todoDueDate),\n/* harmony export */   \"todoPriority\": () => (/* binding */ todoPriority),\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo),\n/* harmony export */   \"submitTodo\": () => (/* binding */ submitTodo),\n/* harmony export */   \"cancelTodo\": () => (/* binding */ cancelTodo),\n/* harmony export */   \"todoLists\": () => (/* binding */ todoLists),\n/* harmony export */   \"todosContents\": () => (/* binding */ todosContents),\n/* harmony export */   \"todoListDetails\": () => (/* binding */ todoListDetails),\n/* harmony export */   \"domObjects\": () => (/* binding */ domObjects)\n/* harmony export */ });\nconst mainContent = document.querySelector('#content');\nconst selectProject = document.querySelector('#mySelectProject');\nconst addProjectBtn = document.querySelector('#addProjectBtn');\nconst toDoBtn = document.querySelector('#toDoBtn');\n\nconst projectForm = document.querySelector('#myProjectForm');\nconst projectName = document.querySelector('#projectName');\nconst createProject = document.querySelector('#createProject');\nconst cancelProject = document.querySelector('#cancelProject');\n\nconst myTodoForm = document.querySelector('#myTodoForm');\nconst todoTitle = document.querySelector('#todoTitle');\nconst todoDescription = document.querySelector('#todoDescription');\nconst todoDueDate = document.querySelector('#todoDueDate');\nconst todoPriority = document.querySelector('#todoPriority');\n\nconst editTodo = document.querySelector('#editTodo');\nconst submitTodo = document.querySelector('#submitTodo');\nconst cancelTodo = document.querySelector('#cancelTodo');\n\nconst todoLists = document.createElement('div');\nconst todoListDetails = document.createElement('p');\nconst errorMsgs = document.querySelector('#errorMsgs');\nconst todosContents = todoListDetails.innerHTML;\n\nconst domObjects = (() => {\n  const showProjectForm = () => {\n    projectForm.style.display = 'block';\n  };\n\n  const hideProjectForm = () => {\n    projectForm.style.display = 'none';\n  };\n  const showTodoForm = () => {\n    myTodoForm.style.display = 'block';\n  };\n\n  const hideTodoForm = () => {\n    myTodoForm.style.display = 'none';\n  };\n\n  const showSubmitTodo = () => {\n    submitTodo.style.display = 'block';\n    editTodo.style.display = 'none';\n  };\n\n  const hideSubmitTodo = () => {\n    submitTodo.style.display = 'none';\n    editTodo.style.display = 'block';\n  };\n\n  const errorMsgsAlert = (msg) => { errorMsgs.innerHTML = msg; };\n\n  const removeMsg = () => {\n    errorMsgs.innerHTML = '';\n  };\n\n  return {\n    showProjectForm,\n    hideProjectForm,\n    showTodoForm,\n    hideTodoForm,\n    showSubmitTodo,\n    hideSubmitTodo,\n    errorMsgsAlert,\n    removeMsg,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://todo_app/./src/domElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"currentProject\": () => (/* binding */ currentProject),\n/* harmony export */   \"displayCurrentProjects\": () => (/* binding */ displayCurrentProjects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _creators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creators */ \"./src/creators.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* eslint-disable eqeqeq */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet allProjects = [];\r\nlet currentProject = '';\r\nlet currentTodo = '';\r\n\r\nconst displayCurrentProjects = (currentProject) => { // eslint-disable-line\r\n  if (currentProject == '') {\r\n    currentProject = _domElements__WEBPACK_IMPORTED_MODULE_2__.selectProject.value; // eslint-disable-line\r\n  }\r\n\r\n  allProjects.forEach((project) => {\r\n    if (project.projectName === currentProject) {\r\n      _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.removeMsg();\r\n      _domElements__WEBPACK_IMPORTED_MODULE_2__.todoLists.innerHTML = '';\r\n      if (project.todoList.length > 0) {\r\n        for (let i = 0; i < project.todoList.length; i += 1) {\r\n          const todoDiv = document.createElement('div');\r\n          (0,_utils__WEBPACK_IMPORTED_MODULE_3__.priorityBg)(project.todoList[i].priority, todoDiv);\r\n          todoDiv.classList.add('todoDiv');\r\n\r\n          let todoString = `Title: ${project.todoList[i].title} </br>`;\r\n          todoString += `Description :${project.todoList[i].description} </br>`;\r\n          todoString += `DueDate :${project.todoList[i].dueDate} </br>`;\r\n          todoString += `Priority  :${project.todoList[i].priority} </br>`;\r\n          todoDiv.innerHTML = todoString;\r\n\r\n          const editBtn = document.createElement('button');\r\n          const deleteBtn = document.createElement('button');\r\n\r\n          editBtn.innerHTML = 'Edit';\r\n          deleteBtn.innerHTML = 'Delete';\r\n          editBtn.classList.add('editBtn');\r\n          deleteBtn.classList.add('deleteBtn');\r\n          editBtn.value = i;\r\n          deleteBtn.value = i;\r\n          todoDiv.appendChild(editBtn);\r\n          todoDiv.appendChild(deleteBtn);\r\n          _domElements__WEBPACK_IMPORTED_MODULE_2__.todoLists.appendChild(todoDiv);\r\n          _domElements__WEBPACK_IMPORTED_MODULE_2__.mainContent.appendChild(_domElements__WEBPACK_IMPORTED_MODULE_2__.todoLists);\r\n        }\r\n      } else {\r\n        _domElements__WEBPACK_IMPORTED_MODULE_2__.todoListDetails.innerHTML = 'no todo list!';\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\nconst initialLoad = () => {\r\n  allProjects = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getProjects)();\r\n  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.selectOption)(allProjects);\r\n  displayCurrentProjects(currentProject);\r\n};\r\n\r\nconst validateProjectInput = (event) => {\r\n  event.preventDefault();\r\n  if (_domElements__WEBPACK_IMPORTED_MODULE_2__.projectName.value === '') {\r\n    _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.errorMsgsAlert('Project Name can not be empty');\r\n  } else {\r\n    (0,_creators__WEBPACK_IMPORTED_MODULE_5__.createProjectName)(_domElements__WEBPACK_IMPORTED_MODULE_2__.projectName.value, allProjects);\r\n  }\r\n};\r\n\r\nconst validateTodoInput = (event) => {\r\n  event.preventDefault();\r\n  if (_domElements__WEBPACK_IMPORTED_MODULE_2__.todoTitle.value === '') {\r\n    _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.errorMsgsAlert('Title can not be empty');\r\n  } else {\r\n    (0,_creators__WEBPACK_IMPORTED_MODULE_5__.createTodoObject)(_domElements__WEBPACK_IMPORTED_MODULE_2__.todoTitle.value, _domElements__WEBPACK_IMPORTED_MODULE_2__.todoDescription.value, _domElements__WEBPACK_IMPORTED_MODULE_2__.todoDueDate.value, _domElements__WEBPACK_IMPORTED_MODULE_2__.todoPriority.value, currentProject, allProjects);\r\n    document.getElementById('dropDownProject').reset();\r\n  }\r\n};\r\n\r\nconst deleteTodo = (target) => {\r\n  allProjects.forEach((proj) => {\r\n    if (proj.projectName === currentProject) {\r\n      proj.todoList.splice(target.value, 1);\r\n      (0,_storage__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(allProjects);\r\n      displayCurrentProjects(currentProject);\r\n    }\r\n  });\r\n};\r\n\r\nconst showEditTodoForm = (target) => {\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.showTodoForm();\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.hideSubmitTodo();\r\n  allProjects.forEach((proj) => {\r\n    if (proj.projectName === currentProject) {\r\n      const temp = proj.todoList[target.value];\r\n      _domElements__WEBPACK_IMPORTED_MODULE_2__.todoTitle.value = temp.title;\r\n      _domElements__WEBPACK_IMPORTED_MODULE_2__.todoDescription.value = temp.description;\r\n      _domElements__WEBPACK_IMPORTED_MODULE_2__.todoDueDate.value = temp.dueDate;\r\n      _domElements__WEBPACK_IMPORTED_MODULE_2__.todoPriority.value = temp.priority;\r\n      currentTodo = target.value;\r\n    }\r\n  });\r\n};\r\n\r\nconst editTodoObject = () => {\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.showSubmitTodo();\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.hideTodoForm();\r\n  allProjects.forEach((proj) => {\r\n    if (proj.projectName === currentProject) {\r\n      const editedTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.default)(_domElements__WEBPACK_IMPORTED_MODULE_2__.todoTitle.value, _domElements__WEBPACK_IMPORTED_MODULE_2__.todoDescription.value, _domElements__WEBPACK_IMPORTED_MODULE_2__.todoDueDate.value, _domElements__WEBPACK_IMPORTED_MODULE_2__.todoPriority.value); // eslint-disable-line \r\n      proj.todoList[currentTodo] = editedTodo;// eslint-disable-line \r\n      const objIndex = allProjects.findIndex(((obj) => obj.projectName == currentProject));\r\n      allProjects[objIndex] = proj;\r\n      (0,_storage__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(allProjects);\r\n      displayCurrentProjects(currentProject);\r\n    }\r\n  });\r\n};\r\n\r\nconst btnListner = (targetBtn) => {\r\n  if (targetBtn.classList == 'editBtn') {\r\n    showEditTodoForm(targetBtn);\r\n  } else if (targetBtn.classList == 'deleteBtn') {\r\n    deleteTodo(targetBtn);\r\n  }\r\n};\r\n\r\ninitialLoad();\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.addProjectBtn.onclick = () => {\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.showProjectForm();\r\n};\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.toDoBtn.onclick = () => {\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.showTodoForm();\r\n};\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.createProject.onclick = (event) => {\r\n  validateProjectInput(event);\r\n};\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.submitTodo.onclick = (event) => {\r\n  validateTodoInput(event);\r\n};\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.cancelProject.onclick = (event) => {\r\n  event.preventDefault();\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.hideProjectForm();\r\n};\r\n\r\n//\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.cancelTodo.onclick = (ev) => {\r\n  ev.preventDefault();\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.hideTodoForm();\r\n  _domElements__WEBPACK_IMPORTED_MODULE_2__.domObjects.showSubmitTodo();\r\n};\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.editTodo.onclick = (ev) => {\r\n  ev.preventDefault();\r\n  editTodoObject();\r\n};\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.todoLists.addEventListener('click', (e) => {\r\n  btnListner(e.target);\r\n});\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_2__.selectProject.onchange = () => {\r\n  currentProject = _domElements__WEBPACK_IMPORTED_MODULE_2__.selectProject.value;\r\n  displayCurrentProjects(currentProject);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo_app/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectObject = (projectName) => {\n  const todoList = [];\n\n  return { projectName, todoList };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectObject);\n\n\n//# sourceURL=webpack://todo_app/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveProjects\": () => (/* binding */ saveProjects),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects)\n/* harmony export */ });\nconst saveProjects = (projects) => {\r\n    const str = JSON.stringify(projects);\r\n    localStorage.setItem('allProjects', str); // eslint-disable-line\r\n};\r\n\r\nconst getProjects = () => {\r\n    let projects;\r\n    const str = localStorage.getItem('allProjects'); // eslint-disable-line\r\n    projects = JSON.parse(str);\r\n    if (!projects) {\r\n        projects = [];\r\n    }\r\n    return projects\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo_app/./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoObject = (title, description, dueDate, priority) => ({\n  title, description, dueDate, priority,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoObject);\n\n\n//# sourceURL=webpack://todo_app/./src/todo.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectOption\": () => (/* binding */ selectOption),\n/* harmony export */   \"priorityBg\": () => (/* binding */ priorityBg)\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n\r\n\r\n//Populate Select Project Drop Down\r\nconst selectOption = (projects) => {\r\n    projects.forEach((project) => {\r\n        const option = document.createElement('option');\r\n        option.innerHTML = project.projectName;\r\n        if (_domElements__WEBPACK_IMPORTED_MODULE_0__.selectProject) {\r\n            _domElements__WEBPACK_IMPORTED_MODULE_0__.selectProject.appendChild(option);\r\n        }\r\n    });\r\n};\r\n\r\n//Set Priority Color\r\nconst priorityBg = (priority, todoDiv) => {\r\n    if (priority === 'High') {\r\n        todoDiv.classList.add('highPriority');\r\n    } else if (priority === 'Low') {\r\n        todoDiv.classList.add('lowPriority');\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo_app/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;