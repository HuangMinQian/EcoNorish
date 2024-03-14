<template>
  <div class="home">
    <header>
      <h1>EcoNourish</h1>
      <h2>前端Vue 3 + Vite 搭建的环境保护教育平台</h2>
      <h2>2022级教育技术学（师范）1班黄敏倩</h2>
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
    <div>
      <span>请输入您的年龄：</span>
      <input type="text" v-model="age">
      <div>{{ info }}</div>
    </div>
    <div>
      <input type="button" @click="addButton" value="点击之后会出现新的按钮">
      <input v-for="(buttonLabel, index) in buttons" :key="index" type="button" :value="buttonLabel">
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const buttons = ref([]);
const addButton = () => {
  buttons.value.push("新的按钮");
}

const age = ref(18);
const person = {
  name: "徐扑漫",
  sex: "女",
};
const info = computed(() => { //计算属性
  const fullInfo = {
    ...person, // 展开运算符
    ageNum: age.value,
  };
  const { name, sex, ageNum } = fullInfo // 解构
  return `姓名：${name}, 性别：${sex}, 年龄：${ageNum}`; // 模版字符串
});
</script>
<style>
</style>
