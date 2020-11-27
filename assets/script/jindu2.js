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
       // this.node.on('touchend',this.stepDialog, this);
        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));

        this.sp = this.getComponent(cc.Sprite);
        //console.log("ssssssss",this.sp);
        this.now = userData.reason;

        //console.log("reason:(((((((((((((((((((",this.now);


        
        var per = this.now / this.total;
        if(per >1){
            per = 1;
        }
        this.sp.fillRange = per;
    },

    start () {

    },

    // update (dt) {},
});
