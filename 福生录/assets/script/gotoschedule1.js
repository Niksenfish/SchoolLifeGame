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
    goto(){
        cc.director.preloadScene("行程安排1", function () {
            cc.log("Next scene 行程安排1 preloaded");
        });
        cc.director.loadScene("行程安排1");
    }

});
