import ScrollerDemo from '../views/example/scroller-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
ScrollerDemo.el="#root";
new Vue(ScrollerDemo);