exports.id = 468;
exports.ids = [468];
exports.modules = {

/***/ 7337:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__CKQ67",
	"footermain": "footer_footermain__APDQh",
	"menufooter": "footer_menufooter__0PfeU",
	"contactfooter": "footer_contactfooter__OPZxi",
	"email": "footer_email__bk6Bf",
	"form": "footer_form__dVfm3",
	"follow": "footer_follow__7er_m",
	"insta": "footer_insta___D0oQ",
	"logofooter": "footer_logofooter__bjfbI",
	"privacy": "footer_privacy__N4Knm"
};


/***/ }),

/***/ 3611:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "form_form__zGCiI",
	"getform": "form_getform__P_kEW",
	"emailForm": "form_emailForm__e_dH0",
	"emailBut": "form_emailBut__6y_cl",
	"message": "form_message__bCPOS"
};


/***/ }),

/***/ 9714:
/***/ ((module) => {

// Exports
module.exports = {
	"dark": "home_dark__0Sm1N",
	"black": "home_black__Pd93B",
	"sectionService": "home_sectionService__psKmS",
	"allservices": "home_allservices__KSQKf",
	"service": "home_service__gq9d4",
	"header3": "home_header3__inRpd",
	"small": "home_small__ShXUm",
	"btnServices": "home_btnServices__U6kYY",
	"haction": "home_haction__FWdmf"
};


/***/ }),

/***/ 3899:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "navadapt_header__1iLS_",
	"menu": "navadapt_menu__SrSmi",
	"label": "navadapt_label__q9Eok",
	"navigul": "navadapt_navigul__KGQNj",
	"navwork": "navadapt_navwork__MRU8U",
	"navLi": "navadapt_navLi__zj7_E",
	"menuBtn": "navadapt_menuBtn__OWMYl",
	"menuIcon": "navadapt_menuIcon__8SB3N",
	"navicon": "navadapt_navicon__kNtXH",
	"steps": "navadapt_steps__sI7BQ",
	"logo": "navadapt_logo__asSEN",
	"serv": "navadapt_serv__Gjmhf",
	"work": "navadapt_work__9_XnM"
};


/***/ }),

/***/ 5031:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "navigation_navbar__QOsZm",
	"menu": "navigation_menu__wXBh_",
	"servbut": "navigation_servbut__HdfXc",
	"navigul": "navigation_navigul__wrsID",
	"show": "navigation_show__TUXMt",
	"navserv1": "navigation_navserv1__PQh6y",
	"navserv2": "navigation_navserv2__nX6Ew",
	"workon": "navigation_workon__fpOj8",
	"navigulwork": "navigation_navigulwork___n0WS",
	"navwork": "navigation_navwork__kUing",
	"orange": "navigation_orange__BNHWK",
	"showdown": "navigation_showdown__7wnxt"
};


/***/ }),

/***/ 597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/icons/instagram-icon.svg
/* harmony default export */ const instagram_icon = ({"src":"//_next/static/media/instagram-icon.384061f0.svg","height":25,"width":25});
;// CONCATENATED MODULE: ./public/icons/facebook-icon.svg
/* harmony default export */ const facebook_icon = ({"src":"//_next/static/media/facebook-icon.27f318b4.svg","height":25,"width":25});
// EXTERNAL MODULE: ./styles/footer.module.scss
var footer_module = __webpack_require__(7337);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./public/logo/Logo-footer.svg
/* harmony default export */ const Logo_footer = ({"src":"//_next/static/media/Logo-footer.ab4cee96.svg","height":46,"width":45});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/form.module.scss
var form_module = __webpack_require__(3611);
var form_module_default = /*#__PURE__*/__webpack_require__.n(form_module);
;// CONCATENATED MODULE: ./Components/Form.js



function Form() {
    const { 0: query , 1: setQuery  } = (0,external_react_.useState)({
        email: ""
    });
    // Update inputs value
    const handleParam = ()=>(e)=>{
            const name = e.target.name;
            const value = e.target.value;
            setQuery((prevState)=>({
                    ...prevState,
                    [name]: value
                })
            );
        }
    ;
    // Form Submit function
    const formSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value])=>{
            formData.append(key, value);
        });
        fetch("https://getform.io/f/ec0f15b3-51a2-46ab-abc5-c996107ac09c", {
            method: "POST",
            body: formData
        }).then(()=>setQuery({
                name: "",
                email: "",
                message: ""
            })
        );
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (form_module_default()).form,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: formSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (form_module_default()).getform,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        name: "email",
                        required: true,
                        placeholder: "Enter you email",
                        className: (form_module_default()).emailForm,
                        value: query.email,
                        onChange: handleParam()
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (form_module_default()).emailBut,
                    type: "submit",
                    children: "Sign up"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (form_module_default()).message,
                    children: "Thanks! Your form was send."
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./Components/Footer.js








function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: (footer_module_default()).footer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default()).footermain,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (footer_module_default()).form,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Join the list"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Form, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (footer_module_default()).logofooter,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (footer_module_default()).logo1,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    src: Logo_footer,
                                                    alt: "Logo"
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (footer_module_default()).contactfooter,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Contact us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (footer_module_default()).email,
                                    children: "hello@artellecreative.com"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (footer_module_default()).follow,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Follow along"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (footer_module_default()).social,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.instagram.com/artellecreative/",
                                                    target: "_blanc",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (footer_module_default()).insta,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            src: instagram_icon,
                                                            alt: "instagram"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.facebook.com/ArtelleCreative",
                                                    target: "_blanc",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (footer_module_default()).facebook,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            src: facebook_icon,
                                                            alt: "facebook"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Company"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: (footer_module_default()).menufooter,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            style: {
                                                paddingBottom: "10px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/gallery",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Work"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            style: {
                                                paddingBottom: "10px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/pricing",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Pricing"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            style: {
                                                paddingBottom: "10px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/about",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "About"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Contact"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default()).privacy,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "../policy/policy",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blanc",
                                    children: "Cookie Policy"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "../policy/privacy",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blanc",
                                    children: "Privacy Policy"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "../policy/terms",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blanc",
                                    children: "Terms & Conditions"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "\xa9 Artelle Creative 2022. All rights reserved."
                            })
                        })
                    ]
                })
            ]
        })
    }));
}


/***/ }),

/***/ 7661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/logo/Logo-up.svg
/* harmony default export */ const Logo_up = ({"src":"//_next/static/media/Logo-up.5c9a1329.svg","height":35,"width":230});
// EXTERNAL MODULE: ./styles/navigation.module.scss
var navigation_module = __webpack_require__(5031);
var navigation_module_default = /*#__PURE__*/__webpack_require__.n(navigation_module);
// EXTERNAL MODULE: ./styles/home.module.scss
var home_module = __webpack_require__(9714);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./styles/navadapt.module.scss
var navadapt_module = __webpack_require__(3899);
var navadapt_module_default = /*#__PURE__*/__webpack_require__.n(navadapt_module);
;// CONCATENATED MODULE: ./public/icons/menuimg.svg
/* harmony default export */ const menuimg = ({"src":"//_next/static/media/menuimg.3320db8b.svg","height":5,"width":9});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./Components/Navadapt.js







function Navadapt() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: (navadapt_module_default()).header,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (navadapt_module_default()).logo,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: Logo_up,
                                alt: "Logo"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: (navadapt_module_default()).menuBtn,
                    type: "checkbox",
                    id: (navadapt_module_default()).menuBtn
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    className: (navadapt_module_default()).menuIcon,
                    forhtml: (navadapt_module_default()).menuBtn,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (navadapt_module_default()).navicon
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (navadapt_module_default()).menu,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "checkbox",
                            name: "on",
                            id: "serv",
                            className: (navadapt_module_default()).serv
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            className: (navadapt_module_default()).label,
                            htmlFor: "serv",
                            children: [
                                "Services",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        marginLeft: "10px",
                                        marginRight: "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: menuimg,
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (navadapt_module_default()).navigul,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "PACKAGES "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/website-packages",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Website Packages"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/brand-logo-design-packages",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Brand & Logo Design Packages"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/new-business-packages",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "New Business Packages"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "SERVICES"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/email-design",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Email Design"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/digital-&-print-design",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: " Digital & Print Design"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/design-retainer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Design Retainer "
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/website-maintanence",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Website Support"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/web-development",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Web Development"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/services/product-photos-&-videos",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Product Photos & Videos"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "checkbox",
                            name: "on",
                            id: "work",
                            className: (navadapt_module_default()).work
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            className: (navadapt_module_default()).label,
                            htmlFor: "work",
                            children: [
                                "Work",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        marginLeft: "10px",
                                        marginRight: "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: menuimg,
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (navadapt_module_default()).navwork,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/work",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Case Studies"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/gallery",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Our Work"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (navadapt_module_default()).navLi,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/pricing",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Pricing"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (navadapt_module_default()).navLi,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "About"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (navadapt_module_default()).navLi,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/blog",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Blog"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (navadapt_module_default()).navLi,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Contact"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./Components/Navbar.js








function Navbar() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (navigation_module_default()).navbar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (navigation_module_default()).logo1,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: Logo_up,
                                alt: "Logo"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navadapt, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navigation_module_default()).menu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: (navigation_module_default()).servbut,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (navigation_module_default()).orange,
                                children: "Services"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    paddingRight: "20px",
                                    marginLeft: "10px",
                                    marginRight: "10px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: menuimg,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (navigation_module_default()).navigul,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (navigation_module_default()).navserv1,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "PACKAGES"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/website-packages",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Website Packages"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/brand-logo-design-packages",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Brand & Logo Design Packages"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/new-business-packages",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "New Business Packages"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "line",
                                        style: {
                                            width: "1px",
                                            height: "222px",
                                            borderRight: "1px solid  #F9B384",
                                            margin: "0 29px",
                                            alignSelf: "center"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (navigation_module_default()).navserv2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "SERVICES"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/email-design",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Email Design"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/digital-&-print-design",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: " Digital & Print Design"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/design-retainer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Design Retainer "
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/website-maintanence",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Website Support"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/web-development",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Web Development"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services/product-photos-&-videos",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Product Photos & Videos"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: (navigation_module_default()).workon,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (navigation_module_default()).orange,
                                children: "Work"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    paddingRight: "20px",
                                    marginLeft: "10px",
                                    marginRight: "10px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: menuimg,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (navigation_module_default()).navigulwork,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (navigation_module_default()).navwork,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/work",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Case Studies"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/gallery",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Our Work"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/pricing",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            class: (navigation_module_default()).orange,
                            style: {
                                paddingRight: "30px"
                            },
                            children: "Pricing"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            class: (navigation_module_default()).orange,
                            style: {
                                paddingRight: "30px"
                            },
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/blog",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            class: (navigation_module_default()).orange,
                            style: {
                                paddingRight: "30px"
                            },
                            children: "Blog"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            class: (navigation_module_default()).orange,
                            style: {
                                paddingRight: "0px",
                                color: "white"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (home_module_default()).dark,
                                children: "Get Started"
                            })
                        })
                    })
                ]
            })
        ]
    }));
} // меню с переключателем
 // export function Navbar() {
 //   return (
 //     <nav className={styles.navbar}>
 //       <div>
 //         <Link href={"/"}>
 //           <a>
 //             <span className={styles.logo1}>
 //               <Image src={Logo} alt="Logo" />
 //             </span>
 //           </a>
 //         </Link>
 //       </div>
 //       <Navadapt />
 //       <div className={styles.menu}>
 //         <input type="radio" name="vk" id="vklserv" />
 //         <label
 //           style={{ color: "#2E303D", marginRight: "10px" }}
 //           htmlFor="vklserv"
 //         >
 //           Services
 //           <span style={{ marginLeft: "10px", marginRight: "10px" }}>
 //             <Image src={img} alt=""></Image>
 //           </span>
 //         </label>
 //         <div className={styles.navigul}>
 //           <input type="radio" name="vk" id="vklmenu" />
 //           <label
 //             style={{
 //               position: "absolute",
 //               right: "10px",
 //               color: "#db8e76",
 //               marginRight: "-7px",
 //               fontSize: "22px",
 //             }}
 //             htmlFor="vklmenu"
 //           >
 //             {/* <Image src={img} alt=""></Image> */}
 //             &#215;
 //             <span style={{ marginRight: "10px" }}></span>
 //           </label>
 //           <div className={styles.navserv1}>
 //             <h3>PACKAGES</h3>
 //             <Link href={"/services/website-packages"}>
 //               <a>
 //                 <li>Website Packages</li>
 //               </a>
 //             </Link>
 //             <Link href={"/services/brand-logo-design-packages"}>
 //               <a>
 //                 <li>Brand &amp; Logo Design Packages</li>
 //               </a>
 //             </Link>
 //             <Link href={"/services/new-business-packages"}>
 //               <a>
 //                 <li>New Business Packages</li>
 //               </a>
 //             </Link>
 //           </div>
 //           <div
 //             class="line"
 //             style={{
 //               width: "1px",
 //               height: "222px",
 //               borderRight: "1px solid  #F9B384",
 //               margin: "0 29px",
 //               alignSelf: "center",
 //             }}
 //           ></div>
 //           <div className={styles.navserv2}>
 //             <h3>SERVICES</h3>
 //             <Link href={"/services/email-design"}>
 //               <a>
 //                 <li>Email Design</li>
 //               </a>
 //             </Link>
 //             <Link href={"/services/digital-&-print-design"}>
 //               <a>
 //                 <li> Digital &amp; Print Design</li>
 //               </a>
 //             </Link>
 //             <Link href={"/services/design-retainer"}>
 //               <a>
 //                 <li>Design Retainer </li>
 //               </a>
 //             </Link>
 //             <Link href={"/services/website-maintanence"}>
 //               <a>
 //                 <li>Website Support</li>
 //               </a>
 //             </Link>
 //             <Link href={"/services/web-development"}>
 //               <a>
 //                 <li>Web Development</li>
 //               </a>
 //             </Link>
 //             <Link href={"/services/product-photos-&-videos"}>
 //               <a>
 //                 <li>Product Photos &amp; Videos</li>
 //               </a>
 //             </Link>
 //           </div>
 //         </div>
 //         <input type="radio" name="vk" id="vklwork" />
 //         <label
 //           style={{ color: "#2E303D", marginRight: "10px" }}
 //           htmlFor="vklwork"
 //         >
 //           Work
 //           <span style={{ marginLeft: "10px", marginRight: "10px" }}>
 //             <Image src={img} alt=""></Image>
 //           </span>
 //         </label>
 //         <div className={styles.navigulwork}>
 //           <div className={styles.navwork}>
 //             <Link href={"/work"}>
 //               <a>
 //                 <li>Case Studies</li>
 //               </a>
 //             </Link>
 //             <Link href={"/gallery"}>
 //               <a>
 //                 <li>Our Work</li>
 //               </a>
 //             </Link>
 //           </div>
 //         </div>
 //         <Link href={"/pricing"}>
 //           <a style={{ paddingRight: "30px" }}>Pricing</a>
 //         </Link>
 //         <Link href={"/about"}>
 //           <a style={{ paddingRight: "30px" }}>About</a>
 //         </Link>
 //         <Link href={"/blog"}>
 //           <a style={{ paddingRight: "30px" }}>Blog</a>
 //         </Link>
 //         <Link href={"/contact"}>
 //           <a style={{ paddingRight: "0px", color: "white" }}>
 //             <button className={style.dark}>Get Started</button>
 //           </a>
 //         </Link>
 //       </div>
 //     </nav>
 //   );
 // }


/***/ })

};
;