<template>
    <div>
        <bui-header
                :title="'scroller'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content>
            <scroller class="scroller" @loadmore="fetch" loadmoreoffset="10">
                <div class="bui-cell" v-for="(name, index) in rows" :ref="'item'+index">
                    <div class="bui-list-main">
                        <text class="bui-list-title" :ref="'text'+index">{{name}}</text>
                    </div>
                </div>
            </scroller>
            <div class="group">
                <bui-button @click="goto10" value="Go to 10"></bui-button>
                <bui-button @click="goto20" value="Go to 20"></bui-button>
            </div>
        </bui-content>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>
<style src="../../css/list.css"></style>
<script>
    var dom = weex.requireModule('dom');
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                rows: [],
                loadmoreCount: 10,
                lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
            },
            goto10: function (count) {
                const el = this.$refs.item10[0]
                dom.scrollToElement(el, {})
            },
            goto20: function (count) {
                const el = this.$refs.item20[0]
                dom.scrollToElement(el, {offset: 0})
            },
            fetch: function () {
                buiweex.toast('loadmore')
                setTimeout(() => {
                    var length = this.rows.length;
                    for (var i = length; i < length + this.loadmoreCount; ++i) {
                        this.rows.push('row ' + (i + 1));
                    }
                }, 800)
            }

        },
        created: function () {
            for (let i = 0; i < 30; i++) {
                this.rows.push('row ' + i)
            }
        }
    }
</script>

<style>
    .scroller {
        height: 800px;
    }

    .group {
        flex-direction: row;
        justify-content: center;
        margin-top: 60px;
    }

</style>
