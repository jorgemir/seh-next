webpackHotUpdate("static/development/pages/index.js",{

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



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var state = _ref.state,
      hildren = _ref.hildren,
      props = _objectWithoutProperties(_ref, ["state", "hildren"]);

  return state = {
    showMenu: false
  }, toggleMenu = function toggleMenu() {
    _this.setState({
      showMenu: !_this.state.showMenu
    });
  }, render = function render() {
    var menuVis = _this.state.showMenu ? 'show' : 'hide';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: _this.toggleMenu,
      className: "px-2 pt-2 pb-4 {this.state.showMenu ? 'show' : 'hidden'}",
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
//# sourceMappingURL=index.js.0593e7b21fc23bc24acb.hot-update.js.map