exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 5846:
/***/ ((module) => {

// Exports
module.exports = {
	"h1": "ServicesContent_h1__nnJ_9",
	"content_wrapper": "ServicesContent_content_wrapper__kEY5D",
	"content_block": "ServicesContent_content_block__SmxjE",
	"paragraph": "ServicesContent_paragraph__2Ff2t",
	"h2": "ServicesContent_h2__W61mT",
	"h3": "ServicesContent_h3__fAqWn",
	"h4": "ServicesContent_h4__CZEeq",
	"link": "ServicesContent_link__1jQvH"
};


/***/ }),

/***/ 1979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5846);
/* harmony import */ var _ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2__);



function ServicesContent({ data  }) {
    const { h1 , text  } = data;
    let key = 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().h1),
                children: h1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().content_wrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().content_block),
                    children: text.map((sentence)=>{
                        if (!Array.isArray(sentence)) {
                            if (typeof sentence === "string") {
                                key++;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().paragraph),
                                    children: sentence
                                }, key);
                            } else {
                                switch(Object.keys(sentence)[0]){
                                    case "h2":
                                        key++;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().h2),
                                            children: sentence.h2
                                        }, key);
                                    case "h4":
                                        key++;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().h4),
                                            children: sentence.h4
                                        }, key);
                                    case "link":
                                        key++;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
                                            href: "https://" + sentence.link,
                                            title: "Link to " + sentence.link,
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            children: Object.values(sentence)
                                        }, key);
                                    case "mail":
                                        key++;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
                                            href: "mailto:" + sentence.mail,
                                            title: "Mail to " + sentence.mail,
                                            children: Object.values(sentence)
                                        }, key);
                                    case "phone":
                                        key++;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
                                            href: "tel:" + sentence.phone,
                                            title: "Call to " + sentence.phone,
                                            children: Object.values(sentence)
                                        }, key);
                                    default:
                                        key++;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_ServicesContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().h3),
                                            children: sentence.h3
                                        }, key);
                                }
                            }
                        } else {
                            key++;
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: sentence.map((row)=>{
                                    key++;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: Array.isArray(row) ? row.map((r)=>{
                                            key++;
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                style: {
                                                    marginLeft: "40px",
                                                    paddingTop: "20px"
                                                },
                                                children: [
                                                    "◦ ",
                                                    r
                                                ]
                                            }, key);
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "\xb7 ",
                                                row
                                            ]
                                        }, key)
                                    });
                                })
                            }, key);
                        }
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesContent);


/***/ })

};
;