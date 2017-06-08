<template>
    <div @viewappear="onappear">
        <bui-header
                :title="'视频播放'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content class="span1">
            <video class="bui-video"
                   :src="src"
                   autoplay controls
                   play-status="play"
                   @start="onstart($event)"
                   @pause="onpause($event)"
                   @finish="onfinish($event)"
                   @fail="onfail($event)"></video>
            <text class="info">state: {{state}}。目前官方video组件能力较弱，不推荐使用</text>
        </bui-content>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>
<style src="../../css/video.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                state: '---',
                src: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
            }
        },
        components: {},

        methods: {
            "back": function () {
                buiweex.pop();
            },
            "onstart": function () {
                console.log(this.stateall);
                this.stateall = '55555';
                console.log(this.stateall);
            },
            "onpause": function (event) {
                console.log(event);
                console.log(this.state);
                this.state = 'onpause';
                console.log(this.state);
            },
            "onfinish": function (event) {
                this.state = 'onfinish'
            },
            "onfail": function (event) {
                this.state = 'onfinish'
            }
        }
    }
</script>