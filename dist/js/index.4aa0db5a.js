(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResearchesListController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResearchesList = require('./../models/ResearchesList');

var _debounce = require('../helpers/debounce');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchesListController = exports.ResearchesListController = function () {
    function ResearchesListController(_model, _view) {
        var _this = this;

        _classCallCheck(this, ResearchesListController);

        this._model = _model;
        this._view = _view;
        var input = document.querySelector("[research-view-input]");
        input.oninput = (0, _debounce.debounce)(function (evt) {
            _this.onInputChange(evt);
        }, 300);
        this._updateView = function (model) {
            return _this._view.update(model);
        };
        this._model.on(_ResearchesList.ResearchesList.EVENTS.ON_CHANGE, this._updateView);
    }

    _createClass(ResearchesListController, [{
        key: 'onInputChange',
        value: function onInputChange(evt) {
            evt.stopPropagation();
            this._model.filterList(evt.target['value']);
        }
    }]);

    return ResearchesListController;
}();
},{"../helpers/debounce":2,"./../models/ResearchesList":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounce = debounce;
function debounce(fn) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

    var timerId = void 0;
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (timerId) clearInterval(timerId);
        timerId = setTimeout(function () {
            return fn.apply(undefined, args);
        }, timeout);
    };
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNumber = isNumber;
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
},{}],4:[function(require,module,exports){
'use strict';

var _SidraResearchView = require('./views/SidraResearchView');

var _SidraService = require('./services/SidraService');

var _ResearchesList = require('./models/ResearchesList');

var _ResearchesListView = require('./views/ResearchesListView');

var _ResearchesListController = require('./controllers/ResearchesListController');

var researchesList = _SidraService.sidraService.getListPesquisas().then(function (researches) {
  return new _ResearchesList.ResearchesList(researches);
});
var researchesListView = new _ResearchesListView.ResearchesListView(document.querySelector("[research-view-respostas]"), _SidraResearchView.SidraResearchView);
var researchesListController = researchesList.then(function (researchesList) {
  return new _ResearchesListController.ResearchesListController(researchesList, researchesListView);
});
},{"./controllers/ResearchesListController":1,"./models/ResearchesList":5,"./services/SidraService":8,"./views/ResearchesListView":10,"./views/SidraResearchView":11}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResearchesList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SidraResearch = require("./SidraResearch");

var _Listenable2 = require("../shared/Listenable");

var _isNumber = require("../helpers/isNumber");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchesList = exports.ResearchesList = function (_Listenable) {
    _inherits(ResearchesList, _Listenable);

    function ResearchesList(list) {
        _classCallCheck(this, ResearchesList);

        var _this = _possibleConstructorReturn(this, (ResearchesList.__proto__ || Object.getPrototypeOf(ResearchesList)).call(this));

        _this._list = {
            full: [],
            filtered: [],
            term: ''
        };
        _this._events = _defineProperty({}, ResearchesList.EVENTS.ON_CHANGE, []);
        _this.registerList(list);
        return _this;
    }

    _createClass(ResearchesList, [{
        key: "filterList",
        value: function filterList(term) {
            this._list.term = term;
            if (term) {
                var filterFn = (0, _isNumber.isNumber)(term) ? this._filterTablesById(parseInt(term, 10)) : this._filterTablesByStr(term);
                this._list.filtered = this._list.full.reduce(filterFn, []);
            } else {
                this._list.filtered = this.list;
            }
            this._emit(ResearchesList.EVENTS.ON_CHANGE);
            return this._list.filtered;
        }
    }, {
        key: "registerList",
        value: function registerList(list) {
            this._list.full = list;
            this.filterList(this._list.term);
        }
    }, {
        key: "_filterTablesByStr",
        value: function _filterTablesByStr(str) {
            return function (arr, research) {
                var tables = research.filterTables(str);
                if (tables.length > 0) {
                    arr.push(new _SidraResearch.SidraResearch({
                        id: research.id,
                        name: research.name,
                        tables: tables
                    }));
                }
                return arr;
            };
        }
    }, {
        key: "_filterTablesById",
        value: function _filterTablesById(id) {
            return function (arr, research) {
                var table = research.getTable(id);
                if (table) {
                    arr.push(new _SidraResearch.SidraResearch({
                        id: research.id,
                        name: research.name,
                        tables: [table]
                    }));
                }
                return arr;
            };
        }
    }, {
        key: "_emit",
        value: function _emit(eventName) {
            if (this._events[eventName]) {
                this.trigger(eventName, this);
            }
        }
    }, {
        key: "list",
        get: function get() {
            return this._list.filtered.slice(0);
        }
    }]);

    return ResearchesList;
}(_Listenable2.Listenable);

ResearchesList.EVENTS = {
    ON_CHANGE: 'onChange'
};
},{"../helpers/isNumber":3,"../shared/Listenable":9,"./SidraResearch":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SidraResearch = exports.SidraResearch = function () {
    _createClass(SidraResearch, null, [{
        key: "convert",
        value: function convert(params) {
            return {
                id: params.id,
                name: params.nome,
                tables: params.agregados.map(function (_ref) {
                    var id = _ref.id,
                        nome = _ref.nome;
                    return { id: parseInt(id, 10), name: nome };
                })
            };
        }
    }]);

    function SidraResearch(params) {
        _classCallCheck(this, SidraResearch);

        this.id = params.id;
        this.name = params.name;
        this.tables = params.tables;
        this.tables.forEach(Object.freeze);
        Object.freeze(this);
    }

    _createClass(SidraResearch, [{
        key: "filterTables",
        value: function filterTables(str) {
            return this.tables.filter(function (table) {
                return table.name.includes(str);
            });
        }
    }, {
        key: "getTable",
        value: function getTable(id) {
            return this.tables.find(function (table) {
                return table.id === id;
            });
        }
    }]);

    return SidraResearch;
}();
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestService = exports.RequestService = function () {
    function RequestService() {
        _classCallCheck(this, RequestService);
    }

    _createClass(RequestService, [{
        key: "get",
        value: function get(url) {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open('GET', url, true);
                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status >= 200 && this.status < 400) {
                            resolve(this.responseText || this.response);
                        } else {
                            reject(Error(this.statusText));
                        }
                    }
                };
                request.onerror = function () {
                    reject(Error("Network Error"));
                };
                request.send();
                request = null;
            });
        }
    }, {
        key: "getJSON",
        value: function getJSON(url) {
            return this.get(url).then(function (response) {
                try {
                    return JSON.parse(response);
                } catch (err) {
                    var error = new Error("Invalid JSON.\nOriginal error:" + err.message);
                    error.stack = err.stack;
                    throw error;
                }
            });
        }
    }]);

    return RequestService;
}();

var requestService = exports.requestService = new RequestService();
},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sidraService = exports.SidraService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestService = require('./RequestService');

var _SidraResearch = require('../models/SidraResearch');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SidraService = exports.SidraService = function () {
    function SidraService(_requestService) {
        _classCallCheck(this, SidraService);

        this._requestService = _requestService;
        this._baseUrl = "https://servicodados.ibge.gov.br/api/v3/agregados";
    }

    _createClass(SidraService, [{
        key: 'getListPesquisas',
        value: function getListPesquisas() {
            return this._requestService.getJSON(this._baseUrl).then(function (response) {
                return response.map(function (obj) {
                    return new _SidraResearch.SidraResearch(_SidraResearch.SidraResearch.convert(obj));
                });
            }).catch(function (err) {
                err.message = "Não foi possível acessar a lista de pesquisas do Sidra.\nErro original:\n" + err.message;
                throw err;
            });
        }
    }]);

    return SidraService;
}();

var sidraService = exports.sidraService = new SidraService(_RequestService.requestService);
},{"../models/SidraResearch":6,"./RequestService":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Listenable = exports.Listenable = function () {
    function Listenable() {
        _classCallCheck(this, Listenable);

        this._events = {};
    }

    _createClass(Listenable, [{
        key: "on",
        value: function on(eventName, fn) {
            if (this._events[eventName]) {
                var obj = { once: false, fn: fn };
                this._events[eventName].push(obj);
            }
            return this;
        }
    }, {
        key: "once",
        value: function once(eventName, fn) {
            if (this._events[eventName]) {
                var obj = { once: true, fn: fn };
                this._events[eventName].push(obj);
            }
            return this;
        }
    }, {
        key: "off",
        value: function off(eventName, fn) {
            if (this._events[eventName]) {
                this._events[eventName] = this._events[eventName].filter(function (obj) {
                    return obj.fn !== fn;
                });
            }
            return this;
        }
    }, {
        key: "trigger",
        value: function trigger(eventName) {
            var _this = this;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            if (this._events[eventName]) {
                this._events[eventName].forEach(function (obj) {
                    if (obj.once) {
                        _this.off(eventName, obj.fn);
                    }
                    obj.fn.apply(obj, args);
                });
            }
            return this;
        }
    }]);

    return Listenable;
}();
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchesListView = exports.ResearchesListView = function () {
    function ResearchesListView(_element, _subviewConstructor) {
        _classCallCheck(this, ResearchesListView);

        this._element = _element;
        this._subviewConstructor = _subviewConstructor;
    }

    _createClass(ResearchesListView, [{
        key: 'update',
        value: function update(model) {
            this._element.innerHTML = this._template(model);
            return this._element;
        }
    }, {
        key: '_template',
        value: function _template(model) {
            var _this = this;

            return '\n        <ul>\n        ' + model.list.map(function (research) {
                if (research.tables.length === 0) {
                    return '';
                }
                var view = _this._createSubview(document.createElement('div'), 'li');
                return view.update(research).innerHTML;
            }).join('') + '\n        </ul>\n        ';
        }
    }, {
        key: '_createSubview',
        value: function _createSubview(element, tag) {
            return new this._subviewConstructor(element, tag);
        }
    }]);

    return ResearchesListView;
}();
},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SidraResearchView = exports.SidraResearchView = function () {
    function SidraResearchView(_element, _tag) {
        _classCallCheck(this, SidraResearchView);

        this._element = _element;
        this._tag = _tag;
    }

    _createClass(SidraResearchView, [{
        key: '_template',
        value: function _template(model) {
            return '\n            <' + this._tag + ' research-' + model.id + ' data-id="' + model.id + '">' + model.name + '</' + this._tag + '>\n            \n            ' + (model.tables.length > 0 ? '<ul research-' + model.id + ' research-tables>\n                    ' + model.tables.map(function (table) {
                return '\n                        <li research-table data-research=' + model.id + ' data-id="' + table.id + '">' + table.name + '</li>\n                    ';
            }).join('') + '\n                </ul>' : '') + '\n        ';
        }
    }, {
        key: 'update',
        value: function update(model) {
            this._element.innerHTML = this._template(model);
            return this._element;
        }
    }]);

    return SidraResearchView;
}();
},{}]},{},[4])