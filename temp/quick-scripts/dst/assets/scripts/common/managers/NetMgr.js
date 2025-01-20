
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