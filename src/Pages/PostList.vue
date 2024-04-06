<template>
  <div class ="home">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">중고 마켓</h1>
          <p class="lead text-body-secondary">집에 있는 안쓰는 물건 <br> 필요한 물건 <br> 추가 : 결제방식,판매 구매 구분, 할인  </p>
          <p>
            <a href="/create-post" class="btn btn-primary my-2"> 글쓰기 [create] </a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <div class="col" v-for= "(item, index) in state.items" :key="index">
            <Card :item="item"/>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Card from "@/components/card.vue";
import axios from "axios";
import {reactive} from "vue";

export default {
  name: "Home",
  components: {Card},
  setup() {
    const state = reactive({
      items : []
    })

    axios.get("/api/items").then((res) => {
      state.items = res.data;
    })

    return {state}
  }
}
</script>

<style scoped>

</style>
