<template>
    <div :class="['tip', 'tip-' + type]">
        <text :class="['tip-txt', 'tip-txt-' + type]">{{value}}</text>
    </div>
</template>

<style src="../css/tip.css"></style>
<script>
    module.exports = {
        props: {
            type: {default: 'success'},
            value: {default: ''}
        }
    }
</script>