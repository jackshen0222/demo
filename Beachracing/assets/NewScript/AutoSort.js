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
        }
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
        var self = this
        // this.playerSortButton.node.on(cc.Node.EventType.TOUCH_END, function () {

        //     var existCar = []
        //     var sortExistCar = []

        //     var continueJudge = false;
        //     carArray.forEach(function (v) {
        //         if (v.opacity === 100)
        //             continueJudge = true
        //     })
        //     if (continueJudge) {
        //         console.log('动画进行中，禁止变更位置')
        //         return;
        //     }

        //     for (let i = 0; i < carArray.length; i++) {
        //         if (carArray[i].active === true)
        //             existCar.push(carArray[i])//获得存在的节点
        //         carArray[i].active = false
        //     }

        //     existCar = existCar.sort((a,b)=>{
        //         var aName = Number(a.getComponent(cc.Sprite).spriteFrame.name)
        //         var bName = Number(b.getComponent(cc.Sprite).spriteFrame.name)
        //         return aName - bName;
        //     })
        //     //对已存在的节点进行排序
        //     //暂未实现
        //     // for (let i = 0; i < existCar.length - 1; i++) {
        //     //     for (let j = 0; j < existCar.length - 1 - i; j++) {
        //     //         if (existCar[j].getComponent(cc.Sprite).spriteFrame.name.toString() > existCar[j + 1].getComponent(cc.Sprite).spriteFrame.name.toString()) {
        //     //             let a = existCar[j];
        //     //             let b = existCar[j + 1];
        //     //             [a, b] = [b, a]
                        
        //     //         }
        //     //     }
        //     // }
        //     for (let i = 0; i < existCar.length; i++) {//实行排序
        //         if (carArray[i].active === false) {
        //             carArray[i].getComponent(cc.Sprite).spriteFrame = existCar[i].getComponent(cc.Sprite).spriteFrame
        //             carArray[i].active = true
        //         }
        //     }

        //     console.log(existCar)

        // })

    },


    // update (dt) {},
});
