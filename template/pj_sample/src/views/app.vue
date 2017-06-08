<template>
    <div class="flex-column">
        <!--标题栏-->
        <bui-header
                :ios=false
                :title="'BUI-Weex v0.1.0'"></bui-header>

        <!--内容区域-->
        <bui-content class="span1">
            <list class="bui-list">
                <cell class="bui-cell" v-for="item in data" @click="jumpTo(item.url)">
                    <div class="bui-list-left">
                        <bui-image class="bui-list-thumb" radius="40px" src="/image/applogo.png"></bui-image>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.name}}</text>
                        <text class="bui-list-subtitle">{{item.text}}</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
            </list>
        </bui-content>
    </div>
</template>

<style src="../css/layout.css"></style>
<style src="../css/list.css"></style>
<style src="../css/example.css"></style>

<script>
    var buiweex = require("../js/buiweex.js");

    module.exports = {
        data: function () {
            return {
                data: [
                    {name: "布局(Flexbox)", text: "", url: "flex-box-demo.weex.js"},
                    {name: "文本(h1 ~ h5)", text: "", url: "text-demo.weex.js"},
                    {name: "字体图标(bui-icon)", text: "", url: "icon-demo.weex.js"},
                    {name: "按钮(bui-button)", text: "", url: "button-demo.weex.js"},
                    {name: "头部(bui-header)", text: "", url: "header-demo.weex.js"},
                    {name: "列表(bui-list)", text: "", url: "list-demo.weex.js"},
                    {name: "面板(bui-panel)", text: "", url: "panel-demo.weex.js"},
                    {name: "选项卡(bui-tabbar)", text: "", url: "tabbar-list-demo.weex.js"},
                    {name: "提示(bui-tip)", text: "", url: "tip-demo.weex.js"},
                    {name: "图片(bui-image)", text: "", url: "image-demo.weex.js"},
                    {name: "表单元素", text: "搜索条,单选,多选,切换器,进度条", url: "form-base-demo.weex.js"},
                    {name: "表单布局", text: "", url: "form-layout-demo.weex.js"},
                    {name: "弹出层(Dialog)", text: "", url: "dialog-demo.weex.js"},
                    {name: "常用控件库", text: "Loading,Dialog,Mask,ActionSheet,DropDown", url: "ui-controls-demo.weex.js"},
                    {name: "左右侧滑动栏(bui-slider-bar)", text: "", url: "slider-bar-demo.weex.js"},
                    {name: "滚动组件(Scroller)", text: "", url: "scroller-demo.weex.js"},
                    {name: "滑动组件(Slider)", text: "", url: "slider-demo.weex.js"},
                    {name: "浏览器(web)", text: "", url: "webview-demo.weex.js"},
                    {name: "视频播放", text: "", url: "video-demo.weex.js"},
                    {name: "选择器(Picker)", text: "单选Picker,日期时间Picker", url: "picker-demo.weex.js"},
//                    {name: "摄像头(CameraModule)", text: "", url: "camera-demo.weex.js"},
                    {name: "单页面路由(vue-router)", text: "", url: "vue-router-demo.weex.js"},
                    {name: "延迟加载(lazy-render)", text: "内容延迟加载", url: "lazy-render-demo.weex.js"},
                ]
            }
        },
        methods: {
            jumpTo: function (file) {
                if (file) {
                    buiweex.push(buiweex.getContextPath() + "/" + file);
                }
            }
        }
    }
</script>
