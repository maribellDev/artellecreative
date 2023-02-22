"use strict";
(() => {
var exports = {};
exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 9479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Websitepackages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/home.module.scss
var home_module = __webpack_require__(9714);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./styles/mainscreen.module.scss
var mainscreen_module = __webpack_require__(6340);
var mainscreen_module_default = /*#__PURE__*/__webpack_require__.n(mainscreen_module);
// EXTERNAL MODULE: ./styles/pricing.module.scss
var pricing_module = __webpack_require__(9156);
var pricing_module_default = /*#__PURE__*/__webpack_require__.n(pricing_module);
;// CONCATENATED MODULE: ./public/img/services/brand-materials.jpg
/* harmony default export */ const brand_materials = ({"src":"//_next/static/media/brand-materials.bf1af8af.jpg","height":739,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKICqf/EAB0QAAECBwAAAAAAAAAAAAAAAAIBFAADBBMjMUH/2gAIAQEAAT8AmtioDRsF1BTL3cf/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIycf/aAAgBAgEBPwCTrh//xAAXEQEBAQEAAAAAAAAAAAAAAAABAgBy/9oACAEDAQE/AIAb63//2Q=="});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/digital/Firstscreen.js







function Firstscreen() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: (mainscreen_module_default()).sectionAll,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: (mainscreen_module_default()).block,
                className: (mainscreen_module_default()).blockmain,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            maxWidth: "350px"
                        },
                        className: (mainscreen_module_default()).textmain,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (pricing_module_default()).packageprice,
                                children: "Starting at $250"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                style: {
                                    fontSize: "32px"
                                },
                                children: "Digital and Print Design"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Design for branding and marketing materials - digital or printed, one postcard or a multi-page document."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: (home_module_default()).dark,
                                        children: "Get Started "
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (mainscreen_module_default()).imagemain,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: brand_materials,
                            alt: "crafting websites"
                        })
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./Components/Navbar.js + 3 modules
var Navbar = __webpack_require__(7661);
// EXTERNAL MODULE: ./styles/answers.module.scss
var answers_module = __webpack_require__(899);
var answers_module_default = /*#__PURE__*/__webpack_require__.n(answers_module);
;// CONCATENATED MODULE: ./Components/digital/Answers.js


function Answers() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (answers_module_default()).answersall,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    style: {
                        margin: "0 0 10px 0",
                        paddingTop: "80px",
                        color: "#2E303D"
                    },
                    children: "Interested in working together?"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    style: {
                        lineHeight: "24px",
                        fontSize: "16px",
                        textAlign: "center",
                        paddingBottom: "50px",
                        color: "#2E303D"
                    },
                    children: [
                        "Learn more about our process and reach out ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " if you think we’d be a good fit."
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (answers_module_default()).horizontalclick,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "radio",
                            name: "vkl",
                            id: "vkl1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            style: {
                                color: "#2E303D"
                            },
                            htmlFor: "vkl1",
                            children: "What's your pricing?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "Design materials start at $250 and depend on the number of pages and asset type. Reach out to us for pricing."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "radio",
                            name: "vkl",
                            id: "vkl2"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            style: {
                                color: "#2E303D"
                            },
                            htmlFor: "vkl2",
                            children: "What's the typical timeline?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "It depends on the asset, but the process typically takes 1-3 weeks."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: (answers_module_default()).shortLabel,
                            type: "radio",
                            name: "vkl",
                            id: "vkl3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            style: {
                                color: "#2E303D"
                            },
                            className: (answers_module_default()).shortLabel,
                            htmlFor: "vkl3",
                            children: "How many rounds of edits do I get?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "We edit until you're happy with the design."
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./Components/Action.js
var Action = __webpack_require__(9938);
// EXTERNAL MODULE: ./Components/Footer.js + 4 modules
var Footer = __webpack_require__(597);
// EXTERNAL MODULE: ./Components/Layout.js
var Layout = __webpack_require__(7885);
// EXTERNAL MODULE: ./styles/tools.module.scss
var tools_module = __webpack_require__(5742);
var tools_module_default = /*#__PURE__*/__webpack_require__.n(tools_module);
;// CONCATENATED MODULE: ./Components/digital/Toolsweb.js




function Toolsweb() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (tools_module_default()).toolall,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    style: {
                        marginBottom: "0px",
                        paddingTop: "80px"
                    },
                    children: "Eye-catching branding and marketing materials"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        marginRight: "20px",
                        marginLeft: "20px",
                        textAlign: "center",
                        marginBottom: "50px",
                        fontSize: "16px",
                        lineHeight: "24px"
                    },
                    children: "Create a visual consistency between your branding materials."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (tools_module_default()).tools,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Social Media Graphics"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "On-brand social media posts, stories, and banners."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Printed Materials"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Marketing and branding design for print."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Company Decks"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Presentation and PDF design for your company."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Digital Materials"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Lead generation magnets and ebook layout and design."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Packaging Labels and Inserts"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "On-brand design for packaging collateral."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Brand Materials"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Stationery design, business cards or signage."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (tools_module_default()).btnServices,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: {
                                paddingRight: "0px",
                                color: "white"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (home_module_default()).dark,
                                children: "Get Started "
                            })
                        })
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./styles/howitwork.module.scss
var howitwork_module = __webpack_require__(7856);
var howitwork_module_default = /*#__PURE__*/__webpack_require__.n(howitwork_module);
// EXTERNAL MODULE: ./public/img/howitwork.gif
var howitwork = __webpack_require__(9130);
;// CONCATENATED MODULE: ./Components/digital/Howitworks.js




function Howitworks() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (howitwork_module_default()).container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (howitwork_module_default()).howitworks,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (howitwork_module_default()).imghow,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: howitwork/* default */.Z,
                            alt: "how it works"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (howitwork_module_default()).texthow,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "How it works"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (howitwork_module_default()).before,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (howitwork_module_default()).number,
                                            children: "01"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Initial chat and brief"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "We meet for a quick chat about what you're looking for and how we can help. You send us an existing brief or we make one together."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (howitwork_module_default()).before,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (howitwork_module_default()).number,
                                                children: "02"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Design"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We design the assets and submit them for your feedback and approval."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (howitwork_module_default()).before,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (howitwork_module_default()).number,
                                                children: "03"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Final files sent"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We deliver all final files to you via a link. Print files will be ready for print, and digital files will be optimized for the internet."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./styles/gallerypackage.module.scss
var gallerypackage_module = __webpack_require__(9064);
var gallerypackage_module_default = /*#__PURE__*/__webpack_require__.n(gallerypackage_module);
// EXTERNAL MODULE: ./public/gallery/MG2.jpg
var MG2 = __webpack_require__(6069);
// EXTERNAL MODULE: ./public/gallery/lights_july4.jpg
var lights_july4 = __webpack_require__(3281);
// EXTERNAL MODULE: ./public/gallery/EmailDesign5.jpg
var EmailDesign5 = __webpack_require__(7946);
// EXTERNAL MODULE: ./public/gallery/NT-gif.gif
var NT_gif = __webpack_require__(9005);
// EXTERNAL MODULE: ./public/gallery/5.jpg
var _5 = __webpack_require__(6508);
// EXTERNAL MODULE: ./public/gallery/NomadTechy1.jpg
var NomadTechy1 = __webpack_require__(4087);
// EXTERNAL MODULE: ./public/gallery/7.jpg
var _7 = __webpack_require__(7201);
// EXTERNAL MODULE: ./public/gallery/myphoto2.jpg
var myphoto2 = __webpack_require__(9828);
;// CONCATENATED MODULE: ./Components/digital/Gallerypackage.js













function Gallerypackage() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (gallerypackage_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (gallerypackage_module_default()).gallerypackage,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (gallerypackage_module_default()).part1,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (gallerypackage_module_default()).col1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: MG2/* default */.Z,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: lights_july4/* default */.Z,
                                                alt: ""
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (gallerypackage_module_default()).col2,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: EmailDesign5/* default */.Z,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: NT_gif/* default */.Z,
                                                alt: ""
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (gallerypackage_module_default()).part2,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (gallerypackage_module_default()).col3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: _5/* default */.Z,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: NomadTechy1/* default */.Z,
                                                alt: ""
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (gallerypackage_module_default()).col4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: _7/* default */.Z,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: myphoto2/* default */.Z,
                                                alt: ""
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (gallerypackage_module_default()).btnServices,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: {
                                paddingRight: "0px",
                                color: "white"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (home_module_default()).dark,
                                children: "Get Started "
                            })
                        })
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/services/digital-&-print-design.js









// import Reviews from "../../Components/digital/Reviews";



function Websitepackages() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Digital and Print Design - Artelle Creative",
        keywords: "digital and Print Design, web development, web design, web development in florida, web design in Florida, websites, branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites",
        description: "Digital and printed marketing materials for social media, direct mail, email, and web.",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* Navbar */.w, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Firstscreen, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Toolsweb, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Howitworks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Gallerypackage, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Answers, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Action/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer/* Footer */.$, {})
            })
        ]
    }));
};


/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,885,468,938,45,148,993], () => (__webpack_exec__(9479)));
module.exports = __webpack_exports__;

})();