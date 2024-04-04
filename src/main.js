import { createApp } from 'vue';
import store from '@/scripts/store';
import router from '@/scripts/router'
import App from './App.vue';



// 앱 생성 및 마운트, 라우터 연결
createApp(App).use(store).use(router).mount('#app');