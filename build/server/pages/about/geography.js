"use strict";
(() => {
var exports = {};
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 2082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ geography),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/PagesComponents/contents/AboutContent.jsx + 1 modules
var AboutContent = __webpack_require__(1136);
;// CONCATENATED MODULE: ./pages/about/geography/data.json
const data_namespaceObject = JSON.parse('{"h1":"Geography of Services","text":["Every project we undertake is as unique as the country it\'s in. Our maritime business consultants have worked in countries based at Asia, Europe, Russia, The UK.","Working closely with the public sector, private bodies and international agencies, our maritime business consultants are experts in their field.","Each assignment undertaken covers a variety of maritime sectors, including shipping, ship repair, marketing plans, business planning.","For more information on any of our previous assignments, or to enlist the help of MSR on your own project, you can get in touch with one of our consultants."]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/about/geography/index.jsx






function Geography({
  data,
  pages,
  aboutPage
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "body-wrapper",
      children: /*#__PURE__*/jsx_runtime_.jsx(AboutContent/* default */.Z, {
        data: data,
        pages: pages,
        aboutPage: aboutPage
      })
    })
  });
}

async function getStaticProps() {
  const seo = store/* default.headerPages.1.pages.2.seo */.Z.headerPages[1].pages[2].seo,
        pages = store/* default.headerPages.1.pages */.Z.headerPages[1].pages,
        aboutPage = store/* default.headerPages.1 */.Z.headerPages[1];
  return {
    props: {
      data: data_namespaceObject,
      pages,
      aboutPage,
      seo
    }
  };
}
/* harmony default export */ const geography = (Geography);

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,656,871], () => (__webpack_exec__(2082)));
module.exports = __webpack_exports__;

})();