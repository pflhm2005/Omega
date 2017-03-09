//引入一个简单的vue组件
import index from '../vue/index.vue';
import user from '../vue/user.vue';
import teacher from '../vue/teacher.vue';
import task_add from '../vue/task_add.vue';
import building from '../vue/building.vue';

//生成一个路由实例
const router = new VueRouter({
    //路径配置
    routes: [
        { path: '/fn1', component: index },
        { path: '/fn2', component: user },
        { path: '/fn3', component: teacher },
        {
            path: '/fn4',
            component: { template: '<router-view></router-view>' },
            children: [
                { path: "", component: building },
                { path: "1", component: task_add },
                { path: "2", component: building },
                { path: "3", component: building },
                { path: "4", component: building },
            ]
        },
    ]
});

Vue.directive('tel', {
    update: function(el) {
        el.onblur = function() {
            console.log(el.value);
        }
    }
});

//挂载到对应DOM节点 并传入路由
new Vue({
    el: "#box",
    router,
    data: {
        index: 0,
    },
    methods: {
        //侧边栏的下拉滑动
        task_slide: function() {
            this.aside_toggle('#task-ul');
        },
        setting_slide: function() {
            this.aside_toggle('#setting');
        },
        aside_toggle: function(str) {
            var ele = _.el(str),
                eles = ele.children,
                len = eles.length,
                height = parseInt(window.getComputedStyle(eles[0]).height);
            ele.style.height = window.getComputedStyle(ele).height === '0px' ? (height * len + 'px') : 0;
        },
        //点击变色
        active: function() {
            var nav = _.el('.nav a'),
                len = nav.length;
            for (var i = 0; i < len; i++) {
                nav[i].style = '';
            }
            //小BUG
            if (event.target.tagName === 'A') {
                event.target.style = 'background-color: #243443;color:white;';
            }
        },
        //测试事件使用
        test: function() {
            console.log('get');
        }
    },
    created() {

    }
});