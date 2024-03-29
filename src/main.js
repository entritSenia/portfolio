import { createApp } from 'vue'
import App from './App.vue'
import './../public/js/main.js'

// router
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
