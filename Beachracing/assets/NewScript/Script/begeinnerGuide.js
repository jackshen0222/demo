// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        guideParent: {
            default: null,
            type: cc.Node,
        },
        buyCarBt: {
            default: null,
            type: cc.Button
        },
        retrieveNode: {
            default: null,
            type: cc.Node
        }



    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {
        this.BeginnerGuideStepOne();

    },

    BeginnerGuideStepOne() {
        this.guideParent.children[1].children[0].active = true
        this.guideParent.children[0].children[0].active = true

    },

    update(dt) {

        if (cc.find('Canvas/rookieGuide').active === true) {
            this.retrieveNode.active = false
            cc.find('Canvas/Button/buyMore').pauseSystemEvents(true)
            cc.find('Canvas/Button/acceleranceButton').pauseSystemEvents(true)
            cc.find('Canvas/Button/playerAutoSortButton').pauseSystemEvents(true)
            cc.director.getCollisionManager().enabled = false
            //买了两辆车
            if (cc.find('Canvas/car').children[1].active === true) {
                this.guideParent.children[0].children[0].active = false
                this.guideParent.children[1].children[0].active = false
                this.guideParent.children[0].children[1].active = true
                this.guideParent.children[1].children[1].active = true
                cc.find('Canvas/Run').active = false
                cc.director.getCollisionManager().enabled = true
                cc.find('Canvas/Button/buyBase').pauseSystemEvents(true)

            }
            //合成图片后
            if (cc.find('Canvas/car').children[0].getComponent(cc.Sprite).spriteFrame.name === '2') {
                this.guideParent.children[0].children[1].active = false
                this.guideParent.children[1].children[1].active = false
                this.guideParent.children[0].children[2].active = true
                this.guideParent.children[1].children[2].active = true
                cc.find('Canvas/Run').active = true
                cc.director.getCollisionManager().enabled = true
            }
            //播放动画后
            if (cc.find('Canvas/car').children[0].opacity === 100) {
                this.guideParent.children[0].children[2].active = false
                this.guideParent.children[1].children[2].active = false
                this.guideParent.children[0].children[3].active = true
                this.guideParent.children[1].children[3].active = true
            }

            //最后收回车辆
            if (cc.find('Canvas/car').children[0].opacity === 255 && this.guideParent.children[1].children[3].active === true) {
                cc.find('Canvas/rookieGuide').active = false

                this.retrieveNode.active = true
                cc.director.getCollisionManager().enabled = true
                cc.find('Canvas/Button/buyBase').resumeSystemEvents(true)
                cc.find('Canvas/Button/buyMore').resumeSystemEvents(true)
                cc.find('Canvas/Button/acceleranceButton').resumeSystemEvents(true)
                cc.find('Canvas/Button/playerAutoSortButton').resumeSystemEvents(true)

            }
        }
    },


});
