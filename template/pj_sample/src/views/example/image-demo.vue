<template>
    <div>
        <bui-header
                :title="'图片'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>


        <scroller class="bui-container span1">
            <div style="height: 3000px">
                <div class="bui-panel">
                    <div class="bui-panel-header">
                        <text class="ex-title">加载远程图片</text>
                    </div>
                    <div class="bui-panel-main">
                        <bui-image style="width: 560px;height: 560px;" @load="onLoad()"
                                   src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>
                    </div>
                </div>
                <div class="bui-panel">
                    <div class="bui-panel-header">
                        <text class="ex-title">加载工程目录的图片(固定放在image目录下)</text>
                    </div>
                    <div class="bui-panel-main">
                        <bui-image src="/image/applogo.png" style="width: 300px;height: 300px"></bui-image>
                    </div>
                </div>

                <div class="bui-panel">
                    <div class="bui-panel-header">
                        <text class="ex-title">圆角图片(radius="30px")</text>
                    </div>
                    <div class="bui-panel-main">
                        <bui-image style="width: 560px;height: 560px;"
                                   radius="30px"
                                   src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>
                    </div>
                </div>

                <div class="bui-panel">
                    <div class="bui-panel-header">
                        <text class="ex-title">实现background-image的效果</text>
                    </div>
                    <div class="bui-panel-main">
                        <bui-image style="width:750px; height:750px;"
                                   src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>
                        <div class="title">
                            <text style="font-size:50px; color: #ff0000">Hello，Bui-Weex.</text>
                        </div>
                    </div>
                </div>

            </div>
        </scroller>
    </div>
</template>
<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
            }
        },
        components: {
        },
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "btnEvent": function (msg) {
               buiweex.toast();
            },
            "onLoad": function (e) {
                buiweex.toast("image load finished.");
            }
        }
    }
</script>

<style>
    .title {
        position: absolute;
        top: 50px;
        left: 10px;
    }
</style>