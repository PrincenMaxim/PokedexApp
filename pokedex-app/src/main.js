import { createApp } from 'vue'
import App from './App.vue'
import CardBox from "./components/global-components/CardBox.vue";

const app = createApp(App);

app.component('card-box', CardBox)

app.mount('#app')
