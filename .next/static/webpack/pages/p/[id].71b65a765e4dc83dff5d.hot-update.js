webpackHotUpdate_N_E("pages/p/[id]",{

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_8__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\owner\\Documents\\javascript\\blogr-nextjs-prisma\\pages\\p\\[id].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






function deletePost(_x) {
  return _deletePost.apply(this, arguments);
}

function _deletePost() {
  _deletePost = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://localhost:3000/api/post/".concat(id), {
              method: "DELETE"
            });

          case 2:
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _deletePost.apply(this, arguments);
}

function publishPost(_x2) {
  return _publishPost.apply(this, arguments);
}

function _publishPost() {
  _publishPost = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://localhost:3000/api/publish/".concat(id), {
              method: "PUT"
            });

          case 2:
            _context2.next = 4;
            return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _publishPost.apply(this, arguments);
}

var Post = function Post(props) {
  _s();

  var _session$user, _props$author, _props$author2;

  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_8__["useSession"])(),
      _useSession2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1];

  if (loading) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    }, "Authenticating ...");
  }

  var userHasValidSession = Boolean(session);
  var postBelongsToUser = (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email) === ((_props$author = props.author) === null || _props$author === void 0 ? void 0 : _props$author.email);
  var title = props.title;

  if (!props.published) {
    title = "".concat(title, " (Draft)");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3440979688",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-3440979688",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, title), __jsx("p", {
    className: "jsx-3440979688",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "By ", (props === null || props === void 0 ? void 0 : (_props$author2 = props.author) === null || _props$author2 === void 0 ? void 0 : _props$author2.name) || "Unknown author"), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: props.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), !props.published && userHasValidSession && postBelongsToUser && __jsx("button", {
    onClick: function onClick() {
      return publishPost(props.id);
    },
    className: "jsx-3440979688",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Publish")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3440979688",
    __self: _this
  }, ".page.jsx-3440979688{background:white;padding:2rem;}.actions.jsx-3440979688{margin-top:2rem;}button.jsx-3440979688{background:#ececec;border:0;border-radius:0.125rem;padding:1rem 2rem;}button.jsx-3440979688+button.jsx-3440979688{margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb3duZXJcXERvY3VtZW50c1xcamF2YXNjcmlwdFxcYmxvZ3ItbmV4dGpzLXByaXNtYVxccGFnZXNcXHBcXFtpZF0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEa0IsQUFHNEIsQUFLRCxBQUlHLEFBT0YsZ0JBVm5CLENBTGUsQUFnQmYsRUFQVyxTQUNjLEVBVHpCLHFCQVVvQixrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxvd25lclxcRG9jdW1lbnRzXFxqYXZhc2NyaXB0XFxibG9nci1uZXh0anMtcHJpc21hXFxwYWdlc1xccFxcW2lkXS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBvc3RQcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBOdW1iZXIocGFyYW1zPy5pZCkgfHwgLTEsXG4gICAgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBwb3N0LFxuICB9O1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3QvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICB9KTtcbiAgUm91dGVyLnB1c2goXCIvXCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwdWJsaXNoUG9zdChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3B1Ymxpc2gvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICB9KTtcbiAgYXdhaXQgUm91dGVyLnB1c2goXCIvXCIpO1xufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQb3N0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5BdXRoZW50aWNhdGluZyAuLi48L2Rpdj47XG4gIH1cbiAgY29uc3QgdXNlckhhc1ZhbGlkU2Vzc2lvbiA9IEJvb2xlYW4oc2Vzc2lvbik7XG4gIGNvbnN0IHBvc3RCZWxvbmdzVG9Vc2VyID0gc2Vzc2lvbj8udXNlcj8uZW1haWwgPT09IHByb3BzLmF1dGhvcj8uZW1haWw7XG4gIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlO1xuICBpZiAoIXByb3BzLnB1Ymxpc2hlZCkge1xuICAgIHRpdGxlID0gYCR7dGl0bGV9IChEcmFmdClgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD5CeSB7cHJvcHM/LmF1dGhvcj8ubmFtZSB8fCBcIlVua25vd24gYXV0aG9yXCJ9PC9wPlxuICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Byb3BzLmNvbnRlbnR9IC8+XG4gICAgICAgIHshcHJvcHMucHVibGlzaGVkICYmIHVzZXJIYXNWYWxpZFNlc3Npb24gJiYgcG9zdEJlbG9uZ3NUb1VzZXIgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHVibGlzaFBvc3QocHJvcHMuaWQpfT5QdWJsaXNoPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\owner\\\\Documents\\\\javascript\\\\blogr-nextjs-prisma\\\\pages\\\\p\\\\[id].tsx */"));
};

_s(Post, "btnbnkOsPYI0mLfZro/2DT47AuA=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_8__["useSession"]];
});

_c = Post;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcC8udHN4Il0sIm5hbWVzIjpbImRlbGV0ZVBvc3QiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiUm91dGVyIiwicHVzaCIsInB1Ymxpc2hQb3N0IiwiUG9zdCIsInByb3BzIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwidXNlckhhc1ZhbGlkU2Vzc2lvbiIsIkJvb2xlYW4iLCJwb3N0QmVsb25nc1RvVXNlciIsInVzZXIiLCJlbWFpbCIsImF1dGhvciIsInRpdGxlIiwicHVibGlzaGVkIiwibmFtZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztTQW1CZUEsVTs7Ozs7aU1BQWYsaUJBQTBCQyxFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUUMsS0FBSywwQ0FBbUNELEVBQW5DLEdBQXlDO0FBQ2xERSxvQkFBTSxFQUFFO0FBRDBDLGFBQXpDLENBRGI7O0FBQUE7QUFJRUMsOERBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQU9lQyxXOzs7OztrTUFBZixrQkFBMkJMLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNRQyxLQUFLLDZDQUFzQ0QsRUFBdEMsR0FBNEM7QUFDckRFLG9CQUFNLEVBQUU7QUFENkMsYUFBNUMsQ0FEYjs7QUFBQTtBQUFBO0FBQUEsbUJBSVFDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBSlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9BLElBQU1FLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUFBLG9CQUNoQkMsbUVBQVUsRUFETTtBQUFBO0FBQUEsTUFDcENDLE9BRG9DO0FBQUEsTUFDM0JDLE9BRDJCOztBQUUzQyxNQUFJQSxPQUFKLEVBQWE7QUFDWCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQVA7QUFDRDs7QUFDRCxNQUFNQyxtQkFBbUIsR0FBR0MsT0FBTyxDQUFDSCxPQUFELENBQW5DO0FBQ0EsTUFBTUksaUJBQWlCLEdBQUcsQ0FBQUosT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCw2QkFBQUEsT0FBTyxDQUFFSyxJQUFULGdFQUFlQyxLQUFmLHdCQUF5QlIsS0FBSyxDQUFDUyxNQUEvQixrREFBeUIsY0FBY0QsS0FBdkMsQ0FBMUI7QUFDQSxNQUFJRSxLQUFLLEdBQUdWLEtBQUssQ0FBQ1UsS0FBbEI7O0FBQ0EsTUFBSSxDQUFDVixLQUFLLENBQUNXLFNBQVgsRUFBc0I7QUFDcEJELFNBQUssYUFBTUEsS0FBTixhQUFMO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsS0FBTCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQU8sQ0FBQVYsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCw4QkFBQUEsS0FBSyxDQUFFUyxNQUFQLGtFQUFlRyxJQUFmLEtBQXVCLGdCQUE5QixDQUZGLEVBR0UsTUFBQyxxREFBRDtBQUFlLFVBQU0sRUFBRVosS0FBSyxDQUFDYSxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRyxDQUFDYixLQUFLLENBQUNXLFNBQVAsSUFBb0JQLG1CQUFwQixJQUEyQ0UsaUJBQTNDLElBQ0M7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNUixXQUFXLENBQUNFLEtBQUssQ0FBQ1AsRUFBUCxDQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLENBREY7QUFBQTtBQUFBO0FBQUEsZ3dIQURGO0FBaUNELENBN0NEOztHQUFNTSxJO1VBQ3VCRSwyRDs7O0tBRHZCRixJOztBQStDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcC9baWRdLjcxYjY1YTc2NWU0ZGM4M2RmZjVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBvc3RQcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBOdW1iZXIocGFyYW1zPy5pZCkgfHwgLTEsXG4gICAgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBwb3N0LFxuICB9O1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3QvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICB9KTtcbiAgUm91dGVyLnB1c2goXCIvXCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwdWJsaXNoUG9zdChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3B1Ymxpc2gvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICB9KTtcbiAgYXdhaXQgUm91dGVyLnB1c2goXCIvXCIpO1xufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQb3N0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5BdXRoZW50aWNhdGluZyAuLi48L2Rpdj47XG4gIH1cbiAgY29uc3QgdXNlckhhc1ZhbGlkU2Vzc2lvbiA9IEJvb2xlYW4oc2Vzc2lvbik7XG4gIGNvbnN0IHBvc3RCZWxvbmdzVG9Vc2VyID0gc2Vzc2lvbj8udXNlcj8uZW1haWwgPT09IHByb3BzLmF1dGhvcj8uZW1haWw7XG4gIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlO1xuICBpZiAoIXByb3BzLnB1Ymxpc2hlZCkge1xuICAgIHRpdGxlID0gYCR7dGl0bGV9IChEcmFmdClgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD5CeSB7cHJvcHM/LmF1dGhvcj8ubmFtZSB8fCBcIlVua25vd24gYXV0aG9yXCJ9PC9wPlxuICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Byb3BzLmNvbnRlbnR9IC8+XG4gICAgICAgIHshcHJvcHMucHVibGlzaGVkICYmIHVzZXJIYXNWYWxpZFNlc3Npb24gJiYgcG9zdEJlbG9uZ3NUb1VzZXIgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHVibGlzaFBvc3QocHJvcHMuaWQpfT5QdWJsaXNoPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=