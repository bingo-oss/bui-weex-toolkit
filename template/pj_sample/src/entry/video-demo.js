import VideoDemo from '../views/example/video-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
VideoDemo.el="#root";
new Vue(VideoDemo);

