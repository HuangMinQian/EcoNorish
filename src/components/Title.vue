<template>
  <router-link to="/">
    <!-- 内联样式动态绑定 -->
    <h3 :style="{ color: textColor }">EcoNourish</h3>
  </router-link>
  </template>
  
<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({ // 定义了一个组件的color属性，并将其默认值设为黑色
  color: {
    type: String,
    default: '#000',
  },
});

const textColor = ref(props.color);

watchEffect(() => { // 监听响应式引用和计算属性的变化，并在依赖的响应式数据变动时自动执行传入的回调函数
  textColor.value = props.color;
});
</script>
  
  <style scoped>
/* 标记为scoped的<style>标签内的css属性不会泄露到外部全局作用域，防止样式冲突和污染，通过限制样式的作用域，增加组件样式的封装性 */
  h3 {
    cursor: pointer;
    position: fixed;
    right: 20px;
    top: 0;
  }
  </style>