"use strict";
(() => {
var exports = {};
exports.id = 138;
exports.ids = [138];
exports.modules = {

/***/ 4805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ towage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./pages/services/towage/data.json
const data_namespaceObject = JSON.parse('{"h1":"TOWAGE","text":["Mediterranean Ship Register develops towage plans in accordance with the resolution MSC/Circ.884 “Guidelines for safe ocean towing” together with issuing of Towage survey certificate. We are designing passage and towage plans for any kind of vessel and non-propelled facilities. Pre-sailing survey on behalf of ship or cargo owners always performed before actual towage/passage operations in order to approve towing ship and object of towing. Such survey includes:",["A proper inspection of the towing vessel and its towing equipment","Review of the certificates of the towing vessel, the stability of the towed object, and the seaworthiness of the towed object"],"On basis of the above MSR issues a Towage certificate which also contains instructions for the master of towing vessel regarding the route, weather/sea, shelters, speed, reporting, etc."]}');
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(8542);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/services/towage/index.jsx







function Towage({
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
  const seo = store/* default.asidePages.3.seo */.Z.asidePages[3].seo;
  return {
    props: {
      data: data_namespaceObject,
      seo
    }
  };
}
/* harmony default export */ const towage = (Towage);

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
var __webpack_exports__ = __webpack_require__.X(0, [656,542], () => (__webpack_exec__(4805)));
module.exports = __webpack_exports__;

})();