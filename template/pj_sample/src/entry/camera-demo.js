import CameraDemo from '../views/example/camera-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
CameraDemo.el="#root";
new Vue(CameraDemo);

