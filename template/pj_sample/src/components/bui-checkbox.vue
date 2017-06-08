<template>
    <div :class="[flexDirection]">
        <div class="radioBox flex-row" :class="[v.disabled ? 'disabled':'']" @click="select(v)" v-for="v in checkboxItems">
            <div><bui-icon @click="select(v)" v-if="v.select" name="icon-checkbox-on" color="#00cc66"></bui-icon></div>
            <div><bui-icon @click="select(v)" v-if="!v.select" name="icon-radio" color="#9ea7b4"></bui-icon></div>
            <!--<bui-icon :name="v.select ? 'icon-checkbox-on' : 'icon-radio'" :color="v.select ? '#00cc66':'#9ea7b4'"></bui-icon>-->
            <text :class="['label']">{{v.title}}</text>
        </div>
    </div>
</template>


<script>
    module.exports = {
        props: {
            "flexDirection": {
                type: String
            },
            "checkboxItems": {
                type: Object
            },
            "type": {
                default: 'default'
            },

        },
        data: function () {
            return {
                "selectItems" : []
            }
        },
        methods: {
            //选择
            "select": function (v) {
                console.log(v);
                var self = this;
                v.select = !v.select;

                //选择组数据
                var newAry = [];
                self.checkboxItems.forEach(function (val, i) {
                    if(val.select) newAry.push(val);
                });
                console.log(newAry);

                this.$emit("change", [v, newAry]);
            }
        },
        mounted: function () {
            console.log(11);
//            this.checkboxItems.forEach(function (val, i) {
//                if(val.select) this.selectItems.push(val);
//            });
        }
    }
</script>

<style src="../css/layout.css"></style>
<style src="../css/radio.css"></style>