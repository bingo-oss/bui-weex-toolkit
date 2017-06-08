<template>
    <div :style="{ 'height': height,'padding': padded=='true'? padding:'0px' }">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: {
            height: {default: "0px"},
            padded: {default: false},
            padding: {default: "20px"}, //default 20px
        },
        methods: {}
    }
</script>