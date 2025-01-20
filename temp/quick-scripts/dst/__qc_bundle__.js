
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Demo');
require('./assets/scripts/common/Launcher');
require('./assets/scripts/common/i18n/en');
require('./assets/scripts/common/i18n/zh_cn');
require('./assets/scripts/common/i18n/zh_tw');
require('./assets/scripts/common/interfaces/ISymbols');
require('./assets/scripts/common/managers/API_Mgr');
require('./assets/scripts/common/managers/AudioMgr');
require('./assets/scripts/common/managers/EventMgr');
require('./assets/scripts/common/managers/I18nMgr');
require('./assets/scripts/common/managers/NetMgr');
require('./assets/scripts/common/managers/ResourcesMgr');
require('./assets/scripts/common/managers/UI_Mgr');
require('./assets/scripts/common/managers/ViewMgr');
require('./assets/scripts/common/utils/resize/ResizeCanvas');
require('./assets/scripts/single/app/GameApp');
require('./assets/scripts/single/configs/GameConfig');
require('./assets/scripts/single/configs/NetworkConfig');
require('./assets/scripts/single/controllers/GameController');
require('./assets/scripts/single/controllers/LoadPageController');
require('./assets/scripts/single/controllers/ResourcesController');
require('./assets/scripts/single/models/TableDataModel');
require('./assets/scripts/single/models/UserDataModel');
require('./assets/scripts/single/views/GameView');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/app/GameApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '694efvcIQxCnJswsXmwZWu0', 'GameApp');
// scripts/single/app/GameApp.ts

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
var GameApp = /** @class */ (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameApp.prototype.onLoad = function () {
    };
    GameApp.prototype.start = function () {
    };
    GameApp = __decorate([
        ccclass
    ], GameApp);
    return GameApp;
}(cc.Component));
exports.default = GameApp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luZ2xlXFxhcHBcXEdhbWVBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFBakQ7O0lBWUEsQ0FBQztJQVRHLHdCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsdUJBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQVkzQjtJQUFELGNBQUM7Q0FaRCxBQVlDLENBWm9DLEVBQUUsQ0FBQyxTQUFTLEdBWWhEO2tCQVpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVBcHAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBSXRCLElBQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDaEIsSUFBTSxTQUFTLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFN0IsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUd4QjtJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTZvQ0M7UUExb0NHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQWdCLElBQUksQ0FBQztRQUczQixZQUFNLEdBQWdCLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBRXBDLHFCQUFlLEdBQWdCLElBQUksQ0FBQztRQUdwQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFVBQUksR0FB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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixTQUFTO1FBQ1Qsb0JBQWMsR0FBRztZQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQixDQUFDO1FBRUYscUJBQWUsR0FBRztZQUNkLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQixDQUFDO1FBRUYsMEJBQW9CLEdBQUc7WUFDbkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25CLENBQUM7UUFFRix1QkFBaUIsR0FBRztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEIsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixvQkFBYyxHQUFHO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixxQkFBZSxHQUFHO1lBQ2QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkIsQ0FBQztRQUVGLDBCQUFvQixHQUFHO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25CLENBQUM7UUFFRix1QkFBaUIsR0FBRztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEIsQ0FBQztRQUVGLFdBQVc7UUFDWCxvQkFBYyxHQUFHO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixvQkFBYyxHQUFHO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixvQkFBYyxHQUFHO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixRQUFRO1FBQ1Isb0JBQWMsR0FBRztZQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQixDQUFDO1FBRUYscUJBQWUsR0FBRztZQUNkLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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QUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQixDQUFDO1FBRUYsdUJBQWlCLEdBQUc7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUM7UUFFRixzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFdEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsbUJBQWEsR0FBRztZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUE7UUFFRCxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxrQkFBWSxHQUFHLElBQUksQ0FBQzs7SUF3MUJ4QixDQUFDO0lBcjFCRyxlQUFlO0lBRWYsb0JBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixJQUFJLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDOUMsQ0FBQztRQUVGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztRQUVGLFVBQVU7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFcEMsWUFBWTtRQUNaLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDbEM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUdELDZCQUFjLEdBQWQ7UUFBQSxpQkFpY0M7UUEvYkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUUvQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUVsRyxXQUFXO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRWxDLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU5QyxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUUzQixnR0FBZ0c7WUFDaEcsS0FBSyxDQUFDLEVBQUUsU0FBUztnQkFDYixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQ2xCLElBQUksQ0FBQztvQkFDRixPQUFPO29CQUNQLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxXQUFXLEVBQUMsRUFBRSxDQUFDO3FCQUNsQixJQUFJLENBQUM7b0JBQ0YsUUFBUTtvQkFDUixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztvQkFDNUMsRUFBRTtvQkFDRix5QkFBeUI7Z0JBRTdCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDWCxJQUFJLENBQUM7b0JBQ0YsVUFBVTtvQkFDVixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztxQkFDVCxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxFQUFFLENBQUM7Z0JBQ1QsTUFBTTtZQUVWLG9HQUFvRztZQUNwRyxLQUFLLENBQUMsRUFBRSxTQUFTO2dCQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDbEIsSUFBSSxDQUFDO29CQUNGLE9BQU87b0JBQ1AsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMxQixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUM7cUJBQ2xCLElBQUksQ0FBQztvQkFDRixRQUFRO29CQUNSLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO29CQUM1QyxVQUFVO29CQUNWLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUNULElBQUksQ0FBQztvQkFDRiw4Q0FBOEM7b0JBQzlDLFFBQVE7b0JBQ1IsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ2pELElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dDQUNWLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzZCQUN6QztpQ0FBTTtnQ0FDSCxTQUFTOzZCQUNaOzRCQUFBLENBQUM7eUJBQ0w7d0JBQUEsQ0FBQztxQkFDTDtvQkFBQSxDQUFDO2dCQUNOLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztxQkFDVCxJQUFJLENBQUM7b0JBQ0YsUUFBUTtvQkFDUixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUUzRCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUUxRSxDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ1QsSUFBSSxDQUFDO29CQUNGLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsT0FBTztvQkFDUCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ25ELENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDWCxJQUFJLENBQUM7b0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN0RCxJQUFJLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQ0FDdkMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7Z0NBQ2hELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dDQUMxQixJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUN6QjtpQ0FBTTtnQ0FDSCxTQUFTOzZCQUNaOzRCQUFBLENBQUM7eUJBQ0w7d0JBQUEsQ0FBQztxQkFDTDtvQkFBQSxDQUFDO2dCQUVOLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDWCxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ1QsSUFBSSxDQUFDO29CQUNGLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDckMsQ0FBQyxDQUFDO3FCQUNELEtBQUssRUFBRSxDQUFDO2dCQUVULE1BQU07WUFFVixnR0FBZ0c7WUFDaEcsS0FBSyxDQUFDLEVBQUUsZUFBZTtnQkFDbkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNsQixJQUFJLENBQUM7b0JBQ0YsT0FBTztvQkFDUCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzFCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsV0FBVyxFQUFDLEVBQUUsQ0FBQztxQkFDbEIsSUFBSSxDQUFDO29CQUNGLFFBQVE7b0JBQ1IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7b0JBQzVDLFVBQVU7b0JBQ1YsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUV6QixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ1QsSUFBSSxDQUFDO29CQUNGLDhDQUE4QztvQkFDOUMsUUFBUTtvQkFDUixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDakQsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0NBQ1YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7NkJBQ3ZDO2lDQUFNO2dDQUNILFNBQVM7NkJBQ1o7NEJBQUEsQ0FBQzt5QkFDTDt3QkFBQSxDQUFDO3FCQUNMO29CQUFBLENBQUM7Z0JBQ04sQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUNULElBQUksQ0FBQztvQkFDRixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFFM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDO3lCQUN2QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDO3lCQUMzQyxLQUFLLEVBQUUsQ0FBQztvQkFFVCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUM7eUJBQ3JCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLENBQUM7eUJBQzNDLEtBQUssRUFBRSxDQUFDO2dCQUNiLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztxQkFDVCxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBRTVCLE1BQU07b0JBQ04sS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNsQyxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7b0JBRS9DLFVBQVUsQ0FBQzt3QkFDUCxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3hCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRWIsQ0FBQyxDQUFDO29CQUNGLDhCQUE4QjtxQkFDN0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7cUJBQ1gsSUFBSSxDQUFDO29CQUNGLE9BQU87b0JBQ1AsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUNuRCxDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7cUJBQ1gsSUFBSSxDQUFDO29CQUNGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDdEQsSUFBSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0NBQ3ZDLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUcsQ0FBQyxDQUFDO2dDQUNoRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQ0FDMUIsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFDekI7aUNBQU07Z0NBQ0gsU0FBUzs2QkFDWjs0QkFBQSxDQUFDO3lCQUNMO3dCQUFBLENBQUM7cUJBQ0w7b0JBQUEsQ0FBQztnQkFDTixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7cUJBQ1gsSUFBSSxDQUFDO29CQUNGLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDO29CQUNGLHdDQUF3QztxQkFDdkMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ1QsSUFBSSxDQUFDO29CQUNGLE9BQU87b0JBQ1AsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUV0QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsV0FBVyxFQUFDLEVBQUUsQ0FBQztxQkFDbEIsSUFBSSxDQUFDO29CQUNGLFFBQVE7b0JBQ1IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7b0JBQzVDLEVBQUU7b0JBQ0YsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUUxQixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7cUJBQ1gsSUFBSSxDQUFDO29CQUNGLFVBQVU7b0JBQ1YsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN6QixDQUFDLENBQUM7b0JBQ0Ysb0NBQW9DO3FCQUNuQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztxQkFDVCxJQUFJLENBQUM7b0JBQ0YsT0FBTztvQkFDUCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBRXRCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxXQUFXLEVBQUMsRUFBRSxDQUFDO3FCQUNsQixJQUFJLENBQUM7b0JBQ0YsUUFBUTtvQkFDUixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztvQkFDNUMsRUFBRTtvQkFDRixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRTFCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDWCxJQUFJLENBQUM7b0JBQ0YsVUFBVTtvQkFDVixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQztvQkFDRiwrQkFBK0I7cUJBQzlCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUNULElBQUksQ0FBQztvQkFDRixPQUFPO29CQUNQLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFFdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUM5QixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUM7cUJBQ2xCLElBQUksQ0FBQztvQkFDRixRQUFRO29CQUNSLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO29CQUM1QyxFQUFFO29CQUNGLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFMUIsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO3FCQUNYLElBQUksQ0FBQztvQkFDRixVQUFVO29CQUNWLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDO29CQUNGLGdDQUFnQztxQkFDL0IsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ1QsSUFBSSxDQUFDO29CQUNGLE9BQU87b0JBQ1AsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUV0QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztxQkFDbkIsSUFBSSxDQUFDO29CQUNGLFFBQVE7b0JBQ1IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7b0JBQzVDLEVBQUU7b0JBQ0YsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUUxQixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7cUJBQ1gsSUFBSSxDQUFDO29CQUNGLFVBQVU7b0JBQ1YsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN6QixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ1QsSUFBSSxDQUFDO29CQUNGLDhDQUE4QztvQkFDOUMsUUFBUTtvQkFDUixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDakQsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0NBQ1YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7NkJBQ3pDO2lDQUFNO2dDQUNILFNBQVM7NkJBQ1o7NEJBQUEsQ0FBQzt5QkFDTDt3QkFBQSxDQUFDO3FCQUNMO29CQUFBLENBQUM7Z0JBQ04sQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO3FCQUNYLElBQUksQ0FBQztvQkFDRixPQUFPO29CQUNQLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO3FCQUNYLElBQUksQ0FBQztvQkFDRixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDbkQsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3RELElBQUksS0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dDQUN2QyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQztnQ0FDaEQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0NBQzFCLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQ3pCO2lDQUFNO2dDQUNILFNBQVM7NkJBQ1o7NEJBQUEsQ0FBQzt5QkFDTDt3QkFBQSxDQUFDO3FCQUNMO29CQUFBLENBQUM7Z0JBQ04sQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO3FCQUNYLElBQUksQ0FBQztvQkFDRixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUMsQ0FBQztvQkFDRixpQ0FBaUM7cUJBQ2hDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUNULElBQUksQ0FBQztvQkFDRixPQUFPO29CQUNQLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFFdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUM5QixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7cUJBQ25CLElBQUksQ0FBQztvQkFDRixRQUFRO29CQUNSLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO29CQUM1QyxFQUFFO29CQUNGLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFMUIsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO3FCQUNYLElBQUksQ0FBQztvQkFDRixVQUFVO29CQUNWLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUNULElBQUksQ0FBQztvQkFDRiw4Q0FBOEM7b0JBQzlDLFFBQVE7b0JBQ1IsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ2pELElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dDQUNWLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzZCQUN6QztpQ0FBTTtnQ0FDSCxTQUFTOzZCQUNaOzRCQUFBLENBQUM7eUJBQ0w7d0JBQUEsQ0FBQztxQkFDTDtvQkFBQSxDQUFDO2dCQUNOLENBQUMsQ0FBQztxQkFFRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDWCxJQUFJLENBQUM7b0JBQ0YsT0FBTztvQkFDUCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ25ELENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDWCxJQUFJLENBQUM7b0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN0RCxJQUFJLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQ0FDdkMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7Z0NBQ2hELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dDQUMxQixJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUN6QjtpQ0FBTTtnQ0FDSCxTQUFTOzZCQUNaOzRCQUFBLENBQUM7eUJBQ0w7d0JBQUEsQ0FBQztxQkFDTDtvQkFBQSxDQUFDO2dCQUNOLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDWCxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDLENBQUM7b0JBQ0Ysb0NBQW9DO3FCQUNuQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztxQkFDVCxJQUFJLENBQUM7b0JBQ0YsUUFBUTtvQkFDUixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO29CQUVqRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUUzRSxDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ1YsY0FBYztxQkFDYixJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO29CQUNoRCxVQUFVLENBQUM7d0JBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFVCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDakMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztnQkFFOUIsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUNULElBQUksQ0FBQztvQkFFRixLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQztvQkFDRixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsbUNBQW1DO29CQUNuQyxxQ0FBcUM7b0JBQ3JDLDRDQUE0QztvQkFDNUMscUNBQXFDO29CQUNyQyxpQkFBaUI7b0JBQ2pCLCtCQUErQjtvQkFDL0IseURBQXlEO29CQUN6RCx3QkFBd0I7cUJBQ3ZCLEtBQUssRUFBRSxDQUFDO2dCQUNULE1BQU07WUFHVjtnQkFDSSxNQUFNO1NBQ2I7UUFBQSxDQUFDO1FBRUYsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWIsQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFpQixJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDYixLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQzthQUM3RCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCw4QkFBZSxHQUFmLFVBQWdCLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSztRQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNiLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDO2FBQ2hFLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELDZCQUFjLEdBQWQsVUFBZSxRQUFnQjtRQUMzQixJQUFJLE1BQWUsQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUU1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDOUI7WUFBQSxDQUFDO1lBRUYsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXhDLHdDQUF3QztZQUV4QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVwQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFFRCw0QkFBYSxHQUFiO1FBQUEsaUJBcURDO1FBcERHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUFBLGlCQTRGQztRQTNGRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3ZCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO1lBRTNELEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDOUM7WUFBQSxDQUFDO1FBQ04sQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLFFBQWlCO1FBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksTUFBTSxHQUFHLElB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QUFFLENBQUMsTUFBTSxDQUFDO29DQUNDO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQ0FDQztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29DQUNDO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQ0FDQztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29DQUNDO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQ0FDQztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29DQUNDO0lBL0RKLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2b0N4QjtJQUFELFdBQUM7Q0E3b0NELEFBNm9DQyxDQTdvQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBNm9DN0M7a0JBN29Db0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmNvbnN0IEdBUF9IRUlHSFQgPSAxMzQ7XG5jb25zdCBHQVBfV0lEVEggPSAxNzA7XG5cblxuXG5jb25zdCBzdGFydEF4aXNZID0gWzI2OCwgMTM0LCAwLCAtMTM0LCAtMjY4XTtcbmNvbnN0IGdhcCA9IDEzNDtcbmNvbnN0IG1vdmVSYW5nZSA9IDEzNCo1ICsgMjA7XG5cbmNvbnN0IGRyb3BUaW1lR2FwID0gMjtcbmNvbnN0IHJlZWxUaW1lR2FwID0gMC4yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtbyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlU3BpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5TcGluOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBzcFNwaW46IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBzcFNldGg6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc3BHb2RkZXM6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBtdWx0aXBseU51bTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmlnV2luOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdXBlcldpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd2luTnVtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZyZWVUaXRsZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZnJlZU51bTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc3BGcmVlR2FtZUludHJvOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNwRnJlZUdhbWVPdXRybzogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVlbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmZ0JnOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmZ1JlZWw6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBmZ0NvdW50OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIFNDOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgSDE6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBIMjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIEgzOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgSDQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBOMTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIE4yOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgTjM6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBONDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIE41OiBjYy5QcmVmYWIgPSBudWxsO1xuXG5cbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuXG4gICAgREVNT19DTElDS19DT1VOVCA9IDA7XG4gICAgREVNT19DTElDS19MSU1JVCA9IDM7XG5cbiAgICAvLyDnrKzkuIDovYkg5pmu6YCaXG4gICAgb3JpUmVzdWx0QXJyXzEgPSBbXG4gICAgICAgIFs0LCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbOSwgNywgMSwgMiwgM10sXG4gICAgICAgIFs5LCA0LCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDcsIDMsIDQsIDVdLFxuICAgICAgICBbNywgOCwgOSwgNCwgMV1cbiAgICBdO1xuXG4gICAgZHJvcFJlc3VsdEFycl8xID0gW1xuICAgICAgICBbLTEsIDEsIDIsIDMsIC0xXSxcbiAgICAgICAgWzIsIDMsIC0xLCA1LCA2XSxcbiAgICAgICAgWzksIC0xLCAxLCAyLCAzXSxcbiAgICAgICAgWzksIC0xLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIC0xLCAzLCAtMSwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCAtMSwgMV1cbiAgICBdO1xuXG4gICAgYWZ0ZXJNb3ZlUmVzdWx0QXJyXzEgPSBbXG4gICAgICAgIFstMSwgLTEsIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDIsIDMsIDUsIDZdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIC0xLCAxLCAzLCA1XSxcbiAgICAgICAgWy0xLCA3LCA4LCA5LCAxXVxuICAgIF07XG5cbiAgICBhZGROZXdSZXN1bHRBcnJfMSA9IFtcbiAgICAgICAgWzQsIDEsIDIsIDMsIDRdLFxuICAgICAgICBbMiwgMywgNCwgNSwgNl0sXG4gICAgICAgIFs5LCA0LCAxLCAyLCAzXSxcbiAgICAgICAgWzksIDQsIDEsIDIsIDNdLFxuICAgICAgICBbMSwgNCwgMywgNCwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCA0LCAxXVxuICAgIF07XG5cbiAgICAvLyDnrKzkuozovYkg6LSP542OXG4gICAgb3JpUmVzdWx0QXJyXzIgPSBbXG4gICAgICAgIFs0LCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbOSwgNCwgMSwgMiwgM10sXG4gICAgICAgIFs5LCA0LCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDQsIDMsIDQsIDVdLFxuICAgICAgICBbNywgOCwgOSwgNCwgMV1cbiAgICBdO1xuXG4gICAgZHJvcFJlc3VsdEFycl8yID0gW1xuICAgICAgICBbLTEsIDEsIDIsIDMsIC0xXSxcbiAgICAgICAgWzIsIDMsIC0xLCA1LCA2XSxcbiAgICAgICAgWzksIC0xLCAxLCAyLCAzXSxcbiAgICAgICAgWzksIC0xLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIC0xLCAzLCAtMSwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCAtMSwgMV1cbiAgICBdO1xuXG4gICAgYWZ0ZXJNb3ZlUmVzdWx0QXJyXzIgPSBbXG4gICAgICAgIFstMSwgLTEsIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDIsIDMsIDUsIDZdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIC0xLCAxLCAzLCA1XSxcbiAgICAgICAgWy0xLCA3LCA4LCA5LCAxXVxuICAgIF07XG5cbiAgICBhZGROZXdSZXN1bHRBcnJfMiA9IFtcbiAgICAgICAgWzQsIDAsIDEsIDIsIDNdLFxuICAgICAgICBbNSwgMiwgMywgNSwgNl0sXG4gICAgICAgIFs3LCA5LCAxLCAyLCAzXSxcbiAgICAgICAgWzQsIDksIDEsIDIsIDNdLFxuICAgICAgICBbNywgMCwgMSwgMywgNV0sXG4gICAgICAgIFsyLCA3LCA4LCA5LCAxXVxuICAgIF07XG5cbiAgICAvLyDnrKzkuInovYkgZnJlZSBnYW1lXG4gICAgb3JpUmVzdWx0QXJyXzMgPSBbXG4gICAgICAgIFswLCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbOSwgMCwgMSwgMiwgM10sXG4gICAgICAgIFs5LCAwLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDIsIDMsIDQsIDVdLFxuICAgICAgICBbNywgOCwgOSwgMCwgMV1cbiAgICBdO1xuXG4gICAgZHJvcFJlc3VsdEFycl8zID0gW1xuICAgICAgICBbLTEsIDEsIDIsIDMsIDRdLFxuICAgICAgICBbMiwgMywgNCwgNSwgNl0sXG4gICAgICAgIFs5LCAtMSwgMSwgMiwgM10sXG4gICAgICAgIFs5LCAtMSwgMSwgMiwgM10sXG4gICAgICAgIFsxLCAyLCAzLCA0LCA1XSxcbiAgICAgICAgWzcsIDgsIDksIC0xLCAxXVxuICAgIF07XG5cbiAgICBhZnRlck1vdmVSZXN1bHRBcnJfMyA9IFtcbiAgICAgICAgWy0xLCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbLTEsIDksIDEsIDIsIDNdLFxuICAgICAgICBbMSwgMiwgMywgNCwgNV0sXG4gICAgICAgIFstMSwgNywgOCwgOSwgMV1cbiAgICBdO1xuXG4gICAgYWRkTmV3UmVzdWx0QXJyXzMgPSBbXG4gICAgICAgIFsxLCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDUsIDZdLFxuICAgICAgICBbMSwgOSwgMSwgMiwgM10sXG4gICAgICAgIFszLCA5LCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDIsIDMsIDQsIDVdLFxuICAgICAgICBbMiwgNywgOCwgOSwgMV1cbiAgICBdO1xuXG4gICAgLy8gRkcg5YmN5LiJ6L2J5rKS6LSPXG4gICAgb3JpUmVzdWx0QXJyXzQgPSBbXG4gICAgICAgIFsxLCAxLCAyLCAzLCAyXSxcbiAgICAgICAgWzIsIDcsIDQsIDMsIDZdLFxuICAgICAgICBbMSwgOSwgMSwgMiwgM10sXG4gICAgICAgIFszLCAzLCA3LCAyLCA2XSxcbiAgICAgICAgWzksIDIsIDMsIDcsIDVdLFxuICAgICAgICBbMiwgNywgMiwgOSwgMV1cbiAgICBdO1xuXG4gICAgb3JpUmVzdWx0QXJyXzUgPSBbXG4gICAgICAgIFsxLCAxLCA4LCAzLCA4XSxcbiAgICAgICAgWzQsIDYsIDQsIDcsIDZdLFxuICAgICAgICBbNSwgNiwgMSwgMiwgM10sXG4gICAgICAgIFszLCA2LCAxLCAyLCAzXSxcbiAgICAgICAgWzUsIDIsIDMsIDcsIDVdLFxuICAgICAgICBbMiwgNywgOCwgOSwgOF1cbiAgICBdO1xuXG4gICAgb3JpUmVzdWx0QXJyXzYgPSBbXG4gICAgICAgIFs1LCAyLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDMsIDQsIDYsIDZdLFxuICAgICAgICBbMSwgOCwgOCwgMiwgM10sXG4gICAgICAgIFszLCA5LCAxLCA3LCA3XSxcbiAgICAgICAgWzUsIDUsIDIsIDQsIDVdLFxuICAgICAgICBbMiwgNywgOCwgOSwgMV1cbiAgICBdO1xuXG4gICAgLy8g5b6M5LqM6L2J6LSP542OXG4gICAgb3JpUmVzdWx0QXJyXzcgPSBbXG4gICAgICAgIFs0LCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzIsIDEsIDQsIDEsIDZdLFxuICAgICAgICBbOSwgNywgMSwgMiwgM10sXG4gICAgICAgIFs5LCAyLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDQsIDEsIDQsIDVdLFxuICAgICAgICBbNywgOCwgOSwgNCwgMV1cbiAgICBdO1xuXG4gICAgZHJvcFJlc3VsdEFycl83ID0gW1xuICAgICAgICBbNCwgLTEsIDIsIDMsIDRdLFxuICAgICAgICBbMiwgLTEsIDQsIC0xLCA2XSxcbiAgICAgICAgWzksIDcsIC0xLCAyLCAzXSxcbiAgICAgICAgWzksIDIsIC0xLCAyLCAzXSxcbiAgICAgICAgWy0xLCA0LCAtMSwgNCwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCA0LCAtMV1cbiAgICBdO1xuXG4gICAgYWZ0ZXJNb3ZlUmVzdWx0QXJyXzcgPSBbXG4gICAgICAgIFstMSwgNCwgMiwgMywgNF0sXG4gICAgICAgIFstMSwgLTEsIDIsIDQsIDZdLFxuICAgICAgICBbLTEsIDksIDcsIDIsIDNdLFxuICAgICAgICBbLTEsIDksIDIsIDIsIDNdLFxuICAgICAgICBbLTEsIC0xLCA0LCA0LCA1XSxcbiAgICAgICAgWy0xLCA3LCA4LCA5LCA0XVxuICAgIF07XG5cbiAgICBhZGROZXdSZXN1bHRBcnJfNyA9IFtcbiAgICAgICAgWzcsIDQsIDIsIDMsIDRdLFxuICAgICAgICBbNiwgMSwgMiwgNCwgNl0sXG4gICAgICAgIFs5LCA5LCA3LCAyLCAzXSxcbiAgICAgICAgWzcsIDksIDIsIDIsIDNdLFxuICAgICAgICBbMSwgMSwgNCwgNCwgNV0sXG4gICAgICAgIFs4LCA3LCA4LCA5LCA0XVxuICAgIF07XG5cbiAgICBvcmlSZXN1bHRBcnJfOCA9IFtcbiAgICAgICAgWzQsIDEsIDIsIDMsIDRdLFxuICAgICAgICBbMiwgMywgNCwgNSwgNl0sXG4gICAgICAgIFs5LCAyLCAyLCAyLCAzXSxcbiAgICAgICAgWzksIDQsIDEsIDIsIDNdLFxuICAgICAgICBbMSwgMiwgMywgMiwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCA0LCAxXVxuICAgIF07XG5cbiAgICBkcm9wUmVzdWx0QXJyXzggPSBbXG4gICAgICAgIFs0LCAxLCAtMSwgMywgNF0sXG4gICAgICAgIFstMSwgMywgNCwgNSwgNl0sXG4gICAgICAgIFs5LCAtMSwgLTEsIC0xLCAzXSxcbiAgICAgICAgWzksIDQsIDEsIC0xLCAzXSxcbiAgICAgICAgWzEsIC0xLCAzLCAtMSwgNV0sXG4gICAgICAgIFs3LCA4LCA5LCA0LCAxXVxuICAgIF07XG5cbiAgICBhZnRlck1vdmVSZXN1bHRBcnJfOCA9IFtcbiAgICAgICAgWy0xLCA0LCAxLCAzLCA0XSxcbiAgICAgICAgWy0xLCAzLCA0LCA1LCA2XSxcbiAgICAgICAgWy0xLCAtMSwgLTEsIDksIDNdLFxuICAgICAgICBbLTEsIDksIDQsIDEsIDNdLFxuICAgICAgICBbLTEsIC0xLCAxLCAzLCA1XSxcbiAgICAgICAgWzcsIDgsIDksIDQsIDFdXG4gICAgXTtcblxuICAgIGFkZE5ld1Jlc3VsdEFycl84ID0gW1xuICAgICAgICBbMiwgNCwgMSwgMywgNF0sXG4gICAgICAgIFsyLCAzLCA0LCA1LCA2XSxcbiAgICAgICAgWzEsIDEsIDQsIDksIDNdLFxuICAgICAgICBbMiwgOSwgNCwgMSwgM10sXG4gICAgICAgIFsyLCAzLCAxLCAzLCA1XSxcbiAgICAgICAgWzcsIDgsIDksIDQsIDFdXG4gICAgXTtcblxuICAgIGN1cnJlbnRSZXN1bHRBcnIgPSBbXTtcblxuICAgIHN5bWJvbElkTWFwID0gW107XG5cbiAgICBzeW1ib2xBbmltTWFwID0ge1xuICAgICAgICAnSDEnOiAnUzEnLFxuICAgICAgICAnSDInOiAnUzInLFxuICAgICAgICAnSDMnOiAnUzMnLFxuICAgICAgICAnSDQnOiAnUzQnLFxuICAgICAgICAnTjEnOiAnQScsXG4gICAgICAgICdOMic6ICdLJyxcbiAgICAgICAgJ04zJzogJ1EnLFxuICAgICAgICAnTjQnOiAnSicsXG4gICAgICAgICdONSc6ICcxMCcsXG4gICAgICAgICdTQyc6ICdTY2F0dGVyJ1xuICAgIH1cblxuICAgIGlzU3Bpbm5pbmcgPSBmYWxzZTtcblxuICAgIHJvd18wID0gW107XG4gICAgcm93XzEgPSBbXTtcbiAgICByb3dfMiA9IFtdO1xuICAgIHJvd18zID0gW107XG4gICAgcm93XzQgPSBbXTtcbiAgICByb3dfNSA9IFtdO1xuXG4gICAgYW5pbUludGVydmFsID0gbnVsbDtcblxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICAgICAgdGhpcy5zeW1ib2xJZE1hcCA9IFtcbiAgICAgICAgICAgIHRoaXMuU0MsIFxuICAgICAgICAgICAgdGhpcy5IMSwgdGhpcy5IMiwgdGhpcy5IMywgdGhpcy5INCwgXG4gICAgICAgICAgICB0aGlzLk4xLCB0aGlzLk4yLCB0aGlzLk4zLCB0aGlzLk40LCB0aGlzLk41XG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yb3dfMC5wdXNoKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZShgMCR7aX1gKSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucm93XzEucHVzaCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYDEke2l9YCkpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8NTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd18yLnB1c2godGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKGAyJHtpfWApKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yb3dfMy5wdXNoKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZShgMyR7aX1gKSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucm93XzQucHVzaCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYDQke2l9YCkpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8NTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd181LnB1c2godGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKGA1JHtpfWApKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDliJ3lp4vljJbkurrnianli5XmhYtcbiAgICAgICAgdGhpcy5zcFNldGgubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3BTZXRoLmFuaW1hdGlvbiA9ICdiZ19pZGxlJztcbiAgICAgICAgdGhpcy5zcEdvZGRlcy5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcEdvZGRlcy5hbmltYXRpb24gPSAnYmdfaWRsZSc7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyWc3ltYm9sXG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdEFyciA9IHRoaXMub3JpUmVzdWx0QXJyXzM7XG4gICAgICAgIHRoaXMuc3Bhd25BbGxTeW1ib2woKTtcblxuICAgICAgICAvLyDmjInpiJXkuovku7bnm6Pogb1cbiAgICAgICAgdGhpcy5ub2RlU3Bpbi5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tCdG5TcGluLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTcGlubmluZyAmJiB0aGlzLnNwU3Bpbi5hbmltYXRpb24gIT09ICdpZGxlJykge1xuICAgICAgICAgICAgdGhpcy5zcFNwaW4ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwU3Bpbi5hbmltYXRpb24gPSAnaWRsZSc7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrQnRuU3BpbigpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmlzU3Bpbm5pbmcgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zcFNwaW4ubG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwU3Bpbi5hbmltYXRpb24gPSAnc3Bpbic7XG5cbiAgICAgICAgdGhpcy5ERU1PX0NMSUNLX0NPVU5UICs9IDE7XG4gICAgICAgIHRoaXMuREVNT19DTElDS19DT1VOVCA9IHRoaXMuREVNT19DTElDS19DT1VOVCA+IHRoaXMuREVNT19DTElDS19MSU1JVCA/IDEgOiB0aGlzLkRFTU9fQ0xJQ0tfQ09VTlQ7XG5cbiAgICAgICAgLy8g6Y6W5a6ac3BpbuaMiemIlVxuICAgICAgICB0aGlzLmJ0blNwaW4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zcFNwaW4uYW5pbWF0aW9uID0gJ2Rpc2FibGVkJztcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0NPVU5UOiAnLCB0aGlzLkRFTU9fQ0xJQ0tfQ09VTlQpO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5ERU1PX0NMSUNLX0NPVU5UKSB7XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgY2FzZSAxOiAvLyDmma7pgJrmu77ovKrlsZXnpLpcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsQ2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhkcm9wVGltZUdhcCx7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfMTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5TcGluLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgICAgICAgICAgY2FzZSAyOiAvLyDln7rnpI7otI/pjKLlsZXnpLpcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsQ2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhkcm9wVGltZUdhcCx7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfMjtcbiAgICAgICAgICAgICAgICAgICAgLy8g5b6e5LiK6JC95LiL5paw55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsRHJvcCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDIsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFJlc3VsdEFyciA9IHRoaXMuZHJvcFJlc3VsdEFycjtcbiAgICAgICAgICAgICAgICAgICAgLy8g5ryU5raI6Zmk5YuV55WrXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmRyb3BSZXN1bHRBcnJfMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaz0wOyBrPHRoaXMuZHJvcFJlc3VsdEFycl8yW2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5kcm9wUmVzdWx0QXJyXzJbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sRWxpbWluYXRlKGAke2l9JHtrfWAsIDMuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g5pKt6LSP542O5YuV55WrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmlnV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmlnV2luLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuYW5pbWF0aW9uID0gJ2JpZ3dpbic7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5OdW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXJDb3VudGVyQW5pbSh0aGlzLndpbk51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCAxMDAwLCA1MDApO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMywge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJOdW1iZXJDb3VudGVySW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5OdW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIOiQveS4i+ijnOS9jVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRTeW1ib2xSb3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5hZGROZXdSZXN1bHRBcnJfMjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl8yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGs8dGhpcy5hZnRlck1vdmVSZXN1bHRBcnJfMltpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl8yW2ldW2tdID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKGAke2l9JHtrfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gdGhpcy5zcGF3bk9uZVN5bWJvbCh0aGlzLmN1cnJlbnRSZXN1bHRBcnJbaV1ba10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFkZENoaWxkKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTeW1ib2xEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5TcGluLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGNhc2UgMzogLy8gZnJlZSBnYW1lIOWxleekulxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDokL3kuIvnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxDbGVhcigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKGRyb3BUaW1lR2FwLHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOabtOaPm+aWsOebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLm9yaVJlc3VsdEFycl8zO1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygyLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmRyb3BSZXN1bHRBcnI7XG4gICAgICAgICAgICAgICAgICAgIC8vIOa8lOa2iOmZpOWLleeVq1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5kcm9wUmVzdWx0QXJyXzMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmRyb3BSZXN1bHRBcnJfM1tpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZHJvcFJlc3VsdEFycl8zW2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbEVsaW1pbmF0ZShgJHtpfSR7a31gLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygxLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVUaXRsZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVOdW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZyZWVUaXRsZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwge3NjYWxlOiAyfSwge2Vhc2luZzogJ2VsYXN0aWNPdXQnfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5mcmVlTnVtKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiAnZWxhc3RpY091dCd9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygyLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVUaXRsZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmVlTnVtLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOa8lOmBjuWgtFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwRnJlZUdhbWVJbnRyby5sb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BGcmVlR2FtZUludHJvLmFuaW1hdGlvbiA9ICdmcmVlZ2FtZV9pbic7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ0JnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZnUmVlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ0NvdW50Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmdDb3VudC5zdHJpbmcgPSAnNSc7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pyJ5Lit55qE6KOc5L2NXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL6KOc5L2NXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFN5bWJvbFJvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmFkZE5ld1Jlc3VsdEFycl8zO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl8zW2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzNbaV1ba10gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYCR7aX0ke2t9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLnNwYXduT25lU3ltYm9sKHRoaXMuY3VycmVudFJlc3VsdEFycltpXVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTeW1ib2xEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDmspLkuK3nmoTmvJTnubkgNFxuICAgICAgICAgICAgICAgIC50bygzLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDokL3kuIvnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxDbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmdDb3VudC5zdHJpbmcgPSAnNCc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oZHJvcFRpbWVHYXAse30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g5pu05o+b5paw55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJlc3VsdEFyciA9IHRoaXMub3JpUmVzdWx0QXJyXzQ7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25BbGxTeW1ib2woKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g5b6e5LiK6JC95LiL5paw55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsRHJvcCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDmspLkuK3nmoQ1XG4gICAgICAgICAgICAgICAgLnRvKDUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOiQveS4i+ebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLndob2xlUmVlbENsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ0NvdW50LnN0cmluZyA9ICczJztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhkcm9wVGltZUdhcCx7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfNTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDmspLkuK3nmoQ2XG4gICAgICAgICAgICAgICAgLnRvKDUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOiQveS4i+ebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLndob2xlUmVlbENsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ0NvdW50LnN0cmluZyA9ICcyJztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhkcm9wVGltZUdhcCx7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfNjtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDmnInkuK3nmoQgN1xuICAgICAgICAgICAgICAgIC50byg1LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDokL3kuIvnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxDbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmdDb3VudC5zdHJpbmcgPSAnMSc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oZHJvcFRpbWVHYXAsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOabtOaPm+aWsOebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLm9yaVJlc3VsdEFycl83O1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduQWxsU3ltYm9sKCk7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOW+nuS4iuiQveS4i+aWsOebpOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLndob2xlUmVlbERyb3AoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygyLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmRyb3BSZXN1bHRBcnI7XG4gICAgICAgICAgICAgICAgICAgIC8vIOa8lOa2iOmZpOWLleeVq1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5kcm9wUmVzdWx0QXJyXzcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmRyb3BSZXN1bHRBcnJfN1tpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZHJvcFJlc3VsdEFycl83W2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbEVsaW1pbmF0ZShgJHtpfSR7a31gLCAxLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL6KOc5L2NXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFN5bWJvbFJvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmFkZE5ld1Jlc3VsdEFycl83O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl83W2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzdbaV1ba10gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYCR7aX0ke2t9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLnNwYXduT25lU3ltYm9sKHRoaXMuY3VycmVudFJlc3VsdEFycltpXVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTeW1ib2xEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g5pyJ5Lit55qEIDhcbiAgICAgICAgICAgICAgICAudG8oMywge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL55uk6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvbGVSZWVsQ2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZnQ291bnQuc3RyaW5nID0gJzAnO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKGRyb3BUaW1lR2FwLCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7Tmj5vmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5vcmlSZXN1bHRBcnJfODtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7fSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyDlvp7kuIrokL3kuIvmlrDnm6TpnaJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aG9sZVJlZWxEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMiwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50UmVzdWx0QXJyID0gdGhpcy5kcm9wUmVzdWx0QXJyO1xuICAgICAgICAgICAgICAgICAgICAvLyDmvJTmtojpmaTli5XnlatcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuZHJvcFJlc3VsdEFycl84Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGs8dGhpcy5kcm9wUmVzdWx0QXJyXzhbaV0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmRyb3BSZXN1bHRBcnJfOFtpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xFbGltaW5hdGUoYCR7aX0ke2t9YCwgMS41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8g6JC95LiL6KOc5L2NXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFN5bWJvbFJvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRBcnIgPSB0aGlzLmFkZE5ld1Jlc3VsdEFycl84O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLmFmdGVyTW92ZVJlc3VsdEFycl84W2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWZ0ZXJNb3ZlUmVzdWx0QXJyXzhbaV1ba10gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoYCR7aX0ke2t9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLnNwYXduT25lU3ltYm9sKHRoaXMuY3VycmVudFJlc3VsdEFycltpXVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTeW1ib2xEcm9wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g5pKt5aSn542O5YuV55WrXG4gICAgICAgICAgICAgICAgLnRvKDEsIHt9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIOaSrei0j+eNjuWLleeVq1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cGVyV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJXaW4uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hbmltYXRpb24gPSAnYW5pbWF0aW9uMic7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5OdW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXJDb3VudGVyQW5pbSh0aGlzLndpbk51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCAxMDAwMCwgNTAwKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDMsIHt9KVxuICAgICAgICAgICAgICAgIC8vIOmAgOWHumZyZWUgZ2FtZVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BGcmVlR2FtZU91dHJvLmFuaW1hdGlvbiA9ICdmcmVlZ2FtZV9vdXQnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZnQmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZnUmVlbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXBlcldpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5OdW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmdDb3VudC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkRFTU9fQ0xJQ0tfQ09VTlQgPSAwO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwge30pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blNwaW4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIC8vIC50bygzLCB7fSlcbiAgICAgICAgICAgICAgICAvLyAvLyAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgIC8vIC8vICAgICAvLyBjb25zb2xlLmxvZygnQCcsICc0Jyk7XG4gICAgICAgICAgICAgICAgLy8gLy8gICAgIHRoaXMuYmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIC8vICAgICB0aGlzLmNsZWFyTnVtYmVyQ291bnRlckludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgLy8gLy8gICAgIHRoaXMud2luTnVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIC8vICAgICAvLyDokL3kuIvoo5zkvY1cbiAgICAgICAgICAgICAgICAvLyAvLyAgICAgdGhpcy5zb3J0U3ltYm9sUm93KCk7XG4gICAgICAgICAgICAgICAgLy8gLy8gICAgIHRoaXMuY3VycmVudFJlc3VsdEFyciA9IHRoaXMuYWRkTmV3UmVzdWx0QXJyXzI7XG4gICAgICAgICAgICAgICAgLy8gLy8gfSkgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuaXNTcGlubmluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgIH1cblxuICAgIHR3ZWVuU3ltYm9sQ2xlYXIobm9kZSwgZW5kWSwgZGVsYXkpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgLmRlbGF5KGRlbGF5KVxuICAgICAgICAudG8oMC4xLCB7cG9zaXRpb246IGNjLnYyKG5vZGUueCwgZW5kWSl9LCB7ZWFzaW5nOiAncXVhZE91dCd9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICB0d2VlblN5bWJvbERyb3Aobm9kZSwgZW5kWSwgZGVsYXkpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgLmRlbGF5KGRlbGF5KVxuICAgICAgICAudG8oMC41LCB7cG9zaXRpb246IGNjLnYyKG5vZGUueCwgZW5kWSl9LCB7ZWFzaW5nOiAnZWxhc3RpY091dCd9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzcGF3bk9uZVN5bWJvbChzeW1ib2xJZDogbnVtYmVyKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBzeW1ib2w6IGNjLk5vZGU7XG4gICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLnN5bWJvbElkTWFwW3N5bWJvbElkXTtcbiAgICAgICAgc3ltYm9sID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICB9XG5cbiAgICBzcGF3bkFsbFN5bWJvbCgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucmVlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnJlZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgc3BsaXRTdHIgPSBjaGlsZC5uYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGxldCBpbmRleF8xID0gcGFyc2VJbnQoc3BsaXRTdHJbMF0sIDEwKTtcbiAgICAgICAgICAgIGxldCBpbmRleF8yID0gcGFyc2VJbnQoc3BsaXRTdHJbMV0sIDEwKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJAQEBcIiwgaW5kZXhfMSwgaW5kZXhfMik7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuY3VycmVudFJlc3VsdEFycltpbmRleF8xXVtpbmRleF8yXTtcbiAgICAgICAgICAgIGxldCBzcGF3biA9IHRoaXMuc3Bhd25PbmVTeW1ib2woaWQpO1xuXG4gICAgICAgICAgICBjaGlsZC5hZGRDaGlsZChzcGF3bik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2hvbGVSZWVsRHJvcCgpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5yZWVsKVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zcGF3bkFsbFN5bWJvbCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcwMCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzAzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzA0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcxMCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzEzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzE0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzIzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzI0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCczMCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzMzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzM0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc0MCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQ0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbERyb3AodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MCcpLCBzdGFydEF4aXNZWzBdLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTEnKSwgc3RhcnRBeGlzWVsxXSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTInKSwgc3RhcnRBeGlzWVsyXSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzUzJyksIHN0YXJ0QXhpc1lbM10sIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sRHJvcCh0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzU0JyksIHN0YXJ0QXhpc1lbNF0sIDApO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICB3aG9sZVJlZWxDbGVhcigpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5yZWVsKVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDAnKSwgc3RhcnRBeGlzWVswXS1tb3ZlUmFuZ2UsIDAuMjUpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDEnKSwgc3RhcnRBeGlzWVsxXS1tb3ZlUmFuZ2UsIDAuMik7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcwMicpLCBzdGFydEF4aXNZWzJdLW1vdmVSYW5nZSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcwMycpLCBzdGFydEF4aXNZWzNdLW1vdmVSYW5nZSwgMC4xKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzA0JyksIHN0YXJ0QXhpc1lbNF0tbW92ZVJhbmdlLCAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHJlZWxUaW1lR2FwLCB7fSlcbiAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzEwJyksIHN0YXJ0QXhpc1lbMF0tbW92ZVJhbmdlLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzExJyksIHN0YXJ0QXhpc1lbMV0tbW92ZVJhbmdlLCAwLjIpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTInKSwgc3RhcnRBeGlzWVsyXS1tb3ZlUmFuZ2UsIDAuMTUpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTMnKSwgc3RhcnRBeGlzWVszXS1tb3ZlUmFuZ2UsIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcxNCcpLCBzdGFydEF4aXNZWzRdLW1vdmVSYW5nZSwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50byhyZWVsVGltZUdhcCwge30pXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMCcpLCBzdGFydEF4aXNZWzBdLW1vdmVSYW5nZSwgMC4yNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMScpLCBzdGFydEF4aXNZWzFdLW1vdmVSYW5nZSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzIyJyksIHN0YXJ0QXhpc1lbMl0tbW92ZVJhbmdlLCAwLjE1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzIzJyksIHN0YXJ0QXhpc1lbM10tbW92ZVJhbmdlLCAwLjEpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjQnKSwgc3RhcnRBeGlzWVs0XS1tb3ZlUmFuZ2UsIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8ocmVlbFRpbWVHYXAsIHt9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzAnKSwgc3RhcnRBeGlzWVswXS1tb3ZlUmFuZ2UsIDAuMjUpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzEnKSwgc3RhcnRBeGlzWVsxXS1tb3ZlUmFuZ2UsIDAuMik7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCczMicpLCBzdGFydEF4aXNZWzJdLW1vdmVSYW5nZSwgMC4xNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCczMycpLCBzdGFydEF4aXNZWzNdLW1vdmVSYW5nZSwgMC4xKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzM0JyksIHN0YXJ0QXhpc1lbNF0tbW92ZVJhbmdlLCAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHJlZWxUaW1lR2FwLCB7fSlcbiAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQwJyksIHN0YXJ0QXhpc1lbMF0tbW92ZVJhbmdlLCAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQxJyksIHN0YXJ0QXhpc1lbMV0tbW92ZVJhbmdlLCAwLjIpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDInKSwgc3RhcnRBeGlzWVsyXS1tb3ZlUmFuZ2UsIDAuMTUpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDMnKSwgc3RhcnRBeGlzWVszXS1tb3ZlUmFuZ2UsIDAuMSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc0NCcpLCBzdGFydEF4aXNZWzRdLW1vdmVSYW5nZSwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50byhyZWVsVGltZUdhcCwge30pXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MCcpLCBzdGFydEF4aXNZWzBdLW1vdmVSYW5nZSwgMC4yNSk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3ltYm9sQ2xlYXIodGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MScpLCBzdGFydEF4aXNZWzFdLW1vdmVSYW5nZSwgMC4yKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzUyJyksIHN0YXJ0QXhpc1lbMl0tbW92ZVJhbmdlLCAwLjE1KTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xDbGVhcih0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzUzJyksIHN0YXJ0QXhpc1lbM10tbW92ZVJhbmdlLCAwLjEpO1xuICAgICAgICAgICAgdGhpcy50d2VlblN5bWJvbENsZWFyKHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTQnKSwgc3RhcnRBeGlzWVs0XS1tb3ZlUmFuZ2UsIDApO1xuICAgICAgICB9KVxuICAgICAgICAudG8oZHJvcFRpbWVHYXAgLSAxLCB7fSlcbiAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDAnKS55ID0gc3RhcnRBeGlzWVswXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzAxJykueSA9IHN0YXJ0QXhpc1lbMV0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcwMicpLnkgPSBzdGFydEF4aXNZWzJdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMDMnKS55ID0gc3RhcnRBeGlzWVszXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzA0JykueSA9IHN0YXJ0QXhpc1lbNF0rbW92ZVJhbmdlO1xuXG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzEwJykueSA9IHN0YXJ0QXhpc1lbMF0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcxMScpLnkgPSBzdGFydEF4aXNZWzFdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMTInKS55ID0gc3RhcnRBeGlzWVsyXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzEzJykueSA9IHN0YXJ0QXhpc1lbM10rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcxNCcpLnkgPSBzdGFydEF4aXNZWzRdK21vdmVSYW5nZTtcblxuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMCcpLnkgPSBzdGFydEF4aXNZWzBdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjEnKS55ID0gc3RhcnRBeGlzWVsxXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzIyJykueSA9IHN0YXJ0QXhpc1lbMl0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCcyMycpLnkgPSBzdGFydEF4aXNZWzNdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMjQnKS55ID0gc3RhcnRBeGlzWVs0XSttb3ZlUmFuZ2U7XG5cbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzAnKS55ID0gc3RhcnRBeGlzWVswXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzMxJykueSA9IHN0YXJ0QXhpc1lbMV0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCczMicpLnkgPSBzdGFydEF4aXNZWzJdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnMzMnKS55ID0gc3RhcnRBeGlzWVszXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzM0JykueSA9IHN0YXJ0QXhpc1lbNF0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQwJykueSA9IHN0YXJ0QXhpc1lbMF0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc0MScpLnkgPSBzdGFydEF4aXNZWzFdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNDInKS55ID0gc3RhcnRBeGlzWVsyXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzQzJykueSA9IHN0YXJ0QXhpc1lbM10rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc0NCcpLnkgPSBzdGFydEF4aXNZWzRdK21vdmVSYW5nZTtcblxuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MCcpLnkgPSBzdGFydEF4aXNZWzBdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTEnKS55ID0gc3RhcnRBeGlzWVsxXSttb3ZlUmFuZ2U7XG4gICAgICAgICAgICB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoJzUyJykueSA9IHN0YXJ0QXhpc1lbMl0rbW92ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5yZWVsLmdldENoaWxkQnlOYW1lKCc1MycpLnkgPSBzdGFydEF4aXNZWzNdK21vdmVSYW5nZTtcbiAgICAgICAgICAgIHRoaXMucmVlbC5nZXRDaGlsZEJ5TmFtZSgnNTQnKS55ID0gc3RhcnRBeGlzWVs0XSttb3ZlUmFuZ2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnJlZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZWwuY2hpbGRyZW5baV0uZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzeW1ib2xFbGltaW5hdGUoc3ltYm9sSWQ6IHN0cmluZywgZHVyYXRpb24/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlZWwuZ2V0Q2hpbGRCeU5hbWUoc3ltYm9sSWQpO1xuICAgICAgICBsZXQgc3ltYm9sID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IHN5bWJvbE5hbWUgPSBzeW1ib2wubmFtZTtcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnN5bWJvbEFuaW1NYXBbYCR7c3ltYm9sTmFtZX1gXTtcblxuICAgICAgICBsZXQgc3BTeW1ib2wgPSBub2RlLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKCdzcGluZScpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIGxldCBzcEVsaW1pbmF0ZSA9IG5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoJ2VsaW1pbmF0ZScpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG5cbiAgICAgICAgLy8g5ryU5raI6Zmk5YuV55WrXG4gICAgICAgIHNwU3ltYm9sLmFuaW1hdGlvbiA9IGFuaW07XG4gICAgICAgIHNwRWxpbWluYXRlLmFuaW1hdGlvbiA9ICdsaW5lJztcblxuICAgICAgICAvLyDnp7vli5VzeW1uYm9s6Iez6aCC56uv5L2N572uXG4gICAgICAgIGxldCBkdXIgPSBkdXJhdGlvbiA/IGR1cmF0aW9uIDogMS41O1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBub2RlLnkgPSBub2RlLnkgKyAoMTM0KjUpICsgMjA7XG4gICAgICAgIH0sIGR1cioxMDAwKTtcbiAgICB9XG5cbiAgICBzb3J0U3ltYm9sUm93KCk6IHZvaWQge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCclJSUgMScsIHRoaXMucm93XzApO1xuICAgICAgICB0aGlzLnJvd18wLnNvcnQoKGEsIGIpPT57XG4gICAgICAgICAgICByZXR1cm4gKGIueSszMDApIC0gKGEueSszMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJyUlJSAyJywgdGhpcy5yb3dfMCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMucm93XzAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucm93XzBbaV0ubmFtZSA9IGAwJHtpfWA7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCclJSUgNCcsIHRoaXMucm93XzApO1xuXG4gICAgICAgIHRoaXMucm93XzEuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd18xLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd18xW2ldLm5hbWUgPSBgMSR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm93XzIuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd18yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd18yW2ldLm5hbWUgPSBgMiR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm93XzMuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd18zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd18zW2ldLm5hbWUgPSBgMyR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm93XzQuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd180Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd180W2ldLm5hbWUgPSBgNCR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm93XzUuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJvd181Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd181W2ldLm5hbWUgPSBgNSR7aX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfMCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfMSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfMik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfMyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfNCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCckJywgdGhpcy5yb3dfNSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFmdGVyU3ltYm9sRHJvcCgpOiB2b2lkIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfMC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzBbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzBbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzFbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzFbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzJbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzJbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfMy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzNbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzNbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfNC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzRbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzRbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yb3dfNS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucm93XzVbaV0ueSAhPT0gc3RhcnRBeGlzWVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5TeW1ib2xEcm9wKHRoaXMucm93XzVbaV0sIHN0YXJ0QXhpc1lbaV0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiog5pW45a2X6Lez5YuV5pa55rOVIHx8IHRvdGFsVGltZeWPr+aKkzUwMOW3puWPsyAqL1xuICAgIG51bWJlckNvdW50ZXJBbmltKHRhcmdldDogY2MuTGFiZWwsIGdvYWw6IG51bWJlciwgdG90YWxUaW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGdvYWwgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsZWFyTnVtYmVyQ291bnRlckludGVydmFsKCk7XG4gICAgICAgIFxuICAgICAgICB0YXJnZXQuc3RyaW5nID0gYCR7MH1gO1xuICAgICAgICAvLyBsZXQgbnVtID0gcGFyc2VJbnQodGFyZ2V0LnN0cmluZywgMTApO1xuICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh0YXJnZXQuc3RyaW5nKTtcbiAgICAgICAgaWYgKGdvYWwgPj0gMCkge1xuICAgICAgICAgICAgbGV0IG5GcmVxdWVuY3kgPSB0b3RhbFRpbWUgLyBnb2FsOyAvLyDot5HliLDnm67mqJnpnIDopoFu5YCLZnJlcXVlbmN5XG4gICAgICAgICAgICBsZXQgZnJlcXVlbmN5ID0gKG5GcmVxdWVuY3kgPCAxMCkgPyAxMCA6IG5GcmVxdWVuY3k7IC8vIHNldEludGVydmFs5pyA5bCP5Y+q6IO96LeRMTDmr6vnp5Ig5Lmf5bCx5pivbuacgOWwj+eCujEwXG4gICAgICAgICAgICBsZXQgbWluVGltZSA9IHRvdGFsVGltZSAvIDEwOyAvLyBzZXRJbnRlcnZhbOi3keWujOaJgOmcgOacgOefreaZgumWk1xuICAgICAgICAgICAgbGV0IGdhcCA9IChuRnJlcXVlbmN5IDwgMTApPyAoTWF0aC5mbG9vcihnb2FsIC8gbWluVGltZSkpIDogMTsgLy8gK+eahOaVuOWtl+mWk+malFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHRoaXMuYW5pbUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChudW0gPCBnb2FsKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSArPSBnYXA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHJpbmcgPSBgKyR7bnVtfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPiBnb2FsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHJpbmcgPSBgKyR7Z29hbH1gO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTnVtYmVyQ291bnRlckludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIGZyZXF1ZW5jeSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ29hbCA8IDApIHtcbiAgICAgICAgICAgIGxldCBuRnJlcXVlbmN5ID0gdG90YWxUaW1lIC8gLWdvYWw7IC8vIOi3keWIsOebruaomemcgOimgW7lgItmcmVxdWVuY3lcbiAgICAgICAgICAgIGxldCBmcmVxdWVuY3kgPSAobkZyZXF1ZW5jeSA8IDEwKSA/IDEwIDogbkZyZXF1ZW5jeTsgLy8gc2V0SW50ZXJ2YWzmnIDlsI/lj6rog73ot5ExMOavq+enkiDkuZ/lsLHmmK9u5pyA5bCP54K6MTBcbiAgICAgICAgICAgIGxldCBtaW5UaW1lID0gdG90YWxUaW1lIC8gMTA7IC8vIHNldEludGVydmFs6LeR5a6M5omA6ZyA5pyA55+t5pmC6ZaTXG4gICAgICAgICAgICBsZXQgZ2FwID0gKG5GcmVxdWVuY3kgPCAxMCk/IChNYXRoLmZsb29yKC1nb2FsIC8gbWluVGltZSkpIDogMTsgLy8gK+eahOaVuOWtl+mWk+malFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHRoaXMuYW5pbUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChudW0gPiBnb2FsKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSAtPSBnYXA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHJpbmcgPSBgJHtudW19YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bSA8IGdvYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0cmluZyA9IGAke2dvYWx9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck51bWJlckNvdW50ZXJJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCBmcmVxdWVuY3kpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiDlvLfliLbmuIXpmaTmlbjlrZfot7Pli5VpbnRlcnZhbCAqL1xuICAgIGNsZWFyTnVtYmVyQ291bnRlckludGVydmFsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hbmltSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5hbmltSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/utils/resize/ResizeCanvas.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ce51I6O2ZNV6yzfYdAi9nc', 'ResizeCanvas');
// scripts/common/utils/resize/ResizeCanvas.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFx1dGlsc1xccmVzaXplXFxSZXNpemVDYW52YXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/interfaces/ISymbols.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb4d30maJ1NAJ25bewpwcnF', 'ISymbols');
// scripts/common/interfaces/ISymbols.ts

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
var ISymbols = /** @class */ (function (_super) {
    __extends(ISymbols, _super);
    function ISymbols() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    ISymbols.prototype.start = function () {
    };
    ISymbols = __decorate([
        ccclass
    ], ISymbols);
    return ISymbols;
}(cc.Component));
exports.default = ISymbols;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxpbnRlcmZhY2VzXFxJU3ltYm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFXQSxDQUFDO0lBUEcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBUmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FXNUI7SUFBRCxlQUFDO0NBWEQsQUFXQyxDQVhxQyxFQUFFLENBQUMsU0FBUyxHQVdqRDtrQkFYb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJU3ltYm9scyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/ResourcesMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c639fXpsSxAh5XSkUDuvl8u', 'ResourcesMgr');
// scripts/common/managers/ResourcesMgr.ts

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
var ResMgr = /** @class */ (function (_super) {
    __extends(ResMgr, _super);
    function ResMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // AB包
        _this.bundleSets = {};
        _this.nowRes = 0; // 已經加載的資源包
        _this.totalRes = 0; // 要加載的資源包總數
        _this.nowBundle = 0; // 已經加載過的AB
        _this.totalBundle = 0; // 總共要加載的AB
        // 進度條
        _this.onProgress = null;
        _this.onComplete = null;
        _this.prefabLoaderMobile = null;
        _this.prefabLoaderPC = null;
        return _this;
    }
    ResMgr_1 = ResMgr;
    /** 加載AB包 */
    ResMgr.prototype.loadAssetBundle = function (bundleName, onComplete) {
        var _this = this;
        cc.assetManager.loadBundle(bundleName, function (err, bundle) {
            if (err !== null) {
                cc.log("[ResMgr]: load asset bundle error: " + bundleName);
                _this.bundleSets[bundleName] = null;
            }
            else {
                cc.log("[ResMgr]: load asset bundle success: " + bundleName);
                _this.bundleSets[bundleName] = bundle;
            }
            ;
            if (onComplete) {
                onComplete();
            }
            ;
            // LogMgr.Instance.log("###### Asset bundles loaded:", this.bundleSets);
        });
    };
    ResMgr.prototype.onLoad = function () {
        // 唯一實例
        if (ResMgr_1.Instance === null) {
            ResMgr_1.Instance = this;
        }
        else {
            cc.error("[error:] res mgr has multi instances!!!");
            this.destroy();
            cc.log("[fix:] res mgr has been destroyed.");
            return;
        }
        ;
    };
    /** 加載資源 */
    ResMgr.prototype.loadRes = function (bundle, url, typeOfClass) {
        var _this = this;
        bundle.load(url, typeOfClass, function (err, asset) {
            _this.nowRes++;
            if (err) {
                cc.error("[load res]: " + url + " error!");
            }
            else {
                cc.log("[load res]: " + url + " success!");
            }
            ;
            if (_this.onProgress) {
                _this.onProgress(_this.nowRes, _this.totalRes);
            }
            ;
            if (_this.nowRes >= _this.totalRes) {
                if (_this.onComplete !== null) {
                    _this.onComplete();
                }
            }
            ;
        });
    };
    /** 加載AB包中的特定資源 */
    ResMgr.prototype.loadSpecificAssetInBundle = function (resPkg) {
        for (var key in resPkg) {
            var urlSet = resPkg[key].urls;
            var typeOfClass = resPkg.assetType;
            for (var i = 0; i < urlSet.length; i++) {
                this.loadRes(this.bundleSets[key], urlSet[i], typeOfClass);
            }
            ;
        }
        ;
    };
    /** 獲取資源 */
    ResMgr.prototype.getAsset = function (bundleName, assetUrl) {
        var bundle = cc.assetManager.getBundle(bundleName);
        if (bundle === null) {
            cc.error("[error:] \"" + bundleName + "\" asset bundle not loaded");
            return null;
        }
        ;
        return bundle.get(assetUrl);
    };
    /** 資源包預加載 || resPkg: || funcProgress: 進度函數 || onComplete: 加載結束函數 */
    ResMgr.prototype.preloadResPackage = function (resPkg, onProgress, onComplete) {
        var _this = this;
        this.nowRes = 0;
        this.totalRes = 0;
        this.nowBundle = 0;
        this.totalBundle = 0;
        this.onProgress = onProgress;
        this.onComplete = onComplete;
        for (var key in resPkg) {
            this.totalBundle++;
            this.totalRes += resPkg[key].urls.length;
        }
        ;
        for (var key in resPkg) {
            this.loadAssetBundle(key, function () {
                _this.nowBundle++;
                if (_this.nowBundle === _this.totalBundle) {
                    _this.loadSpecificAssetInBundle(resPkg);
                }
            });
        }
        ;
    };
    /** 資源包釋放 */
    ResMgr.prototype.releaseResPackage = function (resPkg) {
        for (var key in resPkg) {
            if (!cc.isValid(resPkg[key])) {
                continue;
            }
            ;
            var urlSet = resPkg[key].urls;
            for (var i = 0; i < urlSet.length; i++) {
                cc.assetManager.releaseAsset(urlSet[i]);
            }
            ;
        }
        ;
    };
    var ResMgr_1;
    ResMgr.Instance = null;
    __decorate([
        property(cc.Prefab)
    ], ResMgr.prototype, "prefabLoaderMobile", void 0);
    __decorate([
        property(cc.Prefab)
    ], ResMgr.prototype, "prefabLoaderPC", void 0);
    ResMgr = ResMgr_1 = __decorate([
        ccclass
    ], ResMgr);
    return ResMgr;
}(cc.Component));
exports.default = ResMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxtYW5hZ2Vyc1xcUmVzb3VyY2VzTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBZ0lDO1FBNUhHLE1BQU07UUFDRSxnQkFBVSxHQUFRLEVBQUUsQ0FBQztRQUVyQixZQUFNLEdBQVcsQ0FBQyxDQUFDLENBQVMsV0FBVztRQUN2QyxjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQU8sWUFBWTtRQUV4QyxlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQU0sV0FBVztRQUN2QyxpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFJLFdBQVc7UUFFL0MsTUFBTTtRQUNFLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzdCLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUVyQyxvQkFBYyxHQUFjLElBQUksQ0FBQzs7SUE0RzVDLENBQUM7ZUFoSW9CLE1BQU07SUFzQnZCLFlBQVk7SUFDSixnQ0FBZSxHQUF2QixVQUF3QixVQUFrQixFQUFFLFVBQW9CO1FBQWhFLGlCQWNDO1FBYkcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07WUFDL0MsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXNDLFVBQVksQ0FBQyxDQUFDO2dCQUMzRCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxFQUFFLENBQUMsR0FBRyxDQUFDLDBDQUF3QyxVQUFZLENBQUMsQ0FBQztnQkFDN0QsS0FBSSxD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QUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQztZQUFBLENBQUM7U0FDTDtRQUFBLENBQUM7SUFDTixDQUFDOztJQTdIYSxlQUFRLEdBQVcsSUFBSSxDQUFDO0lBZ0J0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUN3QjtJQUU1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNvQjtJQXBCdkIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWdJMUI7SUFBRCxhQUFDO0NBaElELEFBZ0lDLENBaEltQyxFQUFFLENBQUMsU0FBUyxHQWdJL0M7a0JBaElvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc01nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBSZXNNZ3IgPSBudWxsO1xuXG4gICAgLy8gQULljIVcbiAgICBwcml2YXRlIGJ1bmRsZVNldHM6IGFueSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBub3dSZXM6IG51bWJlciA9IDA7ICAgICAgICAgLy8g5bey57aT5Yqg6LyJ55qE6LOH5rqQ5YyFXG4gICAgcHJpdmF0ZSB0b3RhbFJlczogbnVtYmVyID0gMDsgICAgICAgLy8g6KaB5Yqg6LyJ55qE6LOH5rqQ5YyF57i95pW4XG5cbiAgICBwcml2YXRlIG5vd0J1bmRsZTogbnVtYmVyID0gMDsgICAgICAvLyDlt7LntpPliqDovInpgY7nmoRBQlxuICAgIHByaXZhdGUgdG90YWxCdW5kbGU6IG51bWJlciA9IDA7ICAgIC8vIOe4veWFseimgeWKoOi8ieeahEFCXG5cbiAgICAvLyDpgLLluqbmop1cbiAgICBwcml2YXRlIG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIG9uQ29tcGxldGU6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHVibGljIHByZWZhYkxvYWRlck1vYmlsZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHB1YmxpYyBwcmVmYWJMb2FkZXJQQzogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8qKiDliqDovIlBQuWMhSAqL1xuICAgIHByaXZhdGUgbG9hZEFzc2V0QnVuZGxlKGJ1bmRsZU5hbWU6IHN0cmluZywgb25Db21wbGV0ZTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoYnVuZGxlTmFtZSwgKGVyciwgYnVuZGxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbUmVzTWdyXTogbG9hZCBhc3NldCBidW5kbGUgZXJyb3I6ICR7YnVuZGxlTmFtZX1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bmRsZVNldHNbYnVuZGxlTmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXNNZ3JdOiBsb2FkIGFzc2V0IGJ1bmRsZSBzdWNjZXNzOiAke2J1bmRsZU5hbWV9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5idW5kbGVTZXRzW2J1bmRsZU5hbWVdID0gYnVuZGxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIExvZ01nci5JbnN0YW5jZS5sb2coXCIjIyMjIyMgQXNzZXQgYnVuZGxlcyBsb2FkZWQ6XCIsIHRoaXMuYnVuZGxlU2V0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTG9hZCAoKTogdm9pZCB7XG4gICAgICAgIC8vIOWUr+S4gOWvpuS+i1xuICAgICAgICBpZiAoUmVzTWdyLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBSZXNNZ3IuSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbZXJyb3I6XSByZXMgbWdyIGhhcyBtdWx0aSBpbnN0YW5jZXMhISFcIik7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIltmaXg6XSByZXMgbWdyIGhhcyBiZWVuIGRlc3Ryb3llZC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIOWKoOi8ieizh+a6kCAqL1xuICAgIHB1YmxpYyBsb2FkUmVzKGJ1bmRsZSwgdXJsLCB0eXBlT2ZDbGFzcykge1xuICAgICAgICBidW5kbGUubG9hZCh1cmwsIHR5cGVPZkNsYXNzLCAoZXJyLCBhc3NldCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3dSZXMrKztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGVycikgeyBcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW2xvYWQgcmVzXTogJHt1cmx9IGVycm9yIWApOyBcbiAgICAgICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW2xvYWQgcmVzXTogJHt1cmx9IHN1Y2Nlc3MhYCk7IFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzcyh0aGlzLm5vd1JlcywgdGhpcy50b3RhbFJlcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ub3dSZXMgPj0gdGhpcy50b3RhbFJlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIOWKoOi8iUFC5YyF5Lit55qE54m55a6a6LOH5rqQICovXG4gICAgcHJpdmF0ZSBsb2FkU3BlY2lmaWNBc3NldEluQnVuZGxlKHJlc1BrZykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzUGtnKSB7XG4gICAgICAgICAgICBsZXQgdXJsU2V0ID0gcmVzUGtnW2tleV0udXJscztcbiAgICAgICAgICAgIGxldCB0eXBlT2ZDbGFzcyA9IHJlc1BrZy5hc3NldFR5cGU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHVybFNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcyh0aGlzLmJ1bmRsZVNldHNba2V5XSwgdXJsU2V0W2ldLCB0eXBlT2ZDbGFzcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiDnjbLlj5bos4fmupAgKi9cbiAgICBwdWJsaWMgZ2V0QXNzZXQoYnVuZGxlTmFtZTogc3RyaW5nLCBhc3NldFVybDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XG4gICAgICAgIGlmIChidW5kbGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbZXJyb3I6XSBcIiR7YnVuZGxlTmFtZX1cIiBhc3NldCBidW5kbGUgbm90IGxvYWRlZGApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJ1bmRsZS5nZXQoYXNzZXRVcmwpO1xuICAgIH1cblxuICAgIC8qKiDos4fmupDljIXpoJDliqDovIkgfHwgcmVzUGtnOiB8fCBmdW5jUHJvZ3Jlc3M6IOmAsuW6puWHveaVuCB8fCBvbkNvbXBsZXRlOiDliqDovInntZDmnZ/lh73mlbggKi9cbiAgICBwdWJsaWMgcHJlbG9hZFJlc1BhY2thZ2UocmVzUGtnLCBvblByb2dyZXNzLCBvbkNvbXBsZXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm93UmVzID0gMDsgdGhpcy50b3RhbFJlcyA9IDA7XG4gICAgICAgIHRoaXMubm93QnVuZGxlID0gMDsgdGhpcy50b3RhbEJ1bmRsZSA9IDA7XG4gICAgICAgIHRoaXMub25Qcm9ncmVzcyA9IG9uUHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG9uQ29tcGxldGU7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiByZXNQa2cpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxCdW5kbGUrKztcbiAgICAgICAgICAgIHRoaXMudG90YWxSZXMgKz0gcmVzUGtnW2tleV0udXJscy5sZW5ndGg7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGtleSBpbiByZXNQa2cpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0QnVuZGxlKGtleSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm93QnVuZGxlKys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm93QnVuZGxlID09PSB0aGlzLnRvdGFsQnVuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwZWNpZmljQXNzZXRJbkJ1bmRsZShyZXNQa2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiDos4fmupDljIXph4vmlL4gKi9cbiAgICBwdWJsaWMgcmVsZWFzZVJlc1BhY2thZ2UocmVzUGtnOiBvYmplY3QpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHJlc1BrZykge1xuICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHJlc1BrZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCB1cmxTZXQgPSByZXNQa2dba2V5XS51cmxzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxTZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVsZWFzZUFzc2V0KHVybFNldFtpXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/Launcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3857dbnYO9CxLkSU/vhK8Ns', 'Launcher');
// scripts/common/Launcher.ts

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
var BRAND = cc.Enum({
    ofa: 0,
});
var Launcher = /** @class */ (function (_super) {
    __extends(Launcher, _super);
    function Launcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.version_pc = "";
        _this.version_mobile = "";
        _this.demoMode = false;
        /** 平台
         *  || 0=ofa
        */
        _this.BRAND = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Launcher.prototype.start = function () {
    };
    Launcher.Instance = null;
    __decorate([
        property(cc.Canvas)
    ], Launcher.prototype, "canvas", void 0);
    __decorate([
        property
    ], Launcher.prototype, "version_pc", void 0);
    __decorate([
        property
    ], Launcher.prototype, "version_mobile", void 0);
    __decorate([
        property
    ], Launcher.prototype, "demoMode", void 0);
    __decorate([
        property({
            type: cc.Enum(BRAND),
            displayName: "Brand"
        })
    ], Launcher.prototype, "BRAND", void 0);
    Launcher = __decorate([
        ccclass
    ], Launcher);
    return Launcher;
}(cc.Component));
exports.default = Launcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxMYXVuY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2xCLEdBQUcsRUFBRSxDQUFDO0NBQ1QsQ0FBQyxDQUFDO0FBR0g7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQ0M7UUE1QlcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixvQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUU1QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWpDOztVQUVFO1FBTUssV0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFXakIsaUJBQWlCO0lBQ3JCLENBQUM7SUFQRyxlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUE1QmEsaUJBQVEsR0FBYSxJQUEyQixDQUFDO0lBRy9EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ2E7SUFFakM7UUFEQyxRQUFRO2dEQUNzQjtJQUUvQjtRQURDLFFBQVE7b0RBQzBCO0lBRW5DO1FBREMsUUFBUTs4Q0FDd0I7SUFVakM7UUFMQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsV0FBVyxFQUFFLE9BQU87U0FDdkIsQ0FBQzsyQ0FFZTtJQXJCQSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUM1QjtJQUFELGVBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBaUNqRDtrQkFqQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBCUkFORCA9IGNjLkVudW0oe1xuICAgIG9mYTogMCxcbn0pO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF1bmNoZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogTGF1bmNoZXIgPSBudWxsIGFzIHVua25vd24gYXMgTGF1bmNoZXI7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FudmFzKVxuICAgIHByaXZhdGUgY2FudmFzOiBjYy5DYW52YXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyB2ZXJzaW9uX3BjOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyB2ZXJzaW9uX21vYmlsZTogc3RyaW5nID0gXCJcIjtcbiAgICBAcHJvcGVydHlcbiAgICBwdWJsaWMgZGVtb01vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKiDlubPlj7BcbiAgICAgKiAgfHwgMD1vZmFcbiAgICAqL1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oQlJBTkQpLFxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCcmFuZFwiXG4gICAgfSlcblxuICAgIHB1YmxpYyBCUkFORCA9IDA7XG5cbiAgICBcblxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/configs/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d1b5kuWDxODIh0gCaqwRWL', 'GameConfig');
// scripts/individual/configs/GameConfig.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5kaXZpZHVhbFxcY29uZmlnc1xcR2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/controllers/LoadPageController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fb66ikDC9KCZKj/emQcLfn', 'LoadPageController');
// scripts/individual/controllers/LoadPageController.ts

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
var LoadPageController = /** @class */ (function (_super) {
    __extends(LoadPageController, _super);
    function LoadPageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LoadPageController.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], LoadPageController.prototype, "label", void 0);
    __decorate([
        property
    ], LoadPageController.prototype, "text", void 0);
    LoadPageController = __decorate([
        ccclass
    ], LoadPageController);
    return LoadPageController;
}(cc.Component));
exports.default = LoadPageController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5kaXZpZHVhbFxcY29udHJvbGxlcnNcXExvYWRQYWdlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLGtDQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDSTtJQUd2QjtRQURDLFFBQVE7b0RBQ2M7SUFOTixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQWlCdEM7SUFBRCx5QkFBQztDQWpCRCxBQWlCQyxDQWpCK0MsRUFBRSxDQUFDLFNBQVMsR0FpQjNEO2tCQWpCb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRQYWdlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/models/UserDataModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42e02M+ldZM/JebwspMzXw+', 'UserDataModel');
// scripts/models/UserDataModel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW9kZWxzXFxVc2VyRGF0YU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/NetMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db6a2FBS1FCRKTU4UkUm/7q', 'NetMgr');
// scripts/common/managers/NetMgr.ts

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
var STATE;
(function (STATE) {
    STATE[STATE["DISCONNECTED"] = 0] = "DISCONNECTED";
    STATE[STATE["CONNECTING"] = 1] = "CONNECTING";
    STATE[STATE["CONNECTED"] = 2] = "CONNECTED"; // 已經連接
})(STATE || (STATE = {}));
;
var PING_TIME = 10000; // 毫秒
var RESPONSE = {};
var NetMgr = /** @class */ (function (_super) {
    __extends(NetMgr, _super);
    function NetMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.socket = null;
        _this.state = STATE.DISCONNECTED;
        _this.serverUrl = '220.132.92.44:8089';
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NetMgr.prototype.start = function () {
        console.log('NetMgr loaded.');
        this.socket = window['io'].connect(this.serverUrl, { transports: ['websocket'] });
    };
    NetMgr = __decorate([
        ccclass
    ], NetMgr);
    return NetMgr;
}(cc.Component));
exports.default = NetMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxtYW5hZ2Vyc1xcTmV0TWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssS0FJSjtBQUpELFdBQUssS0FBSztJQUNOLGlEQUFnQixDQUFBO0lBQ2hCLDZDQUFjLENBQUE7SUFDZCwyQ0FBWSxDQUFBLENBQVEsT0FBTztBQUMvQixDQUFDLEVBSkksS0FBSyxLQUFMLEtBQUssUUFJVDtBQUFBLENBQUM7QUFFRixJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBRSxLQUFLO0FBRS9CLElBQU0sUUFBUSxHQUFHLEVBRWhCLENBQUM7QUFHRjtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWVDO1FBYlcsWUFBTSxHQUFxQixJQUFJLENBQUM7UUFDakMsV0FBSyxHQUFXLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDbEMsZUFBUyxHQUFHLG9CQUFvQixDQUFDOztRQVV6QyxpQkFBaUI7SUFDckIsQ0FBQztJQVJHLGVBQWU7SUFFZixzQkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBRSxDQUFDO0lBQ3RGLENBQUM7SUFaZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWUxQjtJQUFELGFBQUM7Q0FmRCxBQWVDLENBZm1DLEVBQUUsQ0FBQyxTQUFTLEdBZS9DO2tCQWZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBTVEFURSB7XG4gICAgRElTQ09OTkVDVEVEID0gMCwgICAvLyDmlrfplovpgKPmjqVcbiAgICBDT05ORUNUSU5HID0gMSwgICAgIC8vIOato+WcqOmAo+aOpVxuICAgIENPTk5FQ1RFRCA9MiAgICAgICAgLy8g5bey57aT6YCj5o6lXG59O1xuXG5jb25zdCBQSU5HX1RJTUUgPSAxMDAwMDsgIC8vIOavq+enklxuXG5jb25zdCBSRVNQT05TRSA9IHtcblxufTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldE1nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHNvY2tldDogV2ViU29ja2V0IHwgbnVsbCA9IG51bGw7XG4gICAgcHVibGljIHN0YXRlOiBudW1iZXIgPSBTVEFURS5ESVNDT05ORUNURUQ7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSAnMjIwLjEzMi45Mi40NDo4MDg5JztcblxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOZXRNZ3IgbG9hZGVkLicpO1xuICAgICAgICB0aGlzLnNvY2tldCA9IHdpbmRvd1snaW8nXS5jb25uZWN0KHRoaXMuc2VydmVyVXJsLCB7IHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J119ICk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/API_Mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c1dab8n5FBhb9apK0m/YD+', 'API_Mgr');
// scripts/common/managers/API_Mgr.ts

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
var API_Mgr = /** @class */ (function (_super) {
    __extends(API_Mgr, _super);
    function API_Mgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    API_Mgr.prototype.onLoad = function () { };
    API_Mgr.prototype.start = function () {
    };
    API_Mgr = __decorate([
        ccclass
    ], API_Mgr);
    return API_Mgr;
}(cc.Component));
exports.default = API_Mgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxtYW5hZ2Vyc1xcQVBJX01nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDs7SUFVQSxDQUFDO0lBUEcsd0JBQU0sR0FBTixjQUFXLENBQUM7SUFFWix1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVBnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBVTNCO0lBQUQsY0FBQztDQVZELEFBVUMsQ0FWb0MsRUFBRSxDQUFDLFNBQVMsR0FVaEQ7a0JBVm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJX01nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/ViewMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e4bby3bcJDLJEWUEZu6FbN', 'ViewMgr');
// scripts/managers/ViewMgr.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFuYWdlcnNcXFZpZXdNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/configs/NetworkConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '098296wKT1Nu7068Z+AEVgP', 'NetworkConfig');
// scripts/individual/configs/NetworkConfig.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5kaXZpZHVhbFxcY29uZmlnc1xcTmV0d29ya0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/views/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfd21OEBvNErYY9rbKiX9sZ', 'GameView');
// scripts/views/GameView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld3NcXEdhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/UI_Mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7eacakWan1O55cpKIrfLBEU', 'UI_Mgr');
// scripts/common/managers/UI_Mgr.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxtYW5hZ2Vyc1xcVUlfTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/controllers/ResourcesController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd971bNYSBdN57HIgC/QbNQJ', 'ResourcesController');
// scripts/single/controllers/ResourcesController.ts

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
var ResourcesController = /** @class */ (function (_super) {
    __extends(ResourcesController, _super);
    function ResourcesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    ResourcesController.prototype.start = function () {
    };
    ResourcesController = __decorate([
        ccclass
    ], ResourcesController);
    return ResourcesController;
}(cc.Component));
exports.default = ResourcesController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luZ2xlXFxjb250cm9sbGVyc1xcUmVzb3VyY2VzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDs7SUFVQSxDQUFDO0lBUEcsZUFBZTtJQUVmLG1DQUFLLEdBQUw7SUFFQSxDQUFDO0lBUGdCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBVXZDO0lBQUQsMEJBQUM7Q0FWRCxBQVVDLENBVmdELEVBQUUsQ0FBQyxTQUFTLEdBVTVEO2tCQVZvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb3VyY2VzQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/models/TableDataModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '477a8t5PlJOO6CrJFe+8chw', 'TableDataModel');
// scripts/individual/models/TableDataModel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5kaXZpZHVhbFxcbW9kZWxzXFxUYWJsZURhdGFNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/single/controllers/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cc22yuDfRFLpsy7+/b/pva', 'GameController');
// scripts/single/controllers/GameController.ts

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
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
    };
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luZ2xlXFxjb250cm9sbGVyc1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBWUEsQ0FBQztJQVRHLCtCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQVlsQztJQUFELHFCQUFDO0NBWkQsQUFZQyxDQVoyQyxFQUFFLENBQUMsU0FBUyxHQVl2RDtrQkFab0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/AudioMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38f8fRCYVVPdI2iNfu2KOT3', 'AudioMgr');
// scripts/common/managers/AudioMgr.ts

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
var EventMgr_1 = require("./EventMgr");
var I18nMgr_1 = require("./I18nMgr");
var ResourcesMgr_1 = require("./ResourcesMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FSX_NUM = 33;
var AudioMgr = /** @class */ (function (_super) {
    __extends(AudioMgr, _super);
    function AudioMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xhr = null;
        _this.isBgmMute = false;
        _this.isFsxMute = false;
        _this.isVideoSoundMute = false;
        _this.bgmVolume = 1;
        _this.fsxVolume = 1;
        _this.bgmAudioSource = null;
        _this.fsxAudioSource = [];
        _this.currentAudioSource = 0;
        /** 當前桌號 */
        _this.tableId = null;
        /** HTML聲音元素 */
        _this.audioElement = null;
        /** 現正播放中歌曲index */
        // private nowRandomIndex = null;
        // private nowRandomIndex = 1;
        _this.nowRandomIndex = 0;
        /** 現正播放歌曲Index */
        _this.nowPlayingIndex = 0;
        /** bgm最大數量 */
        _this.maxBgm = null;
        /** 儲存當前傳來的預設音樂列表 */
        _this.DefaultPlaylist = [];
        /** 儲存當前客製化音樂列表 */
        _this.CustomPlaylist = [];
        /** 儲存localhost裡的音樂列表 */
        _this.LocalPlaylist = [];
        // 音樂播放器功能變數
        _this.isLoopSingle = false;
        // private isLoopWhole: boolean = true;
        _this.isShuffle = false;
        _this.bannedSongs = {};
        /** 播放器是否暫停中 */
        _this.isPlaying = true;
        // --------------------------------------------------------------------------
        /** 有在demo自定義裡Type裡的音效檔案名稱 */
        _this.customTypeList = [];
        /** 當前音效組類型 0=預設 */
        _this.currentFsxType = 0;
        // --------------------------------------------------------------------------
        _this.EventMap = {
            "audio_tableId": _this.onAudioTableId,
            "res_get_music": _this.onGetServerMusicLists,
            "change_bgm_mute": _this.onChangeBgmMute,
            // "change_fsx_mute": this.onChangeFsxMute,
            "comp_get_music": _this.onCompGetPlayList,
            "music_player_play": _this.onPlaySong,
            "music_player_pause": _this.onPauseSong,
            "music_player_next_song": _this.onNextSong,
            "music_player_prev_song": _this.onPrevSong,
            "music_player_change_status": _this.onChangePlayingStatus,
            "music_player_toggle_song": _this.onToggleSong,
            "sys:fsx_mute": _this.onChangeFsxMute,
            "sys:video_sound_mute": _this.onChangeVideoSoundMute,
        };
        return _this;
    }
    AudioMgr_1 = AudioMgr;
    // -------------------------------------------------------------------------------------
    AudioMgr.prototype.onLoad = function () {
        if (AudioMgr_1.Instance === null) {
            AudioMgr_1.Instance = this;
        }
        else {
            cc.error("[error:] audio mgr has multi instances!!!");
            this.destroy();
            console.log("[fix:] audio mgr has been destroyed.");
            return;
        }
        ;
        this.init();
    };
    AudioMgr.prototype.start = function () {
        var _this = this;
        for (var key in this.EventMap) {
            EventMgr_1.default.Instance.addEventListener(key, this, this.EventMap[key]);
        }
        ;
        this.audioElement.onended = function () {
            _this.onBgmEnded();
        };
        this.create();
    };
    AudioMgr.prototype.onDestroy = function () {
        for (var key in this.EventMap) {
            EventMgr_1.default.Instance.removeEventListener(key, this, this.EventMap[key]);
        }
        ;
    };
    AudioMgr.prototype.init = function () {
        // HTML audio元素
        this.audioElement = document.getElementById("audio");
        if (!this.audioElement) {
            this.audioElement = document.createElement("audio");
        }
        ;
        // 讀取本地的參數
        if (!localStorage.getItem("meta:baccarat:bgm_mute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("meta:baccarat:bgm_mute", JSON.stringify(this.isBgmMute));
        }
        else {
            var localItem = localStorage.getItem("meta:baccarat:bgm_mute");
            this.isBgmMute = JSON.parse(localItem);
        }
        ;
        // 遊戲音效
        if (!localStorage.getItem("meta:baccarat:fsx_mute")) {
            this.isFsxMute = this.isFsxMute;
            localStorage.setItem("meta:baccarat:fsx_mute", JSON.stringify(this.isFsxMute));
        }
        else {
            var localItem = localStorage.getItem("meta:baccarat:fsx_mute");
            this.isFsxMute = JSON.parse(localItem);
        }
        ;
        // console.log("mute?", this.isFsxMute);
        // 視訊音效
        if (!localStorage.getItem("meta:baccarat:video_sound_mute")) {
            this.isVideoSoundMute = this.isVideoSoundMute;
            localStorage.setItem("meta:baccarat:video_sound_mute", JSON.stringify(this.isVideoSoundMute));
        }
        else {
            var localItem = localStorage.getItem("meta:baccarat:video_sound_mute");
            this.isVideoSoundMute = JSON.parse(localItem);
        }
        ;
        //
        this.bgmAudioSource = this.node.addComponent(cc.AudioSource);
        this.bgmAudioSource.volume = this.bgmVolume;
        for (var i = 0; i < FSX_NUM; i++) {
            var as = this.node.addComponent(cc.AudioSource);
            as.volume = this.fsxVolume;
            if (this.isFsxMute) {
                as.mute = true;
            }
            ;
            this.fsxAudioSource.push(as);
        }
        ;
        //
        this.currentAudioSource = 0;
        //
        var isPlayingLocalData = localStorage.getItem("meta:baccarat:is_playing");
        if (!isPlayingLocalData) {
            this.isPlaying = true;
            localStorage.setItem("meta:baccarat:is_playing", JSON.stringify(this.isPlaying));
        }
        else if (isPlayingLocalData) {
            this.isPlaying = JSON.parse(isPlayingLocalData);
        }
        ;
    };
    AudioMgr.prototype.create = function () {
        // 初始化播放器設定狀態
        var settingsLocalData = JSON.parse(localStorage.getItem("musicPlayerSettings"));
        if (!settingsLocalData) {
            this.isLoopSingle = false;
            // this.isLoopWhole = true;
            this.isShuffle = false;
        }
        else if (settingsLocalData) {
            this.isLoopSingle = settingsLocalData["isLoopSingle"];
            // this.isLoopWhole = localData["isLoopWhole"];
            this.isShuffle = settingsLocalData["isShuffle"];
        }
        ;
        if (this.isBgmMute) {
            this.audioElement.volume = 0.0;
        }
        else if (!this.isBgmMute) {
            this.audioElement.volume = 1.0;
        }
        ;
    };
    /** 取得音樂列表 */
    AudioMgr.prototype.getServerMusicLists = function () {
        // 照介面語系取
        var customLang = "";
        var nowLanguage = I18nMgr_1.default.Instance.nowLanguage;
        if (nowLanguage == "zh_tw") {
            customLang = "zh-tw";
        }
        else if (nowLanguage == "zh_cn") {
            customLang = "zh-cn";
        }
        else {
            customLang = nowLanguage;
        }
        ;
    };
    /** 監聽取得音樂列表資料 */
    AudioMgr.prototype.onGetServerMusicLists = function (eventName, data) {
        var _this = this;
        // console.log("獲取音樂列表: ", data);
        var list = data["data"];
        this.DefaultPlaylist = list;
        this.CustomPlaylist = [];
        //
        var songsStatusLocalData = JSON.parse(localStorage.getItem("songsStatus"));
        if (!songsStatusLocalData) {
            this.CustomPlaylist = this.DefaultPlaylist;
            this.DefaultPlaylist.forEach(function (item) {
                item["active"] = true;
            });
            this.CustomPlaylist.forEach(function (item) {
                item["active"] = true;
            });
            localStorage.setItem("songsStatus", JSON.stringify(this.DefaultPlaylist));
        }
        // 對比資料音樂清單與local音樂清單, 交叉比對出客製化播放清單 (customPlaylist)
        else if (songsStatusLocalData) {
            this.DefaultPlaylist.forEach(function (item) {
                item["active"] = true;
            });
            this.DefaultPlaylist.forEach(function (item) {
                var hasSet = false;
                songsStatusLocalData.forEach(function (local) {
                    if (item["name"] == local["name"]) {
                        hasSet = true;
                        item["active"] = local["active"];
                    }
                    ;
                });
                if (!hasSet) {
                    songsStatusLocalData.push(item);
                }
                ;
                if (item["active"]) {
                    _this.CustomPlaylist.push(item);
                }
                ;
            });
            localStorage.setItem("songsStatus", JSON.stringify(songsStatusLocalData));
            // console.log("###CustomPlaylist: ", this.CustomPlaylist);
        }
        ;
    };
    AudioMgr.prototype.getBgmMute = function () {
        return this.isBgmMute;
    };
    AudioMgr.prototype.setBgmMute = function (mute) {
        var value = (mute) ? true : false;
        if (this.isBgmMute == value) {
            return;
        }
        ;
        this.isBgmMute = value;
        if (this.isBgmMute) {
            // this.bgmAudioSource.mute = true;
            // this.audioElement.volume = 0;
            console.log("[Audio Mgr]: ", "mute:", this.audioElement.volume);
            // this.audioElement.pause();
            this.audioElement.volume = 0.0;
        }
        else {
            // this.bgmAudioSource.mute = false;
            // this.audioElement.volume = 1;
            console.log("[Audio Mgr]: ", "not mute:", this.audioElement.volume);
            // this.audioElement.play();
            this.audioElement.volume = 1.0;
        }
        ;
        localStorage.setItem("meta:baccarat:bgm_mute", JSON.stringify(value));
    };
    AudioMgr.prototype.getFsxVolume = function () {
        return this.fsxVolume;
    };
    AudioMgr.prototype.setFsxVolume = function (value) {
        for (var i = 0; i < this.fsxAudioSource.length; i++) {
            this.fsxAudioSource[i].volume = value;
        }
        this.fsxVolume = value;
        localStorage.setItem("fsxVolume", JSON.stringify(value));
    };
    AudioMgr.prototype.getFsxMute = function () {
        return this.isFsxMute;
    };
    AudioMgr.prototype.setFsxMute = function (mute) {
        var _this = this;
        var value = (mute) ? true : false;
        if (this.isFsxMute == value) {
            return;
        }
        ;
        this.isFsxMute = value;
        this.fsxAudioSource.forEach(function (as) {
            if (_this.isFsxMute) {
                as.mute = true;
            }
            else {
                as.mute = false;
            }
            ;
        });
        localStorage.setItem("meta:baccarat:fsx_mute", JSON.stringify(value));
    };
    AudioMgr.prototype.getVideoSoundMute = function () {
        return this.isFsxMute;
    };
    AudioMgr.prototype.setVideoSoundMute = function (mute) {
        var value = (mute) ? true : false;
        if (this.isVideoSoundMute == value) {
            return;
        }
        ;
        this.isVideoSoundMute = value;
        localStorage.setItem("meta:baccarat:video_sound_mute", JSON.stringify(value));
    };
    AudioMgr.prototype.playBgm = function (url, loop) {
        loop = (loop) ? true : false;
        this.bgmAudioSource.loop = loop;
        this.bgmAudioSource.clip = ResourcesMgr_1.default.Instance.getAsset("audio", url);
        if (this.bgmAudioSource.clip) {
            this.bgmAudioSource.play();
        }
        else {
            cc.error("music audio clip null: ", url);
        }
        ;
    };
    /** 監聽每桌入桌播放bgm */
    AudioMgr.prototype.onAudioTableId = function (eventName, data) {
        this.tableId = data;
    };
    /** 播放網頁音樂(html+url) */
    AudioMgr.prototype.playWebBgm = function () {
        if (this.CustomPlaylist.length == 0) {
            return;
        }
        ;
        // 重置url
        this.audioElement.src = "";
        // 讀取本地的參數
        if (!localStorage.getItem("isBgmMute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("isBgmMute", JSON.stringify(this.isBgmMute));
        }
        else {
            var localItem = localStorage.getItem("isBgmMute");
            this.isBgmMute = JSON.parse(localItem);
        }
        ;
        //
        var bgmUrl = this.CustomPlaylist[0].url;
        console.log("[Audio Mgr]: ", "bgmUrl:", bgmUrl);
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    AudioMgr.prototype.randomSelectBgm = function () {
        // let windowConfig = window["TableBgmMax"];
        // this.maxBgm = windowConfig[this.tableId];
        this.maxBgm = this.CustomPlaylist.length - 1;
        var randomIndex = Math.floor((Math.random() * this.maxBgm));
        if (!this.nowPlayingIndex) {
            this.nowPlayingIndex = randomIndex;
        }
        else if (this.nowPlayingIndex) {
            // 如果跟上一首一樣
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            }
            else {
                if (this.nowPlayingIndex == randomIndex) {
                    if (this.nowPlayingIndex == this.maxBgm) {
                        this.nowPlayingIndex = randomIndex - 1;
                    }
                    else {
                        this.nowPlayingIndex = randomIndex + 1;
                    }
                    ;
                }
                // 跟上一首不一樣
                else {
                    this.nowPlayingIndex = randomIndex;
                }
                ;
            }
            ;
        }
        ;
        var selected = this.CustomPlaylist[this.nowPlayingIndex].url;
        return selected;
    };
    AudioMgr.prototype.onBgmEnded = function () {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        // 重置url
        this.audioElement.src = "";
        // 讀取本地的參數
        if (!localStorage.getItem("isBgmMute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("isBgmMute", JSON.stringify(this.isBgmMute));
        }
        else {
            var localItem = localStorage.getItem("isBgmMute");
            this.isBgmMute = JSON.parse(localItem);
        }
        ;
        //
        // let bgmUrl = this.randomSelectBgm();
        var bgmUrl;
        if (this.isLoopSingle) {
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
            ;
        }
        else if (!this.isLoopSingle) {
            // 有開隨機
            if (this.isShuffle) {
                bgmUrl = this.randomSelectBgm();
                // console.log("bgmUrl: ", bgmUrl);
            }
            // 沒開隨機
            else if (!this.isShuffle) {
                // 如果只有一首
                if (this.CustomPlaylist.length == 1) {
                    this.nowPlayingIndex = this.nowPlayingIndex;
                }
                // 如果有多首
                else {
                    this.nowPlayingIndex += 1;
                    var length = this.CustomPlaylist.length - 1;
                    this.nowPlayingIndex = (this.nowPlayingIndex > length) ? 0 : this.nowPlayingIndex;
                }
                ;
                bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
            }
            ;
        }
        ;
        console.log("[Audio Mgr]: ", "bgmUrl:", bgmUrl);
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    AudioMgr.prototype.stopBgm = function () {
        this.bgmAudioSource.stop();
    };
    /** 停止網頁播放音樂 */
    AudioMgr.prototype.stopWebBgm = function () {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.audioElement.src = "";
    };
    /** 播放音效 */
    AudioMgr.prototype.playFsx = function (url) {
        var as = this.fsxAudioSource[this.currentAudioSource];
        this.currentAudioSource++;
        if (this.currentAudioSource >= FSX_NUM) {
            this.currentAudioSource = 0;
        }
        ;
        as.clip = ResourcesMgr_1.default.Instance.getAsset("audio_fsx", url);
        if (as.clip) {
            as.play();
        }
        else {
            cc.error("effect audio clip null: ", url);
        }
        ;
    };
    /** 播放語音 */
    AudioMgr.prototype.playVoice = function (url) {
        var as = this.fsxAudioSource[this.currentAudioSource];
        this.currentAudioSource++;
        if (this.currentAudioSource >= FSX_NUM) {
            this.currentAudioSource = 0;
        }
        ;
        as.clip = ResourcesMgr_1.default.Instance.getAsset("audio_voice_" + I18nMgr_1.default.Instance.nowLanguage, url);
        if (as.clip) {
            as.play();
        }
        else {
            cc.error("effect audio clip null: ", url);
        }
        ;
    };
    /** 監聽組件取得現在歌單 */
    AudioMgr.prototype.onCompGetPlayList = function (eventName, data) {
        EventMgr_1.default.Instance.dispatchEvent("comp_dispatch_music", this.DefaultPlaylist);
    };
    /** 監聽改變播放模式(循環/隨機)) */
    AudioMgr.prototype.onChangePlayingStatus = function (eventName, data) {
        this.isLoopSingle = data["isLoopSingle"];
        this.isShuffle = data["isShuffle"];
        var set = {
            isLoopSingle: this.isLoopSingle,
            isShuffle: this.isShuffle
        };
        localStorage.setItem("musicPlayerSettings", JSON.stringify(set));
    };
    /** 監聽開始播放音樂 */
    AudioMgr.prototype.onPlaySong = function (eventName, data) {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        var bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    /** 監聽暫停播放音樂 */
    AudioMgr.prototype.onPauseSong = function (eventName, data) {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        this.isPlaying = false;
        localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        this.audioElement.pause();
    };
    /** 監聽播放下一首 */
    AudioMgr.prototype.onNextSong = function (eventName, data) {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        var bgmUrl;
        if (this.isShuffle) {
            bgmUrl = this.randomSelectBgm();
        }
        else if (!this.isShuffle) {
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            }
            else {
                this.nowPlayingIndex += 1;
                var length = this.CustomPlaylist.length - 1;
                this.nowPlayingIndex = (this.nowPlayingIndex > length) ? 0 : this.nowPlayingIndex;
            }
            ;
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        }
        ;
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    /** 監聽播放前一首 */
    AudioMgr.prototype.onPrevSong = function (eventName, data) {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        var bgmUrl;
        if (this.isShuffle) {
            bgmUrl = this.randomSelectBgm();
        }
        else if (!this.isShuffle) {
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            }
            else {
                this.nowPlayingIndex -= 1;
                this.nowPlayingIndex = (this.nowPlayingIndex < 0) ? (this.CustomPlaylist.length - 1) : this.nowPlayingIndex;
            }
            ;
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        }
        ;
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    /** 監聽開啟/關閉選歌 */
    AudioMgr.prototype.onToggleSong = function (eventName, data) {
        var _this = this;
        var dataName = data["name"];
        var dataActive = data["active"];
        var localCustomPlaylist = JSON.parse(localStorage.getItem("songsStatus"));
        //
        if (dataActive) {
            // 從DefaultList裡去遍歷並push到選中的該song到custom list
            this.DefaultPlaylist.forEach(function (item) {
                if (item["name"] == dataName) {
                    item["active"] = true;
                    _this.CustomPlaylist.push(item);
                }
                ;
                localCustomPlaylist.forEach(function (local) {
                    if (item["name"] == local["name"]) {
                        local["active"] = item["active"];
                    }
                    ;
                });
            });
        }
        else if (!dataActive) {
            // 從Custom list裡去遍歷到選中的song, slice掉
            for (var i = 0; i < this.CustomPlaylist.length; i++) {
                var item = this.CustomPlaylist[i];
                if (item.name == dataName) {
                    this.CustomPlaylist.splice(i, 1);
                }
                ;
            }
            ;
            //
            this.DefaultPlaylist.forEach(function (item) {
                if (item["name"] == dataName) {
                    item["active"] = false;
                }
                ;
                localCustomPlaylist.forEach(function (local) {
                    if (item["name"] == local["name"]) {
                        local["active"] = item["active"];
                    }
                    ;
                });
            });
        }
        ;
        //
        localStorage.setItem("songsStatus", JSON.stringify(localCustomPlaylist));
    };
    // --------------------------------------------------------------------------------------
    AudioMgr.prototype.onChangeBgmMute = function (eventName, data) {
        this.setBgmMute(data);
    };
    AudioMgr.prototype.onChangeFsxMute = function (eventName, data) {
        this.setFsxMute(data);
    };
    AudioMgr.prototype.onChangeVideoSoundMute = function (eventName, data) {
        this.setVideoSoundMute(data);
    };
    var AudioMgr_1;
    AudioMgr.Instance = null;
    AudioMgr = AudioMgr_1 = __decorate([
        ccclass
    ], AudioMgr);
    return AudioMgr;
}(cc.Component));
exports.default = AudioMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxtYW5hZ2Vyc1xcQXVkaW9NZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLHFDQUFnQztBQUNoQywrQ0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBR2pCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcXFCQztRQWhxQlcsU0FBRyxHQUFHLElBQUksQ0FBQztRQUVYLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUN0QyxvQkFBYyxHQUEwQixFQUFFLENBQUM7UUFDM0Msd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBRXZDLFdBQVc7UUFDSCxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQWU7UUFDUixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixtQkFBbUI7UUFDbkIsaUNBQWlDO1FBQ2pDLDhCQUE4QjtRQUN0QixvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUMzQixrQkFBa0I7UUFDVixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUc1QixjQUFjO1FBQ04sWUFBTSxHQUFHLElBQUksQ0FBQztRQUV0QixvQkFBb0I7UUFDYixxQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUM1QixrQkFBa0I7UUFDVixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFDaEIsbUJBQWEsR0FBRyxFQUFFLENBQUM7UUFHM0IsWUFBWTtRQUNMLGtC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RSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBSUQseUZBQXlGO0lBQ2pGLGtDQUFlLEdBQXZCLFVBQXdCLFNBQVMsRUFBRSxJQUFJO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLGtDQUFlLEdBQXZCLFVBQXdCLFNBQVMsRUFBRSxJQUFJO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLHlDQUFzQixHQUE5QixVQUErQixTQUFTLEVBQUUsSUFBSTtRQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUFqcUJhLGlCQUFRLEdBQWEsSUFBSSxDQUFDO0lBSHZCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxcUI1QjtJQUFELGVBQUM7Q0FycUJELEFBcXFCQyxDQXJxQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcXFCakQ7a0JBcnFCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudE1nciBmcm9tIFwiLi9FdmVudE1nclwiO1xuaW1wb3J0IEkxOG5NZ3IgZnJvbSBcIi4vSTE4bk1nclwiO1xuaW1wb3J0IFJlc01nciBmcm9tIFwiLi9SZXNvdXJjZXNNZ3JcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbnZhciBGU1hfTlVNID0gMzM7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEF1ZGlvTWdyID0gbnVsbDtcblxuICAgIHByaXZhdGUgeGhyID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNCZ21NdXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0ZzeE11dGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzVmlkZW9Tb3VuZE11dGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGJnbVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGZzeFZvbHVtZTogbnVtYmVyID0gMTtcblxuICAgIHByaXZhdGUgYmdtQXVkaW9Tb3VyY2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcbiAgICBwcml2YXRlIGZzeEF1ZGlvU291cmNlOiBBcnJheTxjYy5BdWRpb1NvdXJjZT4gPSBbXTtcbiAgICBwcml2YXRlIGN1cnJlbnRBdWRpb1NvdXJjZTogbnVtYmVyID0gMDtcblxuICAgIC8qKiDnlbbliY3moYzomZ8gKi9cbiAgICBwcml2YXRlIHRhYmxlSWQgPSBudWxsO1xuICAgIC8qKiBIVE1M6IGy6Z+z5YWD57SgICovXG4gICAgcHVibGljIGF1ZGlvRWxlbWVudCA9IG51bGw7XG4gICAgLyoqIOePvuato+aSreaUvuS4reatjOabsmluZGV4ICovXG4gICAgLy8gcHJpdmF0ZSBub3dSYW5kb21JbmRleCA9IG51bGw7XG4gICAgLy8gcHJpdmF0ZSBub3dSYW5kb21JbmRleCA9IDE7XG4gICAgcHJpdmF0ZSBub3dSYW5kb21JbmRleCA9IDA7XG4gICAgLyoqIOePvuato+aSreaUvuatjOabskluZGV4ICovXG4gICAgcHJpdmF0ZSBub3dQbGF5aW5nSW5kZXggPSAwO1xuXG5cbiAgICAvKiogYmdt5pyA5aSn5pW46YePICovXG4gICAgcHJpdmF0ZSBtYXhCZ20gPSBudWxsO1xuXG4gICAgLyoqIOWEsuWtmOeVtuWJjeWCs+S+hueahOmgkOioremfs+aoguWIl+ihqCAqLyBcbiAgICBwdWJsaWMgRGVmYXVsdFBsYXlsaXN0ID0gW107XG4gICAgLyoqIOWEsuWtmOeVtuWJjeWuouijveWMlumfs+aoguWIl+ihqCAqL1xuICAgIHByaXZhdGUgQ3VzdG9tUGxheWxpc3QgPSBbXTtcbiAgICAvKiog5YSy5a2YbG9jYWxob3N06KOh55qE6Z+z5qiC5YiX6KGoICovXG4gICAgcHJpdmF0ZSBMb2NhbFBsYXlsaXN0ID0gW107XG5cblxuICAgIC8vIOmfs+aoguaSreaUvuWZqOWKn+iDveiuiuaVuFxuICAgIHB1YmxpYyBpc0xvb3BTaW5nbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBwcml2YXRlIGlzTG9vcFdob2xlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgaXNTaHVmZmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBiYW5uZWRTb25ncyA9IHt9O1xuXG4gICAgLyoqIOaSreaUvuWZqOaYr+WQpuaaq+WBnOS4rSAqL1xuICAgIHB1YmxpYyBpc1BsYXlpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKiDmnInlnKhkZW1v6Ieq5a6a576p6KOhVHlwZeijoeeahOmfs+aViOaqlOahiOWQjeeosSAqL1xuICAgIHByaXZhdGUgY3VzdG9tVHlwZUxpc3QgPSBbXTtcbiAgICAvKiog55W25YmN6Z+z5pWI57WE6aGe5Z6LIDA96aCQ6KitICovXG4gICAgcHJpdmF0ZSBjdXJyZW50RnN4VHlwZTogbnVtYmVyID0gMDtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBFdmVudE1hcCA9IHtcbiAgICAgICAgXCJhdWRpb190YWJsZUlkXCI6IHRoaXMub25BdWRpb1RhYmxlSWQsXG4gICAgICAgIFwicmVzX2dldF9tdXNpY1wiOiB0aGlzLm9uR2V0U2VydmVyTXVzaWNMaXN0cyxcbiAgICAgICAgXCJjaGFuZ2VfYmdtX211dGVcIjogdGhpcy5vbkNoYW5nZUJnbU11dGUsXG4gICAgICAgIC8vIFwiY2hhbmdlX2ZzeF9tdXRlXCI6IHRoaXMub25DaGFuZ2VGc3hNdXRlLFxuICAgICAgICBcImNvbXBfZ2V0X211c2ljXCI6IHRoaXMub25Db21wR2V0UGxheUxpc3QsXG4gICAgICAgIFwibXVzaWNfcGxheWVyX3BsYXlcIjogdGhpcy5vblBsYXlTb25nLFxuICAgICAgICBcIm11c2ljX3BsYXllcl9wYXVzZVwiOiB0aGlzLm9uUGF1c2VTb25nLFxuICAgICAgICBcIm11c2ljX3BsYXllcl9uZXh0X3NvbmdcIjogdGhpcy5vbk5leHRTb25nLFxuICAgICAgICBcIm11c2ljX3BsYXllcl9wcmV2X3NvbmdcIjogdGhpcy5vblByZXZTb25nLFxuICAgICAgICBcIm11c2ljX3BsYXllcl9jaGFuZ2Vfc3RhdHVzXCI6IHRoaXMub25DaGFuZ2VQbGF5aW5nU3RhdHVzLFxuICAgICAgICBcIm11c2ljX3BsYXllcl90b2dnbGVfc29uZ1wiOiB0aGlzLm9uVG9nZ2xlU29uZyxcblxuICAgICAgICBcInN5czpmc3hfbXV0ZVwiOiB0aGlzLm9uQ2hhbmdlRnN4TXV0ZSxcbiAgICAgICAgXCJzeXM6dmlkZW9fc291bmRfbXV0ZVwiOiB0aGlzLm9uQ2hhbmdlVmlkZW9Tb3VuZE11dGUsXG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICAgICAgaWYgKEF1ZGlvTWdyLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltlcnJvcjpdIGF1ZGlvIG1nciBoYXMgbXVsdGkgaW5zdGFuY2VzISEhXCIpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltmaXg6XSBhdWRpbyBtZ3IgaGFzIGJlZW4gZGVzdHJveWVkLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5FdmVudE1hcCkge1xuICAgICAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMsIHRoaXMuRXZlbnRNYXBba2V5XSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQub25lbmRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25CZ21FbmRlZCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5FdmVudE1hcCkge1xuICAgICAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMsIHRoaXMuRXZlbnRNYXBba2V5XSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIC8vIEhUTUwgYXVkaW/lhYPntKBcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICAgICAgICBpZiAoIXRoaXMuYXVkaW9FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDoroDlj5bmnKzlnLDnmoTlj4PmlbhcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6YmdtX211dGVcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCZ21NdXRlID0gdGhpcy5pc0JnbU11dGU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6YmdtX211dGVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc0JnbU11dGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsb2NhbEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6YmdtX211dGVcIik7XG4gICAgICAgICAgICB0aGlzLmlzQmdtTXV0ZSA9IEpTT04ucGFyc2UobG9jYWxJdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6YGK5oiy6Z+z5pWIXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OmZzeF9tdXRlXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmlzRnN4TXV0ZSA9IHRoaXMuaXNGc3hNdXRlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OmZzeF9tdXRlXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNGc3hNdXRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OmZzeF9tdXRlXCIpO1xuICAgICAgICAgICAgdGhpcy5pc0ZzeE11dGUgPSBKU09OLnBhcnNlKGxvY2FsSXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibXV0ZT9cIiwgdGhpcy5pc0ZzeE11dGUpO1xuICAgICAgICAvLyDoppboqIrpn7PmlYhcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6dmlkZW9fc291bmRfbXV0ZVwiKSkge1xuICAgICAgICAgICAgdGhpcy5pc1ZpZGVvU291bmRNdXRlID0gdGhpcy5pc1ZpZGVvU291bmRNdXRlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OnZpZGVvX3NvdW5kX211dGVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1ZpZGVvU291bmRNdXRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OnZpZGVvX3NvdW5kX211dGVcIik7XG4gICAgICAgICAgICB0aGlzLmlzVmlkZW9Tb3VuZE11dGUgPSBKU09OLnBhcnNlKGxvY2FsSXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYmdtQXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcbiAgICAgICAgdGhpcy5iZ21BdWRpb1NvdXJjZS52b2x1bWUgPSB0aGlzLmJnbVZvbHVtZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGU1hfTlVNOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhcyA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICAgICAgYXMudm9sdW1lID0gdGhpcy5mc3hWb2x1bWU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0ZzeE11dGUpIHtcbiAgICAgICAgICAgICAgICBhcy5tdXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmZzeEF1ZGlvU291cmNlLnB1c2goYXMpO1xuICAgICAgICB9O1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpb1NvdXJjZSA9IDA7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCBpc1BsYXlpbmdMb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6aXNfcGxheWluZ1wiKTtcbiAgICAgICAgaWYgKCFpc1BsYXlpbmdMb2NhbERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0YTpiYWNjYXJhdDppc19wbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGF5aW5nTG9jYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IEpTT04ucGFyc2UoaXNQbGF5aW5nTG9jYWxEYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW5pKt5pS+5Zmo6Kit5a6a54uA5oWLXG4gICAgICAgIGxldCBzZXR0aW5nc0xvY2FsRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXNpY1BsYXllclNldHRpbmdzXCIpKTtcbiAgICAgICAgaWYgKCFzZXR0aW5nc0xvY2FsRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5pc0xvb3BTaW5nbGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuaXNMb29wV2hvbGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc1NodWZmbGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nc0xvY2FsRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5pc0xvb3BTaW5nbGUgPSBzZXR0aW5nc0xvY2FsRGF0YVtcImlzTG9vcFNpbmdsZVwiXTtcbiAgICAgICAgICAgIC8vIHRoaXMuaXNMb29wV2hvbGUgPSBsb2NhbERhdGFbXCJpc0xvb3BXaG9sZVwiXTtcbiAgICAgICAgICAgIHRoaXMuaXNTaHVmZmxlID0gc2V0dGluZ3NMb2NhbERhdGFbXCJpc1NodWZmbGVcIl07XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjA7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWUgPSAxLjA7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIOWPluW+l+mfs+aoguWIl+ihqCAqL1xuICAgIHB1YmxpYyBnZXRTZXJ2ZXJNdXNpY0xpc3RzKCk6IHZvaWQge1xuICAgICAgICAvLyDnhafku4vpnaLoqp7ns7vlj5ZcbiAgICAgICAgbGV0IGN1c3RvbUxhbmcgPSBcIlwiO1xuICAgICAgICBsZXQgbm93TGFuZ3VhZ2UgPSBJMThuTWdyLkluc3RhbmNlLm5vd0xhbmd1YWdlO1xuICAgICAgICBpZiAobm93TGFuZ3VhZ2UgPT0gXCJ6aF90d1wiKSB7XG4gICAgICAgICAgICBjdXN0b21MYW5nID0gXCJ6aC10d1wiXG4gICAgICAgIH0gZWxzZSBpZiAobm93TGFuZ3VhZ2UgPT0gXCJ6aF9jblwiKSB7XG4gICAgICAgICAgICBjdXN0b21MYW5nID0gXCJ6aC1jblwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXN0b21MYW5nID0gbm93TGFuZ3VhZ2U7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIOebo+iBveWPluW+l+mfs+aoguWIl+ihqOizh+aWmSAqL1xuICAgIHB1YmxpYyBvbkdldFNlcnZlck11c2ljTGlzdHMoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi542y5Y+W6Z+z5qiC5YiX6KGoOiBcIiwgZGF0YSk7XG4gICAgICAgIGxldCBsaXN0ID0gZGF0YVtcImRhdGFcIl07XG4gICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0ID0gbGlzdDtcbiAgICAgICAgdGhpcy5DdXN0b21QbGF5bGlzdCA9IFtdO1xuICAgICAgICAvL1xuICAgICAgICBsZXQgc29uZ3NTdGF0dXNMb2NhbERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29uZ3NTdGF0dXNcIikpO1xuICAgICAgICBpZiAoIXNvbmdzU3RhdHVzTG9jYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLkN1c3RvbVBsYXlsaXN0ID0gdGhpcy5EZWZhdWx0UGxheWxpc3Q7XG5cbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbVtcImFjdGl2ZVwiXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5DdXN0b21QbGF5bGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJhY3RpdmVcIl0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic29uZ3NTdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5EZWZhdWx0UGxheWxpc3QpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlsI3mr5Tos4fmlpnpn7PmqILmuIXllq7oiIdsb2NhbOmfs+aogua4heWWriwg5Lqk5Y+J5q+U5bCN5Ye65a6i6KO95YyW5pKt5pS+5riF5ZauIChjdXN0b21QbGF5bGlzdClcbiAgICAgICAgZWxzZSBpZiAoc29uZ3NTdGF0dXNMb2NhbERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbVtcImFjdGl2ZVwiXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0LmZvckVhY2ggKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBoYXNTZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzb25nc1N0YXR1c0xvY2FsRGF0YS5mb3JFYWNoKGxvY2FsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdID09IGxvY2FsW1wibmFtZVwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJhY3RpdmVcIl0gPSBsb2NhbFtcImFjdGl2ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1NldCkge1xuICAgICAgICAgICAgICAgICAgICBzb25nc1N0YXR1c0xvY2FsRGF0YS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJhY3RpdmVcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DdXN0b21QbGF5bGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb25nc1N0YXR1c1wiLCBKU09OLnN0cmluZ2lmeShzb25nc1N0YXR1c0xvY2FsRGF0YSkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIjIyNDdXN0b21QbGF5bGlzdDogXCIsIHRoaXMuQ3VzdG9tUGxheWxpc3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG5cbiAgICBwdWJsaWMgZ2V0QmdtTXV0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNCZ21NdXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCZ21NdXRlKG11dGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKG11dGUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0JnbU11dGUgPT0gdmFsdWUpIHsgcmV0dXJuOyB9O1xuXG4gICAgICAgIHRoaXMuaXNCZ21NdXRlID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmlzQmdtTXV0ZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5iZ21BdWRpb1NvdXJjZS5tdXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltBdWRpbyBNZ3JdOiBcIiwgXCJtdXRlOlwiLCB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWUpO1xuICAgICAgICAgICAgLy8gdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuMDtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzLmJnbUF1ZGlvU291cmNlLm11dGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZSA9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltBdWRpbyBNZ3JdOiBcIiwgXCJub3QgbXV0ZTpcIiwgdGhpcy5hdWRpb0VsZW1lbnQudm9sdW1lKTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZSA9IDEuMDtcbiAgICAgICAgfTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6YmdtX211dGVcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RnN4Vm9sdW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmZzeFZvbHVtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RnN4Vm9sdW1lKHZhbHVlKTogdm9pZCB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmZzeEF1ZGlvU291cmNlLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgdGhpcy5mc3hBdWRpb1NvdXJjZVtpXS52b2x1bWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnN4Vm9sdW1lID0gdmFsdWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnN4Vm9sdW1lXCIsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZzeE11dGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRnN4TXV0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RnN4TXV0ZShtdXRlOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gKG11dGUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0ZzeE11dGUgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlzRnN4TXV0ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZzeEF1ZGlvU291cmNlLmZvckVhY2goYXMgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGc3hNdXRlKSB7XG4gICAgICAgICAgICAgICAgYXMubXV0ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFzLm11dGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0YTpiYWNjYXJhdDpmc3hfbXV0ZVwiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWaWRlb1NvdW5kTXV0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGc3hNdXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWaWRlb1NvdW5kTXV0ZShtdXRlOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gKG11dGUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc1ZpZGVvU291bmRNdXRlID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pc1ZpZGVvU291bmRNdXRlID0gdmFsdWU7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OnZpZGVvX3NvdW5kX211dGVcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheUJnbSh1cmwsIGxvb3ApIHtcbiAgICAgICAgbG9vcCA9IChsb29wKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5iZ21BdWRpb1NvdXJjZS5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5iZ21BdWRpb1NvdXJjZS5jbGlwID0gUmVzTWdyLkluc3RhbmNlLmdldEFzc2V0KFwiYXVkaW9cIiwgdXJsKTtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9Tb3VyY2UuY2xpcCkge1xuICAgICAgICAgICAgdGhpcy5iZ21BdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIm11c2ljIGF1ZGlvIGNsaXAgbnVsbDogXCIsIHVybCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIOebo+iBveavj+ahjOWFpeahjOaSreaUvmJnbSAqL1xuICAgIHB1YmxpYyBvbkF1ZGlvVGFibGVJZChldmVudE5hbWUsIGRhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YWJsZUlkID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKiog5pKt5pS+57ay6aCB6Z+z5qiCKGh0bWwrdXJsKSAqL1xuICAgIHB1YmxpYyBwbGF5V2ViQmdtKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5DdXN0b21QbGF5bGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICAvLyDph43nva51cmxcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuc3JjID0gXCJcIjtcbiAgICAgICAgLy8g6K6A5Y+W5pys5Zyw55qE5Y+D5pW4XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0JnbU11dGVcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCZ21NdXRlID0gdGhpcy5pc0JnbU11dGU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQmdtTXV0ZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlzQmdtTXV0ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxvY2FsSXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNCZ21NdXRlXCIpO1xuICAgICAgICAgICAgdGhpcy5pc0JnbU11dGUgPSBKU09OLnBhcnNlKGxvY2FsSXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIGxldCBiZ21VcmwgPSB0aGlzLkN1c3RvbVBsYXlsaXN0WzBdLnVybDtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQXVkaW8gTWdyXTogXCIsIFwiYmdtVXJsOlwiLCBiZ21VcmwpO1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBiZ21Vcmw7XG4gICAgICAgIGlmICh0aGlzLmlzQmdtTXV0ZSkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljSXNQbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljSXNQbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmRvbVNlbGVjdEJnbSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsZXQgd2luZG93Q29uZmlnID0gd2luZG93W1wiVGFibGVCZ21NYXhcIl07XG4gICAgICAgIC8vIHRoaXMubWF4QmdtID0gd2luZG93Q29uZmlnW3RoaXMudGFibGVJZF07XG4gICAgICAgIHRoaXMubWF4QmdtID0gdGhpcy5DdXN0b21QbGF5bGlzdC5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXggID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4QmdtKSk7XG4gICAgICAgIGlmICghdGhpcy5ub3dQbGF5aW5nSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ID0gcmFuZG9tSW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub3dQbGF5aW5nSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOi3n+S4iuS4gOmmluS4gOaoo1xuICAgICAgICAgICAgaWYgKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1BsYXlpbmdJbmRleCA9IHRoaXMubm93UGxheWluZ0luZGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub3dQbGF5aW5nSW5kZXggPT0gcmFuZG9tSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm93UGxheWluZ0luZGV4ID09IHRoaXMubWF4QmdtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd1BsYXlpbmdJbmRleCA9IHJhbmRvbUluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ID0gcmFuZG9tSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDot5/kuIrkuIDpppbkuI3kuIDmqKNcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggPSByYW5kb21JbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLkN1c3RvbVBsYXlsaXN0W3RoaXMubm93UGxheWluZ0luZGV4XS51cmw7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25CZ21FbmRlZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBzZWxlY3RlZCBzb25nIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6YeN572udXJsXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnNyYyA9IFwiXCI7XG4gICAgICAgIC8vIOiugOWPluacrOWcsOeahOWPg+aVuFxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNCZ21NdXRlXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQmdtTXV0ZSA9IHRoaXMuaXNCZ21NdXRlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0JnbU11dGVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc0JnbU11dGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsb2NhbEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQmdtTXV0ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNCZ21NdXRlID0gSlNPTi5wYXJzZShsb2NhbEl0ZW0pO1xuICAgICAgICB9O1xuICAgICAgICAvL1xuICAgICAgICAvLyBsZXQgYmdtVXJsID0gdGhpcy5yYW5kb21TZWxlY3RCZ20oKTtcbiAgICAgICAgbGV0IGJnbVVybDtcbiAgICAgICAgaWYgKHRoaXMuaXNMb29wU2luZ2xlKSB7XG4gICAgICAgICAgICBiZ21VcmwgPSB0aGlzLkN1c3RvbVBsYXlsaXN0W3RoaXMubm93UGxheWluZ0luZGV4XS51cmw7O1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTG9vcFNpbmdsZSkge1xuICAgICAgICAgICAgLy8g5pyJ6ZaL6Zqo5qmfXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NodWZmbGUpIHtcbiAgICAgICAgICAgICAgICBiZ21VcmwgPSB0aGlzLnJhbmRvbVNlbGVjdEJnbSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmdtVXJsOiBcIiwgYmdtVXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaykumWi+maqOapn1xuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuaXNTaHVmZmxlKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5Y+q5pyJ5LiA6aaWXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggPSB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5aSa6aaWXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSB0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ID0gKHRoaXMubm93UGxheWluZ0luZGV4ID4gbGVuZ3RoKSA/IDAgOiB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJnbVVybCA9IHRoaXMuQ3VzdG9tUGxheWxpc3RbdGhpcy5ub3dQbGF5aW5nSW5kZXhdLnVybDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0F1ZGlvIE1ncl06IFwiLCBcImJnbVVybDpcIiwgYmdtVXJsKTtcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuc3JjID0gYmdtVXJsO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQmdtTXV0ZSkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljSXNQbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljSXNQbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BCZ20oKSB7XG4gICAgICAgIHRoaXMuYmdtQXVkaW9Tb3VyY2Uuc3RvcCgpO1xuICAgIH1cblxuICAgIC8qKiDlgZzmraLntrLpoIHmkq3mlL7pn7PmqIIgKi9cbiAgICBwdWJsaWMgc3RvcFdlYkJnbSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBcIlwiO1xuICAgIH1cblxuICAgIC8qKiDmkq3mlL7pn7PmlYggKi9cbiAgICBwdWJsaWMgcGxheUZzeCh1cmwpOiB2b2lkIHtcbiAgICAgICAgdmFyIGFzID0gdGhpcy5mc3hBdWRpb1NvdXJjZVt0aGlzLmN1cnJlbnRBdWRpb1NvdXJjZV07XG4gICAgICAgIHRoaXMuY3VycmVudEF1ZGlvU291cmNlICsrO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QXVkaW9Tb3VyY2UgPj0gRlNYX05VTSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXVkaW9Tb3VyY2UgPSAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFzLmNsaXAgPSBSZXNNZ3IuSW5zdGFuY2UuZ2V0QXNzZXQoXCJhdWRpb19mc3hcIiwgdXJsKTtcblxuICAgICAgICBpZiAoYXMuY2xpcCkge1xuICAgICAgICAgICAgYXMucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJlZmZlY3QgYXVkaW8gY2xpcCBudWxsOiBcIiwgdXJsKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiog5pKt5pS+6Kqe6Z+zICovXG4gICAgcHVibGljIHBsYXlWb2ljZSh1cmwpOiB2b2lkIHtcbiAgICAgICAgdmFyIGFzID0gdGhpcy5mc3hBdWRpb1NvdXJjZVt0aGlzLmN1cnJlbnRBdWRpb1NvdXJjZV07XG4gICAgICAgIHRoaXMuY3VycmVudEF1ZGlvU291cmNlICsrO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QXVkaW9Tb3VyY2UgPj0gRlNYX05VTSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXVkaW9Tb3VyY2UgPSAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFzLmNsaXAgPSBSZXNNZ3IuSW5zdGFuY2UuZ2V0QXNzZXQoYGF1ZGlvX3ZvaWNlXyR7STE4bk1nci5JbnN0YW5jZS5ub3dMYW5ndWFnZX1gLCB1cmwpO1xuXG4gICAgICAgIGlmIChhcy5jbGlwKSB7XG4gICAgICAgICAgICBhcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcImVmZmVjdCBhdWRpbyBjbGlwIG51bGw6IFwiLCB1cmwpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLyoqIOebo+iBvee1hOS7tuWPluW+l+ePvuWcqOatjOWWriAqL1xuICAgIHByaXZhdGUgb25Db21wR2V0UGxheUxpc3QoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIEV2ZW50TWdyLkluc3RhbmNlLmRpc3BhdGNoRXZlbnQoXCJjb21wX2Rpc3BhdGNoX211c2ljXCIsIHRoaXMuRGVmYXVsdFBsYXlsaXN0KTtcbiAgICB9XG5cbiAgICAvKiog55uj6IG95pS56K6K5pKt5pS+5qih5byPKOW+queSsC/pmqjmqZ8pKSAqL1xuICAgIHByaXZhdGUgb25DaGFuZ2VQbGF5aW5nU3RhdHVzKGV2ZW50TmFtZSwgZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTG9vcFNpbmdsZSA9IGRhdGFbXCJpc0xvb3BTaW5nbGVcIl07XG4gICAgICAgIHRoaXMuaXNTaHVmZmxlID0gZGF0YVtcImlzU2h1ZmZsZVwiXTtcbiAgICAgICAgbGV0IHNldCA9IHtcbiAgICAgICAgICAgIGlzTG9vcFNpbmdsZTogdGhpcy5pc0xvb3BTaW5nbGUsXG4gICAgICAgICAgICBpc1NodWZmbGU6IHRoaXMuaXNTaHVmZmxlXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNQbGF5ZXJTZXR0aW5nc1wiLCBKU09OLnN0cmluZ2lmeShzZXQpKTtcbiAgICB9XG5cbiAgICAvKiog55uj6IG96ZaL5aeL5pKt5pS+6Z+z5qiCICovXG4gICAgcHJpdmF0ZSBvblBsYXlTb25nKGV2ZW50TmFtZSwgZGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5DdXN0b21QbGF5bGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHNlbGVjdGVkIHNvbmchXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgYmdtVXJsID0gdGhpcy5DdXN0b21QbGF5bGlzdFt0aGlzLm5vd1BsYXlpbmdJbmRleF0udXJsO1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBiZ21Vcmw7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNJc1BsYXlpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1BsYXlpbmcpKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0JnbU11dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNJc1BsYXlpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1BsYXlpbmcpKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiog55uj6IG95pqr5YGc5pKt5pS+6Z+z5qiCICovXG4gICAgcHJpdmF0ZSBvblBhdXNlU29uZyhldmVudE5hbWUsIGRhdGEpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBzZWxlY3RlZCBzb25nIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY0lzUGxheWluZ1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlzUGxheWluZykpO1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgIH1cblxuICAgIC8qKiDnm6Pogb3mkq3mlL7kuIvkuIDpppYgKi9cbiAgICBwcml2YXRlIG9uTmV4dFNvbmcoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2VsZWN0ZWQgc29uZyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGxldCBiZ21Vcmw7XG4gICAgICAgIGlmICh0aGlzLmlzU2h1ZmZsZSkge1xuICAgICAgICAgICAgYmdtVXJsID0gdGhpcy5yYW5kb21TZWxlY3RCZ20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pc1NodWZmbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggPSB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5DdXN0b21QbGF5bGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ID0gKHRoaXMubm93UGxheWluZ0luZGV4ID4gbGVuZ3RoKSA/IDAgOiB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBiZ21VcmwgPSB0aGlzLkN1c3RvbVBsYXlsaXN0W3RoaXMubm93UGxheWluZ0luZGV4XS51cmw7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnNyYyA9IGJnbVVybDtcblxuICAgICAgICBpZiAodGhpcy5pc0JnbU11dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY0lzUGxheWluZ1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlzUGxheWluZykpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQmdtTXV0ZSkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY0lzUGxheWluZ1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlzUGxheWluZykpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiDnm6Pogb3mkq3mlL7liY3kuIDpppYgKi9cbiAgICBwcml2YXRlIG9uUHJldlNvbmcoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2VsZWN0ZWQgc29uZyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGxldCBiZ21Vcmw7XG4gICAgICAgIGlmICh0aGlzLmlzU2h1ZmZsZSkge1xuICAgICAgICAgICAgYmdtVXJsID0gdGhpcy5yYW5kb21TZWxlY3RCZ20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pc1NodWZmbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggPSB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1BsYXlpbmdJbmRleCA9ICh0aGlzLm5vd1BsYXlpbmdJbmRleCA8IDApID8gKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoIC0gMSkgOiB0aGlzLm5vd1BsYXlpbmdJbmRleDsgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYmdtVXJsID0gdGhpcy5DdXN0b21QbGF5bGlzdFt0aGlzLm5vd1BsYXlpbmdJbmRleF0udXJsO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBiZ21Vcmw7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNJc1BsYXlpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1BsYXlpbmcpKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0JnbU11dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNJc1BsYXlpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1BsYXlpbmcpKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiog55uj6IG96ZaL5ZWfL+mXnOmWiemBuOatjCAqL1xuICAgIHByaXZhdGUgb25Ub2dnbGVTb25nKGV2ZW50TmFtZSwgZGF0YSk6IHZvaWQge1xuICAgICAgICBsZXQgZGF0YU5hbWUgPSBkYXRhW1wibmFtZVwiXTtcbiAgICAgICAgbGV0IGRhdGFBY3RpdmUgPSBkYXRhW1wiYWN0aXZlXCJdO1xuICAgICAgICBsZXQgbG9jYWxDdXN0b21QbGF5bGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb25nc1N0YXR1c1wiKSk7XG4gICAgICAgIC8vXG4gICAgICAgIGlmIChkYXRhQWN0aXZlKSB7XG4gICAgICAgICAgICAvLyDlvp5EZWZhdWx0TGlzdOijoeWOu+mBjeatt+S4pnB1c2jliLDpgbjkuK3nmoToqbJzb25n5YiwY3VzdG9tIGxpc3RcbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdID09IGRhdGFOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJhY3RpdmVcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkN1c3RvbVBsYXlsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsb2NhbEN1c3RvbVBsYXlsaXN0LmZvckVhY2gobG9jYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtcIm5hbWVcIl0gPT0gbG9jYWxbXCJuYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFtcImFjdGl2ZVwiXSA9IGl0ZW1bXCJhY3RpdmVcIl07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZGF0YUFjdGl2ZSkge1xuICAgICAgICAgICAgLy8g5b6eQ3VzdG9tIGxpc3Too6HljrvpgY3mrbfliLDpgbjkuK3nmoRzb25nLCBzbGljZeaOiVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLkN1c3RvbVBsYXlsaXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT0gZGF0YU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DdXN0b21QbGF5bGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdGhpcy5EZWZhdWx0UGxheWxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVtcIm5hbWVcIl0gPT0gZGF0YU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVtcImFjdGl2ZVwiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbG9jYWxDdXN0b21QbGF5bGlzdC5mb3JFYWNoKGxvY2FsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdID09IGxvY2FsW1wibmFtZVwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxbXCJhY3RpdmVcIl0gPSBpdGVtW1wiYWN0aXZlXCJdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic29uZ3NTdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxDdXN0b21QbGF5bGlzdCkpO1xuICAgIH1cblxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgb25DaGFuZ2VCZ21NdXRlKGV2ZW50TmFtZSwgZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEJnbU11dGUoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUZzeE11dGUoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0RnN4TXV0ZShkYXRhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2hhbmdlVmlkZW9Tb3VuZE11dGUoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmlkZW9Tb3VuZE11dGUoZGF0YSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/I18nMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc261H8voFJNLQvM6X4760l', 'I18nMgr');
// scripts/common/managers/I18nMgr.ts

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
var en_1 = require("../i18n/en");
var zh_cn_1 = require("../i18n/zh_cn");
var zh_tw_1 = require("../i18n/zh_tw");
var EventMgr_1 = require("./EventMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 地區/語系對照表 */
var LANGUAGE_MAPS = {
    // 繁體中文
    "zh-tw": [
        "zh-tw", "zh-cht", "zh-hk", "zh-mo",
    ],
    // 簡體中文
    "zh-cn": [
        "zh-cn", "zh-chs",
    ],
    // 英文
    "en": [
        "en-us", "zh-sg",
    ],
    // 葡萄牙文
    "pt": [
        "pt-br", "pt-pt",
    ],
    // 越南文
    "vi": [
        "vi-vn",
    ],
};
var DEFAULT_LANGUAGE = "zh_tw";
var I18nMgr = /** @class */ (function (_super) {
    __extends(I18nMgr, _super);
    function I18nMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //
        _this.REF = null;
        _this.i18nLabels = {};
        _this.i18nSprites = {};
        //
        _this.defaultLanguage = "zh_tw";
        _this.nowLanguage = null;
        return _this;
        /** 解析Excel文件 */
        // update (dt) {}
    }
    I18nMgr_1 = I18nMgr;
    I18nMgr.prototype.onLoad = function () {
        if (I18nMgr_1.Instance === null) {
            I18nMgr_1.Instance = this;
        }
        else {
            cc.error("[error:] i18n mgr has multi instances!!!");
            this.destroy();
            console.log("[fix:] i18n mgr has been destroyed.");
            return;
        }
        ;
        //
        this.init();
    };
    I18nMgr.prototype.start = function () {
        // EventMgr.Instance.addEventListener("change_user_language", this, this.listenChangeUserLanguage);
        EventMgr_1.default.Instance.addEventListener("dialog:change_lang", this, this.listenChangeUserLanguage);
        this.create();
    };
    I18nMgr.prototype.onDestroy = function () {
        EventMgr_1.default.Instance.removeEventListener("dialog:change_lang", this, this.listenChangeUserLanguage);
    };
    /** 初始化 */
    I18nMgr.prototype.init = function () {
        // let ref = JSON.stringify(zh_tw);
        // this.i18nLabels = JSON.parse(ref);
        // 1. 從url取
        var localStorageData = localStorage.getItem("mtbcr:locale");
        if (!localStorageData) {
            // let langParam = NetMgr.Instance.langParam;
            // let langParam = GameApp.Instance.LangParam;
            // http://localhost:7456/?token=32be7f7d0c05535ae58c52fe3301ed61&lang=zh_tw
            var langParam = null;
            var pLangParam = null;
            var param = location.href.split('?')[1];
            if (param) {
                try {
                    pLangParam = param.split('&')[1];
                }
                catch (error) {
                    console.error('lang param: ', error);
                }
                ;
            }
            ;
            if (pLangParam) {
                langParam = pLangParam.split('lang=')[1];
            }
            ;
            switch (langParam) {
                case 'zh_tw':
                    this.defaultLanguage = 'zh_tw';
                    break;
                case 'zh_cn':
                    this.defaultLanguage = 'zh_cn';
                    break;
                case 'en':
                    this.defaultLanguage = 'en';
                    break;
                default:
                    this.defaultLanguage = 'zh_tw';
                    break;
            }
            ;
            this.nowLanguage = this.defaultLanguage;
        }
        else if (localStorageData) {
            this.nowLanguage = JSON.parse(localStorageData);
        }
        ;
        // 2.用手機系統語言取
        // // 先取localstorage的紀錄
        // let localStorageData = localStorage.getItem("mtbcr:locale");
        // // 若無紀錄
        // // 用系統語言取(cc)
        // if (!localStorageData) {
        //     // 中文地區預設繁中, 其餘預設英文
        //     if (cc.sys.language == 'zh') {
        //         this.defaultLanguage = 'zh_tw';
        //     } else {
        //         this.defaultLanguage = 'en';
        //     }
        //     this.nowLanguage = this.defaultLanguage;
        // } else if (localStorageData) {
        //     this.nowLanguage = JSON.parse(localStorageData);
        // };
        // console.log('系統語言: ', cc.sys.language);
        console.log('目前語言: ', this.nowLanguage);
    };
    I18nMgr.prototype.create = function () {
        this.updateLang();
    };
    /** 建立全域i18n物件並且初始化使用者地區預設語言 */
    I18nMgr.prototype.initArea = function () {
        // 取得用戶預設語言區碼
        // // let localArea: string = cc.sys.languageCode;
        // let localArea: string = NetMgr.Instance.langParam;
        // // 遍歷查找該用戶系統語言對應的語言包
        // // 先給預設值
        // // let defaultLanguage: string = DEFAULT_LANGUAGE;
        // let localStorageData = JSON.parse(localStorage.getItem("localeSetting"));
        // // 中英雙語版本
        // if (localArea == "zh-tw") {
        //     this.defaultLanguage = "zh_tw";
        // } else if (localArea == "en" || "vi" || "pt")  {
        //     this.defaultLanguage = "en";
        // } else {
        //     this.defaultLanguage = "zh_tw";
        // };
        // // 
        // if (!localStorageData) {
        //     // this.nowLanguage = this.defaultLanguage
        //     if (NetMgr.Instance.langParam == "zh-tw") {
        //         this.nowLanguage = "zh_tw";
        //     } else if (NetMgr.Instance.langParam == "zh-cn") {
        //         this.nowLanguage = "zh_cn";
        //     } else {
        //         this.nowLanguage = NetMgr.Instance.langParam;
        //     };
        // } else if (localStorageData) {
        //     this.nowLanguage = localStorageData;
        // }
        // 正常遍歷
        // for (let key in LANGUAGE_MAPS) {
        //     let arr = LANGUAGE_MAPS[key];
        //     arr.forEach(i => {
        //         if (localArea == i) {
        //             defaultLanguage = key;
        //         };
        //     });
        // };
        // this.updateLang();
        console.log("default: ", this.defaultLanguage);
        console.log("now: ", this.nowLanguage);
    };
    /** 更新/切換語言 */
    I18nMgr.prototype.updateLang = function () {
        switch (this.nowLanguage) {
            case 'zh_tw':
                this.REF = JSON.stringify(zh_tw_1.default);
                this.i18nLabels = JSON.parse(this.REF);
                break;
            case 'zh_cn':
                this.REF = JSON.stringify(zh_cn_1.default);
                this.i18nLabels = JSON.parse(this.REF);
                break;
            case 'en':
                this.REF = JSON.stringify(en_1.default);
                this.i18nLabels = JSON.parse(this.REF);
                break;
            default:
                this.REF = JSON.stringify(zh_tw_1.default);
                this.i18nLabels = JSON.parse(this.REF);
                break;
        }
        ;
    };
    I18nMgr.prototype.listenChangeUserLanguage = function (eventName, data) {
        if (data == this.nowLanguage || data == null) {
            return;
        }
        ;
        this.nowLanguage = data;
        this.updateLang();
        localStorage.setItem("mtbcr:locale", JSON.stringify(data));
        EventMgr_1.default.Instance.dispatchEvent('i18n:change_lang', null);
    };
    var I18nMgr_1;
    I18nMgr.Instance = null;
    I18nMgr = I18nMgr_1 = __decorate([
        ccclass
    ], I18nMgr);
    return I18nMgr;
}(cc.Component));
exports.default = I18nMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxtYW5hZ2Vyc1xcSTE4bk1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsdUNBQWtDO0FBQ2xDLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsZUFBZTtBQUNmLElBQU0sYUFBYSxHQUFHO0lBQ2xCLE9BQU87SUFDUCxPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPO0tBQ3RDO0lBRUQsT0FBTztJQUNQLE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxRQUFRO0tBQ3BCO0lBRUQsS0FBSztJQUNMLElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxPQUFPO0tBQ25CO0lBRUQsT0FBTztJQUNQLElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxPQUFPO0tBQ25CO0lBRUQsTUFBTTtJQUNOLElBQUksRUFBRTtRQUNGLE9BQU87S0FDVjtDQUNKLENBQUE7QUFFRCxJQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztBQUdqQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVNQztRQXBNRyxFQUFFO1FBQ00sU0FBRyxHQUFHLElBQUksQ0FBQztRQUNaLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEVBQUU7UUFDSyxxQkFBZSxHQUFHLE9BQU8sQ0FBQztRQUMxQixpQkFBVyxHQUFHLElBQUksQ0FBQzs7UUEwTDFCLGdCQUFnQjtRQUVoQixpQkFBaUI7SUFFckIsQ0FBQztnQkF2TW9CLE9BQU87SUFZeEIsd0JBQU0sR0FBTjtRQUNJLElBQUksU0FBTyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDM0IsU0FBTyxD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SSxDQUFDO0lBRnRCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F1TTNCO0lBQUQsY0FBQztDQXZNRCxBQXVNQyxDQXZNb0MsRUFBRSxDQUFDLFNBQVMsR0F1TWhEO2tCQXZNb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbiBmcm9tIFwiLi4vaTE4bi9lblwiO1xuaW1wb3J0IHpoX2NuIGZyb20gXCIuLi9pMThuL3poX2NuXCI7XG5pbXBvcnQgemhfdHcgZnJvbSBcIi4uL2kxOG4vemhfdHdcIjtcbmltcG9ydCBFdmVudE1nciBmcm9tIFwiLi9FdmVudE1nclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqIOWcsOWNgC/oqp7ns7vlsI3nhafooaggKi9cbmNvbnN0IExBTkdVQUdFX01BUFMgPSB7XG4gICAgLy8g57mB6auU5Lit5paHXG4gICAgXCJ6aC10d1wiOiBbXG4gICAgICAgIFwiemgtdHdcIiwgXCJ6aC1jaHRcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCIsXG4gICAgXSxcblxuICAgIC8vIOewoemrlOS4reaWh1xuICAgIFwiemgtY25cIjogW1xuICAgICAgICBcInpoLWNuXCIsIFwiemgtY2hzXCIsICBcbiAgICBdLFxuXG4gICAgLy8g6Iux5paHXG4gICAgXCJlblwiOiBbXG4gICAgICAgIFwiZW4tdXNcIiwgXCJ6aC1zZ1wiLFxuICAgIF0sXG5cbiAgICAvLyDokaHokITniZnmlodcbiAgICBcInB0XCI6IFtcbiAgICAgICAgXCJwdC1iclwiLCBcInB0LXB0XCIsXG4gICAgXSxcblxuICAgIC8vIOi2iuWNl+aWh1xuICAgIFwidmlcIjogW1xuICAgICAgICBcInZpLXZuXCIsXG4gICAgXSxcbn1cblxuY29uc3QgREVGQVVMVF9MQU5HVUFHRSA9IFwiemhfdHdcIjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEkxOG5NZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogSTE4bk1nciA9IG51bGw7XG4gICAgLy9cbiAgICBwcml2YXRlIFJFRiA9IG51bGw7XG4gICAgcHVibGljIGkxOG5MYWJlbHMgPSB7fTtcbiAgICBwdWJsaWMgaTE4blNwcml0ZXMgPSB7fTtcbiAgICAvL1xuICAgIHB1YmxpYyBkZWZhdWx0TGFuZ3VhZ2UgPSBcInpoX3R3XCI7XG4gICAgcHVibGljIG5vd0xhbmd1YWdlID0gbnVsbDtcblxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgaWYgKEkxOG5NZ3IuSW5zdGFuY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIEkxOG5NZ3IuSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbZXJyb3I6XSBpMThuIG1nciBoYXMgbXVsdGkgaW5zdGFuY2VzISEhXCIpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltmaXg6XSBpMThuIG1nciBoYXMgYmVlbiBkZXN0cm95ZWQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBFdmVudE1nci5JbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlX3VzZXJfbGFuZ3VhZ2VcIiwgdGhpcywgdGhpcy5saXN0ZW5DaGFuZ2VVc2VyTGFuZ3VhZ2UpO1xuICAgICAgICBFdmVudE1nci5JbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFwiZGlhbG9nOmNoYW5nZV9sYW5nXCIsIHRoaXMsIHRoaXMubGlzdGVuQ2hhbmdlVXNlckxhbmd1YWdlKTtcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIEV2ZW50TWdyLkluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkaWFsb2c6Y2hhbmdlX2xhbmdcIiwgdGhpcywgdGhpcy5saXN0ZW5DaGFuZ2VVc2VyTGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJYgKi9cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gbGV0IHJlZiA9IEpTT04uc3RyaW5naWZ5KHpoX3R3KTtcbiAgICAgICAgLy8gdGhpcy5pMThuTGFiZWxzID0gSlNPTi5wYXJzZShyZWYpO1xuXG5cbiAgICAgICAgLy8gMS4g5b6edXJs5Y+WXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2VEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdGJjcjpsb2NhbGVcIik7XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlRGF0YSkge1xuICAgICAgICAgICAgLy8gbGV0IGxhbmdQYXJhbSA9IE5ldE1nci5JbnN0YW5jZS5sYW5nUGFyYW07XG4gICAgICAgICAgICAvLyBsZXQgbGFuZ1BhcmFtID0gR2FtZUFwcC5JbnN0YW5jZS5MYW5nUGFyYW07XG4gICAgICAgICAgICAvLyBodHRwOi8vbG9jYWxob3N0Ojc0NTYvP3Rva2VuPTMyYmU3ZjdkMGMwNTUzNWFlNThjNTJmZTMzMDFlZDYxJmxhbmc9emhfdHdcbiAgICAgICAgICAgIGxldCBsYW5nUGFyYW0gPSBudWxsO1xuICAgICAgICAgICAgbGV0IHBMYW5nUGFyYW0gPSBudWxsO1xuICAgICAgICAgICAgbGV0IHBhcmFtID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzFdO1xuICAgICAgICAgICAgaWYgKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcExhbmdQYXJhbSA9IHBhcmFtLnNwbGl0KCcmJylbMV07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbGFuZyBwYXJhbTogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAocExhbmdQYXJhbSkge1xuICAgICAgICAgICAgICAgIGxhbmdQYXJhbSA9IHBMYW5nUGFyYW0uc3BsaXQoJ2xhbmc9JylbMV07XG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIHN3aXRjaCAobGFuZ1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnemhfdHcnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRMYW5ndWFnZSA9ICd6aF90dyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3poX2NuJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0TGFuZ3VhZ2UgPSAnemhfY24nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdExhbmd1YWdlID0gJ2VuJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRMYW5ndWFnZSA9ICd6aF90dyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5ub3dMYW5ndWFnZSA9IHRoaXMuZGVmYXVsdExhbmd1YWdlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5ub3dMYW5ndWFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlRGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gMi7nlKjmiYvmqZ/ns7vntbHoqp7oqIDlj5ZcbiAgICAgICAgLy8gLy8g5YWI5Y+WbG9jYWxzdG9yYWdl55qE57SA6YyEXG4gICAgICAgIC8vIGxldCBsb2NhbFN0b3JhZ2VEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdGJjcjpsb2NhbGVcIik7XG4gICAgICAgIC8vIC8vIOiLpeeEoee0gOmMhFxuICAgICAgICAvLyAvLyDnlKjns7vntbHoqp7oqIDlj5YoY2MpXG4gICAgICAgIC8vIGlmICghbG9jYWxTdG9yYWdlRGF0YSkge1xuICAgICAgICAvLyAgICAgLy8g5Lit5paH5Zyw5Y2A6aCQ6Kit57mB5LitLCDlhbbppJjpoJDoqK3oi7HmlodcbiAgICAgICAgLy8gICAgIGlmIChjYy5zeXMubGFuZ3VhZ2UgPT0gJ3poJykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZGVmYXVsdExhbmd1YWdlID0gJ3poX3R3JztcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kZWZhdWx0TGFuZ3VhZ2UgPSAnZW4nO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgdGhpcy5ub3dMYW5ndWFnZSA9IHRoaXMuZGVmYXVsdExhbmd1YWdlO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZURhdGEpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm93TGFuZ3VhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZURhdGEpO1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfns7vntbHoqp7oqIA6ICcsIGNjLnN5cy5sYW5ndWFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnm67liY3oqp7oqIA6ICcsIHRoaXMubm93TGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhbmcoKTtcbiAgICB9XG5cbiAgICAvKiog5bu656uL5YWo5Z+faTE4bueJqeS7tuS4puS4lOWIneWni+WMluS9v+eUqOiAheWcsOWNgOmgkOioreiqnuiogCAqL1xuICAgIHB1YmxpYyBpbml0QXJlYSgpOiB2b2lkIHtcbiAgICAgICAgLy8g5Y+W5b6X55So5oi26aCQ6Kit6Kqe6KiA5Y2A56K8XG4gICAgICAgIC8vIC8vIGxldCBsb2NhbEFyZWE6IHN0cmluZyA9IGNjLnN5cy5sYW5ndWFnZUNvZGU7XG4gICAgICAgIC8vIGxldCBsb2NhbEFyZWE6IHN0cmluZyA9IE5ldE1nci5JbnN0YW5jZS5sYW5nUGFyYW07XG4gICAgICAgIC8vIC8vIOmBjeatt+afpeaJvuipsueUqOaItuezu+e1seiqnuiogOWwjeaHieeahOiqnuiogOWMhVxuICAgICAgICAvLyAvLyDlhYjntabpoJDoqK3lgLxcbiAgICAgICAgLy8gLy8gbGV0IGRlZmF1bHRMYW5ndWFnZTogc3RyaW5nID0gREVGQVVMVF9MQU5HVUFHRTtcbiAgICAgICAgLy8gbGV0IGxvY2FsU3RvcmFnZURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlU2V0dGluZ1wiKSk7XG4gICAgICAgIC8vIC8vIOS4reiLsembmeiqnueJiOacrFxuICAgICAgICAvLyBpZiAobG9jYWxBcmVhID09IFwiemgtdHdcIikge1xuICAgICAgICAvLyAgICAgdGhpcy5kZWZhdWx0TGFuZ3VhZ2UgPSBcInpoX3R3XCI7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAobG9jYWxBcmVhID09IFwiZW5cIiB8fCBcInZpXCIgfHwgXCJwdFwiKSAge1xuICAgICAgICAvLyAgICAgdGhpcy5kZWZhdWx0TGFuZ3VhZ2UgPSBcImVuXCI7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmRlZmF1bHRMYW5ndWFnZSA9IFwiemhfdHdcIjtcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gLy8gXG4gICAgICAgIC8vIGlmICghbG9jYWxTdG9yYWdlRGF0YSkge1xuICAgICAgICAvLyAgICAgLy8gdGhpcy5ub3dMYW5ndWFnZSA9IHRoaXMuZGVmYXVsdExhbmd1YWdlXG4gICAgICAgIC8vICAgICBpZiAoTmV0TWdyLkluc3RhbmNlLmxhbmdQYXJhbSA9PSBcInpoLXR3XCIpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vd0xhbmd1YWdlID0gXCJ6aF90d1wiO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChOZXRNZ3IuSW5zdGFuY2UubGFuZ1BhcmFtID09IFwiemgtY25cIikge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm93TGFuZ3VhZ2UgPSBcInpoX2NuXCI7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm93TGFuZ3VhZ2UgPSBOZXRNZ3IuSW5zdGFuY2UubGFuZ1BhcmFtO1xuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2VEYXRhKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vd0xhbmd1YWdlID0gbG9jYWxTdG9yYWdlRGF0YTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyDmraPluLjpgY3mrbdcbiAgICAgICAgLy8gZm9yIChsZXQga2V5IGluIExBTkdVQUdFX01BUFMpIHtcbiAgICAgICAgLy8gICAgIGxldCBhcnIgPSBMQU5HVUFHRV9NQVBTW2tleV07XG4gICAgICAgIC8vICAgICBhcnIuZm9yRWFjaChpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAobG9jYWxBcmVhID09IGkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlID0ga2V5O1xuICAgICAgICAvLyAgICAgICAgIH07XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfTtcblxuXG4gICAgICAgIC8vIHRoaXMudXBkYXRlTGFuZygpO1xuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJkZWZhdWx0OiBcIiwgdGhpcy5kZWZhdWx0TGFuZ3VhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdzogXCIsIHRoaXMubm93TGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIC8qKiDmm7TmlrAv5YiH5o+b6Kqe6KiAICovXG4gICAgcHJpdmF0ZSB1cGRhdGVMYW5nKCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubm93TGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3poX3R3JzpcbiAgICAgICAgICAgICAgICB0aGlzLlJFRiA9IEpTT04uc3RyaW5naWZ5KHpoX3R3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmkxOG5MYWJlbHMgPSBKU09OLnBhcnNlKHRoaXMuUkVGKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnemhfY24nOlxuICAgICAgICAgICAgICAgIHRoaXMuUkVGID0gSlNPTi5zdHJpbmdpZnkoemhfY24pO1xuICAgICAgICAgICAgICAgIHRoaXMuaTE4bkxhYmVscyA9IEpTT04ucGFyc2UodGhpcy5SRUYpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgdGhpcy5SRUYgPSBKU09OLnN0cmluZ2lmeShlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5pMThuTGFiZWxzID0gSlNPTi5wYXJzZSh0aGlzLlJFRik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLlJFRiA9IEpTT04uc3RyaW5naWZ5KHpoX3R3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmkxOG5MYWJlbHMgPSBKU09OLnBhcnNlKHRoaXMuUkVGKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkNoYW5nZVVzZXJMYW5ndWFnZShldmVudE5hbWUsIGRhdGEpOiB2b2lkIHtcbiAgICAgICAgaWYgKGRhdGEgPT0gdGhpcy5ub3dMYW5ndWFnZSB8fCBkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ub3dMYW5ndWFnZSA9IGRhdGE7XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZygpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm10YmNyOmxvY2FsZVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UuZGlzcGF0Y2hFdmVudCgnaTE4bjpjaGFuZ2VfbGFuZycsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKiDop6PmnpBFeGNlbOaWh+S7tiAqL1xuXG4gICAgLy8gdXBkYXRlIChkdCkge31cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a541fYbXAtF8aMKpulCZQMt', 'EventMgr');
// scripts/common/managers/EventMgr.ts

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
var EventMgr = /** @class */ (function (_super) {
    __extends(EventMgr, _super);
    function EventMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 事件派發平台結構:
         *  { event_1: [訂閱1_obj{caller: caller, func: func}, 訂閱2_obj{}, ... 訂閱3, 訂閱4 ...],
         *    event_2: [訂閱1_obj{caller: caller, func: func}, 訂閱2_obj{}, ... 訂閱3, 訂閱4 ...],
         *    event_3: ...
         *  } */
        _this.EventMap = {};
        return _this;
    }
    EventMgr_1 = EventMgr;
    EventMgr.prototype.onLoad = function () {
        if (EventMgr_1.Instance === null) {
            EventMgr_1.Instance = this;
        }
        else {
            console.error("[error]: " + this + " has multi instances.");
            this.destroy();
            console.log("[fix]: " + this + " has been destroyed.");
            return;
        }
        ;
    };
    /** 增加事件訂閱者 || eventName: 事件名稱 || caller: 訂閱者 || func: 回調函數 */
    EventMgr.prototype.addEventListener = function (eventName, caller, func) {
        if (!this.EventMap[eventName]) {
            this.EventMap[eventName] = [];
        }
        ;
        // 在對應的該事件名稱(array)下新增訂閱者(obj)
        var queue = this.EventMap[eventName];
        queue.push({
            caller: caller,
            func: func
        });
    };
    /** 移除事件訂閱者 || eventName: 事件名稱 || caller: 訂閱者 || func: 回調函數 */
    EventMgr.prototype.removeEventListener = function (eventName, caller, func) {
        if (!this.EventMap[eventName]) {
            return;
        }
        ;
        // 遍歷map該事件obj中尋找指定的該訂閱者
        var queue = this.EventMap[eventName];
        for (var i = 0; i < queue.length; i++) {
            var obj = queue[i];
            if (obj.caller == caller && obj.func == func) {
                queue.splice(i, 1);
                break;
            }
            ;
        }
        ;
        // 如果已經沒有人訂閱了
        if (queue.length <= 0) {
            this.EventMap[eventName] = null;
        }
    };
    /** 強制移除該事件訂閱的所有回調函數 */
    EventMgr.prototype.removeEventListenerAllCallbacks = function (eventName, caller) {
        if (!this.EventMap[eventName]) {
            return;
        }
        ;
        // 遍歷map該事件obj中尋找指定的該訂閱者
        var queue = this.EventMap[eventName];
        for (var i = 0; i < queue.length; i++) {
            var obj = queue[i];
            if (obj.caller == caller) {
                queue.splice(i, 1);
                break;
            }
            ;
        }
        ;
        // 如果已經沒有人訂閱了
        if (queue.length <= 0) {
            this.EventMap[eventName] = null;
        }
    };
    /** 派送事件 */
    EventMgr.prototype.dispatchEvent = function (eventName, data) {
        if (!this.EventMap[eventName]) {
            return;
        }
        ;
        // 對該事件的所有訂閱者派發事件
        var queue = this.EventMap[eventName];
        for (var i = 0; i < queue.length; i++) {
            var obj = queue[i];
            obj.func.call(obj.caller, eventName, data);
        }
        ;
    };
    var EventMgr_1;
    EventMgr.Instance = null;
    EventMgr = EventMgr_1 = __decorate([
        ccclass
    ], EventMgr);
    return EventMgr;
}(cc.Component));
exports.default = EventMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxtYW5hZ2Vyc1xcRXZlbnRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrRkM7UUE5RUc7Ozs7Z0JBSVE7UUFDQSxjQUFRLEdBQUcsRUFBRSxDQUFDOztJQXlFMUIsQ0FBQztpQkFsRm9CLFFBQVE7SUFXekIseUJBQU0sR0FBTjtRQUNJLElBQUksVUFBUSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDNUIsVUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDNUI7YUFBTTtZQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBWSxJQUFJLDBCQUF1QixDQUFFLENBQUM7WUFDeEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLElBQUkseUJBQXNCLENBQUMsQ0FBQztZQUNsRCxPQUFPO1NBQ1Y7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUVELDhEQUE4RDtJQUN2RCxtQ0FBZ0IsR0FBdkIsVUFBd0IsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFjO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO1FBQUEsQ0FBQztRQUNGLDhCQUE4QjtRQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDUCxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FB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cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEV2ZW50TWdyID0gbnVsbCBhcyB1bmtub3duIGFzIEV2ZW50TWdyO1xuXG4gICAgLyoqIOS6i+S7tua0vueZvOW5s+WPsOe1kOanizpcbiAgICAgKiAgeyBldmVudF8xOiBb6KiC6ZaxMV9vYmp7Y2FsbGVyOiBjYWxsZXIsIGZ1bmM6IGZ1bmN9LCDoqILplrEyX29iant9LCAuLi4g6KiC6ZaxMywg6KiC6ZaxNCAuLi5dLCBcbiAgICAgKiAgICBldmVudF8yOiBb6KiC6ZaxMV9vYmp7Y2FsbGVyOiBjYWxsZXIsIGZ1bmM6IGZ1bmN9LCDoqILplrEyX29iant9LCAuLi4g6KiC6ZaxMywg6KiC6ZaxNCAuLi5dLFxuICAgICAqICAgIGV2ZW50XzM6IC4uLlxuICAgICAqICB9ICovXG4gICAgIHB1YmxpYyBFdmVudE1hcCA9IHt9O1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgaWYgKEV2ZW50TWdyLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBFdmVudE1nci5JbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbZXJyb3JdOiAke3RoaXN9IGhhcyBtdWx0aSBpbnN0YW5jZXMuYCApO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW2ZpeF06ICR7dGhpc30gaGFzIGJlZW4gZGVzdHJveWVkLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiDlop7liqDkuovku7boqILplrHogIUgfHwgZXZlbnROYW1lOiDkuovku7blkI3nqLEgfHwgY2FsbGVyOiDoqILplrHogIUgfHwgZnVuYzog5Zue6Kq/5Ye95pW4ICovXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsZXIsIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5FdmVudE1hcFtldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLkV2ZW50TWFwW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g5Zyo5bCN5oeJ55qE6Kmy5LqL5Lu25ZCN56ixKGFycmF5KeS4i+aWsOWinuiogumWseiAhShvYmopXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuRXZlbnRNYXBbZXZlbnROYW1lXTtcbiAgICAgICAgcXVldWUucHVzaCh7XG4gICAgICAgICAgICBjYWxsZXI6IGNhbGxlcixcbiAgICAgICAgICAgIGZ1bmM6IGZ1bmNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIOenu+mZpOS6i+S7tuiogumWseiAhSB8fCBldmVudE5hbWU6IOS6i+S7tuWQjeeosSB8fCBjYWxsZXI6IOiogumWseiAhSB8fCBmdW5jOiDlm57oqr/lh73mlbggKi9cbiAgICBwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxlciwgZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLkV2ZW50TWFwW2V2ZW50TmFtZV0pIHsgcmV0dXJuIH07XG4gICAgICAgIC8vIOmBjeatt21hcOipsuS6i+S7tm9iauS4reWwi+aJvuaMh+WumueahOipsuiogumWseiAhVxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLkV2ZW50TWFwW2V2ZW50TmFtZV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBxdWV1ZVtpXTtcbiAgICAgICAgICAgIGlmIChvYmouY2FsbGVyID09IGNhbGxlciAmJiBvYmouZnVuYyA9PSBmdW5jKSB7XG4gICAgICAgICAgICAgICAgcXVldWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g5aaC5p6c5bey57aT5rKS5pyJ5Lq66KiC6Zax5LqGXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5FdmVudE1hcFtldmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlvLfliLbnp7vpmaToqbLkuovku7boqILplrHnmoTmiYDmnInlm57oqr/lh73mlbggKi9cbiAgICBwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lckFsbENhbGxiYWNrcyhldmVudE5hbWUsIGNhbGxlcikge1xuICAgICAgICBpZiAoIXRoaXMuRXZlbnRNYXBbZXZlbnROYW1lXSkgeyByZXR1cm4gfTtcbiAgICAgICAgLy8g6YGN5q23bWFw6Kmy5LqL5Lu2b2Jq5Lit5bCL5om+5oyH5a6a55qE6Kmy6KiC6Zax6ICFXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuRXZlbnRNYXBbZXZlbnROYW1lXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHF1ZXVlW2ldO1xuICAgICAgICAgICAgaWYgKG9iai5jYWxsZXIgPT0gY2FsbGVyKSB7XG4gICAgICAgICAgICAgICAgcXVldWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g5aaC5p6c5bey57aT5rKS5pyJ5Lq66KiC6Zax5LqGXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5FdmVudE1hcFtldmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmtL7pgIHkuovku7YgKi9cbiAgICBwdWJsaWMgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLkV2ZW50TWFwW2V2ZW50TmFtZV0pIHsgcmV0dXJuOyB9O1xuICAgICAgICAvLyDlsI3oqbLkuovku7bnmoTmiYDmnInoqILplrHogIXmtL7nmbzkuovku7ZcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5FdmVudE1hcFtldmVudE5hbWVdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gcXVldWVbaV07XG4gICAgICAgICAgICBvYmouZnVuYy5jYWxsKG9iai5jYWxsZXIsIGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/i18n/zh_tw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0876MRNAFPtZfbNBk4CSha', 'zh_tw');
// scripts/common/i18n/zh_tw.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zh_tw = {};
exports.default = zh_tw;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxpMThuXFx6aF90dy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sS0FBSyxHQUFHLEVBRWIsQ0FBQztBQUVGLGtCQUFlLEtBQUssQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHpoX3R3ID0ge1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB6aF90dztcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/i18n/zh_cn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23268LBg/BE34eklwuhggi1', 'zh_cn');
// scripts/common/i18n/zh_cn.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zh_cn = {};
exports.default = zh_cn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxpMThuXFx6aF9jbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sS0FBSyxHQUFHLEVBRWIsQ0FBQztBQUVGLGtCQUFlLEtBQUssQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHpoX2NuID0ge1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB6aF9jbjsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/i18n/en.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25d18gyKIdPVZeocpMxlv50', 'en');
// scripts/common/i18n/en.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var en = {};
exports.default = en;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxpMThuXFxlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sRUFBRSxHQUFHLEVBRVYsQ0FBQztBQUVGLGtCQUFlLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVuID0ge1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbjtcbiJdfQ==
//------QC-SOURCE-SPLIT------
