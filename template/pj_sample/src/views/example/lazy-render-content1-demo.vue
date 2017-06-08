<template>
    <div ref="lazy-content" style="opacity: 0">
        <text>1212</text>
    </div>
</template>

<style src="../../css/layout.css"></style>
<style src="../../css/example.css"></style>
<style src="../../css/form.css"></style>

<script>
    var buiweex= require("../../js/buiweex.js");
    module.exports = {
        name:"lazy-render-content",
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
            }
        },
        components: {
            'bui-switch': require('../../components/bui-switch.vue'),
        },

        methods: {
        },
        mounted: function () {
            buiweex.show({
                id: this.$refs['lazy-content'],
                duration:1500
            });
        }
    }
</script>
