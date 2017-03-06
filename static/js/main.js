//引入一个简单的vue组件
import index from '../vue/index.vue';
import user from '../vue/user.vue';
import teacher from '../vue/teacher.vue';

//生成一个路由实例
const router = new VueRouter({
    //路径配置
    routes: [
        { path: '/fn1', component: index },
        { path: '/fn2', component: user },
        { path: '/fn3', component: teacher },
    ]
});

//挂载到对应DOM节点 并传入路由
new Vue({
    el: "#box",
    router
});