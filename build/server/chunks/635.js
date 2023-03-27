exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 8752:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "AboutContent_wrapper__1TrJw",
	"content": "AboutContent_content__eBlqr",
	"block": "AboutContent_block__VOZ_0",
	"h1": "AboutContent_h1__oOT9q",
	"h2": "AboutContent_h2__zWJIo",
	"link": "AboutContent_link__SSZWf",
	"paragraph": "AboutContent_paragraph__5HsBe"
};


/***/ }),

/***/ 7280:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "AboutContentSwitcher_wrapper__L1JMd",
	"page": "AboutContentSwitcher_page__l9nGV"
};


/***/ }),

/***/ 5635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contents_AboutContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/PagesComponents/contents/AboutContent.module.css
var AboutContent_module = __webpack_require__(8752);
var AboutContent_module_default = /*#__PURE__*/__webpack_require__.n(AboutContent_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/PagesComponents/contents/AboutContentSwitcher.module.css
var AboutContentSwitcher_module = __webpack_require__(7280);
var AboutContentSwitcher_module_default = /*#__PURE__*/__webpack_require__.n(AboutContentSwitcher_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/PagesComponents/contents/AboutContentSwitcher.jsx





function AboutContentSwitcher({ pages , aboutPage  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (AboutContentSwitcher_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (AboutContentSwitcher_module_default()).page,
                    "data-title": aboutPage.tip,
                    style: {
                        backgroundImage: "url(" + `${aboutPage.background}` + ")"
                    },
                    hidden: router.pathname === aboutPage.href,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: aboutPage.href,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {})
                    })
                }),
                pages.map((page)=>{
                    if (router.pathname === page.href) return;
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (AboutContentSwitcher_module_default()).page,
                        "data-title": page.tip,
                        style: {
                            backgroundImage: "url(" + `${page.background}` + ")"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: page.href,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {})
                        })
                    }, page.id);
                })
            ]
        })
    });
}
/* harmony default export */ const contents_AboutContentSwitcher = (AboutContentSwitcher);

;// CONCATENATED MODULE: ./components/PagesComponents/contents/AboutContent.jsx





function AboutContent({ data , pages , aboutPage  }) {
    const { h1 , text  } = data;
    let key = 0;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (AboutContent_module_default()).wrapper,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (AboutContent_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (AboutContent_module_default()).h1,
                        children: h1
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (AboutContent_module_default()).block,
                        children: [
                            text.map((sentence)=>{
                                if (!Array.isArray(sentence)) {
                                    if (typeof sentence === "string") {
                                        key++;
                                        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (AboutContent_module_default()).paragraph,
                                            children: sentence
                                        }, key);
                                    } else {
                                        switch(Object.keys(sentence)[0]){
                                            case "h2":
                                                key++;
                                                return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: (AboutContent_module_default()).h2,
                                                    children: sentence.h2
                                                }, key);
                                            default:
                                                key++;
                                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: sentence.link,
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: (AboutContent_module_default()).link,
                                                        title: "Link to " + sentence.link,
                                                        rel: "external",
                                                        target: "_blank",
                                                        children: sentence.title
                                                    })
                                                }, key);
                                        }
                                    }
                                } else {
                                    key++;
                                    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: sentence.map((row)=>{
                                            key++;
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    "\xb7  ",
                                                    row
                                                ]
                                            }, key);
                                        })
                                    }, key);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(contents_AboutContentSwitcher, {
                                data: data,
                                pages: pages,
                                aboutPage: aboutPage
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const contents_AboutContent = (AboutContent);


/***/ })

};
;