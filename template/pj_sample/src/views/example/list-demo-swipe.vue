<template>
    <div @viewappear="onappear">

        <bui-header
                :title="'滑动操作列表'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content class="span1">
            <list class="bui-list">
                <cell class="bui-cell" v-for="(item,index) in listData" v-on:swipe="onSwpie($event,item)"
                      @click="jumpTo(item,index)">
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.text}}</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                    <div class="bui-list-action" v-if="item.showAction">
                        <bui-button type="danger" @click="remove(item,index)" value="删除"></bui-button>
                        <bui-button type="warning" @click="send(item,index)" value="转发"></bui-button>
                    </div>
                </cell>
            </list>
        </bui-content>
    </div>

</template>
<style src="../../css/layout.css"></style>
<style src="../../css/list.css"></style>
<style src="../../css/example.css"></style>
<script>
    var buiweex=require("../../js/buiweex.js");
    export default {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                listData: [
                    {'text': '开发者头条', 'url': '', showAction: false, selected: false},
                    {'text': '腾讯新闻', 'url': '', showAction: false, selected: false},
                    {'text': '搜狐娱乐', 'url': '', showAction: false, selected: false},
                    {'text': '优酷视频', 'url': '', showAction: false, selected: false}
                ]
            }
        },
        components: {},

        methods: {
            "back": function () {
                buiweex.pop();
            },
            "onSwpie": function (event, item) {
                var direction = event.direction;
                if (direction == "left") {
                    buiweex.toast("swpie event");
                    if (item.showAction) {
                        item.showAction = false;
                    } else {
                        item.showAction = true;
                    }
                } else {
                    item.showAction = false;
                }
            },
            "jumpTo": function (item, index) {
                if (item.showAction) {
                    this.listData[index].showAction = false;
                    return;
                }
                if (item.url) {
                    this.push(buiweex.getContextPath() + "/" + item.url)
                }
            },
            "remove": function (item, index) {
                buiweex.toast("删除事件");
                this.listData[index].showAction = false;
            },
            "send": function (item, index) {
                buiweex.toast("转发事件");
                this.listData[index].showAction = false;
            },
            "onappear": function () {
                buiweex.toast("list-demo-swipe onappear");
            }
        }
    }
</script>
<style>
    .box {
        width: 250px;
        height: 250px;
        background-color: #DDD;
    }
</style>