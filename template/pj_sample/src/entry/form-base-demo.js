import FormBaseDemo from '../views/example/form-base-demo.vue';
import mixins from '../js/mixins.js';

Vue.mixin(mixins);
FormBaseDemo.el="#root";
new Vue(FormBaseDemo);

