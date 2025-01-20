
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