// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
        this.sp = this.getComponent(cc.Label);
        this.sp.string = userdata.reason + "点";
    },

    start () {

    },

    // update (dt) {},
});
