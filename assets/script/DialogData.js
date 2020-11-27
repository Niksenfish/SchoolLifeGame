var DialogData = function () {
	this.in = null;
	this.roles = [
		"天底下最好的舍友","天底下最好的舍友","刘丽君","庄梓萱","胡艺语","赵茜如","部门学姐","齐修"
	];
	this.bgs = [
		"主界面1","卧室1","图书馆1","图书馆2","宿舍1","操场1","操场2","教室1","教室2","教室3","教室4",'校医院1',"校道1","校道2","永嘉天地1","火锅1","福友阁1","福友阁2","青春广场1","食堂1"
	]
	this.phrases = [];
	this.sequence = null;
	this.current = 0;
	this.bgname = "";
};
var TYPE = DialogData.Type = cc.Enum({
	PHRASE: 0,
	OPTION: 1
})
cc.js.mixin(DialogData.prototype, {
	start: function () {
		console.log("current"+this.current);
		this.current = this.in;
		console.log("  in  "+this.in);
	},
	getbgid:function(){
		console.log("hhhhhhhhhhhhhhhhh");
		console.log(this.bgname);
		console.log(this.bgs.indexOf(this.bgname));
		return this.bgs.indexOf(this.bgname);
	},
	// getRole: function (id) {
	// 	return this.roles[id];
	// },
	getSequence(){
		// console.log("this.sequence"+this.sequence);
		return this.sequence;
	},

	appendPhrase: function (i,role, phrase,nextindex) {
		var roleid = this.roles.indexOf(role);
		// if (roleid === -1) {
		// 	roleid = this.roles.length;
		// 	this.roles.push(role);
		// }
		this.phrases.push({
			index:i,
			type: TYPE.PHRASE,
			roleid: roleid,
			rolename:role,
			phrase: phrase,
			nextindex:nextindex

		});
	},

	appendOption: function (options) {
		this.phrases.push({
			type: TYPE.OPTION,
			options: options
		})
	},

	next: function () {
		if(this.current<0)
		return -1;
		console.log("the dialog is in "+this.current);
		var phrase = this.phrases[this.current];
		this.current = phrase.nextindex;
		return phrase;
	},
	optchosed(goto){
		this.current = goto;
	}
	
});

module.exports = DialogData;