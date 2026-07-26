var hf = { exports: {} }, Tn = {};
var _r;
function x1() {
  if (_r) return Tn;
  _r = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.fragment");
  function y(d, O, H) {
    var Z = null;
    if (H !== void 0 && (Z = "" + H), O.key !== void 0 && (Z = "" + O.key), "key" in O) {
      H = {};
      for (var w in O)
        w !== "key" && (H[w] = O[w]);
    } else H = O;
    return O = H.ref, {
      $$typeof: s,
      type: d,
      key: Z,
      ref: O !== void 0 ? O : null,
      props: H
    };
  }
  return Tn.Fragment = m, Tn.jsx = y, Tn.jsxs = y, Tn;
}
var Tr;
function p1() {
  return Tr || (Tr = 1, hf.exports = x1()), hf.exports;
}
var f = p1(), vf = { exports: {} }, Q = {};
var Ar;
function z1() {
  if (Ar) return Q;
  Ar = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), H = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), nl = Symbol.iterator;
  function Yl(h) {
    return h === null || typeof h != "object" ? null : (h = nl && h[nl] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var Ml = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ol = Object.assign, pt = {};
  function Zl(h, _, D) {
    this.props = h, this.context = _, this.refs = pt, this.updater = D || Ml;
  }
  Zl.prototype.isReactComponent = {}, Zl.prototype.setState = function(h, _) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, _, "setState");
  }, Zl.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function zt() {
  }
  zt.prototype = Zl.prototype;
  function pl(h, _, D) {
    this.props = h, this.context = _, this.refs = pt, this.updater = D || Ml;
  }
  var Vl = pl.prototype = new zt();
  Vl.constructor = pl, Ol(Vl, Zl.prototype), Vl.isPureReactComponent = !0;
  var st = Array.isArray;
  function P() {
  }
  var X = { H: null, A: null, T: null, S: null }, fl = Object.prototype.hasOwnProperty;
  function _t(h, _, D) {
    var C = D.ref;
    return {
      $$typeof: s,
      type: h,
      key: _,
      ref: C !== void 0 ? C : null,
      props: D
    };
  }
  function we(h, _) {
    return _t(h.type, _, h.props);
  }
  function Tt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === s;
  }
  function Ll(h) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(D) {
      return _[D];
    });
  }
  var je = /\/+/g;
  function Rt(h, _) {
    return typeof h == "object" && h !== null && h.key != null ? Ll("" + h.key) : _.toString(36);
  }
  function St(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(P, P) : (h.status = "pending", h.then(
          function(_) {
            h.status === "pending" && (h.status = "fulfilled", h.value = _);
          },
          function(_) {
            h.status === "pending" && (h.status = "rejected", h.reason = _);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function S(h, _, D, C, V) {
    var $ = typeof h;
    ($ === "undefined" || $ === "boolean") && (h = null);
    var ul = !1;
    if (h === null) ul = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          ul = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case s:
            case m:
              ul = !0;
              break;
            case J:
              return ul = h._init, S(
                ul(h._payload),
                _,
                D,
                C,
                V
              );
          }
      }
    if (ul)
      return V = V(h), ul = C === "" ? "." + Rt(h, 0) : C, st(V) ? (D = "", ul != null && (D = ul.replace(je, "$&/") + "/"), S(V, _, D, "", function(Ua) {
        return Ua;
      })) : V != null && (Tt(V) && (V = we(
        V,
        D + (V.key == null || h && h.key === V.key ? "" : ("" + V.key).replace(
          je,
          "$&/"
        ) + "/") + ul
      )), _.push(V)), 1;
    ul = 0;
    var Ql = C === "" ? "." : C + ":";
    if (st(h))
      for (var zl = 0; zl < h.length; zl++)
        C = h[zl], $ = Ql + Rt(C, zl), ul += S(
          C,
          _,
          D,
          $,
          V
        );
    else if (zl = Yl(h), typeof zl == "function")
      for (h = zl.call(h), zl = 0; !(C = h.next()).done; )
        C = C.value, $ = Ql + Rt(C, zl++), ul += S(
          C,
          _,
          D,
          $,
          V
        );
    else if ($ === "object") {
      if (typeof h.then == "function")
        return S(
          St(h),
          _,
          D,
          C,
          V
        );
      throw _ = String(h), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ul;
  }
  function M(h, _, D) {
    if (h == null) return h;
    var C = [], V = 0;
    return S(h, C, "", "", function($) {
      return _.call(D, $, V++);
    }), C;
  }
  function G(h) {
    if (h._status === -1) {
      var _ = h._result;
      _ = _(), _.then(
        function(D) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = D);
        },
        function(D) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = D);
        }
      ), h._status === -1 && (h._status = 0, h._result = _);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var sl = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, ml = {
    map: M,
    forEach: function(h, _, D) {
      M(
        h,
        function() {
          _.apply(this, arguments);
        },
        D
      );
    },
    count: function(h) {
      var _ = 0;
      return M(h, function() {
        _++;
      }), _;
    },
    toArray: function(h) {
      return M(h, function(_) {
        return _;
      }) || [];
    },
    only: function(h) {
      if (!Tt(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return Q.Activity = R, Q.Children = ml, Q.Component = Zl, Q.Fragment = y, Q.Profiler = O, Q.PureComponent = pl, Q.StrictMode = d, Q.Suspense = A, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return X.H.useMemoCache(h);
    }
  }, Q.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, Q.cacheSignal = function() {
    return null;
  }, Q.cloneElement = function(h, _, D) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var C = Ol({}, h.props), V = h.key;
    if (_ != null)
      for ($ in _.key !== void 0 && (V = "" + _.key), _)
        !fl.call(_, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && _.ref === void 0 || (C[$] = _[$]);
    var $ = arguments.length - 2;
    if ($ === 1) C.children = D;
    else if (1 < $) {
      for (var ul = Array($), Ql = 0; Ql < $; Ql++)
        ul[Ql] = arguments[Ql + 2];
      C.children = ul;
    }
    return _t(h.type, V, C);
  }, Q.createContext = function(h) {
    return h = {
      $$typeof: Z,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: H,
      _context: h
    }, h;
  }, Q.createElement = function(h, _, D) {
    var C, V = {}, $ = null;
    if (_ != null)
      for (C in _.key !== void 0 && ($ = "" + _.key), _)
        fl.call(_, C) && C !== "key" && C !== "__self" && C !== "__source" && (V[C] = _[C]);
    var ul = arguments.length - 2;
    if (ul === 1) V.children = D;
    else if (1 < ul) {
      for (var Ql = Array(ul), zl = 0; zl < ul; zl++)
        Ql[zl] = arguments[zl + 2];
      V.children = Ql;
    }
    if (h && h.defaultProps)
      for (C in ul = h.defaultProps, ul)
        V[C] === void 0 && (V[C] = ul[C]);
    return _t(h, $, V);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(h) {
    return { $$typeof: w, render: h };
  }, Q.isValidElement = Tt, Q.lazy = function(h) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: h },
      _init: G
    };
  }, Q.memo = function(h, _) {
    return {
      $$typeof: E,
      type: h,
      compare: _ === void 0 ? null : _
    };
  }, Q.startTransition = function(h) {
    var _ = X.T, D = {};
    X.T = D;
    try {
      var C = h(), V = X.S;
      V !== null && V(D, C), typeof C == "object" && C !== null && typeof C.then == "function" && C.then(P, sl);
    } catch ($) {
      sl($);
    } finally {
      _ !== null && D.types !== null && (_.types = D.types), X.T = _;
    }
  }, Q.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, Q.use = function(h) {
    return X.H.use(h);
  }, Q.useActionState = function(h, _, D) {
    return X.H.useActionState(h, _, D);
  }, Q.useCallback = function(h, _) {
    return X.H.useCallback(h, _);
  }, Q.useContext = function(h) {
    return X.H.useContext(h);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(h, _) {
    return X.H.useDeferredValue(h, _);
  }, Q.useEffect = function(h, _) {
    return X.H.useEffect(h, _);
  }, Q.useEffectEvent = function(h) {
    return X.H.useEffectEvent(h);
  }, Q.useId = function() {
    return X.H.useId();
  }, Q.useImperativeHandle = function(h, _, D) {
    return X.H.useImperativeHandle(h, _, D);
  }, Q.useInsertionEffect = function(h, _) {
    return X.H.useInsertionEffect(h, _);
  }, Q.useLayoutEffect = function(h, _) {
    return X.H.useLayoutEffect(h, _);
  }, Q.useMemo = function(h, _) {
    return X.H.useMemo(h, _);
  }, Q.useOptimistic = function(h, _) {
    return X.H.useOptimistic(h, _);
  }, Q.useReducer = function(h, _, D) {
    return X.H.useReducer(h, _, D);
  }, Q.useRef = function(h) {
    return X.H.useRef(h);
  }, Q.useState = function(h) {
    return X.H.useState(h);
  }, Q.useSyncExternalStore = function(h, _, D) {
    return X.H.useSyncExternalStore(
      h,
      _,
      D
    );
  }, Q.useTransition = function() {
    return X.H.useTransition();
  }, Q.version = "19.2.8", Q;
}
var Mr;
function pf() {
  return Mr || (Mr = 1, vf.exports = z1()), vf.exports;
}
var T = pf(), yf = { exports: {} }, An = {}, gf = { exports: {} }, bf = {};
var Or;
function S1() {
  return Or || (Or = 1, (function(s) {
    function m(S, M) {
      var G = S.length;
      S.push(M);
      l: for (; 0 < G; ) {
        var sl = G - 1 >>> 1, ml = S[sl];
        if (0 < O(ml, M))
          S[sl] = M, S[G] = ml, G = sl;
        else break l;
      }
    }
    function y(S) {
      return S.length === 0 ? null : S[0];
    }
    function d(S) {
      if (S.length === 0) return null;
      var M = S[0], G = S.pop();
      if (G !== M) {
        S[0] = G;
        l: for (var sl = 0, ml = S.length, h = ml >>> 1; sl < h; ) {
          var _ = 2 * (sl + 1) - 1, D = S[_], C = _ + 1, V = S[C];
          if (0 > O(D, G))
            C < ml && 0 > O(V, D) ? (S[sl] = V, S[C] = G, sl = C) : (S[sl] = D, S[_] = G, sl = _);
          else if (C < ml && 0 > O(V, G))
            S[sl] = V, S[C] = G, sl = C;
          else break l;
        }
      }
      return M;
    }
    function O(S, M) {
      var G = S.sortIndex - M.sortIndex;
      return G !== 0 ? G : S.id - M.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      s.unstable_now = function() {
        return H.now();
      };
    } else {
      var Z = Date, w = Z.now();
      s.unstable_now = function() {
        return Z.now() - w;
      };
    }
    var A = [], E = [], J = 1, R = null, nl = 3, Yl = !1, Ml = !1, Ol = !1, pt = !1, Zl = typeof setTimeout == "function" ? setTimeout : null, zt = typeof clearTimeout == "function" ? clearTimeout : null, pl = typeof setImmediate < "u" ? setImmediate : null;
    function Vl(S) {
      for (var M = y(E); M !== null; ) {
        if (M.callback === null) d(E);
        else if (M.startTime <= S)
          d(E), M.sortIndex = M.expirationTime, m(A, M);
        else break;
        M = y(E);
      }
    }
    function st(S) {
      if (Ol = !1, Vl(S), !Ml)
        if (y(A) !== null)
          Ml = !0, P || (P = !0, Ll());
        else {
          var M = y(E);
          M !== null && St(st, M.startTime - S);
        }
    }
    var P = !1, X = -1, fl = 5, _t = -1;
    function we() {
      return pt ? !0 : !(s.unstable_now() - _t < fl);
    }
    function Tt() {
      if (pt = !1, P) {
        var S = s.unstable_now();
        _t = S;
        var M = !0;
        try {
          l: {
            Ml = !1, Ol && (Ol = !1, zt(X), X = -1), Yl = !0;
            var G = nl;
            try {
              t: {
                for (Vl(S), R = y(A); R !== null && !(R.expirationTime > S && we()); ) {
                  var sl = R.callback;
                  if (typeof sl == "function") {
                    R.callback = null, nl = R.priorityLevel;
                    var ml = sl(
                      R.expirationTime <= S
                    );
                    if (S = s.unstable_now(), typeof ml == "function") {
                      R.callback = ml, Vl(S), M = !0;
                      break t;
                    }
                    R === y(A) && d(A), Vl(S);
                  } else d(A);
                  R = y(A);
                }
                if (R !== null) M = !0;
                else {
                  var h = y(E);
                  h !== null && St(
                    st,
                    h.startTime - S
                  ), M = !1;
                }
              }
              break l;
            } finally {
              R = null, nl = G, Yl = !1;
            }
            M = void 0;
          }
        } finally {
          M ? Ll() : P = !1;
        }
      }
    }
    var Ll;
    if (typeof pl == "function")
      Ll = function() {
        pl(Tt);
      };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), Rt = je.port2;
      je.port1.onmessage = Tt, Ll = function() {
        Rt.postMessage(null);
      };
    } else
      Ll = function() {
        Zl(Tt, 0);
      };
    function St(S, M) {
      X = Zl(function() {
        S(s.unstable_now());
      }, M);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, s.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : fl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return nl;
    }, s.unstable_next = function(S) {
      switch (nl) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = nl;
      }
      var G = nl;
      nl = M;
      try {
        return S();
      } finally {
        nl = G;
      }
    }, s.unstable_requestPaint = function() {
      pt = !0;
    }, s.unstable_runWithPriority = function(S, M) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var G = nl;
      nl = S;
      try {
        return M();
      } finally {
        nl = G;
      }
    }, s.unstable_scheduleCallback = function(S, M, G) {
      var sl = s.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? sl + G : sl) : G = sl, S) {
        case 1:
          var ml = -1;
          break;
        case 2:
          ml = 250;
          break;
        case 5:
          ml = 1073741823;
          break;
        case 4:
          ml = 1e4;
          break;
        default:
          ml = 5e3;
      }
      return ml = G + ml, S = {
        id: J++,
        callback: M,
        priorityLevel: S,
        startTime: G,
        expirationTime: ml,
        sortIndex: -1
      }, G > sl ? (S.sortIndex = G, m(E, S), y(A) === null && S === y(E) && (Ol ? (zt(X), X = -1) : Ol = !0, St(st, G - sl))) : (S.sortIndex = ml, m(A, S), Ml || Yl || (Ml = !0, P || (P = !0, Ll()))), S;
    }, s.unstable_shouldYield = we, s.unstable_wrapCallback = function(S) {
      var M = nl;
      return function() {
        var G = nl;
        nl = M;
        try {
          return S.apply(this, arguments);
        } finally {
          nl = G;
        }
      };
    };
  })(bf)), bf;
}
var Dr;
function j1() {
  return Dr || (Dr = 1, gf.exports = S1()), gf.exports;
}
var xf = { exports: {} }, Gl = {};
var Rr;
function E1() {
  if (Rr) return Gl;
  Rr = 1;
  var s = pf();
  function m(A) {
    var E = "https://react.dev/errors/" + A;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        E += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + A + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function y() {
  }
  var d = {
    d: {
      f: y,
      r: function() {
        throw Error(m(522));
      },
      D: y,
      C: y,
      L: y,
      m: y,
      X: y,
      S: y,
      M: y
    },
    p: 0,
    findDOMNode: null
  }, O = /* @__PURE__ */ Symbol.for("react.portal");
  function H(A, E, J) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: O,
      key: R == null ? null : "" + R,
      children: A,
      containerInfo: E,
      implementation: J
    };
  }
  var Z = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(A, E) {
    if (A === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Gl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, Gl.createPortal = function(A, E) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(m(299));
    return H(A, E, null, J);
  }, Gl.flushSync = function(A) {
    var E = Z.T, J = d.p;
    try {
      if (Z.T = null, d.p = 2, A) return A();
    } finally {
      Z.T = E, d.p = J, d.d.f();
    }
  }, Gl.preconnect = function(A, E) {
    typeof A == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, d.d.C(A, E));
  }, Gl.prefetchDNS = function(A) {
    typeof A == "string" && d.d.D(A);
  }, Gl.preinit = function(A, E) {
    if (typeof A == "string" && E && typeof E.as == "string") {
      var J = E.as, R = w(J, E.crossOrigin), nl = typeof E.integrity == "string" ? E.integrity : void 0, Yl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      J === "style" ? d.d.S(
        A,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: R,
          integrity: nl,
          fetchPriority: Yl
        }
      ) : J === "script" && d.d.X(A, {
        crossOrigin: R,
        integrity: nl,
        fetchPriority: Yl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Gl.preinitModule = function(A, E) {
    if (typeof A == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var J = w(
            E.as,
            E.crossOrigin
          );
          d.d.M(A, {
            crossOrigin: J,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && d.d.M(A);
  }, Gl.preload = function(A, E) {
    if (typeof A == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var J = E.as, R = w(J, E.crossOrigin);
      d.d.L(A, J, {
        crossOrigin: R,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Gl.preloadModule = function(A, E) {
    if (typeof A == "string")
      if (E) {
        var J = w(E.as, E.crossOrigin);
        d.d.m(A, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: J,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else d.d.m(A);
  }, Gl.requestFormReset = function(A) {
    d.d.r(A);
  }, Gl.unstable_batchedUpdates = function(A, E) {
    return A(E);
  }, Gl.useFormState = function(A, E, J) {
    return Z.H.useFormState(A, E, J);
  }, Gl.useFormStatus = function() {
    return Z.H.useHostTransitionStatus();
  }, Gl.version = "19.2.8", Gl;
}
var Ur;
function N1() {
  if (Ur) return xf.exports;
  Ur = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (m) {
        console.error(m);
      }
  }
  return s(), xf.exports = E1(), xf.exports;
}
var Hr;
function _1() {
  if (Hr) return An;
  Hr = 1;
  var s = j1(), m = pf(), y = N1();
  function d(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function O(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function H(l) {
    var t = l, e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function Z(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function w(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function A(l) {
    if (H(l) !== l)
      throw Error(d(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = H(l), t === null) throw Error(d(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return A(n), l;
          if (u === a) return A(n), t;
          u = u.sibling;
        }
        throw Error(d(188));
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === e) {
            i = !0, e = n, a = u;
            break;
          }
          if (c === a) {
            i = !0, a = n, e = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === e) {
              i = !0, e = u, a = n;
              break;
            }
            if (c === a) {
              i = !0, a = u, e = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (e.alternate !== a) throw Error(d(190));
    }
    if (e.tag !== 3) throw Error(d(188));
    return e.stateNode.current === e ? l : t;
  }
  function J(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = J(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, nl = /* @__PURE__ */ Symbol.for("react.element"), Yl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ml = /* @__PURE__ */ Symbol.for("react.portal"), Ol = /* @__PURE__ */ Symbol.for("react.fragment"), pt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Zl = /* @__PURE__ */ Symbol.for("react.profiler"), zt = /* @__PURE__ */ Symbol.for("react.consumer"), pl = /* @__PURE__ */ Symbol.for("react.context"), Vl = /* @__PURE__ */ Symbol.for("react.forward_ref"), st = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), fl = /* @__PURE__ */ Symbol.for("react.lazy"), _t = /* @__PURE__ */ Symbol.for("react.activity"), we = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Tt = Symbol.iterator;
  function Ll(l) {
    return l === null || typeof l != "object" ? null : (l = Tt && l[Tt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Rt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === je ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ol:
        return "Fragment";
      case Zl:
        return "Profiler";
      case pt:
        return "StrictMode";
      case st:
        return "Suspense";
      case P:
        return "SuspenseList";
      case _t:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ml:
          return "Portal";
        case pl:
          return l.displayName || "Context";
        case zt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Vl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case X:
          return t = l.displayName || null, t !== null ? t : Rt(l.type) || "Memo";
        case fl:
          t = l._payload, l = l._init;
          try {
            return Rt(l(t));
          } catch {
          }
      }
    return null;
  }
  var St = Array.isArray, S = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, sl = [], ml = -1;
  function h(l) {
    return { current: l };
  }
  function _(l) {
    0 > ml || (l.current = sl[ml], sl[ml] = null, ml--);
  }
  function D(l, t) {
    ml++, sl[ml] = l.current, l.current = t;
  }
  var C = h(null), V = h(null), $ = h(null), ul = h(null);
  function Ql(l, t) {
    switch (D($, t), D(V, l), D(C, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Wd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Wd(t), l = kd(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    _(C), D(C, l);
  }
  function zl() {
    _(C), _(V), _($);
  }
  function Ua(l) {
    l.memoizedState !== null && D(ul, l);
    var t = C.current, e = kd(t, l.type);
    t !== e && (D(V, l), D(C, e));
  }
  function Mn(l) {
    V.current === l && (_(C), _(V)), ul.current === l && (_(ul), jn._currentValue = G);
  }
  var Wu, Nf;
  function Ee(l) {
    if (Wu === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Wu = t && t[1] || "", Nf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Wu + l + Nf;
  }
  var ku = !1;
  function Fu(l, t) {
    if (!l || ku) return "";
    ku = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (p) {
                  var x = p;
                }
                Reflect.construct(l, [], N);
              } else {
                try {
                  N.call();
                } catch (p) {
                  x = p;
                }
                l.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                x = p;
              }
              (N = l()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (p) {
            if (p && x && typeof p.stack == "string")
              return [p.stack, x.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var r = i.split(`
`), b = c.split(`
`);
        for (n = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < b.length && !b[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === r.length || n === b.length)
          for (a = r.length - 1, n = b.length - 1; 1 <= a && 0 <= n && r[a] !== b[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== b[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || r[a] !== b[n]) {
                  var z = `
` + r[a].replace(" at new ", " at ");
                  return l.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", l.displayName)), z;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ku = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? Ee(e) : "";
  }
  function Wr(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(l.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ee("Suspense Fallback") : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return Fu(l.type, !1);
      case 11:
        return Fu(l.type.render, !1);
      case 1:
        return Fu(l.type, !0);
      case 31:
        return Ee("Activity");
      default:
        return "";
    }
  }
  function _f(l) {
    try {
      var t = "", e = null;
      do
        t += Wr(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Iu = Object.prototype.hasOwnProperty, Pu = s.unstable_scheduleCallback, li = s.unstable_cancelCallback, kr = s.unstable_shouldYield, Fr = s.unstable_requestPaint, Pl = s.unstable_now, Ir = s.unstable_getCurrentPriorityLevel, Tf = s.unstable_ImmediatePriority, Af = s.unstable_UserBlockingPriority, On = s.unstable_NormalPriority, Pr = s.unstable_LowPriority, Mf = s.unstable_IdlePriority, lo = s.log, to = s.unstable_setDisableYieldValue, Ha = null, lt = null;
  function Ft(l) {
    if (typeof lo == "function" && to(l), lt && typeof lt.setStrictMode == "function")
      try {
        lt.setStrictMode(Ha, l);
      } catch {
      }
  }
  var tt = Math.clz32 ? Math.clz32 : no, eo = Math.log, ao = Math.LN2;
  function no(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (eo(l) / ao | 0) | 0;
  }
  var Dn = 256, Rn = 262144, Un = 4194304;
  function Ne(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Hn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = Ne(a) : (i &= c, i !== 0 ? n = Ne(i) : e || (e = c & ~l, e !== 0 && (n = Ne(e))))) : (c = a & ~u, c !== 0 ? n = Ne(c) : i !== 0 ? n = Ne(i) : e || (e = a & ~l, e !== 0 && (n = Ne(e)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, e = t & -t, u >= e || u === 32 && (e & 4194048) !== 0) ? t : n;
  }
  function Ca(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function uo(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Of() {
    var l = Un;
    return Un <<= 1, (Un & 62914560) === 0 && (Un = 4194304), l;
  }
  function ti(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function qa(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function io(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, r = l.expirationTimes, b = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var z = 31 - tt(e), N = 1 << z;
      c[z] = 0, r[z] = -1;
      var x = b[z];
      if (x !== null)
        for (b[z] = null, z = 0; z < x.length; z++) {
          var p = x[z];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~N;
    }
    a !== 0 && Df(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
  }
  function Df(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - tt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Rf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - tt(e), n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), e &= ~n;
    }
  }
  function Uf(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : ei(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function ei(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ai(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Hf() {
    var l = M.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : xr(l.type));
  }
  function Cf(l, t) {
    var e = M.p;
    try {
      return M.p = l, t();
    } finally {
      M.p = e;
    }
  }
  var It = Math.random().toString(36).slice(2), Ul = "__reactFiber$" + It, Kl = "__reactProps$" + It, Ve = "__reactContainer$" + It, ni = "__reactEvents$" + It, co = "__reactListeners$" + It, fo = "__reactHandles$" + It, qf = "__reactResources$" + It, Ba = "__reactMarker$" + It;
  function ui(l) {
    delete l[Ul], delete l[Kl], delete l[ni], delete l[co], delete l[fo];
  }
  function Le(l) {
    var t = l[Ul];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Ve] || e[Ul]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = ar(l); l !== null; ) {
            if (e = l[Ul]) return e;
            l = ar(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function Ke(l) {
    if (l = l[Ul] || l[Ve]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ya(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(d(33));
  }
  function Je(l) {
    var t = l[qf];
    return t || (t = l[qf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dl(l) {
    l[Ba] = !0;
  }
  var Bf = /* @__PURE__ */ new Set(), Yf = {};
  function _e(l, t) {
    $e(l, t), $e(l + "Capture", t);
  }
  function $e(l, t) {
    for (Yf[l] = t, l = 0; l < t.length; l++)
      Bf.add(t[l]);
  }
  var so = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zf = {}, Gf = {};
  function ro(l) {
    return Iu.call(Gf, l) ? !0 : Iu.call(Zf, l) ? !1 : so.test(l) ? Gf[l] = !0 : (Zf[l] = !0, !1);
  }
  function Cn(l, t, e) {
    if (ro(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function qn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Ut(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function dt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Xf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function oo(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          e = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function ii(l) {
    if (!l._valueTracker) {
      var t = Xf(l) ? "checked" : "value";
      l._valueTracker = oo(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Qf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Xf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function Bn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var mo = /[\n"\\]/g;
  function rt(l) {
    return l.replace(
      mo,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ci(l, t, e, a, n, u, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + dt(t)) : l.value !== "" + dt(t) && (l.value = "" + dt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? fi(l, i, dt(t)) : e != null ? fi(l, i, dt(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + dt(c) : l.removeAttribute("name");
  }
  function wf(l, t, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ii(l);
        return;
      }
      e = e != null ? "" + dt(e) : "", t = t != null ? "" + dt(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ii(l);
  }
  function fi(l, t, e) {
    t === "number" && Bn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function We(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < e.length; n++)
        t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + dt(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vf(l, t, e) {
    if (t != null && (t = "" + dt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + dt(e) : "";
  }
  function Lf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(d(92));
        if (St(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = dt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ii(l);
  }
  function ke(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var ho = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Kf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || ho.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Jf(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(d(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && e[n] !== a && Kf(l, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Kf(l, u, t[u]);
  }
  function si(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vo = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), yo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yn(l) {
    return yo.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ht() {
  }
  var di = null;
  function ri(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Fe = null, Ie = null;
  function $f(l) {
    var t = Ke(l);
    if (t && (l = t.stateNode)) {
      var e = l[Kl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ci(
            l,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + rt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[Kl] || null;
                if (!n) throw Error(d(90));
                ci(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              a = e[t], a.form === l.form && Qf(a);
          }
          break l;
        case "textarea":
          Vf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && We(l, !!e.multiple, t, !1);
      }
    }
  }
  var oi = !1;
  function Wf(l, t, e) {
    if (oi) return l(t, e);
    oi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (oi = !1, (Fe !== null || Ie !== null) && (Nu(), Fe && (t = Fe, l = Ie, Ie = Fe = null, $f(t), l)))
        for (t = 0; t < l.length; t++) $f(l[t]);
    }
  }
  function Za(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Kl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function")
      throw Error(
        d(231, t, typeof e)
      );
    return e;
  }
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mi = !1;
  if (Ct)
    try {
      var Ga = {};
      Object.defineProperty(Ga, "passive", {
        get: function() {
          mi = !0;
        }
      }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
    } catch {
      mi = !1;
    }
  var Pt = null, hi = null, Zn = null;
  function kf() {
    if (Zn) return Zn;
    var l, t = hi, e = t.length, a, n = "value" in Pt ? Pt.value : Pt.textContent, u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++) ;
    return Zn = n.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Gn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Xn() {
    return !0;
  }
  function Ff() {
    return !1;
  }
  function Jl(l) {
    function t(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xn : Ff, this.isPropagationStopped = Ff, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Xn);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Xn);
      },
      persist: function() {
      },
      isPersistent: Xn
    }), t;
  }
  var Te = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Qn = Jl(Te), Xa = R({}, Te, { view: 0, detail: 0 }), go = Jl(Xa), vi, yi, Qa, wn = R({}, Xa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Qa && (Qa && l.type === "mousemove" ? (vi = l.screenX - Qa.screenX, yi = l.screenY - Qa.screenY) : yi = vi = 0, Qa = l), vi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : yi;
    }
  }), If = Jl(wn), bo = R({}, wn, { dataTransfer: 0 }), xo = Jl(bo), po = R({}, Xa, { relatedTarget: 0 }), gi = Jl(po), zo = R({}, Te, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), So = Jl(zo), jo = R({}, Te, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Eo = Jl(jo), No = R({}, Te, { data: 0 }), Pf = Jl(No), _o = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, To = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ao = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Mo(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Ao[l]) ? !!t[l] : !1;
  }
  function bi() {
    return Mo;
  }
  var Oo = R({}, Xa, {
    key: function(l) {
      if (l.key) {
        var t = _o[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Gn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? To[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bi,
    charCode: function(l) {
      return l.type === "keypress" ? Gn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Gn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Do = Jl(Oo), Ro = R({}, wn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ls = Jl(Ro), Uo = R({}, Xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bi
  }), Ho = Jl(Uo), Co = R({}, Te, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qo = Jl(Co), Bo = R({}, wn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yo = Jl(Bo), Zo = R({}, Te, {
    newState: 0,
    oldState: 0
  }), Go = Jl(Zo), Xo = [9, 13, 27, 32], xi = Ct && "CompositionEvent" in window, wa = null;
  Ct && "documentMode" in document && (wa = document.documentMode);
  var Qo = Ct && "TextEvent" in window && !wa, ts = Ct && (!xi || wa && 8 < wa && 11 >= wa), es = " ", as = !1;
  function ns(l, t) {
    switch (l) {
      case "keyup":
        return Xo.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function us(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Pe = !1;
  function wo(l, t) {
    switch (l) {
      case "compositionend":
        return us(t);
      case "keypress":
        return t.which !== 32 ? null : (as = !0, es);
      case "textInput":
        return l = t.data, l === es && as ? null : l;
      default:
        return null;
    }
  }
  function Vo(l, t) {
    if (Pe)
      return l === "compositionend" || !xi && ns(l, t) ? (l = kf(), Zn = hi = Pt = null, Pe = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ts && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Lo = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function is(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Lo[l.type] : t === "textarea";
  }
  function cs(l, t, e, a) {
    Fe ? Ie ? Ie.push(a) : Ie = [a] : Fe = a, t = Ru(t, "onChange"), 0 < t.length && (e = new Qn(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var Va = null, La = null;
  function Ko(l) {
    wd(l, 0);
  }
  function Vn(l) {
    var t = Ya(l);
    if (Qf(t)) return l;
  }
  function fs(l, t) {
    if (l === "change") return t;
  }
  var ss = !1;
  if (Ct) {
    var pi;
    if (Ct) {
      var zi = "oninput" in document;
      if (!zi) {
        var ds = document.createElement("div");
        ds.setAttribute("oninput", "return;"), zi = typeof ds.oninput == "function";
      }
      pi = zi;
    } else pi = !1;
    ss = pi && (!document.documentMode || 9 < document.documentMode);
  }
  function rs() {
    Va && (Va.detachEvent("onpropertychange", os), La = Va = null);
  }
  function os(l) {
    if (l.propertyName === "value" && Vn(La)) {
      var t = [];
      cs(
        t,
        La,
        l,
        ri(l)
      ), Wf(Ko, t);
    }
  }
  function Jo(l, t, e) {
    l === "focusin" ? (rs(), Va = t, La = e, Va.attachEvent("onpropertychange", os)) : l === "focusout" && rs();
  }
  function $o(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vn(La);
  }
  function Wo(l, t) {
    if (l === "click") return Vn(t);
  }
  function ko(l, t) {
    if (l === "input" || l === "change")
      return Vn(t);
  }
  function Fo(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var et = typeof Object.is == "function" ? Object.is : Fo;
  function Ka(l, t) {
    if (et(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Iu.call(t, n) || !et(l[n], t[n]))
        return !1;
    }
    return !0;
  }
  function ms(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function hs(l, t) {
    var e = ms(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t)
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ms(e);
    }
  }
  function vs(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ys(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Bn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Bn(l.document);
    }
    return t;
  }
  function Si(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Io = Ct && "documentMode" in document && 11 >= document.documentMode, la = null, ji = null, Ja = null, Ei = !1;
  function gs(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ei || la == null || la !== Bn(a) || (a = la, "selectionStart" in a && Si(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ja && Ka(Ja, a) || (Ja = a, a = Ru(ji, "onSelect"), 0 < a.length && (t = new Qn(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = la)));
  }
  function Ae(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var ta = {
    animationend: Ae("Animation", "AnimationEnd"),
    animationiteration: Ae("Animation", "AnimationIteration"),
    animationstart: Ae("Animation", "AnimationStart"),
    transitionrun: Ae("Transition", "TransitionRun"),
    transitionstart: Ae("Transition", "TransitionStart"),
    transitioncancel: Ae("Transition", "TransitionCancel"),
    transitionend: Ae("Transition", "TransitionEnd")
  }, Ni = {}, bs = {};
  Ct && (bs = document.createElement("div").style, "AnimationEvent" in window || (delete ta.animationend.animation, delete ta.animationiteration.animation, delete ta.animationstart.animation), "TransitionEvent" in window || delete ta.transitionend.transition);
  function Me(l) {
    if (Ni[l]) return Ni[l];
    if (!ta[l]) return l;
    var t = ta[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in bs)
        return Ni[l] = t[e];
    return l;
  }
  var xs = Me("animationend"), ps = Me("animationiteration"), zs = Me("animationstart"), Po = Me("transitionrun"), lm = Me("transitionstart"), tm = Me("transitioncancel"), Ss = Me("transitionend"), js = /* @__PURE__ */ new Map(), _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _i.push("scrollEnd");
  function jt(l, t) {
    js.set(l, t), _e(t, [l]);
  }
  var Ln = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, ot = [], ea = 0, Ti = 0;
  function Kn() {
    for (var l = ea, t = Ti = ea = 0; t < l; ) {
      var e = ot[t];
      ot[t++] = null;
      var a = ot[t];
      ot[t++] = null;
      var n = ot[t];
      ot[t++] = null;
      var u = ot[t];
      if (ot[t++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Es(e, n, u);
    }
  }
  function Jn(l, t, e, a) {
    ot[ea++] = l, ot[ea++] = t, ot[ea++] = e, ot[ea++] = a, Ti |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ai(l, t, e, a) {
    return Jn(l, t, e, a), $n(l);
  }
  function Oe(l, t) {
    return Jn(l, null, null, t), $n(l);
  }
  function Es(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (l = u.stateNode, l === null || l._visibility & 1 || (n = !0)), l = u, u = u.return;
    return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - tt(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = e | 536870912), u) : null;
  }
  function $n(l) {
    if (50 < yn)
      throw yn = 0, Bc = null, Error(d(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var aa = {};
  function em(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function at(l, t, e, a) {
    return new em(l, t, e, a);
  }
  function Mi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var e = l.alternate;
    return e === null ? (e = at(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function Ns(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Wn(l, t, e, a, n, u) {
    var i = 0;
    if (a = l, typeof l == "function") Mi(l) && (i = 1);
    else if (typeof l == "string")
      i = c1(
        l,
        e,
        C.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case _t:
          return l = at(31, e, t, n), l.elementType = _t, l.lanes = u, l;
        case Ol:
          return De(e.children, n, u, t);
        case pt:
          i = 8, n |= 24;
          break;
        case Zl:
          return l = at(12, e, t, n | 2), l.elementType = Zl, l.lanes = u, l;
        case st:
          return l = at(13, e, t, n), l.elementType = st, l.lanes = u, l;
        case P:
          return l = at(19, e, t, n), l.elementType = P, l.lanes = u, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case pl:
                i = 10;
                break l;
              case zt:
                i = 9;
                break l;
              case Vl:
                i = 11;
                break l;
              case X:
                i = 14;
                break l;
              case fl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            d(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = at(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t;
  }
  function De(l, t, e, a) {
    return l = at(7, l, a, t), l.lanes = e, l;
  }
  function Oi(l, t, e) {
    return l = at(6, l, null, t), l.lanes = e, l;
  }
  function _s(l) {
    var t = at(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Di(l, t, e) {
    return t = at(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Ts = /* @__PURE__ */ new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ts.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: _f(t)
      }, Ts.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: _f(t)
    };
  }
  var na = [], ua = 0, kn = null, $a = 0, ht = [], vt = 0, le = null, At = 1, Mt = "";
  function Bt(l, t) {
    na[ua++] = $a, na[ua++] = kn, kn = l, $a = t;
  }
  function As(l, t, e) {
    ht[vt++] = At, ht[vt++] = Mt, ht[vt++] = le, le = l;
    var a = At;
    l = Mt;
    var n = 32 - tt(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - tt(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, At = 1 << 32 - tt(t) + n | e << n | a, Mt = u + l;
    } else
      At = 1 << u | e << n | a, Mt = l;
  }
  function Ri(l) {
    l.return !== null && (Bt(l, 1), As(l, 1, 0));
  }
  function Ui(l) {
    for (; l === kn; )
      kn = na[--ua], na[ua] = null, $a = na[--ua], na[ua] = null;
    for (; l === le; )
      le = ht[--vt], ht[vt] = null, Mt = ht[--vt], ht[vt] = null, At = ht[--vt], ht[vt] = null;
  }
  function Ms(l, t) {
    ht[vt++] = At, ht[vt++] = Mt, ht[vt++] = le, At = t.id, Mt = t.overflow, le = l;
  }
  var Hl = null, vl = null, ll = !1, te = null, yt = !1, Hi = Error(d(519));
  function ee(l) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wa(mt(t, l)), Hi;
  }
  function Os(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Ul] = l, t[Kl] = a, e) {
      case "dialog":
        k("cancel", t), k("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        k("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < bn.length; e++)
          k(bn[e], t);
        break;
      case "source":
        k("error", t);
        break;
      case "img":
      case "image":
      case "link":
        k("error", t), k("load", t);
        break;
      case "details":
        k("toggle", t);
        break;
      case "input":
        k("invalid", t), wf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        k("invalid", t);
        break;
      case "textarea":
        k("invalid", t), Lf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Jd(t.textContent, e) ? (a.popover != null && (k("beforetoggle", t), k("toggle", t)), a.onScroll != null && k("scroll", t), a.onScrollEnd != null && k("scrollend", t), a.onClick != null && (t.onclick = Ht), t = !0) : t = !1, t || ee(l, !0);
  }
  function Ds(l) {
    for (Hl = l.return; Hl; )
      switch (Hl.tag) {
        case 5:
        case 31:
        case 13:
          yt = !1;
          return;
        case 27:
        case 3:
          yt = !0;
          return;
        default:
          Hl = Hl.return;
      }
  }
  function ia(l) {
    if (l !== Hl) return !1;
    if (!ll) return Ds(l), ll = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Ic(l.type, l.memoizedProps)), e = !e), e && vl && ee(l), Ds(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
      vl = er(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
      vl = er(l);
    } else
      t === 27 ? (t = vl, ye(l.type) ? (l = af, af = null, vl = l) : vl = t) : vl = Hl ? bt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Re() {
    vl = Hl = null, ll = !1;
  }
  function Ci() {
    var l = te;
    return l !== null && (Fl === null ? Fl = l : Fl.push.apply(
      Fl,
      l
    ), te = null), l;
  }
  function Wa(l) {
    te === null ? te = [l] : te.push(l);
  }
  var qi = h(null), Ue = null, Yt = null;
  function ae(l, t, e) {
    D(qi, t._currentValue), t._currentValue = e;
  }
  function Zt(l) {
    l._currentValue = qi.current, _(qi);
  }
  function Bi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Yi(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var r = 0; r < t.length; r++)
            if (c.context === t[r]) {
              u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Bi(
                u.return,
                e,
                l
              ), a || (i = null);
              break l;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(d(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Bi(i, e, l), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ca(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(d(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          et(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === ul.current) {
        if (i = n.alternate, i === null) throw Error(d(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(jn) : l = [jn]);
      }
      n = n.return;
    }
    l !== null && Yi(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function Fn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!et(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function He(l) {
    Ue = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Cl(l) {
    return Rs(Ue, l);
  }
  function In(l, t) {
    return Ue === null && He(l), Rs(l, t);
  }
  function Rs(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Yt === null) {
      if (l === null) throw Error(d(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return e;
  }
  var am = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(e) {
        return e();
      });
    };
  }, nm = s.unstable_scheduleCallback, um = s.unstable_NormalPriority, El = {
    $$typeof: pl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Zi() {
    return {
      controller: new am(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ka(l) {
    l.refCount--, l.refCount === 0 && nm(um, function() {
      l.controller.abort();
    });
  }
  var Fa = null, Gi = 0, fa = 0, sa = null;
  function im(l, t) {
    if (Fa === null) {
      var e = Fa = [];
      Gi = 0, fa = wc(), sa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Gi++, t.then(Us, Us), t;
  }
  function Us() {
    if (--Gi === 0 && Fa !== null) {
      sa !== null && (sa.status = "fulfilled");
      var l = Fa;
      Fa = null, fa = 0, sa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function cm(l, t) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < e.length; n++) (0, e[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var Hs = S.S;
  S.S = function(l, t) {
    gd = Pl(), typeof t == "object" && t !== null && typeof t.then == "function" && im(l, t), Hs !== null && Hs(l, t);
  };
  var Ce = h(null);
  function Xi() {
    var l = Ce.current;
    return l !== null ? l : hl.pooledCache;
  }
  function Pn(l, t) {
    t === null ? D(Ce, Ce.current) : D(Ce, t.pool);
  }
  function Cs() {
    var l = Xi();
    return l === null ? null : { parent: El._currentValue, pool: l };
  }
  var da = Error(d(460)), Qi = Error(d(474)), lu = Error(d(542)), tu = { then: function() {
  } };
  function qs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Bs(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Ht, Ht), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Zs(l), l;
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (l = hl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(d(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Zs(l), l;
        }
        throw Be = t, da;
    }
  }
  function qe(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Be = e, da) : e;
    }
  }
  var Be = null;
  function Ys() {
    if (Be === null) throw Error(d(459));
    var l = Be;
    return Be = null, l;
  }
  function Zs(l) {
    if (l === da || l === lu)
      throw Error(d(483));
  }
  var ra = null, Ia = 0;
  function eu(l) {
    var t = Ia;
    return Ia += 1, ra === null && (ra = []), Bs(ra, l, t);
  }
  function Pa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function au(l, t) {
    throw t.$$typeof === nl ? Error(d(525)) : (l = Object.prototype.toString.call(t), Error(
      d(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Gs(l) {
    function t(v, o) {
      if (l) {
        var g = v.deletions;
        g === null ? (v.deletions = [o], v.flags |= 16) : g.push(o);
      }
    }
    function e(v, o) {
      if (!l) return null;
      for (; o !== null; )
        t(v, o), o = o.sibling;
      return null;
    }
    function a(v) {
      for (var o = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? o.set(v.key, v) : o.set(v.index, v), v = v.sibling;
      return o;
    }
    function n(v, o) {
      return v = qt(v, o), v.index = 0, v.sibling = null, v;
    }
    function u(v, o, g) {
      return v.index = g, l ? (g = v.alternate, g !== null ? (g = g.index, g < o ? (v.flags |= 67108866, o) : g) : (v.flags |= 67108866, o)) : (v.flags |= 1048576, o);
    }
    function i(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, o, g, j) {
      return o === null || o.tag !== 6 ? (o = Oi(g, v.mode, j), o.return = v, o) : (o = n(o, g), o.return = v, o);
    }
    function r(v, o, g, j) {
      var B = g.type;
      return B === Ol ? z(
        v,
        o,
        g.props.children,
        j,
        g.key
      ) : o !== null && (o.elementType === B || typeof B == "object" && B !== null && B.$$typeof === fl && qe(B) === o.type) ? (o = n(o, g.props), Pa(o, g), o.return = v, o) : (o = Wn(
        g.type,
        g.key,
        g.props,
        null,
        v.mode,
        j
      ), Pa(o, g), o.return = v, o);
    }
    function b(v, o, g, j) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== g.containerInfo || o.stateNode.implementation !== g.implementation ? (o = Di(g, v.mode, j), o.return = v, o) : (o = n(o, g.children || []), o.return = v, o);
    }
    function z(v, o, g, j, B) {
      return o === null || o.tag !== 7 ? (o = De(
        g,
        v.mode,
        j,
        B
      ), o.return = v, o) : (o = n(o, g), o.return = v, o);
    }
    function N(v, o, g) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Oi(
          "" + o,
          v.mode,
          g
        ), o.return = v, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Yl:
            return g = Wn(
              o.type,
              o.key,
              o.props,
              null,
              v.mode,
              g
            ), Pa(g, o), g.return = v, g;
          case Ml:
            return o = Di(
              o,
              v.mode,
              g
            ), o.return = v, o;
          case fl:
            return o = qe(o), N(v, o, g);
        }
        if (St(o) || Ll(o))
          return o = De(
            o,
            v.mode,
            g,
            null
          ), o.return = v, o;
        if (typeof o.then == "function")
          return N(v, eu(o), g);
        if (o.$$typeof === pl)
          return N(
            v,
            In(v, o),
            g
          );
        au(v, o);
      }
      return null;
    }
    function x(v, o, g, j) {
      var B = o !== null ? o.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return B !== null ? null : c(v, o, "" + g, j);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Yl:
            return g.key === B ? r(v, o, g, j) : null;
          case Ml:
            return g.key === B ? b(v, o, g, j) : null;
          case fl:
            return g = qe(g), x(v, o, g, j);
        }
        if (St(g) || Ll(g))
          return B !== null ? null : z(v, o, g, j, null);
        if (typeof g.then == "function")
          return x(
            v,
            o,
            eu(g),
            j
          );
        if (g.$$typeof === pl)
          return x(
            v,
            o,
            In(v, g),
            j
          );
        au(v, g);
      }
      return null;
    }
    function p(v, o, g, j, B) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return v = v.get(g) || null, c(o, v, "" + j, B);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case Yl:
            return v = v.get(
              j.key === null ? g : j.key
            ) || null, r(o, v, j, B);
          case Ml:
            return v = v.get(
              j.key === null ? g : j.key
            ) || null, b(o, v, j, B);
          case fl:
            return j = qe(j), p(
              v,
              o,
              g,
              j,
              B
            );
        }
        if (St(j) || Ll(j))
          return v = v.get(g) || null, z(o, v, j, B, null);
        if (typeof j.then == "function")
          return p(
            v,
            o,
            g,
            eu(j),
            B
          );
        if (j.$$typeof === pl)
          return p(
            v,
            o,
            g,
            In(o, j),
            B
          );
        au(o, j);
      }
      return null;
    }
    function U(v, o, g, j) {
      for (var B = null, tl = null, q = o, K = o = 0, I = null; q !== null && K < g.length; K++) {
        q.index > K ? (I = q, q = null) : I = q.sibling;
        var el = x(
          v,
          q,
          g[K],
          j
        );
        if (el === null) {
          q === null && (q = I);
          break;
        }
        l && q && el.alternate === null && t(v, q), o = u(el, o, K), tl === null ? B = el : tl.sibling = el, tl = el, q = I;
      }
      if (K === g.length)
        return e(v, q), ll && Bt(v, K), B;
      if (q === null) {
        for (; K < g.length; K++)
          q = N(v, g[K], j), q !== null && (o = u(
            q,
            o,
            K
          ), tl === null ? B = q : tl.sibling = q, tl = q);
        return ll && Bt(v, K), B;
      }
      for (q = a(q); K < g.length; K++)
        I = p(
          q,
          v,
          K,
          g[K],
          j
        ), I !== null && (l && I.alternate !== null && q.delete(
          I.key === null ? K : I.key
        ), o = u(
          I,
          o,
          K
        ), tl === null ? B = I : tl.sibling = I, tl = I);
      return l && q.forEach(function(ze) {
        return t(v, ze);
      }), ll && Bt(v, K), B;
    }
    function Y(v, o, g, j) {
      if (g == null) throw Error(d(151));
      for (var B = null, tl = null, q = o, K = o = 0, I = null, el = g.next(); q !== null && !el.done; K++, el = g.next()) {
        q.index > K ? (I = q, q = null) : I = q.sibling;
        var ze = x(v, q, el.value, j);
        if (ze === null) {
          q === null && (q = I);
          break;
        }
        l && q && ze.alternate === null && t(v, q), o = u(ze, o, K), tl === null ? B = ze : tl.sibling = ze, tl = ze, q = I;
      }
      if (el.done)
        return e(v, q), ll && Bt(v, K), B;
      if (q === null) {
        for (; !el.done; K++, el = g.next())
          el = N(v, el.value, j), el !== null && (o = u(el, o, K), tl === null ? B = el : tl.sibling = el, tl = el);
        return ll && Bt(v, K), B;
      }
      for (q = a(q); !el.done; K++, el = g.next())
        el = p(q, v, K, el.value, j), el !== null && (l && el.alternate !== null && q.delete(el.key === null ? K : el.key), o = u(el, o, K), tl === null ? B = el : tl.sibling = el, tl = el);
      return l && q.forEach(function(b1) {
        return t(v, b1);
      }), ll && Bt(v, K), B;
    }
    function ol(v, o, g, j) {
      if (typeof g == "object" && g !== null && g.type === Ol && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Yl:
            l: {
              for (var B = g.key; o !== null; ) {
                if (o.key === B) {
                  if (B = g.type, B === Ol) {
                    if (o.tag === 7) {
                      e(
                        v,
                        o.sibling
                      ), j = n(
                        o,
                        g.props.children
                      ), j.return = v, v = j;
                      break l;
                    }
                  } else if (o.elementType === B || typeof B == "object" && B !== null && B.$$typeof === fl && qe(B) === o.type) {
                    e(
                      v,
                      o.sibling
                    ), j = n(o, g.props), Pa(j, g), j.return = v, v = j;
                    break l;
                  }
                  e(v, o);
                  break;
                } else t(v, o);
                o = o.sibling;
              }
              g.type === Ol ? (j = De(
                g.props.children,
                v.mode,
                j,
                g.key
              ), j.return = v, v = j) : (j = Wn(
                g.type,
                g.key,
                g.props,
                null,
                v.mode,
                j
              ), Pa(j, g), j.return = v, v = j);
            }
            return i(v);
          case Ml:
            l: {
              for (B = g.key; o !== null; ) {
                if (o.key === B)
                  if (o.tag === 4 && o.stateNode.containerInfo === g.containerInfo && o.stateNode.implementation === g.implementation) {
                    e(
                      v,
                      o.sibling
                    ), j = n(o, g.children || []), j.return = v, v = j;
                    break l;
                  } else {
                    e(v, o);
                    break;
                  }
                else t(v, o);
                o = o.sibling;
              }
              j = Di(g, v.mode, j), j.return = v, v = j;
            }
            return i(v);
          case fl:
            return g = qe(g), ol(
              v,
              o,
              g,
              j
            );
        }
        if (St(g))
          return U(
            v,
            o,
            g,
            j
          );
        if (Ll(g)) {
          if (B = Ll(g), typeof B != "function") throw Error(d(150));
          return g = B.call(g), Y(
            v,
            o,
            g,
            j
          );
        }
        if (typeof g.then == "function")
          return ol(
            v,
            o,
            eu(g),
            j
          );
        if (g.$$typeof === pl)
          return ol(
            v,
            o,
            In(v, g),
            j
          );
        au(v, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, o !== null && o.tag === 6 ? (e(v, o.sibling), j = n(o, g), j.return = v, v = j) : (e(v, o), j = Oi(g, v.mode, j), j.return = v, v = j), i(v)) : e(v, o);
    }
    return function(v, o, g, j) {
      try {
        Ia = 0;
        var B = ol(
          v,
          o,
          g,
          j
        );
        return ra = null, B;
      } catch (q) {
        if (q === da || q === lu) throw q;
        var tl = at(29, q, null, v.mode);
        return tl.lanes = j, tl.return = v, tl;
      }
    };
  }
  var Ye = Gs(!0), Xs = Gs(!1), ne = !1;
  function wi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Vi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ue(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ie(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (al & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = $n(l), Es(l, null, e), t;
    }
    return Jn(l, a, t, e), $n(l);
  }
  function ln(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Rf(l, e);
    }
  }
  function Li(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, e = e.next;
        } while (e !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var Ki = !1;
  function tn() {
    if (Ki) {
      var l = sa;
      if (l !== null) throw l;
    }
  }
  function en(l, t, e, a) {
    Ki = !1;
    var n = l.updateQueue;
    ne = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var r = c, b = r.next;
      r.next = null, i === null ? u = b : i.next = b, i = r;
      var z = l.alternate;
      z !== null && (z = z.updateQueue, c = z.lastBaseUpdate, c !== i && (c === null ? z.firstBaseUpdate = b : c.next = b, z.lastBaseUpdate = r));
    }
    if (u !== null) {
      var N = n.baseState;
      i = 0, z = b = r = null, c = u;
      do {
        var x = c.lane & -536870913, p = x !== c.lane;
        if (p ? (F & x) === x : (a & x) === x) {
          x !== 0 && x === fa && (Ki = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var U = l, Y = c;
            x = t;
            var ol = e;
            switch (Y.tag) {
              case 1:
                if (U = Y.payload, typeof U == "function") {
                  N = U.call(ol, N, x);
                  break l;
                }
                N = U;
                break l;
              case 3:
                U.flags = U.flags & -65537 | 128;
              case 0:
                if (U = Y.payload, x = typeof U == "function" ? U.call(ol, N, x) : U, x == null) break l;
                N = R({}, N, x);
                break l;
              case 2:
                ne = !0;
            }
          }
          x = c.callback, x !== null && (l.flags |= 64, p && (l.flags |= 8192), p = n.callbacks, p === null ? n.callbacks = [x] : p.push(x));
        } else
          p = {
            lane: x,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, z === null ? (b = z = p, r = N) : z = z.next = p, i |= x;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          p = c, c = p.next, p.next = null, n.lastBaseUpdate = p, n.shared.pending = null;
        }
      } while (!0);
      z === null && (r = N), n.baseState = r, n.firstBaseUpdate = b, n.lastBaseUpdate = z, u === null && (n.shared.lanes = 0), re |= i, l.lanes = i, l.memoizedState = N;
    }
  }
  function Qs(l, t) {
    if (typeof l != "function")
      throw Error(d(191, l));
    l.call(t);
  }
  function ws(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Qs(e[l], t);
  }
  var oa = h(null), nu = h(0);
  function Vs(l, t) {
    l = $t, D(nu, l), D(oa, t), $t = l | t.baseLanes;
  }
  function Ji() {
    D(nu, $t), D(oa, oa.current);
  }
  function $i() {
    $t = nu.current, _(oa), _(nu);
  }
  var nt = h(null), gt = null;
  function ce(l) {
    var t = l.alternate;
    D(Sl, Sl.current & 1), D(nt, l), gt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (gt = l);
  }
  function Wi(l) {
    D(Sl, Sl.current), D(nt, l), gt === null && (gt = l);
  }
  function Ls(l) {
    l.tag === 22 ? (D(Sl, Sl.current), D(nt, l), gt === null && (gt = l)) : fe();
  }
  function fe() {
    D(Sl, Sl.current), D(nt, nt.current);
  }
  function ut(l) {
    _(nt), gt === l && (gt = null), _(Sl);
  }
  var Sl = h(0);
  function uu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || tf(e) || ef(e)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Gt = 0, L = null, dl = null, Nl = null, iu = !1, ma = !1, Ze = !1, cu = 0, an = 0, ha = null, fm = 0;
  function bl() {
    throw Error(d(321));
  }
  function ki(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!et(l[e], t[e])) return !1;
    return !0;
  }
  function Fi(l, t, e, a, n, u) {
    return Gt = u, L = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? A0 : oc, Ze = !1, u = e(a, n), Ze = !1, ma && (u = Js(
      t,
      e,
      a,
      n
    )), Ks(l), u;
  }
  function Ks(l) {
    S.H = cn;
    var t = dl !== null && dl.next !== null;
    if (Gt = 0, Nl = dl = L = null, iu = !1, an = 0, ha = null, t) throw Error(d(300));
    l === null || _l || (l = l.dependencies, l !== null && Fn(l) && (_l = !0));
  }
  function Js(l, t, e, a) {
    L = l;
    var n = 0;
    do {
      if (ma && (ha = null), an = 0, ma = !1, 25 <= n) throw Error(d(301));
      if (n += 1, Nl = dl = null, l.updateQueue != null) {
        var u = l.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      S.H = M0, u = t(e, a);
    } while (ma);
    return u;
  }
  function sm() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? nn(t) : t, l = l.useState()[0], (dl !== null ? dl.memoizedState : null) !== l && (L.flags |= 1024), t;
  }
  function Ii() {
    var l = cu !== 0;
    return cu = 0, l;
  }
  function Pi(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function lc(l) {
    if (iu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      iu = !1;
    }
    Gt = 0, Nl = dl = L = null, ma = !1, an = cu = 0, ha = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nl === null ? L.memoizedState = Nl = l : Nl = Nl.next = l, Nl;
  }
  function jl() {
    if (dl === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = dl.next;
    var t = Nl === null ? L.memoizedState : Nl.next;
    if (t !== null)
      Nl = t, dl = l;
    else {
      if (l === null)
        throw L.alternate === null ? Error(d(467)) : Error(d(310));
      dl = l, l = {
        memoizedState: dl.memoizedState,
        baseState: dl.baseState,
        baseQueue: dl.baseQueue,
        queue: dl.queue,
        next: null
      }, Nl === null ? L.memoizedState = Nl = l : Nl = Nl.next = l;
    }
    return Nl;
  }
  function fu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function nn(l) {
    var t = an;
    return an += 1, ha === null && (ha = []), l = Bs(ha, l, t), t = L, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? A0 : oc), l;
  }
  function su(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return nn(l);
      if (l.$$typeof === pl) return Cl(l);
    }
    throw Error(d(438, String(l)));
  }
  function tc(l) {
    var t = null, e = L.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = L.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = fu(), L.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = we;
    return t.index++, e;
  }
  function Xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function du(l) {
    var t = jl();
    return ec(t, dl, l);
  }
  function ec(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = l.baseState, n === null) l.memoizedState = u;
    else {
      t = n.next;
      var c = i = null, r = null, b = t, z = !1;
      do {
        var N = b.lane & -536870913;
        if (N !== b.lane ? (F & N) === N : (Gt & N) === N) {
          var x = b.revertLane;
          if (x === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), N === fa && (z = !0);
          else if ((Gt & x) === x) {
            b = b.next, x === fa && (z = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, r === null ? (c = r = N, i = u) : r = r.next = N, L.lanes |= x, re |= x;
          N = b.action, Ze && e(u, N), u = b.hasEagerState ? b.eagerState : e(u, N);
        } else
          x = {
            lane: N,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, r === null ? (c = r = x, i = u) : r = r.next = x, L.lanes |= N, re |= N;
        b = b.next;
      } while (b !== null && b !== t);
      if (r === null ? i = u : r.next = c, !et(u, l.memoizedState) && (_l = !0, z && (e = sa, e !== null)))
        throw e;
      l.memoizedState = u, l.baseState = i, l.baseQueue = r, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ac(l) {
    var t = jl(), e = t.queue;
    if (e === null) throw Error(d(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, n = e.pending, u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = l(u, i.action), i = i.next;
      while (i !== n);
      et(u, t.memoizedState) || (_l = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function $s(l, t, e) {
    var a = L, n = jl(), u = ll;
    if (u) {
      if (e === void 0) throw Error(d(407));
      e = e();
    } else e = t();
    var i = !et(
      (dl || n).memoizedState,
      e
    );
    if (i && (n.memoizedState = e, _l = !0), n = n.queue, ic(Fs.bind(null, a, n, l), [
      l
    ]), n.getSnapshot !== t || i || Nl !== null && Nl.memoizedState.tag & 1) {
      if (a.flags |= 2048, va(
        9,
        { destroy: void 0 },
        ks.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), hl === null) throw Error(d(349));
      u || (Gt & 127) !== 0 || Ws(a, t, e);
    }
    return e;
  }
  function Ws(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = L.updateQueue, t === null ? (t = fu(), L.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function ks(l, t, e, a) {
    t.value = e, t.getSnapshot = a, Is(t) && Ps(l);
  }
  function Fs(l, t, e) {
    return e(function() {
      Is(t) && Ps(l);
    });
  }
  function Is(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !et(l, e);
    } catch {
      return !0;
    }
  }
  function Ps(l) {
    var t = Oe(l, 2);
    t !== null && Il(t, l, 2);
  }
  function nc(l) {
    var t = wl();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), Ze) {
        Ft(!0);
        try {
          e();
        } finally {
          Ft(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xt,
      lastRenderedState: l
    }, t;
  }
  function l0(l, t, e, a) {
    return l.baseState = e, ec(
      l,
      dl,
      typeof a == "function" ? a : Xt
    );
  }
  function dm(l, t, e, a, n) {
    if (mu(l)) throw Error(d(485));
    if (l = t.action, l !== null) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      S.T !== null ? e(!0) : u.isTransition = !1, a(u), e = t.pending, e === null ? (u.next = t.pending = u, t0(t, u)) : (u.next = e.next, t.pending = e.next = u);
    }
  }
  function t0(l, t) {
    var e = t.action, a = t.payload, n = l.state;
    if (t.isTransition) {
      var u = S.T, i = {};
      S.T = i;
      try {
        var c = e(n, a), r = S.S;
        r !== null && r(i, c), e0(l, t, c);
      } catch (b) {
        uc(l, t, b);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), S.T = u;
      }
    } else
      try {
        u = e(n, a), e0(l, t, u);
      } catch (b) {
        uc(l, t, b);
      }
  }
  function e0(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        a0(l, t, a);
      },
      function(a) {
        return uc(l, t, a);
      }
    ) : a0(l, t, e);
  }
  function a0(l, t, e) {
    t.status = "fulfilled", t.value = e, n0(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, t0(l, e)));
  }
  function uc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, n0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function n0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function u0(l, t) {
    return t;
  }
  function i0(l, t) {
    if (ll) {
      var e = hl.formState;
      if (e !== null) {
        l: {
          var a = L;
          if (ll) {
            if (vl) {
              t: {
                for (var n = vl, u = yt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = bt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                vl = bt(
                  n.nextSibling
                ), a = n.data === "F!";
                break l;
              }
            }
            ee(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = wl(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: u0,
      lastRenderedState: t
    }, e.queue = a, e = N0.bind(
      null,
      L,
      a
    ), a.dispatch = e, a = nc(!1), u = rc.bind(
      null,
      L,
      !1,
      a.queue
    ), a = wl(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, e = dm.bind(
      null,
      L,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function c0(l) {
    var t = jl();
    return f0(t, dl, l);
  }
  function f0(l, t, e) {
    if (t = ec(
      l,
      t,
      u0
    )[0], l = du(Xt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = nn(t);
      } catch (i) {
        throw i === da ? lu : i;
      }
    else a = t;
    t = jl();
    var n = t.queue, u = n.dispatch;
    return e !== t.memoizedState && (L.flags |= 2048, va(
      9,
      { destroy: void 0 },
      rm.bind(null, n, e),
      null
    )), [a, u, l];
  }
  function rm(l, t) {
    l.action = t;
  }
  function s0(l) {
    var t = jl(), e = dl;
    if (e !== null)
      return f0(t, e, l);
    jl(), t = t.memoizedState, e = jl();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function va(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = L.updateQueue, t === null && (t = fu(), L.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function d0() {
    return jl().memoizedState;
  }
  function ru(l, t, e, a) {
    var n = wl();
    L.flags |= l, n.memoizedState = va(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function ou(l, t, e, a) {
    var n = jl();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    dl !== null && a !== null && ki(a, dl.memoizedState.deps) ? n.memoizedState = va(t, u, e, a) : (L.flags |= l, n.memoizedState = va(
      1 | t,
      u,
      e,
      a
    ));
  }
  function r0(l, t) {
    ru(8390656, 8, l, t);
  }
  function ic(l, t) {
    ou(2048, 8, l, t);
  }
  function om(l) {
    L.flags |= 4;
    var t = L.updateQueue;
    if (t === null)
      t = fu(), L.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function o0(l) {
    var t = jl().memoizedState;
    return om({ ref: t, nextImpl: l }), function() {
      if ((al & 2) !== 0) throw Error(d(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function m0(l, t) {
    return ou(4, 2, l, t);
  }
  function h0(l, t) {
    return ou(4, 4, l, t);
  }
  function v0(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function y0(l, t, e) {
    e = e != null ? e.concat([l]) : null, ou(4, 4, v0.bind(null, t, l), e);
  }
  function cc() {
  }
  function g0(l, t) {
    var e = jl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ki(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function b0(l, t) {
    var e = jl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && ki(t, a[1]))
      return a[0];
    if (a = l(), Ze) {
      Ft(!0);
      try {
        l();
      } finally {
        Ft(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function fc(l, t, e) {
    return e === void 0 || (Gt & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = xd(), L.lanes |= l, re |= l, e);
  }
  function x0(l, t, e, a) {
    return et(e, t) ? e : oa.current !== null ? (l = fc(l, e, a), et(l, t) || (_l = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (F & 261930) === 0 ? (_l = !0, l.memoizedState = e) : (l = xd(), L.lanes |= l, re |= l, t);
  }
  function p0(l, t, e, a, n) {
    var u = M.p;
    M.p = u !== 0 && 8 > u ? u : 8;
    var i = S.T, c = {};
    S.T = c, rc(l, !1, t, e);
    try {
      var r = n(), b = S.S;
      if (b !== null && b(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var z = cm(
          r,
          a
        );
        un(
          l,
          t,
          z,
          ft(l)
        );
      } else
        un(
          l,
          t,
          a,
          ft(l)
        );
    } catch (N) {
      un(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: N },
        ft()
      );
    } finally {
      M.p = u, i !== null && c.types !== null && (i.types = c.types), S.T = i;
    }
  }
  function mm() {
  }
  function sc(l, t, e, a) {
    if (l.tag !== 5) throw Error(d(476));
    var n = z0(l).queue;
    p0(
      l,
      n,
      t,
      G,
      e === null ? mm : function() {
        return S0(l), e(a);
      }
    );
  }
  function z0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: G
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function S0(l) {
    var t = z0(l);
    t.next === null && (t = l.alternate.memoizedState), un(
      l,
      t.next.queue,
      {},
      ft()
    );
  }
  function dc() {
    return Cl(jn);
  }
  function j0() {
    return jl().memoizedState;
  }
  function E0() {
    return jl().memoizedState;
  }
  function hm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = ft();
          l = ue(e);
          var a = ie(t, l, e);
          a !== null && (Il(a, t, e), ln(a, t, e)), t = { cache: Zi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function vm(l, t, e) {
    var a = ft();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mu(l) ? _0(t, e) : (e = Ai(l, t, e, a), e !== null && (Il(e, l, a), T0(e, t, a)));
  }
  function N0(l, t, e) {
    var a = ft();
    un(l, t, e, a);
  }
  function un(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (mu(l)) _0(t, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var i = t.lastRenderedState, c = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = c, et(c, i))
            return Jn(l, t, n, 0), hl === null && Kn(), !1;
        } catch {
        }
      if (e = Ai(l, t, n, a), e !== null)
        return Il(e, l, a), T0(e, t, a), !0;
    }
    return !1;
  }
  function rc(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: wc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mu(l)) {
      if (t) throw Error(d(479));
    } else
      t = Ai(
        l,
        e,
        a,
        2
      ), t !== null && Il(t, l, 2);
  }
  function mu(l) {
    var t = l.alternate;
    return l === L || t !== null && t === L;
  }
  function _0(l, t) {
    ma = iu = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function T0(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Rf(l, e);
    }
  }
  var cn = {
    readContext: Cl,
    use: su,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl
  };
  cn.useEffectEvent = bl;
  var A0 = {
    readContext: Cl,
    use: su,
    useCallback: function(l, t) {
      return wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Cl,
    useEffect: r0,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, ru(
        4194308,
        4,
        v0.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return ru(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      ru(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = wl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Ze) {
        Ft(!0);
        try {
          l();
        } finally {
          Ft(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = wl();
      if (e !== void 0) {
        var n = e(t);
        if (Ze) {
          Ft(!0);
          try {
            e(t);
          } finally {
            Ft(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, a.queue = l, l = l.dispatch = vm.bind(
        null,
        L,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = nc(l);
      var t = l.queue, e = N0.bind(null, L, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = wl();
      return fc(e, l, t);
    },
    useTransition: function() {
      var l = nc(!1);
      return l = p0.bind(
        null,
        L,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = L, n = wl();
      if (ll) {
        if (e === void 0)
          throw Error(d(407));
        e = e();
      } else {
        if (e = t(), hl === null)
          throw Error(d(349));
        (F & 127) !== 0 || Ws(a, t, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: t };
      return n.queue = u, r0(Fs.bind(null, a, u, l), [
        l
      ]), a.flags |= 2048, va(
        9,
        { destroy: void 0 },
        ks.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), e;
    },
    useId: function() {
      var l = wl(), t = hl.identifierPrefix;
      if (ll) {
        var e = Mt, a = At;
        e = (a & ~(1 << 32 - tt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = cu++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = fm++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: dc,
    useFormState: i0,
    useActionState: i0,
    useOptimistic: function(l) {
      var t = wl();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = rc.bind(
        null,
        L,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: tc,
    useCacheRefresh: function() {
      return wl().memoizedState = hm.bind(
        null,
        L
      );
    },
    useEffectEvent: function(l) {
      var t = wl(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((al & 2) !== 0)
          throw Error(d(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, oc = {
    readContext: Cl,
    use: su,
    useCallback: g0,
    useContext: Cl,
    useEffect: ic,
    useImperativeHandle: y0,
    useInsertionEffect: m0,
    useLayoutEffect: h0,
    useMemo: b0,
    useReducer: du,
    useRef: d0,
    useState: function() {
      return du(Xt);
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = jl();
      return x0(
        e,
        dl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = du(Xt)[0], t = jl().memoizedState;
      return [
        typeof l == "boolean" ? l : nn(l),
        t
      ];
    },
    useSyncExternalStore: $s,
    useId: j0,
    useHostTransitionStatus: dc,
    useFormState: c0,
    useActionState: c0,
    useOptimistic: function(l, t) {
      var e = jl();
      return l0(e, dl, l, t);
    },
    useMemoCache: tc,
    useCacheRefresh: E0
  };
  oc.useEffectEvent = o0;
  var M0 = {
    readContext: Cl,
    use: su,
    useCallback: g0,
    useContext: Cl,
    useEffect: ic,
    useImperativeHandle: y0,
    useInsertionEffect: m0,
    useLayoutEffect: h0,
    useMemo: b0,
    useReducer: ac,
    useRef: d0,
    useState: function() {
      return ac(Xt);
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = jl();
      return dl === null ? fc(e, l, t) : x0(
        e,
        dl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ac(Xt)[0], t = jl().memoizedState;
      return [
        typeof l == "boolean" ? l : nn(l),
        t
      ];
    },
    useSyncExternalStore: $s,
    useId: j0,
    useHostTransitionStatus: dc,
    useFormState: s0,
    useActionState: s0,
    useOptimistic: function(l, t) {
      var e = jl();
      return dl !== null ? l0(e, dl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: tc,
    useCacheRefresh: E0
  };
  M0.useEffectEvent = o0;
  function mc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : R({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var hc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = ft(), n = ue(a);
      n.payload = t, e != null && (n.callback = e), t = ie(l, n, a), t !== null && (Il(t, l, a), ln(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = ft(), n = ue(a);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = ie(l, n, a), t !== null && (Il(t, l, a), ln(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = ft(), a = ue(e);
      a.tag = 2, t != null && (a.callback = t), t = ie(l, a, e), t !== null && (Il(t, l, e), ln(t, l, e));
    }
  };
  function O0(l, t, e, a, n, u, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Ka(e, a) || !Ka(n, u) : !0;
  }
  function D0(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && hc.enqueueReplaceState(t, t.state, null);
  }
  function Ge(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = R({}, e));
      for (var n in l)
        e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function R0(l) {
    Ln(l);
  }
  function U0(l) {
    console.error(l);
  }
  function H0(l) {
    Ln(l);
  }
  function hu(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function C0(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function vc(l, t, e) {
    return e = ue(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      hu(l, t);
    }, e;
  }
  function q0(l) {
    return l = ue(l), l.tag = 3, l;
  }
  function B0(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      l.payload = function() {
        return n(u);
      }, l.callback = function() {
        C0(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      C0(t, e, a), typeof n != "function" && (oe === null ? oe = /* @__PURE__ */ new Set([this]) : oe.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function ym(l, t, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && ca(
        t,
        e,
        n,
        !0
      ), e = nt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return gt === null ? _u() : e.alternate === null && xl === 0 && (xl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === tu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Gc(l, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === tu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Gc(l, a, n)), !1;
        }
        throw Error(d(435, e.tag));
      }
      return Gc(l, a, n), _u(), !1;
    }
    if (ll)
      return t = nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Hi && (l = Error(d(422), { cause: a }), Wa(mt(l, e)))) : (a !== Hi && (t = Error(d(423), {
        cause: a
      }), Wa(
        mt(t, e)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = mt(a, e), n = vc(
        l.stateNode,
        a,
        n
      ), Li(l, n), xl !== 4 && (xl = 2)), !1;
    var u = Error(d(520), { cause: a });
    if (u = mt(u, e), vn === null ? vn = [u] : vn.push(u), xl !== 4 && (xl = 2), t === null) return !0;
    a = mt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = n & -n, e.lanes |= l, l = vc(e.stateNode, a, l), Li(e, l), !1;
        case 1:
          if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (oe === null || !oe.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = q0(n), B0(
              n,
              l,
              e,
              a
            ), Li(e, n), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var yc = Error(d(461)), _l = !1;
  function ql(l, t, e, a) {
    t.child = l === null ? Xs(t, null, e, a) : Ye(
      t,
      l.child,
      e,
      a
    );
  }
  function Y0(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return He(t), a = Fi(
      l,
      t,
      e,
      i,
      u,
      n
    ), c = Ii(), l !== null && !_l ? (Pi(l, t, n), Qt(l, t, n)) : (ll && c && Ri(t), t.flags |= 1, ql(l, t, a, n), t.child);
  }
  function Z0(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" && !Mi(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, G0(
        l,
        t,
        u,
        a,
        n
      )) : (l = Wn(
        e.type,
        null,
        a,
        t,
        t.mode,
        n
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (u = l.child, !Ec(l, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ka, e(i, a) && l.ref === t.ref)
        return Qt(l, t, n);
    }
    return t.flags |= 1, l = qt(u, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function G0(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Ka(u, a) && l.ref === t.ref)
        if (_l = !1, t.pendingProps = a = u, Ec(l, n))
          (l.flags & 131072) !== 0 && (_l = !0);
        else
          return t.lanes = l.lanes, Qt(l, t, n);
    }
    return gc(
      l,
      t,
      e,
      a,
      n
    );
  }
  function X0(l, t, e, a) {
    var n = a.children, u = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return Q0(
          l,
          t,
          u,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Pn(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Vs(t, u) : Ji(), Ls(t);
      else
        return a = t.lanes = 536870912, Q0(
          l,
          t,
          u !== null ? u.baseLanes | e : e,
          e,
          a
        );
    } else
      u !== null ? (Pn(t, u.cachePool), Vs(t, u), fe(), t.memoizedState = null) : (l !== null && Pn(t, null), Ji(), fe());
    return ql(l, t, n, e), t.child;
  }
  function fn(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Q0(l, t, e, a, n) {
    var u = Xi();
    return u = u === null ? null : { parent: El._currentValue, pool: u }, t.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, l !== null && Pn(t, null), Ji(), Ls(t), l !== null && ca(l, t, a, !0), t.childLanes = n, null;
  }
  function vu(l, t) {
    return t = gu(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function w0(l, t, e) {
    return Ye(t, l.child, null, e), l = vu(t, t.pendingProps), l.flags |= 2, ut(t), t.memoizedState = null, l;
  }
  function gm(l, t, e) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (ll) {
        if (a.mode === "hidden")
          return l = vu(t, a), t.lanes = 536870912, fn(null, l);
        if (Wi(t), (l = vl) ? (l = tr(
          l,
          yt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: le !== null ? { id: At, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = _s(l), e.return = t, t.child = e, Hl = t, vl = null)) : l = null, l === null) throw ee(t);
        return t.lanes = 536870912, null;
      }
      return vu(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (Wi(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = w0(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(d(558));
      else if (_l || ca(l, t, e, !1), n = (e & l.childLanes) !== 0, _l || n) {
        if (a = hl, a !== null && (i = Uf(a, e), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Oe(l, i), Il(a, l, i), yc;
        _u(), t = w0(
          l,
          t,
          e
        );
      } else
        l = u.treeContext, vl = bt(i.nextSibling), Hl = t, ll = !0, te = null, yt = !1, l !== null && Ms(t, l), t = vu(t, a), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function yu(l, t) {
    var e = t.ref;
    if (e === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(d(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function gc(l, t, e, a, n) {
    return He(t), e = Fi(
      l,
      t,
      e,
      a,
      void 0,
      n
    ), a = Ii(), l !== null && !_l ? (Pi(l, t, n), Qt(l, t, n)) : (ll && a && Ri(t), t.flags |= 1, ql(l, t, e, n), t.child);
  }
  function V0(l, t, e, a, n, u) {
    return He(t), t.updateQueue = null, e = Js(
      t,
      a,
      e,
      n
    ), Ks(l), a = Ii(), l !== null && !_l ? (Pi(l, t, u), Qt(l, t, u)) : (ll && a && Ri(t), t.flags |= 1, ql(l, t, e, u), t.child);
  }
  function L0(l, t, e, a, n) {
    if (He(t), t.stateNode === null) {
      var u = aa, i = e.contextType;
      typeof i == "object" && i !== null && (u = Cl(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = hc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, wi(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? Cl(i) : aa, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (mc(
        t,
        e,
        i,
        a
      ), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && hc.enqueueReplaceState(u, u.state, null), en(t, a, u, n), tn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps, r = Ge(e, c);
      u.props = r;
      var b = u.context, z = e.contextType;
      i = aa, typeof z == "object" && z !== null && (i = Cl(z));
      var N = e.getDerivedStateFromProps;
      z = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || b !== i) && D0(
        t,
        u,
        a,
        i
      ), ne = !1;
      var x = t.memoizedState;
      u.state = x, en(t, a, u, n), tn(), b = t.memoizedState, c || x !== b || ne ? (typeof N == "function" && (mc(
        t,
        e,
        N,
        a
      ), b = t.memoizedState), (r = ne || O0(
        t,
        e,
        r,
        a,
        x,
        b,
        i
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = b), u.props = a, u.state = b, u.context = i, a = r) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Vi(l, t), i = t.memoizedProps, z = Ge(e, i), u.props = z, N = t.pendingProps, x = u.context, b = e.contextType, r = aa, typeof b == "object" && b !== null && (r = Cl(b)), c = e.getDerivedStateFromProps, (b = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== N || x !== r) && D0(
        t,
        u,
        a,
        r
      ), ne = !1, x = t.memoizedState, u.state = x, en(t, a, u, n), tn();
      var p = t.memoizedState;
      i !== N || x !== p || ne || l !== null && l.dependencies !== null && Fn(l.dependencies) ? (typeof c == "function" && (mc(
        t,
        e,
        c,
        a
      ), p = t.memoizedState), (z = ne || O0(
        t,
        e,
        z,
        a,
        x,
        p,
        r
      ) || l !== null && l.dependencies !== null && Fn(l.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, p, r), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        p,
        r
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), u.props = a, u.state = p, u.context = r, a = z) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, yu(l, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, l !== null && a ? (t.child = Ye(
      t,
      l.child,
      null,
      n
    ), t.child = Ye(
      t,
      null,
      e,
      n
    )) : ql(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = Qt(
      l,
      t,
      n
    ), l;
  }
  function K0(l, t, e, a) {
    return Re(), t.flags |= 256, ql(l, t, e, a), t.child;
  }
  var bc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xc(l) {
    return { baseLanes: l, cachePool: Cs() };
  }
  function pc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= ct), l;
  }
  function J0(l, t, e) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (Sl.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ll) {
        if (n ? ce(t) : fe(), (l = vl) ? (l = tr(
          l,
          yt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: le !== null ? { id: At, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = _s(l), e.return = t, t.child = e, Hl = t, vl = null)) : l = null, l === null) throw ee(t);
        return ef(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, n ? (fe(), n = t.mode, c = gu(
        { mode: "hidden", children: c },
        n
      ), a = De(
        a,
        n,
        e,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = xc(e), a.childLanes = pc(
        l,
        i,
        e
      ), t.memoizedState = bc, fn(null, a)) : (ce(t), zc(t, c));
    }
    var r = l.memoizedState;
    if (r !== null && (c = r.dehydrated, c !== null)) {
      if (u)
        t.flags & 256 ? (ce(t), t.flags &= -257, t = Sc(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (fe(), t.child = l.child, t.flags |= 128, t = null) : (fe(), c = a.fallback, n = t.mode, a = gu(
          { mode: "visible", children: a.children },
          n
        ), c = De(
          c,
          n,
          e,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Ye(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = xc(e), a.childLanes = pc(
          l,
          i,
          e
        ), t.memoizedState = bc, t = fn(null, a));
      else if (ce(t), ef(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var b = i.dgst;
        i = b, a = Error(d(419)), a.stack = "", a.digest = i, Wa({ value: a, source: null, stack: null }), t = Sc(
          l,
          t,
          e
        );
      } else if (_l || ca(l, t, e, !1), i = (e & l.childLanes) !== 0, _l || i) {
        if (i = hl, i !== null && (a = Uf(i, e), a !== 0 && a !== r.retryLane))
          throw r.retryLane = a, Oe(l, a), Il(i, l, a), yc;
        tf(c) || _u(), t = Sc(
          l,
          t,
          e
        );
      } else
        tf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = r.treeContext, vl = bt(
          c.nextSibling
        ), Hl = t, ll = !0, te = null, yt = !1, l !== null && Ms(t, l), t = zc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (fe(), c = a.fallback, n = t.mode, r = l.child, b = r.sibling, a = qt(r, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = r.subtreeFlags & 65011712, b !== null ? c = qt(
      b,
      c
    ) : (c = De(
      c,
      n,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, fn(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = xc(e) : (n = c.cachePool, n !== null ? (r = El._currentValue, n = n.parent !== r ? { parent: r, pool: r } : n) : n = Cs(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: n
    }), a.memoizedState = c, a.childLanes = pc(
      l,
      i,
      e
    ), t.memoizedState = bc, fn(l.child, a)) : (ce(t), e = l.child, l = e.sibling, e = qt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function zc(l, t) {
    return t = gu(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function gu(l, t) {
    return l = at(22, l, null, t), l.lanes = 0, l;
  }
  function Sc(l, t, e) {
    return Ye(t, l.child, null, e), l = zc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function $0(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Bi(l.return, t, e);
  }
  function jc(l, t, e, a, n, u) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = n, i.treeForkCount = u);
  }
  function W0(l, t, e) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Sl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, D(Sl, i), ql(l, t, a, e), a = ll ? $a : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && $0(l, e, t);
        else if (l.tag === 19)
          $0(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          l = e.alternate, l !== null && uu(l) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), jc(
          t,
          !1,
          n,
          e,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && uu(l) === null) {
            t.child = n;
            break;
          }
          l = n.sibling, n.sibling = e, e = n, n = l;
        }
        jc(
          t,
          !0,
          e,
          null,
          u,
          a
        );
        break;
      case "together":
        jc(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qt(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), re |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (ca(
          l,
          t,
          e,
          !1
        ), (e & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(d(153));
    if (t.child !== null) {
      for (l = t.child, e = qt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = qt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Ec(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Fn(l)));
  }
  function bm(l, t, e) {
    switch (t.tag) {
      case 3:
        Ql(t, t.stateNode.containerInfo), ae(t, El, l.memoizedState.cache), Re();
        break;
      case 27:
      case 5:
        Ua(t);
        break;
      case 4:
        Ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        ae(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Wi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ce(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? J0(l, t, e) : (ce(t), l = Qt(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        ce(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (ca(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), n) {
          if (a)
            return W0(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), D(Sl, Sl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, X0(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        ae(t, El, l.memoizedState.cache);
    }
    return Qt(l, t, e);
  }
  function k0(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        _l = !0;
      else {
        if (!Ec(l, e) && (t.flags & 128) === 0)
          return _l = !1, bm(
            l,
            t,
            e
          );
        _l = (l.flags & 131072) !== 0;
      }
    else
      _l = !1, ll && (t.flags & 1048576) !== 0 && As(t, $a, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = qe(t.elementType), t.type = l, typeof l == "function")
            Mi(l) ? (a = Ge(l, a), t.tag = 1, t = L0(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = gc(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === Vl) {
                t.tag = 11, t = Y0(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (n === X) {
                t.tag = 14, t = Z0(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = Rt(l) || l, Error(d(306, t, ""));
          }
        }
        return t;
      case 0:
        return gc(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, n = Ge(
          a,
          t.pendingProps
        ), L0(
          l,
          t,
          a,
          n,
          e
        );
      case 3:
        l: {
          if (Ql(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(d(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Vi(l, t), en(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, ae(t, El, a), a !== u.cache && Yi(
            t,
            [El],
            e,
            !0
          ), tn(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = K0(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== n) {
              n = mt(
                Error(d(424)),
                t
              ), Wa(n), t = K0(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, vl = bt(l.firstChild), Hl = t, ll = !0, te = null, yt = !0, e = Xs(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Re(), a === n) {
              t = Qt(
                l,
                t,
                e
              );
              break l;
            }
            ql(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return yu(l, t), l === null ? (e = cr(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : ll || (e = t.type, l = t.pendingProps, a = Uu(
          $.current
        ).createElement(e), a[Ul] = t, a[Kl] = l, Bl(a, e, l), Dl(a), t.stateNode = a) : t.memoizedState = cr(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ua(t), l === null && ll && (a = t.stateNode = nr(
          t.type,
          t.pendingProps,
          $.current
        ), Hl = t, yt = !0, n = vl, ye(t.type) ? (af = n, vl = bt(a.firstChild)) : vl = n), ql(
          l,
          t,
          t.pendingProps.children,
          e
        ), yu(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ll && ((n = a = vl) && (a = $m(
          a,
          t.type,
          t.pendingProps,
          yt
        ), a !== null ? (t.stateNode = a, Hl = t, vl = bt(a.firstChild), yt = !1, n = !0) : n = !1), n || ee(t)), Ua(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, Ic(n, u) ? a = null : i !== null && Ic(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = Fi(
          l,
          t,
          sm,
          null,
          null,
          e
        ), jn._currentValue = n), yu(l, t), ql(l, t, a, e), t.child;
      case 6:
        return l === null && ll && ((l = e = vl) && (e = Wm(
          e,
          t.pendingProps,
          yt
        ), e !== null ? (t.stateNode = e, Hl = t, vl = null, l = !0) : l = !1), l || ee(t)), null;
      case 13:
        return J0(l, t, e);
      case 4:
        return Ql(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ye(
          t,
          null,
          a,
          e
        ) : ql(l, t, a, e), t.child;
      case 11:
        return Y0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return ql(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return ql(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return ql(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, ae(t, t.type, a.value), ql(l, t, a.children, e), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, He(t), n = Cl(n), a = a(n), t.flags |= 1, ql(l, t, a, e), t.child;
      case 14:
        return Z0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return G0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return W0(l, t, e);
      case 31:
        return gm(l, t, e);
      case 22:
        return X0(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return He(t), a = Cl(El), l === null ? (n = Xi(), n === null && (n = hl, u = Zi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = { parent: a, cache: n }, wi(t), ae(t, El, n)) : ((l.lanes & e) !== 0 && (Vi(l, t), en(t, null, null, e), tn()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ae(t, El, a)) : (a = u.cache, ae(t, El, a), a !== n.cache && Yi(
          t,
          [El],
          e,
          !0
        ))), ql(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function wt(l) {
    l.flags |= 4;
  }
  function Nc(l, t, e, a, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (jd()) l.flags |= 8192;
        else
          throw Be = tu, Qi;
    } else l.flags &= -16777217;
  }
  function F0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !or(t))
      if (jd()) l.flags |= 8192;
      else
        throw Be = tu, Qi;
  }
  function bu(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Of() : 536870912, l.lanes |= t, xa |= t);
  }
  function sn(l, t) {
    if (!ll)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function yl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function xm(l, t, e) {
    var a = t.pendingProps;
    switch (Ui(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yl(t), null;
      case 1:
        return yl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Zt(El), zl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (ia(t) ? wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ci())), yl(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return l === null ? (wt(t), u !== null ? (yl(t), F0(t, u)) : (yl(t), Nc(
          t,
          n,
          null,
          a,
          e
        ))) : u ? u !== l.memoizedState ? (wt(t), yl(t), F0(t, u)) : (yl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && wt(t), yl(t), Nc(
          t,
          n,
          l,
          a,
          e
        )), null;
      case 27:
        if (Mn(t), e = $.current, n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(d(166));
            return yl(t), null;
          }
          l = C.current, ia(t) ? Os(t) : (l = nr(n, a, e), t.stateNode = l, wt(t));
        }
        return yl(t), null;
      case 5:
        if (Mn(t), n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(d(166));
            return yl(t), null;
          }
          if (u = C.current, ia(t))
            Os(t);
          else {
            var i = Uu(
              $.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[Ul] = t, u[Kl] = a;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = u;
            l: switch (Bl(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && wt(t);
          }
        }
        return yl(t), Nc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && wt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(d(166));
          if (l = $.current, ia(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, n = Hl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            l[Ul] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Jd(l.nodeValue, e)), l || ee(t, !0);
          } else
            l = Uu(l).createTextNode(
              a
            ), l[Ul] = t, t.stateNode = l;
        }
        return yl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ia(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(d(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(557));
              l[Ul] = t;
            } else
              Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), l = !1;
          } else
            e = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(d(558));
        }
        return yl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = ia(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(d(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
              n[Ul] = t;
            } else
              Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), n = !1;
          } else
            n = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return ut(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), bu(t, t.updateQueue), yl(t), null);
      case 4:
        return zl(), l === null && Jc(t.stateNode.containerInfo), yl(t), null;
      case 10:
        return Zt(t.type), yl(t), null;
      case 19:
        if (_(Sl), a = t.memoizedState, a === null) return yl(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) sn(a, !1);
          else {
            if (xl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (u = uu(l), u !== null) {
                  for (t.flags |= 128, sn(a, !1), l = u.updateQueue, t.updateQueue = l, bu(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    Ns(e, l), e = e.sibling;
                  return D(
                    Sl,
                    Sl.current & 1 | 2
                  ), ll && Bt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && Pl() > ju && (t.flags |= 128, n = !0, sn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (l = uu(u), l !== null) {
              if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, bu(t, l), sn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ll)
                return yl(t), null;
            } else
              2 * Pl() - a.renderingStartTime > ju && e !== 536870912 && (t.flags |= 128, n = !0, sn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (l = a.last, l !== null ? l.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Pl(), l.sibling = null, e = Sl.current, D(
          Sl,
          n ? e & 1 | 2 : e & 1
        ), ll && Bt(t, a.treeForkCount), l) : (yl(t), null);
      case 22:
      case 23:
        return ut(t), $i(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yl(t), e = t.updateQueue, e !== null && bu(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && _(Ce), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Zt(El), yl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function pm(l, t) {
    switch (Ui(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Zt(El), zl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Mn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ut(t), t.alternate === null)
            throw Error(d(340));
          Re();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ut(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(d(340));
          Re();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return _(Sl), null;
      case 4:
        return zl(), null;
      case 10:
        return Zt(t.type), null;
      case 22:
      case 23:
        return ut(t), $i(), l !== null && _(Ce), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Zt(El), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function I0(l, t) {
    switch (Ui(t), t.tag) {
      case 3:
        Zt(El), zl();
        break;
      case 26:
      case 27:
      case 5:
        Mn(t);
        break;
      case 4:
        zl();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        _(Sl);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        ut(t), $i(), l !== null && _(Ce);
        break;
      case 24:
        Zt(El);
    }
  }
  function dn(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create, i = e.inst;
            a = u(), i.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      cl(t, t.return, c);
    }
  }
  function se(l, t, e) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = t;
              var r = e, b = c;
              try {
                b();
              } catch (z) {
                cl(
                  n,
                  r,
                  z
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (z) {
      cl(t, t.return, z);
    }
  }
  function P0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        ws(t, e);
      } catch (a) {
        cl(l, l.return, a);
      }
    }
  }
  function ld(l, t, e) {
    e.props = Ge(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      cl(l, t, a);
    }
  }
  function rn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (n) {
      cl(l, t, n);
    }
  }
  function Ot(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          cl(l, t, n);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          cl(l, t, n);
        }
      else e.current = null;
  }
  function td(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  function _c(l, t, e) {
    try {
      var a = l.stateNode;
      Qm(a, l.type, e, t), a[Kl] = t;
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  function ed(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ye(l.type) || l.tag === 4;
  }
  function Tc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || ed(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ye(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ac(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Ht));
    else if (a !== 4 && (a === 27 && ye(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Ac(l, t, e), l = l.sibling; l !== null; )
        Ac(l, t, e), l = l.sibling;
  }
  function xu(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && ye(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (xu(l, t, e), l = l.sibling; l !== null; )
        xu(l, t, e), l = l.sibling;
  }
  function ad(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Bl(t, a, e), t[Ul] = l, t[Kl] = e;
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  var Vt = !1, Tl = !1, Mc = !1, nd = typeof WeakSet == "function" ? WeakSet : Set, Rl = null;
  function zm(l, t) {
    if (l = l.containerInfo, kc = Gu, l = ys(l), Si(l)) {
      if ("selectionStart" in l)
        var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, c = -1, r = -1, b = 0, z = 0, N = l, x = null;
            t: for (; ; ) {
              for (var p; N !== e || n !== 0 && N.nodeType !== 3 || (c = i + n), N !== u || a !== 0 && N.nodeType !== 3 || (r = i + a), N.nodeType === 3 && (i += N.nodeValue.length), (p = N.firstChild) !== null; )
                x = N, N = p;
              for (; ; ) {
                if (N === l) break t;
                if (x === e && ++b === n && (c = i), x === u && ++z === a && (r = i), (p = N.nextSibling) !== null) break;
                N = x, x = N.parentNode;
              }
              N = p;
            }
            e = c === -1 || r === -1 ? null : { start: c, end: r };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Fc = { focusedElem: l, selectionRange: e }, Gu = !1, Rl = t; Rl !== null; )
      if (t = Rl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Rl = l;
      else
        for (; Rl !== null; ) {
          switch (t = Rl, u = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (e = 0; e < l.length; e++)
                  n = l[e], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                l = void 0, e = t, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                try {
                  var U = Ge(
                    e.type,
                    n
                  );
                  l = a.getSnapshotBeforeUpdate(
                    U,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Y) {
                  cl(
                    e,
                    e.return,
                    Y
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  lf(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(d(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Rl = l;
            break;
          }
          Rl = t.return;
        }
  }
  function ud(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Kt(l, e), a & 4 && dn(5, e);
        break;
      case 1:
        if (Kt(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              cl(e, e.return, i);
            }
          else {
            var n = Ge(
              e.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                n,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              cl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && P0(e), a & 512 && rn(e, e.return);
        break;
      case 3:
        if (Kt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            ws(l, t);
          } catch (i) {
            cl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ad(e);
      case 26:
      case 5:
        Kt(l, e), t === null && a & 4 && td(e), a & 512 && rn(e, e.return);
        break;
      case 12:
        Kt(l, e);
        break;
      case 31:
        Kt(l, e), a & 4 && fd(l, e);
        break;
      case 13:
        Kt(l, e), a & 4 && sd(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Om.bind(
          null,
          e
        ), km(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Vt, !a) {
          t = t !== null && t.memoizedState !== null || Tl, n = Vt;
          var u = Tl;
          Vt = a, (Tl = t) && !u ? Jt(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : Kt(l, e), Vt = n, Tl = u;
        }
        break;
      case 30:
        break;
      default:
        Kt(l, e);
    }
  }
  function id(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, id(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ui(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var gl = null, $l = !1;
  function Lt(l, t, e) {
    for (e = e.child; e !== null; )
      cd(l, t, e), e = e.sibling;
  }
  function cd(l, t, e) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(Ha, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Tl || Ot(e, t), Lt(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Tl || Ot(e, t);
        var a = gl, n = $l;
        ye(e.type) && (gl = e.stateNode, $l = !1), Lt(
          l,
          t,
          e
        ), pn(e.stateNode), gl = a, $l = n;
        break;
      case 5:
        Tl || Ot(e, t);
      case 6:
        if (a = gl, n = $l, gl = null, Lt(
          l,
          t,
          e
        ), gl = a, $l = n, gl !== null)
          if ($l)
            try {
              (gl.nodeType === 9 ? gl.body : gl.nodeName === "HTML" ? gl.ownerDocument.body : gl).removeChild(e.stateNode);
            } catch (u) {
              cl(
                e,
                t,
                u
              );
            }
          else
            try {
              gl.removeChild(e.stateNode);
            } catch (u) {
              cl(
                e,
                t,
                u
              );
            }
        break;
      case 18:
        gl !== null && ($l ? (l = gl, Pd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ta(l)) : Pd(gl, e.stateNode));
        break;
      case 4:
        a = gl, n = $l, gl = e.stateNode.containerInfo, $l = !0, Lt(
          l,
          t,
          e
        ), gl = a, $l = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        se(2, e, t), Tl || se(4, e, t), Lt(
          l,
          t,
          e
        );
        break;
      case 1:
        Tl || (Ot(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && ld(
          e,
          t,
          a
        )), Lt(
          l,
          t,
          e
        );
        break;
      case 21:
        Lt(
          l,
          t,
          e
        );
        break;
      case 22:
        Tl = (a = Tl) || e.memoizedState !== null, Lt(
          l,
          t,
          e
        ), Tl = a;
        break;
      default:
        Lt(
          l,
          t,
          e
        );
    }
  }
  function fd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ta(l);
      } catch (e) {
        cl(t, t.return, e);
      }
    }
  }
  function sd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ta(l);
      } catch (e) {
        cl(t, t.return, e);
      }
  }
  function Sm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new nd()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new nd()), t;
      default:
        throw Error(d(435, l.tag));
    }
  }
  function pu(l, t) {
    var e = Sm(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = Dm.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function Wl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ye(c.type)) {
                gl = c.stateNode, $l = !1;
                break l;
              }
              break;
            case 5:
              gl = c.stateNode, $l = !1;
              break l;
            case 3:
            case 4:
              gl = c.stateNode.containerInfo, $l = !0;
              break l;
          }
          c = c.return;
        }
        if (gl === null) throw Error(d(160));
        cd(u, i, n), gl = null, $l = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        dd(t, l), t = t.sibling;
  }
  var Et = null;
  function dd(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Wl(t, l), kl(l), a & 4 && (se(3, l, l.return), dn(3, l), se(5, l, l.return));
        break;
      case 1:
        Wl(t, l), kl(l), a & 512 && (Tl || e === null || Ot(e, e.return)), a & 64 && Vt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Et;
        if (Wl(t, l), kl(l), a & 512 && (Tl || e === null || Ot(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ba] || u[Ul] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Bl(u, a, e), u[Ul] = l, Dl(u), a = u;
                      break l;
                    case "link":
                      var i = dr(
                        "link",
                        "href",
                        n
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), Bl(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = dr(
                        "meta",
                        "content",
                        n
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), Bl(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  u[Ul] = l, Dl(u), a = u;
                }
                l.stateNode = a;
              } else
                rr(
                  n,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = sr(
                n,
                a,
                l.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? rr(
              n,
              l.type,
              l.stateNode
            ) : sr(
              n,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && _c(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        Wl(t, l), kl(l), a & 512 && (Tl || e === null || Ot(e, e.return)), e !== null && a & 4 && _c(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (Wl(t, l), kl(l), a & 512 && (Tl || e === null || Ot(e, e.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            ke(n, "");
          } catch (U) {
            cl(l, l.return, U);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, _c(
          l,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (Mc = !0);
        break;
      case 6:
        if (Wl(t, l), kl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(d(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (U) {
            cl(l, l.return, U);
          }
        }
        break;
      case 3:
        if (qu = null, n = Et, Et = Hu(t.containerInfo), Wl(t, l), Et = n, kl(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ta(t.containerInfo);
          } catch (U) {
            cl(l, l.return, U);
          }
        Mc && (Mc = !1, rd(l));
        break;
      case 4:
        a = Et, Et = Hu(
          l.stateNode.containerInfo
        ), Wl(t, l), kl(l), Et = a;
        break;
      case 12:
        Wl(t, l), kl(l);
        break;
      case 31:
        Wl(t, l), kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 13:
        Wl(t, l), kl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Su = Pl()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null, b = Vt, z = Tl;
        if (Vt = b || n, Tl = z || r, Wl(t, l), Tl = z, Vt = b, kl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || r || Vt || Tl || Xe(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                r = e = t;
                try {
                  if (u = r.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = r.stateNode;
                    var N = r.memoizedProps.style, x = N != null && N.hasOwnProperty("display") ? N.display : null;
                    c.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (U) {
                  cl(r, r.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                r = t;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (U) {
                  cl(r, r.return, U);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                r = t;
                try {
                  var p = r.stateNode;
                  n ? lr(p, !0) : lr(r.stateNode, !1);
                } catch (U) {
                  cl(r, r.return, U);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), t = t.return;
            }
            e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, pu(l, e))));
        break;
      case 19:
        Wl(t, l), kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Wl(t, l), kl(l);
    }
  }
  function kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (ed(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(d(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = Tc(l);
            xu(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (ke(i, ""), e.flags &= -33);
            var c = Tc(l);
            xu(l, c, i);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo, b = Tc(l);
            Ac(
              l,
              b,
              r
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (z) {
        cl(l, l.return, z);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function rd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        rd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ud(l, t.alternate, t), t = t.sibling;
  }
  function Xe(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          se(4, t, t.return), Xe(t);
          break;
        case 1:
          Ot(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && ld(
            t,
            t.return,
            e
          ), Xe(t);
          break;
        case 27:
          pn(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Xe(t);
          break;
        case 22:
          t.memoizedState === null && Xe(t);
          break;
        case 30:
          Xe(t);
          break;
        default:
          Xe(t);
      }
      l = l.sibling;
    }
  }
  function Jt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = l, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Jt(
            n,
            u,
            e
          ), dn(4, u);
          break;
        case 1:
          if (Jt(
            n,
            u,
            e
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (b) {
              cl(a, a.return, b);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  Qs(r[n], c);
            } catch (b) {
              cl(a, a.return, b);
            }
          }
          e && i & 64 && P0(u), rn(u, u.return);
          break;
        case 27:
          ad(u);
        case 26:
        case 5:
          Jt(
            n,
            u,
            e
          ), e && a === null && i & 4 && td(u), rn(u, u.return);
          break;
        case 12:
          Jt(
            n,
            u,
            e
          );
          break;
        case 31:
          Jt(
            n,
            u,
            e
          ), e && i & 4 && fd(n, u);
          break;
        case 13:
          Jt(
            n,
            u,
            e
          ), e && i & 4 && sd(n, u);
          break;
        case 22:
          u.memoizedState === null && Jt(
            n,
            u,
            e
          ), rn(u, u.return);
          break;
        case 30:
          break;
        default:
          Jt(
            n,
            u,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Oc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && ka(e));
  }
  function Dc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ka(l));
  }
  function Nt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        od(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function od(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Nt(
          l,
          t,
          e,
          a
        ), n & 2048 && dn(9, t);
        break;
      case 1:
        Nt(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        Nt(
          l,
          t,
          e,
          a
        ), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ka(l)));
        break;
      case 12:
        if (n & 2048) {
          Nt(
            l,
            t,
            e,
            a
          ), l = t.stateNode;
          try {
            var u = t.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (r) {
            cl(t, t.return, r);
          }
        } else
          Nt(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        Nt(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        Nt(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Nt(
          l,
          t,
          e,
          a
        ) : on(l, t) : u._visibility & 2 ? Nt(
          l,
          t,
          e,
          a
        ) : (u._visibility |= 2, ya(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Oc(i, t);
        break;
      case 24:
        Nt(
          l,
          t,
          e,
          a
        ), n & 2048 && Dc(t.alternate, t);
        break;
      default:
        Nt(
          l,
          t,
          e,
          a
        );
    }
  }
  function ya(l, t, e, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = l, i = t, c = e, r = a, b = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ya(
            u,
            i,
            c,
            r,
            n
          ), dn(8, i);
          break;
        case 23:
          break;
        case 22:
          var z = i.stateNode;
          i.memoizedState !== null ? z._visibility & 2 ? ya(
            u,
            i,
            c,
            r,
            n
          ) : on(
            u,
            i
          ) : (z._visibility |= 2, ya(
            u,
            i,
            c,
            r,
            n
          )), n && b & 2048 && Oc(
            i.alternate,
            i
          );
          break;
        case 24:
          ya(
            u,
            i,
            c,
            r,
            n
          ), n && b & 2048 && Dc(i.alternate, i);
          break;
        default:
          ya(
            u,
            i,
            c,
            r,
            n
          );
      }
      t = t.sibling;
    }
  }
  function on(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            on(e, a), n & 2048 && Oc(
              a.alternate,
              a
            );
            break;
          case 24:
            on(e, a), n & 2048 && Dc(a.alternate, a);
            break;
          default:
            on(e, a);
        }
        t = t.sibling;
      }
  }
  var mn = 8192;
  function ga(l, t, e) {
    if (l.subtreeFlags & mn)
      for (l = l.child; l !== null; )
        md(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function md(l, t, e) {
    switch (l.tag) {
      case 26:
        ga(
          l,
          t,
          e
        ), l.flags & mn && l.memoizedState !== null && f1(
          e,
          Et,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ga(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Et;
        Et = Hu(l.stateNode.containerInfo), ga(
          l,
          t,
          e
        ), Et = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = mn, mn = 16777216, ga(
          l,
          t,
          e
        ), mn = a) : ga(
          l,
          t,
          e
        ));
        break;
      default:
        ga(
          l,
          t,
          e
        );
    }
  }
  function hd(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Rl = a, yd(
            a,
            l
          );
        }
      hd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        vd(l), l = l.sibling;
  }
  function vd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        hn(l), l.flags & 2048 && se(9, l, l.return);
        break;
      case 3:
        hn(l);
        break;
      case 12:
        hn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, zu(l)) : hn(l);
        break;
      default:
        hn(l);
    }
  }
  function zu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Rl = a, yd(
            a,
            l
          );
        }
      hd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          se(8, t, t.return), zu(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, zu(t));
          break;
        default:
          zu(t);
      }
      l = l.sibling;
    }
  }
  function yd(l, t) {
    for (; Rl !== null; ) {
      var e = Rl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          se(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ka(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Rl = a;
      else
        l: for (e = l; Rl !== null; ) {
          a = Rl;
          var n = a.sibling, u = a.return;
          if (id(a), a === e) {
            Rl = null;
            break l;
          }
          if (n !== null) {
            n.return = u, Rl = n;
            break l;
          }
          Rl = u;
        }
    }
  }
  var jm = {
    getCacheForType: function(l) {
      var t = Cl(El), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Cl(El).controller.signal;
    }
  }, Em = typeof WeakMap == "function" ? WeakMap : Map, al = 0, hl = null, W = null, F = 0, il = 0, it = null, de = !1, ba = !1, Rc = !1, $t = 0, xl = 0, re = 0, Qe = 0, Uc = 0, ct = 0, xa = 0, vn = null, Fl = null, Hc = !1, Su = 0, gd = 0, ju = 1 / 0, Eu = null, oe = null, Al = 0, me = null, pa = null, Wt = 0, Cc = 0, qc = null, bd = null, yn = 0, Bc = null;
  function ft() {
    return (al & 2) !== 0 && F !== 0 ? F & -F : S.T !== null ? wc() : Hf();
  }
  function xd() {
    if (ct === 0)
      if ((F & 536870912) === 0 || ll) {
        var l = Rn;
        Rn <<= 1, (Rn & 3932160) === 0 && (Rn = 262144), ct = l;
      } else ct = 536870912;
    return l = nt.current, l !== null && (l.flags |= 32), ct;
  }
  function Il(l, t, e) {
    (l === hl && (il === 2 || il === 9) || l.cancelPendingCommit !== null) && (za(l, 0), he(
      l,
      F,
      ct,
      !1
    )), qa(l, e), ((al & 2) === 0 || l !== hl) && (l === hl && ((al & 2) === 0 && (Qe |= e), xl === 4 && he(
      l,
      F,
      ct,
      !1
    )), Dt(l));
  }
  function pd(l, t, e) {
    if ((al & 6) !== 0) throw Error(d(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ca(l, t), n = a ? Tm(l, t) : Zc(l, t, !0), u = a;
    do {
      if (n === 0) {
        ba && !a && he(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, u && !Nm(e)) {
          n = Zc(l, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, l.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              n = vn;
              var r = c.current.memoizedState.isDehydrated;
              if (r && (za(c, i).flags |= 256), i = Zc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Rc && !r) {
                  c.errorRecoveryDisabledLanes |= u, Qe |= u, n = 4;
                  break l;
                }
                u = Fl, Fl = n, u !== null && (Fl === null ? Fl = u : Fl.push.apply(
                  Fl,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          za(l, 0), he(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, u = n, u) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              he(
                a,
                t,
                ct,
                !de
              );
              break l;
            case 2:
              Fl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && (n = Su + 300 - Pl(), 10 < n)) {
            if (he(
              a,
              t,
              ct,
              !de
            ), Hn(a, 0, !0) !== 0) break l;
            Wt = t, a.timeoutHandle = Fd(
              zd.bind(
                null,
                a,
                e,
                Fl,
                Eu,
                Hc,
                t,
                ct,
                Qe,
                xa,
                de,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break l;
          }
          zd(
            a,
            e,
            Fl,
            Eu,
            Hc,
            t,
            ct,
            Qe,
            xa,
            de,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dt(l);
  }
  function zd(l, t, e, a, n, u, i, c, r, b, z, N, x, p) {
    if (l.timeoutHandle = -1, N = t.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht
      }, md(
        t,
        u,
        N
      );
      var U = (u & 62914560) === u ? Su - Pl() : (u & 4194048) === u ? gd - Pl() : 0;
      if (U = s1(
        N,
        U
      ), U !== null) {
        Wt = u, l.cancelPendingCommit = U(
          Md.bind(
            null,
            l,
            t,
            u,
            e,
            a,
            n,
            i,
            c,
            r,
            z,
            N,
            null,
            x,
            p
          )
        ), he(l, u, i, !b);
        return;
      }
    }
    Md(
      l,
      t,
      u,
      e,
      a,
      n,
      i,
      c,
      r
    );
  }
  function Nm(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!et(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null)
        e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function he(l, t, e, a) {
    t &= ~Uc, t &= ~Qe, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - tt(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Df(l, e, t);
  }
  function Nu() {
    return (al & 6) === 0 ? (gn(0), !1) : !0;
  }
  function Yc() {
    if (W !== null) {
      if (il === 0)
        var l = W.return;
      else
        l = W, Yt = Ue = null, lc(l), ra = null, Ia = 0, l = W;
      for (; l !== null; )
        I0(l.alternate, l), l = l.return;
      W = null;
    }
  }
  function za(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Lm(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Wt = 0, Yc(), hl = l, W = e = qt(l.current, null), F = t, il = 0, it = null, de = !1, ba = Ca(l, t), Rc = !1, xa = ct = Uc = Qe = re = xl = 0, Fl = vn = null, Hc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - tt(a), u = 1 << n;
        t |= l[n], a &= ~u;
      }
    return $t = t, Kn(), e;
  }
  function Sd(l, t) {
    L = null, S.H = cn, t === da || t === lu ? (t = Ys(), il = 3) : t === Qi ? (t = Ys(), il = 4) : il = t === yc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, it = t, W === null && (xl = 1, hu(
      l,
      mt(t, l.current)
    ));
  }
  function jd() {
    var l = nt.current;
    return l === null ? !0 : (F & 4194048) === F ? gt === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === gt : !1;
  }
  function Ed() {
    var l = S.H;
    return S.H = cn, l === null ? cn : l;
  }
  function Nd() {
    var l = S.A;
    return S.A = jm, l;
  }
  function _u() {
    xl = 4, de || (F & 4194048) !== F && nt.current !== null || (ba = !0), (re & 134217727) === 0 && (Qe & 134217727) === 0 || hl === null || he(
      hl,
      F,
      ct,
      !1
    );
  }
  function Zc(l, t, e) {
    var a = al;
    al |= 2;
    var n = Ed(), u = Nd();
    (hl !== l || F !== t) && (Eu = null, za(l, t)), t = !1;
    var i = xl;
    l: do
      try {
        if (il !== 0 && W !== null) {
          var c = W, r = it;
          switch (il) {
            case 8:
              Yc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              nt.current === null && (t = !0);
              var b = il;
              if (il = 0, it = null, Sa(l, c, r, b), e && ba) {
                i = 0;
                break l;
              }
              break;
            default:
              b = il, il = 0, it = null, Sa(l, c, r, b);
          }
        }
        _m(), i = xl;
        break;
      } catch (z) {
        Sd(l, z);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Ue = null, al = a, S.H = n, S.A = u, W === null && (hl = null, F = 0, Kn()), i;
  }
  function _m() {
    for (; W !== null; ) _d(W);
  }
  function Tm(l, t) {
    var e = al;
    al |= 2;
    var a = Ed(), n = Nd();
    hl !== l || F !== t ? (Eu = null, ju = Pl() + 500, za(l, t)) : ba = Ca(
      l,
      t
    );
    l: do
      try {
        if (il !== 0 && W !== null) {
          t = W;
          var u = it;
          t: switch (il) {
            case 1:
              il = 0, it = null, Sa(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (qs(u)) {
                il = 0, it = null, Td(t);
                break;
              }
              t = function() {
                il !== 2 && il !== 9 || hl !== l || (il = 7), Dt(l);
              }, u.then(t, t);
              break l;
            case 3:
              il = 7;
              break l;
            case 4:
              il = 5;
              break l;
            case 7:
              qs(u) ? (il = 0, it = null, Td(t)) : (il = 0, it = null, Sa(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (W.tag) {
                case 26:
                  i = W.memoizedState;
                case 5:
                case 27:
                  var c = W;
                  if (i ? or(i) : c.stateNode.complete) {
                    il = 0, it = null;
                    var r = c.sibling;
                    if (r !== null) W = r;
                    else {
                      var b = c.return;
                      b !== null ? (W = b, Tu(b)) : W = null;
                    }
                    break t;
                  }
              }
              il = 0, it = null, Sa(l, t, u, 5);
              break;
            case 6:
              il = 0, it = null, Sa(l, t, u, 6);
              break;
            case 8:
              Yc(), xl = 6;
              break l;
            default:
              throw Error(d(462));
          }
        }
        Am();
        break;
      } catch (z) {
        Sd(l, z);
      }
    while (!0);
    return Yt = Ue = null, S.H = a, S.A = n, al = e, W !== null ? 0 : (hl = null, F = 0, Kn(), xl);
  }
  function Am() {
    for (; W !== null && !kr(); )
      _d(W);
  }
  function _d(l) {
    var t = k0(l.alternate, l, $t);
    l.memoizedProps = l.pendingProps, t === null ? Tu(l) : W = t;
  }
  function Td(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = V0(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          F
        );
        break;
      case 11:
        t = V0(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          F
        );
        break;
      case 5:
        lc(t);
      default:
        I0(e, t), t = W = Ns(t, $t), t = k0(e, t, $t);
    }
    l.memoizedProps = l.pendingProps, t === null ? Tu(l) : W = t;
  }
  function Sa(l, t, e, a) {
    Yt = Ue = null, lc(t), ra = null, Ia = 0;
    var n = t.return;
    try {
      if (ym(
        l,
        n,
        t,
        e,
        F
      )) {
        xl = 1, hu(
          l,
          mt(e, l.current)
        ), W = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw W = n, u;
      xl = 1, hu(
        l,
        mt(e, l.current)
      ), W = null;
      return;
    }
    t.flags & 32768 ? (ll || a === 1 ? l = !0 : ba || (F & 536870912) !== 0 ? l = !1 : (de = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = nt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ad(t, l)) : Tu(t);
  }
  function Tu(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Ad(
          t,
          de
        );
        return;
      }
      l = t.return;
      var e = xm(
        t.alternate,
        t,
        $t
      );
      if (e !== null) {
        W = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        W = t;
        return;
      }
      W = t = l;
    } while (t !== null);
    xl === 0 && (xl = 5);
  }
  function Ad(l, t) {
    do {
      var e = pm(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, W = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        W = l;
        return;
      }
      W = l = e;
    } while (l !== null);
    xl = 6, W = null;
  }
  function Md(l, t, e, a, n, u, i, c, r) {
    l.cancelPendingCommit = null;
    do
      Au();
    while (Al !== 0);
    if ((al & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === l.current) throw Error(d(177));
      if (u = t.lanes | t.childLanes, u |= Ti, io(
        l,
        e,
        u,
        i,
        c,
        r
      ), l === hl && (W = hl = null, F = 0), pa = t, me = l, Wt = e, Cc = u, qc = n, bd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rm(On, function() {
        return Hd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, n = M.p, M.p = 2, i = al, al |= 4;
        try {
          zm(l, t, e);
        } finally {
          al = i, M.p = n, S.T = a;
        }
      }
      Al = 1, Od(), Dd(), Rd();
    }
  }
  function Od() {
    if (Al === 1) {
      Al = 0;
      var l = me, t = pa, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = S.T, S.T = null;
        var a = M.p;
        M.p = 2;
        var n = al;
        al |= 4;
        try {
          dd(t, l);
          var u = Fc, i = ys(l.containerInfo), c = u.focusedElem, r = u.selectionRange;
          if (i !== c && c && c.ownerDocument && vs(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && Si(c)) {
              var b = r.start, z = r.end;
              if (z === void 0 && (z = b), "selectionStart" in c)
                c.selectionStart = b, c.selectionEnd = Math.min(
                  z,
                  c.value.length
                );
              else {
                var N = c.ownerDocument || document, x = N && N.defaultView || window;
                if (x.getSelection) {
                  var p = x.getSelection(), U = c.textContent.length, Y = Math.min(r.start, U), ol = r.end === void 0 ? Y : Math.min(r.end, U);
                  !p.extend && Y > ol && (i = ol, ol = Y, Y = i);
                  var v = hs(
                    c,
                    Y
                  ), o = hs(
                    c,
                    ol
                  );
                  if (v && o && (p.rangeCount !== 1 || p.anchorNode !== v.node || p.anchorOffset !== v.offset || p.focusNode !== o.node || p.focusOffset !== o.offset)) {
                    var g = N.createRange();
                    g.setStart(v.node, v.offset), p.removeAllRanges(), Y > ol ? (p.addRange(g), p.extend(o.node, o.offset)) : (g.setEnd(o.node, o.offset), p.addRange(g));
                  }
                }
              }
            }
            for (N = [], p = c; p = p.parentNode; )
              p.nodeType === 1 && N.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < N.length; c++) {
              var j = N[c];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          Gu = !!kc, Fc = kc = null;
        } finally {
          al = n, M.p = a, S.T = e;
        }
      }
      l.current = t, Al = 2;
    }
  }
  function Dd() {
    if (Al === 2) {
      Al = 0;
      var l = me, t = pa, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = S.T, S.T = null;
        var a = M.p;
        M.p = 2;
        var n = al;
        al |= 4;
        try {
          ud(l, t.alternate, t);
        } finally {
          al = n, M.p = a, S.T = e;
        }
      }
      Al = 3;
    }
  }
  function Rd() {
    if (Al === 4 || Al === 3) {
      Al = 0, Fr();
      var l = me, t = pa, e = Wt, a = bd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Al = 5 : (Al = 0, pa = me = null, Ud(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (oe = null), ai(e), t = t.stateNode, lt && typeof lt.onCommitFiberRoot == "function")
        try {
          lt.onCommitFiberRoot(
            Ha,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = S.T, n = M.p, M.p = 2, S.T = null;
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          S.T = t, M.p = n;
        }
      }
      (Wt & 3) !== 0 && Au(), Dt(l), n = l.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? l === Bc ? yn++ : (yn = 0, Bc = l) : yn = 0, gn(0);
    }
  }
  function Ud(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ka(t)));
  }
  function Au() {
    return Od(), Dd(), Rd(), Hd();
  }
  function Hd() {
    if (Al !== 5) return !1;
    var l = me, t = Cc;
    Cc = 0;
    var e = ai(Wt), a = S.T, n = M.p;
    try {
      M.p = 32 > e ? 32 : e, S.T = null, e = qc, qc = null;
      var u = me, i = Wt;
      if (Al = 0, pa = me = null, Wt = 0, (al & 6) !== 0) throw Error(d(331));
      var c = al;
      if (al |= 4, vd(u.current), od(
        u,
        u.current,
        i,
        e
      ), al = c, gn(0, !1), lt && typeof lt.onPostCommitFiberRoot == "function")
        try {
          lt.onPostCommitFiberRoot(Ha, u);
        } catch {
        }
      return !0;
    } finally {
      M.p = n, S.T = a, Ud(l, t);
    }
  }
  function Cd(l, t, e) {
    t = mt(e, t), t = vc(l.stateNode, t, 2), l = ie(l, t, 2), l !== null && (qa(l, 2), Dt(l));
  }
  function cl(l, t, e) {
    if (l.tag === 3)
      Cd(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Cd(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (oe === null || !oe.has(a))) {
            l = mt(e, l), e = q0(2), a = ie(t, e, 2), a !== null && (B0(
              e,
              a,
              t,
              l
            ), qa(a, 2), Dt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Em();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(e) || (Rc = !0, n.add(e), l = Mm.bind(null, l, t, e), t.then(l, l));
  }
  function Mm(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, hl === l && (F & e) === e && (xl === 4 || xl === 3 && (F & 62914560) === F && 300 > Pl() - Su ? (al & 2) === 0 && za(l, 0) : Uc |= e, xa === F && (xa = 0)), Dt(l);
  }
  function qd(l, t) {
    t === 0 && (t = Of()), l = Oe(l, t), l !== null && (qa(l, t), Dt(l));
  }
  function Om(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), qd(l, e);
  }
  function Dm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    a !== null && a.delete(t), qd(l, e);
  }
  function Rm(l, t) {
    return Pu(l, t);
  }
  var Mu = null, ja = null, Xc = !1, Ou = !1, Qc = !1, ve = 0;
  function Dt(l) {
    l !== ja && l.next === null && (ja === null ? Mu = ja = l : ja = ja.next = l), Ou = !0, Xc || (Xc = !0, Hm());
  }
  function gn(l, t) {
    if (!Qc && Ou) {
      Qc = !0;
      do
        for (var e = !1, a = Mu; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - tt(42 | l) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Gd(a, u));
          } else
            u = F, u = Hn(
              a,
              a === hl ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ca(a, u) || (e = !0, Gd(a, u));
          a = a.next;
        }
      while (e);
      Qc = !1;
    }
  }
  function Um() {
    Bd();
  }
  function Bd() {
    Ou = Xc = !1;
    var l = 0;
    ve !== 0 && Vm() && (l = ve);
    for (var t = Pl(), e = null, a = Mu; a !== null; ) {
      var n = a.next, u = Yd(a, t);
      u === 0 ? (a.next = null, e === null ? Mu = n : e.next = n, n === null && (ja = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (Ou = !0)), a = n;
    }
    Al !== 0 && Al !== 5 || gn(l), ve !== 0 && (ve = 0);
  }
  function Yd(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - tt(u), c = 1 << i, r = n[i];
      r === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = uo(c, t)) : r <= t && (l.expiredLanes |= c), u &= ~c;
    }
    if (t = hl, e = F, e = Hn(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (il === 2 || il === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && li(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ca(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && li(a), ai(e)) {
        case 2:
        case 8:
          e = Af;
          break;
        case 32:
          e = On;
          break;
        case 268435456:
          e = Mf;
          break;
        default:
          e = On;
      }
      return a = Zd.bind(null, l), e = Pu(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && li(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Zd(l, t) {
    if (Al !== 0 && Al !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Au() && l.callbackNode !== e)
      return null;
    var a = F;
    return a = Hn(
      l,
      l === hl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (pd(l, a, t), Yd(l, Pl()), l.callbackNode != null && l.callbackNode === e ? Zd.bind(null, l) : null);
  }
  function Gd(l, t) {
    if (Au()) return null;
    pd(l, t, !0);
  }
  function Hm() {
    Km(function() {
      (al & 6) !== 0 ? Pu(
        Tf,
        Um
      ) : Bd();
    });
  }
  function wc() {
    if (ve === 0) {
      var l = fa;
      l === 0 && (l = Dn, Dn <<= 1, (Dn & 261888) === 0 && (Dn = 256)), ve = l;
    }
    return ve;
  }
  function Xd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Yn("" + l);
  }
  function Qd(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Cm(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = Xd(
        (n[Kl] || null).action
      ), i = a.submitter;
      i && (t = (t = i[Kl] || null) ? Xd(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var c = new Qn(
        "action",
        "action",
        null,
        a,
        n
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (ve !== 0) {
                  var r = i ? Qd(n, i) : new FormData(n);
                  sc(
                    e,
                    {
                      pending: !0,
                      data: r,
                      method: n.method,
                      action: u
                    },
                    null,
                    r
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), r = i ? Qd(n, i) : new FormData(n), sc(
                  e,
                  {
                    pending: !0,
                    data: r,
                    method: n.method,
                    action: u
                  },
                  u,
                  r
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Vc = 0; Vc < _i.length; Vc++) {
    var Lc = _i[Vc], qm = Lc.toLowerCase(), Bm = Lc[0].toUpperCase() + Lc.slice(1);
    jt(
      qm,
      "on" + Bm
    );
  }
  jt(xs, "onAnimationEnd"), jt(ps, "onAnimationIteration"), jt(zs, "onAnimationStart"), jt("dblclick", "onDoubleClick"), jt("focusin", "onFocus"), jt("focusout", "onBlur"), jt(Po, "onTransitionRun"), jt(lm, "onTransitionStart"), jt(tm, "onTransitionCancel"), jt(Ss, "onTransitionEnd"), $e("onMouseEnter", ["mouseout", "mouseover"]), $e("onMouseLeave", ["mouseout", "mouseover"]), $e("onPointerEnter", ["pointerout", "pointerover"]), $e("onPointerLeave", ["pointerout", "pointerover"]), _e(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _e(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _e("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _e(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _e(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _e(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ym = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn)
  );
  function wd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], r = c.instance, b = c.currentTarget;
            if (c = c.listener, r !== u && n.isPropagationStopped())
              break l;
            u = c, n.currentTarget = b;
            try {
              u(n);
            } catch (z) {
              Ln(z);
            }
            n.currentTarget = null, u = r;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], r = c.instance, b = c.currentTarget, c = c.listener, r !== u && n.isPropagationStopped())
              break l;
            u = c, n.currentTarget = b;
            try {
              u(n);
            } catch (z) {
              Ln(z);
            }
            n.currentTarget = null, u = r;
          }
      }
    }
  }
  function k(l, t) {
    var e = t[ni];
    e === void 0 && (e = t[ni] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (Vd(t, l, 2, !1), e.add(a));
  }
  function Kc(l, t, e) {
    var a = 0;
    t && (a |= 4), Vd(
      e,
      l,
      a,
      t
    );
  }
  var Du = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(l) {
    if (!l[Du]) {
      l[Du] = !0, Bf.forEach(function(e) {
        e !== "selectionchange" && (Ym.has(e) || Kc(e, !1, l), Kc(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Du] || (t[Du] = !0, Kc("selectionchange", !1, t));
    }
  }
  function Vd(l, t, e, a) {
    switch (xr(t)) {
      case 2:
        var n = o1;
        break;
      case 8:
        n = m1;
        break;
      default:
        n = sf;
    }
    e = n.bind(
      null,
      t,
      e,
      l
    ), n = void 0, !mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, e, !0) : n !== void 0 ? l.addEventListener(t, e, {
      passive: n
    }) : l.addEventListener(t, e, !1);
  }
  function $c(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var r = i.tag;
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = Le(c), i === null) return;
            if (r = i.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              a = u = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Wf(function() {
      var b = u, z = ri(e), N = [];
      l: {
        var x = js.get(l);
        if (x !== void 0) {
          var p = Qn, U = l;
          switch (l) {
            case "keypress":
              if (Gn(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = Do;
              break;
            case "focusin":
              U = "focus", p = gi;
              break;
            case "focusout":
              U = "blur", p = gi;
              break;
            case "beforeblur":
            case "afterblur":
              p = gi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = If;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = xo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Ho;
              break;
            case xs:
            case ps:
            case zs:
              p = So;
              break;
            case Ss:
              p = qo;
              break;
            case "scroll":
            case "scrollend":
              p = go;
              break;
            case "wheel":
              p = Yo;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Eo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = ls;
              break;
            case "toggle":
            case "beforetoggle":
              p = Go;
          }
          var Y = (t & 4) !== 0, ol = !Y && (l === "scroll" || l === "scrollend"), v = Y ? x !== null ? x + "Capture" : null : x;
          Y = [];
          for (var o = b, g; o !== null; ) {
            var j = o;
            if (g = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || g === null || v === null || (j = Za(o, v), j != null && Y.push(
              xn(o, j, g)
            )), ol) break;
            o = o.return;
          }
          0 < Y.length && (x = new p(
            x,
            U,
            null,
            e,
            z
          ), N.push({ event: x, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (x = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", x && e !== di && (U = e.relatedTarget || e.fromElement) && (Le(U) || U[Ve]))
            break l;
          if ((p || x) && (x = z.window === z ? z : (x = z.ownerDocument) ? x.defaultView || x.parentWindow : window, p ? (U = e.relatedTarget || e.toElement, p = b, U = U ? Le(U) : null, U !== null && (ol = H(U), Y = U.tag, U !== ol || Y !== 5 && Y !== 27 && Y !== 6) && (U = null)) : (p = null, U = b), p !== U)) {
            if (Y = If, j = "onMouseLeave", v = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (Y = ls, j = "onPointerLeave", v = "onPointerEnter", o = "pointer"), ol = p == null ? x : Ya(p), g = U == null ? x : Ya(U), x = new Y(
              j,
              o + "leave",
              p,
              e,
              z
            ), x.target = ol, x.relatedTarget = g, j = null, Le(z) === b && (Y = new Y(
              v,
              o + "enter",
              U,
              e,
              z
            ), Y.target = g, Y.relatedTarget = ol, j = Y), ol = j, p && U)
              t: {
                for (Y = Zm, v = p, o = U, g = 0, j = v; j; j = Y(j))
                  g++;
                j = 0;
                for (var B = o; B; B = Y(B))
                  j++;
                for (; 0 < g - j; )
                  v = Y(v), g--;
                for (; 0 < j - g; )
                  o = Y(o), j--;
                for (; g--; ) {
                  if (v === o || o !== null && v === o.alternate) {
                    Y = v;
                    break t;
                  }
                  v = Y(v), o = Y(o);
                }
                Y = null;
              }
            else Y = null;
            p !== null && Ld(
              N,
              x,
              p,
              Y,
              !1
            ), U !== null && ol !== null && Ld(
              N,
              ol,
              U,
              Y,
              !0
            );
          }
        }
        l: {
          if (x = b ? Ya(b) : window, p = x.nodeName && x.nodeName.toLowerCase(), p === "select" || p === "input" && x.type === "file")
            var tl = fs;
          else if (is(x))
            if (ss)
              tl = ko;
            else {
              tl = $o;
              var q = Jo;
            }
          else
            p = x.nodeName, !p || p.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? b && si(b.elementType) && (tl = fs) : tl = Wo;
          if (tl && (tl = tl(l, b))) {
            cs(
              N,
              tl,
              e,
              z
            );
            break l;
          }
          q && q(l, x, b), l === "focusout" && b && x.type === "number" && b.memoizedProps.value != null && fi(x, "number", x.value);
        }
        switch (q = b ? Ya(b) : window, l) {
          case "focusin":
            (is(q) || q.contentEditable === "true") && (la = q, ji = b, Ja = null);
            break;
          case "focusout":
            Ja = ji = la = null;
            break;
          case "mousedown":
            Ei = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ei = !1, gs(N, e, z);
            break;
          case "selectionchange":
            if (Io) break;
          case "keydown":
          case "keyup":
            gs(N, e, z);
        }
        var K;
        if (xi)
          l: {
            switch (l) {
              case "compositionstart":
                var I = "onCompositionStart";
                break l;
              case "compositionend":
                I = "onCompositionEnd";
                break l;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break l;
            }
            I = void 0;
          }
        else
          Pe ? ns(l, e) && (I = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (I = "onCompositionStart");
        I && (ts && e.locale !== "ko" && (Pe || I !== "onCompositionStart" ? I === "onCompositionEnd" && Pe && (K = kf()) : (Pt = z, hi = "value" in Pt ? Pt.value : Pt.textContent, Pe = !0)), q = Ru(b, I), 0 < q.length && (I = new Pf(
          I,
          l,
          null,
          e,
          z
        ), N.push({ event: I, listeners: q }), K ? I.data = K : (K = us(e), K !== null && (I.data = K)))), (K = Qo ? wo(l, e) : Vo(l, e)) && (I = Ru(b, "onBeforeInput"), 0 < I.length && (q = new Pf(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          z
        ), N.push({
          event: q,
          listeners: I
        }), q.data = K)), Cm(
          N,
          l,
          b,
          e,
          z
        );
      }
      wd(N, t);
    });
  }
  function xn(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Ru(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Za(l, e), n != null && a.unshift(
        xn(l, n, u)
      ), n = Za(l, t), n != null && a.push(
        xn(l, n, u)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Zm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ld(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, r = c.alternate, b = c.stateNode;
      if (c = c.tag, r !== null && r === a) break;
      c !== 5 && c !== 26 && c !== 27 || b === null || (r = b, n ? (b = Za(e, u), b != null && i.unshift(
        xn(e, b, r)
      )) : n || (b = Za(e, u), b != null && i.push(
        xn(e, b, r)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Gm = /\r\n?/g, Xm = /\u0000|\uFFFD/g;
  function Kd(l) {
    return (typeof l == "string" ? l : "" + l).replace(Gm, `
`).replace(Xm, "");
  }
  function Jd(l, t) {
    return t = Kd(t), Kd(l) === t;
  }
  function rl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ke(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ke(l, "" + a);
        break;
      case "className":
        qn(l, "class", a);
        break;
      case "tabIndex":
        qn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qn(l, e, a);
        break;
      case "style":
        Jf(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          qn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Yn("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (e === "formAction" ? (t !== "input" && rl(l, t, "name", n.name, n, null), rl(
            l,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), rl(
            l,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), rl(
            l,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (rl(l, t, "encType", n.encType, n, null), rl(l, t, "method", n.method, n, null), rl(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Yn("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "onScroll":
        a != null && k("scroll", l);
        break;
      case "onScrollEnd":
        a != null && k("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        e = Yn("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        k("beforetoggle", l), k("toggle", l), Cn(l, "popover", a);
        break;
      case "xlinkActuate":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Cn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = vo.get(e) || e, Cn(l, e, a));
    }
  }
  function Wc(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        Jf(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ke(l, a) : (typeof a == "number" || typeof a == "bigint") && ke(l, "" + a);
        break;
      case "onScroll":
        a != null && k("scroll", l);
        break;
      case "onScrollEnd":
        a != null && k("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Yf.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[Kl] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Cn(l, e, a);
          }
    }
  }
  function Bl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        k("error", l), k("load", l);
        var a = !1, n = !1, u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  rl(l, t, u, i, e, null);
              }
          }
        n && rl(l, t, "srcSet", e.srcSet, e, null), a && rl(l, t, "src", e.src, e, null);
        return;
      case "input":
        k("invalid", l);
        var c = u = i = n = null, r = null, b = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var z = e[a];
            if (z != null)
              switch (a) {
                case "name":
                  n = z;
                  break;
                case "type":
                  i = z;
                  break;
                case "checked":
                  r = z;
                  break;
                case "defaultChecked":
                  b = z;
                  break;
                case "value":
                  u = z;
                  break;
                case "defaultValue":
                  c = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(d(137, t));
                  break;
                default:
                  rl(l, t, a, z, e, null);
              }
          }
        wf(
          l,
          u,
          c,
          r,
          b,
          i,
          n,
          !1
        );
        return;
      case "select":
        k("invalid", l), a = i = u = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (c = e[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                rl(l, t, n, c, e, null);
            }
        t = u, e = i, l.multiple = !!a, t != null ? We(l, !!a, t, !1) : e != null && We(l, !!a, e, !0);
        return;
      case "textarea":
        k("invalid", l), u = n = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(d(91));
                break;
              default:
                rl(l, t, i, c, e, null);
            }
        Lf(l, a, n, u);
        return;
      case "option":
        for (r in e)
          e.hasOwnProperty(r) && (a = e[r], a != null) && (r === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : rl(l, t, r, a, e, null));
        return;
      case "dialog":
        k("beforetoggle", l), k("toggle", l), k("cancel", l), k("close", l);
        break;
      case "iframe":
      case "object":
        k("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bn.length; a++)
          k(bn[a], l);
        break;
      case "image":
        k("error", l), k("load", l);
        break;
      case "details":
        k("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        k("error", l), k("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (b in e)
          if (e.hasOwnProperty(b) && (a = e[b], a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                rl(l, t, b, a, e, null);
            }
        return;
      default:
        if (si(t)) {
          for (z in e)
            e.hasOwnProperty(z) && (a = e[z], a !== void 0 && Wc(
              l,
              t,
              z,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && rl(l, t, c, a, e, null));
  }
  function Qm(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, c = null, r = null, b = null, z = null;
        for (p in e) {
          var N = e[p];
          if (e.hasOwnProperty(p) && N != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = N;
              default:
                a.hasOwnProperty(p) || rl(l, t, p, null, a, N);
            }
        }
        for (var x in a) {
          var p = a[x];
          if (N = e[x], a.hasOwnProperty(x) && (p != null || N != null))
            switch (x) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                b = p;
                break;
              case "defaultChecked":
                z = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                c = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(d(137, t));
                break;
              default:
                p !== N && rl(
                  l,
                  t,
                  x,
                  p,
                  a,
                  N
                );
            }
        }
        ci(
          l,
          i,
          c,
          r,
          b,
          z,
          u,
          n
        );
        return;
      case "select":
        p = i = c = x = null;
        for (u in e)
          if (r = e[u], e.hasOwnProperty(u) && r != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                p = r;
              default:
                a.hasOwnProperty(u) || rl(
                  l,
                  t,
                  u,
                  null,
                  a,
                  r
                );
            }
        for (n in a)
          if (u = a[n], r = e[n], a.hasOwnProperty(n) && (u != null || r != null))
            switch (n) {
              case "value":
                x = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== r && rl(
                  l,
                  t,
                  n,
                  u,
                  a,
                  r
                );
            }
        t = c, e = i, a = p, x != null ? We(l, !!e, x, !1) : !!a != !!e && (t != null ? We(l, !!e, t, !0) : We(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = x = null;
        for (c in e)
          if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                rl(l, t, c, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                x = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== u && rl(l, t, i, n, a, u);
            }
        Vf(l, x, p);
        return;
      case "option":
        for (var U in e)
          x = e[U], e.hasOwnProperty(U) && x != null && !a.hasOwnProperty(U) && (U === "selected" ? l.selected = !1 : rl(
            l,
            t,
            U,
            null,
            a,
            x
          ));
        for (r in a)
          x = a[r], p = e[r], a.hasOwnProperty(r) && x !== p && (x != null || p != null) && (r === "selected" ? l.selected = x && typeof x != "function" && typeof x != "symbol" : rl(
            l,
            t,
            r,
            x,
            a,
            p
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in e)
          x = e[Y], e.hasOwnProperty(Y) && x != null && !a.hasOwnProperty(Y) && rl(l, t, Y, null, a, x);
        for (b in a)
          if (x = a[b], p = e[b], a.hasOwnProperty(b) && x !== p && (x != null || p != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(d(137, t));
                break;
              default:
                rl(
                  l,
                  t,
                  b,
                  x,
                  a,
                  p
                );
            }
        return;
      default:
        if (si(t)) {
          for (var ol in e)
            x = e[ol], e.hasOwnProperty(ol) && x !== void 0 && !a.hasOwnProperty(ol) && Wc(
              l,
              t,
              ol,
              void 0,
              a,
              x
            );
          for (z in a)
            x = a[z], p = e[z], !a.hasOwnProperty(z) || x === p || x === void 0 && p === void 0 || Wc(
              l,
              t,
              z,
              x,
              a,
              p
            );
          return;
        }
    }
    for (var v in e)
      x = e[v], e.hasOwnProperty(v) && x != null && !a.hasOwnProperty(v) && rl(l, t, v, null, a, x);
    for (N in a)
      x = a[N], p = e[N], !a.hasOwnProperty(N) || x === p || x == null && p == null || rl(l, t, N, x, a, p);
  }
  function $d(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function wm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && $d(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var r = e[a], b = r.startTime;
            if (b > c) break;
            var z = r.transferSize, N = r.initiatorType;
            z && $d(N) && (r = r.responseEnd, i += z * (r < c ? 1 : (c - b) / (r - b)));
          }
          if (--a, t += 8 * (u + i) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var kc = null, Fc = null;
  function Uu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Wd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function kd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Ic(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Pc = null;
  function Vm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Pc ? !1 : (Pc = l, !0) : (Pc = null, !1);
  }
  var Fd = typeof setTimeout == "function" ? setTimeout : void 0, Lm = typeof clearTimeout == "function" ? clearTimeout : void 0, Id = typeof Promise == "function" ? Promise : void 0, Km = typeof queueMicrotask == "function" ? queueMicrotask : typeof Id < "u" ? function(l) {
    return Id.resolve(null).then(l).catch(Jm);
  } : Fd;
  function Jm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ye(l) {
    return l === "head";
  }
  function Pd(l, t) {
    var e = t, a = 0;
    do {
      var n = e.nextSibling;
      if (l.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(n), Ta(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          pn(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, pn(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[Ba] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
          }
        } else
          e === "body" && pn(l.ownerDocument.body);
      e = n;
    } while (e);
    Ta(t);
  }
  function lr(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function lf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lf(e), ui(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function $m(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ba])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (u = l.getAttribute("rel"), u === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (u = l.getAttribute("src"), (u !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u)
          return l;
      } else return l;
      if (l = bt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Wm(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = bt(l.nextSibling), l === null)) return null;
    return l;
  }
  function tr(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = bt(l.nextSibling), l === null)) return null;
    return l;
  }
  function tf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ef(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function km(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function bt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var af = null;
  function er(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return bt(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function ar(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function nr(l, t, e) {
    switch (t = Uu(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(d(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(d(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(d(454));
        return l;
      default:
        throw Error(d(451));
    }
  }
  function pn(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ui(l);
  }
  var xt = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Set();
  function Hu(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var kt = M.d;
  M.d = {
    f: Fm,
    r: Im,
    D: Pm,
    C: l1,
    L: t1,
    m: e1,
    X: n1,
    S: a1,
    M: u1
  };
  function Fm() {
    var l = kt.f(), t = Nu();
    return l || t;
  }
  function Im(l) {
    var t = Ke(l);
    t !== null && t.tag === 5 && t.type === "form" ? S0(t) : kt.r(l);
  }
  var Ea = typeof document > "u" ? null : document;
  function ir(l, t, e) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var n = rt(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), ur.has(n) || (ur.add(n), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), Bl(t, "link", l), Dl(t), a.head.appendChild(t)));
    }
  }
  function Pm(l) {
    kt.D(l), ir("dns-prefetch", l, null);
  }
  function l1(l, t) {
    kt.C(l, t), ir("preconnect", l, t);
  }
  function t1(l, t, e) {
    kt.L(l, t, e);
    var a = Ea;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + rt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + rt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + rt(
        e.imageSizes
      ) + '"]')) : n += '[href="' + rt(l) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Na(l);
          break;
        case "script":
          u = _a(l);
      }
      xt.has(u) || (l = R(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), xt.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(zn(u)) || t === "script" && a.querySelector(Sn(u)) || (t = a.createElement("link"), Bl(t, "link", l), Dl(t), a.head.appendChild(t)));
    }
  }
  function e1(l, t) {
    kt.m(l, t);
    var e = Ea;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + rt(a) + '"][href="' + rt(l) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = _a(l);
      }
      if (!xt.has(u) && (l = R({ rel: "modulepreload", href: l }, t), xt.set(u, l), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Sn(u)))
              return;
        }
        a = e.createElement("link"), Bl(a, "link", l), Dl(a), e.head.appendChild(a);
      }
    }
  }
  function a1(l, t, e) {
    kt.S(l, t, e);
    var a = Ea;
    if (a && l) {
      var n = Je(a).hoistableStyles, u = Na(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          zn(u)
        ))
          c.loading = 5;
        else {
          l = R(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = xt.get(u)) && nf(l, e);
          var r = i = a.createElement("link");
          Dl(r), Bl(r, "link", l), r._p = new Promise(function(b, z) {
            r.onload = b, r.onerror = z;
          }), r.addEventListener("load", function() {
            c.loading |= 1;
          }), r.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Cu(i, t, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function n1(l, t) {
    kt.X(l, t);
    var e = Ea;
    if (e && l) {
      var a = Je(e).hoistableScripts, n = _a(l), u = a.get(n);
      u || (u = e.querySelector(Sn(n)), u || (l = R({ src: l, async: !0 }, t), (t = xt.get(n)) && uf(l, t), u = e.createElement("script"), Dl(u), Bl(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function u1(l, t) {
    kt.M(l, t);
    var e = Ea;
    if (e && l) {
      var a = Je(e).hoistableScripts, n = _a(l), u = a.get(n);
      u || (u = e.querySelector(Sn(n)), u || (l = R({ src: l, async: !0, type: "module" }, t), (t = xt.get(n)) && uf(l, t), u = e.createElement("script"), Dl(u), Bl(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function cr(l, t, e, a) {
    var n = (n = $.current) ? Hu(n) : null;
    if (!n) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Na(e.href), e = Je(
          n
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Na(e.href);
          var u = Je(
            n
          ).hoistableStyles, i = u.get(l);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(l, i), (u = n.querySelector(
            zn(l)
          )) && !u._p && (i.instance = u, i.state.loading = 5), xt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, xt.set(l, e), u || i1(
            n,
            l,
            e,
            i.state
          ))), t && a === null)
            throw Error(d(528, ""));
          return i;
        }
        if (t && a !== null)
          throw Error(d(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(e), e = Je(
          n
        ).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(d(444, l));
    }
  }
  function Na(l) {
    return 'href="' + rt(l) + '"';
  }
  function zn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function fr(l) {
    return R({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function i1(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Bl(t, "link", e), Dl(t), l.head.appendChild(t));
  }
  function _a(l) {
    return '[src="' + rt(l) + '"]';
  }
  function Sn(l) {
    return "script[async]" + l;
  }
  function sr(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + rt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Dl(a), a;
          var n = R({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Dl(a), Bl(a, "style", n), Cu(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          n = Na(e.href);
          var u = l.querySelector(
            zn(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Dl(u), u;
          a = fr(e), (n = xt.get(n)) && nf(a, n), u = (l.ownerDocument || l).createElement("link"), Dl(u);
          var i = u;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), Bl(u, "link", a), t.state.loading |= 4, Cu(u, e.precedence, l), t.instance = u;
        case "script":
          return u = _a(e.src), (n = l.querySelector(
            Sn(u)
          )) ? (t.instance = n, Dl(n), n) : (a = e, (n = xt.get(u)) && (a = R({}, e), uf(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Dl(n), Bl(n, "link", a), l.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Cu(a, e.precedence, l));
    return t.instance;
  }
  function Cu(l, t, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function nf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function uf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var qu = null;
  function dr(l, t, e) {
    if (qu === null) {
      var a = /* @__PURE__ */ new Map(), n = qu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = qu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[Ba] || u[Ul] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function rr(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function c1(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function or(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function f1(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Na(a.href), u = t.querySelector(
          zn(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Bu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, Dl(u);
          return;
        }
        u = t.ownerDocument || t, a = fr(a), (n = xt.get(n)) && nf(a, n), u = u.createElement("link"), Dl(u);
        var i = u;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), Bl(u, "link", a), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Bu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var cf = 0;
  function s1(l, t) {
    return l.stylesheets && l.count === 0 && Zu(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Zu(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < l.imgBytes && cf === 0 && (cf = 62500 * wm());
      var n = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Zu(l, l.stylesheets), l.unsuspend)) {
            var u = l.unsuspend;
            l.unsuspend = null, u();
          }
        },
        (l.imgBytes > cf ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Bu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zu(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Yu = null;
  function Zu(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Yu = /* @__PURE__ */ new Map(), t.forEach(d1, l), Yu = null, Bu.call(l));
  }
  function d1(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Yu.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Yu.set(l, e);
        for (var n = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Bu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var jn = {
    $$typeof: pl,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function r1(l, t, e, a, n, u, i, c, r) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ti(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ti(0), this.hiddenUpdates = ti(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function mr(l, t, e, a, n, u, i, c, r, b, z, N) {
    return l = new r1(
      l,
      t,
      e,
      i,
      r,
      b,
      z,
      N,
      c
    ), t = 1, u === !0 && (t |= 24), u = at(3, null, null, t), l.current = u, u.stateNode = l, t = Zi(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, wi(u), l;
  }
  function hr(l) {
    return l ? (l = aa, l) : aa;
  }
  function vr(l, t, e, a, n, u) {
    n = hr(n), a.context === null ? a.context = n : a.pendingContext = n, a = ue(t), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = ie(l, a, t), e !== null && (Il(e, l, t), ln(e, l, t));
  }
  function yr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function ff(l, t) {
    yr(l, t), (l = l.alternate) && yr(l, t);
  }
  function gr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oe(l, 67108864);
      t !== null && Il(t, l, 67108864), ff(l, 67108864);
    }
  }
  function br(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ft();
      t = ei(t);
      var e = Oe(l, t);
      e !== null && Il(e, l, t), ff(l, t);
    }
  }
  var Gu = !0;
  function o1(l, t, e, a) {
    var n = S.T;
    S.T = null;
    var u = M.p;
    try {
      M.p = 2, sf(l, t, e, a);
    } finally {
      M.p = u, S.T = n;
    }
  }
  function m1(l, t, e, a) {
    var n = S.T;
    S.T = null;
    var u = M.p;
    try {
      M.p = 8, sf(l, t, e, a);
    } finally {
      M.p = u, S.T = n;
    }
  }
  function sf(l, t, e, a) {
    if (Gu) {
      var n = df(a);
      if (n === null)
        $c(
          l,
          t,
          a,
          Xu,
          e
        ), pr(l, a);
      else if (v1(
        n,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (pr(l, a), t & 4 && -1 < h1.indexOf(l)) {
        for (; n !== null; ) {
          var u = Ke(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ne(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var r = 1 << 31 - tt(i);
                      c.entanglements[1] |= r, i &= ~r;
                    }
                    Dt(u), (al & 6) === 0 && (ju = Pl() + 500, gn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Oe(u, 2), c !== null && Il(c, u, 2), Nu(), ff(u, 2);
            }
          if (u = df(a), u === null && $c(
            l,
            t,
            a,
            Xu,
            e
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        $c(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function df(l) {
    return l = ri(l), rf(l);
  }
  var Xu = null;
  function rf(l) {
    if (Xu = null, l = Le(l), l !== null) {
      var t = H(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = Z(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = w(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Xu = l, null;
  }
  function xr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ir()) {
          case Tf:
            return 2;
          case Af:
            return 8;
          case On:
          case Pr:
            return 32;
          case Mf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var of = !1, ge = null, be = null, xe = null, En = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), pe = [], h1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function pr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ge = null;
        break;
      case "dragenter":
      case "dragleave":
        be = null;
        break;
      case "mouseover":
      case "mouseout":
        xe = null;
        break;
      case "pointerover":
      case "pointerout":
        En.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nn.delete(t.pointerId);
    }
  }
  function _n(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Ke(t), t !== null && gr(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function v1(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return ge = _n(
          ge,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return be = _n(
          be,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return xe = _n(
          xe,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return En.set(
          u,
          _n(
            En.get(u) || null,
            l,
            t,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Nn.set(
          u,
          _n(
            Nn.get(u) || null,
            l,
            t,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function zr(l) {
    var t = Le(l.target);
    if (t !== null) {
      var e = H(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = Z(e), t !== null) {
            l.blockedOn = t, Cf(l.priority, function() {
              br(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = w(e), t !== null) {
            l.blockedOn = t, Cf(l.priority, function() {
              br(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Qu(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = df(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        di = a, e.target.dispatchEvent(a), di = null;
      } else
        return t = Ke(e), t !== null && gr(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function Sr(l, t, e) {
    Qu(l) && e.delete(t);
  }
  function y1() {
    of = !1, ge !== null && Qu(ge) && (ge = null), be !== null && Qu(be) && (be = null), xe !== null && Qu(xe) && (xe = null), En.forEach(Sr), Nn.forEach(Sr);
  }
  function wu(l, t) {
    l.blockedOn === t && (l.blockedOn = null, of || (of = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      y1
    )));
  }
  var Vu = null;
  function jr(l) {
    Vu !== l && (Vu = l, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      function() {
        Vu === l && (Vu = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], n = l[t + 2];
          if (typeof a != "function") {
            if (rf(a || e) === null)
              continue;
            break;
          }
          var u = Ke(e);
          u !== null && (l.splice(t, 3), t -= 3, sc(
            u,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Ta(l) {
    function t(r) {
      return wu(r, l);
    }
    ge !== null && wu(ge, l), be !== null && wu(be, l), xe !== null && wu(xe, l), En.forEach(t), Nn.forEach(t);
    for (var e = 0; e < pe.length; e++) {
      var a = pe[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < pe.length && (e = pe[0], e.blockedOn === null); )
      zr(e), e.blockedOn === null && pe.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[Kl] || null;
        if (typeof u == "function")
          i || jr(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Kl] || null)
              c = i.formAction;
            else if (rf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), jr(e);
        }
      }
  }
  function Er() {
    function l(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function mf(l) {
    this._internalRoot = l;
  }
  Lu.prototype.render = mf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(d(409));
    var e = t.current, a = ft();
    vr(e, a, l, t, null, null);
  }, Lu.prototype.unmount = mf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      vr(l.current, 2, null, l, null, null), Nu(), t[Ve] = null;
    }
  };
  function Lu(l) {
    this._internalRoot = l;
  }
  Lu.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Hf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < pe.length && t !== 0 && t < pe[e].priority; e++) ;
      pe.splice(e, 0, l), e === 0 && zr(l);
    }
  };
  var Nr = m.version;
  if (Nr !== "19.2.8")
    throw Error(
      d(
        527,
        Nr,
        "19.2.8"
      )
    );
  M.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(d(188)) : (l = Object.keys(l).join(","), Error(d(268, l)));
    return l = E(t), l = l !== null ? J(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var g1 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ku.isDisabled && Ku.supportsFiber)
      try {
        Ha = Ku.inject(
          g1
        ), lt = Ku;
      } catch {
      }
  }
  return An.createRoot = function(l, t) {
    if (!O(l)) throw Error(d(299));
    var e = !1, a = "", n = R0, u = U0, i = H0;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = mr(
      l,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      n,
      u,
      i,
      Er
    ), l[Ve] = t.current, Jc(l), new mf(t);
  }, An.hydrateRoot = function(l, t, e) {
    if (!O(l)) throw Error(d(299));
    var a = !1, n = "", u = R0, i = U0, c = H0, r = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), t = mr(
      l,
      1,
      !0,
      t,
      e ?? null,
      a,
      n,
      r,
      u,
      i,
      c,
      Er
    ), t.context = hr(null), e = t.current, a = ft(), a = ei(a), n = ue(a), n.callback = null, ie(e, n, a), e = a, t.current.lanes = e, qa(t, e), Dt(t), l[Ve] = t.current, Jc(l), new Lu(t);
  }, An.version = "19.2.8", An;
}
var Cr;
function T1() {
  if (Cr) return yf.exports;
  Cr = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (m) {
        console.error(m);
      }
  }
  return s(), yf.exports = _1(), yf.exports;
}
var A1 = T1();
function M1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z"
  }));
}
const O1 = /* @__PURE__ */ T.forwardRef(M1);
function D1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z",
    clipRule: "evenodd"
  }));
}
const R1 = /* @__PURE__ */ T.forwardRef(D1);
function U1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z",
    clipRule: "evenodd"
  }));
}
const H1 = /* @__PURE__ */ T.forwardRef(U1);
function C1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z",
    clipRule: "evenodd"
  }));
}
const q1 = /* @__PURE__ */ T.forwardRef(C1);
function B1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",
    clipRule: "evenodd"
  }));
}
const Y1 = /* @__PURE__ */ T.forwardRef(B1);
function Z1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z",
    clipRule: "evenodd"
  }));
}
const G1 = /* @__PURE__ */ T.forwardRef(Z1);
function X1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const Q1 = /* @__PURE__ */ T.forwardRef(X1);
function w1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const V1 = /* @__PURE__ */ T.forwardRef(w1);
function L1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
const K1 = /* @__PURE__ */ T.forwardRef(L1);
function J1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const zf = /* @__PURE__ */ T.forwardRef(J1);
function $1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M8 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
  }), /* @__PURE__ */ T.createElement("path", {
    d: "M8 8.5c1.84 0 3.579-.37 4.914-1.037A6.33 6.33 0 0 0 14 6.78V8c0 1.657-2.686 3-6 3S2 9.657 2 8V6.78c.346.273.72.5 1.087.683C4.42 8.131 6.16 8.5 8 8.5Z"
  }), /* @__PURE__ */ T.createElement("path", {
    d: "M8 12.5c1.84 0 3.579-.37 4.914-1.037.366-.183.74-.41 1.086-.684V12c0 1.657-2.686 3-6 3s-6-1.343-6-3v-1.22c.346.273.72.5 1.087.683C4.42 12.131 6.16 12.5 8 12.5Z"
  }));
}
const Sf = /* @__PURE__ */ T.forwardRef($1);
function W1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937v-2.523a2.5 2.5 0 0 0-.732-1.768L8.354 5.232A2.5 2.5 0 0 0 6.586 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ T.createElement("path", {
    d: "M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.586a1 1 0 0 0-.293-.707L7.293 6.293A1 1 0 0 0 6.586 6H3Z"
  }));
}
const k1 = /* @__PURE__ */ T.forwardRef(W1);
function F1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M6 6v4h4V6H6Z"
  }), /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3a2 2 0 0 0 2 2v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13a2 2 0 0 0 2-2h1.25a.75.75 0 0 0 0-1.5H13v-.75h1.25a.75.75 0 0 0 0-1.5H13V6.5h1.25a.75.75 0 0 0 0-1.5H13a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-.75V1.75a.75.75 0 0 0-1.5 0V3H6.5V1.75A.75.75 0 0 0 5.75 1ZM11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6Z",
    clipRule: "evenodd"
  }));
}
const I1 = /* @__PURE__ */ T.forwardRef(F1);
function P1({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M7.628 1.349a.75.75 0 0 1 .744 0l1.247.712a.75.75 0 1 1-.744 1.303L8 2.864l-.875.5a.75.75 0 0 1-.744-1.303l1.247-.712ZM4.65 3.914a.75.75 0 0 1-.279 1.023L4.262 5l.11.063a.75.75 0 0 1-.744 1.302l-.13-.073A.75.75 0 0 1 2 6.25V5a.75.75 0 0 1 .378-.651l1.25-.714a.75.75 0 0 1 1.023.279Zm6.698 0a.75.75 0 0 1 1.023-.28l1.25.715A.75.75 0 0 1 14 5v1.25a.75.75 0 0 1-1.499.042l-.129.073a.75.75 0 0 1-.744-1.302l.11-.063-.11-.063a.75.75 0 0 1-.28-1.023ZM6.102 6.915a.75.75 0 0 1 1.023-.279l.875.5.875-.5a.75.75 0 0 1 .744 1.303l-.869.496v.815a.75.75 0 0 1-1.5 0v-.815l-.869-.496a.75.75 0 0 1-.28-1.024ZM2.75 9a.75.75 0 0 1 .75.75v.815l.872.498a.75.75 0 0 1-.744 1.303l-1.25-.715A.75.75 0 0 1 2 11V9.75A.75.75 0 0 1 2.75 9Zm10.5 0a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.378.651l-1.25.715a.75.75 0 0 1-.744-1.303l.872-.498V9.75a.75.75 0 0 1 .75-.75Zm-4.501 3.708.126-.072a.75.75 0 0 1 .744 1.303l-1.247.712a.75.75 0 0 1-.744 0L6.38 13.94a.75.75 0 0 1 .744-1.303l.126.072a.75.75 0 0 1 1.498 0Z",
    clipRule: "evenodd"
  }));
}
const lh = /* @__PURE__ */ T.forwardRef(P1);
function th({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Gr = /* @__PURE__ */ T.forwardRef(th);
function eh({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
    clipRule: "evenodd"
  }));
}
const ah = /* @__PURE__ */ T.forwardRef(eh);
function nh({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M2 4a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 9.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25ZM2.75 12.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Z"
  }));
}
const Xr = /* @__PURE__ */ T.forwardRef(nh);
function uh({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z",
    clipRule: "evenodd"
  }));
}
const ih = /* @__PURE__ */ T.forwardRef(uh);
function ch({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ T.createElement("path", {
    d: "M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z"
  }));
}
const fh = /* @__PURE__ */ T.forwardRef(ch);
function sh({
  title: s,
  titleId: m,
  ...y
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, y), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
  }));
}
const jf = /* @__PURE__ */ T.forwardRef(sh);
function Qr(s) {
  var m, y, d = "";
  if (typeof s == "string" || typeof s == "number") d += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var O = s.length;
    for (m = 0; m < O; m++) s[m] && (y = Qr(s[m])) && (d && (d += " "), d += y);
  } else for (y in s) s[y] && (d && (d += " "), d += y);
  return d;
}
function Xl() {
  for (var s, m, y = 0, d = "", O = arguments.length; y < O; y++) (s = arguments[y]) && (m = Qr(s)) && (d && (d += " "), d += m);
  return d;
}
async function qr(s, m) {
  const y = await fetch(s, {
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    signal: m
  });
  if (!y.ok) {
    const d = new Error(
      y.status === 404 ? "This trace could not be found." : "AI Observatory could not load this data."
    );
    throw d.status = y.status, d;
  }
  return y.json();
}
function dh(s) {
  const m = new URLSearchParams();
  return Object.entries(s).forEach(([y, d]) => {
    d !== "" && d !== null && d !== void 0 && m.set(y, d);
  }), m.toString();
}
function Br(s) {
  return s ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeStyle: "medium"
  }).format(new Date(s)) : "—";
}
function wr(s) {
  if (!s) return "—";
  const m = Math.round((new Date(s).getTime() - Date.now()) / 1e3), y = new Intl.RelativeTimeFormat(void 0, {
    numeric: "auto"
  }), d = [
    ["year", 31536e3],
    ["month", 2592e3],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60]
  ];
  for (const [O, H] of d)
    if (Math.abs(m) >= H)
      return y.format(Math.round(m / H), O);
  return y.format(m, "second");
}
function Ra(s) {
  return s == null ? "—" : s < 1e3 ? `${Math.round(s)} ms` : s < 6e4 ? `${(s / 1e3).toFixed(s < 1e4 ? 2 : 1)} s` : `${(s / 6e4).toFixed(1)} min`;
}
function Oa(s) {
  return s == null ? "—" : new Intl.NumberFormat(void 0, {
    notation: s >= 1e4 ? "compact" : "standard",
    maximumFractionDigits: 1
  }).format(s);
}
function Ef(s, m) {
  return s == null || !m ? "—" : new Intl.NumberFormat(void 0, {
    style: "currency",
    currency: m,
    maximumFractionDigits: 6
  }).format(Number(s));
}
function Vr(s) {
  return s ? s.split("\\").at(-1) : "—";
}
function Lr(s, m = 0) {
  return s.flatMap((y) => [
    { ...y, depth: m },
    ...Lr(y.children ?? [], m + 1)
  ]);
}
function rh({ value: s }) {
  if (s === "[REDACTED]")
    return /* @__PURE__ */ f.jsx("div", { className: "inline-flex rounded bg-amber-100 px-1.5 py-0.5 font-mono text-base/6 text-amber-800 sm:text-sm/5", children: "[REDACTED]" });
  const m = typeof s == "string" ? "text-emerald-700" : typeof s == "number" ? "text-sky-700" : typeof s == "boolean" ? "text-violet-700" : "text-zinc-500", y = typeof s == "string" ? `"${s}"` : String(s);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `font-mono text-base/7 break-words sm:text-sm/6 ${m}`,
      children: y
    }
  );
}
function Kr({ label: s, value: m, depth: y = 0 }) {
  if (!(m !== null && typeof m == "object"))
    return /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-[minmax(5rem,auto)_1fr] gap-3 py-1", children: [
      s !== null ? /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: s }) : null,
      /* @__PURE__ */ f.jsx(rh, { value: m })
    ] });
  const O = Object.entries(m), H = Array.isArray(m) ? "array" : "object";
  return /* @__PURE__ */ f.jsxs("details", { className: "group/json", open: y < 1, children: [
    /* @__PURE__ */ f.jsxs("summary", { className: "flex cursor-pointer list-none items-center gap-1 rounded py-1 observatory-focus", children: [
      /* @__PURE__ */ f.jsx(zf, { className: "size-4 h-lh shrink-0 fill-zinc-400 group-open/json:rotate-90" }),
      s !== null ? /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 font-medium text-zinc-700 sm:text-sm/6", children: s }) : null,
      /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 text-zinc-400 sm:text-sm/6", children: H === "array" ? `[${O.length}]` : `{${O.length}}` })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "border-l border-zinc-950/10 pl-4", children: O.map(([Z, w]) => /* @__PURE__ */ f.jsx(
      Kr,
      {
        label: Z,
        value: w,
        depth: y + 1
      },
      Z
    )) })
  ] });
}
function Da({ className: s, value: m, label: y, plain: d = !1 }) {
  const [O, H] = T.useState(!1), Z = m && typeof m == "object" && m._truncated === !0;
  T.useEffect(() => {
    if (!O) return;
    const A = window.setTimeout(() => H(!1), 1500);
    return () => window.clearTimeout(A);
  }, [O]);
  async function w() {
    await navigator.clipboard.writeText(JSON.stringify(m, null, 2)), H(!0);
  }
  return /* @__PURE__ */ f.jsxs(
    "section",
    {
      className: Xl(
        !d && "border-t border-zinc-950/10 pt-5",
        s
      ),
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ f.jsx("h3", { className: "text-base font-medium text-zinc-950", children: y }),
          /* @__PURE__ */ f.jsxs(
            "button",
            {
              type: "button",
              onClick: w,
              className: "relative inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
              children: [
                /* @__PURE__ */ f.jsx(
                  "span",
                  {
                    className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                    "aria-hidden": "true"
                  }
                ),
                O ? /* @__PURE__ */ f.jsx(Q1, { className: "size-4 h-lh shrink-0 fill-emerald-600" }) : /* @__PURE__ */ f.jsx(k1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                O ? "Copied" : "Copy"
              ]
            }
          )
        ] }),
        Z ? /* @__PURE__ */ f.jsxs("div", { className: "mt-3 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-base/7 text-amber-800 sm:text-sm/6", children: [
          /* @__PURE__ */ f.jsx(Gr, { className: "size-4 h-lh shrink-0 fill-amber-600" }),
          "This payload was truncated before storage. The original was",
          " ",
          Number(m._original_bytes).toLocaleString(),
          " bytes."
        ] }) : null,
        /* @__PURE__ */ f.jsx("div", { className: "mt-3 max-h-96 overflow-auto rounded-lg bg-zinc-50 p-4 ring-1 ring-zinc-950/5 ring-inset", children: /* @__PURE__ */ f.jsx(Kr, { label: null, value: m }) })
      ]
    }
  );
}
const Yr = {
  successful: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  failed: "bg-red-50 text-red-700 ring-red-600/20",
  cancelled: "bg-zinc-100 text-zinc-600 ring-zinc-500/20",
  running: "bg-amber-50 text-amber-800 ring-amber-600/20"
}, Ju = {
  successful: "bg-emerald-500",
  failed: "bg-red-500",
  cancelled: "bg-zinc-400",
  running: "bg-amber-500"
};
function $u({ className: s, compact: m = !1, status: y }) {
  return m ? /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: Xl(
        "inline-flex shrink-0 items-center gap-1.5 text-base/6 font-medium sm:text-sm/5",
        y === "successful" ? "text-emerald-700" : y === "failed" ? "text-red-700" : y === "running" ? "text-amber-800" : "text-zinc-600",
        s
      ),
      children: [
        /* @__PURE__ */ f.jsx(
          "span",
          {
            className: `size-1.5 shrink-0 rounded-full ${Ju[y] ?? Ju.cancelled}`
          }
        ),
        y ?? "unknown"
      ]
    }
  ) : /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: Xl(
        "inline-flex items-center gap-1.5 rounded-full py-1 pr-2 pl-1 text-base/6 font-medium ring-1 ring-inset sm:text-sm/5",
        Yr[y] ?? Yr.cancelled,
        s
      ),
      children: [
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: `size-1.5 shrink-0 rounded-full ${Ju[y] ?? Ju.cancelled}`
          }
        ),
        y ?? "unknown"
      ]
    }
  );
}
const oh = {
  agent: ih,
  model: I1,
  tool: fh,
  mcp: lh,
  internal: G1
};
function Aa({ label: s, value: m }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @md:border-t-0 @md:pt-0", children: [
    /* @__PURE__ */ f.jsx("dt", { className: "truncate text-sm/5 font-medium text-zinc-500", children: s }),
    /* @__PURE__ */ f.jsx("dd", { className: "text-base font-medium text-zinc-950 tabular-nums", children: m })
  ] });
}
function mh(s, m) {
  const y = new Date(m.started_at).getTime(), d = new Date(s.started_at).getTime(), O = Math.max(Number(m.duration_ms) || 1, 1), H = Math.max(Number(s.duration_ms) || 0, 1);
  if (!Number.isFinite(y) || !Number.isFinite(d))
    return { left: 0, width: 3 };
  const Z = Math.max(
    0,
    Math.min(97, (d - y) / O * 100)
  ), w = Math.max(
    3,
    Math.min(100 - Z, H / O * 100)
  );
  return { left: Z, width: w };
}
function hh({ span: s, onSelect: m, trace: y }) {
  const d = oh[s.type] ?? Sf, O = s.status === "failed", H = mh(s, y);
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      type: "button",
      onClick: () => m(s),
      style: {
        "--span-offset": `${s.depth * 1.25}rem`,
        "--span-left": `${H.left}%`,
        "--span-width": `${H.width}%`
      },
      className: "group relative grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 border-b border-zinc-950/5 py-4 pr-2 pl-[var(--span-offset)] text-left observatory-focus hover:bg-zinc-50 @3xl:grid-cols-[auto_minmax(12rem,3fr)_minmax(10rem,2fr)_auto] @3xl:items-center",
      children: [
        /* @__PURE__ */ f.jsx(
          "span",
          {
            className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ f.jsx(
          d,
          {
            className: `size-4 h-lh shrink-0 ${O ? "fill-red-500" : "fill-zinc-400"}`
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-1", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ f.jsx("div", { className: "truncate text-base/6 font-medium text-zinc-950 sm:text-sm/5", children: s.name }),
            /* @__PURE__ */ f.jsx("div", { className: "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm/5 text-zinc-500", children: s.type })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 flex-wrap gap-2 text-base/7 text-zinc-500 sm:text-sm/6", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "tabular-nums", children: [
              "#",
              s.sequence
            ] }),
            s.provider ? /* @__PURE__ */ f.jsx("div", { children: s.provider }) : null,
            s.model ? /* @__PURE__ */ f.jsx("div", { className: "truncate font-mono", children: s.model }) : null,
            /* @__PURE__ */ f.jsx("div", { className: "tabular-nums", children: Ra(s.duration_ms) })
          ] }),
          s.error?.message ? /* @__PURE__ */ f.jsx("div", { className: "truncate text-base/7 text-red-600 sm:text-sm/6", children: s.error.message }) : null
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "relative hidden h-7 overflow-hidden rounded-md bg-zinc-100 @3xl:block", children: /* @__PURE__ */ f.jsx(
          "span",
          {
            className: Xl(
              "absolute top-2 h-3 min-w-1 rounded-sm",
              O ? "bg-red-500" : s.type === "model" ? "bg-amber-500" : s.type === "tool" || s.type === "mcp" ? "bg-sky-500" : "bg-zinc-400",
              "left-(--span-left) w-(--span-width)"
            )
          }
        ) }),
        /* @__PURE__ */ f.jsx(zf, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-500" })
      ]
    }
  );
}
function vh({ span: s, onClose: m }) {
  const [y, d] = T.useState("request");
  return T.useEffect(() => {
    const O = [
      ["request", s?.request],
      ["response", s?.response],
      ["metadata", s?.metadata]
    ].find(([, H]) => H != null);
    d(O?.[0] ?? "request");
  }, [s]), T.useEffect(() => {
    function O(H) {
      H.key === "Escape" && m();
    }
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [m]), s ? /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "span-title",
      children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Close span details",
            onClick: m,
            className: "absolute inset-0 bg-zinc-950/20"
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: "absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-white shadow-2xl ring-1 ring-zinc-950/10", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex items-start justify-between gap-5 border-b border-zinc-950/10 p-5 sm:p-6", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-2", children: [
              /* @__PURE__ */ f.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ f.jsx($u, { status: s.status }),
                /* @__PURE__ */ f.jsx("div", { className: "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm/5 text-zinc-500", children: s.type })
              ] }),
              /* @__PURE__ */ f.jsx(
                "h2",
                {
                  id: "span-title",
                  className: "text-xl font-semibold text-balance text-zinc-950",
                  children: s.name
                }
              ),
              /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6", children: s.span_id })
            ] }),
            /* @__PURE__ */ f.jsxs(
              "button",
              {
                type: "button",
                onClick: m,
                className: "relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100",
                "aria-label": "Close",
                children: [
                  /* @__PURE__ */ f.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ f.jsx(jf, { className: "size-4 shrink-0 fill-zinc-500" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "grow overflow-y-auto p-5 sm:p-6", children: [
            /* @__PURE__ */ f.jsxs("dl", { className: "grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3", children: [
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Duration" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Ra(s.duration_ms) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Tokens" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Oa(s.total_tokens) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Parent span" }),
                /* @__PURE__ */ f.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: s.parent_span_id ?? "Root" })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Provider" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: s.provider ?? "—" })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Model" }),
                /* @__PURE__ */ f.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: s.model ?? "—" })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Estimated cost" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Ef(s.estimated_cost, s.currency) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Time to first token" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Ra(
                  s.metadata?.time_to_first_token_ms
                ) })
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "grid gap-5 pt-6", children: [
              s.error?.message ? /* @__PURE__ */ f.jsx("section", { className: "rounded-lg bg-red-50 p-4", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ f.jsx(Gr, { className: "size-4 h-lh shrink-0 fill-red-500" }),
                /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-1", children: [
                  /* @__PURE__ */ f.jsx("h3", { className: "text-base font-medium text-red-900", children: s.error.type ?? "Span failed" }),
                  /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-pretty break-words text-red-700 sm:text-sm/6", children: s.error.message })
                ] })
              ] }) }) : null,
              /* @__PURE__ */ f.jsxs("section", { "aria-label": "Span payloads", children: [
                /* @__PURE__ */ f.jsx("div", { className: "overflow-x-auto border-b border-zinc-950/10", children: /* @__PURE__ */ f.jsx("div", { className: "flex min-w-max gap-5", children: [
                  ["request", "Request", s.request],
                  ["response", "Response", s.response],
                  ["metadata", "Metadata", s.metadata]
                ].map(
                  ([O, H, Z]) => Z != null ? /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => d(O),
                      "aria-selected": y === O,
                      className: Xl(
                        "relative border-b-2 py-2 text-sm/5 font-medium observatory-focus",
                        y === O ? "border-amber-500 text-zinc-950" : "border-transparent text-zinc-500 hover:text-zinc-900"
                      ),
                      children: [
                        /* @__PURE__ */ f.jsx(
                          "span",
                          {
                            className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                            "aria-hidden": "true"
                          }
                        ),
                        H
                      ]
                    },
                    O
                  ) : null
                ) }) }),
                y === "request" && s.request !== null ? /* @__PURE__ */ f.jsx(
                  Da,
                  {
                    className: "pt-4",
                    label: "Request payload",
                    plain: !0,
                    value: s.request
                  }
                ) : null,
                y === "response" && s.response !== null ? /* @__PURE__ */ f.jsx(
                  Da,
                  {
                    className: "pt-4",
                    label: "Response payload",
                    plain: !0,
                    value: s.response
                  }
                ) : null,
                y === "metadata" && s.metadata !== null ? /* @__PURE__ */ f.jsx(
                  Da,
                  {
                    className: "pt-4",
                    label: "Span metadata",
                    plain: !0,
                    value: s.metadata
                  }
                ) : null
              ] })
            ] })
          ] })
        ] })
      ]
    }
  ) : null;
}
function yh({ className: s, loading: m, onBack: y, trace: d }) {
  const [O, H] = T.useState(null), Z = T.useMemo(() => Lr(d?.spans ?? []), [d]);
  return T.useEffect(() => H(null), [d?.trace_id]), m || !d ? /* @__PURE__ */ f.jsxs(
    "main",
    {
      className: Xl(
        "isolate mx-auto grid min-h-dvh max-w-7xl gap-5 bg-white px-4 py-5 sm:px-6 sm:py-6 lg:px-8",
        s
      ),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "h-8 w-56 animate-pulse rounded bg-zinc-100" }),
        /* @__PURE__ */ f.jsx("div", { className: "h-32 animate-pulse rounded bg-zinc-100" }),
        /* @__PURE__ */ f.jsx("div", { className: "h-96 animate-pulse rounded bg-zinc-100" })
      ]
    }
  ) : /* @__PURE__ */ f.jsxs("main", { className: Xl("isolate min-h-dvh min-w-0 bg-white", s), children: [
    /* @__PURE__ */ f.jsxs("div", { className: "mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:px-8", children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: y,
          className: "relative inline-flex w-fit items-center gap-1.5 rounded-md py-1 pr-2 pl-1 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ f.jsx(R1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
            "All traces"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs("header", { className: "grid gap-3 border-b border-zinc-950/10 pb-5", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ f.jsx($u, { status: d.status }),
          d.feature ? /* @__PURE__ */ f.jsx("div", { className: "rounded-full bg-zinc-100 px-2 py-1 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/5 ring-inset", children: d.feature }) : null
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ f.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-balance text-zinc-950", children: d.name }),
          /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 flex-wrap gap-x-4 gap-y-1 text-base/7 text-zinc-500 sm:text-sm/6", children: [
            /* @__PURE__ */ f.jsx("div", { children: Vr(d.agent_class) }),
            /* @__PURE__ */ f.jsxs("div", { className: "font-mono", children: [
              d.provider ?? "—",
              " / ",
              d.model ?? "—"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "@container", children: /* @__PURE__ */ f.jsxs("dl", { className: "grid gap-4 border-b border-zinc-950/10 pb-5 @md:grid-cols-3 @md:gap-5 @4xl:grid-cols-6", children: [
        /* @__PURE__ */ f.jsx(Aa, { label: "Status", value: d.status }),
        /* @__PURE__ */ f.jsx(
          Aa,
          {
            label: "Duration",
            value: Ra(d.duration_ms)
          }
        ),
        /* @__PURE__ */ f.jsx(
          Aa,
          {
            label: "Total tokens",
            value: Oa(d.total_tokens)
          }
        ),
        /* @__PURE__ */ f.jsx(
          Aa,
          {
            label: "Estimated cost",
            value: Ef(
              d.estimated_cost,
              d.currency
            )
          }
        ),
        /* @__PURE__ */ f.jsx(
          Aa,
          {
            label: "Spans / tools",
            value: `${d.span_count} / ${d.tool_count}`
          }
        ),
        /* @__PURE__ */ f.jsx(
          Aa,
          {
            label: "Started",
            value: Br(d.started_at)
          }
        )
      ] }) }),
      /* @__PURE__ */ f.jsxs("div", { className: "grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(16rem,2fr)]", children: [
        /* @__PURE__ */ f.jsxs(
          "section",
          {
            className: "min-w-0",
            "aria-labelledby": "timeline-heading",
            children: [
              /* @__PURE__ */ f.jsxs("div", { className: "flex items-end justify-between gap-4 border-b border-zinc-950/10 pb-4", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
                  /* @__PURE__ */ f.jsx(
                    "h2",
                    {
                      id: "timeline-heading",
                      className: "text-xl font-semibold text-zinc-950",
                      children: "Trace timeline"
                    }
                  ),
                  /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "Select a span to inspect its request, response, usage, and errors." })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: [
                  d.span_count,
                  " spans"
                ] })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { className: "@container", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "hidden grid-cols-[auto_minmax(12rem,3fr)_minmax(10rem,2fr)_auto] gap-3 border-b border-zinc-950/10 py-2 pr-2 text-sm/5 font-medium text-zinc-500 @3xl:grid", children: [
                  /* @__PURE__ */ f.jsx("div", { className: "size-4" }),
                  /* @__PURE__ */ f.jsx("div", { children: "Operation" }),
                  /* @__PURE__ */ f.jsx("div", { children: "Waterfall" }),
                  /* @__PURE__ */ f.jsx("div", { className: "w-4" })
                ] }),
                Z.map((w) => /* @__PURE__ */ f.jsx(
                  hh,
                  {
                    span: w,
                    trace: d,
                    onSelect: H
                  },
                  w.span_id
                ))
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "aside",
          {
            className: "min-w-0 lg:border-l lg:border-zinc-950/10 lg:pl-6",
            "aria-label": "Trace context",
            children: [
              /* @__PURE__ */ f.jsx("h2", { className: "text-base font-medium text-zinc-950", children: "Run context" }),
              /* @__PURE__ */ f.jsxs("dl", { className: "grid gap-4 pt-4", children: [
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Environment" }),
                  /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: d.environment ?? "—" })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Agent class" }),
                  /* @__PURE__ */ f.jsx("dd", { className: "font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6", children: d.agent_class ?? "—" })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Trace ID" }),
                  /* @__PURE__ */ f.jsx("dd", { className: "font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6", children: d.trace_id })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Input / output" }),
                  /* @__PURE__ */ f.jsxs("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: [
                    Oa(d.input_tokens),
                    " /",
                    " ",
                    Oa(d.output_tokens)
                  ] })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "User / tenant" }),
                  /* @__PURE__ */ f.jsxs("dd", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: [
                    d.user?.id ?? "—",
                    " /",
                    " ",
                    d.tenant?.id ?? "—"
                  ] })
                ] })
              ] }),
              d.tags ? /* @__PURE__ */ f.jsx("div", { className: "pt-5", children: /* @__PURE__ */ f.jsx(Da, { label: "Tags", value: d.tags }) }) : null,
              d.metadata ? /* @__PURE__ */ f.jsx("div", { className: "pt-5", children: /* @__PURE__ */ f.jsx(
                Da,
                {
                  label: "Metadata",
                  value: d.metadata
                }
              ) }) : null,
              d.events?.length > 0 ? /* @__PURE__ */ f.jsxs("section", { className: "border-t border-zinc-950/10 pt-5", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
                  /* @__PURE__ */ f.jsx("h2", { className: "text-base font-medium text-zinc-950", children: "Lifecycle events" }),
                  /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "Provider, retry, streaming, and failover events recorded during this trace." })
                ] }),
                /* @__PURE__ */ f.jsx("div", { className: "grid gap-3 pt-4", children: d.events.map((w) => /* @__PURE__ */ f.jsxs(
                  "details",
                  {
                    className: "rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-950/5",
                    children: [
                      /* @__PURE__ */ f.jsx("summary", { className: "cursor-pointer list-none", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: w.event_type }),
                        /* @__PURE__ */ f.jsx("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Br(
                          w.occurred_at
                        ) })
                      ] }) }),
                      w.payload ? /* @__PURE__ */ f.jsx(
                        Da,
                        {
                          className: "mt-3",
                          label: "Event payload",
                          value: w.payload
                        }
                      ) : null
                    ]
                  },
                  w.id
                )) })
              ] }) : null
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(
      vh,
      {
        span: O,
        onClose: () => H(null)
      }
    )
  ] });
}
function Ma({
  className: s,
  icon: m,
  label: y,
  labelHidden: d = !1,
  name: O,
  type: H = "text",
  ...Z
}) {
  const w = /* @__PURE__ */ f.jsx(
    "input",
    {
      id: O,
      type: H,
      name: O,
      className: Xl(
        "w-full observatory-control py-2.5 pr-3 text-base/6 text-zinc-900 placeholder:text-zinc-400 max-sm:text-base/6 sm:py-1.5 sm:text-sm/5",
        m ? "pl-9" : "pl-3"
      ),
      ...Z
    }
  );
  return /* @__PURE__ */ f.jsxs(
    "label",
    {
      htmlFor: O,
      className: Xl("grid", !d && "gap-1.5", s),
      children: [
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: Xl(
              "text-base/6 font-medium text-zinc-700 sm:text-sm/5",
              d && "sr-only"
            ),
            children: y
          }
        ),
        m ? /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ f.jsx(m, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 fill-zinc-400" }),
          w
        ] }) : w
      ]
    }
  );
}
function Se({ className: s, label: m, name: y, onChange: d, options: O, value: H }) {
  return /* @__PURE__ */ f.jsxs("label", { htmlFor: y, className: Xl("grid gap-1.5", s), children: [
    /* @__PURE__ */ f.jsx("div", { className: "text-base/6 font-medium text-zinc-700 sm:text-sm/5", children: m }),
    /* @__PURE__ */ f.jsxs("div", { className: "inline-grid grid-cols-[1fr_--spacing(8)]", children: [
      /* @__PURE__ */ f.jsxs(
        "select",
        {
          id: y,
          name: y,
          value: H,
          onChange: d,
          className: "col-span-full row-start-1 appearance-none observatory-control py-2.5 pr-8 pl-3 text-base/6 text-zinc-900 sm:py-1.5 sm:text-sm/5",
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "", children: "All" }),
            O.map((Z) => /* @__PURE__ */ f.jsx(
              "option",
              {
                value: typeof Z == "string" ? Z : Z.value,
                children: typeof Z == "string" ? Z : Z.label
              },
              typeof Z == "string" ? Z : Z.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ f.jsx(V1, { className: "pointer-events-none col-start-2 row-start-1 size-4 place-self-center fill-zinc-400" })
    ] })
  ] });
}
const gh = {
  status: "Status",
  provider: "Provider",
  model: "Model",
  agent_class: "Agent",
  span_type: "Span",
  feature: "Feature",
  has_error: "Errors",
  has_tool_calls: "Tools",
  min_duration: "Min duration",
  started_after: "After",
  started_before: "Before",
  user: "User",
  tenant: "Tenant"
};
function bh({ className: s, filters: m, options: y, onChange: d, onReset: O }) {
  const [H, Z] = T.useState(!1), w = Object.entries(m).filter(
    ([E, J]) => !["page", "per_page", "search"].includes(E) && J !== ""
  );
  function A(E) {
    d(E.target.name, E.target.value);
  }
  return /* @__PURE__ */ f.jsxs(
    "section",
    {
      className: Xl("grid gap-3", s),
      "aria-label": "Trace search and filters",
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
          /* @__PURE__ */ f.jsx(
            Ma,
            {
              className: "min-w-0 grow",
              icon: ah,
              type: "search",
              name: "search",
              label: "Search traces",
              labelHidden: !0,
              value: m.search,
              onChange: A,
              placeholder: "Search prompt, response, tool, error, or trace ID"
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { className: "flex shrink-0 gap-2", children: [
            /* @__PURE__ */ f.jsxs(
              "button",
              {
                type: "button",
                onClick: () => Z((E) => !E),
                className: "relative inline-flex grow items-center justify-center gap-2 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-700 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:grow-0 sm:py-1.5",
                "aria-controls": "trace-filters",
                "aria-expanded": H,
                children: [
                  /* @__PURE__ */ f.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ f.jsx(O1, { className: "size-4 h-lh shrink-0 fill-zinc-500" }),
                  "Filters",
                  w.length > 0 ? /* @__PURE__ */ f.jsx("span", { className: "rounded-full bg-amber-100 px-1.5 text-amber-900 tabular-nums", children: w.length }) : null
                ]
              }
            ),
            w.length > 0 || m.search ? /* @__PURE__ */ f.jsxs(
              "button",
              {
                type: "button",
                onClick: O,
                className: "relative inline-flex items-center justify-center gap-1.5 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100 sm:py-1.5",
                children: [
                  /* @__PURE__ */ f.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ f.jsx(jf, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                  "Clear"
                ]
              }
            ) : null
          ] })
        ] }),
        w.length > 0 && !H ? /* @__PURE__ */ f.jsx("ul", { className: "flex flex-wrap gap-2", role: "list", children: w.map(([E, J]) => /* @__PURE__ */ f.jsxs(
          "li",
          {
            className: "rounded-md bg-zinc-100 px-2 py-1 text-sm/5 text-zinc-600",
            children: [
              /* @__PURE__ */ f.jsxs("span", { className: "font-medium text-zinc-900", children: [
                gh[E] ?? E,
                ":"
              ] }),
              " ",
              String(J)
            ]
          },
          E
        )) }) : null,
        H ? /* @__PURE__ */ f.jsx(
          "div",
          {
            id: "trace-filters",
            className: "@container rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-950/5 ring-inset",
            children: /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-1 gap-4 @md:grid-cols-2 @4xl:grid-cols-4", children: [
              /* @__PURE__ */ f.jsx(
                Se,
                {
                  name: "status",
                  label: "Status",
                  value: m.status,
                  options: y.statuses ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Se,
                {
                  name: "provider",
                  label: "Provider",
                  value: m.provider,
                  options: y.providers ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Se,
                {
                  name: "model",
                  label: "Model",
                  value: m.model,
                  options: y.models ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Se,
                {
                  name: "agent_class",
                  label: "Agent",
                  value: m.agent_class,
                  options: y.agents ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Se,
                {
                  name: "span_type",
                  label: "Span type",
                  value: m.span_type,
                  options: y.span_types ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Se,
                {
                  name: "feature",
                  label: "Feature",
                  value: m.feature,
                  options: y.features ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Se,
                {
                  name: "has_error",
                  label: "Errors",
                  value: m.has_error,
                  options: [
                    { value: "1", label: "Has errors" },
                    { value: "0", label: "No errors" }
                  ],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Se,
                {
                  name: "has_tool_calls",
                  label: "Tool calls",
                  value: m.has_tool_calls,
                  options: [
                    { value: "1", label: "Has tool calls" },
                    { value: "0", label: "No tool calls" }
                  ],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Ma,
                {
                  type: "number",
                  min: "0",
                  name: "min_duration",
                  label: "Minimum duration (ms)",
                  value: m.min_duration,
                  onChange: A,
                  placeholder: "Any duration"
                }
              ),
              /* @__PURE__ */ f.jsx(
                Ma,
                {
                  type: "date",
                  name: "started_after",
                  label: "Started after",
                  value: m.started_after,
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Ma,
                {
                  type: "date",
                  name: "started_before",
                  label: "Started before",
                  value: m.started_before,
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Ma,
                {
                  name: "user",
                  label: "User ID",
                  value: m.user,
                  onChange: A,
                  placeholder: "Any user"
                }
              ),
              /* @__PURE__ */ f.jsx(
                Ma,
                {
                  name: "tenant",
                  label: "Tenant ID",
                  value: m.tenant,
                  onChange: A,
                  placeholder: "Any tenant"
                }
              )
            ] })
          }
        ) : null
      ]
    }
  );
}
function xh(s, m) {
  const y = Math.max(1, Math.min(s - 2, m - 4)), d = Math.min(m, y + 4);
  return Array.from(
    { length: Math.max(0, d - y + 1) },
    (O, H) => y + H
  );
}
function ph({ className: s, meta: m, onPage: y }) {
  return !m || m.last_page <= 1 ? null : /* @__PURE__ */ f.jsxs(
    "nav",
    {
      className: Xl(
        "flex items-center justify-between border-t border-zinc-950/10 py-4",
        s
      ),
      "aria-label": "Pagination",
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: [
          "Page",
          " ",
          /* @__PURE__ */ f.jsx("strong", { className: "font-medium text-zinc-900", children: m.current_page }),
          " ",
          "of",
          " ",
          /* @__PURE__ */ f.jsx("strong", { className: "font-medium text-zinc-900", children: m.last_page })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ f.jsxs(
            "button",
            {
              type: "button",
              onClick: () => y(m.current_page - 1),
              disabled: m.current_page === 1,
              className: "relative inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40",
              children: [
                /* @__PURE__ */ f.jsx(
                  "span",
                  {
                    className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ f.jsx(K1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                "Previous"
              ]
            }
          ),
          /* @__PURE__ */ f.jsx("div", { className: "flex max-sm:hidden", children: xh(m.current_page, m.last_page).map((d) => /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              onClick: () => y(d),
              "aria-current": d === m.current_page ? "page" : void 0,
              className: `size-8 rounded-md text-sm/5 font-medium observatory-focus ${d === m.current_page ? "bg-zinc-950 text-white" : "text-zinc-600 hover:bg-zinc-100"}`,
              children: d
            },
            d
          )) }),
          /* @__PURE__ */ f.jsxs(
            "button",
            {
              type: "button",
              onClick: () => y(m.current_page + 1),
              disabled: m.current_page === m.last_page,
              className: "relative inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40",
              children: [
                /* @__PURE__ */ f.jsx(
                  "span",
                  {
                    className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                    "aria-hidden": "true"
                  }
                ),
                "Next",
                /* @__PURE__ */ f.jsx(zf, { className: "size-4 h-lh shrink-0 fill-zinc-400" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function zh({ filtered: s }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "flex min-h-72 flex-col items-center justify-center gap-3 py-12 text-center", children: [
    /* @__PURE__ */ f.jsx(Sf, { className: "size-4 shrink-0 fill-zinc-400" }),
    /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
      /* @__PURE__ */ f.jsx("h2", { className: "text-base font-medium text-zinc-950", children: s ? "No matching traces" : "No traces yet" }),
      /* @__PURE__ */ f.jsx("p", { className: "max-w-[52ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: s ? "Clear a filter or try a broader search." : "Run a Laravel AI agent. Its execution will appear here automatically." })
    ] })
  ] });
}
function Sh() {
  return Array.from({ length: 7 }, (s, m) => /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "grid animate-pulse gap-2 border-b border-zinc-950/5 py-4",
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "h-4 w-2/5 rounded bg-zinc-100" }),
        /* @__PURE__ */ f.jsx("div", { className: "h-3 w-3/5 rounded bg-zinc-100" })
      ]
    },
    m
  ));
}
function Jr({ trace: s, onNavigate: m }) {
  const y = Vr(s.agent_class);
  return /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-0.5", children: [
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        onClick: () => m(s.trace_id),
        className: "group relative min-w-0 rounded text-left observatory-focus",
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 items-center gap-1.5", children: [
            /* @__PURE__ */ f.jsx("div", { className: "truncate text-base font-medium text-zinc-950 sm:text-sm/5", children: y !== "—" ? y : s.name }),
            /* @__PURE__ */ f.jsx(q1, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-600" })
          ] }),
          /* @__PURE__ */ f.jsx(
            "span",
            {
              className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 flex-wrap gap-x-1.5 text-base/7 text-zinc-500 sm:text-sm/6", children: [
      s.feature ? /* @__PURE__ */ f.jsx("span", { children: s.feature }) : null,
      s.feature && s.tool_count > 0 ? /* @__PURE__ */ f.jsx("span", { children: "·" }) : null,
      s.tool_count > 0 ? /* @__PURE__ */ f.jsxs("span", { className: "tabular-nums", children: [
        s.tool_count,
        " ",
        s.tool_count === 1 ? "tool call" : "tool calls"
      ] }) : null,
      !s.feature && s.tool_count === 0 ? /* @__PURE__ */ f.jsx("span", { children: s.name }) : null
    ] })
  ] });
}
function jh({ trace: s, onNavigate: m }) {
  return /* @__PURE__ */ f.jsxs("article", { className: "grid gap-3 border-b border-zinc-950/10 py-4 lg:hidden", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 items-start justify-between gap-3", children: [
      /* @__PURE__ */ f.jsx(Jr, { trace: s, onNavigate: m }),
      /* @__PURE__ */ f.jsx($u, { status: s.status, compact: !0 })
    ] }),
    /* @__PURE__ */ f.jsxs("dl", { className: "grid grid-cols-3 gap-4", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ f.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Model" }),
        /* @__PURE__ */ f.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500", children: s.model ?? "—" })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Tokens" }),
        /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums", children: Oa(s.total_tokens) })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Latency" }),
        /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums", children: Ra(s.duration_ms) })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        title: s.started_at,
        className: "text-base/7 text-zinc-500 tabular-nums",
        children: wr(s.started_at)
      }
    )
  ] });
}
function Eh({
  className: s,
  filters: m,
  loading: y,
  meta: d,
  onFilter: O,
  onNavigate: H,
  onPage: Z,
  onRefresh: w,
  onReset: A,
  traces: E
}) {
  const J = Object.entries(m).some(
    ([R, nl]) => !["page", "per_page"].includes(R) && nl !== ""
  );
  return /* @__PURE__ */ f.jsx("main", { className: Xl("isolate min-h-dvh min-w-0 bg-white", s), children: /* @__PURE__ */ f.jsxs("div", { className: "mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:px-8", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 items-baseline gap-3", children: [
        /* @__PURE__ */ f.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-balance text-zinc-950", children: "Traces" }),
        /* @__PURE__ */ f.jsx("div", { className: "truncate text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: d ? `${d.total.toLocaleString()} recorded` : "Loading" })
      ] }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: w,
          className: "relative inline-flex shrink-0 items-center gap-1.5 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:py-1.5",
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ f.jsx(
              H1,
              {
                className: Xl(
                  "size-4 h-lh shrink-0 fill-zinc-400",
                  y && "animate-spin"
                )
              }
            ),
            "Refresh"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(
      bh,
      {
        filters: m,
        options: d?.filter_options ?? {},
        onChange: O,
        onReset: A
      }
    ),
    /* @__PURE__ */ f.jsxs("section", { "aria-label": "Recorded traces", children: [
      y && E.length === 0 ? /* @__PURE__ */ f.jsx(Sh, {}) : null,
      y ? null : E.map((R) => /* @__PURE__ */ f.jsx(
        jh,
        {
          trace: R,
          onNavigate: H
        },
        R.trace_id
      )),
      /* @__PURE__ */ f.jsx("div", { className: "-mx-4 -my-2 hidden overflow-x-auto whitespace-nowrap sm:-mx-6 lg:-mx-8 lg:block", children: /* @__PURE__ */ f.jsx("div", { className: "inline-block min-w-full px-4 py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ f.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { className: "border-b border-zinc-950/10", children: [
          /* @__PURE__ */ f.jsx("th", { className: "py-2.5 pr-4 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Agent" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-2.5 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Status" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-2.5 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Provider / model" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-2.5 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Tokens" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-2.5 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Cost" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-2.5 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Latency" }),
          /* @__PURE__ */ f.jsx("th", { className: "py-2.5 pl-4 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Started" })
        ] }) }),
        /* @__PURE__ */ f.jsx("tbody", { children: !y && E.map((R) => /* @__PURE__ */ f.jsxs(
          "tr",
          {
            className: "border-b border-zinc-950/5",
            children: [
              /* @__PURE__ */ f.jsx("td", { className: "py-3 pr-4 align-middle", children: /* @__PURE__ */ f.jsx("div", { className: "min-w-56", children: /* @__PURE__ */ f.jsx(
                Jr,
                {
                  trace: R,
                  onNavigate: H
                }
              ) }) }),
              /* @__PURE__ */ f.jsx("td", { className: "px-4 py-3 align-middle", children: /* @__PURE__ */ f.jsx(
                $u,
                {
                  status: R.status,
                  compact: !0
                }
              ) }),
              /* @__PURE__ */ f.jsx("td", { className: "px-4 py-3 align-middle", children: /* @__PURE__ */ f.jsxs("div", { className: "grid gap-0.5", children: [
                /* @__PURE__ */ f.jsx("div", { className: "text-sm/5 text-zinc-900", children: R.provider ?? "—" }),
                /* @__PURE__ */ f.jsx("div", { className: "max-w-44 truncate font-mono text-sm/5 text-zinc-500", children: R.model ?? "—" })
              ] }) }),
              /* @__PURE__ */ f.jsx("td", { className: "px-4 py-3 text-right align-middle text-sm/5 text-zinc-900 tabular-nums", children: Oa(
                R.total_tokens
              ) }),
              /* @__PURE__ */ f.jsx("td", { className: "px-4 py-3 text-right align-middle text-sm/5 text-zinc-500 tabular-nums", children: Ef(
                R.estimated_cost,
                R.currency
              ) }),
              /* @__PURE__ */ f.jsx("td", { className: "px-4 py-3 text-right align-middle text-sm/5 text-zinc-900 tabular-nums", children: Ra(
                R.duration_ms
              ) }),
              /* @__PURE__ */ f.jsx("td", { className: "py-3 pl-4 text-right align-middle", children: /* @__PURE__ */ f.jsx(
                "div",
                {
                  title: R.started_at,
                  className: "text-sm/5 text-zinc-600 tabular-nums",
                  children: wr(
                    R.started_at
                  )
                }
              ) })
            ]
          },
          R.trace_id
        )) })
      ] }) }) }),
      !y && E.length === 0 ? /* @__PURE__ */ f.jsx(zh, { filtered: J }) : null,
      /* @__PURE__ */ f.jsx(ph, { meta: d, onPage: Z })
    ] })
  ] }) });
}
const Zr = {
  search: "",
  status: "",
  provider: "",
  model: "",
  agent_class: "",
  span_type: "",
  feature: "",
  user: "",
  tenant: "",
  has_error: "",
  has_tool_calls: "",
  min_duration: "",
  started_after: "",
  started_before: "",
  page: 1,
  per_page: 25
};
function $r() {
  return /* @__PURE__ */ f.jsxs(
    "a",
    {
      href: "/",
      "aria-label": "Homepage",
      className: "flex min-w-0 items-center gap-2 rounded observatory-focus",
      children: [
        /* @__PURE__ */ f.jsx(Sf, { className: "size-4 shrink-0 fill-amber-500" }),
        /* @__PURE__ */ f.jsx("div", { className: "truncate text-base font-semibold tracking-tight text-zinc-950", children: "AI Observatory" })
      ]
    }
  );
}
function Nh({ basePath: s, config: m, onNavigate: y }) {
  function d(O) {
    O.preventDefault(), y(null);
  }
  return /* @__PURE__ */ f.jsxs("aside", { className: "fixed inset-y-0 left-0 z-40 hidden w-56 flex-col border-r border-zinc-950/10 bg-white lg:flex", children: [
    /* @__PURE__ */ f.jsx("div", { className: "flex h-14 shrink-0 items-center border-b border-zinc-950/10 px-4", children: /* @__PURE__ */ f.jsx($r, {}) }),
    /* @__PURE__ */ f.jsx("nav", { className: "grow p-3", "aria-label": "Main navigation", children: /* @__PURE__ */ f.jsxs(
      "a",
      {
        href: `${s}/traces`,
        onClick: d,
        "aria-current": "page",
        className: "flex items-center gap-2 rounded-lg bg-zinc-100 py-2 pr-3 pl-2 text-sm/5 font-medium text-zinc-950 observatory-focus",
        children: [
          /* @__PURE__ */ f.jsx(Xr, { className: "size-4 h-lh shrink-0 fill-zinc-500" }),
          "Traces"
        ]
      }
    ) }),
    /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1 border-t border-zinc-950/10 p-4", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 text-sm/5 font-medium text-zinc-900", children: [
        /* @__PURE__ */ f.jsx("span", { className: "size-1.5 shrink-0 rounded-full bg-emerald-500" }),
        "Recording enabled"
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "text-sm/5 text-zinc-500", children: [
        m.environment,
        " · ",
        m.recordingMode
      ] })
    ] })
  ] });
}
function _h({ basePath: s, onNavigate: m }) {
  const [y, d] = T.useState(!1);
  function O(H) {
    H.preventDefault(), d(!1), m(null);
  }
  return /* @__PURE__ */ f.jsxs("header", { className: "sticky top-0 z-40 border-b border-zinc-950/10 bg-white/95 backdrop-blur lg:hidden", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex h-14 items-center justify-between gap-4 px-4 sm:px-6", children: [
      /* @__PURE__ */ f.jsx($r, {}),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: () => d((H) => !H),
          className: "relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100",
          "aria-label": "Toggle navigation",
          "aria-expanded": y,
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            y ? /* @__PURE__ */ f.jsx(jf, { className: "size-4 shrink-0 fill-zinc-500" }) : /* @__PURE__ */ f.jsx(Y1, { className: "size-4 shrink-0 fill-zinc-500" })
          ]
        }
      )
    ] }),
    y ? /* @__PURE__ */ f.jsx(
      "nav",
      {
        className: "border-t border-zinc-950/10 p-3",
        "aria-label": "Mobile navigation",
        children: /* @__PURE__ */ f.jsxs(
          "a",
          {
            href: `${s}/traces`,
            onClick: O,
            "aria-current": "page",
            className: "flex items-center gap-2 rounded-lg bg-zinc-100 py-2.5 pr-3 pl-2.5 text-base/6 font-medium text-zinc-950 observatory-focus sm:text-sm/5",
            children: [
              /* @__PURE__ */ f.jsx(Xr, { className: "size-5 h-lh shrink-0 fill-zinc-500 sm:size-4" }),
              "Traces"
            ]
          }
        )
      }
    ) : null
  ] });
}
function Th({ message: s, onRetry: m }) {
  return /* @__PURE__ */ f.jsx("div", { className: "mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col justify-between gap-3 rounded-lg bg-red-50 p-4 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-pretty text-red-700 sm:text-sm/6", children: s }),
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        onClick: m,
        className: "relative w-fit rounded-md px-2.5 py-1.5 text-sm/5 font-medium text-red-700 ring-1 ring-red-600/20 observatory-focus hover:bg-red-100",
        children: [
          /* @__PURE__ */ f.jsx(
            "span",
            {
              className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
              "aria-hidden": "true"
            }
          ),
          "Try again"
        ]
      }
    )
  ] }) });
}
function Ah({ className: s }) {
  const m = window.AiObservatory, [y, d] = T.useState(m.initialTraceId), [O, H] = T.useState(Zr), [Z, w] = T.useState([]), [A, E] = T.useState(null), [J, R] = T.useState(null), [nl, Yl] = T.useState(!0), [Ml, Ol] = T.useState(null), [pt, Zl] = T.useState(0), zt = T.useMemo(() => dh(O), [O]), pl = T.useCallback(
    (P, X = !1) => {
      const fl = P ? `${m.basePath}/traces/${P}` : `${m.basePath}/traces`;
      window.history[X ? "replaceState" : "pushState"](
        { traceId: P },
        "",
        fl
      ), d(P), window.scrollTo({ top: 0 });
    },
    [m.basePath]
  );
  T.useEffect(() => {
    function P() {
      const X = `${m.basePath}/traces/`, fl = window.location.pathname.startsWith(X) ? window.location.pathname.slice(X.length).split("/")[0] : null;
      d(fl || null);
    }
    return window.addEventListener("popstate", P), () => window.removeEventListener("popstate", P);
  }, [m.basePath]), T.useEffect(() => {
    const P = new AbortController(), X = window.setTimeout(
      async () => {
        Yl(!0), Ol(null);
        try {
          if (y) {
            const fl = await qr(
              `${m.apiBase}/${y}`,
              P.signal
            );
            R(fl.data);
          } else {
            const fl = await qr(
              `${m.apiBase}?${zt}`,
              P.signal
            );
            w(fl.data), E(fl.meta);
          }
        } catch (fl) {
          fl.name !== "AbortError" && Ol(fl.message);
        } finally {
          P.signal.aborted || Yl(!1);
        }
      },
      y ? 0 : 250
    );
    return () => {
      window.clearTimeout(X), P.abort();
    };
  }, [m.apiBase, zt, pt, y]);
  function Vl(P, X) {
    H((fl) => ({ ...fl, [P]: X, page: 1 }));
  }
  const st = Ml && !nl && (y ? !J : Z.length === 0);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: Xl(
        "isolate min-h-dvh bg-zinc-50 font-sans text-zinc-950",
        s
      ),
      children: [
        /* @__PURE__ */ f.jsx(
          Nh,
          {
            basePath: m.basePath,
            config: m,
            onNavigate: pl
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: "min-w-0 lg:pl-56", children: [
          /* @__PURE__ */ f.jsx(
            _h,
            {
              basePath: m.basePath,
              onNavigate: pl
            }
          ),
          Ml ? /* @__PURE__ */ f.jsx(
            Th,
            {
              message: Ml,
              onRetry: () => Zl((P) => P + 1)
            }
          ) : null,
          !st && (y ? /* @__PURE__ */ f.jsx(
            yh,
            {
              loading: nl,
              trace: J,
              onBack: () => pl(null)
            }
          ) : /* @__PURE__ */ f.jsx(
            Eh,
            {
              filters: O,
              loading: nl,
              meta: A,
              traces: Z,
              onFilter: Vl,
              onNavigate: pl,
              onPage: (P) => H((X) => ({ ...X, page: P })),
              onRefresh: () => Zl((P) => P + 1),
              onReset: () => H(Zr)
            }
          ))
        ] })
      ]
    }
  );
}
A1.createRoot(document.getElementById("ai-observatory")).render(
  /* @__PURE__ */ f.jsx(T.StrictMode, { children: /* @__PURE__ */ f.jsx(Ah, {}) })
);
