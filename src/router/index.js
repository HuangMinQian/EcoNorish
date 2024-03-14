import { createRouter, createWebHistory } from 'vue-router';
import Home from './../views/Home.vue';
import Knowledge from './../views/Knowledge.vue';
import News from './../views/News.vue';
import LifeStyle from './../views/LifeStyle.vue';
import Action from './../views/Action.vue';
import Resources from './../views/Resources.vue';
import Join from './../views/Join.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/knowledge',
        name: 'Knowledge',
        component: Knowledge
    },    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/lifeStyle',
        name: 'LifeStyle',
        component: LifeStyle
    },
    {
        path: '/action',
        name: 'Action',
        component: Action
    },
    {
        path: '/resources',
        name: 'Resources',
        component: Resources
    },
    {
        path: '/join',
        name: 'Join',
        component: Join
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
