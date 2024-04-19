import Login from "@/Pages/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostCreate from "@/Pages/PostCreate.vue";
import PostList from "@/Pages/PostList.vue";
import Home from "@/Pages/Home.vue";
import Cart from "@/Pages/Cart.vue";
import modal from "@/components/modal.vue";

const routes = [
    { path: "/", component: Home },
    { path : "/post-list", component: PostList},
    { path: "/create-post", component: PostCreate },
    { path: "/login" , component: Login },
    { path: "/cart" , component: Cart},
    { path: "/modal" , component: modal},


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;