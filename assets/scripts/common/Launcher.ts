
const {ccclass, property} = cc._decorator;

const BRAND = cc.Enum({
    ofa: 0,
});

@ccclass
export default class Launcher extends cc.Component {

    public static Instance: Launcher = null as unknown as Launcher;

    @property(cc.Canvas)
    private canvas: cc.Canvas = null;
    @property
    public version_pc: string = "";
    @property
    public version_mobile: string = "";
    @property
    public demoMode: boolean = false;

    /** 平台
     *  || 0=ofa
    */
    @property({
        type: cc.Enum(BRAND),
        displayName: "Brand"
    })

    public BRAND = 0;

    


    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
