<template>
    <div>
        <bui-header
                title="头部"
                :leftItem="leftItem"
                :rightItem="rightItem"
                @leftClick="back"
                @rightClick="rightclick"
                @centerClick="centerclick">
        </bui-header>

        <bui-content>
            <div>
                <text class="ex-title">居中对齐</text>
                <bui-header :title="'开发者中心'"
                            :ios=false
                            :leftItem="leftItem"
                            :rightItem="rightMenu"></bui-header>

                <text class="ex-title">左边对齐</text>
                <bui-header :ios=false
                            :leftItem="leftMenu"
                            :rightItem="rightMenu">
                    <bui-icon slot="right" :name="'icon-search'" size="45px" color="#ffffff" class="pdl10"></bui-icon>
                </bui-header>

                <text class="ex-title">换个颜色</text>
                <bui-header :ios=false
                            :backgroundColor="'#00c277'"
                            :leftItem="leftMenu"
                            :rightItem="rightMenu">
                    <bui-icon slot="right" :name="'icon-search'" size="45px" color="#ffffff" class="pdl10"></bui-icon>
                </bui-header>

                <text class="ex-title">换个高度与颜色</text>
                <bui-header :ios=false
                            :title="'软件设置'"
                            :backgroundColor="'#ff4e24'"
                            :height="'80px'"
                            :leftItem="leftItem">
                    <bui-icon slot="right" :name="'icon-search'" size="45px" color="#ffffff" class="pdl10"></bui-icon>
                </bui-header>
            </div>
        </bui-content>
    </div>

</template>


<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                rightItem: {
                    text: '更多'
                },
                rightMenu: {
                    icons: 'icon-menu'
                },
                leftMenu: {
                    icons: 'icon-back',
                    text: '新闻中心'
                }
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
                buiweex.toast('left')
            },
            "rightclick": function () {
                buiweex.toast('right')
            },
            "centerclick": function () {
                buiweex.toast('center')
            }
        },
        created: function () {
            var domModule = weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily': 'iconfont',
                'src': "url(\'https://at.alicdn.com/t/font_5kli64cf6n9g4x6r.ttf\')"
            });
        }
    }
</script>
<style>
    .pdl10{
        padding-left: 10px;
    }
    .pdr10{
        padding-right: 10px;
    }
</style>