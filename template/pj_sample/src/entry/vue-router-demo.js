import VueRouterDemo from '../views/example/vue-router-demo.vue'
import mixins from '../js/mixins.js'

//导入vue-router模块
import vueRouter from "vue-router"

//调用vue.use
Vue.use(vueRouter);

//创建 router 实例, 然后传 `routes` 配置
var router = new vueRouter({
    routes: [
        { path: '/index', name: 'index',  component: require("../views/example/tabbar-item1-demo.vue")  },
        { path: '/product', name: 'product',  component: require("../views/example/tabbar-item2-demo.vue")  },
        { path: '/news', name: 'news',  component: require("../views/example/tabbar-item3-demo.vue")  }

    ]
});

Vue.mixin(mixins);
VueRouterDemo.el="#root";

//创建和挂载根实例, 通过 router 配置参数注入路由
VueRouterDemo.router = router;
new Vue(VueRouterDemo);
router.push('/index');

