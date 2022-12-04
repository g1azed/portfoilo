/*! For license information please see main.js.LICENSE.txt */
(() => {
  var t = {
      69: function (t) {
        t.exports = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          function e(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          }
          function n() {
            return (n =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }).apply(this, arguments);
          }
          function r(t, e) {
            (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = e);
          }
          function i(t) {
            return (i = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function o(t, e) {
            return (o =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function s(t, e, n) {
            return (s = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
              ? Reflect.construct
              : function (t, e, n) {
                  var r = [null];
                  r.push.apply(r, e);
                  var i = new (Function.bind.apply(t, r))();
                  return n && o(i, n.prototype), i;
                }).apply(null, arguments);
          }
          function a(t) {
            var e = "function" == typeof Map ? new Map() : void 0;
            return (a = function (t) {
              if (
                null === t ||
                -1 === Function.toString.call(t).indexOf("[native code]")
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return s(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            })(t);
          }
          function u(t, e) {
            try {
              var n = t();
            } catch (t) {
              return e(t);
            }
            return n && n.then ? n.then(void 0, e) : n;
          }
          "undefined" != typeof Symbol &&
            (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
            "undefined" != typeof Symbol &&
              (Symbol.asyncIterator ||
                (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
          var c;
          !(function (t) {
            (t[(t.off = 0)] = "off"),
              (t[(t.error = 1)] = "error"),
              (t[(t.warning = 2)] = "warning"),
              (t[(t.info = 3)] = "info"),
              (t[(t.debug = 4)] = "debug");
          })(c || (c = {}));
          var l = c.off,
            h = (function () {
              function t(t) {
                this.t = t;
              }
              (t.getLevel = function () {
                return l;
              }),
                (t.setLevel = function (t) {
                  return (l = c[t]);
                });
              var e = t.prototype;
              return (
                (e.error = function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this.i(console.error, c.error, e);
                }),
                (e.warn = function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this.i(console.warn, c.warning, e);
                }),
                (e.info = function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this.i(console.info, c.info, e);
                }),
                (e.debug = function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this.i(console.log, c.debug, e);
                }),
                (e.i = function (e, n, r) {
                  n <= t.getLevel() &&
                    e.apply(console, ["[" + this.t + "] "].concat(r));
                }),
                t
              );
            })(),
            f = T,
            d = _,
            p = y,
            m = b,
            g = A,
            v = new RegExp(
              [
                "(\\\\.)",
                "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
              ].join("|"),
              "g"
            );
          function y(t, e) {
            for (
              var n,
                r = [],
                i = 0,
                o = 0,
                s = "",
                a = (e && e.delimiter) || "/",
                u = (e && e.whitelist) || void 0,
                c = !1;
              null !== (n = v.exec(t));

            ) {
              var l = n[0],
                h = n[1],
                f = n.index;
              if (((s += t.slice(o, f)), (o = f + l.length), h))
                (s += h[1]), (c = !0);
              else {
                var d = "",
                  p = n[2],
                  m = n[3],
                  g = n[4],
                  y = n[5];
                if (!c && s.length) {
                  var _ = s.length - 1,
                    b = s[_];
                  (!u || u.indexOf(b) > -1) && ((d = b), (s = s.slice(0, _)));
                }
                s && (r.push(s), (s = ""), (c = !1));
                var E = m || g,
                  A = d || a;
                r.push({
                  name: p || i++,
                  prefix: d,
                  delimiter: A,
                  optional: "?" === y || "*" === y,
                  repeat: "+" === y || "*" === y,
                  pattern: E ? w(E) : "[^" + x(A === a ? A : A + a) + "]+?",
                });
              }
            }
            return (s || o < t.length) && r.push(s + t.substr(o)), r;
          }
          function _(t, e) {
            return function (n, r) {
              var i = t.exec(n);
              if (!i) return !1;
              for (
                var o = i[0],
                  s = i.index,
                  a = {},
                  u = (r && r.decode) || decodeURIComponent,
                  c = 1;
                c < i.length;
                c++
              )
                if (void 0 !== i[c]) {
                  var l = e[c - 1];
                  a[l.name] = l.repeat
                    ? i[c].split(l.delimiter).map(function (t) {
                        return u(t, l);
                      })
                    : u(i[c], l);
                }
              return { path: o, index: s, params: a };
            };
          }
          function b(t, e) {
            for (var n = new Array(t.length), r = 0; r < t.length; r++)
              "object" == typeof t[r] &&
                (n[r] = new RegExp("^(?:" + t[r].pattern + ")$", E(e)));
            return function (e, r) {
              for (
                var i = "",
                  o = (r && r.encode) || encodeURIComponent,
                  s = !r || !1 !== r.validate,
                  a = 0;
                a < t.length;
                a++
              ) {
                var u = t[a];
                if ("string" != typeof u) {
                  var c,
                    l = e ? e[u.name] : void 0;
                  if (Array.isArray(l)) {
                    if (!u.repeat)
                      throw new TypeError(
                        'Expected "' + u.name + '" to not repeat, but got array'
                      );
                    if (0 === l.length) {
                      if (u.optional) continue;
                      throw new TypeError(
                        'Expected "' + u.name + '" to not be empty'
                      );
                    }
                    for (var h = 0; h < l.length; h++) {
                      if (((c = o(l[h], u)), s && !n[a].test(c)))
                        throw new TypeError(
                          'Expected all "' +
                            u.name +
                            '" to match "' +
                            u.pattern +
                            '"'
                        );
                      i += (0 === h ? u.prefix : u.delimiter) + c;
                    }
                  } else if (
                    "string" != typeof l &&
                    "number" != typeof l &&
                    "boolean" != typeof l
                  ) {
                    if (!u.optional)
                      throw new TypeError(
                        'Expected "' +
                          u.name +
                          '" to be ' +
                          (u.repeat ? "an array" : "a string")
                      );
                  } else {
                    if (((c = o(String(l), u)), s && !n[a].test(c)))
                      throw new TypeError(
                        'Expected "' +
                          u.name +
                          '" to match "' +
                          u.pattern +
                          '", but got "' +
                          c +
                          '"'
                      );
                    i += u.prefix + c;
                  }
                } else i += u;
              }
              return i;
            };
          }
          function x(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
          }
          function w(t) {
            return t.replace(/([=!:$/()])/g, "\\$1");
          }
          function E(t) {
            return t && t.sensitive ? "" : "i";
          }
          function A(t, e, n) {
            for (
              var r = (n = n || {}).strict,
                i = !1 !== n.start,
                o = !1 !== n.end,
                s = n.delimiter || "/",
                a = []
                  .concat(n.endsWith || [])
                  .map(x)
                  .concat("$")
                  .join("|"),
                u = i ? "^" : "",
                c = 0;
              c < t.length;
              c++
            ) {
              var l = t[c];
              if ("string" == typeof l) u += x(l);
              else {
                var h = l.repeat
                  ? "(?:" +
                    l.pattern +
                    ")(?:" +
                    x(l.delimiter) +
                    "(?:" +
                    l.pattern +
                    "))*"
                  : l.pattern;
                e && e.push(l),
                  (u += l.optional
                    ? l.prefix
                      ? "(?:" + x(l.prefix) + "(" + h + "))?"
                      : "(" + h + ")?"
                    : x(l.prefix) + "(" + h + ")");
              }
            }
            if (o)
              r || (u += "(?:" + x(s) + ")?"),
                (u += "$" === a ? "$" : "(?=" + a + ")");
            else {
              var f = t[t.length - 1],
                d = "string" == typeof f ? f[f.length - 1] === s : void 0 === f;
              r || (u += "(?:" + x(s) + "(?=" + a + "))?"),
                d || (u += "(?=" + x(s) + "|" + a + ")");
            }
            return new RegExp(u, E(n));
          }
          function T(t, e, n) {
            return t instanceof RegExp
              ? (function (t, e) {
                  if (!e) return t;
                  var n = t.source.match(/\((?!\?)/g);
                  if (n)
                    for (var r = 0; r < n.length; r++)
                      e.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        pattern: null,
                      });
                  return t;
                })(t, e)
              : Array.isArray(t)
              ? (function (t, e, n) {
                  for (var r = [], i = 0; i < t.length; i++)
                    r.push(T(t[i], e, n).source);
                  return new RegExp("(?:" + r.join("|") + ")", E(n));
                })(t, e, n)
              : (function (t, e, n) {
                  return A(y(t, n), e, n);
                })(t, e, n);
          }
          (f.match = function (t, e) {
            var n = [];
            return _(T(t, n, e), n);
          }),
            (f.regexpToFunction = d),
            (f.parse = p),
            (f.compile = function (t, e) {
              return b(y(t, e), e);
            }),
            (f.tokensToFunction = m),
            (f.tokensToRegExp = g);
          var P = {
              container: "container",
              history: "history",
              namespace: "namespace",
              prefix: "data-barba",
              prevent: "prevent",
              wrapper: "wrapper",
            },
            S = new ((function () {
              function t() {
                (this.o = P), (this.u = new DOMParser());
              }
              var e = t.prototype;
              return (
                (e.toString = function (t) {
                  return t.outerHTML;
                }),
                (e.toDocument = function (t) {
                  return this.u.parseFromString(t, "text/html");
                }),
                (e.toElement = function (t) {
                  var e = document.createElement("div");
                  return (e.innerHTML = t), e;
                }),
                (e.getHtml = function (t) {
                  return (
                    void 0 === t && (t = document),
                    this.toString(t.documentElement)
                  );
                }),
                (e.getWrapper = function (t) {
                  return (
                    void 0 === t && (t = document),
                    t.querySelector(
                      "[" + this.o.prefix + '="' + this.o.wrapper + '"]'
                    )
                  );
                }),
                (e.getContainer = function (t) {
                  return (
                    void 0 === t && (t = document),
                    t.querySelector(
                      "[" + this.o.prefix + '="' + this.o.container + '"]'
                    )
                  );
                }),
                (e.removeContainer = function (t) {
                  document.body.contains(t) && t.parentNode.removeChild(t);
                }),
                (e.addContainer = function (t, e) {
                  var n = this.getContainer();
                  n ? this.s(t, n) : e.appendChild(t);
                }),
                (e.getNamespace = function (t) {
                  void 0 === t && (t = document);
                  var e = t.querySelector(
                    "[" + this.o.prefix + "-" + this.o.namespace + "]"
                  );
                  return e
                    ? e.getAttribute(this.o.prefix + "-" + this.o.namespace)
                    : null;
                }),
                (e.getHref = function (t) {
                  if (t.tagName && "a" === t.tagName.toLowerCase()) {
                    if ("string" == typeof t.href) return t.href;
                    var e =
                      t.getAttribute("href") || t.getAttribute("xlink:href");
                    if (e) return this.resolveUrl(e.baseVal || e);
                  }
                  return null;
                }),
                (e.resolveUrl = function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  var r = e.length;
                  if (0 === r)
                    throw new Error(
                      "resolveUrl requires at least one argument; got none."
                    );
                  var i = document.createElement("base");
                  if (((i.href = arguments[0]), 1 === r)) return i.href;
                  var o = document.getElementsByTagName("head")[0];
                  o.insertBefore(i, o.firstChild);
                  for (
                    var s, a = document.createElement("a"), u = 1;
                    u < r;
                    u++
                  )
                    (a.href = arguments[u]), (i.href = s = a.href);
                  return o.removeChild(i), s;
                }),
                (e.s = function (t, e) {
                  e.parentNode.insertBefore(t, e.nextSibling);
                }),
                t
              );
            })())(),
            k = new ((function () {
              function t() {
                (this.h = []), (this.v = -1);
              }
              var r = t.prototype;
              return (
                (r.init = function (t, e) {
                  this.l = "barba";
                  var n = {
                    ns: e,
                    scroll: { x: window.scrollX, y: window.scrollY },
                    url: t,
                  };
                  this.h.push(n), (this.v = 0);
                  var r = { from: this.l, index: 0, states: [].concat(this.h) };
                  window.history && window.history.replaceState(r, "", t);
                }),
                (r.change = function (t, e, n) {
                  if (n && n.state) {
                    var r = n.state,
                      i = r.index;
                    (e = this.m(this.v - i)),
                      this.replace(r.states),
                      (this.v = i);
                  } else this.add(t, e);
                  return e;
                }),
                (r.add = function (t, e) {
                  var n = this.size,
                    r = this.p(e),
                    i = {
                      ns: "tmp",
                      scroll: { x: window.scrollX, y: window.scrollY },
                      url: t,
                    };
                  this.h.push(i), (this.v = n);
                  var o = { from: this.l, index: n, states: [].concat(this.h) };
                  switch (r) {
                    case "push":
                      window.history && window.history.pushState(o, "", t);
                      break;
                    case "replace":
                      window.history && window.history.replaceState(o, "", t);
                  }
                }),
                (r.update = function (t, e) {
                  var r = e || this.v,
                    i = n({}, this.get(r), {}, t);
                  this.set(r, i);
                }),
                (r.remove = function (t) {
                  t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
                }),
                (r.clear = function () {
                  (this.h = []), (this.v = -1);
                }),
                (r.replace = function (t) {
                  this.h = t;
                }),
                (r.get = function (t) {
                  return this.h[t];
                }),
                (r.set = function (t, e) {
                  return (this.h[t] = e);
                }),
                (r.p = function (t) {
                  var e = "push",
                    n = t,
                    r = P.prefix + "-" + P.history;
                  return (
                    n.hasAttribute &&
                      n.hasAttribute(r) &&
                      (e = n.getAttribute(r)),
                    e
                  );
                }),
                (r.m = function (t) {
                  return Math.abs(t) > 1
                    ? t > 0
                      ? "forward"
                      : "back"
                    : 0 === t
                    ? "popstate"
                    : t > 0
                    ? "back"
                    : "forward";
                }),
                e(t, [
                  {
                    key: "current",
                    get: function () {
                      return this.h[this.v];
                    },
                  },
                  {
                    key: "state",
                    get: function () {
                      return this.h[this.h.length - 1];
                    },
                  },
                  {
                    key: "previous",
                    get: function () {
                      return this.v < 1 ? null : this.h[this.v - 1];
                    },
                  },
                  {
                    key: "size",
                    get: function () {
                      return this.h.length;
                    },
                  },
                ]),
                t
              );
            })())(),
            M = function (t, e) {
              try {
                var n = (function () {
                  if (!e.next.html)
                    return Promise.resolve(t).then(function (t) {
                      var n = e.next;
                      if (t) {
                        var r = S.toElement(t);
                        (n.namespace = S.getNamespace(r)),
                          (n.container = S.getContainer(r)),
                          (n.html = t),
                          k.update({ ns: n.namespace });
                        var i = S.toDocument(t);
                        document.title = i.title;
                      }
                    });
                })();
                return Promise.resolve(
                  n && n.then ? n.then(function () {}) : void 0
                );
              } catch (t) {
                return Promise.reject(t);
              }
            },
            C = f,
            O = {
              __proto__: null,
              update: M,
              nextTick: function () {
                return new Promise(function (t) {
                  window.requestAnimationFrame(t);
                });
              },
              pathToRegexp: C,
            },
            F = function () {
              return window.location.origin;
            },
            $ = function (t) {
              return void 0 === t && (t = window.location.href), I(t).port;
            },
            I = function (t) {
              var e,
                n = t.match(/:\d+/);
              if (null === n)
                /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
              else {
                var r = n[0].substring(1);
                e = parseInt(r, 10);
              }
              var i,
                o = t.replace(F(), ""),
                s = {},
                a = o.indexOf("#");
              a >= 0 && ((i = o.slice(a + 1)), (o = o.slice(0, a)));
              var u = o.indexOf("?");
              return (
                u >= 0 && ((s = R(o.slice(u + 1))), (o = o.slice(0, u))),
                { hash: i, path: o, port: e, query: s }
              );
            },
            R = function (t) {
              return t.split("&").reduce(function (t, e) {
                var n = e.split("=");
                return (t[n[0]] = n[1]), t;
              }, {});
            },
            z = function (t) {
              return (
                void 0 === t && (t = window.location.href),
                t.replace(/(\/#.*|\/|#.*)$/, "")
              );
            },
            D = {
              __proto__: null,
              getHref: function () {
                return window.location.href;
              },
              getOrigin: F,
              getPort: $,
              getPath: function (t) {
                return void 0 === t && (t = window.location.href), I(t).path;
              },
              parse: I,
              parseQuery: R,
              clean: z,
            };
          function L(t, e, n) {
            return (
              void 0 === e && (e = 2e3),
              new Promise(function (r, i) {
                var o = new XMLHttpRequest();
                (o.onreadystatechange = function () {
                  if (o.readyState === XMLHttpRequest.DONE)
                    if (200 === o.status) r(o.responseText);
                    else if (o.status) {
                      var e = { status: o.status, statusText: o.statusText };
                      n(t, e), i(e);
                    }
                }),
                  (o.ontimeout = function () {
                    var r = new Error("Timeout error [" + e + "]");
                    n(t, r), i(r);
                  }),
                  (o.onerror = function () {
                    var e = new Error("Fetch error");
                    n(t, e), i(e);
                  }),
                  o.open("GET", t),
                  (o.timeout = e),
                  o.setRequestHeader(
                    "Accept",
                    "text/html,application/xhtml+xml,application/xml"
                  ),
                  o.setRequestHeader("x-barba", "yes"),
                  o.send();
              })
            );
          }
          var j = function (t) {
            return (
              !!t &&
              ("object" == typeof t || "function" == typeof t) &&
              "function" == typeof t.then
            );
          };
          function B(t, e) {
            return (
              void 0 === e && (e = {}),
              function () {
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                var o = !1,
                  s = new Promise(function (n, i) {
                    e.async = function () {
                      return (
                        (o = !0),
                        function (t, e) {
                          t ? i(t) : n(e);
                        }
                      );
                    };
                    var s = t.apply(e, r);
                    o || (j(s) ? s.then(n, i) : n(s));
                  });
                return s;
              }
            );
          }
          var q = new ((function (t) {
              function e() {
                var e;
                return (
                  ((e = t.call(this) || this).logger = new h("@barba/core")),
                  (e.all = [
                    "ready",
                    "page",
                    "reset",
                    "currentAdded",
                    "currentRemoved",
                    "nextAdded",
                    "nextRemoved",
                    "beforeOnce",
                    "once",
                    "afterOnce",
                    "before",
                    "beforeLeave",
                    "leave",
                    "afterLeave",
                    "beforeEnter",
                    "enter",
                    "afterEnter",
                    "after",
                  ]),
                  (e.registered = new Map()),
                  e.init(),
                  e
                );
              }
              r(e, t);
              var n = e.prototype;
              return (
                (n.init = function () {
                  var t = this;
                  this.registered.clear(),
                    this.all.forEach(function (e) {
                      t[e] ||
                        (t[e] = function (n, r) {
                          t.registered.has(e) || t.registered.set(e, new Set()),
                            t.registered.get(e).add({ ctx: r || {}, fn: n });
                        });
                    });
                }),
                (n.do = function (t) {
                  for (
                    var e = this,
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      i = 1;
                    i < n;
                    i++
                  )
                    r[i - 1] = arguments[i];
                  if (this.registered.has(t)) {
                    var o = Promise.resolve();
                    return (
                      this.registered.get(t).forEach(function (t) {
                        o = o.then(function () {
                          return B(t.fn, t.ctx).apply(void 0, r);
                        });
                      }),
                      o.catch(function (n) {
                        e.logger.debug("Hook error [" + t + "]"),
                          e.logger.error(n);
                      })
                    );
                  }
                  return Promise.resolve();
                }),
                (n.clear = function () {
                  var t = this;
                  this.all.forEach(function (e) {
                    delete t[e];
                  }),
                    this.init();
                }),
                (n.help = function () {
                  this.logger.info("Available hooks: " + this.all.join(","));
                  var t = [];
                  this.registered.forEach(function (e, n) {
                    return t.push(n);
                  }),
                    this.logger.info("Registered hooks: " + t.join(","));
                }),
                e
              );
            })(function () {}))(),
            U = (function () {
              function t(t) {
                if (((this.P = []), "boolean" == typeof t)) this.g = t;
                else {
                  var e = Array.isArray(t) ? t : [t];
                  this.P = e.map(function (t) {
                    return C(t);
                  });
                }
              }
              return (
                (t.prototype.checkHref = function (t) {
                  if ("boolean" == typeof this.g) return this.g;
                  var e = I(t).path;
                  return this.P.some(function (t) {
                    return null !== t.exec(e);
                  });
                }),
                t
              );
            })(),
            N = (function (t) {
              function e(e) {
                var n;
                return ((n = t.call(this, e) || this).k = new Map()), n;
              }
              r(e, t);
              var i = e.prototype;
              return (
                (i.set = function (t, e, n) {
                  return (
                    this.k.set(t, { action: n, request: e }),
                    { action: n, request: e }
                  );
                }),
                (i.get = function (t) {
                  return this.k.get(t);
                }),
                (i.getRequest = function (t) {
                  return this.k.get(t).request;
                }),
                (i.getAction = function (t) {
                  return this.k.get(t).action;
                }),
                (i.has = function (t) {
                  return !this.checkHref(t) && this.k.has(t);
                }),
                (i.delete = function (t) {
                  return this.k.delete(t);
                }),
                (i.update = function (t, e) {
                  var r = n({}, this.k.get(t), {}, e);
                  return this.k.set(t, r), r;
                }),
                e
              );
            })(U),
            V = function () {
              return !window.history.pushState;
            },
            W = function (t) {
              return !t.el || !t.href;
            },
            H = function (t) {
              var e = t.event;
              return (
                e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
              );
            },
            Y = function (t) {
              var e = t.el;
              return e.hasAttribute("target") && "_blank" === e.target;
            },
            X = function (t) {
              var e = t.el;
              return (
                (void 0 !== e.protocol &&
                  window.location.protocol !== e.protocol) ||
                (void 0 !== e.hostname &&
                  window.location.hostname !== e.hostname)
              );
            },
            K = function (t) {
              var e = t.el;
              return void 0 !== e.port && $() !== $(e.href);
            },
            G = function (t) {
              var e = t.el;
              return (
                e.getAttribute && "string" == typeof e.getAttribute("download")
              );
            },
            Z = function (t) {
              return t.el.hasAttribute(P.prefix + "-" + P.prevent);
            },
            Q = function (t) {
              return Boolean(
                t.el.closest("[" + P.prefix + "-" + P.prevent + '="all"]')
              );
            },
            J = function (t) {
              var e = t.href;
              return z(e) === z() && $(e) === $();
            },
            tt = (function (t) {
              function e(e) {
                var n;
                return (
                  ((n = t.call(this, e) || this).suite = []),
                  (n.tests = new Map()),
                  n.init(),
                  n
                );
              }
              r(e, t);
              var n = e.prototype;
              return (
                (n.init = function () {
                  this.add("pushState", V),
                    this.add("exists", W),
                    this.add("newTab", H),
                    this.add("blank", Y),
                    this.add("corsDomain", X),
                    this.add("corsPort", K),
                    this.add("download", G),
                    this.add("preventSelf", Z),
                    this.add("preventAll", Q),
                    this.add("sameUrl", J, !1);
                }),
                (n.add = function (t, e, n) {
                  void 0 === n && (n = !0),
                    this.tests.set(t, e),
                    n && this.suite.push(t);
                }),
                (n.run = function (t, e, n, r) {
                  return this.tests.get(t)({ el: e, event: n, href: r });
                }),
                (n.checkLink = function (t, e, n) {
                  var r = this;
                  return this.suite.some(function (i) {
                    return r.run(i, t, e, n);
                  });
                }),
                e
              );
            })(U),
            et = (function (t) {
              function e(n, r) {
                var i;
                void 0 === r && (r = "Barba error");
                for (
                  var o = arguments.length,
                    s = new Array(o > 2 ? o - 2 : 0),
                    a = 2;
                  a < o;
                  a++
                )
                  s[a - 2] = arguments[a];
                return (
                  ((i = t.call.apply(t, [this].concat(s)) || this).error = n),
                  (i.label = r),
                  Error.captureStackTrace &&
                    Error.captureStackTrace(
                      (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return t;
                      })(i),
                      e
                    ),
                  (i.name = "BarbaError"),
                  i
                );
              }
              return r(e, t), e;
            })(a(Error)),
            nt = (function () {
              function t(t) {
                void 0 === t && (t = []),
                  (this.logger = new h("@barba/core")),
                  (this.all = []),
                  (this.page = []),
                  (this.once = []),
                  (this.A = [
                    { name: "namespace", type: "strings" },
                    { name: "custom", type: "function" },
                  ]),
                  t && (this.all = this.all.concat(t)),
                  this.update();
              }
              var e = t.prototype;
              return (
                (e.add = function (t, e) {
                  "rule" === t
                    ? this.A.splice(e.position || 0, 0, e.value)
                    : this.all.push(e),
                    this.update();
                }),
                (e.resolve = function (t, e) {
                  var n = this;
                  void 0 === e && (e = {});
                  var r = e.once ? this.once : this.page;
                  r = r.filter(
                    e.self
                      ? function (t) {
                          return t.name && "self" === t.name;
                        }
                      : function (t) {
                          return !t.name || "self" !== t.name;
                        }
                  );
                  var i = new Map(),
                    o = r.find(function (r) {
                      var o = !0,
                        s = {};
                      return (
                        !(!e.self || "self" !== r.name) ||
                        (n.A.reverse().forEach(function (e) {
                          o &&
                            ((o = n.R(r, e, t, s)),
                            r.from &&
                              r.to &&
                              (o =
                                n.R(r, e, t, s, "from") &&
                                n.R(r, e, t, s, "to")),
                            r.from && !r.to && (o = n.R(r, e, t, s, "from")),
                            !r.from && r.to && (o = n.R(r, e, t, s, "to")));
                        }),
                        i.set(r, s),
                        o)
                      );
                    }),
                    s = i.get(o),
                    a = [];
                  if (
                    (a.push(e.once ? "once" : "page"),
                    e.self && a.push("self"),
                    s)
                  ) {
                    var u,
                      c = [o];
                    Object.keys(s).length > 0 && c.push(s),
                      (u = this.logger).info.apply(
                        u,
                        ["Transition found [" + a.join(",") + "]"].concat(c)
                      );
                  } else
                    this.logger.info(
                      "No transition found [" + a.join(",") + "]"
                    );
                  return o;
                }),
                (e.update = function () {
                  var t = this;
                  (this.all = this.all
                    .map(function (e) {
                      return t.T(e);
                    })
                    .sort(function (t, e) {
                      return t.priority - e.priority;
                    })
                    .reverse()
                    .map(function (t) {
                      return delete t.priority, t;
                    })),
                    (this.page = this.all.filter(function (t) {
                      return void 0 !== t.leave || void 0 !== t.enter;
                    })),
                    (this.once = this.all.filter(function (t) {
                      return void 0 !== t.once;
                    }));
                }),
                (e.R = function (t, e, n, r, i) {
                  var o = !0,
                    s = !1,
                    a = t,
                    u = e.name,
                    c = u,
                    l = u,
                    h = u,
                    f = i ? a[i] : a,
                    d = "to" === i ? n.next : n.current;
                  if (i ? f && f[u] : f[u]) {
                    switch (e.type) {
                      case "strings":
                      default:
                        var p = Array.isArray(f[c]) ? f[c] : [f[c]];
                        d[c] && -1 !== p.indexOf(d[c]) && (s = !0),
                          -1 === p.indexOf(d[c]) && (o = !1);
                        break;
                      case "object":
                        var m = Array.isArray(f[l]) ? f[l] : [f[l]];
                        d[l]
                          ? (d[l].name &&
                              -1 !== m.indexOf(d[l].name) &&
                              (s = !0),
                            -1 === m.indexOf(d[l].name) && (o = !1))
                          : (o = !1);
                        break;
                      case "function":
                        f[h](n) ? (s = !0) : (o = !1);
                    }
                    s &&
                      (i
                        ? ((r[i] = r[i] || {}), (r[i][u] = a[i][u]))
                        : (r[u] = a[u]));
                  }
                  return o;
                }),
                (e.O = function (t, e, n) {
                  var r = 0;
                  return (
                    (t[e] || (t.from && t.from[e]) || (t.to && t.to[e])) &&
                      ((r += Math.pow(10, n)),
                      t.from && t.from[e] && (r += 1),
                      t.to && t.to[e] && (r += 2)),
                    r
                  );
                }),
                (e.T = function (t) {
                  var e = this;
                  t.priority = 0;
                  var n = 0;
                  return (
                    this.A.forEach(function (r, i) {
                      n += e.O(t, r.name, i + 1);
                    }),
                    (t.priority = n),
                    t
                  );
                }),
                t
              );
            })(),
            rt = (function () {
              function t(t) {
                void 0 === t && (t = []),
                  (this.logger = new h("@barba/core")),
                  (this.S = !1),
                  (this.store = new nt(t));
              }
              var n = t.prototype;
              return (
                (n.get = function (t, e) {
                  return this.store.resolve(t, e);
                }),
                (n.doOnce = function (t) {
                  var e = t.data,
                    n = t.transition;
                  try {
                    var r = function () {
                        i.S = !1;
                      },
                      i = this,
                      o = n || {};
                    i.S = !0;
                    var s = u(
                      function () {
                        return Promise.resolve(i.j("beforeOnce", e, o)).then(
                          function () {
                            return Promise.resolve(i.once(e, o)).then(
                              function () {
                                return Promise.resolve(
                                  i.j("afterOnce", e, o)
                                ).then(function () {});
                              }
                            );
                          }
                        );
                      },
                      function (t) {
                        (i.S = !1),
                          i.logger.debug(
                            "Transition error [before/after/once]"
                          ),
                          i.logger.error(t);
                      }
                    );
                    return Promise.resolve(s && s.then ? s.then(r) : r());
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                (n.doPage = function (t) {
                  var e = t.data,
                    n = t.transition,
                    r = t.page,
                    i = t.wrapper;
                  try {
                    var o = function (t) {
                        if (s) return t;
                        a.S = !1;
                      },
                      s = !1,
                      a = this,
                      c = n || {},
                      l = !0 === c.sync || !1;
                    a.S = !0;
                    var h = u(
                      function () {
                        function t() {
                          return Promise.resolve(a.j("before", e, c)).then(
                            function () {
                              function t(t) {
                                return Promise.resolve(a.remove(e)).then(
                                  function () {
                                    return Promise.resolve(
                                      a.j("after", e, c)
                                    ).then(function () {});
                                  }
                                );
                              }
                              var n = (function () {
                                if (l)
                                  return u(
                                    function () {
                                      return Promise.resolve(a.add(e, i)).then(
                                        function () {
                                          return Promise.resolve(
                                            a.j("beforeLeave", e, c)
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.j("beforeEnter", e, c)
                                            ).then(function () {
                                              return Promise.resolve(
                                                Promise.all([
                                                  a.leave(e, c),
                                                  a.enter(e, c),
                                                ])
                                              ).then(function () {
                                                return Promise.resolve(
                                                  a.j("afterLeave", e, c)
                                                ).then(function () {
                                                  return Promise.resolve(
                                                    a.j("afterEnter", e, c)
                                                  ).then(function () {});
                                                });
                                              });
                                            });
                                          });
                                        }
                                      );
                                    },
                                    function (t) {
                                      if (a.M(t))
                                        throw new et(
                                          t,
                                          "Transition error [sync]"
                                        );
                                    }
                                  );
                                var t = function (t) {
                                    return u(
                                      function () {
                                        var t = (function () {
                                          if (!1 !== n)
                                            return Promise.resolve(
                                              a.add(e, i)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j("beforeEnter", e, c)
                                              ).then(function () {
                                                return Promise.resolve(
                                                  a.enter(e, c, n)
                                                ).then(function () {
                                                  return Promise.resolve(
                                                    a.j("afterEnter", e, c)
                                                  ).then(function () {});
                                                });
                                              });
                                            });
                                        })();
                                        if (t && t.then)
                                          return t.then(function () {});
                                      },
                                      function (t) {
                                        if (a.M(t))
                                          throw new et(
                                            t,
                                            "Transition error [before/after/enter]"
                                          );
                                      }
                                    );
                                  },
                                  n = !1,
                                  o = u(
                                    function () {
                                      return Promise.resolve(
                                        a.j("beforeLeave", e, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          Promise.all([
                                            a.leave(e, c),
                                            M(r, e),
                                          ]).then(function (t) {
                                            return t[0];
                                          })
                                        ).then(function (t) {
                                          return (
                                            (n = t),
                                            Promise.resolve(
                                              a.j("afterLeave", e, c)
                                            ).then(function () {})
                                          );
                                        });
                                      });
                                    },
                                    function (t) {
                                      if (a.M(t))
                                        throw new et(
                                          t,
                                          "Transition error [before/after/leave]"
                                        );
                                    }
                                  );
                                return o && o.then ? o.then(t) : t();
                              })();
                              return n && n.then ? n.then(t) : t();
                            }
                          );
                        }
                        var n = (function () {
                          if (l)
                            return Promise.resolve(M(r, e)).then(
                              function () {}
                            );
                        })();
                        return n && n.then ? n.then(t) : t();
                      },
                      function (t) {
                        if (((a.S = !1), t.name && "BarbaError" === t.name))
                          throw (
                            (a.logger.debug(t.label),
                            a.logger.error(t.error),
                            t)
                          );
                        throw (
                          (a.logger.debug("Transition error [page]"),
                          a.logger.error(t),
                          t)
                        );
                      }
                    );
                    return Promise.resolve(h && h.then ? h.then(o) : o(h));
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                (n.once = function (t, e) {
                  try {
                    return Promise.resolve(q.do("once", t, e)).then(
                      function () {
                        return e.once ? B(e.once, e)(t) : Promise.resolve();
                      }
                    );
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                (n.leave = function (t, e) {
                  try {
                    return Promise.resolve(q.do("leave", t, e)).then(
                      function () {
                        return e.leave ? B(e.leave, e)(t) : Promise.resolve();
                      }
                    );
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                (n.enter = function (t, e, n) {
                  try {
                    return Promise.resolve(q.do("enter", t, e)).then(
                      function () {
                        return e.enter
                          ? B(e.enter, e)(t, n)
                          : Promise.resolve();
                      }
                    );
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                (n.add = function (t, e) {
                  try {
                    return (
                      S.addContainer(t.next.container, e),
                      q.do("nextAdded", t),
                      Promise.resolve()
                    );
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                (n.remove = function (t) {
                  try {
                    return (
                      S.removeContainer(t.current.container),
                      q.do("currentRemoved", t),
                      Promise.resolve()
                    );
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                (n.M = function (t) {
                  return t.message
                    ? !/Timeout error|Fetch error/.test(t.message)
                    : !t.status;
                }),
                (n.j = function (t, e, n) {
                  try {
                    return Promise.resolve(q.do(t, e, n)).then(function () {
                      return n[t] ? B(n[t], n)(e) : Promise.resolve();
                    });
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                e(t, [
                  {
                    key: "isRunning",
                    get: function () {
                      return this.S;
                    },
                    set: function (t) {
                      this.S = t;
                    },
                  },
                  {
                    key: "hasOnce",
                    get: function () {
                      return this.store.once.length > 0;
                    },
                  },
                  {
                    key: "hasSelf",
                    get: function () {
                      return this.store.all.some(function (t) {
                        return "self" === t.name;
                      });
                    },
                  },
                  {
                    key: "shouldWait",
                    get: function () {
                      return this.store.all.some(function (t) {
                        return (t.to && !t.to.route) || t.sync;
                      });
                    },
                  },
                ]),
                t
              );
            })(),
            it = (function () {
              function t(t) {
                var e = this;
                (this.names = [
                  "beforeLeave",
                  "afterLeave",
                  "beforeEnter",
                  "afterEnter",
                ]),
                  (this.byNamespace = new Map()),
                  0 !== t.length &&
                    (t.forEach(function (t) {
                      e.byNamespace.set(t.namespace, t);
                    }),
                    this.names.forEach(function (t) {
                      q[t](e.L(t));
                    }));
              }
              return (
                (t.prototype.L = function (t) {
                  var e = this;
                  return function (n) {
                    var r = t.match(/enter/i) ? n.next : n.current,
                      i = e.byNamespace.get(r.namespace);
                    return i && i[t] ? B(i[t], i)(n) : Promise.resolve();
                  };
                }),
                t
              );
            })();
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
            Element.prototype.closest ||
              (Element.prototype.closest = function (t) {
                var e = this;
                do {
                  if (e.matches(t)) return e;
                  e = e.parentElement || e.parentNode;
                } while (null !== e && 1 === e.nodeType);
                return null;
              });
          var ot = {
            container: null,
            html: "",
            namespace: "",
            url: { hash: "", href: "", path: "", port: null, query: {} },
          };
          return new ((function () {
            function t() {
              (this.version = "2.9.7"),
                (this.schemaPage = ot),
                (this.Logger = h),
                (this.logger = new h("@barba/core")),
                (this.plugins = []),
                (this.hooks = q),
                (this.dom = S),
                (this.helpers = O),
                (this.history = k),
                (this.request = L),
                (this.url = D);
            }
            var r = t.prototype;
            return (
              (r.use = function (t, e) {
                var n = this.plugins;
                n.indexOf(t) > -1
                  ? this.logger.warn(
                      "Plugin [" + t.name + "] already installed."
                    )
                  : "function" == typeof t.install
                  ? (t.install(this, e), n.push(t))
                  : this.logger.warn(
                      "Plugin [" + t.name + '] has no "install" method.'
                    );
              }),
              (r.init = function (t) {
                var e = void 0 === t ? {} : t,
                  r = e.transitions,
                  i = void 0 === r ? [] : r,
                  o = e.views,
                  s = void 0 === o ? [] : o,
                  a = e.schema,
                  u = void 0 === a ? P : a,
                  c = e.requestError,
                  l = e.timeout,
                  f = void 0 === l ? 2e3 : l,
                  d = e.cacheIgnore,
                  p = void 0 !== d && d,
                  m = e.prefetchIgnore,
                  g = void 0 !== m && m,
                  v = e.preventRunning,
                  y = void 0 !== v && v,
                  _ = e.prevent,
                  b = void 0 === _ ? null : _,
                  x = e.debug,
                  w = e.logLevel;
                if (
                  (h.setLevel(
                    !0 === (void 0 !== x && x)
                      ? "debug"
                      : void 0 === w
                      ? "off"
                      : w
                  ),
                  this.logger.info(this.version),
                  Object.keys(u).forEach(function (t) {
                    P[t] && (P[t] = u[t]);
                  }),
                  (this.$ = c),
                  (this.timeout = f),
                  (this.cacheIgnore = p),
                  (this.prefetchIgnore = g),
                  (this.preventRunning = y),
                  (this._ = this.dom.getWrapper()),
                  !this._)
                )
                  throw new Error("[@barba/core] No Barba wrapper found");
                this._.setAttribute("aria-live", "polite"), this.q();
                var E = this.data.current;
                if (!E.container)
                  throw new Error("[@barba/core] No Barba container found");
                if (
                  ((this.cache = new N(p)),
                  (this.prevent = new tt(g)),
                  (this.transitions = new rt(i)),
                  (this.views = new it(s)),
                  null !== b)
                ) {
                  if ("function" != typeof b)
                    throw new Error(
                      "[@barba/core] Prevent should be a function"
                    );
                  this.prevent.add("preventCustom", b);
                }
                this.history.init(E.url.href, E.namespace),
                  (this.B = this.B.bind(this)),
                  (this.U = this.U.bind(this)),
                  (this.D = this.D.bind(this)),
                  this.F(),
                  this.plugins.forEach(function (t) {
                    return t.init();
                  });
                var A = this.data;
                (A.trigger = "barba"),
                  (A.next = A.current),
                  (A.current = n({}, this.schemaPage)),
                  this.hooks.do("ready", A),
                  this.once(A),
                  this.q();
              }),
              (r.destroy = function () {
                this.q(),
                  this.H(),
                  this.history.clear(),
                  this.hooks.clear(),
                  (this.plugins = []);
              }),
              (r.force = function (t) {
                window.location.assign(t);
              }),
              (r.go = function (t, e, n) {
                var r;
                if ((void 0 === e && (e = "barba"), this.transitions.isRunning))
                  this.force(t);
                else if (
                  !(r =
                    "popstate" === e
                      ? this.history.current &&
                        this.url.getPath(this.history.current.url) ===
                          this.url.getPath(t)
                      : this.prevent.run("sameUrl", null, null, t)) ||
                  this.transitions.hasSelf
                )
                  return (
                    (e = this.history.change(t, e, n)),
                    n && (n.stopPropagation(), n.preventDefault()),
                    this.page(t, e, r)
                  );
              }),
              (r.once = function (t) {
                try {
                  var e = this;
                  return Promise.resolve(e.hooks.do("beforeEnter", t)).then(
                    function () {
                      function n() {
                        return Promise.resolve(
                          e.hooks.do("afterEnter", t)
                        ).then(function () {});
                      }
                      var r = (function () {
                        if (e.transitions.hasOnce) {
                          var n = e.transitions.get(t, { once: !0 });
                          return Promise.resolve(
                            e.transitions.doOnce({ transition: n, data: t })
                          ).then(function () {});
                        }
                      })();
                      return r && r.then ? r.then(n) : n();
                    }
                  );
                } catch (t) {
                  return Promise.reject(t);
                }
              }),
              (r.page = function (t, e, r) {
                try {
                  var i = function () {
                      var t = o.data;
                      return Promise.resolve(o.hooks.do("page", t)).then(
                        function () {
                          var e = u(
                            function () {
                              var e = o.transitions.get(t, {
                                once: !1,
                                self: r,
                              });
                              return Promise.resolve(
                                o.transitions.doPage({
                                  data: t,
                                  page: s,
                                  transition: e,
                                  wrapper: o._,
                                })
                              ).then(function () {
                                o.q();
                              });
                            },
                            function () {
                              0 === h.getLevel() && o.force(t.current.url.href);
                            }
                          );
                          if (e && e.then) return e.then(function () {});
                        }
                      );
                    },
                    o = this;
                  (o.data.next.url = n({ href: t }, o.url.parse(t))),
                    (o.data.trigger = e);
                  var s = o.cache.has(t)
                      ? o.cache.update(t, { action: "click" }).request
                      : o.cache.set(
                          t,
                          o.request(t, o.timeout, o.onRequestError.bind(o, e)),
                          "click"
                        ).request,
                    a = (function () {
                      if (o.transitions.shouldWait)
                        return Promise.resolve(M(s, o.data)).then(
                          function () {}
                        );
                    })();
                  return Promise.resolve(a && a.then ? a.then(i) : i());
                } catch (t) {
                  return Promise.reject(t);
                }
              }),
              (r.onRequestError = function (t) {
                this.transitions.isRunning = !1;
                for (
                  var e = arguments.length,
                    n = new Array(e > 1 ? e - 1 : 0),
                    r = 1;
                  r < e;
                  r++
                )
                  n[r - 1] = arguments[r];
                var i = n[0],
                  o = n[1],
                  s = this.cache.getAction(i);
                return (
                  this.cache.delete(i),
                  !(
                    (this.$ && !1 === this.$(t, s, i, o)) ||
                    ("click" === s && this.force(i), 1)
                  )
                );
              }),
              (r.prefetch = function (t) {
                var e = this;
                this.cache.has(t) ||
                  this.cache.set(
                    t,
                    this.request(
                      t,
                      this.timeout,
                      this.onRequestError.bind(this, "barba")
                    ).catch(function (t) {
                      e.logger.error(t);
                    }),
                    "prefetch"
                  );
              }),
              (r.F = function () {
                !0 !== this.prefetchIgnore &&
                  (document.addEventListener("mouseover", this.B),
                  document.addEventListener("touchstart", this.B)),
                  document.addEventListener("click", this.U),
                  window.addEventListener("popstate", this.D);
              }),
              (r.H = function () {
                !0 !== this.prefetchIgnore &&
                  (document.removeEventListener("mouseover", this.B),
                  document.removeEventListener("touchstart", this.B)),
                  document.removeEventListener("click", this.U),
                  window.removeEventListener("popstate", this.D);
              }),
              (r.B = function (t) {
                var e = this,
                  n = this.I(t);
                if (n) {
                  var r = this.dom.getHref(n);
                  this.prevent.checkHref(r) ||
                    this.cache.has(r) ||
                    this.cache.set(
                      r,
                      this.request(
                        r,
                        this.timeout,
                        this.onRequestError.bind(this, n)
                      ).catch(function (t) {
                        e.logger.error(t);
                      }),
                      "enter"
                    );
                }
              }),
              (r.U = function (t) {
                var e = this.I(t);
                if (e)
                  return this.transitions.isRunning && this.preventRunning
                    ? (t.preventDefault(), void t.stopPropagation())
                    : void this.go(this.dom.getHref(e), e, t);
              }),
              (r.D = function (t) {
                this.go(this.url.getHref(), "popstate", t);
              }),
              (r.I = function (t) {
                for (var e = t.target; e && !this.dom.getHref(e); )
                  e = e.parentNode;
                if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e)))
                  return e;
              }),
              (r.q = function () {
                var t = this.url.getHref(),
                  e = {
                    container: this.dom.getContainer(),
                    html: this.dom.getHtml(),
                    namespace: this.dom.getNamespace(),
                    url: n({ href: t }, this.url.parse(t)),
                  };
                (this.C = {
                  current: e,
                  next: n({}, this.schemaPage),
                  trigger: void 0,
                }),
                  this.hooks.do("reset", this.data);
              }),
              e(t, [
                {
                  key: "data",
                  get: function () {
                    return this.C;
                  },
                },
                {
                  key: "wrapper",
                  get: function () {
                    return this._;
                  },
                },
              ]),
              t
            );
          })())();
        })();
      },
      40: function (t) {
        var e;
        t.exports =
          ("2.1.10",
          (e =
            window.requestIdleCallback ||
            function (t) {
              var e = Date.now();
              return setTimeout(function () {
                t({
                  didTimeout: !1,
                  timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - e));
                  },
                });
              }, 1);
            }),
          new ((function () {
            function t() {
              (this.name = "@barba/prefetch"),
                (this.version = "2.1.10"),
                (this.toPrefetch = new Set());
            }
            var n = t.prototype;
            return (
              (n.install = function (t, e) {
                var n = void 0 === e ? {} : e,
                  r = n.root,
                  i = void 0 === r ? document.body : r,
                  o = n.timeout,
                  s = void 0 === o ? 2e3 : o;
                (this.logger = new t.Logger(this.name)),
                  this.logger.info(this.version),
                  (this.barba = t),
                  (this.root = i),
                  (this.timeout = s);
              }),
              (n.init = function () {
                var t = this;
                this.barba.prefetchIgnore
                  ? this.logger.warn("barba.prefetchIgnore is enabled")
                  : this.barba.cacheIgnore
                  ? this.logger.warn("barba.cacheIgnore is enabled")
                  : ((this.observer = new IntersectionObserver(function (e) {
                      e.forEach(function (e) {
                        if (e.isIntersecting) {
                          var n = e.target,
                            r = t.barba.dom.getHref(n);
                          t.toPrefetch.has(r) &&
                            (t.observer.unobserve(n),
                            t.barba.cache.has(r)
                              ? t.barba.cache.update(r, { action: "prefetch" })
                              : t.barba.cache.set(
                                  r,
                                  t.barba
                                    .request(
                                      r,
                                      t.barba.timeout,
                                      t.barba.onRequestError.bind(
                                        t.barba,
                                        "barba"
                                      )
                                    )
                                    .catch(function (e) {
                                      t.logger.error(e);
                                    }),
                                  "prefetch"
                                ));
                        }
                      });
                    })),
                    this.observe(),
                    this.barba.hooks.after(this.observe, this));
              }),
              (n.observe = function () {
                var t = this;
                e(
                  function () {
                    t.root.querySelectorAll("a").forEach(function (e) {
                      var n = e,
                        r = t.barba.dom.getHref(n);
                      t.barba.cache.has(r) ||
                        t.barba.prevent.checkHref(r) ||
                        t.barba.prevent.checkLink(n, {}, r) ||
                        (t.observer.observe(e), t.toPrefetch.add(r));
                    });
                  },
                  { timeout: this.timeout }
                );
              }),
              t
            );
          })())());
      },
      777: (t) => {
        t.exports =
          "precision highp float;\n\nuniform sampler2D texture;\nuniform vec2 resolution;\nuniform vec3 bgColor;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / resolution;\n  vec4 grainColor = texture2D(texture, st * 5.0);\n  float r = grainColor.r;\n  vec3 bg = (bgColor / 255.0) - vec3(r * 0.1);\n  gl_FragColor = vec4(bg, 1.0);\n}\n";
      },
      145: (t) => {
        t.exports =
          "attribute vec4 a_position;\nattribute vec2 a_texcoord;\nvarying vec2 v_texcoord;\n\nvoid main() {\n  v_texcoord = a_texcoord;\n  gl_Position = a_position;\n}\n";
      },
      380: (t) => {
        t.exports =
          "precision highp float;\n\nuniform sampler2D texture;\nuniform vec2 resolution;\nuniform vec2 mouse;\nuniform float time;\nuniform float color;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n  vec2 uv = v_texcoord.xy;\n  vec2 st = gl_FragCoord.xy / resolution;\n\n  float d = length(st - mouse);\n  float factor = 1.0;\n  float th = 0.5;\n  if (d < th) {\n    factor = d / th;\n    factor = pow(factor, 4.0);\n  }\n\n  float wave = smoothstep(0.8, 1.0, 1.0 - factor);\n  uv.y += 0.1 * wave * sin(wave * 6.28 + uv.x * 0.1 + time * 0.5);\n\n  float alpha = texture2D(texture, uv).a;\n  alpha = alpha * pow(1.0 - wave, 0.25);\n  gl_FragColor = vec4(vec3(color) * alpha, alpha);\n}\n";
      },
      117: (t) => {
        t.exports =
          "attribute vec4 a_position;\nattribute vec2 a_texcoord;\nvarying vec2 v_texcoord;\n\nvoid main() {\n  v_texcoord = a_texcoord;\n  gl_Position = a_position;\n}\n";
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { exports: {} });
    return t[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      function t(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function e(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var r,
        i,
        o,
        s,
        a,
        u,
        c,
        l,
        h,
        f,
        d,
        p,
        m,
        g,
        v,
        y = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        _ = { duration: 0.5, overwrite: !1, delay: 0 },
        b = 1e8,
        x = 1e-8,
        w = 2 * Math.PI,
        E = w / 4,
        A = 0,
        T = Math.sqrt,
        P = Math.cos,
        S = Math.sin,
        k = function (t) {
          return "string" == typeof t;
        },
        M = function (t) {
          return "function" == typeof t;
        },
        C = function (t) {
          return "number" == typeof t;
        },
        O = function (t) {
          return void 0 === t;
        },
        F = function (t) {
          return "object" == typeof t;
        },
        $ = function (t) {
          return !1 !== t;
        },
        I = function () {
          return "undefined" != typeof window;
        },
        R = function (t) {
          return M(t) || k(t);
        },
        z =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        D = Array.isArray,
        L = /(?:-?\.?\d|\.)+/gi,
        j = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        B = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        U = /[+-]=-?[.\d]+/,
        N = /[^,'"\[\]\s]+/gi,
        V = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        W = {},
        H = {},
        Y = function (t) {
          return (H = wt(t, W)) && wn;
        },
        X = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        K = function (t, e) {
          return !e && console.warn(t);
        },
        G = function (t, e) {
          return (t && (W[t] = e) && H && (H[t] = e)) || W;
        },
        Z = function () {
          return 0;
        },
        Q = { suppressEvents: !0, isStart: !0, kill: !1 },
        J = { suppressEvents: !0, kill: !1 },
        tt = { suppressEvents: !0 },
        et = {},
        nt = [],
        rt = {},
        it = {},
        ot = {},
        st = 30,
        at = [],
        ut = "",
        ct = function (t) {
          var e,
            n,
            r = t[0];
          if ((F(r) || M(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
            for (n = at.length; n-- && !at[n].targetTest(r); );
            e = at[n];
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new ze(t[n], e)))) ||
              t.splice(n, 1);
          return t;
        },
        lt = function (t) {
          return t._gsap || ct(te(t))[0]._gsap;
        },
        ht = function (t, e, n) {
          return (n = t[e]) && M(n)
            ? t[e]()
            : (O(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        ft = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        dt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        pt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        mt = function (t, e) {
          var n = e.charAt(0),
            r = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
          );
        },
        gt = function (t, e) {
          for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
          return r < n;
        },
        vt = function () {
          var t,
            e,
            n = nt.length,
            r = nt.slice(0);
          for (rt = {}, nt.length = 0, t = 0; t < n; t++)
            (e = r[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        yt = function (t, e, n, r) {
          nt.length && vt(),
            t.render(e, n, r || (i && e < 0 && (t._initted || t._startAt))),
            nt.length && vt();
        },
        _t = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(N).length < 2
            ? e
            : k(t)
            ? t.trim()
            : t;
        },
        bt = function (t) {
          return t;
        },
        xt = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        wt = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        Et = function t(e, n) {
          for (var r in n)
            "__proto__" !== r &&
              "constructor" !== r &&
              "prototype" !== r &&
              (e[r] = F(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
          return e;
        },
        At = function (t, e) {
          var n,
            r = {};
          for (n in t) n in e || (r[n] = t[n]);
          return r;
        },
        Tt = function (t) {
          var e,
            n = t.parent || s,
            r = t.keyframes
              ? ((e = D(t.keyframes)),
                function (t, n) {
                  for (var r in n)
                    r in t ||
                      ("duration" === r && e) ||
                      "ease" === r ||
                      (t[r] = n[r]);
                })
              : xt;
          if ($(t.inherit))
            for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
          return t;
        },
        Pt = function (t, e, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o,
            s = t[r];
          if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
          return (
            s
              ? ((e._next = s._next), (s._next = e))
              : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = s),
            (e.parent = e._dp = t),
            e
          );
        },
        St = function (t, e, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = e._prev,
            o = e._next;
          i ? (i._next = o) : t[n] === e && (t[n] = o),
            o ? (o._prev = i) : t[r] === e && (t[r] = i),
            (e._next = e._prev = e.parent = null);
        },
        kt = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        Mt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
          return t;
        },
        Ct = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        Ot = function (t, e, n, r) {
          return (
            t._startAt &&
            (i
              ? t._startAt.revert(J)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
          );
        },
        Ft = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        $t = function (t) {
          return t._repeat
            ? It(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        It = function (t, e) {
          var n = Math.floor((t /= e));
          return t && n === t ? n - 1 : n;
        },
        Rt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        zt = function (t) {
          return (t._end = pt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || x) || 0)
          ));
        },
        Dt = function (t, e) {
          var n = t._dp;
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = pt(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              zt(t),
              n._dirty || Mt(n, t)),
            t
          );
        },
        Lt = function (t, e) {
          var n;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((n = Rt(t.rawTime(), e)),
              (!e._dur || Gt(0, e.totalDuration(), n) - e._tTime > x) &&
                e.render(n, !0)),
            Mt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            t._zTime = -1e-8;
          }
        },
        jt = function (t, e, n, r) {
          return (
            e.parent && kt(e),
            (e._start = pt(
              (C(n) ? n : n || t !== s ? Yt(t, n, e) : t._time) + e._delay
            )),
            (e._end = pt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            Pt(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Nt(e) || (t._recent = e),
            r || Lt(t, e),
            t._ts < 0 && Dt(t, t._tTime),
            t
          );
        },
        Bt = function (t, e) {
          return (
            (W.ScrollTrigger || X("scrollTrigger", e)) &&
            W.ScrollTrigger.create(e, t)
          );
        },
        qt = function (t, e, n, r, o) {
          return (
            Ve(t, e, o),
            t._initted
              ? !n &&
                t._pt &&
                !i &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                h !== Ee.frame
                ? (nt.push(t), (t._lazy = [o, r]), 1)
                : void 0
              : 1
          );
        },
        Ut = function t(e) {
          var n = e.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          );
        },
        Nt = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        Vt = function (t, e, n, r) {
          var i = t._repeat,
            o = pt(e) || 0,
            s = t._tTime / t._tDur;
          return (
            s && !r && (t._time *= o / t._dur),
            (t._dur = o),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : pt(o * (i + 1) + t._rDelay * i)
              : o),
            s > 0 && !r && Dt(t, (t._tTime = t._tDur * s)),
            t.parent && zt(t),
            n || Mt(t.parent, t),
            t
          );
        },
        Wt = function (t) {
          return t instanceof Le ? Mt(t) : Vt(t, t._dur);
        },
        Ht = { _start: 0, endTime: Z, totalDuration: Z },
        Yt = function t(e, n, r) {
          var i,
            o,
            s,
            a = e.labels,
            u = e._recent || Ht,
            c = e.duration() >= b ? u.endTime(!1) : e._dur;
          return k(n) && (isNaN(n) || n in a)
            ? ((o = n.charAt(0)),
              (s = "%" === n.substr(-1)),
              (i = n.indexOf("=")),
              "<" === o || ">" === o
                ? (i >= 0 && (n = n.replace(/=/, "")),
                  ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (s ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                : i < 0
                ? (n in a || (a[n] = c), a[n])
                : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  s && r && (o = (o / 100) * (D(r) ? r[0] : r).totalDuration()),
                  i > 1 ? t(e, n.substr(0, i - 1), r) + o : c + o))
            : null == n
            ? c
            : +n;
        },
        Xt = function (t, e, n) {
          var r,
            i,
            o = C(e[1]),
            s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[s];
          if ((o && (a.duration = e[1]), (a.parent = n), t)) {
            for (r = a, i = n; i && !("immediateRender" in r); )
              (r = i.vars.defaults || {}), (i = $(i.vars.inherit) && i.parent);
            (a.immediateRender = $(r.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
          }
          return new Ke(e[0], a, e[s + 1]);
        },
        Kt = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        Gt = function (t, e, n) {
          return n < t ? t : n > e ? e : n;
        },
        Zt = function (t, e) {
          return k(t) && (e = V.exec(t)) ? e[1] : "";
        },
        Qt = [].slice,
        Jt = function (t, e) {
          return (
            t &&
            F(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && F(t[0]))) &&
            !t.nodeType &&
            t !== a
          );
        },
        te = function (t, e, n) {
          return o && !e && o.selector
            ? o.selector(t)
            : !k(t) || n || (!u && Ae())
            ? D(t)
              ? (function (t, e, n) {
                  return (
                    void 0 === n && (n = []),
                    t.forEach(function (t) {
                      var r;
                      return (k(t) && !e) || Jt(t, 1)
                        ? (r = n).push.apply(r, te(t))
                        : n.push(t);
                    }) || n
                  );
                })(t, n)
              : Jt(t)
              ? Qt.call(t, 0)
              : t
              ? [t]
              : []
            : Qt.call((e || c).querySelectorAll(t), 0);
        },
        ee = function (t) {
          return (
            (t = te(t)[0] || K("Invalid scope") || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return te(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                  ? K("Invalid scope") || c.createElement("div")
                  : t
              );
            }
          );
        },
        ne = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        re = function (t) {
          if (M(t)) return t;
          var e = F(t) ? t : { each: t },
            n = Oe(e.ease),
            r = e.from || 0,
            i = parseFloat(e.base) || 0,
            o = {},
            s = r > 0 && r < 1,
            a = isNaN(r) || s,
            u = e.axis,
            c = r,
            l = r;
          return (
            k(r)
              ? (c = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !s && a && ((c = r[0]), (l = r[1])),
            function (t, s, h) {
              var f,
                d,
                p,
                m,
                g,
                v,
                y,
                _,
                x,
                w = (h || e).length,
                E = o[w];
              if (!E) {
                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, b])[1])) {
                  for (
                    y = -b;
                    y < (y = h[x++].getBoundingClientRect().left) && x < w;

                  );
                  x--;
                }
                for (
                  E = o[w] = [],
                    f = a ? Math.min(x, w) * c - 0.5 : r % x,
                    d = x === b ? 0 : a ? (w * l) / x - 0.5 : (r / x) | 0,
                    y = 0,
                    _ = b,
                    v = 0;
                  v < w;
                  v++
                )
                  (p = (v % x) - f),
                    (m = d - ((v / x) | 0)),
                    (E[v] = g =
                      u ? Math.abs("y" === u ? m : p) : T(p * p + m * m)),
                    g > y && (y = g),
                    g < _ && (_ = g);
                "random" === r && ne(E),
                  (E.max = y - _),
                  (E.min = _),
                  (E.v = w =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (x > w
                          ? w - 1
                          : u
                          ? "y" === u
                            ? w / x
                            : x
                          : Math.max(x, w / x)) ||
                      0) * ("edges" === r ? -1 : 1)),
                  (E.b = w < 0 ? i - w : i),
                  (E.u = Zt(e.amount || e.each) || 0),
                  (n = n && w < 0 ? Me(n) : n);
              }
              return (
                (w = (E[t] - E.min) / E.max || 0),
                pt(E.b + (n ? n(w) : w) * E.v) + E.u
              );
            }
          );
        },
        ie = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (n) {
            var r = pt(Math.round(parseFloat(n) / t) * t * e);
            return (r - (r % 1)) / e + (C(n) ? 0 : Zt(n));
          };
        },
        oe = function (t, e) {
          var n,
            r,
            i = D(t);
          return (
            !i &&
              F(t) &&
              ((n = i = t.radius || b),
              t.values
                ? ((t = te(t.values)), (r = !C(t[0])) && (n *= n))
                : (t = ie(t.increment))),
            Kt(
              e,
              i
                ? M(t)
                  ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          o,
                          s = parseFloat(r ? e.x : e),
                          a = parseFloat(r ? e.y : 0),
                          u = b,
                          c = 0,
                          l = t.length;
                        l--;

                      )
                        (i = r
                          ? (i = t[l].x - s) * i + (o = t[l].y - a) * o
                          : Math.abs(t[l] - s)) < u && ((u = i), (c = l));
                      return (
                        (c = !n || u <= n ? t[c] : e),
                        r || c === e || C(e) ? c : c + Zt(e)
                      );
                    }
                : ie(t)
            )
          );
        },
        se = function (t, e, n, r) {
          return Kt(D(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
            return D(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                    ) *
                      n *
                      r
                  ) / r;
          });
        },
        ae = function (t, e, n) {
          return Kt(n, function (n) {
            return t[~~e(n)];
          });
        },
        ue = function (t) {
          for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
            (r = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (n = t.substr(e + 7, r - e - 7).match(i ? N : L)),
              (s +=
                t.substr(o, e - o) +
                se(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
              (o = r + 1);
          return s + t.substr(o, t.length - o);
        },
        ce = function (t, e, n, r, i) {
          var o = e - t,
            s = r - n;
          return Kt(i, function (e) {
            return n + (((e - t) / o) * s || 0);
          });
        },
        le = function (t, e, n) {
          var r,
            i,
            o,
            s = t.labels,
            a = b;
          for (r in s)
            (i = s[r] - e) < 0 == !!n &&
              i &&
              a > (i = Math.abs(i)) &&
              ((o = r), (a = i));
          return o;
        },
        he = function (t, e, n) {
          var r,
            i,
            s,
            a = t.vars,
            u = a[e],
            c = o,
            l = t._ctx;
          if (u)
            return (
              (r = a[e + "Params"]),
              (i = a.callbackScope || t),
              n && nt.length && vt(),
              l && (o = l),
              (s = r ? u.apply(i, r) : u.call(i)),
              (o = c),
              s
            );
        },
        fe = function (t) {
          return (
            kt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!i),
            t.progress() < 1 && he(t, "onInterrupt"),
            t
          );
        },
        de = function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            n = M(t),
            r =
              e && !n && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = {
              init: Z,
              render: on,
              add: Ue,
              kill: an,
              modifier: sn,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: tn,
              aliases: {},
              register: 0,
            };
          if ((Ae(), t !== r)) {
            if (it[e]) return;
            xt(r, xt(At(t, i), o)),
              wt(r.prototype, wt(i, At(t, o))),
              (it[(r.prop = e)] = r),
              t.targetTest && (at.push(r), (et[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          G(e, r), t.register && t.register(wn, r, ln);
        },
        pe = 255,
        me = {
          aqua: [0, pe, pe],
          lime: [0, pe, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, pe],
          navy: [0, 0, 128],
          white: [pe, pe, pe],
          olive: [128, 128, 0],
          yellow: [pe, pe, 0],
          orange: [pe, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [pe, 0, 0],
          pink: [pe, 192, 203],
          cyan: [0, pe, pe],
          transparent: [pe, pe, pe, 0],
        },
        ge = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
              ? n
              : 3 * t < 2
              ? e + (n - e) * (2 / 3 - t) * 6
              : e) *
              pe +
              0.5) |
            0
          );
        },
        ve = function (t, e, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            h,
            f,
            d = t ? (C(t) ? [t >> 16, (t >> 8) & pe, t & pe] : 0) : me.black;
          if (!d) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t])
            )
              d = me[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((r = t.charAt(1)),
                  (i = t.charAt(2)),
                  (o = t.charAt(3)),
                  (t =
                    "#" +
                    r +
                    r +
                    i +
                    i +
                    o +
                    o +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (d = parseInt(t.substr(1, 6), 16)) >> 16,
                  (d >> 8) & pe,
                  d & pe,
                  parseInt(t.substr(7), 16) / 255,
                ];
              d = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & pe,
                t & pe,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((d = f = t.match(L)), e)) {
                if (~t.indexOf("="))
                  return (d = t.match(j)), n && d.length < 4 && (d[3] = 1), d;
              } else
                (s = (+d[0] % 360) / 360),
                  (a = +d[1] / 100),
                  (r =
                    2 * (u = +d[2] / 100) -
                    (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                  d.length > 3 && (d[3] *= 1),
                  (d[0] = ge(s + 1 / 3, r, i)),
                  (d[1] = ge(s, r, i)),
                  (d[2] = ge(s - 1 / 3, r, i));
            else d = t.match(L) || me.transparent;
            d = d.map(Number);
          }
          return (
            e &&
              !f &&
              ((r = d[0] / pe),
              (i = d[1] / pe),
              (o = d[2] / pe),
              (u = ((c = Math.max(r, i, o)) + (l = Math.min(r, i, o))) / 2),
              c === l
                ? (s = a = 0)
                : ((h = c - l),
                  (a = u > 0.5 ? h / (2 - c - l) : h / (c + l)),
                  (s =
                    c === r
                      ? (i - o) / h + (i < o ? 6 : 0)
                      : c === i
                      ? (o - r) / h + 2
                      : (r - i) / h + 4),
                  (s *= 60)),
              (d[0] = ~~(s + 0.5)),
              (d[1] = ~~(100 * a + 0.5)),
              (d[2] = ~~(100 * u + 0.5))),
            n && d.length < 4 && (d[3] = 1),
            d
          );
        },
        ye = function (t) {
          var e = [],
            n = [],
            r = -1;
          return (
            t.split(be).forEach(function (t) {
              var i = t.match(B) || [];
              e.push.apply(e, i), n.push((r += i.length + 1));
            }),
            (e.c = n),
            e
          );
        },
        _e = function (t, e, n) {
          var r,
            i,
            o,
            s,
            a = "",
            u = (t + a).match(be),
            c = e ? "hsla(" : "rgba(",
            l = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = ve(t, e, 1)) &&
                c +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            n && ((o = ye(t)), (r = n.c).join(a) !== o.c.join(a)))
          )
            for (s = (i = t.replace(be, "1").split(B)).length - 1; l < s; l++)
              a +=
                i[l] +
                (~r.indexOf(l)
                  ? u.shift() || c + "0,0,0,0)"
                  : (o.length ? o : u.length ? u : n).shift());
          if (!i)
            for (s = (i = t.split(be)).length - 1; l < s; l++) a += i[l] + u[l];
          return a + i[s];
        },
        be = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in me) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        xe = /hsl[a]?\(/,
        we = function (t) {
          var e,
            n = t.join(" ");
          if (((be.lastIndex = 0), be.test(n)))
            return (
              (e = xe.test(n)),
              (t[1] = _e(t[1], e)),
              (t[0] = _e(t[0], e, ye(t[1]))),
              !0
            );
        },
        Ee = (function () {
          var t,
            e,
            n,
            r,
            i,
            o,
            s = Date.now,
            h = 500,
            f = 33,
            p = s(),
            m = p,
            g = 1e3 / 240,
            v = g,
            y = [],
            _ = function n(a) {
              var u,
                c,
                l,
                d,
                _ = s() - m,
                b = !0 === a;
              if (
                (_ > h && (p += _ - f),
                ((u = (l = (m += _) - p) - v) > 0 || b) &&
                  ((d = ++r.frame),
                  (i = l - 1e3 * r.time),
                  (r.time = l /= 1e3),
                  (v += u + (u >= g ? 4 : g - u)),
                  (c = 1)),
                b || (t = e(n)),
                c)
              )
                for (o = 0; o < y.length; o++) y[o](l, i, d, a);
            };
          return (
            (r = {
              time: 0,
              frame: 0,
              tick: function () {
                _(!0);
              },
              deltaRatio: function (t) {
                return i / (1e3 / (t || 60));
              },
              wake: function () {
                l &&
                  (!u &&
                    I() &&
                    ((a = u = window),
                    (c = a.document || {}),
                    (W.gsap = wn),
                    (a.gsapVersions || (a.gsapVersions = [])).push(wn.version),
                    Y(H || a.GreenSockGlobals || (!a.gsap && a) || {}),
                    (n = a.requestAnimationFrame)),
                  t && r.sleep(),
                  (e =
                    n ||
                    function (t) {
                      return setTimeout(t, (v - 1e3 * r.time + 1) | 0);
                    }),
                  (d = 1),
                  _(2));
              },
              sleep: function () {
                (n ? a.cancelAnimationFrame : clearTimeout)(t),
                  (d = 0),
                  (e = Z);
              },
              lagSmoothing: function (t, e) {
                (h = t || 1e8), (f = Math.min(e, h, 0));
              },
              fps: function (t) {
                (g = 1e3 / (t || 240)), (v = 1e3 * r.time + g);
              },
              add: function (t, e, n) {
                var i = e
                  ? function (e, n, o, s) {
                      t(e, n, o, s), r.remove(i);
                    }
                  : t;
                return r.remove(t), y[n ? "unshift" : "push"](i), Ae(), i;
              },
              remove: function (t, e) {
                ~(e = y.indexOf(t)) && y.splice(e, 1) && o >= e && o--;
              },
              _listeners: y,
            }),
            r
          );
        })(),
        Ae = function () {
          return !d && Ee.wake();
        },
        Te = {},
        Pe = /^[\d.\-M][\d.\-,\s]/,
        Se = /["']/g,
        ke = function (t) {
          for (
            var e,
              n,
              r,
              i = {},
              o = t.substr(1, t.length - 3).split(":"),
              s = o[0],
              a = 1,
              u = o.length;
            a < u;
            a++
          )
            (n = o[a]),
              (e = a !== u - 1 ? n.lastIndexOf(",") : n.length),
              (r = n.substr(0, e)),
              (i[s] = isNaN(r) ? r.replace(Se, "").trim() : +r),
              (s = n.substr(e + 1).trim());
          return i;
        },
        Me = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Ce = function t(e, n) {
          for (var r, i = e._first; i; )
            i instanceof Le
              ? t(i, n)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? t(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
              (i = i._next);
        },
        Oe = function (t, e) {
          return (
            (t &&
              (M(t)
                ? t
                : Te[t] ||
                  (function (t) {
                    var e,
                      n,
                      r,
                      i,
                      o = (t + "").split("("),
                      s = Te[o[0]];
                    return s && o.length > 1 && s.config
                      ? s.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [ke(o[1])]
                            : ((e = t),
                              (n = e.indexOf("(") + 1),
                              (r = e.indexOf(")")),
                              (i = e.indexOf("(", n)),
                              e.substring(
                                n,
                                ~i && i < r ? e.indexOf(")", r + 1) : r
                              ))
                                .split(",")
                                .map(_t)
                        )
                      : Te._CE && Pe.test(t)
                      ? Te._CE("", t)
                      : s;
                  })(t))) ||
            e
          );
        },
        Fe = function (t, e, n, r) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var i,
            o = { easeIn: e, easeOut: n, easeInOut: r };
          return (
            ft(t, function (t) {
              for (var e in ((Te[t] = W[t] = o),
              (Te[(i = t.toLowerCase())] = n),
              o))
                Te[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = Te[t + "." + e] = o[e];
            }),
            o
          );
        },
        $e = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        Ie = function t(e, n, r) {
          var i = n >= 1 ? n : 1,
            o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            s = (o / w) * (Math.asin(1 / i) || 0),
            a = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * S((t - s) * o) + 1;
            },
            u =
              "out" === e
                ? a
                : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : $e(a);
          return (
            (o = w / o),
            (u.config = function (n, r) {
              return t(e, n, r);
            }),
            u
          );
        },
        Re = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var r = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
            i =
              "out" === e
                ? r
                : "in" === e
                ? function (t) {
                    return 1 - r(1 - t);
                  }
                : $e(r);
          return (
            (i.config = function (n) {
              return t(e, n);
            }),
            i
          );
        };
      ft("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e;
        Fe(
          t + ",Power" + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, n);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2;
          }
        );
      }),
        (Te.Linear.easeNone = Te.none = Te.Linear.easeIn),
        Fe("Elastic", Ie("in"), Ie("out"), Ie()),
        (p = 7.5625),
        (g = 1 / (m = 2.75)),
        Fe(
          "Bounce",
          function (t) {
            return 1 - v(1 - t);
          },
          (v = function (t) {
            return t < g
              ? p * t * t
              : t < 0.7272727272727273
              ? p * Math.pow(t - 1.5 / m, 2) + 0.75
              : t < 0.9090909090909092
              ? p * (t -= 2.25 / m) * t + 0.9375
              : p * Math.pow(t - 2.625 / m, 2) + 0.984375;
          })
        ),
        Fe("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        Fe("Circ", function (t) {
          return -(T(1 - t * t) - 1);
        }),
        Fe("Sine", function (t) {
          return 1 === t ? 1 : 1 - P(t * E);
        }),
        Fe("Back", Re("in"), Re("out"), Re()),
        (Te.SteppedEase =
          Te.steps =
          W.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  r = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((r * Gt(0, 0.99999999, t)) | 0) + i) * n;
                };
              },
            }),
        (_.ease = Te["quad.out"]),
        ft(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (ut += t + "," + t + "Params,");
          }
        );
      var ze = function (t, e) {
          (this.id = A++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : ht),
            (this.set = e ? e.getSetter : tn);
        },
        De = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Vt(this, +t.duration, 1, 1),
              (this.data = t.data),
              o && ((this._ctx = o), o.data.push(this)),
              d || Ee.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Vt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((Ae(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  Dt(this, t), !n._dp || n.parent || Lt(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  jt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === x) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), yt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + $t(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      $t(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                ? It(this._tTime, n) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? Rt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(Gt(-this._delay, this._tDur, e), !0),
                zt(this),
                Ct(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Ae(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== x &&
                            (this._tTime -= x)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    jt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                ($(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Rt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = tt);
              var e = i;
              return (
                (i = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (i = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (e._ts || 1)), (e = e._dp);
              return !this.parent && this.vars.immediateRender ? -1 : n;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Wt(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), Wt(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Yt(this, t), $(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, $(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - x
                )
              );
            }),
            (e.eventCallback = function (t, e, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((r[t] = e),
                      n && (r[t + "Params"] = n),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete r[t],
                  this)
                : r[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (n) {
                var r = M(t) ? t : bt,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      M(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                      n(r),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              fe(this);
            }),
            t
          );
        })();
      xt(De.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Le = (function (n) {
        function r(e, r) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, e) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = $(e.sortChildren)),
            s && jt(e.parent || s, t(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && Bt(t(i), e.scrollTrigger),
            i
          );
        }
        e(r, n);
        var o = r.prototype;
        return (
          (o.to = function (t, e, n) {
            return Xt(0, arguments, this), this;
          }),
          (o.from = function (t, e, n) {
            return Xt(1, arguments, this), this;
          }),
          (o.fromTo = function (t, e, n, r) {
            return Xt(2, arguments, this), this;
          }),
          (o.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Tt(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ke(t, e, Yt(this, n), 1),
              this
            );
          }),
          (o.call = function (t, e, n) {
            return jt(this, Ke.delayedCall(0, t, e), n);
          }),
          (o.staggerTo = function (t, e, n, r, i, o, s) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || r),
              (n.onComplete = o),
              (n.onCompleteParams = s),
              (n.parent = this),
              new Ke(t, n, Yt(this, i)),
              this
            );
          }),
          (o.staggerFrom = function (t, e, n, r, i, o, s) {
            return (
              (n.runBackwards = 1),
              (Tt(n).immediateRender = $(n.immediateRender)),
              this.staggerTo(t, e, n, r, i, o, s)
            );
          }),
          (o.staggerFromTo = function (t, e, n, r, i, o, s, a) {
            return (
              (r.startAt = n),
              (Tt(r).immediateRender = $(r.immediateRender)),
              this.staggerTo(t, e, r, i, o, s, a)
            );
          }),
          (o.render = function (t, e, n) {
            var r,
              o,
              a,
              u,
              c,
              l,
              h,
              f,
              d,
              p,
              m,
              g,
              v = this._time,
              y = this._dirty ? this.totalDuration() : this._tDur,
              _ = this._dur,
              b = t <= 0 ? 0 : pt(t),
              w = this._zTime < 0 != t < 0 && (this._initted || !_);
            if (
              (this !== s && b > y && t >= 0 && (b = y),
              b !== this._tTime || n || w)
            ) {
              if (
                (v !== this._time &&
                  _ &&
                  ((b += this._time - v), (t += this._time - v)),
                (r = b),
                (d = this._start),
                (l = !(f = this._ts)),
                w && (_ || (v = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((m = this._yoyo),
                  (c = _ + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * c + t, e, n);
                if (
                  ((r = pt(b % c)),
                  b === y
                    ? ((u = this._repeat), (r = _))
                    : ((u = ~~(b / c)) && u === b / c && ((r = _), u--),
                      r > _ && (r = _)),
                  (p = It(this._tTime, c)),
                  !v && this._tTime && p !== u && (p = u),
                  m && 1 & u && ((r = _ - r), (g = 1)),
                  u !== p && !this._lock)
                ) {
                  var E = m && 1 & p,
                    A = E === (m && 1 & u);
                  if (
                    (u < p && (E = !E),
                    (v = E ? 0 : _),
                    (this._lock = 1),
                    (this.render(v || (g ? 0 : pt(u * c)), e, !_)._lock = 0),
                    (this._tTime = b),
                    !e && this.parent && he(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !g &&
                      (this.invalidate()._lock = 1),
                    (v && v !== this._time) ||
                      l !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((_ = this._dur),
                    (y = this._tDur),
                    A &&
                      ((this._lock = 2),
                      (v = E ? _ : -1e-4),
                      this.render(v, !0),
                      this.vars.repeatRefresh && !g && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !l)
                  )
                    return this;
                  Ce(this, g);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((h = (function (t, e, n) {
                    var r;
                    if (n > e)
                      for (r = t._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > e) return r;
                        r = r._next;
                      }
                    else
                      for (r = t._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < e) return r;
                        r = r._prev;
                      }
                  })(this, pt(v), pt(r))),
                  h && (b -= r - (r = h._start))),
                (this._tTime = b),
                (this._time = r),
                (this._act = !f),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (v = 0)),
                !v && r && !e && (he(this, "onStart"), this._tTime !== b))
              )
                return this;
              if (r >= v && t >= 0)
                for (o = this._first; o; ) {
                  if (
                    ((a = o._next),
                    (o._act || r >= o._start) && o._ts && h !== o)
                  ) {
                    if (o.parent !== this) return this.render(t, e, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (r - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (r - o._start) * o._ts,
                        e,
                        n
                      ),
                      r !== this._time || (!this._ts && !l))
                    ) {
                      (h = 0), a && (b += this._zTime = -1e-8);
                      break;
                    }
                  }
                  o = a;
                }
              else {
                o = this._last;
                for (var T = t < 0 ? t : r; o; ) {
                  if (
                    ((a = o._prev), (o._act || T <= o._end) && o._ts && h !== o)
                  ) {
                    if (o.parent !== this) return this.render(t, e, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (T - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (T - o._start) * o._ts,
                        e,
                        n || (i && (o._initted || o._startAt))
                      ),
                      r !== this._time || (!this._ts && !l))
                    ) {
                      (h = 0), a && (b += this._zTime = T ? -1e-8 : x);
                      break;
                    }
                  }
                  o = a;
                }
              }
              if (
                h &&
                !e &&
                (this.pause(),
                (h.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1),
                this._ts)
              )
                return (this._start = d), zt(this), this.render(t, e, n);
              this._onUpdate && !e && he(this, "onUpdate", !0),
                ((b === y && this._tTime >= this.totalDuration()) ||
                  (!b && v)) &&
                  ((d !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !_) &&
                      ((b === y && this._ts > 0) || (!b && this._ts < 0)) &&
                      kt(this, 1),
                    e ||
                      (t < 0 && !v) ||
                      (!b && !v && y) ||
                      (he(
                        this,
                        b === y && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(b < y && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (o.add = function (t, e) {
            var n = this;
            if ((C(e) || (e = Yt(this, e, t)), !(t instanceof De))) {
              if (D(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e);
                  }),
                  this
                );
              if (k(t)) return this.addLabel(t, e);
              if (!M(t)) return this;
              t = Ke.delayedCall(0, t);
            }
            return this !== t ? jt(this, t, e) : this;
          }),
          (o.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -b);
            for (var i = [], o = this._first; o; )
              o._start >= r &&
                (o instanceof Ke
                  ? e && i.push(o)
                  : (n && i.push(o),
                    t && i.push.apply(i, o.getChildren(!0, e, n)))),
                (o = o._next);
            return i;
          }),
          (o.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n];
          }),
          (o.remove = function (t) {
            return k(t)
              ? this.removeLabel(t)
              : M(t)
              ? this.killTweensOf(t)
              : (St(this, t),
                t === this._recent && (this._recent = this._last),
                Mt(this));
          }),
          (o.totalTime = function (t, e) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = pt(
                    Ee.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts)
                  )),
                n.prototype.totalTime.call(this, t, e),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (o.addLabel = function (t, e) {
            return (this.labels[t] = Yt(this, e)), this;
          }),
          (o.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (o.addPause = function (t, e, n) {
            var r = Ke.delayedCall(0, e || Z, n);
            return (
              (r.data = "isPause"),
              (this._hasPause = 1),
              jt(this, r, Yt(this, t))
            );
          }),
          (o.removePause = function (t) {
            var e = this._first;
            for (t = Yt(this, t); e; )
              e._start === t && "isPause" === e.data && kt(e), (e = e._next);
          }),
          (o.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--; )
              je !== r[i] && r[i].kill(t, e);
            return this;
          }),
          (o.getTweensOf = function (t, e) {
            for (var n, r = [], i = te(t), o = this._first, s = C(e); o; )
              o instanceof Ke
                ? gt(o._targets, i) &&
                  (s
                    ? (!je || (o._initted && o._ts)) &&
                      o.globalTime(0) <= e &&
                      o.globalTime(o.totalDuration()) > e
                    : !e || o.isActive()) &&
                  r.push(o)
                : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
                (o = o._next);
            return r;
          }),
          (o.tweenTo = function (t, e) {
            e = e || {};
            var n,
              r = this,
              i = Yt(r, t),
              o = e,
              s = o.startAt,
              a = o.onStart,
              u = o.onStartParams,
              c = o.immediateRender,
              l = Ke.to(
                r,
                xt(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (s && "time" in s ? s.time : r._time)) /
                          r.timeScale()
                      ) ||
                      x,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (s && "time" in s ? s.time : r._time)) /
                              r.timeScale()
                          );
                        l._dur !== t && Vt(l, t, 0, 1).render(l._time, !0, !0),
                          (n = 1);
                      }
                      a && a.apply(l, u || []);
                    },
                  },
                  e
                )
              );
            return c ? l.render(0) : l;
          }),
          (o.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, xt({ startAt: { time: Yt(this, t) } }, n));
          }),
          (o.recent = function () {
            return this._recent;
          }),
          (o.nextLabel = function (t) {
            return void 0 === t && (t = this._time), le(this, Yt(this, t));
          }),
          (o.previousLabel = function (t) {
            return void 0 === t && (t = this._time), le(this, Yt(this, t), 1);
          }),
          (o.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + x);
          }),
          (o.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, o = this.labels; i; )
              i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (r in o) o[r] >= n && (o[r] += t);
            return Mt(this);
          }),
          (o.invalidate = function (t) {
            var e = this._first;
            for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
            return n.prototype.invalidate.call(this, t);
          }),
          (o.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Mt(this)
            );
          }),
          (o.totalDuration = function (t) {
            var e,
              n,
              r,
              i = 0,
              o = this,
              a = o._last,
              u = b;
            if (arguments.length)
              return o.timeScale(
                (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -t : t)
              );
            if (o._dirty) {
              for (r = o.parent; a; )
                (e = a._prev),
                  a._dirty && a.totalDuration(),
                  (n = a._start) > u && o._sort && a._ts && !o._lock
                    ? ((o._lock = 1), (jt(o, a, n - a._delay, 1)._lock = 0))
                    : (u = n),
                  n < 0 &&
                    a._ts &&
                    ((i -= n),
                    ((!r && !o._dp) || (r && r.smoothChildTiming)) &&
                      ((o._start += n / o._ts),
                      (o._time -= n),
                      (o._tTime -= n)),
                    o.shiftChildren(-n, !1, -Infinity),
                    (u = 0)),
                  a._end > i && a._ts && (i = a._end),
                  (a = e);
              Vt(o, o === s && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
          }),
          (r.updateRoot = function (t) {
            if ((s._ts && (yt(s, Rt(t, s)), (h = Ee.frame)), Ee.frame >= st)) {
              st += y.autoSleep || 120;
              var e = s._first;
              if ((!e || !e._ts) && y.autoSleep && Ee._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || Ee.sleep();
              }
            }
          }),
          r
        );
      })(De);
      xt(Le.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var je,
        Be,
        qe = function (t, e, n, r, i, o, s) {
          var a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            m = new ln(this._pt, t, e, 0, 1, rn, null, i),
            g = 0,
            v = 0;
          for (
            m.b = n,
              m.e = r,
              n += "",
              (d = ~(r += "").indexOf("random(")) && (r = ue(r)),
              o && (o((p = [n, r]), t, e), (n = p[0]), (r = p[1])),
              u = n.match(q) || [];
            (a = q.exec(r));

          )
            (l = a[0]),
              (h = r.substring(g, a.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === h.substr(-5) && (c = 1),
              l !== u[v++] &&
                ((f = parseFloat(u[v - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: h || 1 === v ? h : ",",
                  s: f,
                  c: "=" === l.charAt(1) ? mt(f, l) - f : parseFloat(l) - f,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (g = q.lastIndex));
          return (
            (m.c = g < r.length ? r.substring(g, r.length) : ""),
            (m.fp = s),
            (U.test(r) || d) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        Ue = function (t, e, n, r, i, o, s, a, u, c) {
          M(r) && (r = r(i || 0, t, o));
          var l,
            h = t[e],
            f =
              "get" !== n
                ? n
                : M(h)
                ? u
                  ? t[
                      e.indexOf("set") || !M(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : h,
            d = M(h) ? (u ? Qe : Ze) : Ge;
          if (
            (k(r) &&
              (~r.indexOf("random(") && (r = ue(r)),
              "=" === r.charAt(1) &&
                ((l = mt(f, r) + (Zt(f) || 0)) || 0 === l) &&
                (r = l)),
            !c || f !== r || Be)
          )
            return isNaN(f * r) || "" === r
              ? (!h && !(e in t) && X(e, r),
                qe.call(this, t, e, f, r, d, a || y.stringFilter, u))
              : ((l = new ln(
                  this._pt,
                  t,
                  e,
                  +f || 0,
                  r - (f || 0),
                  "boolean" == typeof h ? nn : en,
                  0,
                  d
                )),
                u && (l.fp = u),
                s && l.modifier(s, this, t),
                (this._pt = l));
        },
        Ne = function (t, e, n, r, i, o) {
          var s, a, u, c;
          if (
            it[t] &&
            !1 !==
              (s = new it[t]()).init(
                i,
                s.rawVars
                  ? e[t]
                  : (function (t, e, n, r, i) {
                      if (
                        (M(t) && (t = He(t, i, e, n, r)),
                        !F(t) || (t.style && t.nodeType) || D(t) || z(t))
                      )
                        return k(t) ? He(t, i, e, n, r) : t;
                      var o,
                        s = {};
                      for (o in t) s[o] = He(t[o], i, e, n, r);
                      return s;
                    })(e[t], r, i, o, n),
                n,
                r,
                o
              ) &&
            ((n._pt = a =
              new ln(n._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
            n !== f)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(i)], c = s._props.length;
              c--;

            )
              u[s._props[c]] = a;
          return s;
        },
        Ve = function t(e, n, o) {
          var a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            m,
            g,
            v,
            y,
            w,
            E = e.vars,
            A = E.ease,
            T = E.startAt,
            P = E.immediateRender,
            S = E.lazy,
            k = E.onUpdate,
            M = E.onUpdateParams,
            C = E.callbackScope,
            O = E.runBackwards,
            F = E.yoyoEase,
            I = E.keyframes,
            R = E.autoRevert,
            z = e._dur,
            D = e._startAt,
            L = e._targets,
            j = e.parent,
            B = j && "nested" === j.data ? j.vars.targets : L,
            q = "auto" === e._overwrite && !r,
            U = e.timeline;
          if (
            (U && (!I || !A) && (A = "none"),
            (e._ease = Oe(A, _.ease)),
            (e._yEase = F ? Me(Oe(!0 === F ? A : F, _.ease)) : 0),
            F &&
              e._yoyo &&
              !e._repeat &&
              ((F = e._yEase), (e._yEase = e._ease), (e._ease = F)),
            (e._from = !U && !!E.runBackwards),
            !U || (I && !E.stagger))
          ) {
            if (
              ((y = (p = L[0] ? lt(L[0]).harness : 0) && E[p.prop]),
              (a = At(E, et)),
              D &&
                (D._zTime < 0 && D.progress(1),
                n < 0 && O && P && !R
                  ? D.render(-1, !0)
                  : D.revert(O && z ? J : Q),
                (D._lazy = 0)),
              T)
            ) {
              if (
                (kt(
                  (e._startAt = Ke.set(
                    L,
                    xt(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: j,
                        immediateRender: !0,
                        lazy: $(S),
                        startAt: null,
                        delay: 0,
                        onUpdate: k,
                        onUpdateParams: M,
                        callbackScope: C,
                        stagger: 0,
                      },
                      T
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                n < 0 && (i || (!P && !R)) && e._startAt.revert(J),
                P && z && n <= 0 && o <= 0)
              )
                return void (n && (e._zTime = n));
            } else if (O && z && !D)
              if (
                (n && (P = !1),
                (c = xt(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: P && $(S),
                    immediateRender: P,
                    stagger: 0,
                    parent: j,
                  },
                  a
                )),
                y && (c[p.prop] = y),
                kt((e._startAt = Ke.set(L, c))),
                (e._startAt._dp = 0),
                n < 0 && (i ? e._startAt.revert(J) : e._startAt.render(-1, !0)),
                (e._zTime = n),
                P)
              ) {
                if (!n) return;
              } else t(e._startAt, x, x);
            for (
              e._pt = e._ptCache = 0, S = (z && $(S)) || (S && !z), u = 0;
              u < L.length;
              u++
            ) {
              if (
                ((d = (h = L[u])._gsap || ct(L)[u]._gsap),
                (e._ptLookup[u] = g = {}),
                rt[d.id] && nt.length && vt(),
                (v = B === L ? u : B.indexOf(h)),
                p &&
                  !1 !== (m = new p()).init(h, y || a, e, v, B) &&
                  ((e._pt = l =
                    new ln(e._pt, h, m.name, 0, 1, m.render, m, 0, m.priority)),
                  m._props.forEach(function (t) {
                    g[t] = l;
                  }),
                  m.priority && (f = 1)),
                !p || y)
              )
                for (c in a)
                  it[c] && (m = Ne(c, a, e, v, h, B))
                    ? m.priority && (f = 1)
                    : (g[c] = l =
                        Ue.call(e, h, c, "get", a[c], v, B, 0, E.stringFilter));
              e._op && e._op[u] && e.kill(h, e._op[u]),
                q &&
                  e._pt &&
                  ((je = e),
                  s.killTweensOf(h, g, e.globalTime(n)),
                  (w = !e.parent),
                  (je = 0)),
                e._pt && S && (rt[d.id] = 1);
            }
            f && cn(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = k),
            (e._initted = (!e._op || e._pt) && !w),
            I && n <= 0 && U.render(b, !0, !0);
        },
        We = function (t, e, n, r) {
          var i,
            o,
            s = e.ease || r || "power1.inOut";
          if (D(e))
            (o = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return o.push({ t: (n / (e.length - 1)) * 100, v: t, e: s });
              });
          else
            for (i in e)
              (o = n[i] || (n[i] = [])),
                "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: s });
        },
        He = function (t, e, n, r, i) {
          return M(t)
            ? t.call(e, n, r, i)
            : k(t) && ~t.indexOf("random(")
            ? ue(t)
            : t;
        },
        Ye = ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Xe = {};
      ft(Ye + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (Xe[t] = 1);
      });
      var Ke = (function (n) {
        function o(e, i, o, a) {
          var u;
          "number" == typeof i && ((o.duration = i), (i = o), (o = null));
          var c,
            l,
            h,
            f,
            d,
            p,
            m,
            g,
            v = (u = n.call(this, a ? i : Tt(i)) || this).vars,
            _ = v.duration,
            b = v.delay,
            x = v.immediateRender,
            w = v.stagger,
            E = v.overwrite,
            A = v.keyframes,
            T = v.defaults,
            P = v.scrollTrigger,
            S = v.yoyoEase,
            k = i.parent || s,
            M = (D(e) || z(e) ? C(e[0]) : "length" in i) ? [e] : te(e);
          if (
            ((u._targets = M.length
              ? ct(M)
              : K(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !y.nullTargetWarn
                ) || []),
            (u._ptLookup = []),
            (u._overwrite = E),
            A || w || R(_) || R(b))
          ) {
            if (
              ((i = u.vars),
              (c = u.timeline =
                new Le({
                  data: "nested",
                  defaults: T || {},
                  targets: k && "nested" === k.data ? k.vars.targets : M,
                })).kill(),
              (c.parent = c._dp = t(u)),
              (c._start = 0),
              w || R(_) || R(b))
            ) {
              if (((f = M.length), (m = w && re(w)), F(w)))
                for (d in w) ~Ye.indexOf(d) && (g || (g = {}), (g[d] = w[d]));
              for (l = 0; l < f; l++)
                ((h = At(i, Xe)).stagger = 0),
                  S && (h.yoyoEase = S),
                  g && wt(h, g),
                  (p = M[l]),
                  (h.duration = +He(_, t(u), l, p, M)),
                  (h.delay = (+He(b, t(u), l, p, M) || 0) - u._delay),
                  !w &&
                    1 === f &&
                    h.delay &&
                    ((u._delay = b = h.delay), (u._start += b), (h.delay = 0)),
                  c.to(p, h, m ? m(l, p, M) : 0),
                  (c._ease = Te.none);
              c.duration() ? (_ = b = 0) : (u.timeline = 0);
            } else if (A) {
              Tt(xt(c.vars.defaults, { ease: "none" })),
                (c._ease = Oe(A.ease || i.ease || "none"));
              var O,
                I,
                L,
                j = 0;
              if (D(A))
                A.forEach(function (t) {
                  return c.to(M, t, ">");
                }),
                  c.duration();
              else {
                for (d in ((h = {}), A))
                  "ease" === d ||
                    "easeEach" === d ||
                    We(d, A[d], h, A.easeEach);
                for (d in h)
                  for (
                    O = h[d].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      j = 0,
                      l = 0;
                    l < O.length;
                    l++
                  )
                    ((L = {
                      ease: (I = O[l]).e,
                      duration: ((I.t - (l ? O[l - 1].t : 0)) / 100) * _,
                    })[d] = I.v),
                      c.to(M, L, j),
                      (j += L.duration);
                c.duration() < _ && c.to({}, { duration: _ - c.duration() });
              }
            }
            _ || u.duration((_ = c.duration()));
          } else u.timeline = 0;
          return (
            !0 !== E || r || ((je = t(u)), s.killTweensOf(M), (je = 0)),
            jt(k, t(u), o),
            i.reversed && u.reverse(),
            i.paused && u.paused(!0),
            (x ||
              (!_ &&
                !A &&
                u._start === pt(k._time) &&
                $(x) &&
                Ft(t(u)) &&
                "nested" !== k.data)) &&
              ((u._tTime = -1e-8), u.render(Math.max(0, -b) || 0)),
            P && Bt(t(u), P),
            u
          );
        }
        e(o, n);
        var a = o.prototype;
        return (
          (a.render = function (t, e, n) {
            var r,
              o,
              s,
              a,
              u,
              c,
              l,
              h,
              f,
              d = this._time,
              p = this._tDur,
              m = this._dur,
              g = t < 0,
              v = t > p - x && !g ? p : t < x ? 0 : t;
            if (m) {
              if (
                v !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== g)
              ) {
                if (((r = v), (h = this.timeline), this._repeat)) {
                  if (((a = m + this._rDelay), this._repeat < -1 && g))
                    return this.totalTime(100 * a + t, e, n);
                  if (
                    ((r = pt(v % a)),
                    v === p
                      ? ((s = this._repeat), (r = m))
                      : ((s = ~~(v / a)) && s === v / a && ((r = m), s--),
                        r > m && (r = m)),
                    (c = this._yoyo && 1 & s) &&
                      ((f = this._yEase), (r = m - r)),
                    (u = It(this._tTime, a)),
                    r === d && !n && this._initted)
                  )
                    return (this._tTime = v), this;
                  s !== u &&
                    (h && this._yEase && Ce(h, c),
                    !this.vars.repeatRefresh ||
                      c ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(pt(a * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (qt(this, g ? t : r, n, e, v))
                    return (this._tTime = 0), this;
                  if (d !== this._time) return this;
                  if (m !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = v),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (f || this._ease)(r / m)),
                  this._from && (this.ratio = l = 1 - l),
                  r && !d && !e && (he(this, "onStart"), this._tTime !== v))
                )
                  return this;
                for (o = this._pt; o; ) o.r(l, o.d), (o = o._next);
                (h &&
                  h.render(
                    t < 0
                      ? t
                      : !r && c
                      ? -1e-8
                      : h._dur * h._ease(r / this._dur),
                    e,
                    n
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (g && Ot(this, t, 0, n), he(this, "onUpdate")),
                  this._repeat &&
                    s !== u &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    he(this, "onRepeat"),
                  (v !== this._tDur && v) ||
                    this._tTime !== v ||
                    (g && !this._onUpdate && Ot(this, t, 0, !0),
                    (t || !m) &&
                      ((v === this._tDur && this._ts > 0) ||
                        (!v && this._ts < 0)) &&
                      kt(this, 1),
                    e ||
                      (g && !d) ||
                      !(v || d || c) ||
                      (he(
                        this,
                        v === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(v < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, r) {
                var o,
                  s,
                  a,
                  u = t.ratio,
                  c =
                    e < 0 ||
                    (!e &&
                      ((!t._start && Ut(t) && (t._initted || !Nt(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Nt(t))))
                      ? 0
                      : 1,
                  l = t._rDelay,
                  h = 0;
                if (
                  (l &&
                    t._repeat &&
                    ((h = Gt(0, t._tDur, e)),
                    (s = It(h, l)),
                    t._yoyo && 1 & s && (c = 1 - c),
                    s !== It(t._tTime, l) &&
                      ((u = 1 - c),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  c !== u || i || r || t._zTime === x || (!e && t._zTime))
                ) {
                  if (!t._initted && qt(t, e, r, n, h)) return;
                  for (
                    a = t._zTime,
                      t._zTime = e || (n ? x : 0),
                      n || (n = e && !a),
                      t.ratio = c,
                      t._from && (c = 1 - c),
                      t._time = 0,
                      t._tTime = h,
                      o = t._pt;
                    o;

                  )
                    o.r(c, o.d), (o = o._next);
                  e < 0 && Ot(t, e, 0, !0),
                    t._onUpdate && !n && he(t, "onUpdate"),
                    h && t._repeat && !n && t.parent && he(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === c &&
                      (c && kt(t, 1),
                      n ||
                        i ||
                        (he(t, c ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (a.targets = function () {
            return this._targets;
          }),
          (a.invalidate = function (t) {
            return (
              (!t || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(t),
              n.prototype.invalidate.call(this, t)
            );
          }),
          (a.resetTo = function (t, e, n, r) {
            d || Ee.wake(), this._ts || this.play();
            var i = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || Ve(this, i),
              (function (t, e, n, r, i, o, s) {
                var a,
                  u,
                  c,
                  l,
                  h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!h)
                  for (
                    h = t._ptCache[e] = [],
                      c = t._ptLookup,
                      l = t._targets.length;
                    l--;

                  ) {
                    if ((a = c[l][e]) && a.d && a.d._pt)
                      for (a = a.d._pt; a && a.p !== e && a.fp !== e; )
                        a = a._next;
                    if (!a)
                      return (
                        (Be = 1), (t.vars[e] = "+=0"), Ve(t, s), (Be = 0), 1
                      );
                    h.push(a);
                  }
                for (l = h.length; l--; )
                  ((a = (u = h[l])._pt || u).s =
                    (!r && 0 !== r) || i ? a.s + (r || 0) + o * a.c : r),
                    (a.c = n - a.s),
                    u.e && (u.e = dt(n) + Zt(u.e)),
                    u.b && (u.b = a.s + Zt(u.b));
              })(this, t, e, n, r, this._ease(i / this._dur), i)
                ? this.resetTo(t, e, n, r)
                : (Dt(this, 0),
                  this.parent ||
                    Pt(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (a.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? fe(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, je && !0 !== je.vars.overwrite)
                  ._first || fe(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Vt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              o,
              s,
              a,
              u,
              c,
              l = this._targets,
              h = t ? te(t) : l,
              f = this._ptLookup,
              d = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var n = t.length, r = n === e.length;
                  r && n-- && t[n] === e[n];

                );
                return n < 0;
              })(l, h)
            )
              return "all" === e && (this._pt = 0), fe(this);
            for (
              r = this._op = this._op || [],
                "all" !== e &&
                  (k(e) &&
                    ((a = {}),
                    ft(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var n,
                      r,
                      i,
                      o,
                      s = t[0] ? lt(t[0]).harness : 0,
                      a = s && s.aliases;
                    if (!a) return e;
                    for (r in ((n = wt({}, e)), a))
                      if ((r in n))
                        for (i = (o = a[r].split(",")).length; i--; )
                          n[o[i]] = n[r];
                    return n;
                  })(l, e))),
                c = l.length;
              c--;

            )
              if (~h.indexOf(l[c]))
                for (a in ((i = f[c]),
                "all" === e
                  ? ((r[c] = e), (s = i), (o = {}))
                  : ((o = r[c] = r[c] || {}), (s = e)),
                s))
                  (u = i && i[a]) &&
                    (("kill" in u.d && !0 !== u.d.kill(a)) ||
                      St(this, u, "_pt"),
                    delete i[a]),
                    "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && d && fe(this), this;
          }),
          (o.to = function (t, e) {
            return new o(t, e, arguments[2]);
          }),
          (o.from = function (t, e) {
            return Xt(1, arguments);
          }),
          (o.delayedCall = function (t, e, n, r) {
            return new o(e, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: e,
              onReverseComplete: e,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: r,
            });
          }),
          (o.fromTo = function (t, e, n) {
            return Xt(2, arguments);
          }),
          (o.set = function (t, e) {
            return (
              (e.duration = 0), e.repeatDelay || (e.repeat = 0), new o(t, e)
            );
          }),
          (o.killTweensOf = function (t, e, n) {
            return s.killTweensOf(t, e, n);
          }),
          o
        );
      })(De);
      xt(Ke.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        ft("staggerTo,staggerFrom,staggerFromTo", function (t) {
          Ke[t] = function () {
            var e = new Le(),
              n = Qt.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            );
          };
        });
      var Ge = function (t, e, n) {
          return (t[e] = n);
        },
        Ze = function (t, e, n) {
          return t[e](n);
        },
        Qe = function (t, e, n, r) {
          return t[e](r.fp, n);
        },
        Je = function (t, e, n) {
          return t.setAttribute(e, n);
        },
        tn = function (t, e) {
          return M(t[e]) ? Ze : O(t[e]) && t.setAttribute ? Je : Ge;
        },
        en = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        nn = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        rn = function (t, e) {
          var n = e._pt,
            r = "";
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                r),
                (n = n._next);
            r += e.c;
          }
          e.set(e.t, e.p, r, e);
        },
        on = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        sn = function (t, e, n, r) {
          for (var i, o = this._pt; o; )
            (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
        },
        an = function (t) {
          for (var e, n, r = this._pt; r; )
            (n = r._next),
              (r.p === t && !r.op) || r.op === t
                ? St(this, r, "_pt")
                : r.dep || (e = 1),
              (r = n);
          return !e;
        },
        un = function (t, e, n, r) {
          r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
        },
        cn = function (t) {
          for (var e, n, r, i, o = t._pt; o; ) {
            for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
            (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
              (o._next = n) ? (n._prev = o) : (i = o),
              (o = e);
          }
          t._pt = r;
        },
        ln = (function () {
          function t(t, e, n, r, i, o, s, a, u) {
            (this.t = e),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = o || en),
              (this.d = s || this),
              (this.set = a || Ge),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = un),
                (this.m = t),
                (this.mt = n),
                (this.tween = e);
            }),
            t
          );
        })();
      ft(
        ut +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (et[t] = 1);
        }
      ),
        (W.TweenMax = W.TweenLite = Ke),
        (W.TimelineLite = W.TimelineMax = Le),
        (s = new Le({
          sortChildren: !1,
          defaults: _,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (y.stringFilter = we);
      var hn = [],
        fn = {},
        dn = [],
        pn = 0,
        mn = function (t) {
          return (fn[t] || dn).map(function (t) {
            return t();
          });
        },
        gn = function () {
          var t = Date.now(),
            e = [];
          t - pn > 2 &&
            (mn("matchMediaInit"),
            hn.forEach(function (t) {
              var n,
                r,
                i,
                o,
                s = t.queries,
                u = t.conditions;
              for (r in s)
                (n = a.matchMedia(s[r]).matches) && (i = 1),
                  n !== u[r] && ((u[r] = n), (o = 1));
              o && (t.revert(), i && e.push(t));
            }),
            mn("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t);
            }),
            (pn = t),
            mn("matchMedia"));
        },
        vn = (function () {
          function t(t, e) {
            (this.selector = e && ee(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              M(t) && ((n = e), (e = t), (t = M));
              var r = this,
                i = function () {
                  var t,
                    i = o,
                    s = r.selector;
                  return (
                    i && i !== r && i.data.push(r),
                    n && (r.selector = ee(n)),
                    (o = r),
                    (t = e.apply(r, arguments)),
                    M(t) && r._r.push(t),
                    (o = i),
                    (r.selector = s),
                    (r.isReverted = !1),
                    t
                  );
                };
              return (r.last = i), t === M ? i(r) : t ? (r[t] = i) : i;
            }),
            (e.ignore = function (t) {
              var e = o;
              (o = null), t(this), (o = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (n) {
                  return n instanceof t
                    ? e.push.apply(e, n.getTweens())
                    : n instanceof Ke &&
                        !(n.parent && "nested" === n.parent.data) &&
                        e.push(n);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var n = this;
              if (t) {
                var r = this.getTweens();
                this.data.forEach(function (t) {
                  "isFlip" === t.data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return r.splice(r.indexOf(t), 1);
                    }));
                }),
                  r
                    .map(function (t) {
                      return { g: t.globalTime(0), t };
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1;
                    })
                    .forEach(function (e) {
                      return e.t.revert(t);
                    }),
                  this.data.forEach(function (e) {
                    return !(e instanceof De) && e.revert && e.revert(t);
                  }),
                  this._r.forEach(function (e) {
                    return e(t, n);
                  }),
                  (this.isReverted = !0);
              } else
                this.data.forEach(function (t) {
                  return t.kill && t.kill();
                });
              if ((this.clear(), e)) {
                var i = hn.indexOf(this);
                ~i && hn.splice(i, 1);
              }
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        yn = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              F(t) || (t = { matches: t });
              var r,
                i,
                o,
                s = new vn(0, n || this.scope),
                u = (s.conditions = {});
              for (i in (this.contexts.push(s),
              (e = s.add("onMatch", e)),
              (s.queries = t),
              t))
                "all" === i
                  ? (o = 1)
                  : (r = a.matchMedia(t[i])) &&
                    (hn.indexOf(s) < 0 && hn.push(s),
                    (u[i] = r.matches) && (o = 1),
                    r.addListener
                      ? r.addListener(gn)
                      : r.addEventListener("change", gn));
              return o && e(s), this;
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        _n = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            e.forEach(function (t) {
              return de(t);
            });
          },
          timeline: function (t) {
            return new Le(t);
          },
          getTweensOf: function (t, e) {
            return s.getTweensOf(t, e);
          },
          getProperty: function (t, e, n, r) {
            k(t) && (t = te(t)[0]);
            var i = lt(t || {}).get,
              o = n ? bt : _t;
            return (
              "native" === n && (n = ""),
              t
                ? e
                  ? o(((it[e] && it[e].get) || i)(t, e, n, r))
                  : function (e, n, r) {
                      return o(((it[e] && it[e].get) || i)(t, e, n, r));
                    }
                : t
            );
          },
          quickSetter: function (t, e, n) {
            if ((t = te(t)).length > 1) {
              var r = t.map(function (t) {
                  return wn.quickSetter(t, e, n);
                }),
                i = r.length;
              return function (t) {
                for (var e = i; e--; ) r[e](t);
              };
            }
            t = t[0] || {};
            var o = it[e],
              s = lt(t),
              a = (s.harness && (s.harness.aliases || {})[e]) || e,
              u = o
                ? function (e) {
                    var r = new o();
                    (f._pt = 0),
                      r.init(t, n ? e + n : e, f, 0, [t]),
                      r.render(1, r),
                      f._pt && on(1, f);
                  }
                : s.set(t, a);
            return o
              ? u
              : function (e) {
                  return u(t, a, n ? e + n : e, s, 1);
                };
          },
          quickTo: function (t, e, n) {
            var r,
              i = wn.to(
                t,
                wt((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {})
              ),
              o = function (t, n, r) {
                return i.resetTo(e, t, n, r);
              };
            return (o.tween = i), o;
          },
          isTweening: function (t) {
            return s.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Oe(t.ease, _.ease)), Et(_, t || {});
          },
          config: function (t) {
            return Et(y, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              n = t.effect,
              r = t.plugins,
              i = t.defaults,
              o = t.extendTimeline;
            (r || "").split(",").forEach(function (t) {
              return (
                t &&
                !it[t] &&
                !W[t] &&
                K(e + " effect requires " + t + " plugin.")
              );
            }),
              (ot[e] = function (t, e, r) {
                return n(te(t), xt(e || {}, i), r);
              }),
              o &&
                (Le.prototype[e] = function (t, n, r) {
                  return this.add(ot[e](t, F(n) ? n : (r = n) && {}, this), r);
                });
          },
          registerEase: function (t, e) {
            Te[t] = Oe(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Oe(t, e) : Te;
          },
          getById: function (t) {
            return s.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n,
              r,
              i = new Le(t);
            for (
              i.smoothChildTiming = $(t.smoothChildTiming),
                s.remove(i),
                i._dp = 0,
                i._time = i._tTime = s._time,
                n = s._first;
              n;

            )
              (r = n._next),
                (!e &&
                  !n._dur &&
                  n instanceof Ke &&
                  n.vars.onComplete === n._targets[0]) ||
                  jt(i, n, n._start - n._delay),
                (n = r);
            return jt(s, i, 0), i;
          },
          context: function (t, e) {
            return t ? new vn(t, e) : o;
          },
          matchMedia: function (t) {
            return new yn(t);
          },
          matchMediaRefresh: function () {
            return (
              hn.forEach(function (t) {
                var e,
                  n,
                  r = t.conditions;
                for (n in r) r[n] && ((r[n] = !1), (e = 1));
                e && t.revert();
              }) || gn()
            );
          },
          addEventListener: function (t, e) {
            var n = fn[t] || (fn[t] = []);
            ~n.indexOf(e) || n.push(e);
          },
          removeEventListener: function (t, e) {
            var n = fn[t],
              r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          },
          utils: {
            wrap: function t(e, n, r) {
              var i = n - e;
              return D(e)
                ? ae(e, t(0, e.length), n)
                : Kt(r, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, n, r) {
              var i = n - e,
                o = 2 * i;
              return D(e)
                ? ae(e, t(0, e.length - 1), n)
                : Kt(r, function (t) {
                    return (
                      e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t)
                    );
                  });
            },
            distribute: re,
            random: se,
            snap: oe,
            normalize: function (t, e, n) {
              return ce(t, e, 0, 1, n);
            },
            getUnit: Zt,
            clamp: function (t, e, n) {
              return Kt(n, function (n) {
                return Gt(t, e, n);
              });
            },
            splitColor: ve,
            toArray: te,
            selector: ee,
            mapRange: ce,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (n) {
                return t(parseFloat(n)) + (e || Zt(n));
              };
            },
            interpolate: function t(e, n, r, i) {
              var o = isNaN(e + n)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * n;
                  };
              if (!o) {
                var s,
                  a,
                  u,
                  c,
                  l,
                  h = k(e),
                  f = {};
                if ((!0 === r && (i = 1) && (r = null), h))
                  (e = { p: e }), (n = { p: n });
                else if (D(e) && !D(n)) {
                  for (u = [], c = e.length, l = c - 2, a = 1; a < c; a++)
                    u.push(t(e[a - 1], e[a]));
                  c--,
                    (o = function (t) {
                      t *= c;
                      var e = Math.min(l, ~~t);
                      return u[e](t - e);
                    }),
                    (r = n);
                } else i || (e = wt(D(e) ? [] : {}, e));
                if (!u) {
                  for (s in n) Ue.call(f, e, s, "get", n[s]);
                  o = function (t) {
                    return on(t, f) || (h ? e.p : e);
                  };
                }
              }
              return Kt(r, o);
            },
            shuffle: ne,
          },
          install: Y,
          effects: ot,
          ticker: Ee,
          updateRoot: Le.updateRoot,
          plugins: it,
          globalTimeline: s,
          core: {
            PropTween: ln,
            globals: G,
            Tween: Ke,
            Timeline: Le,
            Animation: De,
            getCache: lt,
            _removeLinkedListItem: St,
            reverting: function () {
              return i;
            },
            context: function (t) {
              return t && o && (o.data.push(t), (t._ctx = o)), o;
            },
            suppressOverwrites: function (t) {
              return (r = t);
            },
          },
        };
      ft("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (_n[t] = Ke[t]);
      }),
        Ee.add(Le.updateRoot),
        (f = _n.to({}, { duration: 0 }));
      var bn = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
          return n;
        },
        xn = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, r) {
              r._onInit = function (t) {
                var r, i;
                if (
                  (k(n) &&
                    ((r = {}),
                    ft(n, function (t) {
                      return (r[t] = 1);
                    }),
                    (n = r)),
                  e)
                ) {
                  for (i in ((r = {}), n)) r[i] = e(n[i]);
                  n = r;
                }
                !(function (t, e) {
                  var n,
                    r,
                    i,
                    o = t._targets;
                  for (n in e)
                    for (r = o.length; r--; )
                      (i = t._ptLookup[r][n]) &&
                        (i = i.d) &&
                        (i._pt && (i = bn(i, n)),
                        i && i.modifier && i.modifier(e[n], t, o[r], n));
                })(t, n);
              };
            },
          };
        },
        wn =
          _n.registerPlugin(
            {
              name: "attr",
              init: function (t, e, n, r, i) {
                var o, s, a;
                for (o in ((this.tween = n), e))
                  (a = t.getAttribute(o) || ""),
                    ((s = this.add(
                      t,
                      "setAttribute",
                      (a || 0) + "",
                      e[o],
                      r,
                      i,
                      0,
                      0,
                      o
                    )).op = o),
                    (s.b = a),
                    this._props.push(o);
              },
              render: function (t, e) {
                for (var n = e._pt; n; )
                  i ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var n = e.length; n--; )
                  this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
              },
            },
            xn("roundProps", ie),
            xn("modifiers"),
            xn("snap", oe)
          ) || _n;
      (Ke.version = Le.version = wn.version = "3.11.3"),
        (l = 1),
        I() && Ae(),
        Te.Power0,
        Te.Power1,
        Te.Power2,
        Te.Power3,
        Te.Power4,
        Te.Linear,
        Te.Quad,
        Te.Cubic,
        Te.Quart,
        Te.Quint,
        Te.Strong,
        Te.Elastic,
        Te.Back,
        Te.SteppedEase,
        Te.Bounce,
        Te.Sine,
        Te.Expo,
        Te.Circ;
      var En,
        An,
        Tn,
        Pn,
        Sn,
        kn,
        Mn,
        Cn,
        On = {},
        Fn = 180 / Math.PI,
        $n = Math.PI / 180,
        In = Math.atan2,
        Rn = /([A-Z])/g,
        zn = /(left|right|width|margin|padding|x)/i,
        Dn = /[\s,\(]\S/,
        Ln = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        jn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Bn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        qn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        Un = function (t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        Nn = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        Vn = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Wn = function (t, e, n) {
          return (t.style[e] = n);
        },
        Hn = function (t, e, n) {
          return t.style.setProperty(e, n);
        },
        Yn = function (t, e, n) {
          return (t._gsap[e] = n);
        },
        Xn = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        Kn = function (t, e, n, r, i) {
          var o = t._gsap;
          (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
        },
        Gn = function (t, e, n, r, i) {
          var o = t._gsap;
          (o[e] = n), o.renderTransform(i, o);
        },
        Zn = "transform",
        Qn = Zn + "Origin",
        Jn = function (t, e) {
          var n = this,
            r = this.target,
            i = r.style;
          if (t in On) {
            if (
              ((this.tfm = this.tfm || {}),
              "transform" !== t &&
                (~(t = Ln[t] || t).indexOf(",")
                  ? t.split(",").forEach(function (t) {
                      return (n.tfm[t] = vr(r, t));
                    })
                  : (this.tfm[t] = r._gsap.x ? r._gsap[t] : vr(r, t))),
              this.props.indexOf(Zn) >= 0)
            )
              return;
            r._gsap.svg &&
              ((this.svgo = r.getAttribute("data-svg-origin")),
              this.props.push(Qn, e, "")),
              (t = Zn);
          }
          (i || e) && this.props.push(t, e, i[t]);
        },
        tr = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        er = function () {
          var t,
            e,
            n = this.props,
            r = this.target,
            i = r.style,
            o = r._gsap;
          for (t = 0; t < n.length; t += 3)
            n[t + 1]
              ? (r[n[t]] = n[t + 2])
              : n[t + 2]
              ? (i[n[t]] = n[t + 2])
              : i.removeProperty(n[t].replace(Rn, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) o[e] = this.tfm[e];
            o.svg &&
              (o.renderTransform(),
              r.setAttribute("data-svg-origin", this.svgo || "")),
              !(t = Mn()) || t.isStart || i[Zn] || (tr(i), (o.uncache = 1));
          }
        },
        nr = function (t, e) {
          var n = { target: t, props: [], revert: er, save: Jn };
          return (
            e &&
              e.split(",").forEach(function (t) {
                return n.save(t);
              }),
            n
          );
        },
        rr = function (t, e) {
          var n = An.createElementNS
            ? An.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : An.createElement(t);
          return n.style ? n : An.createElement(t);
        },
        ir = function t(e, n, r) {
          var i = getComputedStyle(e);
          return (
            i[n] ||
            i.getPropertyValue(n.replace(Rn, "-$1").toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && t(e, sr(n) || n, 1)) ||
            ""
          );
        },
        or = "O,Moz,ms,Ms,Webkit".split(","),
        sr = function (t, e, n) {
          var r = (e || Sn).style,
            i = 5;
          if (t in r && !n) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(or[i] + t in r);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? or[i] : "") + t;
        },
        ar = function () {
          "undefined" != typeof window &&
            window.document &&
            ((En = window),
            (An = En.document),
            (Tn = An.documentElement),
            (Sn = rr("div") || { style: {} }),
            rr("div"),
            (Zn = sr(Zn)),
            (Qn = Zn + "Origin"),
            (Sn.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (Cn = !!sr("perspective")),
            (Mn = wn.core.reverting),
            (Pn = 1));
        },
        ur = function t(e) {
          var n,
            r = rr(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            o = this.nextSibling,
            s = this.style.cssText;
          if (
            (Tn.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
            Tn.removeChild(r),
            (this.style.cssText = s),
            n
          );
        },
        cr = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        lr = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (n) {
            e = ur.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === ur ||
              (e = ur.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +cr(t, ["x", "cx", "x1"]) || 0,
                  y: +cr(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        hr = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !lr(t));
        },
        fr = function (t, e) {
          if (e) {
            var n = t.style;
            e in On && e !== Qn && (e = Zn),
              n.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  n.removeProperty(e.replace(Rn, "-$1").toLowerCase()))
                : n.removeAttribute(e);
          }
        },
        dr = function (t, e, n, r, i, o) {
          var s = new ln(t._pt, e, n, 0, 1, o ? Vn : Nn);
          return (t._pt = s), (s.b = r), (s.e = i), t._props.push(n), s;
        },
        pr = { deg: 1, rad: 1, turn: 1 },
        mr = { grid: 1, flex: 1 },
        gr = function t(e, n, r, i) {
          var o,
            s,
            a,
            u,
            c = parseFloat(r) || 0,
            l = (r + "").trim().substr((c + "").length) || "px",
            h = Sn.style,
            f = zn.test(n),
            d = "svg" === e.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            g = "px" === i,
            v = "%" === i;
          return i === l || !c || pr[i] || pr[l]
            ? c
            : ("px" !== l && !g && (c = t(e, n, r, "px")),
              (u = e.getCTM && hr(e)),
              (!v && "%" !== l) || (!On[n] && !~n.indexOf("adius"))
                ? ((h[f ? "width" : "height"] = m + (g ? l : i)),
                  (s =
                    ~n.indexOf("adius") || ("em" === i && e.appendChild && !d)
                      ? e
                      : e.parentNode),
                  u && (s = (e.ownerSVGElement || {}).parentNode),
                  (s && s !== An && s.appendChild) || (s = An.body),
                  (a = s._gsap) &&
                  v &&
                  a.width &&
                  f &&
                  a.time === Ee.time &&
                  !a.uncache
                    ? dt((c / a.width) * m)
                    : ((v || "%" === l) &&
                        !mr[ir(s, "display")] &&
                        (h.position = ir(e, "position")),
                      s === e && (h.position = "static"),
                      s.appendChild(Sn),
                      (o = Sn[p]),
                      s.removeChild(Sn),
                      (h.position = "absolute"),
                      f &&
                        v &&
                        (((a = lt(s)).time = Ee.time), (a.width = s[p])),
                      dt(g ? (o * c) / m : o && c ? (m / o) * c : 0)))
                : ((o = u ? e.getBBox()[f ? "width" : "height"] : e[p]),
                  dt(v ? (c / o) * m : (c / 100) * o)));
        },
        vr = function (t, e, n, r) {
          var i;
          return (
            Pn || ar(),
            e in Ln &&
              "transform" !== e &&
              ~(e = Ln[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            On[e] && "transform" !== e
              ? ((i = kr(t, r)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                    ? i.origin
                    : Mr(ir(t, Qn)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  r ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (xr[e] && xr[e](t, e, n)) ||
                  ir(t, e) ||
                  ht(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? gr(t, e, i, n) + n : i
          );
        },
        yr = function (t, e, n, r) {
          if (!n || "none" === n) {
            var i = sr(e, t, 1),
              o = i && ir(t, i, 1);
            o && o !== n
              ? ((e = i), (n = o))
              : "borderColor" === e && (n = ir(t, "borderTopColor"));
          }
          var s,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            m,
            g,
            v = new ln(this._pt, t.style, e, 0, 1, rn),
            _ = 0,
            b = 0;
          if (
            ((v.b = n),
            (v.e = r),
            (n += ""),
            "auto" == (r += "") &&
              ((t.style[e] = r), (r = ir(t, e) || r), (t.style[e] = n)),
            we((s = [n, r])),
            (r = s[1]),
            (u = (n = s[0]).match(B) || []),
            (r.match(B) || []).length)
          ) {
            for (; (a = B.exec(r)); )
              (f = a[0]),
                (p = r.substring(_, a.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                    (l = 1),
                f !== (h = u[b++] || "") &&
                  ((c = parseFloat(h) || 0),
                  (g = h.substr((c + "").length)),
                  "=" === f.charAt(1) && (f = mt(c, f) + g),
                  (d = parseFloat(f)),
                  (m = f.substr((d + "").length)),
                  (_ = B.lastIndex - m.length),
                  m ||
                    ((m = m || y.units[e] || g),
                    _ === r.length && ((r += m), (v.e += m))),
                  g !== m && (c = gr(t, e, h, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: p || 1 === b ? p : ",",
                    s: c,
                    c: d - c,
                    m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            v.c = _ < r.length ? r.substring(_, r.length) : "";
          } else v.r = "display" === e && "none" === r ? Vn : Nn;
          return U.test(r) && (v.e = 0), (this._pt = v), v;
        },
        _r = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        br = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              r,
              i,
              o = e.t,
              s = o.style,
              a = e.u,
              u = o._gsap;
            if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                (n = a[i]),
                  On[n] && ((r = 1), (n = "transformOrigin" === n ? Qn : Zn)),
                  fr(o, n);
            r &&
              (fr(o, Zn),
              u &&
                (u.svg && o.removeAttribute("transform"),
                kr(o, 1),
                (u.uncache = 1),
                tr(s)));
          }
        },
        xr = {
          clearProps: function (t, e, n, r, i) {
            if ("isFromStart" !== i.data) {
              var o = (t._pt = new ln(t._pt, e, n, 0, 0, br));
              return (
                (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1
              );
            }
          },
        },
        wr = [1, 0, 0, 1, 0, 0],
        Er = {},
        Ar = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        Tr = function (t) {
          var e = ir(t, Zn);
          return Ar(e) ? wr : e.substr(7).match(j).map(dt);
        },
        Pr = function (t, e) {
          var n,
            r,
            i,
            o,
            s = t._gsap || lt(t),
            a = t.style,
            u = Tr(t);
          return s.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? wr
              : u
            : (u !== wr ||
                t.offsetParent ||
                t === Tn ||
                s.svg ||
                ((i = a.display),
                (a.display = "block"),
                ((n = t.parentNode) && t.offsetParent) ||
                  ((o = 1), (r = t.nextElementSibling), Tn.appendChild(t)),
                (u = Tr(t)),
                i ? (a.display = i) : fr(t, "display"),
                o &&
                  (r
                    ? n.insertBefore(t, r)
                    : n
                    ? n.appendChild(t)
                    : Tn.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        Sr = function (t, e, n, r, i, o) {
          var s,
            a,
            u,
            c = t._gsap,
            l = i || Pr(t, !0),
            h = c.xOrigin || 0,
            f = c.yOrigin || 0,
            d = c.xOffset || 0,
            p = c.yOffset || 0,
            m = l[0],
            g = l[1],
            v = l[2],
            y = l[3],
            _ = l[4],
            b = l[5],
            x = e.split(" "),
            w = parseFloat(x[0]) || 0,
            E = parseFloat(x[1]) || 0;
          n
            ? l !== wr &&
              (a = m * y - g * v) &&
              ((u = w * (-g / a) + E * (m / a) - (m * b - g * _) / a),
              (w = w * (y / a) + E * (-v / a) + (v * b - y * _) / a),
              (E = u))
            : ((w =
                (s = lr(t)).x + (~x[0].indexOf("%") ? (w / 100) * s.width : w)),
              (E =
                s.y +
                (~(x[1] || x[0]).indexOf("%") ? (E / 100) * s.height : E))),
            r || (!1 !== r && c.smooth)
              ? ((_ = w - h),
                (b = E - f),
                (c.xOffset = d + (_ * m + b * v) - _),
                (c.yOffset = p + (_ * g + b * y) - b))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = w),
            (c.yOrigin = E),
            (c.smooth = !!r),
            (c.origin = e),
            (c.originIsAbsolute = !!n),
            (t.style[Qn] = "0px 0px"),
            o &&
              (dr(o, c, "xOrigin", h, w),
              dr(o, c, "yOrigin", f, E),
              dr(o, c, "xOffset", d, c.xOffset),
              dr(o, c, "yOffset", p, c.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + E);
        },
        kr = function (t, e) {
          var n = t._gsap || new ze(t);
          if ("x" in n && !e && !n.uncache) return n;
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            m,
            g,
            v,
            _,
            b,
            x,
            w,
            E,
            A,
            T,
            P,
            S,
            k,
            M,
            C,
            O,
            F,
            $,
            I,
            R,
            z = t.style,
            D = n.scaleX < 0,
            L = "px",
            j = "deg",
            B = getComputedStyle(t),
            q = ir(t, Qn) || "0";
          return (
            (r = i = o = u = c = l = h = f = d = 0),
            (s = a = 1),
            (n.svg = !(!t.getCTM || !hr(t))),
            B.translate &&
              (("none" === B.translate &&
                "none" === B.scale &&
                "none" === B.rotate) ||
                (z[Zn] =
                  ("none" !== B.translate
                    ? "translate3d(" +
                      (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
                  ("none" !== B.scale
                    ? "scale(" + B.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== B[Zn] ? B[Zn] : "")),
              (z.scale = z.rotate = z.translate = "none")),
            (g = Pr(t, n.svg)),
            n.svg &&
              (n.uncache
                ? ((k = t.getBBox()),
                  (q = n.xOrigin - k.x + "px " + (n.yOrigin - k.y) + "px"),
                  (S = ""))
                : (S = !e && t.getAttribute("data-svg-origin")),
              Sr(t, S || q, !!S || n.originIsAbsolute, !1 !== n.smooth, g)),
            (p = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            g !== wr &&
              ((x = g[0]),
              (w = g[1]),
              (E = g[2]),
              (A = g[3]),
              (r = T = g[4]),
              (i = P = g[5]),
              6 === g.length
                ? ((s = Math.sqrt(x * x + w * w)),
                  (a = Math.sqrt(A * A + E * E)),
                  (u = x || w ? In(w, x) * Fn : 0),
                  (h = E || A ? In(E, A) * Fn + u : 0) &&
                    (a *= Math.abs(Math.cos(h * $n))),
                  n.svg &&
                    ((r -= p - (p * x + m * E)), (i -= m - (p * w + m * A))))
                : ((R = g[6]),
                  ($ = g[7]),
                  (C = g[8]),
                  (O = g[9]),
                  (F = g[10]),
                  (I = g[11]),
                  (r = g[12]),
                  (i = g[13]),
                  (o = g[14]),
                  (c = (v = In(R, F)) * Fn),
                  v &&
                    ((S = T * (_ = Math.cos(-v)) + C * (b = Math.sin(-v))),
                    (k = P * _ + O * b),
                    (M = R * _ + F * b),
                    (C = T * -b + C * _),
                    (O = P * -b + O * _),
                    (F = R * -b + F * _),
                    (I = $ * -b + I * _),
                    (T = S),
                    (P = k),
                    (R = M)),
                  (l = (v = In(-E, F)) * Fn),
                  v &&
                    ((_ = Math.cos(-v)),
                    (I = A * (b = Math.sin(-v)) + I * _),
                    (x = S = x * _ - C * b),
                    (w = k = w * _ - O * b),
                    (E = M = E * _ - F * b)),
                  (u = (v = In(w, x)) * Fn),
                  v &&
                    ((S = x * (_ = Math.cos(v)) + w * (b = Math.sin(v))),
                    (k = T * _ + P * b),
                    (w = w * _ - x * b),
                    (P = P * _ - T * b),
                    (x = S),
                    (T = k)),
                  c &&
                    Math.abs(c) + Math.abs(u) > 359.9 &&
                    ((c = u = 0), (l = 180 - l)),
                  (s = dt(Math.sqrt(x * x + w * w + E * E))),
                  (a = dt(Math.sqrt(P * P + R * R))),
                  (v = In(T, P)),
                  (h = Math.abs(v) > 2e-4 ? v * Fn : 0),
                  (d = I ? 1 / (I < 0 ? -I : I) : 0)),
              n.svg &&
                ((S = t.getAttribute("transform")),
                (n.forceCSS =
                  t.setAttribute("transform", "") || !Ar(ir(t, Zn))),
                S && t.setAttribute("transform", S))),
            Math.abs(h) > 90 &&
              Math.abs(h) < 270 &&
              (D
                ? ((s *= -1),
                  (h += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((a *= -1), (h += h <= 0 ? 180 : -180))),
            (e = e || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!e && n.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              L),
            (n.y =
              i -
              ((n.yPercent =
                i &&
                ((!e && n.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              L),
            (n.z = o + L),
            (n.scaleX = dt(s)),
            (n.scaleY = dt(a)),
            (n.rotation = dt(u) + j),
            (n.rotationX = dt(c) + j),
            (n.rotationY = dt(l) + j),
            (n.skewX = h + j),
            (n.skewY = f + j),
            (n.transformPerspective = d + L),
            (n.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (z[Qn] = Mr(q)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = y.force3D),
            (n.renderTransform = n.svg ? zr : Cn ? Rr : Or),
            (n.uncache = 0),
            n
          );
        },
        Mr = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        Cr = function (t, e, n) {
          var r = Zt(e);
          return dt(parseFloat(e) + parseFloat(gr(t, "x", n + "px", r))) + r;
        },
        Or = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            Rr(t, e);
        },
        Fr = "0deg",
        $r = "0px",
        Ir = ") ",
        Rr = function (t, e) {
          var n = e || this,
            r = n.xPercent,
            i = n.yPercent,
            o = n.x,
            s = n.y,
            a = n.z,
            u = n.rotation,
            c = n.rotationY,
            l = n.rotationX,
            h = n.skewX,
            f = n.skewY,
            d = n.scaleX,
            p = n.scaleY,
            m = n.transformPerspective,
            g = n.force3D,
            v = n.target,
            y = n.zOrigin,
            _ = "",
            b = ("auto" === g && t && 1 !== t) || !0 === g;
          if (y && (l !== Fr || c !== Fr)) {
            var x,
              w = parseFloat(c) * $n,
              E = Math.sin(w),
              A = Math.cos(w);
            (w = parseFloat(l) * $n),
              (x = Math.cos(w)),
              (o = Cr(v, o, E * x * -y)),
              (s = Cr(v, s, -Math.sin(w) * -y)),
              (a = Cr(v, a, A * x * -y + y));
          }
          m !== $r && (_ += "perspective(" + m + Ir),
            (r || i) && (_ += "translate(" + r + "%, " + i + "%) "),
            (b || o !== $r || s !== $r || a !== $r) &&
              (_ +=
                a !== $r || b
                  ? "translate3d(" + o + ", " + s + ", " + a + ") "
                  : "translate(" + o + ", " + s + Ir),
            u !== Fr && (_ += "rotate(" + u + Ir),
            c !== Fr && (_ += "rotateY(" + c + Ir),
            l !== Fr && (_ += "rotateX(" + l + Ir),
            (h === Fr && f === Fr) || (_ += "skew(" + h + ", " + f + Ir),
            (1 === d && 1 === p) || (_ += "scale(" + d + ", " + p + Ir),
            (v.style[Zn] = _ || "translate(0, 0)");
        },
        zr = function (t, e) {
          var n,
            r,
            i,
            o,
            s,
            a = e || this,
            u = a.xPercent,
            c = a.yPercent,
            l = a.x,
            h = a.y,
            f = a.rotation,
            d = a.skewX,
            p = a.skewY,
            m = a.scaleX,
            g = a.scaleY,
            v = a.target,
            y = a.xOrigin,
            _ = a.yOrigin,
            b = a.xOffset,
            x = a.yOffset,
            w = a.forceCSS,
            E = parseFloat(l),
            A = parseFloat(h);
          (f = parseFloat(f)),
            (d = parseFloat(d)),
            (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
            f || d
              ? ((f *= $n),
                (d *= $n),
                (n = Math.cos(f) * m),
                (r = Math.sin(f) * m),
                (i = Math.sin(f - d) * -g),
                (o = Math.cos(f - d) * g),
                d &&
                  ((p *= $n),
                  (s = Math.tan(d - p)),
                  (i *= s = Math.sqrt(1 + s * s)),
                  (o *= s),
                  p &&
                    ((s = Math.tan(p)),
                    (n *= s = Math.sqrt(1 + s * s)),
                    (r *= s))),
                (n = dt(n)),
                (r = dt(r)),
                (i = dt(i)),
                (o = dt(o)))
              : ((n = m), (o = g), (r = i = 0)),
            ((E && !~(l + "").indexOf("px")) ||
              (A && !~(h + "").indexOf("px"))) &&
              ((E = gr(v, "x", l, "px")), (A = gr(v, "y", h, "px"))),
            (y || _ || b || x) &&
              ((E = dt(E + y - (y * n + _ * i) + b)),
              (A = dt(A + _ - (y * r + _ * o) + x))),
            (u || c) &&
              ((s = v.getBBox()),
              (E = dt(E + (u / 100) * s.width)),
              (A = dt(A + (c / 100) * s.height))),
            (s =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              i +
              "," +
              o +
              "," +
              E +
              "," +
              A +
              ")"),
            v.setAttribute("transform", s),
            w && (v.style[Zn] = s);
        },
        Dr = function (t, e, n, r, i) {
          var o,
            s,
            a = 360,
            u = k(i),
            c = parseFloat(i) * (u && ~i.indexOf("rad") ? Fn : 1) - r,
            l = r + c + "deg";
          return (
            u &&
              ("short" === (o = i.split("_")[1]) &&
                (c %= a) != c % 180 &&
                (c += c < 0 ? a : -360),
              "cw" === o && c < 0
                ? (c = ((c + 36e9) % a) - ~~(c / a) * a)
                : "ccw" === o &&
                  c > 0 &&
                  (c = ((c - 36e9) % a) - ~~(c / a) * a)),
            (t._pt = s = new ln(t._pt, e, n, r, c, Bn)),
            (s.e = l),
            (s.u = "deg"),
            t._props.push(n),
            s
          );
        },
        Lr = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        jr = function (t, e, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l = Lr({}, n._gsap),
            h = n.style;
          for (i in (l.svg
            ? ((o = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (h[Zn] = e),
              (r = kr(n, 1)),
              fr(n, Zn),
              n.setAttribute("transform", o))
            : ((o = getComputedStyle(n)[Zn]),
              (h[Zn] = e),
              (r = kr(n, 1)),
              (h[Zn] = o)),
          On))
            (o = l[i]) !== (s = r[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((a = Zt(o) !== (c = Zt(s)) ? gr(n, i, o, c) : parseFloat(o)),
              (u = parseFloat(s)),
              (t._pt = new ln(t._pt, r, i, a, u - a, jn)),
              (t._pt.u = c || 0),
              t._props.push(i));
          Lr(r, l);
        };
      ft("padding,margin,Width,Radius", function (t, e) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          o = "Left",
          s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(
            function (n) {
              return e < 2 ? t + n : "border" + n + t;
            }
          );
        xr[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
          var o, a;
          if (arguments.length < 4)
            return (
              (o = s.map(function (e) {
                return vr(t, e, n);
              })),
              5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
            );
          (o = (r + "").split(" ")),
            (a = {}),
            s.forEach(function (t, e) {
              return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, i);
        };
      });
      var Br,
        qr,
        Ur = {
          name: "css",
          register: ar,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, r, i) {
            var o,
              s,
              a,
              u,
              c,
              l,
              h,
              f,
              d,
              p,
              m,
              g,
              v,
              _,
              b,
              x,
              w,
              E,
              A,
              T,
              P = this._props,
              S = t.style,
              M = n.vars.startAt;
            for (h in (Pn || ar(),
            (this.styles = this.styles || nr(t)),
            (x = this.styles.props),
            (this.tween = n),
            e))
              if (
                "autoRound" !== h &&
                ((s = e[h]), !it[h] || !Ne(h, e, n, r, t, i))
              )
                if (
                  ((c = typeof s),
                  (l = xr[h]),
                  "function" === c && (c = typeof (s = s.call(n, r, t, i))),
                  "string" === c && ~s.indexOf("random(") && (s = ue(s)),
                  l)
                )
                  l(this, t, h, s, n) && (b = 1);
                else if ("--" === h.substr(0, 2))
                  (o = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                    (s += ""),
                    (be.lastIndex = 0),
                    be.test(o) || ((f = Zt(o)), (d = Zt(s))),
                    d ? f !== d && (o = gr(t, h, o, d) + d) : f && (s += f),
                    this.add(S, "setProperty", o, s, r, i, 0, 0, h),
                    P.push(h),
                    x.push(h, 0, S[h]);
                else if ("undefined" !== c) {
                  if (
                    (M && h in M
                      ? ((o =
                          "function" == typeof M[h]
                            ? M[h].call(n, r, t, i)
                            : M[h]),
                        k(o) && ~o.indexOf("random(") && (o = ue(o)),
                        Zt(o + "") || (o += y.units[h] || Zt(vr(t, h)) || ""),
                        "=" === (o + "").charAt(1) && (o = vr(t, h)))
                      : (o = vr(t, h)),
                    (u = parseFloat(o)),
                    (p =
                      "string" === c &&
                      "=" === s.charAt(1) &&
                      s.substr(0, 2)) && (s = s.substr(2)),
                    (a = parseFloat(s)),
                    h in Ln &&
                      ("autoAlpha" === h &&
                        (1 === u &&
                          "hidden" === vr(t, "visibility") &&
                          a &&
                          (u = 0),
                        x.push("visibility", 0, S.visibility),
                        dr(
                          this,
                          S,
                          "visibility",
                          u ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== h &&
                        "transform" !== h &&
                        ~(h = Ln[h]).indexOf(",") &&
                        (h = h.split(",")[0])),
                    (m = h in On))
                  )
                    if (
                      (this.styles.save(h),
                      g ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          kr(t, e.parseTransform),
                        (_ = !1 !== e.smoothOrigin && v.smooth),
                        ((g = this._pt =
                          new ln(
                            this._pt,
                            S,
                            Zn,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === h)
                    )
                      (this._pt = new ln(
                        this._pt,
                        v,
                        "scaleY",
                        u,
                        (p ? mt(u, p + a) : a) - u || 0,
                        jn
                      )),
                        (this._pt.u = 0),
                        P.push("scaleY", h),
                        (h += "X");
                    else {
                      if ("transformOrigin" === h) {
                        x.push(Qn, 0, S[Qn]),
                          (E = void 0),
                          (A = void 0),
                          (T = void 0),
                          (A = (E = (w = s).split(" "))[0]),
                          (T = E[1] || "50%"),
                          ("top" !== A &&
                            "bottom" !== A &&
                            "left" !== T &&
                            "right" !== T) ||
                            ((w = A), (A = T), (T = w)),
                          (E[0] = _r[A] || A),
                          (E[1] = _r[T] || T),
                          (s = E.join(" ")),
                          v.svg
                            ? Sr(t, s, 0, _, 0, this)
                            : ((d = parseFloat(s.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                dr(this, v, "zOrigin", v.zOrigin, d),
                              dr(this, S, h, Mr(o), Mr(s)));
                        continue;
                      }
                      if ("svgOrigin" === h) {
                        Sr(t, s, 1, _, 0, this);
                        continue;
                      }
                      if (h in Er) {
                        Dr(this, v, h, u, p ? mt(u, p + s) : s);
                        continue;
                      }
                      if ("smoothOrigin" === h) {
                        dr(this, v, "smooth", v.smooth, s);
                        continue;
                      }
                      if ("force3D" === h) {
                        v[h] = s;
                        continue;
                      }
                      if ("transform" === h) {
                        jr(this, s, t);
                        continue;
                      }
                    }
                  else h in S || (h = sr(h) || h);
                  if (
                    m ||
                    ((a || 0 === a) && (u || 0 === u) && !Dn.test(s) && h in S)
                  )
                    a || (a = 0),
                      (f = (o + "").substr((u + "").length)) !==
                        (d = Zt(s) || (h in y.units ? y.units[h] : f)) &&
                        (u = gr(t, h, o, d)),
                      (this._pt = new ln(
                        this._pt,
                        m ? v : S,
                        h,
                        u,
                        (p ? mt(u, p + a) : a) - u,
                        m ||
                        ("px" !== d && "zIndex" !== h) ||
                        !1 === e.autoRound
                          ? jn
                          : Un
                      )),
                      (this._pt.u = d || 0),
                      f !== d &&
                        "%" !== d &&
                        ((this._pt.b = o), (this._pt.r = qn));
                  else if (h in S) yr.call(this, t, h, o, p ? p + s : s);
                  else {
                    if (!(h in t)) {
                      X(h, s);
                      continue;
                    }
                    this.add(t, h, o || t[h], p ? p + s : s, r, i);
                  }
                  m || (h in S ? x.push(h, 0, S[h]) : x.push(h, 1, o || t[h])),
                    P.push(h);
                }
            b && cn(this);
          },
          render: function (t, e) {
            if (e.tween._time || !Mn())
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
            else e.styles.revert();
          },
          get: vr,
          aliases: Ln,
          getSetter: function (t, e, n) {
            var r = Ln[e];
            return (
              r && r.indexOf(",") < 0 && (e = r),
              e in On && e !== Qn && (t._gsap.x || vr(t, "x"))
                ? n && kn === n
                  ? "scale" === e
                    ? Xn
                    : Yn
                  : (kn = n || {}) && ("scale" === e ? Kn : Gn)
                : t.style && !O(t.style[e])
                ? Wn
                : ~e.indexOf("-")
                ? Hn
                : tn(t, e)
            );
          },
          core: { _removeProperty: fr, _getMatrix: Pr },
        };
      (wn.utils.checkPrefix = sr),
        (wn.core.getStyleSaver = nr),
        (qr = ft(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
            "," +
            (Br = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            On[t] = 1;
          }
        )),
        ft(Br, function (t) {
          (y.units[t] = "deg"), (Er[t] = 1);
        }),
        (Ln[qr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Br),
        ft(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            Ln[e[1]] = qr[e[0]];
          }
        ),
        ft(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            y.units[t] = "px";
          }
        ),
        wn.registerPlugin(Ur);
      var Nr = wn.registerPlugin(Ur) || wn,
        Vr =
          (Nr.core.Tween, /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
        Wr = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        Hr = Math.PI / 180,
        Yr = (Math.PI, Math.sin),
        Xr = Math.cos,
        Kr = Math.abs,
        Gr = Math.sqrt,
        Zr =
          (Math.atan2,
          function (t) {
            return "number" == typeof t;
          }),
        Qr = 1e5,
        Jr = function (t) {
          return Math.round(t * Qr) / Qr || 0;
        };
      function ti(t, e, n, r, i, o, s, a, u) {
        if (t !== a || e !== u) {
          (n = Kr(n)), (r = Kr(r));
          var c = (i % 360) * Hr,
            l = Xr(c),
            h = Yr(c),
            f = Math.PI,
            d = 2 * f,
            p = (t - a) / 2,
            m = (e - u) / 2,
            g = l * p + h * m,
            v = -h * p + l * m,
            y = g * g,
            _ = v * v,
            b = y / (n * n) + _ / (r * r);
          b > 1 && ((n = Gr(b) * n), (r = Gr(b) * r));
          var x = n * n,
            w = r * r,
            E = (x * w - x * _ - w * y) / (x * _ + w * y);
          E < 0 && (E = 0);
          var A = (o === s ? -1 : 1) * Gr(E),
            T = A * ((n * v) / r),
            P = A * ((-r * g) / n),
            S = (t + a) / 2 + (l * T - h * P),
            k = (e + u) / 2 + (h * T + l * P),
            M = (g - T) / n,
            C = (v - P) / r,
            O = (-g - T) / n,
            F = (-v - P) / r,
            $ = M * M + C * C,
            I = (C < 0 ? -1 : 1) * Math.acos(M / Gr($)),
            R =
              (M * F - C * O < 0 ? -1 : 1) *
              Math.acos((M * O + C * F) / Gr($ * (O * O + F * F)));
          isNaN(R) && (R = f),
            !s && R > 0 ? (R -= d) : s && R < 0 && (R += d),
            (I %= d),
            (R %= d);
          var z,
            D = Math.ceil(Kr(R) / (d / 4)),
            L = [],
            j = R / D,
            B = ((4 / 3) * Yr(j / 2)) / (1 + Xr(j / 2)),
            q = l * n,
            U = h * n,
            N = h * -r,
            V = l * r;
          for (z = 0; z < D; z++)
            (g = Xr((i = I + z * j))),
              (v = Yr(i)),
              (M = Xr((i += j))),
              (C = Yr(i)),
              L.push(g - B * v, v + B * g, M + B * C, C - B * M, M, C);
          for (z = 0; z < L.length; z += 2)
            (g = L[z]),
              (v = L[z + 1]),
              (L[z] = g * q + v * N + S),
              (L[z + 1] = g * U + v * V + k);
          return (L[z - 2] = a), (L[z - 1] = u), L;
        }
      }
      var ei,
        ni,
        ri = function () {
          return (
            ei ||
            ("undefined" != typeof window &&
              (ei = window.gsap) &&
              ei.registerPlugin &&
              ei)
          );
        },
        ii = function () {
          (ei = ri())
            ? (ei.registerEase("_CE", ci.create), (ni = 1))
            : console.warn("Please gsap.registerPlugin(CustomEase)");
        },
        oi = function (t) {
          return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
        },
        si = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        ai = /[cLlsSaAhHvVtTqQ]/g,
        ui = function t(e, n, r, i, o, s, a, u, c, l, h) {
          var f,
            d = (e + r) / 2,
            p = (n + i) / 2,
            m = (r + o) / 2,
            g = (i + s) / 2,
            v = (o + a) / 2,
            y = (s + u) / 2,
            _ = (d + m) / 2,
            b = (p + g) / 2,
            x = (m + v) / 2,
            w = (g + y) / 2,
            E = (_ + x) / 2,
            A = (b + w) / 2,
            T = a - e,
            P = u - n,
            S = Math.abs((r - a) * P - (i - u) * T),
            k = Math.abs((o - a) * P - (s - u) * T);
          return (
            l ||
              ((l = [
                { x: e, y: n },
                { x: a, y: u },
              ]),
              (h = 1)),
            l.splice(h || l.length - 1, 0, { x: E, y: A }),
            (S + k) * (S + k) > c * (T * T + P * P) &&
              ((f = l.length),
              t(e, n, d, p, _, b, E, A, c, l, h),
              t(E, A, x, w, v, y, a, u, c, l, h + 1 + (l.length - f))),
            l
          );
        },
        ci = (function () {
          function t(t, e, n) {
            ni || ii(), (this.id = t), this.setData(e, n);
          }
          var e = t.prototype;
          return (
            (e.setData = function (t, e) {
              e = e || {};
              var n,
                r,
                i,
                o,
                s,
                a,
                u,
                c,
                l,
                h = (t = t || "0,0,1,1").match(si),
                f = 1,
                d = [],
                p = [],
                m = e.precision || 1,
                g = m <= 1;
              if (
                ((this.data = t),
                (ai.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
                  (h = (function (t) {
                    var e,
                      n,
                      r,
                      i,
                      o,
                      s,
                      a,
                      u,
                      c,
                      l,
                      h,
                      f,
                      d,
                      p,
                      m,
                      g =
                        (t + "")
                          .replace(Wr, function (t) {
                            var e = +t;
                            return e < 1e-4 && e > -1e-4 ? 0 : e;
                          })
                          .match(Vr) || [],
                      v = [],
                      y = 0,
                      _ = 0,
                      b = 2 / 3,
                      x = g.length,
                      w = 0,
                      E = "ERROR: malformed path: " + t,
                      A = function (t, e, n, r) {
                        (l = (n - t) / 3),
                          (h = (r - e) / 3),
                          a.push(t + l, e + h, n - l, r - h, n, r);
                      };
                    if (!t || !isNaN(g[0]) || isNaN(g[1]))
                      return console.log(E), v;
                    for (e = 0; e < x; e++)
                      if (
                        ((d = o),
                        isNaN(g[e])
                          ? (s = (o = g[e].toUpperCase()) !== g[e])
                          : e--,
                        (r = +g[e + 1]),
                        (i = +g[e + 2]),
                        s && ((r += y), (i += _)),
                        e || ((u = r), (c = i)),
                        "M" === o)
                      )
                        a && (a.length < 8 ? (v.length -= 1) : (w += a.length)),
                          (y = u = r),
                          (_ = c = i),
                          (a = [r, i]),
                          v.push(a),
                          (e += 2),
                          (o = "L");
                      else if ("C" === o)
                        a || (a = [0, 0]),
                          s || (y = _ = 0),
                          a.push(
                            r,
                            i,
                            y + 1 * g[e + 3],
                            _ + 1 * g[e + 4],
                            (y += 1 * g[e + 5]),
                            (_ += 1 * g[e + 6])
                          ),
                          (e += 6);
                      else if ("S" === o)
                        (l = y),
                          (h = _),
                          ("C" !== d && "S" !== d) ||
                            ((l += y - a[a.length - 4]),
                            (h += _ - a[a.length - 3])),
                          s || (y = _ = 0),
                          a.push(
                            l,
                            h,
                            r,
                            i,
                            (y += 1 * g[e + 3]),
                            (_ += 1 * g[e + 4])
                          ),
                          (e += 4);
                      else if ("Q" === o)
                        (l = y + (r - y) * b),
                          (h = _ + (i - _) * b),
                          s || (y = _ = 0),
                          (y += 1 * g[e + 3]),
                          (_ += 1 * g[e + 4]),
                          a.push(l, h, y + (r - y) * b, _ + (i - _) * b, y, _),
                          (e += 4);
                      else if ("T" === o)
                        (l = y - a[a.length - 4]),
                          (h = _ - a[a.length - 3]),
                          a.push(
                            y + l,
                            _ + h,
                            r + (y + 1.5 * l - r) * b,
                            i + (_ + 1.5 * h - i) * b,
                            (y = r),
                            (_ = i)
                          ),
                          (e += 2);
                      else if ("H" === o) A(y, _, (y = r), _), (e += 1);
                      else if ("V" === o)
                        A(y, _, y, (_ = r + (s ? _ - y : 0))), (e += 1);
                      else if ("L" === o || "Z" === o)
                        "Z" === o && ((r = u), (i = c), (a.closed = !0)),
                          ("L" === o || Kr(y - r) > 0.5 || Kr(_ - i) > 0.5) &&
                            (A(y, _, r, i), "L" === o && (e += 2)),
                          (y = r),
                          (_ = i);
                      else if ("A" === o) {
                        if (
                          ((p = g[e + 4]),
                          (m = g[e + 5]),
                          (l = g[e + 6]),
                          (h = g[e + 7]),
                          (n = 7),
                          p.length > 1 &&
                            (p.length < 3
                              ? ((h = l), (l = m), n--)
                              : ((h = m), (l = p.substr(2)), (n -= 2)),
                            (m = p.charAt(1)),
                            (p = p.charAt(0))),
                          (f = ti(
                            y,
                            _,
                            +g[e + 1],
                            +g[e + 2],
                            +g[e + 3],
                            +p,
                            +m,
                            (s ? y : 0) + 1 * l,
                            (s ? _ : 0) + 1 * h
                          )),
                          (e += n),
                          f)
                        )
                          for (n = 0; n < f.length; n++) a.push(f[n]);
                        (y = a[a.length - 2]), (_ = a[a.length - 1]);
                      } else console.log(E);
                    return (
                      (e = a.length) < 6
                        ? (v.pop(), (e = 0))
                        : a[0] === a[e - 2] &&
                          a[1] === a[e - 1] &&
                          (a.closed = !0),
                      (v.totalPoints = w + e),
                      v
                    );
                  })(t)[0]),
                4 === (n = h.length))
              )
                h.unshift(0, 0), h.push(1, 1), (n = 8);
              else if ((n - 2) % 6) throw "Invalid CustomEase";
              for (
                (0 == +h[0] && 1 == +h[n - 2]) ||
                  (function (t, e, n) {
                    n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                    var r,
                      i = -1 * +t[0],
                      o = -n,
                      s = t.length,
                      a = 1 / (+t[s - 2] + i),
                      u =
                        -e ||
                        (Math.abs(+t[s - 1] - +t[1]) <
                        0.01 * (+t[s - 2] - +t[0])
                          ? (function (t) {
                              var e,
                                n = t.length,
                                r = 1e20;
                              for (e = 1; e < n; e += 6)
                                +t[e] < r && (r = +t[e]);
                              return r;
                            })(t) + o
                          : +t[s - 1] + o);
                    for (u = u ? 1 / u : -a, r = 0; r < s; r += 2)
                      (t[r] = (+t[r] + i) * a),
                        (t[r + 1] = (+t[r + 1] + o) * u);
                  })(h, e.height, e.originY),
                  this.segment = h,
                  o = 2;
                o < n;
                o += 6
              )
                (r = { x: +h[o - 2], y: +h[o - 1] }),
                  (i = { x: +h[o + 4], y: +h[o + 5] }),
                  d.push(r, i),
                  ui(
                    r.x,
                    r.y,
                    +h[o],
                    +h[o + 1],
                    +h[o + 2],
                    +h[o + 3],
                    i.x,
                    i.y,
                    1 / (2e5 * m),
                    d,
                    d.length - 1
                  );
              for (n = d.length, o = 0; o < n; o++)
                (u = d[o]),
                  (c = d[o - 1] || u),
                  (u.x > c.x || (c.y !== u.y && c.x === u.x) || u === c) &&
                  u.x <= 1
                    ? ((c.cx = u.x - c.x),
                      (c.cy = u.y - c.y),
                      (c.n = u),
                      (c.nx = u.x),
                      g &&
                        o > 1 &&
                        Math.abs(c.cy / c.cx - d[o - 2].cy / d[o - 2].cx) > 2 &&
                        (g = 0),
                      c.cx < f &&
                        (c.cx
                          ? (f = c.cx)
                          : ((c.cx = 0.001),
                            o === n - 1 &&
                              ((c.x -= 0.001),
                              (f = Math.min(f, 0.001)),
                              (g = 0)))))
                    : (d.splice(o--, 1), n--);
              if (((s = 1 / (n = (1 / f + 1) | 0)), (a = 0), (u = d[0]), g)) {
                for (o = 0; o < n; o++)
                  (l = o * s),
                    u.nx < l && (u = d[++a]),
                    (r = u.y + ((l - u.x) / u.cx) * u.cy),
                    (p[o] = { x: l, cx: s, y: r, cy: 0, nx: 9 }),
                    o && (p[o - 1].cy = r - p[o - 1].y);
                p[n - 1].cy = d[d.length - 1].y - r;
              } else {
                for (o = 0; o < n; o++)
                  u.nx < o * s && (u = d[++a]), (p[o] = u);
                a < d.length - 1 && (p[o - 1] = d[d.length - 2]);
              }
              return (
                (this.ease = function (t) {
                  var e = p[(t * n) | 0] || p[n - 1];
                  return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                }),
                (this.ease.custom = this),
                this.id && ei && ei.registerEase(this.id, this.ease),
                this
              );
            }),
            (e.getSVGData = function (e) {
              return t.getSVGData(this, e);
            }),
            (t.create = function (e, n, r) {
              return new t(e, n, r).ease;
            }),
            (t.register = function (t) {
              (ei = t), ii();
            }),
            (t.get = function (t) {
              return ei.parseEase(t);
            }),
            (t.getSVGData = function (e, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                c,
                l,
                h,
                f,
                d = (n = n || {}).width || 100,
                p = n.height || 100,
                m = n.x || 0,
                g = (n.y || 0) + p,
                v = ei.utils.toArray(n.path)[0];
              if (
                (n.invert && ((p = -p), (g = 0)),
                "string" == typeof e && (e = ei.parseEase(e)),
                e.custom && (e = e.custom),
                e instanceof t)
              )
                r = (function (t) {
                  Zr(t[0]) && (t = [t]);
                  var e,
                    n,
                    r,
                    i,
                    o = "",
                    s = t.length;
                  for (n = 0; n < s; n++) {
                    for (
                      i = t[n],
                        o += "M" + Jr(i[0]) + "," + Jr(i[1]) + " C",
                        e = i.length,
                        r = 2;
                      r < e;
                      r++
                    )
                      o +=
                        Jr(i[r++]) +
                        "," +
                        Jr(i[r++]) +
                        " " +
                        Jr(i[r++]) +
                        "," +
                        Jr(i[r++]) +
                        " " +
                        Jr(i[r++]) +
                        "," +
                        Jr(i[r]) +
                        " ";
                    i.closed && (o += "z");
                  }
                  return o;
                })(
                  (function (t, e, n, r, i, o, s) {
                    for (var a, u, c, l, h, f = t.length; --f > -1; )
                      for (u = (a = t[f]).length, c = 0; c < u; c += 2)
                        (l = a[c]),
                          (h = a[c + 1]),
                          (a[c] = l * e + 0 * h + o),
                          (a[c + 1] = 0 * l + h * i + s);
                    return (t._dirty = 1), t;
                  })([e.segment], d, 0, 0, -p, m, g)
                );
              else {
                for (
                  r = [m, g],
                    s = 1 / (c = Math.max(5, 200 * (n.precision || 1))),
                    l = 5 / (c += 2),
                    h = oi(m + s * d),
                    i = ((f = oi(g + e(s) * -p)) - g) / (h - m),
                    o = 2;
                  o < c;
                  o++
                )
                  (a = oi(m + o * s * d)),
                    (u = oi(g + e(o * s) * -p)),
                    (Math.abs((u - f) / (a - h) - i) > l || o === c - 1) &&
                      (r.push(h, f), (i = (u - f) / (a - h))),
                    (h = a),
                    (f = u);
                r = "M" + r.join(",");
              }
              return v && v.setAttribute("d", r), r;
            }),
            t
          );
        })();
      ri() && ei.registerPlugin(ci),
        (ci.version = "3.11.3"),
        Nr.registerPlugin(ci),
        ci.create(
          "easeOut",
          "M0,0,C0.2,0.0,0.282,0.674,0.44,0.822,0.632,1,0.818,1,1,1"
        ),
        Nr.defaults({ overwrite: "auto", ease: "easeOut" });
      var li = n(69),
        hi = n.n(li),
        fi = n(40),
        di = n.n(fi);
      function pi(t) {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, 1e3 * t);
        });
      }
      const mi = new (class {
        constructor() {
          (this.$el = document.getElementById("Cover")),
            (this.$bg = this.$el.querySelector(".bg")),
            (this.$title = this.$el.querySelector("h1")),
            (this.$texts = this.$el.querySelectorAll("p span")),
            (this.titleIn = Nr.fromTo(
              this.$title,
              { opacity: 0, yPercent: 100 },
              { opacity: 1, yPercent: 0, duration: 0.4, paused: !0 }
            )),
            (this.textIn = Nr.fromTo(
              this.$texts,
              { opacity: 0, yPercent: 100 },
              { opacity: 1, yPercent: 0, stagger: { each: 0.1 }, paused: !0 }
            )),
            (this.textOut = Nr.to([this.$title, ...this.$texts], {
              opacity: 0,
              duration: 0.4,
              paused: !0,
            }));
        }
        in() {
          (this.$el.style.display = "block"),
            (this.$el.style.pointerEvents = "auto"),
            this.titleIn.restart(!0, !1),
            this.textIn.restart(!0, !1),
            Nr.to(this.$bg, { opacity: 1, duration: 0.6 });
        }
        out() {
          (this.$el.style.pointerEvents = "none"),
            this.textOut.restart(!0, !1),
            Nr.to(this.$bg, {
              opacity: 0,
              duration: 1,
              onComplete: () => {
                this.$el.style.display = "none";
              },
            });
        }
      })();
      let gi = null;
      class vi {
        constructor() {
          if (gi) return gi;
          (this.baseFPS = 60),
            (this.baseDeltaTime = 1 / this.baseFPS),
            (this.lastUpdateTime = 0),
            (this.updateFunctions = []),
            (this.updateFunctionsLength = 0),
            (gi = this),
            this.init();
        }
        static getInstance() {
          return gi || (gi = new vi()), gi;
        }
        static add(t) {
          vi.getInstance().add(t);
        }
        static remove(t) {
          vi.getInstance().remove(t);
        }
        static reset() {
          vi.getInstance().reset();
        }
        init() {
          (this.lastUpdateTime = 0.001 * performance.now()),
            (this.animFunction = this.update.bind(this)),
            requestAnimationFrame(this.animFunction);
        }
        add(t) {
          this.updateFunctions.push(t),
            (this.updateFunctionsLength = this.updateFunctions.length);
        }
        remove(t) {
          let e;
          for (let n = 0; n < this.updateFunctionsLength; n++)
            if (((e = this.updateFunctions[n]), e === t)) {
              this.updateFunctions.splice(n, 1);
              break;
            }
          this.updateFunctionsLength = this.updateFunctions.length;
        }
        update(t) {
          requestAnimationFrame(this.animFunction);
          const e = (t *= 0.001) - this.lastUpdateTime,
            n = Math.max(Math.min(e / this.baseDeltaTime, 2), 0.5);
          let r;
          for (let i = 0; i < this.updateFunctionsLength; i++)
            (r = this.updateFunctions[i]),
              r({ time: t, deltaTime: e, timeScale: n });
          this.lastUpdateTime = t;
        }
        reset() {
          for (let t = 0; t < this.updateFunctionsLength; t++)
            delete this.updateFunctions[t];
          (this.updateFunctions = []),
            (this.updateFunctions.length = 0),
            (this.updateFunctionsLength = 0);
        }
      }
      class yi {
        constructor() {
          (this.prevSize = { w: 0, h: 0 }),
            (this.checkTime = 0),
            (this.interval = 500),
            (this.getSize = null);
        }
        reset() {
          (this.prevSize = { w: 0, h: 0 }), (this.checkTime = 0);
        }
        setSizeFunc(t) {
          (this.getSize = t), this.reset();
        }
        check() {
          const t = performance.now();
          if (t - this.checkTime < this.interval) return !1;
          this.checkTime = t;
          const { width: e, height: n } = this.getSize();
          return (
            (e !== this.prevSize.w || n !== this.prevSize.h) &&
            ((this.prevSize.w = e), (this.prevSize.h = n), !0)
          );
        }
      }
      var _i,
        bi,
        xi,
        wi,
        Ei = !1,
        Ai = !1,
        Ti = [];
      function Pi(t) {
        let e = Ti.indexOf(t);
        -1 !== e && Ti.splice(e, 1);
      }
      function Si() {
        (Ei = !1), (Ai = !0);
        for (let t = 0; t < Ti.length; t++) Ti[t]();
        (Ti.length = 0), (Ai = !1);
      }
      var ki = !0;
      function Mi(t) {
        bi = t;
      }
      var Ci = [],
        Oi = [],
        Fi = [];
      function $i(t, e) {
        "function" == typeof e
          ? (t._x_cleanups || (t._x_cleanups = []), t._x_cleanups.push(e))
          : ((e = t), Oi.push(e));
      }
      function Ii(t, e) {
        t._x_attributeCleanups &&
          Object.entries(t._x_attributeCleanups).forEach(([n, r]) => {
            (void 0 === e || e.includes(n)) &&
              (r.forEach((t) => t()), delete t._x_attributeCleanups[n]);
          });
      }
      var Ri = new MutationObserver(Ni),
        zi = !1;
      function Di() {
        Ri.observe(document, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          attributeOldValue: !0,
        }),
          (zi = !0);
      }
      var Li = [],
        ji = !1;
      function Bi(t) {
        if (!zi) return t();
        (Li = Li.concat(Ri.takeRecords())).length &&
          !ji &&
          ((ji = !0),
          queueMicrotask(() => {
            Ni(Li), (Li.length = 0), (ji = !1);
          })),
          Ri.disconnect(),
          (zi = !1);
        let e = t();
        return Di(), e;
      }
      var qi = !1,
        Ui = [];
      function Ni(t) {
        if (qi) return void (Ui = Ui.concat(t));
        let e = [],
          n = [],
          r = new Map(),
          i = new Map();
        for (let o = 0; o < t.length; o++)
          if (
            !t[o].target._x_ignoreMutationObserver &&
            ("childList" === t[o].type &&
              (t[o].addedNodes.forEach((t) => 1 === t.nodeType && e.push(t)),
              t[o].removedNodes.forEach((t) => 1 === t.nodeType && n.push(t))),
            "attributes" === t[o].type)
          ) {
            let e = t[o].target,
              n = t[o].attributeName,
              s = t[o].oldValue,
              a = () => {
                r.has(e) || r.set(e, []),
                  r.get(e).push({ name: n, value: e.getAttribute(n) });
              },
              u = () => {
                i.has(e) || i.set(e, []), i.get(e).push(n);
              };
            e.hasAttribute(n) && null === s
              ? a()
              : e.hasAttribute(n)
              ? (u(), a())
              : u();
          }
        i.forEach((t, e) => {
          Ii(e, t);
        }),
          r.forEach((t, e) => {
            Ci.forEach((n) => n(e, t));
          });
        for (let t of n)
          if (!e.includes(t) && (Oi.forEach((e) => e(t)), t._x_cleanups))
            for (; t._x_cleanups.length; ) t._x_cleanups.pop()();
        e.forEach((t) => {
          (t._x_ignoreSelf = !0), (t._x_ignore = !0);
        });
        for (let t of e)
          n.includes(t) ||
            (t.isConnected &&
              (delete t._x_ignoreSelf,
              delete t._x_ignore,
              Fi.forEach((e) => e(t)),
              (t._x_ignore = !0),
              (t._x_ignoreSelf = !0)));
        e.forEach((t) => {
          delete t._x_ignoreSelf, delete t._x_ignore;
        }),
          (e = null),
          (n = null),
          (r = null),
          (i = null);
      }
      function Vi(t) {
        return Xi(Yi(t));
      }
      function Wi(t, e, n) {
        return (
          (t._x_dataStack = [e, ...Yi(n || t)]),
          () => {
            t._x_dataStack = t._x_dataStack.filter((t) => t !== e);
          }
        );
      }
      function Hi(t, e) {
        let n = t._x_dataStack[0];
        Object.entries(e).forEach(([t, e]) => {
          n[t] = e;
        });
      }
      function Yi(t) {
        return t._x_dataStack
          ? t._x_dataStack
          : "function" == typeof ShadowRoot && t instanceof ShadowRoot
          ? Yi(t.host)
          : t.parentNode
          ? Yi(t.parentNode)
          : [];
      }
      function Xi(t) {
        let e = new Proxy(
          {},
          {
            ownKeys: () =>
              Array.from(new Set(t.flatMap((t) => Object.keys(t)))),
            has: (e, n) => t.some((t) => t.hasOwnProperty(n)),
            get: (n, r) =>
              (t.find((t) => {
                if (t.hasOwnProperty(r)) {
                  let n = Object.getOwnPropertyDescriptor(t, r);
                  if (
                    (n.get && n.get._x_alreadyBound) ||
                    (n.set && n.set._x_alreadyBound)
                  )
                    return !0;
                  if ((n.get || n.set) && n.enumerable) {
                    let i = n.get,
                      o = n.set,
                      s = n;
                    (i = i && i.bind(e)),
                      (o = o && o.bind(e)),
                      i && (i._x_alreadyBound = !0),
                      o && (o._x_alreadyBound = !0),
                      Object.defineProperty(t, r, { ...s, get: i, set: o });
                  }
                  return !0;
                }
                return !1;
              }) || {})[r],
            set: (e, n, r) => {
              let i = t.find((t) => t.hasOwnProperty(n));
              return i ? (i[n] = r) : (t[t.length - 1][n] = r), !0;
            },
          }
        );
        return e;
      }
      function Ki(t) {
        let e = (n, r = "") => {
          Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
            ([i, { value: o, enumerable: s }]) => {
              if (!1 === s || void 0 === o) return;
              let a = "" === r ? i : `${r}.${i}`;
              var u;
              "object" == typeof o && null !== o && o._x_interceptor
                ? (n[i] = o.initialize(t, a, i))
                : "object" != typeof (u = o) ||
                  Array.isArray(u) ||
                  null === u ||
                  o === n ||
                  o instanceof Element ||
                  e(o, a);
            }
          );
        };
        return e(t);
      }
      function Gi(t, e = () => {}) {
        let n = {
          initialValue: void 0,
          _x_interceptor: !0,
          initialize(e, n, r) {
            return t(
              this.initialValue,
              () =>
                (function (t, e) {
                  return e.split(".").reduce((t, e) => t[e], t);
                })(e, n),
              (t) => Zi(e, n, t),
              n,
              r
            );
          },
        };
        return (
          e(n),
          (t) => {
            if ("object" == typeof t && null !== t && t._x_interceptor) {
              let e = n.initialize.bind(n);
              n.initialize = (r, i, o) => {
                let s = t.initialize(r, i, o);
                return (n.initialValue = s), e(r, i, o);
              };
            } else n.initialValue = t;
            return n;
          }
        );
      }
      function Zi(t, e, n) {
        if (("string" == typeof e && (e = e.split(".")), 1 !== e.length)) {
          if (0 === e.length) throw error;
          return t[e[0]] || (t[e[0]] = {}), Zi(t[e[0]], e.slice(1), n);
        }
        t[e[0]] = n;
      }
      var Qi = {};
      function Ji(t, e) {
        Qi[t] = e;
      }
      function to(t, e) {
        return (
          Object.entries(Qi).forEach(([n, r]) => {
            Object.defineProperty(t, `$${n}`, {
              get() {
                let [t, n] = bo(e);
                return (t = { interceptor: Gi, ...t }), $i(e, n), r(e, t);
              },
              enumerable: !1,
            });
          }),
          t
        );
      }
      function eo(t, e, n, ...r) {
        try {
          return n(...r);
        } catch (n) {
          no(n, t, e);
        }
      }
      function no(t, e, n) {
        Object.assign(t, { el: e, expression: n }),
          console.warn(
            `Alpine Expression Error: ${t.message}\n\n${
              n ? 'Expression: "' + n + '"\n\n' : ""
            }`,
            e
          ),
          setTimeout(() => {
            throw t;
          }, 0);
      }
      var ro = !0;
      function io(t, e, n = {}) {
        let r;
        return oo(t, e)((t) => (r = t), n), r;
      }
      function oo(...t) {
        return so(...t);
      }
      var so = ao;
      function ao(t, e) {
        let n = {};
        to(n, t);
        let r = [n, ...Yi(t)];
        if ("function" == typeof e)
          return (function (t, e) {
            return (n = () => {}, { scope: r = {}, params: i = [] } = {}) => {
              co(n, e.apply(Xi([r, ...t]), i));
            };
          })(r, e);
        let i = (function (t, e, n) {
          let r = (function (t, e) {
            if (uo[t]) return uo[t];
            let n = Object.getPrototypeOf(async function () {}).constructor,
              r =
                /^[\n\s]*if.*\(.*\)/.test(t) || /^(let|const)\s/.test(t)
                  ? `(() => { ${t} })()`
                  : t,
              i = (() => {
                try {
                  return new n(
                    ["__self", "scope"],
                    `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
                  );
                } catch (n) {
                  return no(n, e, t), Promise.resolve();
                }
              })();
            return (uo[t] = i), i;
          })(e, n);
          return (i = () => {}, { scope: o = {}, params: s = [] } = {}) => {
            (r.result = void 0), (r.finished = !1);
            let a = Xi([o, ...t]);
            if ("function" == typeof r) {
              let t = r(r, a).catch((t) => no(t, n, e));
              r.finished
                ? (co(i, r.result, a, s, n), (r.result = void 0))
                : t
                    .then((t) => {
                      co(i, t, a, s, n);
                    })
                    .catch((t) => no(t, n, e))
                    .finally(() => (r.result = void 0));
            }
          };
        })(r, e, t);
        return eo.bind(null, t, e, i);
      }
      var uo = {};
      function co(t, e, n, r, i) {
        if (ro && "function" == typeof e) {
          let o = e.apply(n, r);
          o instanceof Promise
            ? o.then((e) => co(t, e, n, r)).catch((t) => no(t, i, e))
            : t(o);
        } else t(e);
      }
      var lo = "x-";
      function ho(t = "") {
        return lo + t;
      }
      var fo = {};
      function po(t, e) {
        fo[t] = e;
      }
      function mo(t, e, n) {
        if (((e = Array.from(e)), t._x_virtualDirectives)) {
          let n = Object.entries(t._x_virtualDirectives).map(([t, e]) => ({
              name: t,
              value: e,
            })),
            r = go(n);
          (n = n.map((t) =>
            r.find((e) => e.name === t.name)
              ? { name: `x-bind:${t.name}`, value: `"${t.value}"` }
              : t
          )),
            (e = e.concat(n));
        }
        let r = {},
          i = e
            .map(wo((t, e) => (r[t] = e)))
            .filter(To)
            .map(
              (function (t, e) {
                return ({ name: n, value: r }) => {
                  let i = n.match(Po()),
                    o = n.match(/:([a-zA-Z0-9\-:]+)/),
                    s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                    a = e || t[n] || n;
                  return {
                    type: i ? i[1] : null,
                    value: o ? o[1] : null,
                    modifiers: s.map((t) => t.replace(".", "")),
                    expression: r,
                    original: a,
                  };
                };
              })(r, n)
            )
            .sort(Mo);
        return i.map((e) =>
          (function (t, e) {
            let n = fo[e.type] || (() => {}),
              [r, i] = bo(t);
            !(function (t, e, n) {
              t._x_attributeCleanups || (t._x_attributeCleanups = {}),
                t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
                t._x_attributeCleanups[e].push(n);
            })(t, e.original, i);
            let o = () => {
              t._x_ignore ||
                t._x_ignoreSelf ||
                (n.inline && n.inline(t, e, r),
                (n = n.bind(n, t, e, r)),
                vo ? yo.get(_o).push(n) : n());
            };
            return (o.runCleanups = i), o;
          })(t, e)
        );
      }
      function go(t) {
        return Array.from(t)
          .map(wo())
          .filter((t) => !To(t));
      }
      var vo = !1,
        yo = new Map(),
        _o = Symbol();
      function bo(t) {
        let e = [],
          [n, r] = (function (t) {
            let e = () => {};
            return [
              (n) => {
                let r = bi(n);
                return (
                  t._x_effects ||
                    ((t._x_effects = new Set()),
                    (t._x_runEffects = () => {
                      t._x_effects.forEach((t) => t());
                    })),
                  t._x_effects.add(r),
                  (e = () => {
                    void 0 !== r && (t._x_effects.delete(r), xi(r));
                  }),
                  r
                );
              },
              () => {
                e();
              },
            ];
          })(t);
        return (
          e.push(r),
          [
            {
              Alpine: ds,
              effect: n,
              cleanup: (t) => e.push(t),
              evaluateLater: oo.bind(oo, t),
              evaluate: io.bind(io, t),
            },
            () => e.forEach((t) => t()),
          ]
        );
      }
      var xo =
        (t, e) =>
        ({ name: n, value: r }) => (
          n.startsWith(t) && (n = n.replace(t, e)), { name: n, value: r }
        );
      function wo(t = () => {}) {
        return ({ name: e, value: n }) => {
          let { name: r, value: i } = Eo.reduce((t, e) => e(t), {
            name: e,
            value: n,
          });
          return r !== e && t(r, e), { name: r, value: i };
        };
      }
      var Eo = [];
      function Ao(t) {
        Eo.push(t);
      }
      function To({ name: t }) {
        return Po().test(t);
      }
      var Po = () => new RegExp(`^${lo}([^:^.]+)\\b`),
        So = "DEFAULT",
        ko = [
          "ignore",
          "ref",
          "data",
          "id",
          "radio",
          "tabs",
          "switch",
          "disclosure",
          "menu",
          "listbox",
          "list",
          "item",
          "combobox",
          "bind",
          "init",
          "for",
          "mask",
          "model",
          "modelable",
          "transition",
          "show",
          "if",
          So,
          "teleport",
        ];
      function Mo(t, e) {
        let n = -1 === ko.indexOf(t.type) ? So : t.type,
          r = -1 === ko.indexOf(e.type) ? So : e.type;
        return ko.indexOf(n) - ko.indexOf(r);
      }
      function Co(t, e, n = {}) {
        t.dispatchEvent(
          new CustomEvent(e, {
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0,
          })
        );
      }
      var Oo = [],
        Fo = !1;
      function $o(t = () => {}) {
        return (
          queueMicrotask(() => {
            Fo ||
              setTimeout(() => {
                Io();
              });
          }),
          new Promise((e) => {
            Oo.push(() => {
              t(), e();
            });
          })
        );
      }
      function Io() {
        for (Fo = !1; Oo.length; ) Oo.shift()();
      }
      function Ro(t, e) {
        if ("function" == typeof ShadowRoot && t instanceof ShadowRoot)
          return void Array.from(t.children).forEach((t) => Ro(t, e));
        let n = !1;
        if ((e(t, () => (n = !0)), n)) return;
        let r = t.firstElementChild;
        for (; r; ) Ro(r, e), (r = r.nextElementSibling);
      }
      function zo(t, ...e) {
        console.warn(`Alpine Warning: ${t}`, ...e);
      }
      var Do = [],
        Lo = [];
      function jo() {
        return Do.map((t) => t());
      }
      function Bo() {
        return Do.concat(Lo).map((t) => t());
      }
      function qo(t) {
        Do.push(t);
      }
      function Uo(t) {
        Lo.push(t);
      }
      function No(t, e = !1) {
        return Vo(t, (t) => {
          if ((e ? Bo() : jo()).some((e) => t.matches(e))) return !0;
        });
      }
      function Vo(t, e) {
        if (t) {
          if (e(t)) return t;
          if ((t._x_teleportBack && (t = t._x_teleportBack), t.parentElement))
            return Vo(t.parentElement, e);
        }
      }
      function Wo(t, e = Ro) {
        !(function (n) {
          vo = !0;
          let r = Symbol();
          (_o = r), yo.set(r, []);
          let i = () => {
            for (; yo.get(r).length; ) yo.get(r).shift()();
            yo.delete(r);
          };
          e(t, (t, e) => {
            mo(t, t.attributes).forEach((t) => t()), t._x_ignore && e();
          }),
            (vo = !1),
            i();
        })();
      }
      function Ho(t, e) {
        return Array.isArray(e)
          ? Yo(t, e.join(" "))
          : "object" == typeof e && null !== e
          ? (function (t, e) {
              let n = (t) => t.split(" ").filter(Boolean),
                r = Object.entries(e)
                  .flatMap(([t, e]) => !!e && n(t))
                  .filter(Boolean),
                i = Object.entries(e)
                  .flatMap(([t, e]) => !e && n(t))
                  .filter(Boolean),
                o = [],
                s = [];
              return (
                i.forEach((e) => {
                  t.classList.contains(e) && (t.classList.remove(e), s.push(e));
                }),
                r.forEach((e) => {
                  t.classList.contains(e) || (t.classList.add(e), o.push(e));
                }),
                () => {
                  s.forEach((e) => t.classList.add(e)),
                    o.forEach((e) => t.classList.remove(e));
                }
              );
            })(t, e)
          : "function" == typeof e
          ? Ho(t, e())
          : Yo(t, e);
      }
      function Yo(t, e) {
        return (
          (e = !0 === e ? (e = "") : e || ""),
          (n = e
            .split(" ")
            .filter((e) => !t.classList.contains(e))
            .filter(Boolean)),
          t.classList.add(...n),
          () => {
            t.classList.remove(...n);
          }
        );
        var n;
      }
      function Xo(t, e) {
        return "object" == typeof e && null !== e
          ? (function (t, e) {
              let n = {};
              return (
                Object.entries(e).forEach(([e, r]) => {
                  (n[e] = t.style[e]),
                    e.startsWith("--") ||
                      (e = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
                    t.style.setProperty(e, r);
                }),
                setTimeout(() => {
                  0 === t.style.length && t.removeAttribute("style");
                }),
                () => {
                  Xo(t, n);
                }
              );
            })(t, e)
          : (function (t, e) {
              let n = t.getAttribute("style", e);
              return (
                t.setAttribute("style", e),
                () => {
                  t.setAttribute("style", n || "");
                }
              );
            })(t, e);
      }
      function Ko(t, e = () => {}) {
        let n = !1;
        return function () {
          n ? e.apply(this, arguments) : ((n = !0), t.apply(this, arguments));
        };
      }
      function Go(t, e, n = {}) {
        t._x_transition ||
          (t._x_transition = {
            enter: { during: n, start: n, end: n },
            leave: { during: n, start: n, end: n },
            in(n = () => {}, r = () => {}) {
              Qo(
                t,
                e,
                {
                  during: this.enter.during,
                  start: this.enter.start,
                  end: this.enter.end,
                },
                n,
                r
              );
            },
            out(n = () => {}, r = () => {}) {
              Qo(
                t,
                e,
                {
                  during: this.leave.during,
                  start: this.leave.start,
                  end: this.leave.end,
                },
                n,
                r
              );
            },
          });
      }
      function Zo(t) {
        let e = t.parentNode;
        if (e) return e._x_hidePromise ? e : Zo(e);
      }
      function Qo(
        t,
        e,
        { during: n, start: r, end: i } = {},
        o = () => {},
        s = () => {}
      ) {
        if (
          (t._x_transitioning && t._x_transitioning.cancel(),
          0 === Object.keys(n).length &&
            0 === Object.keys(r).length &&
            0 === Object.keys(i).length)
        )
          return o(), void s();
        let a, u, c;
        !(function (t, e) {
          let n,
            r,
            i,
            o = Ko(() => {
              Bi(() => {
                (n = !0),
                  r || e.before(),
                  i || (e.end(), Io()),
                  e.after(),
                  t.isConnected && e.cleanup(),
                  delete t._x_transitioning;
              });
            });
          (t._x_transitioning = {
            beforeCancels: [],
            beforeCancel(t) {
              this.beforeCancels.push(t);
            },
            cancel: Ko(function () {
              for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
              o();
            }),
            finish: o,
          }),
            Bi(() => {
              e.start(), e.during();
            }),
            (Fo = !0),
            requestAnimationFrame(() => {
              if (n) return;
              let o =
                  1e3 *
                  Number(
                    getComputedStyle(t)
                      .transitionDuration.replace(/,.*/, "")
                      .replace("s", "")
                  ),
                s =
                  1e3 *
                  Number(
                    getComputedStyle(t)
                      .transitionDelay.replace(/,.*/, "")
                      .replace("s", "")
                  );
              0 === o &&
                (o =
                  1e3 *
                  Number(
                    getComputedStyle(t).animationDuration.replace("s", "")
                  )),
                Bi(() => {
                  e.before();
                }),
                (r = !0),
                requestAnimationFrame(() => {
                  n ||
                    (Bi(() => {
                      e.end();
                    }),
                    Io(),
                    setTimeout(t._x_transitioning.finish, o + s),
                    (i = !0));
                });
            });
        })(t, {
          start() {
            a = e(t, r);
          },
          during() {
            u = e(t, n);
          },
          before: o,
          end() {
            a(), (c = e(t, i));
          },
          after: s,
          cleanup() {
            u(), c();
          },
        });
      }
      function Jo(t, e, n) {
        if (-1 === t.indexOf(e)) return n;
        const r = t[t.indexOf(e) + 1];
        if (!r) return n;
        if ("scale" === e && isNaN(r)) return n;
        if ("duration" === e) {
          let t = r.match(/([0-9]+)ms/);
          if (t) return t[1];
        }
        return "origin" === e &&
          ["top", "right", "left", "center", "bottom"].includes(
            t[t.indexOf(e) + 2]
          )
          ? [r, t[t.indexOf(e) + 2]].join(" ")
          : r;
      }
      po(
        "transition",
        (t, { value: e, modifiers: n, expression: r }, { evaluate: i }) => {
          "function" == typeof r && (r = i(r)),
            r
              ? (function (t, e, n) {
                  Go(t, Ho, ""),
                    {
                      enter: (e) => {
                        t._x_transition.enter.during = e;
                      },
                      "enter-start": (e) => {
                        t._x_transition.enter.start = e;
                      },
                      "enter-end": (e) => {
                        t._x_transition.enter.end = e;
                      },
                      leave: (e) => {
                        t._x_transition.leave.during = e;
                      },
                      "leave-start": (e) => {
                        t._x_transition.leave.start = e;
                      },
                      "leave-end": (e) => {
                        t._x_transition.leave.end = e;
                      },
                    }[n](e);
                })(t, r, e)
              : (function (t, e, n) {
                  Go(t, Xo);
                  let r = !e.includes("in") && !e.includes("out") && !n,
                    i = r || e.includes("in") || ["enter"].includes(n),
                    o = r || e.includes("out") || ["leave"].includes(n);
                  e.includes("in") &&
                    !r &&
                    (e = e.filter((t, n) => n < e.indexOf("out"))),
                    e.includes("out") &&
                      !r &&
                      (e = e.filter((t, n) => n > e.indexOf("out")));
                  let s = !e.includes("opacity") && !e.includes("scale"),
                    a = s || e.includes("opacity") ? 0 : 1,
                    u = s || e.includes("scale") ? Jo(e, "scale", 95) / 100 : 1,
                    c = Jo(e, "delay", 0),
                    l = Jo(e, "origin", "center"),
                    h = "opacity, transform",
                    f = Jo(e, "duration", 150) / 1e3,
                    d = Jo(e, "duration", 75) / 1e3,
                    p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                  i &&
                    ((t._x_transition.enter.during = {
                      transformOrigin: l,
                      transitionDelay: c,
                      transitionProperty: h,
                      transitionDuration: `${f}s`,
                      transitionTimingFunction: p,
                    }),
                    (t._x_transition.enter.start = {
                      opacity: a,
                      transform: `scale(${u})`,
                    }),
                    (t._x_transition.enter.end = {
                      opacity: 1,
                      transform: "scale(1)",
                    })),
                    o &&
                      ((t._x_transition.leave.during = {
                        transformOrigin: l,
                        transitionDelay: c,
                        transitionProperty: h,
                        transitionDuration: `${d}s`,
                        transitionTimingFunction: p,
                      }),
                      (t._x_transition.leave.start = {
                        opacity: 1,
                        transform: "scale(1)",
                      }),
                      (t._x_transition.leave.end = {
                        opacity: a,
                        transform: `scale(${u})`,
                      }));
                })(t, n, e);
        }
      ),
        (window.Element.prototype._x_toggleAndCascadeWithTransitions =
          function (t, e, n, r) {
            const i =
              "visible" === document.visibilityState
                ? requestAnimationFrame
                : setTimeout;
            let o = () => i(n);
            e
              ? t._x_transition &&
                (t._x_transition.enter || t._x_transition.leave)
                ? t._x_transition.enter &&
                  (Object.entries(t._x_transition.enter.during).length ||
                    Object.entries(t._x_transition.enter.start).length ||
                    Object.entries(t._x_transition.enter.end).length)
                  ? t._x_transition.in(n)
                  : o()
                : t._x_transition
                ? t._x_transition.in(n)
                : o()
              : ((t._x_hidePromise = t._x_transition
                  ? new Promise((e, n) => {
                      t._x_transition.out(
                        () => {},
                        () => e(r)
                      ),
                        t._x_transitioning.beforeCancel(() =>
                          n({ isFromCancelledTransition: !0 })
                        );
                    })
                  : Promise.resolve(r)),
                queueMicrotask(() => {
                  let e = Zo(t);
                  e
                    ? (e._x_hideChildren || (e._x_hideChildren = []),
                      e._x_hideChildren.push(t))
                    : i(() => {
                        let e = (t) => {
                          let n = Promise.all([
                            t._x_hidePromise,
                            ...(t._x_hideChildren || []).map(e),
                          ]).then(([t]) => t());
                          return (
                            delete t._x_hidePromise, delete t._x_hideChildren, n
                          );
                        };
                        e(t).catch((t) => {
                          if (!t.isFromCancelledTransition) throw t;
                        });
                      });
                }));
          });
      var ts = !1;
      function es(t, e = () => {}) {
        return (...n) => (ts ? e(...n) : t(...n));
      }
      function ns(t, e, n, r = []) {
        switch (
          (t._x_bindings || (t._x_bindings = _i({})),
          (t._x_bindings[e] = n),
          (e = r.includes("camel")
            ? e.toLowerCase().replace(/-(\w)/g, (t, e) => e.toUpperCase())
            : e))
        ) {
          case "value":
            !(function (t, e) {
              if ("radio" === t.type)
                void 0 === t.attributes.value && (t.value = e),
                  window.fromModel && (t.checked = rs(t.value, e));
              else if ("checkbox" === t.type)
                Number.isInteger(e)
                  ? (t.value = e)
                  : Number.isInteger(e) ||
                    Array.isArray(e) ||
                    "boolean" == typeof e ||
                    [null, void 0].includes(e)
                  ? Array.isArray(e)
                    ? (t.checked = e.some((e) => rs(e, t.value)))
                    : (t.checked = !!e)
                  : (t.value = String(e));
              else if ("SELECT" === t.tagName)
                !(function (t, e) {
                  const n = [].concat(e).map((t) => t + "");
                  Array.from(t.options).forEach((t) => {
                    t.selected = n.includes(t.value);
                  });
                })(t, e);
              else {
                if (t.value === e) return;
                t.value = e;
              }
            })(t, n);
            break;
          case "style":
            !(function (t, e) {
              t._x_undoAddedStyles && t._x_undoAddedStyles(),
                (t._x_undoAddedStyles = Xo(t, e));
            })(t, n);
            break;
          case "class":
            !(function (t, e) {
              t._x_undoAddedClasses && t._x_undoAddedClasses(),
                (t._x_undoAddedClasses = Ho(t, e));
            })(t, n);
            break;
          default:
            !(function (t, e, n) {
              [null, void 0, !1].includes(n) &&
              (function (t) {
                return ![
                  "aria-pressed",
                  "aria-checked",
                  "aria-expanded",
                  "aria-selected",
                ].includes(t);
              })(e)
                ? t.removeAttribute(e)
                : (is(e) && (n = e),
                  (function (t, e, n) {
                    t.getAttribute(e) != n && t.setAttribute(e, n);
                  })(t, e, n));
            })(t, e, n);
        }
      }
      function rs(t, e) {
        return t == e;
      }
      function is(t) {
        return [
          "disabled",
          "checked",
          "required",
          "readonly",
          "hidden",
          "open",
          "selected",
          "autofocus",
          "itemscope",
          "multiple",
          "novalidate",
          "allowfullscreen",
          "allowpaymentrequest",
          "formnovalidate",
          "autoplay",
          "controls",
          "loop",
          "muted",
          "playsinline",
          "default",
          "ismap",
          "reversed",
          "async",
          "defer",
          "nomodule",
        ].includes(t);
      }
      function os(t, e) {
        var n;
        return function () {
          var r = this,
            i = arguments,
            o = function () {
              (n = null), t.apply(r, i);
            };
          clearTimeout(n), (n = setTimeout(o, e));
        };
      }
      function ss(t, e) {
        let n;
        return function () {
          let r = this,
            i = arguments;
          n || (t.apply(r, i), (n = !0), setTimeout(() => (n = !1), e));
        };
      }
      var as = {},
        us = !1,
        cs = {};
      function ls(t, e, n) {
        let r = [];
        for (; r.length; ) r.pop()();
        let i = Object.entries(e).map(([t, e]) => ({ name: t, value: e })),
          o = go(i);
        (i = i.map((t) =>
          o.find((e) => e.name === t.name)
            ? { name: `x-bind:${t.name}`, value: `"${t.value}"` }
            : t
        )),
          mo(t, i, n).map((t) => {
            r.push(t.runCleanups), t();
          });
      }
      var hs = {},
        fs = {
          get reactive() {
            return _i;
          },
          get release() {
            return xi;
          },
          get effect() {
            return bi;
          },
          get raw() {
            return wi;
          },
          version: "3.10.5",
          flushAndStopDeferringMutations: function () {
            (qi = !1), Ni(Ui), (Ui = []);
          },
          dontAutoEvaluateFunctions: function (t) {
            let e = ro;
            (ro = !1), t(), (ro = e);
          },
          disableEffectScheduling: function (t) {
            (ki = !1), t(), (ki = !0);
          },
          setReactivityEngine: function (t) {
            (_i = t.reactive),
              (xi = t.release),
              (bi = (e) =>
                t.effect(e, {
                  scheduler: (t) => {
                    ki
                      ? (function (t) {
                          var e;
                          (e = t),
                            Ti.includes(e) || Ti.push(e),
                            Ai || Ei || ((Ei = !0), queueMicrotask(Si));
                        })(t)
                      : t();
                  },
                })),
              (wi = t.raw);
          },
          closestDataStack: Yi,
          skipDuringClone: es,
          addRootSelector: qo,
          addInitSelector: Uo,
          addScopeToNode: Wi,
          deferMutations: function () {
            qi = !0;
          },
          mapAttributes: Ao,
          evaluateLater: oo,
          setEvaluator: function (t) {
            so = t;
          },
          mergeProxies: Xi,
          findClosest: Vo,
          closestRoot: No,
          interceptor: Gi,
          transition: Qo,
          setStyles: Xo,
          mutateDom: Bi,
          directive: po,
          throttle: ss,
          debounce: os,
          evaluate: io,
          initTree: Wo,
          nextTick: $o,
          prefixed: ho,
          prefix: function (t) {
            lo = t;
          },
          plugin: function (t) {
            t(ds);
          },
          magic: Ji,
          store: function (t, e) {
            if ((us || ((as = _i(as)), (us = !0)), void 0 === e)) return as[t];
            (as[t] = e),
              "object" == typeof e &&
                null !== e &&
                e.hasOwnProperty("init") &&
                "function" == typeof e.init &&
                as[t].init(),
              Ki(as[t]);
          },
          start: function () {
            var t;
            document.body ||
              zo(
                "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
              ),
              Co(document, "alpine:init"),
              Co(document, "alpine:initializing"),
              Di(),
              (t = (t) => Wo(t, Ro)),
              Fi.push(t),
              $i((t) => {
                Ro(t, (t) => Ii(t));
              }),
              Ci.push((t, e) => {
                mo(t, e).forEach((t) => t());
              }),
              Array.from(document.querySelectorAll(Bo()))
                .filter((t) => !No(t.parentElement, !0))
                .forEach((t) => {
                  Wo(t);
                }),
              Co(document, "alpine:initialized");
          },
          clone: function (t, e) {
            e._x_dataStack || (e._x_dataStack = t._x_dataStack),
              (ts = !0),
              (function (t) {
                let n = bi;
                Mi((t, e) => {
                  let r = n(t);
                  return xi(r), () => {};
                }),
                  (function (t) {
                    let e = !1;
                    Wo(t, (t, n) => {
                      Ro(t, (t, r) => {
                        if (
                          e &&
                          (function (t) {
                            return jo().some((e) => t.matches(e));
                          })(t)
                        )
                          return r();
                        (e = !0), n(t, r);
                      });
                    });
                  })(e),
                  Mi(n);
              })(),
              (ts = !1);
          },
          bound: function (t, e, n) {
            if (t._x_bindings && void 0 !== t._x_bindings[e])
              return t._x_bindings[e];
            let r = t.getAttribute(e);
            return null === r
              ? "function" == typeof n
                ? n()
                : n
              : "" === r || (is(e) ? !![e, "true"].includes(r) : r);
          },
          $data: Vi,
          data: function (t, e) {
            hs[t] = e;
          },
          bind: function (t, e) {
            let n = "function" != typeof e ? () => e : e;
            t instanceof Element ? ls(t, n()) : (cs[t] = n);
          },
        },
        ds = fs;
      function ps(t, e) {
        const n = Object.create(null),
          r = t.split(",");
        for (let t = 0; t < r.length; t++) n[r[t]] = !0;
        return e ? (t) => !!n[t.toLowerCase()] : (t) => !!n[t];
      }
      var ms,
        gs = Object.freeze({}),
        vs = (Object.freeze([]), Object.assign),
        ys = Object.prototype.hasOwnProperty,
        _s = (t, e) => ys.call(t, e),
        bs = Array.isArray,
        xs = (t) => "[object Map]" === Ts(t),
        ws = (t) => "symbol" == typeof t,
        Es = (t) => null !== t && "object" == typeof t,
        As = Object.prototype.toString,
        Ts = (t) => As.call(t),
        Ps = (t) => Ts(t).slice(8, -1),
        Ss = (t) =>
          "string" == typeof t &&
          "NaN" !== t &&
          "-" !== t[0] &&
          "" + parseInt(t, 10) === t,
        ks = (t) => {
          const e = Object.create(null);
          return (n) => e[n] || (e[n] = t(n));
        },
        Ms = /-(\w)/g,
        Cs =
          (ks((t) => t.replace(Ms, (t, e) => (e ? e.toUpperCase() : ""))),
          /\B([A-Z])/g),
        Os =
          (ks((t) => t.replace(Cs, "-$1").toLowerCase()),
          ks((t) => t.charAt(0).toUpperCase() + t.slice(1))),
        Fs =
          (ks((t) => (t ? `on${Os(t)}` : "")),
          (t, e) => t !== e && (t == t || e == e)),
        $s = new WeakMap(),
        Is = [],
        Rs = Symbol("iterate"),
        zs = Symbol("Map key iterate"),
        Ds = 0;
      function Ls(t) {
        const { deps: e } = t;
        if (e.length) {
          for (let n = 0; n < e.length; n++) e[n].delete(t);
          e.length = 0;
        }
      }
      var js = !0,
        Bs = [];
      function qs() {
        const t = Bs.pop();
        js = void 0 === t || t;
      }
      function Us(t, e, n) {
        if (!js || void 0 === ms) return;
        let r = $s.get(t);
        r || $s.set(t, (r = new Map()));
        let i = r.get(n);
        i || r.set(n, (i = new Set())),
          i.has(ms) ||
            (i.add(ms),
            ms.deps.push(i),
            ms.options.onTrack &&
              ms.options.onTrack({ effect: ms, target: t, type: e, key: n }));
      }
      function Ns(t, e, n, r, i, o) {
        const s = $s.get(t);
        if (!s) return;
        const a = new Set(),
          u = (t) => {
            t &&
              t.forEach((t) => {
                (t !== ms || t.allowRecurse) && a.add(t);
              });
          };
        if ("clear" === e) s.forEach(u);
        else if ("length" === n && bs(t))
          s.forEach((t, e) => {
            ("length" === e || e >= r) && u(t);
          });
        else
          switch ((void 0 !== n && u(s.get(n)), e)) {
            case "add":
              bs(t)
                ? Ss(n) && u(s.get("length"))
                : (u(s.get(Rs)), xs(t) && u(s.get(zs)));
              break;
            case "delete":
              bs(t) || (u(s.get(Rs)), xs(t) && u(s.get(zs)));
              break;
            case "set":
              xs(t) && u(s.get(Rs));
          }
        a.forEach((s) => {
          s.options.onTrigger &&
            s.options.onTrigger({
              effect: s,
              target: t,
              key: n,
              type: e,
              newValue: r,
              oldValue: i,
              oldTarget: o,
            }),
            s.options.scheduler ? s.options.scheduler(s) : s();
        });
      }
      var Vs = ps("__proto__,__v_isRef,__isVue"),
        Ws = new Set(
          Object.getOwnPropertyNames(Symbol)
            .map((t) => Symbol[t])
            .filter(ws)
        ),
        Hs = Zs(),
        Ys = Zs(!1, !0),
        Xs = Zs(!0),
        Ks = Zs(!0, !0),
        Gs = {};
      function Zs(t = !1, e = !1) {
        return function (n, r, i) {
          if ("__v_isReactive" === r) return !t;
          if ("__v_isReadonly" === r) return t;
          if ("__v_raw" === r && i === (t ? (e ? Pa : Ta) : e ? Aa : Ea).get(n))
            return n;
          const o = bs(n);
          if (!t && o && _s(Gs, r)) return Reflect.get(Gs, r, i);
          const s = Reflect.get(n, r, i);
          return (ws(r) ? Ws.has(r) : Vs(r))
            ? s
            : (t || Us(n, "get", r),
              e
                ? s
                : Oa(s)
                ? o && Ss(r)
                  ? s
                  : s.value
                : Es(s)
                ? t
                  ? ka(s)
                  : Sa(s)
                : s);
        };
      }
      function Qs(t = !1) {
        return function (e, n, r, i) {
          let o = e[n];
          if (!t && ((r = Ca(r)), (o = Ca(o)), !bs(e) && Oa(o) && !Oa(r)))
            return (o.value = r), !0;
          const s = bs(e) && Ss(n) ? Number(n) < e.length : _s(e, n),
            a = Reflect.set(e, n, r, i);
          return (
            e === Ca(i) &&
              (s ? Fs(r, o) && Ns(e, "set", n, r, o) : Ns(e, "add", n, r)),
            a
          );
        };
      }
      ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
        const e = Array.prototype[t];
        Gs[t] = function (...t) {
          const n = Ca(this);
          for (let t = 0, e = this.length; t < e; t++) Us(n, "get", t + "");
          const r = e.apply(n, t);
          return -1 === r || !1 === r ? e.apply(n, t.map(Ca)) : r;
        };
      }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
          const e = Array.prototype[t];
          Gs[t] = function (...t) {
            Bs.push(js), (js = !1);
            const n = e.apply(this, t);
            return qs(), n;
          };
        });
      var Js = {
          get: Hs,
          set: Qs(),
          deleteProperty: function (t, e) {
            const n = _s(t, e),
              r = t[e],
              i = Reflect.deleteProperty(t, e);
            return i && n && Ns(t, "delete", e, void 0, r), i;
          },
          has: function (t, e) {
            const n = Reflect.has(t, e);
            return (ws(e) && Ws.has(e)) || Us(t, "has", e), n;
          },
          ownKeys: function (t) {
            return Us(t, "iterate", bs(t) ? "length" : Rs), Reflect.ownKeys(t);
          },
        },
        ta = {
          get: Xs,
          set: (t, e) => (
            console.warn(
              `Set operation on key "${String(e)}" failed: target is readonly.`,
              t
            ),
            !0
          ),
          deleteProperty: (t, e) => (
            console.warn(
              `Delete operation on key "${String(
                e
              )}" failed: target is readonly.`,
              t
            ),
            !0
          ),
        },
        ea =
          (vs({}, Js, { get: Ys, set: Qs(!0) }),
          vs({}, ta, { get: Ks }),
          (t) => (Es(t) ? Sa(t) : t)),
        na = (t) => (Es(t) ? ka(t) : t),
        ra = (t) => t,
        ia = (t) => Reflect.getPrototypeOf(t);
      function oa(t, e, n = !1, r = !1) {
        const i = Ca((t = t.__v_raw)),
          o = Ca(e);
        e !== o && !n && Us(i, "get", e), !n && Us(i, "get", o);
        const { has: s } = ia(i),
          a = r ? ra : n ? na : ea;
        return s.call(i, e)
          ? a(t.get(e))
          : s.call(i, o)
          ? a(t.get(o))
          : void (t !== i && t.get(e));
      }
      function sa(t, e = !1) {
        const n = this.__v_raw,
          r = Ca(n),
          i = Ca(t);
        return (
          t !== i && !e && Us(r, "has", t),
          !e && Us(r, "has", i),
          t === i ? n.has(t) : n.has(t) || n.has(i)
        );
      }
      function aa(t, e = !1) {
        return (
          (t = t.__v_raw),
          !e && Us(Ca(t), "iterate", Rs),
          Reflect.get(t, "size", t)
        );
      }
      function ua(t) {
        t = Ca(t);
        const e = Ca(this);
        return ia(e).has.call(e, t) || (e.add(t), Ns(e, "add", t, t)), this;
      }
      function ca(t, e) {
        e = Ca(e);
        const n = Ca(this),
          { has: r, get: i } = ia(n);
        let o = r.call(n, t);
        o ? wa(n, r, t) : ((t = Ca(t)), (o = r.call(n, t)));
        const s = i.call(n, t);
        return (
          n.set(t, e),
          o ? Fs(e, s) && Ns(n, "set", t, e, s) : Ns(n, "add", t, e),
          this
        );
      }
      function la(t) {
        const e = Ca(this),
          { has: n, get: r } = ia(e);
        let i = n.call(e, t);
        i ? wa(e, n, t) : ((t = Ca(t)), (i = n.call(e, t)));
        const o = r ? r.call(e, t) : void 0,
          s = e.delete(t);
        return i && Ns(e, "delete", t, void 0, o), s;
      }
      function ha() {
        const t = Ca(this),
          e = 0 !== t.size,
          n = xs(t) ? new Map(t) : new Set(t),
          r = t.clear();
        return e && Ns(t, "clear", void 0, void 0, n), r;
      }
      function fa(t, e) {
        return function (n, r) {
          const i = this,
            o = i.__v_raw,
            s = Ca(o),
            a = e ? ra : t ? na : ea;
          return (
            !t && Us(s, "iterate", Rs),
            o.forEach((t, e) => n.call(r, a(t), a(e), i))
          );
        };
      }
      function da(t, e, n) {
        return function (...r) {
          const i = this.__v_raw,
            o = Ca(i),
            s = xs(o),
            a = "entries" === t || (t === Symbol.iterator && s),
            u = "keys" === t && s,
            c = i[t](...r),
            l = n ? ra : e ? na : ea;
          return (
            !e && Us(o, "iterate", u ? zs : Rs),
            {
              next() {
                const { value: t, done: e } = c.next();
                return e
                  ? { value: t, done: e }
                  : { value: a ? [l(t[0]), l(t[1])] : l(t), done: e };
              },
              [Symbol.iterator]() {
                return this;
              },
            }
          );
        };
      }
      function pa(t) {
        return function (...e) {
          {
            const n = e[0] ? `on key "${e[0]}" ` : "";
            console.warn(
              `${Os(t)} operation ${n}failed: target is readonly.`,
              Ca(this)
            );
          }
          return "delete" !== t && this;
        };
      }
      var ma = {
          get(t) {
            return oa(this, t);
          },
          get size() {
            return aa(this);
          },
          has: sa,
          add: ua,
          set: ca,
          delete: la,
          clear: ha,
          forEach: fa(!1, !1),
        },
        ga = {
          get(t) {
            return oa(this, t, !1, !0);
          },
          get size() {
            return aa(this);
          },
          has: sa,
          add: ua,
          set: ca,
          delete: la,
          clear: ha,
          forEach: fa(!1, !0),
        },
        va = {
          get(t) {
            return oa(this, t, !0);
          },
          get size() {
            return aa(this, !0);
          },
          has(t) {
            return sa.call(this, t, !0);
          },
          add: pa("add"),
          set: pa("set"),
          delete: pa("delete"),
          clear: pa("clear"),
          forEach: fa(!0, !1),
        },
        ya = {
          get(t) {
            return oa(this, t, !0, !0);
          },
          get size() {
            return aa(this, !0);
          },
          has(t) {
            return sa.call(this, t, !0);
          },
          add: pa("add"),
          set: pa("set"),
          delete: pa("delete"),
          clear: pa("clear"),
          forEach: fa(!0, !0),
        };
      function _a(t, e) {
        const n = e ? (t ? ya : ga) : t ? va : ma;
        return (e, r, i) =>
          "__v_isReactive" === r
            ? !t
            : "__v_isReadonly" === r
            ? t
            : "__v_raw" === r
            ? e
            : Reflect.get(_s(n, r) && r in e ? n : e, r, i);
      }
      ["keys", "values", "entries", Symbol.iterator].forEach((t) => {
        (ma[t] = da(t, !1, !1)),
          (va[t] = da(t, !0, !1)),
          (ga[t] = da(t, !1, !0)),
          (ya[t] = da(t, !0, !0));
      });
      var ba = { get: _a(!1, !1) },
        xa = (_a(!1, !0), { get: _a(!0, !1) });
      function wa(t, e, n) {
        const r = Ca(n);
        if (r !== n && e.call(t, r)) {
          const e = Ps(t);
          console.warn(
            `Reactive ${e} contains both the raw and reactive versions of the same object${
              "Map" === e ? " as keys" : ""
            }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
          );
        }
      }
      _a(!0, !0);
      var Ea = new WeakMap(),
        Aa = new WeakMap(),
        Ta = new WeakMap(),
        Pa = new WeakMap();
      function Sa(t) {
        return t && t.__v_isReadonly ? t : Ma(t, !1, Js, ba, Ea);
      }
      function ka(t) {
        return Ma(t, !0, ta, xa, Ta);
      }
      function Ma(t, e, n, r, i) {
        if (!Es(t))
          return console.warn(`value cannot be made reactive: ${String(t)}`), t;
        if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
        const o = i.get(t);
        if (o) return o;
        const s =
          (a = t).__v_skip || !Object.isExtensible(a)
            ? 0
            : (function (t) {
                switch (t) {
                  case "Object":
                  case "Array":
                    return 1;
                  case "Map":
                  case "Set":
                  case "WeakMap":
                  case "WeakSet":
                    return 2;
                  default:
                    return 0;
                }
              })(Ps(a));
        var a;
        if (0 === s) return t;
        const u = new Proxy(t, 2 === s ? r : n);
        return i.set(t, u), u;
      }
      function Ca(t) {
        return (t && Ca(t.__v_raw)) || t;
      }
      function Oa(t) {
        return Boolean(t && !0 === t.__v_isRef);
      }
      Ji("nextTick", () => $o),
        Ji("dispatch", (t) => Co.bind(Co, t)),
        Ji("watch", (t, { evaluateLater: e, effect: n }) => (r, i) => {
          let o,
            s = e(r),
            a = !0,
            u = n(() =>
              s((t) => {
                JSON.stringify(t),
                  a
                    ? (o = t)
                    : queueMicrotask(() => {
                        i(t, o), (o = t);
                      }),
                  (a = !1);
              })
            );
          t._x_effects.delete(u);
        }),
        Ji("store", function () {
          return as;
        }),
        Ji("data", (t) => Vi(t)),
        Ji("root", (t) => No(t)),
        Ji(
          "refs",
          (t) => (
            t._x_refs_proxy ||
              (t._x_refs_proxy = Xi(
                (function (t) {
                  let e = [],
                    n = t;
                  for (; n; )
                    n._x_refs && e.push(n._x_refs), (n = n.parentNode);
                  return e;
                })(t)
              )),
            t._x_refs_proxy
          )
        );
      var Fa = {};
      function $a(t) {
        return Fa[t] || (Fa[t] = 0), ++Fa[t];
      }
      function Ia(t, e, n) {
        Ji(e, (e) =>
          zo(
            `You can't use [$${directiveName}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,
            e
          )
        );
      }
      Ji("id", (t) => (e, n = null) => {
        let r = (function (t, e) {
            return Vo(t, (t) => {
              if (t._x_ids && t._x_ids[e]) return !0;
            });
          })(t, e),
          i = r ? r._x_ids[e] : $a(e);
        return n ? `${e}-${i}-${n}` : `${e}-${i}`;
      }),
        Ji("el", (t) => t),
        Ia("Focus", "focus", "focus"),
        Ia("Persist", "persist", "persist"),
        po(
          "modelable",
          (t, { expression: e }, { effect: n, evaluateLater: r }) => {
            let i = r(e),
              o = () => {
                let t;
                return i((e) => (t = e)), t;
              },
              s = r(`${e} = __placeholder`),
              a = (t) => s(() => {}, { scope: { __placeholder: t } }),
              u = o();
            a(u),
              queueMicrotask(() => {
                if (!t._x_model) return;
                t._x_removeModelListeners.default();
                let e = t._x_model.get,
                  r = t._x_model.set;
                n(() => a(e())), n(() => r(o()));
              });
          }
        ),
        po("teleport", (t, { expression: e }, { cleanup: n }) => {
          "template" !== t.tagName.toLowerCase() &&
            zo("x-teleport can only be used on a <template> tag", t);
          let r = document.querySelector(e);
          r || zo(`Cannot find x-teleport element for selector: "${e}"`);
          let i = t.content.cloneNode(!0).firstElementChild;
          (t._x_teleport = i),
            (i._x_teleportBack = t),
            t._x_forwardEvents &&
              t._x_forwardEvents.forEach((e) => {
                i.addEventListener(e, (e) => {
                  e.stopPropagation(),
                    t.dispatchEvent(new e.constructor(e.type, e));
                });
              }),
            Wi(i, {}, t),
            Bi(() => {
              r.appendChild(i), Wo(i), (i._x_ignore = !0);
            }),
            n(() => i.remove());
        });
      var Ra = () => {};
      function za(t, e, n, r) {
        let i = t,
          o = (t) => r(t),
          s = {},
          a = (t, e) => (n) => e(t, n);
        if (
          (n.includes("dot") && (e = e.replace(/-/g, ".")),
          n.includes("camel") &&
            (e = e.toLowerCase().replace(/-(\w)/g, (t, e) => e.toUpperCase())),
          n.includes("passive") && (s.passive = !0),
          n.includes("capture") && (s.capture = !0),
          n.includes("window") && (i = window),
          n.includes("document") && (i = document),
          n.includes("prevent") &&
            (o = a(o, (t, e) => {
              e.preventDefault(), t(e);
            })),
          n.includes("stop") &&
            (o = a(o, (t, e) => {
              e.stopPropagation(), t(e);
            })),
          n.includes("self") &&
            (o = a(o, (e, n) => {
              n.target === t && e(n);
            })),
          (n.includes("away") || n.includes("outside")) &&
            ((i = document),
            (o = a(o, (e, n) => {
              t.contains(n.target) ||
                (!1 !== n.target.isConnected &&
                  ((t.offsetWidth < 1 && t.offsetHeight < 1) ||
                    (!1 !== t._x_isShown && e(n))));
            }))),
          n.includes("once") &&
            (o = a(o, (t, n) => {
              t(n), i.removeEventListener(e, o, s);
            })),
          (o = a(o, (t, r) => {
            ((function (t) {
              return ["keydown", "keyup"].includes(t);
            })(e) &&
              (function (t, e) {
                let n = e.filter(
                  (t) =>
                    !["window", "document", "prevent", "stop", "once"].includes(
                      t
                    )
                );
                if (n.includes("debounce")) {
                  let t = n.indexOf("debounce");
                  n.splice(
                    t,
                    Da((n[t + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1
                  );
                }
                if (0 === n.length) return !1;
                if (1 === n.length && La(t.key).includes(n[0])) return !1;
                const r = [
                  "ctrl",
                  "shift",
                  "alt",
                  "meta",
                  "cmd",
                  "super",
                ].filter((t) => n.includes(t));
                return (
                  (n = n.filter((t) => !r.includes(t))),
                  !(
                    r.length > 0 &&
                    r.filter(
                      (e) => (
                        ("cmd" !== e && "super" !== e) || (e = "meta"),
                        t[`${e}Key`]
                      )
                    ).length === r.length &&
                    La(t.key).includes(n[0])
                  )
                );
              })(r, n)) ||
              t(r);
          })),
          n.includes("debounce"))
        ) {
          let t = n[n.indexOf("debounce") + 1] || "invalid-wait",
            e = Da(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
          o = os(o, e);
        }
        if (n.includes("throttle")) {
          let t = n[n.indexOf("throttle") + 1] || "invalid-wait",
            e = Da(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
          o = ss(o, e);
        }
        return (
          i.addEventListener(e, o, s),
          () => {
            i.removeEventListener(e, o, s);
          }
        );
      }
      function Da(t) {
        return !Array.isArray(t) && !isNaN(t);
      }
      function La(t) {
        if (!t) return [];
        t = t
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[_\s]/, "-")
          .toLowerCase();
        let e = {
          ctrl: "control",
          slash: "/",
          space: "-",
          spacebar: "-",
          cmd: "meta",
          esc: "escape",
          up: "arrow-up",
          down: "arrow-down",
          left: "arrow-left",
          right: "arrow-right",
          period: ".",
          equal: "=",
        };
        return (
          (e[t] = t),
          Object.keys(e)
            .map((n) => {
              if (e[n] === t) return n;
            })
            .filter((t) => t)
        );
      }
      function ja(t) {
        let e = t ? parseFloat(t) : null;
        return (n = e), Array.isArray(n) || isNaN(n) ? t : e;
        var n;
      }
      function Ba(t, e, n, r) {
        let i = {};
        return (
          /^\[.*\]$/.test(t.item) && Array.isArray(e)
            ? t.item
                .replace("[", "")
                .replace("]", "")
                .split(",")
                .map((t) => t.trim())
                .forEach((t, n) => {
                  i[t] = e[n];
                })
            : /^\{.*\}$/.test(t.item) &&
              !Array.isArray(e) &&
              "object" == typeof e
            ? t.item
                .replace("{", "")
                .replace("}", "")
                .split(",")
                .map((t) => t.trim())
                .forEach((t) => {
                  i[t] = e[t];
                })
            : (i[t.item] = e),
          t.index && (i[t.index] = n),
          t.collection && (i[t.collection] = r),
          i
        );
      }
      function qa() {}
      function Ua(t, e, n) {
        po(e, (r) =>
          zo(
            `You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,
            r
          )
        );
      }
      (Ra.inline = (t, { modifiers: e }, { cleanup: n }) => {
        e.includes("self") ? (t._x_ignoreSelf = !0) : (t._x_ignore = !0),
          n(() => {
            e.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore;
          });
      }),
        po("ignore", Ra),
        po("effect", (t, { expression: e }, { effect: n }) => n(oo(t, e))),
        po(
          "model",
          (t, { modifiers: e, expression: n }, { effect: r, cleanup: i }) => {
            let o = oo(t, n),
              s = oo(t, `${n} = rightSideOfExpression($event, ${n})`);
            var a =
              "select" === t.tagName.toLowerCase() ||
              ["checkbox", "radio"].includes(t.type) ||
              e.includes("lazy")
                ? "change"
                : "input";
            let u = (function (t, e, n) {
                return (
                  "radio" === t.type &&
                    Bi(() => {
                      t.hasAttribute("name") || t.setAttribute("name", n);
                    }),
                  (n, r) =>
                    Bi(() => {
                      if (n instanceof CustomEvent && void 0 !== n.detail)
                        return n.detail || n.target.value;
                      if ("checkbox" === t.type) {
                        if (Array.isArray(r)) {
                          let t = e.includes("number")
                            ? ja(n.target.value)
                            : n.target.value;
                          return n.target.checked
                            ? r.concat([t])
                            : r.filter((e) => !(e == t));
                        }
                        return n.target.checked;
                      }
                      if ("select" === t.tagName.toLowerCase() && t.multiple)
                        return e.includes("number")
                          ? Array.from(n.target.selectedOptions).map((t) =>
                              ja(t.value || t.text)
                            )
                          : Array.from(n.target.selectedOptions).map(
                              (t) => t.value || t.text
                            );
                      {
                        let t = n.target.value;
                        return e.includes("number")
                          ? ja(t)
                          : e.includes("trim")
                          ? t.trim()
                          : t;
                      }
                    })
                );
              })(t, e, n),
              c = za(t, a, e, (t) => {
                s(() => {}, { scope: { $event: t, rightSideOfExpression: u } });
              });
            t._x_removeModelListeners || (t._x_removeModelListeners = {}),
              (t._x_removeModelListeners.default = c),
              i(() => t._x_removeModelListeners.default());
            let l = oo(t, `${n} = __placeholder`);
            (t._x_model = {
              get() {
                let t;
                return o((e) => (t = e)), t;
              },
              set(t) {
                l(() => {}, { scope: { __placeholder: t } });
              },
            }),
              (t._x_forceModelUpdate = () => {
                o((e) => {
                  void 0 === e && n.match(/\./) && (e = ""),
                    (window.fromModel = !0),
                    Bi(() => ns(t, "value", e)),
                    delete window.fromModel;
                });
              }),
              r(() => {
                (e.includes("unintrusive") &&
                  document.activeElement.isSameNode(t)) ||
                  t._x_forceModelUpdate();
              });
          }
        ),
        po("cloak", (t) =>
          queueMicrotask(() => Bi(() => t.removeAttribute(ho("cloak"))))
        ),
        Uo(() => `[${ho("init")}]`),
        po(
          "init",
          es((t, { expression: e }, { evaluate: n }) =>
            "string" == typeof e ? !!e.trim() && n(e, {}, !1) : n(e, {}, !1)
          )
        ),
        po("text", (t, { expression: e }, { effect: n, evaluateLater: r }) => {
          let i = r(e);
          n(() => {
            i((e) => {
              Bi(() => {
                t.textContent = e;
              });
            });
          });
        }),
        po("html", (t, { expression: e }, { effect: n, evaluateLater: r }) => {
          let i = r(e);
          n(() => {
            i((e) => {
              Bi(() => {
                (t.innerHTML = e),
                  (t._x_ignoreSelf = !0),
                  Wo(t),
                  delete t._x_ignoreSelf;
              });
            });
          });
        }),
        Ao(xo(":", ho("bind:"))),
        po(
          "bind",
          (
            t,
            { value: e, modifiers: n, expression: r, original: i },
            { effect: o }
          ) => {
            if (!e) {
              let e = {};
              return (
                (s = e),
                Object.entries(cs).forEach(([t, e]) => {
                  Object.defineProperty(s, t, {
                    get:
                      () =>
                      (...t) =>
                        e(...t),
                  });
                }),
                void oo(t, r)(
                  (e) => {
                    ls(t, e, i);
                  },
                  { scope: e }
                )
              );
            }
            var s;
            if ("key" === e)
              return (function (t, e) {
                t._x_keyExpression = e;
              })(t, r);
            let a = oo(t, r);
            o(() =>
              a((i) => {
                void 0 === i &&
                  "string" == typeof r &&
                  r.match(/\./) &&
                  (i = ""),
                  Bi(() => ns(t, e, i, n));
              })
            );
          }
        ),
        qo(() => `[${ho("data")}]`),
        po(
          "data",
          es((t, { expression: e }, { cleanup: n }) => {
            e = "" === e ? "{}" : e;
            let r = {};
            to(r, t);
            let i = {};
            var o, s;
            (o = i),
              (s = r),
              Object.entries(hs).forEach(([t, e]) => {
                Object.defineProperty(o, t, {
                  get:
                    () =>
                    (...t) =>
                      e.bind(s)(...t),
                  enumerable: !1,
                });
              });
            let a = io(t, e, { scope: i });
            void 0 === a && (a = {}), to(a, t);
            let u = _i(a);
            Ki(u);
            let c = Wi(t, u);
            u.init && io(t, u.init),
              n(() => {
                u.destroy && io(t, u.destroy), c();
              });
          })
        ),
        po("show", (t, { modifiers: e, expression: n }, { effect: r }) => {
          let i = oo(t, n);
          t._x_doHide ||
            (t._x_doHide = () => {
              Bi(() => {
                t.style.setProperty(
                  "display",
                  "none",
                  e.includes("important") ? "important" : void 0
                );
              });
            }),
            t._x_doShow ||
              (t._x_doShow = () => {
                Bi(() => {
                  1 === t.style.length && "none" === t.style.display
                    ? t.removeAttribute("style")
                    : t.style.removeProperty("display");
                });
              });
          let o,
            s = () => {
              t._x_doHide(), (t._x_isShown = !1);
            },
            a = () => {
              t._x_doShow(), (t._x_isShown = !0);
            },
            u = () => setTimeout(a),
            c = Ko(
              (t) => (t ? a() : s()),
              (e) => {
                "function" == typeof t._x_toggleAndCascadeWithTransitions
                  ? t._x_toggleAndCascadeWithTransitions(t, e, a, s)
                  : e
                  ? u()
                  : s();
              }
            ),
            l = !0;
          r(() =>
            i((t) => {
              (l || t !== o) &&
                (e.includes("immediate") && (t ? u() : s()),
                c(t),
                (o = t),
                (l = !1));
            })
          );
        }),
        po("for", (t, { expression: e }, { effect: n, cleanup: r }) => {
          let i = (function (t) {
              let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                n = t.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
              if (!n) return;
              let r = {};
              r.items = n[2].trim();
              let i = n[1].replace(/^\s*\(|\)\s*$/g, "").trim(),
                o = i.match(e);
              return (
                o
                  ? ((r.item = i.replace(e, "").trim()),
                    (r.index = o[1].trim()),
                    o[2] && (r.collection = o[2].trim()))
                  : (r.item = i),
                r
              );
            })(e),
            o = oo(t, i.items),
            s = oo(t, t._x_keyExpression || "index");
          (t._x_prevKeys = []),
            (t._x_lookup = {}),
            n(() =>
              (function (t, e, n, r) {
                let i = t;
                n((n) => {
                  var o;
                  (o = n),
                    !Array.isArray(o) &&
                      !isNaN(o) &&
                      n >= 0 &&
                      (n = Array.from(Array(n).keys(), (t) => t + 1)),
                    void 0 === n && (n = []);
                  let s = t._x_lookup,
                    a = t._x_prevKeys,
                    u = [],
                    c = [];
                  if ("object" != typeof (l = n) || Array.isArray(l))
                    for (let t = 0; t < n.length; t++) {
                      let i = Ba(e, n[t], t, n);
                      r((t) => c.push(t), { scope: { index: t, ...i } }),
                        u.push(i);
                    }
                  else
                    n = Object.entries(n).map(([t, i]) => {
                      let o = Ba(e, i, t, n);
                      r((t) => c.push(t), { scope: { index: t, ...o } }),
                        u.push(o);
                    });
                  var l;
                  let h = [],
                    f = [],
                    d = [],
                    p = [];
                  for (let t = 0; t < a.length; t++) {
                    let e = a[t];
                    -1 === c.indexOf(e) && d.push(e);
                  }
                  a = a.filter((t) => !d.includes(t));
                  let m = "template";
                  for (let t = 0; t < c.length; t++) {
                    let e = c[t],
                      n = a.indexOf(e);
                    if (-1 === n) a.splice(t, 0, e), h.push([m, t]);
                    else if (n !== t) {
                      let e = a.splice(t, 1)[0],
                        r = a.splice(n - 1, 1)[0];
                      a.splice(t, 0, r), a.splice(n, 0, e), f.push([e, r]);
                    } else p.push(e);
                    m = e;
                  }
                  for (let t = 0; t < d.length; t++) {
                    let e = d[t];
                    s[e]._x_effects && s[e]._x_effects.forEach(Pi),
                      s[e].remove(),
                      (s[e] = null),
                      delete s[e];
                  }
                  for (let t = 0; t < f.length; t++) {
                    let [e, n] = f[t],
                      r = s[e],
                      i = s[n],
                      o = document.createElement("div");
                    Bi(() => {
                      i.after(o),
                        r.after(i),
                        i._x_currentIfEl && i.after(i._x_currentIfEl),
                        o.before(r),
                        r._x_currentIfEl && r.after(r._x_currentIfEl),
                        o.remove();
                    }),
                      Hi(i, u[c.indexOf(n)]);
                  }
                  for (let t = 0; t < h.length; t++) {
                    let [e, n] = h[t],
                      r = "template" === e ? i : s[e];
                    r._x_currentIfEl && (r = r._x_currentIfEl);
                    let o = u[n],
                      a = c[n],
                      l = document.importNode(i.content, !0).firstElementChild;
                    Wi(l, _i(o), i),
                      Bi(() => {
                        r.after(l), Wo(l);
                      }),
                      "object" == typeof a &&
                        zo(
                          "x-for key cannot be an object, it must be a string or an integer",
                          i
                        ),
                      (s[a] = l);
                  }
                  for (let t = 0; t < p.length; t++)
                    Hi(s[p[t]], u[c.indexOf(p[t])]);
                  i._x_prevKeys = c;
                });
              })(t, i, o, s)
            ),
            r(() => {
              Object.values(t._x_lookup).forEach((t) => t.remove()),
                delete t._x_prevKeys,
                delete t._x_lookup;
            });
        }),
        (qa.inline = (t, { expression: e }, { cleanup: n }) => {
          let r = No(t);
          r._x_refs || (r._x_refs = {}),
            (r._x_refs[e] = t),
            n(() => delete r._x_refs[e]);
        }),
        po("ref", qa),
        po("if", (t, { expression: e }, { effect: n, cleanup: r }) => {
          let i = oo(t, e);
          n(() =>
            i((e) => {
              e
                ? (() => {
                    if (t._x_currentIfEl) return t._x_currentIfEl;
                    let e = t.content.cloneNode(!0).firstElementChild;
                    Wi(e, {}, t),
                      Bi(() => {
                        t.after(e), Wo(e);
                      }),
                      (t._x_currentIfEl = e),
                      (t._x_undoIf = () => {
                        Ro(e, (t) => {
                          t._x_effects && t._x_effects.forEach(Pi);
                        }),
                          e.remove(),
                          delete t._x_currentIfEl;
                      });
                  })()
                : t._x_undoIf && (t._x_undoIf(), delete t._x_undoIf);
            })
          ),
            r(() => t._x_undoIf && t._x_undoIf());
        }),
        po("id", (t, { expression: e }, { evaluate: n }) => {
          n(e).forEach((e) =>
            (function (t, e) {
              t._x_ids || (t._x_ids = {}), t._x_ids[e] || (t._x_ids[e] = $a(e));
            })(t, e)
          );
        }),
        Ao(xo("@", ho("on:"))),
        po(
          "on",
          es((t, { value: e, modifiers: n, expression: r }, { cleanup: i }) => {
            let o = r ? oo(t, r) : () => {};
            "template" === t.tagName.toLowerCase() &&
              (t._x_forwardEvents || (t._x_forwardEvents = []),
              t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
            let s = za(t, e, n, (t) => {
              o(() => {}, { scope: { $event: t }, params: [t] });
            });
            i(() => s());
          })
        ),
        Ua("Collapse", "collapse", "collapse"),
        Ua("Intersect", "intersect", "intersect"),
        Ua("Focus", "trap", "focus"),
        Ua("Mask", "mask", "mask"),
        ds.setEvaluator(ao),
        ds.setReactivityEngine({
          reactive: Sa,
          effect: function (t, e = gs) {
            (function (t) {
              return t && !0 === t._isEffect;
            })(t) && (t = t.raw);
            const n = (function (t, e) {
              const n = function () {
                if (!n.active) return t();
                if (!Is.includes(n)) {
                  Ls(n);
                  try {
                    return Bs.push(js), (js = !0), Is.push(n), (ms = n), t();
                  } finally {
                    Is.pop(), qs(), (ms = Is[Is.length - 1]);
                  }
                }
              };
              return (
                (n.id = Ds++),
                (n.allowRecurse = !!e.allowRecurse),
                (n._isEffect = !0),
                (n.active = !0),
                (n.raw = t),
                (n.deps = []),
                (n.options = e),
                n
              );
            })(t, e);
            return e.lazy || n(), n;
          },
          release: function (t) {
            t.active &&
              (Ls(t), t.options.onStop && t.options.onStop(), (t.active = !1));
          },
          raw: Ca,
        });
      var Na = ds;
      let Va = null;
      class Wa {
        constructor() {
          if (Va) return Va;
          (this.onWheelAvailable = "onwheel" in document),
            (this.onKeydownAvailable = "onkeydown" in document),
            (this.onTouchAvailable = "ontouchstart" in document),
            (this.onContextmenuAvailable = "oncontextmenu" in document),
            (this.events = {
              pointerdown: this.onTouchAvailable ? "touchstart" : "pointerdown",
              pointermove: this.onTouchAvailable ? "touchmove" : "pointermove",
              pointerup: this.onTouchAvailable ? "touchend" : "pointerup",
            }),
            (Va = this);
        }
        static getInstance() {
          return Va || (Va = new Wa()), Va;
        }
        static get onWheelAvailable() {
          return Wa.getInstance().onWheelAvailable;
        }
        static get onKeydownAvailable() {
          return Wa.getInstance().onKeydownAvailable;
        }
        static get onTouchAvailable() {
          return Wa.getInstance().onTouchAvailable;
        }
        static get isTouch() {
          return Wa.getInstance().onTouchAvailable;
        }
        static get onContextmenuAvailable() {
          return Wa.getInstance().onContextmenuAvailable;
        }
        static get pointerdownEvent() {
          return Wa.getInstance().events.pointerdown;
        }
        static get pointermoveEvent() {
          return Wa.getInstance().events.pointermove;
        }
        static get pointerupEvent() {
          return Wa.getInstance().events.pointerup;
        }
      }
      class Ha {
        static random(t, e) {
          return void 0 === t
            ? Math.random()
            : void 0 === e
            ? Math.random() * t
            : t + Math.random() * (e - t);
        }
        static randomInt(t, e) {
          return Math.floor(Ha.random(t, e));
        }
        static constrain(t, e, n) {
          return Math.max(Math.min(t, n), e);
        }
        static map(t, e, n, r, i) {
          return ((t - e) / (n - e)) * (i - r) + r;
        }
        static radians(t) {
          return t * ((2 * Math.PI) / 360);
        }
        static dist(t, e, n, r) {
          return Math.sqrt((t - n) * (t - n) + (e - r) * (e - r));
        }
        static lerp(t, e, n) {
          return t + (e - t) * n;
        }
        static calcViewportFov(t, e) {
          return 2 * Math.atan(t / e) * (180 / Math.PI);
        }
      }
      class Ya {
        constructor(t, e) {
          (this.x = t), (this.velocity = 0), (this.omega = e);
        }
        update(t, e) {
          const n = e,
            r = this.velocity - (this.x - t) * (this.omega * this.omega * n),
            i = 1 + this.omega * n;
          (this.velocity = r / (i * i)), (this.x += this.velocity * n);
        }
        reset() {
          (this.x = 0), (this.velocity = 0);
        }
      }
      class Xa {
        constructor(t, e) {
          let { x: n, y: r } = t;
          (this.position = { x: n, y: r }),
            (this.velocity = { x: 0, y: 0 }),
            (this.omega = e),
            (this.direction = 0);
        }
        update(t, e) {
          const n = e,
            r =
              this.velocity.x -
              (this.position.x - t.x) * (this.omega * this.omega * n),
            i =
              this.velocity.y -
              (this.position.y - t.y) * (this.omega * this.omega * n),
            o = 1 + this.omega * n;
          (this.velocity.x = r / (o * o)),
            (this.velocity.y = i / (o * o)),
            (this.position.x += this.velocity.x * n),
            (this.position.y += this.velocity.y * n);
        }
        calcDirection(t) {
          this.direction = Math.atan2(
            this.position.y - t.y,
            this.position.x - t.x
          );
        }
        reset() {
          (this.position.x = 0),
            (this.position.y = 0),
            (this.velocity.x = 0),
            (this.velocity.y = 0),
            (this.direction = 0);
        }
        set x(t) {
          this.position.x = t;
        }
        set y(t) {
          this.position.y = t;
        }
        get x() {
          return this.position.x;
        }
        get y() {
          return this.position.y;
        }
      }
      class Ka {
        constructor(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { strictArea: !1, useTouch: !1 };
          (this.strictArea = e.strictArea),
            (this.useTouch = e.useTouch),
            (this.$area = null),
            (this.$target = null),
            (this.direction = t),
            (this.downPos = 0),
            (this.prevPos = 0),
            (this.targetScroll = 0),
            (this.scroll = 0),
            (this.velocity = 0),
            (this.acceleration = 0),
            (this.k = 0.4),
            (this.max = 0),
            (this.progress = 0),
            (this.isPointerDown = !1),
            (this.isDragging = !1),
            (this.isAutoScrolling = !1),
            (this.tween = new Ya(0, 30)),
            (this.onWheelFunction = this.onWheel.bind(this)),
            (this.onKeyDownFunction = this.onKeyDown.bind(this)),
            (this.onDownFunction = this.onDown.bind(this)),
            (this.onMoveFunction = this.onMove.bind(this)),
            (this.onUpFunction = this.onUp.bind(this)),
            (this.onContextMenuFunc = this.onContextMenu.bind(this)),
            (this.listenerOption = { capture: !0, passive: !1 }),
            (this.canceller = () => !1),
            (this.resizeMng = new yi());
        }
        setTarget(t) {
          this.removeEvents(),
            (this.$area = t),
            (this.$target = this.$area.querySelector('[data-scroll="target"]')),
            this.setEvents(),
            this.reset(),
            this.resizeMng.setSizeFunc(() => {
              const { width: t, height: e } =
                this.$target.getBoundingClientRect();
              return {
                width: t + window.innerWidth,
                height: e + window.innerHeight,
              };
            });
        }
        setCanceller(t) {
          this.canceller = t;
        }
        setEvents() {
          if (!this.$target) return;
          const t = this.strictArea ? this.$area : window;
          Wa.onWheelAvailable &&
            t.addEventListener(
              "wheel",
              this.onWheelFunction,
              this.listenerOption
            ),
            !this.strictArea &&
              Wa.onKeydownAvailable &&
              window.addEventListener("keydown", this.onKeyDownFunction),
            (Wa.isTouch || this.useTouch) &&
              (this.$area.addEventListener(
                Wa.pointerdownEvent,
                this.onDownFunction,
                this.listenerOption
              ),
              this.$area.addEventListener(
                Wa.pointermoveEvent,
                this.onMoveFunction,
                this.listenerOption
              ),
              this.$area.addEventListener(
                Wa.pointerupEvent,
                this.onUpFunction,
                this.listenerOption
              )),
            Wa.onContextmenuAvailable &&
              window.addEventListener("contextmenu", this.onContextMenuFunc);
        }
        removeEvents() {
          if (!this.$target) return;
          const t = this.strictArea ? this.$area : window;
          Wa.onWheelAvailable &&
            t.removeEventListener(
              "wheel",
              this.onWheelFunction,
              this.listenerOption
            ),
            !this.strictArea &&
              Wa.onKeydownAvailable &&
              window.removeEventListener("keydown", this.onKeyDownFunction),
            (Wa.isTouch || this.useTouch) &&
              (this.$area.removeEventListener(
                Wa.pointerdownEvent,
                this.onDownFunction,
                this.listenerOption
              ),
              this.$area.removeEventListener(
                Wa.pointermoveEvent,
                this.onMoveFunction,
                this.listenerOption
              ),
              this.$area.removeEventListener(
                Wa.pointerupEvent,
                this.onUpFunction,
                this.listenerOption
              )),
            Wa.onContextmenuAvailable &&
              window.removeEventListener("contextmenu", this.onContextMenuFunc);
        }
        getDownX(t) {
          return Wa.isTouch ? t.changedTouches[0].pageX : t.pageX;
        }
        getDownY(t) {
          return Wa.isTouch ? t.changedTouches[0].pageY : t.pageY;
        }
        getDownPos(t) {
          return "vertical" === this.direction
            ? this.getDownY(t)
            : this.getDownX(t);
        }
        onWheel(t) {
          if (this.canceller()) return;
          t.preventDefault();
          let e = 0;
          e =
            "horizontal" === this.direction
              ? Math.abs(t.deltaY) >= Math.abs(t.deltaX)
                ? t.deltaY
                : t.deltaX
              : t.deltaY;
          const n = e;
          this.addTargetScroll(n);
        }
        onKeyDown(t) {
          if (this.canceller()) return;
          const e = t.code;
          "ArrowUp" === e
            ? this.addTargetScroll(-500)
            : "ArrowDown" === e && this.addTargetScroll(500);
        }
        onDown(t) {
          if (this.canceller()) return;
          this.isPointerDown = !0;
          const e = this.getDownPos(t);
          (this.downPos = e), (this.prevPos = e);
        }
        onMove(t) {
          if (this.canceller()) return;
          if (!this.isPointerDown) return;
          t.preventDefault();
          const e = this.getDownPos(t);
          (this.prevPos = this.downPos), (this.downPos = e);
          const n = this.prevPos - this.downPos;
          this.addTargetScroll(n), (this.isDragging = !0);
        }
        onUp() {
          this.canceller() ||
            (this.isPointerDown &&
              ((this.acceleration =
                -this.k * (this.scroll - this.targetScroll)),
              (this.downPos = 0),
              (this.prevPos = 0),
              (this.isPointerDown = !1),
              (this.isDragging = !1)));
        }
        onContextMenu() {
          this.isPointerDown = !1;
        }
        addTargetScroll(t) {
          this.targetScroll = Ha.constrain(this.targetScroll + t, 0, this.max);
        }
        update(t) {
          this.canceller() ||
            (this.resizeMng.check() && this.resize(),
            (this.velocity += this.acceleration),
            (this.targetScroll += this.velocity),
            (this.velocity *= 0.9),
            (this.acceleration = 0),
            (this.targetScroll = Ha.constrain(this.targetScroll, 0, this.max)),
            this.tween.update(this.targetScroll, t),
            Math.abs(this.tween.velocity) < 0.01 &&
              (this.tween.x = this.targetScroll),
            this.isAutoScrolling && (this.tween.x = this.targetScroll),
            (this.scroll = this.tween.x),
            this.max > 0
              ? (this.progress = Ha.constrain(this.scroll / this.max, 0, 1))
              : (this.progress = 0),
            this.progress < 1e-4 && (this.progress = 0));
        }
        reset() {
          (this.targetScroll = 0),
            (this.scroll = 0),
            (this.velocity = 0),
            (this.acceleration = 0),
            (this.max = 0),
            (this.progress = 0),
            this.tween.reset();
        }
        scrollBy(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          (this.isAutoScrolling = !0),
            Nr.to(this, {
              targetScroll: this.targetScroll + t,
              duration: e,
              onComplete: () => {
                this.isAutoScrolling = !1;
              },
            });
        }
        scrollTop(t) {
          let { duration: e = 1 } = t;
          (this.isAutoScrolling = !0),
            Nr.to(this, {
              targetScroll: 0,
              duration: e,
              onComplete: () => {
                this.isAutoScrolling = !1;
              },
            });
        }
      }
      class Ga extends Ka {
        constructor(t) {
          super("vertical", t);
        }
        resize() {
          if (!this.$target) return;
          const { height: t } = this.$target.getBoundingClientRect(),
            { height: e } = this.$target.parentNode.getBoundingClientRect();
          this.max = Math.floor(t - e);
        }
        update(t) {
          super.update(t),
            (this.$target.style.transform = `translate3d(0, ${-this
              .scroll}px, 0)`);
        }
      }
      const Za = {
          pageId: "",
          lastIndexPage: "/projects/",
          isScrollable: !1,
          isMenuOpen: !1,
          init() {
            (this.scroll = null),
              (this.$header = document.getElementById("SiteHeader")),
              (this.$pageWrap = document.getElementById("PageWrapper"));
          },
          update(t) {
            this.isScrollable && this.scroll.update(t.deltaTime);
          },
          changePage(t) {
            (this.pageId = t),
              (this.$header.style.display =
                "home" === t || "project-detail" === t ? "none" : "block"),
              "projects" === t && (this.lastIndexPage = location.pathname);
          },
          setScrollArea(t) {
            if ((this.scroll && this.scroll.removeEvents(), "none" === t))
              return (this.scroll = null), void (this.isScrollable = !1);
            (this.scroll = new Ga()),
              this.scroll.setTarget(t),
              (this.isScrollable = !0);
          },
          scrollBy(t) {
            this.scroll.scrollBy(t);
          },
          getScroll() {
            return this.scroll;
          },
          toggleMenu() {
            this.isMenuOpen ? this.closeMenu() : this.openMenu();
          },
          openMenu() {
            (this.isMenuOpen = !0),
              Nr.fromTo(
                this.$header,
                { "--menuTween": 0 },
                { "--menuTween": 1, duration: 0.6 }
              );
          },
          closeMenu() {
            Nr.to(this.$header, {
              "--menuTween": 0,
              duration: 0.3,
              onComplete: () => {
                this.isMenuOpen = !1;
              },
            });
          },
        },
        Qa = () => ({
          project: {
            ":class": () =>
              "projects" === Alpine.store("ui").pageId ? "show" : "",
          },
          artwork: {
            ":class": () =>
              "artworks" === Alpine.store("ui").pageId ? "show" : "",
          },
        }),
        Ja = () => ({
          index: 0,
          numArtworks: 0,
          isVisible: !1,
          displayMode: "contain",
          init() {
            const t = this.$root.querySelectorAll(".gallery_srcList div");
            (this.artworks = Array.from(t).map((t) => ({ ...t.dataset }))),
              (this.filteredArtworks = []),
              document.addEventListener("keydown", (t) => {
                this.isVisible &&
                  ("ArrowRight" === t.code
                    ? this.next()
                    : "ArrowLeft" === t.code && this.prev());
              });
          },
          show() {
            (this.isVisible = !0),
              Nr.to(this.$root, {
                opacity: 1,
                duration: 0.3,
                onStart: () => {
                  Nr.set(this.$root, { display: "block" });
                },
              });
          },
          hide() {
            (this.isVisible = !1),
              Nr.to(this.$root, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                  Nr.set(this.$root, { display: "none" });
                },
              });
          },
          reset() {
            (this.index = 0),
              (this.numArtworks = this.filteredArtworks.length),
              (this.displayMode = "contain");
          },
          prev() {
            this.index = (this.index - 1 + this.numArtworks) % this.numArtworks;
          },
          next() {
            this.index = (this.index + 1 + this.numArtworks) % this.numArtworks;
          },
          galleryRoot: {
            "@changeCategory.window"(t) {
              const e = t.detail;
              (this.filteredArtworks =
                "all" === e
                  ? [...this.artworks]
                  : this.artworks.filter((t) => t.category.includes(e))),
                this.reset();
            },
            "@showGallery.window"(t) {
              (this.index = t.detail), this.show();
            },
            ":data-display-mode"() {
              return this.displayMode;
            },
          },
          currentItem: {
            ":src"() {
              return 0 === this.numArtworks
                ? ""
                : this.filteredArtworks[this.index].src;
            },
            ":width"() {
              return 0 === this.numArtworks
                ? 0
                : this.filteredArtworks[this.index].width;
            },
            ":height"() {
              return 0 === this.numArtworks
                ? 0
                : this.filteredArtworks[this.index].height;
            },
            ":alt"() {
              return 0 === this.numArtworks
                ? ""
                : this.filteredArtworks[this.index].alt;
            },
          },
          prevItem: {
            ":src"() {
              return this.index >= 1
                ? this.filteredArtworks[this.index - 1].src
                : "";
            },
          },
          nextItem: {
            ":src"() {
              return this.index <= this.numArtworks - 2
                ? this.filteredArtworks[this.index + 1].src
                : "";
            },
          },
          closeBtn: {
            "@click.stop"() {
              this.hide();
            },
          },
          prevBtn: {
            "@click.stop"() {
              this.prev();
            },
          },
          nextBtn: {
            "@click.stop"() {
              this.next();
            },
          },
          zoomInBtn: {
            "@click.stop"() {
              this.displayMode = "cover";
            },
          },
          zoomOutBtn: {
            "@click.stop"() {
              this.displayMode = "contain";
            },
          },
        }),
        tu = new (class {
          constructor() {}
          createEvents() {
            window.appEvents = {
              projectZoomChange: new Event("project-zoomchange"),
            };
          }
          dispatchEvent(t) {
            window.dispatchEvent(window.appEvents[t]);
          }
        })(),
        eu = () => ({
          zoomMode: "out",
          zoomBtnText: "+",
          init() {
            Nr.set(this.$root, { "--hLine": 0.3333 });
          },
          zoomIn() {
            const t =
              window.innerWidth >= 800
                ? 1
                : (window.innerHeight - 50) / window.innerHeight;
            Nr.to(this.$root, {
              "--hLine": t,
              duration: 0.6,
              onComplete: () => {
                (this.zoomMode = "in"), (this.zoomBtnText = "-");
              },
            }),
              Nr.to(this.$refs.content, { opacity: 0, duration: 0.3 });
          },
          zoomOut() {
            Nr.to(this.$root, {
              "--hLine": 0.3333,
              duration: 0.6,
              onComplete: () => {
                (this.zoomMode = "out"), (this.zoomBtnText = "+");
              },
            }),
              Nr.to(this.$refs.content, { opacity: 1, duration: 0.3 });
          },
          zoomBtn: {
            "@click.stop"() {
              "out" === this.zoomMode ? this.zoomIn() : this.zoomOut(),
                tu.dispatchEvent("projectZoomChange");
            },
          },
        }),
        nu = () => ({
          init() {
            (this.$default = this.$root.querySelector(".copyTextBtn_t1")),
              (this.$complete = this.$root.querySelector(".copyTextBtn_t2"));
          },
          copy() {
            this.textOut(this.$default),
              this.textIn(this.$complete),
              setTimeout(() => {
                this.textOut(this.$complete), this.textIn(this.$default);
              }, 2e3),
              navigator.clipboard &&
                navigator.clipboard.writeText(this.$root.dataset.copyText);
          },
          textOut(t) {
            Nr.to(t, { opacity: 0, yPercent: -50, duration: 0.6 });
          },
          textIn(t) {
            Nr.fromTo(
              t,
              { opacity: 0, yPercent: 50 },
              { opacity: 1, yPercent: 0, duration: 0.6 }
            );
          },
        });
      let ru = Float32Array;
      function iu(t, e, n) {
        const r = new ru(3);
        return t && (r[0] = t), e && (r[1] = e), n && (r[2] = n), r;
      }
      function ou(t, e, n) {
        return (
          ((n = n || new ru(3))[0] = t[0] + e[0]),
          (n[1] = t[1] + e[1]),
          (n[2] = t[2] + e[2]),
          n
        );
      }
      function su(t, e, n) {
        n = n || new ru(3);
        const r = t[2] * e[0] - t[0] * e[2],
          i = t[0] * e[1] - t[1] * e[0];
        return (n[0] = t[1] * e[2] - t[2] * e[1]), (n[1] = r), (n[2] = i), n;
      }
      function au(t, e) {
        e = e || new ru(3);
        const n = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
          r = Math.sqrt(n);
        return (
          r > 1e-5
            ? ((e[0] = t[0] / r), (e[1] = t[1] / r), (e[2] = t[2] / r))
            : ((e[0] = 0), (e[1] = 0), (e[2] = 0)),
          e
        );
      }
      let uu,
        cu,
        lu,
        hu = Float32Array;
      function fu(t, e) {
        return (
          ((e = e || new hu(16))[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          (e[9] = t[9]),
          (e[10] = t[10]),
          (e[11] = t[11]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15]),
          e
        );
      }
      function du(t) {
        return (
          ((t = t || new hu(16))[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = 1),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = 1),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          t
        );
      }
      function pu(t, e) {
        e = e || new hu(16);
        const n = t[0],
          r = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          a = t[5],
          u = t[6],
          c = t[7],
          l = t[8],
          h = t[9],
          f = t[10],
          d = t[11],
          p = t[12],
          m = t[13],
          g = t[14],
          v = t[15],
          y = f * v,
          _ = g * d,
          b = u * v,
          x = g * c,
          w = u * d,
          E = f * c,
          A = i * v,
          T = g * o,
          P = i * d,
          S = f * o,
          k = i * c,
          M = u * o,
          C = l * m,
          O = p * h,
          F = s * m,
          $ = p * a,
          I = s * h,
          R = l * a,
          z = n * m,
          D = p * r,
          L = n * h,
          j = l * r,
          B = n * a,
          q = s * r,
          U = y * a + x * h + w * m - (_ * a + b * h + E * m),
          N = _ * r + A * h + S * m - (y * r + T * h + P * m),
          V = b * r + T * a + k * m - (x * r + A * a + M * m),
          W = E * r + P * a + M * h - (w * r + S * a + k * h),
          H = 1 / (n * U + s * N + l * V + p * W);
        return (
          (e[0] = H * U),
          (e[1] = H * N),
          (e[2] = H * V),
          (e[3] = H * W),
          (e[4] = H * (_ * s + b * l + E * p - (y * s + x * l + w * p))),
          (e[5] = H * (y * n + T * l + P * p - (_ * n + A * l + S * p))),
          (e[6] = H * (x * n + A * s + M * p - (b * n + T * s + k * p))),
          (e[7] = H * (w * n + S * s + k * l - (E * n + P * s + M * l))),
          (e[8] = H * (C * c + $ * d + I * v - (O * c + F * d + R * v))),
          (e[9] = H * (O * o + z * d + j * v - (C * o + D * d + L * v))),
          (e[10] = H * (F * o + D * c + B * v - ($ * o + z * c + q * v))),
          (e[11] = H * (R * o + L * c + q * d - (I * o + j * c + B * d))),
          (e[12] = H * (F * f + R * g + O * u - (I * g + C * u + $ * f))),
          (e[13] = H * (L * g + C * i + D * f - (z * f + j * g + O * i))),
          (e[14] = H * (z * u + q * g + $ * i - (B * g + F * i + D * u))),
          (e[15] = H * (B * f + I * i + j * u - (L * u + q * f + R * i))),
          e
        );
      }
      function mu(t, e, n) {
        n = n || iu();
        const r = e[0],
          i = e[1],
          o = e[2],
          s = r * t[3] + i * t[7] + o * t[11] + t[15];
        return (
          (n[0] = (r * t[0] + i * t[4] + o * t[8] + t[12]) / s),
          (n[1] = (r * t[1] + i * t[5] + o * t[9] + t[13]) / s),
          (n[2] = (r * t[2] + i * t[6] + o * t[10] + t[14]) / s),
          n
        );
      }
      function gu(t, e, n) {
        n = n || iu();
        const r = e[0],
          i = e[1],
          o = e[2];
        return (
          (n[0] = r * t[0] + i * t[4] + o * t[8]),
          (n[1] = r * t[1] + i * t[5] + o * t[9]),
          (n[2] = r * t[2] + i * t[6] + o * t[10]),
          n
        );
      }
      var vu = Object.freeze({
        __proto__: null,
        axisRotate: function (t, e, n, r) {
          r = r || new hu(16);
          let i = e[0],
            o = e[1],
            s = e[2];
          const a = Math.sqrt(i * i + o * o + s * s);
          (i /= a), (o /= a), (s /= a);
          const u = i * i,
            c = o * o,
            l = s * s,
            h = Math.cos(n),
            f = Math.sin(n),
            d = 1 - h,
            p = u + (1 - u) * h,
            m = i * o * d + s * f,
            g = i * s * d - o * f,
            v = i * o * d - s * f,
            y = c + (1 - c) * h,
            _ = o * s * d + i * f,
            b = i * s * d + o * f,
            x = o * s * d - i * f,
            w = l + (1 - l) * h,
            E = t[0],
            A = t[1],
            T = t[2],
            P = t[3],
            S = t[4],
            k = t[5],
            M = t[6],
            C = t[7],
            O = t[8],
            F = t[9],
            $ = t[10],
            I = t[11];
          return (
            (r[0] = p * E + m * S + g * O),
            (r[1] = p * A + m * k + g * F),
            (r[2] = p * T + m * M + g * $),
            (r[3] = p * P + m * C + g * I),
            (r[4] = v * E + y * S + _ * O),
            (r[5] = v * A + y * k + _ * F),
            (r[6] = v * T + y * M + _ * $),
            (r[7] = v * P + y * C + _ * I),
            (r[8] = b * E + x * S + w * O),
            (r[9] = b * A + x * k + w * F),
            (r[10] = b * T + x * M + w * $),
            (r[11] = b * P + x * C + w * I),
            t !== r &&
              ((r[12] = t[12]),
              (r[13] = t[13]),
              (r[14] = t[14]),
              (r[15] = t[15])),
            r
          );
        },
        axisRotation: function (t, e, n) {
          n = n || new hu(16);
          let r = t[0],
            i = t[1],
            o = t[2];
          const s = Math.sqrt(r * r + i * i + o * o);
          (r /= s), (i /= s), (o /= s);
          const a = r * r,
            u = i * i,
            c = o * o,
            l = Math.cos(e),
            h = Math.sin(e),
            f = 1 - l;
          return (
            (n[0] = a + (1 - a) * l),
            (n[1] = r * i * f + o * h),
            (n[2] = r * o * f - i * h),
            (n[3] = 0),
            (n[4] = r * i * f - o * h),
            (n[5] = u + (1 - u) * l),
            (n[6] = i * o * f + r * h),
            (n[7] = 0),
            (n[8] = r * o * f + i * h),
            (n[9] = i * o * f - r * h),
            (n[10] = c + (1 - c) * l),
            (n[11] = 0),
            (n[12] = 0),
            (n[13] = 0),
            (n[14] = 0),
            (n[15] = 1),
            n
          );
        },
        copy: fu,
        create: function () {
          return new hu(16).fill(0);
        },
        frustum: function (t, e, n, r, i, o, s) {
          const a = e - t,
            u = r - n,
            c = i - o;
          return (
            ((s = s || new hu(16))[0] = (2 * i) / a),
            (s[1] = 0),
            (s[2] = 0),
            (s[3] = 0),
            (s[4] = 0),
            (s[5] = (2 * i) / u),
            (s[6] = 0),
            (s[7] = 0),
            (s[8] = (t + e) / a),
            (s[9] = (r + n) / u),
            (s[10] = o / c),
            (s[11] = -1),
            (s[12] = 0),
            (s[13] = 0),
            (s[14] = (i * o) / c),
            (s[15] = 0),
            s
          );
        },
        getAxis: function (t, e, n) {
          const r = 4 * e;
          return (
            ((n = n || iu())[0] = t[r + 0]),
            (n[1] = t[r + 1]),
            (n[2] = t[r + 2]),
            n
          );
        },
        getTranslation: function (t, e) {
          return (
            ((e = e || iu())[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e
          );
        },
        identity: du,
        inverse: pu,
        lookAt: function (t, e, n, r) {
          return (
            (r = r || new hu(16)),
            (uu = uu || iu()),
            (cu = cu || iu()),
            (lu = lu || iu()),
            au(
              (function (t, e, n) {
                return (
                  ((n = n || new ru(3))[0] = t[0] - e[0]),
                  (n[1] = t[1] - e[1]),
                  (n[2] = t[2] - e[2]),
                  n
                );
              })(t, e, lu),
              lu
            ),
            au(su(n, lu, uu), uu),
            au(su(lu, uu, cu), cu),
            (r[0] = uu[0]),
            (r[1] = uu[1]),
            (r[2] = uu[2]),
            (r[3] = 0),
            (r[4] = cu[0]),
            (r[5] = cu[1]),
            (r[6] = cu[2]),
            (r[7] = 0),
            (r[8] = lu[0]),
            (r[9] = lu[1]),
            (r[10] = lu[2]),
            (r[11] = 0),
            (r[12] = t[0]),
            (r[13] = t[1]),
            (r[14] = t[2]),
            (r[15] = 1),
            r
          );
        },
        multiply: function (t, e, n) {
          n = n || new hu(16);
          const r = t[0],
            i = t[1],
            o = t[2],
            s = t[3],
            a = t[4],
            u = t[5],
            c = t[6],
            l = t[7],
            h = t[8],
            f = t[9],
            d = t[10],
            p = t[11],
            m = t[12],
            g = t[13],
            v = t[14],
            y = t[15],
            _ = e[0],
            b = e[1],
            x = e[2],
            w = e[3],
            E = e[4],
            A = e[5],
            T = e[6],
            P = e[7],
            S = e[8],
            k = e[9],
            M = e[10],
            C = e[11],
            O = e[12],
            F = e[13],
            $ = e[14],
            I = e[15];
          return (
            (n[0] = r * _ + a * b + h * x + m * w),
            (n[1] = i * _ + u * b + f * x + g * w),
            (n[2] = o * _ + c * b + d * x + v * w),
            (n[3] = s * _ + l * b + p * x + y * w),
            (n[4] = r * E + a * A + h * T + m * P),
            (n[5] = i * E + u * A + f * T + g * P),
            (n[6] = o * E + c * A + d * T + v * P),
            (n[7] = s * E + l * A + p * T + y * P),
            (n[8] = r * S + a * k + h * M + m * C),
            (n[9] = i * S + u * k + f * M + g * C),
            (n[10] = o * S + c * k + d * M + v * C),
            (n[11] = s * S + l * k + p * M + y * C),
            (n[12] = r * O + a * F + h * $ + m * I),
            (n[13] = i * O + u * F + f * $ + g * I),
            (n[14] = o * O + c * F + d * $ + v * I),
            (n[15] = s * O + l * F + p * $ + y * I),
            n
          );
        },
        negate: function (t, e) {
          return (
            ((e = e || new hu(16))[0] = -t[0]),
            (e[1] = -t[1]),
            (e[2] = -t[2]),
            (e[3] = -t[3]),
            (e[4] = -t[4]),
            (e[5] = -t[5]),
            (e[6] = -t[6]),
            (e[7] = -t[7]),
            (e[8] = -t[8]),
            (e[9] = -t[9]),
            (e[10] = -t[10]),
            (e[11] = -t[11]),
            (e[12] = -t[12]),
            (e[13] = -t[13]),
            (e[14] = -t[14]),
            (e[15] = -t[15]),
            e
          );
        },
        ortho: function (t, e, n, r, i, o, s) {
          return (
            ((s = s || new hu(16))[0] = 2 / (e - t)),
            (s[1] = 0),
            (s[2] = 0),
            (s[3] = 0),
            (s[4] = 0),
            (s[5] = 2 / (r - n)),
            (s[6] = 0),
            (s[7] = 0),
            (s[8] = 0),
            (s[9] = 0),
            (s[10] = 2 / (i - o)),
            (s[11] = 0),
            (s[12] = (e + t) / (t - e)),
            (s[13] = (r + n) / (n - r)),
            (s[14] = (o + i) / (i - o)),
            (s[15] = 1),
            s
          );
        },
        perspective: function (t, e, n, r, i) {
          i = i || new hu(16);
          const o = Math.tan(0.5 * Math.PI - 0.5 * t),
            s = 1 / (n - r);
          return (
            (i[0] = o / e),
            (i[1] = 0),
            (i[2] = 0),
            (i[3] = 0),
            (i[4] = 0),
            (i[5] = o),
            (i[6] = 0),
            (i[7] = 0),
            (i[8] = 0),
            (i[9] = 0),
            (i[10] = (n + r) * s),
            (i[11] = -1),
            (i[12] = 0),
            (i[13] = 0),
            (i[14] = n * r * s * 2),
            (i[15] = 0),
            i
          );
        },
        rotateX: function (t, e, n) {
          n = n || new hu(16);
          const r = t[4],
            i = t[5],
            o = t[6],
            s = t[7],
            a = t[8],
            u = t[9],
            c = t[10],
            l = t[11],
            h = Math.cos(e),
            f = Math.sin(e);
          return (
            (n[4] = h * r + f * a),
            (n[5] = h * i + f * u),
            (n[6] = h * o + f * c),
            (n[7] = h * s + f * l),
            (n[8] = h * a - f * r),
            (n[9] = h * u - f * i),
            (n[10] = h * c - f * o),
            (n[11] = h * l - f * s),
            t !== n &&
              ((n[0] = t[0]),
              (n[1] = t[1]),
              (n[2] = t[2]),
              (n[3] = t[3]),
              (n[12] = t[12]),
              (n[13] = t[13]),
              (n[14] = t[14]),
              (n[15] = t[15])),
            n
          );
        },
        rotateY: function (t, e, n) {
          n = n || new hu(16);
          const r = t[0],
            i = t[1],
            o = t[2],
            s = t[3],
            a = t[8],
            u = t[9],
            c = t[10],
            l = t[11],
            h = Math.cos(e),
            f = Math.sin(e);
          return (
            (n[0] = h * r - f * a),
            (n[1] = h * i - f * u),
            (n[2] = h * o - f * c),
            (n[3] = h * s - f * l),
            (n[8] = h * a + f * r),
            (n[9] = h * u + f * i),
            (n[10] = h * c + f * o),
            (n[11] = h * l + f * s),
            t !== n &&
              ((n[4] = t[4]),
              (n[5] = t[5]),
              (n[6] = t[6]),
              (n[7] = t[7]),
              (n[12] = t[12]),
              (n[13] = t[13]),
              (n[14] = t[14]),
              (n[15] = t[15])),
            n
          );
        },
        rotateZ: function (t, e, n) {
          n = n || new hu(16);
          const r = t[0],
            i = t[1],
            o = t[2],
            s = t[3],
            a = t[4],
            u = t[5],
            c = t[6],
            l = t[7],
            h = Math.cos(e),
            f = Math.sin(e);
          return (
            (n[0] = h * r + f * a),
            (n[1] = h * i + f * u),
            (n[2] = h * o + f * c),
            (n[3] = h * s + f * l),
            (n[4] = h * a - f * r),
            (n[5] = h * u - f * i),
            (n[6] = h * c - f * o),
            (n[7] = h * l - f * s),
            t !== n &&
              ((n[8] = t[8]),
              (n[9] = t[9]),
              (n[10] = t[10]),
              (n[11] = t[11]),
              (n[12] = t[12]),
              (n[13] = t[13]),
              (n[14] = t[14]),
              (n[15] = t[15])),
            n
          );
        },
        rotationX: function (t, e) {
          e = e || new hu(16);
          const n = Math.cos(t),
            r = Math.sin(t);
          return (
            (e[0] = 1),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = n),
            (e[6] = r),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = -r),
            (e[10] = n),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        rotationY: function (t, e) {
          e = e || new hu(16);
          const n = Math.cos(t),
            r = Math.sin(t);
          return (
            (e[0] = n),
            (e[1] = 0),
            (e[2] = -r),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 1),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = r),
            (e[9] = 0),
            (e[10] = n),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        rotationZ: function (t, e) {
          e = e || new hu(16);
          const n = Math.cos(t),
            r = Math.sin(t);
          return (
            (e[0] = n),
            (e[1] = r),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = -r),
            (e[5] = n),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = 1),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        scale: function (t, e, n) {
          n = n || new hu(16);
          const r = e[0],
            i = e[1],
            o = e[2];
          return (
            (n[0] = r * t[0]),
            (n[1] = r * t[1]),
            (n[2] = r * t[2]),
            (n[3] = r * t[3]),
            (n[4] = i * t[4]),
            (n[5] = i * t[5]),
            (n[6] = i * t[6]),
            (n[7] = i * t[7]),
            (n[8] = o * t[8]),
            (n[9] = o * t[9]),
            (n[10] = o * t[10]),
            (n[11] = o * t[11]),
            t !== n &&
              ((n[12] = t[12]),
              (n[13] = t[13]),
              (n[14] = t[14]),
              (n[15] = t[15])),
            n
          );
        },
        scaling: function (t, e) {
          return (
            ((e = e || new hu(16))[0] = t[0]),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = t[1]),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = t[2]),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        setAxis: function (t, e, n, r) {
          r !== t && (r = fu(t, r));
          const i = 4 * n;
          return (r[i + 0] = e[0]), (r[i + 1] = e[1]), (r[i + 2] = e[2]), r;
        },
        setDefaultType: function (t) {
          const e = hu;
          return (hu = t), e;
        },
        setTranslation: function (t, e, n) {
          return (
            t !== (n = n || du()) &&
              ((n[0] = t[0]),
              (n[1] = t[1]),
              (n[2] = t[2]),
              (n[3] = t[3]),
              (n[4] = t[4]),
              (n[5] = t[5]),
              (n[6] = t[6]),
              (n[7] = t[7]),
              (n[8] = t[8]),
              (n[9] = t[9]),
              (n[10] = t[10]),
              (n[11] = t[11])),
            (n[12] = e[0]),
            (n[13] = e[1]),
            (n[14] = e[2]),
            (n[15] = 1),
            n
          );
        },
        transformDirection: gu,
        transformNormal: function (t, e, n) {
          n = n || iu();
          const r = pu(t),
            i = e[0],
            o = e[1],
            s = e[2];
          return (
            (n[0] = i * r[0] + o * r[1] + s * r[2]),
            (n[1] = i * r[4] + o * r[5] + s * r[6]),
            (n[2] = i * r[8] + o * r[9] + s * r[10]),
            n
          );
        },
        transformPoint: mu,
        translate: function (t, e, n) {
          n = n || new hu(16);
          const r = e[0],
            i = e[1],
            o = e[2],
            s = t[0],
            a = t[1],
            u = t[2],
            c = t[3],
            l = t[4],
            h = t[5],
            f = t[6],
            d = t[7],
            p = t[8],
            m = t[9],
            g = t[10],
            v = t[11],
            y = t[12],
            _ = t[13],
            b = t[14],
            x = t[15];
          return (
            t !== n &&
              ((n[0] = s),
              (n[1] = a),
              (n[2] = u),
              (n[3] = c),
              (n[4] = l),
              (n[5] = h),
              (n[6] = f),
              (n[7] = d),
              (n[8] = p),
              (n[9] = m),
              (n[10] = g),
              (n[11] = v)),
            (n[12] = s * r + l * i + p * o + y),
            (n[13] = a * r + h * i + m * o + _),
            (n[14] = u * r + f * i + g * o + b),
            (n[15] = c * r + d * i + v * o + x),
            n
          );
        },
        translation: function (t, e) {
          return (
            ((e = e || new hu(16))[0] = 1),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 1),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = 1),
            (e[11] = 0),
            (e[12] = t[0]),
            (e[13] = t[1]),
            (e[14] = t[2]),
            (e[15] = 1),
            e
          );
        },
        transpose: function (t, e) {
          if ((e = e || new hu(16)) === t) {
            let n;
            return (
              (n = t[1]),
              (t[1] = t[4]),
              (t[4] = n),
              (n = t[2]),
              (t[2] = t[8]),
              (t[8] = n),
              (n = t[3]),
              (t[3] = t[12]),
              (t[12] = n),
              (n = t[6]),
              (t[6] = t[9]),
              (t[9] = n),
              (n = t[7]),
              (t[7] = t[13]),
              (t[13] = n),
              (n = t[11]),
              (t[11] = t[14]),
              (t[14] = n),
              e
            );
          }
          const n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            s = t[4],
            a = t[5],
            u = t[6],
            c = t[7],
            l = t[8],
            h = t[9],
            f = t[10],
            d = t[11],
            p = t[12],
            m = t[13],
            g = t[14],
            v = t[15];
          return (
            (e[0] = n),
            (e[1] = s),
            (e[2] = l),
            (e[3] = p),
            (e[4] = r),
            (e[5] = a),
            (e[6] = h),
            (e[7] = m),
            (e[8] = i),
            (e[9] = u),
            (e[10] = f),
            (e[11] = g),
            (e[12] = o),
            (e[13] = c),
            (e[14] = d),
            (e[15] = v),
            e
          );
        },
      });
      const yu = 5121,
        _u = {};
      {
        const t = _u;
        (t[5120] = Int8Array),
          (t[5121] = Uint8Array),
          (t[5122] = Int16Array),
          (t[5123] = Uint16Array),
          (t[5124] = Int32Array),
          (t[5125] = Uint32Array),
          (t[5126] = Float32Array),
          (t[32819] = Uint16Array),
          (t[32820] = Uint16Array),
          (t[33635] = Uint16Array),
          (t[5131] = Uint16Array),
          (t[33640] = Uint32Array),
          (t[35899] = Uint32Array),
          (t[35902] = Uint32Array),
          (t[36269] = Uint32Array),
          (t[34042] = Uint32Array);
      }
      function bu(t) {
        if (t instanceof Int8Array) return 5120;
        if (t instanceof Uint8Array) return yu;
        if (t instanceof Uint8ClampedArray) return yu;
        if (t instanceof Int16Array) return 5122;
        if (t instanceof Uint16Array) return 5123;
        if (t instanceof Int32Array) return 5124;
        if (t instanceof Uint32Array) return 5125;
        if (t instanceof Float32Array) return 5126;
        throw new Error("unsupported typed array type");
      }
      function xu(t) {
        if (t === Int8Array) return 5120;
        if (t === Uint8Array) return yu;
        if (t === Uint8ClampedArray) return yu;
        if (t === Int16Array) return 5122;
        if (t === Uint16Array) return 5123;
        if (t === Int32Array) return 5124;
        if (t === Uint32Array) return 5125;
        if (t === Float32Array) return 5126;
        throw new Error("unsupported typed array type");
      }
      function wu(t) {
        const e = _u[t];
        if (!e) throw new Error("unknown gl type");
        return e;
      }
      const Eu =
        "undefined" != typeof SharedArrayBuffer
          ? function (t) {
              return (
                t &&
                t.buffer &&
                (t.buffer instanceof ArrayBuffer ||
                  t.buffer instanceof SharedArrayBuffer)
              );
            }
          : function (t) {
              return t && t.buffer && t.buffer instanceof ArrayBuffer;
            };
      function Au(t, e) {
        Object.keys(e).forEach(function (n) {
          e.hasOwnProperty(n) && t.hasOwnProperty(n) && (e[n] = t[n]);
        });
      }
      function Tu(...t) {
        console.error(...t);
      }
      const Pu = new Map();
      function Su(t, e) {
        if (!t || "object" != typeof t) return !1;
        let n = Pu.get(e);
        n || ((n = new WeakMap()), Pu.set(e, n));
        let r = n.get(t);
        if (void 0 === r) {
          const i = Object.prototype.toString.call(t);
          (r = i.substring(8, i.length - 1) === e), n.set(t, r);
        }
        return r;
      }
      function ku(t, e) {
        return "undefined" != typeof WebGLTexture && Su(e, "WebGLTexture");
      }
      const Mu = 34962,
        Cu = { attribPrefix: "" };
      function Ou(t, e, n, r) {
        if ("undefined" != typeof WebGLBuffer && Su(e, "WebGLBuffer")) return e;
        n = n || Mu;
        const i = t.createBuffer();
        return (
          (function (t, e, n, r, i) {
            t.bindBuffer(e, n), t.bufferData(e, r, i || 35044);
          })(t, n, i, e, r),
          i
        );
      }
      function Fu(t) {
        return "indices" === t;
      }
      function $u(t) {
        return t.length ? t : t.data;
      }
      const Iu = /coord|texture/i,
        Ru = /color|colour/i;
      function zu(t, e, n) {
        return (
          t.numComponents ||
          t.size ||
          (function (t, e) {
            let n;
            if (((n = Iu.test(t) ? 2 : Ru.test(t) ? 4 : 3), e % n > 0))
              throw new Error(
                `Can not guess numComponents for attribute '${t}'. Tried ${n} but ${e} values is not evenly divisible by ${n}. You should specify it.`
              );
            return n;
          })(e, n || $u(t).length)
        );
      }
      function Du(t, e) {
        if (Eu(t)) return t;
        if (Eu(t.data)) return t.data;
        Array.isArray(t) && (t = { data: t });
        let n = t.type ? Lu(t.type) : void 0;
        return n || (n = Fu(e) ? Uint16Array : Float32Array), new n(t.data);
      }
      function Lu(t) {
        return "number" == typeof t ? wu(t) : t || Float32Array;
      }
      function ju(t, e) {
        return {
          buffer: e.buffer,
          numValues: 24,
          type: ((n = e.type), "number" == typeof n ? n : n ? xu(n) : 5126),
          arrayType: Lu(e.type),
        };
        var n;
      }
      function Bu(t, e) {
        const n = e.data || e,
          r = Lu(e.type),
          i = n * r.BYTES_PER_ELEMENT,
          o = t.createBuffer();
        return (
          t.bindBuffer(Mu, o),
          t.bufferData(Mu, i, e.drawType || 35044),
          { buffer: o, numValues: n, type: xu(r), arrayType: r }
        );
      }
      function qu(t, e, n) {
        const r = Du(e, n);
        return {
          arrayType: r.constructor,
          buffer: Ou(t, r, void 0, e.drawType),
          type: bu(r),
          numValues: 0,
        };
      }
      const Uu = ["position", "positions", "a_position"];
      function Nu(t, e, n) {
        const r = (function (t, e) {
            const n = {};
            return (
              Object.keys(e).forEach(function (r) {
                if (!Fu(r)) {
                  const o = e[r],
                    s =
                      o.attrib || o.name || o.attribName || Cu.attribPrefix + r;
                  if (o.value) {
                    if (!Array.isArray(o.value) && !Eu(o.value))
                      throw new Error("array.value is not array or typedarray");
                    n[s] = { value: o.value };
                  } else {
                    let e;
                    e =
                      o.buffer && o.buffer instanceof WebGLBuffer
                        ? ju
                        : "number" == typeof o || "number" == typeof o.data
                        ? Bu
                        : qu;
                    const {
                        buffer: a,
                        type: u,
                        numValues: c,
                        arrayType: l,
                      } = e(t, o, r),
                      h =
                        void 0 !== o.normalize
                          ? o.normalize
                          : (i = l) === Int8Array || i === Uint8Array,
                      f = zu(o, r, c);
                    n[s] = {
                      buffer: a,
                      numComponents: f,
                      type: u,
                      normalize: h,
                      stride: o.stride || 0,
                      offset: o.offset || 0,
                      divisor: void 0 === o.divisor ? void 0 : o.divisor,
                      drawType: o.drawType,
                    };
                  }
                }
                var i;
              }),
              t.bindBuffer(Mu, null),
              n
            );
          })(t, e),
          i = Object.assign({}, n || {});
        i.attribs = Object.assign({}, n ? n.attribs : {}, r);
        const o = e.indices;
        if (o) {
          const e = Du(o, "indices");
          (i.indices = Ou(t, e, 34963)),
            (i.numElements = e.length),
            (i.elementType = bu(e));
        } else
          i.numElements ||
            (i.numElements = (function (t, e) {
              let n, r;
              for (
                r = 0;
                r < Uu.length &&
                ((n = Uu[r]), !(n in e)) &&
                ((n = Cu.attribPrefix + n), !(n in e));
                ++r
              );
              r === Uu.length && (n = Object.keys(e)[0]);
              const i = e[n];
              if (!i.buffer) return 1;
              t.bindBuffer(Mu, i.buffer);
              const o = t.getBufferParameter(Mu, 34660);
              var s;
              t.bindBuffer(Mu, null);
              const a =
                  o /
                  (5120 === (s = i.type) || 5121 === s
                    ? 1
                    : 5122 === s || 5123 === s
                    ? 2
                    : 5124 === s || 5125 === s || 5126 === s
                    ? 4
                    : 0),
                u = i.numComponents || i.size,
                c = a / u;
              if (c % 1 != 0)
                throw new Error(
                  `numComponents ${u} not correct for length ${length}`
                );
              return c;
            })(t, i.attribs));
        return i;
      }
      function Vu(t, e) {
        const n = {};
        return (
          Object.keys(e).forEach(function (r) {
            n[r] = (function (t, e, n) {
              const r = "indices" === n ? 34963 : Mu;
              return Ou(t, Du(e, n), r);
            })(t, e[r], r);
          }),
          e.indices
            ? ((n.numElements = e.indices.length),
              (n.elementType = bu(Du(e.indices))))
            : (n.numElements = (function (t) {
                let e, n;
                for (n = 0; n < Uu.length && ((e = Uu[n]), !(e in t)); ++n);
                n === Uu.length && (e = Object.keys(t)[0]);
                const r = t[e],
                  i = $u(r).length;
                if (void 0 === i) return 1;
                const o = zu(r, e),
                  s = i / o;
                if (i % o > 0)
                  throw new Error(
                    `numComponents ${o} not correct for length ${i}`
                  );
                return s;
              })(e)),
          n
        );
      }
      const Wu = $u,
        Hu = zu;
      function Yu(t, e) {
        let n = 0;
        return (
          (t.push = function () {
            for (let e = 0; e < arguments.length; ++e) {
              const r = arguments[e];
              if (r instanceof Array || Eu(r))
                for (let e = 0; e < r.length; ++e) t[n++] = r[e];
              else t[n++] = r;
            }
          }),
          (t.reset = function (t) {
            n = t || 0;
          }),
          (t.numComponents = e),
          Object.defineProperty(t, "numElements", {
            get: function () {
              return (this.length / this.numComponents) | 0;
            },
          }),
          t
        );
      }
      function Xu(t, e, n) {
        return Yu(new (n || Float32Array)(t * e), t);
      }
      function Ku(t) {
        return "indices" !== t;
      }
      function Gu(t, e, n) {
        const r = t.length,
          i = new Float32Array(3);
        for (let o = 0; o < r; o += 3)
          n(e, [t[o], t[o + 1], t[o + 2]], i),
            (t[o] = i[0]),
            (t[o + 1] = i[1]),
            (t[o + 2] = i[2]);
      }
      function Zu(t, e, n) {
        n = n || iu();
        const r = e[0],
          i = e[1],
          o = e[2];
        return (
          (n[0] = r * t[0] + i * t[1] + o * t[2]),
          (n[1] = r * t[4] + i * t[5] + o * t[6]),
          (n[2] = r * t[8] + i * t[9] + o * t[10]),
          n
        );
      }
      function Qu(t, e) {
        return Gu(t, e, gu), t;
      }
      function Ju(t, e) {
        return Gu(t, pu(e), Zu), t;
      }
      function tc(t, e) {
        return Gu(t, e, mu), t;
      }
      function ec(t, e) {
        return (
          Object.keys(t).forEach(function (n) {
            const r = t[n];
            n.indexOf("pos") >= 0
              ? tc(r, e)
              : n.indexOf("tan") >= 0 || n.indexOf("binorm") >= 0
              ? Qu(r, e)
              : n.indexOf("norm") >= 0 && Ju(r, e);
          }),
          t
        );
      }
      function nc(t, e, n) {
        return (
          (t = t || 2),
          {
            position: {
              numComponents: 2,
              data: [
                (e = e || 0) + -1 * (t *= 0.5),
                (n = n || 0) + -1 * t,
                e + 1 * t,
                n + -1 * t,
                e + -1 * t,
                n + 1 * t,
                e + 1 * t,
                n + 1 * t,
              ],
            },
            normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
            texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
            indices: [0, 1, 2, 2, 1, 3],
          }
        );
      }
      function rc(t, e, n, r, i) {
        (t = t || 1), (e = e || 1), (n = n || 1), (r = r || 1), (i = i || du());
        const o = (n + 1) * (r + 1),
          s = Xu(3, o),
          a = Xu(3, o),
          u = Xu(2, o);
        for (let i = 0; i <= r; i++)
          for (let o = 0; o <= n; o++) {
            const c = o / n,
              l = i / r;
            s.push(t * c - 0.5 * t, 0, e * l - 0.5 * e),
              a.push(0, 1, 0),
              u.push(c, l);
          }
        const c = n + 1,
          l = Xu(3, n * r * 2, Uint16Array);
        for (let t = 0; t < r; t++)
          for (let e = 0; e < n; e++)
            l.push((t + 0) * c + e, (t + 1) * c + e, (t + 0) * c + e + 1),
              l.push((t + 1) * c + e, (t + 1) * c + e + 1, (t + 0) * c + e + 1);
        return ec({ position: s, normal: a, texcoord: u, indices: l }, i);
      }
      function ic(t, e, n, r, i, o, s) {
        if (e <= 0 || n <= 0)
          throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
        (r = r || 0), (o = o || 0);
        const a = (i = i || Math.PI) - r,
          u = (s = s || 2 * Math.PI) - o,
          c = (e + 1) * (n + 1),
          l = Xu(3, c),
          h = Xu(3, c),
          f = Xu(2, c);
        for (let i = 0; i <= n; i++)
          for (let s = 0; s <= e; s++) {
            const c = s / e,
              d = i / n,
              p = u * c + o,
              m = a * d + r,
              g = Math.sin(p),
              v = Math.cos(p),
              y = Math.sin(m),
              _ = v * y,
              b = Math.cos(m),
              x = g * y;
            l.push(t * _, t * b, t * x), h.push(_, b, x), f.push(1 - c, d);
          }
        const d = e + 1,
          p = Xu(3, e * n * 2, Uint16Array);
        for (let t = 0; t < e; t++)
          for (let e = 0; e < n; e++)
            p.push((e + 0) * d + t, (e + 0) * d + t + 1, (e + 1) * d + t),
              p.push((e + 1) * d + t, (e + 0) * d + t + 1, (e + 1) * d + t + 1);
        return { position: l, normal: h, texcoord: f, indices: p };
      }
      const oc = [
        [3, 7, 5, 1],
        [6, 2, 0, 4],
        [6, 7, 3, 2],
        [0, 1, 5, 4],
        [7, 6, 4, 5],
        [2, 3, 1, 0],
      ];
      function sc(t) {
        const e = (t = t || 1) / 2,
          n = [
            [-e, -e, -e],
            [+e, -e, -e],
            [-e, +e, -e],
            [+e, +e, -e],
            [-e, -e, +e],
            [+e, -e, +e],
            [-e, +e, +e],
            [+e, +e, +e],
          ],
          r = [
            [1, 0, 0],
            [-1, 0, 0],
            [0, 1, 0],
            [0, -1, 0],
            [0, 0, 1],
            [0, 0, -1],
          ],
          i = [
            [1, 0],
            [0, 0],
            [0, 1],
            [1, 1],
          ],
          o = Xu(3, 24),
          s = Xu(3, 24),
          a = Xu(2, 24),
          u = Xu(3, 12, Uint16Array);
        for (let t = 0; t < 6; ++t) {
          const e = oc[t];
          for (let u = 0; u < 4; ++u) {
            const c = n[e[u]],
              l = r[t],
              h = i[u];
            o.push(c), s.push(l), a.push(h);
          }
          const c = 4 * t;
          u.push(c + 0, c + 1, c + 2), u.push(c + 0, c + 2, c + 3);
        }
        return { position: o, normal: s, texcoord: a, indices: u };
      }
      function ac(t, e, n, r, i, o, s) {
        if (r < 3) throw new Error("radialSubdivisions must be 3 or greater");
        if (i < 1) throw new Error("verticalSubdivisions must be 1 or greater");
        const a = void 0 === o || o,
          u = void 0 === s || s,
          c = (a ? 2 : 0) + (u ? 2 : 0),
          l = (r + 1) * (i + 1 + c),
          h = Xu(3, l),
          f = Xu(3, l),
          d = Xu(2, l),
          p = Xu(3, r * (i + c / 2) * 2, Uint16Array),
          m = r + 1,
          g = Math.atan2(t - e, n),
          v = Math.cos(g),
          y = Math.sin(g),
          _ = i + (u ? 2 : 0);
        for (let o = a ? -2 : 0; o <= _; ++o) {
          let s,
            a = o / i,
            u = n * a;
          o < 0
            ? ((u = 0), (a = 1), (s = t))
            : o > i
            ? ((u = n), (a = 1), (s = e))
            : (s = t + (o / i) * (e - t)),
            (-2 !== o && o !== i + 2) || ((s = 0), (a = 0)),
            (u -= n / 2);
          for (let t = 0; t < m; ++t) {
            const e = Math.sin((t * Math.PI * 2) / r),
              n = Math.cos((t * Math.PI * 2) / r);
            h.push(e * s, u, n * s),
              o < 0
                ? f.push(0, -1, 0)
                : o > i
                ? f.push(0, 1, 0)
                : 0 === s
                ? f.push(0, 0, 0)
                : f.push(e * v, y, n * v),
              d.push(t / r, 1 - a);
          }
        }
        for (let t = 0; t < i + c; ++t)
          if (!((1 === t && a) || (t === i + c - 2 && u)))
            for (let e = 0; e < r; ++e)
              p.push(
                m * (t + 0) + 0 + e,
                m * (t + 0) + 1 + e,
                m * (t + 1) + 1 + e
              ),
                p.push(
                  m * (t + 0) + 0 + e,
                  m * (t + 1) + 1 + e,
                  m * (t + 1) + 0 + e
                );
        return { position: h, normal: f, texcoord: d, indices: p };
      }
      function uc(t, e) {
        e = e || [];
        const n = [];
        for (let r = 0; r < t.length; r += 4) {
          const i = t[r],
            o = t.slice(r + 1, r + 4);
          o.push.apply(o, e);
          for (let t = 0; t < i; ++t) n.push.apply(n, o);
        }
        return n;
      }
      function cc() {
        const t = [
            0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30,
            0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30,
            60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0,
            30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30,
            0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30,
            30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90,
            30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30,
            100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0,
            30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100,
            30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30,
            60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67,
            60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67,
            90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30,
            67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150,
            0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30,
            150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150,
            30, 0, 150, 0,
          ],
          e = uc([
            18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6,
            1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1,
            0, 6, -1, 0, 0,
          ]),
          n = uc(
            [
              18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200,
              70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70,
              210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160,
              160, 220,
            ],
            [255]
          ),
          r = t.length / 3,
          i = {
            position: Xu(3, r),
            texcoord: Xu(2, r),
            normal: Xu(3, r),
            color: Xu(4, r, Uint8Array),
            indices: Xu(3, r / 3, Uint16Array),
          };
        i.position.push(t),
          i.texcoord.push([
            0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34,
            0.19, 0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31,
            0.62, 0.19, 0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49,
            0.55, 0.49, 0.43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0,
            1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0,
            1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0,
            1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0,
            1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0,
            0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,
            0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1,
            0,
          ]),
          i.normal.push(e),
          i.color.push(n);
        for (let t = 0; t < r; ++t) i.indices.push(t);
        return i;
      }
      function lc(t, e, n, r, i, o, s) {
        if (i <= 0) throw new Error("subdivisionDown must be > 0");
        const a = (s = s || 1) - (o = o || 0),
          u = 2 * (i + 1) * 4,
          c = Xu(3, u),
          l = Xu(3, u),
          h = Xu(2, u);
        function f(t, e, n) {
          return t + (e - t) * n;
        }
        function d(e, n, s, u, d, p) {
          for (let y = 0; y <= i; y++) {
            const _ = n / 1,
              b = y / i,
              x = 2 * (_ - 0.5),
              w = (o + b * a) * Math.PI,
              E = Math.sin(w),
              A = Math.cos(w),
              T = f(t, e, E),
              P = x * r,
              S = A * t,
              k = E * T;
            c.push(P, S, k);
            const M = ou(
              ((m = [0, E, A]),
              (g = s),
              ((v = (v = void 0) || new ru(3))[0] = m[0] * g[0]),
              (v[1] = m[1] * g[1]),
              (v[2] = m[2] * g[2]),
              v),
              u
            );
            l.push(M), h.push(_ * d + p, b);
          }
          var m, g, v;
        }
        for (let t = 0; t < 2; t++) {
          const r = 2 * (t / 1 - 0.5);
          d(e, t, [1, 1, 1], [0, 0, 0], 1, 0),
            d(e, t, [0, 0, 0], [r, 0, 0], 0, 0),
            d(n, t, [1, 1, 1], [0, 0, 0], 1, 0),
            d(n, t, [0, 0, 0], [r, 0, 0], 0, 1);
        }
        const p = Xu(3, 2 * i * 4, Uint16Array);
        function m(t, e) {
          for (let n = 0; n < i; ++n)
            p.push(t + n + 0, t + n + 1, e + n + 0),
              p.push(t + n + 1, e + n + 1, e + n + 0);
        }
        const g = i + 1;
        return (
          m(0 * g, 4 * g),
          m(5 * g, 7 * g),
          m(6 * g, 2 * g),
          m(3 * g, 1 * g),
          { position: c, normal: l, texcoord: h, indices: p }
        );
      }
      function hc(t, e, n, r, i, o) {
        return ac(t, t, e, n, r, i, o);
      }
      function fc(t, e, n, r, i, o) {
        if (n < 3) throw new Error("radialSubdivisions must be 3 or greater");
        if (r < 3) throw new Error("verticalSubdivisions must be 3 or greater");
        i = i || 0;
        const s = (o = o || 2 * Math.PI) - i,
          a = n + 1,
          u = r + 1,
          c = a * u,
          l = Xu(3, c),
          h = Xu(3, c),
          f = Xu(2, c),
          d = Xu(3, n * r * 2, Uint16Array);
        for (let o = 0; o < u; ++o) {
          const u = o / r,
            c = u * Math.PI * 2,
            d = Math.sin(c),
            p = t + d * e,
            m = Math.cos(c),
            g = m * e;
          for (let t = 0; t < a; ++t) {
            const e = t / n,
              r = i + e * s,
              o = Math.sin(r),
              a = Math.cos(r),
              c = o * p,
              v = a * p,
              y = o * d,
              _ = a * d;
            l.push(c, g, v), h.push(y, m, _), f.push(e, 1 - u);
          }
        }
        for (let t = 0; t < r; ++t)
          for (let e = 0; e < n; ++e) {
            const n = 1 + e,
              r = 1 + t;
            d.push(a * t + e, a * r + e, a * t + n),
              d.push(a * r + e, a * r + n, a * t + n);
          }
        return { position: l, normal: h, texcoord: f, indices: d };
      }
      function dc(t, e, n, r, i) {
        if (e < 3) throw new Error("divisions must be at least 3");
        (i = i || 1), (r = r || 0);
        const o = (e + 1) * ((n = n || 1) + 1),
          s = Xu(3, o),
          a = Xu(3, o),
          u = Xu(2, o),
          c = Xu(3, n * e * 2, Uint16Array);
        let l = 0;
        const h = t - r,
          f = e + 1;
        for (let t = 0; t <= n; ++t) {
          const o = r + h * Math.pow(t / n, i);
          for (let r = 0; r <= e; ++r) {
            const i = (2 * Math.PI * r) / e,
              h = o * Math.cos(i),
              d = o * Math.sin(i);
            if (
              (s.push(h, 0, d),
              a.push(0, 1, 0),
              u.push(1 - r / e, t / n),
              t > 0 && r !== e)
            ) {
              const t = l + (r + 1),
                e = l + r,
                n = l + r - f,
                i = l + (r + 1) - f;
              c.push(t, e, n), c.push(t, n, i);
            }
          }
          l += e + 1;
        }
        return { position: s, normal: a, texcoord: u, indices: c };
      }
      function pc(t) {
        return function (e) {
          const n = t.apply(this, Array.prototype.slice.call(arguments, 1));
          return Vu(e, n);
        };
      }
      function mc(t) {
        return function (e) {
          const n = t.apply(null, Array.prototype.slice.call(arguments, 1));
          return Nu(e, n);
        };
      }
      const gc = [
        "numComponents",
        "size",
        "type",
        "normalize",
        "stride",
        "offset",
        "attrib",
        "name",
        "attribName",
      ];
      function vc(t, e, n, r) {
        r = r || 0;
        const i = t.length;
        for (let o = 0; o < i; ++o) e[n + o] = t[o] + r;
      }
      function yc(t, e) {
        const n = Wu(t),
          r = new n.constructor(e);
        let i = r;
        var o, s;
        return (
          n.numComponents && n.numElements && Yu(r, n.numComponents),
          t.data &&
            ((i = { data: r }),
            (o = t),
            (s = i),
            gc.forEach(function (t) {
              const e = o[t];
              void 0 !== e && (s[t] = e);
            })),
          i
        );
      }
      const _c = mc(cc),
        bc = pc(cc),
        xc = mc(sc),
        wc = pc(sc),
        Ec = mc(rc),
        Ac = pc(rc),
        Tc = mc(ic),
        Pc = pc(ic),
        Sc = mc(ac),
        kc = pc(ac),
        Mc = mc(nc),
        Cc = pc(nc),
        Oc = mc(lc),
        Fc = pc(lc),
        $c = mc(hc),
        Ic = pc(hc),
        Rc = mc(fc),
        zc = pc(fc),
        Dc = mc(dc),
        Lc = pc(dc),
        jc = Oc,
        Bc = Fc,
        qc = lc;
      var Uc = Object.freeze({
        __proto__: null,
        create3DFBufferInfo: _c,
        create3DFBuffers: bc,
        create3DFVertices: cc,
        createAugmentedTypedArray: Xu,
        createCubeBufferInfo: xc,
        createCubeBuffers: wc,
        createCubeVertices: sc,
        createPlaneBufferInfo: Ec,
        createPlaneBuffers: Ac,
        createPlaneVertices: rc,
        createSphereBufferInfo: Tc,
        createSphereBuffers: Pc,
        createSphereVertices: ic,
        createTruncatedConeBufferInfo: Sc,
        createTruncatedConeBuffers: kc,
        createTruncatedConeVertices: ac,
        createXYQuadBufferInfo: Mc,
        createXYQuadBuffers: Cc,
        createXYQuadVertices: nc,
        createCresentBufferInfo: jc,
        createCresentBuffers: Bc,
        createCresentVertices: qc,
        createCrescentBufferInfo: Oc,
        createCrescentBuffers: Fc,
        createCrescentVertices: lc,
        createCylinderBufferInfo: $c,
        createCylinderBuffers: Ic,
        createCylinderVertices: hc,
        createTorusBufferInfo: Rc,
        createTorusBuffers: zc,
        createTorusVertices: fc,
        createDiscBufferInfo: Dc,
        createDiscBuffers: Lc,
        createDiscVertices: dc,
        deindexVertices: function (t) {
          const e = t.indices,
            n = {},
            r = e.length;
          return (
            Object.keys(t)
              .filter(Ku)
              .forEach(function (i) {
                const o = t[i],
                  s = o.numComponents,
                  a = Xu(s, r, o.constructor);
                for (let t = 0; t < r; ++t) {
                  const n = e[t] * s;
                  for (let t = 0; t < s; ++t) a.push(o[n + t]);
                }
                n[i] = a;
              }),
            n
          );
        },
        flattenNormals: function (t) {
          if (t.indices)
            throw new Error(
              "can not flatten normals of indexed vertices. deindex them first"
            );
          const e = t.normal,
            n = e.length;
          for (let t = 0; t < n; t += 9) {
            const n = e[t + 0],
              r = e[t + 1],
              i = e[t + 2],
              o = e[t + 3],
              s = e[t + 4],
              a = e[t + 5];
            let u = n + o + e[t + 6],
              c = r + s + e[t + 7],
              l = i + a + e[t + 8];
            const h = Math.sqrt(u * u + c * c + l * l);
            (u /= h),
              (c /= h),
              (l /= h),
              (e[t + 0] = u),
              (e[t + 1] = c),
              (e[t + 2] = l),
              (e[t + 3] = u),
              (e[t + 4] = c),
              (e[t + 5] = l),
              (e[t + 6] = u),
              (e[t + 7] = c),
              (e[t + 8] = l);
          }
          return t;
        },
        makeRandomVertexColors: function (t, e) {
          e = e || {};
          const n = t.position.numElements,
            r = Xu(4, n, Uint8Array),
            i =
              e.rand ||
              function (t, e) {
                return e < 3 ? (256, (256 * Math.random()) | 0) : 255;
              };
          if (((t.color = r), t.indices))
            for (let t = 0; t < n; ++t)
              r.push(i(t, 0), i(t, 1), i(t, 2), i(t, 3));
          else {
            const t = e.vertsPerColor || 3,
              o = n / t;
            for (let e = 0; e < o; ++e) {
              const n = [i(e, 0), i(e, 1), i(e, 2), i(e, 3)];
              for (let e = 0; e < t; ++e) r.push(n);
            }
          }
          return t;
        },
        reorientDirections: Qu,
        reorientNormals: Ju,
        reorientPositions: tc,
        reorientVertices: ec,
        concatVertices: function (t) {
          const e = {};
          let n;
          for (let r = 0; r < t.length; ++r) {
            const i = t[r];
            Object.keys(i).forEach(function (t) {
              e[t] || (e[t] = []), n || "indices" === t || (n = t);
              const r = i[t],
                o = Hu(r, t),
                s = Wu(r).length / o;
              e[t].push(s);
            });
          }
          const r = e[n],
            i = {};
          return (
            Object.keys(e).forEach(function (e) {
              const n = (function (e) {
                  let n,
                    r = 0;
                  for (let i = 0; i < t.length; ++i) {
                    const o = t[i][e];
                    (r += Wu(o).length), (n && !o.data) || (n = o);
                  }
                  return { length: r, spec: n };
                })(e),
                o = yc(n.spec, n.length);
              !(function (e, n, r) {
                let i = 0,
                  o = 0;
                for (let s = 0; s < t.length; ++s) {
                  const a = t[s][e],
                    u = Wu(a);
                  "indices" === e ? (vc(u, r, o, i), (i += n[s])) : vc(u, r, o),
                    (o += u.length);
                }
              })(e, r, Wu(o)),
                (i[e] = o);
            }),
            i
          );
        },
        duplicateVertices: function (t) {
          const e = {};
          return (
            Object.keys(t).forEach(function (n) {
              const r = t[n],
                i = Wu(r),
                o = yc(r, i.length);
              vc(i, Wu(o), 0), (e[n] = o);
            }),
            e
          );
        },
      });
      function Nc(t) {
        return !!t.texStorage2D;
      }
      const Vc = (function () {
          const t = {},
            e = {};
          return function (n, r) {
            return (
              (function (n) {
                const r = n.constructor.name;
                if (!t[r]) {
                  for (const t in n)
                    if ("number" == typeof n[t]) {
                      const r = e[n[t]];
                      e[n[t]] = r ? `${r} | ${t}` : t;
                    }
                  t[r] = !0;
                }
              })(n),
              e[r] || ("number" == typeof r ? `0x${r.toString(16)}` : r)
            );
          };
        })(),
        Wc = {
          textureColor: new Uint8Array([128, 192, 255, 255]),
          textureOptions: {},
          crossOrigin: void 0,
        },
        Hc = Eu,
        Yc = (function () {
          let t;
          return function () {
            return (
              (t =
                t ||
                ("undefined" != typeof document && document.createElement
                  ? document.createElement("canvas").getContext("2d")
                  : null)),
              t
            );
          };
        })(),
        Xc = 6407,
        Kc = 6408,
        Gc = 6402,
        Zc = 33071,
        Qc = 3553,
        Jc = 34067,
        tl = 32879,
        el = 35866,
        nl = 34069,
        rl = 10241,
        il = 10240,
        ol = 10242,
        sl = 10243,
        al = 3317,
        ul = 5120,
        cl = 5121,
        ll = 5122,
        hl = 5123,
        fl = 5124,
        dl = 5125,
        pl = 5126,
        ml = 5131,
        gl = 36193,
        vl = 33640,
        yl = 33319,
        _l = 33320,
        bl = 6403,
        xl = 36244,
        wl = 36248,
        El = 36249;
      {
        const t = {};
        (t[6406] = { numColorComponents: 1 }),
          (t[6409] = { numColorComponents: 1 }),
          (t[6410] = { numColorComponents: 2 }),
          (t[Xc] = { numColorComponents: 3 }),
          (t[6408] = { numColorComponents: 4 }),
          (t[bl] = { numColorComponents: 1 }),
          (t[36244] = { numColorComponents: 1 }),
          (t[yl] = { numColorComponents: 2 }),
          (t[33320] = { numColorComponents: 2 }),
          (t[Xc] = { numColorComponents: 3 }),
          (t[36248] = { numColorComponents: 3 }),
          (t[6408] = { numColorComponents: 4 }),
          (t[36249] = { numColorComponents: 4 }),
          (t[6402] = { numColorComponents: 1 }),
          (t[34041] = { numColorComponents: 2 });
      }
      let Al;
      function Tl(t) {
        if (!Al) {
          const t = {};
          (t[6406] = {
            textureFormat: 6406,
            colorRenderable: !0,
            textureFilterable: !0,
            bytesPerElement: [1, 2, 2, 4],
            type: [cl, ml, gl, pl],
          }),
            (t[6409] = {
              textureFormat: 6409,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [1, 2, 2, 4],
              type: [cl, ml, gl, pl],
            }),
            (t[6410] = {
              textureFormat: 6410,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [2, 4, 4, 8],
              type: [cl, ml, gl, pl],
            }),
            (t[Xc] = {
              textureFormat: Xc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [3, 6, 6, 12, 2],
              type: [cl, ml, gl, pl, 33635],
            }),
            (t[6408] = {
              textureFormat: Kc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [4, 8, 8, 16, 2, 2],
              type: [cl, ml, gl, pl, 32819, 32820],
            }),
            (t[6402] = {
              textureFormat: Gc,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [2, 4],
              type: [dl, hl],
            }),
            (t[33321] = {
              textureFormat: bl,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [1],
              type: [cl],
            }),
            (t[36756] = {
              textureFormat: bl,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [1],
              type: [ul],
            }),
            (t[33325] = {
              textureFormat: bl,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [4, 2],
              type: [pl, ml],
            }),
            (t[33326] = {
              textureFormat: bl,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [pl],
            }),
            (t[33330] = {
              textureFormat: xl,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [1],
              type: [cl],
            }),
            (t[33329] = {
              textureFormat: xl,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [1],
              type: [ul],
            }),
            (t[33332] = {
              textureFormat: xl,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [2],
              type: [hl],
            }),
            (t[33331] = {
              textureFormat: xl,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [2],
              type: [ll],
            }),
            (t[33334] = {
              textureFormat: xl,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [dl],
            }),
            (t[33333] = {
              textureFormat: xl,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [fl],
            }),
            (t[33323] = {
              textureFormat: yl,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [2],
              type: [cl],
            }),
            (t[36757] = {
              textureFormat: yl,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [2],
              type: [ul],
            }),
            (t[33327] = {
              textureFormat: yl,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [8, 4],
              type: [pl, ml],
            }),
            (t[33328] = {
              textureFormat: yl,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [8],
              type: [pl],
            }),
            (t[33336] = {
              textureFormat: _l,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [2],
              type: [cl],
            }),
            (t[33335] = {
              textureFormat: _l,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [2],
              type: [ul],
            }),
            (t[33338] = {
              textureFormat: _l,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [hl],
            }),
            (t[33337] = {
              textureFormat: _l,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [ll],
            }),
            (t[33340] = {
              textureFormat: _l,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [8],
              type: [dl],
            }),
            (t[33339] = {
              textureFormat: _l,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [8],
              type: [fl],
            }),
            (t[32849] = {
              textureFormat: Xc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [3],
              type: [cl],
            }),
            (t[35905] = {
              textureFormat: Xc,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [3],
              type: [cl],
            }),
            (t[36194] = {
              textureFormat: Xc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [3, 2],
              type: [cl, 33635],
            }),
            (t[36758] = {
              textureFormat: Xc,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [3],
              type: [ul],
            }),
            (t[35898] = {
              textureFormat: Xc,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [12, 6, 4],
              type: [pl, ml, 35899],
            }),
            (t[35901] = {
              textureFormat: Xc,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [12, 6, 4],
              type: [pl, ml, 35902],
            }),
            (t[34843] = {
              textureFormat: Xc,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [12, 6],
              type: [pl, ml],
            }),
            (t[34837] = {
              textureFormat: Xc,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [12],
              type: [pl],
            }),
            (t[36221] = {
              textureFormat: wl,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [3],
              type: [cl],
            }),
            (t[36239] = {
              textureFormat: wl,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [3],
              type: [ul],
            }),
            (t[36215] = {
              textureFormat: wl,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [6],
              type: [hl],
            }),
            (t[36233] = {
              textureFormat: wl,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [6],
              type: [ll],
            }),
            (t[36209] = {
              textureFormat: wl,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [12],
              type: [dl],
            }),
            (t[36227] = {
              textureFormat: wl,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [12],
              type: [fl],
            }),
            (t[32856] = {
              textureFormat: Kc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [4],
              type: [cl],
            }),
            (t[35907] = {
              textureFormat: Kc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [4],
              type: [cl],
            }),
            (t[36759] = {
              textureFormat: Kc,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [4],
              type: [ul],
            }),
            (t[32855] = {
              textureFormat: Kc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [4, 2, 4],
              type: [cl, 32820, vl],
            }),
            (t[32854] = {
              textureFormat: Kc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [4, 2],
              type: [cl, 32819],
            }),
            (t[32857] = {
              textureFormat: Kc,
              colorRenderable: !0,
              textureFilterable: !0,
              bytesPerElement: [4],
              type: [vl],
            }),
            (t[34842] = {
              textureFormat: Kc,
              colorRenderable: !1,
              textureFilterable: !0,
              bytesPerElement: [16, 8],
              type: [pl, ml],
            }),
            (t[34836] = {
              textureFormat: Kc,
              colorRenderable: !1,
              textureFilterable: !1,
              bytesPerElement: [16],
              type: [pl],
            }),
            (t[36220] = {
              textureFormat: El,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [cl],
            }),
            (t[36238] = {
              textureFormat: El,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [ul],
            }),
            (t[36975] = {
              textureFormat: El,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [vl],
            }),
            (t[36214] = {
              textureFormat: El,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [8],
              type: [hl],
            }),
            (t[36232] = {
              textureFormat: El,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [8],
              type: [ll],
            }),
            (t[36226] = {
              textureFormat: El,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [16],
              type: [fl],
            }),
            (t[36208] = {
              textureFormat: El,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [16],
              type: [dl],
            }),
            (t[33189] = {
              textureFormat: Gc,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [2, 4],
              type: [hl, dl],
            }),
            (t[33190] = {
              textureFormat: Gc,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [dl],
            }),
            (t[36012] = {
              textureFormat: Gc,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [pl],
            }),
            (t[35056] = {
              textureFormat: 34041,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [34042],
            }),
            (t[36013] = {
              textureFormat: 34041,
              colorRenderable: !0,
              textureFilterable: !1,
              bytesPerElement: [4],
              type: [36269],
            }),
            Object.keys(t).forEach(function (e) {
              const n = t[e];
              (n.bytesPerElementMap = {}),
                n.bytesPerElement.forEach(function (t, e) {
                  const r = n.type[e];
                  n.bytesPerElementMap[r] = t;
                });
            }),
            (Al = t);
        }
        return Al[t];
      }
      function Pl(t) {
        const e = Tl(t);
        if (!e) throw "unknown internal format";
        return { format: e.textureFormat, type: e.type[0] };
      }
      function Sl(t) {
        return 0 == (t & (t - 1));
      }
      function kl(t, e, n, r, i) {
        if (i % 1 != 0) throw "can't guess dimensions";
        if (n || r) {
          if (r) {
            if (!n && (n = i / r) % 1) throw "can't guess dimensions";
          } else if ((r = i / n) % 1) throw "can't guess dimensions";
        } else {
          const t = Math.sqrt(i / (e === Jc ? 6 : 1));
          t % 1 == 0 ? ((n = t), (r = t)) : ((n = i), (r = 1));
        }
        return { width: n, height: r };
      }
      function Ml(t) {
        var e;
        Au(t, Wc),
          t.textureColor &&
            ((e = t.textureColor),
            (Wc.textureColor = new Uint8Array([
              255 * e[0],
              255 * e[1],
              255 * e[2],
              255 * e[3],
            ])));
      }
      function Cl(t, e) {
        void 0 !== e.colorspaceConversion &&
          t.pixelStorei(37443, e.colorspaceConversion),
          void 0 !== e.premultiplyAlpha &&
            t.pixelStorei(37441, e.premultiplyAlpha),
          void 0 !== e.flipY && t.pixelStorei(37440, e.flipY);
      }
      function Ol(t) {
        t.pixelStorei(al, 4),
          Nc(t) &&
            (t.pixelStorei(3314, 0),
            t.pixelStorei(32878, 0),
            t.pixelStorei(3316, 0),
            t.pixelStorei(3315, 0),
            t.pixelStorei(32877, 0));
      }
      function Fl(t, e, n) {
        const r = n.target || Qc;
        t.bindTexture(r, e),
          (function (t, e, n, r) {
            r.minMag &&
              (n.call(t, e, rl, r.minMag), n.call(t, e, il, r.minMag)),
              r.min && n.call(t, e, rl, r.min),
              r.mag && n.call(t, e, il, r.mag),
              r.wrap &&
                (n.call(t, e, ol, r.wrap),
                n.call(t, e, sl, r.wrap),
                (e === tl ||
                  ("undefined" != typeof WebGLSampler &&
                    Su(e, "WebGLSampler"))) &&
                  n.call(t, e, 32882, r.wrap)),
              r.wrapR && n.call(t, e, 32882, r.wrapR),
              r.wrapS && n.call(t, e, ol, r.wrapS),
              r.wrapT && n.call(t, e, sl, r.wrapT),
              r.minLod && n.call(t, e, 33082, r.minLod),
              r.maxLod && n.call(t, e, 33083, r.maxLod),
              r.baseLevel && n.call(t, e, 33084, r.baseLevel),
              r.maxLevel && n.call(t, e, 33085, r.maxLevel);
          })(t, r, t.texParameteri, n);
      }
      function $l(t, e, n, r, i, o) {
        (n = n || Wc.textureOptions), (o = o || Kc);
        const s = n.target || Qc;
        if (
          ((r = r || n.width),
          (i = i || n.height),
          t.bindTexture(s, e),
          (function (t, e, n, r) {
            if (!Nc(t)) return Sl(e) && Sl(n);
            const i = Tl(r);
            if (!i) throw "unknown internal format";
            return i.colorRenderable && i.textureFilterable;
          })(t, r, i, o))
        )
          t.generateMipmap(s);
        else {
          const e = (function (t) {
            const e = Tl(t);
            if (!e) throw "unknown internal format";
            return e.textureFilterable;
          })(o)
            ? 9729
            : 9728;
          t.texParameteri(s, rl, e),
            t.texParameteri(s, il, e),
            t.texParameteri(s, ol, Zc),
            t.texParameteri(s, sl, Zc);
        }
      }
      function Il(t) {
        return !0 === t.auto || (void 0 === t.auto && void 0 === t.level);
      }
      function Rl(t, e) {
        return (
          (e = e || {}).cubeFaceOrder || [nl, 34070, 34071, 34072, 34073, 34074]
        );
      }
      function zl(t, e) {
        const n = Rl(0, e).map(function (t, e) {
          return { face: t, ndx: e };
        });
        return (
          n.sort(function (t, e) {
            return t.face - e.face;
          }),
          n
        );
      }
      function Dl(t, e, n, r) {
        const i = (r = r || Wc.textureOptions).target || Qc,
          o = r.level || 0;
        let s = n.width,
          a = n.height;
        const u = r.internalFormat || r.format || Kc,
          c = Pl(u),
          l = r.format || c.format,
          h = r.type || c.type;
        if ((Cl(t, r), t.bindTexture(i, e), i === Jc)) {
          const c = n.width,
            f = n.height;
          let d, p;
          if (c / 6 === f) (d = f), (p = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0]);
          else if (f / 6 === c)
            (d = c), (p = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5]);
          else if (c / 3 == f / 2)
            (d = c / 3), (p = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1]);
          else {
            if (c / 2 != f / 3)
              throw (
                "can't figure out cube map from element: " +
                (n.src ? n.src : n.nodeName)
              );
            (d = c / 2), (p = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]);
          }
          const m = Yc();
          m
            ? ((m.canvas.width = d),
              (m.canvas.height = d),
              (s = d),
              (a = d),
              zl(0, r).forEach(function (e) {
                const r = p[2 * e.ndx + 0] * d,
                  i = p[2 * e.ndx + 1] * d;
                m.drawImage(n, r, i, d, d, 0, 0, d, d),
                  t.texImage2D(e.face, o, u, l, h, m.canvas);
              }),
              (m.canvas.width = 1),
              (m.canvas.height = 1))
            : "undefined" != typeof createImageBitmap &&
              ((s = d),
              (a = d),
              zl(0, r).forEach(function (c) {
                const f = p[2 * c.ndx + 0] * d,
                  m = p[2 * c.ndx + 1] * d;
                t.texImage2D(c.face, o, u, d, d, 0, l, h, null),
                  createImageBitmap(n, f, m, d, d, {
                    premultiplyAlpha: "none",
                    colorSpaceConversion: "none",
                  }).then(function (n) {
                    Cl(t, r),
                      t.bindTexture(i, e),
                      t.texImage2D(c.face, o, u, l, h, n),
                      Il(r) && $l(t, e, r, s, a, u);
                  });
              }));
        } else if (i === tl || i === el) {
          const e = Math.min(n.width, n.height),
            r = Math.max(n.width, n.height),
            s = r / e;
          if (s % 1 != 0) throw "can not compute 3D dimensions of element";
          const a = n.width === r ? 1 : 0,
            c = n.height === r ? 1 : 0;
          t.pixelStorei(al, 1),
            t.pixelStorei(3314, n.width),
            t.pixelStorei(32878, 0),
            t.pixelStorei(32877, 0),
            t.texImage3D(i, o, u, e, e, e, 0, l, h, null);
          for (let r = 0; r < s; ++r) {
            const s = r * e * a,
              u = r * e * c;
            t.pixelStorei(3316, s),
              t.pixelStorei(3315, u),
              t.texSubImage3D(i, o, 0, 0, r, e, e, 1, l, h, n);
          }
          Ol(t);
        } else t.texImage2D(i, o, u, l, h, n);
        Il(r) && $l(t, e, r, s, a, u), Fl(t, e, r);
      }
      function Ll() {}
      function jl(t) {
        return (
          ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap) ||
          ("undefined" != typeof ImageData && t instanceof ImageData) ||
          ("undefined" != typeof HTMLElement && t instanceof HTMLElement)
        );
      }
      function Bl(t, e, n) {
        return jl(t)
          ? (setTimeout(function () {
              n(null, t);
            }),
            t)
          : (function (t, e, n) {
              let r;
              if (
                ((n = n || Ll),
                (e = void 0 !== e ? e : Wc.crossOrigin),
                (e = (function (t, e) {
                  return void 0 !== e ||
                    (function (t) {
                      if ("undefined" != typeof document) {
                        const e = document.createElement("a");
                        return (
                          (e.href = t),
                          e.hostname === location.hostname &&
                            e.port === location.port &&
                            e.protocol === location.protocol
                        );
                      }
                      {
                        const e = new URL(location.href).origin;
                        return new URL(t, location.href).origin === e;
                      }
                    })(t)
                    ? e
                    : "anonymous";
                })(t, e)),
                "undefined" != typeof Image)
              ) {
                (r = new Image()), void 0 !== e && (r.crossOrigin = e);
                const i = function () {
                    r.removeEventListener("error", o),
                      r.removeEventListener("load", s),
                      (r = null);
                  },
                  o = function () {
                    const e = "couldn't load image: " + t;
                    Tu(e), n(e, r), i();
                  },
                  s = function () {
                    n(null, r), i();
                  };
                return (
                  r.addEventListener("error", o),
                  r.addEventListener("load", s),
                  (r.src = t),
                  r
                );
              }
              if ("undefined" != typeof ImageBitmap) {
                let i, o;
                const s = function () {
                    n(i, o);
                  },
                  a = {};
                e && (a.mode = "cors"),
                  fetch(t, a)
                    .then(function (t) {
                      if (!t.ok) throw t;
                      return t.blob();
                    })
                    .then(function (t) {
                      return createImageBitmap(t, {
                        premultiplyAlpha: "none",
                        colorSpaceConversion: "none",
                      });
                    })
                    .then(function (t) {
                      (o = t), setTimeout(s);
                    })
                    .catch(function (t) {
                      (i = t), setTimeout(s);
                    }),
                  (r = null);
              }
              return r;
            })(t, e, n);
      }
      function ql(t, e, n) {
        const r = (n = n || Wc.textureOptions).target || Qc;
        if ((t.bindTexture(r, e), !1 === n.color)) return;
        const i = (function (t) {
          return (
            (t = t || Wc.textureColor),
            Hc(t)
              ? t
              : new Uint8Array([255 * t[0], 255 * t[1], 255 * t[2], 255 * t[3]])
          );
        })(n.color);
        if (r === Jc)
          for (let e = 0; e < 6; ++e)
            t.texImage2D(nl + e, 0, Kc, 1, 1, 0, Kc, cl, i);
        else
          r === tl || r === el
            ? t.texImage3D(r, 0, Kc, 1, 1, 1, 0, Kc, cl, i)
            : t.texImage2D(r, 0, Kc, 1, 1, 0, Kc, cl, i);
      }
      function Ul(t, e, n, r) {
        const i = (r = r || Wc.textureOptions).target || Qc;
        t.bindTexture(i, e);
        let o = r.width,
          s = r.height,
          a = r.depth;
        const u = r.level || 0,
          c = r.internalFormat || r.format || Kc,
          l = Pl(c),
          h = r.format || l.format,
          f =
            r.type ||
            (function (t, e, n) {
              return Hc(e) ? bu(e) : n || cl;
            })(0, n, l.type);
        if (Hc(n))
          n instanceof Uint8ClampedArray && (n = new Uint8Array(n.buffer));
        else {
          const t = wu(f);
          n = new t(n);
        }
        const d = (function (t, e) {
            const n = Tl(t);
            if (!n) throw "unknown internal format";
            const r = n.bytesPerElementMap[e];
            if (void 0 === r) throw "unknown internal format";
            return r;
          })(c, f),
          p = n.byteLength / d;
        if (p % 1) throw "length wrong size for format: " + Vc(t, h);
        let m;
        if (i === tl || i === el)
          if (o || s || a)
            !o || (s && a)
              ? !s || (o && a)
                ? ((m = kl(0, i, o, s, p / a)), (o = m.width), (s = m.height))
                : ((m = kl(0, i, o, a, p / s)), (o = m.width), (a = m.height))
              : ((m = kl(0, i, s, a, p / o)), (s = m.width), (a = m.height));
          else {
            const t = Math.cbrt(p);
            if (t % 1 != 0)
              throw "can't guess cube size of array of numElements: " + p;
            (o = t), (s = t), (a = t);
          }
        else (m = kl(0, i, o, s, p)), (o = m.width), (s = m.height);
        if (
          (Ol(t), t.pixelStorei(al, r.unpackAlignment || 1), Cl(t, r), i === Jc)
        ) {
          const e = (p / 6) * (d / n.BYTES_PER_ELEMENT);
          zl(0, r).forEach((r) => {
            const i = e * r.ndx,
              a = n.subarray(i, i + e);
            t.texImage2D(r.face, u, c, o, s, 0, h, f, a);
          });
        } else
          i === tl || i === el
            ? t.texImage3D(i, u, c, o, s, a, 0, h, f, n)
            : t.texImage2D(i, u, c, o, s, 0, h, f, n);
        return { width: o, height: s, depth: a, type: f };
      }
      function Nl(t, e, n) {
        (n = n || Ll), (e = e || Wc.textureOptions);
        const r = t.createTexture(),
          i = e.target || Qc;
        let o = e.width || 1,
          s = e.height || 1;
        const a = e.internalFormat || Kc;
        t.bindTexture(i, r),
          i === Jc && (t.texParameteri(i, ol, Zc), t.texParameteri(i, sl, Zc));
        let u = e.src;
        if (u)
          if (("function" == typeof u && (u = u(t, e)), "string" == typeof u))
            !(function (t, e, n, r) {
              (r = r || Ll),
                (n = n || Wc.textureOptions),
                ql(t, e, n),
                Bl(
                  (n = Object.assign({}, n)).src,
                  n.crossOrigin,
                  function (i, o) {
                    i ? r(i, e, o) : (Dl(t, e, o, n), r(null, e, o));
                  }
                );
            })(t, r, e, n);
          else if (
            Hc(u) ||
            (Array.isArray(u) &&
              ("number" == typeof u[0] || Array.isArray(u[0]) || Hc(u[0])))
          ) {
            const n = Ul(t, r, u, e);
            (o = n.width), (s = n.height);
          } else
            Array.isArray(u) && ("string" == typeof u[0] || jl(u[0]))
              ? i === Jc
                ? (function (t, e, n, r) {
                    r = r || Ll;
                    const i = n.src;
                    if (6 !== i.length)
                      throw "there must be 6 urls for a cubemap";
                    const o = n.level || 0,
                      s = n.internalFormat || n.format || Kc,
                      a = Pl(s),
                      u = n.format || a.format,
                      c = n.type || cl,
                      l = n.target || Qc;
                    if (l !== Jc) throw "target must be TEXTURE_CUBE_MAP";
                    ql(t, e, n), (n = Object.assign({}, n));
                    let h = 6;
                    const f = [],
                      d = Rl(0, n);
                    let p;
                    p = i.map(function (i, a) {
                      return Bl(
                        i,
                        n.crossOrigin,
                        ((m = d[a]),
                        function (i, a) {
                          --h,
                            i
                              ? f.push(i)
                              : a.width !== a.height
                              ? f.push(
                                  "cubemap face img is not a square: " + a.src
                                )
                              : (Cl(t, n),
                                t.bindTexture(l, e),
                                5 === h
                                  ? Rl().forEach(function (e) {
                                      t.texImage2D(e, o, s, u, c, a);
                                    })
                                  : t.texImage2D(m, o, s, u, c, a),
                                Il(n) && t.generateMipmap(l)),
                            0 === h && r(f.length ? f : void 0, e, p);
                        })
                      );
                      var m;
                    });
                  })(t, r, e, n)
                : (function (t, e, n, r) {
                    r = r || Ll;
                    const i = n.src,
                      o = n.internalFormat || n.format || Kc,
                      s = Pl(o),
                      a = n.format || s.format,
                      u = n.type || cl,
                      c = n.target || el;
                    if (c !== tl && c !== el)
                      throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
                    ql(t, e, n), (n = Object.assign({}, n));
                    let l = i.length;
                    const h = [];
                    let f;
                    const d = n.level || 0;
                    let p = n.width,
                      m = n.height;
                    const g = i.length;
                    let v = !0;
                    f = i.map(function (i, s) {
                      return Bl(
                        i,
                        n.crossOrigin,
                        ((y = s),
                        function (i, s) {
                          if ((--l, i)) h.push(i);
                          else {
                            if ((Cl(t, n), t.bindTexture(c, e), v)) {
                              (v = !1),
                                (p = n.width || s.width),
                                (m = n.height || s.height),
                                t.texImage3D(c, d, o, p, m, g, 0, a, u, null);
                              for (let e = 0; e < g; ++e)
                                t.texSubImage3D(
                                  c,
                                  d,
                                  0,
                                  0,
                                  e,
                                  p,
                                  m,
                                  1,
                                  a,
                                  u,
                                  s
                                );
                            } else {
                              let e,
                                n = s;
                              (s.width === p && s.height === m) ||
                                ((e = Yc()),
                                (n = e.canvas),
                                (e.canvas.width = p),
                                (e.canvas.height = m),
                                e.drawImage(s, 0, 0, p, m)),
                                t.texSubImage3D(
                                  c,
                                  d,
                                  0,
                                  0,
                                  y,
                                  p,
                                  m,
                                  1,
                                  a,
                                  u,
                                  n
                                ),
                                e &&
                                  n === e.canvas &&
                                  ((e.canvas.width = 0), (e.canvas.height = 0));
                            }
                            Il(n) && t.generateMipmap(c);
                          }
                          0 === l && r(h.length ? h : void 0, e, f);
                        })
                      );
                      var y;
                    });
                  })(t, r, e, n)
              : (Dl(t, r, u, e), (o = u.width), (s = u.height));
        else
          !(function (t, e, n) {
            const r = n.target || Qc;
            t.bindTexture(r, e);
            const i = n.level || 0,
              o = n.internalFormat || n.format || Kc,
              s = Pl(o),
              a = n.format || s.format,
              u = n.type || s.type;
            if ((Cl(t, n), r === Jc))
              for (let e = 0; e < 6; ++e)
                t.texImage2D(nl + e, i, o, n.width, n.height, 0, a, u, null);
            else
              r === tl || r === el
                ? t.texImage3D(
                    r,
                    i,
                    o,
                    n.width,
                    n.height,
                    n.depth,
                    0,
                    a,
                    u,
                    null
                  )
                : t.texImage2D(r, i, o, n.width, n.height, 0, a, u, null);
          })(t, r, e);
        return Il(e) && $l(t, r, e, o, s, a), Fl(t, r, e), r;
      }
      const Vl = Tu;
      function Wl(t) {
        return "undefined" != typeof document && document.getElementById
          ? document.getElementById(t)
          : null;
      }
      const Hl = 33984,
        Yl = 34962,
        Xl = 5124,
        Kl = 3553,
        Gl = 34067,
        Zl = 32879,
        Ql = 35866,
        Jl = {};
      function th(t, e) {
        return Jl[e].bindPoint;
      }
      function eh(t, e) {
        return function (n) {
          t.uniform1i(e, n);
        };
      }
      function nh(t, e) {
        return function (n) {
          t.uniform1iv(e, n);
        };
      }
      function rh(t, e) {
        return function (n) {
          t.uniform2iv(e, n);
        };
      }
      function ih(t, e) {
        return function (n) {
          t.uniform3iv(e, n);
        };
      }
      function oh(t, e) {
        return function (n) {
          t.uniform4iv(e, n);
        };
      }
      function sh(t, e, n, r) {
        const i = th(0, e);
        return Nc(t)
          ? function (e) {
              let o, s;
              ku(0, e)
                ? ((o = e), (s = null))
                : ((o = e.texture), (s = e.sampler)),
                t.uniform1i(r, n),
                t.activeTexture(Hl + n),
                t.bindTexture(i, o),
                t.bindSampler(n, s);
            }
          : function (e) {
              t.uniform1i(r, n), t.activeTexture(Hl + n), t.bindTexture(i, e);
            };
      }
      function ah(t, e, n, r, i) {
        const o = th(0, e),
          s = new Int32Array(i);
        for (let t = 0; t < i; ++t) s[t] = n + t;
        return Nc(t)
          ? function (e) {
              t.uniform1iv(r, s),
                e.forEach(function (e, r) {
                  let i, a;
                  t.activeTexture(Hl + s[r]),
                    ku(0, e)
                      ? ((i = e), (a = null))
                      : ((i = e.texture), (a = e.sampler)),
                    t.bindSampler(n, a),
                    t.bindTexture(o, i);
                });
            }
          : function (e) {
              t.uniform1iv(r, s),
                e.forEach(function (e, n) {
                  t.activeTexture(Hl + s[n]), t.bindTexture(o, e);
                });
            };
      }
      function uh(t, e) {
        return function (n) {
          if (n.value)
            switch ((t.disableVertexAttribArray(e), n.value.length)) {
              case 4:
                t.vertexAttrib4fv(e, n.value);
                break;
              case 3:
                t.vertexAttrib3fv(e, n.value);
                break;
              case 2:
                t.vertexAttrib2fv(e, n.value);
                break;
              case 1:
                t.vertexAttrib1fv(e, n.value);
                break;
              default:
                throw new Error(
                  "the length of a float constant value must be between 1 and 4!"
                );
            }
          else
            t.bindBuffer(Yl, n.buffer),
              t.enableVertexAttribArray(e),
              t.vertexAttribPointer(
                e,
                n.numComponents || n.size,
                n.type || 5126,
                n.normalize || !1,
                n.stride || 0,
                n.offset || 0
              ),
              t.vertexAttribDivisor && t.vertexAttribDivisor(e, n.divisor || 0);
        };
      }
      function ch(t, e) {
        return function (n) {
          if (n.value) {
            if ((t.disableVertexAttribArray(e), 4 !== n.value.length))
              throw new Error(
                "The length of an integer constant value must be 4!"
              );
            t.vertexAttrib4iv(e, n.value);
          } else
            t.bindBuffer(Yl, n.buffer),
              t.enableVertexAttribArray(e),
              t.vertexAttribIPointer(
                e,
                n.numComponents || n.size,
                n.type || Xl,
                n.stride || 0,
                n.offset || 0
              ),
              t.vertexAttribDivisor && t.vertexAttribDivisor(e, n.divisor || 0);
        };
      }
      function lh(t, e) {
        return function (n) {
          if (n.value) {
            if ((t.disableVertexAttribArray(e), 4 !== n.value.length))
              throw new Error(
                "The length of an unsigned integer constant value must be 4!"
              );
            t.vertexAttrib4uiv(e, n.value);
          } else
            t.bindBuffer(Yl, n.buffer),
              t.enableVertexAttribArray(e),
              t.vertexAttribIPointer(
                e,
                n.numComponents || n.size,
                n.type || 5125,
                n.stride || 0,
                n.offset || 0
              ),
              t.vertexAttribDivisor && t.vertexAttribDivisor(e, n.divisor || 0);
        };
      }
      function hh(t, e, n) {
        const r = n.size,
          i = n.count;
        return function (n) {
          t.bindBuffer(Yl, n.buffer);
          const o = n.size || n.numComponents || r,
            s = o / i,
            a = n.type || 5126,
            u = Jl[a].size * o,
            c = n.normalize || !1,
            l = n.offset || 0,
            h = u / i;
          for (let r = 0; r < i; ++r)
            t.enableVertexAttribArray(e + r),
              t.vertexAttribPointer(e + r, s, a, c, u, l + h * r),
              t.vertexAttribDivisor &&
                t.vertexAttribDivisor(e + r, n.divisor || 0);
        };
      }
      (Jl[5126] = {
        Type: Float32Array,
        size: 4,
        setter: function (t, e) {
          return function (n) {
            t.uniform1f(e, n);
          };
        },
        arraySetter: function (t, e) {
          return function (n) {
            t.uniform1fv(e, n);
          };
        },
      }),
        (Jl[35664] = {
          Type: Float32Array,
          size: 8,
          setter: function (t, e) {
            return function (n) {
              t.uniform2fv(e, n);
            };
          },
          cols: 2,
        }),
        (Jl[35665] = {
          Type: Float32Array,
          size: 12,
          setter: function (t, e) {
            return function (n) {
              t.uniform3fv(e, n);
            };
          },
          cols: 3,
        }),
        (Jl[35666] = {
          Type: Float32Array,
          size: 16,
          setter: function (t, e) {
            return function (n) {
              t.uniform4fv(e, n);
            };
          },
          cols: 4,
        }),
        (Jl[Xl] = { Type: Int32Array, size: 4, setter: eh, arraySetter: nh }),
        (Jl[35667] = { Type: Int32Array, size: 8, setter: rh, cols: 2 }),
        (Jl[35668] = { Type: Int32Array, size: 12, setter: ih, cols: 3 }),
        (Jl[35669] = { Type: Int32Array, size: 16, setter: oh, cols: 4 }),
        (Jl[5125] = {
          Type: Uint32Array,
          size: 4,
          setter: function (t, e) {
            return function (n) {
              t.uniform1ui(e, n);
            };
          },
          arraySetter: function (t, e) {
            return function (n) {
              t.uniform1uiv(e, n);
            };
          },
        }),
        (Jl[36294] = {
          Type: Uint32Array,
          size: 8,
          setter: function (t, e) {
            return function (n) {
              t.uniform2uiv(e, n);
            };
          },
          cols: 2,
        }),
        (Jl[36295] = {
          Type: Uint32Array,
          size: 12,
          setter: function (t, e) {
            return function (n) {
              t.uniform3uiv(e, n);
            };
          },
          cols: 3,
        }),
        (Jl[36296] = {
          Type: Uint32Array,
          size: 16,
          setter: function (t, e) {
            return function (n) {
              t.uniform4uiv(e, n);
            };
          },
          cols: 4,
        }),
        (Jl[35670] = {
          Type: Uint32Array,
          size: 4,
          setter: eh,
          arraySetter: nh,
        }),
        (Jl[35671] = { Type: Uint32Array, size: 8, setter: rh, cols: 2 }),
        (Jl[35672] = { Type: Uint32Array, size: 12, setter: ih, cols: 3 }),
        (Jl[35673] = { Type: Uint32Array, size: 16, setter: oh, cols: 4 }),
        (Jl[35674] = {
          Type: Float32Array,
          size: 32,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix2fv(e, !1, n);
            };
          },
          rows: 2,
          cols: 2,
        }),
        (Jl[35675] = {
          Type: Float32Array,
          size: 48,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix3fv(e, !1, n);
            };
          },
          rows: 3,
          cols: 3,
        }),
        (Jl[35676] = {
          Type: Float32Array,
          size: 64,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix4fv(e, !1, n);
            };
          },
          rows: 4,
          cols: 4,
        }),
        (Jl[35685] = {
          Type: Float32Array,
          size: 32,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix2x3fv(e, !1, n);
            };
          },
          rows: 2,
          cols: 3,
        }),
        (Jl[35686] = {
          Type: Float32Array,
          size: 32,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix2x4fv(e, !1, n);
            };
          },
          rows: 2,
          cols: 4,
        }),
        (Jl[35687] = {
          Type: Float32Array,
          size: 48,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix3x2fv(e, !1, n);
            };
          },
          rows: 3,
          cols: 2,
        }),
        (Jl[35688] = {
          Type: Float32Array,
          size: 48,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix3x4fv(e, !1, n);
            };
          },
          rows: 3,
          cols: 4,
        }),
        (Jl[35689] = {
          Type: Float32Array,
          size: 64,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix4x2fv(e, !1, n);
            };
          },
          rows: 4,
          cols: 2,
        }),
        (Jl[35690] = {
          Type: Float32Array,
          size: 64,
          setter: function (t, e) {
            return function (n) {
              t.uniformMatrix4x3fv(e, !1, n);
            };
          },
          rows: 4,
          cols: 3,
        }),
        (Jl[35678] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Kl,
        }),
        (Jl[35680] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Gl,
        }),
        (Jl[35679] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Zl,
        }),
        (Jl[35682] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Kl,
        }),
        (Jl[36289] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Ql,
        }),
        (Jl[36292] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Ql,
        }),
        (Jl[36293] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Gl,
        }),
        (Jl[36298] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Kl,
        }),
        (Jl[36299] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Zl,
        }),
        (Jl[36300] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Gl,
        }),
        (Jl[36303] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Ql,
        }),
        (Jl[36306] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Kl,
        }),
        (Jl[36307] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Zl,
        }),
        (Jl[36308] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Gl,
        }),
        (Jl[36311] = {
          Type: null,
          size: 0,
          setter: sh,
          arraySetter: ah,
          bindPoint: Ql,
        });
      const fh = {};
      (fh[5126] = { size: 4, setter: uh }),
        (fh[35664] = { size: 8, setter: uh }),
        (fh[35665] = { size: 12, setter: uh }),
        (fh[35666] = { size: 16, setter: uh }),
        (fh[Xl] = { size: 4, setter: ch }),
        (fh[35667] = { size: 8, setter: ch }),
        (fh[35668] = { size: 12, setter: ch }),
        (fh[35669] = { size: 16, setter: ch }),
        (fh[5125] = { size: 4, setter: lh }),
        (fh[36294] = { size: 8, setter: lh }),
        (fh[36295] = { size: 12, setter: lh }),
        (fh[36296] = { size: 16, setter: lh }),
        (fh[35670] = { size: 4, setter: ch }),
        (fh[35671] = { size: 8, setter: ch }),
        (fh[35672] = { size: 12, setter: ch }),
        (fh[35673] = { size: 16, setter: ch }),
        (fh[35674] = { size: 4, setter: hh, count: 2 }),
        (fh[35675] = { size: 9, setter: hh, count: 3 }),
        (fh[35676] = { size: 16, setter: hh, count: 4 });
      const dh = /ERROR:\s*\d+:(\d+)/gi,
        ph = /^[ \t]*\n/;
      function mh(t) {
        let e = 0;
        return (
          ph.test(t) && ((e = 1), (t = t.replace(ph, ""))),
          { lineOffset: e, shaderSource: t }
        );
      }
      function gh(t, e, n) {
        let r, i, o;
        if (
          ("function" == typeof e && ((n = e), (e = void 0)),
          "function" == typeof t)
        )
          (n = t), (t = void 0);
        else if (t && !Array.isArray(t)) {
          const e = t;
          (n = e.errorCallback),
            (t = e.attribLocations),
            (r = e.transformFeedbackVaryings),
            (i = e.transformFeedbackMode),
            (o = e.callback);
        }
        const s = n || Vl,
          a = [],
          u = {
            errorCallback(t, ...e) {
              a.push(t), s(t, ...e);
            },
            transformFeedbackVaryings: r,
            transformFeedbackMode: i,
            callback: o,
            errors: a,
          };
        {
          let n = {};
          Array.isArray(t)
            ? t.forEach(function (t, r) {
                n[t] = e ? e[r] : r;
              })
            : (n = t || {}),
            (u.attribLocations = n);
        }
        return u;
      }
      const vh = ["VERTEX_SHADER", "FRAGMENT_SHADER"],
        yh = (t = 0) => new Promise((e) => setTimeout(e, t));
      function _h(t, e, n) {
        const r = t.createProgram(),
          {
            attribLocations: i,
            transformFeedbackVaryings: o,
            transformFeedbackMode: s,
          } = gh(n);
        for (let n = 0; n < e.length; ++n) {
          let i = e[n];
          if ("string" == typeof i) {
            const e = Wl(i),
              o = e ? e.text : i;
            let s = t[vh[n]];
            e &&
              e.type &&
              (s =
                ((a = e.type).indexOf("frag") >= 0
                  ? 35632
                  : a.indexOf("vert") >= 0
                  ? 35633
                  : void 0) || s),
              (i = t.createShader(s)),
              t.shaderSource(i, mh(o).shaderSource),
              t.compileShader(i),
              t.attachShader(r, i);
          }
        }
        var a;
        Object.entries(i).forEach(([e, n]) => t.bindAttribLocation(r, n, e));
        {
          let e = o;
          e &&
            (e.attribs && (e = e.attribs),
            Array.isArray(e) || (e = Object.keys(e)),
            t.transformFeedbackVaryings(r, e, s || 35981));
        }
        return t.linkProgram(r), r;
      }
      function bh(t, e, n, r, i) {
        const o = gh(n, r, i),
          s = new Set(e),
          a = _h(t, e, o);
        function u(t, e) {
          const n = Eh(t, e, o.errorCallback);
          return (
            n &&
              (function (t, e, n) {
                const r = t.getAttachedShaders(e);
                for (const e of r) n.has(e) && t.deleteShader(e);
                t.deleteProgram(e);
              })(t, e, s),
            n
          );
        }
        if (!o.callback) return u(t, a) ? void 0 : a;
        wh(t, a).then(() => {
          const e = u(t, a);
          o.callback(e, e ? void 0 : a);
        });
      }
      function xh(t) {
        return function (e, n, ...r) {
          return new Promise((i, o) => {
            const s = gh(...r);
            (s.callback = (t, e) => {
              t ? o(t) : i(e);
            }),
              t(e, n, s);
          });
        };
      }
      async function wh(t, e) {
        const n = t.getExtension("KHR_parallel_shader_compile"),
          r = n
            ? (t, e) => t.getProgramParameter(e, n.COMPLETION_STATUS_KHR)
            : () => !0;
        let i = 0;
        do {
          await yh(i), (i = 1e3 / 60);
        } while (!r(t, e));
      }
      function Eh(t, e, n) {
        if (((n = n || Vl), !t.getProgramParameter(e, 35714))) {
          const r = t.getProgramInfoLog(e);
          return (
            n(`Error in program linking: ${r}`),
            `${r}\n${t
              .getAttachedShaders(e)
              .map((e) =>
                (function (t, e, n, r) {
                  if (((r = r || Vl), !t.getShaderParameter(n, 35713))) {
                    const i = t.getShaderInfoLog(n),
                      { lineOffset: o, shaderSource: s } = mh(
                        t.getShaderSource(n)
                      ),
                      a = `${(function (t, e = "", n = 0) {
                        const r = [...e.matchAll(dh)],
                          i = new Map(
                            r.map((t, n) => {
                              const i = parseInt(t[1]),
                                o = r[n + 1],
                                s = o ? o.index : e.length;
                              return [i - 1, e.substring(t.index, s)];
                            })
                          );
                        return t
                          .split("\n")
                          .map((t, e) => {
                            const r = i.get(e);
                            return `${e + 1 + n}: ${t}${
                              r ? `\n\n^^^ ${r}` : ""
                            }`;
                          })
                          .join("\n");
                      })(s, i, o)}\nError compiling ${Vc(t, e)}: ${i}`;
                    return r(a), a;
                  }
                  return "";
                })(t, t.getShaderParameter(e, t.SHADER_TYPE), e, n)
              )
              .filter((t) => t)
              .join("\n")}`
          );
        }
      }
      function Ah(t) {
        const e = t.name;
        return e.startsWith("gl_") || e.startsWith("webgl_");
      }
      xh(bh), xh(Ih);
      const Th = /(\.|\[|]|\w+)/g;
      function Ph(t, e, n, r) {
        const i = t.split(Th).filter((t) => "" !== t);
        let o = 0,
          s = "";
        for (;;) {
          const t = i[o++];
          s += t;
          const u = (a = t[0]) >= "0" && a <= "9",
            c = u ? parseInt(t) : t;
          if ((u && (s += i[o++]), o === i.length)) {
            n[c] = e;
            break;
          }
          {
            const t = i[o++],
              e = "[" === t,
              a = n[c] || (e ? [] : {});
            (n[c] = a),
              (n = a),
              (r[s] =
                r[s] ||
                (function (t) {
                  return function (e) {
                    kh(t, e);
                  };
                })(a)),
              (s += t);
          }
        }
        var a;
      }
      function Sh(t, e) {
        let n = 0;
        function r(e, r, i) {
          const o = r.name.endsWith("[0]"),
            s = r.type,
            a = Jl[s];
          if (!a) throw new Error(`unknown type: 0x${s.toString(16)}`);
          let u;
          if (a.bindPoint) {
            const e = n;
            (n += r.size),
              (u = o
                ? a.arraySetter(t, s, e, i, r.size)
                : a.setter(t, s, e, i, r.size));
          } else u = a.arraySetter && o ? a.arraySetter(t, i) : a.setter(t, i);
          return (u.location = i), u;
        }
        const i = {},
          o = {},
          s = t.getProgramParameter(e, 35718);
        for (let n = 0; n < s; ++n) {
          const s = t.getActiveUniform(e, n);
          if (Ah(s)) continue;
          let a = s.name;
          a.endsWith("[0]") && (a = a.substr(0, a.length - 3));
          const u = t.getUniformLocation(e, s.name);
          if (u) {
            const t = r(0, s, u);
            (i[a] = t), Ph(a, t, o, i);
          }
        }
        return i;
      }
      function kh(t, e) {
        for (const n in e) {
          const r = t[n];
          "function" == typeof r ? r(e[n]) : kh(t[n], e[n]);
        }
      }
      function Mh(t, ...e) {
        const n = t.uniformSetters || t,
          r = e.length;
        for (let t = 0; t < r; ++t) {
          const r = e[t];
          if (Array.isArray(r)) {
            const t = r.length;
            for (let e = 0; e < t; ++e) Mh(n, r[e]);
          } else
            for (const t in r) {
              const e = n[t];
              e && e(r[t]);
            }
        }
      }
      function Ch(t, e) {
        const n = {},
          r = t.getProgramParameter(e, 35721);
        for (let i = 0; i < r; ++i) {
          const r = t.getActiveAttrib(e, i);
          if (Ah(r)) continue;
          const o = t.getAttribLocation(e, r.name),
            s = fh[r.type],
            a = s.setter(t, o, s);
          (a.location = o), (n[r.name] = a);
        }
        return n;
      }
      function Oh(t, e, n) {
        n.vertexArrayObject
          ? t.bindVertexArray(n.vertexArrayObject)
          : ((function (t, e) {
              for (const n in e) {
                const r = t[n];
                r && r(e[n]);
              }
            })(e.attribSetters || e, n.attribs),
            n.indices && t.bindBuffer(34963, n.indices));
      }
      function Fh(t, e) {
        const n = {
          program: e,
          uniformSetters: Sh(t, e),
          attribSetters: Ch(t, e),
        };
        return (
          Nc(t) &&
            ((n.uniformBlockSpec = (function (t, e) {
              const n = t.getProgramParameter(e, 35718),
                r = [],
                i = [];
              for (let o = 0; o < n; ++o) {
                i.push(o), r.push({});
                const n = t.getActiveUniform(e, o);
                r[o].name = n.name;
              }
              [
                ["UNIFORM_TYPE", "type"],
                ["UNIFORM_SIZE", "size"],
                ["UNIFORM_BLOCK_INDEX", "blockNdx"],
                ["UNIFORM_OFFSET", "offset"],
              ].forEach(function (n) {
                const o = n[0],
                  s = n[1];
                t.getActiveUniforms(e, i, t[o]).forEach(function (t, e) {
                  r[e][s] = t;
                });
              });
              const o = {},
                s = t.getProgramParameter(e, 35382);
              for (let n = 0; n < s; ++n) {
                const r = t.getActiveUniformBlockName(e, n),
                  i = {
                    index: t.getUniformBlockIndex(e, r),
                    usedByVertexShader: t.getActiveUniformBlockParameter(
                      e,
                      n,
                      35396
                    ),
                    usedByFragmentShader: t.getActiveUniformBlockParameter(
                      e,
                      n,
                      35398
                    ),
                    size: t.getActiveUniformBlockParameter(e, n, 35392),
                    uniformIndices: t.getActiveUniformBlockParameter(
                      e,
                      n,
                      35395
                    ),
                  };
                (i.used = i.usedByVertexShader || i.usedByFragmentShader),
                  (o[r] = i);
              }
              return { blockSpecs: o, uniformData: r };
            })(t, e)),
            (n.transformFeedbackInfo = (function (t, e) {
              const n = {},
                r = t.getProgramParameter(e, 35971);
              for (let i = 0; i < r; ++i) {
                const r = t.getTransformFeedbackVarying(e, i);
                n[r.name] = { index: i, type: r.type, size: r.size };
              }
              return n;
            })(t, e))),
          n
        );
      }
      const $h = /\s|{|}|;/;
      function Ih(t, e, n, r, i) {
        const o = gh(n, r, i),
          s = [];
        if (
          ((e = e.map(function (t) {
            if (!$h.test(t)) {
              const e = Wl(t);
              if (e) t = e.text;
              else {
                const e = `no element with id: ${t}`;
                o.errorCallback(e), s.push(e);
              }
            }
            return t;
          })),
          s.length)
        )
          return (function (t, e) {
            return (
              t.errorCallback(e),
              t.callback &&
                setTimeout(() => {
                  t.callback(`${e}\n${t.errors.join("\n")}`);
                }),
              null
            );
          })(o, "");
        const a = o.callback;
        a &&
          (o.callback = (e, n) => {
            a(e, e ? void 0 : Fh(t, n));
          });
        const u = (function (t, e, n, r, i) {
          return bh(t, e, n, r, i);
        })(t, e, o);
        return u ? Fh(t, u) : null;
      }
      function Rh(t, e, n, r, i) {
        for (const [o, s] of Object.entries(e)) {
          const a = { ...i },
            u = n[o];
          Array.isArray(u) || Object.assign(a, u);
          const c = Eh(t, s, a.errorCallback);
          if (c) {
            for (const n of Object.values(e)) {
              const e = t.getAttachedShaders(n);
              t.deleteProgram(n);
              for (const n of e) r.has(n) || t.deleteShader(n);
            }
            return c;
          }
        }
      }
      function zh(t, e, n = {}) {
        const r = new Set(),
          i = Object.fromEntries(
            Object.entries(e).map(([e, i]) => {
              const o = { ...n },
                s = Array.isArray(i) ? i : i.shaders;
              return (
                Array.isArray(i) || Object.assign(o, i),
                s.forEach(r.add, r),
                [e, _h(t, s, o)]
              );
            })
          );
        if (!n.callback) return Rh(t, i, e, r, n) ? void 0 : i;
        (async function (t, e) {
          for (const n of Object.values(e)) await wh(t, n);
        })(t, i).then(() => {
          const o = Rh(t, i, e, r, n);
          n.callback(o, o ? void 0 : i);
        });
      }
      function Dh(t, e, n, r, i, o) {
        n = void 0 === n ? 4 : n;
        const s = e.indices,
          a = e.elementType,
          u = void 0 === r ? e.numElements : r;
        (i = void 0 === i ? 0 : i),
          a || s
            ? void 0 !== o
              ? t.drawElementsInstanced(
                  n,
                  u,
                  void 0 === a ? 5123 : e.elementType,
                  i,
                  o
                )
              : t.drawElements(n, u, void 0 === a ? 5123 : e.elementType, i)
            : void 0 !== o
            ? t.drawArraysInstanced(n, i, u, o)
            : t.drawArrays(n, i, u);
      }
      xh(zh),
        xh(function (t, e, n) {
          function r(t, e) {
            return Object.fromEntries(
              Object.entries(e).map(([e, n]) => [e, Fh(t, n)])
            );
          }
          const i = (n = gh(n)).callback;
          i &&
            (n.callback = (e, n) => {
              i(e, e ? void 0 : r(t, n));
            });
          const o = zh(t, e, n);
          if (!i && o) return r(t, o);
        });
      const Lh = 36096,
        jh = 33306,
        Bh = {};
      (Bh[34041] = jh),
        (Bh[6401] = 36128),
        (Bh[36168] = 36128),
        (Bh[6402] = Lh),
        (Bh[33189] = Lh),
        (Bh[33190] = Lh),
        (Bh[36012] = Lh),
        (Bh[35056] = jh),
        (Bh[36013] = jh);
      const qh = { addExtensionsToContext: !0 };
      function Uh(t) {
        Au(t, qh),
          (function (t) {
            Au(t, Cu);
          })(t),
          Ml(t);
      }
      var Nh = n(145),
        Vh = n.n(Nh),
        Wh = n(777),
        Hh = n.n(Wh);
      const Yh = new (class {
        constructor() {
          Uh({ attribPrefix: "a_" }),
            (this.dpr = Math.min(window.devicePixelRatio, 1.6)),
            (this.isReady = !1),
            (this.needsUpdate = !1);
        }
        init() {
          (this.$canvas = document.querySelector("#Background canvas")),
            (this.gl = this.$canvas.getContext("webgl2", {
              alpha: !1,
              antialias: !1,
              depth: !1,
              stencil: !1,
            }));
          const t = Nl(
            this.gl,
            {
              src: "/assets/texture/grain.webp",
              internalFormat: this.gl.RGB,
              format: this.gl.RGB,
              min: this.gl.NEAREST,
              mag: this.gl.NEAREST,
            },
            () => {
              (this.isReady = !0), (this.needsUpdate = !0);
            }
          );
          (this.programInfo = Ih(this.gl, [Vh(), Hh()])),
            (this.bufferInfo = Uc.createPlaneBufferInfo(
              this.gl,
              2,
              2,
              1,
              1,
              vu.rotationX(0.5 * Math.PI)
            )),
            (this.uniforms = {
              texture: t,
              resolution: [100, 100],
              bgColor: [172, 174, 179],
            });
        }
        resize() {
          const { width: t, height: e } =
            this.$canvas.parentNode.getBoundingClientRect();
          (this.$canvas.width = Math.floor(t * this.dpr)),
            (this.$canvas.height = Math.floor(e * this.dpr)),
            (this.$canvas.style.width = Math.floor(t) + "px"),
            (this.$canvas.style.height = Math.floor(e) + "px"),
            (this.uniforms.resolution[0] = this.$canvas.width),
            (this.uniforms.resolution[1] = this.$canvas.height),
            (this.needsUpdate = !0);
        }
        update() {
          this.isReady &&
            this.needsUpdate &&
            (this.gl.viewport(
              0,
              0,
              this.gl.canvas.width,
              this.gl.canvas.height
            ),
            this.gl.clear(this.gl.COLOR_BUFFER_BIT),
            this.gl.useProgram(this.programInfo.program),
            Oh(this.gl, this.programInfo, this.bufferInfo),
            Mh(this.programInfo, this.uniforms),
            Dh(this.gl, this.bufferInfo),
            (this.needsUpdate = !1));
        }
      })();
      class Xh {
        constructor() {}
        resize() {}
        update() {}
        kill() {}
      }
      var Kh = n(117),
        Gh = n.n(Kh),
        Zh = n(380),
        Qh = n.n(Zh);
      let Jh = null;
      class tf {
        constructor() {
          if (Jh) return Jh;
          (this.px = 0), (this.py = 0), (Jh = this), this.init();
        }
        static getInstance() {
          return Jh || (Jh = new tf()), Jh;
        }
        static get x() {
          return tf.getInstance().px;
        }
        static get y() {
          return tf.getInstance().py;
        }
        init() {
          document.addEventListener(
            "pointermove",
            this.onPointerMove.bind(this)
          );
        }
        onPointerMove(t) {
          (this.px = t.pageX), (this.py = t.pageY);
        }
      }
      class ef {
        constructor(t, e) {
          let { x: n, y: r } = t;
          (this.position = { x: n, y: r }),
            (this.velocity = { x: 0, y: 0 }),
            (this.omega = e),
            (this.direction = 0);
        }
        lerp(t, e, n) {
          return t + (e - t) * n;
        }
        update(t, e) {
          const n = Math.min(Math.exp(-this.omega * e), 1),
            r = this.lerp(t.x, this.position.x, n),
            i = this.lerp(t.y, this.position.y, n);
          (this.velocity.x = r - this.position.x),
            (this.velocity.y = i - this.position.y),
            (this.position.x = r),
            (this.position.y = i);
        }
        calcDirection(t) {
          this.direction = Math.atan2(
            this.position.y - t.y,
            this.position.x - t.x
          );
        }
        reset() {
          (this.position.x = 0),
            (this.position.y = 0),
            (this.velocity.x = 0),
            (this.velocity.y = 0),
            (this.direction = 0);
        }
        set x(t) {
          this.position.x = t;
        }
        set y(t) {
          this.position.y = t;
        }
        get x() {
          return this.position.x;
        }
        get y() {
          return this.position.y;
        }
      }
      class nf {
        constructor() {
          Uh({ attribPrefix: "a_" }),
            (this.hasInitialized = !1),
            (this.dpr = Math.min(window.devicePixelRatio, 2)),
            Wa.isTouch ||
              (tf.getInstance(), (this.tween = new ef({ x: 0, y: 0 }, 15))),
            (this.$svg = document.querySelector("#Top .top_title svg")),
            (this.$offCanvas = document.createElement("canvas")),
            (this.ctx2d = this.$offCanvas.getContext("2d", { alpha: !0 })),
            (this.$canvas = document.querySelector("#Top .top_title canvas")),
            (this.gl = this.$canvas.getContext("webgl2", {
              alpha: !0,
              antialias: !1,
              depth: !1,
              stencil: !1,
            })),
            (this.texture = Nl(this.gl, { src: this.$offCanvas })),
            (this.programInfo = Ih(this.gl, [Gh(), Qh()])),
            (this.bufferInfo = Uc.createPlaneBufferInfo(
              this.gl,
              2,
              2,
              1,
              1,
              vu.rotationX(0.5 * Math.PI)
            )),
            (this.uniforms = {
              texture: this.texture,
              time: 0,
              resolution: [100, 100],
              mouse: [0, 0],
              color: 0,
            }),
            this.init();
        }
        async init() {
          const t = [
            this.loadImage("/assets/texture/title.webp"),
            this.loadImage("/assets/texture/desc.webp"),
          ];
          (this.images = await Promise.all(t)),
            (this.hasInitialized = !0),
            this.resize();
        }
        loadImage(t) {
          return new Promise((e) => {
            const n = document.createElement("img");
            (n.src = ""),
              (n.onload = () => {
                e(n);
              }),
              (n.src = t);
          });
        }
        changeColor(t) {
          Nr.to(this.uniforms, { color: t, duration: 1.2 });
        }
        resize() {
          if (!this.hasInitialized) return;
          const { width: t, height: e } =
            this.$canvas.parentNode.getBoundingClientRect();
          (this.$canvas.width = Math.floor(t * this.dpr)),
            (this.$canvas.height = Math.floor(e * this.dpr)),
            (this.$canvas.style.width = Math.floor(t) + "px"),
            (this.$canvas.style.height = Math.floor(e) + "px"),
            (this.uniforms.resolution[0] = this.$canvas.width),
            (this.uniforms.resolution[1] = this.$canvas.height),
            (this.$offCanvas.width = Math.floor(t * this.dpr)),
            (this.$offCanvas.height = Math.floor(e * this.dpr)),
            this.renderOffScreen();
        }
        renderOffScreen() {
          this.ctx2d.clearRect(
            0,
            0,
            this.$offCanvas.width,
            this.$offCanvas.height
          ),
            this.ctx2d.drawImage(
              this.images[0],
              0,
              0,
              this.$offCanvas.width,
              this.$offCanvas.height
            );
          const t = 136 * this.dpr,
            e = 39 * this.dpr,
            n =
              0.5 * this.$offCanvas.height +
              (this.$offCanvas.height / 4.3946188341) * 0.5 +
              15 * this.dpr;
          this.ctx2d.drawImage(
            this.images[1],
            this.$offCanvas.width - t,
            n,
            t,
            e
          ),
            Dl(this.gl, this.texture, this.$offCanvas);
        }
        update(t) {
          let { time: e, deltaTime: n } = t;
          if (this.hasInitialized) {
            if (
              (this.gl.viewport(
                0,
                0,
                this.gl.canvas.width,
                this.gl.canvas.height
              ),
              this.gl.clear(this.gl.COLOR_BUFFER_BIT),
              (this.uniforms.time = e),
              !Wa.isTouch)
            ) {
              const {
                  left: t,
                  top: e,
                  width: r,
                  height: i,
                } = this.$canvas.parentNode.getBoundingClientRect(),
                o = Ha.constrain(tf.x - t, 0, r),
                s = Ha.constrain(i - tf.y + e, 0, i);
              this.tween.update({ x: o, y: s }, n),
                (this.uniforms.mouse[0] = this.tween.x / r),
                (this.uniforms.mouse[1] = this.tween.y / i);
            }
            this.gl.useProgram(this.programInfo.program),
              Oh(this.gl, this.programInfo, this.bufferInfo),
              Mh(this.programInfo, this.uniforms),
              Dh(this.gl, this.bufferInfo);
          }
        }
        kill() {
          this.gl.getExtension("WEBGL_lose_context").loseContext(),
            delete this.$offCanvas,
            delete this.$canvas,
            delete this.ctx2d,
            delete this.gl;
        }
      }
      class rf extends Xh {
        constructor() {
          super(),
            (this.$root = document.getElementById("Top")),
            (this.title = new nf()),
            (this.dpr = Math.min(window.devicePixelRatio, 2)),
            (this.$canvas = this.$root.querySelector(".top_feature canvas")),
            (this.ctx = this.$canvas.getContext("2d", {
              storage: "discardable",
            })),
            (this.srcList = [
              ...this.$root.querySelectorAll(".top_feature > div"),
            ]),
            (this.images = []),
            (this.themes = []),
            (this.numImages = 0),
            (this.imgaeIndex = 0),
            (this.lastChangeTime = 0),
            (this.interval = 5),
            (this.tween = { opacity: 0, scale1: 1.02, scale2: 1.02 }),
            (this.$navi = this.$root.querySelector(".top_navi")),
            (this.$column1 = this.$root.querySelector(".top_navi .column1")),
            (this.$svg = this.$root.querySelector(".top_navi svg")),
            (this.$line = this.$root.querySelector(".top_navi svg line")),
            this.srcList.forEach((t) => {
              const e = t.dataset.src,
                n = document.createElement("img");
              (n.src = ""),
                (n.onload = () => {
                  this.images.push(n),
                    this.themes.push(t.dataset.textColor),
                    this.numImages++,
                    1 === this.numImages &&
                      (this.changeColor(this.themes[0]),
                      (this.lastChangeTime = 0.001 * performance.now()));
                }),
                (n.src = e);
            }),
            this.resize();
        }
        resize() {
          this.title.resize(), this.resizeCanvas(), this.resizeNavi();
        }
        resizeCanvas() {
          const { width: t, height: e } =
            this.$canvas.parentNode.getBoundingClientRect();
          (this.$canvas.width = this.dpr * t),
            (this.$canvas.height = this.dpr * e),
            (this.$canvas.style.width = t + "px"),
            (this.$canvas.style.height = e + "px");
        }
        resizeNavi() {
          const { width: t, height: e } = this.$column1.getBoundingClientRect();
          this.$svg.setAttribute(
            "viewBox",
            `0 0 ${Math.floor(t)} ${Math.floor(e)}`
          ),
            this.$line.setAttribute("y1", e),
            this.$line.setAttribute("x2", t - 1);
        }
        getDisplaySize(t) {
          const e = this.$canvas.width / t.naturalWidth,
            n = this.$canvas.height / t.naturalHeight,
            r = Math.max(e, n);
          return {
            width: Math.ceil(t.naturalWidth * r),
            height: Math.ceil(t.naturalHeight * r),
          };
        }
        change() {
          Nr.to(this.tween, {
            opacity: 1,
            duration: 1.6,
            onComplete: () => {
              (this.tween.opacity = 0),
                (this.tween.scale1 = 1.02),
                (this.imgaeIndex = (this.imgaeIndex + 1) % this.numImages);
            },
          }),
            Nr.fromTo(
              this.tween,
              { scale2: 1 },
              { scale2: 1.02, duration: 1.6, ease: "none" }
            );
          const t = (this.imgaeIndex + 1) % this.numImages;
          this.changeColor(this.themes[t]);
        }
        changeColor(t) {
          "dark" === t
            ? (this.title.changeColor(0),
              Nr.to(this.$root, {
                "--c-text-top": "hsl(0, 0%, 0%)",
                duration: 1.2,
              }))
            : (this.title.changeColor(0.9),
              Nr.to(this.$root, {
                "--c-text-top": "hsl(0, 0%, 90%)",
                duration: 1.2,
              }));
        }
        update(t) {
          if ((this.title.update(t), 0 === this.numImages)) return;
          t.time - this.lastChangeTime > this.interval &&
            ((this.lastChangeTime = t.time), this.change()),
            (this.tween.scale1 += 0.02 * t.deltaTime),
            this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height),
            this.ctx.save(),
            this.ctx.translate(this.$canvas.width / 2, this.$canvas.height / 2),
            this.ctx.scale(this.tween.scale1, this.tween.scale1),
            (this.ctx.globalAlpha = 1);
          const e = this.getDisplaySize(this.images[this.imgaeIndex]);
          if (
            (this.ctx.drawImage(
              this.images[this.imgaeIndex],
              -e.width / 2,
              -e.height / 2,
              e.width,
              e.height
            ),
            this.ctx.restore(),
            0 === this.tween.opacity)
          )
            return;
          this.ctx.save(),
            this.ctx.translate(this.$canvas.width / 2, this.$canvas.height / 2),
            this.ctx.scale(this.tween.scale2, this.tween.scale2),
            (this.ctx.globalAlpha = this.tween.opacity);
          const n = this.images[(this.imgaeIndex + 1) % this.numImages],
            r = this.getDisplaySize(n);
          this.ctx.drawImage(n, -r.width / 2, -r.height / 2, r.width, r.height),
            this.ctx.restore();
        }
        kill() {
          this.title.kill(), delete this.ctx, delete this.$canvas;
        }
      }
      class of {
        constructor(t) {
          (this.functions = []),
            (this.numFunctions = 0),
            (this.mq = window.matchMedia(t)),
            this.mq.addEventListener(
              "change",
              this.onMediaQueryChange.bind(this)
            );
        }
        add(t) {
          this.functions.push(t), (this.numFunctions = this.functions.length);
        }
        remove(t) {
          for (let e = 0; e < this.numFunctions; e++)
            if (this.functions[e] === t) {
              this.functions.splice(e, 1);
              break;
            }
          this.numFunctions = this.functions.length;
        }
        reset() {
          for (let t = 0; t < this.numFunctions; t++) delete this.functions[t];
          (this.functions = []),
            (this.functions.length = 0),
            (this.numFunctions = 0);
        }
        onMediaQueryChange() {
          for (let t = 0; t < this.numFunctions; t++)
            (0, this.functions[t])(this.mq.matches);
        }
        get matches() {
          return this.mq.matches;
        }
      }
      class sf extends Xh {
        constructor(t) {
          super(),
            (this.mq800 = new of("(min-width: 800px)")),
            (this.$items = t.querySelectorAll(".projects_item")),
            (this.$title = t.querySelector(".projects_info .title")),
            (this.$year = t.querySelector(".projects_info .year")),
            (this.$category = t.querySelector(".projects_info .category")),
            (this.numItems = this.$items.length),
            (this.index = -1),
            (this.$hLine = t.querySelector(".projects_hLine")),
            (this.hLineTween = new Ya(0, 30)),
            (this.observer = new IntersectionObserver(
              this.onIntersect.bind(this),
              { root: null, rootMargin: "200px 0px 200px 0px", threshold: 0 }
            )),
            this.$items.forEach((t) => {
              (t.userData = {}),
                (t.userData.isVisible = !1),
                this.observer.observe(t);
            }),
            this.mq800.matches &&
              !Wa.isTouch &&
              t
                .querySelector(".projects")
                .style.setProperty("--topPadding", 0.15);
        }
        onIntersect(t) {
          t.forEach((t) => {
            t.isIntersecting
              ? (t.target.userData.isVisible = !0)
              : (t.target.userData.isVisible = !1);
          });
        }
        focusOnItem(t) {
          if (this.index == t) return;
          -1 !== this.index &&
            this.$items[this.index].classList.remove("is-selected"),
            (this.index = t),
            this.$items[this.index].classList.add("is-selected");
          const {
            title: e,
            category: n,
            year: r,
          } = this.$items[this.index].dataset;
          (this.$title.textContent = e),
            (this.$category.textContent = n),
            (this.$year.textContent = r);
        }
        update(t) {
          let e = 0;
          this.mq800.matches && !Wa.isTouch
            ? ((e = Ha.constrain(tf.y / window.innerHeight, 0.15, 0.85)),
              this.hLineTween.update(e, t.deltaTime),
              document.documentElement.style.setProperty(
                "--hLine",
                this.hLineTween.x
              ))
            : ((e = 0.5),
              document.documentElement.style.setProperty("--hLine", e));
          const n = e * window.innerHeight;
          for (let t = 0; t < this.numItems; t++) {
            const e = this.$items[t];
            if (!e.userData.isVisible) continue;
            const { top: r, height: i } = e.getBoundingClientRect();
            n >= r && n <= r + i && this.focusOnItem(t);
          }
        }
      }
      class af extends Ka {
        constructor(t) {
          super("horizontal", t);
        }
        resize() {
          if (!this.$target) return;
          const { width: t } = this.$target.getBoundingClientRect(),
            { width: e } = this.$target.parentNode.getBoundingClientRect();
          this.max = Math.floor(t - e);
        }
        update(t) {
          super.update(t),
            (this.$target.style.transform = `translate3d(${-this
              .scroll}px, 0, 0)`);
        }
      }
      class uf extends Xh {
        constructor(t) {
          super(),
            (this.$page = t),
            (this.desktopScroll = null),
            (this.mobileScroll1 = null),
            (this.mobileScroll2 = null),
            (this.mq800 = new of("(min-width: 800px)")),
            this.mq800.add(this.setScrollTarget.bind(this)),
            this.setScrollTarget(this.mq800.matches),
            (this.onZoomChangeFunc = this.onZoomChange.bind(this)),
            window.addEventListener(
              "project-zoomchange",
              this.onZoomChangeFunc
            );
        }
        onZoomChange() {
          this.desktopScroll && this.desktopScroll.scrollTop({ duration: 0.6 }),
            this.mobileScroll1 &&
              (this.mobileScroll1.scrollTop({ duration: 0.6 }),
              this.mobileScroll2.scrollTop({ duration: 0.6 }));
        }
        setScrollTarget(t) {
          this.desktopScroll &&
            (this.desktopScroll.removeEvents(), (this.desktopScroll = null)),
            this.mobileScroll1 &&
              (this.mobileScroll2.$target.removeAttribute("style"),
              this.mobileScroll1.removeEvents(),
              this.mobileScroll2.removeEvents(),
              (this.mobileScroll1 = null),
              (this.mobileScroll2 = null)),
            t
              ? ((this.desktopScroll = new af({ useTouch: !0 })),
                this.desktopScroll.setTarget(
                  this.$page.querySelector(".project_imagesWrap")
                ))
              : ((this.mobileScroll1 = new af({ strictArea: !0 })),
                this.mobileScroll1.setTarget(
                  this.$page.querySelector(".project_imagesWrap")
                ),
                (this.mobileScroll2 = new Ga({ strictArea: !0 })),
                this.mobileScroll2.setTarget(
                  this.$page.querySelector(".project_content")
                ));
        }
        update(t) {
          this.mq800.matches ? this.updateDesktop(t) : this.updateMobile(t);
        }
        updateDesktop(t) {
          this.desktopScroll.update(t.deltaTime);
        }
        updateMobile(t) {
          this.mobileScroll1.update(t.deltaTime),
            this.mobileScroll2.update(t.deltaTime);
        }
        kill() {
          this.desktopScroll.removeEvents(),
            (this.desktopScroll = null),
            this.mq800.reset(),
            window.removeEventListener(
              "project-zoomchange",
              this.onZoomChangeFunc
            );
        }
      }
      class cf extends Xh {
        constructor(t) {
          super(),
            (this.mq800 = new of("(min-width: 800px)")),
            (this.$items = t.querySelectorAll(".projects_item")),
            (this.$year = t.querySelector(".projects_info .year")),
            (this.$category = t.querySelector(".projects_info .category")),
            (this.numItems = this.$items.length),
            (this.index = -1),
            (this.$hLine = t.querySelector(".projects_hLine")),
            (this.hLineTween = new Ya(0, 30)),
            (this.observer = new IntersectionObserver(
              this.onIntersect.bind(this),
              { root: null, rootMargin: "200px 0px 200px 0px", threshold: 0 }
            )),
            this.$items.forEach((t) => {
              (t.userData = {}),
                (t.userData.isVisible = !1),
                this.observer.observe(t);
            }),
            this.mq800.matches &&
              !Wa.isTouch &&
              t
                .querySelector(".projects")
                .style.setProperty("--topPadding", 0.15),
            (this.$gallery = document.getElementById("Gallery")),
            (this.$galleryImg = this.$gallery.querySelector(
              ".gallery .current img"
            )),
            (this.imgPosTween = new Xa({ x: 1, y: 0 }, 15));
        }
        onIntersect(t) {
          t.forEach((t) => {
            t.isIntersecting
              ? (t.target.userData.isVisible = !0)
              : (t.target.userData.isVisible = !1);
          });
        }
        focusOnItem(t) {
          if (this.index == t) return;
          -1 !== this.index &&
            this.$items[this.index].classList.remove("is-selected"),
            (this.index = t),
            this.$items[this.index].classList.add("is-selected");
          const { category: e, year: n } = this.$items[this.index].dataset;
          (this.$category.textContent = e), (this.$year.textContent = n);
        }
        update(t) {
          let e = 0;
          this.mq800.matches && !Wa.isTouch
            ? ((e = Ha.constrain(tf.y / window.innerHeight, 0.15, 0.85)),
              this.hLineTween.update(e, t.deltaTime),
              document.documentElement.style.setProperty(
                "--hLine",
                this.hLineTween.x
              ))
            : ((e = 0.5),
              document.documentElement.style.setProperty("--hLine", e));
          const n = e * window.innerHeight;
          for (let t = 0; t < this.numItems; t++) {
            const e = this.$items[t];
            if (!e.userData.isVisible) continue;
            const { top: r, height: i } = e.getBoundingClientRect();
            n >= r && n <= r + i && this.focusOnItem(t);
          }
          if ("contain" === this.$gallery.dataset.displayMode)
            return void (this.$galleryImg.style.objectPosition = "center");
          const r = Ha.constrain(
              (tf.x - 100) / (window.innerWidth - 200),
              0,
              1
            ),
            i = Ha.constrain((tf.y - 100) / (window.innerHeight - 200), 0, 1);
          this.imgPosTween.update({ x: r, y: i }, t.deltaTime),
            (this.$galleryImg.style.objectPosition = `${
              100 * this.imgPosTween.x
            }% ${100 * this.imgPosTween.y}%`);
        }
      }
      class lf extends Xh {
        constructor(t) {
          super(),
            document.documentElement.style.setProperty("--hLine", 0.33333);
        }
      }
      const hf = new (class {
        constructor() {
          this.pageProcess = null;
        }
        async init() {
          (window.Alpine = Na),
            Na.store("ui", Za),
            Na.data("outline", Qa),
            Na.data("gallery", Ja),
            Na.data("projectDetail", eu),
            Na.data("copyText", nu),
            Na.start(),
            tu.createEvents(),
            Yh.init(),
            (this.resizeMng = new yi()),
            this.resizeMng.setSizeFunc(() => ({
              width: window.innerWidth,
              height: window.innerHeight,
            })),
            this.resize();
          const t = document.querySelector("#PageWrapper .page");
          this.enter(t),
            vi.add(this.update.bind(this)),
            mi.in(),
            await pi(1),
            mi.out();
        }
        beforeEnter() {
          this.pageProcess &&
            (this.pageProcess.kill(), (this.pageProcess = null));
        }
        enter(t) {
          const e = t.dataset.pageNamespace;
          (document.body.dataset.page = e), Na.store("ui").changePage(e);
          const n = t.querySelector('[data-scroll="area"]');
          switch (
            (n
              ? Na.store("ui").setScrollArea(n)
              : Na.store("ui").setScrollArea("none"),
            e)
          ) {
            case "home":
              this.pageProcess = new rf(t);
              break;
            case "projects":
              this.pageProcess = new sf(t);
              break;
            case "project-detail":
              this.pageProcess = new uf(t);
              break;
            case "artworks":
              this.pageProcess = new cf(t);
              break;
            case "info":
              this.pageProcess = new lf(t);
              break;
            default:
              this.pageProcess = new Xh(t);
          }
        }
        resize() {
          const t = document.documentElement,
            e = 0.01 * t.clientWidth,
            n = 0.01 * t.clientHeight;
          document.documentElement.style.setProperty("--vw", `${e}px`),
            document.documentElement.style.setProperty("--vh", `${n}px`),
            document.documentElement.style.setProperty(
              "--vmax",
              `${Math.max(e, n)}px`
            ),
            document.documentElement.style.setProperty(
              "--vmin",
              `${Math.min(e, n)}px`
            );
          const r = t.clientWidth >= 800 ? 10 : 5,
            i = (t.clientWidth - 2 * r) / 12;
          document.documentElement.style.setProperty("--column", `${i}px`),
            document.documentElement.style.setProperty("--margin", `${r}px`),
            Yh.resize(),
            this.pageProcess && this.pageProcess.resize();
        }
        update(t) {
          this.resizeMng.check() && this.resize(),
            Yh.update(),
            Na.store("ui").update(t),
            this.pageProcess && this.pageProcess.update(t);
        }
      })();
      hi().use(di()),
        hi().hooks.before((t) => {
          Alpine.store("ui").isMenuOpen && Alpine.store("ui").closeMenu(),
            mi.in();
        }),
        hi().hooks.beforeEnter((t) => {
          hf.beforeEnter();
        }),
        hi().hooks.enter((t) => {
          let { next: e } = t;
          hf.enter(e.container), mi.out();
        }),
        hi().init({
          schema: { prefix: "data-page" },
          transitions: [
            {
              sync: !1,
              name: "default",
              async leave(t) {
                let { current: e } = t;
                return (
                  await pi(0.8),
                  new Promise((t) => {
                    t();
                  })
                );
              },
              async enter(t) {
                let { next: e } = t;
                return new Promise((t) => {
                  t();
                });
              },
            },
          ],
        }),
        document.addEventListener("DOMContentLoaded", () => {
          !(function () {
            const t = document.querySelector('meta[name="viewport"]');
            function e() {
              const e =
                window.outerWidth > 375
                  ? "width=device-width,initial-scale=1"
                  : "width=375";
              t.getAttribute("content") !== e && t.setAttribute("content", e);
            }
            window.addEventListener("resize", e), e();
          })(),
            hf.init();
        });
    })();
})();
