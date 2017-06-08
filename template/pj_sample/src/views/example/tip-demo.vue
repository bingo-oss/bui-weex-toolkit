<template>
    <div>
        <bui-header
                :title="'提示'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>


        <bui-content padded="true">
            <div style="height: 1500px;">
                <bui-tip value="This is success tip."></bui-tip>
                <bui-tip type="info" value="This is info tip."></bui-tip>
                <bui-tip type="warning"  value="This is warning tip."></bui-tip>
                <bui-tip type="danger"  value="Apache Weex is an effort undergoing incubation at The Apache Software Foundation (ASF)"></bui-tip>
            </div>
        </bui-content>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>
<script>
    var buiweex=require("../../js/buiweex.js");
    export default {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
            }
        },
        components: {
            'bui-tip': require('../../components/bui-tip.vue')
        },

        methods: {
            "back": function () {
                buiweex.pop();
            }
        }
    }
</script>
<style>

</style>