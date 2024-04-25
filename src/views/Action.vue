<template>
  <Title color="green"></Title>
  <div class="forum-list">
    <div class="forum-item" v-for="item in forumList" :key="item.id" @click="handleClickNum(item)">
      <div class="left-side">
        <div class="item-id">{{ item.username }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
      <div class="right-side">
        <el-icon><Star /></el-icon>
        <span class="click-num">{{ item.clickNum }}</span>
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
    username: "赵阳光",
    content: "绿色环保，美好家园",
    clickNum: 25
  },
  {
    id: 2,
    username: "王有才",
    content: "节约用水，从我做起",
    clickNum: 18
  },
  {
    id: 3,
    username: "李晓明",
    content: "关爱动物，就是关爱我们自己",
    clickNum: 30
  },
  {
    id: 4,
    username: "刘一飞",
    content: "清洁能源，洁净未来",
    clickNum: 22
  },
  {
    id: 5,
    username: "孙悟空",
    content: "蓝天保卫战，我们在行动",
    clickNum: 14
  },
  {
    id: 6,
    username: "周小川",
    content: "垃圾分类，环境优先",
    clickNum: 19
  },
  {
    id: 7,
    username: "吴朝旭",
    content: "保持空气清新，人人有责",
    clickNum: 17
  },
  {
    id: 8,
    username: "陈天启",
    content: "少开一次车，多种一棵树",
    clickNum: 16
  },
  {
    id: 9,
    username: "林彤",
    content: "节能减排，绿色发展",
    clickNum: 21
  },
  {
    id: 10,
    username: "何光远",
    content: "减少塑料使用，拯救海洋生命",
    clickNum: 24
  },
  {
    id: 11,
    username: "姚心怡",
    content: "环保出行，拥抱自然",
    clickNum: 15
  },
  {
    id: 12,
    username: "钟离",
    content: "资源循环利用，让地球更健康",
    clickNum: 26
  },
  {
    id: 13,
    username: "马超群",
    content: "绿色食品，健康生活",
    clickNum: 20
  },
  {
    id: 14,
    username: "苏轼",
    content: "珍惜水资源，保护水环境",
    clickNum: 23
  },
  {
    id: 15,
    username: "辛弃疾",
    content: "每天一小时，地球熄灯行动",
    clickNum: 12
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
  padding: 10px;
  border-radius: 10px;
  text-align: left;
  margin-bottom: 10px;
  display: flex;
  background-color: white;
}
.forum-item:last-child {
  margin-bottom: 0;
}
.left-side {
  flex-grow: 1;
}
.item-id {
  font-weight: bold;
}
.content {
  margin-top: 4px;
}
.right-side {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  min-width: 100px;
  justify-content: center;
}
.click-num {
  margin-left: 10px;
  cursor: pointer;
}
</style>