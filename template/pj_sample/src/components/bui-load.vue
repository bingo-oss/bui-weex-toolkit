<template>
    <div class="load-layout">
        <bui-mask v-if="showmask" @click="layoutClick"></bui-mask>
        <div class="load-block">
            <bui-icon class="load-icon" name="icon-loadding"></bui-icon>
            <text class="load-text">{{message}}</text>
        </div>
    </div>
</template>

<script>
    var animation = weex.requireModule('animation');
    module.exports = {
        props: {
            showmask: {
                type: Boolean,
                default: true
            },
            message: {
                type: String,
                default: '努力加载中...'
            }
        },
        data: function () {
            return {}
        },
        components: {
            'bui-mask': require('./bui-mask.vue'),
        },
        methods: {
            //点击mask遮罩层
            "layoutClick": function () {
                var _this = this;
//                _this.showmask = false;
                _this.$emit("close");
            },
            "open": function () {

            }
        },
        created: function () {

        }
        
    }
</script>

<style src="../css/loading.css"></style>
