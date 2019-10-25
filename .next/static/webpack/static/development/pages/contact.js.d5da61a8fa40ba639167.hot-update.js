webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Layout/Nav.js":
/*!**********************************!*\
  !*** ./components/Layout/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/jmir/Sites/seh-next/components/Layout/Nav.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return _this.state = {
    isActive: true
  }, toggleMenu = function toggleMenu(e) {
    _this.setState({
      isActive: !_this.state.isActive
    });
  }, render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: _this.toggleMenu,
      className: "px-2 pt-2 pb-4 {this.state.isActive ? 'show' : 'hidden'}",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "block text-gray-900 font-semibold rounded px-2 py-1 hover:bg-gray-400",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "block text-gray-900 font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-400",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "block text-gray-900 font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-400",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Contact"))));
  };
});

/***/ })

})
//# sourceMappingURL=contact.js.d5da61a8fa40ba639167.hot-update.js.map