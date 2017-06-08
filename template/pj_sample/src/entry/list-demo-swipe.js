import ListDemo from '../views/example/list-demo-swipe.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
ListDemo.el="#root";
new Vue(ListDemo);

