exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2268);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



const Portal = ({
  children,
  selector
}) => {
  const {
    0: mounted,
    1: setMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return mounted ? /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, document.querySelector(selector)) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ 4890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Context": () => (/* binding */ Context),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(4798);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Header/HeaderNav.module.css
var HeaderNav_module = __webpack_require__(2799);
var HeaderNav_module_default = /*#__PURE__*/__webpack_require__.n(HeaderNav_module);
;// CONCATENATED MODULE: ./src/assets/images/svg/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/image/src/assets/images/svg/logo.41f579db864d31c1101a3213efac1f46.svg","height":242,"width":841});
;// CONCATENATED MODULE: ./src/assets/images/svg/menu-mobile.svg
/* harmony default export */ const menu_mobile = ({"src":"/_next/static/image/src/assets/images/svg/menu-mobile.010c26172366db7f3224db5bc7770b80.svg","height":242,"width":242});
;// CONCATENATED MODULE: ./src/assets/images/svg/long-arrow-alt-left-solid.svg
/* harmony default export */ const long_arrow_alt_left_solid = ({"src":"/_next/static/image/src/assets/images/svg/long-arrow-alt-left-solid.8c444bf95d19dbc3a15bcde2fa9c74d2.svg","height":512,"width":448});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/Header/HeaderUser.module.css
var HeaderUser_module = __webpack_require__(8097);
var HeaderUser_module_default = /*#__PURE__*/__webpack_require__.n(HeaderUser_module);
// EXTERNAL MODULE: external "@mui/icons-material/AccountCircle"
var AccountCircle_ = __webpack_require__(874);
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(4912);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(7949);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Header/HeaderUser.jsx











function HeaderUser() {
  const {
    store
  } = (0,external_react_.useContext)(Context);
  const router = (0,router_.useRouter)();
  const matches = (0,material_.useMediaQuery)('(min-width:1024px)');
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: store.isLoading ? /*#__PURE__*/jsx_runtime_.jsx(material_.CircularProgress, {
      size: "20px",
      sx: {
        color: '#000000'
      }
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [matches && /*#__PURE__*/jsx_runtime_.jsx((AccountCircle_default()), {
        sx: {
          fill: 'var(--color-first-orange)',
          width: '30px',
          height: '30px'
        }
      }), matches && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: (HeaderUser_module_default()).userInfo,
        children: [`${store.user.email}`, /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: " | "
        }), `id::${store.user.userid}`]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => router.push(`/user/${store.user.userid}`),
        className: (HeaderUser_module_default()).cabinet,
        children: "cabinet"
      })]
    })
  });
}

/* harmony default export */ const Header_HeaderUser = ((0,external_mobx_react_lite_.observer)(HeaderUser));
;// CONCATENATED MODULE: ./components/Header/HeaderNav.jsx














function HeaderNav(props) {
  const {
    store
  } = (0,external_react_.useContext)(Context);
  const router = (0,router_.useRouter)();
  const {
    0: isMenuOpen,
    1: setMenuState
  } = (0,external_react_.useState)(false);
  const {
    headerPages,
    asidePages,
    asidePagesTitle
  } = props.store;

  const menuVisibleToggle = () => isMenuOpen ? setMenuState(false) : setMenuState(true);

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (HeaderNav_module_default()).headerNav,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          title: headerPages[0].title,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: (HeaderNav_module_default()).logo,
            src: logo.src,
            alt: "logo"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: (HeaderNav_module_default()).screen,
        children: headerPages.map(page => {
          const {
            id,
            href,
            title
          } = page;
          return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: href,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (HeaderNav_module_default()).link + (router.pathname === page.href ? ` ${(HeaderNav_module_default()).link__active}` : ''),
              children: title
            })
          }, id);
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: (HeaderNav_module_default()).mobile + (isMenuOpen ? ` ${(HeaderNav_module_default()).mobileClick}` : ''),
        onClick: menuVisibleToggle,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: menu_mobile.src,
          alt: "menu"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: long_arrow_alt_left_solid.src,
              alt: "close menu"
            })
          }), headerPages.map(page => {
            const {
              id,
              href,
              title
            } = page;
            return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: href,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  "data-id": id,
                  children: title
                })
              })
            }, id);
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: asidePagesTitle
          }), asidePages.map(page => {
            const {
              id,
              href,
              title
            } = page;
            return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: href,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  "data-id": headerPages.length + id,
                  children: title
                })
              })
            }, headerPages.length + id);
          })]
        })]
      }), store.isAuth && /*#__PURE__*/jsx_runtime_.jsx(Header_HeaderUser, {})]
    })
  });
}

/* harmony default export */ const Header_HeaderNav = ((0,external_mobx_react_lite_.observer)(HeaderNav));
;// CONCATENATED MODULE: ./components/Header/Header.jsx




function Header({
  store
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("header", {
      className: (Header_module_default()).header,
      children: /*#__PURE__*/jsx_runtime_.jsx(Header_HeaderNav, {
        store: store
      })
    })
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/seo.jsx



function Seo({
  description = 'Error',
  pageTitle = 'Error Page',
  siteTitle = 'MSR'
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: `${pageTitle} | ${siteTitle}`
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "author",
      content: "Serhii Otinov | \u0421\u0435\u0440\u0433\u0435\u0439 \u041E\u0442\u0438\u043D\u043E\u0432"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: pageTitle
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:site_name",
      content: siteTitle
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:card",
      content: "summary"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:title",
      content: pageTitle
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:description",
      content: description
    })]
  });
}
// EXTERNAL MODULE: ./components/Main.layout.module.css
var Main_layout_module = __webpack_require__(4538);
var Main_layout_module_default = /*#__PURE__*/__webpack_require__.n(Main_layout_module);
// EXTERNAL MODULE: ./components/AsideMenu/AsideMenu.module.css
var AsideMenu_module = __webpack_require__(3480);
var AsideMenu_module_default = /*#__PURE__*/__webpack_require__.n(AsideMenu_module);
;// CONCATENATED MODULE: ./components/AsideMenu/AsideMenu.jsx






function AsideMenu({
  store
}) {
  const router = (0,router_.useRouter)();
  const {
    asidePages,
    asidePagesTitle
  } = store;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
      className: (AsideMenu_module_default()).aside,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (AsideMenu_module_default()).h2,
        children: asidePagesTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: (AsideMenu_module_default()).nav,
        children: asidePages.map(page => {
          const {
            id,
            href,
            title
          } = page;
          return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: href,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (AsideMenu_module_default()).link + (router.pathname === href ? ` ${(AsideMenu_module_default()).link__active}` : ''),
              children: title
            })
          }, id);
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (AsideMenu_module_default()).rights,
        children: "MSR. All rights reserved"
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/assets/images/index/main_bg.jpg
/* harmony default export */ const main_bg = ({"src":"/_next/static/image/src/assets/images/index/main_bg.575cfe93970769355b8d1c7306c54b07.jpg","height":2988,"width":5312,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAACP/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAdEAAABQUAAAAAAAAAAAAAAAABAgMEEgAGESJS/9oACAEBAAE/ADXU6fLCqdEI8TyGtf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAgEBPwA1v//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAwEBPwBwv//Z"});
// EXTERNAL MODULE: ./store/store.jsx
var store = __webpack_require__(2656);
// EXTERNAL MODULE: ./components/LoginForm/LoginForm.module.css
var LoginForm_module = __webpack_require__(31);
var LoginForm_module_default = /*#__PURE__*/__webpack_require__.n(LoginForm_module);
// EXTERNAL MODULE: external "@mui/icons-material/DoDisturbAlt"
var DoDisturbAlt_ = __webpack_require__(8755);
var DoDisturbAlt_default = /*#__PURE__*/__webpack_require__.n(DoDisturbAlt_);
// EXTERNAL MODULE: external "@mui/icons-material/Done"
var Done_ = __webpack_require__(8180);
var Done_default = /*#__PURE__*/__webpack_require__.n(Done_);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(4789);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(1708);
;// CONCATENATED MODULE: ./components/LoginForm/LoginForm.jsx












function LoginForm({
  setLoginHidden
}) {
  const router = (0,router_.useRouter)();
  const {
    0: userid,
    1: setUserid
  } = (0,external_react_.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)('');
  const {
    0: loginError,
    1: setLoginError
  } = (0,external_react_.useState)('');
  const {
    0: passwordError,
    1: setPasswordError
  } = (0,external_react_.useState)('');
  const {
    0: successMessage,
    1: setSuccessMessage
  } = (0,external_react_.useState)('');
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,external_react_.useState)('');
  const {
    0: isShowPassword,
    1: setShowPassword
  } = (0,external_react_.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    store
  } = (0,external_react_.useContext)(Context);

  async function login() {
    setLoginError('');
    setPasswordError('');
    setErrorMessage('');

    if (!userid) {
      return setLoginError('User ID or Email cannot be empty!');
    }

    if (!password) {
      return setPasswordError('Password cannot be empty!');
    }

    setLoading(true);
    const response = await store.login(userid, password);

    if (!response) {
      setErrorMessage('Error: Server error');
      setLoading(false);
      return;
    }

    if (typeof response === 'string') {
      setLoading(false);
      return setErrorMessage(response);
    }

    setPasswordError('');
    setSuccessMessage("User successfully logged in!");
    router.push(`/user/${store.user.userid}`);
    setTimeout(() => {
      setLoginHidden(false);
    }, 1000);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (LoginForm_module_default()).wrapper,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LoginForm_module_default()).form,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "AUTHORIZATION"
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.TextField, {
          onInput: e => setUserid(e.target.value),
          sx: {
            marginBottom: '10px'
          },
          fullWidth: true,
          error: !!loginError,
          size: "small",
          label: "Enter User ID or Email",
          helperText: loginError ? loginError : "Enter User ID or Email"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.FormControl, {
          fullWidth: true,
          size: "small",
          variant: "outlined",
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.InputLabel, {
            error: !!passwordError,
            children: "Password"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.OutlinedInput, {
            onInput: e => setPassword(e.target.value),
            type: isShowPassword ? 'text' : 'password',
            error: !!passwordError,
            endAdornment: /*#__PURE__*/jsx_runtime_.jsx(material_.InputAdornment, {
              position: "end",
              children: /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
                "aria-label": "toggle password visibility",
                onClick: () => isShowPassword ? setShowPassword(false) : setShowPassword(true),
                onMouseDown: e => e.preventDefault(),
                edge: "end",
                children: isShowPassword ? /*#__PURE__*/jsx_runtime_.jsx(icons_material_.VisibilityOff, {}) : /*#__PURE__*/jsx_runtime_.jsx(icons_material_.Visibility, {})
              })
            }),
            label: "Password"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.FormHelperText, {
            error: !!passwordError,
            variant: "outlined",
            children: passwordError ? passwordError : 'Enter user password'
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (LoginForm_module_default()).buttonGroup,
          children: [loading ? /*#__PURE__*/jsx_runtime_.jsx((CircularProgress_default()), {
            size: 20,
            sx: {
              color: '#777777',
              p: '10px'
            }
          }) : /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
            disabled: loading,
            onClick: login,
            color: "success",
            children: /*#__PURE__*/jsx_runtime_.jsx((Done_default()), {})
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
            onClick: () => setLoginHidden(false),
            sx: {
              marginLeft: "10px"
            },
            color: "error",
            children: /*#__PURE__*/jsx_runtime_.jsx((DoDisturbAlt_default()), {})
          })]
        }), successMessage && /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (LoginForm_module_default()).success,
          children: successMessage
        }), errorMessage && /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (LoginForm_module_default()).error,
          children: errorMessage
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./HOC/Portal.jsx
var Portal = __webpack_require__(899);
// EXTERNAL MODULE: ./components/Footer/FooterMenu.module.css
var FooterMenu_module = __webpack_require__(3755);
var FooterMenu_module_default = /*#__PURE__*/__webpack_require__.n(FooterMenu_module);
;// CONCATENATED MODULE: ./components/Footer/FooterMenu.jsx











function FooterMenu({
  info
}) {
  const {
    store
  } = (0,external_react_.useContext)(Context);
  const router = (0,router_.useRouter)();
  const {
    isAuth
  } = store;
  const {
    facebook,
    instagram,
    linkedin,
    telegram,
    twitter
  } = info;
  const {
    0: isLoginHidden,
    1: setLoginHidden
  } = (0,external_react_.useState)(false);

  const handleAuth = () => {
    if (isAuth) {
      store.logout();
      router.push('/');
    } else {
      setLoginHidden(true);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: (FooterMenu_module_default()).footer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: (FooterMenu_module_default()).nav,
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: facebook,
          className: (FooterMenu_module_default()).link,
          target: "_blank",
          rel: "noopener noreferrer",
          "data-title": "Facebook",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "m62.61 53.59 1.5-9.75h-9.36v-6.33c0-2.66 1.31-5.27 5.5-5.27h4.25v-8.3a51.78 51.78 0 0 0-7.5-.66c-7.71 0-12.74 4.67-12.74 13.13v7.43h-8.62v9.75h8.57v23.57h10.54V53.59Z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (FooterMenu_module_default()).link,
          target: "_blank",
          rel: "noopener noreferrer",
          "data-title": "Linkedin",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M37.34 71.45H26.66V37.06h10.68ZM32 32.37a6.22 6.22 0 1 1 6.18-6.25A6.24 6.24 0 0 1 32 32.37Zm45.32 39.08H66.66V54.71c0-4-.08-9.11-5.55-9.11s-6.41 4.34-6.41 8.82v17H44V37.06h10.28v4.69h.15a11.22 11.22 0 0 1 10.1-5.55c10.81 0 12.8 7.11 12.8 16.36v18.89Z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: handleAuth,
          "data-role": "loginBtn",
          className: (FooterMenu_module_default()).link,
          "data-title": isAuth ? 'Logout' : 'Login',
          children: !isAuth ? /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M65.54 68.44h-8.41a1.21 1.21 0 0 1-1.2-1.21v-4a1.2 1.2 0 0 1 1.2-1.2h8.41a3.2 3.2 0 0 0 3.2-3.2V39.61a3.2 3.2 0 0 0-3.2-3.2h-8.41a1.21 1.21 0 0 1-1.2-1.21v-4a1.2 1.2 0 0 1 1.2-1.2h8.41a9.61 9.61 0 0 1 9.61 9.61v19.22a9.62 9.62 0 0 1-9.61 9.61Zm-4.71-20.12L44 31.5a2.41 2.41 0 0 0-4.11 1.7v9.61H26.3a2.39 2.39 0 0 0-2.4 2.4v9.61a2.4 2.4 0 0 0 2.4 2.41h13.61v9.6A2.41 2.41 0 0 0 44 68.54l16.83-16.82a2.4 2.4 0 0 0 0-3.4Z"
            })
          }) : /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M65.5 68.4h-8.4c-.7 0-1.2-.5-1.2-1.2v-4c0-.7.5-1.2 1.2-1.2h8.4c1.8 0 3.2-1.4 3.2-3.2V39.6c0-1.8-1.4-3.2-3.2-3.2h-8.4c-.7 0-1.2-.5-1.2-1.2v-4c0-.7.5-1.2 1.2-1.2h8.4c5.3 0 9.6 4.3 9.6 9.6v19.2c0 5.3-4.3 9.6-9.6 9.6zM24.6 51.7l16.8 16.8c.9.9 2.5.9 3.4 0 .4-.4.7-1.1.7-1.7v-9.6h13.6c1.3 0 2.4-1.1 2.4-2.4v-9.6c0-1.3-1.1-2.4-2.4-2.4H45.5v-9.6c0-1.3-1.1-2.4-2.4-2.4-.6 0-1.2.2-1.7.7L24.6 48.3c-.9.9-.9 2.5 0 3.4z"
            })
          })
        })]
      })
    }), isLoginHidden && /*#__PURE__*/jsx_runtime_.jsx(Portal/* default */.Z, {
      selector: "#portal",
      children: /*#__PURE__*/jsx_runtime_.jsx(LoginForm, {
        setLoginHidden: setLoginHidden
      })
    })]
  });
}

/* harmony default export */ const Footer_FooterMenu = ((0,external_mobx_react_lite_.observer)(FooterMenu));
;// CONCATENATED MODULE: ./components/Main.layout.jsx











function MainLayout({
  children
}) {
  let description = 'Error',
      pageTitle = 'Error Page',
      siteTitle = 'Mediterranean Shipping Register';

  if (children.props.seo) {
    description = children.props.seo.description;
    pageTitle = children.props.seo.pageTitle;
    siteTitle = children.props.seo.siteTitle;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Seo, {
      description: description,
      pageTitle: pageTitle,
      siteTitle: siteTitle
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Main_layout_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        store: store/* default */.Z
      }), /*#__PURE__*/jsx_runtime_.jsx(AsideMenu, {
        store: store/* default */.Z
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        style: {
          backgroundImage: "url(" + `${main_bg.src}` + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          height: '100vh',
          overflow: 'hidden'
        },
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer_FooterMenu, {
        info: store/* default.info */.Z.info
      })]
    })]
  });
}

/* harmony default export */ const Main_layout = (MainLayout);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/http/index.js

const API_URL = 'https://navalista.tk:5000/api/';
const $api = external_axios_default().create({
  withCredentials: true,
  baseURL: API_URL
});
$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
$api.interceptors.response.use(config => {
  return config;
}, async error => {
  const originalRequest = error.config;

  if (error.response.status == 401 && error.config && !error._isRetry) {
    originalRequest._isRetry = true;

    try {
      const response = await external_axios_default().get('https://navalista.tk:5000/api/refresh', {
        withCredentials: true
      });
      localStorage.setItem('token', response.data.accessToken);
      return $api.request(originalRequest);
    } catch (e) {
      console.log('User not authorized!');
    }
  }

  throw error;
});
/* harmony default export */ const http = ($api);
;// CONCATENATED MODULE: ./src/services/AuthServices.js

class AuthService {
  static async login(userid, password) {
    return http.post('/login', {
      userid,
      password
    });
  }

  static async logout() {
    return http.get('/logout');
  }

}
;// CONCATENATED MODULE: ./src/services/UserServices.js

class UserService {
  static async createUser(userid, email, password, name, surname) {
    return http.post('/create', {
      userid,
      email,
      password,
      name,
      surname
    });
  }

  static async updateUser(id, userid, email, name, surname) {
    return http.post('/update', {
      id,
      userid,
      email,
      name,
      surname
    });
  }

  static async updatePasswordUser(passwordId, newPassword) {
    return http.post('/update-password', {
      passwordId,
      newPassword
    });
  }

  static async deleteUser(id) {
    return http.post('/delete', {
      id
    });
  }

  static async updateEmailAdmin(newEmail) {
    return http.post('/update-admin-email', {
      newEmail
    });
  }

  static async updatePasswordAdmin(newPassword) {
    return http.post('/update-admin-password', {
      newPassword
    });
  }

  static async sendMail(mailBody) {
    return http.post('/send', {
      mailBody
    });
  }

  static async fetchUsers() {
    return http.get('/users');
  }

}
// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(2965);
;// CONCATENATED MODULE: ./src/store/store.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Store {
  constructor() {
    _defineProperty(this, "user", {});

    _defineProperty(this, "users", []);

    _defineProperty(this, "isAuth", false);

    _defineProperty(this, "isLoading", false);

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
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      return response.status;
    } catch (e) {
      var _e$response, _e$response$data;

      return (_e$response = e.response) === null || _e$response === void 0 ? void 0 : (_e$response$data = _e$response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message;
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      var _e$response2, _e$response2$data;

      console.log((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : (_e$response2$data = _e$response2.data) === null || _e$response2$data === void 0 ? void 0 : _e$response2$data.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);

    try {
      const response = await external_axios_default().get('https://navalista.tk:5000/api/refresh', {
        withCredentials: true
      });
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      var _e$response3, _e$response3$data;

      console.log((_e$response3 = e.response) === null || _e$response3 === void 0 ? void 0 : (_e$response3$data = _e$response3.data) === null || _e$response3$data === void 0 ? void 0 : _e$response3$data.message);
    } finally {
      this.setLoading(false);
    }
  }

  async updateEmailAdmin(newEmail) {
    try {
      const response = await UserService.updateEmailAdmin(newEmail);
      return response;
    } catch (e) {
      var _e$response4, _e$response4$data;

      return (_e$response4 = e.response) === null || _e$response4 === void 0 ? void 0 : (_e$response4$data = _e$response4.data) === null || _e$response4$data === void 0 ? void 0 : _e$response4$data.message;
    }
  }

  async updatePasswordAdmin(newPassword) {
    try {
      const response = await UserService.updatePasswordAdmin(newPassword);
      return response;
    } catch (e) {
      var _e$response5, _e$response5$data;

      return (_e$response5 = e.response) === null || _e$response5 === void 0 ? void 0 : (_e$response5$data = _e$response5.data) === null || _e$response5$data === void 0 ? void 0 : _e$response5$data.message;
    }
  }

  async deleteUser(id) {
    try {
      const response = await UserService.deleteUser(id);
      return response.data.message;
    } catch (e) {
      var _e$response6, _e$response6$data;

      console.log((_e$response6 = e.response) === null || _e$response6 === void 0 ? void 0 : (_e$response6$data = _e$response6.data) === null || _e$response6$data === void 0 ? void 0 : _e$response6$data.message);
    }
  }

  async fetchUsers(page = 1) {
    try {
      const response = await UserService.fetchUsers();
      const users = await response.data.map((user, index) => user.table_id = index + 1);
      this.users = response.data.slice((page - 1) * 10, page * 10);
      return response.data;
    } catch (e) {
      var _e$response7, _e$response7$data;

      console.log((_e$response7 = e.response) === null || _e$response7 === void 0 ? void 0 : (_e$response7$data = _e$response7.data) === null || _e$response7$data === void 0 ? void 0 : _e$response7$data.message);
    }
  }

  async createUser(userid, email, password, name, surname) {
    try {
      const response = await UserService.createUser(userid, email, password, name, surname);
      return response;
    } catch (e) {
      var _e$response8, _e$response8$data;

      return (_e$response8 = e.response) === null || _e$response8 === void 0 ? void 0 : (_e$response8$data = _e$response8.data) === null || _e$response8$data === void 0 ? void 0 : _e$response8$data.message;
    }
  }

  async updateUser(id, userid, email, name, surname) {
    try {
      const response = await UserService.updateUser(id, userid, email, name, surname);
      return response;
    } catch (e) {
      var _e$response9, _e$response9$data;

      return (_e$response9 = e.response) === null || _e$response9 === void 0 ? void 0 : (_e$response9$data = _e$response9.data) === null || _e$response9$data === void 0 ? void 0 : _e$response9$data.message;
    }
  }

  async updatePasswordUser(passwordId, newPassword) {
    try {
      const response = await UserService.updatePasswordUser(passwordId, newPassword);
      return response;
    } catch (e) {
      var _e$response10, _e$response10$data;

      return (_e$response10 = e.response) === null || _e$response10 === void 0 ? void 0 : (_e$response10$data = _e$response10.data) === null || _e$response10$data === void 0 ? void 0 : _e$response10$data.message;
    }
  }

  async sendMail(mailBody) {
    try {
      const result = await UserService.sendMail(mailBody);
      return result.data;
    } catch (e) {
      var _e$response11, _e$response11$data;

      return (_e$response11 = e.response) === null || _e$response11 === void 0 ? void 0 : (_e$response11$data = _e$response11.data) === null || _e$response11$data === void 0 ? void 0 : _e$response11$data.message;
    }
  }

}
;// CONCATENATED MODULE: ./pages/_app.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const _app_store = new Store();
const Context = /*#__PURE__*/(0,external_react_.createContext)({
  store: _app_store
});

const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    store
  } = (0,external_react_.useContext)(Context);
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []); // if (store.isLoading) {
  // 	return <div>Loading...</div>
  // }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Context.Provider, {
      value: {
        store
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Main_layout, {
        description: pageProps.description,
        pageTitle: pageProps.pageTitle,
        siteTitle: pageProps.siteTitle,
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  });
};

/* harmony default export */ const _app = ((0,external_mobx_react_lite_.observer)(MyApp));

/***/ }),

/***/ 3480:
/***/ ((module) => {

// Exports
module.exports = {
	"aside": "AsideMenu_aside__2ttOA",
	"nav": "AsideMenu_nav__3Eyd3",
	"h2": "AsideMenu_h2__WaQ23",
	"link": "AsideMenu_link__xAIdO",
	"link__active": "AsideMenu_link__active__3deid",
	"rights": "AsideMenu_rights__JiEqM"
};


/***/ }),

/***/ 3755:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "FooterMenu_footer__nzbU4",
	"nav": "FooterMenu_nav__3MqA_",
	"link": "FooterMenu_link__tnzuW",
	"disable": "FooterMenu_disable__1eFSQ"
};


/***/ }),

/***/ 4798:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__1-VVS"
};


/***/ }),

/***/ 2799:
/***/ ((module) => {

// Exports
module.exports = {
	"headerNav": "HeaderNav_headerNav__3cTjm",
	"link": "HeaderNav_link__CtYjg",
	"link__active": "HeaderNav_link__active__23wal",
	"logo": "HeaderNav_logo__14EsJ",
	"mobile": "HeaderNav_mobile__1Vknh",
	"mobileClick": "HeaderNav_mobileClick__1T7W0",
	"screen": "HeaderNav_screen__YIKRv"
};


/***/ }),

/***/ 8097:
/***/ ((module) => {

// Exports
module.exports = {
	"userInfo": "HeaderUser_userInfo__1yY88",
	"cabinet": "HeaderUser_cabinet__1DKnR"
};


/***/ }),

/***/ 31:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "LoginForm_wrapper__1R_Ca",
	"form": "LoginForm_form__IJNUk",
	"success": "LoginForm_success__3oYAO",
	"error": "LoginForm_error__6RI2g",
	"buttonGroup": "LoginForm_buttonGroup__14NF-"
};


/***/ }),

/***/ 4538:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Main_layout_content__1FPcr"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;