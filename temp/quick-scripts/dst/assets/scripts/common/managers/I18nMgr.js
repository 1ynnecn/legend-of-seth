
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