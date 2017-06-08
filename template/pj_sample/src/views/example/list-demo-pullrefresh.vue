<template>
    <div>
        <bui-header
                :title="'下拉刷新&加载更多'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content class="span1">
            <!--列表组件-->
            <list class="bui-list p-r" @loadmore="onLoadmore($event)" loadmoreoffset="2">
                <!--刷新组件-->
                <refresh class="bui-refresh" @refresh="onRefresh" @pullingdown="onPullingdown($event)"
                         :display="refreshing ? 'show' : 'hide'">
                    <bui-icon :name="refreshIcon" size="40px" style="margin-right: 5px;"></bui-icon>
                    <text class="bui-refresh-indicator">{{refreshText}}</text>
                </refresh>

                <cell class="bui-cell-xlarge" v-for="item in messageList">
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
                <!--上拉组件-->
                <!--<cell class="bui-loading" v-if="showLoading">-->
                <!--<text class="bui-loading-indicator">{{loadingText}}</text>-->
                <!--</cell>-->
                <loading class="bui-loading" @loading="onLoading" :display="showLoading ? 'show' : 'hide'">
                    <text class="bui-loading-indicator">{{loadingText}}</text>
                </loading>
            </list>
        </bui-content>
    </div>

</template>
<style src="../../css/layout.css"></style>
<style src="../../css/list.css"></style>
<style src="../../css/refresh.css"></style>
<style src="../../css/loading.css"></style>
<style src="../../css/example.css"></style>
<script>
    var iconDev = "/image/icon_dev.png";
    var iconChat = "/image/icon_chat.png";
    var iconKefu = "/image/icon_kefu.png";
    var iconJifen = "/image/icon_jifen.png";
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                refreshing: false,
                showLoading: false,
                refreshIcon: "icon-todown",
                refreshText: "下拉刷新...",
                loadingText: "正在加载更多数据...",
                messageList: [
                    {'l-icon': iconKefu, 'title': '在线客服', 'subtitle': '亲,使用过程中有任何问题可以联系我！'},
                    {'l-icon': iconChat, 'title': 'SherryLee', 'subtitle': '请问，我们现在有北京国药的项目吗？'},
                    {'l-icon': iconChat, 'title': 'SherryLee', 'subtitle': '请问，我们现在有北京国药的项目吗？'},
                    {'l-icon': iconJifen, 'title': '积分商城', 'subtitle': '品高币积分变动提醒'},
                    {'l-icon': iconChat, 'title': '吐槽群', 'subtitle': '赵文卓：明天下午吧，上午有个面试!'},
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
            },
            //refresh下拉放手后的文字与图标
            "onRefresh": function (e) {
                this.refreshing = true;
                //下面代码是模拟异步请求效果
                setTimeout(() => {
                    this.refreshIcon = "icon-checkbox-on";
                    this.refreshText = "刷新成功";

                    setTimeout(() => {
                        this.refreshing = false;
                    }, 300);

                }, 500);
            },
            //refresh下拉放手前的文字与图标
            "onPullingdown": function (e) {
                //默认refresh文字与图标
                this.refreshIcon = "icon-todown";
                this.refreshText = "下拉可以刷新...";
                //下拉一定距离时文字与图标
                if (Math.abs(e.pullingDistance) > 60) {
                    console.log("松开即可刷新");
                    this.refreshIcon = "icon-toup";
                    this.refreshText = "松开即可刷新...";
                }
            },
            //list滚动到底部触发事件
            "onLoadmore": function (e) {
                buiweex.toast("onloadmore");
                this.showLoading = true;
                setTimeout(() => {
                    this.showLoading = false;
                }, 2000);
            },
            "onLoading": function (e) {
                buiweex.toast("loading");
                this.showLoading = true;
                setTimeout(() => {
                    this.showLoading = false;
                }, 2000);
            }
        }
    }
</script>