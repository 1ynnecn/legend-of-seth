
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