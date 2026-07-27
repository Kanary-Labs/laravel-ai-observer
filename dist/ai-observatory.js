var xs = { exports: {} }, Dn = {};
var wd;
function O1() {
  if (wd) return Dn;
  wd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function v(r, O, D) {
    var R = null;
    if (D !== void 0 && (R = "" + D), O.key !== void 0 && (R = "" + O.key), "key" in O) {
      D = {};
      for (var A in O)
        A !== "key" && (D[A] = O[A]);
    } else D = O;
    return O = D.ref, {
      $$typeof: f,
      type: r,
      key: R,
      ref: O !== void 0 ? O : null,
      props: D
    };
  }
  return Dn.Fragment = d, Dn.jsx = v, Dn.jsxs = v, Dn;
}
var Ud;
function R1() {
  return Ud || (Ud = 1, xs.exports = O1()), xs.exports;
}
var c = R1(), ps = { exports: {} }, J = {};
var Cd;
function D1() {
  if (Cd) return J;
  Cd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), Z = Symbol.iterator;
  function Sl(h) {
    return h === null || typeof h != "object" ? null : (h = Z && h[Z] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var V = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, pl = Object.assign, ge = {};
  function Vl(h, _, U) {
    this.props = h, this.context = _, this.refs = ge, this.updater = U || V;
  }
  Vl.prototype.isReactComponent = {}, Vl.prototype.setState = function(h, _) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, _, "setState");
  }, Vl.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function Ue() {
  }
  Ue.prototype = Vl.prototype;
  function Dl(h, _, U) {
    this.props = h, this.context = _, this.refs = ge, this.updater = U || V;
  }
  var Jl = Dl.prototype = new Ue();
  Jl.constructor = Dl, pl(Jl, Vl.prototype), Jl.isPureReactComponent = !0;
  var $l = Array.isArray;
  function Cl() {
  }
  var F = { H: null, A: null, T: null, S: null }, Xl = Object.prototype.hasOwnProperty;
  function kl(h, _, U) {
    var H = U.ref;
    return {
      $$typeof: f,
      type: h,
      key: _,
      ref: H !== void 0 ? H : null,
      props: U
    };
  }
  function Ce(h, _) {
    return kl(h.type, _, h.props);
  }
  function ne(h) {
    return typeof h == "object" && h !== null && h.$$typeof === f;
  }
  function Ql(h) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(U) {
      return _[U];
    });
  }
  var Ae = /\/+/g;
  function Me(h, _) {
    return typeof h == "object" && h !== null && h.key != null ? Ql("" + h.key) : _.toString(36);
  }
  function ue(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(Cl, Cl) : (h.status = "pending", h.then(
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
  function N(h, _, U, H, K) {
    var W = typeof h;
    (W === "undefined" || W === "boolean") && (h = null);
    var al = !1;
    if (h === null) al = !0;
    else
      switch (W) {
        case "bigint":
        case "string":
        case "number":
          al = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case f:
            case d:
              al = !0;
              break;
            case L:
              return al = h._init, N(
                al(h._payload),
                _,
                U,
                H,
                K
              );
          }
      }
    if (al)
      return K = K(h), al = H === "" ? "." + Me(h, 0) : H, $l(K) ? (U = "", al != null && (U = al.replace(Ae, "$&/") + "/"), N(K, _, U, "", function(ol) {
        return ol;
      })) : K != null && (ne(K) && (K = Ce(
        K,
        U + (K.key == null || h && h.key === K.key ? "" : ("" + K.key).replace(
          Ae,
          "$&/"
        ) + "/") + al
      )), _.push(K)), 1;
    al = 0;
    var Hl = H === "" ? "." : H + ":";
    if ($l(h))
      for (var C = 0; C < h.length; C++)
        H = h[C], W = Hl + Me(H, C), al += N(
          H,
          _,
          U,
          W,
          K
        );
    else if (C = Sl(h), typeof C == "function")
      for (h = C.call(h), C = 0; !(H = h.next()).done; )
        H = H.value, W = Hl + Me(H, C++), al += N(
          H,
          _,
          U,
          W,
          K
        );
    else if (W === "object") {
      if (typeof h.then == "function")
        return N(
          ue(h),
          _,
          U,
          H,
          K
        );
      throw _ = String(h), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return al;
  }
  function w(h, _, U) {
    if (h == null) return h;
    var H = [], K = 0;
    return N(h, H, "", "", function(W) {
      return _.call(U, W, K++);
    }), H;
  }
  function X(h) {
    if (h._status === -1) {
      var _ = h._result;
      _ = _(), _.then(
        function(U) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = U);
        },
        function(U) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = U);
        }
      ), h._status === -1 && (h._status = 0, h._result = _);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var cl = typeof reportError == "function" ? reportError : function(h) {
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
  }, sl = {
    map: w,
    forEach: function(h, _, U) {
      w(
        h,
        function() {
          _.apply(this, arguments);
        },
        U
      );
    },
    count: function(h) {
      var _ = 0;
      return w(h, function() {
        _++;
      }), _;
    },
    toArray: function(h) {
      return w(h, function(_) {
        return _;
      }) || [];
    },
    only: function(h) {
      if (!ne(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return J.Activity = B, J.Children = sl, J.Component = Vl, J.Fragment = v, J.Profiler = O, J.PureComponent = Dl, J.StrictMode = r, J.Suspense = M, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return F.H.useMemoCache(h);
    }
  }, J.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(h, _, U) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var H = pl({}, h.props), K = h.key;
    if (_ != null)
      for (W in _.key !== void 0 && (K = "" + _.key), _)
        !Xl.call(_, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && _.ref === void 0 || (H[W] = _[W]);
    var W = arguments.length - 2;
    if (W === 1) H.children = U;
    else if (1 < W) {
      for (var al = Array(W), Hl = 0; Hl < W; Hl++)
        al[Hl] = arguments[Hl + 2];
      H.children = al;
    }
    return kl(h.type, K, H);
  }, J.createContext = function(h) {
    return h = {
      $$typeof: R,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: D,
      _context: h
    }, h;
  }, J.createElement = function(h, _, U) {
    var H, K = {}, W = null;
    if (_ != null)
      for (H in _.key !== void 0 && (W = "" + _.key), _)
        Xl.call(_, H) && H !== "key" && H !== "__self" && H !== "__source" && (K[H] = _[H]);
    var al = arguments.length - 2;
    if (al === 1) K.children = U;
    else if (1 < al) {
      for (var Hl = Array(al), C = 0; C < al; C++)
        Hl[C] = arguments[C + 2];
      K.children = Hl;
    }
    if (h && h.defaultProps)
      for (H in al = h.defaultProps, al)
        K[H] === void 0 && (K[H] = al[H]);
    return kl(h, W, K);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(h) {
    return { $$typeof: A, render: h };
  }, J.isValidElement = ne, J.lazy = function(h) {
    return {
      $$typeof: L,
      _payload: { _status: -1, _result: h },
      _init: X
    };
  }, J.memo = function(h, _) {
    return {
      $$typeof: S,
      type: h,
      compare: _ === void 0 ? null : _
    };
  }, J.startTransition = function(h) {
    var _ = F.T, U = {};
    F.T = U;
    try {
      var H = h(), K = F.S;
      K !== null && K(U, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Cl, cl);
    } catch (W) {
      cl(W);
    } finally {
      _ !== null && U.types !== null && (_.types = U.types), F.T = _;
    }
  }, J.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, J.use = function(h) {
    return F.H.use(h);
  }, J.useActionState = function(h, _, U) {
    return F.H.useActionState(h, _, U);
  }, J.useCallback = function(h, _) {
    return F.H.useCallback(h, _);
  }, J.useContext = function(h) {
    return F.H.useContext(h);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(h, _) {
    return F.H.useDeferredValue(h, _);
  }, J.useEffect = function(h, _) {
    return F.H.useEffect(h, _);
  }, J.useEffectEvent = function(h) {
    return F.H.useEffectEvent(h);
  }, J.useId = function() {
    return F.H.useId();
  }, J.useImperativeHandle = function(h, _, U) {
    return F.H.useImperativeHandle(h, _, U);
  }, J.useInsertionEffect = function(h, _) {
    return F.H.useInsertionEffect(h, _);
  }, J.useLayoutEffect = function(h, _) {
    return F.H.useLayoutEffect(h, _);
  }, J.useMemo = function(h, _) {
    return F.H.useMemo(h, _);
  }, J.useOptimistic = function(h, _) {
    return F.H.useOptimistic(h, _);
  }, J.useReducer = function(h, _, U) {
    return F.H.useReducer(h, _, U);
  }, J.useRef = function(h) {
    return F.H.useRef(h);
  }, J.useState = function(h) {
    return F.H.useState(h);
  }, J.useSyncExternalStore = function(h, _, U) {
    return F.H.useSyncExternalStore(
      h,
      _,
      U
    );
  }, J.useTransition = function() {
    return F.H.useTransition();
  }, J.version = "19.2.8", J;
}
var Hd;
function Ts() {
  return Hd || (Hd = 1, ps.exports = D1()), ps.exports;
}
var z = Ts(), zs = { exports: {} }, wn = {}, Ss = { exports: {} }, js = {};
var qd;
function w1() {
  return qd || (qd = 1, (function(f) {
    function d(N, w) {
      var X = N.length;
      N.push(w);
      l: for (; 0 < X; ) {
        var cl = X - 1 >>> 1, sl = N[cl];
        if (0 < O(sl, w))
          N[cl] = w, N[X] = sl, X = cl;
        else break l;
      }
    }
    function v(N) {
      return N.length === 0 ? null : N[0];
    }
    function r(N) {
      if (N.length === 0) return null;
      var w = N[0], X = N.pop();
      if (X !== w) {
        N[0] = X;
        l: for (var cl = 0, sl = N.length, h = sl >>> 1; cl < h; ) {
          var _ = 2 * (cl + 1) - 1, U = N[_], H = _ + 1, K = N[H];
          if (0 > O(U, X))
            H < sl && 0 > O(K, U) ? (N[cl] = K, N[H] = X, cl = H) : (N[cl] = U, N[_] = X, cl = _);
          else if (H < sl && 0 > O(K, X))
            N[cl] = K, N[H] = X, cl = H;
          else break l;
        }
      }
      return w;
    }
    function O(N, w) {
      var X = N.sortIndex - w.sortIndex;
      return X !== 0 ? X : N.id - w.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      f.unstable_now = function() {
        return D.now();
      };
    } else {
      var R = Date, A = R.now();
      f.unstable_now = function() {
        return R.now() - A;
      };
    }
    var M = [], S = [], L = 1, B = null, Z = 3, Sl = !1, V = !1, pl = !1, ge = !1, Vl = typeof setTimeout == "function" ? setTimeout : null, Ue = typeof clearTimeout == "function" ? clearTimeout : null, Dl = typeof setImmediate < "u" ? setImmediate : null;
    function Jl(N) {
      for (var w = v(S); w !== null; ) {
        if (w.callback === null) r(S);
        else if (w.startTime <= N)
          r(S), w.sortIndex = w.expirationTime, d(M, w);
        else break;
        w = v(S);
      }
    }
    function $l(N) {
      if (pl = !1, Jl(N), !V)
        if (v(M) !== null)
          V = !0, Cl || (Cl = !0, Ql());
        else {
          var w = v(S);
          w !== null && ue($l, w.startTime - N);
        }
    }
    var Cl = !1, F = -1, Xl = 5, kl = -1;
    function Ce() {
      return ge ? !0 : !(f.unstable_now() - kl < Xl);
    }
    function ne() {
      if (ge = !1, Cl) {
        var N = f.unstable_now();
        kl = N;
        var w = !0;
        try {
          l: {
            V = !1, pl && (pl = !1, Ue(F), F = -1), Sl = !0;
            var X = Z;
            try {
              e: {
                for (Jl(N), B = v(M); B !== null && !(B.expirationTime > N && Ce()); ) {
                  var cl = B.callback;
                  if (typeof cl == "function") {
                    B.callback = null, Z = B.priorityLevel;
                    var sl = cl(
                      B.expirationTime <= N
                    );
                    if (N = f.unstable_now(), typeof sl == "function") {
                      B.callback = sl, Jl(N), w = !0;
                      break e;
                    }
                    B === v(M) && r(M), Jl(N);
                  } else r(M);
                  B = v(M);
                }
                if (B !== null) w = !0;
                else {
                  var h = v(S);
                  h !== null && ue(
                    $l,
                    h.startTime - N
                  ), w = !1;
                }
              }
              break l;
            } finally {
              B = null, Z = X, Sl = !1;
            }
            w = void 0;
          }
        } finally {
          w ? Ql() : Cl = !1;
        }
      }
    }
    var Ql;
    if (typeof Dl == "function")
      Ql = function() {
        Dl(ne);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), Me = Ae.port2;
      Ae.port1.onmessage = ne, Ql = function() {
        Me.postMessage(null);
      };
    } else
      Ql = function() {
        Vl(ne, 0);
      };
    function ue(N, w) {
      F = Vl(function() {
        N(f.unstable_now());
      }, w);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, f.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xl = 0 < N ? Math.floor(1e3 / N) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, f.unstable_next = function(N) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var w = 3;
          break;
        default:
          w = Z;
      }
      var X = Z;
      Z = w;
      try {
        return N();
      } finally {
        Z = X;
      }
    }, f.unstable_requestPaint = function() {
      ge = !0;
    }, f.unstable_runWithPriority = function(N, w) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var X = Z;
      Z = N;
      try {
        return w();
      } finally {
        Z = X;
      }
    }, f.unstable_scheduleCallback = function(N, w, X) {
      var cl = f.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? cl + X : cl) : X = cl, N) {
        case 1:
          var sl = -1;
          break;
        case 2:
          sl = 250;
          break;
        case 5:
          sl = 1073741823;
          break;
        case 4:
          sl = 1e4;
          break;
        default:
          sl = 5e3;
      }
      return sl = X + sl, N = {
        id: L++,
        callback: w,
        priorityLevel: N,
        startTime: X,
        expirationTime: sl,
        sortIndex: -1
      }, X > cl ? (N.sortIndex = X, d(S, N), v(M) === null && N === v(S) && (pl ? (Ue(F), F = -1) : pl = !0, ue($l, X - cl))) : (N.sortIndex = sl, d(M, N), V || Sl || (V = !0, Cl || (Cl = !0, Ql()))), N;
    }, f.unstable_shouldYield = Ce, f.unstable_wrapCallback = function(N) {
      var w = Z;
      return function() {
        var X = Z;
        Z = w;
        try {
          return N.apply(this, arguments);
        } finally {
          Z = X;
        }
      };
    };
  })(js)), js;
}
var Bd;
function U1() {
  return Bd || (Bd = 1, Ss.exports = w1()), Ss.exports;
}
var Ns = { exports: {} }, Ll = {};
var Yd;
function C1() {
  if (Yd) return Ll;
  Yd = 1;
  var f = Ts();
  function d(M) {
    var S = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var L = 2; L < arguments.length; L++)
        S += "&args[]=" + encodeURIComponent(arguments[L]);
    }
    return "Minified React error #" + M + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v() {
  }
  var r = {
    d: {
      f: v,
      r: function() {
        throw Error(d(522));
      },
      D: v,
      C: v,
      L: v,
      m: v,
      X: v,
      S: v,
      M: v
    },
    p: 0,
    findDOMNode: null
  }, O = /* @__PURE__ */ Symbol.for("react.portal");
  function D(M, S, L) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: O,
      key: B == null ? null : "" + B,
      children: M,
      containerInfo: S,
      implementation: L
    };
  }
  var R = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function A(M, S) {
    if (M === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Ll.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Ll.createPortal = function(M, S) {
    var L = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(d(299));
    return D(M, S, null, L);
  }, Ll.flushSync = function(M) {
    var S = R.T, L = r.p;
    try {
      if (R.T = null, r.p = 2, M) return M();
    } finally {
      R.T = S, r.p = L, r.d.f();
    }
  }, Ll.preconnect = function(M, S) {
    typeof M == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, r.d.C(M, S));
  }, Ll.prefetchDNS = function(M) {
    typeof M == "string" && r.d.D(M);
  }, Ll.preinit = function(M, S) {
    if (typeof M == "string" && S && typeof S.as == "string") {
      var L = S.as, B = A(L, S.crossOrigin), Z = typeof S.integrity == "string" ? S.integrity : void 0, Sl = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      L === "style" ? r.d.S(
        M,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: B,
          integrity: Z,
          fetchPriority: Sl
        }
      ) : L === "script" && r.d.X(M, {
        crossOrigin: B,
        integrity: Z,
        fetchPriority: Sl,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Ll.preinitModule = function(M, S) {
    if (typeof M == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var L = A(
            S.as,
            S.crossOrigin
          );
          r.d.M(M, {
            crossOrigin: L,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && r.d.M(M);
  }, Ll.preload = function(M, S) {
    if (typeof M == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var L = S.as, B = A(L, S.crossOrigin);
      r.d.L(M, L, {
        crossOrigin: B,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, Ll.preloadModule = function(M, S) {
    if (typeof M == "string")
      if (S) {
        var L = A(S.as, S.crossOrigin);
        r.d.m(M, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: L,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else r.d.m(M);
  }, Ll.requestFormReset = function(M) {
    r.d.r(M);
  }, Ll.unstable_batchedUpdates = function(M, S) {
    return M(S);
  }, Ll.useFormState = function(M, S, L) {
    return R.H.useFormState(M, S, L);
  }, Ll.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, Ll.version = "19.2.8", Ll;
}
var Zd;
function H1() {
  if (Zd) return Ns.exports;
  Zd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (d) {
        console.error(d);
      }
  }
  return f(), Ns.exports = C1(), Ns.exports;
}
var Gd;
function q1() {
  if (Gd) return wn;
  Gd = 1;
  var f = U1(), d = Ts(), v = H1();
  function r(l) {
    var e = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + l + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function O(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function D(l) {
    var e = l, t = l;
    if (l.alternate) for (; e.return; ) e = e.return;
    else {
      l = e;
      do
        e = l, (e.flags & 4098) !== 0 && (t = e.return), l = e.return;
      while (l);
    }
    return e.tag === 3 ? t : null;
  }
  function R(l) {
    if (l.tag === 13) {
      var e = l.memoizedState;
      if (e === null && (l = l.alternate, l !== null && (e = l.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function A(l) {
    if (l.tag === 31) {
      var e = l.memoizedState;
      if (e === null && (l = l.alternate, l !== null && (e = l.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function M(l) {
    if (D(l) !== l)
      throw Error(r(188));
  }
  function S(l) {
    var e = l.alternate;
    if (!e) {
      if (e = D(l), e === null) throw Error(r(188));
      return e !== l ? null : l;
    }
    for (var t = l, a = e; ; ) {
      var n = t.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          t = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === t) return M(n), l;
          if (u === a) return M(n), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (t.return !== a.return) t = n, a = u;
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === t) {
            i = !0, t = n, a = u;
            break;
          }
          if (s === a) {
            i = !0, a = n, t = u;
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === t) {
              i = !0, t = u, a = n;
              break;
            }
            if (s === a) {
              i = !0, a = u, t = n;
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (t.alternate !== a) throw Error(r(190));
    }
    if (t.tag !== 3) throw Error(r(188));
    return t.stateNode.current === t ? l : e;
  }
  function L(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l;
    for (l = l.child; l !== null; ) {
      if (e = L(l), e !== null) return e;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign, Z = /* @__PURE__ */ Symbol.for("react.element"), Sl = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), pl = /* @__PURE__ */ Symbol.for("react.fragment"), ge = /* @__PURE__ */ Symbol.for("react.strict_mode"), Vl = /* @__PURE__ */ Symbol.for("react.profiler"), Ue = /* @__PURE__ */ Symbol.for("react.consumer"), Dl = /* @__PURE__ */ Symbol.for("react.context"), Jl = /* @__PURE__ */ Symbol.for("react.forward_ref"), $l = /* @__PURE__ */ Symbol.for("react.suspense"), Cl = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), Xl = /* @__PURE__ */ Symbol.for("react.lazy"), kl = /* @__PURE__ */ Symbol.for("react.activity"), Ce = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ne = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object" ? null : (l = ne && l[ne] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ae = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Me(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ae ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case pl:
        return "Fragment";
      case Vl:
        return "Profiler";
      case ge:
        return "StrictMode";
      case $l:
        return "Suspense";
      case Cl:
        return "SuspenseList";
      case kl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case V:
          return "Portal";
        case Dl:
          return l.displayName || "Context";
        case Ue:
          return (l._context.displayName || "Context") + ".Consumer";
        case Jl:
          var e = l.render;
          return l = l.displayName, l || (l = e.displayName || e.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case F:
          return e = l.displayName || null, e !== null ? e : Me(l.type) || "Memo";
        case Xl:
          e = l._payload, l = l._init;
          try {
            return Me(l(e));
          } catch {
          }
      }
    return null;
  }
  var ue = Array.isArray, N = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, cl = [], sl = -1;
  function h(l) {
    return { current: l };
  }
  function _(l) {
    0 > sl || (l.current = cl[sl], cl[sl] = null, sl--);
  }
  function U(l, e) {
    sl++, cl[sl] = l.current, l.current = e;
  }
  var H = h(null), K = h(null), W = h(null), al = h(null);
  function Hl(l, e) {
    switch (U(W, e), U(K, l), U(H, null), e.nodeType) {
      case 9:
      case 11:
        l = (l = e.documentElement) && (l = l.namespaceURI) ? td(l) : 0;
        break;
      default:
        if (l = e.tagName, e = e.namespaceURI)
          e = td(e), l = ad(e, l);
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
    _(H), U(H, l);
  }
  function C() {
    _(H), _(K), _(W);
  }
  function ol(l) {
    l.memoizedState !== null && U(al, l);
    var e = H.current, t = ad(e, l.type);
    e !== t && (U(K, l), U(H, t));
  }
  function nl(l) {
    K.current === l && (_(H), _(K)), al.current === l && (_(al), An._currentValue = X);
  }
  var ye, Wl;
  function Oe(l) {
    if (ye === void 0)
      try {
        throw Error();
      } catch (t) {
        var e = t.stack.trim().match(/\n( *(at )?)/);
        ye = e && e[1] || "", Wl = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ye + l + Wl;
  }
  var Rt = !1;
  function ai(l, e) {
    if (!l || Rt) return "";
    Rt = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (p) {
                  var x = p;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (p) {
                  x = p;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                x = p;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
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
      var u = a.DetermineComponentFrameRoot(), i = u[0], s = u[1];
      if (i && s) {
        var o = i.split(`
`), b = s.split(`
`);
        for (n = a = 0; a < o.length && !o[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < b.length && !b[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === o.length || n === b.length)
          for (a = o.length - 1, n = b.length - 1; 1 <= a && 0 <= n && o[a] !== b[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (o[a] !== b[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || o[a] !== b[n]) {
                  var j = `
` + o[a].replace(" at new ", " at ");
                  return l.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", l.displayName)), j;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Rt = !1, Error.prepareStackTrace = t;
    }
    return (t = l ? l.displayName || l.name : "") ? Oe(t) : "";
  }
  function io(l, e) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Oe(l.type);
      case 16:
        return Oe("Lazy");
      case 13:
        return l.child !== e && e !== null ? Oe("Suspense Fallback") : Oe("Suspense");
      case 19:
        return Oe("SuspenseList");
      case 0:
      case 15:
        return ai(l.type, !1);
      case 11:
        return ai(l.type.render, !1);
      case 1:
        return ai(l.type, !0);
      case 31:
        return Oe("Activity");
      default:
        return "";
    }
  }
  function Ds(l) {
    try {
      var e = "", t = null;
      do
        e += io(l, t), t = l, l = l.return;
      while (l);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ni = Object.prototype.hasOwnProperty, ui = f.unstable_scheduleCallback, ii = f.unstable_cancelCallback, co = f.unstable_shouldYield, so = f.unstable_requestPaint, ie = f.unstable_now, fo = f.unstable_getCurrentPriorityLevel, ws = f.unstable_ImmediatePriority, Us = f.unstable_UserBlockingPriority, Hn = f.unstable_NormalPriority, ro = f.unstable_LowPriority, Cs = f.unstable_IdlePriority, oo = f.log, mo = f.unstable_setDisableYieldValue, Ya = null, ce = null;
  function ut(l) {
    if (typeof oo == "function" && mo(l), ce && typeof ce.setStrictMode == "function")
      try {
        ce.setStrictMode(Ya, l);
      } catch {
      }
  }
  var se = Math.clz32 ? Math.clz32 : go, ho = Math.log, vo = Math.LN2;
  function go(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (ho(l) / vo | 0) | 0;
  }
  var qn = 256, Bn = 262144, Yn = 4194304;
  function Dt(l) {
    var e = l & 42;
    if (e !== 0) return e;
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
  function Zn(l, e, t) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~u, a !== 0 ? n = Dt(a) : (i &= s, i !== 0 ? n = Dt(i) : t || (t = s & ~l, t !== 0 && (n = Dt(t))))) : (s = a & ~u, s !== 0 ? n = Dt(s) : i !== 0 ? n = Dt(i) : t || (t = a & ~l, t !== 0 && (n = Dt(t)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, t = e & -e, u >= t || u === 32 && (t & 4194048) !== 0) ? e : n;
  }
  function Za(l, e) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & e) === 0;
  }
  function yo(l, e) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function Hs() {
    var l = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), l;
  }
  function ci(l) {
    for (var e = [], t = 0; 31 > t; t++) e.push(l);
    return e;
  }
  function Ga(l, e) {
    l.pendingLanes |= e, e !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function bo(l, e, t, a, n, u) {
    var i = l.pendingLanes;
    l.pendingLanes = t, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= t, l.entangledLanes &= t, l.errorRecoveryDisabledLanes &= t, l.shellSuspendCounter = 0;
    var s = l.entanglements, o = l.expirationTimes, b = l.hiddenUpdates;
    for (t = i & ~t; 0 < t; ) {
      var j = 31 - se(t), T = 1 << j;
      s[j] = 0, o[j] = -1;
      var x = b[j];
      if (x !== null)
        for (b[j] = null, j = 0; j < x.length; j++) {
          var p = x[j];
          p !== null && (p.lane &= -536870913);
        }
      t &= ~T;
    }
    a !== 0 && qs(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~e));
  }
  function qs(l, e, t) {
    l.pendingLanes |= e, l.suspendedLanes &= ~e;
    var a = 31 - se(e);
    l.entangledLanes |= e, l.entanglements[a] = l.entanglements[a] | 1073741824 | t & 261930;
  }
  function Bs(l, e) {
    var t = l.entangledLanes |= e;
    for (l = l.entanglements; t; ) {
      var a = 31 - se(t), n = 1 << a;
      n & e | l[a] & e && (l[a] |= e), t &= ~n;
    }
  }
  function Ys(l, e) {
    var t = e & -e;
    return t = (t & 42) !== 0 ? 1 : si(t), (t & (l.suspendedLanes | e)) !== 0 ? 0 : t;
  }
  function si(l) {
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
  function fi(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zs() {
    var l = w.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : _d(l.type));
  }
  function Gs(l, e) {
    var t = w.p;
    try {
      return w.p = l, e();
    } finally {
      w.p = t;
    }
  }
  var it = Math.random().toString(36).slice(2), ql = "__reactFiber$" + it, Fl = "__reactProps$" + it, Ft = "__reactContainer$" + it, ri = "__reactEvents$" + it, xo = "__reactListeners$" + it, po = "__reactHandles$" + it, Xs = "__reactResources$" + it, Xa = "__reactMarker$" + it;
  function di(l) {
    delete l[ql], delete l[Fl], delete l[ri], delete l[xo], delete l[po];
  }
  function It(l) {
    var e = l[ql];
    if (e) return e;
    for (var t = l.parentNode; t; ) {
      if (e = t[Ft] || t[ql]) {
        if (t = e.alternate, e.child !== null || t !== null && t.child !== null)
          for (l = rd(l); l !== null; ) {
            if (t = l[ql]) return t;
            l = rd(l);
          }
        return e;
      }
      l = t, t = l.parentNode;
    }
    return null;
  }
  function Pt(l) {
    if (l = l[ql] || l[Ft]) {
      var e = l.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return l;
    }
    return null;
  }
  function Qa(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l.stateNode;
    throw Error(r(33));
  }
  function la(l) {
    var e = l[Xs];
    return e || (e = l[Xs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function wl(l) {
    l[Xa] = !0;
  }
  var Qs = /* @__PURE__ */ new Set(), Ls = {};
  function wt(l, e) {
    ea(l, e), ea(l + "Capture", e);
  }
  function ea(l, e) {
    for (Ls[l] = e, l = 0; l < e.length; l++)
      Qs.add(e[l]);
  }
  var zo = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Vs = {}, Ks = {};
  function So(l) {
    return ni.call(Ks, l) ? !0 : ni.call(Vs, l) ? !1 : zo.test(l) ? Ks[l] = !0 : (Vs[l] = !0, !1);
  }
  function Gn(l, e, t) {
    if (So(e))
      if (t === null) l.removeAttribute(e);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(e);
              return;
            }
        }
        l.setAttribute(e, "" + t);
      }
  }
  function Xn(l, e, t) {
    if (t === null) l.removeAttribute(e);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttribute(e, "" + t);
    }
  }
  function Ze(l, e, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttributeNS(e, t, "" + a);
    }
  }
  function be(l) {
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
  function Js(l) {
    var e = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function jo(l, e, t) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      e
    );
    if (!l.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(l, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          t = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(l, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(i) {
          t = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[e];
        }
      };
    }
  }
  function oi(l) {
    if (!l._valueTracker) {
      var e = Js(l) ? "checked" : "value";
      l._valueTracker = jo(
        l,
        e,
        "" + l[e]
      );
    }
  }
  function $s(l) {
    if (!l) return !1;
    var e = l._valueTracker;
    if (!e) return !0;
    var t = e.getValue(), a = "";
    return l && (a = Js(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== t ? (e.setValue(l), !0) : !1;
  }
  function Qn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var No = /[\n"\\]/g;
  function xe(l) {
    return l.replace(
      No,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function mi(l, e, t, a, n, u, i, s) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && l.value === "" || l.value != e) && (l.value = "" + be(e)) : l.value !== "" + be(e) && (l.value = "" + be(e)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), e != null ? hi(l, i, be(e)) : t != null ? hi(l, i, be(t)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? l.name = "" + be(s) : l.removeAttribute("name");
  }
  function ks(l, e, t, a, n, u, i, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), e != null || t != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        oi(l);
        return;
      }
      t = t != null ? "" + be(t) : "", e = e != null ? "" + be(e) : t, s || e === l.value || (l.value = e), l.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = s ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), oi(l);
  }
  function hi(l, e, t) {
    e === "number" && Qn(l.ownerDocument) === l || l.defaultValue === "" + t || (l.defaultValue = "" + t);
  }
  function ta(l, e, t, a) {
    if (l = l.options, e) {
      e = {};
      for (var n = 0; n < t.length; n++)
        e["$" + t[n]] = !0;
      for (t = 0; t < l.length; t++)
        n = e.hasOwnProperty("$" + l[t].value), l[t].selected !== n && (l[t].selected = n), n && a && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + be(t), e = null, n = 0; n < l.length; n++) {
        if (l[n].value === t) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        e !== null || l[n].disabled || (e = l[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ws(l, e, t) {
    if (e != null && (e = "" + be(e), e !== l.value && (l.value = e), t == null)) {
      l.defaultValue !== e && (l.defaultValue = e);
      return;
    }
    l.defaultValue = t != null ? "" + be(t) : "";
  }
  function Fs(l, e, t, a) {
    if (e == null) {
      if (a != null) {
        if (t != null) throw Error(r(92));
        if (ue(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        t = a;
      }
      t == null && (t = ""), e = t;
    }
    t = be(e), l.defaultValue = t, a = l.textContent, a === t && a !== "" && a !== null && (l.value = a), oi(l);
  }
  function aa(l, e) {
    if (e) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = e;
        return;
      }
    }
    l.textContent = e;
  }
  var Eo = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Is(l, e, t) {
    var a = e.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? a ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "" : a ? l.setProperty(e, t) : typeof t != "number" || t === 0 || Eo.has(e) ? e === "float" ? l.cssFloat = t : l[e] = ("" + t).trim() : l[e] = t + "px";
  }
  function Ps(l, e, t) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (l = l.style, t != null) {
      for (var a in t)
        !t.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && t[n] !== a && Is(l, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Is(l, u, e[u]);
  }
  function vi(l) {
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
  var _o = /* @__PURE__ */ new Map([
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
  ]), To = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ln(l) {
    return To.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ge() {
  }
  var gi = null;
  function yi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var na = null, ua = null;
  function lf(l) {
    var e = Pt(l);
    if (e && (l = e.stateNode)) {
      var t = l[Fl] || null;
      l: switch (l = e.stateNode, e.type) {
        case "input":
          if (mi(
            l,
            t.value,
            t.defaultValue,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name
          ), e = t.name, t.type === "radio" && e != null) {
            for (t = l; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll(
              'input[name="' + xe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < t.length; e++) {
              var a = t[e];
              if (a !== l && a.form === l.form) {
                var n = a[Fl] || null;
                if (!n) throw Error(r(90));
                mi(
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
            for (e = 0; e < t.length; e++)
              a = t[e], a.form === l.form && $s(a);
          }
          break l;
        case "textarea":
          Ws(l, t.value, t.defaultValue);
          break l;
        case "select":
          e = t.value, e != null && ta(l, !!t.multiple, e, !1);
      }
    }
  }
  var bi = !1;
  function ef(l, e, t) {
    if (bi) return l(e, t);
    bi = !0;
    try {
      var a = l(e);
      return a;
    } finally {
      if (bi = !1, (na !== null || ua !== null) && (Ru(), na && (e = na, l = ua, ua = na = null, lf(e), l)))
        for (e = 0; e < l.length; e++) lf(l[e]);
    }
  }
  function La(l, e) {
    var t = l.stateNode;
    if (t === null) return null;
    var a = t[Fl] || null;
    if (a === null) return null;
    t = a[e];
    l: switch (e) {
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
    if (t && typeof t != "function")
      throw Error(
        r(231, e, typeof t)
      );
    return t;
  }
  var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xi = !1;
  if (Xe)
    try {
      var Va = {};
      Object.defineProperty(Va, "passive", {
        get: function() {
          xi = !0;
        }
      }), window.addEventListener("test", Va, Va), window.removeEventListener("test", Va, Va);
    } catch {
      xi = !1;
    }
  var ct = null, pi = null, Vn = null;
  function tf() {
    if (Vn) return Vn;
    var l, e = pi, t = e.length, a, n = "value" in ct ? ct.value : ct.textContent, u = n.length;
    for (l = 0; l < t && e[l] === n[l]; l++) ;
    var i = t - l;
    for (a = 1; a <= i && e[t - a] === n[u - a]; a++) ;
    return Vn = n.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Kn(l) {
    var e = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && e === 13 && (l = 13)) : l = e, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Jn() {
    return !0;
  }
  function af() {
    return !1;
  }
  function Il(l) {
    function e(t, a, n, u, i) {
      this._reactName = t, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var s in l)
        l.hasOwnProperty(s) && (t = l[s], this[s] = t ? t(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Jn : af, this.isPropagationStopped = af, this;
    }
    return B(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Jn);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Jn);
      },
      persist: function() {
      },
      isPersistent: Jn
    }), e;
  }
  var Ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, $n = Il(Ut), Ka = B({}, Ut, { view: 0, detail: 0 }), Ao = Il(Ka), zi, Si, Ja, kn = B({}, Ka, {
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
    getModifierState: Ni,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ja && (Ja && l.type === "mousemove" ? (zi = l.screenX - Ja.screenX, Si = l.screenY - Ja.screenY) : Si = zi = 0, Ja = l), zi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Si;
    }
  }), nf = Il(kn), Mo = B({}, kn, { dataTransfer: 0 }), Oo = Il(Mo), Ro = B({}, Ka, { relatedTarget: 0 }), ji = Il(Ro), Do = B({}, Ut, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wo = Il(Do), Uo = B({}, Ut, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Co = Il(Uo), Ho = B({}, Ut, { data: 0 }), uf = Il(Ho), qo = {
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
  }, Bo = {
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
  }, Yo = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Zo(l) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(l) : (l = Yo[l]) ? !!e[l] : !1;
  }
  function Ni() {
    return Zo;
  }
  var Go = B({}, Ka, {
    key: function(l) {
      if (l.key) {
        var e = qo[l.key] || l.key;
        if (e !== "Unidentified") return e;
      }
      return l.type === "keypress" ? (l = Kn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Bo[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ni,
    charCode: function(l) {
      return l.type === "keypress" ? Kn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Kn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Xo = Il(Go), Qo = B({}, kn, {
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
  }), cf = Il(Qo), Lo = B({}, Ka, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ni
  }), Vo = Il(Lo), Ko = B({}, Ut, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jo = Il(Ko), $o = B({}, kn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ko = Il($o), Wo = B({}, Ut, {
    newState: 0,
    oldState: 0
  }), Fo = Il(Wo), Io = [9, 13, 27, 32], Ei = Xe && "CompositionEvent" in window, $a = null;
  Xe && "documentMode" in document && ($a = document.documentMode);
  var Po = Xe && "TextEvent" in window && !$a, sf = Xe && (!Ei || $a && 8 < $a && 11 >= $a), ff = " ", rf = !1;
  function df(l, e) {
    switch (l) {
      case "keyup":
        return Io.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function of(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ia = !1;
  function lm(l, e) {
    switch (l) {
      case "compositionend":
        return of(e);
      case "keypress":
        return e.which !== 32 ? null : (rf = !0, ff);
      case "textInput":
        return l = e.data, l === ff && rf ? null : l;
      default:
        return null;
    }
  }
  function em(l, e) {
    if (ia)
      return l === "compositionend" || !Ei && df(l, e) ? (l = tf(), Vn = pi = ct = null, ia = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return sf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var tm = {
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
  function mf(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e === "input" ? !!tm[l.type] : e === "textarea";
  }
  function hf(l, e, t, a) {
    na ? ua ? ua.push(a) : ua = [a] : na = a, e = Bu(e, "onChange"), 0 < e.length && (t = new $n(
      "onChange",
      "change",
      null,
      t,
      a
    ), l.push({ event: t, listeners: e }));
  }
  var ka = null, Wa = null;
  function am(l) {
    W0(l, 0);
  }
  function Wn(l) {
    var e = Qa(l);
    if ($s(e)) return l;
  }
  function vf(l, e) {
    if (l === "change") return e;
  }
  var gf = !1;
  if (Xe) {
    var _i;
    if (Xe) {
      var Ti = "oninput" in document;
      if (!Ti) {
        var yf = document.createElement("div");
        yf.setAttribute("oninput", "return;"), Ti = typeof yf.oninput == "function";
      }
      _i = Ti;
    } else _i = !1;
    gf = _i && (!document.documentMode || 9 < document.documentMode);
  }
  function bf() {
    ka && (ka.detachEvent("onpropertychange", xf), Wa = ka = null);
  }
  function xf(l) {
    if (l.propertyName === "value" && Wn(Wa)) {
      var e = [];
      hf(
        e,
        Wa,
        l,
        yi(l)
      ), ef(am, e);
    }
  }
  function nm(l, e, t) {
    l === "focusin" ? (bf(), ka = e, Wa = t, ka.attachEvent("onpropertychange", xf)) : l === "focusout" && bf();
  }
  function um(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Wn(Wa);
  }
  function im(l, e) {
    if (l === "click") return Wn(e);
  }
  function cm(l, e) {
    if (l === "input" || l === "change")
      return Wn(e);
  }
  function sm(l, e) {
    return l === e && (l !== 0 || 1 / l === 1 / e) || l !== l && e !== e;
  }
  var fe = typeof Object.is == "function" ? Object.is : sm;
  function Fa(l, e) {
    if (fe(l, e)) return !0;
    if (typeof l != "object" || l === null || typeof e != "object" || e === null)
      return !1;
    var t = Object.keys(l), a = Object.keys(e);
    if (t.length !== a.length) return !1;
    for (a = 0; a < t.length; a++) {
      var n = t[a];
      if (!ni.call(e, n) || !fe(l[n], e[n]))
        return !1;
    }
    return !0;
  }
  function pf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function zf(l, e) {
    var t = pf(l);
    l = 0;
    for (var a; t; ) {
      if (t.nodeType === 3) {
        if (a = l + t.textContent.length, l <= e && a >= e)
          return { node: t, offset: e - l };
        l = a;
      }
      l: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break l;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = pf(t);
    }
  }
  function Sf(l, e) {
    return l && e ? l === e ? !0 : l && l.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Sf(l, e.parentNode) : "contains" in l ? l.contains(e) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function jf(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var e = Qn(l.document); e instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof e.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = e.contentWindow;
      else break;
      e = Qn(l.document);
    }
    return e;
  }
  function Ai(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e && (e === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || e === "textarea" || l.contentEditable === "true");
  }
  var fm = Xe && "documentMode" in document && 11 >= document.documentMode, ca = null, Mi = null, Ia = null, Oi = !1;
  function Nf(l, e, t) {
    var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Oi || ca == null || ca !== Qn(a) || (a = ca, "selectionStart" in a && Ai(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ia && Fa(Ia, a) || (Ia = a, a = Bu(Mi, "onSelect"), 0 < a.length && (e = new $n(
      "onSelect",
      "select",
      null,
      e,
      t
    ), l.push({ event: e, listeners: a }), e.target = ca)));
  }
  function Ct(l, e) {
    var t = {};
    return t[l.toLowerCase()] = e.toLowerCase(), t["Webkit" + l] = "webkit" + e, t["Moz" + l] = "moz" + e, t;
  }
  var sa = {
    animationend: Ct("Animation", "AnimationEnd"),
    animationiteration: Ct("Animation", "AnimationIteration"),
    animationstart: Ct("Animation", "AnimationStart"),
    transitionrun: Ct("Transition", "TransitionRun"),
    transitionstart: Ct("Transition", "TransitionStart"),
    transitioncancel: Ct("Transition", "TransitionCancel"),
    transitionend: Ct("Transition", "TransitionEnd")
  }, Ri = {}, Ef = {};
  Xe && (Ef = document.createElement("div").style, "AnimationEvent" in window || (delete sa.animationend.animation, delete sa.animationiteration.animation, delete sa.animationstart.animation), "TransitionEvent" in window || delete sa.transitionend.transition);
  function Ht(l) {
    if (Ri[l]) return Ri[l];
    if (!sa[l]) return l;
    var e = sa[l], t;
    for (t in e)
      if (e.hasOwnProperty(t) && t in Ef)
        return Ri[l] = e[t];
    return l;
  }
  var _f = Ht("animationend"), Tf = Ht("animationiteration"), Af = Ht("animationstart"), rm = Ht("transitionrun"), dm = Ht("transitionstart"), om = Ht("transitioncancel"), Mf = Ht("transitionend"), Of = /* @__PURE__ */ new Map(), Di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Di.push("scrollEnd");
  function Re(l, e) {
    Of.set(l, e), wt(e, [l]);
  }
  var Fn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, pe = [], fa = 0, wi = 0;
  function In() {
    for (var l = fa, e = wi = fa = 0; e < l; ) {
      var t = pe[e];
      pe[e++] = null;
      var a = pe[e];
      pe[e++] = null;
      var n = pe[e];
      pe[e++] = null;
      var u = pe[e];
      if (pe[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Rf(t, n, u);
    }
  }
  function Pn(l, e, t, a) {
    pe[fa++] = l, pe[fa++] = e, pe[fa++] = t, pe[fa++] = a, wi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ui(l, e, t, a) {
    return Pn(l, e, t, a), lu(l);
  }
  function qt(l, e) {
    return Pn(l, null, null, e), lu(l);
  }
  function Rf(l, e, t) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t);
    for (var n = !1, u = l.return; u !== null; )
      u.childLanes |= t, a = u.alternate, a !== null && (a.childLanes |= t), u.tag === 22 && (l = u.stateNode, l === null || l._visibility & 1 || (n = !0)), l = u, u = u.return;
    return l.tag === 3 ? (u = l.stateNode, n && e !== null && (n = 31 - se(t), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [e] : a.push(e), e.lane = t | 536870912), u) : null;
  }
  function lu(l) {
    if (50 < zn)
      throw zn = 0, Qc = null, Error(r(185));
    for (var e = l.return; e !== null; )
      l = e, e = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ra = {};
  function mm(l, e, t, a) {
    this.tag = l, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function re(l, e, t, a) {
    return new mm(l, e, t, a);
  }
  function Ci(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Qe(l, e) {
    var t = l.alternate;
    return t === null ? (t = re(
      l.tag,
      e,
      l.key,
      l.mode
    ), t.elementType = l.elementType, t.type = l.type, t.stateNode = l.stateNode, t.alternate = l, l.alternate = t) : (t.pendingProps = e, t.type = l.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = l.flags & 65011712, t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, e = l.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = l.sibling, t.index = l.index, t.ref = l.ref, t.refCleanup = l.refCleanup, t;
  }
  function Df(l, e) {
    l.flags &= 65011714;
    var t = l.alternate;
    return t === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, l.type = t.type, e = t.dependencies, l.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), l;
  }
  function eu(l, e, t, a, n, u) {
    var i = 0;
    if (a = l, typeof l == "function") Ci(l) && (i = 1);
    else if (typeof l == "string")
      i = b1(
        l,
        t,
        H.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case kl:
          return l = re(31, t, e, n), l.elementType = kl, l.lanes = u, l;
        case pl:
          return Bt(t.children, n, u, e);
        case ge:
          i = 8, n |= 24;
          break;
        case Vl:
          return l = re(12, t, e, n | 2), l.elementType = Vl, l.lanes = u, l;
        case $l:
          return l = re(13, t, e, n), l.elementType = $l, l.lanes = u, l;
        case Cl:
          return l = re(19, t, e, n), l.elementType = Cl, l.lanes = u, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Dl:
                i = 10;
                break l;
              case Ue:
                i = 9;
                break l;
              case Jl:
                i = 11;
                break l;
              case F:
                i = 14;
                break l;
              case Xl:
                i = 16, a = null;
                break l;
            }
          i = 29, t = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return e = re(i, t, e, n), e.elementType = l, e.type = a, e.lanes = u, e;
  }
  function Bt(l, e, t, a) {
    return l = re(7, l, a, e), l.lanes = t, l;
  }
  function Hi(l, e, t) {
    return l = re(6, l, null, e), l.lanes = t, l;
  }
  function wf(l) {
    var e = re(18, null, null, 0);
    return e.stateNode = l, e;
  }
  function qi(l, e, t) {
    return e = re(
      4,
      l.children !== null ? l.children : [],
      l.key,
      e
    ), e.lanes = t, e.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, e;
  }
  var Uf = /* @__PURE__ */ new WeakMap();
  function ze(l, e) {
    if (typeof l == "object" && l !== null) {
      var t = Uf.get(l);
      return t !== void 0 ? t : (e = {
        value: l,
        source: e,
        stack: Ds(e)
      }, Uf.set(l, e), e);
    }
    return {
      value: l,
      source: e,
      stack: Ds(e)
    };
  }
  var da = [], oa = 0, tu = null, Pa = 0, Se = [], je = 0, st = null, He = 1, qe = "";
  function Le(l, e) {
    da[oa++] = Pa, da[oa++] = tu, tu = l, Pa = e;
  }
  function Cf(l, e, t) {
    Se[je++] = He, Se[je++] = qe, Se[je++] = st, st = l;
    var a = He;
    l = qe;
    var n = 32 - se(a) - 1;
    a &= ~(1 << n), t += 1;
    var u = 32 - se(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, He = 1 << 32 - se(e) + n | t << n | a, qe = u + l;
    } else
      He = 1 << u | t << n | a, qe = l;
  }
  function Bi(l) {
    l.return !== null && (Le(l, 1), Cf(l, 1, 0));
  }
  function Yi(l) {
    for (; l === tu; )
      tu = da[--oa], da[oa] = null, Pa = da[--oa], da[oa] = null;
    for (; l === st; )
      st = Se[--je], Se[je] = null, qe = Se[--je], Se[je] = null, He = Se[--je], Se[je] = null;
  }
  function Hf(l, e) {
    Se[je++] = He, Se[je++] = qe, Se[je++] = st, He = e.id, qe = e.overflow, st = l;
  }
  var Bl = null, bl = null, tl = !1, ft = null, Ne = !1, Zi = Error(r(519));
  function rt(l) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ln(ze(e, l)), Zi;
  }
  function qf(l) {
    var e = l.stateNode, t = l.type, a = l.memoizedProps;
    switch (e[ql] = l, e[Fl] = a, t) {
      case "dialog":
        P("cancel", e), P("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", e);
        break;
      case "video":
      case "audio":
        for (t = 0; t < jn.length; t++)
          P(jn[t], e);
        break;
      case "source":
        P("error", e);
        break;
      case "img":
      case "image":
      case "link":
        P("error", e), P("load", e);
        break;
      case "details":
        P("toggle", e);
        break;
      case "input":
        P("invalid", e), ks(
          e,
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
        P("invalid", e);
        break;
      case "textarea":
        P("invalid", e), Fs(e, a.value, a.defaultValue, a.children);
    }
    t = a.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || e.textContent === "" + t || a.suppressHydrationWarning === !0 || ld(e.textContent, t) ? (a.popover != null && (P("beforetoggle", e), P("toggle", e)), a.onScroll != null && P("scroll", e), a.onScrollEnd != null && P("scrollend", e), a.onClick != null && (e.onclick = Ge), e = !0) : e = !1, e || rt(l, !0);
  }
  function Bf(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          Ne = !1;
          return;
        case 27:
        case 3:
          Ne = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function ma(l) {
    if (l !== Bl) return !1;
    if (!tl) return Bf(l), tl = !0, !1;
    var e = l.tag, t;
    if ((t = e !== 3 && e !== 27) && ((t = e === 5) && (t = l.type, t = !(t !== "form" && t !== "button") || ns(l.type, l.memoizedProps)), t = !t), t && bl && rt(l), Bf(l), e === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      bl = fd(l);
    } else if (e === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      bl = fd(l);
    } else
      e === 27 ? (e = bl, Nt(l.type) ? (l = fs, fs = null, bl = l) : bl = e) : bl = Bl ? _e(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Yt() {
    bl = Bl = null, tl = !1;
  }
  function Gi() {
    var l = ft;
    return l !== null && (te === null ? te = l : te.push.apply(
      te,
      l
    ), ft = null), l;
  }
  function ln(l) {
    ft === null ? ft = [l] : ft.push(l);
  }
  var Xi = h(null), Zt = null, Ve = null;
  function dt(l, e, t) {
    U(Xi, e._currentValue), e._currentValue = t;
  }
  function Ke(l) {
    l._currentValue = Xi.current, _(Xi);
  }
  function Qi(l, e, t) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & e) !== e ? (l.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), l === t) break;
      l = l.return;
    }
  }
  function Li(l, e, t, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var o = 0; o < e.length; o++)
            if (s.context === e[o]) {
              u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), Qi(
                u.return,
                t,
                l
              ), a || (i = null);
              break l;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(r(341));
        i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Qi(i, t, l), i = null;
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
  function ha(l, e, t, a) {
    l = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var s = n.type;
          fe(n.pendingProps.value, i.value) || (l !== null ? l.push(s) : l = [s]);
        }
      } else if (n === al.current) {
        if (i = n.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(An) : l = [An]);
      }
      n = n.return;
    }
    l !== null && Li(
      e,
      l,
      t,
      a
    ), e.flags |= 262144;
  }
  function au(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!fe(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Gt(l) {
    Zt = l, Ve = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Yl(l) {
    return Yf(Zt, l);
  }
  function nu(l, e) {
    return Zt === null && Gt(l), Yf(l, e);
  }
  function Yf(l, e) {
    var t = e._currentValue;
    if (e = { context: e, memoizedValue: t, next: null }, Ve === null) {
      if (l === null) throw Error(r(308));
      Ve = e, l.dependencies = { lanes: 0, firstContext: e }, l.flags |= 524288;
    } else Ve = Ve.next = e;
    return t;
  }
  var hm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(t, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, l.forEach(function(t) {
        return t();
      });
    };
  }, vm = f.unstable_scheduleCallback, gm = f.unstable_NormalPriority, Tl = {
    $$typeof: Dl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Vi() {
    return {
      controller: new hm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function en(l) {
    l.refCount--, l.refCount === 0 && vm(gm, function() {
      l.controller.abort();
    });
  }
  var tn = null, Ki = 0, va = 0, ga = null;
  function ym(l, e) {
    if (tn === null) {
      var t = tn = [];
      Ki = 0, va = kc(), ga = {
        status: "pending",
        value: void 0,
        then: function(a) {
          t.push(a);
        }
      };
    }
    return Ki++, e.then(Zf, Zf), e;
  }
  function Zf() {
    if (--Ki === 0 && tn !== null) {
      ga !== null && (ga.status = "fulfilled");
      var l = tn;
      tn = null, va = 0, ga = null;
      for (var e = 0; e < l.length; e++) (0, l[e])();
    }
  }
  function bm(l, e) {
    var t = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        t.push(n);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < t.length; n++) (0, t[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < t.length; n++)
          (0, t[n])(void 0);
      }
    ), a;
  }
  var Gf = N.S;
  N.S = function(l, e) {
    N0 = ie(), typeof e == "object" && e !== null && typeof e.then == "function" && ym(l, e), Gf !== null && Gf(l, e);
  };
  var Xt = h(null);
  function Ji() {
    var l = Xt.current;
    return l !== null ? l : gl.pooledCache;
  }
  function uu(l, e) {
    e === null ? U(Xt, Xt.current) : U(Xt, e.pool);
  }
  function Xf() {
    var l = Ji();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var ya = Error(r(460)), $i = Error(r(474)), iu = Error(r(542)), cu = { then: function() {
  } };
  function Qf(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Lf(l, e, t) {
    switch (t = l[t], t === void 0 ? l.push(e) : t !== e && (e.then(Ge, Ge), e = t), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw l = e.reason, Kf(l), l;
      default:
        if (typeof e.status == "string") e.then(Ge, Ge);
        else {
          if (l = gl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = e, l.status = "pending", l.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw l = e.reason, Kf(l), l;
        }
        throw Lt = e, ya;
    }
  }
  function Qt(l) {
    try {
      var e = l._init;
      return e(l._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Lt = t, ya) : t;
    }
  }
  var Lt = null;
  function Vf() {
    if (Lt === null) throw Error(r(459));
    var l = Lt;
    return Lt = null, l;
  }
  function Kf(l) {
    if (l === ya || l === iu)
      throw Error(r(483));
  }
  var ba = null, an = 0;
  function su(l) {
    var e = an;
    return an += 1, ba === null && (ba = []), Lf(ba, l, e);
  }
  function nn(l, e) {
    e = e.props.ref, l.ref = e !== void 0 ? e : null;
  }
  function fu(l, e) {
    throw e.$$typeof === Z ? Error(r(525)) : (l = Object.prototype.toString.call(e), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : l
      )
    ));
  }
  function Jf(l) {
    function e(g, m) {
      if (l) {
        var y = g.deletions;
        y === null ? (g.deletions = [m], g.flags |= 16) : y.push(m);
      }
    }
    function t(g, m) {
      if (!l) return null;
      for (; m !== null; )
        e(g, m), m = m.sibling;
      return null;
    }
    function a(g) {
      for (var m = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling;
      return m;
    }
    function n(g, m) {
      return g = Qe(g, m), g.index = 0, g.sibling = null, g;
    }
    function u(g, m, y) {
      return g.index = y, l ? (y = g.alternate, y !== null ? (y = y.index, y < m ? (g.flags |= 67108866, m) : y) : (g.flags |= 67108866, m)) : (g.flags |= 1048576, m);
    }
    function i(g) {
      return l && g.alternate === null && (g.flags |= 67108866), g;
    }
    function s(g, m, y, E) {
      return m === null || m.tag !== 6 ? (m = Hi(y, g.mode, E), m.return = g, m) : (m = n(m, y), m.return = g, m);
    }
    function o(g, m, y, E) {
      var G = y.type;
      return G === pl ? j(
        g,
        m,
        y.props.children,
        E,
        y.key
      ) : m !== null && (m.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Xl && Qt(G) === m.type) ? (m = n(m, y.props), nn(m, y), m.return = g, m) : (m = eu(
        y.type,
        y.key,
        y.props,
        null,
        g.mode,
        E
      ), nn(m, y), m.return = g, m);
    }
    function b(g, m, y, E) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = qi(y, g.mode, E), m.return = g, m) : (m = n(m, y.children || []), m.return = g, m);
    }
    function j(g, m, y, E, G) {
      return m === null || m.tag !== 7 ? (m = Bt(
        y,
        g.mode,
        E,
        G
      ), m.return = g, m) : (m = n(m, y), m.return = g, m);
    }
    function T(g, m, y) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = Hi(
          "" + m,
          g.mode,
          y
        ), m.return = g, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Sl:
            return y = eu(
              m.type,
              m.key,
              m.props,
              null,
              g.mode,
              y
            ), nn(y, m), y.return = g, y;
          case V:
            return m = qi(
              m,
              g.mode,
              y
            ), m.return = g, m;
          case Xl:
            return m = Qt(m), T(g, m, y);
        }
        if (ue(m) || Ql(m))
          return m = Bt(
            m,
            g.mode,
            y,
            null
          ), m.return = g, m;
        if (typeof m.then == "function")
          return T(g, su(m), y);
        if (m.$$typeof === Dl)
          return T(
            g,
            nu(g, m),
            y
          );
        fu(g, m);
      }
      return null;
    }
    function x(g, m, y, E) {
      var G = m !== null ? m.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return G !== null ? null : s(g, m, "" + y, E);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Sl:
            return y.key === G ? o(g, m, y, E) : null;
          case V:
            return y.key === G ? b(g, m, y, E) : null;
          case Xl:
            return y = Qt(y), x(g, m, y, E);
        }
        if (ue(y) || Ql(y))
          return G !== null ? null : j(g, m, y, E, null);
        if (typeof y.then == "function")
          return x(
            g,
            m,
            su(y),
            E
          );
        if (y.$$typeof === Dl)
          return x(
            g,
            m,
            nu(g, y),
            E
          );
        fu(g, y);
      }
      return null;
    }
    function p(g, m, y, E, G) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return g = g.get(y) || null, s(m, g, "" + E, G);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Sl:
            return g = g.get(
              E.key === null ? y : E.key
            ) || null, o(m, g, E, G);
          case V:
            return g = g.get(
              E.key === null ? y : E.key
            ) || null, b(m, g, E, G);
          case Xl:
            return E = Qt(E), p(
              g,
              m,
              y,
              E,
              G
            );
        }
        if (ue(E) || Ql(E))
          return g = g.get(y) || null, j(m, g, E, G, null);
        if (typeof E.then == "function")
          return p(
            g,
            m,
            y,
            su(E),
            G
          );
        if (E.$$typeof === Dl)
          return p(
            g,
            m,
            y,
            nu(m, E),
            G
          );
        fu(m, E);
      }
      return null;
    }
    function q(g, m, y, E) {
      for (var G = null, ul = null, Y = m, k = m = 0, el = null; Y !== null && k < y.length; k++) {
        Y.index > k ? (el = Y, Y = null) : el = Y.sibling;
        var il = x(
          g,
          Y,
          y[k],
          E
        );
        if (il === null) {
          Y === null && (Y = el);
          break;
        }
        l && Y && il.alternate === null && e(g, Y), m = u(il, m, k), ul === null ? G = il : ul.sibling = il, ul = il, Y = el;
      }
      if (k === y.length)
        return t(g, Y), tl && Le(g, k), G;
      if (Y === null) {
        for (; k < y.length; k++)
          Y = T(g, y[k], E), Y !== null && (m = u(
            Y,
            m,
            k
          ), ul === null ? G = Y : ul.sibling = Y, ul = Y);
        return tl && Le(g, k), G;
      }
      for (Y = a(Y); k < y.length; k++)
        el = p(
          Y,
          g,
          k,
          y[k],
          E
        ), el !== null && (l && el.alternate !== null && Y.delete(
          el.key === null ? k : el.key
        ), m = u(
          el,
          m,
          k
        ), ul === null ? G = el : ul.sibling = el, ul = el);
      return l && Y.forEach(function(Mt) {
        return e(g, Mt);
      }), tl && Le(g, k), G;
    }
    function Q(g, m, y, E) {
      if (y == null) throw Error(r(151));
      for (var G = null, ul = null, Y = m, k = m = 0, el = null, il = y.next(); Y !== null && !il.done; k++, il = y.next()) {
        Y.index > k ? (el = Y, Y = null) : el = Y.sibling;
        var Mt = x(g, Y, il.value, E);
        if (Mt === null) {
          Y === null && (Y = el);
          break;
        }
        l && Y && Mt.alternate === null && e(g, Y), m = u(Mt, m, k), ul === null ? G = Mt : ul.sibling = Mt, ul = Mt, Y = el;
      }
      if (il.done)
        return t(g, Y), tl && Le(g, k), G;
      if (Y === null) {
        for (; !il.done; k++, il = y.next())
          il = T(g, il.value, E), il !== null && (m = u(il, m, k), ul === null ? G = il : ul.sibling = il, ul = il);
        return tl && Le(g, k), G;
      }
      for (Y = a(Y); !il.done; k++, il = y.next())
        il = p(Y, g, k, il.value, E), il !== null && (l && il.alternate !== null && Y.delete(il.key === null ? k : il.key), m = u(il, m, k), ul === null ? G = il : ul.sibling = il, ul = il);
      return l && Y.forEach(function(M1) {
        return e(g, M1);
      }), tl && Le(g, k), G;
    }
    function vl(g, m, y, E) {
      if (typeof y == "object" && y !== null && y.type === pl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Sl:
            l: {
              for (var G = y.key; m !== null; ) {
                if (m.key === G) {
                  if (G = y.type, G === pl) {
                    if (m.tag === 7) {
                      t(
                        g,
                        m.sibling
                      ), E = n(
                        m,
                        y.props.children
                      ), E.return = g, g = E;
                      break l;
                    }
                  } else if (m.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Xl && Qt(G) === m.type) {
                    t(
                      g,
                      m.sibling
                    ), E = n(m, y.props), nn(E, y), E.return = g, g = E;
                    break l;
                  }
                  t(g, m);
                  break;
                } else e(g, m);
                m = m.sibling;
              }
              y.type === pl ? (E = Bt(
                y.props.children,
                g.mode,
                E,
                y.key
              ), E.return = g, g = E) : (E = eu(
                y.type,
                y.key,
                y.props,
                null,
                g.mode,
                E
              ), nn(E, y), E.return = g, g = E);
            }
            return i(g);
          case V:
            l: {
              for (G = y.key; m !== null; ) {
                if (m.key === G)
                  if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                    t(
                      g,
                      m.sibling
                    ), E = n(m, y.children || []), E.return = g, g = E;
                    break l;
                  } else {
                    t(g, m);
                    break;
                  }
                else e(g, m);
                m = m.sibling;
              }
              E = qi(y, g.mode, E), E.return = g, g = E;
            }
            return i(g);
          case Xl:
            return y = Qt(y), vl(
              g,
              m,
              y,
              E
            );
        }
        if (ue(y))
          return q(
            g,
            m,
            y,
            E
          );
        if (Ql(y)) {
          if (G = Ql(y), typeof G != "function") throw Error(r(150));
          return y = G.call(y), Q(
            g,
            m,
            y,
            E
          );
        }
        if (typeof y.then == "function")
          return vl(
            g,
            m,
            su(y),
            E
          );
        if (y.$$typeof === Dl)
          return vl(
            g,
            m,
            nu(g, y),
            E
          );
        fu(g, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, m !== null && m.tag === 6 ? (t(g, m.sibling), E = n(m, y), E.return = g, g = E) : (t(g, m), E = Hi(y, g.mode, E), E.return = g, g = E), i(g)) : t(g, m);
    }
    return function(g, m, y, E) {
      try {
        an = 0;
        var G = vl(
          g,
          m,
          y,
          E
        );
        return ba = null, G;
      } catch (Y) {
        if (Y === ya || Y === iu) throw Y;
        var ul = re(29, Y, null, g.mode);
        return ul.lanes = E, ul.return = g, ul;
      }
    };
  }
  var Vt = Jf(!0), $f = Jf(!1), ot = !1;
  function ki(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Wi(l, e) {
    l = l.updateQueue, e.updateQueue === l && (e.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function mt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ht(l, e, t) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (fl & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = lu(l), Rf(l, null, t), e;
    }
    return Pn(l, a, e, t), lu(l);
  }
  function un(l, e, t) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194048) !== 0)) {
      var a = e.lanes;
      a &= l.pendingLanes, t |= a, e.lanes = t, Bs(l, t);
    }
  }
  function Fi(l, e) {
    var t = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, t === a)) {
      var n = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, t = t.next;
        } while (t !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      t = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = t;
      return;
    }
    l = t.lastBaseUpdate, l === null ? t.firstBaseUpdate = e : l.next = e, t.lastBaseUpdate = e;
  }
  var Ii = !1;
  function cn() {
    if (Ii) {
      var l = ga;
      if (l !== null) throw l;
    }
  }
  function sn(l, e, t, a) {
    Ii = !1;
    var n = l.updateQueue;
    ot = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var o = s, b = o.next;
      o.next = null, i === null ? u = b : i.next = b, i = o;
      var j = l.alternate;
      j !== null && (j = j.updateQueue, s = j.lastBaseUpdate, s !== i && (s === null ? j.firstBaseUpdate = b : s.next = b, j.lastBaseUpdate = o));
    }
    if (u !== null) {
      var T = n.baseState;
      i = 0, j = b = o = null, s = u;
      do {
        var x = s.lane & -536870913, p = x !== s.lane;
        if (p ? (ll & x) === x : (a & x) === x) {
          x !== 0 && x === va && (Ii = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          l: {
            var q = l, Q = s;
            x = e;
            var vl = t;
            switch (Q.tag) {
              case 1:
                if (q = Q.payload, typeof q == "function") {
                  T = q.call(vl, T, x);
                  break l;
                }
                T = q;
                break l;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = Q.payload, x = typeof q == "function" ? q.call(vl, T, x) : q, x == null) break l;
                T = B({}, T, x);
                break l;
              case 2:
                ot = !0;
            }
          }
          x = s.callback, x !== null && (l.flags |= 64, p && (l.flags |= 8192), p = n.callbacks, p === null ? n.callbacks = [x] : p.push(x));
        } else
          p = {
            lane: x,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, j === null ? (b = j = p, o = T) : j = j.next = p, i |= x;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          p = s, s = p.next, p.next = null, n.lastBaseUpdate = p, n.shared.pending = null;
        }
      } while (!0);
      j === null && (o = T), n.baseState = o, n.firstBaseUpdate = b, n.lastBaseUpdate = j, u === null && (n.shared.lanes = 0), xt |= i, l.lanes = i, l.memoizedState = T;
    }
  }
  function kf(l, e) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(e);
  }
  function Wf(l, e) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++)
        kf(t[l], e);
  }
  var xa = h(null), ru = h(0);
  function Ff(l, e) {
    l = et, U(ru, l), U(xa, e), et = l | e.baseLanes;
  }
  function Pi() {
    U(ru, et), U(xa, xa.current);
  }
  function lc() {
    et = ru.current, _(xa), _(ru);
  }
  var de = h(null), Ee = null;
  function vt(l) {
    var e = l.alternate;
    U(El, El.current & 1), U(de, l), Ee === null && (e === null || xa.current !== null || e.memoizedState !== null) && (Ee = l);
  }
  function ec(l) {
    U(El, El.current), U(de, l), Ee === null && (Ee = l);
  }
  function If(l) {
    l.tag === 22 ? (U(El, El.current), U(de, l), Ee === null && (Ee = l)) : gt();
  }
  function gt() {
    U(El, El.current), U(de, de.current);
  }
  function oe(l) {
    _(de), Ee === l && (Ee = null), _(El);
  }
  var El = h(0);
  function du(l) {
    for (var e = l; e !== null; ) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || cs(t) || ss(t)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === l) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === l) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Je = 0, $ = null, ml = null, Al = null, ou = !1, pa = !1, Kt = !1, mu = 0, fn = 0, za = null, xm = 0;
  function jl() {
    throw Error(r(321));
  }
  function tc(l, e) {
    if (e === null) return !1;
    for (var t = 0; t < e.length && t < l.length; t++)
      if (!fe(l[t], e[t])) return !1;
    return !0;
  }
  function ac(l, e, t, a, n, u) {
    return Je = u, $ = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = l === null || l.memoizedState === null ? Cr : bc, Kt = !1, u = t(a, n), Kt = !1, pa && (u = lr(
      e,
      t,
      a,
      n
    )), Pf(l), u;
  }
  function Pf(l) {
    N.H = on;
    var e = ml !== null && ml.next !== null;
    if (Je = 0, Al = ml = $ = null, ou = !1, fn = 0, za = null, e) throw Error(r(300));
    l === null || Ml || (l = l.dependencies, l !== null && au(l) && (Ml = !0));
  }
  function lr(l, e, t, a) {
    $ = l;
    var n = 0;
    do {
      if (pa && (za = null), fn = 0, pa = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Al = ml = null, l.updateQueue != null) {
        var u = l.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      N.H = Hr, u = e(t, a);
    } while (pa);
    return u;
  }
  function pm() {
    var l = N.H, e = l.useState()[0];
    return e = typeof e.then == "function" ? rn(e) : e, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && ($.flags |= 1024), e;
  }
  function nc() {
    var l = mu !== 0;
    return mu = 0, l;
  }
  function uc(l, e, t) {
    e.updateQueue = l.updateQueue, e.flags &= -2053, l.lanes &= ~t;
  }
  function ic(l) {
    if (ou) {
      for (l = l.memoizedState; l !== null; ) {
        var e = l.queue;
        e !== null && (e.pending = null), l = l.next;
      }
      ou = !1;
    }
    Je = 0, Al = ml = $ = null, pa = !1, fn = mu = 0, za = null;
  }
  function Kl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? $.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function _l() {
    if (ml === null) {
      var l = $.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var e = Al === null ? $.memoizedState : Al.next;
    if (e !== null)
      Al = e, ml = l;
    else {
      if (l === null)
        throw $.alternate === null ? Error(r(467)) : Error(r(310));
      ml = l, l = {
        memoizedState: ml.memoizedState,
        baseState: ml.baseState,
        baseQueue: ml.baseQueue,
        queue: ml.queue,
        next: null
      }, Al === null ? $.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function hu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function rn(l) {
    var e = fn;
    return fn += 1, za === null && (za = []), l = Lf(za, l, e), e = $, (Al === null ? e.memoizedState : Al.next) === null && (e = e.alternate, N.H = e === null || e.memoizedState === null ? Cr : bc), l;
  }
  function vu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return rn(l);
      if (l.$$typeof === Dl) return Yl(l);
    }
    throw Error(r(438, String(l)));
  }
  function cc(l) {
    var e = null, t = $.updateQueue;
    if (t !== null && (e = t.memoCache), e == null) {
      var a = $.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), t === null && (t = hu(), $.updateQueue = t), t.memoCache = e, t = e.data[e.index], t === void 0)
      for (t = e.data[e.index] = Array(l), a = 0; a < l; a++)
        t[a] = Ce;
    return e.index++, t;
  }
  function $e(l, e) {
    return typeof e == "function" ? e(l) : e;
  }
  function gu(l) {
    var e = _l();
    return sc(e, ml, l);
  }
  function sc(l, e, t) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var n = l.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = l.baseState, n === null) l.memoizedState = u;
    else {
      e = n.next;
      var s = i = null, o = null, b = e, j = !1;
      do {
        var T = b.lane & -536870913;
        if (T !== b.lane ? (ll & T) === T : (Je & T) === T) {
          var x = b.revertLane;
          if (x === 0)
            o !== null && (o = o.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), T === va && (j = !0);
          else if ((Je & x) === x) {
            b = b.next, x === va && (j = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, o === null ? (s = o = T, i = u) : o = o.next = T, $.lanes |= x, xt |= x;
          T = b.action, Kt && t(u, T), u = b.hasEagerState ? b.eagerState : t(u, T);
        } else
          x = {
            lane: T,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, o === null ? (s = o = x, i = u) : o = o.next = x, $.lanes |= T, xt |= T;
        b = b.next;
      } while (b !== null && b !== e);
      if (o === null ? i = u : o.next = s, !fe(u, l.memoizedState) && (Ml = !0, j && (t = ga, t !== null)))
        throw t;
      l.memoizedState = u, l.baseState = i, l.baseQueue = o, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function fc(l) {
    var e = _l(), t = e.queue;
    if (t === null) throw Error(r(311));
    t.lastRenderedReducer = l;
    var a = t.dispatch, n = t.pending, u = e.memoizedState;
    if (n !== null) {
      t.pending = null;
      var i = n = n.next;
      do
        u = l(u, i.action), i = i.next;
      while (i !== n);
      fe(u, e.memoizedState) || (Ml = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), t.lastRenderedState = u;
    }
    return [u, a];
  }
  function er(l, e, t) {
    var a = $, n = _l(), u = tl;
    if (u) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = e();
    var i = !fe(
      (ml || n).memoizedState,
      t
    );
    if (i && (n.memoizedState = t, Ml = !0), n = n.queue, oc(nr.bind(null, a, n, l), [
      l
    ]), n.getSnapshot !== e || i || Al !== null && Al.memoizedState.tag & 1) {
      if (a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        ar.bind(
          null,
          a,
          n,
          t,
          e
        ),
        null
      ), gl === null) throw Error(r(349));
      u || (Je & 127) !== 0 || tr(a, e, t);
    }
    return t;
  }
  function tr(l, e, t) {
    l.flags |= 16384, l = { getSnapshot: e, value: t }, e = $.updateQueue, e === null ? (e = hu(), $.updateQueue = e, e.stores = [l]) : (t = e.stores, t === null ? e.stores = [l] : t.push(l));
  }
  function ar(l, e, t, a) {
    e.value = t, e.getSnapshot = a, ur(e) && ir(l);
  }
  function nr(l, e, t) {
    return t(function() {
      ur(e) && ir(l);
    });
  }
  function ur(l) {
    var e = l.getSnapshot;
    l = l.value;
    try {
      var t = e();
      return !fe(l, t);
    } catch {
      return !0;
    }
  }
  function ir(l) {
    var e = qt(l, 2);
    e !== null && ae(e, l, 2);
  }
  function rc(l) {
    var e = Kl();
    if (typeof l == "function") {
      var t = l;
      if (l = t(), Kt) {
        ut(!0);
        try {
          t();
        } finally {
          ut(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = l, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $e,
      lastRenderedState: l
    }, e;
  }
  function cr(l, e, t, a) {
    return l.baseState = t, sc(
      l,
      ml,
      typeof a == "function" ? a : $e
    );
  }
  function zm(l, e, t, a, n) {
    if (xu(l)) throw Error(r(485));
    if (l = e.action, l !== null) {
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
      N.T !== null ? t(!0) : u.isTransition = !1, a(u), t = e.pending, t === null ? (u.next = e.pending = u, sr(e, u)) : (u.next = t.next, e.pending = t.next = u);
    }
  }
  function sr(l, e) {
    var t = e.action, a = e.payload, n = l.state;
    if (e.isTransition) {
      var u = N.T, i = {};
      N.T = i;
      try {
        var s = t(n, a), o = N.S;
        o !== null && o(i, s), fr(l, e, s);
      } catch (b) {
        dc(l, e, b);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), N.T = u;
      }
    } else
      try {
        u = t(n, a), fr(l, e, u);
      } catch (b) {
        dc(l, e, b);
      }
  }
  function fr(l, e, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(a) {
        rr(l, e, a);
      },
      function(a) {
        return dc(l, e, a);
      }
    ) : rr(l, e, t);
  }
  function rr(l, e, t) {
    e.status = "fulfilled", e.value = t, dr(e), l.state = t, e = l.pending, e !== null && (t = e.next, t === e ? l.pending = null : (t = t.next, e.next = t, sr(l, t)));
  }
  function dc(l, e, t) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = t, dr(e), e = e.next;
      while (e !== a);
    }
    l.action = null;
  }
  function dr(l) {
    l = l.listeners;
    for (var e = 0; e < l.length; e++) (0, l[e])();
  }
  function or(l, e) {
    return e;
  }
  function mr(l, e) {
    if (tl) {
      var t = gl.formState;
      if (t !== null) {
        l: {
          var a = $;
          if (tl) {
            if (bl) {
              e: {
                for (var n = bl, u = Ne; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = _e(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                bl = _e(
                  n.nextSibling
                ), a = n.data === "F!";
                break l;
              }
            }
            rt(a);
          }
          a = !1;
        }
        a && (e = t[0]);
      }
    }
    return t = Kl(), t.memoizedState = t.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e
    }, t.queue = a, t = Dr.bind(
      null,
      $,
      a
    ), a.dispatch = t, a = rc(!1), u = yc.bind(
      null,
      $,
      !1,
      a.queue
    ), a = Kl(), n = {
      state: e,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, t = zm.bind(
      null,
      $,
      n,
      u,
      t
    ), n.dispatch = t, a.memoizedState = l, [e, t, !1];
  }
  function hr(l) {
    var e = _l();
    return vr(e, ml, l);
  }
  function vr(l, e, t) {
    if (e = sc(
      l,
      e,
      or
    )[0], l = gu($e)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = rn(e);
      } catch (i) {
        throw i === ya ? iu : i;
      }
    else a = e;
    e = _l();
    var n = e.queue, u = n.dispatch;
    return t !== e.memoizedState && ($.flags |= 2048, Sa(
      9,
      { destroy: void 0 },
      Sm.bind(null, n, t),
      null
    )), [a, u, l];
  }
  function Sm(l, e) {
    l.action = e;
  }
  function gr(l) {
    var e = _l(), t = ml;
    if (t !== null)
      return vr(e, t, l);
    _l(), e = e.memoizedState, t = _l();
    var a = t.queue.dispatch;
    return t.memoizedState = l, [e, a, !1];
  }
  function Sa(l, e, t, a) {
    return l = { tag: l, create: t, deps: a, inst: e, next: null }, e = $.updateQueue, e === null && (e = hu(), $.updateQueue = e), t = e.lastEffect, t === null ? e.lastEffect = l.next = l : (a = t.next, t.next = l, l.next = a, e.lastEffect = l), l;
  }
  function yr() {
    return _l().memoizedState;
  }
  function yu(l, e, t, a) {
    var n = Kl();
    $.flags |= l, n.memoizedState = Sa(
      1 | e,
      { destroy: void 0 },
      t,
      a === void 0 ? null : a
    );
  }
  function bu(l, e, t, a) {
    var n = _l();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ml !== null && a !== null && tc(a, ml.memoizedState.deps) ? n.memoizedState = Sa(e, u, t, a) : ($.flags |= l, n.memoizedState = Sa(
      1 | e,
      u,
      t,
      a
    ));
  }
  function br(l, e) {
    yu(8390656, 8, l, e);
  }
  function oc(l, e) {
    bu(2048, 8, l, e);
  }
  function jm(l) {
    $.flags |= 4;
    var e = $.updateQueue;
    if (e === null)
      e = hu(), $.updateQueue = e, e.events = [l];
    else {
      var t = e.events;
      t === null ? e.events = [l] : t.push(l);
    }
  }
  function xr(l) {
    var e = _l().memoizedState;
    return jm({ ref: e, nextImpl: l }), function() {
      if ((fl & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function pr(l, e) {
    return bu(4, 2, l, e);
  }
  function zr(l, e) {
    return bu(4, 4, l, e);
  }
  function Sr(l, e) {
    if (typeof e == "function") {
      l = l();
      var t = e(l);
      return function() {
        typeof t == "function" ? t() : e(null);
      };
    }
    if (e != null)
      return l = l(), e.current = l, function() {
        e.current = null;
      };
  }
  function jr(l, e, t) {
    t = t != null ? t.concat([l]) : null, bu(4, 4, Sr.bind(null, e, l), t);
  }
  function mc() {
  }
  function Nr(l, e) {
    var t = _l();
    e = e === void 0 ? null : e;
    var a = t.memoizedState;
    return e !== null && tc(e, a[1]) ? a[0] : (t.memoizedState = [l, e], l);
  }
  function Er(l, e) {
    var t = _l();
    e = e === void 0 ? null : e;
    var a = t.memoizedState;
    if (e !== null && tc(e, a[1]))
      return a[0];
    if (a = l(), Kt) {
      ut(!0);
      try {
        l();
      } finally {
        ut(!1);
      }
    }
    return t.memoizedState = [a, e], a;
  }
  function hc(l, e, t) {
    return t === void 0 || (Je & 1073741824) !== 0 && (ll & 261930) === 0 ? l.memoizedState = e : (l.memoizedState = t, l = _0(), $.lanes |= l, xt |= l, t);
  }
  function _r(l, e, t, a) {
    return fe(t, e) ? t : xa.current !== null ? (l = hc(l, t, a), fe(l, e) || (Ml = !0), l) : (Je & 42) === 0 || (Je & 1073741824) !== 0 && (ll & 261930) === 0 ? (Ml = !0, l.memoizedState = t) : (l = _0(), $.lanes |= l, xt |= l, e);
  }
  function Tr(l, e, t, a, n) {
    var u = w.p;
    w.p = u !== 0 && 8 > u ? u : 8;
    var i = N.T, s = {};
    N.T = s, yc(l, !1, e, t);
    try {
      var o = n(), b = N.S;
      if (b !== null && b(s, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var j = bm(
          o,
          a
        );
        dn(
          l,
          e,
          j,
          ve(l)
        );
      } else
        dn(
          l,
          e,
          a,
          ve(l)
        );
    } catch (T) {
      dn(
        l,
        e,
        { then: function() {
        }, status: "rejected", reason: T },
        ve()
      );
    } finally {
      w.p = u, i !== null && s.types !== null && (i.types = s.types), N.T = i;
    }
  }
  function Nm() {
  }
  function vc(l, e, t, a) {
    if (l.tag !== 5) throw Error(r(476));
    var n = Ar(l).queue;
    Tr(
      l,
      n,
      e,
      X,
      t === null ? Nm : function() {
        return Mr(l), t(a);
      }
    );
  }
  function Ar(l) {
    var e = l.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: X
      },
      next: null
    };
    var t = {};
    return e.next = {
      memoizedState: t,
      baseState: t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: t
      },
      next: null
    }, l.memoizedState = e, l = l.alternate, l !== null && (l.memoizedState = e), e;
  }
  function Mr(l) {
    var e = Ar(l);
    e.next === null && (e = l.alternate.memoizedState), dn(
      l,
      e.next.queue,
      {},
      ve()
    );
  }
  function gc() {
    return Yl(An);
  }
  function Or() {
    return _l().memoizedState;
  }
  function Rr() {
    return _l().memoizedState;
  }
  function Em(l) {
    for (var e = l.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var t = ve();
          l = mt(t);
          var a = ht(e, l, t);
          a !== null && (ae(a, e, t), un(a, e, t)), e = { cache: Vi() }, l.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function _m(l, e, t) {
    var a = ve();
    t = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xu(l) ? wr(e, t) : (t = Ui(l, e, t, a), t !== null && (ae(t, l, a), Ur(t, e, a)));
  }
  function Dr(l, e, t) {
    var a = ve();
    dn(l, e, t, a);
  }
  function dn(l, e, t, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (xu(l)) wr(e, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var i = e.lastRenderedState, s = u(i, t);
          if (n.hasEagerState = !0, n.eagerState = s, fe(s, i))
            return Pn(l, e, n, 0), gl === null && In(), !1;
        } catch {
        }
      if (t = Ui(l, e, n, a), t !== null)
        return ae(t, l, a), Ur(t, e, a), !0;
    }
    return !1;
  }
  function yc(l, e, t, a) {
    if (a = {
      lane: 2,
      revertLane: kc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xu(l)) {
      if (e) throw Error(r(479));
    } else
      e = Ui(
        l,
        t,
        a,
        2
      ), e !== null && ae(e, l, 2);
  }
  function xu(l) {
    var e = l.alternate;
    return l === $ || e !== null && e === $;
  }
  function wr(l, e) {
    pa = ou = !0;
    var t = l.pending;
    t === null ? e.next = e : (e.next = t.next, t.next = e), l.pending = e;
  }
  function Ur(l, e, t) {
    if ((t & 4194048) !== 0) {
      var a = e.lanes;
      a &= l.pendingLanes, t |= a, e.lanes = t, Bs(l, t);
    }
  }
  var on = {
    readContext: Yl,
    use: vu,
    useCallback: jl,
    useContext: jl,
    useEffect: jl,
    useImperativeHandle: jl,
    useLayoutEffect: jl,
    useInsertionEffect: jl,
    useMemo: jl,
    useReducer: jl,
    useRef: jl,
    useState: jl,
    useDebugValue: jl,
    useDeferredValue: jl,
    useTransition: jl,
    useSyncExternalStore: jl,
    useId: jl,
    useHostTransitionStatus: jl,
    useFormState: jl,
    useActionState: jl,
    useOptimistic: jl,
    useMemoCache: jl,
    useCacheRefresh: jl
  };
  on.useEffectEvent = jl;
  var Cr = {
    readContext: Yl,
    use: vu,
    useCallback: function(l, e) {
      return Kl().memoizedState = [
        l,
        e === void 0 ? null : e
      ], l;
    },
    useContext: Yl,
    useEffect: br,
    useImperativeHandle: function(l, e, t) {
      t = t != null ? t.concat([l]) : null, yu(
        4194308,
        4,
        Sr.bind(null, e, l),
        t
      );
    },
    useLayoutEffect: function(l, e) {
      return yu(4194308, 4, l, e);
    },
    useInsertionEffect: function(l, e) {
      yu(4, 2, l, e);
    },
    useMemo: function(l, e) {
      var t = Kl();
      e = e === void 0 ? null : e;
      var a = l();
      if (Kt) {
        ut(!0);
        try {
          l();
        } finally {
          ut(!1);
        }
      }
      return t.memoizedState = [a, e], a;
    },
    useReducer: function(l, e, t) {
      var a = Kl();
      if (t !== void 0) {
        var n = t(e);
        if (Kt) {
          ut(!0);
          try {
            t(e);
          } finally {
            ut(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, a.queue = l, l = l.dispatch = _m.bind(
        null,
        $,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var e = Kl();
      return l = { current: l }, e.memoizedState = l;
    },
    useState: function(l) {
      l = rc(l);
      var e = l.queue, t = Dr.bind(null, $, e);
      return e.dispatch = t, [l.memoizedState, t];
    },
    useDebugValue: mc,
    useDeferredValue: function(l, e) {
      var t = Kl();
      return hc(t, l, e);
    },
    useTransition: function() {
      var l = rc(!1);
      return l = Tr.bind(
        null,
        $,
        l.queue,
        !0,
        !1
      ), Kl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, e, t) {
      var a = $, n = Kl();
      if (tl) {
        if (t === void 0)
          throw Error(r(407));
        t = t();
      } else {
        if (t = e(), gl === null)
          throw Error(r(349));
        (ll & 127) !== 0 || tr(a, e, t);
      }
      n.memoizedState = t;
      var u = { value: t, getSnapshot: e };
      return n.queue = u, br(nr.bind(null, a, u, l), [
        l
      ]), a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        ar.bind(
          null,
          a,
          u,
          t,
          e
        ),
        null
      ), t;
    },
    useId: function() {
      var l = Kl(), e = gl.identifierPrefix;
      if (tl) {
        var t = qe, a = He;
        t = (a & ~(1 << 32 - se(a) - 1)).toString(32) + t, e = "_" + e + "R_" + t, t = mu++, 0 < t && (e += "H" + t.toString(32)), e += "_";
      } else
        t = xm++, e = "_" + e + "r_" + t.toString(32) + "_";
      return l.memoizedState = e;
    },
    useHostTransitionStatus: gc,
    useFormState: mr,
    useActionState: mr,
    useOptimistic: function(l) {
      var e = Kl();
      e.memoizedState = e.baseState = l;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = t, e = yc.bind(
        null,
        $,
        !0,
        t
      ), t.dispatch = e, [l, e];
    },
    useMemoCache: cc,
    useCacheRefresh: function() {
      return Kl().memoizedState = Em.bind(
        null,
        $
      );
    },
    useEffectEvent: function(l) {
      var e = Kl(), t = { impl: l };
      return e.memoizedState = t, function() {
        if ((fl & 2) !== 0)
          throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, bc = {
    readContext: Yl,
    use: vu,
    useCallback: Nr,
    useContext: Yl,
    useEffect: oc,
    useImperativeHandle: jr,
    useInsertionEffect: pr,
    useLayoutEffect: zr,
    useMemo: Er,
    useReducer: gu,
    useRef: yr,
    useState: function() {
      return gu($e);
    },
    useDebugValue: mc,
    useDeferredValue: function(l, e) {
      var t = _l();
      return _r(
        t,
        ml.memoizedState,
        l,
        e
      );
    },
    useTransition: function() {
      var l = gu($e)[0], e = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : rn(l),
        e
      ];
    },
    useSyncExternalStore: er,
    useId: Or,
    useHostTransitionStatus: gc,
    useFormState: hr,
    useActionState: hr,
    useOptimistic: function(l, e) {
      var t = _l();
      return cr(t, ml, l, e);
    },
    useMemoCache: cc,
    useCacheRefresh: Rr
  };
  bc.useEffectEvent = xr;
  var Hr = {
    readContext: Yl,
    use: vu,
    useCallback: Nr,
    useContext: Yl,
    useEffect: oc,
    useImperativeHandle: jr,
    useInsertionEffect: pr,
    useLayoutEffect: zr,
    useMemo: Er,
    useReducer: fc,
    useRef: yr,
    useState: function() {
      return fc($e);
    },
    useDebugValue: mc,
    useDeferredValue: function(l, e) {
      var t = _l();
      return ml === null ? hc(t, l, e) : _r(
        t,
        ml.memoizedState,
        l,
        e
      );
    },
    useTransition: function() {
      var l = fc($e)[0], e = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : rn(l),
        e
      ];
    },
    useSyncExternalStore: er,
    useId: Or,
    useHostTransitionStatus: gc,
    useFormState: gr,
    useActionState: gr,
    useOptimistic: function(l, e) {
      var t = _l();
      return ml !== null ? cr(t, ml, l, e) : (t.baseState = l, [l, t.queue.dispatch]);
    },
    useMemoCache: cc,
    useCacheRefresh: Rr
  };
  Hr.useEffectEvent = xr;
  function xc(l, e, t, a) {
    e = l.memoizedState, t = t(a, e), t = t == null ? e : B({}, e, t), l.memoizedState = t, l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var pc = {
    enqueueSetState: function(l, e, t) {
      l = l._reactInternals;
      var a = ve(), n = mt(a);
      n.payload = e, t != null && (n.callback = t), e = ht(l, n, a), e !== null && (ae(e, l, a), un(e, l, a));
    },
    enqueueReplaceState: function(l, e, t) {
      l = l._reactInternals;
      var a = ve(), n = mt(a);
      n.tag = 1, n.payload = e, t != null && (n.callback = t), e = ht(l, n, a), e !== null && (ae(e, l, a), un(e, l, a));
    },
    enqueueForceUpdate: function(l, e) {
      l = l._reactInternals;
      var t = ve(), a = mt(t);
      a.tag = 2, e != null && (a.callback = e), e = ht(l, a, t), e !== null && (ae(e, l, t), un(e, l, t));
    }
  };
  function qr(l, e, t, a, n, u, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Fa(t, a) || !Fa(n, u) : !0;
  }
  function Br(l, e, t, a) {
    l = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, a), e.state !== l && pc.enqueueReplaceState(e, e.state, null);
  }
  function Jt(l, e) {
    var t = e;
    if ("ref" in e) {
      t = {};
      for (var a in e)
        a !== "ref" && (t[a] = e[a]);
    }
    if (l = l.defaultProps) {
      t === e && (t = B({}, t));
      for (var n in l)
        t[n] === void 0 && (t[n] = l[n]);
    }
    return t;
  }
  function Yr(l) {
    Fn(l);
  }
  function Zr(l) {
    console.error(l);
  }
  function Gr(l) {
    Fn(l);
  }
  function pu(l, e) {
    try {
      var t = l.onUncaughtError;
      t(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Xr(l, e, t) {
    try {
      var a = l.onCaughtError;
      a(t.value, {
        componentStack: t.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function zc(l, e, t) {
    return t = mt(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      pu(l, e);
    }, t;
  }
  function Qr(l) {
    return l = mt(l), l.tag = 3, l;
  }
  function Lr(l, e, t, a) {
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      l.payload = function() {
        return n(u);
      }, l.callback = function() {
        Xr(e, t, a);
      };
    }
    var i = t.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Xr(e, t, a), typeof n != "function" && (pt === null ? pt = /* @__PURE__ */ new Set([this]) : pt.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Tm(l, e, t, a, n) {
    if (t.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = t.alternate, e !== null && ha(
        e,
        t,
        n,
        !0
      ), t = de.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return Ee === null ? Du() : t.alternate === null && Nl === 0 && (Nl = 3), t.flags &= -257, t.flags |= 65536, t.lanes = n, a === cu ? t.flags |= 16384 : (e = t.updateQueue, e === null ? t.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Kc(l, a, n)), !1;
          case 22:
            return t.flags |= 65536, a === cu ? t.flags |= 16384 : (e = t.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, t.updateQueue = e) : (t = e.retryQueue, t === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : t.add(a)), Kc(l, a, n)), !1;
        }
        throw Error(r(435, t.tag));
      }
      return Kc(l, a, n), Du(), !1;
    }
    if (tl)
      return e = de.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Zi && (l = Error(r(422), { cause: a }), ln(ze(l, t)))) : (a !== Zi && (e = Error(r(423), {
        cause: a
      }), ln(
        ze(e, t)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = ze(a, t), n = zc(
        l.stateNode,
        a,
        n
      ), Fi(l, n), Nl !== 4 && (Nl = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = ze(u, t), pn === null ? pn = [u] : pn.push(u), Nl !== 4 && (Nl = 2), e === null) return !0;
    a = ze(a, t), t = e;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, l = n & -n, t.lanes |= l, l = zc(t.stateNode, a, l), Fi(t, l), !1;
        case 1:
          if (e = t.type, u = t.stateNode, (t.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (pt === null || !pt.has(u))))
            return t.flags |= 65536, n &= -n, t.lanes |= n, n = Qr(n), Lr(
              n,
              l,
              t,
              a
            ), Fi(t, n), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Sc = Error(r(461)), Ml = !1;
  function Zl(l, e, t, a) {
    e.child = l === null ? $f(e, null, t, a) : Vt(
      e,
      l.child,
      t,
      a
    );
  }
  function Vr(l, e, t, a, n) {
    t = t.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var s in a)
        s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return Gt(e), a = ac(
      l,
      e,
      t,
      i,
      u,
      n
    ), s = nc(), l !== null && !Ml ? (uc(l, e, n), ke(l, e, n)) : (tl && s && Bi(e), e.flags |= 1, Zl(l, e, a, n), e.child);
  }
  function Kr(l, e, t, a, n) {
    if (l === null) {
      var u = t.type;
      return typeof u == "function" && !Ci(u) && u.defaultProps === void 0 && t.compare === null ? (e.tag = 15, e.type = u, Jr(
        l,
        e,
        u,
        a,
        n
      )) : (l = eu(
        t.type,
        null,
        a,
        e,
        e.mode,
        n
      ), l.ref = e.ref, l.return = e, e.child = l);
    }
    if (u = l.child, !Oc(l, n)) {
      var i = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Fa, t(i, a) && l.ref === e.ref)
        return ke(l, e, n);
    }
    return e.flags |= 1, l = Qe(u, a), l.ref = e.ref, l.return = e, e.child = l;
  }
  function Jr(l, e, t, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Fa(u, a) && l.ref === e.ref)
        if (Ml = !1, e.pendingProps = a = u, Oc(l, n))
          (l.flags & 131072) !== 0 && (Ml = !0);
        else
          return e.lanes = l.lanes, ke(l, e, n);
    }
    return jc(
      l,
      e,
      t,
      a,
      n
    );
  }
  function $r(l, e, t, a) {
    var n = a.children, u = l !== null ? l.memoizedState : null;
    if (l === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | t : t, l !== null) {
          for (a = e.child = l.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, e.child = null;
        return kr(
          l,
          e,
          u,
          t,
          a
        );
      }
      if ((t & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && uu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Ff(e, u) : Pi(), If(e);
      else
        return a = e.lanes = 536870912, kr(
          l,
          e,
          u !== null ? u.baseLanes | t : t,
          t,
          a
        );
    } else
      u !== null ? (uu(e, u.cachePool), Ff(e, u), gt(), e.memoizedState = null) : (l !== null && uu(e, null), Pi(), gt());
    return Zl(l, e, n, t), e.child;
  }
  function mn(l, e) {
    return l !== null && l.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function kr(l, e, t, a, n) {
    var u = Ji();
    return u = u === null ? null : { parent: Tl._currentValue, pool: u }, e.memoizedState = {
      baseLanes: t,
      cachePool: u
    }, l !== null && uu(e, null), Pi(), If(e), l !== null && ha(l, e, a, !0), e.childLanes = n, null;
  }
  function zu(l, e) {
    return e = ju(
      { mode: e.mode, children: e.children },
      l.mode
    ), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function Wr(l, e, t) {
    return Vt(e, l.child, null, t), l = zu(e, e.pendingProps), l.flags |= 2, oe(e), e.memoizedState = null, l;
  }
  function Am(l, e, t) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, l === null) {
      if (tl) {
        if (a.mode === "hidden")
          return l = zu(e, a), e.lanes = 536870912, mn(null, l);
        if (ec(e), (l = bl) ? (l = sd(
          l,
          Ne
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (e.memoizedState = {
          dehydrated: l,
          treeContext: st !== null ? { id: He, overflow: qe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = wf(l), t.return = e, e.child = t, Bl = e, bl = null)) : l = null, l === null) throw rt(e);
        return e.lanes = 536870912, null;
      }
      return zu(e, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (ec(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Wr(
            l,
            e,
            t
          );
        else if (e.memoizedState !== null)
          e.child = l.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Ml || ha(l, e, t, !1), n = (t & l.childLanes) !== 0, Ml || n) {
        if (a = gl, a !== null && (i = Ys(a, t), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, qt(l, i), ae(a, l, i), Sc;
        Du(), e = Wr(
          l,
          e,
          t
        );
      } else
        l = u.treeContext, bl = _e(i.nextSibling), Bl = e, tl = !0, ft = null, Ne = !1, l !== null && Hf(e, l), e = zu(e, a), e.flags |= 4096;
      return e;
    }
    return l = Qe(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function Su(l, e) {
    var t = e.ref;
    if (t === null)
      l !== null && l.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(r(284));
      (l === null || l.ref !== t) && (e.flags |= 4194816);
    }
  }
  function jc(l, e, t, a, n) {
    return Gt(e), t = ac(
      l,
      e,
      t,
      a,
      void 0,
      n
    ), a = nc(), l !== null && !Ml ? (uc(l, e, n), ke(l, e, n)) : (tl && a && Bi(e), e.flags |= 1, Zl(l, e, t, n), e.child);
  }
  function Fr(l, e, t, a, n, u) {
    return Gt(e), e.updateQueue = null, t = lr(
      e,
      a,
      t,
      n
    ), Pf(l), a = nc(), l !== null && !Ml ? (uc(l, e, u), ke(l, e, u)) : (tl && a && Bi(e), e.flags |= 1, Zl(l, e, t, u), e.child);
  }
  function Ir(l, e, t, a, n) {
    if (Gt(e), e.stateNode === null) {
      var u = ra, i = t.contextType;
      typeof i == "object" && i !== null && (u = Yl(i)), u = new t(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = pc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, ki(e), i = t.contextType, u.context = typeof i == "object" && i !== null ? Yl(i) : ra, u.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (xc(
        e,
        t,
        i,
        a
      ), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && pc.enqueueReplaceState(u, u.state, null), sn(e, a, u, n), cn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (l === null) {
      u = e.stateNode;
      var s = e.memoizedProps, o = Jt(t, s);
      u.props = o;
      var b = u.context, j = t.contextType;
      i = ra, typeof j == "object" && j !== null && (i = Yl(j));
      var T = t.getDerivedStateFromProps;
      j = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, j || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || b !== i) && Br(
        e,
        u,
        a,
        i
      ), ot = !1;
      var x = e.memoizedState;
      u.state = x, sn(e, a, u, n), cn(), b = e.memoizedState, s || x !== b || ot ? (typeof T == "function" && (xc(
        e,
        t,
        T,
        a
      ), b = e.memoizedState), (o = ot || qr(
        e,
        t,
        o,
        a,
        x,
        b,
        i
      )) ? (j || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = b), u.props = a, u.state = b, u.context = i, a = o) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Wi(l, e), i = e.memoizedProps, j = Jt(t, i), u.props = j, T = e.pendingProps, x = u.context, b = t.contextType, o = ra, typeof b == "object" && b !== null && (o = Yl(b)), s = t.getDerivedStateFromProps, (b = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== T || x !== o) && Br(
        e,
        u,
        a,
        o
      ), ot = !1, x = e.memoizedState, u.state = x, sn(e, a, u, n), cn();
      var p = e.memoizedState;
      i !== T || x !== p || ot || l !== null && l.dependencies !== null && au(l.dependencies) ? (typeof s == "function" && (xc(
        e,
        t,
        s,
        a
      ), p = e.memoizedState), (j = ot || qr(
        e,
        t,
        j,
        a,
        x,
        p,
        o
      ) || l !== null && l.dependencies !== null && au(l.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, p, o), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        p,
        o
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = p), u.props = a, u.state = p, u.context = o, a = j) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && x === l.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Su(l, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, t = a && typeof t.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, l !== null && a ? (e.child = Vt(
      e,
      l.child,
      null,
      n
    ), e.child = Vt(
      e,
      null,
      t,
      n
    )) : Zl(l, e, t, n), e.memoizedState = u.state, l = e.child) : l = ke(
      l,
      e,
      n
    ), l;
  }
  function Pr(l, e, t, a) {
    return Yt(), e.flags |= 256, Zl(l, e, t, a), e.child;
  }
  var Nc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ec(l) {
    return { baseLanes: l, cachePool: Xf() };
  }
  function _c(l, e, t) {
    return l = l !== null ? l.childLanes & ~t : 0, e && (l |= he), l;
  }
  function l0(l, e, t) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (El.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, l === null) {
      if (tl) {
        if (n ? vt(e) : gt(), (l = bl) ? (l = sd(
          l,
          Ne
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (e.memoizedState = {
          dehydrated: l,
          treeContext: st !== null ? { id: He, overflow: qe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = wf(l), t.return = e, e.child = t, Bl = e, bl = null)) : l = null, l === null) throw rt(e);
        return ss(l) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (gt(), n = e.mode, s = ju(
        { mode: "hidden", children: s },
        n
      ), a = Bt(
        a,
        n,
        t,
        null
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = Ec(t), a.childLanes = _c(
        l,
        i,
        t
      ), e.memoizedState = Nc, mn(null, a)) : (vt(e), Tc(e, s));
    }
    var o = l.memoizedState;
    if (o !== null && (s = o.dehydrated, s !== null)) {
      if (u)
        e.flags & 256 ? (vt(e), e.flags &= -257, e = Ac(
          l,
          e,
          t
        )) : e.memoizedState !== null ? (gt(), e.child = l.child, e.flags |= 128, e = null) : (gt(), s = a.fallback, n = e.mode, a = ju(
          { mode: "visible", children: a.children },
          n
        ), s = Bt(
          s,
          n,
          t,
          null
        ), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, Vt(
          e,
          l.child,
          null,
          t
        ), a = e.child, a.memoizedState = Ec(t), a.childLanes = _c(
          l,
          i,
          t
        ), e.memoizedState = Nc, e = mn(null, a));
      else if (vt(e), ss(s)) {
        if (i = s.nextSibling && s.nextSibling.dataset, i) var b = i.dgst;
        i = b, a = Error(r(419)), a.stack = "", a.digest = i, ln({ value: a, source: null, stack: null }), e = Ac(
          l,
          e,
          t
        );
      } else if (Ml || ha(l, e, t, !1), i = (t & l.childLanes) !== 0, Ml || i) {
        if (i = gl, i !== null && (a = Ys(i, t), a !== 0 && a !== o.retryLane))
          throw o.retryLane = a, qt(l, a), ae(i, l, a), Sc;
        cs(s) || Du(), e = Ac(
          l,
          e,
          t
        );
      } else
        cs(s) ? (e.flags |= 192, e.child = l.child, e = null) : (l = o.treeContext, bl = _e(
          s.nextSibling
        ), Bl = e, tl = !0, ft = null, Ne = !1, l !== null && Hf(e, l), e = Tc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (gt(), s = a.fallback, n = e.mode, o = l.child, b = o.sibling, a = Qe(o, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = o.subtreeFlags & 65011712, b !== null ? s = Qe(
      b,
      s
    ) : (s = Bt(
      s,
      n,
      t,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, mn(null, a), a = e.child, s = l.child.memoizedState, s === null ? s = Ec(t) : (n = s.cachePool, n !== null ? (o = Tl._currentValue, n = n.parent !== o ? { parent: o, pool: o } : n) : n = Xf(), s = {
      baseLanes: s.baseLanes | t,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = _c(
      l,
      i,
      t
    ), e.memoizedState = Nc, mn(l.child, a)) : (vt(e), t = l.child, l = t.sibling, t = Qe(t, {
      mode: "visible",
      children: a.children
    }), t.return = e, t.sibling = null, l !== null && (i = e.deletions, i === null ? (e.deletions = [l], e.flags |= 16) : i.push(l)), e.child = t, e.memoizedState = null, t);
  }
  function Tc(l, e) {
    return e = ju(
      { mode: "visible", children: e },
      l.mode
    ), e.return = l, l.child = e;
  }
  function ju(l, e) {
    return l = re(22, l, null, e), l.lanes = 0, l;
  }
  function Ac(l, e, t) {
    return Vt(e, l.child, null, t), l = Tc(
      e,
      e.pendingProps.children
    ), l.flags |= 2, e.memoizedState = null, l;
  }
  function e0(l, e, t) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e), Qi(l.return, e, t);
  }
  function Mc(l, e, t, a, n, u) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: t,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = t, i.tailMode = n, i.treeForkCount = u);
  }
  function t0(l, e, t) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = El.current, s = (i & 2) !== 0;
    if (s ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, U(El, i), Zl(l, e, a, t), a = tl ? Pa : 0, !s && l !== null && (l.flags & 128) !== 0)
      l: for (l = e.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && e0(l, t, e);
        else if (l.tag === 19)
          e0(l, t, e);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (n) {
      case "forwards":
        for (t = e.child, n = null; t !== null; )
          l = t.alternate, l !== null && du(l) === null && (n = t), t = t.sibling;
        t = n, t === null ? (n = e.child, e.child = null) : (n = t.sibling, t.sibling = null), Mc(
          e,
          !1,
          n,
          t,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, n = e.child, e.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && du(l) === null) {
            e.child = n;
            break;
          }
          l = n.sibling, n.sibling = t, t = n, n = l;
        }
        Mc(
          e,
          !0,
          t,
          null,
          u,
          a
        );
        break;
      case "together":
        Mc(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ke(l, e, t) {
    if (l !== null && (e.dependencies = l.dependencies), xt |= e.lanes, (t & e.childLanes) === 0)
      if (l !== null) {
        if (ha(
          l,
          e,
          t,
          !1
        ), (t & e.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && e.child !== l.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (l = e.child, t = Qe(l, l.pendingProps), e.child = t, t.return = e; l.sibling !== null; )
        l = l.sibling, t = t.sibling = Qe(l, l.pendingProps), t.return = e;
      t.sibling = null;
    }
    return e.child;
  }
  function Oc(l, e) {
    return (l.lanes & e) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && au(l)));
  }
  function Mm(l, e, t) {
    switch (e.tag) {
      case 3:
        Hl(e, e.stateNode.containerInfo), dt(e, Tl, l.memoizedState.cache), Yt();
        break;
      case 27:
      case 5:
        ol(e);
        break;
      case 4:
        Hl(e, e.stateNode.containerInfo);
        break;
      case 10:
        dt(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, ec(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (vt(e), e.flags |= 128, null) : (t & e.child.childLanes) !== 0 ? l0(l, e, t) : (vt(e), l = ke(
            l,
            e,
            t
          ), l !== null ? l.sibling : null);
        vt(e);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (t & e.childLanes) !== 0, a || (ha(
          l,
          e,
          t,
          !1
        ), a = (t & e.childLanes) !== 0), n) {
          if (a)
            return t0(
              l,
              e,
              t
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), U(El, El.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, $r(
          l,
          e,
          t,
          e.pendingProps
        );
      case 24:
        dt(e, Tl, l.memoizedState.cache);
    }
    return ke(l, e, t);
  }
  function a0(l, e, t) {
    if (l !== null)
      if (l.memoizedProps !== e.pendingProps)
        Ml = !0;
      else {
        if (!Oc(l, t) && (e.flags & 128) === 0)
          return Ml = !1, Mm(
            l,
            e,
            t
          );
        Ml = (l.flags & 131072) !== 0;
      }
    else
      Ml = !1, tl && (e.flags & 1048576) !== 0 && Cf(e, Pa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        l: {
          var a = e.pendingProps;
          if (l = Qt(e.elementType), e.type = l, typeof l == "function")
            Ci(l) ? (a = Jt(l, a), e.tag = 1, e = Ir(
              null,
              e,
              l,
              a,
              t
            )) : (e.tag = 0, e = jc(
              null,
              e,
              l,
              a,
              t
            ));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === Jl) {
                e.tag = 11, e = Vr(
                  null,
                  e,
                  l,
                  a,
                  t
                );
                break l;
              } else if (n === F) {
                e.tag = 14, e = Kr(
                  null,
                  e,
                  l,
                  a,
                  t
                );
                break l;
              }
            }
            throw e = Me(l) || l, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return jc(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 1:
        return a = e.type, n = Jt(
          a,
          e.pendingProps
        ), Ir(
          l,
          e,
          a,
          n,
          t
        );
      case 3:
        l: {
          if (Hl(
            e,
            e.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, Wi(l, e), sn(e, a, null, t);
          var i = e.memoizedState;
          if (a = i.cache, dt(e, Tl, a), a !== u.cache && Li(
            e,
            [Tl],
            t,
            !0
          ), cn(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Pr(
                l,
                e,
                a,
                t
              );
              break l;
            } else if (a !== n) {
              n = ze(
                Error(r(424)),
                e
              ), ln(n), e = Pr(
                l,
                e,
                a,
                t
              );
              break l;
            } else
              for (l = e.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, bl = _e(l.firstChild), Bl = e, tl = !0, ft = null, Ne = !0, t = $f(
                e,
                null,
                a,
                t
              ), e.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Yt(), a === n) {
              e = ke(
                l,
                e,
                t
              );
              break l;
            }
            Zl(l, e, a, t);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Su(l, e), l === null ? (t = hd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = t : tl || (t = e.type, l = e.pendingProps, a = Yu(
          W.current
        ).createElement(t), a[ql] = e, a[Fl] = l, Gl(a, t, l), wl(a), e.stateNode = a) : e.memoizedState = hd(
          e.type,
          l.memoizedProps,
          e.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ol(e), l === null && tl && (a = e.stateNode = dd(
          e.type,
          e.pendingProps,
          W.current
        ), Bl = e, Ne = !0, n = bl, Nt(e.type) ? (fs = n, bl = _e(a.firstChild)) : bl = n), Zl(
          l,
          e,
          e.pendingProps.children,
          t
        ), Su(l, e), l === null && (e.flags |= 4194304), e.child;
      case 5:
        return l === null && tl && ((n = a = bl) && (a = u1(
          a,
          e.type,
          e.pendingProps,
          Ne
        ), a !== null ? (e.stateNode = a, Bl = e, bl = _e(a.firstChild), Ne = !1, n = !0) : n = !1), n || rt(e)), ol(e), n = e.type, u = e.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, ns(n, u) ? a = null : i !== null && ns(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = ac(
          l,
          e,
          pm,
          null,
          null,
          t
        ), An._currentValue = n), Su(l, e), Zl(l, e, a, t), e.child;
      case 6:
        return l === null && tl && ((l = t = bl) && (t = i1(
          t,
          e.pendingProps,
          Ne
        ), t !== null ? (e.stateNode = t, Bl = e, bl = null, l = !0) : l = !1), l || rt(e)), null;
      case 13:
        return l0(l, e, t);
      case 4:
        return Hl(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, l === null ? e.child = Vt(
          e,
          null,
          a,
          t
        ) : Zl(l, e, a, t), e.child;
      case 11:
        return Vr(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 7:
        return Zl(
          l,
          e,
          e.pendingProps,
          t
        ), e.child;
      case 8:
        return Zl(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 12:
        return Zl(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 10:
        return a = e.pendingProps, dt(e, e.type, a.value), Zl(l, e, a.children, t), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Gt(e), n = Yl(n), a = a(n), e.flags |= 1, Zl(l, e, a, t), e.child;
      case 14:
        return Kr(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 15:
        return Jr(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 19:
        return t0(l, e, t);
      case 31:
        return Am(l, e, t);
      case 22:
        return $r(
          l,
          e,
          t,
          e.pendingProps
        );
      case 24:
        return Gt(e), a = Yl(Tl), l === null ? (n = Ji(), n === null && (n = gl, u = Vi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= t), n = u), e.memoizedState = { parent: a, cache: n }, ki(e), dt(e, Tl, n)) : ((l.lanes & t) !== 0 && (Wi(l, e), sn(e, null, null, t), cn()), n = l.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), dt(e, Tl, a)) : (a = u.cache, dt(e, Tl, a), a !== n.cache && Li(
          e,
          [Tl],
          t,
          !0
        ))), Zl(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function We(l) {
    l.flags |= 4;
  }
  function Rc(l, e, t, a, n) {
    if ((e = (l.mode & 32) !== 0) && (e = !1), e) {
      if (l.flags |= 16777216, (n & 335544128) === n)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (O0()) l.flags |= 8192;
        else
          throw Lt = cu, $i;
    } else l.flags &= -16777217;
  }
  function n0(l, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !xd(e))
      if (O0()) l.flags |= 8192;
      else
        throw Lt = cu, $i;
  }
  function Nu(l, e) {
    e !== null && (l.flags |= 4), l.flags & 16384 && (e = l.tag !== 22 ? Hs() : 536870912, l.lanes |= e, _a |= e);
  }
  function hn(l, e) {
    if (!tl)
      switch (l.tailMode) {
        case "hidden":
          e = l.tail;
          for (var t = null; e !== null; )
            e.alternate !== null && (t = e), e = e.sibling;
          t === null ? l.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function xl(l) {
    var e = l.alternate !== null && l.alternate.child === l.child, t = 0, a = 0;
    if (e)
      for (var n = l.child; n !== null; )
        t |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null; )
        t |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = t, e;
  }
  function Om(l, e, t) {
    var a = e.pendingProps;
    switch (Yi(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xl(e), null;
      case 1:
        return xl(e), null;
      case 3:
        return t = e.stateNode, a = null, l !== null && (a = l.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ke(Tl), C(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (l === null || l.child === null) && (ma(e) ? We(e) : l === null || l.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Gi())), xl(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return l === null ? (We(e), u !== null ? (xl(e), n0(e, u)) : (xl(e), Rc(
          e,
          n,
          null,
          a,
          t
        ))) : u ? u !== l.memoizedState ? (We(e), xl(e), n0(e, u)) : (xl(e), e.flags &= -16777217) : (l = l.memoizedProps, l !== a && We(e), xl(e), Rc(
          e,
          n,
          l,
          a,
          t
        )), null;
      case 27:
        if (nl(e), t = W.current, n = e.type, l !== null && e.stateNode != null)
          l.memoizedProps !== a && We(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return xl(e), null;
          }
          l = H.current, ma(e) ? qf(e) : (l = dd(n, a, t), e.stateNode = l, We(e));
        }
        return xl(e), null;
      case 5:
        if (nl(e), n = e.type, l !== null && e.stateNode != null)
          l.memoizedProps !== a && We(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return xl(e), null;
          }
          if (u = H.current, ma(e))
            qf(e);
          else {
            var i = Yu(
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
            u[ql] = e, u[Fl] = a;
            l: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
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
            a && We(e);
          }
        }
        return xl(e), Rc(
          e,
          e.type,
          l === null ? null : l.memoizedProps,
          e.pendingProps,
          t
        ), null;
      case 6:
        if (l && e.stateNode != null)
          l.memoizedProps !== a && We(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (l = W.current, ma(e)) {
            if (l = e.stateNode, t = e.memoizedProps, a = null, n = Bl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            l[ql] = e, l = !!(l.nodeValue === t || a !== null && a.suppressHydrationWarning === !0 || ld(l.nodeValue, t)), l || rt(e, !0);
          } else
            l = Yu(l).createTextNode(
              a
            ), l[ql] = e, e.stateNode = l;
        }
        return xl(e), null;
      case 31:
        if (t = e.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ma(e), t !== null) {
            if (l === null) {
              if (!a) throw Error(r(318));
              if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
              l[ql] = e;
            } else
              Yt(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            xl(e), l = !1;
          } else
            t = Gi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = t), l = !0;
          if (!l)
            return e.flags & 256 ? (oe(e), e) : (oe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return xl(e), null;
      case 13:
        if (a = e.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = ma(e), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(r(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[ql] = e;
            } else
              Yt(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            xl(e), n = !1;
          } else
            n = Gi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (oe(e), e) : (oe(e), null);
        }
        return oe(e), (e.flags & 128) !== 0 ? (e.lanes = t, e) : (t = a !== null, l = l !== null && l.memoizedState !== null, t && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), t !== l && t && (e.child.flags |= 8192), Nu(e, e.updateQueue), xl(e), null);
      case 4:
        return C(), l === null && Pc(e.stateNode.containerInfo), xl(e), null;
      case 10:
        return Ke(e.type), xl(e), null;
      case 19:
        if (_(El), a = e.memoizedState, a === null) return xl(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) hn(a, !1);
          else {
            if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = e.child; l !== null; ) {
                if (u = du(l), u !== null) {
                  for (e.flags |= 128, hn(a, !1), l = u.updateQueue, e.updateQueue = l, Nu(e, l), e.subtreeFlags = 0, l = t, t = e.child; t !== null; )
                    Df(t, l), t = t.sibling;
                  return U(
                    El,
                    El.current & 1 | 2
                  ), tl && Le(e, a.treeForkCount), e.child;
                }
                l = l.sibling;
              }
            a.tail !== null && ie() > Mu && (e.flags |= 128, n = !0, hn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (l = du(u), l !== null) {
              if (e.flags |= 128, n = !0, l = l.updateQueue, e.updateQueue = l, Nu(e, l), hn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !tl)
                return xl(e), null;
            } else
              2 * ie() - a.renderingStartTime > Mu && t !== 536870912 && (e.flags |= 128, n = !0, hn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (l = a.last, l !== null ? l.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ie(), l.sibling = null, t = El.current, U(
          El,
          n ? t & 1 | 2 : t & 1
        ), tl && Le(e, a.treeForkCount), l) : (xl(e), null);
      case 22:
      case 23:
        return oe(e), lc(), a = e.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (t & 536870912) !== 0 && (e.flags & 128) === 0 && (xl(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : xl(e), t = e.updateQueue, t !== null && Nu(e, t.retryQueue), t = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== t && (e.flags |= 2048), l !== null && _(Xt), null;
      case 24:
        return t = null, l !== null && (t = l.memoizedState.cache), e.memoizedState.cache !== t && (e.flags |= 2048), Ke(Tl), xl(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Rm(l, e) {
    switch (Yi(e), e.tag) {
      case 1:
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 3:
        return Ke(Tl), C(), l = e.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (e.flags = l & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return nl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (oe(e), e.alternate === null)
            throw Error(r(340));
          Yt();
        }
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 13:
        if (oe(e), l = e.memoizedState, l !== null && l.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Yt();
        }
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 19:
        return _(El), null;
      case 4:
        return C(), null;
      case 10:
        return Ke(e.type), null;
      case 22:
      case 23:
        return oe(e), lc(), l !== null && _(Xt), l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 24:
        return Ke(Tl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function u0(l, e) {
    switch (Yi(e), e.tag) {
      case 3:
        Ke(Tl), C();
        break;
      case 26:
      case 27:
      case 5:
        nl(e);
        break;
      case 4:
        C();
        break;
      case 31:
        e.memoizedState !== null && oe(e);
        break;
      case 13:
        oe(e);
        break;
      case 19:
        _(El);
        break;
      case 10:
        Ke(e.type);
        break;
      case 22:
      case 23:
        oe(e), lc(), l !== null && _(Xt);
        break;
      case 24:
        Ke(Tl);
    }
  }
  function vn(l, e) {
    try {
      var t = e.updateQueue, a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        t = n;
        do {
          if ((t.tag & l) === l) {
            a = void 0;
            var u = t.create, i = t.inst;
            a = u(), i.destroy = a;
          }
          t = t.next;
        } while (t !== n);
      }
    } catch (s) {
      dl(e, e.return, s);
    }
  }
  function yt(l, e, t) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, s = i.destroy;
            if (s !== void 0) {
              i.destroy = void 0, n = e;
              var o = t, b = s;
              try {
                b();
              } catch (j) {
                dl(
                  n,
                  o,
                  j
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (j) {
      dl(e, e.return, j);
    }
  }
  function i0(l) {
    var e = l.updateQueue;
    if (e !== null) {
      var t = l.stateNode;
      try {
        Wf(e, t);
      } catch (a) {
        dl(l, l.return, a);
      }
    }
  }
  function c0(l, e, t) {
    t.props = Jt(
      l.type,
      l.memoizedProps
    ), t.state = l.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (a) {
      dl(l, e, a);
    }
  }
  function gn(l, e) {
    try {
      var t = l.ref;
      if (t !== null) {
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
        typeof t == "function" ? l.refCleanup = t(a) : t.current = a;
      }
    } catch (n) {
      dl(l, e, n);
    }
  }
  function Be(l, e) {
    var t = l.ref, a = l.refCleanup;
    if (t !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          dl(l, e, n);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (n) {
          dl(l, e, n);
        }
      else t.current = null;
  }
  function s0(l) {
    var e = l.type, t = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && a.focus();
          break l;
        case "img":
          t.src ? a.src = t.src : t.srcSet && (a.srcset = t.srcSet);
      }
    } catch (n) {
      dl(l, l.return, n);
    }
  }
  function Dc(l, e, t) {
    try {
      var a = l.stateNode;
      Pm(a, l.type, t, e), a[Fl] = e;
    } catch (n) {
      dl(l, l.return, n);
    }
  }
  function f0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Nt(l.type) || l.tag === 4;
  }
  function wc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || f0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Nt(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Uc(l, e, t) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, e ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(l, e) : (e = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.appendChild(l), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Ge));
    else if (a !== 4 && (a === 27 && Nt(l.type) && (t = l.stateNode, e = null), l = l.child, l !== null))
      for (Uc(l, e, t), l = l.sibling; l !== null; )
        Uc(l, e, t), l = l.sibling;
  }
  function Eu(l, e, t) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, e ? t.insertBefore(l, e) : t.appendChild(l);
    else if (a !== 4 && (a === 27 && Nt(l.type) && (t = l.stateNode), l = l.child, l !== null))
      for (Eu(l, e, t), l = l.sibling; l !== null; )
        Eu(l, e, t), l = l.sibling;
  }
  function r0(l) {
    var e = l.stateNode, t = l.memoizedProps;
    try {
      for (var a = l.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Gl(e, a, t), e[ql] = l, e[Fl] = t;
    } catch (u) {
      dl(l, l.return, u);
    }
  }
  var Fe = !1, Ol = !1, Cc = !1, d0 = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
  function Dm(l, e) {
    if (l = l.containerInfo, ts = Ku, l = jf(l), Ai(l)) {
      if ("selectionStart" in l)
        var t = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          t = (t = l.ownerDocument) && t.defaultView || window;
          var a = t.getSelection && t.getSelection();
          if (a && a.rangeCount !== 0) {
            t = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break l;
            }
            var i = 0, s = -1, o = -1, b = 0, j = 0, T = l, x = null;
            e: for (; ; ) {
              for (var p; T !== t || n !== 0 && T.nodeType !== 3 || (s = i + n), T !== u || a !== 0 && T.nodeType !== 3 || (o = i + a), T.nodeType === 3 && (i += T.nodeValue.length), (p = T.firstChild) !== null; )
                x = T, T = p;
              for (; ; ) {
                if (T === l) break e;
                if (x === t && ++b === n && (s = i), x === u && ++j === a && (o = i), (p = T.nextSibling) !== null) break;
                T = x, x = T.parentNode;
              }
              T = p;
            }
            t = s === -1 || o === -1 ? null : { start: s, end: o };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (as = { focusedElem: l, selectionRange: t }, Ku = !1, Ul = e; Ul !== null; )
      if (e = Ul, l = e.child, (e.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = e, Ul = l;
      else
        for (; Ul !== null; ) {
          switch (e = Ul, u = e.alternate, l = e.flags, e.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (t = 0; t < l.length; t++)
                  n = l[t], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                l = void 0, t = e, n = u.memoizedProps, u = u.memoizedState, a = t.stateNode;
                try {
                  var q = Jt(
                    t.type,
                    n
                  );
                  l = a.getSnapshotBeforeUpdate(
                    q,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Q) {
                  dl(
                    t,
                    t.return,
                    Q
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = e.stateNode.containerInfo, t = l.nodeType, t === 9)
                  is(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      is(l);
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
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = e.sibling, l !== null) {
            l.return = e.return, Ul = l;
            break;
          }
          Ul = e.return;
        }
  }
  function o0(l, e, t) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pe(l, t), a & 4 && vn(5, t);
        break;
      case 1:
        if (Pe(l, t), a & 4)
          if (l = t.stateNode, e === null)
            try {
              l.componentDidMount();
            } catch (i) {
              dl(t, t.return, i);
            }
          else {
            var n = Jt(
              t.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              l.componentDidUpdate(
                n,
                e,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              dl(
                t,
                t.return,
                i
              );
            }
          }
        a & 64 && i0(t), a & 512 && gn(t, t.return);
        break;
      case 3:
        if (Pe(l, t), a & 64 && (l = t.updateQueue, l !== null)) {
          if (e = null, t.child !== null)
            switch (t.child.tag) {
              case 27:
              case 5:
                e = t.child.stateNode;
                break;
              case 1:
                e = t.child.stateNode;
            }
          try {
            Wf(l, e);
          } catch (i) {
            dl(t, t.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && r0(t);
      case 26:
      case 5:
        Pe(l, t), e === null && a & 4 && s0(t), a & 512 && gn(t, t.return);
        break;
      case 12:
        Pe(l, t);
        break;
      case 31:
        Pe(l, t), a & 4 && v0(l, t);
        break;
      case 13:
        Pe(l, t), a & 4 && g0(l, t), a & 64 && (l = t.memoizedState, l !== null && (l = l.dehydrated, l !== null && (t = Gm.bind(
          null,
          t
        ), c1(l, t))));
        break;
      case 22:
        if (a = t.memoizedState !== null || Fe, !a) {
          e = e !== null && e.memoizedState !== null || Ol, n = Fe;
          var u = Ol;
          Fe = a, (Ol = e) && !u ? lt(
            l,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : Pe(l, t), Fe = n, Ol = u;
        }
        break;
      case 30:
        break;
      default:
        Pe(l, t);
    }
  }
  function m0(l) {
    var e = l.alternate;
    e !== null && (l.alternate = null, m0(e)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (e = l.stateNode, e !== null && di(e)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var zl = null, Pl = !1;
  function Ie(l, e, t) {
    for (t = t.child; t !== null; )
      h0(l, e, t), t = t.sibling;
  }
  function h0(l, e, t) {
    if (ce && typeof ce.onCommitFiberUnmount == "function")
      try {
        ce.onCommitFiberUnmount(Ya, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        Ol || Be(t, e), Ie(
          l,
          e,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        Ol || Be(t, e);
        var a = zl, n = Pl;
        Nt(t.type) && (zl = t.stateNode, Pl = !1), Ie(
          l,
          e,
          t
        ), En(t.stateNode), zl = a, Pl = n;
        break;
      case 5:
        Ol || Be(t, e);
      case 6:
        if (a = zl, n = Pl, zl = null, Ie(
          l,
          e,
          t
        ), zl = a, Pl = n, zl !== null)
          if (Pl)
            try {
              (zl.nodeType === 9 ? zl.body : zl.nodeName === "HTML" ? zl.ownerDocument.body : zl).removeChild(t.stateNode);
            } catch (u) {
              dl(
                t,
                e,
                u
              );
            }
          else
            try {
              zl.removeChild(t.stateNode);
            } catch (u) {
              dl(
                t,
                e,
                u
              );
            }
        break;
      case 18:
        zl !== null && (Pl ? (l = zl, id(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          t.stateNode
        ), Ua(l)) : id(zl, t.stateNode));
        break;
      case 4:
        a = zl, n = Pl, zl = t.stateNode.containerInfo, Pl = !0, Ie(
          l,
          e,
          t
        ), zl = a, Pl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yt(2, t, e), Ol || yt(4, t, e), Ie(
          l,
          e,
          t
        );
        break;
      case 1:
        Ol || (Be(t, e), a = t.stateNode, typeof a.componentWillUnmount == "function" && c0(
          t,
          e,
          a
        )), Ie(
          l,
          e,
          t
        );
        break;
      case 21:
        Ie(
          l,
          e,
          t
        );
        break;
      case 22:
        Ol = (a = Ol) || t.memoizedState !== null, Ie(
          l,
          e,
          t
        ), Ol = a;
        break;
      default:
        Ie(
          l,
          e,
          t
        );
    }
  }
  function v0(l, e) {
    if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ua(l);
      } catch (t) {
        dl(e, e.return, t);
      }
    }
  }
  function g0(l, e) {
    if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ua(l);
      } catch (t) {
        dl(e, e.return, t);
      }
  }
  function wm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var e = l.stateNode;
        return e === null && (e = l.stateNode = new d0()), e;
      case 22:
        return l = l.stateNode, e = l._retryCache, e === null && (e = l._retryCache = new d0()), e;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function _u(l, e) {
    var t = wm(l);
    e.forEach(function(a) {
      if (!t.has(a)) {
        t.add(a);
        var n = Xm.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function le(l, e) {
    var t = e.deletions;
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var n = t[a], u = l, i = e, s = i;
        l: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Nt(s.type)) {
                zl = s.stateNode, Pl = !1;
                break l;
              }
              break;
            case 5:
              zl = s.stateNode, Pl = !1;
              break l;
            case 3:
            case 4:
              zl = s.stateNode.containerInfo, Pl = !0;
              break l;
          }
          s = s.return;
        }
        if (zl === null) throw Error(r(160));
        h0(u, i, n), zl = null, Pl = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        y0(e, l), e = e.sibling;
  }
  var De = null;
  function y0(l, e) {
    var t = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        le(e, l), ee(l), a & 4 && (yt(3, l, l.return), vn(3, l), yt(5, l, l.return));
        break;
      case 1:
        le(e, l), ee(l), a & 512 && (Ol || t === null || Be(t, t.return)), a & 64 && Fe && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (t = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
        break;
      case 26:
        var n = De;
        if (le(e, l), ee(l), a & 512 && (Ol || t === null || Be(t, t.return)), a & 4) {
          var u = t !== null ? t.memoizedState : null;
          if (a = l.memoizedState, t === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, t = l.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Xa] || u[ql] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Gl(u, a, t), u[ql] = l, wl(u), a = u;
                      break l;
                    case "link":
                      var i = yd(
                        "link",
                        "href",
                        n
                      ).get(a + (t.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && u.getAttribute("rel") === (t.rel == null ? null : t.rel) && u.getAttribute("title") === (t.title == null ? null : t.title) && u.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Gl(u, a, t), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = yd(
                        "meta",
                        "content",
                        n
                      ).get(a + (t.content || ""))) {
                        for (s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("content") === (t.content == null ? null : "" + t.content) && u.getAttribute("name") === (t.name == null ? null : t.name) && u.getAttribute("property") === (t.property == null ? null : t.property) && u.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && u.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Gl(u, a, t), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  u[ql] = l, wl(u), a = u;
                }
                l.stateNode = a;
              } else
                bd(
                  n,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = gd(
                n,
                a,
                l.memoizedProps
              );
          else
            u !== a ? (u === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : u.count--, a === null ? bd(
              n,
              l.type,
              l.stateNode
            ) : gd(
              n,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Dc(
              l,
              l.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        le(e, l), ee(l), a & 512 && (Ol || t === null || Be(t, t.return)), t !== null && a & 4 && Dc(
          l,
          l.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (le(e, l), ee(l), a & 512 && (Ol || t === null || Be(t, t.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            aa(n, "");
          } catch (q) {
            dl(l, l.return, q);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, Dc(
          l,
          n,
          t !== null ? t.memoizedProps : n
        )), a & 1024 && (Cc = !0);
        break;
      case 6:
        if (le(e, l), ee(l), a & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          a = l.memoizedProps, t = l.stateNode;
          try {
            t.nodeValue = a;
          } catch (q) {
            dl(l, l.return, q);
          }
        }
        break;
      case 3:
        if (Xu = null, n = De, De = Zu(e.containerInfo), le(e, l), De = n, ee(l), a & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Ua(e.containerInfo);
          } catch (q) {
            dl(l, l.return, q);
          }
        Cc && (Cc = !1, b0(l));
        break;
      case 4:
        a = De, De = Zu(
          l.stateNode.containerInfo
        ), le(e, l), ee(l), De = a;
        break;
      case 12:
        le(e, l), ee(l);
        break;
      case 31:
        le(e, l), ee(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, _u(l, a)));
        break;
      case 13:
        le(e, l), ee(l), l.child.flags & 8192 && l.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Au = ie()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, _u(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var o = t !== null && t.memoizedState !== null, b = Fe, j = Ol;
        if (Fe = b || n, Ol = j || o, le(e, l), Ol = j, Fe = b, ee(l), a & 8192)
          l: for (e = l.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (t === null || o || Fe || Ol || $t(l)), t = null, e = l; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (t === null) {
                o = t = e;
                try {
                  if (u = o.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    s = o.stateNode;
                    var T = o.memoizedProps.style, x = T != null && T.hasOwnProperty("display") ? T.display : null;
                    s.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (q) {
                  dl(o, o.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (t === null) {
                o = e;
                try {
                  o.stateNode.nodeValue = n ? "" : o.memoizedProps;
                } catch (q) {
                  dl(o, o.return, q);
                }
              }
            } else if (e.tag === 18) {
              if (t === null) {
                o = e;
                try {
                  var p = o.stateNode;
                  n ? cd(p, !0) : cd(o.stateNode, !1);
                } catch (q) {
                  dl(o, o.return, q);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === l) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === l) break l;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === l) break l;
              t === e && (t = null), e = e.return;
            }
            t === e && (t = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (t = a.retryQueue, t !== null && (a.retryQueue = null, _u(l, t))));
        break;
      case 19:
        le(e, l), ee(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, _u(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        le(e, l), ee(l);
    }
  }
  function ee(l) {
    var e = l.flags;
    if (e & 2) {
      try {
        for (var t, a = l.return; a !== null; ) {
          if (f0(a)) {
            t = a;
            break;
          }
          a = a.return;
        }
        if (t == null) throw Error(r(160));
        switch (t.tag) {
          case 27:
            var n = t.stateNode, u = wc(l);
            Eu(l, u, n);
            break;
          case 5:
            var i = t.stateNode;
            t.flags & 32 && (aa(i, ""), t.flags &= -33);
            var s = wc(l);
            Eu(l, s, i);
            break;
          case 3:
          case 4:
            var o = t.stateNode.containerInfo, b = wc(l);
            Uc(
              l,
              b,
              o
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (j) {
        dl(l, l.return, j);
      }
      l.flags &= -3;
    }
    e & 4096 && (l.flags &= -4097);
  }
  function b0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var e = l;
        b0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), l = l.sibling;
      }
  }
  function Pe(l, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        o0(l, e.alternate, e), e = e.sibling;
  }
  function $t(l) {
    for (l = l.child; l !== null; ) {
      var e = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yt(4, e, e.return), $t(e);
          break;
        case 1:
          Be(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && c0(
            e,
            e.return,
            t
          ), $t(e);
          break;
        case 27:
          En(e.stateNode);
        case 26:
        case 5:
          Be(e, e.return), $t(e);
          break;
        case 22:
          e.memoizedState === null && $t(e);
          break;
        case 30:
          $t(e);
          break;
        default:
          $t(e);
      }
      l = l.sibling;
    }
  }
  function lt(l, e, t) {
    for (t = t && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = l, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          lt(
            n,
            u,
            t
          ), vn(4, u);
          break;
        case 1:
          if (lt(
            n,
            u,
            t
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (b) {
              dl(a, a.return, b);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                  kf(o[n], s);
            } catch (b) {
              dl(a, a.return, b);
            }
          }
          t && i & 64 && i0(u), gn(u, u.return);
          break;
        case 27:
          r0(u);
        case 26:
        case 5:
          lt(
            n,
            u,
            t
          ), t && a === null && i & 4 && s0(u), gn(u, u.return);
          break;
        case 12:
          lt(
            n,
            u,
            t
          );
          break;
        case 31:
          lt(
            n,
            u,
            t
          ), t && i & 4 && v0(n, u);
          break;
        case 13:
          lt(
            n,
            u,
            t
          ), t && i & 4 && g0(n, u);
          break;
        case 22:
          u.memoizedState === null && lt(
            n,
            u,
            t
          ), gn(u, u.return);
          break;
        case 30:
          break;
        default:
          lt(
            n,
            u,
            t
          );
      }
      e = e.sibling;
    }
  }
  function Hc(l, e) {
    var t = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== t && (l != null && l.refCount++, t != null && en(t));
  }
  function qc(l, e) {
    l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && en(l));
  }
  function we(l, e, t, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        x0(
          l,
          e,
          t,
          a
        ), e = e.sibling;
  }
  function x0(l, e, t, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        we(
          l,
          e,
          t,
          a
        ), n & 2048 && vn(9, e);
        break;
      case 1:
        we(
          l,
          e,
          t,
          a
        );
        break;
      case 3:
        we(
          l,
          e,
          t,
          a
        ), n & 2048 && (l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && en(l)));
        break;
      case 12:
        if (n & 2048) {
          we(
            l,
            e,
            t,
            a
          ), l = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, s = u.onPostCommit;
            typeof s == "function" && s(
              i,
              e.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (o) {
            dl(e, e.return, o);
          }
        } else
          we(
            l,
            e,
            t,
            a
          );
        break;
      case 31:
        we(
          l,
          e,
          t,
          a
        );
        break;
      case 13:
        we(
          l,
          e,
          t,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? we(
          l,
          e,
          t,
          a
        ) : yn(l, e) : u._visibility & 2 ? we(
          l,
          e,
          t,
          a
        ) : (u._visibility |= 2, ja(
          l,
          e,
          t,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Hc(i, e);
        break;
      case 24:
        we(
          l,
          e,
          t,
          a
        ), n & 2048 && qc(e.alternate, e);
        break;
      default:
        we(
          l,
          e,
          t,
          a
        );
    }
  }
  function ja(l, e, t, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = l, i = e, s = t, o = a, b = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ja(
            u,
            i,
            s,
            o,
            n
          ), vn(8, i);
          break;
        case 23:
          break;
        case 22:
          var j = i.stateNode;
          i.memoizedState !== null ? j._visibility & 2 ? ja(
            u,
            i,
            s,
            o,
            n
          ) : yn(
            u,
            i
          ) : (j._visibility |= 2, ja(
            u,
            i,
            s,
            o,
            n
          )), n && b & 2048 && Hc(
            i.alternate,
            i
          );
          break;
        case 24:
          ja(
            u,
            i,
            s,
            o,
            n
          ), n && b & 2048 && qc(i.alternate, i);
          break;
        default:
          ja(
            u,
            i,
            s,
            o,
            n
          );
      }
      e = e.sibling;
    }
  }
  function yn(l, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var t = l, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            yn(t, a), n & 2048 && Hc(
              a.alternate,
              a
            );
            break;
          case 24:
            yn(t, a), n & 2048 && qc(a.alternate, a);
            break;
          default:
            yn(t, a);
        }
        e = e.sibling;
      }
  }
  var bn = 8192;
  function Na(l, e, t) {
    if (l.subtreeFlags & bn)
      for (l = l.child; l !== null; )
        p0(
          l,
          e,
          t
        ), l = l.sibling;
  }
  function p0(l, e, t) {
    switch (l.tag) {
      case 26:
        Na(
          l,
          e,
          t
        ), l.flags & bn && l.memoizedState !== null && x1(
          t,
          De,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Na(
          l,
          e,
          t
        );
        break;
      case 3:
      case 4:
        var a = De;
        De = Zu(l.stateNode.containerInfo), Na(
          l,
          e,
          t
        ), De = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = bn, bn = 16777216, Na(
          l,
          e,
          t
        ), bn = a) : Na(
          l,
          e,
          t
        ));
        break;
      default:
        Na(
          l,
          e,
          t
        );
    }
  }
  function z0(l) {
    var e = l.alternate;
    if (e !== null && (l = e.child, l !== null)) {
      e.child = null;
      do
        e = l.sibling, l.sibling = null, l = e;
      while (l !== null);
    }
  }
  function xn(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          Ul = a, j0(
            a,
            l
          );
        }
      z0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        S0(l), l = l.sibling;
  }
  function S0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        xn(l), l.flags & 2048 && yt(9, l, l.return);
        break;
      case 3:
        xn(l);
        break;
      case 12:
        xn(l);
        break;
      case 22:
        var e = l.stateNode;
        l.memoizedState !== null && e._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (e._visibility &= -3, Tu(l)) : xn(l);
        break;
      default:
        xn(l);
    }
  }
  function Tu(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          Ul = a, j0(
            a,
            l
          );
        }
      z0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (e = l, e.tag) {
        case 0:
        case 11:
        case 15:
          yt(8, e, e.return), Tu(e);
          break;
        case 22:
          t = e.stateNode, t._visibility & 2 && (t._visibility &= -3, Tu(e));
          break;
        default:
          Tu(e);
      }
      l = l.sibling;
    }
  }
  function j0(l, e) {
    for (; Ul !== null; ) {
      var t = Ul;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          yt(8, t, e);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var a = t.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          en(t.memoizedState.cache);
      }
      if (a = t.child, a !== null) a.return = t, Ul = a;
      else
        l: for (t = l; Ul !== null; ) {
          a = Ul;
          var n = a.sibling, u = a.return;
          if (m0(a), a === t) {
            Ul = null;
            break l;
          }
          if (n !== null) {
            n.return = u, Ul = n;
            break l;
          }
          Ul = u;
        }
    }
  }
  var Um = {
    getCacheForType: function(l) {
      var e = Yl(Tl), t = e.data.get(l);
      return t === void 0 && (t = l(), e.data.set(l, t)), t;
    },
    cacheSignal: function() {
      return Yl(Tl).controller.signal;
    }
  }, Cm = typeof WeakMap == "function" ? WeakMap : Map, fl = 0, gl = null, I = null, ll = 0, rl = 0, me = null, bt = !1, Ea = !1, Bc = !1, et = 0, Nl = 0, xt = 0, kt = 0, Yc = 0, he = 0, _a = 0, pn = null, te = null, Zc = !1, Au = 0, N0 = 0, Mu = 1 / 0, Ou = null, pt = null, Rl = 0, zt = null, Ta = null, tt = 0, Gc = 0, Xc = null, E0 = null, zn = 0, Qc = null;
  function ve() {
    return (fl & 2) !== 0 && ll !== 0 ? ll & -ll : N.T !== null ? kc() : Zs();
  }
  function _0() {
    if (he === 0)
      if ((ll & 536870912) === 0 || tl) {
        var l = Bn;
        Bn <<= 1, (Bn & 3932160) === 0 && (Bn = 262144), he = l;
      } else he = 536870912;
    return l = de.current, l !== null && (l.flags |= 32), he;
  }
  function ae(l, e, t) {
    (l === gl && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) && (Aa(l, 0), St(
      l,
      ll,
      he,
      !1
    )), Ga(l, t), ((fl & 2) === 0 || l !== gl) && (l === gl && ((fl & 2) === 0 && (kt |= t), Nl === 4 && St(
      l,
      ll,
      he,
      !1
    )), Ye(l));
  }
  function T0(l, e, t) {
    if ((fl & 6) !== 0) throw Error(r(327));
    var a = !t && (e & 127) === 0 && (e & l.expiredLanes) === 0 || Za(l, e), n = a ? Bm(l, e) : Vc(l, e, !0), u = a;
    do {
      if (n === 0) {
        Ea && !a && St(l, e, 0, !1);
        break;
      } else {
        if (t = l.current.alternate, u && !Hm(t)) {
          n = Vc(l, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, l.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            l: {
              var s = l;
              n = pn;
              var o = s.current.memoizedState.isDehydrated;
              if (o && (Aa(s, i).flags |= 256), i = Vc(
                s,
                i,
                !1
              ), i !== 2) {
                if (Bc && !o) {
                  s.errorRecoveryDisabledLanes |= u, kt |= u, n = 4;
                  break l;
                }
                u = te, te = n, u !== null && (te === null ? te = u : te.push.apply(
                  te,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Aa(l, 0), St(l, e, 0, !0);
          break;
        }
        l: {
          switch (a = l, u = n, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              St(
                a,
                e,
                he,
                !bt
              );
              break l;
            case 2:
              te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (n = Au + 300 - ie(), 10 < n)) {
            if (St(
              a,
              e,
              he,
              !bt
            ), Zn(a, 0, !0) !== 0) break l;
            tt = e, a.timeoutHandle = nd(
              A0.bind(
                null,
                a,
                t,
                te,
                Ou,
                Zc,
                e,
                he,
                kt,
                _a,
                bt,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break l;
          }
          A0(
            a,
            t,
            te,
            Ou,
            Zc,
            e,
            he,
            kt,
            _a,
            bt,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ye(l);
  }
  function A0(l, e, t, a, n, u, i, s, o, b, j, T, x, p) {
    if (l.timeoutHandle = -1, T = e.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ge
      }, p0(
        e,
        u,
        T
      );
      var q = (u & 62914560) === u ? Au - ie() : (u & 4194048) === u ? N0 - ie() : 0;
      if (q = p1(
        T,
        q
      ), q !== null) {
        tt = u, l.cancelPendingCommit = q(
          H0.bind(
            null,
            l,
            e,
            u,
            t,
            a,
            n,
            i,
            s,
            o,
            j,
            T,
            null,
            x,
            p
          )
        ), St(l, u, i, !b);
        return;
      }
    }
    H0(
      l,
      e,
      u,
      t,
      a,
      n,
      i,
      s,
      o
    );
  }
  function Hm(l) {
    for (var e = l; ; ) {
      var t = e.tag;
      if ((t === 0 || t === 11 || t === 15) && e.flags & 16384 && (t = e.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var a = 0; a < t.length; a++) {
          var n = t[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!fe(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (t = e.child, e.subtreeFlags & 16384 && t !== null)
        t.return = e, e = t;
      else {
        if (e === l) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === l) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function St(l, e, t, a) {
    e &= ~Yc, e &= ~kt, l.suspendedLanes |= e, l.pingedLanes &= ~e, a && (l.warmLanes |= e), a = l.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - se(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    t !== 0 && qs(l, t, e);
  }
  function Ru() {
    return (fl & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function Lc() {
    if (I !== null) {
      if (rl === 0)
        var l = I.return;
      else
        l = I, Ve = Zt = null, ic(l), ba = null, an = 0, l = I;
      for (; l !== null; )
        u0(l.alternate, l), l = l.return;
      I = null;
    }
  }
  function Aa(l, e) {
    var t = l.timeoutHandle;
    t !== -1 && (l.timeoutHandle = -1, t1(t)), t = l.cancelPendingCommit, t !== null && (l.cancelPendingCommit = null, t()), tt = 0, Lc(), gl = l, I = t = Qe(l.current, null), ll = e, rl = 0, me = null, bt = !1, Ea = Za(l, e), Bc = !1, _a = he = Yc = kt = xt = Nl = 0, te = pn = null, Zc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= e; 0 < a; ) {
        var n = 31 - se(a), u = 1 << n;
        e |= l[n], a &= ~u;
      }
    return et = e, In(), t;
  }
  function M0(l, e) {
    $ = null, N.H = on, e === ya || e === iu ? (e = Vf(), rl = 3) : e === $i ? (e = Vf(), rl = 4) : rl = e === Sc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, me = e, I === null && (Nl = 1, pu(
      l,
      ze(e, l.current)
    ));
  }
  function O0() {
    var l = de.current;
    return l === null ? !0 : (ll & 4194048) === ll ? Ee === null : (ll & 62914560) === ll || (ll & 536870912) !== 0 ? l === Ee : !1;
  }
  function R0() {
    var l = N.H;
    return N.H = on, l === null ? on : l;
  }
  function D0() {
    var l = N.A;
    return N.A = Um, l;
  }
  function Du() {
    Nl = 4, bt || (ll & 4194048) !== ll && de.current !== null || (Ea = !0), (xt & 134217727) === 0 && (kt & 134217727) === 0 || gl === null || St(
      gl,
      ll,
      he,
      !1
    );
  }
  function Vc(l, e, t) {
    var a = fl;
    fl |= 2;
    var n = R0(), u = D0();
    (gl !== l || ll !== e) && (Ou = null, Aa(l, e)), e = !1;
    var i = Nl;
    l: do
      try {
        if (rl !== 0 && I !== null) {
          var s = I, o = me;
          switch (rl) {
            case 8:
              Lc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              de.current === null && (e = !0);
              var b = rl;
              if (rl = 0, me = null, Ma(l, s, o, b), t && Ea) {
                i = 0;
                break l;
              }
              break;
            default:
              b = rl, rl = 0, me = null, Ma(l, s, o, b);
          }
        }
        qm(), i = Nl;
        break;
      } catch (j) {
        M0(l, j);
      }
    while (!0);
    return e && l.shellSuspendCounter++, Ve = Zt = null, fl = a, N.H = n, N.A = u, I === null && (gl = null, ll = 0, In()), i;
  }
  function qm() {
    for (; I !== null; ) w0(I);
  }
  function Bm(l, e) {
    var t = fl;
    fl |= 2;
    var a = R0(), n = D0();
    gl !== l || ll !== e ? (Ou = null, Mu = ie() + 500, Aa(l, e)) : Ea = Za(
      l,
      e
    );
    l: do
      try {
        if (rl !== 0 && I !== null) {
          e = I;
          var u = me;
          e: switch (rl) {
            case 1:
              rl = 0, me = null, Ma(l, e, u, 1);
              break;
            case 2:
            case 9:
              if (Qf(u)) {
                rl = 0, me = null, U0(e);
                break;
              }
              e = function() {
                rl !== 2 && rl !== 9 || gl !== l || (rl = 7), Ye(l);
              }, u.then(e, e);
              break l;
            case 3:
              rl = 7;
              break l;
            case 4:
              rl = 5;
              break l;
            case 7:
              Qf(u) ? (rl = 0, me = null, U0(e)) : (rl = 0, me = null, Ma(l, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (I.tag) {
                case 26:
                  i = I.memoizedState;
                case 5:
                case 27:
                  var s = I;
                  if (i ? xd(i) : s.stateNode.complete) {
                    rl = 0, me = null;
                    var o = s.sibling;
                    if (o !== null) I = o;
                    else {
                      var b = s.return;
                      b !== null ? (I = b, wu(b)) : I = null;
                    }
                    break e;
                  }
              }
              rl = 0, me = null, Ma(l, e, u, 5);
              break;
            case 6:
              rl = 0, me = null, Ma(l, e, u, 6);
              break;
            case 8:
              Lc(), Nl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        Ym();
        break;
      } catch (j) {
        M0(l, j);
      }
    while (!0);
    return Ve = Zt = null, N.H = a, N.A = n, fl = t, I !== null ? 0 : (gl = null, ll = 0, In(), Nl);
  }
  function Ym() {
    for (; I !== null && !co(); )
      w0(I);
  }
  function w0(l) {
    var e = a0(l.alternate, l, et);
    l.memoizedProps = l.pendingProps, e === null ? wu(l) : I = e;
  }
  function U0(l) {
    var e = l, t = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Fr(
          t,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ll
        );
        break;
      case 11:
        e = Fr(
          t,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ll
        );
        break;
      case 5:
        ic(e);
      default:
        u0(t, e), e = I = Df(e, et), e = a0(t, e, et);
    }
    l.memoizedProps = l.pendingProps, e === null ? wu(l) : I = e;
  }
  function Ma(l, e, t, a) {
    Ve = Zt = null, ic(e), ba = null, an = 0;
    var n = e.return;
    try {
      if (Tm(
        l,
        n,
        e,
        t,
        ll
      )) {
        Nl = 1, pu(
          l,
          ze(t, l.current)
        ), I = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw I = n, u;
      Nl = 1, pu(
        l,
        ze(t, l.current)
      ), I = null;
      return;
    }
    e.flags & 32768 ? (tl || a === 1 ? l = !0 : Ea || (ll & 536870912) !== 0 ? l = !1 : (bt = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = de.current, a !== null && a.tag === 13 && (a.flags |= 16384))), C0(e, l)) : wu(e);
  }
  function wu(l) {
    var e = l;
    do {
      if ((e.flags & 32768) !== 0) {
        C0(
          e,
          bt
        );
        return;
      }
      l = e.return;
      var t = Om(
        e.alternate,
        e,
        et
      );
      if (t !== null) {
        I = t;
        return;
      }
      if (e = e.sibling, e !== null) {
        I = e;
        return;
      }
      I = e = l;
    } while (e !== null);
    Nl === 0 && (Nl = 5);
  }
  function C0(l, e) {
    do {
      var t = Rm(l.alternate, l);
      if (t !== null) {
        t.flags &= 32767, I = t;
        return;
      }
      if (t = l.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !e && (l = l.sibling, l !== null)) {
        I = l;
        return;
      }
      I = l = t;
    } while (l !== null);
    Nl = 6, I = null;
  }
  function H0(l, e, t, a, n, u, i, s, o) {
    l.cancelPendingCommit = null;
    do
      Uu();
    while (Rl !== 0);
    if ((fl & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === l.current) throw Error(r(177));
      if (u = e.lanes | e.childLanes, u |= wi, bo(
        l,
        t,
        u,
        i,
        s,
        o
      ), l === gl && (I = gl = null, ll = 0), Ta = e, zt = l, tt = t, Gc = u, Xc = n, E0 = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Qm(Hn, function() {
        return G0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = N.T, N.T = null, n = w.p, w.p = 2, i = fl, fl |= 4;
        try {
          Dm(l, e, t);
        } finally {
          fl = i, w.p = n, N.T = a;
        }
      }
      Rl = 1, q0(), B0(), Y0();
    }
  }
  function q0() {
    if (Rl === 1) {
      Rl = 0;
      var l = zt, e = Ta, t = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || t) {
        t = N.T, N.T = null;
        var a = w.p;
        w.p = 2;
        var n = fl;
        fl |= 4;
        try {
          y0(e, l);
          var u = as, i = jf(l.containerInfo), s = u.focusedElem, o = u.selectionRange;
          if (i !== s && s && s.ownerDocument && Sf(
            s.ownerDocument.documentElement,
            s
          )) {
            if (o !== null && Ai(s)) {
              var b = o.start, j = o.end;
              if (j === void 0 && (j = b), "selectionStart" in s)
                s.selectionStart = b, s.selectionEnd = Math.min(
                  j,
                  s.value.length
                );
              else {
                var T = s.ownerDocument || document, x = T && T.defaultView || window;
                if (x.getSelection) {
                  var p = x.getSelection(), q = s.textContent.length, Q = Math.min(o.start, q), vl = o.end === void 0 ? Q : Math.min(o.end, q);
                  !p.extend && Q > vl && (i = vl, vl = Q, Q = i);
                  var g = zf(
                    s,
                    Q
                  ), m = zf(
                    s,
                    vl
                  );
                  if (g && m && (p.rangeCount !== 1 || p.anchorNode !== g.node || p.anchorOffset !== g.offset || p.focusNode !== m.node || p.focusOffset !== m.offset)) {
                    var y = T.createRange();
                    y.setStart(g.node, g.offset), p.removeAllRanges(), Q > vl ? (p.addRange(y), p.extend(m.node, m.offset)) : (y.setEnd(m.node, m.offset), p.addRange(y));
                  }
                }
              }
            }
            for (T = [], p = s; p = p.parentNode; )
              p.nodeType === 1 && T.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < T.length; s++) {
              var E = T[s];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          Ku = !!ts, as = ts = null;
        } finally {
          fl = n, w.p = a, N.T = t;
        }
      }
      l.current = e, Rl = 2;
    }
  }
  function B0() {
    if (Rl === 2) {
      Rl = 0;
      var l = zt, e = Ta, t = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || t) {
        t = N.T, N.T = null;
        var a = w.p;
        w.p = 2;
        var n = fl;
        fl |= 4;
        try {
          o0(l, e.alternate, e);
        } finally {
          fl = n, w.p = a, N.T = t;
        }
      }
      Rl = 3;
    }
  }
  function Y0() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, so();
      var l = zt, e = Ta, t = tt, a = E0;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, Ta = zt = null, Z0(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (pt = null), fi(t), e = e.stateNode, ce && typeof ce.onCommitFiberRoot == "function")
        try {
          ce.onCommitFiberRoot(
            Ya,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = N.T, n = w.p, w.p = 2, N.T = null;
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          N.T = e, w.p = n;
        }
      }
      (tt & 3) !== 0 && Uu(), Ye(l), n = l.pendingLanes, (t & 261930) !== 0 && (n & 42) !== 0 ? l === Qc ? zn++ : (zn = 0, Qc = l) : zn = 0, Sn(0);
    }
  }
  function Z0(l, e) {
    (l.pooledCacheLanes &= e) === 0 && (e = l.pooledCache, e != null && (l.pooledCache = null, en(e)));
  }
  function Uu() {
    return q0(), B0(), Y0(), G0();
  }
  function G0() {
    if (Rl !== 5) return !1;
    var l = zt, e = Gc;
    Gc = 0;
    var t = fi(tt), a = N.T, n = w.p;
    try {
      w.p = 32 > t ? 32 : t, N.T = null, t = Xc, Xc = null;
      var u = zt, i = tt;
      if (Rl = 0, Ta = zt = null, tt = 0, (fl & 6) !== 0) throw Error(r(331));
      var s = fl;
      if (fl |= 4, S0(u.current), x0(
        u,
        u.current,
        i,
        t
      ), fl = s, Sn(0, !1), ce && typeof ce.onPostCommitFiberRoot == "function")
        try {
          ce.onPostCommitFiberRoot(Ya, u);
        } catch {
        }
      return !0;
    } finally {
      w.p = n, N.T = a, Z0(l, e);
    }
  }
  function X0(l, e, t) {
    e = ze(t, e), e = zc(l.stateNode, e, 2), l = ht(l, e, 2), l !== null && (Ga(l, 2), Ye(l));
  }
  function dl(l, e, t) {
    if (l.tag === 3)
      X0(l, l, t);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          X0(
            e,
            l,
            t
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pt === null || !pt.has(a))) {
            l = ze(t, l), t = Qr(2), a = ht(e, t, 2), a !== null && (Lr(
              t,
              a,
              e,
              l
            ), Ga(a, 2), Ye(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Kc(l, e, t) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Cm();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(t) || (Bc = !0, n.add(t), l = Zm.bind(null, l, e, t), e.then(l, l));
  }
  function Zm(l, e, t) {
    var a = l.pingCache;
    a !== null && a.delete(e), l.pingedLanes |= l.suspendedLanes & t, l.warmLanes &= ~t, gl === l && (ll & t) === t && (Nl === 4 || Nl === 3 && (ll & 62914560) === ll && 300 > ie() - Au ? (fl & 2) === 0 && Aa(l, 0) : Yc |= t, _a === ll && (_a = 0)), Ye(l);
  }
  function Q0(l, e) {
    e === 0 && (e = Hs()), l = qt(l, e), l !== null && (Ga(l, e), Ye(l));
  }
  function Gm(l) {
    var e = l.memoizedState, t = 0;
    e !== null && (t = e.retryLane), Q0(l, t);
  }
  function Xm(l, e) {
    var t = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, n = l.memoizedState;
        n !== null && (t = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), Q0(l, t);
  }
  function Qm(l, e) {
    return ui(l, e);
  }
  var Cu = null, Oa = null, Jc = !1, Hu = !1, $c = !1, jt = 0;
  function Ye(l) {
    l !== Oa && l.next === null && (Oa === null ? Cu = Oa = l : Oa = Oa.next = l), Hu = !0, Jc || (Jc = !0, Vm());
  }
  function Sn(l, e) {
    if (!$c && Hu) {
      $c = !0;
      do
        for (var t = !1, a = Cu; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, s = a.pingedLanes;
              u = (1 << 31 - se(42 | l) + 1) - 1, u &= n & ~(i & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (t = !0, J0(a, u));
          } else
            u = ll, u = Zn(
              a,
              a === gl ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Za(a, u) || (t = !0, J0(a, u));
          a = a.next;
        }
      while (t);
      $c = !1;
    }
  }
  function Lm() {
    L0();
  }
  function L0() {
    Hu = Jc = !1;
    var l = 0;
    jt !== 0 && e1() && (l = jt);
    for (var e = ie(), t = null, a = Cu; a !== null; ) {
      var n = a.next, u = V0(a, e);
      u === 0 ? (a.next = null, t === null ? Cu = n : t.next = n, n === null && (Oa = t)) : (t = a, (l !== 0 || (u & 3) !== 0) && (Hu = !0)), a = n;
    }
    Rl !== 0 && Rl !== 5 || Sn(l), jt !== 0 && (jt = 0);
  }
  function V0(l, e) {
    for (var t = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - se(u), s = 1 << i, o = n[i];
      o === -1 ? ((s & t) === 0 || (s & a) !== 0) && (n[i] = yo(s, e)) : o <= e && (l.expiredLanes |= s), u &= ~s;
    }
    if (e = gl, t = ll, t = Zn(
      l,
      l === e ? t : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, t === 0 || l === e && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && ii(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((t & 3) === 0 || Za(l, t)) {
      if (e = t & -t, e === l.callbackPriority) return e;
      switch (a !== null && ii(a), fi(t)) {
        case 2:
        case 8:
          t = Us;
          break;
        case 32:
          t = Hn;
          break;
        case 268435456:
          t = Cs;
          break;
        default:
          t = Hn;
      }
      return a = K0.bind(null, l), t = ui(t, a), l.callbackPriority = e, l.callbackNode = t, e;
    }
    return a !== null && a !== null && ii(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function K0(l, e) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var t = l.callbackNode;
    if (Uu() && l.callbackNode !== t)
      return null;
    var a = ll;
    return a = Zn(
      l,
      l === gl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (T0(l, a, e), V0(l, ie()), l.callbackNode != null && l.callbackNode === t ? K0.bind(null, l) : null);
  }
  function J0(l, e) {
    if (Uu()) return null;
    T0(l, e, !0);
  }
  function Vm() {
    a1(function() {
      (fl & 6) !== 0 ? ui(
        ws,
        Lm
      ) : L0();
    });
  }
  function kc() {
    if (jt === 0) {
      var l = va;
      l === 0 && (l = qn, qn <<= 1, (qn & 261888) === 0 && (qn = 256)), jt = l;
    }
    return jt;
  }
  function $0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ln("" + l);
  }
  function k0(l, e) {
    var t = e.ownerDocument.createElement("input");
    return t.name = e.name, t.value = e.value, l.id && t.setAttribute("form", l.id), e.parentNode.insertBefore(t, e), l = new FormData(l), t.parentNode.removeChild(t), l;
  }
  function Km(l, e, t, a, n) {
    if (e === "submit" && t && t.stateNode === n) {
      var u = $0(
        (n[Fl] || null).action
      ), i = a.submitter;
      i && (e = (e = i[Fl] || null) ? $0(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var s = new $n(
        "action",
        "action",
        null,
        a,
        n
      );
      l.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (jt !== 0) {
                  var o = i ? k0(n, i) : new FormData(n);
                  vc(
                    t,
                    {
                      pending: !0,
                      data: o,
                      method: n.method,
                      action: u
                    },
                    null,
                    o
                  );
                }
              } else
                typeof u == "function" && (s.preventDefault(), o = i ? k0(n, i) : new FormData(n), vc(
                  t,
                  {
                    pending: !0,
                    data: o,
                    method: n.method,
                    action: u
                  },
                  u,
                  o
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Wc = 0; Wc < Di.length; Wc++) {
    var Fc = Di[Wc], Jm = Fc.toLowerCase(), $m = Fc[0].toUpperCase() + Fc.slice(1);
    Re(
      Jm,
      "on" + $m
    );
  }
  Re(_f, "onAnimationEnd"), Re(Tf, "onAnimationIteration"), Re(Af, "onAnimationStart"), Re("dblclick", "onDoubleClick"), Re("focusin", "onFocus"), Re("focusout", "onBlur"), Re(rm, "onTransitionRun"), Re(dm, "onTransitionStart"), Re(om, "onTransitionCancel"), Re(Mf, "onTransitionEnd"), ea("onMouseEnter", ["mouseout", "mouseover"]), ea("onMouseLeave", ["mouseout", "mouseover"]), ea("onPointerEnter", ["pointerout", "pointerover"]), ea("onPointerLeave", ["pointerout", "pointerover"]), wt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), wt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), wt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), wt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), wt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), wt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), km = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn)
  );
  function W0(l, e) {
    e = (e & 4) !== 0;
    for (var t = 0; t < l.length; t++) {
      var a = l[t], n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i], o = s.instance, b = s.currentTarget;
            if (s = s.listener, o !== u && n.isPropagationStopped())
              break l;
            u = s, n.currentTarget = b;
            try {
              u(n);
            } catch (j) {
              Fn(j);
            }
            n.currentTarget = null, u = o;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (s = a[i], o = s.instance, b = s.currentTarget, s = s.listener, o !== u && n.isPropagationStopped())
              break l;
            u = s, n.currentTarget = b;
            try {
              u(n);
            } catch (j) {
              Fn(j);
            }
            n.currentTarget = null, u = o;
          }
      }
    }
  }
  function P(l, e) {
    var t = e[ri];
    t === void 0 && (t = e[ri] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    t.has(a) || (F0(e, l, 2, !1), t.add(a));
  }
  function Ic(l, e, t) {
    var a = 0;
    e && (a |= 4), F0(
      t,
      l,
      a,
      e
    );
  }
  var qu = "_reactListening" + Math.random().toString(36).slice(2);
  function Pc(l) {
    if (!l[qu]) {
      l[qu] = !0, Qs.forEach(function(t) {
        t !== "selectionchange" && (km.has(t) || Ic(t, !1, l), Ic(t, !0, l));
      });
      var e = l.nodeType === 9 ? l : l.ownerDocument;
      e === null || e[qu] || (e[qu] = !0, Ic("selectionchange", !1, e));
    }
  }
  function F0(l, e, t, a) {
    switch (_d(e)) {
      case 2:
        var n = j1;
        break;
      case 8:
        n = N1;
        break;
      default:
        n = hs;
    }
    t = n.bind(
      null,
      e,
      t,
      l
    ), n = void 0, !xi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(e, t, {
      capture: !0,
      passive: n
    }) : l.addEventListener(e, t, !0) : n !== void 0 ? l.addEventListener(e, t, {
      passive: n
    }) : l.addEventListener(e, t, !1);
  }
  function ls(l, e, t, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (i = It(s), i === null) return;
            if (o = i.tag, o === 5 || o === 6 || o === 26 || o === 27) {
              a = u = i;
              continue l;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ef(function() {
      var b = u, j = yi(t), T = [];
      l: {
        var x = Of.get(l);
        if (x !== void 0) {
          var p = $n, q = l;
          switch (l) {
            case "keypress":
              if (Kn(t) === 0) break l;
            case "keydown":
            case "keyup":
              p = Xo;
              break;
            case "focusin":
              q = "focus", p = ji;
              break;
            case "focusout":
              q = "blur", p = ji;
              break;
            case "beforeblur":
            case "afterblur":
              p = ji;
              break;
            case "click":
              if (t.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = nf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Oo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Vo;
              break;
            case _f:
            case Tf:
            case Af:
              p = wo;
              break;
            case Mf:
              p = Jo;
              break;
            case "scroll":
            case "scrollend":
              p = Ao;
              break;
            case "wheel":
              p = ko;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Co;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = cf;
              break;
            case "toggle":
            case "beforetoggle":
              p = Fo;
          }
          var Q = (e & 4) !== 0, vl = !Q && (l === "scroll" || l === "scrollend"), g = Q ? x !== null ? x + "Capture" : null : x;
          Q = [];
          for (var m = b, y; m !== null; ) {
            var E = m;
            if (y = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || y === null || g === null || (E = La(m, g), E != null && Q.push(
              Nn(m, E, y)
            )), vl) break;
            m = m.return;
          }
          0 < Q.length && (x = new p(
            x,
            q,
            null,
            t,
            j
          ), T.push({ event: x, listeners: Q }));
        }
      }
      if ((e & 7) === 0) {
        l: {
          if (x = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", x && t !== gi && (q = t.relatedTarget || t.fromElement) && (It(q) || q[Ft]))
            break l;
          if ((p || x) && (x = j.window === j ? j : (x = j.ownerDocument) ? x.defaultView || x.parentWindow : window, p ? (q = t.relatedTarget || t.toElement, p = b, q = q ? It(q) : null, q !== null && (vl = D(q), Q = q.tag, q !== vl || Q !== 5 && Q !== 27 && Q !== 6) && (q = null)) : (p = null, q = b), p !== q)) {
            if (Q = nf, E = "onMouseLeave", g = "onMouseEnter", m = "mouse", (l === "pointerout" || l === "pointerover") && (Q = cf, E = "onPointerLeave", g = "onPointerEnter", m = "pointer"), vl = p == null ? x : Qa(p), y = q == null ? x : Qa(q), x = new Q(
              E,
              m + "leave",
              p,
              t,
              j
            ), x.target = vl, x.relatedTarget = y, E = null, It(j) === b && (Q = new Q(
              g,
              m + "enter",
              q,
              t,
              j
            ), Q.target = y, Q.relatedTarget = vl, E = Q), vl = E, p && q)
              e: {
                for (Q = Wm, g = p, m = q, y = 0, E = g; E; E = Q(E))
                  y++;
                E = 0;
                for (var G = m; G; G = Q(G))
                  E++;
                for (; 0 < y - E; )
                  g = Q(g), y--;
                for (; 0 < E - y; )
                  m = Q(m), E--;
                for (; y--; ) {
                  if (g === m || m !== null && g === m.alternate) {
                    Q = g;
                    break e;
                  }
                  g = Q(g), m = Q(m);
                }
                Q = null;
              }
            else Q = null;
            p !== null && I0(
              T,
              x,
              p,
              Q,
              !1
            ), q !== null && vl !== null && I0(
              T,
              vl,
              q,
              Q,
              !0
            );
          }
        }
        l: {
          if (x = b ? Qa(b) : window, p = x.nodeName && x.nodeName.toLowerCase(), p === "select" || p === "input" && x.type === "file")
            var ul = vf;
          else if (mf(x))
            if (gf)
              ul = cm;
            else {
              ul = um;
              var Y = nm;
            }
          else
            p = x.nodeName, !p || p.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? b && vi(b.elementType) && (ul = vf) : ul = im;
          if (ul && (ul = ul(l, b))) {
            hf(
              T,
              ul,
              t,
              j
            );
            break l;
          }
          Y && Y(l, x, b), l === "focusout" && b && x.type === "number" && b.memoizedProps.value != null && hi(x, "number", x.value);
        }
        switch (Y = b ? Qa(b) : window, l) {
          case "focusin":
            (mf(Y) || Y.contentEditable === "true") && (ca = Y, Mi = b, Ia = null);
            break;
          case "focusout":
            Ia = Mi = ca = null;
            break;
          case "mousedown":
            Oi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Oi = !1, Nf(T, t, j);
            break;
          case "selectionchange":
            if (fm) break;
          case "keydown":
          case "keyup":
            Nf(T, t, j);
        }
        var k;
        if (Ei)
          l: {
            switch (l) {
              case "compositionstart":
                var el = "onCompositionStart";
                break l;
              case "compositionend":
                el = "onCompositionEnd";
                break l;
              case "compositionupdate":
                el = "onCompositionUpdate";
                break l;
            }
            el = void 0;
          }
        else
          ia ? df(l, t) && (el = "onCompositionEnd") : l === "keydown" && t.keyCode === 229 && (el = "onCompositionStart");
        el && (sf && t.locale !== "ko" && (ia || el !== "onCompositionStart" ? el === "onCompositionEnd" && ia && (k = tf()) : (ct = j, pi = "value" in ct ? ct.value : ct.textContent, ia = !0)), Y = Bu(b, el), 0 < Y.length && (el = new uf(
          el,
          l,
          null,
          t,
          j
        ), T.push({ event: el, listeners: Y }), k ? el.data = k : (k = of(t), k !== null && (el.data = k)))), (k = Po ? lm(l, t) : em(l, t)) && (el = Bu(b, "onBeforeInput"), 0 < el.length && (Y = new uf(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          j
        ), T.push({
          event: Y,
          listeners: el
        }), Y.data = k)), Km(
          T,
          l,
          b,
          t,
          j
        );
      }
      W0(T, e);
    });
  }
  function Nn(l, e, t) {
    return {
      instance: l,
      listener: e,
      currentTarget: t
    };
  }
  function Bu(l, e) {
    for (var t = e + "Capture", a = []; l !== null; ) {
      var n = l, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = La(l, t), n != null && a.unshift(
        Nn(l, n, u)
      ), n = La(l, e), n != null && a.push(
        Nn(l, n, u)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Wm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function I0(l, e, t, a, n) {
    for (var u = e._reactName, i = []; t !== null && t !== a; ) {
      var s = t, o = s.alternate, b = s.stateNode;
      if (s = s.tag, o !== null && o === a) break;
      s !== 5 && s !== 26 && s !== 27 || b === null || (o = b, n ? (b = La(t, u), b != null && i.unshift(
        Nn(t, b, o)
      )) : n || (b = La(t, u), b != null && i.push(
        Nn(t, b, o)
      ))), t = t.return;
    }
    i.length !== 0 && l.push({ event: e, listeners: i });
  }
  var Fm = /\r\n?/g, Im = /\u0000|\uFFFD/g;
  function P0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Fm, `
`).replace(Im, "");
  }
  function ld(l, e) {
    return e = P0(e), P0(l) === e;
  }
  function hl(l, e, t, a, n, u) {
    switch (t) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || aa(l, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && aa(l, "" + a);
        break;
      case "className":
        Xn(l, "class", a);
        break;
      case "tabIndex":
        Xn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xn(l, t, a);
        break;
      case "style":
        Ps(l, a, u);
        break;
      case "data":
        if (e !== "object") {
          Xn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || t !== "href")) {
          l.removeAttribute(t);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(t);
          break;
        }
        a = Ln("" + a), l.setAttribute(t, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (t === "formAction" ? (e !== "input" && hl(l, e, "name", n.name, n, null), hl(
            l,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), hl(
            l,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), hl(
            l,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (hl(l, e, "encType", n.encType, n, null), hl(l, e, "method", n.method, n, null), hl(l, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(t);
          break;
        }
        a = Ln("" + a), l.setAttribute(t, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ge);
        break;
      case "onScroll":
        a != null && P("scroll", l);
        break;
      case "onScrollEnd":
        a != null && P("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (t = a.__html, t != null) {
            if (n.children != null) throw Error(r(60));
            l.innerHTML = t;
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
        t = Ln("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t
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
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, "" + a) : l.removeAttribute(t);
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
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, "") : l.removeAttribute(t);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(t, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, a) : l.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(t, a) : l.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(t) : l.setAttribute(t, a);
        break;
      case "popover":
        P("beforetoggle", l), P("toggle", l), Gn(l, "popover", a);
        break;
      case "xlinkActuate":
        Ze(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ze(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ze(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ze(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ze(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ze(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ze(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ze(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ze(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Gn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = _o.get(t) || t, Gn(l, t, a));
    }
  }
  function es(l, e, t, a, n, u) {
    switch (t) {
      case "style":
        Ps(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (t = a.__html, t != null) {
            if (n.children != null) throw Error(r(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof a == "string" ? aa(l, a) : (typeof a == "number" || typeof a == "bigint") && aa(l, "" + a);
        break;
      case "onScroll":
        a != null && P("scroll", l);
        break;
      case "onScrollEnd":
        a != null && P("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ge);
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
        if (!Ls.hasOwnProperty(t))
          l: {
            if (t[0] === "o" && t[1] === "n" && (n = t.endsWith("Capture"), e = t.slice(2, n ? t.length - 7 : void 0), u = l[Fl] || null, u = u != null ? u[t] : null, typeof u == "function" && l.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (t in l ? l[t] = null : l.hasAttribute(t) && l.removeAttribute(t)), l.addEventListener(e, a, n);
              break l;
            }
            t in l ? l[t] = a : a === !0 ? l.setAttribute(t, "") : Gn(l, t, a);
          }
    }
  }
  function Gl(l, e, t) {
    switch (e) {
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
        P("error", l), P("load", l);
        var a = !1, n = !1, u;
        for (u in t)
          if (t.hasOwnProperty(u)) {
            var i = t[u];
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
                  throw Error(r(137, e));
                default:
                  hl(l, e, u, i, t, null);
              }
          }
        n && hl(l, e, "srcSet", t.srcSet, t, null), a && hl(l, e, "src", t.src, t, null);
        return;
      case "input":
        P("invalid", l);
        var s = u = i = n = null, o = null, b = null;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var j = t[a];
            if (j != null)
              switch (a) {
                case "name":
                  n = j;
                  break;
                case "type":
                  i = j;
                  break;
                case "checked":
                  o = j;
                  break;
                case "defaultChecked":
                  b = j;
                  break;
                case "value":
                  u = j;
                  break;
                case "defaultValue":
                  s = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null)
                    throw Error(r(137, e));
                  break;
                default:
                  hl(l, e, a, j, t, null);
              }
          }
        ks(
          l,
          u,
          s,
          o,
          b,
          i,
          n,
          !1
        );
        return;
      case "select":
        P("invalid", l), a = i = u = null;
        for (n in t)
          if (t.hasOwnProperty(n) && (s = t[n], s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                a = s;
              default:
                hl(l, e, n, s, t, null);
            }
        e = u, t = i, l.multiple = !!a, e != null ? ta(l, !!a, e, !1) : t != null && ta(l, !!a, t, !0);
        return;
      case "textarea":
        P("invalid", l), u = n = a = null;
        for (i in t)
          if (t.hasOwnProperty(i) && (s = t[i], s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                hl(l, e, i, s, t, null);
            }
        Fs(l, a, n, u);
        return;
      case "option":
        for (o in t)
          t.hasOwnProperty(o) && (a = t[o], a != null) && (o === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : hl(l, e, o, a, t, null));
        return;
      case "dialog":
        P("beforetoggle", l), P("toggle", l), P("cancel", l), P("close", l);
        break;
      case "iframe":
      case "object":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < jn.length; a++)
          P(jn[a], l);
        break;
      case "image":
        P("error", l), P("load", l);
        break;
      case "details":
        P("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", l), P("load", l);
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
        for (b in t)
          if (t.hasOwnProperty(b) && (a = t[b], a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                hl(l, e, b, a, t, null);
            }
        return;
      default:
        if (vi(e)) {
          for (j in t)
            t.hasOwnProperty(j) && (a = t[j], a !== void 0 && es(
              l,
              e,
              j,
              a,
              t,
              void 0
            ));
          return;
        }
    }
    for (s in t)
      t.hasOwnProperty(s) && (a = t[s], a != null && hl(l, e, s, a, t, null));
  }
  function Pm(l, e, t, a) {
    switch (e) {
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
        var n = null, u = null, i = null, s = null, o = null, b = null, j = null;
        for (p in t) {
          var T = t[p];
          if (t.hasOwnProperty(p) && T != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = T;
              default:
                a.hasOwnProperty(p) || hl(l, e, p, null, a, T);
            }
        }
        for (var x in a) {
          var p = a[x];
          if (T = t[x], a.hasOwnProperty(x) && (p != null || T != null))
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
                j = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(r(137, e));
                break;
              default:
                p !== T && hl(
                  l,
                  e,
                  x,
                  p,
                  a,
                  T
                );
            }
        }
        mi(
          l,
          i,
          s,
          o,
          b,
          j,
          u,
          n
        );
        return;
      case "select":
        p = i = s = x = null;
        for (u in t)
          if (o = t[u], t.hasOwnProperty(u) && o != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                p = o;
              default:
                a.hasOwnProperty(u) || hl(
                  l,
                  e,
                  u,
                  null,
                  a,
                  o
                );
            }
        for (n in a)
          if (u = a[n], o = t[n], a.hasOwnProperty(n) && (u != null || o != null))
            switch (n) {
              case "value":
                x = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== o && hl(
                  l,
                  e,
                  n,
                  u,
                  a,
                  o
                );
            }
        e = s, t = i, a = p, x != null ? ta(l, !!t, x, !1) : !!a != !!t && (e != null ? ta(l, !!t, e, !0) : ta(l, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        p = x = null;
        for (s in t)
          if (n = t[s], t.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                hl(l, e, s, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = t[i], a.hasOwnProperty(i) && (n != null || u != null))
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
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && hl(l, e, i, n, a, u);
            }
        Ws(l, x, p);
        return;
      case "option":
        for (var q in t)
          x = t[q], t.hasOwnProperty(q) && x != null && !a.hasOwnProperty(q) && (q === "selected" ? l.selected = !1 : hl(
            l,
            e,
            q,
            null,
            a,
            x
          ));
        for (o in a)
          x = a[o], p = t[o], a.hasOwnProperty(o) && x !== p && (x != null || p != null) && (o === "selected" ? l.selected = x && typeof x != "function" && typeof x != "symbol" : hl(
            l,
            e,
            o,
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
        for (var Q in t)
          x = t[Q], t.hasOwnProperty(Q) && x != null && !a.hasOwnProperty(Q) && hl(l, e, Q, null, a, x);
        for (b in a)
          if (x = a[b], p = t[b], a.hasOwnProperty(b) && x !== p && (x != null || p != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(r(137, e));
                break;
              default:
                hl(
                  l,
                  e,
                  b,
                  x,
                  a,
                  p
                );
            }
        return;
      default:
        if (vi(e)) {
          for (var vl in t)
            x = t[vl], t.hasOwnProperty(vl) && x !== void 0 && !a.hasOwnProperty(vl) && es(
              l,
              e,
              vl,
              void 0,
              a,
              x
            );
          for (j in a)
            x = a[j], p = t[j], !a.hasOwnProperty(j) || x === p || x === void 0 && p === void 0 || es(
              l,
              e,
              j,
              x,
              a,
              p
            );
          return;
        }
    }
    for (var g in t)
      x = t[g], t.hasOwnProperty(g) && x != null && !a.hasOwnProperty(g) && hl(l, e, g, null, a, x);
    for (T in a)
      x = a[T], p = t[T], !a.hasOwnProperty(T) || x === p || x == null && p == null || hl(l, e, T, x, a, p);
  }
  function ed(l) {
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
  function l1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, e = 0, t = performance.getEntriesByType("resource"), a = 0; a < t.length; a++) {
        var n = t[a], u = n.transferSize, i = n.initiatorType, s = n.duration;
        if (u && s && ed(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < t.length; a++) {
            var o = t[a], b = o.startTime;
            if (b > s) break;
            var j = o.transferSize, T = o.initiatorType;
            j && ed(T) && (o = o.responseEnd, i += j * (o < s ? 1 : (s - b) / (o - b)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return e / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var ts = null, as = null;
  function Yu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function td(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ad(l, e) {
    if (l === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && e === "foreignObject" ? 0 : l;
  }
  function ns(l, e) {
    return l === "textarea" || l === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var us = null;
  function e1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === us ? !1 : (us = l, !0) : (us = null, !1);
  }
  var nd = typeof setTimeout == "function" ? setTimeout : void 0, t1 = typeof clearTimeout == "function" ? clearTimeout : void 0, ud = typeof Promise == "function" ? Promise : void 0, a1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(l) {
    return ud.resolve(null).then(l).catch(n1);
  } : nd;
  function n1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Nt(l) {
    return l === "head";
  }
  function id(l, e) {
    var t = e, a = 0;
    do {
      var n = t.nextSibling;
      if (l.removeChild(t), n && n.nodeType === 8)
        if (t = n.data, t === "/$" || t === "/&") {
          if (a === 0) {
            l.removeChild(n), Ua(e);
            return;
          }
          a--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          a++;
        else if (t === "html")
          En(l.ownerDocument.documentElement);
        else if (t === "head") {
          t = l.ownerDocument.head, En(t);
          for (var u = t.firstChild; u; ) {
            var i = u.nextSibling, s = u.nodeName;
            u[Xa] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || t.removeChild(u), u = i;
          }
        } else
          t === "body" && En(l.ownerDocument.body);
      t = n;
    } while (t);
    Ua(e);
  }
  function cd(l, e) {
    var t = l;
    l = 0;
    do {
      var a = t.nextSibling;
      if (t.nodeType === 1 ? e ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (e ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), a && a.nodeType === 8)
        if (t = a.data, t === "/$") {
          if (l === 0) break;
          l--;
        } else
          t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || l++;
      t = a;
    } while (t);
  }
  function is(l) {
    var e = l.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var t = e;
      switch (e = e.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          is(t), di(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(t);
    }
  }
  function u1(l, e, t, a) {
    for (; l.nodeType === 1; ) {
      var n = t;
      if (l.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Xa])
          switch (e) {
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
      } else if (e === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u)
          return l;
      } else return l;
      if (l = _e(l.nextSibling), l === null) break;
    }
    return null;
  }
  function i1(l, e, t) {
    if (e === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = _e(l.nextSibling), l === null)) return null;
    return l;
  }
  function sd(l, e) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = _e(l.nextSibling), l === null)) return null;
    return l;
  }
  function cs(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ss(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function c1(l, e) {
    var t = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = e;
    else if (l.data !== "$?" || t.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), t.removeEventListener("DOMContentLoaded", a);
      };
      t.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function _e(l) {
    for (; l != null; l = l.nextSibling) {
      var e = l.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = l.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return l;
  }
  var fs = null;
  function fd(l) {
    l = l.nextSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "/$" || t === "/&") {
          if (e === 0)
            return _e(l.nextSibling);
          e--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || e++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function rd(l) {
    l = l.previousSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (e === 0) return l;
          e--;
        } else t !== "/$" && t !== "/&" || e++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function dd(l, e, t) {
    switch (e = Yu(t), l) {
      case "html":
        if (l = e.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = e.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = e.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function En(l) {
    for (var e = l.attributes; e.length; )
      l.removeAttributeNode(e[0]);
    di(l);
  }
  var Te = /* @__PURE__ */ new Map(), od = /* @__PURE__ */ new Set();
  function Zu(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var at = w.d;
  w.d = {
    f: s1,
    r: f1,
    D: r1,
    C: d1,
    L: o1,
    m: m1,
    X: v1,
    S: h1,
    M: g1
  };
  function s1() {
    var l = at.f(), e = Ru();
    return l || e;
  }
  function f1(l) {
    var e = Pt(l);
    e !== null && e.tag === 5 && e.type === "form" ? Mr(e) : at.r(l);
  }
  var Ra = typeof document > "u" ? null : document;
  function md(l, e, t) {
    var a = Ra;
    if (a && typeof e == "string" && e) {
      var n = xe(e);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof t == "string" && (n += '[crossorigin="' + t + '"]'), od.has(n) || (od.add(n), l = { rel: l, crossOrigin: t, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Gl(e, "link", l), wl(e), a.head.appendChild(e)));
    }
  }
  function r1(l) {
    at.D(l), md("dns-prefetch", l, null);
  }
  function d1(l, e) {
    at.C(l, e), md("preconnect", l, e);
  }
  function o1(l, e, t) {
    at.L(l, e, t);
    var a = Ra;
    if (a && l && e) {
      var n = 'link[rel="preload"][as="' + xe(e) + '"]';
      e === "image" && t && t.imageSrcSet ? (n += '[imagesrcset="' + xe(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (n += '[imagesizes="' + xe(
        t.imageSizes
      ) + '"]')) : n += '[href="' + xe(l) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Da(l);
          break;
        case "script":
          u = wa(l);
      }
      Te.has(u) || (l = B(
        {
          rel: "preload",
          href: e === "image" && t && t.imageSrcSet ? void 0 : l,
          as: e
        },
        t
      ), Te.set(u, l), a.querySelector(n) !== null || e === "style" && a.querySelector(_n(u)) || e === "script" && a.querySelector(Tn(u)) || (e = a.createElement("link"), Gl(e, "link", l), wl(e), a.head.appendChild(e)));
    }
  }
  function m1(l, e) {
    at.m(l, e);
    var t = Ra;
    if (t && l) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + xe(a) + '"][href="' + xe(l) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = wa(l);
      }
      if (!Te.has(u) && (l = B({ rel: "modulepreload", href: l }, e), Te.set(u, l), t.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Tn(u)))
              return;
        }
        a = t.createElement("link"), Gl(a, "link", l), wl(a), t.head.appendChild(a);
      }
    }
  }
  function h1(l, e, t) {
    at.S(l, e, t);
    var a = Ra;
    if (a && l) {
      var n = la(a).hoistableStyles, u = Da(l);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if (i = a.querySelector(
          _n(u)
        ))
          s.loading = 5;
        else {
          l = B(
            { rel: "stylesheet", href: l, "data-precedence": e },
            t
          ), (t = Te.get(u)) && rs(l, t);
          var o = i = a.createElement("link");
          wl(o), Gl(o, "link", l), o._p = new Promise(function(b, j) {
            o.onload = b, o.onerror = j;
          }), o.addEventListener("load", function() {
            s.loading |= 1;
          }), o.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Gu(i, e, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: s
        }, n.set(u, i);
      }
    }
  }
  function v1(l, e) {
    at.X(l, e);
    var t = Ra;
    if (t && l) {
      var a = la(t).hoistableScripts, n = wa(l), u = a.get(n);
      u || (u = t.querySelector(Tn(n)), u || (l = B({ src: l, async: !0 }, e), (e = Te.get(n)) && ds(l, e), u = t.createElement("script"), wl(u), Gl(u, "link", l), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function g1(l, e) {
    at.M(l, e);
    var t = Ra;
    if (t && l) {
      var a = la(t).hoistableScripts, n = wa(l), u = a.get(n);
      u || (u = t.querySelector(Tn(n)), u || (l = B({ src: l, async: !0, type: "module" }, e), (e = Te.get(n)) && ds(l, e), u = t.createElement("script"), wl(u), Gl(u, "link", l), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function hd(l, e, t, a) {
    var n = (n = W.current) ? Zu(n) : null;
    if (!n) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (e = Da(t.href), t = la(
          n
        ).hoistableStyles, a = t.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          l = Da(t.href);
          var u = la(
            n
          ).hoistableStyles, i = u.get(l);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(l, i), (u = n.querySelector(
            _n(l)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Te.has(l) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Te.set(l, t), u || y1(
            n,
            l,
            t,
            i.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return i;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = t.async, t = t.src, typeof t == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = wa(t), t = la(
          n
        ).hoistableScripts, a = t.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function Da(l) {
    return 'href="' + xe(l) + '"';
  }
  function _n(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function vd(l) {
    return B({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function y1(l, e, t, a) {
    l.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = l.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Gl(e, "link", t), wl(e), l.head.appendChild(e));
  }
  function wa(l) {
    return '[src="' + xe(l) + '"]';
  }
  function Tn(l) {
    return "script[async]" + l;
  }
  function gd(l, e, t) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + xe(t.href) + '"]'
          );
          if (a)
            return e.instance = a, wl(a), a;
          var n = B({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), wl(a), Gl(a, "style", n), Gu(a, t.precedence, l), e.instance = a;
        case "stylesheet":
          n = Da(t.href);
          var u = l.querySelector(
            _n(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, wl(u), u;
          a = vd(t), (n = Te.get(n)) && rs(a, n), u = (l.ownerDocument || l).createElement("link"), wl(u);
          var i = u;
          return i._p = new Promise(function(s, o) {
            i.onload = s, i.onerror = o;
          }), Gl(u, "link", a), e.state.loading |= 4, Gu(u, t.precedence, l), e.instance = u;
        case "script":
          return u = wa(t.src), (n = l.querySelector(
            Tn(u)
          )) ? (e.instance = n, wl(n), n) : (a = t, (n = Te.get(u)) && (a = B({}, t), ds(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), wl(n), Gl(n, "link", a), l.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Gu(a, t.precedence, l));
    return e.instance;
  }
  function Gu(l, e, t) {
    for (var a = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(l, u.nextSibling) : (e = t.nodeType === 9 ? t.head : t, e.insertBefore(l, e.firstChild));
  }
  function rs(l, e) {
    l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.title == null && (l.title = e.title);
  }
  function ds(l, e) {
    l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.integrity == null && (l.integrity = e.integrity);
  }
  var Xu = null;
  function yd(l, e, t) {
    if (Xu === null) {
      var a = /* @__PURE__ */ new Map(), n = Xu = /* @__PURE__ */ new Map();
      n.set(t, a);
    } else
      n = Xu, a = n.get(t), a || (a = /* @__PURE__ */ new Map(), n.set(t, a));
    if (a.has(l)) return a;
    for (a.set(l, null), t = t.getElementsByTagName(l), n = 0; n < t.length; n++) {
      var u = t[n];
      if (!(u[Xa] || u[ql] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = l + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function bd(l, e, t) {
    l = l.ownerDocument || l, l.head.insertBefore(
      t,
      e === "title" ? l.querySelector("head > title") : null
    );
  }
  function b1(l, e, t) {
    if (t === 1 || e.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (l = e.disabled, typeof e.precedence == "string" && l == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function xd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function x1(l, e, t, a) {
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Da(a.href), u = e.querySelector(
          _n(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = Qu.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = u, wl(u);
          return;
        }
        u = e.ownerDocument || e, a = vd(a), (n = Te.get(n)) && rs(a, n), u = u.createElement("link"), wl(u);
        var i = u;
        i._p = new Promise(function(s, o) {
          i.onload = s, i.onerror = o;
        }), Gl(u, "link", a), t.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Qu.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  var os = 0;
  function p1(l, e) {
    return l.stylesheets && l.count === 0 && Vu(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(t) {
      var a = setTimeout(function() {
        if (l.stylesheets && Vu(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < l.imgBytes && os === 0 && (os = 62500 * l1());
      var n = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Vu(l, l.stylesheets), l.unsuspend)) {
            var u = l.unsuspend;
            l.unsuspend = null, u();
          }
        },
        (l.imgBytes > os ? 50 : 800) + e
      );
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Qu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Vu(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Lu = null;
  function Vu(l, e) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Lu = /* @__PURE__ */ new Map(), e.forEach(z1, l), Lu = null, Qu.call(l));
  }
  function z1(l, e) {
    if (!(e.state.loading & 4)) {
      var t = Lu.get(l);
      if (t) var a = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Lu.set(l, t);
        for (var n = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (t.set(i.dataset.precedence, i), a = i);
        }
        a && t.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = t.get(i) || a, u === a && t.set(null, n), t.set(i, n), this.count++, a = Qu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), e.state.loading |= 4;
    }
  }
  var An = {
    $$typeof: Dl,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function S1(l, e, t, a, n, u, i, s, o) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ci(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ci(0), this.hiddenUpdates = ci(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function pd(l, e, t, a, n, u, i, s, o, b, j, T) {
    return l = new S1(
      l,
      e,
      t,
      i,
      o,
      b,
      j,
      T,
      s
    ), e = 1, u === !0 && (e |= 24), u = re(3, null, null, e), l.current = u, u.stateNode = l, e = Vi(), e.refCount++, l.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: t,
      cache: e
    }, ki(u), l;
  }
  function zd(l) {
    return l ? (l = ra, l) : ra;
  }
  function Sd(l, e, t, a, n, u) {
    n = zd(n), a.context === null ? a.context = n : a.pendingContext = n, a = mt(e), a.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (a.callback = u), t = ht(l, a, e), t !== null && (ae(t, l, e), un(t, l, e));
  }
  function jd(l, e) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < e ? t : e;
    }
  }
  function ms(l, e) {
    jd(l, e), (l = l.alternate) && jd(l, e);
  }
  function Nd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = qt(l, 67108864);
      e !== null && ae(e, l, 67108864), ms(l, 67108864);
    }
  }
  function Ed(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = ve();
      e = si(e);
      var t = qt(l, e);
      t !== null && ae(t, l, e), ms(l, e);
    }
  }
  var Ku = !0;
  function j1(l, e, t, a) {
    var n = N.T;
    N.T = null;
    var u = w.p;
    try {
      w.p = 2, hs(l, e, t, a);
    } finally {
      w.p = u, N.T = n;
    }
  }
  function N1(l, e, t, a) {
    var n = N.T;
    N.T = null;
    var u = w.p;
    try {
      w.p = 8, hs(l, e, t, a);
    } finally {
      w.p = u, N.T = n;
    }
  }
  function hs(l, e, t, a) {
    if (Ku) {
      var n = vs(a);
      if (n === null)
        ls(
          l,
          e,
          a,
          Ju,
          t
        ), Td(l, a);
      else if (_1(
        n,
        l,
        e,
        t,
        a
      ))
        a.stopPropagation();
      else if (Td(l, a), e & 4 && -1 < E1.indexOf(l)) {
        for (; n !== null; ) {
          var u = Pt(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Dt(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var o = 1 << 31 - se(i);
                      s.entanglements[1] |= o, i &= ~o;
                    }
                    Ye(u), (fl & 6) === 0 && (Mu = ie() + 500, Sn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = qt(u, 2), s !== null && ae(s, u, 2), Ru(), ms(u, 2);
            }
          if (u = vs(a), u === null && ls(
            l,
            e,
            a,
            Ju,
            t
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        ls(
          l,
          e,
          a,
          null,
          t
        );
    }
  }
  function vs(l) {
    return l = yi(l), gs(l);
  }
  var Ju = null;
  function gs(l) {
    if (Ju = null, l = It(l), l !== null) {
      var e = D(l);
      if (e === null) l = null;
      else {
        var t = e.tag;
        if (t === 13) {
          if (l = R(e), l !== null) return l;
          l = null;
        } else if (t === 31) {
          if (l = A(e), l !== null) return l;
          l = null;
        } else if (t === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          l = null;
        } else e !== l && (l = null);
      }
    }
    return Ju = l, null;
  }
  function _d(l) {
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
        switch (fo()) {
          case ws:
            return 2;
          case Us:
            return 8;
          case Hn:
          case ro:
            return 32;
          case Cs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ys = !1, Et = null, _t = null, Tt = null, Mn = /* @__PURE__ */ new Map(), On = /* @__PURE__ */ new Map(), At = [], E1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Td(l, e) {
    switch (l) {
      case "focusin":
      case "focusout":
        Et = null;
        break;
      case "dragenter":
      case "dragleave":
        _t = null;
        break;
      case "mouseover":
      case "mouseout":
        Tt = null;
        break;
      case "pointerover":
      case "pointerout":
        Mn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        On.delete(e.pointerId);
    }
  }
  function Rn(l, e, t, a, n, u) {
    return l === null || l.nativeEvent !== u ? (l = {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = Pt(e), e !== null && Nd(e)), l) : (l.eventSystemFlags |= a, e = l.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), l);
  }
  function _1(l, e, t, a, n) {
    switch (e) {
      case "focusin":
        return Et = Rn(
          Et,
          l,
          e,
          t,
          a,
          n
        ), !0;
      case "dragenter":
        return _t = Rn(
          _t,
          l,
          e,
          t,
          a,
          n
        ), !0;
      case "mouseover":
        return Tt = Rn(
          Tt,
          l,
          e,
          t,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Mn.set(
          u,
          Rn(
            Mn.get(u) || null,
            l,
            e,
            t,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, On.set(
          u,
          Rn(
            On.get(u) || null,
            l,
            e,
            t,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Ad(l) {
    var e = It(l.target);
    if (e !== null) {
      var t = D(e);
      if (t !== null) {
        if (e = t.tag, e === 13) {
          if (e = R(t), e !== null) {
            l.blockedOn = e, Gs(l.priority, function() {
              Ed(t);
            });
            return;
          }
        } else if (e === 31) {
          if (e = A(t), e !== null) {
            l.blockedOn = e, Gs(l.priority, function() {
              Ed(t);
            });
            return;
          }
        } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function $u(l) {
    if (l.blockedOn !== null) return !1;
    for (var e = l.targetContainers; 0 < e.length; ) {
      var t = vs(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var a = new t.constructor(
          t.type,
          t
        );
        gi = a, t.target.dispatchEvent(a), gi = null;
      } else
        return e = Pt(t), e !== null && Nd(e), l.blockedOn = t, !1;
      e.shift();
    }
    return !0;
  }
  function Md(l, e, t) {
    $u(l) && t.delete(e);
  }
  function T1() {
    ys = !1, Et !== null && $u(Et) && (Et = null), _t !== null && $u(_t) && (_t = null), Tt !== null && $u(Tt) && (Tt = null), Mn.forEach(Md), On.forEach(Md);
  }
  function ku(l, e) {
    l.blockedOn === e && (l.blockedOn = null, ys || (ys = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      T1
    )));
  }
  var Wu = null;
  function Od(l) {
    Wu !== l && (Wu = l, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Wu === l && (Wu = null);
        for (var e = 0; e < l.length; e += 3) {
          var t = l[e], a = l[e + 1], n = l[e + 2];
          if (typeof a != "function") {
            if (gs(a || t) === null)
              continue;
            break;
          }
          var u = Pt(t);
          u !== null && (l.splice(e, 3), e -= 3, vc(
            u,
            {
              pending: !0,
              data: n,
              method: t.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Ua(l) {
    function e(o) {
      return ku(o, l);
    }
    Et !== null && ku(Et, l), _t !== null && ku(_t, l), Tt !== null && ku(Tt, l), Mn.forEach(e), On.forEach(e);
    for (var t = 0; t < At.length; t++) {
      var a = At[t];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < At.length && (t = At[0], t.blockedOn === null); )
      Ad(t), t.blockedOn === null && At.shift();
    if (t = (l.ownerDocument || l).$$reactFormReplay, t != null)
      for (a = 0; a < t.length; a += 3) {
        var n = t[a], u = t[a + 1], i = n[Fl] || null;
        if (typeof u == "function")
          i || Od(t);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Fl] || null)
              s = i.formAction;
            else if (gs(n) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? t[a + 1] = s : (t.splice(a, 3), a -= 3), Od(t);
        }
      }
  }
  function Rd() {
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
    function e() {
      n !== null && (n(), n = null), a || setTimeout(t, 20);
    }
    function t() {
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
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(t, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function bs(l) {
    this._internalRoot = l;
  }
  Fu.prototype.render = bs.prototype.render = function(l) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var t = e.current, a = ve();
    Sd(t, a, l, e, null, null);
  }, Fu.prototype.unmount = bs.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var e = l.containerInfo;
      Sd(l.current, 2, null, l, null, null), Ru(), e[Ft] = null;
    }
  };
  function Fu(l) {
    this._internalRoot = l;
  }
  Fu.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var e = Zs();
      l = { blockedOn: null, target: l, priority: e };
      for (var t = 0; t < At.length && e !== 0 && e < At[t].priority; t++) ;
      At.splice(t, 0, l), t === 0 && Ad(l);
    }
  };
  var Dd = d.version;
  if (Dd !== "19.2.8")
    throw Error(
      r(
        527,
        Dd,
        "19.2.8"
      )
    );
  w.findDOMNode = function(l) {
    var e = l._reactInternals;
    if (e === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = S(e), l = l !== null ? L(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var A1 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Iu.isDisabled && Iu.supportsFiber)
      try {
        Ya = Iu.inject(
          A1
        ), ce = Iu;
      } catch {
      }
  }
  return wn.createRoot = function(l, e) {
    if (!O(l)) throw Error(r(299));
    var t = !1, a = "", n = Yr, u = Zr, i = Gr;
    return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = pd(
      l,
      1,
      !1,
      null,
      null,
      t,
      a,
      null,
      n,
      u,
      i,
      Rd
    ), l[Ft] = e.current, Pc(l), new bs(e);
  }, wn.hydrateRoot = function(l, e, t) {
    if (!O(l)) throw Error(r(299));
    var a = !1, n = "", u = Yr, i = Zr, s = Gr, o = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.formState !== void 0 && (o = t.formState)), e = pd(
      l,
      1,
      !0,
      e,
      t ?? null,
      a,
      n,
      o,
      u,
      i,
      s,
      Rd
    ), e.context = zd(null), t = e.current, a = ve(), a = si(a), n = mt(a), n.callback = null, ht(t, n, a), t = a, e.current.lanes = t, Ga(e, t), Ye(e), l[Ft] = e.current, Pc(l), new Fu(e);
  }, wn.version = "19.2.8", wn;
}
var Xd;
function B1() {
  if (Xd) return zs.exports;
  Xd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (d) {
        console.error(d);
      }
  }
  return f(), zs.exports = q1(), zs.exports;
}
var Y1 = B1();
function Z1({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z"
  }));
}
const G1 = /* @__PURE__ */ z.forwardRef(Z1);
function X1({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z",
    clipRule: "evenodd"
  }));
}
const Q1 = /* @__PURE__ */ z.forwardRef(X1);
function L1({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z",
    clipRule: "evenodd"
  }));
}
const $d = /* @__PURE__ */ z.forwardRef(L1);
function V1({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z",
    clipRule: "evenodd"
  }));
}
const kd = /* @__PURE__ */ z.forwardRef(V1);
function K1({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z",
    clipRule: "evenodd"
  }));
}
const J1 = /* @__PURE__ */ z.forwardRef(K1);
function $1({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",
    clipRule: "evenodd"
  }));
}
const k1 = /* @__PURE__ */ z.forwardRef($1);
function W1({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z",
    clipRule: "evenodd"
  }));
}
const F1 = /* @__PURE__ */ z.forwardRef(W1);
function I1({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm.75 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 4.75 9Zm2.5-1.75a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0v-4Zm4-3.25a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75Z",
    clipRule: "evenodd"
  }));
}
const P1 = /* @__PURE__ */ z.forwardRef(I1);
function lh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const eh = /* @__PURE__ */ z.forwardRef(lh);
function th({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ah = /* @__PURE__ */ z.forwardRef(th);
function nh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
const uh = /* @__PURE__ */ z.forwardRef(nh);
function ih({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const As = /* @__PURE__ */ z.forwardRef(ih);
function ch({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M8 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
  }), /* @__PURE__ */ z.createElement("path", {
    d: "M8 8.5c1.84 0 3.579-.37 4.914-1.037A6.33 6.33 0 0 0 14 6.78V8c0 1.657-2.686 3-6 3S2 9.657 2 8V6.78c.346.273.72.5 1.087.683C4.42 8.131 6.16 8.5 8 8.5Z"
  }), /* @__PURE__ */ z.createElement("path", {
    d: "M8 12.5c1.84 0 3.579-.37 4.914-1.037.366-.183.74-.41 1.086-.684V12c0 1.657-2.686 3-6 3s-6-1.343-6-3v-1.22c.346.273.72.5 1.087.683C4.42 12.131 6.16 12.5 8 12.5Z"
  }));
}
const Ms = /* @__PURE__ */ z.forwardRef(ch);
function sh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937v-2.523a2.5 2.5 0 0 0-.732-1.768L8.354 5.232A2.5 2.5 0 0 0 6.586 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ z.createElement("path", {
    d: "M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.586a1 1 0 0 0-.293-.707L7.293 6.293A1 1 0 0 0 6.586 6H3Z"
  }));
}
const fh = /* @__PURE__ */ z.forwardRef(sh);
function rh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z",
    clipRule: "evenodd"
  }));
}
const dh = /* @__PURE__ */ z.forwardRef(rh);
function oh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M6 6v4h4V6H6Z"
  }), /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3a2 2 0 0 0 2 2v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13a2 2 0 0 0 2-2h1.25a.75.75 0 0 0 0-1.5H13v-.75h1.25a.75.75 0 0 0 0-1.5H13V6.5h1.25a.75.75 0 0 0 0-1.5H13a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-.75V1.75a.75.75 0 0 0-1.5 0V3H6.5V1.75A.75.75 0 0 0 5.75 1ZM11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6Z",
    clipRule: "evenodd"
  }));
}
const mh = /* @__PURE__ */ z.forwardRef(oh);
function hh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M7.628 1.349a.75.75 0 0 1 .744 0l1.247.712a.75.75 0 1 1-.744 1.303L8 2.864l-.875.5a.75.75 0 0 1-.744-1.303l1.247-.712ZM4.65 3.914a.75.75 0 0 1-.279 1.023L4.262 5l.11.063a.75.75 0 0 1-.744 1.302l-.13-.073A.75.75 0 0 1 2 6.25V5a.75.75 0 0 1 .378-.651l1.25-.714a.75.75 0 0 1 1.023.279Zm6.698 0a.75.75 0 0 1 1.023-.28l1.25.715A.75.75 0 0 1 14 5v1.25a.75.75 0 0 1-1.499.042l-.129.073a.75.75 0 0 1-.744-1.302l.11-.063-.11-.063a.75.75 0 0 1-.28-1.023ZM6.102 6.915a.75.75 0 0 1 1.023-.279l.875.5.875-.5a.75.75 0 0 1 .744 1.303l-.869.496v.815a.75.75 0 0 1-1.5 0v-.815l-.869-.496a.75.75 0 0 1-.28-1.024ZM2.75 9a.75.75 0 0 1 .75.75v.815l.872.498a.75.75 0 0 1-.744 1.303l-1.25-.715A.75.75 0 0 1 2 11V9.75A.75.75 0 0 1 2.75 9Zm10.5 0a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.378.651l-1.25.715a.75.75 0 0 1-.744-1.303l.872-.498V9.75a.75.75 0 0 1 .75-.75Zm-4.501 3.708.126-.072a.75.75 0 0 1 .744 1.303l-1.247.712a.75.75 0 0 1-.744 0L6.38 13.94a.75.75 0 0 1 .744-1.303l.126.072a.75.75 0 0 1 1.498 0Z",
    clipRule: "evenodd"
  }));
}
const vh = /* @__PURE__ */ z.forwardRef(hh);
function gh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const yh = /* @__PURE__ */ z.forwardRef(gh);
function bh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Wd = /* @__PURE__ */ z.forwardRef(bh);
function xh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
    clipRule: "evenodd"
  }));
}
const ph = /* @__PURE__ */ z.forwardRef(xh);
function zh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M2 4a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 9.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25ZM2.75 12.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Z"
  }));
}
const Sh = /* @__PURE__ */ z.forwardRef(zh);
function jh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z",
    clipRule: "evenodd"
  }));
}
const Nh = /* @__PURE__ */ z.forwardRef(jh);
function Eh({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ z.createElement("path", {
    d: "M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z"
  }));
}
const Fd = /* @__PURE__ */ z.forwardRef(Eh);
function _h({
  title: f,
  titleId: d,
  ...v
}, r) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": d
  }, v), f ? /* @__PURE__ */ z.createElement("title", {
    id: d
  }, f) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
  }));
}
const li = /* @__PURE__ */ z.forwardRef(_h);
function Id(f) {
  var d, v, r = "";
  if (typeof f == "string" || typeof f == "number") r += f;
  else if (typeof f == "object") if (Array.isArray(f)) {
    var O = f.length;
    for (d = 0; d < O; d++) f[d] && (v = Id(f[d])) && (r && (r += " "), r += v);
  } else for (v in f) f[v] && (r && (r += " "), r += v);
  return r;
}
function yl() {
  for (var f, d, v = 0, r = "", O = arguments.length; v < O; v++) (f = arguments[v]) && (d = Id(f)) && (r && (r += " "), r += d);
  return r;
}
async function Es(f, d) {
  const v = await fetch(f, {
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    signal: d
  });
  if (!v.ok) {
    const r = new Error(
      v.status === 404 ? "This trace could not be found." : "AI Observatory could not load this data."
    );
    throw r.status = v.status, r;
  }
  return v.json();
}
function Th(f) {
  const d = new URLSearchParams();
  return Object.entries(f).forEach(([v, r]) => {
    r !== "" && r !== null && r !== void 0 && d.set(v, r);
  }), d.toString();
}
function Pd(f) {
  if (!f) return null;
  const d = new Date(f);
  return Number.isNaN(d.getTime()) ? null : d;
}
function Qd(f) {
  const d = Pd(f);
  return d ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeStyle: "medium"
  }).format(d) : "—";
}
function Os(f) {
  const d = Pd(f);
  if (!d) return "—";
  const v = Math.round((d.getTime() - Date.now()) / 1e3), r = new Intl.RelativeTimeFormat(void 0, {
    numeric: "auto"
  }), O = [
    ["year", 31536e3],
    ["month", 2592e3],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60]
  ];
  for (const [D, R] of O)
    if (Math.abs(v) >= R)
      return r.format(Math.round(v / R), D);
  return r.format(v, "second");
}
function nt(f) {
  if (f == null) return "—";
  const d = Number(f);
  return Number.isFinite(d) ? d < 1e3 ? `${Math.round(d)} ms` : d < 6e4 ? `${(d / 1e3).toFixed(d < 1e4 ? 2 : 1)} s` : `${(d / 6e4).toFixed(1)} min` : "—";
}
function Wt(f) {
  if (f == null) return "—";
  const d = Number(f);
  return Number.isFinite(d) ? new Intl.NumberFormat(void 0, {
    notation: d >= 1e4 ? "compact" : "standard",
    maximumFractionDigits: 1
  }).format(d) : "—";
}
function ei(f, d) {
  if (f == null || !d) return "—";
  const v = Number(f);
  if (!Number.isFinite(v)) return "—";
  try {
    return new Intl.NumberFormat(void 0, {
      style: "currency",
      currency: d,
      maximumFractionDigits: 6
    }).format(v);
  } catch {
    return "—";
  }
}
function Rs(f) {
  return f ? f.split("\\").at(-1) : "—";
}
function lo(f, d = 0) {
  return f.flatMap((v) => [
    { ...v, depth: d },
    ...lo(v.children ?? [], d + 1)
  ]);
}
function Ca({ label: f, value: d }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @md:border-t-0 @md:pt-0 @4xl:[&:not(:first-child)]:border-l @4xl:[&:not(:first-child)]:border-zinc-950/10 @4xl:[&:not(:first-child)]:pl-5 @md:[&:not(:nth-child(3n+1))]:border-l @md:[&:not(:nth-child(3n+1))]:border-zinc-950/10 @md:[&:not(:nth-child(3n+1))]:pl-5 @4xl:[&:not(:nth-child(3n+1))]:border-l-0", children: [
    /* @__PURE__ */ c.jsx("dt", { className: "truncate text-sm/5 font-medium text-zinc-500", children: f }),
    /* @__PURE__ */ c.jsx("dd", { className: "text-2xl font-semibold tracking-tight text-zinc-950 tabular-nums", children: d })
  ] });
}
function _s({ empty: f, items: d, metric: v, title: r }) {
  return /* @__PURE__ */ c.jsxs("section", { className: "min-w-0", children: [
    /* @__PURE__ */ c.jsx("h2", { className: "text-base font-semibold text-zinc-950", children: r }),
    /* @__PURE__ */ c.jsx("ol", { className: "grid pt-3", role: "list", children: d.length > 0 ? d.map((O, D) => /* @__PURE__ */ c.jsxs(
      "li",
      {
        className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-zinc-950/5 py-3",
        children: [
          /* @__PURE__ */ c.jsx("div", { className: "w-4 text-sm/5 text-zinc-400 tabular-nums", children: D + 1 }),
          /* @__PURE__ */ c.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ c.jsx("div", { className: "truncate text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: O.name }),
            O.provider ? /* @__PURE__ */ c.jsx("div", { className: "truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: O.provider }) : null
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: v(O) })
        ]
      },
      `${O.name}-${O.provider ?? ""}`
    )) : /* @__PURE__ */ c.jsx("li", { className: "border-b border-zinc-950/5 py-5 text-base/7 text-zinc-500 sm:text-sm/6", children: f }) })
  ] });
}
function Ah() {
  return /* @__PURE__ */ c.jsxs("div", { className: "grid animate-pulse gap-6", children: [
    /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-2 gap-5 lg:grid-cols-6", children: Array.from({ length: 6 }, (f, d) => /* @__PURE__ */ c.jsxs("div", { className: "grid gap-2", children: [
      /* @__PURE__ */ c.jsx("div", { className: "h-3 w-20 rounded bg-zinc-100" }),
      /* @__PURE__ */ c.jsx("div", { className: "h-7 w-24 rounded bg-zinc-100" })
    ] }, d)) }),
    /* @__PURE__ */ c.jsx("div", { className: "h-72 rounded bg-zinc-100" })
  ] });
}
function Mh({ className: f, data: d, loading: v, onNavigate: r, onRefresh: O }) {
  const D = d?.metrics;
  return /* @__PURE__ */ c.jsx("main", { className: yl("isolate min-h-dvh min-w-0 bg-white", f), children: /* @__PURE__ */ c.jsxs("div", { className: "mx-auto grid max-w-7xl gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:px-8", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
        /* @__PURE__ */ c.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-balance text-zinc-950", children: "Overview" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "Today’s AI activity, reliability, and usage." })
      ] }),
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          onClick: O,
          className: "relative inline-flex shrink-0 items-center gap-1.5 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:py-1.5",
          children: [
            /* @__PURE__ */ c.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ c.jsx(
              $d,
              {
                className: yl(
                  "size-4 h-lh shrink-0 fill-zinc-400",
                  v && "animate-spin"
                )
              }
            ),
            "Refresh"
          ]
        }
      )
    ] }),
    v && !d ? /* @__PURE__ */ c.jsx(Ah, {}) : null,
    d ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("div", { className: "@container", children: /* @__PURE__ */ c.jsxs("dl", { className: "grid gap-4 border-y border-zinc-950/10 py-5 @md:grid-cols-3 @md:gap-5 @4xl:grid-cols-6", children: [
        /* @__PURE__ */ c.jsx(
          Ca,
          {
            label: "Traces today",
            value: D.trace_count.toLocaleString()
          }
        ),
        /* @__PURE__ */ c.jsx(
          Ca,
          {
            label: "Failure rate",
            value: `${D.failure_rate}%`
          }
        ),
        /* @__PURE__ */ c.jsx(
          Ca,
          {
            label: "Total tokens",
            value: Wt(D.total_tokens)
          }
        ),
        /* @__PURE__ */ c.jsx(
          Ca,
          {
            label: "Estimated cost",
            value: ei(
              D.estimated_cost,
              D.currency
            )
          }
        ),
        /* @__PURE__ */ c.jsx(
          Ca,
          {
            label: "Average latency",
            value: nt(
              D.average_duration_ms
            )
          }
        ),
        /* @__PURE__ */ c.jsx(
          Ca,
          {
            label: "P95 latency",
            value: nt(
              D.p95_duration_ms
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ c.jsxs(
        "section",
        {
          className: "grid gap-4",
          "aria-labelledby": "usage-reports-heading",
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
              /* @__PURE__ */ c.jsx(
                "h2",
                {
                  id: "usage-reports-heading",
                  className: "text-xl font-semibold text-zinc-950",
                  children: "Usage reports"
                }
              ),
              /* @__PURE__ */ c.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "The busiest agents, models, and tools today." })
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "@container", children: /* @__PURE__ */ c.jsxs("div", { className: "grid gap-6 @3xl:grid-cols-3 @3xl:gap-5 @3xl:divide-x @3xl:divide-zinc-950/10", children: [
              /* @__PURE__ */ c.jsx(
                _s,
                {
                  title: "Top agents",
                  items: d.top_agents,
                  empty: "No agent activity today.",
                  metric: (R) => `${R.trace_count} runs`
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: "@3xl:pl-5", children: /* @__PURE__ */ c.jsx(
                _s,
                {
                  title: "Top models",
                  items: d.top_models,
                  empty: "No model activity today.",
                  metric: (R) => `${R.trace_count} calls`
                }
              ) }),
              /* @__PURE__ */ c.jsx("div", { className: "@3xl:pl-5", children: /* @__PURE__ */ c.jsx(
                _s,
                {
                  title: "Top tools",
                  items: d.top_tools,
                  empty: "No tool activity today.",
                  metric: (R) => `${R.call_count} calls`
                }
              ) })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ c.jsxs("section", { "aria-labelledby": "recent-failures-heading", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-end justify-between gap-4 border-b border-zinc-950/10 pb-3", children: /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
          /* @__PURE__ */ c.jsx(
            "h2",
            {
              id: "recent-failures-heading",
              className: "text-xl font-semibold text-zinc-950",
              children: "Recent failures"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "The latest failed workflows across the application." })
        ] }) }),
        /* @__PURE__ */ c.jsx("div", { className: "grid", children: d.recent_failures.length > 0 ? d.recent_failures.map((R) => /* @__PURE__ */ c.jsxs(
          "button",
          {
            type: "button",
            onClick: () => r(R.trace_id),
            className: "group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-zinc-950/5 py-3 text-left observatory-focus hover:bg-zinc-50",
            children: [
              /* @__PURE__ */ c.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 items-center gap-1.5", children: [
                  /* @__PURE__ */ c.jsx("div", { className: "truncate text-base/6 font-medium text-zinc-950 sm:text-sm/5", children: R.agent_class ? Rs(
                    R.agent_class
                  ) : R.name }),
                  /* @__PURE__ */ c.jsx(kd, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-600" })
                ] }),
                /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 flex-wrap gap-x-2 text-base/7 text-zinc-500 sm:text-sm/6", children: [
                  /* @__PURE__ */ c.jsxs("div", { className: "font-mono", children: [
                    R.provider ?? "—",
                    " ",
                    "/ ",
                    R.model ?? "—"
                  ] }),
                  /* @__PURE__ */ c.jsx("div", { className: "tabular-nums", children: nt(
                    R.duration_ms
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ c.jsx(
                "time",
                {
                  dateTime: R.started_at,
                  className: "text-base/7 whitespace-nowrap text-zinc-500 tabular-nums sm:text-sm/6",
                  children: Os(
                    R.started_at
                  )
                }
              )
            ]
          },
          R.trace_id
        )) : /* @__PURE__ */ c.jsx("p", { className: "py-6 text-base/7 text-zinc-500 sm:text-sm/6", children: "No failures recorded." }) })
      ] })
    ] }) : null
  ] }) });
}
function Oh({ value: f }) {
  if (f === "[REDACTED]")
    return /* @__PURE__ */ c.jsx("div", { className: "inline-flex rounded bg-amber-100 px-1.5 py-0.5 font-mono text-base/6 text-amber-800 sm:text-sm/5", children: "[REDACTED]" });
  const d = typeof f == "string" ? "text-emerald-700" : typeof f == "number" ? "text-sky-700" : typeof f == "boolean" ? "text-violet-700" : "text-zinc-500", v = typeof f == "string" ? `"${f}"` : String(f);
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: `min-w-0 font-mono text-base/7 break-words whitespace-pre-wrap sm:text-sm/6 ${d}`,
      children: v
    }
  );
}
function eo({ label: f, value: d, depth: v = 0 }) {
  const r = d !== null && typeof d == "object", [O, D] = z.useState(v < 1);
  if (!r)
    return /* @__PURE__ */ c.jsxs("div", { className: "grid min-w-0 gap-x-4 gap-y-0.5 py-1 @md:grid-cols-[minmax(7rem,10rem)_minmax(0,1fr)]", children: [
      f !== null ? /* @__PURE__ */ c.jsxs("div", { className: "min-w-0 font-mono text-base/7 break-words text-zinc-500 sm:text-sm/6", children: [
        f,
        ":"
      ] }) : null,
      /* @__PURE__ */ c.jsx(Oh, { value: d })
    ] });
  const R = Object.entries(d), A = Array.isArray(d) ? "array" : "object";
  return /* @__PURE__ */ c.jsxs(
    "details",
    {
      className: "group/json @container min-w-0",
      open: O,
      onToggle: (M) => D(M.currentTarget.open),
      children: [
        /* @__PURE__ */ c.jsxs("summary", { className: "flex min-w-0 cursor-pointer list-none items-center gap-1 rounded py-1 observatory-focus", children: [
          /* @__PURE__ */ c.jsx(As, { className: "size-4 h-lh shrink-0 fill-zinc-400 group-open/json:rotate-90" }),
          f !== null ? /* @__PURE__ */ c.jsxs("div", { className: "min-w-0 font-mono text-base/7 font-medium break-words text-zinc-700 sm:text-sm/6", children: [
            f,
            ":"
          ] }) : null,
          /* @__PURE__ */ c.jsx("div", { className: "shrink-0 font-mono text-base/7 text-zinc-400 sm:text-sm/6", children: A === "array" ? `[${R.length}]` : `{${R.length}}` })
        ] }),
        O ? /* @__PURE__ */ c.jsx("div", { className: "@container min-w-0 border-l border-zinc-950/10 pl-4", children: R.map(([M, S]) => /* @__PURE__ */ c.jsx(
          eo,
          {
            label: M,
            value: S,
            depth: v + 1
          },
          M
        )) }) : null
      ]
    }
  );
}
function Ba({ className: f, value: d, label: v, plain: r = !1 }) {
  const [O, D] = z.useState(!1), R = d && typeof d == "object" && d._truncated === !0;
  z.useEffect(() => {
    if (!O) return;
    const M = window.setTimeout(() => D(!1), 1500);
    return () => window.clearTimeout(M);
  }, [O]);
  async function A() {
    await navigator.clipboard.writeText(JSON.stringify(d, null, 2)), D(!0);
  }
  return /* @__PURE__ */ c.jsxs(
    "section",
    {
      className: yl(
        !r && "border-t border-zinc-950/10 pt-5",
        f
      ),
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ c.jsx("h3", { className: "text-base font-medium text-zinc-950", children: v }),
          /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              onClick: A,
              className: "relative inline-flex items-center gap-1.5 rounded-md py-1.5 pr-2.5 pl-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
              children: [
                /* @__PURE__ */ c.jsx(
                  "span",
                  {
                    className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                    "aria-hidden": "true"
                  }
                ),
                O ? /* @__PURE__ */ c.jsx(eh, { className: "size-4 h-lh shrink-0 fill-emerald-600" }) : /* @__PURE__ */ c.jsx(fh, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                O ? "Copied" : "Copy"
              ]
            }
          )
        ] }),
        R ? /* @__PURE__ */ c.jsxs("div", { className: "mt-3 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-base/7 text-amber-800 sm:text-sm/6", children: [
          /* @__PURE__ */ c.jsx(Wd, { className: "size-4 h-lh shrink-0 fill-amber-600" }),
          "This payload was truncated before storage. The original was",
          " ",
          Number(d._original_bytes).toLocaleString(),
          " bytes."
        ] }) : null,
        /* @__PURE__ */ c.jsx("div", { className: "@container mt-3 max-h-96 overflow-x-hidden overflow-y-auto rounded-lg bg-zinc-50 p-4 ring-1 ring-zinc-950/5 ring-inset", children: /* @__PURE__ */ c.jsx(eo, { label: null, value: d }) })
      ]
    }
  );
}
const Ld = {
  successful: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  failed: "bg-red-50 text-red-700 ring-red-600/20",
  cancelled: "bg-zinc-100 text-zinc-600 ring-zinc-500/20",
  running: "bg-amber-50 text-amber-800 ring-amber-600/20"
}, Pu = {
  successful: "bg-emerald-500",
  failed: "bg-red-500",
  cancelled: "bg-zinc-400",
  running: "bg-amber-500"
};
function ti({ className: f, compact: d = !1, status: v }) {
  return d ? /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: yl(
        "inline-flex shrink-0 items-center gap-1.5 text-base/6 font-medium sm:text-sm/5",
        v === "successful" ? "text-emerald-700" : v === "failed" ? "text-red-700" : v === "running" ? "text-amber-800" : "text-zinc-600",
        f
      ),
      children: [
        /* @__PURE__ */ c.jsx(
          "span",
          {
            className: `size-1.5 shrink-0 rounded-full ${Pu[v] ?? Pu.cancelled}`
          }
        ),
        v ?? "unknown"
      ]
    }
  ) : /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: yl(
        "inline-flex items-center gap-1.5 rounded-full py-1 pr-2 pl-1 text-base/6 font-medium ring-1 ring-inset sm:gap-1 sm:py-0.5 sm:pr-1.5 sm:pl-0.5 sm:text-sm/5",
        Ld[v] ?? Ld.cancelled,
        f
      ),
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: `size-1.5 shrink-0 rounded-full ${Pu[v] ?? Pu.cancelled}`
          }
        ),
        v ?? "unknown"
      ]
    }
  );
}
const Rh = {
  agent: Nh,
  model: mh,
  tool: Fd,
  mcp: vh,
  internal: F1
};
function Ha({ label: f, value: d }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @md:border-t-0 @md:pt-0", children: [
    /* @__PURE__ */ c.jsx("dt", { className: "truncate text-sm/5 font-medium text-zinc-500", children: f }),
    /* @__PURE__ */ c.jsx("dd", { className: "text-base font-medium text-zinc-950 tabular-nums", children: d })
  ] });
}
function Dh(f, d) {
  const v = new Date(d.started_at).getTime(), r = new Date(f.started_at).getTime(), O = Math.max(Number(d.duration_ms) || 1, 1), D = Math.max(Number(f.duration_ms) || 0, 1);
  if (!Number.isFinite(v) || !Number.isFinite(r))
    return { left: 0, width: 3 };
  const R = Math.max(
    0,
    Math.min(97, (r - v) / O * 100)
  ), A = Math.max(
    3,
    Math.min(100 - R, D / O * 100)
  );
  return { left: R, width: A };
}
function wh({ span: f, onSelect: d, trace: v }) {
  const r = Rh[f.type] ?? Ms, O = f.status === "failed", D = Dh(f, v);
  return /* @__PURE__ */ c.jsxs(
    "button",
    {
      type: "button",
      onClick: () => d(f),
      style: {
        "--span-offset": `${f.depth * 1.25}rem`,
        "--span-left": `${D.left}%`,
        "--span-width": `${D.width}%`
      },
      className: "group relative grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 border-b border-zinc-950/5 py-4 pr-2 pl-[var(--span-offset)] text-left observatory-focus hover:bg-zinc-50 @3xl:grid-cols-[auto_minmax(12rem,3fr)_minmax(10rem,2fr)_auto] @3xl:items-center",
      children: [
        /* @__PURE__ */ c.jsx(
          "span",
          {
            className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ c.jsx(
          r,
          {
            className: `size-4 h-lh shrink-0 ${O ? "fill-red-500" : "fill-zinc-400"}`
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "grid min-w-0 gap-1", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ c.jsx("div", { className: "truncate text-base/6 font-medium text-zinc-950 sm:text-sm/5", children: f.name }),
            /* @__PURE__ */ c.jsx("div", { className: "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm/5 text-zinc-500", children: f.type })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 flex-wrap gap-2 text-base/7 text-zinc-500 sm:text-sm/6", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "tabular-nums", children: [
              "#",
              f.sequence
            ] }),
            f.provider ? /* @__PURE__ */ c.jsx("div", { children: f.provider }) : null,
            f.model ? /* @__PURE__ */ c.jsx("div", { className: "truncate font-mono", children: f.model }) : null,
            /* @__PURE__ */ c.jsx("div", { className: "tabular-nums", children: nt(f.duration_ms) })
          ] }),
          f.error?.message ? /* @__PURE__ */ c.jsx("div", { className: "truncate text-base/7 text-red-600 sm:text-sm/6", children: f.error.message }) : null
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "relative hidden h-7 overflow-hidden rounded-md bg-zinc-100 @3xl:block", children: /* @__PURE__ */ c.jsx(
          "span",
          {
            className: yl(
              "absolute top-2 h-3 min-w-1 rounded-sm",
              O ? "bg-red-500" : f.type === "model" ? "bg-amber-500" : f.type === "tool" || f.type === "mcp" ? "bg-sky-500" : "bg-zinc-400",
              "left-(--span-left) w-(--span-width)"
            )
          }
        ) }),
        /* @__PURE__ */ c.jsx(As, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-500" })
      ]
    }
  );
}
function Uh({ span: f, onClose: d }) {
  const [v, r] = z.useState("request");
  return z.useEffect(() => {
    const O = [
      ["request", f?.request],
      ["response", f?.response],
      ["metadata", f?.metadata]
    ].find(([, D]) => D != null);
    r(O?.[0] ?? "request");
  }, [f]), f ? /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "fixed inset-0 z-60",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "span-title",
      children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Close span details",
            onClick: d,
            className: "absolute inset-0 bg-transparent"
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "absolute inset-y-0 right-0 flex w-full max-w-2xl animate-observatory-drawer-in flex-col bg-white shadow-2xl ring-1 ring-zinc-950/10", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-start justify-between gap-5 border-b border-zinc-950/10 p-5 sm:p-6", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "grid min-w-0 gap-2", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ c.jsx(ti, { status: f.status }),
                /* @__PURE__ */ c.jsx("div", { className: "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm/5 text-zinc-500", children: f.type })
              ] }),
              /* @__PURE__ */ c.jsx(
                "h2",
                {
                  id: "span-title",
                  className: "text-xl font-semibold text-balance text-zinc-950",
                  children: f.name
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: "font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6", children: f.span_id })
            ] }),
            /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                onClick: d,
                className: "relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100",
                "aria-label": "Close",
                children: [
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(li, { className: "size-4 shrink-0 fill-zinc-500" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "grow overflow-y-auto p-5 sm:p-6", children: [
            /* @__PURE__ */ c.jsxs("dl", { className: "grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3", children: [
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Duration" }),
                /* @__PURE__ */ c.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: nt(f.duration_ms) })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Tokens" }),
                /* @__PURE__ */ c.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Wt(f.total_tokens) })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Parent span" }),
                /* @__PURE__ */ c.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: f.parent_span_id ?? "Root" })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Provider" }),
                /* @__PURE__ */ c.jsx("dd", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: f.provider ?? "—" })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Model" }),
                /* @__PURE__ */ c.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: f.model ?? "—" })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Estimated cost" }),
                /* @__PURE__ */ c.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: ei(f.estimated_cost, f.currency) })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Time to first token" }),
                /* @__PURE__ */ c.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: nt(
                  f.metadata?.time_to_first_token_ms
                ) })
              ] })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "grid gap-5 pt-6", children: [
              f.error?.message ? /* @__PURE__ */ c.jsx("section", { className: "rounded-lg bg-red-50 p-4", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ c.jsx(Wd, { className: "size-4 h-lh shrink-0 fill-red-500" }),
                /* @__PURE__ */ c.jsxs("div", { className: "grid min-w-0 gap-1", children: [
                  /* @__PURE__ */ c.jsx("h3", { className: "text-base font-medium text-red-900", children: f.error.type ?? "Span failed" }),
                  /* @__PURE__ */ c.jsx("p", { className: "text-base/7 text-pretty break-words text-red-700 sm:text-sm/6", children: f.error.message })
                ] })
              ] }) }) : null,
              /* @__PURE__ */ c.jsxs("section", { "aria-label": "Span payloads", children: [
                /* @__PURE__ */ c.jsx("div", { className: "overflow-x-auto border-b border-zinc-950/10", children: /* @__PURE__ */ c.jsx("div", { className: "flex min-w-max gap-5", children: [
                  ["request", "Request", f.request],
                  ["response", "Response", f.response],
                  ["metadata", "Metadata", f.metadata]
                ].map(
                  ([O, D, R]) => R != null ? /* @__PURE__ */ c.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => r(O),
                      "aria-selected": v === O,
                      className: yl(
                        "relative border-b-2 py-2 text-sm/5 font-medium observatory-focus",
                        v === O ? "border-amber-500 text-zinc-950" : "border-transparent text-zinc-500 hover:text-zinc-900"
                      ),
                      children: [
                        /* @__PURE__ */ c.jsx(
                          "span",
                          {
                            className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                            "aria-hidden": "true"
                          }
                        ),
                        D
                      ]
                    },
                    O
                  ) : null
                ) }) }),
                v === "request" && f.request !== null ? /* @__PURE__ */ c.jsx(
                  Ba,
                  {
                    className: "pt-4",
                    label: "Request payload",
                    plain: !0,
                    value: f.request
                  }
                ) : null,
                v === "response" && f.response !== null ? /* @__PURE__ */ c.jsx(
                  Ba,
                  {
                    className: "pt-4",
                    label: "Response payload",
                    plain: !0,
                    value: f.response
                  }
                ) : null,
                v === "metadata" && f.metadata !== null ? /* @__PURE__ */ c.jsx(
                  Ba,
                  {
                    className: "pt-4",
                    label: "Span metadata",
                    plain: !0,
                    value: f.metadata
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
function Ch({
  className: f,
  error: d,
  loading: v,
  onBack: r,
  onExpand: O,
  onRetry: D,
  presentation: R = "page",
  trace: A
}) {
  const [M, S] = z.useState(null), L = z.useMemo(() => lo(A?.spans ?? []), [A]), B = R === "dialog";
  if (z.useEffect(() => S(null), [A?.trace_id]), z.useEffect(() => {
    if (!B && !M) return;
    function Z(Sl) {
      Sl.key === "Escape" && (M ? S(null) : r());
    }
    return window.addEventListener("keydown", Z), () => window.removeEventListener("keydown", Z);
  }, [B, r, M]), v || !A) {
    const Z = /* @__PURE__ */ c.jsx("div", { className: "grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:px-8", children: d ? /* @__PURE__ */ c.jsx("div", { className: "grid min-h-72 place-items-center text-center", children: /* @__PURE__ */ c.jsxs("div", { className: "grid max-w-md gap-3", children: [
      /* @__PURE__ */ c.jsx("h1", { className: "text-xl font-semibold text-zinc-950", children: "Trace could not be loaded" }),
      /* @__PURE__ */ c.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: d }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex justify-center gap-2", children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            type: "button",
            onClick: r,
            className: "relative rounded-md px-2.5 py-1.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50",
            children: "Close"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            type: "button",
            onClick: D,
            className: "relative rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm/5 font-medium text-white observatory-focus hover:bg-zinc-800",
            children: "Try again"
          }
        )
      ] })
    ] }) }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("div", { className: "h-8 w-56 animate-pulse rounded bg-zinc-100" }),
      /* @__PURE__ */ c.jsx("div", { className: "h-32 animate-pulse rounded bg-zinc-100" }),
      /* @__PURE__ */ c.jsx("div", { className: "h-96 animate-pulse rounded bg-zinc-100" })
    ] }) });
    return B ? /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: "fixed inset-0 z-50",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Trace details",
        children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Close trace details",
              onClick: r,
              className: "absolute inset-0 bg-transparent"
            }
          ),
          /* @__PURE__ */ c.jsx(
            "main",
            {
              className: yl(
                "absolute inset-y-0 right-0 w-full max-w-5xl animate-observatory-drawer-in overflow-y-auto bg-white shadow-2xl ring-1 ring-zinc-950/10",
                f
              ),
              children: Z
            }
          )
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      "main",
      {
        className: yl(
          "isolate mx-auto min-h-dvh max-w-7xl bg-white",
          f
        ),
        children: Z
      }
    );
  }
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    B ? /* @__PURE__ */ c.jsx(
      "button",
      {
        type: "button",
        "aria-label": "Close trace details",
        onClick: r,
        className: "fixed inset-0 z-40 bg-transparent"
      }
    ) : null,
    /* @__PURE__ */ c.jsxs(
      "main",
      {
        role: B ? "dialog" : void 0,
        "aria-modal": B ? "true" : void 0,
        "aria-labelledby": B ? "trace-title" : void 0,
        className: yl(
          B ? "fixed inset-y-0 right-0 z-50 w-full max-w-5xl animate-observatory-drawer-in overflow-y-auto bg-white shadow-2xl ring-1 ring-zinc-950/10" : "isolate min-h-dvh min-w-0 bg-white",
          f
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:px-8", children: [
            B ? /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end gap-1", children: [
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  type: "button",
                  onClick: O,
                  className: "relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100",
                  "aria-label": "Open full trace page",
                  title: "Open full page",
                  children: [
                    /* @__PURE__ */ c.jsx(
                      "span",
                      {
                        className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ c.jsx(J1, { className: "size-4 shrink-0 fill-zinc-500" })
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  type: "button",
                  onClick: r,
                  className: "relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100",
                  "aria-label": "Close trace details",
                  title: "Close",
                  children: [
                    /* @__PURE__ */ c.jsx(
                      "span",
                      {
                        className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ c.jsx(li, { className: "size-4 shrink-0 fill-zinc-500" })
                  ]
                }
              )
            ] }) : /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                onClick: r,
                className: "relative inline-flex w-fit items-center gap-1.5 rounded-md py-1 pr-2 pl-1 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
                children: [
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(Q1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                  "All traces"
                ]
              }
            ),
            /* @__PURE__ */ c.jsxs("header", { className: "grid gap-3 border-b border-zinc-950/10 pb-5", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ c.jsx(ti, { status: A.status }),
                A.feature ? /* @__PURE__ */ c.jsx("div", { className: "rounded-full bg-zinc-100 px-1.5 py-0.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/5 ring-inset", children: A.feature }) : null
              ] }),
              /* @__PURE__ */ c.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ c.jsx(
                  "h1",
                  {
                    id: "trace-title",
                    className: "text-2xl font-semibold tracking-tight text-balance text-zinc-950",
                    children: A.name
                  }
                ),
                /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 flex-wrap gap-x-4 gap-y-1 text-base/7 text-zinc-500 sm:text-sm/6", children: [
                  /* @__PURE__ */ c.jsx("div", { children: Rs(A.agent_class) }),
                  /* @__PURE__ */ c.jsxs("div", { className: "font-mono", children: [
                    A.provider ?? "—",
                    " /",
                    " ",
                    A.model ?? "—"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "@container", children: /* @__PURE__ */ c.jsxs("dl", { className: "grid gap-4 border-b border-zinc-950/10 pb-5 @md:grid-cols-3 @md:gap-5 @4xl:grid-cols-6", children: [
              /* @__PURE__ */ c.jsx(Ha, { label: "Status", value: A.status }),
              /* @__PURE__ */ c.jsx(
                Ha,
                {
                  label: "Duration",
                  value: nt(A.duration_ms)
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ha,
                {
                  label: "Total tokens",
                  value: Wt(A.total_tokens)
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ha,
                {
                  label: "Estimated cost",
                  value: ei(
                    A.estimated_cost,
                    A.currency
                  )
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ha,
                {
                  label: "Spans / tools",
                  value: `${A.span_count} / ${A.tool_count}`
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ha,
                {
                  label: "Started",
                  value: Qd(A.started_at)
                }
              )
            ] }) }),
            A.detail_limits?.spans_truncated || A.detail_limits?.events_truncated ? /* @__PURE__ */ c.jsxs("div", { className: "rounded-lg bg-amber-50 p-3 text-sm/6 text-amber-900 ring-1 ring-amber-600/10 ring-inset", children: [
              "This trace is larger than the dashboard display limit. Showing up to",
              " ",
              A.detail_limits.max_spans.toLocaleString(),
              " ",
              "spans and",
              " ",
              A.detail_limits.max_events.toLocaleString(),
              " ",
              "lifecycle events."
            ] }) : null,
            /* @__PURE__ */ c.jsxs("div", { className: "grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(16rem,2fr)]", children: [
              /* @__PURE__ */ c.jsxs(
                "section",
                {
                  className: "min-w-0",
                  "aria-labelledby": "timeline-heading",
                  children: [
                    /* @__PURE__ */ c.jsxs("div", { className: "flex items-end justify-between gap-4 border-b border-zinc-950/10 pb-4", children: [
                      /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
                        /* @__PURE__ */ c.jsx(
                          "h2",
                          {
                            id: "timeline-heading",
                            className: "text-xl font-semibold text-zinc-950",
                            children: "Trace timeline"
                          }
                        ),
                        /* @__PURE__ */ c.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "Select a span to inspect its request, response, usage, and errors." })
                      ] }),
                      /* @__PURE__ */ c.jsxs("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: [
                        A.span_count,
                        " spans"
                      ] })
                    ] }),
                    /* @__PURE__ */ c.jsxs("div", { className: "@container", children: [
                      /* @__PURE__ */ c.jsxs("div", { className: "hidden grid-cols-[auto_minmax(12rem,3fr)_minmax(10rem,2fr)_auto] gap-3 border-b border-zinc-950/10 py-2 pr-2 text-sm/5 font-medium text-zinc-500 @3xl:grid", children: [
                        /* @__PURE__ */ c.jsx("div", { className: "size-4" }),
                        /* @__PURE__ */ c.jsx("div", { children: "Operation" }),
                        /* @__PURE__ */ c.jsx("div", { children: "Waterfall" }),
                        /* @__PURE__ */ c.jsx("div", { className: "w-4" })
                      ] }),
                      L.map((Z) => /* @__PURE__ */ c.jsx(
                        wh,
                        {
                          span: Z,
                          trace: A,
                          onSelect: S
                        },
                        Z.span_id
                      ))
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(
                "aside",
                {
                  className: "min-w-0 lg:border-l lg:border-zinc-950/10 lg:pl-6",
                  "aria-label": "Trace context",
                  children: [
                    /* @__PURE__ */ c.jsx("h2", { className: "text-base font-medium text-zinc-950", children: "Run context" }),
                    /* @__PURE__ */ c.jsxs("dl", { className: "grid gap-4 pt-4", children: [
                      /* @__PURE__ */ c.jsxs("div", { children: [
                        /* @__PURE__ */ c.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Environment" }),
                        /* @__PURE__ */ c.jsx("dd", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: A.environment ?? "—" })
                      ] }),
                      /* @__PURE__ */ c.jsxs("div", { children: [
                        /* @__PURE__ */ c.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Agent class" }),
                        /* @__PURE__ */ c.jsx("dd", { className: "font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6", children: A.agent_class ?? "—" })
                      ] }),
                      /* @__PURE__ */ c.jsxs("div", { children: [
                        /* @__PURE__ */ c.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Trace ID" }),
                        /* @__PURE__ */ c.jsx("dd", { className: "font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6", children: A.trace_id })
                      ] }),
                      /* @__PURE__ */ c.jsxs("div", { children: [
                        /* @__PURE__ */ c.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Input / output" }),
                        /* @__PURE__ */ c.jsxs("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: [
                          Wt(A.input_tokens),
                          " /",
                          " ",
                          Wt(A.output_tokens)
                        ] })
                      ] }),
                      /* @__PURE__ */ c.jsxs("div", { children: [
                        /* @__PURE__ */ c.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "User / tenant" }),
                        /* @__PURE__ */ c.jsxs("dd", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: [
                          A.user?.id ?? "—",
                          " /",
                          " ",
                          A.tenant?.id ?? "—"
                        ] })
                      ] })
                    ] }),
                    A.tags ? /* @__PURE__ */ c.jsx("div", { className: "pt-5", children: /* @__PURE__ */ c.jsx(
                      Ba,
                      {
                        label: "Tags",
                        value: A.tags
                      }
                    ) }) : null,
                    A.metadata ? /* @__PURE__ */ c.jsx("div", { className: "pt-5", children: /* @__PURE__ */ c.jsx(
                      Ba,
                      {
                        label: "Metadata",
                        value: A.metadata
                      }
                    ) }) : null,
                    A.events?.length > 0 ? /* @__PURE__ */ c.jsxs("section", { className: "border-t border-zinc-950/10 pt-5", children: [
                      /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
                        /* @__PURE__ */ c.jsx("h2", { className: "text-base font-medium text-zinc-950", children: "Lifecycle events" }),
                        /* @__PURE__ */ c.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "Provider, retry, streaming, and failover events recorded during this trace." })
                      ] }),
                      /* @__PURE__ */ c.jsx("div", { className: "grid gap-3 pt-4", children: A.events.map((Z) => /* @__PURE__ */ c.jsxs(
                        "details",
                        {
                          className: "rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-950/5",
                          children: [
                            /* @__PURE__ */ c.jsx("summary", { className: "cursor-pointer list-none", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                              /* @__PURE__ */ c.jsx("div", { className: "font-mono text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: Z.event_type }),
                              /* @__PURE__ */ c.jsx("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Qd(
                                Z.occurred_at
                              ) })
                            ] }) }),
                            Z.payload ? /* @__PURE__ */ c.jsx(
                              Ba,
                              {
                                className: "mt-3",
                                label: "Event payload",
                                value: Z.payload
                              }
                            ) : null
                          ]
                        },
                        Z.id
                      )) })
                    ] }) : null
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            Uh,
            {
              span: M,
              onClose: () => S(null)
            }
          )
        ]
      }
    )
  ] });
}
function Hh({ columns: f }) {
  return Array.from({ length: 8 }, (d, v) => /* @__PURE__ */ c.jsx("tr", { className: "border-b border-zinc-950/5", children: f.map((r, O) => /* @__PURE__ */ c.jsx(
    "td",
    {
      className: yl(
        "px-4 py-3.5 align-middle",
        O === 0 && "pl-0",
        O === f.length - 1 && "pr-0",
        r.className
      ),
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          className: yl(
            "h-4 animate-pulse rounded bg-zinc-100",
            O === 0 ? "w-40" : "w-16",
            r.align === "right" && "ml-auto"
          )
        }
      )
    },
    r.key
  )) }, v));
}
function qh({
  columns: f,
  emptyState: d,
  loading: v,
  onRowClick: r,
  rowKey: O,
  rows: D
}) {
  function R(A, M) {
    A.type === "keydown" && (A.key !== "Enter" || A.target !== A.currentTarget) || r?.(M);
  }
  return /* @__PURE__ */ c.jsx("div", { className: "hidden min-h-0 grow flex-col lg:flex", children: /* @__PURE__ */ c.jsxs("div", { className: "min-h-0 grow overflow-auto", children: [
    /* @__PURE__ */ c.jsxs("table", { className: "w-full min-w-4xl text-sm", children: [
      /* @__PURE__ */ c.jsx("thead", { className: "sticky top-0 z-10 bg-zinc-50/95 backdrop-blur", children: /* @__PURE__ */ c.jsx("tr", { className: "border-b border-zinc-950/10", children: f.map((A, M) => /* @__PURE__ */ c.jsx(
        "th",
        {
          scope: "col",
          className: yl(
            "h-10 px-4 text-left align-middle text-xs/5 font-medium tracking-wide whitespace-nowrap text-zinc-500",
            M === 0 && "pl-0",
            M === f.length - 1 && "pr-0",
            A.align === "right" && "text-right",
            A.headerClassName
          ),
          children: A.header
        },
        A.key
      )) }) }),
      /* @__PURE__ */ c.jsxs("tbody", { children: [
        v && D.length === 0 ? /* @__PURE__ */ c.jsx(Hh, { columns: f }) : null,
        D.map((A) => /* @__PURE__ */ c.jsx(
          "tr",
          {
            role: r ? "link" : void 0,
            tabIndex: r ? 0 : void 0,
            onClick: (M) => R(M, A),
            onKeyDown: (M) => R(M, A),
            className: yl(
              "group border-b border-zinc-950/5 transition-colors",
              r && "cursor-pointer observatory-focus hover:bg-zinc-50 focus-visible:bg-amber-50/40"
            ),
            children: f.map((M, S) => /* @__PURE__ */ c.jsx(
              "td",
              {
                className: yl(
                  "px-4 py-3 align-middle",
                  S === 0 && "pl-0",
                  S === f.length - 1 && "pr-0",
                  M.align === "right" && "text-right",
                  M.className
                ),
                children: M.cell(A)
              },
              M.key
            ))
          },
          O(A)
        ))
      ] })
    ] }),
    !v && D.length === 0 ? d : null
  ] }) });
}
function qa({
  className: f,
  icon: d,
  label: v,
  labelHidden: r = !1,
  name: O,
  type: D = "text",
  ...R
}) {
  const A = /* @__PURE__ */ c.jsx(
    "input",
    {
      id: O,
      type: D,
      name: O,
      className: yl(
        "w-full observatory-control py-2.5 pr-3 text-base/6 text-zinc-900 placeholder:text-zinc-400 max-sm:text-base/6 sm:py-1.5 sm:text-sm/5",
        d ? "pl-9" : "pl-3"
      ),
      ...R
    }
  );
  return /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: O,
      className: yl("grid", !r && "gap-1.5", f),
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: yl(
              "text-base/6 font-medium text-zinc-700 sm:text-sm/5",
              r && "sr-only"
            ),
            children: v
          }
        ),
        d ? /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ c.jsx(d, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 fill-zinc-400" }),
          A
        ] }) : A
      ]
    }
  );
}
function Ot({ className: f, label: d, name: v, onChange: r, options: O, value: D }) {
  return /* @__PURE__ */ c.jsxs("label", { htmlFor: v, className: yl("grid gap-1.5", f), children: [
    /* @__PURE__ */ c.jsx("div", { className: "text-base/6 font-medium text-zinc-700 sm:text-sm/5", children: d }),
    /* @__PURE__ */ c.jsxs("div", { className: "inline-grid grid-cols-[1fr_--spacing(8)]", children: [
      /* @__PURE__ */ c.jsxs(
        "select",
        {
          id: v,
          name: v,
          value: D,
          onChange: r,
          className: "col-span-full row-start-1 appearance-none observatory-control py-2.5 pr-8 pl-3 text-base/6 text-zinc-900 sm:py-1.5 sm:text-sm/5",
          children: [
            /* @__PURE__ */ c.jsx("option", { value: "", children: "All" }),
            O.map((R) => /* @__PURE__ */ c.jsx(
              "option",
              {
                value: typeof R == "string" ? R : R.value,
                children: typeof R == "string" ? R : R.label
              },
              typeof R == "string" ? R : R.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ c.jsx(ah, { className: "pointer-events-none col-start-2 row-start-1 size-4 place-self-center fill-zinc-400" })
    ] })
  ] });
}
const Bh = {
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
function Yh({ className: f, filters: d, options: v, onChange: r, onReset: O }) {
  const [D, R] = z.useState(!1), A = Object.entries(d).filter(
    ([S, L]) => !["page", "per_page", "search"].includes(S) && L !== ""
  );
  function M(S) {
    r(S.target.name, S.target.value);
  }
  return /* @__PURE__ */ c.jsxs(
    "section",
    {
      className: yl("grid gap-3", f),
      "aria-label": "Trace search and filters",
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
          /* @__PURE__ */ c.jsx(
            qa,
            {
              className: "min-w-0 grow",
              icon: ph,
              type: "search",
              name: "search",
              label: "Search traces",
              labelHidden: !0,
              value: d.search,
              onChange: M,
              placeholder: "Search prompt, response, tool, error, or trace ID"
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "flex shrink-0 gap-2", children: [
            /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                onClick: () => R((S) => !S),
                className: "relative inline-flex grow items-center justify-center gap-2 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-700 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:grow-0 sm:py-1.5",
                "aria-controls": "trace-filters",
                "aria-expanded": D,
                children: [
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(G1, { className: "size-4 h-lh shrink-0 fill-zinc-500" }),
                  "Filters",
                  A.length > 0 ? /* @__PURE__ */ c.jsx("span", { className: "rounded-full bg-amber-100 px-1.5 text-amber-900 tabular-nums", children: A.length }) : null
                ]
              }
            ),
            A.length > 0 || d.search ? /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                onClick: O,
                className: "relative inline-flex items-center justify-center gap-1.5 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100 sm:py-1.5",
                children: [
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(li, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                  "Clear"
                ]
              }
            ) : null
          ] })
        ] }),
        A.length > 0 && !D ? /* @__PURE__ */ c.jsx("ul", { className: "flex flex-wrap gap-2", role: "list", children: A.map(([S, L]) => /* @__PURE__ */ c.jsxs(
          "li",
          {
            className: "rounded-md bg-zinc-100 px-2 py-1 text-sm/5 text-zinc-600",
            children: [
              /* @__PURE__ */ c.jsxs("span", { className: "font-medium text-zinc-900", children: [
                Bh[S] ?? S,
                ":"
              ] }),
              " ",
              String(L)
            ]
          },
          S
        )) }) : null,
        D ? /* @__PURE__ */ c.jsx(
          "div",
          {
            id: "trace-filters",
            className: "@container rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-950/5 ring-inset",
            children: /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-1 gap-4 @md:grid-cols-2 @4xl:grid-cols-4", children: [
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  name: "status",
                  label: "Status",
                  value: d.status,
                  options: v.statuses ?? [],
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  name: "provider",
                  label: "Provider",
                  value: d.provider,
                  options: v.providers ?? [],
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  name: "model",
                  label: "Model",
                  value: d.model,
                  options: v.models ?? [],
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  name: "agent_class",
                  label: "Agent",
                  value: d.agent_class,
                  options: v.agents ?? [],
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  name: "span_type",
                  label: "Span type",
                  value: d.span_type,
                  options: v.span_types ?? [],
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  name: "feature",
                  label: "Feature",
                  value: d.feature,
                  options: v.features ?? [],
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  name: "has_error",
                  label: "Errors",
                  value: d.has_error,
                  options: [
                    { value: "1", label: "Has errors" },
                    { value: "0", label: "No errors" }
                  ],
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  name: "has_tool_calls",
                  label: "Tool calls",
                  value: d.has_tool_calls,
                  options: [
                    { value: "1", label: "Has tool calls" },
                    { value: "0", label: "No tool calls" }
                  ],
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                qa,
                {
                  type: "number",
                  min: "0",
                  name: "min_duration",
                  label: "Minimum duration (ms)",
                  value: d.min_duration,
                  onChange: M,
                  placeholder: "Any duration"
                }
              ),
              /* @__PURE__ */ c.jsx(
                qa,
                {
                  type: "date",
                  name: "started_after",
                  label: "Started after",
                  value: d.started_after,
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                qa,
                {
                  type: "date",
                  name: "started_before",
                  label: "Started before",
                  value: d.started_before,
                  onChange: M
                }
              ),
              /* @__PURE__ */ c.jsx(
                qa,
                {
                  name: "user",
                  label: "User ID",
                  value: d.user,
                  onChange: M,
                  placeholder: "Any user"
                }
              ),
              /* @__PURE__ */ c.jsx(
                qa,
                {
                  name: "tenant",
                  label: "Tenant ID",
                  value: d.tenant,
                  onChange: M,
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
function Zh({ className: f, meta: d, onPage: v, onPerPage: r, perPage: O }) {
  if (!d) return null;
  const D = d.total === 0 ? 0 : (d.current_page - 1) * d.per_page + 1, R = Math.min(d.current_page * d.per_page, d.total);
  return /* @__PURE__ */ c.jsxs(
    "nav",
    {
      className: yl(
        "flex flex-col gap-3 border-t border-zinc-950/10 py-3 sm:flex-row sm:items-center sm:justify-between",
        f
      ),
      "aria-label": "Pagination",
      children: [
        /* @__PURE__ */ c.jsxs("p", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: [
          "Showing",
          " ",
          /* @__PURE__ */ c.jsx("span", { className: "font-medium text-zinc-900", children: D }),
          "–",
          /* @__PURE__ */ c.jsx("span", { className: "font-medium text-zinc-900", children: R }),
          " of",
          " ",
          /* @__PURE__ */ c.jsx("span", { className: "font-medium text-zinc-900", children: d.total.toLocaleString() })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between gap-3 sm:justify-end", children: [
          /* @__PURE__ */ c.jsxs("label", { className: "flex items-center gap-2 text-sm/5 text-zinc-500", children: [
            /* @__PURE__ */ c.jsx("span", { className: "max-sm:sr-only", children: "Rows" }),
            /* @__PURE__ */ c.jsx(
              "select",
              {
                "aria-label": "Rows per page",
                value: O,
                onChange: (A) => r(Number(A.target.value)),
                className: "rounded-md bg-white py-1.5 pr-7 pl-2 text-sm/5 text-zinc-700 ring-1 ring-zinc-950/10 observatory-focus",
                children: [25, 50, 100].map((A) => /* @__PURE__ */ c.jsxs("option", { value: A, children: [
                  A,
                  " / page"
                ] }, A))
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("span", { className: "text-sm/5 whitespace-nowrap text-zinc-500 tabular-nums", children: [
            "Page",
            " ",
            /* @__PURE__ */ c.jsx("span", { className: "font-medium text-zinc-900", children: d.current_page }),
            " ",
            "of ",
            d.last_page
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                onClick: () => v(d.current_page - 1),
                disabled: d.current_page === 1,
                "aria-label": "Previous page",
                className: "relative inline-grid size-8 place-items-center rounded-md text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40",
                children: [
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(uh, { className: "size-4 h-lh shrink-0 fill-zinc-400" })
                ]
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                onClick: () => v(d.current_page + 1),
                disabled: d.current_page === d.last_page,
                "aria-label": "Next page",
                className: "relative inline-grid size-8 place-items-center rounded-md text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40",
                children: [
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(As, { className: "size-4 h-lh shrink-0 fill-zinc-400" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Gh({ filtered: f }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "flex min-h-72 flex-col items-center justify-center gap-3 py-12 text-center", children: [
    /* @__PURE__ */ c.jsx(Ms, { className: "size-4 shrink-0 fill-zinc-400" }),
    /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
      /* @__PURE__ */ c.jsx("h2", { className: "text-base font-medium text-zinc-950", children: f ? "No matching traces" : "No traces yet" }),
      /* @__PURE__ */ c.jsx("p", { className: "max-w-[52ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: f ? "Clear a filter or try a broader search." : "Run a Laravel AI agent. Its execution will appear here automatically." })
    ] })
  ] });
}
function to({ trace: f, onNavigate: d }) {
  const v = Rs(f.agent_class);
  function r(O) {
    O.stopPropagation(), d(f.trace_id);
  }
  return /* @__PURE__ */ c.jsxs("div", { className: "grid min-w-0 gap-0.5", children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        onClick: r,
        className: "group relative min-w-0 rounded text-left observatory-focus",
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 items-center gap-1.5", children: [
            /* @__PURE__ */ c.jsx("div", { className: "truncate text-base font-medium text-zinc-950 sm:text-sm/5", children: v !== "—" ? v : f.name }),
            /* @__PURE__ */ c.jsx(kd, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-600" })
          ] }),
          /* @__PURE__ */ c.jsx(
            "span",
            {
              className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 flex-wrap gap-x-1.5 text-base/7 text-zinc-500 sm:text-sm/6", children: [
      f.feature ? /* @__PURE__ */ c.jsx("span", { children: f.feature }) : null,
      f.feature && f.tool_count > 0 ? /* @__PURE__ */ c.jsx("span", { children: "·" }) : null,
      f.tool_count > 0 ? /* @__PURE__ */ c.jsxs("span", { className: "tabular-nums", children: [
        f.tool_count,
        " ",
        f.tool_count === 1 ? "tool call" : "tool calls"
      ] }) : null,
      !f.feature && f.tool_count === 0 ? /* @__PURE__ */ c.jsx("span", { children: f.name }) : null
    ] })
  ] });
}
function Xh() {
  return Array.from({ length: 6 }, (f, d) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "grid animate-pulse gap-3 border-b border-zinc-950/5 py-4",
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "h-4 w-2/5 rounded bg-zinc-100" }),
        /* @__PURE__ */ c.jsx("div", { className: "h-3 w-3/5 rounded bg-zinc-100" })
      ]
    },
    d
  ));
}
function Qh({ trace: f, onNavigate: d }) {
  return /* @__PURE__ */ c.jsxs(
    "article",
    {
      onClick: () => d(f.trace_id),
      className: "grid cursor-pointer gap-3 border-b border-zinc-950/10 py-4 lg:hidden",
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 items-start justify-between gap-3", children: [
          /* @__PURE__ */ c.jsx(to, { trace: f, onNavigate: d }),
          /* @__PURE__ */ c.jsx(ti, { status: f.status, compact: !0 })
        ] }),
        /* @__PURE__ */ c.jsxs("dl", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ c.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Model" }),
            /* @__PURE__ */ c.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500", children: f.model ?? "—" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            /* @__PURE__ */ c.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Tokens" }),
            /* @__PURE__ */ c.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums", children: Wt(f.total_tokens) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            /* @__PURE__ */ c.jsx("dt", { className: "text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: "Latency" }),
            /* @__PURE__ */ c.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums", children: nt(f.duration_ms) })
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            title: f.started_at,
            className: "text-base/7 text-zinc-500 tabular-nums",
            children: Os(f.started_at)
          }
        )
      ]
    }
  );
}
function Lh({
  className: f,
  filters: d,
  loading: v,
  meta: r,
  onFilter: O,
  onNavigate: D,
  onPage: R,
  onPerPage: A,
  onRefresh: M,
  onReset: S,
  traces: L
}) {
  const B = Object.entries(d).some(
    ([V, pl]) => !["page", "per_page"].includes(V) && pl !== ""
  ), Z = [
    {
      key: "agent",
      header: "Agent",
      className: "w-[32%]",
      cell: (V) => /* @__PURE__ */ c.jsx("div", { className: "min-w-56", children: /* @__PURE__ */ c.jsx(to, { trace: V, onNavigate: D }) })
    },
    {
      key: "status",
      header: "Status",
      cell: (V) => /* @__PURE__ */ c.jsx(ti, { status: V.status, compact: !0 })
    },
    {
      key: "model",
      header: "Provider / model",
      className: "w-[20%]",
      cell: (V) => /* @__PURE__ */ c.jsxs("div", { className: "grid gap-0.5", children: [
        /* @__PURE__ */ c.jsx("div", { className: "text-sm/5 text-zinc-900", children: V.provider ?? "—" }),
        /* @__PURE__ */ c.jsx("div", { className: "max-w-48 truncate font-mono text-xs/5 text-zinc-500", children: V.model ?? "—" })
      ] })
    },
    {
      key: "tokens",
      header: "Tokens",
      align: "right",
      cell: (V) => /* @__PURE__ */ c.jsx("span", { className: "text-zinc-900 tabular-nums", children: Wt(V.total_tokens) })
    },
    {
      key: "cost",
      header: "Cost",
      align: "right",
      cell: (V) => /* @__PURE__ */ c.jsx("span", { className: "text-zinc-500 tabular-nums", children: ei(V.estimated_cost, V.currency) })
    },
    {
      key: "latency",
      header: "Latency",
      align: "right",
      cell: (V) => /* @__PURE__ */ c.jsx("span", { className: "text-zinc-900 tabular-nums", children: nt(V.duration_ms) })
    },
    {
      key: "started",
      header: "Started",
      align: "right",
      cell: (V) => /* @__PURE__ */ c.jsx(
        "time",
        {
          dateTime: V.started_at,
          title: V.started_at,
          className: "text-zinc-600 tabular-nums",
          children: Os(V.started_at)
        }
      )
    }
  ], Sl = /* @__PURE__ */ c.jsx(Gh, { filtered: B });
  return /* @__PURE__ */ c.jsx(
    "main",
    {
      className: yl(
        "isolate min-h-dvh min-w-0 bg-white lg:h-dvh lg:overflow-hidden",
        f
      ),
      children: /* @__PURE__ */ c.jsxs("div", { className: "mx-auto flex min-h-0 max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:h-full lg:px-8", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex min-w-0 items-baseline gap-3", children: [
            /* @__PURE__ */ c.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-balance text-zinc-950", children: "Traces" }),
            /* @__PURE__ */ c.jsx("div", { className: "truncate text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: r ? `${r.total.toLocaleString()} recorded` : "Loading" })
          ] }),
          /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              onClick: M,
              className: "relative inline-flex shrink-0 items-center gap-1.5 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:py-1.5",
              children: [
                /* @__PURE__ */ c.jsx(
                  "span",
                  {
                    className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ c.jsx(
                  $d,
                  {
                    className: yl(
                      "size-4 h-lh shrink-0 fill-zinc-400",
                      v && "animate-spin"
                    )
                  }
                ),
                "Refresh"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c.jsx(
          Yh,
          {
            filters: d,
            options: r?.filter_options ?? {},
            onChange: O,
            onReset: S
          }
        ),
        /* @__PURE__ */ c.jsxs(
          "section",
          {
            className: "flex min-h-0 grow flex-col",
            "aria-label": "Recorded traces",
            children: [
              /* @__PURE__ */ c.jsxs("div", { className: "lg:hidden", children: [
                v && L.length === 0 ? /* @__PURE__ */ c.jsx(Xh, {}) : null,
                v ? null : L.map((V) => /* @__PURE__ */ c.jsx(
                  Qh,
                  {
                    trace: V,
                    onNavigate: D
                  },
                  V.trace_id
                )),
                !v && L.length === 0 ? Sl : null
              ] }),
              /* @__PURE__ */ c.jsx(
                qh,
                {
                  columns: Z,
                  emptyState: Sl,
                  loading: v,
                  rows: L,
                  rowKey: (V) => V.trace_id,
                  onRowClick: (V) => D(V.trace_id)
                }
              ),
              /* @__PURE__ */ c.jsx(
                Zh,
                {
                  className: "shrink-0",
                  meta: r,
                  perPage: d.per_page,
                  onPage: R,
                  onPerPage: A
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
const Cn = {
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
}, Un = {
  failures: { status: "failed" },
  tools: { has_tool_calls: "1" },
  slow: { min_duration: "1000" }
}, Vh = Object.keys(Cn);
function Vd(f, d = null) {
  const v = {
    ...Cn,
    ...Un[d] ?? {}
  };
  for (const r of Vh) {
    if (!f.has(r)) continue;
    const O = f.get(r);
    if (r === "page" || r === "per_page") {
      const D = Number.parseInt(O, 10);
      Number.isInteger(D) && D > 0 && (v[r] = D);
    } else
      v[r] = O ?? "";
  }
  return v;
}
function Kd(f, d, v, r = null) {
  const O = new URLSearchParams();
  for (const [R, A] of Object.entries(d))
    A !== Cn[R] && A !== "" && A !== null && O.set(R, String(A));
  v && Object.hasOwn(Un, v) && O.set("view", v), r && O.set("trace", r);
  const D = O.toString();
  return `${f}/traces${D ? `?${D}` : ""}`;
}
const ao = [
  {
    label: "Observe",
    items: [
      {
        id: "overview",
        label: "Overview",
        icon: P1
      },
      { id: "traces", label: "Traces", icon: Sh }
    ]
  },
  {
    label: "Reports",
    items: [
      {
        id: "failures",
        label: "Failures",
        icon: yh
      },
      {
        id: "tools",
        label: "Tool calls",
        icon: Fd
      },
      { id: "slow", label: "Slow traces", icon: dh }
    ]
  }
];
function no({ basePath: f, onView: d }) {
  function v(r) {
    r.preventDefault(), d("overview");
  }
  return /* @__PURE__ */ c.jsxs(
    "a",
    {
      href: `${f}/overview`,
      onClick: v,
      "aria-label": "AI Observatory overview",
      className: "flex min-w-0 items-center gap-2 rounded observatory-focus",
      children: [
        /* @__PURE__ */ c.jsx(Ms, { className: "size-4 shrink-0 fill-amber-500" }),
        /* @__PURE__ */ c.jsx("div", { className: "truncate text-base font-semibold tracking-tight text-zinc-950", children: "AI Observatory" })
      ]
    }
  );
}
function uo({ active: f, basePath: d, item: v, onView: r, roomy: O = !1 }) {
  const D = v.icon, R = v.id === "overview" ? `${d}/overview` : v.id === "traces" ? `${d}/traces` : `${d}/traces?view=${v.id}`;
  function A(M) {
    M.preventDefault(), r(v.id);
  }
  return /* @__PURE__ */ c.jsxs(
    "a",
    {
      href: R,
      onClick: A,
      "aria-current": f ? "page" : void 0,
      className: yl(
        "flex items-center gap-2 rounded-lg pr-3 pl-2 font-medium observatory-focus",
        O ? "py-2.5 text-base/6 sm:text-sm/5" : "py-2 text-sm/5",
        f ? "bg-zinc-100 text-zinc-950" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
      ),
      children: [
        /* @__PURE__ */ c.jsx(
          D,
          {
            className: yl(
              "size-4 h-lh shrink-0",
              f ? "fill-zinc-600" : "fill-zinc-400"
            )
          }
        ),
        v.label
      ]
    }
  );
}
function Kh({ activeView: f, basePath: d, config: v, onView: r }) {
  return /* @__PURE__ */ c.jsxs("aside", { className: "fixed inset-y-0 left-0 z-40 hidden w-56 flex-col border-r border-zinc-950/10 bg-white lg:flex", children: [
    /* @__PURE__ */ c.jsx("div", { className: "flex h-14 shrink-0 items-center border-b border-zinc-950/10 px-4", children: /* @__PURE__ */ c.jsx(no, { basePath: d, onView: r }) }),
    /* @__PURE__ */ c.jsx(
      "nav",
      {
        className: "grid grow content-start gap-5 p-3",
        "aria-label": "Main navigation",
        children: ao.map((O) => /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
          /* @__PURE__ */ c.jsx("div", { className: "px-2 text-xs/5 font-medium tracking-wide text-zinc-400 uppercase", children: O.label }),
          O.items.map((D) => /* @__PURE__ */ c.jsx(
            uo,
            {
              active: f === D.id,
              basePath: d,
              item: D,
              onView: r
            },
            D.id
          ))
        ] }, O.label))
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1 border-t border-zinc-950/10 p-4", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 text-sm/5 font-medium text-zinc-900", children: [
        /* @__PURE__ */ c.jsx("span", { className: "size-1.5 shrink-0 rounded-full bg-emerald-500" }),
        "Recording enabled"
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "text-sm/5 text-zinc-500", children: [
        v.environment,
        " · ",
        v.recordingMode
      ] })
    ] })
  ] });
}
function Jh({ activeView: f, basePath: d, onView: v }) {
  const [r, O] = z.useState(!1);
  function D(R) {
    O(!1), v(R);
  }
  return /* @__PURE__ */ c.jsxs("header", { className: "sticky top-0 z-40 border-b border-zinc-950/10 bg-white/95 backdrop-blur lg:hidden", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex h-14 items-center justify-between gap-4 px-4 sm:px-6", children: [
      /* @__PURE__ */ c.jsx(no, { basePath: d, onView: D }),
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          onClick: () => O((R) => !R),
          className: "relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100",
          "aria-label": "Toggle navigation",
          "aria-expanded": r,
          children: [
            /* @__PURE__ */ c.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            r ? /* @__PURE__ */ c.jsx(li, { className: "size-4 shrink-0 fill-zinc-500" }) : /* @__PURE__ */ c.jsx(k1, { className: "size-4 shrink-0 fill-zinc-500" })
          ]
        }
      )
    ] }),
    r ? /* @__PURE__ */ c.jsx(
      "nav",
      {
        className: "grid gap-4 border-t border-zinc-950/10 p-3",
        "aria-label": "Mobile navigation",
        children: ao.map((R) => /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
          /* @__PURE__ */ c.jsx("div", { className: "px-2 text-xs/5 font-medium tracking-wide text-zinc-400 uppercase", children: R.label }),
          R.items.map((A) => /* @__PURE__ */ c.jsx(
            uo,
            {
              active: f === A.id,
              basePath: d,
              item: A,
              onView: D,
              roomy: !0
            },
            A.id
          ))
        ] }, R.label))
      }
    ) : null
  ] });
}
function Jd({ message: f, onRetry: d }) {
  return /* @__PURE__ */ c.jsx("div", { className: "mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col justify-between gap-3 rounded-lg bg-red-50 p-4 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ c.jsx("p", { className: "text-base/7 text-pretty text-red-700 sm:text-sm/6", children: f }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        onClick: d,
        className: "relative w-fit rounded-md px-2.5 py-1.5 text-sm/5 font-medium text-red-700 ring-1 ring-red-600/20 observatory-focus hover:bg-red-100",
        children: [
          /* @__PURE__ */ c.jsx(
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
function $h({ className: f }) {
  const d = window.AiObservatory, v = new URLSearchParams(window.location.search), r = v.get("trace"), O = v.get("view"), D = window.location.pathname.endsWith("/overview") ? "overview" : "traces", [R, A] = z.useState(D), [M, S] = z.useState(
    D === "overview" ? "overview" : Object.hasOwn(Un, O) ? O : "traces"
  ), [L, B] = z.useState(
    d.initialTraceId ?? r
  ), [Z, Sl] = z.useState(
    d.initialTraceId ? "page" : r ? "dialog" : null
  ), [V, pl] = z.useState({
    ...Vd(v, O)
  }), [ge, Vl] = z.useState([]), [Ue, Dl] = z.useState(null), [Jl, $l] = z.useState(null), [Cl, F] = z.useState(!0), [Xl, kl] = z.useState(
    !!(d.initialTraceId ?? r)
  ), [Ce, ne] = z.useState(null), [Ql, Ae] = z.useState(null), [Me, ue] = z.useState(null), [N, w] = z.useState(
    D === "overview"
  ), [X, cl] = z.useState(null), [sl, h] = z.useState(0), _ = z.useRef(null), U = z.useMemo(() => Th(V), [V]), H = z.useCallback(
    (C, ol = "dialog", nl = !1) => {
      let ye;
      if (C && ol === "page")
        ye = `${d.basePath}/traces/${C}`, A("traces"), S("traces");
      else if (C) {
        const Wl = new URL(window.location.href);
        Wl.searchParams.set("trace", C), ye = `${Wl.pathname}${Wl.search}`;
      } else {
        const Wl = new URL(window.location.href);
        Wl.searchParams.has("trace") ? (Wl.searchParams.delete("trace"), ye = `${Wl.pathname}${Wl.search}`) : (ye = Kd(d.basePath, V, M), A("traces"));
      }
      window.history[nl ? "replaceState" : "pushState"](
        { traceId: C, mode: C ? ol : null },
        "",
        ye
      ), B(C), Sl(C ? ol : null), window.scrollTo({ top: 0 });
    },
    [M, d.basePath, V]
  );
  z.useEffect(() => {
    function C() {
      const ol = `${d.basePath}/traces/`, nl = new URLSearchParams(window.location.search), ye = window.location.pathname.startsWith(ol) ? window.location.pathname.slice(ol.length).split("/")[0] : null, Wl = nl.get("trace"), Oe = window.location.pathname.endsWith("/overview") ? "overview" : "traces", Rt = nl.get("view");
      A(Oe), S(
        Oe === "overview" ? "overview" : Object.hasOwn(Un, Rt) ? Rt : "traces"
      ), Oe === "traces" && pl(Vd(nl, Rt)), B(ye || Wl || null), Sl(
        ye ? "page" : Wl ? "dialog" : null
      );
    }
    return window.addEventListener("popstate", C), () => window.removeEventListener("popstate", C);
  }, [d.basePath]), z.useEffect(() => {
    if (R !== "traces" || Z === "page") return;
    const C = Kd(
      d.basePath,
      V,
      M,
      Z === "dialog" ? L : null
    ), ol = `${window.location.pathname}${window.location.search}`;
    C !== ol && window.history.replaceState(
      { traceId: L, mode: Z, view: M },
      "",
      C
    );
  }, [M, d.basePath, Z, V, R, L]), z.useEffect(() => {
    const C = new AbortController();
    if (R !== "traces" || Z === "page")
      return () => C.abort();
    const ol = window.setTimeout(async () => {
      F(!0), ne(null);
      try {
        const nl = await Es(
          `${d.apiBase}?${U}&include_filter_options=${_.current === null ? "1" : "0"}`,
          C.signal
        );
        Vl(nl.data), nl.meta.filter_options && (_.current = nl.meta.filter_options), Dl({
          ...nl.meta,
          filter_options: _.current ?? {}
        });
      } catch (nl) {
        nl.name !== "AbortError" && ne(nl.message);
      } finally {
        C.signal.aborted || F(!1);
      }
    }, 250);
    return () => {
      window.clearTimeout(ol), C.abort();
    };
  }, [d.apiBase, Z, U, R, sl]), z.useEffect(() => {
    const C = new AbortController();
    if (R !== "overview")
      return () => C.abort();
    w(!0), cl(null);
    async function ol() {
      try {
        const nl = await Es(
          d.overviewApi,
          C.signal
        );
        ue(nl.data);
      } catch (nl) {
        nl.name !== "AbortError" && cl(nl.message);
      } finally {
        C.signal.aborted || w(!1);
      }
    }
    return ol(), () => C.abort();
  }, [d.overviewApi, R, sl]), z.useEffect(() => {
    const C = new AbortController();
    if (!L)
      return $l(null), Ae(null), kl(!1), () => C.abort();
    $l(null), kl(!0), Ae(null);
    async function ol() {
      try {
        const nl = await Es(
          `${d.apiBase}/${L}`,
          C.signal
        );
        $l(nl.data);
      } catch (nl) {
        nl.name !== "AbortError" && Ae(nl.message);
      } finally {
        C.signal.aborted || kl(!1);
      }
    }
    return ol(), () => C.abort();
  }, [d.apiBase, sl, L]);
  function K(C, ol) {
    pl((nl) => ({ ...nl, [C]: ol, page: 1 }));
  }
  function W(C) {
    const ol = C === "overview" ? "overview" : "traces", nl = C === "overview" ? `${d.basePath}/overview` : C === "traces" ? `${d.basePath}/traces` : `${d.basePath}/traces?view=${C}`;
    window.history.pushState({ view: C }, "", nl), A(ol), S(C), B(null), Sl(null), pl({
      ...Cn,
      ...Un[C] ?? {}
    }), window.scrollTo({ top: 0 });
  }
  function al() {
    pl(Cn), S("traces"), window.history.replaceState(
      { view: "traces" },
      "",
      `${d.basePath}/traces`
    );
  }
  const Hl = Ce && !Cl && ge.length === 0;
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: yl(
        "isolate min-h-dvh bg-zinc-50 font-sans text-zinc-950",
        f
      ),
      children: [
        /* @__PURE__ */ c.jsx(
          Kh,
          {
            activeView: M,
            basePath: d.basePath,
            config: d,
            onView: W
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "min-w-0 lg:pl-56", children: [
          /* @__PURE__ */ c.jsx(
            Jh,
            {
              activeView: M,
              basePath: d.basePath,
              onView: W
            }
          ),
          R === "traces" && Ce && Z !== "page" ? /* @__PURE__ */ c.jsx(
            Jd,
            {
              message: Ce,
              onRetry: () => h((C) => C + 1)
            }
          ) : null,
          R === "overview" && X ? /* @__PURE__ */ c.jsx(
            Jd,
            {
              message: X,
              onRetry: () => h((C) => C + 1)
            }
          ) : null,
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              inert: Z === "dialog" ? !0 : void 0,
              "aria-hidden": Z === "dialog" ? !0 : void 0,
              children: [
                R === "overview" && Z !== "page" ? /* @__PURE__ */ c.jsx(
                  Mh,
                  {
                    data: Me,
                    loading: N,
                    onNavigate: H,
                    onRefresh: () => h((C) => C + 1)
                  }
                ) : null,
                R === "traces" && Z !== "page" && !Hl ? /* @__PURE__ */ c.jsx(
                  Lh,
                  {
                    filters: V,
                    loading: Cl,
                    meta: Ue,
                    traces: ge,
                    onFilter: K,
                    onNavigate: H,
                    onPage: (C) => pl((ol) => ({ ...ol, page: C })),
                    onPerPage: (C) => pl((ol) => ({
                      ...ol,
                      page: 1,
                      per_page: C
                    })),
                    onRefresh: () => h((C) => C + 1),
                    onReset: al
                  }
                ) : null
              ]
            }
          ),
          L && Z ? /* @__PURE__ */ c.jsx(
            Ch,
            {
              error: Ql,
              loading: Xl,
              presentation: Z,
              trace: Jl,
              onBack: () => H(null),
              onExpand: () => H(L, "page"),
              onRetry: () => h((C) => C + 1)
            }
          ) : null
        ] })
      ]
    }
  );
}
class kh extends z.Component {
  constructor(d) {
    super(d), this.state = { error: null };
  }
  static getDerivedStateFromError(d) {
    return { error: d };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ c.jsx("main", { className: "grid min-h-dvh place-items-center bg-zinc-50 px-4 font-sans text-zinc-950", children: /* @__PURE__ */ c.jsxs("section", { className: "grid w-full max-w-lg gap-4 rounded-xl bg-white p-6 ring-1 ring-zinc-950/10", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "grid gap-1", children: [
        /* @__PURE__ */ c.jsx("h1", { className: "text-lg font-semibold", children: "The dashboard could not be rendered" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-sm/6 text-zinc-600", children: "Your recorded traces are safe. Reload the dashboard to try again." })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          onClick: () => window.location.reload(),
          className: "w-fit rounded-lg bg-zinc-950 px-3 py-2 text-sm/5 font-medium text-white observatory-focus hover:bg-zinc-800",
          children: "Reload dashboard"
        }
      )
    ] }) }) : this.props.children;
  }
}
Y1.createRoot(document.getElementById("ai-observatory")).render(
  /* @__PURE__ */ c.jsx(z.StrictMode, { children: /* @__PURE__ */ c.jsx(kh, { children: /* @__PURE__ */ c.jsx($h, {}) }) })
);
