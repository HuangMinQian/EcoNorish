<template>
  <div class="home">
    <Title></Title>
    <header>
      <h1>EcoNourish</h1>
      <h2>前端Vue 3 + Vite 搭建的环境保护教育平台</h2>
      <h2>2022级xxx</h2>
    </header>

    <nav>
      <ul>
        <li>
          <router-link to="/knowledge">环保知识</router-link>
        </li>
        <li>
          <router-link to="/news">新闻更新</router-link>
        </li>
        <li>
          <router-link to="/lifestyle">绿色生活</router-link>
        </li>
        <li>
          <router-link to="/action">社区行动</router-link>
        </li>
        <li>
          <router-link to="/resources">资源下载</router-link>
        </li>
        <li>
          <router-link to="/join">加入我们</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Title from "../components/Title.vue"; // 组件的引入、组件属性的绑定
</script>
<style>
</style>
