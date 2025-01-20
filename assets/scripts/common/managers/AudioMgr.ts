import EventMgr from "./EventMgr";
import I18nMgr from "./I18nMgr";
import ResMgr from "./ResourcesMgr";

const {ccclass, property} = cc._decorator;

var FSX_NUM = 33;

@ccclass
export default class AudioMgr extends cc.Component {


    public static Instance: AudioMgr = null;

    private xhr = null;

    private isBgmMute: boolean = false;
    private isFsxMute: boolean = false;
    private isVideoSoundMute: boolean = false;
    private bgmVolume: number = 1;
    private fsxVolume: number = 1;

    private bgmAudioSource: cc.AudioSource = null;
    private fsxAudioSource: Array<cc.AudioSource> = [];
    private currentAudioSource: number = 0;

    /** 當前桌號 */
    private tableId = null;
    /** HTML聲音元素 */
    public audioElement = null;
    /** 現正播放中歌曲index */
    // private nowRandomIndex = null;
    // private nowRandomIndex = 1;
    private nowRandomIndex = 0;
    /** 現正播放歌曲Index */
    private nowPlayingIndex = 0;


    /** bgm最大數量 */
    private maxBgm = null;

    /** 儲存當前傳來的預設音樂列表 */ 
    public DefaultPlaylist = [];
    /** 儲存當前客製化音樂列表 */
    private CustomPlaylist = [];
    /** 儲存localhost裡的音樂列表 */
    private LocalPlaylist = [];


    // 音樂播放器功能變數
    public isLoopSingle: boolean = false;
    // private isLoopWhole: boolean = true;
    public isShuffle: boolean = false;
    private bannedSongs = {};

    /** 播放器是否暫停中 */
    public isPlaying: boolean = true;


    // --------------------------------------------------------------------------
    /** 有在demo自定義裡Type裡的音效檔案名稱 */
    private customTypeList = [];
    /** 當前音效組類型 0=預設 */
    private currentFsxType: number = 0;

    // --------------------------------------------------------------------------
    private EventMap = {
        "audio_tableId": this.onAudioTableId,
        "res_get_music": this.onGetServerMusicLists,
        "change_bgm_mute": this.onChangeBgmMute,
        // "change_fsx_mute": this.onChangeFsxMute,
        "comp_get_music": this.onCompGetPlayList,
        "music_player_play": this.onPlaySong,
        "music_player_pause": this.onPauseSong,
        "music_player_next_song": this.onNextSong,
        "music_player_prev_song": this.onPrevSong,
        "music_player_change_status": this.onChangePlayingStatus,
        "music_player_toggle_song": this.onToggleSong,

        "sys:fsx_mute": this.onChangeFsxMute,
        "sys:video_sound_mute": this.onChangeVideoSoundMute,
    }

    // -------------------------------------------------------------------------------------
    
    onLoad () {

        if (AudioMgr.Instance === null) {
            AudioMgr.Instance = this;
        } else {
            cc.error("[error:] audio mgr has multi instances!!!");
            this.destroy();
            console.log("[fix:] audio mgr has been destroyed.");
            return;
        };

        this.init();
    }

    start() {

        for (let key in this.EventMap) {
            EventMgr.Instance.addEventListener(key, this, this.EventMap[key]);
        };

        this.audioElement.onended = () => {
            this.onBgmEnded();
        };

        this.create();
    }

    onDestroy() {
        for (let key in this.EventMap) {
            EventMgr.Instance.removeEventListener(key, this, this.EventMap[key]);
        };
    }

    private init(): void {

        // HTML audio元素
        this.audioElement = document.getElementById("audio");
        if (!this.audioElement) {
            this.audioElement = document.createElement("audio");
        };

        // 讀取本地的參數
        if (!localStorage.getItem("meta:baccarat:bgm_mute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("meta:baccarat:bgm_mute", JSON.stringify(this.isBgmMute));
        } else {
            let localItem = localStorage.getItem("meta:baccarat:bgm_mute");
            this.isBgmMute = JSON.parse(localItem);
        };
        // 遊戲音效
        if (!localStorage.getItem("meta:baccarat:fsx_mute")) {
            this.isFsxMute = this.isFsxMute;
            localStorage.setItem("meta:baccarat:fsx_mute", JSON.stringify(this.isFsxMute));
        } else {
            let localItem = localStorage.getItem("meta:baccarat:fsx_mute");
            this.isFsxMute = JSON.parse(localItem);
        };
        // console.log("mute?", this.isFsxMute);
        // 視訊音效
        if (!localStorage.getItem("meta:baccarat:video_sound_mute")) {
            this.isVideoSoundMute = this.isVideoSoundMute;
            localStorage.setItem("meta:baccarat:video_sound_mute", JSON.stringify(this.isVideoSoundMute));
        } else {
            let localItem = localStorage.getItem("meta:baccarat:video_sound_mute");
            this.isVideoSoundMute = JSON.parse(localItem);
        };
        //
        this.bgmAudioSource = this.node.addComponent(cc.AudioSource);
        this.bgmAudioSource.volume = this.bgmVolume;
        for (let i = 0; i < FSX_NUM; i++) {
            let as = this.node.addComponent(cc.AudioSource);
            as.volume = this.fsxVolume;
            if (this.isFsxMute) {
                as.mute = true;
            };
            this.fsxAudioSource.push(as);
        };
        //
        this.currentAudioSource = 0;
        //
        let isPlayingLocalData = localStorage.getItem("meta:baccarat:is_playing");
        if (!isPlayingLocalData) {
            this.isPlaying = true;
            localStorage.setItem("meta:baccarat:is_playing", JSON.stringify(this.isPlaying));
        } else if (isPlayingLocalData) {
            this.isPlaying = JSON.parse(isPlayingLocalData);
        };
    }

    private create(): void {
        // 初始化播放器設定狀態
        let settingsLocalData = JSON.parse(localStorage.getItem("musicPlayerSettings"));
        if (!settingsLocalData) {
            this.isLoopSingle = false;
            // this.isLoopWhole = true;
            this.isShuffle = false;
        } else if (settingsLocalData) {
            this.isLoopSingle = settingsLocalData["isLoopSingle"];
            // this.isLoopWhole = localData["isLoopWhole"];
            this.isShuffle = settingsLocalData["isShuffle"];
        };

        if (this.isBgmMute) {
            this.audioElement.volume = 0.0;
        } else if (!this.isBgmMute) {
            this.audioElement.volume = 1.0;
        };
    }

    /** 取得音樂列表 */
    public getServerMusicLists(): void {
        // 照介面語系取
        let customLang = "";
        let nowLanguage = I18nMgr.Instance.nowLanguage;
        if (nowLanguage == "zh_tw") {
            customLang = "zh-tw"
        } else if (nowLanguage == "zh_cn") {
            customLang = "zh-cn"
        } else {
            customLang = nowLanguage;
        };
    }

    /** 監聽取得音樂列表資料 */
    public onGetServerMusicLists(eventName, data): void {
        // console.log("獲取音樂列表: ", data);
        let list = data["data"];
        this.DefaultPlaylist = list;
        this.CustomPlaylist = [];
        //
        let songsStatusLocalData = JSON.parse(localStorage.getItem("songsStatus"));
        if (!songsStatusLocalData) {
            this.CustomPlaylist = this.DefaultPlaylist;

            this.DefaultPlaylist.forEach(item => {
                item["active"] = true;
            });

            this.CustomPlaylist.forEach(item => {
                item["active"] = true;
            });

            localStorage.setItem("songsStatus", JSON.stringify(this.DefaultPlaylist));
        }
        // 對比資料音樂清單與local音樂清單, 交叉比對出客製化播放清單 (customPlaylist)
        else if (songsStatusLocalData) {
            this.DefaultPlaylist.forEach(item => {
                item["active"] = true;
            });
            this.DefaultPlaylist.forEach (item => {
                let hasSet = false;
                songsStatusLocalData.forEach(local => {
                    if (item["name"] == local["name"]) {
                        hasSet = true;
                        item["active"] = local["active"];
                    };
                });
                if (!hasSet) {
                    songsStatusLocalData.push(item);
                };
                if (item["active"]) {
                    this.CustomPlaylist.push(item);
                };
            });

            localStorage.setItem("songsStatus", JSON.stringify(songsStatusLocalData));
            // console.log("###CustomPlaylist: ", this.CustomPlaylist);
        };
    }



    public getBgmMute(): boolean {
        return this.isBgmMute;
    }

    public setBgmMute(mute: boolean): void {
        var value = (mute) ? true : false;
        if (this.isBgmMute == value) { return; };

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
        };

        localStorage.setItem("meta:baccarat:bgm_mute", JSON.stringify(value));
    }

    public getFsxVolume(): number {
        return this.fsxVolume;
    }

    public setFsxVolume(value): void {
        for(var i = 0; i < this.fsxAudioSource.length; i ++) {
            this.fsxAudioSource[i].volume = value;
        }

        this.fsxVolume = value;
        localStorage.setItem("fsxVolume", JSON.stringify(value));
    }

    public getFsxMute(): boolean {
        return this.isFsxMute;
    }

    public setFsxMute(mute: boolean): void {

        var value = (mute) ? true : false;
        if (this.isFsxMute == value) {
            return;
        };

        this.isFsxMute = value;
        this.fsxAudioSource.forEach(as => {
            if (this.isFsxMute) {
                as.mute = true;
            } else {
                as.mute = false;
            };
        });

        localStorage.setItem("meta:baccarat:fsx_mute", JSON.stringify(value));
    }

    public getVideoSoundMute(): boolean {
        return this.isFsxMute;
    }

    public setVideoSoundMute(mute: boolean): void {

        var value = (mute) ? true : false;
        if (this.isVideoSoundMute == value) {
            return;
        };

        this.isVideoSoundMute = value;

        localStorage.setItem("meta:baccarat:video_sound_mute", JSON.stringify(value));
    }

    public playBgm(url, loop) {
        loop = (loop) ? true : false;
        this.bgmAudioSource.loop = loop;
        this.bgmAudioSource.clip = ResMgr.Instance.getAsset("audio", url);
        if (this.bgmAudioSource.clip) {
            this.bgmAudioSource.play();
        }
        else {
            cc.error("music audio clip null: ", url);
        };
    }

    /** 監聽每桌入桌播放bgm */
    public onAudioTableId(eventName, data): void {
        this.tableId = data;
    }

    /** 播放網頁音樂(html+url) */
    public playWebBgm(): void {
        if (this.CustomPlaylist.length == 0) {
            return;
        };
        // 重置url
        this.audioElement.src = "";
        // 讀取本地的參數
        if (!localStorage.getItem("isBgmMute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("isBgmMute", JSON.stringify(this.isBgmMute));
        } else {
            let localItem = localStorage.getItem("isBgmMute");
            this.isBgmMute = JSON.parse(localItem);
        };
        //
        let bgmUrl = this.CustomPlaylist[0].url;
        console.log("[Audio Mgr]: ", "bgmUrl:", bgmUrl);
        this.audioElement.src = bgmUrl;
        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        } else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        };
    }

    public randomSelectBgm(): string {
        // let windowConfig = window["TableBgmMax"];
        // this.maxBgm = windowConfig[this.tableId];
        this.maxBgm = this.CustomPlaylist.length - 1;
        let randomIndex  = Math.floor((Math.random() * this.maxBgm));
        if (!this.nowPlayingIndex) {
            this.nowPlayingIndex = randomIndex;
        } else if (this.nowPlayingIndex) {
            // 如果跟上一首一樣
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            } else {
                if (this.nowPlayingIndex == randomIndex) {
                    if (this.nowPlayingIndex == this.maxBgm) {
                        this.nowPlayingIndex = randomIndex - 1;
                    } else {
                        this.nowPlayingIndex = randomIndex + 1;
                    };
                }
                // 跟上一首不一樣
                else {
                    this.nowPlayingIndex = randomIndex;
                };
            };

        };
        let selected = this.CustomPlaylist[this.nowPlayingIndex].url;
        return selected;
    }

    public onBgmEnded(): void {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        };
        // 重置url
        this.audioElement.src = "";
        // 讀取本地的參數
        if (!localStorage.getItem("isBgmMute")) {
            this.isBgmMute = this.isBgmMute;
            localStorage.setItem("isBgmMute", JSON.stringify(this.isBgmMute));
        } else {
            let localItem = localStorage.getItem("isBgmMute");
            this.isBgmMute = JSON.parse(localItem);
        };
        //
        // let bgmUrl = this.randomSelectBgm();
        let bgmUrl;
        if (this.isLoopSingle) {
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;;
        } else if (!this.isLoopSingle) {
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
                    let length = this.CustomPlaylist.length - 1;
                    this.nowPlayingIndex = (this.nowPlayingIndex > length) ? 0 : this.nowPlayingIndex;
                };
                bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
            };
        };
        console.log("[Audio Mgr]: ", "bgmUrl:", bgmUrl);
        this.audioElement.src = bgmUrl;

        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        } else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        };
    }

    public stopBgm() {
        this.bgmAudioSource.stop();
    }

    /** 停止網頁播放音樂 */
    public stopWebBgm(): void {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.audioElement.src = "";
    }

    /** 播放音效 */
    public playFsx(url): void {
        var as = this.fsxAudioSource[this.currentAudioSource];
        this.currentAudioSource ++;
        if (this.currentAudioSource >= FSX_NUM) {
            this.currentAudioSource = 0;
        };

        as.clip = ResMgr.Instance.getAsset("audio_fsx", url);

        if (as.clip) {
            as.play();
        }
        else {
            cc.error("effect audio clip null: ", url);
        };
    }

    /** 播放語音 */
    public playVoice(url): void {
        var as = this.fsxAudioSource[this.currentAudioSource];
        this.currentAudioSource ++;
        if (this.currentAudioSource >= FSX_NUM) {
            this.currentAudioSource = 0;
        };

        as.clip = ResMgr.Instance.getAsset(`audio_voice_${I18nMgr.Instance.nowLanguage}`, url);

        if (as.clip) {
            as.play();
        }
        else {
            cc.error("effect audio clip null: ", url);
        };
    }


    /** 監聽組件取得現在歌單 */
    private onCompGetPlayList(eventName, data): void {
        EventMgr.Instance.dispatchEvent("comp_dispatch_music", this.DefaultPlaylist);
    }

    /** 監聽改變播放模式(循環/隨機)) */
    private onChangePlayingStatus(eventName, data): void {
        this.isLoopSingle = data["isLoopSingle"];
        this.isShuffle = data["isShuffle"];
        let set = {
            isLoopSingle: this.isLoopSingle,
            isShuffle: this.isShuffle
        };
        localStorage.setItem("musicPlayerSettings", JSON.stringify(set));
    }

    /** 監聽開始播放音樂 */
    private onPlaySong(eventName, data): void {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        };
        let bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        this.audioElement.src = bgmUrl;

        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        } else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        };
    }

    /** 監聽暫停播放音樂 */
    private onPauseSong(eventName, data): void {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        };
        this.isPlaying = false;
        localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        this.audioElement.pause();
    }

    /** 監聽播放下一首 */
    private onNextSong(eventName, data): void {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        };
        let bgmUrl;
        if (this.isShuffle) {
            bgmUrl = this.randomSelectBgm();
        }
        else if (!this.isShuffle) {
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            } else {
                this.nowPlayingIndex += 1;
                let length = this.CustomPlaylist.length - 1;
                this.nowPlayingIndex = (this.nowPlayingIndex > length) ? 0 : this.nowPlayingIndex;
            };
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        };
        this.audioElement.src = bgmUrl;

        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        } else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        };
    }

    /** 監聽播放前一首 */
    private onPrevSong(eventName, data): void {
        if (this.CustomPlaylist.length == 0) {
            console.error("No selected song!");
            return;
        };
        let bgmUrl;
        if (this.isShuffle) {
            bgmUrl = this.randomSelectBgm();
        }
        else if (!this.isShuffle) {
            if (this.CustomPlaylist.length == 1) {
                this.nowPlayingIndex = this.nowPlayingIndex;
            } else {
                this.nowPlayingIndex -= 1;
                this.nowPlayingIndex = (this.nowPlayingIndex < 0) ? (this.CustomPlaylist.length - 1) : this.nowPlayingIndex; 
            };
            bgmUrl = this.CustomPlaylist[this.nowPlayingIndex].url;
        };
        this.audioElement.src = bgmUrl;

        if (this.isBgmMute) {
            this.audioElement.pause();
            this.isPlaying = false;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        } else if (!this.isBgmMute) {
            this.audioElement.play();
            this.isPlaying = true;
            localStorage.setItem("musicIsPlaying", JSON.stringify(this.isPlaying));
        };
    }

    /** 監聽開啟/關閉選歌 */
    private onToggleSong(eventName, data): void {
        let dataName = data["name"];
        let dataActive = data["active"];
        let localCustomPlaylist = JSON.parse(localStorage.getItem("songsStatus"));
        //
        if (dataActive) {
            // 從DefaultList裡去遍歷並push到選中的該song到custom list
            this.DefaultPlaylist.forEach(item => {
                if (item["name"] == dataName) {
                    item["active"] = true;
                    this.CustomPlaylist.push(item);
                };
                localCustomPlaylist.forEach(local => {
                    if (item["name"] == local["name"]) {
                        local["active"] = item["active"];
                    };
                });
            });
        }
        else if (!dataActive) {
            // 從Custom list裡去遍歷到選中的song, slice掉
            for (let i = 0; i < this.CustomPlaylist.length; i++) {
                let item = this.CustomPlaylist[i];
                if (item.name == dataName) {
                    this.CustomPlaylist.splice(i, 1);
                };
            };
            //
            this.DefaultPlaylist.forEach(item => {
                if (item["name"] == dataName) {
                    item["active"] = false;
                };
                localCustomPlaylist.forEach(local => {
                    if (item["name"] == local["name"]) {
                        local["active"] = item["active"];
                    };
                });
            });
        };
        //
        localStorage.setItem("songsStatus", JSON.stringify(localCustomPlaylist));
    }



    // --------------------------------------------------------------------------------------
    private onChangeBgmMute(eventName, data): void {
        this.setBgmMute(data);
    }

    private onChangeFsxMute(eventName, data): void {
        this.setFsxMute(data);
    }

    private onChangeVideoSoundMute(eventName, data): void {
        this.setVideoSoundMute(data);
    }
}
