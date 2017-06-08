<template>
    <div @viewappear="onappear">
        <bui-header
                title="浏览器(web)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content class="span1">
            <div class="flex-row">
                <bui-button class="ex-btn" type="danger" value="goBack" @click="gobackFunc"></bui-button>
                <bui-button class="ex-btn" type="success" value="goForward" @click="goforwardFunc"></bui-button>
                <bui-button class="ex-btn" type="danger" value="reload" @click="reloadFunc"></bui-button>
            </div>
            <web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>
        </bui-content>
    </div>

</template>

<style src="../../css/layout.css"></style>
<script>
    var webview = weex.requireModule('webview');
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                url: 'https://www.baidu.com'
            }
        },
        components: {},
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "gobackFunc": function (event) {
                buiweex.toast('page url:' + this.url);
                webview.goBack(this.$refs.webview)
            },
            "goforwardFunc": function (event) {
                buiweex.toast('page url:' + this.url);
                this.toast('will go goforward');
                webview.goForward(this.$refs.webview)
            },
            "reloadFunc": function (event) {
                buiweex.toast('reload')
                webview.reload(this.$refs.webview);
            },
            "start": function (event) {
                buiweex.toast('pagestart')
            },
            "finish": function (event) {
                buiweex.toast('pagefinish')
            },
            "error": function (event) {
                buiweex.toast('error')
            }
        }
    }
</script>
<style>
    .webview {
        flex: 1;
        height: 750px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }
</style>