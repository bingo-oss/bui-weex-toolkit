<template>
    <div>
        <bui-header
                :title="'横向滚动下方内容切换卡'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-tabbar-scroll :tabItems="tabItems"
                             selectedIndex="2"
                             top="117px" @tabItemOnClick="tabItemOnClick"></bui-tabbar-scroll>
    </div>

</template>

<style src="../../css/layout.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                lists: [],
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
                        src: '/tabbar-item3-demo.weex.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 4,
                        title: '通讯录',
                        icon: 'icon-book',
                        selected: false,
                        src: '/tabbar-item2-demo.weex.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 5,
                        title: '动态',
                        icon: 'icon-msg',
                        selected: false,
                        src: '/tabbar-item1-demo.weex.js',
                        visibility: 'hidden',
                    },
                ]
            }
        },
        components: {
            'bui-tabbar-scroll': require('../../components/bui-tabbar-scroll.vue')
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
        },
        created: function () {
            for (var i = 0; i < this.tabItems.length; i++) {
                var path = this.tabItems[i].src;
                this.tabItems[i].src = buiweex.getContextPath() + path;
            }
        }
    }
</script>
