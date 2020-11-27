// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
 
    properties: {
       
        scene:"行程安排0"//要切换的场景
    },
 
    start () {
 
    },
    richgirl(){
        userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
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
        cc.log("rich_girl");
    },
    normalgirl(){
        userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
            userdata = {
                id:3,
                type:"平凡女1",
                spirit : 200,
                social : 60,
                reason : 100,
                study : 100,
                money : 3000,
                isplayer : 0,
                isleader : 0,
            };
           cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
        cc.log("normal_girl");
    },
    smartboy(){
        userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
            userdata = {
                id:2,
                type:"学霸男1",
                spirit : 250,
                social : 80,
                reason : 100,
                study : 80,
                money : 4000,
                isplayer : 0,
                isleader : 0,
            };
           cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
        cc.log("smartboy");
    },
    sportsboy(){
        userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
            userdata = {
                id:1,
                type:"体育男",
                spirit : 200,
                social : 80,
                reason : 100,
                study : 150,
                money : 1500,
                isplayer : 0,
                isleader : 0,
            };
           cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
        cc.log("sportsboy");
    },
    changeScene(){
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
    cc.log("rich_girl");
        //切换场景
        cc.director.loadScene(this.scene);
    }
 
    // update (dt) {},
});