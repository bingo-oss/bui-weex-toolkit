<template>
    <div @viewappear="onappear">
        <div class="bui-header">

            <div class="bui-header-main">
                <text class="bui-header-title">CameraModule</text>
            </div>
            <div class="bui-header-left">
                <bui-icon @click="back()" name="icon-back" size="50px" color="#ffffff"></bui-icon>
            </div>
            <div class="bui-header-right">
                <text class="bui-header-text"></text>
            </div>
        </div>
        <scroller class="bui-container span1">
            <div style="padding: 10px;">

                <!-- <image v-for="i in images" :key="i.src" style="width:750px; height:750px;" :src="i.src"></image> -->
                <!-- <image style="width:750px; height:750px;" :src="imageSrc"></image> -->
                <api-demo :args="captureImageArgs" title="拍照" @submit="captureImage"></api-demo>
                <api-demo :args="selectImageArgs" title="选择图片" @submit="selectImage"></api-demo>
                <api-demo :args="cropImageArgs" title="裁剪" @submit="cropImage"></api-demo>
                <api-demo :args="compressImageArgs" title="压缩" @submit="compressImage"></api-demo>
            </div>
        </scroller>
    </div>

</template>

<style src="../../css/layout.css"></style>
<style src="../../css/header.css"></style>
<style src="../../css/example.css"></style>
<script>

    var camera = weex.requireModule("CameraModule");
    var buiweex = require("../../js/buiweex.js");
    var testImageUri = "http://d.lanrentuku.com/down/png/1705/yumminky-skycons-mix/yumminky-skycons-mix-06.png";
    var testImageUri2 = "http://d.lanrentuku.com/down/png/1705/yumminky-skycons-mix/yumminky-skycons-mix-09.png";
    export default {
        data: function(){
            return {
                captureImageArgs: {
                    cameraDirection: {
                        type: "enum",
                        values: ["back", "front"],
                        default: "back",
                    },
                    saveToPhotoAlbum: {
                        type: "bool",
                        default: true,
                    },
                    isCrop: {
                        type: "bool",
                        default: true,
                    },
                    quality: {
                        type: "number",
                        default: 0,
                    },
                    targetWidth: {
                        type: "number",
                    },
                    targetHeight: {
                        type: "number",
                    }
                },
                selectImageArgs: {
                    sourceType: {
                        type: "enum",
                        values: ["PHOTOLIBRARY", "PHOTOALBUM"],
                        default: "PHOTOALBUM",
                    },
                    maxSelect: {
                        type: "number",
                        default: 1
                    },
                    isCrop: {
                        type: "bool",
                        default: true,
                    },
                    quality: {
                        type: "number",
                        default: 50,
                    },
                    targetWidth: {
                        type: "number",
                        default: 100,
                    },
                    targetHeight: {
                        type: "number",
                        default: 100,
                    },

                },
                cropImageArgs: {
                    sourcePath: {
                        type: "text",
                    },
                    savePath: {
                        type: "text",
                    },
                    quality: {
                        type: "number",
                    }
                },
                compressImageArgs: {
                    sourcePath: {
                        type: "text",
                    },
                    savePath: {
                        type: "text",
                    },
                    quality: {
                        type: "number",
                    },
                    targetWidth: {
                        type: "number",
                        default: 100,
                    },
                    targetHeight: {
                        type: "number",
                        default: 100,
                    },
                },
            }
        },
        components: {
            'bui-panel': require('../../components/bui-panel.vue'),
            'bui-radio': require('../../components/bui-radio.vue'),
            'bui-switch': require('../../components/bui-switch.vue'),
            'api-demo': require('../../components/api-demo.vue'),
        },

        methods: {
            commonCallback: function(info) {
                buiweex.alert(info);
            },
            captureImage: function(arg) {
                arg.saveToPhotoAlbum = arg.saveToPhotoAlbum ? "true" : "false";
                arg.isCrop = arg.isCrop ? "true" : "false";
                camera.captureImage(arg, this.commonCallback, this.commonCallback);
            },

            selectImage: function(arg) {
                arg.isCrop = arg.isCrop ? "true" : "false";
                camera.selectImage(arg, this.commonCallback, this.commonCallback);
            },

            cropImage: function(arg) {
                arg.isCrop = arg.isCrop ? "true" : "false";
                camera.cropImage(arg, this.commonCallback, this.commonCallback);
            },

            compressImage: function(arg) {
                camera.compressImage(arg, this.commonCallback, this.commonCallback)
            },

            back: function () {
                this.pop();
            }
        }
    }
</script>
<style>

</style>