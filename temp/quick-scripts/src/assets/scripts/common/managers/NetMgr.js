"use strict";
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