import WebviewDemo from '../views/example/webview-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
WebviewDemo.el="#root";
new Vue(WebviewDemo);

