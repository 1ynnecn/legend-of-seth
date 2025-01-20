"use strict";
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