<template>
    <div>
        <bui-header
                title="字体图标icon-font"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content-scroll class="span1" padded="true">
            <div class="flex-fluid flex-row icon-content">
                <div class="icon-box" :style="{'width': '175px'}" v-for="(key,val) in iconData">
                    <bui-icon :name="val" size="45px" class="pdl10 mb20"></bui-icon>
                    <text class="icon-text">{{val}}</text>
                    <text class="icon-text">{{key}}</text>
                </div>

            </div>
        </bui-content-scroll>
    </div>
</template>

<style src="../../css/layout.css"></style>
<style src="../../css/example.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                iconData: {
                    "icon-search": "&#xe623;",
                    "icon-radio": "&#xe66f;",
                    "icon-radio-on": "&#xe641;",
                    "icon-checkbox-on": "&#xe653;",
                    "icon-menu": "&#xe603;",
                    "icon-back": "&#xe60c;",
                    "icon-go": "&#xe608;",
                    "icon-book": "&#xe6a6;",
                    "icon-msg": "&#xe60e;",
                    "icon-user": "&#xe647;",
                    "icon-home": "&#xe617;",
                    "icon-add": "&#xe606;",
                    "icon-success": "&#xe600;",
                    "icon-video": "&#xe615;",
                    "icon-lishijilu": "&#xe601;",
                    "icon-star": "&#xe6a1;",
                    "icon-delete-little": "&#xe610;",
                    "icon-loadding": "&#xe7fa;",
                    "icon-delete": "&#xe612;",
                    "icon-toup": "&#xe602",
                    "icon-todown": "&#xe64f",
                    "icon-liwu": "&#xe685",
                    "icon-jiantou": "&#xe646",
                    "icon-hongqi": "&#xec71",
                    "icon-filter": "&#xe635",
                    "icon-erweima": "&#xe613",
                }
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
            }
        }
    }
</script>

<style>
    .icon-content{
        border-left-width: 1px;
        border-left-color: #d7dde4;
    }
    .icon-box{
        width: 160px;
        align-items: center;
        padding: 30px;
        padding-left: 5px;
        padding-right: 5px;
        border-width: 1px;
        border-color: #d7dde4;
        border-left-width: 0px;
        border-top-width: 0px;
    }
    .icon-text{
        font-size: 20px;
        text-align: center;
        color: #657180;
    }
    .mb20{
        margin-bottom: 20px;
    }
</style>