var DialogData = require('DialogData');

var DialogParser = (function () {
    var OPTION_SEP = '|';

    return {
        parseDialog: function (adialog) {//传入json，解析成复合类再导出
            var data = new DialogData();
            data.in = adialog.in;
            data.bgname = adialog.bg;
            console.log("adialog is ===");
            console.log(adialog);
            console.log("adialog.bg is ===");
            console.log(adialog.bg);
            var entries = adialog.entries;
            var sequence = adialog.sequence;
            var i, l;

            for (i in entries) {
                var entry = entries[i];
                var rolename = entry.rolename;
                var phrase = entry.content;
                var nextindex = entry.nextindex;
                if (!entry.type) {
                    data.appendPhrase(i,rolename,phrase,nextindex );
                    continue;
                }
                var options = entry.content.split(OPTION_SEP);
                if (options.length > 1) {
                    data.appendOption(options);
                    continue;
                }
            }
            data.sequence = sequence;
            return data;
        }
    }
})()

module.exports = DialogParser;