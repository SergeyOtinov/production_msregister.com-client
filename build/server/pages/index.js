(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./pages/index.module.css
var index_module = __webpack_require__(2897);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
;// CONCATENATED MODULE: ./pages/data.json
const data_namespaceObject = JSON.parse('{"h1":"Mediterranean Shipping Register","text":"Classification, Statutory & Certification Services"}');
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/index.jsx








function Index({
  data
}) {
  const {
    h1,
    text
  } = data;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (index_module_default()).wrapper,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).title,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: (index_module_default()).h1,
          children: h1
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: (index_module_default()).h2,
          children: text
        })]
      })
    })
  });
}

async function getStaticProps() {
  const seo = store/* default.headerPages.0.seo */.Z.headerPages[0].seo;
  return {
    props: {
      data: data_namespaceObject,
      seo
    }
  };
}
/* harmony default export */ const pages = (Index);

/***/ }),

/***/ 2897:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "index_wrapper__2LnuR",
	"title": "index_title__27Lr-",
	"h1": "index_h1__3tUQm",
	"h2": "index_h2__NG78v",
	"h3": "index_h3__2A3Gd"
};


/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [656], () => (__webpack_exec__(236)));
module.exports = __webpack_exports__;

})();