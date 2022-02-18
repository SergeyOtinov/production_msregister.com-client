"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 5613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./pages/about/data.json
const data_namespaceObject = JSON.parse('{"h1":"About Us","text":["Mediterranean Shipping Register (MSR) is a private and independent Classification Society registered in London, United Kingdom in 2011, presently having more than a hundred vessels up to VLCC size under its class.","Our mission is to provide safety of ship and human life at sea, as well as environmental protection corresponding to recent world decarbonization policies. Applying above mentioned standards MSR provides a wide range of services related to the Classification, Statutory Certification, Management, Consulting and Technical Supervision for any kind of water transport.","MSR is a dynamically developing Classification Society, keen to achieve the highest international standards of quality. Our success is assured by the maintenance and improvement of the internal Quality Management System, developed in accordance with the international standard ISO 9001:2015. At the same time, our activity complies with Resolutions IMO - A.739 (18) and A.789 (19) - as well as International Standards and Codes, such as ISO / IEC 17020 and recently-ratified Code for Recognized Organizations (RO CODE), adopted by Resolution MSC.349(92) and Resolution MEPC.237(65).","Our staff is a team of highly skilled and experienced professionals, adapting all IMO and IACS best practices to services and guidelines of MSR.","Our scope of services:",["1. Classification of water transport","2. Statutory certification","3. Pre-sale, off-hire, P&I and other types of surveys","4. Independent engineering services","5. Consulting and legal advice "],"","Today vessel and a shipping company has to comply with a numerous requirement of international conventions (SOLAS, IMDG, ISMC etc.) and organizations (IMO, ITF, etc.). Such compliance to be guaranteed by the Maritime Administrations, who authorized MSR to perform ship’s surveys, carry out audits, verify ship’s security plan and issue relevant Certificates. Presently Mediterranean Shipping Register has been authorized by:",{"link":"http://www.zma.go.tz/tzirs.php","title":"Tanzania Zanzibar International Register of Shipping (TZIRS)"},{"link":"https://www.bahamasmaritime.com/","title":"Maritime Administration of Cameroon"},{"link":"http://www.narm.md","title":"Naval Agency as Maritime Administration of the Republic of Moldova (NARM)"}]}');
// EXTERNAL MODULE: ./components/PagesComponents/contents/AboutContent.jsx + 1 modules
var AboutContent = __webpack_require__(1136);
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/about/index.jsx







function About({
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
  const seo = store/* default.headerPages.1.seo */.Z.headerPages[1].seo,
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
/* harmony default export */ const about = (About);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,656,871], () => (__webpack_exec__(5613)));
module.exports = __webpack_exports__;

})();