"use strict";
(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 2380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mission),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/PagesComponents/contents/AboutContent.jsx + 1 modules
var AboutContent = __webpack_require__(5635);
;// CONCATENATED MODULE: ./pages/about/mission/data.json
const data_namespaceObject = JSON.parse('{"h1":"Mission, Vision, Values & Goals","text":[{"h2":"Our Mission"},"Ceaselessly serving to provide flawless and reliable service for the benefit and enhancement of our clients’ business activities, through our commitment of excellence. As a accompany we listen to, and understand the market needs in order to provide an exceptional service. Overall, we live up to the high standards we have set including ethical standards which we believe give us the edge over the others.",{"h2":"Our Vision"},"To provide leadership and innovation in the industry by delivering a portfolio of services built on quality, safety and a commitment to long term business relations.",["We are oriented to supply excellent services through our highly skilled team of professionals","We listen to our customers and develop a strong and cooperative relationship with them","Total Quality is our work method","Customer satisfaction is our final goal"],{"h2":"Our Values & Goals"},"Corporate Vision and Mission derive from those that are the foundation of shared values that guide the activities of Mediterranean Shipping Register and form the basis of our way of being and working. People are the main and constant point of reference for our actions.","Respect: colleagues, customers, suppliers, environment, rules and principles of working.","Innovation: innovation is everywhere in technology in organizations outside our company. To be innovative we prepare for the future, we solve problems and bring new solutions to our Customers.","Accountability: means we are responsible for what we do, individually and collectively. Accountable for the time, the money, all resources spent and the results obtained.","Proactivity: that\'s our capacity to anticipate events. We cannot wait and only solve problems when they appear. Anticipation will give us a better future because we are building it by ourselves.","Communication: relationships is the link between people. Building constructive relationships between us and with our customers is the basis of our success. Good relationships contribute to good climate to work together.","Team spirit: the attitudes to work together, sharing information and knowledge through the same objective. We are cooperative.","Continuous learning: learning, share information & knowledge, give everyone more opportunity to grow. What we have learnt years ago will become rapidly obsolete, new learning is vital for all of us.\\nThese shared values distinguish Mediterranean Shipping Register on the market for its unique style, and inside the company, for the great sense of belonging to all its employees."]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
;// CONCATENATED MODULE: ./pages/about/mission/index.jsx




function Mission({ data , pages , aboutPage  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "body-wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx(AboutContent/* default */.Z, {
                data: data,
                pages: pages,
                aboutPage: aboutPage
            })
        })
    });
}
async function getStaticProps() {
    const seo = store/* default.headerPages.1.pages.0.seo */.Z.headerPages[1].pages[0].seo, pages = store/* default.headerPages.1.pages */.Z.headerPages[1].pages, aboutPage = store/* default.headerPages.1 */.Z.headerPages[1];
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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,298,635], () => (__webpack_exec__(2380)));
module.exports = __webpack_exports__;

})();