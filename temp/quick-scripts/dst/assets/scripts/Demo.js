
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Demo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00b2d52GvRJ0Z42zw9VDSXf', 'Demo');
// scripts/Demo.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GAP_HEIGHT = 134;
var GAP_WIDTH = 170;
var startAxisY = [268, 134, 0, -134, -268];
var gap = 134;
var moveRange = 134 * 5 + 20;
var dropTimeGap = 2;
var reelTimeGap = 0.2;
var Demo = /** @class */ (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeSpin = null;
        _this.btnSpin = null;
        _this.spSpin = null;
        _this.spSeth = null;
        _this.spGoddes = null;
        _this.multiplyNum = null;
        _this.bigWin = null;
        _this.superWin = null;
        _this.winNum = null;
        _this.freeTitle = null;
        _this.freeNum = null;
        _this.spFreeGameIntro = null;
        _this.spFreeGameOutro = null;
        _this.reel = null;
        _this.fgBg = null;
        _this.fgReel = null;
        _this.fgCount = null;
        _this.SC = null;
        _this.H1 = null;
        _this.H2 = null;
        _this.H3 = null;
        _this.H4 = null;
        _this.N1 = null;
        _this.N2 = null;
        _this.N3 = null;
        _this.N4 = null;
        _this.N5 = null;
        // @property(cc.AudioClip)
        _this.DEMO_CLICK_COUNT = 0;
        _this.DEMO_CLICK_LIMIT = 3;
        // 第一轉 普通
        _this.oriResultArr_1 = [
            [4, 1, 2, 3, 4],
            [2, 3, 4, 5, 6],
            [9, 7, 1, 2, 3],
            [9, 4, 1, 2, 3],
            [1, 7, 3, 4, 5],
            [7, 8, 9, 4, 1]
        ];
        _this.dropResultArr_1 = [
            [-1, 1, 2, 3, -1],
            [2, 3, -1, 5, 6],
            [9, -1, 1, 2, 3],
            [9, -1, 1, 2, 3],
            [1, -1, 3, -1, 5],
            [7, 8, 9, -1, 1]
        ];
        _this.afterMoveResultArr_1 = [
            [-1, -1, 1, 2, 3],
            [-1, 2, 3, 5, 6],
            [-1, 9, 1, 2, 3],
            [-1, 9, 1, 2, 3],
            [-1, -1, 1, 3, 5],
            [-1, 7, 8, 9, 1]
        ];
        _this.addNewResultArr_1 = [
            [4, 1, 2, 3, 4],
            [2, 3, 4, 5, 6],
            [9, 4, 1, 2, 3],
            [9, 4, 1, 2, 3],
            [1, 4, 3, 4, 5],
            [7, 8, 9, 4, 1]
        ];
        // 第二轉 贏獎
        _this.oriResultArr_2 = [
            [4, 1, 2, 3, 4],
            [2, 3, 4, 5, 6],
            [9, 4, 1, 2, 3],
            [9, 4, 1, 2, 3],
            [1, 4, 3, 4, 5],
            [7, 8, 9, 4, 1]
        ];
        _this.dropResultArr_2 = [
            [-1, 1, 2, 3, -1],
            [2, 3, -1, 5, 6],
            [9, -1, 1, 2, 3],
            [9, -1, 1, 2, 3],
            [1, -1, 3, -1, 5],
            [7, 8, 9, -1, 1]
        ];
        _this.afterMoveResultArr_2 = [
            [-1, -1, 1, 2, 3],
            [-1, 2, 3, 5, 6],
            [-1, 9, 1, 2, 3],
            [-1, 9, 1, 2, 3],
            [-1, -1, 1, 3, 5],
            [-1, 7, 8, 9, 1]
        ];
        _this.addNewResultArr_2 = [
            [4, 0, 1, 2, 3],
            [5, 2, 3, 5, 6],
            [7, 9, 1, 2, 3],
            [4, 9, 1, 2, 3],
            [7, 0, 1, 3, 5],
            [2, 7, 8, 9, 1]
        ];
        // 第三轉 free game
        _this.oriResultArr_3 = [
            [0, 1, 2, 3, 4],
            [2, 3, 4, 5, 6],
            [9, 0, 1, 2, 3],
            [9, 0, 1, 2, 3],
            [1, 2, 3, 4, 5],
            [7, 8, 9, 0, 1]
        ];
        _this.dropResultArr_3 = [
            [-1, 1, 2, 3, 4],
            [2, 3, 4, 5, 6],
            [9, -1, 1, 2, 3],
            [9, -1, 1, 2, 3],
            [1, 2, 3, 4, 5],
            [7, 8, 9, -1, 1]
        ];
        _this.afterMoveResultArr_3 = [
            [-1, 1, 2, 3, 4],
            [2, 3, 4, 5, 6],
            [-1, 9, 1, 2, 3],
            [-1, 9, 1, 2, 3],
            [1, 2, 3, 4, 5],
            [-1, 7, 8, 9, 1]
        ];
        _this.addNewResultArr_3 = [
            [1, 1, 2, 3, 4],
            [2, 3, 4, 5, 6],
            [1, 9, 1, 2, 3],
            [3, 9, 1, 2, 3],
            [1, 2, 3, 4, 5],
            [2, 7, 8, 9, 1]
        ];
        // FG 前三轉沒贏
        _this.oriResultArr_4 = [
            [1, 1, 2, 3, 2],
            [2, 7, 4, 3, 6],
            [1, 9, 1, 2, 3],
            [3, 3, 7, 2, 6],
            [9, 2, 3, 7, 5],
            [2, 7, 2, 9, 1]
        ];
        _this.oriResultArr_5 = [
            [1, 1, 8, 3, 8],
            [4, 6, 4, 7, 6],
            [5, 6, 1, 2, 3],
            [3, 6, 1, 2, 3],
            [5, 2, 3, 7, 5],
            [2, 7, 8, 9, 8]
        ];
        _this.oriResultArr_6 = [
            [5, 2, 2, 3, 4],
            [2, 3, 4, 6, 6],
            [1, 8, 8, 2, 3],
            [3, 9, 1, 7, 7],
            [5, 5, 2, 4, 5],
            [2, 7, 8, 9, 1]
        ];
        // 後二轉贏獎
        _this.oriResultArr_7 = [
            [4, 1, 2, 3, 4],
            [2, 1, 4, 1, 6],
            [9, 7, 1, 2, 3],
            [9, 2, 1, 2, 3],
            [1, 4, 1, 4, 5],
            [7, 8, 9, 4, 1]
        ];
        _this.dropResultArr_7 = [
            [4, -1, 2, 3, 4],
            [2, -1, 4, -1, 6],
            [9, 7, -1, 2, 3],
            [9, 2, -1, 2, 3],
            [-1, 4, -1, 4, 5],
            [7, 8, 9, 4, -1]
        ];
        _this.afterMoveResultArr_7 = [
            [-1, 4, 2, 3, 4],
            [-1, -1, 2, 4, 6],
            [-1, 9, 7, 2, 3],
            [-1, 9, 2, 2, 3],
            [-1, -1, 4, 4, 5],
            [-1, 7, 8, 9, 4]
        ];
        _this.addNewResultArr_7 = [
            [7, 4, 2, 3, 4],
            [6, 1, 2, 4, 6],
            [9, 9, 7, 2, 3],
            [7, 9, 2, 2, 3],
            [1, 1, 4, 4, 5],
            [8, 7, 8, 9, 4]
        ];
        _this.oriResultArr_8 = [
            [4, 1, 2, 3, 4],
            [2, 3, 4, 5, 6],
            [9, 2, 2, 2, 3],
            [9, 4, 1, 2, 3],
            [1, 2, 3, 2, 5],
            [7, 8, 9, 4, 1]
        ];
        _this.dropResultArr_8 = [
            [4, 1, -1, 3, 4],
            [-1, 3, 4, 5, 6],
            [9, -1, -1, -1, 3],
            [9, 4, 1, -1, 3],
            [1, -1, 3, -1, 5],
            [7, 8, 9, 4, 1]
        ];
        _this.afterMoveResultArr_8 = [
            [-1, 4, 1, 3, 4],
            [-1, 3, 4, 5, 6],
            [-1, -1, -1, 9, 3],
            [-1, 9, 4, 1, 3],
            [-1, -1, 1, 3, 5],
            [7, 8, 9, 4, 1]
        ];
        _this.addNewResultArr_8 = [
            [2, 4, 1, 3, 4],
            [2, 3, 4, 5, 6],
            [1, 1, 4, 9, 3],
            [2, 9, 4, 1, 3],
            [2, 3, 1, 3, 5],
            [7, 8, 9, 4, 1]
        ];
        _this.currentResultArr = [];
        _this.symbolIdMap = [];
        _this.symbolAnimMap = {
            'H1': 'S1',
            'H2': 'S2',
            'H3': 'S3',
            'H4': 'S4',
            'N1': 'A',
            'N2': 'K',
            'N3': 'Q',
            'N4': 'J',
            'N5': '10',
            'SC': 'Scatter'
        };
        _this.isSpinning = false;
        _this.row_0 = [];
        _this.row_1 = [];
        _this.row_2 = [];
        _this.row_3 = [];
        _this.row_4 = [];
        _this.row_5 = [];
        _this.animInterval = null;
        return _this;
    }
    // onLoad () {}
    Demo.prototype.start = function () {
        this.symbolIdMap = [
            this.SC,
            this.H1, this.H2, this.H3, this.H4,
            this.N1, this.N2, this.N3, this.N4, this.N5
        ];
        for (var i = 0; i < 5; i++) {
            this.row_0.push(this.reel.getChildByName("0" + i));
        }
        ;
        for (var i = 0; i < 5; i++) {
            this.row_1.push(this.reel.getChildByName("1" + i));
        }
        ;
        for (var i = 0; i < 5; i++) {
            this.row_2.push(this.reel.getChildByName("2" + i));
        }
        ;
        for (var i = 0; i < 5; i++) {
            this.row_3.push(this.reel.getChildByName("3" + i));
        }
        ;
        for (var i = 0; i < 5; i++) {
            this.row_4.push(this.reel.getChildByName("4" + i));
        }
        ;
        for (var i = 0; i < 5; i++) {
            this.row_5.push(this.reel.getChildByName("5" + i));
        }
        ;
        // 初始化人物動態
        this.spSeth.loop = true;
        this.spSeth.animation = 'bg_idle';
        this.spGoddes.loop = true;
        this.spGoddes.animation = 'bg_idle';
        // 初始化symbol
        this.currentResultArr = this.oriResultArr_3;
        this.spawnAllSymbol();
        // 按鈕事件監聽
        this.nodeSpin.on('click', this.onClickBtnSpin, this);
    };
    Demo.prototype.update = function (dt) {
        if (!this.isSpinning && this.spSpin.animation !== 'idle') {
            this.spSpin.loop = true;
            this.spSpin.animation = 'idle';
        }
        ;
    };
    Demo.prototype.onClickBtnSpin = function () {
        var _this = this;
        this.isSpinning = true;
        this.spSpin.loop = false;
        this.spSpin.animation = 'spin';
        this.DEMO_CLICK_COUNT += 1;
        this.DEMO_CLICK_COUNT = this.DEMO_CLICK_COUNT > this.DEMO_CLICK_LIMIT ? 1 : this.DEMO_CLICK_COUNT;
        // 鎖定spin按鈕
        this.btnSpin.interactable = false;
        setTimeout(function () {
            _this.spSpin.animation = 'disabled';
        }, 1000);
        console.log('COUNT: ', this.DEMO_CLICK_COUNT);
        switch (this.DEMO_CLICK_COUNT) {
            // ---------------------------------------------------------------------------------------------
            case 1: // 普通滾輪展示
                cc.tween(this.node)
                    .call(function () {
                    // 落下盤面
                    _this.wholeReelClear();
                })
                    .to(dropTimeGap, {})
                    .call(function () {
                    // 更換新盤面
                    _this.currentResultArr = _this.oriResultArr_1;
                    //
                    // this.spawnAllSymbol();
                })
                    .to(0.5, {})
                    .call(function () {
                    // 從上落下新盤面
                    _this.wholeReelDrop();
                })
                    .to(1, {})
                    .call(function () {
                    _this.btnSpin.interactable = true;
                })
                    .start();
                break;
            // ---------------------------------------------------------------------------------------------    
            case 2: // 基礎贏錢展示
                cc.tween(this.node)
                    .call(function () {
                    // 落下盤面
                    _this.wholeReelClear();
                })
                    .to(dropTimeGap, {})
                    .call(function () {
                    // 更換新盤面
                    _this.currentResultArr = _this.oriResultArr_2;
                    // 從上落下新盤面
                    _this.wholeReelDrop();
                })
                    .to(2, {})
                    .call(function () {
                    // this.currentResultArr = this.dropResultArr;
                    // 演消除動畫
                    for (var i = 0; i < _this.dropResultArr_2.length; i++) {
                        for (var k = 0; k < _this.dropResultArr_2[i].length; k++) {
                            var id = _this.dropResultArr_2[i][k];
                            if (id == -1) {
                                _this.symbolEliminate("" + i + k, 3.5);
                            }
                            else {
                                continue;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                })
                    .to(1, {})
                    .call(function () {
                    // 播贏獎動畫
                    _this.bigWin.active = true;
                    _this.bigWin.getComponent(sp.Skeleton).animation = 'bigwin';
                    _this.winNum.active = true;
                    _this.numberCounterAnim(_this.winNum.getComponent(cc.Label), 1000, 500);
                })
                    .to(3, {})
                    .call(function () {
                    _this.bigWin.active = false;
                    _this.clearNumberCounterInterval();
                    _this.winNum.active = false;
                    // 落下補位
                    _this.sortSymbolRow();
                    _this.currentResultArr = _this.addNewResultArr_2;
                })
                    .to(0.5, {})
                    .call(function () {
                    for (var i = 0; i < _this.afterMoveResultArr_2.length; i++) {
                        for (var k = 0; k < _this.afterMoveResultArr_2[i].length; k++) {
                            if (_this.afterMoveResultArr_2[i][k] == -1) {
                                var node = _this.reel.getChildByName("" + i + k);
                                node.destroyAllChildren();
                                var prefab = _this.spawnOneSymbol(_this.currentResultArr[i][k]);
                                node.addChild(prefab);
                            }
                            else {
                                continue;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                })
                    .to(0.5, {})
                    .call(function () {
                    _this.afterSymbolDrop();
                })
                    .to(1, {})
                    .call(function () {
                    _this.btnSpin.interactable = true;
                })
                    .start();
                break;
            // ---------------------------------------------------------------------------------------------
            case 3: // free game 展示
                cc.tween(this.node)
                    .call(function () {
                    // 落下盤面
                    _this.wholeReelClear();
                })
                    .to(dropTimeGap, {})
                    .call(function () {
                    // 更換新盤面
                    _this.currentResultArr = _this.oriResultArr_3;
                    // 從上落下新盤面
                    _this.wholeReelDrop();
                })
                    .to(2, {})
                    .call(function () {
                    // this.currentResultArr = this.dropResultArr;
                    // 演消除動畫
                    for (var i = 0; i < _this.dropResultArr_3.length; i++) {
                        for (var k = 0; k < _this.dropResultArr_3[i].length; k++) {
                            var id = _this.dropResultArr_3[i][k];
                            if (id == -1) {
                                _this.symbolEliminate("" + i + k, 3);
                            }
                            else {
                                continue;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                })
                    .to(1, {})
                    .call(function () {
                    _this.freeTitle.active = true;
                    _this.freeNum.active = true;
                    cc.tween(_this.freeTitle)
                        .to(0.5, { scale: 2 }, { easing: 'elasticOut' })
                        .start();
                    cc.tween(_this.freeNum)
                        .to(0.5, { scale: 1 }, { easing: 'elasticOut' })
                        .start();
                })
                    .to(2, {})
                    .call(function () {
                    _this.freeTitle.active = false;
                    _this.freeNum.active = false;
                    // 演過場
                    _this.spFreeGameIntro.loop = false;
                    _this.spFreeGameIntro.animation = 'freegame_in';
                    setTimeout(function () {
                        _this.fgBg.active = true;
                        _this.fgReel.active = true;
                        _this.fgCount.node.active = true;
                        _this.fgCount.string = '5';
                    }, 1000);
                })
                    // ----------------------有中的補位
                    .to(1.6, {})
                    .call(function () {
                    // 落下補位
                    _this.sortSymbolRow();
                    _this.currentResultArr = _this.addNewResultArr_3;
                })
                    .to(0.5, {})
                    .call(function () {
                    for (var i = 0; i < _this.afterMoveResultArr_3.length; i++) {
                        for (var k = 0; k < _this.afterMoveResultArr_3[i].length; k++) {
                            if (_this.afterMoveResultArr_3[i][k] == -1) {
                                var node = _this.reel.getChildByName("" + i + k);
                                node.destroyAllChildren();
                                var prefab = _this.spawnOneSymbol(_this.currentResultArr[i][k]);
                                node.addChild(prefab);
                            }
                            else {
                                continue;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                })
                    .to(0.5, {})
                    .call(function () {
                    _this.afterSymbolDrop();
                })
                    // ----------------------------- 沒中的演繹 4
                    .to(3, {})
                    .call(function () {
                    // 落下盤面
                    _this.wholeReelClear();
                    _this.fgCount.string = '4';
                })
                    .to(dropTimeGap, {})
                    .call(function () {
                    // 更換新盤面
                    _this.currentResultArr = _this.oriResultArr_4;
                    //
                    _this.spawnAllSymbol();
                })
                    .to(0.5, {})
                    .call(function () {
                    // 從上落下新盤面
                    _this.wholeReelDrop();
                })
                    // ---------------------------- 沒中的5
                    .to(5, {})
                    .call(function () {
                    // 落下盤面
                    _this.wholeReelClear();
                    _this.fgCount.string = '3';
                })
                    .to(dropTimeGap, {})
                    .call(function () {
                    // 更換新盤面
                    _this.currentResultArr = _this.oriResultArr_5;
                    //
                    _this.spawnAllSymbol();
                })
                    .to(0.5, {})
                    .call(function () {
                    // 從上落下新盤面
                    _this.wholeReelDrop();
                })
                    // ----------------------- 沒中的6
                    .to(5, {})
                    .call(function () {
                    // 落下盤面
                    _this.wholeReelClear();
                    _this.fgCount.string = '2';
                })
                    .to(dropTimeGap, {})
                    .call(function () {
                    // 更換新盤面
                    _this.currentResultArr = _this.oriResultArr_6;
                    //
                    _this.spawnAllSymbol();
                })
                    .to(0.5, {})
                    .call(function () {
                    // 從上落下新盤面
                    _this.wholeReelDrop();
                })
                    // ----------------------- 有中的 7
                    .to(5, {})
                    .call(function () {
                    // 落下盤面
                    _this.wholeReelClear();
                    _this.fgCount.string = '1';
                })
                    .to(dropTimeGap, {})
                    .call(function () {
                    // 更換新盤面
                    _this.currentResultArr = _this.oriResultArr_7;
                    //
                    _this.spawnAllSymbol();
                })
                    .to(0.5, {})
                    .call(function () {
                    // 從上落下新盤面
                    _this.wholeReelDrop();
                })
                    .to(2, {})
                    .call(function () {
                    // this.currentResultArr = this.dropResultArr;
                    // 演消除動畫
                    for (var i = 0; i < _this.dropResultArr_7.length; i++) {
                        for (var k = 0; k < _this.dropResultArr_7[i].length; k++) {
                            var id = _this.dropResultArr_7[i][k];
                            if (id == -1) {
                                _this.symbolEliminate("" + i + k, 1.5);
                            }
                            else {
                                continue;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                })
                    .to(1.6, {})
                    .call(function () {
                    // 落下補位
                    _this.sortSymbolRow();
                    _this.currentResultArr = _this.addNewResultArr_7;
                })
                    .to(0.5, {})
                    .call(function () {
                    for (var i = 0; i < _this.afterMoveResultArr_7.length; i++) {
                        for (var k = 0; k < _this.afterMoveResultArr_7[i].length; k++) {
                            if (_this.afterMoveResultArr_7[i][k] == -1) {
                                var node = _this.reel.getChildByName("" + i + k);
                                node.destroyAllChildren();
                                var prefab = _this.spawnOneSymbol(_this.currentResultArr[i][k]);
                                node.addChild(prefab);
                            }
                            else {
                                continue;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                })
                    .to(0.5, {})
                    .call(function () {
                    _this.afterSymbolDrop();
                })
                    // ------------------------ 有中的 8
                    .to(3, {})
                    .call(function () {
                    // 落下盤面
                    _this.wholeReelClear();
                    _this.fgCount.string = '0';
                })
                    .to(dropTimeGap, {})
                    .call(function () {
                    // 更換新盤面
                    _this.currentResultArr = _this.oriResultArr_8;
                    //
                    _this.spawnAllSymbol();
                })
                    .to(0.5, {})
                    .call(function () {
                    // 從上落下新盤面
                    _this.wholeReelDrop();
                })
                    .to(2, {})
                    .call(function () {
                    // this.currentResultArr = this.dropResultArr;
                    // 演消除動畫
                    for (var i = 0; i < _this.dropResultArr_8.length; i++) {
                        for (var k = 0; k < _this.dropResultArr_8[i].length; k++) {
                            var id = _this.dropResultArr_8[i][k];
                            if (id == -1) {
                                _this.symbolEliminate("" + i + k, 1.5);
                            }
                            else {
                                continue;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                })
                    .to(1.6, {})
                    .call(function () {
                    // 落下補位
                    _this.sortSymbolRow();
                    _this.currentResultArr = _this.addNewResultArr_8;
                })
                    .to(0.5, {})
                    .call(function () {
                    for (var i = 0; i < _this.afterMoveResultArr_8.length; i++) {
                        for (var k = 0; k < _this.afterMoveResultArr_8[i].length; k++) {
                            if (_this.afterMoveResultArr_8[i][k] == -1) {
                                var node = _this.reel.getChildByName("" + i + k);
                                node.destroyAllChildren();
                                var prefab = _this.spawnOneSymbol(_this.currentResultArr[i][k]);
                                node.addChild(prefab);
                            }
                            else {
                                continue;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                })
                    .to(0.5, {})
                    .call(function () {
                    _this.afterSymbolDrop();
                })
                    // --------------------------- 播大獎動畫
                    .to(1, {})
                    .call(function () {
                    // 播贏獎動畫
                    _this.superWin.active = true;
                    _this.superWin.getComponent(sp.Skeleton).animation = 'animation2';
                    _this.winNum.active = true;
                    _this.numberCounterAnim(_this.winNum.getComponent(cc.Label), 10000, 500);
                })
                    .to(3, {})
                    // 退出free game
                    .call(function () {
                    _this.spFreeGameOutro.animation = 'freegame_out';
                    setTimeout(function () {
                        _this.fgBg.active = false;
                        _this.fgReel.active = false;
                    }, 1000);
                    _this.superWin.active = false;
                    _this.winNum.active = false;
                    _this.fgCount.node.active = false;
                    _this.DEMO_CLICK_COUNT = 0;
                })
                    .to(1, {})
                    .call(function () {
                    _this.btnSpin.interactable = true;
                })
                    // // .to(3, {})
                    // // .call(()=>{
                    // //     // console.log('@', '4');
                    // //     this.bigWin.active = false;
                    // //     this.clearNumberCounterInterval();
                    // //     this.winNum.active = false;
                    // //     // 落下補位
                    // //     this.sortSymbolRow();
                    // //     this.currentResultArr = this.addNewResultArr_2;
                    // // })                
                    .start();
                break;
            default:
                break;
        }
        ;
        setTimeout(function () {
            _this.isSpinning = false;
        }, 1000);
    };
    Demo.prototype.tweenSymbolClear = function (node, endY, delay) {
        cc.tween(node)
            .delay(delay)
            .to(0.1, { position: cc.v2(node.x, endY) }, { easing: 'quadOut' })
            .start();
    };
    Demo.prototype.tweenSymbolDrop = function (node, endY, delay) {
        cc.tween(node)
            .delay(delay)
            .to(0.5, { position: cc.v2(node.x, endY) }, { easing: 'elasticOut' })
            .start();
    };
    Demo.prototype.spawnOneSymbol = function (symbolId) {
        var symbol;
        var prefab = this.symbolIdMap[symbolId];
        symbol = cc.instantiate(prefab);
        return symbol;
    };
    Demo.prototype.spawnAllSymbol = function () {
        for (var i = 0; i < this.reel.children.length; i++) {
            var child = this.reel.children[i];
            if (child.children.length > 0) {
                child.destroyAllChildren();
            }
            ;
            var splitStr = child.name.split('');
            var index_1 = parseInt(splitStr[0], 10);
            var index_2 = parseInt(splitStr[1], 10);
            // console.log("@@@", index_1, index_2);
            var id = this.currentResultArr[index_1][index_2];
            var spawn = this.spawnOneSymbol(id);
            child.addChild(spawn);
        }
        ;
    };
    Demo.prototype.wholeReelDrop = function () {
        var _this = this;
        cc.tween(this.reel)
            .call(function () {
            _this.spawnAllSymbol();
        })
            .call(function () {
            _this.tweenSymbolDrop(_this.reel.getChildByName('00'), startAxisY[0], 0.25);
            _this.tweenSymbolDrop(_this.reel.getChildByName('01'), startAxisY[1], 0.2);
            _this.tweenSymbolDrop(_this.reel.getChildByName('02'), startAxisY[2], 0.15);
            _this.tweenSymbolDrop(_this.reel.getChildByName('03'), startAxisY[3], 0.1);
            _this.tweenSymbolDrop(_this.reel.getChildByName('04'), startAxisY[4], 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolDrop(_this.reel.getChildByName('10'), startAxisY[0], 0.25);
            _this.tweenSymbolDrop(_this.reel.getChildByName('11'), startAxisY[1], 0.2);
            _this.tweenSymbolDrop(_this.reel.getChildByName('12'), startAxisY[2], 0.15);
            _this.tweenSymbolDrop(_this.reel.getChildByName('13'), startAxisY[3], 0.1);
            _this.tweenSymbolDrop(_this.reel.getChildByName('14'), startAxisY[4], 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolDrop(_this.reel.getChildByName('20'), startAxisY[0], 0.25);
            _this.tweenSymbolDrop(_this.reel.getChildByName('21'), startAxisY[1], 0.2);
            _this.tweenSymbolDrop(_this.reel.getChildByName('22'), startAxisY[2], 0.15);
            _this.tweenSymbolDrop(_this.reel.getChildByName('23'), startAxisY[3], 0.1);
            _this.tweenSymbolDrop(_this.reel.getChildByName('24'), startAxisY[4], 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolDrop(_this.reel.getChildByName('30'), startAxisY[0], 0.25);
            _this.tweenSymbolDrop(_this.reel.getChildByName('31'), startAxisY[1], 0.2);
            _this.tweenSymbolDrop(_this.reel.getChildByName('32'), startAxisY[2], 0.15);
            _this.tweenSymbolDrop(_this.reel.getChildByName('33'), startAxisY[3], 0.1);
            _this.tweenSymbolDrop(_this.reel.getChildByName('34'), startAxisY[4], 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolDrop(_this.reel.getChildByName('40'), startAxisY[0], 0.25);
            _this.tweenSymbolDrop(_this.reel.getChildByName('41'), startAxisY[1], 0.2);
            _this.tweenSymbolDrop(_this.reel.getChildByName('42'), startAxisY[2], 0.15);
            _this.tweenSymbolDrop(_this.reel.getChildByName('43'), startAxisY[3], 0.1);
            _this.tweenSymbolDrop(_this.reel.getChildByName('44'), startAxisY[4], 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolDrop(_this.reel.getChildByName('50'), startAxisY[0], 0.25);
            _this.tweenSymbolDrop(_this.reel.getChildByName('51'), startAxisY[1], 0.2);
            _this.tweenSymbolDrop(_this.reel.getChildByName('52'), startAxisY[2], 0.15);
            _this.tweenSymbolDrop(_this.reel.getChildByName('53'), startAxisY[3], 0.1);
            _this.tweenSymbolDrop(_this.reel.getChildByName('54'), startAxisY[4], 0);
        })
            .start();
    };
    Demo.prototype.wholeReelClear = function () {
        var _this = this;
        cc.tween(this.reel)
            .call(function () {
            _this.tweenSymbolClear(_this.reel.getChildByName('00'), startAxisY[0] - moveRange, 0.25);
            _this.tweenSymbolClear(_this.reel.getChildByName('01'), startAxisY[1] - moveRange, 0.2);
            _this.tweenSymbolClear(_this.reel.getChildByName('02'), startAxisY[2] - moveRange, 0.15);
            _this.tweenSymbolClear(_this.reel.getChildByName('03'), startAxisY[3] - moveRange, 0.1);
            _this.tweenSymbolClear(_this.reel.getChildByName('04'), startAxisY[4] - moveRange, 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolClear(_this.reel.getChildByName('10'), startAxisY[0] - moveRange, 0.25);
            _this.tweenSymbolClear(_this.reel.getChildByName('11'), startAxisY[1] - moveRange, 0.2);
            _this.tweenSymbolClear(_this.reel.getChildByName('12'), startAxisY[2] - moveRange, 0.15);
            _this.tweenSymbolClear(_this.reel.getChildByName('13'), startAxisY[3] - moveRange, 0.1);
            _this.tweenSymbolClear(_this.reel.getChildByName('14'), startAxisY[4] - moveRange, 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolClear(_this.reel.getChildByName('20'), startAxisY[0] - moveRange, 0.25);
            _this.tweenSymbolClear(_this.reel.getChildByName('21'), startAxisY[1] - moveRange, 0.2);
            _this.tweenSymbolClear(_this.reel.getChildByName('22'), startAxisY[2] - moveRange, 0.15);
            _this.tweenSymbolClear(_this.reel.getChildByName('23'), startAxisY[3] - moveRange, 0.1);
            _this.tweenSymbolClear(_this.reel.getChildByName('24'), startAxisY[4] - moveRange, 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolClear(_this.reel.getChildByName('30'), startAxisY[0] - moveRange, 0.25);
            _this.tweenSymbolClear(_this.reel.getChildByName('31'), startAxisY[1] - moveRange, 0.2);
            _this.tweenSymbolClear(_this.reel.getChildByName('32'), startAxisY[2] - moveRange, 0.15);
            _this.tweenSymbolClear(_this.reel.getChildByName('33'), startAxisY[3] - moveRange, 0.1);
            _this.tweenSymbolClear(_this.reel.getChildByName('34'), startAxisY[4] - moveRange, 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolClear(_this.reel.getChildByName('40'), startAxisY[0] - moveRange, 0.25);
            _this.tweenSymbolClear(_this.reel.getChildByName('41'), startAxisY[1] - moveRange, 0.2);
            _this.tweenSymbolClear(_this.reel.getChildByName('42'), startAxisY[2] - moveRange, 0.15);
            _this.tweenSymbolClear(_this.reel.getChildByName('43'), startAxisY[3] - moveRange, 0.1);
            _this.tweenSymbolClear(_this.reel.getChildByName('44'), startAxisY[4] - moveRange, 0);
        })
            .to(reelTimeGap, {})
            .call(function () {
            _this.tweenSymbolClear(_this.reel.getChildByName('50'), startAxisY[0] - moveRange, 0.25);
            _this.tweenSymbolClear(_this.reel.getChildByName('51'), startAxisY[1] - moveRange, 0.2);
            _this.tweenSymbolClear(_this.reel.getChildByName('52'), startAxisY[2] - moveRange, 0.15);
            _this.tweenSymbolClear(_this.reel.getChildByName('53'), startAxisY[3] - moveRange, 0.1);
            _this.tweenSymbolClear(_this.reel.getChildByName('54'), startAxisY[4] - moveRange, 0);
        })
            .to(dropTimeGap - 1, {})
            .call(function () {
            _this.reel.getChildByName('00').y = startAxisY[0] + moveRange;
            _this.reel.getChildByName('01').y = startAxisY[1] + moveRange;
            _this.reel.getChildByName('02').y = startAxisY[2] + moveRange;
            _this.reel.getChildByName('03').y = startAxisY[3] + moveRange;
            _this.reel.getChildByName('04').y = startAxisY[4] + moveRange;
            _this.reel.getChildByName('10').y = startAxisY[0] + moveRange;
            _this.reel.getChildByName('11').y = startAxisY[1] + moveRange;
            _this.reel.getChildByName('12').y = startAxisY[2] + moveRange;
            _this.reel.getChildByName('13').y = startAxisY[3] + moveRange;
            _this.reel.getChildByName('14').y = startAxisY[4] + moveRange;
            _this.reel.getChildByName('20').y = startAxisY[0] + moveRange;
            _this.reel.getChildByName('21').y = startAxisY[1] + moveRange;
            _this.reel.getChildByName('22').y = startAxisY[2] + moveRange;
            _this.reel.getChildByName('23').y = startAxisY[3] + moveRange;
            _this.reel.getChildByName('24').y = startAxisY[4] + moveRange;
            _this.reel.getChildByName('30').y = startAxisY[0] + moveRange;
            _this.reel.getChildByName('31').y = startAxisY[1] + moveRange;
            _this.reel.getChildByName('32').y = startAxisY[2] + moveRange;
            _this.reel.getChildByName('33').y = startAxisY[3] + moveRange;
            _this.reel.getChildByName('34').y = startAxisY[4] + moveRange;
            _this.reel.getChildByName('40').y = startAxisY[0] + moveRange;
            _this.reel.getChildByName('41').y = startAxisY[1] + moveRange;
            _this.reel.getChildByName('42').y = startAxisY[2] + moveRange;
            _this.reel.getChildByName('43').y = startAxisY[3] + moveRange;
            _this.reel.getChildByName('44').y = startAxisY[4] + moveRange;
            _this.reel.getChildByName('50').y = startAxisY[0] + moveRange;
            _this.reel.getChildByName('51').y = startAxisY[1] + moveRange;
            _this.reel.getChildByName('52').y = startAxisY[2] + moveRange;
            _this.reel.getChildByName('53').y = startAxisY[3] + moveRange;
            _this.reel.getChildByName('54').y = startAxisY[4] + moveRange;
            for (var i = 0; i < _this.reel.children.length; i++) {
                _this.reel.children[i].destroyAllChildren();
            }
            ;
        })
            .start();
    };
    Demo.prototype.symbolEliminate = function (symbolId, duration) {
        var node = this.reel.getChildByName(symbolId);
        var symbol = node.children[0];
        var symbolName = symbol.name;
        var anim = this.symbolAnimMap["" + symbolName];
        var spSymbol = node.children[0].getChildByName('spine').getComponent(sp.Skeleton);
        var spEliminate = node.children[0].getChildByName('eliminate').getComponent(sp.Skeleton);
        // 演消除動畫
        spSymbol.animation = anim;
        spEliminate.animation = 'line';
        // 移動symnbol至頂端位置
        var dur = duration ? duration : 1.5;
        setTimeout(function () {
            node.y = node.y + (134 * 5) + 20;
        }, dur * 1000);
    };
    Demo.prototype.sortSymbolRow = function () {
        // console.log('%%% 1', this.row_0);
        this.row_0.sort(function (a, b) {
            return (b.y + 300) - (a.y + 300);
        });
        // console.log('%%% 2', this.row_0);
        for (var i = 0; i < this.row_0.length; i++) {
            this.row_0[i].name = "0" + i;
        }
        ;
        // console.log('%%% 4', this.row_0);
        this.row_1.sort(function (a, b) {
            return b.y - a.y;
        });
        for (var i = 0; i < this.row_1.length; i++) {
            this.row_1[i].name = "1" + i;
        }
        ;
        this.row_2.sort(function (a, b) {
            return b.y - a.y;
        });
        for (var i = 0; i < this.row_2.length; i++) {
            this.row_2[i].name = "2" + i;
        }
        ;
        this.row_3.sort(function (a, b) {
            return b.y - a.y;
        });
        for (var i = 0; i < this.row_3.length; i++) {
            this.row_3[i].name = "3" + i;
        }
        ;
        this.row_4.sort(function (a, b) {
            return b.y - a.y;
        });
        for (var i = 0; i < this.row_4.length; i++) {
            this.row_4[i].name = "4" + i;
        }
        ;
        this.row_5.sort(function (a, b) {
            return b.y - a.y;
        });
        for (var i = 0; i < this.row_5.length; i++) {
            this.row_5[i].name = "5" + i;
        }
        ;
        // console.log('$', this.row_0);
        // console.log('$', this.row_1);
        // console.log('$', this.row_2);
        // console.log('$', this.row_3);
        // console.log('$', this.row_4);
        // console.log('$', this.row_5);
    };
    Demo.prototype.afterSymbolDrop = function () {
        for (var i = 0; i < this.row_0.length; i++) {
            if (this.row_0[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_0[i], startAxisY[i], 0);
            }
            ;
        }
        ;
        for (var i = 0; i < this.row_1.length; i++) {
            if (this.row_1[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_1[i], startAxisY[i], 0);
            }
            ;
        }
        ;
        for (var i = 0; i < this.row_2.length; i++) {
            if (this.row_2[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_2[i], startAxisY[i], 0);
            }
            ;
        }
        ;
        for (var i = 0; i < this.row_3.length; i++) {
            if (this.row_3[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_3[i], startAxisY[i], 0);
            }
            ;
        }
        ;
        for (var i = 0; i < this.row_4.length; i++) {
            if (this.row_4[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_4[i], startAxisY[i], 0);
            }
            ;
        }
        ;
        for (var i = 0; i < this.row_5.length; i++) {
            if (this.row_5[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_5[i], startAxisY[i], 0);
            }
            ;
        }
        ;
    };
    /** 數字跳動方法 || totalTime可抓500左右 */
    Demo.prototype.numberCounterAnim = function (target, goal, totalTime) {
        var _this = this;
        if (goal == 0) {
            return;
        }
        ;
        this.clearNumberCounterInterval();
        target.string = "" + 0;
        // let num = parseInt(target.string, 10);
        var num = parseFloat(target.string);
        if (goal >= 0) {
            var nFrequency = totalTime / goal; // 跑到目標需要n個frequency
            var frequency = (nFrequency < 10) ? 10 : nFrequency; // setInterval最小只能跑10毫秒 也就是n最小為10
            var minTime = totalTime / 10; // setInterval跑完所需最短時間
            var gap_1 = (nFrequency < 10) ? (Math.floor(goal / minTime)) : 1; // +的數字間隔
            //
            this.animInterval = setInterval(function () {
                if (num < goal) {
                    num += gap_1;
                    target.string = "+" + num;
                }
                else if (num > goal) {
                    target.string = "+" + goal;
                    _this.clearNumberCounterInterval();
                }
                ;
            }, frequency);
        }
        else if (goal < 0) {
            var nFrequency = totalTime / -goal; // 跑到目標需要n個frequency
            var frequency = (nFrequency < 10) ? 10 : nFrequency; // setInterval最小只能跑10毫秒 也就是n最小為10
            var minTime = totalTime / 10; // setInterval跑完所需最短時間
            var gap_2 = (nFrequency < 10) ? (Math.floor(-goal / minTime)) : 1; // +的數字間隔
            //
            this.animInterval = setInterval(function () {
                if (num > goal) {
                    num -= gap_2;
                    target.string = "" + num;
                }
                else if (num < goal) {
                    target.string = "" + goal;
                    _this.clearNumberCounterInterval();
                }
                ;
            }, frequency);
        }
        ;
    };
    /** 強制清除數字跳動interval */
    Demo.prototype.clearNumberCounterInterval = function () {
        if (this.animInterval) {
            clearInterval(this.animInterval);
            this.animInterval = null;
        }
        ;
    };
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "nodeSpin", void 0);
    __decorate([
        property(cc.Button)
    ], Demo.prototype, "btnSpin", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Demo.prototype, "spSpin", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Demo.prototype, "spSeth", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Demo.prototype, "spGoddes", void 0);
    __decorate([
        property(cc.Label)
    ], Demo.prototype, "multiplyNum", void 0);
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "bigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "superWin", void 0);
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "winNum", void 0);
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "freeTitle", void 0);
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "freeNum", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Demo.prototype, "spFreeGameIntro", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Demo.prototype, "spFreeGameOutro", void 0);
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "reel", void 0);
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "fgBg", void 0);
    __decorate([
        property(cc.Node)
    ], Demo.prototype, "fgReel", void 0);
    __decorate([
        property(cc.Label)
    ], Demo.prototype, "fgCount", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "SC", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "H1", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "H2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "H3", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "H4", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "N1", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "N2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "N3", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "N4", void 0);
    __decorate([
        property(cc.Prefab)
    ], Demo.prototype, "N5", void 0);
    Demo = __decorate([
        ccclass
    ], Demo);
    return Demo;
}(cc.Component));
exports.default = Demo;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBSXRCLElBQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDaEIsSUFBTSxTQUFTLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFN0IsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUd4QjtJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTZvQ0M7UUExb0NHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQWdCLElBQUksQ0FBQztRQUczQixZQUFNLEdBQWdCLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBRXBDLHFCQUFlLEdBQWdCLElBQUksQ0FBQztRQUdwQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFVBQUksR0FB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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixTQUFTO1FBQ1Qsb0JBQWMsR0FBRztZQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQixDQUFDO1FBRUYscUJBQWUsR0FBRztZQUNkLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQixDQUFDO1FBRUYsMEJBQW9CLEdBQUc7WUFDbkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25CLENBQUM7UUFFRix1QkFBaUIsR0FBRztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEIsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixvQkFBYyxHQUFHO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixxQkFBZSxHQUFHO1lBQ2QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkIsQ0FBQztRQUVGLDBCQUFvQixHQUFHO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25CLENBQUM7UUFFRix1QkFBaUIsR0FBRztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEIsQ0FBQztRQUVGLFdBQVc7UUFDWCxvQkFBYyxHQUFHO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixvQkFBYyxHQUFHO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixvQkFBYyxHQUFHO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixRQUFRO1FBQ1Isb0JBQWMsR0FBRztZQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQixDQUFDO1FBRUYscUJBQWUsR0FBRztZQUNkLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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QUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQixDQUFDO1FBRUYsdUJBQWlCLEdBQUc7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFdEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsbUJBQWEsR0FBRztZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUE7UUFFRCxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxrQkFBWSxHQUFHLElBQUksQ0FBQzs7SUF3MUJ4QixDQUFDO0lBcjFCRyxlQUFlO0lBRWYsb0JBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixJQUFJLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDOUMsQ0FBQztRQUVGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUVGLFVBQVU7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFD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QUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUFBLGlCQTRGQztRQTNGRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3ZCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDOUM7WUFBQSxDQUFDO1FBQ04sQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLFFBQWlCO1FBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksTUFBTSxHQUFHLElB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QUFFLENBQUMsTUFBTSxDQUFDO29DQUNDO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQ0FDQztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29DQUNDO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQ0FDQztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29DQUNDO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQ0FDQztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29DQUNDO0lBL0RKLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2b0N4QjtJQUFELFdBQUM7Q0E3b0NELEFBNm9DQyxDQTdvQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBNm9DN0M7a0JBN29Db0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmNvbnN0IEdBUF9IRUlHSFQgPSAxMzQ7XG5jb25zdCBHQVBfV0lEVEggPSAxNzA7XG5cblxuXG5jb25zdCBzdGFydEF4aXNZID0gWzI2OCwgMTM0LCAwLCAtMTM0LCAtMjY4XTtcbmNvbnN0IGdhcCA9IDEzNDtcbmNvbnN0IG1vdmVSYW5nZSA9IDEzNCo1ICsgMjA7XG5cbmNvbnN0IGRyb3BUaW1lR2FwID0gMjtcbmNvbnN0IHJlZWxUaW1lR2FwID0gMC4yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtbyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlU3BpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5TcGluOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBzcFNwaW46IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBzcFNldGg6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc3BHb2RkZXM6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBtdWx0aXBseU51bTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmlnV2luOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdXBlcldpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd2luTnVtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZyZWVUaXRsZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZnJlZU51bTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc3BGcmVlR2FtZUludHJvOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNwRnJlZUdhbWVPdXRybzogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVlbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmZ0JnOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmZ1JlZWw6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBmZ0NvdW50OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIFNDOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgSDE6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBIMjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIEgzOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgSDQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBOMTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIE4yOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgTjM6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBONDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIE41OiBjYy5QcmVmYWIgPSBudWxsO1xuXG5cbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuXG4gICAgREVNT19DTElDS19DT1VOVCA9IDA7XG4gICAgREVNT19DTElDS19MSU1JVCA9IDM7XG5cbiAgICAvLyDnrKzkuIDovYkg5pmu6YCaXG4gICAgb3JpUmVzdWx0QXJyXzEgPSBbXG4gICAgICAgIFs0LCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbOSwgNywgMSwgMiwgM10sXG4gICAgICAgIFs5LCA0LCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDcsIDMsIDQsIDVdLFxuICAgICAgICBbNywgOCwgOSwgNCwgMV1cbiAgICBdO1xuXG4gICAgZHJvcFJlc3VsdEFycl8xID0gW1xuICAgICAgICBbLTEsIDEsIDIsIDMsIC0xXSxcbiAgICAgICAgWzIsIDMsIC0xLCA1LCA2XSxcbiAgICAgICAgWzksIC0xLCAxLCAyLCAzXSxcbiAgICAgICAgWzksIC0xLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIC0xLCAzLCAtMSwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCAtMSwgMV1cbiAgICBdO1xuXG4gICAgYWZ0ZXJNb3ZlUmVzdWx0QXJyXzEgPSBbXG4gICAgICAgIFstMSwgLTEsIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDIsIDMsIDUsIDZdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIC0xLCAxLCAzLCA1XSxcbiAgICAgICAgWy0xLCA3LCA4LCA5LCAxXVxuICAgIF07XG5cbiAgICBhZGROZXdSZXN1bHRBcnJfMSA9IFtcbiAgICAgICAgWzQsIDEsIDIsIDMsIDRdLFxuICAgICAgICBbMiwgMywgNCwgNSwgNl0sXG4gICAgICAgIFs5LCA0LCAxLCAyLCAzXSxcbiAgICAgICAgWzksIDQsIDEsIDIsIDNdLFxuICAgICAgICBbMSwgNCwgMywgNCwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCA0LCAxXVxuICAgIF07XG5cbiAgICAvLyDnrKzkuozovYkg6LSP542OXG4gICAgb3JpUmVzdWx0QXJyXzIgPSBbXG4gICAgICAgIFs0LCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbOSwgNCwgMSwgMiwgM10sXG4gICAgICAgIFs5LCA0LCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDQsIDMsIDQsIDVdLFxuICAgICAgICBbNywgOCwgOSwgNCwgMV1cbiAgICBdO1xuXG4gICAgZHJvcFJlc3VsdEFycl8yID0gW1xuICAgICAgICBbLTEsIDEsIDIsIDMsIC0xXSxcbiAgICAgICAgWzIsIDMsIC0xLCA1LCA2XSxcbiAgICAgICAgWzksIC0xLCAxLCAyLCAzXSxcbiAgICAgICAgWzksIC0xLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIC0xLCAzLCAtMSwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCAtMSwgMV1cbiAgICBdO1xuXG4gICAgYWZ0ZXJNb3ZlUmVzdWx0QXJyXzIgPSBbXG4gICAgICAgIFstMSwgLTEsIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDIsIDMsIDUsIDZdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIC0xLCAxLCAzLCA1XSxcbiAgICAgICAgWy0xLCA3LCA4LCA5LCAxXVxuICAgIF07XG5cbiAgICBhZGROZXdSZXN1bHRBcnJfMiA9IFtcbiAgICAgICAgWzQsIDAsIDEsIDIsIDNdLFxuICAgICAgICBbNSwgMiwgMywgNSwgNl0sXG4gICAgICAgIFs3LCA5LCAxLCAyLCAzXSxcbiAgICAgICAgWzQsIDksIDEsIDIsIDNdLFxuICAgICAgICBbNywgMCwgMSwgMywgNV0sXG4gICAgICAgIFsyLCA3LCA4LCA5LCAxXVxuICAgIF07XG5cbiAgICAvLyDnrKzkuInovYkgZnJlZSBnYW1lXG4gICAgb3JpUmVzdWx0QXJyXzMgPSBbXG4gICAgICAgIFswLCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbOSwgMCwgMSwgMiwgM10sXG4gICAgICAgIFs5LCAwLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDIsIDMsIDQsIDVdLFxuICAgICAgICBbNywgOCwgOSwgMCwgMV1cbiAgICBdO1xuXG4gICAgZHJvcFJlc3VsdEFycl8zID0gW1xuICAgICAgICBbLTEsIDEsIDIsIDMsIDRdLFxuICAgICAgICBbMiwgMywgNCwgNSwgNl0sXG4gICAgICAgIFs5LCAtMSwgMSwgMiwgM10sXG4gICAgICAgIFs5LCAtMSwgMSwgMiwgM10sXG4gICAgICAgIFsxLCAyLCAzLCA0LCA1XSxcbiAgICAgICAgWzcsIDgsIDksIC0xLCAxXVxuICAgIF07XG5cbiAgICBhZnRlck1vdmVSZXN1bHRBcnJfMyA9IFtcbiAgICAgICAgWy0xLCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbMSwgMiwgMywgNCwgNV0sXG4gICAgICAgIFstMSwgNywgOCwgOSwgMV1cbiAgICBdO1xuXG4gICAgYWRkTmV3UmVzdWx0QXJyXzMgPSBbXG4gICAgICAgIFsxLCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbMSwgOSwgMSwgMiwgM10sXG4gICAgICAgIFszLCA5LCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDIsIDMsIDQsIDVdLFxuICAgICAgICBbMiwgNywgOCwgOSwgMV1cbiAgICBdO1xuXG4gICAgLy8gRkcg5YmN5LiJ6L2J5rKS6LSPXG4gICAgb3JpUmVzdWx0QXJyXzQgPSBbXG4gICAgICAgIFsxLCAxLCAyLCAzLCAyXSxcbiAgICAgICAgWzIsIDcsIDQsIDMsIDZdLFxuICAgICAgICBbMSwgOSwgMSwgMiwgM10sXG4gICAgICAgIFszLCAzLCA3LCAyLCA2XSxcbiAgICAgICAgWzksIDIsIDMsIDcsIDVdLFxuICAgICAgICBbMiwgNywgMiwgOSwgMV1cbiAgICBdO1xuXG4gICAgb3JpUmVzdWx0QXJyXzUgPSBbXG4gICAgICAgIFsxLCAxLCA4LCAzLCA4XSxcbiAgICAgICAgWzQsIDYsIDQsIDcsIDZdLFxuICAgICAgICBbNSwgNiwgMSwgMiwgM10sXG4gICAgICAgIFszLCA2LCAxLCAyLCAzXSxcbiAgICAgICAgWzUsIDIsIDMsIDcsIDVdLFxuICAgICAgICBbMiwgNywgOCwgOSwgOF1cbiAgICBdO1xuXG4gICAgb3JpUmVzdWx0QXJyXzYgPSBbXG4gICAgICAgIFs1LCAyLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDYsIDZdLFxuICAgICAgICBbMSwgOCwgOCwgMiwgM10sXG4gICAgICAgIFszLCA5LCAxLCA3LCA3XSxcbiAgICAgICAgWzUsIDUsIDIsIDQsIDVdLFxuICAgICAgICBbMiwgNywgOCwgOSwgMV1cbiAgICBdO1xuXG4gICAgLy8g5b6M5LqM6L2J6LSP542OXG4gICAgb3JpUmVzdWx0QXJyXzcgPSBbXG4gICAgICAgIFs0LCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDEsIDQsIDEsIDZdLFxuICAgICAgICBbOSwgNywgMSwgMiwgM10sXG4gICAgICAgIFs5LCAyLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDQsIDEsIDQsIDVdLFxuICAgICAgICBbNywgOCwgOSwgNCwgMV1cbiAgICBdO1xuXG4gICAgZHJvcFJlc3VsdEFycl83ID0gW1xuICAgICAgICBbNCwgLTEsIDIsIDMsIDRdLFxuICAgICAgICBbMiwgLTEsIDQsIC0xLCA2XSxcbiAgICAgICAgWzksIDcsIC0xLCAyLCAzXSxcbiAgICAgICAgWzksIDIsIC0xLCAyLCAzXSxcbiAgICAgICAgWy0xLCA0LCAtMSwgNCwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCA0LCAtMV1cbiAgICBdO1xuXG4gICAgYWZ0ZXJNb3ZlUmVzdWx0QXJyXzcgPSBbXG4gICAgICAgIFstMSwgNCwgMiwgMywgNF0sXG4gICAgICAgIFstMSwgLTEsIDIsIDQsIDZdLFxuICAgICAgICBbLTEsIDksIDcsIDIsIDNdLFxuICAgICAgICBbLTEsIDksIDIsIDIsIDNdLFxuICAgICAgICBbLTEsIC0xLCA0LCA0LCA1XSxcbiAgICAgICAgWy0xLCA3LCA4LCA5LCA0XVxuICAgIF07XG5cbiAgICBhZGROZXdSZXN1bHRBcnJfNyA9IFtcbiAgICAgICAgWzcsIDQsIDIsIDMsIDRdLFxuICAgICAgICBbNiwgMSwgMiwgNCwgNl0sXG4gICAgICAgIFs5LCA5LCA3LCAyLCAzXSxcbiAgICAgICAgWzcsIDksIDIsIDIsIDNdLFxuICAgICAgICBbMSwgMSwgNCwgNCwgNV0sXG4gICAgICAgIFs4LCA3LCA4LCA5LCA0XVxuICAgIF07XG5cbiAgICBvcmlSZXN1bHRBcnJfOCA9IFtcbiAgICAgICAgWzQsIDEsIDIsIDMsIDRdLFxuICAgICAgICBbMiwgMywgNCwgNSwgNl0sXG4gICAgICAgIFs5LCAyLCAyLCAyLCAzXSxcbiAgICAgICAgWzksIDQsIDEsIDIsIDNdLFxuICAgICAgICBbMSwgMiwgMywgMiwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCA0LCAxXVxuICAgIF07XG5cbiAgICBkcm9wUmVzdWx0QXJyXzggPSBbXG4gICAgICAgIFs0LCAxLCAtMSwgMywgNF0sXG4gICAgICAgIFstMSwgMywgNCwgNSwgNl0sXG4gICAgICAgIFs5LCAtMSwgLTEsIC0xLCAzXSxcbiAgICAgICAgWzksIDQsIDEsIC0xLCAzXSxcbiAgICAgICAgWzEsIC0xLCAzLCAtMSwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCA0LCAxXVxuICAgIF07XG5cbiAgICBhZnRlck1vdmVSZXN1bHRBcnJfOCA9IFtcbiAgICAgICAgWy0xLCA0LCAxLCAzLCA0XSxcbiAgICAgICAgWy0xLCAzLCA0LCA1LCA2XSxcbiAgICAgICAgWy0xLCAtMSwgLTEsIDksIDNdLFxuICAgICAgICBbLTEsIDksIDQsIDEsIDNdLFxuICAgICAgICBbLTEsIC0xLCAxLCAzLCA1XSxcbiAgICAgICAgWzcsIDgsIDksIDQsIDFdXG4gICAgXTtcblxuICAgIGFkZE5ld1Jlc3VsdEFycl84ID0gW1xuICAgICAgICBbMiwgNCwgMSwgMywgNF0sXG4gICAgICAgIFsyLCAzLCA0LCA1LCA2XSxcbiAgICAgICAgWzEsIDEsIDQsIDksIDNdLFxuICAgICAgICBbMiwgOSwgNCwgMSwgM10sXG4gICAgICAgIFsyLCAzLCAxLCAzLCA1XSxcbiAgICAgICAgWzcsIDgsIDksIDQsIDFdXG4gICAgXTtcblxuICAgIGN1cnJlbnRSZXN1bHRBcnIgPSBbXTtcblxuICAgIHN5bWJvbElkTWFwID0gW107XG5cbiAgICBzeW1ib2xBbmltTWFwID0ge1xuICAgICAgICAnSDEnOiAnUzEnLFxuICAgICAgICAnSDInOiAnUzInLFxuICAgICAgICAnSDMnOiAnUzMnLFxuICAgICAgICAnSDQnOiAnUzQnLFxuICAgICAgICAnTjEnOiAnQScsXG4gICAgICAgICdOMic6ICdLJyxcbiAgICAgICAgJ04zJzogJ1EnLFxuICAgICAgICAnTjQnOiAnSicsXG4gICAgICAgICdONSc6ICcxMCcsXG4gICAgICAgICdTQyc6ICdTY2F0dGVyJ1xuICAgIH1cblxuICAgIGlzU3Bpbm5pbmcgPSBmYWxzZTtcblxuICAgIHJvd18wID0gW107XG4gICAgcm93XzEgPSBbXTtcbiAgICByb3dfMiA9IFtdO1xuICAgIHJvd18zID0gW107XG4gICAgcm93XzQgPSBbXTtcbiAgICByb3dfNSA9IFtdO1xuXG4gICAgYW5pbUludGVydmFsID0gbnVsbDtcblxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICAgICAgdGhpcy5zeW1ib2xJZE1hcCA9IFtcbiAgICAgICAgICAgIHRoaXMuU0MsIFxuICAgICAgICAgICAgdGhpcy5IMSwgdGhpcy5IMiwgdGhpcy5IMywgdGhpcy5INCwgXG4gICAgICAgICAgICB0aGlzLk4xLCB0aGlzLk4yLCB0aGlzLk4zLCB0aGlzLk40LCB0aGlzLk41XG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yb3dfMC5wdXNoKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZShgMCR7aX1gKSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucm93XzEucHVzaCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYDEke2l9YCkpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8NTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd18yLnB1c2godGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKGAyJHtpfWApKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yb3dfMy5wdXNoKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZShgMyR7aX1gKSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucm93XzQucHVzaCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYDQke2l9YCkpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8NTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd181LnB1c2godGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKGA1JHtpfWApKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDliJ3lp4vljJbkurrnianli5XmhYtcbiAgICAgICAgdGhpcy5zcFNldGgubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3BTZXRoLmFuaW1hdGlvbiA9ICdiZ19pZGxlJztcbiAgICAgICAgdGhpcy5zcEdvZGRlcy5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcEdvZGRlcy5hbmltYXRpb24gPSAnYmdfaWRsZSc7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyWc3ltYm9sXG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdEFyciA9IHRoaXMub3JpUmVzdWx0QXJyXzM7XG4gICAgICAgIHRoaXMuc3Bhd25BbGxTeW1ib2woKTtcblxuICAgICAgICAvLyDmjInpiJXkuovku7bnm6Pogb1cbiAgICAgICAgdGhpcy5ub2RlU3Bpbi5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tCdG5TcGluLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTcGlubmluZyAmJiB0aGlzLnNwU3Bpbi5hbmltYXRpb24gIT09ICdpZGxlJykge1xuICAgICAgICAgICAgdGhpcy5zcFNwaW4ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwU3Bpbi5hbmltYXRpb24gPSAnaWRsZSc7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrQnRuU3BpbigpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmlzU3Bpbm5pbmcgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zcFNwaW4ubG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwU3Bpbi5hbmltYXRpb24gPSAnc3Bpbic7XG5cbiAgICAgICAgdGhpcy5ERU1PX0NMSUNLX0NPVU5UICs9IDE7XG4gICAgICAgIHRoaXMuREVNT19DTElDS19DT1VOVCA9IHRoaXMuREVNT19DTElDS19DT1VOVCA+IHRoaXMuREVNT19DTElDS19MSU1JVCA/IDEgOiB0aGlzLkRFTU9fQ0xJQ0tfQ09VTlQ7XG5cbiAgICAgICAgLy8g6Y6W5a6ac3BpbuaMiemIlVxuICAgICAgICB0aGlzLmJ0blNwaW4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zcFNwaW4uYW5pbWF0aW9uID0gJ2Rpc2FibGVkJztcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0NPVU5UOiAnLCB0aGlzLkRFTU9fQ0xJQ0tfQ09VTlQpO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5ERU1PX0NMSUNLX0NPVU5UKSB7XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgY2FzZSAxOiAvLyDmma7pgJrmu77ovKrlsZXnpLpcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsQ2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhkcm9wVGltZUdhcCx7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfMTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5TcGluLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgICAgICAgICAgY2FzZSAyOiAvLyDln7rnpI7otI/pjKLlsZXnpLpcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsQ2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhkcm9wVGltZUdhcCx7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfMjtcbiAgICAgICAgICAgICAgICAgICAgLy8g5b6e5LiK6JC95LiL5paw55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsRHJvcCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDIsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFJlc3VsdEFyciA9IHRoaXMuZHJvcFJlc3VsdEFycjtcbiAgICAgICAgICAgICAgICAgICAgLy8g5ryU5raI6Zmk5YuV55WrXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmRyb3BSZXN1bHRBcnJfMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaz0wOyBrPHRoaXMuZHJvcFJlc3VsdEFycl8yW2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5kcm9wUmVzdWx0QXJyXzJbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sRWxpbWluYXRlKGAke2l9JHtrfWAsIDMuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g5pKt6LSP542O5YuV55WrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmlnV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmlnV2luLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuYW5pbWF0aW9uID0gJ2JpZ3dpbic7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5OdW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXJDb3VudGVyQW5pbSh0aGlzLndpbk51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCAxMDAwLCA1MDApO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMywge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJOdW1iZXJDb3VudGVySW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5OdW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIOiQveS4i+ijnOS9jVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRTeW1ib2xSb3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5hZGROZXdSZXN1bHRBcnJfMjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl8yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGs8dGhpcy5hZnRlck1vdmVSZXN1bHRBcnJfMltpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl8yW2ldW2tdID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKGAke2l9JHtrfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gdGhpcy5zcGF3bk9uZVN5bWJvbCh0aGlzLmN1cnJlbnRSZXN1bHRBcnJbaV1ba10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFkZENoaWxkKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTeW1ib2xEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5TcGluLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGNhc2UgMzogLy8gZnJlZSBnYW1lIOWxleekulxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDokL3kuIvnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxDbGVhcigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKGRyb3BUaW1lR2FwLHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOabtOaPm+aWsOebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLm9yaVJlc3VsdEFycl8zO1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygyLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmRyb3BSZXN1bHRBcnI7XG4gICAgICAgICAgICAgICAgICAgIC8vIOa8lOa2iOmZpOWLleeVq1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5kcm9wUmVzdWx0QXJyXzMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmRyb3BSZXN1bHRBcnJfM1tpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZHJvcFJlc3VsdEFycl8zW2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbEVsaW1pbmF0ZShgJHtpfSR7a31gLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygxLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVUaXRsZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVOdW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZyZWVUaXRsZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwge3NjYWxlOiAyfSwge2Vhc2luZzogJ2VsYXN0aWNPdXQnfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5mcmVlTnVtKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiAnZWxhc3RpY091dCd9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygyLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVUaXRsZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmVlTnVtLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOa8lOmBjuWgtFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwRnJlZUdhbWVJbnRyby5sb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BGcmVlR2FtZUludHJvLmFuaW1hdGlvbiA9ICdmcmVlZ2FtZV9pbic7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ0JnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZnUmVlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ0NvdW50Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmdDb3VudC5zdHJpbmcgPSAnNSc7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pyJ5Lit55qE6KOc5L2NXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL6KOc5L2NXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFN5bWJvbFJvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmFkZE5ld1Jlc3VsdEFycl8zO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl8zW2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzNbaV1ba10gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYCR7aX0ke2t9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLnNwYXduT25lU3ltYm9sKHRoaXMuY3VycmVudFJlc3VsdEFycltpXVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTeW1ib2xEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDmspLkuK3nmoTmvJTnubkgNFxuICAgICAgICAgICAgICAgIC50bygzLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDokL3kuIvnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxDbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmdDb3VudC5zdHJpbmcgPSAnNCc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oZHJvcFRpbWVHYXAse30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g5pu05o+b5paw55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJlc3VsdEFyciA9IHRoaXMub3JpUmVzdWx0QXJyXzQ7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25BbGxTeW1ib2woKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g5b6e5LiK6JC95LiL5paw55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsRHJvcCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDmspLkuK3nmoQ1XG4gICAgICAgICAgICAgICAgLnRvKDUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOiQveS4i+ebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLndob2xlUmVlbENsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ0NvdW50LnN0cmluZyA9ICczJztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhkcm9wVGltZUdhcCx7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfNTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDmspLkuK3nmoQ2XG4gICAgICAgICAgICAgICAgLnRvKDUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOiQveS4i+ebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLndob2xlUmVlbENsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ0NvdW50LnN0cmluZyA9ICcyJztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhkcm9wVGltZUdhcCx7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfNjtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDmnInkuK3nmoQgN1xuICAgICAgICAgICAgICAgIC50byg1LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDokL3kuIvnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxDbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmdDb3VudC5zdHJpbmcgPSAnMSc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oZHJvcFRpbWVHYXAsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOabtOaPm+aWsOebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLm9yaVJlc3VsdEFycl83O1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduQWxsU3ltYm9sKCk7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOW+nuS4iuiQveS4i+aWsOebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLndob2xlUmVlbERyb3AoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygyLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmRyb3BSZXN1bHRBcnI7XG4gICAgICAgICAgICAgICAgICAgIC8vIOa8lOa2iOmZpOWLleeVq1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5kcm9wUmVzdWx0QXJyXzcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmRyb3BSZXN1bHRBcnJfN1tpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZHJvcFJlc3VsdEFycl83W2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbEVsaW1pbmF0ZShgJHtpfSR7a31gLCAxLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL6KOc5L2NXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFN5bWJvbFJvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmFkZE5ld1Jlc3VsdEFycl83O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl83W2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzdbaV1ba10gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYCR7aX0ke2t9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLnNwYXduT25lU3ltYm9sKHRoaXMuY3VycmVudFJlc3VsdEFycltpXVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTeW1ib2xEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g5pyJ5Lit55qEIDhcbiAgICAgICAgICAgICAgICAudG8oMywge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsQ2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZnQ291bnQuc3RyaW5nID0gJzAnO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKGRyb3BUaW1lR2FwLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfODtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMiwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5kcm9wUmVzdWx0QXJyO1xuICAgICAgICAgICAgICAgICAgICAvLyDmvJTmtojpmaTli5XnlatcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuZHJvcFJlc3VsdEFycl84Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGs8dGhpcy5kcm9wUmVzdWx0QXJyXzhbaV0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmRyb3BSZXN1bHRBcnJfOFtpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xFbGltaW5hdGUoYCR7aX0ke2t9YCwgMS41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL6KOc5L2NXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFN5bWJvbFJvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmFkZE5ld1Jlc3VsdEFycl84O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl84W2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzhbaV1ba10gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYCR7aX0ke2t9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLnNwYXduT25lU3ltYm9sKHRoaXMuY3VycmVudFJlc3VsdEFycltpXVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTeW1ib2xEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g5pKt5aSn542O5YuV55WrXG4gICAgICAgICAgICAgICAgLnRvKDEsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOaSrei0j+eNjuWLleeVq1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cGVyV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJXaW4uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hbmltYXRpb24gPSAnYW5pbWF0aW9uMic7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5OdW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXJDb3VudGVyQW5pbSh0aGlzLndpbk51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCAxMDAwMCwgNTAwKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDMsIHt9KVxuICAgICAgICAgICAgICAgIC8vIOmAgOWHumZyZWUgZ2FtZVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BGcmVlR2FtZU91dHJvLmFuaW1hdGlvbiA9ICdmcmVlZ2FtZV9vdXQnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZnQmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZnUmVlbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXBlcldpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5OdW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmdDb3VudC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkRFTU9fQ0xJQ0tfQ09VTlQgPSAwO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blNwaW4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIC8vIC50bygzLCB7fSlcbiAgICAgICAgICAgICAgICAvLyAvLyAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgIC8vIC8vICAgICAvLyBjb25zb2xlLmxvZygnQCcsICc0Jyk7XG4gICAgICAgICAgICAgICAgLy8gLy8gICAgIHRoaXMuYmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIC8vICAgICB0aGlzLmNsZWFyTnVtYmVyQ291bnRlckludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgLy8gLy8gICAgIHRoaXMud2luTnVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIC8vICAgICAvLyDokL3kuIvoo5zkvY1cbiAgICAgICAgICAgICAgICAvLyAvLyAgICAgdGhpcy5zb3J0U3ltYm9sUm93KCk7XG4gICAgICAgICAgICAgICAgLy8gLy8gICAgIHRoaXMuY3VycmVudFJlc3VsdEFyciA9IHRoaXMuYWRkTmV3UmVzdWx0QXJyXzI7XG4gICAgICAgICAgICAgICAgLy8gLy8gfSkgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuaXNTcGlubmluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgIH1cblxuICAgIHR3ZWVuU3ltYm9sQ2xlYXIobm9kZSwgZW5kWSwgZGVsYXkpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgLmRlbGF5KGRlbGF5KVxuICAgICAgICAudG8oMC4xLCB7cG9zaXRpb246IGNjLnYyKG5vZGUueCwgZW5kWSl9LCB7ZWFzaW5nOiAncXVhZE91dCd9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICB0d2VlblN5bWJvbERyb3Aobm9kZSwgZW5kWSwgZGVsYXkpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgLmRlbGF5KGRlbGF5KVxuICAgICAgICAudG8oMC41LCB7cG9zaXRpb246IGNjLnYyKG5vZGUueCwgZW5kWSl9LCB7ZWFzaW5nOiAnZWxhc3RpY091dCd9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzcGF3bk9uZVN5bWJvbChzeW1ib2xJZDogbnVtYmVyKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBzeW1ib2w6IGNjLk5vZGU7XG4gICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLnN5bWJvbElkTWFwW3N5bWJvbElkXTtcbiAgICAgICAgc3ltYm9sID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICB9XG5cbiAgICBzcGF3bkFsbFN5bWJvbCgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucmVlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnJlZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgc3BsaXRTdHIgPSBjaGlsZC5uYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGxldCBpbmRleF8xID0gcGFyc2VJbnQoc3BsaXRTdHJbMF0sIDEwKTtcbiAgICAgICAgICAgIGxldCBpbmRleF8yID0gcGFyc2VJbnQoc3BsaXRTdHJbMV0sIDEwKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJAQEBcIiwgaW5kZXhfMSwgaW5kZXhfMik7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuY3VycmVudFJlc3VsdEFycltpbmRleF8xXVtpbmRleF8yXTtcbiAgICAgICAgICAgIGxldCBzcGF3biA9IHRoaXMuc3Bhd25PbmVTeW1ib2woaWQpO1xuXG4gICAgICAgICAgICBjaGlsZC5hZGRDaGlsZChzcGF3bik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2hvbGVSZWVsRHJvcCgpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5yZWVsKVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcwMCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzAzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzA0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcxMCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzEzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzE0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzIzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzI0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCczMCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzMzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzM0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc0MCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQ0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzUzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzU0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICB3aG9sZVJlZWxDbGVhcigpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5yZWVsKVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDAnKSwgc3RhcnRBeGlzWVswXS1tb3ZlUmFuZ2UsIDAuMjUpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDEnKSwgc3RhcnRBeGlzWVsxXS1tb3ZlUmFuZ2UsIDAuMik7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcwMicpLCBzdGFydEF4aXNZWzJdLW1vdmVSYW5nZSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcwMycpLCBzdGFydEF4aXNZWzNdLW1vdmVSYW5nZSwgMC4xKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzA0JyksIHN0YXJ0QXhpc1lbNF0tbW92ZVJhbmdlLCAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHJlZWxUaW1lR2FwLCB7fSlcbiAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzEwJyksIHN0YXJ0QXhpc1lbMF0tbW92ZVJhbmdlLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzExJyksIHN0YXJ0QXhpc1lbMV0tbW92ZVJhbmdlLCAwLjIpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTInKSwgc3RhcnRBeGlzWVsyXS1tb3ZlUmFuZ2UsIDAuMTUpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTMnKSwgc3RhcnRBeGlzWVszXS1tb3ZlUmFuZ2UsIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcxNCcpLCBzdGFydEF4aXNZWzRdLW1vdmVSYW5nZSwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50byhyZWVsVGltZUdhcCwge30pXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMCcpLCBzdGFydEF4aXNZWzBdLW1vdmVSYW5nZSwgMC4yNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMScpLCBzdGFydEF4aXNZWzFdLW1vdmVSYW5nZSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzIyJyksIHN0YXJ0QXhpc1lbMl0tbW92ZVJhbmdlLCAwLjE1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzIzJyksIHN0YXJ0QXhpc1lbM10tbW92ZVJhbmdlLCAwLjEpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjQnKSwgc3RhcnRBeGlzWVs0XS1tb3ZlUmFuZ2UsIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzAnKSwgc3RhcnRBeGlzWVswXS1tb3ZlUmFuZ2UsIDAuMjUpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzEnKSwgc3RhcnRBeGlzWVsxXS1tb3ZlUmFuZ2UsIDAuMik7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCczMicpLCBzdGFydEF4aXNZWzJdLW1vdmVSYW5nZSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCczMycpLCBzdGFydEF4aXNZWzNdLW1vdmVSYW5nZSwgMC4xKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzM0JyksIHN0YXJ0QXhpc1lbNF0tbW92ZVJhbmdlLCAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHJlZWxUaW1lR2FwLCB7fSlcbiAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQwJyksIHN0YXJ0QXhpc1lbMF0tbW92ZVJhbmdlLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQxJyksIHN0YXJ0QXhpc1lbMV0tbW92ZVJhbmdlLCAwLjIpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDInKSwgc3RhcnRBeGlzWVsyXS1tb3ZlUmFuZ2UsIDAuMTUpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDMnKSwgc3RhcnRBeGlzWVszXS1tb3ZlUmFuZ2UsIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc0NCcpLCBzdGFydEF4aXNZWzRdLW1vdmVSYW5nZSwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50byhyZWVsVGltZUdhcCwge30pXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MCcpLCBzdGFydEF4aXNZWzBdLW1vdmVSYW5nZSwgMC4yNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MScpLCBzdGFydEF4aXNZWzFdLW1vdmVSYW5nZSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzUyJyksIHN0YXJ0QXhpc1lbMl0tbW92ZVJhbmdlLCAwLjE1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzUzJyksIHN0YXJ0QXhpc1lbM10tbW92ZVJhbmdlLCAwLjEpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTQnKSwgc3RhcnRBeGlzWVs0XS1tb3ZlUmFuZ2UsIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8oZHJvcFRpbWVHYXAgLSAxLCB7fSlcbiAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDAnKS55ID0gc3RhcnRBeGlzWVswXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzAxJykueSA9IHN0YXJ0QXhpc1lbMV0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcwMicpLnkgPSBzdGFydEF4aXNZWzJdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDMnKS55ID0gc3RhcnRBeGlzWVszXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzA0JykueSA9IHN0YXJ0QXhpc1lbNF0rbW92ZVJhbmdlO1xuXG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzEwJykueSA9IHN0YXJ0QXhpc1lbMF0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcxMScpLnkgPSBzdGFydEF4aXNZWzFdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTInKS55ID0gc3RhcnRBeGlzWVsyXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzEzJykueSA9IHN0YXJ0QXhpc1lbM10rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcxNCcpLnkgPSBzdGFydEF4aXNZWzRdK21vdmVSYW5nZTtcblxuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMCcpLnkgPSBzdGFydEF4aXNZWzBdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjEnKS55ID0gc3RhcnRBeGlzWVsxXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzIyJykueSA9IHN0YXJ0QXhpc1lbMl0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMycpLnkgPSBzdGFydEF4aXNZWzNdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjQnKS55ID0gc3RhcnRBeGlzWVs0XSttb3ZlUmFuZ2U7XG5cbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzAnKS55ID0gc3RhcnRBeGlzWVswXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzMxJykueSA9IHN0YXJ0QXhpc1lbMV0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCczMicpLnkgPSBzdGFydEF4aXNZWzJdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzMnKS55ID0gc3RhcnRBeGlzWVszXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzM0JykueSA9IHN0YXJ0QXhpc1lbNF0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQwJykueSA9IHN0YXJ0QXhpc1lbMF0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc0MScpLnkgPSBzdGFydEF4aXNZWzFdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDInKS55ID0gc3RhcnRBeGlzWVsyXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQzJykueSA9IHN0YXJ0QXhpc1lbM10rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc0NCcpLnkgPSBzdGFydEF4aXNZWzRdK21vdmVSYW5nZTtcblxuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MCcpLnkgPSBzdGFydEF4aXNZWzBdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTEnKS55ID0gc3RhcnRBeGlzWVsxXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzUyJykueSA9IHN0YXJ0QXhpc1lbMl0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MycpLnkgPSBzdGFydEF4aXNZWzNdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTQnKS55ID0gc3RhcnRBeGlzWVs0XSttb3ZlUmFuZ2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnJlZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZWwuY2hpbGRyZW5baV0uZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzeW1ib2xFbGltaW5hdGUoc3ltYm9sSWQ6IHN0cmluZywgZHVyYXRpb24/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoc3ltYm9sSWQpO1xuICAgICAgICBsZXQgc3ltYm9sID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IHN5bWJvbE5hbWUgPSBzeW1ib2wubmFtZTtcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnN5bWJvbEFuaW1NYXBbYCR7c3ltYm9sTmFtZX1gXTtcblxuICAgICAgICBsZXQgc3BTeW1ib2wgPSBub2RlLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKCdzcGluZScpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIGxldCBzcEVsaW1pbmF0ZSA9IG5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoJ2VsaW1pbmF0ZScpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG5cbiAgICAgICAgLy8g5ryU5raI6Zmk5YuV55WrXG4gICAgICAgIHNwU3ltYm9sLmFuaW1hdGlvbiA9IGFuaW07XG4gICAgICAgIHNwRWxpbWluYXRlLmFuaW1hdGlvbiA9ICdsaW5lJztcblxuICAgICAgICAvLyDnp7vli5VzeW1uYm9s6Iez6aCC56uv5L2N572uXG4gICAgICAgIGxldCBkdXIgPSBkdXJhdGlvbiA/IGR1cmF0aW9uIDogMS41O1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBub2RlLnkgPSBub2RlLnkgKyAoMTM0KjUpICsgMjA7XG4gICAgICAgIH0sIGR1cioxMDAwKTtcbiAgICB9XG5cbiAgICBzb3J0U3ltYm9sUm93KCk6IHZvaWQge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCclJSUgMScsIHRoaXMucm93XzApO1xuICAgICAgICB0aGlzLnJvd18wLnNvcnQoKGEsIGIpPT57XG4gICAgICAgICAgICByZXR1cm4gKGIueSszMDApIC0gKGEueSszMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJyUlJSAyJywgdGhpcy5yb3dfMCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMucm93XzAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucm93XzBbaV0ubmFtZSA9IGAwJHtpfWA7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCclJSUgNCcsIHRoaXMucm93XzApO1xuXG4gICAgICAgIHRoaXMucm93XzEuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd18xLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd18xW2ldLm5hbWUgPSBgMSR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm93XzIuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd18yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd18yW2ldLm5hbWUgPSBgMiR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm93XzMuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd18zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd18zW2ldLm5hbWUgPSBgMyR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm93XzQuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd180Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd180W2ldLm5hbWUgPSBgNCR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm93XzUuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd181Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd181W2ldLm5hbWUgPSBgNSR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfMCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfMSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfMik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfMyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfNCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfNSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFmdGVyU3ltYm9sRHJvcCgpOiB2b2lkIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfMC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzBbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzBbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzFbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzFbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzJbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzJbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfMy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzNbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzNbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfNC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzRbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzRbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfNS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzVbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzVbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiog5pW45a2X6Lez5YuV5pa55rOVIHx8IHRvdGFsVGltZeWPr+aKkzUwMOW3puWPsyAqL1xuICAgIG51bWJlckNvdW50ZXJBbmltKHRhcmdldDogY2MuTGFiZWwsIGdvYWw6IG51bWJlciwgdG90YWxUaW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGdvYWwgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsZWFyTnVtYmVyQ291bnRlckludGVydmFsKCk7XG4gICAgICAgIFxuICAgICAgICB0YXJnZXQuc3RyaW5nID0gYCR7MH1gO1xuICAgICAgICAvLyBsZXQgbnVtID0gcGFyc2VJbnQodGFyZ2V0LnN0cmluZywgMTApO1xuICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh0YXJnZXQuc3RyaW5nKTtcbiAgICAgICAgaWYgKGdvYWwgPj0gMCkge1xuICAgICAgICAgICAgbGV0IG5GcmVxdWVuY3kgPSB0b3RhbFRpbWUgLyBnb2FsOyAvLyDot5HliLDnm67mqJnpnIDopoFu5YCLZnJlcXVlbmN5XG4gICAgICAgICAgICBsZXQgZnJlcXVlbmN5ID0gKG5GcmVxdWVuY3kgPCAxMCkgPyAxMCA6IG5GcmVxdWVuY3k7IC8vIHNldEludGVydmFs5pyA5bCP5Y+q6IO96LeRMTDmr6vnp5Ig5Lmf5bCx5pivbuacgOWwj+eCujEwXG4gICAgICAgICAgICBsZXQgbWluVGltZSA9IHRvdGFsVGltZSAvIDEwOyAvLyBzZXRJbnRlcnZhbOi3keWujOaJgOmcgOacgOefreaZgumWk1xuICAgICAgICAgICAgbGV0IGdhcCA9IChuRnJlcXVlbmN5IDwgMTApPyAoTWF0aC5mbG9vcihnb2FsIC8gbWluVGltZSkpIDogMTsgLy8gK+eahOaVuOWtl+mWk+malFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHRoaXMuYW5pbUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChudW0gPCBnb2FsKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSArPSBnYXA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHJpbmcgPSBgKyR7bnVtfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPiBnb2FsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHJpbmcgPSBgKyR7Z29hbH1gO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTnVtYmVyQ291bnRlckludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIGZyZXF1ZW5jeSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ29hbCA8IDApIHtcbiAgICAgICAgICAgIGxldCBuRnJlcXVlbmN5ID0gdG90YWxUaW1lIC8gLWdvYWw7IC8vIOi3keWIsOebruaomemcgOimgW7lgItmcmVxdWVuY3lcbiAgICAgICAgICAgIGxldCBmcmVxdWVuY3kgPSAobkZyZXF1ZW5jeSA8IDEwKSA/IDEwIDogbkZyZXF1ZW5jeTsgLy8gc2V0SW50ZXJ2YWzmnIDlsI/lj6rog73ot5ExMOavq+enkiDkuZ/lsLHmmK9u5pyA5bCP54K6MTBcbiAgICAgICAgICAgIGxldCBtaW5UaW1lID0gdG90YWxUaW1lIC8gMTA7IC8vIHNldEludGVydmFs6LeR5a6M5omA6ZyA5pyA55+t5pmC6ZaTXG4gICAgICAgICAgICBsZXQgZ2FwID0gKG5GcmVxdWVuY3kgPCAxMCk/IChNYXRoLmZsb29yKC1nb2FsIC8gbWluVGltZSkpIDogMTsgLy8gK+eahOaVuOWtl+mWk+malFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHRoaXMuYW5pbUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChudW0gPiBnb2FsKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSAtPSBnYXA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHJpbmcgPSBgJHtudW19YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bSA8IGdvYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0cmluZyA9IGAke2dvYWx9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck51bWJlckNvdW50ZXJJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCBmcmVxdWVuY3kpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiDlvLfliLbmuIXpmaTmlbjlrZfot7Pli5VpbnRlcnZhbCAqL1xuICAgIGNsZWFyTnVtYmVyQ291bnRlckludGVydmFsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hbmltSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5hbmltSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==