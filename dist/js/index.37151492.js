(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLCustomElement = exports.HTMLCustomElement = function (_HTMLElement) {
    _inherits(HTMLCustomElement, _HTMLElement);

    //@ts-ignore
    function HTMLCustomElement(_) {
        var _this, _ret;

        _classCallCheck(this, HTMLCustomElement);

        return _ret = ((_ = (_this = _possibleConstructorReturn(this, _HTMLElement.call(this, _)), _this)).init(), _), _possibleConstructorReturn(_this, _ret);
    }

    HTMLCustomElement.prototype.init = function init() {};

    return HTMLCustomElement;
}(HTMLElement);

//# sourceMappingURL=HTMLCustomElement.js.map

},{}],2:[function(require,module,exports){
'use strict';

require('./sidraResearch/sidra-research.element');

// sidraService.getListPesquisas().then(pesquisas => {
// const pesquisa = pesquisas[0];
var el = document.querySelector('sidra-research');
setTimeout(function () {
  el.setAttribute('research-title', 'Alterado!!!');
}, 1000);
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

},{"./sidraResearch/sidra-research.element":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SidraResearchElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTMLCustomElement2 = require("../helpers/HTMLCustomElement");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attributes;
(function (attributes) {
    attributes["title"] = "research-title";
})(attributes || (attributes = {}));
var events;
(function (events) {
    events["domInitialized"] = "sidra-research-dom-initialized";
})(events || (events = {}));

var SidraResearchElement = exports.SidraResearchElement = function (_HTMLCustomElement) {
    _inherits(SidraResearchElement, _HTMLCustomElement);

    function SidraResearchElement() {
        _classCallCheck(this, SidraResearchElement);

        var _this = _possibleConstructorReturn(this, _HTMLCustomElement.call(this));
        //@ts-ignore


        _this._dom = {
            ready: false,
            _template: "\n    <h3 research-title></h3>\n    <ul reserach-list></ul>\n    ",
            elements: {}
        };
        _this.researchTitle = '';
        _this._dom.elements.shadowRoot = _this.attachShadow({ mode: 'open' });
        _this.addEventListener(events.domInitialized, function () {
            return _this._updateAttributes();
        });
        return _this;
    }

    SidraResearchElement.prototype.connectedCallback = function connectedCallback() {
        debugger;
        this._createDOMBase();
        this._dom.ready = true;
        this.dispatchEvent(new CustomEvent(events.domInitialized));
    };

    SidraResearchElement.prototype.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case attributes.title:
                    this.researchTitle = newValue;
                    this._updateResearchTitle(newValue);
            }
        }
    };
    /*** DOM MANIPULATION METHODS ***/


    SidraResearchElement.prototype._createDOMBase = function _createDOMBase() {
        var div = document.createElement('div');
        div.innerHTML = this._dom._template;
        var template = div;
        if (this._hasInnerTemplate()) {
            template = this.querySelector('template');
        }
        this._convertTemplate(template);
    };

    SidraResearchElement.prototype._convertTemplate = function _convertTemplate(templateEl) {
        var researchTitle = void 0;
        if (templateEl.content) {
            researchTitle = templateEl.content.querySelector('[research-title]');
        } else {
            researchTitle = templateEl.querySelector('[research-title]');
        }
        researchTitle.className = researchTitle.className;
        this._dom.elements.researchTitle = researchTitle;
        this._dom.elements.shadowRoot.appendChild(this._dom.elements.researchTitle);
        templateEl.parentElement.removeChild(templateEl);
    };

    SidraResearchElement.prototype._hasInnerTemplate = function _hasInnerTemplate() {
        return this.querySelector('template');
    };

    SidraResearchElement.prototype._updateAttributes = function _updateAttributes() {
        this._updateResearchTitle(this.researchTitle);
    };

    SidraResearchElement.prototype._updateResearchTitle = function _updateResearchTitle() {
        var newValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (!this._dom.elements.researchTitle) {
            return;
        }
        if (this._dom.elements.researchTitle.textContent !== newValue) {
            this._dom.elements.researchTitle.textContent = newValue;
        }
    };

    _createClass(SidraResearchElement, null, [{
        key: "observedAttributes",
        get: function get() {
            return ['research-title'];
        }
    }]);

    return SidraResearchElement;
}(_HTMLCustomElement2.HTMLCustomElement);

customElements.define('sidra-research', SidraResearchElement);

//# sourceMappingURL=sidra-research.element.js.map

},{"../helpers/HTMLCustomElement":1}]},{},[2])//# sourceMappingURL=index.js.map
