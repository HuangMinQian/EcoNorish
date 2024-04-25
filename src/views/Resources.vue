<template>
  <Title color="green"></Title>
  <div class="file-list">
    <div class="file-item" v-for="(file, index) in fileList" :key="index">
      <a class="file-link" :href="file.url" target="_blank" :download="file.name">{{ file.name }}</a>
    </div>
  </div>
</template>

<script setup>
  import Title from "../components/Title.vue";
  import { ref } from "vue";
  const fileList = ref([
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
