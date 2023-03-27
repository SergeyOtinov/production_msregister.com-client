exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 7878:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "createUser_wrapper__oGd8m",
	"form": "createUser_form__AQSN_",
	"buttons": "createUser_buttons__eRsww",
	"error": "createUser_error__5wjVH"
};


/***/ }),

/***/ 598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createUser_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7878);
/* harmony import */ var _createUser_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_createUser_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1986);
/* harmony import */ var _mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9678);
/* harmony import */ var _mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1072);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_ReplayCircleFilled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5889);
/* harmony import */ var _mui_icons_material_ReplayCircleFilled__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ReplayCircleFilled__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3089);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__);












function CreateUser({ setCreateForm , getUsers , logging , table , currentPage  }) {
    const { store  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_app__WEBPACK_IMPORTED_MODULE_9__.Context);
    const useridField = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
    const [userid, setUserid] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [surname, setSurname] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [isShowPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [errorLogin, setErrorLogin] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [errorPassword, setErrorPassword] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [errorEmail, setErrorEmail] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [creating, setCreating] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    async function createUser() {
        const userdArr = Array.from(table.current.querySelectorAll("input[name='userid']")).map((id)=>id.defaultValue);
        const emailArr = Array.from(table.current.querySelectorAll("input[name='email']")).map((email)=>email.defaultValue);
        setErrorLogin("");
        setErrorEmail("");
        setErrorPassword("");
        setErrorMessage("");
        if (!userid) {
            setErrorLogin("User ID field cannot be empty!");
            return;
        }
        if (userid.length < 6) {
            setErrorLogin("The number of digits in the User ID must not be less than 6!");
            return;
        }
        if (userdArr.includes(userid)) {
            setErrorLogin("User with this ID already exists!");
            return;
        }
        if (!email) {
            setErrorEmail("Email field cannot be empty!");
            return;
        }
        if (email) {
            if (!email_validator__WEBPACK_IMPORTED_MODULE_5___default().validate(email)) {
                setErrorEmail("The email address format is incorrect!");
                return;
            }
        }
        if (emailArr.includes(email)) {
            setErrorEmail("User with this E-Mail already exists!");
            return;
        }
        if (!password) {
            setErrorPassword("Password field cannot be empty!");
            return;
        }
        if (password.length < 3) {
            setErrorPassword("Password cannot be less than 3!");
            return;
        }
        setCreating(true);
        const result = await store.createUser(userid, email, password, name, surname);
        if (typeof result === "string") {
            return setErrorMessage(result);
        }
        if (!result) {
            setErrorMessage("Error: Server error!");
            setCreating(false);
            return;
        }
        logging(`Success: User with ID:${result.data.userid} and E-Mail:${result.data.email} has been successfully created!`);
        await getUsers(currentPage);
        setCreateForm(false);
    }
    function generateID() {
        const userdArr = Array.from(table.current.querySelectorAll("input[name='userid']")).map((id)=>id.defaultValue);
        let uniqueID = 1;
        for(let i = 0; i < 9; i++){
            if (uniqueID !== +userdArr[i]) {
                const digitsCount = uniqueID.toString().length;
                let nullCount = "0".repeat(6 - digitsCount), useridNew = nullCount + uniqueID;
                setUserid(useridNew);
                return;
            }
            uniqueID += 1;
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_createUser_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                autoComplete: "off",
                className: (_createUser_module_css__WEBPACK_IMPORTED_MODULE_11___default().form),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Create User Form"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        ref: useridField,
                        onInput: (e)=>{
                            e.target.value = e.target.value.replace(/[^\d.]/g, "");
                            setUserid(e.target.value);
                        },
                        error: !!errorLogin,
                        inputProps: {
                            maxLength: 6
                        },
                        autoComplete: "userid",
                        required: true,
                        name: "userid",
                        helperText: errorLogin ? errorLogin : "Enter user ID",
                        sx: {
                            marginBottom: "15px"
                        },
                        size: "small",
                        label: "User ID",
                        value: userid ? userid : "",
                        variant: "outlined"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        onInput: (e)=>setEmail(e.target.value),
                        error: !!errorEmail,
                        autoComplete: "email",
                        name: "email",
                        required: true,
                        helperText: errorEmail ? errorEmail : "Enter user e-mail",
                        sx: {
                            position: "relative",
                            marginBottom: "15px"
                        },
                        size: "small",
                        label: "E-Mail",
                        variant: "outlined"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                        sx: {
                            position: "absolute",
                            padding: "4px",
                            right: "42px",
                            top: "55px"
                        },
                        onClick: generateID,
                        onMouseDown: (e)=>e.preventDefault(),
                        edge: "end",
                        title: "Generate unique ID",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ReplayCircleFilled__WEBPACK_IMPORTED_MODULE_8___default()), {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                        size: "small",
                        sx: {
                            marginBottom: "15px"
                        },
                        variant: "outlined",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                                children: "Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.OutlinedInput, {
                                sx: {
                                    paddingRight: "4px"
                                },
                                onInput: (e)=>setPassword(e.target.value),
                                type: isShowPassword ? "text" : "password",
                                error: !!errorPassword,
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                        sx: {
                                            padding: "4px",
                                            marginRight: 0
                                        },
                                        onClick: ()=>isShowPassword ? setShowPassword(false) : setShowPassword(true),
                                        onMouseDown: (e)=>e.preventDefault(),
                                        edge: "end",
                                        children: isShowPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__.VisibilityOff, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__.Visibility, {})
                                    })
                                }),
                                label: "Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                                error: !!errorPassword,
                                variant: "outlined",
                                children: errorPassword ? errorPassword : "Enter user password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        onInput: (e)=>setName(e.target.value),
                        autoComplete: "name",
                        name: "name",
                        helperText: "Enter user name",
                        sx: {
                            marginBottom: "15px"
                        },
                        size: "small",
                        label: "Name",
                        variant: "outlined"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        onInput: (e)=>setSurname(e.target.value),
                        autoComplete: "none",
                        name: "surname",
                        helperText: "Enter user surname",
                        size: "small",
                        label: "Surname",
                        variant: "outlined"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_createUser_module_css__WEBPACK_IMPORTED_MODULE_11___default().buttons),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                disabled: creating,
                                size: "small",
                                title: "Accept",
                                onClick: createUser,
                                children: creating ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    size: 20,
                                    sx: {
                                        color: "#777777"
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CheckCircleOutlineOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    sx: {
                                        color: "green"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                size: "small",
                                title: "Cancel",
                                onClick: ()=>setCreateForm(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DoDisturbAltOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    sx: {
                                        color: "red"
                                    }
                                })
                            })
                        ]
                    }),
                    errorMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_createUser_module_css__WEBPACK_IMPORTED_MODULE_11___default().error),
                        children: errorMessage
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__.observer)(CreateUser));


/***/ })

};
;