"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 5983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
;// CONCATENATED MODULE: ./pages/contact/data.json
const data_namespaceObject = JSON.parse('{"h1":"Our Contacts","text":[{"h3":"Feel free to contact us:"},{"h4":"General issues: "},{"mail":"office@msregister.com"},{"h4":"Requests for service: "},{"mail":"request@msregister.com"},{"h4":"Port State Control issues: "},{"mail":"psc@msregister.com"},{"h4":"Accounts matters: "},{"mail":"accounts@msregister.com "},{"h4":"Phone Number(ALL Cases): "},{"phone":"+44 (744) 992 05 35"}]}');
// EXTERNAL MODULE: ./components/PagesComponents/contents/ServicesContent.jsx
var ServicesContent = __webpack_require__(8542);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/PagesComponents/contents/CallbackForm.jsx






function CallbackForm({
  data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("form", {
      action: "",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: ""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          name: "",
          id: "",
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "general issues",
            children: "General issues"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "requests for service",
            children: "Requests for service"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "port state control issues",
            children: "Port State Control issues"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "general issues",
            children: "General issues"
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const contents_CallbackForm = (CallbackForm);
;// CONCATENATED MODULE: ./pages/contact/index.jsx









function Contact({
  data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "body-wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ServicesContent/* default */.Z, {
        data: data
      }), /*#__PURE__*/jsx_runtime_.jsx(contents_CallbackForm, {})]
    })
  });
}

async function getStaticProps() {
  const seo = store/* default.headerPages.2.seo */.Z.headerPages[2].seo;
  return {
    props: {
      seo,
      data: data_namespaceObject
    }
  };
}
/* harmony default export */ const contact = (Contact);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [656,542], () => (__webpack_exec__(5983)));
module.exports = __webpack_exports__;

})();