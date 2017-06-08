<template>
    <div>
        <bui-header
                title="选项卡(bui-tabbar)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content class="span1">
            <list class="bui-list">
                <cell class="bui-cell" v-for="item in listData" @click="jumpTo(item)">
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.text}}</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
            </list>
        </bui-content>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/list.css"></style>
<style src="../../css/example.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                listData: [
                    {'text': '整屏上方内容切换卡', 'url': 'tabbar-demo.weex.js'},
                    {'text': '横向滚动下方内容切换卡', 'url': 'tabbar-scroll-demo.weex.js'},
                ]
            }
        },
        components: {},
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "jumpTo": function (item) {
                if (item.url) {
                    buiweex.push(buiweex.getContextPath() + "/" + item.url)
                }
            }
        }
    }
</script>