// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
 
    properties: {
       
        scene:"行程安排1"//要切换的场景
    },
    onLoad () {
        cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
        if(!cDate){
            cDate = {
                count : 0,
                Mon : null,
                Tur : null,
                Wed : null,
                Thu : null,
                Fri : null,
                Sat : null,
                Sun : null,
            };
           cc.sys.localStorage.setItem('cdate',JSON.stringify(cDate));
          // this.label.string = playerDate.name + 'Study is '+ playerDate.study;
         }

     },
    clean(){
        cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
        cDate = {
            count : 0,
            Mon : null,
            Tur : null,
            Wed : null,
            Thu : null,
            Fri : null,
            Sat : null,
            Sun : null,
        };
       cc.sys.localStorage.setItem('cdate',JSON.stringify(cDate));
    },
    start () {
 
    },
 
    changeScene(){
 
        //切换场景
        cc.director.loadScene(this.scene);
    }
 
    // update (dt) {},
});