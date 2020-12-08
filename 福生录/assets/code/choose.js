
       
cc.Class({
    extends: cc.Component,
 
    properties: {
       
    },
    onload:function(){

    },
    start(){

    },
    // onload:function(){
      
    //     let userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
    //     if(!userdata)
    //     {
    //         userdata = {
    //         id:4,
    //         type:"富家女2",
    //         spirit : 200,
    //         social : 100,
    //         reason : 100,
    //         study : 80,
    //         money : 6000,
    //         isplayer : 0,
    //         isleader : 0,
    //         };
    //         cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
    //     } 
    // },
    richgirl(){
            // userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
            var userdata = {
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
           cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
        // cc.log("rich_girl");
    },
    normalgirl(){
        // userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
          var userdata = {
                id:3,
                type:"平凡女1",
                spirit : 200,
                social : 60,
                reason : 100,
                study : 100,
                money : 3000,
                isplayer : 0,
                isleader : 0,
            };
           cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
        // cc.log("normal_girl");
    },
    smartboy(){
        // userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
          var userdata = {
                id:1,
                type:"学霸男1",
                spirit : 250,
                social : 80,
                reason : 100,
                study : 80,
                money : 4000,
                isplayer : 0,
                isleader : 0,
            };
           cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
        // cc.log("smartboy");
    },
    sportsboy(){
          var userdata = {
                id:2,
                type:"体育男2",
                spirit : 200,
                social : 80,
                reason : 100,
                study : 150,
                money : 1500,
                isplayer : 0,
                isleader : 0,
            };
           cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
        // cc.log("sportsboy");
    },
    changeScene(){
    //     userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
    //     if(!userdata)
    //     userdata = {
    //         id:4,
    //         type:"富家女2",
    //         spirit : 200,
    //         social : 100,
    //         reason : 100,
    //         study : 80,
    //         money : 6000,
    //         isplayer : 0,
    //         isleader : 0,
    //     };
    //    cc.sys.localStorage.setItem('userdata',JSON.stringify(userdata));
    //    allweek = JSON.parse(cc.sys.localStorage.getItem('allweek'));
    //     if(!allweek)
    //     {
    //         allweek = [];
    //     }
    //     randomdialogs = JSON.parse(cc.sys.localStorage.getItem('randomdialogs'));
    //     if(!randomdialogs)
    //     {
    //         randomdialogs = [];
    //     }
    //    switch(userdata.id){
    //     case 1: 
    //         allweek = [0,1,0,12,15,16,3,4,5,10,11,19,34,37,9,40,8,13,17,0,42,24,27,30,34,37,39,43,0,86,45,84,32,22,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34];
    //         randomdialogs = [49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77];
    //         break;
    //     case 2: 
    //         allweek = [0,1,2,12,15,16,3,4,5,10,11,19,34,37,9,40,7,14,17,0,42,24,27,30,34,37,39,6,0,86,45,84,32,22,26,35,34,37,20,33,0,0,0,0,0,0,0,0,34];
    //         randomdialogs = [49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71];
    //         break;
    //     case 3: 
    //         allweek = [0,1,0,12,15,16,3,4,5,10,11,19,34,37,9,40,8,0,17,0,42,24,27,30,34,37,39,0,0,86,45,84,32,22,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34];
    //         randomdialogs = [49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,78,79,80,81,82,83];
    //         break;
    //     case 4: 
    //         allweek = [0,1,28,12,15,16,3,4,5,10,11,19,34,37,9,40,8,0,17,25,42,24,27,30,34,37,39,36,0,86,45,84,32,22,26,35,34,37,20,0,0,0,0,0,0,0,0,0,34];
    //         randomdialogs = [49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71];
    //         break;
    //     }
        
    //     cc.sys.localStorage.setItem('allweek',JSON.stringify(allweek));

        // cc.sys.localStorage.setItem('randomdialogs',JSON.stringify(randomdialogs));
        cc.director.preloadScene("行程安排0", function () {
            cc.log("Next scene 行程安排0 preloaded");
        });
        //切换场景
        cc.director.loadScene("行程安排0");
    }
 
    // update (dt) {},
});