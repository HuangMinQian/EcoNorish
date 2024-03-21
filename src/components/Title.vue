<template>
    <h3 :style="{ color: textColor }">EcoNourish</h3>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  
  const props = defineProps({
    color: {
      type: String,
      default: '#000',
    },
  });
  
  const textColor = ref(props.color);
  
  watchEffect(() => {
    textColor.value = props.color;
  });
  </script>
  
  <style scoped>
  h3 {
    position: fixed;
    right: 20px;
    top: 0;
  }
  </style>