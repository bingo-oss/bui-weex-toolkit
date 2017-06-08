<template>
    <div>
        <!--标题栏-->
        <bui-header
                :title="currentTab"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <!--选项卡内容-->
        <bui-tabbar :tabItems="tabItems"
                    top="117px" @tabItemOnClick="tabItemOnClick"></bui-tabbar>
    </div>
</template>
<style src="../../css/layout.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    module.exports = {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                dir: 'examples',
                currentTab: "首页",
                tabItems: [
                    {
                        index: 0,
                        title: '首页',
                        icon: 'icon-home',
                        selected: false,
                        src: '/tabbar-item1-demo.weex.js',
                        visibility: 'visible',
                    },
                    {
                        index: 1,
                        title: '通讯录',
                        icon: 'icon-book',
                        selected: false,
                        src: '/tabbar-item2-demo.weex.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '动态',
                        icon: 'icon-msg',
                        selected: false,
                        src: '/tabbar-item3-demo.weex.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 3,
                        title: '我的',
                        icon: 'icon-user',
                        selected: false,
                        src: '/tabbar-item4-demo.weex.js',
                        visibility: 'hidden',
                    }
                ]
            }
        },
        components: {
            'bui-tabbar': require('../../components/bui-tabbar.vue')
        },
        created: function () {
            for (var i = 0; i < this.tabItems.length; i++) {
                var path = this.tabItems[i].src;
                this.tabItems[i].src = buiweex.getContextPath() + path;
            }

        },
        methods: {
            "back": function () {
                buiweex.pop();
            },
            tabItemOnClick: function (e) {
                buiweex.toast("tab" + e.index);
                //设置标题栏
                this.currentTab = this.tabItems[e.index].title;
            }
        }
    }
</script>
