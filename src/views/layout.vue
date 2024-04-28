<template>
  <el-container>
    <el-header>
      <Title></Title>
    </el-header>
    <el-container>
      <el-aside width="150px">
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
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      <footer class="footer">2022级教育技术学（师范）1班 黄敏倩</footer>
    </el-footer>
  </el-container>
</template>

<script setup>
  // setup语法糖：直接在<script>中声明组件的响应式逻辑和生命周期等，无需`export default`导出对象
  import { computed } from "vue";
  import Title from "../components/Title.vue"; // 组件封装
  import { useStore } from "vuex";

  const store = useStore(); // 访问这个Vuex store实例，访问或更改状态、提交mutation或调用actions

  const tagViews = store.getters.tagViews;

  const isClickRouter = computed(() => {
    // 响应式计算属性：基于响应式依赖进行缓存的。只有在相关响应式依赖发生改变时，计算属性才会重新求值，
    return (routePath) => tagViews.indexOf(routePath) !== -1;
  });
</script>
<style>
  /* 动态样式绑定：在模板中绑定 HTML 类。当需要根据组件的状态动态更改元素的类时，可以使用v-bind指令的对象语法或数组语法来实现。 */
  .cache-view {
    color: rgba(255, 0, 0, 0.507);
  }
  .el-header {
    border-bottom: 1px solid #ccc;
  }
  .el-container {
    height: 100%;
  }
  .el-footer {
    border-top: 1px solid #ccc;
    text-align: center;
    line-height: 59px;
  }
  .el-aside {
    height: 100%;
    padding: 0 10px;
    border-right: 1px solid #ccc;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
  }
  li:hover {
    background-color: #f8f8f8;
  }
</style>
