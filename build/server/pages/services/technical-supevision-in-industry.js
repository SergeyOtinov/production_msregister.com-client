"use strict";
(() => {
var exports = {};
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ technical_supevision_in_industry),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/services/technical-supevision-in-industry/data.json
const data_namespaceObject = JSON.parse('{"h1":"TECHNICAL SUPEVISION IN INDUSTRY","text":[{"h3":"Recognition of testing laboratories"},"Confirmation of the technical competence of a testing laboratory in conducting tests in accordance with the MSR requirements.","Documents issued based on the certification results:",["Recognition Certificate of Testing Laboratory is a document that certifies the competence of a laboratory to make certain types of tests of materials and products."],{"h3":"Recognition of service providers"},"Confirmation of the ability of the organization (firm) to provide services (perform work) in accordance with the MSR requirements.","The service providers are individuals or companies that are not structural subdivisions of the MSR and that, at the request or on behalf of the equipment manufacturer, shipyard, shipowner, owner of the offshore installation or other customer, provide such services as measurements, testing, repair and maintenance of systems, equipment and safety devices.","Documents issued based on the certification results:",["Recognition Certificate is a document that certifies the recognition of a company-service provider, which provides services (performs work) in accordance with MSR requirements"],{"h3":"Technical supervision of welding"},"When conducting technical supervision of welding, MSR carries out:",["Approval of welding processes","Approval of welding consumables","Certification of welders"],"Documents issued based on the certification results:",["Certificate that certifies the welder’s ability to perform welding in accordance with the MSR requirements and EN 287-1, ISO 9606, AWS D1.1, ISO 17660 (manual welding), ISO 14732 (operators), AWS D3.6M, ISO 15618-1 (underwater welding), ASME sec. IX (welding of pressure vessels/equipment).","Certificate of compliance of welding process with the requirements of the MSR rules and EN 287-1, EN ISO 15614 (-1 to -13), EN ISO 14555 (stud welding).","Certificate of compliance of welding consumables with the requirements of the MSR Rules and EN 287-1."]]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(1979);
;// CONCATENATED MODULE: ./pages/services/technical-supevision-in-industry/index.jsx





function TechnicalSupevisionInIndustry({ data  }) {
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
/* harmony default export */ const technical_supevision_in_industry = (TechnicalSupevisionInIndustry);


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
var __webpack_exports__ = __webpack_require__.X(0, [298,979], () => (__webpack_exec__(777)));
module.exports = __webpack_exports__;

})();