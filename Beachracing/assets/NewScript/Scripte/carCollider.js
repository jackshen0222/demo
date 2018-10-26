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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // var ws = new WebSocket('http:localhost:3000')


    },

    start() {

    },

    // update (dt) {},

    onCollisionExit: function (other, self) {
        var carArr = []//图片等级
        var chi = cc.find("Canvas/carSprite").children
        for (let i = 0; i < chi.length; i++) {
            carArr.push(chi[i])
        }
        var array = [];//玩家车辆
        var chi = cc.find('Canvas/car').children;
        for (let i = 0; i < chi.length; i++) {
            array.push(chi[i])
        }

        //碰撞车辆图片 与 被碰撞车辆图片
        var otherSp = other.getComponent(cc.Sprite)
        var selfSp = self.getComponent(cc.Sprite)
        //碰撞其他车辆
        if (other.node.group === 'CarCollider' && self.node.group === 'CarCollider') {
            if (selfSp.spriteFrame === otherSp.spriteFrame) {//车辆合成
                for (let i = 0; i < carArr.length; i++) {
                    if (selfSp.spriteFrame === carArr[i].getComponent(cc.Sprite).spriteFrame) {
                        if (carArr[i] === carArr[9]) {//最高等级时不能合成
                            return;
                        }
                        otherSp.spriteFrame = carArr[i + 1].getComponent(cc.Sprite).spriteFrame;
                        carArr[i].active = true//当前等级图片显示,购买栏里黑色的图片
                        carArr[i + 1].active = true//下一等级图片显示
                    }
                }
                self.node.active = false;//被碰的隐藏,other-拖动的不隐藏
            }
        };
        if (other.node.group === 'CarCollider' && self.node.group === 'carPosition') {
            if (self.node.active === true) {
                console.log('node already active')
                return;
            }
            else{
                otherSp.spriteFrame=selfSp.spriteFrame

            }
        }
    },



});
