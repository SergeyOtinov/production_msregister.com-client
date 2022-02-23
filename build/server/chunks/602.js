exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 9602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _submitForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2034);
/* harmony import */ var _submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7949);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4827);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4890);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8035);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2965);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4912);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);












const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&': {
            marginTop: '15px',
            width: '100%'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          '&': {
            borderColor: 'var(--color-second-blue)'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&': {
            border: '1px solid var(--color-second-blue)',
            color: 'var(--color-second-blue)'
          },
          '&:hover': {
            color: 'white',
            borderColor: 'var(--color-second-blue)',
            backgroundColor: 'var(--color-second-blue)'
          }
        }
      }
    }
  }
});

function SubmitFrom() {
  const {
    store
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_app__WEBPACK_IMPORTED_MODULE_3__.Context);
  const table = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const user = (0,mobx__WEBPACK_IMPORTED_MODULE_5__.toJS)(store.user);
  const mail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: isImo,
    1: setIsImo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: company,
    1: setCompany
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: request,
    1: setRequest
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: vessel,
    1: setVessel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: imo,
    1: setImo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorMessagePhone,
    1: setErrorMessagePhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorMessageName,
    1: setErrorMessageName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorMessageCompany,
    1: setErrorMessageCompany
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorMessageRequest,
    1: setErrorMessageRequest
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorMessageVessel,
    1: setErrorMessageVessel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorMessageImo,
    1: setErrorMessageImo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: successMessage,
    1: setSuccessMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function validate() {
    setErrorMessagePhone('');
    setErrorMessageName('');
    setErrorMessageCompany('');
    setErrorMessageRequest('');
    setErrorMessageVessel('');
    setErrorMessageImo('');

    if (!phone) {
      setErrorMessagePhone('The Phone field cannot be empty!');
      return false;
    }

    if (!name) {
      setErrorMessageName('The Name field cannot be empty!');
      return false;
    }

    if (!company) {
      setErrorMessageCompany('The Company Name field cannot be empty!');
      return false;
    }

    if (!request) {
      setErrorMessageRequest('The Request field cannot be empty!');
      return false;
    }

    if (!isImo) {
      if (!vessel) {
        setErrorMessageVessel('The Vessel\'s Name field cannot be empty!');
        return false;
      }
    } else {
      if (!imo) {
        setErrorMessageImo('The IMO field cannot be empty!');
        return false;
      }

      if (imo.length < 7) {
        setErrorMessageImo('The IMO Number cannot be less then 7 digits!');
        return false;
      }
    }

    return true;
  }

  async function sendMail() {
    let fields = '';
    const data = [{
      mail: mail.current.value
    }, {
      phone: phone
    }, {
      name: name
    }, {
      company: company
    }, {
      request: request
    }, {
      vessel: vessel
    }, {
      imo: imo
    }].filter(key => !!Object.values(key)[0]);
    data.map(field => {
      const key = Object.keys(field)[0];
      const value = Object.values(field)[0];
      return fields += `
			<tr>
				<td
					style='text-transform: uppercase;border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;font-weight:bold;text-align:left;vertical-align:middle;'>
					${key} :
				</td>
				<td
					style='border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:10px 5px;word-break:normal;background-color:#efefef;color:#003d63;text-align:left;vertical-align:top;'>
					${value}
				</td>
			</tr>
			`;
    });
    const mailBody = `
		<table style='min-width: 400px;border-collapse: collapse;border-spacing: 0;'>
			<thead>
				<tr>
					<th colspan='2'
						style='border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:10px 5px;word-break:normal;text-align:center;vertical-align:top;'>
					CUSTOMER DATA:
					</th>
				</tr>
			</thead>
			<tbody>
			${fields}
			</tbody>
		</table>
		`;

    if (validate()) {
      if (!loading) {
        setLoading(true);
      }

      const result = await store.sendMail(mailBody);
      setTimeout(() => {
        setSuccessMessage(result);
        setLoading(false);
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
      }, 1000);
    }
  }

  async function requestElma() {
    const requestBody = {
      context: {
        user_email: "test@test.ua",
        imo: "1111111",
        vessel_name: "Vessel Name",
        company_name: "Company",
        __target: "website"
      }
    };
    const request = await store.requestElma(requestBody); // if (validate()) {
    // 	if (!loading) {
    // 		setLoading(true);
    // 	}
    // 	const request = await store.requestElma({});
    // 	setTimeout(() => {
    // 		setSuccessMessage("Email sent successfully!")
    // 		setLoading(false);
    // 		setTimeout(() => {
    // 			setSuccessMessage('')
    // 		}, 2000)
    // 	}, 1000)
    // }

    console.log(request);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: (_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        ref: table,
        className: (_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().table),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
          children: "Send Data Form"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
          theme: theme,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
            inputRef: mail,
            required: true,
            disabled: true,
            helperText: "Your E-mail",
            defaultValue: user.email,
            size: "small",
            label: "E-mail"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
            onInput: e => {
              e.target.value = e.target.value.replace(/[^\d\+\(\)\-]/g, '');
              setPhone(e.target.value);
            },
            required: true,
            error: !!errorMessagePhone,
            helperText: errorMessagePhone ? errorMessagePhone : "Your Phone Number",
            size: "small",
            label: "Phone"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
            onInput: e => setName(e.target.value),
            required: true,
            error: !!errorMessageName,
            helperText: errorMessageName ? errorMessageName : "Your Name",
            size: "small",
            label: "Name"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
            onInput: e => setCompany(e.target.value),
            required: true,
            error: !!errorMessageCompany,
            helperText: errorMessageCompany ? errorMessageCompany : "Your company name",
            size: "small",
            label: "Company"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
            error: !!errorMessageRequest,
            size: "small",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextareaAutosize, {
              onInput: e => setRequest(e.target.value),
              placeholder: "Request*",
              className: (_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().request)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
              children: "Enter your request"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
            onInput: e => setVessel(e.target.value),
            helperText: "Your vessel's name",
            error: !!errorMessageVessel,
            required: !isImo,
            size: "small",
            label: errorMessageVessel ? errorMessageVessel : "Vessel's Name"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
            onInput: e => {
              e.target.value = e.target.value.replace(/[^\d.]/g, '');
              setImo(e.target.value);
            },
            error: !!errorMessageImo,
            helperText: errorMessageImo ? errorMessageImo : "Your IMO Number",
            value: imo,
            inputProps: {
              maxLength: 7
            },
            required: isImo,
            disabled: !isImo,
            size: "small",
            label: !isImo ? "I don't have an IMO number" : "IMO Number"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel, {
              control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                onChange: () => {
                  if (isImo) {
                    setIsImo(false);
                    setImo('');
                    setErrorMessageImo('');
                  } else {
                    setIsImo(true);
                    setErrorMessageVessel('');
                  }
                }
              }),
              label: "I don't have an IMO number"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
              position: 'relative',
              width: '143px',
              m: '20px auto 0',
              textAlign: 'center'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
              sx: {
                m: '0 auto',
                display: 'flex',
                alignItems: 'center',
                paddingBottom: '4px',
                width: '105px'
              },
              endIcon: !loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                  m: '0 0 2px 6px'
                }
              }),
              disabled: loading,
              onClick: requestElma,
              children: ["Send", loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {
                size: 20,
                sx: {
                  m: '0 0 2px 10px',
                  color: 'var(--color-second-blue)'
                }
              })]
            })
          }), successMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: (_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().success),
            children: successMessage
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__.observer)(SubmitFrom));

/***/ }),

/***/ 2034:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "submitForm_wrapper__L2qOL",
	"table": "submitForm_table__1DXs8",
	"request": "submitForm_request__2I1aA",
	"success": "submitForm_success__2PRXI"
};


/***/ })

};
;