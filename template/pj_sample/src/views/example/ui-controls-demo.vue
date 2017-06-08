<template>
    <div class="p-r span1">
        <bui-header
                :title="'常用控件库'"
                :leftItem="leftItem"
                @leftClick="back"
                @centerClick="openDropdown4($event)">
        </bui-header>

        <bui-content class="span1" padded="true">
            <list class="bui-list" style="height:900px;">
                <cell class="bui-cell-large" @click="openActionsheet()">
                    <div class="bui-list-main">
                        <text class="bui-list-title">上拉菜单</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
                <cell class="bui-cell-large" @click="openDropdown($event)">
                    <div class="bui-list-main">
                        <text class="bui-list-title">自适应点击元素宽度下拉菜单</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
                <cell class="bui-cell-large" @click="openDropdown2($event)">
                    <div class="bui-list-main">
                        <text class="bui-list-title">默认下拉菜单</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
                <cell class="bui-cell-large">
                    <div class="bui-list-main">
                        <text class="bui-list-title">右边图标下拉菜单</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go" @click="openDropdown3($event)"></bui-icon>
                    </div>
                </cell>
                <cell class="bui-cell-large" @click="loadFn">
                    <div class="bui-list-main">
                        <text class="bui-list-title">加载中</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
            </list>
        </bui-content>

        <!--自定义上拉菜单-->
        <bui-actionsheet
                :actionsheetItems="actionsheetItems"
                :showmask="showBar"
                @close="closeActionsheet"
                @itemClick="actionsheetItemClick"
                @btnClick="actionsheetBtnClick"
                v-if="showBar"
                ref="actionsheet"
        ></bui-actionsheet>

        <bui-dropdown
                :showmask="showDropdown"
                @close="closeDropdown"
                v-if="showDropdown"
                ref="dropdown">
            <div class="bui-list">
                <div class="bui-cell" v-for="item in messageList">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </div>
            </div>
        </bui-dropdown>

        <bui-dropdown
                :showArrow=true
                :showmask="showDropdown2"
                @close="closeDropdown2"
                v-if="showDropdown2"
                ref="dropdown2">
            <div class="bui-list">
                <div class="bui-cell" v-for="item in messageList">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </div>
            </div>
        </bui-dropdown>

        <bui-dropdown
                :showArrow=true
                :showmask="showDropdown3"
                @close="closeDropdown3"
                v-if="showDropdown3"
                ref="dropdown3">
            <div class="bui-list">
                <div class="bui-cell" v-for="item in messageList">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </div>
            </div>
        </bui-dropdown>

        <bui-dropdown
                :showArrow=true
                :center=true
                :showmask="showDropdown4"
                @close="closeDropdown4"
                v-if="showDropdown4"
                ref="dropdown4">
            <div class="bui-list">
                <div class="bui-cell" v-for="item in messageList">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </div>
            </div>
        </bui-dropdown>

        <bui-load ref="loadDom" message="加载中..." :showmask="showLoading" v-if="showLoading" @close="closeLoading"></bui-load>

    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/example.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/list.css"></style>

<script>
    var buiweex=require("../../js/buiweex.js");
    export default {
        data: function(){
            return {
                url : 'https://m.alibaba.com',
                leftItem: {
                    icons: 'icon-back',
                },
                showBar: false,
                actionsheetItems: ['复制文字','收藏动态'],
                showDropdown: false,
                showDropdown2: false,
                showDropdown3: false,
                showDropdown4: false,
                showLoading: false,
                messageList: [
                    {'l-icon': "icon-home", 'title': '在线客服', 'subtitle': '亲,使用过程中有任何问题可以联系我！'},
                    {'l-icon': "icon-user", 'title': 'SherryLee', 'subtitle': '请问，我们现在有北京国药的项目吗？'},
                    {'l-icon': "icon-msg", 'title': '积分商城', 'subtitle': '品高币积分变动提醒'},
                    {'l-icon': "icon-liwu", 'title': '播云客', 'subtitle': '五一特辑 | 劳动节无需劳动 | 优雅地吐槽你地工作还能领劳动节津贴'},
                ]
            }
        },
        components: {
            'bui-actionsheet': require('../../components/bui-actionsheet.vue'),
            'bui-dropdown': require('../../components/bui-dropdown.vue'),
            'bui-load':require('../../components/bui-load.vue'),
        },

        methods: {

            "back": function () {
                buiweex.pop();
            },
            //打开上拉菜单
            "openActionsheet": function () {
                var _this = this;
                this.showBar = true;
                setTimeout(function () {
                    _this.$refs.actionsheet.open();
                }, 1);
            },
            "closeActionsheet": function () {
                console.log("666");
                this.showBar = false;
            },
            "actionsheetItemClick": function (item) {
                buiweex.toast(item)
                this.showBar = false;
            },
            "actionsheetBtnClick": function () {
                this.showBar = false;
            },

            "openDropdown": function (event) {
                var _this = this;
                _this.showDropdown = true;
                setTimeout(function () {
                    _this.$refs.dropdown.open(event);
                }, 1);
            },
            "openDropdown2": function (event) {
                var _this = this;
                _this.showDropdown2 = true;
                setTimeout(function () {
                    _this.$refs.dropdown2.open(event);
                }, 1);
            },
            "openDropdown3": function (event) {
                var _this = this;
                console.log(event);
                _this.showDropdown3 = true;
                setTimeout(function () {
                    _this.$refs.dropdown3.open(event);
                }, 1);
            },
            "openDropdown4": function (event) {
                var _this = this;
                console.log(event);
                _this.showDropdown4 = true;
                setTimeout(function () {
                    _this.$refs.dropdown4.open(event);
                }, 1);
            },
            "closeDropdown": function () {
                this.showDropdown = false;
            },
            "closeDropdown2": function () {
                this.showDropdown2 = false;
            },
            "closeDropdown3": function () {
                this.showDropdown3 = false;
            },
            "closeDropdown4": function () {
                this.showDropdown4 = false;
            },
            "loadFn": function () {
                var _this = this;
                this.showLoading = true;
                setTimeout(function () {
                    _this.$refs.loadDom.open();
                }, 1);
            },
            "closeLoading": function () {
                this.showLoading = false;
            }
        },
        created: function () {

        }
    }
</script>
<style>

</style>