exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 1582:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "usersTable_wrapper__5edHE",
	"table": "usersTable_table__FfJrI",
	"header": "usersTable_header__TJ4o9",
	"body_row": "usersTable_body_row__hDczz",
	"header_item": "usersTable_header_item___X5VH",
	"row_item": "usersTable_row_item__MMLSs",
	"row_edit": "usersTable_row_edit__3uOeY",
	"row_delete": "usersTable_row_delete__883D2",
	"row_save": "usersTable_row_save__dz7n_",
	"save_btn": "usersTable_save_btn___d9RR",
	"reset_logger_btn": "usersTable_reset_logger_btn__YgV8F",
	"password": "usersTable_password__FXMHV",
	"error": "usersTable_error__d0sV2",
	"logging": "usersTable_logging__K0UGq"
};


/***/ }),

/***/ 2520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usersTable_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1582);
/* harmony import */ var _usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _HOC_Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6914);
/* harmony import */ var _createUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(598);
/* harmony import */ var _changePasswordForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(707);
/* harmony import */ var _mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9513);
/* harmony import */ var _mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1507);
/* harmony import */ var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8333);
/* harmony import */ var _mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9208);
/* harmony import */ var _mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1072);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _usersTablePagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6400);
/* harmony import */ var _adminSetting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1899);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3089);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_17__);



















const header = [
    "№",
    "User ID",
    "E-Mail",
    "Password",
    "Name",
    "Surname"
];
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.createTheme)({
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&": {
                        backgroundColor: "transparent"
                    },
                    "&:hover": {
                        backgroundColor: "#ffffff98"
                    }
                }
            }
        }
    }
});
function UsersTable() {
    const [usersCount, setUsersCount] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)("");
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(1);
    const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false);
    const [deleting, setDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(()=>{
        getUsers();
    }, []);
    let initialArr = [];
    for(let i = 0; i < usersCount; i++){
        initialArr.push(0);
    }
    const table = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null);
    const logger = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null);
    const { store  } = (0,react__WEBPACK_IMPORTED_MODULE_16__.useContext)(_app__WEBPACK_IMPORTED_MODULE_15__.Context);
    const [changeTableArr, setChangeTableArr] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]);
    const [isResetBtn, setResetBtn] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false);
    const [isCreateForm, setCreateForm] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false);
    const [isPasswordForm, setPasswordForm] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false);
    const [passwordId, setPasswordId] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)("");
    if (initialArr.length !== 0) {
        if (changeTableArr.length === 0) {
            setChangeTableArr(initialArr);
        }
    }
    function checkMutate(e) {
        let t = e.target.closest("form"), order = t.dataset.order, newArr = [
            ...changeTableArr
        ];
        if (changeTableArr.length === 0) {
            return;
        }
        const inputArr = Array.from(t.getElementsByTagName("input"));
        function check() {
            newArr.some((n)=>n === 1) ? setResetBtn(true) : setResetBtn(false);
        }
        if (inputArr.some((input)=>input.value !== input.defaultValue)) {
            newArr[order] = 1;
            setChangeTableArr(newArr);
        } else {
            newArr[order] = 0;
            setChangeTableArr(newArr);
        }
        check();
    }
    async function pagination(page) {
        setCurrentPage(page);
        getUsers(page);
        initialArr = [];
        for(let i = 0; i < usersCount; i++){
            initialArr.push(0);
        }
        setChangeTableArr(initialArr);
        setResetBtn(false);
    }
    async function getUsers(page) {
        const response = await store.fetchUsers(page);
        const users = (0,mobx__WEBPACK_IMPORTED_MODULE_14__.toJS)(store.getUsers());
        setUsers(users);
        setUsersCount(response.length);
    }
    async function deleteUser(e) {
        setDeleting(true);
        if (confirm("Are you sure you want to delete this user?")) {
            const user = e.target.closest("form").querySelector('input[name="id"').value;
            const result = await store.deleteUser(user);
            if (!result) {
                logging(`Error: Server error!`);
                setDeleting(false);
                return;
            }
            logging(`Success: ${result}`);
            getUsers(currentPage);
            setDeleting(false);
        }
        setDeleting(false);
    }
    async function updateUser(e) {
        const data = Array.from(e.target.closest("form").getElementsByTagName("input")).map((input)=>input.value);
        const [id, userid, email, name, surname] = data;
        const useridArr = Array.from(table.current.querySelectorAll("input[name='userid']")).map((id)=>id.defaultValue);
        const emailArr = Array.from(table.current.querySelectorAll("input[name='email']")).map((email)=>email.defaultValue);
        if (!userid) {
            logging("Error: User ID field cannot be empty!");
            return;
        }
        if (userid !== e.target.closest("form").querySelector("input[name='userid']").defaultValue) {
            if (useridArr.includes(userid)) {
                logging("Error: User with this ID already exists!");
                return;
            }
        }
        if (userid.length < 6) {
            logging("Error: The number of digits in the User ID must not be less than 6!");
            return;
        }
        if (!email) {
            logging("Error: Email field cannot be empty!");
            return;
        }
        if (email) {
            if (!email_validator__WEBPACK_IMPORTED_MODULE_9___default().validate(email)) {
                logging("Error: The email address format is incorrect!");
                return;
            }
        }
        if (email !== e.target.closest("form").querySelector("input[name='email']").defaultValue) {
            if (emailArr.includes(email)) {
                logging("Error: User with this E-mail already exists!");
                return;
            }
        }
        setSaving(true);
        if (confirm("Are you sure you want to save this user?")) {
            const user = await store.updateUser(id, userid, email, name, surname);
            if (!user) {
                logging(`Error: Server error!`);
                setSaving(false);
                return;
            }
            logging(`Success: User with ID:${user.data.userid} was successfully updated!`);
            setSaving(false);
            await getUsers(currentPage);
            checkMutate(e);
        }
        setSaving(false);
    }
    function changePasswordUser(e) {
        const userid = e.target.closest("form").querySelector(`input[name="id"]`).value;
        setPasswordId(userid);
        setPasswordForm(true);
    }
    function formReset() {
        let formArr = Array.from(table.current.getElementsByTagName("form"));
        formArr.map((form)=>form.reset());
        setChangeTableArr(initialArr);
        setResetBtn(false);
    }
    function inputBlurFocus(e, opacity) {
        e.target.parentNode.querySelector("svg").style.opacity = opacity;
    }
    function logging(log) {
        const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        };
        const time = new Date().toLocaleTimeString("ru", options);
        logger.current.value += `\n${time} -> "${log}"`;
        logger.current.scrollTop = logger.current.scrollHeight - logger.current.clientHeight;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_adminSetting__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    logging: logging
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().wrapper),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            ref: table,
                            className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().table),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().header),
                                    children: header.map((title, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().header_item),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: title
                                            })
                                        }, index);
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().body),
                                    children: [
                                        users.map((user)=>{
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                "data-order": user.table_id - 1,
                                                className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().body_row),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_item),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: user.table_id
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                style: {
                                                                    display: "none"
                                                                },
                                                                name: "id",
                                                                defaultValue: user._id
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_item),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                name: "userid",
                                                                defaultValue: user.userid,
                                                                maxLength: "6",
                                                                placeholder: "Enter userID",
                                                                onFocus: (e)=>inputBlurFocus(e, "1"),
                                                                onBlur: (e)=>inputBlurFocus(e, "0"),
                                                                onInput: (e)=>checkMutate(e)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_edit),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                    style: {
                                                                        width: "15px",
                                                                        paddingTop: "5px",
                                                                        fill: "#18c7de",
                                                                        opacity: "0"
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_item),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                name: "email",
                                                                defaultValue: user.email,
                                                                placeholder: "Enter E-mail",
                                                                type: "email",
                                                                onFocus: (e)=>inputBlurFocus(e, "1"),
                                                                onBlur: (e)=>inputBlurFocus(e, "0"),
                                                                onInput: (e)=>checkMutate(e)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_edit),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                    style: {
                                                                        width: "15px",
                                                                        paddingTop: "5px",
                                                                        fill: "#18c7de",
                                                                        opacity: "0"
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_item),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "button",
                                                            className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().password),
                                                            onClick: (e)=>changePasswordUser(e),
                                                            children: "change password"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_item),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                name: "name",
                                                                maxLength: "20",
                                                                defaultValue: user.name,
                                                                placeholder: "Enter user name",
                                                                onFocus: (e)=>inputBlurFocus(e, "1"),
                                                                onBlur: (e)=>inputBlurFocus(e, "0"),
                                                                onInput: (e)=>checkMutate(e)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_edit),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                    style: {
                                                                        width: "15px",
                                                                        paddingTop: "5px",
                                                                        fill: "#18c7de",
                                                                        opacity: "0"
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_item),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                name: "surname",
                                                                maxLength: "20",
                                                                defaultValue: user.surname,
                                                                placeholder: "Enter user surname",
                                                                onFocus: (e)=>inputBlurFocus(e, "1"),
                                                                onBlur: (e)=>inputBlurFocus(e, "0"),
                                                                onInput: (e)=>checkMutate(e)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_edit),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                    style: {
                                                                        width: "15px",
                                                                        paddingTop: "5px",
                                                                        fill: "#18c7de",
                                                                        opacity: "0"
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_delete),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.IconButton, {
                                                            disabled: deleting,
                                                            onClick: (e)=>deleteUser(e),
                                                            title: "Delete user",
                                                            sx: {
                                                                bgcolor: "#ffffff"
                                                            },
                                                            color: "error",
                                                            "aria-label": "Add",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                sx: {
                                                                    width: "20px",
                                                                    height: "20px"
                                                                }
                                                            })
                                                        })
                                                    }),
                                                    changeTableArr[user.table_id - 1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().row_save),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.IconButton, {
                                                            disabled: saving,
                                                            onClick: (e)=>updateUser(e),
                                                            title: "Save edit",
                                                            sx: {
                                                                color: "#314633",
                                                                bgcolor: "transparent"
                                                            },
                                                            "aria-label": "Save",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                sx: {
                                                                    width: "20px",
                                                                    height: "20px"
                                                                }
                                                            })
                                                        })
                                                    }) : null
                                                ]
                                            }, user.table_id);
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_usersTablePagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            logging: logging,
                                            usersCount: usersCount,
                                            pagination: pagination
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                padding: "4px",
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.IconButton, {
                                                    onClick: ()=>setCreateForm(true),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        sx: {
                                                            color: "#0e5deb"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "#0e5deb",
                                                        fontSize: "16px",
                                                        display: "inline-block",
                                                        marginLeft: "5px"
                                                    },
                                                    children: "Add user"
                                                })
                                            ]
                                        }),
                                        isCreateForm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_Portal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            selector: "#portal",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createUser__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                setCreateForm: setCreateForm,
                                                getUsers: getUsers,
                                                logging: logging,
                                                table: table,
                                                currentPage: currentPage
                                            })
                                        }),
                                        isPasswordForm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_Portal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            selector: "#portal",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_changePasswordForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                logging: logging,
                                                passwordId: passwordId,
                                                setPasswordForm: setPasswordForm
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().save_btn),
                                            children: isResetBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Button, {
                                                    onClick: (e)=>formReset(e),
                                                    size: "small",
                                                    sx: {
                                                        marginLeft: "15px"
                                                    },
                                                    variant: "contained",
                                                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                                                    children: "Reset all changes"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().reset_logger_btn),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.IconButton, {
                                                onClick: ()=>logger.current.value = "Logging:",
                                                sx: {
                                                    bgcolor: "rgb(44, 44, 44)",
                                                    p: "5px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_RestartAltOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    sx: {
                                                        fill: "white"
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            ref: logger,
                            defaultValue: "Logging:",
                            readOnly: true,
                            className: (_usersTable_module_css__WEBPACK_IMPORTED_MODULE_18___default().logging)
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_17__.observer)(UsersTable));


/***/ })

};
;