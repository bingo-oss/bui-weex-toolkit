<template>
    <text @click="_click($event)" class="iconfont" :style="{color: color, fontSize: size, 'font-family': 'iconfont' }" :ref="name">{{getFontName}}</text>
</template>

<script>
    //引入he模块，使用它解决weex-template-compiler在编译阶段进行decode
    var he = require("he");
    module.exports = {
        created: function () {
            //此url可以是指向本地字体图标文件路径 也可以直接用阿里巴巴字体图标库的的字体图标地址 ,比如'https://at.alicdn.com/t/font_3ppcziztn5wpcik9.ttf'
            var bundleUrl = weex.config.bundleUrl;
            var url = bundleUrl.split('/').slice(0, -1).join('/');
            url += '/font/iconfonts.ttf';

            var domModule = weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily': 'iconfont',
                'src': "url('"+url+"')"
            });
        },
        data: function () {
            return {
                //weex字体图标目前只支持unicode格式
                iconItems:{
                    "icon-search": "&#xe623;",
                    "icon-radio": "&#xe66f;",
                    "icon-radio-on": "&#xe641;",
                    "icon-checkbox-on": "&#xe653;",
                    "icon-menu": "&#xe603;",
                    "icon-back": "&#xe60c;",
                    "icon-go": "&#xe608;",
                    "icon-book": "&#xe6a6;",
                    "icon-msg": "&#xe60e;",
                    "icon-user": "&#xe647;",
                    "icon-home": "&#xe617;",
                    "icon-add": "&#xe606;",
                    "icon-success": "&#xe600;",
                    "icon-video": "&#xe615;",
                    "icon-lishijilu": "&#xe601;",
                    "icon-star": "&#xe6a1;",
                    "icon-delete-little": "&#xe610;",
                    "icon-loadding": "&#xe7fa;",
                    "icon-delete": "&#xe612;",
                    "icon-toup": "&#xe602",
                    "icon-todown": "&#xe64f",
                    "icon-liwu": "&#xe685",
                    "icon-jiantou": "&#xe646",
                    "icon-hongqi": "&#xec71",
                    "icon-filter": "&#xe635",
                    "icon-erweima": "&#xe613",
                }
            }
        },
        props: {
            name: {
                type: String
            },
            color: {
                type: String,
                default: '#9ea7b4'
            },
            size: {
                type: String,
                default: '40px'
            }
        },
        computed:{
            //匹配对应的字体图标的unicode
            getFontName: function() {
                return he.decode(this.iconItems[this.name]);
            }
        },
        methods: {
            "_click": function ($event) {
                this.$emit("click", $event);
            }
        }
    }
</script>
