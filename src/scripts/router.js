import Login from "@/Pages/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostCreate from "@/Pages/PostCreate.vue";
import PostList from "@/Pages/PostList.vue";
import Home from "@/Pages/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path : "/post-list", component: PostList},
    { path: "/create-post", component: PostCreate },
    { path: "/login" , component: Login },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;