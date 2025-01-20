
const {ccclass, property} = cc._decorator;

enum STATE {
    DISCONNECTED = 0,   // 斷開連接
    CONNECTING = 1,     // 正在連接
    CONNECTED =2        // 已經連接
};

const PING_TIME = 10000;  // 毫秒

const RESPONSE = {

};

@ccclass
export default class NetMgr extends cc.Component {

    private socket: WebSocket | null = null;
    public state: number = STATE.DISCONNECTED;
    private serverUrl = '220.132.92.44:8089';


    // onLoad () {}

    start () {
        console.log('NetMgr loaded.');
        this.socket = window['io'].connect(this.serverUrl, { transports: ['websocket']} );
    }

    // update (dt) {}
}
