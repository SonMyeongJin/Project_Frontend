<template>
  <main class="form-signin w-100 m-auto">
      <h1 class="h3 mb-3 fw-normal">로그인</h1>

      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
               v-model="state.form.name">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
               v-model="state.form.password">
        <label for="floatingPassword">Password</label>
      </div>
      <button class="btn btn-primary w-100 py-2" @click="submit()">Sign in</button>
  </main>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";

export default {
  setup() {
    const state = reactive({
      form: {
        name: "",
        password: ""
      }
    })

    const submit = () => {
      axios.post("/api/login", state.form).then((res) => {
        if (res.data === 0) {
          window.alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
        } else {
          console.log("로그인 성공:", res);
          window.alert("로그인되었습니다.");
        }
      }).catch((error) => {
        console.error("로그인 요청 실패:", error);
        window.alert("로그인 요청 처리 중 오류가 발생했습니다.");
      });
    }

    return {state, submit}
  }
}
</script>

<style scoped>

.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.h3.mb-3.fw-normal {
  text-align: center; /* 로그인 텍스트를 중앙 정렬 */
}
</style>