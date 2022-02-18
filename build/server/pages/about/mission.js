"use strict";
(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 8094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mission),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/PagesComponents/contents/AboutContent.jsx + 1 modules
var AboutContent = __webpack_require__(1136);
;// CONCATENATED MODULE: ./pages/about/mission/data.json
const data_namespaceObject = JSON.parse('{"h1":"Mission, Vision, Values & Goals","text":[{"h2":"Our Mission"},"Ceaselessly serving to provide flawless and reliable service for the benefit and enhancement of our clients’ business activities, through our commitment of excellence. As a accompany we listen to, and understand the market needs in order to provide an exceptional service. Overall, we live up to the high standards we have set including ethical standards which we believe give us the edge over the others.",{"h2":"Our Vision"},"To provide leadership and innovation in the industry by delivering a portfolio of services built on quality, safety and a commitment to long term business relations.",["We are oriented to supply excellent services through our highly skilled team of professionals","We listen to our customers and develop a strong and cooperative relationship with them","Total Quality is our work method","Customer satisfaction is our final goal"],{"h2":"Our Values & Goals"},"Corporate Vision and Mission derive from those that are the foundation of shared values that guide the activities of Mediterranean Shipping Register and form the basis of our way of being and working. People are the main and constant point of reference for our actions.","Respect: colleagues, customers, suppliers, environment, rules and principles of working.","Innovation: innovation is everywhere in technology in organizations outside our company. To be innovative we prepare for the future, we solve problems and bring new solutions to our Customers.","Accountability: means we are responsible for what we do, individually and collectively. Accountable for the time, the money, all resources spent and the results obtained.","Proactivity: that\'s our capacity to anticipate events. We cannot wait and only solve problems when they appear. Anticipation will give us a better future because we are building it by ourselves.","Communication: relationships is the link between people. Building constructive relationships between us and with our customers is the basis of our success. Good relationships contribute to good climate to work together.","Team spirit: the attitudes to work together, sharing information and knowledge through the same objective. We are cooperative.","Continuous learning: learning, share information & knowledge, give everyone more opportunity to grow. What we have learnt years ago will become rapidly obsolete, new learning is vital for all of us.\\nThese shared values distinguish Mediterranean Shipping Register on the market for its unique style, and inside the company, for the great sense of belonging to all its employees."]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/about/mission/index.jsx






function Mission({
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
  const seo = store/* default.headerPages.1.pages.0.seo */.Z.headerPages[1].pages[0].seo,
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
/* harmony default export */ const mission = (Mission);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,656,871], () => (__webpack_exec__(8094)));
module.exports = __webpack_exports__;

})();