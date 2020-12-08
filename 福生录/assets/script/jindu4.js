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
        userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
        if(!userdata)
        userdata = {
            id:4,
            type:"富家女2",
            spirit : 200,
            social : 100,
            reason : 100,
            study : 80,
            money : 6000,
            isplayer : 0,
            isleader : 0,
        };
       cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));

        this.sp = this.getComponent(cc.Sprite);
        //console.log("ssssssss",this.sp);
        this.now = userdata.social;

        //console.log("social:-------------------",this.now);


        
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
