// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
        if(!cDate){
            cDate = {
                count : 0,
                Mon : 0,
                Tur : 0,
                Wed : 0,
                Thu : 0,
                Fri : 0,
                Sat : 0,
                Sun : 0,
            };
            cc.sys.localStorage.setItem('cdate',JSON.stringify(cDate));
        }           
cc.Class({
    extends: cc.Component,

    properties: {
        label0 : cc.Label,
        label1 : cc.Label,
        label2 : cc.Label,
        label3 : cc.Label,
        label4 : cc.Label,
        label5 : cc.Label,
        label6 : cc.Label,
        label7 : cc.Label,

    },

    // LIFE-CYCLE CALLBACKS:

    //  onLoad () {
    //     // var cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
    //     // if(!cDate){
    //     //     cDate = {
    //     //         count : 0,
    //     //         Mon : 0,
    //     //         Tur : 0,
    //     //         Wed : 0,
    //     //         Thu : 0,
    //     //         Fri : 0,
    //     //         Sat : 0,
    //     //         Sun : 0,
    //     //     };
    //     //    cc.sys.localStorage.setItem('cdate',JSON.stringify(cDate));
    //     //   // this.label.string = playerDate.name + 'Study is '+ playerDate.study;
    //     //  }
        
         
    //  },
    
    jump(){
        var cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
        cDate.count += 1;
        var schedule =["勤工俭学","认真上课","完成作业","实践作业","进城游玩","锻炼身体","社团活动","宿舍摸鱼","整理宿舍","练习车技","电子竞技"];
        var i =schedule.indexOf(this.label0.string);
        // cDate.a += 1;
        // cc.log("cdata.a = "+cDate.a);
        // cc.log(thing_id);
        if(cDate.count == 1)
        {
            this.label1.string = this.label0.string;
            cDate.Mon = i;
            cc.log(this.label0.string);
       
        }
        else if(cDate.count == 2)
        {
            this.label2.string = this.label0.string;
            cDate.Tur = i;
            cc.log(this.label0.string);
       
        }
        else if(cDate.count == 3)
        {
            this.label3.string = this.label0.string;
            cDate.Wed = i;
            cc.log(this.label0.string);
       
        }
        else if(cDate.count == 4)
        {
            this.label4.string = this.label0.string;
            cDate.Thu = i;
            cc.log(this.label0.string);
       
        }
        else if(cDate.count == 5)
        {
            this.label5.string = this.label0.string;
            cDate.Fri = i
            cc.log(this.label0.string);
       
        }
        else if(cDate.count == 6)
        {
            this.label6.string = this.label0.string;
            cDate.Sat = i;
            cc.log(this.label0.string);
       
        }
        else if(cDate.count == 7)
        {
            this.label7.string = this.label0.string;
            cDate.Sun = i;
            cc.log(this.label0.string);
       
        }
        
        // cc.log(cDate.count);
        cc.sys.localStorage.setItem('cdate',JSON.stringify(cDate));

    },
   reset(){
    // cDate = JSON.parse(cc.sys.localStorage.getItem('cdate'));
    // cDate.count = 0;
    // cDate.Mon = 0;
    // cDate.Tur = 0;
    // cDate.Wed = 0;
    // cDate.Thu = 0;
    // cDate.Fri = 0;
    // cDate.Sat = 0;
    // cDate.Sun = 0;
    // cc.log(cDate.count);
    var cDate = {
        count : 0,
        Mon : 0,
        Tur : 0,
        Wed : 0,
        Thu : 0,
        Fri : 0,
        Sat : 0,
        Sun : 0,
    };
    cc.sys.localStorage.setItem('cdate',JSON.stringify(cDate));
    this.label1.string = '周一';
    this.label2.string = '周二';
    this.label3.string = '周三';
    this.label4.string = '周四';
    this.label5.string = '周五';
    this.label6.string = '周六';
    this.label7.string = '周日';

   },
     start () {
        this.reset();
     }

    // update (dt) {},
});
