"use strict";
(() => {
var exports = {};
exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 8826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Home() {
    const { /*#__PURE__*/ 0: number1 , 1: setNumber1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: number2 , 1: setNumber2  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    function calculate(operator = "/") {
        let list = [];
        if (number1) list.push(number1);
        if (number2) list.push(number2);
        if (list.length === 0) {
            setResult("Please select fields");
            return;
        }
        let total = list[0];
        for(let idx = 1; idx < list.length; idx++){
            if (operator === "/") total = number1 / number2;
        }
        setResult(total);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundColor: "#EAEEF3"
        },
        className: "jsx-e13b955ed0af2f66",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "jsx-e13b955ed0af2f66",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-e13b955ed0af2f66",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                            className: "jsx-e13b955ed0af2f66"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                            className: "jsx-e13b955ed0af2f66"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            style: {
                                textAlign: "center",
                                maxWidth: "470px",
                                margin: "0 auto"
                            },
                            className: "jsx-e13b955ed0af2f66",
                            children: "Flexible payment structures designed for your business."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                            className: "jsx-e13b955ed0af2f66"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                            className: "jsx-e13b955ed0af2f66"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                margin: "50px auto",
                                backgroundColor: "white",
                                maxWidth: "726px",
                                display: "flex",
                                padding: "21px 35px",
                                justifyContent: "space-around"
                            },
                            className: "jsx-e13b955ed0af2f66",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-e13b955ed0af2f66",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-e13b955ed0af2f66",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "number1",
                                                className: "jsx-e13b955ed0af2f66",
                                                children: "Amount to finance"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            value: number1,
                                            onChange: (e)=>setNumber1(+e.target.value)
                                            ,
                                            placeholder: "$5000",
                                            className: "jsx-e13b955ed0af2f66"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-e13b955ed0af2f66",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-e13b955ed0af2f66",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "number2",
                                                className: "jsx-e13b955ed0af2f66",
                                                children: "Term length"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            value: number2,
                                            onChange: (e)=>setNumber2(+e.target.value)
                                            ,
                                            placeholder: "12 months",
                                            className: "jsx-e13b955ed0af2f66"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-e13b955ed0af2f66",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                marginTop: "-5px",
                                                fontSize: "16px",
                                                marginBottom: "10px"
                                            },
                                            className: "jsx-e13b955ed0af2f66",
                                            children: "Estimated Payment"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            style: {
                                                marginTop: "-5px"
                                            },
                                            className: "jsx-e13b955ed0af2f66",
                                            children: result
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                margin: "20px auto",
                                width: "50px"
                            },
                            className: "jsx-e13b955ed0af2f66",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                style: {
                                    alignSelf: "center"
                                },
                                type: "button",
                                onClick: ()=>{
                                    calculate("/");
                                },
                                className: "jsx-e13b955ed0af2f66",
                                children: "result"
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "e13b955ed0af2f66",
                children: "html, body{background:rgba(234, 238, 243, 1);\npadding:0;\nmargin:0;\nfont-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif}\n*{box-sizing:border-box}\ninput{margin-top:13px;\nborder:none}"
            })
        ]
    }));
};


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8826));
module.exports = __webpack_exports__;

})();