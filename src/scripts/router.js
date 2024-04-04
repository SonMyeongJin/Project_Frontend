import Home from "@/Pages/Home.vue";
import CreatePost from "@/Pages/CreatePost.vue";
import Login from "@/Pages/Login.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/create-post", component: CreatePost },
    { path: "/login" , component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;