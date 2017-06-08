import PickerDemo from '../views/example/picker-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
PickerDemo.el="#root";
new Vue(PickerDemo);