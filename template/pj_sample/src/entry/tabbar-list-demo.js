import TabbarListDemo from '../views/example/tabbar-list-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
TabbarListDemo.el="#root";
new Vue(TabbarListDemo);

