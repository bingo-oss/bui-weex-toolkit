import TextDemo from '../views/example/text-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
TextDemo.el="#root";
new Vue(TextDemo);

