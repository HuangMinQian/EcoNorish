import { createRouter, createWebHistory } from "vue-router";
// import { useStore } from "vuex";
import Home from "./../views/Home.vue";
import Knowledge from "./../views/Knowledge.vue";
import News from "./../views/News.vue";
import LifeStyle from "./../views/LifeStyle.vue";
import Action from "./../views/Action.vue";
import Resources from "./../views/Resources.vue";
import store from "../store";

const Join = () => import("./../views/Join.vue"); // 异步路由：首屏不加载

const routes = [ // 路由规则：路径path、名称name和对应的Vue组件component
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/knowledge",
    name: "Knowledge",
    component: Knowledge
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/lifeStyle",
    name: "LifeStyle",
    component: LifeStyle
  },
  {
    path: "/action",
    name: "Action",
    component: Action
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources
  },
  {
    path: "/join",
    name: "Join",
    component: Join
  }
];

const router = createRouter({ // 创建router对象，需要传入一个包含history和routes属性配置对象，createWebHistory()创建基于浏览器历史的路由模式对象
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => { // 全局前置守卫：在每次路由跳转前执行，记录下即将访问的路由路径
  store.commit("setTagView", to.path);
  next();
});

export default router;
