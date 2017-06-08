<template>
    <div @viewappear="onappear">
        <bui-header
                :title="'列表'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content class="span1">
            <list class="bui-list">
                <cell class="bui-cell" v-for="item in listData" @click="jumpTo(item)" @longpress="onLongpress">
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.text}}</text>
                    </div>
                    <div class="bui-list-right">
                        <text class="badges" v-if="item.badges!=0">{{item.badges >= 100 ? '99+' : item.badges}}</text>
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
            </list>
        </bui-content>
    </div>
</template>

<style src="../../css/layout.css"></style>
<style src="../../css/list.css"></style>
<style src="../../css/badges.css"></style>
<style src="../../css/example.css"></style>

<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                listData: [
                    {'text': '普通文本列表', 'url': '', badges: 0},
                    {'text': '左右图标列表', 'url': 'list-demo-icon.weex.js', badges: 999},
                    {'text': '下拉刷新&加载更多', url: 'list-demo-pullrefresh.weex.js', badges: 0},
//                    {'text': '滑动操作列表', url: 'list-demo-swipe.weex.js', badges: 0}
                ]
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "jumpTo": function (item) {
                if (item.url) {
                    buiweex.push(buiweex.getContextPath() + "/" + item.url)
                }
            },
            "onappear": function () {
                buiweex.toast("list-demo onappear");
            },
            "onLongpress": function () {
                buiweex.toast("list-demo longpress");
            }
        }
    }
</script>