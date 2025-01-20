
const {ccclass, property} = cc._decorator;

const GAP_HEIGHT = 134;
const GAP_WIDTH = 170;



const startAxisY = [268, 134, 0, -134, -268];
const gap = 134;
const moveRange = 134*5 + 20;

const dropTimeGap = 2;
const reelTimeGap = 0.2;

@ccclass
export default class Demo extends cc.Component {

    @property(cc.Node)
    nodeSpin: cc.Node = null;
    @property(cc.Button)
    btnSpin: cc.Button = null;
    @property(sp.Skeleton)
    spSpin: sp.Skeleton = null;

    @property(sp.Skeleton)
    spSeth: sp.Skeleton = null;
    @property(sp.Skeleton)
    spGoddes: sp.Skeleton = null;

    @property(cc.Label)
    multiplyNum: cc.Label = null;

    @property(cc.Node)
    bigWin: cc.Node = null;
    @property(cc.Node)
    superWin: cc.Node = null;
    @property(cc.Node)
    winNum: cc.Node = null;

    @property(cc.Node)
    freeTitle: cc.Node = null;
    @property(cc.Node)
    freeNum: cc.Node = null;

    @property(sp.Skeleton)
    spFreeGameIntro: sp.Skeleton = null;
    @property(sp.Skeleton)
    spFreeGameOutro: sp.Skeleton = null;

    @property(cc.Node)
    reel: cc.Node = null;

    @property(cc.Node)
    fgBg: cc.Node = null;
    @property(cc.Node)
    fgReel: cc.Node = null;
    @property(cc.Label)
    fgCount: cc.Label = null;

    @property(cc.Prefab)
    SC: cc.Prefab = null;
    @property(cc.Prefab)
    H1: cc.Prefab = null;
    @property(cc.Prefab)
    H2: cc.Prefab = null;
    @property(cc.Prefab)
    H3: cc.Prefab = null;
    @property(cc.Prefab)
    H4: cc.Prefab = null;
    @property(cc.Prefab)
    N1: cc.Prefab = null;
    @property(cc.Prefab)
    N2: cc.Prefab = null;
    @property(cc.Prefab)
    N3: cc.Prefab = null;
    @property(cc.Prefab)
    N4: cc.Prefab = null;
    @property(cc.Prefab)
    N5: cc.Prefab = null;


    // @property(cc.AudioClip)

    DEMO_CLICK_COUNT = 0;
    DEMO_CLICK_LIMIT = 3;

    // 第一轉 普通
    oriResultArr_1 = [
        [4, 1, 2, 3, 4],
        [2, 3, 4, 5, 6],
        [9, 7, 1, 2, 3],
        [9, 4, 1, 2, 3],
        [1, 7, 3, 4, 5],
        [7, 8, 9, 4, 1]
    ];

    dropResultArr_1 = [
        [-1, 1, 2, 3, -1],
        [2, 3, -1, 5, 6],
        [9, -1, 1, 2, 3],
        [9, -1, 1, 2, 3],
        [1, -1, 3, -1, 5],
        [7, 8, 9, -1, 1]
    ];

    afterMoveResultArr_1 = [
        [-1, -1, 1, 2, 3],
        [-1, 2, 3, 5, 6],
        [-1, 9, 1, 2, 3],
        [-1, 9, 1, 2, 3],
        [-1, -1, 1, 3, 5],
        [-1, 7, 8, 9, 1]
    ];

    addNewResultArr_1 = [
        [4, 1, 2, 3, 4],
        [2, 3, 4, 5, 6],
        [9, 4, 1, 2, 3],
        [9, 4, 1, 2, 3],
        [1, 4, 3, 4, 5],
        [7, 8, 9, 4, 1]
    ];

    // 第二轉 贏獎
    oriResultArr_2 = [
        [4, 1, 2, 3, 4],
        [2, 3, 4, 5, 6],
        [9, 4, 1, 2, 3],
        [9, 4, 1, 2, 3],
        [1, 4, 3, 4, 5],
        [7, 8, 9, 4, 1]
    ];

    dropResultArr_2 = [
        [-1, 1, 2, 3, -1],
        [2, 3, -1, 5, 6],
        [9, -1, 1, 2, 3],
        [9, -1, 1, 2, 3],
        [1, -1, 3, -1, 5],
        [7, 8, 9, -1, 1]
    ];

    afterMoveResultArr_2 = [
        [-1, -1, 1, 2, 3],
        [-1, 2, 3, 5, 6],
        [-1, 9, 1, 2, 3],
        [-1, 9, 1, 2, 3],
        [-1, -1, 1, 3, 5],
        [-1, 7, 8, 9, 1]
    ];

    addNewResultArr_2 = [
        [4, 0, 1, 2, 3],
        [5, 2, 3, 5, 6],
        [7, 9, 1, 2, 3],
        [4, 9, 1, 2, 3],
        [7, 0, 1, 3, 5],
        [2, 7, 8, 9, 1]
    ];

    // 第三轉 free game
    oriResultArr_3 = [
        [0, 1, 2, 3, 4],
        [2, 3, 4, 5, 6],
        [9, 0, 1, 2, 3],
        [9, 0, 1, 2, 3],
        [1, 2, 3, 4, 5],
        [7, 8, 9, 0, 1]
    ];

    dropResultArr_3 = [
        [-1, 1, 2, 3, 4],
        [2, 3, 4, 5, 6],
        [9, -1, 1, 2, 3],
        [9, -1, 1, 2, 3],
        [1, 2, 3, 4, 5],
        [7, 8, 9, -1, 1]
    ];

    afterMoveResultArr_3 = [
        [-1, 1, 2, 3, 4],
        [2, 3, 4, 5, 6],
        [-1, 9, 1, 2, 3],
        [-1, 9, 1, 2, 3],
        [1, 2, 3, 4, 5],
        [-1, 7, 8, 9, 1]
    ];

    addNewResultArr_3 = [
        [1, 1, 2, 3, 4],
        [2, 3, 4, 5, 6],
        [1, 9, 1, 2, 3],
        [3, 9, 1, 2, 3],
        [1, 2, 3, 4, 5],
        [2, 7, 8, 9, 1]
    ];

    // FG 前三轉沒贏
    oriResultArr_4 = [
        [1, 1, 2, 3, 2],
        [2, 7, 4, 3, 6],
        [1, 9, 1, 2, 3],
        [3, 3, 7, 2, 6],
        [9, 2, 3, 7, 5],
        [2, 7, 2, 9, 1]
    ];

    oriResultArr_5 = [
        [1, 1, 8, 3, 8],
        [4, 6, 4, 7, 6],
        [5, 6, 1, 2, 3],
        [3, 6, 1, 2, 3],
        [5, 2, 3, 7, 5],
        [2, 7, 8, 9, 8]
    ];

    oriResultArr_6 = [
        [5, 2, 2, 3, 4],
        [2, 3, 4, 6, 6],
        [1, 8, 8, 2, 3],
        [3, 9, 1, 7, 7],
        [5, 5, 2, 4, 5],
        [2, 7, 8, 9, 1]
    ];

    // 後二轉贏獎
    oriResultArr_7 = [
        [4, 1, 2, 3, 4],
        [2, 1, 4, 1, 6],
        [9, 7, 1, 2, 3],
        [9, 2, 1, 2, 3],
        [1, 4, 1, 4, 5],
        [7, 8, 9, 4, 1]
    ];

    dropResultArr_7 = [
        [4, -1, 2, 3, 4],
        [2, -1, 4, -1, 6],
        [9, 7, -1, 2, 3],
        [9, 2, -1, 2, 3],
        [-1, 4, -1, 4, 5],
        [7, 8, 9, 4, -1]
    ];

    afterMoveResultArr_7 = [
        [-1, 4, 2, 3, 4],
        [-1, -1, 2, 4, 6],
        [-1, 9, 7, 2, 3],
        [-1, 9, 2, 2, 3],
        [-1, -1, 4, 4, 5],
        [-1, 7, 8, 9, 4]
    ];

    addNewResultArr_7 = [
        [7, 4, 2, 3, 4],
        [6, 1, 2, 4, 6],
        [9, 9, 7, 2, 3],
        [7, 9, 2, 2, 3],
        [1, 1, 4, 4, 5],
        [8, 7, 8, 9, 4]
    ];

    oriResultArr_8 = [
        [4, 1, 2, 3, 4],
        [2, 3, 4, 5, 6],
        [9, 2, 2, 2, 3],
        [9, 4, 1, 2, 3],
        [1, 2, 3, 2, 5],
        [7, 8, 9, 4, 1]
    ];

    dropResultArr_8 = [
        [4, 1, -1, 3, 4],
        [-1, 3, 4, 5, 6],
        [9, -1, -1, -1, 3],
        [9, 4, 1, -1, 3],
        [1, -1, 3, -1, 5],
        [7, 8, 9, 4, 1]
    ];

    afterMoveResultArr_8 = [
        [-1, 4, 1, 3, 4],
        [-1, 3, 4, 5, 6],
        [-1, -1, -1, 9, 3],
        [-1, 9, 4, 1, 3],
        [-1, -1, 1, 3, 5],
        [7, 8, 9, 4, 1]
    ];

    addNewResultArr_8 = [
        [2, 4, 1, 3, 4],
        [2, 3, 4, 5, 6],
        [1, 1, 4, 9, 3],
        [2, 9, 4, 1, 3],
        [2, 3, 1, 3, 5],
        [7, 8, 9, 4, 1]
    ];

    currentResultArr = [];

    symbolIdMap = [];

    symbolAnimMap = {
        'H1': 'S1',
        'H2': 'S2',
        'H3': 'S3',
        'H4': 'S4',
        'N1': 'A',
        'N2': 'K',
        'N3': 'Q',
        'N4': 'J',
        'N5': '10',
        'SC': 'Scatter'
    }

    isSpinning = false;

    row_0 = [];
    row_1 = [];
    row_2 = [];
    row_3 = [];
    row_4 = [];
    row_5 = [];

    animInterval = null;


    // onLoad () {}

    start () {

        this.symbolIdMap = [
            this.SC, 
            this.H1, this.H2, this.H3, this.H4, 
            this.N1, this.N2, this.N3, this.N4, this.N5
        ];

        for (let i=0; i<5; i++) {
            this.row_0.push(this.reel.getChildByName(`0${i}`));
        };
        for (let i=0; i<5; i++) {
            this.row_1.push(this.reel.getChildByName(`1${i}`));
        };
        for (let i=0; i<5; i++) {
            this.row_2.push(this.reel.getChildByName(`2${i}`));
        };
        for (let i=0; i<5; i++) {
            this.row_3.push(this.reel.getChildByName(`3${i}`));
        };
        for (let i=0; i<5; i++) {
            this.row_4.push(this.reel.getChildByName(`4${i}`));
        };
        for (let i=0; i<5; i++) {
            this.row_5.push(this.reel.getChildByName(`5${i}`));
        };

        // 初始化人物動態
        this.spSeth.loop = true;
        this.spSeth.animation = 'bg_idle';
        this.spGoddes.loop = true;
        this.spGoddes.animation = 'bg_idle';

        // 初始化symbol
        this.currentResultArr = this.oriResultArr_3;
        this.spawnAllSymbol();

        // 按鈕事件監聽
        this.nodeSpin.on('click', this.onClickBtnSpin, this);
    }
    
    update (dt) {
        if (!this.isSpinning && this.spSpin.animation !== 'idle') {
            this.spSpin.loop = true;
            this.spSpin.animation = 'idle';
        };
    }


    onClickBtnSpin(): void {

        this.isSpinning = true;
        
        this.spSpin.loop = false;
        this.spSpin.animation = 'spin';

        this.DEMO_CLICK_COUNT += 1;
        this.DEMO_CLICK_COUNT = this.DEMO_CLICK_COUNT > this.DEMO_CLICK_LIMIT ? 1 : this.DEMO_CLICK_COUNT;

        // 鎖定spin按鈕
        this.btnSpin.interactable = false;

        setTimeout(()=>{
            this.spSpin.animation = 'disabled';
        }, 1000);

        console.log('COUNT: ', this.DEMO_CLICK_COUNT);

        switch (this.DEMO_CLICK_COUNT) {

            // ---------------------------------------------------------------------------------------------
            case 1: // 普通滾輪展示
                cc.tween(this.node)
                .call(()=>{
                    // 落下盤面
                    this.wholeReelClear();
                })
                .to(dropTimeGap,{})
                .call(()=>{
                    // 更換新盤面
                    this.currentResultArr = this.oriResultArr_1;
                    //
                    // this.spawnAllSymbol();

                })
                .to(0.5, {})
                .call(()=>{
                    // 從上落下新盤面
                    this.wholeReelDrop();
                })
                .to(1, {})
                .call(()=>{
                    this.btnSpin.interactable = true;
                })
                .start();
                break;

            // ---------------------------------------------------------------------------------------------    
            case 2: // 基礎贏錢展示
                cc.tween(this.node)
                .call(()=>{
                    // 落下盤面
                    this.wholeReelClear();
                })
                .to(dropTimeGap,{})
                .call(()=>{
                    // 更換新盤面
                    this.currentResultArr = this.oriResultArr_2;
                    // 從上落下新盤面
                    this.wholeReelDrop();
                })
                .to(2, {})
                .call(()=>{
                    // this.currentResultArr = this.dropResultArr;
                    // 演消除動畫
                    for (let i=0; i<this.dropResultArr_2.length; i++) {
                        for (let k=0; k<this.dropResultArr_2[i].length; k++) {
                            let id = this.dropResultArr_2[i][k];
                            if (id == -1) {
                                this.symbolEliminate(`${i}${k}`, 3.5);
                            } else {
                                continue;
                            };
                        };
                    };
                })
                .to(1, {})
                .call(()=>{
                    // 播贏獎動畫
                    this.bigWin.active = true;
                    this.bigWin.getComponent(sp.Skeleton).animation = 'bigwin';

                    this.winNum.active = true;
                    this.numberCounterAnim(this.winNum.getComponent(cc.Label), 1000, 500);

                })
                .to(3, {})
                .call(()=>{
                    this.bigWin.active = false;
                    this.clearNumberCounterInterval();
                    this.winNum.active = false;
                    // 落下補位
                    this.sortSymbolRow();
                    this.currentResultArr = this.addNewResultArr_2;
                })
                .to(0.5, {})
                .call(()=>{
                    for (let i=0; i<this.afterMoveResultArr_2.length; i++) {
                        for (let k=0; k<this.afterMoveResultArr_2[i].length; k++) {
                            if (this.afterMoveResultArr_2[i][k] == -1) {
                                let node = this.reel.getChildByName(`${i}${k}`);
                                node.destroyAllChildren();
                                let prefab = this.spawnOneSymbol(this.currentResultArr[i][k]);
                                node.addChild(prefab);
                            } else {
                                continue;
                            };
                        };
                    };

                })
                .to(0.5, {})
                .call(()=>{
                    this.afterSymbolDrop();
                })
                .to(1, {})
                .call(()=>{
                    this.btnSpin.interactable = true;
                })
                .start();

                break;

            // ---------------------------------------------------------------------------------------------
            case 3: // free game 展示
                cc.tween(this.node)
                .call(()=>{
                    // 落下盤面
                    this.wholeReelClear();
                })
                .to(dropTimeGap,{})
                .call(()=>{
                    // 更換新盤面
                    this.currentResultArr = this.oriResultArr_3;
                    // 從上落下新盤面
                    this.wholeReelDrop();

                })
                .to(2, {})
                .call(()=>{
                    // this.currentResultArr = this.dropResultArr;
                    // 演消除動畫
                    for (let i=0; i<this.dropResultArr_3.length; i++) {
                        for (let k=0; k<this.dropResultArr_3[i].length; k++) {
                            let id = this.dropResultArr_3[i][k];
                            if (id == -1) {
                                this.symbolEliminate(`${i}${k}`, 3);
                            } else {
                                continue;
                            };
                        };
                    };
                })
                .to(1, {})
                .call(()=>{
                    this.freeTitle.active = true;
                    this.freeNum.active = true;

                    cc.tween(this.freeTitle)
                    .to(0.5, {scale: 2}, {easing: 'elasticOut'})
                    .start();

                    cc.tween(this.freeNum)
                    .to(0.5, {scale: 1}, {easing: 'elasticOut'})
                    .start();
                })
                .to(2, {})
                .call(()=>{
                    this.freeTitle.active = false;
                    this.freeNum.active = false;

                    // 演過場
                    this.spFreeGameIntro.loop = false;
                    this.spFreeGameIntro.animation = 'freegame_in';

                    setTimeout(()=>{
                        this.fgBg.active = true;
                        this.fgReel.active = true;
                        this.fgCount.node.active = true;
                        this.fgCount.string = '5';
                    }, 1000);

                })
                // ----------------------有中的補位
                .to(1.6, {})
                .call(()=>{
                    // 落下補位
                    this.sortSymbolRow();
                    this.currentResultArr = this.addNewResultArr_3;
                })
                .to(0.5, {})
                .call(()=>{
                    for (let i=0; i<this.afterMoveResultArr_3.length; i++) {
                        for (let k=0; k<this.afterMoveResultArr_3[i].length; k++) {
                            if (this.afterMoveResultArr_3[i][k] == -1) {
                                let node = this.reel.getChildByName(`${i}${k}`);
                                node.destroyAllChildren();
                                let prefab = this.spawnOneSymbol(this.currentResultArr[i][k]);
                                node.addChild(prefab);
                            } else {
                                continue;
                            };
                        };
                    };
                })
                .to(0.5, {})
                .call(()=>{
                    this.afterSymbolDrop();
                })
                // ----------------------------- 沒中的演繹 4
                .to(3, {})
                .call(()=>{
                    // 落下盤面
                    this.wholeReelClear();

                    this.fgCount.string = '4';
                })
                .to(dropTimeGap,{})
                .call(()=>{
                    // 更換新盤面
                    this.currentResultArr = this.oriResultArr_4;
                    //
                    this.spawnAllSymbol();

                })
                .to(0.5, {})
                .call(()=>{
                    // 從上落下新盤面
                    this.wholeReelDrop();
                })
                // ---------------------------- 沒中的5
                .to(5, {})
                .call(()=>{
                    // 落下盤面
                    this.wholeReelClear();

                    this.fgCount.string = '3';
                })
                .to(dropTimeGap,{})
                .call(()=>{
                    // 更換新盤面
                    this.currentResultArr = this.oriResultArr_5;
                    //
                    this.spawnAllSymbol();

                })
                .to(0.5, {})
                .call(()=>{
                    // 從上落下新盤面
                    this.wholeReelDrop();
                })
                // ----------------------- 沒中的6
                .to(5, {})
                .call(()=>{
                    // 落下盤面
                    this.wholeReelClear();

                    this.fgCount.string = '2';
                })
                .to(dropTimeGap,{})
                .call(()=>{
                    // 更換新盤面
                    this.currentResultArr = this.oriResultArr_6;
                    //
                    this.spawnAllSymbol();

                })
                .to(0.5, {})
                .call(()=>{
                    // 從上落下新盤面
                    this.wholeReelDrop();
                })
                // ----------------------- 有中的 7
                .to(5, {})
                .call(()=>{
                    // 落下盤面
                    this.wholeReelClear();

                    this.fgCount.string = '1';
                })
                .to(dropTimeGap, {})
                .call(()=>{
                    // 更換新盤面
                    this.currentResultArr = this.oriResultArr_7;
                    //
                    this.spawnAllSymbol();

                })
                .to(0.5, {})
                .call(()=>{
                    // 從上落下新盤面
                    this.wholeReelDrop();
                })
                .to(2, {})
                .call(()=>{
                    // this.currentResultArr = this.dropResultArr;
                    // 演消除動畫
                    for (let i=0; i<this.dropResultArr_7.length; i++) {
                        for (let k=0; k<this.dropResultArr_7[i].length; k++) {
                            let id = this.dropResultArr_7[i][k];
                            if (id == -1) {
                                this.symbolEliminate(`${i}${k}`, 1.5);
                            } else {
                                continue;
                            };
                        };
                    };
                })
                .to(1.6, {})
                .call(()=>{
                    // 落下補位
                    this.sortSymbolRow();
                    this.currentResultArr = this.addNewResultArr_7;
                })
                .to(0.5, {})
                .call(()=>{
                    for (let i=0; i<this.afterMoveResultArr_7.length; i++) {
                        for (let k=0; k<this.afterMoveResultArr_7[i].length; k++) {
                            if (this.afterMoveResultArr_7[i][k] == -1) {
                                let node = this.reel.getChildByName(`${i}${k}`);
                                node.destroyAllChildren();
                                let prefab = this.spawnOneSymbol(this.currentResultArr[i][k]);
                                node.addChild(prefab);
                            } else {
                                continue;
                            };
                        };
                    };
                })
                .to(0.5, {})
                .call(()=>{
                    this.afterSymbolDrop();
                })
                // ------------------------ 有中的 8
                .to(3, {})
                .call(()=>{
                    // 落下盤面
                    this.wholeReelClear();

                    this.fgCount.string = '0';
                })
                .to(dropTimeGap, {})
                .call(()=>{
                    // 更換新盤面
                    this.currentResultArr = this.oriResultArr_8;
                    //
                    this.spawnAllSymbol();

                })
                .to(0.5, {})
                .call(()=>{
                    // 從上落下新盤面
                    this.wholeReelDrop();
                })
                .to(2, {})
                .call(()=>{
                    // this.currentResultArr = this.dropResultArr;
                    // 演消除動畫
                    for (let i=0; i<this.dropResultArr_8.length; i++) {
                        for (let k=0; k<this.dropResultArr_8[i].length; k++) {
                            let id = this.dropResultArr_8[i][k];
                            if (id == -1) {
                                this.symbolEliminate(`${i}${k}`, 1.5);
                            } else {
                                continue;
                            };
                        };
                    };
                })

                .to(1.6, {})
                .call(()=>{
                    // 落下補位
                    this.sortSymbolRow();
                    this.currentResultArr = this.addNewResultArr_8;
                })
                .to(0.5, {})
                .call(()=>{
                    for (let i=0; i<this.afterMoveResultArr_8.length; i++) {
                        for (let k=0; k<this.afterMoveResultArr_8[i].length; k++) {
                            if (this.afterMoveResultArr_8[i][k] == -1) {
                                let node = this.reel.getChildByName(`${i}${k}`);
                                node.destroyAllChildren();
                                let prefab = this.spawnOneSymbol(this.currentResultArr[i][k]);
                                node.addChild(prefab);
                            } else {
                                continue;
                            };
                        };
                    };
                })
                .to(0.5, {})
                .call(()=>{
                    this.afterSymbolDrop();
                })
                // --------------------------- 播大獎動畫
                .to(1, {})
                .call(()=>{
                    // 播贏獎動畫
                    this.superWin.active = true;
                    this.superWin.getComponent(sp.Skeleton).animation = 'animation2';

                    this.winNum.active = true;
                    this.numberCounterAnim(this.winNum.getComponent(cc.Label), 10000, 500);

                })
                .to(3, {})
                // 退出free game
                .call(()=>{
                    this.spFreeGameOutro.animation = 'freegame_out';
                    setTimeout(()=>{
                        this.fgBg.active = false;
                        this.fgReel.active = false;
                    }, 1000);

                    this.superWin.active = false;
                    this.winNum.active = false;
                    this.fgCount.node.active = false;
                    this.DEMO_CLICK_COUNT = 0;

                })
                .to(1, {})
                .call(()=>{

                    this.btnSpin.interactable = true;
                })
                // // .to(3, {})
                // // .call(()=>{
                // //     // console.log('@', '4');
                // //     this.bigWin.active = false;
                // //     this.clearNumberCounterInterval();
                // //     this.winNum.active = false;
                // //     // 落下補位
                // //     this.sortSymbolRow();
                // //     this.currentResultArr = this.addNewResultArr_2;
                // // })                
                .start();
                break;

        
            default:
                break;
        };

        setTimeout(()=>{
            this.isSpinning = false;
        }, 1000);

    }

    tweenSymbolClear(node, endY, delay): void {
        cc.tween(node)
        .delay(delay)
        .to(0.1, {position: cc.v2(node.x, endY)}, {easing: 'quadOut'})
        .start();
    }

    tweenSymbolDrop(node, endY, delay): void {
        cc.tween(node)
        .delay(delay)
        .to(0.5, {position: cc.v2(node.x, endY)}, {easing: 'elasticOut'})
        .start();
    }

    spawnOneSymbol(symbolId: number): cc.Node {
        let symbol: cc.Node;
        let prefab = this.symbolIdMap[symbolId];
        symbol = cc.instantiate(prefab);
        return symbol;
    }

    spawnAllSymbol(): void {
        for (let i=0; i<this.reel.children.length; i++) {

            let child = this.reel.children[i];

            if (child.children.length > 0) {
                child.destroyAllChildren();
            };

            let splitStr = child.name.split('');
            let index_1 = parseInt(splitStr[0], 10);
            let index_2 = parseInt(splitStr[1], 10);

            // console.log("@@@", index_1, index_2);

            let id = this.currentResultArr[index_1][index_2];
            let spawn = this.spawnOneSymbol(id);

            child.addChild(spawn);
        };
    }

    wholeReelDrop(): void {
        cc.tween(this.reel)
        .call(()=>{
            this.spawnAllSymbol();
        })
        .call(()=>{
            this.tweenSymbolDrop(this.reel.getChildByName('00'), startAxisY[0], 0.25);
            this.tweenSymbolDrop(this.reel.getChildByName('01'), startAxisY[1], 0.2);
            this.tweenSymbolDrop(this.reel.getChildByName('02'), startAxisY[2], 0.15);
            this.tweenSymbolDrop(this.reel.getChildByName('03'), startAxisY[3], 0.1);
            this.tweenSymbolDrop(this.reel.getChildByName('04'), startAxisY[4], 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolDrop(this.reel.getChildByName('10'), startAxisY[0], 0.25);
            this.tweenSymbolDrop(this.reel.getChildByName('11'), startAxisY[1], 0.2);
            this.tweenSymbolDrop(this.reel.getChildByName('12'), startAxisY[2], 0.15);
            this.tweenSymbolDrop(this.reel.getChildByName('13'), startAxisY[3], 0.1);
            this.tweenSymbolDrop(this.reel.getChildByName('14'), startAxisY[4], 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolDrop(this.reel.getChildByName('20'), startAxisY[0], 0.25);
            this.tweenSymbolDrop(this.reel.getChildByName('21'), startAxisY[1], 0.2);
            this.tweenSymbolDrop(this.reel.getChildByName('22'), startAxisY[2], 0.15);
            this.tweenSymbolDrop(this.reel.getChildByName('23'), startAxisY[3], 0.1);
            this.tweenSymbolDrop(this.reel.getChildByName('24'), startAxisY[4], 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolDrop(this.reel.getChildByName('30'), startAxisY[0], 0.25);
            this.tweenSymbolDrop(this.reel.getChildByName('31'), startAxisY[1], 0.2);
            this.tweenSymbolDrop(this.reel.getChildByName('32'), startAxisY[2], 0.15);
            this.tweenSymbolDrop(this.reel.getChildByName('33'), startAxisY[3], 0.1);
            this.tweenSymbolDrop(this.reel.getChildByName('34'), startAxisY[4], 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolDrop(this.reel.getChildByName('40'), startAxisY[0], 0.25);
            this.tweenSymbolDrop(this.reel.getChildByName('41'), startAxisY[1], 0.2);
            this.tweenSymbolDrop(this.reel.getChildByName('42'), startAxisY[2], 0.15);
            this.tweenSymbolDrop(this.reel.getChildByName('43'), startAxisY[3], 0.1);
            this.tweenSymbolDrop(this.reel.getChildByName('44'), startAxisY[4], 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolDrop(this.reel.getChildByName('50'), startAxisY[0], 0.25);
            this.tweenSymbolDrop(this.reel.getChildByName('51'), startAxisY[1], 0.2);
            this.tweenSymbolDrop(this.reel.getChildByName('52'), startAxisY[2], 0.15);
            this.tweenSymbolDrop(this.reel.getChildByName('53'), startAxisY[3], 0.1);
            this.tweenSymbolDrop(this.reel.getChildByName('54'), startAxisY[4], 0);
        })
        .start();
    }

    wholeReelClear(): void {
        cc.tween(this.reel)
        .call(()=>{
            this.tweenSymbolClear(this.reel.getChildByName('00'), startAxisY[0]-moveRange, 0.25);
            this.tweenSymbolClear(this.reel.getChildByName('01'), startAxisY[1]-moveRange, 0.2);
            this.tweenSymbolClear(this.reel.getChildByName('02'), startAxisY[2]-moveRange, 0.15);
            this.tweenSymbolClear(this.reel.getChildByName('03'), startAxisY[3]-moveRange, 0.1);
            this.tweenSymbolClear(this.reel.getChildByName('04'), startAxisY[4]-moveRange, 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolClear(this.reel.getChildByName('10'), startAxisY[0]-moveRange, 0.25);
            this.tweenSymbolClear(this.reel.getChildByName('11'), startAxisY[1]-moveRange, 0.2);
            this.tweenSymbolClear(this.reel.getChildByName('12'), startAxisY[2]-moveRange, 0.15);
            this.tweenSymbolClear(this.reel.getChildByName('13'), startAxisY[3]-moveRange, 0.1);
            this.tweenSymbolClear(this.reel.getChildByName('14'), startAxisY[4]-moveRange, 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolClear(this.reel.getChildByName('20'), startAxisY[0]-moveRange, 0.25);
            this.tweenSymbolClear(this.reel.getChildByName('21'), startAxisY[1]-moveRange, 0.2);
            this.tweenSymbolClear(this.reel.getChildByName('22'), startAxisY[2]-moveRange, 0.15);
            this.tweenSymbolClear(this.reel.getChildByName('23'), startAxisY[3]-moveRange, 0.1);
            this.tweenSymbolClear(this.reel.getChildByName('24'), startAxisY[4]-moveRange, 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolClear(this.reel.getChildByName('30'), startAxisY[0]-moveRange, 0.25);
            this.tweenSymbolClear(this.reel.getChildByName('31'), startAxisY[1]-moveRange, 0.2);
            this.tweenSymbolClear(this.reel.getChildByName('32'), startAxisY[2]-moveRange, 0.15);
            this.tweenSymbolClear(this.reel.getChildByName('33'), startAxisY[3]-moveRange, 0.1);
            this.tweenSymbolClear(this.reel.getChildByName('34'), startAxisY[4]-moveRange, 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolClear(this.reel.getChildByName('40'), startAxisY[0]-moveRange, 0.25);
            this.tweenSymbolClear(this.reel.getChildByName('41'), startAxisY[1]-moveRange, 0.2);
            this.tweenSymbolClear(this.reel.getChildByName('42'), startAxisY[2]-moveRange, 0.15);
            this.tweenSymbolClear(this.reel.getChildByName('43'), startAxisY[3]-moveRange, 0.1);
            this.tweenSymbolClear(this.reel.getChildByName('44'), startAxisY[4]-moveRange, 0);
        })
        .to(reelTimeGap, {})
        .call(()=>{
            this.tweenSymbolClear(this.reel.getChildByName('50'), startAxisY[0]-moveRange, 0.25);
            this.tweenSymbolClear(this.reel.getChildByName('51'), startAxisY[1]-moveRange, 0.2);
            this.tweenSymbolClear(this.reel.getChildByName('52'), startAxisY[2]-moveRange, 0.15);
            this.tweenSymbolClear(this.reel.getChildByName('53'), startAxisY[3]-moveRange, 0.1);
            this.tweenSymbolClear(this.reel.getChildByName('54'), startAxisY[4]-moveRange, 0);
        })
        .to(dropTimeGap - 1, {})
        .call(()=>{
            this.reel.getChildByName('00').y = startAxisY[0]+moveRange;
            this.reel.getChildByName('01').y = startAxisY[1]+moveRange;
            this.reel.getChildByName('02').y = startAxisY[2]+moveRange;
            this.reel.getChildByName('03').y = startAxisY[3]+moveRange;
            this.reel.getChildByName('04').y = startAxisY[4]+moveRange;

            this.reel.getChildByName('10').y = startAxisY[0]+moveRange;
            this.reel.getChildByName('11').y = startAxisY[1]+moveRange;
            this.reel.getChildByName('12').y = startAxisY[2]+moveRange;
            this.reel.getChildByName('13').y = startAxisY[3]+moveRange;
            this.reel.getChildByName('14').y = startAxisY[4]+moveRange;

            this.reel.getChildByName('20').y = startAxisY[0]+moveRange;
            this.reel.getChildByName('21').y = startAxisY[1]+moveRange;
            this.reel.getChildByName('22').y = startAxisY[2]+moveRange;
            this.reel.getChildByName('23').y = startAxisY[3]+moveRange;
            this.reel.getChildByName('24').y = startAxisY[4]+moveRange;

            this.reel.getChildByName('30').y = startAxisY[0]+moveRange;
            this.reel.getChildByName('31').y = startAxisY[1]+moveRange;
            this.reel.getChildByName('32').y = startAxisY[2]+moveRange;
            this.reel.getChildByName('33').y = startAxisY[3]+moveRange;
            this.reel.getChildByName('34').y = startAxisY[4]+moveRange;
            
            this.reel.getChildByName('40').y = startAxisY[0]+moveRange;
            this.reel.getChildByName('41').y = startAxisY[1]+moveRange;
            this.reel.getChildByName('42').y = startAxisY[2]+moveRange;
            this.reel.getChildByName('43').y = startAxisY[3]+moveRange;
            this.reel.getChildByName('44').y = startAxisY[4]+moveRange;

            this.reel.getChildByName('50').y = startAxisY[0]+moveRange;
            this.reel.getChildByName('51').y = startAxisY[1]+moveRange;
            this.reel.getChildByName('52').y = startAxisY[2]+moveRange;
            this.reel.getChildByName('53').y = startAxisY[3]+moveRange;
            this.reel.getChildByName('54').y = startAxisY[4]+moveRange;

            for (let i=0; i<this.reel.children.length; i++) {
                this.reel.children[i].destroyAllChildren();
            };
        })
        .start();
    }

    symbolEliminate(symbolId: string, duration?: number): void {
        let node = this.reel.getChildByName(symbolId);
        let symbol = node.children[0];
        let symbolName = symbol.name;
        let anim = this.symbolAnimMap[`${symbolName}`];

        let spSymbol = node.children[0].getChildByName('spine').getComponent(sp.Skeleton);
        let spEliminate = node.children[0].getChildByName('eliminate').getComponent(sp.Skeleton);

        // 演消除動畫
        spSymbol.animation = anim;
        spEliminate.animation = 'line';

        // 移動symnbol至頂端位置
        let dur = duration ? duration : 1.5;
        setTimeout(()=>{
            node.y = node.y + (134*5) + 20;
        }, dur*1000);
    }

    sortSymbolRow(): void {

        // console.log('%%% 1', this.row_0);
        this.row_0.sort((a, b)=>{
            return (b.y+300) - (a.y+300);
        });
        // console.log('%%% 2', this.row_0);
        for(let i=0; i<this.row_0.length; i++) {
            this.row_0[i].name = `0${i}`;
        };
        // console.log('%%% 4', this.row_0);

        this.row_1.sort((a, b)=>{
            return b.y - a.y;
        });
        for(let i=0; i<this.row_1.length; i++) {
            this.row_1[i].name = `1${i}`;
        };

        this.row_2.sort((a, b)=>{
            return b.y - a.y;
        });
        for(let i=0; i<this.row_2.length; i++) {
            this.row_2[i].name = `2${i}`;
        };

        this.row_3.sort((a, b)=>{
            return b.y - a.y;
        });
        for(let i=0; i<this.row_3.length; i++) {
            this.row_3[i].name = `3${i}`;
        };

        this.row_4.sort((a, b)=>{
            return b.y - a.y;
        });
        for(let i=0; i<this.row_4.length; i++) {
            this.row_4[i].name = `4${i}`;
        };

        this.row_5.sort((a, b)=>{
            return b.y - a.y;
        });
        for(let i=0; i<this.row_5.length; i++) {
            this.row_5[i].name = `5${i}`;
        };

        // console.log('$', this.row_0);
        // console.log('$', this.row_1);
        // console.log('$', this.row_2);
        // console.log('$', this.row_3);
        // console.log('$', this.row_4);
        // console.log('$', this.row_5);
        
    }

    afterSymbolDrop(): void {
        for(let i=0; i<this.row_0.length; i++) {
            if (this.row_0[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_0[i], startAxisY[i], 0);
            };
        };
        for(let i=0; i<this.row_1.length; i++) {
            if (this.row_1[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_1[i], startAxisY[i], 0);
            };
        };
        for(let i=0; i<this.row_2.length; i++) {
            if (this.row_2[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_2[i], startAxisY[i], 0);
            };
        };
        for(let i=0; i<this.row_3.length; i++) {
            if (this.row_3[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_3[i], startAxisY[i], 0);
            };
        };
        for(let i=0; i<this.row_4.length; i++) {
            if (this.row_4[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_4[i], startAxisY[i], 0);
            };
        };
        for(let i=0; i<this.row_5.length; i++) {
            if (this.row_5[i].y !== startAxisY[i]) {
                this.tweenSymbolDrop(this.row_5[i], startAxisY[i], 0);
            };
        };
    }

    /** 數字跳動方法 || totalTime可抓500左右 */
    numberCounterAnim(target: cc.Label, goal: number, totalTime: number): void {
        if (goal == 0) {
            return;
        };
        this.clearNumberCounterInterval();
        
        target.string = `${0}`;
        // let num = parseInt(target.string, 10);
        let num = parseFloat(target.string);
        if (goal >= 0) {
            let nFrequency = totalTime / goal; // 跑到目標需要n個frequency
            let frequency = (nFrequency < 10) ? 10 : nFrequency; // setInterval最小只能跑10毫秒 也就是n最小為10
            let minTime = totalTime / 10; // setInterval跑完所需最短時間
            let gap = (nFrequency < 10)? (Math.floor(goal / minTime)) : 1; // +的數字間隔
            //
            this.animInterval = setInterval(() => {
                if (num < goal) {
                    num += gap;
                    target.string = `+${num}`;
                } else if (num > goal) {
                    target.string = `+${goal}`;
                    this.clearNumberCounterInterval();
                };
            }, frequency);
        } else if (goal < 0) {
            let nFrequency = totalTime / -goal; // 跑到目標需要n個frequency
            let frequency = (nFrequency < 10) ? 10 : nFrequency; // setInterval最小只能跑10毫秒 也就是n最小為10
            let minTime = totalTime / 10; // setInterval跑完所需最短時間
            let gap = (nFrequency < 10)? (Math.floor(-goal / minTime)) : 1; // +的數字間隔
            //
            this.animInterval = setInterval(() => {
                if (num > goal) {
                    num -= gap;
                    target.string = `${num}`;
                } else if (num < goal) {
                    target.string = `${goal}`;
                    this.clearNumberCounterInterval();
                };
            }, frequency);
        };
    }

    /** 強制清除數字跳動interval */
    clearNumberCounterInterval(): void {
        if (this.animInterval) {
            clearInterval(this.animInterval);
            this.animInterval = null;
        };
    }
}
