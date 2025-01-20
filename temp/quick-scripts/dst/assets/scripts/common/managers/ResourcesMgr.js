
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