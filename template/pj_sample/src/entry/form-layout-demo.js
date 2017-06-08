import FormlayoutDemo from '../views/example/form-layout-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
FormlayoutDemo.el="#root";
new Vue(FormlayoutDemo);

