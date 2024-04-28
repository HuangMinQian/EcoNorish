<template>
  <Title color="green"></Title>
  <div class="quiz-container">
    <div v-if="!isSubmitted">
      <!-- v-if和v-else根据isSubmitted切换显示问题和答案提交按钮与显示得分和重试按钮 -->
      <div v-for="(question, index) in questions" :key="index">
        <h3>{{ question.text }}</h3>
        <!-- 模版字符串 -->
        <div v-for="(choice, i) in question.choices" :key="`c-${i}`">
          <!-- v-model和v-for建立了每个问题答案与answers数组的特定索引之间的双向数据绑定，选择的答案可以自动更新到相应索引的answers数组中 -->
          <input :type="question.type" :name="question.name" :value="choice" v-model="answers[index]" />
          <label>{{ choice }}</label>
        </div>
      </div>
      <button @click="submitAnswers">提交</button>
    </div>
    <div v-else>
      <!-- 响应式展示成绩 -->
      <h2>你的成绩是: {{ score }}/{{ questions.length }}</h2>
      <button @click="retryQuiz">再做一次</button>
      <button @click="goToHome">回到首页</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Title from "../components/Title.vue";

const questions = [
  {
    text: '地球的哪层大气负责阻挡大部分紫外线?',
    choices: ['对流层', '臭氧层', '平流层', '外层空间'],
    type: 'radio',
    name: 'question1',
    correct: '臭氧层',
  },
  {
    text: '下列哪种行为对环境最有益?',
    choices: ['开车上班', '使用一次性塑料', '植树', '抛弃垃圾'],
    type: 'radio',
    name: 'question2',
    correct: '植树',
  },
];
const answers = ref(questions.map(() => null));
const score = ref(0);
const isSubmitted = ref(false);
const calculateScore = () => { // reduce通过迭代每个问题并比较用户选择的答案和正确答案，计算得分
  score.value = questions.reduce((currentScore, question, index) => {
    const answer = answers.value[index];
    if (answer === question.correct) {
      return currentScore + 1;
    }
    return currentScore;
  }, 0);
};
const submitAnswers = () => {
  calculateScore();
  isSubmitted.value = true;
};
const retryQuiz = () => { // 初始化答案数组answers，为每个问题分配一个初始值null
  answers.value = questions.map(() => null);
  isSubmitted.value = false;
  score.value = 0;
};
const router = useRouter();
const goToHome = () => {
  router.push('/'); // 编程式导航示例，重定向至首页
};
</script>
<style scoped></style>