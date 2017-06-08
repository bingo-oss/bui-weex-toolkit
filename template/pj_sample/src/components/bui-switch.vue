<template>
    <div :class="['flex-row', 'row-space-between', 'switchBox', disabled ? 'disabled':'']" @click="change()">
        <text class="label">{{title}}</text>
        <switch class="switchstyle" @change="onchange($event)" :checked="checked" :disabled="disabled"></switch>
    </div>
</template>
<style src="../css/buiweex.css"></style>
<style src="../css/radio.css"></style>

<script>
    module.exports = {
        props: {
            "title": {      //文本
                type: String
            },
            "checked": {    //默认值为 false，表明按钮是否开启 is on or not.
                type: Boolean,
                default: false
            },
            "disabled": {   //默认值为 false，表明是否激活按钮
                type: Boolean,
                default: false
            }

        },
        components: {},
        methods: {
            //整个switch-box点击触发开关
            "change": function () {
                if(this.disabled) return;
                this.checked = !this.checked;
                this.$emit("change", this.checked);
            },
            //switch触发开关
            "onchange": function (event) {
                this.checked = event.value;
                this.$emit("change", this.checked);
            }
        }
    }
</script>

<style>

</style>