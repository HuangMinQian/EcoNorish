
<template>
  <Title color="green"></Title>
  <div class="swiper">
    <el-carousel height="300px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
  import Title from "../components/Title.vue";
  import { ref } from "vue";

  const imgList = ref([
    "https://copyright.bdstatic.com/vcg/creative/1434d89b9eca5356a80fc06124ef6c50.jpg@h_1280",
    "https://pic.rmb.bdstatic.com/bjh/gallery/53af0c98ac1c0ae666f270c31ff95bd24306.jpeg",
    "https://img1.baidu.com/it/u=3775719125,2876837394&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
    "https://img2.baidu.com/it/u=855369075,175194576&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
  ]);
</script>

<style scoped>
  .swiper {
    width: 800px;
  }
  .swiper img {
    width: 100%;
    height: 100%;
  }
</style>
