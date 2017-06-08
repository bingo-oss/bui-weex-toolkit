import DialogDemo from '../views/example/dialog-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
DialogDemo.el="#root";
new Vue(Vue.util.extend({ el: '#root'}, DialogDemo));



