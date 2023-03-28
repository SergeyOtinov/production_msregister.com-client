"use strict";
(() => {
var exports = {};
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 2008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ surveys),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/services/surveys/data.json
const data_namespaceObject = JSON.parse('{"h1":"SURVEYS","text":["An experienced and skilled staff of the Mediterranean Shipping register performs all kinds of surveys. There are the following class survey types:",["1. Initial: before the submission of the ship into class","2. Periodical:","2.1 Annual - in order to check if ship meets all conditions of class and to check the operation of mechanisms, devices, and installations, which the MSR’s rules for the classification and construction of ships are applied to.","2.2 Intermediate – for checking of hull structures, machinery, boilers and pressure vessels, equipment and supplies, electrical equipment with respect to their sufficient condition for certain types of operations","2.3 Special – to be performed for renewal of the class. Its goal is to confirm that the technical condition of the ship and all changes applied to its facilities meet the requirements of MSR and maritime administration","2.4 Annual survey for class confirmation is intended for establishing that the ship complies to a sufficient degree with the conditions of class, as well as for checking the operation of machinery, devices and installations covered by the requirements of the MRS Rules.","2.5 Intermediate survey shall be carried out either at or between the second and third annual surveys. Items, which are additional to the items to be surveyed at annual surveys, may be surveyed either at or between the second and third annual survey.","2.6 Special survey for class renewal is intended for determining whether the ship\'s technical condition and structural and composition modifications of its items comply with the requirements of the RS rules. Special survey shall be carried out at 5-year intervals to renew the class.","2.7 Survey of the outside of the ship\'s bottom (underwater hull, sea inlets, bottom and side valves","3.0 Occasional – class surveys related to miscellaneous issues/problems/questions like changing of navigational area/ship’s purpose/number of crew onboard / ship’s design,  towage operations, accident aftermath, etc."],"Besides the above-mentioned class surveys MSR experts carry out other non-class inspections including, but not limited to:",["P&I survey","Pre-sale survey","Company\'s ISM and MLC audits","Cargo survey"]]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(1979);
;// CONCATENATED MODULE: ./pages/services/surveys/index.jsx





function Surveys({ data  }) {
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
    const seo = store/* default.asidePages.2.seo */.Z.asidePages[2].seo;
    return {
        props: {
            data: data_namespaceObject,
            seo
        }
    };
}
/* harmony default export */ const surveys = (Surveys);


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
var __webpack_exports__ = __webpack_require__.X(0, [298,979], () => (__webpack_exec__(2008)));
module.exports = __webpack_exports__;

})();