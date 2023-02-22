"use strict";
(() => {
var exports = {};
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 8059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Webdevelopment)
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
;// CONCATENATED MODULE: ./public/img/services/web-development.jpg
/* harmony default export */ const web_development = ({"src":"//_next/static/media/web-development.2d58563f.jpg","height":739,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAkEP/xAAfEAACAQIHAAAAAAAAAAAAAAACAwEABAUGERMjMkL/2gAIAQEAAT8Ayqdy3DEgp0J27zvAanyR5r//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAECAQE/ALlaf//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPwANv//Z"});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/webdevelopment/Firstscreen.js







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
                                children: "Reach out for pricing."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                style: {
                                    fontSize: "32px"
                                },
                                children: "Web Development"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Web development from existing design files."
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
                            src: web_development,
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
;// CONCATENATED MODULE: ./Components/webdevelopment/Answers.js


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
                            children: "What kind of design files do you need?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "Figma, Sketch, Adobe XD, or Photoshop."
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
                            children: "It depends on the technology involved and the number of pages. Expect development to take 3-8 weeks."
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
                            children: "What should I have prepared before we begin the project?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "The design files and prototype with any notes."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "radio",
                            name: "vkl",
                            id: "vkl4"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            style: {
                                color: "#2E303D"
                            },
                            htmlFor: "vkl4",
                            children: [
                                "I'm not a designer, but I have a general idea of how",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " the website should look. Can you develop it?"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "No. Please see Website Packages for custom website design and development."
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
;// CONCATENATED MODULE: ./Components/webdevelopment/Toolsweb.js




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
                    children: "Capabilities"
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
                    children: "Web development from existing design files."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (tools_module_default()).tools,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "WordPress Development"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Custom WordPress theme development."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "React Development"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Custom development using React."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Responsive Development"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "All web development is responsive and looks great on any screen."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "CMS Integration"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Easily edit website content with an integrated Content Management System."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Search Engine Optimization"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Includes keyword implementation, image optimization, and all metadata and alt text."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "External Integrations"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "We integrate any needed third-party functionalities."
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

// EXTERNAL MODULE: ./styles/reviews.module.scss
var reviews_module = __webpack_require__(2150);
var reviews_module_default = /*#__PURE__*/__webpack_require__.n(reviews_module);
// EXTERNAL MODULE: ./public/img/reviews/Venya.png
var Venya = __webpack_require__(8785);
// EXTERNAL MODULE: ./public/img/reviews/img.png
var img = __webpack_require__(3426);
;// CONCATENATED MODULE: ./Components/webdevelopment/Reviews.js






function Reviews() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (reviews_module_default()).container,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (reviews_module_default()).reviews,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (reviews_module_default()).blockrev,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (reviews_module_default()).illustration,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: img/* default */.Z,
                                alt: "illustration"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (reviews_module_default()).text,
                            children: "Thank you for building my website. It’s literally perfect! I am very happy with how my logo and business cards turned out as well."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (reviews_module_default()).client,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        className: (reviews_module_default()).photo,
                                        src: Venya/* default */.Z,
                                        alt: "Good client"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (reviews_module_default()).textright,
                                        children: [
                                            "Ven S. ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " Nomad Techy"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./styles/howitwork.module.scss
var howitwork_module = __webpack_require__(7856);
var howitwork_module_default = /*#__PURE__*/__webpack_require__.n(howitwork_module);
// EXTERNAL MODULE: ./public/img/howitwork.gif
var howitwork = __webpack_require__(9130);
;// CONCATENATED MODULE: ./Components/webdevelopment/Howitworks.js




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
                                            children: "Initial call"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "We collect all the needed info, talk about timelines and see if we're a good fit."
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
                                                children: "Development"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We develop the website from existing design mockups and connect all the needed functionalities."
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
                                                children: "Handoff"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We deliver the final website and walk you through the final setup."
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
// EXTERNAL MODULE: ./public/gallery/MG1.jpg
var MG1 = __webpack_require__(2291);
// EXTERNAL MODULE: ./public/gallery/2.jpg
var _2 = __webpack_require__(7596);
// EXTERNAL MODULE: ./public/gallery/NT-gif.gif
var NT_gif = __webpack_require__(9005);
// EXTERNAL MODULE: ./public/gallery/4.jpg
var _4 = __webpack_require__(5160);
// EXTERNAL MODULE: ./public/gallery/5.jpg
var _5 = __webpack_require__(6508);
// EXTERNAL MODULE: ./public/gallery/NomadTechy1.jpg
var NomadTechy1 = __webpack_require__(4087);
// EXTERNAL MODULE: ./public/gallery/7.jpg
var _7 = __webpack_require__(7201);
// EXTERNAL MODULE: ./public/gallery/8.png
var _8 = __webpack_require__(5889);
;// CONCATENATED MODULE: ./Components/webdevelopment/Gallerypackage.js













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
                                                src: MG1/* default */.Z,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: _2/* default */.Z,
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
                                                src: NT_gif/* default */.Z,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: _4/* default */.Z,
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
                                                src: _8/* default */.Z,
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
;// CONCATENATED MODULE: ./pages/services/web-development.js













function Webdevelopment() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Web Development - Artelle Creative",
        keywords: "web development, web design, web development in florida, web design in Florida, websites, branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites",
        description: "Website development from existing design files.",
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
            /*#__PURE__*/ jsx_runtime_.jsx(Reviews, {}),
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,885,468,938,45,148,70,341], () => (__webpack_exec__(8059)));
module.exports = __webpack_exports__;

})();