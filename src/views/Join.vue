<template>
  <Title color="green"></Title>
  <el-form ref="ruleFormRef" style="max-width: 600px" :model="sizeForm" label-width="auto" label-position="right"
    size="large" :rules="rules">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="sizeForm.name" placeholder="请输入姓名" />
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-select v-model="sizeForm.age" placeholder="请选择您的年龄">
        <el-option v-for="n in 23" :key="n" :value="n + 17">{{ n + 17 }}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="你希望投身的领域" prop="fields">
      <el-checkbox-group v-model="sizeForm.fields">
        <el-checkbox value="clean" name="fields">
          清洁能源
        </el-checkbox>
        <el-checkbox value="ocean" name="fields">
          海洋保护
        </el-checkbox>
        <el-checkbox value="climate" name="fields">
          气候变化
        </el-checkbox>
        <el-checkbox value="animal" name="fields">
          野生动物保护
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="联系方式" prop="phone">
      <el-input v-model="sizeForm.phone" placeholder="请输入手机号" />
      <div class="error-message" v-if="phoneError">{{ phoneError }}</div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(ruleFormRef)">提交</el-button>
    </el-form-item>
  </el-form>
  <div v-if="submitted" class="thank-you-message">
    感谢您的参与！<br>(3秒后自动回到首页)
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Title from "../components/Title.vue";
import type { FormInstance, FormRules } from 'element-plus'
interface RuleForm {
  name: string
  age: string
  fields: string[]
  phone: string
}
const ruleFormRef = ref<FormInstance>()
const sizeForm = ref({
  name: null,
  age: null,
  fields: [],
  phone: null,
})
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  age: [
    {
      required: true,
      message: '请输入年纪',
      trigger: 'change',
    },
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'change',
    },
  ],
})
const phoneError = ref('');
const submitted = ref(false);
const router = useRouter();
const onSubmit = async (formEl: FormInstance | undefined) => {
  console.log(sizeForm.value);
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      submitted.value = true;
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style>
.el-radio-group {
  margin-right: 12px;
}
</style>
