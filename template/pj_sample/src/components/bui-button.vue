<template>
    <text :class="['btn', 'btn-' + (disabled?'disabled':type)]"
          :style="{'border-radius':radius}"
          @longpress="_longpress()"
          @click="_click()">{{value}}
    </text>
</template>
<style src="../css/button.css"></style>

<script>
    var radius = "0px";
    module.exports = {
        props: {
            "type": {default: 'default'},
            "value": {default: 'Button'},
            "disabled": {default: false},
            "radius": {default: radius}
        },
        methods: {
            "_click": function (e) {
                if (!this.disabled) {
                    this.$emit("click");
                }
            },
            "_longpress": function (e) {
                if (!this.disabled) {
                    this.$emit("longpress");
                }
            }
        }
    }
</script>

