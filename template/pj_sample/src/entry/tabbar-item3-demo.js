import TabbarDemo from '../views/example/tabbar-item3-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
TabbarDemo.el="#root";
new Vue(TabbarDemo);

