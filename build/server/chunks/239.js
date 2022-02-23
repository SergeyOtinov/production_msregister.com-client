exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 7239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminSetting)
/* harmony export */ });
/* harmony import */ var _adminSetting_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(753);
/* harmony import */ var _adminSetting_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_adminSetting_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4890);
/* harmony import */ var _HOC_Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(899);
/* harmony import */ var _changeAdminPasswordForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4829);
/* harmony import */ var _mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7269);
/* harmony import */ var _mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1577);
/* harmony import */ var _mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7949);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);













function AdminSetting({
  logging
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _store$user;

    setDefaultEmail(store === null || store === void 0 ? void 0 : (_store$user = store.user) === null || _store$user === void 0 ? void 0 : _store$user.email);
  }, []);
  const input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    store
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_app__WEBPACK_IMPORTED_MODULE_1__.Context);
  const {
    0: isAdminPasswordForm,
    1: setAdminPasswordForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: defaultEmail,
    1: setDefaultEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isEmailChange,
    1: setEmailChange
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function changePasswordForm() {
    isAdminPasswordForm ? setAdminPasswordForm(false) : setAdminPasswordForm(true);
  }

  function resetForm() {
    input.current.value = defaultEmail;
    setEmailChange(false);
  }

  function checkMutate(e) {
    setEmail(e.target.value);
    e.target.value !== e.target.defaultValue ? setEmailChange(true) : setEmailChange(false);
  }

  async function updateEmailAdmin() {
    setLoading(true);

    if (confirm('Are you sure you want to change the admin mail?When you change your email you will be logged out!')) {
      const result = await store.updateEmailAdmin(email);

      if (!result) {
        setEmailChange(false);
        setLoading(false);
        resetForm();
        logging(`Error: Server error!`);
        return;
      }

      await store.logout();
      router.push('/');
    }

    setLoading(false);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: (_adminSetting_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h3", {
      children: "Administrator Setting"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
      className: (_adminSetting_module_css__WEBPACK_IMPORTED_MODULE_9___default().setting),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        children: "E-mail administrator"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
        ref: input,
        name: "E-mail administrator",
        defaultValue: defaultEmail,
        placeholder: "Enter E-mail",
        type: "email",
        onInput: e => checkMutate(e)
      }), isEmailChange ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_adminSetting_module_css__WEBPACK_IMPORTED_MODULE_9___default().save),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
          disabled: loading,
          onClick: updateEmailAdmin,
          title: "Save edit",
          sx: {
            p: '5px',
            color: 'rgb(231 14 55)'
          },
          "aria-label": "Save",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
            sx: {
              width: '20px',
              height: '20px'
            }
          })
        })
      }) : null, isEmailChange ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_adminSetting_module_css__WEBPACK_IMPORTED_MODULE_9___default().save),
        name: "reset",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
          disabled: loading,
          onClick: resetForm,
          sx: {
            bgcolor: "rgb(44, 44, 44)",
            p: '5px'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {
            sx: {
              width: '20px',
              height: '20px',
              fill: "white"
            }
          })
        })
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
        name: "password",
        type: "button",
        className: (_adminSetting_module_css__WEBPACK_IMPORTED_MODULE_9___default().password),
        onClick: e => changePasswordForm(e),
        children: "change admin password"
      })]
    }), isAdminPasswordForm && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_HOC_Portal__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      selector: "#portal",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_changeAdminPasswordForm__WEBPACK_IMPORTED_MODULE_3__.default, {
        setAdminPasswordForm: setAdminPasswordForm,
        logging: logging
      })
    })]
  });
}

/***/ }),

/***/ 753:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "adminSetting_wrapper__3Jjz3",
	"save": "adminSetting_save__3OMf6",
	"setting": "adminSetting_setting__1n6_U"
};


/***/ })

};
;