<template>
  <div class="page">
    <div class="login-form">
      <h4>用户登录</h4>
      <div class="form-item">
        <label for="">用户名</label>
        <input type="text" v-model="loginForm.username" placeholder="用户名" autocomplete="off" />
      </div>
      <div class="form-item">
        <label for="">密码</label>
        <input type="password" v-model="loginForm.password" placeholder="密码" autocomplete="off" />
      </div>
      <div class="form-item">
        <div class="btn" @click="handleLogin">登录</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  const store = useStore();
  const router = useRouter();

  const loginForm = ref({
    username: "",
    password: ""
  });

  const handleLogin = () => {
    if (!loginForm.value.username || !loginForm.value.password) {
      return alert("请输入用户名或密码");
    }
    if (loginForm.value.username !== "admin" && loginForm.value.password !== "123456") {
      return alert("用户名或密码错误");
    }
    store.commit("setUsername", loginForm.value.username);
    router.push("/");
  };
</script>

<style scoped>
  .page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  label {
    width: 120px;
    margin-right: 20px;
    text-align: right;
  }
  input {
    width: 600px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .btn {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    border: none;
    border-radius: 4px;
    background-color: rgb(70, 147, 214);
    color: white;
    cursor: pointer;
  }
</style>
