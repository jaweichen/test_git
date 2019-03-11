//import "./style.css"


import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';

import index from './views/index.vue';
import about from './views/about.vue';
import user from './views/user.vue';

Vue.use(VueRouter);

const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/index',
            meta:{
              title:'首頁'
            },
            component:index//(resolve)=>require(['./views/index.vue'],resolve)

        },
        {
            path:'/about',
            meta:{
              title:'關於'
            },
            component:about//(resolve)=>require(['./views/about.vue'],resolve)
        },
       
        {
            path:'/user/:id',
            meta:{
               title:'個人首頁'
            },
            component:user//(resolve)=>require(['./views/user.vue'],resolve)
        },
        //這個要放在最後面,不然在他後面的都會直接跳回/index
        {
            path:"*",
            redirect:'/index'
        }
    ]
})

router.beforeEach((to,from,next)=>{
    window.document.title=to.meta.title;
    next();

})




new Vue({
    el:"#app",
    router,
    render:h => h(App)
});

