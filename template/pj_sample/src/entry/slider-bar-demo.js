import SliderBarDemo from '../views/example/slider-bar-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
SliderBarDemo.el="#root";
new Vue(SliderBarDemo);

