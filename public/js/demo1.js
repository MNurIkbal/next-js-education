!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(self, function () {
  return (function () {
    "use strict";
    var e = {
        r: function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      t = {};
    function n(e) {
      return (
        (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        n(e)
      );
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, o(r.key), r);
      }
    }
    function o(e) {
      var t = (function (e, t) {
        if ("object" != n(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, t || "default");
          if ("object" != n(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == n(t) ? t : t + "";
    }
    e.r(t);
    var i = (function () {
      return (
        (e = function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }),
        (n = [
          {
            key: "_isSidebarCollapse",
            value: function () {
              return document.body.classList.contains("sidebar-collapse");
            },
          },
          {
            key: "_handleMegaMenu",
            value: function () {
              var e = document.querySelector("#mega_menu");
              if (e) {
                var t = KTMenu.getInstance(e);
                t.disable(),
                  setTimeout(function () {
                    t.enable();
                  }, 500);
              }
            },
          },
          {
            key: "_handleSidebar",
            value: function () {
              var e = this,
                t = KTToggle.getInstance(this.sidebarToggleEl);
              null == t ||
                t.on("toggle", function () {
                  e.sidebarEl.classList.add("animating"),
                    e._handleMegaMenu(),
                    KTDom.transitionEnd(e.sidebarEl, function () {
                      e.sidebarEl.classList.remove("animating");
                    });
                });
            },
          },
          {
            key: "_handleSidebarMenu",
            value: function () {
              var e = document.querySelector("#sidebar_menu"),
                t = document.querySelector("#sidebar_scrollable"),
                n = e.querySelector(".menu-item.active");
              n &&
                !KTDom.isVisibleInParent(n, t) &&
                t.scroll({
                  top: KTDom.getRelativeTopPosition(n, t) - 100,
                  behavior: "instant",
                });
            },
          },
          {
            key: "init",
            value: function () {
              (this.sidebarEl = document.querySelector("#sidebar")),
                (this.sidebarWrapperEl =
                  document.querySelector("#sidebar_wrapper")),
                (this.headerEl = document.querySelector("#header")),
                (this.sidebarToggleEl =
                  document.querySelector("#sidebar_toggle")),
                this.sidebarEl &&
                  this.sidebarToggleEl &&
                  (this._handleSidebar(), this._handleSidebarMenu());
            },
          },
          {
            key: "isSidebarCollapse",
            value: function () {
              return this._isSidebarCollapse();
            },
          },
        ]),
        (t = null) && r(e.prototype, t),
        n && r(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
      var e, t, n;
    })();
    return (
      KTDom.ready(function () {
        i.init();
      }),
      (t.default = i),
      t
    );
  })();
});
