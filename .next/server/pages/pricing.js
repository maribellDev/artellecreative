(() => {
var exports = {};
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 9156:
/***/ ((module) => {

// Exports
module.exports = {
	"services": "pricing_services__i6k8z",
	"container": "pricing_container__jGjX_",
	"block": "pricing_block__0HwiN",
	"images": "pricing_images__esTUn",
	"imageright": "pricing_imageright__t775J",
	"imageleft": "pricing_imageleft__Pcn8X",
	"price": "pricing_price__GwV0C",
	"priceweb": "pricing_priceweb__joi_L",
	"im": "pricing_im__gN5GV",
	"imsquare": "pricing_imsquare__HUmqu",
	"packageprice": "pricing_packageprice__bkkkj"
};


/***/ }),

/***/ 7709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Pricing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./Components/Footer.js + 4 modules
var Footer = __webpack_require__(597);
// EXTERNAL MODULE: ./Components/Navbar.js + 3 modules
var Navbar = __webpack_require__(7661);
// EXTERNAL MODULE: ./styles/pricing.module.scss
var pricing_module = __webpack_require__(9156);
var pricing_module_default = /*#__PURE__*/__webpack_require__.n(pricing_module);
// EXTERNAL MODULE: ./Components/Layout.js
var Layout = __webpack_require__(7885);
;// CONCATENATED MODULE: ./public/img/pricing/1-website.gif
/* harmony default export */ const _1_website = ({"src":"//_next/static/media/1-website.a3d945c8.gif","height":960,"width":960});
;// CONCATENATED MODULE: ./public/img/pricing/2-branding.jpg
/* harmony default export */ const _2_branding = ({"src":"//_next/static/media/2-branding.36a1a247.jpg","height":960,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKqJr//EABoQAQABBQAAAAAAAAAAAAAAABESAAEDIVH/2gAIAQEAAT8AxybyB0cr/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAECAQE/AFh//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAEDAQE/AGp//9k="});
;// CONCATENATED MODULE: ./Components/Servicewebsite.js






function Servicewebsite() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (pricing_module_default()).block,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Website & Branding Packages"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (pricing_module_default()).text,
                    children: "Whether it’s time for a rebrand or you’re starting out fresh, we make great design easy and uncomplicated with our Website and Branding Packages."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (pricing_module_default()).images,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (pricing_module_default()).imageright,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "services/website-packages/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (pricing_module_default()).imsquare,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                className: (pricing_module_default()).im,
                                                src: _1_website,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Website Packages"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (pricing_module_default()).price,
                                            children: "Starting at $2,800"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (pricing_module_default()).imageleft,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/services/brand-logo-design-packages/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (pricing_module_default()).imsquare,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                className: (pricing_module_default()).im,
                                                src: _2_branding,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Brand & Logo Design Packages"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (pricing_module_default()).price,
                                            children: "Starting at $1,200"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./public/img/pricing/3-new-business.jpg
/* harmony default export */ const _3_new_business = ({"src":"//_next/static/media/3-new-business.a0408854.jpg","height":682,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAApoNP/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQMCEQAxQv/aAAgBAQABPwBsBJy7vnRIz//EABYRAAMAAAAAAAAAAAAAAAAAAAACQf/aAAgBAgEBPwBKf//EABcRAQADAAAAAAAAAAAAAAAAAAIAMXH/2gAIAQMBAT8AdHJ//9k="});
;// CONCATENATED MODULE: ./public/img/pricing/4-maintenance.jpg
/* harmony default export */ const _4_maintenance = ({"src":"//_next/static/media/4-maintenance.15d94e5e.jpg","height":960,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAALkNL//EABkQAAEFAAAAAAAAAAAAAAAAAAEAAxIiQf/aAAgBAQABPwC5c2IX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
;// CONCATENATED MODULE: ./public/img/pricing/5-web-development.gif
/* harmony default export */ const _5_web_development = ({"src":"//_next/static/media/5-web-development.398ae7b7.gif","height":960,"width":960});
;// CONCATENATED MODULE: ./Components/Servicedevelopment.js






function Servicedevelopment() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (pricing_module_default()).block,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Web Development"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (pricing_module_default()).text,
                    children: "Hourly or flat rate website editing, maintanence, and monitoring and website development from existing design files."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (pricing_module_default()).images,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (pricing_module_default()).imageright,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/services/website-maintanence/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (pricing_module_default()).imsquare,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: _4_maintenance,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Website Support"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (pricing_module_default()).price,
                                            children: "Starting at $200"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (pricing_module_default()).imageleft,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/services/web-development/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (pricing_module_default()).imsquare,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: _5_web_development,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Web Development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (pricing_module_default()).price,
                                            children: "Reach out for pricing"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./public/img/pricing/7-email-design.jpg
/* harmony default export */ const _7_email_design = ({"src":"//_next/static/media/7-email-design.30bd49a7.jpg","height":960,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAKAGUf8A/8QAHBAAAwABBQAAAAAAAAAAAAAAAQIDEQASISJx/9oACAEBAAE/AC8bRAkU3STD9Oc+nX//xAAYEQACAwAAAAAAAAAAAAAAAAAAAxIhcv/aAAgBAgEBPwBtQyf/xAAZEQADAAMAAAAAAAAAAAAAAAABAhEAAwT/2gAIAQMBAT8A4yWG2mxzM//Z"});
;// CONCATENATED MODULE: ./public/img/pricing/8-digital-print-materials.jpg
/* harmony default export */ const _8_digital_print_materials = ({"src":"//_next/static/media/8-digital-print-materials.cf05fd11.jpg","height":940,"width":940,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKEIX//EAB0QAAEDBQEAAAAAAAAAAAAAAAMCBBEAARIxQWH/2gAIAQEAAT8AcFG3CnEiBDVy0a8mv//EABoRAQABBQAAAAAAAAAAAAAAAAECAAQREiH/2gAIAQIBAT8AuWW5iacr/8QAGREAAQUAAAAAAAAAAAAAAAAAAQACAyFR/9oACAEDAQE/AI2gi9X/2Q=="});
;// CONCATENATED MODULE: ./Components/Servicemarketing.js






function Servicemarketing() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (pricing_module_default()).block,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Marketing Collateral"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (pricing_module_default()).text,
                    children: "Ad design, email design, newsletters, direct mail, social media assets and sales collateral."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (pricing_module_default()).images,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (pricing_module_default()).imageright,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/services/email-design/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (pricing_module_default()).imsquare,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: _7_email_design,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Email Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (pricing_module_default()).price,
                                            children: "Starting at $100/email"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (pricing_module_default()).imageleft,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/services/digital-&-print-design/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (pricing_module_default()).imsquare,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: _8_digital_print_materials,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Digital & Print Materials"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (pricing_module_default()).price,
                                            children: "Starting at $250"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./public/img/pricing/9-product-photography.jpg
/* harmony default export */ const _9_product_photography = ({"src":"//_next/static/media/9-product-photography.34101780.jpg","height":960,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJwK1//EABwQAAICAgMAAAAAAAAAAAAAAAIDAREAEgRBUf/aAAgBAQABPwBinpJXFkiIWKIl0eoX3sXkZ//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwCI/8QAHBEBAAIBBQAAAAAAAAAAAAAAAQIRAAMEEiFB/9oACAEDAQE/AHcT04w40WK116mf/9k="});
;// CONCATENATED MODULE: ./public/img/pricing/10-video.gif
/* harmony default export */ const _10_video = ({"src":"//_next/static/media/10-video.9f5e6b22.gif","height":700,"width":700});
;// CONCATENATED MODULE: ./Components/Servicesphoto.js






function Servicephoto() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (pricing_module_default()).block,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Product Photography & Video"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (pricing_module_default()).text,
                    children: "Show off your products with eye-catching product photos and videos. Great for e-commerce product pages, and ongoing marketing needs."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (pricing_module_default()).images,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (pricing_module_default()).imageright,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/services/product-photos-&-videos/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (pricing_module_default()).imsquare,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                className: (pricing_module_default()).im,
                                                src: _9_product_photography,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Product Photography"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (pricing_module_default()).price,
                                            children: "Starting at $50"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (pricing_module_default()).imageleft,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/services/product-photos-&-videos/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (pricing_module_default()).imsquare,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                className: (pricing_module_default()).im,
                                                src: _10_video,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Video"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (pricing_module_default()).price,
                                            children: "Starting at $100"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./Components/Action.js
var Action = __webpack_require__(9938);
;// CONCATENATED MODULE: ./public/img/pricing/6-design_retainer.jpg
/* harmony default export */ const _6_design_retainer = ({"src":"//_next/static/media/6-design_retainer.2039b2dd.jpg","height":682,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAKwNH//EABsQAAEEAwAAAAAAAAAAAAAAAAIAAxEhARNh/9oACAEBAAE/AAjQ3mBtopri/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAEDAQE/AFT/2Q=="});
;// CONCATENATED MODULE: ./pages/pricing.js















function Pricing() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Pricing - Artelle Creative",
        keywords: "Web development, web design, web development in florida, websites for small business, professional websitesfolio Artellecreative website",
        description: "Overview of our creative services and pricing.",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* Navbar */.w, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (pricing_module_default()).services,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Services & Pricing"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (pricing_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Servicewebsite, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            padding: "0 10px 0 10px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/services/new-business-packages/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (pricing_module_default()).im,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: _3_new_business,
                                            className: (pricing_module_default()).business,
                                            alt: "business packages"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: "New Business Packages"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            textAlign: "center",
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            lineHeight: "16px",
                                            letterSpacing: "2.0999999046px",
                                            textTransform: "uppercase"
                                        },
                                        className: (pricing_module_default()).price,
                                        children: "Starting at $3,800"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Servicedevelopment, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (pricing_module_default()).block,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Design Retainer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (pricing_module_default()).text,
                                children: "On-going design support at a flat monthly rate. Includes social media posts design, email design, website assets design, campaign design, and more."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/services/design-retainer/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                marginTop: "68px",
                                                padding: "0 10px 0 10px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (pricing_module_default()).im,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    className: (pricing_module_default()).im,
                                                    src: _6_design_retainer,
                                                    alt: ""
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: "Design Retainer"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            style: {
                                                fontSize: "14px",
                                                fontWeight: "400",
                                                lineHeight: "16px",
                                                letterSpacing: "2.0999999046px",
                                                textAlign: "center",
                                                textTransform: "uppercase"
                                            },
                                            children: "Starting at $720/month"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Servicemarketing, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Servicephoto, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            marginBottom: "62px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Action/* default */.Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* Footer */.$, {})
        ]
    }));
};


/***/ }),

/***/ 7986:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,885,468,938], () => (__webpack_exec__(7709)));
module.exports = __webpack_exports__;

})();