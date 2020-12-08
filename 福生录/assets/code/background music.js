// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    properties: {
        audioSource: {
            type: cc.AudioSource,
            default: null
        },
    },
    // 音频播放
    play: function () {
        this.audioSource.play();
    },
    // 音频暂停播放
    pause: function () {
        this.audioSource.pause();
    },
});