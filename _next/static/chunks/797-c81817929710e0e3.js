(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [797], {
        8892: function(e, a, l) {
            "use strict";
            l.d(a, {
                g: function() {
                    return t
                }
            });
            var s = l(5893),
                r = l(9008),
                i = l.n(r);
            let t = e => {
                let {
                    title: a,
                    content: l,
                    featuredImg: r,
                    siteName: t
                } = e;
                return (0, s.jsxs)(i(), {
                    children: [(0, s.jsx)("title", {
                        children: a
                    }), l && (0, s.jsx)("meta", {
                        name: "description",
                        content: l
                    }), r && (0, s.jsx)("meta", {
                        name: "og:image",
                        content: null != r ? r : ""
                    }, "ogImage"), a && (0, s.jsx)("meta", {
                        property: "og:title",
                        content: a
                    }, "ogTitle"), t && (0, s.jsx)("meta", {
                        name: "og:site_name",
                        content: t
                    }, "ogSiteName")]
                })
            }
        },
        3811: function(e, a, l) {
            "use strict";
            l.d(a, {
                X: function() {
                    return d
                }
            });
            var s = l(5893),
                r = l(3115),
                i = l(4184),
                t = l.n(i);
            l(7294);
            var n = l(2510),
                o = l.n(n);
            let d = e => {
                let {
                    className: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: t()(o().Wrapper, a),
                    children: [(0, s.jsx)("img", {
                        src: "/static/images/blog/no-result.png",
                        alt: "no-result",
                        draggable: !1
                    }), (0, s.jsx)(r.J, {
                        level: "body-md",
                        dim: !0,
                        children: "No results found."
                    })]
                })
            }
        },
        3257: function(e, a, l) {
            "use strict";
            l.d(a, {
                K: function() {
                    return r
                }
            });
            var s = l(7294);
            let r = () => {
                let [e, a] = (0, s.useState)(), l = () => {
                    a(window.innerWidth)
                };
                return (0, s.useEffect)(() => (l(), window.addEventListener("resize", l), () => {
                    window.removeEventListener("resize", l)
                }), []), e && e <= 768
            }
        },
        6226: function(e, a, l) {
            "use strict";
            l.d(a, {
                P: function() {
                    return r
                },
                W: function() {
                    return i
                }
            });
            var s = l(5893);
            let r = e => e > 0 && (0, s.jsxs)(s.Fragment, {
                    children: [" • ", e, " min read"]
                }),
                i = (e, a) => e.length < a ? e : "".concat(e.slice(0, a), "...")
        },
        78: function(e, a, l) {
            "use strict";
            l.d(a, {
                y: function() {
                    return m
                }
            });
            var s = l(5893),
                r = l(3650),
                i = l(3115),
                t = l(9486),
                n = l(3257),
                o = l(959),
                d = l(6226),
                c = l(1664),
                _ = l.n(c);
            l(7294);
            var u = l(1322),
                g = l.n(u);
            let m = e => {
                var a;
                let {
                    post: l
                } = e, c = (0, n.K)(), u = () => {
                    (0, o.qP)({
                        category: "blog_navigation",
                        action: "blog_click_related_post",
                        label: "blog_click_related_post"
                    })
                }, {
                    slug: m,
                    id: p,
                    title: v,
                    published_at: x,
                    reading_time: h,
                    excerpt: b,
                    feature_image: j
                } = l, S = [300, 600, 1e3, 2e3].map(e => "".concat(j && j.replace("images", "images/size/w".concat(e)) || "", " ").concat(e, "w")).join(", ");
                return (0, s.jsx)(_(), {
                    href: "/blog/posts/".concat(m),
                    onClick: u,
                    children: (0, s.jsx)("div", {
                        className: g().Border,
                        children: (0, s.jsx)("div", {
                            className: g().SolidBg,
                            children: (0, s.jsx)("div", {
                                className: g().GradientBg,
                                children: (0, s.jsxs)("div", {
                                    className: g().Card,
                                    children: [(0, s.jsx)("img", {
                                        src: l.feature_image || "",
                                        alt: "post-".concat(p),
                                        srcSet: S,
                                        sizes: "(max-width: 400px) 300px, (max-width: 1000px) 600px, (max-width: 2000px) 1000px, 2000px",
                                        draggable: !1
                                    }), (0, s.jsxs)("div", {
                                        className: g().Details,
                                        children: [(0, s.jsx)("div", {
                                            className: g().TagRow,
                                            children: null == l ? void 0 : null === (a = l.tags) || void 0 === a ? void 0 : a.map(e => (0, s.jsx)(r.C, {
                                                label: e.name,
                                                size: "sm"
                                            }, e.id))
                                        }), (0, s.jsx)(i.J, {
                                            level: "display-md",
                                            children: v && (0, d.W)(v, c ? 46 : 57)
                                        }), (0, s.jsx)(i.J, {
                                            level: "body-sm",
                                            className: g().Excerpt,
                                            dim: !0,
                                            children: b && (0, d.W)(b, c ? 80 : 87)
                                        }), (0, s.jsxs)(i.J, {
                                            level: "body-sm",
                                            className: g().Date,
                                            dim: !0,
                                            children: [x && (0, t.Z)(new Date(x), "dd MMMM yyyy"), !!h && (0, d.P)(h)]
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        1690: function(e, a, l) {
            "use strict";
            l.d(a, {
                Z: function() {
                    return j
                }
            });
            var s = l(5893),
                r = l(2981),
                i = l(7294),
                t = l(3115),
                n = l(9076),
                o = l(6878),
                d = l(3998),
                c = l(282),
                _ = l(959);
            let u = async e => {
                    try {
                        let a = await fetch("/api/subscribe", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: e
                            })
                        });
                        if (!a.ok) {
                            let l = await a.json();
                            return {
                                success: !1,
                                message: l.message
                            }
                        }
                        let s = await a.json();
                        return {
                            success: !0,
                            data: s
                        }
                    } catch (r) {
                        console.error(r)
                    }
                },
                g = () => {
                    let [e, a] = (0, i.useState)(""), [l, s] = (0, i.useState)(""), [r, t] = (0, i.useState)(void 0), [n, o] = (0, i.useState)(!1), d = () => {
                        (0, _.qP)({
                            category: "blog_engagement",
                            action: "blog_subscribe_success",
                            label: "blog_subscribe_success"
                        })
                    }, c = async l => {
                        l.preventDefault(), o(!0);
                        try {
                            let r = await u(e);
                            (null == r ? void 0 : r.success) ? (s("Subscription successful."), a(""), t(!1), d()) : (s(null == r ? void 0 : r.message), t(!0))
                        } catch (i) {
                            console.error("Error:", i), t(!0)
                        } finally {
                            o(!1)
                        }
                    };
                    return {
                        email: e,
                        setEmail: a,
                        formHelperText: l,
                        formHelperIntent: void 0 === r ? "neutral" : !0 === r ? "critical" : "success",
                        handleSubmit: c,
                        loading: n,
                        hasError: r
                    }
                };
            var m = {
                    src: "/_next/static/media/mobile-plane.0e9d786c.png",
                    height: 354,
                    width: 478,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAlUlEQVR42mNgiClgZsACvKNTIOKq0VFsDomdotYMDDIp1f2GQR37k5yLFyiD5PzLFzAxgICrh7W9Uerya4a5G/7rBpT+90+pkQSJp2Y3MzEohOxmBXHk0p9km/pNqLfWYwgG8aOTC1jh9sWWrmXpY2CAuyUjKZ5lzcp1jHAF5XmujC1LPjD5J/Sx5uaXsa1YsY4JJgcAt1kocaYkVEIAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                p = {
                    src: "/_next/static/media/paper-airplane.061ebcb0.png",
                    height: 436,
                    width: 978,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAYElEQVR42mMAg4AoJgY0YB+mhRAL2nKVUcc9XN7cnsHco2xZjnXOTA+QuF32NKAiNTdGEMfQgEFXO3P7I42w9v8Gti4hYAXeKSwMICDIwAA2Ti7sipOnlZxBeFQuB8x0AMN/FC/eRQdDAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                },
                v = l(60),
                x = l.n(v);
            let h = () => {
                    let {
                        email: e,
                        setEmail: a,
                        formHelperText: l,
                        formHelperIntent: r,
                        handleSubmit: i,
                        loading: _,
                        hasError: u
                    } = g();
                    return (0, s.jsx)("div", {
                        className: x().Wrapper,
                        children: (0, s.jsx)("div", {
                            className: x().Border,
                            children: (0, s.jsx)("div", {
                                className: x().GradientBg,
                                children: (0, s.jsx)("div", {
                                    className: x().SolidBg,
                                    children: (0, s.jsxs)("div", {
                                        className: x().Card,
                                        children: [(0, s.jsx)("div", {
                                            className: x().MobileImage,
                                            style: {
                                                backgroundImage: "url(".concat(m.src, ")")
                                            }
                                        }), (0, s.jsxs)("div", {
                                            className: x().Form,
                                            children: [(0, s.jsx)("div", {
                                                className: x().Title,
                                                children: "Stay updated"
                                            }), (0, s.jsx)(t.J, {
                                                level: "body-md",
                                                dim: !0,
                                                children: "Sign-up now to keep up with Ronin as we make waves in Web3 gaming"
                                            }), (0, s.jsxs)("form", {
                                                onSubmit: i,
                                                children: [(0, s.jsxs)("div", {
                                                    className: x().InputRow,
                                                    children: [(0, s.jsx)(n.n, {
                                                        placeholder: "Enter your email",
                                                        variant: "filled",
                                                        onChange: e => a(e.target.value),
                                                        value: e,
                                                        type: "email",
                                                        intent: u ? "critical" : "neutral"
                                                    }), (0, s.jsx)(o.z, {
                                                        label: _ ? (0, s.jsx)(d.l, {
                                                            size: "sm"
                                                        }) : "Subscribe",
                                                        disabled: _
                                                    })]
                                                }), (0, s.jsx)(c.w, {
                                                    content: l,
                                                    intent: r,
                                                    className: x().HelperText
                                                })]
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: x().Image,
                                            style: {
                                                backgroundImage: "url(".concat(p.src, ")")
                                            }
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                b = e => {
                    let {
                        children: a
                    } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [a, (0, s.jsx)(h, {}), (0, s.jsx)(r.F, {})]
                    })
                };
            var j = b
        },
        998: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                __N_SSP: function() {
                    return em
                },
                default: function() {
                    return ep
                }
            });
            var s = l(5893),
                r = l(8892),
                i = l(8682),
                t = l(3115),
                n = l(9076),
                o = l(4374),
                d = l(959),
                c = l(7414);
            let _ = new c.Z({
                    url: "https://roninchain.ghost.io",
                    key: "981d5b3a6b01da6aca4dce80db",
                    version: "v5.0"
                }),
                u = "+tags:-[test]",
                g = {
                    limit: "all",
                    include: ["tags", "authors", "count.posts"],
                    order: ["published_at DESC"],
                    filter: u.slice(1)
                },
                m = async e => {
                    let {
                        slug: a,
                        query: l,
                        page: s
                    } = e, r = "title:~'".concat(l, "'"), i = { ...g
                    };
                    l && (i.filter = "".concat(r).concat(u)), a && (i.filter = "tags:[".concat(a, "]").concat(u)), a && l && (i.filter = "tags:[".concat(a, "]+").concat(r).concat(u)), s && (i.page = s);
                    let t = await _.posts.browse(i).catch(e => {
                        console.error(e)
                    });
                    return {
                        posts: t
                    }
                };
            var p = l(1296),
                v = l.n(p),
                x = l(1163),
                h = l(7294),
                b = l(1690),
                j = l(9319),
                S = l.n(j),
                N = l(4718),
                f = l(3422),
                A = l(4184),
                B = l.n(A),
                C = l(8117),
                w = l(967),
                y = l(2248),
                k = l(9706),
                T = l.n(k);
            let D = e => {
                let {
                    disabled: a,
                    left: l,
                    onClick: r
                } = e, i = a ? T().Disabled : "";
                return (0, s.jsx)("div", {
                    className: B()(T().CardBackground, T().arrow, i, l ? T()["arrow--left"] : T()["arrow--right"]),
                    onClick: r,
                    children: (0, s.jsx)("div", {
                        className: T().CardSolidBackground,
                        children: (0, s.jsxs)("div", {
                            className: B()(T().CardInnerBackground, i),
                            children: [l && (0, s.jsx)(w.Y, {
                                size: 20,
                                color: "#C9CBCF"
                            }), !l && (0, s.jsx)(y.L, {
                                size: 20,
                                color: "#C9CBCF"
                            })]
                        })
                    })
                })
            };
            var M = l(1838),
                W = l.n(M),
                F = l(3650),
                I = l(9486),
                R = l(3257),
                P = l(6226),
                G = l(1664),
                H = l.n(G),
                E = l(59),
                z = l.n(E);
            let X = () => {
                    (0, d.qP)({
                        category: "blog_engagement",
                        action: "blog_click_slider_slide",
                        label: "blog_click_slider_slide"
                    })
                },
                J = e => {
                    var a;
                    let {
                        post: l
                    } = e, {
                        slug: r,
                        id: i,
                        title: n,
                        published_at: o,
                        reading_time: d,
                        excerpt: c,
                        feature_image: _
                    } = l, u = (0, R.K)(), g = [300, 600, 1e3, 2e3].map(e => "".concat(_ && _.replace("images", "images/size/w".concat(e)), " ").concat(e, "w")).join(", ");
                    return (0, s.jsx)("div", {
                        className: "keen-slider__slide number-slide".concat(i),
                        onClick: X,
                        children: (0, s.jsx)(H(), {
                            href: "/blog/posts/".concat(r),
                            children: (0, s.jsx)("div", {
                                className: z().Border,
                                children: (0, s.jsx)("div", {
                                    className: z().SolidBg,
                                    children: (0, s.jsx)("div", {
                                        className: z().GradientBg,
                                        children: (0, s.jsxs)("div", {
                                            className: z().Card,
                                            children: [(0, s.jsxs)("div", {
                                                className: z().Details,
                                                children: [(0, s.jsx)("div", {
                                                    className: z().TagRow,
                                                    children: null == l ? void 0 : null === (a = l.tags) || void 0 === a ? void 0 : a.map(e => (0, s.jsx)(F.C, {
                                                        label: e.name,
                                                        size: u ? "sm" : "md"
                                                    }, e.id))
                                                }), (0, s.jsx)(t.J, {
                                                    className: z().Title,
                                                    level: "display-md",
                                                    children: n && (0, P.W)(n, u ? 30 : 140)
                                                }), !u && (0, s.jsx)(t.J, {
                                                    level: "body-md",
                                                    dim: !0,
                                                    children: c && (0, P.W)(c, 180)
                                                }), u && (0, s.jsx)(t.J, {
                                                    level: "body-sm",
                                                    dim: !0,
                                                    children: c && (0, P.W)(c, 60)
                                                }), (0, s.jsxs)(t.J, {
                                                    level: "body-sm",
                                                    className: z().Date,
                                                    dim: !0,
                                                    children: [o && (0, I.Z)(new Date(o), "dd MMMM yyyy"), !!d && (0, P.P)(d)]
                                                })]
                                            }), (0, s.jsx)("img", {
                                                src: _ || "",
                                                alt: "post-".concat(i),
                                                srcSet: g,
                                                sizes: "(max-width: 600px) 300px, (max-width: 1000px) 600px, (max-width: 2000px) 1000px, 2000px"
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                L = e => {
                    (0, d.qP)({
                        category: "blog_engagement",
                        action: e,
                        label: e
                    })
                },
                O = e => {
                    let {
                        posts: a
                    } = e, [l, r] = h.useState(0), [i, n] = (0, h.useState)(!1), [o, d] = (0, C.E)({
                        initial: 0,
                        slideChanged(e) {
                            r(e.track.details.rel)
                        },
                        created() {
                            n(!0)
                        }
                    });
                    return a ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: W().Header,
                            children: [(0, s.jsx)("div", {
                                className: W().Title,
                                children: (0, s.jsxs)(t.J, {
                                    level: "display-lg",
                                    children: ["Featured Articles ", (0, s.jsx)(N.B, {
                                        size: 24
                                    })]
                                })
                            }), i && d.current && (0, s.jsxs)("div", {
                                className: W().Controls,
                                children: [(0, s.jsx)(D, {
                                    left: !0,
                                    onClick: e => {
                                        var a;
                                        e.stopPropagation() || null === (a = d.current) || void 0 === a || a.prev(), L("blog_click_slider_prev_arrow")
                                    },
                                    disabled: 0 === l
                                }), (0, s.jsx)(D, {
                                    onClick: e => {
                                        var a;
                                        e.stopPropagation() || null === (a = d.current) || void 0 === a || a.next(), L("blog_click_slider_next_arrow")
                                    },
                                    disabled: l === d.current.track.details.slides.length - 1
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: B()(i ? W().SlideCover : ""),
                            children: (0, s.jsx)(f.g, {
                                height: 360,
                                borderRadius: 16
                            })
                        }), (0, s.jsx)("div", {
                            className: B()("navigation-wrapper", W().Border, i ? "" : W().SlideHidden),
                            children: (0, s.jsx)("div", {
                                ref: o,
                                className: B()("keen-slider", W().FeaturedSlider),
                                children: a.map(e => (0, s.jsx)(J, {
                                    post: e
                                }, e.id))
                            })
                        }), i && d.current && (0, s.jsx)("div", {
                            className: W().Dots,
                            children: [...Array(d.current.track.details.slides.length).keys()].map(e => (0, s.jsx)("button", {
                                onClick: () => {
                                    var a;
                                    null === (a = d.current) || void 0 === a || a.moveToIdx(e), L("blog_click_slider_dot")
                                },
                                className: B()(W().Dot, l === e ? W().active : ""),
                                "aria-label": "slide ".concat(e + 1)
                            }, e))
                        })]
                    }) : null
                };
            var Y = l(6878),
                K = l(5475),
                q = l(3811),
                Z = l(78),
                U = l(9513),
                V = l.n(U);
            let Q = [10, 20, 50],
                $ = e => {
                    let {
                        postsResponse: a,
                        page: l,
                        setPage: r
                    } = e, i = (0, x.useRouter)(), t = i.query.slug, n = (0, R.K)(), {
                        posts: o
                    } = a, [d, c] = (0, h.useState)(10), [_, u] = (0, h.useState)([]), [g, m] = (0, h.useState)(6), p = n ? g : d, v = () => {
                        if (!o) return;
                        let e = (l - 1) * d,
                            a = o.slice(e, e + p);
                        u(a)
                    };
                    (0, h.useEffect)(() => {
                        v()
                    }, [l, d, o, g, n]), (0, h.useEffect)(() => {
                        r(1)
                    }, [t]);
                    let b = () => {
                        m(e => e + 6)
                    };
                    return o && o.length ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: V().Section,
                            children: null == _ ? void 0 : _.map(e => (0, s.jsx)(Z.y, {
                                post: e
                            }, e.id))
                        }), n && p < o.length && (0, s.jsx)(Y.z, {
                            label: "Load More",
                            fullWidth: !0,
                            variant: "outline",
                            intent: "neutral",
                            onClick: b
                        }), !n && (0, s.jsx)(K.t, {
                            total: null == o ? void 0 : o.length,
                            pageSize: d,
                            current: l,
                            pageSizeArr: Q,
                            onChange: (e, a) => {
                                r(e), c(a)
                            },
                            hideWhenOnePage: !1
                        })]
                    }) : (0, s.jsx)(q.X, {})
                };
            var ee = l(1702),
                ea = l(8674),
                el = l.n(ea),
                es = l(9727),
                er = l.n(es);
            let ei = e => {
                    let {
                        tag: a,
                        active: l
                    } = e, r = () => {
                        var e, l;
                        (0, d.qP)({
                            category: "blog_navigation",
                            action: "blog_click_category_".concat(null == a ? void 0 : null === (e = a.name) || void 0 === e ? void 0 : e.toLowerCase()),
                            label: "blog_click_category_".concat(null == a ? void 0 : null === (l = a.name) || void 0 === l ? void 0 : l.toLowerCase())
                        })
                    };
                    return (0, s.jsx)(H(), {
                        href: "/blog/".concat(null == a ? void 0 : a.slug),
                        scroll: !1,
                        onClick: r,
                        children: (0, s.jsx)("div", {
                            className: B()(er().Tag, l && er().Active),
                            children: (0, s.jsx)(t.J, {
                                level: "display-xs",
                                dim: !l,
                                children: null == a ? void 0 : a.name
                            })
                        })
                    })
                },
                et = ["All articles", "Games", "Developers", "Built on Ronin", "RON Token", "Other News"],
                en = e => {
                    let {
                        tags: a
                    } = e, {
                        query: l
                    } = (0, x.useRouter)();
                    if (!a) return null;
                    let r = [{
                            name: "All articles",
                            id: "all",
                            slug: ""
                        }, ...a],
                        i = l.slug ? l.slug : "";
                    return (0, s.jsxs)("div", {
                        className: el().Sidebar,
                        children: [(0, s.jsxs)("div", {
                            className: el().Title,
                            children: [(0, s.jsx)(ee.x, {
                                size: 24
                            }), (0, s.jsx)(t.J, {
                                level: "label",
                                className: el().TagLabel,
                                children: "Categories"
                            })]
                        }), et.map(e => {
                            let a = r.find(a => e === a.name);
                            return (0, s.jsx)(ei, {
                                tag: a,
                                active: (null == a ? void 0 : a.slug) === i
                            }, null == a ? void 0 : a.id)
                        })]
                    })
                };
            var eo = l(2796),
                ed = l(5737),
                ec = l.n(ed);
            let e_ = e => {
                    let {
                        tags: a
                    } = e, l = (0, R.K)(), r = (0, x.useRouter)(), i = r.query.slug || "", n = {
                        key: "all",
                        value: "",
                        label: "All articles"
                    }, o = [n, ...(a || []).map(e => ({
                        key: e.id,
                        value: e.slug,
                        label: e.name
                    }))], [d, c] = (0, h.useState)(() => {
                        let e = o.find(e => e.value === i);
                        return e || n
                    }), _ = e => {
                        let a = e.option.value;
                        r.push("/blog/".concat(a)), c(e.option)
                    };
                    return ((0, h.useEffect)(() => {
                        let e = o.find(e => e.value === i);
                        c(e || n)
                    }, [i]), l) ? (0, s.jsxs)("div", {
                        className: ec().Wrapper,
                        children: [(0, s.jsx)(t.J, {
                            level: "body-md",
                            dim: !0,
                            className: ec().Title,
                            children: "Categories"
                        }), (0, s.jsx)(eo.L, {
                            className: ec().Dropdown,
                            selectedOption: [d],
                            onChange: _,
                            children: et.map(e => {
                                var a;
                                let l = o.find(a => e === a.label);
                                return (0, s.jsx)(eo.L.Item, {
                                    label: null == l ? void 0 : l.label,
                                    data: {
                                        label: null == l ? void 0 : l.label,
                                        key: null !== (a = null == l ? void 0 : l.key) && void 0 !== a ? a : "",
                                        value: null == l ? void 0 : l.value
                                    }
                                }, null == l ? void 0 : l.id)
                            })
                        })]
                    }) : null
                },
                eu = e => {
                    var a;
                    let {
                        posts: l,
                        featured: r,
                        tags: c
                    } = e, _ = (0, x.useRouter)(), u = _.query.slug, [g, p] = (0, h.useState)(l), [j, N] = (0, h.useState)(1), f = (0, h.useRef)(null), A = async (e, a) => {
                        let l = await m({
                            slug: u,
                            query: e,
                            page: a
                        });
                        p(l)
                    }, B = (0, h.useCallback)(v()(() => {
                        var e;
                        let a = (null == f ? void 0 : null === (e = f.current) || void 0 === e ? void 0 : e.value) || "";
                        N(1), A(a, 1)
                    }, 300), [A, u]), C = () => {
                        (0, d.qP)({
                            category: "blog_engagement",
                            action: "blog_click_search_bar",
                            label: "blog_click_search_bar"
                        })
                    };
                    return (0, h.useEffect)(() => {
                        p(l), f.current && (f.current.value = "")
                    }, [l]), (0, h.useEffect)(() => () => {
                        B.cancel()
                    }, [B]), (0, s.jsx)("div", {
                        className: S().Background,
                        children: (0, s.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, s.jsxs)("div", {
                                className: S().GradientWrapper,
                                children: [(0, s.jsx)("div", {
                                    className: S().MobileShape1
                                }), (0, s.jsx)("div", {
                                    className: S().MobileShape2
                                }), (0, s.jsx)("div", {
                                    className: S().MobileShape3
                                }), (0, s.jsx)("div", {
                                    className: S().MobileShape4
                                }), (0, s.jsx)("div", {
                                    className: S().MobileShape5
                                }), (0, s.jsx)("div", {
                                    className: S().Shape1
                                }), (0, s.jsx)("div", {
                                    className: S().Shape2
                                }), (0, s.jsx)("div", {
                                    className: S().Shape3
                                }), (0, s.jsx)("div", {
                                    className: S().Shape4
                                }), (0, s.jsx)("div", {
                                    className: S().Shape5
                                })]
                            }), (0, s.jsx)(o.v, {}), (0, s.jsx)(b.Z, {
                                children: (0, s.jsxs)("div", {
                                    className: S().Container,
                                    children: [(0, s.jsxs)("div", {
                                        className: S().Header,
                                        children: [(0, s.jsx)("div", {
                                            className: S().Title,
                                            children: "Blog"
                                        }), (0, s.jsx)("div", {
                                            className: S().SubHeading,
                                            children: "Ronin is the blockchain forged for gamers."
                                        })]
                                    }), (0, s.jsx)(O, {
                                        posts: r
                                    }), (0, s.jsxs)("div", {
                                        className: S().Layout,
                                        children: [(0, s.jsx)("div", {
                                            children: (0, s.jsx)(en, {
                                                tags: c
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: S().PostsContainer,
                                            children: [(0, s.jsxs)("div", {
                                                className: S().PostsHeader,
                                                children: [(0, s.jsx)(t.J, {
                                                    className: S().CurrentTag,
                                                    level: "display-lg",
                                                    children: u ? null === (a = null == c ? void 0 : c.find(e => e.slug === _.query.slug)) || void 0 === a ? void 0 : a.name : "All articles"
                                                }), (0, s.jsx)(e_, {
                                                    tags: c
                                                }), (0, s.jsx)("form", {
                                                    className: S().SearchBarWrapper,
                                                    onSubmit: e => e.preventDefault(),
                                                    children: (0, s.jsx)(n.n, {
                                                        className: S().Searchbar,
                                                        prefixIcon: (0, s.jsx)(i.W, {
                                                            size: 20
                                                        }),
                                                        variant: "filled",
                                                        placeholder: "Search for articles...",
                                                        onChange: B,
                                                        onFocus: C,
                                                        ref: f
                                                    })
                                                })]
                                            }), (0, s.jsx)($, {
                                                postsResponse: g,
                                                page: j,
                                                setPage: N
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                eg = e => (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(r.g, {
                        title: "Ronin Blog",
                        content: "Ronin is the blockchain forged for gamers.",
                        siteName: "Ronin"
                    }), (0, s.jsx)(eu, {
                        posts: e.posts,
                        featured: e.featured,
                        tags: e.tags
                    })]
                });
            var em = !0,
                ep = eg
        },
        2510: function(e) {
            e.exports = {
                Wrapper: "NoResults_Wrapper__ZYDpl"
            }
        },
        9319: function(e) {
            e.exports = {
                Background: "Blog_Background__cTPsX",
                GradientWrapper: "Blog_GradientWrapper__oo_9x",
                Shape1: "Blog_Shape1__q_TYx",
                Shape2: "Blog_Shape2__EP6Z5",
                Shape3: "Blog_Shape3__G1EnG",
                Shape4: "Blog_Shape4__93ghj",
                Shape5: "Blog_Shape5__oWc4v",
                MobileShape1: "Blog_MobileShape1__ANmh_",
                MobileShape2: "Blog_MobileShape2__Ixxx_",
                MobileShape3: "Blog_MobileShape3__pJH6K",
                MobileShape4: "Blog_MobileShape4__mnaAA",
                MobileShape5: "Blog_MobileShape5__HoY5_",
                Header: "Blog_Header___kCNn",
                Title: "Blog_Title__vWJZ9",
                SubHeading: "Blog_SubHeading__0kZD1",
                Container: "Blog_Container__iNsIT",
                Layout: "Blog_Layout__RXFGy",
                Tags: "Blog_Tags__Fwz5S",
                PostsHeader: "Blog_PostsHeader__8CxQX",
                SearchBarWrapper: "Blog_SearchBarWrapper__rTfRX",
                Searchbar: "Blog_Searchbar__o68iX",
                PostsContainer: "Blog_PostsContainer__g3HGv"
            }
        },
        1838: function(e) {
            e.exports = {
                Border: "FeaturedSlider_Border__W6Twj",
                FeaturedSlider: "FeaturedSlider_FeaturedSlider__GopGc",
                Header: "FeaturedSlider_Header__VKnXx",
                NavWrapper: "FeaturedSlider_NavWrapper__dm6cn",
                Controls: "FeaturedSlider_Controls__qOqAy",
                Dots: "FeaturedSlider_Dots__fFkY_",
                Dot: "FeaturedSlider_Dot__2Z4ih",
                active: "FeaturedSlider_active__X0SSG",
                SlideHidden: "FeaturedSlider_SlideHidden__U_GvM",
                SlideCover: "FeaturedSlider_SlideCover__fG08b"
            }
        },
        9706: function(e) {
            e.exports = {
                CardBackground: "Arrow_CardBackground__DiyVn",
                CardInnerBackground: "Arrow_CardInnerBackground__0yzoS",
                Disabled: "Arrow_Disabled__I8shv",
                CardSolidBackground: "Arrow_CardSolidBackground__ovum7",
                arrow: "Arrow_arrow__gbH4H",
                "arrow--disabled": "Arrow_arrow--disabled__d18_V"
            }
        },
        59: function(e) {
            e.exports = {
                Border: "Slide_Border__46UeL",
                SolidBg: "Slide_SolidBg__5Wx1x",
                GradientBg: "Slide_GradientBg__zgNav",
                Card: "Slide_Card__onBv_",
                Details: "Slide_Details__hKX6m",
                Title: "Slide_Title____Gs2",
                TagRow: "Slide_TagRow__Q9BgD",
                Date: "Slide_Date__8MH89"
            }
        },
        1322: function(e) {
            e.exports = {
                Border: "PostCard_Border__cwsr0",
                SolidBg: "PostCard_SolidBg__dsnqR",
                GradientBg: "PostCard_GradientBg__MnXqX",
                Card: "PostCard_Card__Dccff",
                Excerpt: "PostCard_Excerpt__Hiuu_",
                Date: "PostCard_Date__8JKmO",
                Details: "PostCard_Details__bAOVb",
                TagRow: "PostCard_TagRow__QWG_c"
            }
        },
        9513: function(e) {
            e.exports = {
                Section: "Posts_Section__O_Aj9"
            }
        },
        8674: function(e) {
            e.exports = {
                Sidebar: "Sidebar_Sidebar__koY2K",
                Title: "Sidebar_Title__l_oIn",
                TagLabel: "Sidebar_TagLabel__fvssI"
            }
        },
        9727: function(e) {
            e.exports = {
                Tag: "Tag_Tag__s8vTr",
                Active: "Tag_Active__V0lqX"
            }
        },
        5737: function(e) {
            e.exports = {
                Wrapper: "TagsMobile_Wrapper__z5cg2",
                Title: "TagsMobile_Title__XApXY",
                Dropdown: "TagsMobile_Dropdown__IofJ7"
            }
        },
        60: function(e) {
            e.exports = {
                Wrapper: "Subscribe_Wrapper__4XnMT",
                Border: "Subscribe_Border__jw7r9",
                SolidBg: "Subscribe_SolidBg__M9IDB",
                GradientBg: "Subscribe_GradientBg__ApkBo",
                Card: "Subscribe_Card__jHoOk",
                Form: "Subscribe_Form__Z_oOz",
                Title: "Subscribe_Title__NID6a",
                InputRow: "Subscribe_InputRow__lIx2L",
                HelperText: "Subscribe_HelperText__qEKyg",
                Image: "Subscribe_Image__0v448",
                MobileImage: "Subscribe_MobileImage__SDvDy"
            }
        }
    }
]);