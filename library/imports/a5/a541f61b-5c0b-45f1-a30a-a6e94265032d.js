"use strict";
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