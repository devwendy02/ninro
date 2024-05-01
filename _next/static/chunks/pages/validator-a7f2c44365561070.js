(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [196], {
        4745: function(e, a, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/validator", function() {
                return n(6054)
            }])
        },
        8892: function(e, a, n) {
            "use strict";
            n.d(a, {
                g: function() {
                    return s
                }
            });
            var t = n(5893),
                r = n(9008),
                i = n.n(r);
            let s = e => {
                let {
                    title: a,
                    content: n,
                    featuredImg: r,
                    siteName: s
                } = e;
                return (0, t.jsxs)(i(), {
                    children: [(0, t.jsx)("title", {
                        children: a
                    }), n && (0, t.jsx)("meta", {
                        name: "description",
                        content: n
                    }), r && (0, t.jsx)("meta", {
                        name: "og:image",
                        content: null != r ? r : ""
                    }, "ogImage"), a && (0, t.jsx)("meta", {
                        property: "og:title",
                        content: a
                    }, "ogTitle"), s && (0, t.jsx)("meta", {
                        name: "og:site_name",
                        content: s
                    }, "ogSiteName")]
                })
            }
        },
        3001: function(e, a, n) {
            "use strict";
            n.d(a, {
                K: function() {
                    return l
                },
                Z: function() {
                    return d
                }
            });
            var t = n(5893),
                r = n(4184),
                i = n.n(r),
                s = n(3025),
                o = n.n(s);
            let d = e => {
                    let {
                        children: a,
                        className: n,
                        withHover: r = !1
                    } = e;
                    return (0, t.jsx)("div", {
                        className: i()(r ? o().CardBackgroundWithHover : o().CardBackground, n),
                        children: a
                    })
                },
                l = e => {
                    let {
                        children: a,
                        className: n
                    } = e;
                    return (0, t.jsx)(d, {
                        className: n,
                        children: (0, t.jsx)("div", {
                            className: o().CardSolidBackground,
                            children: a
                        })
                    })
                }
        },
        4817: function(e, a, n) {
            "use strict";
            n.d(a, {
                B: function() {
                    return w
                }
            });
            var t = n(5893),
                r = n(5424),
                i = n(7435),
                s = n(2981),
                o = n(7294),
                d = n(8471),
                l = n.n(d),
                c = n(9758),
                u = n(8490),
                _ = n(8546),
                h = n(5474),
                m = n(3115),
                x = n(4775),
                g = n.n(x);
            let p = () => (0, t.jsx)("div", {
                className: g().Divider
            });
            var v = n(924),
                j = n(1526),
                f = n(9901),
                C = n.n(f);
            let N = e => {
                let {
                    i: a,
                    expanded: n,
                    setExpanded: r,
                    question: i,
                    answer: s
                } = e, o = a === n;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(p, {}), (0, t.jsx)(v.E.header, {
                        initial: !1,
                        onClick: () => r(!o && a),
                        className: C().FAQRow,
                        children: (0, t.jsxs)("div", {
                            className: C().QuestionContainer,
                            children: [(0, t.jsx)(m.J, {
                                level: "display-sm",
                                className: C().Question,
                                children: i
                            }), o ? (0, t.jsx)(_.V, {
                                size: 20
                            }) : (0, t.jsx)(h.o, {
                                size: 20
                            })]
                        })
                    }), (0, t.jsx)(j.M, {
                        initial: !1,
                        children: o && (0, t.jsx)(v.E.section, {
                            initial: "collapsed",
                            animate: "open",
                            exit: "collapsed",
                            variants: {
                                open: {
                                    opacity: 1,
                                    height: "auto"
                                },
                                collapsed: {
                                    opacity: 0,
                                    height: 0
                                }
                            },
                            transition: {
                                duration: .5,
                                ease: [.04, .62, .23, .98]
                            },
                            children: (0, t.jsx)(v.E.div, {
                                variants: {
                                    collapsed: {
                                        opacity: 0
                                    },
                                    open: {
                                        opacity: 1
                                    }
                                },
                                transition: {
                                    duration: .4
                                },
                                className: "content-placeholder",
                                children: (0, t.jsx)(m.J, {
                                    dim: !0,
                                    level: "body-md",
                                    className: C().Answer,
                                    children: s
                                })
                            })
                        }, "content")
                    })]
                })
            };
            var B = n(133),
                k = n.n(B);
            let S = e => {
                    let {
                        faqs: a,
                        href: n,
                        shouldRemoveRelAttr: r = !1
                    } = e, [i, s] = (0, o.useState)(!1);
                    return (0, t.jsxs)("div", {
                        children: [a.map((e, a) => (0, t.jsx)(N, {
                            i: a,
                            expanded: i,
                            setExpanded: s,
                            ...e
                        }, "key" + a)), (0, t.jsx)(p, {}), (0, t.jsx)(u.r, {
                            monochrome: !0,
                            level: "body-md-strong",
                            className: k().ReadMoreLink,
                            href: n,
                            target: "__blank",
                            rel: r ? void 0 : "noreferrer",
                            children: (0, t.jsxs)("div", {
                                className: k().Text,
                                children: ["Read More ", (0, t.jsx)(c.h, {
                                    size: 20
                                })]
                            })
                        })]
                    })
                },
                w = e => {
                    let {
                        faqs: a,
                        href: n
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: l().Wrapper,
                        children: [(0, t.jsxs)(i.m, {
                            children: [(0, t.jsx)("div", {
                                className: l().Shape1
                            }), (0, t.jsx)("div", {
                                className: l().Shape2
                            }), (0, t.jsx)("div", {
                                className: l().Shape3
                            }), (0, t.jsx)("div", {
                                className: l().Content,
                                children: (0, t.jsxs)("div", {
                                    className: l().Columns,
                                    children: [(0, t.jsx)(r.O, {
                                        subtitle: "Frequently Asked Questions",
                                        className: l().FAQHeading
                                    }), (0, t.jsx)(S, {
                                        faqs: a,
                                        href: n
                                    })]
                                })
                            })]
                        }), (0, t.jsx)(s.F, {})]
                    })
                }
        },
        6331: function(e, a, n) {
            "use strict";
            n.d(a, {
                C: function() {
                    return s
                }
            });
            var t = n(5893);
            n(7294);
            var r = n(4225),
                i = n.n(r);
            let s = e => {
                let {
                    children: a
                } = e;
                return (0, t.jsx)("div", {
                    className: i().Heading,
                    children: a
                })
            }
        },
        5424: function(e, a, n) {
            "use strict";
            n.d(a, {
                O: function() {
                    return l
                }
            });
            var t = n(5893),
                r = n(3115),
                i = n(4184),
                s = n.n(i);
            n(7294);
            var o = n(9815),
                d = n.n(o);
            let l = e => {
                let {
                    title: a,
                    subtitle: n,
                    centered: i = !1,
                    alwaysCentered: o = !1,
                    className: l
                } = e;
                return (0, t.jsxs)("div", {
                    className: s()(d().Heading, d()[i ? "centered--desktop" : o ? "centered--always" : ""], l),
                    children: [(0, t.jsx)(r.J, {
                        className: d().Title,
                        level: "display-md",
                        dim: !0,
                        children: a
                    }), (0, t.jsx)("div", {
                        className: d().Subtitle,
                        children: n
                    })]
                })
            }
        },
        1130: function(e, a, n) {
            "use strict";
            n.d(a, {
                V: function() {
                    return c
                }
            });
            var t = n(5893),
                r = n(9758),
                i = n(3115),
                s = n(6878),
                o = n(6331);
            n(7294);
            var d = n(6235),
                l = n.n(d);
            let c = e => {
                let {
                    firstText: a,
                    secondText: n,
                    description: d,
                    buttonProps: c,
                    image: u
                } = e, {
                    width: _,
                    text: h,
                    href: m,
                    shouldRemoveRelAttr: x = !1
                } = c;
                return (0, t.jsxs)("div", {
                    className: l().Container,
                    children: [(0, t.jsxs)("div", {
                        className: l().LeftContent,
                        children: [(0, t.jsxs)(o.C, {
                            children: [(0, t.jsx)("div", {
                                children: a
                            }), (0, t.jsx)("div", {
                                children: n
                            })]
                        }), (0, t.jsx)(i.J, {
                            className: l().Paragraph,
                            level: "display-xs",
                            children: d
                        }), (0, t.jsx)("a", {
                            href: m,
                            target: "__blank",
                            rel: x ? void 0 : "noreferrer",
                            children: (0, t.jsx)(s.z, {
                                rightIcon: r.h,
                                label: h,
                                className: l().Button,
                                size: "lg",
                                style: {
                                    width: "".concat(_, "px")
                                }
                            })
                        })]
                    }), u]
                })
            }
        },
        3162: function(e, a, n) {
            "use strict";
            n.d(a, {
                N: function() {
                    return d
                }
            });
            var t = n(5893),
                r = n(9758),
                i = n(3650);
            n(7294);
            var s = n(7088),
                o = n.n(s);
            let d = () => (0, t.jsxs)("div", {
                className: o().Banner,
                children: [(0, t.jsx)(i.C, {
                    intent: "success",
                    label: "New",
                    className: o().Badge
                }), (0, t.jsx)("a", {
                    href: "https://blog.axieinfinity.com/p/part-evolution-is-live",
                    target: "__blank",
                    children: (0, t.jsxs)("div", {
                        className: o().LeftContent,
                        children: [(0, t.jsx)("div", {
                            className: o().Emoji,
                            children: "\uD83C\uDF89"
                        }), "Axie Part Evolution is LIVE. Evolve your axies now, read more here"]
                    })
                }), (0, t.jsx)(r.h, {
                    size: 20
                })]
            })
        },
        5445: function(e, a, n) {
            "use strict";
            n.d(a, {
                L: function() {
                    return t
                }
            });
            let t = "https://cdn.skymavis.com/explorer-cdn/ronin-website"
        },
        7190: function(e, a, n) {
            "use strict";
            n.d(a, {
                M: function() {
                    return i
                },
                _: function() {
                    return r
                }
            });
            var t = n(6858);
            let r = async (e, a) => {
                    let n = await fetch(e, a);
                    return n.json()
                },
                i = e => a => (0, t.WY)(e, a)
        },
        7952: function(e, a, n) {
            "use strict";
            n.d(a, {
                R: function() {
                    return u
                }
            });
            var t = n(5893),
                r = n(3115),
                i = n(4184),
                s = n.n(i),
                o = n(3001);
            n(7294);
            var d = n(4611),
                l = n.n(d);
            let c = () => (0, t.jsx)("div", {
                    className: l().Placeholder
                }),
                u = e => {
                    let {
                        element: a,
                        title: n,
                        content: i,
                        children: d
                    } = e;
                    return (0, t.jsx)(o.Z, { ...e,
                        children: (0, t.jsx)("div", {
                            className: l().CardSolidBackground,
                            children: (0, t.jsxs)("div", {
                                className: l().CardGradientBackground,
                                children: [d, (0, t.jsxs)("div", {
                                    className: s()(l().Content),
                                    children: [a || (0, t.jsx)(c, {}), (0, t.jsxs)("div", {
                                        className: l().TextWrapper,
                                        children: [(0, t.jsx)(r.J, {
                                            className: l().Title,
                                            level: "display-lg",
                                            children: n
                                        }), (0, t.jsx)(r.J, {
                                            className: l().SubText,
                                            level: "body-md",
                                            children: i
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                }
        },
        6054: function(e, a, n) {
            "use strict";
            n.r(a), n.d(a, {
                default: function() {
                    return z
                }
            });
            var t = n(5893),
                r = n(8892);
            n(7294);
            var i = n(8490),
                s = n(4817),
                o = n(1130),
                d = n(3162),
                l = n(4374),
                c = n(5445),
                u = n(9758),
                _ = n(3115),
                h = n(6878),
                m = n(7497),
                x = n.n(m),
                g = {
                    src: "/_next/static/media/Gradient.f7acd888.png",
                    height: 446,
                    width: 2432,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKUlEQVR4nGN0jbjy/+Onnwyfvv9l+A3EXH/+MAixMjAIsDIyMDAwMgAAL8ANUxjTWh4AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 1
                };
            let p = () => (0, t.jsx)("div", {
                className: x().Wrapper,
                children: (0, t.jsx)("div", {
                    style: {
                        backgroundImage: "url(".concat(g.src, ")")
                    },
                    className: x().Banner,
                    children: (0, t.jsxs)("div", {
                        className: x().LeftContent,
                        children: [(0, t.jsx)(_.J, {
                            level: "display-sm",
                            children: "Join us today"
                        }), (0, t.jsxs)("div", {
                            className: x().SloganRow,
                            children: [(0, t.jsxs)("div", {
                                className: x().Slogan,
                                children: [(0, t.jsx)("div", {
                                    children: "Validate."
                                }), (0, t.jsx)("div", {
                                    children: "Earn RON."
                                }), (0, t.jsx)("div", {
                                    children: "Make an Impact."
                                })]
                            }), (0, t.jsx)("a", {
                                href: "https://validator.roninchain.com/become-validator",
                                target: "__blank",
                                className: x().ButtonWrapper,
                                children: (0, t.jsx)(h.z, {
                                    label: "Become a Validator",
                                    rightIcon: u.h,
                                    variant: "outline",
                                    size: "lg",
                                    intent: "neutral"
                                })
                            })]
                        })]
                    })
                })
            });
            var v = n(9352),
                j = n.n(v);
            let f = e => {
                let {
                    children: a
                } = e;
                return (0, t.jsxs)("div", {
                    className: j().GradientWrapper,
                    children: [(0, t.jsx)("div", {
                        className: j().Shape1
                    }), (0, t.jsx)("div", {
                        className: j().Shape2
                    }), (0, t.jsx)("div", {
                        className: j().Shape3
                    }), (0, t.jsx)("div", {
                        className: j().Content,
                        children: a
                    })]
                })
            };
            var C = n(3001),
                N = n(7190),
                B = n(2077),
                k = n.n(B),
                S = n(8100);
            let w = e => BigInt(e) / BigInt(1e18),
                b = (e, a) => void 0 !== e ? e : a,
                A = function(e) {
                    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return b(e ? k()(e).format(a ? "0.0a" : void 0) : void 0, "--")
                },
                y = () => {
                    let {
                        data: e
                    } = (0, S.ZP)("{\n        NumberValidator\n        GeneralInfo() {\n          delegators\n          totalReward\n          totalStaked\n        }\n    }", (0, N.M)("https://indexer.roninchain.com/query"));
                    return void 0 === e ? {} : {
                        validators: e.NumberValidator,
                        delegators: parseInt(e.GeneralInfo.delegators, 10),
                        paticipants: e.NumberValidator + parseInt(e.GeneralInfo.delegators),
                        totalRewards: w(e.GeneralInfo.totalReward),
                        totalStaked: w(e.GeneralInfo.totalStaked)
                    }
                };
            var R = n(8177),
                H = n.n(R);
            let V = e => (0, t.jsx)(C.Z, {
                    className: H().StatCard,
                    children: (0, t.jsx)("div", {
                        className: H().CardSolidBackground,
                        children: (0, t.jsx)("div", {
                            className: H().CardGradientBackground,
                            children: (0, t.jsx)("div", {
                                className: H().Text,
                                children: e.children
                            })
                        })
                    })
                }),
                W = () => {
                    let {
                        paticipants: e,
                        totalStaked: a
                    } = y();
                    return (0, t.jsx)("div", {
                        className: H().Container,
                        children: (0, t.jsxs)("div", {
                            className: H().CardRow,
                            children: [(0, t.jsxs)(V, {
                                children: [(0, t.jsx)("div", {
                                    className: H().Value,
                                    children: A(e, !1)
                                }), (0, t.jsx)(_.J, {
                                    level: "body-md",
                                    dim: !0,
                                    children: "Validators & Delegators"
                                })]
                            }), (0, t.jsxs)(V, {
                                children: [(0, t.jsxs)("div", {
                                    className: H().Value,
                                    children: [A(a), (0, t.jsx)("span", {
                                        children: "RON"
                                    })]
                                }), (0, t.jsx)(_.J, {
                                    level: "body-md",
                                    dim: !0,
                                    children: "Total Staked"
                                })]
                            }), (0, t.jsxs)(V, {
                                children: [(0, t.jsxs)("div", {
                                    className: H().Value,
                                    children: ["~400", (0, t.jsx)("span", {
                                        children: "RON"
                                    })]
                                }), (0, t.jsx)(_.J, {
                                    level: "body-md",
                                    dim: !0,
                                    children: "24H Earning Per Validator"
                                })]
                            })]
                        })
                    })
                };
            var P = n(4844),
                I = n.n(P),
                T = n(5424),
                L = n(7952),
                G = n(4687),
                O = n.n(G);
            let q = [{
                    element: (0, t.jsx)("img", {
                        src: "".concat(c.L, "/cloud.png"),
                        alt: "cloud",
                        height: 80,
                        width: 80
                    }),
                    title: "Secure the network",
                    content: "Ensure a safe environment for millions of users."
                }, {
                    element: (0, t.jsx)("img", {
                        src: "".concat(c.L, "/seed.png"),
                        alt: "seed",
                        height: 80,
                        width: 80
                    }),
                    title: "Earn RON rewards",
                    content: "180M RON is allocated as rewards for those participating in securing the network."
                }, {
                    element: (0, t.jsx)("img", {
                        src: "".concat(c.L, "/flag.png"),
                        alt: "flag",
                        height: 80,
                        width: 80
                    }),
                    title: "Lead the change",
                    content: "Join our validator community and influence the direction of the network."
                }],
                E = () => (0, t.jsxs)("div", {
                    className: O().Container,
                    children: [(0, t.jsx)(T.O, {
                        subtitle: "Why validate on Ronin?",
                        className: O().Heading
                    }), (0, t.jsx)("div", {
                        className: O().CardRow,
                        children: q.map(e => (0, t.jsx)("div", {
                            className: O().CardWrapper,
                            children: (0, t.jsx)(L.R, {
                                className: O().Card,
                                ...e
                            })
                        }, e.title))
                    })]
                }),
                F = [{
                    question: "What should I do after registering as a Validator Candidate?",
                    answer: (0, t.jsxs)("div", {
                        children: ["After", " ", (0, t.jsx)(i.r, {
                            target: "__blank",
                            underline: "always",
                            monochrome: !0,
                            href: "https://docs.roninchain.com/docs/validators/onboarding/become-validator",
                            children: "becoming"
                        }), " ", "a Validator Candidate, there’s a chance that you get selected as a Standard Validator the next day. To avoid slashing, you need to make sure that your nodes are online and up to date, and the balance in your bridge operator node must be a minimum of 100 RON."]
                    })
                }, {
                    question: "How to increase the chance of getting selected as a Standard Validator?",
                    answer: "The higher your total stake, the stronger your chance of becoming a Standard Validator because Ronin uses a Delegated Proof of Stake (DPoS) consensus mechanism. You can attract more delegators by promoting your validator and maintaining good performance."
                }, {
                    question: "What if my stake amount falls below the minimum requirement?",
                    answer: "You have seven days to deposit more RON to meet the minimum requirement (250,000 RON), otherwise you will be renounced automatically."
                }, {
                    question: "What are the most important performance metrics for a validator?",
                    answer: "Your uptime, total staking amount, and APR (annual percentage rate)."
                }, {
                    question: "What are the rewards for validators?",
                    answer: "Validators receive fixed block rewards and transaction fees for producing blocks on Ronin. During the first year, validators also earn bridge rewards."
                }],
                M = () => (0, t.jsxs)("div", {
                    className: "wrapper",
                    children: [(0, t.jsx)(d.N, {}), (0, t.jsx)(l.v, {}), (0, t.jsx)(f, {}), (0, t.jsx)(o.V, {
                        firstText: "Secure Ronin.",
                        secondText: "Earn Rewards.",
                        description: "Run a Validator node to secure the network and earn rewards.",
                        buttonProps: {
                            text: "Become a Validator",
                            width: 218,
                            href: "https://validator.roninchain.com/become-validator",
                            shouldRemoveRelAttr: !0
                        },
                        image: (0, t.jsx)("img", {
                            src: c.L + "/validator-hero.png",
                            className: I().Image,
                            alt: "validator-hero",
                            width: 488,
                            height: 488
                        })
                    }), (0, t.jsx)(W, {}), (0, t.jsx)(E, {}), (0, t.jsx)(p, {}), (0, t.jsx)(s.B, {
                        faqs: F,
                        href: "https://docs.roninchain.com/docs/validators/faq",
                        shouldRemoveRelAttr: !0
                    })]
                }),
                Q = () => (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(r.g, {
                        title: "Become a Validator | Ronin",
                        content: "Help decentralize Ronin by validating data"
                    }), (0, t.jsx)(M, {})]
                });
            var z = Q
        },
        9901: function(e) {
            e.exports = {
                FAQRow: "Accordion_FAQRow__ePBu8",
                QuestionContainer: "Accordion_QuestionContainer__iFyvh",
                Question: "Accordion_Question__vWmPP",
                Answer: "Accordion_Answer__lOfsC"
            }
        },
        3025: function(e) {
            e.exports = {
                CardBackground: "Card_CardBackground___arOU",
                CardBackgroundWithHover: "Card_CardBackgroundWithHover__i88nj",
                CardSolidBackground: "Card_CardSolidBackground__aaILV",
                CardGradientBackground: "Card_CardGradientBackground__UO57e"
            }
        },
        8471: function(e) {
            e.exports = {
                Wrapper: "Faq_Wrapper__ypVCQ",
                "grounded-radiants": "Faq_grounded-radiants__nlipm",
                Shape2: "Faq_Shape2__7kmWs",
                Shape3: "Faq_Shape3__1QPtH",
                Content: "Faq_Content__9xPKj",
                Columns: "Faq_Columns__rzoxZ"
            }
        },
        133: function(e) {
            e.exports = {
                ReadMoreLink: "FaqList_ReadMoreLink__PqHNM",
                Text: "FaqList_Text__AIf3o"
            }
        },
        4775: function(e) {
            e.exports = {
                Divider: "GradientDivider_Divider__21K8M"
            }
        },
        4225: function(e) {
            e.exports = {
                Heading: "PageHeading_Heading__5AcuQ"
            }
        },
        9815: function(e) {
            e.exports = {
                Heading: "SectionHeading_Heading__FYcM4",
                "centered--desktop": "SectionHeading_centered--desktop__C5k38",
                "centered--always": "SectionHeading_centered--always__1Ltot",
                Title: "SectionHeading_Title__tPa1z",
                Subtitle: "SectionHeading_Subtitle__OWhlx"
            }
        },
        6235: function(e) {
            e.exports = {
                Container: "Hero_Container__vScir",
                LeftContent: "Hero_LeftContent__6VBs5",
                Paragraph: "Hero_Paragraph__WuLx7",
                Image: "Hero_Image__l3F8N"
            }
        },
        7088: function(e) {
            e.exports = {
                Banner: "AnnouncementBanner_Banner__3bk_O",
                LeftContent: "AnnouncementBanner_LeftContent__2dd6B",
                Badge: "AnnouncementBanner_Badge__u8003"
            }
        },
        4611: function(e) {
            e.exports = {
                CardSolidBackground: "HomeCard_CardSolidBackground__MrTRj",
                CardGradientBackground: "HomeCard_CardGradientBackground__CdkBn",
                Content: "HomeCard_Content__o1IwG",
                TextWrapper: "HomeCard_TextWrapper__9BOQy",
                Title: "HomeCard_Title__5fdPe",
                SubText: "HomeCard_SubText__HGazv",
                Link: "HomeCard_Link__jBuzH",
                Placeholder: "HomeCard_Placeholder__RnrIb"
            }
        },
        7497: function(e) {
            e.exports = {
                Wrapper: "Banner_Wrapper__Pkzpl",
                Banner: "Banner_Banner__Pqo3Z",
                LeftContent: "Banner_LeftContent__EXdVf",
                SloganRow: "Banner_SloganRow___fpFA",
                Slogan: "Banner_Slogan__8ogtr",
                ButtonWrapper: "Banner_ButtonWrapper__S_l7F"
            }
        },
        4844: function(e) {
            e.exports = {
                Image: "Validator_Image__lRbkY"
            }
        },
        9352: function(e) {
            e.exports = {
                GradientWrapper: "GradientBackground_GradientWrapper__tna3f",
                Content: "GradientBackground_Content__wKpUw",
                Shape3: "GradientBackground_Shape3__5MBJK",
                Shape2: "GradientBackground_Shape2__9_3O5",
                Shape1: "GradientBackground_Shape1__oBQBp"
            }
        },
        8177: function(e) {
            e.exports = {
                Container: "Statistics_Container__phOjv",
                CardRow: "Statistics_CardRow__TQhI0",
                StatCard: "Statistics_StatCard__Ye2jB",
                CardSolidBackground: "Statistics_CardSolidBackground__tqHab",
                CardGradientBackground: "Statistics_CardGradientBackground__sBBYB",
                Text: "Statistics_Text__f24_6",
                Value: "Statistics_Value__gNNPy"
            }
        },
        4687: function(e) {
            e.exports = {
                Container: "ValidatorPoints_Container__H_E7N",
                Heading: "ValidatorPoints_Heading__v_xzm",
                CardRow: "ValidatorPoints_CardRow__9_WvP",
                CardWrapper: "ValidatorPoints_CardWrapper__JOB5h"
            }
        }
    },
    function(e) {
        e.O(0, [73, 634, 78, 217, 774, 888, 179], function() {
            return e(e.s = 4745)
        }), _N_E = e.O()
    }
]);