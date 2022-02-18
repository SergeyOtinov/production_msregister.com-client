"use strict";
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 2656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let store = {
  language: 'en',
  info: {
    text: "Call us",
    phone: '+44 (744) 992-05-35',
    facebook: 'https://www.facebook.com/Mediterranean-Shipping-Register-1685012711780346/',
    linkedin: '/'
  },
  headerPages: [{
    id: 1,
    title: "Home",
    href: "/",
    seo: {
      description: "Management. Survey. Registration.",
      pageTitle: "Home page",
      siteTitle: "Mediterranean Shipping Register"
    }
  }, {
    id: 2,
    title: "About Us",
    href: "/about",
    seo: {
      description: "Management. Survey. Registration.",
      pageTitle: "About us",
      siteTitle: "Mediterranean Shipping Register"
    },
    tip: "About MSR",
    background: '/img/about_bg.jpg',
    pages: [{
      id: 1,
      title: "About Our Mission",
      href: "/about/mission",
      seo: {
        description: "About Our Mission.",
        pageTitle: "Our Mission",
        siteTitle: "Mediterranean Shipping Register"
      },
      tip: "Our Mission, Vision, Values & Goals",
      background: '/img/mission_bg.jpg'
    }, {
      id: 2,
      title: "About Our Policy",
      href: "/about/policy",
      seo: {
        description: "About Our Policy.",
        pageTitle: "Our Policy",
        siteTitle: "Mediterranean Shipping Register"
      },
      tip: "Our Corporate Policy",
      background: '/img/policy_bg.jpg'
    }, {
      id: 3,
      title: "About Our Geography",
      href: "/about/geography",
      seo: {
        description: "About Our Geography.",
        pageTitle: "Our Geography Services",
        siteTitle: "Mediterranean Shipping Register"
      },
      tip: "Our Geography of Services",
      background: '/img/geography_bg.jpg'
    }]
  }, {
    id: 3,
    title: "Contact",
    href: "/contact",
    seo: {
      description: "Management. Survey. Registration.",
      pageTitle: "Contact",
      siteTitle: "Mediterranean Shipping Register"
    }
  }],
  asidePagesTitle: "Our services",
  asidePages: [{
    id: 1,
    title: "Ship Classification",
    href: "/services/ship-classification",
    seo: {
      description: "Ship Classification.",
      pageTitle: "Ship Classification",
      siteTitle: "Mediterranean Shipping Register"
    }
  }, {
    id: 2,
    title: "Statutory services",
    href: "/services/statutory-services",
    seo: {
      description: "Statutory contents.",
      pageTitle: "Statutory contents",
      siteTitle: "Mediterranean Shipping Register"
    }
  }, {
    id: 3,
    title: "Surveys",
    href: "/services/surveys",
    seo: {
      description: "Surveys.",
      pageTitle: "Surveys",
      siteTitle: "Mediterranean Shipping Register"
    }
  }, {
    id: 4,
    title: "Towage",
    href: "/services/towage",
    seo: {
      description: "Towage.",
      pageTitle: "Towage",
      siteTitle: "Mediterranean Shipping Register"
    }
  }, {
    id: 5,
    title: "Certification",
    href: "/services/certification",
    seo: {
      description: "Certification.",
      pageTitle: "Certification",
      siteTitle: "Mediterranean Shipping Register"
    }
  }, {
    id: 6,
    title: "Advisory & Consulting",
    href: "/services/advisory-and-consulting",
    seo: {
      description: "Advisory & Consulting.",
      pageTitle: "Advisory & Consulting",
      siteTitle: "Mediterranean Shipping Register"
    }
  }, {
    id: 7,
    title: "Useful Information",
    href: "/services/information",
    seo: {
      description: "Useful Information",
      pageTitle: "Information",
      siteTitle: "Mediterranean Shipping Register"
    }
  }],

  toggleLanguage(e) {
    switch (this.language) {
      case "en":
        for (let lang of e.target.parentNode.querySelectorAll('img[data-id]')) {
          lang.style.transform = 'translateX(24px)';
        }

        this.language = 'ru';
        break;

      case "ru":
        for (let lang of e.target.parentNode.querySelectorAll('img[data-id]')) {
          lang.style.transform = 'translateX(0)';
        }

        this.language = 'en';
        break;

      default:
        this.language = 'en';
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

};
;