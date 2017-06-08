import LazyRenderDemo from '../views/example/lazy-render-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
LazyRenderDemo.el="#root";
new Vue(Vue.util.extend({ el: '#root'}, LazyRenderDemo));



