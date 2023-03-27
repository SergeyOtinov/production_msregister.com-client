"use strict";
(() => {
var exports = {};
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 7724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ geography),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/PagesComponents/contents/AboutContent.jsx + 1 modules
var AboutContent = __webpack_require__(5635);
;// CONCATENATED MODULE: ./pages/about/geography/data.json
const data_namespaceObject = JSON.parse('{"h1":"Geography of Services","text":["Every project we undertake is as unique as the country it\'s in. Our maritime business consultants have worked in countries based at Asia, Europe, Russia, The UK.","Working closely with the public sector, private bodies and international agencies, our maritime business consultants are experts in their field.","Each assignment undertaken covers a variety of maritime sectors, including shipping, ship repair, marketing plans, business planning.","For more information on any of our previous assignments, or to enlist the help of MSR on your own project, you can get in touch with one of our consultants."]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
;// CONCATENATED MODULE: ./pages/about/geography/index.jsx




function Geography({ data , pages , aboutPage  }) {
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
    const seo = store/* default.headerPages.1.pages.2.seo */.Z.headerPages[1].pages[2].seo, pages = store/* default.headerPages.1.pages */.Z.headerPages[1].pages, aboutPage = store/* default.headerPages.1 */.Z.headerPages[1];
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
var __webpack_exports__ = __webpack_require__.X(0, [664,298,635], () => (__webpack_exec__(7724)));
module.exports = __webpack_exports__;

})();