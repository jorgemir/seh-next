webpackHotUpdate("static/development/pages/nfl/[slug].js",{

/***/ "./pages/nfl/[slug].js":
/*!*****************************!*\
  !*** ./pages/nfl/[slug].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/jorgemir/Sites/seh-next/pages/nfl/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Post = function Post(_ref) {
  var blogpost = _ref.blogpost;
  if (!blogpost) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "not found");
  var _blogpost$default = blogpost["default"],
      html = _blogpost$default.html,
      _blogpost$default$att = _blogpost$default.attributes,
      title = _blogpost$default$att.title,
      subtitle = _blogpost$default$att.subtitle,
      hero = _blogpost$default$att.hero,
      link = _blogpost$default$att.link,
      hotels = _blogpost$default$att.hotels;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "bg-gray-100 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "px-8 py-8 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "xl:max-w-lg xl:ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    className: "rounded-lg shadow-lg sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden",
    src: hero,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("h1", {
    className: "mt-6 text-2xl font-semibold text-gray-900 leading-tight sm:text-4xl lg:text-3xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, title), __jsx("h3", {
    className: "text-blue-400 text-sm sm:text-lg sm:text-4xl lg:text-3xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, subtitle), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx("div", {
    className: "hidden lg:block lg:w-1/2 lg:relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    className: "absolute inset-0 h-full w-full object-cover object-center",
    src: hero,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), __jsx("div", {
    className: "antialiased sm:flex text-gray-900 mt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, hotels.map(function (hotel, k) {
    return __jsx("div", {
      key: k,
      className: "bg-white border rounded-lg overflow-hidden max-w-lg inline-block mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "relative bg-red-500 pb-1/3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: hotel.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      className: "absolute h-full w-full object-cover",
      alt: hotel.name,
      src: hotel.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })))), __jsx("div", {
      className: "p-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h4", {
      className: "font-semibold text-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, hotel.name), __jsx("p", {
      className: "text-gray-600 text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, hotel.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: hotel.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      className: "block mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Contact Us Now"))));
  })));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, slug, blogpost;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            slug = query.slug;
            _context.next = 4;
            return __webpack_require__("./content/events lazy recursive ^\\.\\/.*\\.md$")("./".concat(slug, ".md"))["catch"](function () {
              return null;
            });

          case 4:
            blogpost = _context.sent;
            return _context.abrupt("return", {
              blogpost: blogpost
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[slug].js.5352c66fed683d92211f.hot-update.js.map