<template>
    <div class="bui-slider-bar">
        <bui-mask v-if="showbar" @click="layoutClick"></bui-mask>
        <div class="bui-slider-bar-box" :class="['bui-'+type+'-slider-bar-box']" v-on:swipe="onSwipe($event)" ref="navbar">
            <!--<text class="bui-slider-title">{{type=='left' ? '左':'右'}}侧滑动栏题</text>-->
            <div class="bui-slider-content">
                <scroller>
                    <slot>
                    </slot>
                </scroller>
            </div>
        </div>
    </div>

</template>

<!--<style src="../css/layout.css"></style>-->
<style src="../css/slider-bar.css"></style>

<script>
    var animation = weex.requireModule('animation');
    module.exports = {
        props: {
            showbar: {
                type: Boolean
            },
            type: {
                type: String,
                default: 'left'
            }
        },
        components: {
            'bui-mask': require('./bui-mask.vue')
        },
        methods: {
            //动画操作
            animationFn : function (el, translate, timing, fn) {

//                animation.transition(el, {
//                    styles: {
//                        transform: translate,
//                        transformOrigin: 'center center'
//                    },
//                    duration: 200,
//                    timingFunction: timing,
//                    delay: 0
//                }, function () {
//                    console.log(5656);
//                    fn && fn();
//                });


                animation.transition(el, {
                    styles:{
                        transform: translate,
                        transformOrigin: 'center center'
                    },
                    duration: 300, //ms
                    timingFunction: timing,
                    delay: 0 //ms
                }, function () {
                    fn && fn();
                })
            },
            //打开左侧滑动栏
            "openSliderBar": function () {
                var navbar = this.$refs['navbar'];
                if(this.type == 'left'){
                    this.animationFn(navbar, 'translate(600px, 0)',  'ease-in');
                }else{
                    this.animationFn(navbar, 'translate(-600px, 0)',  'ease-in');
                }

            },
            //点击mask遮罩层
            "layoutClick": function () {
                var _this = this;
                var navbar = this.$refs['navbar'];
                _this.showbar = false;
                switch(this.type) {
                    case "left":
                        this.animationFn(navbar, 'translate(-600px, 0px)',  'ease-in', function () {
                            _this.$emit("closeSliderBar");
                        });
                        break;
                    case "right":
                        this.animationFn(navbar, 'translate(600px, 0px)',  'ease-in', function () {
                            _this.$emit("closeSliderBar");
                        });
                        break;
                    default:
                        console.log("6666");
                }
            },
            //手势
            "onSwipe": function (event) {
                console.log('onSwipe'+11111);
                switch(this.type){
                    case "left":
                        if(event.direction == 'left'){
                            this.layoutClick();
                        }
                        break;
                    case  "right":
                        if(event.direction == 'right'){
                            this.layoutClick();
                        }
                        break;
                    default:
                        console.log("手势无效");
                }
            }
        },
    }
</script>

<style>

</style>