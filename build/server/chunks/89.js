exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 6293:
/***/ ((module) => {

// Exports
module.exports = {
	"aside": "AsideMenu_aside___3o7f",
	"nav": "AsideMenu_nav__dqWXX",
	"h2": "AsideMenu_h2__MD0Yq",
	"link": "AsideMenu_link__Kgi56",
	"link__active": "AsideMenu_link__active__r6rHD",
	"rights": "AsideMenu_rights__OsPaI"
};


/***/ }),

/***/ 6932:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "FooterMenu_footer__IGhxF",
	"nav": "FooterMenu_nav__eLtio",
	"link": "FooterMenu_link__3z06j",
	"disable": "FooterMenu_disable__Kv5jc"
};


/***/ }),

/***/ 3298:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__pUpk9"
};


/***/ }),

/***/ 4651:
/***/ ((module) => {

// Exports
module.exports = {
	"headerNav": "HeaderNav_headerNav__9HqtY",
	"link": "HeaderNav_link__9eL7e",
	"link__active": "HeaderNav_link__active__i8Tsa",
	"logo": "HeaderNav_logo__eoVx2",
	"mobile": "HeaderNav_mobile__m2oDV",
	"mobileClick": "HeaderNav_mobileClick__jqcZP",
	"screen": "HeaderNav_screen__2UNU9"
};


/***/ }),

/***/ 5978:
/***/ ((module) => {

// Exports
module.exports = {
	"userInfo": "HeaderUser_userInfo__5_36j",
	"cabinet": "HeaderUser_cabinet__hLPdS"
};


/***/ }),

/***/ 9164:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "LoginForm_wrapper__luTLa",
	"form": "LoginForm_form__cvr1j",
	"success": "LoginForm_success__18REw",
	"error": "LoginForm_error__zQ9Vs",
	"buttonGroup": "LoginForm_buttonGroup__ES_ug"
};


/***/ }),

/***/ 8963:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Main_layout_content__7xR97"
};


/***/ }),

/***/ 6914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


const Portal = ({ children , selector  })=>{
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setMounted(true);
        return ()=>setMounted(false);
    }, []);
    return mounted ? /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, document.querySelector(selector)) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);


/***/ }),

/***/ 3089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Context": () => (/* binding */ Context),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(3298);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Header/HeaderNav.module.css
var HeaderNav_module = __webpack_require__(4651);
var HeaderNav_module_default = /*#__PURE__*/__webpack_require__.n(HeaderNav_module);
;// CONCATENATED MODULE: ./src/assets/images/svg/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.438e4f8e.svg","height":242,"width":841,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/images/svg/menu-mobile.svg
/* harmony default export */ const menu_mobile = ({"src":"/_next/static/media/menu-mobile.772e42d9.svg","height":242,"width":242,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/images/svg/long-arrow-alt-left-solid.svg
/* harmony default export */ const long_arrow_alt_left_solid = ({"src":"/_next/static/media/long-arrow-alt-left-solid.debfa683.svg","height":512,"width":448,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Header/HeaderUser.module.css
var HeaderUser_module = __webpack_require__(5978);
var HeaderUser_module_default = /*#__PURE__*/__webpack_require__.n(HeaderUser_module);
// EXTERNAL MODULE: external "@mui/icons-material/AccountCircle"
var AccountCircle_ = __webpack_require__(1883);
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(5944);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/Header/HeaderUser.jsx








function HeaderUser() {
    const { store  } = (0,external_react_.useContext)(Context);
    const router = (0,router_.useRouter)();
    const matches = (0,material_.useMediaQuery)("(min-width:1024px)");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: store.isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {
            size: "20px",
            sx: {
                color: "#000000"
            }
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                matches && /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {
                    sx: {
                        fill: "var(--color-first-orange)",
                        width: "30px",
                        height: "30px"
                    }
                }),
                matches && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (HeaderUser_module_default()).userInfo,
                    children: [
                        `${store.user.email}`,
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: " | "
                        }),
                        `id::${store.user.userid}`
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: ()=>router.push(`/user/${store.user.userid}`),
                    className: (HeaderUser_module_default()).cabinet,
                    children: "cabinet"
                })
            ]
        })
    });
}
/* harmony default export */ const Header_HeaderUser = ((0,external_mobx_react_lite_.observer)(HeaderUser));

;// CONCATENATED MODULE: ./components/Header/HeaderNav.jsx











function HeaderNav(props) {
    const { store  } = (0,external_react_.useContext)(Context);
    const router = (0,router_.useRouter)();
    const [isMenuOpen, setMenuState] = (0,external_react_.useState)(false);
    const { headerPages , asidePages , asidePagesTitle  } = props.store;
    const menuVisibleToggle = ()=>isMenuOpen ? setMenuState(false) : setMenuState(true);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (HeaderNav_module_default()).headerNav,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        title: headerPages[0].title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: (HeaderNav_module_default()).logo,
                            src: logo.src,
                            alt: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: (HeaderNav_module_default()).screen,
                    children: headerPages.map((page)=>{
                        const { id , href , title  } = page;
                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: href,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (HeaderNav_module_default()).link + (router.pathname === page.href ? ` ${(HeaderNav_module_default()).link__active}` : ""),
                                children: title
                            })
                        }, id);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: (HeaderNav_module_default()).mobile + (isMenuOpen ? ` ${(HeaderNav_module_default()).mobileClick}` : ""),
                    onClick: menuVisibleToggle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: menu_mobile.src,
                            alt: "menu"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: long_arrow_alt_left_solid.src,
                                        alt: "close menu"
                                    })
                                }),
                                headerPages.map((page)=>{
                                    const { id , href , title  } = page;
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: href,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                "data-id": id,
                                                children: title
                                            })
                                        })
                                    }, id);
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: asidePagesTitle
                                }),
                                asidePages.map((page)=>{
                                    const { id , href , title  } = page;
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: href,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                "data-id": headerPages.length + id,
                                                children: title
                                            })
                                        })
                                    }, headerPages.length + id);
                                })
                            ]
                        })
                    ]
                }),
                store.isAuth && /*#__PURE__*/ jsx_runtime_.jsx(Header_HeaderUser, {})
            ]
        })
    });
}
/* harmony default export */ const Header_HeaderNav = ((0,external_mobx_react_lite_.observer)(HeaderNav));

;// CONCATENATED MODULE: ./components/Header/Header.jsx



function Header({ store  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: (Header_module_default()).header,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Header_HeaderNav, {
                store: store
            })
        })
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/seo.jsx


function Seo({ description ="Error" , pageTitle ="Error Page" , siteTitle ="MSR"  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: `${pageTitle} | ${siteTitle}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: "Serhii Otinov | Сергей Отинов"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: pageTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: siteTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: pageTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: description
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Main.layout.module.css
var Main_layout_module = __webpack_require__(8963);
var Main_layout_module_default = /*#__PURE__*/__webpack_require__.n(Main_layout_module);
// EXTERNAL MODULE: ./components/AsideMenu/AsideMenu.module.css
var AsideMenu_module = __webpack_require__(6293);
var AsideMenu_module_default = /*#__PURE__*/__webpack_require__.n(AsideMenu_module);
;// CONCATENATED MODULE: ./components/AsideMenu/AsideMenu.jsx




function AsideMenu({ store  }) {
    const router = (0,router_.useRouter)();
    const { asidePages , asidePagesTitle  } = store;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
            className: (AsideMenu_module_default()).aside,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (AsideMenu_module_default()).h2,
                    children: asidePagesTitle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: (AsideMenu_module_default()).nav,
                    children: asidePages.map((page)=>{
                        const { id , href , title  } = page;
                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: href,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (AsideMenu_module_default()).link + (router.pathname === href ? ` ${(AsideMenu_module_default()).link__active}` : ""),
                                children: title
                            })
                        }, id);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (AsideMenu_module_default()).rights,
                    children: "MSR. All rights reserved"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/assets/images/index/main_bg.jpg
/* harmony default export */ const main_bg = ({"src":"/_next/static/media/main_bg.36abb721.jpg","height":2988,"width":5312,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAEAAgIBBQAAAAAAAAAAAAABAAIDBAYREiExgf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AiX5nu7205s2Kthe5o3UQTwnrp8iIiFf/2Q==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(9899);
// EXTERNAL MODULE: ./components/LoginForm/LoginForm.module.css
var LoginForm_module = __webpack_require__(9164);
var LoginForm_module_default = /*#__PURE__*/__webpack_require__.n(LoginForm_module);
// EXTERNAL MODULE: external "@mui/icons-material/DoDisturbAlt"
var DoDisturbAlt_ = __webpack_require__(2233);
var DoDisturbAlt_default = /*#__PURE__*/__webpack_require__.n(DoDisturbAlt_);
// EXTERNAL MODULE: external "@mui/icons-material/Done"
var Done_ = __webpack_require__(2494);
var Done_default = /*#__PURE__*/__webpack_require__.n(Done_);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
;// CONCATENATED MODULE: ./components/LoginForm/LoginForm.jsx










function LoginForm({ setLoginHidden  }) {
    const router = (0,router_.useRouter)();
    const [userid, setUserid] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [loginError, setLoginError] = (0,external_react_.useState)("");
    const [passwordError, setPasswordError] = (0,external_react_.useState)("");
    const [successMessage, setSuccessMessage] = (0,external_react_.useState)("");
    const [errorMessage, setErrorMessage] = (0,external_react_.useState)("");
    const [isShowPassword, setShowPassword] = (0,external_react_.useState)(false);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const { store  } = (0,external_react_.useContext)(Context);
    async function login() {
        setLoginError("");
        setPasswordError("");
        setErrorMessage("");
        if (!userid) {
            return setLoginError("User ID or Email cannot be empty!");
        }
        if (!password) {
            return setPasswordError("Password cannot be empty!");
        }
        setLoading(true);
        const response = await store.login(userid, password);
        if (!response) {
            setErrorMessage("Error: Server error");
            setLoading(false);
            return;
        }
        if (typeof response === "string") {
            setLoading(false);
            return setErrorMessage(response);
        }
        setPasswordError("");
        setSuccessMessage("User successfully logged in!");
        router.push(`/user/${store.user.userid}`);
        setTimeout(()=>{
            setLoginHidden(false);
        }, 1000);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (LoginForm_module_default()).wrapper,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (LoginForm_module_default()).form,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "AUTHORIZATION"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                        onInput: (e)=>setUserid(e.target.value),
                        sx: {
                            marginBottom: "10px"
                        },
                        fullWidth: true,
                        error: !!loginError,
                        size: "small",
                        label: "Enter User ID or Email",
                        helperText: loginError ? loginError : "Enter User ID or Email"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.FormControl, {
                        fullWidth: true,
                        size: "small",
                        variant: "outlined",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.InputLabel, {
                                error: !!passwordError,
                                children: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.OutlinedInput, {
                                onInput: (e)=>setPassword(e.target.value),
                                type: isShowPassword ? "text" : "password",
                                error: !!passwordError,
                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                        "aria-label": "toggle password visibility",
                                        onClick: ()=>isShowPassword ? setShowPassword(false) : setShowPassword(true),
                                        onMouseDown: (e)=>e.preventDefault(),
                                        edge: "end",
                                        children: isShowPassword ? /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.VisibilityOff, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Visibility, {})
                                    })
                                }),
                                label: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.FormHelperText, {
                                error: !!passwordError,
                                variant: "outlined",
                                children: passwordError ? passwordError : "Enter user password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (LoginForm_module_default()).buttonGroup,
                        children: [
                            loading ? /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                size: 20,
                                sx: {
                                    color: "#777777",
                                    p: "10px"
                                }
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                disabled: loading,
                                onClick: login,
                                color: "success",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Done_default()), {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                onClick: ()=>setLoginHidden(false),
                                sx: {
                                    marginLeft: "10px"
                                },
                                color: "error",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((DoDisturbAlt_default()), {})
                            })
                        ]
                    }),
                    successMessage && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (LoginForm_module_default()).success,
                        children: successMessage
                    }),
                    errorMessage && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (LoginForm_module_default()).error,
                        children: errorMessage
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./HOC/Portal.jsx
var Portal = __webpack_require__(6914);
// EXTERNAL MODULE: ./components/Footer/FooterMenu.module.css
var FooterMenu_module = __webpack_require__(6932);
var FooterMenu_module_default = /*#__PURE__*/__webpack_require__.n(FooterMenu_module);
;// CONCATENATED MODULE: ./components/Footer/FooterMenu.jsx








function FooterMenu({ info  }) {
    const { store  } = (0,external_react_.useContext)(Context);
    const router = (0,router_.useRouter)();
    const { isAuth  } = store;
    const { facebook , instagram , linkedin , telegram , twitter  } = info;
    const [isLoginHidden, setLoginHidden] = (0,external_react_.useState)(false);
    const handleAuth = ()=>{
        if (isAuth) {
            store.logout();
            router.push("/");
        } else {
            setLoginHidden(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (FooterMenu_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: (FooterMenu_module_default()).nav,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: facebook,
                            className: (FooterMenu_module_default()).link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-title": "Facebook",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 100 100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "m62.61 53.59 1.5-9.75h-9.36v-6.33c0-2.66 1.31-5.27 5.5-5.27h4.25v-8.3a51.78 51.78 0 0 0-7.5-.66c-7.71 0-12.74 4.67-12.74 13.13v7.43h-8.62v9.75h8.57v23.57h10.54V53.59Z"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (FooterMenu_module_default()).link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-title": "Linkedin",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 100 100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M37.34 71.45H26.66V37.06h10.68ZM32 32.37a6.22 6.22 0 1 1 6.18-6.25A6.24 6.24 0 0 1 32 32.37Zm45.32 39.08H66.66V54.71c0-4-.08-9.11-5.55-9.11s-6.41 4.34-6.41 8.82v17H44V37.06h10.28v4.69h.15a11.22 11.22 0 0 1 10.1-5.55c10.81 0 12.8 7.11 12.8 16.36v18.89Z"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            onClick: handleAuth,
                            "data-role": "loginBtn",
                            className: (FooterMenu_module_default()).link,
                            "data-title": isAuth ? "Logout" : "Login",
                            children: !isAuth ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 100 100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M65.54 68.44h-8.41a1.21 1.21 0 0 1-1.2-1.21v-4a1.2 1.2 0 0 1 1.2-1.2h8.41a3.2 3.2 0 0 0 3.2-3.2V39.61a3.2 3.2 0 0 0-3.2-3.2h-8.41a1.21 1.21 0 0 1-1.2-1.21v-4a1.2 1.2 0 0 1 1.2-1.2h8.41a9.61 9.61 0 0 1 9.61 9.61v19.22a9.62 9.62 0 0 1-9.61 9.61Zm-4.71-20.12L44 31.5a2.41 2.41 0 0 0-4.11 1.7v9.61H26.3a2.39 2.39 0 0 0-2.4 2.4v9.61a2.4 2.4 0 0 0 2.4 2.41h13.61v9.6A2.41 2.41 0 0 0 44 68.54l16.83-16.82a2.4 2.4 0 0 0 0-3.4Z"
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 100 100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M65.5 68.4h-8.4c-.7 0-1.2-.5-1.2-1.2v-4c0-.7.5-1.2 1.2-1.2h8.4c1.8 0 3.2-1.4 3.2-3.2V39.6c0-1.8-1.4-3.2-3.2-3.2h-8.4c-.7 0-1.2-.5-1.2-1.2v-4c0-.7.5-1.2 1.2-1.2h8.4c5.3 0 9.6 4.3 9.6 9.6v19.2c0 5.3-4.3 9.6-9.6 9.6zM24.6 51.7l16.8 16.8c.9.9 2.5.9 3.4 0 .4-.4.7-1.1.7-1.7v-9.6h13.6c1.3 0 2.4-1.1 2.4-2.4v-9.6c0-1.3-1.1-2.4-2.4-2.4H45.5v-9.6c0-1.3-1.1-2.4-2.4-2.4-.6 0-1.2.2-1.7.7L24.6 48.3c-.9.9-.9 2.5 0 3.4z"
                                })
                            })
                        })
                    ]
                })
            }),
            isLoginHidden && /*#__PURE__*/ jsx_runtime_.jsx(Portal/* default */.Z, {
                selector: "#portal",
                children: /*#__PURE__*/ jsx_runtime_.jsx(LoginForm, {
                    setLoginHidden: setLoginHidden
                })
            })
        ]
    });
}
/* harmony default export */ const Footer_FooterMenu = ((0,external_mobx_react_lite_.observer)(FooterMenu));

;// CONCATENATED MODULE: ./components/Main.layout.jsx








function MainLayout({ children  }) {
    let description = "Error", pageTitle = "Error Page", siteTitle = "Mediterranean Shipping Register";
    if (children.props.seo) {
        description = children.props.seo.description;
        pageTitle = children.props.seo.pageTitle;
        siteTitle = children.props.seo.siteTitle;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo, {
                description: description,
                pageTitle: pageTitle,
                siteTitle: siteTitle
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Main_layout_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        store: store/* default */.Z
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AsideMenu, {
                        store: store/* default */.Z
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        style: {
                            backgroundImage: "url(" + `${main_bg.src}` + ")",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "50% 50%",
                            height: "100vh",
                            overflow: "hidden"
                        },
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterMenu, {
                        info: store/* default.info */.Z.info
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Main_layout = (MainLayout);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/http/index.js

const API_URL = "https://www.msregister.com:5000/api/";
// export const API_URL = 'http://localhost:5000/api/'
const $api = external_axios_default().create({
    withCredentials: true,
    baseURL: API_URL
});
$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});
$api.interceptors.response.use((config)=>{
    return config;
}, async (error)=>{
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await external_axios_default().get("https://www.msregister.com:5000/api/refresh", {
                withCredentials: true
            });
            // const response = await axios.get('http://localhost:5000/api/refresh', { withCredentials: true });
            localStorage.setItem("token", response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log("User not authorized!");
        }
    }
    throw error;
});
/* harmony default export */ const http = ($api);

;// CONCATENATED MODULE: ./src/services/AuthServices.js

class AuthService {
    static async login(userid, password) {
        return http.post("/login", {
            userid,
            password
        });
    }
    static async logout() {
        return http.get("/logout");
    }
}

;// CONCATENATED MODULE: ./src/services/UserServices.js

class UserService {
    static async createUser(userid, email, password, name, surname) {
        return http.post("/create", {
            userid,
            email,
            password,
            name,
            surname
        });
    }
    static async updateUser(id, userid, email, name, surname) {
        return http.post("/update", {
            id,
            userid,
            email,
            name,
            surname
        });
    }
    static async updatePasswordUser(passwordId, newPassword) {
        return http.post("/update-password", {
            passwordId,
            newPassword
        });
    }
    static async deleteUser(id) {
        return http.post("/delete", {
            id
        });
    }
    static async updateEmailAdmin(newEmail) {
        return http.post("/update-admin-email", {
            newEmail
        });
    }
    static async updatePasswordAdmin(newPassword) {
        return http.post("/update-admin-password", {
            newPassword
        });
    }
    static async sendMail(mailBody) {
        return http.post("/send", {
            mailBody
        });
    }
    static async fetchUsers() {
        return http.get("/users");
    }
    static async requestElma(requestBody) {
        return http.post("/request-elma", {
            requestBody
        });
    }
}

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(6211);
;// CONCATENATED MODULE: ./src/store/store.js




class Store {
    user = {};
    users = [];
    isAuth = false;
    isLoading = false;
    constructor(){
        (0,external_mobx_.makeAutoObservable)(this);
    }
    setAuth(bool) {
        this.isAuth = bool;
    }
    setUser(user) {
        this.user = user;
    }
    setUsers(users) {
        this.users = users;
    }
    setLoading(bool) {
        this.isLoading = bool;
    }
    getUsers() {
        return this.users;
    }
    async login(userid, password) {
        try {
            const response = await AuthService.login(userid, password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response.status;
        } catch (e) {
            return e.response?.data?.message;
        }
    }
    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await external_axios_default().get("https://www.msregister.com:5000/api/refresh", {
                withCredentials: true
            });
            // const response = await axios.get('http://localhost:5000/api/refresh', { withCredentials: true });
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally{
            this.setLoading(false);
        }
    }
    async updateEmailAdmin(newEmail) {
        try {
            const response = await UserService.updateEmailAdmin(newEmail);
            return response;
        } catch (e) {
            return e.response?.data?.message;
        }
    }
    async updatePasswordAdmin(newPassword) {
        try {
            const response = await UserService.updatePasswordAdmin(newPassword);
            return response;
        } catch (e) {
            return e.response?.data?.message;
        }
    }
    async deleteUser(id) {
        try {
            const response = await UserService.deleteUser(id);
            return response.data.message;
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async fetchUsers(page = 1) {
        try {
            const response = await UserService.fetchUsers();
            const users = await response.data.map((user, index)=>user.table_id = index + 1);
            this.users = response.data.slice((page - 1) * 10, page * 10);
            return response.data;
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async createUser(userid, email, password, name, surname) {
        try {
            const response = await UserService.createUser(userid, email, password, name, surname);
            return response;
        } catch (e) {
            return e.response?.data?.message;
        }
    }
    async updateUser(id, userid, email, name, surname) {
        try {
            const response = await UserService.updateUser(id, userid, email, name, surname);
            return response;
        } catch (e) {
            return e.response?.data?.message;
        }
    }
    async updatePasswordUser(passwordId, newPassword) {
        try {
            const response = await UserService.updatePasswordUser(passwordId, newPassword);
            return response;
        } catch (e) {
            return e.response?.data?.message;
        }
    }
    async sendMail(mailBody) {
        try {
            const result = await UserService.sendMail(mailBody);
            return result.data;
        } catch (e) {
            return e.response?.data?.message;
        }
    }
    async requestElma(requestBody) {
        try {
            const result = await UserService.requestElma(requestBody);
            return result;
        } catch (e) {
            return e.response?.data?.message;
        }
    }
}

;// CONCATENATED MODULE: ./pages/_app.jsx







const _app_store = new Store();
const Context = /*#__PURE__*/ (0,external_react_.createContext)({
    store: _app_store
});
const MyApp = ({ Component , pageProps  })=>{
    const { store  } = (0,external_react_.useContext)(Context);
    (0,external_react_.useEffect)(()=>{
        if (localStorage.getItem("token")) {
            store.checkAuth();
        }
    }, []);
    // if (store.isLoading) {
    // 	return <div>Loading...</div>
    // }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Context.Provider, {
            value: {
                store
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(Main_layout, {
                description: pageProps.description,
                pageTitle: pageProps.pageTitle,
                siteTitle: pageProps.siteTitle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
};
/* harmony default export */ const _app = ((0,external_mobx_react_lite_.observer)(MyApp));


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;