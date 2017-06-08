<template>
    <div @viewappear="onappear">
        <bui-header
                :title="'表单元素'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <scroller class="bui-container span1 flex-column">
            <div style="height:2500px; padding-bottom:30px;">
                <bui-panel title="搜索布局——图标在左边" border="1">
                    <bui-searchbar-left v-on:onSearch="onSearch"></bui-searchbar-left>
                </bui-panel>
                <bui-panel title="搜索布局——图标在中间" border="1">
                    <bui-searchbar-center></bui-searchbar-center>
                </bui-panel>
                <bui-panel title="单选按钮(bui-radio)——横向布局" border="1">
                    <bui-radio
                            :radioItems="radioItems"
                            :flexDirection="'flex-row'"
                            @change="radiohh"
                    ></bui-radio>
                </bui-panel>
                <bui-panel title="单选按钮(bui-radio)——纵向布局" border="1">
                    <bui-radio :radioItems="radioItems2" :flexDirection="'flex-column'"></bui-radio>
                </bui-panel>
                <bui-panel title="多选按钮(bui-checkbox)——横向布局" border="1">
                    <bui-checkbox :checkboxItems="checkboxItems" :flexDirection="'flex-row'"></bui-checkbox>
                </bui-panel>
                <bui-panel title="多选按钮(bui-checkbox)——纵向布局" border="1">
                    <bui-checkbox :checkboxItems="checkboxItems2" :flexDirection="'flex-column'"></bui-checkbox>
                </bui-panel>
                <bui-panel title="switch按钮" border="1">
                    <bui-switch
                            :title="'接收新消息通知'"
                            :checked=false
                            :disabled=false
                            @change="switchFn"
                    ></bui-switch>
                </bui-panel>
            </div>
        </scroller>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>

<script>
    var buiweex=require("../../js/buiweex.js");
    module.exports = {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                "radioItems": [
                    {
                        title: "男",         //文本
                        disabled: true,      //表明是否激活按钮, true为激活、false为不激活、默认值为false
                        select: true,         //表明是否是选中项, true为选中、false为不选中
                        value: "1"
                    },
                    {
                        title: "女",
                        select: false,
                        value: "0"
                    }
                ],
                "radioItems2": [
                    {
                        title: "设计部",
//                    disabled: false,
                        select: true,
                        value: "0"
                    },
                    {
                        title: "产品部",
                        disabled: true,
                        select: false,
                        value: "1"
                    },
                    {
                        title: "销售部",
//                    disabled: false,
                        select: false,
                        value: "2"
                    },
                    {
                        title: "行政部",
//                    disabled: false,
                        select: false,
                        value: "3"
                    }
                ],
                "checkboxItems": [
                    {
                        title: "设计部",
                        select: true,
                        value: "0"
                    },
                    {
                        title: "产品部",
                        select: false,
                        value: "0"
                    }
                ],
                "checkboxItems2": [
                    {
                        title: "设计部",
                        select: true,
                        value: "0"
                    },
                    {
                        title: "产品部",
                        select: false,
                        value: "0"
                    },
                    {
                        title: "销售部",
                        select: false,
                        value: "0"
                    },
                    {
                        title: "行政部",
                        select: false,
                        value: "0"
                    }
                ]
            }
        },
        components: {
            'bui-panel': require('../../components/bui-panel.vue'),
            'bui-radio': require('../../components/bui-radio.vue'),
            'bui-checkbox': require('../../components/bui-checkbox.vue'),
            'bui-switch': require('../../components/bui-switch.vue'),
            'bui-searchbar-left': require('../../components/bui-searchbar-left.vue'),
            'bui-searchbar-center': require('../../components/bui-searchbar-center.vue'),
        },

        methods: {
            "back": function () {
                buiweex.pop();
            },
            radiohh: function (yy) {
                console.log(yy);
            },
            "onSearch":function (value) {
                buiweex.toast("搜索事件"+value);
            }
        }
    }
</script>
<style>
</style>