"use strict";
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