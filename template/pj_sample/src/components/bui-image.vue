<template>
    <image v-bind:src="imagePath"
           v-bind:placeholder="placeholder"
           v-bind:style="{'border-radius':radius}"
           v-bind:resize="resize"
           @click="_click()"
           @load="_load()"></image>
</template>

<script>
    module.exports = {
        computed: {
            "imagePath": function () {
                if (this.src.indexOf("http") >= 0) {
                    return this.src;
                }
                //todo 兼容 src/image, /src/image , image/xxx, /image/xxx
                var bundleUrl = weex.config.bundleUrl;
                var url = bundleUrl.split('/').slice(0, -1).join('/');
                if (bundleUrl.indexOf("weex.html") > 0) {
                    url += "/dist/";
                }
                return url + this.src;
            }
        },
        props: {
            src: {
                type: String
            },
            resize: {
                type: String,
                default: "stretch"
            },
            placeholder: {
                type: String
            },
            radius: {
                default: "0px"
            }
        },
        methods: {
            "_click": function () {
                this.$emit('click');
            },
            "_load": function () {
                this.$emit('load');
            }
        }
    }
</script>
