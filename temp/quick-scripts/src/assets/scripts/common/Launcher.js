"use strict";
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