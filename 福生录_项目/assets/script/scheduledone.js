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
        
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    click(){
        var userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
        //每周恢复20点精力
        userdata.spirit+=10;
        var allweek = JSON.parse(cc.sys.localStorage.getItem('allweek'));
        var randomdialogs = JSON.parse(cc.sys.localStorage.getItem('randomdialogs'));
        var cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
        var weeknum =[cDate.Mon,cDate.Tur,cDate.Wed,cDate.Thu,cDate.Fri,cDate.Sat,cDate.Sun];
        var aweekstr = [];
        //周行程属性值变化
        for(i in weeknum)
        {
            switch (weeknum[i]){
                case 0:
                    userdata.money+=100;break;
                case 1:
                    userdata.spirit-=15;
                    userdata.study+=30;
                    userdata.reason+=5;
                    break;
                case 2:
                    userdata.spirit-=10;
                    userdata.study+=15;
                    userdata.reason+=5;
                    break;
                case 3:
                    userdata.study+=15;
                    userdata.reason+=5;
                    userdata.social+=5;
                    userdata.spirit-=5;
                    break;
                case 4:
                    userdata.money-=200;
                    userdata.social+=15;
                    userdata.spirit+=20;
                    break;
                case 5:
                    userdata.spirit+=30;
                    break;
                case 6:
                    userdata.spirit-=10;
                    userdata.social+=10;
                    userdata.reason+=5;
                    break;
                case 7:
                    userdata.study-=10;
                    userdata.reason-=10;
                    userdata.spirit+=20;
                    break;
                case 8:
                    userdata.spirit-=5;
                    userdata.social+=5;
                    userdata.reason+=5;
                    break;
                case 9:
                    userdata.spirit-=10;
                    userdata.social+=10;
                    userdata.money-=50;
                    break;
                case 10:
                    userdata.spirit-=10;
                    userdata.social+=20;
                    userdata.reason-=20;
                    userdata.money-=5;
                    break;
            }
        }
        var Thisweek = JSON.parse(cc.sys.localStorage.getItem('thisweek'));
        // if(!Thisweek)
        Thisweek = {
            weekplan:[]
        };
        cc.sys.localStorage.setItem('thisweek',JSON.stringify(Thisweek));
        for(var i in weeknum)
        {
            weeknum[i] += 100;
            aweekstr[i]=weeknum[i].toString();
        }
        for( var i in aweekstr)
        {
            Thisweek.weekplan[i] = aweekstr[i];
        }
        var weeki = cc.sys.localStorage.getItem('weeki');
        weeki++;
        cc.sys.localStorage.setItem('weeki', weeki);
        //对班干部、田径队分支进行判定
        if(userdata.isplayer == 1)
        {
            allweek = JSON.parse(cc.sys.localStorage.getItem('allweek'));
            allweek[21] = 23;
            allweek[23] = 29;
            allweek[28] = 46;
            userdata.isplayer = 2;
        }
        if(userdata.isleader == 1)
        {
            allweek[33] = 21;
            userdata.isleader = 2;
        }
        //插入时间线事件
        if(allweek[weeki] == 0)
        {
            Thisweek.weekplan[Thisweek.weekplan.length] = randomdialog.toString();
        }
        else
        {
           Thisweek.weekplan[Thisweek.weekplan.length] = allweek[weeki].toString();
        }
        
        // var index = Math.floor((Math.random()*arr.length));
        // Thisweek.weekplan[Thisweek.weekplan.length] = arr[index].toString();
        //插入随机事件
        var randomdialog = randomdialogs[Math.floor((Math.random()*randomdialogs.length))];
        Thisweek.weekplan[Thisweek.weekplan.length] = randomdialog.toString();
        cc.sys.localStorage.setItem('thisweek',JSON.stringify(Thisweek));
        cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
    },

    changeScene(){
 
        //切换场景
        cc.director.preloadScene("事件", function () {
            cc.log("Next scene 事件 preloaded");
        });
        cc.director.loadScene("事件");
    }
    // update (dt) {},
});
