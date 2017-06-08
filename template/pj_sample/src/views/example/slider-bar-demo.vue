<template>
    <div class="p-r span1">
        <bui-header
                :title="'滑动栏'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="bui-container">
            <div class="bui-panel">
                <div class="bui-panel-main">

                    <list class="bui-list" style="height:500px;">
                        <cell class="bui-cell-large" @click="openleft()">
                            <div class="bui-list-main">
                                <text class="bui-list-title" ref="sliderdom">左侧滑动栏</text>
                            </div>
                            <div class="bui-list-right">
                                <bui-icon name="icon-go"></bui-icon>
                            </div>
                        </cell>
                        <cell class="bui-cell-large" @click="openright()">
                            <div class="bui-list-main">
                                <text class="bui-list-title">右侧滑动栏</text>
                            </div>
                            <div class="bui-list-right">
                                <bui-icon name="icon-go"></bui-icon>
                            </div>
                        </cell>
                    </list>
                </div>
            </div>
        </div>
        <!--自定义left-slider-bar-->
        <bui-slider-bar
                v-on:closeSliderBar="closeSliderBarLeft"
                :type="'left'"
                :showbar="showBarLeft"
                v-if="showBarLeft"
                ref="leftSliderBar">
            <div class="userBox">
                <bui-image :src="'/image/pic.jpg'" radius="120px" class="icon-image-middle"></bui-image>
                <text class="userName">喵喵</text>
            </div>
            <list class="bui-list" style="height:500px;">
                <cell class="bui-cell-large" v-for="item in messageList">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </cell>
            </list>
        </bui-slider-bar>

        <bui-slider-bar
                v-on:closeSliderBar="closeSliderBarRight"
                :type="'right'"
                :showbar="showBarRight"
                v-if="showBarRight"
                ref="rightSliderBar"
        >
            <div class="userBox">
                <bui-image :src="'/image/pic.jpg'" radius="120px" class="icon-image-middle"></bui-image>
                <text class="userName">喵喵</text>
            </div>
            <list class="bui-list" style="height:500px;">
                <cell class="bui-cell-large" v-for="item in messageList">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </cell>
            </list>
        </bui-slider-bar>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/example.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/list.css"></style>

<script>
    var animation = weex.requireModule('animation');
    var buiweex=require("../../js/buiweex.js");
    export default {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                showBarLeft: false,
                showBarRight: false,
                messageList: [
                    {'l-icon': "icon-home", 'title': '在线客服', 'subtitle': '亲,使用过程中有任何问题可以联系我！'},
                    {'l-icon': "icon-user", 'title': 'SherryLee', 'subtitle': '请问，我们现在有北京国药的项目吗？'},
                    {'l-icon': "icon-msg", 'title': '积分商城', 'subtitle': '品高币积分变动提醒'},
                    {'l-icon': "icon-liwu", 'title': '播云客', 'subtitle': '五一特辑 | 劳动节无需劳动 | 优雅地吐槽你地工作还能领劳动节津贴'},
                ]
            }
        },
        components: {
            'bui-tip': require('../../components/bui-tip.vue'),
            'bui-panel':require('../../components/bui-panel.vue'),
            'bui-icon':require('../../components/bui-icon.vue'),
            'bui-image': require('../../components/bui-image.vue'),
            'bui-button': require('../../components/bui-button.vue'),
            'bui-slider-bar': require('../../components/bui-slider-bar.vue'),
        },

        methods: {

            "back": function () {
                buiweex.pop();
            },
            //打开左侧滑动栏
            "openleft": function () {
                var _this = this;
                this.showBarLeft = true;
                setTimeout(function () {
                    _this.$refs['leftSliderBar'].openSliderBar();
                }, 1);
            },
            //打开右侧滑动栏
            "openright": function () {
                var _this = this;
                this.showBarRight = true;
                setTimeout(function () {
                    _this.$refs.rightSliderBar.openSliderBar();
                }, 1);
            },
            "closeSliderBarLeft": function () {
                this.showBarLeft = false;
            },
            "closeSliderBarRight": function () {
                this.showBarRight = false;
            }
        },
        created: function () {

        }
    }
</script>
<style>
    .userBox{
        align-items: center;
        margin-bottom: 80px;
    }
    .userName{
        font-size: 30px;
        line-height: 50px;
    }
    .icon-image-middle{
        width: 120px ;
        height: 120px ;
    }
</style>