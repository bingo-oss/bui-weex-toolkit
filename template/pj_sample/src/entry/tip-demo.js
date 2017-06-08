import TipDemo from '../views/example/tip-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
TipDemo.el="#root";
new Vue(TipDemo);

