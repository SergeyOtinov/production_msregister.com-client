"use strict";
(() => {
var exports = {};
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 6877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ advisory_and_consulting),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./pages/services/advisory-and-consulting/data.json
const data_namespaceObject = JSON.parse('{"h1":"CONSULTING AND LEGAL ADVICE","text":["MSR provides consulting support based on vast experience in ship operation, commercial and technical management, class inspections, and audits. Keeping track of international market trends and regulation changes our consulting service gives the most flexible and cost-effective solutions for any kind of problem relating to ships or shipping companies. Our clients always can rely on our highest qualification and competence."]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(8542);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/services/advisory-and-consulting/index.jsx







function AdvisoryAndConsulting({
  data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "body-wrapper",
      children: /*#__PURE__*/jsx_runtime_.jsx(ServicesContent/* default */.Z, {
        data: data
      })
    })
  });
}

async function getStaticProps() {
  const seo = store/* default.asidePages.5.seo */.Z.asidePages[5].seo;
  return {
    props: {
      data: data_namespaceObject,
      seo
    }
  };
}
/* harmony default export */ const advisory_and_consulting = (AdvisoryAndConsulting);

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [656,542], () => (__webpack_exec__(6877)));
module.exports = __webpack_exports__;

})();