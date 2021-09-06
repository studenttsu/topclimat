// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@fancyapps/ui/dist/fancybox.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panzoom = exports.Fancybox = exports.Carousel = void 0;

// @fancyapps/ui/Fancybox v4.0.0-beta.1
const t = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t),
      e = (...i) => {
  let s = !1;
  "boolean" == typeof i[0] && (s = i.shift());
  let n = i[0];
  if (!n || "object" != typeof n) throw new Error("extendee must be an object");
  const o = i.slice(1),
        a = o.length;

  for (let i = 0; i < a; i++) {
    const a = o[i];

    for (let i in a) if (a.hasOwnProperty(i)) {
      const o = a[i];

      if (s && (Array.isArray(o) || t(o))) {
        const t = Array.isArray(o) ? [] : {};
        n[i] = e(!0, n.hasOwnProperty(i) ? n[i] : t, o);
      } else n[i] = o;
    }
  }

  return n;
},
      i = (t, e = 1e4) => (t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e),
      s = "undefined" != typeof window && window.ResizeObserver || class {
  constructor(t) {
    this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t;
  }

  observe(t) {
    if (this.observables.some(e => e.el === t)) return;
    const e = {
      el: t,
      size: {
        height: t.clientHeight,
        width: t.clientWidth
      }
    };
    this.observables.push(e);
  }

  unobserve(t) {
    this.observables = this.observables.filter(e => e.el !== t);
  }

  disconnect() {
    this.observables = [];
  }

  check() {
    const t = this.observables.filter(t => {
      const e = t.el.clientHeight,
            i = t.el.clientWidth;
      if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0;
    }).map(t => t.el);
    t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck);
  }

};

class n {
  constructor(t) {
    this.id = -1, this.id = t.pointerId || t.identifier || -1, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY, this.nativePointer = t;
  }

}

function o(t, e) {
  return e ? Math.sqrt((e.clientX - t.clientX) ** 2 + (e.clientY - t.clientY) ** 2) : 0;
}

function a(t, e) {
  return e ? {
    clientX: (t.clientX + e.clientX) / 2,
    clientY: (t.clientY + e.clientY) / 2
  } : t;
}

class r {
  constructor(t, {
    start: e = () => !0,
    move: i = () => {},
    end: s = () => {}
  } = {}) {
    this.element = t, this.startPointers = [], this.currentPointers = [], this.startCallback = e, this.moveCallback = i, this.endCallback = s, this.onStart = t => {
      if (t.button && 0 !== t.button) return;
      const e = new n(t);
      if (!1 === this.startCallback(e, t)) return !1;
      t.preventDefault(), (() => {
        const t = window.getSelection ? window.getSelection() : document.selection;
        t && t.rangeCount && t.getRangeAt(0).getClientRects().length && (t.removeAllRanges ? t.removeAllRanges() : t.empty && t.empty());
      })(), this.currentPointers.push(e), this.startPointers.push(e);
      (t.target && "setPointerCapture" in t.target ? t.target : this.element).setPointerCapture(t.pointerId), this.element.addEventListener("pointermove", this.onMove), this.element.addEventListener("pointerup", this.onEnd), this.element.addEventListener("pointercancel", this.onEnd);
    }, this.onMove = t => {
      const e = this.currentPointers.slice(),
            i = [];

      for (const e of [new n(t)]) {
        const t = this.currentPointers.findIndex(t => t.id === e.id);
        t < 0 || (i.push(e), this.currentPointers[t] = e);
      }

      i.length && this.moveCallback(e, this.currentPointers, t);
    }, this.onEnd = t => {
      const e = new n(t),
            i = this.currentPointers.findIndex(t => t.id === e.id);
      if (-1 === i) return !1;
      this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(e, t), this.currentPointers.length || (this.element.removeEventListener("pointermove", this.onMove), this.element.removeEventListener("pointerup", this.onEnd), this.element.removeEventListener("pointercancel", this.onEnd));
    }, this.element.addEventListener("pointerdown", this.onStart);
  }

  stop() {
    this.element.removeEventListener("pointerdown", this.onStart), this.element.removeEventListener("pointermove", this.onMove), this.element.removeEventListener("pointerup", this.onEnd), this.element.removeEventListener("pointercancel", this.onEnd);
  }

}

const l = function (t) {
  return !(!t || t === document.body) && (function (t) {
    const e = window.getComputedStyle(t)["overflow-y"],
          i = window.getComputedStyle(t)["overflow-x"],
          s = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
          n = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
    return s || n;
  }(t) ? t : l(t.parentNode));
};

class h {
  constructor(t = {}) {
    this.options = e(!0, {}, t), this.plugins = [], this.events = {};

    for (const t of ["on", "once"]) for (const e of Object.entries(this.options[t] || {})) this[t](...e);
  }

  option(t, e) {
    t = String(t);
    let i = (s = t, n = this.options, s.split(".").reduce(function (t, e) {
      return t && t[e];
    }, n));
    var s, n;
    return "function" == typeof i && (i = i.call(this, t)), void 0 === i ? e : i;
  }

  localize(t, e = []) {
    return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, i, s) => {
      let n = !1;
      if (n = s ? this.option(`${i[0] + i.toLowerCase().substring(1)}.l10n.${s}`) : this.option(`l10n.${i}`), !n) return i;

      for (let t = 0; t < e.length; t++) n = n.split(e[t][0]).join(e[t][1]);

      return n;
    });
  }

  on(e, i) {
    if (t(e)) {
      for (const t of Object.entries(e)) this.on(...t);

      return this;
    }

    return String(e).split(" ").forEach(t => {
      const e = this.events[t] = this.events[t] || [];
      -1 == e.indexOf(i) && e.push(i);
    }), this;
  }

  once(e, i) {
    if (t(e)) {
      for (const t of Object.entries(e)) this.once(...t);

      return this;
    }

    return String(e).split(" ").forEach(t => {
      const e = (...s) => {
        this.off(t, e), i.call(this, this, ...s);
      };

      e._ = i, this.on(t, e);
    }), this;
  }

  off(e, i) {
    if (!t(e)) return e.split(" ").forEach(t => {
      const e = this.events[t];
      if (!e || !e.length) return this;
      let s = -1;

      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t];

        if (n && (n === i || n._ === i)) {
          s = t;
          break;
        }
      }

      -1 != s && e.splice(s, 1);
    }), this;

    for (const t of Object.entries(e)) this.off(...t);
  }

  trigger(t, ...e) {
    for (const i of [...(this.events[t] || [])].slice()) if (i && !1 === i.call(this, this, ...e)) return !1;

    for (const i of [...(this.events["*"] || [])].slice()) if (i && !1 === i.call(this, t, this, ...e)) return !1;

    return !0;
  }

  attachPlugins(t) {
    const i = {};

    for (const [s, n] of Object.entries(t || {})) !1 === this.options[s] || this.plugins[s] || (this.options[s] = e({}, n.defaults || {}, this.options[s]), i[s] = new n(this));

    for (const [t, e] of Object.entries(i)) e.attach(this);

    return this.plugins = Object.assign({}, this.plugins, i), this;
  }

  detachPlugins() {
    for (const t in this.plugins) {
      let e;
      (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this);
    }

    return this.plugins = {}, this;
  }

}

const c = {
  touch: !0,
  zoom: !0,
  pinchToZoom: !0,
  panOnlyZoomed: !1,
  lockAxis: !1,
  friction: .64,
  decelFriction: .88,
  zoomFriction: .74,
  bounceForce: .2,
  baseScale: 1,
  minScale: 1,
  maxScale: 2,
  step: .5,
  textSelection: !1,
  click: "toggleZoom",
  wheel: "zoom",
  wheelFactor: 42,
  wheelLimit: 5,
  draggableClass: "is-draggable",
  draggingClass: "is-dragging",
  ratio: 1
};

class d extends h {
  constructor(t, i = {}) {
    super(e(!0, {}, c, i)), this.state = "init", this.$container = t;

    for (const t of ["onLoad", "onWheel", "onClick"]) this[t] = this[t].bind(this);

    this.initLayout(), this.resetValues(), this.attachPlugins(d.Plugins), this.trigger("init"), this.updateMetrics(), this.attachEvents(), this.trigger("ready"), !1 === this.option("centerOnStart") ? (this.handleCursor(), this.state = "ready") : this.panTo({
      friction: 0
    });
  }

  initLayout() {
    const t = this.$container;
    if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
    const e = this.option("content") || t.querySelector(".panzoom__content");
    if (!e) throw new Error("Panzoom: Content not found");
    this.$content = e;
    let i = this.option("viewport") || t.querySelector(".panzoom__viewport");
    i || !1 === this.option("wrapInner") || (i = document.createElement("div"), i.classList.add("panzoom__viewport"), i.append(...t.childNodes), t.appendChild(i)), this.$viewport = i || e.parentNode;
  }

  resetValues() {
    this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
      width: 0,
      height: 0
    }, this.viewport = {
      width: 0,
      height: 0
    }, this.content = {
      origHeight: 0,
      origWidth: 0,
      width: 0,
      height: 0,
      x: this.option("x", 0),
      y: this.option("y", 0),
      scale: this.option("baseScale")
    }, this.transform = {
      x: 0,
      y: 0,
      scale: 1
    }, this.resetDragPosition();
  }

  onLoad(t) {
    this.updateMetrics(), this.panTo({
      scale: this.option("baseScale"),
      friction: 0
    }), this.trigger("load", t);
  }

  onClick(t) {
    if (t.defaultPrevented) return;
    if (this.option("textSelection") && window.getSelection().toString().length) return void t.stopPropagation();
    const e = this.$content.getClientRects()[0];
    if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), void t.stopPropagation();
    !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
  }

  onWheel(t) {
    !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t);
  }

  zoomWithWheel(t) {
    void 0 === this.changedDelta && (this.changedDelta = 0);
    const e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
          i = this.content.scale;
    let s = i * (100 + e * this.option("wheelFactor")) / 100;
    if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), s = i) : (this.changedDelta = 0, s = Math.max(Math.min(s, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit")) return;
    if (t.preventDefault(), s === i) return;
    const n = this.$content.getBoundingClientRect(),
          o = t.clientX - n.left,
          a = t.clientY - n.top;
    this.zoomTo(s, {
      x: o,
      y: a
    });
  }

  zoomWithClick(t) {
    const e = this.$content.getClientRects()[0],
          i = t.clientX - e.left,
          s = t.clientY - e.top;
    this.toggleZoom({
      x: i,
      y: s
    });
  }

  attachEvents() {
    this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.$container.addEventListener("click", this.onClick, {
      passive: !1
    }), this.initObserver();
    const t = new r(this.$container, {
      start: (e, i) => {
        if (!this.option("touch")) return !1;

        if (!(this.velocity.scale < 0)) {
          if (!t.currentPointers.length) {
            if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(i.target.nodeName)) return !1;
            if (this.option("textSelection") && ((t, e, i) => {
              const s = t.childNodes,
                    n = document.createRange();

              for (let t = 0; t < s.length; t++) {
                const o = s[t];
                if (o.nodeType !== Node.TEXT_NODE) continue;
                n.selectNodeContents(o);
                const a = n.getBoundingClientRect();
                if (e >= a.left && i >= a.top && e <= a.right && i <= a.bottom) return o;
              }

              return !1;
            })(i.target, i.clientX, i.clientY)) return !1;
            if (l(i.target)) return !1;
          }

          return !1 !== this.trigger("touchStart", i) && (this.state = "pointerdown", this.resetDragPosition(), this.dragPosition.midPoint = null, this.dragPosition.time = Date.now(), !0);
        }
      },
      move: (e, i, s) => {
        if ("pointerdown" !== this.state) return;
        if (0 == this.trigger("touchMove", s)) return void s.preventDefault();
        if (i.length < 2 && this.transform.scale === this.option("baseScale") && 1 == this.option("panOnlyZoomed")) return;
        if (i.length > 1 && (!this.option("zoom") || !1 === this.option("pinchToZoom"))) return;
        s.preventDefault(), s.stopPropagation();
        const n = a(e[0], e[1]),
              r = a(i[0], i[1]),
              l = r.clientX - n.clientX,
              h = r.clientY - n.clientY,
              c = o(e[0], e[1]),
              d = o(i[0], i[1]),
              u = c ? d / c : 1;
        this.dragOffset.x += l, this.dragOffset.y += h, this.dragOffset.scale *= u, this.dragOffset.time = Date.now() - this.dragPosition.time;
        const f = 1 === this.dragStart.scale && this.option("lockAxis");

        if (f && !this.lockAxis) {
          if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return;

          if ("xy" === f) {
            const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
            this.lockAxis = t > 45 && t < 135 ? "y" : "x";
          } else this.lockAxis = f;
        }

        if (this.lockAxis && (this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0), this.$container.classList.add(this.option("draggingClass")), this.transform.scale === this.option("baseScale") && "y" === this.lockAxis || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), this.transform.scale === this.option("baseScale") && "x" === this.lockAxis || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, i.length > 1) {
          const e = a(t.startPointers[0], t.startPointers[1]),
                i = e.clientX - this.dragStart.rect.x,
                s = e.clientY - this.dragStart.rect.y,
                {
            deltaX: n,
            deltaY: o
          } = this.getZoomDelta(this.content.scale * this.dragOffset.scale, i, s);
          this.dragPosition.x -= n, this.dragPosition.y -= o, this.dragPosition.midPoint = r;
        }

        this.setDragResistance(), this.transform = {
          x: this.dragPosition.x,
          y: this.dragPosition.y,
          scale: this.dragPosition.scale
        }, this.startAnimation();
      },
      end: (e, i) => {
        if ("pointerdown" !== this.state) return;
        if (this._dragOffset = { ...this.dragOffset
        }, t.currentPointers.length) return void this.resetDragPosition();
        if (this.state = "decel", this.friction = this.option("decelFriction"), this.recalculateTransform(), this.$container.classList.remove(this.option("draggingClass")), !1 === this.trigger("touchEnd", i)) return;
        if ("decel" !== this.state) return;
        const s = this.option("minScale");
        if (this.transform.scale < s) return void this.zoomTo(s, {
          friction: .64
        });
        const n = this.option("maxScale");

        if (this.transform.scale - n > .01) {
          const t = this.dragPosition.midPoint || e,
                i = this.$content.getClientRects()[0];
          this.zoomTo(n, {
            friction: .64,
            x: t.clientX - i.left,
            y: t.clientY - i.top
          });
        } else ;
      }
    });
    this.pointerTracker = t;
  }

  initObserver() {
    this.resizeObserver || (this.resizeObserver = new s(() => {
      this.updateTimer || (this.updateTimer = setTimeout(() => {
        const t = this.$container.getBoundingClientRect();
        t.width && t.height ? ((Math.abs(t.width - this.container.width) > 1 || Math.abs(t.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(), this.updateMetrics(), this.panTo({
          x: this.content.x,
          y: this.content.y,
          scale: this.option("baseScale"),
          friction: 0
        })), this.updateTimer = null) : this.updateTimer = null;
      }, this.updateRate));
    }), this.resizeObserver.observe(this.$container));
  }

  resetDragPosition() {
    this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {
      x: 0,
      y: 0,
      scale: 0
    };
    const {
      x: t,
      y: e,
      scale: i
    } = this.content;
    this.dragStart = {
      rect: this.$content.getBoundingClientRect(),
      x: t,
      y: e,
      scale: i
    }, this.dragPosition = { ...this.dragPosition,
      x: t,
      y: e,
      scale: i
    }, this.dragOffset = {
      x: 0,
      y: 0,
      scale: 1,
      time: 0
    };
  }

  updateMetrics(t) {
    !0 !== t && this.trigger("beforeUpdate");
    const e = this.$container,
          s = this.$content,
          n = this.$viewport,
          o = this.$content instanceof HTMLImageElement,
          a = this.option("zoom"),
          r = this.option("resizeParent", a);
    let l = (h = this.$content, Math.max(parseFloat(h.naturalWidth || 0), parseFloat(h.width && h.width.baseVal && h.width.baseVal.value || 0), parseFloat(h.offsetWidth || 0), parseFloat(h.scrollWidth || 0)));
    var h;

    let c = (t => Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0)))(this.$content);

    Object.assign(s.style, {
      width: "",
      height: "",
      maxWidth: "",
      maxHeight: ""
    }), r && Object.assign(n.style, {
      width: "",
      height: ""
    });
    const d = this.option("ratio");
    l = i(l * d), c = i(c * d);
    let u = l,
        f = c;
    const g = s.getBoundingClientRect(),
          p = n.getBoundingClientRect(),
          m = n == e ? p : e.getBoundingClientRect();
    this.viewport = { ...this.viewport,
      width: p.width,
      height: p.height
    };
    var y = window.getComputedStyle(n);

    if (this.viewport.width -= parseFloat(y.paddingLeft) + parseFloat(y.paddingRight), this.viewport.height -= parseFloat(y.paddingTop) + parseFloat(y.paddingBottom), a) {
      if (Math.abs(l - g.width) > .1 || Math.abs(c - g.height) > .1) {
        const t = ((t, e, i, s) => {
          const n = Math.min(i / t || 0, s / e);
          return {
            width: t * n || 0,
            height: e * n || 0
          };
        })(l, c, Math.min(l, g.width), Math.min(c, g.height));

        u = i(t.width), f = i(t.height);
      }

      Object.assign(s.style, {
        width: `${u}px`,
        height: `${f}px`,
        transform: ""
      });
    }

    if (r && (Object.assign(n.style, {
      width: `${u}px`,
      height: `${f}px`
    }), this.viewport = { ...this.viewport,
      width: u,
      height: f
    }), o && a && "function" != typeof this.options.maxScale) {
      const t = this.option("maxScale");

      this.options.maxScale = function () {
        return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t;
      };
    }

    this.content = { ...this.content,
      origWidth: l,
      origHeight: c,
      fitWidth: u,
      fitHeight: f,
      width: u,
      height: f,
      scale: 1,
      isZoomable: a
    }, this.container = {
      width: m.width,
      height: m.height
    }, !0 !== t && this.trigger("afterUpdate");
  }

  zoomIn(t) {
    this.zoomTo(this.content.scale + (t || this.option("step")));
  }

  zoomOut(t) {
    this.zoomTo(this.content.scale - (t || this.option("step")));
  }

  toggleZoom(t = {}) {
    const e = this.option("maxScale"),
          i = this.option("baseScale"),
          s = this.content.scale > i + .5 * (e - i) ? i : e;
    this.zoomTo(s, t);
  }

  zoomTo(t = this.option("baseScale"), {
    x: e = null,
    y: s = null
  } = {}) {
    t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
    const n = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
    null === e && (e = this.content.width * n * .5), null === s && (s = this.content.height * n * .5);
    const {
      deltaX: o,
      deltaY: a
    } = this.getZoomDelta(t, e, s);
    e = this.content.x - o, s = this.content.y - a, this.panTo({
      x: e,
      y: s,
      scale: t,
      friction: this.option("zoomFriction")
    });
  }

  getZoomDelta(t, e = 0, i = 0) {
    const s = this.content.fitWidth * this.content.scale,
          n = this.content.fitHeight * this.content.scale,
          o = e > 0 && s ? e / s : 0,
          a = i > 0 && n ? i / n : 0;
    return {
      deltaX: (this.content.fitWidth * t - s) * o,
      deltaY: (this.content.fitHeight * t - n) * a
    };
  }

  panTo({
    x: t = this.content.x,
    y: e = this.content.y,
    scale: i,
    friction: s = this.option("friction"),
    ignoreBounds: n = !1
  } = {}) {
    if (i = i || this.content.scale || 1, !n) {
      const {
        boundX: s,
        boundY: n
      } = this.getBounds(i);
      s && (t = Math.max(Math.min(t, s.to), s.from)), n && (e = Math.max(Math.min(e, n.to), n.from));
    }

    this.friction = s, this.transform = {
      x: t,
      y: e,
      scale: i
    }, s ? (this.state = "panning", this.velocity = {
      x: (1 / this.friction - 1) * (t - this.content.x),
      y: (1 / this.friction - 1) * (e - this.content.y),
      scale: (1 / this.friction - 1) * (i - this.content.scale)
    }, this.startAnimation()) : this.endAnimation();
  }

  startAnimation() {
    this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(() => this.animate());
  }

  animate() {
    if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform();else if ("pointerdown" !== this.state) return this.endAnimation(), void this.trigger("endAnimation");
    this.rAF = requestAnimationFrame(() => this.animate());
  }

  getBounds(t) {
    let e = this.boundX,
        s = this.boundY;
    if (void 0 !== e && void 0 !== s) return {
      boundX: e,
      boundY: s
    };
    e = {
      from: 0,
      to: 0
    }, s = {
      from: 0,
      to: 0
    }, t = t || this.transform.scale;
    const n = this.content.fitWidth,
          o = this.content.fitHeight,
          a = n * t,
          r = o * t,
          l = this.viewport.width,
          h = this.viewport.height;

    if (n <= l) {
      const t = .5 * (l - a),
            s = .5 * (a - n);
      e.from = i(t - s), e.to = i(t + s);
    } else e.from = i(l - a);

    if (o <= h) {
      const t = .5 * (h - r),
            e = .5 * (r - o);
      s.from = i(t - e), s.to = i(t + e);
    } else s.from = i(h - a);

    return {
      boundX: e,
      boundY: s
    };
  }

  setEdgeForce() {
    if ("decel" !== this.state) return;
    const t = this.option("bounceForce"),
          {
      boundX: e,
      boundY: i
    } = this.getBounds(Math.max(this.transform.scale, this.content.scale));
    let s, n, o, a;

    if (e && (s = this.content.x < e.from, n = this.content.x > e.to), i && (o = this.content.y < i.from, a = this.content.y > i.to), s || n) {
      let i = ((s ? e.from : e.to) - this.content.x) * t;
      const n = this.content.x + (this.velocity.x + i) / this.friction;
      n >= e.from && n <= e.to && (i += this.velocity.x), this.velocity.x = i, this.recalculateTransform();
    }

    if (o || a) {
      let e = ((o ? i.from : i.to) - this.content.y) * t;
      const s = this.content.y + (e + this.velocity.y) / this.friction;
      s >= i.from && s <= i.to && (e += this.velocity.y), this.velocity.y = e, this.recalculateTransform();
    }
  }

  setDragResistance() {
    if ("pointerdown" !== this.state) return;
    const {
      boundX: t,
      boundY: e
    } = this.getBounds(this.dragPosition.scale);
    let i, s, n, o;

    if (t && (i = this.dragPosition.x < t.from, s = this.dragPosition.x > t.to), e && (n = this.dragPosition.y < e.from, o = this.dragPosition.y > e.to), (i || s) && (!i || !s)) {
      const e = i ? t.from : t.to,
            s = e - this.dragPosition.x;
      this.dragPosition.x = e - .3 * s;
    }

    if ((n || o) && (!n || !o)) {
      const t = n ? e.from : e.to,
            i = t - this.dragPosition.y;
      this.dragPosition.y = t - .3 * i;
    }
  }

  setDragForce() {
    "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
  }

  recalculateTransform() {
    this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
  }

  isAnimating() {
    return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
  }

  setTransform(t) {
    let e, s, n;

    if (t ? (e = i(this.transform.x), s = i(this.transform.y), n = this.transform.scale, this.content = { ...this.content,
      x: e,
      y: s,
      scale: n
    }) : (e = i(this.content.x), s = i(this.content.y), n = this.content.scale / (this.content.width / this.content.fitWidth), this.content = { ...this.content,
      x: e,
      y: s
    }), this.trigger("beforeTransform"), e = i(this.content.x), s = i(this.content.y), t && this.option("zoom")) {
      let t, o;
      t = i(this.content.fitWidth * n), o = i(this.content.fitHeight * n), this.content.width = t, this.content.height = o, this.transform = { ...this.transform,
        width: t,
        height: o,
        scale: n
      }, Object.assign(this.$content.style, {
        width: `${t}px`,
        height: `${o}px`,
        maxWidth: "none",
        maxHeight: "none",
        transform: `translate3d(${e}px, ${s}px, 0) scale(1)`
      });
    } else this.$content.style.transform = `translate3d(${e}px, ${s}px, 0) scale(${n})`;

    this.trigger("afterTransform");
  }

  endAnimation() {
    cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
      x: 0,
      y: 0,
      scale: 0
    }, this.setTransform(!0), this.state = "ready", this.handleCursor();
  }

  handleCursor() {
    const t = this.option("draggableClass");
    t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.content.fitWidth && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t));
  }

  detachEvents() {
    this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.$container.removeEventListener("click", this.onClick, {
      passive: !1
    }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
  }

  destroy() {
    "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition());
  }

}

exports.Panzoom = d;
d.version = "4.0.0-beta.1", d.Plugins = {};

const u = (t, e) => {
  let i = 0;
  return function (...s) {
    const n = new Date().getTime();
    if (!(n - i < e)) return i = n, t(...s);
  };
};

class f {
  constructor(t) {
    this.$container = null, this.$prev = null, this.$next = null, this.carousel = t, this.onRefresh = this.onRefresh.bind(this);
  }

  option(t) {
    return this.carousel.option(`Navigation.${t}`);
  }

  createButton(t) {
    const e = document.createElement("button");
    e.setAttribute("title", this.carousel.localize(`{{${t.toUpperCase()}}}`));
    const i = this.option("classNames.button") + " " + this.option(`classNames.${t}`);
    return e.classList.add(...i.split(" ")), e.setAttribute("tabindex", "0"), e.innerHTML = this.carousel.localize(this.option(`${t}Tpl`)), e.addEventListener("click", e => {
      e.preventDefault(), e.stopPropagation(), this.carousel["slide" + ("next" === t ? "Next" : "Prev")]();
    }), e;
  }

  build() {
    this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(this.option("classNames.main")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
  }

  onRefresh() {
    const t = this.carousel.pages.length;
    t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")));
  }

  cleanup() {
    this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null;
  }

  attach() {
    this.carousel.on("refresh change", this.onRefresh);
  }

  detach() {
    this.carousel.off("refresh change", this.onRefresh), this.cleanup();
  }

}

f.defaults = {
  prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
  nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
  classNames: {
    main: "carousel__nav",
    button: "carousel__button",
    next: "is-next",
    prev: "is-prev"
  }
};

class g {
  constructor(t) {
    this.carousel = t, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
  }

  addAsTargetFor(t) {
    this.target = this.carousel, this.nav = t, this.attachEvents();
  }

  addAsNavFor(t) {
    this.target = t, this.nav = this.carousel, this.attachEvents();
  }

  attachEvents() {
    this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
  }

  onNavReady() {
    this.onTargetChange(!0);
  }

  onNavClick(t, e, i) {
    const s = i.target.closest(".carousel__slide");
    if (!s) return;
    i.stopPropagation();
    const n = parseInt(s.dataset.index, 10),
          o = this.target.findPageForSlide(n);
    this.target.page !== o && this.target.slideTo(o, {
      friction: this.friction
    }), this.markSelectedSlide(n);
  }

  onNavCreateSlide(t, e) {
    e.index === this.selectedIndex && this.markSelectedSlide(e.index);
  }

  onTargetChange() {
    const t = this.target.pages[this.target.page].indexes[0],
          e = this.nav.findPageForSlide(t);
    this.nav.slideTo(e), this.markSelectedSlide(t);
  }

  markSelectedSlide(t) {
    this.selectedIndex = t, [...this.nav.slides].filter(t => t.$el && t.$el.classList.remove("is-nav-selected"));
    const e = this.nav.slides[t];
    e && e.$el && e.$el.classList.add("is-nav-selected");
  }

  attach(t) {
    const e = t.options.Sync;
    (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), this.friction = e.friction);
  }

  detach() {
    this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange));
  }

}

g.defaults = {
  friction: .92
};
const p = {
  Navigation: f,
  Dots: class {
    constructor(t) {
      this.carousel = t, this.$list = null, this.events = {
        change: this.onChange.bind(this),
        refresh: this.onRefresh.bind(this)
      };
    }

    buildList() {
      if (this.carousel.pages.length < 2) return;
      const t = document.createElement("ol");
      return t.classList.add("carousel__dots"), t.addEventListener("click", t => {
        if (!("page" in t.target.dataset)) return;
        t.preventDefault(), t.stopPropagation();
        const e = parseInt(t.target.dataset.page, 10),
              i = this.carousel;
        e !== i.page && (i.pages.length < 3 && i.option("infinite") ? i[0 == e ? "slidePrev" : "slideNext"]() : i.slideTo(e));
      }), this.$list = t, this.carousel.$container.appendChild(t), this.carousel.$container.classList.add("has-dots"), t;
    }

    removeList() {
      this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
    }

    rebuildDots() {
      let t = this.$list;
      const e = !!t,
            i = this.carousel.pages.length;
      if (i < 2) return void (e && this.removeList());
      e || (t = this.buildList());
      const s = this.$list.children.length;
      if (s > i) for (let t = i; t < s; t++) this.$list.removeChild(this.$list.lastChild);else {
        for (let t = s; t < i; t++) {
          const e = document.createElement("li");
          e.classList.add("carousel__dot"), e.dataset.page = t, e.setAttribute("role", "button"), e.setAttribute("tabindex", "0"), e.setAttribute("title", this.carousel.localize("{{GOTO}}", [["%d", t + 1]])), e.addEventListener("keydown", t => {
            const i = t.code;
            let s;
            "Enter" === i || "NumpadEnter" === i ? s = e : "ArrowRight" === i ? s = e.nextSibling : "ArrowLeft" === i && (s = e.previousSibling), s && s.click();
          }), this.$list.appendChild(e);
        }

        this.setActiveDot();
      }
    }

    setActiveDot() {
      if (!this.$list) return;
      this.$list.childNodes.forEach(t => {
        t.classList.remove("is-selected");
      });
      const t = this.$list.childNodes[this.carousel.page];
      t && t.classList.add("is-selected");
    }

    onChange() {
      this.setActiveDot();
    }

    onRefresh() {
      this.rebuildDots();
    }

    attach() {
      this.carousel.on(this.events);
    }

    detach() {
      this.removeList(), this.carousel.off(this.events), this.carousel = null;
    }

  },
  Sync: g
},
      m = {
  slides: [],
  preload: 0,
  slidesPerPage: "auto",
  initialPage: null,
  initialSlide: null,
  friction: .92,
  center: !0,
  infinite: !0,
  fill: !0,
  dragFree: !1,
  classNames: {
    viewport: "carousel__viewport",
    track: "carousel__track",
    slide: "carousel__slide",
    slideSelected: "is-selected"
  },
  l10n: {
    NEXT: "Next slide",
    PREV: "Previous slide",
    GOTO: "Go to slide %d"
  }
};

class y extends h {
  constructor(t, i = {}) {
    if (super(i = e(!0, {}, m, i)), this.state = "init", this.$container = t, !(this.$container instanceof HTMLElement)) throw new Error("No root element provided");
    this.slideNext = u(this.slideNext.bind(this), 250), this.slidePrev = u(this.slidePrev.bind(this), 250), this.init();
  }

  init() {
    this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`, this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
  }

  initLayout() {
    const t = this.option("classNames");
    this.$viewport = this.option("viewport") || this.$container.querySelector("." + t.viewport), this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(t.viewport), this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector("." + t.track), this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(t.track), this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track));
  }

  initSlides() {
    this.slides = [];
    this.$viewport.querySelectorAll("." + this.option("classNames.slide")).forEach(t => {
      const e = {
        $el: t,
        isDom: !0
      };
      this.slides.push(e), this.trigger("createSlide", e, this.slides.length);
    }), Array.isArray(this.options.slides) && (this.slides = e(!0, [...this.slides], this.options.slides));
  }

  updateMetrics() {
    let t,
        e = 0,
        s = [];
    this.slides.forEach((i, n) => {
      const o = i.$el,
            a = i.isDom || !t ? this.getSlideMetrics(o) : t;
      i.index = n, i.width = a, i.left = e, t = a, e += a, s.push(n);
    });
    let n = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)),
        o = window.getComputedStyle(this.$track);
    n -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight), this.contentWidth = e, this.viewportWidth = n;
    const a = [],
          r = this.option("slidesPerPage");
    if (Number.isInteger(r) && e > n) for (let t = 0; t < this.slides.length; t += r) a.push({
      indexes: s.slice(t, t + r),
      slides: this.slides.slice(t, t + r)
    });else {
      let t = 0,
          e = 0;

      for (let i = 0; i < this.slides.length; i += 1) {
        let s = this.slides[i];
        (!a.length || e + s.width > n) && (a.push({
          indexes: [],
          slides: []
        }), t = a.length - 1, e = 0), e += s.width, a[t].indexes.push(i), a[t].slides.push(s);
      }
    }
    const l = this.option("center"),
          h = this.option("fill");
    a.forEach((t, i) => {
      t.index = i, t.width = t.slides.reduce((t, e) => t + e.width, 0), t.left = t.slides[0].left, l && (t.left += .5 * (n - t.width) * -1), h && !this.option("infiniteX", this.option("infinite")) && e > n && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, e - n));
    });
    const c = [];
    let d;
    a.forEach(t => {
      const e = { ...t
      };
      d && e.left === d.left ? (d.width += e.width, d.slides = [...d.slides, ...e.slides], d.indexes = [...d.indexes, ...e.indexes]) : (e.index = c.length, d = e, c.push(e));
    }), this.pages = c;
    let u = this.page;

    if (null === u) {
      const t = this.option("initialSlide");
      u = null !== t ? this.findPageForSlide(t) : this.option("initialPage", 0), c[u] || (u = c.length && u > c.length ? c[c.length - 1].index : 0), this.page = u, this.pageIndex = u;
    }

    this.updatePanzoom(), this.trigger("refresh");
  }

  getSlideMetrics(t) {
    if (!t) {
      const e = this.slides[0];
      (t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", t.classList.add(this.option("classNames.slide")), e.customClass && t.classList.add(...e.customClass.split(" ")), this.$track.prepend(t);
    }

    let e = Math.max(t.offsetWidth, i(t.getBoundingClientRect().width));
    const s = t.currentStyle || window.getComputedStyle(t);
    return e = e + (parseFloat(s.marginLeft) || 0) + (parseFloat(s.marginRight) || 0), t.dataset.isTestEl && t.remove(), e;
  }

  findPageForSlide(t) {
    const e = this.pages.find(e => e.indexes.indexOf(t) > -1);
    return e ? e.index : null;
  }

  slideNext() {
    this.slideTo(this.pageIndex + 1);
  }

  slidePrev() {
    this.slideTo(this.pageIndex - 1);
  }

  slideTo(t, e = {}) {
    const {
      x: i = -1 * this.setPage(t, !0),
      y: s = 0,
      friction: n = this.option("friction")
    } = e;
    this.Panzoom.content.x === i && !this.Panzoom.velocity.x && n || (this.Panzoom.panTo({
      x: i,
      y: s,
      friction: n,
      ignoreBounds: !0
    }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
  }

  initPanzoom() {
    this.Panzoom && this.Panzoom.destroy();
    const t = e(!0, {}, {
      content: this.$track,
      wrapInner: !1,
      resizeParent: !1,
      zoom: !1,
      click: !1,
      lockAxis: "x",
      x: -1 * this.pages[this.page].left,
      centerOnStart: !1,
      textSelection: () => this.option("textSelection", !1),
      panOnlyZoomed: function () {
        return this.content.width < this.viewport.width;
      }
    }, this.option("Panzoom"));
    this.Panzoom = new d(this.$container, t), this.Panzoom.on({
      "*": (t, ...e) => this.trigger(`Panzoom.${t}`, ...e),
      afterUpdate: () => {
        this.updatePage();
      },
      beforeTransform: this.onBeforeTransform.bind(this),
      touchEnd: this.onTouchEnd.bind(this),
      endAnimation: () => {
        this.trigger("settle");
      }
    }), this.updateMetrics(), this.manageSlideVisiblity();
  }

  updatePanzoom() {
    this.Panzoom && (this.Panzoom.content = { ...this.Panzoom.content,
      fitWidth: this.contentWidth,
      origWidth: this.contentWidth,
      width: this.contentWidth
    }, this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.Panzoom.boundX = {
      from: -1 * this.pages[this.pages.length - 1].left,
      to: -1 * this.pages[0].left
    }, this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
      from: 0,
      to: 0
    });
  }

  manageSlideVisiblity() {
    const t = this.contentWidth,
          e = this.viewportWidth;
    let i = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages[this.page].left;
    const s = this.option("preload"),
          n = this.option("infiniteX", this.option("infinite")),
          o = parseFloat(window.getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
          a = parseFloat(window.getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
    this.slides.forEach(r => {
      let l,
          h,
          c = 0;
      l = i - o, h = i + e + a, l -= s * (e + o + a), h += s * (e + o + a);
      const d = r.left + r.width > l && r.left < h;
      l = i + t - o, h = i + t + e + a, l -= s * (e + o + a);
      const u = n && r.left + r.width > l && r.left < h;
      l = i - t - o, h = i - t + e + a, l -= s * (e + o + a);
      const f = n && r.left + r.width > l && r.left < h;
      u || d || f ? (this.createSlideEl(r), d && (c = 0), u && (c = -1), f && (c = 1), r.left + r.width > i && r.left <= i + e + a && (c = 0)) : this.removeSlideEl(r), r.hasDiff = c;
    });
    let r = 0,
        l = 0;
    this.slides.forEach((e, i) => {
      let s = 0;
      e.$el ? (i !== r || e.hasDiff ? s = l + e.hasDiff * t : l = 0, e.$el.style.left = Math.abs(s) > .1 ? `${l + e.hasDiff * t}px` : "", r++) : l += e.width;
    }), this.markSelectedSlides();
  }

  createSlideEl(t) {
    if (!t) return;

    if (t.$el) {
      if (parseInt(t.$el.dataset.index, 10) !== t.index) {
        t.$el.dataset.index = t.index;
        let e;
        t.$el.querySelectorAll("[data-lazy-src]").forEach(t => {
          let e = t.dataset.lazySrc;
          t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = `url('${e}')`;
        }), (e = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = `url('${e}')`), t.state = "ready";
      }

      return;
    }

    const e = document.createElement("div");
    e.dataset.index = t.index, e.classList.add(this.option("classNames.slide")), t.customClass && e.classList.add(...t.customClass.split(" ")), t.html && (e.innerHTML = t.html);
    const i = [];
    this.slides.forEach((t, e) => {
      t.$el && i.push(e);
    });
    const s = t.index;
    let n = null;

    if (i.length) {
      let t = i.reduce((t, e) => Math.abs(e - s) < Math.abs(t - s) ? e : t);
      n = this.slides[t];
    }

    return this.$track.insertBefore(e, n && n.$el ? n.index < t.index ? n.$el.nextSibling : n.$el : null), t.$el = e, this.trigger("createSlide", t, s), t;
  }

  removeSlideEl(t) {
    t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null);
  }

  markSelectedSlides() {
    const t = this.option("classNames.slideSelected"),
          e = "aria-hidden";
    this.slides.forEach((i, s) => {
      const n = i.$el;
      if (!n) return;
      const o = this.pages[this.page];
      o && o.indexes && o.indexes.indexOf(s) > -1 ? (t && !n.classList.contains(t) && (n.classList.add(t), this.trigger("selectSlide", i)), n.removeAttribute(e)) : (t && n.classList.contains(t) && (n.classList.remove(t), this.trigger("unselectSlide", i)), n.setAttribute(e, !0));
    });
  }

  updatePage() {
    this.updateMetrics(), this.slideTo(this.page, {
      friction: 0
    });
  }

  onBeforeTransform() {
    this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity();
  }

  manageInfiniteTrack() {
    const t = this.contentWidth,
          e = this.viewportWidth;
    if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e) return;
    const i = this.Panzoom;
    let s = !1;
    return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, s = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, s = !0), s && "pointerdown" === i.state && i.resetDragPosition(), s;
  }

  onTouchEnd(t, e) {
    const i = this.option("dragFree");
    if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();else if (i) {
      const [, e] = this.getPageFromPosition(-1 * t.transform.x);
      this.setPage(e);
    } else this.slideToClosest();
  }

  slideToClosest(t = {}) {
    let [, e] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
    this.slideTo(e, t);
  }

  getPageFromPosition(t) {
    const e = this.pages.length;
    this.option("center") && (t += .5 * this.viewportWidth);
    const i = Math.floor(t / this.contentWidth);
    t -= i * this.contentWidth;
    let s = this.slides.find(e => e.left <= t && e.left + e.width > t);

    if (s) {
      let t = this.findPageForSlide(s.index);
      return [t, t + i * e];
    }

    return [0, 0];
  }

  setPage(t, e) {
    let i = 0,
        s = parseInt(t, 10) || 0;
    const n = this.page,
          o = this.pageIndex,
          a = this.pages.length,
          r = this.contentWidth,
          l = this.viewportWidth;

    if (t = (s % a + a) % a, this.option("infiniteX", this.option("infinite")) && r > l) {
      const n = Math.floor(s / a) || 0,
            o = r;

      if (i = this.pages[t].left + n * o, !0 === e && a > 2) {
        let t = -1 * this.Panzoom.content.x;
        const e = i - o,
              n = i + o,
              r = Math.abs(t - i),
              l = Math.abs(t - e),
              h = Math.abs(t - n);
        h < r && h <= l ? (i = n, s += a) : l < r && l < h && (i = e, s -= a);
      }
    } else t = s = Math.max(0, Math.min(s, a - 1)), i = this.pages[t].left;

    return this.page = t, this.pageIndex = s, null !== n && t !== n && (this.prevPage = n, this.prevPageIndex = o, this.trigger("change", t, n)), i;
  }

  destroy() {
    this.state = "destroy", this.slides.forEach(t => {
      this.removeSlideEl(t);
    }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
  }

}

exports.Carousel = y;
y.version = "4.0.0-beta.1", y.Plugins = p;
const b = !!("undefined" != typeof window && window.document && window.document.createElement && window.document.body);

class v {
  constructor(t) {
    this.fancybox = t, this.$container = null, this.state = "init";

    for (const t of ["onPrepare", "onClosing", "onKeydown"]) this[t] = this[t].bind(this);

    this.events = {
      prepare: this.onPrepare,
      closing: this.onClosing,
      keydown: this.onKeydown
    };
  }

  onPrepare() {
    this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
  }

  onClosing() {
    this.Carousel && this.Carousel.Panzoom.detachEvents();
  }

  onKeydown(t, e) {
    e === t.option("Thumbs.key") && this.toggle();
  }

  build() {
    if (this.$container) return;
    const t = document.createElement("div");
    t.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t, e(!0, {
      Dots: !1,
      Navigation: !1,
      Sync: {
        friction: 0
      },
      infinite: !1,
      center: !0,
      fill: !0,
      dragFree: !0,
      slidesPerPage: 1,
      preload: 1
    }, this.fancybox.option("Thumbs.Carousel"), {
      Sync: {
        target: this.fancybox.Carousel
      },
      slides: this.getSlides()
    })), this.Carousel.Panzoom.on("wheel", (t, e) => {
      e.preventDefault(), this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
    }), this.$container = t, this.state = "visible";
  }

  getSlides() {
    const t = [];

    for (const e of this.fancybox.items) {
      const i = e.thumb;
      i && t.push({
        html: `<div class="fancybox__thumb" style="background-image:url('${i}')"></div>`,
        customClass: `has-thumb has-${e.type || "image"}`
      });
    }

    return t;
  }

  toggle() {
    return "visible" === this.state ? (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", void (this.state = "hidden")) : "hidden" === this.state ? (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), void (this.state = "visible")) : void this.build();
  }

  cleanup() {
    this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init";
  }

  attach() {
    this.fancybox.on(this.events);
  }

  detach() {
    this.fancybox.off(this.events), this.cleanup();
  }

}

v.defaults = {
  minSlideCount: 2,
  minScreenHeight: 500,
  autoStart: !0,
  key: "t"
};

const x = t => Object.entries(t).map(t => t.map(encodeURIComponent).join("=")).join("&"),
      w = {
  video: {
    autoplay: !0,
    ratio: 16 / 9
  },
  youtube: {
    autohide: 1,
    fs: 1,
    rel: 0,
    hd: 1,
    wmode: "transparent",
    enablejsapi: 1,
    html5: 1
  },
  vimeo: {
    hd: 1,
    show_title: 1,
    show_byline: 1,
    show_portrait: 0,
    fullscreen: 1
  },
  html5video: {
    tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />\n  Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!\n</video>',
    format: ""
  }
};

class $ {
  constructor(t) {
    this.fancybox = t;

    for (const t of ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]) this[t] = this[t].bind(this);

    this.events = {
      init: this.onInit,
      ready: this.onReady,
      "Carousel.createSlide": this.onCreateSlide,
      "Carousel.removeSlide": this.onRemoveSlide,
      "Carousel.selectSlide": this.onSelectSlide,
      "Carousel.unselectSlide": this.onUnselectSlide,
      "Carousel.refresh": this.onRefresh
    };
  }

  onInit() {
    for (const t of this.fancybox.items) this.processType(t);
  }

  processType(t) {
    if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
    const i = t.src || "";
    let s = t.type || this.fancybox.options.type,
        n = null;

    if (!i || "string" == typeof i) {
      if (n = i.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
        const e = x(this.fancybox.option("Html.youtube")),
              i = encodeURIComponent(n[1]);
        t.videoId = i, t.src = `https://www.youtube-nocookie.com/embed/${i}?${e}`, t.thumb = t.thumb || `https://i.ytimg.com/vi/${i}/mqdefault.jpg`, t.vendor = "youtube", s = "video";
      } else if (n = i.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
        const e = x(this.fancybox.option("Html.vimeo")),
              i = encodeURIComponent(n[1]);
        t.videoId = i, t.src = `https://player.vimeo.com/video/${i}?${e}`, t.vendor = "vimeo", s = "video";
      } else (n = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `//maps.google.${n[1]}/?ll=${(n[2] ? n[2] + "&z=" + Math.floor(n[3]) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, s = "map") : (n = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `//maps.google.${n[1]}/maps?q=${n[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, s = "map");

      s || ("#" === i.charAt(0) ? s = "inline" : (n = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "html5video", t.format = t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) && (s = "pdf")), t.type = s || this.fancybox.option("defaultType", "image"), "html5video" !== s && "video" !== s || (t.video = e({}, this.fancybox.option("Html.video"), t.video), t.width && t.height ? t.ratio = parseFloat(t.width) / parseFloat(t.height) : t.ratio = t.ratio || t.video.ratio);
    }
  }

  onReady() {
    this.fancybox.Carousel.slides.forEach(t => {
      t.$el && (this.setContent(t), t.index === this.fancybox.getSlide().index && this.playVideo(t));
    });
  }

  onCreateSlide(t, e, i) {
    "ready" === this.fancybox.state && this.setContent(i);
  }

  loadInlineContent(t) {
    let e;
    if (t.src instanceof HTMLElement) e = t.src;else if ("string" == typeof t.src) {
      const i = t.src.split("#", 2),
            s = 2 === i.length && "" === i[0] ? i[1] : i[0];
      e = document.getElementById(s);
    }

    if (e) {
      if ("clone" === t.type || e.$placeHolder) {
        e = e.cloneNode(!0);
        let i = e.getAttribute("id");
        i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${t.index}`, e.setAttribute("id", i);
      } else {
        const t = document.createElement("div");
        t.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(t, e), e.$placeHolder = t;
      }

      this.fancybox.setContent(t, e);
    } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
  }

  loadAjaxContent(t) {
    const e = this.fancybox,
          i = new XMLHttpRequest();
    e.showLoading(t), i.onreadystatechange = function () {
      i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    }, i.open("GET", t.src), i.send(t.ajax || null), t.xhr = i;
  }

  loadIframeContent(t) {
    const e = this.fancybox,
          i = document.createElement("iframe");
    if (i.className = "fancybox__iframe", i.setAttribute("id", `fancybox__iframe_${e.id}_${t.index}`), i.setAttribute("allow", "autoplay; fullscreen"), i.setAttribute("scrolling", "auto"), t.$iframe = i, "iframe" !== t.type || !1 === t.preload) return i.setAttribute("src", t.src), void this.fancybox.setContent(t, i);
    e.showLoading(t);
    const s = document.createElement("div");
    s.style.visibility = "hidden", this.fancybox.setContent(t, s), s.appendChild(i), i.onerror = () => {
      e.setError(t, "{{IFRAME_ERROR}}");
    }, i.onload = () => {
      e.hideLoading(t);
      let s = !1;
      "yes" !== i.dataset.ready && (i.dataset.ready = "yes", s = !0), i.src.length && (i.parentNode.style.visibility = "", !1 !== t.autoSize && this.autoSizeIframe(i), s && e.revealContent(t));
    }, i.setAttribute("src", t.src);
  }

  setAspectRatio(t) {
    let e = t.ratio;
    if (!e || !t.$content) return;
    t.$content.style.maxWidth = "", t.$content.style.maxHeight = "";
    let i = t.$content.offsetWidth,
        s = t.$content.offsetHeight,
        n = t.width,
        o = t.height;

    if (n && o && (i > n || s > o)) {
      let t = Math.min(n / i, o / s);
      i *= t, s *= t;
    }

    e < i / s ? i = s * e : s = i / e, t.$content.style.maxWidth = `${i}px`, t.$content.style.maxHeight = `${s}px`;
  }

  autoSizeIframe(t) {
    if (!t.dataset || "yes" !== t.dataset.ready) return;
    let e = t.parentNode.style;
    e.flex = "1 1 auto", e.width = "", e.height = "";

    try {
      const i = t.contentWindow.document,
            s = i.getElementsByTagName("html")[0],
            n = i.body,
            o = window.getComputedStyle(t.parentNode),
            a = parseFloat(o.paddingLeft) + parseFloat(o.paddingRight),
            r = parseFloat(o.paddingTop) + parseFloat(o.paddingBottom);
      n.style.overflow = "hidden";
      const l = s.scrollWidth;
      e.width = `${l + a}px`, n.style.overflow = "", e.flex = "", e.flexShrink = "0", e.height = `${n.scrollHeight}px`;
      const h = s.scrollHeight;
      e.height = `${h + r}px`;
    } catch (t) {
      e = "";
    }
  }

  onRefresh(t, e) {
    e.slides.forEach(t => {
      t.$el && (t.$iframe && !1 !== t.autoSize && this.autoSizeIframe(t.$iframe), t.ratio && this.setAspectRatio(t));
    });
  }

  setContent(t) {
    if (t && !t.isDom) {
      switch (t.type) {
        case "html":
          this.fancybox.setContent(t, t.src);
          break;

        case "html5video":
          this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.thumb || ""));
          break;

        case "inline":
        case "clone":
          this.loadInlineContent(t);
          break;

        case "ajax":
          this.loadAjaxContent(t);
          break;

        case "iframe":
        case "pdf":
        case "video":
        case "map":
          this.loadIframeContent(t);
      }

      t.ratio && this.setAspectRatio(t);
    }
  }

  onSelectSlide(t, e, i) {
    "ready" === t.state && this.playVideo(i);
  }

  playVideo(t) {
    if ("html5video" === t.type) {
      const e = t.$el.querySelector("video");
      if (e) try {
        e.play();
      } catch (t) {}
    }

    if ("video" !== t.type || !t.$iframe || !t.$iframe.contentWindow) return;

    const e = () => {
      if ("done" !== t.state || !t.$iframe || !t.$iframe.contentWindow) return;
      let i;
      if (t.$iframe.isReady) return t.video && t.video.autoplay && (i = "youtube" == t.vendor ? {
        event: "command",
        func: "playVideo"
      } : {
        method: "play",
        value: "true"
      }), void (i && t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"));
      "youtube" === t.vendor && (i = {
        event: "listening",
        id: t.$iframe.getAttribute("id")
      }, t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*")), t.poller = setTimeout(e, 250);
    };

    e();
  }

  onUnselectSlide(t, e, i) {
    if ("html5video" === i.type) {
      try {
        i.$el.querySelector("video").pause();
      } catch (t) {}

      return;
    }

    let s = !1;
    "vimeo" == i.vendor ? s = {
      method: "pause",
      value: "true"
    } : "youtube" === i.vendor && (s = {
      event: "command",
      func: "pauseVideo"
    }), s && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(s), "*"), clearTimeout(i.poller);
  }

  onRemoveSlide(t, e, i) {
    i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);
    const s = i.$content;
    "inline" === i.type && s && (s.classList.remove("fancybox__content"), "none" !== s.style.display && (s.style.display = "none"), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null));
    const n = s && s.$placeHolder;
    n && (n.parentNode.insertBefore(s, n), n.remove(), s.$placeHolder = null);
  }

  onMessage(t) {
    try {
      let e = JSON.parse(t.data);

      if ("https://player.vimeo.com" === t.origin) {
        if ("ready" === e.event) for (let e of document.getElementsByClassName("fancybox__iframe")) e.contentWindow === t.source && (e.isReady = 1);
      } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1);
    } catch (t) {}
  }

  attach() {
    this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
  }

  detach() {
    this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
  }

}

$.defaults = w;

class S {
  constructor(t) {
    this.fancybox = t;

    for (const t of ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]) this[t] = this[t].bind(this);

    this.events = {
      ready: this.onReady,
      closing: this.onClosing,
      done: this.onDone,
      "Carousel.change": this.onPageChange,
      "Carousel.createSlide": this.onCreateSlide,
      "Carousel.removeSlide": this.onRemoveSlide
    };
  }

  onReady() {
    this.fancybox.Carousel.slides.forEach(t => {
      t.$el && this.setContent(t);
    });
  }

  onDone(t, e) {
    this.handleCursor(e);
  }

  onClosing(t) {
    clearTimeout(this.clickTimer), t.Carousel.slides.forEach(t => {
      t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents();
    }), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut();
  }

  onCreateSlide(t, e, i) {
    "ready" === this.fancybox.state && this.setContent(i);
  }

  onRemoveSlide(t, e, i) {
    i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
  }

  setContent(t) {
    if (t.isDom || t.html || t.type && "image" !== t.type) return;
    if (t.$image) return;
    t.type = "image", t.state = "loading";
    const e = document.createElement("div");
    e.style.visibility = "hidden";
    const i = document.createElement("img");
    i.addEventListener("load", e => {
      e.stopImmediatePropagation(), this.onImageStatusChange(t);
    }), i.addEventListener("error", () => {
      this.onImageStatusChange(t);
    }), i.src = t.src, i.alt = "", i.draggable = !1, i.classList.add("fancybox__image"), t.srcset && i.setAttribute("srcset", t.srcset), t.sizes && i.setAttribute("sizes", t.sizes), t.$image = i;
    const s = this.fancybox.option("Image.wrap");

    if (s) {
      const n = document.createElement("div");
      n.classList.add("string" == typeof s ? s : "fancybox__image-wrap"), n.appendChild(i), e.appendChild(n), t.$wrap = n;
    } else e.appendChild(i);

    t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, e), i.complete || i.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t);
  }

  onImageStatusChange(t) {
    const e = t.$image;
    e && "loading" === t.state && (e.complete && e.naturalWidth && e.naturalHeight ? (this.fancybox.hideLoading(t), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", e => this.onWheel(t, e), {
      passive: !1
    }), t.$content.addEventListener("click", e => this.onClick(t, e), {
      passive: !1
    }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
  }

  initSlidePanzoom(t) {
    t.Panzoom || (t.Panzoom = new d(t.$el, e(!0, this.fancybox.option("Image.Panzoom", {}), {
      viewport: t.$wrap,
      content: t.$image,
      wrapInner: !1,
      textSelection: !0,
      touch: this.fancybox.option("Image.touch"),
      panOnlyZoomed: !0,
      click: !1,
      wheel: !1
    })), t.Panzoom.on("startAnimation", () => {
      this.fancybox.trigger("Image.startAnimation", t);
    }), t.Panzoom.on("endAnimation", () => {
      "zoomIn" === t.state && this.fancybox.done(t), this.handleCursor(t), this.fancybox.trigger("Image.endAnimation", t);
    }), t.Panzoom.on("afterUpdate", () => {
      this.handleCursor(t), this.fancybox.trigger("Image.afterUpdate", t);
    }));
  }

  revealContent(t) {
    null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t);
  }

  getZoomInfo(t) {
    const e = t.$thumb.getBoundingClientRect(),
          i = e.width,
          s = e.height,
          n = t.$content.getBoundingClientRect(),
          o = n.width,
          a = n.height,
          r = n.top - e.top,
          l = n.left - e.left;
    let h = this.fancybox.option("Image.zoomOpacity");
    return "auto" === h && (h = Math.abs(i / s - o / a) > .1), {
      top: r,
      left: l,
      scale: e.width / o,
      opacity: h
    };
  }

  canZoom(t) {
    const e = this.fancybox,
          i = e.$container;
    if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
    if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;
    const s = t.$thumb;
    if (!s || "loading" === t.state) return !1;
    i.classList.add("fancybox__no-click");
    const n = s.getBoundingClientRect();
    let o;

    if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
      const t = document.elementFromPoint(n.left + 1, n.top + 1) === s,
            e = document.elementFromPoint(n.right - 1, n.bottom - 1) === s;
      o = t && e;
    } else o = document.elementFromPoint(n.left + .5 * n.width, n.top + .5 * n.height) === s;

    return i.classList.remove("fancybox__no-click"), o;
  }

  zoomIn() {
    const t = this.fancybox,
          e = t.getSlide(),
          i = e.Panzoom,
          {
      top: s,
      left: n,
      scale: o,
      opacity: a
    } = this.getZoomInfo(e);
    e.state = "zoomIn", t.trigger("reveal", e), i.panTo({
      x: -1 * n,
      y: -1 * s,
      scale: o,
      friction: 0,
      ignoreBounds: !0
    }), e.$content.style.visibility = "", !0 === a && i.on("afterTransform", t => {
      "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - o)));
    }), i.panTo({
      x: 0,
      y: 0,
      scale: 1,
      friction: this.fancybox.option("Image.zoomFriction")
    });
  }

  zoomOut() {
    const t = this.fancybox,
          e = t.getSlide(),
          i = e.Panzoom;
    if (!i) return;
    e.state = "zoomOut", t.state = "customClosing", e.$caption && (e.$caption.style.visibility = "hidden");
    let s = this.fancybox.option("Image.zoomFriction");

    const n = t => {
      const {
        top: n,
        left: o,
        scale: a,
        opacity: r
      } = this.getZoomInfo(e);
      t || r || (s *= .82), i.panTo({
        x: -1 * o,
        y: -1 * n,
        scale: a,
        friction: s,
        ignoreBounds: !0
      }), s *= .98;
    };

    window.addEventListener("scroll", n), i.on("endAnimation", () => {
      window.removeEventListener("scroll", n), t.destroy();
    }), n();
  }

  handleCursor(t) {
    if ("image" !== t.type) return;
    const e = t.Panzoom,
          i = this.fancybox.option("Image.click"),
          s = t.$el.classList;

    if (e && "toggleZoom" === i) {
      s[e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? "add" : "remove"](this.fancybox.option("Image.canZoomInClass"));
    } else "close" === i && s.add(this.fancybox.option("Image.canZoomOutClass"));
  }

  onWheel(t, e) {
    if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {
      case "zoom":
        t.Panzoom && t.Panzoom.zoomWithWheel(e);
        break;

      case "close":
        this.fancybox.close();
        break;

      case "slide":
        this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
    }
  }

  onClick(t, e) {
    if ("ready" !== this.fancybox.state) return;
    const i = t.Panzoom;
    if (i && (i.dragPosition.midPoint || 0 !== i.dragOffset.x || 0 !== i.dragOffset.y || 1 !== i.dragOffset.scale)) return;
    if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;

    const s = i => {
      if (!1 !== this.fancybox.trigger("Image.click", e)) switch (i) {
        case "toggleZoom":
          e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
          break;

        case "close":
          this.fancybox.close();
          break;

        case "next":
          e.stopPropagation(), this.fancybox.next();
      }
    };

    this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null);
    const n = this.fancybox.option("Image.click"),
          o = this.fancybox.option("Image.doubleClick");
    o ? 1 === e.detail ? this.clickTimer = setTimeout(() => {
      s(n);
    }, 300) : 2 === e.detail && s(o) : s(n);
  }

  onPageChange(t, e) {
    const i = t.getSlide();
    e.slides.forEach(t => {
      t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
        x: 0,
        y: 0,
        scale: 1,
        friction: .8
      });
    });
  }

  attach() {
    this.fancybox.on(this.events);
  }

  detach() {
    this.fancybox.off(this.events);
  }

}

S.defaults = {
  canZoomInClass: "can-zoom_in",
  canZoomOutClass: "can-zoom_out",
  zoom: !0,
  zoomOpacity: "auto",
  zoomFriction: .82,
  ignoreCoveredThumbnail: !1,
  touch: !0,
  click: "toggleZoom",
  doubleClick: null,
  wheel: "zoom",
  fit: "contain",
  wrap: !1,
  Panzoom: {
    ratio: 1
  }
};

const C = function () {
  const t = window.location.hash.substr(1),
        e = t.split("-"),
        i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
  return {
    hash: t,
    slug: e.join("-"),
    index: i
  };
};

class E {
  constructor(t) {
    this.fancybox = t;

    for (const t of ["onChange", "onClosing"]) this[t] = this[t].bind(this);

    this.events = {
      initCarousel: this.onChange,
      "Carousel.change": this.onChange,
      closing: this.onClosing
    }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
  }

  onChange() {
    const t = this.fancybox,
          e = t.Carousel;
    this.timer && clearTimeout(this.timer);
    const i = null === e.prevPage,
          s = t.getSlide(),
          n = s.$trigger && s.$trigger.dataset,
          o = window.location.hash.substr(1);
    let a = !1;
    if (s.slug) a = s.slug;else {
      let t = n && n.fancybox;
      t && t.length && "true" !== t && (a = t + (e.slides.length > 1 ? "-" + (s.index + 1) : ""));
    }
    i && (this.origHash = o !== a ? this.origHash : ""), a && o !== a && (this.timer = setTimeout(() => {
      try {
        window.history[i ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + a), i && (this.hasCreatedHistory = !0);
      } catch (t) {}
    }, 300));
  }

  onClosing() {
    if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) {
      if (!this.hasCreatedHistory) try {
        return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash ? "#" + this.origHash : ""));
      } catch (t) {}
      window.history.back();
    }
  }

  attach(t) {
    t.on(this.events);
  }

  detach(t) {
    t.off(this.events);
  }

  static startFromUrl() {
    if (E.Fancybox.getInstance()) return;
    const {
      hash: t,
      slug: e,
      index: i
    } = C();
    if (!e) return;
    let s = document.querySelector(`[data-slug="${t}"]`);
    if (s && s.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })), E.Fancybox.getInstance()) return;
    const n = document.querySelectorAll(`[data-fancybox="${e}"]`);
    n.length && (null === i && 1 === n.length ? s = n[0] : i && (s = n[i - 1]), s && s.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })));
  }

  static onHashChange() {
    const {
      slug: t,
      index: e
    } = C(),
          i = E.Fancybox.getInstance();

    if (i) {
      if (t) {
        const s = i.Carousel;

        for (let e of s.slides) if (e.slug && e.slug === t) return s.slideTo(e.index);

        const n = i.getSlide(),
              o = n.$trigger && n.$trigger.dataset;
        if (o && o.fancybox === t) return s.slideTo(e - 1);
      }

      i.plugins.Hash.hasSilentClose = !0, i.close();
    }

    E.startFromUrl();
  }

  static onReady() {
    window.addEventListener("hashchange", E.onHashChange, !1), E.startFromUrl();
  }

  static create() {
    b && window.requestAnimationFrame(() => {
      E.onReady();
    });
  }

  static destroy() {
    window.removeEventListener("hashchange", E.onHashChange, !1);
  }

}

const P = {
  pageXOffset: 0,
  pageYOffset: 0,
  element: () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,

  activate(t) {
    P.pageXOffset = window.pageXOffset, P.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
  },

  deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  }

};

class T {
  constructor(t) {
    this.fancybox = t, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  isActive() {
    return this.active;
  }

  setTimer() {
    if (!this.active || this.timer) return;
    const t = this.fancybox.option("slideshow.delay", 3e3);
    this.timer = setTimeout(() => {
      this.timer = null, this.fancybox.option("infinite") || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, {
        friction: 0
      });
    }, t);
    let e = this.$progress;
    e || (e = document.createElement("div"), e.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel), this.$progress = e, e.offsetHeight), e.style.transitionDuration = `${t}ms`, e.style.transform = "scaleX(1)";
  }

  clearTimer() {
    clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight);
  }

  activate() {
    this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
  }

  handleVisibilityChange() {
    this.deactivate();
  }

  deactivate() {
    this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
  }

  toggle() {
    this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
  }

}

const L = {
  items: {
    counter: {
      type: "div",
      class: "fancybox__counter",
      html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
      tabindex: -1,
      position: "left"
    },
    prev: {
      type: "button",
      class: "fancybox__button--prev",
      label: "PREV",
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 4l-8 8 8 8"/></svg>',
      click: function (t) {
        t.preventDefault(), this.fancybox.prev();
      }
    },
    next: {
      type: "button",
      class: "fancybox__button--next",
      label: "NEXT",
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M8 4l8 8-8 8"/></svg>',
      click: function (t) {
        t.preventDefault(), this.fancybox.next();
      }
    },
    fullscreen: {
      type: "button",
      class: "fancybox__button--fullscreen",
      label: "TOGGLE_FULLSCREEN",
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
      click: function (t) {
        t.preventDefault(), P.element() ? P.deactivate() : P.activate(this.fancybox.$container);
      }
    },
    slideshow: {
      type: "button",
      class: "fancybox__button--slideshow",
      label: "TOGGLE_SLIDESHOW",
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
      click: function (t) {
        t.preventDefault(), this.Slideshow.toggle();
      }
    },
    zoom: {
      type: "button",
      class: "fancybox__button--zoom",
      label: "TOGGLE_ZOOM",
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
      click: function (t) {
        t.preventDefault();
        const e = this.fancybox.getSlide().Panzoom;
        e && e.toggleZoom();
      }
    },
    download: {
      type: "link",
      label: "DOWNLOAD",
      class: "fancybox__button--download",
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
      click: function (t) {
        t.stopPropagation();
      }
    },
    thumbs: {
      type: "button",
      label: "TOGGLE_THUMBS",
      class: "fancybox__button--thumbs",
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
      click: function (t) {
        t.stopPropagation();
        const e = this.fancybox.plugins.Thumbs;
        e && e.toggle();
      }
    },
    close: {
      type: "button",
      label: "CLOSE",
      class: "fancybox__button--close",
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
      tabindex: 1,
      click: function (t) {
        t.stopPropagation(), t.preventDefault(), this.fancybox.close();
      }
    }
  },
  display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
  autoEnable: !0
};

class A {
  constructor(t) {
    this.fancybox = t, this.$container = null, this.state = "init";

    for (const t of ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]) this[t] = this[t].bind(this);

    this.events = {
      init: this.onInit,
      prepare: this.onPrepare,
      done: this.onDone,
      keydown: this.onKeydown,
      closing: this.onClosing,
      "Carousel.change": this.onChange,
      "Carousel.settle": this.onSettle,
      "Carousel.Panzoom.touchStart": () => this.onRefresh(),
      "Image.startAnimation": (t, e) => this.onRefresh(e),
      "Image.afterUpdate": (t, e) => this.onRefresh(e)
    };
  }

  onInit() {
    if (this.fancybox.option("Toolbar.autoEnable")) {
      let t = !1;

      for (const e of this.fancybox.items) if ("image" === e.type) {
        t = !0;
        break;
      }

      if (!t) return void (this.state = "disabled");
    }

    for (const e of this.fancybox.option("Toolbar.display")) {
      if ("close" === (t(e) ? e.id : e)) {
        this.fancybox.options.closeButton = !1;
        break;
      }
    }
  }

  onPrepare() {
    if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new T(this.fancybox), !this.fancybox.Carousel.prevPage && (this.fancybox.option("slideshow.autoStart") && this.Slideshow.activate(), this.fancybox.option("fullscreen.autoStart") && !P.element()))) try {
      P.activate(this.fancybox.$container);
    } catch (t) {}
  }

  onFsChange() {
    window.scrollTo(P.pageXOffset, P.pageYOffset);
  }

  onSettle() {
    this.Slideshow && this.Slideshow.isActive() && (this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 || this.fancybox.option("infinite") ? "done" === this.fancybox.getSlide().state && this.Slideshow.setTimer() : this.Slideshow.deactivate());
  }

  onChange() {
    this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
  }

  onDone(t, e) {
    e.index === t.getSlide().index && (this.update(), this.Slideshow && this.Slideshow.isActive() && (this.fancybox.option("infinite") || e.index !== this.fancybox.Carousel.slides.length - 1 ? this.Slideshow.setTimer() : this.Slideshow.deactivate()));
  }

  onRefresh(t) {
    t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate());
  }

  onKeydown(t, e, i) {
    " " === e && (this.Slideshow.toggle(), i.preventDefault());
  }

  onClosing() {
    this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
  }

  createElement(t) {
    let e;
    return "div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button"), e.classList.add("carousel__button")), e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), t.class && e.classList.add(...t.class.split(" ")), t.label && e.setAttribute("title", this.fancybox.localize(`{{${t.label}}}`)), t.click && e.addEventListener("click", t.click.bind(this)), "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), "next" === t.id && e.setAttribute("data-fancybox-next", ""), e;
  }

  build() {
    this.cleanup();
    const i = this.fancybox.option("Toolbar.items"),
          s = [{
      position: "left",
      items: []
    }, {
      position: "center",
      items: []
    }, {
      position: "right",
      items: []
    }],
          n = this.fancybox.plugins.Thumbs;

    for (const o of this.fancybox.option("Toolbar.display")) {
      let a, r;
      if (t(o) ? (a = o.id, r = e({}, i[a], o)) : (a = o, r = i[a]), ["counter", "next", "prev", "slideshow"].includes(a) && this.fancybox.items.length < 2) continue;

      if ("fullscreen" === a) {
        if (!document.fullscreenEnabled || window.fullScreen) continue;
        document.addEventListener("fullscreenchange", this.onFsChange);
      }

      if ("thumbs" === a && (!n || "disabled" === n.state)) continue;
      if (!r) continue;
      let l = r.position || "right",
          h = s.find(t => t.position === l);
      h && h.items.push(r);
    }

    const o = document.createElement("div");
    o.classList.add("fancybox__toolbar");

    for (const t of s) if (t.items.length) {
      const e = document.createElement("div");
      e.classList.add("fancybox__toolbar__items"), e.classList.add(`fancybox__toolbar__items--${t.position}`);

      for (const i of t.items) e.appendChild(this.createElement(i));

      o.appendChild(e);
    }

    this.fancybox.$carousel.parentNode.insertBefore(o, this.fancybox.$carousel), this.$container = o;
  }

  update() {
    const t = this.fancybox.getSlide(),
          e = t.index,
          i = this.fancybox.items.length,
          s = t.downloadSrc || ("image" !== t.type || t.error ? null : t.src);

    for (const t of this.fancybox.$container.querySelectorAll("a.fancybox__button--download")) s ? (t.removeAttribute("disabled"), t.setAttribute("href", s), t.setAttribute("download", s), t.setAttribute("target", "_blank")) : (t.setAttribute("disabled", ""), t.removeAttribute("href"), t.removeAttribute("download"));

    const n = t.Panzoom,
          o = n && n.option("maxScale") > n.option("baseScale");

    for (const t of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")) o ? t.removeAttribute("disabled") : t.setAttribute("disabled", "");

    for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-index]")) e.innerHTML = t.index + 1;

    for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-count]")) t.innerHTML = i;

    if (!this.fancybox.option("infinite")) {
      for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")) 0 === e ? t.setAttribute("disabled", "") : t.removeAttribute("disabled");

      for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-next]")) e === i - 1 ? t.setAttribute("disabled", "") : t.removeAttribute("disabled");
    }
  }

  cleanup() {
    this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null;
  }

  attach() {
    this.fancybox.on(this.events);
  }

  detach() {
    this.fancybox.off(this.events), this.cleanup();
  }

}

A.defaults = L;
const k = {
  ScrollLock: class {
    constructor(t) {
      this.fancybox = t, this.viewport = null, this.pendingUpdate = null;

      for (const t of ["onReady", "onResize", "onTouchstart", "onTouchmove"]) this[t] = this[t].bind(this);
    }

    onReady() {
      const t = window.visualViewport;
      t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
        passive: !1
      }), window.addEventListener("touchmove", this.onTouchmove, {
        passive: !1
      });
    }

    onResize() {
      this.updateViewport();
    }

    updateViewport() {
      const t = this.fancybox,
            e = this.viewport,
            i = e.scale || 1,
            s = t.$container;
      if (!s) return;
      let n = "",
          o = "",
          a = "";
      i - 1 > .1 && (n = e.width * i + "px", o = e.height * i + "px", a = `translate3d(${e.offsetLeft}px, ${e.offsetTop}px, 0) scale(${1 / i})`), s.style.width = n, s.style.height = o, s.style.transform = a;
    }

    onTouchstart(t) {
      this.startY = t.touches ? t.touches[0].screenY : t.screenY;
    }

    onTouchmove(t) {
      const e = this.startY,
            i = window.innerWidth / window.document.documentElement.clientWidth;
      if (t.touches.length > 1 || 1 !== i) return;
      const s = t.target,
            n = l(s);
      if (!n) return void t.preventDefault();
      const o = window.getComputedStyle(n),
            a = parseInt(o.getPropertyValue("height"), 10),
            r = t.touches ? t.touches[0].screenY : t.screenY,
            h = e <= r && 0 === n.scrollTop,
            c = e >= r && n.scrollHeight - n.scrollTop === a;
      (h || c) && t.preventDefault();
    }

    cleanup() {
      this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
      const t = this.viewport;
      t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1);
    }

    attach() {
      this.fancybox.on("initLayout", this.onReady);
    }

    detach() {
      this.fancybox.off("initLayout", this.onReady), this.cleanup();
    }

  },
  Thumbs: v,
  Html: $,
  Toolbar: A,
  Image: S,
  Hash: E
};
const z = {
  startIndex: 0,
  preload: 1,
  infinite: !0,
  showClass: "fancybox-zoomInUp",
  hideClass: "fancybox-fadeOut",
  animated: !0,
  hideScrollbar: !0,
  parentEl: null,
  mainClass: null,
  autoFocus: !0,
  trapFocus: !0,
  placeFocusBack: !0,
  click: "close",
  closeButton: "inside",
  dragToClose: !0,
  keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "next",
    ArrowDown: "prev",
    ArrowRight: "next",
    ArrowLeft: "prev"
  },
  template: {
    closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
    spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
    main: null
  },
  l10n: {
    CLOSE: "Close",
    NEXT: "Next",
    PREV: "Previous",
    MODAL: "You can close this modal content with the ESC key",
    ERROR: "Something Went Wrong, Please Try Again Later",
    IMAGE_ERROR: "Image Not Found",
    ELEMENT_NOT_FOUND: "HTML Element Not Found",
    AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
    AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
    IFRAME_ERROR: "Error Loading Page",
    TOGGLE_ZOOM: "Toggle zoom level",
    TOGGLE_THUMBS: "Toggle thumbnails",
    TOGGLE_SLIDESHOW: "Toggle slideshow",
    TOGGLE_FULLSCREEN: "Toggle full-screen mode",
    DOWNLOAD: "Download"
  }
};
let _ = 0;

class O extends h {
  constructor(t, i = {}) {
    super(e(!0, {}, z, i)), this.bindHandlers(), this.state = "init", this.setItems(t), this.attachPlugins(O.Plugins), this.trigger("init"), !0 === this.option("hideScrollbar") && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), this.focus();
  }

  bindHandlers() {
    for (const t of ["onMousedown", "onKeydown", "onClick", "onCreateSlide", "onTouchMove", "onTouchEnd", "onTransform"]) this[t] = this[t].bind(this);
  }

  attachEvents() {
    document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown), this.$container.addEventListener("click", this.onClick);
  }

  detachEvents() {
    document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown), this.$container.removeEventListener("click", this.onClick);
  }

  initLayout() {
    this.$root = this.option("parentEl") || document.body;
    let t = this.option("template.main");
    t && (this.$root.insertAdjacentHTML("beforeend", this.localize(t)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = () => (this.$container.scrollLeft = 0, !1), Object.entries({
      class: "fancybox__container",
      role: "dialog",
      "aria-modal": "true",
      "aria-hidden": "true",
      "aria-label": this.localize("{{MODAL}}")
    }).forEach(t => this.$container.setAttribute(...t)), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++_, this.$container.setAttribute("id", "fancybox-" + this.id));
    const e = this.options.mainClass;
    return e && this.$container.classList.add(...e.split(" ")), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
  }

  setItems(t) {
    const e = [];

    for (const i of t) {
      const t = i.$trigger;

      if (t) {
        const e = t.dataset || {};
        i.src = e.src || t.getAttribute("href") || i.src, i.type = e.type || i.type, !i.src && t instanceof HTMLImageElement && (i.src = t.currentSrc || i.$trigger.src);
      }

      let s = i.$thumb;

      if (!s) {
        let t = i.$trigger && i.$trigger.origTarget;
        t && (s = t instanceof HTMLImageElement ? t : t.querySelector("img")), !s && i.$trigger && (s = i.$trigger instanceof HTMLImageElement ? i.$trigger : i.$trigger.querySelector("img"));
      }

      i.$thumb = s || null;
      let n = i.thumb;
      !n && i.$thumb && (n = s.currentSrc || s.src), n || "image" !== i.type || (n = i.src), i.thumb = n || null, i.caption = i.caption || "", e.push(i);
    }

    this.items = e;
  }

  initCarousel() {
    return this.Carousel = new y(this.$carousel, e(!0, {}, {
      classNames: {
        viewport: "fancybox__viewport",
        track: "fancybox__track",
        slide: "fancybox__slide"
      },
      textSelection: !0,
      preload: this.option("preload"),
      friction: .88,
      slides: this.items,
      initialPage: this.options.startIndex,
      slidesPerPage: 1,
      infiniteX: this.option("infinite"),
      infiniteY: !0,
      l10n: this.option("l10n"),
      Dots: !1,
      Navigation: {
        classNames: {
          main: "fancybox__nav",
          button: "carousel__button",
          next: "is-next",
          prev: "is-prev"
        }
      },
      Panzoom: {
        textSelection: !0,
        panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.options.dragToClose,
        lockAxis: () => {
          if (this.Carousel) {
            let t = "x";
            return this.options.dragToClose && (t += "y"), t;
          }
        }
      },
      on: {
        "*": (t, ...e) => this.trigger(`Carousel.${t}`, ...e),
        init: t => this.Carousel = t,
        createSlide: this.onCreateSlide
      }
    }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
      touchMove: this.onTouchMove,
      afterTransform: this.onTransform,
      touchEnd: this.onTouchEnd
    }), this.trigger("initCarousel"), this;
  }

  onCreateSlide(t, e) {
    let i = e.caption || "";

    if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), "string" == typeof i && i.length) {
      const t = document.createElement("div"),
            s = `fancybox__caption_${this.id}_${e.index}`;
      t.className = "fancybox__caption", t.innerHTML = i, t.setAttribute("id", s), e.$caption = e.$el.appendChild(t), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", s);
    }
  }

  onClick(t) {
    if (t.defaultPrevented) return;
    if (t.target.closest(".fancybox__content")) return;
    if (window.getSelection().toString().length) return;
    if (!1 === this.trigger("click", t)) return;

    switch (this.option("click")) {
      case "close":
        this.close();
        break;

      case "next":
        this.next();
    }
  }

  onTouchMove() {
    const t = this.getSlide().Panzoom;
    return !t || 1 === t.content.scale;
  }

  onTouchEnd(t) {
    const e = t.dragOffset.y;
    Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === t.lockAxis && t.panTo({
      y: 0
    });
  }

  onTransform(t) {
    if (this.$backdrop) {
      const e = Math.abs(t.content.y),
            i = e < 1 ? "" : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5));
      this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i);
    }
  }

  onMousedown() {
    document.body.classList.add("is-using-mouse");
  }

  onKeydown(t) {
    if (O.getInstance().id !== this.id) return;
    document.body.classList.remove("is-using-mouse");
    const e = t.key;
    if ("Tab" === e && this.option("trapFocus")) return void this.focus(t);
    const i = this.option("keyboard");
    if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
    const s = document.activeElement && document.activeElement.classList,
          n = s && s.contains("carousel__button");

    if ("Escape" !== e && !n) {
      if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(t.target.nodeName)) return;
    }

    if (!1 === this.trigger("keydown", e, t)) return;
    const o = i[e];
    "function" == typeof this[o] && this[o]();
  }

  getSlide() {
    const t = this.Carousel;
    if (!t) return null;
    const e = null === t.page ? t.option("initialPage") : t.page,
          i = t.pages || [];
    return i.length && i[e] ? i[e].slides[0] : null;
  }

  focus(t) {
    void 0 === O.preventScrollSupported && (O.preventScrollSupported = function () {
      let t = !1;
      return document.createElement("div").focus({
        get preventScroll() {
          return t = !0, !1;
        }

      }), t;
    }());

    const e = t => {
      t.setActive ? t.setActive() : O.preventScrollSupported ? t.focus({
        preventScroll: !0
      }) : t.focus();
    };

    if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1) return;
    t && t.preventDefault();
    const i = this.getSlide().$el;
    if (!i) return;
    i.tabIndex = 0;
    const s = [].slice.call(this.$container.querySelectorAll(["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])']));
    let n = [];

    for (let t of s) {
      if (t.classList && t.classList.contains("fancybox__slide")) continue;
      const e = t.closest(".fancybox__slide");
      e ? e === i && n[t.hasAttribute("autofocus") ? "unshift" : "push"](t) : n.push(t);
    }

    if (!n.length) return;
    this.Carousel.pages.length > 1 && n.push(i), n.sort(function (t, e) {
      return t.tabIndex > e.tabIndex ? -1 : t.tabIndex < e.tabIndex ? 1 : 0;
    });
    const o = n.indexOf(document.activeElement),
          a = t && !t.shiftKey,
          r = t && t.shiftKey;
    return a ? o === n.length - 1 ? e(n[0]) : e(n[o + 1]) : r ? e(0 === o ? n[n.length - 1] : n[o - 1]) : o < 0 ? e(n[0]) : void 0;
  }

  hideScrollbar() {
    if (!b) return;
    const t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
          e = "fancybox-style-noscroll";
    let i = document.getElementById(e);
    i || t > 0 && (i = document.createElement("style"), i.id = e, i.type = "text/css", i.innerHTML = `.compensate-for-scrollbar {padding-right: ${t}px;}`, document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"));
  }

  revealScrollbar() {
    document.body.classList.remove("compensate-for-scrollbar");
    const t = document.getElementById("fancybox-style-noscroll");
    t && t.remove();
  }

  clearContent(t) {
    this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), t._className && t.$el.classList.remove(t._className);
  }

  setContent(t, e, i = {}) {
    let s;
    const n = t.$el;
    if (e instanceof HTMLElement ? ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (s = document.createElement("div"), s.appendChild(e)) : s = e : (s = document.createElement("div"), s.innerHTML = e), !(s instanceof Element)) throw new Error("Element expected");
    return t._className = `has-${i.suffix || t.type || "unknown"}`, n.classList.add(t._className), s.classList.add("fancybox__content"), "none" !== s.style.display && "none" !== window.getComputedStyle(s).getPropertyValue("display") || (s.style.display = "flex"), t.id && s.setAttribute("id", t.id), t.$content = s, n.prepend(s), this.manageCloseButton(t), "loading" !== t.state && this.revealContent(t), s;
  }

  manageCloseButton(t) {
    const e = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
    if (!e || "top" === e && this.$closeButton) return;
    const i = document.createElement("button");
    i.classList.add("carousel__button", "is-close"), i.setAttribute("title", this.options.l10n.CLOSE), i.innerHTML = this.option("template.closeButton"), i.addEventListener("click", t => this.close(t)), "inside" === e ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(i)) : this.$closeButton = this.$container.insertBefore(i, this.$container.firstChild);
  }

  revealContent(t) {
    this.trigger("reveal", t), t.$content.style.visibility = "";
    let e = !1;
    t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (e = void 0 === t.showClass ? this.option("showClass") : t.showClass), e ? (t.state = "animating", this.animateCSS(t.$content, e, () => {
      this.done(t);
    })) : this.done(t);
  }

  animateCSS(t, e, i) {
    if (t && t.dispatchEvent(new CustomEvent("animationend", {
      bubbles: !0,
      cancelable: !0
    })), !t || !e) return void ("function" == typeof i && i());

    const s = function (n) {
      n.currentTarget === this && (t.removeEventListener("animationend", s), i && i(), t.classList.remove(e));
    };

    t.addEventListener("animationend", s), t.classList.add(e);
  }

  done(t) {
    t.state = "done", this.trigger("done", t);
    const e = this.getSlide();
    e && t.index === e.index && this.option("autoFocus") && this.focus();
  }

  setError(t, e) {
    t.error = e, this.hideLoading(t), this.clearContent(t);
    const i = document.createElement("div");
    i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, {
      suffix: "error"
    });
  }

  showLoading(t) {
    t.state = "loading", t.$el.classList.add("is-loading");
    let e = t.$el.querySelector(".fancybox__spinner");
    e || (e = document.createElement("div"), e.classList.add("fancybox__spinner"), e.innerHTML = this.option("template.spinner"), e.addEventListener("click", () => {
      this.Carousel.Panzoom.velocity || this.close();
    }), t.$el.prepend(e));
  }

  hideLoading(t) {
    const e = t.$el && t.$el.querySelector(".fancybox__spinner");
    e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), t.state = "ready");
  }

  next() {
    const t = this.Carousel;
    t && t.pages.length > 1 && t.slideNext();
  }

  prev() {
    const t = this.Carousel;
    t && t.pages.length > 1 && t.slidePrev();
  }

  jumpTo(...t) {
    this.Carousel && this.Carousel.slideTo(...t);
  }

  close(t) {
    if (t && t.preventDefault(), ["closing", "customClosing", "destroy"].indexOf(this.state) > -1) return;
    if (!1 === this.trigger("shouldClose", t)) return;
    if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" === this.state) return;
    this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
    const e = this.getSlide();

    if (this.Carousel.slides.forEach(t => {
      t.$content && t.index !== e.index && this.Carousel.trigger("removeSlide", t);
    }), "closing" === this.state) {
      const t = void 0 === e.hideClass ? this.option("hideClass") : e.hideClass;
      this.animateCSS(e.$content, t, () => {
        this.destroy();
      }, !0);
    }
  }

  destroy() {
    this.state = "destroy", this.trigger("destroy");
    const t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
    if (this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t) if (O.preventScrollSupported) t.focus({
      preventScroll: !0
    });else {
      const e = document.body.scrollTop;
      t.focus(), document.body.scrollTop = e;
    }
    const e = O.getInstance();
    e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
  }

  static show(t, e = {}) {
    return new O(t, e);
  }

  static fromEvent(t, e = {}) {
    if (t.defaultPrevented) return;
    if (t.button && 0 !== t.button) return;
    if (t.ctrlKey || t.metaKey || t.shiftKey) return;
    let i,
        s,
        n,
        o = t.target;

    if ((o.matches("[data-fancybox-trigger]") || (o = o.closest("[data-fancybox-trigger]"))) && (i = o && o.dataset && o.dataset.fancyboxTrigger), i) {
      const t = document.querySelectorAll(`[data-fancybox="${i}"]`),
            e = parseInt(o.dataset.fancyboxIndex, 10) || 0;
      o = t.length ? t[e] : o;
    }

    o || (o = t.target), Array.from(O.openers.keys()).reverse().some(e => {
      if (n = o, n.matches(e) || (n = n.closest(e))) return t.preventDefault(), s = e, !0;
    });
    let a = !1;

    if (s) {
      e.event = t, e.target = n, n.origTarget = t.target, a = O.fromOpener(s, e);
      const i = O.getInstance();
      i && "ready" === i.state && t.detail && document.body.classList.add("is-using-mouse");
    }

    return a;
  }

  static fromOpener(t, i = {}) {
    let s = [],
        n = i.startIndex || 0,
        o = i.target || null;
    const a = void 0 === (i = e({}, i, O.openers.get(t))).groupAttr ? "data-fancybox" : i.groupAttr,
          r = a && o && o.getAttribute(`${a}`),
          l = void 0 !== i.groupAll && i.groupAll;
    if (l || r ? (s = [].slice.call(document.querySelectorAll(t)), l || (s = s.filter(t => t.getAttribute(`${a}`) === r))) : s = [o], !s.length) return !1;
    const h = O.getInstance();
    return !(h && s.indexOf(h.options.$trigger) > -1) && (n = o ? s.indexOf(o) : n, s = s.map(function (t) {
      const e = ["false", "0", "no", "null", "undefined"],
            i = ["true", "1", "yes"],
            s = Object.assign({}, t.dataset);

      for (let [t, n] of Object.entries(s)) if ("string" == typeof n || n instanceof String) if (e.indexOf(n) > -1) s[t] = !1;else if (i.indexOf(s[t]) > -1) s[t] = !0;else try {
        s[t] = JSON.parse(n);
      } catch (e) {
        s[t] = n;
      }

      return delete s.fancybox, delete s.type, t instanceof Element && (s.$trigger = t), s;
    }), new O(s, e({}, i, {
      startIndex: n,
      $trigger: o
    })));
  }

  static bind(t, e = {}) {
    if (b) {
      if (!O.openers.size) {
        document.body.addEventListener("click", O.fromEvent, !1);

        for (const [t, e] of Object.entries(O.Plugins || {})) e.Fancybox = this, "function" == typeof e.create && e.create();
      }

      O.openers.set(t, e);
    }
  }

  static unbind(t) {
    O.openers.delete(t), O.openers.size || O.destroy();
  }

  static destroy() {
    let t;

    for (; t = O.getInstance();) t.destroy();

    O.openers = new Map(), document.body.removeEventListener("click", O.fromEvent, !1);
  }

  static getInstance(t) {
    let e = [];
    e = t ? [document.getElementById(`fancybox-${t}`)] : Array.from(document.querySelectorAll(".fancybox__container")).reverse();

    for (const t of e) {
      const e = t && t.Fancybox;
      if (e && "closing" !== e.state && "customClosing" !== e.state) return e;
    }

    return null;
  }

  static close(t = !0) {
    let e = null;

    for (; e = O.getInstance();) if (e.close(), !t) return;
  }

}

exports.Fancybox = O;
O.version = "4.0.0-beta.1", O.defaults = z, O.openers = new Map(), O.Plugins = k, O.bind("[data-fancybox]");
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _ui = require("@fancyapps/ui");

$(function () {
  function phone_mask() {
    $('input.phone-input').inputmask({
      mask: '+7 (999) 999-99-99'
    });
    $("input.phone-input").intlTelInput({
      autoHideDialCode: false,
      autoPlaceholder: "aggressive",
      placeholderNumberType: "MOBILE",
      preferredCountries: ['ru'],
      separateDialCode: true,
      utilsScript: "js/utils.js",
      customPlaceholder: function customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
        return '+' + selectedCountryData.dialCode + ' ' + selectedCountryPlaceholder.replace(/[0-9]/g, '_');
      }
    });
    $("input.phone-input").on("countrychange", function (e, countryData) {
      $(this).val('');
      $(this).inputmask($(this).attr('placeholder').replace(/[_]/g, '9'));
    });
  }

  phone_mask();
  jQuery.validator.addMethod("phoneValidator", function (value, element) {
    return value.length > 0 ? /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g.test(value) : true;
  });
  ['contains-dialog', 'price-dialog', 'order-dialog'].forEach(function (name) {
    $("#".concat(name, " form")).validate({
      rules: {
        phone: {
          required: true,
          phoneValidator: true
        },
        name: 'required',
        policy: 'required'
      },
      errorPlacement: function errorPlacement(error, element) {},
      submitHandler: function submitHandler(form) {
        form.submit();
      }
    });
  });
  $("#price-list-form").validate({
    rules: {
      phone: {
        required: true,
        phoneValidator: true
      },
      policy: 'required'
    },
    errorPlacement: function errorPlacement(error, element) {},
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
  $("#full-catalog-form").validate({
    rules: {
      phone: {
        required: true,
        phoneValidator: true
      },
      policy: 'required'
    },
    errorPlacement: function errorPlacement(error, element) {},
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
  $("#price-form form").validate({
    rules: {
      phone: {
        required: true,
        phoneValidator: true
      },
      name: 'required',
      policy: 'required'
    },
    errorPlacement: function errorPlacement(error, element) {},
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
  $("#calc-request form").validate({
    rules: {
      phone: {
        required: true,
        phoneValidator: true
      },
      name: 'required',
      policy: 'required'
    },
    errorPlacement: function errorPlacement(error, element) {},
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
  $('#actual-price-form').validate({
    rules: {
      phone: {
        required: true,
        phoneValidator: true
      },
      policy: 'required',
      square: 'required',
      name: 'required',
      'room-type': 'required'
    },
    errorPlacement: function errorPlacement(error, element) {},
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
  var sliderEl = document.querySelector(".slider-main");

  if (sliderEl) {
    var logoCarousel = new _ui.Carousel(document.querySelector(".slider-main"), {
      friction: 0.83,
      Dots: true,
      slidesPerPage: 1,
      center: false,
      fill: true
    });
  }

  $('.categories-links li.with-secondary').on('mouseenter', function () {
    toggleSubLinks($(this, true));
  }).on('mouseleave', function () {
    toggleSubLinks($(this), false);
  });

  function toggleSubLinks(el, isOpen) {
    $('.sub-links').removeClass('opened');
    var category = el.data('category');
    $(".sub-links[data-id=".concat(category, "]")).toggleClass('opened', isOpen);
  }

  $('.burger-btn').on('click', function () {
    $('.mobile-menu').addClass('opened');
    $('body').addClass('menu-opened');
  });
  $('.mobile-menu-close').on('click', function () {
    $('.mobile-menu').removeClass('opened');
    $('body').removeClass('menu-opened');
  });
  $('.mobile-menu__backdrop').on('click', function () {
    return $('.mobile-menu').removeClass('opened');
  });
  $('.mobile-menu .arrow-btn').on('click', function () {
    $(this).toggleClass('active');
    $(this).closest('li').toggleClass('active');
    $(this).closest('li').find('.sub-links').slideToggle('opened');
  });
  $('.scroll-btn').click(function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
      scrollTop: $($(this).data('query')).offset().top
    }, 1000);
  });
  $('.calc-form .next-step').click(function () {
    var id = $(this).data('id');
    $('.step').removeClass('active');
    $(".step[data-id=".concat(id, "]")).addClass('active');
  });
  $('.append-room').click(appendRoom);
  $('.rooms ul li').click(activateRoomControls);
  $('.rooms ul li button').click(removeRoom);

  function appendRoom() {
    $('.rooms ul li').removeClass('active');
    var roomsCount = $('.rooms li').length;
    var nextRoomNumber = roomsCount + 1;

    if (roomsCount < 4) {
      $('.rooms ul').append("<li class=\"active\" data-id=\"room".concat(nextRoomNumber, "\">\u041A\u043E\u043C\u043D\u0430\u0442\u0430 ").concat(nextRoomNumber, " <button type=\"button\"></button></li>"));
      $('.rooms-controls').removeClass('active');
      $('.rooms-wrap').append("\n            <div class=\"rooms-controls active\" data-id=\"room".concat(nextRoomNumber, "\">\n          <div class=\"form-item\">\n            <label>\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F, \u043C2</label>\n            <input name=\"square\" type=\"number\" class=\"form-control\" placeholder=\"\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E\">\n          </div>\n\n          <div class=\"form-item\">\n            <label>\u0422\u0438\u043F \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F</label>\n\n            <select name=\"room-type\" class=\"select form-control\">\n              <option>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F</option>\n              <option value=\"\u0421\u043F\u0430\u043B\u044C\u043D\u044F\">\u0421\u043F\u0430\u043B\u044C\u043D\u044F</option>\n              <option value=\"\u0413\u043E\u0441\u0442\u0438\u043D\u043D\u0430\u044F\">\u0413\u043E\u0441\u0442\u0438\u043D\u043D\u0430\u044F</option>\n              <option value=\"\u041A\u0443\u0445\u043D\u044F\">\u041A\u0443\u0445\u043D\u044F</option>\n              <option value=\"\u0414\u0435\u0442\u0441\u043A\u0430\u044F\">\u0414\u0435\u0442\u0441\u043A\u0430\u044F</option>\n            </select>\n          </div>\n\n          <div class=\"two-controls\">\n            <div class=\"form-item\">\n              <label>\u0421\u0442\u043E\u0440\u043E\u043D\u0430 \u0434\u043E\u043C\u0430</label>\n\n              <select name=\"house-side\" class=\"select form-control\">\n                <option>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F</option>\n                <option value=\"\u0422\u0435\u043D\u0435\u0432\u0430\u044F\">\u0422\u0435\u043D\u0435\u0432\u0430\u044F</option>\n                <option value=\"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F\">\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F</option>\n              </select>\n            </div>\n\n            <div class=\"form-item\">\n              <label>\u041E\u043A\u043D\u0430</label>\n\n              <select name=\"windows\" class=\"select form-control\">\n                <option>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F</option>\n                <option value=\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435\">\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435</option>\n                <option value=\"\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u0435\">\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u0435</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        "));
      $('.rooms ul li').click(activateRoomControls);
      $('.rooms ul li button').click(removeRoom);
    }

    if (roomsCount === 3) {
      $(this).remove();
    }
  }

  function removeRoom() {
    if ($('.rooms ul li').length > 1) {
      $(this).closest('li').remove();
      $('.rooms ul li').last().addClass('active');
      $(".rooms-controls[data-id=".concat($(this).closest('li').data('id'), "]")).remove();
      $('.rooms-controls').last().addClass('active');

      if (!document.querySelector('.step[data-id=step1] .append-room')) {
        $('.step[data-id=step1] .calc-form__actions').prepend($('<button class="btn btn--outline append-room" type="button">Добавить комнату</button>'));
        $('.append-room').click(appendRoom);
      }

      if ($('.rooms ul li').length === 1) {
        $('.rooms ul li').first().addClass('active');
        $('.rooms-controls').first().addClass('active');
      }

      reorderRooms();
    }
  }

  function reorderRooms() {
    $('.rooms li').each(function (index, el) {
      el.setAttribute('data-id', "room".concat(index + 1));
      el.innerHTML = "\u041A\u043E\u043C\u043D\u0430\u0442\u0430 ".concat(index + 1, " <button type=\"button\"></button>");
    });
    $('.rooms-controls').each(function (index, el) {
      el.setAttribute('data-id', "room".concat(index + 1));
    });
    $('.rooms ul li button').click(removeRoom);
  }

  function activateRoomControls() {
    var room = $(this).data('id');
    $('.rooms ul li').removeClass('active');
    $(this).addClass('active');
    $('.rooms-controls').removeClass('active');
    $(".rooms-controls[data-id=".concat(room, "]")).addClass('active');
  }
});
},{"@fancyapps/ui":"../node_modules/@fancyapps/ui/dist/fancybox.esm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61450" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map