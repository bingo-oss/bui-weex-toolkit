<template>
    <div @viewappear="onappear">
        <bui-header
                :title="'轮播'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content>
            <slider class="bui-slider" interval="1500" auto-play="true" offset-x-accuracy="0.1" @scroll="scrollHandler"
                    @change="changeHandler" infinite="false">
                <div class="bui-slider-pages" v-for="item in itemList">
                    <bui-image class="img" :src="item.pictureUrl"></bui-image>
                    <text class="bui-slider-title">{{item.title}}</text>
                </div>
                <indicator class="bui-slider-indicator"></indicator>
            </slider>
        </bui-content>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/example.css"></style>
<style src="../../css/slider.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                scrollHnadlerCallCount: 0,
                itemList: [
                    {
                        itemId: '520421163634',
                        title: '图1',
                        pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'
                    },
                    {
                        itemId: '522076777462',
                        title: '图2',
                        pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
                    },
                    {
                        itemId: '522076777462',
                        title: '图3',
                        pictureUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
                    },
                    {
                        itemId: '522076777467',
                        title: '图4',
                        pictureUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491837948&di=3dcecd1b1d709196873a91f9fd585962&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160304%2Fmp61863731_1457078539188_3.gif'
                    }
                ]
            }
        },
        components: {},
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "scrollHandler": function (e) {
                this.scrollHnadlerCallCount = this.scrollHnadlerCallCount + 1;
                this.topbarStyle = -e.offsetXRatio * 750
            },
            "changeHandler": function (e) {
                this.scrollHnadlerCallCount = 0;
            }
        }
    }
</script>
<style>

</style>