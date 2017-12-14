/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Custom Marker object
var Marker = function () {
    function Marker(x, y, radius, name, strokeStyle, fillStyle) {
        _classCallCheck(this, Marker);

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.prevX = -1;
        this.prevY = -1;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.markerName = name;
    }

    _createClass(Marker, [{
        key: 'toString',
        value: function toString() {
            return 'This is a marker with name ' + this.markerName;
        }
    }], [{
        key: 'drawOneMarker',
        value: function drawOneMarker(ctx, marker, xPos, yPos) {
            // Draw an individual marker.
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = marker.strokeStyle;
            ctx.fillStyle = marker.fillStyle;
            if (marker.radius > 0) {
                ctx.arc(xPos, yPos, marker.radius, 0, 2 * Math.PI, false);
            } else {
                ctx.rect(xPos, yPos, marker.x, marker.y);
            }
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }]);

    return Marker;
}();

exports.default = Marker;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _diamond = __webpack_require__(2);

var _diamond2 = _interopRequireDefault(_diamond);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var diamondGame = new _diamond2.default(document); // import Point from './Point.js';

window.onload = function () {
  diamondGame.init();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _city = __webpack_require__(3);

var _city2 = _interopRequireDefault(_city);

var _africa = __webpack_require__(4);

var _africa2 = _interopRequireDefault(_africa);

var _palmtree = __webpack_require__(5);

var _palmtree2 = _interopRequireDefault(_palmtree);

var _boat = __webpack_require__(6);

var _boat2 = _interopRequireDefault(_boat);

var _steps = __webpack_require__(7);

var _steps2 = _interopRequireDefault(_steps);

var _dice = __webpack_require__(9);

var _dice2 = _interopRequireDefault(_dice);

var _user = __webpack_require__(11);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Diamond = function () {
    function Diamond(doc) {
        _classCallCheck(this, Diamond);

        this.doc = doc;
        // this.diRed = '#a7100c';
        this.canvas = [{
            'element': {},
            'id': 'gameCanvas',
            'width': 830,
            'height': 894,
            'fillStyle': '#eeeeee'
        }, {
            'element': {},
            'id': 'stepCanvas',
            'width': 830,
            'height': 894
        }, {
            'element': {},
            'id': 'diceCanvas',
            'width': 830,
            'height': 894
        }, {
            'element': {},
            'id': 'userCanvas',
            'width': 830,
            'height': 894
        }];
    }

    _createClass(Diamond, [{
        key: 'init',
        value: function init() {
            this.initGameBoard();
            this.initUsers();
        }
    }, {
        key: 'initGameBoard',
        value: function initGameBoard() {
            var _this = this;

            var body = this.doc.querySelector('body');
            var pageContainer = this.doc.createElement('div');
            pageContainer.setAttribute('class', 'page-container');
            var h1Element = this.doc.createElement('h1');
            h1Element.innerHTML = this;
            pageContainer.appendChild(h1Element);
            var diceButton = this.doc.createElement('input');
            diceButton.type = 'button';
            diceButton.id = 'diceButton';
            diceButton.value = 'Kasta tärningen';
            diceButton.onclick = function () {
                return _this.rollDice();
            };
            pageContainer.appendChild(diceButton);
            this.addAllCanvas(pageContainer);
            this.doc.body.appendChild(pageContainer);
            var africa = new _africa2.default();
            var ctx = this.canvas[0].element.getContext('2d');
            africa.draw(ctx, 0, 0);

            this.addPalmTrees(ctx);
            this.addBoats(ctx);

            var ctx1 = this.canvas[1].element.getContext('2d');
            var tanger = new _city2.default('TANGER', true);
            tanger.draw(ctx1, 170, 5, 175);

            var canaria = new _city2.default('CANARIA', true);
            canaria.draw(ctx1, 0, 60, 5);

            var marrakech = new _city2.default('Marrakech');
            marrakech.draw(ctx1, 70, 130, 65);

            var kairo = new _city2.default('KAIRO', true);
            kairo.draw(ctx1, 560, 80, 572);

            var tunis = new _city2.default('Tunis');
            tunis.draw(ctx1, 300, 40, 305);

            _steps2.default.draw(ctx1);
        }
    }, {
        key: 'initUsers',
        value: function initUsers() {
            var ctx3 = this.canvas[3].element.getContext('2d');
            var userRed = new _user2.default('red');
            var userBlue = new _user2.default('blue');
            var userGreen = new _user2.default('green');
            var userYellow = new _user2.default('yellow');
            userRed.draw(ctx3, 165, 0);
            userBlue.draw(ctx3, 190, 0);
            userGreen.draw(ctx3, 555, 75);
            userYellow.draw(ctx3, 580, 75);
        }
    }, {
        key: 'rollDice',
        value: function rollDice() {
            // const ctx2 = this.canvas[2].element.getContext('2d');
            var dice = new _dice2.default();
            // dice.draw(ctx2, 750, 90);
            dice.throwDice();
        }
    }, {
        key: 'addAllCanvas',
        value: function addAllCanvas(container) {
            var _this2 = this;

            this.canvas.forEach(function (elmt, idx, array) {
                elmt.element = _this2.doc.createElement('canvas');
                elmt.element.setAttribute('id', elmt.id);
                //Do not set width/height on canvas with CSS! Will affect drawing!
                elmt.element.setAttribute('width', elmt.width);
                elmt.element.setAttribute('height', elmt.height);
                container.appendChild(elmt.element);
                //this.fillCanvas(idx);
            });
        }
    }, {
        key: 'addPalmTrees',
        value: function addPalmTrees(ctx) {
            var palmTree = new _palmtree2.default();
            palmTree.draw(ctx, 80, 60, 50);
            palmTree.draw(ctx, 350, 0, 70);
            palmTree.draw(ctx, 400, 230, 50);
            palmTree.draw(ctx, 100, 260, 50);
            palmTree.draw(ctx, 570, 530, 70);
            palmTree.draw(ctx, 775, 660, 30);
            palmTree.draw(ctx, 460, 690, 30);
            palmTree.draw(ctx, 490, 710, 30);
            palmTree.draw(ctx, 520, 710, 30);
            palmTree.draw(ctx, 550, 710, 30);
            palmTree.draw(ctx, 700, 430, 30);
            palmTree.draw(ctx, 730, 400, 30);
            palmTree.draw(ctx, 760, 360, 30);
            palmTree.draw(ctx, 780, 320, 30);
        }
    }, {
        key: 'addBoats',
        value: function addBoats(ctx) {
            var boat = new _boat2.default();
            boat.draw(ctx, 60, 5, 60);
            boat.draw(ctx, 695, 565, 80);
            boat.draw(ctx, 140, 500, 120);
        }
    }, {
        key: 'clearCanvas',
        value: function clearCanvas(id) {
            var ctx = this.canvas[id].element.getContext('2d');
            ctx.clearRect(0, 0, this.canvas[id].width, this.canvas[id].height);
        }

        // fillCanvas(id) {
        //     var ctx = this.canvas[id].element.getContext('2d');
        //     ctx.fillStyle = this.canvas[id].fillStyle;
        //     ctx.rect(0, 0, this.canvas[id].width, this.canvas[id].height);
        //     ctx.fill();
        // }

    }, {
        key: 'toString',
        value: function toString() {
            return 'Hunt for lost diamond! (Per Lundkvist &copy;)';
        }
    }]);

    return Diamond;
}();

exports.default = Diamond;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _marker = __webpack_require__(0);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var City = function (_Marker) {
    _inherits(City, _Marker);

    function City(name, isHomeMarker) {
        _classCallCheck(this, City);

        var size = void 0;
        if (isHomeMarker) {
            size = 60;

            var _this = _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).call(this, size, size, 0, name, "#A1D490", "#D4A190"));
        } else {
            size = 40;

            var _this = _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).call(this, size, size, 0, name, "white", "red"));
        }
        _this.size = size;
        return _possibleConstructorReturn(_this);
    }

    _createClass(City, [{
        key: "draw",
        value: function draw(ctx, xPos, yPos, xPosText) {
            if (xPosText === undefined) xPosText = xPos;
            _marker2.default.drawOneMarker(ctx, this, xPos, yPos);
            ctx.font = "11px Arial";
            ctx.fillStyle = 'white';
            ctx.fillText(this.markerName, xPosText, yPos + this.size - 5);
        }
    }]);

    return City;
}(_marker2.default);

exports.default = City;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Africa = function () {
    function Africa() {
        _classCallCheck(this, Africa);
    }

    _createClass(Africa, [{
        key: 'draw',
        value: function draw(ctx, xPos, yPos) {
            var africaImg = new Image();
            africaImg.src = './images/africa.png';
            africaImg.onload = function () {
                ctx.drawImage(africaImg, xPos, yPos);
            };
        }
    }]);

    return Africa;
}();

exports.default = Africa;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PalmTree = function () {
    function PalmTree() {
        _classCallCheck(this, PalmTree);
    }

    _createClass(PalmTree, [{
        key: 'draw',
        value: function draw(ctx, xPos, yPos, wantedWidth) {
            var palmTreeOriginWidth = 600;
            var palmTreeOriginHeight = 828;
            var ratio = palmTreeOriginWidth / wantedWidth;
            var calcHeight = palmTreeOriginHeight / ratio;
            var palmTreeImg = new Image();
            palmTreeImg.src = './images/palm-tree.png';
            palmTreeImg.onload = function () {
                ctx.drawImage(palmTreeImg, xPos, yPos, wantedWidth, calcHeight);
            };
        }
    }]);

    return PalmTree;
}();

exports.default = PalmTree;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Boat = function () {
    function Boat() {
        _classCallCheck(this, Boat);
    }

    _createClass(Boat, [{
        key: 'draw',
        value: function draw(ctx, xPos, yPos, wantedWidth) {
            var boatOriginWidth = 1000;
            var boatOriginHeight = 896;
            var ratio = boatOriginWidth / wantedWidth;
            var calcHeight = boatOriginHeight / ratio;
            var boatImg = new Image();
            boatImg.src = './images/boat.png';
            boatImg.onload = function () {
                ctx.drawImage(boatImg, xPos, yPos, wantedWidth, calcHeight);
            };
        }
    }]);

    return Boat;
}();

exports.default = Boat;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _marker = __webpack_require__(0);

var _marker2 = _interopRequireDefault(_marker);

var _step = __webpack_require__(8);

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Steps = function () {
    function Steps() {
        _classCallCheck(this, Steps);

        this.relations = [[1, 2], [2, 3], [3, 4], [3, 14], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [11, 12], [12, 13], [13, 14], [14, 15], [15, 6], [16, 15], [16, 10], [17, 16], [17, 13], [18, 17], [19, 18], [20, 19], [20, 11], [21, 20], [22, 21], [22, 19], [23, 22], [24, 23], [25, 17], [25, 24], [26, 25], [26, 16], [27, 21], [28, 27], [29, 28], [30, 29], [31, 30], [32, 31], [33, 32], [33, 38], [34, 33], [34, 30], [35, 34], [36, 35], [36, 26], [37, 36], [38, 37], [39, 38], [40, 39], [40, 32], [41, 36], [42, 41], [43, 42], [44, 43], [45, 44], [46, 45], [46, 40], [47, 46], [48, 47], [49, 48], [50, 49], [51, 50], [51, 41], [52, 51], [53, 52], [54, 53], [55, 54], [55, 47], [57, 56], [58, 57], [59, 58], [61, 60], [62, 61], [62, 53], [63, 62], [64, 63], [65, 64], [66, 65], [67, 66], [67, 60], [68, 67], [69, 68], [70, 69], [70, 67]];
        this.steps = [new _step2.default(1, 200, 80), new _step2.default(2, 150, 90), new _step2.default(3, 140, 130), new _step2.default(4, 120, 180), new _step2.default(5, 60, 190), new _step2.default(6, 60, 240), new _step2.default(7, 60, 290), new _step2.default(8, 80, 340), new _step2.default(9, 130, 370), new _step2.default(10, 180, 370), new _step2.default(11, 240, 100), new _step2.default(12, 200, 140), new _step2.default(13, 240, 180), new _step2.default(14, 160, 190), new _step2.default(15, 150, 240), new _step2.default(16, 180, 290), new _step2.default(17, 260, 240), new _step2.default(18, 320, 220), new _step2.default(19, 340, 160), new _step2.default(20, 300, 100), new _step2.default(21, 400, 110), new _step2.default(22, 400, 160), new _step2.default(23, 440, 210), new _step2.default(24, 380, 240), new _step2.default(25, 320, 290), new _step2.default(26, 260, 340), new _step2.default(27, 480, 130), new _step2.default(28, 550, 150), new _step2.default(29, 590, 210), new _step2.default(30, 500, 240), new _step2.default(31, 630, 270), new _step2.default(32, 680, 300), new _step2.default(33, 580, 340), new _step2.default(34, 500, 320), new _step2.default(35, 410, 320), new _step2.default(36, 340, 380), new _step2.default(37, 470, 380), new _step2.default(38, 540, 390), new _step2.default(39, 640, 390), new _step2.default(40, 740, 360), new _step2.default(41, 340, 440), new _step2.default(42, 400, 450), new _step2.default(43, 460, 460), new _step2.default(44, 540, 450), new _step2.default(45, 600, 460), new _step2.default(46, 680, 460), new _step2.default(47, 640, 520), new _step2.default(48, 580, 510), new _step2.default(49, 520, 560), new _step2.default(50, 460, 520), new _step2.default(51, 400, 540), new _step2.default(52, 400, 600), new _step2.default(53, 460, 620), new _step2.default(54, 540, 620), new _step2.default(55, 670, 650), new _step2.default(56, 800, 640), new _step2.default(57, 760, 680), new _step2.default(58, 770, 730), new _step2.default(59, 740, 770), new _step2.default(60, 610, 740), new _step2.default(61, 570, 680), new _step2.default(62, 500, 680), new _step2.default(63, 440, 670), new _step2.default(64, 370, 680), new _step2.default(65, 400, 730), new _step2.default(66, 460, 750), new _step2.default(67, 520, 790), new _step2.default(68, 440, 810), new _step2.default(69, 445, 865), new _step2.default(70, 520, 840)];
    }

    _createClass(Steps, [{
        key: 'draw',
        value: function draw(ctx) {
            var _this = this;

            this.steps.forEach(function (obj, idx, all) {
                var stepMarker = new _marker2.default(0, 0, 12, 'stepMarker', "white", "#dddddd");
                _marker2.default.drawOneMarker(ctx, stepMarker, obj.x, obj.y);
                ctx.font = "11px Arial";
                ctx.fillStyle = 'red';
                var idLength = obj.id.toString().length;
                ctx.fillText(obj.id, obj.x - 3 * idLength, obj.y + 3);
                var objRelated = _this.getRelations(obj.id);
                objRelated.forEach(function (relId, relIdx, relAll) {
                    ctx.beginPath();
                    ctx.moveTo(_this.steps[relId - 1].x, _this.steps[relId - 1].y);
                    ctx.lineTo(obj.x, obj.y);
                    ctx.strokeStyle = '#D4A190';
                    ctx.stroke();
                });
            });
        }
    }, {
        key: 'getRelations',
        value: function getRelations(stepId) {
            var stepRelations = [];
            this.relations.forEach(function (relObjArray, relIdx, relAll) {
                if (relObjArray.includes(stepId)) {
                    relObjArray.forEach(function (id, idx, arr) {
                        if (id !== stepId) {
                            stepRelations.push(id);
                        }
                    });
                }
            });
            return stepRelations;
        }
    }]);

    return Steps;
}();

exports.default = new Steps();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Step = function Step(id, x, y) {
    _classCallCheck(this, Step);

    this.id = id;
    this.x = x;
    this.y = y;
};

exports.default = Step;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dicedot = __webpack_require__(10);

var _dicedot2 = _interopRequireDefault(_dicedot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animation = null; //Can not be used as a class variable, dont know why?!

var Dice = function () {
    function Dice() {
        _classCallCheck(this, Dice);
    }

    _createClass(Dice, [{
        key: 'draw',
        value: function draw(ctx, xPos, yPos) {
            var wantedWidth = 50;
            var diceOriginWidth = 350;
            var diceOriginHeight = 400;
            var ratio = diceOriginWidth / wantedWidth;
            var calcHeight = diceOriginHeight / ratio;
            ctx.font = "bold 38px Arial";
            ctx.fillStyle = 'white';
            var randomNumber = Math.floor(Math.random() * 6 + 1);
            var randomXPositioning = Math.floor(Math.random() * 20 + 1);
            var randomYPositioning = Math.floor(Math.random() * 20 + 1);
            var diceImg = new Image();
            diceImg.src = './images/' + randomNumber + '.png';
            diceImg.onload = function () {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(diceImg, xPos + randomXPositioning, yPos + randomYPositioning, wantedWidth, calcHeight);
            };
        }
    }, {
        key: 'throwDice',
        value: function throwDice() {
            clearInterval(animation);
            var wrapperId = 'diceWrapper';
            var existingDiceWrapper = document.querySelector('#' + wrapperId);
            if (existingDiceWrapper) {
                document.body.removeChild(existingDiceWrapper);
            }

            var dotPositions = [[new _dicedot2.default(50, 50)], [new _dicedot2.default(15, 15), new _dicedot2.default(85, 85)], [new _dicedot2.default(15, 15), new _dicedot2.default(50, 50), new _dicedot2.default(85, 85)], [new _dicedot2.default(15, 15), new _dicedot2.default(85, 15), new _dicedot2.default(15, 85), new _dicedot2.default(85, 85)], [new _dicedot2.default(15, 15), new _dicedot2.default(85, 15), new _dicedot2.default(50, 50), new _dicedot2.default(15, 85), new _dicedot2.default(85, 85)], [new _dicedot2.default(15, 15), new _dicedot2.default(50, 15), new _dicedot2.default(85, 15), new _dicedot2.default(15, 85), new _dicedot2.default(50, 85), new _dicedot2.default(85, 85)]];
            var randomNumber = Math.floor(Math.random() * 6 + 1);
            var diceNumberDots = dotPositions[randomNumber - 1];
            var circles = '';
            diceNumberDots.forEach(function (dot) {
                circles += '<circle r="8" cx="' + dot.cx + '" cy="' + dot.cy + '" stroke="black" fill="#333333"></circle>';
            });
            var svgDice = '<svg width="100" height="100" viewBox="0 0 100 100" class="svg-dice">\n                            ' + circles + '\n                         </svg>';
            var diceWrapper = document.createElement('div');
            diceWrapper.id = wrapperId;
            diceWrapper.innerHTML = svgDice;

            // const svgDice = document.createElement('svg');
            // svgDice.setAttribute('width', '100');
            // svgDice.setAttribute('height', '100');
            // svgDice.setAttribute('viewBox', '0 0 100 100'); //NOT POSSIBLE! will rewrite viewBox to viewbox?!
            // svgDice.classList.add('svg-dice');
            // const dot = document.createElement('circle');
            // dot.setAttribute('r', '5');
            // dot.setAttribute('cx', '10');
            // dot.setAttribute('cy', '40');
            // dot.setAttribute('stroke', 'black');
            // dot.setAttribute('fill', 'black');
            // svgDice.appendChild(dot);

            document.body.appendChild(diceWrapper);
            this.animate();
        }
    }, {
        key: 'animate',
        value: function animate() {
            clearInterval(animation);
            animation = setInterval(function () {
                var diceElement = document.querySelector('.svg-dice');
                diceElement.classList.toggle('svg-dice--large');
            }, 1500);
        }
    }]);

    return Dice;
}();

exports.default = Dice;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DiceDot = function DiceDot(cx, cy) {
  _classCallCheck(this, DiceDot);

  this.cx = cx;
  this.cy = cy;
};

exports.default = DiceDot;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(color) {
        _classCallCheck(this, User);

        this.color = color;
    }

    _createClass(User, [{
        key: "draw",
        value: function draw(ctx, xPos, yPos) {
            var wantedWidth = 50;
            var userOriginWidth = 340;
            var userOriginHeight = 340;
            var ratio = userOriginWidth / wantedWidth;
            var calcHeight = userOriginHeight / ratio;
            ctx.font = "bold 38px Arial";
            ctx.fillStyle = 'white';
            var userImg = new Image();
            userImg.src = "./images/" + this.color + ".png";
            userImg.onload = function () {
                ctx.drawImage(userImg, xPos, yPos, wantedWidth, calcHeight);
            };
        }
    }]);

    return User;
}();

exports.default = User;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map