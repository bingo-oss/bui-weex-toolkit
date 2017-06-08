import FlexBoxDemo from '../views/example/flex-box-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
FlexBoxDemo.el="#root";
new Vue(Vue.util.extend({ el: '#root'}, FlexBoxDemo));



