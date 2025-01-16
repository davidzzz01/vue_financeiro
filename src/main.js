import { createApp } from 'vue';  // Certifique-se de que está importando de 'vue'
import router from './router';
import App from './App.vue';


const app = createApp(App);
app.use(router);

app.config.globalProperties.$formatDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR', formatOptions).format(date);
};



app.mount('#app');
