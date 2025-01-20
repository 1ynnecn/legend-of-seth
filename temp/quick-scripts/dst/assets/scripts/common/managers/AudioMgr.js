
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/managers/AudioMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38f8fRCYVVPdI2iNfu2KOT3', 'AudioMgr');
// scripts/common/managers/AudioMgr.ts

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
var EventMgr_1 = require("./EventMgr");
var I18nMgr_1 = require("./I18nMgr");
var ResourcesMgr_1 = require("./ResourcesMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FSX_NUM = 33;
var AudioMgr = /** @class */ (function (_super) {
    __extends(AudioMgr, _super);
    function AudioMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xhr = null;
        _this.isBgmMute = false;
        _this.isFsxMute = false;
        _this.isVideoSoundMute = false;
        _this.bgmVolume = 1;
        _this.fsxVolume = 1;
        _this.bgmAudioSource = null;
        _this.fsxAudioSource = [];
        _this.currentAudioSource = 0;
        /** 當前桌號 */
        _this.tableId = null;
        /** HTML聲音元素 */
        _this.audioElement = null;
        /** 現正播放中歌曲index */
        // private nowRandomIndex = null;
        // private nowRandomIndex = 1;
        _this.nowRandomIndex = 0;
        /** 現正播放歌曲Index */
        _this.nowPlayingIndex = 0;
        /** bgm最大數量 */
        _this.maxBgm = null;
        /** 儲存當前傳來的預設音樂列表 */
        _this.DefaultPlaylist = [];
        /** 儲存當前客製化音樂列表 */
        _this.CustomPlaylist = [];
        /** 儲存localhost裡的音樂列表 */
        _this.LocalPlaylist = [];
        // 音樂播放器功能變數
        _this.isLoopSingle = false;
        // private isLoopWhole: boolean = true;
        _this.isShuffle = false;
        _this.bannedSongs = {};
        /** 播放器是否暫停中 */
        _this.isPlaying = true;
        // --------------------------------------------------------------------------
        /** 有在demo自定義裡Type裡的音效檔案名稱 */
        _this.customTypeList = [];
        /** 當前音效組類型 0=預設 */
        _this.currentFsxType = 0;
        // --------------------------------------------------------------------------
        _this.EventMap = {
            "audio_tableId": _this.onAudioTableId,
            "res_get_music": _this.onGetServerMusicLists,
            "change_bgm_mute": _this.onChangeBgmMute,
            // "change_fsx_mute": this.onChangeFsxMute,
            "comp_get_music": _this.onCompGetPlayList,
            "music_player_play": _this.onPlaySong,
            "music_player_pause": _this.onPauseSong,
            "music_player_next_song": _this.onNextSong,
            "music_player_prev_song": _this.onPrevSong,
            "music_player_change_status": _this.onChangePlayingStatus,
            "music_player_toggle_song": _this.onToggleSong,
            "sys:fsx_mute": _this.onChangeFsxMute,
            "sys:video_sound_mute": _this.onChangeVideoSoundMute,
        };
        return _this;
    }
    AudioMgr_1 = AudioMgr;
    // -------------------------------------------------------------------------------------
    AudioMgr.prototype.onLoad = function () {
        if (AudioMgr_1.Instance === null) {
            AudioMgr_1.Instance = this;
        }
        else {
            cc.error("[error:] audio mgr has multi instances!!!");
            this.destroy();
            console.log("[fix:] audio mgr has been destroyed.");
            return;
        }
        ;
        this.init();
    };
    AudioMgr.prototype.start = function () {
        var _this = this;
        for (var key in this.EventMap) {
            EventMgr_1.default.Instance.addEventListener(key, this, this.EventMap[key]);
        }
        ;
        this.audioElement.onended = function () {
            _this.onBgmEnded();
        };
        this.create();
    };
    AudioMgr.prototype.onDestroy = function () {
        for (var key in this.EventMap) {
            EventMgr_1.default.Instance.removeEventListener(key, this, this.EventMap[key]);
        }
        ;
    };
    AudioMgr.prototype.init = function () {
        // HTML audio元素
        this.audioElement = document.getElementById("audio");
        if (!this.audioElement) {
            this.audioElement = document.createElement("audio");
        }
        ;
        // 讀取本地的參數
        if (!localStorage.getItem("meta:baccarat:bgm_mute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("meta:baccarat:bgm_mute", JSON.stringify(this.isBgmMute));
        }
        else {
            var localItem = localStorage.getItem("meta:baccarat:bgm_mute");
            this.isBgmMute = JSON.parse(localItem);
        }
        ;
        // 遊戲音效
        if (!localStorage.getItem("meta:baccarat:fsx_mute")) {
            this.isFsxMute = this.isFsxMute;
            localStorage.setItem("meta:baccarat:fsx_mute", JSON.stringify(this.isFsxMute));
        }
        else {
            var localItem = localStorage.getItem("meta:baccarat:fsx_mute");
            this.isFsxMute = JSON.parse(localItem);
        }
        ;
        // console.log("mute?", this.isFsxMute);
        // 視訊音效
        if (!localStorage.getItem("meta:baccarat:video_sound_mute")) {
            this.isVideoSoundMute = this.isVideoSoundMute;
            localStorage.setItem("meta:baccarat:video_sound_mute", JSON.stringify(this.isVideoSoundMute));
        }
        else {
            var localItem = localStorage.getItem("meta:baccarat:video_sound_mute");
            this.isVideoSoundMute = JSON.parse(localItem);
        }
        ;
        //
        this.bgmAudioSource = this.node.addComponent(cc.AudioSource);
        this.bgmAudioSource.volume = this.bgmVolume;
        for (var i = 0; i < FSX_NUM; i++) {
            var as = this.node.addComponent(cc.AudioSource);
            as.volume = this.fsxVolume;
            if (this.isFsxMute) {
                as.mute = true;
            }
            ;
            this.fsxAudioSource.push(as);
        }
        ;
        //
        this.currentAudioSource = 0;
        //
        var isPlayingLocalData = localStorage.getItem("meta:baccarat:is_playing");
        if (!isPlayingLocalData) {
            this.isPlaying = true;
            localStorage.setItem("meta:baccarat:is_playing", JSON.stringify(this.isPlaying));
        }
        else if (isPlayingLocalData) {
            this.isPlaying = JSON.parse(isPlayingLocalData);
        }
        ;
    };
    AudioMgr.prototype.create = function () {
        // 初始化播放器設定狀態
        var settingsLocalData = JSON.parse(localStorage.getItem("musicPlayerSettings"));
        if (!settingsLocalData) {
            this.isLoopSingle = false;
            // this.isLoopWhole = true;
            this.isShuffle = false;
        }
        else if (settingsLocalData) {
            this.isLoopSingle = settingsLocalData["isLoopSingle"];
            // this.isLoopWhole = localData["isLoopWhole"];
            this.isShuffle = settingsLocalData["isShuffle"];
        }
        ;
        if (this.isBgmMute) {
            this.audioElement.volume = 0.0;
        }
        else if (!this.isBgmMute) {
            this.audioElement.volume = 1.0;
        }
        ;
    };
    /** 取得音樂列表 */
    AudioMgr.prototype.getServerMusicLists = function () {
        // 照介面語系取
        var customLang = "";
        var nowLanguage = I18nMgr_1.default.Instance.nowLanguage;
        if (nowLanguage == "zh_tw") {
            customLang = "zh-tw";
        }
        else if (nowLanguage == "zh_cn") {
            customLang = "zh-cn";
        }
        else {
            customLang = nowLanguage;
        }
        ;
    };
    /** 監聽取得音樂列表資料 */
    AudioMgr.prototype.onGetServerMusicLists = function (eventName, data) {
        var _this = this;
        // console.log("獲取音樂列表: ", data);
        var list = data["data"];
        this.DefaultPlaylist = list;
        this.CustomPlaylist = [];
        //
        var songsStatusLocalData = JSON.parse(localStorage.getItem("songsStatus"));
        if (!songsStatusLocalData) {
            this.CustomPlaylist = this.DefaultPlaylist;
            this.DefaultPlaylist.forEach(function (item) {
                item["active"] = true;
            });
            this.CustomPlaylist.forEach(function (item) {
                item["active"] = true;
            });
            localStorage.setItem("songsStatus", JSON.stringify(this.DefaultPlaylist));
        }
        // 對比資料音樂清單與local音樂清單, 交叉比對出客製化播放清單 (customPlaylist)
        else if (songsStatusLocalData) {
            this.DefaultPlaylist.forEach(function (item) {
                item["active"] = true;
            });
            this.DefaultPlaylist.forEach(function (item) {
                var hasSet = false;
                songsStatusLocalData.forEach(function (local) {
                    if (item["name"] == local["name"]) {
                        hasSet = true;
                        item["active"] = local["active"];
                    }
                    ;
                });
                if (!hasSet) {
                    songsStatusLocalData.push(item);
                }
                ;
                if (item["active"]) {
                    _this.CustomPlaylist.push(item);
                }
                ;
            });
            localStorage.setItem("songsStatus", JSON.stringify(songsStatusLocalData));
            // console.log("###CustomPlaylist: ", this.CustomPlaylist);
        }
        ;
    };
    AudioMgr.prototype.getBgmMute = function () {
        return this.isBgmMute;
    };
    AudioMgr.prototype.setBgmMute = function (mute) {
        var value = (mute) ? true : false;
        if (this.isBgmMute == value) {
            return;
        }
        ;
        this.isBgmMute = value;
        if (this.isBgmMute) {
            // this.bgmAudioSource.mute = true;
            // this.audioElement.volume = 0;
            console.log("[Audio Mgr]: ", "mute:", this.audioElement.volume);
            // this.audioElement.pause();
            this.audioElement.volume = 0.0;
        }
        else {
            // this.bgmAudioSource.mute = false;
            // this.audioElement.volume = 1;
            console.log("[Audio Mgr]: ", "not mute:", this.audioElement.volume);
            // this.audioElement.play();
            this.audioElement.volume = 1.0;
        }
        ;
        localStorage.setItem("meta:baccarat:bgm_mute", JSON.stringify(value));
    };
    AudioMgr.prototype.getFsxVolume = function () {
        return this.fsxVolume;
    };
    AudioMgr.prototype.setFsxVolume = function (value) {
        for (var i = 0; i < this.fsxAudioSource.length; i++) {
            this.fsxAudioSource[i].volume = value;
        }
        this.fsxVolume = value;
        localStorage.setItem("fsxVolume", JSON.stringify(value));
    };
    AudioMgr.prototype.getFsxMute = function () {
        return this.isFsxMute;
    };
    AudioMgr.prototype.setFsxMute = function (mute) {
        var _this = this;
        var value = (mute) ? true : false;
        if (this.isFsxMute == value) {
            return;
        }
        ;
        this.isFsxMute = value;
        this.fsxAudioSource.forEach(function (as) {
            if (_this.isFsxMute) {
                as.mute = true;
            }
            else {
                as.mute = false;
            }
            ;
        });
        localStorage.setItem("meta:baccarat:fsx_mute", JSON.stringify(value));
    };
    AudioMgr.prototype.getVideoSoundMute = function () {
        return this.isFsxMute;
    };
    AudioMgr.prototype.setVideoSoundMute = function (mute) {
        var value = (mute) ? true : false;
        if (this.isVideoSoundMute == value) {
            return;
        }
        ;
        this.isVideoSoundMute = value;
        localStorage.setItem("meta:baccarat:video_sound_mute", JSON.stringify(value));
    };
    AudioMgr.prototype.playBgm = function (url, loop) {
        loop = (loop) ? true : false;
        this.bgmAudioSource.loop = loop;
        this.bgmAudioSource.clip = ResourcesMgr_1.default.Instance.getAsset("audio", url);
        if (this.bgmAudioSource.clip) {
            this.bgmAudioSource.play();
        }
        else {
            cc.error("music audio clip null: ", url);
        }
        ;
    };
    /** 監聽每桌入桌播放bgm */
    AudioMgr.prototype.onAudioTableId = function (eventName, data) {
        this.tableId = data;
    };
    /** 播放網頁音樂(html+url) */
    AudioMgr.prototype.playWebBgm = function () {
        if (this.CustomPlaylist.length == 0) {
            return;
        }
        ;
        // 重置url
        this.audioElement.src = "";
        // 讀取本地的參數
        if (!localStorage.getItem("isBgmMute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("isBgmMute", JSON.stringify(this.isBgmMute));
        }
        else {
            var localItem = localStorage.getItem("isBgmMute");
            this.isBgmMute = JSON.parse(localItem);
        }
        ;
        //
        var bgmUrl = this.CustomPlaylist[0].url;
        console.log("[Audio Mgr]: ", "bgmUrl:", bgmUrl);
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    AudioMgr.prototype.randomSelectBgm = function () {
        // let windowConfig = window["TableBgmMax"];
        // this.maxBgm = windowConfig[this.tableId];
        this.maxBgm = this.CustomPlaylist.length - 1;
        var randomIndex = Math.floor((Math.random() * this.maxBgm));
        if (!this.nowPlayingIndex) {
            this.nowPlayingIndex = randomIndex;
        }
        else if (this.nowPlayingIndex) {
            // 如果跟上一首一樣
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            }
            else {
                if (this.nowPlayingIndex == randomIndex) {
                    if (this.nowPlayingIndex == this.maxBgm) {
                        this.nowPlayingIndex = randomIndex - 1;
                    }
                    else {
                        this.nowPlayingIndex = randomIndex + 1;
                    }
                    ;
                }
                // 跟上一首不一樣
                else {
                    this.nowPlayingIndex = randomIndex;
                }
                ;
            }
            ;
        }
        ;
        var selected = this.CustomPlaylist[this.nowPlayingIndex].url;
        return selected;
    };
    AudioMgr.prototype.onBgmEnded = function () {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        // 重置url
        this.audioElement.src = "";
        // 讀取本地的參數
        if (!localStorage.getItem("isBgmMute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("isBgmMute", JSON.stringify(this.isBgmMute));
        }
        else {
            var localItem = localStorage.getItem("isBgmMute");
            this.isBgmMute = JSON.parse(localItem);
        }
        ;
        //
        // let bgmUrl = this.randomSelectBgm();
        var bgmUrl;
        if (this.isLoopSingle) {
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
            ;
        }
        else if (!this.isLoopSingle) {
            // 有開隨機
            if (this.isShuffle) {
                bgmUrl = this.randomSelectBgm();
                // console.log("bgmUrl: ", bgmUrl);
            }
            // 沒開隨機
            else if (!this.isShuffle) {
                // 如果只有一首
                if (this.CustomPlaylist.length == 1) {
                    this.nowPlayingIndex = this.nowPlayingIndex;
                }
                // 如果有多首
                else {
                    this.nowPlayingIndex += 1;
                    var length = this.CustomPlaylist.length - 1;
                    this.nowPlayingIndex = (this.nowPlayingIndex > length) ? 0 : this.nowPlayingIndex;
                }
                ;
                bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
            }
            ;
        }
        ;
        console.log("[Audio Mgr]: ", "bgmUrl:", bgmUrl);
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    AudioMgr.prototype.stopBgm = function () {
        this.bgmAudioSource.stop();
    };
    /** 停止網頁播放音樂 */
    AudioMgr.prototype.stopWebBgm = function () {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.audioElement.src = "";
    };
    /** 播放音效 */
    AudioMgr.prototype.playFsx = function (url) {
        var as = this.fsxAudioSource[this.currentAudioSource];
        this.currentAudioSource++;
        if (this.currentAudioSource >= FSX_NUM) {
            this.currentAudioSource = 0;
        }
        ;
        as.clip = ResourcesMgr_1.default.Instance.getAsset("audio_fsx", url);
        if (as.clip) {
            as.play();
        }
        else {
            cc.error("effect audio clip null: ", url);
        }
        ;
    };
    /** 播放語音 */
    AudioMgr.prototype.playVoice = function (url) {
        var as = this.fsxAudioSource[this.currentAudioSource];
        this.currentAudioSource++;
        if (this.currentAudioSource >= FSX_NUM) {
            this.currentAudioSource = 0;
        }
        ;
        as.clip = ResourcesMgr_1.default.Instance.getAsset("audio_voice_" + I18nMgr_1.default.Instance.nowLanguage, url);
        if (as.clip) {
            as.play();
        }
        else {
            cc.error("effect audio clip null: ", url);
        }
        ;
    };
    /** 監聽組件取得現在歌單 */
    AudioMgr.prototype.onCompGetPlayList = function (eventName, data) {
        EventMgr_1.default.Instance.dispatchEvent("comp_dispatch_music", this.DefaultPlaylist);
    };
    /** 監聽改變播放模式(循環/隨機)) */
    AudioMgr.prototype.onChangePlayingStatus = function (eventName, data) {
        this.isLoopSingle = data["isLoopSingle"];
        this.isShuffle = data["isShuffle"];
        var set = {
            isLoopSingle: this.isLoopSingle,
            isShuffle: this.isShuffle
        };
        localStorage.setItem("musicPlayerSettings", JSON.stringify(set));
    };
    /** 監聽開始播放音樂 */
    AudioMgr.prototype.onPlaySong = function (eventName, data) {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        var bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    /** 監聽暫停播放音樂 */
    AudioMgr.prototype.onPauseSong = function (eventName, data) {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        this.isPlaying = false;
        localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        this.audioElement.pause();
    };
    /** 監聽播放下一首 */
    AudioMgr.prototype.onNextSong = function (eventName, data) {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        var bgmUrl;
        if (this.isShuffle) {
            bgmUrl = this.randomSelectBgm();
        }
        else if (!this.isShuffle) {
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            }
            else {
                this.nowPlayingIndex += 1;
                var length = this.CustomPlaylist.length - 1;
                this.nowPlayingIndex = (this.nowPlayingIndex > length) ? 0 : this.nowPlayingIndex;
            }
            ;
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        }
        ;
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    /** 監聽播放前一首 */
    AudioMgr.prototype.onPrevSong = function (eventName, data) {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        }
        ;
        var bgmUrl;
        if (this.isShuffle) {
            bgmUrl = this.randomSelectBgm();
        }
        else if (!this.isShuffle) {
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            }
            else {
                this.nowPlayingIndex -= 1;
                this.nowPlayingIndex = (this.nowPlayingIndex < 0) ? (this.CustomPlaylist.length - 1) : this.nowPlayingIndex;
            }
            ;
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        }
        ;
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        }
        ;
    };
    /** 監聽開啟/關閉選歌 */
    AudioMgr.prototype.onToggleSong = function (eventName, data) {
        var _this = this;
        var dataName = data["name"];
        var dataActive = data["active"];
        var localCustomPlaylist = JSON.parse(localStorage.getItem("songsStatus"));
        //
        if (dataActive) {
            // 從DefaultList裡去遍歷並push到選中的該song到custom list
            this.DefaultPlaylist.forEach(function (item) {
                if (item["name"] == dataName) {
                    item["active"] = true;
                    _this.CustomPlaylist.push(item);
                }
                ;
                localCustomPlaylist.forEach(function (local) {
                    if (item["name"] == local["name"]) {
                        local["active"] = item["active"];
                    }
                    ;
                });
            });
        }
        else if (!dataActive) {
            // 從Custom list裡去遍歷到選中的song, slice掉
            for (var i = 0; i < this.CustomPlaylist.length; i++) {
                var item = this.CustomPlaylist[i];
                if (item.name == dataName) {
                    this.CustomPlaylist.splice(i, 1);
                }
                ;
            }
            ;
            //
            this.DefaultPlaylist.forEach(function (item) {
                if (item["name"] == dataName) {
                    item["active"] = false;
                }
                ;
                localCustomPlaylist.forEach(function (local) {
                    if (item["name"] == local["name"]) {
                        local["active"] = item["active"];
                    }
                    ;
                });
            });
        }
        ;
        //
        localStorage.setItem("songsStatus", JSON.stringify(localCustomPlaylist));
    };
    // --------------------------------------------------------------------------------------
    AudioMgr.prototype.onChangeBgmMute = function (eventName, data) {
        this.setBgmMute(data);
    };
    AudioMgr.prototype.onChangeFsxMute = function (eventName, data) {
        this.setFsxMute(data);
    };
    AudioMgr.prototype.onChangeVideoSoundMute = function (eventName, data) {
        this.setVideoSoundMute(data);
    };
    var AudioMgr_1;
    AudioMgr.Instance = null;
    AudioMgr = AudioMgr_1 = __decorate([
        ccclass
    ], AudioMgr);
    return AudioMgr;
}(cc.Component));
exports.default = AudioMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxtYW5hZ2Vyc1xcQXVkaW9NZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLHFDQUFnQztBQUNoQywrQ0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBR2pCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcXFCQztRQWhxQlcsU0FBRyxHQUFHLElBQUksQ0FBQztRQUVYLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUN0QyxvQkFBYyxHQUEwQixFQUFFLENBQUM7UUFDM0Msd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBRXZDLFdBQVc7UUFDSCxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQWU7UUFDUixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixtQkFBbUI7UUFDbkIsaUNBQWlDO1FBQ2pDLDhCQUE4QjtRQUN0QixvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUMzQixrQkFBa0I7UUFDVixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUc1QixjQUFjO1FBQ04sWUFBTSxHQUFHLElBQUksQ0FBQztRQUV0QixvQkFBb0I7UUFDYixxQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUM1QixrQkFBa0I7UUFDVixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFDaEIsbUJBQWEsR0FBRyxFQUFFLENBQUM7UUFHM0IsWUFBWTtRQUNMLGtC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RSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBSUQseUZBQXlGO0lBQ2pGLGtDQUFlLEdBQXZCLFVBQXdCLFNBQVMsRUFBRSxJQUFJO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLGtDQUFlLEdBQXZCLFVBQXdCLFNBQVMsRUFBRSxJQUFJO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLHlDQUFzQixHQUE5QixVQUErQixTQUFTLEVBQUUsSUFBSTtRQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUFqcUJhLGlCQUFRLEdBQWEsSUFBSSxDQUFDO0lBSHZCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxcUI1QjtJQUFELGVBQUM7Q0FycUJELEFBcXFCQyxDQXJxQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcXFCakQ7a0JBcnFCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudE1nciBmcm9tIFwiLi9FdmVudE1nclwiO1xuaW1wb3J0IEkxOG5NZ3IgZnJvbSBcIi4vSTE4bk1nclwiO1xuaW1wb3J0IFJlc01nciBmcm9tIFwiLi9SZXNvdXJjZXNNZ3JcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbnZhciBGU1hfTlVNID0gMzM7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEF1ZGlvTWdyID0gbnVsbDtcblxuICAgIHByaXZhdGUgeGhyID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNCZ21NdXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0ZzeE11dGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzVmlkZW9Tb3VuZE11dGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGJnbVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGZzeFZvbHVtZTogbnVtYmVyID0gMTtcblxuICAgIHByaXZhdGUgYmdtQXVkaW9Tb3VyY2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcbiAgICBwcml2YXRlIGZzeEF1ZGlvU291cmNlOiBBcnJheTxjYy5BdWRpb1NvdXJjZT4gPSBbXTtcbiAgICBwcml2YXRlIGN1cnJlbnRBdWRpb1NvdXJjZTogbnVtYmVyID0gMDtcblxuICAgIC8qKiDnlbbliY3moYzomZ8gKi9cbiAgICBwcml2YXRlIHRhYmxlSWQgPSBudWxsO1xuICAgIC8qKiBIVE1M6IGy6Z+z5YWD57SgICovXG4gICAgcHVibGljIGF1ZGlvRWxlbWVudCA9IG51bGw7XG4gICAgLyoqIOePvuato+aSreaUvuS4reatjOabsmluZGV4ICovXG4gICAgLy8gcHJpdmF0ZSBub3dSYW5kb21JbmRleCA9IG51bGw7XG4gICAgLy8gcHJpdmF0ZSBub3dSYW5kb21JbmRleCA9IDE7XG4gICAgcHJpdmF0ZSBub3dSYW5kb21JbmRleCA9IDA7XG4gICAgLyoqIOePvuato+aSreaUvuatjOabskluZGV4ICovXG4gICAgcHJpdmF0ZSBub3dQbGF5aW5nSW5kZXggPSAwO1xuXG5cbiAgICAvKiogYmdt5pyA5aSn5pW46YePICovXG4gICAgcHJpdmF0ZSBtYXhCZ20gPSBudWxsO1xuXG4gICAgLyoqIOWEsuWtmOeVtuWJjeWCs+S+hueahOmgkOioremfs+aoguWIl+ihqCAqLyBcbiAgICBwdWJsaWMgRGVmYXVsdFBsYXlsaXN0ID0gW107XG4gICAgLyoqIOWEsuWtmOeVtuWJjeWuouijveWMlumfs+aoguWIl+ihqCAqL1xuICAgIHByaXZhdGUgQ3VzdG9tUGxheWxpc3QgPSBbXTtcbiAgICAvKiog5YSy5a2YbG9jYWxob3N06KOh55qE6Z+z5qiC5YiX6KGoICovXG4gICAgcHJpdmF0ZSBMb2NhbFBsYXlsaXN0ID0gW107XG5cblxuICAgIC8vIOmfs+aoguaSreaUvuWZqOWKn+iDveiuiuaVuFxuICAgIHB1YmxpYyBpc0xvb3BTaW5nbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBwcml2YXRlIGlzTG9vcFdob2xlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgaXNTaHVmZmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBiYW5uZWRTb25ncyA9IHt9O1xuXG4gICAgLyoqIOaSreaUvuWZqOaYr+WQpuaaq+WBnOS4rSAqL1xuICAgIHB1YmxpYyBpc1BsYXlpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKiDmnInlnKhkZW1v6Ieq5a6a576p6KOhVHlwZeijoeeahOmfs+aViOaqlOahiOWQjeeosSAqL1xuICAgIHByaXZhdGUgY3VzdG9tVHlwZUxpc3QgPSBbXTtcbiAgICAvKiog55W25YmN6Z+z5pWI57WE6aGe5Z6LIDA96aCQ6KitICovXG4gICAgcHJpdmF0ZSBjdXJyZW50RnN4VHlwZTogbnVtYmVyID0gMDtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBFdmVudE1hcCA9IHtcbiAgICAgICAgXCJhdWRpb190YWJsZUlkXCI6IHRoaXMub25BdWRpb1RhYmxlSWQsXG4gICAgICAgIFwicmVzX2dldF9tdXNpY1wiOiB0aGlzLm9uR2V0U2VydmVyTXVzaWNMaXN0cyxcbiAgICAgICAgXCJjaGFuZ2VfYmdtX211dGVcIjogdGhpcy5vbkNoYW5nZUJnbU11dGUsXG4gICAgICAgIC8vIFwiY2hhbmdlX2ZzeF9tdXRlXCI6IHRoaXMub25DaGFuZ2VGc3hNdXRlLFxuICAgICAgICBcImNvbXBfZ2V0X211c2ljXCI6IHRoaXMub25Db21wR2V0UGxheUxpc3QsXG4gICAgICAgIFwibXVzaWNfcGxheWVyX3BsYXlcIjogdGhpcy5vblBsYXlTb25nLFxuICAgICAgICBcIm11c2ljX3BsYXllcl9wYXVzZVwiOiB0aGlzLm9uUGF1c2VTb25nLFxuICAgICAgICBcIm11c2ljX3BsYXllcl9uZXh0X3NvbmdcIjogdGhpcy5vbk5leHRTb25nLFxuICAgICAgICBcIm11c2ljX3BsYXllcl9wcmV2X3NvbmdcIjogdGhpcy5vblByZXZTb25nLFxuICAgICAgICBcIm11c2ljX3BsYXllcl9jaGFuZ2Vfc3RhdHVzXCI6IHRoaXMub25DaGFuZ2VQbGF5aW5nU3RhdHVzLFxuICAgICAgICBcIm11c2ljX3BsYXllcl90b2dnbGVfc29uZ1wiOiB0aGlzLm9uVG9nZ2xlU29uZyxcblxuICAgICAgICBcInN5czpmc3hfbXV0ZVwiOiB0aGlzLm9uQ2hhbmdlRnN4TXV0ZSxcbiAgICAgICAgXCJzeXM6dmlkZW9fc291bmRfbXV0ZVwiOiB0aGlzLm9uQ2hhbmdlVmlkZW9Tb3VuZE11dGUsXG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICAgICAgaWYgKEF1ZGlvTWdyLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltlcnJvcjpdIGF1ZGlvIG1nciBoYXMgbXVsdGkgaW5zdGFuY2VzISEhXCIpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltmaXg6XSBhdWRpbyBtZ3IgaGFzIGJlZW4gZGVzdHJveWVkLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5FdmVudE1hcCkge1xuICAgICAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMsIHRoaXMuRXZlbnRNYXBba2V5XSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQub25lbmRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25CZ21FbmRlZCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5FdmVudE1hcCkge1xuICAgICAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMsIHRoaXMuRXZlbnRNYXBba2V5XSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIC8vIEhUTUwgYXVkaW/lhYPntKBcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICAgICAgICBpZiAoIXRoaXMuYXVkaW9FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDoroDlj5bmnKzlnLDnmoTlj4PmlbhcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6YmdtX211dGVcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCZ21NdXRlID0gdGhpcy5pc0JnbU11dGU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6YmdtX211dGVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc0JnbU11dGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsb2NhbEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6YmdtX211dGVcIik7XG4gICAgICAgICAgICB0aGlzLmlzQmdtTXV0ZSA9IEpTT04ucGFyc2UobG9jYWxJdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6YGK5oiy6Z+z5pWIXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OmZzeF9tdXRlXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmlzRnN4TXV0ZSA9IHRoaXMuaXNGc3hNdXRlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OmZzeF9tdXRlXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNGc3hNdXRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OmZzeF9tdXRlXCIpO1xuICAgICAgICAgICAgdGhpcy5pc0ZzeE11dGUgPSBKU09OLnBhcnNlKGxvY2FsSXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibXV0ZT9cIiwgdGhpcy5pc0ZzeE11dGUpO1xuICAgICAgICAvLyDoppboqIrpn7PmlYhcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6dmlkZW9fc291bmRfbXV0ZVwiKSkge1xuICAgICAgICAgICAgdGhpcy5pc1ZpZGVvU291bmRNdXRlID0gdGhpcy5pc1ZpZGVvU291bmRNdXRlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OnZpZGVvX3NvdW5kX211dGVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1ZpZGVvU291bmRNdXRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OnZpZGVvX3NvdW5kX211dGVcIik7XG4gICAgICAgICAgICB0aGlzLmlzVmlkZW9Tb3VuZE11dGUgPSBKU09OLnBhcnNlKGxvY2FsSXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYmdtQXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcbiAgICAgICAgdGhpcy5iZ21BdWRpb1NvdXJjZS52b2x1bWUgPSB0aGlzLmJnbVZvbHVtZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGU1hfTlVNOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhcyA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICAgICAgYXMudm9sdW1lID0gdGhpcy5mc3hWb2x1bWU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0ZzeE11dGUpIHtcbiAgICAgICAgICAgICAgICBhcy5tdXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmZzeEF1ZGlvU291cmNlLnB1c2goYXMpO1xuICAgICAgICB9O1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpb1NvdXJjZSA9IDA7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCBpc1BsYXlpbmdMb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6aXNfcGxheWluZ1wiKTtcbiAgICAgICAgaWYgKCFpc1BsYXlpbmdMb2NhbERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0YTpiYWNjYXJhdDppc19wbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGF5aW5nTG9jYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IEpTT04ucGFyc2UoaXNQbGF5aW5nTG9jYWxEYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW5pKt5pS+5Zmo6Kit5a6a54uA5oWLXG4gICAgICAgIGxldCBzZXR0aW5nc0xvY2FsRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXNpY1BsYXllclNldHRpbmdzXCIpKTtcbiAgICAgICAgaWYgKCFzZXR0aW5nc0xvY2FsRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5pc0xvb3BTaW5nbGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuaXNMb29wV2hvbGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc1NodWZmbGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nc0xvY2FsRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5pc0xvb3BTaW5nbGUgPSBzZXR0aW5nc0xvY2FsRGF0YVtcImlzTG9vcFNpbmdsZVwiXTtcbiAgICAgICAgICAgIC8vIHRoaXMuaXNMb29wV2hvbGUgPSBsb2NhbERhdGFbXCJpc0xvb3BXaG9sZVwiXTtcbiAgICAgICAgICAgIHRoaXMuaXNTaHVmZmxlID0gc2V0dGluZ3NMb2NhbERhdGFbXCJpc1NodWZmbGVcIl07XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjA7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWUgPSAxLjA7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIOWPluW+l+mfs+aoguWIl+ihqCAqL1xuICAgIHB1YmxpYyBnZXRTZXJ2ZXJNdXNpY0xpc3RzKCk6IHZvaWQge1xuICAgICAgICAvLyDnhafku4vpnaLoqp7ns7vlj5ZcbiAgICAgICAgbGV0IGN1c3RvbUxhbmcgPSBcIlwiO1xuICAgICAgICBsZXQgbm93TGFuZ3VhZ2UgPSBJMThuTWdyLkluc3RhbmNlLm5vd0xhbmd1YWdlO1xuICAgICAgICBpZiAobm93TGFuZ3VhZ2UgPT0gXCJ6aF90d1wiKSB7XG4gICAgICAgICAgICBjdXN0b21MYW5nID0gXCJ6aC10d1wiXG4gICAgICAgIH0gZWxzZSBpZiAobm93TGFuZ3VhZ2UgPT0gXCJ6aF9jblwiKSB7XG4gICAgICAgICAgICBjdXN0b21MYW5nID0gXCJ6aC1jblwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXN0b21MYW5nID0gbm93TGFuZ3VhZ2U7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIOebo+iBveWPluW+l+mfs+aoguWIl+ihqOizh+aWmSAqL1xuICAgIHB1YmxpYyBvbkdldFNlcnZlck11c2ljTGlzdHMoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi542y5Y+W6Z+z5qiC5YiX6KGoOiBcIiwgZGF0YSk7XG4gICAgICAgIGxldCBsaXN0ID0gZGF0YVtcImRhdGFcIl07XG4gICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0ID0gbGlzdDtcbiAgICAgICAgdGhpcy5DdXN0b21QbGF5bGlzdCA9IFtdO1xuICAgICAgICAvL1xuICAgICAgICBsZXQgc29uZ3NTdGF0dXNMb2NhbERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29uZ3NTdGF0dXNcIikpO1xuICAgICAgICBpZiAoIXNvbmdzU3RhdHVzTG9jYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLkN1c3RvbVBsYXlsaXN0ID0gdGhpcy5EZWZhdWx0UGxheWxpc3Q7XG5cbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbVtcImFjdGl2ZVwiXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5DdXN0b21QbGF5bGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJhY3RpdmVcIl0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic29uZ3NTdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5EZWZhdWx0UGxheWxpc3QpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlsI3mr5Tos4fmlpnpn7PmqILmuIXllq7oiIdsb2NhbOmfs+aogua4heWWriwg5Lqk5Y+J5q+U5bCN5Ye65a6i6KO95YyW5pKt5pS+5riF5ZauIChjdXN0b21QbGF5bGlzdClcbiAgICAgICAgZWxzZSBpZiAoc29uZ3NTdGF0dXNMb2NhbERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbVtcImFjdGl2ZVwiXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0LmZvckVhY2ggKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBoYXNTZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzb25nc1N0YXR1c0xvY2FsRGF0YS5mb3JFYWNoKGxvY2FsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdID09IGxvY2FsW1wibmFtZVwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJhY3RpdmVcIl0gPSBsb2NhbFtcImFjdGl2ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1NldCkge1xuICAgICAgICAgICAgICAgICAgICBzb25nc1N0YXR1c0xvY2FsRGF0YS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJhY3RpdmVcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DdXN0b21QbGF5bGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb25nc1N0YXR1c1wiLCBKU09OLnN0cmluZ2lmeShzb25nc1N0YXR1c0xvY2FsRGF0YSkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIjIyNDdXN0b21QbGF5bGlzdDogXCIsIHRoaXMuQ3VzdG9tUGxheWxpc3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG5cbiAgICBwdWJsaWMgZ2V0QmdtTXV0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNCZ21NdXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCZ21NdXRlKG11dGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKG11dGUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0JnbU11dGUgPT0gdmFsdWUpIHsgcmV0dXJuOyB9O1xuXG4gICAgICAgIHRoaXMuaXNCZ21NdXRlID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmlzQmdtTXV0ZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5iZ21BdWRpb1NvdXJjZS5tdXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltBdWRpbyBNZ3JdOiBcIiwgXCJtdXRlOlwiLCB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWUpO1xuICAgICAgICAgICAgLy8gdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuMDtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzLmJnbUF1ZGlvU291cmNlLm11dGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZSA9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltBdWRpbyBNZ3JdOiBcIiwgXCJub3QgbXV0ZTpcIiwgdGhpcy5hdWRpb0VsZW1lbnQudm9sdW1lKTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZSA9IDEuMDtcbiAgICAgICAgfTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldGE6YmFjY2FyYXQ6YmdtX211dGVcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RnN4Vm9sdW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmZzeFZvbHVtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RnN4Vm9sdW1lKHZhbHVlKTogdm9pZCB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmZzeEF1ZGlvU291cmNlLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgdGhpcy5mc3hBdWRpb1NvdXJjZVtpXS52b2x1bWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnN4Vm9sdW1lID0gdmFsdWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnN4Vm9sdW1lXCIsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZzeE11dGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRnN4TXV0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RnN4TXV0ZShtdXRlOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gKG11dGUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0ZzeE11dGUgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlzRnN4TXV0ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZzeEF1ZGlvU291cmNlLmZvckVhY2goYXMgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGc3hNdXRlKSB7XG4gICAgICAgICAgICAgICAgYXMubXV0ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFzLm11dGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0YTpiYWNjYXJhdDpmc3hfbXV0ZVwiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWaWRlb1NvdW5kTXV0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGc3hNdXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWaWRlb1NvdW5kTXV0ZShtdXRlOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gKG11dGUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc1ZpZGVvU291bmRNdXRlID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pc1ZpZGVvU291bmRNdXRlID0gdmFsdWU7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRhOmJhY2NhcmF0OnZpZGVvX3NvdW5kX211dGVcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheUJnbSh1cmwsIGxvb3ApIHtcbiAgICAgICAgbG9vcCA9IChsb29wKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5iZ21BdWRpb1NvdXJjZS5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5iZ21BdWRpb1NvdXJjZS5jbGlwID0gUmVzTWdyLkluc3RhbmNlLmdldEFzc2V0KFwiYXVkaW9cIiwgdXJsKTtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9Tb3VyY2UuY2xpcCkge1xuICAgICAgICAgICAgdGhpcy5iZ21BdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIm11c2ljIGF1ZGlvIGNsaXAgbnVsbDogXCIsIHVybCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIOebo+iBveavj+ahjOWFpeahjOaSreaUvmJnbSAqL1xuICAgIHB1YmxpYyBvbkF1ZGlvVGFibGVJZChldmVudE5hbWUsIGRhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YWJsZUlkID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKiog5pKt5pS+57ay6aCB6Z+z5qiCKGh0bWwrdXJsKSAqL1xuICAgIHB1YmxpYyBwbGF5V2ViQmdtKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5DdXN0b21QbGF5bGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICAvLyDph43nva51cmxcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuc3JjID0gXCJcIjtcbiAgICAgICAgLy8g6K6A5Y+W5pys5Zyw55qE5Y+D5pW4XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0JnbU11dGVcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCZ21NdXRlID0gdGhpcy5pc0JnbU11dGU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQmdtTXV0ZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlzQmdtTXV0ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxvY2FsSXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNCZ21NdXRlXCIpO1xuICAgICAgICAgICAgdGhpcy5pc0JnbU11dGUgPSBKU09OLnBhcnNlKGxvY2FsSXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIGxldCBiZ21VcmwgPSB0aGlzLkN1c3RvbVBsYXlsaXN0WzBdLnVybDtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQXVkaW8gTWdyXTogXCIsIFwiYmdtVXJsOlwiLCBiZ21VcmwpO1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBiZ21Vcmw7XG4gICAgICAgIGlmICh0aGlzLmlzQmdtTXV0ZSkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljSXNQbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljSXNQbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmRvbVNlbGVjdEJnbSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsZXQgd2luZG93Q29uZmlnID0gd2luZG93W1wiVGFibGVCZ21NYXhcIl07XG4gICAgICAgIC8vIHRoaXMubWF4QmdtID0gd2luZG93Q29uZmlnW3RoaXMudGFibGVJZF07XG4gICAgICAgIHRoaXMubWF4QmdtID0gdGhpcy5DdXN0b21QbGF5bGlzdC5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXggID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4QmdtKSk7XG4gICAgICAgIGlmICghdGhpcy5ub3dQbGF5aW5nSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ID0gcmFuZG9tSW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub3dQbGF5aW5nSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOi3n+S4iuS4gOmmluS4gOaoo1xuICAgICAgICAgICAgaWYgKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1BsYXlpbmdJbmRleCA9IHRoaXMubm93UGxheWluZ0luZGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub3dQbGF5aW5nSW5kZXggPT0gcmFuZG9tSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm93UGxheWluZ0luZGV4ID09IHRoaXMubWF4QmdtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd1BsYXlpbmdJbmRleCA9IHJhbmRvbUluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ID0gcmFuZG9tSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDot5/kuIrkuIDpppbkuI3kuIDmqKNcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggPSByYW5kb21JbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLkN1c3RvbVBsYXlsaXN0W3RoaXMubm93UGxheWluZ0luZGV4XS51cmw7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25CZ21FbmRlZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBzZWxlY3RlZCBzb25nIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6YeN572udXJsXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnNyYyA9IFwiXCI7XG4gICAgICAgIC8vIOiugOWPluacrOWcsOeahOWPg+aVuFxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNCZ21NdXRlXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQmdtTXV0ZSA9IHRoaXMuaXNCZ21NdXRlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0JnbU11dGVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc0JnbU11dGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsb2NhbEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQmdtTXV0ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNCZ21NdXRlID0gSlNPTi5wYXJzZShsb2NhbEl0ZW0pO1xuICAgICAgICB9O1xuICAgICAgICAvL1xuICAgICAgICAvLyBsZXQgYmdtVXJsID0gdGhpcy5yYW5kb21TZWxlY3RCZ20oKTtcbiAgICAgICAgbGV0IGJnbVVybDtcbiAgICAgICAgaWYgKHRoaXMuaXNMb29wU2luZ2xlKSB7XG4gICAgICAgICAgICBiZ21VcmwgPSB0aGlzLkN1c3RvbVBsYXlsaXN0W3RoaXMubm93UGxheWluZ0luZGV4XS51cmw7O1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTG9vcFNpbmdsZSkge1xuICAgICAgICAgICAgLy8g5pyJ6ZaL6Zqo5qmfXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NodWZmbGUpIHtcbiAgICAgICAgICAgICAgICBiZ21VcmwgPSB0aGlzLnJhbmRvbVNlbGVjdEJnbSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmdtVXJsOiBcIiwgYmdtVXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaykumWi+maqOapn1xuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuaXNTaHVmZmxlKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5Y+q5pyJ5LiA6aaWXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggPSB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5aSa6aaWXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSB0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ID0gKHRoaXMubm93UGxheWluZ0luZGV4ID4gbGVuZ3RoKSA/IDAgOiB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJnbVVybCA9IHRoaXMuQ3VzdG9tUGxheWxpc3RbdGhpcy5ub3dQbGF5aW5nSW5kZXhdLnVybDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0F1ZGlvIE1ncl06IFwiLCBcImJnbVVybDpcIiwgYmdtVXJsKTtcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuc3JjID0gYmdtVXJsO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQmdtTXV0ZSkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljSXNQbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljSXNQbGF5aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNQbGF5aW5nKSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BCZ20oKSB7XG4gICAgICAgIHRoaXMuYmdtQXVkaW9Tb3VyY2Uuc3RvcCgpO1xuICAgIH1cblxuICAgIC8qKiDlgZzmraLntrLpoIHmkq3mlL7pn7PmqIIgKi9cbiAgICBwdWJsaWMgc3RvcFdlYkJnbSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBcIlwiO1xuICAgIH1cblxuICAgIC8qKiDmkq3mlL7pn7PmlYggKi9cbiAgICBwdWJsaWMgcGxheUZzeCh1cmwpOiB2b2lkIHtcbiAgICAgICAgdmFyIGFzID0gdGhpcy5mc3hBdWRpb1NvdXJjZVt0aGlzLmN1cnJlbnRBdWRpb1NvdXJjZV07XG4gICAgICAgIHRoaXMuY3VycmVudEF1ZGlvU291cmNlICsrO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QXVkaW9Tb3VyY2UgPj0gRlNYX05VTSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXVkaW9Tb3VyY2UgPSAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFzLmNsaXAgPSBSZXNNZ3IuSW5zdGFuY2UuZ2V0QXNzZXQoXCJhdWRpb19mc3hcIiwgdXJsKTtcblxuICAgICAgICBpZiAoYXMuY2xpcCkge1xuICAgICAgICAgICAgYXMucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJlZmZlY3QgYXVkaW8gY2xpcCBudWxsOiBcIiwgdXJsKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiog5pKt5pS+6Kqe6Z+zICovXG4gICAgcHVibGljIHBsYXlWb2ljZSh1cmwpOiB2b2lkIHtcbiAgICAgICAgdmFyIGFzID0gdGhpcy5mc3hBdWRpb1NvdXJjZVt0aGlzLmN1cnJlbnRBdWRpb1NvdXJjZV07XG4gICAgICAgIHRoaXMuY3VycmVudEF1ZGlvU291cmNlICsrO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QXVkaW9Tb3VyY2UgPj0gRlNYX05VTSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXVkaW9Tb3VyY2UgPSAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFzLmNsaXAgPSBSZXNNZ3IuSW5zdGFuY2UuZ2V0QXNzZXQoYGF1ZGlvX3ZvaWNlXyR7STE4bk1nci5JbnN0YW5jZS5ub3dMYW5ndWFnZX1gLCB1cmwpO1xuXG4gICAgICAgIGlmIChhcy5jbGlwKSB7XG4gICAgICAgICAgICBhcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcImVmZmVjdCBhdWRpbyBjbGlwIG51bGw6IFwiLCB1cmwpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLyoqIOebo+iBvee1hOS7tuWPluW+l+ePvuWcqOatjOWWriAqL1xuICAgIHByaXZhdGUgb25Db21wR2V0UGxheUxpc3QoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIEV2ZW50TWdyLkluc3RhbmNlLmRpc3BhdGNoRXZlbnQoXCJjb21wX2Rpc3BhdGNoX211c2ljXCIsIHRoaXMuRGVmYXVsdFBsYXlsaXN0KTtcbiAgICB9XG5cbiAgICAvKiog55uj6IG95pS56K6K5pKt5pS+5qih5byPKOW+queSsC/pmqjmqZ8pKSAqL1xuICAgIHByaXZhdGUgb25DaGFuZ2VQbGF5aW5nU3RhdHVzKGV2ZW50TmFtZSwgZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTG9vcFNpbmdsZSA9IGRhdGFbXCJpc0xvb3BTaW5nbGVcIl07XG4gICAgICAgIHRoaXMuaXNTaHVmZmxlID0gZGF0YVtcImlzU2h1ZmZsZVwiXTtcbiAgICAgICAgbGV0IHNldCA9IHtcbiAgICAgICAgICAgIGlzTG9vcFNpbmdsZTogdGhpcy5pc0xvb3BTaW5nbGUsXG4gICAgICAgICAgICBpc1NodWZmbGU6IHRoaXMuaXNTaHVmZmxlXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNQbGF5ZXJTZXR0aW5nc1wiLCBKU09OLnN0cmluZ2lmeShzZXQpKTtcbiAgICB9XG5cbiAgICAvKiog55uj6IG96ZaL5aeL5pKt5pS+6Z+z5qiCICovXG4gICAgcHJpdmF0ZSBvblBsYXlTb25nKGV2ZW50TmFtZSwgZGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5DdXN0b21QbGF5bGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHNlbGVjdGVkIHNvbmchXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgYmdtVXJsID0gdGhpcy5DdXN0b21QbGF5bGlzdFt0aGlzLm5vd1BsYXlpbmdJbmRleF0udXJsO1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBiZ21Vcmw7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNJc1BsYXlpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1BsYXlpbmcpKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0JnbU11dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNJc1BsYXlpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1BsYXlpbmcpKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiog55uj6IG95pqr5YGc5pKt5pS+6Z+z5qiCICovXG4gICAgcHJpdmF0ZSBvblBhdXNlU29uZyhldmVudE5hbWUsIGRhdGEpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBzZWxlY3RlZCBzb25nIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY0lzUGxheWluZ1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlzUGxheWluZykpO1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgIH1cblxuICAgIC8qKiDnm6Pogb3mkq3mlL7kuIvkuIDpppYgKi9cbiAgICBwcml2YXRlIG9uTmV4dFNvbmcoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2VsZWN0ZWQgc29uZyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGxldCBiZ21Vcmw7XG4gICAgICAgIGlmICh0aGlzLmlzU2h1ZmZsZSkge1xuICAgICAgICAgICAgYmdtVXJsID0gdGhpcy5yYW5kb21TZWxlY3RCZ20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pc1NodWZmbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggPSB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5DdXN0b21QbGF5bGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMubm93UGxheWluZ0luZGV4ID0gKHRoaXMubm93UGxheWluZ0luZGV4ID4gbGVuZ3RoKSA/IDAgOiB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBiZ21VcmwgPSB0aGlzLkN1c3RvbVBsYXlsaXN0W3RoaXMubm93UGxheWluZ0luZGV4XS51cmw7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnNyYyA9IGJnbVVybDtcblxuICAgICAgICBpZiAodGhpcy5pc0JnbU11dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY0lzUGxheWluZ1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlzUGxheWluZykpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQmdtTXV0ZSkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY0lzUGxheWluZ1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlzUGxheWluZykpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiDnm6Pogb3mkq3mlL7liY3kuIDpppYgKi9cbiAgICBwcml2YXRlIG9uUHJldlNvbmcoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2VsZWN0ZWQgc29uZyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGxldCBiZ21Vcmw7XG4gICAgICAgIGlmICh0aGlzLmlzU2h1ZmZsZSkge1xuICAgICAgICAgICAgYmdtVXJsID0gdGhpcy5yYW5kb21TZWxlY3RCZ20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pc1NodWZmbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggPSB0aGlzLm5vd1BsYXlpbmdJbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dQbGF5aW5nSW5kZXggLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1BsYXlpbmdJbmRleCA9ICh0aGlzLm5vd1BsYXlpbmdJbmRleCA8IDApID8gKHRoaXMuQ3VzdG9tUGxheWxpc3QubGVuZ3RoIC0gMSkgOiB0aGlzLm5vd1BsYXlpbmdJbmRleDsgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYmdtVXJsID0gdGhpcy5DdXN0b21QbGF5bGlzdFt0aGlzLm5vd1BsYXlpbmdJbmRleF0udXJsO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBiZ21Vcmw7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCZ21NdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNJc1BsYXlpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1BsYXlpbmcpKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0JnbU11dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNJc1BsYXlpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pc1BsYXlpbmcpKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiog55uj6IG96ZaL5ZWfL+mXnOmWiemBuOatjCAqL1xuICAgIHByaXZhdGUgb25Ub2dnbGVTb25nKGV2ZW50TmFtZSwgZGF0YSk6IHZvaWQge1xuICAgICAgICBsZXQgZGF0YU5hbWUgPSBkYXRhW1wibmFtZVwiXTtcbiAgICAgICAgbGV0IGRhdGFBY3RpdmUgPSBkYXRhW1wiYWN0aXZlXCJdO1xuICAgICAgICBsZXQgbG9jYWxDdXN0b21QbGF5bGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb25nc1N0YXR1c1wiKSk7XG4gICAgICAgIC8vXG4gICAgICAgIGlmIChkYXRhQWN0aXZlKSB7XG4gICAgICAgICAgICAvLyDlvp5EZWZhdWx0TGlzdOijoeWOu+mBjeatt+S4pnB1c2jliLDpgbjkuK3nmoToqbJzb25n5YiwY3VzdG9tIGxpc3RcbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFBsYXlsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdID09IGRhdGFOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJhY3RpdmVcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkN1c3RvbVBsYXlsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsb2NhbEN1c3RvbVBsYXlsaXN0LmZvckVhY2gobG9jYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtcIm5hbWVcIl0gPT0gbG9jYWxbXCJuYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFtcImFjdGl2ZVwiXSA9IGl0ZW1bXCJhY3RpdmVcIl07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZGF0YUFjdGl2ZSkge1xuICAgICAgICAgICAgLy8g5b6eQ3VzdG9tIGxpc3Too6HljrvpgY3mrbfliLDpgbjkuK3nmoRzb25nLCBzbGljZeaOiVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkN1c3RvbVBsYXlsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLkN1c3RvbVBsYXlsaXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT0gZGF0YU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DdXN0b21QbGF5bGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdGhpcy5EZWZhdWx0UGxheWxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVtcIm5hbWVcIl0gPT0gZGF0YU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVtcImFjdGl2ZVwiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbG9jYWxDdXN0b21QbGF5bGlzdC5mb3JFYWNoKGxvY2FsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdID09IGxvY2FsW1wibmFtZVwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxbXCJhY3RpdmVcIl0gPSBpdGVtW1wiYWN0aXZlXCJdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic29uZ3NTdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxDdXN0b21QbGF5bGlzdCkpO1xuICAgIH1cblxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgb25DaGFuZ2VCZ21NdXRlKGV2ZW50TmFtZSwgZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEJnbU11dGUoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUZzeE11dGUoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0RnN4TXV0ZShkYXRhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2hhbmdlVmlkZW9Tb3VuZE11dGUoZXZlbnROYW1lLCBkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmlkZW9Tb3VuZE11dGUoZGF0YSk7XG4gICAgfVxufVxuIl19