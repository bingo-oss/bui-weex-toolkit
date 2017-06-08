import ButtonDemo from '../views/example/button-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
ButtonDemo.el="#root";
new Vue(ButtonDemo);

