import SliderDemo from '../views/example/slider-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
SliderDemo.el="#root";
new Vue(SliderDemo);

