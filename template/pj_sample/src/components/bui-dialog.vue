<template>
    <div class="bui-dialog-layout">
        <div class="bui-dialog-mask" @click="_layoutClick">
        </div>
        <div class="bui-dialog">
            <div class="bui-dialog-title">
                <text class="dialog-title-text">{{title}}</text>
            </div>
            <div class="bui-dialog-content">
                <scroller>
                    <slot>
                    </slot>
                </scroller>
            </div>
            <div class="bui-dialog-footer">
                <text class="dialog-action-text" v-for="btn in getButtons" @click="_click(btn)">{{btn}}</text>
            </div>
        </div>
    </div>
</template>

<style src="../css/dialog.css"></style>
<script>
    module.exports = {
        props: {
            title: {default: "标题"},
            buttons: {
                default: "取消,确定"
            }
        },
        computed: {
            "getButtons": function () {
                return this.buttons.split(',');
            }
        },
        components: {},
        methods: {
            "_click": function (text) {
                this.$emit("onDialogCallback", text);
            },
            "_layoutClick": function () {
                this.$emit("onDialogCancel");
            }
        }
    }
</script>