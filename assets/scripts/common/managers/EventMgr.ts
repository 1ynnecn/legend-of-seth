
const {ccclass, property} = cc._decorator;

@ccclass
export default class EventMgr extends cc.Component {

    public static Instance: EventMgr = null as unknown as EventMgr;

    /** 事件派發平台結構:
     *  { event_1: [訂閱1_obj{caller: caller, func: func}, 訂閱2_obj{}, ... 訂閱3, 訂閱4 ...], 
     *    event_2: [訂閱1_obj{caller: caller, func: func}, 訂閱2_obj{}, ... 訂閱3, 訂閱4 ...],
     *    event_3: ...
     *  } */
     public EventMap = {};

    onLoad () {
        if (EventMgr.Instance === null) {
            EventMgr.Instance = this;
        } else {
            console.error(`[error]: ${this} has multi instances.` );
            this.destroy();
            console.log(`[fix]: ${this} has been destroyed.`);
            return;
        };
    }

    /** 增加事件訂閱者 || eventName: 事件名稱 || caller: 訂閱者 || func: 回調函數 */
    public addEventListener(eventName, caller, func: Function) {
        if (!this.EventMap[eventName]) {
            this.EventMap[eventName] = [];
        };
        // 在對應的該事件名稱(array)下新增訂閱者(obj)
        let queue = this.EventMap[eventName];
        queue.push({
            caller: caller,
            func: func
        });
    }

    /** 移除事件訂閱者 || eventName: 事件名稱 || caller: 訂閱者 || func: 回調函數 */
    public removeEventListener(eventName, caller, func: Function) {
        if (!this.EventMap[eventName]) { return };
        // 遍歷map該事件obj中尋找指定的該訂閱者
        let queue = this.EventMap[eventName];
        for (let i = 0; i < queue.length; i++) {
            let obj = queue[i];
            if (obj.caller == caller && obj.func == func) {
                queue.splice(i, 1);
                break;
            };
        };
        // 如果已經沒有人訂閱了
        if (queue.length <= 0) {
            this.EventMap[eventName] = null;
        }
    }

    /** 強制移除該事件訂閱的所有回調函數 */
    public removeEventListenerAllCallbacks(eventName, caller) {
        if (!this.EventMap[eventName]) { return };
        // 遍歷map該事件obj中尋找指定的該訂閱者
        let queue = this.EventMap[eventName];
        for (let i = 0; i < queue.length; i++) {
            let obj = queue[i];
            if (obj.caller == caller) {
                queue.splice(i, 1);
                break;
            };
        };
        // 如果已經沒有人訂閱了
        if (queue.length <= 0) {
            this.EventMap[eventName] = null;
        }
    }

    /** 派送事件 */
    public dispatchEvent(eventName, data) {
        if (!this.EventMap[eventName]) { return; };
        // 對該事件的所有訂閱者派發事件
        let queue = this.EventMap[eventName];
        for (let i = 0; i < queue.length; i++) {
            let obj = queue[i];
            obj.func.call(obj.caller, eventName, data);
        };
    }

}
