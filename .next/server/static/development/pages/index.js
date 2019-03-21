module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_wing_blank_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/wing-blank/style/css */ "antd-mobile/lib/wing-blank/style/css");
/* harmony import */ var antd_mobile_lib_wing_blank_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_wing_blank_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_wing_blank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/wing-blank */ "antd-mobile/lib/wing-blank");
/* harmony import */ var antd_mobile_lib_wing_blank__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_wing_blank__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/nav-bar/style/css */ "antd-mobile/lib/nav-bar/style/css");
/* harmony import */ var antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile/lib/nav-bar */ "antd-mobile/lib/nav-bar");
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd-mobile/lib/icon/style/css */ "antd-mobile/lib/icon/style/css");
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd-mobile/lib/icon */ "antd-mobile/lib/icon");
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/shenpeng/next-demo/components/Layout.js";




/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(function (_ref) {
  var router = _ref.router,
      children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-715010791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
    className: "jsx-715010791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mode: "light",
    icon: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }),
    onLeftClick: function onLeftClick() {
      return router.back();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Ant Design Mobile example"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
    className: "jsx-715010791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    styleId: "715010791",
    css: "h1.jsx-715010791{padding:15px 0 9px 15px;color:#000;font-size:16px;line-height:16px;height:16px;font-weight:bolder;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVucGVuZy9uZXh0LWRlbW8vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQixBQUdpQyx3QkFDYixXQUNJLGVBQ0UsaUJBQ0wsWUFDTyxtQkFDRCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3NoZW5wZW5nL25leHQtZGVtby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdkJhciwgSWNvbiwgV2luZ0JsYW5rIH0gZnJvbSAnYW50ZC1tb2JpbGUnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoKHsgcm91dGVyLCBjaGlsZHJlbiwgdGl0bGUgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8TmF2QmFyXG4gICAgICBtb2RlPSdsaWdodCdcbiAgICAgIGljb249ezxJY29uIHR5cGU9J2xlZnQnIC8+fVxuICAgICAgb25MZWZ0Q2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XG4gICAgPlxuICAgICAgQW50IERlc2lnbiBNb2JpbGUgZXhhbXBsZVxuICAgIDwvTmF2QmFyPlxuICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMCA5cHggMTVweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8V2luZ0JsYW5rPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV2luZ0JsYW5rPlxuICA8L2Rpdj5cbikpXG4iXX0= */\n/*@ sourceURL=/Users/shenpeng/next-demo/components/Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_wing_blank__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, children));
}));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/button/style/css */ "antd-mobile/lib/button/style/css");
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/button */ "antd-mobile/lib/button");
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "/Users/shenpeng/next-demo/pages/index.js";



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "jsx-2987328901",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: show.id,
      className: "jsx-2987328901",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/post?id=".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "jsx-2987328901",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, show.name)));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/about?name=sp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Go to About")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    styleId: "2987328901",
    css: "h1.jsx-2987328901,a.jsx-2987328901{font-family:\"Arial\";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVucGVuZy9uZXh0LWRlbW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUc2QixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9zaGVucGVuZy9uZXh0LWRlbW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZC1tb2JpbGUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiSW5kZXhcIj5cbiAgICA8dWw+XG4gICAgICB7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcbiAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPExpbmsgaHJlZj1cIi9hYm91dD9uYW1lPXNwXCI+XG4gICAgICA8QnV0dG9uPkdvIHRvIEFib3V0PC9CdXR0b24+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhXG5cbiAgY29uc29sZS5sb2coYOacjeWKoeerr+iOt+WPluaVsOaNru+8gWApXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/shenpeng/next-demo/pages/index.js */",
    __self: this
  }));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.data;

        case 5:
          data = _context.sent;
          console.log("\u670D\u52A1\u7AEF\u83B7\u53D6\u6570\u636E\uFF01");
          return _context.abrupt("return", {
            shows: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd-mobile/lib/button":
/*!*****************************************!*\
  !*** external "antd-mobile/lib/button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/button");

/***/ }),

/***/ "antd-mobile/lib/button/style/css":
/*!***************************************************!*\
  !*** external "antd-mobile/lib/button/style/css" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/button/style/css");

/***/ }),

/***/ "antd-mobile/lib/icon":
/*!***************************************!*\
  !*** external "antd-mobile/lib/icon" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon");

/***/ }),

/***/ "antd-mobile/lib/icon/style/css":
/*!*************************************************!*\
  !*** external "antd-mobile/lib/icon/style/css" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon/style/css");

/***/ }),

/***/ "antd-mobile/lib/nav-bar":
/*!******************************************!*\
  !*** external "antd-mobile/lib/nav-bar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/nav-bar");

/***/ }),

/***/ "antd-mobile/lib/nav-bar/style/css":
/*!****************************************************!*\
  !*** external "antd-mobile/lib/nav-bar/style/css" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/nav-bar/style/css");

/***/ }),

/***/ "antd-mobile/lib/wing-blank":
/*!*********************************************!*\
  !*** external "antd-mobile/lib/wing-blank" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/wing-blank");

/***/ }),

/***/ "antd-mobile/lib/wing-blank/style/css":
/*!*******************************************************!*\
  !*** external "antd-mobile/lib/wing-blank/style/css" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/wing-blank/style/css");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map