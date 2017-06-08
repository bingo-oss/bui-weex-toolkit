import PanelDemo from '../views/example/panel-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
PanelDemo.el="#root";
new Vue(PanelDemo);

