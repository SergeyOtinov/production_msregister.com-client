exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 4829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3653);
/* harmony import */ var _changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7949);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5329);
/* harmony import */ var _mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(962);
/* harmony import */ var _mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1708);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4890);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4789);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);












function ChangeAdminPasswordForm({
  setAdminPasswordForm,
  logging
}) {
  const {
    0: errorPassword,
    1: setErrorPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isShowPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: newPassword,
    1: setNewPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    store
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_app__WEBPACK_IMPORTED_MODULE_5__.Context);

  async function changePasswordAdmin() {
    setErrorMessage('');

    if (!newPassword) {
      setErrorPassword("Password field cannot be empty!");
      return;
    }

    if (newPassword.length < 6) {
      setErrorPassword("Password must contain at least 6 characters!");
      return;
    }

    if (confirm('Are you sure you want to change admin password?')) {
      setErrorPassword('');
      setLoading(true);
      const result = await store.updatePasswordAdmin(newPassword);

      if (!result) {
        setErrorMessage(`Error: Server error!`);
        setLoading(false);
        return;
      }

      logging(`Success: Admin password successfully changed!`);
      setAdminPasswordForm(false);
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: (_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
        autoComplete: "off",
        className: (_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().form),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h2", {
          children: "Change Admin Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
          size: "small",
          sx: {
            marginBottom: '15px'
          },
          variant: "outlined",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
            error: !!errorPassword,
            children: "Password"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.OutlinedInput, {
            onInput: e => setNewPassword(e.target.value),
            type: isShowPassword ? 'text' : 'password',
            autoComplete: "new-password",
            error: !!errorPassword,
            endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
              position: "end",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                "aria-label": "toggle password visibility",
                onClick: () => isShowPassword ? setShowPassword(false) : setShowPassword(true),
                onMouseDown: e => e.preventDefault(),
                edge: "end",
                children: isShowPassword ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.VisibilityOff, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Visibility, {})
              })
            }),
            label: "Password"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
            error: !!errorPassword,
            variant: "outlined",
            children: errorPassword ? errorPassword : 'Enter user password'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().buttons),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
            onClick: changePasswordAdmin,
            disabled: loading,
            size: "small",
            title: "Accept",
            children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default()), {
              size: 20,
              sx: {
                color: '#777777'
              }
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {
              sx: {
                color: 'green'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
            onClick: () => setAdminPasswordForm(false),
            size: "small",
            title: "Cancel",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {
              sx: {
                color: 'red'
              }
            })
          })]
        }), errorMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
          className: (_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().error),
          children: errorMessage
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeAdminPasswordForm);

/***/ }),

/***/ 3653:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "changePasswordForm_wrapper__2M3FH",
	"form": "changePasswordForm_form__2rB6p",
	"buttons": "changePasswordForm_buttons__2RkoX",
	"error": "changePasswordForm_error__2iwNw"
};


/***/ })

};
;