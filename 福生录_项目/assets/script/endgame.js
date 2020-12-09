
cc.Class({
    extends: cc.Component,

    properties: {
        dialogbg:cc.Sprite,
        dialoglabel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.dialogbg.node.active = false;
        this.dialoglabel.node.active = false;
        
     },

    start () {
        var userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
        if(userdata.spirit <0)
        {
            this.dialogbg.node.active = true;
                this.dialoglabel.node.active = true;
                this.dialoglabel.string = "因为太过疲惫，您的身体熬不住了，非常抱歉，游戏结束。";
        
        }
        else if(userdata.social<0)
        {
            this.dialogbg.node.active = true;
            this.dialoglabel.node.active = true;
            this.dialoglabel.string = "因为您太没有存在感，连本游戏都忘记了您的存在，非常抱歉，游戏结束。";
        }
        else if(userdata.reason<0){
            this.dialogbg.node.active = true;
            this.dialoglabel.node.active = true;
            this.dialoglabel.string = "您逐渐失去理智，系统判断您无法继续大学生活，非常抱歉，游戏结束。";
        }
        else if(userdata.study<0){
            this.dialogbg.node.active = true;
            this.dialoglabel.node.active = true;
            this.dialoglabel.string = "您挂的课太多，只能回家种田了，非常抱歉，游戏结束。";
        }
        else if(userdata.money<0){
            this.dialogbg.node.active = true;
            this.dialoglabel.node.active = true;
            this.dialoglabel.string = "您的余额已不足以支持您继续体验本游戏，非常抱歉，游戏结束。";
        }

    }

    // update (dt) {},
});
