"use strict";
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