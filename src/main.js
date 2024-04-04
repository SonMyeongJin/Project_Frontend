import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/Pages/Home.vue";
import CreatePost from "@/Pages/CreatePost.vue";
import Login from "@/Pages/Login.vue";


// 라우터 설정
const routes = [
    { path: "/", component: Home },
    { path: "/create-post", component: CreatePost },
    { path: "/login" , component: Login }
];

// 라우터 인스턴스 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 앱 생성 및 마운트, 라우터 연결
createApp(App).use(router).mount('#app');