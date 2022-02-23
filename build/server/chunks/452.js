exports.id = 452;
exports.ids = [452];
exports.modules = {

/***/ 8452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _usersTablePagination_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6194);
/* harmony import */ var _usersTablePagination_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_usersTablePagination_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4789);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4912);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4890);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








function UsersTablePagination({
  usersCount,
  pagination,
  logging
}) {
  const {
    0: activePage,
    1: setActivePage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    store
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app__WEBPACK_IMPORTED_MODULE_3__.Context);
  let count;
  const buttons = [];
  const loaders = [];

  if (usersCount !== 0) {
    count = usersCount;
  }

  for (let i = 1; i < Math.ceil(count / 10 + 1); i++) {
    buttons.push( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
      onClick: e => changePage(e, i),
      disabled: activePage === i,
      type: "button",
      style: i < 10 ? {
        padding: '3px 7px'
      } : {
        padding: '3px 4px'
      },
      "data-id": i,
      children: i
    }, i));
    loaders.push( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_0___default()), {
      size: 20,
      sx: {
        color: '#777777',
        padding: '2px 5px'
      }
    }, i));
  }

  async function changePage(e, i) {
    setLoading(true);
    const response = await store.fetchUsers();

    if (!response) {
      logging(`Error: Server error!`);
      setLoading(false);
      return;
    }

    if (!usersCount) {
      logging(`Error: Server error!`);
      setLoading(false);
    }

    pagination(e.target.dataset.id);
    setActivePage(i);
    setLoading(false);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_usersTablePagination_module_css__WEBPACK_IMPORTED_MODULE_5___default().pagination),
      children: loading ? loaders : buttons
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(UsersTablePagination));

/***/ }),

/***/ 6194:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "usersTablePagination_pagination__Zpekg"
};


/***/ })

};
;