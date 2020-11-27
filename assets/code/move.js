// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.outofmain=cc.v2(3000,0)
        this.node.position=this.outofmain
        this.node.on('fade-in',this.StartFadeIn,this)
        this.node.on('fade-out',this.StartFadeOut,this)
    },
    StartFadeIn(){
        cc.log("show")
        this.node.position=cc.v2(0,0)
        
    },
    StartFadeOut(){
        cc.log("hide")
        this.node.position=cc.v2(3000,0)
    },
    start () {

    },

    // update (dt) {},
});
