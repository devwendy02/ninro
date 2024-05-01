(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [693], {
        4564: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                let {
                    children: e
                } = t;
                return e
            }, e.suspense = function() {
                let t = Error(n.NEXT_DYNAMIC_NO_SSR_CODE);
                throw t.digest = n.NEXT_DYNAMIC_NO_SSR_CODE, t
            }, (0, r(2648).Z)(r(7294));
            var n = r(2983)
        },
        7645: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t, e) {
                let r = a.default,
                    i = {
                        loading: t => {
                            let {
                                error: e,
                                isLoading: r,
                                pastDelay: n
                            } = t;
                            return null
                        }
                    };
                t instanceof Promise ? i.loader = () => t : "function" == typeof t ? i.loader = t : "object" == typeof t && (i = n({}, i, t)), i = n({}, i, e);
                let s = i.loader,
                    o = () => s().then(l);
                if (i.loadableGenerated && delete(i = n({}, i, i.loadableGenerated, {
                        loader: o
                    })).loadableGenerated, "boolean" == typeof i.ssr) {
                    if (!i.ssr) return delete i.ssr, u(o, i);
                    delete i.ssr
                }
                return r(i)
            }, e.noSSR = u;
            var n = r(6495).Z,
                i = r(2648).Z,
                s = (0, r(1598).Z)(r(7294)),
                a = i(r(4588)),
                o = i(r(4564));

            function l(t) {
                return {
                    default: t.default || t
                }
            }

            function u(t, e) {
                delete e.webpack, delete e.modules;
                let r = s.lazy(t),
                    n = e.loading,
                    i = s.default.createElement(n, {
                        error: null,
                        isLoading: !0,
                        pastDelay: !1,
                        timedOut: !1
                    });
                return t => s.default.createElement(s.Suspense, {
                    fallback: i
                }, s.default.createElement(o.default, null, s.default.createElement(r, Object.assign({}, t))))
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        3644: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LoadableContext = void 0;
            var n = (0, r(2648).Z)(r(7294));
            let i = n.default.createContext(null);
            e.LoadableContext = i
        },
        4588: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(6495).Z,
                i = (0, r(2648).Z)(r(7294)),
                s = r(3644);
            let a = [],
                o = [],
                l = !1;

            function u(t) {
                let e = t(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = e.then(t => (r.loading = !1, r.loaded = t, t)).catch(t => {
                    throw r.loading = !1, r.error = t, t
                }), r
            }
            class c {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: t,
                        _opts: e
                    } = this;
                    t.loading && ("number" == typeof e.delay && (0 === e.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, e.delay)), "number" == typeof e.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, e.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(t => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(t) {
                    this._state = n({}, this._state, {
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading
                    }, t), this._callbacks.forEach(t => t())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(t) {
                    return this._callbacks.add(t), () => {
                        this._callbacks.delete(t)
                    }
                }
                constructor(t, e) {
                    this._loadFn = t, this._opts = e, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function h(t) {
                return function(t, e) {
                    let r = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null
                    }, e);
                    r.lazy = i.default.lazy(r.loader);
                    let n = null;

                    function a() {
                        if (!n) {
                            let e = new c(t, r);
                            n = {
                                getCurrentValue: e.getCurrentValue.bind(e),
                                subscribe: e.subscribe.bind(e),
                                retry: e.retry.bind(e),
                                promise: e.promise.bind(e)
                            }
                        }
                        return n.promise()
                    }
                    if (!l) {
                        let u = r.webpack ? r.webpack() : r.modules;
                        u && o.push(t => {
                            for (let e of u)
                                if (-1 !== t.indexOf(e)) return a()
                        })
                    }

                    function h(t) {
                        ! function() {
                            a();
                            let t = i.default.useContext(s.LoadableContext);
                            t && Array.isArray(r.modules) && r.modules.forEach(e => {
                                t(e)
                            })
                        }();
                        let e = i.default.createElement(r.loading, {
                            isLoading: !0,
                            pastDelay: !0,
                            error: null
                        });
                        return i.default.createElement(i.default.Suspense, {
                            fallback: e
                        }, i.default.createElement(r.lazy, t))
                    }
                    return h.preload = () => a(), h.displayName = "LoadableComponent", h
                }(u, t)
            }

            function f(t, e) {
                let r = [];
                for (; t.length;) {
                    let n = t.pop();
                    r.push(n(e))
                }
                return Promise.all(r).then(() => {
                    if (t.length) return f(t, e)
                })
            }
            h.preloadAll = () => new Promise((t, e) => {
                f(a).then(t, e)
            }), h.preloadReady = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise(e => {
                    let r = () => (l = !0, e());
                    f(o, t).then(r, r)
                })
            }, window.__NEXT_PRELOADREADY = h.preloadReady, e.default = h
        },
        5152: function(t, e, r) {
            t.exports = r(7645)
        },
        5121: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return ee
                }
            });
            var n, i, s, a = {};

            function o(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            r.r(a), r.d(a, {
                hasBrowserEnv: function() {
                    return tx
                },
                hasStandardBrowserEnv: function() {
                    return tC
                },
                hasStandardBrowserWebWorkerEnv: function() {
                    return tN
                }
            });
            let {
                toString: l
            } = Object.prototype, {
                getPrototypeOf: u
            } = Object, c = (n = Object.create(null), t => {
                let e = l.call(t);
                return n[e] || (n[e] = e.slice(8, -1).toLowerCase())
            }), h = t => (t = t.toLowerCase(), e => c(e) === t), f = t => e => typeof e === t, {
                isArray: d
            } = Array, p = f("undefined"), g = h("ArrayBuffer"), m = f("string"), y = f("function"), A = f("number"), w = t => null !== t && "object" == typeof t, b = t => {
                if ("object" !== c(t)) return !1;
                let e = u(t);
                return (null === e || e === Object.prototype || null === Object.getPrototypeOf(e)) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
            }, v = h("Date"), E = h("File"), P = h("Blob"), x = h("FileList"), C = t => w(t) && y(t.pipe), N = t => {
                let e;
                return t && ("function" == typeof FormData && t instanceof FormData || y(t.append) && ("formdata" === (e = c(t)) || "object" === e && y(t.toString) && "[object FormData]" === t.toString()))
            }, O = h("URLSearchParams"), T = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

            function k(t, e, {
                allOwnKeys: r = !1
            } = {}) {
                let n, i;
                if (null != t) {
                    if ("object" != typeof t && (t = [t]), d(t))
                        for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
                    else {
                        let s;
                        let a = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
                            o = a.length;
                        for (n = 0; n < o; n++) s = a[n], e.call(null, t[s], s, t)
                    }
                }
            }

            function B(t, e) {
                let r;
                e = e.toLowerCase();
                let n = Object.keys(t),
                    i = n.length;
                for (; i-- > 0;)
                    if (e === (r = n[i]).toLowerCase()) return r;
                return null
            }
            let S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
                I = t => !p(t) && t !== S,
                R = (t, e, r, {
                    allOwnKeys: n
                } = {}) => (k(e, (e, n) => {
                    r && y(e) ? t[n] = o(e, r) : t[n] = e
                }, {
                    allOwnKeys: n
                }), t),
                U = t => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
                D = (t, e, r, n) => {
                    t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
                        value: e.prototype
                    }), r && Object.assign(t.prototype, r)
                },
                L = (t, e, r, n) => {
                    let i, s, a;
                    let o = {};
                    if (e = e || {}, null == t) return e;
                    do {
                        for (s = (i = Object.getOwnPropertyNames(t)).length; s-- > 0;) a = i[s], (!n || n(a, t, e)) && !o[a] && (e[a] = t[a], o[a] = !0);
                        t = !1 !== r && u(t)
                    } while (t && (!r || r(t, e)) && t !== Object.prototype);
                    return e
                },
                F = (t, e, r) => {
                    t = String(t), (void 0 === r || r > t.length) && (r = t.length), r -= e.length;
                    let n = t.indexOf(e, r);
                    return -1 !== n && n === r
                },
                M = t => {
                    if (!t) return null;
                    if (d(t)) return t;
                    let e = t.length;
                    if (!A(e)) return null;
                    let r = Array(e);
                    for (; e-- > 0;) r[e] = t[e];
                    return r
                },
                j = (i = "undefined" != typeof Uint8Array && u(Uint8Array), t => i && t instanceof i),
                G = (t, e) => {
                    let r;
                    let n = t && t[Symbol.iterator],
                        i = n.call(t);
                    for (;
                        (r = i.next()) && !r.done;) {
                        let s = r.value;
                        e.call(t, s[0], s[1])
                    }
                },
                H = (t, e) => {
                    let r;
                    let n = [];
                    for (; null !== (r = t.exec(e));) n.push(r);
                    return n
                },
                Q = h("HTMLFormElement"),
                _ = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, e, r) {
                    return e.toUpperCase() + r
                }),
                V = (({
                    hasOwnProperty: t
                }) => (e, r) => t.call(e, r))(Object.prototype),
                z = h("RegExp"),
                J = (t, e) => {
                    let r = Object.getOwnPropertyDescriptors(t),
                        n = {};
                    k(r, (r, i) => {
                        let s;
                        !1 !== (s = e(r, i, t)) && (n[i] = s || r)
                    }), Object.defineProperties(t, n)
                },
                K = t => {
                    J(t, (e, r) => {
                        if (y(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                        let n = t[r];
                        if (y(n)) {
                            if (e.enumerable = !1, "writable" in e) {
                                e.writable = !1;
                                return
                            }
                            e.set || (e.set = () => {
                                throw Error("Can not rewrite read-only method '" + r + "'")
                            })
                        }
                    })
                },
                q = (t, e) => {
                    let r = {};
                    return (t => {
                        t.forEach(t => {
                            r[t] = !0
                        })
                    })(d(t) ? t : String(t).split(e)), r
                },
                W = () => {},
                Z = (t, e) => Number.isFinite(t = +t) ? t : e,
                Y = "abcdefghijklmnopqrstuvwxyz",
                X = "0123456789",
                $ = {
                    DIGIT: X,
                    ALPHA: Y,
                    ALPHA_DIGIT: Y + Y.toUpperCase() + X
                },
                tt = (t = 16, e = $.ALPHA_DIGIT) => {
                    let r = "",
                        {
                            length: n
                        } = e;
                    for (; t--;) r += e[Math.random() * n | 0];
                    return r
                },
                te = t => {
                    let e = Array(10),
                        r = (t, n) => {
                            if (w(t)) {
                                if (e.indexOf(t) >= 0) return;
                                if (!("toJSON" in t)) {
                                    e[n] = t;
                                    let i = d(t) ? [] : {};
                                    return k(t, (t, e) => {
                                        let s = r(t, n + 1);
                                        p(s) || (i[e] = s)
                                    }), e[n] = void 0, i
                                }
                            }
                            return t
                        };
                    return r(t, 0)
                },
                tr = h("AsyncFunction"),
                tn = t => t && (w(t) || y(t)) && y(t.then) && y(t.catch);
            var ti = {
                isArray: d,
                isArrayBuffer: g,
                isBuffer: function(t) {
                    return null !== t && !p(t) && null !== t.constructor && !p(t.constructor) && y(t.constructor.isBuffer) && t.constructor.isBuffer(t)
                },
                isFormData: N,
                isArrayBufferView: function(t) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && g(t.buffer)
                },
                isString: m,
                isNumber: A,
                isBoolean: t => !0 === t || !1 === t,
                isObject: w,
                isPlainObject: b,
                isUndefined: p,
                isDate: v,
                isFile: E,
                isBlob: P,
                isRegExp: z,
                isFunction: y,
                isStream: C,
                isURLSearchParams: O,
                isTypedArray: j,
                isFileList: x,
                forEach: k,
                merge: function t() {
                    let {
                        caseless: e
                    } = I(this) && this || {}, r = {}, n = (n, i) => {
                        let s = e && B(r, i) || i;
                        b(r[s]) && b(n) ? r[s] = t(r[s], n) : b(n) ? r[s] = t({}, n) : d(n) ? r[s] = n.slice() : r[s] = n
                    };
                    for (let i = 0, s = arguments.length; i < s; i++) arguments[i] && k(arguments[i], n);
                    return r
                },
                extend: R,
                trim: T,
                stripBOM: U,
                inherits: D,
                toFlatObject: L,
                kindOf: c,
                kindOfTest: h,
                endsWith: F,
                toArray: M,
                forEachEntry: G,
                matchAll: H,
                isHTMLForm: Q,
                hasOwnProperty: V,
                hasOwnProp: V,
                reduceDescriptors: J,
                freezeMethods: K,
                toObjectSet: q,
                toCamelCase: _,
                noop: W,
                toFiniteNumber: Z,
                findKey: B,
                global: S,
                isContextDefined: I,
                ALPHABET: $,
                generateString: tt,
                isSpecCompliantForm: function(t) {
                    return !!(t && y(t.append) && "FormData" === t[Symbol.toStringTag] && t[Symbol.iterator])
                },
                toJSONObject: te,
                isAsyncFn: tr,
                isThenable: tn
            };

            function ts(t, e, r, n, i) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i)
            }
            ti.inherits(ts, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: ti.toJSONObject(this.config),
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
            });
            let ta = ts.prototype,
                to = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
                to[t] = {
                    value: t
                }
            }), Object.defineProperties(ts, to), Object.defineProperty(ta, "isAxiosError", {
                value: !0
            }), ts.from = (t, e, r, n, i, s) => {
                let a = Object.create(ta);
                return ti.toFlatObject(t, a, function(t) {
                    return t !== Error.prototype
                }, t => "isAxiosError" !== t), ts.call(a, t.message, e, r, n, i), a.cause = t, a.name = t.name, s && Object.assign(a, s), a
            };
            var tl = r(1876).Buffer;

            function tu(t) {
                return ti.isPlainObject(t) || ti.isArray(t)
            }

            function tc(t) {
                return ti.endsWith(t, "[]") ? t.slice(0, -2) : t
            }

            function th(t, e, r) {
                return t ? t.concat(e).map(function(t, e) {
                    return t = tc(t), !r && e ? "[" + t + "]" : t
                }).join(r ? "." : "") : e
            }
            let tf = ti.toFlatObject(ti, {}, null, function(t) {
                return /^is[A-Z]/.test(t)
            });
            var td = function(t, e, r) {
                if (!ti.isObject(t)) throw TypeError("target must be an object");
                e = e || new FormData, r = ti.toFlatObject(r, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(t, e) {
                    return !ti.isUndefined(e[t])
                });
                let n = r.metaTokens,
                    i = r.visitor || c,
                    s = r.dots,
                    a = r.indexes,
                    o = r.Blob || "undefined" != typeof Blob && Blob,
                    l = o && ti.isSpecCompliantForm(e);
                if (!ti.isFunction(i)) throw TypeError("visitor must be a function");

                function u(t) {
                    if (null === t) return "";
                    if (ti.isDate(t)) return t.toISOString();
                    if (!l && ti.isBlob(t)) throw new ts("Blob is not supported. Use a Buffer instead.");
                    return ti.isArrayBuffer(t) || ti.isTypedArray(t) ? l && "function" == typeof Blob ? new Blob([t]) : tl.from(t) : t
                }

                function c(t, r, i) {
                    let o = t;
                    if (t && !i && "object" == typeof t) {
                        if (ti.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), t = JSON.stringify(t);
                        else {
                            var l;
                            if (ti.isArray(t) && (l = t, ti.isArray(l) && !l.some(tu)) || (ti.isFileList(t) || ti.endsWith(r, "[]")) && (o = ti.toArray(t))) return r = tc(r), o.forEach(function(t, n) {
                                ti.isUndefined(t) || null === t || e.append(!0 === a ? th([r], n, s) : null === a ? r : r + "[]", u(t))
                            }), !1
                        }
                    }
                    return !!tu(t) || (e.append(th(i, r, s), u(t)), !1)
                }
                let h = [],
                    f = Object.assign(tf, {
                        defaultVisitor: c,
                        convertValue: u,
                        isVisitable: tu
                    });
                if (!ti.isObject(t)) throw TypeError("data must be an object");
                return ! function t(r, n) {
                    if (!ti.isUndefined(r)) {
                        if (-1 !== h.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                        h.push(r), ti.forEach(r, function(r, s) {
                            let a = !(ti.isUndefined(r) || null === r) && i.call(e, r, ti.isString(s) ? s.trim() : s, n, f);
                            !0 === a && t(r, n ? n.concat(s) : [s])
                        }), h.pop()
                    }
                }(t), e
            };

            function tp(t) {
                let e = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                };
                return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(t) {
                    return e[t]
                })
            }

            function tg(t, e) {
                this._pairs = [], t && td(t, this, e)
            }
            let tm = tg.prototype;

            function ty(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function tA(t, e, r) {
                let n;
                if (!e) return t;
                let i = r && r.encode || ty,
                    s = r && r.serialize;
                if (n = s ? s(e, r) : ti.isURLSearchParams(e) ? e.toString() : new tg(e, r).toString(i)) {
                    let a = t.indexOf("#"); - 1 !== a && (t = t.slice(0, a)), t += (-1 === t.indexOf("?") ? "?" : "&") + n
                }
                return t
            }
            tm.append = function(t, e) {
                this._pairs.push([t, e])
            }, tm.toString = function(t) {
                let e = t ? function(e) {
                    return t.call(this, e, tp)
                } : tp;
                return this._pairs.map(function(t) {
                    return e(t[0]) + "=" + e(t[1])
                }, "").join("&")
            };
            var tw = class {
                    constructor() {
                        this.handlers = []
                    }
                    use(t, e, r) {
                        return this.handlers.push({
                            fulfilled: t,
                            rejected: e,
                            synchronous: !!r && r.synchronous,
                            runWhen: r ? r.runWhen : null
                        }), this.handlers.length - 1
                    }
                    eject(t) {
                        this.handlers[t] && (this.handlers[t] = null)
                    }
                    clear() {
                        this.handlers && (this.handlers = [])
                    }
                    forEach(t) {
                        ti.forEach(this.handlers, function(e) {
                            null !== e && t(e)
                        })
                    }
                },
                tb = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                tv = "undefined" != typeof URLSearchParams ? URLSearchParams : tg,
                tE = "undefined" != typeof FormData ? FormData : null,
                tP = "undefined" != typeof Blob ? Blob : null;
            let tx = "undefined" != typeof window && "undefined" != typeof document,
                tC = (s = "undefined" != typeof navigator && navigator.product, tx && 0 > ["ReactNative", "NativeScript", "NS"].indexOf(s)),
                tN = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
            var tO = { ...a,
                    isBrowser: !0,
                    classes: {
                        URLSearchParams: tv,
                        FormData: tE,
                        Blob: tP
                    },
                    protocols: ["http", "https", "file", "blob", "url", "data"]
                },
                tT = function(t) {
                    if (ti.isFormData(t) && ti.isFunction(t.entries)) {
                        let e = {};
                        return ti.forEachEntry(t, (t, r) => {
                            ! function t(e, r, n, i) {
                                let s = e[i++];
                                if ("__proto__" === s) return !0;
                                let a = Number.isFinite(+s),
                                    o = i >= e.length;
                                if (s = !s && ti.isArray(n) ? n.length : s, o) return ti.hasOwnProp(n, s) ? n[s] = [n[s], r] : n[s] = r, !a;
                                n[s] && ti.isObject(n[s]) || (n[s] = []);
                                let l = t(e, r, n[s], i);
                                return l && ti.isArray(n[s]) && (n[s] = function(t) {
                                    let e, r;
                                    let n = {},
                                        i = Object.keys(t),
                                        s = i.length;
                                    for (e = 0; e < s; e++) n[r = i[e]] = t[r];
                                    return n
                                }(n[s])), !a
                            }(ti.matchAll(/\w+|\[(\w*)]/g, t).map(t => "[]" === t[0] ? "" : t[1] || t[0]), r, e, 0)
                        }), e
                    }
                    return null
                };
            let tk = {
                transitional: tb,
                adapter: ["xhr", "http"],
                transformRequest: [function(t, e) {
                    let r;
                    let n = e.getContentType() || "",
                        i = n.indexOf("application/json") > -1,
                        s = ti.isObject(t);
                    s && ti.isHTMLForm(t) && (t = new FormData(t));
                    let a = ti.isFormData(t);
                    if (a) return i ? JSON.stringify(tT(t)) : t;
                    if (ti.isArrayBuffer(t) || ti.isBuffer(t) || ti.isStream(t) || ti.isFile(t) || ti.isBlob(t)) return t;
                    if (ti.isArrayBufferView(t)) return t.buffer;
                    if (ti.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
                    if (s) {
                        if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                            var o, l;
                            return (o = t, l = this.formSerializer, td(o, new tO.classes.URLSearchParams, Object.assign({
                                visitor: function(t, e, r, n) {
                                    return tO.isNode && ti.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                                }
                            }, l))).toString()
                        }
                        if ((r = ti.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                            let u = this.env && this.env.FormData;
                            return td(r ? {
                                "files[]": t
                            } : t, u && new u, this.formSerializer)
                        }
                    }
                    return s || i ? (e.setContentType("application/json", !1), function(t, e, r) {
                        if (ti.isString(t)) try {
                            return (0, JSON.parse)(t), ti.trim(t)
                        } catch (n) {
                            if ("SyntaxError" !== n.name) throw n
                        }
                        return (0, JSON.stringify)(t)
                    }(t)) : t
                }],
                transformResponse: [function(t) {
                    let e = this.transitional || tk.transitional,
                        r = e && e.forcedJSONParsing,
                        n = "json" === this.responseType;
                    if (t && ti.isString(t) && (r && !this.responseType || n)) {
                        let i = e && e.silentJSONParsing;
                        try {
                            return JSON.parse(t)
                        } catch (s) {
                            if (!i && n) {
                                if ("SyntaxError" === s.name) throw ts.from(s, ts.ERR_BAD_RESPONSE, this, null, this.response);
                                throw s
                            }
                        }
                    }
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: tO.classes.FormData,
                    Blob: tO.classes.Blob
                },
                validateStatus: function(t) {
                    return t >= 200 && t < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": void 0
                    }
                }
            };
            ti.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
                tk.headers[t] = {}
            });
            let tB = ti.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
            var tS = t => {
                let e, r, n;
                let i = {};
                return t && t.split("\n").forEach(function(t) {
                    n = t.indexOf(":"), e = t.substring(0, n).trim().toLowerCase(), r = t.substring(n + 1).trim(), !e || i[e] && tB[e] || ("set-cookie" === e ? i[e] ? i[e].push(r) : i[e] = [r] : i[e] = i[e] ? i[e] + ", " + r : r)
                }), i
            };
            let tI = Symbol("internals");

            function tR(t) {
                return t && String(t).trim().toLowerCase()
            }

            function tU(t) {
                return !1 === t || null == t ? t : ti.isArray(t) ? t.map(tU) : String(t)
            }
            let tD = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

            function tL(t, e, r, n, i) {
                if (ti.isFunction(n)) return n.call(this, e, r);
                if (i && (e = r), ti.isString(e)) {
                    if (ti.isString(n)) return -1 !== e.indexOf(n);
                    if (ti.isRegExp(n)) return n.test(e)
                }
            }
            class tF {
                constructor(t) {
                    t && this.set(t)
                }
                set(t, e, r) {
                    let n = this;

                    function i(t, e, r) {
                        let i = tR(e);
                        if (!i) throw Error("header name must be a non-empty string");
                        let s = ti.findKey(n, i);
                        s && void 0 !== n[s] && !0 !== r && (void 0 !== r || !1 === n[s]) || (n[s || e] = tU(t))
                    }
                    let s = (t, e) => ti.forEach(t, (t, r) => i(t, r, e));
                    return ti.isPlainObject(t) || t instanceof this.constructor ? s(t, e) : ti.isString(t) && (t = t.trim()) && !tD(t) ? s(tS(t), e) : null != t && i(e, t, r), this
                }
                get(t, e) {
                    if (t = tR(t)) {
                        let r = ti.findKey(this, t);
                        if (r) {
                            let n = this[r];
                            if (!e) return n;
                            if (!0 === e) return function(t) {
                                let e;
                                let r = Object.create(null),
                                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; e = n.exec(t);) r[e[1]] = e[2];
                                return r
                            }(n);
                            if (ti.isFunction(e)) return e.call(this, n, r);
                            if (ti.isRegExp(e)) return e.exec(n);
                            throw TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
                has(t, e) {
                    if (t = tR(t)) {
                        let r = ti.findKey(this, t);
                        return !!(r && void 0 !== this[r] && (!e || tL(this, this[r], r, e)))
                    }
                    return !1
                }
                delete(t, e) {
                    let r = this,
                        n = !1;

                    function i(t) {
                        if (t = tR(t)) {
                            let i = ti.findKey(r, t);
                            i && (!e || tL(r, r[i], i, e)) && (delete r[i], n = !0)
                        }
                    }
                    return ti.isArray(t) ? t.forEach(i) : i(t), n
                }
                clear(t) {
                    let e = Object.keys(this),
                        r = e.length,
                        n = !1;
                    for (; r--;) {
                        let i = e[r];
                        (!t || tL(this, this[i], i, t, !0)) && (delete this[i], n = !0)
                    }
                    return n
                }
                normalize(t) {
                    let e = this,
                        r = {};
                    return ti.forEach(this, (n, i) => {
                        let s = ti.findKey(r, i);
                        if (s) {
                            e[s] = tU(n), delete e[i];
                            return
                        }
                        let a = t ? i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r) : String(i).trim();
                        a !== i && delete e[i], e[a] = tU(n), r[a] = !0
                    }), this
                }
                concat(...t) {
                    return this.constructor.concat(this, ...t)
                }
                toJSON(t) {
                    let e = Object.create(null);
                    return ti.forEach(this, (r, n) => {
                        null != r && !1 !== r && (e[n] = t && ti.isArray(r) ? r.join(", ") : r)
                    }), e
                }[Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
                toString() {
                    return Object.entries(this.toJSON()).map(([t, e]) => t + ": " + e).join("\n")
                }
                get[Symbol.toStringTag]() {
                    return "AxiosHeaders"
                }
                static from(t) {
                    return t instanceof this ? t : new this(t)
                }
                static concat(t, ...e) {
                    let r = new this(t);
                    return e.forEach(t => r.set(t)), r
                }
                static accessor(t) {
                    let e = this[tI] = this[tI] = {
                            accessors: {}
                        },
                        r = e.accessors,
                        n = this.prototype;

                    function i(t) {
                        let e = tR(t);
                        r[e] || (! function(t, e) {
                            let r = ti.toCamelCase(" " + e);
                            ["get", "set", "has"].forEach(n => {
                                Object.defineProperty(t, n + r, {
                                    value: function(t, r, i) {
                                        return this[n].call(this, e, t, r, i)
                                    },
                                    configurable: !0
                                })
                            })
                        }(n, t), r[e] = !0)
                    }
                    return ti.isArray(t) ? t.forEach(i) : i(t), this
                }
            }

            function tM(t, e) {
                let r = this || tk,
                    n = e || r,
                    i = tF.from(n.headers),
                    s = n.data;
                return ti.forEach(t, function(t) {
                    s = t.call(r, s, i.normalize(), e ? e.status : void 0)
                }), i.normalize(), s
            }

            function tj(t) {
                return !!(t && t.__CANCEL__)
            }

            function tG(t, e, r) {
                ts.call(this, null == t ? "canceled" : t, ts.ERR_CANCELED, e, r), this.name = "CanceledError"
            }
            tF.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), ti.reduceDescriptors(tF.prototype, ({
                value: t
            }, e) => {
                let r = e[0].toUpperCase() + e.slice(1);
                return {
                    get: () => t,
                    set(t) {
                        this[r] = t
                    }
                }
            }), ti.freezeMethods(tF), ti.inherits(tG, ts, {
                __CANCEL__: !0
            });
            var tH = tO.hasStandardBrowserEnv ? {
                write(t, e, r, n, i, s) {
                    let a = [t + "=" + encodeURIComponent(e)];
                    ti.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), ti.isString(n) && a.push("path=" + n), ti.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
                },
                read(t) {
                    let e = document.cookie.match(RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write() {},
                read: () => null,
                remove() {}
            };

            function tQ(t, e) {
                return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t : e
            }
            var t_ = tO.hasStandardBrowserEnv ? function() {
                    let t;
                    let e = /(msie|trident)/i.test(navigator.userAgent),
                        r = document.createElement("a");

                    function n(t) {
                        let n = t;
                        return e && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                            href: r.href,
                            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                            host: r.host,
                            search: r.search ? r.search.replace(/^\?/, "") : "",
                            hash: r.hash ? r.hash.replace(/^#/, "") : "",
                            hostname: r.hostname,
                            port: r.port,
                            pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                        }
                    }
                    return t = n(window.location.href),
                        function(e) {
                            let r = ti.isString(e) ? n(e) : e;
                            return r.protocol === t.protocol && r.host === t.host
                        }
                }() : function() {
                    return !0
                },
                tV = function(t, e) {
                    let r;
                    t = t || 10;
                    let n = Array(t),
                        i = Array(t),
                        s = 0,
                        a = 0;
                    return e = void 0 !== e ? e : 1e3,
                        function(o) {
                            let l = Date.now(),
                                u = i[a];
                            r || (r = l), n[s] = o, i[s] = l;
                            let c = a,
                                h = 0;
                            for (; c !== s;) h += n[c++], c %= t;
                            if ((s = (s + 1) % t) === a && (a = (a + 1) % t), l - r < e) return;
                            let f = u && l - u;
                            return f ? Math.round(1e3 * h / f) : void 0
                        }
                };

            function tz(t, e) {
                let r = 0,
                    n = tV(50, 250);
                return i => {
                    let s = i.loaded,
                        a = i.lengthComputable ? i.total : void 0,
                        o = s - r,
                        l = n(o);
                    r = s;
                    let u = {
                        loaded: s,
                        total: a,
                        progress: a ? s / a : void 0,
                        bytes: o,
                        rate: l || void 0,
                        estimated: l && a && s <= a ? (a - s) / l : void 0,
                        event: i
                    };
                    u[e ? "download" : "upload"] = !0, t(u)
                }
            }
            let tJ = "undefined" != typeof XMLHttpRequest;
            var tK = tJ && function(t) {
                return new Promise(function(e, r) {
                    let n, i, s = t.data,
                        a = tF.from(t.headers).normalize(),
                        {
                            responseType: o,
                            withXSRFToken: l
                        } = t;

                    function u() {
                        t.cancelToken && t.cancelToken.unsubscribe(n), t.signal && t.signal.removeEventListener("abort", n)
                    }
                    if (ti.isFormData(s)) {
                        if (tO.hasStandardBrowserEnv || tO.hasStandardBrowserWebWorkerEnv) a.setContentType(!1);
                        else if (!1 !== (i = a.getContentType())) {
                            let [c, ...h] = i ? i.split(";").map(t => t.trim()).filter(Boolean) : [];
                            a.setContentType([c || "multipart/form-data", ...h].join("; "))
                        }
                    }
                    let f = new XMLHttpRequest;
                    if (t.auth) {
                        let d = t.auth.username || "",
                            p = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        a.set("Authorization", "Basic " + btoa(d + ":" + p))
                    }
                    let g = tQ(t.baseURL, t.url);

                    function m() {
                        if (!f) return;
                        let n = tF.from("getAllResponseHeaders" in f && f.getAllResponseHeaders()),
                            i = o && "text" !== o && "json" !== o ? f.response : f.responseText,
                            s = {
                                data: i,
                                status: f.status,
                                statusText: f.statusText,
                                headers: n,
                                config: t,
                                request: f
                            };
                        ! function(t, e, r) {
                            let n = r.config.validateStatus;
                            !r.status || !n || n(r.status) ? t(r) : e(new ts("Request failed with status code " + r.status, [ts.ERR_BAD_REQUEST, ts.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
                        }(function(t) {
                            e(t), u()
                        }, function(t) {
                            r(t), u()
                        }, s), f = null
                    }
                    if (f.open(t.method.toUpperCase(), tA(g, t.params, t.paramsSerializer), !0), f.timeout = t.timeout, "onloadend" in f ? f.onloadend = m : f.onreadystatechange = function() {
                            f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:")) && setTimeout(m)
                        }, f.onabort = function() {
                            f && (r(new ts("Request aborted", ts.ECONNABORTED, t, f)), f = null)
                        }, f.onerror = function() {
                            r(new ts("Network Error", ts.ERR_NETWORK, t, f)), f = null
                        }, f.ontimeout = function() {
                            let e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                                n = t.transitional || tb;
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), r(new ts(e, n.clarifyTimeoutError ? ts.ETIMEDOUT : ts.ECONNABORTED, t, f)), f = null
                        }, tO.hasStandardBrowserEnv && (l && ti.isFunction(l) && (l = l(t)), l || !1 !== l && t_(g))) {
                        let y = t.xsrfHeaderName && t.xsrfCookieName && tH.read(t.xsrfCookieName);
                        y && a.set(t.xsrfHeaderName, y)
                    }
                    void 0 === s && a.setContentType(null), "setRequestHeader" in f && ti.forEach(a.toJSON(), function(t, e) {
                        f.setRequestHeader(e, t)
                    }), ti.isUndefined(t.withCredentials) || (f.withCredentials = !!t.withCredentials), o && "json" !== o && (f.responseType = t.responseType), "function" == typeof t.onDownloadProgress && f.addEventListener("progress", tz(t.onDownloadProgress, !0)), "function" == typeof t.onUploadProgress && f.upload && f.upload.addEventListener("progress", tz(t.onUploadProgress)), (t.cancelToken || t.signal) && (n = e => {
                        f && (r(!e || e.type ? new tG(null, t, f) : e), f.abort(), f = null)
                    }, t.cancelToken && t.cancelToken.subscribe(n), t.signal && (t.signal.aborted ? n() : t.signal.addEventListener("abort", n)));
                    let A = function(t) {
                        let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                        return e && e[1] || ""
                    }(g);
                    if (A && -1 === tO.protocols.indexOf(A)) {
                        r(new ts("Unsupported protocol " + A + ":", ts.ERR_BAD_REQUEST, t));
                        return
                    }
                    f.send(s || null)
                })
            };
            let tq = {
                http: null,
                xhr: tK
            };
            ti.forEach(tq, (t, e) => {
                if (t) {
                    try {
                        Object.defineProperty(t, "name", {
                            value: e
                        })
                    } catch (r) {}
                    Object.defineProperty(t, "adapterName", {
                        value: e
                    })
                }
            });
            let tW = t => `- ${t}`,
                tZ = t => ti.isFunction(t) || null === t || !1 === t;
            var tY = {
                getAdapter: t => {
                    let e, r;
                    t = ti.isArray(t) ? t : [t];
                    let {
                        length: n
                    } = t, i = {};
                    for (let s = 0; s < n; s++) {
                        let a;
                        if (r = e = t[s], !tZ(e) && void 0 === (r = tq[(a = String(e)).toLowerCase()])) throw new ts(`Unknown adapter '${a}'`);
                        if (r) break;
                        i[a || "#" + s] = r
                    }
                    if (!r) {
                        let o = Object.entries(i).map(([t, e]) => `adapter ${t} ` + (!1 === e ? "is not supported by the environment" : "is not available in the build")),
                            l = n ? o.length > 1 ? "since :\n" + o.map(tW).join("\n") : " " + tW(o[0]) : "as no adapter specified";
                        throw new ts("There is no suitable adapter to dispatch the request " + l, "ERR_NOT_SUPPORT")
                    }
                    return r
                },
                adapters: tq
            };

            function tX(t) {
                if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new tG(null, t)
            }

            function t$(t) {
                tX(t), t.headers = tF.from(t.headers), t.data = tM.call(t, t.transformRequest), -1 !== ["post", "put", "patch"].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1);
                let e = tY.getAdapter(t.adapter || tk.adapter);
                return e(t).then(function(e) {
                    return tX(t), e.data = tM.call(t, t.transformResponse, e), e.headers = tF.from(e.headers), e
                }, function(e) {
                    return !tj(e) && (tX(t), e && e.response && (e.response.data = tM.call(t, t.transformResponse, e.response), e.response.headers = tF.from(e.response.headers))), Promise.reject(e)
                })
            }
            let t0 = t => t instanceof tF ? t.toJSON() : t;

            function t1(t, e) {
                e = e || {};
                let r = {};

                function n(t, e, r) {
                    return ti.isPlainObject(t) && ti.isPlainObject(e) ? ti.merge.call({
                        caseless: r
                    }, t, e) : ti.isPlainObject(e) ? ti.merge({}, e) : ti.isArray(e) ? e.slice() : e
                }

                function i(t, e, r) {
                    return ti.isUndefined(e) ? ti.isUndefined(t) ? void 0 : n(void 0, t, r) : n(t, e, r)
                }

                function s(t, e) {
                    if (!ti.isUndefined(e)) return n(void 0, e)
                }

                function a(t, e) {
                    return ti.isUndefined(e) ? ti.isUndefined(t) ? void 0 : n(void 0, t) : n(void 0, e)
                }

                function o(r, i, s) {
                    return s in e ? n(r, i) : s in t ? n(void 0, r) : void 0
                }
                let l = {
                    url: s,
                    method: s,
                    data: s,
                    baseURL: a,
                    transformRequest: a,
                    transformResponse: a,
                    paramsSerializer: a,
                    timeout: a,
                    timeoutMessage: a,
                    withCredentials: a,
                    withXSRFToken: a,
                    adapter: a,
                    responseType: a,
                    xsrfCookieName: a,
                    xsrfHeaderName: a,
                    onUploadProgress: a,
                    onDownloadProgress: a,
                    decompress: a,
                    maxContentLength: a,
                    maxBodyLength: a,
                    beforeRedirect: a,
                    transport: a,
                    httpAgent: a,
                    httpsAgent: a,
                    cancelToken: a,
                    socketPath: a,
                    responseEncoding: a,
                    validateStatus: o,
                    headers: (t, e) => i(t0(t), t0(e), !0)
                };
                return ti.forEach(Object.keys(Object.assign({}, t, e)), function(n) {
                    let s = l[n] || i,
                        a = s(t[n], e[n], n);
                    ti.isUndefined(a) && s !== o || (r[n] = a)
                }), r
            }
            let t2 = "1.6.7",
                t4 = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
                t4[t] = function(r) {
                    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t
                }
            });
            let t8 = {};
            t4.transitional = function(t, e, r) {
                function n(t, e) {
                    return "[Axios v" + t2 + "] Transitional option '" + t + "'" + e + (r ? ". " + r : "")
                }
                return (r, i, s) => {
                    if (!1 === t) throw new ts(n(i, " has been removed" + (e ? " in " + e : "")), ts.ERR_DEPRECATED);
                    return e && !t8[i] && (t8[i] = !0, console.warn(n(i, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(r, i, s)
                }
            };
            var t3 = {
                assertOptions: function(t, e, r) {
                    if ("object" != typeof t) throw new ts("options must be an object", ts.ERR_BAD_OPTION_VALUE);
                    let n = Object.keys(t),
                        i = n.length;
                    for (; i-- > 0;) {
                        let s = n[i],
                            a = e[s];
                        if (a) {
                            let o = t[s],
                                l = void 0 === o || a(o, s, t);
                            if (!0 !== l) throw new ts("option " + s + " must be " + l, ts.ERR_BAD_OPTION_VALUE);
                            continue
                        }
                        if (!0 !== r) throw new ts("Unknown option " + s, ts.ERR_BAD_OPTION)
                    }
                },
                validators: t4
            };
            let t5 = t3.validators;
            class t6 {
                constructor(t) {
                    this.defaults = t, this.interceptors = {
                        request: new tw,
                        response: new tw
                    }
                }
                async request(t, e) {
                    try {
                        return await this._request(t, e)
                    } catch (i) {
                        if (i instanceof Error) {
                            let r;
                            Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = Error();
                            let n = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                            i.stack ? n && !String(i.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (i.stack += "\n" + n) : i.stack = n
                        }
                        throw i
                    }
                }
                _request(t, e) {
                    let r, n;
                    "string" == typeof t ? (e = e || {}).url = t : e = t || {}, e = t1(this.defaults, e);
                    let {
                        transitional: i,
                        paramsSerializer: s,
                        headers: a
                    } = e;
                    void 0 !== i && t3.assertOptions(i, {
                        silentJSONParsing: t5.transitional(t5.boolean),
                        forcedJSONParsing: t5.transitional(t5.boolean),
                        clarifyTimeoutError: t5.transitional(t5.boolean)
                    }, !1), null != s && (ti.isFunction(s) ? e.paramsSerializer = {
                        serialize: s
                    } : t3.assertOptions(s, {
                        encode: t5.function,
                        serialize: t5.function
                    }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase();
                    let o = a && ti.merge(a.common, a[e.method]);
                    a && ti.forEach(["delete", "get", "head", "post", "put", "patch", "common"], t => {
                        delete a[t]
                    }), e.headers = tF.concat(o, a);
                    let l = [],
                        u = !0;
                    this.interceptors.request.forEach(function(t) {
                        ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) && (u = u && t.synchronous, l.unshift(t.fulfilled, t.rejected))
                    });
                    let c = [];
                    this.interceptors.response.forEach(function(t) {
                        c.push(t.fulfilled, t.rejected)
                    });
                    let h = 0;
                    if (!u) {
                        let f = [t$.bind(this), void 0];
                        for (f.unshift.apply(f, l), f.push.apply(f, c), n = f.length, r = Promise.resolve(e); h < n;) r = r.then(f[h++], f[h++]);
                        return r
                    }
                    n = l.length;
                    let d = e;
                    for (h = 0; h < n;) {
                        let p = l[h++],
                            g = l[h++];
                        try {
                            d = p(d)
                        } catch (m) {
                            g.call(this, m);
                            break
                        }
                    }
                    try {
                        r = t$.call(this, d)
                    } catch (y) {
                        return Promise.reject(y)
                    }
                    for (h = 0, n = c.length; h < n;) r = r.then(c[h++], c[h++]);
                    return r
                }
                getUri(t) {
                    t = t1(this.defaults, t);
                    let e = tQ(t.baseURL, t.url);
                    return tA(e, t.params, t.paramsSerializer)
                }
            }
            ti.forEach(["delete", "get", "head", "options"], function(t) {
                t6.prototype[t] = function(e, r) {
                    return this.request(t1(r || {}, {
                        method: t,
                        url: e,
                        data: (r || {}).data
                    }))
                }
            }), ti.forEach(["post", "put", "patch"], function(t) {
                function e(e) {
                    return function(r, n, i) {
                        return this.request(t1(i || {}, {
                            method: t,
                            headers: e ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: r,
                            data: n
                        }))
                    }
                }
                t6.prototype[t] = e(), t6.prototype[t + "Form"] = e(!0)
            });
            class t9 {
                constructor(t) {
                    let e;
                    if ("function" != typeof t) throw TypeError("executor must be a function.");
                    this.promise = new Promise(function(t) {
                        e = t
                    });
                    let r = this;
                    this.promise.then(t => {
                        if (!r._listeners) return;
                        let e = r._listeners.length;
                        for (; e-- > 0;) r._listeners[e](t);
                        r._listeners = null
                    }), this.promise.then = t => {
                        let e;
                        let n = new Promise(t => {
                            r.subscribe(t), e = t
                        }).then(t);
                        return n.cancel = function() {
                            r.unsubscribe(e)
                        }, n
                    }, t(function(t, n, i) {
                        r.reason || (r.reason = new tG(t, n, i), e(r.reason))
                    })
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason
                }
                subscribe(t) {
                    if (this.reason) {
                        t(this.reason);
                        return
                    }
                    this._listeners ? this._listeners.push(t) : this._listeners = [t]
                }
                unsubscribe(t) {
                    if (!this._listeners) return;
                    let e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
                }
                static source() {
                    let t;
                    let e = new t9(function(e) {
                        t = e
                    });
                    return {
                        token: e,
                        cancel: t
                    }
                }
            }
            let t7 = {
                Continue: 100,
                SwitchingProtocols: 101,
                Processing: 102,
                EarlyHints: 103,
                Ok: 200,
                Created: 201,
                Accepted: 202,
                NonAuthoritativeInformation: 203,
                NoContent: 204,
                ResetContent: 205,
                PartialContent: 206,
                MultiStatus: 207,
                AlreadyReported: 208,
                ImUsed: 226,
                MultipleChoices: 300,
                MovedPermanently: 301,
                Found: 302,
                SeeOther: 303,
                NotModified: 304,
                UseProxy: 305,
                Unused: 306,
                TemporaryRedirect: 307,
                PermanentRedirect: 308,
                BadRequest: 400,
                Unauthorized: 401,
                PaymentRequired: 402,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                NotAcceptable: 406,
                ProxyAuthenticationRequired: 407,
                RequestTimeout: 408,
                Conflict: 409,
                Gone: 410,
                LengthRequired: 411,
                PreconditionFailed: 412,
                PayloadTooLarge: 413,
                UriTooLong: 414,
                UnsupportedMediaType: 415,
                RangeNotSatisfiable: 416,
                ExpectationFailed: 417,
                ImATeapot: 418,
                MisdirectedRequest: 421,
                UnprocessableEntity: 422,
                Locked: 423,
                FailedDependency: 424,
                TooEarly: 425,
                UpgradeRequired: 426,
                PreconditionRequired: 428,
                TooManyRequests: 429,
                RequestHeaderFieldsTooLarge: 431,
                UnavailableForLegalReasons: 451,
                InternalServerError: 500,
                NotImplemented: 501,
                BadGateway: 502,
                ServiceUnavailable: 503,
                GatewayTimeout: 504,
                HttpVersionNotSupported: 505,
                VariantAlsoNegotiates: 506,
                InsufficientStorage: 507,
                LoopDetected: 508,
                NotExtended: 510,
                NetworkAuthenticationRequired: 511
            };
            Object.entries(t7).forEach(([t, e]) => {
                t7[e] = t
            });
            let et = function t(e) {
                let r = new t6(e),
                    n = o(t6.prototype.request, r);
                return ti.extend(n, t6.prototype, r, {
                    allOwnKeys: !0
                }), ti.extend(n, r, null, {
                    allOwnKeys: !0
                }), n.create = function(r) {
                    return t(t1(e, r))
                }, n
            }(tk);
            et.Axios = t6, et.CanceledError = tG, et.CancelToken = t9, et.isCancel = tj, et.VERSION = t2, et.toFormData = td, et.AxiosError = ts, et.Cancel = et.CanceledError, et.all = function(t) {
                return Promise.all(t)
            }, et.spread = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }, et.isAxiosError = function(t) {
                return ti.isObject(t) && !0 === t.isAxiosError
            }, et.mergeConfig = t1, et.AxiosHeaders = tF, et.formToJSON = t => tT(ti.isHTMLForm(t) ? new FormData(t) : t), et.getAdapter = tY.getAdapter, et.HttpStatusCode = t7, et.default = et;
            var ee = et
        },
        117: function(t, e, r) {
            "use strict";
            let n, i;
            r.d(e, {
                r6: function() {
                    return lI
                }
            });
            var s = r(2423),
                a = r(2229),
                o = r(455),
                l = r(5857);
            let u = new Uint8Array(32),
                c = ["then"],
                h = {};

            function f(t, e) {
                let r = Error(`deferred error during ABI decoding triggered accessing ${t}`);
                throw r.error = e, r
            }
            class d extends Array {#
                t;
                constructor(...t) {
                    let e = t[0],
                        r = t[1],
                        n = (t[2] || []).slice(),
                        i = !0;
                    e !== h && (r = t, n = [], i = !1), super(r.length), r.forEach((t, e) => {
                        this[e] = t
                    });
                    let s = n.reduce((t, e) => ("string" == typeof e && t.set(e, (t.get(e) || 0) + 1), t), new Map);
                    if (this.#t = Object.freeze(r.map((t, e) => {
                            let r = n[e];
                            return null != r && 1 === s.get(r) ? r : null
                        })), !i) return;
                    return Object.freeze(this), new Proxy(this, {
                        get: (t, e, r) => {
                            if ("string" == typeof e) {
                                if (e.match(/^[0-9]+$/)) {
                                    let n = (0, a.Dx)(e, "%index");
                                    if (n < 0 || n >= this.length) throw RangeError("out of result range");
                                    let i = t[n];
                                    return i instanceof Error && f(`index ${n}`, i), i
                                }
                                if (c.indexOf(e) >= 0) return Reflect.get(t, e, r);
                                let s = t[e];
                                if (s instanceof Function) return function(...e) {
                                    return s.apply(this === r ? t : this, e)
                                };
                                if (!(e in t)) return t.getValue.apply(this === r ? t : this, [e])
                            }
                            return Reflect.get(t, e, r)
                        }
                    })
                }
                toArray() {
                    let t = [];
                    return this.forEach((e, r) => {
                        e instanceof Error && f(`index ${r}`, e), t.push(e)
                    }), t
                }
                toObject() {
                    return this.#t.reduce((t, e, r) => ((0, s.hu)(null != e, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
                        operation: "toObject()"
                    }), e in t || (t[e] = this.getValue(e)), t), {})
                }
                slice(t, e) {
                    null == t && (t = 0), t < 0 && (t += this.length) < 0 && (t = 0), null == e && (e = this.length), e < 0 && (e += this.length) < 0 && (e = 0), e > this.length && (e = this.length);
                    let r = [],
                        n = [];
                    for (let i = t; i < e; i++) r.push(this[i]), n.push(this.#t[i]);
                    return new d(h, r, n)
                }
                filter(t, e) {
                    let r = [],
                        n = [];
                    for (let i = 0; i < this.length; i++) {
                        let s = this[i];
                        s instanceof Error && f(`index ${i}`, s), t.call(e, s, i, this) && (r.push(s), n.push(this.#t[i]))
                    }
                    return new d(h, r, n)
                }
                map(t, e) {
                    let r = [];
                    for (let n = 0; n < this.length; n++) {
                        let i = this[n];
                        i instanceof Error && f(`index ${n}`, i), r.push(t.call(e, i, n, this))
                    }
                    return r
                }
                getValue(t) {
                    let e = this.#t.indexOf(t);
                    if (-1 === e) return;
                    let r = this[e];
                    return r instanceof Error && f(`property ${JSON.stringify(t)}`, r.error), r
                }
                static fromItems(t, e) {
                    return new d(h, t, e)
                }
            }

            function p(t) {
                let e = (0, a.ot)(t);
                return (0, s.hu)(e.length <= 32, "value out-of-bounds", "BUFFER_OVERRUN", {
                    buffer: e,
                    length: 32,
                    offset: e.length
                }), 32 !== e.length && (e = (0, o.h_)((0, o.zo)([u.slice(e.length % 32), e]))), e
            }
            class g {
                name;
                type;
                localName;
                dynamic;
                constructor(t, e, r, n) {
                    (0, l.h)(this, {
                        name: t,
                        type: e,
                        localName: r,
                        dynamic: n
                    }, {
                        name: "string",
                        type: "string",
                        localName: "string",
                        dynamic: "boolean"
                    })
                }
                _throwError(t, e) {
                    (0, s.en)(!1, t, this.localName, e)
                }
            }
            class m {#
                e;#
                r;
                constructor() {
                    this.#e = [], this.#r = 0
                }
                get data() {
                    return (0, o.zo)(this.#e)
                }
                get length() {
                    return this.#r
                }#
                n(y) {
                    return this.#e.push(y), this.#r += y.length, y.length
                }
                appendWriter(t) {
                    return this.#n((0, o.h_)(t.data))
                }
                writeBytes(t) {
                    let e = (0, o.h_)(t),
                        r = e.length % 32;
                    return r && (e = (0, o.h_)((0, o.zo)([e, u.slice(r)]))), this.#n(e)
                }
                writeValue(t) {
                    return this.#n(p(t))
                }
                writeUpdatableValue() {
                    let t = this.#e.length;
                    return this.#e.push(u), this.#r += 32, e => {
                        this.#e[t] = p(e)
                    }
                }
            }
            class A {
                allowLoose;#
                e;#
                i;
                constructor(t, e) {
                    (0, l.h)(this, {
                        allowLoose: !!e
                    }), this.#e = (0, o.h_)(t), this.#i = 0
                }
                get data() {
                    return (0, o.Dv)(this.#e)
                }
                get dataLength() {
                    return this.#e.length
                }
                get consumed() {
                    return this.#i
                }
                get bytes() {
                    return new Uint8Array(this.#e)
                }#
                s(w, b, v) {
                    let E = 32 * Math.ceil(b / 32);
                    return this.#i + E > this.#e.length && (this.allowLoose && v && this.#i + b <= this.#e.length ? E = b : (0, s.hu)(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
                        buffer: (0, o.h_)(this.#e),
                        length: this.#e.length,
                        offset: this.#i + E
                    })), this.#e.slice(this.#i, this.#i + E)
                }
                subReader(t) {
                    return new A(this.#e.slice(this.#i + t), this.allowLoose)
                }
                readBytes(t, e) {
                    let r = this.#s(0, t, !!e);
                    return this.#i += r.length, r.slice(0, t)
                }
                readValue() {
                    return (0, a.Gh)(this.readBytes(32))
                }
                readIndex() {
                    return (0, a.He)(this.readBytes(32))
                }
            }

            function P(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw Error(`Wrong positive integer: ${t}`)
            }

            function x(t, ...e) {
                if (!(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                if (e.length > 0 && !e.includes(t.length)) throw TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
            }
            var C = {
                number: P,
                bool: function(t) {
                    if ("boolean" != typeof t) throw Error(`Expected boolean, not ${t}`)
                },
                bytes: x,
                hash: function(t) {
                    if ("function" != typeof t || "function" != typeof t.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                    P(t.outputLen), P(t.blockLen)
                },
                exists: function(t, e = !0) {
                    if (t.destroyed) throw Error("Hash instance has been destroyed");
                    if (e && t.finished) throw Error("Hash#digest() has already been called")
                },
                output: function(t, e) {
                    x(t);
                    let r = e.outputLen;
                    if (t.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
                }
            };
            let N = BigInt(4294967296 - 1),
                O = BigInt(32);

            function T(t, e = !1) {
                return e ? {
                    h: Number(t & N),
                    l: Number(t >> O & N)
                } : {
                    h: 0 | Number(t >> O & N),
                    l: 0 | Number(t & N)
                }
            }
            let k = (t, e) => BigInt(t >>> 0) << O | BigInt(e >>> 0);
            var B = {
                fromBig: T,
                split: function(t, e = !1) {
                    let r = new Uint32Array(t.length),
                        n = new Uint32Array(t.length);
                    for (let i = 0; i < t.length; i++) {
                        let {
                            h: s,
                            l: a
                        } = T(t[i], e);
                        [r[i], n[i]] = [s, a]
                    }
                    return [r, n]
                },
                toBig: k,
                shrSH: (t, e, r) => t >>> r,
                shrSL: (t, e, r) => t << 32 - r | e >>> r,
                rotrSH: (t, e, r) => t >>> r | e << 32 - r,
                rotrSL: (t, e, r) => t << 32 - r | e >>> r,
                rotrBH: (t, e, r) => t << 64 - r | e >>> r - 32,
                rotrBL: (t, e, r) => t >>> r - 32 | e << 64 - r,
                rotr32H: (t, e) => e,
                rotr32L: (t, e) => t,
                rotlSH: (t, e, r) => t << r | e >>> 32 - r,
                rotlSL: (t, e, r) => e << r | t >>> 32 - r,
                rotlBH: (t, e, r) => e << r - 32 | t >>> 64 - r,
                rotlBL: (t, e, r) => t << r - 32 | e >>> 64 - r,
                add: function(t, e, r, n) {
                    let i = (e >>> 0) + (n >>> 0);
                    return {
                        h: t + r + (i / 4294967296 | 0) | 0,
                        l: 0 | i
                    }
                },
                add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
                add3H: (t, e, r, n) => e + r + n + (t / 4294967296 | 0) | 0,
                add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
                add4H: (t, e, r, n, i) => e + r + n + i + (t / 4294967296 | 0) | 0,
                add5H: (t, e, r, n, i, s) => e + r + n + i + s + (t / 4294967296 | 0) | 0,
                add5L: (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0)
            };
            "object" == typeof self && "crypto" in self && self.crypto;
            let S = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
                I = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
                R = (t, e) => t << 32 - e | t >>> e,
                U = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
            if (!U) throw Error("Non little-endian hardware is not supported");

            function D(t) {
                if ("string" == typeof t && (t = function(t) {
                        if ("string" != typeof t) throw TypeError(`utf8ToBytes expected string, got ${typeof t}`);
                        return new TextEncoder().encode(t)
                    }(t)), !(t instanceof Uint8Array)) throw TypeError(`Expected input type is Uint8Array (got ${typeof t})`);
                return t
            }
            Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));
            class L {
                clone() {
                    return this._cloneInto()
                }
            }

            function F(t) {
                let e = e => t().update(D(e)).digest(),
                    r = t();
                return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e
            }
            let [M, j, G] = [
                [],
                [],
                []
            ], H = BigInt(0), Q = BigInt(1), _ = BigInt(2), V = BigInt(7), z = BigInt(256), J = BigInt(113);
            for (let K = 0, q = Q, W = 1, Z = 0; K < 24; K++) {
                [W, Z] = [Z, (2 * W + 3 * Z) % 5], M.push(2 * (5 * Z + W)), j.push((K + 1) * (K + 2) / 2 % 64);
                let Y = H;
                for (let X = 0; X < 7; X++)(q = (q << Q ^ (q >> V) * J) % z) & _ && (Y ^= Q << (Q << BigInt(X)) - Q);
                G.push(Y)
            }
            let [$, tt] = B.split(G, !0), te = (t, e, r) => r > 32 ? B.rotlBH(t, e, r) : B.rotlSH(t, e, r), tr = (t, e, r) => r > 32 ? B.rotlBL(t, e, r) : B.rotlSL(t, e, r);
            class tn extends L {
                constructor(t, e, r, n = !1, i = 24) {
                    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = r, this.enableXOF = n, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, C.number(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = S(this.state)
                }
                keccak() {
                    ! function(t, e = 24) {
                        let r = new Uint32Array(10);
                        for (let n = 24 - e; n < 24; n++) {
                            for (let i = 0; i < 10; i++) r[i] = t[i] ^ t[i + 10] ^ t[i + 20] ^ t[i + 30] ^ t[i + 40];
                            for (let s = 0; s < 10; s += 2) {
                                let a = (s + 8) % 10,
                                    o = (s + 2) % 10,
                                    l = r[o],
                                    u = r[o + 1],
                                    c = te(l, u, 1) ^ r[a],
                                    h = tr(l, u, 1) ^ r[a + 1];
                                for (let f = 0; f < 50; f += 10) t[s + f] ^= c, t[s + f + 1] ^= h
                            }
                            let d = t[2],
                                p = t[3];
                            for (let g = 0; g < 24; g++) {
                                let m = j[g],
                                    y = te(d, p, m),
                                    A = tr(d, p, m),
                                    w = M[g];
                                d = t[w], p = t[w + 1], t[w] = y, t[w + 1] = A
                            }
                            for (let b = 0; b < 50; b += 10) {
                                for (let v = 0; v < 10; v++) r[v] = t[b + v];
                                for (let E = 0; E < 10; E++) t[b + E] ^= ~r[(E + 2) % 10] & r[(E + 4) % 10]
                            }
                            t[0] ^= $[n], t[1] ^= tt[n]
                        }
                        r.fill(0)
                    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(t) {
                    C.exists(this);
                    let {
                        blockLen: e,
                        state: r
                    } = this;
                    t = D(t);
                    let n = t.length;
                    for (let i = 0; i < n;) {
                        let s = Math.min(e - this.pos, n - i);
                        for (let a = 0; a < s; a++) r[this.pos++] ^= t[i++];
                        this.pos === e && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: t,
                        suffix: e,
                        pos: r,
                        blockLen: n
                    } = this;
                    t[r] ^= e, (128 & e) != 0 && r === n - 1 && this.keccak(), t[n - 1] ^= 128, this.keccak()
                }
                writeInto(t) {
                    C.exists(this, !1), C.bytes(t), this.finish();
                    let e = this.state,
                        {
                            blockLen: r
                        } = this;
                    for (let n = 0, i = t.length; n < i;) {
                        this.posOut >= r && this.keccak();
                        let s = Math.min(r - this.posOut, i - n);
                        t.set(e.subarray(this.posOut, this.posOut + s), n), this.posOut += s, n += s
                    }
                    return t
                }
                xofInto(t) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(t)
                }
                xof(t) {
                    return C.number(t), this.xofInto(new Uint8Array(t))
                }
                digestInto(t) {
                    if (C.output(t, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(t), this.destroy(), t
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(t) {
                    let {
                        blockLen: e,
                        suffix: r,
                        outputLen: n,
                        rounds: i,
                        enableXOF: s
                    } = this;
                    return t || (t = new tn(e, r, n, s, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = n, t.enableXOF = s, t.destroyed = this.destroyed, t
                }
            }
            let ti = (t, e, r) => F(() => new tn(e, t, r));
            ti(6, 144, 28), ti(6, 136, 32), ti(6, 104, 48), ti(6, 72, 64), ti(1, 144, 28);
            let ts = ti(1, 136, 32);
            ti(1, 104, 48), ti(1, 72, 64);
            let ta = (t, e, r) => (function(t) {
                let e = (e, r) => t(r).update(D(e)).digest(),
                    r = t({});
                return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = e => t(e), e
            })((n = {}) => new tn(e, t, void 0 === n.dkLen ? r : n.dkLen, !0));
            ta(31, 168, 16), ta(31, 136, 32);
            let to = !1,
                tl = function(t) {
                    return ts(t)
                },
                tu = tl;

            function tc(t) {
                let e = (0, o.Pw)(t, "data");
                return (0, o.Dv)(tu(e))
            }
            tc._ = tl, tc.lock = function() {
                to = !0
            }, tc.register = function(t) {
                if (to) throw TypeError("keccak256 is locked");
                tu = t
            }, Object.freeze(tc);
            let th = BigInt(0),
                tf = BigInt(36);

            function td(t) {
                t = t.toLowerCase();
                let e = t.substring(2).split(""),
                    r = new Uint8Array(40);
                for (let n = 0; n < 40; n++) r[n] = e[n].charCodeAt(0);
                let i = (0, o.Pw)(tc(r));
                for (let s = 0; s < 40; s += 2) i[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()), (15 & i[s >> 1]) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
                return "0x" + e.join("")
            }
            let tp = {};
            for (let tg = 0; tg < 10; tg++) tp[String(tg)] = String(tg);
            for (let tm = 0; tm < 26; tm++) tp[String.fromCharCode(65 + tm)] = String(10 + tm);
            let ty = function() {
                let t = {};
                for (let e = 0; e < 36; e++) {
                    let r = "0123456789abcdefghijklmnopqrstuvwxyz" [e];
                    t[r] = BigInt(e)
                }
                return t
            }();

            function tA(t) {
                if ((0, s.en)("string" == typeof t, "invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
                    t.startsWith("0x") || (t = "0x" + t);
                    let e = td(t);
                    return (0, s.en)(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t, "bad address checksum", "address", t), e
                }
                if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    (0, s.en)(t.substring(2, 4) === function(t) {
                        let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => tp[t]).join("");
                        for (; e.length >= 15;) {
                            let r = e.substring(0, 15);
                            e = parseInt(r, 10) % 97 + e.substring(r.length)
                        }
                        let n = String(98 - parseInt(e, 10) % 97);
                        for (; n.length < 2;) n = "0" + n;
                        return n
                    }(t), "bad icap checksum", "address", t);
                    let r = (function(t) {
                        t = t.toLowerCase();
                        let e = th;
                        for (let r = 0; r < t.length; r++) e = e * tf + ty[t[r]];
                        return e
                    })(t.substring(4)).toString(16);
                    for (; r.length < 40;) r = "0" + r;
                    return td("0x" + r)
                }(0, s.en)(!1, "invalid address", "address", t)
            }
            let tw = {};

            function tb(t, e) {
                let r = !1;
                return e < 0 && (r = !0, e *= -1), new tP(tw, `${r?"":"u"}int${e}`, t, {
                    signed: r,
                    width: e
                })
            }

            function tv(t, e) {
                return new tP(tw, `bytes${e||""}`, t, {
                    size: e
                })
            }
            let tE = Symbol.for("_ethers_typed");
            class tP {
                type;
                value;#
                a;
                _typedSymbol;
                constructor(t, e, r, n) {
                    null == n && (n = null), (0, s.NK)(tw, t, "Typed"), (0, l.h)(this, {
                        _typedSymbol: tE,
                        type: e,
                        value: r
                    }), this.#a = n, this.format()
                }
                format() {
                    if ("array" === this.type || "dynamicArray" === this.type) throw Error("");
                    return "tuple" === this.type ? `tuple(${this.value.map(t=>t.format()).join(",")})` : this.type
                }
                defaultValue() {
                    return 0
                }
                minValue() {
                    return 0
                }
                maxValue() {
                    return 0
                }
                isBigInt() {
                    return !!this.type.match(/^u?int[0-9]+$/)
                }
                isData() {
                    return this.type.startsWith("bytes")
                }
                isString() {
                    return "string" === this.type
                }
                get tupleName() {
                    if ("tuple" !== this.type) throw TypeError("not a tuple");
                    return this.#a
                }
                get arrayLength() {
                    if ("array" !== this.type) throw TypeError("not an array");
                    return !0 === this.#a ? -1 : !1 === this.#a ? this.value.length : null
                }
                static from(t, e) {
                    return new tP(tw, t, e)
                }
                static uint8(t) {
                    return tb(t, 8)
                }
                static uint16(t) {
                    return tb(t, 16)
                }
                static uint24(t) {
                    return tb(t, 24)
                }
                static uint32(t) {
                    return tb(t, 32)
                }
                static uint40(t) {
                    return tb(t, 40)
                }
                static uint48(t) {
                    return tb(t, 48)
                }
                static uint56(t) {
                    return tb(t, 56)
                }
                static uint64(t) {
                    return tb(t, 64)
                }
                static uint72(t) {
                    return tb(t, 72)
                }
                static uint80(t) {
                    return tb(t, 80)
                }
                static uint88(t) {
                    return tb(t, 88)
                }
                static uint96(t) {
                    return tb(t, 96)
                }
                static uint104(t) {
                    return tb(t, 104)
                }
                static uint112(t) {
                    return tb(t, 112)
                }
                static uint120(t) {
                    return tb(t, 120)
                }
                static uint128(t) {
                    return tb(t, 128)
                }
                static uint136(t) {
                    return tb(t, 136)
                }
                static uint144(t) {
                    return tb(t, 144)
                }
                static uint152(t) {
                    return tb(t, 152)
                }
                static uint160(t) {
                    return tb(t, 160)
                }
                static uint168(t) {
                    return tb(t, 168)
                }
                static uint176(t) {
                    return tb(t, 176)
                }
                static uint184(t) {
                    return tb(t, 184)
                }
                static uint192(t) {
                    return tb(t, 192)
                }
                static uint200(t) {
                    return tb(t, 200)
                }
                static uint208(t) {
                    return tb(t, 208)
                }
                static uint216(t) {
                    return tb(t, 216)
                }
                static uint224(t) {
                    return tb(t, 224)
                }
                static uint232(t) {
                    return tb(t, 232)
                }
                static uint240(t) {
                    return tb(t, 240)
                }
                static uint248(t) {
                    return tb(t, 248)
                }
                static uint256(t) {
                    return tb(t, 256)
                }
                static uint(t) {
                    return tb(t, 256)
                }
                static int8(t) {
                    return tb(t, -8)
                }
                static int16(t) {
                    return tb(t, -16)
                }
                static int24(t) {
                    return tb(t, -24)
                }
                static int32(t) {
                    return tb(t, -32)
                }
                static int40(t) {
                    return tb(t, -40)
                }
                static int48(t) {
                    return tb(t, -48)
                }
                static int56(t) {
                    return tb(t, -56)
                }
                static int64(t) {
                    return tb(t, -64)
                }
                static int72(t) {
                    return tb(t, -72)
                }
                static int80(t) {
                    return tb(t, -80)
                }
                static int88(t) {
                    return tb(t, -88)
                }
                static int96(t) {
                    return tb(t, -96)
                }
                static int104(t) {
                    return tb(t, -104)
                }
                static int112(t) {
                    return tb(t, -112)
                }
                static int120(t) {
                    return tb(t, -120)
                }
                static int128(t) {
                    return tb(t, -128)
                }
                static int136(t) {
                    return tb(t, -136)
                }
                static int144(t) {
                    return tb(t, -144)
                }
                static int152(t) {
                    return tb(t, -152)
                }
                static int160(t) {
                    return tb(t, -160)
                }
                static int168(t) {
                    return tb(t, -168)
                }
                static int176(t) {
                    return tb(t, -176)
                }
                static int184(t) {
                    return tb(t, -184)
                }
                static int192(t) {
                    return tb(t, -192)
                }
                static int200(t) {
                    return tb(t, -200)
                }
                static int208(t) {
                    return tb(t, -208)
                }
                static int216(t) {
                    return tb(t, -216)
                }
                static int224(t) {
                    return tb(t, -224)
                }
                static int232(t) {
                    return tb(t, -232)
                }
                static int240(t) {
                    return tb(t, -240)
                }
                static int248(t) {
                    return tb(t, -248)
                }
                static int256(t) {
                    return tb(t, -256)
                }
                static int(t) {
                    return tb(t, -256)
                }
                static bytes1(t) {
                    return tv(t, 1)
                }
                static bytes2(t) {
                    return tv(t, 2)
                }
                static bytes3(t) {
                    return tv(t, 3)
                }
                static bytes4(t) {
                    return tv(t, 4)
                }
                static bytes5(t) {
                    return tv(t, 5)
                }
                static bytes6(t) {
                    return tv(t, 6)
                }
                static bytes7(t) {
                    return tv(t, 7)
                }
                static bytes8(t) {
                    return tv(t, 8)
                }
                static bytes9(t) {
                    return tv(t, 9)
                }
                static bytes10(t) {
                    return tv(t, 10)
                }
                static bytes11(t) {
                    return tv(t, 11)
                }
                static bytes12(t) {
                    return tv(t, 12)
                }
                static bytes13(t) {
                    return tv(t, 13)
                }
                static bytes14(t) {
                    return tv(t, 14)
                }
                static bytes15(t) {
                    return tv(t, 15)
                }
                static bytes16(t) {
                    return tv(t, 16)
                }
                static bytes17(t) {
                    return tv(t, 17)
                }
                static bytes18(t) {
                    return tv(t, 18)
                }
                static bytes19(t) {
                    return tv(t, 19)
                }
                static bytes20(t) {
                    return tv(t, 20)
                }
                static bytes21(t) {
                    return tv(t, 21)
                }
                static bytes22(t) {
                    return tv(t, 22)
                }
                static bytes23(t) {
                    return tv(t, 23)
                }
                static bytes24(t) {
                    return tv(t, 24)
                }
                static bytes25(t) {
                    return tv(t, 25)
                }
                static bytes26(t) {
                    return tv(t, 26)
                }
                static bytes27(t) {
                    return tv(t, 27)
                }
                static bytes28(t) {
                    return tv(t, 28)
                }
                static bytes29(t) {
                    return tv(t, 29)
                }
                static bytes30(t) {
                    return tv(t, 30)
                }
                static bytes31(t) {
                    return tv(t, 31)
                }
                static bytes32(t) {
                    return tv(t, 32)
                }
                static address(t) {
                    return new tP(tw, "address", t)
                }
                static bool(t) {
                    return new tP(tw, "bool", !!t)
                }
                static bytes(t) {
                    return new tP(tw, "bytes", t)
                }
                static string(t) {
                    return new tP(tw, "string", t)
                }
                static array(t, e) {
                    throw Error("not implemented yet")
                }
                static tuple(t, e) {
                    throw Error("not implemented yet")
                }
                static overrides(t) {
                    return new tP(tw, "overrides", Object.assign({}, t))
                }
                static isTyped(t) {
                    return t && "object" == typeof t && "_typedSymbol" in t && t._typedSymbol === tE
                }
                static dereference(t, e) {
                    if (tP.isTyped(t)) {
                        if (t.type !== e) throw Error(`invalid type: expecetd ${e}, got ${t.type}`);
                        return t.value
                    }
                    return t
                }
            }
            class tx extends g {
                constructor(t) {
                    super("address", "address", t, !1)
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000"
                }
                encode(t, e) {
                    let r = tP.dereference(e, "string");
                    try {
                        r = tA(r)
                    } catch (n) {
                        return this._throwError(n.message, e)
                    }
                    return t.writeValue(r)
                }
                decode(t) {
                    return tA((0, a.m9)(t.readValue(), 20))
                }
            }
            class tC extends g {
                coder;
                constructor(t) {
                    super(t.name, t.type, "_", t.dynamic), this.coder = t
                }
                defaultValue() {
                    return this.coder.defaultValue()
                }
                encode(t, e) {
                    return this.coder.encode(t, e)
                }
                decode(t) {
                    return this.coder.decode(t)
                }
            }

            function tN(t, e, r) {
                let n = [];
                if (Array.isArray(r)) n = r;
                else if (r && "object" == typeof r) {
                    let i = {};
                    n = e.map(t => {
                        let e = t.localName;
                        return (0, s.hu)(e, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
                            argument: "values",
                            info: {
                                coder: t
                            },
                            value: r
                        }), (0, s.hu)(!i[e], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
                            argument: "values",
                            info: {
                                coder: t
                            },
                            value: r
                        }), i[e] = !0, r[e]
                    })
                } else(0, s.en)(!1, "invalid tuple value", "tuple", r);
                (0, s.en)(e.length === n.length, "types/value length mismatch", "tuple", r);
                let a = new m,
                    o = new m,
                    l = [];
                return e.forEach((t, e) => {
                    let r = n[e];
                    if (t.dynamic) {
                        let i = o.length;
                        t.encode(o, r);
                        let s = a.writeUpdatableValue();
                        l.push(t => {
                            s(t + i)
                        })
                    } else t.encode(a, r)
                }), l.forEach(t => {
                    t(a.length)
                }), t.appendWriter(a) + t.appendWriter(o)
            }

            function tO(t, e) {
                let r = [],
                    n = [],
                    i = t.subReader(0);
                return e.forEach(e => {
                    let a = null;
                    if (e.dynamic) {
                        let o = t.readIndex(),
                            l = i.subReader(o);
                        try {
                            a = e.decode(l)
                        } catch (u) {
                            if ((0, s.VZ)(u, "BUFFER_OVERRUN")) throw u;
                            (a = u).baseType = e.name, a.name = e.localName, a.type = e.type
                        }
                    } else try {
                        a = e.decode(t)
                    } catch (c) {
                        if ((0, s.VZ)(c, "BUFFER_OVERRUN")) throw c;
                        (a = c).baseType = e.name, a.name = e.localName, a.type = e.type
                    }
                    if (void 0 == a) throw Error("investigate");
                    r.push(a), n.push(e.localName || null)
                }), d.fromItems(r, n)
            }
            class tT extends g {
                coder;
                length;
                constructor(t, e, r) {
                    let n = t.type + "[" + (e >= 0 ? e : "") + "]",
                        i = -1 === e || t.dynamic;
                    super("array", n, r, i), (0, l.h)(this, {
                        coder: t,
                        length: e
                    })
                }
                defaultValue() {
                    let t = this.coder.defaultValue(),
                        e = [];
                    for (let r = 0; r < this.length; r++) e.push(t);
                    return e
                }
                encode(t, e) {
                    let r = tP.dereference(e, "array");
                    Array.isArray(r) || this._throwError("expected array value", r);
                    let n = this.length; - 1 === n && (n = r.length, t.writeValue(r.length)), (0, s.fG)(r.length, n, "coder array" + (this.localName ? " " + this.localName : ""));
                    let i = [];
                    for (let a = 0; a < r.length; a++) i.push(this.coder);
                    return tN(t, i, r)
                }
                decode(t) {
                    let e = this.length; - 1 === e && (e = t.readIndex(), (0, s.hu)(32 * e <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
                        buffer: t.bytes,
                        offset: 32 * e,
                        length: t.dataLength
                    }));
                    let r = [];
                    for (let n = 0; n < e; n++) r.push(new tC(this.coder));
                    return tO(t, r)
                }
            }
            class tk extends g {
                constructor(t) {
                    super("bool", "bool", t, !1)
                }
                defaultValue() {
                    return !1
                }
                encode(t, e) {
                    let r = tP.dereference(e, "bool");
                    return t.writeValue(r ? 1 : 0)
                }
                decode(t) {
                    return !!t.readValue()
                }
            }
            class tB extends g {
                constructor(t, e) {
                    super(t, t, e, !0)
                }
                defaultValue() {
                    return "0x"
                }
                encode(t, e) {
                    return e = (0, o.h_)(e), t.writeValue(e.length) + t.writeBytes(e)
                }
                decode(t) {
                    return t.readBytes(t.readIndex(), !0)
                }
            }
            class tS extends tB {
                constructor(t) {
                    super("bytes", t)
                }
                decode(t) {
                    return (0, o.Dv)(super.decode(t))
                }
            }
            class tI extends g {
                size;
                constructor(t, e) {
                    let r = "bytes" + String(t);
                    super(r, r, e, !1), (0, l.h)(this, {
                        size: t
                    }, {
                        size: "number"
                    })
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
                encode(t, e) {
                    let r = (0, o.h_)(tP.dereference(e, this.type));
                    return r.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(r)
                }
                decode(t) {
                    return (0, o.Dv)(t.readBytes(this.size))
                }
            }
            let tR = new Uint8Array([]);
            class tU extends g {
                constructor(t) {
                    super("null", "", t, !1)
                }
                defaultValue() {
                    return null
                }
                encode(t, e) {
                    return null != e && this._throwError("not null", e), t.writeBytes(tR)
                }
                decode(t) {
                    return t.readBytes(0), null
                }
            }
            let tD = BigInt(0),
                tL = BigInt(1),
                tF = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            class tM extends g {
                size;
                signed;
                constructor(t, e, r) {
                    let n = (e ? "int" : "uint") + 8 * t;
                    super(n, n, r, !1), (0, l.h)(this, {
                        size: t,
                        signed: e
                    }, {
                        size: "number",
                        signed: "boolean"
                    })
                }
                defaultValue() {
                    return 0
                }
                encode(t, e) {
                    let r = (0, a.yT)(tP.dereference(e, this.type)),
                        n = (0, a.sS)(tF, 256);
                    if (this.signed) {
                        let i = (0, a.sS)(n, 8 * this.size - 1);
                        (r > i || r < -(i + tL)) && this._throwError("value out-of-bounds", e), r = (0, a.$j)(r, 256)
                    } else(r < tD || r > (0, a.sS)(n, 8 * this.size)) && this._throwError("value out-of-bounds", e);
                    return t.writeValue(r)
                }
                decode(t) {
                    let e = (0, a.sS)(t.readValue(), 8 * this.size);
                    return this.signed && (e = (0, a._Y)(e, 8 * this.size)), e
                }
            }

            function tj(t, e, r, n, i) {
                if ("BAD_PREFIX" === t || "UNEXPECTED_CONTINUE" === t) {
                    let s = 0;
                    for (let a = e + 1; a < r.length && r[a] >> 6 == 2; a++) s++;
                    return s
                }
                return "OVERRUN" === t ? r.length - e - 1 : 0
            }
            let tG = Object.freeze({
                error: function(t, e, r, n, i) {
                    (0, s.en)(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", r)
                },
                ignore: tj,
                replace: function(t, e, r, n, i) {
                    return "OVERLONG" === t ? ((0, s.en)("number" == typeof i, "invalid bad code point for replacement", "badCodepoint", i), n.push(i), 0) : (n.push(65533), tj(t, e, r, n, i))
                }
            });

            function tH(t, e) {
                null != e && ((0, s.fA)(e), t = t.normalize(e));
                let r = [];
                for (let n = 0; n < t.length; n++) {
                    let i = t.charCodeAt(n);
                    if (i < 128) r.push(i);
                    else if (i < 2048) r.push(i >> 6 | 192), r.push(63 & i | 128);
                    else if ((64512 & i) == 55296) {
                        n++;
                        let a = t.charCodeAt(n);
                        (0, s.en)(n < t.length && (64512 & a) == 56320, "invalid surrogate pair", "str", t);
                        let o = 65536 + ((1023 & i) << 10) + (1023 & a);
                        r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                    } else r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(63 & i | 128)
                }
                return new Uint8Array(r)
            }

            function tQ(t, e) {
                return (function(t, e) {
                    null == e && (e = tG.error);
                    let r = (0, o.Pw)(t, "bytes"),
                        n = [],
                        i = 0;
                    for (; i < r.length;) {
                        let s = r[i++];
                        if (s >> 7 == 0) {
                            n.push(s);
                            continue
                        }
                        let a = null,
                            l = null;
                        if ((224 & s) == 192) a = 1, l = 127;
                        else if ((240 & s) == 224) a = 2, l = 2047;
                        else if ((248 & s) == 240) a = 3, l = 65535;
                        else {
                            (192 & s) == 128 ? i += e("UNEXPECTED_CONTINUE", i - 1, r, n) : i += e("BAD_PREFIX", i - 1, r, n);
                            continue
                        }
                        if (i - 1 + a >= r.length) {
                            i += e("OVERRUN", i - 1, r, n);
                            continue
                        }
                        let u = s & (1 << 8 - a - 1) - 1;
                        for (let c = 0; c < a; c++) {
                            let h = r[i];
                            if ((192 & h) != 128) {
                                i += e("MISSING_CONTINUE", i, r, n), u = null;
                                break
                            }
                            u = u << 6 | 63 & h, i++
                        }
                        if (null !== u) {
                            if (u > 1114111) {
                                i += e("OUT_OF_RANGE", i - 1 - a, r, n, u);
                                continue
                            }
                            if (u >= 55296 && u <= 57343) {
                                i += e("UTF16_SURROGATE", i - 1 - a, r, n, u);
                                continue
                            }
                            if (u <= l) {
                                i += e("OVERLONG", i - 1 - a, r, n, u);
                                continue
                            }
                            n.push(u)
                        }
                    }
                    return n
                })(t, e).map(t => t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10 & 1023) + 55296, (1023 & t) + 56320)).join("")
            }
            class t_ extends tB {
                constructor(t) {
                    super("string", t)
                }
                defaultValue() {
                    return ""
                }
                encode(t, e) {
                    return super.encode(t, tH(tP.dereference(e, "string")))
                }
                decode(t) {
                    return tQ(super.decode(t))
                }
            }
            class tV extends g {
                coders;
                constructor(t, e) {
                    let r = !1,
                        n = [];
                    t.forEach(t => {
                        t.dynamic && (r = !0), n.push(t.type)
                    });
                    let i = "tuple(" + n.join(",") + ")";
                    super("tuple", i, e, r), (0, l.h)(this, {
                        coders: Object.freeze(t.slice())
                    })
                }
                defaultValue() {
                    let t = [];
                    this.coders.forEach(e => {
                        t.push(e.defaultValue())
                    });
                    let e = this.coders.reduce((t, e) => {
                        let r = e.localName;
                        return r && (t[r] || (t[r] = 0), t[r]++), t
                    }, {});
                    return this.coders.forEach((r, n) => {
                        let i = r.localName;
                        i && 1 === e[i] && ("length" === i && (i = "_length"), null == t[i] && (t[i] = t[n]))
                    }), Object.freeze(t)
                }
                encode(t, e) {
                    let r = tP.dereference(e, "tuple");
                    return tN(t, this.coders, r)
                }
                decode(t) {
                    return tO(t, this.coders)
                }
            }

            function tz(t) {
                return tc(tH(t))
            }

            function tJ(t) {
                let e = new Set;
                return t.forEach(t => e.add(t)), Object.freeze(e)
            }
            let tK = "constant external internal payable private public pure view",
                tq = tJ(tK.split(" ")),
                tW = "constructor error event fallback function receive struct",
                tZ = tJ(tW.split(" ")),
                tY = "calldata memory storage payable indexed",
                tX = tJ(tY.split(" ")),
                t$ = [tW, tY, "tuple returns", tK].join(" "),
                t0 = tJ(t$.split(" ")),
                t1 = {
                    "(": "OPEN_PAREN",
                    ")": "CLOSE_PAREN",
                    "[": "OPEN_BRACKET",
                    "]": "CLOSE_BRACKET",
                    ",": "COMMA",
                    "@": "AT"
                },
                t2 = RegExp("^(\\s*)"),
                t4 = RegExp("^([0-9]+)"),
                t8 = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
                t3 = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
                t5 = RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
            class t6 {#
                i;#
                o;
                get offset() {
                    return this.#i
                }
                get length() {
                    return this.#o.length - this.#i
                }
                constructor(t) {
                    this.#i = 0, this.#o = t.slice()
                }
                clone() {
                    return new t6(this.#o)
                }
                reset() {
                    this.#i = 0
                }#
                l(t9 = 0, t7 = 0) {
                    return new t6(this.#o.slice(t9, t7).map(t => Object.freeze(Object.assign({}, t, {
                        match: t.match - t9,
                        linkBack: t.linkBack - t9,
                        linkNext: t.linkNext - t9
                    }))))
                }
                popKeyword(t) {
                    let e = this.peek();
                    if ("KEYWORD" !== e.type || !t.has(e.text)) throw Error(`expected keyword ${e.text}`);
                    return this.pop().text
                }
                popType(t) {
                    if (this.peek().type !== t) throw Error(`expected ${t}; got ${JSON.stringify(this.peek())}`);
                    return this.pop().text
                }
                popParen() {
                    let t = this.peek();
                    if ("OPEN_PAREN" !== t.type) throw Error("bad start");
                    let e = this.#l(this.#i + 1, t.match + 1);
                    return this.#i = t.match + 1, e
                }
                popParams() {
                    let t = this.peek();
                    if ("OPEN_PAREN" !== t.type) throw Error("bad start");
                    let e = [];
                    for (; this.#i < t.match - 1;) {
                        let r = this.peek().linkNext;
                        e.push(this.#l(this.#i + 1, r)), this.#i = r
                    }
                    return this.#i = t.match + 1, e
                }
                peek() {
                    if (this.#i >= this.#o.length) throw Error("out-of-bounds");
                    return this.#o[this.#i]
                }
                peekKeyword(t) {
                    let e = this.peekType("KEYWORD");
                    return null != e && t.has(e) ? e : null
                }
                peekType(t) {
                    if (0 === this.length) return null;
                    let e = this.peek();
                    return e.type === t ? e.text : null
                }
                pop() {
                    let t = this.peek();
                    return this.#i++, t
                }
                toString() {
                    let t = [];
                    for (let e = this.#i; e < this.#o.length; e++) {
                        let r = this.#o[e];
                        t.push(`${r.type}:${r.text}`)
                    }
                    return `<TokenString ${t.join(" ")}>`
                }
            }

            function et(t) {
                let e = [],
                    r = e => {
                        let r = s < t.length ? JSON.stringify(t[s]) : "$EOI";
                        throw Error(`invalid token ${r} at ${s}: ${e}`)
                    },
                    n = [],
                    i = [],
                    s = 0;
                for (; s < t.length;) {
                    let o = t.substring(s),
                        l = o.match(t2);
                    l && (s += l[1].length, o = t.substring(s));
                    let u = {
                        depth: n.length,
                        linkBack: -1,
                        linkNext: -1,
                        match: -1,
                        type: "",
                        text: "",
                        offset: s,
                        value: -1
                    };
                    e.push(u);
                    let c = t1[o[0]] || "";
                    if (c) {
                        if (u.type = c, u.text = o[0], s++, "OPEN_PAREN" === c) n.push(e.length - 1), i.push(e.length - 1);
                        else if ("CLOSE_PAREN" == c) 0 === n.length && r("no matching open bracket"), u.match = n.pop(), e[u.match].match = e.length - 1, u.depth--, u.linkBack = i.pop(), e[u.linkBack].linkNext = e.length - 1;
                        else if ("COMMA" === c) u.linkBack = i.pop(), e[u.linkBack].linkNext = e.length - 1, i.push(e.length - 1);
                        else if ("OPEN_BRACKET" === c) u.type = "BRACKET";
                        else if ("CLOSE_BRACKET" === c) {
                            let h = e.pop().text;
                            if (e.length > 0 && "NUMBER" === e[e.length - 1].type) {
                                let f = e.pop().text;
                                h = f + h, e[e.length - 1].value = (0, a.Dx)(f)
                            }
                            if (0 === e.length || "BRACKET" !== e[e.length - 1].type) throw Error("missing opening bracket");
                            e[e.length - 1].text += h
                        }
                        continue
                    }
                    if (l = o.match(t8)) {
                        if (u.text = l[1], s += u.text.length, t0.has(u.text)) {
                            u.type = "KEYWORD";
                            continue
                        }
                        if (u.text.match(t5)) {
                            u.type = "TYPE";
                            continue
                        }
                        u.type = "ID";
                        continue
                    }
                    if (l = o.match(t4)) {
                        u.text = l[1], u.type = "NUMBER", s += u.text.length;
                        continue
                    }
                    throw Error(`unexpected token ${JSON.stringify(o[0])} at position ${s}`)
                }
                return new t6(e.map(t => Object.freeze(t)))
            }

            function ee(t, e) {
                let r = [];
                for (let n in e.keys()) t.has(n) && r.push(n);
                if (r.length > 1) throw Error(`conflicting types: ${r.join(", ")}`)
            }

            function er(t, e) {
                if (e.peekKeyword(tZ)) {
                    let r = e.pop().text;
                    if (r !== t) throw Error(`expected ${t}, got ${r}`)
                }
                return e.popType("ID")
            }

            function en(t, e) {
                let r = new Set;
                for (;;) {
                    let n = t.peekType("KEYWORD");
                    if (null == n || e && !e.has(n)) break;
                    if (t.pop(), r.has(n)) throw Error(`duplicate keywords: ${JSON.stringify(n)}`);
                    r.add(n)
                }
                return Object.freeze(r)
            }

            function ei(t) {
                let e = en(t, tq);
                return (ee(e, tJ("constant payable nonpayable".split(" "))), ee(e, tJ("pure view payable nonpayable".split(" "))), e.has("view")) ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable"
            }

            function es(t, e) {
                return t.popParams().map(t => ew.from(t, e))
            }

            function ea(t) {
                if (t.peekType("AT")) {
                    if (t.pop(), t.peekType("NUMBER")) return (0, a.yT)(t.pop().text);
                    throw Error("invalid gas")
                }
                return null
            }

            function eo(t) {
                if (t.length) throw Error(`unexpected tokens: ${t.toString()}`)
            }
            let el = RegExp(/^(.*)\[([0-9]*)\]$/);

            function eu(t) {
                let e = t.match(t5);
                if ((0, s.en)(e, "invalid type", "type", t), "uint" === t) return "uint256";
                if ("int" === t) return "int256";
                if (e[2]) {
                    let r = parseInt(e[2]);
                    (0, s.en)(0 !== r && r <= 32, "invalid bytes length", "type", t)
                } else if (e[3]) {
                    let n = parseInt(e[3]);
                    (0, s.en)(0 !== n && n <= 256 && n % 8 == 0, "invalid numeric width", "type", t)
                }
                return t
            }
            let ec = {},
                eh = Symbol.for("_ethers_internal"),
                ef = "_ParamTypeInternal",
                ed = "_ErrorInternal",
                ep = "_EventInternal",
                eg = "_ConstructorInternal",
                em = "_FallbackInternal",
                ey = "_FunctionInternal",
                eA = "_StructInternal";
            class ew {
                name;
                type;
                baseType;
                indexed;
                components;
                arrayLength;
                arrayChildren;
                constructor(t, e, r, n, i, a, o, u) {
                    if ((0, s.NK)(t, ec, "ParamType"), Object.defineProperty(this, eh, {
                            value: ef
                        }), a && (a = Object.freeze(a.slice())), "array" === n) {
                        if (null == o || null == u) throw Error("")
                    } else if (null != o || null != u) throw Error("");
                    if ("tuple" === n) {
                        if (null == a) throw Error("")
                    } else if (null != a) throw Error("");
                    (0, l.h)(this, {
                        name: e,
                        type: r,
                        baseType: n,
                        indexed: i,
                        components: a,
                        arrayLength: o,
                        arrayChildren: u
                    })
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) {
                        let e = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: this.name || void 0
                        };
                        return "boolean" == typeof this.indexed && (e.indexed = this.indexed), this.isTuple() && (e.components = this.components.map(e => JSON.parse(e.format(t)))), JSON.stringify(e)
                    }
                    let r = "";
                    return this.isArray() ? r += this.arrayChildren.format(t) + `[${this.arrayLength<0?"":String(this.arrayLength)}]` : this.isTuple() ? ("sighash" !== t && (r += this.type), r += "(" + this.components.map(e => e.format(t)).join("full" === t ? ", " : ",") + ")") : r += this.type, "sighash" !== t && (!0 === this.indexed && (r += " indexed"), "full" === t && this.name && (r += " " + this.name)), r
                }
                isArray() {
                    return "array" === this.baseType
                }
                isTuple() {
                    return "tuple" === this.baseType
                }
                isIndexable() {
                    return null != this.indexed
                }
                walk(t, e) {
                    if (this.isArray()) {
                        if (!Array.isArray(t)) throw Error("invalid array value");
                        if (-1 !== this.arrayLength && t.length !== this.arrayLength) throw Error("array is wrong length");
                        let r = this;
                        return t.map(t => r.arrayChildren.walk(t, e))
                    }
                    if (this.isTuple()) {
                        if (!Array.isArray(t)) throw Error("invalid tuple value");
                        if (t.length !== this.components.length) throw Error("array is wrong length");
                        let n = this;
                        return t.map((t, r) => n.components[r].walk(t, e))
                    }
                    return e(this.type, t)
                }#
                u(eb, ev, eE, eP) {
                    if (this.isArray()) {
                        if (!Array.isArray(ev)) throw Error("invalid array value");
                        if (-1 !== this.arrayLength && ev.length !== this.arrayLength) throw Error("array is wrong length");
                        let ex = this.arrayChildren,
                            eC = ev.slice();
                        eC.forEach((t, e) => {
                            ex.#u(eb, t, eE, t => {
                                eC[e] = t
                            })
                        }), eP(eC);
                        return
                    }
                    if (this.isTuple()) {
                        let eN;
                        let eO = this.components;
                        if (Array.isArray(ev)) eN = ev.slice();
                        else {
                            if (null == ev || "object" != typeof ev) throw Error("invalid tuple value");
                            eN = eO.map(t => {
                                if (!t.name) throw Error("cannot use object value with unnamed components");
                                if (!(t.name in ev)) throw Error(`missing value for component ${t.name}`);
                                return ev[t.name]
                            })
                        }
                        if (eN.length !== this.components.length) throw Error("array is wrong length");
                        eN.forEach((t, e) => {
                            eO[e].#u(eb, t, eE, t => {
                                eN[e] = t
                            })
                        }), eP(eN);
                        return
                    }
                    let eT = eE(this.type, ev);
                    eT.then ? eb.push(async function() {
                        eP(await eT)
                    }()) : eP(eT)
                }
                async walkAsync(t, e) {
                    let r = [],
                        n = [t];
                    return this.#u(r, t, e, t => {
                        n[0] = t
                    }), r.length && await Promise.all(r), n[0]
                }
                static from(t, e) {
                    if (ew.isParamType(t)) return t;
                    if ("string" == typeof t) return ew.from(et(t), e);
                    if (t instanceof t6) {
                        let r = "",
                            n = "",
                            i = null;
                        en(t, tJ(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN") ? (n = "tuple", r = `tuple(${(i=t.popParams().map(t=>ew.from(t))).map(t=>t.format()).join(",")})`) : n = r = eu(t.popType("TYPE"));
                        let a = null,
                            o = null;
                        for (; t.length && t.peekType("BRACKET");) {
                            let l = t.pop();
                            a = new ew(ec, "", r, n, null, i, o, a), o = l.value, r += l.text, n = "array", i = null
                        }
                        let u = null,
                            c = en(t, tX);
                        if (c.has("indexed")) {
                            if (!e) throw Error("");
                            u = !0
                        }
                        let h = t.peekType("ID") ? t.pop().text : "";
                        if (t.length) throw Error("leftover tokens");
                        return new ew(ec, h, r, n, u, i, o, a)
                    }
                    let f = t.name;
                    (0, s.en)(!f || "string" == typeof f && f.match(t3), "invalid name", "obj.name", f);
                    let d = t.indexed;
                    null != d && ((0, s.en)(e, "parameter cannot be indexed", "obj.indexed", t.indexed), d = !!d);
                    let p = t.type,
                        g = p.match(el);
                    if (g) {
                        let m = parseInt(g[2] || "-1"),
                            y = ew.from({
                                type: g[1],
                                components: t.components
                            });
                        return new ew(ec, f || "", p, "array", d, null, m, y)
                    }
                    if ("tuple" === p || p.startsWith("tuple(") || p.startsWith("(")) {
                        let A = null != t.components ? t.components.map(t => ew.from(t)) : null,
                            w = new ew(ec, f || "", p, "tuple", d, A, null, null);
                        return w
                    }
                    return p = eu(t.type), new ew(ec, f || "", p, p, d, null, null, null)
                }
                static isParamType(t) {
                    return t && t[eh] === ef
                }
            }
            class ek {
                type;
                inputs;
                constructor(t, e, r) {
                    (0, s.NK)(t, ec, "Fragment"), r = Object.freeze(r.slice()), (0, l.h)(this, {
                        type: e,
                        inputs: r
                    })
                }
                static from(t) {
                    if ("string" == typeof t) {
                        try {
                            ek.from(JSON.parse(t))
                        } catch (e) {}
                        return ek.from(et(t))
                    }
                    if (t instanceof t6) {
                        let r = t.peekKeyword(tZ);
                        switch (r) {
                            case "constructor":
                                return eU.from(t);
                            case "error":
                                return eI.from(t);
                            case "event":
                                return eR.from(t);
                            case "fallback":
                            case "receive":
                                return eD.from(t);
                            case "function":
                                return eL.from(t);
                            case "struct":
                                return eF.from(t)
                        }
                    } else if ("object" == typeof t) {
                        switch (t.type) {
                            case "constructor":
                                return eU.from(t);
                            case "error":
                                return eI.from(t);
                            case "event":
                                return eR.from(t);
                            case "fallback":
                            case "receive":
                                return eD.from(t);
                            case "function":
                                return eL.from(t);
                            case "struct":
                                return eF.from(t)
                        }(0, s.hu)(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
                            operation: "Fragment.from"
                        })
                    }(0, s.en)(!1, "unsupported frgament object", "obj", t)
                }
                static isConstructor(t) {
                    return eU.isFragment(t)
                }
                static isError(t) {
                    return eI.isFragment(t)
                }
                static isEvent(t) {
                    return eR.isFragment(t)
                }
                static isFunction(t) {
                    return eL.isFragment(t)
                }
                static isStruct(t) {
                    return eF.isFragment(t)
                }
            }
            class eB extends ek {
                name;
                constructor(t, e, r, n) {
                    super(t, e, n), (0, s.en)("string" == typeof r && r.match(t3), "invalid identifier", "name", r), n = Object.freeze(n.slice()), (0, l.h)(this, {
                        name: r
                    })
                }
            }

            function eS(t, e) {
                return "(" + e.map(e => e.format(t)).join("full" === t ? ", " : ",") + ")"
            }
            class eI extends eB {
                constructor(t, e, r) {
                    super(t, "error", e, r), Object.defineProperty(this, eh, {
                        value: ed
                    })
                }
                get selector() {
                    return tz(this.format("sighash")).substring(0, 10)
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = [];
                    return "sighash" !== t && e.push("error"), e.push(this.name + eS(t, this.inputs)), e.join(" ")
                }
                static from(t) {
                    if (eI.isFragment(t)) return t;
                    if ("string" == typeof t) return eI.from(et(t));
                    if (t instanceof t6) {
                        let e = er("error", t),
                            r = es(t);
                        return eo(t), new eI(ec, e, r)
                    }
                    return new eI(ec, t.name, t.inputs ? t.inputs.map(ew.from) : [])
                }
                static isFragment(t) {
                    return t && t[eh] === ed
                }
            }
            class eR extends eB {
                anonymous;
                constructor(t, e, r, n) {
                    super(t, "event", e, r), Object.defineProperty(this, eh, {
                        value: ep
                    }), (0, l.h)(this, {
                        anonymous: n
                    })
                }
                get topicHash() {
                    return tz(this.format("sighash"))
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = [];
                    return "sighash" !== t && e.push("event"), e.push(this.name + eS(t, this.inputs)), "sighash" !== t && this.anonymous && e.push("anonymous"), e.join(" ")
                }
                static getTopicHash(t, e) {
                    e = (e || []).map(t => ew.from(t));
                    let r = new eR(ec, t, e, !1);
                    return r.topicHash
                }
                static from(t) {
                    if (eR.isFragment(t)) return t;
                    if ("string" == typeof t) return eR.from(et(t));
                    if (t instanceof t6) {
                        let e = er("event", t),
                            r = es(t, !0),
                            n = !!en(t, tJ(["anonymous"])).has("anonymous");
                        return eo(t), new eR(ec, e, r, n)
                    }
                    return new eR(ec, t.name, t.inputs ? t.inputs.map(t => ew.from(t, !0)) : [], !!t.anonymous)
                }
                static isFragment(t) {
                    return t && t[eh] === ep
                }
            }
            class eU extends ek {
                payable;
                gas;
                constructor(t, e, r, n, i) {
                    super(t, e, r), Object.defineProperty(this, eh, {
                        value: eg
                    }), (0, l.h)(this, {
                        payable: n,
                        gas: i
                    })
                }
                format(t) {
                    if ((0, s.hu)(null != t && "sighash" !== t, "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
                            operation: "format(sighash)"
                        }), "json" === t) return JSON.stringify({
                        type: "constructor",
                        stateMutability: this.payable ? "payable" : "undefined",
                        payable: this.payable,
                        gas: null != this.gas ? this.gas : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = [`constructor${eS(t,this.inputs)}`];
                    return e.push(this.payable ? "payable" : "nonpayable"), null != this.gas && e.push(`@${this.gas.toString()}`), e.join(" ")
                }
                static from(t) {
                    if (eU.isFragment(t)) return t;
                    if ("string" == typeof t) return eU.from(et(t));
                    if (t instanceof t6) {
                        en(t, tJ(["constructor"]));
                        let e = es(t),
                            r = !!en(t, tJ(["payable"])).has("payable"),
                            n = ea(t);
                        return eo(t), new eU(ec, "constructor", e, r, n)
                    }
                    return new eU(ec, "constructor", t.inputs ? t.inputs.map(ew.from) : [], !!t.payable, null != t.gas ? t.gas : null)
                }
                static isFragment(t) {
                    return t && t[eh] === eg
                }
            }
            class eD extends ek {
                payable;
                constructor(t, e, r) {
                    super(t, "fallback", e), Object.defineProperty(this, eh, {
                        value: em
                    }), (0, l.h)(this, {
                        payable: r
                    })
                }
                format(t) {
                    let e = 0 === this.inputs.length ? "receive" : "fallback";
                    if ("json" === t) {
                        let r = this.payable ? "payable" : "nonpayable";
                        return JSON.stringify({
                            type: e,
                            stateMutability: r
                        })
                    }
                    return `${e}()${this.payable?" payable":""}`
                }
                static from(t) {
                    if (eD.isFragment(t)) return t;
                    if ("string" == typeof t) return eD.from(et(t));
                    if (t instanceof t6) {
                        let e = t.toString(),
                            r = t.peekKeyword(tJ(["fallback", "receive"]));
                        (0, s.en)(r, "type must be fallback or receive", "obj", e);
                        let n = t.popKeyword(tJ(["fallback", "receive"]));
                        if ("receive" === n) {
                            let i = es(t);
                            return (0, s.en)(0 === i.length, "receive cannot have arguments", "obj.inputs", i), en(t, tJ(["payable"])), eo(t), new eD(ec, [], !0)
                        }
                        let a = es(t);
                        a.length ? (0, s.en)(1 === a.length && "bytes" === a[0].type, "invalid fallback inputs", "obj.inputs", a.map(t => t.format("minimal")).join(", ")) : a = [ew.from("bytes")];
                        let o = ei(t);
                        if ((0, s.en)("nonpayable" === o || "payable" === o, "fallback cannot be constants", "obj.stateMutability", o), en(t, tJ(["returns"])).has("returns")) {
                            let l = es(t);
                            (0, s.en)(1 === l.length && "bytes" === l[0].type, "invalid fallback outputs", "obj.outputs", l.map(t => t.format("minimal")).join(", "))
                        }
                        return eo(t), new eD(ec, a, "payable" === o)
                    }
                    if ("receive" === t.type) return new eD(ec, [], !0);
                    if ("fallback" === t.type) {
                        let u = [ew.from("bytes")],
                            c = "payable" === t.stateMutability;
                        return new eD(ec, u, c)
                    }(0, s.en)(!1, "invalid fallback description", "obj", t)
                }
                static isFragment(t) {
                    return t && t[eh] === em
                }
            }
            class eL extends eB {
                constant;
                outputs;
                stateMutability;
                payable;
                gas;
                constructor(t, e, r, n, i, s) {
                    super(t, "function", e, n), Object.defineProperty(this, eh, {
                        value: ey
                    }), i = Object.freeze(i.slice()), (0, l.h)(this, {
                        constant: "view" === r || "pure" === r,
                        gas: s,
                        outputs: i,
                        payable: "payable" === r,
                        stateMutability: r
                    })
                }
                get selector() {
                    return tz(this.format("sighash")).substring(0, 10)
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: null != this.gas ? this.gas : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t))),
                        outputs: this.outputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = [];
                    return "sighash" !== t && e.push("function"), e.push(this.name + eS(t, this.inputs)), "sighash" !== t && ("nonpayable" !== this.stateMutability && e.push(this.stateMutability), this.outputs && this.outputs.length && (e.push("returns"), e.push(eS(t, this.outputs))), null != this.gas && e.push(`@${this.gas.toString()}`)), e.join(" ")
                }
                static getSelector(t, e) {
                    e = (e || []).map(t => ew.from(t));
                    let r = new eL(ec, t, "view", e, [], null);
                    return r.selector
                }
                static from(t) {
                    if (eL.isFragment(t)) return t;
                    if ("string" == typeof t) return eL.from(et(t));
                    if (t instanceof t6) {
                        let e = er("function", t),
                            r = es(t),
                            n = ei(t),
                            i = [];
                        en(t, tJ(["returns"])).has("returns") && (i = es(t));
                        let s = ea(t);
                        return eo(t), new eL(ec, e, n, r, i, s)
                    }
                    let a = t.stateMutability;
                    return null != a || (a = "payable", "boolean" == typeof t.constant ? (a = "view", t.constant || (a = "payable", "boolean" != typeof t.payable || t.payable || (a = "nonpayable"))) : "boolean" != typeof t.payable || t.payable || (a = "nonpayable")), new eL(ec, t.name, a, t.inputs ? t.inputs.map(ew.from) : [], t.outputs ? t.outputs.map(ew.from) : [], null != t.gas ? t.gas : null)
                }
                static isFragment(t) {
                    return t && t[eh] === ey
                }
            }
            class eF extends eB {
                constructor(t, e, r) {
                    super(t, "struct", e, r), Object.defineProperty(this, eh, {
                        value: eA
                    })
                }
                format() {
                    throw Error("@TODO")
                }
                static from(t) {
                    if ("string" == typeof t) return eF.from(et(t));
                    if (t instanceof t6) {
                        let e = er("struct", t),
                            r = es(t);
                        return eo(t), new eF(ec, e, r)
                    }
                    return new eF(ec, t.name, t.inputs ? t.inputs.map(ew.from) : [])
                }
                static isFragment(t) {
                    return t && t[eh] === eA
                }
            }
            let eM = new Map;
            eM.set(0, "GENERIC_PANIC"), eM.set(1, "ASSERT_FALSE"), eM.set(17, "OVERFLOW"), eM.set(18, "DIVIDE_BY_ZERO"), eM.set(33, "ENUM_RANGE_ERROR"), eM.set(34, "BAD_STORAGE_DATA"), eM.set(49, "STACK_UNDERFLOW"), eM.set(50, "ARRAY_RANGE_ERROR"), eM.set(65, "OUT_OF_MEMORY"), eM.set(81, "UNINITIALIZED_FUNCTION_CALL");
            let ej = RegExp(/^bytes([0-9]*)$/),
                eG = RegExp(/^(u?int)([0-9]*)$/),
                eH = null;
            class eQ {#
                c(e_) {
                    if (e_.isArray()) return new tT(this.#c(e_.arrayChildren), e_.arrayLength, e_.name);
                    if (e_.isTuple()) return new tV(e_.components.map(t => this.#c(t)), e_.name);
                    switch (e_.baseType) {
                        case "address":
                            return new tx(e_.name);
                        case "bool":
                            return new tk(e_.name);
                        case "string":
                            return new t_(e_.name);
                        case "bytes":
                            return new tS(e_.name);
                        case "":
                            return new tU(e_.name)
                    }
                    let eV = e_.type.match(eG);
                    if (eV) {
                        let ez = parseInt(eV[2] || "256");
                        return (0, s.en)(0 !== ez && ez <= 256 && ez % 8 == 0, "invalid " + eV[1] + " bit length", "param", e_), new tM(ez / 8, "int" === eV[1], e_.name)
                    }
                    if (eV = e_.type.match(ej)) {
                        let eJ = parseInt(eV[1]);
                        return (0, s.en)(0 !== eJ && eJ <= 32, "invalid bytes length", "param", e_), new tI(eJ, e_.name)
                    }(0, s.en)(!1, "invalid type", "type", e_.type)
                }
                getDefaultValue(t) {
                    let e = t.map(t => this.#c(ew.from(t))),
                        r = new tV(e, "_");
                    return r.defaultValue()
                }
                encode(t, e) {
                    (0, s.fG)(e.length, t.length, "types/values length mismatch");
                    let r = t.map(t => this.#c(ew.from(t))),
                        n = new tV(r, "_"),
                        i = new m;
                    return n.encode(i, e), i.data
                }
                decode(t, e, r) {
                    let n = t.map(t => this.#c(ew.from(t))),
                        i = new tV(n, "_");
                    return i.decode(new A(e, r))
                }
                static defaultAbiCoder() {
                    return null == eH && (eH = new eQ), eH
                }
                static getBuiltinCallException(t, e, r) {
                    return function(t, e, r, n) {
                        let i = "missing revert data",
                            a = null,
                            l = null;
                        if (r) {
                            i = "execution reverted";
                            let u = (0, o.Pw)(r);
                            if (r = (0, o.Dv)(r), 0 === u.length) i += " (no data present; likely require(false) occurred", a = "require(false)";
                            else if (u.length % 32 != 4) i += " (could not decode reason; invalid data length)";
                            else if ("0x08c379a0" === (0, o.Dv)(u.slice(0, 4))) try {
                                a = n.decode(["string"], u.slice(4))[0], l = {
                                    signature: "Error(string)",
                                    name: "Error",
                                    args: [a]
                                }, i += `: ${JSON.stringify(a)}`
                            } catch (c) {
                                i += " (could not decode reason; invalid string data)"
                            } else if ("0x4e487b71" === (0, o.Dv)(u.slice(0, 4))) try {
                                let h = Number(n.decode(["uint256"], u.slice(4))[0]);
                                l = {
                                    signature: "Panic(uint256)",
                                    name: "Panic",
                                    args: [h]
                                }, a = `Panic due to ${eM.get(h)||"UNKNOWN"}(${h})`, i += `: ${a}`
                            } catch (f) {
                                i += " (could not decode panic code)"
                            } else i += " (unknown custom error)"
                        }
                        let d = {
                            to: e.to ? tA(e.to) : null,
                            data: e.data || "0x"
                        };
                        return e.from && (d.from = tA(e.from)), (0, s.wf)(i, "CALL_EXCEPTION", {
                            action: t,
                            data: r,
                            reason: a,
                            transaction: d,
                            invocation: null,
                            revert: l
                        })
                    }(t, e, r, eQ.defaultAbiCoder())
                }
            }

            function eK(t) {
                return t && "function" == typeof t.getAddress
            }
            async function eq(t, e) {
                let r = await e;
                return (null == r || "0x0000000000000000000000000000000000000000" === r) && ((0, s.hu)("string" != typeof t, "unconfigured name", "UNCONFIGURED_NAME", {
                    value: t
                }), (0, s.en)(!1, "invalid AddressLike value; did not resolve to a value address", "target", t)), tA(r)
            }

            function eW(t, e) {
                return "string" == typeof t ? t.match(/^0x[0-9a-f]{40}$/i) ? tA(t) : ((0, s.hu)(null != e, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
                    operation: "resolveName"
                }), eq(t, e.resolveName(t))) : eK(t) ? eq(t, t.getAddress()) : t && "function" == typeof t.then ? eq(t, t) : void(0, s.en)(!1, "unsupported addressable value", "target", t)
            }
            let eZ = new Uint8Array(32);
            eZ.fill(0);
            let eY = BigInt(-1),
                eX = BigInt(0),
                e$ = BigInt(1),
                e0 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                e1 = (0, a.m9)(e$, 32),
                e2 = (0, a.m9)(eX, 32),
                e4 = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                e8 = ["name", "version", "chainId", "verifyingContract", "salt"];

            function e3(t) {
                return function(e) {
                    return (0, s.en)("string" == typeof e, `invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
                }
            }
            let e5 = {
                name: e3("name"),
                version: e3("version"),
                chainId: function(t) {
                    let e = (0, a.yT)(t, "domain.chainId");
                    return ((0, s.en)(e >= 0, "invalid chain ID", "domain.chainId", t), Number.isSafeInteger(e)) ? Number(e) : (0, a.B4)(e)
                },
                verifyingContract: function(t) {
                    try {
                        return tA(t).toLowerCase()
                    } catch (e) {}(0, s.en)(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t)
                },
                salt: function(t) {
                    let e = (0, o.Pw)(t, "domain.salt");
                    return (0, s.en)(32 === e.length, 'invalid domain value "salt"', "domain.salt", t), (0, o.Dv)(e)
                }
            };

            function e6(t) {
                {
                    let e = t.match(/^(u?)int(\d*)$/);
                    if (e) {
                        let r = "" === e[1],
                            n = parseInt(e[2] || "256");
                        (0, s.en)(n % 8 == 0 && 0 !== n && n <= 256 && (null == e[2] || e[2] === String(n)), "invalid numeric width", "type", t);
                        let i = (0, a.sS)(e0, r ? n - 1 : n),
                            l = r ? (i + e$) * eY : eX;
                        return function(e) {
                            let n = (0, a.yT)(e, "value");
                            return (0, s.en)(n >= l && n <= i, `value out-of-bounds for ${t}`, "value", n), (0, a.m9)(r ? (0, a.$j)(n, 256) : n, 32)
                        }
                    }
                } {
                    let u = t.match(/^bytes(\d+)$/);
                    if (u) {
                        let c = parseInt(u[1]);
                        return (0, s.en)(0 !== c && c <= 32 && u[1] === String(c), "invalid bytes width", "type", t),
                            function(e) {
                                let r = (0, o.Pw)(e);
                                return (0, s.en)(r.length === c, `invalid length for ${t}`, "value", e),
                                    function(t) {
                                        let e = (0, o.Pw)(t),
                                            r = e.length % 32;
                                        return r ? (0, o.zo)([e, eZ.slice(r)]) : (0, o.Dv)(e)
                                    }(e)
                            }
                    }
                }
                switch (t) {
                    case "address":
                        return function(t) {
                            return (0, o.U3)(tA(t), 32)
                        };
                    case "bool":
                        return function(t) {
                            return t ? e1 : e2
                        };
                    case "bytes":
                        return function(t) {
                            return tc(t)
                        };
                    case "string":
                        return function(t) {
                            return tz(t)
                        }
                }
                return null
            }

            function e9(t, e) {
                return `${t}(${e.map(({name:t,type:e})=>e+" "+t).join(",")})`
            }
            class e7 {
                primaryType;#
                h;
                get types() {
                    return JSON.parse(this.#h)
                }#
                f;#
                d;
                constructor(t) {
                    this.#h = JSON.stringify(t), this.#f = new Map, this.#d = new Map;
                    let e = new Map,
                        r = new Map,
                        n = new Map;
                    for (let i in Object.keys(t).forEach(t => {
                            e.set(t, new Set), r.set(t, []), n.set(t, new Set)
                        }), t) {
                        let a = new Set;
                        for (let o of t[i]) {
                            (0, s.en)(!a.has(o.name), `duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(i)}`, "types", t), a.add(o.name);
                            let u = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
                            (0, s.en)(u !== i, `circular type reference to ${JSON.stringify(u)}`, "types", t);
                            let c = e6(u);
                            c || ((0, s.en)(r.has(u), `unknown type ${JSON.stringify(u)}`, "types", t), r.get(u).push(i), e.get(i).add(u))
                        }
                    }
                    let h = Array.from(r.keys()).filter(t => 0 === r.get(t).length);
                    for (let [f, d] of ((0, s.en)(0 !== h.length, "missing primary type", "types", t), (0, s.en)(1 === h.length, `ambiguous primary types or unused types: ${h.map(t=>JSON.stringify(t)).join(", ")}`, "types", t), (0, l.h)(this, {
                            primaryType: h[0]
                        }), ! function i(a, o) {
                            for (let l of ((0, s.en)(!o.has(a), `circular type reference to ${JSON.stringify(a)}`, "types", t), o.add(a), e.get(a)))
                                if (r.has(l))
                                    for (let u of (i(l, o), o)) n.get(u).add(l);
                            o.delete(a)
                        }(this.primaryType, new Set), n)) {
                        let p = Array.from(d);
                        p.sort(), this.#f.set(f, e9(f, t[f]) + p.map(e => e9(e, t[e])).join(""))
                    }
                }
                getEncoder(t) {
                    let e = this.#d.get(t);
                    return e || (e = this.#p(t), this.#d.set(t, e)), e
                }#
                p(rt) {
                    {
                        let re = e6(rt);
                        if (re) return re
                    }
                    let rr = rt.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (rr) {
                        let rn = rr[1],
                            ri = this.getEncoder(rn);
                        return t => {
                            (0, s.en)(!rr[3] || parseInt(rr[3]) === t.length, `array length mismatch; expected length ${parseInt(rr[3])}`, "value", t);
                            let e = t.map(ri);
                            return this.#f.has(rn) && (e = e.map(tc)), tc((0, o.zo)(e))
                        }
                    }
                    let rs = this.types[rt];
                    if (rs) {
                        let ra = tz(this.#f.get(rt));
                        return t => {
                            let e = rs.map(({
                                name: e,
                                type: r
                            }) => {
                                let n = this.getEncoder(r)(t[e]);
                                return this.#f.has(r) ? tc(n) : n
                            });
                            return e.unshift(ra), (0, o.zo)(e)
                        }
                    }(0, s.en)(!1, `unknown type: ${rt}`, "type", rt)
                }
                encodeType(t) {
                    let e = this.#f.get(t);
                    return (0, s.en)(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e
                }
                encodeData(t, e) {
                    return this.getEncoder(t)(e)
                }
                hashStruct(t, e) {
                    return tc(this.encodeData(t, e))
                }
                encode(t) {
                    return this.encodeData(this.primaryType, t)
                }
                hash(t) {
                    return this.hashStruct(this.primaryType, t)
                }
                _visit(t, e, r) {
                    {
                        let n = e6(t);
                        if (n) return r(t, e)
                    }
                    let i = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (i) return (0, s.en)(!i[3] || parseInt(i[3]) === e.length, `array length mismatch; expected length ${parseInt(i[3])}`, "value", e), e.map(t => this._visit(i[1], t, r));
                    let a = this.types[t];
                    if (a) return a.reduce((t, {
                        name: n,
                        type: i
                    }) => (t[n] = this._visit(i, e[n], r), t), {});
                    (0, s.en)(!1, `unknown type: ${t}`, "type", t)
                }
                visit(t, e) {
                    return this._visit(this.primaryType, t, e)
                }
                static from(t) {
                    return new e7(t)
                }
                static getPrimaryType(t) {
                    return e7.from(t).primaryType
                }
                static hashStruct(t, e, r) {
                    return e7.from(e).hashStruct(t, r)
                }
                static hashDomain(t) {
                    let e = [];
                    for (let r in t) {
                        if (null == t[r]) continue;
                        let n = e4[r];
                        (0, s.en)(n, `invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t), e.push({
                            name: r,
                            type: n
                        })
                    }
                    return e.sort((t, e) => e8.indexOf(t.name) - e8.indexOf(e.name)), e7.hashStruct("EIP712Domain", {
                        EIP712Domain: e
                    }, t)
                }
                static encode(t, e, r) {
                    return (0, o.zo)(["0x1901", e7.hashDomain(t), e7.from(e).hash(r)])
                }
                static hash(t, e, r) {
                    return tc(e7.encode(t, e, r))
                }
                static async resolveNames(t, e, r, n) {
                    for (let i in t = Object.assign({}, t)) null == t[i] && delete t[i];
                    let s = {};
                    t.verifyingContract && !(0, o.A7)(t.verifyingContract, 20) && (s[t.verifyingContract] = "0x");
                    let a = e7.from(e);
                    for (let l in a.visit(r, (t, e) => ("address" !== t || (0, o.A7)(e, 20) || (s[e] = "0x"), e)), s) s[l] = await n(l);
                    return t.verifyingContract && s[t.verifyingContract] && (t.verifyingContract = s[t.verifyingContract]), r = a.visit(r, (t, e) => "address" === t && s[e] ? s[e] : e), {
                        domain: t,
                        value: r
                    }
                }
                static getPayload(t, e, r) {
                    e7.hashDomain(t);
                    let n = {},
                        i = [];
                    e8.forEach(e => {
                        let r = t[e];
                        null != r && (n[e] = e5[e](r), i.push({
                            name: e,
                            type: e4[e]
                        }))
                    });
                    let l = e7.from(e),
                        u = Object.assign({}, e);
                    return (0, s.en)(null == u.EIP712Domain, "types must not contain EIP712Domain type", "types.EIP712Domain", e), u.EIP712Domain = i, l.encode(r), {
                        types: u,
                        domain: n,
                        primaryType: l.primaryType,
                        message: l.visit(r, (t, e) => {
                            if (t.match(/^bytes(\d*)/)) return (0, o.Dv)((0, o.Pw)(e));
                            if (t.match(/^u?int/)) return (0, a.yT)(e).toString();
                            switch (t) {
                                case "address":
                                    return e.toLowerCase();
                                case "bool":
                                    return !!e;
                                case "string":
                                    return (0, s.en)("string" == typeof e, "invalid string", "value", e), e
                            }(0, s.en)(!1, "unsupported type", "type", t)
                        })
                    }
                }
            }

            function ro(t, e) {
                return {
                    address: tA(t),
                    storageKeys: e.map((t, e) => ((0, s.en)((0, o.A7)(t, 32), "invalid slot", `storageKeys[${e}]`, t), t.toLowerCase()))
                }
            }

            function rl(t) {
                if (Array.isArray(t)) return t.map((e, r) => Array.isArray(e) ? ((0, s.en)(2 === e.length, "invalid slot set", `value[${r}]`, e), ro(e[0], e[1])) : ((0, s.en)(null != e && "object" == typeof e, "invalid address-slot set", "value", t), ro(e.address, e.storageKeys)));
                (0, s.en)(null != t && "object" == typeof t, "invalid access list", "value", t);
                let e = Object.keys(t).map(e => {
                    let r = t[e].reduce((t, e) => (t[e] = !0, t), {});
                    return ro(e, Object.keys(r).sort())
                });
                return e.sort((t, e) => t.address.localeCompare(e.address)), e
            }
            let ru = async function(t, e) {
                    let r;
                    let n = t.url.split(":")[0].toLowerCase();
                    if ((0, s.hu)("http" === n || "https" === n, `unsupported protocol ${n}`, "UNSUPPORTED_OPERATION", {
                            info: {
                                protocol: n
                            },
                            operation: "request"
                        }), (0, s.hu)("https" === n || !t.credentials || t.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
                            operation: "request"
                        }), e) {
                        let i = new AbortController;
                        r = i.signal, e.addListener(() => {
                            i.abort()
                        })
                    }
                    let a = {
                            method: t.method,
                            headers: new Headers(Array.from(t)),
                            body: t.body || void 0,
                            signal: r
                        },
                        o = await fetch(t.url, a),
                        l = {};
                    o.headers.forEach((t, e) => {
                        l[e.toLowerCase()] = t
                    });
                    let u = await o.arrayBuffer(),
                        c = null == u ? null : new Uint8Array(u);
                    return {
                        statusCode: o.status,
                        statusMessage: o.statusText,
                        headers: l,
                        body: c
                    }
                },
                rc = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                rh = RegExp("^ipfs://(ipfs/)?(.*)$", "i"),
                rf = !1;
            async function rd(t, e) {
                try {
                    var r;
                    let n = t.match(rc);
                    if (!n) throw Error("invalid data");
                    return new rM(200, "OK", {
                        "content-type": n[1] || "text/plain"
                    }, n[2] ? function(t) {
                        t = atob(t);
                        let e = new Uint8Array(t.length);
                        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                        return (0, o.Pw)(e)
                    }(n[3]) : (r = n[3], tH(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))))))
                } catch (i) {
                    return new rM(599, "BAD REQUEST (invalid data: URI)", {}, null, new rw(t))
                }
            }

            function rp(t) {
                return async function(e, r) {
                    try {
                        let n = e.match(rh);
                        if (!n) throw Error("invalid link");
                        return new rw(`${t}${n[2]}`)
                    } catch (i) {
                        return new rM(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new rw(e))
                    }
                }
            }
            let rg = {
                    data: rd,
                    ipfs: rp("https://gateway.ipfs.io/ipfs/")
                },
                rm = new WeakMap;
            class ry {#
                g;#
                m;
                constructor(t) {
                    this.#g = [], this.#m = !1, rm.set(t, () => {
                        if (!this.#m) {
                            for (let t of (this.#m = !0, this.#g)) setTimeout(() => {
                                t()
                            }, 0);
                            this.#g = []
                        }
                    })
                }
                addListener(t) {
                    (0, s.hu)(!this.#m, "singal already cancelled", "UNSUPPORTED_OPERATION", {
                        operation: "fetchCancelSignal.addCancelListener"
                    }), this.#g.push(t)
                }
                get cancelled() {
                    return this.#m
                }
                checkSignal() {
                    (0, s.hu)(!this.cancelled, "cancelled", "CANCELLED", {})
                }
            }

            function rA(t) {
                if (null == t) throw Error("missing signal; should not happen");
                return t.checkSignal(), t
            }
            class rw {#
                y;#
                A;#
                w;#
                b;#
                v;#
                E;#
                P;#
                x;#
                C;#
                N;#
                O;#
                T;#
                k;#
                B;
                get url() {
                    return this.#E
                }
                set url(t) {
                    this.#E = String(t)
                }
                get body() {
                    return null == this.#P ? null : new Uint8Array(this.#P)
                }
                set body(t) {
                    if (null == t) this.#P = void 0, this.#x = void 0;
                    else if ("string" == typeof t) this.#P = tH(t), this.#x = "text/plain";
                    else if (t instanceof Uint8Array) this.#P = t, this.#x = "application/octet-stream";
                    else if ("object" == typeof t) this.#P = tH(JSON.stringify(t)), this.#x = "application/json";
                    else throw Error("invalid body")
                }
                hasBody() {
                    return null != this.#P
                }
                get method() {
                    return this.#b ? this.#b : this.hasBody() ? "POST" : "GET"
                }
                set method(t) {
                    null == t && (t = ""), this.#b = String(t).toUpperCase()
                }
                get headers() {
                    let t = Object.assign({}, this.#w);
                    return this.#C && (t.authorization = `Basic ${function(t){let e=(0,o.Pw)(t),r="";for(let n=0;n<e.length;n++)r+=String.fromCharCode(e[n]);return btoa(r)}(tH(this.#C))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), null == t["content-type"] && this.#x && (t["content-type"] = this.#x), this.body && (t["content-length"] = String(this.body.length)), t
                }
                getHeader(t) {
                    return this.headers[t.toLowerCase()]
                }
                setHeader(t, e) {
                    this.#w[String(t).toLowerCase()] = String(e)
                }
                clearHeaders() {
                    this.#w = {}
                }[Symbol.iterator]() {
                    let t = this.headers,
                        e = Object.keys(t),
                        r = 0;
                    return {
                        next: () => {
                            if (r < e.length) {
                                let n = e[r++];
                                return {
                                    value: [n, t[n]],
                                    done: !1
                                }
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    }
                }
                get credentials() {
                    return this.#C || null
                }
                setCredentials(t, e) {
                    (0, s.en)(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), this.#C = `${t}:${e}`
                }
                get allowGzip() {
                    return this.#A
                }
                set allowGzip(t) {
                    this.#A = !!t
                }
                get allowInsecureAuthentication() {
                    return !!this.#y
                }
                set allowInsecureAuthentication(t) {
                    this.#y = !!t
                }
                get timeout() {
                    return this.#v
                }
                set timeout(t) {
                    (0, s.en)(t >= 0, "timeout must be non-zero", "timeout", t), this.#v = t
                }
                get preflightFunc() {
                    return this.#N || null
                }
                set preflightFunc(t) {
                    this.#N = t
                }
                get processFunc() {
                    return this.#O || null
                }
                set processFunc(t) {
                    this.#O = t
                }
                get retryFunc() {
                    return this.#T || null
                }
                set retryFunc(t) {
                    this.#T = t
                }
                constructor(t) {
                    this.#E = String(t), this.#y = !1, this.#A = !0, this.#w = {}, this.#b = "", this.#v = 3e5, this.#B = {
                        slotInterval: 250,
                        maxAttempts: 12
                    }
                }
                toString() {
                    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${this.#P?(0,o.Dv)(this.#P):"null"}>`
                }
                setThrottleParams(t) {
                    null != t.slotInterval && (this.#B.slotInterval = t.slotInterval), null != t.maxAttempts && (this.#B.maxAttempts = t.maxAttempts)
                }
                async# S(rb, rv, rE, rP, rx) {
                    if (rb >= this.#B.maxAttempts) return rx.makeServerError("exceeded maximum retry limit");
                    (0, s.hu)(rj() <= rv, "timeout", "TIMEOUT", {
                        operation: "request.send",
                        reason: "timeout",
                        request: rP
                    }), rE > 0 && await new Promise(t => setTimeout(t, rE));
                    let rC = this.clone(),
                        rN = (rC.url.split(":")[0] || "").toLowerCase();
                    if (rN in rg) {
                        let rO = await rg[rN](rC.url, rA(rP.#k));
                        if (rO instanceof rM) {
                            let rT = rO;
                            if (this.processFunc) {
                                rA(rP.#k);
                                try {
                                    rT = await this.processFunc(rC, rT)
                                } catch (rk) {
                                    (null == rk.throttle || "number" != typeof rk.stall) && rT.makeServerError("error in post-processing function", rk).assertOk()
                                }
                            }
                            return rT
                        }
                        rC = rO
                    }
                    this.preflightFunc && (rC = await this.preflightFunc(rC));
                    let rB = await ru(rC, rA(rP.#k)),
                        rS = new rM(rB.statusCode, rB.statusMessage, rB.headers, rB.body, rP);
                    if (301 === rS.statusCode || 302 === rS.statusCode) {
                        try {
                            let rI = rS.headers.location || "";
                            return rC.redirect(rI).#S(rb + 1, rv, 0, rP, rS)
                        } catch (rR) {}
                        return rS
                    }
                    if (429 === rS.statusCode && (null == this.retryFunc || await this.retryFunc(rC, rS, rb))) {
                        let rU = rS.headers["retry-after"],
                            rD = this.#B.slotInterval * Math.trunc(Math.random() * Math.pow(2, rb));
                        return "string" == typeof rU && rU.match(/^[1-9][0-9]*$/) && (rD = parseInt(rU)), rC.clone().#S(rb + 1, rv, rD, rP, rS)
                    }
                    if (this.processFunc) {
                        rA(rP.#k);
                        try {
                            rS = await this.processFunc(rC, rS)
                        } catch (rF) {
                            (null == rF.throttle || "number" != typeof rF.stall) && rS.makeServerError("error in post-processing function", rF).assertOk();
                            let rL = this.#B.slotInterval * Math.trunc(Math.random() * Math.pow(2, rb));
                            return rF.stall >= 0 && (rL = rF.stall), rC.clone().#S(rb + 1, rv, rL, rP, rS)
                        }
                    }
                    return rS
                }
                send() {
                    return (0, s.hu)(null == this.#k, "request already sent", "UNSUPPORTED_OPERATION", {
                        operation: "fetchRequest.send"
                    }), this.#k = new ry(this), this.#S(0, rj() + this.timeout, 0, this, new rM(0, "", {}, null, this))
                }
                cancel() {
                    (0, s.hu)(null != this.#k, "request has not been sent", "UNSUPPORTED_OPERATION", {
                        operation: "fetchRequest.cancel"
                    });
                    let t = rm.get(this);
                    if (!t) throw Error("missing signal; should not happen");
                    t()
                }
                redirect(t) {
                    let e = this.url.split(":")[0].toLowerCase(),
                        r = t.split(":")[0].toLowerCase();
                    (0, s.hu)("GET" === this.method && ("https" !== e || "http" !== r) && t.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
                        operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`
                    });
                    let n = new rw(t);
                    return n.method = "GET", n.allowGzip = this.allowGzip, n.timeout = this.timeout, n.#w = Object.assign({}, this.#w), this.#P && (n.#P = new Uint8Array(this.#P)), n.#x = this.#x, n
                }
                clone() {
                    let t = new rw(this.url);
                    return t.#b = this.#b, this.#P && (t.#P = this.#P), t.#x = this.#x, t.#w = Object.assign({}, this.#w), t.#C = this.#C, this.allowGzip && (t.allowGzip = !0), t.timeout = this.timeout, this.allowInsecureAuthentication && (t.allowInsecureAuthentication = !0), t.#N = this.#N, t.#O = this.#O, t.#T = this.#T, t
                }
                static lockConfig() {
                    rf = !0
                }
                static getGateway(t) {
                    return rg[t.toLowerCase()] || null
                }
                static registerGateway(t, e) {
                    if ("http" === (t = t.toLowerCase()) || "https" === t) throw Error(`cannot intercept ${t}; use registerGetUrl`);
                    if (rf) throw Error("gateways locked");
                    rg[t] = e
                }
                static registerGetUrl(t) {
                    if (rf) throw Error("gateways locked");
                    ru = t
                }
                static createDataGateway() {
                    return rd
                }
                static createIpfsGatewayFunc(t) {
                    return rp(t)
                }
            }
            class rM {#
                I;#
                R;#
                w;#
                P;#
                U;#
                D;
                toString() {
                    return `<FetchResponse status=${this.statusCode} body=${this.#P?(0,o.Dv)(this.#P):"null"}>`
                }
                get statusCode() {
                    return this.#I
                }
                get statusMessage() {
                    return this.#R
                }
                get headers() {
                    return Object.assign({}, this.#w)
                }
                get body() {
                    return null == this.#P ? null : new Uint8Array(this.#P)
                }
                get bodyText() {
                    try {
                        return null == this.#P ? "" : tQ(this.#P)
                    } catch (t) {
                        (0, s.hu)(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
                            operation: "bodyText",
                            info: {
                                response: this
                            }
                        })
                    }
                }
                get bodyJson() {
                    try {
                        return JSON.parse(this.bodyText)
                    } catch (t) {
                        (0, s.hu)(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
                            operation: "bodyJson",
                            info: {
                                response: this
                            }
                        })
                    }
                }[Symbol.iterator]() {
                    let t = this.headers,
                        e = Object.keys(t),
                        r = 0;
                    return {
                        next: () => {
                            if (r < e.length) {
                                let n = e[r++];
                                return {
                                    value: [n, t[n]],
                                    done: !1
                                }
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    }
                }
                constructor(t, e, r, n, i) {
                    this.#I = t, this.#R = e, this.#w = Object.keys(r).reduce((t, e) => (t[e.toLowerCase()] = String(r[e]), t), {}), this.#P = null == n ? null : new Uint8Array(n), this.#U = i || null, this.#D = {
                        message: ""
                    }
                }
                makeServerError(t, e) {
                    let r;
                    r = t ? `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})` : `CLIENT ESCALATED SERVER ERROR (${t=`${this.statusCode} ${this.statusMessage}`})`;
                    let n = new rM(599, r, this.headers, this.body, this.#U || void 0);
                    return n.#D = {
                        message: t,
                        error: e
                    }, n
                }
                throwThrottleError(t, e) {
                    null == e ? e = -1 : (0, s.en)(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
                    let r = Error(t || "throttling requests");
                    throw (0, l.h)(r, {
                        stall: e,
                        throttle: !0
                    }), r
                }
                getHeader(t) {
                    return this.headers[t.toLowerCase()]
                }
                hasBody() {
                    return null != this.#P
                }
                get request() {
                    return this.#U
                }
                ok() {
                    return "" === this.#D.message && this.statusCode >= 200 && this.statusCode < 300
                }
                assertOk() {
                    if (this.ok()) return;
                    let {
                        message: t,
                        error: e
                    } = this.#D;
                    "" === t && (t = `server response ${this.statusCode} ${this.statusMessage}`), (0, s.hu)(!1, t, "SERVER_ERROR", {
                        request: this.request || "unknown request",
                        response: this,
                        error: e
                    })
                }
            }

            function rj() {
                return new Date().getTime()
            }
            let rG = "0x0000000000000000000000000000000000000000";
            class rH {
                fragment;
                name;
                signature;
                topic;
                args;
                constructor(t, e, r) {
                    let n = t.name,
                        i = t.format();
                    (0, l.h)(this, {
                        fragment: t,
                        name: n,
                        signature: i,
                        topic: e,
                        args: r
                    })
                }
            }
            class rQ {
                fragment;
                name;
                args;
                signature;
                selector;
                value;
                constructor(t, e, r, n) {
                    let i = t.name,
                        s = t.format();
                    (0, l.h)(this, {
                        fragment: t,
                        name: i,
                        args: r,
                        signature: s,
                        selector: e,
                        value: n
                    })
                }
            }
            class r_ {
                fragment;
                name;
                args;
                signature;
                selector;
                constructor(t, e, r) {
                    let n = t.name,
                        i = t.format();
                    (0, l.h)(this, {
                        fragment: t,
                        name: n,
                        args: r,
                        signature: i,
                        selector: e
                    })
                }
            }
            class rV {
                hash;
                _isIndexed;
                static isIndexed(t) {
                    return !!(t && t._isIndexed)
                }
                constructor(t) {
                    (0, l.h)(this, {
                        hash: t,
                        _isIndexed: !0
                    })
                }
            }
            let rz = {
                    0: "generic panic",
                    1: "assert(false)",
                    17: "arithmetic overflow",
                    18: "division or modulo by zero",
                    33: "enum overflow",
                    34: "invalid encoded storage byte array accessed",
                    49: "out-of-bounds array access; popping on an empty array",
                    50: "out-of-bounds access of an array or bytesN",
                    65: "out of memory",
                    81: "uninitialized function"
                },
                rJ = {
                    "0x08c379a0": {
                        signature: "Error(string)",
                        name: "Error",
                        inputs: ["string"],
                        reason: t => `reverted with reason string ${JSON.stringify(t)}`
                    },
                    "0x4e487b71": {
                        signature: "Panic(uint256)",
                        name: "Panic",
                        inputs: ["uint256"],
                        reason: t => {
                            let e = "unknown panic code";
                            return t >= 0 && t <= 255 && rz[t.toString()] && (e = rz[t.toString()]), `reverted with panic code 0x${t.toString(16)} (${e})`
                        }
                    }
                };
            class rK {
                fragments;
                deploy;
                fallback;
                receive;#
                L;#
                F;#
                M;#
                j;
                constructor(t) {
                    let e = [];
                    e = "string" == typeof t ? JSON.parse(t) : t, this.#M = new Map, this.#L = new Map, this.#F = new Map;
                    let r = [];
                    for (let n of e) try {
                        r.push(ek.from(n))
                    } catch (i) {
                        console.log("EE", i)
                    }(0, l.h)(this, {
                        fragments: Object.freeze(r)
                    });
                    let a = null,
                        o = !1;
                    this.#j = this.getAbiCoder(), this.fragments.forEach((t, e) => {
                        let r;
                        switch (t.type) {
                            case "constructor":
                                if (this.deploy) {
                                    console.log("duplicate definition - constructor");
                                    return
                                }(0, l.h)(this, {
                                    deploy: t
                                });
                                return;
                            case "fallback":
                                0 === t.inputs.length ? o = !0 : ((0, s.en)(!a || t.payable !== a.payable, "conflicting fallback fragments", `fragments[${e}]`, t), o = (a = t).payable);
                                return;
                            case "function":
                                r = this.#M;
                                break;
                            case "event":
                                r = this.#F;
                                break;
                            case "error":
                                r = this.#L;
                                break;
                            default:
                                return
                        }
                        let n = t.format();
                        r.has(n) || r.set(n, t)
                    }), this.deploy || (0, l.h)(this, {
                        deploy: eU.from("constructor()")
                    }), (0, l.h)(this, {
                        fallback: a,
                        receive: o
                    })
                }
                format(t) {
                    let e = t ? "minimal" : "full",
                        r = this.fragments.map(t => t.format(e));
                    return r
                }
                formatJson() {
                    let t = this.fragments.map(t => t.format("json"));
                    return JSON.stringify(t.map(t => JSON.parse(t)))
                }
                getAbiCoder() {
                    return eQ.defaultAbiCoder()
                }#
                G(rq, rW, rZ) {
                    if ((0, o.A7)(rq)) {
                        let rY = rq.toLowerCase();
                        for (let rX of this.#M.values())
                            if (rY === rX.selector) return rX;
                        return null
                    }
                    if (-1 === rq.indexOf("(")) {
                        let r$ = [];
                        for (let [r0, r1] of this.#M) r0.split("(")[0] === rq && r$.push(r1);
                        if (rW) {
                            let r2 = rW.length > 0 ? rW[rW.length - 1] : null,
                                r4 = rW.length,
                                r8 = !0;
                            tP.isTyped(r2) && "overrides" === r2.type && (r8 = !1, r4--);
                            for (let r3 = r$.length - 1; r3 >= 0; r3--) {
                                let r5 = r$[r3].inputs.length;
                                r5 === r4 || r8 && r5 === r4 - 1 || r$.splice(r3, 1)
                            }
                            for (let r6 = r$.length - 1; r6 >= 0; r6--) {
                                let r9 = r$[r6].inputs;
                                for (let r7 = 0; r7 < rW.length; r7++)
                                    if (tP.isTyped(rW[r7])) {
                                        if (r7 >= r9.length) {
                                            if ("overrides" === rW[r7].type) continue;
                                            r$.splice(r6, 1);
                                            break
                                        }
                                        if (rW[r7].type !== r9[r7].baseType) {
                                            r$.splice(r6, 1);
                                            break
                                        }
                                    }
                            }
                        }
                        if (1 === r$.length && rW && rW.length !== r$[0].inputs.length) {
                            let nt = rW[rW.length - 1];
                            (null == nt || Array.isArray(nt) || "object" != typeof nt) && r$.splice(0, 1)
                        }
                        if (0 === r$.length) return null;
                        if (r$.length > 1 && rZ) {
                            let ne = r$.map(t => JSON.stringify(t.format())).join(", ");
                            (0, s.en)(!1, `ambiguous function description (i.e. matches ${ne})`, "key", rq)
                        }
                        return r$[0]
                    }
                    let nr = this.#M.get(eL.from(rq).format());
                    return nr || null
                }
                getFunctionName(t) {
                    let e = this.#G(t, null, !1);
                    return (0, s.en)(e, "no matching function", "key", t), e.name
                }
                hasFunction(t) {
                    return !!this.#G(t, null, !1)
                }
                getFunction(t, e) {
                    return this.#G(t, e || null, !0)
                }
                forEachFunction(t) {
                    let e = Array.from(this.#M.keys());
                    e.sort((t, e) => t.localeCompare(e));
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t(this.#M.get(n), r)
                    }
                }#
                H(nn, ni, ns) {
                    if ((0, o.A7)(nn)) {
                        let na = nn.toLowerCase();
                        for (let no of this.#F.values())
                            if (na === no.topicHash) return no;
                        return null
                    }
                    if (-1 === nn.indexOf("(")) {
                        let nl = [];
                        for (let [nu, nc] of this.#F) nu.split("(")[0] === nn && nl.push(nc);
                        if (ni) {
                            for (let nh = nl.length - 1; nh >= 0; nh--) nl[nh].inputs.length < ni.length && nl.splice(nh, 1);
                            for (let nf = nl.length - 1; nf >= 0; nf--) {
                                let nd = nl[nf].inputs;
                                for (let np = 0; np < ni.length; np++)
                                    if (tP.isTyped(ni[np]) && ni[np].type !== nd[np].baseType) {
                                        nl.splice(nf, 1);
                                        break
                                    }
                            }
                        }
                        if (0 === nl.length) return null;
                        if (nl.length > 1 && ns) {
                            let ng = nl.map(t => JSON.stringify(t.format())).join(", ");
                            (0, s.en)(!1, `ambiguous event description (i.e. matches ${ng})`, "key", nn)
                        }
                        return nl[0]
                    }
                    let nm = this.#F.get(eR.from(nn).format());
                    return nm || null
                }
                getEventName(t) {
                    let e = this.#H(t, null, !1);
                    return (0, s.en)(e, "no matching event", "key", t), e.name
                }
                hasEvent(t) {
                    return !!this.#H(t, null, !1)
                }
                getEvent(t, e) {
                    return this.#H(t, e || null, !0)
                }
                forEachEvent(t) {
                    let e = Array.from(this.#F.keys());
                    e.sort((t, e) => t.localeCompare(e));
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t(this.#F.get(n), r)
                    }
                }
                getError(t, e) {
                    if ((0, o.A7)(t)) {
                        let r = t.toLowerCase();
                        if (rJ[r]) return eI.from(rJ[r].signature);
                        for (let n of this.#L.values())
                            if (r === n.selector) return n;
                        return null
                    }
                    if (-1 === t.indexOf("(")) {
                        let i = [];
                        for (let [a, l] of this.#L) a.split("(")[0] === t && i.push(l);
                        if (0 === i.length) return "Error" === t ? eI.from("error Error(string)") : "Panic" === t ? eI.from("error Panic(uint256)") : null;
                        if (i.length > 1) {
                            let u = i.map(t => JSON.stringify(t.format())).join(", ");
                            (0, s.en)(!1, `ambiguous error description (i.e. ${u})`, "name", t)
                        }
                        return i[0]
                    }
                    if ("Error(string)" === (t = eI.from(t).format())) return eI.from("error Error(string)");
                    if ("Panic(uint256)" === t) return eI.from("error Panic(uint256)");
                    let c = this.#L.get(t);
                    return c || null
                }
                forEachError(t) {
                    let e = Array.from(this.#L.keys());
                    e.sort((t, e) => t.localeCompare(e));
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t(this.#L.get(n), r)
                    }
                }
                _decodeParams(t, e) {
                    return this.#j.decode(t, e)
                }
                _encodeParams(t, e) {
                    return this.#j.encode(t, e)
                }
                encodeDeploy(t) {
                    return this._encodeParams(this.deploy.inputs, t || [])
                }
                decodeErrorResult(t, e) {
                    if ("string" == typeof t) {
                        let r = this.getError(t);
                        (0, s.en)(r, "unknown error", "fragment", t), t = r
                    }
                    return (0, s.en)((0, o.QB)(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, (0, o.QB)(e, 4))
                }
                encodeErrorResult(t, e) {
                    if ("string" == typeof t) {
                        let r = this.getError(t);
                        (0, s.en)(r, "unknown error", "fragment", t), t = r
                    }
                    return (0, o.zo)([t.selector, this._encodeParams(t.inputs, e || [])])
                }
                decodeFunctionData(t, e) {
                    if ("string" == typeof t) {
                        let r = this.getFunction(t);
                        (0, s.en)(r, "unknown function", "fragment", t), t = r
                    }
                    return (0, s.en)((0, o.QB)(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, (0, o.QB)(e, 4))
                }
                encodeFunctionData(t, e) {
                    if ("string" == typeof t) {
                        let r = this.getFunction(t);
                        (0, s.en)(r, "unknown function", "fragment", t), t = r
                    }
                    return (0, o.zo)([t.selector, this._encodeParams(t.inputs, e || [])])
                }
                decodeFunctionResult(t, e) {
                    if ("string" == typeof t) {
                        let r = this.getFunction(t);
                        (0, s.en)(r, "unknown function", "fragment", t), t = r
                    }
                    let n = "invalid length for result data",
                        i = (0, o.h_)(e);
                    if (i.length % 32 == 0) try {
                        return this.#j.decode(t.outputs, i)
                    } catch (a) {
                        n = "could not decode result data"
                    }(0, s.hu)(!1, n, "BAD_DATA", {
                        value: (0, o.Dv)(i),
                        info: {
                            method: t.name,
                            signature: t.format()
                        }
                    })
                }
                makeError(t, e) {
                    let r = (0, o.Pw)(t, "data"),
                        n = eQ.getBuiltinCallException("call", e, r);
                    if (n.message.startsWith("execution reverted (unknown custom error)")) {
                        let i = (0, o.Dv)(r.slice(0, 4)),
                            s = this.getError(i);
                        if (s) try {
                            let a = this.#j.decode(s.inputs, r.slice(4));
                            n.revert = {
                                name: s.name,
                                signature: s.format(),
                                args: a
                            }, n.reason = n.revert.signature, n.message = `execution reverted: ${n.reason}`
                        } catch (l) {
                            n.message = "execution reverted (coult not decode custom error)"
                        }
                    }
                    let u = this.parseTransaction(e);
                    return u && (n.invocation = {
                        method: u.name,
                        signature: u.signature,
                        args: u.args
                    }), n
                }
                encodeFunctionResult(t, e) {
                    if ("string" == typeof t) {
                        let r = this.getFunction(t);
                        (0, s.en)(r, "unknown function", "fragment", t), t = r
                    }
                    return (0, o.Dv)(this.#j.encode(t.outputs, e || []))
                }
                encodeFilterTopics(t, e) {
                    if ("string" == typeof t) {
                        let r = this.getEvent(t);
                        (0, s.en)(r, "unknown event", "eventFragment", t), t = r
                    }(0, s.hu)(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", {
                        count: e.length,
                        expectedCount: t.inputs.length
                    });
                    let n = [];
                    t.anonymous || n.push(t.topicHash);
                    let i = (t, e) => "string" === t.type ? tz(e) : "bytes" === t.type ? tc((0, o.Dv)(e)) : ("bool" === t.type && "boolean" == typeof e && (e = e ? "0x01" : "0x00"), t.type.match(/^u?int/) && (e = (0, a.m9)(e)), "address" === t.type && this.#j.encode(["address"], [e]), (0, o.U3)((0, o.Dv)(e), 32));
                    for (e.forEach((e, r) => {
                            let a = t.inputs[r];
                            if (!a.indexed) {
                                (0, s.en)(null == e, "cannot filter non-indexed parameters; must be null", "contract." + a.name, e);
                                return
                            }
                            null == e ? n.push(null) : "array" === a.baseType || "tuple" === a.baseType ? (0, s.en)(!1, "filtering with tuples or arrays not supported", "contract." + a.name, e) : Array.isArray(e) ? n.push(e.map(t => i(a, t))) : n.push(i(a, e))
                        }); n.length && null === n[n.length - 1];) n.pop();
                    return n
                }
                encodeEventLog(t, e) {
                    if ("string" == typeof t) {
                        let r = this.getEvent(t);
                        (0, s.en)(r, "unknown event", "eventFragment", t), t = r
                    }
                    let n = [],
                        i = [],
                        a = [];
                    return t.anonymous || n.push(t.topicHash), (0, s.en)(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach((t, r) => {
                        let s = e[r];
                        if (t.indexed) {
                            if ("string" === t.type) n.push(tz(s));
                            else if ("bytes" === t.type) n.push(tc(s));
                            else if ("tuple" === t.baseType || "array" === t.baseType) throw Error("not implemented");
                            else n.push(this.#j.encode([t.type], [s]))
                        } else i.push(t), a.push(s)
                    }), {
                        data: this.#j.encode(i, a),
                        topics: n
                    }
                }
                decodeEventLog(t, e, r) {
                    if ("string" == typeof t) {
                        let n = this.getEvent(t);
                        (0, s.en)(n, "unknown event", "eventFragment", t), t = n
                    }
                    if (null != r && !t.anonymous) {
                        let i = t.topicHash;
                        (0, s.en)((0, o.A7)(r[0], 32) && r[0].toLowerCase() === i, "fragment/topic mismatch", "topics[0]", r[0]), r = r.slice(1)
                    }
                    let a = [],
                        l = [],
                        u = [];
                    t.inputs.forEach((t, e) => {
                        t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (a.push(ew.from({
                            type: "bytes32",
                            name: t.name
                        })), u.push(!0)) : (a.push(t), u.push(!1)) : (l.push(t), u.push(!1))
                    });
                    let c = null != r ? this.#j.decode(a, (0, o.zo)(r)) : null,
                        h = this.#j.decode(l, e, !0),
                        f = [],
                        p = [],
                        g = 0,
                        m = 0;
                    return t.inputs.forEach((t, e) => {
                        let r = null;
                        if (t.indexed) {
                            if (null == c) r = new rV(null);
                            else if (u[e]) r = new rV(c[m++]);
                            else try {
                                r = c[m++]
                            } catch (n) {
                                r = n
                            }
                        } else try {
                            r = h[g++]
                        } catch (i) {
                            r = i
                        }
                        f.push(r), p.push(t.name || null)
                    }), d.fromItems(f, p)
                }
                parseTransaction(t) {
                    let e = (0, o.Pw)(t.data, "tx.data"),
                        r = (0, a.yT)(null != t.value ? t.value : 0, "tx.value"),
                        n = this.getFunction((0, o.Dv)(e.slice(0, 4)));
                    if (!n) return null;
                    let i = this.#j.decode(n.inputs, e.slice(4));
                    return new rQ(n, n.selector, i, r)
                }
                parseCallResult(t) {
                    throw Error("@TODO")
                }
                parseLog(t) {
                    let e = this.getEvent(t.topics[0]);
                    return !e || e.anonymous ? null : new rH(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics))
                }
                parseError(t) {
                    let e = (0, o.Dv)(t),
                        r = this.getError((0, o.QB)(e, 0, 4));
                    if (!r) return null;
                    let n = this.#j.decode(r.inputs, (0, o.QB)(e, 4));
                    return new r_(r, r.selector, n)
                }
                static from(t) {
                    return t instanceof rK ? t : new rK("string" == typeof t ? JSON.parse(t) : "function" == typeof t.format ? t.format("json") : t)
                }
            }
            let ny = BigInt(0);

            function nA(t) {
                return null == t ? null : t
            }

            function nw(t) {
                return null == t ? null : t.toString()
            }
            class nb {
                gasPrice;
                maxFeePerGas;
                maxPriorityFeePerGas;
                constructor(t, e, r) {
                    (0, l.h)(this, {
                        gasPrice: nA(t),
                        maxFeePerGas: nA(e),
                        maxPriorityFeePerGas: nA(r)
                    })
                }
                toJSON() {
                    let {
                        gasPrice: t,
                        maxFeePerGas: e,
                        maxPriorityFeePerGas: r
                    } = this;
                    return {
                        _type: "FeeData",
                        gasPrice: nw(t),
                        maxFeePerGas: nw(e),
                        maxPriorityFeePerGas: nw(r)
                    }
                }
            }

            function nv(t) {
                let e = {};
                for (let r of (t.to && (e.to = t.to), t.from && (e.from = t.from), t.data && (e.data = (0, o.Dv)(t.data)), "chainId,gasLimit,gasPrice,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/))) r in t && null != t[r] && (e[r] = (0, a.yT)(t[r], `request.${r}`));
                for (let n of "type,nonce".split(/,/)) n in t && null != t[n] && (e[n] = (0, a.Dx)(t[n], `request.${n}`));
                return t.accessList && (e.accessList = rl(t.accessList)), "blockTag" in t && (e.blockTag = t.blockTag), "enableCcipRead" in t && (e.enableCcipReadEnabled = !!t.enableCcipRead), "customData" in t && (e.customData = t.customData), e
            }
            class nE {
                provider;
                number;
                hash;
                timestamp;
                parentHash;
                nonce;
                difficulty;
                gasLimit;
                gasUsed;
                miner;
                extraData;
                baseFeePerGas;#
                Q;
                constructor(t, e) {
                    this.#Q = t.transactions.map(t => "string" != typeof t ? new nC(t, e) : t), (0, l.h)(this, {
                        provider: e,
                        hash: nA(t.hash),
                        number: t.number,
                        timestamp: t.timestamp,
                        parentHash: t.parentHash,
                        nonce: t.nonce,
                        difficulty: t.difficulty,
                        gasLimit: t.gasLimit,
                        gasUsed: t.gasUsed,
                        miner: t.miner,
                        extraData: t.extraData,
                        baseFeePerGas: nA(t.baseFeePerGas)
                    })
                }
                get transactions() {
                    return this.#Q.map(t => "string" == typeof t ? t : t.hash)
                }
                get prefetchedTransactions() {
                    let t = this.#Q.slice();
                    return 0 === t.length ? [] : ((0, s.hu)("object" == typeof t[0], "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
                        operation: "transactionResponses()"
                    }), t)
                }
                toJSON() {
                    let {
                        baseFeePerGas: t,
                        difficulty: e,
                        extraData: r,
                        gasLimit: n,
                        gasUsed: i,
                        hash: s,
                        miner: a,
                        nonce: o,
                        number: l,
                        parentHash: u,
                        timestamp: c,
                        transactions: h
                    } = this;
                    return {
                        _type: "Block",
                        baseFeePerGas: nw(t),
                        difficulty: nw(e),
                        extraData: r,
                        gasLimit: nw(n),
                        gasUsed: nw(i),
                        hash: s,
                        miner: a,
                        nonce: o,
                        number: l,
                        parentHash: u,
                        timestamp: c,
                        transactions: h
                    }
                }[Symbol.iterator]() {
                    let t = 0,
                        e = this.transactions;
                    return {
                        next: () => t < this.length ? {
                            value: e[t++],
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
                get length() {
                    return this.#Q.length
                }
                get date() {
                    return null == this.timestamp ? null : new Date(1e3 * this.timestamp)
                }
                async getTransaction(t) {
                    let e;
                    if ("number" == typeof t) e = this.#Q[t];
                    else {
                        let r = t.toLowerCase();
                        for (let n of this.#Q) {
                            if ("string" == typeof n) {
                                if (n !== r) continue;
                                e = n;
                                break
                            }
                            if (n.hash !== r) {
                                e = n;
                                break
                            }
                        }
                    }
                    if (null == e) throw Error("no such tx");
                    return "string" == typeof e ? await this.provider.getTransaction(e) : e
                }
                getPrefetchedTransaction(t) {
                    let e = this.prefetchedTransactions;
                    if ("number" == typeof t) return e[t];
                    for (let r of (t = t.toLowerCase(), e))
                        if (r.hash === t) return r;
                    (0, s.en)(!1, "no matching transaction", "indexOrHash", t)
                }
                isMined() {
                    return !!this.hash
                }
                isLondon() {
                    return !!this.baseFeePerGas
                }
                orphanedEvent() {
                    if (!this.isMined()) throw Error("");
                    return {
                        orphan: "drop-block",
                        hash: this.hash,
                        number: this.number
                    }
                }
            }
            class nP {
                provider;
                transactionHash;
                blockHash;
                blockNumber;
                removed;
                address;
                data;
                topics;
                index;
                transactionIndex;
                constructor(t, e) {
                    this.provider = e;
                    let r = Object.freeze(t.topics.slice());
                    (0, l.h)(this, {
                        transactionHash: t.transactionHash,
                        blockHash: t.blockHash,
                        blockNumber: t.blockNumber,
                        removed: t.removed,
                        address: t.address,
                        data: t.data,
                        topics: r,
                        index: t.index,
                        transactionIndex: t.transactionIndex
                    })
                }
                toJSON() {
                    let {
                        address: t,
                        blockHash: e,
                        blockNumber: r,
                        data: n,
                        index: i,
                        removed: s,
                        topics: a,
                        transactionHash: o,
                        transactionIndex: l
                    } = this;
                    return {
                        _type: "log",
                        address: t,
                        blockHash: e,
                        blockNumber: r,
                        data: n,
                        index: i,
                        removed: s,
                        topics: a,
                        transactionHash: o,
                        transactionIndex: l
                    }
                }
                async getBlock() {
                    let t = await this.provider.getBlock(this.blockHash);
                    return (0, s.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
                }
                async getTransaction() {
                    let t = await this.provider.getTransaction(this.transactionHash);
                    return (0, s.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
                }
                async getTransactionReceipt() {
                    let t = await this.provider.getTransactionReceipt(this.transactionHash);
                    return (0, s.hu)(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t
                }
                removedEvent() {
                    return {
                        orphan: "drop-log",
                        log: {
                            transactionHash: this.transactionHash,
                            blockHash: this.blockHash,
                            blockNumber: this.blockNumber,
                            address: this.address,
                            data: this.data,
                            topics: Object.freeze(this.topics.slice()),
                            index: this.index
                        }
                    }
                }
            }
            class nx {
                provider;
                to;
                from;
                contractAddress;
                hash;
                index;
                blockHash;
                blockNumber;
                logsBloom;
                gasUsed;
                cumulativeGasUsed;
                gasPrice;
                type;
                status;
                root;#
                _;
                constructor(t, e) {
                    this.#_ = Object.freeze(t.logs.map(t => new nP(t, e)));
                    let r = ny;
                    null != t.effectiveGasPrice ? r = t.effectiveGasPrice : null != t.gasPrice && (r = t.gasPrice), (0, l.h)(this, {
                        provider: e,
                        to: t.to,
                        from: t.from,
                        contractAddress: t.contractAddress,
                        hash: t.hash,
                        index: t.index,
                        blockHash: t.blockHash,
                        blockNumber: t.blockNumber,
                        logsBloom: t.logsBloom,
                        gasUsed: t.gasUsed,
                        cumulativeGasUsed: t.cumulativeGasUsed,
                        gasPrice: r,
                        type: t.type,
                        status: t.status,
                        root: t.root
                    })
                }
                get logs() {
                    return this.#_
                }
                toJSON() {
                    let {
                        to: t,
                        from: e,
                        contractAddress: r,
                        hash: n,
                        index: i,
                        blockHash: s,
                        blockNumber: a,
                        logsBloom: o,
                        logs: l,
                        status: u,
                        root: c
                    } = this;
                    return {
                        _type: "TransactionReceipt",
                        blockHash: s,
                        blockNumber: a,
                        contractAddress: r,
                        cumulativeGasUsed: nw(this.cumulativeGasUsed),
                        from: e,
                        gasPrice: nw(this.gasPrice),
                        gasUsed: nw(this.gasUsed),
                        hash: n,
                        index: i,
                        logs: l,
                        logsBloom: o,
                        root: c,
                        status: u,
                        to: t
                    }
                }
                get length() {
                    return this.logs.length
                }[Symbol.iterator]() {
                    let t = 0;
                    return {
                        next: () => t < this.length ? {
                            value: this.logs[t++],
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
                get fee() {
                    return this.gasUsed * this.gasPrice
                }
                async getBlock() {
                    let t = await this.provider.getBlock(this.blockHash);
                    if (null == t) throw Error("TODO");
                    return t
                }
                async getTransaction() {
                    let t = await this.provider.getTransaction(this.hash);
                    if (null == t) throw Error("TODO");
                    return t
                }
                async getResult() {
                    return await this.provider.getTransactionResult(this.hash)
                }
                async confirmations() {
                    return await this.provider.getBlockNumber() - this.blockNumber + 1
                }
                removedEvent() {
                    return nO(this)
                }
                reorderedEvent(t) {
                    return (0, s.hu)(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "reorderedEvent(other)"
                    }), nN(this, t)
                }
            }
            class nC {
                provider;
                blockNumber;
                blockHash;
                index;
                hash;
                type;
                to;
                from;
                nonce;
                gasLimit;
                gasPrice;
                maxPriorityFeePerGas;
                maxFeePerGas;
                data;
                value;
                chainId;
                signature;
                accessList;#
                V;
                constructor(t, e) {
                    this.provider = e, this.blockNumber = null != t.blockNumber ? t.blockNumber : null, this.blockHash = null != t.blockHash ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = null != t.maxFeePerGas ? t.maxFeePerGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = null != t.accessList ? t.accessList : null, this.#V = -1
                }
                toJSON() {
                    let {
                        blockNumber: t,
                        blockHash: e,
                        index: r,
                        hash: n,
                        type: i,
                        to: s,
                        from: a,
                        nonce: o,
                        data: l,
                        signature: u,
                        accessList: c
                    } = this;
                    return {
                        _type: "TransactionReceipt",
                        accessList: c,
                        blockNumber: t,
                        blockHash: e,
                        chainId: nw(this.chainId),
                        data: l,
                        from: a,
                        gasLimit: nw(this.gasLimit),
                        gasPrice: nw(this.gasPrice),
                        hash: n,
                        maxFeePerGas: nw(this.maxFeePerGas),
                        maxPriorityFeePerGas: nw(this.maxPriorityFeePerGas),
                        nonce: o,
                        signature: u,
                        to: s,
                        index: r,
                        type: i,
                        value: nw(this.value)
                    }
                }
                async getBlock() {
                    let t = this.blockNumber;
                    if (null == t) {
                        let e = await this.getTransaction();
                        e && (t = e.blockNumber)
                    }
                    if (null == t) return null;
                    let r = this.provider.getBlock(t);
                    if (null == r) throw Error("TODO");
                    return r
                }
                async getTransaction() {
                    return this.provider.getTransaction(this.hash)
                }
                async confirmations() {
                    if (null == this.blockNumber) {
                        let {
                            tx: t,
                            blockNumber: e
                        } = await (0, l.m)({
                            tx: this.getTransaction(),
                            blockNumber: this.provider.getBlockNumber()
                        });
                        return null == t || null == t.blockNumber ? 0 : e - t.blockNumber + 1
                    }
                    let r = await this.provider.getBlockNumber();
                    return r - this.blockNumber + 1
                }
                async wait(t, e) {
                    let r = null == t ? 1 : t,
                        n = null == e ? 0 : e,
                        i = this.#V,
                        a = -1,
                        o = -1 === i,
                        u = async () => {
                            if (o) return null;
                            let {
                                blockNumber: t,
                                nonce: e
                            } = await (0, l.m)({
                                blockNumber: this.provider.getBlockNumber(),
                                nonce: this.provider.getTransactionCount(this.from)
                            });
                            if (e < this.nonce) {
                                i = t;
                                return
                            }
                            if (o) return null;
                            let n = await this.getTransaction();
                            if (!n || null == n.blockNumber)
                                for (-1 === a && (a = i - 3) < this.#V && (a = this.#V); a <= t;) {
                                    if (o) return null;
                                    let u = await this.provider.getBlock(a, !0);
                                    if (null == u) break;
                                    for (let c of u)
                                        if (c === this.hash) return;
                                    for (let h = 0; h < u.length; h++) {
                                        let f = await u.getTransaction(h);
                                        if (f.from === this.from && f.nonce === this.nonce) {
                                            if (o) return null;
                                            let d = await this.provider.getTransactionReceipt(f.hash);
                                            if (null == d || t - d.blockNumber + 1 < r) return;
                                            let p = "replaced";
                                            f.data === this.data && f.to === this.to && f.value === this.value ? p = "repriced" : "0x" === f.data && f.from === f.to && f.value === ny && (p = "cancelled"), (0, s.hu)(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                                                cancelled: "replaced" === p || "cancelled" === p,
                                                reason: p,
                                                replacement: f.replaceableTransaction(i),
                                                hash: f.hash,
                                                receipt: d
                                            })
                                        }
                                    }
                                    a++
                                }
                        },
                        c = await this.provider.getTransactionReceipt(this.hash);
                    if (c) {
                        if (await c.confirmations() >= r) return c
                    } else if (await u(), 0 === r) return null;
                    let h = new Promise((t, e) => {
                        let a = [],
                            l = () => {
                                a.forEach(t => t())
                            };
                        if (a.push(() => {
                                o = !0
                            }), n > 0) {
                            let c = setTimeout(() => {
                                l(), e((0, s.wf)("wait for transaction timeout", "TIMEOUT"))
                            }, n);
                            a.push(() => {
                                clearTimeout(c)
                            })
                        }
                        let h = async e => {
                            await e.confirmations() >= r && (l(), t(e))
                        };
                        if (a.push(() => {
                                this.provider.off(this.hash, h)
                            }), this.provider.on(this.hash, h), i >= 0) {
                            let f = async () => {
                                try {
                                    await u()
                                } catch (t) {
                                    if ((0, s.VZ)(t, "TRANSACTION_REPLACED")) {
                                        l(), e(t);
                                        return
                                    }
                                }
                                o || this.provider.once("block", f)
                            };
                            a.push(() => {
                                this.provider.off("block", f)
                            }), this.provider.once("block", f)
                        }
                    });
                    return await h
                }
                isMined() {
                    return null != this.blockHash
                }
                isLegacy() {
                    return 0 === this.type
                }
                isBerlin() {
                    return 1 === this.type
                }
                isLondon() {
                    return 2 === this.type
                }
                removedEvent() {
                    return (0, s.hu)(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), nO(this)
                }
                reorderedEvent(t) {
                    return (0, s.hu)(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), (0, s.hu)(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), nN(this, t)
                }
                replaceableTransaction(t) {
                    (0, s.en)(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
                    let e = new nC(this, this.provider);
                    return e.#V = t, e
                }
            }

            function nN(t, e) {
                return {
                    orphan: "reorder-transaction",
                    tx: t,
                    other: e
                }
            }

            function nO(t) {
                return {
                    orphan: "drop-transaction",
                    tx: t
                }
            }
            class nT {
                filter;
                emitter;#
                z;
                constructor(t, e, r) {
                    this.#z = e, (0, l.h)(this, {
                        emitter: t,
                        filter: r
                    })
                }
                async removeListener() {
                    null != this.#z && await this.emitter.off(this.filter, this.#z)
                }
            }
            class nk extends nP {
                interface;
                fragment;
                args;
                constructor(t, e, r) {
                    super(t, t.provider);
                    let n = e.decodeEventLog(r, t.data, t.topics);
                    (0, l.h)(this, {
                        args: n,
                        fragment: r,
                        interface: e
                    })
                }
                get eventName() {
                    return this.fragment.name
                }
                get eventSignature() {
                    return this.fragment.format()
                }
            }
            class nB extends nx {#
                J;
                constructor(t, e, r) {
                    super(r, e), this.#J = t
                }
                get logs() {
                    return super.logs.map(t => {
                        let e = t.topics.length ? this.#J.getEvent(t.topics[0]) : null;
                        return e ? new nk(t, this.#J, e) : t
                    })
                }
            }
            class nS extends nC {#
                J;
                constructor(t, e, r) {
                    super(r, e), this.#J = t
                }
                async wait(t) {
                    let e = await super.wait();
                    return null == e ? null : new nB(this.#J, this.provider, e)
                }
            }
            class nI extends nT {
                log;
                constructor(t, e, r, n) {
                    super(t, e, r), (0, l.h)(this, {
                        log: n
                    })
                }
                async getBlock() {
                    return await this.log.getBlock()
                }
                async getTransaction() {
                    return await this.log.getTransaction()
                }
                async getTransactionReceipt() {
                    return await this.log.getTransactionReceipt()
                }
            }
            class nR extends nI {
                constructor(t, e, r, n, i) {
                    super(t, e, r, new nk(i, t.interface, n));
                    let s = t.interface.decodeEventLog(n, this.log.data, this.log.topics);
                    (0, l.h)(this, {
                        args: s,
                        fragment: n
                    })
                }
                get eventName() {
                    return this.fragment.name
                }
                get eventSignature() {
                    return this.fragment.format()
                }
            }
            let nU = BigInt(0);

            function nD(t) {
                return t && "function" == typeof t.call
            }

            function nL(t) {
                return t && "function" == typeof t.estimateGas
            }

            function nF(t) {
                return t && "function" == typeof t.resolveName
            }

            function nM(t) {
                return t && "function" == typeof t.sendTransaction
            }
            class nj {#
                K;
                fragment;
                constructor(t, e, r) {
                    if ((0, l.h)(this, {
                            fragment: e
                        }), e.inputs.length < r.length) throw Error("too many arguments");
                    let n = nG(t.runner, "resolveName"),
                        i = nF(n) ? n : null;
                    this.#K = async function() {
                        let n = await Promise.all(e.inputs.map((t, e) => {
                            let n = r[e];
                            return null == n ? null : t.walkAsync(r[e], (t, e) => "address" === t ? eW(e, i) : e)
                        }));
                        return t.interface.encodeFilterTopics(e, n)
                    }()
                }
                getTopicFilter() {
                    return this.#K
                }
            }

            function nG(t, e) {
                return null == t ? null : "function" == typeof t[e] ? t : t.provider && "function" == typeof t.provider[e] ? t.provider : null
            }

            function nH(t) {
                return null == t ? null : t.provider || null
            }
            async function nQ(t, e) {
                let r = nv(tP.dereference(t, "overrides"));
                return (0, s.en)(null == r.to || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", r.to), (0, s.en)(null == r.data || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", r.data), r.from && (r.from = await eW(r.from)), r
            }
            async function n_(t, e, r) {
                let n = nG(t, "resolveName"),
                    i = nF(n) ? n : null;
                return await Promise.all(e.map((t, e) => t.walkAsync(r[e], (t, e) => (e = tP.dereference(e, t), "address" === t) ? eW(e, i) : e)))
            }
            let nV = Symbol.for("_ethersInternal_contract"),
                nz = new WeakMap;

            function nJ(t) {
                return nz.get(t[nV])
            }
            async function nK(t, e) {
                let r;
                let n = null;
                if (Array.isArray(e)) {
                    let i = function(e) {
                        if ((0, o.A7)(e, 32)) return e;
                        let r = t.interface.getEvent(e);
                        return (0, s.en)(r, "unknown fragment", "name", e), r.topicHash
                    };
                    r = e.map(t => null == t ? null : Array.isArray(t) ? t.map(i) : i(t))
                } else "*" === e ? r = [null] : "string" == typeof e ? (0, o.A7)(e, 32) ? r = [e] : (n = t.interface.getEvent(e), (0, s.en)(n, "unknown fragment", "event", e), r = [n.topicHash]) : e && "object" == typeof e && "getTopicFilter" in e && "function" == typeof e.getTopicFilter && e.fragment ? r = await e.getTopicFilter() : "fragment" in e ? r = [(n = e.fragment).topicHash] : (0, s.en)(!1, "unknown event name", "event", e);
                r = r.map(t => {
                    if (null == t) return null;
                    if (Array.isArray(t)) {
                        let e = Array.from(new Set(t.map(t => t.toLowerCase())).values());
                        return 1 === e.length ? e[0] : (e.sort(), e)
                    }
                    return t.toLowerCase()
                });
                let a = r.map(t => null == t ? "null" : Array.isArray(t) ? t.join("|") : t).join("&");
                return {
                    fragment: n,
                    tag: a,
                    topics: r
                }
            }
            async function nq(t, e) {
                let {
                    subs: r
                } = nJ(t);
                return r.get((await nK(t, e)).tag) || null
            }
            async function nW(t, e, r) {
                let n = nH(t.runner);
                (0, s.hu)(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
                    operation: e
                });
                let {
                    fragment: i,
                    tag: a,
                    topics: o
                } = await nK(t, r), {
                    addr: l,
                    subs: u
                } = nJ(t), c = u.get(a);
                if (!c) {
                    let h = {
                            address: l || t,
                            topics: o
                        },
                        f = e => {
                            let n = i;
                            if (null == n) try {
                                n = t.interface.getEvent(e.topics[0])
                            } catch (s) {}
                            if (n) {
                                let a = n,
                                    o = i ? t.interface.decodeEventLog(i, e.data, e.topics) : [];
                                nX(t, r, o, n => new nR(t, n, r, a, e))
                            } else nX(t, r, [], n => new nI(t, n, r, e))
                        },
                        d = [],
                        p = () => {
                            d.length || d.push(n.on(h, f))
                        },
                        g = async () => {
                            if (0 == d.length) return;
                            let t = d;
                            d = [], await Promise.all(t), n.off(h, f)
                        };
                    c = {
                        tag: a,
                        listeners: [],
                        start: p,
                        stop: g
                    }, u.set(a, c)
                }
                return c
            }
            let nZ = Promise.resolve();
            async function nY(t, e, r, n) {
                await nZ;
                let i = await nq(t, e);
                if (!i) return !1;
                let s = i.listeners.length;
                return i.listeners = i.listeners.filter(({
                    listener: e,
                    once: i
                }) => {
                    let s = Array.from(r);
                    n && s.push(n(i ? null : e));
                    try {
                        e.call(t, ...s)
                    } catch (a) {}
                    return !i
                }), s > 0
            }
            async function nX(t, e, r, n) {
                try {
                    await nZ
                } catch (i) {}
                let s = nY(t, e, r, n);
                return nZ = s, await s
            }
            let n$ = ["then"];
            class n0 {
                target;
                interface;
                runner;
                filters;
                [nV];
                fallback;
                constructor(t, e, r, n) {
                    var i;
                    let u;
                    (0, s.en)("string" == typeof t || eK(t), "invalid value for Contract target", "target", t), null == r && (r = null);
                    let c = rK.from(e);
                    (0, l.h)(this, {
                        target: t,
                        runner: r,
                        interface: c
                    }), Object.defineProperty(this, nV, {
                        value: {}
                    });
                    let h = null,
                        f = null;
                    if (n) {
                        let d = nH(r);
                        f = new nS(this.interface, d, n)
                    }
                    let p = new Map;
                    if ("string" == typeof t) {
                        if ((0, o.A7)(t)) h = t, u = Promise.resolve(t);
                        else {
                            let g = nG(r, "resolveName");
                            if (!nF(g)) throw (0, s.wf)("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
                                operation: "resolveName"
                            });
                            u = g.resolveName(t).then(t => {
                                if (null == t) throw Error("TODO");
                                return nJ(this).addr = t, t
                            })
                        }
                    } else u = t.getAddress().then(t => {
                        if (null == t) throw Error("TODO");
                        return nJ(this).addr = t, t
                    });
                    i = {
                        addrPromise: u,
                        addr: h,
                        deployTx: f,
                        subs: p
                    }, nz.set(this[nV], i);
                    let m = new Proxy({}, {
                        get: (t, e, r) => {
                            if (n$.indexOf(e) >= 0) return Reflect.get(t, e, r);
                            let n = String(e),
                                i = this.getEvent(n);
                            if (i) return i;
                            throw Error(`unknown contract event: ${n}`)
                        },
                        has: (t, e) => n$.indexOf(e) >= 0 ? Reflect.has(t, e) : Reflect.has(t, e) || this.interface.hasEvent(String(e))
                    });
                    return (0, l.h)(this, {
                        filters: m
                    }), (0, l.h)(this, {
                        fallback: c.receive || c.fallback ? function(t) {
                            let e = async function(e) {
                                    let r = await nQ(e, ["data"]);
                                    r.to = await t.getAddress();
                                    let n = t.interface,
                                        i = (0, a.yT)(r.value || nU, "overrides.value") === nU,
                                        o = "0x" === (r.data || "0x");
                                    !n.fallback || n.fallback.payable || !n.receive || o || i || (0, s.en)(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", e), (0, s.en)(n.fallback || o, "cannot send data to receive-only contract", "overrides.data", r.data);
                                    let l = n.receive || n.fallback && n.fallback.payable;
                                    return (0, s.en)(l || i, "cannot send value to non-payable fallback", "overrides.value", r.value), (0, s.en)(n.fallback || o, "cannot send data to receive-only contract", "overrides.data", r.data), r
                                },
                                r = async function(r) {
                                    let n = nG(t.runner, "call");
                                    (0, s.hu)(nD(n), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                                        operation: "call"
                                    });
                                    let i = await e(r);
                                    try {
                                        return await n.call(i)
                                    } catch (a) {
                                        if ((0, s.Hl)(a) && a.data) throw t.interface.makeError(a.data, i);
                                        throw a
                                    }
                                },
                                n = async function(r) {
                                    let n = t.runner;
                                    (0, s.hu)(nM(n), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                                        operation: "sendTransaction"
                                    });
                                    let i = await n.sendTransaction(await e(r)),
                                        a = nH(t.runner);
                                    return new nS(t.interface, a, i)
                                },
                                i = async function(r) {
                                    let n = nG(t.runner, "estimateGas");
                                    return (0, s.hu)(nL(n), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                                        operation: "estimateGas"
                                    }), await n.estimateGas(await e(r))
                                },
                                o = async t => await n(t);
                            return (0, l.h)(o, {
                                _contract: t,
                                estimateGas: i,
                                populateTransaction: e,
                                send: n,
                                staticCall: r
                            }), o
                        }(this) : null
                    }), new Proxy(this, {
                        get: (t, e, r) => {
                            if (e in t || n$.indexOf(e) >= 0) return Reflect.get(t, e, r);
                            let n = String(e),
                                i = t.getFunction(n);
                            if (i) return i;
                            throw Error(`unknown contract method: ${n}`)
                        },
                        has: (t, e) => e in t || n$.indexOf(e) >= 0 ? Reflect.has(t, e) : t.interface.hasFunction(String(e))
                    })
                }
                connect(t) {
                    return new n0(this.target, this.interface, t)
                }
                attach(t) {
                    return new n0(t, this.interface, this.runner)
                }
                async getAddress() {
                    return await nJ(this).addrPromise
                }
                async getDeployedCode() {
                    let t = nH(this.runner);
                    (0, s.hu)(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
                        operation: "getDeployedCode"
                    });
                    let e = await t.getCode(await this.getAddress());
                    return "0x" === e ? null : e
                }
                async waitForDeployment() {
                    let t = this.deploymentTransaction();
                    if (t) return await t.wait(), this;
                    let e = await this.getDeployedCode();
                    if (null != e) return this;
                    let r = nH(this.runner);
                    return (0, s.hu)(null != r, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
                        operation: "waitForDeployment"
                    }), new Promise((t, e) => {
                        let n = async () => {
                            try {
                                let i = await this.getDeployedCode();
                                if (null != i) return t(this);
                                r.once("block", n)
                            } catch (s) {
                                e(s)
                            }
                        };
                        n()
                    })
                }
                deploymentTransaction() {
                    return nJ(this).deployTx
                }
                getFunction(t) {
                    "string" != typeof t && (t = t.format());
                    let e = function(t, e) {
                        let r = function(...r) {
                                let n = t.interface.getFunction(e, r);
                                return (0, s.hu)(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                    operation: "fragment"
                                }), n
                            },
                            n = async function(...e) {
                                let n = r(...e),
                                    i = {};
                                if (n.inputs.length + 1 === e.length && (i = await nQ(e.pop())), n.inputs.length !== e.length) throw Error("internal error: fragment inputs doesn't match arguments; should not happen");
                                let s = await n_(t.runner, n.inputs, e);
                                return Object.assign({}, i, await (0, l.m)({
                                    to: t.getAddress(),
                                    data: t.interface.encodeFunctionData(n, s)
                                }))
                            },
                            i = async function(...t) {
                                let e = await u(...t);
                                return 1 === e.length ? e[0] : e
                            },
                            a = async function(...e) {
                                let r = t.runner;
                                (0, s.hu)(nM(r), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                                    operation: "sendTransaction"
                                });
                                let i = await r.sendTransaction(await n(...e)),
                                    a = nH(t.runner);
                                return new nS(t.interface, a, i)
                            },
                            o = async function(...e) {
                                let r = nG(t.runner, "estimateGas");
                                return (0, s.hu)(nL(r), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                                    operation: "estimateGas"
                                }), await r.estimateGas(await n(...e))
                            },
                            u = async function(...e) {
                                let i = nG(t.runner, "call");
                                (0, s.hu)(nD(i), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                                    operation: "call"
                                });
                                let a = await n(...e),
                                    o = "0x";
                                try {
                                    o = await i.call(a)
                                } catch (l) {
                                    if ((0, s.Hl)(l) && l.data) throw t.interface.makeError(l.data, a);
                                    throw l
                                }
                                let u = r(...e);
                                return t.interface.decodeFunctionResult(u, o)
                            },
                            c = async (...t) => {
                                let e = r(...t);
                                return e.constant ? await i(...t) : await a(...t)
                            };
                        return (0, l.h)(c, {
                            name: t.interface.getFunctionName(e),
                            _contract: t,
                            _key: e,
                            getFragment: r,
                            estimateGas: o,
                            populateTransaction: n,
                            send: a,
                            staticCall: i,
                            staticCallResult: u
                        }), Object.defineProperty(c, "fragment", {
                            configurable: !1,
                            enumerable: !0,
                            get: () => {
                                let r = t.interface.getFunction(e);
                                return (0, s.hu)(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                    operation: "fragment"
                                }), r
                            }
                        }), c
                    }(this, t);
                    return e
                }
                getEvent(t) {
                    return "string" != typeof t && (t = t.format()),
                        function(t, e) {
                            let r = function(...r) {
                                    let n = t.interface.getEvent(e, r);
                                    return (0, s.hu)(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                        operation: "fragment"
                                    }), n
                                },
                                n = function(...e) {
                                    return new nj(t, r(...e), e)
                                };
                            return (0, l.h)(n, {
                                name: t.interface.getEventName(e),
                                _contract: t,
                                _key: e,
                                getFragment: r
                            }), Object.defineProperty(n, "fragment", {
                                configurable: !1,
                                enumerable: !0,
                                get: () => {
                                    let r = t.interface.getEvent(e);
                                    return (0, s.hu)(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                        operation: "fragment"
                                    }), r
                                }
                            }), n
                        }(this, t)
                }
                async queryTransaction(t) {
                    throw Error("@TODO")
                }
                async queryFilter(t, e, r) {
                    null == e && (e = 0), null == r && (r = "latest");
                    let {
                        addr: n,
                        addrPromise: i
                    } = nJ(this), a = n || await i, {
                        fragment: o,
                        topics: l
                    } = await nK(this, t), u = {
                        address: a,
                        topics: l,
                        fromBlock: e,
                        toBlock: r
                    }, c = nH(this.runner);
                    return (0, s.hu)(c, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
                        operation: "queryFilter"
                    }), (await c.getLogs(u)).map(t => {
                        let e = o;
                        if (null == e) try {
                            e = this.interface.getEvent(t.topics[0])
                        } catch (r) {}
                        return e ? new nk(t, this.interface, e) : new nP(t, c)
                    })
                }
                async on(t, e) {
                    let r = await nW(this, "on", t);
                    return r.listeners.push({
                        listener: e,
                        once: !1
                    }), r.start(), this
                }
                async once(t, e) {
                    let r = await nW(this, "once", t);
                    return r.listeners.push({
                        listener: e,
                        once: !0
                    }), r.start(), this
                }
                async emit(t, ...e) {
                    return await nX(this, t, e, null)
                }
                async listenerCount(t) {
                    if (t) {
                        let e = await nq(this, t);
                        return e ? e.listeners.length : 0
                    }
                    let {
                        subs: r
                    } = nJ(this), n = 0;
                    for (let {
                            listeners: i
                        } of r.values()) n += i.length;
                    return n
                }
                async listeners(t) {
                    if (t) {
                        let e = await nq(this, t);
                        return e ? e.listeners.map(({
                            listener: t
                        }) => t) : []
                    }
                    let {
                        subs: r
                    } = nJ(this), n = [];
                    for (let {
                            listeners: i
                        } of r.values()) n = n.concat(i.map(({
                        listener: t
                    }) => t));
                    return n
                }
                async off(t, e) {
                    let r = await nq(this, t);
                    if (!r) return this;
                    if (e) {
                        let n = r.listeners.map(({
                            listener: t
                        }) => t).indexOf(e);
                        n >= 0 && r.listeners.splice(n, 1)
                    }
                    return (null == e || 0 === r.listeners.length) && (r.stop(), nJ(this).subs.delete(r.tag)), this
                }
                async removeAllListeners(t) {
                    if (t) {
                        let e = await nq(this, t);
                        if (!e) return this;
                        e.stop(), nJ(this).subs.delete(e.tag)
                    } else {
                        let {
                            subs: r
                        } = nJ(this);
                        for (let {
                                tag: n,
                                stop: i
                            } of r.values()) i(), r.delete(n)
                    }
                    return this
                }
                async addListener(t, e) {
                    return await this.on(t, e)
                }
                async removeListener(t, e) {
                    return await this.off(t, e)
                }
                static buildClass(t) {
                    return class extends n0 {
                        constructor(e, r = null) {
                            super(e, t, r)
                        }
                    }
                }
                static from(t, e, r) {
                    null == r && (r = null);
                    let n = new this(t, e, r);
                    return n
                }
            }

            function n1() {
                return n0
            }
            class n2 extends n1() {}

            function n4(t) {
                var e;
                let r;
                return e = function(t) {
                    let e = 0;

                    function r() {
                        return t[e++] << 8 | t[e++]
                    }
                    let n = r(),
                        i = 1,
                        s = [0, 1];
                    for (let a = 1; a < n; a++) s.push(i += r());
                    let o = r(),
                        l = e;
                    e += o;
                    let u = 0,
                        c = 0;

                    function h() {
                        return 0 == u && (c = c << 8 | t[e++], u = 8), c >> --u & 1
                    }
                    let f = 2147483648 - 1,
                        d = 0;
                    for (let p = 0; p < 31; p++) d = d << 1 | h();
                    let g = [],
                        m = 0,
                        y = 2147483648;
                    for (;;) {
                        let A = Math.floor(((d - m + 1) * i - 1) / y),
                            w = 0,
                            b = n;
                        for (; b - w > 1;) {
                            let v = w + b >>> 1;
                            A < s[v] ? b = v : w = v
                        }
                        if (0 == w) break;
                        g.push(w);
                        let E = m + Math.floor(y * s[w] / i),
                            P = m + Math.floor(y * s[w + 1] / i) - 1;
                        for (;
                            ((E ^ P) & 1073741824) == 0;) d = d << 1 & f | h(), E = E << 1 & f, P = P << 1 & f | 1;
                        for (; E & ~P & 536870912;) d = 1073741824 & d | d << 1 & f >>> 1 | h(), E = E << 1 ^ 1073741824, P = (1073741824 ^ P) << 1 | 1073741825;
                        m = E, y = 1 + P - E
                    }
                    let x = n - 4;
                    return g.map(e => {
                        switch (e - x) {
                            case 3:
                                return x + 65792 + (t[l++] << 16 | t[l++] << 8 | t[l++]);
                            case 2:
                                return x + 256 + (t[l++] << 8 | t[l++]);
                            case 1:
                                return x + t[l++];
                            default:
                                return e - 1
                        }
                    })
                }(function(t) {
                    let e = [];
                    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((t, r) => e[t.charCodeAt(0)] = r);
                    let r = t.length,
                        n = new Uint8Array(6 * r >> 3);
                    for (let i = 0, s = 0, a = 0, o = 0; i < r; i++) o = o << 6 | e[t.charCodeAt(i)], (a += 6) >= 8 && (n[s++] = o >> (a -= 8));
                    return n
                }(t)), r = 0, () => e[r++]
            }

            function n8(t, e = 0) {
                let r = [];
                for (;;) {
                    let n = t(),
                        i = t();
                    if (!i) break;
                    e += n;
                    for (let s = 0; s < i; s++) r.push(e + s);
                    e += i + 1
                }
                return r
            }

            function n3(t) {
                return n6(() => {
                    let e = n8(t);
                    if (e.length) return e
                })
            }

            function n5(t) {
                let e = [];
                for (;;) {
                    let r = t();
                    if (0 == r) break;
                    e.push(function(t, e) {
                        let r = 1 + e(),
                            n = e(),
                            i = n6(e);
                        return n9(i.length, 1 + t, e).flatMap((t, e) => {
                            let [s, ...a] = t;
                            return Array(i[e]).fill().map((t, e) => {
                                let i = e * n;
                                return [s + e * r, a.map(t => t + i)]
                            })
                        })
                    }(r, t))
                }
                for (;;) {
                    let n = t() - 1;
                    if (n < 0) break;
                    e.push(n9(1 + t(), 1 + n, t).map(t => [t[0], t.slice(1)]))
                }
                return e.flat()
            }

            function n6(t) {
                let e = [];
                for (;;) {
                    let r = t(e.length);
                    if (!r) break;
                    e.push(r)
                }
                return e
            }

            function n9(t, e, r) {
                let n = Array(t).fill().map(() => []);
                for (let i = 0; i < e; i++)(function(t, e) {
                    let r = Array(t);
                    for (let n = 0, i = 0; n < t; n++) {
                        var s;
                        r[n] = i += 1 & (s = e()) ? ~s >> 1 : s >> 1
                    }
                    return r
                })(t, r).forEach((t, e) => n[e].push(t));
                return n
            }
            var n7 = n4("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");
            let it = new Map([
                [8217, "apostrophe"],
                [8260, "fraction slash"],
                [12539, "middle dot"]
            ]);

            function ie(t) {
                return `{${t.toString(16).toUpperCase().padStart(2,"0")}}`
            }

            function ir(t) {
                let e = t.length;
                if (e < 4096) return String.fromCodePoint(...t);
                let r = [];
                for (let n = 0; n < e;) r.push(String.fromCodePoint(...t.slice(n, n += 4096)));
                return r.join("")
            }
            var ii = n4("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");

            function is(t) {
                return t >> 24 & 255
            }

            function ia(t) {
                return 16777215 & t
            }
            let io = new Map(n3(ii).flatMap((t, e) => t.map(t => [t, e + 1 << 24]))),
                il = new Set(n8(ii)),
                iu = new Map,
                ic = new Map;
            for (let [ih, id] of n5(ii)) {
                if (!il.has(ih) && 2 == id.length) {
                    let [ip, ig] = id, im = ic.get(ip);
                    im || (im = new Map, ic.set(ip, im)), im.set(ig, ih)
                }
                iu.set(ih, id.reverse())
            }

            function iy(t) {
                return t >= 44032 && t < 55204
            }

            function iA(t) {
                let e = [],
                    r = [],
                    n = !1;

                function i(t) {
                    let r = io.get(t);
                    r && (n = !0, t |= r), e.push(t)
                }
                for (let s of t)
                    for (;;) {
                        if (s < 128) e.push(s);
                        else if (iy(s)) {
                            let a = s - 44032,
                                o = a / 588 | 0,
                                l = a % 588 / 28 | 0,
                                u = a % 28;
                            i(4352 + o), i(4449 + l), u > 0 && i(4519 + u)
                        } else {
                            let c = iu.get(s);
                            c ? r.push(...c) : i(s)
                        }
                        if (!r.length) break;
                        s = r.pop()
                    }
                if (n && e.length > 1) {
                    let h = is(e[0]);
                    for (let f = 1; f < e.length; f++) {
                        let d = is(e[f]);
                        if (0 == d || h <= d) {
                            h = d;
                            continue
                        }
                        let p = f - 1;
                        for (;;) {
                            let g = e[p + 1];
                            if (e[p + 1] = e[p], e[p] = g, !p || (h = is(e[--p])) <= d) break
                        }
                        h = is(e[f])
                    }
                }
                return e
            }

            function iw(t) {
                return function(t) {
                    let e = [],
                        r = [],
                        n = -1,
                        i = 0;
                    for (let s of t) {
                        let a = is(s),
                            o = ia(s);
                        if (-1 == n) 0 == a ? n = o : e.push(o);
                        else if (i > 0 && i >= a) 0 == a ? (e.push(n, ...r), r.length = 0, n = o) : r.push(o), i = a;
                        else {
                            let l = function(t, e) {
                                if (t >= 4352 && t < 4371 && e >= 4449 && e < 4470) return 44032 + (t - 4352) * 588 + (e - 4449) * 28;
                                if (iy(t) && e > 4519 && e < 4547 && (t - 44032) % 28 == 0) return t + (e - 4519); {
                                    let r = ic.get(t);
                                    return r && (r = r.get(e)) ? r : -1
                                }
                            }(n, o);
                            l >= 0 ? n = l : 0 == i && 0 == a ? (e.push(n), n = o) : (r.push(o), i = a)
                        }
                    }
                    return n >= 0 && e.push(n, ...r), e
                }(iA(t))
            }

            function ib() {
                return new Set(n8(n7))
            }
            let iv = new Map(n5(n7)),
                iE = ib(),
                iP = ib(),
                ix = new Set(n8(n7).map(function(t) {
                    return this[t]
                }, [...iP])),
                iC = ib();
            ib();
            let iN = n3(n7);

            function iO() {
                return new Set([n8(n7).map(t => iN[t]), n8(n7)].flat(2))
            }
            let iT = n7(),
                ik = n6(t => {
                    let e = n6(n7).map(t => t + 96);
                    if (e.length) {
                        let r = t >= iT;
                        e[0] -= 32, e = ir(e), r && (e = `Restricted[${e}]`);
                        let n = iO(),
                            i = [...n, ...iO()].sort((t, e) => t - e),
                            s = !n7();
                        return {
                            N: e,
                            P: n,
                            M: s,
                            R: r,
                            V: new Set(i)
                        }
                    }
                }),
                iB = ib(),
                iS = new Map;
            for (let {
                    V: iI,
                    M: iR
                } of ([...iB, ...ib()].sort((t, e) => t - e).map((t, e, r) => {
                    let n = n7(),
                        i = r[e] = n ? r[e - n] : {
                            V: [],
                            M: new Map
                        };
                    i.V.push(t), iB.has(t) || iS.set(t, i)
                }), new Set(iS.values()))) {
                let iU = [];
                for (let iD of iI) {
                    let iL = ik.filter(t => t.V.has(iD)),
                        iF = iU.find(({
                            G: t
                        }) => iL.some(e => t.has(e)));
                    iF || (iF = {
                        G: new Set,
                        V: []
                    }, iU.push(iF)), iF.V.push(iD), iL.forEach(t => iF.G.add(t))
                }
                let iM = iU.flatMap(({
                    G: t
                }) => [...t]);
                for (let {
                        G: ij,
                        V: iG
                    } of iU) {
                    let iH = new Set(iM.filter(t => !ij.has(t)));
                    for (let iQ of iG) iR.set(iQ, iH)
                }
            }
            let i_ = new Set,
                iV = new Set;
            for (let iz of ik)
                for (let iJ of iz.V)(i_.has(iJ) ? iV : i_).add(iJ);
            for (let iK of i_) iS.has(iK) || iV.has(iK) || iS.set(iK, 1);
            let iq = new Set([...i_, ...iA(i_).map(ia)]),
                iW = n8(n7),
                iZ = function t(e) {
                    let r = n6(() => {
                            let e = n8(n7).map(t => iW[t]);
                            if (e.length) return t(e)
                        }).sort((t, e) => e.Q.size - t.Q.size),
                        n = n7(),
                        i = n % 3,
                        s = 1 & (n = n / 3 | 0),
                        a = 1 & (n >>= 1),
                        o = 2 & n;
                    return {
                        B: r,
                        V: i,
                        F: s,
                        S: a,
                        C: o,
                        Q: new Set(e)
                    }
                }([]);
            class iY extends Array {
                get is_emoji() {
                    return !0
                }
            }

            function iX(t, e = ie) {
                var r;
                let n = [];
                r = t[0], iP.has(r) && n.push("◌");
                let i = 0,
                    s = t.length;
                for (let a = 0; a < s; a++) {
                    let o = t[a];
                    iC.has(o) && (n.push(ir(t.slice(i, a))), n.push(e(o)), i = a + 1)
                }
                return n.push(ir(t.slice(i, s))), n.join("")
            }

            function i$(t) {
                return (iC.has(t) ? "" : `${i0(iX([t]))} `) + ie(t)
            }

            function i0(t) {
                return `"${t}"\u200E`
            }

            function i1(t) {
                for (let e = t.lastIndexOf(95); e > 0;)
                    if (95 !== t[--e]) throw Error("underscore allowed only at start")
            }

            function i2(t) {
                return Error(`disallowed character: ${i$(t)}`)
            }

            function i4(t, e) {
                let r = i$(e),
                    n = ik.find(t => t.P.has(e));
                return n && (r = `${n.N} ${r}`), Error(`illegal mixture: ${t.N} + ${r}`)
            }

            function i8(t) {
                return Error(`illegal placement: ${t}`)
            }
            let i3 = new Uint8Array(32);

            function i5(t) {
                return (0, s.en)(0 !== t.length, "invalid ENS name; empty component", "comp", t), t
            }

            function i6(t) {
                let e = tH(function(t) {
                        try {
                            var e;
                            let r;
                            return (r = 0, e = t.split(".").map(t => {
                                let e, n = function(t) {
                                        let e = [];
                                        for (let r = 0, n = t.length; r < n;) {
                                            let i = t.codePointAt(r);
                                            r += i < 65536 ? 1 : 2, e.push(i)
                                        }
                                        return e
                                    }(t),
                                    i = {
                                        input: n,
                                        offset: r
                                    };
                                r += n.length + 1;
                                try {
                                    let s, a = i.tokens = function(t, e) {
                                            let r = [],
                                                n = [];
                                            for (t = t.slice().reverse(); t.length;) {
                                                let i = function(t, e) {
                                                    let r, n, i = iZ,
                                                        s = [],
                                                        a = t.length;
                                                    for (e && (e.length = 0); a;) {
                                                        let o = t[--a];
                                                        if (!(i = i.B.find(t => t.Q.has(o)))) break;
                                                        if (i.S) n = o;
                                                        else if (i.C && o === n) break;
                                                        s.push(o), i.F && (s.push(65039), a > 0 && 65039 == t[a - 1] && a--), i.V && (r = function(t, e) {
                                                            let r = iY.from(t);
                                                            return 2 == e.V && r.splice(1, 1), r
                                                        }(s, i), e && e.push(...t.slice(a).reverse()), t.length = a)
                                                    }
                                                    return r
                                                }(t);
                                                if (i) n.length && (r.push(e(n)), n = []), r.push(i);
                                                else {
                                                    let s = t.pop();
                                                    if (iq.has(s)) n.push(s);
                                                    else {
                                                        let a = iv.get(s);
                                                        if (a) n.push(...a);
                                                        else if (!iE.has(s)) throw i2(s)
                                                    }
                                                }
                                            }
                                            return n.length && r.push(e(n)), r
                                        }(n, iw),
                                        o = a.length;
                                    if (o) {
                                        let l = a[0],
                                            u = o > 1 || l.is_emoji;
                                        if (!u && l.every(t => t < 128)) e = l, i1(e),
                                            function(t) {
                                                if (t.length >= 4 && 45 == t[2] && 45 == t[3]) throw Error("invalid label extension")
                                            }(e), s = "ASCII";
                                        else if (u && (i.emoji = !0, l = a.flatMap(t => t.is_emoji ? [] : t)), e = a.flatMap(t => t.is_emoji ? t.filter(t => 65039 != t) : t), i1(e), l.length) {
                                            if (iP.has(e[0])) throw i8("leading combining mark");
                                            for (let c = 1; c < o; c++) {
                                                let h = a[c];
                                                if (!h.is_emoji && iP.has(h[0])) throw i8(`emoji + combining mark: "${ir(a[c-1])} + ${iX([h[0]])}"`)
                                            }! function(t) {
                                                let e = t[0],
                                                    r = it.get(e);
                                                if (r) throw i8(`leading ${r}`);
                                                let n = t.length,
                                                    i = -1;
                                                for (let s = 1; s < n; s++) {
                                                    e = t[s];
                                                    let a = it.get(e);
                                                    if (a) {
                                                        if (i == s) throw i8(`${r} + ${a}`);
                                                        i = s + 1, r = a
                                                    }
                                                }
                                                if (i == n) throw i8(`trailing ${r}`)
                                            }(e);
                                            let f = [...new Set(l)],
                                                [d] = function(t) {
                                                    let e = ik;
                                                    for (let r of t) {
                                                        let n = e.filter(t => t.V.has(r));
                                                        if (!n.length) {
                                                            if (e === ik) throw i2(r);
                                                            throw i4(e[0], r)
                                                        }
                                                        if (e = n, 1 == n.length) break
                                                    }
                                                    return e
                                                }(f);
                                            (function(t, e) {
                                                let {
                                                    V: r,
                                                    M: n
                                                } = t;
                                                for (let i of e)
                                                    if (!r.has(i)) throw i4(t, i);
                                                if (n) {
                                                    let s = iA(e).map(ia);
                                                    for (let a = 1, o = s.length; a < o; a++)
                                                        if (ix.has(s[a])) {
                                                            let l = a + 1;
                                                            for (let u; l < o && ix.has(u = s[l]); l++)
                                                                for (let c = a; c < l; c++)
                                                                    if (s[c] == u) throw Error(`non-spacing marks: repeated ${i$(u)}`);
                                                            if (l - a > 4) throw Error(`non-spacing marks: too many ${i0(iX(s.slice(a-1,l)))} (${l-a}/4)`);
                                                            a = l
                                                        }
                                                }
                                            })(d, l),
                                            function(t, e) {
                                                let r;
                                                let n = [];
                                                for (let i of e) {
                                                    let s = iS.get(i);
                                                    if (1 === s) return;
                                                    if (s) {
                                                        let a = s.M.get(i);
                                                        if (!(r = r ? r.filter(t => a.has(t)) : [...a]).length) return
                                                    } else n.push(i)
                                                }
                                                if (r) {
                                                    for (let o of r)
                                                        if (n.every(t => o.V.has(t))) throw Error(`whole-script confusable: ${t.N}/${o.N}`)
                                                }
                                            }(d, f), s = d.N
                                        } else s = "Emoji"
                                    } else throw Error("empty label");
                                    i.type = s
                                } catch (p) {
                                    i.error = p
                                }
                                return i.output = e, i
                            })).map(({
                                input: t,
                                error: r,
                                output: n
                            }) => {
                                if (r) {
                                    let i = r.message;
                                    throw Error(1 == e.length ? i : `Invalid label ${i0(iX(t))}: ${i}`)
                                }
                                return ir(n)
                            }).join(".")
                        } catch (n) {
                            (0, s.en)(!1, `invalid ENS name (${n.message})`, "name", t)
                        }
                    }(t)),
                    r = [];
                if (0 === t.length) return r;
                let n = 0;
                for (let i = 0; i < e.length; i++) {
                    let a = e[i];
                    46 === a && (r.push(i5(e.slice(n, i))), n = i + 1)
                }
                return (0, s.en)(n < e.length, "invalid ENS name; empty component", "name", t), r.push(i5(e.slice(n))), r
            }

            function i9(t) {
                (0, s.en)("string" == typeof t, "invalid ENS name; not a string", "name", t);
                let e = i3,
                    r = i6(t);
                for (; r.length;) e = tc((0, o.zo)([e, tc(r.pop())]));
                return (0, o.Dv)(e)
            }
            i3.fill(0);
            let i7 = "0x0000000000000000000000000000000000000000000000000000000000000000",
                st = BigInt(0),
                se = BigInt(1),
                sr = BigInt(2),
                sn = BigInt(27),
                si = BigInt(28),
                ss = BigInt(35),
                sa = {};

            function so(t) {
                return (0, o.U3)((0, a.ot)(t), 32)
            }
            class sl {#
                q;#
                W;#
                Z;#
                Y;
                get r() {
                    return this.#q
                }
                set r(t) {
                    (0, s.en)(32 === (0, o.M5)(t), "invalid r", "value", t), this.#q = (0, o.Dv)(t)
                }
                get s() {
                    return this.#W
                }
                set s(t) {
                    (0, s.en)(32 === (0, o.M5)(t), "invalid s", "value", t);
                    let e = (0, o.Dv)(t);
                    (0, s.en)(8 > parseInt(e.substring(0, 3)), "non-canonical s", "value", e), this.#W = e
                }
                get v() {
                    return this.#Z
                }
                set v(t) {
                    let e = (0, a.Dx)(t, "value");
                    (0, s.en)(27 === e || 28 === e, "invalid v", "v", t), this.#Z = e
                }
                get networkV() {
                    return this.#Y
                }
                get legacyChainId() {
                    let t = this.networkV;
                    return null == t ? null : sl.getChainId(t)
                }
                get yParity() {
                    return 27 === this.v ? 0 : 1
                }
                get yParityAndS() {
                    let t = (0, o.Pw)(this.s);
                    return this.yParity && (t[0] |= 128), (0, o.Dv)(t)
                }
                get compactSerialized() {
                    return (0, o.zo)([this.r, this.yParityAndS])
                }
                get serialized() {
                    return (0, o.zo)([this.r, this.s, this.yParity ? "0x1c" : "0x1b"])
                }
                constructor(t, e, r, n) {
                    (0, s.NK)(t, sa, "Signature"), this.#q = e, this.#W = r, this.#Z = n, this.#Y = null
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`
                }
                clone() {
                    let t = new sl(sa, this.r, this.s, this.v);
                    return this.networkV && (t.#Y = this.networkV), t
                }
                toJSON() {
                    let t = this.networkV;
                    return {
                        _type: "signature",
                        networkV: null != t ? t.toString() : null,
                        r: this.r,
                        s: this.s,
                        v: this.v
                    }
                }
                static getChainId(t) {
                    let e = (0, a.yT)(t, "v");
                    return e == sn || e == si ? st : ((0, s.en)(e >= ss, "invalid EIP-155 v", "v", t), (e - ss) / sr)
                }
                static getChainIdV(t, e) {
                    return (0, a.yT)(t) * sr + BigInt(35 + e - 27)
                }
                static getNormalizedV(t) {
                    let e = (0, a.yT)(t);
                    return e === st || e === sn ? 27 : e === se || e === si ? 28 : ((0, s.en)(e >= ss, "invalid v", "v", t), e & se ? 27 : 28)
                }
                static from(t) {
                    function e(e, r) {
                        (0, s.en)(e, r, "signature", t)
                    }
                    if (null == t) return new sl(sa, i7, i7, 27);
                    if ("string" == typeof t) {
                        let r = (0, o.Pw)(t, "signature");
                        if (64 === r.length) {
                            let n = (0, o.Dv)(r.slice(0, 32)),
                                i = r.slice(32, 64),
                                l = 128 & i[0] ? 28 : 27;
                            return i[0] &= 127, new sl(sa, n, (0, o.Dv)(i), l)
                        }
                        if (65 === r.length) {
                            let u = (0, o.Dv)(r.slice(0, 32)),
                                c = r.slice(32, 64);
                            e((128 & c[0]) == 0, "non-canonical s");
                            let h = sl.getNormalizedV(r[64]);
                            return new sl(sa, u, (0, o.Dv)(c), h)
                        }
                        e(!1, "invalid raw signature length")
                    }
                    if (t instanceof sl) return t.clone();
                    let f = t.r;
                    e(null != f, "missing r");
                    let d = so(f),
                        p = function(t, r) {
                            if (null != t) return so(t);
                            if (null != r) {
                                e((0, o.A7)(r, 32), "invalid yParityAndS");
                                let n = (0, o.Pw)(r);
                                return n[0] &= 127, (0, o.Dv)(n)
                            }
                            e(!1, "missing s")
                        }(t.s, t.yParityAndS);
                    e((128 & (0, o.Pw)(p)[0]) == 0, "non-canonical s");
                    let {
                        networkV: g,
                        v: m
                    } = function(t, r, n) {
                        if (null != t) {
                            let i = (0, a.yT)(t);
                            return {
                                networkV: i >= ss ? i : void 0,
                                v: sl.getNormalizedV(i)
                            }
                        }
                        if (null != r) return e((0, o.A7)(r, 32), "invalid yParityAndS"), {
                            v: 128 & (0, o.Pw)(r)[0] ? 28 : 27
                        };
                        if (null != n) {
                            switch (n) {
                                case 0:
                                    return {
                                        v: 27
                                    };
                                case 1:
                                    return {
                                        v: 28
                                    }
                            }
                            e(!1, "invalid yParity")
                        }
                        e(!1, "missing v")
                    }(t.v, t.yParityAndS, t.yParity), y = new sl(sa, d, p, m);
                    return g && (y.#Y = g), e(!("yParity" in t && t.yParity !== y.yParity), "yParity mismatch"), e(!("yParityAndS" in t && t.yParityAndS !== y.yParityAndS), "yParityAndS mismatch"), y
                }
            }
            var su = r(5856),
                sc = r.t(su, 2); /*!noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com)*/
            let sh = BigInt(0),
                sf = BigInt(1),
                sd = BigInt(2),
                sp = BigInt(3),
                sg = BigInt(8),
                sm = Object.freeze({
                    a: sh,
                    b: BigInt(7),
                    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                    h: sf,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
                }),
                sy = (t, e) => (t + e / sd) / e,
                sA = {
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                    splitScalar(t) {
                        let {
                            n: e
                        } = sm, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -sf * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s = BigInt("0x100000000000000000000000000000000"), a = sy(r * t, e), o = sy(-n * t, e), l = sQ(t - a * r - o * i, e), u = sQ(-a * n - o * r, e), c = l > s, h = u > s;
                        if (c && (l = e - l), h && (u = e - u), l > s || u > s) throw Error("splitScalarEndo: Endomorphism failed, k=" + t);
                        return {
                            k1neg: c,
                            k1: l,
                            k2neg: h,
                            k2: u
                        }
                    }
                };

            function sw(t) {
                let {
                    a: e,
                    b: r
                } = sm, n = sQ(t * t), i = sQ(n * t);
                return sQ(i + e * t + r)
            }
            let sb = sm.a === sh;
            class sv extends Error {
                constructor(t) {
                    super(t)
                }
            }

            function sE(t) {
                if (!(t instanceof sP)) throw TypeError("JacobianPoint expected")
            }
            class sP {
                constructor(t, e, r) {
                    this.x = t, this.y = e, this.z = r
                }
                static fromAffine(t) {
                    if (!(t instanceof sN)) throw TypeError("JacobianPoint#fromAffine: expected Point");
                    return t.equals(sN.ZERO) ? sP.ZERO : new sP(t.x, t.y, sf)
                }
                static toAffineBatch(t) {
                    let e = function(t, e = sm.P) {
                        let r = Array(t.length),
                            n = t.reduce((t, n, i) => n === sh ? t : (r[i] = t, sQ(t * n, e)), sf),
                            i = sV(n, e);
                        return t.reduceRight((t, n, i) => n === sh ? t : (r[i] = sQ(t * r[i], e), sQ(t * n, e)), i), r
                    }(t.map(t => t.z));
                    return t.map((t, r) => t.toAffine(e[r]))
                }
                static normalizeZ(t) {
                    return sP.toAffineBatch(t).map(sP.fromAffine)
                }
                equals(t) {
                    sE(t);
                    let {
                        x: e,
                        y: r,
                        z: n
                    } = this, {
                        x: i,
                        y: s,
                        z: a
                    } = t, o = sQ(n * n), l = sQ(a * a), u = sQ(e * l), c = sQ(i * o), h = sQ(sQ(r * a) * l), f = sQ(sQ(s * n) * o);
                    return u === c && h === f
                }
                negate() {
                    return new sP(this.x, sQ(-this.y), this.z)
                }
                double() {
                    let {
                        x: t,
                        y: e,
                        z: r
                    } = this, n = sQ(t * t), i = sQ(e * e), s = sQ(i * i), a = t + i, o = sQ(sd * (sQ(a * a) - n - s)), l = sQ(sp * n), u = sQ(l * l), c = sQ(u - sd * o), h = sQ(l * (o - c) - sg * s), f = sQ(sd * e * r);
                    return new sP(c, h, f)
                }
                add(t) {
                    sE(t);
                    let {
                        x: e,
                        y: r,
                        z: n
                    } = this, {
                        x: i,
                        y: s,
                        z: a
                    } = t;
                    if (i === sh || s === sh) return this;
                    if (e === sh || r === sh) return t;
                    let o = sQ(n * n),
                        l = sQ(a * a),
                        u = sQ(e * l),
                        c = sQ(i * o),
                        h = sQ(sQ(r * a) * l),
                        f = sQ(sQ(s * n) * o),
                        d = sQ(c - u),
                        p = sQ(f - h);
                    if (d === sh) return p === sh ? this.double() : sP.ZERO;
                    let g = sQ(d * d),
                        m = sQ(d * g),
                        y = sQ(u * g),
                        A = sQ(p * p - m - sd * y),
                        w = sQ(p * (y - A) - h * m),
                        b = sQ(n * a * d);
                    return new sP(A, w, b)
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiplyUnsafe(t) {
                    let e = sP.ZERO;
                    if ("bigint" == typeof t && t === sh) return e;
                    let r = sH(t);
                    if (r === sf) return this;
                    if (!sb) {
                        let n = e,
                            i = this;
                        for (; r > sh;) r & sf && (n = n.add(i)), i = i.double(), r >>= sf;
                        return n
                    }
                    let {
                        k1neg: s,
                        k1: a,
                        k2neg: o,
                        k2: l
                    } = sA.splitScalar(r), u = e, c = e, h = this;
                    for (; a > sh || l > sh;) a & sf && (u = u.add(h)), l & sf && (c = c.add(h)), h = h.double(), a >>= sf, l >>= sf;
                    return s && (u = u.negate()), o && (c = c.negate()), c = new sP(sQ(c.x * sA.beta), c.y, c.z), u.add(c)
                }
                precomputeWindow(t) {
                    let e = sb ? 128 / t + 1 : 256 / t + 1,
                        r = [],
                        n = this,
                        i = n;
                    for (let s = 0; s < e; s++) {
                        i = n, r.push(i);
                        for (let a = 1; a < 2 ** (t - 1); a++) i = i.add(n), r.push(i);
                        n = i.double()
                    }
                    return r
                }
                wNAF(t, e) {
                    !e && this.equals(sP.BASE) && (e = sN.BASE);
                    let r = e && e._WINDOW_SIZE || 1;
                    if (256 % r) throw Error("Point#wNAF: Invalid precomputation window, must be power of 2");
                    let n = e && sC.get(e);
                    !n && (n = this.precomputeWindow(r), e && 1 !== r && (n = sP.normalizeZ(n), sC.set(e, n)));
                    let i = sP.ZERO,
                        s = sP.BASE,
                        a = 1 + (sb ? 128 / r : 256 / r),
                        o = 2 ** (r - 1),
                        l = BigInt(2 ** r - 1),
                        u = 2 ** r,
                        c = BigInt(r);
                    for (let h = 0; h < a; h++) {
                        let f = h * o,
                            d = Number(t & l);
                        t >>= c, d > o && (d -= u, t += sf);
                        let p = f + Math.abs(d) - 1,
                            g = h % 2 != 0,
                            m = d < 0;
                        0 === d ? s = s.add(sx(g, n[f])) : i = i.add(sx(m, n[p]))
                    }
                    return {
                        p: i,
                        f: s
                    }
                }
                multiply(t, e) {
                    let r, n, i = sH(t);
                    if (sb) {
                        let {
                            k1neg: s,
                            k1: a,
                            k2neg: o,
                            k2: l
                        } = sA.splitScalar(i), {
                            p: u,
                            f: c
                        } = this.wNAF(a, e), {
                            p: h,
                            f: f
                        } = this.wNAF(l, e);
                        u = sx(s, u), h = sx(o, h), h = new sP(sQ(h.x * sA.beta), h.y, h.z), r = u.add(h), n = c.add(f)
                    } else {
                        let {
                            p: d,
                            f: p
                        } = this.wNAF(i, e);
                        r = d, n = p
                    }
                    return sP.normalizeZ([r, n])[0]
                }
                toAffine(t) {
                    let {
                        x: e,
                        y: r,
                        z: n
                    } = this, i = this.equals(sP.ZERO);
                    null == t && (t = i ? sg : sV(n));
                    let s = t,
                        a = sQ(s * s),
                        o = sQ(a * s),
                        l = sQ(e * a),
                        u = sQ(r * o),
                        c = sQ(n * s);
                    if (i) return sN.ZERO;
                    if (c !== sf) throw Error("invZ was invalid");
                    return new sN(l, u)
                }
            }

            function sx(t, e) {
                let r = e.negate();
                return t ? r : e
            }
            sP.BASE = new sP(sm.Gx, sm.Gy, sf), sP.ZERO = new sP(sh, sf, sh);
            let sC = new WeakMap;
            class sN {
                constructor(t, e) {
                    this.x = t, this.y = e
                }
                _setWindowSize(t) {
                    this._WINDOW_SIZE = t, sC.delete(this)
                }
                hasEvenY() {
                    return this.y % sd === sh
                }
                static fromCompressedHex(t) {
                    let e = 32 === t.length,
                        r = sj(e ? t : t.subarray(1));
                    if (!sq(r)) throw Error("Point is not on curve");
                    let n = sw(r),
                        i = function(t) {
                            let {
                                P: e
                            } = sm, r = BigInt(6), n = BigInt(11), i = BigInt(22), s = BigInt(23), a = BigInt(44), o = BigInt(88), l = t * t * t % e, u = l * l * t % e, c = s_(u, sp) * u % e, h = s_(c, sp) * u % e, f = s_(h, sd) * l % e, d = s_(f, n) * f % e, p = s_(d, i) * d % e, g = s_(p, a) * p % e, m = s_(g, o) * g % e, y = s_(m, a) * p % e, A = s_(y, sp) * u % e, w = s_(A, s) * d % e, b = s_(w, r) * l % e, v = s_(b, sd);
                            if (v * v % e !== t) throw Error("Cannot find square root");
                            return v
                        }(n),
                        s = (i & sf) === sf;
                    if (e) s && (i = sQ(-i));
                    else {
                        let a = (1 & t[0]) == 1;
                        a !== s && (i = sQ(-i))
                    }
                    let o = new sN(r, i);
                    return o.assertValidity(), o
                }
                static fromUncompressedHex(t) {
                    let e = sj(t.subarray(1, 33)),
                        r = sj(t.subarray(33, 65)),
                        n = new sN(e, r);
                    return n.assertValidity(), n
                }
                static fromHex(t) {
                    let e = sG(t),
                        r = e.length,
                        n = e[0];
                    if (32 === r || 33 === r && (2 === n || 3 === n)) return this.fromCompressedHex(e);
                    if (65 === r && 4 === n) return this.fromUncompressedHex(e);
                    throw Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${r}`)
                }
                static fromPrivateKey(t) {
                    return sN.BASE.multiply(sW(t))
                }
                static fromSignature(t, e, r) {
                    let {
                        r: n,
                        s: i
                    } = function(t) {
                        if (t instanceof sk) return t.assertValidity(), t;
                        try {
                            return sk.fromDER(t)
                        } catch (e) {
                            return sk.fromCompact(t)
                        }
                    }(e);
                    if (![0, 1, 2, 3].includes(r)) throw Error("Cannot recover: invalid recovery bit");
                    let s = sz(sG(t)),
                        {
                            n: a
                        } = sm,
                        o = 2 === r || 3 === r ? n + a : n,
                        l = sV(o, a),
                        u = sQ(-s * l, a),
                        c = sQ(i * l, a),
                        h = sN.fromHex((1 & r ? "03" : "02") + sU(o)),
                        f = sN.BASE.multiplyAndAddUnsafe(h, u, c);
                    if (!f) throw Error("Cannot recover signature: point at infinify");
                    return f.assertValidity(), f
                }
                toRawBytes(t = !1) {
                    return sM(this.toHex(t))
                }
                toHex(t = !1) {
                    let e = sU(this.x);
                    if (!t) return `04${e}${sU(this.y)}`; {
                        let r = this.hasEvenY() ? "02" : "03";
                        return `${r}${e}`
                    }
                }
                toHexX() {
                    return this.toHex(!0).slice(2)
                }
                toRawX() {
                    return this.toRawBytes(!0).slice(1)
                }
                assertValidity() {
                    let t = "Point is not on elliptic curve",
                        {
                            x: e,
                            y: r
                        } = this;
                    if (!sq(e) || !sq(r)) throw Error(t);
                    let n = sQ(r * r),
                        i = sw(e);
                    if (sQ(n - i) !== sh) throw Error(t)
                }
                equals(t) {
                    return this.x === t.x && this.y === t.y
                }
                negate() {
                    return new sN(this.x, sQ(-this.y))
                }
                double() {
                    return sP.fromAffine(this).double().toAffine()
                }
                add(t) {
                    return sP.fromAffine(this).add(sP.fromAffine(t)).toAffine()
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiply(t) {
                    return sP.fromAffine(this).multiply(t, this).toAffine()
                }
                multiplyAndAddUnsafe(t, e, r) {
                    let n = sP.fromAffine(this),
                        i = e === sh || e === sf || this !== sN.BASE ? n.multiplyUnsafe(e) : n.multiply(e),
                        s = sP.fromAffine(t).multiplyUnsafe(r),
                        a = i.add(s);
                    return a.equals(sP.ZERO) ? void 0 : a.toAffine()
                }
            }

            function sO(t) {
                return Number.parseInt(t[0], 16) >= 8 ? "00" + t : t
            }

            function sT(t) {
                if (t.length < 2 || 2 !== t[0]) throw Error(`Invalid signature integer tag: ${sI(t)}`);
                let e = t[1],
                    r = t.subarray(2, e + 2);
                if (!e || r.length !== e) throw Error("Invalid signature integer: wrong length");
                if (0 === r[0] && r[1] <= 127) throw Error("Invalid signature integer: trailing length");
                return {
                    data: sj(r),
                    left: t.subarray(e + 2)
                }
            }
            sN.BASE = new sN(sm.Gx, sm.Gy), sN.ZERO = new sN(sh, sh);
            class sk {
                constructor(t, e) {
                    this.r = t, this.s = e, this.assertValidity()
                }
                static fromCompact(t) {
                    let e = t instanceof Uint8Array,
                        r = "Signature.fromCompact";
                    if ("string" != typeof t && !e) throw TypeError(`${r}: Expected string or Uint8Array`);
                    let n = e ? sI(t) : t;
                    if (128 !== n.length) throw Error(`${r}: Expected 64-byte hex`);
                    return new sk(sF(n.slice(0, 64)), sF(n.slice(64, 128)))
                }
                static fromDER(t) {
                    let e = t instanceof Uint8Array;
                    if ("string" != typeof t && !e) throw TypeError("Signature.fromDER: Expected string or Uint8Array");
                    let {
                        r,
                        s: n
                    } = function(t) {
                        if (t.length < 2 || 48 != t[0]) throw Error(`Invalid signature tag: ${sI(t)}`);
                        if (t[1] !== t.length - 2) throw Error("Invalid signature: incorrect length");
                        let {
                            data: e,
                            left: r
                        } = sT(t.subarray(2)), {
                            data: n,
                            left: i
                        } = sT(r);
                        if (i.length) throw Error(`Invalid signature: left bytes after parsing: ${sI(i)}`);
                        return {
                            r: e,
                            s: n
                        }
                    }(e ? t : sM(t));
                    return new sk(r, n)
                }
                static fromHex(t) {
                    return this.fromDER(t)
                }
                assertValidity() {
                    let {
                        r: t,
                        s: e
                    } = this;
                    if (!sK(t)) throw Error("Invalid Signature: r must be 0 < r < n");
                    if (!sK(e)) throw Error("Invalid Signature: s must be 0 < s < n")
                }
                hasHighS() {
                    let t = sm.n >> sf;
                    return this.s > t
                }
                normalizeS() {
                    return this.hasHighS() ? new sk(this.r, sQ(-this.s, sm.n)) : this
                }
                toDERRawBytes() {
                    return sM(this.toDERHex())
                }
                toDERHex() {
                    let t = sO(sL(this.s)),
                        e = sO(sL(this.r)),
                        r = t.length / 2,
                        n = e.length / 2,
                        i = sL(r),
                        s = sL(n),
                        a = sL(n + r + 4);
                    return `30${a}02${s}${e}02${i}${t}`
                }
                toRawBytes() {
                    return this.toDERRawBytes()
                }
                toHex() {
                    return this.toDERHex()
                }
                toCompactRawBytes() {
                    return sM(this.toCompactHex())
                }
                toCompactHex() {
                    return sU(this.r) + sU(this.s)
                }
            }

            function sB(...t) {
                if (!t.every(t => t instanceof Uint8Array)) throw Error("Uint8Array list expected");
                if (1 === t.length) return t[0];
                let e = t.reduce((t, e) => t + e.length, 0),
                    r = new Uint8Array(e);
                for (let n = 0, i = 0; n < t.length; n++) {
                    let s = t[n];
                    r.set(s, i), i += s.length
                }
                return r
            }
            let sS = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function sI(t) {
                if (!(t instanceof Uint8Array)) throw Error("Expected Uint8Array");
                let e = "";
                for (let r = 0; r < t.length; r++) e += sS[t[r]];
                return e
            }
            let sR = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");

            function sU(t) {
                if ("bigint" != typeof t) throw Error("Expected bigint");
                if (!(sh <= t && t < sR)) throw Error("Expected number 0 <= n < 2^256");
                return t.toString(16).padStart(64, "0")
            }

            function sD(t) {
                let e = sM(sU(t));
                if (32 !== e.length) throw Error("Error: expected 32 bytes");
                return e
            }

            function sL(t) {
                let e = t.toString(16);
                return 1 & e.length ? `0${e}` : e
            }

            function sF(t) {
                if ("string" != typeof t) throw TypeError("hexToNumber: expected string, got " + typeof t);
                return BigInt(`0x${t}`)
            }

            function sM(t) {
                if ("string" != typeof t) throw TypeError("hexToBytes: expected string, got " + typeof t);
                if (t.length % 2) throw Error("hexToBytes: received invalid unpadded hex" + t.length);
                let e = new Uint8Array(t.length / 2);
                for (let r = 0; r < e.length; r++) {
                    let n = 2 * r,
                        i = t.slice(n, n + 2),
                        s = Number.parseInt(i, 16);
                    if (Number.isNaN(s) || s < 0) throw Error("Invalid byte sequence");
                    e[r] = s
                }
                return e
            }

            function sj(t) {
                return sF(sI(t))
            }

            function sG(t) {
                return t instanceof Uint8Array ? Uint8Array.from(t) : sM(t)
            }

            function sH(t) {
                if ("number" == typeof t && Number.isSafeInteger(t) && t > 0) return BigInt(t);
                if ("bigint" == typeof t && sK(t)) return t;
                throw TypeError("Expected valid private scalar: 0 < scalar < curve.n")
            }

            function sQ(t, e = sm.P) {
                let r = t % e;
                return r >= sh ? r : e + r
            }

            function s_(t, e) {
                let {
                    P: r
                } = sm, n = t;
                for (; e-- > sh;) n *= n, n %= r;
                return n
            }

            function sV(t, e = sm.P) {
                if (t === sh || e <= sh) throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let r = sQ(t, e),
                    n = e,
                    i = sh,
                    s = sf,
                    a = sf,
                    o = sh;
                for (; r !== sh;) {
                    let l = n / r,
                        u = n % r,
                        c = i - a * l,
                        h = s - o * l;
                    n = r, r = u, i = a, s = o, a = c, o = h
                }
                let f = n;
                if (f !== sf) throw Error("invert: does not exist");
                return sQ(i, e)
            }

            function sz(t, e = !1) {
                let r = function(t) {
                    let e = 8 * t.length - 256,
                        r = sj(t);
                    return e > 0 ? r >> BigInt(e) : r
                }(t);
                if (e) return r;
                let {
                    n
                } = sm;
                return r >= n ? r - n : r
            }
            class sJ {
                constructor(t, e) {
                    if (this.hashLen = t, this.qByteLen = e, "number" != typeof t || t < 2) throw Error("hashLen must be a number");
                    if ("number" != typeof e || e < 2) throw Error("qByteLen must be a number");
                    this.v = new Uint8Array(t).fill(1), this.k = new Uint8Array(t).fill(0), this.counter = 0
                }
                hmac(...t) {
                    return s0.hmacSha256(this.k, ...t)
                }
                hmacSync(...t) {
                    return i(this.k, ...t)
                }
                checkSync() {
                    if ("function" != typeof i) throw new sv("hmacSha256Sync needs to be set")
                }
                incr() {
                    if (this.counter >= 1e3) throw Error("Tried 1,000 k values for sign(), all were invalid");
                    this.counter += 1
                }
                async reseed(t = new Uint8Array) {
                    this.k = await this.hmac(this.v, Uint8Array.from([0]), t), this.v = await this.hmac(this.v), 0 !== t.length && (this.k = await this.hmac(this.v, Uint8Array.from([1]), t), this.v = await this.hmac(this.v))
                }
                reseedSync(t = new Uint8Array) {
                    this.checkSync(), this.k = this.hmacSync(this.v, Uint8Array.from([0]), t), this.v = this.hmacSync(this.v), 0 !== t.length && (this.k = this.hmacSync(this.v, Uint8Array.from([1]), t), this.v = this.hmacSync(this.v))
                }
                async generate() {
                    this.incr();
                    let t = 0,
                        e = [];
                    for (; t < this.qByteLen;) {
                        this.v = await this.hmac(this.v);
                        let r = this.v.slice();
                        e.push(r), t += this.v.length
                    }
                    return sB(...e)
                }
                generateSync() {
                    this.checkSync(), this.incr();
                    let t = 0,
                        e = [];
                    for (; t < this.qByteLen;) {
                        this.v = this.hmacSync(this.v);
                        let r = this.v.slice();
                        e.push(r), t += this.v.length
                    }
                    return sB(...e)
                }
            }

            function sK(t) {
                return sh < t && t < sm.n
            }

            function sq(t) {
                return sh < t && t < sm.P
            }

            function sW(t) {
                let e;
                if ("bigint" == typeof t) e = t;
                else if ("number" == typeof t && Number.isSafeInteger(t) && t > 0) e = BigInt(t);
                else if ("string" == typeof t) {
                    if (64 !== t.length) throw Error("Expected 32 bytes of private key");
                    e = sF(t)
                } else if (t instanceof Uint8Array) {
                    if (32 !== t.length) throw Error("Expected 32 bytes of private key");
                    e = sj(t)
                } else throw TypeError("Expected valid private key");
                if (!sK(e)) throw Error("Expected private key: 0 < key < n");
                return e
            }

            function sZ(t) {
                let e = t instanceof Uint8Array,
                    r = "string" == typeof t,
                    n = (e || r) && t.length;
                return e ? 33 === n || 65 === n : r ? 66 === n || 130 === n : t instanceof sN
            }

            function sY(t) {
                let e = t.length > 32 ? t.slice(0, 32) : t;
                return sj(e)
            }
            sN.BASE._setWindowSize(8);
            let sX = {
                    node: sc,
                    web: "object" == typeof self && "crypto" in self ? self.crypto : void 0
                },
                s$ = {},
                s0 = {
                    bytesToHex: sI,
                    hexToBytes: sM,
                    concatBytes: sB,
                    mod: sQ,
                    invert: sV,
                    isValidPrivateKey(t) {
                        try {
                            return sW(t), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    _bigintTo32Bytes: sD,
                    _normalizePrivateKey: sW,
                    hashToPrivateKey: t => {
                        if ((t = sG(t)).length < 40 || t.length > 1024) throw Error("Expected valid bytes of private key as per FIPS 186");
                        let e = sQ(sj(t), sm.n - sf) + sf;
                        return sD(e)
                    },
                    randomBytes: (t = 32) => {
                        if (sX.web) return sX.web.getRandomValues(new Uint8Array(t));
                        if (sX.node) {
                            let {
                                randomBytes: e
                            } = sX.node;
                            return Uint8Array.from(e(t))
                        }
                        throw Error("The environment doesn't have randomBytes function")
                    },
                    randomPrivateKey: () => s0.hashToPrivateKey(s0.randomBytes(40)),
                    precompute(t = 8, e = sN.BASE) {
                        let r = e === sN.BASE ? e : new sN(e.x, e.y);
                        return r._setWindowSize(t), r.multiply(sp), r
                    },
                    sha256: async (...t) => {
                        if (sX.web) {
                            let e = await sX.web.subtle.digest("SHA-256", sB(...t));
                            return new Uint8Array(e)
                        }
                        if (sX.node) {
                            let {
                                createHash: r
                            } = sX.node, n = r("sha256");
                            return t.forEach(t => n.update(t)), Uint8Array.from(n.digest())
                        }
                        throw Error("The environment doesn't have sha256 function")
                    },
                    hmacSha256: async (t, ...e) => {
                        if (sX.web) {
                            let r = await sX.web.subtle.importKey("raw", t, {
                                    name: "HMAC",
                                    hash: {
                                        name: "SHA-256"
                                    }
                                }, !1, ["sign"]),
                                n = sB(...e),
                                i = await sX.web.subtle.sign("HMAC", r, n);
                            return new Uint8Array(i)
                        }
                        if (sX.node) {
                            let {
                                createHmac: s
                            } = sX.node, a = s("sha256", t);
                            return e.forEach(t => a.update(t)), Uint8Array.from(a.digest())
                        }
                        throw Error("The environment doesn't have hmac-sha256 function")
                    },
                    sha256Sync: void 0,
                    hmacSha256Sync: void 0,
                    taggedHash: async (t, ...e) => {
                        let r = s$[t];
                        if (void 0 === r) {
                            let n = await s0.sha256(Uint8Array.from(t, t => t.charCodeAt(0)));
                            r = sB(n, n), s$[t] = r
                        }
                        return s0.sha256(r, ...e)
                    },
                    taggedHashSync: (t, ...e) => {
                        if ("function" != typeof n) throw new sv("sha256Sync is undefined, you need to set it");
                        let r = s$[t];
                        if (void 0 === r) {
                            let i = n(Uint8Array.from(t, t => t.charCodeAt(0)));
                            r = sB(i, i), s$[t] = r
                        }
                        return n(r, ...e)
                    },
                    _JacobianPoint: sP
                };
            Object.defineProperties(s0, {
                sha256Sync: {
                    configurable: !1,
                    get: () => n,
                    set(t) {
                        n || (n = t)
                    }
                },
                hmacSha256Sync: {
                    configurable: !1,
                    get: () => i,
                    set(t) {
                        i || (i = t)
                    }
                }
            });
            class s1 extends L {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1, C.hash(t);
                    let r = D(e);
                    if (this.iHash = t.create(), !(this.iHash instanceof L)) throw TypeError("Expected instance of class which extends utils.Hash");
                    let n = this.blockLen = this.iHash.blockLen;
                    this.outputLen = this.iHash.outputLen;
                    let i = new Uint8Array(n);
                    i.set(r.length > this.iHash.blockLen ? t.create().update(r).digest() : r);
                    for (let s = 0; s < i.length; s++) i[s] ^= 54;
                    this.iHash.update(i), this.oHash = t.create();
                    for (let a = 0; a < i.length; a++) i[a] ^= 106;
                    this.oHash.update(i), i.fill(0)
                }
                update(t) {
                    return C.exists(this), this.iHash.update(t), this
                }
                digestInto(t) {
                    C.exists(this), C.bytes(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    let t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: e,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: s,
                        outputLen: a
                    } = this;
                    return t.finished = n, t.destroyed = i, t.blockLen = s, t.outputLen = a, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let s2 = (t, e, r) => new s1(t, e).update(r).digest();
            s2.create = (t, e) => new s1(t, e);
            class s4 extends L {
                constructor(t, e, r, n) {
                    super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = I(this.buffer)
                }
                update(t) {
                    C.exists(this);
                    let {
                        view: e,
                        buffer: r,
                        blockLen: n
                    } = this;
                    t = D(t);
                    let i = t.length;
                    for (let s = 0; s < i;) {
                        let a = Math.min(n - this.pos, i - s);
                        if (a === n) {
                            let o = I(t);
                            for (; n <= i - s; s += n) this.process(o, s);
                            continue
                        }
                        r.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === n && (this.process(e, 0), this.pos = 0)
                    }
                    return this.length += t.length, this.roundClean(), this
                }
                digestInto(t) {
                    C.exists(this), C.output(t, this), this.finished = !0;
                    let {
                        buffer: e,
                        view: r,
                        blockLen: n,
                        isLE: i
                    } = this, {
                        pos: s
                    } = this;
                    e[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > n - s && (this.process(r, 0), s = 0);
                    for (let a = s; a < n; a++) e[a] = 0;
                    ! function(t, e, r, n) {
                        if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, r, n);
                        let i = BigInt(32),
                            s = BigInt(4294967295),
                            a = Number(r >> i & s),
                            o = Number(r & s);
                        t.setUint32(e + (n ? 4 : 0), a, n), t.setUint32(e + (n ? 0 : 4), o, n)
                    }(r, n - 8, BigInt(8 * this.length), i), this.process(r, 0);
                    let o = I(t);
                    this.get().forEach((t, e) => o.setUint32(4 * e, t, i))
                }
                digest() {
                    let {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    let r = t.slice(0, e);
                    return this.destroy(), r
                }
                _cloneInto(t) {
                    t || (t = new this.constructor), t.set(...this.get());
                    let {
                        blockLen: e,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: s,
                        pos: a
                    } = this;
                    return t.length = n, t.pos = a, t.finished = i, t.destroyed = s, n % e && t.buffer.set(r), t
                }
            }
            let s8 = (t, e, r) => t & e ^ ~t & r,
                s3 = (t, e, r) => t & e ^ t & r ^ e & r,
                s5 = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                s6 = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                s9 = new Uint32Array(64);
            class s7 extends s4 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | s6[0], this.B = 0 | s6[1], this.C = 0 | s6[2], this.D = 0 | s6[3], this.E = 0 | s6[4], this.F = 0 | s6[5], this.G = 0 | s6[6], this.H = 0 | s6[7]
                }
                get() {
                    let {
                        A: t,
                        B: e,
                        C: r,
                        D: n,
                        E: i,
                        F: s,
                        G: a,
                        H: o
                    } = this;
                    return [t, e, r, n, i, s, a, o]
                }
                set(t, e, r, n, i, s, a, o) {
                    this.A = 0 | t, this.B = 0 | e, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | s, this.G = 0 | a, this.H = 0 | o
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) s9[r] = t.getUint32(e, !1);
                    for (let n = 16; n < 64; n++) {
                        let i = s9[n - 15],
                            s = s9[n - 2],
                            a = R(i, 7) ^ R(i, 18) ^ i >>> 3,
                            o = R(s, 17) ^ R(s, 19) ^ s >>> 10;
                        s9[n] = o + s9[n - 7] + a + s9[n - 16] | 0
                    }
                    let {
                        A: l,
                        B: u,
                        C: c,
                        D: h,
                        E: f,
                        F: d,
                        G: p,
                        H: g
                    } = this;
                    for (let m = 0; m < 64; m++) {
                        let y = R(f, 6) ^ R(f, 11) ^ R(f, 25),
                            A = g + y + s8(f, d, p) + s5[m] + s9[m] | 0,
                            w = R(l, 2) ^ R(l, 13) ^ R(l, 22),
                            b = w + s3(l, u, c) | 0;
                        g = p, p = d, d = f, f = h + A | 0, h = c, c = u, u = l, l = A + b | 0
                    }
                    l = l + this.A | 0, u = u + this.B | 0, c = c + this.C | 0, h = h + this.D | 0, f = f + this.E | 0, d = d + this.F | 0, p = p + this.G | 0, g = g + this.H | 0, this.set(l, u, c, h, f, d, p, g)
                }
                roundClean() {
                    s9.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            let at = F(() => new s7),
                [ae, ar] = B.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))),
                an = new Uint32Array(80),
                ai = new Uint32Array(80);
            class as extends s4 {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    let {
                        Ah: t,
                        Al: e,
                        Bh: r,
                        Bl: n,
                        Ch: i,
                        Cl: s,
                        Dh: a,
                        Dl: o,
                        Eh: l,
                        El: u,
                        Fh: c,
                        Fl: h,
                        Gh: f,
                        Gl: d,
                        Hh: p,
                        Hl: g
                    } = this;
                    return [t, e, r, n, i, s, a, o, l, u, c, h, f, d, p, g]
                }
                set(t, e, r, n, i, s, a, o, l, u, c, h, f, d, p, g) {
                    this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | i, this.Cl = 0 | s, this.Dh = 0 | a, this.Dl = 0 | o, this.Eh = 0 | l, this.El = 0 | u, this.Fh = 0 | c, this.Fl = 0 | h, this.Gh = 0 | f, this.Gl = 0 | d, this.Hh = 0 | p, this.Hl = 0 | g
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) an[r] = t.getUint32(e), ai[r] = t.getUint32(e += 4);
                    for (let n = 16; n < 80; n++) {
                        let i = 0 | an[n - 15],
                            s = 0 | ai[n - 15],
                            a = B.rotrSH(i, s, 1) ^ B.rotrSH(i, s, 8) ^ B.shrSH(i, s, 7),
                            o = B.rotrSL(i, s, 1) ^ B.rotrSL(i, s, 8) ^ B.shrSL(i, s, 7),
                            l = 0 | an[n - 2],
                            u = 0 | ai[n - 2],
                            c = B.rotrSH(l, u, 19) ^ B.rotrBH(l, u, 61) ^ B.shrSH(l, u, 6),
                            h = B.rotrSL(l, u, 19) ^ B.rotrBL(l, u, 61) ^ B.shrSL(l, u, 6),
                            f = B.add4L(o, h, ai[n - 7], ai[n - 16]),
                            d = B.add4H(f, a, c, an[n - 7], an[n - 16]);
                        an[n] = 0 | d, ai[n] = 0 | f
                    }
                    let {
                        Ah: p,
                        Al: g,
                        Bh: m,
                        Bl: y,
                        Ch: A,
                        Cl: w,
                        Dh: b,
                        Dl: v,
                        Eh: E,
                        El: P,
                        Fh: x,
                        Fl: C,
                        Gh: N,
                        Gl: O,
                        Hh: T,
                        Hl: k
                    } = this;
                    for (let S = 0; S < 80; S++) {
                        let I = B.rotrSH(E, P, 14) ^ B.rotrSH(E, P, 18) ^ B.rotrBH(E, P, 41),
                            R = B.rotrSL(E, P, 14) ^ B.rotrSL(E, P, 18) ^ B.rotrBL(E, P, 41),
                            U = E & x ^ ~E & N,
                            D = P & C ^ ~P & O,
                            L = B.add5L(k, R, D, ar[S], ai[S]),
                            F = B.add5H(L, T, I, U, ae[S], an[S]),
                            M = 0 | L,
                            j = B.rotrSH(p, g, 28) ^ B.rotrBH(p, g, 34) ^ B.rotrBH(p, g, 39),
                            G = B.rotrSL(p, g, 28) ^ B.rotrBL(p, g, 34) ^ B.rotrBL(p, g, 39),
                            H = p & m ^ p & A ^ m & A,
                            Q = g & y ^ g & w ^ y & w;
                        T = 0 | N, k = 0 | O, N = 0 | x, O = 0 | C, x = 0 | E, C = 0 | P, ({
                            h: E,
                            l: P
                        } = B.add(0 | b, 0 | v, 0 | F, 0 | M)), b = 0 | A, v = 0 | w, A = 0 | m, w = 0 | y, m = 0 | p, y = 0 | g;
                        let _ = B.add3L(M, G, Q);
                        p = B.add3H(_, F, j, H), g = 0 | _
                    }({
                        h: p,
                        l: g
                    } = B.add(0 | this.Ah, 0 | this.Al, 0 | p, 0 | g)), ({
                        h: m,
                        l: y
                    } = B.add(0 | this.Bh, 0 | this.Bl, 0 | m, 0 | y)), ({
                        h: A,
                        l: w
                    } = B.add(0 | this.Ch, 0 | this.Cl, 0 | A, 0 | w)), ({
                        h: b,
                        l: v
                    } = B.add(0 | this.Dh, 0 | this.Dl, 0 | b, 0 | v)), ({
                        h: E,
                        l: P
                    } = B.add(0 | this.Eh, 0 | this.El, 0 | E, 0 | P)), ({
                        h: x,
                        l: C
                    } = B.add(0 | this.Fh, 0 | this.Fl, 0 | x, 0 | C)), ({
                        h: N,
                        l: O
                    } = B.add(0 | this.Gh, 0 | this.Gl, 0 | N, 0 | O)), ({
                        h: T,
                        l: k
                    } = B.add(0 | this.Hh, 0 | this.Hl, 0 | T, 0 | k)), this.set(p, g, m, y, A, w, b, v, E, P, x, C, N, O, T, k)
                }
                roundClean() {
                    an.fill(0), ai.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            class aa extends as {
                constructor() {
                    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32
                }
            }
            class ao extends as {
                constructor() {
                    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48
                }
            }
            let al = F(() => new as);
            F(() => new aa), F(() => new ao);
            let au = function() {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw Error("unable to locate global object")
            }();
            au.crypto || au.msCrypto;
            let ac = !1,
                ah = function(t, e, r) {
                    return (function(t, e) {
                        let r = {
                            sha256: at,
                            sha512: al
                        }[t];
                        return (0, s.en)(null != r, "invalid hmac algorithm", "algorithm", t), s2.create(r, e)
                    })(t, e).update(r).digest()
                },
                af = ah;

            function ad(t, e, r) {
                let n = (0, o.Pw)(e, "key"),
                    i = (0, o.Pw)(r, "data");
                return (0, o.Dv)(af(t, n, i))
            }
            ad._ = ah, ad.lock = function() {
                ac = !0
            }, ad.register = function(t) {
                if (ac) throw Error("computeHmac is locked");
                af = t
            }, Object.freeze(ad), s0.hmacSha256Sync = function(t, ...e) {
                return (0, o.Pw)(ad("sha256", t, (0, o.zo)(e)))
            };
            class ap {#
                X;
                constructor(t) {
                    (0, s.en)(32 === (0, o.M5)(t), "invalid private key", "privateKey", "[REDACTED]"), this.#X = (0, o.Dv)(t)
                }
                get privateKey() {
                    return this.#X
                }
                get publicKey() {
                    return ap.computePublicKey(this.#X)
                }
                get compressedPublicKey() {
                    return ap.computePublicKey(this.#X, !0)
                }
                sign(t) {
                    (0, s.en)(32 === (0, o.M5)(t), "invalid digest length", "digest", t);
                    let [e, r] = function(t, e, r = {}) {
                        let n;
                        let {
                            seed: i,
                            m: s,
                            d: a
                        } = function(t, e, r) {
                            if (null == t) throw Error(`sign: expected valid message hash, not "${t}"`);
                            let n = sG(t),
                                i = sW(e),
                                s = [sD(i), function(t) {
                                    let e = sY(t),
                                        r = sQ(e, sm.n);
                                    return sD(r < sh ? e : r)
                                }(n)];
                            if (null != r) {
                                !0 === r && (r = s0.randomBytes(32));
                                let a = sG(r);
                                if (32 !== a.length) throw Error("sign: Expected 32 bytes of extra data");
                                s.push(a)
                            }
                            let o = sB(...s),
                                l = sY(n);
                            return {
                                seed: o,
                                m: l,
                                d: i
                            }
                        }(t, e, r.extraEntropy), o = new sJ(32, 32);
                        for (o.reseedSync(i); !(n = function(t, e, r, n = !0) {
                                let {
                                    n: i
                                } = sm, s = sz(t, !0);
                                if (!sK(s)) return;
                                let a = sV(s, i),
                                    o = sN.BASE.multiply(s),
                                    l = sQ(o.x, i);
                                if (l === sh) return;
                                let u = sQ(a * sQ(e + r * l, i), i);
                                if (u === sh) return;
                                let c = new sk(l, u),
                                    h = (o.x === c.r ? 0 : 2) | Number(o.y & sf);
                                return n && c.hasHighS() && (c = c.normalizeS(), h ^= 1), {
                                    sig: c,
                                    recovery: h
                                }
                            }(o.generateSync(), s, a, r.canonical));) o.reseedSync();
                        return function(t, e) {
                            let {
                                sig: r,
                                recovery: n
                            } = t, {
                                der: i,
                                recovered: s
                            } = Object.assign({
                                canonical: !0,
                                der: !0
                            }, e), a = i ? r.toDERRawBytes() : r.toCompactRawBytes();
                            return s ? [a, n] : a
                        }(n, r)
                    }((0, o.h_)(t), (0, o.h_)(this.#X), {
                        recovered: !0,
                        canonical: !0
                    }), n = sk.fromHex(e);
                    return sl.from({
                        r: (0, a.m9)("0x" + n.r.toString(16), 32),
                        s: (0, a.m9)("0x" + n.s.toString(16), 32),
                        v: r ? 28 : 27
                    })
                }
                computeSharedSecret(t) {
                    let e = ap.computePublicKey(t);
                    return (0, o.Dv)(function(t, e, r = !1) {
                        if (sZ(t)) throw TypeError("getSharedSecret: first arg must be private key");
                        if (!sZ(e)) throw TypeError("getSharedSecret: second arg must be public key");
                        let n = e instanceof sN ? (e.assertValidity(), e) : sN.fromHex(e);
                        return n.assertValidity(), n.multiply(sW(t)).toRawBytes(r)
                    }((0, o.h_)(this.#X), (0, o.Pw)(e)))
                }
                static computePublicKey(t, e) {
                    let r = (0, o.Pw)(t, "key");
                    if (32 === r.length) {
                        let n = function(t, e = !1) {
                            return sN.fromPrivateKey(t).toRawBytes(e)
                        }(r, !!e);
                        return (0, o.Dv)(n)
                    }
                    if (64 === r.length) {
                        let i = new Uint8Array(65);
                        i[0] = 4, i.set(r, 1), r = i
                    }
                    let s = sN.fromHex(r);
                    return (0, o.Dv)(s.toRawBytes(e))
                }
                static recoverPublicKey(t, e) {
                    (0, s.en)(32 === (0, o.M5)(t), "invalid digest length", "digest", t);
                    let r = sl.from(e),
                        n = sk.fromCompact((0, o.h_)((0, o.zo)([r.r, r.s]))).toDERRawBytes(),
                        i = function(t, e, r, n = !1) {
                            return sN.fromSignature(t, e, r).toRawBytes(n)
                        }((0, o.h_)(t), n, r.yParity);
                    return (0, s.en)(null != i, "invalid signautre for digest", "signature", e), (0, o.Dv)(i)
                }
                static addPoints(t, e, r) {
                    let n = sN.fromHex(ap.computePublicKey(t).substring(2)),
                        i = sN.fromHex(ap.computePublicKey(e).substring(2));
                    return "0x" + n.add(i).toHex(!!r)
                }
            }

            function ag(t, e, r) {
                let n = 0;
                for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
                return n
            }

            function am(t, e, r, n) {
                let i = [];
                for (; r < e + 1 + n;) {
                    let a = ay(t, r);
                    i.push(a.result), r += a.consumed, (0, s.hu)(r <= e + 1 + n, "child data too short", "BUFFER_OVERRUN", {
                        buffer: t,
                        length: n,
                        offset: e
                    })
                }
                return {
                    consumed: 1 + n,
                    result: i
                }
            }

            function ay(t, e) {
                (0, s.hu)(0 !== t.length, "data too short", "BUFFER_OVERRUN", {
                    buffer: t,
                    length: 0,
                    offset: 1
                });
                let r = e => {
                    (0, s.hu)(e <= t.length, "data short segment too short", "BUFFER_OVERRUN", {
                        buffer: t,
                        length: t.length,
                        offset: e
                    })
                };
                if (t[e] >= 248) {
                    let n = t[e] - 247;
                    r(e + 1 + n);
                    let i = ag(t, e + 1, n);
                    return r(e + 1 + n + i), am(t, e, e + 1 + n, n + i)
                }
                if (t[e] >= 192) {
                    let a = t[e] - 192;
                    return r(e + 1 + a), am(t, e, e + 1, a)
                }
                if (t[e] >= 184) {
                    let l = t[e] - 183;
                    r(e + 1 + l);
                    let u = ag(t, e + 1, l);
                    r(e + 1 + l + u);
                    let c = (0, o.Dv)(t.slice(e + 1 + l, e + 1 + l + u));
                    return {
                        consumed: 1 + l + u,
                        result: c
                    }
                }
                if (t[e] >= 128) {
                    let h = t[e] - 128;
                    r(e + 1 + h);
                    let f = (0, o.Dv)(t.slice(e + 1, e + 1 + h));
                    return {
                        consumed: 1 + h,
                        result: f
                    }
                }
                return {
                    consumed: 1,
                    result: function(t) {
                        let e = t.toString(16);
                        for (; e.length < 2;) e = "0" + e;
                        return "0x" + e
                    }(t[e])
                }
            }

            function aA(t) {
                let e = (0, o.Pw)(t, "data"),
                    r = ay(e, 0);
                return (0, s.en)(r.consumed === e.length, "unexpected junk after rlp payload", "data", t), r.result
            }

            function aw(t) {
                let e = [];
                for (; t;) e.unshift(255 & t), t >>= 8;
                return e
            }
            let ab = "0123456789abcdef";

            function av(t) {
                let e = "0x";
                for (let r of function t(e) {
                        if (Array.isArray(e)) {
                            let r = [];
                            if (e.forEach(function(e) {
                                    r = r.concat(t(e))
                                }), r.length <= 55) return r.unshift(192 + r.length), r;
                            let n = aw(r.length);
                            return n.unshift(247 + n.length), n.concat(r)
                        }
                        let i = Array.prototype.slice.call((0, o.Pw)(e, "object"));
                        if (1 === i.length && i[0] <= 127) return i;
                        if (i.length <= 55) return i.unshift(128 + i.length), i;
                        let s = aw(i.length);
                        return s.unshift(183 + s.length), s.concat(i)
                    }(t)) e += ab[r >> 4] + ab[15 & r];
                return e
            }
            let aE = BigInt(0),
                aP = BigInt(2),
                ax = BigInt(27),
                aC = BigInt(28),
                aN = BigInt(35),
                aO = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

            function aT(t) {
                return "0x" === t ? null : tA(t)
            }

            function ak(t, e) {
                try {
                    return rl(t)
                } catch (r) {
                    (0, s.en)(!1, r.message, e, t)
                }
            }

            function aB(t, e) {
                return "0x" === t ? 0 : (0, a.Dx)(t, e)
            }

            function aS(t, e) {
                if ("0x" === t) return aE;
                let r = (0, a.yT)(t, e);
                return (0, s.en)(r <= aO, "value exceeds uint size", e, r), r
            }

            function aI(t, e) {
                let r = (0, a.yT)(t, "value"),
                    n = (0, a.ot)(r);
                return (0, s.en)(n.length <= 32, "value too large", `tx.${e}`, r), n
            }

            function aR(t) {
                return rl(t).map(t => [t.address, t.storageKeys])
            }

            function aU(t, e) {
                let r = [aI(t.nonce || 0, "nonce"), aI(t.gasPrice || 0, "gasPrice"), aI(t.gasLimit || 0, "gasLimit"), null != t.to ? tA(t.to) : "0x", aI(t.value || 0, "value"), t.data || "0x"],
                    n = aE;
                if (t.chainId != aE) n = (0, a.yT)(t.chainId, "tx.chainId"), (0, s.en)(!e || null == e.networkV || e.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", e);
                else if (t.signature) {
                    let i = t.signature.legacyChainId;
                    null != i && (n = i)
                }
                if (!e) return n !== aE && (r.push((0, a.ot)(n)), r.push("0x"), r.push("0x")), av(r);
                let o = BigInt(27 + e.yParity);
                return n !== aE ? o = sl.getChainIdV(n, e.v) : BigInt(e.v) !== o && (0, s.en)(!1, "tx.chainId/sig.v mismatch", "sig", e), r.push((0, a.ot)(o)), r.push((0, a.ot)(e.r)), r.push((0, a.ot)(e.s)), av(r)
            }

            function aD(t, e) {
                let r;
                try {
                    if (r = aB(e[0], "yParity"), 0 !== r && 1 !== r) throw Error("bad yParity")
                } catch (n) {
                    (0, s.en)(!1, "invalid yParity", "yParity", e[0])
                }
                let i = (0, o.U3)(e[1], 32),
                    a = (0, o.U3)(e[2], 32),
                    l = sl.from({
                        r: i,
                        s: a,
                        yParity: r
                    });
                t.signature = l
            }

            function aL(t, e) {
                let r = [aI(t.chainId || 0, "chainId"), aI(t.nonce || 0, "nonce"), aI(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), aI(t.maxFeePerGas || 0, "maxFeePerGas"), aI(t.gasLimit || 0, "gasLimit"), null != t.to ? tA(t.to) : "0x", aI(t.value || 0, "value"), t.data || "0x", aR(t.accessList || [])];
                return e && (r.push(aI(e.yParity, "yParity")), r.push((0, a.ot)(e.r)), r.push((0, a.ot)(e.s))), (0, o.zo)(["0x02", av(r)])
            }

            function aF(t, e) {
                let r = [aI(t.chainId || 0, "chainId"), aI(t.nonce || 0, "nonce"), aI(t.gasPrice || 0, "gasPrice"), aI(t.gasLimit || 0, "gasLimit"), null != t.to ? tA(t.to) : "0x", aI(t.value || 0, "value"), t.data || "0x", aR(t.accessList || [])];
                return e && (r.push(aI(e.yParity, "recoveryParam")), r.push((0, a.ot)(e.r)), r.push((0, a.ot)(e.s))), (0, o.zo)(["0x01", av(r)])
            }
            class aM {#
                $;#
                tt;#
                e;#
                te;#
                tr;#
                tn;#
                ti;#
                ts;#
                ta;#
                to;#
                tl;#
                tu;
                get type() {
                    return this.#$
                }
                set type(t) {
                    switch (t) {
                        case null:
                            this.#$ = null;
                            break;
                        case 0:
                        case "legacy":
                            this.#$ = 0;
                            break;
                        case 1:
                        case "berlin":
                        case "eip-2930":
                            this.#$ = 1;
                            break;
                        case 2:
                        case "london":
                        case "eip-1559":
                            this.#$ = 2;
                            break;
                        default:
                            (0, s.en)(!1, "unsupported transaction type", "type", t)
                    }
                }
                get typeName() {
                    switch (this.type) {
                        case 0:
                            return "legacy";
                        case 1:
                            return "eip-2930";
                        case 2:
                            return "eip-1559"
                    }
                    return null
                }
                get to() {
                    return this.#tt
                }
                set to(t) {
                    this.#tt = null == t ? null : tA(t)
                }
                get nonce() {
                    return this.#te
                }
                set nonce(t) {
                    this.#te = (0, a.Dx)(t, "value")
                }
                get gasLimit() {
                    return this.#tr
                }
                set gasLimit(t) {
                    this.#tr = (0, a.yT)(t)
                }
                get gasPrice() {
                    let t = this.#tn;
                    return null == t && (0 === this.type || 1 === this.type) ? aE : t
                }
                set gasPrice(t) {
                    this.#tn = null == t ? null : (0, a.yT)(t, "gasPrice")
                }
                get maxPriorityFeePerGas() {
                    let t = this.#ti;
                    return null == t ? 2 === this.type ? aE : null : t
                }
                set maxPriorityFeePerGas(t) {
                    this.#ti = null == t ? null : (0, a.yT)(t, "maxPriorityFeePerGas")
                }
                get maxFeePerGas() {
                    let t = this.#ts;
                    return null == t ? 2 === this.type ? aE : null : t
                }
                set maxFeePerGas(t) {
                    this.#ts = null == t ? null : (0, a.yT)(t, "maxFeePerGas")
                }
                get data() {
                    return this.#e
                }
                set data(t) {
                    this.#e = (0, o.Dv)(t)
                }
                get value() {
                    return this.#ta
                }
                set value(t) {
                    this.#ta = (0, a.yT)(t, "value")
                }
                get chainId() {
                    return this.#to
                }
                set chainId(t) {
                    this.#to = (0, a.yT)(t)
                }
                get signature() {
                    return this.#tl || null
                }
                set signature(t) {
                    this.#tl = null == t ? null : sl.from(t)
                }
                get accessList() {
                    let t = this.#tu || null;
                    return null == t ? 1 === this.type || 2 === this.type ? [] : null : t
                }
                set accessList(t) {
                    this.#tu = null == t ? null : rl(t)
                }
                constructor() {
                    this.#$ = null, this.#tt = null, this.#te = 0, this.#tr = BigInt(0), this.#tn = null, this.#ti = null, this.#ts = null, this.#e = "0x", this.#ta = BigInt(0), this.#to = BigInt(0), this.#tl = null, this.#tu = null
                }
                get hash() {
                    return null == this.signature ? null : tc(this.serialized)
                }
                get unsignedHash() {
                    return tc(this.unsignedSerialized)
                }
                get from() {
                    var t, e, r;
                    return null == this.signature ? null : (t = this.unsignedHash, e = this.signature, tA(tc("0x" + ("string" == typeof(r = ap.recoverPublicKey(t, e)) ? ap.computePublicKey(r, !1) : r.publicKey).substring(4)).substring(26)))
                }
                get fromPublicKey() {
                    return null == this.signature ? null : ap.recoverPublicKey(this.unsignedHash, this.signature)
                }
                isSigned() {
                    return null != this.signature
                }
                get serialized() {
                    switch ((0, s.hu)(null != this.signature, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", {
                        operation: ".serialized"
                    }), this.inferType()) {
                        case 0:
                            return aU(this, this.signature);
                        case 1:
                            return aF(this, this.signature);
                        case 2:
                            return aL(this, this.signature)
                    }(0, s.hu)(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                        operation: ".serialized"
                    })
                }
                get unsignedSerialized() {
                    switch (this.inferType()) {
                        case 0:
                            return aU(this);
                        case 1:
                            return aF(this);
                        case 2:
                            return aL(this)
                    }(0, s.hu)(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                        operation: ".unsignedSerialized"
                    })
                }
                inferType() {
                    return this.inferTypes().pop()
                }
                inferTypes() {
                    let t = null != this.gasPrice,
                        e = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
                        r = null != this.accessList;
                    null != this.maxFeePerGas && null != this.maxPriorityFeePerGas && (0, s.hu)(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", {
                        value: this
                    }), (0, s.hu)(!e || 0 !== this.type && 1 !== this.type, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", {
                        value: this
                    }), (0, s.hu)(0 !== this.type || !r, "legacy transaction cannot have accessList", "BAD_DATA", {
                        value: this
                    });
                    let n = [];
                    return null != this.type ? n.push(this.type) : e ? n.push(2) : t ? (n.push(1), r || n.push(0)) : r ? (n.push(1), n.push(2)) : (n.push(0), n.push(1), n.push(2)), n.sort(), n
                }
                isLegacy() {
                    return 0 === this.type
                }
                isBerlin() {
                    return 1 === this.type
                }
                isLondon() {
                    return 2 === this.type
                }
                clone() {
                    return aM.from(this)
                }
                toJSON() {
                    let t = t => null == t ? null : t.toString();
                    return {
                        type: this.type,
                        to: this.to,
                        data: this.data,
                        nonce: this.nonce,
                        gasLimit: t(this.gasLimit),
                        gasPrice: t(this.gasPrice),
                        maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
                        maxFeePerGas: t(this.maxFeePerGas),
                        value: t(this.value),
                        chainId: t(this.chainId),
                        sig: this.signature ? this.signature.toJSON() : null,
                        accessList: this.accessList
                    }
                }
                static from(t) {
                    if (null == t) return new aM;
                    if ("string" == typeof t) {
                        let e = (0, o.Pw)(t);
                        if (e[0] >= 127) return aM.from(function(t) {
                            let e = aA(t);
                            (0, s.en)(Array.isArray(e) && (9 === e.length || 6 === e.length), "invalid field count for legacy transaction", "data", t);
                            let r = {
                                type: 0,
                                nonce: aB(e[0], "nonce"),
                                gasPrice: aS(e[1], "gasPrice"),
                                gasLimit: aS(e[2], "gasLimit"),
                                to: aT(e[3]),
                                value: aS(e[4], "value"),
                                data: (0, o.Dv)(e[5]),
                                chainId: aE
                            };
                            if (6 === e.length) return r;
                            let n = aS(e[6], "v"),
                                i = aS(e[7], "r"),
                                a = aS(e[8], "s");
                            if (i === aE && a === aE) r.chainId = n;
                            else {
                                let l = (n - aN) / aP;
                                l < aE && (l = aE), r.chainId = l, (0, s.en)(l !== aE || n === ax || n === aC, "non-canonical legacy v", "v", e[6]), r.signature = sl.from({
                                    r: (0, o.U3)(e[7], 32),
                                    s: (0, o.U3)(e[8], 32),
                                    v: n
                                }), r.hash = tc(t)
                            }
                            return r
                        }(e));
                        switch (e[0]) {
                            case 1:
                                return aM.from(function(t) {
                                    let e = aA((0, o.Pw)(t).slice(1));
                                    (0, s.en)(Array.isArray(e) && (8 === e.length || 11 === e.length), "invalid field count for transaction type: 1", "data", (0, o.Dv)(t));
                                    let r = {
                                        type: 1,
                                        chainId: aS(e[0], "chainId"),
                                        nonce: aB(e[1], "nonce"),
                                        gasPrice: aS(e[2], "gasPrice"),
                                        gasLimit: aS(e[3], "gasLimit"),
                                        to: aT(e[4]),
                                        value: aS(e[5], "value"),
                                        data: (0, o.Dv)(e[6]),
                                        accessList: ak(e[7], "accessList")
                                    };
                                    return 8 === e.length || (r.hash = tc(t), aD(r, e.slice(8))), r
                                }(e));
                            case 2:
                                return aM.from(function(t) {
                                    let e = aA((0, o.Pw)(t).slice(1));
                                    (0, s.en)(Array.isArray(e) && (9 === e.length || 12 === e.length), "invalid field count for transaction type: 2", "data", (0, o.Dv)(t));
                                    let r = aS(e[2], "maxPriorityFeePerGas"),
                                        n = aS(e[3], "maxFeePerGas"),
                                        i = {
                                            type: 2,
                                            chainId: aS(e[0], "chainId"),
                                            nonce: aB(e[1], "nonce"),
                                            maxPriorityFeePerGas: r,
                                            maxFeePerGas: n,
                                            gasPrice: null,
                                            gasLimit: aS(e[4], "gasLimit"),
                                            to: aT(e[5]),
                                            value: aS(e[6], "value"),
                                            data: (0, o.Dv)(e[7]),
                                            accessList: ak(e[8], "accessList")
                                        };
                                    return 9 === e.length || (i.hash = tc(t), aD(i, e.slice(9))), i
                                }(e))
                        }(0, s.hu)(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                            operation: "from"
                        })
                    }
                    let r = new aM;
                    return null != t.type && (r.type = t.type), null != t.to && (r.to = t.to), null != t.nonce && (r.nonce = t.nonce), null != t.gasLimit && (r.gasLimit = t.gasLimit), null != t.gasPrice && (r.gasPrice = t.gasPrice), null != t.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas), null != t.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null != t.data && (r.data = t.data), null != t.value && (r.value = t.value), null != t.chainId && (r.chainId = t.chainId), null != t.signature && (r.signature = sl.from(t.signature)), null != t.accessList && (r.accessList = t.accessList), null != t.hash && ((0, s.en)(r.isSigned(), "unsigned transaction cannot define hash", "tx", t), (0, s.en)(r.hash === t.hash, "hash mismatch", "tx", t)), null != t.from && ((0, s.en)(r.isSigned(), "unsigned transaction cannot define from", "tx", t), (0, s.en)(r.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), r
                }
            }
            BigInt(0);
            let aj = BigInt(58);

            function aG(t) {
                return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : (0, s.en)(!1, "unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
            }
            class aH {
                name;
                constructor(t) {
                    (0, l.h)(this, {
                        name: t
                    })
                }
                connect(t) {
                    return this
                }
                supportsCoinType(t) {
                    return !1
                }
                async encodeAddress(t, e) {
                    throw Error("unsupported coin")
                }
                async decodeAddress(t, e) {
                    throw Error("unsupported coin")
                }
            }
            let aQ = RegExp("^(ipfs)://(.*)$", "i"),
                a_ = [RegExp("^(https)://(.*)$", "i"), RegExp("^(data):(.*)$", "i"), aQ, RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];
            class aV {
                provider;
                address;
                name;#
                tc;#
                th;
                constructor(t, e, r) {
                    (0, l.h)(this, {
                        provider: t,
                        address: e,
                        name: r
                    }), this.#tc = null, this.#th = new n2(e, ["function supportsInterface(bytes4) view returns (bool)", "function resolve(bytes, bytes) view returns (bytes)", "function addr(bytes32) view returns (address)", "function addr(bytes32, uint) view returns (bytes)", "function text(bytes32, string) view returns (string)", "function contenthash(bytes32) view returns (bytes)"], t)
                }
                async supportsWildcard() {
                    return null == this.#tc && (this.#tc = (async () => {
                        try {
                            return await this.#th.supportsInterface("0x9061b923")
                        } catch (t) {
                            if ((0, s.VZ)(t, "CALL_EXCEPTION")) return !1;
                            throw this.#tc = null, t
                        }
                    })()), await this.#tc
                }
                async# tf(az, aJ) {
                    aJ = (aJ || []).slice();
                    let aK = this.#th.interface;
                    aJ.unshift(i9(this.name));
                    let aq = null;
                    if (await this.supportsWildcard()) {
                        var aW;
                        aq = aK.getFunction(az), (0, s.hu)(aq, "missing fragment", "UNKNOWN_ERROR", {
                            info: {
                                funcName: az
                            }
                        }), aJ = [(aW = this.name, (0, o.Dv)((0, o.zo)(i6(aW).map(t => {
                            if (t.length > 63) throw Error("invalid DNS encoded entry; length exceeds 63 bytes");
                            let e = new Uint8Array(t.length + 1);
                            return e.set(t, 1), e[0] = e.length - 1, e
                        }))) + "00"), aK.encodeFunctionData(aq, aJ)], az = "resolve(bytes,bytes)"
                    }
                    aJ.push({
                        ccipReadEnable: !0
                    });
                    try {
                        let aZ = await this.#th[az](...aJ);
                        if (aq) return aK.decodeFunctionResult(aq, aZ)[0];
                        return aZ
                    } catch (aY) {
                        if (!(0, s.VZ)(aY, "CALL_EXCEPTION")) throw aY
                    }
                    return null
                }
                async getAddress(t) {
                    if (null == t && (t = 60), 60 === t) try {
                        let e = await this.#tf("addr(bytes32)");
                        if (null == e || e === rG) return null;
                        return e
                    } catch (r) {
                        if ((0, s.VZ)(r, "CALL_EXCEPTION")) return null;
                        throw r
                    }
                    if (t >= 0 && t < 2147483648) {
                        let n = t + 2147483648,
                            i = await this.#tf("addr(bytes32,uint)", [n]);
                        if ((0, o.A7)(i, 20)) return tA(i)
                    }
                    let a = null;
                    for (let l of this.provider.plugins)
                        if (l instanceof aH && l.supportsCoinType(t)) {
                            a = l;
                            break
                        }
                    if (null == a) return null;
                    let u = await this.#tf("addr(bytes32,uint)", [t]);
                    if (null == u || "0x" === u) return null;
                    let c = await a.decodeAddress(t, u);
                    if (null != c) return c;
                    (0, s.hu)(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
                        operation: `getAddress(${t})`,
                        info: {
                            coinType: t,
                            data: u
                        }
                    })
                }
                async getText(t) {
                    let e = await this.#tf("text(bytes32,string)", [t]);
                    return null == e || "0x" === e ? null : e
                }
                async getContentHash() {
                    let t = await this.#tf("contenthash(bytes32)");
                    if (null == t || "0x" === t) return null;
                    let e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                    if (e) {
                        let r = "e3010170" === e[1] ? "ipfs" : "ipns",
                            n = parseInt(e[4], 16);
                        if (e[5].length === 2 * n) return `${r}://${function(t){let e=(0,a.Gh)((0,o.Pw)(t)),r="";for(;e;)r="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[Number(e%aj)]+r,e/=aj;return r}("0x"+e[2])}`
                    }
                    let i = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                    if (i && 64 === i[1].length) return `bzz://${i[1]}`;
                    (0, s.hu)(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
                        operation: "getContentHash()",
                        info: {
                            data: t
                        }
                    })
                }
                async getAvatar() {
                    let t = await this._getAvatar();
                    return t.url
                }
                async _getAvatar() {
                    let t = [{
                        type: "name",
                        value: this.name
                    }];
                    try {
                        let e = await this.getText("avatar");
                        if (null == e) return t.push({
                            type: "!avatar",
                            value: ""
                        }), {
                            url: null,
                            linkage: t
                        };
                        t.push({
                            type: "avatar",
                            value: e
                        });
                        for (let r = 0; r < a_.length; r++) {
                            let n = e.match(a_[r]);
                            if (null == n) continue;
                            let i = n[1].toLowerCase();
                            switch (i) {
                                case "https":
                                case "data":
                                    return t.push({
                                        type: "url",
                                        value: e
                                    }), {
                                        linkage: t,
                                        url: e
                                    };
                                case "ipfs":
                                    {
                                        let s = aG(e);
                                        return t.push({
                                            type: "ipfs",
                                            value: e
                                        }),
                                        t.push({
                                            type: "url",
                                            value: s
                                        }),
                                        {
                                            linkage: t,
                                            url: s
                                        }
                                    }
                                case "erc721":
                                case "erc1155":
                                    {
                                        let l = "erc721" === i ? "tokenURI(uint256)" : "uri(uint256)";t.push({
                                            type: i,
                                            value: e
                                        });
                                        let u = await this.getAddress();
                                        if (null == u) return t.push({
                                            type: "!owner",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        let c = (n[2] || "").split("/");
                                        if (2 !== c.length) return t.push({
                                            type: `!${i}caip`,
                                            value: n[2] || ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        let h = c[1],
                                            f = new n2(c[0], ["function tokenURI(uint) view returns (string)", "function ownerOf(uint) view returns (address)", "function uri(uint) view returns (string)", "function balanceOf(address, uint256) view returns (uint)"], this.provider);
                                        if ("erc721" === i) {
                                            let d = await f.ownerOf(h);
                                            if (u !== d) return t.push({
                                                type: "!owner",
                                                value: d
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "owner",
                                                value: d
                                            })
                                        } else if ("erc1155" === i) {
                                            let p = await f.balanceOf(u, h);
                                            if (!p) return t.push({
                                                type: "!balance",
                                                value: "0"
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "balance",
                                                value: p.toString()
                                            })
                                        }
                                        let g = await f[l](h);
                                        if (null == g || "0x" === g) return t.push({
                                            type: "!metadata-url",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };t.push({
                                            type: "metadata-url-base",
                                            value: g
                                        }),
                                        "erc1155" === i && (g = g.replace("{id}", (0, a.m9)(h, 32).substring(2)), t.push({
                                            type: "metadata-url-expanded",
                                            value: g
                                        })),
                                        g.match(/^ipfs:/i) && (g = aG(g)),
                                        t.push({
                                            type: "metadata-url",
                                            value: g
                                        });
                                        let m = {},
                                            y = await new rw(g).send();y.assertOk();
                                        try {
                                            m = y.bodyJson
                                        } catch (b) {
                                            try {
                                                t.push({
                                                    type: "!metadata",
                                                    value: y.bodyText
                                                })
                                            } catch (w) {
                                                let A = y.body;
                                                A && t.push({
                                                    type: "!metadata",
                                                    value: (0, o.Dv)(A)
                                                })
                                            }
                                            return {
                                                url: null,
                                                linkage: t
                                            }
                                        }
                                        if (!m) return t.push({
                                            type: "!metadata",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };t.push({
                                            type: "metadata",
                                            value: JSON.stringify(m)
                                        });
                                        let v = m.image;
                                        if ("string" != typeof v) return t.push({
                                            type: "!imageUrl",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        if (v.match(/^(https:\/\/|data:)/i));
                                        else {
                                            let E = v.match(aQ);
                                            if (null == E) return t.push({
                                                type: "!imageUrl-ipfs",
                                                value: v
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "imageUrl-ipfs",
                                                value: v
                                            }), v = aG(v)
                                        }
                                        return t.push({
                                            type: "url",
                                            value: v
                                        }),
                                        {
                                            linkage: t,
                                            url: v
                                        }
                                    }
                            }
                        }
                    } catch (P) {}
                    return {
                        linkage: t,
                        url: null
                    }
                }
                static async getEnsAddress(t) {
                    let e = await t.getNetwork(),
                        r = e.getPlugin("org.ethers.plugins.network.Ens");
                    return (0, s.hu)(r, "network does not support ENS", "UNSUPPORTED_OPERATION", {
                        operation: "getEnsAddress",
                        info: {
                            network: e
                        }
                    }), r.address
                }
                static async# td(aX, a$) {
                    let a0 = await aV.getEnsAddress(aX);
                    try {
                        let a1 = new n2(a0, ["function resolver(bytes32) view returns (address)"], aX),
                            a2 = await a1.resolver(i9(a$), {
                                enableCcipRead: !0
                            });
                        if (a2 === rG) return null;
                        return a2
                    } catch (a4) {
                        throw a4
                    }
                    return null
                }
                static async fromName(t, e) {
                    let r = e;
                    for (;;) {
                        if ("" === r || "." === r || "eth" !== e && "eth" === r) return null;
                        let n = await aV.#td(t, r);
                        if (null != n) {
                            let i = new aV(t, n, e);
                            if (r !== e && !await i.supportsWildcard()) return null;
                            return i
                        }
                        r = r.split(".").slice(1).join(".")
                    }
                }
            }
            let a8 = BigInt(0);

            function a3(t, e) {
                return function(r) {
                    return null == r ? e : t(r)
                }
            }

            function a5(t) {
                return e => {
                    if (!Array.isArray(e)) throw Error("not an array");
                    return e.map(e => t(e))
                }
            }

            function a6(t, e) {
                return r => {
                    let n = {};
                    for (let i in t) {
                        let a = i;
                        if (e && i in e && !(a in r)) {
                            for (let o of e[i])
                                if (o in r) {
                                    a = o;
                                    break
                                }
                        }
                        try {
                            let l = t[i](r[a]);
                            void 0 !== l && (n[i] = l)
                        } catch (c) {
                            let u = c instanceof Error ? c.message : "not-an-error";
                            (0, s.hu)(!1, `invalid value for value.${i} (${u})`, "BAD_DATA", {
                                value: r
                            })
                        }
                    }
                    return n
                }
            }

            function a9(t) {
                return (0, s.en)((0, o.A7)(t, !0), "invalid data", "value", t), t
            }

            function a7(t) {
                return (0, s.en)((0, o.A7)(t, 32), "invalid hash", "value", t), t
            }
            let ot = a6({
                    address: tA,
                    blockHash: a7,
                    blockNumber: a.Dx,
                    data: a9,
                    index: a.Dx,
                    removed: a3(function(t) {
                        switch (t) {
                            case !0:
                            case "true":
                                return !0;
                            case !1:
                            case "false":
                                return !1
                        }(0, s.en)(!1, `invalid boolean; ${JSON.stringify(t)}`, "value", t)
                    }, !1),
                    topics: a5(a7),
                    transactionHash: a7,
                    transactionIndex: a.Dx
                }, {
                    index: ["logIndex"]
                }),
                oe = a6({
                    hash: a3(a7),
                    parentHash: a7,
                    number: a.Dx,
                    timestamp: a.Dx,
                    nonce: a3(a9),
                    difficulty: a.yT,
                    gasLimit: a.yT,
                    gasUsed: a.yT,
                    miner: a3(tA),
                    extraData: a9,
                    baseFeePerGas: a3(a.yT)
                }),
                or = a6({
                    transactionIndex: a.Dx,
                    blockNumber: a.Dx,
                    transactionHash: a7,
                    address: tA,
                    topics: a5(a7),
                    data: a9,
                    index: a.Dx,
                    blockHash: a7
                }, {
                    index: ["logIndex"]
                }),
                on = a6({
                    to: a3(tA, null),
                    from: a3(tA, null),
                    contractAddress: a3(tA, null),
                    index: a.Dx,
                    root: a3(o.Dv),
                    gasUsed: a.yT,
                    logsBloom: a3(a9),
                    blockHash: a7,
                    hash: a7,
                    logs: a5(function(t) {
                        return or(t)
                    }),
                    blockNumber: a.Dx,
                    cumulativeGasUsed: a.yT,
                    effectiveGasPrice: a3(a.yT),
                    status: a3(a.Dx),
                    type: a3(a.Dx, 0)
                }, {
                    effectiveGasPrice: ["gasPrice"],
                    hash: ["transactionHash"],
                    index: ["transactionIndex"]
                });

            function oi(t) {
                t.to && (0, a.yT)(t.to) === a8 && (t.to = "0x0000000000000000000000000000000000000000");
                let e = a6({
                    hash: a7,
                    type: t => "0x" === t || null == t ? 0 : (0, a.Dx)(t),
                    accessList: a3(rl, null),
                    blockHash: a3(a7, null),
                    blockNumber: a3(a.Dx, null),
                    transactionIndex: a3(a.Dx, null),
                    from: tA,
                    gasPrice: a3(a.yT),
                    maxPriorityFeePerGas: a3(a.yT),
                    maxFeePerGas: a3(a.yT),
                    gasLimit: a.yT,
                    to: a3(tA, null),
                    value: a.yT,
                    nonce: a.Dx,
                    data: a9,
                    creates: a3(tA, null),
                    chainId: a3(a.yT, null)
                }, {
                    data: ["input"],
                    gasLimit: ["gas"]
                })(t);
                if (null == e.to && null == e.creates && (e.creates = function(t) {
                        let e = tA(t.from),
                            r = (0, a.yT)(t.nonce, "tx.nonce"),
                            n = r.toString(16);
                        return n = "0" === n ? "0x" : n.length % 2 ? "0x0" + n : "0x" + n, tA((0, o.QB)(tc(av([e, n])), 12))
                    }(e)), (1 === t.type || 2 === t.type) && null == t.accessList && (e.accessList = []), t.signature ? e.signature = sl.from(t.signature) : e.signature = sl.from(t), null == e.chainId) {
                    let r = e.signature.legacyChainId;
                    null != r && (e.chainId = r)
                }
                return e.blockHash && (0, a.yT)(e.blockHash) === a8 && (e.blockHash = null), e
            }
            class os {
                name;
                constructor(t) {
                    (0, l.h)(this, {
                        name: t
                    })
                }
                clone() {
                    return new os(this.name)
                }
            }
            class oa extends os {
                effectiveBlock;
                txBase;
                txCreate;
                txDataZero;
                txDataNonzero;
                txAccessListStorageKey;
                txAccessListAddress;
                constructor(t, e) {
                    null == t && (t = 0), super(`org.ethers.network.plugins.GasCost#${t||0}`);
                    let r = {
                        effectiveBlock: t
                    };

                    function n(t, n) {
                        let i = (e || {})[t];
                        null == i && (i = n), (0, s.en)("number" == typeof i, `invalud value for ${t}`, "costs", e), r[t] = i
                    }
                    n("txBase", 21e3), n("txCreate", 32e3), n("txDataZero", 4), n("txDataNonzero", 16), n("txAccessListStorageKey", 1900), n("txAccessListAddress", 2400), (0, l.h)(this, r)
                }
                clone() {
                    return new oa(this.effectiveBlock, this)
                }
            }
            class oo extends os {
                address;
                targetNetwork;
                constructor(t, e) {
                    super("org.ethers.plugins.network.Ens"), (0, l.h)(this, {
                        address: t || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        targetNetwork: null == e ? 1 : e
                    })
                }
                clone() {
                    return new oo(this.address, this.targetNetwork)
                }
            }
            let ol = new Map;
            class ou {#
                tp;#
                to;#
                tg;
                constructor(t, e) {
                    this.#tp = t, this.#to = (0, a.yT)(e), this.#tg = new Map
                }
                toJSON() {
                    return {
                        name: this.name,
                        chainId: String(this.chainId)
                    }
                }
                get name() {
                    return this.#tp
                }
                set name(t) {
                    this.#tp = t
                }
                get chainId() {
                    return this.#to
                }
                set chainId(t) {
                    this.#to = (0, a.yT)(t, "chainId")
                }
                matches(t) {
                    if (null == t) return !1;
                    if ("string" == typeof t) {
                        try {
                            return this.chainId === (0, a.yT)(t)
                        } catch (e) {}
                        return this.name === t
                    }
                    if ("number" == typeof t || "bigint" == typeof t) {
                        try {
                            return this.chainId === (0, a.yT)(t)
                        } catch (r) {}
                        return !1
                    }
                    if ("object" == typeof t) {
                        if (null != t.chainId) {
                            try {
                                return this.chainId === (0, a.yT)(t.chainId)
                            } catch (n) {}
                            return !1
                        }
                        if (null != t.name) return this.name === t.name
                    }
                    return !1
                }
                get plugins() {
                    return Array.from(this.#tg.values())
                }
                attachPlugin(t) {
                    if (this.#tg.get(t.name)) throw Error(`cannot replace existing plugin: ${t.name} `);
                    return this.#tg.set(t.name, t.clone()), this
                }
                getPlugin(t) {
                    return this.#tg.get(t) || null
                }
                getPlugins(t) {
                    return this.plugins.filter(e => e.name.split("#")[0] === t)
                }
                clone() {
                    let t = new ou(this.name, this.chainId);
                    return this.plugins.forEach(e => {
                        t.attachPlugin(e.clone())
                    }), t
                }
                computeIntrinsicGas(t) {
                    let e = this.getPlugin("org.ethers.plugins.network.GasCost") || new oa,
                        r = e.txBase;
                    if (null == t.to && (r += e.txCreate), t.data)
                        for (let n = 2; n < t.data.length; n += 2) "00" === t.data.substring(n, n + 2) ? r += e.txDataZero : r += e.txDataNonzero;
                    if (t.accessList) {
                        let i = rl(t.accessList);
                        for (let s in i) r += e.txAccessListAddress + e.txAccessListStorageKey * i[s].storageKeys.length
                    }
                    return r
                }
                static from(t) {
                    if (function() {
                            oc || (oc = !0, t("mainnet", 1, {
                                ensNetwork: 1,
                                altNames: ["homestead"]
                            }), t("ropsten", 3, {
                                ensNetwork: 3
                            }), t("rinkeby", 4, {
                                ensNetwork: 4
                            }), t("goerli", 5, {
                                ensNetwork: 5
                            }), t("kovan", 42, {
                                ensNetwork: 42
                            }), t("sepolia", 11155111, {}), t("classic", 61, {}), t("classicKotti", 6, {}), t("xdai", 100, {
                                ensNetwork: 1
                            }), t("optimism", 10, {
                                ensNetwork: 1,
                                etherscan: {
                                    url: "https://api-optimistic.etherscan.io/"
                                }
                            }), t("optimism-goerli", 420, {
                                etherscan: {
                                    url: "https://api-goerli-optimistic.etherscan.io/"
                                }
                            }), t("arbitrum", 42161, {
                                ensNetwork: 1,
                                etherscan: {
                                    url: "https://api.arbiscan.io/"
                                }
                            }), t("arbitrum-goerli", 421613, {
                                etherscan: {
                                    url: "https://api-goerli.arbiscan.io/"
                                }
                            }), t("matic", 137, {
                                ensNetwork: 1,
                                etherscan: {
                                    url: "https://api.polygonscan.com/"
                                }
                            }), t("matic-mumbai", 80001, {
                                altNames: ["maticMumbai", "maticmum"],
                                etherscan: {
                                    url: "https://api-testnet.polygonscan.com/"
                                }
                            }), t("bnb", 56, {
                                ensNetwork: 1,
                                etherscan: {
                                    url: "http://api.bscscan.com"
                                }
                            }), t("bnbt", 97, {
                                etherscan: {
                                    url: "http://api-testnet.bscscan.com"
                                }
                            }));

                            function t(t, e, r) {
                                let n = function() {
                                    let n = new ou(t, e);
                                    return null != r.ensNetwork && n.attachPlugin(new oo(null, r.ensNetwork)), r.priorityFee, n.attachPlugin(new oa), n
                                };
                                ou.register(t, n), ou.register(e, n), r.altNames && r.altNames.forEach(t => {
                                    ou.register(t, n)
                                })
                            }
                        }(), null == t) return ou.from("mainnet");
                    if ("number" == typeof t && (t = BigInt(t)), "string" == typeof t || "bigint" == typeof t) {
                        let e = ol.get(t);
                        if (e) return e();
                        if ("bigint" == typeof t) return new ou("unknown", t);
                        (0, s.en)(!1, "unknown network", "network", t)
                    }
                    if ("function" == typeof t.clone) {
                        let r = t.clone();
                        return r
                    }
                    if ("object" == typeof t) {
                        (0, s.en)("string" == typeof t.name && "number" == typeof t.chainId, "invalid network object name or chainId", "network", t);
                        let n = new ou(t.name, t.chainId);
                        return (t.ensAddress || null != t.ensNetwork) && n.attachPlugin(new oo(t.ensAddress, t.ensNetwork)), n
                    }(0, s.en)(!1, "invalid network", "network", t)
                }
                static register(t, e) {
                    "number" == typeof t && (t = BigInt(t));
                    let r = ol.get(t);
                    r && (0, s.en)(!1, `conflicting network for ${JSON.stringify(r.name)}`, "nameOrChainId", t), ol.set(t, e)
                }
            }
            let oc = !1;

            function oh(t) {
                return JSON.parse(JSON.stringify(t))
            }
            class of {#
                tm;#ty;#tA;#tw;constructor(t) {
                    this.#tm = t, this.#ty = null, this.#tA = 4e3, this.#tw = -2
                }
                get pollingInterval() {
                    return this.#tA
                }
                set pollingInterval(t) {
                    this.#tA = t
                }
                async# tb() {
                    try {
                        let od = await this.#tm.getBlockNumber();
                        if (-2 === this.#tw) {
                            this.#tw = od;
                            return
                        }
                        if (od !== this.#tw) {
                            for (let op = this.#tw + 1; op <= od; op++) {
                                if (null == this.#ty) return;
                                await this.#tm.emit("block", op)
                            }
                            this.#tw = od
                        }
                    } catch (og) {}
                    null != this.#ty && (this.#ty = this.#tm._setTimeout(this.#tb.bind(this), this.#tA))
                }
                start() {
                    this.#ty || (this.#ty = this.#tm._setTimeout(this.#tb.bind(this), this.#tA), this.#tb())
                }
                stop() {
                    this.#ty && (this.#tm._clearTimeout(this.#ty), this.#ty = null)
                }
                pause(t) {
                    this.stop(), t && (this.#tw = -2)
                }
                resume() {
                    this.start()
                }
            }
            class om {#
                tm;#
                tb;#
                tv;
                constructor(t) {
                    this.#tm = t, this.#tv = !1, this.#tb = t => {
                        this._poll(t, this.#tm)
                    }
                }
                async _poll(t, e) {
                    throw Error("sub-classes must override this")
                }
                start() {
                    this.#tv || (this.#tv = !0, this.#tb(-2), this.#tm.on("block", this.#tb))
                }
                stop() {
                    this.#tv && (this.#tv = !1, this.#tm.off("block", this.#tb))
                }
                pause(t) {
                    this.stop()
                }
                resume() {
                    this.start()
                }
            }
            class oy extends om {#
                K;
                constructor(t, e) {
                    super(t), this.#K = oh(e)
                }
                async _poll(t, e) {
                    throw Error("@TODO")
                }
            }
            class oA extends om {#
                tE;
                constructor(t, e) {
                    super(t), this.#tE = e
                }
                async _poll(t, e) {
                    let r = await e.getTransactionReceipt(this.#tE);
                    r && e.emit(this.#tE, r)
                }
            }
            class ow {#
                tm;#
                K;#
                ty;#
                tv;#
                tw;
                constructor(t, e) {
                    this.#tm = t, this.#K = oh(e), this.#ty = this.#tb.bind(this), this.#tv = !1, this.#tw = -2
                }
                async# tb(ob) {
                    if (-2 === this.#tw) return;
                    let ov = oh(this.#K);
                    ov.fromBlock = this.#tw + 1, ov.toBlock = ob;
                    let oE = await this.#tm.getLogs(ov);
                    if (0 === oE.length) {
                        this.#tw < ob - 60 && (this.#tw = ob - 60);
                        return
                    }
                    for (let oP of oE) this.#tm.emit(this.#K, oP), this.#tw = oP.blockNumber
                }
                start() {
                    this.#tv || (this.#tv = !0, -2 === this.#tw && this.#tm.getBlockNumber().then(t => {
                        this.#tw = t
                    }), this.#tm.on("block", this.#ty))
                }
                stop() {
                    this.#tv && (this.#tv = !1, this.#tm.off("block", this.#ty))
                }
                pause(t) {
                    this.stop(), t && (this.#tw = -2)
                }
                resume() {
                    this.start()
                }
            }
            let ox = BigInt(2);

            function oC(t) {
                return t && "function" == typeof t.then
            }

            function oN(t, e) {
                return t + ":" + JSON.stringify(e, (t, e) => {
                    if (null == e) return "null";
                    if ("bigint" == typeof e) return `bigint:${e.toString()}`;
                    if ("string" == typeof e) return e.toLowerCase();
                    if ("object" == typeof e && !Array.isArray(e)) {
                        let r = Object.keys(e);
                        return r.sort(), r.reduce((t, r) => (t[r] = e[r], t), {})
                    }
                    return e
                })
            }
            class oO {
                name;
                constructor(t) {
                    (0, l.h)(this, {
                        name: t
                    })
                }
                start() {}
                stop() {}
                pause(t) {}
                resume() {}
            }

            function oT(t) {
                return (t = Array.from(new Set(t).values())).sort(), t
            }
            async function ok(t, e) {
                if (null == t) throw Error("invalid event");
                if (Array.isArray(t) && (t = {
                        topics: t
                    }), "string" == typeof t) switch (t) {
                    case "block":
                    case "pending":
                    case "debug":
                    case "error":
                    case "network":
                        return {
                            type: t,
                            tag: t
                        }
                }
                if ((0, o.A7)(t, 32)) {
                    let r = t.toLowerCase();
                    return {
                        type: "transaction",
                        tag: oN("tx", {
                            hash: r
                        }),
                        hash: r
                    }
                }
                if (t.orphan) {
                    let n = t;
                    return {
                        type: "orphan",
                        tag: oN("orphan", n),
                        filter: JSON.parse(JSON.stringify(n))
                    }
                }
                if (t.address || t.topics) {
                    let i = t,
                        a = {
                            topics: (i.topics || []).map(t => null == t ? null : Array.isArray(t) ? oT(t.map(t => t.toLowerCase())) : t.toLowerCase())
                        };
                    if (i.address) {
                        let l = [],
                            u = [],
                            c = t => {
                                (0, o.A7)(t) ? l.push(t): u.push((async () => {
                                    l.push(await eW(t, e))
                                })())
                            };
                        Array.isArray(i.address) ? i.address.forEach(c) : c(i.address), u.length && await Promise.all(u), a.address = oT(l.map(t => t.toLowerCase()))
                    }
                    return {
                        filter: a,
                        tag: oN("event", a),
                        type: "event"
                    }
                }(0, s.en)(!1, "unknown ProviderEvent", "event", t)
            }

            function oB() {
                return new Date().getTime()
            }
            let oS = {
                cacheTimeout: 250
            };
            class oI {#
                tP;#
                tg;#
                tx;#
                tC;#
                tN;#
                tO;#
                tT;#
                tk;#
                tB;#
                tS;#
                tI;#
                a;
                constructor(t, e) {
                    if (this.#a = Object.assign({}, oS, e || {}), "any" === t) this.#tO = !0, this.#tN = null;
                    else if (t) {
                        let r = ou.from(t);
                        this.#tO = !1, this.#tN = Promise.resolve(r), setTimeout(() => {
                            this.emit("network", r, null)
                        }, 0)
                    } else this.#tO = !1, this.#tN = null;
                    this.#tk = -1, this.#tT = new Map, this.#tP = new Map, this.#tg = new Map, this.#tx = null, this.#tC = !1, this.#tB = 1, this.#tS = new Map, this.#tI = !1
                }
                get provider() {
                    return this
                }
                get plugins() {
                    return Array.from(this.#tg.values())
                }
                attachPlugin(t) {
                    if (this.#tg.get(t.name)) throw Error(`cannot replace existing plugin: ${t.name} `);
                    return this.#tg.set(t.name, t.connect(this)), this
                }
                getPlugin(t) {
                    return this.#tg.get(t) || null
                }
                get disableCcipRead() {
                    return this.#tI
                }
                set disableCcipRead(t) {
                    this.#tI = !!t
                }
                async# tR(oR) {
                    let oU = this.#a.cacheTimeout;
                    if (oU < 0) return await this._perform(oR);
                    let oD = oN(oR.method, oR),
                        oL = this.#tT.get(oD);
                    return oL || (oL = this._perform(oR), this.#tT.set(oD, oL), setTimeout(() => {
                        this.#tT.get(oD) === oL && this.#tT.delete(oD)
                    }, oU)), await oL
                }
                async ccipReadFetch(t, e, r) {
                    if (this.disableCcipRead || 0 === r.length || null == t.to) return null;
                    let n = t.to.toLowerCase(),
                        i = e.toLowerCase(),
                        a = [];
                    for (let o = 0; o < r.length; o++) {
                        let l = r[o],
                            u = l.replace("{sender}", n).replace("{data}", i),
                            c = new rw(u); - 1 === l.indexOf("{data}") && (c.body = {
                            data: i,
                            sender: n
                        }), this.emit("debug", {
                            action: "sendCcipReadFetchRequest",
                            request: c,
                            index: o,
                            urls: r
                        });
                        let h = "unknown error",
                            f = await c.send();
                        try {
                            let d = f.bodyJson;
                            if (d.data) return this.emit("debug", {
                                action: "receiveCcipReadFetchResult",
                                request: c,
                                result: d
                            }), d.data;
                            d.message && (h = d.message), this.emit("debug", {
                                action: "receiveCcipReadFetchError",
                                request: c,
                                result: d
                            })
                        } catch (p) {}(0, s.hu)(f.statusCode < 400 || f.statusCode >= 500, `response not found during CCIP fetch: ${h}`, "OFFCHAIN_FAULT", {
                            reason: "404_MISSING_RESOURCE",
                            transaction: t,
                            info: {
                                url: l,
                                errorMessage: h
                            }
                        }), a.push(h)
                    }(0, s.hu)(!1, `error encountered during CCIP fetch: ${a.map(t=>JSON.stringify(t)).join(", ")}`, "OFFCHAIN_FAULT", {
                        reason: "500_SERVER_ERROR",
                        transaction: t,
                        info: {
                            urls: r,
                            errorMessages: a
                        }
                    })
                }
                _wrapBlock(t, e) {
                    return new nE(function(t) {
                        let e = oe(t);
                        return e.transactions = t.transactions.map(t => "string" == typeof t ? t : oi(t)), e
                    }(t), this)
                }
                _wrapLog(t, e) {
                    return new nP(ot(t), this)
                }
                _wrapTransactionReceipt(t, e) {
                    return new nx(on(t), this)
                }
                _wrapTransactionResponse(t, e) {
                    return new nC(oi(t), this)
                }
                _detectNetwork() {
                    (0, s.hu)(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
                        operation: "_detectNetwork"
                    })
                }
                async _perform(t) {
                    (0, s.hu)(!1, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
                        operation: t.method,
                        info: t
                    })
                }
                async getBlockNumber() {
                    let t = (0, a.Dx)(await this.#tR({
                        method: "getBlockNumber"
                    }), "%response");
                    return this.#tk >= 0 && (this.#tk = t), t
                }
                _getAddress(t) {
                    return eW(t, this)
                }
                _getBlockTag(t) {
                    if (null == t) return "latest";
                    switch (t) {
                        case "earliest":
                            return "0x0";
                        case "latest":
                        case "pending":
                        case "safe":
                        case "finalized":
                            return t
                    }
                    return (0, o.A7)(t) ? (0, o.A7)(t, 32) ? t : (0, a.B4)(t) : ("bigint" == typeof t && (t = (0, a.Dx)(t, "blockTag")), "number" == typeof t) ? t >= 0 ? (0, a.B4)(t) : this.#tk >= 0 ? (0, a.B4)(this.#tk + t) : this.getBlockNumber().then(e => (0, a.B4)(e + t)) : void(0, s.en)(!1, "invalid blockTag", "blockTag", t)
                }
                _getFilter(t) {
                    let e, r;
                    let n = (t.topics || []).map(t => null == t ? null : Array.isArray(t) ? oT(t.map(t => t.toLowerCase())) : t.toLowerCase()),
                        i = "blockHash" in t ? t.blockHash : void 0,
                        s = (t, e, r) => {
                            let s;
                            switch (t.length) {
                                case 0:
                                    break;
                                case 1:
                                    s = t[0];
                                    break;
                                default:
                                    t.sort(), s = t
                            }
                            if (i && (null != e || null != r)) throw Error("invalid filter");
                            let a = {};
                            return s && (a.address = s), n.length && (a.topics = n), e && (a.fromBlock = e), r && (a.toBlock = r), i && (a.blockHash = i), a
                        },
                        a = [];
                    if (t.address) {
                        if (Array.isArray(t.address))
                            for (let o of t.address) a.push(this._getAddress(o));
                        else a.push(this._getAddress(t.address))
                    }
                    return "fromBlock" in t && (e = this._getBlockTag(t.fromBlock)), ("toBlock" in t && (r = this._getBlockTag(t.toBlock)), a.filter(t => "string" != typeof t).length || null != e && "string" != typeof e || null != r && "string" != typeof r) ? Promise.all([Promise.all(a), e, r]).then(t => s(t[0], t[1], t[2])) : s(a, e, r)
                }
                _getTransactionRequest(t) {
                    let e = nv(t),
                        r = [];
                    if (["to", "from"].forEach(t => {
                            if (null == e[t]) return;
                            let n = eW(e[t]);
                            oC(n) ? r.push(async function() {
                                e[t] = await n
                            }()) : e[t] = n
                        }), null != e.blockTag) {
                        let n = this._getBlockTag(e.blockTag);
                        oC(n) ? r.push(async function() {
                            e.blockTag = await n
                        }()) : e.blockTag = n
                    }
                    return r.length ? async function() {
                        return await Promise.all(r), e
                    }() : e
                }
                async getNetwork() {
                    if (null == this.#tN) {
                        let t = this._detectNetwork().then(t => (this.emit("network", t, null), t), e => {
                            throw this.#tN === t && (this.#tN = null), e
                        });
                        return this.#tN = t, (await t).clone()
                    }
                    let e = this.#tN,
                        [r, n] = await Promise.all([e, this._detectNetwork()]);
                    return r.chainId !== n.chainId && (this.#tO ? (this.emit("network", n, r), this.#tN === e && (this.#tN = Promise.resolve(n))) : (0, s.hu)(!1, `network changed: ${r.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
                        event: "changed"
                    })), r.clone()
                }
                async getFeeData() {
                    let {
                        block: t,
                        gasPrice: e
                    } = await (0, l.m)({
                        block: this.getBlock("latest"),
                        gasPrice: (async () => {
                            try {
                                let t = await this.#tR({
                                    method: "getGasPrice"
                                });
                                return (0, a.yT)(t, "%response")
                            } catch (e) {}
                            return null
                        })()
                    }), r = null, n = null;
                    return t && t.baseFeePerGas && (n = BigInt("1000000000"), r = t.baseFeePerGas * ox + n), new nb(e, r, n)
                }
                async estimateGas(t) {
                    let e = this._getTransactionRequest(t);
                    return oC(e) && (e = await e), (0, a.yT)(await this.#tR({
                        method: "estimateGas",
                        transaction: e
                    }), "%response")
                }
                async# tU(oF, oM, oj) {
                    (0, s.hu)(oj < 10, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
                        reason: "TOO_MANY_REDIRECTS",
                        transaction: Object.assign({}, oF, {
                            blockTag: oM,
                            enableCcipRead: !0
                        })
                    });
                    let oG = nv(oF);
                    try {
                        return (0, o.Dv)(await this._perform({
                            method: "call",
                            transaction: oG,
                            blockTag: oM
                        }))
                    } catch (oW) {
                        if (!this.disableCcipRead && (0, s.Hl)(oW) && oW.data && oj >= 0 && "latest" === oM && null != oG.to && "0x556f1830" === (0, o.QB)(oW.data, 0, 4)) {
                            let oH;
                            let oQ = oW.data,
                                o_ = await eW(oG.to, this);
                            try {
                                oH = function(t) {
                                    let e = {
                                        sender: "",
                                        urls: [],
                                        calldata: "",
                                        selector: "",
                                        extraData: "",
                                        errorArgs: []
                                    };
                                    (0, s.hu)((0, o.M5)(t) >= 160, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
                                        reason: "insufficient OffchainLookup data"
                                    });
                                    let r = (0, o.QB)(t, 0, 32);
                                    (0, s.hu)((0, o.QB)(r, 0, 12) === (0, o.QB)(lu, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
                                        reason: "corrupt OffchainLookup sender"
                                    }), e.sender = (0, o.QB)(r, 12);
                                    try {
                                        let n = [],
                                            i = (0, a.Dx)((0, o.QB)(t, 32, 64)),
                                            l = (0, a.Dx)((0, o.QB)(t, i, i + 32)),
                                            u = (0, o.QB)(t, i + 32);
                                        for (let c = 0; c < l; c++) {
                                            let h = function(t, e) {
                                                try {
                                                    let r = la(t, e);
                                                    if (r) return tQ(r)
                                                } catch (n) {}
                                                return null
                                            }(u, 32 * c);
                                            if (null == h) throw Error("abort");
                                            n.push(h)
                                        }
                                        e.urls = n
                                    } catch (f) {
                                        (0, s.hu)(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup urls"
                                        })
                                    }
                                    try {
                                        let d = la(t, 64);
                                        if (null == d) throw Error("abort");
                                        e.calldata = d
                                    } catch (p) {
                                        (0, s.hu)(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup calldata"
                                        })
                                    }(0, s.hu)((0, o.QB)(t, 100, 128) === (0, o.QB)(lu, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
                                        reason: "corrupt OffchainLookup callbaackSelector"
                                    }), e.selector = (0, o.QB)(t, 96, 100);
                                    try {
                                        let g = la(t, 128);
                                        if (null == g) throw Error("abort");
                                        e.extraData = g
                                    } catch (m) {
                                        (0, s.hu)(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup extraData"
                                        })
                                    }
                                    return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map(t => e[t]), e
                                }((0, o.QB)(oW.data, 4))
                            } catch (oV) {
                                (0, s.hu)(!1, oV.message, "OFFCHAIN_FAULT", {
                                    reason: "BAD_DATA",
                                    transaction: oG,
                                    info: {
                                        data: oQ
                                    }
                                })
                            }(0, s.hu)(oH.sender.toLowerCase() === o_.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
                                action: "call",
                                data: oQ,
                                reason: "OffchainLookup",
                                transaction: oG,
                                invocation: null,
                                revert: {
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    name: "OffchainLookup",
                                    args: oH.errorArgs
                                }
                            });
                            let oz = await this.ccipReadFetch(oG, oH.calldata, oH.urls);
                            (0, s.hu)(null != oz, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
                                reason: "FETCH_FAILED",
                                transaction: oG,
                                info: {
                                    data: oW.data,
                                    errorArgs: oH.errorArgs
                                }
                            });
                            let oJ = {
                                to: o_,
                                data: (0, o.zo)([oH.selector, function(t) {
                                    let e = [],
                                        r = 0;
                                    for (let n = 0; n < t.length; n++) e.push(ll), r += 32;
                                    for (let i = 0; i < t.length; i++) {
                                        let s = (0, o.Pw)(t[i]);
                                        e[i] = lo(r), e.push(lo(s.length)), e.push(function(t) {
                                            if (t.length % 32 == 0) return t;
                                            let e = new Uint8Array(32 * Math.ceil(t.length / 32));
                                            return e.set(t), e
                                        }(s)), r += 32 + 32 * Math.ceil(s.length / 32)
                                    }
                                    return (0, o.zo)(e)
                                }([oz, oH.extraData])])
                            };
                            this.emit("debug", {
                                action: "sendCcipReadCall",
                                transaction: oJ
                            });
                            try {
                                let oK = await this.#tU(oJ, oM, oj + 1);
                                return this.emit("debug", {
                                    action: "receiveCcipReadCallResult",
                                    transaction: Object.assign({}, oJ),
                                    result: oK
                                }), oK
                            } catch (oq) {
                                throw this.emit("debug", {
                                    action: "receiveCcipReadCallError",
                                    transaction: Object.assign({}, oJ),
                                    error: oq
                                }), oq
                            }
                        }
                        throw oW
                    }
                }
                async# tD(oZ) {
                    let {
                        value: oY
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        value: oZ
                    });
                    return oY
                }
                async call(t) {
                    let {
                        tx: e,
                        blockTag: r
                    } = await (0, l.m)({
                        tx: this._getTransactionRequest(t),
                        blockTag: this._getBlockTag(t.blockTag)
                    });
                    return await this.#tD(this.#tU(e, r, t.enableCcipRead ? 0 : -1))
                }
                async# tL(oX, o$, o0) {
                    let o1 = this._getAddress(o$),
                        o2 = this._getBlockTag(o0);
                    return ("string" != typeof o1 || "string" != typeof o2) && ([o1, o2] = await Promise.all([o1, o2])), await this.#tD(this.#tR(Object.assign(oX, {
                        address: o1,
                        blockTag: o2
                    })))
                }
                async getBalance(t, e) {
                    return (0, a.yT)(await this.#tL({
                        method: "getBalance"
                    }, t, e), "%response")
                }
                async getTransactionCount(t, e) {
                    return (0, a.Dx)(await this.#tL({
                        method: "getTransactionCount"
                    }, t, e), "%response")
                }
                async getCode(t, e) {
                    return (0, o.Dv)(await this.#tL({
                        method: "getCode"
                    }, t, e))
                }
                async getStorage(t, e, r) {
                    let n = (0, a.yT)(e, "position");
                    return (0, o.Dv)(await this.#tL({
                        method: "getStorage",
                        position: n
                    }, t, r))
                }
                async broadcastTransaction(t) {
                    let {
                        blockNumber: e,
                        hash: r,
                        network: n
                    } = await (0, l.m)({
                        blockNumber: this.getBlockNumber(),
                        hash: this._perform({
                            method: "broadcastTransaction",
                            signedTransaction: t
                        }),
                        network: this.getNetwork()
                    }), i = aM.from(t);
                    if (i.hash !== r) throw Error("@TODO: the returned hash did not match");
                    return this._wrapTransactionResponse(i, n).replaceableTransaction(e)
                }
                async# tF(o4, o8) {
                    if ((0, o.A7)(o4, 32)) return await this.#tR({
                        method: "getBlock",
                        blockHash: o4,
                        includeTransactions: o8
                    });
                    let o3 = this._getBlockTag(o4);
                    return "string" != typeof o3 && (o3 = await o3), await this.#tR({
                        method: "getBlock",
                        blockTag: o3,
                        includeTransactions: o8
                    })
                }
                async getBlock(t, e) {
                    let {
                        network: r,
                        params: n
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        params: this.#tF(t, !!e)
                    });
                    return null == n ? null : this._wrapBlock(n, r)
                }
                async getTransaction(t) {
                    let {
                        network: e,
                        params: r
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        params: this.#tR({
                            method: "getTransaction",
                            hash: t
                        })
                    });
                    return null == r ? null : this._wrapTransactionResponse(r, e)
                }
                async getTransactionReceipt(t) {
                    let {
                        network: e,
                        params: r
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        params: this.#tR({
                            method: "getTransactionReceipt",
                            hash: t
                        })
                    });
                    if (null == r) return null;
                    if (null == r.gasPrice && null == r.effectiveGasPrice) {
                        let n = await this.#tR({
                            method: "getTransaction",
                            hash: t
                        });
                        if (null == n) throw Error("report this; could not find tx or effectiveGasPrice");
                        r.effectiveGasPrice = n.gasPrice
                    }
                    return this._wrapTransactionReceipt(r, e)
                }
                async getTransactionResult(t) {
                    let {
                        result: e
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        result: this.#tR({
                            method: "getTransactionResult",
                            hash: t
                        })
                    });
                    return null == e ? null : (0, o.Dv)(e)
                }
                async getLogs(t) {
                    let e = this._getFilter(t);
                    oC(e) && (e = await e);
                    let {
                        network: r,
                        params: n
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        params: this.#tR({
                            method: "getLogs",
                            filter: e
                        })
                    });
                    return n.map(t => this._wrapLog(t, r))
                }
                _getProvider(t) {
                    (0, s.hu)(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
                        operation: "_getProvider()"
                    })
                }
                async getResolver(t) {
                    return await aV.fromName(this, t)
                }
                async getAvatar(t) {
                    let e = await this.getResolver(t);
                    return e ? await e.getAvatar() : null
                }
                async resolveName(t) {
                    let e = await this.getResolver(t);
                    return e ? await e.getAddress() : null
                }
                async lookupAddress(t) {
                    t = tA(t);
                    let e = i9(t.substring(2).toLowerCase() + ".addr.reverse");
                    try {
                        let r = await aV.getEnsAddress(this),
                            n = new n2(r, ["function resolver(bytes32) view returns (address)"], this),
                            i = await n.resolver(e);
                        if (null == i || i === rG) return null;
                        let a = new n2(i, ["function name(bytes32) view returns (string)"], this),
                            o = await a.name(e),
                            l = await this.resolveName(o);
                        if (l !== t) return null;
                        return o
                    } catch (u) {
                        if ((0, s.VZ)(u, "BAD_DATA") && "0x" === u.value || (0, s.VZ)(u, "CALL_EXCEPTION")) return null;
                        throw u
                    }
                    return null
                }
                async waitForTransaction(t, e, r) {
                    let n = null != e ? e : 1;
                    return 0 === n ? this.getTransactionReceipt(t) : new Promise(async (e, i) => {
                        let a = null,
                            o = async r => {
                                try {
                                    let i = await this.getTransactionReceipt(t);
                                    if (null != i && r - i.blockNumber + 1 >= n) {
                                        e(i), a && (clearTimeout(a), a = null);
                                        return
                                    }
                                } catch (s) {
                                    console.log("EEE", s)
                                }
                                this.once("block", o)
                            };
                        null != r && (a = setTimeout(() => {
                            null != a && (a = null, this.off("block", o), i((0, s.wf)("timeout", "TIMEOUT", {
                                reason: "timeout"
                            })))
                        }, r)), o(await this.getBlockNumber())
                    })
                }
                async waitForBlock(t) {
                    (0, s.hu)(!1, "not implemented yet", "NOT_IMPLEMENTED", {
                        operation: "waitForBlock"
                    })
                }
                _clearTimeout(t) {
                    let e = this.#tS.get(t);
                    e && (e.timer && clearTimeout(e.timer), this.#tS.delete(t))
                }
                _setTimeout(t, e) {
                    null == e && (e = 0);
                    let r = this.#tB++,
                        n = () => {
                            this.#tS.delete(r), t()
                        };
                    if (this.paused) this.#tS.set(r, {
                        timer: null,
                        func: n,
                        time: e
                    });
                    else {
                        let i = setTimeout(n, e);
                        this.#tS.set(r, {
                            timer: i,
                            func: n,
                            time: oB()
                        })
                    }
                    return r
                }
                _forEachSubscriber(t) {
                    for (let e of this.#tP.values()) t(e.subscriber)
                }
                _getSubscriber(t) {
                    switch (t.type) {
                        case "debug":
                        case "error":
                        case "network":
                            return new oO(t.type);
                        case "block":
                            return new of (this);
                        case "event":
                            return new ow(this, t.filter);
                        case "transaction":
                            return new oA(this, t.hash);
                        case "orphan":
                            return new oy(this, t.filter)
                    }
                    throw Error(`unsupported event: ${t.type}`)
                }
                _recoverSubscriber(t, e) {
                    for (let r of this.#tP.values())
                        if (r.subscriber === t) {
                            r.started && r.subscriber.stop(), r.subscriber = e, r.started && e.start(), null != this.#tx && e.pause(this.#tx);
                            break
                        }
                }
                async# tM(o5, o6) {
                    let o9 = await ok(o5, this);
                    return "event" === o9.type && o6 && o6.length > 0 && !0 === o6[0].removed && (o9 = await ok({
                        orphan: "drop-log",
                        log: o6[0]
                    }, this)), this.#tP.get(o9.tag) || null
                }
                async# tj(o7) {
                    let lt = await ok(o7, this),
                        le = lt.tag,
                        lr = this.#tP.get(le);
                    if (!lr) {
                        let ln = this._getSubscriber(lt),
                            li = new WeakMap,
                            ls = new Map;
                        lr = {
                            subscriber: ln,
                            tag: le,
                            addressableMap: li,
                            nameMap: ls,
                            started: !1,
                            listeners: []
                        }, this.#tP.set(le, lr)
                    }
                    return lr
                }
                async on(t, e) {
                    let r = await this.#tj(t);
                    return r.listeners.push({
                        listener: e,
                        once: !1
                    }), r.started || (r.subscriber.start(), r.started = !0, null != this.#tx && r.subscriber.pause(this.#tx)), this
                }
                async once(t, e) {
                    let r = await this.#tj(t);
                    return r.listeners.push({
                        listener: e,
                        once: !0
                    }), r.started || (r.subscriber.start(), r.started = !0, null != this.#tx && r.subscriber.pause(this.#tx)), this
                }
                async emit(t, ...e) {
                    let r = await this.#tM(t, e);
                    if (!r || 0 === r.listeners.length) return !1;
                    let n = r.listeners.length;
                    return r.listeners = r.listeners.filter(({
                        listener: r,
                        once: n
                    }) => {
                        let i = new nT(this, n ? null : r, t);
                        try {
                            r.call(this, ...e, i)
                        } catch (s) {}
                        return !n
                    }), 0 === r.listeners.length && (r.started && r.subscriber.stop(), this.#tP.delete(r.tag)), n > 0
                }
                async listenerCount(t) {
                    if (t) {
                        let e = await this.#tM(t);
                        return e ? e.listeners.length : 0
                    }
                    let r = 0;
                    for (let {
                            listeners: n
                        } of this.#tP.values()) r += n.length;
                    return r
                }
                async listeners(t) {
                    if (t) {
                        let e = await this.#tM(t);
                        return e ? e.listeners.map(({
                            listener: t
                        }) => t) : []
                    }
                    let r = [];
                    for (let {
                            listeners: n
                        } of this.#tP.values()) r = r.concat(n.map(({
                        listener: t
                    }) => t));
                    return r
                }
                async off(t, e) {
                    let r = await this.#tM(t);
                    if (!r) return this;
                    if (e) {
                        let n = r.listeners.map(({
                            listener: t
                        }) => t).indexOf(e);
                        n >= 0 && r.listeners.splice(n, 1)
                    }
                    return e && 0 !== r.listeners.length || (r.started && r.subscriber.stop(), this.#tP.delete(r.tag)), this
                }
                async removeAllListeners(t) {
                    if (t) {
                        let {
                            tag: e,
                            started: r,
                            subscriber: n
                        } = await this.#tj(t);
                        r && n.stop(), this.#tP.delete(e)
                    } else
                        for (let [i, {
                                started: s,
                                subscriber: a
                            }] of this.#tP) s && a.stop(), this.#tP.delete(i);
                    return this
                }
                async addListener(t, e) {
                    return await this.on(t, e)
                }
                async removeListener(t, e) {
                    return this.off(t, e)
                }
                get destroyed() {
                    return this.#tC
                }
                destroy() {
                    for (let t of (this.removeAllListeners(), this.#tS.keys())) this._clearTimeout(t);
                    this.#tC = !0
                }
                get paused() {
                    return null != this.#tx
                }
                set paused(t) {
                    !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1))
                }
                pause(t) {
                    if (this.#tk = -1, null != this.#tx) {
                        if (!!t == this.#tx) return;
                        (0, s.hu)(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
                            operation: "pause"
                        })
                    }
                    for (let e of (this._forEachSubscriber(e => e.pause(t)), this.#tx = !!t, this.#tS.values())) e.timer && clearTimeout(e.timer), e.time = oB() - e.time
                }
                resume() {
                    if (null != this.#tx)
                        for (let t of (this._forEachSubscriber(t => t.resume()), this.#tx = null, this.#tS.values())) {
                            let e = t.time;
                            e < 0 && (e = 0), t.time = oB(), setTimeout(t.func, e)
                        }
                }
            }

            function la(t, e) {
                if ("0x" === t) return null;
                try {
                    let r = (0, a.Dx)((0, o.QB)(t, e, e + 32)),
                        n = (0, a.Dx)((0, o.QB)(t, r, r + 32));
                    return (0, o.QB)(t, r + 32, r + 32 + n)
                } catch (i) {}
                return null
            }

            function lo(t) {
                let e = (0, a.ot)(t);
                if (e.length > 32) throw Error("internal; should not happen");
                let r = new Uint8Array(32);
                return r.set(e, 32 - e.length), r
            }
            let ll = new Uint8Array([]),
                lu = "0x0000000000000000000000000000000000000000000000000000000000000000";

            function lc(t, e) {
                if (t.provider) return t.provider;
                (0, s.hu)(!1, "missing provider", "UNSUPPORTED_OPERATION", {
                    operation: e
                })
            }
            async function lh(t, e) {
                let r = nv(e);
                if (null != r.to && (r.to = eW(r.to, t)), null != r.from) {
                    let n = r.from;
                    r.from = Promise.all([t.getAddress(), eW(n, t)]).then(([t, e]) => ((0, s.en)(t.toLowerCase() === e.toLowerCase(), "transaction from mismatch", "tx.from", e), t))
                } else r.from = t.getAddress();
                return await (0, l.m)(r)
            }
            class lf {
                provider;
                constructor(t) {
                    (0, l.h)(this, {
                        provider: t || null
                    })
                }
                async getNonce(t) {
                    return lc(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t)
                }
                async populateCall(t) {
                    let e = await lh(this, t);
                    return e
                }
                async populateTransaction(t) {
                    let e = lc(this, "populateTransaction"),
                        r = await lh(this, t);
                    null == r.nonce && (r.nonce = await this.getNonce("pending")), null == r.gasLimit && (r.gasLimit = await this.estimateGas(r));
                    let n = await this.provider.getNetwork();
                    if (null != r.chainId) {
                        let i = (0, a.yT)(r.chainId);
                        (0, s.en)(i === n.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId)
                    } else r.chainId = n.chainId;
                    let o = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
                    if (null != r.gasPrice && (2 === r.type || o) ? (0, s.en)(!1, "eip-1559 transaction do not support gasPrice", "tx", t) : (0 === r.type || 1 === r.type) && o && (0, s.en)(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t), (2 === r.type || null == r.type) && null != r.maxFeePerGas && null != r.maxPriorityFeePerGas) r.type = 2;
                    else if (0 === r.type || 1 === r.type) {
                        let u = await e.getFeeData();
                        (0, s.hu)(null != u.gasPrice, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
                            operation: "getGasPrice"
                        }), null == r.gasPrice && (r.gasPrice = u.gasPrice)
                    } else {
                        let c = await e.getFeeData();
                        if (null == r.type) {
                            if (null != c.maxFeePerGas && null != c.maxPriorityFeePerGas) {
                                if (r.type = 2, null != r.gasPrice) {
                                    let h = r.gasPrice;
                                    delete r.gasPrice, r.maxFeePerGas = h, r.maxPriorityFeePerGas = h
                                } else null == r.maxFeePerGas && (r.maxFeePerGas = c.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = c.maxPriorityFeePerGas)
                            } else null != c.gasPrice ? ((0, s.hu)(!o, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
                                operation: "populateTransaction"
                            }), null == r.gasPrice && (r.gasPrice = c.gasPrice), r.type = 0) : (0, s.hu)(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
                                operation: "signer.getFeeData"
                            })
                        } else 2 === r.type && (null == r.maxFeePerGas && (r.maxFeePerGas = c.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = c.maxPriorityFeePerGas))
                    }
                    return await (0, l.m)(r)
                }
                async estimateGas(t) {
                    return lc(this, "estimateGas").estimateGas(await this.populateCall(t))
                }
                async call(t) {
                    return lc(this, "call").call(await this.populateCall(t))
                }
                async resolveName(t) {
                    let e = lc(this, "resolveName");
                    return await e.resolveName(t)
                }
                async sendTransaction(t) {
                    let e = lc(this, "sendTransaction"),
                        r = await this.populateTransaction(t);
                    delete r.from;
                    let n = aM.from(r);
                    return await e.broadcastTransaction(await this.signTransaction(n))
                }
            }
            class ld {#
                tm;#
                tG;#
                ty;#
                tv;#
                tH;#
                tQ;
                constructor(t) {
                    this.#tm = t, this.#tG = null, this.#ty = this.#tb.bind(this), this.#tv = !1, this.#tH = null, this.#tQ = !1
                }
                _subscribe(t) {
                    throw Error("subclasses must override this")
                }
                _emitResults(t, e) {
                    throw Error("subclasses must override this")
                }
                _recover(t) {
                    throw Error("subclasses must override this")
                }
                async# tb(lp) {
                    try {
                        null == this.#tG && (this.#tG = this._subscribe(this.#tm));
                        let lg = null;
                        try {
                            lg = await this.#tG
                        } catch (lm) {
                            if (!(0, s.VZ)(lm, "UNSUPPORTED_OPERATION") || "eth_newFilter" !== lm.operation) throw lm
                        }
                        if (null == lg) {
                            this.#tG = null, this.#tm._recoverSubscriber(this, this._recover(this.#tm));
                            return
                        }
                        let ly = await this.#tm.getNetwork();
                        if (this.#tH || (this.#tH = ly), this.#tH.chainId !== ly.chainId) throw Error("chaid changed");
                        if (this.#tQ) return;
                        let lA = await this.#tm.send("eth_getFilterChanges", [lg]);
                        await this._emitResults(this.#tm, lA)
                    } catch (lw) {
                        console.log("@TODO", lw)
                    }
                    this.#tm.once("block", this.#ty)
                }#
                t_() {
                    let lb = this.#tG;
                    lb && (this.#tG = null, lb.then(t => {
                        this.#tm.send("eth_uninstallFilter", [t])
                    }))
                }
                start() {
                    this.#tv || (this.#tv = !0, this.#tb(-2))
                }
                stop() {
                    this.#tv && (this.#tv = !1, this.#tQ = !0, this.#t_(), this.#tm.off("block", this.#ty))
                }
                pause(t) {
                    t && this.#t_(), this.#tm.off("block", this.#ty)
                }
                resume() {
                    this.start()
                }
            }
            class lv extends ld {#
                tV;
                constructor(t, e) {
                    super(t), this.#tV = JSON.parse(JSON.stringify(e))
                }
                _recover(t) {
                    return new ow(t, this.#tV)
                }
                async _subscribe(t) {
                    let e = await t.send("eth_newFilter", [this.#tV]);
                    return e
                }
                async _emitResults(t, e) {
                    for (let r of e) t.emit(this.#tV, t._wrapLog(r, t._network))
                }
            }
            class lE extends ld {
                async _subscribe(t) {
                    return await t.send("eth_newPendingTransactionFilter", [])
                }
                async _emitResults(t, e) {
                    for (let r of e) t.emit("pending", r)
                }
            }
            let lP = "bigint,boolean,function,number,string,symbol".split(/,/g);

            function lx(t) {
                if (null == t || lP.indexOf(typeof t) >= 0 || "function" == typeof t.getAddress) return t;
                if (Array.isArray(t)) return t.map(lx);
                if ("object" == typeof t) return Object.keys(t).reduce((e, r) => (e[r] = t[r], e), {});
                throw Error(`should not happen: ${t} (${typeof t})`)
            }

            function lC(t) {
                return t ? t.toLowerCase() : t
            }

            function lN(t) {
                return t && "number" == typeof t.pollingInterval
            }
            let lO = {
                polling: !1,
                staticNetwork: null,
                batchStallTime: 10,
                batchMaxSize: 1048576,
                batchMaxCount: 100,
                cacheTimeout: 250
            };
            class lT extends lf {
                address;
                constructor(t, e) {
                    super(t), e = tA(e), (0, l.h)(this, {
                        address: e
                    })
                }
                connect(t) {
                    (0, s.hu)(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
                        operation: "signer.connect"
                    })
                }
                async getAddress() {
                    return this.address
                }
                async populateTransaction(t) {
                    return await this.populateCall(t)
                }
                async sendUncheckedTransaction(t) {
                    let e = lx(t),
                        r = [];
                    if (e.from) {
                        let n = e.from;
                        r.push((async () => {
                            let r = await eW(n, this.provider);
                            (0, s.en)(null != r && r.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = r
                        })())
                    } else e.from = this.address;
                    if (null == e.gasLimit && r.push((async () => {
                            e.gasLimit = await this.provider.estimateGas({ ...e,
                                from: this.address
                            })
                        })()), null != e.to) {
                        let i = e.to;
                        r.push((async () => {
                            e.to = await eW(i, this.provider)
                        })())
                    }
                    r.length && await Promise.all(r);
                    let a = this.provider.getRpcTransaction(e);
                    return this.provider.send("eth_sendTransaction", [a])
                }
                async sendTransaction(t) {
                    let e = await this.provider.getBlockNumber(),
                        r = await this.sendUncheckedTransaction(t);
                    return await new Promise((t, n) => {
                        let i = [1e3, 100],
                            s = async () => {
                                let n = await this.provider.getTransaction(r);
                                if (null != n) {
                                    t(n.replaceableTransaction(e));
                                    return
                                }
                                this.provider._setTimeout(() => {
                                    s()
                                }, i.pop() || 4e3)
                            };
                        s()
                    })
                }
                async signTransaction(t) {
                    let e = lx(t);
                    if (e.from) {
                        let r = await eW(e.from, this.provider);
                        (0, s.en)(null != r && r.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = r
                    } else e.from = this.address;
                    let n = this.provider.getRpcTransaction(e);
                    return await this.provider.send("eth_signTransaction", [n])
                }
                async signMessage(t) {
                    let e = "string" == typeof t ? tH(t) : t;
                    return await this.provider.send("personal_sign", [(0, o.Dv)(e), this.address.toLowerCase()])
                }
                async signTypedData(t, e, r) {
                    let n = lx(r),
                        i = await e7.resolveNames(t, e, n, async t => {
                            let e = await eW(t);
                            return (0, s.en)(null != e, "TypedData does not support null address", "value", t), e
                        });
                    return await this.provider.send("eth_signTypedData_v4", [this.address.toLowerCase(), JSON.stringify(e7.getPayload(i.domain, e, i.value))])
                }
                async unlock(t) {
                    return this.provider.send("personal_unlockAccount", [this.address.toLowerCase(), t, null])
                }
                async _legacySignMessage(t) {
                    let e = "string" == typeof t ? tH(t) : t;
                    return await this.provider.send("eth_sign", [this.address.toLowerCase(), (0, o.Dv)(e)])
                }
            }
            class lk extends oI {#
                a;#
                tz;#
                tJ;#
                tK;#
                tq;#
                tH;#
                tW() {
                    if (this.#tK) return;
                    let lB = 1 === this._getOption("batchMaxCount") ? 0 : this._getOption("batchStallTime");
                    this.#tK = setTimeout(() => {
                        this.#tK = null;
                        let t = this.#tJ;
                        for (this.#tJ = []; t.length;) {
                            let e = [t.shift()];
                            for (; t.length && e.length !== this.#a.batchMaxCount;) {
                                e.push(t.shift());
                                let r = JSON.stringify(e.map(t => t.payload));
                                if (r.length > this.#a.batchMaxSize) {
                                    t.unshift(e.pop());
                                    break
                                }
                            }(async () => {
                                let t = 1 === e.length ? e[0].payload : e.map(t => t.payload);
                                this.emit("debug", {
                                    action: "sendRpcPayload",
                                    payload: t
                                });
                                try {
                                    let r = await this._send(t);
                                    for (let {
                                            resolve: n,
                                            reject: i,
                                            payload: a
                                        } of (this.emit("debug", {
                                            action: "receiveRpcResult",
                                            result: r
                                        }), e)) {
                                        if (this.destroyed) {
                                            i((0, s.wf)("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                                                operation: a.method
                                            }));
                                            continue
                                        }
                                        let o = r.filter(t => t.id === a.id)[0];
                                        if (null == o) {
                                            let l = (0, s.wf)("missing response for request", "BAD_DATA", {
                                                value: r,
                                                info: {
                                                    payload: a
                                                }
                                            });
                                            this.emit("error", l), i(l);
                                            continue
                                        }
                                        if ("error" in o) {
                                            i(this.getRpcError(a, o));
                                            continue
                                        }
                                        n(o.result)
                                    }
                                } catch (c) {
                                    for (let {
                                            reject: u
                                        } of (this.emit("debug", {
                                            action: "receiveRpcError",
                                            error: c
                                        }), e)) u(c)
                                }
                            })()
                        }
                    }, lB)
                }
                constructor(t, e) {
                    let r = {};
                    e && null != e.cacheTimeout && (r.cacheTimeout = e.cacheTimeout), super(t, r), this.#tz = 1, this.#a = Object.assign({}, lO, e || {}), this.#tJ = [], this.#tK = null, this.#tH = null; {
                        let n = null,
                            i = new Promise(t => {
                                n = t
                            });
                        this.#tq = {
                            promise: i,
                            resolve: n
                        }
                    }
                    let a = this._getOption("staticNetwork");
                    a && ((0, s.en)(null == t || a.matches(t), "staticNetwork MUST match network object", "options", e), this.#tH = a)
                }
                _getOption(t) {
                    return this.#a[t]
                }
                get _network() {
                    return (0, s.hu)(this.#tH, "network is not available yet", "NETWORK_ERROR"), this.#tH
                }
                async _perform(t) {
                    if ("call" === t.method || "estimateGas" === t.method) {
                        let e = t.transaction;
                        if (e && null != e.type && (0, a.yT)(e.type) && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                            let r = await this.getFeeData();
                            null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && (t = Object.assign({}, t, {
                                transaction: Object.assign({}, e, {
                                    type: void 0
                                })
                            }))
                        }
                    }
                    let n = this.getRpcRequest(t);
                    return null != n ? await this.send(n.method, n.args) : super._perform(t)
                }
                async _detectNetwork() {
                    let t;
                    let e = this._getOption("staticNetwork");
                    if (e) return e;
                    if (this.ready) return ou.from((0, a.yT)(await this.send("eth_chainId", [])));
                    let r = {
                        id: this.#tz++,
                        method: "eth_chainId",
                        params: [],
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "sendRpcPayload",
                        payload: r
                    });
                    try {
                        t = (await this._send(r))[0]
                    } catch (n) {
                        throw this.emit("debug", {
                            action: "receiveRpcError",
                            error: n
                        }), n
                    }
                    if (this.emit("debug", {
                            action: "receiveRpcResult",
                            result: t
                        }), "result" in t) return ou.from((0, a.yT)(t.result));
                    throw this.getRpcError(r, t)
                }
                _start() {
                    null != this.#tq && null != this.#tq.resolve && (this.#tq.resolve(), this.#tq = null, (async () => {
                        for (; null == this.#tH && !this.destroyed;) try {
                            this.#tH = await this._detectNetwork()
                        } catch (t) {
                            console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", (0, s.wf)("failed to bootstrap network detection", "NETWORK_ERROR", {
                                event: "initial-network-discovery",
                                info: {
                                    error: t
                                }
                            })), await new Promise(t => {
                                setTimeout(t, 1e3)
                            })
                        }
                        this.#tW()
                    })())
                }
                async _waitUntilReady() {
                    if (null != this.#tq) return await this.#tq.promise
                }
                _getSubscriber(t) {
                    return "pending" === t.type ? new lE(this) : "event" === t.type ? this._getOption("polling") ? new ow(this, t.filter) : new lv(this, t.filter) : "orphan" === t.type && "drop-log" === t.filter.orphan ? new oO("orphan") : super._getSubscriber(t)
                }
                get ready() {
                    return null == this.#tq
                }
                getRpcTransaction(t) {
                    let e = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(r => {
                        if (null == t[r]) return;
                        let n = r;
                        "gasLimit" === r && (n = "gas"), e[n] = (0, a.B4)((0, a.yT)(t[r], `tx.${r}`))
                    }), ["from", "to", "data"].forEach(r => {
                        null != t[r] && (e[r] = (0, o.Dv)(t[r]))
                    }), t.accessList && (e.accessList = rl(t.accessList)), e
                }
                getRpcRequest(t) {
                    switch (t.method) {
                        case "chainId":
                            return {
                                method: "eth_chainId",
                                args: []
                            };
                        case "getBlockNumber":
                            return {
                                method: "eth_blockNumber",
                                args: []
                            };
                        case "getGasPrice":
                            return {
                                method: "eth_gasPrice",
                                args: []
                            };
                        case "getBalance":
                            return {
                                method: "eth_getBalance",
                                args: [lC(t.address), t.blockTag]
                            };
                        case "getTransactionCount":
                            return {
                                method: "eth_getTransactionCount",
                                args: [lC(t.address), t.blockTag]
                            };
                        case "getCode":
                            return {
                                method: "eth_getCode",
                                args: [lC(t.address), t.blockTag]
                            };
                        case "getStorage":
                            return {
                                method: "eth_getStorageAt",
                                args: [lC(t.address), "0x" + t.position.toString(16), t.blockTag]
                            };
                        case "broadcastTransaction":
                            return {
                                method: "eth_sendRawTransaction",
                                args: [t.signedTransaction]
                            };
                        case "getBlock":
                            if ("blockTag" in t) return {
                                method: "eth_getBlockByNumber",
                                args: [t.blockTag, !!t.includeTransactions]
                            };
                            if ("blockHash" in t) return {
                                method: "eth_getBlockByHash",
                                args: [t.blockHash, !!t.includeTransactions]
                            };
                            break;
                        case "getTransaction":
                            return {
                                method: "eth_getTransactionByHash",
                                args: [t.hash]
                            };
                        case "getTransactionReceipt":
                            return {
                                method: "eth_getTransactionReceipt",
                                args: [t.hash]
                            };
                        case "call":
                            return {
                                method: "eth_call",
                                args: [this.getRpcTransaction(t.transaction), t.blockTag]
                            };
                        case "estimateGas":
                            return {
                                method: "eth_estimateGas",
                                args: [this.getRpcTransaction(t.transaction)]
                            };
                        case "getLogs":
                            return t.filter && null != t.filter.address && (Array.isArray(t.filter.address) ? t.filter.address = t.filter.address.map(lC) : t.filter.address = lC(t.filter.address)), {
                                method: "eth_getLogs",
                                args: [t.filter]
                            }
                    }
                    return null
                }
                getRpcError(t, e) {
                    let {
                        method: r
                    } = t, {
                        error: n
                    } = e;
                    if ("eth_estimateGas" === r && n.message) {
                        let i = n.message;
                        if (!i.match(/revert/i) && i.match(/insufficient funds/i)) return (0, s.wf)("insufficient funds", "INSUFFICIENT_FUNDS", {
                            transaction: t.params[0],
                            info: {
                                payload: t,
                                error: n
                            }
                        })
                    }
                    if ("eth_call" === r || "eth_estimateGas" === r) {
                        let a = function t(e) {
                                if (null == e) return null;
                                if ("string" == typeof e.message && e.message.match("reverted") && (0, o.A7)(e.data)) return {
                                    message: e.message,
                                    data: e.data
                                };
                                if ("object" == typeof e) {
                                    for (let r in e) {
                                        let n = t(e[r]);
                                        if (n) return n
                                    }
                                    return null
                                }
                                if ("string" == typeof e) try {
                                    return t(JSON.parse(e))
                                } catch (i) {}
                                return null
                            }(n),
                            l = eQ.getBuiltinCallException("eth_call" === r ? "call" : "estimateGas", t.params[0], a ? a.data : null);
                        return l.info = {
                            error: n,
                            payload: t
                        }, l
                    }
                    let u = JSON.stringify(function(t) {
                        let e = [];
                        return ! function t(e, r) {
                            if (null != e) {
                                if ("string" == typeof e.message && r.push(e.message), "object" == typeof e)
                                    for (let n in e) t(e[n], r);
                                if ("string" == typeof e) try {
                                    return t(JSON.parse(e), r)
                                } catch (i) {}
                            }
                        }(t, e), e
                    }(n));
                    if ("string" == typeof n.message && n.message.match(/user denied|ethers-user-denied/i)) return (0, s.wf)("user rejected action", "ACTION_REJECTED", {
                        action: {
                            eth_sign: "signMessage",
                            personal_sign: "signMessage",
                            eth_signTypedData_v4: "signTypedData",
                            eth_signTransaction: "signTransaction",
                            eth_sendTransaction: "sendTransaction",
                            eth_requestAccounts: "requestAccess",
                            wallet_requestAccounts: "requestAccess"
                        }[r] || "unknown",
                        reason: "rejected",
                        info: {
                            payload: t,
                            error: n
                        }
                    });
                    if ("eth_sendRawTransaction" === r || "eth_sendTransaction" === r) {
                        let c = t.params[0];
                        if (u.match(/insufficient funds|base fee exceeds gas limit/i)) return (0, s.wf)("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
                            transaction: c,
                            info: {
                                error: n
                            }
                        });
                        if (u.match(/nonce/i) && u.match(/too low/i)) return (0, s.wf)("nonce has already been used", "NONCE_EXPIRED", {
                            transaction: c,
                            info: {
                                error: n
                            }
                        });
                        if (u.match(/replacement transaction/i) && u.match(/underpriced/i)) return (0, s.wf)("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
                            transaction: c,
                            info: {
                                error: n
                            }
                        });
                        if (u.match(/only replay-protected/i)) return (0, s.wf)("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
                            operation: r,
                            info: {
                                transaction: c,
                                info: {
                                    error: n
                                }
                            }
                        })
                    }
                    return u.match(/the method .* does not exist/i) ? (0, s.wf)("unsupported operation", "UNSUPPORTED_OPERATION", {
                        operation: t.method,
                        info: {
                            error: n
                        }
                    }) : (0, s.wf)("could not coalesce error", "UNKNOWN_ERROR", {
                        error: n
                    })
                }
                send(t, e) {
                    if (this.destroyed) return Promise.reject((0, s.wf)("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                        operation: t
                    }));
                    let r = this.#tz++,
                        n = new Promise((n, i) => {
                            this.#tJ.push({
                                resolve: n,
                                reject: i,
                                payload: {
                                    method: t,
                                    params: e,
                                    id: r,
                                    jsonrpc: "2.0"
                                }
                            })
                        });
                    return this.#tW(), n
                }
                async getSigner(t) {
                    null == t && (t = 0);
                    let e = this.send("eth_accounts", []);
                    if ("number" == typeof t) {
                        let r = await e;
                        if (t >= r.length) throw Error("no such account");
                        return new lT(this, r[t])
                    }
                    let {
                        accounts: n
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        accounts: e
                    });
                    for (let i of (t = tA(t), n))
                        if (tA(i) === t) return new lT(this, t);
                    throw Error("invalid account")
                }
                async listAccounts() {
                    let t = await this.send("eth_accounts", []);
                    return t.map(t => new lT(this, t))
                }
                destroy() {
                    for (let {
                            payload: t,
                            reject: e
                        } of (this.#tK && (clearTimeout(this.#tK), this.#tK = null), this.#tJ)) e((0, s.wf)("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                        operation: t.method
                    }));
                    this.#tJ = [], super.destroy()
                }
            }
            class lS extends lk {#
                tZ;
                constructor(t, e) {
                    super(t, e), this.#tZ = 4e3
                }
                _getSubscriber(t) {
                    let e = super._getSubscriber(t);
                    return lN(e) && (e.pollingInterval = this.#tZ), e
                }
                get pollingInterval() {
                    return this.#tZ
                }
                set pollingInterval(t) {
                    if (!Number.isInteger(t) || t < 0) throw Error("invalid interval");
                    this.#tZ = t, this._forEachSubscriber(t => {
                        lN(t) && (t.pollingInterval = this.#tZ)
                    })
                }
            }
            class lI extends lS {#
                tY;
                constructor(t, e, r) {
                    null == t && (t = "http://localhost:8545"), super(e, r), "string" == typeof t ? this.#tY = new rw(t) : this.#tY = t.clone()
                }
                _getConnection() {
                    return this.#tY.clone()
                }
                async send(t, e) {
                    return await this._start(), await super.send(t, e)
                }
                async _send(t) {
                    let e = this._getConnection();
                    e.body = JSON.stringify(t), e.setHeader("content-type", "application/json");
                    let r = await e.send();
                    r.assertOk();
                    let n = r.bodyJson;
                    return Array.isArray(n) || (n = [n]), n
                }
            }
        },
        455: function(t, e, r) {
            "use strict";
            r.d(e, {
                A7: function() {
                    return o
                },
                Dv: function() {
                    return c
                },
                M5: function() {
                    return f
                },
                Pw: function() {
                    return s
                },
                QB: function() {
                    return d
                },
                U3: function() {
                    return p
                },
                Zq: function() {
                    return l
                },
                h_: function() {
                    return a
                },
                zo: function() {
                    return h
                }
            });
            var n = r(2423);

            function i(t, e, r) {
                if (t instanceof Uint8Array) return r ? new Uint8Array(t) : t;
                if ("string" == typeof t && t.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
                    let i = new Uint8Array((t.length - 2) / 2),
                        s = 2;
                    for (let a = 0; a < i.length; a++) i[a] = parseInt(t.substring(s, s + 2), 16), s += 2;
                    return i
                }(0, n.en)(!1, "invalid BytesLike value", e || "value", t)
            }

            function s(t, e) {
                return i(t, e, !1)
            }

            function a(t, e) {
                return i(t, e, !0)
            }

            function o(t, e) {
                return !!("string" == typeof t && t.match(/^0x[0-9A-Fa-f]*$/)) && ("number" != typeof e || t.length === 2 + 2 * e) && (!0 !== e || t.length % 2 == 0)
            }

            function l(t) {
                return o(t, !0) || t instanceof Uint8Array
            }
            let u = "0123456789abcdef";

            function c(t) {
                let e = s(t),
                    r = "0x";
                for (let n = 0; n < e.length; n++) {
                    let i = e[n];
                    r += u[(240 & i) >> 4] + u[15 & i]
                }
                return r
            }

            function h(t) {
                return "0x" + t.map(t => c(t).substring(2)).join("")
            }

            function f(t) {
                return o(t, !0) ? (t.length - 2) / 2 : s(t).length
            }

            function d(t, e, r) {
                let i = s(t);
                return null != r && r > i.length && (0, n.hu)(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
                    buffer: i,
                    length: i.length,
                    offset: r
                }), c(i.slice(null == e ? 0 : e, null == r ? i.length : r))
            }

            function p(t, e) {
                return function(t, e, r) {
                    let i = s(t);
                    (0, n.hu)(e >= i.length, "padding exceeds data length", "BUFFER_OVERRUN", {
                        buffer: new Uint8Array(i),
                        length: e,
                        offset: e + 1
                    });
                    let a = new Uint8Array(e);
                    return a.fill(0), r ? a.set(i, e - i.length) : a.set(i, 0), c(a)
                }(t, e, !0)
            }
        },
        2423: function(t, e, r) {
            "use strict";
            r.d(e, {
                hu: function() {
                    return l
                },
                en: function() {
                    return u
                },
                fG: function() {
                    return c
                },
                fA: function() {
                    return f
                },
                NK: function() {
                    return d
                },
                Hl: function() {
                    return a
                },
                VZ: function() {
                    return s
                },
                wf: function() {
                    return o
                }
            });
            var n = r(5857);

            function i(t) {
                if (null == t) return "null";
                if (Array.isArray(t)) return "[ " + t.map(i).join(", ") + " ]";
                if (t instanceof Uint8Array) {
                    let e = "0123456789abcdef",
                        r = "0x";
                    for (let n = 0; n < t.length; n++) r += e[t[n] >> 4] + e[15 & t[n]];
                    return r
                }
                if ("object" == typeof t && "function" == typeof t.toJSON) return i(t.toJSON());
                switch (typeof t) {
                    case "boolean":
                    case "symbol":
                    case "number":
                        return t.toString();
                    case "bigint":
                        return BigInt(t).toString();
                    case "string":
                        return JSON.stringify(t);
                    case "object":
                        {
                            let s = Object.keys(t);
                            return s.sort(),
                            "{ " + s.map(e => `${i(e)}: ${i(t[e])}`).join(", ") + " }"
                        }
                }
                return "[ COULD NOT SERIALIZE ]"
            }

            function s(t, e) {
                return t && t.code === e
            }

            function a(t) {
                return s(t, "CALL_EXCEPTION")
            }

            function o(t, e, r) {
                let s; {
                    let a = [];
                    if (r) {
                        if ("message" in r || "code" in r || "name" in r) throw Error(`value will overwrite populated values: ${i(r)}`);
                        for (let o in r) {
                            let l = r[o];
                            a.push(o + "=" + i(l))
                        }
                    }
                    a.push(`code=${e}`), a.push("version=6.6.0"), a.length && (t += " (" + a.join(", ") + ")")
                }
                switch (e) {
                    case "INVALID_ARGUMENT":
                        s = TypeError(t);
                        break;
                    case "NUMERIC_FAULT":
                    case "BUFFER_OVERRUN":
                        s = RangeError(t);
                        break;
                    default:
                        s = Error(t)
                }
                return (0, n.h)(s, {
                    code: e
                }), r && Object.assign(s, r), s
            }

            function l(t, e, r, n) {
                if (!t) throw o(e, r, n)
            }

            function u(t, e, r, n) {
                l(t, e, "INVALID_ARGUMENT", {
                    argument: r,
                    value: n
                })
            }

            function c(t, e, r) {
                null == r && (r = ""), r && (r = ": " + r), l(t >= e, "missing arguemnt" + r, "MISSING_ARGUMENT", {
                    count: t,
                    expectedCount: e
                }), l(t <= e, "too many arguemnts" + r, "UNEXPECTED_ARGUMENT", {
                    count: t,
                    expectedCount: e
                })
            }
            let h = ["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
                try {
                    if ("test" !== "test".normalize(e)) throw Error("bad");
                    if ("NFD" === e) {
                        let r = String.fromCharCode(233).normalize("NFD"),
                            n = String.fromCharCode(101, 769);
                        if (r !== n) throw Error("broken")
                    }
                    t.push(e)
                } catch (i) {}
                return t
            }, []);

            function f(t) {
                l(h.indexOf(t) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
                    operation: "String.prototype.normalize",
                    info: {
                        form: t
                    }
                })
            }

            function d(t, e, r) {
                if (null == r && (r = ""), t !== e) {
                    let n = r,
                        i = "new";
                    r && (n += ".", i += " " + r), l(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
                        operation: i
                    })
                }
            }
        },
        2229: function(t, e, r) {
            "use strict";
            r.d(e, {
                $j: function() {
                    return l
                },
                B4: function() {
                    return A
                },
                Dx: function() {
                    return p
                },
                Gh: function() {
                    return d
                },
                He: function() {
                    return g
                },
                _Y: function() {
                    return o
                },
                m9: function() {
                    return m
                },
                ot: function() {
                    return y
                },
                sS: function() {
                    return u
                },
                yT: function() {
                    return c
                }
            });
            var n = r(455),
                i = r(2423);
            let s = BigInt(0),
                a = BigInt(1);

            function o(t, e) {
                let r = h(t, "value"),
                    n = BigInt(p(e, "width"));
                return ((0, i.hu)(r >> n === s, "overflow", "NUMERIC_FAULT", {
                    operation: "fromTwos",
                    fault: "overflow",
                    value: t
                }), r >> n - a) ? -((~r & (a << n) - a) + a) : r
            }

            function l(t, e) {
                let r = c(t, "value"),
                    n = BigInt(p(e, "width")),
                    o = a << n - a;
                return r < s ? (r = -r, (0, i.hu)(r <= o, "too low", "NUMERIC_FAULT", {
                    operation: "toTwos",
                    fault: "overflow",
                    value: t
                }), (~r & (a << n) - a) + a) : ((0, i.hu)(r < o, "too high", "NUMERIC_FAULT", {
                    operation: "toTwos",
                    fault: "overflow",
                    value: t
                }), r)
            }

            function u(t, e) {
                let r = h(t, "value"),
                    n = BigInt(p(e, "bits"));
                return r & (a << n) - a
            }

            function c(t, e) {
                switch (typeof t) {
                    case "bigint":
                        return t;
                    case "number":
                        return (0, i.en)(Number.isInteger(t), "underflow", e || "value", t), (0, i.en)(t >= -9007199254740991 && t <= 9007199254740991, "overflow", e || "value", t), BigInt(t);
                    case "string":
                        try {
                            if ("" === t) throw Error("empty string");
                            if ("-" === t[0] && "-" !== t[1]) return -BigInt(t.substring(1));
                            return BigInt(t)
                        } catch (r) {
                            (0, i.en)(!1, `invalid BigNumberish string: ${r.message}`, e || "value", t)
                        }
                }(0, i.en)(!1, "invalid BigNumberish value", e || "value", t)
            }

            function h(t, e) {
                let r = c(t, e);
                return (0, i.hu)(r >= s, "unsigned value cannot be negative", "NUMERIC_FAULT", {
                    fault: "overflow",
                    operation: "getUint",
                    value: t
                }), r
            }
            let f = "0123456789abcdef";

            function d(t) {
                if (t instanceof Uint8Array) {
                    let e = "0x0";
                    for (let r of t) e += f[r >> 4] + f[15 & r];
                    return BigInt(e)
                }
                return c(t)
            }

            function p(t, e) {
                switch (typeof t) {
                    case "bigint":
                        return (0, i.en)(t >= -9007199254740991 && t <= 9007199254740991, "overflow", e || "value", t), Number(t);
                    case "number":
                        return (0, i.en)(Number.isInteger(t), "underflow", e || "value", t), (0, i.en)(t >= -9007199254740991 && t <= 9007199254740991, "overflow", e || "value", t), t;
                    case "string":
                        try {
                            if ("" === t) throw Error("empty string");
                            return p(BigInt(t), e)
                        } catch (r) {
                            (0, i.en)(!1, `invalid numeric string: ${r.message}`, e || "value", t)
                        }
                }(0, i.en)(!1, "invalid numeric value", e || "value", t)
            }

            function g(t) {
                return p(d(t))
            }

            function m(t, e) {
                let r = h(t, "value"),
                    n = r.toString(16);
                if (null == e) n.length % 2 && (n = "0" + n);
                else {
                    let s = p(e, "width");
                    for ((0, i.hu)(2 * s >= n.length, `value exceeds width (${s} bits)`, "NUMERIC_FAULT", {
                            operation: "toBeHex",
                            fault: "overflow",
                            value: t
                        }); n.length < 2 * s;) n = "0" + n
                }
                return "0x" + n
            }

            function y(t) {
                let e = h(t, "value");
                if (e === s) return new Uint8Array([]);
                let r = e.toString(16);
                r.length % 2 && (r = "0" + r);
                let n = new Uint8Array(r.length / 2);
                for (let i = 0; i < n.length; i++) {
                    let a = 2 * i;
                    n[i] = parseInt(r.substring(a, a + 2), 16)
                }
                return n
            }

            function A(t) {
                let e = (0, n.Dv)((0, n.Zq)(t) ? t : y(t)).substring(2);
                for (; e.startsWith("0");) e = e.substring(1);
                return "" === e && (e = "0"), "0x" + e
            }
        },
        5857: function(t, e, r) {
            "use strict";
            async function n(t) {
                let e = Object.keys(t),
                    r = await Promise.all(e.map(e => Promise.resolve(t[e])));
                return r.reduce((t, r, n) => (t[e[n]] = r, t), {})
            }

            function i(t, e, r) {
                for (let n in e) {
                    let i = e[n],
                        s = r ? r[n] : null;
                    s && function(t, e, r) {
                        let n = e.split("|").map(t => t.trim());
                        for (let i = 0; i < n.length; i++) switch (e) {
                            case "any":
                                return;
                            case "bigint":
                            case "boolean":
                            case "number":
                            case "string":
                                if (typeof t === e) return
                        }
                        let s = Error(`invalid value for type ${e}`);
                        throw s.code = "INVALID_ARGUMENT", s.argument = `value.${r}`, s.value = t, s
                    }(i, s, n), Object.defineProperty(t, n, {
                        enumerable: !0,
                        value: i,
                        writable: !1
                    })
                }
            }
            r.d(e, {
                h: function() {
                    return i
                },
                m: function() {
                    return n
                }
            })
        },
        8470: function(t, e, r) {
            "use strict";
            r.d(e, {
                bM: function() {
                    return k
                }
            });
            var n = r(2423),
                i = r(455),
                s = r(2229),
                a = r(5857);
            let o = BigInt(-1),
                l = BigInt(0),
                u = BigInt(1),
                c = BigInt(5),
                h = {},
                f = "0000";
            for (; f.length < 80;) f += f;

            function d(t) {
                let e = f;
                for (; e.length < t;) e += e;
                return BigInt("1" + e.substring(0, t))
            }

            function p(t, e, r) {
                let i = BigInt(e.width);
                if (e.signed) {
                    let a = u << i - u;
                    (0, n.hu)(null == r || t >= -a && t < a, "overflow", "NUMERIC_FAULT", {
                        operation: r,
                        fault: "overflow",
                        value: t
                    }), t = t > l ? (0, s._Y)((0, s.sS)(t, i), i) : -(0, s._Y)((0, s.sS)(-t, i), i)
                } else {
                    let o = u << i;
                    (0, n.hu)(null == r || t >= 0 && t < o, "overflow", "NUMERIC_FAULT", {
                        operation: r,
                        fault: "overflow",
                        value: t
                    }), t = (t % o + o) % o & o - u
                }
                return t
            }

            function g(t) {
                "number" == typeof t && (t = `fixed128x${t}`);
                let e = !0,
                    r = 128,
                    i = 18;
                if ("string" == typeof t) {
                    if ("fixed" === t);
                    else if ("ufixed" === t) e = !1;
                    else {
                        let s = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        (0, n.en)(s, "invalid fixed format", "format", t), e = "u" !== s[1], r = parseInt(s[2]), i = parseInt(s[3])
                    }
                } else if (t) {
                    let a = t,
                        o = (t, e, r) => null == a[t] ? r : ((0, n.en)(typeof a[t] === e, "invalid fixed format (" + t + " not " + e + ")", "format." + t, a[t]), a[t]);
                    e = o("signed", "boolean", e), r = o("width", "number", r), i = o("decimals", "number", i)
                }(0, n.en)(r % 8 == 0, "invalid FixedNumber width (not byte aligned)", "format.width", r), (0, n.en)(i <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", i);
                let l = (e ? "" : "u") + "fixed" + String(r) + "x" + String(i);
                return {
                    signed: e,
                    width: r,
                    decimals: i,
                    name: l
                }
            }
            class m {
                format;#
                tX;#
                t$;#
                t0;
                _value;
                constructor(t, e, r) {
                    (0, n.NK)(t, h, "FixedNumber"), this.#t$ = e, this.#tX = r;
                    let i = function(t, e) {
                        let r = "";
                        t < l && (r = "-", t *= o);
                        let n = t.toString();
                        if (0 === e) return r + n;
                        for (; n.length <= e;) n = f + n;
                        let i = n.length - e;
                        for (n = n.substring(0, i) + "." + n.substring(i);
                            "0" === n[0] && "." !== n[1];) n = n.substring(1);
                        for (;
                            "0" === n[n.length - 1] && "." !== n[n.length - 2];) n = n.substring(0, n.length - 1);
                        return r + n
                    }(e, r.decimals);
                    (0, a.h)(this, {
                        format: r.name,
                        _value: i
                    }), this.#t0 = d(r.decimals)
                }
                get signed() {
                    return this.#tX.signed
                }
                get width() {
                    return this.#tX.width
                }
                get decimals() {
                    return this.#tX.decimals
                }
                get value() {
                    return this.#t$
                }#
                t1(y) {
                    (0, n.en)(this.format === y.format, "incompatible format; use fixedNumber.toFormat", "other", y)
                }#
                t2(A, w) {
                    return A = p(A, this.#tX, w), new m(h, A, this.#tX)
                }#
                t4(b, v) {
                    return this.#t1(b), this.#t2(this.#t$ + b.#t$, v)
                }
                addUnsafe(t) {
                    return this.#t4(t)
                }
                add(t) {
                    return this.#t4(t, "add")
                }#
                t8(E, P) {
                    return this.#t1(E), this.#t2(this.#t$ - E.#t$, P)
                }
                subUnsafe(t) {
                    return this.#t8(t)
                }
                sub(t) {
                    return this.#t8(t, "sub")
                }#
                t3(x, C) {
                    return this.#t1(x), this.#t2(this.#t$ * x.#t$ / this.#t0, C)
                }
                mulUnsafe(t) {
                    return this.#t3(t)
                }
                mul(t) {
                    return this.#t3(t, "mul")
                }
                mulSignal(t) {
                    this.#t1(t);
                    let e = this.#t$ * t.#t$;
                    return (0, n.hu)(e % this.#t0 === l, "precision lost during signalling mul", "NUMERIC_FAULT", {
                        operation: "mulSignal",
                        fault: "underflow",
                        value: this
                    }), this.#t2(e / this.#t0, "mulSignal")
                }#
                t5(N, O) {
                    return (0, n.hu)(N.#t$ !== l, "division by zero", "NUMERIC_FAULT", {
                        operation: "div",
                        fault: "divide-by-zero",
                        value: this
                    }), this.#t1(N), this.#t2(this.#t$ * this.#t0 / N.#t$, O)
                }
                divUnsafe(t) {
                    return this.#t5(t)
                }
                div(t) {
                    return this.#t5(t, "div")
                }
                divSignal(t) {
                    (0, n.hu)(t.#t$ !== l, "division by zero", "NUMERIC_FAULT", {
                        operation: "div",
                        fault: "divide-by-zero",
                        value: this
                    }), this.#t1(t);
                    let e = this.#t$ * this.#t0;
                    return (0, n.hu)(e % t.#t$ === l, "precision lost during signalling div", "NUMERIC_FAULT", {
                        operation: "divSignal",
                        fault: "underflow",
                        value: this
                    }), this.#t2(e / t.#t$, "divSignal")
                }
                cmp(t) {
                    let e = this.value,
                        r = t.value,
                        n = this.decimals - t.decimals;
                    return (n > 0 ? r *= d(n) : n < 0 && (e *= d(-n)), e < r) ? -1 : e > r ? 1 : 0
                }
                eq(t) {
                    return 0 === this.cmp(t)
                }
                lt(t) {
                    return 0 > this.cmp(t)
                }
                lte(t) {
                    return 0 >= this.cmp(t)
                }
                gt(t) {
                    return this.cmp(t) > 0
                }
                gte(t) {
                    return this.cmp(t) >= 0
                }
                floor() {
                    let t = this.#t$;
                    return this.#t$ < l && (t -= this.#t0 - u), t = this.#t$ / this.#t0 * this.#t0, this.#t2(t, "floor")
                }
                ceiling() {
                    let t = this.#t$;
                    return this.#t$ > l && (t += this.#t0 - u), t = this.#t$ / this.#t0 * this.#t0, this.#t2(t, "ceiling")
                }
                round(t) {
                    if (null == t && (t = 0), t >= this.decimals) return this;
                    let e = this.decimals - t,
                        r = c * d(e - 1),
                        n = this.value + r,
                        i = d(e);
                    return p(n = n / i * i, this.#tX, "round"), new m(h, n, this.#tX)
                }
                isZero() {
                    return this.#t$ === l
                }
                isNegative() {
                    return this.#t$ < l
                }
                toString() {
                    return this._value
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString())
                }
                toFormat(t) {
                    return m.fromString(this.toString(), t)
                }
                static fromValue(t, e, r) {
                    let i = null == e ? 0 : (0, s.Dx)(e),
                        a = g(r),
                        o = (0, s.yT)(t, "value"),
                        u = i - a.decimals;
                    if (u > 0) {
                        let c = d(u);
                        (0, n.hu)(o % c === l, "value loses precision for format", "NUMERIC_FAULT", {
                            operation: "fromValue",
                            fault: "underflow",
                            value: t
                        }), o /= c
                    } else u < 0 && (o *= d(-u));
                    return p(o, a, "fromValue"), new m(h, o, a)
                }
                static fromString(t, e) {
                    let r = t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
                    (0, n.en)(r && r[2].length + r[3].length > 0, "invalid FixedNumber string value", "value", t);
                    let i = g(e),
                        s = r[2] || "0",
                        a = r[3] || "";
                    for (; a.length < i.decimals;) a += f;
                    (0, n.hu)(a.substring(i.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
                        operation: "fromString",
                        fault: "underflow",
                        value: t
                    }), a = a.substring(0, i.decimals);
                    let o = BigInt(r[1] + s + a);
                    return p(o, i, "fromString"), new m(h, o, i)
                }
                static fromBytes(t, e) {
                    let r = (0, s.Gh)((0, i.Pw)(t, "value")),
                        n = g(e);
                    return n.signed && (r = (0, s._Y)(r, n.width)), p(r, n, "fromBytes"), new m(h, r, n)
                }
            }
            let T = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

            function k(t, e) {
                let r = 18;
                if ("string" == typeof e) {
                    let i = T.indexOf(e);
                    (0, n.en)(i >= 0, "invalid unit", "unit", e), r = 3 * i
                } else null != e && (r = (0, s.Dx)(e, "unit"));
                return m.fromValue(t, r, {
                    decimals: r
                }).toString()
            }
        },
        9215: function(t, e, r) {
            "use strict";
            r.d(e, {
                Y: function() {
                    return a
                }
            });
            var n = r(7294),
                i = r(5487);
            let s = {
                any: 0,
                all: 1
            };

            function a(t, {
                root: e,
                margin: r,
                amount: a,
                once: o = !1
            } = {}) {
                let [l, u] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    if (!t.current || o && l) return;
                    let n = () => (u(!0), o ? void 0 : () => u(!1)),
                        c = {
                            root: e && e.current || void 0,
                            margin: r,
                            amount: "some" === a ? "any" : a
                        };
                    return function(t, e, {
                        root: r,
                        margin: n,
                        amount: a = "any"
                    } = {}) {
                        let o = function(t, e, r) {
                                var n;
                                if ("string" == typeof t) {
                                    let s = document;
                                    e && ((0, i.k)(Boolean(e.current), "Scope provided, but no element detected."), s = e.current), r ? (null !== (n = r[t]) && void 0 !== n || (r[t] = s.querySelectorAll(t)), t = r[t]) : t = s.querySelectorAll(t)
                                } else t instanceof Element && (t = [t]);
                                return Array.from(t || [])
                            }(t),
                            l = new WeakMap,
                            u = t => {
                                t.forEach(t => {
                                    let r = l.get(t.target);
                                    if (t.isIntersecting !== Boolean(r)) {
                                        if (t.isIntersecting) {
                                            let n = e(t);
                                            "function" == typeof n ? l.set(t.target, n) : c.unobserve(t.target)
                                        } else r && (r(t), l.delete(t.target))
                                    }
                                })
                            },
                            c = new IntersectionObserver(u, {
                                root: r,
                                rootMargin: n,
                                threshold: "number" == typeof a ? a : s[a]
                            });
                        return o.forEach(t => c.observe(t)), () => c.disconnect()
                    }(t.current, n, c)
                }, [e, t, r, o]), l
            }
        }
    }
]);