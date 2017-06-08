import ImageDemo from '../views/example/image-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
ImageDemo.el="#root";
new Vue(ImageDemo);

