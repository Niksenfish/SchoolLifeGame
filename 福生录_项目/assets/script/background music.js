// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    properties: {
        audio: {
            default: null,
            type: cc.AudioClip
        }
    },

    onLoad: function () {
        
    },

    // 音频播放
    play: function () {
        // if(!cc.audioEngine.isMusicPlaying())
        this.current = cc.audioEngine.play(this.audio, true, 1);
    },
    // 音频暂停播放
    pause: function () {
        cc.audioEngine.pauseAll();

    },
});