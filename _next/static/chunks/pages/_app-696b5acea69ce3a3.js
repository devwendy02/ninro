(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6840: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(2989)
            }])
        },
        959: function(e, t, n) {
            "use strict";
            n.d(t, {
                S1: function() {
                    return r
                },
                lc: function() {
                    return i
                },
                qP: function() {
                    return a
                }
            });
            var o = n(9089);
            let r = () => o.ZP.initialize("G-4LHSE9Q398"),
                a = (e, t) => {
                    let n;
                    if ("string" == typeof e) e = c(n = e);
                    else {
                        n = e.label;
                        let r = c(n || "");
                        e.label = r, e.action = r
                    }
                    o.ZP.event(e)
                },
                i = (e, t) => o.ZP.send({
                    hitType: "pageview",
                    page: e,
                    title: t
                }),
                c = e => e.split(" ").join("_").toLowerCase()
        },
        2989: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var o = n(5893);
            n(2139), n(7595), n(2033);
            var r = n(1163),
                a = n(7294),
                i = n(959);
            let c = () => {
                let e = (0, r.useRouter)();
                (0, a.useEffect)(() => {
                    i.S1()
                }, []), (0, a.useEffect)(() => {
                    let t = document.title;
                    i.lc(e.asPath, t)
                }, [e])
            };
            var s = n(9008),
                u = n.n(s);
            let l = () => (0, o.jsxs)(u(), {
                children: [(0, o.jsx)("title", {
                    children: "Ronin"
                }), (0, o.jsx)("link", {
                    rel: "shortcut icon",
                    href: "https://cdn.skymavis.com/explorer-cdn/asset/fav.ico"
                }), (0, o.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                }), (0, o.jsx)("meta", {
                    name: "author",
                    content: "roninchain.com"
                }), (0, o.jsx)("meta", {
                    name: "keywords",
                    content: "ronin, ronin network, ronin blockchain, ronin, evm, ronin scatter, staking, axs, sky mavis, axie infinity, ron"
                }), (0, o.jsx)("meta", {
                    name: "description",
                    content: "Ronin is an EVM blockchain tailored for developers building player-owned economies"
                }), (0, o.jsx)("meta", {
                    property: "og:title",
                    content: "Ronin"
                }, "ogTitle"), (0, o.jsx)("meta", {
                    property: "og:site_name",
                    content: "Ronin"
                }, "ogSiteName"), (0, o.jsx)("meta", {
                    property: "og:url",
                    content: "https://roninchain.com/"
                }), (0, o.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }), (0, o.jsx)("meta", {
                    property: "og:image:alt",
                    content: "Visit roninchain.com"
                }), (0, o.jsx)("meta", {
                    property: "og:image",
                    content: "https://cdn.skymavis.com/explorer-cdn/asset/og/website.png"
                }, "ogImage")]
            });
            var f = function(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e;
                return c(), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(l, {}), (0, o.jsx)(t, { ...n
                    })]
                })
            }
        },
        2033: function() {},
        7595: function() {},
        2139: function() {},
        9008: function(e, t, n) {
            e.exports = n(3121)
        },
        1163: function(e, t, n) {
            e.exports = n(880)
        },
        9559: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e, t, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = o || "";
                return r && (i = o.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(e, t, o) {
                    return t > 0 && t + e.length !== o.length && e.search(n) > -1 && ":" !== o.charAt(t - 2) && ("-" !== o.charAt(t + e.length) || "-" === o.charAt(t - 1)) && 0 > o.charAt(t - 1).search(/[^\s-]/) ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
                })), a && (i = "string" == typeof(t = e = i) && -1 !== t.indexOf("@") ? (console.warn("This arg looks like an email address, redacting."), "REDACTED (Potential Email Address)") : e), i
            };
            var n = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i
        },
        1638: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.GA4 = void 0;
            var o = u(n(6161)),
                r = u(n(9559)),
                a = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
                i = ["title", "location"],
                c = ["page", "hitType"],
                s = ["action", "category", "label", "value", "nonInteraction", "transport"];

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, o)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        _(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function m(e, t) {
                if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function _(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = function() {
                var e, t;

                function n() {
                    var e = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, n), _(this, "reset", function() {
                        e.isInitialized = !1, e._testMode = !1, e._currentMeasurementId, e._hasLoadedGA = !1, e._isQueuing = !1, e._queueGtag = []
                    }), _(this, "_gtag", function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e._testMode ? e._queueGtag.push(n) : e._isQueuing ? e._queueGtag.push(n) : o.default.apply(void 0, n)
                    }), _(this, "_loadGA", function(t, n) {
                        if ("undefined" != typeof window && "undefined" != typeof document && !e._hasLoadedGA) {
                            var o = document.createElement("script");
                            o.async = !0, o.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t), n && o.setAttribute("nonce", n), document.body.appendChild(o), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                                window.dataLayer.push(arguments)
                            }, e._hasLoadedGA = !0
                        }
                    }), _(this, "_toGtagOptions", function(e) {
                        if (e) {
                            var t = {
                                cookieUpdate: "cookie_update",
                                cookieExpires: "cookie_expires",
                                cookieDomain: "cookie_domain",
                                cookieFlags: "cookie_flags",
                                userId: "user_id",
                                clientId: "client_id",
                                anonymizeIp: "anonymize_ip",
                                contentGroup1: "content_group1",
                                contentGroup2: "content_group2",
                                contentGroup3: "content_group3",
                                contentGroup4: "content_group4",
                                contentGroup5: "content_group5",
                                allowAdFeatures: "allow_google_signals",
                                allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                                nonInteraction: "non_interaction",
                                page: "page_path",
                                hitCallback: "event_callback"
                            };
                            return Object.entries(e).reduce(function(e, n) {
                                var o = function(e) {
                                        if (Array.isArray(e)) return e
                                    }(n) || function(e, t) {
                                        var n, o, r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var a = [],
                                                i = !0,
                                                c = !1;
                                            try {
                                                for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                                            } catch (s) {
                                                c = !0, o = s
                                            } finally {
                                                try {
                                                    i || null == r.return || r.return()
                                                } finally {
                                                    if (c) throw o
                                                }
                                            }
                                            return a
                                        }
                                    }(n, 2) || m(n, 2) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(),
                                    r = o[0],
                                    a = o[1];
                                return t[r] ? e[t[r]] = a : e[r] = a, e
                            }, {})
                        }
                    }), _(this, "initialize", function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!t) throw Error("Require GA_MEASUREMENT_ID");
                        var o = "string" == typeof t ? [{
                            trackingId: t
                        }] : t;
                        e._currentMeasurementId = o[0].trackingId;
                        var r = n.gaOptions,
                            a = n.gtagOptions,
                            i = n.legacyDimensionMetric,
                            c = void 0 === i || i,
                            s = n.nonce,
                            u = n.testMode,
                            l = void 0 !== u && u;
                        if (e._testMode = l, l || e._loadGA(e._currentMeasurementId, s), e.isInitialized || (e._gtag("js", new Date), o.forEach(function(t) {
                                var n = e._appendCustomMap(d(d(d({
                                    send_page_view: !1
                                }, e._toGtagOptions(d(d({}, r), t.gaOptions))), a), t.gtagOptions), c);
                                e._gtag("config", t.trackingId, n)
                            })), e.isInitialized = !0, !l) {
                            var f = g(e._queueGtag);
                            for (e._queueGtag = [], e._isQueuing = !1; f.length;) {
                                var p = f.shift();
                                e._gtag.apply(e, g(p)), "get" === p[0] && (e._isQueuing = !0)
                            }
                        }
                    }), _(this, "set", function(t) {
                        if (!t) {
                            console.warn("`fieldsObject` is required in .set()");
                            return
                        }
                        if ("object" !== f(t)) {
                            console.warn("Expected `fieldsObject` arg to be an Object");
                            return
                        }
                        0 === Object.keys(t).length && console.warn("empty `fieldsObject` given to .set()"), e._gaCommand("set", t)
                    }), _(this, "_gaCommandSendEvent", function(t, n, o, r, a) {
                        e._gtag("event", n, d(d({
                            event_category: t,
                            event_label: o,
                            value: r
                        }, a && {
                            non_interaction: a.nonInteraction
                        }), e._toGtagOptions(a)))
                    }), _(this, "_gaCommandSendEventParameters", function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if ("string" == typeof n[0]) e._gaCommandSendEvent.apply(e, g(n.slice(1)));
                        else {
                            var r = n[0],
                                i = r.eventCategory,
                                c = r.eventAction,
                                s = r.eventLabel,
                                u = r.eventValue,
                                f = (r.hitType, l(r, a));
                            e._gaCommandSendEvent(i, c, s, u, f)
                        }
                    }), _(this, "_gaCommandSendTiming", function(t, n, o, r) {
                        e._gtag("event", "timing_complete", {
                            name: n,
                            value: o,
                            event_category: t,
                            event_label: r
                        })
                    }), _(this, "_gaCommandSendPageview", function(t, n) {
                        if (n && Object.keys(n).length) {
                            var o = e._toGtagOptions(n),
                                r = o.title,
                                a = o.location,
                                c = l(o, i);
                            e._gtag("event", "page_view", d(d(d(d({}, t && {
                                page_path: t
                            }), r && {
                                page_title: r
                            }), a && {
                                page_location: a
                            }), c))
                        } else t ? e._gtag("event", "page_view", {
                            page_path: t
                        }) : e._gtag("event", "page_view")
                    }), _(this, "_gaCommandSendPageviewParameters", function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if ("string" == typeof n[0]) e._gaCommandSendPageview.apply(e, g(n.slice(1)));
                        else {
                            var r = n[0],
                                a = r.page,
                                i = (r.hitType, l(r, c));
                            e._gaCommandSendPageview(a, i)
                        }
                    }), _(this, "_gaCommandSend", function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        var r = "string" == typeof n[0] ? n[0] : n[0].hitType;
                        switch (r) {
                            case "event":
                                e._gaCommandSendEventParameters.apply(e, n);
                                break;
                            case "pageview":
                                e._gaCommandSendPageviewParameters.apply(e, n);
                                break;
                            case "timing":
                                e._gaCommandSendTiming.apply(e, g(n.slice(1)));
                                break;
                            case "screenview":
                            case "transaction":
                            case "item":
                            case "social":
                            case "exception":
                                console.warn("Unsupported send command: ".concat(r));
                                break;
                            default:
                                console.warn("Send command doesn't exist: ".concat(r))
                        }
                    }), _(this, "_gaCommandSet", function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        "string" == typeof n[0] && (n[0] = _({}, n[0], n[1])), e._gtag("set", e._toGtagOptions(n[0]))
                    }), _(this, "_gaCommand", function(t) {
                        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                        switch (t) {
                            case "send":
                                e._gaCommandSend.apply(e, o);
                                break;
                            case "set":
                                e._gaCommandSet.apply(e, o);
                                break;
                            default:
                                console.warn("Command doesn't exist: ".concat(t))
                        }
                    }), _(this, "ga", function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if ("string" == typeof n[0]) e._gaCommand.apply(e, n);
                        else {
                            var r = n[0];
                            e._gtag("get", e._currentMeasurementId, "client_id", function(t) {
                                e._isQueuing = !1;
                                var n = e._queueGtag;
                                for (r({
                                        get: function(n) {
                                            return "clientId" === n ? t : "trackingId" === n ? e._currentMeasurementId : "apiVersion" === n ? "1" : void 0
                                        }
                                    }); n.length;) {
                                    var o = n.shift();
                                    e._gtag.apply(e, g(o))
                                }
                            }), e._isQueuing = !0
                        }
                        return e.ga
                    }), _(this, "event", function(t, n) {
                        if ("string" == typeof t) e._gtag("event", t, e._toGtagOptions(n));
                        else {
                            var o = t.action,
                                a = t.category,
                                i = t.label,
                                c = t.value,
                                u = t.nonInteraction,
                                f = t.transport,
                                g = l(t, s);
                            if (!a || !o) {
                                console.warn("args.category AND args.action are required in event()");
                                return
                            }
                            var p = {
                                hitType: "event",
                                eventCategory: (0, r.default)(a),
                                eventAction: (0, r.default)(o)
                            };
                            i && (p.eventLabel = (0, r.default)(i)), void 0 !== c && ("number" != typeof c ? console.warn("Expected `args.value` arg to be a Number.") : p.eventValue = c), void 0 !== u && ("boolean" != typeof u ? console.warn("`args.nonInteraction` must be a boolean.") : p.nonInteraction = u), void 0 !== f && ("string" != typeof f ? console.warn("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(f) && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), p.transport = f)), Object.keys(g).filter(function(e) {
                                return "dimension" === e.substr(0, 9)
                            }).forEach(function(e) {
                                p[e] = g[e]
                            }), Object.keys(g).filter(function(e) {
                                return "metric" === e.substr(0, 6)
                            }).forEach(function(e) {
                                p[e] = g[e]
                            }), e._gaCommand("send", p)
                        }
                    }), _(this, "send", function(t) {
                        e._gaCommand("send", t)
                    }), _(this, "pageview", function(t, n, o) {
                        var r = null == t ? void 0 : t.trim();
                        if ("" === r) {
                            console.warn("path cannot be an empty string in .pageview()");
                            return
                        }
                        e._gaCommand("send", "pageview", r, {
                            title: o
                        })
                    }), this.reset()
                }
                return e = [{
                    key: "gtag",
                    value: function() {
                        this._gtag.apply(this, arguments)
                    }
                }, {
                    key: "_appendCustomMap",
                    value: function(e) {
                        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        if (!t) return e;
                        e.custom_map || (e.custom_map = {});
                        for (var n = 1; n <= 200; n++) e.custom_map["dimension".concat(n)] || (e.custom_map["dimension".concat(n)] = "dimension".concat(n)), e.custom_map["metric".concat(n)] || (e.custom_map["metric".concat(n)] = "metric".concat(n));
                        return e
                    }
                }, {
                    key: "outboundLink",
                    value: function(e, t) {
                        var n = e.label;
                        if ("function" != typeof t) {
                            console.warn("hitCallback function is required");
                            return
                        }
                        if (!n) {
                            console.warn("args.label is required in outboundLink()");
                            return
                        }
                        var o = {
                                hitType: "event",
                                eventCategory: "Outbound",
                                eventAction: "Click",
                                eventLabel: (0, r.default)(n)
                            },
                            a = !1,
                            i = setTimeout(function() {
                                a = !0, t()
                            }, 250);
                        o.hitCallback = function() {
                            clearTimeout(i), a || t()
                        }, this._gaCommand("send", o)
                    }
                }], v(n.prototype, e), t && v(n, t), n
            }();
            t.GA4 = h;
            var b = new h;
            t.default = b
        },
        6161: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = function() {
                for (var e, t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                "undefined" != typeof window && (void 0 === window.gtag && (window.dataLayer = window.dataLayer || [], window.gtag = function() {
                    window.dataLayer.push(arguments)
                }), (e = window).gtag.apply(e, n))
            }
        },
        9089: function(e, t, n) {
            "use strict";

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            t.ZP = void 0;
            var r = function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var n = a(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var c in e)
                    if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
                        var s = i ? Object.getOwnPropertyDescriptor(e, c) : null;
                        s && (s.get || s.set) ? Object.defineProperty(r, c, s) : r[c] = e[c]
                    }
                return r.default = e, n && n.set(e, r), r
            }(n(1638));

            function a(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (a = function(e) {
                    return e ? n : t
                })(e)
            }
            r.GA4;
            var i = r.default;
            t.ZP = i
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(6840), t(880)
        }), _N_E = e.O()
    }
]);