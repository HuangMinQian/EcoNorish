<template>
  <Title color="green"></Title>
  <div class="quiz-container">
    <div v-if="!isSubmitted">
      <div v-for="(question, index) in questions" :key="index">
        <h3>{{ question.text }}</h3>
        <div v-for="(choice, i) in question.choices" :key="`c-${i}`">
          <input :type="question.type" :name="question.name" :value="choice" v-model="answers[index]" />
          <label>{{ choice }}</label>
        </div>
      </div>
      <button @click="submitAnswers">提交</button>
    </div>

    <div v-else>
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
const calculateScore = () => {
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
const retryQuiz = () => {
  answers.value = questions.map(() => null);
  isSubmitted.value = false;
  score.value = 0;
};
const router = useRouter();
const goToHome = () => {
  router.push('/');
};
</script>
<style scoped></style>