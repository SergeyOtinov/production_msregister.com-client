"use strict";
(() => {
var exports = {};
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 6221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ship_classification),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
;// CONCATENATED MODULE: ./pages/services/ship-classification/data.json
const data_namespaceObject = JSON.parse('{"h1":"SHIP CLASSIFICATION","text":["Classification is an evaluation of compliance of vessel’s technical condition as well as its mechanisms, hull, and equipment with the rules of the Mediterranean Shipping Register and with the normative and technical documents to determine the possibility of assignment, renewal, reassignment, retainment, and confirmation of the Register class according to their purpose and to ensure the protection of human life at sea, the safe and reliable transport of passengers and cargo, and the prevention of pollution environment."]}');
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(8542);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/services/ship-classification/index.jsx







function ShipClassification({
  data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "body-wrapper",
      children: /*#__PURE__*/jsx_runtime_.jsx(ServicesContent/* default */.Z, {
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
/* harmony default export */ const ship_classification = (ShipClassification);

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
var __webpack_exports__ = __webpack_require__.X(0, [656,542], () => (__webpack_exec__(6221)));
module.exports = __webpack_exports__;

})();