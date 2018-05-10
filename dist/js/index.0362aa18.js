(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],2:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var environment = function () {
    return {
        isBrowser: Object.prototype.toString.call(typeof window !== 'undefined' ? window : 0).toLowerCase() === '[object window]',
        isNode: Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0).toLowerCase() === '[object process]',
        isWebWorker: document === undefined && typeof postMessage === 'function',
        getEnvironment: function getEnvironment() {
            return undefined.isBrowser ? 'browser' : undefined.isNode ? 'node' : undefined.isWebWorker ? 'worker' : 'unknown';
        }
    };
}();
var isBrowser = environment.isBrowser;
var isNode = environment.isNode;
var isWebWorker = environment.isWebWorker;
var getEnvironment = function getEnvironment() {
    return environment.getEnvironment();
};
exports.isBrowser = isBrowser;
exports.isNode = isNode;
exports.isWebWorker = isWebWorker;
exports.getEnvironment = getEnvironment;

//# sourceMappingURL=env-detection.js.map

}).call(this,require("g5I+bs"))
},{"g5I+bs":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateHack = undefined;

var _envDetection = require('./env-detection');

var TemplateHack = {
    _getId: function () {
        var counter = 0;
        return function () {
            return '__template_id_' + ++counter + '__';
        };
    }(),
    _tags: new Set(),
    registerCustomElement: function registerCustomElement(tagName) {
        return TemplateHack._tags.add(tagName.toLowerCase());
    },
    processTemplates: function processTemplates() {
        console.log('processing...');
        var templates = document.querySelectorAll('template');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = templates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var template = _step.value;

                var parentTag = template.parentElement.tagName.toLowerCase();
                if (undefined._tags.has(parentTag)) {
                    var id = TemplateHack._getId();
                    template.setAttribute('template_id', id);
                    template.parentElement.setAttribute('template_reference', id);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
};
if (_envDetection.isBrowser) {
    document.addEventListener('DOMContentLoaded', function () {
        TemplateHack.processTemplates();
    });
}
exports.TemplateHack = TemplateHack;

//# sourceMappingURL=template-hack.js.map

},{"./env-detection":2}],4:[function(require,module,exports){
'use strict';

var _sidraResearch = require('./sidraResearch/sidra-research.element');

var _el = new _sidraResearch.SidraResearchElement();
// sidraService.getListPesquisas().then(pesquisas => {
// const pesquisa = pesquisas[0];
var el = document.querySelector('sidra-research');
// el.setAttribute('item', JSON.stringify(pesquisa));
// });
/*
class AppDrawer extends HTMLElement {

    // A getter/setter for an open property.
    get open() {
      return this.hasAttribute('open');
    }
  
    set open(val) {
      // Reflect the value of the open property as an HTML attribute.
      if (val) {
        this.setAttribute('open', '');
      } else {
        this.removeAttribute('open');
      }
      this.toggleDrawer();
    }
  
    // A getter/setter for a disabled property.
    get disabled() {
      return this.hasAttribute('disabled');
    }
  
    set disabled(val) {
      // Reflect the value of the disabled property as an HTML attribute.
      if (val) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }
  
    // Can define constructor arguments if you wish.
    constructor() {
      // If you define a ctor, always call super() first!
      // This is specific to CE and required by the spec.
      super();
  
      // Setup a click listener on <app-drawer> itself.
      this.addEventListener('click', e => {
        // Don't toggle the drawer if it's disabled.
        if (this.disabled) {
          return;
        }
        this.toggleDrawer();
      });
    }
  
    toggleDrawer() {

    }
  }
  
  elementsDefine('app-drawer', AppDrawer);
  */

//# sourceMappingURL=index.js.map

},{"./sidraResearch/sidra-research.element":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SidraResearchElement = undefined;

var _templateHack = require("../helpers/template-hack");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attributes;
(function (attributes) {
    attributes["item"] = "item";
    attributes["filterText"] = "filterText";
    attributes["tableId"] = "tableId";
})(attributes || (attributes = {}));

var SidraResearchElement = exports.SidraResearchElement = function (_HTMLElement) {
    _inherits(SidraResearchElement, _HTMLElement);

    function SidraResearchElement() {
        _classCallCheck(this, SidraResearchElement);

        var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

        _this._dom = {};
        debugger;
        console.log('ctor2');
        _this._createDOMBase();
        console.log('ctor2');
        return _this;
    }
    /*** DOM MANIPULATION METHODS ***/


    SidraResearchElement.prototype._createDOMBase = function _createDOMBase() {
        if (this._hasInnerTemplate()) {
            return this._convertInnerTemplate();
        }
        var researchTitle = document.createElement('h3');
        researchTitle.setAttribute('research-title', '');
        researchTitle.className = 'sidra-research__research-title';
        this._dom.researchTitle = researchTitle;
        this.appendChild(this._dom.researchTitle);
    };

    SidraResearchElement.prototype._convertInnerTemplate = function _convertInnerTemplate() {
        var templateEl = this.querySelector('[template]');
        debugger;
        var researchTitle = templateEl.querySelector('[research-title]') || document.createElement('h3');
        console.log('t', templateEl);
        researchTitle.className = researchTitle.className + ' sidra-research__research-title';
        this._dom.researchTitle = researchTitle;
        this.appendChild(this._dom.researchTitle);
        templateEl.parentElement.removeChild(templateEl);
    };

    SidraResearchElement.prototype._hasInnerTemplate = function _hasInnerTemplate() {
        return this.querySelector('[template]');
    };

    return SidraResearchElement;
}(HTMLElement);

debugger;
_templateHack.TemplateHack.registerCustomElement('sidra-research');
customElements.define('sidra-research', SidraResearchElement);

//# sourceMappingURL=sidra-research.element.js.map

},{"../helpers/template-hack":3}]},{},[4])//# sourceMappingURL=index.js.map
