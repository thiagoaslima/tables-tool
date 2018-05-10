(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./sidraResearch/sidra-research.element');

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

},{"./sidraResearch/sidra-research.element":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attributes;
(function (attributes) {
    attributes["item"] = "item";
    attributes["filterText"] = "filterText";
    attributes["tableId"] = "tableId";
})(attributes || (attributes = {}));
var events;
(function (events) {
    events["domInitialized"] = "dom-initialized";
})(events || (events = {}));

var SidraResearchElement = exports.SidraResearchElement = function (_HTMLElement) {
    _inherits(SidraResearchElement, _HTMLElement);

    function SidraResearchElement() {
        _classCallCheck(this, SidraResearchElement);

        var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

        _this._dom = {
            ready: false,
            _template: "\n    <h3 research-title></h3>\n    <ul reserach-list></ul>\n    "
        };
        _this.title = '';
        _this.addEventListener(events.domInitialized, function () {
            return _this._updateAttributes();
        });
        return _this;
    }

    SidraResearchElement.prototype.connectedCallback = function connectedCallback() {
        this._createDOMBase();
        this._dom.ready = true;
        this.dispatchEvent(new CustomEvent(events.domInitialized));
    };

    SidraResearchElement.prototype.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case 'title':
                    this.title = newValue;
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
            template = this.querySelector('[template]');
        }
        this._convertTemplate(template);
    };

    SidraResearchElement.prototype._convertTemplate = function _convertTemplate(templateEl) {
        var researchTitle = templateEl.querySelector('[research-title]') || document.createElement('h3');
        researchTitle.className = researchTitle.className + ' sidra-research__research-title';
        this._dom.researchTitle = researchTitle;
        this.appendChild(this._dom.researchTitle);
        templateEl.parentElement.removeChild(templateEl);
    };

    SidraResearchElement.prototype._hasInnerTemplate = function _hasInnerTemplate() {
        return this.querySelector('[template]');
    };

    SidraResearchElement.prototype._updateAttributes = function _updateAttributes() {
        this._updateResearchTitle(this.title);
    };

    SidraResearchElement.prototype._updateResearchTitle = function _updateResearchTitle() {
        var newValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (!this._dom.researchTitle) {
            return;
        }
        if (this._dom.researchTitle.textContent !== newValue) {
            this._dom.researchTitle.textContent = newValue;
        }
    };

    _createClass(SidraResearchElement, null, [{
        key: "observedAttributes",
        get: function get() {
            return ['title'];
        }
    }]);

    return SidraResearchElement;
}(HTMLElement);

customElements.define('sidra-research', SidraResearchElement);

//# sourceMappingURL=sidra-research.element.js.map

},{}]},{},[1])//# sourceMappingURL=index.js.map
