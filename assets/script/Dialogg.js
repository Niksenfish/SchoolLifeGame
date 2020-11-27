var DialogParser = require("DialogParser");
var DialogData = require("DialogData");
aweek = JSON.parse(cc.sys.localStorage.getItem('thisweek'));
userData = JSON.parse(cc.sys.localStorage.getItem('userdata'));
let flag1 = 1;
var flag2 = 1;
let weeki;
var j = 0;
var resultphrases;
let roleMap = {
    2:{name:'天底下最好的舍友',url:'role/天底下最好的舍友（男）'},
    3:{name:'刘丽君', url:'role/刘丽君'},
    4:{name:'庄梓萱',url:'role/庄梓萱'},
    5:{name:'胡艺语',url:'role/胡艺语'},
    6:{name:'赵茜如',url:'role/赵茜如'},
    7:{name:'部门学姐',url:'role/部门学姐'},
    8:{name:'齐修',url:'role/齐修'}
};
let bgMap = {
    1:{name:'主界面1',url:'bg/主界面1'},
    2:{name:'卧室1',url:'bg/卧室1'},
    3:{name:'图书馆1',url:'bg/图书馆1'},
    4:{name:'图书馆2',url:'bg/图书馆2'},
    5:{name:'宿舍1',url:'bg/宿舍1'},
    6:{name:'操场1',url:'bg/操场1'},
    7:{name:'操场2',url:'bg/操场2'},
    8:{name:'教室1',url:'bg/教室1'},
    9:{name:'教室2',url:'bg/教室2'},
    10:{name:'教室3',url:'bg/教室3'},
    11:{name:'教室4',url:'bg/教室4'},
    12:{name:'校医院1',url:'bg/校医院1'},
    13:{name:'校道1',url:'bg/校道1'},
    14:{name:'校道2',url:'bg/校道2'},
    15:{name:'永嘉天地1',url:'bg/永嘉天地1'},
    16:{name:'火锅1',url:'bg/火锅1'},
    17:{name:'福友阁1',url:'bg/福友阁1'},
    18:{name:'福友阁2',url:'bg/福友阁2'},
    18:{name:'青春广场1',url:'bg/青春广场1'},
    19:{name:'食堂1',url:'bg/食堂1'}
};
cc.Class({
    extends: cc.Component,

    properties: {
        thisnode: cc.Node,
        optionPrefab: cc.Prefab,
        phraseLabel: cc.Label,
        optionPanel: cc.Node,
        npcSprite:cc.Sprite,
        nameLabel:cc.Label,
        bgSprite:cc.Sprite
    },

    // use this for initialization
    onLoad: function () {
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
       console.log("userData.id is ~~~~~~~~~~~~");
       console.log(userData.id);
       if(userData.id ==1 || userData.id ==2){
        roleMap = {
            1:{name:'天底下最好的舍友',url:'role/天底下最好的舍友（男）'},
            3:{name:'刘丽君', url:'role/刘丽君'},
            4:{name:'庄梓萱',url:'role/庄梓萱'},
            5:{name:'胡艺语',url:'role/胡艺语'},
            6:{name:'赵茜如',url:'role/赵茜如'},
            7:{name:'部门学姐',url:'role/部门学姐'},
            8:{name:'齐修',url:'role/齐修'}
    };
}
    else
    {
        roleMap = {
            2:{name:'天底下最好的舍友',url:'role/天底下最好的舍友（女）'},
            3:{name:'刘丽君', url:'role/刘丽君'},
            4:{name:'庄梓萱',url:'role/庄梓萱'},
            5:{name:'胡艺语',url:'role/胡艺语'},
            6:{name:'赵茜如',url:'role/赵茜如'},
            7:{name:'部门学姐',url:'role/部门学姐'},
            8:{name:'齐修',url:'role/齐修'}
        };
    }
        weeki = 0;
        this.node.on('touchend',this.stepDialog, this);
        cc.sys.localStorage.setItem('userdata', JSON.stringify(userData));
        var self = this;
        console.log("#####################");
        console.log(aweek);
        cc.resources.load("dialogs/dialogs", function (error, asset) {
            if (error) {
                cc.log(error);
            }
            else {
                self.dialogs = asset.json;//dialogs是数组，里面存着对话对象
                    console.log("weeki in aweek is ");
                    
                        console.log(self.dialogs);
                        console.log("aweek is ~~~~~~~~~~~~~~~~~~~~~~~");
                        console.log(aweek);
                   // 遍历全部事件
                        aweek = Object.getOwnPropertyNames(self.dialogs);
                    for( ii in aweek);
                    {
                        console.log("___________________");
                        console.log(aweek[ii]);
                        j++;
                    }
                    console.log("J="+j);
                    console.log(aweek);
                    
                    self.dialog = DialogParser.parseDialog(self.dialogs[aweek[weeki]]);//dialog是混合类，结构在DialogDate中，分为属性和方法aweek.weekplan[weekid]
                    // console.log("sequence "+self.sequence["Fine"]);
                    console.log(self.dialog);
                    console.log(self.dialog);
                    self.dialog.start();
                    bgid = self.dialog.getbgid();
                    self.stepDialog();
            }
        });
        
    },
    stepDialog() {
        if (!this.dialog) return;
        if(flag1==0)
        {
            this.nameLabel.string = "事件结果";
                this.npcSprite.node.active = false;
                this.phraseLabel.string = resultphrases;
                flag1 = 1;
                return;
        }
        this.optionPanel.active = false;
        var curr = this.dialog.next();
        if(curr == -1)//如果当前为最后一句
        {

            // console.log("a dialog is end ~~~~~~~~~~~");
            // this.node.off('touchend',this.stepDialog, this);
            // this.optionPanel.removeAllChildren();
            // this.optionPanel.active = true; 
            // var option2 = cc.instantiate(this.optionPrefab);
            // var label2 = option2.children[0].getComponent(cc.Label);
            // label2.string = "下一事件";
            // var button2 = option2.getComponent(cc.Button);
            // this.optionPanel.addChild(option2);
            // console.log("test2");
            // var self = this;
            // self.phraseLabel.string = "";
            // button2.node.on('click', function(button){
            //     self.nameLabel.string = "事件结果";
            //     self.npcSprite.node.active = false;
            //     self.phraseLabel.string = "";
            //     self.optionPanel.removeAllChildren();
            //     weeki++;
            // },this)

           weeki++;
            if(weeki < aweek.length)
            {
                console.log("a dialog is end ~~~~~~~~~~~");
            this.node.off('touchend',this.stepDialog, this);
            this.optionPanel.removeAllChildren();
            this.optionPanel.active = true; 
            var option2 = cc.instantiate(this.optionPrefab);
            var label2 = option2.children[0].getComponent(cc.Label);
            label2.string = "下一事件";
            var button2 = option2.getComponent(cc.Button);
            this.optionPanel.addChild(option2);
            console.log("test2");
            var self = this;
            self.phraseLabel.string = "";
            button2.node.on('click', function(button){
                self.nameLabel.string = "";
                self.npcSprite.node.active = false;
                self.phraseLabel.string = "";
                self.optionPanel.removeAllChildren();
                this.node.on('touchend',this.stepDialog, this);
            },this)

                console.log("currrrrrrrrrrrrr");
                this.dialog = DialogParser.parseDialog(this.dialogs[aweek[weeki]]);//dialog是混合类，结构在DialogDate中，分为属性和方法
                    // console.log("sequence "+self.sequence["Fine"]);
                    console.log(this.dialog);
                    console.log(this.dialog);
                    this.dialog.start();
                    flag1 = 0;
                    bgid = self.dialog.getbgid();
                    this.stepDialog();
            }
            else
            {
                // console.log("((((((((((((((((((((((((((((");
                //切换场景
                if(flag2 == 1)
                {
                    console.log("((((((((((((((((((((((((((((");
                    this.nameLabel.string = "事件结果";
                    this.npcSprite.node.active = false;
                    this.phraseLabel.string = resultphrases;
                    flag2 = 0;
                    return;
                }
                this.node.on('touchend',function(){
                    console.log("end!!!");
                this.node.removeAllChildren();
                cc.director.preloadScene("行程安排0", function () {
                    cc.log("Next scene 行程安排0 preloaded");
                });
                cc.director.loadScene("行程安排0");
                }, this);
            }
        }
        switch (curr.type) {
        case DialogData.Type.PHRASE:
            // var rolename = this.dialog.getRole(curr.role);
            roleid = curr.roleid;
            rolename = curr.rolename;
            console.log("@@@@"+roleid+rolename);
            this.setTextData(roleid,rolename,bgid);//人物编号



            console.log("rolename:"+rolename+"rolename:"+rolename);
            this.phraseLabel.string = curr.phrase;
            //if(curr.phrase.nextindex)
            break;
        case DialogData.Type.OPTION:
            this.node.off('touchend',this.stepDialog, this);
            this.optionPanel.removeAllChildren();
            this.optionPanel.active = true; 
            var options = curr.options;
            console.log(options);
            for (var i = 0, l = options.length; i < l; ++i) {
// TODO: need use option object pool
                var option = cc.instantiate(this.optionPrefab);
// TODO: Add component to option prefab
                // option.children[0].getComponent(cc.Label).string = options[i];
                var label = option.children[0].getComponent(cc.Label);
                var button = option.getComponent(cc.Button);
                if (label) {
                    label.string = options[i];
                }
                else {
                    cc.error("Something wrong?");
                }
                this.optionPanel.addChild(option);
                console.log("test2"+label.string);
                var self = this;
                button.node.on('click', function(button){
                    var label = button.node.children[0].getComponent(cc.Label);
                    console.log("~~"+label.string);
                    var sequence = self.dialog.getSequence();
                    console.log("sequence"+sequence);
                    //读出点击的选项的对应sequence里面的nextindex
                    var goto = sequence[label.string].nextindex;
                    console.log("gotototototo "+goto);
                    //更改相应的索引
                    self.dialog.optchosed(goto);
                    //相应属性变化
                    var results = sequence[label.string].results;
                    console.log("&&&"+results);
                    resultphrases = "结果:";
                    for(i in results )
                    {
                        console.log("####"+i);
                        console.log(i);
                        console.log(userData);
                        console.log(userData.study);
                        console.log(userData["study"]);
                        // userData = JSON.parse(cc.sys.localStorage.getItem('userData'));
                        console.log(userData);
                        console.log(userData[i]);
                        console.log(results[i]);
                        userData[i]+=results[i];
                        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
                        console.log("********i:"+i+"num:"+userData[i]);
                        if(results[i]!=0)
                        {
                            console.log(i);
                            switch(i){
                                case "study": pname = "学业";break;
                                case "reason": pname = "理智";break;
                                case "spirit": pname = "精力";break;
                                case "social": pname = "社交";break;
                                case "money": pname = "生活费";break;
                            }
                            aphrase =  pname + "变化为" + results[i] + ";";
                            resultphrases = resultphrases + aphrase;
                        }
                    }
                    //选项完成后销毁
                    this.optionPanel.removeAllChildren();
                    this.node.on('touchend',this.stepDialog, this);
                }, this)
            }
            
            break;
        }
    },
    setTextData(roleid,rolename,bgid){
        console.log("dddddd"+this.nameLabel);
        if(rolename=="null"||rolename=="NULL") this.nameLabel.string = "";
        else    this.nameLabel.string = rolename;
        var self = this;
        if (roleid === -1) {
			self.npcSprite.node.active = false;
        }
        else
        {
            self.npcSprite.node.active = true;
            cc.resources.preload(roleMap[roleid].url,cc.SpriteFrame);
            cc.resources.load(roleMap[roleid].url,cc.SpriteFrame,function (err, texture){
            self.npcSprite.spriteFrame = texture;
            });
        }
        console.log("1111111111111222222222222222233333333333333")
        console.log(bgid);
        console.log(bgMap);
        console.log(bgMap[bgid]);
        cc.resources.preload(bgMap[bgid].url,cc.SpriteFrame);
            cc.resources.load(bgMap[bgid].url,cc.SpriteFrame,function (err, texture){
            self.bgSprite.spriteFrame = texture;
            });
    },
    // btnclk(button){
    //     console.log("~~"+label.string);
    // }
});
