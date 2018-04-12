(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNumber = isNumber;
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvaGVscGVycy9pc051bWJlci5qcyJdLCJuYW1lcyI6WyJpc051bWJlciIsInZhbHVlIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNGaW5pdGUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCQSxRLEdBQUFBLFE7QUFBVCxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUM1QixXQUFPLENBQUNDLE1BQU1DLFdBQVdGLEtBQVgsQ0FBTixDQUFELElBQTZCRyxTQUFTSCxLQUFULENBQXBDO0FBQ0giLCJmaWxlIjoiaXNOdW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG59XG4iXX0=
},{}],2:[function(require,module,exports){
'use strict';

var _ResearchesList = require('./researches/ResearchesList');

var _SidraService = require('./services/SidraService');

var researchesList = _SidraService.sidraService.getListPesquisas().then(function (researches) {
    return new _ResearchesList.ResearchesList(researches);
});
researchesList.then(function (obj) {
    var filter = obj.filterList('teste');
    console.log(filter);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvaW5kZXguanMiXSwibmFtZXMiOlsicmVzZWFyY2hlc0xpc3QiLCJnZXRMaXN0UGVzcXVpc2FzIiwidGhlbiIsInJlc2VhcmNoZXMiLCJmaWx0ZXIiLCJvYmoiLCJmaWx0ZXJMaXN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSxJQUFNQSxpQkFBaUIsMkJBQWFDLGdCQUFiLEdBQWdDQyxJQUFoQyxDQUFxQztBQUFBLFdBQWMsbUNBQW1CQyxVQUFuQixDQUFkO0FBQUEsQ0FBckMsQ0FBdkI7QUFDQUgsZUFBZUUsSUFBZixDQUFvQixlQUFPO0FBQ3ZCLFFBQUlFLFNBQVNDLElBQUlDLFVBQUosQ0FBZSxPQUFmLENBQWI7QUFDQUMsWUFBUUMsR0FBUixDQUFZSixNQUFaO0FBQ0gsQ0FIRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc2VhcmNoZXNMaXN0IH0gZnJvbSAnLi9yZXNlYXJjaGVzL1Jlc2VhcmNoZXNMaXN0JztcbmltcG9ydCB7IHNpZHJhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvU2lkcmFTZXJ2aWNlJztcbmNvbnN0IHJlc2VhcmNoZXNMaXN0ID0gc2lkcmFTZXJ2aWNlLmdldExpc3RQZXNxdWlzYXMoKS50aGVuKHJlc2VhcmNoZXMgPT4gbmV3IFJlc2VhcmNoZXNMaXN0KHJlc2VhcmNoZXMpKTtcbnJlc2VhcmNoZXNMaXN0LnRoZW4ob2JqID0+IHtcbiAgICBsZXQgZmlsdGVyID0gb2JqLmZpbHRlckxpc3QoJ3Rlc3RlJyk7XG4gICAgY29uc29sZS5sb2coZmlsdGVyKTtcbn0pO1xuIl19
},{"./researches/ResearchesList":3,"./services/SidraService":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResearchesList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SidraResearch = require("../types/SidraResearch");

var _Listenable2 = require("../shared/Listenable");

var _isNumber = require("../helpers/isNumber");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EVENTS = {
    ON_CHANGE: 'onChange'
};

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
        _this._events = _defineProperty({}, EVENTS.ON_CHANGE, []);
        _this.registerList(list);
        return _this;
    }

    _createClass(ResearchesList, [{
        key: "filterList",
        value: function filterList(term) {
            debugger;
            console.log(term);
            this._list.term = term;
            var filterFn = (0, _isNumber.isNumber)(term) ? this._filterTablesById(parseInt(term, 10)) : this._filterTablesByStr(term);
            this._list.filtered = this._list.full.reduce(filterFn, []);
            this.trigger(EVENTS.ON_CHANGE, this._list.filtered);
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
        key: "list",
        get: function get() {
            return this._list.filtered.slice(0);
        }
    }]);

    return ResearchesList;
}(_Listenable2.Listenable);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvcmVzZWFyY2hlcy9SZXNlYXJjaGVzTGlzdC5qcyJdLCJuYW1lcyI6WyJFVkVOVFMiLCJPTl9DSEFOR0UiLCJSZXNlYXJjaGVzTGlzdCIsImxpc3QiLCJfbGlzdCIsImZ1bGwiLCJmaWx0ZXJlZCIsInRlcm0iLCJfZXZlbnRzIiwicmVnaXN0ZXJMaXN0IiwiY29uc29sZSIsImxvZyIsImZpbHRlckZuIiwiX2ZpbHRlclRhYmxlc0J5SWQiLCJwYXJzZUludCIsIl9maWx0ZXJUYWJsZXNCeVN0ciIsInJlZHVjZSIsInRyaWdnZXIiLCJmaWx0ZXJMaXN0Iiwic3RyIiwiYXJyIiwicmVzZWFyY2giLCJ0YWJsZXMiLCJmaWx0ZXJUYWJsZXMiLCJsZW5ndGgiLCJwdXNoIiwiaWQiLCJuYW1lIiwidGFibGUiLCJnZXRUYWJsZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUNBLElBQU1BLFNBQVM7QUFDWEMsZUFBVztBQURBLENBQWY7O0lBR2FDLGMsV0FBQUEsYzs7O0FBQ1QsNEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFFZCxjQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU0sRUFERztBQUVUQyxzQkFBVSxFQUZEO0FBR1RDLGtCQUFNO0FBSEcsU0FBYjtBQUtBLGNBQUtDLE9BQUwsdUJBQ0tSLE9BQU9DLFNBRFosRUFDd0IsRUFEeEI7QUFHQSxjQUFLUSxZQUFMLENBQWtCTixJQUFsQjtBQVZjO0FBV2pCOzs7O21DQUlVSSxJLEVBQU07QUFDYjtBQUNBRyxvQkFBUUMsR0FBUixDQUFZSixJQUFaO0FBQ0EsaUJBQUtILEtBQUwsQ0FBV0csSUFBWCxHQUFrQkEsSUFBbEI7QUFDQSxnQkFBTUssV0FBVyx3QkFBU0wsSUFBVCxJQUNYLEtBQUtNLGlCQUFMLENBQXVCQyxTQUFTUCxJQUFULEVBQWUsRUFBZixDQUF2QixDQURXLEdBRVgsS0FBS1Esa0JBQUwsQ0FBd0JSLElBQXhCLENBRk47QUFHQSxpQkFBS0gsS0FBTCxDQUFXRSxRQUFYLEdBQXNCLEtBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQlcsTUFBaEIsQ0FBdUJKLFFBQXZCLEVBQWlDLEVBQWpDLENBQXRCO0FBQ0EsaUJBQUtLLE9BQUwsQ0FBYWpCLE9BQU9DLFNBQXBCLEVBQStCLEtBQUtHLEtBQUwsQ0FBV0UsUUFBMUM7QUFDQSxtQkFBTyxLQUFLRixLQUFMLENBQVdFLFFBQWxCO0FBQ0g7OztxQ0FDWUgsSSxFQUFNO0FBQ2YsaUJBQUtDLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQkYsSUFBbEI7QUFDQSxpQkFBS2UsVUFBTCxDQUFnQixLQUFLZCxLQUFMLENBQVdHLElBQTNCO0FBQ0g7OzsyQ0FDa0JZLEcsRUFBSztBQUNwQixtQkFBTyxVQUFVQyxHQUFWLEVBQWVDLFFBQWYsRUFBeUI7QUFDNUIsb0JBQU1DLFNBQVNELFNBQVNFLFlBQVQsQ0FBc0JKLEdBQXRCLENBQWY7QUFDQSxvQkFBSUcsT0FBT0UsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNuQkosd0JBQUlLLElBQUosQ0FBUyxpQ0FBa0I7QUFDdkJDLDRCQUFJTCxTQUFTSyxFQURVO0FBRXZCQyw4QkFBTU4sU0FBU00sSUFGUTtBQUd2QkwsZ0NBQVFBO0FBSGUscUJBQWxCLENBQVQ7QUFLSDtBQUNELHVCQUFPRixHQUFQO0FBQ0gsYUFWRDtBQVdIOzs7MENBQ2lCTSxFLEVBQUk7QUFDbEIsbUJBQU8sVUFBVU4sR0FBVixFQUFlQyxRQUFmLEVBQXlCO0FBQzVCLG9CQUFNTyxRQUFRUCxTQUFTUSxRQUFULENBQWtCSCxFQUFsQixDQUFkO0FBQ0Esb0JBQUlFLEtBQUosRUFBVztBQUNQUix3QkFBSUssSUFBSixDQUFTLGlDQUFrQjtBQUN2QkMsNEJBQUlMLFNBQVNLLEVBRFU7QUFFdkJDLDhCQUFNTixTQUFTTSxJQUZRO0FBR3ZCTCxnQ0FBUSxDQUFDTSxLQUFEO0FBSGUscUJBQWxCLENBQVQ7QUFLSDtBQUNELHVCQUFPUixHQUFQO0FBQ0gsYUFWRDtBQVdIOzs7NEJBM0NVO0FBQ1AsbUJBQU8sS0FBS2hCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQndCLEtBQXBCLENBQTBCLENBQTFCLENBQVA7QUFDSCIsImZpbGUiOiJSZXNlYXJjaGVzTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZHJhUmVzZWFyY2ggfSBmcm9tIFwiLi4vdHlwZXMvU2lkcmFSZXNlYXJjaFwiO1xuaW1wb3J0IHsgTGlzdGVuYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvTGlzdGVuYWJsZVwiO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwiLi4vaGVscGVycy9pc051bWJlclwiO1xuY29uc3QgRVZFTlRTID0ge1xuICAgIE9OX0NIQU5HRTogJ29uQ2hhbmdlJ1xufTtcbmV4cG9ydCBjbGFzcyBSZXNlYXJjaGVzTGlzdCBleHRlbmRzIExpc3RlbmFibGUge1xuICAgIGNvbnN0cnVjdG9yKGxpc3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fbGlzdCA9IHtcbiAgICAgICAgICAgIGZ1bGw6IFtdLFxuICAgICAgICAgICAgZmlsdGVyZWQ6IFtdLFxuICAgICAgICAgICAgdGVybTogJydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge1xuICAgICAgICAgICAgW0VWRU5UUy5PTl9DSEFOR0VdOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTGlzdChsaXN0KTtcbiAgICB9XG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0LmZpbHRlcmVkLnNsaWNlKDApO1xuICAgIH1cbiAgICBmaWx0ZXJMaXN0KHRlcm0pIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlcm0pO1xuICAgICAgICB0aGlzLl9saXN0LnRlcm0gPSB0ZXJtO1xuICAgICAgICBjb25zdCBmaWx0ZXJGbiA9IGlzTnVtYmVyKHRlcm0pXG4gICAgICAgICAgICA/IHRoaXMuX2ZpbHRlclRhYmxlc0J5SWQocGFyc2VJbnQodGVybSwgMTApKVxuICAgICAgICAgICAgOiB0aGlzLl9maWx0ZXJUYWJsZXNCeVN0cih0ZXJtKTtcbiAgICAgICAgdGhpcy5fbGlzdC5maWx0ZXJlZCA9IHRoaXMuX2xpc3QuZnVsbC5yZWR1Y2UoZmlsdGVyRm4sIFtdKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKEVWRU5UUy5PTl9DSEFOR0UsIHRoaXMuX2xpc3QuZmlsdGVyZWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5maWx0ZXJlZDtcbiAgICB9XG4gICAgcmVnaXN0ZXJMaXN0KGxpc3QpIHtcbiAgICAgICAgdGhpcy5fbGlzdC5mdWxsID0gbGlzdDtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0KHRoaXMuX2xpc3QudGVybSk7XG4gICAgfVxuICAgIF9maWx0ZXJUYWJsZXNCeVN0cihzdHIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIHJlc2VhcmNoKSB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZXMgPSByZXNlYXJjaC5maWx0ZXJUYWJsZXMoc3RyKTtcbiAgICAgICAgICAgIGlmICh0YWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKG5ldyBTaWRyYVJlc2VhcmNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJlc2VhcmNoLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByZXNlYXJjaC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXM6IHRhYmxlc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH07XG4gICAgfVxuICAgIF9maWx0ZXJUYWJsZXNCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJyLCByZXNlYXJjaCkge1xuICAgICAgICAgICAgY29uc3QgdGFibGUgPSByZXNlYXJjaC5nZXRUYWJsZShpZCk7XG4gICAgICAgICAgICBpZiAodGFibGUpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChuZXcgU2lkcmFSZXNlYXJjaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiByZXNlYXJjaC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVzZWFyY2gubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGVzOiBbdGFibGVdXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=
},{"../helpers/isNumber":1,"../shared/Listenable":6,"../types/SidraResearch":7}],4:[function(require,module,exports){
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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sidraService = exports.SidraService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestService = require('./RequestService');

var _SidraResearch = require('../types/SidraResearch');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvc2VydmljZXMvU2lkcmFTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIlNpZHJhU2VydmljZSIsIl9yZXF1ZXN0U2VydmljZSIsIl9iYXNlVXJsIiwiZ2V0SlNPTiIsInRoZW4iLCJyZXNwb25zZSIsIm1hcCIsImNvbnZlcnQiLCJvYmoiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJzaWRyYVNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBQ2FBLFksV0FBQUEsWTtBQUNULDBCQUFZQyxlQUFaLEVBQTZCO0FBQUE7O0FBQ3pCLGFBQUtBLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixtREFBaEI7QUFDSDs7OzsyQ0FDa0I7QUFDZixtQkFBTyxLQUFLRCxlQUFMLENBQXFCRSxPQUFyQixDQUE2QixLQUFLRCxRQUFsQyxFQUNGRSxJQURFLENBQ0c7QUFBQSx1QkFBWUMsU0FBU0MsR0FBVCxDQUFhO0FBQUEsMkJBQU8saUNBQWtCLDZCQUFjQyxPQUFkLENBQXNCQyxHQUF0QixDQUFsQixDQUFQO0FBQUEsaUJBQWIsQ0FBWjtBQUFBLGFBREgsRUFFRkMsS0FGRSxDQUVJLGVBQU87QUFDZEMsb0JBQUlDLE9BQUosR0FBYyw4RUFBOEVELElBQUlDLE9BQWhHO0FBQ0Esc0JBQU1ELEdBQU47QUFDSCxhQUxNLENBQVA7QUFNSDs7Ozs7O0FBRUUsSUFBTUUsc0NBQWUsSUFBSVosWUFBSixnQ0FBckIiLCJmaWxlIjoiU2lkcmFTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuL1JlcXVlc3RTZXJ2aWNlJztcbmltcG9ydCB7IFNpZHJhUmVzZWFyY2ggfSBmcm9tICcuLi90eXBlcy9TaWRyYVJlc2VhcmNoJztcbmV4cG9ydCBjbGFzcyBTaWRyYVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKF9yZXF1ZXN0U2VydmljZSkge1xuICAgICAgICB0aGlzLl9yZXF1ZXN0U2VydmljZSA9IF9yZXF1ZXN0U2VydmljZTtcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IFwiaHR0cHM6Ly9zZXJ2aWNvZGFkb3MuaWJnZS5nb3YuYnIvYXBpL3YzL2FncmVnYWRvc1wiO1xuICAgIH1cbiAgICBnZXRMaXN0UGVzcXVpc2FzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFNlcnZpY2UuZ2V0SlNPTih0aGlzLl9iYXNlVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UubWFwKG9iaiA9PiBuZXcgU2lkcmFSZXNlYXJjaChTaWRyYVJlc2VhcmNoLmNvbnZlcnQob2JqKSkpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBlcnIubWVzc2FnZSA9IFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgYSBsaXN0YSBkZSBwZXNxdWlzYXMgZG8gU2lkcmEuXFxuRXJybyBvcmlnaW5hbDpcXG5cIiArIGVyci5tZXNzYWdlO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY29uc3Qgc2lkcmFTZXJ2aWNlID0gbmV3IFNpZHJhU2VydmljZShyZXF1ZXN0U2VydmljZSk7XG4iXX0=
},{"../types/SidraResearch":7,"./RequestService":4}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmludC9JQkdFL3RhYmxlcy10b29sL2NvZGlnb2ZvbnRlL3NyYy9lczYvdHlwZXMvU2lkcmFSZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTaWRyYVJlc2VhcmNoIiwicGFyYW1zIiwiaWQiLCJuYW1lIiwibm9tZSIsInRhYmxlcyIsImFncmVnYWRvcyIsIm1hcCIsInBhcnNlSW50IiwiZm9yRWFjaCIsIk9iamVjdCIsImZyZWV6ZSIsInN0ciIsImZpbHRlciIsInRhYmxlIiwiaW5jbHVkZXMiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWFBLGEsV0FBQUEsYTs7O2dDQUNNQyxNLEVBQVE7QUFDbkIsbUJBQU87QUFDSEMsb0JBQUlELE9BQU9DLEVBRFI7QUFFSEMsc0JBQU1GLE9BQU9HLElBRlY7QUFHSEMsd0JBQVFKLE9BQU9LLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCO0FBQUEsd0JBQUdMLEVBQUgsUUFBR0EsRUFBSDtBQUFBLHdCQUFPRSxJQUFQLFFBQU9BLElBQVA7QUFBQSwyQkFBbUIsRUFBRUYsSUFBSU0sU0FBU04sRUFBVCxFQUFhLEVBQWIsQ0FBTixFQUF3QkMsTUFBTUMsSUFBOUIsRUFBbkI7QUFBQSxpQkFBckI7QUFITCxhQUFQO0FBS0g7OztBQUNELDJCQUFZSCxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLGFBQUtDLEVBQUwsR0FBVUQsT0FBT0MsRUFBakI7QUFDQSxhQUFLQyxJQUFMLEdBQVlGLE9BQU9FLElBQW5CO0FBQ0EsYUFBS0UsTUFBTCxHQUFjSixPQUFPSSxNQUFyQjtBQUNBLGFBQUtBLE1BQUwsQ0FBWUksT0FBWixDQUFvQkMsT0FBT0MsTUFBM0I7QUFDQUQsZUFBT0MsTUFBUCxDQUFjLElBQWQ7QUFDSDs7OztxQ0FDWUMsRyxFQUFLO0FBQ2QsbUJBQU8sS0FBS1AsTUFBTCxDQUFZUSxNQUFaLENBQW1CO0FBQUEsdUJBQVNDLE1BQU1YLElBQU4sQ0FBV1ksUUFBWCxDQUFvQkgsR0FBcEIsQ0FBVDtBQUFBLGFBQW5CLENBQVA7QUFDSDs7O2lDQUNRVixFLEVBQUk7QUFDVCxtQkFBTyxLQUFLRyxNQUFMLENBQVlXLElBQVosQ0FBaUI7QUFBQSx1QkFBU0YsTUFBTVosRUFBTixLQUFhQSxFQUF0QjtBQUFBLGFBQWpCLENBQVA7QUFDSCIsImZpbGUiOiJTaWRyYVJlc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNpZHJhUmVzZWFyY2gge1xuICAgIHN0YXRpYyBjb252ZXJ0KHBhcmFtcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHBhcmFtcy5pZCxcbiAgICAgICAgICAgIG5hbWU6IHBhcmFtcy5ub21lLFxuICAgICAgICAgICAgdGFibGVzOiBwYXJhbXMuYWdyZWdhZG9zLm1hcCgoeyBpZCwgbm9tZSB9KSA9PiAoeyBpZDogcGFyc2VJbnQoaWQsIDEwKSwgbmFtZTogbm9tZSB9KSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbXMuaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHBhcmFtcy5uYW1lO1xuICAgICAgICB0aGlzLnRhYmxlcyA9IHBhcmFtcy50YWJsZXM7XG4gICAgICAgIHRoaXMudGFibGVzLmZvckVhY2goT2JqZWN0LmZyZWV6ZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuICAgIGZpbHRlclRhYmxlcyhzdHIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVzLmZpbHRlcih0YWJsZSA9PiB0YWJsZS5uYW1lLmluY2x1ZGVzKHN0cikpO1xuICAgIH1cbiAgICBnZXRUYWJsZShpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZXMuZmluZCh0YWJsZSA9PiB0YWJsZS5pZCA9PT0gaWQpO1xuICAgIH1cbn1cbiJdfQ==
},{}]},{},[2])