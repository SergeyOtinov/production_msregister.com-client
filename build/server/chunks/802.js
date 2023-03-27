exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 5322:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "submitForm_wrapper__PWiw2",
	"table": "submitForm_table__kqA3i",
	"request": "submitForm_request__zeJCV",
	"success": "submitForm_success__zUm7f"
};


/***/ }),

/***/ 2802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _submitForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5322);
/* harmony import */ var _submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4731);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3089);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);










const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.createTheme)({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    "&": {
                        marginTop: "15px",
                        width: "100%"
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    "&": {
                        borderColor: "var(--color-second-blue)"
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "&": {
                        border: "1px solid var(--color-second-blue)",
                        color: "var(--color-second-blue)"
                    },
                    "&:hover": {
                        color: "white",
                        borderColor: "var(--color-second-blue)",
                        backgroundColor: "var(--color-second-blue)"
                    }
                }
            }
        }
    }
});
function SubmitFrom() {
    const { store  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app__WEBPACK_IMPORTED_MODULE_4__.Context);
    const table = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const user = (0,mobx__WEBPACK_IMPORTED_MODULE_6__.toJS)(store.user);
    const mail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isImo, setIsImo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    // const [phone, setPhone] = useState('')
    // const [name, setName] = useState('')
    const [company, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [request, setRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [vessel, setVessel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [imo, setImo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // const [errorMessagePhone, setErrorMessagePhone] = useState('')
    // const [errorMessageName, setErrorMessageName] = useState('')
    const [errorMessageCompany, setErrorMessageCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [errorMessageRequest, setErrorMessageRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [errorMessageVessel, setErrorMessageVessel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [errorMessageImo, setErrorMessageImo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function validate() {
        // setErrorMessagePhone('')
        // setErrorMessageName('')
        setErrorMessageCompany("");
        setErrorMessageRequest("");
        setErrorMessageVessel("");
        setErrorMessageImo("");
        // if (!phone) {
        // 	setErrorMessagePhone('The Phone field cannot be empty!')
        // 	return false
        // }
        // if (!name) {
        // 	setErrorMessageName('The Name field cannot be empty!')
        // 	return false
        // }
        if (!company) {
            setErrorMessageCompany("The Company Name field cannot be empty!");
            return false;
        }
        if (!request) {
            setErrorMessageRequest("The Request field cannot be empty!");
            return false;
        }
        if (!isImo) {
            if (!vessel) {
                setErrorMessageVessel("The Vessel's Name field cannot be empty!");
                return false;
            }
        } else {
            if (!imo) {
                setErrorMessageImo("The IMO field cannot be empty!");
                return false;
            }
            if (imo.length < 7) {
                setErrorMessageImo("The IMO Number cannot be less then 7 digits!");
                return false;
            }
        }
        return true;
    }
    async function requestElma() {
        if (validate()) {
            if (!loading) {
                setLoading(true);
            }
            const result = await store.requestElma({
                context: {
                    user_email: mail.current.value,
                    imo: imo,
                    vessel_name: vessel,
                    company_name: company,
                    __target: "website",
                    request_text: request
                }
            });
            setTimeout(()=>{
                setSuccessMessage("Request sent successfully!");
                setLoading(false);
                setTimeout(()=>{
                    setSuccessMessage("");
                }, 2000);
            }, 1000);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: table,
                className: (_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().table),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Send Data Form"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
                        theme: theme,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                inputRef: mail,
                                required: true,
                                disabled: true,
                                helperText: "Your E-mail",
                                defaultValue: user.email,
                                size: "small",
                                label: "E-mail"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                onInput: (e)=>setCompany(e.target.value),
                                required: true,
                                error: !!errorMessageCompany,
                                helperText: errorMessageCompany ? errorMessageCompany : "Your company name",
                                size: "small",
                                label: "Company"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                error: !!errorMessageRequest,
                                size: "small",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextareaAutosize, {
                                        onInput: (e)=>setRequest(e.target.value),
                                        placeholder: "Request*",
                                        className: (_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().request)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, {
                                        children: "Enter your request"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                onInput: (e)=>setVessel(e.target.value),
                                helperText: "Your vessel's name",
                                error: !!errorMessageVessel,
                                required: !isImo,
                                size: "small",
                                label: errorMessageVessel ? errorMessageVessel : "Vessel's Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                onInput: (e)=>{
                                    e.target.value = e.target.value.replace(/[^\d.]/g, "");
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
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                                        onChange: ()=>{
                                            if (isImo) {
                                                setIsImo(false);
                                                setImo("");
                                                setErrorMessageImo("");
                                            } else {
                                                setIsImo(true);
                                                setErrorMessageVessel("");
                                            }
                                        }
                                    }),
                                    label: "I don't have an IMO number"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    position: "relative",
                                    width: "143px",
                                    m: "20px auto 0",
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    sx: {
                                        m: "0 auto",
                                        display: "flex",
                                        alignItems: "center",
                                        paddingBottom: "4px",
                                        width: "105px"
                                    },
                                    endIcon: !loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        sx: {
                                            m: "0 0 2px 6px"
                                        }
                                    }),
                                    disabled: loading,
                                    onClick: requestElma,
                                    children: [
                                        "Send",
                                        loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
                                            size: 20,
                                            sx: {
                                                m: "0 0 2px 10px",
                                                color: "var(--color-second-blue)"
                                            }
                                        })
                                    ]
                                })
                            }),
                            successMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_submitForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().success),
                                children: successMessage
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(SubmitFrom));


/***/ })

};
;