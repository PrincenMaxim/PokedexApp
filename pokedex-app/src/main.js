import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import CardBox from "./components/global-components/CardBox.vue"
import StandardView from "./components/overview-components/StandardView.vue"
import ErrorView from "./components/overview-components/ErrorView.vue"

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: StandardView},
        { path: '/:notFound(.*)', component: ErrorView},
        
    ]
});

app.component('card-box', CardBox);

app.use(router);

app.mount('#app')
