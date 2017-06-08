<template>
    <div class="p-r span1">
        <bui-header
                title="延迟加载"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content-scroll class="span1" padded="true">

            <bui-lazy-render time='1000'>
                <bui-panel title="延迟1s出来" type="primary" border="1">
                    <image style="width: 260px;height: 260px;"
                               src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
                </bui-panel>
            </bui-lazy-render>

            <bui-lazy-render time='3000'>
                <bui-panel title="延迟3s出来" type="primary" border="1">
                    <image style="width: 260px;height: 260px;"
                               src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
                </bui-panel>
            </bui-lazy-render>
        </bui-content-scroll>
    </div>

</template>

<style src="../../css/layout.css"></style>
<script>
    var buiweex = require("../../js/buiweex.js");
    export default {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
            }
        },
        components: {
            'bui-panel': require('../../components/bui-panel.vue'),
            'bui-lazy-render': require('../../components/bui-lazy-render.vue')
        },
        methods: {
            "back": function () {
                buiweex.pop();
            }
        }
    }
</script>
<style>

</style>