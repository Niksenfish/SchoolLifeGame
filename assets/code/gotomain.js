// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
 
    properties: {
       
        scene:"主页"//要切换的场景
    },
 
    start () {
 
    },
 
    changeScene(){
 
        //切换场景
        cc.director.loadScene(this.scene);
    }
 
    // update (dt) {},
});