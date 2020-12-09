
let roleMap = {
    1:{name:'天底下最好的舍友',url:'role/天底下最好的舍友（女）'},
    2:{name:'天底下最好的舍友',url:'role/天底下最好的舍友（男）'},
    3:{name:'刘丽君', url:'role/刘丽君'},
    4:{name:'庄梓萱',url:'role/庄梓萱'},
    5:{name:'胡艺语',url:'role/胡艺语'},
    6:{name:'赵茜如',url:'role/赵茜茹'},
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
    19:{name:'青春广场1',url:'bg/青春广场1'},
    20:{name:'食堂1',url:'bg/食堂1'},
    21:{name:'奶茶店',url:'bg/奶茶店'}
};
var DialogParser = require("DialogParser");
var DialogData = require("DialogData");
var weekdayi;
// Thisweek.weekplan 字符串数组，一周的时间安排

var resultphrases = " ";

cc.Class({
    extends: cc.Component,

    properties: {
        optionPrefab: cc.Prefab,
        phraseLabel: cc.Label,
        optionPanel: cc.Node,
        npcSprite:cc.Sprite,
        nameLabel:cc.Label,
        bgSprite:cc.Sprite,
        nextdialogbtn:cc.Button
    },

    // use this for initialization
    onLoad: function () {
        var userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
        var Thisweek = JSON.parse(cc.sys.localStorage.getItem('thisweek'));
        this.nextdialogbtn.node.active = false;
        weekdayi = 0;
        var self = this;
        cc.resources.load("dialogs/dialogs", function (error, asset) {
            if (error) {
                cc.log(error);
            }
            else {
                self.dialogs = asset.json;//dialogs是数组，里面存着对话对象
                self.dialog = DialogParser.parseDialog(self.dialogs[Thisweek.weekplan[weekdayi]]);//dialog是混合类，结构在DialogDate中，分为属性和方法
                // console.log("sequence "+self.sequence["Fine"]);
                console.log("self.dialog is ");
                console.log(self.dialog);
                self.dialog.start();
                //更换背景图
                self.changebg();
                
                self.stepDialog();
            }
        });
        
        
        this.node.on('touchend',this.stepDialog, this);
        
    },
    nextdialog(){
        weekdayi++;
        cc.log("weekdayi is");
        cc.log(weekdayi);
        if(weekdayi>8)//如果当前为本周最后一个事件
        {
            
            //切换场景
            // var label = this.nextdialogbtn.node.children[0].getComponent(cc.Label);
            // label.string = "结束本周";
            this.node.removeAllChildren();
            cc.director.preloadScene("行程安排0", function () {
                cc.log("行程安排0 preloaded");
            });
            cc.director.loadScene("行程安排0");
            return;
        }
        var Thisweek = JSON.parse(cc.sys.localStorage.getItem('thisweek'));
        this.dialog = DialogParser.parseDialog(this.dialogs[Thisweek.weekplan[weekdayi]]);//dialog是混合类，结构在DialogDate中，分为属性和方法
        // console.log("sequence "+self.sequence["Fine"]);
        console.log("this.dialog is ");
        console.log(this.dialog);
        this.dialog.start();
        //更换背景图
        this.changebg();
        
        this.stepDialog();  
        this.node.on('touchend',this.stepDialog, this);
    },
    changebg(){
                if (!this.dialog) return;
                var bgid = this.dialog.getbgid();
                var self = this;
                cc.resources.preload(bgMap[bgid].url,cc.SpriteFrame);
                cc.resources.load(bgMap[bgid].url,cc.SpriteFrame,function (err, texture){
                self.bgSprite.spriteFrame = texture;
            });
    },
    stepDialog() {
        this.nextdialogbtn.node.active = false;
        if (!this.dialog) return;
        this.optionPanel.active = false;
        var curr = this.dialog.next();
        if(weekdayi<7){
            this.nextdialogbtn.node.active = true;
        }
        if(weekdayi>8)//如果当前为本周最后一个事件
        {
            
            //切换场景
            this.node.on('touchend',function(){
            this.node.removeAllChildren();
            cc.director.preloadScene("行程安排0", function () {
                cc.log("Next scene 行程安排 preloaded");
            });
            cc.director.loadScene("行程安排0");
            }, this);
        }
        if(curr == -1)
        {
            this.nameLabel.string = "事件结果";
            this.npcSprite.node.active = false;
            this.phraseLabel.string = resultphrases;
            this.node.on('touchend',this.stepDialog, this);
            this.nextdialogbtn.node.active = true;
        }
        switch (curr.type) {
        case DialogData.Type.PHRASE:
            // var rolename = this.dialog.getRole(curr.role);
            var roleid = curr.roleid;
            var rolename = curr.rolename;
            this.setTextData(roleid,rolename);//人物编号



            this.phraseLabel.string = curr.phrase;
            break;
        case DialogData.Type.OPTION:
            this.node.off('touchend',this.stepDialog, this);
            this.optionPanel.removeAllChildren();
            this.optionPanel.active = true; 
            var options = curr.options;
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
                if(label.string != "")
                this.optionPanel.addChild(option);
                var self = this;
                button.node.on('click', function(button){
                    var label = button.node.children[0].getComponent(cc.Label);
                    var sequence = self.dialog.getSequence();
                    //读出点击的选项的对应sequence里面的nextindex
                    var goto = sequence[label.string].nextindex;
                    //更改相应的索引
                    self.dialog.optchosed(goto);
                    //相应属性变化
                    var results = sequence[label.string].results;
                    resultphrases = "结果：";
                    var flag = 1;
                    for(var i in results )
                    {
                        console.log("####"+i);
                        var userdata = JSON.parse(cc.sys.localStorage.getItem('userdata'));
                        userdata[i]+=results[i];
                        cc.sys.localStorage.setItem('userdata', JSON.stringify(userdata));
                        
                        if(results[i]!=0)
                        {
                            flag =0;
                            var pname;
                            switch(i){
                                case "study": pname = "学业";break;
                                case "reason": pname = "理智";break;
                                case "spirit": pname = "精力";break;
                                case "social": pname = "社交";break;
                                case "money": pname = "生活费";break;
                                default:
                                    break;
                            }
                            var aphrase =  pname + "变化为" + results[i] + ";";
                            resultphrases = resultphrases + aphrase;
                        }
                    }
                    if(flag)
                    resultphrases ="属性值无变化。";
                    //选项完成后销毁
                    this.optionPanel.removeAllChildren();
                    this.node.on('touchend',this.stepDialog, this);
                }, this)
            }
            
            break;
        default:
            break;
        }
    },
    setTextData(roleid,rolename){
        if(rolename=="null"||rolename=="NULL") this.nameLabel.string = "";
        else    this.nameLabel.string = rolename;
        var self = this;
        if (roleid === -1) {
			self.npcSprite.node.active = false;
        }
        else
        {
            self.npcSprite.node.active = true;
            cc.resources.load(roleMap[roleid].url,cc.SpriteFrame);
            cc.resources.load(roleMap[roleid].url,cc.SpriteFrame,function (err, texture){
            self.npcSprite.spriteFrame = texture;
            });
        }
    },
    start () {

    },
    // btnclk(button){
    //     console.log("~~"+label.string);
    // }
});
