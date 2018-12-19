import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/home.vue'], resolve),
            meta: {
                title: '首页'
            },
            children: [{
                    path: '/page1',
                    component: resolve => require(['../components/page/page1.vue'], resolve),
                    meta: {
                        title: '页面1'
                    }
                },
                {
                    path: '/page2',
                    component: resolve => require(['../components/page/page2.vue'], resolve),
                    meta: {
                        title: '页面2'
                    }
                }, {
                    path: '/page3',
                    component: resolve => require(['../components/page/page3.vue'], resolve),
                    meta: {
                        title: '页面3'
                    }
                }
                , {
                    path: '/page4',
                    component: resolve => require(['../components/page/page4.vue'], resolve),
                    meta: {
                        title: '页面4'
                    }
                }
            ]

        }
    ]
})