(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ResearchesView = require('./researches/ResearchesView');

var _ResearchesList = require('./researches/ResearchesList');

var _SidraService = require('./services/SidraService');

var researchesList = new _ResearchesList.ResearchesList(_SidraService.sidraService);
var view = new _ResearchesView.ResearchesView(document.querySelector('#research-view'), researchesList);
window['view'] = view;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvaW5kZXguanMiXSwibmFtZXMiOlsicmVzZWFyY2hlc0xpc3QiLCJ2aWV3IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBLElBQU1BLGlCQUFpQiw4REFBdkI7QUFDQSxJQUFNQyxPQUFPLG1DQUFtQkMsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbkIsRUFBNkRILGNBQTdELENBQWI7QUFDQUksT0FBTyxNQUFQLElBQWlCSCxJQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc2VhcmNoZXNWaWV3IH0gZnJvbSAnLi9yZXNlYXJjaGVzL1Jlc2VhcmNoZXNWaWV3JztcbmltcG9ydCB7IFJlc2VhcmNoZXNMaXN0IH0gZnJvbSAnLi9yZXNlYXJjaGVzL1Jlc2VhcmNoZXNMaXN0JztcbmltcG9ydCB7IHNpZHJhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvU2lkcmFTZXJ2aWNlJztcbmNvbnN0IHJlc2VhcmNoZXNMaXN0ID0gbmV3IFJlc2VhcmNoZXNMaXN0KHNpZHJhU2VydmljZSk7XG5jb25zdCB2aWV3ID0gbmV3IFJlc2VhcmNoZXNWaWV3KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlYXJjaC12aWV3JyksIHJlc2VhcmNoZXNMaXN0KTtcbndpbmRvd1sndmlldyddID0gdmlldztcbiJdfQ==
},{"./researches/ResearchesList":2,"./researches/ResearchesView":3,"./services/SidraService":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResearchesList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Listenable2 = require("../shared/Listenable");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchesList = exports.ResearchesList = function (_Listenable) {
    _inherits(ResearchesList, _Listenable);

    function ResearchesList(_sidraService) {
        var _this$_events;

        _classCallCheck(this, ResearchesList);

        var _this = _possibleConstructorReturn(this, (ResearchesList.__proto__ || Object.getPrototypeOf(ResearchesList)).call(this));

        _this._sidraService = _sidraService;
        _this._states = {
            initialized: false,
            list: []
        };
        _this._EVENTS = {
            INIT: 'init',
            LIST: {
                UPDATED: "list:updated"
            }
        };
        _this._events = (_this$_events = {}, _defineProperty(_this$_events, _this._EVENTS.INIT, []), _defineProperty(_this$_events, _this._EVENTS.LIST.UPDATED, []), _this$_events);
        _this._sidraService.getListPesquisas().then(function (list) {
            _this._initialize();
            _this.updateList(list);
        });
        return _this;
    }

    _createClass(ResearchesList, [{
        key: "getResearch",
        value: function getResearch(researchId) {
            return this._states.list.find(function (obj) {
                return obj.id === researchId;
            });
        }
    }, {
        key: "getTable",
        value: function getTable(tableId) {
            var _id = tableId.toString();
            var res = null;
            for (var idx = 0, len = this._states.list.length; idx < len; idx++) {
                var obj = this._states.list[idx];
                res = obj.agregados.find(function (item) {
                    return item.id === _id;
                });
                if (res) {
                    break;
                }
            }
            return res;
        }
    }, {
        key: "updateList",
        value: function updateList(list) {
            this._states.list = list;
            this.trigger(this._EVENTS.LIST.UPDATED, list);
        }
    }, {
        key: "_initialize",
        value: function _initialize() {
            this._states.initialized = true;
            this.trigger(this._EVENTS.INIT);
        }
    }, {
        key: "list",
        get: function get() {
            return this._states.list.slice(0);
        }
    }]);

    return ResearchesList;
}(_Listenable2.Listenable);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvcmVzZWFyY2hlcy9SZXNlYXJjaGVzTGlzdC5qcyJdLCJuYW1lcyI6WyJSZXNlYXJjaGVzTGlzdCIsIl9zaWRyYVNlcnZpY2UiLCJfc3RhdGVzIiwiaW5pdGlhbGl6ZWQiLCJsaXN0IiwiX0VWRU5UUyIsIklOSVQiLCJMSVNUIiwiVVBEQVRFRCIsIl9ldmVudHMiLCJnZXRMaXN0UGVzcXVpc2FzIiwidGhlbiIsIl9pbml0aWFsaXplIiwidXBkYXRlTGlzdCIsInJlc2VhcmNoSWQiLCJmaW5kIiwib2JqIiwiaWQiLCJ0YWJsZUlkIiwiX2lkIiwidG9TdHJpbmciLCJyZXMiLCJpZHgiLCJsZW4iLCJsZW5ndGgiLCJhZ3JlZ2Fkb3MiLCJpdGVtIiwidHJpZ2dlciIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQUNhQSxjLFdBQUFBLGM7OztBQUNULDRCQUFZQyxhQUFaLEVBQTJCO0FBQUE7O0FBQUE7O0FBQUE7O0FBRXZCLGNBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsY0FBS0MsT0FBTCxHQUFlO0FBQ1hDLHlCQUFhLEtBREY7QUFFWEMsa0JBQU07QUFGSyxTQUFmO0FBSUEsY0FBS0MsT0FBTCxHQUFlO0FBQ1hDLGtCQUFNLE1BREs7QUFFWEMsa0JBQU07QUFDRkMseUJBQVM7QUFEUDtBQUZLLFNBQWY7QUFNQSxjQUFLQyxPQUFMLHVEQUNLLE1BQUtKLE9BQUwsQ0FBYUMsSUFEbEIsRUFDeUIsRUFEekIsa0NBRUssTUFBS0QsT0FBTCxDQUFhRSxJQUFiLENBQWtCQyxPQUZ2QixFQUVpQyxFQUZqQztBQUlBLGNBQUtQLGFBQUwsQ0FBbUJTLGdCQUFuQixHQUNLQyxJQURMLENBQ1UsZ0JBQVE7QUFDZCxrQkFBS0MsV0FBTDtBQUNBLGtCQUFLQyxVQUFMLENBQWdCVCxJQUFoQjtBQUNILFNBSkQ7QUFqQnVCO0FBc0IxQjs7OztvQ0FJV1UsVSxFQUFZO0FBQ3BCLG1CQUFPLEtBQUtaLE9BQUwsQ0FBYUUsSUFBYixDQUFrQlcsSUFBbEIsQ0FBdUI7QUFBQSx1QkFBT0MsSUFBSUMsRUFBSixLQUFXSCxVQUFsQjtBQUFBLGFBQXZCLENBQVA7QUFDSDs7O2lDQUNRSSxPLEVBQVM7QUFDZCxnQkFBTUMsTUFBTUQsUUFBUUUsUUFBUixFQUFaO0FBQ0EsZ0JBQUlDLE1BQU0sSUFBVjtBQUNBLGlCQUFLLElBQUlDLE1BQU0sQ0FBVixFQUFhQyxNQUFNLEtBQUtyQixPQUFMLENBQWFFLElBQWIsQ0FBa0JvQixNQUExQyxFQUFrREYsTUFBTUMsR0FBeEQsRUFBNkRELEtBQTdELEVBQW9FO0FBQ2hFLG9CQUFNTixNQUFNLEtBQUtkLE9BQUwsQ0FBYUUsSUFBYixDQUFrQmtCLEdBQWxCLENBQVo7QUFDQUQsc0JBQU1MLElBQUlTLFNBQUosQ0FBY1YsSUFBZCxDQUFtQjtBQUFBLDJCQUFRVyxLQUFLVCxFQUFMLEtBQVlFLEdBQXBCO0FBQUEsaUJBQW5CLENBQU47QUFDQSxvQkFBSUUsR0FBSixFQUFTO0FBQ0w7QUFDSDtBQUNKO0FBQ0QsbUJBQU9BLEdBQVA7QUFDSDs7O21DQUNVakIsSSxFQUFNO0FBQ2IsaUJBQUtGLE9BQUwsQ0FBYUUsSUFBYixHQUFvQkEsSUFBcEI7QUFDQSxpQkFBS3VCLE9BQUwsQ0FBYSxLQUFLdEIsT0FBTCxDQUFhRSxJQUFiLENBQWtCQyxPQUEvQixFQUF3Q0osSUFBeEM7QUFDSDs7O3NDQUNhO0FBQ1YsaUJBQUtGLE9BQUwsQ0FBYUMsV0FBYixHQUEyQixJQUEzQjtBQUNBLGlCQUFLd0IsT0FBTCxDQUFhLEtBQUt0QixPQUFMLENBQWFDLElBQTFCO0FBQ0g7Ozs0QkF6QlU7QUFDUCxtQkFBTyxLQUFLSixPQUFMLENBQWFFLElBQWIsQ0FBa0J3QixLQUFsQixDQUF3QixDQUF4QixDQUFQO0FBQ0giLCJmaWxlIjoiUmVzZWFyY2hlc0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5hYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9MaXN0ZW5hYmxlXCI7XG5leHBvcnQgY2xhc3MgUmVzZWFyY2hlc0xpc3QgZXh0ZW5kcyBMaXN0ZW5hYmxlIHtcbiAgICBjb25zdHJ1Y3Rvcihfc2lkcmFTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3NpZHJhU2VydmljZSA9IF9zaWRyYVNlcnZpY2U7XG4gICAgICAgIHRoaXMuX3N0YXRlcyA9IHtcbiAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpc3Q6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX0VWRU5UUyA9IHtcbiAgICAgICAgICAgIElOSVQ6ICdpbml0JyxcbiAgICAgICAgICAgIExJU1Q6IHtcbiAgICAgICAgICAgICAgICBVUERBVEVEOiBcImxpc3Q6dXBkYXRlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHtcbiAgICAgICAgICAgIFt0aGlzLl9FVkVOVFMuSU5JVF06IFtdLFxuICAgICAgICAgICAgW3RoaXMuX0VWRU5UUy5MSVNULlVQREFURURdOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zaWRyYVNlcnZpY2UuZ2V0TGlzdFBlc3F1aXNhcygpXG4gICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdChsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBsaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVzLmxpc3Quc2xpY2UoMCk7XG4gICAgfVxuICAgIGdldFJlc2VhcmNoKHJlc2VhcmNoSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlcy5saXN0LmZpbmQob2JqID0+IG9iai5pZCA9PT0gcmVzZWFyY2hJZCk7XG4gICAgfVxuICAgIGdldFRhYmxlKHRhYmxlSWQpIHtcbiAgICAgICAgY29uc3QgX2lkID0gdGFibGVJZC50b1N0cmluZygpO1xuICAgICAgICBsZXQgcmVzID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMCwgbGVuID0gdGhpcy5fc3RhdGVzLmxpc3QubGVuZ3RoOyBpZHggPCBsZW47IGlkeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLl9zdGF0ZXMubGlzdFtpZHhdO1xuICAgICAgICAgICAgcmVzID0gb2JqLmFncmVnYWRvcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gX2lkKTtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICB1cGRhdGVMaXN0KGxpc3QpIHtcbiAgICAgICAgdGhpcy5fc3RhdGVzLmxpc3QgPSBsaXN0O1xuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5fRVZFTlRTLkxJU1QuVVBEQVRFRCwgbGlzdCk7XG4gICAgfVxuICAgIF9pbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLl9zdGF0ZXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5fRVZFTlRTLklOSVQpO1xuICAgIH1cbn1cbiJdfQ==
},{"../shared/Listenable":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchesView = exports.ResearchesView = function () {
    function ResearchesView(_container, _researchList) {
        _classCallCheck(this, ResearchesView);

        this._container = _container;
        this._researchList = _researchList;
        this.selector = 'research-selector';
        this.update(this._researchList.list);
        this._researchList.on("list:updated", this.update.bind(this));
    }

    _createClass(ResearchesView, [{
        key: "update",
        value: function update(list) {
            this._container.innerHTML = this._buildTemplate(list);
        }
    }, {
        key: "_buildTemplate",
        value: function _buildTemplate(list) {
            return "\n            <ul>\n            " + list.map(function (obj) {
                return "\n                        <li data-type=\"research\" data-id=\"" + obj.id + "\">\n                            <h2>" + obj.nome + "</h2>\n                            <ul>\n                                " + obj.agregados.map(function (item) {
                    return "\n                                        <li data-type=\"table\" data-id=\"" + item.id + "\">\n                                            " + item.nome + "\n                                        </li>\n                                    ";
                }).join("") + "\n                            </ul>\n                        </li>\n                    ";
            }).join("") + "\n            </ul>\n        ";
        }
    }, {
        key: "template",
        get: function get() {
            return "<input type=\"number\" />";
        }
    }]);

    return ResearchesView;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvcmVzZWFyY2hlcy9SZXNlYXJjaGVzVmlldy5qcyJdLCJuYW1lcyI6WyJSZXNlYXJjaGVzVmlldyIsIl9jb250YWluZXIiLCJfcmVzZWFyY2hMaXN0Iiwic2VsZWN0b3IiLCJ1cGRhdGUiLCJsaXN0Iiwib24iLCJiaW5kIiwiaW5uZXJIVE1MIiwiX2J1aWxkVGVtcGxhdGUiLCJtYXAiLCJvYmoiLCJpZCIsIm5vbWUiLCJhZ3JlZ2Fkb3MiLCJpdGVtIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFhQSxjLFdBQUFBLGM7QUFDVCw0QkFBWUMsVUFBWixFQUF3QkMsYUFBeEIsRUFBdUM7QUFBQTs7QUFDbkMsYUFBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxhQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IsbUJBQWhCO0FBQ0EsYUFBS0MsTUFBTCxDQUFZLEtBQUtGLGFBQUwsQ0FBbUJHLElBQS9CO0FBQ0EsYUFBS0gsYUFBTCxDQUFtQkksRUFBbkIsQ0FBc0IsY0FBdEIsRUFBc0MsS0FBS0YsTUFBTCxDQUFZRyxJQUFaLENBQWlCLElBQWpCLENBQXRDO0FBQ0g7Ozs7K0JBSU1GLEksRUFBTTtBQUNULGlCQUFLSixVQUFMLENBQWdCTyxTQUFoQixHQUE0QixLQUFLQyxjQUFMLENBQW9CSixJQUFwQixDQUE1QjtBQUNIOzs7dUNBQ2NBLEksRUFBTTtBQUNqQix3REFFTUEsS0FBS0ssR0FBTCxDQUFTLGVBQU87QUFDbEIsMkZBQ2dEQyxJQUFJQyxFQURwRCw2Q0FFc0JELElBQUlFLElBRjFCLGlGQUlzQkYsSUFBSUcsU0FBSixDQUFjSixHQUFkLENBQWtCLGdCQUFRO0FBQzVDLDRHQUN5REssS0FBS0gsRUFEOUQseURBRThCRyxLQUFLRixJQUZuQztBQUtILGlCQU5xQixFQU1uQkcsSUFObUIsQ0FNZCxFQU5jLENBSnRCO0FBY0gsYUFmSyxFQWVIQSxJQWZHLENBZUUsRUFmRixDQUZOO0FBb0JIOzs7NEJBM0JjO0FBQ1g7QUFDSCIsImZpbGUiOiJSZXNlYXJjaGVzVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXNlYXJjaGVzVmlldyB7XG4gICAgY29uc3RydWN0b3IoX2NvbnRhaW5lciwgX3Jlc2VhcmNoTGlzdCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBfY29udGFpbmVyO1xuICAgICAgICB0aGlzLl9yZXNlYXJjaExpc3QgPSBfcmVzZWFyY2hMaXN0O1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJ3Jlc2VhcmNoLXNlbGVjdG9yJztcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5fcmVzZWFyY2hMaXN0Lmxpc3QpO1xuICAgICAgICB0aGlzLl9yZXNlYXJjaExpc3Qub24oXCJsaXN0OnVwZGF0ZWRcIiwgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cIm51bWJlclwiIC8+YDtcbiAgICB9XG4gICAgdXBkYXRlKGxpc3QpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuX2J1aWxkVGVtcGxhdGUobGlzdCk7XG4gICAgfVxuICAgIF9idWlsZFRlbXBsYXRlKGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICR7bGlzdC5tYXAob2JqID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS10eXBlPVwicmVzZWFyY2hcIiBkYXRhLWlkPVwiJHtvYmouaWR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiR7b2JqLm5vbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLmFncmVnYWRvcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS10eXBlPVwidGFibGVcIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0ubm9tZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgIH0pLmpvaW4oXCJcIil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICBgO1xuICAgIH1cbn1cbiJdfQ==
},{}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvc2VydmljZXMvUmVxdWVzdFNlcnZpY2UuanMiXSwibmFtZXMiOlsiUmVxdWVzdFNlcnZpY2UiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2UiLCJFcnJvciIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsImdldCIsInRoZW4iLCJKU09OIiwicGFyc2UiLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGFjayIsInJlcXVlc3RTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWFBLGMsV0FBQUEsYzs7Ozs7Ozs0QkFDTEMsRyxFQUFLO0FBQ0wsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxvQkFBSUMsVUFBVSxJQUFJQyxjQUFKLEVBQWQ7QUFDQUQsd0JBQVFFLElBQVIsQ0FBYSxLQUFiLEVBQW9CTixHQUFwQixFQUF5QixJQUF6QjtBQUNBSSx3QkFBUUcsa0JBQVIsR0FBNkIsWUFBWTtBQUNyQyx3QkFBSSxLQUFLQyxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLDRCQUFJLEtBQUtDLE1BQUwsSUFBZSxHQUFmLElBQXNCLEtBQUtBLE1BQUwsR0FBYyxHQUF4QyxFQUE2QztBQUN6Q1Asb0NBQVEsS0FBS1EsWUFBTCxJQUFxQixLQUFLQyxRQUFsQztBQUNILHlCQUZELE1BR0s7QUFDRFIsbUNBQU9TLE1BQU0sS0FBS0MsVUFBWCxDQUFQO0FBQ0g7QUFDSjtBQUNKLGlCQVREO0FBVUFULHdCQUFRVSxPQUFSLEdBQWtCLFlBQVk7QUFDMUJYLDJCQUFPUyxNQUFNLGVBQU4sQ0FBUDtBQUNILGlCQUZEO0FBR0FSLHdCQUFRVyxJQUFSO0FBQ0FYLDBCQUFVLElBQVY7QUFDSCxhQWxCTSxDQUFQO0FBbUJIOzs7Z0NBQ09KLEcsRUFBSztBQUNULG1CQUFPLEtBQUtnQixHQUFMLENBQVNoQixHQUFULEVBQ0ZpQixJQURFLENBQ0csb0JBQVk7QUFDbEIsb0JBQUk7QUFDQSwyQkFBT0MsS0FBS0MsS0FBTCxDQUFXUixRQUFYLENBQVA7QUFDSCxpQkFGRCxDQUdBLE9BQU9TLEdBQVAsRUFBWTtBQUNSLHdCQUFNQyxRQUFRLElBQUlULEtBQUosQ0FBVSxtQ0FBbUNRLElBQUlFLE9BQWpELENBQWQ7QUFDQUQsMEJBQU1FLEtBQU4sR0FBY0gsSUFBSUcsS0FBbEI7QUFDQSwwQkFBTUYsS0FBTjtBQUNIO0FBQ0osYUFWTSxDQUFQO0FBV0g7Ozs7OztBQUVFLElBQU1HLDBDQUFpQixJQUFJekIsY0FBSixFQUF2QiIsImZpbGUiOiJSZXF1ZXN0U2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXF1ZXN0U2VydmljZSB7XG4gICAgZ2V0KHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlVGV4dCB8fCB0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcih0aGlzLnN0YXR1c1RleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEpTT04odXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIkludmFsaWQgSlNPTi5cXG5PcmlnaW5hbCBlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBlcnJvci5zdGFjayA9IGVyci5zdGFjaztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHJlcXVlc3RTZXJ2aWNlID0gbmV3IFJlcXVlc3RTZXJ2aWNlKCk7XG4iXX0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sidraService = exports.SidraService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestService = require("./RequestService");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SidraService = exports.SidraService = function () {
    function SidraService(_requestService) {
        _classCallCheck(this, SidraService);

        this._requestService = _requestService;
        this._baseUrl = "https://servicodados.ibge.gov.br/api/v3/agregados";
    }

    _createClass(SidraService, [{
        key: "getListPesquisas",
        value: function getListPesquisas() {
            return this._requestService.getJSON(this._baseUrl).catch(function (err) {
                err.message = "Não foi possível acessar a lista de pesquisas do Sidra.\nErro original:\n" + err.message;
                throw err;
            });
        }
    }]);

    return SidraService;
}();

var sidraService = exports.sidraService = new SidraService(_RequestService.requestService);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvc2VydmljZXMvU2lkcmFTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIlNpZHJhU2VydmljZSIsIl9yZXF1ZXN0U2VydmljZSIsIl9iYXNlVXJsIiwiZ2V0SlNPTiIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsInNpZHJhU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUFDYUEsWSxXQUFBQSxZO0FBQ1QsMEJBQVlDLGVBQVosRUFBNkI7QUFBQTs7QUFDekIsYUFBS0EsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLG1EQUFoQjtBQUNIOzs7OzJDQUNrQjtBQUNmLG1CQUFPLEtBQUtELGVBQUwsQ0FBcUJFLE9BQXJCLENBQTZCLEtBQUtELFFBQWxDLEVBQ0ZFLEtBREUsQ0FDSSxlQUFPO0FBQ2RDLG9CQUFJQyxPQUFKLEdBQWMsOEVBQThFRCxJQUFJQyxPQUFoRztBQUNBLHNCQUFNRCxHQUFOO0FBQ0gsYUFKTSxDQUFQO0FBS0g7Ozs7OztBQUVFLElBQU1FLHNDQUFlLElBQUlQLFlBQUosZ0NBQXJCIiwiZmlsZSI6IlNpZHJhU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3RTZXJ2aWNlIH0gZnJvbSAnLi9SZXF1ZXN0U2VydmljZSc7XG5leHBvcnQgY2xhc3MgU2lkcmFTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihfcmVxdWVzdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fcmVxdWVzdFNlcnZpY2UgPSBfcmVxdWVzdFNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSBcImh0dHBzOi8vc2Vydmljb2RhZG9zLmliZ2UuZ292LmJyL2FwaS92My9hZ3JlZ2Fkb3NcIjtcbiAgICB9XG4gICAgZ2V0TGlzdFBlc3F1aXNhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RTZXJ2aWNlLmdldEpTT04odGhpcy5fYmFzZVVybClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGEgbGlzdGEgZGUgcGVzcXVpc2FzIGRvIFNpZHJhLlxcbkVycm8gb3JpZ2luYWw6XFxuXCIgKyBlcnIubWVzc2FnZTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHNpZHJhU2VydmljZSA9IG5ldyBTaWRyYVNlcnZpY2UocmVxdWVzdFNlcnZpY2UpO1xuIl19
},{"./RequestService":4}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvc2hhcmVkL0xpc3RlbmFibGUuanMiXSwibmFtZXMiOlsiTGlzdGVuYWJsZSIsIl9ldmVudHMiLCJldmVudE5hbWUiLCJmbiIsIm9iaiIsIm9uY2UiLCJwdXNoIiwiZmlsdGVyIiwiYXJncyIsImZvckVhY2giLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBYUEsVSxXQUFBQSxVO0FBQ1QsMEJBQWM7QUFBQTs7QUFDVixhQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNIOzs7OzJCQUNFQyxTLEVBQVdDLEUsRUFBSTtBQUNkLGdCQUFJLEtBQUtGLE9BQUwsQ0FBYUMsU0FBYixDQUFKLEVBQTZCO0FBQ3pCLG9CQUFNRSxNQUFNLEVBQUVDLE1BQU0sS0FBUixFQUFlRixJQUFJQSxFQUFuQixFQUFaO0FBQ0EscUJBQUtGLE9BQUwsQ0FBYUMsU0FBYixFQUF3QkksSUFBeEIsQ0FBNkJGLEdBQTdCO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7Ozs2QkFDSUYsUyxFQUFXQyxFLEVBQUk7QUFDaEIsZ0JBQUksS0FBS0YsT0FBTCxDQUFhQyxTQUFiLENBQUosRUFBNkI7QUFDekIsb0JBQU1FLE1BQU0sRUFBRUMsTUFBTSxJQUFSLEVBQWNGLElBQUlBLEVBQWxCLEVBQVo7QUFDQSxxQkFBS0YsT0FBTCxDQUFhQyxTQUFiLEVBQXdCSSxJQUF4QixDQUE2QkYsR0FBN0I7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDs7OzRCQUNHRixTLEVBQVdDLEUsRUFBSTtBQUNmLGdCQUFJLEtBQUtGLE9BQUwsQ0FBYUMsU0FBYixDQUFKLEVBQTZCO0FBQ3pCLHFCQUFLRCxPQUFMLENBQWFDLFNBQWIsSUFBMEIsS0FBS0QsT0FBTCxDQUFhQyxTQUFiLEVBQXdCSyxNQUF4QixDQUErQjtBQUFBLDJCQUFPSCxJQUFJRCxFQUFKLEtBQVdBLEVBQWxCO0FBQUEsaUJBQS9CLENBQTFCO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7OztnQ0FDT0QsUyxFQUFvQjtBQUFBOztBQUFBLDhDQUFOTSxJQUFNO0FBQU5BLG9CQUFNO0FBQUE7O0FBQ3hCLGdCQUFJLEtBQUtQLE9BQUwsQ0FBYUMsU0FBYixDQUFKLEVBQTZCO0FBQ3pCLHFCQUFLRCxPQUFMLENBQWFDLFNBQWIsRUFBd0JPLE9BQXhCLENBQWdDLGVBQU87QUFDbkMsd0JBQUlMLElBQUlDLElBQVIsRUFBYztBQUNWLDhCQUFLSyxHQUFMLENBQVNSLFNBQVQsRUFBb0JFLElBQUlELEVBQXhCO0FBQ0g7QUFDREMsd0JBQUlELEVBQUosWUFBVUssSUFBVjtBQUNILGlCQUxEO0FBTUg7QUFDRCxtQkFBTyxJQUFQO0FBQ0giLCJmaWxlIjoiTGlzdGVuYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMaXN0ZW5hYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7IG9uY2U6IGZhbHNlLCBmbjogZm4gfTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tldmVudE5hbWVdLnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb25jZShldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0geyBvbmNlOiB0cnVlLCBmbjogZm4gfTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tldmVudE5hbWVdLnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb2ZmKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuX2V2ZW50c1tldmVudE5hbWVdLmZpbHRlcihvYmogPT4gb2JqLmZuICE9PSBmbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRyaWdnZXIoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmoub25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZihldmVudE5hbWUsIG9iai5mbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iai5mbiguLi5hcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==
},{}]},{},[1])