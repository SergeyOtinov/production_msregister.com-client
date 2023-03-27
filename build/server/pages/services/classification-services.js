"use strict";
(() => {
var exports = {};
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 2851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ classification_services),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
;// CONCATENATED MODULE: ./pages/services/classification-services/data.json
const data_namespaceObject = JSON.parse('{"h1":"CLASSIFICATION SERVICES","text":[{"h3":"Classification"},"Classification is an evaluation of compliance of vessel’s technical condition as well as its mechanisms, hull, and equipment with the rules of the Mediterranean Shipping Register and with the normative and technical documents to determine the possibility of assignment, renewal, reassignment, retainment, and confirmation of the Register class according to their purpose and to ensure the protection of human life at sea, the safe and reliable transport of passengers and cargo, and the prevention of pollution environment. As a classification society, MSR is an essential link in the overall safety chain of the marine industrie.",{"h3":"Transfer of class"},"We want you to have the best partner to support the safe and efficient operation of your vessels, now and in the future. We will work with you in the management of your vessels helping you realise their full potential, assisting you with any technical issues or exceptional circumstances that may arise and above all, supporting you to keep them trading.","If you are considering changing to us as your class partner, we also make the transfer process as straightforward and seamless as possible.","Transfer of class (TOC) is the process by which you can move your vessel to MSR class.","Transferring your vessels to MSR class is a fast and simple process, allowing you to see the benefits of having MSR as your class partner in the quickest time possible.",{"h3":"Rules and regulations"},"MSR` Rules and Regulations set appropriate standards for the design, construction and lifetime maintenance of ships."]}');
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(1979);
;// CONCATENATED MODULE: ./pages/services/classification-services/index.jsx





function ClassificationServices({ data  }) {
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
    const seo = store/* default.asidePages.0.seo */.Z.asidePages[0].seo;
    return {
        props: {
            data: data_namespaceObject,
            seo
        }
    };
}
/* harmony default export */ const classification_services = (ClassificationServices);


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
var __webpack_exports__ = __webpack_require__.X(0, [298,979], () => (__webpack_exec__(2851)));
module.exports = __webpack_exports__;

})();