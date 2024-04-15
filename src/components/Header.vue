<template>
  <header data-bs-theme="dark">
    <div class="collapse text-bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4> 친구들과 수다떨기용 </h4>
            <p class="text-body-secondary"> 이름 안밝히고 글쓰면 지구끝까지 쫒아감<br>분쟁 발생시 난 관전만 함<br> 중고장터는 사기당해도 내 책임 아님<br> 허위매물 환영 <br>출석체크 1000일 연속하면 100만원<br> 편의성,UI 지적,훈수 언제든 환영 </p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4>Menu</h4>
            <ul class="list-unstyled">
              <li><router-link to="/" class="text-white"> 메인화면 </router-link></li>
              <li>
                <router-link to="/login" class="text-white" v-if="!$store.state.account.id"> 로그인 </router-link>
                <a to="/login" class="text-white" @click = "logout()" v-else > 로그아웃 </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong> 명진마켓 </strong>
        </a>
        <router-link to="/cart" class="cart btn">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import router from "@/scripts/router";
import store from "@/scripts/store";

export default {
  name: 'Header',

  setup() {
    const logout = () => {
      store.commit('setAccount', 0);
      sessionStorage.removeItem("member_id");
      router.push({path: "/"});
    }

    return {logout}
  },
}
</script>
<style scoped>
  header .navbar .cart {
    margin-left: auto;
    color: #fff;
  }
</style>
