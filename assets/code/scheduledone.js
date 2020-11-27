// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
/*
21  23 28 
male1term = {
    term1:[1,0,12,15,16,3,4,5,10,11,19,34,37,9,40,8,13,17,0,42,23/24,27,29/30,34,37,39,43,46/0,86,45,84,32,21/22,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34]
}

male2term = {
        term1:[1,2,12,15,16,3,4,5,10,11,19,34,37,9,40,7,14,17,0,42,23/24/7,27,29/30/7,34,37,39,6,46/0/7,86,45,84,32,21/22,26,35,34,37,20,33,0,0,0,0,0,0,0,0,34]
    }

female1term = {
    term1:[1,0,12,15,16,3,4,5,10,11,19,34,37,9,40,8,0,17,0,42,23/24,27,29/30,34,37,39,0,46/0,86,45,84,32,21/22,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34]
}

female2term = {
        term1:[1,28,12,15,16,3,4,5,10,11,19,34,37,9,40,8,0,17,25,42,23/24,27,29/30,34,37,39,36,46/0,86,45,84,32,21/22,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34]
}
*/
cc.Class({
    extends: cc.Component,

    properties: {
        
        scene:"事件"//要切换的场景
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    click(){
        userData = JSON.parse(cc.sys.localStorage.getItem('userdata'));
        if(!userData)
        userData = {
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
       cc.sys.localStorage.setItem('userdata',JSON.stringify(userData));
       switch(userData.id){
            case 1: allweek = [0,1,0,12,15,16,3,4,5,10,11,19,34,37,9,40,8,13,17,0,42,23,27,29,34,37,39,43,0,86,45,84,32,21,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34];break;
            case 2: allweek = [0,1,2,12,15,16,3,4,5,10,11,19,34,37,9,40,7,14,17,0,42,23,27,30,34,37,39,6,0,86,45,84,32,21,26,35,34,37,20,33,0,0,0,0,0,0,0,0,34];break;
            case 3: allweek = [0,1,0,12,15,16,3,4,5,10,11,19,34,37,9,40,8,0,17,0,42,23,27,29,34,37,39,0,46/0,86,45,84,32,21,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34];break;
            case 4: allweek = [0,1,28,12,15,16,3,4,5,10,11,19,34,37,9,40,8,0,17,25,42,23,27,30,34,37,39,36,0,86,45,84,32,22,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34];break;
            }
        cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
        var weeknum =[cDate.Mon,cDate.Tur,cDate.Wed,cDate.Thu,cDate.Fri,cDate.Sat,cDate.Sun];
        var aweekstr = [];
        console.log(weeknum);
        Thisweek = JSON.parse(cc.sys.localStorage.getItem('thisweek'));
        if(!Thisweek)
        Thisweek = {
            weekplan:[]
        };
        
        for(i in weeknum)
        {
            weeknum[i] += 100;
            aweekstr[i]=weeknum[i].toString();
        }
        console.log("aweekstr is ~");
        console.log(aweekstr);
        for( i in aweekstr)
        {
            Thisweek.weekplan[i] = aweekstr[i];
        }
        weeki = cc.sys.localStorage.getItem('weeki');
        if(!weeki) {
            weeki = 0;
            cc.sys.localStorage.setItem('weeki', 0);
        }  
        weeki++;
        cc.sys.localStorage.setItem('weeki', weeki);
        Thisweek.weekplan[Thisweek.weekplan.length] = allweek[weeki].toString();
        console.log("!!!!~~~~~~~~~~~~~!!!!!!!");
        console.log(weeki);
        // var index = Math.floor((Math.random()*arr.length));
        // Thisweek.weekplan[Thisweek.weekplan.length] = arr[index].toString();
        cc.sys.localStorage.setItem('thisweek',JSON.stringify(Thisweek));
    },
    start () {

    },
    changeScene(){
 
        //切换场景
        cc.director.loadScene(this.scene);
    }
    // update (dt) {},
});
