import IconDemo from '../views/example/icon-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
IconDemo.el="#root";
new Vue(IconDemo);

