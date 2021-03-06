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
        playerSortButton: {
            default: null,
            type: cc.Button
        },
        audioSort: {
            default: null,
            type: cc.Node
        },
        promptBt: {
            default: null,
            type: cc.Button
        },
        promptBox: {
            default: null,
            type: cc.Node
        },

    },
    onLoad() {
        this.PlayerAutoSort();

    },

    PlayerAutoSort() {
        var carArray = []; //添加子节点到新数组
        var chi = cc.find('Canvas/car').children;
        for (let i = 0; i < chi.length; i++) {
            carArray.push(chi[i])
        }
        var carSpriteArr = []
        var chi = cc.find('Canvas/carSprite').children
        for (let i = 0; i < chi.length; i++) {
            carSpriteArr.push(chi[i])
        }


        var self = this;

        //取消动画提示弹窗(车辆跑圈中，禁止变换位置)
        this.promptBt.node.on(cc.Node.EventType.TOUCH_END, () => { this.promptBox.active = false; })

        //实行位置排序，如果车辆正在进行，禁止排序
        this.playerSortButton.node.on(cc.Node.EventType.TOUCH_START, function () {
            var existCar = []
            var continueJudge = false;
            carArray.forEach(function (v) {
                if (v.opacity === 100)
                    continueJudge = true
            })
            if (continueJudge) {
                console.log('动画进行中，禁止变更位置')
                self.promptBox.active = true;
                return;
            }

            self.audioSort.getComponent(cc.AudioSource).play();
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === true) { existCar.push(carArray[i]); }//获得存在的节点
                carArray[i].active = false;
            }
            existCar = existCar.sort((a, b) => {
                var aName = Number(a.getComponent(cc.Sprite).spriteFrame.name)
                var bName = Number(b.getComponent(cc.Sprite).spriteFrame.name)
                return bName - aName
            })
            for (let i = 0; i < existCar.length; i++) {//完成排序
                carArray[i].active = true
                var name = existCar[i].getComponent(cc.Sprite).spriteFrame.name
                cc.loader.loadRes(name, cc.SpriteFrame, function (err, res) {
                    carArray[i].getComponent(cc.Sprite).spriteFrame = res
                })
            }
        })


    },


    // update (dt) {},
});
