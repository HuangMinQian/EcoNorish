<template>
  <Title color="green"></Title>
  <div class="forum-list">
    <div class="forum-item" v-for="item in forumList" :key="item.id" @click="handleClickNum(item)">
      <div class="content">{{ item.content }}</div>
      <div class="click-num">
        <el-icon><Star /></el-icon>
        <span style="margin-left: 10px">{{ item.clickNum }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Title from "../components/Title.vue";
  import { ref } from "vue";
  import { Star } from "@element-plus/icons-vue";

  const forumList = ref([
    {
      id: 1,
      content: "论坛1",
      clickNum: 0
    },
    {
      id: 2,
      content: "论坛2",
      clickNum: 9
    },
    {
      id: 3,
      content: "论坛3",
      clickNum: 0
    },
    {
      id: 4,
      content: "论坛4",
      clickNum: 0
    },
    {
      id: 5,
      content: "论坛5",
      clickNum: 0
    },
    {
      id: 6,
      content: "论坛5",
      clickNum: 0
    },  
    {
      id: 7,
      content: "论坛5",
      clickNum: 0
    },
    {
      id: 8,
      content: "论坛5",
      clickNum: 0
    },
    {
      id: 9,
      content: "论坛5",
      clickNum: 0
    },
    {
      id: 10,
      content: "论坛5",
      clickNum: 0
    },
    {
      id: 11,
      content: "论坛11",
      clickNum: 0
    }
  ]);

  const handleClickNum = (item) => {
    item.clickNum++;
  };
</script>

<style scoped>
  .forum-list {
    background-color: #f7f7f7;
    width: 800px;
    padding: 10px;
  }
  .forum-item {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    text-align: left;
    margin-bottom: 10px;
  }
  .forum-item:last-child {
    margin-bottom: 0;
  }
  .click-num {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }
</style>
