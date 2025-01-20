
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Demo');
require('./assets/scripts/common/Launcher');
require('./assets/scripts/common/i18n/en');
require('./assets/scripts/common/i18n/zh_cn');
require('./assets/scripts/common/i18n/zh_tw');
require('./assets/scripts/common/interfaces/ISymbols');
require('./assets/scripts/common/managers/API_Mgr');
require('./assets/scripts/common/managers/AudioMgr');
require('./assets/scripts/common/managers/EventMgr');
require('./assets/scripts/common/managers/I18nMgr');
require('./assets/scripts/common/managers/NetMgr');
require('./assets/scripts/common/managers/ResourcesMgr');
require('./assets/scripts/common/managers/UI_Mgr');
require('./assets/scripts/common/managers/ViewMgr');
require('./assets/scripts/common/utils/resize/ResizeCanvas');
require('./assets/scripts/single/app/GameApp');
require('./assets/scripts/single/configs/GameConfig');
require('./assets/scripts/single/configs/NetworkConfig');
require('./assets/scripts/single/controllers/GameController');
require('./assets/scripts/single/controllers/LoadPageController');
require('./assets/scripts/single/controllers/ResourcesController');
require('./assets/scripts/single/models/TableDataModel');
require('./assets/scripts/single/models/UserDataModel');
require('./assets/scripts/single/views/GameView');

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