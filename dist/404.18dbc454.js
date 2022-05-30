// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hGw59":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
var _ui = require("@fancyapps/ui");
var _carouselAutoplayEsm = require("@fancyapps/ui/dist/carousel.autoplay.esm");
(0, _ui.Carousel).Plugins.Autoplay = (0, _carouselAutoplayEsm.Autoplay);
$(function() {
    function phone_mask() {
        $("input.phone-input").inputmask({
            mask: "+7 (999) 999-99-99"
        });
        $("input.phone-input").intlTelInput({
            autoHideDialCode: false,
            autoPlaceholder: "aggressive",
            placeholderNumberType: "MOBILE",
            preferredCountries: [
                "ru"
            ],
            separateDialCode: true,
            utilsScript: "js/utils.js",
            customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                return "+" + selectedCountryData.dialCode + " " + selectedCountryPlaceholder.replace(/[0-9]/g, "_");
            }
        });
        $("input.phone-input").on("countrychange", function(e, countryData) {
            $(this).val("");
            $(this).inputmask($(this).attr("placeholder").replace(/[_]/g, "9"));
        });
    }
    phone_mask();
    jQuery.validator.addMethod("phoneValidator", function(value, element) {
        return value.length > 0 ? /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g.test(value) : true;
    });
    [
        "contains-dialog",
        "price-dialog",
        "order-dialog"
    ].forEach((name)=>{
        $(`#${name} form`).validate({
            rules: {
                phone: {
                    required: true,
                    phoneValidator: true
                },
                name: "required",
                policy: "required"
            },
            errorPlacement: function(error, element) {},
            submitHandler: function(form) {
                form.submit();
            }
        });
    });
    $(`#price-list-form`).validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            policy: "required"
        },
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            form.submit();
        }
    });
    $(`#full-catalog-form`).validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            policy: "required"
        },
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            form.submit();
        }
    });
    $(`#price-form form`).validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            name: "required",
            policy: "required"
        },
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            form.submit();
        }
    });
    $(`#calc-request form`).validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            name: "required",
            policy: "required"
        },
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            form.submit();
        }
    });
    $("#actual-price-form").validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            policy: "required",
            square: "required",
            name: "required",
            "room-type": "required"
        },
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            form.submit();
        }
    });
    const sliderEl = document.querySelector(".slider-main");
    if (sliderEl) new (0, _ui.Carousel)(document.querySelector(".slider-main"), {
        friction: 0.83,
        Dots: true,
        slidesPerPage: 1,
        center: false,
        fill: true,
        Autoplay: {
            timeout: 4500
        }
    });
    $(".categories-links li.with-secondary").on("mouseenter", function() {
        toggleSubLinks($(this, true));
    }).on("mouseleave", function() {
        toggleSubLinks($(this), false);
    });
    function toggleSubLinks(el, isOpen) {
        $(".sub-links").removeClass("opened");
        let category = el.data("category");
        $(`.sub-links[data-id=${category}]`).toggleClass("opened", isOpen);
    }
    $(".burger-btn").on("click", function() {
        $(".mobile-menu").addClass("opened");
        $("body").addClass("menu-opened");
    });
    $(".mobile-menu-close").on("click", function() {
        $(".mobile-menu").removeClass("opened");
        $("body").removeClass("menu-opened");
    });
    $(".mobile-menu__backdrop").on("click", ()=>$(".mobile-menu").removeClass("opened"));
    $(".mobile-menu li.with-secondary > div").on("click", function() {
        $(this).find(".arrow-btn").toggleClass("active");
        $(this).closest("li").toggleClass("active");
        $(this).closest("li").find(".sub-links").slideToggle("opened");
    });
    $(".scroll-btn").click(function(e) {
        e.preventDefault();
        $([
            document.documentElement,
            document.body
        ]).animate({
            scrollTop: $($(this).data("query")).offset().top
        }, 1000);
    });
    $(".calc-form .next-step").click(function() {
        const id = $(this).data("id");
        $(".step").removeClass("active");
        $(`.step[data-id=${id}]`).addClass("active");
    });
    $(".append-room").click(appendRoom);
    $(".rooms ul li").click(activateRoomControls);
    $(".rooms ul li button").click(removeRoom);
    function appendRoom() {
        $(".rooms ul li").removeClass("active");
        const roomsCount = $(".rooms li").length;
        const nextRoomNumber = roomsCount + 1;
        if (roomsCount < 4) {
            $(".rooms ul").append(`<li class="active" data-id="room${nextRoomNumber}">Комната ${nextRoomNumber} <button type="button"></button></li>`);
            $(".rooms-controls").removeClass("active");
            $(".rooms-wrap").append(`
            <div class="rooms-controls active" data-id="room${nextRoomNumber}">
          <div class="form-item">
            <label>Площадь помещения, м2</label>
            <input name="square" type="number" class="form-control" placeholder="Не указано">
          </div>

          <div class="form-item">
            <label>Тип помещения</label>

            <select name="room-type" class="select form-control">
              <option>Выберите тип</option>
              <option value="Спальня">Спальня</option>
              <option value="Гостинная">Гостинная</option>
              <option value="Кухня">Кухня</option>
              <option value="Детская">Детская</option>
            </select>
          </div>

          <div class="two-controls">
            <div class="form-item">
              <label>Сторона дома</label>

              <select name="house-side" class="select form-control">
                <option>Выберите тип</option>
                <option value="Теневая">Теневая</option>
                <option value="Солнечная">Солнечная</option>
              </select>
            </div>

            <div class="form-item">
              <label>Окна</label>

              <select name="windows" class="select form-control">
                <option>Выберите тип</option>
                <option value="Стандартные">Стандартные</option>
                <option value="Панорамные">Панорамные</option>
              </select>
            </div>
          </div>
        </div>
        `);
            $(".rooms ul li").click(activateRoomControls);
            $(".rooms ul li button").click(removeRoom);
        }
        if (roomsCount === 3) $(this).remove();
    }
    function removeRoom() {
        if ($(".rooms ul li").length > 1) {
            $(this).closest("li").remove();
            $(".rooms ul li").last().addClass("active");
            $(`.rooms-controls[data-id=${$(this).closest("li").data("id")}]`).remove();
            $(".rooms-controls").last().addClass("active");
            if (!document.querySelector(".step[data-id=step1] .append-room")) {
                $(".step[data-id=step1] .calc-form__actions").prepend($('<button class="btn btn--outline append-room" type="button">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043D\u0430\u0442\u0443</button>'));
                $(".append-room").click(appendRoom);
            }
            if ($(".rooms ul li").length === 1) {
                $(".rooms ul li").first().addClass("active");
                $(".rooms-controls").first().addClass("active");
            }
            reorderRooms();
        }
    }
    function reorderRooms() {
        $(".rooms li").each(function(index, el) {
            el.setAttribute("data-id", `room${index + 1}`);
            el.innerHTML = `Комната ${index + 1} <button type="button"></button>`;
        });
        $(".rooms-controls").each(function(index, el) {
            el.setAttribute("data-id", `room${index + 1}`);
        });
        $(".rooms ul li button").click(removeRoom);
    }
    function activateRoomControls() {
        const room = $(this).data("id");
        $(".rooms ul li").removeClass("active");
        $(this).addClass("active");
        $(".rooms-controls").removeClass("active");
        $(`.rooms-controls[data-id=${room}]`).addClass("active");
    }
});

},{"@fancyapps/ui":"5pga8","@fancyapps/ui/dist/carousel.autoplay.esm":"dqKoI"}],"5pga8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Carousel", ()=>y);
parcelHelpers.export(exports, "Fancybox", ()=>F);
parcelHelpers.export(exports, "Panzoom", ()=>d);
// @fancyapps/ui/Fancybox v4.0.27
const t = (t2)=>"object" == typeof t2 && null !== t2 && t2.constructor === Object && "[object Object]" === Object.prototype.toString.call(t2), e = (...i2)=>{
    let s1 = !1;
    "boolean" == typeof i2[0] && (s1 = i2.shift());
    let o1 = i2[0];
    if (!o1 || "object" != typeof o1) throw new Error("extendee must be an object");
    const n1 = i2.slice(1), a1 = n1.length;
    for(let i1 = 0; i1 < a1; i1++){
        const a2 = n1[i1];
        for(let i3 in a2)if (a2.hasOwnProperty(i3)) {
            const n2 = a2[i3];
            if (s1 && (Array.isArray(n2) || t(n2))) {
                const t3 = Array.isArray(n2) ? [] : {};
                o1[i3] = e(!0, o1.hasOwnProperty(i3) ? o1[i3] : t3, n2);
            } else o1[i3] = n2;
        }
    }
    return o1;
}, i = (t4, e2 = 1e4)=>(t4 = parseFloat(t4) || 0, Math.round((t4 + Number.EPSILON) * e2) / e2), s = function(t5) {
    return !!(t5 && "object" == typeof t5 && t5 instanceof Element && t5 !== document.body) && !t5.__Panzoom && (function(t6) {
        const e3 = getComputedStyle(t6)["overflow-y"], i4 = getComputedStyle(t6)["overflow-x"], s2 = ("scroll" === e3 || "auto" === e3) && Math.abs(t6.scrollHeight - t6.clientHeight) > 1, o2 = ("scroll" === i4 || "auto" === i4) && Math.abs(t6.scrollWidth - t6.clientWidth) > 1;
        return s2 || o2;
    }(t5) ? t5 : s(t5.parentNode));
}, o = "undefined" != typeof window && window.ResizeObserver || class {
    constructor(t7){
        this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t7;
    }
    observe(t8) {
        if (this.observables.some((e5)=>e5.el === t8)) return;
        const e4 = {
            el: t8,
            size: {
                height: t8.clientHeight,
                width: t8.clientWidth
            }
        };
        this.observables.push(e4);
    }
    unobserve(t9) {
        this.observables = this.observables.filter((e6)=>e6.el !== t9);
    }
    disconnect() {
        this.observables = [];
    }
    check() {
        const t10 = this.observables.filter((t11)=>{
            const e7 = t11.el.clientHeight, i5 = t11.el.clientWidth;
            if (t11.size.height !== e7 || t11.size.width !== i5) return t11.size.height = e7, t11.size.width = i5, !0;
        }).map((t12)=>t12.el);
        t10.length > 0 && this.callback(t10), window.requestAnimationFrame(this.boundCheck);
    }
};
class n {
    constructor(t13){
        this.id = self.Touch && t13 instanceof Touch ? t13.identifier : -1, this.pageX = t13.pageX, this.pageY = t13.pageY, this.clientX = t13.clientX, this.clientY = t13.clientY;
    }
}
const a = (t14, e8)=>e8 ? Math.sqrt((e8.clientX - t14.clientX) ** 2 + (e8.clientY - t14.clientY) ** 2) : 0, r = (t15, e9)=>e9 ? {
        clientX: (t15.clientX + e9.clientX) / 2,
        clientY: (t15.clientY + e9.clientY) / 2
    } : t15;
class h {
    constructor(t16, { start: e10 = ()=>!0 , move: i6 = ()=>{} , end: s3 = ()=>{}  } = {}){
        this._element = t16, this.startPointers = [], this.currentPointers = [], this._pointerStart = (t17)=>{
            if (t17.buttons > 0 && 0 !== t17.button) return;
            const e11 = new n(t17);
            this.currentPointers.some((t18)=>t18.id === e11.id) || this._triggerPointerStart(e11, t17) && (window.addEventListener("mousemove", this._move), window.addEventListener("mouseup", this._pointerEnd));
        }, this._touchStart = (t19)=>{
            for (const e12 of Array.from(t19.changedTouches || []))this._triggerPointerStart(new n(e12), t19);
        }, this._move = (t21)=>{
            const e15 = this.currentPointers.slice(), i7 = ((t22)=>"changedTouches" in t22)(t21) ? Array.from(t21.changedTouches).map((t23)=>new n(t23)) : [
                new n(t21)
            ];
            for (const t20 of i7){
                const e13 = this.currentPointers.findIndex((e14)=>e14.id === t20.id);
                e13 < 0 || (this.currentPointers[e13] = t20);
            }
            this._moveCallback(e15, this.currentPointers.slice(), t21);
        }, this._triggerPointerEnd = (t24, e16)=>{
            const i8 = this.currentPointers.findIndex((e17)=>e17.id === t24.id);
            return !(i8 < 0) && (this.currentPointers.splice(i8, 1), this.startPointers.splice(i8, 1), this._endCallback(t24, e16), !0);
        }, this._pointerEnd = (t25)=>{
            t25.buttons > 0 && 0 !== t25.button || this._triggerPointerEnd(new n(t25), t25) && (window.removeEventListener("mousemove", this._move, {
                passive: !1
            }), window.removeEventListener("mouseup", this._pointerEnd, {
                passive: !1
            }));
        }, this._touchEnd = (t26)=>{
            for (const e18 of Array.from(t26.changedTouches || []))this._triggerPointerEnd(new n(e18), t26);
        }, this._startCallback = e10, this._moveCallback = i6, this._endCallback = s3, this._element.addEventListener("mousedown", this._pointerStart, {
            passive: !1
        }), this._element.addEventListener("touchstart", this._touchStart, {
            passive: !1
        }), this._element.addEventListener("touchmove", this._move, {
            passive: !1
        }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
    }
    stop() {
        this._element.removeEventListener("mousedown", this._pointerStart, {
            passive: !1
        }), this._element.removeEventListener("touchstart", this._touchStart, {
            passive: !1
        }), this._element.removeEventListener("touchmove", this._move, {
            passive: !1
        }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
    }
    _triggerPointerStart(t27, e19) {
        return !!this._startCallback(t27, e19) && (this.currentPointers.push(t27), this.startPointers.push(t27), !0);
    }
}
class l {
    constructor(t29 = {}){
        this.options = e(!0, {}, t29), this.plugins = [], this.events = {};
        for (const t28 of [
            "on",
            "once"
        ])for (const e20 of Object.entries(this.options[t28] || {}))this[t28](...e20);
    }
    option(t30, e21, ...i9) {
        t30 = String(t30);
        let s4 = (o3 = t30, n3 = this.options, o3.split(".").reduce(function(t31, e22) {
            return t31 && t31[e22];
        }, n3));
        var o3, n3;
        return "function" == typeof s4 && (s4 = s4.call(this, this, ...i9)), void 0 === s4 ? e21 : s4;
    }
    localize(t32, e23 = []) {
        return t32 = (t32 = String(t32).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t34, i10, s5)=>{
            let o4 = "";
            s5 ? o4 = this.option(`${i10[0] + i10.toLowerCase().substring(1)}.l10n.${s5}`) : i10 && (o4 = this.option(`l10n.${i10}`)), o4 || (o4 = t34);
            for(let t33 = 0; t33 < e23.length; t33++)o4 = o4.split(e23[t33][0]).join(e23[t33][1]);
            return o4;
        })).replace(/\{\{(.*)\}\}/, (t, e24)=>e24);
    }
    on(e25, i11) {
        if (t(e25)) {
            for (const t35 of Object.entries(e25))this.on(...t35);
            return this;
        }
        return String(e25).split(" ").forEach((t36)=>{
            const e26 = this.events[t36] = this.events[t36] || [];
            -1 == e26.indexOf(i11) && e26.push(i11);
        }), this;
    }
    once(e27, i12) {
        if (t(e27)) {
            for (const t37 of Object.entries(e27))this.once(...t37);
            return this;
        }
        return String(e27).split(" ").forEach((t38)=>{
            const e28 = (...s6)=>{
                this.off(t38, e28), i12.call(this, this, ...s6);
            };
            e28._ = i12, this.on(t38, e28);
        }), this;
    }
    off(e29, i13) {
        if (!t(e29)) return e29.split(" ").forEach((t41)=>{
            const e30 = this.events[t41];
            if (!e30 || !e30.length) return this;
            let s7 = -1;
            for(let t40 = 0, o5 = e30.length; t40 < o5; t40++){
                const o6 = e30[t40];
                if (o6 && (o6 === i13 || o6._ === i13)) {
                    s7 = t40;
                    break;
                }
            }
            -1 != s7 && e30.splice(s7, 1);
        }), this;
        for (const t39 of Object.entries(e29))this.off(...t39);
    }
    trigger(t42, ...e31) {
        for (const i15 of [
            ...this.events[t42] || []
        ].slice())if (i15 && !1 === i15.call(this, this, ...e31)) return !1;
        for (const i14 of [
            ...this.events["*"] || []
        ].slice())if (i14 && !1 === i14.call(this, t42, this, ...e31)) return !1;
        return !0;
    }
    attachPlugins(t44) {
        const i16 = {};
        for (const [s8, o7] of Object.entries(t44 || {}))!1 === this.options[s8] || this.plugins[s8] || (this.options[s8] = e({}, o7.defaults || {}, this.options[s8]), i16[s8] = new o7(this));
        for (const [t43, e32] of Object.entries(i16))e32.attach(this);
        return this.plugins = Object.assign({}, this.plugins, i16), this;
    }
    detachPlugins() {
        for(const t45 in this.plugins){
            let e33;
            (e33 = this.plugins[t45]) && "function" == typeof e33.detach && e33.detach(this);
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
class d extends l {
    constructor(t47, i17 = {}){
        super(e(!0, {}, c, i17)), this.state = "init", this.$container = t47;
        for (const t46 of [
            "onLoad",
            "onWheel",
            "onClick"
        ])this[t46] = this[t46].bind(this);
        this.initLayout(), this.resetValues(), this.attachPlugins(d.Plugins), this.trigger("init"), this.updateMetrics(), this.attachEvents(), this.trigger("ready"), !1 === this.option("centerOnStart") ? this.state = "ready" : this.panTo({
            friction: 0
        }), t47.__Panzoom = this;
    }
    initLayout() {
        const t48 = this.$container;
        if (!(t48 instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
        const e34 = this.option("content") || t48.querySelector(".panzoom__content");
        if (!e34) throw new Error("Panzoom: Content not found");
        this.$content = e34;
        let i18 = this.option("viewport") || t48.querySelector(".panzoom__viewport");
        i18 || !1 === this.option("wrapInner") || (i18 = document.createElement("div"), i18.classList.add("panzoom__viewport"), i18.append(...t48.childNodes), t48.appendChild(i18)), this.$viewport = i18 || e34.parentNode;
    }
    resetValues() {
        this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
            width: 0,
            height: 0
        }, this.viewport = {
            width: 0,
            height: 0
        }, this.content = {
            origWidth: 0,
            origHeight: 0,
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
    onLoad(t49) {
        this.updateMetrics(), this.panTo({
            scale: this.option("baseScale"),
            friction: 0
        }), this.trigger("load", t49);
    }
    onClick(t50) {
        if (t50.defaultPrevented) return;
        if (this.option("textSelection") && window.getSelection().toString().length) return void t50.stopPropagation();
        const e35 = this.$content.getClientRects()[0];
        if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e35.top - this.dragStart.rect.top) > 1 || Math.abs(e35.left - this.dragStart.rect.left) > 1)) return t50.preventDefault(), void t50.stopPropagation();
        !1 !== this.trigger("click", t50) && this.option("zoom") && "toggleZoom" === this.option("click") && (t50.preventDefault(), t50.stopPropagation(), this.zoomWithClick(t50));
    }
    onWheel(t51) {
        !1 !== this.trigger("wheel", t51) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t51);
    }
    zoomWithWheel(t52) {
        void 0 === this.changedDelta && (this.changedDelta = 0);
        const e36 = Math.max(-1, Math.min(1, -t52.deltaY || -t52.deltaX || t52.wheelDelta || -t52.detail)), i19 = this.content.scale;
        let s9 = i19 * (100 + e36 * this.option("wheelFactor")) / 100;
        if (e36 < 0 && Math.abs(i19 - this.option("minScale")) < .01 || e36 > 0 && Math.abs(i19 - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e36), s9 = i19) : (this.changedDelta = 0, s9 = Math.max(Math.min(s9, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit")) return;
        if (t52.preventDefault(), s9 === i19) return;
        const o8 = this.$content.getBoundingClientRect(), n4 = t52.clientX - o8.left, a3 = t52.clientY - o8.top;
        this.zoomTo(s9, {
            x: n4,
            y: a3
        });
    }
    zoomWithClick(t53) {
        const e37 = this.$content.getClientRects()[0], i20 = t53.clientX - e37.left, s10 = t53.clientY - e37.top;
        this.toggleZoom({
            x: i20,
            y: s10
        });
    }
    attachEvents() {
        this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.$container.addEventListener("click", this.onClick, {
            passive: !1
        }), this.initObserver();
        const t54 = new h(this.$container, {
            start: (e38, i21)=>{
                if (!this.option("touch")) return !1;
                if (this.velocity.scale < 0) return !1;
                const o9 = i21.composedPath()[0];
                if (!t54.currentPointers.length) {
                    if (-1 !== [
                        "BUTTON",
                        "TEXTAREA",
                        "OPTION",
                        "INPUT",
                        "SELECT",
                        "VIDEO"
                    ].indexOf(o9.nodeName)) return !1;
                    if (this.option("textSelection") && ((t56, e39, i22)=>{
                        const s11 = t56.childNodes, o10 = document.createRange();
                        for(let t55 = 0; t55 < s11.length; t55++){
                            const n5 = s11[t55];
                            if (n5.nodeType !== Node.TEXT_NODE) continue;
                            o10.selectNodeContents(n5);
                            const a4 = o10.getBoundingClientRect();
                            if (e39 >= a4.left && i22 >= a4.top && e39 <= a4.right && i22 <= a4.bottom) return n5;
                        }
                        return !1;
                    })(o9, e38.clientX, e38.clientY)) return !1;
                }
                return !s(o9) && !1 !== this.trigger("touchStart", i21) && ("mousedown" === i21.type && i21.preventDefault(), this.state = "pointerdown", this.resetDragPosition(), this.dragPosition.midPoint = null, this.dragPosition.time = Date.now(), !0);
            },
            move: (e40, i23, s12)=>{
                if ("pointerdown" !== this.state) return;
                if (!1 === this.trigger("touchMove", s12)) return void s12.preventDefault();
                if (i23.length < 2 && !0 === this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale")) return;
                if (i23.length > 1 && (!this.option("zoom") || !1 === this.option("pinchToZoom"))) return;
                const o11 = r(e40[0], e40[1]), n6 = r(i23[0], i23[1]), h1 = n6.clientX - o11.clientX, l1 = n6.clientY - o11.clientY, c1 = a(e40[0], e40[1]), d1 = a(i23[0], i23[1]), u1 = c1 && d1 ? d1 / c1 : 1;
                this.dragOffset.x += h1, this.dragOffset.y += l1, this.dragOffset.scale *= u1, this.dragOffset.time = Date.now() - this.dragPosition.time;
                const f1 = 1 === this.dragStart.scale && this.option("lockAxis");
                if (f1 && !this.lockAxis) {
                    if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void s12.preventDefault();
                    const t57 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                    this.lockAxis = t57 > 45 && t57 < 135 ? "y" : "x";
                }
                if ("xy" === f1 || "y" !== this.lockAxis) {
                    if (s12.preventDefault(), s12.stopPropagation(), s12.stopImmediatePropagation(), this.lockAxis && (this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0), this.$container.classList.add(this.option("draggingClass")), this.transform.scale === this.option("baseScale") && "y" === this.lockAxis || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), this.transform.scale === this.option("baseScale") && "x" === this.lockAxis || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, i23.length > 1) {
                        const e41 = r(t54.startPointers[0], t54.startPointers[1]), i24 = e41.clientX - this.dragStart.rect.x, s13 = e41.clientY - this.dragStart.rect.y, { deltaX: o12 , deltaY: a5  } = this.getZoomDelta(this.content.scale * this.dragOffset.scale, i24, s13);
                        this.dragPosition.x -= o12, this.dragPosition.y -= a5, this.dragPosition.midPoint = n6;
                    } else this.setDragResistance();
                    this.transform = {
                        x: this.dragPosition.x,
                        y: this.dragPosition.y,
                        scale: this.dragPosition.scale
                    }, this.startAnimation();
                }
            },
            end: (e42, i25)=>{
                if ("pointerdown" !== this.state) return;
                if (this._dragOffset = {
                    ...this.dragOffset
                }, t54.currentPointers.length) return void this.resetDragPosition();
                if (this.state = "decel", this.friction = this.option("decelFriction"), this.recalculateTransform(), this.$container.classList.remove(this.option("draggingClass")), !1 === this.trigger("touchEnd", i25)) return;
                if ("decel" !== this.state) return;
                const s14 = this.option("minScale");
                if (this.transform.scale < s14) return void this.zoomTo(s14, {
                    friction: .64
                });
                const o13 = this.option("maxScale");
                if (this.transform.scale - o13 > .01) {
                    const t58 = this.dragPosition.midPoint || e42, i26 = this.$content.getClientRects()[0];
                    this.zoomTo(o13, {
                        friction: .64,
                        x: t58.clientX - i26.left,
                        y: t58.clientY - i26.top
                    });
                }
            }
        });
        this.pointerTracker = t54;
    }
    initObserver() {
        this.resizeObserver || (this.resizeObserver = new o(()=>{
            this.updateTimer || (this.updateTimer = setTimeout(()=>{
                const t59 = this.$container.getBoundingClientRect();
                t59.width && t59.height ? ((Math.abs(t59.width - this.container.width) > 1 || Math.abs(t59.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(!0), this.updateMetrics(), this.panTo({
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
        const { x: t60 , y: e43 , scale: i27  } = this.content;
        this.dragStart = {
            rect: this.$content.getBoundingClientRect(),
            x: t60,
            y: e43,
            scale: i27
        }, this.dragPosition = {
            ...this.dragPosition,
            x: t60,
            y: e43,
            scale: i27
        }, this.dragOffset = {
            x: 0,
            y: 0,
            scale: 1,
            time: 0
        };
    }
    updateMetrics(t61) {
        !0 !== t61 && this.trigger("beforeUpdate");
        const e44 = this.$container, s15 = this.$content, o14 = this.$viewport, n7 = s15 instanceof HTMLImageElement, a6 = this.option("zoom"), r1 = this.option("resizeParent", a6);
        let h2 = this.option("width"), l2 = this.option("height"), c2 = h2 || (d2 = s15, Math.max(parseFloat(d2.naturalWidth || 0), parseFloat(d2.width && d2.width.baseVal && d2.width.baseVal.value || 0), parseFloat(d2.offsetWidth || 0), parseFloat(d2.scrollWidth || 0)));
        var d2;
        let u2 = l2 || ((t62)=>Math.max(parseFloat(t62.naturalHeight || 0), parseFloat(t62.height && t62.height.baseVal && t62.height.baseVal.value || 0), parseFloat(t62.offsetHeight || 0), parseFloat(t62.scrollHeight || 0)))(s15);
        Object.assign(s15.style, {
            width: h2 ? `${h2}px` : "",
            height: l2 ? `${l2}px` : "",
            maxWidth: "",
            maxHeight: ""
        }), r1 && Object.assign(o14.style, {
            width: "",
            height: ""
        });
        const f2 = this.option("ratio");
        c2 = i(c2 * f2), u2 = i(u2 * f2), h2 = c2, l2 = u2;
        const g1 = s15.getBoundingClientRect(), p1 = o14.getBoundingClientRect(), m1 = o14 == e44 ? p1 : e44.getBoundingClientRect();
        let y1 = Math.max(o14.offsetWidth, i(p1.width)), v1 = Math.max(o14.offsetHeight, i(p1.height)), b1 = window.getComputedStyle(o14);
        if (y1 -= parseFloat(b1.paddingLeft) + parseFloat(b1.paddingRight), v1 -= parseFloat(b1.paddingTop) + parseFloat(b1.paddingBottom), this.viewport.width = y1, this.viewport.height = v1, a6) {
            if (Math.abs(c2 - g1.width) > .1 || Math.abs(u2 - g1.height) > .1) {
                const t63 = ((t66, e45, i28, s16)=>{
                    const o15 = Math.min(i28 / t66 || 0, s16 / e45);
                    return {
                        width: t66 * o15 || 0,
                        height: e45 * o15 || 0
                    };
                })(c2, u2, Math.min(c2, g1.width), Math.min(u2, g1.height));
                h2 = i(t63.width), l2 = i(t63.height);
            }
            Object.assign(s15.style, {
                width: `${h2}px`,
                height: `${l2}px`,
                transform: ""
            });
        }
        if (r1 && (Object.assign(o14.style, {
            width: `${h2}px`,
            height: `${l2}px`
        }), this.viewport = {
            ...this.viewport,
            width: h2,
            height: l2
        }), n7 && a6 && "function" != typeof this.options.maxScale) {
            const t67 = this.option("maxScale");
            this.options.maxScale = function() {
                return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t67;
            };
        }
        this.content = {
            ...this.content,
            origWidth: c2,
            origHeight: u2,
            fitWidth: h2,
            fitHeight: l2,
            width: h2,
            height: l2,
            scale: 1,
            isZoomable: a6
        }, this.container = {
            width: m1.width,
            height: m1.height
        }, !0 !== t61 && this.trigger("afterUpdate");
    }
    zoomIn(t68) {
        this.zoomTo(this.content.scale + (t68 || this.option("step")));
    }
    zoomOut(t69) {
        this.zoomTo(this.content.scale - (t69 || this.option("step")));
    }
    toggleZoom(t70 = {}) {
        const e46 = this.option("maxScale"), i29 = this.option("baseScale"), s17 = this.content.scale > i29 + .5 * (e46 - i29) ? i29 : e46;
        this.zoomTo(s17, t70);
    }
    zoomTo(t71 = this.option("baseScale"), { x: e47 = null , y: s18 = null  } = {}) {
        t71 = Math.max(Math.min(t71, this.option("maxScale")), this.option("minScale"));
        const o16 = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
        null === e47 && (e47 = this.content.width * o16 * .5), null === s18 && (s18 = this.content.height * o16 * .5);
        const { deltaX: n8 , deltaY: a7  } = this.getZoomDelta(t71, e47, s18);
        e47 = this.content.x - n8, s18 = this.content.y - a7, this.panTo({
            x: e47,
            y: s18,
            scale: t71,
            friction: this.option("zoomFriction")
        });
    }
    getZoomDelta(t72, e48 = 0, i30 = 0) {
        const s19 = this.content.fitWidth * this.content.scale, o17 = this.content.fitHeight * this.content.scale, n9 = e48 > 0 && s19 ? e48 / s19 : 0, a8 = i30 > 0 && o17 ? i30 / o17 : 0;
        return {
            deltaX: (this.content.fitWidth * t72 - s19) * n9,
            deltaY: (this.content.fitHeight * t72 - o17) * a8
        };
    }
    panTo({ x: t73 = this.content.x , y: e49 = this.content.y , scale: i31 , friction: s21 = this.option("friction") , ignoreBounds: o18 = !1  } = {}) {
        if (i31 = i31 || this.content.scale || 1, !o18) {
            const { boundX: s20 , boundY: o19  } = this.getBounds(i31);
            s20 && (t73 = Math.max(Math.min(t73, s20.to), s20.from)), o19 && (e49 = Math.max(Math.min(e49, o19.to), o19.from));
        }
        this.friction = s21, this.transform = {
            ...this.transform,
            x: t73,
            y: e49,
            scale: i31
        }, s21 ? (this.state = "panning", this.velocity = {
            x: (1 / this.friction - 1) * (t73 - this.content.x),
            y: (1 / this.friction - 1) * (e49 - this.content.y),
            scale: (1 / this.friction - 1) * (i31 - this.content.scale)
        }, this.startAnimation()) : this.endAnimation();
    }
    startAnimation() {
        this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(()=>this.animate());
    }
    animate() {
        if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform();
        else if ("pointerdown" !== this.state) return void this.endAnimation();
        this.rAF = requestAnimationFrame(()=>this.animate());
    }
    getBounds(t74) {
        let e50 = this.boundX, s22 = this.boundY;
        if (void 0 !== e50 && void 0 !== s22) return {
            boundX: e50,
            boundY: s22
        };
        e50 = {
            from: 0,
            to: 0
        }, s22 = {
            from: 0,
            to: 0
        }, t74 = t74 || this.transform.scale;
        const o20 = this.content.fitWidth * t74, n10 = this.content.fitHeight * t74, a9 = this.viewport.width, r2 = this.viewport.height;
        if (o20 < a9) {
            const t75 = i(.5 * (a9 - o20));
            e50.from = t75, e50.to = t75;
        } else e50.from = i(a9 - o20);
        if (n10 < r2) {
            const t76 = .5 * (r2 - n10);
            s22.from = t76, s22.to = t76;
        } else s22.from = i(r2 - n10);
        return {
            boundX: e50,
            boundY: s22
        };
    }
    setEdgeForce() {
        if ("decel" !== this.state) return;
        const t77 = this.option("bounceForce"), { boundX: e51 , boundY: i32  } = this.getBounds(Math.max(this.transform.scale, this.content.scale));
        let s23, o21, n11, a10;
        if (e51 && (s23 = this.content.x < e51.from, o21 = this.content.x > e51.to), i32 && (n11 = this.content.y < i32.from, a10 = this.content.y > i32.to), s23 || o21) {
            let i33 = ((s23 ? e51.from : e51.to) - this.content.x) * t77;
            const o22 = this.content.x + (this.velocity.x + i33) / this.friction;
            o22 >= e51.from && o22 <= e51.to && (i33 += this.velocity.x), this.velocity.x = i33, this.recalculateTransform();
        }
        if (n11 || a10) {
            let e52 = ((n11 ? i32.from : i32.to) - this.content.y) * t77;
            const s24 = this.content.y + (e52 + this.velocity.y) / this.friction;
            s24 >= i32.from && s24 <= i32.to && (e52 += this.velocity.y), this.velocity.y = e52, this.recalculateTransform();
        }
    }
    setDragResistance() {
        if ("pointerdown" !== this.state) return;
        const { boundX: t78 , boundY: e53  } = this.getBounds(this.dragPosition.scale);
        let i34, s25, o23, n12;
        if (t78 && (i34 = this.dragPosition.x < t78.from, s25 = this.dragPosition.x > t78.to), e53 && (o23 = this.dragPosition.y < e53.from, n12 = this.dragPosition.y > e53.to), (i34 || s25) && (!i34 || !s25)) {
            const e54 = i34 ? t78.from : t78.to, s26 = e54 - this.dragPosition.x;
            this.dragPosition.x = e54 - .3 * s26;
        }
        if ((o23 || n12) && (!o23 || !n12)) {
            const t79 = o23 ? e53.from : e53.to, i35 = t79 - this.dragPosition.y;
            this.dragPosition.y = t79 - .3 * i35;
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
    setTransform(t80) {
        let e55, s27, o24;
        if (t80 ? (e55 = i(this.transform.x), s27 = i(this.transform.y), o24 = this.transform.scale, this.content = {
            ...this.content,
            x: e55,
            y: s27,
            scale: o24
        }) : (e55 = i(this.content.x), s27 = i(this.content.y), o24 = this.content.scale / (this.content.width / this.content.fitWidth), this.content = {
            ...this.content,
            x: e55,
            y: s27
        }), this.trigger("beforeTransform"), e55 = i(this.content.x), s27 = i(this.content.y), t80 && this.option("zoom")) {
            let t81, n13;
            t81 = i(this.content.fitWidth * o24), n13 = i(this.content.fitHeight * o24), this.content.width = t81, this.content.height = n13, this.transform = {
                ...this.transform,
                width: t81,
                height: n13,
                scale: o24
            }, Object.assign(this.$content.style, {
                width: `${t81}px`,
                height: `${n13}px`,
                maxWidth: "none",
                maxHeight: "none",
                transform: `translate3d(${e55}px, ${s27}px, 0) scale(1)`
            });
        } else this.$content.style.transform = `translate3d(${e55}px, ${s27}px, 0) scale(${o24})`;
        this.trigger("afterTransform");
    }
    endAnimation(t82) {
        cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
            x: 0,
            y: 0,
            scale: 0
        }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== t82 && this.trigger("endAnimation");
    }
    handleCursor() {
        const t83 = this.option("draggableClass");
        t83 && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t83) : this.$container.classList.add(t83));
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
d.version = "4.0.27", d.Plugins = {};
const u = (t84, e56)=>{
    let i36 = 0;
    return function(...s28) {
        const o25 = (new Date).getTime();
        if (!(o25 - i36 < e56)) return i36 = o25, t84(...s28);
    };
};
class f {
    constructor(t85){
        this.$container = null, this.$prev = null, this.$next = null, this.carousel = t85, this.onRefresh = this.onRefresh.bind(this);
    }
    option(t86) {
        return this.carousel.option(`Navigation.${t86}`);
    }
    createButton(t87) {
        const e57 = document.createElement("button");
        e57.setAttribute("title", this.carousel.localize(`{{${t87.toUpperCase()}}}`));
        const i37 = this.option("classNames.button") + " " + this.option(`classNames.${t87}`);
        return e57.classList.add(...i37.split(" ")), e57.setAttribute("tabindex", "0"), e57.innerHTML = this.carousel.localize(this.option(`${t87}Tpl`)), e57.addEventListener("click", (e58)=>{
            e58.preventDefault(), e58.stopPropagation(), this.carousel["slide" + ("next" === t87 ? "Next" : "Prev")]();
        }), e57;
    }
    build() {
        this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(...this.option("classNames.main").split(" ")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
    }
    onRefresh() {
        const t88 = this.carousel.pages.length;
        t88 <= 1 || t88 > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t88 - 1 && this.$next.setAttribute("disabled", "")));
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
    constructor(t89){
        this.carousel = t89, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
    }
    addAsTargetFor(t90) {
        this.target = this.carousel, this.nav = t90, this.attachEvents();
    }
    addAsNavFor(t91) {
        this.target = t91, this.nav = this.carousel, this.attachEvents();
    }
    attachEvents() {
        this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
    }
    onNavReady() {
        this.onTargetChange(!0);
    }
    onNavClick(t, e, i38) {
        const s29 = i38.target.closest(".carousel__slide");
        if (!s29) return;
        i38.stopPropagation();
        const o26 = parseInt(s29.dataset.index, 10), n14 = this.target.findPageForSlide(o26);
        this.target.page !== n14 && this.target.slideTo(n14, {
            friction: this.friction
        }), this.markSelectedSlide(o26);
    }
    onNavCreateSlide(t, e59) {
        e59.index === this.selectedIndex && this.markSelectedSlide(e59.index);
    }
    onTargetChange() {
        const t92 = this.target.pages[this.target.page].indexes[0], e60 = this.nav.findPageForSlide(t92);
        this.nav.slideTo(e60), this.markSelectedSlide(t92);
    }
    markSelectedSlide(t93) {
        this.selectedIndex = t93, [
            ...this.nav.slides
        ].filter((t94)=>t94.$el && t94.$el.classList.remove("is-nav-selected"));
        const e61 = this.nav.slides[t93];
        e61 && e61.$el && e61.$el.classList.add("is-nav-selected");
    }
    attach(t95) {
        const e62 = t95.options.Sync;
        (e62.target || e62.nav) && (e62.target ? this.addAsNavFor(e62.target) : e62.nav && this.addAsTargetFor(e62.nav), this.friction = e62.friction);
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
        constructor(t96){
            this.carousel = t96, this.$list = null, this.events = {
                change: this.onChange.bind(this),
                refresh: this.onRefresh.bind(this)
            };
        }
        buildList() {
            if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount")) return;
            const t97 = document.createElement("ol");
            return t97.classList.add("carousel__dots"), t97.addEventListener("click", (t98)=>{
                if (!("page" in t98.target.dataset)) return;
                t98.preventDefault(), t98.stopPropagation();
                const e63 = parseInt(t98.target.dataset.page, 10), i39 = this.carousel;
                e63 !== i39.page && (i39.pages.length < 3 && i39.option("infinite") ? i39[0 == e63 ? "slidePrev" : "slideNext"]() : i39.slideTo(e63));
            }), this.$list = t97, this.carousel.$container.appendChild(t97), this.carousel.$container.classList.add("has-dots"), t97;
        }
        removeList() {
            this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
        }
        rebuildDots() {
            let t100 = this.$list;
            const e64 = !!t100, i40 = this.carousel.pages.length;
            if (i40 < 2) return void (e64 && this.removeList());
            e64 || (t100 = this.buildList());
            const s30 = this.$list.children.length;
            if (s30 > i40) for(let t99 = i40; t99 < s30; t99++)this.$list.removeChild(this.$list.lastChild);
            else {
                for(let t101 = s30; t101 < i40; t101++){
                    const e65 = document.createElement("li");
                    e65.classList.add("carousel__dot"), e65.dataset.page = t101, e65.setAttribute("role", "button"), e65.setAttribute("tabindex", "0"), e65.setAttribute("title", this.carousel.localize("{{GOTO}}", [
                        [
                            "%d",
                            t101 + 1
                        ]
                    ])), e65.addEventListener("keydown", (t102)=>{
                        const i41 = t102.code;
                        let s31;
                        "Enter" === i41 || "NumpadEnter" === i41 ? s31 = e65 : "ArrowRight" === i41 ? s31 = e65.nextSibling : "ArrowLeft" === i41 && (s31 = e65.previousSibling), s31 && s31.click();
                    }), this.$list.appendChild(e65);
                }
                this.setActiveDot();
            }
        }
        setActiveDot() {
            if (!this.$list) return;
            this.$list.childNodes.forEach((t104)=>{
                t104.classList.remove("is-selected");
            });
            const t103 = this.$list.childNodes[this.carousel.page];
            t103 && t103.classList.add("is-selected");
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
};
const m = {
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
    prefix: "",
    classNames: {
        viewport: "carousel__viewport",
        track: "carousel__track",
        slide: "carousel__slide",
        slideSelected: "is-selected"
    },
    l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d"
    }
};
class y extends l {
    constructor(t105, i42 = {}){
        if (super(i42 = e(!0, {}, m, i42)), this.state = "init", this.$container = t105, !(this.$container instanceof HTMLElement)) throw new Error("No root element provided");
        this.slideNext = u(this.slideNext.bind(this), 250), this.slidePrev = u(this.slidePrev.bind(this), 250), this.init(), t105.__Carousel = this;
    }
    init() {
        this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
    }
    initLayout() {
        const t106 = this.option("prefix"), e66 = this.option("classNames");
        this.$viewport = this.option("viewport") || this.$container.querySelector(`.${t106}${e66.viewport}`), this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(...(t106 + e66.viewport).split(" ")), this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector(`.${t106}${e66.track}`), this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(...(t106 + e66.track).split(" ")), this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track));
    }
    initSlides() {
        this.slides = [];
        this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach((t107)=>{
            const e67 = {
                $el: t107,
                isDom: !0
            };
            this.slides.push(e67), this.trigger("createSlide", e67, this.slides.length);
        }), Array.isArray(this.options.slides) && (this.slides = e(!0, [
            ...this.slides
        ], this.options.slides));
    }
    updateMetrics() {
        let t109, e68 = 0, s32 = [];
        this.slides.forEach((i43, o28)=>{
            const n16 = i43.$el, a12 = i43.isDom || !t109 ? this.getSlideMetrics(n16) : t109;
            i43.index = o28, i43.width = a12, i43.left = e68, t109 = a12, e68 += a12, s32.push(o28);
        });
        let o27 = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)), n15 = getComputedStyle(this.$track);
        o27 -= parseFloat(n15.paddingLeft) + parseFloat(n15.paddingRight), this.contentWidth = e68, this.viewportWidth = o27;
        const a11 = [], r3 = this.option("slidesPerPage");
        if (Number.isInteger(r3) && e68 > o27) for(let t108 = 0; t108 < this.slides.length; t108 += r3)a11.push({
            indexes: s32.slice(t108, t108 + r3),
            slides: this.slides.slice(t108, t108 + r3)
        });
        else {
            let t110 = 0, e69 = 0;
            for(let i44 = 0; i44 < this.slides.length; i44 += 1){
                let s33 = this.slides[i44];
                (!a11.length || e69 + s33.width > o27) && (a11.push({
                    indexes: [],
                    slides: []
                }), t110 = a11.length - 1, e69 = 0), e69 += s33.width, a11[t110].indexes.push(i44), a11[t110].slides.push(s33);
            }
        }
        const h3 = this.option("center"), l3 = this.option("fill");
        a11.forEach((t111, i45)=>{
            t111.index = i45, t111.width = t111.slides.reduce((t112, e70)=>t112 + e70.width, 0), t111.left = t111.slides[0].left, h3 && (t111.left += .5 * (o27 - t111.width) * -1), l3 && !this.option("infiniteX", this.option("infinite")) && e68 > o27 && (t111.left = Math.max(t111.left, 0), t111.left = Math.min(t111.left, e68 - o27));
        });
        const c3 = [];
        let d3;
        a11.forEach((t113)=>{
            const e71 = {
                ...t113
            };
            d3 && e71.left === d3.left ? (d3.width += e71.width, d3.slides = [
                ...d3.slides,
                ...e71.slides
            ], d3.indexes = [
                ...d3.indexes,
                ...e71.indexes
            ]) : (e71.index = c3.length, d3 = e71, c3.push(e71));
        }), this.pages = c3;
        let u3 = this.page;
        if (null === u3) {
            const t114 = this.option("initialSlide");
            u3 = null !== t114 ? this.findPageForSlide(t114) : parseInt(this.option("initialPage", 0), 10) || 0, c3[u3] || (u3 = c3.length && u3 > c3.length ? c3[c3.length - 1].index : 0), this.page = u3, this.pageIndex = u3;
        }
        this.updatePanzoom(), this.trigger("refresh");
    }
    getSlideMetrics(t115) {
        if (!t115) {
            const e72 = this.slides[0];
            (t115 = document.createElement("div")).dataset.isTestEl = 1, t115.style.visibility = "hidden", t115.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), e72.customClass && t115.classList.add(...e72.customClass.split(" ")), this.$track.prepend(t115);
        }
        let e73 = Math.max(t115.offsetWidth, i(t115.getBoundingClientRect().width));
        const s34 = t115.currentStyle || window.getComputedStyle(t115);
        return e73 = e73 + (parseFloat(s34.marginLeft) || 0) + (parseFloat(s34.marginRight) || 0), t115.dataset.isTestEl && t115.remove(), e73;
    }
    findPageForSlide(t116) {
        t116 = parseInt(t116, 10) || 0;
        const e74 = this.pages.find((e75)=>e75.indexes.indexOf(t116) > -1);
        return e74 ? e74.index : null;
    }
    slideNext() {
        this.slideTo(this.pageIndex + 1);
    }
    slidePrev() {
        this.slideTo(this.pageIndex - 1);
    }
    slideTo(t117, e76 = {}) {
        const { x: i46 = -1 * this.setPage(t117, !0) , y: s35 = 0 , friction: o29 = this.option("friction")  } = e76;
        this.Panzoom.content.x === i46 && !this.Panzoom.velocity.x && o29 || (this.Panzoom.panTo({
            x: i46,
            y: s35,
            friction: o29,
            ignoreBounds: !0
        }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
    }
    initPanzoom() {
        this.Panzoom && this.Panzoom.destroy();
        const t118 = e(!0, {}, {
            content: this.$track,
            wrapInner: !1,
            resizeParent: !1,
            zoom: !1,
            click: !1,
            lockAxis: "x",
            x: this.pages.length ? -1 * this.pages[this.page].left : 0,
            centerOnStart: !1,
            textSelection: ()=>this.option("textSelection", !1),
            panOnlyZoomed: function() {
                return this.content.width <= this.viewport.width;
            }
        }, this.option("Panzoom"));
        this.Panzoom = new d(this.$container, t118), this.Panzoom.on({
            "*": (t119, ...e77)=>this.trigger(`Panzoom.${t119}`, ...e77),
            afterUpdate: ()=>{
                this.updatePage();
            },
            beforeTransform: this.onBeforeTransform.bind(this),
            touchEnd: this.onTouchEnd.bind(this),
            endAnimation: ()=>{
                this.trigger("settle");
            }
        }), this.updateMetrics(), this.manageSlideVisiblity();
    }
    updatePanzoom() {
        this.Panzoom && (this.Panzoom.content = {
            ...this.Panzoom.content,
            fitWidth: this.contentWidth,
            origWidth: this.contentWidth,
            width: this.contentWidth
        }, this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
            from: -1 * this.pages[this.pages.length - 1].left,
            to: -1 * this.pages[0].left
        }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
            from: 0,
            to: 0
        }, this.Panzoom.handleCursor());
    }
    manageSlideVisiblity() {
        const t120 = this.contentWidth, e78 = this.viewportWidth;
        let i47 = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
        const s36 = this.option("preload"), o30 = this.option("infiniteX", this.option("infinite")), n17 = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")), a13 = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
        this.slides.forEach((r5)=>{
            let h5, l4, c4 = 0;
            h5 = i47 - n17, l4 = i47 + e78 + a13, h5 -= s36 * (e78 + n17 + a13), l4 += s36 * (e78 + n17 + a13);
            const d4 = r5.left + r5.width > h5 && r5.left < l4;
            h5 = i47 + t120 - n17, l4 = i47 + t120 + e78 + a13, h5 -= s36 * (e78 + n17 + a13);
            const u4 = o30 && r5.left + r5.width > h5 && r5.left < l4;
            h5 = i47 - t120 - n17, l4 = i47 - t120 + e78 + a13, h5 -= s36 * (e78 + n17 + a13);
            const f3 = o30 && r5.left + r5.width > h5 && r5.left < l4;
            u4 || d4 || f3 ? (this.createSlideEl(r5), d4 && (c4 = 0), u4 && (c4 = -1), f3 && (c4 = 1), r5.left + r5.width > i47 && r5.left <= i47 + e78 + a13 && (c4 = 0)) : this.removeSlideEl(r5), r5.hasDiff = c4;
        });
        let r4 = 0, h4 = 0;
        this.slides.forEach((e79, i48)=>{
            let s37 = 0;
            e79.$el ? (i48 !== r4 || e79.hasDiff ? s37 = h4 + e79.hasDiff * t120 : h4 = 0, e79.$el.style.left = Math.abs(s37) > .1 ? `${h4 + e79.hasDiff * t120}px` : "", r4++) : h4 += e79.width;
        }), this.markSelectedSlides();
    }
    createSlideEl(t121) {
        if (!t121) return;
        if (t121.$el) {
            let e80 = t121.$el.dataset.index;
            if (!e80 || parseInt(e80, 10) !== t121.index) {
                let e81;
                t121.$el.dataset.index = t121.index, t121.$el.querySelectorAll("[data-lazy-srcset]").forEach((t122)=>{
                    t122.srcset = t122.dataset.lazySrcset;
                }), t121.$el.querySelectorAll("[data-lazy-src]").forEach((t123)=>{
                    let e83 = t123.dataset.lazySrc;
                    t123 instanceof HTMLImageElement ? t123.src = e83 : t123.style.backgroundImage = `url('${e83}')`;
                }), (e81 = t121.$el.dataset.lazySrc) && (t121.$el.style.backgroundImage = `url('${e81}')`), t121.state = "ready";
            }
            return;
        }
        const e84 = document.createElement("div");
        e84.dataset.index = t121.index, e84.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), t121.customClass && e84.classList.add(...t121.customClass.split(" ")), t121.html && (e84.innerHTML = t121.html);
        const i49 = [];
        this.slides.forEach((t124, e85)=>{
            t124.$el && i49.push(e85);
        });
        const s38 = t121.index;
        let o31 = null;
        if (i49.length) {
            let t125 = i49.reduce((t127, e86)=>Math.abs(e86 - s38) < Math.abs(t127 - s38) ? e86 : t127);
            o31 = this.slides[t125];
        }
        return this.$track.insertBefore(e84, o31 && o31.$el ? o31.index < t121.index ? o31.$el.nextSibling : o31.$el : null), t121.$el = e84, this.trigger("createSlide", t121, s38), t121;
    }
    removeSlideEl(t128) {
        t128.$el && !t128.isDom && (this.trigger("removeSlide", t128), t128.$el.remove(), t128.$el = null);
    }
    markSelectedSlides() {
        const t129 = this.option("classNames.slideSelected"), e87 = "aria-hidden";
        this.slides.forEach((i50, s39)=>{
            const o32 = i50.$el;
            if (!o32) return;
            const n18 = this.pages[this.page];
            n18 && n18.indexes && n18.indexes.indexOf(s39) > -1 ? (t129 && !o32.classList.contains(t129) && (o32.classList.add(t129), this.trigger("selectSlide", i50)), o32.removeAttribute(e87)) : (t129 && o32.classList.contains(t129) && (o32.classList.remove(t129), this.trigger("unselectSlide", i50)), o32.setAttribute(e87, !0));
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
        const t130 = this.contentWidth, e88 = this.viewportWidth;
        if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t130 < e88) return;
        const i51 = this.Panzoom;
        let s40 = !1;
        return i51.content.x < -1 * (t130 - e88) && (i51.content.x += t130, this.pageIndex = this.pageIndex - this.pages.length, s40 = !0), i51.content.x > e88 && (i51.content.x -= t130, this.pageIndex = this.pageIndex + this.pages.length, s40 = !0), s40 && "pointerdown" === i51.state && i51.resetDragPosition(), s40;
    }
    onTouchEnd(t131, e) {
        const i52 = this.option("dragFree");
        if (!i52 && this.pages.length > 1 && t131.dragOffset.time < 350 && Math.abs(t131.dragOffset.y) < 1 && Math.abs(t131.dragOffset.x) > 5) this[t131.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
        else if (i52) {
            const [, e89] = this.getPageFromPosition(-1 * t131.transform.x);
            this.setPage(e89);
        } else this.slideToClosest();
    }
    slideToClosest(t132 = {}) {
        let [, e90] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
        this.slideTo(e90, t132);
    }
    getPageFromPosition(t133) {
        const e91 = this.pages.length;
        this.option("center") && (t133 += .5 * this.viewportWidth);
        const i53 = Math.floor(t133 / this.contentWidth);
        t133 -= i53 * this.contentWidth;
        let s41 = this.slides.find((e92)=>e92.left <= t133 && e92.left + e92.width > t133);
        if (s41) {
            let t134 = this.findPageForSlide(s41.index);
            return [
                t134,
                t134 + i53 * e91
            ];
        }
        return [
            0,
            0
        ];
    }
    setPage(t135, e93) {
        let i54 = 0, s42 = parseInt(t135, 10) || 0;
        const o35 = this.page, n20 = this.pageIndex, a14 = this.pages.length, r6 = this.contentWidth, h6 = this.viewportWidth;
        if (t135 = (s42 % a14 + a14) % a14, this.option("infiniteX", this.option("infinite")) && r6 > h6) {
            const o33 = Math.floor(s42 / a14) || 0, n19 = r6;
            if (i54 = this.pages[t135].left + o33 * n19, !0 === e93 && a14 > 2) {
                let t136 = -1 * this.Panzoom.content.x;
                const e94 = i54 - n19, o34 = i54 + n19, r7 = Math.abs(t136 - i54), h7 = Math.abs(t136 - e94), l5 = Math.abs(t136 - o34);
                l5 < r7 && l5 <= h7 ? (i54 = o34, s42 += a14) : h7 < r7 && h7 < l5 && (i54 = e94, s42 -= a14);
            }
        } else t135 = s42 = Math.max(0, Math.min(s42, a14 - 1)), i54 = this.pages.length ? this.pages[t135].left : 0;
        return this.page = t135, this.pageIndex = s42, null !== o35 && t135 !== o35 && (this.prevPage = o35, this.prevPageIndex = n20, this.trigger("change", t135, o35)), i54;
    }
    destroy() {
        this.state = "destroy", this.slides.forEach((t137)=>{
            this.removeSlideEl(t137);
        }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
    }
}
y.version = "4.0.27", y.Plugins = p;
const v = !("undefined" == typeof window || !window.document || !window.document.createElement);
let b = null;
const x = [
    "a[href]",
    "area[href]",
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    "select:not([disabled]):not([aria-hidden])",
    "textarea:not([disabled]):not([aria-hidden])",
    "button:not([disabled]):not([aria-hidden])",
    "iframe",
    "object",
    "embed",
    "video",
    "audio",
    "[contenteditable]",
    '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'
], w = (t138)=>{
    if (t138 && v) {
        null === b && document.createElement("div").focus({
            get preventScroll () {
                return b = !0, !1;
            }
        });
        try {
            if (t138.setActive) t138.setActive();
            else if (b) t138.focus({
                preventScroll: !0
            });
            else {
                const e95 = window.pageXOffset || document.body.scrollTop, i55 = window.pageYOffset || document.body.scrollLeft;
                t138.focus(), document.body.scrollTo({
                    top: e95,
                    left: i55,
                    behavior: "auto"
                });
            }
        } catch (t) {}
    }
};
class $ {
    constructor(t140){
        this.fancybox = t140, this.$container = null, this.state = "init";
        for (const t139 of [
            "onPrepare",
            "onClosing",
            "onKeydown"
        ])this[t139] = this[t139].bind(this);
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
    onKeydown(t141, e96) {
        e96 === t141.option("Thumbs.key") && this.toggle();
    }
    build() {
        if (this.$container) return;
        const t142 = document.createElement("div");
        t142.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t142, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t142, e(!0, {
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
        })), this.Carousel.Panzoom.on("wheel", (t, e97)=>{
            e97.preventDefault(), this.fancybox[e97.deltaY < 0 ? "prev" : "next"]();
        }), this.$container = t142, this.state = "visible";
    }
    getSlides() {
        const t143 = [];
        for (const e98 of this.fancybox.items){
            const i56 = e98.thumb;
            i56 && t143.push({
                html: `<div class="fancybox__thumb" style="background-image:url('${i56}')"></div>`,
                customClass: `has-thumb has-${e98.type || "image"}`
            });
        }
        return t143;
    }
    toggle() {
        "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build();
    }
    show() {
        "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible");
    }
    hide() {
        "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden");
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
$.defaults = {
    minSlideCount: 2,
    minScreenHeight: 500,
    autoStart: !0,
    key: "t",
    Carousel: {}
};
const C = (t145, e99)=>{
    const i58 = new URL(t145), s43 = new URLSearchParams(i58.search);
    let o36 = new URLSearchParams;
    for (const [t144, i57] of [
        ...s43,
        ...Object.entries(e99)
    ])"t" === t144 ? o36.set("start", parseInt(i57)) : o36.set(t144, i57);
    o36 = o36.toString();
    let n21 = t145.match(/#t=((.*)?\d+s)/);
    return n21 && (o36 += `#t=${n21[1]}`), o36;
}, S = {
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
        tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        format: ""
    }
};
class E {
    constructor(t147){
        this.fancybox = t147;
        for (const t146 of [
            "onInit",
            "onReady",
            "onCreateSlide",
            "onRemoveSlide",
            "onSelectSlide",
            "onUnselectSlide",
            "onRefresh",
            "onMessage"
        ])this[t146] = this[t146].bind(this);
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
        for (const t148 of this.fancybox.items)this.processType(t148);
    }
    processType(t149) {
        if (t149.html) return t149.src = t149.html, t149.type = "html", void delete t149.html;
        const i59 = t149.src || "";
        let s44 = t149.type || this.fancybox.options.type, o37 = null;
        if (!i59 || "string" == typeof i59) {
            if (o37 = i59.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                const e100 = C(i59, this.fancybox.option("Html.youtube")), n22 = encodeURIComponent(o37[1]);
                t149.videoId = n22, t149.src = `https://www.youtube-nocookie.com/embed/${n22}?${e100}`, t149.thumb = t149.thumb || `https://i.ytimg.com/vi/${n22}/mqdefault.jpg`, t149.vendor = "youtube", s44 = "video";
            } else if (o37 = i59.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                const e101 = C(i59, this.fancybox.option("Html.vimeo")), n23 = encodeURIComponent(o37[1]);
                t149.videoId = n23, t149.src = `https://player.vimeo.com/video/${n23}?${e101}`, t149.vendor = "vimeo", s44 = "video";
            } else (o37 = i59.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t149.src = `//maps.google.${o37[1]}/?ll=${(o37[2] ? o37[2] + "&z=" + Math.floor(o37[3]) + (o37[4] ? o37[4].replace(/^\//, "&") : "") : o37[4] + "").replace(/\?/, "&")}&output=${o37[4] && o37[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, s44 = "map") : (o37 = i59.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t149.src = `//maps.google.${o37[1]}/maps?q=${o37[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, s44 = "map");
            s44 || ("#" === i59.charAt(0) ? s44 = "inline" : (o37 = i59.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s44 = "html5video", t149.format = t149.format || "video/" + ("ogv" === o37[1] ? "ogg" : o37[1])) : i59.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s44 = "image" : i59.match(/\.(pdf)((\?|#).*)?$/i) && (s44 = "pdf")), t149.type = s44 || this.fancybox.option("defaultType", "image"), "html5video" !== s44 && "video" !== s44 || (t149.video = e({}, this.fancybox.option("Html.video"), t149.video), t149._width && t149._height ? t149.ratio = parseFloat(t149._width) / parseFloat(t149._height) : t149.ratio = t149.ratio || t149.video.ratio || S.video.ratio);
        }
    }
    onReady() {
        this.fancybox.Carousel.slides.forEach((t150)=>{
            t150.$el && (this.setContent(t150), t150.index === this.fancybox.getSlide().index && this.playVideo(t150));
        });
    }
    onCreateSlide(t, e, i60) {
        "ready" === this.fancybox.state && this.setContent(i60);
    }
    loadInlineContent(t151) {
        let e102;
        if (t151.src instanceof HTMLElement) e102 = t151.src;
        else if ("string" == typeof t151.src) {
            const i61 = t151.src.split("#", 2), s45 = 2 === i61.length && "" === i61[0] ? i61[1] : i61[0];
            e102 = document.getElementById(s45);
        }
        if (e102) {
            if ("clone" === t151.type || e102.$placeHolder) {
                e102 = e102.cloneNode(!0);
                let i62 = e102.getAttribute("id");
                i62 = i62 ? `${i62}--clone` : `clone-${this.fancybox.id}-${t151.index}`, e102.setAttribute("id", i62);
            } else {
                const t152 = document.createElement("div");
                t152.classList.add("fancybox-placeholder"), e102.parentNode.insertBefore(t152, e102), e102.$placeHolder = t152;
            }
            this.fancybox.setContent(t151, e102);
        } else this.fancybox.setError(t151, "{{ELEMENT_NOT_FOUND}}");
    }
    loadAjaxContent(t153) {
        const e103 = this.fancybox, i63 = new XMLHttpRequest;
        e103.showLoading(t153), i63.onreadystatechange = function() {
            i63.readyState === XMLHttpRequest.DONE && "ready" === e103.state && (e103.hideLoading(t153), 200 === i63.status ? e103.setContent(t153, i63.responseText) : e103.setError(t153, 404 === i63.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
        };
        const s46 = t153.ajax || null;
        i63.open(s46 ? "POST" : "GET", t153.src), i63.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i63.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i63.send(s46), t153.xhr = i63;
    }
    loadIframeContent(t154) {
        const e104 = this.fancybox, i64 = document.createElement("iframe");
        if (i64.className = "fancybox__iframe", i64.setAttribute("id", `fancybox__iframe_${e104.id}_${t154.index}`), i64.setAttribute("allow", "autoplay; fullscreen"), i64.setAttribute("scrolling", "auto"), t154.$iframe = i64, "iframe" !== t154.type || !1 === t154.preload) return i64.setAttribute("src", t154.src), this.fancybox.setContent(t154, i64), void this.resizeIframe(t154);
        e104.showLoading(t154);
        const s47 = document.createElement("div");
        s47.style.visibility = "hidden", this.fancybox.setContent(t154, s47), s47.appendChild(i64), i64.onerror = ()=>{
            e104.setError(t154, "{{IFRAME_ERROR}}");
        }, i64.onload = ()=>{
            e104.hideLoading(t154);
            let s48 = !1;
            i64.isReady || (i64.isReady = !0, s48 = !0), i64.src.length && (i64.parentNode.style.visibility = "", this.resizeIframe(t154), s48 && e104.revealContent(t154));
        }, i64.setAttribute("src", t154.src);
    }
    setAspectRatio(t155) {
        const e105 = t155.$content, i65 = t155.ratio;
        if (!e105) return;
        let s49 = t155._width, o38 = t155._height;
        if (i65 || s49 && o38) {
            Object.assign(e105.style, {
                width: s49 && o38 ? "100%" : "",
                height: s49 && o38 ? "100%" : "",
                maxWidth: "",
                maxHeight: ""
            });
            let t156 = e105.offsetWidth, n24 = e105.offsetHeight;
            if (s49 = s49 || t156, o38 = o38 || n24, s49 > t156 || o38 > n24) {
                let e106 = Math.min(t156 / s49, n24 / o38);
                s49 *= e106, o38 *= e106;
            }
            Math.abs(s49 / o38 - i65) > .01 && (i65 < s49 / o38 ? s49 = o38 * i65 : o38 = s49 / i65), Object.assign(e105.style, {
                width: `${s49}px`,
                height: `${o38}px`
            });
        }
    }
    resizeIframe(t157) {
        const e107 = t157.$iframe;
        if (!e107) return;
        let i66 = t157._width || 0, s50 = t157._height || 0;
        i66 && s50 && (t157.autoSize = !1);
        const o39 = e107.parentNode, n25 = o39 && o39.style;
        if (!1 !== t157.preload && !1 !== t157.autoSize && n25) try {
            const t158 = window.getComputedStyle(o39), a15 = parseFloat(t158.paddingLeft) + parseFloat(t158.paddingRight), r8 = parseFloat(t158.paddingTop) + parseFloat(t158.paddingBottom), h8 = e107.contentWindow.document, l6 = h8.getElementsByTagName("html")[0], c5 = h8.body;
            n25.width = "", c5.style.overflow = "hidden", i66 = i66 || l6.scrollWidth + a15, n25.width = `${i66}px`, c5.style.overflow = "", n25.flex = "0 0 auto", n25.height = `${c5.scrollHeight}px`, s50 = l6.scrollHeight + r8;
        } catch (t) {}
        if (i66 || s50) {
            const t159 = {
                flex: "0 1 auto"
            };
            i66 && (t159.width = `${i66}px`), s50 && (t159.height = `${s50}px`), Object.assign(n25, t159);
        }
    }
    onRefresh(t160, e108) {
        e108.slides.forEach((t161)=>{
            t161.$el && (t161.$iframe && this.resizeIframe(t161), t161.ratio && this.setAspectRatio(t161));
        });
    }
    setContent(t162) {
        if (t162 && !t162.isDom) {
            switch(t162.type){
                case "html":
                    this.fancybox.setContent(t162, t162.src);
                    break;
                case "html5video":
                    this.fancybox.setContent(t162, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t162.src).replace("{{format}}", t162.format || t162.html5video && t162.html5video.format || "").replace("{{poster}}", t162.poster || t162.thumb || ""));
                    break;
                case "inline":
                case "clone":
                    this.loadInlineContent(t162);
                    break;
                case "ajax":
                    this.loadAjaxContent(t162);
                    break;
                case "pdf":
                case "video":
                case "map":
                    t162.preload = !1;
                case "iframe":
                    this.loadIframeContent(t162);
            }
            t162.ratio && this.setAspectRatio(t162);
        }
    }
    onSelectSlide(t163, e, i67) {
        "ready" === t163.state && this.playVideo(i67);
    }
    playVideo(t164) {
        if ("html5video" === t164.type && t164.video.autoplay) try {
            const e109 = t164.$el.querySelector("video");
            if (e109) {
                const t165 = e109.play();
                void 0 !== t165 && t165.then(()=>{}).catch((t)=>{
                    e109.muted = !0, e109.play();
                });
            }
        } catch (t) {}
        if ("video" !== t164.type || !t164.$iframe || !t164.$iframe.contentWindow) return;
        const e110 = ()=>{
            if ("done" === t164.state && t164.$iframe && t164.$iframe.contentWindow) {
                let e111;
                if (t164.$iframe.isReady) return t164.video && t164.video.autoplay && (e111 = "youtube" == t164.vendor ? {
                    event: "command",
                    func: "playVideo"
                } : {
                    method: "play",
                    value: "true"
                }), void (e111 && t164.$iframe.contentWindow.postMessage(JSON.stringify(e111), "*"));
                "youtube" === t164.vendor && (e111 = {
                    event: "listening",
                    id: t164.$iframe.getAttribute("id")
                }, t164.$iframe.contentWindow.postMessage(JSON.stringify(e111), "*"));
            }
            t164.poller = setTimeout(e110, 250);
        };
        e110();
    }
    onUnselectSlide(t, e, i68) {
        if ("html5video" === i68.type) {
            try {
                i68.$el.querySelector("video").pause();
            } catch (t) {}
            return;
        }
        let s51 = !1;
        "vimeo" == i68.vendor ? s51 = {
            method: "pause",
            value: "true"
        } : "youtube" === i68.vendor && (s51 = {
            event: "command",
            func: "pauseVideo"
        }), s51 && i68.$iframe && i68.$iframe.contentWindow && i68.$iframe.contentWindow.postMessage(JSON.stringify(s51), "*"), clearTimeout(i68.poller);
    }
    onRemoveSlide(t, e, i69) {
        i69.xhr && (i69.xhr.abort(), i69.xhr = null), i69.$iframe && (i69.$iframe.onload = i69.$iframe.onerror = null, i69.$iframe.src = "//about:blank", i69.$iframe = null);
        const s52 = i69.$content;
        "inline" === i69.type && s52 && (s52.classList.remove("fancybox__content"), "none" !== s52.style.display && (s52.style.display = "none")), i69.$closeButton && (i69.$closeButton.remove(), i69.$closeButton = null);
        const o40 = s52 && s52.$placeHolder;
        o40 && (o40.parentNode.insertBefore(s52, o40), o40.remove(), s52.$placeHolder = null);
    }
    onMessage(t166) {
        try {
            let e113 = JSON.parse(t166.data);
            if ("https://player.vimeo.com" === t166.origin) {
                if ("ready" === e113.event) for (let e112 of document.getElementsByClassName("fancybox__iframe"))e112.contentWindow === t166.source && (e112.isReady = 1);
            } else "https://www.youtube-nocookie.com" === t166.origin && "onReady" === e113.event && (document.getElementById(e113.id).isReady = 1);
        } catch (t) {}
    }
    attach() {
        this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
    }
    detach() {
        this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
    }
}
E.defaults = S;
class P {
    constructor(t168){
        this.fancybox = t168;
        for (const t167 of [
            "onReady",
            "onClosing",
            "onDone",
            "onPageChange",
            "onCreateSlide",
            "onRemoveSlide",
            "onImageStatusChange"
        ])this[t167] = this[t167].bind(this);
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
        this.fancybox.Carousel.slides.forEach((t169)=>{
            t169.$el && this.setContent(t169);
        });
    }
    onDone(t, e114) {
        this.handleCursor(e114);
    }
    onClosing(t170) {
        clearTimeout(this.clickTimer), this.clickTimer = null, t170.Carousel.slides.forEach((t171)=>{
            t171.$image && (t171.state = "destroy"), t171.Panzoom && t171.Panzoom.detachEvents();
        }), "closing" === this.fancybox.state && this.canZoom(t170.getSlide()) && this.zoomOut();
    }
    onCreateSlide(t, e, i70) {
        "ready" === this.fancybox.state && this.setContent(i70);
    }
    onRemoveSlide(t172, e, i71) {
        i71.$image && (i71.$el.classList.remove(t172.option("Image.canZoomInClass")), i71.$image.remove(), i71.$image = null), i71.Panzoom && (i71.Panzoom.destroy(), i71.Panzoom = null), i71.$el && i71.$el.dataset && delete i71.$el.dataset.imageFit;
    }
    setContent(t173) {
        if (t173.isDom || t173.html || t173.type && "image" !== t173.type) return;
        if (t173.$image) return;
        t173.type = "image", t173.state = "loading";
        const e115 = document.createElement("div");
        e115.style.visibility = "hidden";
        const i72 = document.createElement("img");
        i72.addEventListener("load", (e116)=>{
            e116.stopImmediatePropagation(), this.onImageStatusChange(t173);
        }), i72.addEventListener("error", ()=>{
            this.onImageStatusChange(t173);
        }), i72.src = t173.src, i72.alt = "", i72.draggable = !1, i72.classList.add("fancybox__image"), t173.srcset && i72.setAttribute("srcset", t173.srcset), t173.sizes && i72.setAttribute("sizes", t173.sizes), t173.$image = i72;
        const s53 = this.fancybox.option("Image.wrap");
        if (s53) {
            const o41 = document.createElement("div");
            o41.classList.add("string" == typeof s53 ? s53 : "fancybox__image-wrap"), o41.appendChild(i72), e115.appendChild(o41), t173.$wrap = o41;
        } else e115.appendChild(i72);
        t173.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t173, e115), i72.complete || i72.error ? this.onImageStatusChange(t173) : this.fancybox.showLoading(t173);
    }
    onImageStatusChange(t174) {
        const e117 = t174.$image;
        e117 && "loading" === t174.state && (e117.complete && e117.naturalWidth && e117.naturalHeight ? (this.fancybox.hideLoading(t174), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t174), t174.$el.addEventListener("wheel", (e118)=>this.onWheel(t174, e118), {
            passive: !1
        }), t174.$content.addEventListener("click", (e119)=>this.onClick(t174, e119), {
            passive: !1
        }), this.revealContent(t174)) : this.fancybox.setError(t174, "{{IMAGE_ERROR}}"));
    }
    initSlidePanzoom(t175) {
        t175.Panzoom || (t175.Panzoom = new d(t175.$el, e(!0, this.fancybox.option("Image.Panzoom", {}), {
            viewport: t175.$wrap,
            content: t175.$image,
            width: t175._width,
            height: t175._height,
            wrapInner: !1,
            textSelection: !0,
            touch: this.fancybox.option("Image.touch"),
            panOnlyZoomed: !0,
            click: !1,
            wheel: !1
        })), t175.Panzoom.on("startAnimation", ()=>{
            this.fancybox.trigger("Image.startAnimation", t175);
        }), t175.Panzoom.on("endAnimation", ()=>{
            "zoomIn" === t175.state && this.fancybox.done(t175), this.handleCursor(t175), this.fancybox.trigger("Image.endAnimation", t175);
        }), t175.Panzoom.on("afterUpdate", ()=>{
            this.handleCursor(t175), this.fancybox.trigger("Image.afterUpdate", t175);
        }));
    }
    revealContent(t176) {
        null === this.fancybox.Carousel.prevPage && t176.index === this.fancybox.options.startIndex && this.canZoom(t176) ? this.zoomIn() : this.fancybox.revealContent(t176);
    }
    getZoomInfo(t177) {
        const e120 = t177.$thumb.getBoundingClientRect(), i73 = e120.width, s54 = e120.height, o42 = t177.$content.getBoundingClientRect(), n26 = o42.width, a16 = o42.height, r9 = o42.top - e120.top, h9 = o42.left - e120.left;
        let l7 = this.fancybox.option("Image.zoomOpacity");
        return "auto" === l7 && (l7 = Math.abs(i73 / s54 - n26 / a16) > .1), {
            top: r9,
            left: h9,
            scale: n26 && i73 ? i73 / n26 : 1,
            opacity: l7
        };
    }
    canZoom(t178) {
        const e121 = this.fancybox, i74 = e121.$container;
        if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
        if (t178.Panzoom && !t178.Panzoom.content.width) return !1;
        if (!e121.option("Image.zoom") || "contain" !== e121.option("Image.fit")) return !1;
        const s55 = t178.$thumb;
        if (!s55 || "loading" === t178.state) return !1;
        i74.classList.add("fancybox__no-click");
        const o43 = s55.getBoundingClientRect();
        let n27;
        if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
            const t179 = document.elementFromPoint(o43.left + 1, o43.top + 1) === s55, e122 = document.elementFromPoint(o43.right - 1, o43.bottom - 1) === s55;
            n27 = t179 && e122;
        } else n27 = document.elementFromPoint(o43.left + .5 * o43.width, o43.top + .5 * o43.height) === s55;
        return i74.classList.remove("fancybox__no-click"), n27;
    }
    zoomIn() {
        const t180 = this.fancybox, e123 = t180.getSlide(), i75 = e123.Panzoom, { top: s56 , left: o44 , scale: n28 , opacity: a17  } = this.getZoomInfo(e123);
        t180.trigger("reveal", e123), i75.panTo({
            x: -1 * o44,
            y: -1 * s56,
            scale: n28,
            friction: 0,
            ignoreBounds: !0
        }), e123.$content.style.visibility = "", e123.state = "zoomIn", !0 === a17 && i75.on("afterTransform", (t181)=>{
            "zoomIn" !== e123.state && "zoomOut" !== e123.state || (t181.$content.style.opacity = Math.min(1, 1 - (1 - t181.content.scale) / (1 - n28)));
        }), i75.panTo({
            x: 0,
            y: 0,
            scale: 1,
            friction: this.fancybox.option("Image.zoomFriction")
        });
    }
    zoomOut() {
        const t182 = this.fancybox, e124 = t182.getSlide(), i76 = e124.Panzoom;
        if (!i76) return;
        e124.state = "zoomOut", t182.state = "customClosing", e124.$caption && (e124.$caption.style.visibility = "hidden");
        let s57 = this.fancybox.option("Image.zoomFriction");
        const o45 = (t183)=>{
            const { top: o46 , left: n29 , scale: a18 , opacity: r10  } = this.getZoomInfo(e124);
            t183 || r10 || (s57 *= .82), i76.panTo({
                x: -1 * n29,
                y: -1 * o46,
                scale: a18,
                friction: s57,
                ignoreBounds: !0
            }), s57 *= .98;
        };
        window.addEventListener("scroll", o45), i76.once("endAnimation", ()=>{
            window.removeEventListener("scroll", o45), t182.destroy();
        }), o45();
    }
    handleCursor(t184) {
        if ("image" !== t184.type || !t184.$el) return;
        const e125 = t184.Panzoom, i77 = this.fancybox.option("Image.click", !1, t184), s58 = this.fancybox.option("Image.touch"), o47 = t184.$el.classList, n30 = this.fancybox.option("Image.canZoomInClass"), a19 = this.fancybox.option("Image.canZoomOutClass");
        if (o47.remove(a19), o47.remove(n30), e125 && "toggleZoom" === i77) e125 && 1 === e125.content.scale && e125.option("maxScale") - e125.content.scale > .01 ? o47.add(n30) : e125.content.scale > 1 && !s58 && o47.add(a19);
        else "close" === i77 && o47.add(a19);
    }
    onWheel(t185, e126) {
        if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e126)) switch(this.fancybox.option("Image.wheel")){
            case "zoom":
                "done" === t185.state && t185.Panzoom && t185.Panzoom.zoomWithWheel(e126);
                break;
            case "close":
                this.fancybox.close();
                break;
            case "slide":
                this.fancybox[e126.deltaY < 0 ? "prev" : "next"]();
        }
    }
    onClick(t186, e127) {
        if ("ready" !== this.fancybox.state) return;
        const i78 = t186.Panzoom;
        if (i78 && (i78.dragPosition.midPoint || 0 !== i78.dragOffset.x || 0 !== i78.dragOffset.y || 1 !== i78.dragOffset.scale)) return;
        if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
        const s59 = (i79)=>{
            switch(i79){
                case "toggleZoom":
                    e127.stopPropagation(), t186.Panzoom && t186.Panzoom.zoomWithClick(e127);
                    break;
                case "close":
                    this.fancybox.close();
                    break;
                case "next":
                    e127.stopPropagation(), this.fancybox.next();
            }
        }, o48 = this.fancybox.option("Image.click"), n31 = this.fancybox.option("Image.doubleClick");
        n31 ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, s59(n31)) : this.clickTimer = setTimeout(()=>{
            this.clickTimer = null, s59(o48);
        }, 300) : s59(o48);
    }
    onPageChange(t187, e128) {
        const i80 = t187.getSlide();
        e128.slides.forEach((t188)=>{
            t188.Panzoom && "done" === t188.state && t188.index !== i80.index && t188.Panzoom.panTo({
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
P.defaults = {
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
class L {
    constructor(t190){
        this.fancybox = t190;
        for (const t189 of [
            "onChange",
            "onClosing"
        ])this[t189] = this[t189].bind(this);
        this.events = {
            initCarousel: this.onChange,
            "Carousel.change": this.onChange,
            closing: this.onClosing
        }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
    }
    onChange(t191) {
        const e129 = t191.Carousel;
        this.timer && clearTimeout(this.timer);
        const i82 = null === e129.prevPage, s60 = t191.getSlide(), o50 = new URL(document.URL).hash;
        let n32 = !1;
        if (s60.slug) n32 = "#" + s60.slug;
        else {
            const i81 = s60.$trigger && s60.$trigger.dataset, o49 = t191.option("slug") || i81 && i81.fancybox;
            o49 && o49.length && "true" !== o49 && (n32 = "#" + o49 + (e129.slides.length > 1 ? "-" + (s60.index + 1) : ""));
        }
        i82 && (this.origHash = o50 !== n32 ? o50 : ""), n32 && o50 !== n32 && (this.timer = setTimeout(()=>{
            try {
                window.history[i82 ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + n32), i82 && (this.hasCreatedHistory = !0);
            } catch (t) {}
        }, 300));
    }
    onClosing() {
        if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
            return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
        } catch (t) {}
    }
    attach(t192) {
        t192.on(this.events);
    }
    detach(t193) {
        t193.off(this.events);
    }
    static startFromUrl() {
        const t194 = L.Fancybox;
        if (!t194 || t194.getInstance() || !1 === t194.defaults.Hash) return;
        const { hash: e130 , slug: i83 , index: s61  } = L.getParsedURL();
        if (!i83) return;
        let o51 = document.querySelector(`[data-slug="${e130}"]`);
        if (o51 && o51.dispatchEvent(new CustomEvent("click", {
            bubbles: !0,
            cancelable: !0
        })), t194.getInstance()) return;
        const n33 = document.querySelectorAll(`[data-fancybox="${i83}"]`);
        n33.length && (null === s61 && 1 === n33.length ? o51 = n33[0] : s61 && (o51 = n33[s61 - 1]), o51 && o51.dispatchEvent(new CustomEvent("click", {
            bubbles: !0,
            cancelable: !0
        })));
    }
    static onHashChange() {
        const { slug: t195 , index: e133  } = L.getParsedURL(), i84 = L.Fancybox, s62 = i84 && i84.getInstance();
        if (s62 && s62.plugins.Hash) {
            if (t195) {
                const i85 = s62.Carousel;
                if (t195 === s62.option("slug")) return i85.slideTo(e133 - 1);
                for (let e131 of i85.slides)if (e131.slug && e131.slug === t195) return i85.slideTo(e131.index);
                const o52 = s62.getSlide(), n34 = o52.$trigger && o52.$trigger.dataset;
                if (n34 && n34.fancybox === t195) return i85.slideTo(e133 - 1);
            }
            s62.plugins.Hash.hasSilentClose = !0, s62.close();
        }
        L.startFromUrl();
    }
    static create(t196) {
        function e134() {
            window.addEventListener("hashchange", L.onHashChange, !1), L.startFromUrl();
        }
        L.Fancybox = t196, v && window.requestAnimationFrame(()=>{
            /complete|interactive|loaded/.test(document.readyState) ? e134() : document.addEventListener("DOMContentLoaded", e134);
        });
    }
    static destroy() {
        window.removeEventListener("hashchange", L.onHashChange, !1);
    }
    static getParsedURL() {
        const t197 = window.location.hash.substr(1), e135 = t197.split("-"), i86 = e135.length > 1 && /^\+?\d+$/.test(e135[e135.length - 1]) && parseInt(e135.pop(-1), 10) || null;
        return {
            hash: t197,
            slug: e135.join("-"),
            index: i86
        };
    }
}
const T = {
    pageXOffset: 0,
    pageYOffset: 0,
    element: ()=>document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
    activate (t198) {
        T.pageXOffset = window.pageXOffset, T.pageYOffset = window.pageYOffset, t198.requestFullscreen ? t198.requestFullscreen() : t198.mozRequestFullScreen ? t198.mozRequestFullScreen() : t198.webkitRequestFullscreen ? t198.webkitRequestFullscreen() : t198.msRequestFullscreen && t198.msRequestFullscreen();
    },
    deactivate () {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
    }
};
class _ {
    constructor(t199){
        this.fancybox = t199, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    isActive() {
        return this.active;
    }
    setTimer() {
        if (!this.active || this.timer) return;
        const t200 = this.fancybox.option("slideshow.delay", 3e3);
        this.timer = setTimeout(()=>{
            this.timer = null, this.fancybox.option("infinite") || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, {
                friction: 0
            });
        }, t200);
        let e136 = this.$progress;
        e136 || (e136 = document.createElement("div"), e136.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(e136, this.fancybox.$carousel), this.$progress = e136, e136.offsetHeight), e136.style.transitionDuration = `${t200}ms`, e136.style.transform = "scaleX(1)";
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
const A = {
    display: [
        "counter",
        "zoom",
        "slideshow",
        "fullscreen",
        "thumbs",
        "close"
    ],
    autoEnable: !0,
    items: {
        counter: {
            position: "left",
            type: "div",
            class: "fancybox__counter",
            html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
            attr: {
                tabindex: -1
            }
        },
        prev: {
            type: "button",
            class: "fancybox__button--prev",
            label: "PREV",
            html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
            attr: {
                "data-fancybox-prev": ""
            }
        },
        next: {
            type: "button",
            class: "fancybox__button--next",
            label: "NEXT",
            html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
            attr: {
                "data-fancybox-next": ""
            }
        },
        fullscreen: {
            type: "button",
            class: "fancybox__button--fullscreen",
            label: "TOGGLE_FULLSCREEN",
            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
            click: function(t201) {
                t201.preventDefault(), T.element() ? T.deactivate() : T.activate(this.fancybox.$container);
            }
        },
        slideshow: {
            type: "button",
            class: "fancybox__button--slideshow",
            label: "TOGGLE_SLIDESHOW",
            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
            click: function(t202) {
                t202.preventDefault(), this.Slideshow.toggle();
            }
        },
        zoom: {
            type: "button",
            class: "fancybox__button--zoom",
            label: "TOGGLE_ZOOM",
            html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
            click: function(t203) {
                t203.preventDefault();
                const e137 = this.fancybox.getSlide().Panzoom;
                e137 && e137.toggleZoom();
            }
        },
        download: {
            type: "link",
            label: "DOWNLOAD",
            class: "fancybox__button--download",
            html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
            click: function(t204) {
                t204.stopPropagation();
            }
        },
        thumbs: {
            type: "button",
            label: "TOGGLE_THUMBS",
            class: "fancybox__button--thumbs",
            html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
            click: function(t205) {
                t205.stopPropagation();
                const e138 = this.fancybox.plugins.Thumbs;
                e138 && e138.toggle();
            }
        },
        close: {
            type: "button",
            label: "CLOSE",
            class: "fancybox__button--close",
            html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
            attr: {
                "data-fancybox-close": "",
                tabindex: 0
            }
        }
    }
};
class z {
    constructor(t207){
        this.fancybox = t207, this.$container = null, this.state = "init";
        for (const t206 of [
            "onInit",
            "onPrepare",
            "onDone",
            "onKeydown",
            "onClosing",
            "onChange",
            "onSettle",
            "onRefresh"
        ])this[t206] = this[t206].bind(this);
        this.events = {
            init: this.onInit,
            prepare: this.onPrepare,
            done: this.onDone,
            keydown: this.onKeydown,
            closing: this.onClosing,
            "Carousel.change": this.onChange,
            "Carousel.settle": this.onSettle,
            "Carousel.Panzoom.touchStart": ()=>this.onRefresh(),
            "Image.startAnimation": (t, e139)=>this.onRefresh(e139),
            "Image.afterUpdate": (t, e140)=>this.onRefresh(e140)
        };
    }
    onInit() {
        if (this.fancybox.option("Toolbar.autoEnable")) {
            let t208 = !1;
            for (const e141 of this.fancybox.items)if ("image" === e141.type) {
                t208 = !0;
                break;
            }
            if (!t208) return void (this.state = "disabled");
        }
        for (const e142 of this.fancybox.option("Toolbar.display"))if ("close" === (t(e142) ? e142.id : e142)) {
            this.fancybox.options.closeButton = !1;
            break;
        }
    }
    onPrepare() {
        const t209 = this.fancybox;
        if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new _(t209), !t209.Carousel.prevPage && (t209.option("slideshow.autoStart") && this.Slideshow.activate(), t209.option("fullscreen.autoStart") && !T.element()))) try {
            T.activate(t209.$container);
        } catch (t) {}
    }
    onFsChange() {
        window.scrollTo(T.pageXOffset, T.pageYOffset);
    }
    onSettle() {
        const t210 = this.fancybox, e143 = this.Slideshow;
        e143 && e143.isActive() && (t210.getSlide().index !== t210.Carousel.slides.length - 1 || t210.option("infinite") ? "done" === t210.getSlide().state && e143.setTimer() : e143.deactivate());
    }
    onChange() {
        this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
    }
    onDone(t211, e144) {
        const i87 = this.Slideshow;
        e144.index === t211.getSlide().index && (this.update(), i87 && i87.isActive() && (t211.option("infinite") || e144.index !== t211.Carousel.slides.length - 1 ? i87.setTimer() : i87.deactivate()));
    }
    onRefresh(t212) {
        t212 && t212.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t212 && "done" !== t212.state || this.Slideshow.deactivate());
    }
    onKeydown(t, e145, i88) {
        " " === e145 && this.Slideshow && (this.Slideshow.toggle(), i88.preventDefault());
    }
    onClosing() {
        this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
    }
    createElement(t213) {
        let e146;
        "div" === t213.type ? e146 = document.createElement("div") : (e146 = document.createElement("link" === t213.type ? "a" : "button"), e146.classList.add("carousel__button")), e146.innerHTML = t213.html, e146.setAttribute("tabindex", t213.tabindex || 0), t213.class && e146.classList.add(...t213.class.split(" "));
        for(const i90 in t213.attr)e146.setAttribute(i90, t213.attr[i90]);
        t213.label && e146.setAttribute("title", this.fancybox.localize(`{{${t213.label}}}`)), t213.click && e146.addEventListener("click", t213.click.bind(this)), "prev" === t213.id && e146.setAttribute("data-fancybox-prev", ""), "next" === t213.id && e146.setAttribute("data-fancybox-next", "");
        const i89 = e146.querySelector("svg");
        return i89 && (i89.setAttribute("role", "img"), i89.setAttribute("tabindex", "-1"), i89.setAttribute("xmlns", "http://www.w3.org/2000/svg")), e146;
    }
    build() {
        this.cleanup();
        const i91 = this.fancybox.option("Toolbar.items"), s63 = [
            {
                position: "left",
                items: []
            },
            {
                position: "center",
                items: []
            },
            {
                position: "right",
                items: []
            }
        ], o53 = this.fancybox.plugins.Thumbs;
        for (const n36 of this.fancybox.option("Toolbar.display")){
            let a20, r11;
            if (t(n36) ? (a20 = n36.id, r11 = e({}, i91[a20], n36)) : (a20 = n36, r11 = i91[a20]), [
                "counter",
                "next",
                "prev",
                "slideshow"
            ].includes(a20) && this.fancybox.items.length < 2) continue;
            if ("fullscreen" === a20) {
                if (!document.fullscreenEnabled || window.fullScreen) continue;
                document.addEventListener("fullscreenchange", this.onFsChange);
            }
            if ("thumbs" === a20 && (!o53 || "disabled" === o53.state)) continue;
            if (!r11) continue;
            let h10 = r11.position || "right", l8 = s63.find((t215)=>t215.position === h10);
            l8 && l8.items.push(r11);
        }
        const n35 = document.createElement("div");
        n35.classList.add("fancybox__toolbar");
        for (const t214 of s63)if (t214.items.length) {
            const e147 = document.createElement("div");
            e147.classList.add("fancybox__toolbar__items"), e147.classList.add(`fancybox__toolbar__items--${t214.position}`);
            for (const i92 of t214.items)e147.appendChild(this.createElement(i92));
            n35.appendChild(e147);
        }
        this.fancybox.$carousel.parentNode.insertBefore(n35, this.fancybox.$carousel), this.$container = n35;
    }
    update() {
        const t219 = this.fancybox.getSlide(), e149 = t219.index, i93 = this.fancybox.items.length, s64 = t219.downloadSrc || ("image" !== t219.type || t219.error ? null : t219.src);
        for (const t216 of this.fancybox.$container.querySelectorAll("a.fancybox__button--download"))s64 ? (t216.removeAttribute("disabled"), t216.removeAttribute("tabindex"), t216.setAttribute("href", s64), t216.setAttribute("download", s64), t216.setAttribute("target", "_blank")) : (t216.setAttribute("disabled", ""), t216.setAttribute("tabindex", -1), t216.removeAttribute("href"), t216.removeAttribute("download"));
        const o54 = t219.Panzoom, n37 = o54 && o54.option("maxScale") > o54.option("baseScale");
        for (const t217 of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"))n37 ? t217.removeAttribute("disabled") : t217.setAttribute("disabled", "");
        for (const e148 of this.fancybox.$container.querySelectorAll("[data-fancybox-index]"))e148.innerHTML = t219.index + 1;
        for (const t218 of this.fancybox.$container.querySelectorAll("[data-fancybox-count]"))t218.innerHTML = i93;
        if (!this.fancybox.option("infinite")) {
            for (const t221 of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"))0 === e149 ? t221.setAttribute("disabled", "") : t221.removeAttribute("disabled");
            for (const t220 of this.fancybox.$container.querySelectorAll("[data-fancybox-next]"))e149 === i93 - 1 ? t220.setAttribute("disabled", "") : t220.removeAttribute("disabled");
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
z.defaults = A;
const k = {
    ScrollLock: class {
        constructor(t223){
            this.fancybox = t223, this.viewport = null, this.pendingUpdate = null;
            for (const t222 of [
                "onReady",
                "onResize",
                "onTouchstart",
                "onTouchmove"
            ])this[t222] = this[t222].bind(this);
        }
        onReady() {
            const t224 = window.visualViewport;
            t224 && (this.viewport = t224, this.startY = 0, t224.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
                passive: !1
            }), window.addEventListener("touchmove", this.onTouchmove, {
                passive: !1
            }), window.addEventListener("wheel", this.onWheel, {
                passive: !1
            });
        }
        onResize() {
            this.updateViewport();
        }
        updateViewport() {
            const t225 = this.fancybox, e150 = this.viewport, i94 = e150.scale || 1, s65 = t225.$container;
            if (!s65) return;
            let o55 = "", n38 = "", a21 = "";
            i94 - 1 > .1 && (o55 = e150.width * i94 + "px", n38 = e150.height * i94 + "px", a21 = `translate3d(${e150.offsetLeft}px, ${e150.offsetTop}px, 0) scale(${1 / i94})`), s65.style.width = o55, s65.style.height = n38, s65.style.transform = a21;
        }
        onTouchstart(t226) {
            this.startY = t226.touches ? t226.touches[0].screenY : t226.screenY;
        }
        onTouchmove(t227) {
            const e151 = this.startY, i95 = window.innerWidth / window.document.documentElement.clientWidth;
            if (!t227.cancelable) return;
            if (t227.touches.length > 1 || 1 !== i95) return;
            const o56 = s(t227.composedPath()[0]);
            if (!o56) return void t227.preventDefault();
            const n39 = window.getComputedStyle(o56), a22 = parseInt(n39.getPropertyValue("height"), 10), r12 = t227.touches ? t227.touches[0].screenY : t227.screenY, h11 = e151 <= r12 && 0 === o56.scrollTop, l9 = e151 >= r12 && o56.scrollHeight - o56.scrollTop === a22;
            (h11 || l9) && t227.preventDefault();
        }
        onWheel(t228) {
            s(t228.composedPath()[0]) || t228.preventDefault();
        }
        cleanup() {
            this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
            const t229 = this.viewport;
            t229 && (t229.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {
                passive: !1
            });
        }
        attach() {
            this.fancybox.on("initLayout", this.onReady);
        }
        detach() {
            this.fancybox.off("initLayout", this.onReady), this.cleanup();
        }
    },
    Thumbs: $,
    Html: E,
    Toolbar: z,
    Image: P,
    Hash: L
};
const O = {
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
}, M = new Map;
let I = 0;
class F extends l {
    constructor(t230, i96 = {}){
        t230 = t230.map((t231)=>(t231.width && (t231._width = t231.width), t231.height && (t231._height = t231.height), t231)), super(e(!0, {}, O, i96)), this.bindHandlers(), this.state = "init", this.setItems(t230), this.attachPlugins(F.Plugins), this.trigger("init"), !0 === this.option("hideScrollbar") && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), M.set(this.id, this), this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), this.option("trapFocus") && this.focus();
    }
    option(t232, ...e152) {
        const i97 = this.getSlide();
        let s66 = i97 ? i97[t232] : void 0;
        return void 0 !== s66 ? ("function" == typeof s66 && (s66 = s66.call(this, this, ...e152)), s66) : super.option(t232, ...e152);
    }
    bindHandlers() {
        for (const t233 of [
            "onMousedown",
            "onKeydown",
            "onClick",
            "onFocus",
            "onCreateSlide",
            "onSettle",
            "onTouchMove",
            "onTouchEnd",
            "onTransform"
        ])this[t233] = this[t233].bind(this);
    }
    attachEvents() {
        document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), this.$container.addEventListener("click", this.onClick);
    }
    detachEvents() {
        document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick);
    }
    initLayout() {
        this.$root = this.option("parentEl") || document.body;
        let t234 = this.option("template.main");
        t234 && (this.$root.insertAdjacentHTML("beforeend", this.localize(t234)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = ()=>(this.$container.scrollLeft = 0, !1), Object.entries({
            class: "fancybox__container",
            role: "dialog",
            tabIndex: "-1",
            "aria-modal": "true",
            "aria-hidden": "true",
            "aria-label": this.localize("{{MODAL}}")
        }).forEach((t235)=>this.$container.setAttribute(...t235)), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++I, this.$container.setAttribute("id", "fancybox-" + this.id));
        const e153 = this.option("mainClass");
        return e153 && this.$container.classList.add(...e153.split(" ")), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
    }
    setItems(t236) {
        const e155 = [];
        for (const i98 of t236){
            const t237 = i98.$trigger;
            if (t237) {
                const e154 = t237.dataset || {};
                i98.src = e154.src || t237.getAttribute("href") || i98.src, i98.type = e154.type || i98.type, !i98.src && t237 instanceof HTMLImageElement && (i98.src = t237.currentSrc || i98.$trigger.src);
            }
            let s67 = i98.$thumb;
            if (!s67) {
                let t238 = i98.$trigger && i98.$trigger.origTarget;
                t238 && (s67 = t238 instanceof HTMLImageElement ? t238 : t238.querySelector("img:not([aria-hidden])")), !s67 && i98.$trigger && (s67 = i98.$trigger instanceof HTMLImageElement ? i98.$trigger : i98.$trigger.querySelector("img:not([aria-hidden])"));
            }
            i98.$thumb = s67 || null;
            let o57 = i98.thumb;
            !o57 && s67 && (o57 = s67.currentSrc || s67.src, !o57 && s67.dataset && (o57 = s67.dataset.lazySrc || s67.dataset.src)), o57 || "image" !== i98.type || (o57 = i98.src), i98.thumb = o57 || null, i98.caption = i98.caption || "", e155.push(i98);
        }
        this.items = e155;
    }
    initCarousel() {
        return this.Carousel = new y(this.$carousel, e(!0, {}, {
            prefix: "",
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
                panOnlyZoomed: ()=>this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option("dragToClose"),
                lockAxis: ()=>{
                    if (this.Carousel) {
                        let t239 = "x";
                        return this.option("dragToClose") && (t239 += "y"), t239;
                    }
                }
            },
            on: {
                "*": (t240, ...e156)=>this.trigger(`Carousel.${t240}`, ...e156),
                init: (t241)=>this.Carousel = t241,
                createSlide: this.onCreateSlide,
                settle: this.onSettle
            }
        }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
            touchMove: this.onTouchMove,
            afterTransform: this.onTransform,
            touchEnd: this.onTouchEnd
        }), this.trigger("initCarousel"), this;
    }
    onCreateSlide(t, e157) {
        let i99 = e157.caption || "";
        if ("function" == typeof this.options.caption && (i99 = this.options.caption.call(this, this, this.Carousel, e157)), "string" == typeof i99 && i99.length) {
            const t242 = document.createElement("div"), s68 = `fancybox__caption_${this.id}_${e157.index}`;
            t242.className = "fancybox__caption", t242.innerHTML = i99, t242.setAttribute("id", s68), e157.$caption = e157.$el.appendChild(t242), e157.$el.classList.add("has-caption"), e157.$el.setAttribute("aria-labelledby", s68);
        }
    }
    onSettle() {
        this.option("autoFocus") && this.focus();
    }
    onFocus(t243) {
        this.focus(t243);
    }
    onClick(t244) {
        if (t244.defaultPrevented) return;
        let e158 = t244.composedPath()[0];
        if (e158.matches("[data-fancybox-close]")) return t244.preventDefault(), void F.close(!1, t244);
        if (e158.matches("[data-fancybox-next]")) return t244.preventDefault(), void F.next();
        if (e158.matches("[data-fancybox-prev]")) return t244.preventDefault(), void F.prev();
        if (e158.matches(x) || document.activeElement.blur(), e158.closest(".fancybox__content")) return;
        if (getSelection().toString().length) return;
        if (!1 === this.trigger("click", t244)) return;
        switch(this.option("click")){
            case "close":
                this.close();
                break;
            case "next":
                this.next();
        }
    }
    onTouchMove() {
        const t245 = this.getSlide().Panzoom;
        return !t245 || 1 === t245.content.scale;
    }
    onTouchEnd(t246) {
        const e159 = t246.dragOffset.y;
        Math.abs(e159) >= 150 || Math.abs(e159) >= 35 && t246.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t246.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === t246.lockAxis && t246.panTo({
            y: 0
        });
    }
    onTransform(t247) {
        if (this.$backdrop) {
            const e160 = Math.abs(t247.content.y), i100 = e160 < 1 ? "" : Math.max(.33, Math.min(1, 1 - e160 / t247.content.fitHeight * 1.5));
            this.$container.style.setProperty("--fancybox-ts", i100 ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i100);
        }
    }
    onMousedown() {
        "ready" === this.state && document.body.classList.add("is-using-mouse");
    }
    onKeydown(t248) {
        if (F.getInstance().id !== this.id) return;
        document.body.classList.remove("is-using-mouse");
        const e161 = t248.key, i101 = this.option("keyboard");
        if (!i101 || t248.ctrlKey || t248.altKey || t248.shiftKey) return;
        const s69 = t248.composedPath()[0], o58 = document.activeElement && document.activeElement.classList, n40 = o58 && o58.contains("carousel__button");
        if ("Escape" !== e161 && !n40) {
            if (t248.target.isContentEditable || -1 !== [
                "BUTTON",
                "TEXTAREA",
                "OPTION",
                "INPUT",
                "SELECT",
                "VIDEO"
            ].indexOf(s69.nodeName)) return;
        }
        if (!1 === this.trigger("keydown", e161, t248)) return;
        const a23 = i101[e161];
        "function" == typeof this[a23] && this[a23]();
    }
    getSlide() {
        const t249 = this.Carousel;
        if (!t249) return null;
        const e162 = null === t249.page ? t249.option("initialPage") : t249.page, i102 = t249.pages || [];
        return i102.length && i102[e162] ? i102[e162].slides[0] : null;
    }
    focus(t251) {
        if (F.ignoreFocusChange) return;
        if ([
            "init",
            "closing",
            "customClosing",
            "destroy"
        ].indexOf(this.state) > -1) return;
        const e163 = this.$container, i103 = this.getSlide(), s70 = "done" === i103.state ? i103.$el : null;
        if (s70 && s70.contains(document.activeElement)) return;
        t251 && t251.preventDefault(), F.ignoreFocusChange = !0;
        const o59 = Array.from(e163.querySelectorAll(x));
        let n41, a24 = [];
        for (let t250 of o59){
            const e164 = t250.offsetParent, i104 = s70 && s70.contains(t250), o60 = !this.Carousel.$viewport.contains(t250);
            e164 && (i104 || o60) ? (a24.push(t250), void 0 !== t250.dataset.origTabindex && (t250.tabIndex = t250.dataset.origTabindex, t250.removeAttribute("data-orig-tabindex")), (t250.hasAttribute("autoFocus") || !n41 && i104 && !t250.classList.contains("carousel__button")) && (n41 = t250)) : (t250.dataset.origTabindex = void 0 === t250.dataset.origTabindex ? t250.getAttribute("tabindex") : t250.dataset.origTabindex, t250.tabIndex = -1);
        }
        t251 ? a24.indexOf(t251.target) > -1 ? this.lastFocus = t251.target : this.lastFocus === e163 ? w(a24[a24.length - 1]) : w(e163) : this.option("autoFocus") && n41 ? w(n41) : a24.indexOf(document.activeElement) < 0 && w(e163), this.lastFocus = document.activeElement, F.ignoreFocusChange = !1;
    }
    hideScrollbar() {
        if (!v) return;
        const t252 = window.innerWidth - document.documentElement.getBoundingClientRect().width, e165 = "fancybox-style-noscroll";
        let i105 = document.getElementById(e165);
        i105 || t252 > 0 && (i105 = document.createElement("style"), i105.id = e165, i105.type = "text/css", i105.innerHTML = `.compensate-for-scrollbar {padding-right: ${t252}px;}`, document.getElementsByTagName("head")[0].appendChild(i105), document.body.classList.add("compensate-for-scrollbar"));
    }
    revealScrollbar() {
        document.body.classList.remove("compensate-for-scrollbar");
        const t253 = document.getElementById("fancybox-style-noscroll");
        t253 && t253.remove();
    }
    clearContent(t254) {
        this.Carousel.trigger("removeSlide", t254), t254.$content && (t254.$content.remove(), t254.$content = null), t254.$closeButton && (t254.$closeButton.remove(), t254.$closeButton = null), t254._className && t254.$el.classList.remove(t254._className);
    }
    setContent(t255, e166, i106 = {}) {
        let s71;
        const o61 = t255.$el;
        if (e166 instanceof HTMLElement) [
            "img",
            "iframe",
            "video",
            "audio"
        ].indexOf(e166.nodeName.toLowerCase()) > -1 ? (s71 = document.createElement("div"), s71.appendChild(e166)) : s71 = e166;
        else {
            const t256 = document.createRange().createContextualFragment(e166);
            s71 = document.createElement("div"), s71.appendChild(t256);
        }
        if (t255.filter && !t255.error && (s71 = s71.querySelector(t255.filter)), s71 instanceof Element) return t255._className = `has-${i106.suffix || t255.type || "unknown"}`, o61.classList.add(t255._className), s71.classList.add("fancybox__content"), "none" !== s71.style.display && "none" !== getComputedStyle(s71).getPropertyValue("display") || (s71.style.display = t255.display || this.option("defaultDisplay") || "flex"), t255.id && s71.setAttribute("id", t255.id), t255.$content = s71, o61.prepend(s71), this.manageCloseButton(t255), "loading" !== t255.state && this.revealContent(t255), s71;
        this.setError(t255, "{{ELEMENT_NOT_FOUND}}");
    }
    manageCloseButton(t257) {
        const e167 = void 0 === t257.closeButton ? this.option("closeButton") : t257.closeButton;
        if (!e167 || "top" === e167 && this.$closeButton) return;
        const i107 = document.createElement("button");
        i107.classList.add("carousel__button", "is-close"), i107.setAttribute("title", this.options.l10n.CLOSE), i107.innerHTML = this.option("template.closeButton"), i107.addEventListener("click", (t258)=>this.close(t258)), "inside" === e167 ? (t257.$closeButton && t257.$closeButton.remove(), t257.$closeButton = t257.$content.appendChild(i107)) : this.$closeButton = this.$container.insertBefore(i107, this.$container.firstChild);
    }
    revealContent(t259) {
        this.trigger("reveal", t259), t259.$content.style.visibility = "";
        let e168 = !1;
        t259.error || "loading" === t259.state || null !== this.Carousel.prevPage || t259.index !== this.options.startIndex || (e168 = void 0 === t259.showClass ? this.option("showClass") : t259.showClass), e168 ? (t259.state = "animating", this.animateCSS(t259.$content, e168, ()=>{
            this.done(t259);
        })) : this.done(t259);
    }
    animateCSS(t260, e169, i108) {
        if (t260 && t260.dispatchEvent(new CustomEvent("animationend", {
            bubbles: !0,
            cancelable: !0
        })), !t260 || !e169) return void ("function" == typeof i108 && i108());
        const s72 = function(o62) {
            o62.currentTarget === this && (t260.removeEventListener("animationend", s72), i108 && i108(), t260.classList.remove(e169));
        };
        t260.addEventListener("animationend", s72), t260.classList.add(e169);
    }
    done(t261) {
        t261.state = "done", this.trigger("done", t261);
        const e170 = this.getSlide();
        e170 && t261.index === e170.index && this.option("autoFocus") && this.focus();
    }
    setError(t262, e171) {
        t262.error = e171, this.hideLoading(t262), this.clearContent(t262);
        const i109 = document.createElement("div");
        i109.classList.add("fancybox-error"), i109.innerHTML = this.localize(e171 || "<p>{{ERROR}}</p>"), this.setContent(t262, i109, {
            suffix: "error"
        });
    }
    showLoading(t263) {
        t263.state = "loading", t263.$el.classList.add("is-loading");
        let e172 = t263.$el.querySelector(".fancybox__spinner");
        e172 || (e172 = document.createElement("div"), e172.classList.add("fancybox__spinner"), e172.innerHTML = this.option("template.spinner"), e172.addEventListener("click", ()=>{
            this.Carousel.Panzoom.velocity || this.close();
        }), t263.$el.prepend(e172));
    }
    hideLoading(t264) {
        const e173 = t264.$el && t264.$el.querySelector(".fancybox__spinner");
        e173 && (e173.remove(), t264.$el.classList.remove("is-loading")), "loading" === t264.state && (this.trigger("load", t264), t264.state = "ready");
    }
    next() {
        const t265 = this.Carousel;
        t265 && t265.pages.length > 1 && t265.slideNext();
    }
    prev() {
        const t266 = this.Carousel;
        t266 && t266.pages.length > 1 && t266.slidePrev();
    }
    jumpTo(...t267) {
        this.Carousel && this.Carousel.slideTo(...t267);
    }
    close(t268) {
        if (t268 && t268.preventDefault(), [
            "closing",
            "customClosing",
            "destroy"
        ].includes(this.state)) return;
        if (!1 === this.trigger("shouldClose", t268)) return;
        if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t268), "destroy" === this.state) return;
        this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
        const e174 = this.getSlide();
        if (this.Carousel.slides.forEach((t269)=>{
            t269.$content && t269.index !== e174.index && this.Carousel.trigger("removeSlide", t269);
        }), "closing" === this.state) {
            const t270 = void 0 === e174.hideClass ? this.option("hideClass") : e174.hideClass;
            this.animateCSS(e174.$content, t270, ()=>{
                this.destroy();
            }, !0);
        }
    }
    destroy() {
        if ("destroy" === this.state) return;
        this.state = "destroy", this.trigger("destroy");
        const t271 = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
        this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t271 && w(t271), M.delete(this.id);
        const e175 = F.getInstance();
        e175 ? e175.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
    }
    static show(t272, e176 = {}) {
        return new F(t272, e176);
    }
    static fromEvent(t273, e178 = {}) {
        if (t273.defaultPrevented) return;
        if (t273.button && 0 !== t273.button) return;
        if (t273.ctrlKey || t273.metaKey || t273.shiftKey) return;
        const i110 = t273.composedPath()[0];
        let s73, o63, n42, a25 = i110;
        if ((a25.matches("[data-fancybox-trigger]") || (a25 = a25.closest("[data-fancybox-trigger]"))) && (s73 = a25 && a25.dataset && a25.dataset.fancyboxTrigger), s73) {
            const t274 = document.querySelectorAll(`[data-fancybox="${s73}"]`), e177 = parseInt(a25.dataset.fancyboxIndex, 10) || 0;
            a25 = t274.length ? t274[e177] : a25;
        }
        a25 || (a25 = i110), Array.from(F.openers.keys()).reverse().some((e179)=>{
            n42 = a25;
            let i111 = !1;
            try {
                n42 instanceof Element && ("string" == typeof e179 || e179 instanceof String) && (i111 = n42.matches(e179) || (n42 = n42.closest(e179)));
            } catch (t) {}
            return !!i111 && (t273.preventDefault(), o63 = e179, !0);
        });
        let r13 = !1;
        if (o63) {
            e178.event = t273, e178.target = n42, n42.origTarget = i110, r13 = F.fromOpener(o63, e178);
            const s74 = F.getInstance();
            s74 && "ready" === s74.state && t273.detail && document.body.classList.add("is-using-mouse");
        }
        return r13;
    }
    static fromOpener(t275, i112 = {}) {
        let s75 = [], o64 = i112.startIndex || 0, n43 = i112.target || null;
        const a26 = void 0 !== (i112 = e({}, i112, F.openers.get(t275))).groupAll && i112.groupAll, r14 = void 0 === i112.groupAttr ? "data-fancybox" : i112.groupAttr, h12 = r14 && n43 ? n43.getAttribute(`${r14}`) : "";
        if (!n43 || h12 || a26) {
            const e180 = i112.root || (n43 ? n43.getRootNode() : document.body);
            s75 = [].slice.call(e180.querySelectorAll(t275));
        }
        if (n43 && !a26 && (s75 = h12 ? s75.filter((t276)=>t276.getAttribute(`${r14}`) === h12) : [
            n43
        ]), !s75.length) return !1;
        const l10 = F.getInstance();
        return !(l10 && s75.indexOf(l10.options.$trigger) > -1) && (o64 = n43 ? s75.indexOf(n43) : o64, s75 = s75.map(function(t278) {
            const e181 = [
                "false",
                "0",
                "no",
                "null",
                "undefined"
            ], i113 = [
                "true",
                "1",
                "yes"
            ], s76 = Object.assign({}, t278.dataset), o65 = {};
            for (let [t277, n44] of Object.entries(s76))if ("fancybox" !== t277) {
                if ("width" === t277 || "height" === t277) o65[`_${t277}`] = n44;
                else if ("string" == typeof n44 || n44 instanceof String) {
                    if (e181.indexOf(n44) > -1) o65[t277] = !1;
                    else if (i113.indexOf(o65[t277]) > -1) o65[t277] = !0;
                    else try {
                        o65[t277] = JSON.parse(n44);
                    } catch (e) {
                        o65[t277] = n44;
                    }
                } else o65[t277] = n44;
            }
            return t278 instanceof Element && (o65.$trigger = t278), o65;
        }), new F(s75, e({}, i112, {
            startIndex: o64,
            $trigger: n43
        })));
    }
    static bind(t279, e182 = {}) {
        function i114() {
            document.body.addEventListener("click", F.fromEvent, !1);
        }
        v && (F.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? i114() : document.addEventListener("DOMContentLoaded", i114)), F.openers.set(t279, e182));
    }
    static unbind(t280) {
        F.openers.delete(t280), F.openers.size || F.destroy();
    }
    static destroy() {
        let t281;
        for(; t281 = F.getInstance();)t281.destroy();
        F.openers = new Map, document.body.removeEventListener("click", F.fromEvent, !1);
    }
    static getInstance(t282) {
        if (t282) return M.get(t282);
        return Array.from(M.values()).reverse().find((t283)=>![
                "closing",
                "customClosing",
                "destroy"
            ].includes(t283.state) && t283) || null;
    }
    static close(t285 = !0, e183) {
        if (t285) for (const t284 of M.values())t284.close(e183);
        else {
            const t286 = F.getInstance();
            t286 && t286.close(e183);
        }
    }
    static next() {
        const t287 = F.getInstance();
        t287 && t287.next();
    }
    static prev() {
        const t288 = F.getInstance();
        t288 && t288.prev();
    }
}
F.version = "4.0.27", F.defaults = O, F.openers = new Map, F.Plugins = k, F.bind("[data-fancybox]");
for (const [t1, e1] of Object.entries(F.Plugins || {}))"function" == typeof e1.create && e1.create(F);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dqKoI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Autoplay", ()=>t);
// @fancyapps/ui/Carousel.Autoplay v4.0.27
class t {
    constructor(t2){
        this.carousel = t2, this.state = "ready";
        for (const t1 of [
            "onReady",
            "onSettle",
            "onMouseEnter",
            "onMouseLeave"
        ])this[t1] = this[t1].bind(this);
        this.events = {
            ready: this.onReady,
            settle: this.onSettle
        };
    }
    onReady() {
        this.start();
    }
    onSettle() {
        "play" === this.state && this.set();
    }
    onMouseEnter() {
        "play" === this.state && (this.state = "pause", this.clear());
    }
    onMouseLeave() {
        "pause" === this.state && (this.state = "play", this.set());
    }
    set() {
        this.clear(), this.timer = setTimeout(()=>{
            "play" === this.state && this.carousel.slideTo(this.carousel.pageIndex + 1);
        }, this.carousel.option("Autoplay.timeout"));
    }
    clear() {
        this.timer && (clearTimeout(this.timer), this.timer = null);
    }
    start() {
        this.set(), this.state = "play", this.carousel.option("Autoplay.hoverPause") && (this.carousel.$container.addEventListener("mouseenter", this.onMouseEnter, !1), this.carousel.$container.addEventListener("mouseleave", this.onMouseLeave, !1));
    }
    stop() {
        this.clear(), this.state = "ready", this.carousel.$container.removeEventListener("mouseenter", this.onMouseEnter, !1), this.carousel.$container.removeEventListener("mouseleave", this.onMouseLeave, !1);
    }
    attach() {
        this.carousel.on(this.events);
    }
    detach() {
        this.stop(), this.carousel.off(this.events), this.carousel = null;
    }
}
var e;
t.defaults = {
    timeout: 3e3,
    hoverPause: !0
}, "undefined" != typeof Carousel && "object" == typeof (e = Carousel.Plugins) && null !== e && e.constructor === Object && "[object Object]" === Object.prototype.toString.call(e) && (Carousel.Plugins.Autoplay = t);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hGw59","1SICI"], "1SICI", "parcelRequire0190")

//# sourceMappingURL=404.18dbc454.js.map
