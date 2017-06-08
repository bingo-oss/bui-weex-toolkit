<template>
    <div>
        <bui-header
                :title="'日期picker'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content>
            <div class="bui-panel">
                <div class="bui-panel-main">
                    <div class="flex-column bui-form">
                        <div class="flex-column bui-form-box">
                            <text class="bui-form-title">选择时间</text>
                            <div class="flex-row bui-form-group bui-form-group-center" @click="pickDate">
                                <text class="form-label">日期</text>
                                <div class="flex-row column-center-top form-right">
                                    <text class="select-text">{{date == '' ? '请选择日期' : date}}</text>
                                </div>
                            </div>
                            <div class="flex-row bui-form-group bui-form-group-center" @click="pickTime">
                                <text class="form-label">时间</text>
                                <div class="flex-row column-center-top form-right">
                                    <text class="select-text">{{time == '' ? '请选择时间' : time}}</text>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </bui-content>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>
<style src="../../css/form.css"></style>
<script>
    var picker = weex.requireModule('picker');
    var buiweex = require("../../js/buiweex.js");

    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                date: '',
                time: ''
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "pickDate": function () {
                var _this = this;
                picker.pickDate({
                    value: _this.date
                }, function (event) {
                    if (event.result == 'success') {
                        console.log("pickdate");
                        console.log(event.data);
                        _this.date = event.data;
                    }
                });
            },
            "pickTime": function () {
                var _this = this;
                picker.pickTime({
                    value: _this.time
                }, function (event) {
                    if (event.result === 'success') {
                        console.log("picktime");
                        console.log(event.data);
                        _this.time = event.data;
                    }
                })
            }
        }
    }
</script>
