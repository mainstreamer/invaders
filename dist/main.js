/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cannon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cannon.js */ \"./src/modules/cannon.js\");\n/* harmony import */ var _modules_unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/unit.js */ \"./src/modules/unit.js\");\n/* harmony import */ var _modules_tie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tie.js */ \"./src/modules/tie.js\");\n/* harmony import */ var _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/xwing.js */ \"./src/modules/xwing.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar App = function App() {\n  var _this = this;\n\n  _classCallCheck(this, App);\n\n  _defineProperty(this, \"makeSound\", function (src) {\n    var sound = document.createElement(\"audio\");\n    sound.src = src;\n    sound.setAttribute(\"preload\", \"auto\");\n    sound.setAttribute(\"controls\", \"none\");\n    sound.style.display = \"none\";\n    document.body.appendChild(sound);\n    return sound;\n  });\n\n  _defineProperty(this, \"increment\", function () {\n    _this.score += 1;\n    _this.ctx.fillStyle = \"black\";\n\n    _this.ctx.fillRect(0, 0, 30, 40);\n\n    _this.ctx.fillStyle = \"white\";\n\n    _this.ctx.fillText(_this.score, 5, 30);\n  });\n\n  _defineProperty(this, \"movement\", function (unit) {\n    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    return function () {\n      unit.direction = direction;\n      unit.move();\n    };\n  });\n\n  _defineProperty(this, \"make_xwing\", function (x, y) {\n    var base_image = new Image();\n    base_image.src = './src/img/xwing_128.png';\n\n    base_image.onload = function () {\n      _this.ctx.drawImage(base_image, x, y);\n    };\n  });\n\n  _defineProperty(this, \"make_tie_fighter\", function (x, y) {\n    var base_image2 = new Image();\n    base_image2.src = './src/img/tie_96.png';\n\n    base_image2.onload = function () {\n      _this.ctx.drawImage(base_image2, x, y);\n    };\n  });\n\n  _defineProperty(this, \"make_boom\", function (x, y) {\n    var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n    //142x200\n    var base_image3 = new Image();\n    base_image3.src = './src/img/explosion.gif';\n\n    base_image3.onload = function () {\n      _this.ctx.drawImage(base_image3, x, y);\n\n      if (func) {\n        setTimeout(func, 100);\n      }\n    };\n  });\n\n  _defineProperty(this, \"make_stars\", function () {\n    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    var numStars = number;\n\n    for (var i = 0; i < numStars; i++) {\n      var x = Math.round(Math.random() * _this.canvas.width);\n      var y = Math.round(Math.random() * _this.canvas.height);\n      _this.ctx.fillStyle = \"white\";\n\n      _this.ctx.fillRect(x, y, 1, 1);\n    }\n  });\n\n  _defineProperty(this, \"xwing_condition\", function (cannon, ship) {\n    ship.size = 200;\n    return cannon.y <= ship.y + 40 + ship.size - 75 && cannon.x >= ship.x - 20 && cannon.x <= ship.x + ship.size - 15;\n  });\n\n  // INIT\n  var left = 37;\n  var right = 39;\n  var space = 32;\n  this.canvas = document.getElementById('canvas');\n  this.canvas.width = document.body.clientWidth;\n  this.canvas.height = document.body.clientHeight;\n  this.ctx = this.canvas.getContext('2d');\n  this.ctx.fillStyle = \"black\";\n  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n  this.direction = null;\n  this.ctx.font = \"20px Arial\";\n  this.make_stars(200);\n  this.unit = new _modules_tie_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n  this.unit.draw();\n  this.score = 0;\n  this.ctx.fillStyle = \"white\";\n  this.ctx.fillText(this.score, 5, 30);\n  this.enemies = [new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 0, 0), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 350, 0), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 700, 0), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 1050, 0), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 150, 175), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 500, 175), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 850, 175), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 1200, 175), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 0, 350), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 350, 350), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 700, 350), new _modules_xwing_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 1050, 350)];\n  this.enemies.forEach(function (element) {\n    element.draw();\n  });\n  this.intervalMovement = null;\n\n  window.onkeydown = function (key) {\n    switch (key.which) {\n      // case 38 : unit.direction = 'up'; unit.move(); break;\n      // case 40 : unit.direction = 'down'; unit.move(); break;\n      case left:\n        if (!_this.intervalMovement) {\n          _this.intervalMovement = setInterval(_this.movement(_this.unit, 'left'), 1);\n        }\n\n        ;\n        break;\n\n      case right:\n        if (!_this.intervalMovement) {\n          _this.intervalMovement = setInterval(_this.movement(_this.unit, 'right'), 1);\n        }\n\n        ;\n        break;\n\n      case space:\n        _this.unit.shoot();\n\n        break;\n      //space\n      // case 27 : unit.shoot(); break; //esc\n      // case 13 : unit.shoot(); break; //enter\n\n      default:\n        break;\n    }\n  };\n\n  window.onkeyup = function (key) {\n    switch (key.which) {\n      case left:\n        clearInterval(_this.intervalMovement);\n        _this.intervalMovement = null;\n        break;\n\n      case right:\n        clearInterval(_this.intervalMovement);\n        _this.intervalMovement = null;\n        break;\n\n      default:\n        break;\n    }\n  };\n};\n\nnew App();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/cannon.js":
/*!*******************************!*\
  !*** ./src/modules/cannon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cannon; });\n/* harmony import */ var _unit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit.js */ \"./src/modules/unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Cannon =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Cannon, _Unit);\n\n  function Cannon(app) {\n    var _this;\n\n    _classCallCheck(this, Cannon);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cannon).call(this, app));\n    _this.explosion = _this.app.makeSound('./src/sound/explosion6.wav');\n    _this.app = app;\n    _this.health = 10;\n    _this.size = 5;\n    _this.x = 500;\n    _this.y = 500;\n    _this.step = 3;\n    _this.flyby = _this.flybyAlt = '';\n    return _this;\n  }\n\n  _createClass(Cannon, [{\n    key: \"draw\",\n    value: function draw() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x + 46;\n      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y - 5;\n      var x1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.size;\n      var y1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.size;\n      this.app.ctx.fillStyle = \"white\";\n      this.app.ctx.fillRect(x, y, x1, y1);\n    }\n  }, {\n    key: \"erase\",\n    value: function erase() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x + 46;\n      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y - 5;\n      var x1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.size;\n      var y1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.size;\n      this.app.ctx.fillStyle = \"black\";\n      this.app.ctx.fillRect(x, y, x1, y1);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      var _this2 = this;\n\n      var flag = 0;\n\n      var _loop = function _loop(i) {\n        if (_this2.app.xwing_condition(_this2, _this2.app.enemies[i])) {\n          flag = 1;\n\n          _this2.erase();\n\n          clearInterval(_this2.interval);\n\n          _this2.explosion.play();\n\n          var f = function f(cannon, ship) {\n            return function () {\n              _this2.app.ctx.fillStyle = \"black\";\n\n              _this2.app.ctx.fillRect(cannon.x, cannon.y - 150, ship.size - 20, ship.size);\n\n              setTimeout(ship.erase(), 100);\n              setTimeout(function () {\n                return _this2.app.enemies.splice(i, 1);\n              }, 100);\n\n              _this2.app.increment();\n            };\n          };\n\n          _this2.app.make_boom(_this2.x, _this2.y - 150, f(_this2, _this2.app.enemies[i]));\n\n          _this2.direction = '';\n        }\n      };\n\n      for (var i = 0; i < this.app.enemies.length; i++) {\n        _loop(i);\n      }\n\n      if (flag === 0) {\n        this.erase();\n\n        switch (this.direction) {\n          case 'left':\n            this.x -= this.step;\n            break;\n\n          case 'right':\n            this.x += this.step;\n            break;\n\n          case 'down':\n            this.y += this.step;\n            break;\n\n          case 'up':\n            this.y -= this.step;\n            break;\n\n          default:\n            break;\n        }\n\n        this.draw();\n      }\n    }\n  }]);\n\n  return Cannon;\n}(_unit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/cannon.js?");

/***/ }),

/***/ "./src/modules/tie.js":
/*!****************************!*\
  !*** ./src/modules/tie.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tie; });\n/* harmony import */ var _unit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit.js */ \"./src/modules/unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Tie =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Tie, _Unit);\n\n  function Tie(app) {\n    var _this;\n\n    _classCallCheck(this, Tie);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tie).call(this, app));\n    _this.app = app;\n    _this.size = 96;\n    _this.step = 1;\n    _this.y = 700;\n    return _this;\n  }\n\n  _createClass(Tie, [{\n    key: \"draw\",\n    value: function draw() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;\n      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;\n      var x1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.size;\n      var y1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.size;\n      this.app.make_tie_fighter(x, y);\n    }\n  }]);\n\n  return Tie;\n}(_unit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/tie.js?");

/***/ }),

/***/ "./src/modules/unit.js":
/*!*****************************!*\
  !*** ./src/modules/unit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Unit; });\n/* harmony import */ var _cannon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cannon.js */ \"./src/modules/cannon.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Unit =\n/*#__PURE__*/\nfunction () {\n  function Unit(app) {\n    _classCallCheck(this, Unit);\n\n    this.app = app;\n    this.ctx = app.ctx;\n    this.health = 10;\n    this.size = 48;\n    this.x = 550;\n    this.y = 550;\n    this.step = 5;\n    this.flyby = this.app.makeSound('http://www.sa-matra.net/sounds/starwars/XWing-Fly1.wav');\n    this.flybyAlt = this.app.makeSound('http://www.sa-matra.net/sounds/starwars/XWing-Fly2.wav');\n    this.shot = this.app.makeSound('http://www.sa-matra.net/sounds/starwars/ATST-ChinGuns.wav'); // this.fly2 = new sound('./src/sound/fly.wav');\n    // this.flyby2 = new sound('http://www.sa-matra.net/sounds/starwars/TIE-Fly6.wav');\n    // this.flyby3 = new sound('http://www.sa-matra.net/sounds/starwars/TIE-Fly7.wav');\n  }\n\n  _createClass(Unit, [{\n    key: \"getX\",\n    value: function getX() {\n      return this.x;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;\n      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;\n      var x1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.size;\n      var y1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.size;\n      var erase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n      this.app.ctx.fillRect(x, y, x1, y1);\n    }\n  }, {\n    key: \"erase\",\n    value: function erase() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;\n      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;\n      var x1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.size;\n      var y1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.size;\n      this.app.ctx.fillStyle = \"black\";\n      this.app.ctx.fillRect(x, y, x1, y1);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      if (this.y < 0) {\n        this.erase();\n        clearInterval(this.interval);\n        this.direction = '';\n      } else {\n        this.erase();\n\n        switch (this.direction) {\n          case 'left':\n            this.x -= this.step;\n            break;\n\n          case 'right':\n            this.x += this.step;\n            break;\n\n          case 'down':\n            this.y += this.step;\n            break;\n\n          case 'up':\n            this.y -= this.step;\n            break;\n\n          default:\n            break;\n        }\n\n        this.draw(); //SOUNDS                \n\n        if (this.direction === 'left' | this.direction === 'down') {\n          this.flybyAlt.play();\n        } else if (this.direction === 'right' | this.direction === 'left') {\n          this.flyby.play();\n        } //END SOUNDS\n\n      }\n    }\n  }, {\n    key: \"shoot\",\n    value: function shoot() {\n      this.shot.play();\n      var i = new _cannon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.app);\n      i.direction = 'up';\n      i.x = this.x;\n      i.y = this.y + 12;\n      i.interval = setInterval(function () {\n        i.move();\n      }, 1);\n    }\n  }]);\n\n  return Unit;\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/unit.js?");

/***/ }),

/***/ "./src/modules/xwing.js":
/*!******************************!*\
  !*** ./src/modules/xwing.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Xwing; });\n/* harmony import */ var _unit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit.js */ \"./src/modules/unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Xwing =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Xwing, _Unit);\n\n  function Xwing(app) {\n    var _this;\n\n    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 523;\n    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 73;\n\n    _classCallCheck(this, Xwing);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Xwing).call(this, app));\n    _this.app = app;\n    _this.y = y;\n    _this.x = x;\n    _this.health = 10;\n    _this.size = 96;\n    return _this;\n  }\n\n  _createClass(Xwing, [{\n    key: \"draw\",\n    value: function draw() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;\n      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;\n      var x1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.size;\n      var y1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.size;\n      this.app.make_xwing(x, y);\n    }\n  }, {\n    key: \"erase\",\n    value: function erase() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;\n      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;\n      var x1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.size + 38;\n      var y1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.size;\n      this.ctx.fillStyle = \"black\";\n      this.ctx.fillRect(x, y, x1, y1);\n    }\n  }]);\n\n  return Xwing;\n}(_unit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/xwing.js?");

/***/ })

/******/ });