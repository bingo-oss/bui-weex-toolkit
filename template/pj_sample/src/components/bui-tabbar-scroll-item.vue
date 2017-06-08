<template>
    <div class="bui-scroller-tabbar-row" @click="onclickitem">
        <text v-if="type!='icon'" :style="{ 'color': titleColor }" class="text">{{title}}</text>
        <text class="actived" v-if="selected"></text>
    </div>
</template>

<style src="../css/tabbar.css"></style>

<script>
    module.exports = {
        props: {
            index: {default: 0},
            title: {default: ''},
            titleColor: {default: '#000000'},
            titleSize: {default:'25'},
            icon: {default: ''},
            backgroundColor: {default: '#ffffff'},
            selected: {default: false},
            type:{default:'icon-text'} //text,icon-text,icon
        },
        methods: {
            onclickitem: function (e) {
                var params = {
                    index: this.index
                };
                this.$emit('tabItemOnClick', params);
            }
        }
    }
</script>
