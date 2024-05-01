(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [634], {
        4098: function(e, t) {
            var n, r = "undefined" != typeof self ? self : this,
                i = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            n = i,
                function(e) {
                    var t = {
                        searchParams: "URLSearchParams" in n,
                        iterable: "Symbol" in n && "iterator" in Symbol,
                        blob: "FileReader" in n && "Blob" in n && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in n,
                        arrayBuffer: "ArrayBuffer" in n
                    };
                    if (t.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        i = ArrayBuffer.isView || function(e) {
                            return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                        };

                    function s(e) {
                        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw TypeError("Invalid character in header field name");
                        return e.toLowerCase()
                    }

                    function o(e) {
                        return "string" != typeof e && (e = String(e)), e
                    }

                    function a(e) {
                        var n = {
                            next: function() {
                                var t = e.shift();
                                return {
                                    done: void 0 === t,
                                    value: t
                                }
                            }
                        };
                        return t.iterable && (n[Symbol.iterator] = function() {
                            return n
                        }), n
                    }

                    function u(e) {
                        this.map = {}, e instanceof u ? e.forEach(function(e, t) {
                            this.append(t, e)
                        }, this) : Array.isArray(e) ? e.forEach(function(e) {
                            this.append(e[0], e[1])
                        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                            this.append(t, e[t])
                        }, this)
                    }

                    function l(e) {
                        if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
                        e.bodyUsed = !0
                    }

                    function c(e) {
                        return new Promise(function(t, n) {
                            e.onload = function() {
                                t(e.result)
                            }, e.onerror = function() {
                                n(e.error)
                            }
                        })
                    }

                    function h(e) {
                        var t = new FileReader,
                            n = c(t);
                        return t.readAsArrayBuffer(e), n
                    }

                    function p(e) {
                        if (e.slice) return e.slice(0);
                        var t = new Uint8Array(e.byteLength);
                        return t.set(new Uint8Array(e)), t.buffer
                    }

                    function d() {
                        return this.bodyUsed = !1, this._initBody = function(e) {
                            if (this._bodyInit = e, e) {
                                if ("string" == typeof e) this._bodyText = e;
                                else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                                else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                                else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                                else {
                                    var n;
                                    t.arrayBuffer && t.blob && (n = e) && DataView.prototype.isPrototypeOf(n) ? (this._bodyArrayBuffer = p(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e)) ? this._bodyArrayBuffer = p(e) : this._bodyText = e = Object.prototype.toString.call(e)
                                }
                            } else this._bodyText = "";
                            !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, t.blob && (this.blob = function() {
                            var e = l(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                            throw Error("could not read FormData body as blob")
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
                        }), this.text = function() {
                            var e, t, n, r = l(this);
                            if (r) return r;
                            if (this._bodyBlob) return e = this._bodyBlob, n = c(t = new FileReader), t.readAsText(e), n;
                            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                                for (var t = new Uint8Array(e), n = Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                            if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                            throw Error("could not read FormData body as text")
                        }, t.formData && (this.formData = function() {
                            return this.text().then(E)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    u.prototype.append = function(e, t) {
                        e = s(e), t = o(t);
                        var n = this.map[e];
                        this.map[e] = n ? n + ", " + t : t
                    }, u.prototype.delete = function(e) {
                        delete this.map[s(e)]
                    }, u.prototype.get = function(e) {
                        return e = s(e), this.has(e) ? this.map[e] : null
                    }, u.prototype.has = function(e) {
                        return this.map.hasOwnProperty(s(e))
                    }, u.prototype.set = function(e, t) {
                        this.map[s(e)] = o(t)
                    }, u.prototype.forEach = function(e, t) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                    }, u.prototype.keys = function() {
                        var e = [];
                        return this.forEach(function(t, n) {
                            e.push(n)
                        }), a(e)
                    }, u.prototype.values = function() {
                        var e = [];
                        return this.forEach(function(t) {
                            e.push(t)
                        }), a(e)
                    }, u.prototype.entries = function() {
                        var e = [];
                        return this.forEach(function(t, n) {
                            e.push([n, t])
                        }), a(e)
                    }, t.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
                    var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function y(e, t) {
                        var n, r, i = (t = t || {}).body;
                        if (e instanceof y) {
                            if (e.bodyUsed) throw TypeError("Already read");
                            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new u(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
                        } else this.url = String(e);
                        if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new u(t.headers)), this.method = (r = (n = t.method || this.method || "GET").toUpperCase(), f.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(i)
                    }

                    function E(e) {
                        var t = new FormData;
                        return e.trim().split("&").forEach(function(e) {
                            if (e) {
                                var n = e.split("="),
                                    r = n.shift().replace(/\+/g, " "),
                                    i = n.join("=").replace(/\+/g, " ");
                                t.append(decodeURIComponent(r), decodeURIComponent(i))
                            }
                        }), t
                    }

                    function v(e, t) {
                        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new u(t.headers), this.url = t.url || "", this._initBody(e)
                    }
                    y.prototype.clone = function() {
                        return new y(this, {
                            body: this._bodyInit
                        })
                    }, d.call(y.prototype), d.call(v.prototype), v.prototype.clone = function() {
                        return new v(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new u(this.headers),
                            url: this.url
                        })
                    }, v.error = function() {
                        var e = new v(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var m = [301, 302, 303, 307, 308];
                    v.redirect = function(e, t) {
                        if (-1 === m.indexOf(t)) throw RangeError("Invalid status code");
                        return new v(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, e.DOMException = n.DOMException;
                    try {
                        new e.DOMException
                    } catch (T) {
                        e.DOMException = function(e, t) {
                            this.message = e, this.name = t;
                            var n = Error(e);
                            this.stack = n.stack
                        }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                    }

                    function N(n, r) {
                        return new Promise(function(i, s) {
                            var o = new y(n, r);
                            if (o.signal && o.signal.aborted) return s(new e.DOMException("Aborted", "AbortError"));
                            var a = new XMLHttpRequest;

                            function l() {
                                a.abort()
                            }
                            a.onload = function() {
                                var e, t, n = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: (e = a.getAllResponseHeaders() || "", t = new u, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                        var n = e.split(":"),
                                            r = n.shift().trim();
                                        if (r) {
                                            var i = n.join(":").trim();
                                            t.append(r, i)
                                        }
                                    }), t)
                                };
                                n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
                                var r = "response" in a ? a.response : a.responseText;
                                i(new v(r, n))
                            }, a.onerror = function() {
                                s(TypeError("Network request failed"))
                            }, a.ontimeout = function() {
                                s(TypeError("Network request failed"))
                            }, a.onabort = function() {
                                s(new e.DOMException("Aborted", "AbortError"))
                            }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), o.headers.forEach(function(e, t) {
                                a.setRequestHeader(t, e)
                            }), o.signal && (o.signal.addEventListener("abort", l), a.onreadystatechange = function() {
                                4 === a.readyState && o.signal.removeEventListener("abort", l)
                            }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                        })
                    }
                    N.polyfill = !0, n.fetch || (n.fetch = N, n.Headers = u, n.Request = y, n.Response = v), e.Headers = u, e.Request = y, e.Response = v, e.fetch = N, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }({}), i.fetch.ponyfill = !0, delete i.fetch.polyfill, (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        2445: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = e.uri,
                    n = e.name,
                    r = e.type;
                this.uri = t, this.name = n, this.type = r
            }
        },
        804: function(e, t, n) {
            "use strict";
            var r = n(1268);
            e.exports = function e(t, n, i) {
                void 0 === n && (n = ""), void 0 === i && (i = r);
                var s, o = new Map;

                function a(e, t) {
                    var n = o.get(t);
                    n ? n.push.apply(n, e) : o.set(t, e)
                }
                if (i(t)) s = null, a([n], t);
                else {
                    var u = n ? n + "." : "";
                    if ("undefined" != typeof FileList && t instanceof FileList) s = Array.prototype.map.call(t, function(e, t) {
                        return a(["" + u + t], e), null
                    });
                    else if (Array.isArray(t)) s = t.map(function(t, n) {
                        var r = e(t, "" + u + n, i);
                        return r.files.forEach(a), r.clone
                    });
                    else if (t && t.constructor === Object)
                        for (var l in s = {}, t) {
                            var c = e(t[l], "" + u + l, i);
                            c.files.forEach(a), s[l] = c.clone
                        } else s = t
                }
                return {
                    clone: s,
                    files: o
                }
            }
        },
        1268: function(e, t, n) {
            "use strict";
            var r = n(2445);
            e.exports = function(e) {
                return "undefined" != typeof File && e instanceof File || "undefined" != typeof Blob && e instanceof Blob || e instanceof r
            }
        },
        3458: function(e) {
            e.exports = "object" == typeof self ? self.FormData : window.FormData
        },
        6858: function(e, t, n) {
            "use strict";
            n.d(t, {
                WY: function() {
                    return eg
                }
            });
            let r = {
                parse: JSON.parse,
                stringify: JSON.stringify
            };
            var i, s, o, a, u, l, c, h, p = n(1268),
                d = n(804),
                f = n(3458);
            let y = e => p(e) || null !== e && "object" == typeof e && "function" == typeof e.pipe,
                E = (e, t, n, i = r) => {
                    let {
                        clone: s,
                        files: o
                    } = d({
                        query: e,
                        variables: t,
                        operationName: n
                    }, "", y);
                    if (0 === o.size) {
                        if (!Array.isArray(e)) return i.stringify(s);
                        if (void 0 !== t && !Array.isArray(t)) throw Error("Cannot create request body with given variable type, array expected");
                        let a = e.reduce((e, n, r) => (e.push({
                            query: n,
                            variables: t ? t[r] : void 0
                        }), e), []);
                        return i.stringify(a)
                    }
                    let u = "undefined" == typeof FormData ? f : FormData,
                        l = new u;
                    l.append("operations", i.stringify(s));
                    let c = {},
                        h = 0;
                    return o.forEach(e => {
                        c[++h] = e
                    }), l.append("map", i.stringify(c)), h = 0, o.forEach((e, t) => {
                        l.append(`${++h}`, t)
                    }), l
                },
                v = e => e.toUpperCase(),
                m = e => {
                    let t = {};
                    return e.forEach((e, n) => {
                        t[n] = e
                    }), t
                },
                T = (e, t, n) => e.document ? e : {
                    document: e,
                    variables: t,
                    requestHeaders: n,
                    signal: void 0
                },
                N = (e, t, n) => e.query ? e : {
                    query: e,
                    variables: t,
                    requestHeaders: n,
                    signal: void 0
                },
                I = (e, t) => e.documents ? e : {
                    documents: e,
                    requestHeaders: t,
                    signal: void 0
                },
                b = (e, t, ...n) => {
                    let [r, i] = n;
                    return e.document ? e : {
                        url: e,
                        document: t,
                        variables: r,
                        requestHeaders: i,
                        signal: void 0
                    }
                },
                g = /\r\n|[\n\r]/g;

            function A(e, t) {
                let n = 0,
                    r = 1;
                for (let i of e.body.matchAll(g)) {
                    if ("number" == typeof i.index || function(e, t) {
                            let n = Boolean(e);
                            if (!n) throw Error(null != t ? t : "Unexpected invariant triggered.")
                        }(!1), i.index >= t) break;
                    n = i.index + i[0].length, r += 1
                }
                return {
                    line: r,
                    column: t + 1 - n
                }
            }

            function O(e, t) {
                let n = e.locationOffset.column - 1,
                    r = "".padStart(n) + e.body,
                    i = t.line - 1,
                    s = e.locationOffset.line - 1,
                    o = t.line + s,
                    a = 1 === t.line ? n : 0,
                    u = t.column + a,
                    l = `${e.name}:${o}:${u}
`,
                    c = r.split(/\r\n|[\n\r]/g),
                    h = c[i];
                if (h.length > 120) {
                    let p = Math.floor(u / 80),
                        d = [];
                    for (let f = 0; f < h.length; f += 80) d.push(h.slice(f, f + 80));
                    return l + x([
                        [`${o} |`, d[0]], ...d.slice(1, p + 1).map(e => ["|", e]), ["|", "^".padStart(u % 80)],
                        ["|", d[p + 1]]
                    ])
                }
                return l + x([
                    [`${o-1} |`, c[i - 1]],
                    [`${o} |`, h],
                    ["|", "^".padStart(u)],
                    [`${o+1} |`, c[i + 1]]
                ])
            }

            function x(e) {
                let t = e.filter(([e, t]) => void 0 !== t),
                    n = Math.max(...t.map(([e]) => e.length));
                return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n")
            }
            class _ extends Error {
                constructor(e, ...t) {
                    var n, r, i, s;
                    let {
                        nodes: o,
                        source: a,
                        positions: u,
                        path: l,
                        originalError: c,
                        extensions: h
                    } = function(e) {
                        let t = e[0];
                        return null == t || "kind" in t || "length" in t ? {
                            nodes: t,
                            source: e[1],
                            positions: e[2],
                            path: e[3],
                            originalError: e[4],
                            extensions: e[5]
                        } : t
                    }(t);
                    super(e), this.name = "GraphQLError", this.path = null != l ? l : void 0, this.originalError = null != c ? c : void 0, this.nodes = D(Array.isArray(o) ? o : o ? [o] : void 0);
                    let p = D(null === (n = this.nodes) || void 0 === n ? void 0 : n.map(e => e.loc).filter(e => null != e));
                    this.source = null != a ? a : null == p ? void 0 : null === (r = p[0]) || void 0 === r ? void 0 : r.source, this.positions = null != u ? u : null == p ? void 0 : p.map(e => e.start), this.locations = u && a ? u.map(e => A(a, e)) : null == p ? void 0 : p.map(e => A(e.source, e.start));
                    let d = "object" == typeof(s = null == c ? void 0 : c.extensions) && null !== s ? null == c ? void 0 : c.extensions : void 0;
                    this.extensions = null !== (i = null != h ? h : d) && void 0 !== i ? i : Object.create(null), Object.defineProperties(this, {
                        message: {
                            writable: !0,
                            enumerable: !0
                        },
                        name: {
                            enumerable: !1
                        },
                        nodes: {
                            enumerable: !1
                        },
                        source: {
                            enumerable: !1
                        },
                        positions: {
                            enumerable: !1
                        },
                        originalError: {
                            enumerable: !1
                        }
                    }), null != c && c.stack ? Object.defineProperty(this, "stack", {
                        value: c.stack,
                        writable: !0,
                        configurable: !0
                    }) : Error.captureStackTrace ? Error.captureStackTrace(this, _) : Object.defineProperty(this, "stack", {
                        value: Error().stack,
                        writable: !0,
                        configurable: !0
                    })
                }
                get[Symbol.toStringTag]() {
                    return "GraphQLError"
                }
                toString() {
                    let e = this.message;
                    if (this.nodes) {
                        for (let t of this.nodes)
                            if (t.loc) {
                                var n;
                                e += "\n\n" + O((n = t.loc).source, A(n.source, n.start))
                            }
                    } else if (this.source && this.locations)
                        for (let r of this.locations) e += "\n\n" + O(this.source, r);
                    return e
                }
                toJSON() {
                    let e = {
                        message: this.message
                    };
                    return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
                }
            }

            function D(e) {
                return void 0 === e || 0 === e.length ? void 0 : e
            }

            function k(e, t, n) {
                return new _(`Syntax Error: ${n}`, {
                    source: e,
                    positions: [t]
                })
            }
            class S {
                constructor(e, t, n) {
                    this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
                }
                get[Symbol.toStringTag]() {
                    return "Location"
                }
                toJSON() {
                    return {
                        start: this.start,
                        end: this.end
                    }
                }
            }
            class C {
                constructor(e, t, n, r, i, s) {
                    this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = s, this.prev = null, this.next = null
                }
                get[Symbol.toStringTag]() {
                    return "Token"
                }
                toJSON() {
                    return {
                        kind: this.kind,
                        value: this.value,
                        line: this.line,
                        column: this.column
                    }
                }
            }
            let w = {
                    Name: [],
                    Document: ["definitions"],
                    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
                    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
                    Variable: ["name"],
                    SelectionSet: ["selections"],
                    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
                    Argument: ["name", "value"],
                    FragmentSpread: ["name", "directives"],
                    InlineFragment: ["typeCondition", "directives", "selectionSet"],
                    FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
                    IntValue: [],
                    FloatValue: [],
                    StringValue: [],
                    BooleanValue: [],
                    NullValue: [],
                    EnumValue: [],
                    ListValue: ["values"],
                    ObjectValue: ["fields"],
                    ObjectField: ["name", "value"],
                    Directive: ["name", "arguments"],
                    NamedType: ["name"],
                    ListType: ["type"],
                    NonNullType: ["type"],
                    SchemaDefinition: ["description", "directives", "operationTypes"],
                    OperationTypeDefinition: ["type"],
                    ScalarTypeDefinition: ["description", "name", "directives"],
                    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
                    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
                    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    UnionTypeDefinition: ["description", "name", "directives", "types"],
                    EnumTypeDefinition: ["description", "name", "directives", "values"],
                    EnumValueDefinition: ["description", "name", "directives"],
                    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
                    DirectiveDefinition: ["description", "name", "arguments", "locations"],
                    SchemaExtension: ["directives", "operationTypes"],
                    ScalarTypeExtension: ["name", "directives"],
                    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
                    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
                    UnionTypeExtension: ["name", "directives", "types"],
                    EnumTypeExtension: ["name", "directives", "values"],
                    InputObjectTypeExtension: ["name", "directives", "fields"]
                },
                R = new Set(Object.keys(w));

            function L(e) {
                let t = null == e ? void 0 : e.kind;
                return "string" == typeof t && R.has(t)
            }

            function F(e) {
                return 9 === e || 32 === e
            }

            function P(e) {
                return e >= 48 && e <= 57
            }

            function B(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function U(e) {
                return B(e) || 95 === e
            }(i = u || (u = {})).QUERY = "query", i.MUTATION = "mutation", i.SUBSCRIPTION = "subscription", (s = l || (l = {})).QUERY = "QUERY", s.MUTATION = "MUTATION", s.SUBSCRIPTION = "SUBSCRIPTION", s.FIELD = "FIELD", s.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", s.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", s.INLINE_FRAGMENT = "INLINE_FRAGMENT", s.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", s.SCHEMA = "SCHEMA", s.SCALAR = "SCALAR", s.OBJECT = "OBJECT", s.FIELD_DEFINITION = "FIELD_DEFINITION", s.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", s.INTERFACE = "INTERFACE", s.UNION = "UNION", s.ENUM = "ENUM", s.ENUM_VALUE = "ENUM_VALUE", s.INPUT_OBJECT = "INPUT_OBJECT", s.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", (o = c || (c = {})).NAME = "Name", o.DOCUMENT = "Document", o.OPERATION_DEFINITION = "OperationDefinition", o.VARIABLE_DEFINITION = "VariableDefinition", o.SELECTION_SET = "SelectionSet", o.FIELD = "Field", o.ARGUMENT = "Argument", o.FRAGMENT_SPREAD = "FragmentSpread", o.INLINE_FRAGMENT = "InlineFragment", o.FRAGMENT_DEFINITION = "FragmentDefinition", o.VARIABLE = "Variable", o.INT = "IntValue", o.FLOAT = "FloatValue", o.STRING = "StringValue", o.BOOLEAN = "BooleanValue", o.NULL = "NullValue", o.ENUM = "EnumValue", o.LIST = "ListValue", o.OBJECT = "ObjectValue", o.OBJECT_FIELD = "ObjectField", o.DIRECTIVE = "Directive", o.NAMED_TYPE = "NamedType", o.LIST_TYPE = "ListType", o.NON_NULL_TYPE = "NonNullType", o.SCHEMA_DEFINITION = "SchemaDefinition", o.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", o.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", o.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", o.FIELD_DEFINITION = "FieldDefinition", o.INPUT_VALUE_DEFINITION = "InputValueDefinition", o.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", o.UNION_TYPE_DEFINITION = "UnionTypeDefinition", o.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", o.ENUM_VALUE_DEFINITION = "EnumValueDefinition", o.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", o.DIRECTIVE_DEFINITION = "DirectiveDefinition", o.SCHEMA_EXTENSION = "SchemaExtension", o.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", o.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", o.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", o.UNION_TYPE_EXTENSION = "UnionTypeExtension", o.ENUM_TYPE_EXTENSION = "EnumTypeExtension", o.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", (a = h || (h = {})).SOF = "<SOF>", a.EOF = "<EOF>", a.BANG = "!", a.DOLLAR = "$", a.AMP = "&", a.PAREN_L = "(", a.PAREN_R = ")", a.SPREAD = "...", a.COLON = ":", a.EQUALS = "=", a.AT = "@", a.BRACKET_L = "[", a.BRACKET_R = "]", a.BRACE_L = "{", a.PIPE = "|", a.BRACE_R = "}", a.NAME = "Name", a.INT = "Int", a.FLOAT = "Float", a.STRING = "String", a.BLOCK_STRING = "BlockString", a.COMMENT = "Comment";
            class M {
                constructor(e) {
                    let t = new C(h.SOF, 0, 0, 0, 0);
                    this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
                }
                get[Symbol.toStringTag]() {
                    return "Lexer"
                }
                advance() {
                    this.lastToken = this.token;
                    let e = this.token = this.lookahead();
                    return e
                }
                lookahead() {
                    let e = this.token;
                    if (e.kind !== h.EOF)
                        do
                            if (e.next) e = e.next;
                            else {
                                let t = function(e, t) {
                                    let n = e.source.body,
                                        r = n.length,
                                        i = t;
                                    for (; i < r;) {
                                        let s = n.charCodeAt(i);
                                        switch (s) {
                                            case 65279:
                                            case 9:
                                            case 32:
                                            case 44:
                                                ++i;
                                                continue;
                                            case 10:
                                                ++i, ++e.line, e.lineStart = i;
                                                continue;
                                            case 13:
                                                10 === n.charCodeAt(i + 1) ? i += 2 : ++i, ++e.line, e.lineStart = i;
                                                continue;
                                            case 35:
                                                return function(e, t) {
                                                    let n = e.source.body,
                                                        r = n.length,
                                                        i = t + 1;
                                                    for (; i < r;) {
                                                        let s = n.charCodeAt(i);
                                                        if (10 === s || 13 === s) break;
                                                        if (V(s)) ++i;
                                                        else if (j(n, i)) i += 2;
                                                        else break
                                                    }
                                                    return G(e, h.COMMENT, t, i, n.slice(t + 1, i))
                                                }(e, i);
                                            case 33:
                                                return G(e, h.BANG, i, i + 1);
                                            case 36:
                                                return G(e, h.DOLLAR, i, i + 1);
                                            case 38:
                                                return G(e, h.AMP, i, i + 1);
                                            case 40:
                                                return G(e, h.PAREN_L, i, i + 1);
                                            case 41:
                                                return G(e, h.PAREN_R, i, i + 1);
                                            case 46:
                                                if (46 === n.charCodeAt(i + 1) && 46 === n.charCodeAt(i + 2)) return G(e, h.SPREAD, i, i + 3);
                                                break;
                                            case 58:
                                                return G(e, h.COLON, i, i + 1);
                                            case 61:
                                                return G(e, h.EQUALS, i, i + 1);
                                            case 64:
                                                return G(e, h.AT, i, i + 1);
                                            case 91:
                                                return G(e, h.BRACKET_L, i, i + 1);
                                            case 93:
                                                return G(e, h.BRACKET_R, i, i + 1);
                                            case 123:
                                                return G(e, h.BRACE_L, i, i + 1);
                                            case 124:
                                                return G(e, h.PIPE, i, i + 1);
                                            case 125:
                                                return G(e, h.BRACE_R, i, i + 1);
                                            case 34:
                                                if (34 === n.charCodeAt(i + 1) && 34 === n.charCodeAt(i + 2)) return function(e, t) {
                                                    let n = e.source.body,
                                                        r = n.length,
                                                        i = e.lineStart,
                                                        s = t + 3,
                                                        o = s,
                                                        a = "",
                                                        u = [];
                                                    for (; s < r;) {
                                                        let l = n.charCodeAt(s);
                                                        if (34 === l && 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2)) {
                                                            a += n.slice(o, s), u.push(a);
                                                            let c = G(e, h.BLOCK_STRING, t, s + 3, (function(e) {
                                                                var t, n;
                                                                let r = Number.MAX_SAFE_INTEGER,
                                                                    i = null,
                                                                    s = -1;
                                                                for (let o = 0; o < e.length; ++o) {
                                                                    let a = e[o],
                                                                        u = function(e) {
                                                                            let t = 0;
                                                                            for (; t < e.length && F(e.charCodeAt(t));) ++t;
                                                                            return t
                                                                        }(a);
                                                                    u !== a.length && (i = null !== (n = i) && void 0 !== n ? n : o, s = o, 0 !== o && u < r && (r = u))
                                                                }
                                                                return e.map((e, t) => 0 === t ? e : e.slice(r)).slice(null !== (t = i) && void 0 !== t ? t : 0, s + 1)
                                                            })(u).join("\n"));
                                                            return e.line += u.length - 1, e.lineStart = i, c
                                                        }
                                                        if (92 === l && 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2) && 34 === n.charCodeAt(s + 3)) {
                                                            a += n.slice(o, s), o = s + 1, s += 4;
                                                            continue
                                                        }
                                                        if (10 === l || 13 === l) {
                                                            a += n.slice(o, s), u.push(a), 13 === l && 10 === n.charCodeAt(s + 1) ? s += 2 : ++s, a = "", o = s, i = s;
                                                            continue
                                                        }
                                                        if (V(l)) ++s;
                                                        else if (j(n, s)) s += 2;
                                                        else throw k(e.source, s, `Invalid character within String: ${K(e,s)}.`)
                                                    }
                                                    throw k(e.source, s, "Unterminated string.")
                                                }(e, i);
                                                return function(e, t) {
                                                    let n = e.source.body,
                                                        r = n.length,
                                                        i = t + 1,
                                                        s = i,
                                                        o = "";
                                                    for (; i < r;) {
                                                        let a = n.charCodeAt(i);
                                                        if (34 === a) return o += n.slice(s, i), G(e, h.STRING, t, i + 1, o);
                                                        if (92 === a) {
                                                            o += n.slice(s, i);
                                                            let u = 117 === n.charCodeAt(i + 1) ? 123 === n.charCodeAt(i + 2) ? function(e, t) {
                                                                let n = e.source.body,
                                                                    r = 0,
                                                                    i = 3;
                                                                for (; i < 12;) {
                                                                    let s = n.charCodeAt(t + i++);
                                                                    if (125 === s) {
                                                                        if (i < 5 || !V(r)) break;
                                                                        return {
                                                                            value: String.fromCodePoint(r),
                                                                            size: i
                                                                        }
                                                                    }
                                                                    if ((r = r << 4 | H(s)) < 0) break
                                                                }
                                                                throw k(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)
                                                            }(e, i) : function(e, t) {
                                                                let n = e.source.body,
                                                                    r = J(n, t + 2);
                                                                if (V(r)) return {
                                                                    value: String.fromCodePoint(r),
                                                                    size: 6
                                                                };
                                                                if (q(r) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
                                                                    let i = J(n, t + 8);
                                                                    if ($(i)) return {
                                                                        value: String.fromCodePoint(r, i),
                                                                        size: 12
                                                                    }
                                                                }
                                                                throw k(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
                                                            }(e, i) : function(e, t) {
                                                                let n = e.source.body,
                                                                    r = n.charCodeAt(t + 1);
                                                                switch (r) {
                                                                    case 34:
                                                                        return {
                                                                            value: '"',
                                                                            size: 2
                                                                        };
                                                                    case 92:
                                                                        return {
                                                                            value: "\\",
                                                                            size: 2
                                                                        };
                                                                    case 47:
                                                                        return {
                                                                            value: "/",
                                                                            size: 2
                                                                        };
                                                                    case 98:
                                                                        return {
                                                                            value: "\b",
                                                                            size: 2
                                                                        };
                                                                    case 102:
                                                                        return {
                                                                            value: "\f",
                                                                            size: 2
                                                                        };
                                                                    case 110:
                                                                        return {
                                                                            value: "\n",
                                                                            size: 2
                                                                        };
                                                                    case 114:
                                                                        return {
                                                                            value: "\r",
                                                                            size: 2
                                                                        };
                                                                    case 116:
                                                                        return {
                                                                            value: "	",
                                                                            size: 2
                                                                        }
                                                                }
                                                                throw k(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
                                                            }(e, i);
                                                            o += u.value, i += u.size, s = i;
                                                            continue
                                                        }
                                                        if (10 === a || 13 === a) break;
                                                        if (V(a)) ++i;
                                                        else if (j(n, i)) i += 2;
                                                        else throw k(e.source, i, `Invalid character within String: ${K(e,i)}.`)
                                                    }
                                                    throw k(e.source, i, "Unterminated string.")
                                                }(e, i)
                                        }
                                        if (P(s) || 45 === s) return function(e, t, n) {
                                            let r = e.source.body,
                                                i = t,
                                                s = n,
                                                o = !1;
                                            if (45 === s && (s = r.charCodeAt(++i)), 48 === s) {
                                                if (P(s = r.charCodeAt(++i))) throw k(e.source, i, `Invalid number, unexpected digit after 0: ${K(e,i)}.`)
                                            } else i = Y(e, i, s), s = r.charCodeAt(i);
                                            if (46 === s && (o = !0, s = r.charCodeAt(++i), i = Y(e, i, s), s = r.charCodeAt(i)), (69 === s || 101 === s) && (o = !0, (43 === (s = r.charCodeAt(++i)) || 45 === s) && (s = r.charCodeAt(++i)), i = Y(e, i, s), s = r.charCodeAt(i)), 46 === s || U(s)) throw k(e.source, i, `Invalid number, expected digit but got: ${K(e,i)}.`);
                                            return G(e, o ? h.FLOAT : h.INT, t, i, r.slice(t, i))
                                        }(e, i, s);
                                        if (U(s)) return function(e, t) {
                                            let n = e.source.body,
                                                r = n.length,
                                                i = t + 1;
                                            for (; i < r;) {
                                                let s = n.charCodeAt(i);
                                                if (B(s) || P(s) || 95 === s) ++i;
                                                else break
                                            }
                                            return G(e, h.NAME, t, i, n.slice(t, i))
                                        }(e, i);
                                        throw k(e.source, i, 39 === s ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : V(s) || j(n, i) ? `Unexpected character: ${K(e,i)}.` : `Invalid character: ${K(e,i)}.`)
                                    }
                                    return G(e, h.EOF, r, r)
                                }(this, e.end);
                                e.next = t, t.prev = e, e = t
                            }
                    while (e.kind === h.COMMENT);
                    return e
                }
            }

            function V(e) {
                return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
            }

            function j(e, t) {
                return q(e.charCodeAt(t)) && $(e.charCodeAt(t + 1))
            }

            function q(e) {
                return e >= 55296 && e <= 56319
            }

            function $(e) {
                return e >= 56320 && e <= 57343
            }

            function K(e, t) {
                let n = e.source.body.codePointAt(t);
                if (void 0 === n) return h.EOF;
                if (n >= 32 && n <= 126) {
                    let r = String.fromCodePoint(n);
                    return '"' === r ? "'\"'" : `"${r}"`
                }
                return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
            }

            function G(e, t, n, r, i) {
                let s = e.line,
                    o = 1 + n - e.lineStart;
                return new C(t, n, r, s, o, i)
            }

            function Y(e, t, n) {
                if (!P(n)) throw k(e.source, t, `Invalid number, expected digit but got: ${K(e,t)}.`);
                let r = e.source.body,
                    i = t + 1;
                for (; P(r.charCodeAt(i));) ++i;
                return i
            }

            function J(e, t) {
                return H(e.charCodeAt(t)) << 12 | H(e.charCodeAt(t + 1)) << 8 | H(e.charCodeAt(t + 2)) << 4 | H(e.charCodeAt(t + 3))
            }

            function H(e) {
                return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
            }

            function z(e, t) {
                let n = Boolean(e);
                if (!n) throw Error(t)
            }

            function X(e, t) {
                switch (typeof e) {
                    case "string":
                        return JSON.stringify(e);
                    case "function":
                        return e.name ? `[function ${e.name}]` : "[function]";
                    case "object":
                        return function(e, t) {
                            if (null === e) return "null";
                            if (t.includes(e)) return "[Circular]";
                            let n = [...t, e];
                            if ("function" == typeof e.toJSON) {
                                let r = e.toJSON();
                                if (r !== e) return "string" == typeof r ? r : X(r, n)
                            } else if (Array.isArray(e)) return function(e, t) {
                                if (0 === e.length) return "[]";
                                if (t.length > 2) return "[Array]";
                                let n = Math.min(10, e.length),
                                    r = e.length - n,
                                    i = [];
                                for (let s = 0; s < n; ++s) i.push(X(e[s], t));
                                return 1 === r ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]"
                            }(e, n);
                            return function(e, t) {
                                let n = Object.entries(e);
                                if (0 === n.length) return "{}";
                                if (t.length > 2) return "[" + function(e) {
                                    let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                    if ("Object" === t && "function" == typeof e.constructor) {
                                        let n = e.constructor.name;
                                        if ("string" == typeof n && "" !== n) return n
                                    }
                                    return t
                                }(e) + "]";
                                let r = n.map(([e, n]) => e + ": " + X(n, t));
                                return "{ " + r.join(", ") + " }"
                            }(e, n)
                        }(e, t);
                    default:
                        return String(e)
                }
            }
            class Q {
                constructor(e, t = "GraphQL request", n = {
                    line: 1,
                    column: 1
                }) {
                    "string" == typeof e || z(!1, `Body must be a string. Received: ${X(e,[])}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || z(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || z(!1, "column in locationOffset is 1-indexed and must be positive.")
                }
                get[Symbol.toStringTag]() {
                    return "Source"
                }
            }
            class W {
                constructor(e, t = {}) {
                    let n = e instanceof Q ? e : new Q(e);
                    this._lexer = new M(n), this._options = t, this._tokenCounter = 0
                }
                parseName() {
                    let e = this.expectToken(h.NAME);
                    return this.node(e, {
                        kind: c.NAME,
                        value: e.value
                    })
                }
                parseDocument() {
                    return this.node(this._lexer.token, {
                        kind: c.DOCUMENT,
                        definitions: this.many(h.SOF, this.parseDefinition, h.EOF)
                    })
                }
                parseDefinition() {
                    if (this.peek(h.BRACE_L)) return this.parseOperationDefinition();
                    let e = this.peekDescription(),
                        t = e ? this._lexer.lookahead() : this._lexer.token;
                    if (t.kind === h.NAME) {
                        switch (t.value) {
                            case "schema":
                                return this.parseSchemaDefinition();
                            case "scalar":
                                return this.parseScalarTypeDefinition();
                            case "type":
                                return this.parseObjectTypeDefinition();
                            case "interface":
                                return this.parseInterfaceTypeDefinition();
                            case "union":
                                return this.parseUnionTypeDefinition();
                            case "enum":
                                return this.parseEnumTypeDefinition();
                            case "input":
                                return this.parseInputObjectTypeDefinition();
                            case "directive":
                                return this.parseDirectiveDefinition()
                        }
                        if (e) throw k(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
                        switch (t.value) {
                            case "query":
                            case "mutation":
                            case "subscription":
                                return this.parseOperationDefinition();
                            case "fragment":
                                return this.parseFragmentDefinition();
                            case "extend":
                                return this.parseTypeSystemExtension()
                        }
                    }
                    throw this.unexpected(t)
                }
                parseOperationDefinition() {
                    let e;
                    let t = this._lexer.token;
                    if (this.peek(h.BRACE_L)) return this.node(t, {
                        kind: c.OPERATION_DEFINITION,
                        operation: u.QUERY,
                        name: void 0,
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: this.parseSelectionSet()
                    });
                    let n = this.parseOperationType();
                    return this.peek(h.NAME) && (e = this.parseName()), this.node(t, {
                        kind: c.OPERATION_DEFINITION,
                        operation: n,
                        name: e,
                        variableDefinitions: this.parseVariableDefinitions(),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet()
                    })
                }
                parseOperationType() {
                    let e = this.expectToken(h.NAME);
                    switch (e.value) {
                        case "query":
                            return u.QUERY;
                        case "mutation":
                            return u.MUTATION;
                        case "subscription":
                            return u.SUBSCRIPTION
                    }
                    throw this.unexpected(e)
                }
                parseVariableDefinitions() {
                    return this.optionalMany(h.PAREN_L, this.parseVariableDefinition, h.PAREN_R)
                }
                parseVariableDefinition() {
                    return this.node(this._lexer.token, {
                        kind: c.VARIABLE_DEFINITION,
                        variable: this.parseVariable(),
                        type: (this.expectToken(h.COLON), this.parseTypeReference()),
                        defaultValue: this.expectOptionalToken(h.EQUALS) ? this.parseConstValueLiteral() : void 0,
                        directives: this.parseConstDirectives()
                    })
                }
                parseVariable() {
                    let e = this._lexer.token;
                    return this.expectToken(h.DOLLAR), this.node(e, {
                        kind: c.VARIABLE,
                        name: this.parseName()
                    })
                }
                parseSelectionSet() {
                    return this.node(this._lexer.token, {
                        kind: c.SELECTION_SET,
                        selections: this.many(h.BRACE_L, this.parseSelection, h.BRACE_R)
                    })
                }
                parseSelection() {
                    return this.peek(h.SPREAD) ? this.parseFragment() : this.parseField()
                }
                parseField() {
                    let e, t;
                    let n = this._lexer.token,
                        r = this.parseName();
                    return this.expectOptionalToken(h.COLON) ? (e = r, t = this.parseName()) : t = r, this.node(n, {
                        kind: c.FIELD,
                        alias: e,
                        name: t,
                        arguments: this.parseArguments(!1),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.peek(h.BRACE_L) ? this.parseSelectionSet() : void 0
                    })
                }
                parseArguments(e) {
                    let t = e ? this.parseConstArgument : this.parseArgument;
                    return this.optionalMany(h.PAREN_L, t, h.PAREN_R)
                }
                parseArgument(e = !1) {
                    let t = this._lexer.token,
                        n = this.parseName();
                    return this.expectToken(h.COLON), this.node(t, {
                        kind: c.ARGUMENT,
                        name: n,
                        value: this.parseValueLiteral(e)
                    })
                }
                parseConstArgument() {
                    return this.parseArgument(!0)
                }
                parseFragment() {
                    let e = this._lexer.token;
                    this.expectToken(h.SPREAD);
                    let t = this.expectOptionalKeyword("on");
                    return !t && this.peek(h.NAME) ? this.node(e, {
                        kind: c.FRAGMENT_SPREAD,
                        name: this.parseFragmentName(),
                        directives: this.parseDirectives(!1)
                    }) : this.node(e, {
                        kind: c.INLINE_FRAGMENT,
                        typeCondition: t ? this.parseNamedType() : void 0,
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet()
                    })
                }
                parseFragmentDefinition() {
                    let e = this._lexer.token;
                    return (this.expectKeyword("fragment"), !0 === this._options.allowLegacyFragmentVariables) ? this.node(e, {
                        kind: c.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        variableDefinitions: this.parseVariableDefinitions(),
                        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet()
                    }) : this.node(e, {
                        kind: c.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet()
                    })
                }
                parseFragmentName() {
                    if ("on" === this._lexer.token.value) throw this.unexpected();
                    return this.parseName()
                }
                parseValueLiteral(e) {
                    let t = this._lexer.token;
                    switch (t.kind) {
                        case h.BRACKET_L:
                            return this.parseList(e);
                        case h.BRACE_L:
                            return this.parseObject(e);
                        case h.INT:
                            return this.advanceLexer(), this.node(t, {
                                kind: c.INT,
                                value: t.value
                            });
                        case h.FLOAT:
                            return this.advanceLexer(), this.node(t, {
                                kind: c.FLOAT,
                                value: t.value
                            });
                        case h.STRING:
                        case h.BLOCK_STRING:
                            return this.parseStringLiteral();
                        case h.NAME:
                            switch (this.advanceLexer(), t.value) {
                                case "true":
                                    return this.node(t, {
                                        kind: c.BOOLEAN,
                                        value: !0
                                    });
                                case "false":
                                    return this.node(t, {
                                        kind: c.BOOLEAN,
                                        value: !1
                                    });
                                case "null":
                                    return this.node(t, {
                                        kind: c.NULL
                                    });
                                default:
                                    return this.node(t, {
                                        kind: c.ENUM,
                                        value: t.value
                                    })
                            }
                        case h.DOLLAR:
                            if (e) {
                                if (this.expectToken(h.DOLLAR), this._lexer.token.kind === h.NAME) {
                                    let n = this._lexer.token.value;
                                    throw k(this._lexer.source, t.start, `Unexpected variable "$${n}" in constant value.`)
                                }
                                throw this.unexpected(t)
                            }
                            return this.parseVariable();
                        default:
                            throw this.unexpected()
                    }
                }
                parseConstValueLiteral() {
                    return this.parseValueLiteral(!0)
                }
                parseStringLiteral() {
                    let e = this._lexer.token;
                    return this.advanceLexer(), this.node(e, {
                        kind: c.STRING,
                        value: e.value,
                        block: e.kind === h.BLOCK_STRING
                    })
                }
                parseList(e) {
                    let t = () => this.parseValueLiteral(e);
                    return this.node(this._lexer.token, {
                        kind: c.LIST,
                        values: this.any(h.BRACKET_L, t, h.BRACKET_R)
                    })
                }
                parseObject(e) {
                    let t = () => this.parseObjectField(e);
                    return this.node(this._lexer.token, {
                        kind: c.OBJECT,
                        fields: this.any(h.BRACE_L, t, h.BRACE_R)
                    })
                }
                parseObjectField(e) {
                    let t = this._lexer.token,
                        n = this.parseName();
                    return this.expectToken(h.COLON), this.node(t, {
                        kind: c.OBJECT_FIELD,
                        name: n,
                        value: this.parseValueLiteral(e)
                    })
                }
                parseDirectives(e) {
                    let t = [];
                    for (; this.peek(h.AT);) t.push(this.parseDirective(e));
                    return t
                }
                parseConstDirectives() {
                    return this.parseDirectives(!0)
                }
                parseDirective(e) {
                    let t = this._lexer.token;
                    return this.expectToken(h.AT), this.node(t, {
                        kind: c.DIRECTIVE,
                        name: this.parseName(),
                        arguments: this.parseArguments(e)
                    })
                }
                parseTypeReference() {
                    let e;
                    let t = this._lexer.token;
                    if (this.expectOptionalToken(h.BRACKET_L)) {
                        let n = this.parseTypeReference();
                        this.expectToken(h.BRACKET_R), e = this.node(t, {
                            kind: c.LIST_TYPE,
                            type: n
                        })
                    } else e = this.parseNamedType();
                    return this.expectOptionalToken(h.BANG) ? this.node(t, {
                        kind: c.NON_NULL_TYPE,
                        type: e
                    }) : e
                }
                parseNamedType() {
                    return this.node(this._lexer.token, {
                        kind: c.NAMED_TYPE,
                        name: this.parseName()
                    })
                }
                peekDescription() {
                    return this.peek(h.STRING) || this.peek(h.BLOCK_STRING)
                }
                parseDescription() {
                    if (this.peekDescription()) return this.parseStringLiteral()
                }
                parseSchemaDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("schema");
                    let n = this.parseConstDirectives(),
                        r = this.many(h.BRACE_L, this.parseOperationTypeDefinition, h.BRACE_R);
                    return this.node(e, {
                        kind: c.SCHEMA_DEFINITION,
                        description: t,
                        directives: n,
                        operationTypes: r
                    })
                }
                parseOperationTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseOperationType();
                    this.expectToken(h.COLON);
                    let n = this.parseNamedType();
                    return this.node(e, {
                        kind: c.OPERATION_TYPE_DEFINITION,
                        operation: t,
                        type: n
                    })
                }
                parseScalarTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("scalar");
                    let n = this.parseName(),
                        r = this.parseConstDirectives();
                    return this.node(e, {
                        kind: c.SCALAR_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r
                    })
                }
                parseObjectTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("type");
                    let n = this.parseName(),
                        r = this.parseImplementsInterfaces(),
                        i = this.parseConstDirectives(),
                        s = this.parseFieldsDefinition();
                    return this.node(e, {
                        kind: c.OBJECT_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        interfaces: r,
                        directives: i,
                        fields: s
                    })
                }
                parseImplementsInterfaces() {
                    return this.expectOptionalKeyword("implements") ? this.delimitedMany(h.AMP, this.parseNamedType) : []
                }
                parseFieldsDefinition() {
                    return this.optionalMany(h.BRACE_L, this.parseFieldDefinition, h.BRACE_R)
                }
                parseFieldDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription(),
                        n = this.parseName(),
                        r = this.parseArgumentDefs();
                    this.expectToken(h.COLON);
                    let i = this.parseTypeReference(),
                        s = this.parseConstDirectives();
                    return this.node(e, {
                        kind: c.FIELD_DEFINITION,
                        description: t,
                        name: n,
                        arguments: r,
                        type: i,
                        directives: s
                    })
                }
                parseArgumentDefs() {
                    return this.optionalMany(h.PAREN_L, this.parseInputValueDef, h.PAREN_R)
                }
                parseInputValueDef() {
                    let e;
                    let t = this._lexer.token,
                        n = this.parseDescription(),
                        r = this.parseName();
                    this.expectToken(h.COLON);
                    let i = this.parseTypeReference();
                    this.expectOptionalToken(h.EQUALS) && (e = this.parseConstValueLiteral());
                    let s = this.parseConstDirectives();
                    return this.node(t, {
                        kind: c.INPUT_VALUE_DEFINITION,
                        description: n,
                        name: r,
                        type: i,
                        defaultValue: e,
                        directives: s
                    })
                }
                parseInterfaceTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("interface");
                    let n = this.parseName(),
                        r = this.parseImplementsInterfaces(),
                        i = this.parseConstDirectives(),
                        s = this.parseFieldsDefinition();
                    return this.node(e, {
                        kind: c.INTERFACE_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        interfaces: r,
                        directives: i,
                        fields: s
                    })
                }
                parseUnionTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("union");
                    let n = this.parseName(),
                        r = this.parseConstDirectives(),
                        i = this.parseUnionMemberTypes();
                    return this.node(e, {
                        kind: c.UNION_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r,
                        types: i
                    })
                }
                parseUnionMemberTypes() {
                    return this.expectOptionalToken(h.EQUALS) ? this.delimitedMany(h.PIPE, this.parseNamedType) : []
                }
                parseEnumTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("enum");
                    let n = this.parseName(),
                        r = this.parseConstDirectives(),
                        i = this.parseEnumValuesDefinition();
                    return this.node(e, {
                        kind: c.ENUM_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r,
                        values: i
                    })
                }
                parseEnumValuesDefinition() {
                    return this.optionalMany(h.BRACE_L, this.parseEnumValueDefinition, h.BRACE_R)
                }
                parseEnumValueDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription(),
                        n = this.parseEnumValueName(),
                        r = this.parseConstDirectives();
                    return this.node(e, {
                        kind: c.ENUM_VALUE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r
                    })
                }
                parseEnumValueName() {
                    if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw k(this._lexer.source, this._lexer.token.start, `${Z(this._lexer.token)} is reserved and cannot be used for an enum value.`);
                    return this.parseName()
                }
                parseInputObjectTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("input");
                    let n = this.parseName(),
                        r = this.parseConstDirectives(),
                        i = this.parseInputFieldsDefinition();
                    return this.node(e, {
                        kind: c.INPUT_OBJECT_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r,
                        fields: i
                    })
                }
                parseInputFieldsDefinition() {
                    return this.optionalMany(h.BRACE_L, this.parseInputValueDef, h.BRACE_R)
                }
                parseTypeSystemExtension() {
                    let e = this._lexer.lookahead();
                    if (e.kind === h.NAME) switch (e.value) {
                        case "schema":
                            return this.parseSchemaExtension();
                        case "scalar":
                            return this.parseScalarTypeExtension();
                        case "type":
                            return this.parseObjectTypeExtension();
                        case "interface":
                            return this.parseInterfaceTypeExtension();
                        case "union":
                            return this.parseUnionTypeExtension();
                        case "enum":
                            return this.parseEnumTypeExtension();
                        case "input":
                            return this.parseInputObjectTypeExtension()
                    }
                    throw this.unexpected(e)
                }
                parseSchemaExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("schema");
                    let t = this.parseConstDirectives(),
                        n = this.optionalMany(h.BRACE_L, this.parseOperationTypeDefinition, h.BRACE_R);
                    if (0 === t.length && 0 === n.length) throw this.unexpected();
                    return this.node(e, {
                        kind: c.SCHEMA_EXTENSION,
                        directives: t,
                        operationTypes: n
                    })
                }
                parseScalarTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("scalar");
                    let t = this.parseName(),
                        n = this.parseConstDirectives();
                    if (0 === n.length) throw this.unexpected();
                    return this.node(e, {
                        kind: c.SCALAR_TYPE_EXTENSION,
                        name: t,
                        directives: n
                    })
                }
                parseObjectTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("type");
                    let t = this.parseName(),
                        n = this.parseImplementsInterfaces(),
                        r = this.parseConstDirectives(),
                        i = this.parseFieldsDefinition();
                    if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
                    return this.node(e, {
                        kind: c.OBJECT_TYPE_EXTENSION,
                        name: t,
                        interfaces: n,
                        directives: r,
                        fields: i
                    })
                }
                parseInterfaceTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("interface");
                    let t = this.parseName(),
                        n = this.parseImplementsInterfaces(),
                        r = this.parseConstDirectives(),
                        i = this.parseFieldsDefinition();
                    if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
                    return this.node(e, {
                        kind: c.INTERFACE_TYPE_EXTENSION,
                        name: t,
                        interfaces: n,
                        directives: r,
                        fields: i
                    })
                }
                parseUnionTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("union");
                    let t = this.parseName(),
                        n = this.parseConstDirectives(),
                        r = this.parseUnionMemberTypes();
                    if (0 === n.length && 0 === r.length) throw this.unexpected();
                    return this.node(e, {
                        kind: c.UNION_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        types: r
                    })
                }
                parseEnumTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("enum");
                    let t = this.parseName(),
                        n = this.parseConstDirectives(),
                        r = this.parseEnumValuesDefinition();
                    if (0 === n.length && 0 === r.length) throw this.unexpected();
                    return this.node(e, {
                        kind: c.ENUM_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        values: r
                    })
                }
                parseInputObjectTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("input");
                    let t = this.parseName(),
                        n = this.parseConstDirectives(),
                        r = this.parseInputFieldsDefinition();
                    if (0 === n.length && 0 === r.length) throw this.unexpected();
                    return this.node(e, {
                        kind: c.INPUT_OBJECT_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        fields: r
                    })
                }
                parseDirectiveDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("directive"), this.expectToken(h.AT);
                    let n = this.parseName(),
                        r = this.parseArgumentDefs(),
                        i = this.expectOptionalKeyword("repeatable");
                    this.expectKeyword("on");
                    let s = this.parseDirectiveLocations();
                    return this.node(e, {
                        kind: c.DIRECTIVE_DEFINITION,
                        description: t,
                        name: n,
                        arguments: r,
                        repeatable: i,
                        locations: s
                    })
                }
                parseDirectiveLocations() {
                    return this.delimitedMany(h.PIPE, this.parseDirectiveLocation)
                }
                parseDirectiveLocation() {
                    let e = this._lexer.token,
                        t = this.parseName();
                    if (Object.prototype.hasOwnProperty.call(l, t.value)) return t;
                    throw this.unexpected(e)
                }
                node(e, t) {
                    return !0 !== this._options.noLocation && (t.loc = new S(e, this._lexer.lastToken, this._lexer.source)), t
                }
                peek(e) {
                    return this._lexer.token.kind === e
                }
                expectToken(e) {
                    let t = this._lexer.token;
                    if (t.kind === e) return this.advanceLexer(), t;
                    throw k(this._lexer.source, t.start, `Expected ${ee(e)}, found ${Z(t)}.`)
                }
                expectOptionalToken(e) {
                    let t = this._lexer.token;
                    return t.kind === e && (this.advanceLexer(), !0)
                }
                expectKeyword(e) {
                    let t = this._lexer.token;
                    if (t.kind === h.NAME && t.value === e) this.advanceLexer();
                    else throw k(this._lexer.source, t.start, `Expected "${e}", found ${Z(t)}.`)
                }
                expectOptionalKeyword(e) {
                    let t = this._lexer.token;
                    return t.kind === h.NAME && t.value === e && (this.advanceLexer(), !0)
                }
                unexpected(e) {
                    let t = null != e ? e : this._lexer.token;
                    return k(this._lexer.source, t.start, `Unexpected ${Z(t)}.`)
                }
                any(e, t, n) {
                    this.expectToken(e);
                    let r = [];
                    for (; !this.expectOptionalToken(n);) r.push(t.call(this));
                    return r
                }
                optionalMany(e, t, n) {
                    if (this.expectOptionalToken(e)) {
                        let r = [];
                        do r.push(t.call(this)); while (!this.expectOptionalToken(n));
                        return r
                    }
                    return []
                }
                many(e, t, n) {
                    this.expectToken(e);
                    let r = [];
                    do r.push(t.call(this)); while (!this.expectOptionalToken(n));
                    return r
                }
                delimitedMany(e, t) {
                    this.expectOptionalToken(e);
                    let n = [];
                    do n.push(t.call(this)); while (this.expectOptionalToken(e));
                    return n
                }
                advanceLexer() {
                    let {
                        maxTokens: e
                    } = this._options, t = this._lexer.advance();
                    if (void 0 !== e && t.kind !== h.EOF && (++this._tokenCounter, this._tokenCounter > e)) throw k(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
                }
            }

            function Z(e) {
                let t = e.value;
                return ee(e.kind) + (null != t ? ` "${t}"` : "")
            }

            function ee(e) {
                return e === h.BANG || e === h.DOLLAR || e === h.AMP || e === h.PAREN_L || e === h.PAREN_R || e === h.SPREAD || e === h.COLON || e === h.EQUALS || e === h.AT || e === h.BRACKET_L || e === h.BRACKET_R || e === h.BRACE_L || e === h.PIPE || e === h.BRACE_R ? `"${e}"` : e
            }
            let et = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

            function en(e) {
                return er[e.charCodeAt(0)]
            }
            let er = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"],
                ei = Object.freeze({}),
                es = {
                    Name: {
                        leave: e => e.value
                    },
                    Variable: {
                        leave: e => "$" + e.name
                    },
                    Document: {
                        leave: e => eo(e.definitions, "\n\n")
                    },
                    OperationDefinition: {
                        leave(e) {
                            let t = eu("(", eo(e.variableDefinitions, ", "), ")"),
                                n = eo([e.operation, eo([e.name, t]), eo(e.directives, " ")], " ");
                            return ("query" === n ? "" : n + " ") + e.selectionSet
                        }
                    },
                    VariableDefinition: {
                        leave: ({
                            variable: e,
                            type: t,
                            defaultValue: n,
                            directives: r
                        }) => e + ": " + t + eu(" = ", n) + eu(" ", eo(r, " "))
                    },
                    SelectionSet: {
                        leave: ({
                            selections: e
                        }) => ea(e)
                    },
                    Field: {
                        leave({
                            alias: e,
                            name: t,
                            arguments: n,
                            directives: r,
                            selectionSet: i
                        }) {
                            let s = eu("", e, ": ") + t,
                                o = s + eu("(", eo(n, ", "), ")");
                            return o.length > 80 && (o = s + eu("(\n", el(eo(n, "\n")), "\n)")), eo([o, eo(r, " "), i], " ")
                        }
                    },
                    Argument: {
                        leave: ({
                            name: e,
                            value: t
                        }) => e + ": " + t
                    },
                    FragmentSpread: {
                        leave: ({
                            name: e,
                            directives: t
                        }) => "..." + e + eu(" ", eo(t, " "))
                    },
                    InlineFragment: {
                        leave: ({
                            typeCondition: e,
                            directives: t,
                            selectionSet: n
                        }) => eo(["...", eu("on ", e), eo(t, " "), n], " ")
                    },
                    FragmentDefinition: {
                        leave: ({
                            name: e,
                            typeCondition: t,
                            variableDefinitions: n,
                            directives: r,
                            selectionSet: i
                        }) => `fragment ${e}${eu("(",eo(n,", "),")")} on ${t} ${eu("",eo(r," ")," ")}` + i
                    },
                    IntValue: {
                        leave: ({
                            value: e
                        }) => e
                    },
                    FloatValue: {
                        leave: ({
                            value: e
                        }) => e
                    },
                    StringValue: {
                        leave: ({
                            value: e,
                            block: t
                        }) => t ? function(e, t) {
                            let n = e.replace(/"""/g, '\\"""'),
                                r = n.split(/\r\n|[\n\r]/g),
                                i = 1 === r.length,
                                s = r.length > 1 && r.slice(1).every(e => 0 === e.length || F(e.charCodeAt(0))),
                                o = n.endsWith('\\"""'),
                                a = e.endsWith('"') && !o,
                                u = e.endsWith("\\"),
                                l = a || u,
                                c = !(null != t && t.minimize) && (!i || e.length > 70 || l || s || o),
                                h = "",
                                p = i && F(e.charCodeAt(0));
                            return (c && !p || s) && (h += "\n"), h += n, (c || l) && (h += "\n"), '"""' + h + '"""'
                        }(e) : `"${e.replace(et,en)}"`
                    },
                    BooleanValue: {
                        leave: ({
                            value: e
                        }) => e ? "true" : "false"
                    },
                    NullValue: {
                        leave: () => "null"
                    },
                    EnumValue: {
                        leave: ({
                            value: e
                        }) => e
                    },
                    ListValue: {
                        leave: ({
                            values: e
                        }) => "[" + eo(e, ", ") + "]"
                    },
                    ObjectValue: {
                        leave: ({
                            fields: e
                        }) => "{" + eo(e, ", ") + "}"
                    },
                    ObjectField: {
                        leave: ({
                            name: e,
                            value: t
                        }) => e + ": " + t
                    },
                    Directive: {
                        leave: ({
                            name: e,
                            arguments: t
                        }) => "@" + e + eu("(", eo(t, ", "), ")")
                    },
                    NamedType: {
                        leave: ({
                            name: e
                        }) => e
                    },
                    ListType: {
                        leave: ({
                            type: e
                        }) => "[" + e + "]"
                    },
                    NonNullType: {
                        leave: ({
                            type: e
                        }) => e + "!"
                    },
                    SchemaDefinition: {
                        leave: ({
                            description: e,
                            directives: t,
                            operationTypes: n
                        }) => eu("", e, "\n") + eo(["schema", eo(t, " "), ea(n)], " ")
                    },
                    OperationTypeDefinition: {
                        leave: ({
                            operation: e,
                            type: t
                        }) => e + ": " + t
                    },
                    ScalarTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n
                        }) => eu("", e, "\n") + eo(["scalar", t, eo(n, " ")], " ")
                    },
                    ObjectTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            interfaces: n,
                            directives: r,
                            fields: i
                        }) => eu("", e, "\n") + eo(["type", t, eu("implements ", eo(n, " & ")), eo(r, " "), ea(i)], " ")
                    },
                    FieldDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            arguments: n,
                            type: r,
                            directives: i
                        }) => eu("", e, "\n") + t + (ec(n) ? eu("(\n", el(eo(n, "\n")), "\n)") : eu("(", eo(n, ", "), ")")) + ": " + r + eu(" ", eo(i, " "))
                    },
                    InputValueDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            type: n,
                            defaultValue: r,
                            directives: i
                        }) => eu("", e, "\n") + eo([t + ": " + n, eu("= ", r), eo(i, " ")], " ")
                    },
                    InterfaceTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            interfaces: n,
                            directives: r,
                            fields: i
                        }) => eu("", e, "\n") + eo(["interface", t, eu("implements ", eo(n, " & ")), eo(r, " "), ea(i)], " ")
                    },
                    UnionTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n,
                            types: r
                        }) => eu("", e, "\n") + eo(["union", t, eo(n, " "), eu("= ", eo(r, " | "))], " ")
                    },
                    EnumTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n,
                            values: r
                        }) => eu("", e, "\n") + eo(["enum", t, eo(n, " "), ea(r)], " ")
                    },
                    EnumValueDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n
                        }) => eu("", e, "\n") + eo([t, eo(n, " ")], " ")
                    },
                    InputObjectTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n,
                            fields: r
                        }) => eu("", e, "\n") + eo(["input", t, eo(n, " "), ea(r)], " ")
                    },
                    DirectiveDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            arguments: n,
                            repeatable: r,
                            locations: i
                        }) => eu("", e, "\n") + "directive @" + t + (ec(n) ? eu("(\n", el(eo(n, "\n")), "\n)") : eu("(", eo(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + eo(i, " | ")
                    },
                    SchemaExtension: {
                        leave: ({
                            directives: e,
                            operationTypes: t
                        }) => eo(["extend schema", eo(e, " "), ea(t)], " ")
                    },
                    ScalarTypeExtension: {
                        leave: ({
                            name: e,
                            directives: t
                        }) => eo(["extend scalar", e, eo(t, " ")], " ")
                    },
                    ObjectTypeExtension: {
                        leave: ({
                            name: e,
                            interfaces: t,
                            directives: n,
                            fields: r
                        }) => eo(["extend type", e, eu("implements ", eo(t, " & ")), eo(n, " "), ea(r)], " ")
                    },
                    InterfaceTypeExtension: {
                        leave: ({
                            name: e,
                            interfaces: t,
                            directives: n,
                            fields: r
                        }) => eo(["extend interface", e, eu("implements ", eo(t, " & ")), eo(n, " "), ea(r)], " ")
                    },
                    UnionTypeExtension: {
                        leave: ({
                            name: e,
                            directives: t,
                            types: n
                        }) => eo(["extend union", e, eo(t, " "), eu("= ", eo(n, " | "))], " ")
                    },
                    EnumTypeExtension: {
                        leave: ({
                            name: e,
                            directives: t,
                            values: n
                        }) => eo(["extend enum", e, eo(t, " "), ea(n)], " ")
                    },
                    InputObjectTypeExtension: {
                        leave: ({
                            name: e,
                            directives: t,
                            fields: n
                        }) => eo(["extend input", e, eo(t, " "), ea(n)], " ")
                    }
                };

            function eo(e, t = "") {
                var n;
                return null !== (n = null == e ? void 0 : e.filter(e => e).join(t)) && void 0 !== n ? n : ""
            }

            function ea(e) {
                return eu("{\n", el(eo(e, "\n")), "\n}")
            }

            function eu(e, t, n = "") {
                return null != t && "" !== t ? e + t + n : ""
            }

            function el(e) {
                return eu("  ", e.replace(/\n/g, "\n  "))
            }

            function ec(e) {
                var t;
                return null !== (t = null == e ? void 0 : e.some(e => e.includes("\n"))) && void 0 !== t && t
            }
            let eh = e => {
                    let t;
                    let n = e.definitions.filter(e => "OperationDefinition" === e.kind);
                    return 1 === n.length && (t = n[0] ? .name ? .value), t
                },
                ep = e => {
                    if ("string" == typeof e) {
                        let t;
                        try {
                            let n = function(e, t) {
                                let n = new W(e, void 0);
                                return n.parseDocument()
                            }(e);
                            t = eh(n)
                        } catch (r) {}
                        return {
                            query: e,
                            operationName: t
                        }
                    }
                    let i = eh(e);
                    return {
                        query: function(e, t, n = w) {
                            let r, i, s;
                            let o = new Map;
                            for (let a of Object.values(c)) o.set(a, function(e, t) {
                                let n = e[t];
                                return "object" == typeof n ? n : "function" == typeof n ? {
                                    enter: n,
                                    leave: void 0
                                } : {
                                    enter: e.enter,
                                    leave: e.leave
                                }
                            }(t, a));
                            let u = Array.isArray(e),
                                l = [e],
                                h = -1,
                                p = [],
                                d = e,
                                f = [],
                                y = [];
                            do {
                                var E, v, m;
                                let T;
                                h++;
                                let N = h === l.length,
                                    I = N && 0 !== p.length;
                                if (N) {
                                    if (i = 0 === y.length ? void 0 : f[f.length - 1], d = s, s = y.pop(), I) {
                                        if (u) {
                                            d = d.slice();
                                            let b = 0;
                                            for (let [g, A] of p) {
                                                let O = g - b;
                                                null === A ? (d.splice(O, 1), b++) : d[O] = A
                                            }
                                        } else
                                            for (let [x, _] of (d = Object.defineProperties({}, Object.getOwnPropertyDescriptors(d)), p)) d[x] = _
                                    }
                                    h = r.index, l = r.keys, p = r.edits, u = r.inArray, r = r.prev
                                } else if (s) {
                                    if (null == (d = s[i = u ? h : l[h]])) continue;
                                    f.push(i)
                                }
                                if (!Array.isArray(d)) {
                                    L(d) || z(!1, `Invalid AST Node: ${X(d,[])}.`);
                                    let D = N ? null === (E = o.get(d.kind)) || void 0 === E ? void 0 : E.leave : null === (v = o.get(d.kind)) || void 0 === v ? void 0 : v.enter;
                                    if ((T = null == D ? void 0 : D.call(t, d, i, s, f, y)) === ei) break;
                                    if (!1 === T) {
                                        if (!N) {
                                            f.pop();
                                            continue
                                        }
                                    } else if (void 0 !== T && (p.push([i, T]), !N)) {
                                        if (L(T)) d = T;
                                        else {
                                            f.pop();
                                            continue
                                        }
                                    }
                                }
                                void 0 === T && I && p.push([i, d]), N ? f.pop() : (r = {
                                    inArray: u,
                                    index: h,
                                    keys: l,
                                    edits: p,
                                    prev: r
                                }, l = (u = Array.isArray(d)) ? d : null !== (m = n[d.kind]) && void 0 !== m ? m : [], h = -1, p = [], s && y.push(s), s = d)
                            } while (void 0 !== r);
                            return 0 !== p.length ? p[p.length - 1][1] : e
                        }(e, es),
                        operationName: i
                    }
                };
            class ed extends Error {
                constructor(e, t) {
                    let n = `${ed.extractMessage(e)}: ${JSON.stringify({response:e,request:t})}`;
                    super(n), Object.setPrototypeOf(this, ed.prototype), this.response = e, this.request = t, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, ed)
                }
                static extractMessage(e) {
                    return e.errors ? .[0] ? .message ? ? `GraphQL Error (Code: ${e.status})`
                }
            }
            var ef = n(4098),
                ey = n.t(ef, 2);
            class eE {
                get type() {
                    return this._type
                }
                get id() {
                    return this._id
                }
                get payload() {
                    return this._payload
                }
                constructor(e, t, n) {
                    this._type = e, this._payload = t, this._id = n
                }
                get text() {
                    let e = {
                        type: this.type
                    };
                    return null != this.id && void 0 != this.id && (e.id = this.id), null != this.payload && void 0 != this.payload && (e.payload = this.payload), JSON.stringify(e)
                }
                static parse(e, t) {
                    let {
                        type: n,
                        payload: r,
                        id: i
                    } = JSON.parse(e);
                    return new eE(n, t(r), i)
                }
            }
            let ev = e => {
                    let t = {};
                    return e && ("undefined" != typeof Headers && e instanceof Headers || ey && ef.Headers && e instanceof ef.Headers ? t = m(e) : Array.isArray(e) ? e.forEach(([e, n]) => {
                        e && void 0 !== n && (t[e] = n)
                    }) : t = e), t
                },
                em = e => e.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim(),
                eT = e => {
                    if (!Array.isArray(e.query)) {
                        let t = [`query=${encodeURIComponent(em(e.query))}`];
                        return e.variables && t.push(`variables=${encodeURIComponent(e.jsonSerializer.stringify(e.variables))}`), e.operationName && t.push(`operationName=${encodeURIComponent(e.operationName)}`), t.join("&")
                    }
                    if (void 0 !== e.variables && !Array.isArray(e.variables)) throw Error("Cannot create query with given variable type, array expected");
                    let n = e.query.reduce((t, n, r) => (t.push({
                        query: em(n),
                        variables: e.variables ? e.jsonSerializer.stringify(e.variables[r]) : void 0
                    }), t), []);
                    return `query=${encodeURIComponent(e.jsonSerializer.stringify(n))}`
                },
                eN = e => async t => {
                    let n;
                    let {
                        url: i,
                        query: s,
                        variables: o,
                        operationName: a,
                        fetch: u,
                        fetchOptions: l,
                        middleware: c
                    } = t, h = { ...t.headers
                    }, p = "";
                    "POST" === e ? "string" == typeof(n = E(s, o, a, l.jsonSerializer)) && (h["Content-Type"] = "application/json") : p = eT({
                        query: s,
                        variables: o,
                        operationName: a,
                        jsonSerializer: l.jsonSerializer ? ? r
                    });
                    let d = {
                            method: e,
                            headers: h,
                            body: n,
                            ...l
                        },
                        f = i,
                        y = d;
                    if (c) {
                        let v = await Promise.resolve(c({ ...d,
                                url: i,
                                operationName: a,
                                variables: o
                            })),
                            {
                                url: m,
                                ...T
                            } = v;
                        f = m, y = T
                    }
                    return p && (f = `${f}?${p}`), await u(f, y)
                };
            class eI {
                constructor(e, t = {}) {
                    this.url = e, this.requestConfig = t, this.rawRequest = async (...e) => {
                        let [t, n, r] = e, i = N(t, n, r), {
                            headers: s,
                            fetch: o = ef,
                            method: a = "POST",
                            requestMiddleware: u,
                            responseMiddleware: l,
                            ...c
                        } = this.requestConfig, {
                            url: h
                        } = this;
                        void 0 !== i.signal && (c.signal = i.signal);
                        let {
                            operationName: p
                        } = ep(i.query);
                        return eb({
                            url: h,
                            query: i.query,
                            variables: i.variables,
                            headers: { ...ev(eO(s)),
                                ...ev(i.requestHeaders)
                            },
                            operationName: p,
                            fetch: o,
                            method: a,
                            fetchOptions: c,
                            middleware: u
                        }).then(e => (l && l(e), e)).catch(e => {
                            throw l && l(e), e
                        })
                    }
                }
                async request(e, ...t) {
                    let [n, r] = t, i = T(e, n, r), {
                        headers: s,
                        fetch: o = ef,
                        method: a = "POST",
                        requestMiddleware: u,
                        responseMiddleware: l,
                        ...c
                    } = this.requestConfig, {
                        url: h
                    } = this;
                    void 0 !== i.signal && (c.signal = i.signal);
                    let {
                        query: p,
                        operationName: d
                    } = ep(i.document);
                    return eb({
                        url: h,
                        query: p,
                        variables: i.variables,
                        headers: { ...ev(eO(s)),
                            ...ev(i.requestHeaders)
                        },
                        operationName: d,
                        fetch: o,
                        method: a,
                        fetchOptions: c,
                        middleware: u
                    }).then(e => (l && l(e), e.data)).catch(e => {
                        throw l && l(e), e
                    })
                }
                batchRequests(e, t) {
                    let n = I(e, t),
                        {
                            headers: r,
                            ...i
                        } = this.requestConfig;
                    void 0 !== n.signal && (i.signal = n.signal);
                    let s = n.documents.map(({
                            document: e
                        }) => ep(e).query),
                        o = n.documents.map(({
                            variables: e
                        }) => e);
                    return eb({
                        url: this.url,
                        query: s,
                        variables: o,
                        headers: { ...ev(eO(r)),
                            ...ev(n.requestHeaders)
                        },
                        operationName: void 0,
                        fetch: this.requestConfig.fetch ? ? ef,
                        method: this.requestConfig.method || "POST",
                        fetchOptions: i,
                        middleware: this.requestConfig.requestMiddleware
                    }).then(e => (this.requestConfig.responseMiddleware && this.requestConfig.responseMiddleware(e), e.data)).catch(e => {
                        throw this.requestConfig.responseMiddleware && this.requestConfig.responseMiddleware(e), e
                    })
                }
                setHeaders(e) {
                    return this.requestConfig.headers = e, this
                }
                setHeader(e, t) {
                    let {
                        headers: n
                    } = this.requestConfig;
                    return n ? n[e] = t : this.requestConfig.headers = {
                        [e]: t
                    }, this
                }
                setEndpoint(e) {
                    return this.url = e, this
                }
            }
            let eb = async e => {
                let {
                    query: t,
                    variables: n,
                    fetchOptions: i
                } = e, s = eN(v(e.method ? ? "post")), o = Array.isArray(e.query), a = await s(e), u = await eA(a, i.jsonSerializer ? ? r), l = Array.isArray(u) ? !u.some(({
                    data: e
                }) => !e) : Boolean(u.data), c = Array.isArray(u) || !u.errors || Array.isArray(u.errors) && !u.errors.length || "all" === i.errorPolicy || "ignore" === i.errorPolicy;
                if (a.ok && c && l) {
                    let {
                        errors: h,
                        ...p
                    } = (Array.isArray(u), u), d = "ignore" === i.errorPolicy ? p : u;
                    return { ...o ? {
                            data: d
                        } : d,
                        headers: a.headers,
                        status: a.status
                    }
                }
                throw new ed({ ..."string" == typeof u ? {
                        error: u
                    } : u,
                    status: a.status,
                    headers: a.headers
                }, {
                    query: t,
                    variables: n
                })
            };
            async function eg(e, t, ...n) {
                let r = b(e, t, ...n),
                    i = new eI(r.url);
                return i.request({ ...r
                })
            }
            let eA = async (e, t) => {
                    let n;
                    return (e.headers.forEach((e, t) => {
                        "content-type" === t.toLowerCase() && (n = e)
                    }), n && (n.toLowerCase().startsWith("application/json") || n.toLowerCase().startsWith("application/graphql+json") || n.toLowerCase().startsWith("application/graphql-response+json"))) ? t.parse(await e.text()) : e.text()
                },
                eO = e => "function" == typeof e ? e() : e
        },
        8100: function(e, t, n) {
            "use strict";
            n.d(t, {
                J$: function() {
                    return Y
                },
                ZP: function() {
                    return J
                }
            });
            var r, i = n(7294);
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            function s(e, t, n, r) {
                return new(n || (n = Promise))(function(i, s) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                })
            }

            function o(e, t) {
                var n, r, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, r = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (a) {
                                s = [6, a], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }
            var a = function() {},
                u = a(),
                l = Object,
                c = function(e) {
                    return e === u
                },
                h = function(e) {
                    return "function" == typeof e
                },
                p = function(e, t) {
                    return l.assign({}, e, t)
                },
                d = "undefined",
                f = function() {
                    return typeof window != d
                },
                y = new WeakMap,
                E = 0,
                v = function(e) {
                    var t, n, r = typeof e,
                        i = e && e.constructor,
                        s = i == Date;
                    if (l(e) !== e || s || i == RegExp) t = s ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = y.get(e)) return t;
                        if (t = ++E + "~", y.set(e, t), i == Array) {
                            for (n = 0, t = "@"; n < e.length; n++) t += v(e[n]) + ",";
                            y.set(e, t)
                        }
                        if (i == l) {
                            t = "#";
                            for (var o = l.keys(e).sort(); !c(n = o.pop());) c(e[n]) || (t += n + ":" + v(e[n]) + ",");
                            y.set(e, t)
                        }
                    }
                    return t
                },
                m = !0,
                T = f(),
                N = typeof document != d,
                I = T && window.addEventListener ? window.addEventListener.bind(window) : a,
                b = N ? document.addEventListener.bind(document) : a,
                g = T && window.removeEventListener ? window.removeEventListener.bind(window) : a,
                A = N ? document.removeEventListener.bind(document) : a,
                O = {
                    initFocus: function(e) {
                        return b("visibilitychange", e), I("focus", e),
                            function() {
                                A("visibilitychange", e), g("focus", e)
                            }
                    },
                    initReconnect: function(e) {
                        var t = function() {
                                m = !0, e()
                            },
                            n = function() {
                                m = !1
                            };
                        return I("online", t), I("offline", n),
                            function() {
                                g("online", t), g("offline", n)
                            }
                    }
                },
                x = !f() || "Deno" in window,
                _ = x ? i.useEffect : i.useLayoutEffect,
                D = "undefined" != typeof navigator && navigator.connection,
                k = !x && D && (["slow-2g", "2g"].includes(D.effectiveType) || D.saveData),
                S = function(e) {
                    if (h(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    var n = [].concat(e),
                        r = (e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? v(e) : "") ? "$swr$" + e : "";
                    return [e, n, r]
                },
                C = new WeakMap,
                w = function(e, t, n, r, i, s, o) {
                    void 0 === o && (o = !0);
                    var a = C.get(e),
                        u = a[0],
                        l = a[1],
                        c = a[3],
                        h = u[t],
                        p = l[t];
                    if (o && p)
                        for (var d = 0; d < p.length; ++d) p[d](n, r, i);
                    return s && (delete c[t], h && h[0]) ? h[0](2).then(function() {
                        return e.get(t)
                    }) : e.get(t)
                },
                R = 0,
                L = function() {
                    return ++R
                },
                F = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return s(void 0, void 0, void 0, function() {
                        var t, n, r, i, s, a, l, d, f, y, E, v, m, T, N, I, b, g, A, O;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (t = e[0], n = e[1], r = e[2], a = !!c((s = "boolean" == typeof(i = e[3]) ? {
                                            revalidate: i
                                        } : i || {}).populateCache) || s.populateCache, l = !1 !== s.revalidate, d = !1 !== s.rollbackOnError, f = s.optimisticData, E = (y = S(n))[0], v = y[2], !E) return [2];
                                    if (m = C.get(t)[2], e.length < 3) return [2, w(t, E, t.get(E), u, u, l, !0)];
                                    if (T = r, I = L(), m[E] = [I, 0], b = !c(f), g = t.get(E), b && (A = h(f) ? f(g) : f, t.set(E, A), w(t, E, A)), h(T)) try {
                                        T = T(t.get(E))
                                    } catch (x) {
                                        N = x
                                    }
                                    if (!(T && h(T.then))) return [3, 2];
                                    return [4, T.catch(function(e) {
                                        N = e
                                    })];
                                case 1:
                                    if (T = o.sent(), I !== m[E][0]) {
                                        if (N) throw N;
                                        return [2, T]
                                    }
                                    N && b && d && (a = !0, T = g, t.set(E, g)), o.label = 2;
                                case 2:
                                    return a && (N || (h(a) && (T = a(T, g)), t.set(E, T)), t.set(v, p(t.get(v), {
                                        error: N
                                    }))), m[E][1] = L(), [4, w(t, E, T, N, u, l, !!a)];
                                case 3:
                                    if (O = o.sent(), N) throw N;
                                    return [2, a ? O : T]
                            }
                        })
                    })
                },
                P = function(e, t) {
                    for (var n in e) e[n][0] && e[n][0](t)
                },
                B = function(e, t) {
                    if (!C.has(e)) {
                        var n = p(O, t),
                            r = {},
                            i = F.bind(u, e),
                            s = a;
                        if (C.set(e, [r, {}, {}, {}, i]), !x) {
                            var o = n.initFocus(setTimeout.bind(u, P.bind(u, r, 0))),
                                l = n.initReconnect(setTimeout.bind(u, P.bind(u, r, 1)));
                            s = function() {
                                o && o(), l && l(), C.delete(e)
                            }
                        }
                        return [e, i, s]
                    }
                    return [e, C.get(e)[4]]
                },
                U = B(new Map),
                M = U[0],
                V = p({
                    onLoadingSlow: a,
                    onSuccess: a,
                    onError: a,
                    onErrorRetry: function(e, t, n, r, i) {
                        var s = n.errorRetryCount,
                            o = i.retryCount,
                            a = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
                        (c(s) || !(o > s)) && setTimeout(r, a, i)
                    },
                    onDiscarded: a,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: k ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: k ? 5e3 : 3e3,
                    compare: function(e, t) {
                        return v(e) == v(t)
                    },
                    isPaused: function() {
                        return !1
                    },
                    cache: M,
                    mutate: U[1],
                    fallback: {}
                }, {
                    isOnline: function() {
                        return m
                    },
                    isVisible: function() {
                        var e = N && document.visibilityState;
                        return c(e) || "hidden" !== e
                    }
                }),
                j = function(e, t) {
                    var n = p(e, t);
                    if (t) {
                        var r = e.use,
                            i = e.fallback,
                            s = t.use,
                            o = t.fallback;
                        r && s && (n.use = r.concat(s)), i && o && (n.fallback = p(i, o))
                    }
                    return n
                },
                q = (0, i.createContext)({}),
                $ = function(e, t) {
                    var n = (0, i.useState)({})[1],
                        r = (0, i.useRef)(e),
                        s = (0, i.useRef)({
                            data: !1,
                            error: !1,
                            isValidating: !1
                        }),
                        o = (0, i.useCallback)(function(e) {
                            var i = !1,
                                o = r.current;
                            for (var a in e) {
                                var u = a;
                                o[u] !== e[u] && (o[u] = e[u], s.current[u] && (i = !0))
                            }
                            i && !t.current && n({})
                        }, []);
                    return _(function() {
                        r.current = e
                    }), [r, s.current, o]
                },
                K = function(e, t, n) {
                    var r = t[e] || (t[e] = []);
                    return r.push(n),
                        function() {
                            var e = r.indexOf(n);
                            e >= 0 && (r[e] = r[r.length - 1], r.pop())
                        }
                },
                G = {
                    dedupe: !0
                },
                Y = l.defineProperty(function(e) {
                    var t = e.value,
                        n = j((0, i.useContext)(q), t),
                        r = t && t.provider,
                        s = (0, i.useState)(function() {
                            return r ? B(r(n.cache || M), t) : u
                        })[0];
                    return s && (n.cache = s[0], n.mutate = s[1]), _(function() {
                        return s ? s[2] : u
                    }, []), (0, i.createElement)(q.Provider, p(e, {
                        value: n
                    }))
                }, "default", {
                    value: V
                }),
                J = (r = function(e, t, n) {
                    var r = n.cache,
                        a = n.compare,
                        l = n.fallbackData,
                        y = n.suspense,
                        E = n.revalidateOnMount,
                        v = n.refreshInterval,
                        m = n.refreshWhenHidden,
                        T = n.refreshWhenOffline,
                        N = C.get(r),
                        I = N[0],
                        b = N[1],
                        g = N[2],
                        A = N[3],
                        O = S(e),
                        D = O[0],
                        k = O[1],
                        R = O[2],
                        P = (0, i.useRef)(!1),
                        B = (0, i.useRef)(!1),
                        U = (0, i.useRef)(D),
                        M = (0, i.useRef)(t),
                        V = (0, i.useRef)(n),
                        j = function() {
                            return V.current
                        },
                        q = function() {
                            return j().isVisible() && j().isOnline()
                        },
                        Y = function(e) {
                            return r.set(R, p(r.get(R), e))
                        },
                        J = r.get(D),
                        H = c(l) ? n.fallback[D] : l,
                        z = c(J) ? H : J,
                        X = r.get(R) || {},
                        Q = X.error,
                        W = !P.current,
                        Z = function() {
                            return W && !c(E) ? E : !j().isPaused() && (y ? !c(z) && n.revalidateIfStale : c(z) || n.revalidateIfStale)
                        },
                        ee = !!D && !!t && (!!X.isValidating || W && Z()),
                        et = $({
                            data: z,
                            error: Q,
                            isValidating: ee
                        }, B),
                        en = et[0],
                        er = et[1],
                        ei = et[2],
                        es = (0, i.useCallback)(function(e) {
                            return s(void 0, void 0, void 0, function() {
                                var t, i, s, l, p, d, f, y, E, v, m, T, N;
                                return o(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (t = M.current, !D || !t || B.current || j().isPaused()) return [2, !1];
                                            l = !0, p = e || {}, d = !A[D] || !p.dedupe, f = function() {
                                                return !B.current && D === U.current && P.current
                                            }, y = function() {
                                                var e = A[D];
                                                e && e[1] === s && delete A[D]
                                            }, E = {
                                                isValidating: !1
                                            }, v = function() {
                                                Y({
                                                    isValidating: !1
                                                }), f() && ei(E)
                                            }, Y({
                                                isValidating: !0
                                            }), ei({
                                                isValidating: !0
                                            }), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), d && (w(r, D, en.current.data, en.current.error, !0), n.loadingTimeout && !r.get(D) && setTimeout(function() {
                                                l && f() && j().onLoadingSlow(D, n)
                                            }, n.loadingTimeout), A[D] = [t.apply(void 0, k), L()]), i = (N = A[D])[0], s = N[1], [4, i];
                                        case 2:
                                            if (i = o.sent(), d && setTimeout(y, n.dedupingInterval), !A[D] || A[D][1] !== s) return d && f() && j().onDiscarded(D), [2, !1];
                                            if (Y({
                                                    error: u
                                                }), E.error = u, !c(m = g[D]) && (s <= m[0] || s <= m[1] || 0 === m[1])) return v(), d && f() && j().onDiscarded(D), [2, !1];
                                            return a(en.current.data, i) ? E.data = en.current.data : E.data = i, a(r.get(D), i) || r.set(D, i), d && f() && j().onSuccess(i, D, n), [3, 4];
                                        case 3:
                                            return T = o.sent(), y(), !j().isPaused() && (Y({
                                                error: T
                                            }), E.error = T, d && f() && (j().onError(T, D, n), ("boolean" == typeof n.shouldRetryOnError && n.shouldRetryOnError || h(n.shouldRetryOnError) && n.shouldRetryOnError(T)) && q() && j().onErrorRetry(T, D, n, es, {
                                                retryCount: (p.retryCount || 0) + 1,
                                                dedupe: !0
                                            }))), [3, 4];
                                        case 4:
                                            return l = !1, v(), f() && d && w(r, D, E.data, E.error, !1), [2, !0]
                                    }
                                })
                            })
                        }, [D]),
                        eo = (0, i.useCallback)(F.bind(u, r, function() {
                            return U.current
                        }), []);
                    if (_(function() {
                            M.current = t, V.current = n
                        }), _(function() {
                            if (D) {
                                var e = D !== U.current,
                                    t = es.bind(u, G),
                                    n = 0,
                                    r = K(D, b, function(e, t, n) {
                                        ei(p({
                                            error: t,
                                            isValidating: n
                                        }, a(en.current.data, e) ? u : {
                                            data: e
                                        }))
                                    }),
                                    i = K(D, I, function(e) {
                                        if (0 == e) {
                                            var r = Date.now();
                                            j().revalidateOnFocus && r > n && q() && (n = r + j().focusThrottleInterval, t())
                                        } else if (1 == e) j().revalidateOnReconnect && q() && t();
                                        else if (2 == e) return es()
                                    });
                                return B.current = !1, U.current = D, P.current = !0, e && ei({
                                        data: z,
                                        error: Q,
                                        isValidating: ee
                                    }), Z() && (c(z) || x ? t() : f() && typeof window.requestAnimationFrame != d ? window.requestAnimationFrame(t) : setTimeout(t, 1)),
                                    function() {
                                        B.current = !0, r(), i()
                                    }
                            }
                        }, [D, es]), _(function() {
                            var e;

                            function t() {
                                var t = h(v) ? v(z) : v;
                                t && -1 !== e && (e = setTimeout(n, t))
                            }

                            function n() {
                                !en.current.error && (m || j().isVisible()) && (T || j().isOnline()) ? es(G).then(t) : t()
                            }
                            return t(),
                                function() {
                                    e && (clearTimeout(e), e = -1)
                                }
                        }, [v, m, T, es]), (0, i.useDebugValue)(z), y && c(z) && D) throw M.current = t, V.current = n, B.current = !1, c(Q) ? es(G) : Q;
                    return {
                        mutate: eo,
                        get data() {
                            return er.data = !0, z
                        },
                        get error() {
                            return er.error = !0, Q
                        },
                        get isValidating() {
                            return er.isValidating = !0, ee
                        }
                    }
                }, function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = p(V, (0, i.useContext)(q)),
                        s = h(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                        o = s[0],
                        a = s[1],
                        u = j(n, s[2]),
                        l = r,
                        c = u.use;
                    if (c)
                        for (var d = c.length; d-- > 0;) l = c[d](l);
                    return l(o, a || u.fetcher, u)
                })
        }
    }
]);