/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/shared/App.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/shared/App.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = module.exports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".App {\\n  text-align: center;\\n}\\n\\n.App-logo {\\n  height: 40vmin;\\n}\\n\\n.App-header {\\n  background-color: #282c34;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #09d3ac;\\n}\\n.container\\n{\\n  padding: 0 1rem;\\n\\n}\\n\\n.btn\\n{\\n  display: inline-block;\\n  border:none;\\n  background: #555;\\n  color: #fff;\\n  padding: 7px 20px;\\n  cursor: pointer;\\n\\n}\\n\\n.btn:hover{\\n  background: #666;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/shared/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _App = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _routes = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _StyleContext = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n\nvar _StyleContext2 = _interopRequireDefault(_StyleContext);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar app = (0, _express2.default)();\n\napp.use((0, _cors2.default)());\n\napp.use(_express2.default.static(\"public\"));\n\napp.get(\"*\", function (req, res, next) {\n  // const activeRoute=routes.find(route=>matchPath(req.url,route))||{}\n  console.log(\"reqUrl:\", req.url);\n\n  (0, _isomorphicFetch2.default)(\"http://localhost:4001/api/posts\").then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    var location = req.url;\n    console.log(\"location:\", location);\n    var context = { data: data };\n    var name = \"ABhishek\";\n    var css = new Set();\n    var insertCss = function insertCss() {\n      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {\n        styles[_key] = arguments[_key];\n      }\n\n      return styles.forEach(function (style) {\n        return css.add(style._getCss());\n      });\n    };\n\n    var markup = (0, _server.renderToString)(_react2.default.createElement(\n      _StyleContext2.default.Provider,\n      { value: { insertCss: insertCss } },\n      _react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: location, context: context },\n        _react2.default.createElement(_App2.default, null)\n      )\n    ));\n\n    res.send(\"\\n        <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <title>My Website</title>\\n        <style type=\\\"text/css\\\">\" + [].concat(_toConsumableArray(css)).join(\"\") + \"</style>\\n        \\n     <script>window.__INITIAL_DATA__ = \" + (0, _serializeJavascript2.default)(data) + \"</script>  \\n    </head>\\n    <body>\\n        \\n        <div id=\\\"root\\\">\" + markup + \"</div>\\n        <script src=\\\"bundle.js\\\"></script>   \\n                \\n    </body>\\n    </html>\\n        \");\n  });\n});\n\napp.listen(5000, function () {\n  console.log(\"server is listening on port 5000\");\n});\n\n// <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.css":
/*!****************************!*\
  !*** ./src/shared/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/App.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/App.css?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Header = __webpack_require__(/*! ./components/layout/Header */ \"./src/shared/components/layout/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Todos = __webpack_require__(/*! ./components/Todos */ \"./src/shared/components/Todos.js\");\n\nvar _Todos2 = _interopRequireDefault(_Todos);\n\nvar _App = __webpack_require__(/*! ./App.css */ \"./src/shared/App.css\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _AddTodo = __webpack_require__(/*! ./components/AddTodo */ \"./src/shared/components/AddTodo.js\");\n\nvar _AddTodo2 = _interopRequireDefault(_AddTodo);\n\nvar _uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nvar _uuid2 = _interopRequireDefault(_uuid);\n\nvar _About = __webpack_require__(/*! ./components/pages/About */ \"./src/shared/components/pages/About.js\");\n\nvar _About2 = _interopRequireDefault(_About);\n\nvar _withStyles = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar title1, id1;\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.markComplete = function (id, title, completed) {\n      var todo = {\n        _id: id,\n        title: title,\n        completed: !completed\n      };\n\n      fetch(\"http://localhost:4001/api/posts/update\" + \"/\" + id, {\n        method: \"put\",\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(todo)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return console.log(data);\n      }).catch(console.log(\"there is a err\"));\n      _this.setState({\n        todos: _this.state.todos.map(function (todo) {\n          if (todo._id === id) {\n            todo.completed = !todo.completed;\n          }\n          return todo;\n        })\n      });\n    };\n\n    _this.delTodo = function (id) {\n      _this.setState({\n        todos: [].concat(_toConsumableArray(_this.state.todos.filter(function (todo) {\n          return todo._id !== id;\n        })))\n      });\n    };\n\n    _this.myfunc = function (value, index, todos) {\n      if (value._id === id1) {\n        value.title = title1;\n      }\n\n      console.log(title1);\n      return value;\n    };\n\n    _this.updateTodo = function (todo) {\n      title1 = todo.title;\n      id1 = todo._id;\n\n      // this.myfunc();\n      _this.setState({ todos: _this.state.todos.map(_this.myfunc) });\n      // console.log(this.state.todos.map(this.myfunc));\n    };\n\n    _this.addTodo = function (data) {\n      var newTodo = {\n        _id: data._id,\n        title: data.title,\n        completed: data.completed\n      };\n\n      _this.setState({ todos: [newTodo].concat(_toConsumableArray(_this.state.todos)) });\n    };\n\n    _this.state = {\n      todos: []\n    };\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log(\"window.__INITIAL_DATA__\", window.__INITIAL_DATA__);\n      var tododata = window.__INITIAL_DATA__;\n      this.setState({ todos: tododata });\n      // fetch(\"http://localhost:4001/api/posts\")\n      //   .then(res => res.json())\n      //   .then(data => {\n      //     this.setState({ todos: data })\n      //     console.log('this is state',this.state.todos);\n\n      //   });\n    }\n\n    //Add todo\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(this.state.todos);\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(\n            \"div\",\n            { className: \"App\" },\n            _react2.default.createElement(\n              \"div\",\n              { id: \"page-body\" },\n              _react2.default.createElement(\n                _reactRouterDom.Route,\n                { exact: true, path: \"/\" },\n                _react2.default.createElement(_AddTodo2.default, { addTodo: this.addTodo }),\n                _react2.default.createElement(_Todos2.default, {\n                  todos: this.state.todos,\n                  markComplete: this.markComplete,\n                  delTodo: this.delTodo,\n                  updateTodo: this.updateTodo\n                })\n              ),\n              _react2.default.createElement(_reactRouterDom.Route, { path: \"/header\", component: _Header2.default }),\n              _react2.default.createElement(_reactRouterDom.Route, { path: \"/about\", component: _About2.default })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = (0, _withStyles2.default)(_App2.default)(App);\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/components/AddTodo.js":
/*!******************************************!*\
  !*** ./src/shared/components/AddTodo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AddTodo = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AddTodo = exports.AddTodo = function (_Component) {\n  _inherits(AddTodo, _Component);\n\n  function AddTodo() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, AddTodo);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      title: \"\"\n    }, _this.onChange = function (e) {\n      return _this.setState({ title: e.target.value });\n    }, _this.onSubmit = function (e) {\n      e.preventDefault();\n      var todo = {\n        title: _this.state.title,\n        completed: false\n      };\n      fetch(\"http://localhost:4001/api/posts/add\", {\n        method: \"POST\",\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(todo)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return _this.props.addTodo(data);\n      });\n      // this.props.addTodo(this.state.title);\n      _this.setState({ title: \"\" });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(AddTodo, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"form\",\n        { onSubmit: this.onSubmit, style: { display: \"flex\" } },\n        _react2.default.createElement(\"input\", {\n          type: \"text\",\n          name: \"title\",\n          value: this.state.title,\n          onChange: this.onChange,\n          placeholder: \"Add Todo\",\n          style: { flex: \"10\", padding: \"10px\", color: \"red\" }\n        }),\n        _react2.default.createElement(\"input\", {\n          type: \"submit\",\n          value: \"submit\",\n          className: \"btn\",\n          style: { flex: \"1\" }\n        })\n      );\n    }\n  }]);\n\n  return AddTodo;\n}(_react.Component);\n\nexports.default = AddTodo;\n\n//# sourceURL=webpack:///./src/shared/components/AddTodo.js?");

/***/ }),

/***/ "./src/shared/components/EditTodo.js":
/*!*******************************************!*\
  !*** ./src/shared/components/EditTodo.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.EditTodo = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar EditTodo = exports.EditTodo = function (_Component) {\n  _inherits(EditTodo, _Component);\n\n  function EditTodo() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, EditTodo);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditTodo.__proto__ || Object.getPrototypeOf(EditTodo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      title: \"\"\n    }, _this.onChange = function (e) {\n      return _this.setState({ title: e.target.value });\n    }, _this.onSubmit = function (e) {\n      var todo = {\n        title: _this.state.title,\n        completed: false\n      };\n      e.preventDefault();\n\n      fetch(\"http://localhost:4001/api/posts/update\" + \"/\" + _this.props.toId, {\n        method: \"put\",\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(todo)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return _this.props.updateTodo(data.post);\n      }).catch(console.log(\"there is a err\"));\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(EditTodo, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"form\",\n          { onSubmit: this.onSubmit, style: formStyle },\n          _react2.default.createElement(\"input\", {\n            type: \"text\",\n            placeholder: \"Edit  todo\",\n            id: \"edit\",\n            onChange: this.onChange\n          }),\n          _react2.default.createElement(\"input\", { type: \"submit\", value: \"Edit\" })\n        )\n      );\n    }\n  }]);\n\n  return EditTodo;\n}(_react.Component);\n\nexports.default = EditTodo;\n\n\nvar formStyle = {\n  color: \"#fff\",\n  textAlign: \"center\",\n  padding: \"10px\",\n  width: \"15%\",\n  float: \"right\",\n  marginTop: \"-20px\"\n};\n\n//# sourceURL=webpack:///./src/shared/components/EditTodo.js?");

/***/ }),

/***/ "./src/shared/components/TodoItem.js":
/*!*******************************************!*\
  !*** ./src/shared/components/TodoItem.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.TodoItem = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _EditTodo = __webpack_require__(/*! ./EditTodo */ \"./src/shared/components/EditTodo.js\");\n\nvar _EditTodo2 = _interopRequireDefault(_EditTodo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TodoItem = exports.TodoItem = function (_Component) {\n  _inherits(TodoItem, _Component);\n\n  function TodoItem(props) {\n    _classCallCheck(this, TodoItem);\n\n    var _this = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this, props));\n\n    _this.onClick = function (e) {\n      console.log(\"onclick \", _this.props.todo);\n      fetch(\"http://localhost:4001/api/posts/delete\" + \"/\" + _this.props.todo._id, {\n        method: \"delete\"\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return _this.props.delTodo(data.post._id);\n      });\n    };\n\n    _this.onChange = function (e) {\n\n      _this.props.markComplete(_this.props.todo._id, _this.props.todo.title, _this.props.todo.completed);\n    };\n\n    _this.getStyle = function () {\n      console.log(\"inside get style\", _this.props.todo.completed, _this.props.todo._id);\n      return {\n        padding: \"5px\",\n        textDecoration: _this.props.todo.completed ? \"line-through\" : \"none\",\n        background: \"#f4f4f4\",\n        borderBottom: \"1px dotted\"\n      };\n    };\n\n    return _this;\n  }\n\n  _createClass(TodoItem, [{\n    key: \"render\",\n    value: function render() {\n      var _props$todo = this.props.todo,\n          id = _props$todo.id,\n          title = _props$todo.title;\n\n      return _react2.default.createElement(\n        \"div\",\n        { style: this.getStyle() },\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\"input\", { type: \"checkbox\", onChange: this.onChange }),\n          \" \",\n          this.props.todo.title,\n          \"   \",\n          _react2.default.createElement(_EditTodo2.default, {\n            updateTodo: this.props.updateTodo,\n            toId: this.props.todo._id\n          }),\n          _react2.default.createElement(\n            \"button\",\n            { onClick: this.onClick, style: bntStyle },\n            \"X\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return TodoItem;\n}(_react.Component);\n\nvar bntStyle = {\n  background: \"#ff0000\",\n  color: \"#fff\",\n  border: \"none\",\n  padding: \"5px 10px\",\n  borderRadius: \"50%\",\n  float: \"right\",\n  marginTop: \"-20px\"\n};\n\nexports.default = TodoItem;\n\n//# sourceURL=webpack:///./src/shared/components/TodoItem.js?");

/***/ }),

/***/ "./src/shared/components/Todos.js":
/*!****************************************!*\
  !*** ./src/shared/components/Todos.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TodoItem = __webpack_require__(/*! ./TodoItem */ \"./src/shared/components/TodoItem.js\");\n\nvar _TodoItem2 = _interopRequireDefault(_TodoItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Todos = function (_Component) {\n  _inherits(Todos, _Component);\n\n  function Todos() {\n    _classCallCheck(this, Todos);\n\n    return _possibleConstructorReturn(this, (Todos.__proto__ || Object.getPrototypeOf(Todos)).apply(this, arguments));\n  }\n\n  _createClass(Todos, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return this.props.todos.map(function (todo) {\n        return (\n          // console.log(value)\n          _react2.default.createElement(\n            \"div\",\n            null,\n            _react2.default.createElement(_TodoItem2.default, {\n              id: todo._id,\n              updateTodo: _this2.props.updateTodo,\n              todo: todo,\n              markComplete: _this2.props.markComplete,\n              delTodo: _this2.props.delTodo\n            })\n          )\n        );\n      });\n    }\n  }]);\n\n  return Todos;\n}(_react.Component);\n\nexports.default = Todos;\n\n//# sourceURL=webpack:///./src/shared/components/Todos.js?");

/***/ }),

/***/ "./src/shared/components/layout/Header.js":
/*!************************************************!*\
  !*** ./src/shared/components/layout/Header.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"header\",\n        { style: headerStyle },\n        _react2.default.createElement(\n          \"h1\",\n          null,\n          \"TodoList\"\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/\", style: linkStyle },\n          \"Home\"\n        ),\n        \"|\",\n        \" \",\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { style: linkStyle, to: \"/about\" },\n          \"About\"\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nexports.default = Header;\n\n//SOme Styling\n\nvar headerStyle = {\n  background: \"#333\",\n  color: \"#fff\",\n  textAlign: \"center\",\n  padding: \"10px\"\n};\n\nvar linkStyle = {\n  color: \"#fff\",\n  textDecoration: \"none\"\n};\n\n//# sourceURL=webpack:///./src/shared/components/layout/Header.js?");

/***/ }),

/***/ "./src/shared/components/pages/About.js":
/*!**********************************************!*\
  !*** ./src/shared/components/pages/About.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.About = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Todos = __webpack_require__(/*! ../Todos */ \"./src/shared/components/Todos.js\");\n\nvar _Todos2 = _interopRequireDefault(_Todos);\n\nvar _Header = __webpack_require__(/*! ../layout/Header */ \"./src/shared/components/layout/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar About = exports.About = function (_Component) {\n  _inherits(About, _Component);\n\n  function About() {\n    _classCallCheck(this, About);\n\n    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));\n  }\n\n  _createClass(About, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"h1\",\n          null,\n          \"hi\"\n        ),\n        _react2.default.createElement(\"hr\", null)\n      );\n    }\n  }]);\n\n  return About;\n}(_react.Component);\n\nexports.default = About;\n\n//# sourceURL=webpack:///./src/shared/components/pages/About.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _About = __webpack_require__(/*! ./components/pages/About */ \"./src/shared/components/pages/About.js\");\n\nvar _About2 = _interopRequireDefault(_About);\n\nvar _Header = __webpack_require__(/*! ./components/layout/Header */ \"./src/shared/components/layout/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [{\n  path: '/about',\n\n  component: _About2.default\n}, {\n  path: '/header',\n\n  component: _Header2.default\n}];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/withStyles%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });