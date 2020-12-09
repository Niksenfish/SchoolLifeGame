// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        total: 100,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
        this.sp = this.getComponent(cc.Sprite);
        //console.log("ssssssss",this.sp);
        this.now = userdata.reason;
        var per = this.now / this.total;
        if(per >1){
            per = 1;
        }
        this.sp.fillRange = per;
    },

    start () {

    }

    // update (dt) {},
});
