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
        userData = JSON.parse(cc.sys.localStorage.getItem('userData')); 
        if(!userData)
        {
           userData = {
            name : 'ok',
            study : 0,
            reason : 50,
            spirit : 100,
            social : 10,
            money : 0
         }; 
        }
        weeki = 0;
        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
        this.sp = this.getComponent(cc.Label);
        this.sp.string = userData.spirit + "点";
    },

    start () {

    },

    // update (dt) {},
});
