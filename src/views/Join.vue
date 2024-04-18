<template>
  <Title color="green"></Title>
  <div class="join-us-container">
    <h1>加入我们</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">姓名：</label>
        <input id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="age">年龄：</label>
        <select id="age" v-model="age">
          <option disabled value="">请选择年龄</option>
          <option v-for="n in 23" :key="n" :value="n + 17">{{ n + 17 }}</option>
        </select>
      </div>
      <div class="form-group">
        <span>希望投入的环境保护领域:</span>
        <div v-for="field in fields" :key="field">
          <input type="checkbox" :id="field" :value="field" v-model="selectedFields" />
          <label :for="field">{{ field }}</label>
        </div>
      </div>
      <div>
        <label for="phone">联系方式(手机号)：</label>
        <input id="phone" v-model="phone" @blur="validatePhone" required />
        <div class="error-message" v-if="phoneError">{{ phoneError }}</div>
      </div>
      <button type="submit">提交</button>
    </form>
    <div v-if="submitted" class="thank-you-message">
      感谢您的参与！<br>(3秒后自动回到首页)
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Title from "../components/Title.vue";

const name = ref('');
const age = ref('');
const fields = [
  '清洁能源',
  '可持续农业',
  '环境教育',
  '海洋保护',
  '气候变化',
  '野生动物保护',
];
const selectedFields = ref([]);

const submitted = ref(false);
const router = useRouter();

const phone = ref('');
const phoneError = ref('');
const isFormValid = ref(false);

// 正则表达式用于校验中国大陆手机号
const phoneRegex = /^1[3-9]\d{9}$/;

const validatePhone = () => {
  if (!phoneRegex.test(phone.value)) {
    phoneError.value = '请输入有效的手机号码';
    isFormValid.value = false;
  } else {
    phoneError.value = '';
    isFormValid.value = true;
  }
};


const submitForm = () => {
  console.log({
    name: name.value,
    age: age.value,
    selectedFields: selectedFields.value,
    phone: phone.value,
  });
  validatePhone();
  if (!isFormValid.value) return;
  submitted.value = true;
  setTimeout(() => {
    router.push('/');
  }, 3000);
};
</script>

<style scoped></style>
