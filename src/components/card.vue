<template>
  <div class="card shadow-sm">

    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

    <div class="card-body">
      <p class="card-text">{{ item.title }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">

          <button type="button" class="btn btn-sm btn-outline-secondary" @click="viewDetail">view detail</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" @click="addToCart(item.id)">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>

        <small class="text-body-secondary">{{item.name}}</small>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Card",
  props:{
    item : Object
  },
  setup() {
    const addToCart = (itemId) => {
      axios.post(`/api/cart/items/${itemId}`).then(() => {
        console.log("성공");
      });
    };

    return {addToCart}
  },
  methods: {
    viewDetail() {
      this.$emit('view-detail', this.item)
    }
  }
}

</script>

<style scoped>

</style>