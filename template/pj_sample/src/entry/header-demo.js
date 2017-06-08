import HeaderDemo from '../views/example/header-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
HeaderDemo.el="#root";
new Vue(HeaderDemo);

