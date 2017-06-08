<template>
    <div>
        <bui-header
                :title="'按钮'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content-scroll class="span1" padded="true">
            <div style="height:1800px">
                <text class="ex-title">颜色配置</text>
                <bui-button class="ex-btn"></bui-button>
                <bui-button class="ex-btn" type="primary" value="Primary"></bui-button>
                <bui-button class="ex-btn" type="success" value="Success"></bui-button>
                <bui-button class="ex-btn" type="warning" value="Warning"></bui-button>
                <bui-button class="ex-btn" type="danger" value="Danger"></bui-button>
                <bui-button class="ex-btn" disabled="true" value="Disabled"></bui-button>

                <text class="ex-title">圆角配置</text>
                <bui-button class="ex-btn" radius="10px" type="primary" value="圆角矩形按钮(radius='10px')"></bui-button>

                <text class="ex-title">横向按钮排列</text>
                <div class="flex-row">
                    <bui-button class="ex-btn" type="danger" value="确认删除"></bui-button>
                    <bui-button class="ex-btn" type="success" value="确认提交"></bui-button>
                </div>

                <div class="flex-row">
                    <bui-button class="ex-btn" value="按钮1"></bui-button>
                    <bui-button class="ex-btn" value="按钮2"></bui-button>
                    <bui-button class="ex-btn" value="按钮3"></bui-button>
                    <bui-button class="ex-btn" value="按钮4"></bui-button>
                </div>

                <text class="ex-title">按钮事件</text>
                <bui-button class="ex-btn" radius="10px" @longpress="btnEvent('长按事件')" type="primary"
                            value="长按(@longpress)"></bui-button>
                <bui-button class="ex-btn" radius="10px" @click="btnEvent('点击事件')" type="primary"
                            value="点击(@click)"></bui-button>
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
                }
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "btnEvent": function (msg) {
                buiweex.toast(msg);
            }
        }
    }
</script>