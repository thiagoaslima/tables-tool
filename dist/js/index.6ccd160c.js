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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elementsDefine = undefined;

var _envDetection = require("./env-detection");

var elementsDefine = function () {
    var docReady = false;
    var elements = {};
    var domHandler = function domHandler() {
        docReady = true;
        define(Object.keys(elements).map(function (key) {
            return elements[key];
        }));
        elements = {};
    };
    return function (tagName, constructor, options) {
        if (_envDetection.isBrowser && !docReady) {
            document.addEventListener('DOMContentLoaded', domHandler);
            updateElements({ tagName: tagName, constructor: constructor, options: options }, elements);
        } else {
            customElements.define(tagName, constructor, options);
        }
    };
}();
function define(elements) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;

            customElements.define(element.tagName, element.constructor, element.options || {});
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
function updateElements(element, elements) {
    if (elements[element.tagName] && element.options) {
        elements[element.tagName].options = Object.assign({}, elements[element.tagName].options || {}, element.options);
    } else {
        elements[element.tagName] = Object.assign({}, element);
    }
}
exports.elementsDefine = elementsDefine;
},{"./env-detection":3}],3:[function(require,module,exports){
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
}).call(this,require("g5I+bs"))
},{"g5I+bs":1}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementsDefine = require('./helpers/elements-define');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var AppDrawer = function (_CustomElement2) {
    _inherits(AppDrawer, _CustomElement2);

    _createClass(AppDrawer, [{
        key: 'open',

        // A getter/setter for an open property.
        get: function get() {
            return this.hasAttribute('open');
        },
        set: function set(val) {
            // Reflect the value of the open property as an HTML attribute.
            if (val) {
                this.setAttribute('open', '');
            } else {
                this.removeAttribute('open');
            }
            this.toggleDrawer();
        }
        // A getter/setter for a disabled property.

    }, {
        key: 'disabled',
        get: function get() {
            return this.hasAttribute('disabled');
        },
        set: function set(val) {
            // Reflect the value of the disabled property as an HTML attribute.
            if (val) {
                this.setAttribute('disabled', '');
            } else {
                this.removeAttribute('disabled');
            }
        }
        // Can define constructor arguments if you wish.

    }]);

    function AppDrawer() {
        _classCallCheck(this, AppDrawer);

        // Setup a click listener on <app-drawer> itself.
        var _this = _possibleConstructorReturn(this, (AppDrawer.__proto__ || Object.getPrototypeOf(AppDrawer)).call(this));
        // If you define a ctor, always call super() first!
        // This is specific to CE and required by the spec.


        _this.addEventListener('click', function (e) {
            // Don't toggle the drawer if it's disabled.
            if (_this.disabled) {
                return;
            }
            _this.toggleDrawer();
        });
        return _this;
    }

    _createClass(AppDrawer, [{
        key: 'toggleDrawer',
        value: function toggleDrawer() {}
    }]);

    return AppDrawer;
}(_CustomElement);

(0, _elementsDefine.elementsDefine)('app-drawer', AppDrawer);
},{"./helpers/elements-define":2}]},{},[4])