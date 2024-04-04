<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">로그인</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
  </main>
</template>

<script>
export default {

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