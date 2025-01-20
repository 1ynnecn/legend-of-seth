import en from "../i18n/en";
import zh_cn from "../i18n/zh_cn";
import zh_tw from "../i18n/zh_tw";
import EventMgr from "./EventMgr";

const {ccclass, property} = cc._decorator;

/** 地區/語系對照表 */
const LANGUAGE_MAPS = {
    // 繁體中文
    "zh-tw": [
        "zh-tw", "zh-cht", "zh-hk", "zh-mo",
    ],

    // 簡體中文
    "zh-cn": [
        "zh-cn", "zh-chs",  
    ],

    // 英文
    "en": [
        "en-us", "zh-sg",
    ],

    // 葡萄牙文
    "pt": [
        "pt-br", "pt-pt",
    ],

    // 越南文
    "vi": [
        "vi-vn",
    ],
}

const DEFAULT_LANGUAGE = "zh_tw";

@ccclass
export default class I18nMgr extends cc.Component {

    public static Instance: I18nMgr = null;
    //
    private REF = null;
    public i18nLabels = {};
    public i18nSprites = {};
    //
    public defaultLanguage = "zh_tw";
    public nowLanguage = null;


    onLoad () {
        if (I18nMgr.Instance === null) {
            I18nMgr.Instance = this;
        } else {
            cc.error("[error:] i18n mgr has multi instances!!!");
            this.destroy();
            console.log("[fix:] i18n mgr has been destroyed.");
            return;
        };
        //
        this.init();
        
    }

    start () {
        // EventMgr.Instance.addEventListener("change_user_language", this, this.listenChangeUserLanguage);
        EventMgr.Instance.addEventListener("dialog:change_lang", this, this.listenChangeUserLanguage);
        this.create();
    }

    onDestroy(): void {
        EventMgr.Instance.removeEventListener("dialog:change_lang", this, this.listenChangeUserLanguage);
    }

    /** 初始化 */
    public init(): void {
        // let ref = JSON.stringify(zh_tw);
        // this.i18nLabels = JSON.parse(ref);


        // 1. 從url取
        let localStorageData = localStorage.getItem("mtbcr:locale");
        if (!localStorageData) {
            // let langParam = NetMgr.Instance.langParam;
            // let langParam = GameApp.Instance.LangParam;
            // http://localhost:7456/?token=32be7f7d0c05535ae58c52fe3301ed61&lang=zh_tw
            let langParam = null;
            let pLangParam = null;
            let param = location.href.split('?')[1];
            if (param) {
                try {
                    pLangParam = param.split('&')[1];
                } catch (error) {
                    console.error('lang param: ', error);
                };
            };

            if (pLangParam) {
                langParam = pLangParam.split('lang=')[1];
            };


            switch (langParam) {
                case 'zh_tw':
                    this.defaultLanguage = 'zh_tw';
                    break;
                case 'zh_cn':
                    this.defaultLanguage = 'zh_cn';
                    break;
                case 'en':
                    this.defaultLanguage = 'en';
                    break;
            
                default:
                    this.defaultLanguage = 'zh_tw';
                    break;
            };

            this.nowLanguage = this.defaultLanguage;

        } else if (localStorageData) {
            this.nowLanguage = JSON.parse(localStorageData);
        };

        // 2.用手機系統語言取
        // // 先取localstorage的紀錄
        // let localStorageData = localStorage.getItem("mtbcr:locale");
        // // 若無紀錄
        // // 用系統語言取(cc)
        // if (!localStorageData) {
        //     // 中文地區預設繁中, 其餘預設英文
        //     if (cc.sys.language == 'zh') {
        //         this.defaultLanguage = 'zh_tw';
        //     } else {
        //         this.defaultLanguage = 'en';
        //     }
        //     this.nowLanguage = this.defaultLanguage;
        // } else if (localStorageData) {
        //     this.nowLanguage = JSON.parse(localStorageData);
        // };

        // console.log('系統語言: ', cc.sys.language);
        console.log('目前語言: ', this.nowLanguage);
    }

    private create(): void {
        this.updateLang();
    }

    /** 建立全域i18n物件並且初始化使用者地區預設語言 */
    public initArea(): void {
        // 取得用戶預設語言區碼
        // // let localArea: string = cc.sys.languageCode;
        // let localArea: string = NetMgr.Instance.langParam;
        // // 遍歷查找該用戶系統語言對應的語言包
        // // 先給預設值
        // // let defaultLanguage: string = DEFAULT_LANGUAGE;
        // let localStorageData = JSON.parse(localStorage.getItem("localeSetting"));
        // // 中英雙語版本
        // if (localArea == "zh-tw") {
        //     this.defaultLanguage = "zh_tw";
        // } else if (localArea == "en" || "vi" || "pt")  {
        //     this.defaultLanguage = "en";
        // } else {
        //     this.defaultLanguage = "zh_tw";
        // };
        // // 
        // if (!localStorageData) {
        //     // this.nowLanguage = this.defaultLanguage
        //     if (NetMgr.Instance.langParam == "zh-tw") {
        //         this.nowLanguage = "zh_tw";
        //     } else if (NetMgr.Instance.langParam == "zh-cn") {
        //         this.nowLanguage = "zh_cn";
        //     } else {
        //         this.nowLanguage = NetMgr.Instance.langParam;
        //     };
        // } else if (localStorageData) {
        //     this.nowLanguage = localStorageData;
        // }
        // 正常遍歷
        // for (let key in LANGUAGE_MAPS) {
        //     let arr = LANGUAGE_MAPS[key];
        //     arr.forEach(i => {
        //         if (localArea == i) {
        //             defaultLanguage = key;
        //         };
        //     });
        // };


        // this.updateLang();


        console.log("default: ", this.defaultLanguage);
        console.log("now: ", this.nowLanguage);
    }

    /** 更新/切換語言 */
    private updateLang(): void {
        switch (this.nowLanguage) {
            case 'zh_tw':
                this.REF = JSON.stringify(zh_tw);
                this.i18nLabels = JSON.parse(this.REF);
                break;

            case 'zh_cn':
                this.REF = JSON.stringify(zh_cn);
                this.i18nLabels = JSON.parse(this.REF);
                break;

            case 'en':
                this.REF = JSON.stringify(en);
                this.i18nLabels = JSON.parse(this.REF);
                break;
        
            default:
                this.REF = JSON.stringify(zh_tw);
                this.i18nLabels = JSON.parse(this.REF);
                break;
        };
    }

    private listenChangeUserLanguage(eventName, data): void {
        if (data == this.nowLanguage || data == null) {
            return;
        };
        this.nowLanguage = data;
        this.updateLang();
        localStorage.setItem("mtbcr:locale", JSON.stringify(data));

        EventMgr.Instance.dispatchEvent('i18n:change_lang', null);
    }

    /** 解析Excel文件 */

    // update (dt) {}

}
