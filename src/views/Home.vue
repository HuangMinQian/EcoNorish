<template>
  <div class="home">
    <Title></Title>
    <header>
      <h1>EcoNourish</h1>
      <h2>前端Vue 3 + Vite 搭建的环境保护教育平台</h2>
      <h2>2022级 黄敏倩</h2>
    </header>

    <nav>
      <ul>
        <li>
          <router-link to="/knowledge" :class="isClickRouter('/knowledge') ? 'cache-view' : ''">环保知识</router-link>
        </li>
        <li>
          <router-link to="/news" :class="isClickRouter('/news') ? 'cache-view' : ''">新闻更新</router-link>
        </li>
        <li>
          <router-link to="/lifestyle" :class="isClickRouter('/lifestyle') ? 'cache-view' : ''">绿色生活</router-link>
        </li>
        <li>
          <router-link to="/action" :class="isClickRouter('/action') ? 'cache-view' : ''">社区行动</router-link>
        </li>
        <li>
          <router-link to="/resources" :class="isClickRouter('/resources') ? 'cache-view' : ''">资源下载</router-link>
        </li>
        <li>
          <router-link to="/join" :class="isClickRouter('/join') ? 'cache-view' : ''">加入我们</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Title from "../components/Title.vue"; // 组件的引入、组件属性的绑定
import { useStore } from "vuex";

const store = useStore();

const tagViews = store.getters.tagViews;

const isClickRouter = computed(() => {
  return (routePath) => tagViews.indexOf(routePath) !== -1;
});
</script>
<style>
.cache-view {
  color: rgba(255, 0, 0, 0.507);
}
</style>
