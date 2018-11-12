// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var windows=require('Windows')
cc.Class({
    extends: cc.Component,

    properties: {
        a: {
            default: null,
            type: cc.Button,
        }

    },
    onLoad() {

        this.a.node.on(cc.Node.EventType.TOUCH_END, () => {
            for(let i=0;i<this.a.node.children.length;i++){
                this.a.node.children[i].active=false
            }
        })


    },

    start() {

    },

    update(dt) {
        
    },
});