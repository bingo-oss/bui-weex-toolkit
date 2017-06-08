<template>
    <div>
        <bui-header
                :title="'左右图标列表'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>
        <bui-content class="span1">
            <list class="bui-list">
                <cell class="bui-cell-large" v-for="item in messageList" v-on:swipe="onSwpie()">
                    <div class="bui-list-left">
                        <bui-image class="bui-list-thumb" radius="50px" v-bind:src="item['l-icon']"></bui-image>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                        <text class="bui-list-subtitle">{{item.subtitle}}</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
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
    var iconDev = "/image/icon_dev.png";
    var iconChat = "/image/icon_chat.png";
    var iconKefu = "/image/icon_kefu.png";
    var iconJifen = "/image/icon_jifen.png";

    var buiweex=require("../../js/buiweex.js");
    export default {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                messageList: [
                    {'l-icon': iconKefu, 'title': '在线客服', 'subtitle': '亲,使用过程中有任何问题可以联系我！'},
                    {'l-icon': iconChat, 'title': 'SherryLee', 'subtitle': '请问，我们现在有北京国药的项目吗？'},
                    {'l-icon': iconJifen, 'title': '积分商城', 'subtitle': '品高币积分变动提醒'},
                    {'l-icon': iconChat, 'title': '吐槽群', 'subtitle': '赵文卓：明天下午吧，上午有个面试!'},
                    {'l-icon': iconKefu, 'title': '播云客', 'subtitle': '五一特辑 | 劳动节无需劳动 | 优雅地吐槽你地工作还能领劳动节津贴'},
                    {'l-icon': iconDev, 'title': '下一代开发平台', 'subtitle': '冯大大：Weex要快速上'},
                    {'l-icon': iconKefu, 'title': '假勤', 'subtitle': '申请状态提醒[结束]'}
                ]
            }
        },
        components: {},
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "onSwpie": function () {
                buiweex.toast("swpie event");
            }
        }
    }
</script>
<style>

</style>