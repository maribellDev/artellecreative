"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-hotjar"
const external_react_hotjar_namespaceObject = require("react-hotjar");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-gtm-module/dist/TagManager"
const TagManager_namespaceObject = require("react-gtm-module/dist/TagManager");
var TagManager_default = /*#__PURE__*/__webpack_require__.n(TagManager_namespaceObject);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        external_react_hotjar_namespaceObject.hotjar.initialize(2961492, 6);
    }, []);
    (0,external_react_.useEffect)(()=>{
        TagManager_default().initialize({
            gtmId: "G-S7QWMT71TD"
        });
    }, []);
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((script_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=G-S7QWMT71TD`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                children: `window.dataLayer = window.dataLayer || [];
  function gtag() {
  dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-S7QWMT71TD");`
            })
        ]
    });
    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
        type: "text/javascript",
        src: "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=YtnfYs"
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(354));
module.exports = __webpack_exports__;

})();