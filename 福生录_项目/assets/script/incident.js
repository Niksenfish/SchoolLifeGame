// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

/*
21  23 28 
male1term = {
    term1:[1,0,12,15,16,3,4,5,10,11,19,34],
    term2:[37,9,40,8,13,17,0,42,23/24,27,29/30,34],
    term3:[37,39,43,46/0,86,45,84,32,21/22,26,35,34],
    term4:[37,20,0,0,0,0,0,0,0,0,0,34]
}

male2term = {
        term1:[1,2,12,15,16,3,4,5,10,11,19,34],
        term2:[37,9,40,7,14,17,0,42,23/24/7,27,29/30/7,34],
        term3:[37,39,6,46/0/7,86,45,84,32,21/22,26,35,34],
        term4:[37,20,33,0,0,0,0,0,0,0,0,34]
    }

female1term = {
    term1:[1,0,12,15,16,3,4,5,10,11,19,34],
    term2:[37,9,40,8,0,17,0,42,23/24,27,29/30,34],
    term3:[37,39,0,46/0,86,45,84,32,21/22,26,35,34],
    term4:[37,20,0,0,0,0,0,0,0,0,0,34]
}

female2term = {
        term1:[1,28,12,15,16,3,4,5,10,11,19,34],
        term2:[37,9,40,8,0,17,25,42,23/24,27,29/30,34],
        term3:[37,39,36,46/0,86,45,84,32,21/22,26,35,34],
        term4:[37,20,0,0,0,0,0,0,0,0,0,34]
}
*/
// userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
// cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
// console.log("cDate is ~~~~");
// console.log(cDate);
// var aweeknum =[cDate.Mon,cDate.Tur,cDate.Wed,cDate.Thu,cDate.Fri,cDate.Sat,cDate.Sun];
// var aweekstr = [];


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
    onload(){
        // for(i in aweeknum)
        // {
        //     aweeknum[i] += 100;
        //     aweekstr[i]=aweeknum[i].toString();
        // }
        // console.log("weekstr is ~~~~~~~~~~~~");
        // console.log(weekstr);
        // // cc.sys.localStorage.setItem('aweekstr',JSON.stringify(aweekstr));
        // weekplan = {
        //     plan:[]
        // };
        // weekplan.plan = aweekstr;
        // cc.sys.localStorage.setItem('weekplan', JSON.stringify(weekplan));
    }
   
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {

    // },

    // update (dt) {},
});
