<template>
  <Title color="green"></Title>
  <div class="grid">
    <div class="grid-item" v-for="item in gridList" :key="item.id" @click="handleOpenDialog(item)">
      <img :src="item.img" alt="" />
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import Title from "../components/Title.vue";
import { ref } from "vue";
const gridList = ref([
  {
    id: 1,
    img: "http://paper.people.com.cn/rmrb/images/1/20240425/1713993121991_1.jpg",
    name: "郑和公园内树龄600多年的紫藤进入盛花期",
    url: "http://env.people.com.cn/n1/2024/0425/c1010-40223294.html",
  },
  {
    id: 2,
    img: "http://paper.people.com.cn/rmrbhwb/images/2024-04/24/05/rmrbhwb2024042405p22_b.jpg",
    name: "地处毛乌素沙漠边缘的宁夏回族自治区灵武市白芨滩国家级自然保护区。",
    url: "http://env.people.com.cn/n1/2024/0424/c1010-40222257.html",
  },
  {
    id: 3,
    img: "http://finance.people.com.cn/NMediaFile/2024/0422/MAIN1713748768792JUMEE4G541.png",
    name: "从“捡塑”到“减塑” 循环经济激发绿色动能",
    url: "http://finance.people.com.cn/n1/2024/0422/c1004-40220870.html",
  },
  {
    id: 4,
    img: "http://paper.people.com.cn/rmrbhwb/images/2024-04/22/06/rmrbhwb2024042206p21_b.jpg",
    name: "污水处理厂“变身”湿地公园（侨乡新貌）",
    url: "http://env.people.com.cn/n1/2024/0422/c1010-40220668.html",
  },  
  {
    id: 5,
    img: "http://paper.people.com.cn/rmrb/images/1/20240422/1713733338010_1.jpg",
    name: "共同守护美丽地球家园",
    url: "http://env.people.com.cn/n1/2024/0422/c1010-40220400.html",
  },
]);

const handleOpenDialog = (item) => {
  window.open(item.url, '_blank');
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
