<template>
    <div @viewappear="onappear">
        <bui-header
                :title="'面板'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content-scroll class="span1" padded="true">
            <div style="padding: 10px;">
                <bui-panel title="Default Panel" border="1">
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                </bui-panel>
                <bui-panel title="Primary Panel" type="primary" border="1">
                    <text>Primary Panel</text>
                </bui-panel>
                <bui-panel title="Success Panel" type="success" border="1">
                    <text>Success Panel</text>
                </bui-panel>
                <bui-panel title="Info Panel" type="info" border="1">
                    <text>Info Panel</text>
                </bui-panel>
                <bui-panel title="Warning Panel" type="warning" border="1">
                    <text>Warning Panel</text>
                </bui-panel>
                <bui-panel title="Danger Panel" type="danger" border="1">
                    <text>Danger Panel</text>
                </bui-panel>
            </div>
        </bui-content-scroll>
    </div>

</template>

<style src="../../css/layout.css"></style>
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
            'bui-panel': require('../../components/bui-panel.vue')
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