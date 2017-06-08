<template>
    <div @viewappear="onappear">

        <bui-header
                :title="'表单布局'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <scroller class="bui-container span1 flex-column">
            <div style="height:2500px; padding-bottom:30px;">
                <bui-panel title="表单布局——左右" border="0"></bui-panel>
                <div class="flex-column bui-form">
                    <div class="flex-column bui-form-box">
                        <text class="bui-form-title">行驶证信息</text>
                        <div class="flex-row bui-form-group bui-form-group-center">
                            <text class="form-label">区域查询</text>
                            <input class="form-control height35 span1" placeholder="天河区" type="text"/>
                            <div class="form-right">
                                <bui-icon name="icon-go"></bui-icon>
                            </div>
                        </div>
                        <div class="flex-row bui-form-group bui-form-group-center">
                            <text class="form-label">秘密级别</text>
                            <!--<input class="form-control height35 span1" placeholder="天河区" type="text" />-->
                            <div class="flex-row column-center-top form-right">
                                <text class="select-text">完全公开</text>
                                <bui-icon name="icon-go"></bui-icon>
                            </div>
                        </div>
                        <div class="flex-row bui-form-group bui-form-group-center">
                            <text class="form-label">车身架号</text>
                            <input class="form-control height35 span1" placeholder="粤A669" type="text"/>
                            <text class="help-block">说明文本</text>
                        </div>
                        <div class="flex-row bui-form-group bui-form-group-center">
                            <text class="form-label">驾驶人员</text>
                            <input class="form-control height35 span1" placeholder="李悦青" type="text"/>
                        </div>
                        <div class="bui-form-group">
                            <bui-switch
                                    :title="'消息通知'"
                                    :checked=false
                                    :disabled=false
                                    @change="switchFn"
                            ></bui-switch>
                        </div>
                        <div class="flex-row bui-form-group bui-form-group-start">
                            <text class="form-label">文本多域</text>
                            <textarea class="form-control multi-input span1" rows=5  placeholder="输入字符"></textarea>
                        </div>
                    </div>
                </div>


                <bui-panel style="margin-top: 80px;" title="表单布局——上下" border="0"></bui-panel>
                <div class="flex-column bui-form">
                    <div class="flex-column bui-form-box">
                        <text class="bui-form-title">区域查询</text>
                        <div class="flex-row bui-form-group">
                            <text class="form-control height35 span1">天河区</text>
                            <div class="form-right">
                                <bui-icon name="icon-go"></bui-icon>
                            </div>
                        </div>
                    </div>
                    <div class="flex-column bui-form-box">
                        <text class="bui-form-title">车身架号</text>
                        <div class="flex-row bui-form-group">
                            <input class="form-control height35 span1" placeholder="粤A669" type="text"/>
                            <text class="help-block">说明文本</text>
                        </div>
                    </div>
                    <div class="flex-column bui-form-box">
                        <text class="bui-form-title">驾驶人员</text>
                        <div class="flex-row bui-form-group">
                            <input class="form-control height35 span1" placeholder="李悦青" type="text"/>
                        </div>
                    </div>
                </div>


                <bui-panel style="margin-top: 80px;" title="表单布局——简易版" border="0"></bui-panel>
                <div class="flex-column bui-form">
                    <div class="flex-column bui-form-box">
                        <!--<text class="bui-form-title">区域查询</text>-->
                        <div class="flex-row bui-form-group">
                            <text class="form-control height35 span1">区域查询</text>
                            <div class="form-right">
                                <bui-icon name="icon-go"></bui-icon>
                            </div>
                        </div>
                    </div>
                    <div class="flex-column bui-form-box">
                        <!--<text class="bui-form-title">车身架号</text>-->
                        <div class="flex-row bui-form-group">
                            <input class="form-control height35 span1" placeholder="车身架号" type="text"/>
                            <text class="help-block">说明文本</text>
                        </div>
                    </div>
                    <div class="flex-column bui-form-box">
                        <!--<text class="bui-form-title">驾驶人员</text>-->
                        <div class="flex-row bui-form-group">
                            <input class="form-control height35 span1" placeholder="驾驶人员" type="text"/>
                        </div>
                    </div>
                </div>

            </div>
        </scroller>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/example.css"></style>
<style src="../../css/form.css"></style>
<style src="../../css/header.css"></style>

<script>
    var buiweex=require("../../js/buiweex.js");
    module.exports = {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
            }
        },
        components: {
            'bui-panel': require('../../components/bui-panel.vue'),
            'bui-switch': require('../../components/bui-switch.vue'),
        },

        methods: {
            "back": function () {
                buiweex.pop();
            }
        }
    }
</script>
