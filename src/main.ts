import { createApp } from 'vue'
import App from './App.vue'
 
//routes
import router from "./routes/index"; 
 
const app= createApp(App)

//pinia
import { createPinia } from 'pinia';
const pinia = createPinia()

app.use(pinia)
 
//routes 
app.use(router)  
app.mount('#app')