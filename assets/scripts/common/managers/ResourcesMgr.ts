
const {ccclass, property} = cc._decorator;

@ccclass
export default class ResMgr extends cc.Component {

    public static Instance: ResMgr = null;

    // AB包
    private bundleSets: any = {};

    private nowRes: number = 0;         // 已經加載的資源包
    private totalRes: number = 0;       // 要加載的資源包總數

    private nowBundle: number = 0;      // 已經加載過的AB
    private totalBundle: number = 0;    // 總共要加載的AB

    // 進度條
    private onProgress: Function = null;
    private onComplete: Function = null;

    @property(cc.Prefab)
    public prefabLoaderMobile: cc.Prefab = null;
    @property(cc.Prefab)
    public prefabLoaderPC: cc.Prefab = null;

    /** 加載AB包 */
    private loadAssetBundle(bundleName: string, onComplete: Function): void {
        cc.assetManager.loadBundle(bundleName, (err, bundle) => {
            if (err !== null) {
                cc.log(`[ResMgr]: load asset bundle error: ${bundleName}`);
                this.bundleSets[bundleName] = null;
            } else {
                cc.log(`[ResMgr]: load asset bundle success: ${bundleName}`);
                this.bundleSets[bundleName] = bundle;
            };
            if (onComplete) {
                onComplete();
            };
            // LogMgr.Instance.log("###### Asset bundles loaded:", this.bundleSets);
        });
    }

    onLoad (): void {
        // 唯一實例
        if (ResMgr.Instance === null) {
            ResMgr.Instance = this;
        } else {
            cc.error("[error:] res mgr has multi instances!!!");
            this.destroy();
            cc.log("[fix:] res mgr has been destroyed.");
            return;
        };
    }

    /** 加載資源 */
    public loadRes(bundle, url, typeOfClass) {
        bundle.load(url, typeOfClass, (err, asset) => {
            this.nowRes++;
            
            if (err) { 
                cc.error(`[load res]: ${url} error!`); 
            } else { 
                cc.log(`[load res]: ${url} success!`); 
            };

            if (this.onProgress) {
                this.onProgress(this.nowRes, this.totalRes);
            };

            if (this.nowRes >= this.totalRes) {
                if (this.onComplete !== null) {
                    this.onComplete();
                }
            };
        });
    }

    /** 加載AB包中的特定資源 */
    private loadSpecificAssetInBundle(resPkg) {
        for (let key in resPkg) {
            let urlSet = resPkg[key].urls;
            let typeOfClass = resPkg.assetType;
            for (let i =0 ; i < urlSet.length; i++) {
                this.loadRes(this.bundleSets[key], urlSet[i], typeOfClass);
            };
        };
    }

    /** 獲取資源 */
    public getAsset(bundleName: string, assetUrl: string): any {
        let bundle = cc.assetManager.getBundle(bundleName);
        if (bundle === null) {
            cc.error(`[error:] "${bundleName}" asset bundle not loaded`);
            return null;
        };

        return bundle.get(assetUrl);
    }

    /** 資源包預加載 || resPkg: || funcProgress: 進度函數 || onComplete: 加載結束函數 */
    public preloadResPackage(resPkg, onProgress, onComplete): void {
        this.nowRes = 0; this.totalRes = 0;
        this.nowBundle = 0; this.totalBundle = 0;
        this.onProgress = onProgress;
        this.onComplete = onComplete;
        for (let key in resPkg) {
            this.totalBundle++;
            this.totalRes += resPkg[key].urls.length;
        };
        for (let key in resPkg) {
            this.loadAssetBundle(key, () => {
                this.nowBundle++;
                if (this.nowBundle === this.totalBundle) {
                    this.loadSpecificAssetInBundle(resPkg);
                }
            });
        };
    }

    /** 資源包釋放 */
    public releaseResPackage(resPkg: object) {
        for (let key in resPkg) {
            if (!cc.isValid(resPkg[key])) {
                continue;
            };
            let urlSet = resPkg[key].urls;
            for (let i = 0; i < urlSet.length; i++) {
                cc.assetManager.releaseAsset(urlSet[i]);
            };
        };
    }
}
