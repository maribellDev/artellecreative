"use strict";
(() => {
var exports = {};
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 3358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Productphoto)
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
;// CONCATENATED MODULE: ./public/img/services/product-photos.jpg
/* harmony default export */ const product_photos = ({"src":"//_next/static/media/product-photos.e7b186bf.jpg","height":739,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAK4nP//EABwQAAEEAwEAAAAAAAAAAAAAAAIDBBETAAExIf/aAAgBAQABPwBs3AyRVP2ywYjle+5//8QAGhEAAAcAAAAAAAAAAAAAAAAAAAECEkFRsf/aAAgBAgEBPwBqagsH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAGxAv/aAAgBAwEBPwB6dp//2Q=="});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/product-and-photo/Firstscreen.js







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
                                children: "Starting at $50/photo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                style: {
                                    fontSize: "32px"
                                },
                                children: "Product Photos & Videos"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Show off your products with attractive images shot for e-commerce. Available only for small items that can be easily shipped."
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
                            src: product_photos,
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
;// CONCATENATED MODULE: ./Components/product-and-photo/Answer.js


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
                            children: "Pricing can vary based on the number of photos, products, styled scenes and etc. Reach out to us for a quote."
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
                            children: "Where are you located?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "We're located in Port St. Lucie, FL. We'll give you an exact address when you're ready to get started."
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
                            children: "What's the typical timeline?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "After products are delivered to the studio, it can take anywhere from 1-3 weeks for shooting to be complete, depending on the number of images and styling."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "radio",
                            name: "vkl",
                            id: "vkl4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            style: {
                                color: "#2E303D"
                            },
                            htmlFor: "vkl4",
                            children: "Do you provide models?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "Hand models - yes!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "radio",
                            name: "vkl",
                            id: "vkl5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            style: {
                                color: "#2E303D"
                            },
                            htmlFor: "vkl5",
                            children: "Are props included?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "Yes, we have a set of props on hand in our studio. If you need anything out of the ordinary or very specific, you can always send the props to us, along with your products."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "radio",
                            name: "vkl",
                            id: "vkl6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            style: {
                                color: "#2E303D"
                            },
                            htmlFor: "vkl6",
                            children: "What kinds of videos can you shoot?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: "85%",
                                color: "#2E303D"
                            },
                            children: "We can shoot simple gifs and studio videos for your products. Something like a fun quick gif for social media or a 360 view of your small product for a product page, but not an entire commercial."
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
;// CONCATENATED MODULE: ./Components/product-and-photo/Toolsweb.js




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
                    children: "Turn heads with professional product photography"
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
                    children: "Everything you need to show off your products to the world."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (tools_module_default()).tools,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Styling & Props"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Let us know what style you're going for and we can source and shoot props specifically for the style you're going for."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Art Direction"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Not sure what style you need? We can work with you to narrow it down."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Professional Equipment"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "We use only the best equipment which ensures your images are always crisp and perfectly lit."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Retouching and Editing"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Retouching and light editing are included with all photos."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Any Background or Scene"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "Whether you're a fan of pastel backgrounds or maybe bright yellow is more your pace, we can shoot with many colors and styles."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (tools_module_default()).tool,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Video and GIF"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    },
                                    children: "We can do stop-motion and simple product GIFs, as well as 360-degree videos for e-commerce."
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
;// CONCATENATED MODULE: ./Components/product-and-photo/Howitworks.js




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
                                            children: "Brief and Shot List"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "To start out we need to know what kinds of shots you need and what style you prefer."
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
                                                children: "Styling & Shooting"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We style any scenes and backgrounds needed and snap a few photos. We get your approval, edit the scene if needed, and continue on with the shoot."
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
                                                children: "Editing and Handoff"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We retouch and edit all images and export them in any sizes or file types you need. And finally deliver all final images to you via a link."
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
;// CONCATENATED MODULE: ./public/gallery/product-photos/1.jpeg
/* harmony default export */ const _1 = ({"src":"//_next/static/media/1.6eb56f33.jpeg","height":800,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAvwf/xAAbEAACAgMBAAAAAAAAAAAAAAABAgQSAAMTQf/aAAgBAQABPwAtOlcGSPVU3NcMxU1Hoz//xAAWEQADAAAAAAAAAAAAAAAAAAAAIVH/2gAIAQIBAT8AdP/EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQMBAT8AcuH/2Q=="});
;// CONCATENATED MODULE: ./public/gallery/product-photos/2.jpg
/* harmony default export */ const _2 = ({"src":"//_next/static/media/2.c093694f.jpg","height":1118,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoBb/xAAdEAABAwUBAAAAAAAAAAAAAAACAQUSAAMEERNh/9oACAEBAAE/AG4XQ8m8rpEE5jHqoa35Gv/EABgRAQEAAwAAAAAAAAAAAAAAAAECACGR/9oACAECAQE/AKkFN9c//8QAGBEBAQADAAAAAAAAAAAAAAAAAQIAIXH/2gAIAQMBAT8ALaB0cM//2Q=="});
;// CONCATENATED MODULE: ./public/gallery/product-photos/3.jpg
/* harmony default export */ const _3 = ({"src":"//_next/static/media/3.2745d4ea.jpg","height":1069,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAvAtL/8QAGBABAAMBAAAAAAAAAAAAAAAAAwAREiP/2gAIAQEAAT8AF0z0Op//xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAIAQIBAT8AdK3/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwAL/9k="});
;// CONCATENATED MODULE: ./public/gallery/product-photos/4.jpg
/* harmony default export */ const _4 = ({"src":"//_next/static/media/4.16dbaf80.jpg","height":1161,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAsATf/8QAGxAAAgIDAQAAAAAAAAAAAAAAAgMBBAARIkL/2gAIAQEAAT8Afftvjt4ILfiCHP/EABcRAQADAAAAAAAAAAAAAAAAAAEAEUH/2gAIAQIBAT8AtdZ//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAIf/aAAgBAwEBPwAkngb/2Q=="});
;// CONCATENATED MODULE: ./public/gallery/product-photos/5.jpg
/* harmony default export */ const _5 = ({"src":"//_next/static/media/5.c157efbf.jpg","height":532,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKwnP//EABwQAAEEAwEAAAAAAAAAAAAAAAIBAwQRACJBYf/aAAgBAQABPwCNGB0mnCrZTSvQ7n//xAAaEQABBQEAAAAAAAAAAAAAAAAhAAECEkGx/9oACAECAQE/AKxAxuL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAVES/9oACAEDAQE/ANO0/9k="});
;// CONCATENATED MODULE: ./public/gallery/product-photos/6.jpg
/* harmony default export */ const _6 = ({"src":"//_next/static/media/6.e2e2999b.jpg","height":1148,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKgT2f/EAB0QAAICAQUAAAAAAAAAAAAAAAECAwQSABExMmH/2gAIAQEAAT8AaOhVVA6lMh3aQ5HwcnbX/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIDAHH/2gAIAQIBAT8Au6zqVEpno3//xAAYEQADAQEAAAAAAAAAAAAAAAABAgMAcf/aAAgBAwEBPwCKs8wxo44d/9k="});
;// CONCATENATED MODULE: ./public/gallery/product-photos/7.gif
/* harmony default export */ const _7 = ({"src":"//_next/static/media/7.9f5e6b22.gif","height":700,"width":700});
;// CONCATENATED MODULE: ./public/gallery/product-photos/8.jpg
/* harmony default export */ const _8 = ({"src":"//_next/static/media/8.ad9487f3.jpg","height":1110,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAAAdj/xAAdEAACAQQDAAAAAAAAAAAAAAABAgQAAxEhEhMx/9oACAEBAAE/AGMq0/Q0rAVEZWLcQRvXhORX/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAh/9oACAECAQE/AHG//8QAGREBAAIDAAAAAAAAAAAAAAAAAQIRABIx/9oACAEDAQE/ANkI0BcR4Z//2Q=="});
;// CONCATENATED MODULE: ./Components/product-and-photo/Gallerypackage.js













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
                                                src: _1,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: _2,
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
                                                src: _3,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: _4,
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
                                                src: _5,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                classname: (gallerypackage_module_default()).img,
                                                src: _6,
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
                                                src: _7,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (gallerypackage_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: _8,
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
;// CONCATENATED MODULE: ./pages/services/product-photos-&-videos.js









// import Reviews from "../../Components/product-and-photo/Reviews";



function Productphoto() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Product Photos & Videos - Artelle Creative",
        keywords: "product Photos, Product videos, web development, web design, web development in florida, web design in Florida, websites, branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites",
        description: "Small item product photography for ecommerce.",
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,885,468,938,45], () => (__webpack_exec__(3358)));
module.exports = __webpack_exports__;

})();