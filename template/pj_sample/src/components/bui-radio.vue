<template>
    <div :class="[flexDirection]">
        <div class="radioBox flex-row" :class="[v.disabled ? 'disabled':'']" v-for="v in radioItems" @click="select(v)">
            <div><bui-icon @click="select(v)" v-if="v.select" name="icon-radio-on" color="#00cc66"></bui-icon></div>
            <div><bui-icon @click="select(v)" v-if="!v.select" name="icon-radio" color="#9ea7b4"></bui-icon></div>
            <!--<div><bui-icon :name="v.select ? 'icon-radio-on' : 'icon-radio'" :color="v.select ? '#00cc66':'#9ea7b4'"></bui-icon></div>-->
            <text :class="['label']">{{v.title}}</text>
        </div>
    </div>


</template>
<style src="../css/layout.css"></style>
<style src="../css/radio.css"></style>

<script>
    module.exports = {
        props: {
            "flexDirection": {
                type: String,
                default: 'flex-row'
            },
            "radioItems": {
                type: Object
            },
            "type": {
                default: 'default'
            }

        },
        data: function () {
            return {
                selectFE: false
            }
        },
        methods: {
            //选择
            "select": function (v) {
//                console.log(v);
                if(v.disabled) return;
                var self = this;
                self.radioItems.forEach(function (val, index) {
//                    Vue.set(val, 'select', false);
                    // TODO: 不应该在子组件内部改变 props
                    val.select = false;
                });
                v.select = true;

                this.$emit("change", v);
            }
        }
    }
</script>

<style>

</style>