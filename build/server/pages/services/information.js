"use strict";
(() => {
var exports = {};
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 9383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ information),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/services/information/data.json
const data_namespaceObject = JSON.parse('{"h1":"USEFUL INFORMATION","text":[{"h4":"IMO Official Website:"},{"link":"www.imo.org"},{"h4":"International Association of Classification Societies Ltd (IACS):"},{"link":"www.iacs.org.uk"},{"h4":"The International Association of Ports and Harbors (IAPH):"},{"link":"www.iaphworldports.org"},{"h4":"EQUASIS (Public Shipping Database):"},{"link":"www.equasis.org"},{"h4":"Marine Traffic:"},{"link":"www.marinetraffic.com"},{"h4":"PSC Memorandums of Understanding (MoU):"},{"link":"www.parismou.org"},{"link":"www.tokyo-mou.org"},{"link":"www.medmou.org"},{"link":"www.bsmou.org"},{"link":"www.iomou.org"},{"h4":"ITF Official Website:"},{"link":"www.itfglobal.org"},{"h4":"International Group of P&I Clubs:"},{"link":"www.igpandi.org"},{"h4":"Weather Forecasts:"},{"link":"www.mgm.gov.tr"},{"link":"www.forecast.uoa.gr"},{"link":"www.windfinder.com"},{"link":"www.weather365.net"},{"link":"www.oceanweather.com"}]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(1979);
;// CONCATENATED MODULE: ./pages/services/information/index.jsx





function Information({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "body-wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx(ServicesContent/* default */.Z, {
                data: data
            })
        })
    });
}
async function getStaticProps() {
    const seo = store/* default.asidePages.6.seo */.Z.asidePages[6].seo;
    return {
        props: {
            data: data_namespaceObject,
            seo
        }
    };
}
/* harmony default export */ const information = (Information);


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
var __webpack_exports__ = __webpack_require__.X(0, [298,979], () => (__webpack_exec__(9383)));
module.exports = __webpack_exports__;

})();