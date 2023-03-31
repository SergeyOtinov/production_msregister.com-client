"use strict";
(() => {
var exports = {};
exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ technical_supervision_at_shipyard),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/services/technical-supervision-at-shipyard/data.json
const data_namespaceObject = JSON.parse('{"h1":"TECHNICAL SUPERVISION AT SHIPYARD","text":["When conducting technical supervision at shipyard, MSR carries out:",["Classification survey of ships and offshore installations under construction for compliance with the requirements of the MSR Rules and on behalf of other classification societies.","Survey of ships and offshore installations under construction for compliance with the requirements of international codes and conventions on behalf of maritime administrations.","Cooperation arrangements with maritime administrations of flag states, shipowner associations and shipping companies on the matters of MSR technical supervision of ships and offshore installations under construction."]]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(1979);
;// CONCATENATED MODULE: ./pages/services/technical-supervision-at-shipyard/index.jsx





function TechnicalSupervisionAtShipyard({ data  }) {
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
/* harmony default export */ const technical_supervision_at_shipyard = (TechnicalSupervisionAtShipyard);


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
var __webpack_exports__ = __webpack_require__.X(0, [298,979], () => (__webpack_exec__(457)));
module.exports = __webpack_exports__;

})();