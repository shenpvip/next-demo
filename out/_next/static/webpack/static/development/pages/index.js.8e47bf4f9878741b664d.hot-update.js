webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next-redux-wrapper/lib/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/button/style/css */ "./node_modules/antd-mobile/lib/button/style/css.js");
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/button */ "./node_modules/antd-mobile/lib/button/index.js");
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
      as: "/p/".concat(show.id),
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
    href: "/about",
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
    css: "h1.jsx-2987328901,a.jsx-2987328901{font-family:\"Arial\";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVucGVuZy9uZXh0LWRlbW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUc2QixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9zaGVucGVuZy9uZXh0LWRlbW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZC1tb2JpbGUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiSW5kZXhcIj5cbiAgICA8dWw+XG4gICAgICB7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcbiAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4gICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgPEJ1dHRvbj5HbyB0byBBYm91dDwvQnV0dG9uPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSwgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKT0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuZGF0YVxuXG4gIGNvbnNvbGUubG9nKGDmnI3liqHnq6/ojrflj5bmlbDmja7vvIFgKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/shenpeng/next-demo/pages/index.js */",
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.8e47bf4f9878741b664d.hot-update.js.map