<template>
  <Title color="green"></Title>
  <div class="file-list">
    <div class="file-item" v-for="(file, index) in fileList" :key="index">
      <!-- 动态绑定超链接 -->
      <!-- target="_blank属性在当前页面查看文档 -->
      <!-- 提供文档的下载 -->
      <a class="file-link" :href="file.url" target="_blank" :download="file.name">{{ file.name }}</a>
    </div>
  </div>
</template>

<script setup>
  import Title from "../components/Title.vue";
  import { ref } from "vue";
  const fileList = ref([ // 文件列表以响应式数据的形式维护，每个对象name和url属性，可供下载
    {
      name: "守护绿色家园.pdf",
      url: "http://www.doe.zju.edu.cn/_upload/article/files/a0/22/595bdc2b4ca28f90f51ca3b3ffc5/45c3e922-550f-45a2-8602-64b9c202b33e.pdf"
    },
    {
      name: "志愿者报名信息.pdf",
      url: "http://www.doe.zju.edu.cn/_upload/article/files/a0/22/595bdc2b4ca28f90f51ca3b3ffc5/45c3e922-550f-45a2-8602-64b9c202b33e.pdf"
    },
    {
      name: "活动类目.pdf",
      url: "http://www.doe.zju.edu.cn/_upload/article/files/a0/22/595bdc2b4ca28f90f51ca3b3ffc5/45c3e922-550f-45a2-8602-64b9c202b33e.pdf"
    }
  ]);
</script>

<style scoped>
.file-item {
  margin-bottom: 0.5em;
}

.file-link {
  text-decoration: underline;
  color: blue;
}
</style>
