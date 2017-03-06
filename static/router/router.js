import v from '../vue/index.vue';



//生成一个路由实例
const router = new VueRouter({
    //路径配置
    routes: [
        { path: '/fn1', component: v },
        { path: '/fn2', component: { template: '<div>222</div>' } }
    ]
});

//挂载到对应DOM节点 并传入路由
new Vue({
    router
}).$mount('#box');