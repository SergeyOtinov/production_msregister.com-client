"use strict";
exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 6525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3653);
/* harmony import */ var _changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5329);
/* harmony import */ var _mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(962);
/* harmony import */ var _mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4789);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7949);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1708);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4890);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);












function ChangePasswordForm({
  setPasswordForm,
  passwordId,
  logging
}) {
  const {
    0: errorPassword,
    1: setErrorPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: isShowPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: newPassword,
    1: setNewPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    store
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app__WEBPACK_IMPORTED_MODULE_6__.Context);

  async function changePasswordUser() {
    if (!newPassword) {
      setErrorPassword("Password field cannot be empty!");
      return;
    }

    if (newPassword.length < 3) {
      setErrorPassword("Password must contain at least 3 characters!");
      return;
    }

    if (confirm('Are you sure you want to save this user password?')) {
      setErrorPassword('');
      setLoading(true);
      const user = await store.updatePasswordUser(passwordId, newPassword);

      if (!user) {
        setErrorMessage(`Error: Server error!`);
        setLoading(false);
        return;
      }

      logging(`Success: User with ID:${user.data.userid} and E-mail:${user.data.email} successfully changed password!`);
      setPasswordForm(false);
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: (_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
        autoComplete: "off",
        className: (_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().form),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h2", {
          children: "Change Password Form"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
          size: "small",
          sx: {
            marginBottom: '15px'
          },
          variant: "outlined",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
            error: !!errorPassword,
            children: "Password"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.OutlinedInput, {
            onInput: e => setNewPassword(e.target.value),
            type: isShowPassword ? 'text' : 'password',
            error: !!errorPassword,
            endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputAdornment, {
              position: "end",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                "aria-label": "toggle password visibility",
                onClick: () => isShowPassword ? setShowPassword(false) : setShowPassword(true),
                onMouseDown: e => e.preventDefault(),
                edge: "end",
                children: isShowPassword ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__.VisibilityOff, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__.Visibility, {})
              })
            }),
            label: "Password"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormHelperText, {
            error: !!errorPassword,
            variant: "outlined",
            children: errorPassword ? errorPassword : 'Enter user password'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_changePasswordForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().buttons),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
            onClick: changePasswordUser,
            disabled: loading,
            size: "small",
            title: "Accept",
            children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default()), {
              size: 20,
              sx: {
                color: '#777777'
              }
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {
              sx: {
                color: 'green'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
            onClick: () => setPasswordForm(false),
            size: "small",
            title: "Cancel",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_0___default()), {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordForm);

/***/ })

};
;