"use strict";
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