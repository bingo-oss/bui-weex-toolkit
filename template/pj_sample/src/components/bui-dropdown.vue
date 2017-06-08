<template>
    <div class="bui-dropdown">
        <bui-mask v-if="showmask" @click="layoutClick"></bui-mask>

        <div class="bui-dropdown-box" ref="dropdownBox" :style="{'left': left, 'top': top, 'width': widthDrop}">
            <div class="bui-dropdown-content">
                <slot>
                </slot>
            </div>
            <bui-icon name="icon-jiantou" color="#ffffff" class="bui-dropdown-jiantou" :style="{'left': sanjiaoLeft}"></bui-icon>
        </div>
    </div>

</template>

<script>
    var animation = weex.requireModule('animation');
    module.exports = {
        data: function () {
            return {
                widthDrop: "260px",
                left: "0px",
                top: "0px",
                sanjiaoLeft: "40px",
                position: {
                    width: '0px',
                    height: '0px',
                    left: '0px',
                    right: '0px'
                }
            }
        },
        props: {
            showmask: {
                type: Boolean,
                default: true
            },
            center: {
                type: Boolean,
                default: false
            },
            showArrow: {
                type: Boolean,
                default: false
            },
//            position: {
//                type: Object,
//                default: {
//                    width: '0px',
//                    height: '0px',
//                    left: '0px',
//                    right: '0px'
//                }
//            }
//            widthDrop: {
//                default: "260px"
//            },
//            left: {
//                default: "0px"
//            },
//            top: {
//                default: "0px"
//            },
//            sanjiaoLeft: {
//                default: "40px"
//            },

        },
        computed:{
        },
        components: {
            'bui-mask': require('./bui-mask.vue'),
        },
        methods: {
            //动画操作
            animationFn : function (el, opacity, translate, timing, fn) {
                animation.transition(el, {
                    styles:{
                        opacity: opacity,
                        transform: translate,
                        transformOrigin: 'center center'
                    },
                    duration: 200, //ms
                    timingFunction: timing,
                    delay: 0 //ms
                }, function () {
                    fn && fn();
                })
            },
            //打开上拉菜单
            "open": function (data) {
                var _this = this;
                var el = _this.$refs.dropdownBox;

                _this.position = data.position;
                console.log();
                //showArrow为false,宽度按触发元素宽度自适应,如果控制宽度可设置为true,默认宽度为400px,也可自传宽度
                if(!_this.showArrow){
                    if(_this.position.width >= 260) {
                        _this.widthDrop = _this.position.width;
                    }
                    if(_this.center){
                        _this.sanjiaoLeft = _this.position.x + _this.position.width/2-40;
                        _this.left = _this.position.x;
                    }else{
                        if((750 - _this.position.x) < 260){
                            _this.left = _this.position.x - (260 - (750 - _this.position.x))-20;
                            _this.sanjiaoLeft = 260 - 80;
                        }else{
                            _this.left = _this.position.x + "px";
                        }
                    }
                }else{
                    if(_this.center){
                        console.log(_this.position.x);
                        console.log(_this.widthDrop);

                        _this.sanjiaoLeft = _this.position.x + 260/2 -40;
                        _this.left = _this.position.x + _this.position.width/2 - 130;
                    }else{
                        if(_this.position.x == 0) {
                            _this.left = _this.position.x+20;
                        }
                        if((750 - _this.position.x) <= 260){
                            _this.left = _this.position.x - (260 - (750 - _this.position.x))-20;
                            _this.sanjiaoLeft = 260 - 80;
                        }
                    }

                }
                //top位置适配
                var env = weex.config.env.platform.toLowerCase();
                switch(env){
                    case "ios":
                        _this.top = _this.position.y-20;
                        break;
                    case "android":
                        _this.top = (_this.position.y-20)-152;
                        break;
                    case "web":
                        _this.top = _this.position.y-20;
                        break;
                    default:
                        console.log(env);
                }

                var translate = 'translate(0px, '+ parseInt(_this.position.height)+'px)';
                _this.animationFn(el, "1", translate,  'ease-in');

            },
            //点击mask遮罩层
            "layoutClick": function () {
                var _this = this;
                var el = this.$refs.dropdownBox;
                _this.showmask = false;

//                var translate = 'translate(0px, -'+parseInt(_this.position.height)+'px)';
                var translate = 'scale(0.9, 0.9)';
                _this.animationFn(el, "0", translate,  'ease-out', function () {
                    _this.$emit("close");
                });
            },

        }
    }
</script>

<style src="../css/dropdown.css"></style>
<style>
</style>