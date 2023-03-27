"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 7892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ policy),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/PagesComponents/contents/AboutContent.jsx + 1 modules
var AboutContent = __webpack_require__(5635);
;// CONCATENATED MODULE: ./pages/about/policy/data.json
const data_namespaceObject = JSON.parse('{"h1":"Our Corporate Policy","text":["Team work: we strive together to ensure that our services exceed the customers needs and expectations. Our performance and our products reflect our commitment to quality.","Objective and customer satisfaction: the Companys objective is to fully satisfy our customers to the best of our ability, at a fair and reasonable cost, through a highly motivated, knowledgeable and experienced workforce and by providing customers with services of the highest quality, to the best of our ability, at a reasonable cost."]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
;// CONCATENATED MODULE: ./pages/about/policy/index.jsx




function Policy({ data , pages , aboutPage  }) {
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
    const seo = store/* default.headerPages.1.pages.1.seo */.Z.headerPages[1].pages[1].seo, pages = store/* default.headerPages.1.pages */.Z.headerPages[1].pages, aboutPage = store/* default.headerPages.1 */.Z.headerPages[1];
    return {
        props: {
            data: data_namespaceObject,
            pages,
            aboutPage,
            seo
        }
    };
}
/* harmony default export */ const policy = (Policy);


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
var __webpack_exports__ = __webpack_require__.X(0, [664,298,635], () => (__webpack_exec__(7892)));
module.exports = __webpack_exports__;

})();