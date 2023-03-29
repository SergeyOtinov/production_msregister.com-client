"use strict";
(() => {
var exports = {};
exports.id = 674;
exports.ids = [674];
exports.modules = {

/***/ 6748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ certification),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/services/certification/data.json
const data_namespaceObject = JSON.parse('{"h1":"CERTIFICATION","text":["Mediterranean Ship Register offers the following certifications:","1. ISM Code Certification – certification of safety management systems of shipping companies and ships for compliance with the requirements of the International Safety Management Code for the Safe Operation of Ships and for Pollution Prevention (ISM Code):",["Mandatory certification of shipping companies and ships on behalf of Maritime Administrations for compliance with the ISM Code requirements and regulations","Non-compulsory certification of shipping companies and ships not covered by the requirements of Chapter IX, SOLAS-74 for compliance with the ISM Code requirements and regulations","Review of Safe Management System documentation","Issuing and endorsement of the Document of Compliance (DOC) and Safety Management Certificate (SMC)"],"2. ISPS Code Certification",["Verification of ship\'s security for compliance with the requirements of the International Ship and Port Facility Security Code (ISPS Code):",["Review and approve Ship Security Plan (SSP) and its amendments on behalf of Maritime Administrations","Mandatory verification of ship’s compliance with ISPS Code requirements and regulations on behalf of Maritime Administrations","Non-compulsory verification of ships not covered by the requirements of Chapter IX-2, SOLAS-74 for compliance with ISPS Code requirements and regulations","Issuing and endorsement of the International Ship Security Certificate (ISSC)"]],"3. MLC, 2006 Certification",["MSR carries out the full scope of certification and inspection works for compliance with the Maritime Labour Convention 2006 requirements, such as:",["Ships certification for compliance with MLC requirements","Declaration of Maritime Labour Compliance review and endorsement","Issuing and endorsement of MLC certificate","Non-compulsory audit of crewing agencies under the Maritime Labour Convention, 2006 Regulation 1.4"]],"4. Management systems certification. The certification criteria are: standards of ISO 9001 Series, ISO 14001, ISO 45001","5. Certification of organizations that perform activities in accordance with IC STCW. MSR conducts certification of training centers that provide training in accordance with the requirements of Rule I/12, Chapters V and VI, STCW Convention"]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(1979);
;// CONCATENATED MODULE: ./pages/services/certification/index.jsx





function Certification({ data  }) {
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
    const seo = store/* default.asidePages.4.seo */.Z.asidePages[4].seo;
    return {
        props: {
            data: data_namespaceObject,
            seo
        }
    };
}
/* harmony default export */ const certification = (Certification);


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
var __webpack_exports__ = __webpack_require__.X(0, [298,979], () => (__webpack_exec__(6748)));
module.exports = __webpack_exports__;

})();