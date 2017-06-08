<template>
    <div >
        <bui-header
                :title="'单页面路由router'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="bui-container span1 flex-row">
            <div class="bui-router-left">
                <text v-for="(val, i) in items" @click="linkTo(val.name, i)" :class="[index==i ? 'bui-acitved':'', 'bui-router-text']">{{val.text}}</text>
            </div>
            <div class="span1">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>
<script>
    var buiweex=require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                items: [
                    {
                        text: '首页',
                        name: 'index'
                    },
                    {
                        text: '产品',
                        name: 'product'
                    },
                    {
                        text: '新闻',
                        name: 'news'
                    },
                ],
                index: 0
            }
        },

        methods: {
            "back": function () {
                buiweex.pop();
            },
            linkTo: function (name, index) {
                this.index = index;
                this.$router.push(name);  //路由跳转, 通过定义好的路由name
            },

        },
        watch:{
            '$route': function () {
                buiweex.toast('路由跳转到' + this.$route.path)
                console.log(this.$route)
//                console.log(11111);
//                console.log(this.$route);
            }
        }
    }
</script>
<style lang="sass">
    @import "../../css/common.scss";

    .bui-router-left{
        border-right-width: 1px;
        border-right-color: $color_border;
    }
    .bui-router-text{
        border-bottom-width: 1px;
        border-bottom-color: $color_border;
        padding: $nb35;
        font-size: $nb32;
        color: $color_title;
    }
    .bui-acitved{
        background-color: $color_default_active;
    }
</style>