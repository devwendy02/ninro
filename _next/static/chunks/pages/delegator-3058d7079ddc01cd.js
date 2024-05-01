(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34], {
        2054: function(e, a, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/delegator", function() {
                return n(4870)
            }])
        },
        8892: function(e, a, n) {
            "use strict";
            n.d(a, {
                g: function() {
                    return i
                }
            });
            var t = n(5893),
                r = n(9008),
                s = n.n(r);
            let i = e => {
                let {
                    title: a,
                    content: n,
                    featuredImg: r,
                    siteName: i
                } = e;
                return (0, t.jsxs)(s(), {
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
                    }, "ogTitle"), i && (0, t.jsx)("meta", {
                        name: "og:site_name",
                        content: i
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
                s = n.n(r),
                i = n(3025),
                o = n.n(i);
            let d = e => {
                    let {
                        children: a,
                        className: n,
                        withHover: r = !1
                    } = e;
                    return (0, t.jsx)("div", {
                        className: s()(r ? o().CardBackgroundWithHover : o().CardBackground, n),
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
                    return A
                }
            });
            var t = n(5893),
                r = n(5424),
                s = n(7435),
                i = n(2981),
                o = n(7294),
                d = n(8471),
                l = n.n(d),
                c = n(9758),
                u = n(8490),
                h = n(8546),
                _ = n(5474),
                m = n(3115),
                x = n(4775),
                g = n.n(x);
            let v = () => (0, t.jsx)("div", {
                className: g().Divider
            });
            var p = n(924),
                j = n(1526),
                f = n(9901),
                C = n.n(f);
            let N = e => {
                let {
                    i: a,
                    expanded: n,
                    setExpanded: r,
                    question: s,
                    answer: i
                } = e, o = a === n;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(v, {}), (0, t.jsx)(p.E.header, {
                        initial: !1,
                        onClick: () => r(!o && a),
                        className: C().FAQRow,
                        children: (0, t.jsxs)("div", {
                            className: C().QuestionContainer,
                            children: [(0, t.jsx)(m.J, {
                                level: "display-sm",
                                className: C().Question,
                                children: s
                            }), o ? (0, t.jsx)(h.V, {
                                size: 20
                            }) : (0, t.jsx)(_.o, {
                                size: 20
                            })]
                        })
                    }), (0, t.jsx)(j.M, {
                        initial: !1,
                        children: o && (0, t.jsx)(p.E.section, {
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
                            children: (0, t.jsx)(p.E.div, {
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
                                    children: i
                                })
                            })
                        }, "content")
                    })]
                })
            };
            var k = n(133),
                w = n.n(k);
            let y = e => {
                    let {
                        faqs: a,
                        href: n,
                        shouldRemoveRelAttr: r = !1
                    } = e, [s, i] = (0, o.useState)(!1);
                    return (0, t.jsxs)("div", {
                        children: [a.map((e, a) => (0, t.jsx)(N, {
                            i: a,
                            expanded: s,
                            setExpanded: i,
                            ...e
                        }, "key" + a)), (0, t.jsx)(v, {}), (0, t.jsx)(u.r, {
                            monochrome: !0,
                            level: "body-md-strong",
                            className: w().ReadMoreLink,
                            href: n,
                            target: "__blank",
                            rel: r ? void 0 : "noreferrer",
                            children: (0, t.jsxs)("div", {
                                className: w().Text,
                                children: ["Read More ", (0, t.jsx)(c.h, {
                                    size: 20
                                })]
                            })
                        })]
                    })
                },
                A = e => {
                    let {
                        faqs: a,
                        href: n
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: l().Wrapper,
                        children: [(0, t.jsxs)(s.m, {
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
                                    }), (0, t.jsx)(y, {
                                        faqs: a,
                                        href: n
                                    })]
                                })
                            })]
                        }), (0, t.jsx)(i.F, {})]
                    })
                }
        },
        6331: function(e, a, n) {
            "use strict";
            n.d(a, {
                C: function() {
                    return i
                }
            });
            var t = n(5893);
            n(7294);
            var r = n(4225),
                s = n.n(r);
            let i = e => {
                let {
                    children: a
                } = e;
                return (0, t.jsx)("div", {
                    className: s().Heading,
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
                s = n(4184),
                i = n.n(s);
            n(7294);
            var o = n(9815),
                d = n.n(o);
            let l = e => {
                let {
                    title: a,
                    subtitle: n,
                    centered: s = !1,
                    alwaysCentered: o = !1,
                    className: l
                } = e;
                return (0, t.jsxs)("div", {
                    className: i()(d().Heading, d()[s ? "centered--desktop" : o ? "centered--always" : ""], l),
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
                s = n(3115),
                i = n(6878),
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
                    width: h,
                    text: _,
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
                        }), (0, t.jsx)(s.J, {
                            className: l().Paragraph,
                            level: "display-xs",
                            children: d
                        }), (0, t.jsx)("a", {
                            href: m,
                            target: "__blank",
                            rel: x ? void 0 : "noreferrer",
                            children: (0, t.jsx)(i.z, {
                                rightIcon: r.h,
                                label: _,
                                className: l().Button,
                                size: "lg",
                                style: {
                                    width: "".concat(h, "px")
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
                s = n(3650);
            n(7294);
            var i = n(7088),
                o = n.n(i);
            let d = () => (0, t.jsxs)("div", {
                className: o().Banner,
                children: [(0, t.jsx)(s.C, {
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
        7952: function(e, a, n) {
            "use strict";
            n.d(a, {
                R: function() {
                    return u
                }
            });
            var t = n(5893),
                r = n(3115),
                s = n(4184),
                i = n.n(s),
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
                        content: s,
                        children: d
                    } = e;
                    return (0, t.jsx)(o.Z, { ...e,
                        children: (0, t.jsx)("div", {
                            className: l().CardSolidBackground,
                            children: (0, t.jsxs)("div", {
                                className: l().CardGradientBackground,
                                children: [d, (0, t.jsxs)("div", {
                                    className: i()(l().Content),
                                    children: [a || (0, t.jsx)(c, {}), (0, t.jsxs)("div", {
                                        className: l().TextWrapper,
                                        children: [(0, t.jsx)(r.J, {
                                            className: l().Title,
                                            level: "display-lg",
                                            children: n
                                        }), (0, t.jsx)(r.J, {
                                            className: l().SubText,
                                            level: "body-md",
                                            children: s
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                }
        },
        4870: function(e, a, n) {
            "use strict";
            n.r(a), n.d(a, {
                default: function() {
                    return A
                }
            });
            var t = n(5893),
                r = n(8892),
                s = n(8490),
                i = n(4817),
                o = n(1130),
                d = n(3162),
                l = n(4374);
            n(7294);
            var c = {
                    src: "/_next/static/media/banner.1c7fb91f.png",
                    height: 976,
                    width: 976,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7ElEQVR42mNAgJ+Mr///Z996478AAzKYeOQdI4g+9f8/j2PVu5ysnreJVe0TtEBiNTPPMcEVLjv1XSp/1eeyirnny/z84vxBYp4MDGDNjPvPnJZYtP2YdmFNs29AVF6IVUqjcdGD/7xBHTsFGCbuuSGz/dV/yw1P/jv1bjivBNKhFljtyJB708qw7K4cg0n2ZE35qqNBHk0HszumLbf///8/U1d3t6xPWJ1z+4TTXAxfPr4R6Z0wN2jCpDlR375+Uvn377/s////+UEmAWlmEMEHxFzfv77mefL0mQiI/fbtW7Z9B8+yPnr6iREAKERxBMkHK2YAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                u = n(751),
                h = n.n(u),
                _ = n(5424),
                m = n(5445),
                x = n(7952),
                g = n(4281),
                v = n.n(g);
            let p = [{
                    element: (0, t.jsx)("img", {
                        src: "".concat(m.L, "/seed.png"),
                        alt: "seed",
                        height: 80,
                        width: 80
                    }),
                    title: "Earn staking rewards",
                    content: "Safe and simple. Delegate your stake to validators and earn more RON."
                }, {
                    element: (0, t.jsx)("img", {
                        src: "".concat(m.L, "/cloud.png"),
                        alt: "cloud",
                        height: 80,
                        width: 80
                    }),
                    title: "Help secure the network",
                    content: "Staking RON to validators contributes to the network's security. The more RON staked, the stronger the network."
                }],
                j = () => (0, t.jsxs)("div", {
                    className: v().Container,
                    children: [(0, t.jsx)(_.O, {
                        subtitle: "Why stake on Ronin?",
                        className: v().Heading
                    }), (0, t.jsx)("div", {
                        className: v().CardRow,
                        children: p.map(e => (0, t.jsx)("div", {
                            className: v().CardWrapper,
                            children: (0, t.jsx)(x.R, {
                                className: v().Card,
                                ...e
                            })
                        }, e.title))
                    })]
                });
            var f = n(5599),
                C = n.n(f);
            let N = e => {
                    let {
                        children: a
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: C().GradientWrapper,
                        children: [(0, t.jsx)("div", {
                            className: C().Shape1
                        }), (0, t.jsx)("div", {
                            className: C().Shape2
                        }), (0, t.jsx)("div", {
                            className: C().Shape3
                        }), (0, t.jsx)("div", {
                            className: C().Content,
                            children: a
                        })]
                    })
                },
                k = [{
                    question: "What happens if my delegated validator is jailed or punished?",
                    answer: (0, t.jsxs)("div", {
                        children: ["Your validator gets", " ", (0, t.jsx)(s.r, {
                            underline: "always",
                            monochrome: !0,
                            target: "__blank",
                            href: "https://docs.roninchain.com/docs/validators/slashing/overview",
                            children: "slashed"
                        }), ", but your stake is not impacted in any way."]
                    })
                }, {
                    question: "Do RON rewards automatically re-stake to my delegated validator?",
                    answer: (0, t.jsxs)("div", {
                        children: ["No, you would need to", " ", (0, t.jsx)(s.r, {
                            target: "__blank",
                            underline: "always",
                            monochrome: !0,
                            href: "https://docs.roninchain.com/docs/delegators/rewards/claim",
                            children: "claim"
                        }), " ", "RON rewards with your Ronin Wallet."]
                    })
                }, {
                    question: "Can I unstake whenever I want without penalties and risk of losing my stake?",
                    answer: (0, t.jsxs)("div", {
                        children: ["Yes, you can", " ", (0, t.jsx)(s.r, {
                            target: "__blank",
                            underline: "always",
                            monochrome: !0,
                            href: "https://docs.roninchain.com/docs/delegators/stake/withdraw",
                            children: "unstake"
                        }), " ", "from a validator at any time without penalties as long as three days have passed since you last staked in to this validator."]
                    })
                }, {
                    question: "If I delegate to a validator today, would I receive rewards by the end of day?",
                    answer: "Each day's validator is finalized at 00:00 UTC. If you delegate today, your stake will take effect at 00:00 UTC the next day. This is the time you start earning rewards"
                }, {
                    question: "If I move RON from one validator and delegate to another, when will I start earning rewards again?",
                    answer: "The stake delegated for the new validator will start emitting rewards from 00:00 UTC the next day, while the stake for the current validator is removed, so there would be no rewards today."
                }],
                w = () => (0, t.jsxs)("div", {
                    className: "wrapper",
                    children: [(0, t.jsx)(d.N, {}), (0, t.jsx)(l.v, {}), (0, t.jsx)(N, {}), (0, t.jsx)(o.V, {
                        firstText: "Stake RON.",
                        secondText: "Earn Rewards.",
                        description: "Delegate your stake to validators to earn rewards.",
                        buttonProps: {
                            text: "Stake RON",
                            width: 151,
                            href: "https://app.roninchain.com/staking?tab=validator",
                            shouldRemoveRelAttr: !0
                        },
                        image: (0, t.jsx)("img", {
                            src: c.src,
                            className: h().Image,
                            alt: "delegator-hero",
                            width: 488,
                            height: 488
                        })
                    }), (0, t.jsx)(j, {}), (0, t.jsx)(i.B, {
                        faqs: k,
                        href: "https://docs.roninchain.com/docs/delegators/faq",
                        shouldRemoveRelAttr: !0
                    })]
                }),
                y = () => (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(r.g, {
                        title: "Become a Delegator | Ronin",
                        content: "Help decentralize Ronin by validating data"
                    }), (0, t.jsx)(w, {})]
                });
            var A = y
        },
        8546: function(e, a, n) {
            "use strict";
            n.d(a, {
                V: function() {
                    return s
                }
            });
            var t = n(7294),
                r = n(7183);
            let s = (0, r.L)(t.createElement(t.Fragment, null, t.createElement("path", {
                fill: "currentColor",
                d: "M17 9H3c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1Z"
            })), "MinusDeleteIcon")
        },
        5474: function(e, a, n) {
            "use strict";
            n.d(a, {
                o: function() {
                    return s
                }
            });
            var t = n(7294),
                r = n(7183);
            let s = (0, r.L)(t.createElement(t.Fragment, null, t.createElement("path", {
                fill: "currentColor",
                d: "M17 9h-6V3c0-.6-.4-1-1-1s-1 .4-1 1v6H3c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1v-6h6c.6 0 1-.4 1-1s-.4-1-1-1Z"
            })), "PlusAddIcon")
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
        751: function(e) {
            e.exports = {
                Image: "Delegator_Image__cwmPI"
            }
        },
        4281: function(e) {
            e.exports = {
                Container: "DelegatorPoints_Container__xQMx1",
                Heading: "DelegatorPoints_Heading__imvZk",
                CardRow: "DelegatorPoints_CardRow__0O4D5",
                CardWrapper: "DelegatorPoints_CardWrapper__VUBJJ",
                Card: "DelegatorPoints_Card__mPOEU"
            }
        },
        5599: function(e) {
            e.exports = {
                GradientWrapper: "GradientBackground_GradientWrapper__N1JCf",
                Content: "GradientBackground_Content__sXbJN",
                Shape3: "GradientBackground_Shape3__YzwAY",
                Shape2: "GradientBackground_Shape2__zU1b6",
                Shape1: "GradientBackground_Shape1__LgDJA"
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
        }
    },
    function(e) {
        e.O(0, [73, 217, 774, 888, 179], function() {
            return e(e.s = 2054)
        }), _N_E = e.O()
    }
]);