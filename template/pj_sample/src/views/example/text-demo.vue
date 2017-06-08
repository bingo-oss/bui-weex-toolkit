<template>
    <div>
        <bui-header
                title="文本 h1 ~ h5"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content class="span1" padded="true">
            <text class="h1">h1...</text>
            <text class="h2">h2...</text>
            <text class="h3">h3...</text>
            <text class="h4">h4...</text>
            <text class="h5">h5...</text>
        </bui-content>
    </div>
</template>
<style src="../../css/layout.css"></style>
<style src="../../css/text.css"></style>
<style src="../../css/example.css"></style>

<script>

    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
            }
        }
    }
</script>