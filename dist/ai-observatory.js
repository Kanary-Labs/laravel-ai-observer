var hf = { exports: {} }, Tn = {};
var Tr;
function b1() {
  if (Tr) return Tn;
  Tr = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.fragment");
  function b(d, D, R) {
    var Z = null;
    if (R !== void 0 && (Z = "" + R), D.key !== void 0 && (Z = "" + D.key), "key" in D) {
      R = {};
      for (var K in D)
        K !== "key" && (R[K] = D[K]);
    } else R = D;
    return D = R.ref, {
      $$typeof: s,
      type: d,
      key: Z,
      ref: D !== void 0 ? D : null,
      props: R
    };
  }
  return Tn.Fragment = m, Tn.jsx = b, Tn.jsxs = b, Tn;
}
var Ar;
function x1() {
  return Ar || (Ar = 1, hf.exports = b1()), hf.exports;
}
var f = x1(), vf = { exports: {} }, Q = {};
var Mr;
function p1() {
  if (Mr) return Q;
  Mr = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), nl = Symbol.iterator;
  function Ul(h) {
    return h === null || typeof h != "object" ? null : (h = nl && h[nl] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var pl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _l = Object.assign, $ = {};
  function yl(h, _, O) {
    this.props = h, this.context = _, this.refs = $, this.updater = O || pl;
  }
  yl.prototype.isReactComponent = {}, yl.prototype.setState = function(h, _) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, _, "setState");
  }, yl.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function St() {
  }
  St.prototype = yl.prototype;
  function Tl(h, _, O) {
    this.props = h, this.context = _, this.refs = $, this.updater = O || pl;
  }
  var Ll = Tl.prototype = new St();
  Ll.constructor = Tl, _l(Ll, yl.prototype), Ll.isPureReactComponent = !0;
  var dt = Array.isArray;
  function ll() {
  }
  var X = { H: null, A: null, T: null, S: null }, sl = Object.prototype.hasOwnProperty;
  function _t(h, _, O) {
    var H = O.ref;
    return {
      $$typeof: s,
      type: h,
      key: _,
      ref: H !== void 0 ? H : null,
      props: O
    };
  }
  function Le(h, _) {
    return _t(h.type, _, h.props);
  }
  function Tt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === s;
  }
  function Kl(h) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(O) {
      return _[O];
    });
  }
  var je = /\/+/g;
  function Rt(h, _) {
    return typeof h == "object" && h !== null && h.key != null ? Kl("" + h.key) : _.toString(36);
  }
  function zt(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(ll, ll) : (h.status = "pending", h.then(
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
  function j(h, _, O, H, w) {
    var W = typeof h;
    (W === "undefined" || W === "boolean") && (h = null);
    var il = !1;
    if (h === null) il = !0;
    else
      switch (W) {
        case "bigint":
        case "string":
        case "number":
          il = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case s:
            case m:
              il = !0;
              break;
            case J:
              return il = h._init, j(
                il(h._payload),
                _,
                O,
                H,
                w
              );
          }
      }
    if (il)
      return w = w(h), il = H === "" ? "." + Rt(h, 0) : H, dt(w) ? (O = "", il != null && (O = il.replace(je, "$&/") + "/"), j(w, _, O, "", function(Ua) {
        return Ua;
      })) : w != null && (Tt(w) && (w = Le(
        w,
        O + (w.key == null || h && h.key === w.key ? "" : ("" + w.key).replace(
          je,
          "$&/"
        ) + "/") + il
      )), _.push(w)), 1;
    il = 0;
    var wl = H === "" ? "." : H + ":";
    if (dt(h))
      for (var jl = 0; jl < h.length; jl++)
        H = h[jl], W = wl + Rt(H, jl), il += j(
          H,
          _,
          O,
          W,
          w
        );
    else if (jl = Ul(h), typeof jl == "function")
      for (h = jl.call(h), jl = 0; !(H = h.next()).done; )
        H = H.value, W = wl + Rt(H, jl++), il += j(
          H,
          _,
          O,
          W,
          w
        );
    else if (W === "object") {
      if (typeof h.then == "function")
        return j(
          zt(h),
          _,
          O,
          H,
          w
        );
      throw _ = String(h), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return il;
  }
  function M(h, _, O) {
    if (h == null) return h;
    var H = [], w = 0;
    return j(h, H, "", "", function(W) {
      return _.call(O, W, w++);
    }), H;
  }
  function G(h) {
    if (h._status === -1) {
      var _ = h._result;
      _ = _(), _.then(
        function(O) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = O);
        },
        function(O) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = O);
        }
      ), h._status === -1 && (h._status = 0, h._result = _);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var dl = typeof reportError == "function" ? reportError : function(h) {
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
  }, hl = {
    map: M,
    forEach: function(h, _, O) {
      M(
        h,
        function() {
          _.apply(this, arguments);
        },
        O
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
  return Q.Activity = B, Q.Children = hl, Q.Component = yl, Q.Fragment = b, Q.Profiler = D, Q.PureComponent = Tl, Q.StrictMode = d, Q.Suspense = A, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, Q.__COMPILER_RUNTIME = {
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
  }, Q.cloneElement = function(h, _, O) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var H = _l({}, h.props), w = h.key;
    if (_ != null)
      for (W in _.key !== void 0 && (w = "" + _.key), _)
        !sl.call(_, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && _.ref === void 0 || (H[W] = _[W]);
    var W = arguments.length - 2;
    if (W === 1) H.children = O;
    else if (1 < W) {
      for (var il = Array(W), wl = 0; wl < W; wl++)
        il[wl] = arguments[wl + 2];
      H.children = il;
    }
    return _t(h.type, w, H);
  }, Q.createContext = function(h) {
    return h = {
      $$typeof: Z,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: R,
      _context: h
    }, h;
  }, Q.createElement = function(h, _, O) {
    var H, w = {}, W = null;
    if (_ != null)
      for (H in _.key !== void 0 && (W = "" + _.key), _)
        sl.call(_, H) && H !== "key" && H !== "__self" && H !== "__source" && (w[H] = _[H]);
    var il = arguments.length - 2;
    if (il === 1) w.children = O;
    else if (1 < il) {
      for (var wl = Array(il), jl = 0; jl < il; jl++)
        wl[jl] = arguments[jl + 2];
      w.children = wl;
    }
    if (h && h.defaultProps)
      for (H in il = h.defaultProps, il)
        w[H] === void 0 && (w[H] = il[H]);
    return _t(h, W, w);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(h) {
    return { $$typeof: K, render: h };
  }, Q.isValidElement = Tt, Q.lazy = function(h) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: h },
      _init: G
    };
  }, Q.memo = function(h, _) {
    return {
      $$typeof: z,
      type: h,
      compare: _ === void 0 ? null : _
    };
  }, Q.startTransition = function(h) {
    var _ = X.T, O = {};
    X.T = O;
    try {
      var H = h(), w = X.S;
      w !== null && w(O, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(ll, dl);
    } catch (W) {
      dl(W);
    } finally {
      _ !== null && O.types !== null && (_.types = O.types), X.T = _;
    }
  }, Q.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, Q.use = function(h) {
    return X.H.use(h);
  }, Q.useActionState = function(h, _, O) {
    return X.H.useActionState(h, _, O);
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
  }, Q.useImperativeHandle = function(h, _, O) {
    return X.H.useImperativeHandle(h, _, O);
  }, Q.useInsertionEffect = function(h, _) {
    return X.H.useInsertionEffect(h, _);
  }, Q.useLayoutEffect = function(h, _) {
    return X.H.useLayoutEffect(h, _);
  }, Q.useMemo = function(h, _) {
    return X.H.useMemo(h, _);
  }, Q.useOptimistic = function(h, _) {
    return X.H.useOptimistic(h, _);
  }, Q.useReducer = function(h, _, O) {
    return X.H.useReducer(h, _, O);
  }, Q.useRef = function(h) {
    return X.H.useRef(h);
  }, Q.useState = function(h) {
    return X.H.useState(h);
  }, Q.useSyncExternalStore = function(h, _, O) {
    return X.H.useSyncExternalStore(
      h,
      _,
      O
    );
  }, Q.useTransition = function() {
    return X.H.useTransition();
  }, Q.version = "19.2.8", Q;
}
var Or;
function pf() {
  return Or || (Or = 1, vf.exports = p1()), vf.exports;
}
var T = pf(), yf = { exports: {} }, An = {}, gf = { exports: {} }, bf = {};
var Dr;
function S1() {
  return Dr || (Dr = 1, (function(s) {
    function m(j, M) {
      var G = j.length;
      j.push(M);
      l: for (; 0 < G; ) {
        var dl = G - 1 >>> 1, hl = j[dl];
        if (0 < D(hl, M))
          j[dl] = M, j[G] = hl, G = dl;
        else break l;
      }
    }
    function b(j) {
      return j.length === 0 ? null : j[0];
    }
    function d(j) {
      if (j.length === 0) return null;
      var M = j[0], G = j.pop();
      if (G !== M) {
        j[0] = G;
        l: for (var dl = 0, hl = j.length, h = hl >>> 1; dl < h; ) {
          var _ = 2 * (dl + 1) - 1, O = j[_], H = _ + 1, w = j[H];
          if (0 > D(O, G))
            H < hl && 0 > D(w, O) ? (j[dl] = w, j[H] = G, dl = H) : (j[dl] = O, j[_] = G, dl = _);
          else if (H < hl && 0 > D(w, G))
            j[dl] = w, j[H] = G, dl = H;
          else break l;
        }
      }
      return M;
    }
    function D(j, M) {
      var G = j.sortIndex - M.sortIndex;
      return G !== 0 ? G : j.id - M.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      s.unstable_now = function() {
        return R.now();
      };
    } else {
      var Z = Date, K = Z.now();
      s.unstable_now = function() {
        return Z.now() - K;
      };
    }
    var A = [], z = [], J = 1, B = null, nl = 3, Ul = !1, pl = !1, _l = !1, $ = !1, yl = typeof setTimeout == "function" ? setTimeout : null, St = typeof clearTimeout == "function" ? clearTimeout : null, Tl = typeof setImmediate < "u" ? setImmediate : null;
    function Ll(j) {
      for (var M = b(z); M !== null; ) {
        if (M.callback === null) d(z);
        else if (M.startTime <= j)
          d(z), M.sortIndex = M.expirationTime, m(A, M);
        else break;
        M = b(z);
      }
    }
    function dt(j) {
      if (_l = !1, Ll(j), !pl)
        if (b(A) !== null)
          pl = !0, ll || (ll = !0, Kl());
        else {
          var M = b(z);
          M !== null && zt(dt, M.startTime - j);
        }
    }
    var ll = !1, X = -1, sl = 5, _t = -1;
    function Le() {
      return $ ? !0 : !(s.unstable_now() - _t < sl);
    }
    function Tt() {
      if ($ = !1, ll) {
        var j = s.unstable_now();
        _t = j;
        var M = !0;
        try {
          l: {
            pl = !1, _l && (_l = !1, St(X), X = -1), Ul = !0;
            var G = nl;
            try {
              t: {
                for (Ll(j), B = b(A); B !== null && !(B.expirationTime > j && Le()); ) {
                  var dl = B.callback;
                  if (typeof dl == "function") {
                    B.callback = null, nl = B.priorityLevel;
                    var hl = dl(
                      B.expirationTime <= j
                    );
                    if (j = s.unstable_now(), typeof hl == "function") {
                      B.callback = hl, Ll(j), M = !0;
                      break t;
                    }
                    B === b(A) && d(A), Ll(j);
                  } else d(A);
                  B = b(A);
                }
                if (B !== null) M = !0;
                else {
                  var h = b(z);
                  h !== null && zt(
                    dt,
                    h.startTime - j
                  ), M = !1;
                }
              }
              break l;
            } finally {
              B = null, nl = G, Ul = !1;
            }
            M = void 0;
          }
        } finally {
          M ? Kl() : ll = !1;
        }
      }
    }
    var Kl;
    if (typeof Tl == "function")
      Kl = function() {
        Tl(Tt);
      };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), Rt = je.port2;
      je.port1.onmessage = Tt, Kl = function() {
        Rt.postMessage(null);
      };
    } else
      Kl = function() {
        yl(Tt, 0);
      };
    function zt(j, M) {
      X = yl(function() {
        j(s.unstable_now());
      }, M);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, s.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : sl = 0 < j ? Math.floor(1e3 / j) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return nl;
    }, s.unstable_next = function(j) {
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
        return j();
      } finally {
        nl = G;
      }
    }, s.unstable_requestPaint = function() {
      $ = !0;
    }, s.unstable_runWithPriority = function(j, M) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var G = nl;
      nl = j;
      try {
        return M();
      } finally {
        nl = G;
      }
    }, s.unstable_scheduleCallback = function(j, M, G) {
      var dl = s.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? dl + G : dl) : G = dl, j) {
        case 1:
          var hl = -1;
          break;
        case 2:
          hl = 250;
          break;
        case 5:
          hl = 1073741823;
          break;
        case 4:
          hl = 1e4;
          break;
        default:
          hl = 5e3;
      }
      return hl = G + hl, j = {
        id: J++,
        callback: M,
        priorityLevel: j,
        startTime: G,
        expirationTime: hl,
        sortIndex: -1
      }, G > dl ? (j.sortIndex = G, m(z, j), b(A) === null && j === b(z) && (_l ? (St(X), X = -1) : _l = !0, zt(dt, G - dl))) : (j.sortIndex = hl, m(A, j), pl || Ul || (pl = !0, ll || (ll = !0, Kl()))), j;
    }, s.unstable_shouldYield = Le, s.unstable_wrapCallback = function(j) {
      var M = nl;
      return function() {
        var G = nl;
        nl = M;
        try {
          return j.apply(this, arguments);
        } finally {
          nl = G;
        }
      };
    };
  })(bf)), bf;
}
var Rr;
function z1() {
  return Rr || (Rr = 1, gf.exports = S1()), gf.exports;
}
var xf = { exports: {} }, Xl = {};
var Ur;
function j1() {
  if (Ur) return Xl;
  Ur = 1;
  var s = pf();
  function m(A) {
    var z = "https://react.dev/errors/" + A;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        z += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + A + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b() {
  }
  var d = {
    d: {
      f: b,
      r: function() {
        throw Error(m(522));
      },
      D: b,
      C: b,
      L: b,
      m: b,
      X: b,
      S: b,
      M: b
    },
    p: 0,
    findDOMNode: null
  }, D = /* @__PURE__ */ Symbol.for("react.portal");
  function R(A, z, J) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: D,
      key: B == null ? null : "" + B,
      children: A,
      containerInfo: z,
      implementation: J
    };
  }
  var Z = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function K(A, z) {
    if (A === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return Xl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, Xl.createPortal = function(A, z) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(m(299));
    return R(A, z, null, J);
  }, Xl.flushSync = function(A) {
    var z = Z.T, J = d.p;
    try {
      if (Z.T = null, d.p = 2, A) return A();
    } finally {
      Z.T = z, d.p = J, d.d.f();
    }
  }, Xl.preconnect = function(A, z) {
    typeof A == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, d.d.C(A, z));
  }, Xl.prefetchDNS = function(A) {
    typeof A == "string" && d.d.D(A);
  }, Xl.preinit = function(A, z) {
    if (typeof A == "string" && z && typeof z.as == "string") {
      var J = z.as, B = K(J, z.crossOrigin), nl = typeof z.integrity == "string" ? z.integrity : void 0, Ul = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      J === "style" ? d.d.S(
        A,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: B,
          integrity: nl,
          fetchPriority: Ul
        }
      ) : J === "script" && d.d.X(A, {
        crossOrigin: B,
        integrity: nl,
        fetchPriority: Ul,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, Xl.preinitModule = function(A, z) {
    if (typeof A == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var J = K(
            z.as,
            z.crossOrigin
          );
          d.d.M(A, {
            crossOrigin: J,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && d.d.M(A);
  }, Xl.preload = function(A, z) {
    if (typeof A == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var J = z.as, B = K(J, z.crossOrigin);
      d.d.L(A, J, {
        crossOrigin: B,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0,
        type: typeof z.type == "string" ? z.type : void 0,
        fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
        referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
        imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
        imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
        media: typeof z.media == "string" ? z.media : void 0
      });
    }
  }, Xl.preloadModule = function(A, z) {
    if (typeof A == "string")
      if (z) {
        var J = K(z.as, z.crossOrigin);
        d.d.m(A, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: J,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else d.d.m(A);
  }, Xl.requestFormReset = function(A) {
    d.d.r(A);
  }, Xl.unstable_batchedUpdates = function(A, z) {
    return A(z);
  }, Xl.useFormState = function(A, z, J) {
    return Z.H.useFormState(A, z, J);
  }, Xl.useFormStatus = function() {
    return Z.H.useHostTransitionStatus();
  }, Xl.version = "19.2.8", Xl;
}
var Hr;
function N1() {
  if (Hr) return xf.exports;
  Hr = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (m) {
        console.error(m);
      }
  }
  return s(), xf.exports = j1(), xf.exports;
}
var Cr;
function E1() {
  if (Cr) return An;
  Cr = 1;
  var s = z1(), m = pf(), b = N1();
  function d(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function D(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function R(l) {
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
  function K(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function A(l) {
    if (R(l) !== l)
      throw Error(d(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = R(l), t === null) throw Error(d(188));
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
  var B = Object.assign, nl = /* @__PURE__ */ Symbol.for("react.element"), Ul = /* @__PURE__ */ Symbol.for("react.transitional.element"), pl = /* @__PURE__ */ Symbol.for("react.portal"), _l = /* @__PURE__ */ Symbol.for("react.fragment"), $ = /* @__PURE__ */ Symbol.for("react.strict_mode"), yl = /* @__PURE__ */ Symbol.for("react.profiler"), St = /* @__PURE__ */ Symbol.for("react.consumer"), Tl = /* @__PURE__ */ Symbol.for("react.context"), Ll = /* @__PURE__ */ Symbol.for("react.forward_ref"), dt = /* @__PURE__ */ Symbol.for("react.suspense"), ll = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), sl = /* @__PURE__ */ Symbol.for("react.lazy"), _t = /* @__PURE__ */ Symbol.for("react.activity"), Le = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Tt = Symbol.iterator;
  function Kl(l) {
    return l === null || typeof l != "object" ? null : (l = Tt && l[Tt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Rt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === je ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _l:
        return "Fragment";
      case yl:
        return "Profiler";
      case $:
        return "StrictMode";
      case dt:
        return "Suspense";
      case ll:
        return "SuspenseList";
      case _t:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case pl:
          return "Portal";
        case Tl:
          return l.displayName || "Context";
        case St:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ll:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case X:
          return t = l.displayName || null, t !== null ? t : Rt(l.type) || "Memo";
        case sl:
          t = l._payload, l = l._init;
          try {
            return Rt(l(t));
          } catch {
          }
      }
    return null;
  }
  var zt = Array.isArray, j = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, dl = [], hl = -1;
  function h(l) {
    return { current: l };
  }
  function _(l) {
    0 > hl || (l.current = dl[hl], dl[hl] = null, hl--);
  }
  function O(l, t) {
    hl++, dl[hl] = l.current, l.current = t;
  }
  var H = h(null), w = h(null), W = h(null), il = h(null);
  function wl(l, t) {
    switch (O(W, t), O(w, l), O(H, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? kd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = kd(t), l = Fd(t, l);
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
    _(H), O(H, l);
  }
  function jl() {
    _(H), _(w), _(W);
  }
  function Ua(l) {
    l.memoizedState !== null && O(il, l);
    var t = H.current, e = Fd(t, l.type);
    t !== e && (O(w, l), O(H, e));
  }
  function Mn(l) {
    w.current === l && (_(H), _(w)), il.current === l && (_(il), jn._currentValue = G);
  }
  var Wu, _f;
  function Ne(l) {
    if (Wu === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Wu = t && t[1] || "", _f = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Wu + l + _f;
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
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (p) {
                  var x = p;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (p) {
                  x = p;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                x = p;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
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
`), g = c.split(`
`);
        for (n = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < g.length && !g[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === r.length || n === g.length)
          for (a = r.length - 1, n = g.length - 1; 1 <= a && 0 <= n && r[a] !== g[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== g[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || r[a] !== g[n]) {
                  var S = `
` + r[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ku = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? Ne(e) : "";
  }
  function $r(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ne(l.type);
      case 16:
        return Ne("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ne("Suspense Fallback") : Ne("Suspense");
      case 19:
        return Ne("SuspenseList");
      case 0:
      case 15:
        return Fu(l.type, !1);
      case 11:
        return Fu(l.type.render, !1);
      case 1:
        return Fu(l.type, !0);
      case 31:
        return Ne("Activity");
      default:
        return "";
    }
  }
  function Tf(l) {
    try {
      var t = "", e = null;
      do
        t += $r(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Iu = Object.prototype.hasOwnProperty, Pu = s.unstable_scheduleCallback, li = s.unstable_cancelCallback, Wr = s.unstable_shouldYield, kr = s.unstable_requestPaint, lt = s.unstable_now, Fr = s.unstable_getCurrentPriorityLevel, Af = s.unstable_ImmediatePriority, Mf = s.unstable_UserBlockingPriority, On = s.unstable_NormalPriority, Ir = s.unstable_LowPriority, Of = s.unstable_IdlePriority, Pr = s.log, lo = s.unstable_setDisableYieldValue, Ha = null, tt = null;
  function Ft(l) {
    if (typeof Pr == "function" && lo(l), tt && typeof tt.setStrictMode == "function")
      try {
        tt.setStrictMode(Ha, l);
      } catch {
      }
  }
  var et = Math.clz32 ? Math.clz32 : ao, to = Math.log, eo = Math.LN2;
  function ao(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (to(l) / eo | 0) | 0;
  }
  var Dn = 256, Rn = 262144, Un = 4194304;
  function Ee(l) {
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
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = Ee(a) : (i &= c, i !== 0 ? n = Ee(i) : e || (e = c & ~l, e !== 0 && (n = Ee(e))))) : (c = a & ~u, c !== 0 ? n = Ee(c) : i !== 0 ? n = Ee(i) : e || (e = a & ~l, e !== 0 && (n = Ee(e)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, e = t & -t, u >= e || u === 32 && (e & 4194048) !== 0) ? t : n;
  }
  function Ca(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function no(l, t) {
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
  function Df() {
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
  function uo(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, r = l.expirationTimes, g = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var S = 31 - et(e), E = 1 << S;
      c[S] = 0, r[S] = -1;
      var x = g[S];
      if (x !== null)
        for (g[S] = null, S = 0; S < x.length; S++) {
          var p = x[S];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~E;
    }
    a !== 0 && Rf(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
  }
  function Rf(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - et(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Uf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - et(e), n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), e &= ~n;
    }
  }
  function Hf(l, t) {
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
  function Cf() {
    var l = M.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : pr(l.type));
  }
  function qf(l, t) {
    var e = M.p;
    try {
      return M.p = l, t();
    } finally {
      M.p = e;
    }
  }
  var It = Math.random().toString(36).slice(2), ql = "__reactFiber$" + It, Jl = "__reactProps$" + It, Ke = "__reactContainer$" + It, ni = "__reactEvents$" + It, io = "__reactListeners$" + It, co = "__reactHandles$" + It, Bf = "__reactResources$" + It, Ba = "__reactMarker$" + It;
  function ui(l) {
    delete l[ql], delete l[Jl], delete l[ni], delete l[io], delete l[co];
  }
  function Je(l) {
    var t = l[ql];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Ke] || e[ql]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = nr(l); l !== null; ) {
            if (e = l[ql]) return e;
            l = nr(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function $e(l) {
    if (l = l[ql] || l[Ke]) {
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
  function We(l) {
    var t = l[Bf];
    return t || (t = l[Bf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[Ba] = !0;
  }
  var Yf = /* @__PURE__ */ new Set(), Zf = {};
  function _e(l, t) {
    ke(l, t), ke(l + "Capture", t);
  }
  function ke(l, t) {
    for (Zf[l] = t, l = 0; l < t.length; l++)
      Yf.add(t[l]);
  }
  var fo = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Gf = {}, Xf = {};
  function so(l) {
    return Iu.call(Xf, l) ? !0 : Iu.call(Gf, l) ? !1 : fo.test(l) ? Xf[l] = !0 : (Gf[l] = !0, !1);
  }
  function Cn(l, t, e) {
    if (so(t))
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
  function rt(l) {
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
  function Qf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ro(l, t, e) {
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
      var t = Qf(l) ? "checked" : "value";
      l._valueTracker = ro(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function wf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Qf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function Bn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var oo = /[\n"\\]/g;
  function ot(l) {
    return l.replace(
      oo,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ci(l, t, e, a, n, u, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + rt(t)) : l.value !== "" + rt(t) && (l.value = "" + rt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? fi(l, i, rt(t)) : e != null ? fi(l, i, rt(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + rt(c) : l.removeAttribute("name");
  }
  function Vf(l, t, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ii(l);
        return;
      }
      e = e != null ? "" + rt(e) : "", t = t != null ? "" + rt(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ii(l);
  }
  function fi(l, t, e) {
    t === "number" && Bn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function Fe(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < e.length; n++)
        t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + rt(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lf(l, t, e) {
    if (t != null && (t = "" + rt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + rt(e) : "";
  }
  function Kf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(d(92));
        if (zt(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = rt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ii(l);
  }
  function Ie(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var mo = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Jf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || mo.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function $f(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(d(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && e[n] !== a && Jf(l, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Jf(l, u, t[u]);
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
  var ho = /* @__PURE__ */ new Map([
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
  ]), vo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yn(l) {
    return vo.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ht() {
  }
  var di = null;
  function ri(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Pe = null, la = null;
  function Wf(l) {
    var t = $e(l);
    if (t && (l = t.stateNode)) {
      var e = l[Jl] || null;
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
              'input[name="' + ot(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[Jl] || null;
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
              a = e[t], a.form === l.form && wf(a);
          }
          break l;
        case "textarea":
          Lf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && Fe(l, !!e.multiple, t, !1);
      }
    }
  }
  var oi = !1;
  function kf(l, t, e) {
    if (oi) return l(t, e);
    oi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (oi = !1, (Pe !== null || la !== null) && (Eu(), Pe && (t = Pe, l = la, la = Pe = null, Wf(t), l)))
        for (t = 0; t < l.length; t++) Wf(l[t]);
    }
  }
  function Za(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Jl] || null;
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
  function Ff() {
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
  function If() {
    return !1;
  }
  function $l(l) {
    function t(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xn : If, this.isPropagationStopped = If, this;
    }
    return B(t.prototype, {
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
  }, Qn = $l(Te), Xa = B({}, Te, { view: 0, detail: 0 }), yo = $l(Xa), vi, yi, Qa, wn = B({}, Xa, {
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
  }), Pf = $l(wn), go = B({}, wn, { dataTransfer: 0 }), bo = $l(go), xo = B({}, Xa, { relatedTarget: 0 }), gi = $l(xo), po = B({}, Te, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), So = $l(po), zo = B({}, Te, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), jo = $l(zo), No = B({}, Te, { data: 0 }), ls = $l(No), Eo = {
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
  }, _o = {
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
  }, To = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ao(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = To[l]) ? !!t[l] : !1;
  }
  function bi() {
    return Ao;
  }
  var Mo = B({}, Xa, {
    key: function(l) {
      if (l.key) {
        var t = Eo[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Gn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? _o[l.keyCode] || "Unidentified" : "";
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
  }), Oo = $l(Mo), Do = B({}, wn, {
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
  }), ts = $l(Do), Ro = B({}, Xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bi
  }), Uo = $l(Ro), Ho = B({}, Te, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Co = $l(Ho), qo = B({}, wn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bo = $l(qo), Yo = B({}, Te, {
    newState: 0,
    oldState: 0
  }), Zo = $l(Yo), Go = [9, 13, 27, 32], xi = Ct && "CompositionEvent" in window, wa = null;
  Ct && "documentMode" in document && (wa = document.documentMode);
  var Xo = Ct && "TextEvent" in window && !wa, es = Ct && (!xi || wa && 8 < wa && 11 >= wa), as = " ", ns = !1;
  function us(l, t) {
    switch (l) {
      case "keyup":
        return Go.indexOf(t.keyCode) !== -1;
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
  function is(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ta = !1;
  function Qo(l, t) {
    switch (l) {
      case "compositionend":
        return is(t);
      case "keypress":
        return t.which !== 32 ? null : (ns = !0, as);
      case "textInput":
        return l = t.data, l === as && ns ? null : l;
      default:
        return null;
    }
  }
  function wo(l, t) {
    if (ta)
      return l === "compositionend" || !xi && us(l, t) ? (l = Ff(), Zn = hi = Pt = null, ta = !1, l) : null;
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
        return es && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Vo = {
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
  function cs(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Vo[l.type] : t === "textarea";
  }
  function fs(l, t, e, a) {
    Pe ? la ? la.push(a) : la = [a] : Pe = a, t = Ru(t, "onChange"), 0 < t.length && (e = new Qn(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var Va = null, La = null;
  function Lo(l) {
    Vd(l, 0);
  }
  function Vn(l) {
    var t = Ya(l);
    if (wf(t)) return l;
  }
  function ss(l, t) {
    if (l === "change") return t;
  }
  var ds = !1;
  if (Ct) {
    var pi;
    if (Ct) {
      var Si = "oninput" in document;
      if (!Si) {
        var rs = document.createElement("div");
        rs.setAttribute("oninput", "return;"), Si = typeof rs.oninput == "function";
      }
      pi = Si;
    } else pi = !1;
    ds = pi && (!document.documentMode || 9 < document.documentMode);
  }
  function os() {
    Va && (Va.detachEvent("onpropertychange", ms), La = Va = null);
  }
  function ms(l) {
    if (l.propertyName === "value" && Vn(La)) {
      var t = [];
      fs(
        t,
        La,
        l,
        ri(l)
      ), kf(Lo, t);
    }
  }
  function Ko(l, t, e) {
    l === "focusin" ? (os(), Va = t, La = e, Va.attachEvent("onpropertychange", ms)) : l === "focusout" && os();
  }
  function Jo(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vn(La);
  }
  function $o(l, t) {
    if (l === "click") return Vn(t);
  }
  function Wo(l, t) {
    if (l === "input" || l === "change")
      return Vn(t);
  }
  function ko(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var at = typeof Object.is == "function" ? Object.is : ko;
  function Ka(l, t) {
    if (at(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Iu.call(t, n) || !at(l[n], t[n]))
        return !1;
    }
    return !0;
  }
  function hs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function vs(l, t) {
    var e = hs(l);
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
      e = hs(e);
    }
  }
  function ys(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ys(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function gs(l) {
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
  function zi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Fo = Ct && "documentMode" in document && 11 >= document.documentMode, ea = null, ji = null, Ja = null, Ni = !1;
  function bs(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ni || ea == null || ea !== Bn(a) || (a = ea, "selectionStart" in a && zi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
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
    ), l.push({ event: t, listeners: a }), t.target = ea)));
  }
  function Ae(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var aa = {
    animationend: Ae("Animation", "AnimationEnd"),
    animationiteration: Ae("Animation", "AnimationIteration"),
    animationstart: Ae("Animation", "AnimationStart"),
    transitionrun: Ae("Transition", "TransitionRun"),
    transitionstart: Ae("Transition", "TransitionStart"),
    transitioncancel: Ae("Transition", "TransitionCancel"),
    transitionend: Ae("Transition", "TransitionEnd")
  }, Ei = {}, xs = {};
  Ct && (xs = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function Me(l) {
    if (Ei[l]) return Ei[l];
    if (!aa[l]) return l;
    var t = aa[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in xs)
        return Ei[l] = t[e];
    return l;
  }
  var ps = Me("animationend"), Ss = Me("animationiteration"), zs = Me("animationstart"), Io = Me("transitionrun"), Po = Me("transitionstart"), lm = Me("transitioncancel"), js = Me("transitionend"), Ns = /* @__PURE__ */ new Map(), _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _i.push("scrollEnd");
  function jt(l, t) {
    Ns.set(l, t), _e(t, [l]);
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
  }, mt = [], na = 0, Ti = 0;
  function Kn() {
    for (var l = na, t = Ti = na = 0; t < l; ) {
      var e = mt[t];
      mt[t++] = null;
      var a = mt[t];
      mt[t++] = null;
      var n = mt[t];
      mt[t++] = null;
      var u = mt[t];
      if (mt[t++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Es(e, n, u);
    }
  }
  function Jn(l, t, e, a) {
    mt[na++] = l, mt[na++] = t, mt[na++] = e, mt[na++] = a, Ti |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
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
    return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - et(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = e | 536870912), u) : null;
  }
  function $n(l) {
    if (50 < yn)
      throw yn = 0, Bc = null, Error(d(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ua = {};
  function tm(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nt(l, t, e, a) {
    return new tm(l, t, e, a);
  }
  function Mi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var e = l.alternate;
    return e === null ? (e = nt(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function _s(l, t) {
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
      i = i1(
        l,
        e,
        H.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case _t:
          return l = nt(31, e, t, n), l.elementType = _t, l.lanes = u, l;
        case _l:
          return De(e.children, n, u, t);
        case $:
          i = 8, n |= 24;
          break;
        case yl:
          return l = nt(12, e, t, n | 2), l.elementType = yl, l.lanes = u, l;
        case dt:
          return l = nt(13, e, t, n), l.elementType = dt, l.lanes = u, l;
        case ll:
          return l = nt(19, e, t, n), l.elementType = ll, l.lanes = u, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Tl:
                i = 10;
                break l;
              case St:
                i = 9;
                break l;
              case Ll:
                i = 11;
                break l;
              case X:
                i = 14;
                break l;
              case sl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            d(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = nt(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t;
  }
  function De(l, t, e, a) {
    return l = nt(7, l, a, t), l.lanes = e, l;
  }
  function Oi(l, t, e) {
    return l = nt(6, l, null, t), l.lanes = e, l;
  }
  function Ts(l) {
    var t = nt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Di(l, t, e) {
    return t = nt(
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
  var As = /* @__PURE__ */ new WeakMap();
  function ht(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = As.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Tf(t)
      }, As.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Tf(t)
    };
  }
  var ia = [], ca = 0, kn = null, $a = 0, vt = [], yt = 0, le = null, At = 1, Mt = "";
  function Bt(l, t) {
    ia[ca++] = $a, ia[ca++] = kn, kn = l, $a = t;
  }
  function Ms(l, t, e) {
    vt[yt++] = At, vt[yt++] = Mt, vt[yt++] = le, le = l;
    var a = At;
    l = Mt;
    var n = 32 - et(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - et(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, At = 1 << 32 - et(t) + n | e << n | a, Mt = u + l;
    } else
      At = 1 << u | e << n | a, Mt = l;
  }
  function Ri(l) {
    l.return !== null && (Bt(l, 1), Ms(l, 1, 0));
  }
  function Ui(l) {
    for (; l === kn; )
      kn = ia[--ca], ia[ca] = null, $a = ia[--ca], ia[ca] = null;
    for (; l === le; )
      le = vt[--yt], vt[yt] = null, Mt = vt[--yt], vt[yt] = null, At = vt[--yt], vt[yt] = null;
  }
  function Os(l, t) {
    vt[yt++] = At, vt[yt++] = Mt, vt[yt++] = le, At = t.id, Mt = t.overflow, le = l;
  }
  var Bl = null, gl = null, tl = !1, te = null, gt = !1, Hi = Error(d(519));
  function ee(l) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wa(ht(t, l)), Hi;
  }
  function Ds(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[ql] = l, t[Jl] = a, e) {
      case "dialog":
        F("cancel", t), F("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < bn.length; e++)
          F(bn[e], t);
        break;
      case "source":
        F("error", t);
        break;
      case "img":
      case "image":
      case "link":
        F("error", t), F("load", t);
        break;
      case "details":
        F("toggle", t);
        break;
      case "input":
        F("invalid", t), Vf(
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
        F("invalid", t);
        break;
      case "textarea":
        F("invalid", t), Kf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || $d(t.textContent, e) ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)), a.onScroll != null && F("scroll", t), a.onScrollEnd != null && F("scrollend", t), a.onClick != null && (t.onclick = Ht), t = !0) : t = !1, t || ee(l, !0);
  }
  function Rs(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          gt = !1;
          return;
        case 27:
        case 3:
          gt = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function fa(l) {
    if (l !== Bl) return !1;
    if (!tl) return Rs(l), tl = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Ic(l.type, l.memoizedProps)), e = !e), e && gl && ee(l), Rs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
      gl = ar(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
      gl = ar(l);
    } else
      t === 27 ? (t = gl, ye(l.type) ? (l = af, af = null, gl = l) : gl = t) : gl = Bl ? xt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Re() {
    gl = Bl = null, tl = !1;
  }
  function Ci() {
    var l = te;
    return l !== null && (Il === null ? Il = l : Il.push.apply(
      Il,
      l
    ), te = null), l;
  }
  function Wa(l) {
    te === null ? te = [l] : te.push(l);
  }
  var qi = h(null), Ue = null, Yt = null;
  function ae(l, t, e) {
    O(qi, t._currentValue), t._currentValue = e;
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
  function sa(l, t, e, a) {
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
          at(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === il.current) {
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
      if (!at(
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
  function Yl(l) {
    return Us(Ue, l);
  }
  function In(l, t) {
    return Ue === null && He(l), Us(l, t);
  }
  function Us(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Yt === null) {
      if (l === null) throw Error(d(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return e;
  }
  var em = typeof AbortController < "u" ? AbortController : function() {
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
  }, am = s.unstable_scheduleCallback, nm = s.unstable_NormalPriority, Al = {
    $$typeof: Tl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Zi() {
    return {
      controller: new em(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ka(l) {
    l.refCount--, l.refCount === 0 && am(nm, function() {
      l.controller.abort();
    });
  }
  var Fa = null, Gi = 0, da = 0, ra = null;
  function um(l, t) {
    if (Fa === null) {
      var e = Fa = [];
      Gi = 0, da = wc(), ra = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Gi++, t.then(Hs, Hs), t;
  }
  function Hs() {
    if (--Gi === 0 && Fa !== null) {
      ra !== null && (ra.status = "fulfilled");
      var l = Fa;
      Fa = null, da = 0, ra = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function im(l, t) {
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
  var Cs = j.S;
  j.S = function(l, t) {
    bd = lt(), typeof t == "object" && t !== null && typeof t.then == "function" && um(l, t), Cs !== null && Cs(l, t);
  };
  var Ce = h(null);
  function Xi() {
    var l = Ce.current;
    return l !== null ? l : vl.pooledCache;
  }
  function Pn(l, t) {
    t === null ? O(Ce, Ce.current) : O(Ce, t.pool);
  }
  function qs() {
    var l = Xi();
    return l === null ? null : { parent: Al._currentValue, pool: l };
  }
  var oa = Error(d(460)), Qi = Error(d(474)), lu = Error(d(542)), tu = { then: function() {
  } };
  function Bs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ys(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Ht, Ht), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Gs(l), l;
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (l = vl, l !== null && 100 < l.shellSuspendCounter)
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
            throw l = t.reason, Gs(l), l;
        }
        throw Be = t, oa;
    }
  }
  function qe(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Be = e, oa) : e;
    }
  }
  var Be = null;
  function Zs() {
    if (Be === null) throw Error(d(459));
    var l = Be;
    return Be = null, l;
  }
  function Gs(l) {
    if (l === oa || l === lu)
      throw Error(d(483));
  }
  var ma = null, Ia = 0;
  function eu(l) {
    var t = Ia;
    return Ia += 1, ma === null && (ma = []), Ys(ma, l, t);
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
  function Xs(l) {
    function t(v, o) {
      if (l) {
        var y = v.deletions;
        y === null ? (v.deletions = [o], v.flags |= 16) : y.push(o);
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
    function u(v, o, y) {
      return v.index = y, l ? (y = v.alternate, y !== null ? (y = y.index, y < o ? (v.flags |= 67108866, o) : y) : (v.flags |= 67108866, o)) : (v.flags |= 1048576, o);
    }
    function i(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, o, y, N) {
      return o === null || o.tag !== 6 ? (o = Oi(y, v.mode, N), o.return = v, o) : (o = n(o, y), o.return = v, o);
    }
    function r(v, o, y, N) {
      var q = y.type;
      return q === _l ? S(
        v,
        o,
        y.props.children,
        N,
        y.key
      ) : o !== null && (o.elementType === q || typeof q == "object" && q !== null && q.$$typeof === sl && qe(q) === o.type) ? (o = n(o, y.props), Pa(o, y), o.return = v, o) : (o = Wn(
        y.type,
        y.key,
        y.props,
        null,
        v.mode,
        N
      ), Pa(o, y), o.return = v, o);
    }
    function g(v, o, y, N) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== y.containerInfo || o.stateNode.implementation !== y.implementation ? (o = Di(y, v.mode, N), o.return = v, o) : (o = n(o, y.children || []), o.return = v, o);
    }
    function S(v, o, y, N, q) {
      return o === null || o.tag !== 7 ? (o = De(
        y,
        v.mode,
        N,
        q
      ), o.return = v, o) : (o = n(o, y), o.return = v, o);
    }
    function E(v, o, y) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Oi(
          "" + o,
          v.mode,
          y
        ), o.return = v, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ul:
            return y = Wn(
              o.type,
              o.key,
              o.props,
              null,
              v.mode,
              y
            ), Pa(y, o), y.return = v, y;
          case pl:
            return o = Di(
              o,
              v.mode,
              y
            ), o.return = v, o;
          case sl:
            return o = qe(o), E(v, o, y);
        }
        if (zt(o) || Kl(o))
          return o = De(
            o,
            v.mode,
            y,
            null
          ), o.return = v, o;
        if (typeof o.then == "function")
          return E(v, eu(o), y);
        if (o.$$typeof === Tl)
          return E(
            v,
            In(v, o),
            y
          );
        au(v, o);
      }
      return null;
    }
    function x(v, o, y, N) {
      var q = o !== null ? o.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return q !== null ? null : c(v, o, "" + y, N);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ul:
            return y.key === q ? r(v, o, y, N) : null;
          case pl:
            return y.key === q ? g(v, o, y, N) : null;
          case sl:
            return y = qe(y), x(v, o, y, N);
        }
        if (zt(y) || Kl(y))
          return q !== null ? null : S(v, o, y, N, null);
        if (typeof y.then == "function")
          return x(
            v,
            o,
            eu(y),
            N
          );
        if (y.$$typeof === Tl)
          return x(
            v,
            o,
            In(v, y),
            N
          );
        au(v, y);
      }
      return null;
    }
    function p(v, o, y, N, q) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return v = v.get(y) || null, c(o, v, "" + N, q);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ul:
            return v = v.get(
              N.key === null ? y : N.key
            ) || null, r(o, v, N, q);
          case pl:
            return v = v.get(
              N.key === null ? y : N.key
            ) || null, g(o, v, N, q);
          case sl:
            return N = qe(N), p(
              v,
              o,
              y,
              N,
              q
            );
        }
        if (zt(N) || Kl(N))
          return v = v.get(y) || null, S(o, v, N, q, null);
        if (typeof N.then == "function")
          return p(
            v,
            o,
            y,
            eu(N),
            q
          );
        if (N.$$typeof === Tl)
          return p(
            v,
            o,
            y,
            In(o, N),
            q
          );
        au(o, N);
      }
      return null;
    }
    function U(v, o, y, N) {
      for (var q = null, el = null, C = o, L = o = 0, P = null; C !== null && L < y.length; L++) {
        C.index > L ? (P = C, C = null) : P = C.sibling;
        var al = x(
          v,
          C,
          y[L],
          N
        );
        if (al === null) {
          C === null && (C = P);
          break;
        }
        l && C && al.alternate === null && t(v, C), o = u(al, o, L), el === null ? q = al : el.sibling = al, el = al, C = P;
      }
      if (L === y.length)
        return e(v, C), tl && Bt(v, L), q;
      if (C === null) {
        for (; L < y.length; L++)
          C = E(v, y[L], N), C !== null && (o = u(
            C,
            o,
            L
          ), el === null ? q = C : el.sibling = C, el = C);
        return tl && Bt(v, L), q;
      }
      for (C = a(C); L < y.length; L++)
        P = p(
          C,
          v,
          L,
          y[L],
          N
        ), P !== null && (l && P.alternate !== null && C.delete(
          P.key === null ? L : P.key
        ), o = u(
          P,
          o,
          L
        ), el === null ? q = P : el.sibling = P, el = P);
      return l && C.forEach(function(Se) {
        return t(v, Se);
      }), tl && Bt(v, L), q;
    }
    function Y(v, o, y, N) {
      if (y == null) throw Error(d(151));
      for (var q = null, el = null, C = o, L = o = 0, P = null, al = y.next(); C !== null && !al.done; L++, al = y.next()) {
        C.index > L ? (P = C, C = null) : P = C.sibling;
        var Se = x(v, C, al.value, N);
        if (Se === null) {
          C === null && (C = P);
          break;
        }
        l && C && Se.alternate === null && t(v, C), o = u(Se, o, L), el === null ? q = Se : el.sibling = Se, el = Se, C = P;
      }
      if (al.done)
        return e(v, C), tl && Bt(v, L), q;
      if (C === null) {
        for (; !al.done; L++, al = y.next())
          al = E(v, al.value, N), al !== null && (o = u(al, o, L), el === null ? q = al : el.sibling = al, el = al);
        return tl && Bt(v, L), q;
      }
      for (C = a(C); !al.done; L++, al = y.next())
        al = p(C, v, L, al.value, N), al !== null && (l && al.alternate !== null && C.delete(al.key === null ? L : al.key), o = u(al, o, L), el === null ? q = al : el.sibling = al, el = al);
      return l && C.forEach(function(g1) {
        return t(v, g1);
      }), tl && Bt(v, L), q;
    }
    function ml(v, o, y, N) {
      if (typeof y == "object" && y !== null && y.type === _l && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ul:
            l: {
              for (var q = y.key; o !== null; ) {
                if (o.key === q) {
                  if (q = y.type, q === _l) {
                    if (o.tag === 7) {
                      e(
                        v,
                        o.sibling
                      ), N = n(
                        o,
                        y.props.children
                      ), N.return = v, v = N;
                      break l;
                    }
                  } else if (o.elementType === q || typeof q == "object" && q !== null && q.$$typeof === sl && qe(q) === o.type) {
                    e(
                      v,
                      o.sibling
                    ), N = n(o, y.props), Pa(N, y), N.return = v, v = N;
                    break l;
                  }
                  e(v, o);
                  break;
                } else t(v, o);
                o = o.sibling;
              }
              y.type === _l ? (N = De(
                y.props.children,
                v.mode,
                N,
                y.key
              ), N.return = v, v = N) : (N = Wn(
                y.type,
                y.key,
                y.props,
                null,
                v.mode,
                N
              ), Pa(N, y), N.return = v, v = N);
            }
            return i(v);
          case pl:
            l: {
              for (q = y.key; o !== null; ) {
                if (o.key === q)
                  if (o.tag === 4 && o.stateNode.containerInfo === y.containerInfo && o.stateNode.implementation === y.implementation) {
                    e(
                      v,
                      o.sibling
                    ), N = n(o, y.children || []), N.return = v, v = N;
                    break l;
                  } else {
                    e(v, o);
                    break;
                  }
                else t(v, o);
                o = o.sibling;
              }
              N = Di(y, v.mode, N), N.return = v, v = N;
            }
            return i(v);
          case sl:
            return y = qe(y), ml(
              v,
              o,
              y,
              N
            );
        }
        if (zt(y))
          return U(
            v,
            o,
            y,
            N
          );
        if (Kl(y)) {
          if (q = Kl(y), typeof q != "function") throw Error(d(150));
          return y = q.call(y), Y(
            v,
            o,
            y,
            N
          );
        }
        if (typeof y.then == "function")
          return ml(
            v,
            o,
            eu(y),
            N
          );
        if (y.$$typeof === Tl)
          return ml(
            v,
            o,
            In(v, y),
            N
          );
        au(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, o !== null && o.tag === 6 ? (e(v, o.sibling), N = n(o, y), N.return = v, v = N) : (e(v, o), N = Oi(y, v.mode, N), N.return = v, v = N), i(v)) : e(v, o);
    }
    return function(v, o, y, N) {
      try {
        Ia = 0;
        var q = ml(
          v,
          o,
          y,
          N
        );
        return ma = null, q;
      } catch (C) {
        if (C === oa || C === lu) throw C;
        var el = nt(29, C, null, v.mode);
        return el.lanes = N, el.return = v, el;
      }
    };
  }
  var Ye = Xs(!0), Qs = Xs(!1), ne = !1;
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
    if (a = a.shared, (ul & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = $n(l), Es(l, null, e), t;
    }
    return Jn(l, a, t, e), $n(l);
  }
  function ln(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Uf(l, e);
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
      var l = ra;
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
      var r = c, g = r.next;
      r.next = null, i === null ? u = g : i.next = g, i = r;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== i && (c === null ? S.firstBaseUpdate = g : c.next = g, S.lastBaseUpdate = r));
    }
    if (u !== null) {
      var E = n.baseState;
      i = 0, S = g = r = null, c = u;
      do {
        var x = c.lane & -536870913, p = x !== c.lane;
        if (p ? (I & x) === x : (a & x) === x) {
          x !== 0 && x === da && (Ki = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var U = l, Y = c;
            x = t;
            var ml = e;
            switch (Y.tag) {
              case 1:
                if (U = Y.payload, typeof U == "function") {
                  E = U.call(ml, E, x);
                  break l;
                }
                E = U;
                break l;
              case 3:
                U.flags = U.flags & -65537 | 128;
              case 0:
                if (U = Y.payload, x = typeof U == "function" ? U.call(ml, E, x) : U, x == null) break l;
                E = B({}, E, x);
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
          }, S === null ? (g = S = p, r = E) : S = S.next = p, i |= x;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          p = c, c = p.next, p.next = null, n.lastBaseUpdate = p, n.shared.pending = null;
        }
      } while (!0);
      S === null && (r = E), n.baseState = r, n.firstBaseUpdate = g, n.lastBaseUpdate = S, u === null && (n.shared.lanes = 0), re |= i, l.lanes = i, l.memoizedState = E;
    }
  }
  function ws(l, t) {
    if (typeof l != "function")
      throw Error(d(191, l));
    l.call(t);
  }
  function Vs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        ws(e[l], t);
  }
  var ha = h(null), nu = h(0);
  function Ls(l, t) {
    l = $t, O(nu, l), O(ha, t), $t = l | t.baseLanes;
  }
  function Ji() {
    O(nu, $t), O(ha, ha.current);
  }
  function $i() {
    $t = nu.current, _(ha), _(nu);
  }
  var ut = h(null), bt = null;
  function ce(l) {
    var t = l.alternate;
    O(Nl, Nl.current & 1), O(ut, l), bt === null && (t === null || ha.current !== null || t.memoizedState !== null) && (bt = l);
  }
  function Wi(l) {
    O(Nl, Nl.current), O(ut, l), bt === null && (bt = l);
  }
  function Ks(l) {
    l.tag === 22 ? (O(Nl, Nl.current), O(ut, l), bt === null && (bt = l)) : fe();
  }
  function fe() {
    O(Nl, Nl.current), O(ut, ut.current);
  }
  function it(l) {
    _(ut), bt === l && (bt = null), _(Nl);
  }
  var Nl = h(0);
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
  var Gt = 0, V = null, rl = null, Ml = null, iu = !1, va = !1, Ze = !1, cu = 0, an = 0, ya = null, cm = 0;
  function Sl() {
    throw Error(d(321));
  }
  function ki(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!at(l[e], t[e])) return !1;
    return !0;
  }
  function Fi(l, t, e, a, n, u) {
    return Gt = u, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = l === null || l.memoizedState === null ? M0 : oc, Ze = !1, u = e(a, n), Ze = !1, va && (u = $s(
      t,
      e,
      a,
      n
    )), Js(l), u;
  }
  function Js(l) {
    j.H = cn;
    var t = rl !== null && rl.next !== null;
    if (Gt = 0, Ml = rl = V = null, iu = !1, an = 0, ya = null, t) throw Error(d(300));
    l === null || Ol || (l = l.dependencies, l !== null && Fn(l) && (Ol = !0));
  }
  function $s(l, t, e, a) {
    V = l;
    var n = 0;
    do {
      if (va && (ya = null), an = 0, va = !1, 25 <= n) throw Error(d(301));
      if (n += 1, Ml = rl = null, l.updateQueue != null) {
        var u = l.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      j.H = O0, u = t(e, a);
    } while (va);
    return u;
  }
  function fm() {
    var l = j.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? nn(t) : t, l = l.useState()[0], (rl !== null ? rl.memoizedState : null) !== l && (V.flags |= 1024), t;
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
    Gt = 0, Ml = rl = V = null, va = !1, an = cu = 0, ya = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ml === null ? V.memoizedState = Ml = l : Ml = Ml.next = l, Ml;
  }
  function El() {
    if (rl === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = rl.next;
    var t = Ml === null ? V.memoizedState : Ml.next;
    if (t !== null)
      Ml = t, rl = l;
    else {
      if (l === null)
        throw V.alternate === null ? Error(d(467)) : Error(d(310));
      rl = l, l = {
        memoizedState: rl.memoizedState,
        baseState: rl.baseState,
        baseQueue: rl.baseQueue,
        queue: rl.queue,
        next: null
      }, Ml === null ? V.memoizedState = Ml = l : Ml = Ml.next = l;
    }
    return Ml;
  }
  function fu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function nn(l) {
    var t = an;
    return an += 1, ya === null && (ya = []), l = Ys(ya, l, t), t = V, (Ml === null ? t.memoizedState : Ml.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? M0 : oc), l;
  }
  function su(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return nn(l);
      if (l.$$typeof === Tl) return Yl(l);
    }
    throw Error(d(438, String(l)));
  }
  function tc(l) {
    var t = null, e = V.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = V.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = fu(), V.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = Le;
    return t.index++, e;
  }
  function Xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function du(l) {
    var t = El();
    return ec(t, rl, l);
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
      var c = i = null, r = null, g = t, S = !1;
      do {
        var E = g.lane & -536870913;
        if (E !== g.lane ? (I & E) === E : (Gt & E) === E) {
          var x = g.revertLane;
          if (x === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), E === da && (S = !0);
          else if ((Gt & x) === x) {
            g = g.next, x === da && (S = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, r === null ? (c = r = E, i = u) : r = r.next = E, V.lanes |= x, re |= x;
          E = g.action, Ze && e(u, E), u = g.hasEagerState ? g.eagerState : e(u, E);
        } else
          x = {
            lane: E,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, r === null ? (c = r = x, i = u) : r = r.next = x, V.lanes |= E, re |= E;
        g = g.next;
      } while (g !== null && g !== t);
      if (r === null ? i = u : r.next = c, !at(u, l.memoizedState) && (Ol = !0, S && (e = ra, e !== null)))
        throw e;
      l.memoizedState = u, l.baseState = i, l.baseQueue = r, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ac(l) {
    var t = El(), e = t.queue;
    if (e === null) throw Error(d(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, n = e.pending, u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = l(u, i.action), i = i.next;
      while (i !== n);
      at(u, t.memoizedState) || (Ol = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ws(l, t, e) {
    var a = V, n = El(), u = tl;
    if (u) {
      if (e === void 0) throw Error(d(407));
      e = e();
    } else e = t();
    var i = !at(
      (rl || n).memoizedState,
      e
    );
    if (i && (n.memoizedState = e, Ol = !0), n = n.queue, ic(Is.bind(null, a, n, l), [
      l
    ]), n.getSnapshot !== t || i || Ml !== null && Ml.memoizedState.tag & 1) {
      if (a.flags |= 2048, ga(
        9,
        { destroy: void 0 },
        Fs.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), vl === null) throw Error(d(349));
      u || (Gt & 127) !== 0 || ks(a, t, e);
    }
    return e;
  }
  function ks(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = V.updateQueue, t === null ? (t = fu(), V.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Fs(l, t, e, a) {
    t.value = e, t.getSnapshot = a, Ps(t) && l0(l);
  }
  function Is(l, t, e) {
    return e(function() {
      Ps(t) && l0(l);
    });
  }
  function Ps(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !at(l, e);
    } catch {
      return !0;
    }
  }
  function l0(l) {
    var t = Oe(l, 2);
    t !== null && Pl(t, l, 2);
  }
  function nc(l) {
    var t = Vl();
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
  function t0(l, t, e, a) {
    return l.baseState = e, ec(
      l,
      rl,
      typeof a == "function" ? a : Xt
    );
  }
  function sm(l, t, e, a, n) {
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
      j.T !== null ? e(!0) : u.isTransition = !1, a(u), e = t.pending, e === null ? (u.next = t.pending = u, e0(t, u)) : (u.next = e.next, t.pending = e.next = u);
    }
  }
  function e0(l, t) {
    var e = t.action, a = t.payload, n = l.state;
    if (t.isTransition) {
      var u = j.T, i = {};
      j.T = i;
      try {
        var c = e(n, a), r = j.S;
        r !== null && r(i, c), a0(l, t, c);
      } catch (g) {
        uc(l, t, g);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), j.T = u;
      }
    } else
      try {
        u = e(n, a), a0(l, t, u);
      } catch (g) {
        uc(l, t, g);
      }
  }
  function a0(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        n0(l, t, a);
      },
      function(a) {
        return uc(l, t, a);
      }
    ) : n0(l, t, e);
  }
  function n0(l, t, e) {
    t.status = "fulfilled", t.value = e, u0(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, e0(l, e)));
  }
  function uc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, u0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function u0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function i0(l, t) {
    return t;
  }
  function c0(l, t) {
    if (tl) {
      var e = vl.formState;
      if (e !== null) {
        l: {
          var a = V;
          if (tl) {
            if (gl) {
              t: {
                for (var n = gl, u = gt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = xt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                gl = xt(
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
    return e = Vl(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: i0,
      lastRenderedState: t
    }, e.queue = a, e = _0.bind(
      null,
      V,
      a
    ), a.dispatch = e, a = nc(!1), u = rc.bind(
      null,
      V,
      !1,
      a.queue
    ), a = Vl(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, e = sm.bind(
      null,
      V,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function f0(l) {
    var t = El();
    return s0(t, rl, l);
  }
  function s0(l, t, e) {
    if (t = ec(
      l,
      t,
      i0
    )[0], l = du(Xt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = nn(t);
      } catch (i) {
        throw i === oa ? lu : i;
      }
    else a = t;
    t = El();
    var n = t.queue, u = n.dispatch;
    return e !== t.memoizedState && (V.flags |= 2048, ga(
      9,
      { destroy: void 0 },
      dm.bind(null, n, e),
      null
    )), [a, u, l];
  }
  function dm(l, t) {
    l.action = t;
  }
  function d0(l) {
    var t = El(), e = rl;
    if (e !== null)
      return s0(t, e, l);
    El(), t = t.memoizedState, e = El();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function ga(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = V.updateQueue, t === null && (t = fu(), V.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function r0() {
    return El().memoizedState;
  }
  function ru(l, t, e, a) {
    var n = Vl();
    V.flags |= l, n.memoizedState = ga(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function ou(l, t, e, a) {
    var n = El();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    rl !== null && a !== null && ki(a, rl.memoizedState.deps) ? n.memoizedState = ga(t, u, e, a) : (V.flags |= l, n.memoizedState = ga(
      1 | t,
      u,
      e,
      a
    ));
  }
  function o0(l, t) {
    ru(8390656, 8, l, t);
  }
  function ic(l, t) {
    ou(2048, 8, l, t);
  }
  function rm(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null)
      t = fu(), V.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function m0(l) {
    var t = El().memoizedState;
    return rm({ ref: t, nextImpl: l }), function() {
      if ((ul & 2) !== 0) throw Error(d(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function h0(l, t) {
    return ou(4, 2, l, t);
  }
  function v0(l, t) {
    return ou(4, 4, l, t);
  }
  function y0(l, t) {
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
  function g0(l, t, e) {
    e = e != null ? e.concat([l]) : null, ou(4, 4, y0.bind(null, t, l), e);
  }
  function cc() {
  }
  function b0(l, t) {
    var e = El();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ki(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function x0(l, t) {
    var e = El();
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
    return e === void 0 || (Gt & 1073741824) !== 0 && (I & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = pd(), V.lanes |= l, re |= l, e);
  }
  function p0(l, t, e, a) {
    return at(e, t) ? e : ha.current !== null ? (l = fc(l, e, a), at(l, t) || (Ol = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (I & 261930) === 0 ? (Ol = !0, l.memoizedState = e) : (l = pd(), V.lanes |= l, re |= l, t);
  }
  function S0(l, t, e, a, n) {
    var u = M.p;
    M.p = u !== 0 && 8 > u ? u : 8;
    var i = j.T, c = {};
    j.T = c, rc(l, !1, t, e);
    try {
      var r = n(), g = j.S;
      if (g !== null && g(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var S = im(
          r,
          a
        );
        un(
          l,
          t,
          S,
          st(l)
        );
      } else
        un(
          l,
          t,
          a,
          st(l)
        );
    } catch (E) {
      un(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        st()
      );
    } finally {
      M.p = u, i !== null && c.types !== null && (i.types = c.types), j.T = i;
    }
  }
  function om() {
  }
  function sc(l, t, e, a) {
    if (l.tag !== 5) throw Error(d(476));
    var n = z0(l).queue;
    S0(
      l,
      n,
      t,
      G,
      e === null ? om : function() {
        return j0(l), e(a);
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
  function j0(l) {
    var t = z0(l);
    t.next === null && (t = l.alternate.memoizedState), un(
      l,
      t.next.queue,
      {},
      st()
    );
  }
  function dc() {
    return Yl(jn);
  }
  function N0() {
    return El().memoizedState;
  }
  function E0() {
    return El().memoizedState;
  }
  function mm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = st();
          l = ue(e);
          var a = ie(t, l, e);
          a !== null && (Pl(a, t, e), ln(a, t, e)), t = { cache: Zi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function hm(l, t, e) {
    var a = st();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mu(l) ? T0(t, e) : (e = Ai(l, t, e, a), e !== null && (Pl(e, l, a), A0(e, t, a)));
  }
  function _0(l, t, e) {
    var a = st();
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
    if (mu(l)) T0(t, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var i = t.lastRenderedState, c = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = c, at(c, i))
            return Jn(l, t, n, 0), vl === null && Kn(), !1;
        } catch {
        }
      if (e = Ai(l, t, n, a), e !== null)
        return Pl(e, l, a), A0(e, t, a), !0;
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
      ), t !== null && Pl(t, l, 2);
  }
  function mu(l) {
    var t = l.alternate;
    return l === V || t !== null && t === V;
  }
  function T0(l, t) {
    va = iu = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function A0(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Uf(l, e);
    }
  }
  var cn = {
    readContext: Yl,
    use: su,
    useCallback: Sl,
    useContext: Sl,
    useEffect: Sl,
    useImperativeHandle: Sl,
    useLayoutEffect: Sl,
    useInsertionEffect: Sl,
    useMemo: Sl,
    useReducer: Sl,
    useRef: Sl,
    useState: Sl,
    useDebugValue: Sl,
    useDeferredValue: Sl,
    useTransition: Sl,
    useSyncExternalStore: Sl,
    useId: Sl,
    useHostTransitionStatus: Sl,
    useFormState: Sl,
    useActionState: Sl,
    useOptimistic: Sl,
    useMemoCache: Sl,
    useCacheRefresh: Sl
  };
  cn.useEffectEvent = Sl;
  var M0 = {
    readContext: Yl,
    use: su,
    useCallback: function(l, t) {
      return Vl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Yl,
    useEffect: o0,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, ru(
        4194308,
        4,
        y0.bind(null, t, l),
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
      var e = Vl();
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
      var a = Vl();
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
      }, a.queue = l, l = l.dispatch = hm.bind(
        null,
        V,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Vl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = nc(l);
      var t = l.queue, e = _0.bind(null, V, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = Vl();
      return fc(e, l, t);
    },
    useTransition: function() {
      var l = nc(!1);
      return l = S0.bind(
        null,
        V,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = V, n = Vl();
      if (tl) {
        if (e === void 0)
          throw Error(d(407));
        e = e();
      } else {
        if (e = t(), vl === null)
          throw Error(d(349));
        (I & 127) !== 0 || ks(a, t, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: t };
      return n.queue = u, o0(Is.bind(null, a, u, l), [
        l
      ]), a.flags |= 2048, ga(
        9,
        { destroy: void 0 },
        Fs.bind(
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
      var l = Vl(), t = vl.identifierPrefix;
      if (tl) {
        var e = Mt, a = At;
        e = (a & ~(1 << 32 - et(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = cu++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = cm++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: dc,
    useFormState: c0,
    useActionState: c0,
    useOptimistic: function(l) {
      var t = Vl();
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
        V,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: tc,
    useCacheRefresh: function() {
      return Vl().memoizedState = mm.bind(
        null,
        V
      );
    },
    useEffectEvent: function(l) {
      var t = Vl(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((ul & 2) !== 0)
          throw Error(d(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, oc = {
    readContext: Yl,
    use: su,
    useCallback: b0,
    useContext: Yl,
    useEffect: ic,
    useImperativeHandle: g0,
    useInsertionEffect: h0,
    useLayoutEffect: v0,
    useMemo: x0,
    useReducer: du,
    useRef: r0,
    useState: function() {
      return du(Xt);
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = El();
      return p0(
        e,
        rl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = du(Xt)[0], t = El().memoizedState;
      return [
        typeof l == "boolean" ? l : nn(l),
        t
      ];
    },
    useSyncExternalStore: Ws,
    useId: N0,
    useHostTransitionStatus: dc,
    useFormState: f0,
    useActionState: f0,
    useOptimistic: function(l, t) {
      var e = El();
      return t0(e, rl, l, t);
    },
    useMemoCache: tc,
    useCacheRefresh: E0
  };
  oc.useEffectEvent = m0;
  var O0 = {
    readContext: Yl,
    use: su,
    useCallback: b0,
    useContext: Yl,
    useEffect: ic,
    useImperativeHandle: g0,
    useInsertionEffect: h0,
    useLayoutEffect: v0,
    useMemo: x0,
    useReducer: ac,
    useRef: r0,
    useState: function() {
      return ac(Xt);
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = El();
      return rl === null ? fc(e, l, t) : p0(
        e,
        rl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ac(Xt)[0], t = El().memoizedState;
      return [
        typeof l == "boolean" ? l : nn(l),
        t
      ];
    },
    useSyncExternalStore: Ws,
    useId: N0,
    useHostTransitionStatus: dc,
    useFormState: d0,
    useActionState: d0,
    useOptimistic: function(l, t) {
      var e = El();
      return rl !== null ? t0(e, rl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: tc,
    useCacheRefresh: E0
  };
  O0.useEffectEvent = m0;
  function mc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : B({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var hc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = st(), n = ue(a);
      n.payload = t, e != null && (n.callback = e), t = ie(l, n, a), t !== null && (Pl(t, l, a), ln(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = st(), n = ue(a);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = ie(l, n, a), t !== null && (Pl(t, l, a), ln(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = st(), a = ue(e);
      a.tag = 2, t != null && (a.callback = t), t = ie(l, a, e), t !== null && (Pl(t, l, e), ln(t, l, e));
    }
  };
  function D0(l, t, e, a, n, u, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Ka(e, a) || !Ka(n, u) : !0;
  }
  function R0(l, t, e, a) {
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
      e === t && (e = B({}, e));
      for (var n in l)
        e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function U0(l) {
    Ln(l);
  }
  function H0(l) {
    console.error(l);
  }
  function C0(l) {
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
  function q0(l, t, e) {
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
  function B0(l) {
    return l = ue(l), l.tag = 3, l;
  }
  function Y0(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      l.payload = function() {
        return n(u);
      }, l.callback = function() {
        q0(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      q0(t, e, a), typeof n != "function" && (oe === null ? oe = /* @__PURE__ */ new Set([this]) : oe.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function vm(l, t, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && sa(
        t,
        e,
        n,
        !0
      ), e = ut.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return bt === null ? _u() : e.alternate === null && zl === 0 && (zl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === tu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Gc(l, a, n)), !1;
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
    if (tl)
      return t = ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Hi && (l = Error(d(422), { cause: a }), Wa(ht(l, e)))) : (a !== Hi && (t = Error(d(423), {
        cause: a
      }), Wa(
        ht(t, e)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = ht(a, e), n = vc(
        l.stateNode,
        a,
        n
      ), Li(l, n), zl !== 4 && (zl = 2)), !1;
    var u = Error(d(520), { cause: a });
    if (u = ht(u, e), vn === null ? vn = [u] : vn.push(u), zl !== 4 && (zl = 2), t === null) return !0;
    a = ht(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = n & -n, e.lanes |= l, l = vc(e.stateNode, a, l), Li(e, l), !1;
        case 1:
          if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (oe === null || !oe.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = B0(n), Y0(
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
  var yc = Error(d(461)), Ol = !1;
  function Zl(l, t, e, a) {
    t.child = l === null ? Qs(t, null, e, a) : Ye(
      t,
      l.child,
      e,
      a
    );
  }
  function Z0(l, t, e, a, n) {
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
    ), c = Ii(), l !== null && !Ol ? (Pi(l, t, n), Qt(l, t, n)) : (tl && c && Ri(t), t.flags |= 1, Zl(l, t, a, n), t.child);
  }
  function G0(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" && !Mi(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, X0(
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
    if (u = l.child, !Nc(l, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ka, e(i, a) && l.ref === t.ref)
        return Qt(l, t, n);
    }
    return t.flags |= 1, l = qt(u, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function X0(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Ka(u, a) && l.ref === t.ref)
        if (Ol = !1, t.pendingProps = a = u, Nc(l, n))
          (l.flags & 131072) !== 0 && (Ol = !0);
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
  function Q0(l, t, e, a) {
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
        return w0(
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
        ), u !== null ? Ls(t, u) : Ji(), Ks(t);
      else
        return a = t.lanes = 536870912, w0(
          l,
          t,
          u !== null ? u.baseLanes | e : e,
          e,
          a
        );
    } else
      u !== null ? (Pn(t, u.cachePool), Ls(t, u), fe(), t.memoizedState = null) : (l !== null && Pn(t, null), Ji(), fe());
    return Zl(l, t, n, e), t.child;
  }
  function fn(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function w0(l, t, e, a, n) {
    var u = Xi();
    return u = u === null ? null : { parent: Al._currentValue, pool: u }, t.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, l !== null && Pn(t, null), Ji(), Ks(t), l !== null && sa(l, t, a, !0), t.childLanes = n, null;
  }
  function vu(l, t) {
    return t = gu(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function V0(l, t, e) {
    return Ye(t, l.child, null, e), l = vu(t, t.pendingProps), l.flags |= 2, it(t), t.memoizedState = null, l;
  }
  function ym(l, t, e) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (tl) {
        if (a.mode === "hidden")
          return l = vu(t, a), t.lanes = 536870912, fn(null, l);
        if (Wi(t), (l = gl) ? (l = er(
          l,
          gt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: le !== null ? { id: At, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ts(l), e.return = t, t.child = e, Bl = t, gl = null)) : l = null, l === null) throw ee(t);
        return t.lanes = 536870912, null;
      }
      return vu(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (Wi(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = V0(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(d(558));
      else if (Ol || sa(l, t, e, !1), n = (e & l.childLanes) !== 0, Ol || n) {
        if (a = vl, a !== null && (i = Hf(a, e), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Oe(l, i), Pl(a, l, i), yc;
        _u(), t = V0(
          l,
          t,
          e
        );
      } else
        l = u.treeContext, gl = xt(i.nextSibling), Bl = t, tl = !0, te = null, gt = !1, l !== null && Os(t, l), t = vu(t, a), t.flags |= 4096;
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
    ), a = Ii(), l !== null && !Ol ? (Pi(l, t, n), Qt(l, t, n)) : (tl && a && Ri(t), t.flags |= 1, Zl(l, t, e, n), t.child);
  }
  function L0(l, t, e, a, n, u) {
    return He(t), t.updateQueue = null, e = $s(
      t,
      a,
      e,
      n
    ), Js(l), a = Ii(), l !== null && !Ol ? (Pi(l, t, u), Qt(l, t, u)) : (tl && a && Ri(t), t.flags |= 1, Zl(l, t, e, u), t.child);
  }
  function K0(l, t, e, a, n) {
    if (He(t), t.stateNode === null) {
      var u = ua, i = e.contextType;
      typeof i == "object" && i !== null && (u = Yl(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = hc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, wi(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? Yl(i) : ua, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (mc(
        t,
        e,
        i,
        a
      ), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && hc.enqueueReplaceState(u, u.state, null), en(t, a, u, n), tn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps, r = Ge(e, c);
      u.props = r;
      var g = u.context, S = e.contextType;
      i = ua, typeof S == "object" && S !== null && (i = Yl(S));
      var E = e.getDerivedStateFromProps;
      S = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || g !== i) && R0(
        t,
        u,
        a,
        i
      ), ne = !1;
      var x = t.memoizedState;
      u.state = x, en(t, a, u, n), tn(), g = t.memoizedState, c || x !== g || ne ? (typeof E == "function" && (mc(
        t,
        e,
        E,
        a
      ), g = t.memoizedState), (r = ne || D0(
        t,
        e,
        r,
        a,
        x,
        g,
        i
      )) ? (S || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = g), u.props = a, u.state = g, u.context = i, a = r) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Vi(l, t), i = t.memoizedProps, S = Ge(e, i), u.props = S, E = t.pendingProps, x = u.context, g = e.contextType, r = ua, typeof g == "object" && g !== null && (r = Yl(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== E || x !== r) && R0(
        t,
        u,
        a,
        r
      ), ne = !1, x = t.memoizedState, u.state = x, en(t, a, u, n), tn();
      var p = t.memoizedState;
      i !== E || x !== p || ne || l !== null && l.dependencies !== null && Fn(l.dependencies) ? (typeof c == "function" && (mc(
        t,
        e,
        c,
        a
      ), p = t.memoizedState), (S = ne || D0(
        t,
        e,
        S,
        a,
        x,
        p,
        r
      ) || l !== null && l.dependencies !== null && Fn(l.dependencies)) ? (g || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, p, r), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        p,
        r
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), u.props = a, u.state = p, u.context = r, a = S) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (t.flags |= 1024), a = !1);
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
    )) : Zl(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = Qt(
      l,
      t,
      n
    ), l;
  }
  function J0(l, t, e, a) {
    return Re(), t.flags |= 256, Zl(l, t, e, a), t.child;
  }
  var bc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xc(l) {
    return { baseLanes: l, cachePool: qs() };
  }
  function pc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= ft), l;
  }
  function $0(l, t, e) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (Nl.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (tl) {
        if (n ? ce(t) : fe(), (l = gl) ? (l = er(
          l,
          gt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: le !== null ? { id: At, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ts(l), e.return = t, t.child = e, Bl = t, gl = null)) : l = null, l === null) throw ee(t);
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
      ), t.memoizedState = bc, fn(null, a)) : (ce(t), Sc(t, c));
    }
    var r = l.memoizedState;
    if (r !== null && (c = r.dehydrated, c !== null)) {
      if (u)
        t.flags & 256 ? (ce(t), t.flags &= -257, t = zc(
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
        if (i = c.nextSibling && c.nextSibling.dataset, i) var g = i.dgst;
        i = g, a = Error(d(419)), a.stack = "", a.digest = i, Wa({ value: a, source: null, stack: null }), t = zc(
          l,
          t,
          e
        );
      } else if (Ol || sa(l, t, e, !1), i = (e & l.childLanes) !== 0, Ol || i) {
        if (i = vl, i !== null && (a = Hf(i, e), a !== 0 && a !== r.retryLane))
          throw r.retryLane = a, Oe(l, a), Pl(i, l, a), yc;
        tf(c) || _u(), t = zc(
          l,
          t,
          e
        );
      } else
        tf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = r.treeContext, gl = xt(
          c.nextSibling
        ), Bl = t, tl = !0, te = null, gt = !1, l !== null && Os(t, l), t = Sc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (fe(), c = a.fallback, n = t.mode, r = l.child, g = r.sibling, a = qt(r, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = r.subtreeFlags & 65011712, g !== null ? c = qt(
      g,
      c
    ) : (c = De(
      c,
      n,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, fn(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = xc(e) : (n = c.cachePool, n !== null ? (r = Al._currentValue, n = n.parent !== r ? { parent: r, pool: r } : n) : n = qs(), c = {
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
  function Sc(l, t) {
    return t = gu(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function gu(l, t) {
    return l = nt(22, l, null, t), l.lanes = 0, l;
  }
  function zc(l, t, e) {
    return Ye(t, l.child, null, e), l = Sc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function W0(l, t, e) {
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
  function k0(l, t, e) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Nl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, O(Nl, i), Zl(l, t, a, e), a = tl ? $a : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && W0(l, e, t);
        else if (l.tag === 19)
          W0(l, e, t);
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
        if (sa(
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
  function Nc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Fn(l)));
  }
  function gm(l, t, e) {
    switch (t.tag) {
      case 3:
        wl(t, t.stateNode.containerInfo), ae(t, Al, l.memoizedState.cache), Re();
        break;
      case 27:
      case 5:
        Ua(t);
        break;
      case 4:
        wl(t, t.stateNode.containerInfo);
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
          return a.dehydrated !== null ? (ce(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? $0(l, t, e) : (ce(t), l = Qt(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        ce(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (sa(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), n) {
          if (a)
            return k0(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), O(Nl, Nl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Q0(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        ae(t, Al, l.memoizedState.cache);
    }
    return Qt(l, t, e);
  }
  function F0(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ol = !0;
      else {
        if (!Nc(l, e) && (t.flags & 128) === 0)
          return Ol = !1, gm(
            l,
            t,
            e
          );
        Ol = (l.flags & 131072) !== 0;
      }
    else
      Ol = !1, tl && (t.flags & 1048576) !== 0 && Ms(t, $a, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = qe(t.elementType), t.type = l, typeof l == "function")
            Mi(l) ? (a = Ge(l, a), t.tag = 1, t = K0(
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
              if (n === Ll) {
                t.tag = 11, t = Z0(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (n === X) {
                t.tag = 14, t = G0(
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
        ), K0(
          l,
          t,
          a,
          n,
          e
        );
      case 3:
        l: {
          if (wl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(d(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Vi(l, t), en(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, ae(t, Al, a), a !== u.cache && Yi(
            t,
            [Al],
            e,
            !0
          ), tn(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = J0(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== n) {
              n = ht(
                Error(d(424)),
                t
              ), Wa(n), t = J0(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, gl = xt(l.firstChild), Bl = t, tl = !0, te = null, gt = !0, e = Qs(
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
            Zl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return yu(l, t), l === null ? (e = fr(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : tl || (e = t.type, l = t.pendingProps, a = Uu(
          W.current
        ).createElement(e), a[ql] = t, a[Jl] = l, Gl(a, e, l), Hl(a), t.stateNode = a) : t.memoizedState = fr(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ua(t), l === null && tl && (a = t.stateNode = ur(
          t.type,
          t.pendingProps,
          W.current
        ), Bl = t, gt = !0, n = gl, ye(t.type) ? (af = n, gl = xt(a.firstChild)) : gl = n), Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), yu(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && tl && ((n = a = gl) && (a = Jm(
          a,
          t.type,
          t.pendingProps,
          gt
        ), a !== null ? (t.stateNode = a, Bl = t, gl = xt(a.firstChild), gt = !1, n = !0) : n = !1), n || ee(t)), Ua(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, Ic(n, u) ? a = null : i !== null && Ic(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = Fi(
          l,
          t,
          fm,
          null,
          null,
          e
        ), jn._currentValue = n), yu(l, t), Zl(l, t, a, e), t.child;
      case 6:
        return l === null && tl && ((l = e = gl) && (e = $m(
          e,
          t.pendingProps,
          gt
        ), e !== null ? (t.stateNode = e, Bl = t, gl = null, l = !0) : l = !1), l || ee(t)), null;
      case 13:
        return $0(l, t, e);
      case 4:
        return wl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ye(
          t,
          null,
          a,
          e
        ) : Zl(l, t, a, e), t.child;
      case 11:
        return Z0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Zl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, ae(t, t.type, a.value), Zl(l, t, a.children, e), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, He(t), n = Yl(n), a = a(n), t.flags |= 1, Zl(l, t, a, e), t.child;
      case 14:
        return G0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return X0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return k0(l, t, e);
      case 31:
        return ym(l, t, e);
      case 22:
        return Q0(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return He(t), a = Yl(Al), l === null ? (n = Xi(), n === null && (n = vl, u = Zi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = { parent: a, cache: n }, wi(t), ae(t, Al, n)) : ((l.lanes & e) !== 0 && (Vi(l, t), en(t, null, null, e), tn()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ae(t, Al, a)) : (a = u.cache, ae(t, Al, a), a !== n.cache && Yi(
          t,
          [Al],
          e,
          !0
        ))), Zl(
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
  function Ec(l, t, e, a, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Nd()) l.flags |= 8192;
        else
          throw Be = tu, Qi;
    } else l.flags &= -16777217;
  }
  function I0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !mr(t))
      if (Nd()) l.flags |= 8192;
      else
        throw Be = tu, Qi;
  }
  function bu(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Df() : 536870912, l.lanes |= t, Sa |= t);
  }
  function sn(l, t) {
    if (!tl)
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
  function bl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function bm(l, t, e) {
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
        return bl(t), null;
      case 1:
        return bl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Zt(Al), jl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (fa(t) ? wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ci())), bl(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return l === null ? (wt(t), u !== null ? (bl(t), I0(t, u)) : (bl(t), Ec(
          t,
          n,
          null,
          a,
          e
        ))) : u ? u !== l.memoizedState ? (wt(t), bl(t), I0(t, u)) : (bl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && wt(t), bl(t), Ec(
          t,
          n,
          l,
          a,
          e
        )), null;
      case 27:
        if (Mn(t), e = W.current, n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(d(166));
            return bl(t), null;
          }
          l = H.current, fa(t) ? Ds(t) : (l = ur(n, a, e), t.stateNode = l, wt(t));
        }
        return bl(t), null;
      case 5:
        if (Mn(t), n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(d(166));
            return bl(t), null;
          }
          if (u = H.current, fa(t))
            Ds(t);
          else {
            var i = Uu(
              W.current
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
            u[ql] = t, u[Jl] = a;
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
            l: switch (Gl(u, n, a), n) {
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
        return bl(t), Ec(
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
          if (l = W.current, fa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, n = Bl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            l[ql] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || $d(l.nodeValue, e)), l || ee(t, !0);
          } else
            l = Uu(l).createTextNode(
              a
            ), l[ql] = t, t.stateNode = l;
        }
        return bl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = fa(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(d(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(557));
              l[ql] = t;
            } else
              Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), l = !1;
          } else
            e = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (it(t), t) : (it(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(d(558));
        }
        return bl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = fa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(d(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
              n[ql] = t;
            } else
              Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), n = !1;
          } else
            n = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (it(t), t) : (it(t), null);
        }
        return it(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), bu(t, t.updateQueue), bl(t), null);
      case 4:
        return jl(), l === null && Jc(t.stateNode.containerInfo), bl(t), null;
      case 10:
        return Zt(t.type), bl(t), null;
      case 19:
        if (_(Nl), a = t.memoizedState, a === null) return bl(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) sn(a, !1);
          else {
            if (zl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (u = uu(l), u !== null) {
                  for (t.flags |= 128, sn(a, !1), l = u.updateQueue, t.updateQueue = l, bu(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    _s(e, l), e = e.sibling;
                  return O(
                    Nl,
                    Nl.current & 1 | 2
                  ), tl && Bt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && lt() > ju && (t.flags |= 128, n = !0, sn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (l = uu(u), l !== null) {
              if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, bu(t, l), sn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !tl)
                return bl(t), null;
            } else
              2 * lt() - a.renderingStartTime > ju && e !== 536870912 && (t.flags |= 128, n = !0, sn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (l = a.last, l !== null ? l.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = lt(), l.sibling = null, e = Nl.current, O(
          Nl,
          n ? e & 1 | 2 : e & 1
        ), tl && Bt(t, a.treeForkCount), l) : (bl(t), null);
      case 22:
      case 23:
        return it(t), $i(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bl(t), e = t.updateQueue, e !== null && bu(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && _(Ce), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Zt(Al), bl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function xm(l, t) {
    switch (Ui(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Zt(Al), jl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Mn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (it(t), t.alternate === null)
            throw Error(d(340));
          Re();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (it(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(d(340));
          Re();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return _(Nl), null;
      case 4:
        return jl(), null;
      case 10:
        return Zt(t.type), null;
      case 22:
      case 23:
        return it(t), $i(), l !== null && _(Ce), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Zt(Al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function P0(l, t) {
    switch (Ui(t), t.tag) {
      case 3:
        Zt(Al), jl();
        break;
      case 26:
      case 27:
      case 5:
        Mn(t);
        break;
      case 4:
        jl();
        break;
      case 31:
        t.memoizedState !== null && it(t);
        break;
      case 13:
        it(t);
        break;
      case 19:
        _(Nl);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        it(t), $i(), l !== null && _(Ce);
        break;
      case 24:
        Zt(Al);
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
      fl(t, t.return, c);
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
              var r = e, g = c;
              try {
                g();
              } catch (S) {
                fl(
                  n,
                  r,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (S) {
      fl(t, t.return, S);
    }
  }
  function ld(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Vs(t, e);
      } catch (a) {
        fl(l, l.return, a);
      }
    }
  }
  function td(l, t, e) {
    e.props = Ge(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      fl(l, t, a);
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
      fl(l, t, n);
    }
  }
  function Ot(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          fl(l, t, n);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          fl(l, t, n);
        }
      else e.current = null;
  }
  function ed(l) {
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
      fl(l, l.return, n);
    }
  }
  function _c(l, t, e) {
    try {
      var a = l.stateNode;
      Xm(a, l.type, e, t), a[Jl] = t;
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  function ad(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ye(l.type) || l.tag === 4;
  }
  function Tc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || ad(l.return)) return null;
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
  function nd(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Gl(t, a, e), t[ql] = l, t[Jl] = e;
    } catch (u) {
      fl(l, l.return, u);
    }
  }
  var Vt = !1, Dl = !1, Mc = !1, ud = typeof WeakSet == "function" ? WeakSet : Set, Cl = null;
  function pm(l, t) {
    if (l = l.containerInfo, kc = Gu, l = gs(l), zi(l)) {
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
            var i = 0, c = -1, r = -1, g = 0, S = 0, E = l, x = null;
            t: for (; ; ) {
              for (var p; E !== e || n !== 0 && E.nodeType !== 3 || (c = i + n), E !== u || a !== 0 && E.nodeType !== 3 || (r = i + a), E.nodeType === 3 && (i += E.nodeValue.length), (p = E.firstChild) !== null; )
                x = E, E = p;
              for (; ; ) {
                if (E === l) break t;
                if (x === e && ++g === n && (c = i), x === u && ++S === a && (r = i), (p = E.nextSibling) !== null) break;
                E = x, x = E.parentNode;
              }
              E = p;
            }
            e = c === -1 || r === -1 ? null : { start: c, end: r };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Fc = { focusedElem: l, selectionRange: e }, Gu = !1, Cl = t; Cl !== null; )
      if (t = Cl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Cl = l;
      else
        for (; Cl !== null; ) {
          switch (t = Cl, u = t.alternate, l = t.flags, t.tag) {
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
                  fl(
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
            l.return = t.return, Cl = l;
            break;
          }
          Cl = t.return;
        }
  }
  function id(l, t, e) {
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
              fl(e, e.return, i);
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
              fl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && ld(e), a & 512 && rn(e, e.return);
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
            Vs(l, t);
          } catch (i) {
            fl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && nd(e);
      case 26:
      case 5:
        Kt(l, e), t === null && a & 4 && ed(e), a & 512 && rn(e, e.return);
        break;
      case 12:
        Kt(l, e);
        break;
      case 31:
        Kt(l, e), a & 4 && sd(l, e);
        break;
      case 13:
        Kt(l, e), a & 4 && dd(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Mm.bind(
          null,
          e
        ), Wm(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Vt, !a) {
          t = t !== null && t.memoizedState !== null || Dl, n = Vt;
          var u = Dl;
          Vt = a, (Dl = t) && !u ? Jt(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : Kt(l, e), Vt = n, Dl = u;
        }
        break;
      case 30:
        break;
      default:
        Kt(l, e);
    }
  }
  function cd(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, cd(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ui(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var xl = null, Wl = !1;
  function Lt(l, t, e) {
    for (e = e.child; e !== null; )
      fd(l, t, e), e = e.sibling;
  }
  function fd(l, t, e) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
        tt.onCommitFiberUnmount(Ha, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Dl || Ot(e, t), Lt(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Dl || Ot(e, t);
        var a = xl, n = Wl;
        ye(e.type) && (xl = e.stateNode, Wl = !1), Lt(
          l,
          t,
          e
        ), pn(e.stateNode), xl = a, Wl = n;
        break;
      case 5:
        Dl || Ot(e, t);
      case 6:
        if (a = xl, n = Wl, xl = null, Lt(
          l,
          t,
          e
        ), xl = a, Wl = n, xl !== null)
          if (Wl)
            try {
              (xl.nodeType === 9 ? xl.body : xl.nodeName === "HTML" ? xl.ownerDocument.body : xl).removeChild(e.stateNode);
            } catch (u) {
              fl(
                e,
                t,
                u
              );
            }
          else
            try {
              xl.removeChild(e.stateNode);
            } catch (u) {
              fl(
                e,
                t,
                u
              );
            }
        break;
      case 18:
        xl !== null && (Wl ? (l = xl, lr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ma(l)) : lr(xl, e.stateNode));
        break;
      case 4:
        a = xl, n = Wl, xl = e.stateNode.containerInfo, Wl = !0, Lt(
          l,
          t,
          e
        ), xl = a, Wl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        se(2, e, t), Dl || se(4, e, t), Lt(
          l,
          t,
          e
        );
        break;
      case 1:
        Dl || (Ot(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && td(
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
        Dl = (a = Dl) || e.memoizedState !== null, Lt(
          l,
          t,
          e
        ), Dl = a;
        break;
      default:
        Lt(
          l,
          t,
          e
        );
    }
  }
  function sd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ma(l);
      } catch (e) {
        fl(t, t.return, e);
      }
    }
  }
  function dd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ma(l);
      } catch (e) {
        fl(t, t.return, e);
      }
  }
  function Sm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new ud()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new ud()), t;
      default:
        throw Error(d(435, l.tag));
    }
  }
  function pu(l, t) {
    var e = Sm(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = Om.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function kl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ye(c.type)) {
                xl = c.stateNode, Wl = !1;
                break l;
              }
              break;
            case 5:
              xl = c.stateNode, Wl = !1;
              break l;
            case 3:
            case 4:
              xl = c.stateNode.containerInfo, Wl = !0;
              break l;
          }
          c = c.return;
        }
        if (xl === null) throw Error(d(160));
        fd(u, i, n), xl = null, Wl = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        rd(t, l), t = t.sibling;
  }
  var Nt = null;
  function rd(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kl(t, l), Fl(l), a & 4 && (se(3, l, l.return), dn(3, l), se(5, l, l.return));
        break;
      case 1:
        kl(t, l), Fl(l), a & 512 && (Dl || e === null || Ot(e, e.return)), a & 64 && Vt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Nt;
        if (kl(t, l), Fl(l), a & 512 && (Dl || e === null || Ot(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ba] || u[ql] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Gl(u, a, e), u[ql] = l, Hl(u), a = u;
                      break l;
                    case "link":
                      var i = rr(
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
                      u = n.createElement(a), Gl(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = rr(
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
                      u = n.createElement(a), Gl(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  u[ql] = l, Hl(u), a = u;
                }
                l.stateNode = a;
              } else
                or(
                  n,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = dr(
                n,
                a,
                l.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? or(
              n,
              l.type,
              l.stateNode
            ) : dr(
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
        kl(t, l), Fl(l), a & 512 && (Dl || e === null || Ot(e, e.return)), e !== null && a & 4 && _c(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (kl(t, l), Fl(l), a & 512 && (Dl || e === null || Ot(e, e.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            Ie(n, "");
          } catch (U) {
            fl(l, l.return, U);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, _c(
          l,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (Mc = !0);
        break;
      case 6:
        if (kl(t, l), Fl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(d(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (U) {
            fl(l, l.return, U);
          }
        }
        break;
      case 3:
        if (qu = null, n = Nt, Nt = Hu(t.containerInfo), kl(t, l), Nt = n, Fl(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ma(t.containerInfo);
          } catch (U) {
            fl(l, l.return, U);
          }
        Mc && (Mc = !1, od(l));
        break;
      case 4:
        a = Nt, Nt = Hu(
          l.stateNode.containerInfo
        ), kl(t, l), Fl(l), Nt = a;
        break;
      case 12:
        kl(t, l), Fl(l);
        break;
      case 31:
        kl(t, l), Fl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 13:
        kl(t, l), Fl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (zu = lt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null, g = Vt, S = Dl;
        if (Vt = g || n, Dl = S || r, kl(t, l), Dl = S, Vt = g, Fl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || r || Vt || Dl || Xe(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                r = e = t;
                try {
                  if (u = r.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = r.stateNode;
                    var E = r.memoizedProps.style, x = E != null && E.hasOwnProperty("display") ? E.display : null;
                    c.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (U) {
                  fl(r, r.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                r = t;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (U) {
                  fl(r, r.return, U);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                r = t;
                try {
                  var p = r.stateNode;
                  n ? tr(p, !0) : tr(r.stateNode, !1);
                } catch (U) {
                  fl(r, r.return, U);
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
        kl(t, l), Fl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kl(t, l), Fl(l);
    }
  }
  function Fl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (ad(a)) {
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
            e.flags & 32 && (Ie(i, ""), e.flags &= -33);
            var c = Tc(l);
            xu(l, c, i);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo, g = Tc(l);
            Ac(
              l,
              g,
              r
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (S) {
        fl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function od(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        od(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        id(l, t.alternate, t), t = t.sibling;
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
          typeof e.componentWillUnmount == "function" && td(
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
            } catch (g) {
              fl(a, a.return, g);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  ws(r[n], c);
            } catch (g) {
              fl(a, a.return, g);
            }
          }
          e && i & 64 && ld(u), rn(u, u.return);
          break;
        case 27:
          nd(u);
        case 26:
        case 5:
          Jt(
            n,
            u,
            e
          ), e && a === null && i & 4 && ed(u), rn(u, u.return);
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
          ), e && i & 4 && sd(n, u);
          break;
        case 13:
          Jt(
            n,
            u,
            e
          ), e && i & 4 && dd(n, u);
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
  function Et(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        md(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function md(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Et(
          l,
          t,
          e,
          a
        ), n & 2048 && dn(9, t);
        break;
      case 1:
        Et(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        Et(
          l,
          t,
          e,
          a
        ), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ka(l)));
        break;
      case 12:
        if (n & 2048) {
          Et(
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
            fl(t, t.return, r);
          }
        } else
          Et(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        Et(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        Et(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Et(
          l,
          t,
          e,
          a
        ) : on(l, t) : u._visibility & 2 ? Et(
          l,
          t,
          e,
          a
        ) : (u._visibility |= 2, ba(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Oc(i, t);
        break;
      case 24:
        Et(
          l,
          t,
          e,
          a
        ), n & 2048 && Dc(t.alternate, t);
        break;
      default:
        Et(
          l,
          t,
          e,
          a
        );
    }
  }
  function ba(l, t, e, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = l, i = t, c = e, r = a, g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ba(
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
          var S = i.stateNode;
          i.memoizedState !== null ? S._visibility & 2 ? ba(
            u,
            i,
            c,
            r,
            n
          ) : on(
            u,
            i
          ) : (S._visibility |= 2, ba(
            u,
            i,
            c,
            r,
            n
          )), n && g & 2048 && Oc(
            i.alternate,
            i
          );
          break;
        case 24:
          ba(
            u,
            i,
            c,
            r,
            n
          ), n && g & 2048 && Dc(i.alternate, i);
          break;
        default:
          ba(
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
  function xa(l, t, e) {
    if (l.subtreeFlags & mn)
      for (l = l.child; l !== null; )
        hd(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function hd(l, t, e) {
    switch (l.tag) {
      case 26:
        xa(
          l,
          t,
          e
        ), l.flags & mn && l.memoizedState !== null && c1(
          e,
          Nt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        xa(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Nt;
        Nt = Hu(l.stateNode.containerInfo), xa(
          l,
          t,
          e
        ), Nt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = mn, mn = 16777216, xa(
          l,
          t,
          e
        ), mn = a) : xa(
          l,
          t,
          e
        ));
        break;
      default:
        xa(
          l,
          t,
          e
        );
    }
  }
  function vd(l) {
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
          Cl = a, gd(
            a,
            l
          );
        }
      vd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        yd(l), l = l.sibling;
  }
  function yd(l) {
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
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Su(l)) : hn(l);
        break;
      default:
        hn(l);
    }
  }
  function Su(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Cl = a, gd(
            a,
            l
          );
        }
      vd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          se(8, t, t.return), Su(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Su(t));
          break;
        default:
          Su(t);
      }
      l = l.sibling;
    }
  }
  function gd(l, t) {
    for (; Cl !== null; ) {
      var e = Cl;
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
      if (a = e.child, a !== null) a.return = e, Cl = a;
      else
        l: for (e = l; Cl !== null; ) {
          a = Cl;
          var n = a.sibling, u = a.return;
          if (cd(a), a === e) {
            Cl = null;
            break l;
          }
          if (n !== null) {
            n.return = u, Cl = n;
            break l;
          }
          Cl = u;
        }
    }
  }
  var zm = {
    getCacheForType: function(l) {
      var t = Yl(Al), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Yl(Al).controller.signal;
    }
  }, jm = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, vl = null, k = null, I = 0, cl = 0, ct = null, de = !1, pa = !1, Rc = !1, $t = 0, zl = 0, re = 0, Qe = 0, Uc = 0, ft = 0, Sa = 0, vn = null, Il = null, Hc = !1, zu = 0, bd = 0, ju = 1 / 0, Nu = null, oe = null, Rl = 0, me = null, za = null, Wt = 0, Cc = 0, qc = null, xd = null, yn = 0, Bc = null;
  function st() {
    return (ul & 2) !== 0 && I !== 0 ? I & -I : j.T !== null ? wc() : Cf();
  }
  function pd() {
    if (ft === 0)
      if ((I & 536870912) === 0 || tl) {
        var l = Rn;
        Rn <<= 1, (Rn & 3932160) === 0 && (Rn = 262144), ft = l;
      } else ft = 536870912;
    return l = ut.current, l !== null && (l.flags |= 32), ft;
  }
  function Pl(l, t, e) {
    (l === vl && (cl === 2 || cl === 9) || l.cancelPendingCommit !== null) && (ja(l, 0), he(
      l,
      I,
      ft,
      !1
    )), qa(l, e), ((ul & 2) === 0 || l !== vl) && (l === vl && ((ul & 2) === 0 && (Qe |= e), zl === 4 && he(
      l,
      I,
      ft,
      !1
    )), Dt(l));
  }
  function Sd(l, t, e) {
    if ((ul & 6) !== 0) throw Error(d(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ca(l, t), n = a ? _m(l, t) : Zc(l, t, !0), u = a;
    do {
      if (n === 0) {
        pa && !a && he(l, t, 0, !1);
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
              if (r && (ja(c, i).flags |= 256), i = Zc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Rc && !r) {
                  c.errorRecoveryDisabledLanes |= u, Qe |= u, n = 4;
                  break l;
                }
                u = Il, Il = n, u !== null && (Il === null ? Il = u : Il.push.apply(
                  Il,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          ja(l, 0), he(l, t, 0, !0);
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
                ft,
                !de
              );
              break l;
            case 2:
              Il = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && (n = zu + 300 - lt(), 10 < n)) {
            if (he(
              a,
              t,
              ft,
              !de
            ), Hn(a, 0, !0) !== 0) break l;
            Wt = t, a.timeoutHandle = Id(
              zd.bind(
                null,
                a,
                e,
                Il,
                Nu,
                Hc,
                t,
                ft,
                Qe,
                Sa,
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
            Il,
            Nu,
            Hc,
            t,
            ft,
            Qe,
            Sa,
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
  function zd(l, t, e, a, n, u, i, c, r, g, S, E, x, p) {
    if (l.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht
      }, hd(
        t,
        u,
        E
      );
      var U = (u & 62914560) === u ? zu - lt() : (u & 4194048) === u ? bd - lt() : 0;
      if (U = f1(
        E,
        U
      ), U !== null) {
        Wt = u, l.cancelPendingCommit = U(
          Od.bind(
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
            S,
            E,
            null,
            x,
            p
          )
        ), he(l, u, i, !g);
        return;
      }
    }
    Od(
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
            if (!at(u(), n)) return !1;
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
      var u = 31 - et(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Rf(l, e, t);
  }
  function Eu() {
    return (ul & 6) === 0 ? (gn(0), !1) : !0;
  }
  function Yc() {
    if (k !== null) {
      if (cl === 0)
        var l = k.return;
      else
        l = k, Yt = Ue = null, lc(l), ma = null, Ia = 0, l = k;
      for (; l !== null; )
        P0(l.alternate, l), l = l.return;
      k = null;
    }
  }
  function ja(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Vm(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Wt = 0, Yc(), vl = l, k = e = qt(l.current, null), I = t, cl = 0, ct = null, de = !1, pa = Ca(l, t), Rc = !1, Sa = ft = Uc = Qe = re = zl = 0, Il = vn = null, Hc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - et(a), u = 1 << n;
        t |= l[n], a &= ~u;
      }
    return $t = t, Kn(), e;
  }
  function jd(l, t) {
    V = null, j.H = cn, t === oa || t === lu ? (t = Zs(), cl = 3) : t === Qi ? (t = Zs(), cl = 4) : cl = t === yc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ct = t, k === null && (zl = 1, hu(
      l,
      ht(t, l.current)
    ));
  }
  function Nd() {
    var l = ut.current;
    return l === null ? !0 : (I & 4194048) === I ? bt === null : (I & 62914560) === I || (I & 536870912) !== 0 ? l === bt : !1;
  }
  function Ed() {
    var l = j.H;
    return j.H = cn, l === null ? cn : l;
  }
  function _d() {
    var l = j.A;
    return j.A = zm, l;
  }
  function _u() {
    zl = 4, de || (I & 4194048) !== I && ut.current !== null || (pa = !0), (re & 134217727) === 0 && (Qe & 134217727) === 0 || vl === null || he(
      vl,
      I,
      ft,
      !1
    );
  }
  function Zc(l, t, e) {
    var a = ul;
    ul |= 2;
    var n = Ed(), u = _d();
    (vl !== l || I !== t) && (Nu = null, ja(l, t)), t = !1;
    var i = zl;
    l: do
      try {
        if (cl !== 0 && k !== null) {
          var c = k, r = ct;
          switch (cl) {
            case 8:
              Yc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ut.current === null && (t = !0);
              var g = cl;
              if (cl = 0, ct = null, Na(l, c, r, g), e && pa) {
                i = 0;
                break l;
              }
              break;
            default:
              g = cl, cl = 0, ct = null, Na(l, c, r, g);
          }
        }
        Em(), i = zl;
        break;
      } catch (S) {
        jd(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Ue = null, ul = a, j.H = n, j.A = u, k === null && (vl = null, I = 0, Kn()), i;
  }
  function Em() {
    for (; k !== null; ) Td(k);
  }
  function _m(l, t) {
    var e = ul;
    ul |= 2;
    var a = Ed(), n = _d();
    vl !== l || I !== t ? (Nu = null, ju = lt() + 500, ja(l, t)) : pa = Ca(
      l,
      t
    );
    l: do
      try {
        if (cl !== 0 && k !== null) {
          t = k;
          var u = ct;
          t: switch (cl) {
            case 1:
              cl = 0, ct = null, Na(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (Bs(u)) {
                cl = 0, ct = null, Ad(t);
                break;
              }
              t = function() {
                cl !== 2 && cl !== 9 || vl !== l || (cl = 7), Dt(l);
              }, u.then(t, t);
              break l;
            case 3:
              cl = 7;
              break l;
            case 4:
              cl = 5;
              break l;
            case 7:
              Bs(u) ? (cl = 0, ct = null, Ad(t)) : (cl = 0, ct = null, Na(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (k.tag) {
                case 26:
                  i = k.memoizedState;
                case 5:
                case 27:
                  var c = k;
                  if (i ? mr(i) : c.stateNode.complete) {
                    cl = 0, ct = null;
                    var r = c.sibling;
                    if (r !== null) k = r;
                    else {
                      var g = c.return;
                      g !== null ? (k = g, Tu(g)) : k = null;
                    }
                    break t;
                  }
              }
              cl = 0, ct = null, Na(l, t, u, 5);
              break;
            case 6:
              cl = 0, ct = null, Na(l, t, u, 6);
              break;
            case 8:
              Yc(), zl = 6;
              break l;
            default:
              throw Error(d(462));
          }
        }
        Tm();
        break;
      } catch (S) {
        jd(l, S);
      }
    while (!0);
    return Yt = Ue = null, j.H = a, j.A = n, ul = e, k !== null ? 0 : (vl = null, I = 0, Kn(), zl);
  }
  function Tm() {
    for (; k !== null && !Wr(); )
      Td(k);
  }
  function Td(l) {
    var t = F0(l.alternate, l, $t);
    l.memoizedProps = l.pendingProps, t === null ? Tu(l) : k = t;
  }
  function Ad(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = L0(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          I
        );
        break;
      case 11:
        t = L0(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          I
        );
        break;
      case 5:
        lc(t);
      default:
        P0(e, t), t = k = _s(t, $t), t = F0(e, t, $t);
    }
    l.memoizedProps = l.pendingProps, t === null ? Tu(l) : k = t;
  }
  function Na(l, t, e, a) {
    Yt = Ue = null, lc(t), ma = null, Ia = 0;
    var n = t.return;
    try {
      if (vm(
        l,
        n,
        t,
        e,
        I
      )) {
        zl = 1, hu(
          l,
          ht(e, l.current)
        ), k = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw k = n, u;
      zl = 1, hu(
        l,
        ht(e, l.current)
      ), k = null;
      return;
    }
    t.flags & 32768 ? (tl || a === 1 ? l = !0 : pa || (I & 536870912) !== 0 ? l = !1 : (de = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ut.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Md(t, l)) : Tu(t);
  }
  function Tu(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Md(
          t,
          de
        );
        return;
      }
      l = t.return;
      var e = bm(
        t.alternate,
        t,
        $t
      );
      if (e !== null) {
        k = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        k = t;
        return;
      }
      k = t = l;
    } while (t !== null);
    zl === 0 && (zl = 5);
  }
  function Md(l, t) {
    do {
      var e = xm(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, k = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        k = l;
        return;
      }
      k = l = e;
    } while (l !== null);
    zl = 6, k = null;
  }
  function Od(l, t, e, a, n, u, i, c, r) {
    l.cancelPendingCommit = null;
    do
      Au();
    while (Rl !== 0);
    if ((ul & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === l.current) throw Error(d(177));
      if (u = t.lanes | t.childLanes, u |= Ti, uo(
        l,
        e,
        u,
        i,
        c,
        r
      ), l === vl && (k = vl = null, I = 0), za = t, me = l, Wt = e, Cc = u, qc = n, xd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Dm(On, function() {
        return Cd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null, n = M.p, M.p = 2, i = ul, ul |= 4;
        try {
          pm(l, t, e);
        } finally {
          ul = i, M.p = n, j.T = a;
        }
      }
      Rl = 1, Dd(), Rd(), Ud();
    }
  }
  function Dd() {
    if (Rl === 1) {
      Rl = 0;
      var l = me, t = za, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = j.T, j.T = null;
        var a = M.p;
        M.p = 2;
        var n = ul;
        ul |= 4;
        try {
          rd(t, l);
          var u = Fc, i = gs(l.containerInfo), c = u.focusedElem, r = u.selectionRange;
          if (i !== c && c && c.ownerDocument && ys(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && zi(c)) {
              var g = r.start, S = r.end;
              if (S === void 0 && (S = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var E = c.ownerDocument || document, x = E && E.defaultView || window;
                if (x.getSelection) {
                  var p = x.getSelection(), U = c.textContent.length, Y = Math.min(r.start, U), ml = r.end === void 0 ? Y : Math.min(r.end, U);
                  !p.extend && Y > ml && (i = ml, ml = Y, Y = i);
                  var v = vs(
                    c,
                    Y
                  ), o = vs(
                    c,
                    ml
                  );
                  if (v && o && (p.rangeCount !== 1 || p.anchorNode !== v.node || p.anchorOffset !== v.offset || p.focusNode !== o.node || p.focusOffset !== o.offset)) {
                    var y = E.createRange();
                    y.setStart(v.node, v.offset), p.removeAllRanges(), Y > ml ? (p.addRange(y), p.extend(o.node, o.offset)) : (y.setEnd(o.node, o.offset), p.addRange(y));
                  }
                }
              }
            }
            for (E = [], p = c; p = p.parentNode; )
              p.nodeType === 1 && E.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
              var N = E[c];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          Gu = !!kc, Fc = kc = null;
        } finally {
          ul = n, M.p = a, j.T = e;
        }
      }
      l.current = t, Rl = 2;
    }
  }
  function Rd() {
    if (Rl === 2) {
      Rl = 0;
      var l = me, t = za, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = j.T, j.T = null;
        var a = M.p;
        M.p = 2;
        var n = ul;
        ul |= 4;
        try {
          id(l, t.alternate, t);
        } finally {
          ul = n, M.p = a, j.T = e;
        }
      }
      Rl = 3;
    }
  }
  function Ud() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, kr();
      var l = me, t = za, e = Wt, a = xd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, za = me = null, Hd(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (oe = null), ai(e), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function")
        try {
          tt.onCommitFiberRoot(
            Ha,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = j.T, n = M.p, M.p = 2, j.T = null;
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          j.T = t, M.p = n;
        }
      }
      (Wt & 3) !== 0 && Au(), Dt(l), n = l.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? l === Bc ? yn++ : (yn = 0, Bc = l) : yn = 0, gn(0);
    }
  }
  function Hd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ka(t)));
  }
  function Au() {
    return Dd(), Rd(), Ud(), Cd();
  }
  function Cd() {
    if (Rl !== 5) return !1;
    var l = me, t = Cc;
    Cc = 0;
    var e = ai(Wt), a = j.T, n = M.p;
    try {
      M.p = 32 > e ? 32 : e, j.T = null, e = qc, qc = null;
      var u = me, i = Wt;
      if (Rl = 0, za = me = null, Wt = 0, (ul & 6) !== 0) throw Error(d(331));
      var c = ul;
      if (ul |= 4, yd(u.current), md(
        u,
        u.current,
        i,
        e
      ), ul = c, gn(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function")
        try {
          tt.onPostCommitFiberRoot(Ha, u);
        } catch {
        }
      return !0;
    } finally {
      M.p = n, j.T = a, Hd(l, t);
    }
  }
  function qd(l, t, e) {
    t = ht(e, t), t = vc(l.stateNode, t, 2), l = ie(l, t, 2), l !== null && (qa(l, 2), Dt(l));
  }
  function fl(l, t, e) {
    if (l.tag === 3)
      qd(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qd(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (oe === null || !oe.has(a))) {
            l = ht(e, l), e = B0(2), a = ie(t, e, 2), a !== null && (Y0(
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
      a = l.pingCache = new jm();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(e) || (Rc = !0, n.add(e), l = Am.bind(null, l, t, e), t.then(l, l));
  }
  function Am(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, vl === l && (I & e) === e && (zl === 4 || zl === 3 && (I & 62914560) === I && 300 > lt() - zu ? (ul & 2) === 0 && ja(l, 0) : Uc |= e, Sa === I && (Sa = 0)), Dt(l);
  }
  function Bd(l, t) {
    t === 0 && (t = Df()), l = Oe(l, t), l !== null && (qa(l, t), Dt(l));
  }
  function Mm(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Bd(l, e);
  }
  function Om(l, t) {
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
    a !== null && a.delete(t), Bd(l, e);
  }
  function Dm(l, t) {
    return Pu(l, t);
  }
  var Mu = null, Ea = null, Xc = !1, Ou = !1, Qc = !1, ve = 0;
  function Dt(l) {
    l !== Ea && l.next === null && (Ea === null ? Mu = Ea = l : Ea = Ea.next = l), Ou = !0, Xc || (Xc = !0, Um());
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
              u = (1 << 31 - et(42 | l) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Xd(a, u));
          } else
            u = I, u = Hn(
              a,
              a === vl ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ca(a, u) || (e = !0, Xd(a, u));
          a = a.next;
        }
      while (e);
      Qc = !1;
    }
  }
  function Rm() {
    Yd();
  }
  function Yd() {
    Ou = Xc = !1;
    var l = 0;
    ve !== 0 && wm() && (l = ve);
    for (var t = lt(), e = null, a = Mu; a !== null; ) {
      var n = a.next, u = Zd(a, t);
      u === 0 ? (a.next = null, e === null ? Mu = n : e.next = n, n === null && (Ea = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (Ou = !0)), a = n;
    }
    Rl !== 0 && Rl !== 5 || gn(l), ve !== 0 && (ve = 0);
  }
  function Zd(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - et(u), c = 1 << i, r = n[i];
      r === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = no(c, t)) : r <= t && (l.expiredLanes |= c), u &= ~c;
    }
    if (t = vl, e = I, e = Hn(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (cl === 2 || cl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && li(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ca(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && li(a), ai(e)) {
        case 2:
        case 8:
          e = Mf;
          break;
        case 32:
          e = On;
          break;
        case 268435456:
          e = Of;
          break;
        default:
          e = On;
      }
      return a = Gd.bind(null, l), e = Pu(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && li(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Gd(l, t) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Au() && l.callbackNode !== e)
      return null;
    var a = I;
    return a = Hn(
      l,
      l === vl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Sd(l, a, t), Zd(l, lt()), l.callbackNode != null && l.callbackNode === e ? Gd.bind(null, l) : null);
  }
  function Xd(l, t) {
    if (Au()) return null;
    Sd(l, t, !0);
  }
  function Um() {
    Lm(function() {
      (ul & 6) !== 0 ? Pu(
        Af,
        Rm
      ) : Yd();
    });
  }
  function wc() {
    if (ve === 0) {
      var l = da;
      l === 0 && (l = Dn, Dn <<= 1, (Dn & 261888) === 0 && (Dn = 256)), ve = l;
    }
    return ve;
  }
  function Qd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Yn("" + l);
  }
  function wd(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Hm(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = Qd(
        (n[Jl] || null).action
      ), i = a.submitter;
      i && (t = (t = i[Jl] || null) ? Qd(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
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
                  var r = i ? wd(n, i) : new FormData(n);
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
                typeof u == "function" && (c.preventDefault(), r = i ? wd(n, i) : new FormData(n), sc(
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
    var Lc = _i[Vc], Cm = Lc.toLowerCase(), qm = Lc[0].toUpperCase() + Lc.slice(1);
    jt(
      Cm,
      "on" + qm
    );
  }
  jt(ps, "onAnimationEnd"), jt(Ss, "onAnimationIteration"), jt(zs, "onAnimationStart"), jt("dblclick", "onDoubleClick"), jt("focusin", "onFocus"), jt("focusout", "onBlur"), jt(Io, "onTransitionRun"), jt(Po, "onTransitionStart"), jt(lm, "onTransitionCancel"), jt(js, "onTransitionEnd"), ke("onMouseEnter", ["mouseout", "mouseover"]), ke("onMouseLeave", ["mouseout", "mouseover"]), ke("onPointerEnter", ["pointerout", "pointerover"]), ke("onPointerLeave", ["pointerout", "pointerover"]), _e(
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
  ), Bm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn)
  );
  function Vd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], r = c.instance, g = c.currentTarget;
            if (c = c.listener, r !== u && n.isPropagationStopped())
              break l;
            u = c, n.currentTarget = g;
            try {
              u(n);
            } catch (S) {
              Ln(S);
            }
            n.currentTarget = null, u = r;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], r = c.instance, g = c.currentTarget, c = c.listener, r !== u && n.isPropagationStopped())
              break l;
            u = c, n.currentTarget = g;
            try {
              u(n);
            } catch (S) {
              Ln(S);
            }
            n.currentTarget = null, u = r;
          }
      }
    }
  }
  function F(l, t) {
    var e = t[ni];
    e === void 0 && (e = t[ni] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (Ld(t, l, 2, !1), e.add(a));
  }
  function Kc(l, t, e) {
    var a = 0;
    t && (a |= 4), Ld(
      e,
      l,
      a,
      t
    );
  }
  var Du = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(l) {
    if (!l[Du]) {
      l[Du] = !0, Yf.forEach(function(e) {
        e !== "selectionchange" && (Bm.has(e) || Kc(e, !1, l), Kc(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Du] || (t[Du] = !0, Kc("selectionchange", !1, t));
    }
  }
  function Ld(l, t, e, a) {
    switch (pr(t)) {
      case 2:
        var n = r1;
        break;
      case 8:
        n = o1;
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
            if (i = Je(c), i === null) return;
            if (r = i.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              a = u = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    kf(function() {
      var g = u, S = ri(e), E = [];
      l: {
        var x = Ns.get(l);
        if (x !== void 0) {
          var p = Qn, U = l;
          switch (l) {
            case "keypress":
              if (Gn(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = Oo;
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
              p = Pf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = bo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Uo;
              break;
            case ps:
            case Ss:
            case zs:
              p = So;
              break;
            case js:
              p = Co;
              break;
            case "scroll":
            case "scrollend":
              p = yo;
              break;
            case "wheel":
              p = Bo;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = jo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = ts;
              break;
            case "toggle":
            case "beforetoggle":
              p = Zo;
          }
          var Y = (t & 4) !== 0, ml = !Y && (l === "scroll" || l === "scrollend"), v = Y ? x !== null ? x + "Capture" : null : x;
          Y = [];
          for (var o = g, y; o !== null; ) {
            var N = o;
            if (y = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || y === null || v === null || (N = Za(o, v), N != null && Y.push(
              xn(o, N, y)
            )), ml) break;
            o = o.return;
          }
          0 < Y.length && (x = new p(
            x,
            U,
            null,
            e,
            S
          ), E.push({ event: x, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (x = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", x && e !== di && (U = e.relatedTarget || e.fromElement) && (Je(U) || U[Ke]))
            break l;
          if ((p || x) && (x = S.window === S ? S : (x = S.ownerDocument) ? x.defaultView || x.parentWindow : window, p ? (U = e.relatedTarget || e.toElement, p = g, U = U ? Je(U) : null, U !== null && (ml = R(U), Y = U.tag, U !== ml || Y !== 5 && Y !== 27 && Y !== 6) && (U = null)) : (p = null, U = g), p !== U)) {
            if (Y = Pf, N = "onMouseLeave", v = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (Y = ts, N = "onPointerLeave", v = "onPointerEnter", o = "pointer"), ml = p == null ? x : Ya(p), y = U == null ? x : Ya(U), x = new Y(
              N,
              o + "leave",
              p,
              e,
              S
            ), x.target = ml, x.relatedTarget = y, N = null, Je(S) === g && (Y = new Y(
              v,
              o + "enter",
              U,
              e,
              S
            ), Y.target = y, Y.relatedTarget = ml, N = Y), ml = N, p && U)
              t: {
                for (Y = Ym, v = p, o = U, y = 0, N = v; N; N = Y(N))
                  y++;
                N = 0;
                for (var q = o; q; q = Y(q))
                  N++;
                for (; 0 < y - N; )
                  v = Y(v), y--;
                for (; 0 < N - y; )
                  o = Y(o), N--;
                for (; y--; ) {
                  if (v === o || o !== null && v === o.alternate) {
                    Y = v;
                    break t;
                  }
                  v = Y(v), o = Y(o);
                }
                Y = null;
              }
            else Y = null;
            p !== null && Kd(
              E,
              x,
              p,
              Y,
              !1
            ), U !== null && ml !== null && Kd(
              E,
              ml,
              U,
              Y,
              !0
            );
          }
        }
        l: {
          if (x = g ? Ya(g) : window, p = x.nodeName && x.nodeName.toLowerCase(), p === "select" || p === "input" && x.type === "file")
            var el = ss;
          else if (cs(x))
            if (ds)
              el = Wo;
            else {
              el = Jo;
              var C = Ko;
            }
          else
            p = x.nodeName, !p || p.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? g && si(g.elementType) && (el = ss) : el = $o;
          if (el && (el = el(l, g))) {
            fs(
              E,
              el,
              e,
              S
            );
            break l;
          }
          C && C(l, x, g), l === "focusout" && g && x.type === "number" && g.memoizedProps.value != null && fi(x, "number", x.value);
        }
        switch (C = g ? Ya(g) : window, l) {
          case "focusin":
            (cs(C) || C.contentEditable === "true") && (ea = C, ji = g, Ja = null);
            break;
          case "focusout":
            Ja = ji = ea = null;
            break;
          case "mousedown":
            Ni = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ni = !1, bs(E, e, S);
            break;
          case "selectionchange":
            if (Fo) break;
          case "keydown":
          case "keyup":
            bs(E, e, S);
        }
        var L;
        if (xi)
          l: {
            switch (l) {
              case "compositionstart":
                var P = "onCompositionStart";
                break l;
              case "compositionend":
                P = "onCompositionEnd";
                break l;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break l;
            }
            P = void 0;
          }
        else
          ta ? us(l, e) && (P = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (P = "onCompositionStart");
        P && (es && e.locale !== "ko" && (ta || P !== "onCompositionStart" ? P === "onCompositionEnd" && ta && (L = Ff()) : (Pt = S, hi = "value" in Pt ? Pt.value : Pt.textContent, ta = !0)), C = Ru(g, P), 0 < C.length && (P = new ls(
          P,
          l,
          null,
          e,
          S
        ), E.push({ event: P, listeners: C }), L ? P.data = L : (L = is(e), L !== null && (P.data = L)))), (L = Xo ? Qo(l, e) : wo(l, e)) && (P = Ru(g, "onBeforeInput"), 0 < P.length && (C = new ls(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          S
        ), E.push({
          event: C,
          listeners: P
        }), C.data = L)), Hm(
          E,
          l,
          g,
          e,
          S
        );
      }
      Vd(E, t);
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
  function Ym(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Kd(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, r = c.alternate, g = c.stateNode;
      if (c = c.tag, r !== null && r === a) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (r = g, n ? (g = Za(e, u), g != null && i.unshift(
        xn(e, g, r)
      )) : n || (g = Za(e, u), g != null && i.push(
        xn(e, g, r)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Zm = /\r\n?/g, Gm = /\u0000|\uFFFD/g;
  function Jd(l) {
    return (typeof l == "string" ? l : "" + l).replace(Zm, `
`).replace(Gm, "");
  }
  function $d(l, t) {
    return t = Jd(t), Jd(l) === t;
  }
  function ol(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ie(l, "" + a);
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
        $f(l, a, u);
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
          typeof u == "function" && (e === "formAction" ? (t !== "input" && ol(l, t, "name", n.name, n, null), ol(
            l,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), ol(
            l,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), ol(
            l,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (ol(l, t, "encType", n.encType, n, null), ol(l, t, "method", n.method, n, null), ol(l, t, "target", n.target, n, null)));
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
        a != null && F("scroll", l);
        break;
      case "onScrollEnd":
        a != null && F("scrollend", l);
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
        F("beforetoggle", l), F("toggle", l), Cn(l, "popover", a);
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
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = ho.get(e) || e, Cn(l, e, a));
    }
  }
  function Wc(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        $f(l, a, u);
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
        typeof a == "string" ? Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && Ie(l, "" + a);
        break;
      case "onScroll":
        a != null && F("scroll", l);
        break;
      case "onScrollEnd":
        a != null && F("scrollend", l);
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
        if (!Zf.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[Jl] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Cn(l, e, a);
          }
    }
  }
  function Gl(l, t, e) {
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
        F("error", l), F("load", l);
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
                  ol(l, t, u, i, e, null);
              }
          }
        n && ol(l, t, "srcSet", e.srcSet, e, null), a && ol(l, t, "src", e.src, e, null);
        return;
      case "input":
        F("invalid", l);
        var c = u = i = n = null, r = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var S = e[a];
            if (S != null)
              switch (a) {
                case "name":
                  n = S;
                  break;
                case "type":
                  i = S;
                  break;
                case "checked":
                  r = S;
                  break;
                case "defaultChecked":
                  g = S;
                  break;
                case "value":
                  u = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(d(137, t));
                  break;
                default:
                  ol(l, t, a, S, e, null);
              }
          }
        Vf(
          l,
          u,
          c,
          r,
          g,
          i,
          n,
          !1
        );
        return;
      case "select":
        F("invalid", l), a = i = u = null;
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
                ol(l, t, n, c, e, null);
            }
        t = u, e = i, l.multiple = !!a, t != null ? Fe(l, !!a, t, !1) : e != null && Fe(l, !!a, e, !0);
        return;
      case "textarea":
        F("invalid", l), u = n = a = null;
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
                ol(l, t, i, c, e, null);
            }
        Kf(l, a, n, u);
        return;
      case "option":
        for (r in e)
          e.hasOwnProperty(r) && (a = e[r], a != null) && (r === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : ol(l, t, r, a, e, null));
        return;
      case "dialog":
        F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
        break;
      case "iframe":
      case "object":
        F("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bn.length; a++)
          F(bn[a], l);
        break;
      case "image":
        F("error", l), F("load", l);
        break;
      case "details":
        F("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        F("error", l), F("load", l);
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
        for (g in e)
          if (e.hasOwnProperty(g) && (a = e[g], a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                ol(l, t, g, a, e, null);
            }
        return;
      default:
        if (si(t)) {
          for (S in e)
            e.hasOwnProperty(S) && (a = e[S], a !== void 0 && Wc(
              l,
              t,
              S,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && ol(l, t, c, a, e, null));
  }
  function Xm(l, t, e, a) {
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
        var n = null, u = null, i = null, c = null, r = null, g = null, S = null;
        for (p in e) {
          var E = e[p];
          if (e.hasOwnProperty(p) && E != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = E;
              default:
                a.hasOwnProperty(p) || ol(l, t, p, null, a, E);
            }
        }
        for (var x in a) {
          var p = a[x];
          if (E = e[x], a.hasOwnProperty(x) && (p != null || E != null))
            switch (x) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                g = p;
                break;
              case "defaultChecked":
                S = p;
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
                p !== E && ol(
                  l,
                  t,
                  x,
                  p,
                  a,
                  E
                );
            }
        }
        ci(
          l,
          i,
          c,
          r,
          g,
          S,
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
                a.hasOwnProperty(u) || ol(
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
                u !== r && ol(
                  l,
                  t,
                  n,
                  u,
                  a,
                  r
                );
            }
        t = c, e = i, a = p, x != null ? Fe(l, !!e, x, !1) : !!a != !!e && (t != null ? Fe(l, !!e, t, !0) : Fe(l, !!e, e ? [] : "", !1));
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
                ol(l, t, c, null, a, n);
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
                n !== u && ol(l, t, i, n, a, u);
            }
        Lf(l, x, p);
        return;
      case "option":
        for (var U in e)
          x = e[U], e.hasOwnProperty(U) && x != null && !a.hasOwnProperty(U) && (U === "selected" ? l.selected = !1 : ol(
            l,
            t,
            U,
            null,
            a,
            x
          ));
        for (r in a)
          x = a[r], p = e[r], a.hasOwnProperty(r) && x !== p && (x != null || p != null) && (r === "selected" ? l.selected = x && typeof x != "function" && typeof x != "symbol" : ol(
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
          x = e[Y], e.hasOwnProperty(Y) && x != null && !a.hasOwnProperty(Y) && ol(l, t, Y, null, a, x);
        for (g in a)
          if (x = a[g], p = e[g], a.hasOwnProperty(g) && x !== p && (x != null || p != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(d(137, t));
                break;
              default:
                ol(
                  l,
                  t,
                  g,
                  x,
                  a,
                  p
                );
            }
        return;
      default:
        if (si(t)) {
          for (var ml in e)
            x = e[ml], e.hasOwnProperty(ml) && x !== void 0 && !a.hasOwnProperty(ml) && Wc(
              l,
              t,
              ml,
              void 0,
              a,
              x
            );
          for (S in a)
            x = a[S], p = e[S], !a.hasOwnProperty(S) || x === p || x === void 0 && p === void 0 || Wc(
              l,
              t,
              S,
              x,
              a,
              p
            );
          return;
        }
    }
    for (var v in e)
      x = e[v], e.hasOwnProperty(v) && x != null && !a.hasOwnProperty(v) && ol(l, t, v, null, a, x);
    for (E in a)
      x = a[E], p = e[E], !a.hasOwnProperty(E) || x === p || x == null && p == null || ol(l, t, E, x, a, p);
  }
  function Wd(l) {
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
  function Qm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && Wd(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var r = e[a], g = r.startTime;
            if (g > c) break;
            var S = r.transferSize, E = r.initiatorType;
            S && Wd(E) && (r = r.responseEnd, i += S * (r < c ? 1 : (c - g) / (r - g)));
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
  function kd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Fd(l, t) {
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
  function wm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Pc ? !1 : (Pc = l, !0) : (Pc = null, !1);
  }
  var Id = typeof setTimeout == "function" ? setTimeout : void 0, Vm = typeof clearTimeout == "function" ? clearTimeout : void 0, Pd = typeof Promise == "function" ? Promise : void 0, Lm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pd < "u" ? function(l) {
    return Pd.resolve(null).then(l).catch(Km);
  } : Id;
  function Km(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ye(l) {
    return l === "head";
  }
  function lr(l, t) {
    var e = t, a = 0;
    do {
      var n = e.nextSibling;
      if (l.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(n), Ma(t);
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
    Ma(t);
  }
  function tr(l, t) {
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
  function Jm(l, t, e, a) {
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
      if (l = xt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function $m(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = xt(l.nextSibling), l === null)) return null;
    return l;
  }
  function er(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = xt(l.nextSibling), l === null)) return null;
    return l;
  }
  function tf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ef(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Wm(l, t) {
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
  function xt(l) {
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
  function ar(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return xt(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function nr(l) {
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
  function ur(l, t, e) {
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
  var pt = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Set();
  function Hu(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var kt = M.d;
  M.d = {
    f: km,
    r: Fm,
    D: Im,
    C: Pm,
    L: l1,
    m: t1,
    X: a1,
    S: e1,
    M: n1
  };
  function km() {
    var l = kt.f(), t = Eu();
    return l || t;
  }
  function Fm(l) {
    var t = $e(l);
    t !== null && t.tag === 5 && t.type === "form" ? j0(t) : kt.r(l);
  }
  var _a = typeof document > "u" ? null : document;
  function cr(l, t, e) {
    var a = _a;
    if (a && typeof t == "string" && t) {
      var n = ot(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), ir.has(n) || (ir.add(n), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), Gl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function Im(l) {
    kt.D(l), cr("dns-prefetch", l, null);
  }
  function Pm(l, t) {
    kt.C(l, t), cr("preconnect", l, t);
  }
  function l1(l, t, e) {
    kt.L(l, t, e);
    var a = _a;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + ot(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + ot(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + ot(
        e.imageSizes
      ) + '"]')) : n += '[href="' + ot(l) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Ta(l);
          break;
        case "script":
          u = Aa(l);
      }
      pt.has(u) || (l = B(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), pt.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(Sn(u)) || t === "script" && a.querySelector(zn(u)) || (t = a.createElement("link"), Gl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function t1(l, t) {
    kt.m(l, t);
    var e = _a;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + ot(a) + '"][href="' + ot(l) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Aa(l);
      }
      if (!pt.has(u) && (l = B({ rel: "modulepreload", href: l }, t), pt.set(u, l), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(zn(u)))
              return;
        }
        a = e.createElement("link"), Gl(a, "link", l), Hl(a), e.head.appendChild(a);
      }
    }
  }
  function e1(l, t, e) {
    kt.S(l, t, e);
    var a = _a;
    if (a && l) {
      var n = We(a).hoistableStyles, u = Ta(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          Sn(u)
        ))
          c.loading = 5;
        else {
          l = B(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = pt.get(u)) && nf(l, e);
          var r = i = a.createElement("link");
          Hl(r), Gl(r, "link", l), r._p = new Promise(function(g, S) {
            r.onload = g, r.onerror = S;
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
  function a1(l, t) {
    kt.X(l, t);
    var e = _a;
    if (e && l) {
      var a = We(e).hoistableScripts, n = Aa(l), u = a.get(n);
      u || (u = e.querySelector(zn(n)), u || (l = B({ src: l, async: !0 }, t), (t = pt.get(n)) && uf(l, t), u = e.createElement("script"), Hl(u), Gl(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function n1(l, t) {
    kt.M(l, t);
    var e = _a;
    if (e && l) {
      var a = We(e).hoistableScripts, n = Aa(l), u = a.get(n);
      u || (u = e.querySelector(zn(n)), u || (l = B({ src: l, async: !0, type: "module" }, t), (t = pt.get(n)) && uf(l, t), u = e.createElement("script"), Hl(u), Gl(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function fr(l, t, e, a) {
    var n = (n = W.current) ? Hu(n) : null;
    if (!n) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ta(e.href), e = We(
          n
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Ta(e.href);
          var u = We(
            n
          ).hoistableStyles, i = u.get(l);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(l, i), (u = n.querySelector(
            Sn(l)
          )) && !u._p && (i.instance = u, i.state.loading = 5), pt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, pt.set(l, e), u || u1(
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
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Aa(e), e = We(
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
  function Ta(l) {
    return 'href="' + ot(l) + '"';
  }
  function Sn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function sr(l) {
    return B({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function u1(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Gl(t, "link", e), Hl(t), l.head.appendChild(t));
  }
  function Aa(l) {
    return '[src="' + ot(l) + '"]';
  }
  function zn(l) {
    return "script[async]" + l;
  }
  function dr(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + ot(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Hl(a), a;
          var n = B({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(a), Gl(a, "style", n), Cu(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          n = Ta(e.href);
          var u = l.querySelector(
            Sn(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Hl(u), u;
          a = sr(e), (n = pt.get(n)) && nf(a, n), u = (l.ownerDocument || l).createElement("link"), Hl(u);
          var i = u;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), Gl(u, "link", a), t.state.loading |= 4, Cu(u, e.precedence, l), t.instance = u;
        case "script":
          return u = Aa(e.src), (n = l.querySelector(
            zn(u)
          )) ? (t.instance = n, Hl(n), n) : (a = e, (n = pt.get(u)) && (a = B({}, e), uf(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Hl(n), Gl(n, "link", a), l.head.appendChild(n), t.instance = n);
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
  function rr(l, t, e) {
    if (qu === null) {
      var a = /* @__PURE__ */ new Map(), n = qu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = qu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[Ba] || u[ql] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function or(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function i1(l, t, e) {
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
  function mr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function c1(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Ta(a.href), u = t.querySelector(
          Sn(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Bu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, Hl(u);
          return;
        }
        u = t.ownerDocument || t, a = sr(a), (n = pt.get(n)) && nf(a, n), u = u.createElement("link"), Hl(u);
        var i = u;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), Gl(u, "link", a), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Bu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var cf = 0;
  function f1(l, t) {
    return l.stylesheets && l.count === 0 && Zu(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Zu(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < l.imgBytes && cf === 0 && (cf = 62500 * Qm());
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
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Yu = /* @__PURE__ */ new Map(), t.forEach(s1, l), Yu = null, Bu.call(l));
  }
  function s1(l, t) {
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
    $$typeof: Tl,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function d1(l, t, e, a, n, u, i, c, r) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ti(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ti(0), this.hiddenUpdates = ti(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function hr(l, t, e, a, n, u, i, c, r, g, S, E) {
    return l = new d1(
      l,
      t,
      e,
      i,
      r,
      g,
      S,
      E,
      c
    ), t = 1, u === !0 && (t |= 24), u = nt(3, null, null, t), l.current = u, u.stateNode = l, t = Zi(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, wi(u), l;
  }
  function vr(l) {
    return l ? (l = ua, l) : ua;
  }
  function yr(l, t, e, a, n, u) {
    n = vr(n), a.context === null ? a.context = n : a.pendingContext = n, a = ue(t), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = ie(l, a, t), e !== null && (Pl(e, l, t), ln(e, l, t));
  }
  function gr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function ff(l, t) {
    gr(l, t), (l = l.alternate) && gr(l, t);
  }
  function br(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oe(l, 67108864);
      t !== null && Pl(t, l, 67108864), ff(l, 67108864);
    }
  }
  function xr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = st();
      t = ei(t);
      var e = Oe(l, t);
      e !== null && Pl(e, l, t), ff(l, t);
    }
  }
  var Gu = !0;
  function r1(l, t, e, a) {
    var n = j.T;
    j.T = null;
    var u = M.p;
    try {
      M.p = 2, sf(l, t, e, a);
    } finally {
      M.p = u, j.T = n;
    }
  }
  function o1(l, t, e, a) {
    var n = j.T;
    j.T = null;
    var u = M.p;
    try {
      M.p = 8, sf(l, t, e, a);
    } finally {
      M.p = u, j.T = n;
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
        ), Sr(l, a);
      else if (h1(
        n,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (Sr(l, a), t & 4 && -1 < m1.indexOf(l)) {
        for (; n !== null; ) {
          var u = $e(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ee(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var r = 1 << 31 - et(i);
                      c.entanglements[1] |= r, i &= ~r;
                    }
                    Dt(u), (ul & 6) === 0 && (ju = lt() + 500, gn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Oe(u, 2), c !== null && Pl(c, u, 2), Eu(), ff(u, 2);
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
    if (Xu = null, l = Je(l), l !== null) {
      var t = R(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = Z(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = K(t), l !== null) return l;
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
  function pr(l) {
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
        switch (Fr()) {
          case Af:
            return 2;
          case Mf:
            return 8;
          case On:
          case Ir:
            return 32;
          case Of:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var of = !1, ge = null, be = null, xe = null, Nn = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map(), pe = [], m1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Sr(l, t) {
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
        Nn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        En.delete(t.pointerId);
    }
  }
  function _n(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = $e(t), t !== null && br(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function h1(l, t, e, a, n) {
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
        return Nn.set(
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
      case "gotpointercapture":
        return u = n.pointerId, En.set(
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
    }
    return !1;
  }
  function zr(l) {
    var t = Je(l.target);
    if (t !== null) {
      var e = R(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = Z(e), t !== null) {
            l.blockedOn = t, qf(l.priority, function() {
              xr(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = K(e), t !== null) {
            l.blockedOn = t, qf(l.priority, function() {
              xr(e);
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
        return t = $e(e), t !== null && br(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function jr(l, t, e) {
    Qu(l) && e.delete(t);
  }
  function v1() {
    of = !1, ge !== null && Qu(ge) && (ge = null), be !== null && Qu(be) && (be = null), xe !== null && Qu(xe) && (xe = null), Nn.forEach(jr), En.forEach(jr);
  }
  function wu(l, t) {
    l.blockedOn === t && (l.blockedOn = null, of || (of = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      v1
    )));
  }
  var Vu = null;
  function Nr(l) {
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
          var u = $e(e);
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
  function Ma(l) {
    function t(r) {
      return wu(r, l);
    }
    ge !== null && wu(ge, l), be !== null && wu(be, l), xe !== null && wu(xe, l), Nn.forEach(t), En.forEach(t);
    for (var e = 0; e < pe.length; e++) {
      var a = pe[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < pe.length && (e = pe[0], e.blockedOn === null); )
      zr(e), e.blockedOn === null && pe.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[Jl] || null;
        if (typeof u == "function")
          i || Nr(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Jl] || null)
              c = i.formAction;
            else if (rf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Nr(e);
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
    var e = t.current, a = st();
    yr(e, a, l, t, null, null);
  }, Lu.prototype.unmount = mf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      yr(l.current, 2, null, l, null, null), Eu(), t[Ke] = null;
    }
  };
  function Lu(l) {
    this._internalRoot = l;
  }
  Lu.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Cf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < pe.length && t !== 0 && t < pe[e].priority; e++) ;
      pe.splice(e, 0, l), e === 0 && zr(l);
    }
  };
  var _r = m.version;
  if (_r !== "19.2.8")
    throw Error(
      d(
        527,
        _r,
        "19.2.8"
      )
    );
  M.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(d(188)) : (l = Object.keys(l).join(","), Error(d(268, l)));
    return l = z(t), l = l !== null ? J(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var y1 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ku.isDisabled && Ku.supportsFiber)
      try {
        Ha = Ku.inject(
          y1
        ), tt = Ku;
      } catch {
      }
  }
  return An.createRoot = function(l, t) {
    if (!D(l)) throw Error(d(299));
    var e = !1, a = "", n = U0, u = H0, i = C0;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = hr(
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
    ), l[Ke] = t.current, Jc(l), new mf(t);
  }, An.hydrateRoot = function(l, t, e) {
    if (!D(l)) throw Error(d(299));
    var a = !1, n = "", u = U0, i = H0, c = C0, r = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), t = hr(
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
    ), t.context = vr(null), e = t.current, a = st(), a = ei(a), n = ue(a), n.callback = null, ie(e, n, a), e = a, t.current.lanes = e, qa(t, e), Dt(t), l[Ke] = t.current, Jc(l), new Lu(t);
  }, An.version = "19.2.8", An;
}
var qr;
function _1() {
  if (qr) return yf.exports;
  qr = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (m) {
        console.error(m);
      }
  }
  return s(), yf.exports = E1(), yf.exports;
}
var T1 = _1();
function A1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z"
  }));
}
const M1 = /* @__PURE__ */ T.forwardRef(A1);
function O1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z",
    clipRule: "evenodd"
  }));
}
const D1 = /* @__PURE__ */ T.forwardRef(O1);
function R1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z",
    clipRule: "evenodd"
  }));
}
const U1 = /* @__PURE__ */ T.forwardRef(R1);
function H1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z",
    clipRule: "evenodd"
  }));
}
const C1 = /* @__PURE__ */ T.forwardRef(H1);
function q1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",
    clipRule: "evenodd"
  }));
}
const B1 = /* @__PURE__ */ T.forwardRef(q1);
function Y1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z",
    clipRule: "evenodd"
  }));
}
const Z1 = /* @__PURE__ */ T.forwardRef(Y1);
function G1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const X1 = /* @__PURE__ */ T.forwardRef(G1);
function Q1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const w1 = /* @__PURE__ */ T.forwardRef(Q1);
function V1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
const L1 = /* @__PURE__ */ T.forwardRef(V1);
function K1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const Sf = /* @__PURE__ */ T.forwardRef(K1);
function J1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M8 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
  }), /* @__PURE__ */ T.createElement("path", {
    d: "M8 8.5c1.84 0 3.579-.37 4.914-1.037A6.33 6.33 0 0 0 14 6.78V8c0 1.657-2.686 3-6 3S2 9.657 2 8V6.78c.346.273.72.5 1.087.683C4.42 8.131 6.16 8.5 8 8.5Z"
  }), /* @__PURE__ */ T.createElement("path", {
    d: "M8 12.5c1.84 0 3.579-.37 4.914-1.037.366-.183.74-.41 1.086-.684V12c0 1.657-2.686 3-6 3s-6-1.343-6-3v-1.22c.346.273.72.5 1.087.683C4.42 12.131 6.16 12.5 8 12.5Z"
  }));
}
const zf = /* @__PURE__ */ T.forwardRef(J1);
function $1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937v-2.523a2.5 2.5 0 0 0-.732-1.768L8.354 5.232A2.5 2.5 0 0 0 6.586 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ T.createElement("path", {
    d: "M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.586a1 1 0 0 0-.293-.707L7.293 6.293A1 1 0 0 0 6.586 6H3Z"
  }));
}
const W1 = /* @__PURE__ */ T.forwardRef($1);
function k1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M6 6v4h4V6H6Z"
  }), /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3a2 2 0 0 0 2 2v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13a2 2 0 0 0 2-2h1.25a.75.75 0 0 0 0-1.5H13v-.75h1.25a.75.75 0 0 0 0-1.5H13V6.5h1.25a.75.75 0 0 0 0-1.5H13a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-.75V1.75a.75.75 0 0 0-1.5 0V3H6.5V1.75A.75.75 0 0 0 5.75 1ZM11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6Z",
    clipRule: "evenodd"
  }));
}
const F1 = /* @__PURE__ */ T.forwardRef(k1);
function I1({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M7.628 1.349a.75.75 0 0 1 .744 0l1.247.712a.75.75 0 1 1-.744 1.303L8 2.864l-.875.5a.75.75 0 0 1-.744-1.303l1.247-.712ZM4.65 3.914a.75.75 0 0 1-.279 1.023L4.262 5l.11.063a.75.75 0 0 1-.744 1.302l-.13-.073A.75.75 0 0 1 2 6.25V5a.75.75 0 0 1 .378-.651l1.25-.714a.75.75 0 0 1 1.023.279Zm6.698 0a.75.75 0 0 1 1.023-.28l1.25.715A.75.75 0 0 1 14 5v1.25a.75.75 0 0 1-1.499.042l-.129.073a.75.75 0 0 1-.744-1.302l.11-.063-.11-.063a.75.75 0 0 1-.28-1.023ZM6.102 6.915a.75.75 0 0 1 1.023-.279l.875.5.875-.5a.75.75 0 0 1 .744 1.303l-.869.496v.815a.75.75 0 0 1-1.5 0v-.815l-.869-.496a.75.75 0 0 1-.28-1.024ZM2.75 9a.75.75 0 0 1 .75.75v.815l.872.498a.75.75 0 0 1-.744 1.303l-1.25-.715A.75.75 0 0 1 2 11V9.75A.75.75 0 0 1 2.75 9Zm10.5 0a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.378.651l-1.25.715a.75.75 0 0 1-.744-1.303l.872-.498V9.75a.75.75 0 0 1 .75-.75Zm-4.501 3.708.126-.072a.75.75 0 0 1 .744 1.303l-1.247.712a.75.75 0 0 1-.744 0L6.38 13.94a.75.75 0 0 1 .744-1.303l.126.072a.75.75 0 0 1 1.498 0Z",
    clipRule: "evenodd"
  }));
}
const P1 = /* @__PURE__ */ T.forwardRef(I1);
function lh({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Xr = /* @__PURE__ */ T.forwardRef(lh);
function th({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
    clipRule: "evenodd"
  }));
}
const eh = /* @__PURE__ */ T.forwardRef(th);
function ah({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z",
    clipRule: "evenodd"
  }));
}
const nh = /* @__PURE__ */ T.forwardRef(ah);
function uh({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    fillRule: "evenodd",
    d: "M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ T.createElement("path", {
    d: "M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z"
  }));
}
const ih = /* @__PURE__ */ T.forwardRef(uh);
function ch({
  title: s,
  titleId: m,
  ...b
}, d) {
  return /* @__PURE__ */ T.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": m
  }, b), s ? /* @__PURE__ */ T.createElement("title", {
    id: m
  }, s) : null, /* @__PURE__ */ T.createElement("path", {
    d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
  }));
}
const jf = /* @__PURE__ */ T.forwardRef(ch);
function Qr(s) {
  var m, b, d = "";
  if (typeof s == "string" || typeof s == "number") d += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var D = s.length;
    for (m = 0; m < D; m++) s[m] && (b = Qr(s[m])) && (d && (d += " "), d += b);
  } else for (b in s) s[b] && (d && (d += " "), d += b);
  return d;
}
function Ql() {
  for (var s, m, b = 0, d = "", D = arguments.length; b < D; b++) (s = arguments[b]) && (m = Qr(s)) && (d && (d += " "), d += m);
  return d;
}
async function Br(s, m) {
  const b = await fetch(s, {
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    signal: m
  });
  if (!b.ok) {
    const d = new Error(
      b.status === 404 ? "This trace could not be found." : "AI Observatory could not load this data."
    );
    throw d.status = b.status, d;
  }
  return b.json();
}
function fh(s) {
  const m = new URLSearchParams();
  return Object.entries(s).forEach(([b, d]) => {
    d !== "" && d !== null && d !== void 0 && m.set(b, d);
  }), m.toString();
}
function Yr(s) {
  return s ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeStyle: "medium"
  }).format(new Date(s)) : "—";
}
function wr(s) {
  if (!s) return "—";
  const m = Math.round((new Date(s).getTime() - Date.now()) / 1e3), b = new Intl.RelativeTimeFormat(void 0, {
    numeric: "auto"
  }), d = [
    ["year", 31536e3],
    ["month", 2592e3],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60]
  ];
  for (const [D, R] of d)
    if (Math.abs(m) >= R)
      return b.format(Math.round(m / R), D);
  return b.format(m, "second");
}
function Ve(s) {
  return s == null ? "—" : s < 1e3 ? `${s} ms` : s < 6e4 ? `${(s / 1e3).toFixed(s < 1e4 ? 2 : 1)} s` : `${(s / 6e4).toFixed(1)} min`;
}
function we(s) {
  return s == null ? "—" : new Intl.NumberFormat(void 0, {
    notation: s >= 1e4 ? "compact" : "standard",
    maximumFractionDigits: 1
  }).format(s);
}
function Nf(s, m) {
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
  return s.flatMap((b) => [
    { ...b, depth: m },
    ...Lr(b.children ?? [], m + 1)
  ]);
}
function sh({ value: s }) {
  if (s === "[REDACTED]")
    return /* @__PURE__ */ f.jsx("div", { className: "inline-flex rounded bg-amber-100 px-1.5 py-0.5 font-mono text-base/6 text-amber-800 sm:text-sm/5", children: "[REDACTED]" });
  const m = typeof s == "string" ? "text-emerald-700" : typeof s == "number" ? "text-sky-700" : typeof s == "boolean" ? "text-violet-700" : "text-zinc-500", b = typeof s == "string" ? `"${s}"` : String(s);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `font-mono text-base/7 break-words sm:text-sm/6 ${m}`,
      children: b
    }
  );
}
function Kr({ label: s, value: m, depth: b = 0 }) {
  if (!(m !== null && typeof m == "object"))
    return /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-[minmax(5rem,auto)_1fr] gap-3 py-1", children: [
      s !== null ? /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: s }) : null,
      /* @__PURE__ */ f.jsx(sh, { value: m })
    ] });
  const D = Object.entries(m), R = Array.isArray(m) ? "array" : "object";
  return /* @__PURE__ */ f.jsxs("details", { className: "group/json", open: b < 1, children: [
    /* @__PURE__ */ f.jsxs("summary", { className: "flex cursor-pointer list-none items-center gap-1 rounded py-1 observatory-focus", children: [
      /* @__PURE__ */ f.jsx(Sf, { className: "size-4 h-lh shrink-0 fill-zinc-400 group-open/json:rotate-90" }),
      s !== null ? /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 font-medium text-zinc-700 sm:text-sm/6", children: s }) : null,
      /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 text-zinc-400 sm:text-sm/6", children: R === "array" ? `[${D.length}]` : `{${D.length}}` })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "border-l border-zinc-950/10 pl-4", children: D.map(([Z, K]) => /* @__PURE__ */ f.jsx(
      Kr,
      {
        label: Z,
        value: K,
        depth: b + 1
      },
      Z
    )) })
  ] });
}
function Ra({ className: s, value: m, label: b, plain: d = !1 }) {
  const [D, R] = T.useState(!1), Z = m && typeof m == "object" && m._truncated === !0;
  T.useEffect(() => {
    if (!D) return;
    const A = window.setTimeout(() => R(!1), 1500);
    return () => window.clearTimeout(A);
  }, [D]);
  async function K() {
    await navigator.clipboard.writeText(JSON.stringify(m, null, 2)), R(!0);
  }
  return /* @__PURE__ */ f.jsxs(
    "section",
    {
      className: Ql(
        !d && "border-t border-zinc-950/10 pt-5",
        s
      ),
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ f.jsx("h3", { className: "text-base font-medium text-zinc-950", children: b }),
          /* @__PURE__ */ f.jsxs(
            "button",
            {
              type: "button",
              onClick: K,
              className: "relative inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
              children: [
                /* @__PURE__ */ f.jsx(
                  "span",
                  {
                    className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                    "aria-hidden": "true"
                  }
                ),
                D ? /* @__PURE__ */ f.jsx(X1, { className: "size-4 h-lh shrink-0 fill-emerald-600" }) : /* @__PURE__ */ f.jsx(W1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                D ? "Copied" : "Copy"
              ]
            }
          )
        ] }),
        Z ? /* @__PURE__ */ f.jsxs("div", { className: "mt-3 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-base/7 text-amber-800 sm:text-sm/6", children: [
          /* @__PURE__ */ f.jsx(Xr, { className: "size-4 h-lh shrink-0 fill-amber-600" }),
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
const Zr = {
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
function Ef({ className: s, compact: m = !1, status: b }) {
  return m ? /* @__PURE__ */ f.jsx(
    "div",
    {
      className: Ql("flex h-6 shrink-0 items-center", s),
      title: b ?? "unknown",
      "aria-label": `Status: ${b ?? "unknown"}`,
      children: /* @__PURE__ */ f.jsx(
        "span",
        {
          className: `size-2 shrink-0 rounded-full ${Ju[b] ?? Ju.cancelled}`
        }
      )
    }
  ) : /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: Ql(
        "inline-flex items-center gap-1.5 rounded-full py-1 pr-2 pl-1 text-base/6 font-medium ring-1 ring-inset sm:text-sm/5",
        Zr[b] ?? Zr.cancelled,
        s
      ),
      children: [
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: `size-1.5 shrink-0 rounded-full ${Ju[b] ?? Ju.cancelled}`
          }
        ),
        b ?? "unknown"
      ]
    }
  );
}
const dh = {
  agent: nh,
  model: F1,
  tool: ih,
  mcp: P1,
  internal: Z1
};
function Oa({ label: s, value: m }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @md:border-t-0 @md:pt-0", children: [
    /* @__PURE__ */ f.jsx("dt", { className: "truncate text-sm/5 font-medium text-zinc-500", children: s }),
    /* @__PURE__ */ f.jsx("dd", { className: "text-base font-medium text-zinc-950 tabular-nums", children: m })
  ] });
}
function rh(s, m) {
  const b = new Date(m.started_at).getTime(), d = new Date(s.started_at).getTime(), D = Math.max(Number(m.duration_ms) || 1, 1), R = Math.max(Number(s.duration_ms) || 0, 1);
  if (!Number.isFinite(b) || !Number.isFinite(d))
    return { left: 0, width: 3 };
  const Z = Math.max(
    0,
    Math.min(97, (d - b) / D * 100)
  ), K = Math.max(
    3,
    Math.min(100 - Z, R / D * 100)
  );
  return { left: Z, width: K };
}
function oh({ span: s, onSelect: m, trace: b }) {
  const d = dh[s.type] ?? zf, D = s.status === "failed", R = rh(s, b);
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      type: "button",
      onClick: () => m(s),
      style: {
        "--span-offset": `${s.depth * 1.25}rem`,
        "--span-left": `${R.left}%`,
        "--span-width": `${R.width}%`
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
            className: `size-4 h-lh shrink-0 ${D ? "fill-red-500" : "fill-zinc-400"}`
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
            /* @__PURE__ */ f.jsx("div", { className: "tabular-nums", children: Ve(s.duration_ms) })
          ] }),
          s.error?.message ? /* @__PURE__ */ f.jsx("div", { className: "truncate text-base/7 text-red-600 sm:text-sm/6", children: s.error.message }) : null
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "relative hidden h-7 overflow-hidden rounded-md bg-zinc-100 @3xl:block", children: /* @__PURE__ */ f.jsx(
          "span",
          {
            className: Ql(
              "absolute top-2 h-3 min-w-1 rounded-sm",
              D ? "bg-red-500" : s.type === "model" ? "bg-amber-500" : s.type === "tool" || s.type === "mcp" ? "bg-sky-500" : "bg-zinc-400",
              "left-(--span-left) w-(--span-width)"
            )
          }
        ) }),
        /* @__PURE__ */ f.jsx(Sf, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-500" })
      ]
    }
  );
}
function mh({ span: s, onClose: m }) {
  const [b, d] = T.useState("request");
  return T.useEffect(() => {
    const D = [
      ["request", s?.request],
      ["response", s?.response],
      ["metadata", s?.metadata]
    ].find(([, R]) => R != null);
    d(D?.[0] ?? "request");
  }, [s]), T.useEffect(() => {
    function D(R) {
      R.key === "Escape" && m();
    }
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
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
                /* @__PURE__ */ f.jsx(Ef, { status: s.status }),
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
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Ve(s.duration_ms) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Tokens" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: we(s.total_tokens) })
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
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Nf(s.estimated_cost, s.currency) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Time to first token" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Ve(
                  s.metadata?.time_to_first_token_ms
                ) })
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "grid gap-5 pt-6", children: [
              s.error?.message ? /* @__PURE__ */ f.jsx("section", { className: "rounded-lg bg-red-50 p-4", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ f.jsx(Xr, { className: "size-4 h-lh shrink-0 fill-red-500" }),
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
                  ([D, R, Z]) => Z != null ? /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => d(D),
                      "aria-selected": b === D,
                      className: Ql(
                        "relative border-b-2 py-2 text-sm/5 font-medium observatory-focus",
                        b === D ? "border-amber-500 text-zinc-950" : "border-transparent text-zinc-500 hover:text-zinc-900"
                      ),
                      children: [
                        /* @__PURE__ */ f.jsx(
                          "span",
                          {
                            className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                            "aria-hidden": "true"
                          }
                        ),
                        R
                      ]
                    },
                    D
                  ) : null
                ) }) }),
                b === "request" && s.request !== null ? /* @__PURE__ */ f.jsx(
                  Ra,
                  {
                    className: "pt-4",
                    label: "Request payload",
                    plain: !0,
                    value: s.request
                  }
                ) : null,
                b === "response" && s.response !== null ? /* @__PURE__ */ f.jsx(
                  Ra,
                  {
                    className: "pt-4",
                    label: "Response payload",
                    plain: !0,
                    value: s.response
                  }
                ) : null,
                b === "metadata" && s.metadata !== null ? /* @__PURE__ */ f.jsx(
                  Ra,
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
function hh({ className: s, loading: m, onBack: b, trace: d }) {
  const [D, R] = T.useState(null), Z = T.useMemo(() => Lr(d?.spans ?? []), [d]);
  return T.useEffect(() => R(null), [d?.trace_id]), m || !d ? /* @__PURE__ */ f.jsxs(
    "main",
    {
      className: Ql(
        "isolate mx-auto grid max-w-screen-2xl gap-6 px-4 py-7 sm:px-6 lg:px-8 lg:py-10",
        s
      ),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "h-8 w-56 animate-pulse rounded bg-zinc-100" }),
        /* @__PURE__ */ f.jsx("div", { className: "h-32 animate-pulse rounded bg-zinc-100" }),
        /* @__PURE__ */ f.jsx("div", { className: "h-96 animate-pulse rounded bg-zinc-100" })
      ]
    }
  ) : /* @__PURE__ */ f.jsxs("main", { className: Ql("isolate min-w-0", s), children: [
    /* @__PURE__ */ f.jsxs("div", { className: "mx-auto grid max-w-screen-2xl gap-7 px-4 py-7 sm:px-6 lg:px-8 lg:py-10", children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: b,
          className: "relative inline-flex w-fit items-center gap-1.5 rounded-md py-1 pr-2 pl-1 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ f.jsx(D1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
            "All traces"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs("header", { className: "grid gap-4 border-b border-zinc-950/10 pb-6", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ f.jsx(Ef, { status: d.status }),
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
      /* @__PURE__ */ f.jsx("div", { className: "@container", children: /* @__PURE__ */ f.jsxs("dl", { className: "grid gap-4 border-b border-zinc-950/10 pb-6 @md:grid-cols-3 @md:gap-6 @4xl:grid-cols-6", children: [
        /* @__PURE__ */ f.jsx(Oa, { label: "Status", value: d.status }),
        /* @__PURE__ */ f.jsx(
          Oa,
          {
            label: "Duration",
            value: Ve(d.duration_ms)
          }
        ),
        /* @__PURE__ */ f.jsx(
          Oa,
          {
            label: "Total tokens",
            value: we(d.total_tokens)
          }
        ),
        /* @__PURE__ */ f.jsx(
          Oa,
          {
            label: "Estimated cost",
            value: Nf(
              d.estimated_cost,
              d.currency
            )
          }
        ),
        /* @__PURE__ */ f.jsx(
          Oa,
          {
            label: "Spans / tools",
            value: `${d.span_count} / ${d.tool_count}`
          }
        ),
        /* @__PURE__ */ f.jsx(
          Oa,
          {
            label: "Started",
            value: Yr(d.started_at)
          }
        )
      ] }) }),
      /* @__PURE__ */ f.jsxs("div", { className: "grid gap-7 lg:grid-cols-[minmax(0,5fr)_minmax(17rem,2fr)]", children: [
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
                Z.map((K) => /* @__PURE__ */ f.jsx(
                  oh,
                  {
                    span: K,
                    trace: d,
                    onSelect: R
                  },
                  K.span_id
                ))
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "aside",
          {
            className: "min-w-0 lg:border-l lg:border-zinc-950/10 lg:pl-7",
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
                    we(d.input_tokens),
                    " /",
                    " ",
                    we(d.output_tokens)
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
              d.tags ? /* @__PURE__ */ f.jsx("div", { className: "pt-5", children: /* @__PURE__ */ f.jsx(Ra, { label: "Tags", value: d.tags }) }) : null,
              d.metadata ? /* @__PURE__ */ f.jsx("div", { className: "pt-5", children: /* @__PURE__ */ f.jsx(
                Ra,
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
                /* @__PURE__ */ f.jsx("div", { className: "grid gap-3 pt-4", children: d.events.map((K) => /* @__PURE__ */ f.jsxs(
                  "details",
                  {
                    className: "rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-950/5",
                    children: [
                      /* @__PURE__ */ f.jsx("summary", { className: "cursor-pointer list-none", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: K.event_type }),
                        /* @__PURE__ */ f.jsx("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Yr(
                          K.occurred_at
                        ) })
                      ] }) }),
                      K.payload ? /* @__PURE__ */ f.jsx(
                        Ra,
                        {
                          className: "mt-3",
                          label: "Event payload",
                          value: K.payload
                        }
                      ) : null
                    ]
                  },
                  K.id
                )) })
              ] }) : null
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(
      mh,
      {
        span: D,
        onClose: () => R(null)
      }
    )
  ] });
}
function Da({
  className: s,
  icon: m,
  label: b,
  name: d,
  type: D = "text",
  ...R
}) {
  const Z = /* @__PURE__ */ f.jsx(
    "input",
    {
      id: d,
      type: D,
      name: d,
      className: Ql(
        "w-full observatory-control py-2.5 pr-3 text-base/6 text-zinc-900 placeholder:text-zinc-400 max-sm:text-base/6 sm:py-1.5 sm:text-sm/5",
        m ? "pl-9" : "pl-3"
      ),
      ...R
    }
  );
  return /* @__PURE__ */ f.jsxs("label", { htmlFor: d, className: Ql("grid gap-1.5", s), children: [
    /* @__PURE__ */ f.jsx("div", { className: "text-base/6 font-medium text-zinc-700 sm:text-sm/5", children: b }),
    m ? /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ f.jsx(m, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 fill-zinc-400" }),
      Z
    ] }) : Z
  ] });
}
function ze({ className: s, label: m, name: b, onChange: d, options: D, value: R }) {
  return /* @__PURE__ */ f.jsxs("label", { htmlFor: b, className: Ql("grid gap-1.5", s), children: [
    /* @__PURE__ */ f.jsx("div", { className: "text-base/6 font-medium text-zinc-700 sm:text-sm/5", children: m }),
    /* @__PURE__ */ f.jsxs("div", { className: "inline-grid grid-cols-[1fr_--spacing(8)]", children: [
      /* @__PURE__ */ f.jsxs(
        "select",
        {
          id: b,
          name: b,
          value: R,
          onChange: d,
          className: "col-span-full row-start-1 appearance-none observatory-control py-2.5 pr-8 pl-3 text-base/6 text-zinc-900 sm:py-1.5 sm:text-sm/5",
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "", children: "All" }),
            D.map((Z) => /* @__PURE__ */ f.jsx(
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
      /* @__PURE__ */ f.jsx(w1, { className: "pointer-events-none col-start-2 row-start-1 size-4 place-self-center fill-zinc-400" })
    ] })
  ] });
}
const vh = {
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
function yh({ className: s, filters: m, options: b, onChange: d, onReset: D }) {
  const [R, Z] = T.useState(!1), K = Object.entries(m).filter(
    ([z, J]) => !["page", "per_page", "search"].includes(z) && J !== ""
  );
  function A(z) {
    d(z.target.name, z.target.value);
  }
  return /* @__PURE__ */ f.jsxs(
    "section",
    {
      className: Ql(
        "grid gap-3 border-y border-zinc-950/10 py-4",
        s
      ),
      "aria-label": "Trace search and filters",
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-end", children: [
          /* @__PURE__ */ f.jsx(
            Da,
            {
              className: "min-w-0 grow",
              icon: eh,
              type: "search",
              name: "search",
              label: "Search",
              value: m.search,
              onChange: A,
              placeholder: "Prompt, response, tool, error, or trace ID"
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { className: "flex shrink-0 gap-2", children: [
            /* @__PURE__ */ f.jsxs(
              "button",
              {
                type: "button",
                onClick: () => Z((z) => !z),
                className: "relative inline-flex grow items-center justify-center gap-2 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-700 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:py-1.5 lg:grow-0",
                "aria-controls": "trace-filters",
                "aria-expanded": R,
                children: [
                  /* @__PURE__ */ f.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ f.jsx(M1, { className: "size-4 h-lh shrink-0 fill-zinc-500" }),
                  R ? "Hide filters" : "Filters",
                  K.length > 0 ? /* @__PURE__ */ f.jsx("span", { className: "rounded-full bg-amber-100 px-1.5 text-amber-900 tabular-nums", children: K.length }) : null
                ]
              }
            ),
            K.length > 0 || m.search ? /* @__PURE__ */ f.jsxs(
              "button",
              {
                type: "button",
                onClick: D,
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
        K.length > 0 && !R ? /* @__PURE__ */ f.jsx("ul", { className: "flex flex-wrap gap-2", role: "list", children: K.map(([z, J]) => /* @__PURE__ */ f.jsxs(
          "li",
          {
            className: "rounded-md bg-zinc-100 px-2 py-1 text-sm/5 text-zinc-600",
            children: [
              /* @__PURE__ */ f.jsxs("span", { className: "font-medium text-zinc-900", children: [
                vh[z] ?? z,
                ":"
              ] }),
              " ",
              String(J)
            ]
          },
          z
        )) }) : null,
        R ? /* @__PURE__ */ f.jsx(
          "div",
          {
            id: "trace-filters",
            className: "@container rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-950/5 ring-inset",
            children: /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-1 gap-4 @md:grid-cols-2 @4xl:grid-cols-4", children: [
              /* @__PURE__ */ f.jsx(
                ze,
                {
                  name: "status",
                  label: "Status",
                  value: m.status,
                  options: b.statuses ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                ze,
                {
                  name: "provider",
                  label: "Provider",
                  value: m.provider,
                  options: b.providers ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                ze,
                {
                  name: "model",
                  label: "Model",
                  value: m.model,
                  options: b.models ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                ze,
                {
                  name: "agent_class",
                  label: "Agent",
                  value: m.agent_class,
                  options: b.agents ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                ze,
                {
                  name: "span_type",
                  label: "Span type",
                  value: m.span_type,
                  options: b.span_types ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                ze,
                {
                  name: "feature",
                  label: "Feature",
                  value: m.feature,
                  options: b.features ?? [],
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                ze,
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
                ze,
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
                Da,
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
                Da,
                {
                  type: "date",
                  name: "started_after",
                  label: "Started after",
                  value: m.started_after,
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Da,
                {
                  type: "date",
                  name: "started_before",
                  label: "Started before",
                  value: m.started_before,
                  onChange: A
                }
              ),
              /* @__PURE__ */ f.jsx(
                Da,
                {
                  name: "user",
                  label: "User ID",
                  value: m.user,
                  onChange: A,
                  placeholder: "Any user"
                }
              ),
              /* @__PURE__ */ f.jsx(
                Da,
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
function gh(s, m) {
  const b = Math.max(1, Math.min(s - 2, m - 4)), d = Math.min(m, b + 4);
  return Array.from(
    { length: Math.max(0, d - b + 1) },
    (D, R) => b + R
  );
}
function bh({ className: s, meta: m, onPage: b }) {
  return !m || m.last_page <= 1 ? null : /* @__PURE__ */ f.jsxs(
    "nav",
    {
      className: Ql(
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
              onClick: () => b(m.current_page - 1),
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
                /* @__PURE__ */ f.jsx(L1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                "Previous"
              ]
            }
          ),
          /* @__PURE__ */ f.jsx("div", { className: "flex max-sm:hidden", children: gh(m.current_page, m.last_page).map((d) => /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              onClick: () => b(d),
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
              onClick: () => b(m.current_page + 1),
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
                /* @__PURE__ */ f.jsx(Sf, { className: "size-4 h-lh shrink-0 fill-zinc-400" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function xh({ filtered: s }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "flex min-h-80 flex-col items-center justify-center gap-3 py-16 text-center", children: [
    /* @__PURE__ */ f.jsx(zf, { className: "size-4 shrink-0 fill-zinc-400" }),
    /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
      /* @__PURE__ */ f.jsx("h2", { className: "text-base font-medium text-zinc-950", children: s ? "No matching traces" : "No traces yet" }),
      /* @__PURE__ */ f.jsx("p", { className: "max-w-[52ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: s ? "Clear a filter or try a broader search." : "Run a Laravel AI agent. Its complete execution will appear here automatically." })
    ] })
  ] });
}
function ph() {
  return Array.from({ length: 6 }, (s, m) => /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "grid animate-pulse gap-2 border-b border-zinc-950/5 py-5",
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "h-4 w-2/5 rounded bg-zinc-100" }),
        /* @__PURE__ */ f.jsx("div", { className: "h-3 w-3/5 rounded bg-zinc-100" })
      ]
    },
    m
  ));
}
function $u({ label: s, value: m, tone: b }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @md:border-t-0 @md:pt-0", children: [
    /* @__PURE__ */ f.jsx("dt", { className: "truncate text-base/6 font-medium text-zinc-500 sm:text-sm/5", children: s }),
    /* @__PURE__ */ f.jsx(
      "dd",
      {
        className: Ql(
          "text-2xl font-semibold tracking-tight text-zinc-950 tabular-nums sm:text-xl",
          b
        ),
        children: m
      }
    )
  ] });
}
function Jr({ trace: s, onNavigate: m }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
    /* @__PURE__ */ f.jsx(Ef, { status: s.status, compact: !0 }),
    /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-1", children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: () => m(s.trace_id),
          className: "group relative min-w-0 rounded text-left observatory-focus",
          children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 items-center gap-1.5", children: [
              /* @__PURE__ */ f.jsx("div", { className: "truncate text-base font-medium text-zinc-950 sm:text-sm/5", children: s.name }),
              /* @__PURE__ */ f.jsx(C1, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-600" })
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
      /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 flex-wrap gap-x-2 gap-y-0.5 text-base/7 text-zinc-500 sm:text-sm/6", children: [
        /* @__PURE__ */ f.jsx("span", { className: "truncate", children: Vr(s.agent_class) }),
        s.feature ? /* @__PURE__ */ f.jsxs("span", { children: [
          "· ",
          s.feature
        ] }) : null,
        s.tool_count > 0 ? /* @__PURE__ */ f.jsxs("span", { className: "tabular-nums", children: [
          "· ",
          s.tool_count,
          " ",
          s.tool_count === 1 ? "tool" : "tools"
        ] }) : null
      ] })
    ] })
  ] });
}
function Sh({ trace: s, onNavigate: m }) {
  return /* @__PURE__ */ f.jsxs("article", { className: "grid gap-4 border-b border-zinc-950/10 py-5 lg:hidden", children: [
    /* @__PURE__ */ f.jsx(Jr, { trace: s, onNavigate: m }),
    /* @__PURE__ */ f.jsxs("dl", { className: "grid grid-cols-2 gap-x-5 gap-y-3", children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Model" }),
        /* @__PURE__ */ f.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500", children: s.model ?? "—" })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Provider" }),
        /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500", children: s.provider ?? "—" })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Usage" }),
        /* @__PURE__ */ f.jsxs("dd", { className: "text-base/7 text-zinc-500 tabular-nums", children: [
          we(s.total_tokens),
          " tokens"
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Duration" }),
        /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums", children: Ve(s.duration_ms) })
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
function zh({
  className: s,
  filters: m,
  loading: b,
  meta: d,
  onFilter: D,
  onNavigate: R,
  onPage: Z,
  onRefresh: K,
  onReset: A,
  traces: z
}) {
  const J = Object.entries(m).some(
    ([$, yl]) => !["page", "per_page"].includes($) && yl !== ""
  ), B = z.filter(($) => $.status === "failed").length, nl = z.map(($) => Number($.total_tokens)).filter(
    ($, yl) => z[yl].total_tokens !== null && z[yl].total_tokens !== void 0 && Number.isFinite($)
  ), Ul = nl.length > 0 ? nl.reduce(($, yl) => $ + yl, 0) : null, pl = z.map(($) => Number($.duration_ms)).filter(Number.isFinite), _l = pl.length > 0 ? pl.reduce(($, yl) => $ + yl, 0) / pl.length : null;
  return /* @__PURE__ */ f.jsx("main", { className: Ql("isolate min-w-0", s), children: /* @__PURE__ */ f.jsxs("div", { className: "mx-auto grid max-w-screen-2xl gap-7 px-4 py-7 sm:px-6 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
        /* @__PURE__ */ f.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-balance text-zinc-950", children: "Traces" }),
        /* @__PURE__ */ f.jsx("p", { className: "max-w-[62ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "Follow complete AI runs from agent prompt to model response and every tool call between them." })
      ] }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: K,
          className: "relative inline-flex w-fit items-center gap-1.5 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:py-1.5",
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ f.jsx(
              U1,
              {
                className: Ql(
                  "size-4 h-lh shrink-0 fill-zinc-400",
                  b && "animate-spin"
                )
              }
            ),
            "Refresh"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "@container", children: /* @__PURE__ */ f.jsxs("dl", { className: "grid gap-4 border-y border-zinc-950/10 py-5 @md:grid-cols-4 @md:gap-0 @md:divide-x @md:divide-zinc-950/10", children: [
      /* @__PURE__ */ f.jsx("div", { className: "@md:pr-5", children: /* @__PURE__ */ f.jsx(
        $u,
        {
          label: "Matching traces",
          value: d ? d.total.toLocaleString() : "Loading"
        }
      ) }),
      /* @__PURE__ */ f.jsx("div", { className: "@md:px-5", children: /* @__PURE__ */ f.jsx(
        $u,
        {
          label: "Failures on page",
          value: B.toLocaleString(),
          tone: B > 0 ? "text-red-600" : void 0
        }
      ) }),
      /* @__PURE__ */ f.jsx("div", { className: "@md:px-5", children: /* @__PURE__ */ f.jsx(
        $u,
        {
          label: "Tokens on page",
          value: we(Ul)
        }
      ) }),
      /* @__PURE__ */ f.jsx("div", { className: "@md:pl-5", children: /* @__PURE__ */ f.jsx(
        $u,
        {
          label: "Average latency",
          value: Ve(_l)
        }
      ) })
    ] }) }),
    /* @__PURE__ */ f.jsx(
      yh,
      {
        filters: m,
        options: d?.filter_options ?? {},
        onChange: D,
        onReset: A
      }
    ),
    /* @__PURE__ */ f.jsxs("section", { "aria-labelledby": "trace-results", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex items-end justify-between gap-4 pb-3", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "grid gap-0.5", children: [
          /* @__PURE__ */ f.jsx(
            "h2",
            {
              id: "trace-results",
              className: "text-base font-medium text-zinc-950",
              children: "Recent operations"
            }
          ),
          /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: "Newest first." })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: d ? `${d.total.toLocaleString()} results` : "Loading" })
      ] }),
      b && z.length === 0 ? /* @__PURE__ */ f.jsx(ph, {}) : null,
      b ? null : z.map(($) => /* @__PURE__ */ f.jsx(
        Sh,
        {
          trace: $,
          onNavigate: R
        },
        $.trace_id
      )),
      /* @__PURE__ */ f.jsx("div", { className: "hidden overflow-x-auto whitespace-nowrap lg:block", children: /* @__PURE__ */ f.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { className: "border-b border-zinc-950/10", children: [
          /* @__PURE__ */ f.jsx("th", { className: "py-3 pr-5 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Operation" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-5 py-3 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Provider / model" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-5 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Usage" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-5 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Duration" }),
          /* @__PURE__ */ f.jsx("th", { className: "py-3 pl-5 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Started" })
        ] }) }),
        /* @__PURE__ */ f.jsx("tbody", { children: !b && z.map(($) => /* @__PURE__ */ f.jsxs(
          "tr",
          {
            className: "border-b border-zinc-950/5",
            children: [
              /* @__PURE__ */ f.jsx("td", { className: "py-4 pr-5 align-top", children: /* @__PURE__ */ f.jsx("div", { className: "min-w-80", children: /* @__PURE__ */ f.jsx(
                Jr,
                {
                  trace: $,
                  onNavigate: R
                }
              ) }) }),
              /* @__PURE__ */ f.jsx("td", { className: "px-5 py-4 align-top", children: /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
                /* @__PURE__ */ f.jsx("div", { className: "text-sm/5 text-zinc-900", children: $.provider ?? "—" }),
                /* @__PURE__ */ f.jsx("div", { className: "max-w-56 truncate font-mono text-sm/6 text-zinc-500", children: $.model ?? "—" })
              ] }) }),
              /* @__PURE__ */ f.jsx("td", { className: "px-5 py-4 text-right align-top", children: /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "text-sm/5 text-zinc-900 tabular-nums", children: [
                  we(
                    $.total_tokens
                  ),
                  " ",
                  "tokens"
                ] }),
                /* @__PURE__ */ f.jsx("div", { className: "text-sm/6 text-zinc-500 tabular-nums", children: Nf(
                  $.estimated_cost,
                  $.currency
                ) })
              ] }) }),
              /* @__PURE__ */ f.jsx("td", { className: "px-5 py-4 text-right align-top text-sm/5 text-zinc-900 tabular-nums", children: Ve(
                $.duration_ms
              ) }),
              /* @__PURE__ */ f.jsx("td", { className: "py-4 pl-5 text-right align-top", children: /* @__PURE__ */ f.jsx(
                "div",
                {
                  title: $.started_at,
                  className: "text-sm/5 text-zinc-700 tabular-nums",
                  children: wr(
                    $.started_at
                  )
                }
              ) })
            ]
          },
          $.trace_id
        )) })
      ] }) }),
      !b && z.length === 0 ? /* @__PURE__ */ f.jsx(xh, { filtered: J }) : null,
      /* @__PURE__ */ f.jsx(bh, { meta: d, onPage: Z })
    ] })
  ] }) });
}
const Gr = {
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
function jh({ basePath: s, onNavigate: m }) {
  const [b, d] = T.useState(!1);
  function D(R) {
    R.preventDefault(), d(!1), m(null);
  }
  return /* @__PURE__ */ f.jsxs("header", { className: "sticky top-0 z-40 border-b border-zinc-950/10 bg-white/95 backdrop-blur", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "mx-auto flex h-14 max-w-screen-2xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ f.jsxs(
        "a",
        {
          href: "/",
          "aria-label": "Homepage",
          className: "flex min-w-0 items-center gap-2 rounded observatory-focus",
          children: [
            /* @__PURE__ */ f.jsx(zf, { className: "size-4 shrink-0 fill-amber-500" }),
            /* @__PURE__ */ f.jsx("div", { className: "truncate text-base font-semibold tracking-tight text-zinc-950", children: "AI Observatory" })
          ]
        }
      ),
      /* @__PURE__ */ f.jsx(
        "nav",
        {
          className: "flex items-center gap-1 max-lg:hidden",
          "aria-label": "Main navigation",
          children: /* @__PURE__ */ f.jsx(
            "a",
            {
              href: `${s}/traces`,
              onClick: D,
              "aria-current": "page",
              className: "rounded-md bg-zinc-100 px-3 py-1.5 observatory-focus",
              children: /* @__PURE__ */ f.jsx("div", { className: "text-sm/5 font-medium text-zinc-950", children: "Traces" })
            }
          )
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: () => d((R) => !R),
          className: "relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100 lg:hidden",
          "aria-label": "Toggle navigation",
          "aria-expanded": b,
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            b ? /* @__PURE__ */ f.jsx(jf, { className: "size-4 shrink-0 fill-zinc-500" }) : /* @__PURE__ */ f.jsx(B1, { className: "size-4 shrink-0 fill-zinc-500" })
          ]
        }
      )
    ] }),
    b ? /* @__PURE__ */ f.jsx(
      "nav",
      {
        className: "border-t border-zinc-950/10 px-4 py-3 lg:hidden",
        "aria-label": "Mobile navigation",
        children: /* @__PURE__ */ f.jsx(
          "a",
          {
            href: `${s}/traces`,
            onClick: D,
            "aria-current": "page",
            className: "rounded-md bg-zinc-100 px-3 py-2 observatory-focus",
            children: /* @__PURE__ */ f.jsx("div", { className: "text-sm/5 font-medium text-zinc-950", children: "Traces" })
          }
        )
      }
    ) : null
  ] });
}
function Nh({ message: s, onRetry: m }) {
  return /* @__PURE__ */ f.jsx("div", { className: "mx-auto max-w-screen-2xl px-4 pt-6 sm:px-6 lg:px-8", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col justify-between gap-3 rounded-lg bg-red-50 p-4 sm:flex-row sm:items-center", children: [
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
function Eh({ className: s }) {
  const m = window.AiObservatory, [b, d] = T.useState(m.initialTraceId), [D, R] = T.useState(Gr), [Z, K] = T.useState([]), [A, z] = T.useState(null), [J, B] = T.useState(null), [nl, Ul] = T.useState(!0), [pl, _l] = T.useState(null), [$, yl] = T.useState(0), St = T.useMemo(() => fh(D), [D]), Tl = T.useCallback(
    (ll, X = !1) => {
      const sl = ll ? `${m.basePath}/traces/${ll}` : `${m.basePath}/traces`;
      window.history[X ? "replaceState" : "pushState"](
        { traceId: ll },
        "",
        sl
      ), d(ll), window.scrollTo({ top: 0 });
    },
    [m.basePath]
  );
  T.useEffect(() => {
    function ll() {
      const X = `${m.basePath}/traces/`, sl = window.location.pathname.startsWith(X) ? window.location.pathname.slice(X.length).split("/")[0] : null;
      d(sl || null);
    }
    return window.addEventListener("popstate", ll), () => window.removeEventListener("popstate", ll);
  }, [m.basePath]), T.useEffect(() => {
    const ll = new AbortController(), X = window.setTimeout(
      async () => {
        Ul(!0), _l(null);
        try {
          if (b) {
            const sl = await Br(
              `${m.apiBase}/${b}`,
              ll.signal
            );
            B(sl.data);
          } else {
            const sl = await Br(
              `${m.apiBase}?${St}`,
              ll.signal
            );
            K(sl.data), z(sl.meta);
          }
        } catch (sl) {
          sl.name !== "AbortError" && _l(sl.message);
        } finally {
          ll.signal.aborted || Ul(!1);
        }
      },
      b ? 0 : 250
    );
    return () => {
      window.clearTimeout(X), ll.abort();
    };
  }, [m.apiBase, St, $, b]);
  function Ll(ll, X) {
    R((sl) => ({ ...sl, [ll]: X, page: 1 }));
  }
  const dt = pl && !nl && (b ? !J : Z.length === 0);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: Ql(
        "isolate min-h-dvh bg-white font-sans text-zinc-950",
        s
      ),
      children: [
        /* @__PURE__ */ f.jsx(jh, { basePath: m.basePath, onNavigate: Tl }),
        pl ? /* @__PURE__ */ f.jsx(
          Nh,
          {
            message: pl,
            onRetry: () => yl((ll) => ll + 1)
          }
        ) : null,
        !dt && (b ? /* @__PURE__ */ f.jsx(
          hh,
          {
            loading: nl,
            trace: J,
            onBack: () => Tl(null)
          }
        ) : /* @__PURE__ */ f.jsx(
          zh,
          {
            filters: D,
            loading: nl,
            meta: A,
            traces: Z,
            onFilter: Ll,
            onNavigate: Tl,
            onPage: (ll) => R((X) => ({ ...X, page: ll })),
            onRefresh: () => yl((ll) => ll + 1),
            onReset: () => R(Gr)
          }
        ))
      ]
    }
  );
}
T1.createRoot(document.getElementById("ai-observatory")).render(
  /* @__PURE__ */ f.jsx(T.StrictMode, { children: /* @__PURE__ */ f.jsx(Eh, {}) })
);
