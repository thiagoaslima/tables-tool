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
},{"../helpers/debounce":2,"./../models/ResearchesList":6}],2:[function(require,module,exports){
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

Object.defineProperty(exports, "__esModule", {
    value: true
});
// http://semplicewebsites.com/sites/default/files/latinise.js_.txt
// Generated from latin_map.pl Sun Jun 20 20:17:18 2010
var latinize = exports.latinize = {
    _map: {
        'Ã': 'A',
        'Ä‚': 'A',
        'áº®': 'A',
        'áº¶': 'A',
        'áº°': 'A',
        'áº²': 'A',
        'áº´': 'A',
        'Ç': 'A',
        'Ã‚': 'A',
        'áº¤': 'A',
        'áº¬': 'A',
        'áº¦': 'A',
        'áº¨': 'A',
        'áºª': 'A',
        'Ã„': 'A',
        'Çž': 'A',
        'È¦': 'A',
        'Ç ': 'A',
        'áº ': 'A',
        'È€': 'A',
        'Ã€': 'A',
        'áº¢': 'A',
        'È‚': 'A',
        'Ä€': 'A',
        'Ä„': 'A',
        'Ã…': 'A',
        'Çº': 'A',
        'á¸€': 'A',
        'Èº': 'A',
        'Ãƒ': 'A',
        'êœ²': 'AA',
        'Ã†': 'AE',
        'Ç¼': 'AE',
        'Ç¢': 'AE',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER AFRICAN D' (Æ‰)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER ALPHA' (â±­)
        'êœ´': 'AO',
        'êœ¶': 'AU',
        'êœ¸': 'AV',
        'êœº': 'AV',
        'êœ¼': 'AY',
        'á¸‚': 'B',
        'á¸„': 'B',
        'Æ': 'B',
        'á¸†': 'B',
        'Éƒ': 'B',
        'Æ‚': 'B',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER BROKEN L' (ê†)
        'Ä†': 'C',
        'ÄŒ': 'C',
        'Ã‡': 'C',
        'á¸ˆ': 'C',
        'Äˆ': 'C',
        'ÄŠ': 'C',
        'Æ‡': 'C',
        'È»': 'C',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER CON' (ê®)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER CUATRILLO' (êœ¬)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER CUATRILLO WITH COMMA' (êœ®)
        'ÄŽ': 'D',
        'á¸': 'D',
        'á¸’': 'D',
        'á¸Š': 'D',
        'á¸Œ': 'D',
        'ÆŠ': 'D',
        'á¸Ž': 'D',
        'Ç²': 'D',
        'Ç…': 'D',
        'Ä': 'D',
        'Æ‹': 'D',
        'Ç±': 'DZ',
        'Ç„': 'DZ',
        'Ã‰': 'E',
        'Ä”': 'E',
        'Äš': 'E',
        'È¨': 'E',
        'á¸œ': 'E',
        'ÃŠ': 'E',
        'áº¾': 'E',
        'á»†': 'E',
        'á»€': 'E',
        'á»‚': 'E',
        'á»„': 'E',
        'á¸˜': 'E',
        'Ã‹': 'E',
        'Ä–': 'E',
        'áº¸': 'E',
        'È„': 'E',
        'Ãˆ': 'E',
        'áºº': 'E',
        'È†': 'E',
        'Ä’': 'E',
        'á¸–': 'E',
        'á¸”': 'E',
        'Ä˜': 'E',
        'É†': 'E',
        'áº¼': 'E',
        'á¸š': 'E',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER EGYPTOLOGICAL AIN' (êœ¤)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER EGYPTOLOGICAL ALEF' (êœ¢)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER ENG' (ÅŠ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER ESH' (Æ©)
        'êª': 'ET',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER ETH' (Ã)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER EZH' (Æ·)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER EZH REVERSED' (Æ¸)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER EZH WITH CARON' (Ç®)
        'á¸ž': 'F',
        'Æ‘': 'F',
        'Ç´': 'G',
        'Äž': 'G',
        'Ç¦': 'G',
        'Ä¢': 'G',
        'Äœ': 'G',
        'Ä ': 'G',
        'Æ“': 'G',
        'á¸ ': 'G',
        'Ç¤': 'G',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER GAMMA' (Æ”)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER GLOTTAL STOP' (É)
        'á¸ª': 'H',
        'Èž': 'H',
        'á¸¨': 'H',
        'Ä¤': 'H',
        'â±§': 'H',
        'á¸¦': 'H',
        'á¸¢': 'H',
        'á¸¤': 'H',
        'Ä¦': 'H',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER HALF H' (â±µ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER HENG' (êœ¦)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER HWAIR' (Ç¶)
        'Ã': 'I',
        'Ä¬': 'I',
        'Ç': 'I',
        'ÃŽ': 'I',
        'Ã': 'I',
        'á¸®': 'I',
        'Ä°': 'I',
        'á»Š': 'I',
        'Èˆ': 'I',
        'ÃŒ': 'I',
        'á»ˆ': 'I',
        'ÈŠ': 'I',
        'Äª': 'I',
        'Ä®': 'I',
        'Æ—': 'I',
        'Ä¨': 'I',
        'á¸¬': 'I',
        'ê¹': 'D',
        'ê»': 'F',
        'ê½': 'G',
        'êž‚': 'R',
        'êž„': 'S',
        'êž†': 'T',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER IOTA' (Æ–)
        'ê¬': 'IS',
        'Ä´': 'J',
        'Éˆ': 'J',
        'á¸°': 'K',
        'Ç¨': 'K',
        'Ä¶': 'K',
        'â±©': 'K',
        'ê‚': 'K',
        'á¸²': 'K',
        'Æ˜': 'K',
        'á¸´': 'K',
        'ê€': 'K',
        'ê„': 'K',
        'Ä¹': 'L',
        'È½': 'L',
        'Ä½': 'L',
        'Ä»': 'L',
        'á¸¼': 'L',
        'á¸¶': 'L',
        'á¸¸': 'L',
        'â± ': 'L',
        'êˆ': 'L',
        'á¸º': 'L',
        'Ä¿': 'L',
        'â±¢': 'L',
        'Çˆ': 'L',
        'Å': 'L',
        'Ç‡': 'LJ',
        'á¸¾': 'M',
        'á¹€': 'M',
        'á¹‚': 'M',
        'â±®': 'M',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER MIDDLE-WELSH LL' (á»º)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER MIDDLE-WELSH V' (á»¼)
        'Åƒ': 'N',
        'Å‡': 'N',
        'Å…': 'N',
        'á¹Š': 'N',
        'á¹„': 'N',
        'á¹†': 'N',
        'Ç¸': 'N',
        'Æ': 'N',
        'á¹ˆ': 'N',
        'È ': 'N',
        'Ç‹': 'N',
        'Ã‘': 'N',
        'ÇŠ': 'NJ',
        'Ã“': 'O',
        'ÅŽ': 'O',
        'Ç‘': 'O',
        'Ã”': 'O',
        'á»': 'O',
        'á»˜': 'O',
        'á»’': 'O',
        'á»”': 'O',
        'á»–': 'O',
        'Ã–': 'O',
        'Èª': 'O',
        'È®': 'O',
        'È°': 'O',
        'á»Œ': 'O',
        'Å': 'O',
        'ÈŒ': 'O',
        'Ã’': 'O',
        'á»Ž': 'O',
        'Æ ': 'O',
        'á»š': 'O',
        'á»¢': 'O',
        'á»œ': 'O',
        'á»ž': 'O',
        'á» ': 'O',
        'ÈŽ': 'O',
        'êŠ': 'O',
        'êŒ': 'O',
        'ÅŒ': 'O',
        'á¹’': 'O',
        'á¹': 'O',
        'ÆŸ': 'O',
        'Çª': 'O',
        'Ç¬': 'O',
        'Ã˜': 'O',
        'Ç¾': 'O',
        'Ã•': 'O',
        'á¹Œ': 'O',
        'á¹Ž': 'O',
        'È¬': 'O',
        'Æ¢': 'OI',
        'êŽ': 'OO',
        'Æ': 'E',
        'Æ†': 'O',
        'È¢': 'OU',
        'á¹”': 'P',
        'á¹–': 'P',
        'ê’': 'P',
        'Æ¤': 'P',
        'ê”': 'P',
        'â±£': 'P',
        'ê': 'P',
        'ê˜': 'Q',
        'ê–': 'Q',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER R ROTUNDA' (êš)
        'Å”': 'R',
        'Å˜': 'R',
        'Å–': 'R',
        'á¹˜': 'R',
        'á¹š': 'R',
        'á¹œ': 'R',
        'È': 'R',
        'È’': 'R',
        'á¹ž': 'R',
        'ÉŒ': 'R',
        'â±¤': 'R',
        'êœ¾': 'C',
        'ÆŽ': 'E',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER RUM ROTUNDA' (êœ)
        'Åš': 'S',
        'á¹¤': 'S',
        'Å ': 'S',
        'á¹¦': 'S',
        'Åž': 'S',
        'Åœ': 'S',
        'È˜': 'S',
        'á¹ ': 'S',
        'á¹¢': 'S',
        'á¹¨': 'S',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER SALTILLO' (êž‹)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER SCHWA' (Æ)
        'áºž': 'SS',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL' (ÉŠ)
        'Å¤': 'T',
        'Å¢': 'T',
        'á¹°': 'T',
        'Èš': 'T',
        'È¾': 'T',
        'á¹ª': 'T',
        'á¹¬': 'T',
        'Æ¬': 'T',
        'á¹®': 'T',
        'Æ®': 'T',
        'Å¦': 'T',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER THORN' (Ãž)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER THORN WITH STROKE' (ê¤)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER THORN WITH STROKE THROUGH DESCENDER' (ê¦)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER TONE FIVE' (Æ¼)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER TONE SIX' (Æ„)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER TONE TWO' (Æ§)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER TRESILLO' (êœª)
        'â±¯': 'A',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER TURNED INSULAR G' (ê¾)
        'êž€': 'L',
        'Æœ': 'M',
        'É…': 'V',
        'êœ¨': 'TZ',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER U BAR' (É„)
        'Ãš': 'U',
        'Å¬': 'U',
        'Ç“': 'U',
        'Ã›': 'U',
        'á¹¶': 'U',
        'Ãœ': 'U',
        'Ç—': 'U',
        'Ç™': 'U',
        'Ç›': 'U',
        'Ç•': 'U',
        'á¹²': 'U',
        'á»¤': 'U',
        'Å°': 'U',
        'È”': 'U',
        'Ã™': 'U',
        'á»¦': 'U',
        'Æ¯': 'U',
        'á»¨': 'U',
        'á»°': 'U',
        'á»ª': 'U',
        'á»¬': 'U',
        'á»®': 'U',
        'È–': 'U',
        'Åª': 'U',
        'á¹º': 'U',
        'Å²': 'U',
        'Å®': 'U',
        'Å¨': 'U',
        'á¹¸': 'U',
        'á¹´': 'U',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER UPSILON' (Æ±)
        'êž': 'V',
        'á¹¾': 'V',
        'Æ²': 'V',
        'á¹¼': 'V',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER VEND' (ê¨)
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER VISIGOTHIC Z' (ê¢)
        'ê ': 'VY',
        'áº‚': 'W',
        'Å´': 'W',
        'áº„': 'W',
        'áº†': 'W',
        'áºˆ': 'W',
        'áº€': 'W',
        'â±²': 'W',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER WYNN' (Ç·)
        'áºŒ': 'X',
        'áºŠ': 'X',
        'Ã': 'Y',
        'Å¶': 'Y',
        'Å¸': 'Y',
        'áºŽ': 'Y',
        'á»´': 'Y',
        'á»²': 'Y',
        'Æ³': 'Y',
        'á»¶': 'Y',
        'á»¾': 'Y',
        'È²': 'Y',
        'ÉŽ': 'Y',
        'á»¸': 'Y',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CAPITAL LETTER YOGH' (Èœ)
        'Å¹': 'Z',
        'Å½': 'Z',
        'áº': 'Z',
        'â±«': 'Z',
        'Å»': 'Z',
        'áº’': 'Z',
        'È¤': 'Z',
        'áº”': 'Z',
        'Æµ': 'Z',
        'Ä²': 'IJ',
        'Å’': 'OE',
        // CANNOT FIND APPROXIMATION FOR 'LATIN CROSS' (âœ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN EPIGRAPHIC LETTER ARCHAIC M' (êŸ¿)
        // CANNOT FIND APPROXIMATION FOR 'LATIN EPIGRAPHIC LETTER I LONGA' (êŸ¾)
        // CANNOT FIND APPROXIMATION FOR 'LATIN EPIGRAPHIC LETTER INVERTED M' (êŸ½)
        // CANNOT FIND APPROXIMATION FOR 'LATIN EPIGRAPHIC LETTER REVERSED F' (êŸ»)
        // CANNOT FIND APPROXIMATION FOR 'LATIN EPIGRAPHIC LETTER REVERSED P' (êŸ¼)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER AIN' (á´¥)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER ALVEOLAR CLICK' (Ç‚)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER BIDENTAL PERCUSSIVE' (Ê­)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER BILABIAL CLICK' (Ê˜)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER BILABIAL PERCUSSIVE' (Ê¬)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER DENTAL CLICK' (Ç€)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER GLOTTAL STOP' (Ê”)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER GLOTTAL STOP WITH STROKE' (Ê¡)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER INVERTED GLOTTAL STOP' (Ê–)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER INVERTED GLOTTAL STOP WITH STROKE' (Æ¾)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER LATERAL CLICK' (Ç)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER PHARYNGEAL VOICED FRICATIVE' (Ê•)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER RETROFLEX CLICK' (Çƒ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER REVERSED ESH LOOP' (Æª)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER REVERSED GLOTTAL STOP WITH STROKE' (Ê¢)
        'á´€': 'A',
        'á´': 'AE',
        'Ê™': 'B',
        'á´ƒ': 'B',
        'á´„': 'C',
        'á´…': 'D',
        'á´‡': 'E',
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER SMALL CAPITAL ETH' (á´†)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER SMALL CAPITAL EZH' (á´£)
        'êœ°': 'F',
        'É¢': 'G',
        'Ê›': 'G',
        'Êœ': 'H',
        'Éª': 'I',
        'Ê': 'R',
        'á´Š': 'J',
        'á´‹': 'K',
        'ÊŸ': 'L',
        'á´Œ': 'L',
        'á´': 'M',
        'É´': 'N',
        'á´': 'O',
        'É¶': 'OE',
        'á´': 'O',
        'á´•': 'OU',
        'á´˜': 'P',
        'Ê€': 'R',
        'á´Ž': 'N',
        'á´™': 'R',
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER SMALL CAPITAL RUM' (ê¶)
        'êœ±': 'S',
        'á´›': 'T',
        'â±»': 'E',
        'á´š': 'R',
        'á´œ': 'U',
        'á´ ': 'V',
        'á´¡': 'W',
        'Ê': 'Y',
        'á´¢': 'Z',
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER STRETCHED C' (Ê—)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER TWO WITH STROKE' (Æ»)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER VOICED LARYNGEAL SPIRANT' (á´¤)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER WYNN' (Æ¿)
        // CANNOT FIND APPROXIMATION FOR 'LATIN LETTER YR' (Æ¦)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL CAPITAL LETTER I WITH STROKE' (áµ»)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL CAPITAL LETTER U WITH STROKE' (áµ¾)
        'Ã¡': 'a',
        'Äƒ': 'a',
        'áº¯': 'a',
        'áº·': 'a',
        'áº±': 'a',
        'áº³': 'a',
        'áºµ': 'a',
        'ÇŽ': 'a',
        'Ã¢': 'a',
        'áº¥': 'a',
        'áº­': 'a',
        'áº§': 'a',
        'áº©': 'a',
        'áº«': 'a',
        'Ã¤': 'a',
        'ÇŸ': 'a',
        'È§': 'a',
        'Ç¡': 'a',
        'áº¡': 'a',
        'È': 'a',
        'Ã ': 'a',
        'áº£': 'a',
        'Èƒ': 'a',
        'Ä': 'a',
        'Ä…': 'a',
        'á¶': 'a',
        'áºš': 'a',
        'Ã¥': 'a',
        'Ç»': 'a',
        'á¸': 'a',
        'â±¥': 'a',
        'Ã£': 'a',
        'êœ³': 'aa',
        'Ã¦': 'ae',
        'Ç½': 'ae',
        'Ç£': 'ae',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER ALPHA' (É‘)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER ALPHA WITH RETROFLEX HOOK' (á¶)
        'êœµ': 'ao',
        'êœ·': 'au',
        'êœ¹': 'av',
        'êœ»': 'av',
        'êœ½': 'ay',
        'á¸ƒ': 'b',
        'á¸…': 'b',
        'É“': 'b',
        'á¸‡': 'b',
        'áµ¬': 'b',
        'á¶€': 'b',
        'Æ€': 'b',
        'Æƒ': 'b',
        'Éµ': 'o',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER BOTTOM HALF O' (á´—)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER BROKEN L' (ê‡)
        'Ä‡': 'c',
        'Ä': 'c',
        'Ã§': 'c',
        'á¸‰': 'c',
        'Ä‰': 'c',
        'É•': 'c',
        'Ä‹': 'c',
        'Æˆ': 'c',
        'È¼': 'c',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER CLOSED OMEGA' (É·)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER CLOSED OPEN E' (Êš)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER CLOSED REVERSED OPEN E' (Éž)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER CON' (ê¯)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER CUATRILLO' (êœ­)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER CUATRILLO WITH COMMA' (êœ¯)
        'Ä': 'd',
        'á¸‘': 'd',
        'á¸“': 'd',
        'È¡': 'd',
        'á¸‹': 'd',
        'á¸': 'd',
        'É—': 'd',
        'á¶‘': 'd',
        'á¸': 'd',
        'áµ­': 'd',
        'á¶': 'd',
        'Ä‘': 'd',
        'É–': 'd',
        'ÆŒ': 'd',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER DB DIGRAPH' (È¸)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER DELTA' (áºŸ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER DEZH DIGRAPH' (Ê¤)
        'Ä±': 'i',
        'È·': 'j',
        'ÉŸ': 'j',
        'Ê„': 'j',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER DUM' (ê±)
        'Ç³': 'dz',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER DZ DIGRAPH' (Ê£)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER DZ DIGRAPH WITH CURL' (Ê¥)
        'Ç†': 'dz',
        'Ã©': 'e',
        'Ä•': 'e',
        'Ä›': 'e',
        'È©': 'e',
        'á¸': 'e',
        'Ãª': 'e',
        'áº¿': 'e',
        'á»‡': 'e',
        'á»': 'e',
        'á»ƒ': 'e',
        'á»…': 'e',
        'á¸™': 'e',
        'Ã«': 'e',
        'Ä—': 'e',
        'áº¹': 'e',
        'È…': 'e',
        'Ã¨': 'e',
        'áº»': 'e',
        'È‡': 'e',
        'Ä“': 'e',
        'á¸—': 'e',
        'á¸•': 'e',
        'â±¸': 'e',
        'Ä™': 'e',
        'á¶’': 'e',
        'É‡': 'e',
        'áº½': 'e',
        'á¸›': 'e',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER EGYPTOLOGICAL AIN' (êœ¥)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER EGYPTOLOGICAL ALEF' (êœ£)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER ENG' (Å‹)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER ESH' (Êƒ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER ESH WITH CURL' (Ê†)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER ESH WITH PALATAL HOOK' (á¶‹)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER ESH WITH RETROFLEX HOOK' (á¶˜)
        'ê«': 'et',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER ETH' (Ã°)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER EZH' (Ê’)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER EZH REVERSED' (Æ¹)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER EZH WITH CARON' (Ç¯)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER EZH WITH CURL' (Ê“)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER EZH WITH RETROFLEX HOOK' (á¶š)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER EZH WITH TAIL' (Æº)
        'á¸Ÿ': 'f',
        'Æ’': 'f',
        'áµ®': 'f',
        'á¶‚': 'f',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER FENG DIGRAPH' (Ê©)
        'Çµ': 'g',
        'ÄŸ': 'g',
        'Ç§': 'g',
        'Ä£': 'g',
        'Ä': 'g',
        'Ä¡': 'g',
        'É ': 'g',
        'á¸¡': 'g',
        'á¶ƒ': 'g',
        'Ç¥': 'g',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER GAMMA' (É£)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER GLOTTAL STOP' (É‚)
        'á¸«': 'h',
        'ÈŸ': 'h',
        'á¸©': 'h',
        'Ä¥': 'h',
        'â±¨': 'h',
        'á¸§': 'h',
        'á¸£': 'h',
        'á¸¥': 'h',
        'É¦': 'h',
        'áº–': 'h',
        'Ä§': 'h',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER HALF H' (â±¶)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER HENG' (êœ§)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER HENG WITH HOOK' (É§)
        'Æ•': 'hv',
        'Ã­': 'i',
        'Ä­': 'i',
        'Ç': 'i',
        'Ã®': 'i',
        'Ã¯': 'i',
        'á¸¯': 'i',
        'á»‹': 'i',
        'È‰': 'i',
        'Ã¬': 'i',
        'á»‰': 'i',
        'È‹': 'i',
        'Ä«': 'i',
        'Ä¯': 'i',
        'á¶–': 'i',
        'É¨': 'i',
        'Ä©': 'i',
        'á¸­': 'i',
        'êº': 'd',
        'ê¼': 'f',
        'áµ¹': 'g',
        'êžƒ': 'r',
        'êž…': 's',
        'êž‡': 't',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER IOTA' (É©)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER IOTA WITH STROKE' (áµ¼)
        'ê­': 'is',
        'Ç°': 'j',
        'Äµ': 'j',
        'Ê': 'j',
        'É‰': 'j',
        'á¸±': 'k',
        'Ç©': 'k',
        'Ä·': 'k',
        'â±ª': 'k',
        'êƒ': 'k',
        'á¸³': 'k',
        'Æ™': 'k',
        'á¸µ': 'k',
        'á¶„': 'k',
        'ê': 'k',
        'ê…': 'k',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER KRA' (Ä¸)
        'Äº': 'l',
        'Æš': 'l',
        'É¬': 'l',
        'Ä¾': 'l',
        'Ä¼': 'l',
        'á¸½': 'l',
        'È´': 'l',
        'á¸·': 'l',
        'á¸¹': 'l',
        'â±¡': 'l',
        'ê‰': 'l',
        'á¸»': 'l',
        'Å€': 'l',
        'É«': 'l',
        'á¶…': 'l',
        'É­': 'l',
        'Å‚': 'l',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER LAMBDA WITH STROKE' (Æ›)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER LEZH' (É®)
        'Ç‰': 'lj',
        'Å¿': 's',
        'áºœ': 's',
        'áº›': 's',
        'áº': 's',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER LS DIGRAPH' (Êª)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER LUM' (ê²)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER LZ DIGRAPH' (Ê«)
        'á¸¿': 'm',
        'á¹': 'm',
        'á¹ƒ': 'm',
        'É±': 'm',
        'áµ¯': 'm',
        'á¶†': 'm',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER MIDDLE-WELSH LL' (á»»)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER MIDDLE-WELSH V' (á»½)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER MUM' (ê³)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER N PRECEDED BY APOSTROPHE' (Å‰)
        'Å„': 'n',
        'Åˆ': 'n',
        'Å†': 'n',
        'á¹‹': 'n',
        'Èµ': 'n',
        'á¹…': 'n',
        'á¹‡': 'n',
        'Ç¹': 'n',
        'É²': 'n',
        'á¹‰': 'n',
        'Æž': 'n',
        'áµ°': 'n',
        'á¶‡': 'n',
        'É³': 'n',
        'Ã±': 'n',
        'ÇŒ': 'nj',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER NUM' (ê´)
        'Ã³': 'o',
        'Å': 'o',
        'Ç’': 'o',
        'Ã´': 'o',
        'á»‘': 'o',
        'á»™': 'o',
        'á»“': 'o',
        'á»•': 'o',
        'á»—': 'o',
        'Ã¶': 'o',
        'È«': 'o',
        'È¯': 'o',
        'È±': 'o',
        'á»': 'o',
        'Å‘': 'o',
        'È': 'o',
        'Ã²': 'o',
        'á»': 'o',
        'Æ¡': 'o',
        'á»›': 'o',
        'á»£': 'o',
        'á»': 'o',
        'á»Ÿ': 'o',
        'á»¡': 'o',
        'È': 'o',
        'ê‹': 'o',
        'ê': 'o',
        'â±º': 'o',
        'Å': 'o',
        'á¹“': 'o',
        'á¹‘': 'o',
        'Ç«': 'o',
        'Ç­': 'o',
        'Ã¸': 'o',
        'Ç¿': 'o',
        'Ãµ': 'o',
        'á¹': 'o',
        'á¹': 'o',
        'È­': 'o',
        'Æ£': 'oi',
        'ê': 'oo',
        'É›': 'e',
        'á¶“': 'e',
        'É”': 'o',
        'á¶—': 'o',
        'È£': 'ou',
        'á¹•': 'p',
        'á¹—': 'p',
        'ê“': 'p',
        'Æ¥': 'p',
        'áµ±': 'p',
        'á¶ˆ': 'p',
        'ê•': 'p',
        'áµ½': 'p',
        'ê‘': 'p',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER PHI' (É¸)
        'ê™': 'q',
        'Ê ': 'q',
        'É‹': 'q',
        'ê—': 'q',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER QP DIGRAPH' (È¹)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER R ROTUNDA' (ê›)
        'Å•': 'r',
        'Å™': 'r',
        'Å—': 'r',
        'á¹™': 'r',
        'á¹›': 'r',
        'á¹': 'r',
        'È‘': 'r',
        'É¾': 'r',
        'áµ³': 'r',
        'È“': 'r',
        'á¹Ÿ': 'r',
        'É¼': 'r',
        'áµ²': 'r',
        'á¶‰': 'r',
        'É': 'r',
        'É½': 'r',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER RAMS HORN' (É¤)
        'â†„': 'c',
        'êœ¿': 'c',
        'É˜': 'e',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER REVERSED OPEN E' (Éœ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER REVERSED OPEN E WITH HOOK' (É)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER REVERSED OPEN E WITH RETROFLEX HOOK' (á¶”)
        'É¿': 'r',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER RUM' (êµ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER RUM ROTUNDA' (ê)
        'Å›': 's',
        'á¹¥': 's',
        'Å¡': 's',
        'á¹§': 's',
        'ÅŸ': 's',
        'Å': 's',
        'È™': 's',
        'á¹¡': 's',
        'á¹£': 's',
        'á¹©': 's',
        'Ê‚': 's',
        'áµ´': 's',
        'á¶Š': 's',
        'È¿': 's',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER SALTILLO' (êžŒ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER SCHWA' (É™)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER SCHWA WITH HOOK' (Éš)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER SCHWA WITH RETROFLEX HOOK' (á¶•)
        'É¡': 'g',
        'ÃŸ': 'ss',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER SIDEWAYS DIAERESIZED U' (á´ž)
        'á´‘': 'o',
        'á´“': 'o',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER SIDEWAYS OPEN O' (á´’)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER SIDEWAYS TURNED M' (á´Ÿ)
        'á´': 'u',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER SQUAT REVERSED ESH' (Ê…)
        'Å¥': 't',
        'Å£': 't',
        'á¹±': 't',
        'È›': 't',
        'È¶': 't',
        'áº—': 't',
        'â±¦': 't',
        'á¹«': 't',
        'á¹­': 't',
        'Æ­': 't',
        'á¹¯': 't',
        'áµµ': 't',
        'Æ«': 't',
        'Êˆ': 't',
        'Å§': 't',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TAILLESS PHI' (â±·)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TC DIGRAPH WITH CURL' (Ê¨)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TESH DIGRAPH' (Ê§)
        'áµº': 'th',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER THORN' (Ã¾)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER THORN WITH STROKE' (ê¥)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER THORN WITH STROKE THROUGH DESCENDER' (ê§)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TONE FIVE' (Æ½)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TONE SIX' (Æ…)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TONE TWO' (Æ¨)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TOP HALF O' (á´–)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TRESILLO' (êœ«)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TS DIGRAPH' (Ê¦)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TUM' (ê·)
        'É': 'a',
        'á´‚': 'ae',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TURNED ALPHA' (É’)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TURNED DELTA' (Æ)
        'Ç': 'e',
        'áµ·': 'g',
        'É¥': 'h',
        'Ê®': 'h',
        'Ê¯': 'h',
        'á´‰': 'i',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TURNED INSULAR G' (ê¿)
        'Êž': 'k',
        'êž': 'l',
        'É¯': 'm',
        'É°': 'm',
        'á´”': 'oe',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER TURNED OPEN E' (á´ˆ)
        'É¹': 'r',
        'É»': 'r',
        'Éº': 'r',
        'â±¹': 'r',
        'Ê‡': 't',
        'ÊŒ': 'v',
        'Ê': 'w',
        'ÊŽ': 'y',
        'êœ©': 'tz',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER U BAR' (Ê‰)
        'Ãº': 'u',
        'Å­': 'u',
        'Ç”': 'u',
        'Ã»': 'u',
        'á¹·': 'u',
        'Ã¼': 'u',
        'Ç˜': 'u',
        'Çš': 'u',
        'Çœ': 'u',
        'Ç–': 'u',
        'á¹³': 'u',
        'á»¥': 'u',
        'Å±': 'u',
        'È•': 'u',
        'Ã¹': 'u',
        'á»§': 'u',
        'Æ°': 'u',
        'á»©': 'u',
        'á»±': 'u',
        'á»«': 'u',
        'á»­': 'u',
        'á»¯': 'u',
        'È—': 'u',
        'Å«': 'u',
        'á¹»': 'u',
        'Å³': 'u',
        'á¶™': 'u',
        'Å¯': 'u',
        'Å©': 'u',
        'á¹¹': 'u',
        'á¹µ': 'u',
        'áµ«': 'ue',
        'ê¸': 'um',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER UPSILON' (ÊŠ)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER UPSILON WITH STROKE' (áµ¿)
        'â±´': 'v',
        'êŸ': 'v',
        'á¹¿': 'v',
        'Ê‹': 'v',
        'á¶Œ': 'v',
        'â±±': 'v',
        'á¹½': 'v',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER VEND' (ê©)
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER VISIGOTHIC Z' (ê£)
        'ê¡': 'vy',
        'áºƒ': 'w',
        'Åµ': 'w',
        'áº…': 'w',
        'áº‡': 'w',
        'áº‰': 'w',
        'áº': 'w',
        'â±³': 'w',
        'áº˜': 'w',
        'áº': 'x',
        'áº‹': 'x',
        'á¶': 'x',
        'Ã½': 'y',
        'Å·': 'y',
        'Ã¿': 'y',
        'áº': 'y',
        'á»µ': 'y',
        'á»³': 'y',
        'Æ´': 'y',
        'á»·': 'y',
        'á»¿': 'y',
        'È³': 'y',
        'áº™': 'y',
        'É': 'y',
        'á»¹': 'y',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LETTER YOGH' (È)
        'Åº': 'z',
        'Å¾': 'z',
        'áº‘': 'z',
        'Ê‘': 'z',
        'â±¬': 'z',
        'Å¼': 'z',
        'áº“': 'z',
        'È¥': 'z',
        'áº•': 'z',
        'áµ¶': 'z',
        'á¶Ž': 'z',
        'Ê': 'z',
        'Æ¶': 'z',
        'É€': 'z',
        'ï¬€': 'ff',
        'ï¬ƒ': 'ffi',
        'ï¬„': 'ffl',
        'ï¬': 'fi',
        'ï¬‚': 'fl',
        'Ä³': 'ij',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SMALL LIGATURE LONG S T' (ï¬…)
        'Å“': 'oe',
        'ï¬†': 'st',
        'â‚': 'a',
        'â‚‘': 'e',
        'áµ¢': 'i',
        'â±¼': 'j',
        'â‚’': 'o',
        'áµ£': 'r',
        // CANNOT FIND APPROXIMATION FOR 'LATIN SUBSCRIPT SMALL LETTER SCHWA' (â‚”)
        'áµ¤': 'u',
        'áµ¥': 'v',
        'â‚“': 'x' // LATIN SUBSCRIPT SMALL LETTER X
    },
    do: function _do(str) {
        return str.replace(/[^A-Za-z0-9\[\] ]/g, function (x) {
            return latinize._map[x] || x;
        });
    }
};
},{}],5:[function(require,module,exports){
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
},{"./controllers/ResearchesListController":1,"./models/ResearchesList":6,"./services/SidraService":9,"./views/ResearchesListView":11,"./views/SidraResearchView":12}],6:[function(require,module,exports){
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
                this._list.filtered = this._list.full.reduce(this._filterTables(term), []);
            } else {
                this._list.filtered = this._list.full;
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
        key: "_filterTables",
        value: function _filterTables(term) {
            return function (arr, research) {
                var tables = (0, _isNumber.isNumber)(term) ? [research.getTable(parseInt(term, 10))] : research.filterTables(term);
                if (tables.length > 0) {
                    arr.push(this._sidraResearchFactory(research, tables));
                }
                return arr;
            };
        }
    }, {
        key: "_sidraResearchFactory",
        value: function _sidraResearchFactory(baseResearch, tables) {
            return new _SidraResearch.SidraResearch(Object.assign({}, baseResearch, { tables: tables }));
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
},{"../helpers/isNumber":3,"../shared/Listenable":10,"./SidraResearch":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SidraResearch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _latinize = require("../helpers/latinize");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SidraResearch = exports.SidraResearch = function () {
    _createClass(SidraResearch, null, [{
        key: "convert",
        value: function convert(params) {
            return {
                id: params.id,
                name: params.nome,
                alteredName: SidraResearch.alterName(params.nome),
                tables: params.agregados.map(function (_ref) {
                    var id = _ref.id,
                        nome = _ref.nome;
                    return { id: parseInt(id, 10), name: nome, alteredName: SidraResearch.alterName(nome) };
                })
            };
        }
    }, {
        key: "alterName",
        value: function alterName(name) {
            return _latinize.latinize.do(name).toLowerCase();
        }
    }]);

    function SidraResearch(params) {
        _classCallCheck(this, SidraResearch);

        this.id = params.id;
        this.name = params.name;
        this.alteredName = params.alteredName;
        this.tables = params.tables;
        this.tables.forEach(Object.freeze);
        Object.freeze(this);
    }

    _createClass(SidraResearch, [{
        key: "filterTables",
        value: function filterTables(term) {
            var _term = SidraResearch.alterName(term);
            return this.tables.filter(function (table) {
                return table.alteredName.includes(_term);
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
},{"../helpers/latinize":4}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{"../models/SidraResearch":7,"./RequestService":8}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
},{}]},{},[5])