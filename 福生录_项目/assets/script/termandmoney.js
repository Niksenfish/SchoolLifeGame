// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       termlabel:cc.Label,
       weeklabel:cc.Label,
       moneylabel:cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
        var weeki = cc.sys.localStorage.getItem('weeki');
        var term =Math.floor(weeki/13)+1;
        var week = weeki%13+1;
        this.termlabel.string = term;
        this.weeklabel.string = week;
        this.moneylabel.string = userdata.money;
    },

    start () {

    },

    // update (dt) {},
});
