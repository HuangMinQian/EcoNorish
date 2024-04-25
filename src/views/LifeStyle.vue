<template>
  <Title color="green"></Title>
  <div class="grid">
    <div class="grid-item" v-for="(item, index) in gridList" :key="index" @click="handleOpenDialog">
      <img :src="item.img" alt="" />
      {{ item.name }}
    </div>
  </div>
  <el-dialog v-model="show" title="弹窗" @close="show = false">
    <div>弹窗内容</div>
  </el-dialog>
</template>

<script setup>
  import Title from "../components/Title.vue";
  import { ref } from "vue";
  const gridList = ref([
    {
      img: "https://copyright.bdstatic.com/vcg/creative/1434d89b9eca5356a80fc06124ef6c50.jpg@h_1280",
      name: "1212123123"
    },
    {
      img: "https://copyright.bdstatic.com/vcg/creative/1434d89b9eca5356a80fc06124ef6c50.jpg@h_1280",
      name: "1212123123"
    },
    {
      img: "https://copyright.bdstatic.com/vcg/creative/1434d89b9eca5356a80fc06124ef6c50.jpg@h_1280",
      name: "1212123123"
    }
  ]);
  const show = ref(false);

  const handleOpenDialog = () => {
    show.value = true;
  };
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .grid-item {
    height: 300px;
    padding: 10px;
  }
  .grid-item img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }
</style>
