var of = { exports: {} }, jn = {};
var Nr;
function v1() {
  if (Nr) return jn;
  Nr = 1;
  var d = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.fragment");
  function x(s, B, Y) {
    var X = null;
    if (Y !== void 0 && (X = "" + Y), B.key !== void 0 && (X = "" + B.key), "key" in B) {
      Y = {};
      for (var k in B)
        k !== "key" && (Y[k] = B[k]);
    } else Y = B;
    return B = Y.ref, {
      $$typeof: d,
      type: s,
      key: X,
      ref: B !== void 0 ? B : null,
      props: Y
    };
  }
  return jn.Fragment = h, jn.jsx = x, jn.jsxs = x, jn;
}
var Tr;
function y1() {
  return Tr || (Tr = 1, of.exports = v1()), of.exports;
}
var f = y1(), mf = { exports: {} }, Q = {};
var _r;
function g1() {
  if (_r) return Q;
  _r = 1;
  var d = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), B = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.consumer"), X = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), N = /* @__PURE__ */ Symbol.for("react.memo"), K = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), nl = Symbol.iterator;
  function Yl(m) {
    return m === null || typeof m != "object" ? null : (m = nl && m[nl] || m["@@iterator"], typeof m == "function" ? m : null);
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
  }, Ol = Object.assign, xt = {};
  function Zl(m, T, M) {
    this.props = m, this.context = T, this.refs = xt, this.updater = M || Ml;
  }
  Zl.prototype.isReactComponent = {}, Zl.prototype.setState = function(m, T) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, T, "setState");
  }, Zl.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function pt() {
  }
  pt.prototype = Zl.prototype;
  function El(m, T, M) {
    this.props = m, this.context = T, this.refs = xt, this.updater = M || Ml;
  }
  var wl = El.prototype = new pt();
  wl.constructor = El, Ol(wl, Zl.prototype), wl.isPureReactComponent = !0;
  var ft = Array.isArray;
  function P() {
  }
  var G = { H: null, A: null, T: null, S: null }, fl = Object.prototype.hasOwnProperty;
  function Tt(m, T, M) {
    var U = M.ref;
    return {
      $$typeof: d,
      type: m,
      key: T,
      ref: U !== void 0 ? U : null,
      props: M
    };
  }
  function we(m, T) {
    return Tt(m.type, T, m.props);
  }
  function _t(m) {
    return typeof m == "object" && m !== null && m.$$typeof === d;
  }
  function Vl(m) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(M) {
      return T[M];
    });
  }
  var Ee = /\/+/g;
  function Rt(m, T) {
    return typeof m == "object" && m !== null && m.key != null ? Vl("" + m.key) : T.toString(36);
  }
  function St(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(P, P) : (m.status = "pending", m.then(
          function(T) {
            m.status === "pending" && (m.status = "fulfilled", m.value = T);
          },
          function(T) {
            m.status === "pending" && (m.status = "rejected", m.reason = T);
          }
        )), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function z(m, T, M, U, w) {
    var J = typeof m;
    (J === "undefined" || J === "boolean") && (m = null);
    var ul = !1;
    if (m === null) ul = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          ul = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case d:
            case h:
              ul = !0;
              break;
            case K:
              return ul = m._init, z(
                ul(m._payload),
                T,
                M,
                U,
                w
              );
          }
      }
    if (ul)
      return w = w(m), ul = U === "" ? "." + Rt(m, 0) : U, ft(w) ? (M = "", ul != null && (M = ul.replace(Ee, "$&/") + "/"), z(w, T, M, "", function(Oa) {
        return Oa;
      })) : w != null && (_t(w) && (w = we(
        w,
        M + (w.key == null || m && m.key === w.key ? "" : ("" + w.key).replace(
          Ee,
          "$&/"
        ) + "/") + ul
      )), T.push(w)), 1;
    ul = 0;
    var Xl = U === "" ? "." : U + ":";
    if (ft(m))
      for (var pl = 0; pl < m.length; pl++)
        U = m[pl], J = Xl + Rt(U, pl), ul += z(
          U,
          T,
          M,
          J,
          w
        );
    else if (pl = Yl(m), typeof pl == "function")
      for (m = pl.call(m), pl = 0; !(U = m.next()).done; )
        U = U.value, J = Xl + Rt(U, pl++), ul += z(
          U,
          T,
          M,
          J,
          w
        );
    else if (J === "object") {
      if (typeof m.then == "function")
        return z(
          St(m),
          T,
          M,
          U,
          w
        );
      throw T = String(m), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ul;
  }
  function A(m, T, M) {
    if (m == null) return m;
    var U = [], w = 0;
    return z(m, U, "", "", function(J) {
      return T.call(M, J, w++);
    }), U;
  }
  function Z(m) {
    if (m._status === -1) {
      var T = m._result;
      T = T(), T.then(
        function(M) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = M);
        },
        function(M) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = M);
        }
      ), m._status === -1 && (m._status = 0, m._result = T);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var sl = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, ml = {
    map: A,
    forEach: function(m, T, M) {
      A(
        m,
        function() {
          T.apply(this, arguments);
        },
        M
      );
    },
    count: function(m) {
      var T = 0;
      return A(m, function() {
        T++;
      }), T;
    },
    toArray: function(m) {
      return A(m, function(T) {
        return T;
      }) || [];
    },
    only: function(m) {
      if (!_t(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return Q.Activity = D, Q.Children = ml, Q.Component = Zl, Q.Fragment = x, Q.Profiler = B, Q.PureComponent = El, Q.StrictMode = s, Q.Suspense = O, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return G.H.useMemoCache(m);
    }
  }, Q.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, Q.cacheSignal = function() {
    return null;
  }, Q.cloneElement = function(m, T, M) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var U = Ol({}, m.props), w = m.key;
    if (T != null)
      for (J in T.key !== void 0 && (w = "" + T.key), T)
        !fl.call(T, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && T.ref === void 0 || (U[J] = T[J]);
    var J = arguments.length - 2;
    if (J === 1) U.children = M;
    else if (1 < J) {
      for (var ul = Array(J), Xl = 0; Xl < J; Xl++)
        ul[Xl] = arguments[Xl + 2];
      U.children = ul;
    }
    return Tt(m.type, w, U);
  }, Q.createContext = function(m) {
    return m = {
      $$typeof: X,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: Y,
      _context: m
    }, m;
  }, Q.createElement = function(m, T, M) {
    var U, w = {}, J = null;
    if (T != null)
      for (U in T.key !== void 0 && (J = "" + T.key), T)
        fl.call(T, U) && U !== "key" && U !== "__self" && U !== "__source" && (w[U] = T[U]);
    var ul = arguments.length - 2;
    if (ul === 1) w.children = M;
    else if (1 < ul) {
      for (var Xl = Array(ul), pl = 0; pl < ul; pl++)
        Xl[pl] = arguments[pl + 2];
      w.children = Xl;
    }
    if (m && m.defaultProps)
      for (U in ul = m.defaultProps, ul)
        w[U] === void 0 && (w[U] = ul[U]);
    return Tt(m, J, w);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(m) {
    return { $$typeof: k, render: m };
  }, Q.isValidElement = _t, Q.lazy = function(m) {
    return {
      $$typeof: K,
      _payload: { _status: -1, _result: m },
      _init: Z
    };
  }, Q.memo = function(m, T) {
    return {
      $$typeof: N,
      type: m,
      compare: T === void 0 ? null : T
    };
  }, Q.startTransition = function(m) {
    var T = G.T, M = {};
    G.T = M;
    try {
      var U = m(), w = G.S;
      w !== null && w(M, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(P, sl);
    } catch (J) {
      sl(J);
    } finally {
      T !== null && M.types !== null && (T.types = M.types), G.T = T;
    }
  }, Q.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, Q.use = function(m) {
    return G.H.use(m);
  }, Q.useActionState = function(m, T, M) {
    return G.H.useActionState(m, T, M);
  }, Q.useCallback = function(m, T) {
    return G.H.useCallback(m, T);
  }, Q.useContext = function(m) {
    return G.H.useContext(m);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(m, T) {
    return G.H.useDeferredValue(m, T);
  }, Q.useEffect = function(m, T) {
    return G.H.useEffect(m, T);
  }, Q.useEffectEvent = function(m) {
    return G.H.useEffectEvent(m);
  }, Q.useId = function() {
    return G.H.useId();
  }, Q.useImperativeHandle = function(m, T, M) {
    return G.H.useImperativeHandle(m, T, M);
  }, Q.useInsertionEffect = function(m, T) {
    return G.H.useInsertionEffect(m, T);
  }, Q.useLayoutEffect = function(m, T) {
    return G.H.useLayoutEffect(m, T);
  }, Q.useMemo = function(m, T) {
    return G.H.useMemo(m, T);
  }, Q.useOptimistic = function(m, T) {
    return G.H.useOptimistic(m, T);
  }, Q.useReducer = function(m, T, M) {
    return G.H.useReducer(m, T, M);
  }, Q.useRef = function(m) {
    return G.H.useRef(m);
  }, Q.useState = function(m) {
    return G.H.useState(m);
  }, Q.useSyncExternalStore = function(m, T, M) {
    return G.H.useSyncExternalStore(
      m,
      T,
      M
    );
  }, Q.useTransition = function() {
    return G.H.useTransition();
  }, Q.version = "19.2.8", Q;
}
var Ar;
function bf() {
  return Ar || (Ar = 1, mf.exports = g1()), mf.exports;
}
var _ = bf(), hf = { exports: {} }, Nn = {}, vf = { exports: {} }, yf = {};
var Mr;
function b1() {
  return Mr || (Mr = 1, (function(d) {
    function h(z, A) {
      var Z = z.length;
      z.push(A);
      l: for (; 0 < Z; ) {
        var sl = Z - 1 >>> 1, ml = z[sl];
        if (0 < B(ml, A))
          z[sl] = A, z[Z] = ml, Z = sl;
        else break l;
      }
    }
    function x(z) {
      return z.length === 0 ? null : z[0];
    }
    function s(z) {
      if (z.length === 0) return null;
      var A = z[0], Z = z.pop();
      if (Z !== A) {
        z[0] = Z;
        l: for (var sl = 0, ml = z.length, m = ml >>> 1; sl < m; ) {
          var T = 2 * (sl + 1) - 1, M = z[T], U = T + 1, w = z[U];
          if (0 > B(M, Z))
            U < ml && 0 > B(w, M) ? (z[sl] = w, z[U] = Z, sl = U) : (z[sl] = M, z[T] = Z, sl = T);
          else if (U < ml && 0 > B(w, Z))
            z[sl] = w, z[U] = Z, sl = U;
          else break l;
        }
      }
      return A;
    }
    function B(z, A) {
      var Z = z.sortIndex - A.sortIndex;
      return Z !== 0 ? Z : z.id - A.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Y = performance;
      d.unstable_now = function() {
        return Y.now();
      };
    } else {
      var X = Date, k = X.now();
      d.unstable_now = function() {
        return X.now() - k;
      };
    }
    var O = [], N = [], K = 1, D = null, nl = 3, Yl = !1, Ml = !1, Ol = !1, xt = !1, Zl = typeof setTimeout == "function" ? setTimeout : null, pt = typeof clearTimeout == "function" ? clearTimeout : null, El = typeof setImmediate < "u" ? setImmediate : null;
    function wl(z) {
      for (var A = x(N); A !== null; ) {
        if (A.callback === null) s(N);
        else if (A.startTime <= z)
          s(N), A.sortIndex = A.expirationTime, h(O, A);
        else break;
        A = x(N);
      }
    }
    function ft(z) {
      if (Ol = !1, wl(z), !Ml)
        if (x(O) !== null)
          Ml = !0, P || (P = !0, Vl());
        else {
          var A = x(N);
          A !== null && St(ft, A.startTime - z);
        }
    }
    var P = !1, G = -1, fl = 5, Tt = -1;
    function we() {
      return xt ? !0 : !(d.unstable_now() - Tt < fl);
    }
    function _t() {
      if (xt = !1, P) {
        var z = d.unstable_now();
        Tt = z;
        var A = !0;
        try {
          l: {
            Ml = !1, Ol && (Ol = !1, pt(G), G = -1), Yl = !0;
            var Z = nl;
            try {
              t: {
                for (wl(z), D = x(O); D !== null && !(D.expirationTime > z && we()); ) {
                  var sl = D.callback;
                  if (typeof sl == "function") {
                    D.callback = null, nl = D.priorityLevel;
                    var ml = sl(
                      D.expirationTime <= z
                    );
                    if (z = d.unstable_now(), typeof ml == "function") {
                      D.callback = ml, wl(z), A = !0;
                      break t;
                    }
                    D === x(O) && s(O), wl(z);
                  } else s(O);
                  D = x(O);
                }
                if (D !== null) A = !0;
                else {
                  var m = x(N);
                  m !== null && St(
                    ft,
                    m.startTime - z
                  ), A = !1;
                }
              }
              break l;
            } finally {
              D = null, nl = Z, Yl = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Vl() : P = !1;
        }
      }
    }
    var Vl;
    if (typeof El == "function")
      Vl = function() {
        El(_t);
      };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), Rt = Ee.port2;
      Ee.port1.onmessage = _t, Vl = function() {
        Rt.postMessage(null);
      };
    } else
      Vl = function() {
        Zl(_t, 0);
      };
    function St(z, A) {
      G = Zl(function() {
        z(d.unstable_now());
      }, A);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, d.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : fl = 0 < z ? Math.floor(1e3 / z) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return nl;
    }, d.unstable_next = function(z) {
      switch (nl) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = nl;
      }
      var Z = nl;
      nl = A;
      try {
        return z();
      } finally {
        nl = Z;
      }
    }, d.unstable_requestPaint = function() {
      xt = !0;
    }, d.unstable_runWithPriority = function(z, A) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var Z = nl;
      nl = z;
      try {
        return A();
      } finally {
        nl = Z;
      }
    }, d.unstable_scheduleCallback = function(z, A, Z) {
      var sl = d.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? sl + Z : sl) : Z = sl, z) {
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
      return ml = Z + ml, z = {
        id: K++,
        callback: A,
        priorityLevel: z,
        startTime: Z,
        expirationTime: ml,
        sortIndex: -1
      }, Z > sl ? (z.sortIndex = Z, h(N, z), x(O) === null && z === x(N) && (Ol ? (pt(G), G = -1) : Ol = !0, St(ft, Z - sl))) : (z.sortIndex = ml, h(O, z), Ml || Yl || (Ml = !0, P || (P = !0, Vl()))), z;
    }, d.unstable_shouldYield = we, d.unstable_wrapCallback = function(z) {
      var A = nl;
      return function() {
        var Z = nl;
        nl = A;
        try {
          return z.apply(this, arguments);
        } finally {
          nl = Z;
        }
      };
    };
  })(yf)), yf;
}
var Or;
function x1() {
  return Or || (Or = 1, vf.exports = b1()), vf.exports;
}
var gf = { exports: {} }, Gl = {};
var Dr;
function p1() {
  if (Dr) return Gl;
  Dr = 1;
  var d = bf();
  function h(O) {
    var N = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      N += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var K = 2; K < arguments.length; K++)
        N += "&args[]=" + encodeURIComponent(arguments[K]);
    }
    return "Minified React error #" + O + "; visit " + N + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function x() {
  }
  var s = {
    d: {
      f: x,
      r: function() {
        throw Error(h(522));
      },
      D: x,
      C: x,
      L: x,
      m: x,
      X: x,
      S: x,
      M: x
    },
    p: 0,
    findDOMNode: null
  }, B = /* @__PURE__ */ Symbol.for("react.portal");
  function Y(O, N, K) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: D == null ? null : "" + D,
      children: O,
      containerInfo: N,
      implementation: K
    };
  }
  var X = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(O, N) {
    if (O === "font") return "";
    if (typeof N == "string")
      return N === "use-credentials" ? N : "";
  }
  return Gl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Gl.createPortal = function(O, N) {
    var K = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
      throw Error(h(299));
    return Y(O, N, null, K);
  }, Gl.flushSync = function(O) {
    var N = X.T, K = s.p;
    try {
      if (X.T = null, s.p = 2, O) return O();
    } finally {
      X.T = N, s.p = K, s.d.f();
    }
  }, Gl.preconnect = function(O, N) {
    typeof O == "string" && (N ? (N = N.crossOrigin, N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null, s.d.C(O, N));
  }, Gl.prefetchDNS = function(O) {
    typeof O == "string" && s.d.D(O);
  }, Gl.preinit = function(O, N) {
    if (typeof O == "string" && N && typeof N.as == "string") {
      var K = N.as, D = k(K, N.crossOrigin), nl = typeof N.integrity == "string" ? N.integrity : void 0, Yl = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
      K === "style" ? s.d.S(
        O,
        typeof N.precedence == "string" ? N.precedence : void 0,
        {
          crossOrigin: D,
          integrity: nl,
          fetchPriority: Yl
        }
      ) : K === "script" && s.d.X(O, {
        crossOrigin: D,
        integrity: nl,
        fetchPriority: Yl,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0
      });
    }
  }, Gl.preinitModule = function(O, N) {
    if (typeof O == "string")
      if (typeof N == "object" && N !== null) {
        if (N.as == null || N.as === "script") {
          var K = k(
            N.as,
            N.crossOrigin
          );
          s.d.M(O, {
            crossOrigin: K,
            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
            nonce: typeof N.nonce == "string" ? N.nonce : void 0
          });
        }
      } else N == null && s.d.M(O);
  }, Gl.preload = function(O, N) {
    if (typeof O == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
      var K = N.as, D = k(K, N.crossOrigin);
      s.d.L(O, K, {
        crossOrigin: D,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0,
        type: typeof N.type == "string" ? N.type : void 0,
        fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
        referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
        imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
        imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
        media: typeof N.media == "string" ? N.media : void 0
      });
    }
  }, Gl.preloadModule = function(O, N) {
    if (typeof O == "string")
      if (N) {
        var K = k(N.as, N.crossOrigin);
        s.d.m(O, {
          as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
          crossOrigin: K,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0
        });
      } else s.d.m(O);
  }, Gl.requestFormReset = function(O) {
    s.d.r(O);
  }, Gl.unstable_batchedUpdates = function(O, N) {
    return O(N);
  }, Gl.useFormState = function(O, N, K) {
    return X.H.useFormState(O, N, K);
  }, Gl.useFormStatus = function() {
    return X.H.useHostTransitionStatus();
  }, Gl.version = "19.2.8", Gl;
}
var Rr;
function S1() {
  if (Rr) return gf.exports;
  Rr = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (h) {
        console.error(h);
      }
  }
  return d(), gf.exports = p1(), gf.exports;
}
var Ur;
function z1() {
  if (Ur) return Nn;
  Ur = 1;
  var d = x1(), h = bf(), x = S1();
  function s(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function B(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Y(l) {
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
  function X(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function k(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function O(l) {
    if (Y(l) !== l)
      throw Error(s(188));
  }
  function N(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Y(l), t === null) throw Error(s(188));
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
          if (u === e) return O(n), l;
          if (u === a) return O(n), t;
          u = u.sibling;
        }
        throw Error(s(188));
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
          if (!i) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? l : t;
  }
  function K(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = K(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var D = Object.assign, nl = /* @__PURE__ */ Symbol.for("react.element"), Yl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ml = /* @__PURE__ */ Symbol.for("react.portal"), Ol = /* @__PURE__ */ Symbol.for("react.fragment"), xt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Zl = /* @__PURE__ */ Symbol.for("react.profiler"), pt = /* @__PURE__ */ Symbol.for("react.consumer"), El = /* @__PURE__ */ Symbol.for("react.context"), wl = /* @__PURE__ */ Symbol.for("react.forward_ref"), ft = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), fl = /* @__PURE__ */ Symbol.for("react.lazy"), Tt = /* @__PURE__ */ Symbol.for("react.activity"), we = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), _t = Symbol.iterator;
  function Vl(l) {
    return l === null || typeof l != "object" ? null : (l = _t && l[_t] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ee = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Rt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ee ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ol:
        return "Fragment";
      case Zl:
        return "Profiler";
      case xt:
        return "StrictMode";
      case ft:
        return "Suspense";
      case P:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ml:
          return "Portal";
        case El:
          return l.displayName || "Context";
        case pt:
          return (l._context.displayName || "Context") + ".Consumer";
        case wl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case G:
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
  var St = Array.isArray, z = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, sl = [], ml = -1;
  function m(l) {
    return { current: l };
  }
  function T(l) {
    0 > ml || (l.current = sl[ml], sl[ml] = null, ml--);
  }
  function M(l, t) {
    ml++, sl[ml] = l.current, l.current = t;
  }
  var U = m(null), w = m(null), J = m(null), ul = m(null);
  function Xl(l, t) {
    switch (M(J, t), M(w, l), M(U, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? $d(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = $d(t), l = Wd(t, l);
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
    T(U), M(U, l);
  }
  function pl() {
    T(U), T(w), T(J);
  }
  function Oa(l) {
    l.memoizedState !== null && M(ul, l);
    var t = U.current, e = Wd(t, l.type);
    t !== e && (M(w, l), M(U, e));
  }
  function Mn(l) {
    w.current === l && (T(U), T(w)), ul.current === l && (T(ul), pn._currentValue = Z);
  }
  var Ju, jf;
  function je(l) {
    if (Ju === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Ju = t && t[1] || "", jf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ju + l + jf;
  }
  var $u = !1;
  function Wu(l, t) {
    if (!l || $u) return "";
    $u = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var j = function() {
                throw Error();
              };
              if (Object.defineProperty(j.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(j, []);
                } catch (p) {
                  var b = p;
                }
                Reflect.construct(l, [], j);
              } else {
                try {
                  j.call();
                } catch (p) {
                  b = p;
                }
                l.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                b = p;
              }
              (j = l()) && typeof j.catch == "function" && j.catch(function() {
              });
            }
          } catch (p) {
            if (p && b && typeof p.stack == "string")
              return [p.stack, b.stack];
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
      $u = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? je(e) : "";
  }
  function Lr(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return je(l.type);
      case 16:
        return je("Lazy");
      case 13:
        return l.child !== t && t !== null ? je("Suspense Fallback") : je("Suspense");
      case 19:
        return je("SuspenseList");
      case 0:
      case 15:
        return Wu(l.type, !1);
      case 11:
        return Wu(l.type.render, !1);
      case 1:
        return Wu(l.type, !0);
      case 31:
        return je("Activity");
      default:
        return "";
    }
  }
  function Nf(l) {
    try {
      var t = "", e = null;
      do
        t += Lr(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ku = Object.prototype.hasOwnProperty, Fu = d.unstable_scheduleCallback, Iu = d.unstable_cancelCallback, Kr = d.unstable_shouldYield, Jr = d.unstable_requestPaint, Il = d.unstable_now, $r = d.unstable_getCurrentPriorityLevel, Tf = d.unstable_ImmediatePriority, _f = d.unstable_UserBlockingPriority, On = d.unstable_NormalPriority, Wr = d.unstable_LowPriority, Af = d.unstable_IdlePriority, kr = d.log, Fr = d.unstable_setDisableYieldValue, Da = null, Pl = null;
  function Ft(l) {
    if (typeof kr == "function" && Fr(l), Pl && typeof Pl.setStrictMode == "function")
      try {
        Pl.setStrictMode(Da, l);
      } catch {
      }
  }
  var lt = Math.clz32 ? Math.clz32 : lo, Ir = Math.log, Pr = Math.LN2;
  function lo(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ir(l) / Pr | 0) | 0;
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
  function Ra(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function to(l, t) {
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
  function Mf() {
    var l = Un;
    return Un <<= 1, (Un & 62914560) === 0 && (Un = 4194304), l;
  }
  function Pu(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ua(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function eo(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, r = l.expirationTimes, g = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var S = 31 - lt(e), j = 1 << S;
      c[S] = 0, r[S] = -1;
      var b = g[S];
      if (b !== null)
        for (g[S] = null, S = 0; S < b.length; S++) {
          var p = b[S];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~j;
    }
    a !== 0 && Of(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
  }
  function Of(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - lt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Df(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - lt(e), n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), e &= ~n;
    }
  }
  function Rf(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : li(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function li(l) {
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
  function ti(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Uf() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : br(l.type));
  }
  function Hf(l, t) {
    var e = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = e;
    }
  }
  var It = Math.random().toString(36).slice(2), Ul = "__reactFiber$" + It, Ll = "__reactProps$" + It, Ve = "__reactContainer$" + It, ei = "__reactEvents$" + It, ao = "__reactListeners$" + It, no = "__reactHandles$" + It, Cf = "__reactResources$" + It, Ha = "__reactMarker$" + It;
  function ai(l) {
    delete l[Ul], delete l[Ll], delete l[ei], delete l[ao], delete l[no];
  }
  function Le(l) {
    var t = l[Ul];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Ve] || e[Ul]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = er(l); l !== null; ) {
            if (e = l[Ul]) return e;
            l = er(l);
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
  function Ca(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(s(33));
  }
  function Je(l) {
    var t = l[Cf];
    return t || (t = l[Cf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dl(l) {
    l[Ha] = !0;
  }
  var Bf = /* @__PURE__ */ new Set(), qf = {};
  function Te(l, t) {
    $e(l, t), $e(l + "Capture", t);
  }
  function $e(l, t) {
    for (qf[l] = t, l = 0; l < t.length; l++)
      Bf.add(t[l]);
  }
  var uo = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Yf = {}, Zf = {};
  function io(l) {
    return ku.call(Zf, l) ? !0 : ku.call(Yf, l) ? !1 : uo.test(l) ? Zf[l] = !0 : (Yf[l] = !0, !1);
  }
  function Cn(l, t, e) {
    if (io(t))
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
  function Bn(l, t, e) {
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
  function st(l) {
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
  function Gf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function co(l, t, e) {
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
  function ni(l) {
    if (!l._valueTracker) {
      var t = Gf(l) ? "checked" : "value";
      l._valueTracker = co(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Xf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Gf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function qn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var fo = /[\n"\\]/g;
  function dt(l) {
    return l.replace(
      fo,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ui(l, t, e, a, n, u, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + st(t)) : l.value !== "" + st(t) && (l.value = "" + st(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? ii(l, i, st(t)) : e != null ? ii(l, i, st(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + st(c) : l.removeAttribute("name");
  }
  function Qf(l, t, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ni(l);
        return;
      }
      e = e != null ? "" + st(e) : "", t = t != null ? "" + st(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ni(l);
  }
  function ii(l, t, e) {
    t === "number" && qn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function We(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < e.length; n++)
        t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + st(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wf(l, t, e) {
    if (t != null && (t = "" + st(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + st(e) : "";
  }
  function Vf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (St(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = st(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ni(l);
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
  var so = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Lf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || so.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Kf(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && e[n] !== a && Lf(l, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Lf(l, u, t[u]);
  }
  function ci(l) {
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
  var ro = /* @__PURE__ */ new Map([
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
  ]), oo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yn(l) {
    return oo.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ht() {
  }
  var fi = null;
  function si(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Fe = null, Ie = null;
  function Jf(l) {
    var t = Ke(l);
    if (t && (l = t.stateNode)) {
      var e = l[Ll] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ui(
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
              'input[name="' + dt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[Ll] || null;
                if (!n) throw Error(s(90));
                ui(
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
              a = e[t], a.form === l.form && Xf(a);
          }
          break l;
        case "textarea":
          wf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && We(l, !!e.multiple, t, !1);
      }
    }
  }
  var di = !1;
  function $f(l, t, e) {
    if (di) return l(t, e);
    di = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (di = !1, (Fe !== null || Ie !== null) && (Nu(), Fe && (t = Fe, l = Ie, Ie = Fe = null, Jf(t), l)))
        for (t = 0; t < l.length; t++) Jf(l[t]);
    }
  }
  function Ba(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Ll] || null;
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
        s(231, t, typeof e)
      );
    return e;
  }
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ri = !1;
  if (Ct)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          ri = !0;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      ri = !1;
    }
  var Pt = null, oi = null, Zn = null;
  function Wf() {
    if (Zn) return Zn;
    var l, t = oi, e = t.length, a, n = "value" in Pt ? Pt.value : Pt.textContent, u = n.length;
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
  function kf() {
    return !1;
  }
  function Kl(l) {
    function t(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xn : kf, this.isPropagationStopped = kf, this;
    }
    return D(t.prototype, {
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
  var _e = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Qn = Kl(_e), Ya = D({}, _e, { view: 0, detail: 0 }), mo = Kl(Ya), mi, hi, Za, wn = D({}, Ya, {
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
    getModifierState: yi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Za && (Za && l.type === "mousemove" ? (mi = l.screenX - Za.screenX, hi = l.screenY - Za.screenY) : hi = mi = 0, Za = l), mi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : hi;
    }
  }), Ff = Kl(wn), ho = D({}, wn, { dataTransfer: 0 }), vo = Kl(ho), yo = D({}, Ya, { relatedTarget: 0 }), vi = Kl(yo), go = D({}, _e, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bo = Kl(go), xo = D({}, _e, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), po = Kl(xo), So = D({}, _e, { data: 0 }), If = Kl(So), zo = {
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
  }, Eo = {
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
  }, jo = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function No(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = jo[l]) ? !!t[l] : !1;
  }
  function yi() {
    return No;
  }
  var To = D({}, Ya, {
    key: function(l) {
      if (l.key) {
        var t = zo[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Gn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Eo[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yi,
    charCode: function(l) {
      return l.type === "keypress" ? Gn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Gn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), _o = Kl(To), Ao = D({}, wn, {
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
  }), Pf = Kl(Ao), Mo = D({}, Ya, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yi
  }), Oo = Kl(Mo), Do = D({}, _e, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ro = Kl(Do), Uo = D({}, wn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ho = Kl(Uo), Co = D({}, _e, {
    newState: 0,
    oldState: 0
  }), Bo = Kl(Co), qo = [9, 13, 27, 32], gi = Ct && "CompositionEvent" in window, Ga = null;
  Ct && "documentMode" in document && (Ga = document.documentMode);
  var Yo = Ct && "TextEvent" in window && !Ga, ls = Ct && (!gi || Ga && 8 < Ga && 11 >= Ga), ts = " ", es = !1;
  function as(l, t) {
    switch (l) {
      case "keyup":
        return qo.indexOf(t.keyCode) !== -1;
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
  function ns(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Pe = !1;
  function Zo(l, t) {
    switch (l) {
      case "compositionend":
        return ns(t);
      case "keypress":
        return t.which !== 32 ? null : (es = !0, ts);
      case "textInput":
        return l = t.data, l === ts && es ? null : l;
      default:
        return null;
    }
  }
  function Go(l, t) {
    if (Pe)
      return l === "compositionend" || !gi && as(l, t) ? (l = Wf(), Zn = oi = Pt = null, Pe = !1, l) : null;
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
        return ls && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Xo = {
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
  function us(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Xo[l.type] : t === "textarea";
  }
  function is(l, t, e, a) {
    Fe ? Ie ? Ie.push(a) : Ie = [a] : Fe = a, t = Ru(t, "onChange"), 0 < t.length && (e = new Qn(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var Xa = null, Qa = null;
  function Qo(l) {
    Qd(l, 0);
  }
  function Vn(l) {
    var t = Ca(l);
    if (Xf(t)) return l;
  }
  function cs(l, t) {
    if (l === "change") return t;
  }
  var fs = !1;
  if (Ct) {
    var bi;
    if (Ct) {
      var xi = "oninput" in document;
      if (!xi) {
        var ss = document.createElement("div");
        ss.setAttribute("oninput", "return;"), xi = typeof ss.oninput == "function";
      }
      bi = xi;
    } else bi = !1;
    fs = bi && (!document.documentMode || 9 < document.documentMode);
  }
  function ds() {
    Xa && (Xa.detachEvent("onpropertychange", rs), Qa = Xa = null);
  }
  function rs(l) {
    if (l.propertyName === "value" && Vn(Qa)) {
      var t = [];
      is(
        t,
        Qa,
        l,
        si(l)
      ), $f(Qo, t);
    }
  }
  function wo(l, t, e) {
    l === "focusin" ? (ds(), Xa = t, Qa = e, Xa.attachEvent("onpropertychange", rs)) : l === "focusout" && ds();
  }
  function Vo(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vn(Qa);
  }
  function Lo(l, t) {
    if (l === "click") return Vn(t);
  }
  function Ko(l, t) {
    if (l === "input" || l === "change")
      return Vn(t);
  }
  function Jo(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var tt = typeof Object.is == "function" ? Object.is : Jo;
  function wa(l, t) {
    if (tt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!ku.call(t, n) || !tt(l[n], t[n]))
        return !1;
    }
    return !0;
  }
  function os(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ms(l, t) {
    var e = os(l);
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
      e = os(e);
    }
  }
  function hs(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = qn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = qn(l.document);
    }
    return t;
  }
  function pi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var $o = Ct && "documentMode" in document && 11 >= document.documentMode, la = null, Si = null, Va = null, zi = !1;
  function ys(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    zi || la == null || la !== qn(a) || (a = la, "selectionStart" in a && pi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Va && wa(Va, a) || (Va = a, a = Ru(Si, "onSelect"), 0 < a.length && (t = new Qn(
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
  }, Ei = {}, gs = {};
  Ct && (gs = document.createElement("div").style, "AnimationEvent" in window || (delete ta.animationend.animation, delete ta.animationiteration.animation, delete ta.animationstart.animation), "TransitionEvent" in window || delete ta.transitionend.transition);
  function Me(l) {
    if (Ei[l]) return Ei[l];
    if (!ta[l]) return l;
    var t = ta[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in gs)
        return Ei[l] = t[e];
    return l;
  }
  var bs = Me("animationend"), xs = Me("animationiteration"), ps = Me("animationstart"), Wo = Me("transitionrun"), ko = Me("transitionstart"), Fo = Me("transitioncancel"), Ss = Me("transitionend"), zs = /* @__PURE__ */ new Map(), ji = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ji.push("scrollEnd");
  function zt(l, t) {
    zs.set(l, t), Te(t, [l]);
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
  }, rt = [], ea = 0, Ni = 0;
  function Kn() {
    for (var l = ea, t = Ni = ea = 0; t < l; ) {
      var e = rt[t];
      rt[t++] = null;
      var a = rt[t];
      rt[t++] = null;
      var n = rt[t];
      rt[t++] = null;
      var u = rt[t];
      if (rt[t++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Es(e, n, u);
    }
  }
  function Jn(l, t, e, a) {
    rt[ea++] = l, rt[ea++] = t, rt[ea++] = e, rt[ea++] = a, Ni |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ti(l, t, e, a) {
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
    return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - lt(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = e | 536870912), u) : null;
  }
  function $n(l) {
    if (50 < mn)
      throw mn = 0, Cc = null, Error(s(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var aa = {};
  function Io(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, e, a) {
    return new Io(l, t, e, a);
  }
  function _i(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Bt(l, t) {
    var e = l.alternate;
    return e === null ? (e = et(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function js(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Wn(l, t, e, a, n, u) {
    var i = 0;
    if (a = l, typeof l == "function") _i(l) && (i = 1);
    else if (typeof l == "string")
      i = a1(
        l,
        e,
        U.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Tt:
          return l = et(31, e, t, n), l.elementType = Tt, l.lanes = u, l;
        case Ol:
          return De(e.children, n, u, t);
        case xt:
          i = 8, n |= 24;
          break;
        case Zl:
          return l = et(12, e, t, n | 2), l.elementType = Zl, l.lanes = u, l;
        case ft:
          return l = et(13, e, t, n), l.elementType = ft, l.lanes = u, l;
        case P:
          return l = et(19, e, t, n), l.elementType = P, l.lanes = u, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case El:
                i = 10;
                break l;
              case pt:
                i = 9;
                break l;
              case wl:
                i = 11;
                break l;
              case G:
                i = 14;
                break l;
              case fl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            s(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = et(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t;
  }
  function De(l, t, e, a) {
    return l = et(7, l, a, t), l.lanes = e, l;
  }
  function Ai(l, t, e) {
    return l = et(6, l, null, t), l.lanes = e, l;
  }
  function Ns(l) {
    var t = et(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Mi(l, t, e) {
    return t = et(
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
  function ot(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ts.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Nf(t)
      }, Ts.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Nf(t)
    };
  }
  var na = [], ua = 0, kn = null, La = 0, mt = [], ht = 0, le = null, At = 1, Mt = "";
  function qt(l, t) {
    na[ua++] = La, na[ua++] = kn, kn = l, La = t;
  }
  function _s(l, t, e) {
    mt[ht++] = At, mt[ht++] = Mt, mt[ht++] = le, le = l;
    var a = At;
    l = Mt;
    var n = 32 - lt(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - lt(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, At = 1 << 32 - lt(t) + n | e << n | a, Mt = u + l;
    } else
      At = 1 << u | e << n | a, Mt = l;
  }
  function Oi(l) {
    l.return !== null && (qt(l, 1), _s(l, 1, 0));
  }
  function Di(l) {
    for (; l === kn; )
      kn = na[--ua], na[ua] = null, La = na[--ua], na[ua] = null;
    for (; l === le; )
      le = mt[--ht], mt[ht] = null, Mt = mt[--ht], mt[ht] = null, At = mt[--ht], mt[ht] = null;
  }
  function As(l, t) {
    mt[ht++] = At, mt[ht++] = Mt, mt[ht++] = le, At = t.id, Mt = t.overflow, le = l;
  }
  var Hl = null, vl = null, ll = !1, te = null, vt = !1, Ri = Error(s(519));
  function ee(l) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ka(ot(t, l)), Ri;
  }
  function Ms(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Ul] = l, t[Ll] = a, e) {
      case "dialog":
        W("cancel", t), W("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < vn.length; e++)
          W(vn[e], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        W("error", t), W("load", t);
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        W("invalid", t), Qf(
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
        W("invalid", t);
        break;
      case "textarea":
        W("invalid", t), Vf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Kd(t.textContent, e) ? (a.popover != null && (W("beforetoggle", t), W("toggle", t)), a.onScroll != null && W("scroll", t), a.onScrollEnd != null && W("scrollend", t), a.onClick != null && (t.onclick = Ht), t = !0) : t = !1, t || ee(l, !0);
  }
  function Os(l) {
    for (Hl = l.return; Hl; )
      switch (Hl.tag) {
        case 5:
        case 31:
        case 13:
          vt = !1;
          return;
        case 27:
        case 3:
          vt = !0;
          return;
        default:
          Hl = Hl.return;
      }
  }
  function ia(l) {
    if (l !== Hl) return !1;
    if (!ll) return Os(l), ll = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || kc(l.type, l.memoizedProps)), e = !e), e && vl && ee(l), Os(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
      vl = tr(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
      vl = tr(l);
    } else
      t === 27 ? (t = vl, ye(l.type) ? (l = tf, tf = null, vl = l) : vl = t) : vl = Hl ? gt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Re() {
    vl = Hl = null, ll = !1;
  }
  function Ui() {
    var l = te;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), te = null), l;
  }
  function Ka(l) {
    te === null ? te = [l] : te.push(l);
  }
  var Hi = m(null), Ue = null, Yt = null;
  function ae(l, t, e) {
    M(Hi, t._currentValue), t._currentValue = e;
  }
  function Zt(l) {
    l._currentValue = Hi.current, T(Hi);
  }
  function Ci(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Bi(l, t, e, a) {
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
              u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Ci(
                u.return,
                e,
                l
              ), a || (i = null);
              break l;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(s(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Ci(i, e, l), i = null;
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
        if (i === null) throw Error(s(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          tt(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === ul.current) {
        if (i = n.alternate, i === null) throw Error(s(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(pn) : l = [pn]);
      }
      n = n.return;
    }
    l !== null && Bi(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function Fn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!tt(
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
    return Ds(Ue, l);
  }
  function In(l, t) {
    return Ue === null && He(l), Ds(l, t);
  }
  function Ds(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Yt === null) {
      if (l === null) throw Error(s(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return e;
  }
  var Po = typeof AbortController < "u" ? AbortController : function() {
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
  }, lm = d.unstable_scheduleCallback, tm = d.unstable_NormalPriority, jl = {
    $$typeof: El,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function qi() {
    return {
      controller: new Po(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ja(l) {
    l.refCount--, l.refCount === 0 && lm(tm, function() {
      l.controller.abort();
    });
  }
  var $a = null, Yi = 0, fa = 0, sa = null;
  function em(l, t) {
    if ($a === null) {
      var e = $a = [];
      Yi = 0, fa = Xc(), sa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Yi++, t.then(Rs, Rs), t;
  }
  function Rs() {
    if (--Yi === 0 && $a !== null) {
      sa !== null && (sa.status = "fulfilled");
      var l = $a;
      $a = null, fa = 0, sa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function am(l, t) {
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
  var Us = z.S;
  z.S = function(l, t) {
    yd = Il(), typeof t == "object" && t !== null && typeof t.then == "function" && em(l, t), Us !== null && Us(l, t);
  };
  var Ce = m(null);
  function Zi() {
    var l = Ce.current;
    return l !== null ? l : hl.pooledCache;
  }
  function Pn(l, t) {
    t === null ? M(Ce, Ce.current) : M(Ce, t.pool);
  }
  function Hs() {
    var l = Zi();
    return l === null ? null : { parent: jl._currentValue, pool: l };
  }
  var da = Error(s(460)), Gi = Error(s(474)), lu = Error(s(542)), tu = { then: function() {
  } };
  function Cs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Bs(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Ht, Ht), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ys(l), l;
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (l = hl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(s(482));
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
            throw l = t.reason, Ys(l), l;
        }
        throw qe = t, da;
    }
  }
  function Be(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (qe = e, da) : e;
    }
  }
  var qe = null;
  function qs() {
    if (qe === null) throw Error(s(459));
    var l = qe;
    return qe = null, l;
  }
  function Ys(l) {
    if (l === da || l === lu)
      throw Error(s(483));
  }
  var ra = null, Wa = 0;
  function eu(l) {
    var t = Wa;
    return Wa += 1, ra === null && (ra = []), Bs(ra, l, t);
  }
  function ka(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function au(l, t) {
    throw t.$$typeof === nl ? Error(s(525)) : (l = Object.prototype.toString.call(t), Error(
      s(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Zs(l) {
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
      return v = Bt(v, o), v.index = 0, v.sibling = null, v;
    }
    function u(v, o, y) {
      return v.index = y, l ? (y = v.alternate, y !== null ? (y = y.index, y < o ? (v.flags |= 67108866, o) : y) : (v.flags |= 67108866, o)) : (v.flags |= 1048576, o);
    }
    function i(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, o, y, E) {
      return o === null || o.tag !== 6 ? (o = Ai(y, v.mode, E), o.return = v, o) : (o = n(o, y), o.return = v, o);
    }
    function r(v, o, y, E) {
      var C = y.type;
      return C === Ol ? S(
        v,
        o,
        y.props.children,
        E,
        y.key
      ) : o !== null && (o.elementType === C || typeof C == "object" && C !== null && C.$$typeof === fl && Be(C) === o.type) ? (o = n(o, y.props), ka(o, y), o.return = v, o) : (o = Wn(
        y.type,
        y.key,
        y.props,
        null,
        v.mode,
        E
      ), ka(o, y), o.return = v, o);
    }
    function g(v, o, y, E) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== y.containerInfo || o.stateNode.implementation !== y.implementation ? (o = Mi(y, v.mode, E), o.return = v, o) : (o = n(o, y.children || []), o.return = v, o);
    }
    function S(v, o, y, E, C) {
      return o === null || o.tag !== 7 ? (o = De(
        y,
        v.mode,
        E,
        C
      ), o.return = v, o) : (o = n(o, y), o.return = v, o);
    }
    function j(v, o, y) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Ai(
          "" + o,
          v.mode,
          y
        ), o.return = v, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Yl:
            return y = Wn(
              o.type,
              o.key,
              o.props,
              null,
              v.mode,
              y
            ), ka(y, o), y.return = v, y;
          case Ml:
            return o = Mi(
              o,
              v.mode,
              y
            ), o.return = v, o;
          case fl:
            return o = Be(o), j(v, o, y);
        }
        if (St(o) || Vl(o))
          return o = De(
            o,
            v.mode,
            y,
            null
          ), o.return = v, o;
        if (typeof o.then == "function")
          return j(v, eu(o), y);
        if (o.$$typeof === El)
          return j(
            v,
            In(v, o),
            y
          );
        au(v, o);
      }
      return null;
    }
    function b(v, o, y, E) {
      var C = o !== null ? o.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return C !== null ? null : c(v, o, "" + y, E);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Yl:
            return y.key === C ? r(v, o, y, E) : null;
          case Ml:
            return y.key === C ? g(v, o, y, E) : null;
          case fl:
            return y = Be(y), b(v, o, y, E);
        }
        if (St(y) || Vl(y))
          return C !== null ? null : S(v, o, y, E, null);
        if (typeof y.then == "function")
          return b(
            v,
            o,
            eu(y),
            E
          );
        if (y.$$typeof === El)
          return b(
            v,
            o,
            In(v, y),
            E
          );
        au(v, y);
      }
      return null;
    }
    function p(v, o, y, E, C) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return v = v.get(y) || null, c(o, v, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Yl:
            return v = v.get(
              E.key === null ? y : E.key
            ) || null, r(o, v, E, C);
          case Ml:
            return v = v.get(
              E.key === null ? y : E.key
            ) || null, g(o, v, E, C);
          case fl:
            return E = Be(E), p(
              v,
              o,
              y,
              E,
              C
            );
        }
        if (St(E) || Vl(E))
          return v = v.get(y) || null, S(o, v, E, C, null);
        if (typeof E.then == "function")
          return p(
            v,
            o,
            y,
            eu(E),
            C
          );
        if (E.$$typeof === El)
          return p(
            v,
            o,
            y,
            In(o, E),
            C
          );
        au(o, E);
      }
      return null;
    }
    function R(v, o, y, E) {
      for (var C = null, tl = null, H = o, L = o = 0, I = null; H !== null && L < y.length; L++) {
        H.index > L ? (I = H, H = null) : I = H.sibling;
        var el = b(
          v,
          H,
          y[L],
          E
        );
        if (el === null) {
          H === null && (H = I);
          break;
        }
        l && H && el.alternate === null && t(v, H), o = u(el, o, L), tl === null ? C = el : tl.sibling = el, tl = el, H = I;
      }
      if (L === y.length)
        return e(v, H), ll && qt(v, L), C;
      if (H === null) {
        for (; L < y.length; L++)
          H = j(v, y[L], E), H !== null && (o = u(
            H,
            o,
            L
          ), tl === null ? C = H : tl.sibling = H, tl = H);
        return ll && qt(v, L), C;
      }
      for (H = a(H); L < y.length; L++)
        I = p(
          H,
          v,
          L,
          y[L],
          E
        ), I !== null && (l && I.alternate !== null && H.delete(
          I.key === null ? L : I.key
        ), o = u(
          I,
          o,
          L
        ), tl === null ? C = I : tl.sibling = I, tl = I);
      return l && H.forEach(function(Se) {
        return t(v, Se);
      }), ll && qt(v, L), C;
    }
    function q(v, o, y, E) {
      if (y == null) throw Error(s(151));
      for (var C = null, tl = null, H = o, L = o = 0, I = null, el = y.next(); H !== null && !el.done; L++, el = y.next()) {
        H.index > L ? (I = H, H = null) : I = H.sibling;
        var Se = b(v, H, el.value, E);
        if (Se === null) {
          H === null && (H = I);
          break;
        }
        l && H && Se.alternate === null && t(v, H), o = u(Se, o, L), tl === null ? C = Se : tl.sibling = Se, tl = Se, H = I;
      }
      if (el.done)
        return e(v, H), ll && qt(v, L), C;
      if (H === null) {
        for (; !el.done; L++, el = y.next())
          el = j(v, el.value, E), el !== null && (o = u(el, o, L), tl === null ? C = el : tl.sibling = el, tl = el);
        return ll && qt(v, L), C;
      }
      for (H = a(H); !el.done; L++, el = y.next())
        el = p(H, v, L, el.value, E), el !== null && (l && el.alternate !== null && H.delete(el.key === null ? L : el.key), o = u(el, o, L), tl === null ? C = el : tl.sibling = el, tl = el);
      return l && H.forEach(function(h1) {
        return t(v, h1);
      }), ll && qt(v, L), C;
    }
    function ol(v, o, y, E) {
      if (typeof y == "object" && y !== null && y.type === Ol && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Yl:
            l: {
              for (var C = y.key; o !== null; ) {
                if (o.key === C) {
                  if (C = y.type, C === Ol) {
                    if (o.tag === 7) {
                      e(
                        v,
                        o.sibling
                      ), E = n(
                        o,
                        y.props.children
                      ), E.return = v, v = E;
                      break l;
                    }
                  } else if (o.elementType === C || typeof C == "object" && C !== null && C.$$typeof === fl && Be(C) === o.type) {
                    e(
                      v,
                      o.sibling
                    ), E = n(o, y.props), ka(E, y), E.return = v, v = E;
                    break l;
                  }
                  e(v, o);
                  break;
                } else t(v, o);
                o = o.sibling;
              }
              y.type === Ol ? (E = De(
                y.props.children,
                v.mode,
                E,
                y.key
              ), E.return = v, v = E) : (E = Wn(
                y.type,
                y.key,
                y.props,
                null,
                v.mode,
                E
              ), ka(E, y), E.return = v, v = E);
            }
            return i(v);
          case Ml:
            l: {
              for (C = y.key; o !== null; ) {
                if (o.key === C)
                  if (o.tag === 4 && o.stateNode.containerInfo === y.containerInfo && o.stateNode.implementation === y.implementation) {
                    e(
                      v,
                      o.sibling
                    ), E = n(o, y.children || []), E.return = v, v = E;
                    break l;
                  } else {
                    e(v, o);
                    break;
                  }
                else t(v, o);
                o = o.sibling;
              }
              E = Mi(y, v.mode, E), E.return = v, v = E;
            }
            return i(v);
          case fl:
            return y = Be(y), ol(
              v,
              o,
              y,
              E
            );
        }
        if (St(y))
          return R(
            v,
            o,
            y,
            E
          );
        if (Vl(y)) {
          if (C = Vl(y), typeof C != "function") throw Error(s(150));
          return y = C.call(y), q(
            v,
            o,
            y,
            E
          );
        }
        if (typeof y.then == "function")
          return ol(
            v,
            o,
            eu(y),
            E
          );
        if (y.$$typeof === El)
          return ol(
            v,
            o,
            In(v, y),
            E
          );
        au(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, o !== null && o.tag === 6 ? (e(v, o.sibling), E = n(o, y), E.return = v, v = E) : (e(v, o), E = Ai(y, v.mode, E), E.return = v, v = E), i(v)) : e(v, o);
    }
    return function(v, o, y, E) {
      try {
        Wa = 0;
        var C = ol(
          v,
          o,
          y,
          E
        );
        return ra = null, C;
      } catch (H) {
        if (H === da || H === lu) throw H;
        var tl = et(29, H, null, v.mode);
        return tl.lanes = E, tl.return = v, tl;
      }
    };
  }
  var Ye = Zs(!0), Gs = Zs(!1), ne = !1;
  function Xi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Qi(l, t) {
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
  function Fa(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Df(l, e);
    }
  }
  function wi(l, t) {
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
  var Vi = !1;
  function Ia() {
    if (Vi) {
      var l = sa;
      if (l !== null) throw l;
    }
  }
  function Pa(l, t, e, a) {
    Vi = !1;
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
      var j = n.baseState;
      i = 0, S = g = r = null, c = u;
      do {
        var b = c.lane & -536870913, p = b !== c.lane;
        if (p ? (F & b) === b : (a & b) === b) {
          b !== 0 && b === fa && (Vi = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var R = l, q = c;
            b = t;
            var ol = e;
            switch (q.tag) {
              case 1:
                if (R = q.payload, typeof R == "function") {
                  j = R.call(ol, j, b);
                  break l;
                }
                j = R;
                break l;
              case 3:
                R.flags = R.flags & -65537 | 128;
              case 0:
                if (R = q.payload, b = typeof R == "function" ? R.call(ol, j, b) : R, b == null) break l;
                j = D({}, j, b);
                break l;
              case 2:
                ne = !0;
            }
          }
          b = c.callback, b !== null && (l.flags |= 64, p && (l.flags |= 8192), p = n.callbacks, p === null ? n.callbacks = [b] : p.push(b));
        } else
          p = {
            lane: b,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (g = S = p, r = j) : S = S.next = p, i |= b;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          p = c, c = p.next, p.next = null, n.lastBaseUpdate = p, n.shared.pending = null;
        }
      } while (!0);
      S === null && (r = j), n.baseState = r, n.firstBaseUpdate = g, n.lastBaseUpdate = S, u === null && (n.shared.lanes = 0), re |= i, l.lanes = i, l.memoizedState = j;
    }
  }
  function Xs(l, t) {
    if (typeof l != "function")
      throw Error(s(191, l));
    l.call(t);
  }
  function Qs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Xs(e[l], t);
  }
  var oa = m(null), nu = m(0);
  function ws(l, t) {
    l = $t, M(nu, l), M(oa, t), $t = l | t.baseLanes;
  }
  function Li() {
    M(nu, $t), M(oa, oa.current);
  }
  function Ki() {
    $t = nu.current, T(oa), T(nu);
  }
  var at = m(null), yt = null;
  function ce(l) {
    var t = l.alternate;
    M(Sl, Sl.current & 1), M(at, l), yt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (yt = l);
  }
  function Ji(l) {
    M(Sl, Sl.current), M(at, l), yt === null && (yt = l);
  }
  function Vs(l) {
    l.tag === 22 ? (M(Sl, Sl.current), M(at, l), yt === null && (yt = l)) : fe();
  }
  function fe() {
    M(Sl, Sl.current), M(at, at.current);
  }
  function nt(l) {
    T(at), yt === l && (yt = null), T(Sl);
  }
  var Sl = m(0);
  function uu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || Pc(e) || lf(e)))
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
  var Gt = 0, V = null, dl = null, Nl = null, iu = !1, ma = !1, Ze = !1, cu = 0, ln = 0, ha = null, nm = 0;
  function bl() {
    throw Error(s(321));
  }
  function $i(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!tt(l[e], t[e])) return !1;
    return !0;
  }
  function Wi(l, t, e, a, n, u) {
    return Gt = u, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = l === null || l.memoizedState === null ? _0 : dc, Ze = !1, u = e(a, n), Ze = !1, ma && (u = Ks(
      t,
      e,
      a,
      n
    )), Ls(l), u;
  }
  function Ls(l) {
    z.H = an;
    var t = dl !== null && dl.next !== null;
    if (Gt = 0, Nl = dl = V = null, iu = !1, ln = 0, ha = null, t) throw Error(s(300));
    l === null || Tl || (l = l.dependencies, l !== null && Fn(l) && (Tl = !0));
  }
  function Ks(l, t, e, a) {
    V = l;
    var n = 0;
    do {
      if (ma && (ha = null), ln = 0, ma = !1, 25 <= n) throw Error(s(301));
      if (n += 1, Nl = dl = null, l.updateQueue != null) {
        var u = l.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      z.H = A0, u = t(e, a);
    } while (ma);
    return u;
  }
  function um() {
    var l = z.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? tn(t) : t, l = l.useState()[0], (dl !== null ? dl.memoizedState : null) !== l && (V.flags |= 1024), t;
  }
  function ki() {
    var l = cu !== 0;
    return cu = 0, l;
  }
  function Fi(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function Ii(l) {
    if (iu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      iu = !1;
    }
    Gt = 0, Nl = dl = V = null, ma = !1, ln = cu = 0, ha = null;
  }
  function Ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nl === null ? V.memoizedState = Nl = l : Nl = Nl.next = l, Nl;
  }
  function zl() {
    if (dl === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = dl.next;
    var t = Nl === null ? V.memoizedState : Nl.next;
    if (t !== null)
      Nl = t, dl = l;
    else {
      if (l === null)
        throw V.alternate === null ? Error(s(467)) : Error(s(310));
      dl = l, l = {
        memoizedState: dl.memoizedState,
        baseState: dl.baseState,
        baseQueue: dl.baseQueue,
        queue: dl.queue,
        next: null
      }, Nl === null ? V.memoizedState = Nl = l : Nl = Nl.next = l;
    }
    return Nl;
  }
  function fu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tn(l) {
    var t = ln;
    return ln += 1, ha === null && (ha = []), l = Bs(ha, l, t), t = V, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? _0 : dc), l;
  }
  function su(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return tn(l);
      if (l.$$typeof === El) return Cl(l);
    }
    throw Error(s(438, String(l)));
  }
  function Pi(l) {
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
        e[a] = we;
    return t.index++, e;
  }
  function Xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function du(l) {
    var t = zl();
    return lc(t, dl, l);
  }
  function lc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(s(311));
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
        var j = g.lane & -536870913;
        if (j !== g.lane ? (F & j) === j : (Gt & j) === j) {
          var b = g.revertLane;
          if (b === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), j === fa && (S = !0);
          else if ((Gt & b) === b) {
            g = g.next, b === fa && (S = !0);
            continue;
          } else
            j = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, r === null ? (c = r = j, i = u) : r = r.next = j, V.lanes |= b, re |= b;
          j = g.action, Ze && e(u, j), u = g.hasEagerState ? g.eagerState : e(u, j);
        } else
          b = {
            lane: j,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, r === null ? (c = r = b, i = u) : r = r.next = b, V.lanes |= j, re |= j;
        g = g.next;
      } while (g !== null && g !== t);
      if (r === null ? i = u : r.next = c, !tt(u, l.memoizedState) && (Tl = !0, S && (e = sa, e !== null)))
        throw e;
      l.memoizedState = u, l.baseState = i, l.baseQueue = r, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function tc(l) {
    var t = zl(), e = t.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, n = e.pending, u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = l(u, i.action), i = i.next;
      while (i !== n);
      tt(u, t.memoizedState) || (Tl = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function Js(l, t, e) {
    var a = V, n = zl(), u = ll;
    if (u) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = t();
    var i = !tt(
      (dl || n).memoizedState,
      e
    );
    if (i && (n.memoizedState = e, Tl = !0), n = n.queue, nc(ks.bind(null, a, n, l), [
      l
    ]), n.getSnapshot !== t || i || Nl !== null && Nl.memoizedState.tag & 1) {
      if (a.flags |= 2048, va(
        9,
        { destroy: void 0 },
        Ws.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), hl === null) throw Error(s(349));
      u || (Gt & 127) !== 0 || $s(a, t, e);
    }
    return e;
  }
  function $s(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = V.updateQueue, t === null ? (t = fu(), V.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Ws(l, t, e, a) {
    t.value = e, t.getSnapshot = a, Fs(t) && Is(l);
  }
  function ks(l, t, e) {
    return e(function() {
      Fs(t) && Is(l);
    });
  }
  function Fs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !tt(l, e);
    } catch {
      return !0;
    }
  }
  function Is(l) {
    var t = Oe(l, 2);
    t !== null && Fl(t, l, 2);
  }
  function ec(l) {
    var t = Ql();
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
  function Ps(l, t, e, a) {
    return l.baseState = e, lc(
      l,
      dl,
      typeof a == "function" ? a : Xt
    );
  }
  function im(l, t, e, a, n) {
    if (mu(l)) throw Error(s(485));
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
      z.T !== null ? e(!0) : u.isTransition = !1, a(u), e = t.pending, e === null ? (u.next = t.pending = u, l0(t, u)) : (u.next = e.next, t.pending = e.next = u);
    }
  }
  function l0(l, t) {
    var e = t.action, a = t.payload, n = l.state;
    if (t.isTransition) {
      var u = z.T, i = {};
      z.T = i;
      try {
        var c = e(n, a), r = z.S;
        r !== null && r(i, c), t0(l, t, c);
      } catch (g) {
        ac(l, t, g);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), z.T = u;
      }
    } else
      try {
        u = e(n, a), t0(l, t, u);
      } catch (g) {
        ac(l, t, g);
      }
  }
  function t0(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        e0(l, t, a);
      },
      function(a) {
        return ac(l, t, a);
      }
    ) : e0(l, t, e);
  }
  function e0(l, t, e) {
    t.status = "fulfilled", t.value = e, a0(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, l0(l, e)));
  }
  function ac(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, a0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function a0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function n0(l, t) {
    return t;
  }
  function u0(l, t) {
    if (ll) {
      var e = hl.formState;
      if (e !== null) {
        l: {
          var a = V;
          if (ll) {
            if (vl) {
              t: {
                for (var n = vl, u = vt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = gt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                vl = gt(
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
    return e = Ql(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: n0,
      lastRenderedState: t
    }, e.queue = a, e = j0.bind(
      null,
      V,
      a
    ), a.dispatch = e, a = ec(!1), u = sc.bind(
      null,
      V,
      !1,
      a.queue
    ), a = Ql(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, e = im.bind(
      null,
      V,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function i0(l) {
    var t = zl();
    return c0(t, dl, l);
  }
  function c0(l, t, e) {
    if (t = lc(
      l,
      t,
      n0
    )[0], l = du(Xt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = tn(t);
      } catch (i) {
        throw i === da ? lu : i;
      }
    else a = t;
    t = zl();
    var n = t.queue, u = n.dispatch;
    return e !== t.memoizedState && (V.flags |= 2048, va(
      9,
      { destroy: void 0 },
      cm.bind(null, n, e),
      null
    )), [a, u, l];
  }
  function cm(l, t) {
    l.action = t;
  }
  function f0(l) {
    var t = zl(), e = dl;
    if (e !== null)
      return c0(t, e, l);
    zl(), t = t.memoizedState, e = zl();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function va(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = V.updateQueue, t === null && (t = fu(), V.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function s0() {
    return zl().memoizedState;
  }
  function ru(l, t, e, a) {
    var n = Ql();
    V.flags |= l, n.memoizedState = va(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function ou(l, t, e, a) {
    var n = zl();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    dl !== null && a !== null && $i(a, dl.memoizedState.deps) ? n.memoizedState = va(t, u, e, a) : (V.flags |= l, n.memoizedState = va(
      1 | t,
      u,
      e,
      a
    ));
  }
  function d0(l, t) {
    ru(8390656, 8, l, t);
  }
  function nc(l, t) {
    ou(2048, 8, l, t);
  }
  function fm(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null)
      t = fu(), V.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function r0(l) {
    var t = zl().memoizedState;
    return fm({ ref: t, nextImpl: l }), function() {
      if ((al & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function o0(l, t) {
    return ou(4, 2, l, t);
  }
  function m0(l, t) {
    return ou(4, 4, l, t);
  }
  function h0(l, t) {
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
  function v0(l, t, e) {
    e = e != null ? e.concat([l]) : null, ou(4, 4, h0.bind(null, t, l), e);
  }
  function uc() {
  }
  function y0(l, t) {
    var e = zl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && $i(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function g0(l, t) {
    var e = zl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && $i(t, a[1]))
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
  function ic(l, t, e) {
    return e === void 0 || (Gt & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = bd(), V.lanes |= l, re |= l, e);
  }
  function b0(l, t, e, a) {
    return tt(e, t) ? e : oa.current !== null ? (l = ic(l, e, a), tt(l, t) || (Tl = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (F & 261930) === 0 ? (Tl = !0, l.memoizedState = e) : (l = bd(), V.lanes |= l, re |= l, t);
  }
  function x0(l, t, e, a, n) {
    var u = A.p;
    A.p = u !== 0 && 8 > u ? u : 8;
    var i = z.T, c = {};
    z.T = c, sc(l, !1, t, e);
    try {
      var r = n(), g = z.S;
      if (g !== null && g(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var S = am(
          r,
          a
        );
        en(
          l,
          t,
          S,
          ct(l)
        );
      } else
        en(
          l,
          t,
          a,
          ct(l)
        );
    } catch (j) {
      en(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: j },
        ct()
      );
    } finally {
      A.p = u, i !== null && c.types !== null && (i.types = c.types), z.T = i;
    }
  }
  function sm() {
  }
  function cc(l, t, e, a) {
    if (l.tag !== 5) throw Error(s(476));
    var n = p0(l).queue;
    x0(
      l,
      n,
      t,
      Z,
      e === null ? sm : function() {
        return S0(l), e(a);
      }
    );
  }
  function p0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: Z
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
    var t = p0(l);
    t.next === null && (t = l.alternate.memoizedState), en(
      l,
      t.next.queue,
      {},
      ct()
    );
  }
  function fc() {
    return Cl(pn);
  }
  function z0() {
    return zl().memoizedState;
  }
  function E0() {
    return zl().memoizedState;
  }
  function dm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = ct();
          l = ue(e);
          var a = ie(t, l, e);
          a !== null && (Fl(a, t, e), Fa(a, t, e)), t = { cache: qi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function rm(l, t, e) {
    var a = ct();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mu(l) ? N0(t, e) : (e = Ti(l, t, e, a), e !== null && (Fl(e, l, a), T0(e, t, a)));
  }
  function j0(l, t, e) {
    var a = ct();
    en(l, t, e, a);
  }
  function en(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (mu(l)) N0(t, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var i = t.lastRenderedState, c = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = c, tt(c, i))
            return Jn(l, t, n, 0), hl === null && Kn(), !1;
        } catch {
        }
      if (e = Ti(l, t, n, a), e !== null)
        return Fl(e, l, a), T0(e, t, a), !0;
    }
    return !1;
  }
  function sc(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: Xc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mu(l)) {
      if (t) throw Error(s(479));
    } else
      t = Ti(
        l,
        e,
        a,
        2
      ), t !== null && Fl(t, l, 2);
  }
  function mu(l) {
    var t = l.alternate;
    return l === V || t !== null && t === V;
  }
  function N0(l, t) {
    ma = iu = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function T0(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Df(l, e);
    }
  }
  var an = {
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
  an.useEffectEvent = bl;
  var _0 = {
    readContext: Cl,
    use: su,
    useCallback: function(l, t) {
      return Ql().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Cl,
    useEffect: d0,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, ru(
        4194308,
        4,
        h0.bind(null, t, l),
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
      var e = Ql();
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
      var a = Ql();
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
      }, a.queue = l, l = l.dispatch = rm.bind(
        null,
        V,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Ql();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = ec(l);
      var t = l.queue, e = j0.bind(null, V, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: uc,
    useDeferredValue: function(l, t) {
      var e = Ql();
      return ic(e, l, t);
    },
    useTransition: function() {
      var l = ec(!1);
      return l = x0.bind(
        null,
        V,
        l.queue,
        !0,
        !1
      ), Ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = V, n = Ql();
      if (ll) {
        if (e === void 0)
          throw Error(s(407));
        e = e();
      } else {
        if (e = t(), hl === null)
          throw Error(s(349));
        (F & 127) !== 0 || $s(a, t, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: t };
      return n.queue = u, d0(ks.bind(null, a, u, l), [
        l
      ]), a.flags |= 2048, va(
        9,
        { destroy: void 0 },
        Ws.bind(
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
      var l = Ql(), t = hl.identifierPrefix;
      if (ll) {
        var e = Mt, a = At;
        e = (a & ~(1 << 32 - lt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = cu++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = nm++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: fc,
    useFormState: u0,
    useActionState: u0,
    useOptimistic: function(l) {
      var t = Ql();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = sc.bind(
        null,
        V,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: Pi,
    useCacheRefresh: function() {
      return Ql().memoizedState = dm.bind(
        null,
        V
      );
    },
    useEffectEvent: function(l) {
      var t = Ql(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((al & 2) !== 0)
          throw Error(s(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, dc = {
    readContext: Cl,
    use: su,
    useCallback: y0,
    useContext: Cl,
    useEffect: nc,
    useImperativeHandle: v0,
    useInsertionEffect: o0,
    useLayoutEffect: m0,
    useMemo: g0,
    useReducer: du,
    useRef: s0,
    useState: function() {
      return du(Xt);
    },
    useDebugValue: uc,
    useDeferredValue: function(l, t) {
      var e = zl();
      return b0(
        e,
        dl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = du(Xt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : tn(l),
        t
      ];
    },
    useSyncExternalStore: Js,
    useId: z0,
    useHostTransitionStatus: fc,
    useFormState: i0,
    useActionState: i0,
    useOptimistic: function(l, t) {
      var e = zl();
      return Ps(e, dl, l, t);
    },
    useMemoCache: Pi,
    useCacheRefresh: E0
  };
  dc.useEffectEvent = r0;
  var A0 = {
    readContext: Cl,
    use: su,
    useCallback: y0,
    useContext: Cl,
    useEffect: nc,
    useImperativeHandle: v0,
    useInsertionEffect: o0,
    useLayoutEffect: m0,
    useMemo: g0,
    useReducer: tc,
    useRef: s0,
    useState: function() {
      return tc(Xt);
    },
    useDebugValue: uc,
    useDeferredValue: function(l, t) {
      var e = zl();
      return dl === null ? ic(e, l, t) : b0(
        e,
        dl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = tc(Xt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : tn(l),
        t
      ];
    },
    useSyncExternalStore: Js,
    useId: z0,
    useHostTransitionStatus: fc,
    useFormState: f0,
    useActionState: f0,
    useOptimistic: function(l, t) {
      var e = zl();
      return dl !== null ? Ps(e, dl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: Pi,
    useCacheRefresh: E0
  };
  A0.useEffectEvent = r0;
  function rc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : D({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var oc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = ct(), n = ue(a);
      n.payload = t, e != null && (n.callback = e), t = ie(l, n, a), t !== null && (Fl(t, l, a), Fa(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = ct(), n = ue(a);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = ie(l, n, a), t !== null && (Fl(t, l, a), Fa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = ct(), a = ue(e);
      a.tag = 2, t != null && (a.callback = t), t = ie(l, a, e), t !== null && (Fl(t, l, e), Fa(t, l, e));
    }
  };
  function M0(l, t, e, a, n, u, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !wa(e, a) || !wa(n, u) : !0;
  }
  function O0(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && oc.enqueueReplaceState(t, t.state, null);
  }
  function Ge(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = D({}, e));
      for (var n in l)
        e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function D0(l) {
    Ln(l);
  }
  function R0(l) {
    console.error(l);
  }
  function U0(l) {
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
  function H0(l, t, e) {
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
  function mc(l, t, e) {
    return e = ue(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      hu(l, t);
    }, e;
  }
  function C0(l) {
    return l = ue(l), l.tag = 3, l;
  }
  function B0(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      l.payload = function() {
        return n(u);
      }, l.callback = function() {
        H0(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      H0(t, e, a), typeof n != "function" && (oe === null ? oe = /* @__PURE__ */ new Set([this]) : oe.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function om(l, t, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && ca(
        t,
        e,
        n,
        !0
      ), e = at.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return yt === null ? Tu() : e.alternate === null && xl === 0 && (xl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === tu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Yc(l, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === tu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Yc(l, a, n)), !1;
        }
        throw Error(s(435, e.tag));
      }
      return Yc(l, a, n), Tu(), !1;
    }
    if (ll)
      return t = at.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Ri && (l = Error(s(422), { cause: a }), Ka(ot(l, e)))) : (a !== Ri && (t = Error(s(423), {
        cause: a
      }), Ka(
        ot(t, e)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = ot(a, e), n = mc(
        l.stateNode,
        a,
        n
      ), wi(l, n), xl !== 4 && (xl = 2)), !1;
    var u = Error(s(520), { cause: a });
    if (u = ot(u, e), on === null ? on = [u] : on.push(u), xl !== 4 && (xl = 2), t === null) return !0;
    a = ot(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = n & -n, e.lanes |= l, l = mc(e.stateNode, a, l), wi(e, l), !1;
        case 1:
          if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (oe === null || !oe.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = C0(n), B0(
              n,
              l,
              e,
              a
            ), wi(e, n), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var hc = Error(s(461)), Tl = !1;
  function Bl(l, t, e, a) {
    t.child = l === null ? Gs(t, null, e, a) : Ye(
      t,
      l.child,
      e,
      a
    );
  }
  function q0(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return He(t), a = Wi(
      l,
      t,
      e,
      i,
      u,
      n
    ), c = ki(), l !== null && !Tl ? (Fi(l, t, n), Qt(l, t, n)) : (ll && c && Oi(t), t.flags |= 1, Bl(l, t, a, n), t.child);
  }
  function Y0(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" && !_i(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, Z0(
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
    if (u = l.child, !zc(l, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : wa, e(i, a) && l.ref === t.ref)
        return Qt(l, t, n);
    }
    return t.flags |= 1, l = Bt(u, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Z0(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (wa(u, a) && l.ref === t.ref)
        if (Tl = !1, t.pendingProps = a = u, zc(l, n))
          (l.flags & 131072) !== 0 && (Tl = !0);
        else
          return t.lanes = l.lanes, Qt(l, t, n);
    }
    return vc(
      l,
      t,
      e,
      a,
      n
    );
  }
  function G0(l, t, e, a) {
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
        return X0(
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
        ), u !== null ? ws(t, u) : Li(), Vs(t);
      else
        return a = t.lanes = 536870912, X0(
          l,
          t,
          u !== null ? u.baseLanes | e : e,
          e,
          a
        );
    } else
      u !== null ? (Pn(t, u.cachePool), ws(t, u), fe(), t.memoizedState = null) : (l !== null && Pn(t, null), Li(), fe());
    return Bl(l, t, n, e), t.child;
  }
  function nn(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function X0(l, t, e, a, n) {
    var u = Zi();
    return u = u === null ? null : { parent: jl._currentValue, pool: u }, t.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, l !== null && Pn(t, null), Li(), Vs(t), l !== null && ca(l, t, a, !0), t.childLanes = n, null;
  }
  function vu(l, t) {
    return t = gu(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Q0(l, t, e) {
    return Ye(t, l.child, null, e), l = vu(t, t.pendingProps), l.flags |= 2, nt(t), t.memoizedState = null, l;
  }
  function mm(l, t, e) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (ll) {
        if (a.mode === "hidden")
          return l = vu(t, a), t.lanes = 536870912, nn(null, l);
        if (Ji(t), (l = vl) ? (l = lr(
          l,
          vt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: le !== null ? { id: At, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ns(l), e.return = t, t.child = e, Hl = t, vl = null)) : l = null, l === null) throw ee(t);
        return t.lanes = 536870912, null;
      }
      return vu(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (Ji(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = Q0(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (Tl || ca(l, t, e, !1), n = (e & l.childLanes) !== 0, Tl || n) {
        if (a = hl, a !== null && (i = Rf(a, e), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Oe(l, i), Fl(a, l, i), hc;
        Tu(), t = Q0(
          l,
          t,
          e
        );
      } else
        l = u.treeContext, vl = gt(i.nextSibling), Hl = t, ll = !0, te = null, vt = !1, l !== null && As(t, l), t = vu(t, a), t.flags |= 4096;
      return t;
    }
    return l = Bt(l.child, {
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
        throw Error(s(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function vc(l, t, e, a, n) {
    return He(t), e = Wi(
      l,
      t,
      e,
      a,
      void 0,
      n
    ), a = ki(), l !== null && !Tl ? (Fi(l, t, n), Qt(l, t, n)) : (ll && a && Oi(t), t.flags |= 1, Bl(l, t, e, n), t.child);
  }
  function w0(l, t, e, a, n, u) {
    return He(t), t.updateQueue = null, e = Ks(
      t,
      a,
      e,
      n
    ), Ls(l), a = ki(), l !== null && !Tl ? (Fi(l, t, u), Qt(l, t, u)) : (ll && a && Oi(t), t.flags |= 1, Bl(l, t, e, u), t.child);
  }
  function V0(l, t, e, a, n) {
    if (He(t), t.stateNode === null) {
      var u = aa, i = e.contextType;
      typeof i == "object" && i !== null && (u = Cl(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = oc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Xi(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? Cl(i) : aa, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (rc(
        t,
        e,
        i,
        a
      ), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && oc.enqueueReplaceState(u, u.state, null), Pa(t, a, u, n), Ia(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps, r = Ge(e, c);
      u.props = r;
      var g = u.context, S = e.contextType;
      i = aa, typeof S == "object" && S !== null && (i = Cl(S));
      var j = e.getDerivedStateFromProps;
      S = typeof j == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || g !== i) && O0(
        t,
        u,
        a,
        i
      ), ne = !1;
      var b = t.memoizedState;
      u.state = b, Pa(t, a, u, n), Ia(), g = t.memoizedState, c || b !== g || ne ? (typeof j == "function" && (rc(
        t,
        e,
        j,
        a
      ), g = t.memoizedState), (r = ne || M0(
        t,
        e,
        r,
        a,
        b,
        g,
        i
      )) ? (S || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = g), u.props = a, u.state = g, u.context = i, a = r) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Qi(l, t), i = t.memoizedProps, S = Ge(e, i), u.props = S, j = t.pendingProps, b = u.context, g = e.contextType, r = aa, typeof g == "object" && g !== null && (r = Cl(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== j || b !== r) && O0(
        t,
        u,
        a,
        r
      ), ne = !1, b = t.memoizedState, u.state = b, Pa(t, a, u, n), Ia();
      var p = t.memoizedState;
      i !== j || b !== p || ne || l !== null && l.dependencies !== null && Fn(l.dependencies) ? (typeof c == "function" && (rc(
        t,
        e,
        c,
        a
      ), p = t.memoizedState), (S = ne || M0(
        t,
        e,
        S,
        a,
        b,
        p,
        r
      ) || l !== null && l.dependencies !== null && Fn(l.dependencies)) ? (g || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, p, r), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        p,
        r
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), u.props = a, u.state = p, u.context = r, a = S) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 1024), a = !1);
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
    )) : Bl(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = Qt(
      l,
      t,
      n
    ), l;
  }
  function L0(l, t, e, a) {
    return Re(), t.flags |= 256, Bl(l, t, e, a), t.child;
  }
  var yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function gc(l) {
    return { baseLanes: l, cachePool: Hs() };
  }
  function bc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= it), l;
  }
  function K0(l, t, e) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (Sl.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ll) {
        if (n ? ce(t) : fe(), (l = vl) ? (l = lr(
          l,
          vt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: le !== null ? { id: At, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ns(l), e.return = t, t.child = e, Hl = t, vl = null)) : l = null, l === null) throw ee(t);
        return lf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
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
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = gc(e), a.childLanes = bc(
        l,
        i,
        e
      ), t.memoizedState = yc, nn(null, a)) : (ce(t), xc(t, c));
    }
    var r = l.memoizedState;
    if (r !== null && (c = r.dehydrated, c !== null)) {
      if (u)
        t.flags & 256 ? (ce(t), t.flags &= -257, t = pc(
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
        ), a = t.child, a.memoizedState = gc(e), a.childLanes = bc(
          l,
          i,
          e
        ), t.memoizedState = yc, t = nn(null, a));
      else if (ce(t), lf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var g = i.dgst;
        i = g, a = Error(s(419)), a.stack = "", a.digest = i, Ka({ value: a, source: null, stack: null }), t = pc(
          l,
          t,
          e
        );
      } else if (Tl || ca(l, t, e, !1), i = (e & l.childLanes) !== 0, Tl || i) {
        if (i = hl, i !== null && (a = Rf(i, e), a !== 0 && a !== r.retryLane))
          throw r.retryLane = a, Oe(l, a), Fl(i, l, a), hc;
        Pc(c) || Tu(), t = pc(
          l,
          t,
          e
        );
      } else
        Pc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = r.treeContext, vl = gt(
          c.nextSibling
        ), Hl = t, ll = !0, te = null, vt = !1, l !== null && As(t, l), t = xc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (fe(), c = a.fallback, n = t.mode, r = l.child, g = r.sibling, a = Bt(r, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = r.subtreeFlags & 65011712, g !== null ? c = Bt(
      g,
      c
    ) : (c = De(
      c,
      n,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, nn(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = gc(e) : (n = c.cachePool, n !== null ? (r = jl._currentValue, n = n.parent !== r ? { parent: r, pool: r } : n) : n = Hs(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: n
    }), a.memoizedState = c, a.childLanes = bc(
      l,
      i,
      e
    ), t.memoizedState = yc, nn(l.child, a)) : (ce(t), e = l.child, l = e.sibling, e = Bt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function xc(l, t) {
    return t = gu(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function gu(l, t) {
    return l = et(22, l, null, t), l.lanes = 0, l;
  }
  function pc(l, t, e) {
    return Ye(t, l.child, null, e), l = xc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function J0(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Ci(l.return, t, e);
  }
  function Sc(l, t, e, a, n, u) {
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
  function $0(l, t, e) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Sl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, M(Sl, i), Bl(l, t, a, e), a = ll ? La : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && J0(l, e, t);
        else if (l.tag === 19)
          J0(l, e, t);
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
        e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), Sc(
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
        Sc(
          t,
          !0,
          e,
          null,
          u,
          a
        );
        break;
      case "together":
        Sc(
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
      throw Error(s(153));
    if (t.child !== null) {
      for (l = t.child, e = Bt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = Bt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function zc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Fn(l)));
  }
  function hm(l, t, e) {
    switch (t.tag) {
      case 3:
        Xl(t, t.stateNode.containerInfo), ae(t, jl, l.memoizedState.cache), Re();
        break;
      case 27:
      case 5:
        Oa(t);
        break;
      case 4:
        Xl(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Ji(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ce(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? K0(l, t, e) : (ce(t), l = Qt(
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
            return $0(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), M(Sl, Sl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, G0(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        ae(t, jl, l.memoizedState.cache);
    }
    return Qt(l, t, e);
  }
  function W0(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Tl = !0;
      else {
        if (!zc(l, e) && (t.flags & 128) === 0)
          return Tl = !1, hm(
            l,
            t,
            e
          );
        Tl = (l.flags & 131072) !== 0;
      }
    else
      Tl = !1, ll && (t.flags & 1048576) !== 0 && _s(t, La, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Be(t.elementType), t.type = l, typeof l == "function")
            _i(l) ? (a = Ge(l, a), t.tag = 1, t = V0(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = vc(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === wl) {
                t.tag = 11, t = q0(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (n === G) {
                t.tag = 14, t = Y0(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = Rt(l) || l, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return vc(
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
        ), V0(
          l,
          t,
          a,
          n,
          e
        );
      case 3:
        l: {
          if (Xl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(s(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Qi(l, t), Pa(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, ae(t, jl, a), a !== u.cache && Bi(
            t,
            [jl],
            e,
            !0
          ), Ia(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = L0(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== n) {
              n = ot(
                Error(s(424)),
                t
              ), Ka(n), t = L0(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, vl = gt(l.firstChild), Hl = t, ll = !0, te = null, vt = !0, e = Gs(
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
            Bl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return yu(l, t), l === null ? (e = ir(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : ll || (e = t.type, l = t.pendingProps, a = Uu(
          J.current
        ).createElement(e), a[Ul] = t, a[Ll] = l, ql(a, e, l), Dl(a), t.stateNode = a) : t.memoizedState = ir(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Oa(t), l === null && ll && (a = t.stateNode = ar(
          t.type,
          t.pendingProps,
          J.current
        ), Hl = t, vt = !0, n = vl, ye(t.type) ? (tf = n, vl = gt(a.firstChild)) : vl = n), Bl(
          l,
          t,
          t.pendingProps.children,
          e
        ), yu(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ll && ((n = a = vl) && (a = Vm(
          a,
          t.type,
          t.pendingProps,
          vt
        ), a !== null ? (t.stateNode = a, Hl = t, vl = gt(a.firstChild), vt = !1, n = !0) : n = !1), n || ee(t)), Oa(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, kc(n, u) ? a = null : i !== null && kc(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = Wi(
          l,
          t,
          um,
          null,
          null,
          e
        ), pn._currentValue = n), yu(l, t), Bl(l, t, a, e), t.child;
      case 6:
        return l === null && ll && ((l = e = vl) && (e = Lm(
          e,
          t.pendingProps,
          vt
        ), e !== null ? (t.stateNode = e, Hl = t, vl = null, l = !0) : l = !1), l || ee(t)), null;
      case 13:
        return K0(l, t, e);
      case 4:
        return Xl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ye(
          t,
          null,
          a,
          e
        ) : Bl(l, t, a, e), t.child;
      case 11:
        return q0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Bl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, ae(t, t.type, a.value), Bl(l, t, a.children, e), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, He(t), n = Cl(n), a = a(n), t.flags |= 1, Bl(l, t, a, e), t.child;
      case 14:
        return Y0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return Z0(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return $0(l, t, e);
      case 31:
        return mm(l, t, e);
      case 22:
        return G0(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return He(t), a = Cl(jl), l === null ? (n = Zi(), n === null && (n = hl, u = qi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = { parent: a, cache: n }, Xi(t), ae(t, jl, n)) : ((l.lanes & e) !== 0 && (Qi(l, t), Pa(t, null, null, e), Ia()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ae(t, jl, a)) : (a = u.cache, ae(t, jl, a), a !== n.cache && Bi(
          t,
          [jl],
          e,
          !0
        ))), Bl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function wt(l) {
    l.flags |= 4;
  }
  function Ec(l, t, e, a, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (zd()) l.flags |= 8192;
        else
          throw qe = tu, Gi;
    } else l.flags &= -16777217;
  }
  function k0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !rr(t))
      if (zd()) l.flags |= 8192;
      else
        throw qe = tu, Gi;
  }
  function bu(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Mf() : 536870912, l.lanes |= t, xa |= t);
  }
  function un(l, t) {
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
  function vm(l, t, e) {
    var a = t.pendingProps;
    switch (Di(t), t.tag) {
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
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Zt(jl), pl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (ia(t) ? wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ui())), yl(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return l === null ? (wt(t), u !== null ? (yl(t), k0(t, u)) : (yl(t), Ec(
          t,
          n,
          null,
          a,
          e
        ))) : u ? u !== l.memoizedState ? (wt(t), yl(t), k0(t, u)) : (yl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && wt(t), yl(t), Ec(
          t,
          n,
          l,
          a,
          e
        )), null;
      case 27:
        if (Mn(t), e = J.current, n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(s(166));
            return yl(t), null;
          }
          l = U.current, ia(t) ? Ms(t) : (l = ar(n, a, e), t.stateNode = l, wt(t));
        }
        return yl(t), null;
      case 5:
        if (Mn(t), n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(s(166));
            return yl(t), null;
          }
          if (u = U.current, ia(t))
            Ms(t);
          else {
            var i = Uu(
              J.current
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
            u[Ul] = t, u[Ll] = a;
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
            l: switch (ql(u, n, a), n) {
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
        return yl(t), Ec(
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
            throw Error(s(166));
          if (l = J.current, ia(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, n = Hl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            l[Ul] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Kd(l.nodeValue, e)), l || ee(t, !0);
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
              if (!a) throw Error(s(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(557));
              l[Ul] = t;
            } else
              Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), l = !1;
          } else
            e = Ui(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (nt(t), t) : (nt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return yl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = ia(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(s(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[Ul] = t;
            } else
              Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), n = !1;
          } else
            n = Ui(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (nt(t), t) : (nt(t), null);
        }
        return nt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), bu(t, t.updateQueue), yl(t), null);
      case 4:
        return pl(), l === null && Lc(t.stateNode.containerInfo), yl(t), null;
      case 10:
        return Zt(t.type), yl(t), null;
      case 19:
        if (T(Sl), a = t.memoizedState, a === null) return yl(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) un(a, !1);
          else {
            if (xl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (u = uu(l), u !== null) {
                  for (t.flags |= 128, un(a, !1), l = u.updateQueue, t.updateQueue = l, bu(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    js(e, l), e = e.sibling;
                  return M(
                    Sl,
                    Sl.current & 1 | 2
                  ), ll && qt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && Il() > Eu && (t.flags |= 128, n = !0, un(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (l = uu(u), l !== null) {
              if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, bu(t, l), un(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ll)
                return yl(t), null;
            } else
              2 * Il() - a.renderingStartTime > Eu && e !== 536870912 && (t.flags |= 128, n = !0, un(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (l = a.last, l !== null ? l.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Il(), l.sibling = null, e = Sl.current, M(
          Sl,
          n ? e & 1 | 2 : e & 1
        ), ll && qt(t, a.treeForkCount), l) : (yl(t), null);
      case 22:
      case 23:
        return nt(t), Ki(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yl(t), e = t.updateQueue, e !== null && bu(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && T(Ce), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Zt(jl), yl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function ym(l, t) {
    switch (Di(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Zt(jl), pl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Mn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (nt(t), t.alternate === null)
            throw Error(s(340));
          Re();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (nt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Re();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(Sl), null;
      case 4:
        return pl(), null;
      case 10:
        return Zt(t.type), null;
      case 22:
      case 23:
        return nt(t), Ki(), l !== null && T(Ce), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Zt(jl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function F0(l, t) {
    switch (Di(t), t.tag) {
      case 3:
        Zt(jl), pl();
        break;
      case 26:
      case 27:
      case 5:
        Mn(t);
        break;
      case 4:
        pl();
        break;
      case 31:
        t.memoizedState !== null && nt(t);
        break;
      case 13:
        nt(t);
        break;
      case 19:
        T(Sl);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        nt(t), Ki(), l !== null && T(Ce);
        break;
      case 24:
        Zt(jl);
    }
  }
  function cn(l, t) {
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
              var r = e, g = c;
              try {
                g();
              } catch (S) {
                cl(
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
      cl(t, t.return, S);
    }
  }
  function I0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Qs(t, e);
      } catch (a) {
        cl(l, l.return, a);
      }
    }
  }
  function P0(l, t, e) {
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
  function fn(l, t) {
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
  function ld(l) {
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
  function jc(l, t, e) {
    try {
      var a = l.stateNode;
      Ym(a, l.type, e, t), a[Ll] = t;
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  function td(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ye(l.type) || l.tag === 4;
  }
  function Nc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || td(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ye(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Tc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Ht));
    else if (a !== 4 && (a === 27 && ye(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Tc(l, t, e), l = l.sibling; l !== null; )
        Tc(l, t, e), l = l.sibling;
  }
  function xu(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && ye(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (xu(l, t, e), l = l.sibling; l !== null; )
        xu(l, t, e), l = l.sibling;
  }
  function ed(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      ql(t, a, e), t[Ul] = l, t[Ll] = e;
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  var Vt = !1, _l = !1, _c = !1, ad = typeof WeakSet == "function" ? WeakSet : Set, Rl = null;
  function gm(l, t) {
    if (l = l.containerInfo, $c = Gu, l = vs(l), pi(l)) {
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
            var i = 0, c = -1, r = -1, g = 0, S = 0, j = l, b = null;
            t: for (; ; ) {
              for (var p; j !== e || n !== 0 && j.nodeType !== 3 || (c = i + n), j !== u || a !== 0 && j.nodeType !== 3 || (r = i + a), j.nodeType === 3 && (i += j.nodeValue.length), (p = j.firstChild) !== null; )
                b = j, j = p;
              for (; ; ) {
                if (j === l) break t;
                if (b === e && ++g === n && (c = i), b === u && ++S === a && (r = i), (p = j.nextSibling) !== null) break;
                j = b, b = j.parentNode;
              }
              j = p;
            }
            e = c === -1 || r === -1 ? null : { start: c, end: r };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Wc = { focusedElem: l, selectionRange: e }, Gu = !1, Rl = t; Rl !== null; )
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
                  var R = Ge(
                    e.type,
                    n
                  );
                  l = a.getSnapshotBeforeUpdate(
                    R,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (q) {
                  cl(
                    e,
                    e.return,
                    q
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  Ic(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ic(l);
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
              if ((l & 1024) !== 0) throw Error(s(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Rl = l;
            break;
          }
          Rl = t.return;
        }
  }
  function nd(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Kt(l, e), a & 4 && cn(5, e);
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
        a & 64 && I0(e), a & 512 && fn(e, e.return);
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
            Qs(l, t);
          } catch (i) {
            cl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ed(e);
      case 26:
      case 5:
        Kt(l, e), t === null && a & 4 && ld(e), a & 512 && fn(e, e.return);
        break;
      case 12:
        Kt(l, e);
        break;
      case 31:
        Kt(l, e), a & 4 && cd(l, e);
        break;
      case 13:
        Kt(l, e), a & 4 && fd(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Tm.bind(
          null,
          e
        ), Km(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Vt, !a) {
          t = t !== null && t.memoizedState !== null || _l, n = Vt;
          var u = _l;
          Vt = a, (_l = t) && !u ? Jt(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : Kt(l, e), Vt = n, _l = u;
        }
        break;
      case 30:
        break;
      default:
        Kt(l, e);
    }
  }
  function ud(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, ud(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ai(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var gl = null, Jl = !1;
  function Lt(l, t, e) {
    for (e = e.child; e !== null; )
      id(l, t, e), e = e.sibling;
  }
  function id(l, t, e) {
    if (Pl && typeof Pl.onCommitFiberUnmount == "function")
      try {
        Pl.onCommitFiberUnmount(Da, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        _l || Ot(e, t), Lt(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        _l || Ot(e, t);
        var a = gl, n = Jl;
        ye(e.type) && (gl = e.stateNode, Jl = !1), Lt(
          l,
          t,
          e
        ), gn(e.stateNode), gl = a, Jl = n;
        break;
      case 5:
        _l || Ot(e, t);
      case 6:
        if (a = gl, n = Jl, gl = null, Lt(
          l,
          t,
          e
        ), gl = a, Jl = n, gl !== null)
          if (Jl)
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
        gl !== null && (Jl ? (l = gl, Id(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), _a(l)) : Id(gl, e.stateNode));
        break;
      case 4:
        a = gl, n = Jl, gl = e.stateNode.containerInfo, Jl = !0, Lt(
          l,
          t,
          e
        ), gl = a, Jl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        se(2, e, t), _l || se(4, e, t), Lt(
          l,
          t,
          e
        );
        break;
      case 1:
        _l || (Ot(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && P0(
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
        _l = (a = _l) || e.memoizedState !== null, Lt(
          l,
          t,
          e
        ), _l = a;
        break;
      default:
        Lt(
          l,
          t,
          e
        );
    }
  }
  function cd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        _a(l);
      } catch (e) {
        cl(t, t.return, e);
      }
    }
  }
  function fd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        _a(l);
      } catch (e) {
        cl(t, t.return, e);
      }
  }
  function bm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new ad()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new ad()), t;
      default:
        throw Error(s(435, l.tag));
    }
  }
  function pu(l, t) {
    var e = bm(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = _m.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function $l(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ye(c.type)) {
                gl = c.stateNode, Jl = !1;
                break l;
              }
              break;
            case 5:
              gl = c.stateNode, Jl = !1;
              break l;
            case 3:
            case 4:
              gl = c.stateNode.containerInfo, Jl = !0;
              break l;
          }
          c = c.return;
        }
        if (gl === null) throw Error(s(160));
        id(u, i, n), gl = null, Jl = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        sd(t, l), t = t.sibling;
  }
  var Et = null;
  function sd(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(t, l), Wl(l), a & 4 && (se(3, l, l.return), cn(3, l), se(5, l, l.return));
        break;
      case 1:
        $l(t, l), Wl(l), a & 512 && (_l || e === null || Ot(e, e.return)), a & 64 && Vt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Et;
        if ($l(t, l), Wl(l), a & 512 && (_l || e === null || Ot(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ha] || u[Ul] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), ql(u, a, e), u[Ul] = l, Dl(u), a = u;
                      break l;
                    case "link":
                      var i = sr(
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
                      u = n.createElement(a), ql(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = sr(
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
                      u = n.createElement(a), ql(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  u[Ul] = l, Dl(u), a = u;
                }
                l.stateNode = a;
              } else
                dr(
                  n,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = fr(
                n,
                a,
                l.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? dr(
              n,
              l.type,
              l.stateNode
            ) : fr(
              n,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && jc(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        $l(t, l), Wl(l), a & 512 && (_l || e === null || Ot(e, e.return)), e !== null && a & 4 && jc(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if ($l(t, l), Wl(l), a & 512 && (_l || e === null || Ot(e, e.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            ke(n, "");
          } catch (R) {
            cl(l, l.return, R);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, jc(
          l,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (_c = !0);
        break;
      case 6:
        if ($l(t, l), Wl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(s(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (R) {
            cl(l, l.return, R);
          }
        }
        break;
      case 3:
        if (Bu = null, n = Et, Et = Hu(t.containerInfo), $l(t, l), Et = n, Wl(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            _a(t.containerInfo);
          } catch (R) {
            cl(l, l.return, R);
          }
        _c && (_c = !1, dd(l));
        break;
      case 4:
        a = Et, Et = Hu(
          l.stateNode.containerInfo
        ), $l(t, l), Wl(l), Et = a;
        break;
      case 12:
        $l(t, l), Wl(l);
        break;
      case 31:
        $l(t, l), Wl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 13:
        $l(t, l), Wl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (zu = Il()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null, g = Vt, S = _l;
        if (Vt = g || n, _l = S || r, $l(t, l), _l = S, Vt = g, Wl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || r || Vt || _l || Xe(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                r = e = t;
                try {
                  if (u = r.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = r.stateNode;
                    var j = r.memoizedProps.style, b = j != null && j.hasOwnProperty("display") ? j.display : null;
                    c.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
                  }
                } catch (R) {
                  cl(r, r.return, R);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                r = t;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (R) {
                  cl(r, r.return, R);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                r = t;
                try {
                  var p = r.stateNode;
                  n ? Pd(p, !0) : Pd(r.stateNode, !1);
                } catch (R) {
                  cl(r, r.return, R);
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
        $l(t, l), Wl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pu(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        $l(t, l), Wl(l);
    }
  }
  function Wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (td(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = Nc(l);
            xu(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (ke(i, ""), e.flags &= -33);
            var c = Nc(l);
            xu(l, c, i);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo, g = Nc(l);
            Tc(
              l,
              g,
              r
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (S) {
        cl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function dd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        dd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        nd(l, t.alternate, t), t = t.sibling;
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
          typeof e.componentWillUnmount == "function" && P0(
            t,
            t.return,
            e
          ), Xe(t);
          break;
        case 27:
          gn(t.stateNode);
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
          ), cn(4, u);
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
              cl(a, a.return, g);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  Xs(r[n], c);
            } catch (g) {
              cl(a, a.return, g);
            }
          }
          e && i & 64 && I0(u), fn(u, u.return);
          break;
        case 27:
          ed(u);
        case 26:
        case 5:
          Jt(
            n,
            u,
            e
          ), e && a === null && i & 4 && ld(u), fn(u, u.return);
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
          ), e && i & 4 && cd(n, u);
          break;
        case 13:
          Jt(
            n,
            u,
            e
          ), e && i & 4 && fd(n, u);
          break;
        case 22:
          u.memoizedState === null && Jt(
            n,
            u,
            e
          ), fn(u, u.return);
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
  function Ac(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Ja(e));
  }
  function Mc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ja(l));
  }
  function jt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        rd(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function rd(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        jt(
          l,
          t,
          e,
          a
        ), n & 2048 && cn(9, t);
        break;
      case 1:
        jt(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        jt(
          l,
          t,
          e,
          a
        ), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ja(l)));
        break;
      case 12:
        if (n & 2048) {
          jt(
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
          jt(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        jt(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        jt(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? jt(
          l,
          t,
          e,
          a
        ) : sn(l, t) : u._visibility & 2 ? jt(
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
        )), n & 2048 && Ac(i, t);
        break;
      case 24:
        jt(
          l,
          t,
          e,
          a
        ), n & 2048 && Mc(t.alternate, t);
        break;
      default:
        jt(
          l,
          t,
          e,
          a
        );
    }
  }
  function ya(l, t, e, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = l, i = t, c = e, r = a, g = i.flags;
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
          ), cn(8, i);
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          i.memoizedState !== null ? S._visibility & 2 ? ya(
            u,
            i,
            c,
            r,
            n
          ) : sn(
            u,
            i
          ) : (S._visibility |= 2, ya(
            u,
            i,
            c,
            r,
            n
          )), n && g & 2048 && Ac(
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
          ), n && g & 2048 && Mc(i.alternate, i);
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
  function sn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            sn(e, a), n & 2048 && Ac(
              a.alternate,
              a
            );
            break;
          case 24:
            sn(e, a), n & 2048 && Mc(a.alternate, a);
            break;
          default:
            sn(e, a);
        }
        t = t.sibling;
      }
  }
  var dn = 8192;
  function ga(l, t, e) {
    if (l.subtreeFlags & dn)
      for (l = l.child; l !== null; )
        od(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function od(l, t, e) {
    switch (l.tag) {
      case 26:
        ga(
          l,
          t,
          e
        ), l.flags & dn && l.memoizedState !== null && n1(
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
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = dn, dn = 16777216, ga(
          l,
          t,
          e
        ), dn = a) : ga(
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
  function md(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function rn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Rl = a, vd(
            a,
            l
          );
        }
      md(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        hd(l), l = l.sibling;
  }
  function hd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        rn(l), l.flags & 2048 && se(9, l, l.return);
        break;
      case 3:
        rn(l);
        break;
      case 12:
        rn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Su(l)) : rn(l);
        break;
      default:
        rn(l);
    }
  }
  function Su(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Rl = a, vd(
            a,
            l
          );
        }
      md(l);
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
  function vd(l, t) {
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
          Ja(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Rl = a;
      else
        l: for (e = l; Rl !== null; ) {
          a = Rl;
          var n = a.sibling, u = a.return;
          if (ud(a), a === e) {
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
  var xm = {
    getCacheForType: function(l) {
      var t = Cl(jl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Cl(jl).controller.signal;
    }
  }, pm = typeof WeakMap == "function" ? WeakMap : Map, al = 0, hl = null, $ = null, F = 0, il = 0, ut = null, de = !1, ba = !1, Oc = !1, $t = 0, xl = 0, re = 0, Qe = 0, Dc = 0, it = 0, xa = 0, on = null, kl = null, Rc = !1, zu = 0, yd = 0, Eu = 1 / 0, ju = null, oe = null, Al = 0, me = null, pa = null, Wt = 0, Uc = 0, Hc = null, gd = null, mn = 0, Cc = null;
  function ct() {
    return (al & 2) !== 0 && F !== 0 ? F & -F : z.T !== null ? Xc() : Uf();
  }
  function bd() {
    if (it === 0)
      if ((F & 536870912) === 0 || ll) {
        var l = Rn;
        Rn <<= 1, (Rn & 3932160) === 0 && (Rn = 262144), it = l;
      } else it = 536870912;
    return l = at.current, l !== null && (l.flags |= 32), it;
  }
  function Fl(l, t, e) {
    (l === hl && (il === 2 || il === 9) || l.cancelPendingCommit !== null) && (Sa(l, 0), he(
      l,
      F,
      it,
      !1
    )), Ua(l, e), ((al & 2) === 0 || l !== hl) && (l === hl && ((al & 2) === 0 && (Qe |= e), xl === 4 && he(
      l,
      F,
      it,
      !1
    )), Dt(l));
  }
  function xd(l, t, e) {
    if ((al & 6) !== 0) throw Error(s(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ra(l, t), n = a ? Em(l, t) : qc(l, t, !0), u = a;
    do {
      if (n === 0) {
        ba && !a && he(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, u && !Sm(e)) {
          n = qc(l, t, !1), u = !1;
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
              n = on;
              var r = c.current.memoizedState.isDehydrated;
              if (r && (Sa(c, i).flags |= 256), i = qc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Oc && !r) {
                  c.errorRecoveryDisabledLanes |= u, Qe |= u, n = 4;
                  break l;
                }
                u = kl, kl = n, u !== null && (kl === null ? kl = u : kl.push.apply(
                  kl,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Sa(l, 0), he(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, u = n, u) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              he(
                a,
                t,
                it,
                !de
              );
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (n = zu + 300 - Il(), 10 < n)) {
            if (he(
              a,
              t,
              it,
              !de
            ), Hn(a, 0, !0) !== 0) break l;
            Wt = t, a.timeoutHandle = kd(
              pd.bind(
                null,
                a,
                e,
                kl,
                ju,
                Rc,
                t,
                it,
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
          pd(
            a,
            e,
            kl,
            ju,
            Rc,
            t,
            it,
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
  function pd(l, t, e, a, n, u, i, c, r, g, S, j, b, p) {
    if (l.timeoutHandle = -1, j = t.subtreeFlags, j & 8192 || (j & 16785408) === 16785408) {
      j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht
      }, od(
        t,
        u,
        j
      );
      var R = (u & 62914560) === u ? zu - Il() : (u & 4194048) === u ? yd - Il() : 0;
      if (R = u1(
        j,
        R
      ), R !== null) {
        Wt = u, l.cancelPendingCommit = R(
          Ad.bind(
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
            j,
            null,
            b,
            p
          )
        ), he(l, u, i, !g);
        return;
      }
    }
    Ad(
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
  function Sm(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!tt(u(), n)) return !1;
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
    t &= ~Dc, t &= ~Qe, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - lt(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Of(l, e, t);
  }
  function Nu() {
    return (al & 6) === 0 ? (hn(0), !1) : !0;
  }
  function Bc() {
    if ($ !== null) {
      if (il === 0)
        var l = $.return;
      else
        l = $, Yt = Ue = null, Ii(l), ra = null, Wa = 0, l = $;
      for (; l !== null; )
        F0(l.alternate, l), l = l.return;
      $ = null;
    }
  }
  function Sa(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Xm(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Wt = 0, Bc(), hl = l, $ = e = Bt(l.current, null), F = t, il = 0, ut = null, de = !1, ba = Ra(l, t), Oc = !1, xa = it = Dc = Qe = re = xl = 0, kl = on = null, Rc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - lt(a), u = 1 << n;
        t |= l[n], a &= ~u;
      }
    return $t = t, Kn(), e;
  }
  function Sd(l, t) {
    V = null, z.H = an, t === da || t === lu ? (t = qs(), il = 3) : t === Gi ? (t = qs(), il = 4) : il = t === hc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, $ === null && (xl = 1, hu(
      l,
      ot(t, l.current)
    ));
  }
  function zd() {
    var l = at.current;
    return l === null ? !0 : (F & 4194048) === F ? yt === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === yt : !1;
  }
  function Ed() {
    var l = z.H;
    return z.H = an, l === null ? an : l;
  }
  function jd() {
    var l = z.A;
    return z.A = xm, l;
  }
  function Tu() {
    xl = 4, de || (F & 4194048) !== F && at.current !== null || (ba = !0), (re & 134217727) === 0 && (Qe & 134217727) === 0 || hl === null || he(
      hl,
      F,
      it,
      !1
    );
  }
  function qc(l, t, e) {
    var a = al;
    al |= 2;
    var n = Ed(), u = jd();
    (hl !== l || F !== t) && (ju = null, Sa(l, t)), t = !1;
    var i = xl;
    l: do
      try {
        if (il !== 0 && $ !== null) {
          var c = $, r = ut;
          switch (il) {
            case 8:
              Bc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              at.current === null && (t = !0);
              var g = il;
              if (il = 0, ut = null, za(l, c, r, g), e && ba) {
                i = 0;
                break l;
              }
              break;
            default:
              g = il, il = 0, ut = null, za(l, c, r, g);
          }
        }
        zm(), i = xl;
        break;
      } catch (S) {
        Sd(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Ue = null, al = a, z.H = n, z.A = u, $ === null && (hl = null, F = 0, Kn()), i;
  }
  function zm() {
    for (; $ !== null; ) Nd($);
  }
  function Em(l, t) {
    var e = al;
    al |= 2;
    var a = Ed(), n = jd();
    hl !== l || F !== t ? (ju = null, Eu = Il() + 500, Sa(l, t)) : ba = Ra(
      l,
      t
    );
    l: do
      try {
        if (il !== 0 && $ !== null) {
          t = $;
          var u = ut;
          t: switch (il) {
            case 1:
              il = 0, ut = null, za(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (Cs(u)) {
                il = 0, ut = null, Td(t);
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
              Cs(u) ? (il = 0, ut = null, Td(t)) : (il = 0, ut = null, za(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch ($.tag) {
                case 26:
                  i = $.memoizedState;
                case 5:
                case 27:
                  var c = $;
                  if (i ? rr(i) : c.stateNode.complete) {
                    il = 0, ut = null;
                    var r = c.sibling;
                    if (r !== null) $ = r;
                    else {
                      var g = c.return;
                      g !== null ? ($ = g, _u(g)) : $ = null;
                    }
                    break t;
                  }
              }
              il = 0, ut = null, za(l, t, u, 5);
              break;
            case 6:
              il = 0, ut = null, za(l, t, u, 6);
              break;
            case 8:
              Bc(), xl = 6;
              break l;
            default:
              throw Error(s(462));
          }
        }
        jm();
        break;
      } catch (S) {
        Sd(l, S);
      }
    while (!0);
    return Yt = Ue = null, z.H = a, z.A = n, al = e, $ !== null ? 0 : (hl = null, F = 0, Kn(), xl);
  }
  function jm() {
    for (; $ !== null && !Kr(); )
      Nd($);
  }
  function Nd(l) {
    var t = W0(l.alternate, l, $t);
    l.memoizedProps = l.pendingProps, t === null ? _u(l) : $ = t;
  }
  function Td(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = w0(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          F
        );
        break;
      case 11:
        t = w0(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          F
        );
        break;
      case 5:
        Ii(t);
      default:
        F0(e, t), t = $ = js(t, $t), t = W0(e, t, $t);
    }
    l.memoizedProps = l.pendingProps, t === null ? _u(l) : $ = t;
  }
  function za(l, t, e, a) {
    Yt = Ue = null, Ii(t), ra = null, Wa = 0;
    var n = t.return;
    try {
      if (om(
        l,
        n,
        t,
        e,
        F
      )) {
        xl = 1, hu(
          l,
          ot(e, l.current)
        ), $ = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw $ = n, u;
      xl = 1, hu(
        l,
        ot(e, l.current)
      ), $ = null;
      return;
    }
    t.flags & 32768 ? (ll || a === 1 ? l = !0 : ba || (F & 536870912) !== 0 ? l = !1 : (de = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = at.current, a !== null && a.tag === 13 && (a.flags |= 16384))), _d(t, l)) : _u(t);
  }
  function _u(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        _d(
          t,
          de
        );
        return;
      }
      l = t.return;
      var e = vm(
        t.alternate,
        t,
        $t
      );
      if (e !== null) {
        $ = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        $ = t;
        return;
      }
      $ = t = l;
    } while (t !== null);
    xl === 0 && (xl = 5);
  }
  function _d(l, t) {
    do {
      var e = ym(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, $ = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        $ = l;
        return;
      }
      $ = l = e;
    } while (l !== null);
    xl = 6, $ = null;
  }
  function Ad(l, t, e, a, n, u, i, c, r) {
    l.cancelPendingCommit = null;
    do
      Au();
    while (Al !== 0);
    if ((al & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === l.current) throw Error(s(177));
      if (u = t.lanes | t.childLanes, u |= Ni, eo(
        l,
        e,
        u,
        i,
        c,
        r
      ), l === hl && ($ = hl = null, F = 0), pa = t, me = l, Wt = e, Uc = u, Hc = n, gd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Am(On, function() {
        return Ud(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, n = A.p, A.p = 2, i = al, al |= 4;
        try {
          gm(l, t, e);
        } finally {
          al = i, A.p = n, z.T = a;
        }
      }
      Al = 1, Md(), Od(), Dd();
    }
  }
  function Md() {
    if (Al === 1) {
      Al = 0;
      var l = me, t = pa, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = z.T, z.T = null;
        var a = A.p;
        A.p = 2;
        var n = al;
        al |= 4;
        try {
          sd(t, l);
          var u = Wc, i = vs(l.containerInfo), c = u.focusedElem, r = u.selectionRange;
          if (i !== c && c && c.ownerDocument && hs(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && pi(c)) {
              var g = r.start, S = r.end;
              if (S === void 0 && (S = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var j = c.ownerDocument || document, b = j && j.defaultView || window;
                if (b.getSelection) {
                  var p = b.getSelection(), R = c.textContent.length, q = Math.min(r.start, R), ol = r.end === void 0 ? q : Math.min(r.end, R);
                  !p.extend && q > ol && (i = ol, ol = q, q = i);
                  var v = ms(
                    c,
                    q
                  ), o = ms(
                    c,
                    ol
                  );
                  if (v && o && (p.rangeCount !== 1 || p.anchorNode !== v.node || p.anchorOffset !== v.offset || p.focusNode !== o.node || p.focusOffset !== o.offset)) {
                    var y = j.createRange();
                    y.setStart(v.node, v.offset), p.removeAllRanges(), q > ol ? (p.addRange(y), p.extend(o.node, o.offset)) : (y.setEnd(o.node, o.offset), p.addRange(y));
                  }
                }
              }
            }
            for (j = [], p = c; p = p.parentNode; )
              p.nodeType === 1 && j.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < j.length; c++) {
              var E = j[c];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          Gu = !!$c, Wc = $c = null;
        } finally {
          al = n, A.p = a, z.T = e;
        }
      }
      l.current = t, Al = 2;
    }
  }
  function Od() {
    if (Al === 2) {
      Al = 0;
      var l = me, t = pa, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = z.T, z.T = null;
        var a = A.p;
        A.p = 2;
        var n = al;
        al |= 4;
        try {
          nd(l, t.alternate, t);
        } finally {
          al = n, A.p = a, z.T = e;
        }
      }
      Al = 3;
    }
  }
  function Dd() {
    if (Al === 4 || Al === 3) {
      Al = 0, Jr();
      var l = me, t = pa, e = Wt, a = gd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Al = 5 : (Al = 0, pa = me = null, Rd(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (oe = null), ti(e), t = t.stateNode, Pl && typeof Pl.onCommitFiberRoot == "function")
        try {
          Pl.onCommitFiberRoot(
            Da,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = z.T, n = A.p, A.p = 2, z.T = null;
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          z.T = t, A.p = n;
        }
      }
      (Wt & 3) !== 0 && Au(), Dt(l), n = l.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? l === Cc ? mn++ : (mn = 0, Cc = l) : mn = 0, hn(0);
    }
  }
  function Rd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ja(t)));
  }
  function Au() {
    return Md(), Od(), Dd(), Ud();
  }
  function Ud() {
    if (Al !== 5) return !1;
    var l = me, t = Uc;
    Uc = 0;
    var e = ti(Wt), a = z.T, n = A.p;
    try {
      A.p = 32 > e ? 32 : e, z.T = null, e = Hc, Hc = null;
      var u = me, i = Wt;
      if (Al = 0, pa = me = null, Wt = 0, (al & 6) !== 0) throw Error(s(331));
      var c = al;
      if (al |= 4, hd(u.current), rd(
        u,
        u.current,
        i,
        e
      ), al = c, hn(0, !1), Pl && typeof Pl.onPostCommitFiberRoot == "function")
        try {
          Pl.onPostCommitFiberRoot(Da, u);
        } catch {
        }
      return !0;
    } finally {
      A.p = n, z.T = a, Rd(l, t);
    }
  }
  function Hd(l, t, e) {
    t = ot(e, t), t = mc(l.stateNode, t, 2), l = ie(l, t, 2), l !== null && (Ua(l, 2), Dt(l));
  }
  function cl(l, t, e) {
    if (l.tag === 3)
      Hd(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hd(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (oe === null || !oe.has(a))) {
            l = ot(e, l), e = C0(2), a = ie(t, e, 2), a !== null && (B0(
              e,
              a,
              t,
              l
            ), Ua(a, 2), Dt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new pm();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(e) || (Oc = !0, n.add(e), l = Nm.bind(null, l, t, e), t.then(l, l));
  }
  function Nm(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, hl === l && (F & e) === e && (xl === 4 || xl === 3 && (F & 62914560) === F && 300 > Il() - zu ? (al & 2) === 0 && Sa(l, 0) : Dc |= e, xa === F && (xa = 0)), Dt(l);
  }
  function Cd(l, t) {
    t === 0 && (t = Mf()), l = Oe(l, t), l !== null && (Ua(l, t), Dt(l));
  }
  function Tm(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Cd(l, e);
  }
  function _m(l, t) {
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
        throw Error(s(314));
    }
    a !== null && a.delete(t), Cd(l, e);
  }
  function Am(l, t) {
    return Fu(l, t);
  }
  var Mu = null, Ea = null, Zc = !1, Ou = !1, Gc = !1, ve = 0;
  function Dt(l) {
    l !== Ea && l.next === null && (Ea === null ? Mu = Ea = l : Ea = Ea.next = l), Ou = !0, Zc || (Zc = !0, Om());
  }
  function hn(l, t) {
    if (!Gc && Ou) {
      Gc = !0;
      do
        for (var e = !1, a = Mu; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - lt(42 | l) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Zd(a, u));
          } else
            u = F, u = Hn(
              a,
              a === hl ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ra(a, u) || (e = !0, Zd(a, u));
          a = a.next;
        }
      while (e);
      Gc = !1;
    }
  }
  function Mm() {
    Bd();
  }
  function Bd() {
    Ou = Zc = !1;
    var l = 0;
    ve !== 0 && Gm() && (l = ve);
    for (var t = Il(), e = null, a = Mu; a !== null; ) {
      var n = a.next, u = qd(a, t);
      u === 0 ? (a.next = null, e === null ? Mu = n : e.next = n, n === null && (Ea = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (Ou = !0)), a = n;
    }
    Al !== 0 && Al !== 5 || hn(l), ve !== 0 && (ve = 0);
  }
  function qd(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - lt(u), c = 1 << i, r = n[i];
      r === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = to(c, t)) : r <= t && (l.expiredLanes |= c), u &= ~c;
    }
    if (t = hl, e = F, e = Hn(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (il === 2 || il === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Iu(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ra(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && Iu(a), ti(e)) {
        case 2:
        case 8:
          e = _f;
          break;
        case 32:
          e = On;
          break;
        case 268435456:
          e = Af;
          break;
        default:
          e = On;
      }
      return a = Yd.bind(null, l), e = Fu(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && Iu(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Yd(l, t) {
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
    ), a === 0 ? null : (xd(l, a, t), qd(l, Il()), l.callbackNode != null && l.callbackNode === e ? Yd.bind(null, l) : null);
  }
  function Zd(l, t) {
    if (Au()) return null;
    xd(l, t, !0);
  }
  function Om() {
    Qm(function() {
      (al & 6) !== 0 ? Fu(
        Tf,
        Mm
      ) : Bd();
    });
  }
  function Xc() {
    if (ve === 0) {
      var l = fa;
      l === 0 && (l = Dn, Dn <<= 1, (Dn & 261888) === 0 && (Dn = 256)), ve = l;
    }
    return ve;
  }
  function Gd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Yn("" + l);
  }
  function Xd(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Dm(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = Gd(
        (n[Ll] || null).action
      ), i = a.submitter;
      i && (t = (t = i[Ll] || null) ? Gd(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
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
                  var r = i ? Xd(n, i) : new FormData(n);
                  cc(
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
                typeof u == "function" && (c.preventDefault(), r = i ? Xd(n, i) : new FormData(n), cc(
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
  for (var Qc = 0; Qc < ji.length; Qc++) {
    var wc = ji[Qc], Rm = wc.toLowerCase(), Um = wc[0].toUpperCase() + wc.slice(1);
    zt(
      Rm,
      "on" + Um
    );
  }
  zt(bs, "onAnimationEnd"), zt(xs, "onAnimationIteration"), zt(ps, "onAnimationStart"), zt("dblclick", "onDoubleClick"), zt("focusin", "onFocus"), zt("focusout", "onBlur"), zt(Wo, "onTransitionRun"), zt(ko, "onTransitionStart"), zt(Fo, "onTransitionCancel"), zt(Ss, "onTransitionEnd"), $e("onMouseEnter", ["mouseout", "mouseover"]), $e("onMouseLeave", ["mouseout", "mouseover"]), $e("onPointerEnter", ["pointerout", "pointerover"]), $e("onPointerLeave", ["pointerout", "pointerover"]), Te(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Te(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Te("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Te(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Te(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Te(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Hm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn)
  );
  function Qd(l, t) {
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
  function W(l, t) {
    var e = t[ei];
    e === void 0 && (e = t[ei] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (wd(t, l, 2, !1), e.add(a));
  }
  function Vc(l, t, e) {
    var a = 0;
    t && (a |= 4), wd(
      e,
      l,
      a,
      t
    );
  }
  var Du = "_reactListening" + Math.random().toString(36).slice(2);
  function Lc(l) {
    if (!l[Du]) {
      l[Du] = !0, Bf.forEach(function(e) {
        e !== "selectionchange" && (Hm.has(e) || Vc(e, !1, l), Vc(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Du] || (t[Du] = !0, Vc("selectionchange", !1, t));
    }
  }
  function wd(l, t, e, a) {
    switch (br(t)) {
      case 2:
        var n = f1;
        break;
      case 8:
        n = s1;
        break;
      default:
        n = cf;
    }
    e = n.bind(
      null,
      t,
      e,
      l
    ), n = void 0, !ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, e, !0) : n !== void 0 ? l.addEventListener(t, e, {
      passive: n
    }) : l.addEventListener(t, e, !1);
  }
  function Kc(l, t, e, a, n) {
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
    $f(function() {
      var g = u, S = si(e), j = [];
      l: {
        var b = zs.get(l);
        if (b !== void 0) {
          var p = Qn, R = l;
          switch (l) {
            case "keypress":
              if (Gn(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = _o;
              break;
            case "focusin":
              R = "focus", p = vi;
              break;
            case "focusout":
              R = "blur", p = vi;
              break;
            case "beforeblur":
            case "afterblur":
              p = vi;
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
              p = Ff;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = vo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Oo;
              break;
            case bs:
            case xs:
            case ps:
              p = bo;
              break;
            case Ss:
              p = Ro;
              break;
            case "scroll":
            case "scrollend":
              p = mo;
              break;
            case "wheel":
              p = Ho;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = po;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Pf;
              break;
            case "toggle":
            case "beforetoggle":
              p = Bo;
          }
          var q = (t & 4) !== 0, ol = !q && (l === "scroll" || l === "scrollend"), v = q ? b !== null ? b + "Capture" : null : b;
          q = [];
          for (var o = g, y; o !== null; ) {
            var E = o;
            if (y = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || y === null || v === null || (E = Ba(o, v), E != null && q.push(
              yn(o, E, y)
            )), ol) break;
            o = o.return;
          }
          0 < q.length && (b = new p(
            b,
            R,
            null,
            e,
            S
          ), j.push({ event: b, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (b = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", b && e !== fi && (R = e.relatedTarget || e.fromElement) && (Le(R) || R[Ve]))
            break l;
          if ((p || b) && (b = S.window === S ? S : (b = S.ownerDocument) ? b.defaultView || b.parentWindow : window, p ? (R = e.relatedTarget || e.toElement, p = g, R = R ? Le(R) : null, R !== null && (ol = Y(R), q = R.tag, R !== ol || q !== 5 && q !== 27 && q !== 6) && (R = null)) : (p = null, R = g), p !== R)) {
            if (q = Ff, E = "onMouseLeave", v = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (q = Pf, E = "onPointerLeave", v = "onPointerEnter", o = "pointer"), ol = p == null ? b : Ca(p), y = R == null ? b : Ca(R), b = new q(
              E,
              o + "leave",
              p,
              e,
              S
            ), b.target = ol, b.relatedTarget = y, E = null, Le(S) === g && (q = new q(
              v,
              o + "enter",
              R,
              e,
              S
            ), q.target = y, q.relatedTarget = ol, E = q), ol = E, p && R)
              t: {
                for (q = Cm, v = p, o = R, y = 0, E = v; E; E = q(E))
                  y++;
                E = 0;
                for (var C = o; C; C = q(C))
                  E++;
                for (; 0 < y - E; )
                  v = q(v), y--;
                for (; 0 < E - y; )
                  o = q(o), E--;
                for (; y--; ) {
                  if (v === o || o !== null && v === o.alternate) {
                    q = v;
                    break t;
                  }
                  v = q(v), o = q(o);
                }
                q = null;
              }
            else q = null;
            p !== null && Vd(
              j,
              b,
              p,
              q,
              !1
            ), R !== null && ol !== null && Vd(
              j,
              ol,
              R,
              q,
              !0
            );
          }
        }
        l: {
          if (b = g ? Ca(g) : window, p = b.nodeName && b.nodeName.toLowerCase(), p === "select" || p === "input" && b.type === "file")
            var tl = cs;
          else if (us(b))
            if (fs)
              tl = Ko;
            else {
              tl = Vo;
              var H = wo;
            }
          else
            p = b.nodeName, !p || p.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? g && ci(g.elementType) && (tl = cs) : tl = Lo;
          if (tl && (tl = tl(l, g))) {
            is(
              j,
              tl,
              e,
              S
            );
            break l;
          }
          H && H(l, b, g), l === "focusout" && g && b.type === "number" && g.memoizedProps.value != null && ii(b, "number", b.value);
        }
        switch (H = g ? Ca(g) : window, l) {
          case "focusin":
            (us(H) || H.contentEditable === "true") && (la = H, Si = g, Va = null);
            break;
          case "focusout":
            Va = Si = la = null;
            break;
          case "mousedown":
            zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zi = !1, ys(j, e, S);
            break;
          case "selectionchange":
            if ($o) break;
          case "keydown":
          case "keyup":
            ys(j, e, S);
        }
        var L;
        if (gi)
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
          Pe ? as(l, e) && (I = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (I = "onCompositionStart");
        I && (ls && e.locale !== "ko" && (Pe || I !== "onCompositionStart" ? I === "onCompositionEnd" && Pe && (L = Wf()) : (Pt = S, oi = "value" in Pt ? Pt.value : Pt.textContent, Pe = !0)), H = Ru(g, I), 0 < H.length && (I = new If(
          I,
          l,
          null,
          e,
          S
        ), j.push({ event: I, listeners: H }), L ? I.data = L : (L = ns(e), L !== null && (I.data = L)))), (L = Yo ? Zo(l, e) : Go(l, e)) && (I = Ru(g, "onBeforeInput"), 0 < I.length && (H = new If(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          S
        ), j.push({
          event: H,
          listeners: I
        }), H.data = L)), Dm(
          j,
          l,
          g,
          e,
          S
        );
      }
      Qd(j, t);
    });
  }
  function yn(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Ru(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ba(l, e), n != null && a.unshift(
        yn(l, n, u)
      ), n = Ba(l, t), n != null && a.push(
        yn(l, n, u)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Cm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Vd(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, r = c.alternate, g = c.stateNode;
      if (c = c.tag, r !== null && r === a) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (r = g, n ? (g = Ba(e, u), g != null && i.unshift(
        yn(e, g, r)
      )) : n || (g = Ba(e, u), g != null && i.push(
        yn(e, g, r)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Bm = /\r\n?/g, qm = /\u0000|\uFFFD/g;
  function Ld(l) {
    return (typeof l == "string" ? l : "" + l).replace(Bm, `
`).replace(qm, "");
  }
  function Kd(l, t) {
    return t = Ld(t), Ld(l) === t;
  }
  function rl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ke(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ke(l, "" + a);
        break;
      case "className":
        Bn(l, "class", a);
        break;
      case "tabIndex":
        Bn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bn(l, e, a);
        break;
      case "style":
        Kf(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          Bn(l, "data", a);
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
        a != null && W("scroll", l);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(s(60));
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
        W("beforetoggle", l), W("toggle", l), Cn(l, "popover", a);
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
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = ro.get(e) || e, Cn(l, e, a));
    }
  }
  function Jc(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        Kf(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ke(l, a) : (typeof a == "number" || typeof a == "bigint") && ke(l, "" + a);
        break;
      case "onScroll":
        a != null && W("scroll", l);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", l);
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
        if (!qf.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[Ll] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Cn(l, e, a);
          }
    }
  }
  function ql(l, t, e) {
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
        W("error", l), W("load", l);
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
                  throw Error(s(137, t));
                default:
                  rl(l, t, u, i, e, null);
              }
          }
        n && rl(l, t, "srcSet", e.srcSet, e, null), a && rl(l, t, "src", e.src, e, null);
        return;
      case "input":
        W("invalid", l);
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
                    throw Error(s(137, t));
                  break;
                default:
                  rl(l, t, a, S, e, null);
              }
          }
        Qf(
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
        W("invalid", l), a = i = u = null;
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
        W("invalid", l), u = n = a = null;
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
                if (c != null) throw Error(s(91));
                break;
              default:
                rl(l, t, i, c, e, null);
            }
        Vf(l, a, n, u);
        return;
      case "option":
        for (r in e)
          e.hasOwnProperty(r) && (a = e[r], a != null) && (r === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : rl(l, t, r, a, e, null));
        return;
      case "dialog":
        W("beforetoggle", l), W("toggle", l), W("cancel", l), W("close", l);
        break;
      case "iframe":
      case "object":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vn.length; a++)
          W(vn[a], l);
        break;
      case "image":
        W("error", l), W("load", l);
        break;
      case "details":
        W("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        W("error", l), W("load", l);
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
                throw Error(s(137, t));
              default:
                rl(l, t, g, a, e, null);
            }
        return;
      default:
        if (ci(t)) {
          for (S in e)
            e.hasOwnProperty(S) && (a = e[S], a !== void 0 && Jc(
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
      e.hasOwnProperty(c) && (a = e[c], a != null && rl(l, t, c, a, e, null));
  }
  function Ym(l, t, e, a) {
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
          var j = e[p];
          if (e.hasOwnProperty(p) && j != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = j;
              default:
                a.hasOwnProperty(p) || rl(l, t, p, null, a, j);
            }
        }
        for (var b in a) {
          var p = a[b];
          if (j = e[b], a.hasOwnProperty(b) && (p != null || j != null))
            switch (b) {
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
                  throw Error(s(137, t));
                break;
              default:
                p !== j && rl(
                  l,
                  t,
                  b,
                  p,
                  a,
                  j
                );
            }
        }
        ui(
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
        p = i = c = b = null;
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
                b = u;
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
        t = c, e = i, a = p, b != null ? We(l, !!e, b, !1) : !!a != !!e && (t != null ? We(l, !!e, t, !0) : We(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = b = null;
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
                b = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== u && rl(l, t, i, n, a, u);
            }
        wf(l, b, p);
        return;
      case "option":
        for (var R in e)
          b = e[R], e.hasOwnProperty(R) && b != null && !a.hasOwnProperty(R) && (R === "selected" ? l.selected = !1 : rl(
            l,
            t,
            R,
            null,
            a,
            b
          ));
        for (r in a)
          b = a[r], p = e[r], a.hasOwnProperty(r) && b !== p && (b != null || p != null) && (r === "selected" ? l.selected = b && typeof b != "function" && typeof b != "symbol" : rl(
            l,
            t,
            r,
            b,
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
        for (var q in e)
          b = e[q], e.hasOwnProperty(q) && b != null && !a.hasOwnProperty(q) && rl(l, t, q, null, a, b);
        for (g in a)
          if (b = a[g], p = e[g], a.hasOwnProperty(g) && b !== p && (b != null || p != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(s(137, t));
                break;
              default:
                rl(
                  l,
                  t,
                  g,
                  b,
                  a,
                  p
                );
            }
        return;
      default:
        if (ci(t)) {
          for (var ol in e)
            b = e[ol], e.hasOwnProperty(ol) && b !== void 0 && !a.hasOwnProperty(ol) && Jc(
              l,
              t,
              ol,
              void 0,
              a,
              b
            );
          for (S in a)
            b = a[S], p = e[S], !a.hasOwnProperty(S) || b === p || b === void 0 && p === void 0 || Jc(
              l,
              t,
              S,
              b,
              a,
              p
            );
          return;
        }
    }
    for (var v in e)
      b = e[v], e.hasOwnProperty(v) && b != null && !a.hasOwnProperty(v) && rl(l, t, v, null, a, b);
    for (j in a)
      b = a[j], p = e[j], !a.hasOwnProperty(j) || b === p || b == null && p == null || rl(l, t, j, b, a, p);
  }
  function Jd(l) {
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
  function Zm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && Jd(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var r = e[a], g = r.startTime;
            if (g > c) break;
            var S = r.transferSize, j = r.initiatorType;
            S && Jd(j) && (r = r.responseEnd, i += S * (r < c ? 1 : (c - g) / (r - g)));
          }
          if (--a, t += 8 * (u + i) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var $c = null, Wc = null;
  function Uu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function $d(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wd(l, t) {
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
  function kc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fc = null;
  function Gm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Fc ? !1 : (Fc = l, !0) : (Fc = null, !1);
  }
  var kd = typeof setTimeout == "function" ? setTimeout : void 0, Xm = typeof clearTimeout == "function" ? clearTimeout : void 0, Fd = typeof Promise == "function" ? Promise : void 0, Qm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fd < "u" ? function(l) {
    return Fd.resolve(null).then(l).catch(wm);
  } : kd;
  function wm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ye(l) {
    return l === "head";
  }
  function Id(l, t) {
    var e = t, a = 0;
    do {
      var n = e.nextSibling;
      if (l.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(n), _a(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          gn(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, gn(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[Ha] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
          }
        } else
          e === "body" && gn(l.ownerDocument.body);
      e = n;
    } while (e);
    _a(t);
  }
  function Pd(l, t) {
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
  function Ic(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ic(e), ai(e);
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
  function Vm(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ha])
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
      if (l = gt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Lm(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = gt(l.nextSibling), l === null)) return null;
    return l;
  }
  function lr(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = gt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Pc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function lf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Km(l, t) {
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
  function gt(l) {
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
  var tf = null;
  function tr(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return gt(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function er(l) {
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
  function ar(l, t, e) {
    switch (t = Uu(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(s(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(s(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(s(454));
        return l;
      default:
        throw Error(s(451));
    }
  }
  function gn(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ai(l);
  }
  var bt = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Set();
  function Hu(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var kt = A.d;
  A.d = {
    f: Jm,
    r: $m,
    D: Wm,
    C: km,
    L: Fm,
    m: Im,
    X: l1,
    S: Pm,
    M: t1
  };
  function Jm() {
    var l = kt.f(), t = Nu();
    return l || t;
  }
  function $m(l) {
    var t = Ke(l);
    t !== null && t.tag === 5 && t.type === "form" ? S0(t) : kt.r(l);
  }
  var ja = typeof document > "u" ? null : document;
  function ur(l, t, e) {
    var a = ja;
    if (a && typeof t == "string" && t) {
      var n = dt(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), nr.has(n) || (nr.add(n), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), ql(t, "link", l), Dl(t), a.head.appendChild(t)));
    }
  }
  function Wm(l) {
    kt.D(l), ur("dns-prefetch", l, null);
  }
  function km(l, t) {
    kt.C(l, t), ur("preconnect", l, t);
  }
  function Fm(l, t, e) {
    kt.L(l, t, e);
    var a = ja;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + dt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + dt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + dt(
        e.imageSizes
      ) + '"]')) : n += '[href="' + dt(l) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Na(l);
          break;
        case "script":
          u = Ta(l);
      }
      bt.has(u) || (l = D(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), bt.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(bn(u)) || t === "script" && a.querySelector(xn(u)) || (t = a.createElement("link"), ql(t, "link", l), Dl(t), a.head.appendChild(t)));
    }
  }
  function Im(l, t) {
    kt.m(l, t);
    var e = ja;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + dt(a) + '"][href="' + dt(l) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ta(l);
      }
      if (!bt.has(u) && (l = D({ rel: "modulepreload", href: l }, t), bt.set(u, l), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(xn(u)))
              return;
        }
        a = e.createElement("link"), ql(a, "link", l), Dl(a), e.head.appendChild(a);
      }
    }
  }
  function Pm(l, t, e) {
    kt.S(l, t, e);
    var a = ja;
    if (a && l) {
      var n = Je(a).hoistableStyles, u = Na(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          bn(u)
        ))
          c.loading = 5;
        else {
          l = D(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = bt.get(u)) && ef(l, e);
          var r = i = a.createElement("link");
          Dl(r), ql(r, "link", l), r._p = new Promise(function(g, S) {
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
  function l1(l, t) {
    kt.X(l, t);
    var e = ja;
    if (e && l) {
      var a = Je(e).hoistableScripts, n = Ta(l), u = a.get(n);
      u || (u = e.querySelector(xn(n)), u || (l = D({ src: l, async: !0 }, t), (t = bt.get(n)) && af(l, t), u = e.createElement("script"), Dl(u), ql(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function t1(l, t) {
    kt.M(l, t);
    var e = ja;
    if (e && l) {
      var a = Je(e).hoistableScripts, n = Ta(l), u = a.get(n);
      u || (u = e.querySelector(xn(n)), u || (l = D({ src: l, async: !0, type: "module" }, t), (t = bt.get(n)) && af(l, t), u = e.createElement("script"), Dl(u), ql(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function ir(l, t, e, a) {
    var n = (n = J.current) ? Hu(n) : null;
    if (!n) throw Error(s(446));
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
            bn(l)
          )) && !u._p && (i.instance = u, i.state.loading = 5), bt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, bt.set(l, e), u || e1(
            n,
            l,
            e,
            i.state
          ))), t && a === null)
            throw Error(s(528, ""));
          return i;
        }
        if (t && a !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ta(e), e = Je(
          n
        ).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, l));
    }
  }
  function Na(l) {
    return 'href="' + dt(l) + '"';
  }
  function bn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function cr(l) {
    return D({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function e1(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ql(t, "link", e), Dl(t), l.head.appendChild(t));
  }
  function Ta(l) {
    return '[src="' + dt(l) + '"]';
  }
  function xn(l) {
    return "script[async]" + l;
  }
  function fr(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + dt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Dl(a), a;
          var n = D({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Dl(a), ql(a, "style", n), Cu(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          n = Na(e.href);
          var u = l.querySelector(
            bn(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Dl(u), u;
          a = cr(e), (n = bt.get(n)) && ef(a, n), u = (l.ownerDocument || l).createElement("link"), Dl(u);
          var i = u;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), ql(u, "link", a), t.state.loading |= 4, Cu(u, e.precedence, l), t.instance = u;
        case "script":
          return u = Ta(e.src), (n = l.querySelector(
            xn(u)
          )) ? (t.instance = n, Dl(n), n) : (a = e, (n = bt.get(u)) && (a = D({}, e), af(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Dl(n), ql(n, "link", a), l.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
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
  function ef(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function af(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Bu = null;
  function sr(l, t, e) {
    if (Bu === null) {
      var a = /* @__PURE__ */ new Map(), n = Bu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Bu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[Ha] || u[Ul] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function dr(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function a1(l, t, e) {
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
  function rr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function n1(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Na(a.href), u = t.querySelector(
          bn(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = qu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, Dl(u);
          return;
        }
        u = t.ownerDocument || t, a = cr(a), (n = bt.get(n)) && ef(a, n), u = u.createElement("link"), Dl(u);
        var i = u;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), ql(u, "link", a), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = qu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var nf = 0;
  function u1(l, t) {
    return l.stylesheets && l.count === 0 && Zu(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Zu(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < l.imgBytes && nf === 0 && (nf = 62500 * Zm());
      var n = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Zu(l, l.stylesheets), l.unsuspend)) {
            var u = l.unsuspend;
            l.unsuspend = null, u();
          }
        },
        (l.imgBytes > nf ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function qu() {
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
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Yu = /* @__PURE__ */ new Map(), t.forEach(i1, l), Yu = null, qu.call(l));
  }
  function i1(l, t) {
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
      n = t.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = qu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var pn = {
    $$typeof: El,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function c1(l, t, e, a, n, u, i, c, r) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.hiddenUpdates = Pu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function or(l, t, e, a, n, u, i, c, r, g, S, j) {
    return l = new c1(
      l,
      t,
      e,
      i,
      r,
      g,
      S,
      j,
      c
    ), t = 1, u === !0 && (t |= 24), u = et(3, null, null, t), l.current = u, u.stateNode = l, t = qi(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Xi(u), l;
  }
  function mr(l) {
    return l ? (l = aa, l) : aa;
  }
  function hr(l, t, e, a, n, u) {
    n = mr(n), a.context === null ? a.context = n : a.pendingContext = n, a = ue(t), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = ie(l, a, t), e !== null && (Fl(e, l, t), Fa(e, l, t));
  }
  function vr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function uf(l, t) {
    vr(l, t), (l = l.alternate) && vr(l, t);
  }
  function yr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oe(l, 67108864);
      t !== null && Fl(t, l, 67108864), uf(l, 67108864);
    }
  }
  function gr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ct();
      t = li(t);
      var e = Oe(l, t);
      e !== null && Fl(e, l, t), uf(l, t);
    }
  }
  var Gu = !0;
  function f1(l, t, e, a) {
    var n = z.T;
    z.T = null;
    var u = A.p;
    try {
      A.p = 2, cf(l, t, e, a);
    } finally {
      A.p = u, z.T = n;
    }
  }
  function s1(l, t, e, a) {
    var n = z.T;
    z.T = null;
    var u = A.p;
    try {
      A.p = 8, cf(l, t, e, a);
    } finally {
      A.p = u, z.T = n;
    }
  }
  function cf(l, t, e, a) {
    if (Gu) {
      var n = ff(a);
      if (n === null)
        Kc(
          l,
          t,
          a,
          Xu,
          e
        ), xr(l, a);
      else if (r1(
        n,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (xr(l, a), t & 4 && -1 < d1.indexOf(l)) {
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
                      var r = 1 << 31 - lt(i);
                      c.entanglements[1] |= r, i &= ~r;
                    }
                    Dt(u), (al & 6) === 0 && (Eu = Il() + 500, hn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Oe(u, 2), c !== null && Fl(c, u, 2), Nu(), uf(u, 2);
            }
          if (u = ff(a), u === null && Kc(
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
        Kc(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function ff(l) {
    return l = si(l), sf(l);
  }
  var Xu = null;
  function sf(l) {
    if (Xu = null, l = Le(l), l !== null) {
      var t = Y(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = X(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = k(t), l !== null) return l;
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
  function br(l) {
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
        switch ($r()) {
          case Tf:
            return 2;
          case _f:
            return 8;
          case On:
          case Wr:
            return 32;
          case Af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var df = !1, ge = null, be = null, xe = null, Sn = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), pe = [], d1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function xr(l, t) {
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
        Sn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(t.pointerId);
    }
  }
  function En(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Ke(t), t !== null && yr(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function r1(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return ge = En(
          ge,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return be = En(
          be,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return xe = En(
          xe,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Sn.set(
          u,
          En(
            Sn.get(u) || null,
            l,
            t,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, zn.set(
          u,
          En(
            zn.get(u) || null,
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
  function pr(l) {
    var t = Le(l.target);
    if (t !== null) {
      var e = Y(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = X(e), t !== null) {
            l.blockedOn = t, Hf(l.priority, function() {
              gr(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = k(e), t !== null) {
            l.blockedOn = t, Hf(l.priority, function() {
              gr(e);
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
      var e = ff(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        fi = a, e.target.dispatchEvent(a), fi = null;
      } else
        return t = Ke(e), t !== null && yr(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function Sr(l, t, e) {
    Qu(l) && e.delete(t);
  }
  function o1() {
    df = !1, ge !== null && Qu(ge) && (ge = null), be !== null && Qu(be) && (be = null), xe !== null && Qu(xe) && (xe = null), Sn.forEach(Sr), zn.forEach(Sr);
  }
  function wu(l, t) {
    l.blockedOn === t && (l.blockedOn = null, df || (df = !0, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      o1
    )));
  }
  var Vu = null;
  function zr(l) {
    Vu !== l && (Vu = l, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      function() {
        Vu === l && (Vu = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], n = l[t + 2];
          if (typeof a != "function") {
            if (sf(a || e) === null)
              continue;
            break;
          }
          var u = Ke(e);
          u !== null && (l.splice(t, 3), t -= 3, cc(
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
  function _a(l) {
    function t(r) {
      return wu(r, l);
    }
    ge !== null && wu(ge, l), be !== null && wu(be, l), xe !== null && wu(xe, l), Sn.forEach(t), zn.forEach(t);
    for (var e = 0; e < pe.length; e++) {
      var a = pe[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < pe.length && (e = pe[0], e.blockedOn === null); )
      pr(e), e.blockedOn === null && pe.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[Ll] || null;
        if (typeof u == "function")
          i || zr(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Ll] || null)
              c = i.formAction;
            else if (sf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), zr(e);
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
  function rf(l) {
    this._internalRoot = l;
  }
  Lu.prototype.render = rf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var e = t.current, a = ct();
    hr(e, a, l, t, null, null);
  }, Lu.prototype.unmount = rf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      hr(l.current, 2, null, l, null, null), Nu(), t[Ve] = null;
    }
  };
  function Lu(l) {
    this._internalRoot = l;
  }
  Lu.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Uf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < pe.length && t !== 0 && t < pe[e].priority; e++) ;
      pe.splice(e, 0, l), e === 0 && pr(l);
    }
  };
  var jr = h.version;
  if (jr !== "19.2.8")
    throw Error(
      s(
        527,
        jr,
        "19.2.8"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(s(188)) : (l = Object.keys(l).join(","), Error(s(268, l)));
    return l = N(t), l = l !== null ? K(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var m1 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ku.isDisabled && Ku.supportsFiber)
      try {
        Da = Ku.inject(
          m1
        ), Pl = Ku;
      } catch {
      }
  }
  return Nn.createRoot = function(l, t) {
    if (!B(l)) throw Error(s(299));
    var e = !1, a = "", n = D0, u = R0, i = U0;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = or(
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
    ), l[Ve] = t.current, Lc(l), new rf(t);
  }, Nn.hydrateRoot = function(l, t, e) {
    if (!B(l)) throw Error(s(299));
    var a = !1, n = "", u = D0, i = R0, c = U0, r = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), t = or(
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
    ), t.context = mr(null), e = t.current, a = ct(), a = li(a), n = ue(a), n.callback = null, ie(e, n, a), e = a, t.current.lanes = e, Ua(t, e), Dt(t), l[Ve] = t.current, Lc(l), new Lu(t);
  }, Nn.version = "19.2.8", Nn;
}
var Hr;
function E1() {
  if (Hr) return hf.exports;
  Hr = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (h) {
        console.error(h);
      }
  }
  return d(), hf.exports = z1(), hf.exports;
}
var j1 = E1();
function N1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    d: "M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z"
  }));
}
const T1 = /* @__PURE__ */ _.forwardRef(N1);
function _1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z",
    clipRule: "evenodd"
  }));
}
const A1 = /* @__PURE__ */ _.forwardRef(_1);
function M1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z",
    clipRule: "evenodd"
  }));
}
const O1 = /* @__PURE__ */ _.forwardRef(M1);
function D1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z",
    clipRule: "evenodd"
  }));
}
const R1 = /* @__PURE__ */ _.forwardRef(D1);
function U1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",
    clipRule: "evenodd"
  }));
}
const H1 = /* @__PURE__ */ _.forwardRef(U1);
function C1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z",
    clipRule: "evenodd"
  }));
}
const B1 = /* @__PURE__ */ _.forwardRef(C1);
function q1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const Y1 = /* @__PURE__ */ _.forwardRef(q1);
function Z1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const G1 = /* @__PURE__ */ _.forwardRef(Z1);
function X1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
const Q1 = /* @__PURE__ */ _.forwardRef(X1);
function w1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const xf = /* @__PURE__ */ _.forwardRef(w1);
function V1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    d: "M8 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M8 8.5c1.84 0 3.579-.37 4.914-1.037A6.33 6.33 0 0 0 14 6.78V8c0 1.657-2.686 3-6 3S2 9.657 2 8V6.78c.346.273.72.5 1.087.683C4.42 8.131 6.16 8.5 8 8.5Z"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M8 12.5c1.84 0 3.579-.37 4.914-1.037.366-.183.74-.41 1.086-.684V12c0 1.657-2.686 3-6 3s-6-1.343-6-3v-1.22c.346.273.72.5 1.087.683C4.42 12.131 6.16 12.5 8 12.5Z"
  }));
}
const pf = /* @__PURE__ */ _.forwardRef(V1);
function L1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937v-2.523a2.5 2.5 0 0 0-.732-1.768L8.354 5.232A2.5 2.5 0 0 0 6.586 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.586a1 1 0 0 0-.293-.707L7.293 6.293A1 1 0 0 0 6.586 6H3Z"
  }));
}
const K1 = /* @__PURE__ */ _.forwardRef(L1);
function J1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z",
    clipRule: "evenodd"
  }));
}
const $1 = /* @__PURE__ */ _.forwardRef(J1);
function W1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2.22 1.97a.75.75 0 0 0 0 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0ZM8.75 8.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z",
    clipRule: "evenodd"
  }));
}
const k1 = /* @__PURE__ */ _.forwardRef(W1);
function F1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    d: "M6 6v4h4V6H6Z"
  }), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3a2 2 0 0 0 2 2v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13a2 2 0 0 0 2-2h1.25a.75.75 0 0 0 0-1.5H13v-.75h1.25a.75.75 0 0 0 0-1.5H13V6.5h1.25a.75.75 0 0 0 0-1.5H13a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-.75V1.75a.75.75 0 0 0-1.5 0V3H6.5V1.75A.75.75 0 0 0 5.75 1ZM11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6Z",
    clipRule: "evenodd"
  }));
}
const I1 = /* @__PURE__ */ _.forwardRef(F1);
function P1({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M7.628 1.349a.75.75 0 0 1 .744 0l1.247.712a.75.75 0 1 1-.744 1.303L8 2.864l-.875.5a.75.75 0 0 1-.744-1.303l1.247-.712ZM4.65 3.914a.75.75 0 0 1-.279 1.023L4.262 5l.11.063a.75.75 0 0 1-.744 1.302l-.13-.073A.75.75 0 0 1 2 6.25V5a.75.75 0 0 1 .378-.651l1.25-.714a.75.75 0 0 1 1.023.279Zm6.698 0a.75.75 0 0 1 1.023-.28l1.25.715A.75.75 0 0 1 14 5v1.25a.75.75 0 0 1-1.499.042l-.129.073a.75.75 0 0 1-.744-1.302l.11-.063-.11-.063a.75.75 0 0 1-.28-1.023ZM6.102 6.915a.75.75 0 0 1 1.023-.279l.875.5.875-.5a.75.75 0 0 1 .744 1.303l-.869.496v.815a.75.75 0 0 1-1.5 0v-.815l-.869-.496a.75.75 0 0 1-.28-1.024ZM2.75 9a.75.75 0 0 1 .75.75v.815l.872.498a.75.75 0 0 1-.744 1.303l-1.25-.715A.75.75 0 0 1 2 11V9.75A.75.75 0 0 1 2.75 9Zm10.5 0a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.378.651l-1.25.715a.75.75 0 0 1-.744-1.303l.872-.498V9.75a.75.75 0 0 1 .75-.75Zm-4.501 3.708.126-.072a.75.75 0 0 1 .744 1.303l-1.247.712a.75.75 0 0 1-.744 0L6.38 13.94a.75.75 0 0 1 .744-1.303l.126.072a.75.75 0 0 1 1.498 0Z",
    clipRule: "evenodd"
  }));
}
const lh = /* @__PURE__ */ _.forwardRef(P1);
function th({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Gr = /* @__PURE__ */ _.forwardRef(th);
function eh({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
    clipRule: "evenodd"
  }));
}
const ah = /* @__PURE__ */ _.forwardRef(eh);
function nh({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z",
    clipRule: "evenodd"
  }));
}
const uh = /* @__PURE__ */ _.forwardRef(nh);
function ih({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z"
  }));
}
const ch = /* @__PURE__ */ _.forwardRef(ih);
function fh({
  title: d,
  titleId: h,
  ...x
}, s) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": h
  }, x), d ? /* @__PURE__ */ _.createElement("title", {
    id: h
  }, d) : null, /* @__PURE__ */ _.createElement("path", {
    d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
  }));
}
const Sf = /* @__PURE__ */ _.forwardRef(fh);
function Xr(d) {
  var h, x, s = "";
  if (typeof d == "string" || typeof d == "number") s += d;
  else if (typeof d == "object") if (Array.isArray(d)) {
    var B = d.length;
    for (h = 0; h < B; h++) d[h] && (x = Xr(d[h])) && (s && (s += " "), s += x);
  } else for (x in d) d[x] && (s && (s += " "), s += x);
  return s;
}
function Nt() {
  for (var d, h, x = 0, s = "", B = arguments.length; x < B; x++) (d = arguments[x]) && (h = Xr(d)) && (s && (s += " "), s += h);
  return s;
}
async function Cr(d, h) {
  const x = await fetch(d, {
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    signal: h
  });
  if (!x.ok) {
    const s = new Error(
      x.status === 404 ? "This trace could not be found." : "AI Observatory could not load this data."
    );
    throw s.status = x.status, s;
  }
  return x.json();
}
function sh(d) {
  const h = new URLSearchParams();
  return Object.entries(d).forEach(([x, s]) => {
    s !== "" && s !== null && s !== void 0 && h.set(x, s);
  }), h.toString();
}
function Br(d) {
  return d ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeStyle: "medium"
  }).format(new Date(d)) : "—";
}
function dh(d) {
  if (!d) return "—";
  const h = Math.round((new Date(d).getTime() - Date.now()) / 1e3), x = new Intl.RelativeTimeFormat(void 0, {
    numeric: "auto"
  }), s = [
    ["year", 31536e3],
    ["month", 2592e3],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60]
  ];
  for (const [B, Y] of s)
    if (Math.abs(h) >= Y)
      return x.format(Math.round(h / Y), B);
  return x.format(h, "second");
}
function An(d) {
  return d == null ? "—" : d < 1e3 ? `${d} ms` : d < 6e4 ? `${(d / 1e3).toFixed(d < 1e4 ? 2 : 1)} s` : `${(d / 6e4).toFixed(1)} min`;
}
function _n(d) {
  return d == null ? "—" : new Intl.NumberFormat(void 0, {
    notation: d >= 1e4 ? "compact" : "standard",
    maximumFractionDigits: 1
  }).format(d);
}
function zf(d, h) {
  return d == null || !h ? "—" : new Intl.NumberFormat(void 0, {
    style: "currency",
    currency: h,
    maximumFractionDigits: 6
  }).format(Number(d));
}
function Qr(d) {
  return d ? d.split("\\").at(-1) : "—";
}
function wr(d, h = 0) {
  return d.flatMap((x) => [
    { ...x, depth: h },
    ...wr(x.children ?? [], h + 1)
  ]);
}
function rh({ value: d }) {
  if (d === "[REDACTED]")
    return /* @__PURE__ */ f.jsx("div", { className: "inline-flex rounded bg-amber-100 px-1.5 py-0.5 font-mono text-base/6 text-amber-800 sm:text-sm/5", children: "[REDACTED]" });
  const h = typeof d == "string" ? "text-emerald-700" : typeof d == "number" ? "text-sky-700" : typeof d == "boolean" ? "text-violet-700" : "text-zinc-500", x = typeof d == "string" ? `"${d}"` : String(d);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `font-mono text-base/7 break-words sm:text-sm/6 ${h}`,
      children: x
    }
  );
}
function Vr({ label: d, value: h, depth: x = 0 }) {
  if (!(h !== null && typeof h == "object"))
    return /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-[minmax(5rem,auto)_1fr] gap-3 py-1", children: [
      d !== null ? /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: d }) : null,
      /* @__PURE__ */ f.jsx(rh, { value: h })
    ] });
  const B = Object.entries(h), Y = Array.isArray(h) ? "array" : "object";
  return /* @__PURE__ */ f.jsxs("details", { className: "group/json", open: x < 1, children: [
    /* @__PURE__ */ f.jsxs("summary", { className: "flex cursor-pointer list-none items-center gap-1 rounded py-1 observatory-focus", children: [
      /* @__PURE__ */ f.jsx(xf, { className: "size-4 h-lh shrink-0 fill-zinc-400 group-open/json:rotate-90" }),
      d !== null ? /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 font-medium text-zinc-700 sm:text-sm/6", children: d }) : null,
      /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 text-zinc-400 sm:text-sm/6", children: Y === "array" ? `[${B.length}]` : `{${B.length}}` })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "border-l border-zinc-950/10 pl-4", children: B.map(([X, k]) => /* @__PURE__ */ f.jsx(
      Vr,
      {
        label: X,
        value: k,
        depth: x + 1
      },
      X
    )) })
  ] });
}
function Ma({ className: d, value: h, label: x }) {
  const [s, B] = _.useState(!1), Y = h && typeof h == "object" && h._truncated === !0;
  _.useEffect(() => {
    if (!s) return;
    const k = window.setTimeout(() => B(!1), 1500);
    return () => window.clearTimeout(k);
  }, [s]);
  async function X() {
    await navigator.clipboard.writeText(JSON.stringify(h, null, 2)), B(!0);
  }
  return /* @__PURE__ */ f.jsxs(
    "section",
    {
      className: Nt("border-t border-zinc-950/10 pt-5", d),
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ f.jsx("h3", { className: "text-base font-medium text-zinc-950", children: x }),
          /* @__PURE__ */ f.jsxs(
            "button",
            {
              type: "button",
              onClick: X,
              className: "relative inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
              children: [
                /* @__PURE__ */ f.jsx(
                  "span",
                  {
                    className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                    "aria-hidden": "true"
                  }
                ),
                s ? /* @__PURE__ */ f.jsx(Y1, { className: "size-4 h-lh shrink-0 fill-emerald-600" }) : /* @__PURE__ */ f.jsx(K1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                s ? "Copied" : "Copy"
              ]
            }
          )
        ] }),
        Y ? /* @__PURE__ */ f.jsxs("div", { className: "mt-3 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-base/7 text-amber-800 sm:text-sm/6", children: [
          /* @__PURE__ */ f.jsx(Gr, { className: "size-4 h-lh shrink-0 fill-amber-600" }),
          "This payload was truncated before storage. The original was",
          " ",
          Number(h._original_bytes).toLocaleString(),
          " bytes."
        ] }) : null,
        /* @__PURE__ */ f.jsx("div", { className: "mt-3 max-h-96 overflow-auto rounded-lg bg-zinc-50 p-4 ring-1 ring-zinc-950/5 ring-inset", children: /* @__PURE__ */ f.jsx(Vr, { label: null, value: h }) })
      ]
    }
  );
}
const qr = {
  successful: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  failed: "bg-red-50 text-red-700 ring-red-600/20",
  cancelled: "bg-zinc-100 text-zinc-600 ring-zinc-500/20",
  running: "bg-amber-50 text-amber-800 ring-amber-600/20"
}, Yr = {
  successful: "bg-emerald-500",
  failed: "bg-red-500",
  cancelled: "bg-zinc-400",
  running: "bg-amber-500"
};
function Ef({ className: d, status: h }) {
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: Nt(
        "inline-flex items-center gap-1.5 rounded-full py-1 pr-2 pl-1 text-base/6 font-medium ring-1 ring-inset sm:text-sm/5",
        qr[h] ?? qr.cancelled,
        d
      ),
      children: [
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: `size-1.5 shrink-0 rounded-full ${Yr[h] ?? Yr.cancelled}`
          }
        ),
        h ?? "unknown"
      ]
    }
  );
}
const oh = {
  agent: uh,
  model: I1,
  tool: ch,
  mcp: lh,
  internal: B1
};
function Tn({ label: d, value: h }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @sm:border-t-0 @sm:pt-0", children: [
    /* @__PURE__ */ f.jsx("dt", { className: "truncate text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: d }),
    /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: h })
  ] });
}
function mh({ span: d, onSelect: h }) {
  const x = oh[d.type] ?? pf, s = d.status === "failed";
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      type: "button",
      onClick: () => h(d),
      style: { "--span-offset": `${d.depth * 1.25}rem` },
      className: "group relative grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 border-b border-zinc-950/5 py-4 pr-4 pl-[calc(--spacing(4)+var(--span-offset))] text-left observatory-focus hover:bg-zinc-50",
      children: [
        /* @__PURE__ */ f.jsx(
          "span",
          {
            className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ f.jsx(
          x,
          {
            className: `size-4 h-lh shrink-0 ${s ? "fill-red-500" : "fill-zinc-400"}`
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-1", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ f.jsx("div", { className: "truncate text-base/6 font-medium text-zinc-950 sm:text-sm/5", children: d.name }),
            /* @__PURE__ */ f.jsx("div", { className: "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm/5 text-zinc-500", children: d.type })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 flex-wrap gap-2 text-base/7 text-zinc-500 sm:text-sm/6", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "tabular-nums", children: [
              "#",
              d.sequence
            ] }),
            d.provider ? /* @__PURE__ */ f.jsx("div", { children: d.provider }) : null,
            d.model ? /* @__PURE__ */ f.jsx("div", { className: "truncate font-mono", children: d.model }) : null,
            /* @__PURE__ */ f.jsx("div", { className: "tabular-nums", children: An(d.duration_ms) })
          ] }),
          d.error?.message ? /* @__PURE__ */ f.jsx("div", { className: "truncate text-base/7 text-red-600 sm:text-sm/6", children: d.error.message }) : null
        ] }),
        /* @__PURE__ */ f.jsx(xf, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-500" })
      ]
    }
  );
}
function hh({ span: d, onClose: h }) {
  return _.useEffect(() => {
    function x(s) {
      s.key === "Escape" && h();
    }
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [h]), d ? /* @__PURE__ */ f.jsxs(
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
            onClick: h,
            className: "absolute inset-0 bg-zinc-950/20"
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: "absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-white shadow-2xl ring-1 ring-zinc-950/10", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex items-start justify-between gap-5 border-b border-zinc-950/10 p-5 sm:p-6", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-2", children: [
              /* @__PURE__ */ f.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ f.jsx(Ef, { status: d.status }),
                /* @__PURE__ */ f.jsx("div", { className: "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm/5 text-zinc-500", children: d.type })
              ] }),
              /* @__PURE__ */ f.jsx(
                "h2",
                {
                  id: "span-title",
                  className: "text-xl font-semibold text-balance text-zinc-950",
                  children: d.name
                }
              ),
              /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6", children: d.span_id })
            ] }),
            /* @__PURE__ */ f.jsxs(
              "button",
              {
                type: "button",
                onClick: h,
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
                  /* @__PURE__ */ f.jsx(Sf, { className: "size-4 shrink-0 fill-zinc-500" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "grow overflow-y-auto p-5 sm:p-6", children: [
            /* @__PURE__ */ f.jsxs("dl", { className: "grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3", children: [
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Duration" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: An(d.duration_ms) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Tokens" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: _n(d.total_tokens) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Parent span" }),
                /* @__PURE__ */ f.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: d.parent_span_id ?? "Root" })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Provider" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: d.provider ?? "—" })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Model" }),
                /* @__PURE__ */ f.jsx("dd", { className: "truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: d.model ?? "—" })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Estimated cost" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: zf(d.estimated_cost, d.currency) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("dt", { className: "text-sm/5 font-medium text-zinc-900", children: "Time to first token" }),
                /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: An(
                  d.metadata?.time_to_first_token_ms
                ) })
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "grid gap-5 pt-6", children: [
              d.error?.message ? /* @__PURE__ */ f.jsx("section", { className: "rounded-lg bg-red-50 p-4", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ f.jsx(Gr, { className: "size-4 h-lh shrink-0 fill-red-500" }),
                /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-1", children: [
                  /* @__PURE__ */ f.jsx("h3", { className: "text-base font-medium text-red-900", children: d.error.type ?? "Span failed" }),
                  /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-pretty break-words text-red-700 sm:text-sm/6", children: d.error.message })
                ] })
              ] }) }) : null,
              d.request !== null ? /* @__PURE__ */ f.jsx(Ma, { label: "Request", value: d.request }) : null,
              d.response !== null ? /* @__PURE__ */ f.jsx(
                Ma,
                {
                  label: "Response",
                  value: d.response
                }
              ) : null,
              d.metadata !== null ? /* @__PURE__ */ f.jsx(
                Ma,
                {
                  label: "Metadata",
                  value: d.metadata
                }
              ) : null
            ] })
          ] })
        ] })
      ]
    }
  ) : null;
}
function vh({ className: d, loading: h, onBack: x, trace: s }) {
  const [B, Y] = _.useState(null), X = _.useMemo(() => wr(s?.spans ?? []), [s]);
  return _.useEffect(() => Y(null), [s?.trace_id]), h || !s ? /* @__PURE__ */ f.jsxs(
    "main",
    {
      className: Nt(
        "isolate mx-auto grid max-w-screen-2xl gap-6 px-4 py-7 sm:px-6 lg:px-8 lg:py-10",
        d
      ),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "h-8 w-56 animate-pulse rounded bg-zinc-100" }),
        /* @__PURE__ */ f.jsx("div", { className: "h-32 animate-pulse rounded bg-zinc-100" }),
        /* @__PURE__ */ f.jsx("div", { className: "h-96 animate-pulse rounded bg-zinc-100" })
      ]
    }
  ) : /* @__PURE__ */ f.jsxs("main", { className: Nt("isolate min-w-0", d), children: [
    /* @__PURE__ */ f.jsxs("div", { className: "mx-auto grid max-w-screen-2xl gap-7 px-4 py-7 sm:px-6 lg:px-8 lg:py-10", children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: x,
          className: "relative inline-flex w-fit items-center gap-1.5 rounded-md py-1 pr-2 pl-1 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ f.jsx(A1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
            "All traces"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs("header", { className: "grid gap-4", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ f.jsx(Ef, { status: s.status }),
          s.feature ? /* @__PURE__ */ f.jsx("div", { className: "rounded-full bg-zinc-100 px-2 py-1 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/5 ring-inset", children: s.feature }) : null
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ f.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-balance text-zinc-950", children: s.name }),
          /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-0 flex-wrap gap-x-4 gap-y-1 text-base/7 text-zinc-500 sm:text-sm/6", children: [
            /* @__PURE__ */ f.jsx("div", { children: Qr(s.agent_class) }),
            /* @__PURE__ */ f.jsxs("div", { className: "font-mono", children: [
              s.provider ?? "—",
              " / ",
              s.model ?? "—"
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "font-mono break-all", children: s.trace_id })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "@container", children: /* @__PURE__ */ f.jsxs("dl", { className: "grid gap-4 @sm:grid-cols-2 @sm:gap-6 @3xl:grid-cols-5", children: [
        /* @__PURE__ */ f.jsx(
          Tn,
          {
            label: "Duration",
            value: An(s.duration_ms)
          }
        ),
        /* @__PURE__ */ f.jsx(
          Tn,
          {
            label: "Total tokens",
            value: _n(s.total_tokens)
          }
        ),
        /* @__PURE__ */ f.jsx(
          Tn,
          {
            label: "Estimated cost",
            value: zf(
              s.estimated_cost,
              s.currency
            )
          }
        ),
        /* @__PURE__ */ f.jsx(
          Tn,
          {
            label: "Started",
            value: Br(s.started_at)
          }
        ),
        /* @__PURE__ */ f.jsx(
          Tn,
          {
            label: "User / tenant",
            value: `${s.user?.id ?? "—"} / ${s.tenant?.id ?? "—"}`
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
                  s.span_count,
                  " spans"
                ] })
              ] }),
              /* @__PURE__ */ f.jsx("div", { className: "border-x border-zinc-950/10", children: X.map((k) => /* @__PURE__ */ f.jsx(
                mh,
                {
                  span: k,
                  onSelect: Y
                },
                k.span_id
              )) })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "aside",
          {
            className: "min-w-0 lg:border-l lg:border-zinc-950/10 lg:pl-7",
            "aria-label": "Trace context",
            children: [
              /* @__PURE__ */ f.jsx("h2", { className: "text-base font-medium text-zinc-950", children: "Trace context" }),
              /* @__PURE__ */ f.jsxs("dl", { className: "grid gap-4 pt-4", children: [
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Environment" }),
                  /* @__PURE__ */ f.jsx("dd", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: s.environment ?? "—" })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Agent class" }),
                  /* @__PURE__ */ f.jsx("dd", { className: "font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6", children: s.agent_class ?? "—" })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("dt", { className: "text-base/7 font-medium text-zinc-900 sm:text-sm/6", children: "Input / output" }),
                  /* @__PURE__ */ f.jsxs("dd", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: [
                    _n(s.input_tokens),
                    " /",
                    " ",
                    _n(s.output_tokens)
                  ] })
                ] })
              ] }),
              s.tags ? /* @__PURE__ */ f.jsx("div", { className: "pt-5", children: /* @__PURE__ */ f.jsx(Ma, { label: "Tags", value: s.tags }) }) : null,
              s.metadata ? /* @__PURE__ */ f.jsx("div", { className: "pt-5", children: /* @__PURE__ */ f.jsx(
                Ma,
                {
                  label: "Metadata",
                  value: s.metadata
                }
              ) }) : null,
              s.events?.length > 0 ? /* @__PURE__ */ f.jsxs("section", { className: "border-t border-zinc-950/10 pt-5", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
                  /* @__PURE__ */ f.jsx("h2", { className: "text-base font-medium text-zinc-950", children: "Lifecycle events" }),
                  /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "Provider, retry, streaming, and failover events recorded during this trace." })
                ] }),
                /* @__PURE__ */ f.jsx("div", { className: "grid gap-3 pt-4", children: s.events.map((k) => /* @__PURE__ */ f.jsxs(
                  "details",
                  {
                    className: "rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-950/5",
                    children: [
                      /* @__PURE__ */ f.jsx("summary", { className: "cursor-pointer list-none", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/6 font-medium text-zinc-900 sm:text-sm/5", children: k.event_type }),
                        /* @__PURE__ */ f.jsx("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: Br(
                          k.occurred_at
                        ) })
                      ] }) }),
                      k.payload ? /* @__PURE__ */ f.jsx(
                        Ma,
                        {
                          className: "mt-3",
                          label: "Event payload",
                          value: k.payload
                        }
                      ) : null
                    ]
                  },
                  k.id
                )) })
              ] }) : null
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(
      hh,
      {
        span: B,
        onClose: () => Y(null)
      }
    )
  ] });
}
function Aa({
  className: d,
  icon: h,
  label: x,
  name: s,
  type: B = "text",
  ...Y
}) {
  const X = /* @__PURE__ */ f.jsx(
    "input",
    {
      id: s,
      type: B,
      name: s,
      className: Nt(
        "w-full observatory-control py-2.5 pr-3 text-base/6 text-zinc-900 placeholder:text-zinc-400 max-sm:text-base/6 sm:py-1.5 sm:text-sm/5",
        h ? "pl-9" : "pl-3"
      ),
      ...Y
    }
  );
  return /* @__PURE__ */ f.jsxs("label", { htmlFor: s, className: Nt("grid gap-1.5", d), children: [
    /* @__PURE__ */ f.jsx("div", { className: "text-base/6 font-medium text-zinc-700 sm:text-sm/5", children: x }),
    h ? /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ f.jsx(h, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 fill-zinc-400" }),
      X
    ] }) : X
  ] });
}
function ze({ className: d, label: h, name: x, onChange: s, options: B, value: Y }) {
  return /* @__PURE__ */ f.jsxs("label", { htmlFor: x, className: Nt("grid gap-1.5", d), children: [
    /* @__PURE__ */ f.jsx("div", { className: "text-base/6 font-medium text-zinc-700 sm:text-sm/5", children: h }),
    /* @__PURE__ */ f.jsxs("div", { className: "inline-grid grid-cols-[1fr_--spacing(8)]", children: [
      /* @__PURE__ */ f.jsxs(
        "select",
        {
          id: x,
          name: x,
          value: Y,
          onChange: s,
          className: "col-span-full row-start-1 appearance-none observatory-control py-2.5 pr-8 pl-3 text-base/6 text-zinc-900 sm:py-1.5 sm:text-sm/5",
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "", children: "All" }),
            B.map((X) => /* @__PURE__ */ f.jsx(
              "option",
              {
                value: typeof X == "string" ? X : X.value,
                children: typeof X == "string" ? X : X.label
              },
              typeof X == "string" ? X : X.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ f.jsx(G1, { className: "pointer-events-none col-start-2 row-start-1 size-4 place-self-center fill-zinc-400" })
    ] })
  ] });
}
function yh({ className: d, filters: h, options: x, onChange: s, onReset: B }) {
  const [Y, X] = _.useState(!1), k = Object.entries(h).filter(
    ([N, K]) => !["page", "per_page", "search"].includes(N) && K !== ""
  ).length;
  function O(N) {
    s(N.target.name, N.target.value);
  }
  return /* @__PURE__ */ f.jsxs("div", { className: Nt("border-y border-zinc-950/10 py-4", d), children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-end", children: [
      /* @__PURE__ */ f.jsx(
        Aa,
        {
          className: "min-w-0 grow",
          icon: ah,
          type: "search",
          name: "search",
          label: "Search traces",
          value: h.search,
          onChange: O,
          placeholder: "Trace ID, prompt, response, tool, or error"
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            onClick: () => X((N) => !N),
            className: "relative inline-flex grow items-center justify-center gap-2 observatory-control px-3 py-2 text-sm/5 font-medium text-zinc-700 hover:bg-zinc-50 lg:hidden",
            "aria-expanded": Y,
            children: [
              /* @__PURE__ */ f.jsx(
                "span",
                {
                  className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ f.jsx(T1, { className: "size-4 h-lh shrink-0 fill-zinc-500" }),
              "Filters",
              k > 0 ? /* @__PURE__ */ f.jsx("div", { className: "rounded-full bg-amber-100 px-1.5 text-amber-800", children: k }) : null
            ]
          }
        ),
        k > 0 ? /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            onClick: B,
            className: "relative inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100",
            children: [
              /* @__PURE__ */ f.jsx(
                "span",
                {
                  className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ f.jsx(Sf, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
              "Clear"
            ]
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        className: `${Y ? "grid" : "max-lg:hidden"} mt-4 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid lg:grid-cols-5`,
        children: [
          /* @__PURE__ */ f.jsx(
            ze,
            {
              name: "status",
              label: "Status",
              value: h.status,
              options: x.statuses ?? [],
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            ze,
            {
              name: "provider",
              label: "Provider",
              value: h.provider,
              options: x.providers ?? [],
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            ze,
            {
              name: "model",
              label: "Model",
              value: h.model,
              options: x.models ?? [],
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            ze,
            {
              name: "agent_class",
              label: "Agent",
              value: h.agent_class,
              options: x.agents ?? [],
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            ze,
            {
              name: "span_type",
              label: "Span type",
              value: h.span_type,
              options: x.span_types ?? [],
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            ze,
            {
              name: "feature",
              label: "Feature",
              value: h.feature,
              options: x.features ?? [],
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            ze,
            {
              name: "has_error",
              label: "Errors",
              value: h.has_error,
              options: [
                { value: "1", label: "Has errors" },
                { value: "0", label: "No errors" }
              ],
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            ze,
            {
              name: "has_tool_calls",
              label: "Tool calls",
              value: h.has_tool_calls,
              options: [
                { value: "1", label: "Has tool calls" },
                { value: "0", label: "No tool calls" }
              ],
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            Aa,
            {
              type: "number",
              min: "0",
              name: "min_duration",
              label: "Minimum duration",
              value: h.min_duration,
              onChange: O,
              placeholder: "Milliseconds"
            }
          ),
          /* @__PURE__ */ f.jsx(
            Aa,
            {
              type: "date",
              name: "started_after",
              label: "Started after",
              value: h.started_after,
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            Aa,
            {
              type: "date",
              name: "started_before",
              label: "Started before",
              value: h.started_before,
              onChange: O
            }
          ),
          /* @__PURE__ */ f.jsx(
            Aa,
            {
              name: "user",
              label: "User ID",
              value: h.user,
              onChange: O,
              placeholder: "Any user"
            }
          ),
          /* @__PURE__ */ f.jsx(
            Aa,
            {
              name: "tenant",
              label: "Tenant ID",
              value: h.tenant,
              onChange: O,
              placeholder: "Any tenant"
            }
          )
        ]
      }
    )
  ] });
}
function gh(d, h) {
  const x = Math.max(1, Math.min(d - 2, h - 4)), s = Math.min(h, x + 4);
  return Array.from(
    { length: Math.max(0, s - x + 1) },
    (B, Y) => x + Y
  );
}
function bh({ className: d, meta: h, onPage: x }) {
  return !h || h.last_page <= 1 ? null : /* @__PURE__ */ f.jsxs(
    "nav",
    {
      className: Nt(
        "flex items-center justify-between border-t border-zinc-950/10 py-4",
        d
      ),
      "aria-label": "Pagination",
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "text-base/7 text-zinc-500 sm:text-sm/6", children: [
          "Page",
          " ",
          /* @__PURE__ */ f.jsx("strong", { className: "font-medium text-zinc-900", children: h.current_page }),
          " ",
          "of",
          " ",
          /* @__PURE__ */ f.jsx("strong", { className: "font-medium text-zinc-900", children: h.last_page })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ f.jsxs(
            "button",
            {
              type: "button",
              onClick: () => x(h.current_page - 1),
              disabled: h.current_page === 1,
              className: "relative inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40",
              children: [
                /* @__PURE__ */ f.jsx(
                  "span",
                  {
                    className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ f.jsx(Q1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
                "Previous"
              ]
            }
          ),
          /* @__PURE__ */ f.jsx("div", { className: "flex max-sm:hidden", children: gh(h.current_page, h.last_page).map((s) => /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              onClick: () => x(s),
              "aria-current": s === h.current_page ? "page" : void 0,
              className: `size-8 rounded-md text-sm/5 font-medium observatory-focus ${s === h.current_page ? "bg-zinc-950 text-white" : "text-zinc-600 hover:bg-zinc-100"}`,
              children: s
            },
            s
          )) }),
          /* @__PURE__ */ f.jsxs(
            "button",
            {
              type: "button",
              onClick: () => x(h.current_page + 1),
              disabled: h.current_page === h.last_page,
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
                /* @__PURE__ */ f.jsx(xf, { className: "size-4 h-lh shrink-0 fill-zinc-400" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function xh({ filtered: d }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "flex min-h-80 flex-col items-center justify-center gap-3 border-b border-zinc-950/10 py-16 text-center", children: [
    /* @__PURE__ */ f.jsx(pf, { className: "size-4 shrink-0 fill-zinc-400" }),
    /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
      /* @__PURE__ */ f.jsx("h2", { className: "text-base font-medium text-zinc-950", children: d ? "No matching traces" : "No traces recorded" }),
      /* @__PURE__ */ f.jsx("p", { className: "max-w-[52ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: d ? "Adjust the filters or search for a different operation." : "Run an AI agent and its trace will appear here automatically." })
    ] })
  ] });
}
function ph() {
  return Array.from({ length: 6 }, (d, h) => /* @__PURE__ */ f.jsx("tr", { className: "border-b border-zinc-950/5", children: /* @__PURE__ */ f.jsx("td", { colSpan: "8", className: "py-5", children: /* @__PURE__ */ f.jsx("div", { className: "h-5 animate-pulse rounded bg-zinc-100" }) }) }, h));
}
function Sh({
  className: d,
  filters: h,
  loading: x,
  meta: s,
  onFilter: B,
  onNavigate: Y,
  onPage: X,
  onRefresh: k,
  onReset: O,
  traces: N
}) {
  const K = Object.entries(h).some(
    ([D, nl]) => !["page", "per_page"].includes(D) && nl !== ""
  );
  return /* @__PURE__ */ f.jsx("main", { className: Nt("isolate min-w-0", d), children: /* @__PURE__ */ f.jsxs("div", { className: "mx-auto grid max-w-screen-2xl gap-7 px-4 py-7 sm:px-6 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
        /* @__PURE__ */ f.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-balance text-zinc-950", children: "Traces" }),
        /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-pretty text-zinc-500 sm:text-sm/6", children: "Inspect every agent, model request, tool call, and failure." })
      ] }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: k,
          className: "relative inline-flex w-fit items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50",
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ f.jsx(
              O1,
              {
                className: `size-4 h-lh shrink-0 fill-zinc-400 ${x ? "animate-spin" : ""}`
              }
            ),
            "Refresh"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(
      yh,
      {
        filters: h,
        options: s?.filter_options ?? {},
        onChange: B,
        onReset: O
      }
    ),
    /* @__PURE__ */ f.jsxs("section", { "aria-labelledby": "trace-results", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-4 pb-4", children: [
        /* @__PURE__ */ f.jsx(
          "h2",
          {
            id: "trace-results",
            className: "text-base font-medium text-zinc-950",
            children: "Recorded operations"
          }
        ),
        /* @__PURE__ */ f.jsx("div", { className: "text-base/7 text-zinc-500 tabular-nums sm:text-sm/6", children: s ? `${s.total.toLocaleString()} total` : "Loading" })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "-mx-4 -my-2 overflow-x-auto whitespace-nowrap sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ f.jsx("div", { className: "inline-block min-w-full px-4 py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ f.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { className: "border-b border-zinc-950/10", children: [
          /* @__PURE__ */ f.jsx("th", { className: "py-3 pr-4 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Operation" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-3 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Provider and model" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Tools" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Tokens" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Estimated cost" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Duration" }),
          /* @__PURE__ */ f.jsx("th", { className: "px-4 py-3 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Feature" }),
          /* @__PURE__ */ f.jsx("th", { className: "py-3 pl-4 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500", children: "Time" })
        ] }) }),
        /* @__PURE__ */ f.jsxs("tbody", { children: [
          x && N.length === 0 ? /* @__PURE__ */ f.jsx(ph, {}) : null,
          !x && N.map((D) => /* @__PURE__ */ f.jsxs(
            "tr",
            {
              className: "border-b border-zinc-950/5",
              children: [
                /* @__PURE__ */ f.jsx("td", { className: "py-4 pr-4 align-top", children: /* @__PURE__ */ f.jsxs("div", { className: "flex min-w-72 items-start gap-3", children: [
                  /* @__PURE__ */ f.jsx(
                    Ef,
                    {
                      status: D.status
                    }
                  ),
                  /* @__PURE__ */ f.jsxs("div", { className: "grid min-w-0 gap-1", children: [
                    /* @__PURE__ */ f.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => Y(
                          D.trace_id
                        ),
                        className: "group relative min-w-0 rounded text-left observatory-focus",
                        children: [
                          /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-1.5 text-base/6 font-medium text-zinc-950 sm:text-sm/5", children: [
                            /* @__PURE__ */ f.jsx("div", { className: "truncate", children: D.name }),
                            /* @__PURE__ */ f.jsx(R1, { className: "size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-500" })
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
                    /* @__PURE__ */ f.jsx("div", { className: "truncate text-base/7 text-zinc-500 sm:text-sm/6", children: Qr(
                      D.agent_class
                    ) })
                  ] })
                ] }) }),
                /* @__PURE__ */ f.jsx("td", { className: "px-4 py-4 align-top", children: /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
                  /* @__PURE__ */ f.jsx("div", { className: "text-base/6 text-zinc-900 sm:text-sm/5", children: D.provider ?? "—" }),
                  /* @__PURE__ */ f.jsx("div", { className: "font-mono text-base/7 text-zinc-500 sm:text-sm/6", children: D.model ?? "—" })
                ] }) }),
                /* @__PURE__ */ f.jsx("td", { className: "px-4 py-4 text-right align-top text-base/6 text-zinc-700 tabular-nums sm:text-sm/5", children: D.tool_count }),
                /* @__PURE__ */ f.jsx("td", { className: "px-4 py-4 text-right align-top text-base/6 text-zinc-700 tabular-nums sm:text-sm/5", children: _n(
                  D.total_tokens
                ) }),
                /* @__PURE__ */ f.jsx("td", { className: "px-4 py-4 text-right align-top text-base/6 text-zinc-700 tabular-nums sm:text-sm/5", children: zf(
                  D.estimated_cost,
                  D.currency
                ) }),
                /* @__PURE__ */ f.jsx("td", { className: "px-4 py-4 text-right align-top text-base/6 text-zinc-700 tabular-nums sm:text-sm/5", children: An(
                  D.duration_ms
                ) }),
                /* @__PURE__ */ f.jsx("td", { className: "px-4 py-4 align-top text-base/6 text-zinc-700 sm:text-sm/5", children: D.feature ?? "—" }),
                /* @__PURE__ */ f.jsx("td", { className: "py-4 pl-4 text-right align-top", children: /* @__PURE__ */ f.jsx(
                  "div",
                  {
                    title: D.started_at,
                    className: "text-base/6 text-zinc-700 sm:text-sm/5",
                    children: dh(
                      D.started_at
                    )
                  }
                ) })
              ]
            },
            D.trace_id
          ))
        ] })
      ] }) }) }),
      !x && N.length === 0 ? /* @__PURE__ */ f.jsx(xh, { filtered: K }) : null,
      /* @__PURE__ */ f.jsx(bh, { meta: s, onPage: X })
    ] }),
    /* @__PURE__ */ f.jsxs("footer", { className: "flex flex-wrap items-center gap-4 border-t border-zinc-950/10 pt-5 text-base/7 text-zinc-500 sm:text-sm/6", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ f.jsx(k1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
        "Local observability"
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ f.jsx($1, { className: "size-4 h-lh shrink-0 fill-zinc-400" }),
        "Refresh to load recent traces"
      ] })
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
function zh({ basePath: d, onNavigate: h }) {
  const [x, s] = _.useState(!1);
  function B(Y) {
    Y.preventDefault(), s(!1), h(null);
  }
  return /* @__PURE__ */ f.jsxs("header", { className: "border-b border-zinc-950/10 bg-white", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ f.jsxs(
        "a",
        {
          href: "/",
          "aria-label": "Homepage",
          className: "flex min-w-0 items-center gap-2 rounded observatory-focus",
          children: [
            /* @__PURE__ */ f.jsx(pf, { className: "size-4 shrink-0 fill-amber-500" }),
            /* @__PURE__ */ f.jsx("div", { className: "truncate text-base font-semibold text-zinc-950", children: "AI Observatory" })
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
              href: `${d}/traces`,
              onClick: B,
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
          onClick: () => s((Y) => !Y),
          className: "relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100 lg:hidden",
          "aria-label": "Toggle navigation",
          "aria-expanded": x,
          children: [
            /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden",
                "aria-hidden": "true"
              }
            ),
            x ? /* @__PURE__ */ f.jsx(Sf, { className: "size-4 shrink-0 fill-zinc-500" }) : /* @__PURE__ */ f.jsx(H1, { className: "size-4 shrink-0 fill-zinc-500" })
          ]
        }
      )
    ] }),
    x ? /* @__PURE__ */ f.jsx(
      "nav",
      {
        className: "border-t border-zinc-950/10 px-4 py-3 lg:hidden",
        "aria-label": "Mobile navigation",
        children: /* @__PURE__ */ f.jsx(
          "a",
          {
            href: `${d}/traces`,
            onClick: B,
            "aria-current": "page",
            className: "rounded-md bg-zinc-100 px-3 py-2 observatory-focus",
            children: /* @__PURE__ */ f.jsx("div", { className: "text-sm/5 font-medium text-zinc-950", children: "Traces" })
          }
        )
      }
    ) : null
  ] });
}
function Eh({ message: d, onRetry: h }) {
  return /* @__PURE__ */ f.jsx("div", { className: "mx-auto max-w-screen-2xl px-4 pt-6 sm:px-6 lg:px-8", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col justify-between gap-3 rounded-lg bg-red-50 p-4 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ f.jsx("p", { className: "text-base/7 text-pretty text-red-700 sm:text-sm/6", children: d }),
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        onClick: h,
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
function jh({ className: d }) {
  const h = window.AiObservatory, [x, s] = _.useState(h.initialTraceId), [B, Y] = _.useState(Zr), [X, k] = _.useState([]), [O, N] = _.useState(null), [K, D] = _.useState(null), [nl, Yl] = _.useState(!0), [Ml, Ol] = _.useState(null), [xt, Zl] = _.useState(0), pt = _.useMemo(() => sh(B), [B]), El = _.useCallback(
    (P, G = !1) => {
      const fl = P ? `${h.basePath}/traces/${P}` : `${h.basePath}/traces`;
      window.history[G ? "replaceState" : "pushState"](
        { traceId: P },
        "",
        fl
      ), s(P), window.scrollTo({ top: 0 });
    },
    [h.basePath]
  );
  _.useEffect(() => {
    function P() {
      const G = `${h.basePath}/traces/`, fl = window.location.pathname.startsWith(G) ? window.location.pathname.slice(G.length).split("/")[0] : null;
      s(fl || null);
    }
    return window.addEventListener("popstate", P), () => window.removeEventListener("popstate", P);
  }, [h.basePath]), _.useEffect(() => {
    const P = new AbortController(), G = window.setTimeout(
      async () => {
        Yl(!0), Ol(null);
        try {
          if (x) {
            const fl = await Cr(
              `${h.apiBase}/${x}`,
              P.signal
            );
            D(fl.data);
          } else {
            const fl = await Cr(
              `${h.apiBase}?${pt}`,
              P.signal
            );
            k(fl.data), N(fl.meta);
          }
        } catch (fl) {
          fl.name !== "AbortError" && Ol(fl.message);
        } finally {
          P.signal.aborted || Yl(!1);
        }
      },
      x ? 0 : 250
    );
    return () => {
      window.clearTimeout(G), P.abort();
    };
  }, [h.apiBase, pt, xt, x]);
  function wl(P, G) {
    Y((fl) => ({ ...fl, [P]: G, page: 1 }));
  }
  const ft = Ml && !nl && (x ? !K : X.length === 0);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: Nt(
        "isolate min-h-dvh bg-white font-sans text-zinc-950",
        d
      ),
      children: [
        /* @__PURE__ */ f.jsx(zh, { basePath: h.basePath, onNavigate: El }),
        Ml ? /* @__PURE__ */ f.jsx(
          Eh,
          {
            message: Ml,
            onRetry: () => Zl((P) => P + 1)
          }
        ) : null,
        !ft && (x ? /* @__PURE__ */ f.jsx(
          vh,
          {
            loading: nl,
            trace: K,
            onBack: () => El(null)
          }
        ) : /* @__PURE__ */ f.jsx(
          Sh,
          {
            filters: B,
            loading: nl,
            meta: O,
            traces: X,
            onFilter: wl,
            onNavigate: El,
            onPage: (P) => Y((G) => ({ ...G, page: P })),
            onRefresh: () => Zl((P) => P + 1),
            onReset: () => Y(Zr)
          }
        ))
      ]
    }
  );
}
j1.createRoot(document.getElementById("ai-observatory")).render(
  /* @__PURE__ */ f.jsx(_.StrictMode, { children: /* @__PURE__ */ f.jsx(jh, {}) })
);
