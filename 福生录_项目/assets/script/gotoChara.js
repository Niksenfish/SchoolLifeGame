// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
 
    properties: {
       
        scene:"人物选择场景"//要切换的场景
    },
   
    start () {
 
    },
    userclear(){
        cc.sys.localStorage.clear();
        cc.log("user clear");
    },
    changeScene(){
        
        //切换场景
        cc.director.loadScene(this.scene);
    }
 
    // update (dt) {},
});